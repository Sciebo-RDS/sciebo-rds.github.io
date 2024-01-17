"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={id:"common_web_ui_actions_ActionBase.ActionBase",title:"Class: ActionBase",sidebar_label:"ActionBase",custom_edit_url:null},o=void 0,l={unversionedId:"reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase",id:"reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase",title:"Class: ActionBase",description:"common/web/ui/actions/ActionBase.ActionBase",source:"@site/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_ui_actions_ActionBase.ActionBase",title:"Class: ActionBase",sidebar_label:"ActionBase",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"Action",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_Action.Action"},next:{title:"CommandAction",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_CommandAction.CommandAction"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_notifiers",id:"_notifiers",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_state",id:"_state",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_suppressDefaultNotifiers",id:"_suppressdefaultnotifiers",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"state",id:"state",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"addDefaultNotifiers",id:"adddefaultnotifiers",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"addNotifier",id:"addnotifier",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"execute",id:"execute",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"onStateChanged",id:"onstatechanged",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"postExecution",id:"postexecution",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"preExecution",id:"preexecution",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"prepareNotifiers",id:"preparenotifiers",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"setState",id:"setstate",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-12",level:4}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_ui_actions_ActionBase"},"common/web/ui/actions/ActionBase"),".ActionBase"),(0,i.kt)("p",null,"Abstract base class for general actions."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ActionBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_Action.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiAction"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new ActionBase"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"suppressDefaultNotifiers?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"suppressDefaultNotifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Suppress default notifiers.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L25"},"common/web/ui/actions/ActionBase.ts:25")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_notifiers"},"_","notifiers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","notifiers"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_ui_actions_notifiers_ActionNotifier#actionnotifiers"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionNotifiers"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L19"},"common/web/ui/actions/ActionBase.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_state"},"_","state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","state"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L17"},"common/web/ui/actions/ActionBase.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_suppressdefaultnotifiers"},"_","suppressDefaultNotifiers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","suppressDefaultNotifiers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L20"},"common/web/ui/actions/ActionBase.ts:20")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"state"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("p",null,"The current state of the action."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L106"},"common/web/ui/actions/ActionBase.ts:106")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"adddefaultnotifiers"},"addDefaultNotifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addDefaultNotifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L55"},"common/web/ui/actions/ActionBase.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addnotifier"},"addNotifier"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addNotifier"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"notifier"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Adds a new notifier for the specified state."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state the notifier should react to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"notifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionNotifier"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionNotifier")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The notifier.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L37"},"common/web/ui/actions/ActionBase.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Executes the action."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L61"},"common/web/ui/actions/ActionBase.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onstatechanged"},"onStateChanged"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onStateChanged"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"newState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oldState"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"oldState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L94"},"common/web/ui/actions/ActionBase.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"postexecution"},"postExecution"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"postExecution"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L100"},"common/web/ui/actions/ActionBase.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preexecution"},"preExecution"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"preExecution"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L97"},"common/web/ui/actions/ActionBase.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparenotifiers"},"prepareNotifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"prepareNotifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L49"},"common/web/ui/actions/ActionBase.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setstate"},"setState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Sets the active state of this action."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state to apply")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'""')),(0,i.kt)("td",{parentName:"tr",align:"left"},"An optional notification message.")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L69"},"common/web/ui/actions/ActionBase.ts:69")))}m.isMDXComponent=!0}}]);