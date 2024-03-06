"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[4204],{53932:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(17624),o=i(4552);const s={},r="File",l={id:"getting_started/components/file",title:"File",description:"Publishes media stream from a local file.",source:"@site/versioned_docs/version-0.4.1/getting_started/components/file.md",sourceDirName:"getting_started/components",slug:"/getting_started/components/file",permalink:"/jellyfish-docs/getting_started/components/file",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.4.1/getting_started/components/file.md",tags:[],version:"0.4.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"RTSP",permalink:"/jellyfish-docs/getting_started/components/rtsp"},next:{title:"SIP",permalink:"/jellyfish-docs/getting_started/components/sip"}},c={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Env variables",id:"env-variables",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"file",children:"File"}),"\n",(0,t.jsx)(n.p,{children:"Publishes media stream from a local file."}),"\n",(0,t.jsx)(n.p,{children:"Supports H264 for video and OPUS for audio files."}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/jellyfish-docs/getting_started/peers/webrtc",children:"WebRTC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/hls",children:"HLS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/rtsp",children:"RTSP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/jellyfish-docs/getting_started/components/sip",children:"SIP"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the File component publishes a video, it does so in the H264 standard.\nIf File component publishes video and the ",(0,t.jsx)(n.a,{href:"../../introduction/basic_concepts#room",children:"Room"}),"\nin which the File component is created enforces a video codec,\nit must be set to H264.\nSee ",(0,t.jsx)(n.a,{href:"../../for_developers/api_reference/rest_api#tag/room/operation/create_room",children:"API"}),"\nfor more information."]}),"\n",(0,t.jsx)(n.li,{children:"The input file can be either audio or video"}),"\n",(0,t.jsxs)(n.li,{children:["The video must be encoded in raw H264. The framerate can be specified through ",(0,t.jsx)(n.code,{children:"framerate"})," option.\nIf not specified 30 is set as a default.\nYou can convert the video using the following ffmpeg command:\n",(0,t.jsx)(n.code,{children:"ffmpeg -i input_video -filter:v fps=30 -vcodec libx264 output.h264"})]}),"\n",(0,t.jsxs)(n.li,{children:["The audio must be monophonic, encoded in OPUS and encapsulated in Ogg container.\nYou can convert the audio using the following ffmpeg command:\n",(0,t.jsx)(n.code,{children:"ffmpeg -i input_audio -ac 1 -acodec libopus output.ogg"})]}),"\n",(0,t.jsxs)(n.li,{children:["The input files must be located inside ",(0,t.jsx)(n.code,{children:"$JF_RESOURCES_BASE_PATH/file_component_sources"})," path.\nTake a look at ",(0,t.jsx)(n.code,{children:"JF_RESOURCES_BASE_PATH"})," environment variable in the\n",(0,t.jsx)(n.a,{href:"/jellyfish-docs/getting_started/installation#environment-variables",children:"installation guide"})," for more info"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filePath"})," (string) - path for media file, relative to the ",(0,t.jsx)(n.code,{children:"$JF_RESOURCES_BASE_PATH/file_component_sources"})," directory, with either ",(0,t.jsx)(n.code,{children:".ogg"})," or ",(0,t.jsx)(n.code,{children:".h264"})," extension"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"framerate"})," (positive integer, default: null) - framerate of a video file.\nFor audio files it must ",(0,t.jsx)(n.code,{children:"null"}),".\nFor video files ",(0,t.jsx)(n.code,{children:"null"})," means 30 FPS."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"env-variables",children:"Env variables"}),"\n",(0,t.jsx)(n.p,{children:"Currently, there are no environment variables related to this component."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>r});var t=i(11504);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);