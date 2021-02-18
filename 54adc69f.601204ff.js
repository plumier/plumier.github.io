(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(s,l(l({ref:t},p),{},{components:n})):o.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(113));const a={id:"routing",title:"Routing"},i={unversionedId:"routing",id:"routing",isDocsHomePage:!1,title:"Routing",description:"Plumier generate routes directly from controllers. By default it will looks into the ./controller directory. Except other directory or controller classes specified on the configuration.",source:"@site/docs/Routing.md",slug:"/routing",permalink:"/routing",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Routing.md",version:"current",sidebar:"overview",previous:{title:"File Upload",permalink:"/file-upload"},next:{title:"Validation",permalink:"/validation"}},l=[{value:"Name Convention",id:"name-convention",children:[]},{value:"Directory Convention",id:"directory-convention",children:[]},{value:"Http Verb Override",id:"http-verb-override",children:[]},{value:"Absolute Route Override",id:"absolute-route-override",children:[]},{value:"Relative Route Override",id:"relative-route-override",children:[]},{value:"Ignore Action Name",id:"ignore-action-name",children:[]},{value:"Route Parameter Mapping",id:"route-parameter-mapping",children:[]},{value:"Example Restful Api",id:"example-restful-api",children:[]},{value:"Root Route",id:"root-route",children:[]},{value:"Parameterized Root Route",id:"parameterized-root-route",children:[]},{value:"Root Route Parameter Mapping",id:"root-route-parameter-mapping",children:[]},{value:"Example Nested Restful API",id:"example-nested-restful-api",children:[]},{value:"Multiple Route Decorator",id:"multiple-route-decorator",children:[]},{value:"Multiple Root Route",id:"multiple-root-route",children:[]},{value:"Ignore Route Generation",id:"ignore-route-generation",children:[]},{value:"Ignore Controller Completely",id:"ignore-controller-completely",children:[]},{value:"Ignore Specific Method",id:"ignore-specific-method",children:[]}],c={toc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Plumier generate routes directly from controllers. By default it will looks into the ",Object(o.b)("inlineCode",{parentName:"p"},"./controller")," directory. Except other directory or controller classes specified on the configuration."),Object(o.b)("p",null,"The main idea of Plumier route generator is generate route based on: ",Object(o.b)("inlineCode",{parentName:"p"},"<directories>/<controller name>/<method name>"),". Further more decorator(s) ",Object(o.b)("inlineCode",{parentName:"p"},"@route")," can be used to customize the generation result"),Object(o.b)("h3",{id:"name-convention"},"Name Convention"),Object(o.b)("p",null,"If no ",Object(o.b)("inlineCode",{parentName:"p"},"@route")," decorator provided, route will be generated by convention using controller name, method name and parameter names. By default route by convention will have GET http method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    list(offset:number, limit:number)\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /animal/list?offset=<number>&limit=<number>\n")),Object(o.b)("h3",{id:"directory-convention"},"Directory Convention"),Object(o.b)("p",null,"Route generated based on controller directory hierarchy. For example if the controller hierarchy like below:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Directory convention can be disabled by using ",Object(o.b)("inlineCode",{parentName:"p"},"ControllerFacility")," and set ",Object(o.b)("inlineCode",{parentName:"p"},"directoryAsPath")," to ",Object(o.b)("inlineCode",{parentName:"p"},"false")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+ controller\n  - home-controller.ts\n  + api\n    + v1\n      - animal-controller.ts\n    + v2\n      - animal-controller.ts\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'//controller/home-controller.ts\nexport class HomeController {\n    @route.get("/")\n    index(){\n        return "My Cool Animal API"\n    }\n}\n\n//controller/api/v1/animal-controller.ts\nexport class AnimalController {\n    @route.get("")\n    get(){\n        return { name: "Mimi" }\n    }\n}\n\n//controller/api/v2/animal-controller.ts\nexport class AnimalController {\n    @route.get(":id")\n    get(id:string){\n        return { name: "Mimi" }\n    }\n\n    @route.get("")\n    all(){\n        return [{ name: "Mimi" }]\n    }\n}\n')),Object(o.b)("p",null,"Route generated:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /\nGET /api/v1/animal\nGET /api/v2/animal/:id\nGET /api/v2/animal\n")),Object(o.b)("p",null,"Note that AnimalController will have their own root route based on their directory."),Object(o.b)("h2",{id:"http-verb-override"},"Http Verb Override"),Object(o.b)("p",null,"Http verb override will only override the http verb of the route, route will be constructed using controller name (omit controller word) and action name"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    @route.put()\n    modify(id:number, model:AnimalDto)\n    @route.post()\n    save(model:AnimalDto){}\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"POST /animal/save\nPUT  /animal/modify?id=<number>\n")),Object(o.b)("h2",{id:"absolute-route-override"},"Absolute Route Override"),Object(o.b)("p",null,"Absolute route override (route start with ",Object(o.b)("inlineCode",{parentName:"p"},"/"),") will ignore all the controller and action name including the directory convention name, instead it will used provided route."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get("/beast/:id")\n    get(id:number){}\n    @route.get("/beast/list")\n    list(last:number, limit:number)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /beast/:id\nGET /beast/list?last=<number>&limit=<number>\n")),Object(o.b)("h2",{id:"relative-route-override"},"Relative Route Override"),Object(o.b)("p",null,"Relative route override will only rename the name of the action and keep using controller name."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id")\n    get(id:number){}\n    @route.get("list")\n    list(last:number, limit:number)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /animal/:id\nGET /animal/list?last=<number>&limit=<number>\n")),Object(o.b)("h2",{id:"ignore-action-name"},"Ignore Action Name"),Object(o.b)("p",null,"You can provided empty string on the route parameter to ignore action name"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get("")\n    get(id:number){}\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /animal?id=<number>\n")),Object(o.b)("h2",{id:"route-parameter-mapping"},"Route Parameter Mapping"),Object(o.b)("p",null,"Its possible to use different parameter name on route and the action parameter name like below "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id", { name: "id" })\n    get(name:number){}\n}\n')),Object(o.b)("p",null,"Above code means that the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," route parameter will be bound to the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," action parameter. Using this configuration will get rid the route analysis error."),Object(o.b)("h2",{id:"example-restful-api"},"Example Restful Api"),Object(o.b)("p",null,"Sum up of above rules you can construct clean Restful API routes like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id")\n    get(id:number){}\n    @route.get("")\n    getAll(){}\n    @route.post("")\n    save(animal:any)\n    @route.put(":id")\n    modify(id:number, animal:any)\n    @route.delete(":id")\n    delete(id:number){}\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET    /animal/:id\nGET    /animal\nPOST   /animal\nPUT    /animal/:id\nDELETE /animal/:id\n")),Object(o.b)("h2",{id:"root-route"},"Root Route"),Object(o.b)("p",null,"Root route only override the controller name"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast")\nexport class AnimalController {\n    get(id:number){}\n    list(last:number, limit:number)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /beast/get?id=<number>\nGET /beast/list?last=<number>&limit=<number>\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Relative/Absolute rule also applied into the Root route. When placed inside directory convention, an absolute Root route will skipped the directory name convention.",Object(o.b)("br",{parentName:"p"}),"\n","And logically Relative/Absolute rule, doesn't affected Root route name."))),Object(o.b)("h2",{id:"parameterized-root-route"},"Parameterized Root Route"),Object(o.b)("p",null,"Root route can be parameterized and provided backing parameter on all of the action, except absolute route"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast/:beastId")\nexport class AnimalController {\n    get(beastId:number, id:number){}\n    //absolute route doesn\'t need to provided backing parameter for beastId\n    @route.get("/list")\n    list(last:number, limit:number)\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /beast/<beastId>/get?id=<number>\nGET /list?last=<number>&limit=<number>\n")),Object(o.b)("h2",{id:"root-route-parameter-mapping"},"Root Route Parameter Mapping"),Object(o.b)("p",null,"Same as the ",Object(o.b)("inlineCode",{parentName:"p"},"@route")," decorator, the ",Object(o.b)("inlineCode",{parentName:"p"},"@route.root")," also provide parameter mapping which work the same "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast/:beastId", { name: "beastId" })\nexport class AnimalController {\n    get(name:number, id:number){}\n}\n')),Object(o.b)("h2",{id:"example-nested-restful-api"},"Example Nested Restful API"),Object(o.b)("p",null,"By using rules above you can configure nested restful api like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.root("category/:type/animal")\nexport class AnimalController {\n    @route.get(":id")\n    get(type:string, id:number){}\n    @route.get("")\n    getAll(type:string){}\n    @route.post("")\n    save(type:string, animal:any)\n    @route.put(":id")\n    modify(type:string, id:number, animal:any)\n    @route.delete(":id")\n    delete(type:string, id:number){}\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET    category/:type/animal/:id\nGET    category/:type/animal\nPOST   category/:type/animal\nPUT    category/:type/animal/:id\nDELETE category/:type/animal/:id\n")),Object(o.b)("h2",{id:"multiple-route-decorator"},"Multiple Route Decorator"),Object(o.b)("p",null,"Multiple routes can be applied to an action, this functionalities needed for example when hosting an SPA with url rewrite"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A more convenient way to serve SPA url rewrite is using ",Object(o.b)("inlineCode",{parentName:"p"},"@route.historyApiFallback()")," see ",Object(o.b)("a",{parentName:"p",href:"/serve-static#history-api-fallback"},"here")," for more info"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class HomeController {\n    @route.get("/")\n    @route.get("/home")\n    @route.get("/about-us")\n    @route.get("/cart")\n    index(id:number){\n        return response.file("<file path>")\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /\nGET /home\nGET /about-us\nGET /cart\n")),Object(o.b)("h2",{id:"multiple-root-route"},"Multiple Root Route"),Object(o.b)("p",null,"Multiple root routes can also be applied into a controller and resulting create multiple routes for each methods."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/home")\n@route.root("/dashboard")\nexport class HomeController {\n    index(id:number){\n        return response.file("<file path>")\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /home/index\nGET /dashboard/index\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Absolute route when combined with multiple root route will cause conflict, consider to avoid them."))),Object(o.b)("h2",{id:"ignore-route-generation"},"Ignore Route Generation"),Object(o.b)("p",null,"By default Route Generation System will generate all methods inside controller into route. In some case you need to create an helper method inside controller but you don't want the method generated into route."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class HomeController {\n    @route.ignore()\n    helper(){\n        \n    }\n\n    @route.get()\n    index(){\n        helper()\n        return "My Cool Animal API"\n    }\n}\n')),Object(o.b)("p",null,"Above code showing that ",Object(o.b)("inlineCode",{parentName:"p"},"helper")," method will not be generated because it is marked with ",Object(o.b)("inlineCode",{parentName:"p"},"@route.ignore()")," "),Object(o.b)("h2",{id:"ignore-controller-completely"},"Ignore Controller Completely"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@route.ignore()")," can be applied on controller and make all routes inside controller ignored completely. This feature important on CRUD Route generation, where controller automatically generated and you don't have control to the controller.  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@route.ignore()\nexport class HomeController {\n    @route.get()\n    index(){\n        return "My Cool Animal API"\n    }\n}\n')),Object(o.b)("p",null,"Above code will cause all routes inside ",Object(o.b)("inlineCode",{parentName:"p"},"HomeController")," ignored completely. "),Object(o.b)("h2",{id:"ignore-specific-method"},"Ignore Specific Method"),Object(o.b)("p",null,"If you have a controller with inheritance, you can ignore super class routes by specifying method name like below "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class ControllerBase {\n    @route.get()\n    get(){ }\n    @route.post()\n    save(){ }\n    @route.put()\n    replace(){ }\n}\n\n@route.ignore({ applyTo: ["save", "replace"]})\nexport class UsersController extends ControllerBase{}\n')),Object(o.b)("p",null,"Above code showing that we ignore the ",Object(o.b)("inlineCode",{parentName:"p"},"save")," and ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," method which cause only ",Object(o.b)("inlineCode",{parentName:"p"},"GET /users/get")," will be generated."))}p.isMDXComponent=!0}}]);