(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(116)),o={id:"custom-validator",title:"Custom Validator"},l={unversionedId:"custom-validator",id:"custom-validator",isDocsHomePage:!1,title:"Custom Validator",description:"Custom validator can be created using @val.custom decorator, you can wrap the @val.custom inside a function and make a new validator decorator, and provide logic on the Validator function callback. Validator function signature is like below:",source:"@site/docs/Custom-Validator.md",sourceDirName:".",slug:"/custom-validator",permalink:"/custom-validator",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Custom-Validator.md",version:"current",frontMatter:{id:"custom-validator",title:"Custom Validator"},sidebar:"overview",previous:{title:"Custom Parameter Binding",permalink:"/custom-parameter-binding"},next:{title:"Custom Dependency Resolver",permalink:"/custom-dependency-resolver"}},c=[{value:"Example",id:"example",children:[]},{value:"Class Validation",id:"class-validation",children:[]},{value:"Separate Decorator and Its Implementation",id:"separate-decorator-and-its-implementation",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Custom validator can be created using ",Object(i.b)("inlineCode",{parentName:"p"},"@val.custom")," decorator, you can wrap the ",Object(i.b)("inlineCode",{parentName:"p"},"@val.custom")," inside a function and make a new validator decorator, and provide logic on the Validator function callback. Validator function signature is like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"(value: string, info: ValidatorContext) => string | AsyncValidatorResult[] | undefined | Promise<AsyncValidatorResult[] | string | undefined>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value")," is the current value that will be validated. value will always of type string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"info")," is the context information required for validation see below"),Object(i.b)("li",{parentName:"ul"},"return value: return error message if not valid, or return ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," for valid value.")),Object(i.b)("p",null,"Signature of the ",Object(i.b)("inlineCode",{parentName:"p"},"ValidatorContext")," is like below"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"interface ValidatorContext {\n    name: string,\n    ctx: Context,\n    parent?: { type: Class, decorators: any[] }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," name of the current validating property or parameter "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ctx")," Koa context of current request "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parent")," parent class of current validation property, can be ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," if the current validating is a method parameter")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"For example we will create an age restriction validator which restrict only 18+ age allowed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { val } from "@plumier/validator";\n\nexport async function is18plus(){\n    return val.custom(val => parseInt(val) < 18 : "Should greater than 18 years old" : undefined)\n}\n')),Object(i.b)("p",null,"Then you can use our new validator like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@domain()\nclass User {\n    constructor(\n        @is18Plus()\n        public age:number\n    ){}\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"info")," parameter of the validator function useful when you need to validate value that require request context parameter such as ",Object(i.b)("inlineCode",{parentName:"p"},"body"),", ",Object(i.b)("inlineCode",{parentName:"p"},"params")," etc."),Object(i.b)("h3",{id:"class-validation"},"Class Validation"),Object(i.b)("p",null,"Sometime its not possible to validate value only on single property, but require multiple properties. Real world example is the confirm password."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'function checkConfirmPassword() {\n    return val.custom((x, info) => {\n        if(x.password !== x.confirmPassword)\n            return val.result("confirmPassword", "Password is not the same") \n    })\n}\n\n@domain()\nclass User {\n    constructor(\n        public password: string,\n        public confirmPassword: string\n    ) { }\n}\n\nclass UsersController {\n    @route.post()\n    get(@checkConfirmPassword() model: User) { }\n}\n')),Object(i.b)("h2",{id:"separate-decorator-and-its-implementation"},"Separate Decorator and Its Implementation"),Object(i.b)("p",null,"Putting validator implementation inside decorator is simple and easy to read, but in some case it might cause circular dependency issue. You can use dependency resolver to solve this issue, by register the validator classes by ID. "),Object(i.b)("p",null,"The first step, create a class implements ",Object(i.b)("inlineCode",{parentName:"p"},"CustomValidator")," interface like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { CustomValidator, ValidatorContext, DefaultDependencyResolver } from "plumier"\n\n//create instance of DefaultDependencyResolver globally\nconst resolver = new DefaultDependencyResolver()\n\n//register the custom authorizer with the ID\n@resolver.register("is18plus")\nexport class Is18PlusValidator implements CustomValidator {\n    validate(value: any, info: ValidatorContext)\n        if(parseInt(val) < 18)\n            return "Should greater than 18 years old"\n    }\n}\n')),Object(i.b)("p",null,"Register the created resolver into the Plumier application "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { Plumier, WebApiFacility } from "plumier"\n\nconst app = new Plumier()\n    .set(new WebApiFacility({ dependencyResolver: resolver }))\n    //other facilities or middlewares\n    .initialize()\n')),Object(i.b)("p",null,"Then use the ID on each authorization applied. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'\n@domain()\nclass User {\n    constructor(\n        //use the ID here, Plumier will use resolver \n        //to create instance of the custom authorizer \n        //then execute it\n        @val.custom("is18plus")\n        public age:number\n    ){}\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This functionality work well with dependency injection, register the custom validator by name/id and plumier will automatically pass the ID into the custom dependency resolver."))))}u.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);