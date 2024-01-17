"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>j});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,j=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(j,c(c({ref:t},l),{},{components:r})):n.createElement(j,c({ref:t},l))}));function j(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"project_options",title:"data.entities.project.project_options"},c=void 0,i={unversionedId:"reference/backend/data/entities/project/project_options",id:"reference/backend/data/entities/project/project_options",title:"data.entities.project.project_options",description:"ProjectOptions Objects",source:"@site/docs/reference/backend/data/entities/project/project_options.md",sourceDirName:"reference/backend/data/entities/project",slug:"/reference/backend/data/entities/project/project_options",permalink:"/docs/reference/backend/data/entities/project/project_options",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"project_options",title:"data.entities.project.project_options"},sidebar:"backendSidebar",previous:{title:"project_features",permalink:"/docs/reference/backend/data/entities/project/features/project_features"},next:{title:"user_configuration",permalink:"/docs/reference/backend/data/entities/user/user_configuration"}},p={},s=[{value:"ProjectOptions Objects",id:"projectoptions-objects",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"projectoptions-objects"},"ProjectOptions Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass_json\n\n@dataclass(frozen=True, kw_only=True)\nclass ProjectOptions()\n")),(0,o.kt)("p",null,"Class holding all options of a ",(0,o.kt)("strong",{parentName:"p"},"Project"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optional_features")," - A list of all user-enabled optional features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ui")," - Arbitrary UI options.")))}d.isMDXComponent=!0}}]);