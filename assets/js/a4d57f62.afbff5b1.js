"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=p(r),g=s,f=c["".concat(i,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=g;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:s,a[1]=m;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const o={id:"common_web_core_messaging_composers_EventComposer.EventComposer",title:"Class: EventComposer<MsgType>",sidebar_label:"EventComposer",custom_edit_url:null},a=void 0,m={unversionedId:"reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer",id:"reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer",title:"Class: EventComposer<MsgType>",description:"common/web/core/messaging/composers/EventComposer.EventComposer",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_composers_EventComposer.EventComposer",title:"Class: EventComposer<MsgType>",sidebar_label:"EventComposer",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"CommandReplyComposer",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_composers_CommandReplyComposer.CommandReplyComposer"},next:{title:"MessageBuilder",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageBuilder.MessageBuilder"}},i={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_chain",id:"_chain",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"_messageBus",id:"_messagebus",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"_msgType",id:"_msgtype",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"_originID",id:"_originid",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"_params",id:"_params",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"before",id:"before",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"compose",id:"compose",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"createMetaInformation",id:"createmetainformation",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"emit",id:"emit",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"verify",id:"verify",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4}],l={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_messaging_composers_EventComposer"},"common/web/core/messaging/composers/EventComposer"),".EventComposer"),(0,s.kt)("p",null,"Composer for ",(0,s.kt)("inlineCode",{parentName:"p"},"Event")," messages."),(0,s.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MsgType")),(0,s.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Event.Event"},(0,s.kt)("inlineCode",{parentName:"a"},"Event")))))),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageComposer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"EventComposer"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new EventComposer"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">","(",(0,s.kt)("inlineCode",{parentName:"p"},"originID"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"messageBus"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"msgType"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"params?"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"chain?"),"): ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer"},(0,s.kt)("inlineCode",{parentName:"a"},"EventComposer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MsgType")),(0,s.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Event.Event"},(0,s.kt)("inlineCode",{parentName:"a"},"Event")))))),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"originID")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,s.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The component identifier of the origin of newly created messages.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"messageBus")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageBusProtocol"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The global message bus to use.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"msgType")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/interfaces/common_web_core_messaging_Message.ConstructableMessage"},(0,s.kt)("inlineCode",{parentName:"a"},"ConstructableMessage")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"MsgType"),">"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The message type.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"params")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,s.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"{}")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Additional message parameters.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"chain")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"null")),(0,s.kt)("td",{parentName:"tr",align:"left"},"A message that acts as the ",(0,s.kt)("em",{parentName:"td"},"predecessor")," of the new message. Used to keep the same trace for multiple messages.")))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer"},(0,s.kt)("inlineCode",{parentName:"a"},"EventComposer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L29"},"common/web/core/messaging/composers/MessageComposer.ts:29")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_chain"},"_","chain"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","chain"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#_chain"},"_chain")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L18"},"common/web/core/messaging/composers/MessageComposer.ts:18")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_messagebus"},"_","messageBus"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","messageBus"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageBusProtocol"))),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#_messagebus"},"_messageBus")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L14"},"common/web/core/messaging/composers/MessageComposer.ts:14")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_msgtype"},"_","msgType"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","msgType"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/interfaces/common_web_core_messaging_Message.ConstructableMessage"},(0,s.kt)("inlineCode",{parentName:"a"},"ConstructableMessage")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#_msgtype"},"_msgType")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L16"},"common/web/core/messaging/composers/MessageComposer.ts:16")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_originid"},"_","originID"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","originID"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,s.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,s.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#_originid"},"_originID")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L13"},"common/web/core/messaging/composers/MessageComposer.ts:13")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_params"},"_","params"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"_","params"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,s.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#_params"},"_params")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L17"},"common/web/core/messaging/composers/MessageComposer.ts:17")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"before"},"before"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"before"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"cb"),"): ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer"},(0,s.kt)("inlineCode",{parentName:"a"},"EventComposer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("p",null,"Adds a callback that will be called immediately before the message is dispatched."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cb")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/modules/common_web_core_messaging_composers_MessageComposer#beforedispatchcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"BeforeDispatchCallback"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The callback to add.")))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_EventComposer.EventComposer"},(0,s.kt)("inlineCode",{parentName:"a"},"EventComposer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"MsgType"),">"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This composer instance to allow call chaining.")),(0,s.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#before"},"before")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L46"},"common/web/core/messaging/composers/MessageComposer.ts:46")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"compose"},"compose"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"compose"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#compose"},"compose")),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L73"},"common/web/core/messaging/composers/MessageComposer.ts:73")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"createmetainformation"},"createMetaInformation"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"createMetaInformation"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#createmetainformation"},"createMetaInformation")),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/EventComposer.ts#L10"},"common/web/core/messaging/composers/EventComposer.ts:10")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"emit"},"emit"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"emit"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("p",null,"Sends the built message through the message bus."),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"target")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Channel.Channel"},(0,s.kt)("inlineCode",{parentName:"a"},"Channel"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The target of the message.")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#emit"},"emit")),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L56"},"common/web/core/messaging/composers/MessageComposer.ts:56")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"verify"},"verify"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"verify"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer"},"MessageComposer"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageComposer.MessageComposer#verify"},"verify")),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/composers/MessageComposer.ts#L70"},"common/web/core/messaging/composers/MessageComposer.ts:70")))}d.isMDXComponent=!0}}]);