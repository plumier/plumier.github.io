(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(113));const a={id:"custom-converter",title:"Custom Converter"},c={unversionedId:"custom-converter",id:"custom-converter",isDocsHomePage:!1,title:"Custom Converter",description:"Custom converter used when you want Plumier do some extra step (custom step) when transforming raw data or JSON object provided by Request that will be bound to the action parameters.",source:"@site/docs/Custom-Converter.md",slug:"/custom-converter",permalink:"/custom-converter",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Custom-Converter.md",version:"current"},i=[{value:"Example Boolean Conversion",id:"example-boolean-conversion",children:[]},{value:"Call Default Converter",id:"call-default-converter",children:[]}],l={toc:i};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom converter used when you want Plumier do some extra step (custom step) when transforming raw data or JSON object provided by Request that will be bound to the action parameters. "),Object(o.b)("p",null,"To provide your own custom converter you need to register your own converter into plumier configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const app = new Plumier()\napp.set({ converters: [{ type: Boolean, converter: yourConverter }] })\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"type:Boolean")," mean you will be override the behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," converter. ",Object(o.b)("inlineCode",{parentName:"p"},"yourConverter")," is a function with signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"(value: any, info: ObjectInfo<Function | Function[]>) => Promise<ConversionResult>\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ObjectInfo<Function | Function[]>")," is current conversion information. It has some properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," is path of current value on nested object"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expectedType")," expected type that the value will be converted into"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"converters")," list of converters that will be used by main converter function. This parameter required if you convert nested object and call ",Object(o.b)("inlineCode",{parentName:"li"},"convert")," class manually.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ConversionResult")," is a is a specialized class to return conversion value or error messages."),Object(o.b)("h2",{id:"example-boolean-conversion"},"Example Boolean Conversion"),Object(o.b)("p",null,"Example below will show how to create custom boolean converter. It will convert value from ",Object(o.b)("inlineCode",{parentName:"p"},"YES")," or ",Object(o.b)("inlineCode",{parentName:"p"},"NO")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true/false")," value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import { ObjectInfo, ConversionResult, ConversionMessage } from "@plumier/validator"\n\nasync function booleanConverter(value: {}, info: ObjectInfo<Function | Function[]>): Promise<ConversionResult> {\n    switch(value.toString().toLowerCase()){\n        case "yes" : return new ConversionResult(true)\n        case "no": return new ConversionResult(false)\n        //return error message\n        default: return new ConversionResult(new ConversionMessage(info.path, "Unable to convert value into boolean"))\n    }\n}\n')),Object(o.b)("p",null,"Above code will convert ",Object(o.b)("inlineCode",{parentName:"p"},"YES/NO")," value into ",Object(o.b)("inlineCode",{parentName:"p"},"true/false")," with appropriate error message. Above converter than can be registered like below "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const app = new Plumier()\napp.set({ converters: [{ type: Boolean, converter: booleanConverter }] })\n")),Object(o.b)("p",null,"Above function will replace the default ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," converter. "),Object(o.b)("h2",{id:"call-default-converter"},"Call Default Converter"),Object(o.b)("p",null,"You can call the default bolean converter from inside your convert using ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultConverters")," namespace, or using ",Object(o.b)("inlineCode",{parentName:"p"},"converters")," property from ",Object(o.b)("inlineCode",{parentName:"p"},"ObjectInfo")," parameter."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import { DefaultConverters, ObjectInfo, ConversionResult } from "@plumier/validator"\n\nfunction booleanConverter(rawValue: {}, info: ObjectInfo<Function | Function[]>): Promise<ConversionResult> {\n    //can be using this\n    const defaultResult = DefaultConverter.booleanConverter(rawValue, info)\n    //or this\n    const otherDefault = info.converters.get(Boolean)(rawValue, info)\n    //further processing\n}\n')))}u.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return v}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,v=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return t?o.a.createElement(v,i(i({ref:n},u),{},{components:t})):o.a.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);