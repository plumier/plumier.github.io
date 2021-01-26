(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(112)),o={id:"serve-static",title:"Serve Static Files"},l={unversionedId:"serve-static",id:"serve-static",isDocsHomePage:!1,title:"Serve Static Files",description:"Plumier provided functionality to serve static file using koa-send middleware",source:"@site/docs/Serve-Static.md",slug:"/serve-static",permalink:"/serve-static",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Serve-Static.md",version:"current",sidebar:"overview",previous:{title:"Social Media Login",permalink:"/social-login"},next:{title:"File Upload",permalink:"/file-upload"}},c=[{value:"Enable Functionality",id:"enable-functionality",children:[]},{value:"Serve Single File From Controller",id:"serve-single-file-from-controller",children:[]},{value:"History Api Fallback",id:"history-api-fallback",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier provided functionality to serve static file using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/koa-send"}),"koa-send")," middleware"),Object(a.b)("h2",{id:"enable-functionality"},"Enable Functionality"),Object(a.b)("p",null,"Serve static files is optional, you can enable this functionality by install ",Object(a.b)("inlineCode",{parentName:"p"},"@plumier/serve-static")," and plug ",Object(a.b)("inlineCode",{parentName:"p"},"ServeStaticFacility")," into Plumier application"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import Plumier from "plumier"\nimport { join } from "path"\nimport { ServeStaticFacility } from "@plumier/serve-static"\n\nconst app = new Plumier()\napp.set(new ServeStaticFacility({ root: join(__dirname, "./assets") }))\n')),Object(a.b)("p",null,"If no ",Object(a.b)("inlineCode",{parentName:"p"},"root")," directory provided it will automatically search for directory named ",Object(a.b)("inlineCode",{parentName:"p"},"www")," in the same level with the application. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const app = new Plumier()\n//looks for directory named www\napp.set(new ServeStaticFacility())\n//specify relative directory in the same level \napp.set(new ServeStaticFacility({ root: "assets" }))\n')),Object(a.b)("p",null,"You can serve multiple folder by specifying multiple facility"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const app = new Plumier()\napp.set(new ServeStaticFacility({ root: join(__dirname, "./assets") }))\napp.set(new ServeStaticFacility({ root: join(__dirname, "./images") }))\n')),Object(a.b)("h2",{id:"serve-single-file-from-controller"},"Serve Single File From Controller"),Object(a.b)("p",null,"Its possible to serve single file from controller by using ",Object(a.b)("inlineCode",{parentName:"p"},"FileActionResult")," or ",Object(a.b)("inlineCode",{parentName:"p"},"response.file()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const HomeController {\n    @route.get()\n    index(){\n        return response.file(join(__dirname, "index.html"))\n        //or use FileActionResult\n        //return new FileActionResult(join(__dirname, "index.html"))\n    }\n}\n')),Object(a.b)("h2",{id:"history-api-fallback"},"History Api Fallback"),Object(a.b)("p",null,"History Api Fallback help SPA application which commonly handle navigation using History Api. Its become problem when user hitting refresh button in the middle of navigation or if user bookmark the page because it will result in 404. "),Object(a.b)("p",null,"Plumier provide ",Object(a.b)("inlineCode",{parentName:"p"},"@route.historyApiFallback()")," decorator to automatically redirect all the browser request (API or file request can be detected) into the specific controller action. Internally it detects the request ",Object(a.b)("inlineCode",{parentName:"p"},"Accept")," header to guess if the request comes from a browser or an API call."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Keep in mind that ",Object(a.b)("inlineCode",{parentName:"p"},"@route.historyApiFallback()")," require the ",Object(a.b)("inlineCode",{parentName:"p"},"ServeStaticFacility")," enabled on the Plumier application."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const HomeController {\n    @route.get("/")\n    @route.historyApiFallback()\n    index(){\n        return response.file(join(__dirname, "../../build/index.html"))\n    }\n}\n')),Object(a.b)("p",null,"Example above showing that you host the SPA html built by ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@vue/cli")," as the root url ",Object(a.b)("inlineCode",{parentName:"p"},"/"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"@route.historyApiFallback()")," will automatically redirect all browser request into the root url ",Object(a.b)("inlineCode",{parentName:"p"},"/")," with exception:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Requested url doesn't have any appropriate controller / handler "),Object(a.b)("li",{parentName:"ul"},"Requested url is not a static file serve"),Object(a.b)("li",{parentName:"ul"},"Requested url is not an API call")))}s.isMDXComponent=!0}}]);