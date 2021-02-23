(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(113)),o={id:"security",title:"Security"},l={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"Plumier has several security feature to be able to protect your API using JWT. Most part of the request and response can be secure and authorize to restrict access to some user or role.",source:"@site/docs/Security.md",slug:"/security",permalink:"/security",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Security.md",version:"current",sidebar:"overview",previous:{title:"Controller",permalink:"/controller"},next:{title:"Generic Controller",permalink:"/generic-controller"}},c=[{value:"Enable Functionality",id:"enable-functionality",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Accessing Current Login User",id:"accessing-current-login-user",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Authorization Policy File Registration",id:"authorization-policy-file-registration",children:[]},{value:"Applying Authorization Policy",id:"applying-authorization-policy",children:[{value:"Authorizing Route",id:"authorizing-route",children:[]},{value:"Global Route Authorization",id:"global-route-authorization",children:[]},{value:"Query String Authorization",id:"query-string-authorization",children:[]},{value:"Request Body Authorization",id:"request-body-authorization",children:[]},{value:"Response Authorization",id:"response-authorization",children:[]}]},{value:"Authorization Evaluation Order",id:"authorization-evaluation-order",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier has several security feature to be able to protect your API using JWT. Most part of the request and response can be secure and authorize to restrict access to some user or role."),Object(a.b)("h2",{id:"enable-functionality"},"Enable Functionality"),Object(a.b)("p",null,"Plumier security can be enabled by using ",Object(a.b)("inlineCode",{parentName:"p"},"@plumier/jwt")," package and set ",Object(a.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," into Plumier application "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { JwtAuthFacility } from "@plumier/jwt"\n\nconst app = new Plumier()\napp.set(new JwtAuthFacility({ secret: "<your secret key>" }))\n')),Object(a.b)("p",null,"Above will enable Plumier security feature, ",Object(a.b)("inlineCode",{parentName:"p"},"secret")," is your JWT secret key used to sign the JWT during login process. If no ",Object(a.b)("inlineCode",{parentName:"p"},"secret")," provide ",Object(a.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," will check for environment variable named ",Object(a.b)("inlineCode",{parentName:"p"},"PLUM_JWT_SECRET"),", if both not provided an error will be thrown."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"By default after ",Object(a.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," applied, all route is private (Authenticated), it means non authenticated user will not able to access API except specifically defined ",Object(a.b)("inlineCode",{parentName:"p"},"Public")))),Object(a.b)("h2",{id:"authentication"},"Authentication"),Object(a.b)("p",null,"Plumier supported authentication using bearer token and cookie, both using JWT token. Authentication begin by signing a JWT token during login process like below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { route } from "plumier"\nimport { sign } from "jsonwebtoken"\n\nexport class AuthController {\n    @route.post()\n    async login(email:string, password:string) {\n\n        // other process\n\n        const user = await repo.findByEmail(email)\n        const token = sign({ userId: user.id, role: user.role }, \n          process.env.PLUM_JWT_SECRET)\n        return { token }\n    }\n}\n')),Object(a.b)("p",null,"Above is example of login controller returned a JWT token contains JWT claims ",Object(a.b)("inlineCode",{parentName:"p"},"userId")," and ",Object(a.b)("inlineCode",{parentName:"p"},"role"),". Its also possible to set cookie for authentication by returning cookie like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { route, response } from "plumier"\nimport { sign } from "jsonwebtoken"\n\nexport class AuthController {\n    @route.post()\n    async login(email:string, password:string) {\n\n        // other process\n\n        const user = await repo.findByEmail(email)\n        const token = sign({ userId: user.id, role: user.role }, \n          process.env.PLUM_JWT_SECRET)\n        return response.json({})\n            .setCookie("Authorization", token, { sameSite: "lax" })\n    }\n}\n')),Object(a.b)("p",null,"Above will set cookie to the API client with default ",Object(a.b)("inlineCode",{parentName:"p"},"HttpOnly")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite:Lax")," to prevent XSS and CSRF attack. The default cookie name used for authentication is ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization"),", this behavior can be changed on ",Object(a.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," by providing ",Object(a.b)("inlineCode",{parentName:"p"},"cookie")," option like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'app.set(new JwtAuthFacility({ cookie: "Oreo" }))\n')),Object(a.b)("p",null,"By defining a custom cookie name you should set the cookie appropriately ",Object(a.b)("inlineCode",{parentName:"p"},'.setCookie("Oreo", token)'),"."),Object(a.b)("h2",{id:"accessing-current-login-user"},"Accessing Current Login User"),Object(a.b)("p",null,"After user authenticated either by using bearer token on ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," header or using cookie, the current login user (the JWT claim) can be accessed from the request context ",Object(a.b)("inlineCode",{parentName:"p"},"ctx.state.user")," anywhere on the system."),Object(a.b)("p",null,"To access current login user from the controller you can use ",Object(a.b)("inlineCode",{parentName:"p"},"@bind.user()")," like below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export class UsersController {\n\n    // GET /users/me\n    @route.get()\n    me(@bind.user() user:LoginUser) {\n        return repo.findById(user.userId)\n    }\n}\n")),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"LoginUser")," can be an interface or a class that the structure match with JWT claims. "),Object(a.b)("p",null,"When accessing current login user from other framework components other than controller which parameter binding doesn't exists, you can access it from the request context like below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const get:CustomMiddleware = ({ctx, proceed}) => {\n    ctx.state.user // this way you can access user\n    return proceed()\n}\n")),Object(a.b)("p",null,"Above is example how you can access current login user from custom middleware, mostly all framework component has accessible ",Object(a.b)("inlineCode",{parentName:"p"},"ctx")," property."),Object(a.b)("h2",{id:"authorization"},"Authorization"),Object(a.b)("p",null,"When user authenticated you can restrict access to some API based on user role or based on more complex condition. Plumier provide an authorization policy to define the authorization logic than it can be applied to secure access to the route, to secure setting to request part such as query or request body property, or to remove unauthorized response properties."),Object(a.b)("p",null,"To create an authorization policy start by using ",Object(a.b)("inlineCode",{parentName:"p"},"AuthorizationPolicyBuilder")," or by using its shorthand ",Object(a.b)("inlineCode",{parentName:"p"},"authPolicy()"),". For example we will create an authorization policy for several roles ",Object(a.b)("inlineCode",{parentName:"p"},"User"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Admin"),", ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin")," by checking if the current login user claim ",Object(a.b)("inlineCode",{parentName:"p"},"role")," property has the appropriate value. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { authPolicy } from "plumier";\n\nauthPolicy()\n    .register("User", ({ ctx }) => ctx.state.user?.role === "User")\n    .register("Admin", ({ ctx }) => ctx.state.user?.role === "Admin")\n    .register("SuperAdmin", ({ ctx }) => ctx.state.user?.role === "SuperAdmin")\n')),Object(a.b)("p",null,"Above example created several authorization policies named ",Object(a.b)("inlineCode",{parentName:"p"},"User"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Admin"),", ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin")," by checking the ",Object(a.b)("inlineCode",{parentName:"p"},"role")," claim. Authorization policy allowed to returned ",Object(a.b)("inlineCode",{parentName:"p"},"boolean")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<boolean>")," for asynchronous authorization logic."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Plumier has two predefined auth policy that is ready to use"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Public"),":  Used to make resource accessible by public, this authorization callback is always return true."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Authenticated"),": Default auth policy, used to secure routes only for login user (role omitted).")))),Object(a.b)("h2",{id:"authorization-policy-file-registration"},"Authorization Policy File Registration"),Object(a.b)("p",null,"Authorization policy registration can be put anywhere with file name ends with ",Object(a.b)("inlineCode",{parentName:"p"},"policy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"controller")," or ",Object(a.b)("inlineCode",{parentName:"p"},"entity"),", for example ",Object(a.b)("inlineCode",{parentName:"p"},"user-policy.ts"),", ",Object(a.b)("inlineCode",{parentName:"p"},"user_policy.ts"),", ",Object(a.b)("inlineCode",{parentName:"p"},"user-controller.ts")," etc. "),Object(a.b)("p",null,"This behavior can be change using configuration below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'app.set(new JwtAuthFacility({ authPolicies: "./path/of/policies.*(ts|js)" }))\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"authPolicies")," configuration receive file path, directory or file glob to specify the location of the auth policy. "),Object(a.b)("h2",{id:"applying-authorization-policy"},"Applying Authorization Policy"),Object(a.b)("p",null,"After authorization policy created and configured properly you can apply it to secure your API. There are several decorator can be used to apply the auth policy."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Decorator"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@authorize.route(AUTH_POLICY)")),Object(a.b)("td",{parentName:"tr",align:null},"Protect route can be accessed by specific auth policy")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@authorize.write(AUTH_POLICY)")),Object(a.b)("td",{parentName:"tr",align:null},"Protect property only can be write by specific auth policy")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@authorize.read(AUTH_POLICY)")),Object(a.b)("td",{parentName:"tr",align:null},"Protect property only can be read by specific auth policy")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@authorize.readonly()")),Object(a.b)("td",{parentName:"tr",align:null},"Protect property only can be read and no other role can write it")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@authorize.writeonly()")),Object(a.b)("td",{parentName:"tr",align:null},"Protect property only can be write and no other role can read it")))),Object(a.b)("h3",{id:"authorizing-route"},"Authorizing Route"),Object(a.b)("p",null,"For example below is how to secure a route by applying the decorator on the controller action."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{4}","{4}":!0},'class AnimalsController {\n\n    // apply auth policy to specific action\n    @authorize.route("Admin", "SuperAdmin")\n    @route.get("")\n    list() { }\n}\n')),Object(a.b)("p",null,"With above configuration the ",Object(a.b)("inlineCode",{parentName:"p"},"GET /animals")," route only accessible by ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin"),", other than those role will receive 401. "),Object(a.b)("p",null,"Authorization can be applied on the controller to authorize all actions contained in the controller like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{2}","{2}":!0},'// apply auth policy to all actions\n@authorize.route("Admin", "SuperAdmin")\nclass AnimalsController {\n\n    @route.get("")\n    list() { }\n\n    @route.post("")\n    save(data:Animal){ }\n}\n')),Object(a.b)("p",null,"With above configuration both ",Object(a.b)("inlineCode",{parentName:"p"},"GET /animals")," and ",Object(a.b)("inlineCode",{parentName:"p"},"POST /animals")," will only accessible by ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin"),"."),Object(a.b)("h3",{id:"global-route-authorization"},"Global Route Authorization"),Object(a.b)("p",null,"Authorization can be applied globally to apply default authorization to all routes, to do that you apply the auth policy from the ",Object(a.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'// apply auth policy globally to all routes\napp.set(new JwtAuthFacility({ global: ["Admin", "SuperAdmin"] }))\n')),Object(a.b)("p",null,"With above configuration all routes (except explicitly has auth policy defined) will only be accessible by ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin")),Object(a.b)("h3",{id:"query-string-authorization"},"Query String Authorization"),Object(a.b)("p",null,"Authorization can be applied on parameter to protect some request part bound to the parameter accessible by specific user. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'class UsersController {\n\n    // apply auth policy to email query string\n    @route.get("")\n    list(@authorize.write("Admin", "SuperAdmin") email:string = "") { }\n}\n')),Object(a.b)("p",null,"Using above configuration some users may access the ",Object(a.b)("inlineCode",{parentName:"p"},"GET /users")," but only ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin")," can provide query string ",Object(a.b)("inlineCode",{parentName:"p"},"email")," other than that will returned 401."),Object(a.b)("h3",{id:"request-body-authorization"},"Request Body Authorization"),Object(a.b)("p",null,"Authorization can be applied on request body specifically on the property to restrict access to some property of the request body, you do that by adding decorator on the model properties like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{8}","{8}":!0},'// request model\n@domain()\nclass User {\n    constructor(\n        public email:string,\n        public password: string,\n        // apply auth policy to specific request body property\n        @authorize.write("Admin", "SuperAdmin")\n        public role: "User" | "Admin"\n    ){}\n}\n\nclass UsersController {\n\n    @authorize.route("Public")\n    @route.get("")\n    save(data:User) { }\n}\n')),Object(a.b)("p",null,"Using above configuration, only ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin")," can set the ",Object(a.b)("inlineCode",{parentName:"p"},"role")," property of request body. "),Object(a.b)("h3",{id:"response-authorization"},"Response Authorization"),Object(a.b)("p",null,"Authorization can be applied on response body, unlike most authorization process, response authorization doesn't response 401, instead its filter property value based on auth policy. You do this by applying decorator on the response model. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{7,10,18}","{7,10,18}":!0},'import { type } from "@plumier/reflect"\n\n// request model\n@domain()\nclass User {\n    constructor(\n        @authorize.read("Admin", "SuperAdmin")\n        public email:string,\n        public name:string,\n        @authorize.read("Admin", "SuperAdmin")\n        public role: "User" | "Admin"\n    ){}\n}\n\nclass UsersController {\n\n    @route.get(":id")\n    @type(x => User)\n    get(id:string):User { \n        return repo.findByID(id)\n    }\n}\n')),Object(a.b)("p",null,"Using above configuration ",Object(a.b)("inlineCode",{parentName:"p"},"email")," and ",Object(a.b)("inlineCode",{parentName:"p"},"role")," property will be visible only to ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SuperAdmin"),". The response vary based on user role."),Object(a.b)("h2",{id:"authorization-evaluation-order"},"Authorization Evaluation Order"),Object(a.b)("p",null,"Authorization applied to global, controller or action evaluated with some priority. Authorization system separated into three category, which is Route Authorization, Parameter Authorization, Response Authorization. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Route authorization (global, controller, action) has the most priority evaluation, when a user doesn't have access it means he doesn't have access to the Parameter or Response."),Object(a.b)("li",{parentName:"ul"},"Parameter and Response Authorization will be evaluated later after Route authorization. ")),Object(a.b)("p",null,"Route authorization separated into three location, which is Global Authorization, Controller Authorization and Action Authorization. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Action authorization has the most priority evaluated. If user allowed to access action then Controller Authorization and Global Authorization ignore."),Object(a.b)("li",{parentName:"ul"},"Controller authorizations are second evaluated after Action Authorization, its means if an Action Authorization applied then it will be ignored."),Object(a.b)("li",{parentName:"ul"},"Global Authorization evaluated last.")),Object(a.b)("p",null,"For example if we have authorization configuration like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{2}","{2}":!0},'// global authorization\napp.set(new JwtAuthFacility({ global: "Public" }))\n\n// controller authorization\n@authorize.route("Admin", "SuperAdmin")\nclass UsersController {\n\n    @route.post("")\n    save(data:Animal) { }\n\n    @authorize.route("Public")\n    @route.get("")\n    list(@authorize.write("SuperAdmin") email:string) { }\n}\n\n// other controller \nclass DashboardController {\n\n    @route.get("")\n    index(){ }\n}\n')),Object(a.b)("p",null,"Using above configuration the authorization will be like below. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"POST /users")," will only accessible by ",Object(a.b)("inlineCode",{parentName:"li"},"Admin")," and ",Object(a.b)("inlineCode",{parentName:"li"},"SuperAdmin")," (inherit the controller authorization)"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /users")," will be accessible by ",Object(a.b)("inlineCode",{parentName:"li"},"Public")," (its override the controller authorization), but ",Object(a.b)("inlineCode",{parentName:"li"},"GET /users?email")," will only accessible by ",Object(a.b)("inlineCode",{parentName:"li"},"SuperAdmin"),"."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"GET /dashboard")," will be accessible by ",Object(a.b)("inlineCode",{parentName:"li"},"Public"),", since ",Object(a.b)("inlineCode",{parentName:"li"},"DashboardController")," doesn't has any authorization applied it inherit the global authorization.")))}s.isMDXComponent=!0}}]);