(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(113)),i={id:"custom-route-generator",title:"Custom Route Generator"},l={unversionedId:"custom-route-generator",id:"custom-route-generator",isDocsHomePage:!1,title:"Custom Route Generator",description:"Plumier provided extension point to be able to extends the route generation system. This functionalities important when you develop a Facility that handles an endpoint internally and you want this endpoint visible on route analysis or Swagger UI.",source:"@site/docs/Custom-Route-Generator.md",slug:"/custom-route-generator",permalink:"/custom-route-generator",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Custom-Route-Generator.md",version:"current",sidebar:"overview",previous:{title:"Custom Dependency Resolver",permalink:"/custom-dependency-resolver"}},c=[{value:"Action Routes and Virtual Routes",id:"action-routes-and-virtual-routes",children:[]},{value:"Example",id:"example",children:[]},{value:"Generate ActionRoute from Controller",id:"generate-actionroute-from-controller",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier provided extension point to be able to extends the route generation system. This functionalities important when you develop a Facility that handles an endpoint internally and you want this endpoint visible on route analysis or Swagger UI."),Object(a.b)("h2",{id:"action-routes-and-virtual-routes"},"Action Routes and Virtual Routes"),Object(a.b)("p",null,"Plumier provided ",Object(a.b)("inlineCode",{parentName:"p"},"RouteMetadata")," type which separated into 2 kinds:  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ActionRoute")," is a kind of route that handled by controller, this route will have Controller and Action metadata information required by the Open API Specification."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"VirtualRoute")," is a kind of route that handled internally by a middleware, this route doesn't have Controller associated thus it need to specify Open API Specification for ",Object(a.b)("inlineCode",{parentName:"li"},"Operation")," itself. ")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"For example you develop a Facility that handles and endpoint to generate CSRF key for the client ",Object(a.b)("inlineCode",{parentName:"p"},"/auth/generate-csrf"),". First you create middleware that handles the ",Object(a.b)("inlineCode",{parentName:"p"},"/auth/generate-csrf")," endpoint like below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { CustomMiddlewareFunction, ActionResult } from "@Plumier/core"\n\nconst CsrfMiddleware: CustomMiddlewareFunction = async ({ ctx, proceed }) => {\n    if (ctx.method === "GET" && ctx.path.toLocaleLowerCase() === "/auth/generate-csrf") \n        return new ActionResult()\n            .setCookie("__csrf_key", "your generated csrf key")\n    else\n        return proceed()\n}\n')),Object(a.b)("p",null,"Next you register your middleware above and provide the Virtual Route definition for the ",Object(a.b)("inlineCode",{parentName:"p"},"/auth/generate-csrf")," endpoint like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { DefaultFacility, RouteMetadata, PlumierApplication } from "@plumier/core"\n\nclass CsrfGenerationFacility extends DefaultFacility {\n    async generateRoutes(): Promise<RouteMetadata[]> {\n        return [{\n            kind: "VirtualRoute",\n            method: "get",\n            provider: CsrfGenerationFacility,\n            url: "/auth/generate-csrf",\n            access: "Public",\n            openApiOperation: /** Operation Open API 3.0 Specification **/\n        }]\n    }\n\n    setup(app: Readonly<PlumierApplication>): void {\n        app.use(CsrfMiddleware)\n    }\n}\n')),Object(a.b)("h2",{id:"generate-actionroute-from-controller"},"Generate ActionRoute from Controller"),Object(a.b)("p",null,"Plumier provided function to generate route metadata from controller ",Object(a.b)("inlineCode",{parentName:"p"},"generateRoutes"),". To generate routes from controller simply call the function like below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'class CsrfController {\n    @route.get("/auth/generate-csrf")\n    get(){\n        return new ActionResult()\n            .setCookie("__csrf_key", "your generated csrf key")\n    }\n}\n')),Object(a.b)("p",null,"Then you can generate the controller from the facility like below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { DefaultFacility, RouteMetadata, PlumierApplication, generateRoutes } from "@plumier/core"\n\nclass CsrfGenerationFacility extends DefaultFacility {\n    async generateRoutes(): Promise<RouteMetadata[]> {\n        return generateRoutes(CsrfController)\n    }\n\n    setup(app: Readonly<PlumierApplication>): void {\n        app.use(CsrfMiddleware)\n    }\n}\n')))}s.isMDXComponent=!0}}]);