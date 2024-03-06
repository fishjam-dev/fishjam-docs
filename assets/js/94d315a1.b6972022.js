"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[1365],{86559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(17624),s=n(4552);const i={},r="HLS",l={id:"getting_started/components/hls",title:"HLS",description:"Creates HLS playlist that is ready to be broadcasted via CDN.",source:"@site/versioned_docs/version-0.2.1/getting_started/components/hls.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/hls",permalink:"/jellyfish-docs/0.2.1/getting_started/components/hls",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.1/getting_started/components/hls.md",tags:[],version:"0.2.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"WebRTC",permalink:"/jellyfish-docs/0.2.1/getting_started/peers/webrtc"},next:{title:"RTSP",permalink:"/jellyfish-docs/0.2.1/getting_started/components/rtsp"}},a={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Output",id:"output",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"hls",children:"HLS"}),"\n",(0,o.jsxs)(t.p,{children:["Creates HLS playlist that is ready to be broadcasted via CDN.\nRead more about HLS ",(0,o.jsx)(t.a,{href:"https://developer.apple.com/streaming/",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/jellyfish-docs/0.2.1/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/jellyfish-docs/0.2.1/getting_started/components/rtsp",children:"RTSP"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.a,{href:"../../introduction/basic_concepts#room",children:"Room"})," in which the HLS component is created must have the video codec set to H264.\nSee ",(0,o.jsx)(t.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/create_room",children:"API"})," for more information."]}),"\n",(0,o.jsx)(t.li,{children:"Max 1 HLS component allowed per room."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Optional"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"lowLatency"})," (boolean, default: false) - whether the component should use LL-HLS"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,o.jsx)(t.p,{children:"Currently, there are no environment variables related to this component."}),"\n",(0,o.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,o.jsxs)(t.p,{children:["After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available\nunder ",(0,o.jsx)(t.code,{children:"http://<jellyfish-address>/hls/<room_id>/index.m3u8"})," (or ",(0,o.jsx)(t.code,{children:"https://"}),", if using TLS)."]}),"\n",(0,o.jsx)(t.h2,{id:"example-docker-commands",children:"Example Docker commands"}),"\n",(0,o.jsxs)(t.p,{children:["The HLS playlist will be created inside the Docker container. To access it from the host,\nyou need to create a volume, e.g. by adding the option ",(0,o.jsx)(t.code,{children:"-v $(pwd)/jellyfish_output:/app/jellyfish_output"}),"\nto your Docker command."]}),"\n",(0,o.jsx)(t.p,{children:"Other than that, your Docker commands shouldn't be affected by adding this component."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"docker run -p 8080:8080/tcp \\\n           -e JF_SERVER_API_TOKEN=token \\\n           -e JF_HOST=localhost:8080 \\\n           -v $(pwd)/jellyfish_output:/app/jellyfish_output \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.1\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>r});var o=n(11504);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);