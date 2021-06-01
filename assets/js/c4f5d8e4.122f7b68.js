(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[195],{5894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7560),l=n(2784),a=n(6277),o=n(4792),i=n(5277),c=n(1510),s=n(7614),u=(n(6097),n(77),{heroBanner:"heroBanner_3P7f",heroContainer:"heroContainer_fDSk",buttons:"buttons_1r9m",featureDescription:"featureDescription_6iCm",codeBorder:"codeBorder_3ycz",featureImage:"featureImage_ZtzX",feature:"feature_3ctd",sectionDark:"sectionDark_2ReR",featureContainer:"featureContainer_33Rm",featureContainerOdd:"featureContainerOdd_3Gyl",featureButton:"featureButton_2Sgf",codeFont:"codeFont_3X8u",codeTitleBox:"codeTitleBox_2MsY",codeRgb:"codeRgb_1GQ1",rgbRed:"rgbRed_22XP",rgbGreen:"rgbGreen_V6bN",rgbBlue:"rgbBlue_30Hu"}),m=[{title:"First Class Entity",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Upgrade ORM entity into First Class Entity to have more control to most framework features such as request/response body schema, authorization, validation, generated routes."),l.createElement("p",null,"In the background, Plumier creates CRUD Restful generic controller uses ORM entity as its data model, example produces:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"POST /items")," accessible by Supervisor and Staff"),l.createElement("li",null,l.createElement("code",null,"GET /items?offset&limit&filter&select")," accessible by any login user"),l.createElement("li",null,l.createElement("code",null,"GET /items/{id}")," accessible by any login user"),l.createElement("li",null,l.createElement("code",null,"POST /items/{id}")," accessible by Supervisor and Staff"),l.createElement("li",null,l.createElement("code",null,"PUT /items/{id}")," accessible by Supervisor and Staff"),l.createElement("li",null,l.createElement("code",null,"DELETE /items/{id}")," accessible by Supervisor and Staff"))),link:{url:"generic-controller"},code:'// create CRUD generic controller on the fly\n@genericController(c => {\n  // authorize post, put, patch, delete\n  c.mutators().authorize("Supervisor", "Staff");\n})\n// use TypeORM entity as generic controller model\n@Entity()\nexport class Item {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  // validate max characters allowed\n  @val.length({ max: 128 })\n  @Column()\n  name: string;\n\n  // authorize request/response body property\n  @authorize.readWrite("Supervisor", "Staff")\n  @Column()\n  basePrice: number;\n\n  // authorize request body property\n  @authorize.write("Supervisor")\n  @Column()\n  price: number;\n}'},{title:"Policy Based Authorization",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Plumier supported securing API with JWT out of the box. Plumier also provided authorization to restrict user access based on specific logic defined by you. You define your authorization logic in separate location, then apply it using decorators."),l.createElement("p",null,"In the background Plumier validates your authorization policy to prevent mistyped policy name, or possibly duplicate/conflict policy name.")),link:{url:"security"},code:'// register with authorization policy builder\nauthPolicy()\n\n  // register role\n  .register("Supervisor", ({ user }) => {\n      // "user" is JWT claim from request header\n      // return true to authorize otherwise false\n      // also possible to return Promise<boolean>\n      return user?.role === "Supervisor"\n  })\n\n  // chain-able registration method\n  .register("Staff", ({ user }) => {\n      return user?.role === "Staff"\n  })'},{title:"Nested First Class Entity",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Turn One-To-Many relation of ORM entity into nested Restful API. Nested first class entity handled by specialized nested generic controller."),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"POST /posts/{pid}/comments")),l.createElement("li",null,l.createElement("code",null,"GET /posts/{pid}/comments?offset&limit&filter&select")),l.createElement("li",null,l.createElement("code",null,"GET /posts/{pid}/comments/{id}")),l.createElement("li",null,l.createElement("code",null,"POST /posts/{pid}/comments/{id}")),l.createElement("li",null,l.createElement("code",null,"PUT /posts/{pid}/comments/{id}")),l.createElement("li",null,l.createElement("code",null,"DELETE /posts/{pid}/comments/{id}")))),link:{url:"generic-controller"},code:"@Entity()\nexport class Post {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  // turn one to many relation into nested API\n  @genericController()\n  @OneToMany(x => Comment, x => x.post)\n  comments: Comment[]\n}\n\n@Entity()\nexport class Comment {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column()\n  comment:string\n}"},{title:"Controllers",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Require more flexible response result then using First Class Entity? No problem, you still can use controller to handle user request."),l.createElement("p",null,"Plumier controller inspired by ASP.Net MVC controllers, and take important role in Plumier system."),l.createElement("ul",null,l.createElement("li",null,"Routes generated based on controller name and action name."),l.createElement("li",null,"Parameter binding using parameter name or decorators."),l.createElement("li",null,"Extra data type conversion with simple sanitation for each controller parameter."),l.createElement("li",null,"Policy based authorization that applicable using decorators."))),link:{url:"controller"},code:'export class UsersController {\n  readonly repo = new TypeORMRepository(User)\n\n  // GET /users/:id\n  @route.get(":id")\n  get(id:string) { \n\n      // return value or Promise \n      // automatically rendered into JSON response\n      return this.repo.findOne(id)\n  }\n\n  // POST /users\n  @route.post("")\n  // data parameter bound to request body\n  save(data:User) {\n    return this.repo.insert(data)\n  }\n}'},{title:"Swagger UI with Open API v3",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Open API v3 schema automatically generated from controller metadata. Mostly no configuration required, but some minor tweak can be applied to get result match your need.")),link:{url:"swagger"},image:"/img/swagger.png"},{title:"Performance is Top Priority",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Plumier shipped with efficient routing and ",l.createElement(c.Z,{to:"https://www.npmjs.com/package/@plumier/validator"},"validator and type converter library"),". Check the full stack benchmark of performance comparison between Koa, Express, Nest, Loopback 4 on ",l.createElement(c.Z,{to:"https://github.com/ktutnik/full-stack-benchmarks"},"this repository"),", which tests basic framework functionality: routing, body parser, validation and type conversion")),image:"/img/benchmark.png"}];function d(){return l.createElement(l.Fragment,null,m.map((function(e,t){return l.createElement(p,(0,r.Z)({key:t,index:t},e))})))}function p(e){var t=e.description,n=e.title,r=e.code,o=e.link,i=e.index,s=e.image,m=i%2==0;return l.createElement("section",{className:(0,a.Z)(u.feature,m?u.sectionDark:u.sectionLight)},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,a.Z)("row",u.featureContainer,m?u.featureContainerOdd:u.featureContainerEven)},l.createElement("div",{className:(0,a.Z)("col col--5",u.codeFont)},r?l.createElement(E,{code:r}):l.createElement("img",{className:u.featureImage,src:s})),l.createElement("div",{className:(0,a.Z)("col col--7",u.featureDescription)},l.createElement("h3",null,"Feature"),l.createElement("h1",null,n),l.createElement("div",null,t),o?l.createElement(c.Z,{to:o.url,className:(0,a.Z)("button button--secondary button--lg",u.featureButton)},"Learn more about this feature"):""))))}function E(e){var t=e.code;return l.createElement("div",{className:(0,a.Z)(u.codeBorder)},l.createElement("div",{className:(0,a.Z)(u.codeTitleBox)},l.createElement("div",{className:(0,a.Z)(u.codeRgb,u.rgbRed)}),l.createElement("div",{className:(0,a.Z)(u.codeRgb,u.rgbGreen)}),l.createElement("div",{className:(0,a.Z)(u.codeRgb,u.rgbBlue)})),l.createElement(i.Z,{metastring:"typescript",className:"typescript"},t))}var f=function(){var e=(0,s.Z)().siteConfig,t=void 0===e?{}:e;return l.createElement(o.Z,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},l.createElement("header",{className:(0,a.Z)("hero ",u.heroBanner)},l.createElement("div",{className:(0,a.Z)("container",u.heroContainer)},l.createElement("h2",{className:"hero__subtitle"},t.title),l.createElement("h1",{className:"hero__title"},t.tagline),l.createElement("p",null,"A TypeScript backend framework focuses on development productivity, uses dedicated reflection library to help you create a robust, secure and fast API delightfully."),l.createElement("div",{className:u.buttons},l.createElement(c.Z,{className:(0,a.Z)("button button--primary button--lg"),to:"quick-start"},"Quick Start"),l.createElement(c.Z,{className:(0,a.Z)("button button--secondary button--lg"),to:"plumier-in-five-minutes"},"Plumier in Five Minutes")))),l.createElement("main",null,l.createElement(d,null)))}}}]);