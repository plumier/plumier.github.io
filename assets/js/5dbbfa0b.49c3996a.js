(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/repository-pattern-f0b4e692d8c8d8bf92b4368a5af2de35.png"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/first-class-entity-43abddd3b8a9902ca852c655be49f25d.png"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/generic-controller-06484d86a9c3d86a604398a45b7ea982.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(116)),i={id:"first-class-entity",title:"First Class Entity"},s={unversionedId:"refs/first-class-entity",id:"refs/first-class-entity",isDocsHomePage:!1,title:"First Class Entity",description:"Some modern frameworks usually consist of some components like Entity (ORM Entity), Repository, Model, Service, Controller. Picture below showing the simplest pattern commonly used, the repository pattern.",source:"@site/docs/refs/First-Class-Entity.md",sourceDirName:"refs",slug:"/refs/first-class-entity",permalink:"/refs/first-class-entity",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/First-Class-Entity.md",version:"current",frontMatter:{id:"first-class-entity",title:"First Class Entity"}},l=[{value:"Entity as The First Class Citizen",id:"entity-as-the-first-class-citizen",children:[]},{value:"Benefit",id:"benefit",children:[]},{value:"Problems and Solutions",id:"problems-and-solutions",children:[{value:"Data Security",id:"data-security",children:[]},{value:"Entity Relation",id:"entity-relation",children:[]},{value:"Disable Required Validation",id:"disable-required-validation",children:[]},{value:"Complex Default Values",id:"complex-default-values",children:[]},{value:"Inheritable Controller",id:"inheritable-controller",children:[]},{value:"Configurable Controller from Class Scope",id:"configurable-controller-from-class-scope",children:[]},{value:"Projection, Filter and Order",id:"projection-filter-and-order",children:[]}]}],c={toc:l};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some modern frameworks usually consist of some components like Entity (ORM Entity), Repository, Model, Service, Controller. Picture below showing the simplest pattern commonly used, the repository pattern."),Object(o.b)("p",null,Object(o.b)("img",{alt:"repository pattern",src:n(193).default})),Object(o.b)("p",null,"Repository pattern consist of a POJO (Plain Old JavaScript Object) Entity represent the schema of a database table and used by ORM to map entity with the table. POJO entity may contains validation decorators about data type and its size. "),Object(o.b)("p",null,"Repository is the action of the data layer, it has control to save the data represented by the entity into the database. Usually a repository contains a general CRUD operation which mostly the same among different entities, thus some library provide a reusable generic repository out of the box. "),Object(o.b)("p",null,"POJO model represent the request/response schema. POJO model may contains decorators to validate API consumer request. In most case the schema of POJO entity and POJO model may the same, it shares the same properties with the same data type, except some relation properties that appears on POJO entity will not appears in POJO model."),Object(o.b)("p",null,"Controller is the action of the application layer, it has control to the request and response and perform data access using repository. Controller may contains decorators to authorize API consumer to restrict access to the data. "),Object(o.b)("h2",{id:"entity-as-the-first-class-citizen"},"Entity as The First Class Citizen"),Object(o.b)("p",null,"In most CRUD operation, Repository and Controller may perform the same steps over and over, for example Repository and Controller for CRUD User or CRUD Items mostly perform the same steps, the components that is vary is the Entity, Model, Validation and Authorization. "),Object(o.b)("p",null,"With proper separation of validation and authorization we can move the Authorization into the entity and replace the POJO model with POJO entity like picture below which make controller and repository shared the same entity. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"first class entity",src:n(194).default})),Object(o.b)("p",null,"Above modification we give Entity more control in the system (a first class citizen). "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"It defines table schema "),Object(o.b)("li",{parentName:"ol"},"It defines who will do validation and authorization "),Object(o.b)("li",{parentName:"ol"},"It defines request/response schema.")),Object(o.b)("h2",{id:"benefit"},"Benefit"),Object(o.b)("p",null,"By treating entity as a first class citizen we will able to review data schema dan security easily from single location. As a bonus, while Entity now controls everything, its now possible to create a generic controller that is reusable among CRUD operations. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"generic controller",src:n(195).default})),Object(o.b)("p",null,"Since authorization and validation stays on Entity using decorators, we can create several CRUD APIs using generic controller above only based on Entities. Furthermore we can use decorator on entity and create generic controller dynamically on the fly to automatically create CRUD endpoints magically from entities."),Object(o.b)("h2",{id:"problems-and-solutions"},"Problems and Solutions"),Object(o.b)("p",null,"Using POJO entity as representation of request/response that usually tasked to POJO model may lead to some issue Plumier provided some features to support the First Class Entity"),Object(o.b)("h3",{id:"data-security"},"Data Security"),Object(o.b)("p",null,"ORM entity usually contains properties that holds sensitive data such as password, date of birth etc, which will introduce security issue when ORM entity used as DTO. "),Object(o.b)("p",null,"Plumier provided authorization in property basis, which make it possible to restrict read/write access to property. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{6,11}","{6,11}":!0},'class User {\n    id: number\n\n    email: string\n\n    @authorize.writeonly()\n    password: string\n\n    name: string\n\n    @authorize.write("SuperAdmin", "Admin")\n    role: "SuperAdmin" | "Admin" | "User"\n}\n')),Object(o.b)("p",null,"Using above code, when used as request body model, will only allow ",Object(o.b)("inlineCode",{parentName:"p"},"SuperAdmin")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Admin")," to set the ",Object(o.b)("inlineCode",{parentName:"p"},"role")," property. And when used as response body model will prevent ",Object(o.b)("inlineCode",{parentName:"p"},"password")," being visible to any user. "),Object(o.b)("h3",{id:"entity-relation"},"Entity Relation"),Object(o.b)("p",null,"ORM entity may contains relation properties to represent join with another tables, usually relation properties defined with data type of the related table instead of the ID data type. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{15}","{15}":!0},"class User {\n    @PrimaryGeneratedColumn()\n    id: int\n\n    /** other properties **/\n}\n\nclass Log {\n    @PrimaryGeneratedColumn()\n    id: int\n\n    /** other properties **/\n\n    @ManyToOne(x => User)\n    user: User \n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Log.user")," data type is ",Object(o.b)("inlineCode",{parentName:"p"},"User")," but when inserting value usually we will use ",Object(o.b)("inlineCode",{parentName:"p"},"number")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"User")," object. "),Object(o.b)("p",null,"When used as request body model, framework Type Converter need to understand that the ",Object(o.b)("inlineCode",{parentName:"p"},"Log.user")," property should be filled with data of type ",Object(o.b)("inlineCode",{parentName:"p"},"number")," instead of the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," object. Open API Schema generator also should be showing proper data type for ",Object(o.b)("inlineCode",{parentName:"p"},"Log.user")," property instead of showing ",Object(o.b)("inlineCode",{parentName:"p"},"User")," object schema. "),Object(o.b)("h3",{id:"disable-required-validation"},"Disable Required Validation"),Object(o.b)("p",null,"When used as POJO model, entity may decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@val.required()")," decorator. This ",Object(o.b)("inlineCode",{parentName:"p"},"required")," behavior will become issue when entity used to handled ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," methods, since ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," methods allow omitting other properties that will not changed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'class User {\n    id: number\n\n    @val.required()\n    email: string\n\n    @val.required()\n    password: string\n\n    @val.required()\n    name: string\n\n    role: "SuperAdmin" | "Admin" | "User"\n}\n')),Object(o.b)("p",null,"Above code showing that ",Object(o.b)("inlineCode",{parentName:"p"},"email"),", ",Object(o.b)("inlineCode",{parentName:"p"},"password")," and ",Object(o.b)("inlineCode",{parentName:"p"},"name")," are required. Since ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," method allowed user to only set ",Object(o.b)("inlineCode",{parentName:"p"},"email")," or just the ",Object(o.b)("inlineCode",{parentName:"p"},"password"),", its impossible to use ",Object(o.b)("inlineCode",{parentName:"p"},"User")," entity as DTO of patch model. "),Object(o.b)("p",null,"Plumier uses ",Object(o.b)("inlineCode",{parentName:"p"},"@val.partial(User)")," to skip all of the required validation thus make it possible to use as model of ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," method. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'class UsersController {\n    @route.patch(":id")\n    modify(id:number, @val.partial(User) user:User){ }\n}\n')),Object(o.b)("h3",{id:"complex-default-values"},"Complex Default Values"),Object(o.b)("p",null,"Its a common case when adding a new record also required extra setup before and after saving the record. For example when adding a User records its required to hash the password before its saved to database. "),Object(o.b)("p",null,"Plumier provided request hook to process during saving process. There are ",Object(o.b)("inlineCode",{parentName:"p"},"@preSave()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@postSave()")," hook that will executed before or after the entity saved to database. Request hook supported parameter binding to easily get request part."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'import { preSave } from "plumier"\nimport { getSalt, hash } from "bcryptjs"\n\n@Entity()\nclass User {\n    \n    /** other properties **/\n\n    // this method called before entity saved to db\n    @preSave()\n    hashPassword(){\n        const salt = await genSalt()\n        this.password = await hash(this.password, salt)\n    }\n}\n')),Object(o.b)("h3",{id:"inheritable-controller"},"Inheritable Controller"),Object(o.b)("p",null,"When controller defined with generic controller, its required to inherit them to create the controller implementation. To get an inheritable behavior controller must define route based on controller and action, it cannot be defined using absolute route. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'class ControllerBase<T> {\n\n    @route.post("")\n    save(data:T){ }\n\n    @route.get(":id")\n    get(id:number) { }\n}\n\nclass AnimalsController extends ControllerBase<Animal> {}\n')),Object(o.b)("p",null,"Above code will generated into two routes ",Object(o.b)("inlineCode",{parentName:"p"},"POST /animals")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GET /animals/:id"),". Like you see the ",Object(o.b)("inlineCode",{parentName:"p"},"animals")," comes from the derived class controller ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalsController")," while the Http Method and the trailing path defined by base class. "),Object(o.b)("h3",{id:"configurable-controller-from-class-scope"},"Configurable Controller from Class Scope"),Object(o.b)("p",null,"When controller inherited from a base class controller, its mostly difficult to configure base class action from derived class like example below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'class ControllerBase<T> {\n\n    @route.post("")\n    save(data:T){ }\n\n    @route.get(":id")\n    get(id:number) { }\n}\n\nclass AnimalsController extends ControllerBase<Animal> {}\n')),Object(o.b)("p",null,"To change authorization access of ",Object(o.b)("inlineCode",{parentName:"p"},"save")," method ",Object(o.b)("inlineCode",{parentName:"p"},"AnimalsController")," needs to override the method and put ",Object(o.b)("inlineCode",{parentName:"p"},"@authorize.role()")," manually like below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'class AnimalsController extends ControllerBase<Animal> {\n\n    @authorize.role("Admin")\n    save(data:T){ \n        return super.save(data)\n    }\n}\n')),Object(o.b)("p",null,"We unable to do that when the inherited class created dynamically on the fly, thus its required configuration from the class scope like below. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'@authorize.role("Admin", { applyTo: "save" })\nclass AnimalsController extends ControllerBase<Animal> { }\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"applyTo")," configuration supported by the reflection library out of the box, It tells reflection library to move the decorator into specific class member specified. "),Object(o.b)("h3",{id:"projection-filter-and-order"},"Projection, Filter and Order"),Object(o.b)("p",null,"When retrieving data from server using the API, API consumer may need to get the data in some order, or sometime need to exclude some result or exclude some properties returned. "),Object(o.b)("p",null,"To fulfil that, we need to provide some query parameter on the ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," method to be able for API consumer to refine the API response match their need, for example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"// result projection \nGET /animals?select=id,name,dateOfBirth\n\n// order by dateOfBirth desc, name asc\nGET /animals?order=-dateOfBirth,name\n\n// filter by exact name\nGET /animals?filter[name]=mimi\n")))}d.isMDXComponent=!0}}]);