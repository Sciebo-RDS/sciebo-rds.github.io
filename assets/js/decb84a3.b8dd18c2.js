"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,p=f["".concat(a,".").concat(d)]||f[d]||m[d]||i;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[f]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"common_web_settings_DefaultSettings",title:"Module: common/web/settings/DefaultSettings",sidebar_label:"common/web/settings/DefaultSettings",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"reference/frontend/modules/common_web_settings_DefaultSettings",id:"reference/frontend/modules/common_web_settings_DefaultSettings",title:"Module: common/web/settings/DefaultSettings",description:"Functions",source:"@site/docs/reference/frontend/modules/common_web_settings_DefaultSettings.md",sourceDirName:"reference/frontend/modules",slug:"/reference/frontend/modules/common_web_settings_DefaultSettings",permalink:"/docs/reference/frontend/modules/common_web_settings_DefaultSettings",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_web_settings_DefaultSettings",title:"Module: common/web/settings/DefaultSettings",sidebar_label:"common/web/settings/DefaultSettings",sidebar_position:0,custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"common/web/services/WebService",permalink:"/docs/reference/frontend/modules/common_web_services_WebService"},next:{title:"common/web/settings/GeneralSettingIDs",permalink:"/docs/reference/frontend/modules/common_web_settings_GeneralSettingIDs"}},a={},c=[{value:"Functions",id:"functions",level:2},{value:"getDefaultSettings",id:"getdefaultsettings",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:c},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getdefaultsettings"},"getDefaultSettings"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getDefaultSettings"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_config_SettingID.SettingID"},(0,o.kt)("inlineCode",{parentName:"a"},"SettingID")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("p",null,"Gets default values for all settings."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_config_SettingID.SettingID"},(0,o.kt)("inlineCode",{parentName:"a"},"SettingID")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An object mapping the setting identifiers to their default values.")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sciebo-RDS/rds-ng/blob/13b0fcc/src/common/web/settings/DefaultSettings.ts#L10"},"common/web/settings/DefaultSettings.ts:10")))}m.isMDXComponent=!0}}]);