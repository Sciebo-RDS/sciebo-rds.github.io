"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<l;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"message_builder",title:"core.messaging.composers.message_builder"},s=void 0,i={unversionedId:"reference/backend/core/messaging/composers/message_builder",id:"reference/backend/core/messaging/composers/message_builder",title:"core.messaging.composers.message_builder",description:"MessageBuilder Objects",source:"@site/docs/reference/backend/core/messaging/composers/message_builder.md",sourceDirName:"reference/backend/core/messaging/composers",slug:"/reference/backend/core/messaging/composers/message_builder",permalink:"/docs/reference/backend/core/messaging/composers/message_builder",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_builder",title:"core.messaging.composers.message_builder"},sidebar:"backendSidebar",previous:{title:"event_composer",permalink:"/docs/reference/backend/core/messaging/composers/event_composer"},next:{title:"message_composer",permalink:"/docs/reference/backend/core/messaging/composers/message_composer"}},o={},m=[{value:"MessageBuilder Objects",id:"messagebuilder-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"build_command",id:"build_command",level:4},{value:"build_command_reply",id:"build_command_reply",level:4},{value:"build_event",id:"build_event",level:4},{value:"get_message_count",id:"get_message_count",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"messagebuilder-objects"},"MessageBuilder Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MessageBuilder()\n")),(0,r.kt)("p",null,"A helper class to easily build and emit new messages."),(0,r.kt)("p",null,"This class stores a reference to the global message bus and offers methods to easily create new messages and send them through the bus."),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(origin_id: UnitID, message_bus: MessageBusProtocol)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin_id")," - The component identifier of the origin of newly created messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message_bus")," - The global message bus to use.")),(0,r.kt)("h4",{id:"build_command"},"build","_","command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def build_command(cmd_type: type[CommandType],\n                  chain: Message | None = None,\n                  **kwargs) -> CommandComposer\n")),(0,r.kt)("p",null,"Builds a new command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cmd_type")," - The command type (i.e., a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Command"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chain")," - A message that acts as the ",(0,r.kt)("em",{parentName:"li"},"predecessor")," of the new message. Used to keep the same trace for multiple messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Additional message parameters.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A message composer to further build and finally emit the message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeError")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd_type")," is not a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Command"),".")),(0,r.kt)("h4",{id:"build_command_reply"},"build","_","command","_","reply"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def build_command_reply(reply_type: type[CommandReplyType],\n                        command: CommandType,\n                        success: bool = True,\n                        message: str = "",\n                        **kwargs) -> CommandReplyComposer\n')),(0,r.kt)("p",null,"Builds a new command reply."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reply_type")," - The command reply type (i.e., a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"CommandReply"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"command")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"Command")," this reply is based on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success")," - Whether the command ",(0,r.kt)("em",{parentName:"li"},"succeeded")," or not (how this is interpreted depends on the command)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," - Additional message to include in the reply."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Additional message parameters.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A message composer to further build and finally emit the message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeError")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"reply_type")," is not a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"CommandReply"),".")),(0,r.kt)("h4",{id:"build_event"},"build","_","event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def build_event(event_type: type[Event],\n                chain: Message | None = None,\n                **kwargs) -> EventComposer\n")),(0,r.kt)("p",null,"Builds a new event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_type")," - The event type (i.e., a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Event"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chain")," - A message that acts as the ",(0,r.kt)("em",{parentName:"li"},"predecessor")," of the new message. Used to keep the same trace for multiple messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Additional message parameters.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A message composer to further build and finally emit the message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeError")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"event_type")," is not a subclass of ",(0,r.kt)("inlineCode",{parentName:"li"},"Event"),".")),(0,r.kt)("h4",{id:"get_message_count"},"get","_","message","_","count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_message_count(msg_type: MessageType) -> int\n")),(0,r.kt)("p",null,"Gets how many messages of specific message types have been created."),(0,r.kt)("p",null,"The message builder keeps track of how many messages of the three major types ",(0,r.kt)("inlineCode",{parentName:"p"},"Command"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandReply")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," have been created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg_type")," - The message type to get the count of. Must be either ",(0,r.kt)("inlineCode",{parentName:"li"},"Command"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CommandReply")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Event"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  The number of messages already built of the specified type."))}u.isMDXComponent=!0}}]);