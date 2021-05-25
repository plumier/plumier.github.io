(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[901],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(7560),a=n(8283),l=(n(2784),n(876)),i={id:"get-started",title:"Get Started"},o={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below.",source:"@site/docs/Get-Started.md",sourceDirName:".",slug:"/get-started",permalink:"/get-started",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Get-Started.md",version:"current",frontMatter:{id:"get-started",title:"Get Started"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Init Project",id:"init-project",children:[]},{value:"Project Starter File Structure",id:"project-starter-file-structure",children:[]},{value:"Add Dependencies",id:"add-dependencies",children:[]},{value:"Bootstrap Application",id:"bootstrap-application",children:[]},{value:"User Entity",id:"user-entity",children:[]},{value:"Add Configuration File",id:"add-configuration-file",children:[]},{value:"Enable Swagger",id:"enable-swagger",children:[]},{value:"Run The Project",id:"run-the-project",children:[]},{value:"Securing Resources",id:"securing-resources",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial will walk you through creating a Restful API managing a Todo data with some security features. The detail requirements of our API will be like below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"User register using email, name and password ."),(0,l.kt)("li",{parentName:"ul"},"Provided login using email and password which returned JWT token. "),(0,l.kt)("li",{parentName:"ul"},"Provide CRUD for TODO data, any user can create TODO, but only the owner of TODO can modify and delete it. "),(0,l.kt)("li",{parentName:"ul"},"Provide CRUD to add comment to specific TODO, any user can add comments to specific TODO, but only the owner can modify and delete it"),(0,l.kt)("li",{parentName:"ul"},"Provide endpoint to upload picture used for user profile picture")),(0,l.kt)("p",null,"List of endpoints will be created for above requirements are like below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Functions"),(0,l.kt)("th",{parentName:"tr",align:null},"Path"),(0,l.kt)("th",{parentName:"tr",align:null},"Http Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Accessible By"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User registration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/users")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"Public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User login"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/login")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"Public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create a TODO"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"All login users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modify/delete TODO by ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos/:id")),(0,l.kt)("td",{parentName:"tr",align:null},"PUT PATCH DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"Owner of TODO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get TODO by id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos/:id?select")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"All login users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get list of TODOs with filter and pagination"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos?filter")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"Public")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add comment to specific todo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos/:pid/comments")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"All login users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modify/remove comment to specific todo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/todos/:pid/comments/:id")),(0,l.kt)("td",{parentName:"tr",align:null},"PUT PATCH DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"Owner of comment")))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"To be able to follow this example you need some software installed in your computer."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v10 or newer "),(0,l.kt)("li",{parentName:"ul"},"Any terminal app"),(0,l.kt)("li",{parentName:"ul"},"Any text editor (VSCode preferred)")),(0,l.kt)("p",null,"Confirm that Node.js installed properly on your machine by execute command below in your terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node -v\n")),(0,l.kt)("h2",{id:"init-project"},"Init Project"),(0,l.kt)("p",null,"To get started we need to download ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/plumier/starter"},"blank Plumier project starter")," from GitHub repository. In this example we will use ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/degit"},"Degit")," to download it. Execute commands below in your terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npx degit plumier/starter#blank plumier-get-started\n")),(0,l.kt)("p",null,"Above command will download Degit locally then download Plumier blank project starter into ",(0,l.kt)("inlineCode",{parentName:"p"},"plumier-get-started")," directory. "),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you having problem executing ",(0,l.kt)("inlineCode",{parentName:"p"},"npx")," you can manually install Degit globally"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g degit\n")),(0,l.kt)("p",{parentName:"div"},"Then followed by executing Degit manually like below"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"degit plumier/starter#blank plumier-get-started\n")))),(0,l.kt)("p",null,"Enter to the project directory by executing command below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd plumier-get-started\n")),(0,l.kt)("p",null,"Install package dependencies by executing command below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,l.kt)("h2",{id:"project-starter-file-structure"},"Project Starter File Structure"),(0,l.kt)("p",null,"Open the project directory using your favorite text editor or IDE, on this example we will use VSCode. "),(0,l.kt)("p",null,"Plumier blank project starter contains minimal files required to create API with Node.js and TypeScript. The project structure is like below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- src/\n  - index.ts       // main entry of Plumier application\n- tsconfig.json    // typescript configuration file\n- package.json     // Node.js package configuration\n")),(0,l.kt)("p",null,"There are more project starter available on the ",(0,l.kt)("inlineCode",{parentName:"p"},"plumier/starter")," repository on each appropriate branch. "),(0,l.kt)("h2",{id:"add-dependencies"},"Add Dependencies"),(0,l.kt)("p",null,"Next step we will install some NPM package required to build our API. The project starter already provided some basic packages required. "),(0,l.kt)("p",null,"Next we will install ",(0,l.kt)("a",{parentName:"p",href:"https://typeorm.io"},"TypeORM")," package for data access, we will use SQLite 3 database to store the user data. TypeORM supported several databases so it will be possible to change your configuration later appropriately. "),(0,l.kt)("p",null,"Back to your terminal and execute command below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i --save typeorm @plumier/typeorm sqlite3 \n")),(0,l.kt)("p",null,"Above code will install TypeORM package, Plumier TypeORM helper and SQLite driver into the package configuration file.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i --save @plumier/jwt jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i --save @plumier/swagger\n")),(0,l.kt)("h2",{id:"bootstrap-application"},"Bootstrap Application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import Plumier, { ControllerFacility, WebApiFacility } from "plumier";\nimport dotenv from "dotenv"\nimport { TypeORMFacility } from "@plumier/typeorm";\nimport { JwtAuthFacility } from "@plumier/jwt";\nimport { SwaggerFacility } from "@plumier/swagger";\n\ndotenv.config()\n\nnew Plumier()\n    .set(new WebApiFacility())\n    .set(new TypeORMFacility())\n    .set(new ControllerFacility({controller: "./*/*-entity.{ts,js}"}))\n    .set(new JwtAuthFacility())\n    .set(new SwaggerFacility())\n    .listen(process.env.PORT ?? 8000)\n')),(0,l.kt)("h2",{id:"user-entity"},"User Entity"),(0,l.kt)("p",null,"Now we can start modelling our User by creating TypeORM entity. We define ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," entity with properties below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0},'import { applyTo, authorize, preSave, route, val } from "plumier"\nimport { Column, Entity } from "typeorm"\n\nimport { EntityBase } from "../_shared/entity-base"\nimport { genSalt, hash } from "bcryptjs"\n\n@authorize.public(applyTo("post"))\n@route.ignore(applyTo("get", "put", "patch", "delete"))\n@genericController()\n@Entity()\nexport class User extends EntityBase {\n    @val.email()\n    @val.unique()\n    @Column()\n    email: string\n\n    @authorize.writeonly()\n    @Column()\n    password: string\n\n    @val.required()\n    @Column()\n    name: string\n\n    @val.url()\n    @Column({ default: "User" })\n    role: "Admin" | "User"\n\n    @preSave("post")\n    async hashPassword() {\n        this.password = await hash(this.password, await genSalt())\n    }\n}\n')),(0,l.kt)("h2",{id:"add-configuration-file"},"Add Configuration File"),(0,l.kt)("p",null,"Next we will add TypeORM configuration to be able to connect to our database. We will connect to SQLite in memory database.  Open ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file and copy paste source code below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TYPEORM_CONNECTION = sqlite\nTYPEORM_DATABASE = :memory:\nTYPEORM_ENTITIES = src/index.ts\nTYPEORM_SYNCHRONIZE = true\nTYPEORM_LOGGING = false\n")),(0,l.kt)("h2",{id:"enable-swagger"},"Enable Swagger"),(0,l.kt)("p",null,"Next we will also add Swagger to our project for our front end developer to be able to inspect the request and response of our API. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i --save @plumier/swagger\n")),(0,l.kt)("h2",{id:"run-the-project"},"Run The Project"),(0,l.kt)("p",null,"Our project now is ready to start, go back to terminal app and execute command below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm start\n")),(0,l.kt)("p",null,"If you are follow the steps above correctly, the terminal will print output like below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> plumier-get-started@1.0.0 start /inheritance\n> ts-node-dev --inspect --no-deps -- src/index\n\nUsing ts-node version 8.10.1, typescript version 3.9.3\nDebugger listening on ws://127.0.0.1:9229/a20c2330-ee14-4196-849e-af89350049d7\nFor help, see: https://nodejs.org/en/docs/inspector\n\nRoute Analysis Report\n1. TypeORMControllerGeneric.list       -> GET    /api/v1/users\n2. TypeORMControllerGeneric.save(data) -> POST   /api/v1/users\n3. TypeORMControllerGeneric.get(id)    -> GET    /api/v1/users/:id\n4. TypeORMControllerGeneric.modify     -> PATCH  /api/v1/users/:id\n5. TypeORMControllerGeneric.replace    -> PUT    /api/v1/users/:id\n6. TypeORMControllerGeneric.delete(id) -> DELETE /api/v1/users/:id\n\nServer ready http://localhost:8000/\n")),(0,l.kt)("h2",{id:"securing-resources"},"Securing Resources"),(0,l.kt)("p",null,"We will also add login functionalities to our project using JWT token, and hash password using bcrypt. Install the appropriate packages like below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i --save jsonwebtoken @types/jsonwebtoken @plumier/jwt bcryptjs @types/bcryptjs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"JWT_SECRET = very secret key\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="File: src/user/user-entity.ts"',title:'"File:','src/user/user-entity.ts"':!0},'import { preSave, val, authorize } from "plumier"\nimport { genSalt, hash } from "bcryptjs"\nimport { Column, Entity, PrimaryGeneratedColumn } from "typeorm"\n\n@Entity()\nexport class User {\n    @PrimaryGeneratedColumn()\n    @authorize.readonly()\n    id: number\n\n    @Column()\n    @val.email()\n    @val.required()\n    email: string\n\n    @Column()\n    @val.required()\n    name: string\n\n    @Column()\n    @val.required()\n    @authorize.readonly()\n    password: string\n\n    @Column({ default: "User" })\n    @authorize.write("Admin")\n    role: "User" | "Admin"\n\n    @preSave()\n    async preSaveHook() {\n        const salt = await genSalt()\n        this.password = await hash(this.password, salt)\n    }\n}\n')))}d.isMDXComponent=!0}}]);