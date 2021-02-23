(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(113)),l={id:"entry-point",title:"Entry Point"},o={unversionedId:"entry-point",id:"entry-point",isDocsHomePage:!1,title:"Entry Point",description:"Plumier application is the entry point of all Plumier based API. Creating Plumier application simply by creating instance of Plumier class. The simplest Plumier application at least must have WebApiFacility installed like below.",source:"@site/docs/Entry-Point.md",slug:"/entry-point",permalink:"/entry-point",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Entry-Point.md",version:"current",sidebar:"overview",previous:{title:"Quick Start",permalink:"/quick-start"},next:{title:"Controller",permalink:"/controller"}},c=[{value:"Facilities",id:"facilities",children:[]},{value:"Application For Testing",id:"application-for-testing",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Plumier application is the entry point of all Plumier based API. Creating Plumier application simply by creating instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Plumier")," class. The simplest Plumier application at least must have ",Object(i.b)("inlineCode",{parentName:"p"},"WebApiFacility")," installed like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import Plumier from "plumier"\n\nnew Plumier()\n    .set(new WebApiFacility())\n    .listen(8000)\n')),Object(i.b)("p",null,"By default Plumier will search for controllers using this glob pattern ",Object(i.b)("inlineCode",{parentName:"p"},"./**/*controller.+(ts|js)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"./**/*entity.+(ts|js)"),", its mean it will search for all TypeScript/JavaScript files ends with ",Object(i.b)("inlineCode",{parentName:"p"},"controller")," or ",Object(i.b)("inlineCode",{parentName:"p"},"entity")," (for first class entity). It also automatically detected exported controller in the same file with the entry point file, this is useful for single file project. "),Object(i.b)("p",null,"Above configuration does noting because no controller specified. We can start above code using ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-node"},"ts-node")," or ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-node-dev"},"ts-node-dev"),", by specify it on the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," script like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"{5}","{5}":!0},'{\n  "name": "my-cool-api",\n  "version": "1.0.0",\n  "scripts": {\n    "debug": "ts-node-dev --inspect -- src/index",\n    "build": "tsc",\n    "start": "node src/index"\n  },\n  "dependencies": {\n    "plumier": "^1.0.0-rc.7",\n  },\n  "devDependencies": {\n    "ts-node-dev": "^1.1.1",\n    "typescript": "^4.1.3",\n  }\n}\n')),Object(i.b)("h2",{id:"facilities"},"Facilities"),Object(i.b)("p",null,"Plumier application is configurable using facility, facility is a framework component consist of configurations, ordered middlewares and some micro process before the framework started."),Object(i.b)("p",null,"There are list of built-in facility that ready to be used."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Facility"),Object(i.b)("th",{parentName:"tr",align:null},"Includes"),Object(i.b)("th",{parentName:"tr",align:null},"Package"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"WebApiFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Body parser, CORS middleware, Default dependency resolver"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"RestApiFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Same as ",Object(i.b)("inlineCode",{parentName:"td"},"WebApiFacility")," except its provided more strict restful API status code"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ControllerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Host controllers by path or type, furthermore controllers can be grouped and versioned"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"LoggerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Simple request logging and error reporting"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"JwtAuthFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Jwt middleware, Enable authorization, Jwt Secret configuration"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/jwt"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"MongooseFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Mongoose schema generator, generic controller and connection management"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/mongoose"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"TypeORMFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Provided helper and generic controller for TypeORM"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/typeorm"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ServeStaticFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Serve static files"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/serve-static"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"SwaggerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Serve Swagger UI and generate Open API 3.0 automatically"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/swagger"))))),Object(i.b)("h2",{id:"application-for-testing"},"Application For Testing"),Object(i.b)("p",null,"When Plumier ",Object(i.b)("inlineCode",{parentName:"p"},"listen")," method called immediately its make Plumier lost its ability for testing purpose. To do that you can use ",Object(i.b)("inlineCode",{parentName:"p"},"initialize")," method to get a testable server like below. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import Plumier, { Configuration, WebApiFacility } from "plumier"\n\nfunction createApp(config?: Partial<Configuration>) {\n    return new Plumier()\n        // specify the rootDir since it will be executed in different directory (test dir)\n        .set({ ...config, rootDir: __dirname })\n        .set(new WebApiFacility())\n        .initialize()\n}\n\nexport default createApp\n')),Object(i.b)("p",null,"By using code above, you can test your API using ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},"supertest")," like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import createApp from "../src/app"\nimport supertest from "supertest"\n\nit("Should serve API properly", async () => {\n    const app = await createApp({ mode: "production" })\n    await supertest(app.callback())\n        .get("/")\n        .expect(200)\n})\n')))}b.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?a.a.createElement(u,o(o({ref:t},p),{},{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);