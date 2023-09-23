# Cloud VPS with `cloud-init`

We're encouraging you to use VPS as the most configurable option. In this example, we will show you how to set up Jellyfish media server on [Hetzner Cloud](https://www.hetzner.com/cloud) but you can use these instructions to run Jellyfish on VPS from any provider that supports [cloud-init](https://cloud-init.io/) setup.

## Choosing right VPS

Although Jellyfish doesn't have minimum requirements to work, we encourage you to choose a middle-sized VPS as media processing is consuming quite a lot of CPU.

For this tutorial, we decided on CPX21 from Hetzner Cloud running Ubuntu 22:

![Hetzner Cloud - choosing VPS](/img/vps-1.png)

:::tip
Remember about adding your public SSH while creating a VPS instance. It will ease up connecting to VPS later. If you don't add any key you're going to need a root password (you'll receive it in an email after creating VPS)
:::

## *cloud-init* config

*cloud-init* is a tool that lets you set up a newly created server with a YAML config file. In the configuration you can create a user, choose packages to be installed, configure them, write or modify files and in our case finally run a docker container.

Full documentation about keys you can use to write _cloud-config_ file can be found in [the official *cloud-init* documentation](https://cloudinit.readthedocs.io/en/latest/reference/modules.html).

We prepared a template *cloud-config* that will prepare your server and start a chosen version of jellyfish:

<details>
  <summary>cloud-config.yaml</summary>

  ```
  #cloud-config
  users:
    - name: jellyfish
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
  write_files:
    - path: /opt/jellyfish/env-file
      defer: true
      owner: jellyfish:jellyfish
  runcmd:
    - export JELLYFISH_VERSION=0.1.0-ed317b
    - docker pull ghcr.io/jellyfish-dev/jellyfish:$JELLYFISH_VERSION
    - systemctl enable fail2ban
    - ufw default deny outgoing
    - ufw default deny incoming
    - ufw default deny routed
    - ufw allow in ssh
    - ufw allow out https
    - ufw allow out domain
    - ufw allow in 80/tcp
    - ufw allow in 50000:50050/udp
    - ufw allow out from any port 50000:50050 proto udp to any
    - ufw enable
    - |
      cat << EOF > /opt/jellyfish/env-file
      SERVER_API_TOKEN=test_token
      SECRET_KEY_BASE=$(openssl rand -base64 32)
      INTEGRATED_TURN_IP=$(ip route get 1.0.0.0 | sed -n 's/^.*src \([0-9.]*\) .*$/\1/p')
      JELLYFISH_ADDRESS=$(ip route get 1.0.0.0 | sed -n 's/^.*src \([0-9.]*\) .*$/\1/p')
      INTEGRATED_TURN_PORT_RANGE=50000-50050
      CHECK_ORIGIN=false
      PORT=5002
      VIRTUAL_HOST=localhost
      EOF
    - [
        su,
        jellyfish,
        -s,
        /bin/bash,
        -c,
        "docker run -d \
        --restart unless-stopped \
        -p 50000-50050:50000-50050/udp \
        -p 80:5002 \
        --env-file /opt/jellyfish/env-file \
        -v /opt/jellyfish/jellyfish_output:/app/jellyfish_output \
        ghcr.io/jellyfish-dev/jellyfish:$JELLYFISH_VERSION",
      ]
  ```
</details>

You'll need to take care of two lines in that template:

- `- export JELLYFISH_VERSION=0.1.0-ed317b`. Change value if you want to deploy different version of jellyfish. You can find list of available versions in [our package repository](https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish)

- `SERVER_API_TOKEN=test_token` Server API token is a token you'll need to connect to Jellyfish via API or SDK. Write here a chosen secret value you're going to remember later.

Copy the file and change up those two variables. You're going to need a content of the file in the next section.

### Other tools we'll install with _cloud-init_

As you might noticed we've chosen some packages to be installed:

- `ufw` - Uncomplicated Firewall. We'll need it to allow or block trafic on specific ports [https://help.ubuntu.com/community/UFW](https://help.ubuntu.com/community/UFW).
- fail2ban - Tool to block traffic recognized as unauthorized [https://www.fail2ban.org/wiki/index.php/Main_Page](https://www.fail2ban.org/wiki/index.php/Main_Page)
- `gzip` - Compression Utility [https://www.gzip.org/](https://www.gzip.org/)
- `containerd.io`, `docker-ce`, `docker-ce-cli` - Docker and Docker related libraries.

## Setting up Hetzner cloud VPS with _cloud-config_

Now, we're going to use a content of the file you prepared in Hetzner cloud VPS creating form. To do it scroll to the _Cloud config_ section of the form and paste there a content of your _cloud-config.yaml_ file.

![Hetzner Cloud - placing cloud-config](/img/vps-2.png)

:::caution
_cloud-init_ will recognize the file as it's configuration only if the file starts with that comment:
```
#cloud-config
...
```
So be carefull while copying.
:::

That's it. You can click 'Create & Buy' an a server will start to configurate.

## Checking _cloud-init_ status

Configuring your server will takes some time, but it's available for you almost immediately after creation. You can log into server using _ssh_:
```
ssh root@<VPS_IP>
```
then, in server's terminal you can check current status of cloud init:

```bash
cloud-init status
```

Posible responses are `running`, `error` and `done`. The first one informs you that _cloud-init_ is still configuring you server. Second one means that something whent wrong. You can find logs from the _cloud-init_ run in `/var/log/cloud-init-output.log` file. `done` means that your jellyfish server is ready to be used.




