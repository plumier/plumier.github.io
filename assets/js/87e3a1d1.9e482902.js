(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,g=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(g,c(c({ref:t},p),{},{components:n})):i.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(116)),o={id:"swagger",title:"Swagger"},c={unversionedId:"swagger",id:"swagger",isDocsHomePage:!1,title:"Swagger",description:"Plumier provide facility to generate Open API 3.0 Specification commonly used by Swagger UI. The API specification directly generated from controllers metadata.",source:"@site/docs/Swagger.md",sourceDirName:".",slug:"/swagger",permalink:"/swagger",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Swagger.md",version:"current",frontMatter:{id:"swagger",title:"Swagger"},sidebar:"overview",previous:{title:"Query Parser",permalink:"/query-parser"},next:{title:"Social Media Login",permalink:"/social-login"}},l=[{value:"Enable The Facility",id:"enable-the-facility",children:[]},{value:"Swagger Endpoint",id:"swagger-endpoint",children:[]},{value:"Project Info",id:"project-info",children:[]},{value:"Decorator Customization (Optional)",id:"decorator-customization-optional",children:[{value:"Description",id:"description",children:[]},{value:"Response",id:"response",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier provide facility to generate Open API 3.0 Specification commonly used by ",Object(a.b)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," UI. The API specification directly generated from controllers metadata. "),Object(a.b)("h2",{id:"enable-the-facility"},"Enable The Facility"),Object(a.b)("p",null,"To enable this facility you need to install the ",Object(a.b)("inlineCode",{parentName:"p"},"@plumier/swagger")," and use the ",Object(a.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," on existing Plumier application like below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n        // ...... other facility\n        // activate Open Api generation and Swagger UI\n        .set(new SwaggerFacility())\n')),Object(a.b)("p",null,"Above is the minimum configuration required to generate the Open Api 3.0 Specification, some configuration may needed but optional. "),Object(a.b)("p",null,"Using above code Plumier automatically generate Open API 3.0 Specification using controllers metadata and create two endpoints: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/swagger.json"),"  The Open API 3.0 Specification "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/swagger")," The swagger UI  (API explorer)")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Swagger UI and ",Object(a.b)("inlineCode",{parentName:"p"},"swagger.json")," will be disabled on production. To force enable SwaggerUI on production, use environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"PLUM_ENABLE_SWAGGER")," with value ",Object(a.b)("inlineCode",{parentName:"p"},"ui"),", ",Object(a.b)("inlineCode",{parentName:"p"},"json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."))),Object(a.b)("h2",{id:"swagger-endpoint"},"Swagger Endpoint"),Object(a.b)("p",null,"By default the endpoint of the Swagger ui is ",Object(a.b)("inlineCode",{parentName:"p"},"/swagger")," this endpoint is customisable by providing ",Object(a.b)("inlineCode",{parentName:"p"},"endpoint")," on the ",Object(a.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," like below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n       // ...... other facility\n       .set(new SwaggerFacility({ endpoint: "/explorer" }))\n')),Object(a.b)("p",null,"Above code will host the Swagger ui in ",Object(a.b)("inlineCode",{parentName:"p"},"/explorer")," endpoint."),Object(a.b)("h2",{id:"project-info"},"Project Info"),Object(a.b)("p",null,"Swagger facility provide default project info for OpenAPI 3.0 spec, you can override this by providing it in facility constructor "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n       // ...... other facility\n       .set(new SwaggerFacility({ \n           info: { \n               title: "Pet Api Explorer", \n               version: "1.0.0", \n               description: "Lorem ipsum" \n           } \n       }))\n')),Object(a.b)("h2",{id:"decorator-customization-optional"},"Decorator Customization (Optional)"),Object(a.b)("p",null,"Plumier provided decorators to customize the appearance of the swagger UI "),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"Description can be applied on the action or parameter like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { api } from "plumier"\n\nclass UsersController {\n    @api.description("Get user by user id")\n    @route.get(":id")\n    get(id:string){ }\n}\n')),Object(a.b)("p",null,"Description receive string with markdown syntax"),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("p",null,"Open API generator automatically check for action return type to generate the response schema. Keep in mind that when provided ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," you need to specify the return type manually like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{5}","{5}":!0},'import { api, meta } from "plumier"\n\nclass UsersController {\n    @route.get(":id")\n    @meta.type(x => User)\n    get(id:string): Promise<User>{ }\n}\n')))}s.isMDXComponent=!0}}]);