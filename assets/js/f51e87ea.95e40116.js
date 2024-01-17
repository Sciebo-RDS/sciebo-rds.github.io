"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},g="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=p(n),s=a,c=g["".concat(d,".").concat(s)]||g[s]||k[s]||l;return n?r.createElement(c,o(o({ref:t},m),{},{components:n})):r.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"common_web_core_logging_Logger.Logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null},o=void 0,i={unversionedId:"reference/frontend/classes/common_web_core_logging_Logger.Logger",id:"reference/frontend/classes/common_web_core_logging_Logger.Logger",title:"Class: Logger",description:"common/web/core/logging/Logger.Logger",source:"@site/docs/reference/frontend/classes/common_web_core_logging_Logger.Logger.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_logging_Logger.Logger",permalink:"/docs/reference/frontend/classes/common_web_core_logging_Logger.Logger",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_logging_Logger.Logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"LogRecord",permalink:"/docs/reference/frontend/classes/common_web_core_logging_LogRecord.LogRecord"},next:{title:"LoggerProxy",permalink:"/docs/reference/frontend/classes/common_web_core_logging_LoggerProxy.LoggerProxy"}},d={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_level",id:"_level",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"createLogRecord",id:"createlogrecord",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"debug",id:"debug",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"error",id:"error",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"log",id:"log",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setLevel",id:"setlevel",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"warning",id:"warning",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}],m={toc:p},g="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_logging_Logger"},"common/web/core/logging/Logger"),".Logger"),(0,a.kt)("p",null,"A customized logger offering advanced formatting and parameters listing."),(0,a.kt)("p",null,"This logger and its corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Formatter")," display the log level, scope, as well as a parameters listing\nin a color-rich format for easy readability."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Logger"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"level?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_logging_Logger.Logger"},(0,a.kt)("inlineCode",{parentName:"a"},"Logger"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"level")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_logging_LogRecord.LogLevel"},(0,a.kt)("inlineCode",{parentName:"a"},"LogLevel"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"LogLevel.Info")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The maximum level for log entries to be displayed.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_logging_Logger.Logger"},(0,a.kt)("inlineCode",{parentName:"a"},"Logger"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L16"},"common/web/core/logging/Logger.ts:16")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_level"},"_","level"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_","level"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/enums/common_web_core_logging_LogRecord.LogLevel"},(0,a.kt)("inlineCode",{parentName:"a"},"LogLevel"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L11"},"common/web/core/logging/Logger.ts:11")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"createlogrecord"},"createLogRecord"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createLogRecord"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_logging_LogRecord.LogRecord"},(0,a.kt)("inlineCode",{parentName:"a"},"LogRecord"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"level")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_logging_LogRecord.LogLevel"},(0,a.kt)("inlineCode",{parentName:"a"},"LogLevel")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_logging_LogRecord.LogRecord"},(0,a.kt)("inlineCode",{parentName:"a"},"LogRecord"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L77"},"common/web/core/logging/Logger.ts:77")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"debug"},"debug"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"debug"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Logs a debugging message."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",{parentName:"tr",align:"left"},"The scope of the entry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any additional parameters.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L36"},"common/web/core/logging/Logger.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"error"},"error"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"error"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Logs an error message."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",{parentName:"tr",align:"left"},"The scope of the entry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any additional parameters.")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L72"},"common/web/core/logging/Logger.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"info"},"info"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"info"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Logs an info message."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",{parentName:"tr",align:"left"},"The scope of the entry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any additional parameters.")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L48"},"common/web/core/logging/Logger.ts:48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"log"},"log"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"log"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"record"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"record")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_logging_LogRecord.LogRecord"},(0,a.kt)("inlineCode",{parentName:"a"},"LogRecord")))))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L81"},"common/web/core/logging/Logger.ts:81")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setlevel"},"setLevel"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setLevel"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"level"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Sets the maximum logging level."),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"level")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_logging_LogRecord.LogLevel"},(0,a.kt)("inlineCode",{parentName:"a"},"LogLevel"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The logging level.")))),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L25"},"common/web/core/logging/Logger.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"warning"},"warning"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"warning"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Logs a warning message."),(0,a.kt)("h4",{id:"parameters-7"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""')),(0,a.kt)("td",{parentName:"tr",align:"left"},"The scope of the entry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any additional parameters.")))),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/core/logging/Logger.ts#L60"},"common/web/core/logging/Logger.ts:60")))}k.isMDXComponent=!0}}]);