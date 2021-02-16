(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=(a(0),a(113));const o={id:"metaprogramming",title:"Metaprogramming"},c={unversionedId:"metaprogramming",id:"metaprogramming",isDocsHomePage:!1,title:"Metaprogramming",description:"Key feature that make Plumier different than other TypeScript backend framework is its ability to perform metaprogramming. Plumier has its own reflection (introspection) library named @plumier/reflect, that makes metaprogramming possible.",source:"@site/docs/MetaProgramming.md",slug:"/metaprogramming",permalink:"/metaprogramming",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/MetaProgramming.md",version:"current",sidebar:"overview",previous:{title:"Reflection Fundamentals",permalink:"/reflection-basic"},next:{title:"Custom Parameter Binding",permalink:"/custom-parameter-binding"}},i=[{value:"Metadata",id:"metadata",children:[]},{value:"Access The Metadata",id:"access-the-metadata",children:[{value:"Middleware",id:"middleware",children:[]},{value:"Custom Authorizer",id:"custom-authorizer",children:[]},{value:"Custom Validator",id:"custom-validator",children:[]},{value:"Custom Binder",id:"custom-binder",children:[]}]},{value:"Controller and Action Object Graph",id:"controller-and-action-object-graph",children:[]},{value:"Action Params",id:"action-params",children:[]}],l={toc:i};function s({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Key feature that make Plumier different than other TypeScript backend framework is its ability to perform metaprogramming. Plumier has its own reflection (introspection) library named ",Object(n.b)("inlineCode",{parentName:"p"},"@plumier/reflect"),", that makes metaprogramming possible."),Object(n.b)("p",null,"Metaprogramming in Plumier increases reusability of custom extension, because it can access information about current controller and action handles the request and the location of custom extension applied. "),Object(n.b)("h2",{id:"metadata"},"Metadata"),Object(n.b)("p",null,"Metadata is specialized class contains information about current request metadata, such as controller object graph, action object graph, action parameters etc. It has properties below"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"actionParams")," current action parameters, contains information about action parameters values used to execute the action."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"controller")," current controller object graph, contains information about controller name, decorators, methods, constructor etc. "),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"action")," current action object graph, contains information about action name, parameters, decorators etc."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"current")," metadata information where the appropriate decorator applied, can be Class metadata, Method metadata, Property metadata or Parameter metadata. For global middleware the ",Object(n.b)("inlineCode",{parentName:"li"},"current")," property will be ",Object(n.b)("inlineCode",{parentName:"li"},"undefined"),".")),Object(n.b)("h2",{id:"access-the-metadata"},"Access The Metadata"),Object(n.b)("p",null,"Metadata object accessible through all custom extension, it accessible by ",Object(n.b)("inlineCode",{parentName:"p"},"metadata")," property. "),Object(n.b)("h3",{id:"middleware"},"Middleware"),Object(n.b)("p",null,"Invocation object has ",Object(n.b)("inlineCode",{parentName:"p"},"metadata")," property, you can access it like below"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const myCustomMiddleware:CustomMiddlewareFunction = ({ metadata, proceed }) => {\n    // process metadata \n    return proceed()\n}\n")),Object(n.b)("p",null,"Or accessible from class style middleware "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"class MyCustomMiddleware implements CustomMiddleware {\n    async execute({ metadata, proceed }: Invocation) {\n        // process metadata \n        return proceed()\n    }\n}\n")),Object(n.b)("h3",{id:"custom-authorizer"},"Custom Authorizer"),Object(n.b)("p",null,"Metadata can be accessed from ",Object(n.b)("inlineCode",{parentName:"p"},"AuthorizationContext")," class like below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const myCustomAuthorizer: CustomAuthorizerFunction = ({ metadata }) => {\n    // process metadata\n    return true\n}\n")),Object(n.b)("p",null,"Or accessible from class style authorizer"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"class MyCustomAuthorizer implements CustomAuthorizer {\n    authorize({ metadata }: AuthorizationContext) {\n        // process metadata\n        return true\n    }\n}\n")),Object(n.b)("h3",{id:"custom-validator"},"Custom Validator"),Object(n.b)("p",null,"Metadata can be accessed from ",Object(n.b)("inlineCode",{parentName:"p"},"ValidatorContext")," class like below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const myCustomValidator:CustomValidatorFunction = (val, { metadata }) => {\n    // process metadata\n}\n")),Object(n.b)("p",null,"Or accessible from class style validator"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"class MyCustomValidator implements CustomValidator {\n    validate(value: any, { metadata } : ValidatorContext) {\n        // process metadata\n    }\n}\n")),Object(n.b)("h3",{id:"custom-binder"},"Custom Binder"),Object(n.b)("p",null,"Metadata accessible from the second parameter of custom binder "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const myCustomBinder:CustomBinderFunction = (ctx, metadata) => {\n    // process metadata\n}\n")),Object(n.b)("h2",{id:"controller-and-action-object-graph"},"Controller and Action Object Graph"),Object(n.b)("p",null,"Metadata object contains information of current controller and action handle the request, Access them like below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const controllerName = metadata.controller.name \nconst actionName = metadata.action.name \n")),Object(n.b)("p",null,"Access the parameter names of the action "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const actionParameterNames = metadata.action.parameters.map(x => x.name)\n")),Object(n.b)("p",null,"Access decorator applied to the Controller or Action "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const controllerDecorators = metadata.controller.decorators\nconst actionDecorators = metadata.action.decorators\n")),Object(n.b)("h2",{id:"action-params"},"Action Params"),Object(n.b)("p",null,"Action parameter useful to get information about current action parameters and their values. For example with controller below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},'class AnimalController {\n    @route.get(":id")\n    get(id:string, breed:string){\n\n    }\n}\n')),Object(n.b)("p",null,"With the request ",Object(n.b)("inlineCode",{parentName:"p"},"GET /animal/12345?breed=canine")," you can access the values of the parameter from metadata object like below"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},'const id = metadata.actionParams.get("id") //result id = 12345 \nconst breed = metadata.actionParams.get("breed") //result breed = canine \n')),Object(n.b)("p",null,"You can access the parameter by its index like below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},"const id = metadata.actionParams.get(0) //result id = 12345 \nconst breed = metadata.actionParams.get(1) //result breed = canine \n")),Object(n.b)("p",null,"To increase your app robustness it is necessary to check if current action handles the request has specific parameter. You can do that like below "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},'if(!metadata.actionParams.has("id"))\n    throw new Error("Applied method doesn\'t have \'id\' parameter")\n')))}s.isMDXComponent=!0},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),m=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,u=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return a?n.a.createElement(u,i(i({ref:t},s),{},{components:a})):n.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);