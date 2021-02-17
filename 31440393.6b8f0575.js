(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(b,l(l({ref:t},d),{},{components:n})):i.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=(n(0),n(113));const o={id:"middleware",title:"Middleware"},a={unversionedId:"middleware",id:"middleware",isDocsHomePage:!1,title:"Middleware",description:"Plumier middleware works exactly like Koa middleware, it executed in a stack-like order and has full control of the next middleware.",source:"@site/docs/Middleware.md",slug:"/middleware",permalink:"/middleware",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Middleware.md",version:"current",sidebar:"overview",previous:{title:"Validation",permalink:"/validation"},next:{title:"Facility",permalink:"/facility"}},l=[{value:"Signature",id:"signature",children:[]},{value:"Develop Your Own Middleware",id:"develop-your-own-middleware",children:[]},{value:"Interception",id:"interception",children:[{value:"Intercept Before",id:"intercept-before",children:[]},{value:"Intercept After",id:"intercept-after",children:[]},{value:"Intercept Around",id:"intercept-around",children:[]}]}],c={toc:l};function d({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Plumier middleware works exactly like Koa middleware, it executed in a stack-like order and has full control of the next middleware. "),Object(i.b)("p",null,"The different between Plumier middleware and Koa middleware is Plumier middleware is a stateless class which has a method that act like pure function. It doesn't mutate things but returns value. With this behavior Plumier middleware relatively easy to unit test in isolation."),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("p",null,"Plumier middleware can be a function match ",Object(i.b)("inlineCode",{parentName:"p"},"CustomMiddlewareFunction")," signature or a class that implements ",Object(i.b)("inlineCode",{parentName:"p"},"CustomMiddleware")," interface. The signature is like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"type CustomMiddlewareFunction = (next: Readonly<Invocation>) => Promise<ActionResult>\n\ninterface CustomMiddleware {\n    execute(next: Readonly<Invocation>): Promise<ActionResult>\n}\n\ninterface Invocation {\n    context: Readonly<Context>\n    proceed(): Promise<ActionResult>\n}\n")),Object(i.b)("p",null,"Middleware has one parameter ",Object(i.b)("inlineCode",{parentName:"p"},"next")," which is an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Invocation")," object to proceed the next middleware.\nMiddleware must return a promised ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult"),", you can return result of the invocation which mean its return\nresult of previous middleware (its possibly the result of the action if the next middlewares doesn't modify the result).\nYou can also return modified version of action result or a brand new action result. You can also throw an error from\ninside of middleware, the default error handler will handle it properly."),Object(i.b)("h2",{id:"develop-your-own-middleware"},"Develop Your Own Middleware"),Object(i.b)("p",null,"To create a plumier middleware is as easy as Koa middleware, The idea is the same but simpler. The most basic middleware that does nothing is like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"class BasicMiddleware implements CustomMiddleware {\n    execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        return next.proceed()\n    }\n}\n")),Object(i.b)("p",null,"Middleware above only execute the next middleware and pass its result into previous middleware. "),Object(i.b)("p",null,"More real world example is creating a error handler middleware, For example we need to log all internal error 500\ninto database for auditing process."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"class BasicMiddleware implements CustomMiddleware {\n    async execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        try{\n            return await next.proceed()\n        }\n        catch (e){\n            if(e instance of HttpStatusError && e.status === 500){\n                //save error to db\n            }\n            //just re-throw it and let default error handler handle it\n            throw e\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"interception"},"Interception"),Object(i.b)("p",null,"Middleware has full control of the next middleware, with this behavior we can do interception easily.\nThere are 3 types of interception: before, after and around."),Object(i.b)("h3",{id:"intercept-before"},"Intercept Before"),Object(i.b)("p",null,"Interception occurs before the next execution proceeded. For example the authorization middleware,\nwhere the interception occur before proceeded. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { Middleware, Invocation, ActionResult, HttpStatusError } from "plumier"\n\nclass AdminOnlyMiddleware implements CustomMiddleware {\n    execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        if(next.ctx.state.user.role !== "Admin")\n            throw new HttpStatusError(401)\n        else\n            return next.proceed()\n    }\n}\n')),Object(i.b)("p",null,"Above code showing that we intercept the process before proceeding to next middleware. If the user role\nis not Admin then throw Unauthorized status."),Object(i.b)("h3",{id:"intercept-after"},"Intercept After"),Object(i.b)("p",null,"Interception occurs after the next execution proceeded. For example we need to modify content of the result\nbased on http status."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { Middleware, Invocation, ActionResult } from "plumier"\n\nclass ModifyResponseMiddleware implements CustomMiddleware {\n    async execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        const result = await next.proceed()\n        if(result.status === 500){\n            //do something and return ActionResult\n        }\n        else\n            return result\n    }\n}\n')),Object(i.b)("h3",{id:"intercept-around"},"Intercept Around"),Object(i.b)("p",null,"Interception occurs before and after the next execution. For example we need to log the response time of every request."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { Middleware, Invocation, ActionResult } from "plumier"\n\nclass ResponseTimeMiddleware implements CustomMiddleware {\n    async execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        console.time("Response Time")\n        const result = await next.execute()\n        console.timeEnd("Response Time")\n        return result\n    }\n}\n')))}d.isMDXComponent=!0}}]);