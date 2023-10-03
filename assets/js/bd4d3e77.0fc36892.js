"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[48],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),y=i,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},l="Fly.io (experimental)",a={unversionedId:"deploying/fly_io",id:"deploying/fly_io",title:"Fly.io (experimental)",description:"This deployment guide is expermiental and may not reliably work each time or for every user.",source:"@site/docs/deploying/fly_io.md",sourceDirName:"deploying",slug:"/deploying/fly_io",permalink:"/jellyfish-docs/deploying/fly_io",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/deploying/fly_io.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cloud VPS with cloud-init",permalink:"/jellyfish-docs/deploying/vps"},next:{title:"Metrics",permalink:"/jellyfish-docs/metrics"}},p={},s=[{value:"Creating new app",id:"creating-new-app",level:2},{value:"Configuring the App",id:"configuring-the-app",level:2},{value:"Dedicated IPv4",id:"dedicated-ipv4",level:3},{value:"fly.toml",id:"flytoml",level:3},{value:"Fly.io secrets",id:"flyio-secrets",level:3},{value:"Deploying",id:"deploying",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flyio-experimental"},"Fly.io (experimental)"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This deployment guide is expermiental and may not reliably work each time or for every user.\nWe came across issues when deploying to Fly.io, which may render your application not\nbehaving as expected.\nYou can learn more about the problems we came accross ",(0,i.kt)("a",{parentName:"p",href:"#deploying"},"in the deploying section"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://fly.io"},"Fly.io")," is the go-to platform for deploying Phoenix apps.\nThis guide will help you deploy Jellyfish server on Fly.io."),(0,i.kt)("p",null,"First, we recommend you read the ",(0,i.kt)("a",{parentName:"p",href:"https://fly.io/docs/speedrun/"},"Fly.io speedrun")," for deploying an app."),(0,i.kt)("p",null,"Fly.io uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml")," files for configuring an app.\nYou can start from our ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml")," sample file:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"fly.toml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kill_signal = "SIGTERM"\nkill_timeout = 5\nprocesses = []\n\n[env]\n  INTEGRATED_TURN_IP = "<ip obtained with fly ips allocate-v4>"\n  INTEGRATED_TURN_PORT_RANGE = "50000-59999"\n  INTEGRATED_TURN_LISTEN_IP = "fly-global-services"\n  PORT = "4000"\n  WEBRTC_USED = "true"\n\n[experimental]\n  auto_rollback = true\n\n[[services]]\n  http_checks = []\n  internal_port = 4000\n  protocol = "tcp"\n  script_checks = []\n  [services.concurrency]\n    hard_limit = 1000\n    soft_limit = 1000\n    type = "connections"\n\n  [[services.ports]]\n    force_https = true\n    handlers = ["http"]\n    port = 80\n\n  [[services.ports]]\n    handlers = ["tls", "http"]\n    port = 443\n\n  [[services.tcp_checks]]\n    grace_period = "1s"\n    interval = "15s"\n    restart_limit = 0\n    timeout = "2s"\n\n[[services]]\n  internal_port = 50000\n  protocol = "udp"\n\n  [[services.ports]]\n    port = 50000\n\n'))),(0,i.kt)("h2",{id:"creating-new-app"},"Creating new app"),(0,i.kt)("p",null,"Launch ",(0,i.kt)("inlineCode",{parentName:"p"},"fly launch"),". When prompted, copy the configuration from the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml")," file."),(0,i.kt)("p",null,"Select appropriate app name and region, don't create any databases.\nDon't deploy the app just yet."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"fly launch")," may modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),".\nMake sure to remove the lines appended by flyctl."),(0,i.kt)("h2",{id:"configuring-the-app"},"Configuring the App"),(0,i.kt)("p",null,"Before deploying your app, make sure it is correctly configured."),(0,i.kt)("h3",{id:"dedicated-ipv4"},"Dedicated IPv4"),(0,i.kt)("p",null,"In order to transmit multimedia via UDP, the app has to be publicly available with an IPv4 address.\nBy default Fly.io uses shared IP. To enable dedicated IPv4 address run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fly ips allocate-v4\n")),(0,i.kt)("p",null,"Note, that dedicated IP address is a paid feature on Fly.io."),(0,i.kt)("p",null,"You can learn more about dedicated IPv4 address ",(0,i.kt)("a",{parentName:"p",href:"https://fly.io/docs/reference/services/#dedicated-ipv4"},"here"),"."),(0,i.kt)("h3",{id:"flytoml"},"fly.toml"),(0,i.kt)("p",null,"Make sure you don't have the following lines in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml"),", which are automatically generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"fly launch"),"."),(0,i.kt)("p",null,"You don't need to run migrations, since you don't have a database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[deploy]\n  release_command = "/app/bin/migrate"\n')),(0,i.kt)("p",null,"Jellyfish uses ",(0,i.kt)("inlineCode",{parentName:"p"},"VIRTUAL_HOST")," variable instead of the default ",(0,i.kt)("inlineCode",{parentName:"p"},"PHX_HOST"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'VIRTUAL_HOST = "<YOUR APP HOSTNAME>"\n')),(0,i.kt)("p",null,"Also, make sure you have set the correct port.\nThe enviroment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT")," has to match the tcp ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_port")," defined under ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," section.\nThe default for Jellyfish is 4000."),(0,i.kt)("p",null,"To be able to receive and send UDP traffic, Jellyfish has to open its UDP ports on a special ",(0,i.kt)("inlineCode",{parentName:"p"},"fly-global-services")," address, not ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),(0,i.kt)("p",null,"This must be set using the ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGRATED_TURN_LISTEN_IP")," enviroment variable.\nYou also need to specify the Jellyfish IP address for UDP, it is the IP address which you generated in the previous step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'INTEGRATED_TURN_LISTEN_IP = "fly-global-services"\nINTEGRATED_TURN_IP="<YOUR APP IP ADDRESS>"\n')),(0,i.kt)("p",null,"You can also read ",(0,i.kt)("a",{parentName:"p",href:"https://fly.io/docs/app-guides/udp-and-tcp/"},"tutorial for running Fly.io apps which use UDP"),"."),(0,i.kt)("h3",{id:"flyio-secrets"},"Fly.io secrets"),(0,i.kt)("p",null,"There are enviroment variables, which you may not want to keep in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml")," config.\nFly.io provides a way to store such values securely."),(0,i.kt)("p",null,"For Jellyfish you need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," secrets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"flyctl secrets set SECRET_KEY_BASE=super-secret-key\nflyctl secrets set TOKEN=development\n")),(0,i.kt)("h2",{id:"deploying"},"Deploying"),(0,i.kt)("p",null,"With everything configured you can deploy the app "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fly deploy\n")),(0,i.kt)("p",null,"Note that it may take a moment for the UDP traffic to be forwarded to the application.\nThis means for example, that WebRTC may not be working yet."),(0,i.kt)("p",null,"This is the tricky part of the deployment, which we weren't able to entirely figure out.\nSometimes the UDP just works, others it takes ages for it to start flowing.\n",(0,i.kt)("a",{parentName:"p",href:"https://community.fly.io/t/udp-transport-not-working/12203"},"This topic")," describes the exact issue we had with Fly.io."),(0,i.kt)("p",null,"In general, it is unclear when the UDP traffic starts to be forwarded, sometimes it happens relatively quickly after deployment, sometimes you need to wait for some time."),(0,i.kt)("p",null,"Also, the Fly.io documentation isn't clear in regard to opening UDP sockets.\nSome information was gathered experimentally, or based on Fly.io community questions, such as ",(0,i.kt)("a",{parentName:"p",href:"https://community.fly.io/t/define-port-range-for-service/1938"},"this one"),"."))}u.isMDXComponent=!0}}]);