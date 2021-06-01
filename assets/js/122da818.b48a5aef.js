(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[136],{876:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9477:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=t(7560),a=t(8283),o=(t(2784),t(876)),i=["components"],l={id:"error-handling",title:"Error Handling"},c={unversionedId:"refs/error-handling",id:"refs/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"Plumier has a default error handler that will handle all error thrown inside controllers or middlewares. Default error handler will automatically format thrown HttpStatusError or ValidationError into JSON response like below",source:"@site/docs/refs/Error-Handling.md",sourceDirName:"refs",slug:"/refs/error-handling",permalink:"/refs/error-handling",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/Error-Handling.md",version:"current",frontMatter:{id:"error-handling",title:"Error Handling"}},s=[{value:"Override Error Handling",id:"override-error-handling",children:[]}],d={toc:s};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Plumier has a default error handler that will handle all error thrown inside controllers or middlewares. Default error handler will automatically format thrown ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStatusError")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationError")," into JSON response like below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    error: {\n        status: <http status code>,\n        message: <error message>\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"message")," can be a plain text message or can be a JSON object. "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"500 (Internal server error)  will not formatted into JSON response for security reason."))),(0,o.kt)("h2",{id:"override-error-handling"},"Override Error Handling"),(0,o.kt)("p",null,"You can provide a global error handler to override the behavior or the default error handler above, by providing another middleware. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Middleware, Invocation, ActionResult } from "plumier"\n\nexport class MyGlobalErrorHandlerMiddleware implements Middleware {\n    execute(next: Readonly<Invocation>): Promise<ActionResult> {\n        try {\n            return await i.proceed()\n        } catch (e) {\n            //process the error and return JSON with ActionResult\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Most important part is register above middleware in the application startup before the ",(0,o.kt)("inlineCode",{parentName:"p"},"WebApiFacility")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RestApiFacility")," registration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst koa = new Plumier()\n    .use(new MyGlobalErrorHandlerMiddleware())\n    .set(new WebApiFacility())\n    .initialize()\n")),(0,o.kt)("p",null,"Registration order is important so the custom error handler can catch framework error thrown by all middleware registered inside ",(0,o.kt)("inlineCode",{parentName:"p"},"WebApiFacility")," such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationError")," etc."))}p.isMDXComponent=!0}}]);