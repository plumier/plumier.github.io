(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(3),o=(t(0),t(113));const i={id:"custom-dependency-resolver",title:"Custom Dependency Resolver"},a={unversionedId:"custom-dependency-resolver",id:"custom-dependency-resolver",isDocsHomePage:!1,title:"Custom Dependency Resolver",description:"Plumier uses global factory method to create instance of framework components such as Controller, Middleware, Custom Validator, Custom Authorizer etc. This factory method can be used as the composition root when using custom dependency injection framework.",source:"@site/docs/Custom-Dependency-Resolver.md",slug:"/custom-dependency-resolver",permalink:"/custom-dependency-resolver",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Custom-Dependency-Resolver.md",version:"current",sidebar:"overview",previous:{title:"Custom Validator",permalink:"/custom-validator"},next:{title:"Custom Route Generator",permalink:"/custom-route-generator"}},s=[{value:"Custom Dependency Resolver",id:"custom-dependency-resolver",children:[]},{value:"Signature",id:"signature",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],l={toc:s};function c({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Plumier uses global factory method to create instance of framework components such as Controller, Middleware, Custom Validator, Custom Authorizer etc. This factory method can be used as the ",Object(o.b)("a",{parentName:"p",href:"https://blog.ploeh.dk/2011/07/28/CompositionRoot/"},"composition root")," when using custom dependency injection framework."),Object(o.b)("h2",{id:"custom-dependency-resolver"},"Custom Dependency Resolver"),Object(o.b)("p",null,"By default Plumier doesn't have a proper dependency injection functionality, but Plumier has an extension point to possibly extend its functionality by using Custom Dependency Resolver. "),Object(o.b)("h2",{id:"signature"},"Signature"),Object(o.b)("p",null,"The signature of Plumier Dependency Resolver is very simple and straightforward, it simply like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"interface DependencyResolver {\n    resolve(type: Class | string | symbol): any\n}\n")),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"This example is a show case how you can create custom ",Object(o.b)("inlineCode",{parentName:"p"},"DependencyResolver")," and use an IoC container library to resolve controller's dependency. "),Object(o.b)("p",null,"This example uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ktutnik/my-own-ioc-container"},"My Own IoC Container"),", its a light weight zero dependency IoC container library. The source code can be copy pasted to your project and become the part of your project. "),Object(o.b)("p",null,"By default Plumier will need a parameterless constructor because it doesn't have dependency injection capability. The controller is like below: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import {inject} from "./my-own-ioc-container"\nimport {route} from "plumier"\n\nclass AnimalsController {\n    constructor(\n        @inject.name("repository") \n        private repository: AnimalRepository\n    ) { }\n\n    @route.post("")\n    save(animal: Animal) {\n        return this.repository.save(animal)\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AnimalsController")," dependent to ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalRepository")," from its constructor parameter. Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"repository")," parameter decorated with ",Object(o.b)("inlineCode",{parentName:"p"},'@inject.name("repository")')," means its will automatically injected with instance of object registered as ",Object(o.b)("inlineCode",{parentName:"p"},"repository"),". the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalRepository")," is an interface with contract like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"interface AnimalRepository {\n    save(animal: Animal):any\n}\n")),Object(o.b)("p",null,"Somewhere inside the project, implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalRepository")," is like below, furthermore we will register this repository by name as ",Object(o.b)("inlineCode",{parentName:"p"},"repository")," so it will injected properly into the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalsController"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"class AnimalRepositoryImpl implements AnimalRepository {\n    save(animal: Animal) {\n        //save the data and then return the new ID\n        //for example return 123\n        return { id: 123 }\n    }\n}\n")),Object(o.b)("p",null,"Next we need to glue the object and its dependency by using the Inversion of Control container, here we will glue them together inside the custom dependency resolver. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import {Container} from "./my-own-ioc-container"\n\nclass CustomResolver implements DependencyResolver {\n    readonly container: Container\n    constructor() {\n        this.container = new Container()\n        this.container.register("repository").asType(AnimalRepositoryImpl)\n        this.container.register(AnimalsController)\n    }\n\n    resolve(type: string | symbol | Class) {\n        //My Own IoC Container doesn\'t supported symbol, Inversify http://inversify.io/ does\n        if (typeof type === "symbol") throw new Error("IoC Container doesn\'t supported symbol")\n        return this.kernel.resolve(type)\n    }\n}\n')),Object(o.b)("p",null,"Thats all the configuration you need, next you need to register the custom resolver into the Plumier application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import {Plumier} from "plumier"\n\nconst plumier = new Plumier()\n    .set(new WebApiFacility({ dependencyResolver: new CustomResolver() }))\n')))}c.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(b,s(s({ref:n},c),{},{components:t})):o.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);