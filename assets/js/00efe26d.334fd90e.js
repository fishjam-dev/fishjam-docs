"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[5965],{83431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453);const r={},o="WebRTC",l={id:"getting_started/peers/webrtc",title:"WebRTC",description:"WebRTC peer allows you to connect to Jellyfish via WebRTC standard.",source:"@site/versioned_docs/version-0.3.0/getting_started/peers/webrtc.md",sourceDirName:"getting_started/peers",slug:"/getting_started/peers/webrtc",permalink:"/fishjam-docs/0.3.0/getting_started/peers/webrtc",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.3.0/getting_started/peers/webrtc.md",tags:[],version:"0.3.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"SDKs",permalink:"/fishjam-docs/0.3.0/getting_started/sdks"},next:{title:"HLS",permalink:"/fishjam-docs/0.3.0/getting_started/components/hls"}},c={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"webrtc",children:"WebRTC"}),"\n",(0,s.jsx)(n.p,{children:"WebRTC peer allows you to connect to Jellyfish via WebRTC standard."}),"\n",(0,s.jsxs)(n.p,{children:["Read more about WebRTC ",(0,s.jsx)(n.a,{href:"https://webrtc.org/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/fishjam-docs/0.3.0/getting_started/components/hls",children:"HLS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/fishjam-docs/0.3.0/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/fishjam-docs/0.3.0/getting_started/components/file",children:"File"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enableSimulcast"})," (boolean, default: true) - Enables the peer to use simulcast"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_WEBRTC_USED"})," - has to be ",(0,s.jsx)(n.code,{children:"true"})," if WebRTC peers will be used"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_WEBRTC_TURN_LISTEN_IP"})," - the IP address on which TURN servers will listen.\nBy default set to ",(0,s.jsx)(n.code,{children:"127.0.0.1"}),".\nWhen running Jellyfish via Docker, this MUST be set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"}),", even for local tests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_WEBRTC_TURN_IP"})," - the IP address, under which TURN will present itself to the clients. By default set to ",(0,s.jsx)(n.code,{children:"127.0.0.1"}),".\nWhen running Jellyfish via Docker, this MUST be set to real (non-loopback) address, even for local tests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_WEBRTC_TURN_PORT_RANGE"})," - port range, where UDP TURN will try to open ports. By default set to ",(0,s.jsx)(n.code,{children:"50000-59999"}),".\nThe bigger the range is, the more users server will be able to handle.\nUseful when not using the ",(0,s.jsx)(n.code,{children:"--network=host"})," option to limit the UDP ports\nused only to ones published from a Docker container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_WEBRTC_TURN_TCP_PORT"})," - port number of TCP TURN"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-docker-commands",children:"Example Docker commands"}),"\n",(0,s.jsx)(n.p,{children:"Explicit port exposure (macOS compatible)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -p 50000-50050:50000-50050/udp \\\n           -p 8080:8080/tcp \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           -e JF_WEBRTC_USED=true \\\n           -e JF_WEBRTC_TURN_PORT_RANGE=50000-50050 \\\n           -e JF_WEBRTC_TURN_IP=192.168.0.1 \\\n           -e JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \\\n           ghcr.io/jellyfish-dev/jellyfish:0.3.0\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Make sure that the exposed UDP ports match ",(0,s.jsx)(n.code,{children:"JF_WEBRTC_TURN_PORT_RANGE"}),".\nThe range of the ports shouldn't be too wide as it might cause problems with container startup."]})}),"\n",(0,s.jsx)(n.p,{children:"Using host network (Linux only)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --network=host \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           -e JF_WEBRTC_USED=true \\\n           -e JF_WEBRTC_TURN_IP=192.168.0.1 \\\n           -e JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \\\n           ghcr.io/jellyfish-dev/jellyfish:0.3.0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);