"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[632],{20932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(17624),s=n(4552);const r={},o="Notifications",c={id:"getting_started/notifications",title:"Notifications",description:"Jellyfish sends server side notifications whenever some important event occurs, e.g.:",source:"@site/versioned_docs/version-0.2.1/getting_started/notifications.md",sourceDirName:"getting_started",slug:"/getting_started/notifications",permalink:"/jellyfish-docs/0.2.1/getting_started/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.1/getting_started/notifications.md",tags:[],version:"0.2.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/jellyfish-docs/0.2.1/getting_started/authentication"},next:{title:"Metrics",permalink:"/jellyfish-docs/0.2.1/getting_started/metrics"}},l={},a=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"notifications",children:"Notifications"}),"\n",(0,i.jsx)(t.p,{children:"Jellyfish sends server side notifications whenever some important event occurs, e.g.:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a room has been created"}),"\n",(0,i.jsx)(t.li,{children:"some peer has connected"}),"\n",(0,i.jsx)(t.li,{children:"component has crashed"}),"\n",(0,i.jsx)(t.li,{children:"etc."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A full list of available notifications is always present in specific server SDK documentation.\nHere, we present how you can subscribe for server side notifications using Elixir Server SDK:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\n\n{:ok, notifier} =\n  Jellyfish.Notifier.start(server_address: server_address, server_api_token: server_api_token)\n\n:ok = Jellyfish.Notifier.subscribe_server_notifications(notifier)\n:ok = Jellyfish.Notifier.subscribe_metrics(notifier)\n'})}),"\n",(0,i.jsx)(t.p,{children:"As a result, you should see the following logs on the server side"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"07:45:02.684 [info] New incoming server WebSocket connection, accepting\n07:45:02.688 [info] Server WS authenticated.\n"})})]})}function f(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var i=n(11504);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);