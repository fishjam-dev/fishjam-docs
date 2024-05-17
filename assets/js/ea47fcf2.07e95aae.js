"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[7527],{89947:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=n(74848),i=n(28453);const r={},d="HLS",l={id:"benchmarks/hls",title:"HLS",description:"The conducted stress tests were geared towards assessing performance of both regular HLS",source:"@site/versioned_docs/version-0.5.0/benchmarks/hls.md",sourceDirName:"benchmarks",slug:"/benchmarks/hls",permalink:"/fishjam-docs/0.5.0/benchmarks/hls",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.5.0/benchmarks/hls.md",tags:[],version:"0.5.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Benchmarks",permalink:"/fishjam-docs/0.5.0/benchmarks"},next:{title:"WebRTC",permalink:"/fishjam-docs/0.5.0/benchmarks/webrtc"}},c={},h=[{value:"Setup",id:"setup",level:2},{value:"Machine specs",id:"machine-specs",level:3},{value:"Test results",id:"test-results",level:2},{value:"Regular HLS",id:"regular-hls",level:3},{value:"Low-Latency HLS",id:"low-latency-hls",level:3}];function a(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"hls",children:"HLS"}),"\n",(0,t.jsx)(s.p,{children:"The conducted stress tests were geared towards assessing performance of both regular HLS\nand Low-Latency HLS under substantial load."}),"\n",(0,t.jsx)(s.p,{children:"We assumed a livestream scenario, where all of the clients demanded the most recent segments or partial segments\nas they were produced. This model closely simulates real-time broadcasting situations where all participants\nare consuming the same (latest) content concurrently. It could be contrasted e.g. with a video-on-demand (VOD)\nscenario, where any client can request any segment at any given time."}),"\n",(0,t.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Machine ",(0,t.jsx)(s.code,{children:"A"}),", running Jellyfish with one room"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["One WebRTC peer in the room (WebRTC video stream with ",(0,t.jsx)(s.strong,{children:"constant bitrate of 1.8 Mbps"}),")"]}),"\n",(0,t.jsx)(s.li,{children:"One HLS component in the room (segment length: 6 s, partial segment length: 1 s)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Machine ",(0,t.jsx)(s.code,{children:"B"}),", running a stress test utility"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The utility steadily increases the number of simulated clients over the course of the test, up to a given amount"}),"\n",(0,t.jsx)(s.li,{children:"Clients simulate an HLS player continuously requesting the most recent segments/partials\n(as if watching a livestream)"}),"\n",(0,t.jsxs)(s.li,{children:["Each client opens a separate connection to Jellyfish on machine ",(0,t.jsx)(s.code,{children:"A"})," (no connection pooling)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"machine-specs",children:"Machine specs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CPU: AMD EPYC 7502P (32 cores, 64 threads at 2.5 GHz)"}),"\n",(0,t.jsx)(s.li,{children:"Memory: 128 GB"}),"\n",(0,t.jsxs)(s.li,{children:["Network bandwidth (",(0,t.jsx)(s.code,{children:"A <---\x3e B"}),"): 10 Gbps"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"test-results",children:"Test results"}),"\n",(0,t.jsx)(s.p,{children:"We varied the number of client connections and recorded server metrics at each level\nto determine how it would perform under increasing load. Values for mean incoming throughput,\nmean and peak outgoing throughput, peak memory used, peak CPU utilisation and mean request latency\n(grouped by request type) were all recorded."}),"\n",(0,t.jsx)(s.p,{children:"Before any clients were connected to the server, the memory usage stood at 130 MB\nand CPU utilisation was noted at 11%. These values serve as the base or idle state of the server\nfor comparison against the usage under stress testing."}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"It's important to remember that, in the context of HLS, the outgoing throughput is greatly influenced by the bitrate\nof the generated segments, which is directly connected to the bitrate of the streams used for segment generation.\nSpecifically, for video streams featuring high and fluctuating bitrates (such as sports events and video game\nlive streams) you may typically observe amplified mean and peak outgoing throughputs."})}),"\n",(0,t.jsx)(s.admonition,{title:"Caveat",type:"caution",children:(0,t.jsxs)(s.p,{children:["Values ",(0,t.jsx)(s.em,{children:"italicised"})," in the Latency columns indicate instances where network bandwidth limits were reached,\nresulting in throttling; in such cases, the observed latency ",(0,t.jsx)(s.strong,{children:"does not"})," reflect the server's\ninnate processing capabilities."]})}),"\n",(0,t.jsx)(s.h3,{id:"regular-hls",children:"Regular HLS"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Client connections"}),(0,t.jsx)(s.th,{children:"Incoming throughput (mean)"}),(0,t.jsx)(s.th,{children:"Outgoing throughput (mean)"}),(0,t.jsx)(s.th,{children:"Outgoing throughput (peak)"}),(0,t.jsx)(s.th,{children:"Memory used (peak)"}),(0,t.jsx)(s.th,{children:"CPU utilisation (peak)"}),(0,t.jsx)(s.th,{children:"Playlist request latency (mean)"}),(0,t.jsx)(s.th,{children:"Segment request latency (mean)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"500"}),(0,t.jsx)(s.td,{children:"6 Mbps"}),(0,t.jsx)(s.td,{children:"0.9 Gbps"}),(0,t.jsx)(s.td,{children:"1.3 Gbps"}),(0,t.jsx)(s.td,{children:"0.9 GB"}),(0,t.jsx)(s.td,{children:"18%"}),(0,t.jsx)(s.td,{children:"4 ms"}),(0,t.jsx)(s.td,{children:"66 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1000"}),(0,t.jsx)(s.td,{children:"12 Mbps"}),(0,t.jsx)(s.td,{children:"1.9 Gbps"}),(0,t.jsx)(s.td,{children:"2.6 Gbps"}),(0,t.jsx)(s.td,{children:"1.9 GB"}),(0,t.jsx)(s.td,{children:"19%"}),(0,t.jsx)(s.td,{children:"3 ms"}),(0,t.jsx)(s.td,{children:"65 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2000"}),(0,t.jsx)(s.td,{children:"24 Mbps"}),(0,t.jsx)(s.td,{children:"3.6 Gbps"}),(0,t.jsx)(s.td,{children:"5.2 Gbps"}),(0,t.jsx)(s.td,{children:"2.8 GB"}),(0,t.jsx)(s.td,{children:"23%"}),(0,t.jsx)(s.td,{children:"3 ms"}),(0,t.jsx)(s.td,{children:"66 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3000"}),(0,t.jsx)(s.td,{children:"36 Mbps"}),(0,t.jsx)(s.td,{children:"5.1 Gbps"}),(0,t.jsx)(s.td,{children:"6.5 Gbps"}),(0,t.jsx)(s.td,{children:"4.5 GB"}),(0,t.jsx)(s.td,{children:"30%"}),(0,t.jsx)(s.td,{children:"4 ms"}),(0,t.jsx)(s.td,{children:"67 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4000"}),(0,t.jsx)(s.td,{children:"48 Mbps"}),(0,t.jsx)(s.td,{children:"7.0 Gbps"}),(0,t.jsxs)(s.td,{children:["9.2 Gbps ",(0,t.jsx)(s.em,{children:"(limit)"})]}),(0,t.jsx)(s.td,{children:"9.2 GB"}),(0,t.jsx)(s.td,{children:"34%"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"17 ms*"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"243 ms*"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"low-latency-hls",children:"Low-Latency HLS"}),"\n",(0,t.jsx)(s.p,{children:'In Low-Latency HLS, the server intentionally delays the response to playlist requests\nuntil the specifically requested partial segment becomes available.\nThis makes the "Playlist request latency (mean)" metric meaningless, and it is thus omitted from the following table.'}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Client connections"}),(0,t.jsx)(s.th,{children:"Incoming throughput (mean)"}),(0,t.jsx)(s.th,{children:"Outgoing throughput (mean)"}),(0,t.jsx)(s.th,{children:"Outgoing throughput (peak)"}),(0,t.jsx)(s.th,{children:"Memory used (peak)"}),(0,t.jsx)(s.th,{children:"CPU utilisation (peak)"}),(0,t.jsx)(s.th,{children:"Partial segment request latency (mean)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"500"}),(0,t.jsx)(s.td,{children:"25 Mbps"}),(0,t.jsx)(s.td,{children:"1.1 Gbps"}),(0,t.jsx)(s.td,{children:"4.7 Gbps"}),(0,t.jsx)(s.td,{children:"210 MB"}),(0,t.jsx)(s.td,{children:"25%"}),(0,t.jsx)(s.td,{children:"98 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1000"}),(0,t.jsx)(s.td,{children:"50 Mbps"}),(0,t.jsx)(s.td,{children:"2.3 Gbps"}),(0,t.jsx)(s.td,{children:"9.0 Gbps"}),(0,t.jsx)(s.td,{children:"290 MB"}),(0,t.jsx)(s.td,{children:"34%"}),(0,t.jsx)(s.td,{children:"138 ms"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1500"}),(0,t.jsx)(s.td,{children:"75 Mbps"}),(0,t.jsx)(s.td,{children:"3.3 Gbps"}),(0,t.jsxs)(s.td,{children:["9.2 Gbps ",(0,t.jsx)(s.em,{children:"(limit)"})]}),(0,t.jsx)(s.td,{children:"340 MB"}),(0,t.jsx)(s.td,{children:"43%"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"244 ms*"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2000"}),(0,t.jsx)(s.td,{children:"100 Mbps"}),(0,t.jsx)(s.td,{children:"4.5 Gbps"}),(0,t.jsxs)(s.td,{children:["9.2 Gbps ",(0,t.jsx)(s.em,{children:"(limit)"})]}),(0,t.jsx)(s.td,{children:"410 MB"}),(0,t.jsx)(s.td,{children:"47%"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"341 ms*"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2500"}),(0,t.jsx)(s.td,{children:"125 Mbps"}),(0,t.jsx)(s.td,{children:"5.7 Gbps"}),(0,t.jsxs)(s.td,{children:["9.2 Gbps ",(0,t.jsx)(s.em,{children:"(limit)"})]}),(0,t.jsx)(s.td,{children:"480 MB"}),(0,t.jsx)(s.td,{children:"48%"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"402 ms*"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3000"}),(0,t.jsx)(s.td,{children:"150 Mbps"}),(0,t.jsx)(s.td,{children:"6.6 Gbps"}),(0,t.jsxs)(s.td,{children:["9.2 Gbps ",(0,t.jsx)(s.em,{children:"(limit)"})]}),(0,t.jsx)(s.td,{children:"560 MB"}),(0,t.jsx)(s.td,{children:"50%"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{children:"514 ms*"})})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);