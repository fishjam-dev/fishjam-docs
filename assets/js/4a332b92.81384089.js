"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6348],{6836:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var t=s(7624),i=s(2172),r=s(964),l=s(1964);const c={},o="Architecture",a={id:"getting_started/architecture",title:"Architecture",description:"Jellyfish ships with a couple of SDKs that make it easier to manage its state, as well as",source:"@site/docs/getting_started/architecture.md",sourceDirName:"getting_started",slug:"/getting_started/architecture",permalink:"/jellyfish-docs/next/getting_started/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/jellyfish-docs/next/getting_started/installation"},next:{title:"Authentication",permalink:"/jellyfish-docs/next/getting_started/authentication"}},d={},h=[{value:"Server SDKs",id:"server-sdks",level:2},{value:"Client SDKs",id:"client-sdks",level:2},{value:"Diagram",id:"diagram",level:2}];function m(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"Jellyfish ships with a couple of SDKs that make it easier to manage its state, as well as\npublish and consume tracks."}),"\n",(0,t.jsx)(n.p,{children:"There are two types of SDKs: server side and client side."}),"\n",(0,t.jsx)(n.h2,{id:"server-sdks",children:"Server SDKs"}),"\n",(0,t.jsx)(n.p,{children:"Server SDKs allow you to manage Jellyfish state.\nIn particular, you can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"authenticate"}),"\n",(0,t.jsx)(n.li,{children:"create/delete rooms"}),"\n",(0,t.jsx)(n.li,{children:"add/remove peers"}),"\n",(0,t.jsx)(n.li,{children:"add/remove components"}),"\n",(0,t.jsx)(n.li,{children:"subscribe for notifications"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Under the hood, Server SDKs just use Jellyfish REST and WS API, see ",(0,t.jsx)(n.a,{href:"/jellyfish-docs/next/for_developers/api_reference",children:"Jellyfish API"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"As an example, you can use server SDK to introduce a time limit on meeting duration and shut down the room after it passes."})}),"\n",(0,t.jsx)(n.h2,{id:"client-sdks",children:"Client SDKs"}),"\n",(0,t.jsx)(n.p,{children:"Client SDKs allow you to connect to Jellyfish to publish and consume tracks.\nIn particular, you can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"authenticate"}),"\n",(0,t.jsx)(n.li,{children:"join specific room"}),"\n",(0,t.jsx)(n.li,{children:"publish audio and video"}),"\n",(0,t.jsx)(n.li,{children:"receive audio and video from other peers and components"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"At the moment, Jellyfish supports only one type of client - WebRTC."}),"\n",(0,t.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,t.jsx)(n.p,{children:"The whole concept is presented in the following diagram."}),"\n",(0,t.jsx)(l.c,{alt:"Jellyfish architecture",sources:{light:(0,r.c)("/img/architecture-light.png"),dark:(0,r.c)("/img/architecture-dark.png")}}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Your Backend (BE)"})," - serves your application frontend, and manages the database and\napplication-specific logic."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Jellyfish (JF)"})," - Jellyfish media server.\nManages media."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Admin"})," - someone who has special permission in your application - can create/delete\nrooms, add/remove peers, etc."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User"})," - someone who connects to Jellyfish to send and receive media."]}),"\n",(0,t.jsxs)(n.p,{children:["Everything starts with ",(0,t.jsx)(n.em,{children:"Admin"})," who sends an HTTP request to ",(0,t.jsx)(n.em,{children:"BE"})," to create a new room.\n",(0,t.jsx)(n.em,{children:"BE"})," uses ",(0,t.jsx)(n.em,{children:"jellyfish-server-sdk"})," to communicate with ",(0,t.jsx)(n.em,{children:"JF"})," and create the room.\nUnder the hood, ",(0,t.jsx)(n.em,{children:"jellyfish-server-sdk"})," uses REST API exposed by ",(0,t.jsx)(n.em,{children:"JF"}),".\nAfter the room has been created, the ",(0,t.jsx)(n.em,{children:"Admin"})," invites a user by sending a new HTTP request to ",(0,t.jsx)(n.em,{children:"BE"}),".\nAgain, ",(0,t.jsx)(n.em,{children:"BE"})," uses ",(0,t.jsx)(n.em,{children:"jellyfish-server-sdk"})," to add the new peer to ",(0,t.jsx)(n.em,{children:"JF"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["On the user side, they send a request to ",(0,t.jsx)(n.em,{children:"BE"})," to join the room.\n",(0,t.jsx)(n.em,{children:"BE"})," replies with ",(0,t.jsx)(n.em,{children:"JF"})," IP address it should connect to.\nThen, the ",(0,t.jsx)(n.em,{children:"User"})," uses ",(0,t.jsx)(n.em,{children:"jellyfish-client-sdk"})," to connect to ",(0,t.jsx)(n.em,{children:"JF"}),".\nAfter the connection has been established, the ",(0,t.jsx)(n.em,{children:"User"})," can send and receive media."]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var t=s(1504);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);