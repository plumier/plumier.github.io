(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(112)),i={id:"custom-dependency-resolver",title:"Custom Dependency Resolver"},c={unversionedId:"custom-dependency-resolver",id:"custom-dependency-resolver",isDocsHomePage:!1,title:"Custom Dependency Resolver",description:"Plumier uses global factory method to create instance of framework components such as Controller, Middleware, Custom Validator, Custom Authorizer etc. This factory method can be used as the composition root when using custom dependency injection framework.",source:"@site/docs/Custom-Dependency-Resolver.md",slug:"/custom-dependency-resolver",permalink:"/custom-dependency-resolver",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Custom-Dependency-Resolver.md",version:"current",sidebar:"overview",previous:{title:"Custom Authorization",permalink:"/custom-authorization"},next:{title:"Custom Route Generator",permalink:"/custom-route-generator"}},s=[{value:"Custom Dependency Resolver",id:"custom-dependency-resolver",children:[]},{value:"Signature",id:"signature",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier uses global factory method to create instance of framework components such as Controller, Middleware, Custom Validator, Custom Authorizer etc. This factory method can be used as the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.ploeh.dk/2011/07/28/CompositionRoot/"}),"composition root")," when using custom dependency injection framework."),Object(a.b)("h2",{id:"custom-dependency-resolver"},"Custom Dependency Resolver"),Object(a.b)("p",null,"By default Plumier doesn't have a proper dependency injection functionality, but Plumier has an extension point to possibly extend its functionality by using Custom Dependency Resolver. "),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("p",null,"The signature of Plumier Dependency Resolver is very simple and straightforward, it simply like below"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface DependencyResolver {\n    resolve(type: Class | string | symbol): any\n}\n")),Object(a.b)("h2",{id:"example-usage"},"Example Usage"),Object(a.b)("p",null,"This example is a show case how you can create custom ",Object(a.b)("inlineCode",{parentName:"p"},"DependencyResolver")," and use an IoC container library to resolve controller's dependency. "),Object(a.b)("p",null,"This example uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ktutnik/my-own-ioc-container"}),"My Own IoC Container"),", its a light weight zero dependency IoC container library. The source code can be copy pasted to your project and become the part of your project. "),Object(a.b)("p",null,"By default Plumier will need a parameterless constructor because it doesn't have dependency injection capability. The controller is like below: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {inject} from "./my-own-ioc-container"\nimport {route} from "plumier"\n\nclass AnimalsController {\n    constructor(\n        @inject.name("repository") \n        private repository: AnimalRepository\n    ) { }\n\n    @route.post("")\n    save(animal: Animal) {\n        return this.repository.save(animal)\n    }\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AnimalsController")," dependent to ",Object(a.b)("inlineCode",{parentName:"p"},"AnimalRepository")," from its constructor parameter. Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"repository")," parameter decorated with ",Object(a.b)("inlineCode",{parentName:"p"},'@inject.name("repository")')," means its will automatically injected with instance of object registered as ",Object(a.b)("inlineCode",{parentName:"p"},"repository"),". the ",Object(a.b)("inlineCode",{parentName:"p"},"AnimalRepository")," is an interface with contract like below"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface AnimalRepository {\n    save(animal: Animal):any\n}\n")),Object(a.b)("p",null,"Somewhere inside the project, implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"AnimalRepository")," is like below, furthermore we will register this repository by name as ",Object(a.b)("inlineCode",{parentName:"p"},"repository")," so it will injected properly into the ",Object(a.b)("inlineCode",{parentName:"p"},"AnimalsController"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class AnimalRepositoryImpl implements AnimalRepository {\n    save(animal: Animal) {\n        //save the data and then return the new ID\n        //for example return 123\n        return { id: 123 }\n    }\n}\n")),Object(a.b)("p",null,"Next we need to glue the object and its dependency by using the Inversion of Control container, here we will glue them together inside the custom dependency resolver. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {Container} from "./my-own-ioc-container"\n\nclass CustomResolver implements DependencyResolver {\n    readonly container: Container\n    constructor() {\n        this.container = new Container()\n        this.container.register("repository").asType(AnimalRepositoryImpl)\n        this.container.register(AnimalsController)\n    }\n\n    resolve(type: string | symbol | Class) {\n        //My Own IoC Container doesn\'t supported symbol, Inversify http://inversify.io/ does\n        if (typeof type === "symbol") throw new Error("IoC Container doesn\'t supported symbol")\n        return this.kernel.resolve(type)\n    }\n}\n')),Object(a.b)("p",null,"Thats all the configuration you need, next you need to register the custom resolver into the Plumier application."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {Plumier} from "plumier"\n\nconst plumier = new Plumier()\n    .set(new WebApiFacility({ dependencyResolver: new CustomResolver() }))\n')))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);