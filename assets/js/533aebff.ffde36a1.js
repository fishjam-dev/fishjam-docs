"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[9262],{34477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),o=t(28453),s=t(11470),a=t(19365);const i={},l="HLS",c={id:"getting_started/components/hls",title:"HLS",description:"Creates HLS playlist that is ready to be broadcasted via CDN.",source:"@site/docs/getting_started/components/hls.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/hls",permalink:"/fishjam-docs/next/getting_started/components/hls",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/docs/getting_started/components/hls.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Room",permalink:"/fishjam-docs/next/getting_started/room"},next:{title:"RTSP",permalink:"/fishjam-docs/next/getting_started/components/rtsp"}},d={},u=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2},{value:"Output",id:"output",level:2},{value:"Example Docker commands",id:"example-docker-commands",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hls",children:"HLS"}),"\n",(0,r.jsxs)(n.p,{children:["Creates HLS playlist that is ready to be broadcasted via CDN.\nRead more about HLS ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/streaming/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/fishjam-docs/next/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/fishjam-docs/next/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/fishjam-docs/next/getting_started/components/file",children:"File"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/fishjam-docs/next/getting_started/components/sip",children:"SIP"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"../../introduction/basic_concepts#room",children:"Room"})," in which the HLS component is created must have the video codec set to H264.\nSee ",(0,r.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/create_room",children:"API"})," for more information."]}),"\n",(0,r.jsx)(n.li,{children:"Max 1 HLS component allowed per room."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optional"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"lowLatency"})," (boolean, default: false) - whether the component should use LL-HLS"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"persistent"})," (boolean, default: false) - whether the stream should be saved or not.\nAfter a meeting that integrates an HLS component (with the persistent option set to true) ends, the meeting is preserved as a recording.\nTo manage this recording, use the ",(0,r.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/recording",children:"Recording API"}),".\nThe recording is also available as ",(0,r.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/recording/operation/getRecordingContent",children:"HLS Video On Demand (VOD) API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"targetWindowDuration"})," (positive integer, default: null) - represents the duration, in seconds, of the live streaming content to be\nmaintained in a rolling window. If set to null (default), the entire stream will be available."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"s3"})," (object, default: null) - AWS S3 credentials. If credentials are set, the stream will be saved to the specified bucket.\nThis solution will automatically send your streams to an AWS bucket right after the end of your meeting.\nThe uploaded stream will be accessible in the ",(0,r.jsx)(n.code,{children:"/<room-id>"})," folder within the S3 bucket.\nFor the exact credential structure see ",(0,r.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/add_component",children:"Configuration API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"subscribeMode"}),' (string "manual" or "auto", default: "auto") - whether HLS component should automatically start consuming available tracks.\nWhen set to ',(0,r.jsx)(n.code,{children:"manual"}),", HLS component has to be explicitly told to subscribe to a specific peer/component tracks using\nthe ",(0,r.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/subscribe_to",children:"Subscription API"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"elixir",label:"Elixir",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\n\nclient = Fishjam.Client.new(server_address: server_address, server_api_token: server_api_token)\n\n{:ok, room, _fishjam_address} = Fishjam.Room.create(client, video_codec: :h264)\n{:ok, %{peer: peer}} = Fishjam.Room.add_peer(client, room.id, Fishjam.Peer.WebRTC)\n\nhls_options = %Fishjam.Component.HLS{subscribe_mode: :manual}\n{:ok, _component} = Fishjam.Room.add_component(client, room.id, hls_options)\n\n:ok = Fishjam.Room.hls_subscribe(client, room.id, [peer.id])\n'})})}),(0,r.jsx)(a.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from fishjam import RoomApi, ComponentOptionsHLS, PeerOptionsWebRTC\n\nserver_address = \"localhost:5002\"\nserver_api_token = \"development\"\n\nroom_api = RoomApi(server_address='localhost:5002', server_api_token='development')\n\nfishjam_address, room = room_api.create_room(video_codec='h264')\nresult = room_api.add_peer(room.id, options=PeerOptionsWebRTC())\n\nhls_options = ComponentOptionsHLS(subscribe_mode=\"manual\")\ncomponent_hls = room_api.add_component(room.id, options=hls_options)\n\nroom_api.hls_subscribe(room.id, [result.peer.id])\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,r.jsx)(n.p,{children:"Currently, there are no environment variables related to this component."}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(n.p,{children:["After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available\nunder ",(0,r.jsx)(n.code,{children:"http://<fishjam-address>/hls/<room_id>/index.m3u8"})," (or ",(0,r.jsx)(n.code,{children:"https://"}),", if using TLS)."]}),"\n",(0,r.jsx)(n.h2,{id:"example-docker-commands",children:"Example Docker commands"}),"\n",(0,r.jsxs)(n.p,{children:["The HLS playlist will be created inside the Docker container. To access it from the host,\nyou need to create a volume, e.g. by adding the option ",(0,r.jsx)(n.code,{children:"-v $(pwd)/fishjam_resources:/app/fishjam_resources"}),"\nto your Docker command."]}),"\n",(0,r.jsx)(n.p,{children:"Other than that, your Docker commands shouldn't be affected by adding this component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p 8080:8080/tcp \\\n           -e FJ_SERVER_API_TOKEN=token \\\n           -e FJ_HOST=localhost:8080 \\\n           -v $(pwd)/fishjam_resources:/app/fishjam_resources \\\n           ghcr.io/fishjam-dev/fishjam:0.3.0\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),o=t(18215),s=t(23104),a=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function _(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(_,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);