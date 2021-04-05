(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(116)),l={id:"plumier-in-five-minutes",title:"Plumier in Five Minutes"},o={unversionedId:"plumier-in-five-minutes",id:"plumier-in-five-minutes",isDocsHomePage:!1,title:"Plumier in Five Minutes",description:"Plumier is A TypeScript backend framework focuses on development productivity to help you create a robust, secure and fast Node.js restful API delightfully. Plumier shipped with some built-in feature to speed up your API development.",source:"@site/docs/Plumier-In-Five-Minutes.md",slug:"/plumier-in-five-minutes",permalink:"/plumier-in-five-minutes",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Plumier-In-Five-Minutes.md",version:"current",sidebar:"overview",next:{title:"Quick Start",permalink:"/quick-start"}},b=[{value:"First Class Entity",id:"first-class-entity",children:[]},{value:"Validators",id:"validators",children:[]},{value:"Common Controller",id:"common-controller",children:[]},{value:"Open API 3.0",id:"open-api-30",children:[]},{value:"Facilities",id:"facilities",children:[]},{value:"Code Style",id:"code-style",children:[]}],c={toc:b};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Plumier is A TypeScript backend framework focuses on development productivity to help you create a robust, secure and fast Node.js restful API delightfully. Plumier shipped with some built-in feature to speed up your API development."),Object(i.b)("h2",{id:"first-class-entity"},"First Class Entity"),Object(i.b)("p",null,"A first class entity is an ORM Entity with control to most framework functionalities (validation, authorization, data type schema, generated restful API). On the background Plumier creates a generic controller on the fly for each first class entity to create CRUD restful API for each entity."),Object(i.b)("h4",{id:"simplest-first-class-entity"},"Simplest First Class Entity"),Object(i.b)("p",null,"Plumier supported TypeORM entity to be used as first class entity, simplest implementation of first class entity is like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{6}","{6}":!0},'import { route, val} from "plumier";\nimport { Column, Entity, PrimaryGeneratedColumn } from "typeorm";\n\n// create generic controller based on Item entity on the fly.\n// handles restful API post, put, patch, delete, get (by id), get (list)\n@genericController()\n@Entity()\nexport class Item {\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    name: string;\n\n    @Column()\n    basePrice: number;\n\n    @Column()\n    price: number;\n}\n')),Object(i.b)("p",null,"Above code generated into six restful routes like below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Method"),Object(i.b)("th",{parentName:"tr",align:null},"Path"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"POST"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items")),Object(i.b)("td",{parentName:"tr",align:null},"Create new item")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GET"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items")),Object(i.b)("td",{parentName:"tr",align:null},"Get list of items with paging, filter, order and projection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GET"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Get single item by id with projection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PUT"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Replace item by id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PATCH"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Modify item by id (required validation ignored)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DELETE"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/items/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Delete item by id")))),Object(i.b)("h4",{id:"nested-restful-api"},"Nested Restful API"),Object(i.b)("p",null,"ORM entities may contains relations to represent join to another table, Plumier provided nested generic controller to perform parent children operation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{11}","{11}":!0},'import { route } from "plumier"\nimport { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"\n\n@Entity()\nexport class Post {\n    @PrimaryGeneratedColumn()\n    id: number\n\n    /** other properties **/\n\n    @genericController()\n    @OneToMany(x => Comment, x => x.post)\n    comments: Comment[]\n}\n\n@Entity()\nexport class Comment {\n    @PrimaryGeneratedColumn()\n    id: number\n\n    @Column()\n    comment:string\n\n    @ManyToOne(x => Post, x => x.comments)\n    post:Post\n}\n')),Object(i.b)("p",null,"Above code showing that the relation property ",Object(i.b)("inlineCode",{parentName:"p"},"comments")," marked with ",Object(i.b)("inlineCode",{parentName:"p"},"@genericController()")," decorators. It tells Plumier to create a nested generic controller to perform parent children operation. Above code will generated into routes below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Method"),Object(i.b)("th",{parentName:"tr",align:null},"Path"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"POST"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments")),Object(i.b)("td",{parentName:"tr",align:null},"Create new post's comment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GET"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments")),Object(i.b)("td",{parentName:"tr",align:null},"Get list of post's comments with paging, filter, order and projection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GET"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Get single post's comment by id with projection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PUT"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Replace post's comment  by id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PATCH"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Modify post's comment property by id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DELETE"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/posts/:pid/comments/:id")),Object(i.b)("td",{parentName:"tr",align:null},"Delete post's comment by id")))),Object(i.b)("h4",{id:"first-class-entity-security"},"First Class Entity Security"),Object(i.b)("p",null,"Entities may contains properties that sensitive to some type of users, you may need to restrict user to access specific API endpoint or even you may need to restrict user to set/see specific property on request or response body. "),Object(i.b)("p",null,"Plumier provided declarative authorization by specifying authorization policy name that can be applied to secure API endpoints, property of request/response body etc. Furthermore you define the authorization policy logic separately."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,15,20}","{4,15,20}":!0},'@genericController((config) => {\n    // authorize Supervisor and Staff \n    // can mutate (post, put, patch, delete) the resource\n    config.mutators().authorize("Supervisor", "Staff");\n})\n@Entity()\nexport class Item {\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    name: string;\n\n    // authorize response body property only can be seen by Supervisor and Staff \n    @authorize.read("Supervisor", "Staff")\n    @Column()\n    basePrice: number;\n\n    // authorize request body property only can be set by Supervisor and Staff \n    @authorize.write("Supervisor")\n    @Column()\n    price: number;\n}\n')),Object(i.b)("p",null,"Code above showing that ",Object(i.b)("inlineCode",{parentName:"p"},"Supervisor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Staff")," is an authorization policy. Next you define your authorization policy logic using authorization policy builder like below. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { authPolicy } from "plumier"\n\n// register policies (role) with authorization policy builder\nauthPolicy()\n    // register Supervisor\n    .register("Supervisor", ({ user }) => {\n        // user is the JWT claim from request header\n        return user?.role === "Supervisor"\n    })\n    // register Staff\n    .register("Staff", ({ user }) => {\n        return user?.role === "Staff"\n    })\n')),Object(i.b)("p",null,"You register the authorization policy by providing the policy name and an authorization callback. The callback will be called during authorization evaluation. "),Object(i.b)("h4",{id:"auto-generated-values"},"Auto Generated Values"),Object(i.b)("p",null,"Entities may contains properties that is auto generated, such as ",Object(i.b)("inlineCode",{parentName:"p"},"createdBy")," property that needs to automatically assigned with the current login user ID. "),Object(i.b)("p",null,"Furthermore you may need to restrict anyone to set the ",Object(i.b)("inlineCode",{parentName:"p"},"createdBy")," property from the request body."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'@genericController()\n@Entity()\nexport class Item {\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    // restrict user to set property from request body\n    @authorize.readonly()\n    // created date column provided by TypeORM\n    @CreateDateColumn()\n    createdAt: Date\n    \n    // restrict user to set property from request body\n    @authorize.readonly()\n    @Column()\n    createdBy:User\n\n    // executed method before entity saved, only on post request\n    @preSave("post")\n    // bind user parameter with the JWT claim from request header\n    assignUser(@bind.user() user:LoginUser){\n        // assign createdBy with current login user from JWT claim\n        this.createdBy = <User>{ id: user.userId }\n    }\n}\n')),Object(i.b)("p",null,"Code above showing that we use the request hook ",Object(i.b)("inlineCode",{parentName:"p"},"@preSave()")," to make the ",Object(i.b)("inlineCode",{parentName:"p"},"assignUser")," method executed before the entity being saved to the database. "),Object(i.b)("h4",{id:"define-filterable-fields"},"Define Filterable Fields"),Object(i.b)("p",null,"Generic controller provided functionalities to refine the API response, such as filter, paging, order and projection. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{10,14,21}","{10,14,21}":!0},'import { route, authorize } from "plumier"\nimport { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"\n\n@genericController()\n@Entity()\nexport class Post {\n    @PrimaryGeneratedColumn()\n    id: number\n\n    @Column()\n    slug:string\n\n    @Column()\n    title:string\n\n    @Column()\n    content:string\n\n    @CreateDateColumn()\n    createdAt:Date\n}\n')),Object(i.b)("p",null,"Above code enabled filters for ",Object(i.b)("inlineCode",{parentName:"p"},"slug"),", ",Object(i.b)("inlineCode",{parentName:"p"},"title")," and ",Object(i.b)("inlineCode",{parentName:"p"},"createdAt")," fields. Using above generated API you may request like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# Filter response based on slug property using equals comparison\nGET /posts?filter=(slug = 'my_cool_post')\n\n# Perform range filter between dates using triple dots\nGET /posts?filter=(createdAt = '2020-9-1'...'2020-10-1')\n\n# Perform conditional filter \nGET /posts?filter=(createdAt >= '2020-9-1' and deleted = false)\n\n# Perform search on title that starts with word programming using asterisk\nGET /posts?filter=(title = 'programming'*)\n")),Object(i.b)("p",null,"Filter follows the ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.read()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@authorize.writeonly()")," respectively."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"documentation")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For more information about first class entity and generic controller can be found ",Object(i.b)("a",{parentName:"p",href:"/generic-controller"},"here")))),Object(i.b)("h2",{id:"validators"},"Validators"),Object(i.b)("p",null,"Plumier provided comprehensive list of validator, uses ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/validator"},"ValidatorJS")," internally. You specify validation using ",Object(i.b)("inlineCode",{parentName:"p"},"@val")," decorator. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{9-11,15,19}","{9-11,15,19}":!0},'import { val } from "plumier"\nimport { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"\n\n@Entity()\nexport class User {\n    @PrimaryGeneratedColumn()\n    id: number\n\n    @val.email()\n    @val.unique()\n    @val.required()\n    @Column()\n    email: string\n\n    @val.required()\n    @Column()\n    name:string\n\n    @val.url()\n    @Column()\n    profilePicture:string\n}\n')),Object(i.b)("p",null,"There are more than 40 validators to use to secure your API consumer request. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"documentation")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Refer to ",Object(i.b)("a",{parentName:"p",href:"/validation"},"validator documentation")," for more information "))),Object(i.b)("h2",{id:"common-controller"},"Common Controller"),Object(i.b)("p",null,"Generic controller is just an implementation of Plumier controller with generic class signature. Even though generic controller can be fully customized to match your app requirements, in some case its may required to use a controller manually to handle user request. "),Object(i.b)("p",null,"The term of Controller in Plumier is the same as in other MVC framework. Plumier controller is a plain class end with ",Object(i.b)("inlineCode",{parentName:"p"},"Controller")," for example ",Object(i.b)("inlineCode",{parentName:"p"},"class UsersController"),". A route automatically generated based on ",Object(i.b)("inlineCode",{parentName:"p"},"/controller/action"),". This behavior can be customized using ",Object(i.b)("inlineCode",{parentName:"p"},"@route")," decorator."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { route } from "plumier"\n\nexport class UsersController {\n    // GET /users/:id\n    @route.get(":id")\n    get(id:string) { \n\n      // return value or Promise that \n      // automatically rendered into JSON response\n      return repo.findOne(id)\n    }\n}\n')),Object(i.b)("p",null,"Controller can return any value including ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),", this value then rendered into JSON response automatically. You can have more control to the response by returning the ",Object(i.b)("inlineCode",{parentName:"p"},"ActionResult")," or use the built-in ",Object(i.b)("inlineCode",{parentName:"p"},"response")," function."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Action"),Object(i.b)("th",{parentName:"tr",align:null},"Alias"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Package"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ActionResult")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"response.json()")),Object(i.b)("td",{parentName:"tr",align:null},"Return json response"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"RedirectActionResult")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"response.redirect()")),Object(i.b)("td",{parentName:"tr",align:null},"Redirect response"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"FileActionResult")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"response.file()")),Object(i.b)("td",{parentName:"tr",align:null},"Serve static file response"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/serve-static"))))),Object(i.b)("h4",{id:"bind-request-part-into-actions-parameter"},"Bind Request Part Into Action's Parameter"),Object(i.b)("p",null,"Action parameter can be bound into request part such as query, body, header etc. Request values received automatically converted into data type match with action parameter data type. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { route } from "plumier"\n\nexport class UsersController {\n    // GET /users/list\n    @route.get()\n    list(offset:number = 0, limit:number = 50, active:boolean = true) {\n        \n    }\n}\n')),Object(i.b)("p",null,"Above controller generated into ",Object(i.b)("inlineCode",{parentName:"p"},"GET /users/list?limit&offset&active"),". All parameters are optional with their default values. Note that the value automatically converted match with parameter data type, giving these request are valid"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GET /users/list \nGET /users/list?limit=20\nGET /users/list?offset=20&limit=20\nGET /users/list?offset=10&active=true\nGET /users/list?active=1\n")),Object(i.b)("p",null,"Important to notice that boolean parameter can be filled with: ",Object(i.b)("inlineCode",{parentName:"p"},"yes"),", ",Object(i.b)("inlineCode",{parentName:"p"},"no"),", ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"0"),". And parameter of type datetime can be filled with ",Object(i.b)("inlineCode",{parentName:"p"},"2020-12-31")," or ",Object(i.b)("inlineCode",{parentName:"p"},"2020-10-05T23:28:33.598Z")," "),Object(i.b)("p",null,"Parameters also can be bound with request body by providing a parameter of type of custom object to hold the request body like example below"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { route, domain } from "plumier"\n\n@domain()\nexport class Login {\n    constructor(\n        public email:string,\n        public password:string,\n    ){}\n}\n\nexport class AuthController {\n    // POST /auth/login\n    @route.post()\n    login(data:Login) {\n        \n    }\n}\n')),Object(i.b)("p",null,"Above controller will be generated into ",Object(i.b)("inlineCode",{parentName:"p"},"POST /auth/login")," with request body ",Object(i.b)("inlineCode",{parentName:"p"},'{ "email":<string>, "password": <string> }')," "),Object(i.b)("p",null,"Plumier provided decorators to bind specific request body to parameter, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"@bind")," decorator on specific parameter. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{6}","{6}":!0},'import { route, bind } from "plumier"\n\nexport class UsersController {\n    // GET /users/:id\n    @route.get(":id")\n    get(id:string, @bind.user() user:LoginUser) { }\n}\n')),Object(i.b)("p",null,"Here are list of supported parameter binding decorators "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Binding"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.user()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind current login user (JWT claims) into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.ctx()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request context into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.request()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.body()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request body into parameter (optional, or use a custom class type to automatically bind request body to parameter)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.query()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request query into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.header()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request header into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.cookie()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind request cookie into parameter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@bind.custom()")),Object(i.b)("td",{parentName:"tr",align:null},"Bind custom parameter binding implementation into parameter")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"documentation")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Refer to the complete documentation about ",Object(i.b)("a",{parentName:"p",href:"/controller"},"controller")," "))),Object(i.b)("h2",{id:"open-api-30"},"Open API 3.0"),Object(i.b)("p",null,"Plumier provided ",Object(i.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," to automatically generate Open API 3.0 schema from both controller and generic controller. Open API 3.0 Schema automatically generated by reading and transforming controller's metadata on the fly. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{5}","{5}":!0},'import { SwaggerFacility } from "@plumier/swagger"\n\nnew Plumier()\n  /* other facilities */\n  .set(new SwaggerFacility()) \n')),Object(i.b)("p",null,"The generated Open API 3.0 schema can be customized minimally, but mostly everything will just work out of the box. ",Object(i.b)("inlineCode",{parentName:"p"},"SwaggerFacility")," hosts the SwaggerUI under ",Object(i.b)("inlineCode",{parentName:"p"},"/swagger")," endpoint."),Object(i.b)("p",null,Object(i.b)("img",{alt:"swagger",src:n(208).default})),Object(i.b)("h2",{id:"facilities"},"Facilities"),Object(i.b)("p",null,"The entry point of Plumier application is an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Plumier"),". ",Object(i.b)("inlineCode",{parentName:"p"},"Plumier")," consist of features that can be enabled/disabled by installing ",Object(i.b)("inlineCode",{parentName:"p"},"Facility"),". "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { JwtAuthFacility } from "@plumier/jwt"\nimport { SwaggerFacility } from "@plumier/swagger"\nimport { TypeORMFacility } from "@plumier/typeorm"\nimport Plumier, { WebApiFacility } from "plumier"\n\nnew Plumier()\n    .set(new WebApiFacility())\n    .set(new JwtAuthFacility())\n    .set(new TypeORMFacility())\n    .set(new SwaggerFacility())\n    .listen(8000);\n')),Object(i.b)("p",null,"Above code will start Plumier application with some installed features and listens to the port 8000. Plumier provided some facilities for development convenient they are:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Facility"),Object(i.b)("th",{parentName:"tr",align:null},"Includes"),Object(i.b)("th",{parentName:"tr",align:null},"Package"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"WebApiFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Body parser, CORS middleware, Default dependency resolver"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"RestApiFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Same as ",Object(i.b)("inlineCode",{parentName:"td"},"WebApiFacility")," except its provided more strict restful API status code"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ControllerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Host controllers by path or type, furthermore controllers can be grouped and versioned"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"LoggerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Simple request logging and error reporting"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"plumier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"JwtAuthFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Jwt middleware, Enable authorization, Jwt Secret configuration"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/jwt"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"MongooseFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Mongoose schema generator, generic controller and connection management"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/mongoose"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"TypeORMFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Provided helper and generic controller for TypeORM"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/typeorm"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"ServeStaticFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Serve static files middleware"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/serve-static"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"SwaggerFacility")),Object(i.b)("td",{parentName:"tr",align:null},"Serve Swagger UI and generate Open API 3.0 automatically"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"@plumier/swagger"))))),Object(i.b)("h2",{id:"code-style"},"Code Style"),Object(i.b)("p",null,"Plumier doesn't strictly provided the project layout, but it provided flexibility to layout your project files match your need. Below are some common project structure usually used by developers, You can choose any of them match your like."),Object(i.b)("h4",{id:"single-file-style"},"Single File Style"),Object(i.b)("p",null,"This style usually used by Express for small app with a fewer code. Put all controllers and entities in a single file and configure the bootstrap application like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"new Plumier()\n    .set(new WebApiFacility())\n    .listen(8000)\n")),Object(i.b)("h4",{id:"classic-mvc-style"},"Classic MVC Style"),Object(i.b)("p",null,"This is default style supported by Plumier. Classic MVC style app separate project files by functionalities such as ",Object(i.b)("inlineCode",{parentName:"p"},"controllers"),", ",Object(i.b)("inlineCode",{parentName:"p"},"models"),", ",Object(i.b)("inlineCode",{parentName:"p"},"repositories"),", ",Object(i.b)("inlineCode",{parentName:"p"},"entities"),", ",Object(i.b)("inlineCode",{parentName:"p"},"services")," etc."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+ src/\n  + controller/\n    - item.controller.ts\n    - user.controller.ts\n  + repository/\n    - item.repository.ts\n    - user.repository.ts\n  + service/\n    - item.service.ts\n    - user.service.ts\n  + entity/\n    - item.entity.ts\n    - user.entity.ts\n  - app.ts\n  - index.ts\n- package.json\n- tsconfig.json\n")),Object(i.b)("p",null,"No more setup required to use this style."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"new Plumier()\n    .set(new WebApiFacility())\n    .listen(8000)\n")),Object(i.b)("h4",{id:"modular-style"},"Modular Style"),Object(i.b)("p",null,"This style usually used by modern frameworks, files separated by module per directory, each directory consist of controller, model, service, entity etc separated in different files. "),Object(i.b)("p",null,"To use this style you must follow the file name convention by creating file ends with ",Object(i.b)("inlineCode",{parentName:"p"},"controller")," word like below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+ src/\n  + item/\n    - item.controller.ts\n    - item.entity.ts\n    - item.service.ts\n    - item.repository.ts\n  + user/\n    - user.controller.ts\n    - user.entity.ts\n    - user.service.ts\n    - user.repository.ts\n  - app.ts\n  - index.ts\n- package.json\n- tsconfig.json\n")),Object(i.b)("p",null,"No more setup required to use this style, Plumier will automatically search through all files to find controllers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"new Plumier()\n    .set(new WebApiFacility())\n    .listen(8000)\n")))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,o(o({ref:t},c),{},{components:n})):a.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},208:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-a3e6e8c80d9743ab587b918badc447e7.png"}}]);