(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(112)),i={id:"get-started",title:"Get Started"},o={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below.",source:"@site/docs/Get-Started.md",slug:"/get-started",permalink:"/get-started",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Get-Started.md",version:"current"},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Init Project",id:"init-project",children:[]},{value:"Project Starter File Structure",id:"project-starter-file-structure",children:[]},{value:"Add Dependencies",id:"add-dependencies",children:[]},{value:"Bootstrap Application",id:"bootstrap-application",children:[]},{value:"User Entity",id:"user-entity",children:[]},{value:"Add Configuration File",id:"add-configuration-file",children:[]},{value:"Enable Swagger",id:"enable-swagger",children:[]},{value:"Run The Project",id:"run-the-project",children:[]},{value:"Securing Resources",id:"securing-resources",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"User register using email, name and password ."),Object(l.b)("li",{parentName:"ul"},"Provided login using email and password which returned JWT token. "),Object(l.b)("li",{parentName:"ul"},"Provide CRUD for TODO data, any user can create TODO, but only the owner of TODO can modify and delete it. "),Object(l.b)("li",{parentName:"ul"},"Provide CRUD to add comment to specific TODO, any user can add comments to specific TODO, but only the owner can modify and delete it"),Object(l.b)("li",{parentName:"ul"},"Provide endpoint to upload picture used for user profile picture")),Object(l.b)("p",null,"List of endpoints will be created for above requirements are like below."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Functions"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Http Method"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Accessible By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User registration"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/users")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User login"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/login")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Create a TODO"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All login users")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify/delete TODO by ID"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos/:id")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PUT PATCH DELETE"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Owner of TODO")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Get TODO by id"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos/:id?select")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All login users")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Get list of TODOs with filter and pagination"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos?filter")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Add comment to specific todo"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos/:pid/comments")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All login users")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify/remove comment to specific todo"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/todos/:pid/comments/:id")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PUT PATCH DELETE"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Owner of comment")))),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"To be able to follow this example you need some software installed in your computer."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," v10 or newer "),Object(l.b)("li",{parentName:"ul"},"Any terminal app"),Object(l.b)("li",{parentName:"ul"},"Any text editor (VSCode preferred)")),Object(l.b)("p",null,"Confirm that Node.js installed properly on your machine by execute command below in your terminal"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"node -v\n")),Object(l.b)("h2",{id:"init-project"},"Init Project"),Object(l.b)("p",null,"To get started we need to download ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/plumier/starter"}),"blank Plumier project starter")," from GitHub repository. In this example we will use ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/degit"}),"Degit")," to download it. Execute commands below in your terminal"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx degit plumier/starter#blank plumier-get-started\n")),Object(l.b)("p",null,"Above command will download Degit locally then download Plumier blank project starter into ",Object(l.b)("inlineCode",{parentName:"p"},"plumier-get-started")," directory. "),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you having problem executing ",Object(l.b)("inlineCode",{parentName:"p"},"npx")," you can manually install Degit globally"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -g degit\n")),Object(l.b)("p",{parentName:"div"},"Then followed by executing Degit manually like below"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"degit plumier/starter#blank plumier-get-started\n")))),Object(l.b)("p",null,"Enter to the project directory by executing command below"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cd plumier-get-started\n")),Object(l.b)("p",null,"Install package dependencies by executing command below "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(l.b)("h2",{id:"project-starter-file-structure"},"Project Starter File Structure"),Object(l.b)("p",null,"Open the project directory using your favorite text editor or IDE, on this example we will use VSCode. "),Object(l.b)("p",null,"Plumier blank project starter contains minimal files required to create API with Node.js and TypeScript. The project structure is like below"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"- src/\n  - index.ts       // main entry of Plumier application\n- tsconfig.json    // typescript configuration file\n- package.json     // Node.js package configuration\n")),Object(l.b)("p",null,"There are more project starter available on the ",Object(l.b)("inlineCode",{parentName:"p"},"plumier/starter")," repository on each appropriate branch. "),Object(l.b)("h2",{id:"add-dependencies"},"Add Dependencies"),Object(l.b)("p",null,"Next step we will install some NPM package required to build our API. The project starter already provided some basic packages required. "),Object(l.b)("p",null,"Next we will install ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io"}),"TypeORM")," package for data access, we will use SQLite 3 database to store the user data. TypeORM supported several databases so it will be possible to change your configuration later appropriately. "),Object(l.b)("p",null,"Back to your terminal and execute command below"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save typeorm @plumier/typeorm sqlite3 \n")),Object(l.b)("p",null,"Above code will install TypeORM package, Plumier TypeORM helper and SQLite driver into the package configuration file.  "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save @plumier/jwt jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save @plumier/swagger\n")),Object(l.b)("h2",{id:"bootstrap-application"},"Bootstrap Application"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import Plumier, { ControllerFacility, WebApiFacility } from "plumier";\nimport dotenv from "dotenv"\nimport { TypeORMFacility } from "@plumier/typeorm";\nimport { JwtAuthFacility } from "@plumier/jwt";\nimport { SwaggerFacility } from "@plumier/swagger";\n\ndotenv.config()\n\nnew Plumier()\n    .set(new WebApiFacility())\n    .set(new TypeORMFacility())\n    .set(new ControllerFacility({controller: "./*/*-entity.{ts,js}"}))\n    .set(new JwtAuthFacility())\n    .set(new SwaggerFacility())\n    .listen(process.env.PORT ?? 8000)\n')),Object(l.b)("h2",{id:"user-entity"},"User Entity"),Object(l.b)("p",null,"Now we can start modelling our User by creating TypeORM entity. We define ",Object(l.b)("inlineCode",{parentName:"p"},"User")," entity with properties below "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0}),'import { applyTo, authorize, preSave, route, val } from "plumier"\nimport { Column, Entity } from "typeorm"\n\nimport { EntityBase } from "../_shared/entity-base"\nimport { genSalt, hash } from "bcryptjs"\n\n@authorize.public(applyTo("post"))\n@route.ignore(applyTo("get", "put", "patch", "delete"))\n@route.controller()\n@Entity()\nexport class User extends EntityBase {\n    @val.email()\n    @val.unique()\n    @Column()\n    email: string\n\n    @authorize.writeonly()\n    @Column()\n    password: string\n\n    @val.required()\n    @Column()\n    name: string\n\n    @val.url()\n    @Column({ default: "User" })\n    role: "Admin" | "User"\n\n    @preSave("post")\n    async hashPassword() {\n        this.password = await hash(this.password, await genSalt())\n    }\n}\n')),Object(l.b)("h2",{id:"add-configuration-file"},"Add Configuration File"),Object(l.b)("p",null,"Next we will add TypeORM configuration to be able to connect to our database. We will connect to SQLite in memory database.  Open ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file and copy paste source code below"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"TYPEORM_CONNECTION = sqlite\nTYPEORM_DATABASE = :memory:\nTYPEORM_ENTITIES = src/index.ts\nTYPEORM_SYNCHRONIZE = true\nTYPEORM_LOGGING = false\n")),Object(l.b)("h2",{id:"enable-swagger"},"Enable Swagger"),Object(l.b)("p",null,"Next we will also add Swagger to our project for our front end developer to be able to inspect the request and response of our API. "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save @plumier/swagger\n")),Object(l.b)("h2",{id:"run-the-project"},"Run The Project"),Object(l.b)("p",null,"Our project now is ready to start, go back to terminal app and execute command below"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm start\n")),Object(l.b)("p",null,"If you are follow the steps above correctly, the terminal will print output like below "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"> plumier-get-started@1.0.0 start /inheritance\n> ts-node-dev --inspect --no-deps -- src/index\n\nUsing ts-node version 8.10.1, typescript version 3.9.3\nDebugger listening on ws://127.0.0.1:9229/a20c2330-ee14-4196-849e-af89350049d7\nFor help, see: https://nodejs.org/en/docs/inspector\n\nRoute Analysis Report\n1. TypeORMControllerGeneric.list       -> GET    /api/v1/users\n2. TypeORMControllerGeneric.save(data) -> POST   /api/v1/users\n3. TypeORMControllerGeneric.get(id)    -> GET    /api/v1/users/:id\n4. TypeORMControllerGeneric.modify     -> PATCH  /api/v1/users/:id\n5. TypeORMControllerGeneric.replace    -> PUT    /api/v1/users/:id\n6. TypeORMControllerGeneric.delete(id) -> DELETE /api/v1/users/:id\n\nServer ready http://localhost:8000/\n")),Object(l.b)("h2",{id:"securing-resources"},"Securing Resources"),Object(l.b)("p",null,"We will also add login functionalities to our project using JWT token, and hash password using bcrypt. Install the appropriate packages like below."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"JWT_SECRET = very secret key\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0}),'import { preSave, val, authorize } from "plumier"\nimport { genSalt, hash } from "bcryptjs"\nimport { Column, Entity, PrimaryGeneratedColumn } from "typeorm"\n\n@Entity()\nexport class User {\n    @PrimaryGeneratedColumn()\n    @authorize.readonly()\n    id: number\n\n    @Column()\n    @val.email()\n    @val.required()\n    email: string\n\n    @Column()\n    @val.required()\n    name: string\n\n    @Column()\n    @val.required()\n    @authorize.readonly()\n    password: string\n\n    @Column({ default: "User" })\n    @authorize.write("Admin")\n    role: "User" | "Admin"\n\n    @preSave()\n    async preSaveHook() {\n        const salt = await genSalt()\n        this.password = await hash(this.password, salt)\n    }\n}\n')))}p.isMDXComponent=!0}}]);