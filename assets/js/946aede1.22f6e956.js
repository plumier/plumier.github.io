(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[996],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6972:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(7560),i=n(8283),o=(n(2784),n(876)),a={id:"application-lifecycle",title:"Application Lifecycle"},l={unversionedId:"refs/application-lifecycle",id:"refs/application-lifecycle",isDocsHomePage:!1,title:"Application Lifecycle",description:"When an Http Request issued into Plumier application, the process goes through a series of processing steps that can be categorized into three main process. Infographic picture below showing the various stage of Plumier Application Life Cycle.",source:"@site/docs/refs/Application-Lifecycle.md",sourceDirName:"refs",slug:"/refs/application-lifecycle",permalink:"/refs/application-lifecycle",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/Application-Lifecycle.md",version:"current",frontMatter:{id:"application-lifecycle",title:"Application Lifecycle"}},c=[{value:"Router",id:"router",children:[{value:"Routing",id:"routing",children:[]},{value:"Result Execution",id:"result-execution",children:[]},{value:"Error Handler",id:"error-handler",children:[]}]},{value:"Middleware Pipeline",id:"middleware-pipeline",children:[{value:"Global Middlewares",id:"global-middlewares",children:[]},{value:"Parameter Binding Middleware",id:"parameter-binding-middleware",children:[]},{value:"Converter &amp; Validation middleware",id:"converter--validation-middleware",children:[]},{value:"Authorization Middleware",id:"authorization-middleware",children:[]},{value:"Controller / Method Middleware",id:"controller--method-middleware",children:[]}]},{value:"Action Invoker",id:"action-invoker",children:[{value:"Controller Creation",id:"controller-creation",children:[]},{value:"Method Invocation",id:"method-invocation",children:[]}]}],d={toc:c};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When an Http Request issued into Plumier application, the process goes through a series of processing steps that can be categorized into three main process. Infographic picture below showing the various stage of Plumier Application Life Cycle."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Application Life Cycle",src:n(5437).Z})),(0,o.kt)("p",null,"Above picture showing the Plumier components, the lifecycle sequence start from left to right then return back to left after execution done."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence Diagram",src:n(5955).Z})),(0,o.kt)("h2",{id:"router"},"Router"),(0,o.kt)("p",null,"Router is the main process during the occurrence of the http request. There three main process inside router are: "),(0,o.kt)("h3",{id:"routing"},"Routing"),(0,o.kt)("p",null,"Routing will parse the request URL into path and query object using RegEx and specify the correct controller that will handle the request. "),(0,o.kt)("p",null,"There are ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," variable (",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),") initialized during this phase. ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," accessible from middleware using ",(0,o.kt)("inlineCode",{parentName:"p"},"invocation.ctx")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ctx.route")," contains route metadata information such as controller name, current method name, parameters, route etc. The value can be ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," if the current request doesn't associated with any controller."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ctx.request.query")," contains request query string in query form. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ctx.config")," contains Plumier application configuration."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ctx.routes")," contains all routes metadata information, this values got during route generation process on initialization process.")),(0,o.kt)("p",null,"All above context property only accessible within process after the routing. "),(0,o.kt)("h3",{id:"result-execution"},"Result Execution"),(0,o.kt)("p",null,"Router executes middleware pipeline and wait for the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionResult"),". Action result contains raw values will be used to render the Http Response such as request body, headers, cookies etc. "),(0,o.kt)("p",null,"Result execution process executes the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionResult")," by calling its ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method and render the Http Response."),(0,o.kt)("h3",{id:"error-handler"},"Error Handler"),(0,o.kt)("p",null,"Router surrounded with a global try-catch to catch all thrown error inside the next phases (Middleware Pipeline and Action Invoker). "),(0,o.kt)("p",null,"All uncaught error usually translated into Http Response with status 500 except using ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStatusError")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationError")," will result different http status."),(0,o.kt)("h2",{id:"middleware-pipeline"},"Middleware Pipeline"),(0,o.kt)("p",null,"Middleware pipeline executes middlewares using stack-like sequence. Basically its works like Koa middleware pipeline. The first middleware has full control of the next invocation (can be another middleware execution or a controller execution). "),(0,o.kt)("p",null,"It can execute next invocation using some condition such as check for login user or check some query string before proceeding. Further more middleware can modify execution result that will be used to create http response, such as modify the response body, response status etc."),(0,o.kt)("p",null,"Middleware executed inside middleware pipeline has a sequence like below: "),(0,o.kt)("h3",{id:"global-middlewares"},"Global Middlewares"),(0,o.kt)("p",null,"All global middlewares: middleware that registered using application ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," method or registered using ",(0,o.kt)("inlineCode",{parentName:"p"},"Facility")," will be executed first. "),(0,o.kt)("h3",{id:"parameter-binding-middleware"},"Parameter Binding Middleware"),(0,o.kt)("p",null,"Parameter binding middleware will translate request values (body, header, cookie, query string etc) into parameter values. Parameter binding mutate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," property used to save the result. ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.parameters")," will store the raw (not converted nor validated) value of the parameter binding. "),(0,o.kt)("h3",{id:"converter--validation-middleware"},"Converter & Validation middleware"),(0,o.kt)("p",null,"Converter and Validation middleware will convert the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.parameters")," raw value created by parameter binding into appropriate datatype match with controller's method parameter type. The conversion result replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.parameters")," created by parameter binding with those cleansed values."),(0,o.kt)("p",null,"Converter and Validation will throw ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationError")," and rendered into Http Response with 422 status code."),(0,o.kt)("p",null,"During creation of custom converter, Plumier uses dependency resolver to create instance of the custom converter. This behavior can be extended using custom dependency resolver with dependency injection framework of the choice."),(0,o.kt)("h3",{id:"authorization-middleware"},"Authorization Middleware"),(0,o.kt)("p",null,"Authorization Middleware will restrict access to a controller's method, its disabled by default. Authorization can be activated by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableAuthorization")," on Plumier configuration, or by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"JwtAuthFacility"),". "),(0,o.kt)("p",null,"Authorization will throw ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStatusError")," with status code 403 Forbidden and 401 unauthorized"),(0,o.kt)("p",null,"Plumier also uses dependency resolver to create instance of custom authorization for dependency injection."),(0,o.kt)("h3",{id:"controller--method-middleware"},"Controller / Method Middleware"),(0,o.kt)("p",null,"Controller / Method middleware is middleware registered using ",(0,o.kt)("inlineCode",{parentName:"p"},"@middleware.use()")," decorator above the controller or method declaration. Controller / Method middleware can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionContext")," and has access to ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.parameters")," with a cleansed value."),(0,o.kt)("h2",{id:"action-invoker"},"Action Invoker"),(0,o.kt)("p",null,"Action invoker execute the controller's method handle the request. Action invoker is an optional phase, but most important and complex phase. "),(0,o.kt)("p",null,"Inside Action Invoker, request context ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," class mutated with a new ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters")," property. There is a derived class of ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," can be used for convenient named ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionContext")),(0,o.kt)("h3",{id:"controller-creation"},"Controller Creation"),(0,o.kt)("p",null,"Controller creation is an important phase because it uses dependency resolver to create instance of the controller. This phase always happened on every request that has controller handler."),(0,o.kt)("h3",{id:"method-invocation"},"Method Invocation"),(0,o.kt)("p",null,"Method invocation will invoke the appropriate method handles the request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.parameters")," values. This method invocation process returned promised ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionResult")," even if the method returned a non ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionResult")," value."))}s.isMDXComponent=!0},5437:function(e,t,n){"use strict";t.Z=n.p+"assets/images/application-lifecycle-2bfeacf5788605df57e819bb6b1d4aff.png"},5955:function(e,t,n){"use strict";t.Z=n.p+"assets/images/request-sequence-3874fcc4d39b1ca6d905415a1b7197ea.png"}}]);