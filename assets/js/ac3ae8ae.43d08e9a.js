"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6216],{88984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(17624),l=s(4552);const t={},r="Cluster",o={id:"cluster",title:"Cluster",description:"Jellyfish comes with a built-in clustering mechanism.",source:"@site/versioned_docs/version-0.4.0/cluster.md",sourceDirName:".",slug:"/cluster",permalink:"/jellyfish-docs/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.4.0/cluster.md",tags:[],version:"0.4.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Server SDK Examples",permalink:"/jellyfish-docs/tutorials/server_sdk_examples"},next:{title:"Cloud VPS with cloud-init",permalink:"/jellyfish-docs/deploying/vps"}},a={},d=[{value:"Strategies",id:"strategies",level:2},{value:"NODES_LIST",id:"nodes_list",level:2},{value:"Running from source",id:"running-from-source",level:3},{value:"Running with Docker (locally)",id:"running-with-docker-locally",level:3},{value:"Running with Docker (globally)",id:"running-with-docker-globally",level:3},{value:"DNS",id:"dns",level:2},{value:"Running with Docker",id:"running-with-docker",level:3},{value:"Verifying that a cluster has been created",id:"verifying-that-a-cluster-has-been-created",level:2},{value:"Deeper dive into Erlang Distribution",id:"deeper-dive-into-erlang-distribution",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cluster",children:"Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["Jellyfish comes with a built-in clustering mechanism.\nBy a cluster, we mean a set of connected Jellyfish instances.\nWhenever a new request for creating a room is sent to one of Jellyfishes in a cluster, this Jellyfish\ncommunicates with all other nodes and creates a room on the node with the lowest load.\nIn response, a Jellyfish address (specified with ",(0,i.jsx)(n.code,{children:"JF_HOST"})," environment variable) where the room was created is returned."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Even when running a cluster of Jellyfishes, a room still has to fit into one Jellyfish.\nCurrently, Jellyfish doesn't offer an option to split a room across multiple machines."})}),"\n",(0,i.jsx)(n.admonition,{title:"Security",type:"warning",children:(0,i.jsx)(n.p,{children:"Jellyfish distribution is not encrypted meaning that data between Jellyfishes is sent as plain text.\nCookie does not provide any cryptographic security.\nDo run a cluster only across machines in the same network!"})}),"\n",(0,i.jsx)(n.admonition,{title:"Distribution Environment Variables",type:"tip",children:(0,i.jsxs)(n.p,{children:["List of all cluster-related environment variables is available ",(0,i.jsx)(n.a,{href:"./getting_started/installation#distribution",children:"here"}),"."]})}),"\n",(0,i.jsx)("a",{id:"extra-network-configuration"}),"\n",(0,i.jsxs)(n.admonition,{title:"Extra network Configuration",type:"caution",children:[(0,i.jsx)(n.p,{children:"Jellyfish leverages Erlang Distribution to form a cluster.\nThis means that we don't need to use any database where we would store\ninformation about network topology.\nInstead, some extra network configuration might be needed."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Jellyfish in distributed mode uses a service called EPMD (Erlang Port Mapper Deamon)\nthat runs on port ",(0,i.jsx)(n.code,{children:"4369"})," (TCP).\nIf you run Jellyfish using Docker, you have to explicitly export this port.\nIn production deployment, you also have to allow for traffic on this port in your firewall.\nEPMD is started automatically when running Jellyfish, so you don't need to take\nany extra steps to make it work."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Jellyfish uses a random port for connecting to other Jellyfishes.\nIf you run Jellyfish using Docker, this port defaults to ",(0,i.jsx)(n.code,{children:"9000"})," (TCP) but you can configure\nthe range it is selected from with ",(0,i.jsx)(n.code,{children:"JF_DIST_MIN_PORT"})," and ",(0,i.jsx)(n.code,{children:"JF_DIST_MAX_PORT"}),".\nNote that ",(0,i.jsx)(n.code,{children:"JF_DIST_MIN_PORT"})," and ",(0,i.jsx)(n.code,{children:"JF_DIST_MAX_PORT"})," are not available when running from source\n(using ",(0,i.jsx)(n.code,{children:"mix phx.server"}),") as in development you don't have to worry about the port used for\nforming a cluster.\nAs in the case of EPMD, in production deployment, you have to modify your firewall rules appropriately."]}),"\n"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"#deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"})," for more information."]})]}),"\n",(0,i.jsx)(n.h2,{id:"strategies",children:"Strategies"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, Jellyfish supports two clustering strategies: ",(0,i.jsx)(n.code,{children:"NODES_LIST"})," and ",(0,i.jsx)(n.code,{children:"DNS"}),", but other strategies\nmight be added in the future."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NODES_LIST"})," - form a cluster basing on a list of Jellyfish addresses"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DNS"})," - regularly query DNS to discover other Jellyfishes"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Regardless of the strategy, Erlang Distribution is transitive.\nWhen node A connects to node B, it also connects to all other nodes that node B is connected to."}),"\n",(0,i.jsx)(n.h2,{id:"nodes_list",children:"NODES_LIST"}),"\n",(0,i.jsxs)(n.p,{children:["To form a cluster using ",(0,i.jsx)(n.code,{children:"NODES_LIST"})," strategy:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable distribution mode with ",(0,i.jsx)(n.code,{children:"JF_DIST_ENABLED=true"})]}),"\n",(0,i.jsxs)(n.li,{children:["Give your node a name with ",(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})]}),"\n",(0,i.jsxs)(n.li,{children:["Specify a list of nodes to connect to with ",(0,i.jsx)(n.code,{children:"JF_DIST_NODES"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-from-source",children:"Running from source"}),"\n",(0,i.jsx)(n.p,{children:"Run the first Jellyfish:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j1@localhost mix phx.server\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run the second Jellyfish"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j2@localhost JF_DIST_NODES="j1@localhost" JF_PORT=4002 JF_METRICS_PORT=9468 mix phx.server\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Note that when running the second Jellyfish, we had to change its HTTP and metrics ports."})}),"\n",(0,i.jsx)(n.h3,{id:"running-with-docker-locally",children:"Running with Docker (locally)"}),"\n",(0,i.jsx)(n.p,{children:"This simple docker compose file sets a cluster of two Jellyfishes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'version: "3"\n\nx-jellyfish-template: &jellyfish-template\n  build: .\n  environment: &jellyfish-environment\n    JF_SERVER_API_TOKEN: "development"\n    JF_DIST_ENABLED: "true"\n    JF_DIST_NODES: "j1@jellyfish1 j2@jellyfish2"\n  restart: on-failure\n\nservices:\n  jellyfish1:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5001"\n      JF_PORT: 5001\n      JF_METRICS_PORT: 6001\n      JF_DIST_NODE_NAME: j1@jellyfish1\n    ports:\n      - 5001:5001\n      - 6001:6001\n\n  jellyfish2:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5002"\n      JF_PORT: 5002\n      JF_METRICS_PORT: 6002\n      JF_DIST_NODE_NAME: j2@jellyfish2\n    ports:\n      - 5002:5002\n      - 6002:6002\n'})}),"\n",(0,i.jsx)(n.p,{children:"Because we run Jellyfishes in the same Docker network:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["we can use ",(0,i.jsx)(n.code,{children:'JF_DIST_NODE: "sname"'}),", which allows\nus to reference Jellyfishes using their service names so\n",(0,i.jsx)(n.code,{children:"jellyfish1"})," and ",(0,i.jsx)(n.code,{children:"jellyfish2"})]}),"\n",(0,i.jsxs)(n.li,{children:["we don't need to export EPMD (",(0,i.jsx)(n.code,{children:"4369"}),") or distribution (",(0,i.jsx)(n.code,{children:"9000"}),")\nports"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-with-docker-globally",children:"Running with Docker (globally)"}),"\n",(0,i.jsx)(n.p,{children:"When forming a cluster across multiple machines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["you have to take care of ",(0,i.jsx)(n.a,{href:"#extra-network-configuration",children:"Extra Network Configuration"})]}),"\n",(0,i.jsxs)(n.li,{children:["you also can't use ",(0,i.jsx)(n.code,{children:'JF_DIST_MODE="sname"'})," as you have to name Jellyfish nodes using their publicly available IP address\nor domain names (see ",(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})," and ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["you can't simulate this setup locally as you won't be able to expose two EMPD ports on the same machine.\nSee ",(0,i.jsx)(n.a,{href:"#deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"})," for more information."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish_videoroom/blob/main/docker-compose-deploy.yaml",children:"Jellyfish Videoroom deployment configuration"})," for an example."]}),"\n",(0,i.jsx)(n.h2,{id:"dns",children:"DNS"}),"\n",(0,i.jsxs)(n.p,{children:["To form a cluster using ",(0,i.jsx)(n.code,{children:"DNS"})," strategy:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable distribution mode with ",(0,i.jsx)(n.code,{children:"JF_DIST_ENABLED=true"})]}),"\n",(0,i.jsxs)(n.li,{children:["Chose ",(0,i.jsx)(n.code,{children:"DNS"})," strategy with ",(0,i.jsx)(n.code,{children:"JF_DIST_STRATEGY_NAME"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"})," to ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Give your node a name with ",(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"}),".",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Important"})," It has to be in the form of ",(0,i.jsx)(n.code,{children:"<nodename>@<hostname>"}),"\nwhere all Jellyfishes MUST have the same ",(0,i.jsx)(n.code,{children:"<nodename>"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Specify a query under which Jellyfishes are register in DNS with ",(0,i.jsx)(n.code,{children:"JF_DIST_QUERY"}),". ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Important"})," Jellyfish does not register itself in DNS.\nIt is user responsibility to enusre that your Jellyfish is registered in DNS under ",(0,i.jsx)(n.code,{children:"JF_DIST_QUERY"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,i.jsx)(n.p,{children:"This simple docker compose file sets a cluster of two Jellyfishes using internal Docker DNS."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'version: "3"\nx-jellyfish-template: &jellyfish-template\n  build: .\n  environment: &jellyfish-environment\n    JF_SERVER_API_TOKEN: "development"\n    JF_DIST_ENABLED: "true"\n    JF_DIST_STRATEGY_NAME: "DNS"\n    JF_DIST_MODE: "name"\n  restart: on-failure\nservices:\n  app1:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:4001"\n      JF_PORT: 4001\n      JF_DIST_QUERY: app.dns-network\n    ports:\n      - 4001:4001\n    networks:\n      default:\n        aliases:\n          - app.dns-network\n\n  app2:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:4002"\n      JF_PORT: 4002\n      JF_DIST_QUERY: app.dns-network\n    ports:\n      - 4002:4002\n    networks:\n      default:\n        aliases:\n          - app.dns-network\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Because we run Jellyfishes in the same Docker network we don't need to export EPMD (",(0,i.jsx)(n.code,{children:"4369"}),") or distribution (",(0,i.jsx)(n.code,{children:"9000"}),")\nports.\nWe also didn't have to explicitly set ",(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"}),".\nThe default value (",(0,i.jsx)(n.code,{children:"jellyfish@(hostname)"}),") is automatically resolved to ",(0,i.jsx)(n.code,{children:"jellyfish@<ip_address>"}),"\nand is routable from other nodes in the docker network."]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-that-a-cluster-has-been-created",children:"Verifying that a cluster has been created"}),"\n",(0,i.jsx)(n.p,{children:"When a cluster is created correctly you will see a log indicating that one of your Jellyfishes connected to the other one, e.g.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[info] [libcluster:epmd_cluster] connected to :"j1@127.0.0.1"\n'})}),"\n",(0,i.jsx)(n.p,{children:"To see clustering in action, create two rooms using the same Jellyfish address and observe how they are load balanced:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4001"}}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4002"}}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Load balancing can also be tested using ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish-dashboard",children:"Jellyfish Dashboard"}),".\nSee ",(0,i.jsx)(n.a,{href:"./tutorials/dashboard#loadbalancing-in-dashboard",children:"here"})," for more information."]}),"\n",(0,i.jsx)(n.h2,{id:"deeper-dive-into-erlang-distribution",children:"Deeper dive into Erlang Distribution"}),"\n",(0,i.jsxs)(n.p,{children:["The most tricky thing when running Jellyfish in a cluster is to understand the role of EPMD.\nEPMD is responsible for mapping node names to ports they use.\nNode names consist of two parts ",(0,i.jsx)(n.code,{children:"nodename@hostname"}),".\n",(0,i.jsx)(n.code,{children:"hostname"})," identifies a host machine, and ",(0,i.jsx)(n.code,{children:"nodename"})," identifies a node on this machine.\nWhen node A wants to connect to node B, it uses node's B name to ask EPMD (running on node B)\nfor the actual port node B is accessible on."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Let's assume that node's B name is ",(0,i.jsx)(n.code,{children:"nodeb@192.168.1.2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Node A will contact EPMD using ",(0,i.jsx)(n.code,{children:"192.168.1.2"})," IP address and port ",(0,i.jsx)(n.code,{children:"4369"}),", and ask for the\nport number used by a node with the name ",(0,i.jsx)(n.code,{children:"nodeb"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["After that, node A can contact node B using ",(0,i.jsx)(n.code,{children:"192.168.1.2"})," IP address and port returned by EPMD."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A couple of notes about EPMD:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it always uses port ",(0,i.jsx)(n.code,{children:"4369"})," (TCP)"]}),"\n",(0,i.jsx)(n.li,{children:"it is started automatically when running Jellyfish"}),"\n",(0,i.jsx)(n.li,{children:"there is one EPMD per machine or one EPMD per docker container -\nthat's why we can't simulate Global Docker setup locally"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can read more about Erlang Distribution ",(0,i.jsx)(n.a,{href:"https://www.erlang.org/doc/reference_manual/distributed.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>r});var i=s(11504);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);