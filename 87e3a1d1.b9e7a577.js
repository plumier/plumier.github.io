(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),g=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=g(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||b[s]||a;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return g}));var r=n(3),i=n(7),a=(n(0),n(105)),o={id:"swagger",title:"Swagger"},c={unversionedId:"swagger",id:"swagger",isDocsHomePage:!1,title:"Swagger",description:"Plumier provide facility to generate Open API 3.0 Specification commonly used by Swagger UI. The API specification directly generated from controllers metadata.",source:"@site/docs/Swagger.md",slug:"/swagger",permalink:"/swagger",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Swagger.md",version:"current",sidebar:"overview",previous:{title:"Mongoose Helper",permalink:"/mongoose-helper"},next:{title:"Social Media Login",permalink:"/social-login"}},l=[{value:"Enable The Facility",id:"enable-the-facility",children:[]},{value:"Swagger Endpoint",id:"swagger-endpoint",children:[]},{value:"Project Info",id:"project-info",children:[]}],p={rightToc:l};function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier provide facility to generate Open API 3.0 Specification commonly used by ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/"}),"Swagger")," UI. The API specification directly generated from controllers metadata. "),Object(a.b)("h2",{id:"enable-the-facility"},"Enable The Facility"),Object(a.b)("p",null,"To enable this facility you need to install the ",Object(a.b)("inlineCode",{parentName:"p"},"@plumier/swagger")," and use the ",Object(a.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," on existing Plumier application like below: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n        // ...... other facility\n        // activate Open Api generation and Swagger UI\n        .set(new SwaggerFacility())\n')),Object(a.b)("p",null,"Above is the minimum configuration required to generate the Open Api 3.0 Specification, some configuration may needed but optional. "),Object(a.b)("p",null,"Using above code Plumier automatically generate Open API 3.0 Specification using controllers metadata and create two endpoints: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/swagger.json"),"  The Open API 3.0 Specification "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/swagger")," The swagger UI  (API explorer)")),Object(a.b)("h2",{id:"swagger-endpoint"},"Swagger Endpoint"),Object(a.b)("p",null,"By default the endpoint of the Swagger ui is ",Object(a.b)("inlineCode",{parentName:"p"},"/swagger")," this endpoint is customisable by providing ",Object(a.b)("inlineCode",{parentName:"p"},"endpoint")," on the ",Object(a.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," like below: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n       // ...... other facility\n       .set(new SwaggerFacility({ endpoint: "/explorer" }))\n')),Object(a.b)("p",null,"Above code will host the Swagger ui in ",Object(a.b)("inlineCode",{parentName:"p"},"/explorer")," endpoint."),Object(a.b)("h2",{id:"project-info"},"Project Info"),Object(a.b)("p",null,"Swagger facility provide default project info for OpenAPI 3.0 spec, you can override this by providing it in facility constructor "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n       // ...... other facility\n       .set(new SwaggerFacility({ \n           info: { \n               title: "Pet Api Explorer", \n               version: "1.0.0", \n               description: "Lorem ipsum" \n           } \n       }))\n')))}g.isMDXComponent=!0}}]);