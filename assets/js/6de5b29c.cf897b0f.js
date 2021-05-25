(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[304],{876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return u}});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?o.createElement(h,l(l({ref:n},s),{},{components:t})):o.createElement(h,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1438:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return s}});var o=t(7560),r=t(8283),i=(t(2784),t(876)),l={id:"mongoose-helper",title:"Mongoose Helper"},a={unversionedId:"mongoose-helper",id:"mongoose-helper",isDocsHomePage:!1,title:"Mongoose Helper",description:"Generate Mongoose schema based on your domain model.",source:"@site/docs/Mongoose-Helper.md",sourceDirName:".",slug:"/mongoose-helper",permalink:"/mongoose-helper",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Mongoose-Helper.md",version:"current",frontMatter:{id:"mongoose-helper",title:"Mongoose Helper"},sidebar:"overview",previous:{title:"TypeORM Helper",permalink:"/typeorm-helper"},next:{title:"Query Parser",permalink:"/query-parser"}},c=[{value:"Enable The Functionality",id:"enable-the-functionality",children:[]},{value:"Domain Model Declaration",id:"domain-model-declaration",children:[{value:"Using Property Field",id:"using-property-field",children:[]},{value:"Using TypeScript Parameter Properties",id:"using-typescript-parameter-properties",children:[]}]},{value:"Helper API Overview",id:"helper-api-overview",children:[]},{value:"Helper API",id:"helper-api",children:[{value:"Basic Schema Generation",id:"basic-schema-generation",children:[]},{value:"Advanced Data Type",id:"advanced-data-type",children:[]},{value:"Nested Document With Ref (Populate)",id:"nested-document-with-ref-populate",children:[]},{value:"Configure Properties",id:"configure-properties",children:[]},{value:"Inheritance",id:"inheritance",children:[]},{value:"Custom Model Name",id:"custom-model-name",children:[]},{value:"Schema Generation Hook",id:"schema-generation-hook",children:[]},{value:"PreSave Decorator",id:"presave-decorator",children:[]}]},{value:"Relation with Cyclic Dependency",id:"relation-with-cyclic-dependency",children:[]},{value:"Unique Validation",id:"unique-validation",children:[]},{value:"POST Form With Relational Data",id:"post-form-with-relational-data",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Generate ",(0,i.kt)("a",{parentName:"p",href:"http://mongoosejs.com/"},"Mongoose")," schema based on your domain model."),(0,i.kt)("h2",{id:"enable-the-functionality"},"Enable The Functionality"),(0,i.kt)("p",null,"MongoDB helper is optional in Plumier, it can be enabled by installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@plumier/mongoose")," module and plug ",(0,i.kt)("inlineCode",{parentName:"p"},"MongooseFacility")," into Plumier application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const plum = new Plumier()\nplum.set(new MongooseFacility({ uri: "mongodb://localhost:27017/test-data" }))\n//if no uri provided will check for environment variable PLUM_MONGODB_URI\nplum.set(new MongooseFacility())\n')),(0,i.kt)("p",null,"Mongoose facility will automatically connect to the MongoDB database and make sure it ready before application started."),(0,i.kt)("p",null,"There are several ways to use the mongodb connection: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By providing the uri on the ",(0,i.kt)("inlineCode",{parentName:"li"},"MongooseFacility")," constructor, like example above."),(0,i.kt)("li",{parentName:"ol"},"By providing the environment variable named ",(0,i.kt)("inlineCode",{parentName:"li"},"PLUM_MONGODB_URI"),". This can be achieve using ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file or by set the environment variable manually."),(0,i.kt)("li",{parentName:"ol"},"If none above provided, connection should be done manually using ",(0,i.kt)("inlineCode",{parentName:"li"},"mongoose.connect()")," function. ")),(0,i.kt)("h2",{id:"domain-model-declaration"},"Domain Model Declaration"),(0,i.kt)("p",null,"Plumier Mongoose Helper uses reflection to extract type metadata on runtime. Currently there are two domain models declaration supported"),(0,i.kt)("h3",{id:"using-property-field"},"Using Property Field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {collection } from "@plumier/mongoose"\n\n@collection()\nclass Dummy {\n    @collection.property()\n    stringProp: string\n\n    @collection.property()\n    numberProp: number\n\n    @collection.property()\n    booleanProp: boolean\n\n    @collection.property()\n    dateProp: Date\n}\n')),(0,i.kt)("p",null,"This is the common model declaration when you are familiar with Nest.js or other TypeScript framework. This declaration required ",(0,i.kt)("inlineCode",{parentName:"p"},"strictPropertyInitialization")," disabled on ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"@collection.property()")," is required when there are no decorator applied on the property. "),(0,i.kt)("h3",{id:"using-typescript-parameter-properties"},"Using TypeScript Parameter Properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {collection } from "@plumier/mongoose"\n\n@collection()\nclass Dummy {\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { }\n}\n')),(0,i.kt)("p",null,"This declaration good when ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"strict: true")," because we unable to use field properties. Using this declaration reduce the need of using ",(0,i.kt)("inlineCode",{parentName:"p"},"@collection.properties()")," on all properties. "),(0,i.kt)("h2",{id:"helper-api-overview"},"Helper API Overview"),(0,i.kt)("p",null,"Plumier Mongoose Helper help you easily map your domain model and create Mongoose model using it. Helper automatically generate schema definition based on your domain model metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n// base class, all derived class will inherit the behavior\n@collection({ timestamp: true, toJSON: { virtuals: true } })\nclass Domain {\n    @collection.property()\n    id:string\n    @collection.property({ default:false })\n    deleted:boolean\n    @collection.property()\n    createdAt:Date\n    @collection.property()\n    updatedAt:Date\n}\n\n@collection()\nclass User extends Domain{\n    constructor(\n        public name:string,\n        @collection.property({ unique:true })\n        public email:string,\n        public dateOfBirth: Date\n    ) { super() }\n}\n\n// create mongoose model\nconst UserModel = model(User)\n\n@collection()\nclass UserActivity extends Domain {\n    constructor(\n        @collection.ref(User)\n        public user: User,\n        @collection.property({ default: () => new Date() })\n        public date: Date,\n        public browser:string,\n        public os:string,\n        @reflect.types([Number])\n        public latLong: number[]\n    ){ super() }\n}\n\n// create mongoose model\nconst UserActivityModel = model(UserActivity)\n')),(0,i.kt)("h2",{id:"helper-api"},"Helper API"),(0,i.kt)("h3",{id:"basic-schema-generation"},"Basic Schema Generation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection()\nclass Dummy {\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { }\n}\n// create Mongoose model by using below\nconst DummyModel = model(Dummy)\n// example usage\nconst result = await DummyModel.findById(<id>)\n// model can be called multiple time to create other model instance\n// for example from inside controller or in other place\nconst SecondDummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"advanced-data-type"},"Advanced Data Type"),(0,i.kt)("p",null,"Array type required extra decorator information. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"@reflect.type([<type>])")," decorator to inform generator about extra type information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection()\nclass Child {\n    constructor(\n        public name:string\n    ){}\n}\n\n@collection()\nclass Dummy {\n    constructor(\n        // primitive array\n        @reflect.type([String])\n        public arrayOfPrimitive: string[],\n\n        // nested type \n        public child: Child,\n\n        // nested array of model \n        @reflect.type([Child])\n        public children: Child[],\n    ) { }\n}\n\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"nested-document-with-ref-populate"},"Nested Document With Ref (Populate)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection()\nclass Child {\n    constructor(\n        public name:string\n    ){}\n}\n\n@collection()\nclass Dummy {\n    constructor(\n        // nested type \n        @collection.ref(Child)\n        public child: Child,\n\n        // nested array of model \n        @collection.ref([Child])\n        public children: Child[],\n    ) { }\n}\n\nconst ChildModel = model(Child)\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"configure-properties"},"Configure Properties"),(0,i.kt)("p",null,"Extra Mongoose schema configuration can be passed to each decorator "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection({ timestamps: true, toJSON: { virtuals: true } })\nclass Dummy {\n    constructor(\n        @collection.property({ uppercase:true })\n        public stringProp: string,\n        @collection.property({ unique:true })\n        public email: string,\n        @collection.property({ default:() => new Date() })\n        public dateProp: Date\n    ) { }\n}\n\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Inheritance work naturally, all child document will inherit parent configuration properly. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection({ timestamp: true })\nclass DomainBase {\n    @collection.property({ default:false })\n    deleted:boolean\n    @collection.property()\n    createdAt:Date\n    @collection.property()\n    updatedAt:Date\n}\n\n@collection()\nclass Dummy extends DomainBase{\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { super() }\n}\n\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("p",null,"Using configuration above, all class inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainBase")," will have ",(0,i.kt)("inlineCode",{parentName:"p"},"deleted")," property with default value ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and properties ",(0,i.kt)("inlineCode",{parentName:"p"},"createdAt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt")," which automatically populated as timestamps."),(0,i.kt)("h3",{id:"custom-model-name"},"Custom Model Name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { model, collection } from "@plumier/mongoose"\n\n@collection({ name: "Empty" })\nclass Dummy {\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { }\n}\nconst DummyModel = model(Dummy)\n// calling next model will not require passing name\nconst SecondDummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"schema-generation-hook"},"Schema Generation Hook"),(0,i.kt)("p",null,"Its possible to provide hook when mongoose schema generated, so its possible to register the mongoose middleware from provided schema like below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'@collection({\n    hook: (schema) => {\n        schema.pre("save", async function (this: Dummy & mongoose.Document) {\n            const newString = await new Promise<string>(resolve => setTimeout(() => resolve("Delayed"), 100))\n            this.stringProp = newString\n        })\n    } \n})\nclass Dummy {\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { }\n}\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("h3",{id:"presave-decorator"},"PreSave Decorator"),(0,i.kt)("p",null,"You can add hook during schema generation, but for simple use case to hash password before saving is too messy if using hook and ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," middleware. Plumier provided ",(0,i.kt)("inlineCode",{parentName:"p"},"@collection.preSave()")," decorator to automatically call decorated method before save."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'@collection()\nclass Dummy {\n    constructor(\n        public stringProp: string,\n        public numberProp: number,\n        public booleanProp: boolean,\n        public dateProp: Date\n    ) { }\n\n    @collection.preSave()\n    async beforeSave() {\n        this.stringProp = await new Promise<string>(resolve => setTimeout(() => resolve("Delayed"), 100))\n    }\n}\nconst DummyModel = model(Dummy)\n')),(0,i.kt)("h2",{id:"relation-with-cyclic-dependency"},"Relation with Cyclic Dependency"),(0,i.kt)("p",null,"Its possible to map relation with cyclic dependency using mongoose helper using ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," method. ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," will defer schema generation until its first accessed, thus make it able to get the proper data type."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note when you define model with cyclic dependency its required to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref<T>"),"  data type and use callback on the ",(0,i.kt)("inlineCode",{parentName:"p"},"@collection.ref()")," parameter to prevent TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"ReferenceError: Model is not defined")," error."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { collection, proxy, Ref } from "@plumier/mongoose"\n\n@collection()\nclass Child {\n    constructor(\n        public name:string,\n        // use callback to define ref type\n        @collection.ref(x => Dummy)\n        // use Ref<T> to define data type\n        public dummy:Ref<Dummy>\n    ){}\n}\n\nconst ChildModel = proxy(Child)\n\n@collection()\nclass Dummy {\n    constructor(\n        public name:string,\n        // nested array of model \n        @collection.ref(x => [Child])\n        public children: Ref<Child[]>,\n    ) { }\n}\n\nconst DummyModel = proxy(Dummy)\n')),(0,i.kt)("h2",{id:"unique-validation"},"Unique Validation"),(0,i.kt)("p",null,"Mongoose helper provided ",(0,i.kt)("inlineCode",{parentName:"p"},"@val.unique()")," that augmented (merged) with ",(0,i.kt)("inlineCode",{parentName:"p"},"@plumier/validator")," module. Means if you install ",(0,i.kt)("inlineCode",{parentName:"p"},"@plumier/mongoose")," ",(0,i.kt)("inlineCode",{parentName:"p"},"@val")," decorator will automatically has ",(0,i.kt)("inlineCode",{parentName:"p"},"unique()")," function."),(0,i.kt)("p",null,"This function is not using the mongoose ",(0,i.kt)("inlineCode",{parentName:"p"},"unique")," schema, but it automatically check to the database for uniqueness, so validation engine can execute the validation rule without touching controller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { val } from "plumier"\n\n@collection()\nexport class User {\n    constructor(\n        public name: string,\n        @val.unique()\n        public email:string,\n        public image: string,\n        public address:string,\n        public city:string,\n        public zip:string,\n    ) { }\n}\n')),(0,i.kt)("h2",{id:"post-form-with-relational-data"},"POST Form With Relational Data"),(0,i.kt)("p",null,"Mongoose helper provided custom object converter, so it possible to post relational data (with populate) from HTML Form by providing the ObjectId of the child model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"//domains\n@collection()\nclass Image {\n    constructor(\n        public name: string\n    ) { }\n}\n@collection()\nclass Animal {\n    constructor(\n        public name: string,\n        @collection.ref([Image])\n        public images: Image[]\n    ) { }\n}\nconst ImageModel = model(Image)\nconst AnimalModel = model(Animal)\n\n//controller\nclass AnimalController {\n    @route.post()\n    async save(data: Animal) {\n        const newly = await new AnimalModel(data).save()\n        return newly._id\n    }\n}\n")),(0,i.kt)("p",null,"Above code showing that we created a route named ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /animal/save")," which will save Animal information with relational data which is images data that previously saved. Below request will be valid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /animal/save\npayload:\n{name: "Mimi", images: ["507f191e810c19729de860ea", "507f191e810c19729de239ca"]}\n')))}s.isMDXComponent=!0}}]);