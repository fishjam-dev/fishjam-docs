"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[936],{77328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(17624),r=s(4552);const i={},d="WebRTC",c={id:"benchmarks/webrtc",title:"WebRTC",description:"The WebRTC tests conducted for the Jellyfish media server aimed to assess its performance and reliability in handling real-time communication scenarios, replicating real-life online meetings.",source:"@site/versioned_docs/version-0.4.1/benchmarks/webrtc.md",sourceDirName:"benchmarks",slug:"/benchmarks/webrtc",permalink:"/jellyfish-docs/benchmarks/webrtc",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.4.1/benchmarks/webrtc.md",tags:[],version:"0.4.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"HLS",permalink:"/jellyfish-docs/benchmarks/hls"},next:{title:"Design Docs",permalink:"/jellyfish-docs/for_developers/design_docs"}},h={},l=[{value:"Setup",id:"setup",level:2},{value:"Benchmark results",id:"benchmark-results",level:2}];function o(e){const n={h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"webrtc",children:"WebRTC"}),"\n",(0,t.jsx)(n.p,{children:"The WebRTC tests conducted for the Jellyfish media server aimed to assess its performance and reliability in handling real-time communication scenarios, replicating real-life online meetings."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"The benchmarks use an 8-core Intel Xeon Processor (Skylake, IBRS)."}),"\n",(0,t.jsx)(n.p,{children:"The peers publish audio tracks and simulcast video tracks,\npublishing three video encodings of 150, 500 and 1500 Kbps\nand receiving the highest one."}),"\n",(0,t.jsx)(n.p,{children:"The load is generated from a AMD EPYC 7502P 32-core machine,\nwith a 1 Gbps bandwidth connection."}),"\n",(0,t.jsx)(n.h2,{id:"benchmark-results",children:"Benchmark results"}),"\n",(0,t.jsx)(n.p,{children:"We performed tests with different configuration - multiple rooms of size two,\none big room and an intermediate option."}),"\n",(0,t.jsx)(n.p,{children:"The values for CPU and Network usage are averaged over time, however they\nremained stable for the duration of the benchmark."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Rooms"}),(0,t.jsx)(n.th,{children:"Peers Per Room"}),(0,t.jsx)(n.th,{children:"CPU Usage"}),(0,t.jsx)(n.th,{children:"Incoming throughput"}),(0,t.jsx)(n.th,{children:"Outgoing throughput"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"92%"}),(0,t.jsx)(n.td,{children:"70 Mbps"}),(0,t.jsx)(n.td,{children:"49 Mbps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"91%"}),(0,t.jsx)(n.td,{children:"35 Mbps"}),(0,t.jsx)(n.td,{children:"98 Mbps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"91%"}),(0,t.jsx)(n.td,{children:"21 Mbps"}),(0,t.jsx)(n.td,{children:"118 Mbps"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"We also tested a scenario in which there are only two active participants, streaming their video\nand audio, while the rest are passive viewers."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Rooms"}),(0,t.jsx)(n.th,{children:"Peers Per Room"}),(0,t.jsx)(n.th,{children:"CPU Usage"}),(0,t.jsx)(n.th,{children:"Incoming throughput"}),(0,t.jsx)(n.th,{children:"Outgoing throughput"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"40"}),(0,t.jsx)(n.td,{children:"90%"}),(0,t.jsx)(n.td,{children:"5 Mbps"}),(0,t.jsx)(n.td,{children:"129 Mbps"})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>d});var t=s(11504);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);