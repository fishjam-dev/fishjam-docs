"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[4469],{13437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=s(74848),r=s(28453),l=s(11470),t=s(19365);const o={},c="Installation",a={id:"getting_started/installation",title:"Installation",description:"There are two ways of running Jellyfish:",source:"@site/versioned_docs/version-0.4.2/getting_started/installation.md",sourceDirName:"getting_started",slug:"/getting_started/installation",permalink:"/fishjam-docs/0.4.2/getting_started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.4.2/getting_started/installation.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Example Scenarios",permalink:"/fishjam-docs/0.4.2/introduction/example_scenarios"},next:{title:"Architecture",permalink:"/fishjam-docs/0.4.2/getting_started/architecture"}},d={},h=[{value:"Building from source",id:"building-from-source",level:2},{value:"Running with Docker",id:"running-with-docker",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Required in production:",id:"required-in-production",level:4},{value:"Optional:",id:"optional",level:4},{value:"Distribution:",id:"distribution",level:4},{value:"Distribution NODES_LIST specific:",id:"distribution-nodes_list-specific",level:6},{value:"Distribution DNS specific:",id:"distribution-dns-specific",level:6}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways of running Jellyfish:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"building from source (requires Elixir and native dependencies)"}),"\n",(0,i.jsx)(n.li,{children:"using Jellyfish Docker images"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"At the moment, Jellyfish doesn't provide pre-built binaries."}),"\n",(0,i.jsx)(n.h2,{id:"building-from-source",children:"Building from source"}),"\n",(0,i.jsx)(n.p,{children:"Make sure to have both Elixir and Rust installed. Check the links below for instructions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://elixir-lang.org/install.html",children:"Elixir"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rustup.rs",children:"Rust"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the Jellyfish repo"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/jellyfish-dev/jellyfish.git\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install native dependencies"})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(t.A,{value:"mac-os",label:"macOS Intel/Apple Silicon",default:!0,children:[(0,i.jsxs)(n.p,{children:["These instructions assume you have Homebrew installed. You can get it ",(0,i.jsx)("a",{href:"https://brew.sh",children:"here"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"brew install srtp clang-format ffmpeg opus pkg-config\n# additionally, you might need to export these env vars\nexport C_INCLUDE_PATH=$(brew --prefix opus)/include:$(brew --prefix openssl)/include\nexport LIBRARY_PATH=$(brew --prefix opus)/lib:$(brew --prefix openssl)/lib\nexport PKG_CONFIG_PATH=$(brew --prefix openssl)/lib/pkgconfig\n"})})]}),(0,i.jsx)(t.A,{value:"ubuntu",label:"Ubuntu",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install pkg-config libsrtp2-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev libfdk-aac-dev\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install elixir dependencies"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mix deps.get\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Run the server in development"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mix phx.server\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create a binary"})}),"\n",(0,i.jsx)(n.p,{children:"You can also create Jellyfish binary with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MIX_ENV=prod mix release\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then follow instructions printed in your terminal."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The difference between running with ",(0,i.jsx)(n.code,{children:"mix phx.server"})," and generating target\nbinary is that the latter is prepared for running in production so e.g.\nit includes some Erlang Virtual Machine tweaks.\nJellyfish Dockerfile always uses ",(0,i.jsx)(n.code,{children:"mix release"})," under the hood."]})}),"\n",(0,i.jsx)(n.h2,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Docker images are built for production which means that you always\nneed to set a couple of ",(0,i.jsx)(n.a,{href:"#environment-variables",children:"environment variables"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"An example docker command running bare Jellyfish HTTP service locally:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -p 8080:8080/tcp -e JF_HOST=localhost:8080 -e JF_SERVER_API_TOKEN=token ghcr.io/jellyfish-dev/jellyfish:0.4.2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that in real case scenarios, docker commands depend on peers/components you are going to use.\nTherefore, we don't present them here but rather in each peer/component's documentation.\nAs an example see ",(0,i.jsx)(n.a,{href:"./peers/webrtc#example-docker-commands",children:"WebRTC Peer"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For the full list of Jellyfish Docker images, ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish",children:"see this page"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Instead of passing environmental variables manually, you can use the ",(0,i.jsx)(n.code,{children:"--env-file ./env-file"})," flag,\nwhere the ",(0,i.jsx)(n.code,{children:"env-file"})," is a file containing the variables that the image expects,\nsee example file ",(0,i.jsx)(n.code,{children:".env.sample"})," in the Jellyfish repository."]})}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,i.jsx)(n.p,{children:"Environment variables are split into two groups:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"general ones - presented below"}),"\n",(0,i.jsxs)(n.li,{children:["peer/component-specific - each Peer and Component can expose its own environment variables.\nThey are always listed in a Peer/Component description.\nSee for example the list of ",(0,i.jsx)(n.a,{href:"/fishjam-docs/0.4.2/getting_started/peers/webrtc",children:"Peers"})," and ",(0,i.jsx)(n.a,{href:"/fishjam-docs/0.4.2/getting_started/components/sip",children:"SIP Component"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Below there are general, Jellyfish environment variables.\nIf you are running Jellyfish in development, you don't need to\nset any of them."}),"\n",(0,i.jsx)(n.h4,{id:"required-in-production",children:"Required in production:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_SERVER_API_TOKEN"})," - token for authorizing HTTP requests.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"development"})," for development builds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_HOST"})," - defines how Jellyfish should be seen from the outside.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"JF_IP:JF_PORT"}),".",(0,i.jsx)("br",{}),"\nIt can be in the form of ",(0,i.jsx)(n.code,{children:"ip:port"}),", ",(0,i.jsx)(n.code,{children:"domain:port"})," or simply ",(0,i.jsx)(n.code,{children:"domain"}),".\nAdditionally, you can specify a path (e.g. ",(0,i.jsx)(n.code,{children:"ip:port/path"}),", ",(0,i.jsx)(n.code,{children:"domain:port/path"}),", ",(0,i.jsx)(n.code,{children:"domain/path"}),").\nUseful when hosting Jellyfish behind proxy.\nIt is returned e.g. when creating a new room.\nWhen running with Docker, ",(0,i.jsx)(n.code,{children:"JF_IP"})," is set to ",(0,i.jsx)(n.code,{children:"0.0.0.0"}),"\nmaking the default value of ",(0,i.jsx)(n.code,{children:"JF_HOST"})," incorrect.\nTherefore, for Docker, you have to set ",(0,i.jsx)(n.code,{children:"JF_HOST"})," manually.\nFor running Docker locally, it can simply be ",(0,i.jsx)(n.code,{children:"localhost:8080"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"optional",children:"Optional:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_IP"})," - an ip address to run the HTTP server on.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," when running from source or using ",(0,i.jsx)(n.code,{children:"mix release"}),", or ",(0,i.jsx)(n.code,{children:"0.0.0.0"})," for Docker."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_PORT"})," - port to run the HTTP server on.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"5002"})," for development builds and ",(0,i.jsx)(n.code,{children:"8080"})," for production builds (",(0,i.jsx)(n.code,{children:"mix release"})," or Docker)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_SSL_KEY_PATH"})," - an absolute path to the SSL key.\nWhen both ",(0,i.jsx)(n.code,{children:"JF_SSL_KEY_PATH"})," and ",(0,i.jsx)(n.code,{children:"JF_SSL_CERT_PATH"})," are set, Jellyfish will\nrun HTTPS server instead of HTTP one.\nAn address where this server listens to is still configured via ",(0,i.jsx)(n.code,{children:"JF_IP"})," and ",(0,i.jsx)(n.code,{children:"JF_PORT"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_SSL_CERT_PATH"})," - an absolute path the the SSL certificate.\nWhen both ",(0,i.jsx)(n.code,{children:"JF_SSL_KEY_PATH"})," and ",(0,i.jsx)(n.code,{children:"JF_SSL_CERT_PATH"})," are set, Jellyfish will\nrun HTTPS server instead of HTTP one.\nAn address where this server listens to is still configured via ",(0,i.jsx)(n.code,{children:"JF_IP"})," and ",(0,i.jsx)(n.code,{children:"JF_PORT"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_SECRET_KEY_BASE"})," - used to sign/encrypt tokens generated for Peers.\nGenerated if not provided."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_CHECK_ORIGIN"})," - defines if Jellyfish will check the origin of incoming requests and socket connection. ",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"true"}),".",(0,i.jsx)("br",{}),"\nPossible values are ",(0,i.jsx)(n.code,{children:"true"}),", ",(0,i.jsx)(n.code,{children:"false"})," or a space-separated list of allowed origins (wildcards are allowed). ",(0,i.jsx)("br",{}),"\nExample: ",(0,i.jsx)(n.code,{children:'JF_CHECK_ORIGIN="https://example.com //another.com:888 //*.other.com"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_RESOURCES_BASE_PATH"})," - a base path where Jellyfish multimedia files are stored",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"./jellyfish_resources/"}),".",(0,i.jsx)("br",{}),"\nWhen running via docker, the directory can be mounted as ",(0,i.jsx)(n.code,{children:"-v $(pwd)/host_directory:/app/jellyfish_resources"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_METRICS_IP"})," - an IP address to run metrics endpoint on.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," when running from source or using ",(0,i.jsx)(n.code,{children:"mix release"}),", or ",(0,i.jsx)(n.code,{children:"0.0.0.0"})," for Docker."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_METRICS_PORT"})," - a port to run metrics endpoint on.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"9568"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_STRUCTURED_LOGGING"})," - whether to enable JSON-structured logging to stdout.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"false"}),".",(0,i.jsx)("br",{}),"\nExample log with and without this option:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(t.A,{value:"json-log-on",label:"true",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"time":"2024-02-20T17:32:32.448Z","severity":"info","message":"Initialize room","metadata":{"room_id":"40"}}\n'})})}),(0,i.jsx)(t.A,{value:"json-log-off",label:"false",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"17:32:32.448 room_id=40 [info] Initialize room\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MIX_ENV"})," - defines compilation environment.\nThis variable takes effect only when running from the source.\nDocker images are always built with ",(0,i.jsx)(n.code,{children:"MIX_ENV=prod"}),".\nPossible values are:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dev"})," - uses default values for environment variables\n(default option when running with ",(0,i.jsx)(n.code,{children:"mix phx.server"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prod"})," - requires that you provide values for environment variables"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test"})," - used in tests"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"distribution",children:"Distribution:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_ENABLED"})," - whether to run Jellyfish in a cluster.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_STRATEGY_NAME"})," - specify which clustering strategy to use.",(0,i.jsx)("br",{}),"\nPossible values are ",(0,i.jsx)(n.code,{children:"DNS"})," or ",(0,i.jsx)(n.code,{children:"NODES_LIST"}),".\nDefaults to ",(0,i.jsx)(n.code,{children:"NODES_LIST"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})," - Node name used in a cluster.\nDefaults to ",(0,i.jsx)(n.code,{children:"jellyfish@(hostname)"}),". ",(0,i.jsx)("br",{}),"\nIt consists of two parts - nodename@hostname.\nThe first part identifies a node on a single machine and can\nbe any string.\nThe second part identifies the host machine jellyfish runs on and has to be resolvable.\nIts format depends on ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"}),".\nIf ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"})," is set to ",(0,i.jsx)(n.code,{children:"name"}),", the ",(0,i.jsx)(n.code,{children:"hostname"})," has to be an IP address or FQDN.\nIf ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"})," is set to ",(0,i.jsx)(n.code,{children:"sname"}),", the ",(0,i.jsx)(n.code,{children:"hostname"})," can be any string.\nIf you run a cluster using ",(0,i.jsx)(n.code,{children:"DNS"})," strategy, every Jellyfish instance must have ",(0,i.jsx)(n.code,{children:"nodename"})," set to the same value.\nIf ",(0,i.jsx)(n.code,{children:"hostname"})," is not an IP address, it will be automatically resolved as DNS strategy requires\nnode names to use IP addresses.\nThis also means that ",(0,i.jsx)(n.code,{children:"DNS"})," strategy has to be run with ",(0,i.jsx)(n.code,{children:"JF_DIST_MODE"})," set to ",(0,i.jsx)(n.code,{children:"name"}),".\nSee our ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose-epmd.yaml",children:"docker-compose-epmd.yaml"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose-dns.yaml",children:"docker-compose-dns.yaml"}),", which we use in our integration tests or refer to ",(0,i.jsx)(n.a,{href:"/fishjam-docs/0.4.2/cluster",children:"Cluster"})," section for examples."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_MODE"})," - distribution mode - can be ",(0,i.jsx)(n.code,{children:"name"})," or ",(0,i.jsx)(n.code,{children:"sname"}),".",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"sname"}),".",(0,i.jsx)("br",{}),"\nWhen using ",(0,i.jsx)(n.code,{children:"name"}),", your hostname has to be an IP address or FQDN of a machine Jellyfish runs on.\nWhen using ",(0,i.jsx)(n.code,{children:"sname"}),", your hostname can be any string.\nSee ",(0,i.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})," for more information."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_COOKIE"})," - used to group Jellyfishes in a cluster.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"jellyfish_cookie"}),".",(0,i.jsx)("br",{}),"\nUse different cookies to create multiple clusters on the same machine.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Important"}),": cookie does not provide any cryptographic security.\nIts only purpose is to prevent a node from connecting to a cluster with which\nit is not intended to communicate."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_MIN_PORT"}),"- minimal port used by Jellyfish when forming a cluster\n(connecting to other Jellyfishes).",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"9000"})," when running with Docker.",(0,i.jsx)("br",{}),"\nOnly available when running with Docker or ",(0,i.jsx)(n.code,{children:"mix release"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_MAX_PORT"}),"- maximal port used by Jellyfish when forming a cluster\n(connecting to other Jellyfishes).",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:"9000"})," when running with Docker.",(0,i.jsx)("br",{}),"\nOnly available when running with Docker or ",(0,i.jsx)(n.code,{children:"mix release"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"distribution-nodes_list-specific",children:"Distribution NODES_LIST specific:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_NODES"})," - space-separated list of other Jellyfishes to connect to.",(0,i.jsx)("br",{}),"\nDefaults to ",(0,i.jsx)(n.code,{children:'""'}),".",(0,i.jsx)("br",{}),"\nExample: ",(0,i.jsx)(n.code,{children:'JF_DIST_NODES="jellyfish1@127.0.0.1 jellyfish2@127.0.0.1"'}),".",(0,i.jsx)("br",{}),"\nThis list can also include ourselves so that you can pass the same value\nto every Jellyfish.\nNote: Jellyfish connection to other Jellyfish is transitive meaning that\nwhen you connect to one Jellyfish you also connect to all other Jellyfishes\nthis one was connected to."]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"distribution-dns-specific",children:"Distribution DNS specific:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_QUERY"})," - query sent to DNS to discover other Jellyfishes. ",(0,i.jsx)("br",{}),"\nReturned list of IPs from DNS is used for creating distribution node name in the format ",(0,i.jsx)(n.code,{children:"<nodename>@<IP_ADDRESS>"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JF_DIST_POLLING_INTERVAL"})," - DNS polling interval in ms. ",(0,i.jsx)("br",{}),"\nDefault value is 5000."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You can use a single port to form a cluster, even if a cluster consists of\nmore than two Jellyfishes."})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Besides ports specified using ",(0,i.jsx)(n.code,{children:"JF_DIST_MIN_PORT"})," and ",(0,i.jsx)(n.code,{children:"JF_DIST_MAX_PORT"}),", Jellyfish\nalso uses one more service called EPMD that runs on port 4369.\nThis port has to be explicitly exported when running with Docker.\nRead more in the ",(0,i.jsx)(n.a,{href:"/fishjam-docs/0.4.2/cluster",children:"Cluster"})," section."]})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>t});s(96540);var i=s(18215);const r={tabItem:"tabItem_Ymn6"};var l=s(74848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,t),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>_});var i=s(96540),r=s(18215),l=s(23104),t=s(56347),o=s(205),c=s(57485),a=s(31682),d=s(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const r=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=u(e),[t,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[a,h]=j({queryString:s,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(s);return[r,(0,i.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),m=(()=>{const e=a??p;return x({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{m&&c(m)}),[m]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function g(e){let{className:n,block:s,selectedValue:i,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),r=o[s].value;r!==i&&(a(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...l,className:(0,r.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);