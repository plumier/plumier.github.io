(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[39],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7560),a=n(8283),o=(n(2784),n(876)),i={id:"first-class-entity",title:"First Class Entity"},s={unversionedId:"refs/first-class-entity",id:"refs/first-class-entity",isDocsHomePage:!1,title:"First Class Entity",description:"Some modern frameworks usually consist of some components like Entity (ORM Entity), Repository, Model, Service, Controller. Picture below showing the simplest pattern commonly used, the repository pattern.",source:"@site/docs/refs/First-Class-Entity.md",sourceDirName:"refs",slug:"/refs/first-class-entity",permalink:"/refs/first-class-entity",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/First-Class-Entity.md",version:"current",frontMatter:{id:"first-class-entity",title:"First Class Entity"}},l=[{value:"Entity as The First Class Citizen",id:"entity-as-the-first-class-citizen",children:[]},{value:"Benefit",id:"benefit",children:[]},{value:"Problems and Solutions",id:"problems-and-solutions",children:[{value:"Data Security",id:"data-security",children:[]},{value:"Entity Relation",id:"entity-relation",children:[]},{value:"Disable Required Validation",id:"disable-required-validation",children:[]},{value:"Complex Default Values",id:"complex-default-values",children:[]},{value:"Inheritable Controller",id:"inheritable-controller",children:[]},{value:"Configurable Controller from Class Scope",id:"configurable-controller-from-class-scope",children:[]},{value:"Projection, Filter and Order",id:"projection-filter-and-order",children:[]}]}],p={toc:l};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some modern frameworks usually consist of some components like Entity (ORM Entity), Repository, Model, Service, Controller. Picture below showing the simplest pattern commonly used, the repository pattern."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repository pattern",src:n(6380).Z})),(0,o.kt)("p",null,"Repository pattern consist of a POJO (Plain Old JavaScript Object) Entity represent the schema of a database table and used by ORM to map entity with the table. POJO entity may contains validation decorators about data type and its size. "),(0,o.kt)("p",null,"Repository is the action of the data layer, it has control to save the data represented by the entity into the database. Usually a repository contains a general CRUD operation which mostly the same among different entities, thus some library provide a reusable generic repository out of the box. "),(0,o.kt)("p",null,"POJO model represent the request/response schema. POJO model may contains decorators to validate API consumer request. In most case the schema of POJO entity and POJO model may the same, it shares the same properties with the same data type, except some relation properties that appears on POJO entity will not appears in POJO model."),(0,o.kt)("p",null,"Controller is the action of the application layer, it has control to the request and response and perform data access using repository. Controller may contains decorators to authorize API consumer to restrict access to the data. "),(0,o.kt)("h2",{id:"entity-as-the-first-class-citizen"},"Entity as The First Class Citizen"),(0,o.kt)("p",null,"In most CRUD operation, Repository and Controller may perform the same steps over and over, for example Repository and Controller for CRUD User or CRUD Items mostly perform the same steps, the components that is vary is the Entity, Model, Validation and Authorization. "),(0,o.kt)("p",null,"With proper separation of validation and authorization we can move the Authorization into the entity and replace the POJO model with POJO entity like picture below which make controller and repository shared the same entity. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"first class entity",src:n(7947).Z})),(0,o.kt)("p",null,"Above modification we give Entity more control in the system (a first class citizen). "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It defines table schema "),(0,o.kt)("li",{parentName:"ol"},"It defines who will do validation and authorization "),(0,o.kt)("li",{parentName:"ol"},"It defines request/response schema.")),(0,o.kt)("h2",{id:"benefit"},"Benefit"),(0,o.kt)("p",null,"By treating entity as a first class citizen we will able to review data schema dan security easily from single location. As a bonus, while Entity now controls everything, its now possible to create a generic controller that is reusable among CRUD operations. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"generic controller",src:n(6087).Z})),(0,o.kt)("p",null,"Since authorization and validation stays on Entity using decorators, we can create several CRUD APIs using generic controller above only based on Entities. Furthermore we can use decorator on entity and create generic controller dynamically on the fly to automatically create CRUD endpoints magically from entities."),(0,o.kt)("h2",{id:"problems-and-solutions"},"Problems and Solutions"),(0,o.kt)("p",null,"Using POJO entity as representation of request/response that usually tasked to POJO model may lead to some issue Plumier provided some features to support the First Class Entity"),(0,o.kt)("h3",{id:"data-security"},"Data Security"),(0,o.kt)("p",null,"ORM entity usually contains properties that holds sensitive data such as password, date of birth etc, which will introduce security issue when ORM entity used as DTO. "),(0,o.kt)("p",null,"Plumier provided authorization in property basis, which make it possible to restrict read/write access to property. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{6,11}","{6,11}":!0},'class User {\n    id: number\n\n    email: string\n\n    @authorize.writeonly()\n    password: string\n\n    name: string\n\n    @authorize.write("SuperAdmin", "Admin")\n    role: "SuperAdmin" | "Admin" | "User"\n}\n')),(0,o.kt)("p",null,"Using above code, when used as request body model, will only allow ",(0,o.kt)("inlineCode",{parentName:"p"},"SuperAdmin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," property. And when used as response body model will prevent ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," being visible to any user. "),(0,o.kt)("h3",{id:"entity-relation"},"Entity Relation"),(0,o.kt)("p",null,"ORM entity may contains relation properties to represent join with another tables, usually relation properties defined with data type of the related table instead of the ID data type. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{15}","{15}":!0},"class User {\n    @PrimaryGeneratedColumn()\n    id: int\n\n    /** other properties **/\n}\n\nclass Log {\n    @PrimaryGeneratedColumn()\n    id: int\n\n    /** other properties **/\n\n    @ManyToOne(x => User)\n    user: User \n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Log.user")," data type is ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," but when inserting value usually we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," object. "),(0,o.kt)("p",null,"When used as request body model, framework Type Converter need to understand that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Log.user")," property should be filled with data of type ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," object. Open API Schema generator also should be showing proper data type for ",(0,o.kt)("inlineCode",{parentName:"p"},"Log.user")," property instead of showing ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," object schema. "),(0,o.kt)("h3",{id:"disable-required-validation"},"Disable Required Validation"),(0,o.kt)("p",null,"When used as POJO model, entity may decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@val.required()")," decorator. This ",(0,o.kt)("inlineCode",{parentName:"p"},"required")," behavior will become issue when entity used to handled ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," methods, since ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," methods allow omitting other properties that will not changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class User {\n    id: number\n\n    @val.required()\n    email: string\n\n    @val.required()\n    password: string\n\n    @val.required()\n    name: string\n\n    role: "SuperAdmin" | "Admin" | "User"\n}\n')),(0,o.kt)("p",null,"Above code showing that ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," are required. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," method allowed user to only set ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," or just the ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", its impossible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," entity as DTO of patch model. "),(0,o.kt)("p",null,"Plumier uses ",(0,o.kt)("inlineCode",{parentName:"p"},"@val.partial(User)")," to skip all of the required validation thus make it possible to use as model of ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," method. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class UsersController {\n    @route.patch(":id")\n    modify(id:number, @val.partial(User) user:User){ }\n}\n')),(0,o.kt)("h3",{id:"complex-default-values"},"Complex Default Values"),(0,o.kt)("p",null,"Its a common case when adding a new record also required extra setup before and after saving the record. For example when adding a User records its required to hash the password before its saved to database. "),(0,o.kt)("p",null,"Plumier provided request hook to process during saving process. There are ",(0,o.kt)("inlineCode",{parentName:"p"},"@preSave()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@postSave()")," hook that will executed before or after the entity saved to database. Request hook supported parameter binding to easily get request part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { preSave } from "plumier"\nimport { getSalt, hash } from "bcryptjs"\n\n@Entity()\nclass User {\n    \n    /** other properties **/\n\n    // this method called before entity saved to db\n    @preSave()\n    hashPassword(){\n        const salt = await genSalt()\n        this.password = await hash(this.password, salt)\n    }\n}\n')),(0,o.kt)("h3",{id:"inheritable-controller"},"Inheritable Controller"),(0,o.kt)("p",null,"When controller defined with generic controller, its required to inherit them to create the controller implementation. To get an inheritable behavior controller must define route based on controller and action, it cannot be defined using absolute route. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class ControllerBase<T> {\n\n    @route.post("")\n    save(data:T){ }\n\n    @route.get(":id")\n    get(id:number) { }\n}\n\nclass AnimalsController extends ControllerBase<Animal> {}\n')),(0,o.kt)("p",null,"Above code will generated into two routes ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /animals")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /animals/:id"),". Like you see the ",(0,o.kt)("inlineCode",{parentName:"p"},"animals")," comes from the derived class controller ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimalsController")," while the Http Method and the trailing path defined by base class. "),(0,o.kt)("h3",{id:"configurable-controller-from-class-scope"},"Configurable Controller from Class Scope"),(0,o.kt)("p",null,"When controller inherited from a base class controller, its mostly difficult to configure base class action from derived class like example below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class ControllerBase<T> {\n\n    @route.post("")\n    save(data:T){ }\n\n    @route.get(":id")\n    get(id:number) { }\n}\n\nclass AnimalsController extends ControllerBase<Animal> {}\n')),(0,o.kt)("p",null,"To change authorization access of ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimalsController")," needs to override the method and put ",(0,o.kt)("inlineCode",{parentName:"p"},"@authorize.role()")," manually like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class AnimalsController extends ControllerBase<Animal> {\n\n    @authorize.role("Admin")\n    save(data:T){ \n        return super.save(data)\n    }\n}\n')),(0,o.kt)("p",null,"We unable to do that when the inherited class created dynamically on the fly, thus its required configuration from the class scope like below. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'@authorize.role("Admin", { applyTo: "save" })\nclass AnimalsController extends ControllerBase<Animal> { }\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"applyTo")," configuration supported by the reflection library out of the box, It tells reflection library to move the decorator into specific class member specified. "),(0,o.kt)("h3",{id:"projection-filter-and-order"},"Projection, Filter and Order"),(0,o.kt)("p",null,"When retrieving data from server using the API, API consumer may need to get the data in some order, or sometime need to exclude some result or exclude some properties returned. "),(0,o.kt)("p",null,"To fulfil that, we need to provide some query parameter on the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," method to be able for API consumer to refine the API response match their need, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// result projection \nGET /animals?select=id,name,dateOfBirth\n\n// order by dateOfBirth desc, name asc\nGET /animals?order=-dateOfBirth,name\n\n// filter by exact name\nGET /animals?filter[name]=mimi\n")))}d.isMDXComponent=!0},7947:function(e,t,n){"use strict";t.Z=n.p+"assets/images/first-class-entity-43abddd3b8a9902ca852c655be49f25d.png"},6087:function(e,t,n){"use strict";t.Z=n.p+"assets/images/generic-controller-06484d86a9c3d86a604398a45b7ea982.png"},6380:function(e,t,n){"use strict";t.Z=n.p+"assets/images/repository-pattern-f0b4e692d8c8d8bf92b4368a5af2de35.png"}}]);