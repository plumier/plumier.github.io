(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[557],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4413:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(7560),a=n(8283),l=(n(2784),n(876)),i=["components"],o={id:"query-parser",title:"Query Parser"},d={unversionedId:"query-parser",id:"query-parser",isDocsHomePage:!1,title:"Query Parser",description:"Plumier provided tools to parse query string for select, order and filter functionality and transform them into native TypeORM or Mongoose query. If you are using generic controller you may familiar with its query string below.",source:"@site/docs/Query-Parser.md",sourceDirName:".",slug:"/query-parser",permalink:"/query-parser",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Query-Parser.md",version:"current",frontMatter:{id:"query-parser",title:"Query Parser"},sidebar:"overview",previous:{title:"Mongoose Helper",permalink:"/mongoose-helper"},next:{title:"Swagger",permalink:"/swagger"}},p=[{value:"Filter Parser",id:"filter-parser",children:[]},{value:"Select Parser",id:"select-parser",children:[]},{value:"Order Parser",id:"order-parser",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Plumier provided tools to parse query string for select, order and filter functionality and transform them into native TypeORM or Mongoose query. If you are using generic controller you may familiar with its query string below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/users?select=name,dob&order=-dob,name&filter=(name='john'* and active = true)\n")),(0,l.kt)("p",null,"Above features uses query parser to parse ",(0,l.kt)("inlineCode",{parentName:"p"},"select"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"order")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," query string into native query. By using query parser all query translated and checked for validation and authorization. "),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Query parser (select parser, order parser, filter parser) will not able to evaluate auth policy created using ",(0,l.kt)("a",{parentName:"p",href:"/generic-controller#entity-authorization-policy"},"Entity Policy")," since the authorization logic may calculated dynamically based on the data. "),(0,l.kt)("p",{parentName:"div"},"By default query parser will forbid access to the property secured with entity policy. To fix this issue, add more ",(0,l.kt)("inlineCode",{parentName:"p"},"@authorize.read()")," access that defined with ",(0,l.kt)("inlineCode",{parentName:"p"},"entityPolicy")," to allow query access."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'@Entity()\nclass FilterModel {\n    // this column will not accessible by filter/select/order\n    @authorize.read("Owner")\n    @Column()\n    columnOne:string\n\n    // this column allowed queried (filter/select/order) by Admin\n    @authorize.read("Owner", "Admin")\n    @Column()\n    columnTwo:string\n}\n\nentityPolicy(FilterModel).register("Owner", ({user}, id) => { /** the logic **/ })\nauthPolicy().register("Admin", ({user}) => { /** the logic **/ })\n\n')))),(0,l.kt)("h2",{id:"filter-parser"},"Filter Parser"),(0,l.kt)("p",null,"Filter parser is a custom type converter specifically used to parse query syntax and transform it into native ORM query based on installed facility ",(0,l.kt)("inlineCode",{parentName:"p"},"MongooseFacility")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeORMFacility"),". This tools possible API client to use syntax expression on query string like below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/users?filter=(name = \"john\"* and dateOfBirth = '1980-1-1'...'1999-1-1')\n")),(0,l.kt)("p",null,"Above expression parsed into native MongoDB query when ",(0,l.kt)("inlineCode",{parentName:"p"},"MongooseFacility")," installed like below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{ \n    $and: [\n        { name: { $regex: \"^john\", $options: \"i\" }},\n        {\n            $and: [\n                { dateOfBirth: { $gte: Date('1980-1-1') }},\n                { dateOfBirth: { $lte: Date('1999-1-1') }},\n            ]\n        }\n    ]\n}\n")),(0,l.kt)("p",null,"And if ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeORMFacility")," installed it will parsed into TypeORM find option like below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    name: Like(\"john%\"), dateOfBirth: Between(Date('1980-1-1'), Date('1999-1-1'))\n}\n")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Filter parser respects ",(0,l.kt)("inlineCode",{parentName:"p"},"@authorize.read()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"@authorize.writeonly()"),", its means you will need proper policy to query property secured with ",(0,l.kt)("inlineCode",{parentName:"p"},"@authorize.read()")," and will not able to query property with ",(0,l.kt)("inlineCode",{parentName:"p"},"@authorize.writeonly()"),". "),(0,l.kt)("p",null,"Filter parser required a model to define the data structure and data type of the query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'@Entity()\nclass UserFilter {\n    @Column()\n    name:string\n\n    // password will not filterable by anyone\n    @authorize.readonly()\n    @Column()\n    password:string\n\n    @Column()\n    deleted:boolean\n\n    // authorize email filter only accessible by Admin\n    @authorize.read("Admin")\n    @Column()\n    email:string\n}\n\nclass UsersController {\n    @route.get("")\n    list(@filterParser(x => User) filter:any) {\n        // filter can be used directly on mongoose model\n        UserModel.find(filter)\n        // or typeorm find option \n        userRepo.find({ where: filter })\n    }\n}\n')),(0,l.kt)("p",null,"Above code showing that we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"@filterParser()")," decorator on ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," parameter which will receive the parsed query. Using above code its possible to perform query like below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'find user name starts with "john"\n/users?filter=(name = "john"* and deleted = false)\n\nfind user email (only accessible by Admin)\n/users?filter=(email = "john.doe@gmail.com")\n')),(0,l.kt)("h4",{id:"language-specification"},"Language Specification"),(0,l.kt)("p",null,"The language supports some simple logical expression with some native data type. The logic expression supported are: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=")),(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'name = "john"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},"Not Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'name != "john"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},"Greater"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'dateOfBirth > "1991-1-1"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"Greater or Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'dateOfBirth >= "1991-1-1"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},"Less"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'dateOfBirth < "1991-1-1"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},"Less or Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'dateOfBirth <= "1991-1-1"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!")),(0,l.kt)("td",{parentName:"tr",align:null},"Not"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'!(dateOfBirth > "1991-1-1")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AND")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"and")),(0,l.kt)("td",{parentName:"tr",align:null},"And"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'name = "john" and deleted = false'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OR")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"or")),(0,l.kt)("td",{parentName:"tr",align:null},"Or"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'name = "john" or deleted = false'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(")," abd ",(0,l.kt)("inlineCode",{parentName:"td"},")")),(0,l.kt)("td",{parentName:"tr",align:null},"Group"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'(name = "john" or deleted = true) and createdAt = "2020-1-1"'))))),(0,l.kt)("p",null,"The query language also supports literals and identifier "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Literal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Property"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier string ends with number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"deleted"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"dateOfBirth123"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"String literal uses quotes ",(0,l.kt)("inlineCode",{parentName:"td"},"'")," or ",(0,l.kt)("inlineCode",{parentName:"td"},'"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'john'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"john"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"12345"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"12345.456"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date specified by string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2020-1-1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2020-01-01T00:00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Null"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify null value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range"),(0,l.kt)("td",{parentName:"tr",align:null},"Range of number or date"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10...50"),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"2020-1-1"..."2021-1-1"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start With"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify string start with string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"john"*'),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'john'*")," note that ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," is outside the quote")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End With"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify string ends with string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'*"john"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},"*'john'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contains"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify string contains string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'*"john"*'),", ",(0,l.kt)("inlineCode",{parentName:"td"},"*'john'*"))))),(0,l.kt)("p",null,"Example of valid filter "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deleted=false\n\nname = \"john\"* and deleted = false\n\ncreatedAt = '2020-1-1'...'2020-2-1' and (active = true or deleted = false)\n")),(0,l.kt)("h2",{id:"select-parser"},"Select Parser"),(0,l.kt)("p",null,"Select parser used to parse select query string, it receives comma delimited string of list of columns to be selected. Relation columns automatically detected and returned separately. "),(0,l.kt)("h4",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,"To use the select parser you need to use a model for the parser, for example for model below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass Log {\n    @PrimaryGeneratedColumn()\n    id:number\n\n    @Column()\n    message:string\n\n    @ManyToOne(x => User)\n    createdBy:User\n\n    @CreateDateColumn()\n    createdAt:Date\n}\n")),(0,l.kt)("p",null,"You can use above entity as the model of select parser like code below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { route, selectParser, SelectQuery } from "plumier"\n\nclass LogsController {\n    @route.get("")\n    list(@selectParser(x => Log) select: SelectQuery) {\n        const repo = getRepository(Log)\n        return repo.find({ relations: select.relations, select: select.columns })\n        // when using mongoose \n        // return LogModel.find({}, select.columns).populate(select.relations)\n    }\n}\n')),(0,l.kt)("p",null,"When provided select query like below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/logs?select=id,message,createdBy,createdAt\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," parameter of ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," action will populated with parsed select query that can be used directly with TypeORM or Mongoose. Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"createdBy")," column will be returned in ",(0,l.kt)("inlineCode",{parentName:"p"},"relations")," property since it is a relation property, while the other columns will be returned in ",(0,l.kt)("inlineCode",{parentName:"p"},"columns")," property. "),(0,l.kt)("h2",{id:"order-parser"},"Order Parser"),(0,l.kt)("p",null,"Order parser used to parse order query string, its mostly the same as select parser, receives comma delimited string to specify the order priority. By default order direction is ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC"),", for ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," direction can be specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,l.kt)("h4",{id:"usage-2"},"Usage"),(0,l.kt)("p",null,"To use the order parser you need to use a model for the parser like below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass Log {\n    @PrimaryGeneratedColumn()\n    id:number\n\n    @Column()\n    message:string\n\n    @ManyToOne(x => User)\n    createdBy:User\n\n    @CreateDateColumn()\n    createdAt:Date\n}\n")),(0,l.kt)("p",null,"You can use above entity as the model of select parser like code below "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { route, orderParser } from "plumier"\n\nclass LogsController {\n    @route.get("")\n    list(@orderParser(x => Log) order:any) {\n        const repo = getRepository(Log)\n        return repo.find({ order })\n        // when using mongoose \n        // return LogModel.find({}).sort(order)\n    }\n}\n')),(0,l.kt)("p",null,"Example valid order is like below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/logs?select=-createdAt,createdBy\n")),(0,l.kt)("p",null,"Above query will order Log by createdAt desc and createdBy asc."))}u.isMDXComponent=!0}}]);