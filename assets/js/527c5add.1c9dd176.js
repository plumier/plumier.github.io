(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[274],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4393:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(7560),o=r(8283),a=(r(2784),r(876)),i={id:"custom-parameter-binding",title:"Custom Parameter Binding"},c={unversionedId:"custom-parameter-binding",id:"custom-parameter-binding",isDocsHomePage:!1,title:"Custom Parameter Binding",description:"Custom parameter binding can be created easily by using @bind.custom decorator. You can create a new decorator by wrap the @bind.custom decorator inside a function.",source:"@site/docs/Custom-Parameter-Binding.md",sourceDirName:".",slug:"/custom-parameter-binding",permalink:"/custom-parameter-binding",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Custom-Parameter-Binding.md",version:"current",frontMatter:{id:"custom-parameter-binding",title:"Custom Parameter Binding"},sidebar:"overview",previous:{title:"Metaprogramming",permalink:"/metaprogramming"},next:{title:"Custom Validator",permalink:"/custom-validator"}},u=[],p={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Custom parameter binding can be created easily by using ",(0,a.kt)("inlineCode",{parentName:"p"},"@bind.custom")," decorator. You can create a new decorator by wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"@bind.custom")," decorator inside a function."),(0,a.kt)("p",null,"Example below we will create parameter binder for ip address (instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},'@bind.request("ip")'),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import {bind} from "plumier"\n\nexport function ip(){\n    return bind.custom(ctx => ctx.request.ip)\n}\n')),(0,a.kt)("p",null,"The main logic of parameter binding is in inside the function callback, where the logic of which part of the context will be bound to the parameter. The call back function signature is like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"process: (context:Koa.Context) => any\n")),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," decorator above is like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    @route.get()\n    save(@ip() ipAddress:string){\n\n    }\n}\n")))}l.isMDXComponent=!0}}]);