"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[1749],{18419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(74848),s=t(28453);const i={},r="Basic Concepts",c={id:"introduction/basic_concepts",title:"Basic Concepts",description:"This section outlines Jellyfish building blocks. We suggest reading this before",source:"@site/versioned_docs/version-0.4.2/introduction/basic_concepts.md",sourceDirName:"introduction",slug:"/introduction/basic_concepts",permalink:"/fishjam-docs/0.4.2/introduction/basic_concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.4.2/introduction/basic_concepts.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"mainSidebar",previous:{title:"What is Jellyfish?",permalink:"/fishjam-docs/0.4.2/"},next:{title:"Example Scenarios",permalink:"/fishjam-docs/0.4.2/introduction/example_scenarios"}},a={},l=[{value:"Room",id:"room",level:2},{value:"Component",id:"component",level:2},{value:"Peer",id:"peer",level:2},{value:"Difference between Component and Peer",id:"difference-between-component-and-peer",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,o.jsx)(n.p,{children:"This section outlines Jellyfish building blocks. We suggest reading this before\nyou proceed, as these terms will be recurrent in the following chapters. Enjoy\nyour exploration!"}),"\n",(0,o.jsx)(n.h2,{id:"room",children:"Room"}),"\n",(0,o.jsx)(n.p,{children:"In Jellyfish, a room serves as a holder for peers and components, its function\nvarying based on application."}),"\n",(0,o.jsx)(n.p,{children:"For instance, within a video conferencing system, a Jellyfish room represents a\nsingle online meeting or a channel accommodating multiple users for\nconversation."}),"\n",(0,o.jsx)(n.p,{children:"On the other hand, in a broadcasting system setting, one room will be a\ncontainer for two components - one responsible for receiving stream from a\nstreaming host (e.g. via RTMP) and the other one responsible for converting this\nstream into an HLS playlist ready to be broadcasted via CDN."}),"\n",(0,o.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,o.jsx)(n.p,{children:"A component is a server-side process that publishes or subscribes to tracks.\nExample components are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"HLS component - subscribes to all other tracks and creates from them an HLS\nplaylist ready to be broadcasted via CDN"}),"\n",(0,o.jsx)(n.li,{children:"RTSP component - connects to the remote media source (e.g. an IP camera) and\npublishes its media to be consumed by other components or peers"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"peer",children:"Peer"}),"\n",(0,o.jsx)(n.p,{children:"A peer is a client-side entity that connects to the server to publish, subscribe\nor publish and subscribe to tracks published by components or other peers. The\npeer's process is spawned after the peer connects to the server. At the moment,\nthere is only one type of peer - WebRTC."}),"\n",(0,o.jsx)(n.h2,{id:"difference-between-component-and-peer",children:"Difference between Component and Peer"}),"\n",(0,o.jsxs)(n.p,{children:["The most important difference between a component and a peer is that component\nis a purely server-side thing. It starts its work right after adding it to the\nserver. On the other hand, a peer is something that has to ",(0,o.jsx)(n.strong,{children:"connect"})," to the\nserver. Therefore, peers are allowed to open so-called signaling channels to the\nserver. See also ",(0,o.jsx)(n.a,{href:"/fishjam-docs/0.4.2/introduction/example_scenarios",children:"Example Scenarios"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);