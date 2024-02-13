"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[9844],{8756:(e,t,n)=>{n.d(t,{cp:()=>s});var r=n(7624),a=n(2172);function o(e){const t={a:"a",admonition:"admonition",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can learn more about Jellyfish architecture in ",(0,r.jsx)(t.a,{href:"/",children:"Jellyfish\ndocs"}),". This section provides a\nbrief description aimed at front-end developers"]})}),"\n",(0,r.jsx)(t.p,{children:"Let's introduce some concepts first:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Peer"})," - A peer is a client-side entity that connects to the server to\npublish, subscribe or publish and subscribe to tracks published by components\nor other peers. You can think of it as a participant in a room. At the moment,\nthere is only one type of peer - WebRTC."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Track"})," - An object that represents an audio or video stream. A track can be\nassociated with a local media source, such as a camera or microphone, or a\nremote media source received from another user. Tracks are used to capture,\ntransmit, and receive audio and video data in WebRTC applications."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Room"})," - In Jellyfish, a room serves as a holder for peers and components,\nits function varying based on application. From a front-end perspective, this will\nbe probably one meeting or a broadcast."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For a better understanding of these concepts here is an example of a room that\nholds a standard WebRTC conference from a perspective of the User:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Room example",src:n(48).c+"",width:"1195",height:"1224"})}),"\n",(0,r.jsx)(t.p,{children:"In this example, peers stream multiple video and audio tracks. Peer #1 streams\neven two video tracks (camera and screencast track). You can differentiate\nbetween them by using track metadata. The user gets info about peers and their\ntracks from the server using Jellyfish Client. The user is also informed in real\ntime about peers joining/leaving and tracks being added/removed."}),"\n",(0,r.jsx)(t.p,{children:"To keep this tutorial short we'll simplify things a little. Every peer will stream just one\nvideo track."}),"\n",(0,r.jsx)(t.h3,{id:"connecting-and-joining-the-room",children:"Connecting and joining the room"}),"\n",(0,r.jsx)(t.p,{children:"The general flow of connecting to the server and joining the room in a standard\nWebRTC conference setup looks like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Connecting and joing the room",src:n(2824).c+"",width:"6158",height:"2195"})}),"\n",(0,r.jsx)(t.p,{children:"The parts that you need to implement are marked in blue and things handled by\nJellyfish are marked in red."}),"\n",(0,r.jsx)(t.p,{children:"Firstly, the user logs in. Then your backend authenticates the user and obtains\na peer token. It allows the user to authenticate and join the room in Jellyfish\nServer. The backend passes the token to your front-end, and your front-end passes\nit to Jellyfish Client. The client establishes the connection with Jellyfish\nServer. Then Jellyfish Client sets up tracks (camera, microphone) to stream and\njoins the room on Jellyfish Server. Finally, your front-end can display the room\nfor the user."}),"\n",(0,r.jsx)(t.p,{children:"For this tutorial we simplified this process a bit - you don't have to implement\na backend or authentication. Jellyfish Dashboard will do this for you. It's also\na nice tool to test and play around with Jellyfish. The flow with Jellyfish Dashboard looks like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Connecting and joing the room with dashboard",src:n(6471).c+"",width:"5336",height:"2152"})}),"\n",(0,r.jsx)(t.p,{children:"You can see that the only things you need to implement are interactions with the\nuser and Jellyfish Client. This tutorial will show you how to do it."})]})}function s(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8532:(e,t,n)=>{n.d(t,{cp:()=>l});var r=n(7624),a=n(2172),o=n(1268),s=n(5388);function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"There are a couple of ways to start the dashboard:"}),"\n",(0,r.jsxs)(o.c,{children:[(0,r.jsx)(s.c,{value:"main",label:"Up-to-date version",children:(0,r.jsxs)(t.p,{children:["The current version of the dashboard is ready to use and available\n",(0,r.jsx)(t.a,{href:"https://jellyfish-dev.github.io/jellyfish-dashboard/",children:"here"}),".\nEnsure that it is compatible with your Jellyfish server!\nPlease note that this dashboard only supports secure connections (https/wss)\nor connections to localhost. Any insecure requests (http/ws) will be automatically blocked by the browser."]})}),(0,r.jsxs)(s.c,{value:"docker",label:"Docker container",children:[(0,r.jsx)(t.p,{children:"The dashboard is also published as a docker image, you can pull it using:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker pull ghcr.io/jellyfish-dev/jellyfish-dashboard:v0.1.2\n"})})]}),(0,r.jsx)(s.c,{value:"repo",label:"Official repository",children:(0,r.jsxs)(t.p,{children:["You can also clone our ",(0,r.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish-dashboard",children:"repo"}),"\nand run dashboard locally"]})})]})]})}function l(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},1120:(e,t,n)=>{n.d(t,{cp:()=>s});var r=n(7624),a=n(2172);function o(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For testing, we'll run the Jellyfish Media Server locally using Docker image:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'docker run -p 50000-50050:50000-50050/udp \\\n           -p 5002:5002/tcp \\\n           -e JF_CHECK_ORIGIN=false \\\n           -e JF_HOST=<your ip address>:5002 \\\n           -e JF_PORT="5002" \\\n           -e JF_WEBRTC_USED=true \\\n           -e JF_WEBRTC_TURN_PORT_RANGE=50000-50050 \\\n           -e JF_WEBRTC_TURN_IP=<your ip address> \\\n           -e JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \\\n           -e JF_SERVER_API_TOKEN=development \\\n           ghcr.io/jellyfish-dev/jellyfish:0.3.0\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to set ",(0,r.jsx)(t.code,{children:"JF_WEBRTC_TURN_IP"})," and ",(0,r.jsx)(t.code,{children:"JF_HOST"})," to your local IP address. Without it, the mobile device won't be able to connect to the Jellyfish."]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"To check your local IP you can use this handy command (Linux/macOS):"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ifconfig | grep \"inet \" | grep -Fv 127.0.0.1 | awk '{print $2}'\n"})})]})]})}function s(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},9636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>h,metadata:()=>p,toc:()=>f});var r=n(7624),a=n(2172),o=n(1576),s=n(1268),i=n(5388),l=n(8756),c=n(1120),d=n(8532);const h={},u="Simple React App",p={id:"tutorials/simple-react-app",title:"Simple React App",description:"What you'll learn",source:"@site/docs/tutorials/simple-react-app.mdx",sourceDirName:"tutorials",slug:"/tutorials/simple-react-app",permalink:"/jellyfish-docs/next/tutorials/simple-react-app",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/tutorials/simple-react-app.mdx",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Jellyfish Dashboard",permalink:"/jellyfish-docs/next/tutorials/dashboard"},next:{title:"React Native",permalink:"/jellyfish-docs/next/tutorials/react-native"}},m={},f=[{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"What do you need",id:"what-do-you-need",level:2},{value:"Jellyfish architecture",id:"jellyfish-architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Create React + Vite project",id:"create-react--vite-project",level:3},{value:"Add dependencies",id:"add-dependencies",level:3},{value:"Start the Jellyfish backend",id:"start-the-jellyfish-backend",level:3},{value:"Start the dashboard web front-end",id:"start-the-dashboard-web-front-end",level:3},{value:"(Optional) Add a bit of CSS styling",id:"optional-add-a-bit-of-css-styling",level:2},{value:"General project structure",id:"general-project-structure",level:2},{value:"First step - prepare all the hooks and the context",id:"first-step---prepare-all-the-hooks-and-the-context",level:2},{value:"Now we need to wrap our app with the context provider",id:"now-we-need-to-wrap-our-app-with-the-context-provider",level:3},{value:"UI component that will connect to the server and join the room",id:"ui-component-that-will-connect-to-the-server-and-join-the-room",level:2},{value:"Once the UI is ready, we need to implement the logic",id:"once-the-ui-is-ready-we-need-to-implement-the-logic",level:3},{value:"Let&#39;s send our screen to the server",id:"lets-send-our-screen-to-the-server",level:3},{value:"What about the receiving part?",id:"what-about-the-receiving-part",level:2},{value:"This is where the second component comes in handy",id:"this-is-where-the-second-component-comes-in-handy",level:3},{value:"Now the logic for the component",id:"now-the-logic-for-the-component",level:3},{value:"Now we can use it in our main component",id:"now-we-can-use-it-in-our-main-component",level:3},{value:"Summary",id:"summary",level:2}];function x(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"simple-react-app",children:"Simple React App"}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-learn",children:"What you'll learn"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial will guide you through creating your first React project that uses the Jellyfish Client.\nBy the end of the tutorial, you'll have a working web application that connects to\n",(0,r.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish",children:"Jellyfish Media Server"})," using WebRTC technology."]}),"\n",(0,r.jsx)(o.M,{url:"/img/tutorials/react-finished.gif",height:500,alt:"Finished app"}),"\n",(0,r.jsxs)(t.p,{children:["You can check out the finished project ",(0,r.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish-clients-tutorials/tree/main/JellyfishDashboardReact/JellyfishDashboard",children:"here"})]}),"\n",(0,r.jsx)(t.h2,{id:"what-do-you-need",children:"What do you need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"a little bit of experience in creating React apps"}),"\n",(0,r.jsxs)(t.li,{children:["IDE of your choice (for example ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," installed on your machine"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"jellyfish-architecture",children:"Jellyfish architecture"}),"\n",(0,r.jsx)(l.cp,{}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.h3,{id:"create-react--vite-project",children:"Create React + Vite project"}),"\n",(0,r.jsx)(t.p,{children:"Firstly create a brand new project."}),"\n",(0,r.jsx)(s.c,{children:(0,r.jsx)(i.c,{value:"vite",label:"Vite",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest my-react-app -- --template react-ts\n"})})})}),"\n",(0,r.jsx)(t.h3,{id:"add-dependencies",children:"Add dependencies"}),"\n",(0,r.jsx)(s.c,{children:(0,r.jsxs)(i.c,{value:"react",label:"React",children:[(0,r.jsxs)(t.p,{children:["For this module to work you'll need to add our ",(0,r.jsx)(t.code,{children:"react-client-sdk"})," package. This\nis necessary to create and connect Jellyfish Client."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install https://github.com/jellyfish-dev/react-client-sdk#0.1.2\n"})})]})}),"\n",(0,r.jsx)(t.h3,{id:"start-the-jellyfish-backend",children:"Start the Jellyfish backend"}),"\n",(0,r.jsx)(c.cp,{}),"\n",(0,r.jsx)(t.h3,{id:"start-the-dashboard-web-front-end",children:"Start the dashboard web front-end"}),"\n",(0,r.jsx)(d.cp,{}),"\n",(0,r.jsx)(t.h2,{id:"optional-add-a-bit-of-css-styling",children:"(Optional) Add a bit of CSS styling"}),"\n",(0,r.jsxs)(t.p,{children:["For this project, we prepared simple ",(0,r.jsx)(t.a,{href:"https://github.com/Crackhoff/jellyfish-clients-tutorials/blob/main/JellyfishDashboardReact/JellyfishDashboard/src/styles.css",children:"CSS classes"}),",\nYou are free to use it or create your own."]}),"\n",(0,r.jsx)(t.h2,{id:"general-project-structure",children:"General project structure"}),"\n",(0,r.jsx)(t.p,{children:"Our app will consist of two parts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"a component that will connect to the server and join the room"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"a component that will display the video tracks from other participants"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"first-step---prepare-all-the-hooks-and-the-context",children:"First step - prepare all the hooks and the context"}),"\n",(0,r.jsxs)(t.p,{children:["To connect to the Jellyfish backend, we need to create a Membrane Client\ninstance. We can do it by using the ",(0,r.jsx)(t.code,{children:"create"})," function from the\n",(0,r.jsx)(t.code,{children:"@jellyfish-dev/react-client-sdk"})," package. It needs two generic parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"PeerMetadata"})," - the type of metadata that will be sent to the server when\nconnecting to the room (for example, user name) it has to be serializable"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TrackMetadata"})," - the type of the metadata that will be sent to the server when\nsending a track (for example, track name) it has to be serializable as well"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import React from "react";\nimport { create } from "@jellyfish-dev/react-client-sdk";\n\n// Example metadata types for peer and track\n// You can define your metadata types just make sure they are serializable\ntype PeerMetadata = {\n  name: string;\n};\n\ntype TrackMetadata = {\n  type: "camera" | "screen";\n};\n\n// Create a Jellyfish client instance\n// Since we will use this context outside of the component we need to export it\nexport const {\n  JellyfishContextProvider, // Context provider\n} = create<PeerMetadata, TrackMetadata>();\n\nexport const App = () => {};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"now-we-need-to-wrap-our-app-with-the-context-provider",children:"Now we need to wrap our app with the context provider"}),"\n",(0,r.jsxs)(t.p,{children:["That's all we will need to do in this file. Simply import the ",(0,r.jsx)(t.code,{children:"JellyfishContextProvider"})," along with the ",(0,r.jsx)(t.code,{children:"App"}),"\ncomponent and wrap the ",(0,r.jsx)(t.code,{children:"App"})," component with the ",(0,r.jsx)(t.code,{children:"JellyfishContextProvider"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="main.tsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { App, JellyfishContextProvider } from "./components/App";\n\nReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n  <React.StrictMode>\n    <JellyfishContextProvider>\n      <App />\n    </JellyfishContextProvider>\n  </React.StrictMode>\n);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ui-component-that-will-connect-to-the-server-and-join-the-room",children:"UI component that will connect to the server and join the room"}),"\n",(0,r.jsx)(t.p,{children:"The UI of the component will be quite simple. It will consist of a simple text input field\nthat will allow us to enter the peer token and a button that\nwill connect to the server and join the room. We can also display the status of the connection."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import React, { useState } from "react";\n//...\nexport const App = () => {\n  // Create a state to store the peer token\n  const [token, setToken] = useState("");\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\n    <input value={token} onChange={(e) => setToken(() => e?.target?.value)} placeholder="token" />\n    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>\n\n       <button\n          disabled={}\n          onClick={() => {}};\n        >\n          Connect\n        </button>\n        <button\n          disabled={}\n          onClick={() => {}};\n        >\n          Disconnect\n        </button>\n        <span>Status: {}</span>\n    </div>\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"once-the-ui-is-ready-we-need-to-implement-the-logic",children:"Once the UI is ready, we need to implement the logic"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { SignalingUrl } from "@jellyfish-dev/react-client-sdk/.";\n//...\nexport const {\n  // highlight-start\n  useStatus, // Hook to check the status of the connection\n  useConnect, // Hook to connect to the server\n  useDisconnect, // Hook to disconnect from the server\n  // highlight-end\n  JellyfishContextProvider, // Context provider\n};\nexport const App = () => {\n  // Create a state to store the peer token\n  const [token, setToken] = useState("");\n  // Use the built-in hook to check the status of the connection\n  const status = useStatus();\n  const connect = useConnect();\n  const disconnect = useDisconnect();\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\n      <input\n        className="input-field"\n        value={token}\n        onChange={(e) => setToken(() => e?.target?.value)}\n        placeholder="token"\n      />\n      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>\n        <button\n          className="button"\n          disabled={token === "" || status === "joined"} // simple check to avoid errors\n          onClick={() => {\n            // highlight-start\n            connect({\n              peerMetadata: { name: "John Doe" }, // example metadata\n              token: token,\n            });\n            // highlight-end\n          }}\n        >\n          Connect\n        </button>\n        <button\n          className="button"\n          disabled={status !== "joined"}\n          onClick={() => {\n            // highlight-next-line\n            disconnect();\n          }}\n        >\n          Disconnect\n        </button>\n        // highlight-next-line\n        <span className="span-status">Status: {status}</span>\n      </div>\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"Great! Now we can connect to the server and join the room. But we still need to\nadd some logic to send our tracks to the server and receive tracks from others."}),"\n",(0,r.jsx)(t.h3,{id:"lets-send-our-screen-to-the-server",children:"Let's send our screen to the server"}),"\n",(0,r.jsxs)(t.p,{children:["This hook uses ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices",children:"Navigator.mediaDevices"})," take a look how it works"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import React, { useEffect, useState } from "react";\nimport { create, SCREEN_SHARING_MEDIA_CONSTRAINTS } from "@jellyfish-dev/react-client-sdk";\nimport { SignalingUrl, Peer } from "@jellyfish-dev/react-client-sdk/.";\n//...\nexport const {\n  useStatus, // Hook to check the status of the connection\n  // highlight-next-line\n  useApi, // Hook to get the webrtcApi reference\n  useConnect, // Hook to connect to the server\n  useDisconnect, // Hook to disconnect from the server\n  JellyfishContextProvider, // Context provider\n} = create<PeerMetadata, TrackMetadata>();\n\nexport const App = () => {\n  //...\n  // Get the webrtcApi reference\n  const webrtcApi = useApi();\n\n   function startScreenSharing() {\n      // Get screen sharing MediaStream\n            navigator.mediaDevices.getDisplayMedia(SCREEN_SHARING_MEDIA_CONSTRAINTS).then((screenStream) => {\n              // Add local MediaStream to webrtc\n              screenStream.getTracks().forEach((track) => webrtcApi.addTrack(track, screenStream, { type: "screen" }));\n    };\n   };\n   return (\n  //...\n  <button\n  className="button"\n    disabled={status !== "joined"}\n    onClick={() => {\n      startScreenSharing();\n    }}\n  >\n    Start screen share\n  </button>\n  <span>Status: {status}</span>\n  //...\n  )\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should now see your screen received for each connected client on the dashboard. You can add another participant to check this out!"}),"\n",(0,r.jsx)(t.p,{children:"The streaming part of the app is ready!"}),"\n",(0,r.jsx)(t.h2,{id:"what-about-the-receiving-part",children:"What about the receiving part?"}),"\n",(0,r.jsx)(t.h3,{id:"this-is-where-the-second-component-comes-in-handy",children:"This is where the second component comes in handy"}),"\n",(0,r.jsx)(t.p,{children:"For each track received, we will create a new video element and display it on the screen. For clarity, we will separate this component into another file:"}),"\n",(0,r.jsxs)(t.p,{children:["Create in your directory file ",(0,r.jsx)(t.code,{children:"VideoPlayer.tsx"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="VideoPlayer.tsx"',children:'type Props = {\n  stream: MediaStream | null | undefined;\n};\n\nconst VideoPlayer = ({ stream }: Props) => {\n  return (\n    <div className="video-container">\n      <video autoPlay playsInline muted ref={/* place for track ref*/} />\n    </div>\n  );\n};\n\nexport default VideoPlayer;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"now-the-logic-for-the-component",children:"Now the logic for the component"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="VideoPlayer.tsx"',children:"type Props = {\n  stream: MediaStream | null | undefined;\n};\n\nconst VideoPlayer = ({ stream }: Props) => {\n  const videoRef: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);\n\n  useEffect(() => {\n    if (!videoRef.current) return;\n    videoRef.current.srcObject = stream || null;\n  }, [stream]);\n\n  return (\n    <div>\n      <video autoPlay playsInline muted ref={videoRef} />\n    </div>\n  );\n};\n\nexport default VideoPlayer;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"now-we-can-use-it-in-our-main-component",children:"Now we can use it in our main component"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import React, { useEffect, useState } from "react";\nimport { create, SCREEN_SHARING_MEDIA_CONSTRAINTS } from "@jellyfish-dev/react-client-sdk";\nimport { SignalingUrl, Peer } from "@jellyfish-dev/react-client-sdk/.";\nimport VideoPlayer from "./VideoPlayer";\n//...\n\nexport const {\n useStatus, // Hook to check the status of the connection\n  // highlight-next-line\n  useTracks, // Hook to get the tracks from the server\n  useApi, // Hook to get the webrtcApi reference\n  useConnect, // Hook to connect to the server\n  useDisconnect, // Hook to disconnect from the server\n  JellyfishContextProvider, // Context provider\n} = create<PeerMetadata, TrackMetadata>();\nexport const App = () => {\n  const tracks = useTracks();\n  //...\n  <div\n        style={{\n          display: "flex",\n          flexWrap: "wrap",\n          justifyContent: "center", // To align items in the center\n          gap: "20px",\n        }}\n      >\n  {Object.values(tracks).map(({ stream, trackId }) => (\n        <VideoPlayer key={trackId} stream={stream} /> // pass the stream to the component\n      ))}\n  </div>\n  //...\n  )\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should see all the tracks sent from the dashboard directly on your page, to test them, add a new client, and add a track (for example a rotating frog). It will show up in your app automatically:"}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"Congrats on finishing your first Jellyfish web application! In this tutorial,\nYou've learned how to make a basic Jellyfish client application that streams your screen and\nreceives video tracks with WebRTC technology."}),"\n",(0,r.jsx)(t.p,{children:"But this was just the beginning. Jellyfish Client supports much more than just\nstreaming camera: It can also stream audio or your device's camera,\nconfigure your camera and audio devices, detect voice activity, control\nsimulcast, bandwidth and encoding settings, show camera preview, display WebRTC\nstats and more to come. Check out our other tutorials to learn about those\nfeatures."}),"\n",(0,r.jsxs)(t.p,{children:["You can also take a look at our fully featured ",(0,r.jsx)(t.a,{href:"https://github.com/jellyfish-dev/react-native-membrane-webrtc/tree/master/example",children:"Videoroom Demo\nexample"}),":"]}),"\n",(0,r.jsx)(o.M,{url:"/img/tutorials/videoroom.gif",alt:"Videoroom Demo"})]})}function y(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},1576:(e,t,n)=>{n.d(t,{M:()=>s});n(1504);var r=n(964),a=n(1964),o=n(7624);const s=e=>{let{url:t,height:n,alt:s}=e;return(0,o.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(a.c,{height:n,alt:s,sources:{light:(0,r.c)(t),dark:(0,r.c)(t)}})})}},5388:(e,t,n)=>{n.d(t,{c:()=>s});n(1504);var r=n(4064);const a={tabItem:"tabItem_Ymn6"};var o=n(7624);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,s),hidden:n,children:t})}},1268:(e,t,n)=>{n.d(t,{c:()=>w});var r=n(1504),a=n(4064),o=n(3943),s=n(5592),i=n(5288),l=n(632),c=n(7128),d=n(1148);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,h]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.IN)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,i.c)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,o]),tabValues:o}}var x=n(3664);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(7624);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,a.c)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.c)("tabs-container",y.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function w(e){const t=(0,x.c)();return(0,j.jsx)(b,{...e,children:h(e.children)},String(t))}},2824:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/connection-1c1c4ee125e1e5dec0fcfad61e0174a8.png"},6471:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/dashboard_connection-06d1d36ef4f41cc0672c2df0511af63a.png"},48:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/room_example-e9c6acb4df6063de5a8978dc6710b909.png"},2172:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var r=n(1504);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);