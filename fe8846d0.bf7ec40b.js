(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(113)),i={id:"controller-invoker",title:"Controller Invoker"},l={unversionedId:"refs/controller-invoker",id:"refs/controller-invoker",isDocsHomePage:!1,title:"Controller Invoker",description:"Sometime its necessary to get the result of another controller including its middleware execution, from inside another controller or from a middleware. The real case for this function is create a redirect request without changing the URL.",source:"@site/docs/refs/Controller-Invoker.md",slug:"/refs/controller-invoker",permalink:"/refs/controller-invoker",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/refs/Controller-Invoker.md",version:"current"},c=[{value:"Signature",id:"signature",children:[]},{value:"Context State",id:"context-state",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Caveat",id:"caveat",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sometime its necessary to get the result of another controller including its middleware execution, from inside another controller or from a middleware. The real case for this function is create a redirect request without changing the URL."),Object(a.b)("p",null,"Controller invoker execute the middleware pipeline to execute controller including its middleware, its returned ",Object(a.b)("inlineCode",{parentName:"p"},"ActionResult")," so it can be returned from inside the calling controller or middleware. Its support all HTTP Method as long as it has the same signature and provided a proper parameters (see Caveat at the last section)"),Object(a.b)("h3",{id:"signature"},"Signature"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"function invoke(ctx: Context, route: RouteInfo)\n")),Object(a.b)("p",null,"Parameters: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ctx")," the request context "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"route")," route info metadata of the controller will be invoked, route metadata information can be retrieved from ",Object(a.b)("inlineCode",{parentName:"li"},"ctx.routes"))),Object(a.b)("h3",{id:"context-state"},"Context State"),Object(a.b)("p",null,"When called from inside middleware its necessary to check the context state to prevent infinite call loop. Plumier provide ",Object(a.b)("inlineCode",{parentName:"p"},"ctx.state.caller")," property which possibly contains value: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"system")," mean the request called by the Plumier request system."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"invoke")," mean the request called by controller invoker.")),Object(a.b)("h3",{id:"example-usage"},"Example Usage"),Object(a.b)("p",null,"Invoke another controller from inside controller "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'class AnimalController {\n    get() {\n        return { method: "get" }\n    }\n\n    list(@bind.ctx() ctx:Context){\n        //invoke the AnimalController.get \n        return invoke(ctx, ctx.routes.find(x => x.action.name === "get")!)\n    }\n}\n')),Object(a.b)("p",null,"Invoke another controller from inside middleware "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'class AnimalMiddleware implements Middleware {\n    execute(i: Readonly<Invocation>): Promise<ActionResult> {\n        //make sure to check the context state property\n        //only invoke another controller if the state is "system"\n        if (i.ctx.state.caller === "system" && i.ctx.request.path === "/hello")\n                //assume that it execute the first controller\'s action\n                return invoke(i.ctx, i.ctx.routes[0])\n            else\n                return i.proceed()\n    }\n}\n')),Object(a.b)("p",null,"Above middleware will create a new route ",Object(a.b)("inlineCode",{parentName:"p"},"/hello")," that will execute the first controller's action registered in Plumier system."),Object(a.b)("h3",{id:"caveat"},"Caveat"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When called from inside controller, the calling action must have the same signature with the called action. "),Object(a.b)("li",{parentName:"ul"},"When called from inside middleware with a new endpoint, make sure to populate the ",Object(a.b)("inlineCode",{parentName:"li"},"ctx.parameters")," to supply the controller's action accordingly.")))}u.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);