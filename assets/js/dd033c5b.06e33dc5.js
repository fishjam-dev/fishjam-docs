"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[6543],{42493:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(74848),o=i(28453);const t={},r="Cluster",l={id:"cluster",title:"Cluster",description:"Jellyfish comes with a built-in clustering mechanism.",source:"@site/versioned_docs/version-0.2.1/cluster.md",sourceDirName:".",slug:"/cluster",permalink:"/fishjam-docs/0.2.1/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.2.1/cluster.md",tags:[],version:"0.2.1",frontMatter:{},sidebar:"mainSidebar",previous:{title:"React Native",permalink:"/fishjam-docs/0.2.1/tutorials/react-native"},next:{title:"Cloud VPS with cloud-init",permalink:"/fishjam-docs/0.2.1/deploying/vps"}},a={},c=[{value:"Configuring a Cluster",id:"configuring-a-cluster",level:2},{value:"Examples",id:"examples",level:2},{value:"Running from source",id:"running-from-source",level:3},{value:"Running with Docker (locally)",id:"running-with-docker-locally",level:3},{value:"Running with Docker (globally)",id:"running-with-docker-globally",level:3},{value:"Verifying that a cluster has been created",id:"verifying-that-a-cluster-has-been-created",level:2},{value:"Deeper dive into Erlang Distribution",id:"deeper-dive-into-erlang-distribution",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cluster",children:"Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["Jellyfish comes with a built-in clustering mechanism.\nBy a cluster, we mean a set of connected Jellyfish instances.\nWhenever a new request for creating a room is sent to one of Jellyfishes in a cluster, this Jellyfish\ncommunicates with all other nodes and creates a room on the node with the lowest load.\nIn response, a Jellyfish address (specified with ",(0,s.jsx)(n.code,{children:"JF_HOST"})," environment variable) where the room was created is returned."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Even when running a cluster of Jellyfishes, a room still has to fit into one Jellyfish.\nCurrently, Jellyfish doesn't offer an option to split a room across multiple machines."})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-a-cluster",children:"Configuring a Cluster"}),"\n",(0,s.jsx)(n.p,{children:"Jellyfish cluster can be created in 4 simple steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Enable distribution mode with ",(0,s.jsx)(n.code,{children:"JF_DIST_ENABLED=true"})]}),"\n",(0,s.jsxs)(n.li,{children:["Give your node a name with ",(0,s.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})]}),"\n",(0,s.jsxs)(n.li,{children:["Specify a list of nodes to connect to with ",(0,s.jsx)(n.code,{children:"JF_DIST_NODES"})]}),"\n",(0,s.jsxs)(n.li,{children:["Configure HTTP and metrics ports so they don't overlap with other nodes.\nYou can do this with ",(0,s.jsx)(n.code,{children:"JF_PORT"})," and ",(0,s.jsx)(n.code,{children:"JF_METRICS_PORT"})," environment variables."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Distribution Environment Variables",type:"tip",children:(0,s.jsxs)(n.p,{children:["List of all cluster-related environment variables is available ",(0,s.jsx)(n.a,{href:"./getting_started/installation#distribution",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Security",type:"warning",children:(0,s.jsx)(n.p,{children:"Currently, Jellyfish distribution is not encrypted meaning that data between\nJellyfishes is sent as plain text.\nCookie does not provide any cryptographic security.\nDo run a cluster only across machines in the same network!"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Extra network Configuration",type:"caution",children:[(0,s.jsx)(n.p,{children:"Jellyfish leverages Erlang Distribution to form a cluster.\nThis means that we don't need to use any database where we would store\ninformation about network topology.\nInstead, some extra network configuration might be needed."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Jellyfish uses a service called EPMD (Erlang Port Mapper Deamon)\nthat runs on port ",(0,s.jsx)(n.code,{children:"4369"})," (TCP).\nIf you run Jellyfish using Docker, you have to explicitly export this port.\nIn production deployment, you also have to allow for traffic on this port in your firewall.\nEPMD is started automatically when running Jellyfish, so you don't need to take\nany extra steps to make it work."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Jellyfish uses a random port for connecting to other Jellyfishes.\nIf you run Jellyfish using Docker, this port defaults to ",(0,s.jsx)(n.code,{children:"9000"})," (TCP) but you can configure\nthe range it is selected from with ",(0,s.jsx)(n.code,{children:"JF_DIST_MIN_PORT"})," and ",(0,s.jsx)(n.code,{children:"JF_DIST_MAX_PORT"}),".\nNote that ",(0,s.jsx)(n.code,{children:"JF_DIST_MIN_PORT"})," and ",(0,s.jsx)(n.code,{children:"JF_DIST_MAX_PORT"})," are not available when running from source\n(using ",(0,s.jsx)(n.code,{children:"mix phx.server"}),") as in development you don't have to worry about the port used for\nforming a cluster.\nAs in the case of EPMD, in production deployment, you have to modify your firewall rules appropriately."]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"#deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"})," for more information."]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"running-from-source",children:"Running from source"}),"\n",(0,s.jsx)(n.p,{children:"Run the first Jellyfish:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j1@127.0.0.1 mix phx.server\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the second Jellyfish"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j2@127.0.0.1 JF_DIST_NODES="j1@127.0.0.1" JF_PORT=4002 JF_METRICS_PORT=9468 mix phx.server\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Note that when running the second Jellyfish, we had to change its HTTP and metrics ports."})}),"\n",(0,s.jsx)(n.h3,{id:"running-with-docker-locally",children:"Running with Docker (locally)"}),"\n",(0,s.jsx)(n.p,{children:"This simple docker compose file sets a cluster of two Jellyfishes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'version: "3"\n\nx-jellyfish-template: &jellyfish-template\n  build: .\n  environment: &jellyfish-environment\n    JF_SERVER_API_TOKEN: "development"\n    JF_DIST_ENABLED: "true"\n    JF_DIST_MODE: "sname"\n    JF_DIST_NODES: "j1@jellyfish1 j2@jellyfish2"\n  restart: on-failure\n\nservices:\n  jellyfish1:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5001"\n      JF_PORT: 5001\n      JF_METRICS_PORT: 6001\n      JF_DIST_NODE_NAME: j1@jellyfish1\n    ports:\n      - 5001:5001\n      - 6001:6001\n\n  jellyfish2:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5002"\n      JF_PORT: 5002\n      JF_METRICS_PORT: 6002\n      JF_DIST_NODE_NAME: j2@jellyfish2\n    ports:\n      - 5002:5002\n      - 6002:6002\n'})}),"\n",(0,s.jsx)(n.p,{children:"Because we run Jellyfishes in the same Docker network:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["we can use ",(0,s.jsx)(n.code,{children:'JF_DIST_NODE: "sname"'}),", which allows\nus to reference Jellyfishes using their service names so\n",(0,s.jsx)(n.code,{children:"jellyfish1"})," and ",(0,s.jsx)(n.code,{children:"jellyfish2"})]}),"\n",(0,s.jsxs)(n.li,{children:["we don't need to export EPMD (",(0,s.jsx)(n.code,{children:"4369"}),") or distribution (",(0,s.jsx)(n.code,{children:"9000"}),")\nports"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-with-docker-globally",children:"Running with Docker (globally)"}),"\n",(0,s.jsx)(n.p,{children:"When forming a cluster across multiple machines:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["you have to take care of ",(0,s.jsx)(n.a,{href:"#configuring-a-cluster",children:"Extra Network Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:["you also can't use ",(0,s.jsx)(n.code,{children:'JF_DIST_MODE="sname"'})," as you have to name Jellyfish nodes using their publicly available IP address\nor domain names (see ",(0,s.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})," and ",(0,s.jsx)(n.code,{children:"JF_DIST_MODE"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["you can't simulate this setup locally as you won't be able to expose two EMPD ports on the same machine.\nSee ",(0,s.jsx)(n.a,{href:"#deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"})," for more information."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See our ",(0,s.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish_videoroom/blob/main/docker-compose-deploy.yaml",children:"Jellyfish Videoroom deployment configuration"})," for an example."]}),"\n",(0,s.jsx)(n.h2,{id:"verifying-that-a-cluster-has-been-created",children:"Verifying that a cluster has been created"}),"\n",(0,s.jsx)(n.p,{children:"When a cluster is created correctly you will see a log indicating that one of your Jellyfishes connected to the other one, e.g.:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[info] [libcluster:epmd_cluster] connected to :"j1@127.0.0.1"\n'})}),"\n",(0,s.jsx)(n.p,{children:"To see clustering in action, create two rooms using the same Jellyfish address and observe how they are load balanced:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4001"}}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4002"}}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Load balancing can also be tested using ",(0,s.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish-dashboard",children:"Jellyfish Dashboard"}),".\nSee ",(0,s.jsx)(n.a,{href:"./tutorials/dashboard#loadbalancing-in-dashboard",children:"here"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"}),"\n",(0,s.jsxs)(n.p,{children:["The most tricky thing when running Jellyfish in a cluster is to understand the role of EPMD.\nEPMD is responsible for mapping node names to ports they use.\nNode names consist of two parts ",(0,s.jsx)(n.code,{children:"nodename@hostname"}),".\n",(0,s.jsx)(n.code,{children:"hostname"})," identifies a host machine, and ",(0,s.jsx)(n.code,{children:"nodename"})," identifies a node on this machine.\nWhen node A wants to connect to node B, it uses node's B name to ask EPMD (running on node B)\nfor the actual port node B is accessible on."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Let's assume that node's B name is ",(0,s.jsx)(n.code,{children:"nodeb@192.168.1.2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Node A will contact EPMD using ",(0,s.jsx)(n.code,{children:"192.168.1.2"})," IP address and port ",(0,s.jsx)(n.code,{children:"4369"}),", and ask for the\nport number used by a node with the name ",(0,s.jsx)(n.code,{children:"nodeb"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["After that, node A can contact node B using ",(0,s.jsx)(n.code,{children:"192.168.1.2"})," IP address and port returned by EPMD."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A couple of notes about EPMD:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["it always uses port ",(0,s.jsx)(n.code,{children:"4369"})," (TCP)"]}),"\n",(0,s.jsx)(n.li,{children:"it is started automatically when running Jellyfish"}),"\n",(0,s.jsx)(n.li,{children:"there is one EPMD per machine or one EPMD per docker container -\nthat's why we can't simulate Global Docker setup locally"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can read more about Erlang Distribution ",(0,s.jsx)(n.a,{href:"https://www.erlang.org/doc/reference_manual/distributed.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);