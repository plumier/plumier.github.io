(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{113:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return b}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(i),m=n,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return i?r.a.createElement(b,l(l({ref:t},p),{},{components:i})):r.a.createElement(b,l({ref:t},p))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},66:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(3),r=i(7),a=(i(0),i(113)),o={id:"facility",title:"Facility"},l={unversionedId:"facility",id:"facility",isDocsHomePage:!1,title:"Facility",description:"Facility is a configuration component used to configure Plumier application to get a new ability. It consist some middlewares in a correct order, some process before the application initialized and some default application configuration.",source:"@site/docs/Facility.md",slug:"/facility",permalink:"/facility",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Facility.md",version:"current",sidebar:"overview",previous:{title:"Middleware",permalink:"/middleware"},next:{title:"Default Environment Variable",permalink:"/default-environment-variable"}},c=[{value:"Signature",id:"signature",children:[]},{value:"Develop Your Own Facility",id:"develop-your-own-facility",children:[]},{value:"Access Koa from Facility",id:"access-koa-from-facility",children:[]}],p={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Facility is a configuration component used to configure Plumier application to get a new ability. It consist some middlewares in a correct order, some process before the application initialized and some default application configuration. "),Object(a.b)("p",null,"For example to build an API you will need: a Body parser, CORS, Generic error handler and some configuration etc, all can be bundled into one facility called ",Object(a.b)("inlineCode",{parentName:"p"},"WebApiFacility"),". "),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("p",null,"Facility is a class that implements ",Object(a.b)("inlineCode",{parentName:"p"},"Facility"),", the signature of ",Object(a.b)("inlineCode",{parentName:"p"},"Facility")," is like below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export interface Facility {\n    setup(app: Readonly<PlumierApplication>): void\n    generateRoutes(app: Readonly<PlumierApplication>): Promise<RouteMetadata[]>\n    initialize(app: Readonly<PlumierApplication>, routes:RouteMetadata:[]): Promise<void>\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"setup")," called during setup process. This method usually used for registering configurations and middlewares"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"generateRoutes")," called during initialization process before the ",Object(a.b)("inlineCode",{parentName:"li"},"initialize")," method. This method provides list of routes produced by Facility. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initialize")," called during initialization process. This method usually used for some preparation required before application run, and possible to call promised functions")),Object(a.b)("h2",{id:"develop-your-own-facility"},"Develop Your Own Facility"),Object(a.b)("p",null,"Develop your own Facility is not required, you can register middleware and set some configuration\nmanually. You develop Facility if you want to make it reusable."),Object(a.b)("p",null,"For example the ",Object(a.b)("inlineCode",{parentName:"p"},"WebApiFacility")," facility is like below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import Cors from "@koa/cors"\nimport BodyParser from "koa-bodyparser"\nimport { DefaultFacility, PlumierApplication } from "plumier"\n\nexport class WebApiFacility extends DefaultFacility {\n    setup(app: Readonly<PlumierApplication>) {\n        app.use({execute: async next => {\n            try{\n                return next.proceed()\n            }\n            catch(e){\n                //do something with the error\n            }\n        }})\n        app.use(BodyParser({ /* configuration */ }))\n        app.use(Cors({ /* configuration */ }))\n    }\n}\n')),Object(a.b)("p",null,"Above code showing that we setup error handler, body parser and cors with some order.\nError handler in the top most, it means it will handle all error caused by the next middleware / action."),Object(a.b)("h2",{id:"access-koa-from-facility"},"Access Koa from Facility"),Object(a.b)("p",null,"In some case if you want to configure Koa, you can do it in facility."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import Cors from "@koa/cors"\nimport BodyParser from "koa-bodyparser"\nimport { DefaultFacility, PlumierApplication } from "plumier"\n\nexport class WebApiFacility extends DefaultFacility {\n    async setup({ koa }: Readonly<PlumierApplication>) {\n        //do something with the Koa instance\n        koa.use(<koa middleware>)\n    }\n}\n')))}u.isMDXComponent=!0}}]);