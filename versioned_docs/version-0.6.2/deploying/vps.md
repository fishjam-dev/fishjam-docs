# Cloud VPS with cloud-init

We're encouraging you to use VPS as the most customizable option.
In this example, we will show you how to set up a Fishjam media server on [Hetzner Cloud](https://www.hetzner.com/cloud), but you can use these instructions to run Fishjam on VPS from any provider that supports [cloud-init](https://cloud-init.io/) setup.

We're presenting a configuration which uses SSL protocol, as we are aware of the consequences of using unencrypted connections.
That means you're going to need a registered domain but getting one is not a big deal nowadays.

## 1. Creating primary IP

Because configuring a server with _cloud-init_ using our script requires you to have a registered domain pointing at a particular IP address, we divided the process of creating VPS into two parts:
* obtaining dedicated IP address
* configuring the server using _cloud-init_

Let's start with the first one.
In Hetzner's project site go to the section ___Primary IPs___ then click ___Create Primary IP___ button.
Choose a data center location for your server and select __IPv4__ protocol.
You can also name that IP if you'd like.

## 2. Registering Domain

We'll not suggest you to use a specific domain provider, maybe you've got one chosen so we'll describe this step without details that may be different among providers.
If you'd like, [you can use Hetzner as well to register a domain](https://www.hetzner.com/domainregistration).

After registering your domain go to the DNS Records Table of your provider and create an __A__ record pointing to the __IP__ you've created in the previous step.
## 3. Choosing the right VPS

Now let's go back to the Hetzner project site.
It's time to choose and configure a server for Fishjam.

Although Fishjam doesn't have minimum requirements to work, we encourage you to choose a middle-sized VPS (at least 8 cores) as media processing is consuming quite a lot of CPU.
Remember to choose a server located in the data center where you've created an IP address in the first step.

For this tutorial, we decided on CPX21 from Hetzner Cloud running Ubuntu 22:

![Hetzner Cloud - choosing VPS](/img/vps-1.png)

## 4. Assigning Primary IP
Below the list of the VPS types there is a ___Networking___ section where your Primary IP from Step 1 is waiting to be used.
Select it.

![Hetzner Cloud - choosing VPS](/img/vps-3.png)

## 5. Adding a *cloud-init* configuration

To configure a server and install Fishjam on it we're going to use *cloud-init*.
It's a preinstalled tool that lets you set up a newly created server with a YAML config file.
In the configuration you can create a user, choose packages to be installed, configure them, write or modify files and in our case finally run a docker container.

Full documentation about keys you can use in a _cloud-config_ file can be found in [the official *cloud-init* documentation](https://cloudinit.readthedocs.io/en/latest/reference/modules.html).


### A ___cloud-config___ template

We prepared a template *cloud-config* that will configure your server and start a chosen version of Fishjam:

<details>
  <summary>cloud-config.yaml</summary>

  ```
  #cloud-config
  users:
    - name: fishjam
      groups: docker
      sudo: null
      shell: /bin/false
      no_create_home: true
  ssh_pwauth: false
  disable_root_opts: no-port-forwarding,no-agent-forwarding,no-X11-forwarding
  apt:
    sources:
      docker.list:
        source: "deb [arch=amd64,arm64] https://download.docker.com/linux/ubuntu jammy stable"
        keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
  packages:
    - ufw
    - fail2ban
    - gzip
    - containerd.io
    - docker-ce
    - docker-ce-cli
    - nginx
    - certbot
  write_files:
    - path: /opt/fishjam/env-file
      defer: true
      owner: fishjam:fishjam

  runcmd:
    - export FISHJAM_VERSION=0.6.2
    - export FISHJAM_DOMAIN=mydomain.example.com
    - export LETSENCRYPT_EMAIL=my@email.com
    - export SERVER_API_TOKEN=test_token
    - systemctl enable fail2ban
    - ufw default deny outgoing
    - ufw default deny incoming
    - ufw default deny routed
    - ufw allow in ssh
    - ufw allow out https
    - ufw allow out domain
    - ufw allow in 80/tcp
    - ufw allow in 443/tcp
    - ufw allow in 50000:500100/udp
    - ufw allow in 49999/tcp
    - ufw allow out 5002
    - ufw allow out from any port 50000:50100 proto udp to any
    - ufw allow out 49999 proto tcp to any
    - ufw enable
    - service nginx stop
    - "[ ! -f /etc/letsencrypt/live/$FISHJAM_DOMAIN/cert.pem ] && certbot certonly --standalone --noninteractive --agree-tos --email $LETSENCRYPT_EMAIL -d $FISHJAM_DOMAIN"
    - |
      cat << EOF > /etc/cron.d/cert_renew
      0 4 * * * [fishjam] certbot certonly --webroot -w /usr/share/nginx/html -d $FISHJAM_DOMAIN --keep-until-expiring --quiet
      5 4 * * * [fishjam] service nginx reload
      EOF
    - |
      cat << EOF > /etc/nginx/sites-available/$FISHJAM_DOMAIN
        server {
          server_name $FISHJAM_DOMAIN;
          location / {
            proxy_pass http://localhost:5002;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_set_header Host \$host;
          }

          listen [::]:443 ssl http2; # managed by Certbot
          listen 443 ssl http2; # managed by Certbot
          ssl_certificate /etc/letsencrypt/live/$FISHJAM_DOMAIN/fullchain.pem; # managed by Certbot
          ssl_certificate_key /etc/letsencrypt/live/$FISHJAM_DOMAIN/privkey.pem; # managed by Certbot
        }

        server {
            listen 80;
            listen [::]:80;
            server_name $FISHJAM_DOMAIN;
            # Do not HTTPS redirect Let'sEncrypt ACME challenge
            location /.well-known/acme-challenge/ {
                    auth_basic off;
                    allow all;
                    root /usr/share/nginx/html;
                    try_files \$uri =404;
                    break;
            }
            location / {
                    return 301 https://\$host\$request_uri;
            }
        }
      EOF
    - ln -sf /etc/nginx/sites-available/$FISHJAM_DOMAIN /etc/nginx/sites-enabled/$FISHJAM_DOMAIN
    - service nginx start
    - |
      cat << EOF > /opt/fishjam/env-file
      FJ_HOST=$FISHJAM_DOMAIN
      FJ_PORT=5002
      FJ_SERVER_API_TOKEN=$SERVER_API_TOKEN
      FJ_CHECK_ORIGIN=false
      FJ_WEBRTC_TURN_IP=$(ip route get 1.0.0.0 | sed -n 's/^.*src \([0-9.]*\) .*$/\1/p')
      FJ_WEBRTC_TURN_TCP_PORT=49999
      FJ_WEBRTC_TURN_PORT_RANGE=50000-50100
      FJ_WEBRTC_TURN_LISTEN_IP=0.0.0.0
      EOF
    - [
        su,
        fishjam,
        -s,
        /bin/bash,
        -c,
        "docker run -d \
        --restart unless-stopped \
        -p 50000-50100:50000-50100/udp \
        -p 5002:5002 \
        --env-file /opt/fishjam/env-file \
        -v /opt/fishjam/fishjam_resources:/app/fishjam_resources \
        ghcr.io/fishjam-dev/fishjam:$FISHJAM_VERSION",
      ]
  ```
</details>
You'll need to manually take care of four lines in that template:

- `- export FISHJAM_VERSION=0.1.0-ed317b`
  Change the value if you want to deploy a different version of Fishjam.
  You can find the list of available versions in [our package repository](https://github.com/fishjam-dev/fishjam/pkgs/container/fishjam)
- `- export FISHJAM_DOMAIN=mydomain.example.com`
  Enter here a domain you've configured with **A** record in step 2.
- `- export LETSENCRYPT_EMAIL=my@email.com`
  Enter your email address to be notified when the SSL certificate will be about to expire.
- `export SERVER_API_TOKEN=test_token`
  Server API token is a token you'll need to connect to Fishjam via API or SDK.
  Write here a chosen secret value you're going to remember later.

Copy the file and change up those two variables.
You're going to need the content of the file in the next section.

### Other tools we'll install with _cloud-init_

As you might noticed we've chosen some packages to be installed:

- `ufw` -
  Uncomplicated Firewall.
  We'll need it to allow or block traffic on specific ports [https://help.ubuntu.com/community/UFW](https://help.ubuntu.com/community/UFW).
- `fail2ban` -
  Tool to block traffic recognized as unauthorized [https://www.fail2ban.org/wiki/index.php/Main_Page](https://www.fail2ban.org/wiki/index.php/Main_Page)
- `gzip` -
  Compression Utility [https://www.gzip.org/](https://www.gzip.org/)
- `containerd.io`, `docker-ce`, `docker-ce-cli` -
  Docker and Docker-related libraries.

### Setting up Hetzner cloud VPS with _cloud-config_

Now, we're going to use the content of the file you prepared in the Hetzner cloud VPS creating form.
To do it scroll to the _Cloud config_ section of the form and paste the content of your _cloud-config.yaml_ file.

![Hetzner Cloud - placing cloud-config](/img/vps-2.png)

:::caution
_cloud-init_ will recognize the file as a configuration only if the file starts with that comment:
```
#cloud-config
...
```
So be careful while copying.
:::

That's it.
You can click 'Create & Buy' and the server will start to configure.

:::tip
Think about adding your public SSH key while creating a VPS instance.
It will ease up connecting to VPS later.
If you don't add any key you're going to need a root password (you'll receive it in an email after creating VPS)
:::

## 6. Checking _cloud-init_ status

Configuring your server will take some time, but it's created almost immediately after creation.
You can log into the server using _ssh_:
```
ssh root@<VPS_IP>
```
then, in the server's terminal you can check the current status of _cloud-init_:

```bash
cloud-init status
```

Possible responses are `running`, `error` and `done`.
The first one informs you that _cloud-init_ is still configuring your server.
The second one means that something went wrong.
You can find logs from the _cloud-init_ run in `/var/log/cloud-init-output.log` file.
`done` means that your fishjam server is ready to be used.

If you'd like to keep an eye on the _cloud-init_ process you can use:

```bash
cloud-init status --wait
```
To see the output when the process is finished (successfully or not).

## Testing your instance with the Fishjam dashboard

To see how (or if) your Fishjam server is working you can test it by connecting our [Fishjam Dashboard](https://fishjam-dev.github.io/fishjam-dashboard/) with your server.
Detailed instructions on how to use Fishjam Dashboard can be found [here](../tutorials/dashboard.mdx).

:::tip
You can use the `/health` endpoint of Fishjam to see the status of its services. Read more [here](../for_developers/api_reference/rest_api.md)
:::
