"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,f=d["".concat(m,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={id:"common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",title:"Class: CommandReplyDispatcher",sidebar_label:"CommandReplyDispatcher",custom_edit_url:null},i=void 0,o={unversionedId:"reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",id:"reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",title:"Class: CommandReplyDispatcher",description:"common/web/core/messaging/dispatchers/CommandReplyDispatcher.CommandReplyDispatcher",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher",title:"Class: CommandReplyDispatcher",sidebar_label:"CommandReplyDispatcher",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"CommandDispatcher",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandDispatcher.CommandDispatcher"},next:{title:"EventDispatcher",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_EventDispatcher.EventDispatcher"}},m={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Properties",id:"properties",level:2},{value:"_metaInformationList",id:"_metainformationlist",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"contextError",id:"contexterror",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"dispatch",id:"dispatch",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"postDispatch",id:"postdispatch",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"preDispatch",id:"predispatch",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"process",id:"process",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4}],l={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_messaging_dispatchers_CommandReplyDispatcher"},"common/web/core/messaging/dispatchers/CommandReplyDispatcher"),".CommandReplyDispatcher"),(0,r.kt)("p",null,"Message dispatcher specific to ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandReply"),"."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageDispatcher")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyMetaInformation")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CommandReplyDispatcher"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new CommandReplyDispatcher"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyDispatcher"))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_CommandReplyDispatcher.CommandReplyDispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyDispatcher"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_metainformationlist"},"_","metaInformationList"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","metaInformationList"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformationList.MessageMetaInformationList"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformationList"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#_metainformationlist"},"_metaInformationList")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L14"},"common/web/core/messaging/dispatchers/MessageDispatcher.ts:14")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"contexterror"},"contextError"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"contextError"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyMetaInformation")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#contexterror"},"contextError")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L75"},"common/web/core/messaging/dispatchers/MessageDispatcher.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispatch"},"dispatch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispatch"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"CtxType"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"handler"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Dispatches a message to locally registered message handlers."),(0,r.kt)("p",null,"Notes:\nExceptions arising within a message handler will not interrupt the running program; instead, such errors will only be logged."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CtxType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageContext")))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message to be dispatched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"handler")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageHandler.MessageHandlerMapping"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageHandlerMapping"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The handler to be invoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CtxType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message context.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Error - If the handler requires a different message type."),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#dispatch"},"dispatch")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L46"},"common/web/core/messaging/dispatchers/MessageDispatcher.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postdispatch"},"postDispatch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"postDispatch"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Called to perform tasks ",(0,r.kt)("em",{parentName:"p"},"after")," sending a message."),(0,r.kt)("p",null,"This method is called after any service-registered message handler have been invoked."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message that is about to be dispatched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#postdispatch"},"postDispatch")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L72"},"common/web/core/messaging/dispatchers/MessageDispatcher.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"predispatch"},"preDispatch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"preDispatch"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"MsgType"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Called to perform tasks ",(0,r.kt)("em",{parentName:"p"},"before")," sending a message."),(0,r.kt)("p",null,"This method is called before any service-registered message handler is invoked."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MsgType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply")))))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MsgType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message that is about to be dispatched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReplyMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Error - If the meta information type is invalid."),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#predispatch"},"preDispatch")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/CommandReplyDispatcher.ts#L21"},"common/web/core/messaging/dispatchers/CommandReplyDispatcher.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"process"},"process"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"process"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Called to perform periodic tasks."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},"MessageDispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher#process"},"process")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L19"},"common/web/core/messaging/dispatchers/MessageDispatcher.ts:19")))}c.isMDXComponent=!0}}]);