(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(111)),i={id:"tutorial-01",title:"Get Started"},l={unversionedId:"tutorial-01",id:"tutorial-01",isDocsHomePage:!1,title:"Get Started",description:"This tutorial will walk you through creating a Restful API managing a Todo data with MySQL database, first we will learn about how to create a Plumier project, then we will learn how to create CRUD API using generic controller then finally we add authorization to protect the data.",source:"@site/docs/Tutorial-01.md",slug:"/tutorial-01",permalink:"/tutorial-01",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Tutorial-01.md",version:"current",sidebar:"overview",previous:{title:"Fundamentals",permalink:"/"},next:{title:"Controller",permalink:"/controller"}},c=[{value:"Software Requirements",id:"software-requirements",children:[]},{value:"Init Project",id:"init-project",children:[]},{value:"Project Starter File Structure",id:"project-starter-file-structure",children:[]},{value:"Running The Project",id:"running-the-project",children:[]},{value:"Setup MySQL Connection",id:"setup-mysql-connection",children:[]},{value:"Add Root Path",id:"add-root-path",children:[]},{value:"Testing API Using Swagger",id:"testing-api-using-swagger",children:[]},{value:"Add Todo API",id:"add-todo-api",children:[]},{value:"Todo ResourceOwner Definition",id:"todo-resourceowner-definition",children:[]},{value:"Nested API for Todo Comment",id:"nested-api-for-todo-comment",children:[]},{value:"Comment Resource Owner",id:"comment-resource-owner",children:[]}],s={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This tutorial will walk you through creating a Restful API managing a Todo data with MySQL database, first we will learn about how to create a Plumier project, then we will learn how to create CRUD API using generic controller then finally we add authorization to protect the data."),Object(a.b)("h2",{id:"software-requirements"},"Software Requirements"),Object(a.b)("p",null,"To be able to follow this example you need some software installed in your computer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v10 or newer "),Object(a.b)("li",{parentName:"ul"},"Any terminal app"),Object(a.b)("li",{parentName:"ul"},"Any text editor, in this example using VSCode"),Object(a.b)("li",{parentName:"ul"},"MySQL database ")),Object(a.b)("h2",{id:"init-project"},"Init Project"),Object(a.b)("p",null,"To get started we need to download ",Object(a.b)("a",{parentName:"p",href:"https://github.com/plumier/starters/tree/master/rest-api-typeorm"},"TypeORM Rest API project starters")," from GitHub repository. In this example we will use ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/degit"},"Degit")," to download it. "),Object(a.b)("p",null,"Execute commands below in your terminal to download the project starter"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx degit plumier/starters/rest-api-typeorm todo-api\n")),Object(a.b)("p",null,"Above command will download Degit locally then download Plumier TypeORM Rest API project starter into ",Object(a.b)("inlineCode",{parentName:"p"},"todo-api")," directory. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you having problem executing ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," you can manually install Degit globally"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i -g degit \n")),Object(a.b)("p",{parentName:"div"},"Then followed by executing Degit manually like below"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},"degit plumier/starters/rest-api-typeorm todo-api\n")))),Object(a.b)("p",null,"Enter to the project directory by executing command below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cd todo-api\n")),Object(a.b)("p",null,"Install package dependencies by executing command below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(a.b)("h2",{id:"project-starter-file-structure"},"Project Starter File Structure"),Object(a.b)("p",null,"Open the project directory using your favorite text editor or IDE, on this example we will use VSCode. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"project structure",src:n(190).default})),Object(a.b)("p",null,"Project starter shipped with a user management and security functionality setup to secure the API. Spent some time to read the ",Object(a.b)("inlineCode",{parentName:"p"},"user-and-security.md")," doc to get understanding on how the user management and security setup works."),Object(a.b)("p",null,"Project starter separate files per resource under ",Object(a.b)("inlineCode",{parentName:"p"},"src/api")," directory, each file must follow the naming convention."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"File ends with ",Object(a.b)("inlineCode",{parentName:"li"},"-controller.ts")," contains codes for controller."),Object(a.b)("li",{parentName:"ul"},"File ends with ",Object(a.b)("inlineCode",{parentName:"li"},"-entity.ts")," contains entities or first class entity."),Object(a.b)("li",{parentName:"ul"},"File ends with ",Object(a.b)("inlineCode",{parentName:"li"},"-policy.ts")," contains authorization policy logic.")),Object(a.b)("p",null,"All file stays in ",Object(a.b)("inlineCode",{parentName:"p"},"_shared")," directory intended to be shared among the sibling directories."),Object(a.b)("p",null,"You can change those behavior on Plumier application bootstrap on ",Object(a.b)("inlineCode",{parentName:"p"},"app.ts")," file. "),Object(a.b)("h2",{id:"running-the-project"},"Running The Project"),Object(a.b)("p",null,"After all dependencies installed then it should be good to go, but before we start codding we need to provide required environment variable to make the project work correctly."),Object(a.b)("p",null,"Rename the ",Object(a.b)("inlineCode",{parentName:"p"},".env-example")," file into ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file, then execute command below to run the project"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm run debug\n")),Object(a.b)("p",null,"If you are follow step above correctly then above code will print message indicating it serve CRUD user API like below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"> rest-api-typeorm@1.0.0 debug todo-api\n> ts-node-dev --inspect -- src/index\n\n[INFO] 04:38:03 ts-node-dev ver. 1.1.1 (using ts-node ver. 9.1.1, typescript ver. 4.1.3)\nDebugger listening on ws://127.0.0.1:9229/d91c5d70-332a-4880-bf63-aa3c880115b6\nFor help, see: https://nodejs.org/en/docs/inspector\n\nRoute Analysis Report\n1. AuthController.login(email, password)    -> Public        POST   /auth/login\n2. AuthController.refresh(user)             -> RefreshToken  POST   /auth/refresh\n3. AuthController.logout()                  -> Private       GET    /auth/logout\n4. TypeORMControllerGeneric.list            -> Admin         GET    /users\n5. TypeORMControllerGeneric.save(data, ctx) -> Public        POST   /users\n6. TypeORMControllerGeneric.get             -> ResourceOwner GET    /users/:id\n7. TypeORMControllerGeneric.modify          -> ResourceOwner PATCH  /users/:id\n8. TypeORMControllerGeneric.replace         -> ResourceOwner PUT    /users/:id\n9. TypeORMControllerGeneric.delete(id, ctx) -> ResourceOwner DELETE /users/:id\n")),Object(a.b)("p",null,"Above is the route analysis report created by Plumier route generator system, it prints generated routes from controllers and generic controllers during the generation process, it may print issues on each route if occur."),Object(a.b)("p",null,"If you see above routes, there are two resources currently hosted that is ",Object(a.b)("inlineCode",{parentName:"p"},"/auth")," and ",Object(a.b)("inlineCode",{parentName:"p"},"/users"),". Auth resource used to handle authentication its put on the ",Object(a.b)("inlineCode",{parentName:"p"},"api/auth/auth-controller.ts")," file. Its handled by a common controller, on the left of the route analysis report you can see the action handles the route ",Object(a.b)("inlineCode",{parentName:"p"},"AuthController.login(email, password)"),". "),Object(a.b)("p",null,"The User resource is quite different, you can see the source code in ",Object(a.b)("inlineCode",{parentName:"p"},"api/users/user-entity.ts")," it uses first class entity with ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," decorator which means its handled by a generic controller. You can see also on the left of the route analysis report the action handled the routes uses ",Object(a.b)("inlineCode",{parentName:"p"},"TypeORMControllerGeneric"),"."),Object(a.b)("h2",{id:"setup-mysql-connection"},"Setup MySQL Connection"),Object(a.b)("p",null,"By default project starter uses SQLite database driver, in this example we will install MySQL database and change the appropriate connection string on the ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file. Execute command below on your terminal app."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm install --save mysql \n")),Object(a.b)("p",null,"Above will install mysql driver and modify the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file, you may uninstall the ",Object(a.b)("inlineCode",{parentName:"p"},"sqlite3")," driver by removing it on the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file, but its not necessary need to do on this example."),Object(a.b)("p",null,"Create MySQL database named ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," with any MySQL client and change the TypeORM configuration section on ",Object(a.b)("inlineCode",{parentName:"p"},".env")," like below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'# TypeORM configurations\nTYPEORM_URL = "mysql://<username>:<password>@localhost/todo"\nTYPEORM_ENTITIES = "src/api/**/*-*(entity|controller).*(ts|js)"\nTYPEORM_SYNCHRONIZE = true\nTYPEORM_LOGGING = false\n')),Object(a.b)("p",null,"Restart the API which previously running by pressing ",Object(a.b)("inlineCode",{parentName:"p"},"ctl+c")," on the terminal app then re-run the command below to restart it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm run debug\n")),Object(a.b)("h2",{id:"add-root-path"},"Add Root Path"),Object(a.b)("p",null,"On this step we will add API version by adding root path ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1")," for all generated routes. To do that we will need to configure the Plumier application bootstrap."),Object(a.b)("p",null,"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"src/app.ts")," file and locate the ",Object(a.b)("inlineCode",{parentName:"p"},"ControllerFacility")," add another configuration ",Object(a.b)("inlineCode",{parentName:"p"},'rootPath: "/api/v1"')," on the parameter, so the code will be like below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3}","{3}":!0},'.set(new ControllerFacility({ \n    controller: "./api/**/*-*(entity|controller).*(ts|js)",\n    rootPath: "/api/v1"\n}))\n')),Object(a.b)("p",null,"Save the file and see the log on terminal app will show our change like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Route Analysis Report\n1. AuthController.login(email, password)    -> Public        POST   /api/v1/auth/login\n2. AuthController.refresh(user)             -> RefreshToken  POST   /api/v1/auth/refresh\n3. AuthController.logout()                  -> Private       GET    /api/v1/auth/logout\n4. TypeORMControllerGeneric.list            -> Admin         GET    /api/v1/users\n5. TypeORMControllerGeneric.save(data, ctx) -> Public        POST   /api/v1/users\n6. TypeORMControllerGeneric.get             -> ResourceOwner GET    /api/v1/users/:id\n7. TypeORMControllerGeneric.modify          -> ResourceOwner PATCH  /api/v1/users/:id\n8. TypeORMControllerGeneric.replace         -> ResourceOwner PUT    /api/v1/users/:id\n9. TypeORMControllerGeneric.delete(id, ctx) -> ResourceOwner DELETE /api/v1/users/:id\n")),Object(a.b)("p",null,"Above showing that now all the routes path started with ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1")," with all the routes generated."),Object(a.b)("h2",{id:"testing-api-using-swagger"},"Testing API Using Swagger"),Object(a.b)("p",null,"The project starter comes with swagger ui under ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8000/swagger")," we can use it to test the User API provided by the project starter. "),Object(a.b)("p",null,"Navigate to the ",Object(a.b)("inlineCode",{parentName:"p"},"POST /api/v1/users")," and provide the email, name and password like below"),Object(a.b)("p",null,Object(a.b)("img",{alt:"add user",src:n(191).default})),Object(a.b)("p",null,"Above process will return the ID of the inserted record ",Object(a.b)("inlineCode",{parentName:"p"},"{ id: 1 }"),". Next we can try the login function by navigating to the ",Object(a.b)("inlineCode",{parentName:"p"},"POST /auth/login")," endpoint and provide email and password that we entered previously. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"login",src:n(192).default})),Object(a.b)("p",null,"Above will returned two JWT tokens ",Object(a.b)("inlineCode",{parentName:"p"},"{ token, refreshToken }")," and also writes the Authorization cookie to the browser. Now you are login to the system, try play around accessing private resource such as ",Object(a.b)("inlineCode",{parentName:"p"},"GET /api/v1/users/{id}")," like below. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"get user by id",src:n(193).default})),Object(a.b)("h2",{id:"add-todo-api"},"Add Todo API"),Object(a.b)("p",null,"Now we're ready for codding, we will add Todo resource to the application using a generic controller. Create new directory under ",Object(a.b)("inlineCode",{parentName:"p"},"/src/api")," named ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," and create new file named ",Object(a.b)("inlineCode",{parentName:"p"},"todo-entity.ts")," and copy paste code below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { authorize, bind, preSave, route, val } from "plumier"\nimport { BaseEntity, Column, Entity, ManyToOne } from "typeorm"\n\nimport { LoginUser } from "../_shared/login-user"\nimport { User } from "../user/user-entity"\n\n@route.controller(c => {\n    c.actions("Put", "Patch", "Delete").authorize("ResourceOwner", "Admin")\n})\n@Entity()\nexport class Todo extends BaseEntity {\n    @val.required()\n    @Column()\n    message: string\n\n    @Column({ default: false })\n    completed: boolean\n\n    @authorize.readonly()\n    @ManyToOne(x => User)\n    user: User\n\n    @preSave("post")\n    setUser(@bind.user() user: LoginUser) {\n        this.user = <User>{ id: user.userId }\n    }\n}\n')),Object(a.b)("p",null,"If you are a TypeORM user you may a bit familiar with above code. Above is a first class entity, its control most API behavior from the entity itself. "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," will inform Plumier that this entity handled by a generic controller. Provide simple configuration to set that the Todo data only can be modified (",Object(a.b)("inlineCode",{parentName:"p"},"PUT"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PATCH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE"),") by the ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," (user created the todo) and by the ",Object(a.b)("inlineCode",{parentName:"p"},"Admin")," of the API. "),Object(a.b)("p",null,"We apply validation on the ",Object(a.b)("inlineCode",{parentName:"p"},"message")," property, tells Plumier that this field is required. Plumier will automatically response 422 when this field value does not provided."),Object(a.b)("p",null,"We add ",Object(a.b)("inlineCode",{parentName:"p"},"@authorize.readonly()")," on the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," property because its value automatically populated using ",Object(a.b)("inlineCode",{parentName:"p"},"preSave")," request hook. "),Object(a.b)("p",null,"On ",Object(a.b)("inlineCode",{parentName:"p"},"preSave")," request hook we bind the current login user into the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," parameter and populate the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," property value. This ",Object(a.b)("inlineCode",{parentName:"p"},"setUser")," method will be executed before the entity saved into the database. Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"post")," parameter provided means this method only executed on POST method, other than that it will never executed."),Object(a.b)("p",null,"Save the file and see if the route analysis report showing result like below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"..... other routes ....\n4. TypeORMControllerGeneric.list            -> Private             GET    /api/v1/todos\n5. TypeORMControllerGeneric.save(data, ctx) -> Private             POST   /api/v1/todos\n6. TypeORMControllerGeneric.get             -> Private             GET    /api/v1/todos/:id\n7. TypeORMControllerGeneric.modify          -> ResourceOwner|Admin PATCH  /api/v1/todos/:id\n8. TypeORMControllerGeneric.replace         -> ResourceOwner|Admin PUT    /api/v1/todos/:id\n9. TypeORMControllerGeneric.delete(id, ctx) -> ResourceOwner|Admin DELETE /api/v1/todos/:id\n..... other routes ....\n")),Object(a.b)("p",null,"Now we ready to test our Todo API, go back to swagger ui and find out the ",Object(a.b)("inlineCode",{parentName:"p"},"POST /api/v1/todos")," endpoint and execute with data like below."),Object(a.b)("p",null,Object(a.b)("img",{alt:"insert todo",src:n(194).default})),Object(a.b)("p",null,"Above will return the new inserted record ID ",Object(a.b)("inlineCode",{parentName:"p"},"{ id: 1 }")," indicate that our API already work properly. You can play around with other API such as ",Object(a.b)("inlineCode",{parentName:"p"},"GET /api/v1/todos/{id}")," like below. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"get by id",src:n(195).default})),Object(a.b)("p",null,"Like you see above the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," property of the Todo entity populated properly with the current login user. Next step we will secure our API so it only can be modify and deleted by the owner of the Todo."),Object(a.b)("h2",{id:"todo-resourceowner-definition"},"Todo ResourceOwner Definition"),Object(a.b)("p",null,"If you look at the ",Object(a.b)("inlineCode",{parentName:"p"},"/api/user/user-policy.ts")," file you will see how the ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," auth policy defined using ",Object(a.b)("inlineCode",{parentName:"p"},"entityPolicy"),". Entity policy works only to specific entity defined, its logical since definition of ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," may vary among entity based on the data structure. In this step will will created definition for ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," specifically for Todo entity. "),Object(a.b)("p",null,"Create a new file under ",Object(a.b)("inlineCode",{parentName:"p"},"/api/todo")," named ",Object(a.b)("inlineCode",{parentName:"p"},"todo-policy.ts")," and copy paste code below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { entityPolicy } from "plumier"\nimport { getManager } from "typeorm"\n\nimport { Todo } from "./todo-entity"\n\nentityPolicy(Todo)\n    .register("ResourceOwner", async (ctx, id) => {\n        const repo = getManager().getRepository(Todo)\n        const todo = await repo.findOne(id, { relations: ["user"], cache: true })\n        return ctx.user?.userId === todo?.user?.id\n    })\n')),Object(a.b)("p",null,"Above is the definition of ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," for Todo and provide a callback function how we define the owner of the Todo data like this ",Object(a.b)("inlineCode",{parentName:"p"},"ctx.user.userId === todo.user.id"),". This callback function will be called several time: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"During route authorization evaluation, to check if user authorized to access the route."),Object(a.b)("li",{parentName:"ul"},"During parameter authorization evaluation, to check if user authorized to set entity property."),Object(a.b)("li",{parentName:"ul"},"During response authorization evaluation, to remove some property that not authorized to a user.")),Object(a.b)("p",null,"Based on above behavior, its necessary to cache the query to speed up the process. "),Object(a.b)("p",null,"The callback received two parameters the first is the Authorization Context and the second is the ID of the evaluated Todo data. The callback returned ",Object(a.b)("inlineCode",{parentName:"p"},"true")," to authorized the user other wise ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". "),Object(a.b)("p",null,"Now its time to test our auth policy, create another user using ",Object(a.b)("inlineCode",{parentName:"p"},"POST /api/v1/users")," API then login using ",Object(a.b)("inlineCode",{parentName:"p"},"POST /api/v1/login"),". Then try to delete our last inserted todo using the ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE /api/v1/todos/{id}")," like below. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"delete failed",src:n(196).default})),Object(a.b)("p",null,"Picture above showing that our auth policy successfully secured the API by returning 401. "),Object(a.b)("h2",{id:"nested-api-for-todo-comment"},"Nested API for Todo Comment"),Object(a.b)("p",null,"We are successfully created an API using a generic controller, next we will learn how to create nested API using nested generic controller. "),Object(a.b)("p",null,"Nested API is a restful best practice to provide parent - children API, usually used nested endpoint like ",Object(a.b)("inlineCode",{parentName:"p"},"/parents/{parentId}/children"),". "),Object(a.b)("p",null,"In this example we will form Todo -> Comment as a parent - children relation, since each Todo can have their own notes. We will provide an API using nested generic controller to do that. "),Object(a.b)("p",null,"First we need to define the Comment entity, create a directory under ",Object(a.b)("inlineCode",{parentName:"p"},"src/api")," named ",Object(a.b)("inlineCode",{parentName:"p"},"todo-comment"),", then create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"comment-entity.ts")," then copy paste code below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { authorize, bind, preSave, route, val } from "plumier"\nimport { Column, Entity, ManyToOne } from "typeorm"\n\nimport { EntityBase } from "../_shared/entity-base"\nimport { LoginUser } from "../_shared/login-user"\nimport { Todo } from "../todo/todo-entity"\nimport { User } from "../user/user-entity"\n\n@Entity()\nexport class Comment extends EntityBase {\n    @val.required()\n    @Column()\n    message: string\n\n    @authorize.readonly()\n    @ManyToOne(x => User)\n    user: User\n\n    @authorize.readonly()\n    @ManyToOne(x => Todo)\n    todo: Todo\n\n    @preSave("post")\n    setUser(@bind.user() user: LoginUser) {\n        this.user = <User>{ id: user.userId }\n    }\n}\n')),Object(a.b)("p",null,"Above is the Comment entity, the ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," entity set to readonly, since its a reverse property to the parent entity it will populated automatically by the generic controller."),Object(a.b)("p",null,"You may notice that it doesn't have ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," decorator. The most important thing is, nested generic controller require an array relation (one to many or many to many) than we can create the API by providing ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," on the relation property. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { Column, Entity, ManyToOne, OneToMany } from "typeorm"\n\nimport { Comment } from "../todo-comment/comment-entity"\n/** other imports **/\n\nexport class Todo extends EntityBase {\n\n    /** other properties **/\n\n    @route.controller(c => {\n        c.actions("Put", "Patch", "Delete").authorize("ResourceOwner", "Admin")\n    })\n    @OneToMany(x => Comment, x => x.todo)\n    comments: Comment[]\n}\n')),Object(a.b)("p",null,"Above showing that we modify our current Todo entity by adding a one to many relation to the comment entity. You can see also we add ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," decorator above the ",Object(a.b)("inlineCode",{parentName:"p"},"comments")," property means its will be handled by a nested generic controller."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Decorating property with ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," may make the code less cleaner, since the controller configuration stays in ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," directory instead of the ",Object(a.b)("inlineCode",{parentName:"p"},"todo-comment")," directory. Alternatively you can put ",Object(a.b)("inlineCode",{parentName:"p"},"@route.controller()")," above the Comment entity with ",Object(a.b)("inlineCode",{parentName:"p"},"useNested")," configuration like below."),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{2}","{2}":!0},'@route.controller(c => {\n    c.useNested(Todo, "comments")\n    c.actions("Put", "Patch", "Delete").authorize("ResourceOwner", "Admin")\n})\n@Entity()\nexport class Comment extends EntityBase { }\n')))),Object(a.b)("p",null,"Next you can save the file and see the route analysis report like below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"..... other routes ....\n10. TypeORMOneToMany...eneric.list           -> Private             GET    /api/v1/todos/:pid/comments\n11. TypeORMOneToMany...eneric.save           -> Private             POST   /api/v1/todos/:pid/comments\n12. TypeORMOneToMany...eneric.get            -> Private             GET    /api/v1/todos/:pid/comments/:id\n13. TypeORMOneToMany...eneric.modify         -> ResourceOwner|Admin PATCH  /api/v1/todos/:pid/comments/:id\n14. TypeORMOneToMany...eneric.replace        -> ResourceOwner|Admin PUT    /api/v1/todos/:pid/comments/:id\n15. TypeORMOneToMany...eneric.delete         -> ResourceOwner|Admin DELETE /api/v1/todos/:pid/comments/:id\n..... other routes ....\n")),Object(a.b)("p",null,"You see that the routes now handled by ",Object(a.b)("inlineCode",{parentName:"p"},"TypeORMOneToManyControllerGeneric")," and the endpoints is ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1/todos/:pid/comments"),". We used the Todo Comment API endpoints by providing the Todo ID like this ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1/todos/1/comments"),". "),Object(a.b)("p",null,"We can test our new API using swagger like the picture below. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"add comment",src:n(197).default})),Object(a.b)("p",null,"When successfully added a comment, try adding more comments to the Todo and then show all the inserted comments using ",Object(a.b)("inlineCode",{parentName:"p"},"GET /api/v1/todos/1/comments")," like picture below."),Object(a.b)("p",null,Object(a.b)("img",{alt:"get all comments",src:n(198).default})),Object(a.b)("p",null,"Try experimenting with filter and select parameter and see the change reflected in the response result. "),Object(a.b)("h2",{id:"comment-resource-owner"},"Comment Resource Owner"),Object(a.b)("p",null,"The last step, we need to define ",Object(a.b)("inlineCode",{parentName:"p"},"ResourceOwner")," for the Comment entity, the step is exactly the same like before. Create a new file named ",Object(a.b)("inlineCode",{parentName:"p"},"comment-policy.ts")," then copy paste code below. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { entityPolicy } from "plumier"\nimport { getManager } from "typeorm"\n\nimport { Comment } from "./comment-entity"\n\nentityPolicy(Comment)\n    .register("ResourceOwner", async (ctx, id) => {\n        const repo = getManager().getRepository(Comment)\n        const comment = await repo.findOne(id, { relations: ["user"], cache: true })\n        return ctx.user?.userId === comment?.user?.id\n    })\n')),Object(a.b)("p",null,"Code above is mostly the same as before. We can test our auth policy by using other user to delete the comment like picture below."),Object(a.b)("p",null,Object(a.b)("img",{alt:"delete failed",src:n(199).default})),Object(a.b)("p",null,"Above showing that other user failed to delete the comment by returned 401. You can play around with other API and see how the its reflect in the response. "),Object(a.b)("p",null,"Thats it! this is the end of the get started tutorial, don't forget that Plumier has more feature for you to explore."))}p.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-structure-501cdd62d051b2d7a6c084ffd2932633.png"},191:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-user-post-41095257591ec581cd5f6271b04e8393.png"},192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-login-df4f38d992cce5d307778969deb2c07c.png"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-user-get-by-id-127aebcaeb7651269d5a8c10a86c6aaf.png"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-todo-post-416117ff300f9e26416d32c704bbd023.png"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-todo-get-by-id-85d700b50ac246b828b889908a3dd57f.png"},196:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-todo-delete-failed-597a4c4c47a4e0cf678e20e1d3adf89c.png"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-comment-post-9366e4f83b14a74a88521632b5a009ce.png"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-comment-get-all-820647c6db39078236f21439aaf4c264.png"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-comment-delete-failed-336adf00a735bc52a1d042c68e6fb972.png"}}]);