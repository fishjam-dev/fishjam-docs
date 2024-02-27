"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[3624],{55044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(17624),o=i(4552);const s={},r="Fly.io (experimental)",l={id:"deploying/fly_io",title:"Fly.io (experimental)",description:"This deployment guide is experimental and may not reliably work each time or for every user.",source:"@site/docs/deploying/fly_io.md",sourceDirName:"deploying",slug:"/deploying/fly_io",permalink:"/jellyfish-docs/next/deploying/fly_io",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/deploying/fly_io.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cloud VPS with cloud-init",permalink:"/jellyfish-docs/next/deploying/vps"},next:{title:"Benchmarks",permalink:"/jellyfish-docs/next/benchmarks"}},d={},c=[{value:"Creating new app",id:"creating-new-app",level:2},{value:"Configuring the App",id:"configuring-the-app",level:2},{value:"Dedicated IPv4",id:"dedicated-ipv4",level:3},{value:"fly.toml",id:"flytoml",level:3},{value:"Fly.io secrets",id:"flyio-secrets",level:3},{value:"Deploying",id:"deploying",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"flyio-experimental",children:"Fly.io (experimental)"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["This deployment guide is experimental and may not reliably work each time or for every user.\nWe came across issues when deploying to Fly.io, which may render your application not\nbehaving as expected.\nYou can learn more about the problems we came across ",(0,t.jsx)(n.a,{href:"#deploying",children:"in the deploying section"})]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://fly.io",children:"Fly.io"})," is the go-to platform for deploying Phoenix apps.\nThis guide will help you deploy Jellyfish server on Fly.io."]}),"\n",(0,t.jsxs)(n.p,{children:["First, we recommend you read the ",(0,t.jsx)(n.a,{href:"https://fly.io/docs/speedrun/",children:"Fly.io speedrun"})," for deploying an app."]}),"\n",(0,t.jsxs)(n.p,{children:["Fly.io uses ",(0,t.jsx)(n.code,{children:"fly.toml"})," files for configuring an app.\nYou can start from our ",(0,t.jsx)(n.code,{children:"fly.toml"})," sample file:"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"fly.toml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kill_signal = "SIGTERM"\nkill_timeout = 5\nprocesses = []\n\n[env]\n  JF_PORT = "4000"\n  JF_WEBRTC_USED = "true"\n  JF_WEBRTC_TURN_IP = "<ip obtained with fly ips allocate-v4>"\n  JF_WEBRTC_TURN_PORT_RANGE = "50000-59999"\n  JF_WEBRTC_TURN_LISTEN_IP = "fly-global-services"\n\n[experimental]\n  auto_rollback = true\n\n[[services]]\n  http_checks = []\n  internal_port = 4000\n  protocol = "tcp"\n  script_checks = []\n  [services.concurrency]\n    hard_limit = 1000\n    soft_limit = 1000\n    type = "connections"\n\n  [[services.ports]]\n    force_https = true\n    handlers = ["http"]\n    port = 80\n\n  [[services.ports]]\n    handlers = ["tls", "http"]\n    port = 443\n\n  [[services.tcp_checks]]\n    grace_period = "1s"\n    interval = "15s"\n    restart_limit = 0\n    timeout = "2s"\n\n[[services]]\n  internal_port = 50000\n  protocol = "udp"\n\n  [[services.ports]]\n    port = 50000\n\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"creating-new-app",children:"Creating new app"}),"\n",(0,t.jsxs)(n.p,{children:["Launch ",(0,t.jsx)(n.code,{children:"fly launch"}),". When prompted, copy the configuration from the existing ",(0,t.jsx)(n.code,{children:"fly.toml"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"Select appropriate app name and region, don't create any databases.\nDon't deploy the app just yet."}),"\n",(0,t.jsxs)(n.p,{children:["Running ",(0,t.jsx)(n.code,{children:"fly launch"})," may modify the ",(0,t.jsx)(n.code,{children:"Dockerfile"}),".\nMake sure to remove the lines appended by flyctl."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-app",children:"Configuring the App"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying your app, make sure it is correctly configured."}),"\n",(0,t.jsx)(n.h3,{id:"dedicated-ipv4",children:"Dedicated IPv4"}),"\n",(0,t.jsx)(n.p,{children:"In order to transmit multimedia via UDP, the app has to be publicly available with an IPv4 address.\nBy default Fly.io uses shared IP. To enable dedicated IPv4 address run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fly ips allocate-v4\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note, that dedicated IP address is a paid feature on Fly.io."}),"\n",(0,t.jsxs)(n.p,{children:["You can learn more about dedicated IPv4 address ",(0,t.jsx)(n.a,{href:"https://fly.io/docs/reference/services/#dedicated-ipv4",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"flytoml",children:"fly.toml"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you don't have the following lines in the ",(0,t.jsx)(n.code,{children:"fly.toml"}),", which are automatically generated by ",(0,t.jsx)(n.code,{children:"fly launch"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You don't need to run migrations, since you don't have a database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[deploy]\n  release_command = "/app/bin/migrate"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Jellyfish uses ",(0,t.jsx)(n.code,{children:"JF_HOST"})," variable instead of the default ",(0,t.jsx)(n.code,{children:"PHX_HOST"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'JF_HOST = "<YOUR APP HOSTNAME>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Also, make sure you have set the correct port.\nThe environment variable ",(0,t.jsx)(n.code,{children:"JF_PORT"})," has to match the TCP ",(0,t.jsx)(n.code,{children:"internal_port"})," defined under ",(0,t.jsx)(n.code,{children:"services"})," section.\nThe default for Jellyfish is 5002 in development and 8080 in production (when using Docker or ",(0,t.jsx)(n.code,{children:"mix release"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["To be able to receive and send UDP traffic, Jellyfish has to open its UDP ports on a special ",(0,t.jsx)(n.code,{children:"fly-global-services"})," address, not ",(0,t.jsx)(n.code,{children:"0.0.0.0"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This must be set using the ",(0,t.jsx)(n.code,{children:"JF_WEBRTC_TURN_LISTEN_IP"})," enviroment variable.\nYou also need to specify the Jellyfish IP address for UDP, it is the IP address which you generated in the previous step."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'JF_WEBRTC_TURN_LISTEN_IP = "fly-global-services"\nJF_WEBRTC_TURN_IP="<YOUR APP IP ADDRESS>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can also read ",(0,t.jsx)(n.a,{href:"https://fly.io/docs/app-guides/udp-and-tcp/",children:"tutorial for running Fly.io apps which use UDP"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"flyio-secrets",children:"Fly.io secrets"}),"\n",(0,t.jsxs)(n.p,{children:["There are environment variables, which you may not want to keep in the ",(0,t.jsx)(n.code,{children:"fly.toml"})," config.\nFly.io provides a way to store such values securely."]}),"\n",(0,t.jsxs)(n.p,{children:["For Jellyfish you need to configure just one secret - ",(0,t.jsx)(n.code,{children:"JF_SERVER_API_TOKEN"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"flyctl secrets set JF_SERVER_API_TOKEN=development\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploying",children:"Deploying"}),"\n",(0,t.jsx)(n.p,{children:"With everything configured you can deploy the app"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fly deploy\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that it may take a moment for the UDP traffic to be forwarded to the application.\nThis means for example, that WebRTC may not be working yet."}),"\n",(0,t.jsxs)(n.p,{children:["This is the tricky part of the deployment, which we weren't able to entirely figure out.\nSometimes the UDP just works, others it takes ages for it to start flowing.\n",(0,t.jsx)(n.a,{href:"https://community.fly.io/t/udp-transport-not-working/12203",children:"This topic"})," describes the exact issue we had with Fly.io."]}),"\n",(0,t.jsx)(n.p,{children:"In general, it is unclear when the UDP traffic starts to be forwarded, sometimes it happens relatively quickly after deployment, sometimes you need to wait for some time."}),"\n",(0,t.jsxs)(n.p,{children:["Also, the Fly.io documentation isn't clear in regard to opening UDP sockets.\nSome information was gathered experimentally, or based on Fly.io community questions, such as ",(0,t.jsx)(n.a,{href:"https://community.fly.io/t/define-port-range-for-service/1938",children:"this one"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>r});var t=i(11504);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);