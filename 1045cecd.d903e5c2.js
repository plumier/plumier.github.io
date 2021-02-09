(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(113)),i={id:"custom-authorization",title:"Custom Authorization"},l={unversionedId:"custom-authorization",id:"custom-authorization",isDocsHomePage:!1,title:"Custom Authorization",description:"Custom authorization can be created using @authorize.custom decorator. Wrap it using function to create a new decorator like below",source:"@site/docs/Custom-Authorization.md",slug:"/custom-authorization",permalink:"/custom-authorization",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Custom-Authorization.md",version:"current",sidebar:"overview",previous:{title:"Custom Validator",permalink:"/custom-validator"},next:{title:"Custom Dependency Resolver",permalink:"/custom-dependency-resolver"}},c=[{value:"Callback Signature",id:"callback-signature",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom authorization can be created using ",Object(o.b)("inlineCode",{parentName:"p"},"@authorize.custom")," decorator. Wrap it using function to create a new decorator like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export function myCustomAuthorization(){\n    return authorize.custom(async info => {\n        //return true to authorize user otherwise false\n    })\n}\n")),Object(o.b)("p",null,"Apply your new created authorization decorator like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    @myCustomAuthorization()\n    index(){\n\n    }\n}\n")),Object(o.b)("h2",{id:"callback-signature"},"Callback Signature"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@authorize.custom")," receive two parameters a callback which will evaluate user authorization and ",Object(o.b)("inlineCode",{parentName:"p"},"tag")," metadata that will be used for further metadata processing. The callback signature is like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'(info: AuthorizationContext, location: "Class" | "Parameter" | "Method") => boolean | Promise<boolean>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"info")," Metadata information about current authorization."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"location")," location of decorator applied ",Object(o.b)("inlineCode",{parentName:"li"},"Class")," ",Object(o.b)("inlineCode",{parentName:"li"},"Parameter")," ",Object(o.b)("inlineCode",{parentName:"li"},"Method"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AuthorizationContext")," members is like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"interface AuthorizationContext {\n    value?: any\n    parentValue?: any\n    role: string[]\n    user: { [key: string]: any } | undefined\n    ctx: ActionContext\n    metadata: Metadata\n    access: AccessModifier\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")," is Current property value, only available on authorize read/write"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"parentValue")," is Current property's parent value, only available on authorize read/write"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"role")," is List of user roles"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"user")," is Current login user JWT claim"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ctx")," is Current request context"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"metadata")," is Metadata information of the current request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"access")," is Type of authorization applied read/write/route/filter")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Example we will create custom authorization to authorize if the current user is an ",Object(o.b)("inlineCode",{parentName:"p"},"Admin")," or the owner of the data. As an example we have controller to modify user data like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-TypeScript"},"@domain()\nexport class User {\n    constructor(\n        id:number,\n        email:string,\n        displayName:string,\n        address:string,\n        birthDate:Date\n    ){}\n}\n")),Object(o.b)("p",null,"Controller to modify above domain is like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class UsersController {\n    @route.put(":id")\n    async modify(id:number, user:User){\n        await db("User").update(id, user)\n    }\n}\n')),Object(o.b)("p",null,"Action ",Object(o.b)("inlineCode",{parentName:"p"},"modify")," above will only authorized to ",Object(o.b)("inlineCode",{parentName:"p"},"Admin")," or if the login user has the same ID with the requested data. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export function isAdminOrOwner() {\n    return authorize.custom((info, position) => {\n        const {role, user, ctx} = info\n        //the first parameter MUST be the ID of the requested user\n        const id = ctx.parameters[0]\n        return role.some(x => x === "Admin") || user.id === id\n    })\n}\n')),Object(o.b)("p",null,"Above snippet we created a new decorator ",Object(o.b)("inlineCode",{parentName:"p"},"@isAdminOrOwner()")," that can be applied to any method that the first parameter was the ID. Than we query if the current login user is an ",Object(o.b)("inlineCode",{parentName:"p"},"Admin")," or have the same ID with the requested data. To apply above decorator simply add it above the ",Object(o.b)("inlineCode",{parentName:"p"},"modify")," "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class UsersController {\n    @isAdminOrOwner()\n    @route.put(":id")\n    async modify(id:number, user:User){\n        await db("User").update(id, user)\n    }\n}\n')))}s.isMDXComponent=!0}}]);