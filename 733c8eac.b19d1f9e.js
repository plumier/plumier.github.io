(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(113));const l={id:"get-started",title:"Get Started"},i={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below.",source:"@site/docs/Get-Started.md",slug:"/get-started",permalink:"/get-started",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Get-Started.md",version:"current"},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Init Project",id:"init-project",children:[]},{value:"Project Starter File Structure",id:"project-starter-file-structure",children:[]},{value:"Add Dependencies",id:"add-dependencies",children:[]},{value:"Bootstrap Application",id:"bootstrap-application",children:[]},{value:"User Entity",id:"user-entity",children:[]},{value:"Add Configuration File",id:"add-configuration-file",children:[]},{value:"Enable Swagger",id:"enable-swagger",children:[]},{value:"Run The Project",id:"run-the-project",children:[]},{value:"Securing Resources",id:"securing-resources",children:[]}],c={toc:o};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"User register using email, name and password ."),Object(a.b)("li",{parentName:"ul"},"Provided login using email and password which returned JWT token. "),Object(a.b)("li",{parentName:"ul"},"Provide CRUD for TODO data, any user can create TODO, but only the owner of TODO can modify and delete it. "),Object(a.b)("li",{parentName:"ul"},"Provide CRUD to add comment to specific TODO, any user can add comments to specific TODO, but only the owner can modify and delete it"),Object(a.b)("li",{parentName:"ul"},"Provide endpoint to upload picture used for user profile picture")),Object(a.b)("p",null,"List of endpoints will be created for above requirements are like below."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Functions"),Object(a.b)("th",{parentName:"tr",align:null},"Path"),Object(a.b)("th",{parentName:"tr",align:null},"Http Method"),Object(a.b)("th",{parentName:"tr",align:null},"Accessible By"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"User registration"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/users")),Object(a.b)("td",{parentName:"tr",align:null},"POST"),Object(a.b)("td",{parentName:"tr",align:null},"Public")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"User login"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/login")),Object(a.b)("td",{parentName:"tr",align:null},"POST"),Object(a.b)("td",{parentName:"tr",align:null},"Public")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Create a TODO"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos")),Object(a.b)("td",{parentName:"tr",align:null},"POST"),Object(a.b)("td",{parentName:"tr",align:null},"All login users")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Modify/delete TODO by ID"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos/:id")),Object(a.b)("td",{parentName:"tr",align:null},"PUT PATCH DELETE"),Object(a.b)("td",{parentName:"tr",align:null},"Owner of TODO")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Get TODO by id"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos/:id?select")),Object(a.b)("td",{parentName:"tr",align:null},"GET"),Object(a.b)("td",{parentName:"tr",align:null},"All login users")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Get list of TODOs with filter and pagination"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos?filter")),Object(a.b)("td",{parentName:"tr",align:null},"GET"),Object(a.b)("td",{parentName:"tr",align:null},"Public")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Add comment to specific todo"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos/:pid/comments")),Object(a.b)("td",{parentName:"tr",align:null},"POST"),Object(a.b)("td",{parentName:"tr",align:null},"All login users")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Modify/remove comment to specific todo"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"/todos/:pid/comments/:id")),Object(a.b)("td",{parentName:"tr",align:null},"PUT PATCH DELETE"),Object(a.b)("td",{parentName:"tr",align:null},"Owner of comment")))),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("p",null,"To be able to follow this example you need some software installed in your computer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v10 or newer "),Object(a.b)("li",{parentName:"ul"},"Any terminal app"),Object(a.b)("li",{parentName:"ul"},"Any text editor (VSCode preferred)")),Object(a.b)("p",null,"Confirm that Node.js installed properly on your machine by execute command below in your terminal"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node -v\n")),Object(a.b)("h2",{id:"init-project"},"Init Project"),Object(a.b)("p",null,"To get started we need to download ",Object(a.b)("a",{parentName:"p",href:"https://github.com/plumier/starter"},"blank Plumier project starter")," from GitHub repository. In this example we will use ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/degit"},"Degit")," to download it. Execute commands below in your terminal"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx degit plumier/starter#blank plumier-get-started\n")),Object(a.b)("p",null,"Above command will download Degit locally then download Plumier blank project starter into ",Object(a.b)("inlineCode",{parentName:"p"},"plumier-get-started")," directory. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you having problem executing ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," you can manually install Degit globally"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i -g degit\n")),Object(a.b)("p",{parentName:"div"},"Then followed by executing Degit manually like below"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},"degit plumier/starter#blank plumier-get-started\n")))),Object(a.b)("p",null,"Enter to the project directory by executing command below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cd plumier-get-started\n")),Object(a.b)("p",null,"Install package dependencies by executing command below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(a.b)("h2",{id:"project-starter-file-structure"},"Project Starter File Structure"),Object(a.b)("p",null,"Open the project directory using your favorite text editor or IDE, on this example we will use VSCode. "),Object(a.b)("p",null,"Plumier blank project starter contains minimal files required to create API with Node.js and TypeScript. The project structure is like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"- src/\n  - index.ts       // main entry of Plumier application\n- tsconfig.json    // typescript configuration file\n- package.json     // Node.js package configuration\n")),Object(a.b)("p",null,"There are more project starter available on the ",Object(a.b)("inlineCode",{parentName:"p"},"plumier/starter")," repository on each appropriate branch. "),Object(a.b)("h2",{id:"add-dependencies"},"Add Dependencies"),Object(a.b)("p",null,"Next step we will install some NPM package required to build our API. The project starter already provided some basic packages required. "),Object(a.b)("p",null,"Next we will install ",Object(a.b)("a",{parentName:"p",href:"https://typeorm.io"},"TypeORM")," package for data access, we will use SQLite 3 database to store the user data. TypeORM supported several databases so it will be possible to change your configuration later appropriately. "),Object(a.b)("p",null,"Back to your terminal and execute command below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i --save typeorm @plumier/typeorm sqlite3 \n")),Object(a.b)("p",null,"Above code will install TypeORM package, Plumier TypeORM helper and SQLite driver into the package configuration file.  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i --save @plumier/jwt jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i --save @plumier/swagger\n")),Object(a.b)("h2",{id:"bootstrap-application"},"Bootstrap Application"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import Plumier, { ControllerFacility, WebApiFacility } from "plumier";\nimport dotenv from "dotenv"\nimport { TypeORMFacility } from "@plumier/typeorm";\nimport { JwtAuthFacility } from "@plumier/jwt";\nimport { SwaggerFacility } from "@plumier/swagger";\n\ndotenv.config()\n\nnew Plumier()\n    .set(new WebApiFacility())\n    .set(new TypeORMFacility())\n    .set(new ControllerFacility({controller: "./*/*-entity.{ts,js}"}))\n    .set(new JwtAuthFacility())\n    .set(new SwaggerFacility())\n    .listen(process.env.PORT ?? 8000)\n')),Object(a.b)("h2",{id:"user-entity"},"User Entity"),Object(a.b)("p",null,"Now we can start modelling our User by creating TypeORM entity. We define ",Object(a.b)("inlineCode",{parentName:"p"},"User")," entity with properties below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0},'import { applyTo, authorize, preSave, route, val } from "plumier"\nimport { Column, Entity } from "typeorm"\n\nimport { EntityBase } from "../_shared/entity-base"\nimport { genSalt, hash } from "bcryptjs"\n\n@authorize.public(applyTo("post"))\n@route.ignore(applyTo("get", "put", "patch", "delete"))\n@route.controller()\n@Entity()\nexport class User extends EntityBase {\n    @val.email()\n    @val.unique()\n    @Column()\n    email: string\n\n    @authorize.writeonly()\n    @Column()\n    password: string\n\n    @val.required()\n    @Column()\n    name: string\n\n    @val.url()\n    @Column({ default: "User" })\n    role: "Admin" | "User"\n\n    @preSave("post")\n    async hashPassword() {\n        this.password = await hash(this.password, await genSalt())\n    }\n}\n')),Object(a.b)("h2",{id:"add-configuration-file"},"Add Configuration File"),Object(a.b)("p",null,"Next we will add TypeORM configuration to be able to connect to our database. We will connect to SQLite in memory database.  Open ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file and copy paste source code below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"TYPEORM_CONNECTION = sqlite\nTYPEORM_DATABASE = :memory:\nTYPEORM_ENTITIES = src/index.ts\nTYPEORM_SYNCHRONIZE = true\nTYPEORM_LOGGING = false\n")),Object(a.b)("h2",{id:"enable-swagger"},"Enable Swagger"),Object(a.b)("p",null,"Next we will also add Swagger to our project for our front end developer to be able to inspect the request and response of our API. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i --save @plumier/swagger\n")),Object(a.b)("h2",{id:"run-the-project"},"Run The Project"),Object(a.b)("p",null,"Our project now is ready to start, go back to terminal app and execute command below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm start\n")),Object(a.b)("p",null,"If you are follow the steps above correctly, the terminal will print output like below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"> plumier-get-started@1.0.0 start /inheritance\n> ts-node-dev --inspect --no-deps -- src/index\n\nUsing ts-node version 8.10.1, typescript version 3.9.3\nDebugger listening on ws://127.0.0.1:9229/a20c2330-ee14-4196-849e-af89350049d7\nFor help, see: https://nodejs.org/en/docs/inspector\n\nRoute Analysis Report\n1. TypeORMControllerGeneric.list       -> GET    /api/v1/users\n2. TypeORMControllerGeneric.save(data) -> POST   /api/v1/users\n3. TypeORMControllerGeneric.get(id)    -> GET    /api/v1/users/:id\n4. TypeORMControllerGeneric.modify     -> PATCH  /api/v1/users/:id\n5. TypeORMControllerGeneric.replace    -> PUT    /api/v1/users/:id\n6. TypeORMControllerGeneric.delete(id) -> DELETE /api/v1/users/:id\n\nServer ready http://localhost:8000/\n")),Object(a.b)("h2",{id:"securing-resources"},"Securing Resources"),Object(a.b)("p",null,"We will also add login functionalities to our project using JWT token, and hash password using bcrypt. Install the appropriate packages like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i --save jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"JWT_SECRET = very secret key\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0},'import { preSave, val, authorize } from "plumier"\nimport { genSalt, hash } from "bcryptjs"\nimport { Column, Entity, PrimaryGeneratedColumn } from "typeorm"\n\n@Entity()\nexport class User {\n    @PrimaryGeneratedColumn()\n    @authorize.readonly()\n    id: number\n\n    @Column()\n    @val.email()\n    @val.required()\n    email: string\n\n    @Column()\n    @val.required()\n    name: string\n\n    @Column()\n    @val.required()\n    @authorize.readonly()\n    password: string\n\n    @Column({ default: "User" })\n    @authorize.write("Admin")\n    role: "User" | "Admin"\n\n    @preSave()\n    async preSaveHook() {\n        const salt = await genSalt()\n        this.password = await hash(this.password, salt)\n    }\n}\n')))}p.isMDXComponent=!0}}]);