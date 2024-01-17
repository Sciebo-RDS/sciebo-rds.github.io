"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9009],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=c,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),c=(t(7294),t(3905));const o={sidebar_label:"connector_instance",title:"data.entities.connector.connector_instance"},a=void 0,i={unversionedId:"reference/backend/data/entities/connector/connector_instance",id:"reference/backend/data/entities/connector/connector_instance",title:"data.entities.connector.connector_instance",description:"ConnectorInstance Objects",source:"@site/docs/reference/backend/data/entities/connector/connector_instance.md",sourceDirName:"reference/backend/data/entities/connector",slug:"/reference/backend/data/entities/connector/connector_instance",permalink:"/docs/reference/backend/data/entities/connector/connector_instance",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"connector_instance",title:"data.entities.connector.connector_instance"},sidebar:"backendSidebar",previous:{title:"connector",permalink:"/docs/reference/backend/data/entities/connector/"},next:{title:"project",permalink:"/docs/reference/backend/data/entities/project/"}},s={},l=[{value:"ConnectorInstance Objects",id:"connectorinstance-objects",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,c.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"connectorinstance-objects"},"ConnectorInstance Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass_json\n\n@dataclass(frozen=True, kw_only=True)\nclass ConnectorInstance()\n")),(0,c.kt)("p",null,"A configured connector instance (i.e., a connector the user has added to his configuration)."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"instance_id")," - The ID of the connector instance."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"connector_id")," - The assigned connector."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," - The name of this connector instance.")))}u.isMDXComponent=!0}}]);