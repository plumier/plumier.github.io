(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(h,l(l({ref:t},d),{},{components:n})):i.a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/application-lifecycle-2bfeacf5788605df57e819bb6b1d4aff.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/request-sequence-3874fcc4d39b1ca6d905415a1b7197ea.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=(n(0),n(113));const a={id:"application-lifecycle",title:"Application Lifecycle"},o={unversionedId:"refs/application-lifecycle",id:"refs/application-lifecycle",isDocsHomePage:!1,title:"Application Lifecycle",description:"When an Http Request issued into Plumier application, the process goes through a series of processing steps that can be categorized into three main process. Infographic picture below showing the various stage of Plumier Application Life Cycle.",source:"@site/docs/refs/Application-Lifecycle.md",slug:"/refs/application-lifecycle",permalink:"/refs/application-lifecycle",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/Application-Lifecycle.md",version:"current"},l=[{value:"Router",id:"router",children:[{value:"Routing",id:"routing",children:[]},{value:"Result Execution",id:"result-execution",children:[]},{value:"Error Handler",id:"error-handler",children:[]}]},{value:"Middleware Pipeline",id:"middleware-pipeline",children:[{value:"Global Middlewares",id:"global-middlewares",children:[]},{value:"Parameter Binding Middleware",id:"parameter-binding-middleware",children:[]},{value:"Converter &amp; Validation middleware",id:"converter--validation-middleware",children:[]},{value:"Authorization Middleware",id:"authorization-middleware",children:[]},{value:"Controller / Method Middleware",id:"controller--method-middleware",children:[]}]},{value:"Action Invoker",id:"action-invoker",children:[{value:"Controller Creation",id:"controller-creation",children:[]},{value:"Method Invocation",id:"method-invocation",children:[]}]}],c={toc:l};function d({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When an Http Request issued into Plumier application, the process goes through a series of processing steps that can be categorized into three main process. Infographic picture below showing the various stage of Plumier Application Life Cycle."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Application Life Cycle",src:n(146).default})),Object(i.b)("p",null,"Above picture showing the Plumier components, the lifecycle sequence start from left to right then return back to left after execution done."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Sequence Diagram",src:n(201).default})),Object(i.b)("h2",{id:"router"},"Router"),Object(i.b)("p",null,"Router is the main process during the occurrence of the http request. There three main process inside router are: "),Object(i.b)("h3",{id:"routing"},"Routing"),Object(i.b)("p",null,"Routing will parse the request URL into path and query object using RegEx and specify the correct controller that will handle the request. "),Object(i.b)("p",null,"There are ",Object(i.b)("inlineCode",{parentName:"p"},"Context")," variable (",Object(i.b)("inlineCode",{parentName:"p"},"ctx"),") initialized during this phase. ",Object(i.b)("inlineCode",{parentName:"p"},"ctx")," accessible from middleware using ",Object(i.b)("inlineCode",{parentName:"p"},"invocation.ctx")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ctx.route")," contains route metadata information such as controller name, current method name, parameters, route etc. The value can be ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," if the current request doesn't associated with any controller."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ctx.request.query")," contains request query string in query form. "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ctx.config")," contains Plumier application configuration."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ctx.routes")," contains all routes metadata information, this values got during route generation process on initialization process.")),Object(i.b)("p",null,"All above context property only accessible within process after the routing. "),Object(i.b)("h3",{id:"result-execution"},"Result Execution"),Object(i.b)("p",null,"Router executes middleware pipeline and wait for the returned ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult"),". Action result contains raw values will be used to render the Http Response such as request body, headers, cookies etc. "),Object(i.b)("p",null,"Result execution process executes the ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult")," by calling its ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method and render the Http Response."),Object(i.b)("h3",{id:"error-handler"},"Error Handler"),Object(i.b)("p",null,"Router surrounded with a global try-catch to catch all thrown error inside the next phases (Middleware Pipeline and Action Invoker). "),Object(i.b)("p",null,"All uncaught error usually translated into Http Response with status 500 except using ",Object(i.b)("inlineCode",{parentName:"p"},"HttpStatusError")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError")," will result different http status."),Object(i.b)("h2",{id:"middleware-pipeline"},"Middleware Pipeline"),Object(i.b)("p",null,"Middleware pipeline executes middlewares using stack-like sequence. Basically its works like Koa middleware pipeline. The first middleware has full control of the next invocation (can be another middleware execution or a controller execution). "),Object(i.b)("p",null,"It can execute next invocation using some condition such as check for login user or check some query string before proceeding. Further more middleware can modify execution result that will be used to create http response, such as modify the response body, response status etc."),Object(i.b)("p",null,"Middleware executed inside middleware pipeline has a sequence like below: "),Object(i.b)("h3",{id:"global-middlewares"},"Global Middlewares"),Object(i.b)("p",null,"All global middlewares: middleware that registered using application ",Object(i.b)("inlineCode",{parentName:"p"},"use")," method or registered using ",Object(i.b)("inlineCode",{parentName:"p"},"Facility")," will be executed first. "),Object(i.b)("h3",{id:"parameter-binding-middleware"},"Parameter Binding Middleware"),Object(i.b)("p",null,"Parameter binding middleware will translate request values (body, header, cookie, query string etc) into parameter values. Parameter binding mutate the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx")," property used to save the result. ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.parameters")," will store the raw (not converted nor validated) value of the parameter binding. "),Object(i.b)("h3",{id:"converter--validation-middleware"},"Converter & Validation middleware"),Object(i.b)("p",null,"Converter and Validation middleware will convert the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.parameters")," raw value created by parameter binding into appropriate datatype match with controller's method parameter type. The conversion result replaces the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.parameters")," created by parameter binding with those cleansed values."),Object(i.b)("p",null,"Converter and Validation will throw ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError")," and rendered into Http Response with 422 status code."),Object(i.b)("p",null,"During creation of custom converter, Plumier uses dependency resolver to create instance of the custom converter. This behavior can be extended using custom dependency resolver with dependency injection framework of the choice."),Object(i.b)("h3",{id:"authorization-middleware"},"Authorization Middleware"),Object(i.b)("p",null,"Authorization Middleware will restrict access to a controller's method, its disabled by default. Authorization can be activated by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"enableAuthorization")," on Plumier configuration, or by installing ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility"),". "),Object(i.b)("p",null,"Authorization will throw ",Object(i.b)("inlineCode",{parentName:"p"},"HttpStatusError")," with status code 403 Forbidden and 401 unauthorized"),Object(i.b)("p",null,"Plumier also uses dependency resolver to create instance of custom authorization for dependency injection."),Object(i.b)("h3",{id:"controller--method-middleware"},"Controller / Method Middleware"),Object(i.b)("p",null,"Controller / Method middleware is middleware registered using ",Object(i.b)("inlineCode",{parentName:"p"},"@middleware.use()")," decorator above the controller or method declaration. Controller / Method middleware can use the ",Object(i.b)("inlineCode",{parentName:"p"},"ActionContext")," and has access to ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.parameters")," with a cleansed value."),Object(i.b)("h2",{id:"action-invoker"},"Action Invoker"),Object(i.b)("p",null,"Action invoker execute the controller's method handle the request. Action invoker is an optional phase, but most important and complex phase. "),Object(i.b)("p",null,"Inside Action Invoker, request context ",Object(i.b)("inlineCode",{parentName:"p"},"Context")," class mutated with a new ",Object(i.b)("inlineCode",{parentName:"p"},"parameters")," property. There is a derived class of ",Object(i.b)("inlineCode",{parentName:"p"},"Context")," can be used for convenient named ",Object(i.b)("inlineCode",{parentName:"p"},"ActionContext")),Object(i.b)("h3",{id:"controller-creation"},"Controller Creation"),Object(i.b)("p",null,"Controller creation is an important phase because it uses dependency resolver to create instance of the controller. This phase always happened on every request that has controller handler."),Object(i.b)("h3",{id:"method-invocation"},"Method Invocation"),Object(i.b)("p",null,"Method invocation will invoke the appropriate method handles the request using the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.parameters")," values. This method invocation process returned promised ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult")," even if the method returned a non ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult")," value."))}d.isMDXComponent=!0}}]);