"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"common_web_ui_actions_MultiAction.MultiAction",title:"Class: MultiAction",sidebar_label:"MultiAction",custom_edit_url:null},o=void 0,l={unversionedId:"reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction",id:"reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction",title:"Class: MultiAction",description:"common/web/ui/actions/MultiAction.MultiAction",source:"@site/docs/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_ui_actions_MultiAction.MultiAction",title:"Class: MultiAction",sidebar_label:"MultiAction",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"EventAction",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_EventAction.EventAction"},next:{title:"ActionNotifier",permalink:"/docs/reference/frontend/classes/common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier"}},s={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_actions",id:"_actions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_currentAction",id:"_currentaction",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_state",id:"_state",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"state",id:"state",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"addActions",id:"addactions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"addDefaultNotifiers",id:"adddefaultnotifiers",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"addNotifier",id:"addnotifier",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"execute",id:"execute",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"executeNextAction",id:"executenextaction",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"onActionDone",id:"onactiondone",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"onActionFailed",id:"onactionfailed",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"onStateChanged",id:"onstatechanged",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"postExecution",id:"postexecution",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"preExecution",id:"preexecution",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"prepareNotifiers",id:"preparenotifiers",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"setState",id:"setstate",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-16",level:4}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_ui_actions_MultiAction"},"common/web/ui/actions/MultiAction"),".MultiAction"),(0,i.kt)("p",null,"An action that encapsulates multiple other actions that are executed in order."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MultiAction"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_actions_multi_GetAllDataAction.GetAllDataAction"},(0,i.kt)("inlineCode",{parentName:"a"},"GetAllDataAction"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new MultiAction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"suppressDefaultNotifiers?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiAction"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"suppressDefaultNotifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Suppress default notifiers.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_MultiAction.MultiAction"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiAction"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L25"},"common/web/ui/actions/ActionBase.ts:25")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_actions"},"_","actions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","actions"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L8"},"common/web/ui/actions/MultiAction.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_currentaction"},"_","currentAction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"_","currentAction"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L9"},"common/web/ui/actions/MultiAction.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_state"},"_","state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","state"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#_state"},"_state")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L17"},"common/web/ui/actions/ActionBase.ts:17")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"state"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("p",null,"The current state of the action."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"ActionBase.state"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L106"},"common/web/ui/actions/ActionBase.ts:106")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addactions"},"addActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addActions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Enqueues new actions."),(0,i.kt)("p",null,"Note that actions are executed synchronously in the order in which they were added."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The actions to add.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L18"},"common/web/ui/actions/MultiAction.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"adddefaultnotifiers"},"addDefaultNotifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addDefaultNotifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#adddefaultnotifiers"},"addDefaultNotifiers")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L55"},"common/web/ui/actions/ActionBase.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addnotifier"},"addNotifier"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addNotifier"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"notifier"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Adds a new notifier for the specified state."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state the notifier should react to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"notifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionNotifier"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionNotifier")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The notifier.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#addnotifier"},"addNotifier")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L37"},"common/web/ui/actions/ActionBase.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Executes the action (i.e., all enqueued messages will be executed)."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#execute"},"execute")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L36"},"common/web/ui/actions/MultiAction.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"executenextaction"},"executeNextAction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"executeNextAction"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L51"},"common/web/ui/actions/MultiAction.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onactiondone"},"onActionDone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onActionDone"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L60"},"common/web/ui/actions/MultiAction.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onactionfailed"},"onActionFailed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onActionFailed"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionBase")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/MultiAction.ts#L64"},"common/web/ui/actions/MultiAction.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onstatechanged"},"onStateChanged"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onStateChanged"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"newState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oldState"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"oldState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState")))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#onstatechanged"},"onStateChanged")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L94"},"common/web/ui/actions/ActionBase.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"postexecution"},"postExecution"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"postExecution"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#postexecution"},"postExecution")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L100"},"common/web/ui/actions/ActionBase.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preexecution"},"preExecution"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"preExecution"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#preexecution"},"preExecution")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L97"},"common/web/ui/actions/ActionBase.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparenotifiers"},"prepareNotifiers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"prepareNotifiers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#preparenotifiers"},"prepareNotifiers")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L49"},"common/web/ui/actions/ActionBase.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setstate"},"setState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Sets the active state of this action."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_ui_actions_ActionBase.ActionState"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionState"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state to apply")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'""')),(0,i.kt)("td",{parentName:"tr",align:"left"},"An optional notification message.")))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase"},"ActionBase"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_ui_actions_ActionBase.ActionBase#setstate"},"setState")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/ui/actions/ActionBase.ts#L69"},"common/web/ui/actions/ActionBase.ts:69")))}m.isMDXComponent=!0}}]);