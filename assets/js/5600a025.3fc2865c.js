"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[1804],{57428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(17624),s=t(4552);const r={},o="SIP",l={id:"getting_started/components/sip",title:"SIP",description:"Makes a SIP connection with the specified provider.",source:"@site/versioned_docs/version-0.4.0/getting_started/components/sip.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/sip",permalink:"/jellyfish-docs/getting_started/components/sip",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.4.0/getting_started/components/sip.md",tags:[],version:"0.4.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"File",permalink:"/jellyfish-docs/getting_started/components/file"},next:{title:"WebRTC",permalink:"/jellyfish-docs/getting_started/peers/webrtc"}},c={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sip",children:"SIP"}),"\n",(0,i.jsxs)(n.p,{children:["Makes a SIP connection with the specified provider.\nFrom this connection it consumes a remote RTP stream with G711 A-law audio\nand publishes through this connection all audio tracks from the ",(0,i.jsx)(n.a,{href:"/jellyfish-docs/getting_started/room",children:"Room"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Read more about SIP ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc3261.html",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/hls",children:"HLS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/file",children:"File"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The specified SIP provider needs to support G711 A-law as it will be a format in which audio from\nSIP Endpoint will be published."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Required"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"registrarCredentials"})," (object) - registrar credentials which allows to make a connection with a SIP provider.\nFor the exact credential structure see ",(0,i.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/add_component",children:"Configuration API"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_SIP_USED"})," - has to be ",(0,i.jsx)(n.code,{children:"true"})," if SIP component will be used"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_SIP_IP"})," - the IP address on which SIP server will listen. It must be a public IP and reachable from the outside network."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);