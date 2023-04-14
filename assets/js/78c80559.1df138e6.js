"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="RTSP (in progress)",s={unversionedId:"getting_started/components/rtsp",id:"getting_started/components/rtsp",title:"RTSP (in progress)",description:"Consumes a remote RTSP stream (e.g. from an IP camera).",source:"@site/docs/getting_started/components/rtsp.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/rtsp",permalink:"/jellyfish-docs/getting_started/components/rtsp",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/components/rtsp.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"HLS",permalink:"/jellyfish-docs/getting_started/components/hls"},next:{title:"Design Docs",permalink:"/jellyfish-docs/design_docs"}},l={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rtsp-in-progress"},"RTSP (in progress)"),(0,o.kt)("p",null,"Consumes a remote RTSP stream (e.g. from an IP camera).\nThe RTSP component initializes communication by connecting to\na remote source and requesting its stream."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/jellyfish-docs/getting_started/components/hls"},"HLS"))),(0,o.kt)("h2",{id:"env-variables"},"Env variables"),(0,o.kt)("p",null,"Currently, there are no environment variables related to this component."),(0,o.kt)("h2",{id:"example-docker-commands"},"Example Docker commands"),(0,o.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);