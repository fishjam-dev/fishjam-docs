"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[9928],{22076:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(17624),t=r(4552);const n={},i="API Reference",l={id:"for_developers/api_reference",title:"API Reference",description:"Jellyfish API is composed of three layers",source:"@site/docs/for_developers/api_reference.md",sourceDirName:"for_developers",slug:"/for_developers/api_reference",permalink:"/jellyfish-docs/next/for_developers/api_reference",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/for_developers/api_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Metrics Design",permalink:"/jellyfish-docs/next/for_developers/metrics_design"},next:{title:"Rest API",permalink:"/jellyfish-docs/next/for_developers/api_reference/rest_api"}},c={},d=[];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,o.jsx)(s.p,{children:"Jellyfish API is composed of three layers"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"a REST API for managing Jellyfish state"}),"\n",(0,o.jsxs)(s.li,{children:["a WS connection for client SDK communication (socket path ",(0,o.jsx)(s.code,{children:"/socket/peer"}),")"]}),"\n",(0,o.jsxs)(s.li,{children:["a WS connection for server notifications (socket path ",(0,o.jsx)(s.code,{children:"/socket/server"}),")"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"You can find them here:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/jellyfish-docs/next/for_developers/api_reference/rest_api",children:"OpenAPI REST description"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/jellyfish-dev/protos/blob/master/jellyfish/peer_notifications.proto",children:"Protobufs used by peer WS"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/jellyfish-dev/protos/blob/master/jellyfish/server_notifications.proto",children:"Protobufs used by server WS"})}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The communication via WebSockets uses ",(0,o.jsx)(s.a,{href:"https://protobuf.dev",children:"Protobuf"})," format.\nThe very first message that has to be sent on either of the WebSocket connections (",(0,o.jsx)(s.strong,{children:"peer"})," to ",(0,o.jsx)(s.strong,{children:"Jellyfish"})," or\n",(0,o.jsx)(s.strong,{children:"your_backend_server"})," to ",(0,o.jsx)(s.strong,{children:"Jellyfish"}),") is ",(0,o.jsx)(s.code,{children:"AuthRequest"}),".\nAll supported messages are listed in ",(0,o.jsx)(s.a,{href:"https://github.com/jellyfish-dev/protos",children:"the Jellyfish protos repo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["If you want to create your own Jellyfish SDK, the easiest way to reference defined protobuf messages\nwill be by adding ",(0,o.jsx)(s.em,{children:"protos"})," to your git repository as a git submodule. You can do it with this command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"git submodule add https://github.com/jellyfish-dev/protos\n"})}),"\n",(0,o.jsxs)(s.p,{children:["You could also consider creating a script that will pull the newest changes from the git submodule and compile\n",(0,o.jsx)(s.em,{children:".proto"})," files to your chosen programming language.\nFor reference, see ",(0,o.jsx)(s.a,{href:"https://github.com/jellyfish-dev/elixir_server_sdk/blob/master/compile_proto.sh",children:"the script used in our Elixir SDK"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>l,M:()=>i});var o=r(11504);const t={},n=o.createContext(t);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);