"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9812],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),f=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=f(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=f(t),u=i,v=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?n.createElement(v,o(o({ref:r},s),{},{components:t})):n.createElement(v,o({ref:r},s))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var f=2;f<a;f++)o[f]=t[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_label:"verifier",title:"data.verifiers.verifier"},o=void 0,l={unversionedId:"reference/backend/data/verifiers/verifier",id:"reference/backend/data/verifiers/verifier",title:"data.verifiers.verifier",description:"Verifier Objects",source:"@site/docs/reference/backend/data/verifiers/verifier.md",sourceDirName:"reference/backend/data/verifiers",slug:"/reference/backend/data/verifiers/verifier",permalink:"/docs/reference/backend/data/verifiers/verifier",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"verifier",title:"data.verifiers.verifier"},sidebar:"backendSidebar",previous:{title:"verification_exception",permalink:"/docs/reference/backend/data/verifiers/verification_exception"},next:{title:"component_service",permalink:"/docs/reference/backend/services/component_service"}},c={},f=[{value:"Verifier Objects",id:"verifier-objects",level:2},{value:"verify_create",id:"verify_create",level:4},{value:"verify_update",id:"verify_update",level:4},{value:"verify_delete",id:"verify_delete",level:4}],s={toc:f},p="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"verifier-objects"},"Verifier Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Verifier(Protocol)\n")),(0,i.kt)("p",null,"Defines the general interface for data verifiers."),(0,i.kt)("h4",{id:"verify_create"},"verify","_","create"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def verify_create() -> None\n")),(0,i.kt)("p",null,"Verifies a new entity. In case of invalid data, an error is thrown."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VerificationException")," - In case of any errors in the entity data.")),(0,i.kt)("h4",{id:"verify_update"},"verify","_","update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def verify_update() -> None\n")),(0,i.kt)("p",null,"Verifies an updated entity. In case of invalid data, an error is thrown."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VerificationException")," - In case of any errors in the entity data.")),(0,i.kt)("h4",{id:"verify_delete"},"verify","_","delete"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def verify_delete() -> None\n")),(0,i.kt)("p",null,"Verifies the deletion of an entity. In case of invalid data, an error is thrown."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VerificationException")," - In case of any errors in the entity data.")))}d.isMDXComponent=!0}}]);