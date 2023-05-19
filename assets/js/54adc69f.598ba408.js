(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[679],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),c=o,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9760:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7560),o=n(8283),a=(n(2784),n(876)),i={id:"routing",title:"Routing"},l={unversionedId:"routing",id:"routing",isDocsHomePage:!1,title:"Routing",description:"Plumier generate routes directly from controllers. By default it will looks into the ./controller directory. Except other directory or controller classes specified on the configuration.",source:"@site/docs/Routing.md",sourceDirName:".",slug:"/routing",permalink:"/routing",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Routing.md",version:"current",frontMatter:{id:"routing",title:"Routing"},sidebar:"overview",previous:{title:"File Upload",permalink:"/file-upload"},next:{title:"Validation",permalink:"/validation"}},p=[{value:"Name Convention",id:"name-convention",children:[]},{value:"Directory Convention",id:"directory-convention",children:[]},{value:"Http Verb Override",id:"http-verb-override",children:[]},{value:"Absolute Route Override",id:"absolute-route-override",children:[]},{value:"Relative Route Override",id:"relative-route-override",children:[]},{value:"Ignore Action Name",id:"ignore-action-name",children:[]},{value:"Route Parameter Mapping",id:"route-parameter-mapping",children:[]},{value:"Example Restful Api",id:"example-restful-api",children:[]},{value:"Root Route",id:"root-route",children:[]},{value:"Parameterized Root Route",id:"parameterized-root-route",children:[]},{value:"Root Route Parameter Mapping",id:"root-route-parameter-mapping",children:[]},{value:"Example Nested Restful API",id:"example-nested-restful-api",children:[]},{value:"Multiple Route Decorator",id:"multiple-route-decorator",children:[]},{value:"Multiple Root Route",id:"multiple-root-route",children:[]},{value:"Ignore Route Generation",id:"ignore-route-generation",children:[]},{value:"Ignore Controller Completely",id:"ignore-controller-completely",children:[]},{value:"Ignore Specific Method",id:"ignore-specific-method",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Plumier generate routes directly from controllers. By default it will looks into the ",(0,a.kt)("inlineCode",{parentName:"p"},"./controller")," directory. Except other directory or controller classes specified on the configuration."),(0,a.kt)("p",null,"The main idea of Plumier route generator is generate route based on: ",(0,a.kt)("inlineCode",{parentName:"p"},"<directories>/<controller name>/<method name>"),". Further more decorator(s) ",(0,a.kt)("inlineCode",{parentName:"p"},"@route")," can be used to customize the generation result"),(0,a.kt)("h3",{id:"name-convention"},"Name Convention"),(0,a.kt)("p",null,"If no ",(0,a.kt)("inlineCode",{parentName:"p"},"@route")," decorator provided, route will be generated by convention using controller name, method name and parameter names. By default route by convention will have GET http method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    list(offset:number, limit:number)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /animal/list?offset=<number>&limit=<number>\n")),(0,a.kt)("h3",{id:"directory-convention"},"Directory Convention"),(0,a.kt)("p",null,"Route generated based on controller directory hierarchy. For example if the controller hierarchy like below:"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Directory convention can be disabled by using ",(0,a.kt)("inlineCode",{parentName:"p"},"ControllerFacility")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"directoryAsPath")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ controller\n  - home-controller.ts\n  + api\n    + v1\n      - animal-controller.ts\n    + v2\n      - animal-controller.ts\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'//controller/home-controller.ts\nexport class HomeController {\n    @route.get("/")\n    index(){\n        return "My Cool Animal API"\n    }\n}\n\n//controller/api/v1/animal-controller.ts\nexport class AnimalController {\n    @route.get("")\n    get(){\n        return { name: "Mimi" }\n    }\n}\n\n//controller/api/v2/animal-controller.ts\nexport class AnimalController {\n    @route.get(":id")\n    get(id:string){\n        return { name: "Mimi" }\n    }\n\n    @route.get("")\n    all(){\n        return [{ name: "Mimi" }]\n    }\n}\n')),(0,a.kt)("p",null,"Route generated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /\nGET /api/v1/animal\nGET /api/v2/animal/:id\nGET /api/v2/animal\n")),(0,a.kt)("p",null,"Note that AnimalController will have their own root route based on their directory."),(0,a.kt)("h2",{id:"http-verb-override"},"Http Verb Override"),(0,a.kt)("p",null,"Http verb override will only override the http verb of the route, route will be constructed using controller name (omit controller word) and action name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    @route.put()\n    modify(id:number, model:AnimalDto)\n    @route.post()\n    save(model:AnimalDto){}\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /animal/save\nPUT  /animal/modify?id=<number>\n")),(0,a.kt)("h2",{id:"absolute-route-override"},"Absolute Route Override"),(0,a.kt)("p",null,"Absolute route override (route start with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),") will ignore all the controller and action name including the directory convention name, instead it will used provided route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get("/beast/:id")\n    get(id:number){}\n    @route.get("/beast/list")\n    list(last:number, limit:number)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /beast/:id\nGET /beast/list?last=<number>&limit=<number>\n")),(0,a.kt)("h2",{id:"relative-route-override"},"Relative Route Override"),(0,a.kt)("p",null,"Relative route override will only rename the name of the action and keep using controller name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id")\n    get(id:number){}\n    @route.get("list")\n    list(last:number, limit:number)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /animal/:id\nGET /animal/list?last=<number>&limit=<number>\n")),(0,a.kt)("h2",{id:"ignore-action-name"},"Ignore Action Name"),(0,a.kt)("p",null,"You can provided empty string on the route parameter to ignore action name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get("")\n    get(id:number){}\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /animal?id=<number>\n")),(0,a.kt)("h2",{id:"route-parameter-mapping"},"Route Parameter Mapping"),(0,a.kt)("p",null,"Its possible to use different parameter name on route and the action parameter name like below "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id", { name: "id" })\n    get(name:number){}\n}\n')),(0,a.kt)("p",null,"Above code means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," route parameter will be bound to the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," action parameter. Using this configuration will get rid the route analysis error."),(0,a.kt)("h2",{id:"example-restful-api"},"Example Restful Api"),(0,a.kt)("p",null,"Sum up of above rules you can construct clean Restful API routes like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.get(":id")\n    get(id:number){}\n    @route.get("")\n    getAll(){}\n    @route.post("")\n    save(animal:any)\n    @route.put(":id")\n    modify(id:number, animal:any)\n    @route.delete(":id")\n    delete(id:number){}\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET    /animal/:id\nGET    /animal\nPOST   /animal\nPUT    /animal/:id\nDELETE /animal/:id\n")),(0,a.kt)("h2",{id:"root-route"},"Root Route"),(0,a.kt)("p",null,"Root route only override the controller name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast")\nexport class AnimalController {\n    get(id:number){}\n    list(last:number, limit:number)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /beast/get?id=<number>\nGET /beast/list?last=<number>&limit=<number>\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Relative/Absolute rule also applied into the Root route. When placed inside directory convention, an absolute Root route will skipped the directory name convention.",(0,a.kt)("br",{parentName:"p"}),"\n","And logically Relative/Absolute rule, doesn't affected Root route name."))),(0,a.kt)("h2",{id:"parameterized-root-route"},"Parameterized Root Route"),(0,a.kt)("p",null,"Root route can be parameterized and provided backing parameter on all of the action, except absolute route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast/:beastId")\nexport class AnimalController {\n    get(beastId:number, id:number){}\n    //absolute route doesn\'t need to provided backing parameter for beastId\n    @route.get("/list")\n    list(last:number, limit:number)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /beast/<beastId>/get?id=<number>\nGET /list?last=<number>&limit=<number>\n")),(0,a.kt)("h2",{id:"root-route-parameter-mapping"},"Root Route Parameter Mapping"),(0,a.kt)("p",null,"Same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"@route")," decorator, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@route.root")," also provide parameter mapping which work the same "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/beast/:beastId", { name: "beastId" })\nexport class AnimalController {\n    get(name:number, id:number){}\n}\n')),(0,a.kt)("h2",{id:"example-nested-restful-api"},"Example Nested Restful API"),(0,a.kt)("p",null,"By using rules above you can configure nested restful api like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.root("category/:type/animal")\nexport class AnimalController {\n    @route.get(":id")\n    get(type:string, id:number){}\n    @route.get("")\n    getAll(type:string){}\n    @route.post("")\n    save(type:string, animal:any)\n    @route.put(":id")\n    modify(type:string, id:number, animal:any)\n    @route.delete(":id")\n    delete(type:string, id:number){}\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET    category/:type/animal/:id\nGET    category/:type/animal\nPOST   category/:type/animal\nPUT    category/:type/animal/:id\nDELETE category/:type/animal/:id\n")),(0,a.kt)("h2",{id:"multiple-route-decorator"},"Multiple Route Decorator"),(0,a.kt)("p",null,"Multiple routes can be applied to an action, this functionalities needed for example when hosting an SPA with url rewrite"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A more convenient way to serve SPA url rewrite is using ",(0,a.kt)("inlineCode",{parentName:"p"},"@route.historyApiFallback()")," see ",(0,a.kt)("a",{parentName:"p",href:"/serve-static#history-api-fallback"},"here")," for more info"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class HomeController {\n    @route.get("/")\n    @route.get("/home")\n    @route.get("/about-us")\n    @route.get("/cart")\n    index(id:number){\n        return response.file("<file path>")\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /\nGET /home\nGET /about-us\nGET /cart\n")),(0,a.kt)("h2",{id:"multiple-root-route"},"Multiple Root Route"),(0,a.kt)("p",null,"Multiple root routes can also be applied into a controller and resulting create multiple routes for each methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.root("/home")\n@route.root("/dashboard")\nexport class HomeController {\n    index(id:number){\n        return response.file("<file path>")\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /home/index\nGET /dashboard/index\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Absolute route when combined with multiple root route will cause conflict, consider to avoid them."))),(0,a.kt)("h2",{id:"ignore-route-generation"},"Ignore Route Generation"),(0,a.kt)("p",null,"By default Route Generation System will generate all methods inside controller into route. In some case you need to create an helper method inside controller but you don't want the method generated into route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class HomeController {\n    @route.ignore()\n    helper(){\n        \n    }\n\n    @route.get()\n    index(){\n        helper()\n        return "My Cool Animal API"\n    }\n}\n')),(0,a.kt)("p",null,"Above code showing that ",(0,a.kt)("inlineCode",{parentName:"p"},"helper")," method will not be generated because it is marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"@route.ignore()")," "),(0,a.kt)("h2",{id:"ignore-controller-completely"},"Ignore Controller Completely"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@route.ignore()")," can be applied on controller and make all routes inside controller ignored completely. This feature important on CRUD Route generation, where controller automatically generated and you don't have control to the controller.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'@route.ignore()\nexport class HomeController {\n    @route.get()\n    index(){\n        return "My Cool Animal API"\n    }\n}\n')),(0,a.kt)("p",null,"Above code will cause all routes inside ",(0,a.kt)("inlineCode",{parentName:"p"},"HomeController")," ignored completely. "),(0,a.kt)("h2",{id:"ignore-specific-method"},"Ignore Specific Method"),(0,a.kt)("p",null,"If you have a controller with inheritance, you can ignore super class routes by specifying method name like below "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class ControllerBase {\n    @route.get()\n    get(){ }\n    @route.post()\n    save(){ }\n    @route.put()\n    replace(){ }\n}\n\n@route.ignore({ applyTo: ["save", "replace"]})\nexport class UsersController extends ControllerBase{}\n')),(0,a.kt)("p",null,"Above code showing that we ignore the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," method which cause only ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /users/get")," will be generated."))}m.isMDXComponent=!0}}]);