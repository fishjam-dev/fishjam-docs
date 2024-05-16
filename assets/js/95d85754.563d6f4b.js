"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[3334],{39442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const r={},o="RTSP",c={id:"getting_started/components/rtsp",title:"RTSP",description:"Consumes a remote RTSP stream (e.g. from an IP camera).",source:"@site/versioned_docs/version-0.2.1/getting_started/components/rtsp.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/rtsp",permalink:"/fishjam-docs/0.2.1/getting_started/components/rtsp",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.2.1/getting_started/components/rtsp.md",tags:[],version:"0.2.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"HLS",permalink:"/fishjam-docs/0.2.1/getting_started/components/hls"},next:{title:"Jellyfish Dashboard",permalink:"/fishjam-docs/0.2.1/tutorials/dashboard"}},a={},l=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rtsp",children:"RTSP"}),"\n",(0,s.jsx)(n.p,{children:"Consumes a remote RTSP stream (e.g. from an IP camera).\nThe RTSP component initializes communication by connecting to\na remote source and requesting its stream."}),"\n",(0,s.jsx)(n.p,{children:"Supports H264 streams only."}),"\n",(0,s.jsxs)(n.p,{children:["Read more about RTSP ",(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc2326.html",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/fishjam-docs/0.2.1/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/fishjam-docs/0.2.1/getting_started/components/hls",children:"HLS"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["RTSP component always outputs H264 stream so if the ",(0,s.jsx)(n.a,{href:"../../introduction/basic_concepts#room",children:"Room"})," in which the RTSP component is created enforces a video codec,\nit must be set to H264.\nSee ",(0,s.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/create_room",children:"API"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sourceUri"})," (string) - URI of RTSP source stream, e.g. ",(0,s.jsx)(n.code,{children:'"rtsp://mysite.net:554/stream"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rtpPort"})," (integer 1..65535, default: 20000) - Local port RTP stream will be received at"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reconnectDelay"})," (integer 0.., default: 15000) - Delay (in ms) between successive reconnect attempts"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keepAliveInterval"})," (integer 0.., default: 15000) - Interval (in ms) in which keep-alive\nRTSP messages will be sent to the remote stream source"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pierceNat"})," (boolean, default: true) - Whether to attempt to create client-side NAT binding\nby sending an empty datagram from client to source, after the completion of RTSP setup"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,s.jsx)(n.p,{children:"Currently, there are no environment variables related to this component."}),"\n",(0,s.jsx)(n.h2,{id:"example-docker-commands",children:"Example Docker commands"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["If the client is behind NAT, the option ",(0,s.jsx)(n.code,{children:"--network=host"})," is necessary\nsince Docker can change the source port of UDP packets for routing reasons,\nwhich breaks the ",(0,s.jsx)(n.code,{children:"pierceNat"})," functionality."]}),(0,s.jsx)(n.p,{children:"This means that users on macOS will most likely be unable to access any\nRTSP stream source outside of their network when running Jellyfish using Docker."}),(0,s.jsxs)(n.p,{children:["If you're on macOS and want to receive RTSP streams from behind NAT,\nright now the only way is to ",(0,s.jsx)(n.a,{href:"/fishjam-docs/0.2.1/getting_started/installation#building-from-source",children:"build Jellyfish natively from source"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"Explicit port exposure (macOS compatible)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -p 20000:20000/udp \\\n           -p 8080:8080/tcp \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.1\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Make sure that the exposed UDP port matches the one used by the RTSP component\n(option ",(0,s.jsx)(n.code,{children:"rtpPort"}),", default: 20000)."]}),(0,s.jsx)(n.p,{children:"If using multiple RTSP components, more ports will need to be exposed."})]}),"\n",(0,s.jsx)(n.p,{children:"Using host network (Linux only)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --network=host \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);