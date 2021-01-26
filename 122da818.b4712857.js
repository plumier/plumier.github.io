(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(m,l(l({ref:r},s),{},{components:t})):a.a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),o=(t(0),t(112)),i={id:"error-handling",title:"Error Handling"},l={unversionedId:"refs/error-handling",id:"refs/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"Plumier has a default error handler that will handle all error thrown inside controllers or middlewares. Default error handler will automatically format thrown HttpStatusError or ValidationError into JSON response like below",source:"@site/docs/refs/Error-Handling.md",slug:"/refs/error-handling",permalink:"/refs/error-handling",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/refs/Error-Handling.md",version:"current"},c=[{value:"Override Error Handling",id:"override-error-handling",children:[]}],s={toc:c};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Plumier has a default error handler that will handle all error thrown inside controllers or middlewares. Default error handler will automatically format thrown ",Object(o.b)("inlineCode",{parentName:"p"},"HttpStatusError")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ValidationError")," into JSON response like below"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    error: {\n        status: <http status code>,\n        message: <error message>\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"message")," can be a plain text message or can be a JSON object. "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"500 (Internal server error)  will not formatted into JSON response for security reason."))),Object(o.b)("h2",{id:"override-error-handling"},"Override Error Handling"),Object(o.b)("p",null,"You can provide a global error handler to override the behavior or the default error handler above, by providing another middleware. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { Middleware, Invocation, ActionResult } from "plumier"\n\nexport class MyGlobalErrorHandlerMiddleware implements Middleware {\n    execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        try {\n            return await i.proceed()\n        } catch (e) {\n            //process the error and return JSON with ActionResult\n        }\n    }\n}\n')),Object(o.b)("p",null,"Most important part is register above middleware in the application startup before the ",Object(o.b)("inlineCode",{parentName:"p"},"WebApiFacility")," or ",Object(o.b)("inlineCode",{parentName:"p"},"RestApiFacility")," registration."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"\nconst koa = new Plumier()\n    .use(new MyGlobalErrorHandlerMiddleware())\n    .set(new WebApiFacility())\n    .initialize()\n")),Object(o.b)("p",null,"Registration order is important so the custom error handler can catch framework error thrown by all middleware registered inside ",Object(o.b)("inlineCode",{parentName:"p"},"WebApiFacility")," such as ",Object(o.b)("inlineCode",{parentName:"p"},"ValidationError")," etc."))}d.isMDXComponent=!0}}]);