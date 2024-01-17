"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5223],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_label:"user_commands",title:"api.user.user_commands"},i=void 0,s={unversionedId:"reference/backend/api/user/user_commands",id:"reference/backend/api/user/user_commands",title:"api.user.user_commands",description:"GetUserConfigurationCommand Objects",source:"@site/docs/reference/backend/api/user/user_commands.md",sourceDirName:"reference/backend/api/user",slug:"/reference/backend/api/user/user_commands",permalink:"/docs/reference/backend/api/user/user_commands",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"user_commands",title:"api.user.user_commands"},sidebar:"backendSidebar",previous:{title:"project_features_commands",permalink:"/docs/reference/backend/api/project/project_features_commands"},next:{title:"backend_component",permalink:"/docs/reference/backend/component/backend_component"}},l={},u=[{value:"GetUserConfigurationCommand Objects",id:"getuserconfigurationcommand-objects",level:2},{value:"build",id:"build",level:4},{value:"GetUserConfigurationReply Objects",id:"getuserconfigurationreply-objects",level:2},{value:"build",id:"build-1",level:4},{value:"SetUserConfigurationCommand Objects",id:"setuserconfigurationcommand-objects",level:2},{value:"build",id:"build-2",level:4},{value:"SetUserConfigurationReply Objects",id:"setuserconfigurationreply-objects",level:2},{value:"build",id:"build-3",level:4}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getuserconfigurationcommand-objects"},"GetUserConfigurationCommand Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/user/configuration/get")\nclass GetUserConfigurationCommand(Command)\n')),(0,a.kt)("p",null,"Command to get the configuration of the current user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("p",null,"  Requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"GetUserConfigurationReply")," reply."),(0,a.kt)("h4",{id:"build"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef build(message_builder: MessageBuilder,\n          *,\n          chain: Message | None = None) -> CommandComposer\n")),(0,a.kt)("p",null,"Helper function to easily build this message."),(0,a.kt)("h2",{id:"getuserconfigurationreply-objects"},"GetUserConfigurationReply Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/user/configuration/get/reply")\nclass GetUserConfigurationReply(CommandReply)\n')),(0,a.kt)("p",null,"Reply to ",(0,a.kt)("inlineCode",{parentName:"p"},"GetUserConfigurationCommand"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," - The user configuration.")),(0,a.kt)("h4",{id:"build-1"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef build(message_builder: MessageBuilder,\n          cmd: GetUserConfigurationCommand,\n          *,\n          configuration: UserConfiguration,\n          success: bool = True,\n          message: str = "") -> CommandReplyComposer\n')),(0,a.kt)("p",null,"Helper function to easily build this message."),(0,a.kt)("h2",{id:"setuserconfigurationcommand-objects"},"SetUserConfigurationCommand Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/user/configuration/set")\nclass SetUserConfigurationCommand(Command)\n')),(0,a.kt)("p",null,"Command to set the configuration of the current user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," - The new user configuration.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("p",null,"  Requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"SetUserConfigurationReply")," reply."),(0,a.kt)("h4",{id:"build-2"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef build(message_builder: MessageBuilder,\n          *,\n          configuration: UserConfiguration,\n          chain: Message | None = None) -> CommandComposer\n")),(0,a.kt)("p",null,"Helper function to easily build this message."),(0,a.kt)("h2",{id:"setuserconfigurationreply-objects"},"SetUserConfigurationReply Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/user/configuration/set/reply")\nclass SetUserConfigurationReply(CommandReply)\n')),(0,a.kt)("p",null,"Reply to ",(0,a.kt)("inlineCode",{parentName:"p"},"SetUserConfigurationCommand"),"."),(0,a.kt)("h4",{id:"build-3"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef build(message_builder: MessageBuilder,\n          cmd: SetUserConfigurationCommand,\n          *,\n          success: bool = True,\n          message: str = "") -> CommandReplyComposer\n')),(0,a.kt)("p",null,"Helper function to easily build this message."))}m.isMDXComponent=!0}}]);