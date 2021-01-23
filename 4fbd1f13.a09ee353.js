(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(111)),o={id:"authorization",title:"Authorization"},l={unversionedId:"authorization",id:"authorization",isDocsHomePage:!1,title:"Authorization",description:"Enable Facility",source:"@site/docs/Authorization.md",slug:"/authorization",permalink:"/authorization",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Authorization.md",version:"current",sidebar:"overview",previous:{title:"Validation",permalink:"/validation"},next:{title:"Middleware",permalink:"/middleware"}},c=[{value:"Enable Facility",id:"enable-facility",children:[]},{value:"Setup",id:"setup",children:[]},{value:"All Routes are Secured",id:"all-routes-are-secured",children:[]},{value:"Public Route",id:"public-route",children:[]},{value:"Route Authorization",id:"route-authorization",children:[]},{value:"Controller Scoped Authorization",id:"controller-scoped-authorization",children:[]},{value:"Controller Scoped Authorization Selector",id:"controller-scoped-authorization-selector",children:[]},{value:"Controller Scoped Authorization Override",id:"controller-scoped-authorization-override",children:[]},{value:"Getting Login User Information",id:"getting-login-user-information",children:[]},{value:"Parameter Authorization",id:"parameter-authorization",children:[]},{value:"Response Authorization",id:"response-authorization",children:[{value:"Access Modifier",id:"access-modifier",children:[]}]},{value:"Filter Authorization",id:"filter-authorization",children:[]},{value:"Global Authorization",id:"global-authorization",children:[]},{value:"Policy Based Authorization",id:"policy-based-authorization",children:[]}],b={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"enable-facility"},"Enable Facility"),Object(i.b)("p",null,"Authorization can be enabled by using ",Object(i.b)("inlineCode",{parentName:"p"},"@plumier/jwt")," package and plugging ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," into Plumier application "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { JwtAuthFacility } from "@plumier/jwt"\n\nconst app = new Plumier()\napp.set(new JwtAuthFacility({ secret: "<your secret key>" }))\n// looking for environment variable PLUM_JWT_SECRET\napp.set(new JwtAuthFacility())\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If no ",Object(i.b)("inlineCode",{parentName:"p"},"secret")," provide ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," will check for environment variable named ",Object(i.b)("inlineCode",{parentName:"p"},"PLUM_JWT_SECRET"),", if both not provided an error will be thrown."))),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Plumier authorization uses standard token based authentication using json web token, internally it uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/koajs/jwt"}),"koa-jwt")," middleware. "),Object(i.b)("p",null,"To be able to authorize user, you need to specify ",Object(i.b)("inlineCode",{parentName:"p"},"role")," field when signing json web token on the login process. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'class AuthController{\n    //allow access to public\n    @authorize.public()\n    @route.post()\n    async login(data: Login) {\n        //check for username / password\n        //if OK then return signed token\n        return { \n            accessToken: jwt.sign({ \n                email: "<user email>", \n                //defined the role\n                role: "<user role>" \n            }, "<your secret key>"),\n        }\n    }\n}\n')),Object(i.b)("p",null,"Value of the role can be a string or an array of string that will be used by ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.route(<user role>)"),". "),Object(i.b)("h2",{id:"all-routes-are-secured"},"All Routes are Secured"),Object(i.b)("p",null,"By enabling ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," all routes are secured, means if end user access your API without token they will receive 403."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can provided global public authorization if you like it"))),Object(i.b)("h2",{id:"public-route"},"Public Route"),Object(i.b)("p",null,"To make specific route accessible by public, use ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.public()")," to allow access to all user including user without token."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'export class ProductsController {\n    @authorize.public()\n    @route.get(":id")\n    get(id: string) { }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public")))),Object(i.b)("h2",{id:"route-authorization"},"Route Authorization"),Object(i.b)("p",null,"Authorize access to specific route using ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.route(<list of role>)")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'export class ProductsController {\n    @authorize.public()\n    @route.get(":id")\n    get(id: string) { }\n\n    @authorize.route("admin")\n    @route.post("")\n    save(data: Product) {}\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"POST /products")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")))),Object(i.b)("h2",{id:"controller-scoped-authorization"},"Controller Scoped Authorization"),Object(i.b)("p",null,"Decorated action one by one will be cumbersome, you can apply ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize")," decorator on controller to apply authorization on all routes contained."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'@authorize.route("admin")\nexport class ProductsController {\n    @route.get(":id")\n    get(id: string) { }\n\n    @route.post("")\n    save(data: Product) { }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"POST /products")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")))),Object(i.b)("h2",{id:"controller-scoped-authorization-selector"},"Controller Scoped Authorization Selector"),Object(i.b)("p",null,"From controller scoped authorization you can specify which actions will be applied by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"action")," option like below "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'@authorize.route("admin", { selector: ["save", "replace"] })\nexport class ProductsController {\n    @route.get(":id")\n    get(id: string) { }\n\n    @route.post("")\n    save(data: Product) { }\n\n    @route.put(":id")\n    replace(id:string, data: Product) { }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authenticated")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"POST /products")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"PUT /products/:id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")))),Object(i.b)("h2",{id:"controller-scoped-authorization-override"},"Controller Scoped Authorization Override"),Object(i.b)("p",null,"If controller and action decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize")," decorator, the action authorization will replace the controller authorization"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'@authorize.route("admin")\nexport class ProductsController {\n    @authorize.route("admin", "user")\n    @route.get(":id")\n    get(id: string) { }\n\n    @route.post("")\n    save(data: Product) { }\n\n    @route.put(":id")\n    save(id:string, data: Partial<Product>) { }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GET /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin, user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"POST /products")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"PUT /products/<id>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"admin")))),Object(i.b)("h2",{id:"getting-login-user-information"},"Getting Login User Information"),Object(i.b)("p",null,"To get login user information from within action, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"@bind.user()")," parameter binding."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'export class ProductsController {\n    @route.get(":id")\n    get(id: string, @bind.user() user:LoginUser) { }\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"LoginUser")," class is a class that the properties match with claims when you signed the token."),Object(i.b)("h2",{id:"parameter-authorization"},"Parameter Authorization"),Object(i.b)("p",null,"Grant access to pass value to parameter to specific role. This feature useful when you want to restrict the API consumer to set some property of your domain without creating a new domain/method."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'@domain()\nexport class User {\n    constructor(\n        public name: string,\n        //only admin can send deceased\n        @authorize.write("admin")\n        public disabled: boolean | undefined\n    ) { }\n}\n\nexport class UsersController {\n    @route.post()\n    save(data: User) {   }\n    @route.put(":id")\n    save(@val.partial(User) data: Partial<User>) {   }\n}\n')),Object(i.b)("p",null,"Using above code, only admin can disabled the user, if user doesn't have admin role Plumier will return 401 with informative error result."),Object(i.b)("h2",{id:"response-authorization"},"Response Authorization"),Object(i.b)("p",null,"Applying authorize decorator on a domain property automatically authorize response returned based on client role like example below"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import reflect from "@plumier/reflect"\nimport { domain, authorize, route } from "plumier"\n\n@domain()\nexport class Item {\n    constructor(\n        public name: string,\n        // basePrice only can be set by admin and viewed by admin\n        @authorize.read("admin")\n        public basePrice: number,\n        public price:number\n    ) { }\n}\n\nexport class UsersController {\n    @route.get(":id")\n    @reflect.type(Item)\n    get(id:number): Item {   \n        // return single Item from db\n    }\n}\n')),Object(i.b)("p",null,"By using code above, the ",Object(i.b)("inlineCode",{parentName:"p"},"basePrice")," data will only visible if client has ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," role, other than that will return ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),". "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"@reflect.type()")," is required to describe the return type of the action."))),Object(i.b)("h3",{id:"access-modifier"},"Access Modifier"),Object(i.b)("p",null,"Its possible to control the access of the authorization to only get (read) or write (set) by specifying the proper decorator like below"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import reflect from "@plumier/reflect"\nimport { domain, authorize, route } from "plumier"\n\n@domain()\nexport class Item {\n    constructor(\n        public name: string,\n        @authorize.write("admin")\n        @authorize.read("admin", "staff")\n        public basePrice: number,\n        public price:number\n    ) { }\n}\n')),Object(i.b)("p",null,"Using above code ",Object(i.b)("inlineCode",{parentName:"p"},"basePrice")," will only can be set by ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," and retrieved by both ",Object(i.b)("inlineCode",{parentName:"p"},"staff")," and ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),". "),Object(i.b)("h2",{id:"filter-authorization"},"Filter Authorization"),Object(i.b)("p",null,"You can specify parameter or model property that filterable using specific role by using ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.filter()"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import reflect from "@plumier/reflect"\nimport { domain, authorize, route, entity } from "plumier"\n\n@domain()\nexport class Item {\n    constructor(\n        public name: string,\n        @authorize.filter("admin")\n        public basePrice: number,\n        public price:number\n    ) { }\n}\n\nexport class ItemsController {\n    @route.get()\n    list(@entity.filter() filter:Item){}\n}\n')),Object(i.b)("p",null,"By using above code ",Object(i.b)("inlineCode",{parentName:"p"},"/items/list?filter[basePrice]=100")," wil restricted only to ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),"."),Object(i.b)("h2",{id:"global-authorization"},"Global Authorization"),Object(i.b)("p",null,"As mentioned above, by default all routes is secured when ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," applied, you can override this default behavior by applying ",Object(i.b)("inlineCode",{parentName:"p"},"authorize")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," configuration like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'const app = new Plumier()\napp.set(new JwtAuthFacility({ secret: "<your secret key>", global: authorize.public() }))\n')),Object(i.b)("h2",{id:"policy-based-authorization"},"Policy Based Authorization"),Object(i.b)("p",null,"Role based authorization automatically authorize user based on their role, but in most case authorization may require more check on some data. Policy base authorization bring more freedom when authorizing route or properties, usually used to perform auth check by dynamic value such as checking from database. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'authPolicy()\n    .register("UserHasDog", async auth => {\n        const repo = new Repository(User)\n        const user = await repo.findOne(auth.user.userId)\n        return user.dogs.length > 0\n    })\n')),Object(i.b)("p",null,"Above code defined an authorization policy ",Object(i.b)("inlineCode",{parentName:"p"},"UserHasDog"),", it check to the database if the current login user has dogs on the ",Object(i.b)("inlineCode",{parentName:"p"},"user.dogs")," collection. This policy than can be used anywhere on the ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize")," decorator like the usual role authorization"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'class DogClubController {\n    @authorize.route("UserHasDog")\n    @route.post()\n    register(){ }\n}\n')),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Keep in mind that the name used for policy must not the same as the user role name."))),Object(i.b)("p",null,"The first parameter of the auth policy callback is the ",Object(i.b)("inlineCode",{parentName:"p"},"AuthorizationContext")," object, it contains some information required for authorization including the current request information. The signature of the object is like below"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"interface AuthorizationContext {\n    value?: any\n    parentValue?: any\n    role: string[]\n    user: { [key: string]: any } | undefined\n    ctx: ActionContext\n    metadata: Metadata\n    access: AccessModifier\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value")," is Current property value, only available on authorize read/write"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parentValue")," is Current property's parent value, only available on authorize read/write"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"role")," is List of user roles"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user")," is Current login user JWT claim"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ctx")," is Current request context"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata")," is Metadata information of the current request"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"access")," is Type of authorization applied read/write/route/filter")))}u.isMDXComponent=!0}}]);