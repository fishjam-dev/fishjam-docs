"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[3871],{22123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(74848),o=t(28453),i=t(11470),s=t(19365);const a={},c="Notifications",l={id:"getting_started/notifications",title:"Notifications",description:"Fishjam sends server side notifications whenever some important event occurs, e.g.:",source:"@site/docs/getting_started/notifications.md",sourceDirName:"getting_started",slug:"/getting_started/notifications",permalink:"/fishjam-docs/next/getting_started/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/docs/getting_started/notifications.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/fishjam-docs/next/getting_started/authentication"},next:{title:"Metrics",permalink:"/fishjam-docs/next/getting_started/metrics"}},u={},d=[{value:"WebSockets",id:"websockets",level:2},{value:"Webhooks",id:"webhooks",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"notifications",children:"Notifications"}),"\n",(0,r.jsx)(n.p,{children:"Fishjam sends server side notifications whenever some important event occurs, e.g.:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a room has been created"}),"\n",(0,r.jsx)(n.li,{children:"some peer has connected"}),"\n",(0,r.jsx)(n.li,{children:"component has crashed"}),"\n",(0,r.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A full list of available notifications is always present in specific server SDK documentation.\nNotifications can be received through ",(0,r.jsx)(n.a,{href:"#websockets",children:"WebSockets"})," or ",(0,r.jsx)(n.a,{href:"#webhooks",children:"Webhooks"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"websockets",children:"WebSockets"}),"\n",(0,r.jsx)(n.p,{children:"WebSocket (WS) is a communication protocol that provides full-duplex communication between a client and a server over a persistent connection.\nWhen you create a notifier, it will open WS connection, receive notifications,\ndecode and return them to you via callbacks or messages.\nIn other words, you don't have to do anything on your own."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from fishjam import Notifier\n\nserver_address = \"localhost:5002\"\nserver_api_token = \"development\"\n\nnotifier = Notifier(server_address = server_address, server_api_token = server_api_token)\n\n@notifier.on_server_notification\ndef handle_notification(server_notification):\n    print(f'Received a notification: {server_notification}')\n\n@notifier.on_metrics\ndef handle_metrics(metrics_report):\n    print(f'Received WebRTC metrics: {metrics_report}')\n\nasync def run():\n    await notifier.connect()\n    await notifier.wait_ready()\n\nasyncio.run(run())\n"})})}),(0,r.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\n\n{:ok, notifier} =\n  Fishjam.WSNotifier.start(server_address: server_address, server_api_token: server_api_token)\n\n:ok = Fishjam.WSNotifier.subscribe_server_notifications(notifier)\n:ok = Fishjam.WSNotifier.subscribe_metrics(notifier)\n\nreceive do\n  {:fishjam, %Fishjam.Notification.PeerConnected{} = notification} ->\n    IO.inspect(notification)\n  # other notificaitons ...\nend\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"As a result, you should see the following logs on the server side"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"07:45:02.684 [info] New incoming server WebSocket connection, accepting\n07:45:02.688 [info] Server WS authenticated.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"webhooks",children:"Webhooks"}),"\n",(0,r.jsx)(n.p,{children:"Webhooks are simply HTTP POST requests sent to a specified URL.\nThey are a common choice in serverless architectures where a WebSocket connection cannot be established."}),"\n",(0,r.jsx)(n.p,{children:"The most important difference between Webhook and WebSocket notifications is that you have to receive those\nPOST requests on your own and then use SDK's decode functions to get the actual notification."}),"\n",(0,r.jsxs)(n.p,{children:["To receive server notifications through webhooks you have to pass ",(0,r.jsx)(n.code,{children:"webhook_url"})," during room creation."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from fishjam import Notifier, RoomApi\nfrom fishjam import recevie_binary\n\nserver_address = "localhost:5002"\nserver_api_token = "development"\nwebhook_url = "http://localhost:5003/webhook"\n\nroom_api = RoomApi(server_address = server_address, server_api_token = server_api_token)\n_, room = room_api.create_room(webhook_url=webhook_url)\n\n# assuming you are using Flask\n@app.route("/webhook", methods=["POST"])\ndef respond_root():\n    data = request.get_data()\n    notification = receive_binary(data)\n\n    return Response(status=200)\n'})})}),(0,r.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\nwebhook_url = "http://localhost:5003/webhook"\n\nclient = Fishjam.Client.new(server_address: server_address, server_api_token: server_api_token)\n{:ok, %Fishjam.Room{id: room_id}, fishjam_address} = Fishjam.Room.create(client, max_peers: 10, webhook_url: webhook_url)\n\n# assuming you are using Phoenix\n# router.ex\nscope "/", MyAppWeb do\n  post "/webhook", WebhookController, :receive_webhook_notification\nend\n\n# webhook_controller.ex\ndef receive_webhook_notification(conn, _params) do\n  {:ok, body, conn} = Plug.Conn.read_body(conn, [])\n  json_body = Jason.decode!(body)\n\n  notification = Fishjam.WebhookNotifier.receive(json_body)\n\n  conn\n  |> put_resp_content_type("text/plain")\n  |> send_resp(200, "OK")\nend\n\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(96540),o=t(18215),i=t(23104),s=t(56347),a=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=p({queryString:t,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),v=(()=>{const e=l??m;return f({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==r&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,_.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,_.jsx)(g,{...e,...n}),(0,_.jsx)(k,{...e,...n})]})}function x(e){const n=(0,b.A)();return(0,_.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);