(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/application-lifecycle-2bfeacf5788605df57e819bb6b1d4aff.png"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/middleware-pipeline-baba5f9be794f56a19720e5693840aa2.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(112)),i={id:"extend",title:"Overview"},l={unversionedId:"extend",id:"extend",isDocsHomePage:!1,title:"Overview",description:"This documentation covers most of advanced Plumier functionalities. By reading this documentation you will be able to extends the framework functionalities to give plumier a new ability.",source:"@site/docs/Extend.md",slug:"/extend",permalink:"/extend",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Extend.md",version:"current",sidebar:"overview",previous:{title:"Default Environment Variable",permalink:"/default-environment-variable"},next:{title:"Reflection Fundamentals",permalink:"/reflection-basic"}},c=[{value:"Plumier Middleware in a Nutshell",id:"plumier-middleware-in-a-nutshell",children:[]},{value:"Context",id:"context",children:[]},{value:"Application Lifecycle",id:"application-lifecycle",children:[]},{value:"Metaprogramming",id:"metaprogramming",children:[]},{value:"Custom Middleware",id:"custom-middleware",children:[{value:"Example Global Middleware",id:"example-global-middleware",children:[]},{value:"Example Controller/Method Middleware",id:"example-controllermethod-middleware",children:[]}]},{value:"Custom Parameter Binding",id:"custom-parameter-binding",children:[]},{value:"Custom Validator",id:"custom-validator",children:[]},{value:"Custom Authorization",id:"custom-authorization",children:[]}],s={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This documentation covers most of advanced Plumier functionalities. By reading this documentation you will be able to extends the framework functionalities to give plumier a new ability."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"By reading this documentation assume that you are already familiar with basic Plumier functionalities such as parameter binding, routing, type conversion etc."))),Object(o.b)("p",null,"Plumier has some built-in functionalities such as validators, parameter binders, authorizer etc. If those functionalities doesn't fit your needs, you can extends Plumier capability by providing your own custom extension. Plumier provided some interfaces contract to easily extend its capability."),Object(o.b)("p",null,"There are some knowledge base you need to know to make a better understanding on how things work inside the framework before start creating custom extension."),Object(o.b)("h2",{id:"plumier-middleware-in-a-nutshell"},"Plumier Middleware in a Nutshell"),Object(o.b)("p",null,"The term of middleware in Plumier is the same as in other framework such as Express and Koa. All functionalities (validator, authorization, parameter binding etc) in Plumier are implementation of middleware. "),Object(o.b)("p",null,"Unlike Express, Plumier middleware used a modern pipeline. Instead of using a chain of callback Plumier middleware used chain of promise (async/await) executed from one to another waiting the execution result of the next middleware. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Pipeline",src:n(184).default})),Object(o.b)("p",null,"This pipeline has better execution control than Express, because the previous middleware free to await the next middleware execution or return a new ",Object(o.b)("inlineCode",{parentName:"p"},"ActionResult")," immediately and stop the execution pipeline without touching the controller. "),Object(o.b)("p",null,"This behavior very important for some functionalities such as Validation and Authorization where middleware can stop the pipeline execution immediately when some state doesn't match the preferred condition and returned error message immediately. "),Object(o.b)("p",null,"This behavior also has better error handling because API programmer free to throw error anywhere inside middlewares or controllers because its guaranteed will be caught by the higher middleware."),Object(o.b)("p",null,"Simplest custom middleware example is like below"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class MyCustomMiddleware implements CustomMiddleware {\n    execute(inv:Invocation){\n        return inv.proceed()\n    }\n}\n")),Object(o.b)("p",null,"Above code showing a simplest custom middleware it does nothing except execute the next middleware and pass the result into the higher middleware. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const myCustomMiddleware:CustomMiddlewareFunction = inv => inv.proceed()\n")),Object(o.b)("p",null,"Above code is another version of middleware, its created using functional custom middleware, it has the same behavior with the previous example."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Invocation")," is an object represent the next process will be invoked by the middleware. It has ",Object(o.b)("inlineCode",{parentName:"p"},"proceed()")," method used to execute the next process and returned the execution result ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<ActionResult>"),". Invocation has ",Object(o.b)("inlineCode",{parentName:"p"},"ctx")," property which is the Context useful to get current request information."),Object(o.b)("h2",{id:"context"},"Context"),Object(o.b)("p",null,"Context in Plumier (usually the variable named ",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),") is derived from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/koajs/koa/blob/master/docs/api/context.md"}),"Koa context"),", it encapsulate ",Object(o.b)("inlineCode",{parentName:"p"},"HttpRequest")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponse")," object into a single object, it mostly used in every custom extension. "),Object(o.b)("p",null,"Context can be accessed from inside controller using parameter binding ",Object(o.b)("inlineCode",{parentName:"p"},"@bind.ctx()")," or from inside any custom extension. Even though Context has tons of properties, usually only a few will be used, here are list of most used properties: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.request.body")," the request body. Don't confuse with ",Object(o.b)("inlineCode",{parentName:"li"},"ctx.body")," because its the response body. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.query")," or ",Object(o.b)("inlineCode",{parentName:"li"},"ctx.request.query")," the request query case insensitive. Can be access using ",Object(o.b)("inlineCode",{parentName:"li"},"ctx.query.myQuery"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ctx.query.MYQUERY"),", ",Object(o.b)("inlineCode",{parentName:"li"},'ctx.query["myquery"]')," or ",Object(o.b)("inlineCode",{parentName:"li"},'ctx.query["MYQUERY"]'),"  "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.header")," or ",Object(o.b)("inlineCode",{parentName:"li"},"ctx.request.header")," the request header."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.cookies")," the cookie"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.state.user")," the current login user (JWT claim)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.config")," the Plumier application configuration"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.routes")," array of all route information used by the route generator. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.route")," the current route information, contains metadata information of current controller or action handles the request. For request doesn't associated with controller the value will be ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.parameters")," array of value that will be bound to controller's method. The value arranged in a correct order match with methods parameter. This property only available on controller/method middleware")),Object(o.b)("p",null,"For a complete reference about Context and its properties can be found in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/koajs/koa/blob/master/docs/api/context.md"}),"Koa documentation"),". "),Object(o.b)("h2",{id:"application-lifecycle"},"Application Lifecycle"),Object(o.b)("p",null,"When an Http Request issued into Plumier application, the process goes through a series of processing steps categorized into three main process like picture below."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Lifecycle",src:n(142).default})),Object(o.b)("p",null,"The execution process start from the left to right to pass the request that will be processed by controller and then returned back from right to left for the controller execution result that will be rendered into http response."),Object(o.b)("p",null,"All the child process of the Middleware Pipeline is extensible by using custom extension with specific registration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Custom global middleware middleware registered using Plumier application during the application bootstrap using ",Object(o.b)("inlineCode",{parentName:"li"},"app.use()")," method."),Object(o.b)("li",{parentName:"ol"},"Custom parameter binding registered on the appropriate parameter using ",Object(o.b)("inlineCode",{parentName:"li"},"@bind.custom()")," decorator."),Object(o.b)("li",{parentName:"ol"},"Custom validator registered on the appropriate parameter or domain model property using ",Object(o.b)("inlineCode",{parentName:"li"},"@val.custom()")," decorator."),Object(o.b)("li",{parentName:"ol"},"Custom authorization registered on appropriate controller, methods, parameter or domain model properties on deep nested property using ",Object(o.b)("inlineCode",{parentName:"li"},"@authorize.custom()")," decorator."),Object(o.b)("li",{parentName:"ol"},"Controller/method middleware register on controller or method using ",Object(o.b)("inlineCode",{parentName:"li"},"@middleware.use()")," decorator. ")),Object(o.b)("p",null,"Note that the execution order of the child process of the middleware pipeline is important. The execution start from left to right so global middleware has more control than the other process. "),Object(o.b)("p",null,"The execution order also affect the ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.parameters")," value which will only available after Parameter Binding process, so global middleware will not be able to access them. "),Object(o.b)("h2",{id:"metaprogramming"},"Metaprogramming"),Object(o.b)("p",null,"One of Plumier key feature is it provide metadata information for metaprogramming. This metadata information accessible from all custom extensions.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const customMiddleware:CustomMiddlewareFunction = ({ metadata, proceed }) => {\n    if(metadata.controller.name === "AnimalController")\n        return proceed()\n    else \n        throw new HttpStatusError(404)\n}\n')),Object(o.b)("p",null,"Request metadata is specialized class contains metadata of current request such as controller, action and action parameter useful for metaprogramming. It contains some properties: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"actionParams")," current action parameters metadata, used to access parameter value, name etc."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"controller")," current controller object graph, contains information about controller name, decorators, methods, constructor etc. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"action")," current action object graph, contains information about action name, parameters, decorators etc."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"current")," metadata information where the appropriate decorator applied, can be Class metadata, Method metadata, Property metadata or Parameter metadata. For global middleware the ",Object(o.b)("inlineCode",{parentName:"li"},"current")," property will be ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"),".")),Object(o.b)("p",null,"This request metadata usually accessible from ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," property from ",Object(o.b)("inlineCode",{parentName:"p"},"Invocation")," class, ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatorContext")," class, and ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorizerContext")," class."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// ValidatorContext\nconst customValidation: CustomValidatorFunction = (val, { metadata }) => { \n    // process metadata\n}\n\n// AuthorizerContext\nconst customAuthorizer: CustomAuthorizerFunction = ({ metadata, ctx }) => {\n    // process metadata\n}\n")),Object(o.b)("h2",{id:"custom-middleware"},"Custom Middleware"),Object(o.b)("p",null,"There are two kind custom middlewares: Global middleware and Controller/method middleware. Technically both are the same but there are some distinction between them: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.route")," accessible in both, but in global middleware the value is optional (can be ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"),"), because global middleware kept executed even the request doesn't has appropriate controller."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ctx.parameters")," with cleansed value (converted/validated) only accessible from controller/method middleware"),Object(o.b)("li",{parentName:"ol"},"Controller/method middleware will never touched when there are validation error or authorization error occur."),Object(o.b)("li",{parentName:"ol"},"Global middleware derived from ",Object(o.b)("inlineCode",{parentName:"li"},"CustomMiddleware")," or ",Object(o.b)("inlineCode",{parentName:"li"},"CustomMiddlewareFunction"),". Controller/action middleware derived from ",Object(o.b)("inlineCode",{parentName:"li"},"CustomMiddleware<ActionContext>")," or ",Object(o.b)("inlineCode",{parentName:"li"},"CustomMiddlewareFunction<ActionContext>"),".")),Object(o.b)("h3",{id:"example-global-middleware"},"Example Global Middleware"),Object(o.b)("p",null,"Global middleware always executed on every request, this behavior can be used to create a virtual endpoint without having a controller that handle the request. For example we create the ",Object(o.b)("inlineCode",{parentName:"p"},"/hello-world")," endpoint and returned a JSON. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const sayHello:CustomMiddlewareFunction = async inv => {\n    if(inv.ctx.path.search(/^\\/hello-world/i) > -1)\n        return new ActionResult({ message: "Hello World" })\n    else \n        return inv.proceed()\n}\n')),Object(o.b)("p",null,"Register the middleware from the Plumier application like below"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"new Plumier()\n    .set(new WebApiFacility())\n    .use(sayHello)\n")),Object(o.b)("p",null,"Above code will handle the ",Object(o.b)("inlineCode",{parentName:"p"},"/hello-world")," then return an ",Object(o.b)("inlineCode",{parentName:"p"},"ActionResult")," immediately if the path match the criteria else the next invocation executed."),Object(o.b)("h3",{id:"example-controllermethod-middleware"},"Example Controller/Method Middleware"),Object(o.b)("p",null,"Controller/Method middleware has access to the ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.route")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.parameters"),". This property best used for programming. On this example will will create a logging middleware to print the controller name, method name, the parameters applied and the time used to complete the request. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const metaLog:CustomMiddlewareFunction<ActionContext> = async inv => {\n    const start = new Date()\n    const result = await inv.proceed()\n    const time = (new Date().getTime() - start.getTime())/1000\n    console.log("Controller:", ctx.route.controller.name)\n    console.log("Method:", ctx.route.action.name)\n    console.log("Parameters:", ctx.parameters)\n    console.log("Execution Time:", time)\n    return result;\n}\n')),Object(o.b)("p",null,"Register the middleware on top of Controller "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'@middleware.use(metaLog)\nclass AnimalsController {\n    @route.get(":id")\n    get(id:number) { }\n\n    @route.post("")\n    save(data:Animal){ }\n\n    @route.put(":id")\n    modify(id:number, data:Animal){ }\n}\n')),Object(o.b)("p",null,"Above code showing that the middleware applied on the controller, its mean it will log the controller name, method name etc when all the three endpoints (",Object(o.b)("inlineCode",{parentName:"p"},"GET /animals/:id")," ",Object(o.b)("inlineCode",{parentName:"p"},"POST /animals")," ",Object(o.b)("inlineCode",{parentName:"p"},"PUT /animals/:id"),") accessed. "),Object(o.b)("h2",{id:"custom-parameter-binding"},"Custom Parameter Binding"),Object(o.b)("p",null,"Custom parameter binding extends the parameter binding functionalities, signature of custom parameter binding is like below"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type CustomBinderFunction = (ctx:Context) => any | Promise\n")),Object(o.b)("p",null,"Custom parameter binder receive single parameter which of type Context and return the value that will be bound to the parameter. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const authHeader:CustomBinderFunction = ctx => ctx.request.header.Authorization \n\nclass AnimalsController {\n    @route.get(":id")\n    get(id:number, @bind.custom(authHeader) auth:string) { }\n}\n')),Object(o.b)("p",null,"Above code will bind the ",Object(o.b)("inlineCode",{parentName:"p"},"auth")," parameter with the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header."),Object(o.b)("h2",{id:"custom-validator"},"Custom Validator"),Object(o.b)("p",null,"Custom validator extends Plumier validator functionalities. For example we want to create adult age restriction validation, the implementation simply like below"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const isAdult:CustomValidatorFunction = val => {\n    if(parseInt(val) < 18)\n        return "Sorry you\'re not ready to view the content"\n}\n')),Object(o.b)("p",null,"Custom validator can be applied on controller's method parameter or on domain property. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'@domain()\nclass LoginUser {\n    constructor(\n        public userId:number,\n        public role:string,\n        @val.custom(isAdult)\n        public age:number\n    ){}\n}\nclass PictureController {\n    @route.get()\n    adult(@bind.user() user:LoginUser) {\n        return response.file(__dirname, "path/of/adult_image.jpg")\n    }\n}\n')),Object(o.b)("p",null,"Above code will restrict access to the ",Object(o.b)("inlineCode",{parentName:"p"},"GET /picture/adult")," endpoint by validating the ",Object(o.b)("inlineCode",{parentName:"p"},"age")," property of the current login user provided by the JWT token claim."),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/custom-validator"}),"custom validator documentation")," for more info."),Object(o.b)("h2",{id:"custom-authorization"},"Custom Authorization"),Object(o.b)("p",null,"Custom authorization extends Plumier authorization functionalities. This custom extension useful when you want to secure an endpoint based on specific data. "),Object(o.b)("p",null,"For example an online marketplace user free to create their own shop and assigned as the ",Object(o.b)("inlineCode",{parentName:"p"},"ShopAdmin")," by default, further more they can assign another user as ",Object(o.b)("inlineCode",{parentName:"p"},"Staff"),". "),Object(o.b)("p",null,"Above logic is impossible when implemented using default Plumier authorization because user role is dynamic based on data. Here are example of the Shop controller. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class ShopsController {\n    @route.post("")\n    save(data:Shop) { }\n\n    @route.get(":shopId")\n    get(shopId:number) { }\n\n    @route.put(":shopId")\n    modify(shopId:number, data:Shop) { }\n\n    @route.delete(":shopId")\n    delete(shopId:number) { }\n}\n')),Object(o.b)("p",null,"The expected endpoint access is like below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Authorize"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"POST    /shops")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authenticated"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All login user can create new shop")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GET     /shops/:shopId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Public"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All user login or non login can show")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"PUT     /shops/:shopId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ShopAdmin, Staff"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only Admin and Staff of the shop (shopId) can modify")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"DELETE  /shops/:shopId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ShopAdmin"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only Shop Admin can delete the shop")))),Object(o.b)("p",null,"Implementation of the custom authorizer is like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'function shopUser(...roles: ("ShopAdmin" | "Staff")[]) {\n    return authorize.custom({ ctx, user, metadata }) => {\n        //check if action/method handles the request has shopId parameter\n        //useful when this custom authorizer applied on wrong method\n        if (metadata.actionParams.hasName("shopId")) \n            throw new Error("Method handle the request doesn\'t have shopId parameter")\n        //get the value assigned for shopId parameter\n        const shopId = metadata.actionParams.get("shopId")\n        //get the current login userId\n        const userId = user.userId\n        //get the user role associated to the shop on the database\n        const shopUser = await ShopUserModel.findOne({ shopId, userId })\n        //check if the role match any of the authorized roles\n        return roles.some(x => x === shopUser?.role)\n    })\n}\n')),Object(o.b)("p",null,"Above code showing that we create a custom authorizer by directly returned the ",Object(o.b)("inlineCode",{parentName:"p"},"@authorize.custom()"),", its mean the ",Object(o.b)("inlineCode",{parentName:"p"},"shopUser")," function is a custom decorator that can be applied on controller or method. "),Object(o.b)("p",null,"Above authorizer reads the metadata information of current request to check wether the method has parameter named ",Object(o.b)("inlineCode",{parentName:"p"},"shopId")," and extract the shopId value from the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata.actionParams"),". By using this trick this decorator can be reuse in any method has parameter named ",Object(o.b)("inlineCode",{parentName:"p"},"shopId"),"."),Object(o.b)("p",null,"Custom authorizer above can be applied easily on the previous controller."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class ShopsController {\n    @route.post("")\n    save(data:Shop) { }\n\n    @authorize.public()\n    @route.get(":shopId")\n    get(shopId:number) { }\n\n    @shopUser("ShopAdmin", "Staff")\n    @route.put(":shopId")\n    modify(shopId:number, data:Shop) { }\n\n    @shopUser("ShopAdmin")\n    @route.delete(":shopId")\n    delete(shopId:number) { }\n}\n')),Object(o.b)("p",null,"Code above showing that we applied our custom authorizer above ",Object(o.b)("inlineCode",{parentName:"p"},"modify")," and ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," method. Note that both method has ",Object(o.b)("inlineCode",{parentName:"p"},"shopId")," parameter. "),Object(o.b)("p",null,"By applying authorizer above ",Object(o.b)("inlineCode",{parentName:"p"},"modify")," method (",Object(o.b)("inlineCode",{parentName:"p"},"PUT /shops/:shopId"),") only accessible by ",Object(o.b)("inlineCode",{parentName:"p"},"ShopAdmin")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Staff")," other users will not has access to the method. So does the ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," method only accessible by ",Object(o.b)("inlineCode",{parentName:"p"},"ShopAdmin"),". "))}d.isMDXComponent=!0}}]);