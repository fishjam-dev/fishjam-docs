"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="API Reference",s={unversionedId:"api_reference",id:"api_reference",title:"API Reference",description:"Jellyfish API is composed of three layers",source:"@site/docs/api_reference.md",sourceDirName:".",slug:"/api_reference",permalink:"/jellyfish-docs/api_reference",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/api_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Design Docs",permalink:"/jellyfish-docs/design_docs"},next:{title:"Rest API",permalink:"/jellyfish-docs/api_reference/rest_api"}},l={},p=[],c={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"Jellyfish API is composed of three layers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a REST API for managing Jellyfish state"),(0,o.kt)("li",{parentName:"ul"},"a WS connection for client SDK communication (socket path ",(0,o.kt)("inlineCode",{parentName:"li"},"/socket/peer"),") "),(0,o.kt)("li",{parentName:"ul"},"a WS connection for server notifications (socket path ",(0,o.kt)("inlineCode",{parentName:"li"},"/socket/server"),")")),(0,o.kt)("p",null,"You can find them here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/jellyfish-docs/api_reference/rest_api"},"OpenAPI REST description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jellyfish-dev/protos/blob/master/jellyfish/peer_notifications.proto"},"Protobufs used by peer WS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jellyfish-dev/protos/blob/master/jellyfish/server_notifications.proto"},"Protobufs used by server WS"))),(0,o.kt)("p",null,"The communication via WebSockets is done with use of ",(0,o.kt)("a",{parentName:"p",href:"https://protobuf.dev"},"Protobuf")," format.\nThe very first message that has to be sent on either of WebSocket connections (",(0,o.kt)("strong",{parentName:"p"},"peer")," to ",(0,o.kt)("strong",{parentName:"p"},"Jellyfish")," or\n",(0,o.kt)("strong",{parentName:"p"},"your_backend_server")," to ",(0,o.kt)("strong",{parentName:"p"},"Jellyfish"),") is ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthRequest"),".\nAll supported messages are listed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/protos"},"the Jellyfish protos repo"),"."),(0,o.kt)("p",null,"If you want to create your own Jellyfish SDK, the easiest way to reference to defined protobuf messages\nwill be by adding ",(0,o.kt)("em",{parentName:"p"},"protos")," to your git repository as a git submodule. You can do it with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git submodule add https://github.com/jellyfish-dev/protos\n")),(0,o.kt)("p",null,"You could also consider creating a script that will pull newest changes from the git submodule and compile\n",(0,o.kt)("em",{parentName:"p"},".proto")," files to your chosen programming language.\nFor reference, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/elixir_server_sdk/blob/master/compile_proto.sh"},"the script used in our Elixir SDK"),"."))}u.isMDXComponent=!0}}]);