(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||l;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),l=(n(0),n(116)),i={id:"query-parser",title:"Query Parser"},o={unversionedId:"query-parser",id:"query-parser",isDocsHomePage:!1,title:"Query Parser",description:"Plumier provided tools to parse query string for select, order and filter functionality and transform them into native TypeORM or Mongoose query. If you are using generic controller you may familiar with its query string below.",source:"@site/docs/Query-Parser.md",slug:"/query-parser",permalink:"/query-parser",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Query-Parser.md",version:"current",sidebar:"overview",previous:{title:"Mongoose Helper",permalink:"/mongoose-helper"},next:{title:"Swagger",permalink:"/swagger"}},b=[{value:"Filter Parser",id:"filter-parser",children:[]},{value:"Select Parser",id:"select-parser",children:[]},{value:"Order Parser",id:"order-parser",children:[]}],c={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Plumier provided tools to parse query string for select, order and filter functionality and transform them into native TypeORM or Mongoose query. If you are using generic controller you may familiar with its query string below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"/users?select=name,dob&order=-dob,name&filter=(name='john'* and active = true)\n")),Object(l.b)("p",null,"Above features uses query parser to parse ",Object(l.b)("inlineCode",{parentName:"p"},"select"),", ",Object(l.b)("inlineCode",{parentName:"p"},"order")," and ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," query string into native query. By using query parser all query translated and checked for validation and authorization. "),Object(l.b)("h2",{id:"filter-parser"},"Filter Parser"),Object(l.b)("p",null,"Filter parser is a custom type converter specifically used to parse query syntax and transform it into native ORM query based on installed facility ",Object(l.b)("inlineCode",{parentName:"p"},"MongooseFacility")," or ",Object(l.b)("inlineCode",{parentName:"p"},"TypeORMFacility"),". This tools possible API client to use syntax expression on query string like below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"/users?filter=(name = \"john\"* and dateOfBirth = '1980-1-1'...'1999-1-1')\n")),Object(l.b)("p",null,"Above expression parsed into native MongoDB query when ",Object(l.b)("inlineCode",{parentName:"p"},"MongooseFacility")," installed like below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"{ \n    $and: [\n        { name: { $regex: \"^john\", $options: \"i\" }},\n        {\n            $and: [\n                { dateOfBirth: { $gte: Date('1980-1-1') }},\n                { dateOfBirth: { $lte: Date('1999-1-1') }},\n            ]\n        }\n    ]\n}\n")),Object(l.b)("p",null,"And if ",Object(l.b)("inlineCode",{parentName:"p"},"TypeORMFacility")," installed it will parsed into TypeORM find option like below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"{\n    name: Like(\"john%\"), dateOfBirth: Between(Date('1980-1-1'), Date('1999-1-1'))\n}\n")),Object(l.b)("h4",{id:"usage"},"Usage"),Object(l.b)("p",null,"Filter parser respects ",Object(l.b)("inlineCode",{parentName:"p"},"@authorize.read()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"@authorize.writeonly()"),", its means you will need proper policy to query property secured with ",Object(l.b)("inlineCode",{parentName:"p"},"@authorize.read()")," and will not able to query property with ",Object(l.b)("inlineCode",{parentName:"p"},"@authorize.writeonly()"),". "),Object(l.b)("p",null,"Filter parser required a model to define the data structure and data type of the query."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'@Entity()\nclass UserFilter {\n    @Column()\n    name:string\n\n    // password will not filterable by anyone\n    @authorize.readonly()\n    @Column()\n    password:string\n\n    @Column()\n    deleted:boolean\n\n    // authorize email filter only accessible by Admin\n    @authorize.read("Admin")\n    @Column()\n    email:string\n}\n\nclass UsersController {\n    @route.get("")\n    list(@filterParser(x => User) filter:any) {\n        // filter can be used directly on mongoose model\n        UserModel.find(filter)\n        // or typeorm find option \n        userRepo.find({ where: filter })\n    }\n}\n')),Object(l.b)("p",null,"Above code showing that we specify ",Object(l.b)("inlineCode",{parentName:"p"},"@filterParser()")," decorator on ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," parameter which will receive the parsed query. Using above code its possible to perform query like below "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'find user name starts with "john"\n/users?filter=(name = "john"* and deleted = false)\n\nfind user email (only accessible by Admin)\n/users?filter=(email = "john.doe@gmail.com")\n')),Object(l.b)("h4",{id:"language-specification"},"Language Specification"),Object(l.b)("p",null,"The language supports some simple logical expression with some native data type. The logic expression supported are: "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operator"),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"=")),Object(l.b)("td",{parentName:"tr",align:null},"Equals"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'name = "john"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"!=")),Object(l.b)("td",{parentName:"tr",align:null},"Not Equals"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'name != "john"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},">")),Object(l.b)("td",{parentName:"tr",align:null},"Greater"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'dateOfBirth > "1991-1-1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},">=")),Object(l.b)("td",{parentName:"tr",align:null},"Greater or Equals"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'dateOfBirth >= "1991-1-1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"<")),Object(l.b)("td",{parentName:"tr",align:null},"Less"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'dateOfBirth < "1991-1-1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"<=")),Object(l.b)("td",{parentName:"tr",align:null},"Less or Equals"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'dateOfBirth <= "1991-1-1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"!")),Object(l.b)("td",{parentName:"tr",align:null},"Not"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'!(dateOfBirth > "1991-1-1")'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"AND")," or ",Object(l.b)("inlineCode",{parentName:"td"},"and")),Object(l.b)("td",{parentName:"tr",align:null},"And"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'name = "john" and deleted = false'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"OR")," or ",Object(l.b)("inlineCode",{parentName:"td"},"or")),Object(l.b)("td",{parentName:"tr",align:null},"Or"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'name = "john" or deleted = false'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"(")," abd ",Object(l.b)("inlineCode",{parentName:"td"},")")),Object(l.b)("td",{parentName:"tr",align:null},"Group"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'(name = "john" or deleted = true) and createdAt = "2020-1-1"'))))),Object(l.b)("p",null,"The query language also supports literals and identifier "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Literal"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Property"),Object(l.b)("td",{parentName:"tr",align:null},"Identifier string ends with number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"name"),", ",Object(l.b)("inlineCode",{parentName:"td"},"deleted"),", ",Object(l.b)("inlineCode",{parentName:"td"},"dateOfBirth123"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"String literal uses quotes ",Object(l.b)("inlineCode",{parentName:"td"},"'")," or ",Object(l.b)("inlineCode",{parentName:"td"},'"')),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"'john'"),", ",Object(l.b)("inlineCode",{parentName:"td"},'"john"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"12345"),", ",Object(l.b)("inlineCode",{parentName:"td"},"12345.456"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"),", ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"Date specified by string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"2020-1-1"),", ",Object(l.b)("inlineCode",{parentName:"td"},"2020-01-01T00:00"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Null"),Object(l.b)("td",{parentName:"tr",align:null},"Specify null value"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NULL"),", ",Object(l.b)("inlineCode",{parentName:"td"},"null"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Range"),Object(l.b)("td",{parentName:"tr",align:null},"Range of number or date"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"10...50"),", ",Object(l.b)("inlineCode",{parentName:"td"},'"2020-1-1"..."2021-1-1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Start With"),Object(l.b)("td",{parentName:"tr",align:null},"Specify string start with string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"john"*'),", ",Object(l.b)("inlineCode",{parentName:"td"},"'john'*")," note that ",Object(l.b)("inlineCode",{parentName:"td"},"*")," is outside the quote")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"End With"),Object(l.b)("td",{parentName:"tr",align:null},"Specify string ends with string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'*"john"'),", ",Object(l.b)("inlineCode",{parentName:"td"},"*'john'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Contains"),Object(l.b)("td",{parentName:"tr",align:null},"Specify string contains string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'*"john"*'),", ",Object(l.b)("inlineCode",{parentName:"td"},"*'john'*"))))),Object(l.b)("p",null,"Example of valid filter "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"deleted=false\n\nname = \"john\"* and deleted = false\n\ncreatedAt = '2020-1-1'...'2020-2-1' and (active = true or deleted = false)\n")),Object(l.b)("h2",{id:"select-parser"},"Select Parser"),Object(l.b)("p",null,"Select parser used to parse select query string, it receives comma delimited string of list of columns to be selected. Relation columns automatically detected and returned separately. "),Object(l.b)("h4",{id:"usage-1"},"Usage"),Object(l.b)("p",null,"To use the select parser you need to use a model for the parser, for example for model below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass Log {\n    @PrimaryGeneratedColumn()\n    id:number\n\n    @Column()\n    message:string\n\n    @ManyToOne(x => User)\n    createdBy:User\n\n    @CreateDateColumn()\n    createdAt:Date\n}\n")),Object(l.b)("p",null,"You can use above entity as the model of select parser like code below "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'import { route, selectParser, SelectQuery } from "plumier"\n\nclass LogsController {\n    @route.get("")\n    list(@selectParser(x => Log) select: SelectQuery) {\n        const repo = getRepository(Log)\n        return repo.find({ relations: select.relations, select: select.columns })\n        // when using mongoose \n        // return LogModel.find({}, select.columns).populate(select.relations)\n    }\n}\n')),Object(l.b)("p",null,"When provided select query like below"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"/logs?select=id,message,createdBy,createdAt\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"select")," parameter of ",Object(l.b)("inlineCode",{parentName:"p"},"list")," action will populated with parsed select query that can be used directly with TypeORM or Mongoose. Note that the ",Object(l.b)("inlineCode",{parentName:"p"},"createdBy")," column will be returned in ",Object(l.b)("inlineCode",{parentName:"p"},"relations")," property since it is a relation property, while the other columns will be returned in ",Object(l.b)("inlineCode",{parentName:"p"},"columns")," property. "),Object(l.b)("h2",{id:"order-parser"},"Order Parser"),Object(l.b)("p",null,"Order parser used to parse order query string, its mostly the same as select parser, receives comma delimited string to specify the order priority. By default order direction is ",Object(l.b)("inlineCode",{parentName:"p"},"ASC"),", for ",Object(l.b)("inlineCode",{parentName:"p"},"DESC")," direction can be specified by ",Object(l.b)("inlineCode",{parentName:"p"},"-"),"."),Object(l.b)("h4",{id:"usage-2"},"Usage"),Object(l.b)("p",null,"To use the order parser you need to use a model for the parser like below"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass Log {\n    @PrimaryGeneratedColumn()\n    id:number\n\n    @Column()\n    message:string\n\n    @ManyToOne(x => User)\n    createdBy:User\n\n    @CreateDateColumn()\n    createdAt:Date\n}\n")),Object(l.b)("p",null,"You can use above entity as the model of select parser like code below "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},'import { route, orderParser } from "plumier"\n\nclass LogsController {\n    @route.get("")\n    list(@orderParser(x => Log) order:any) {\n        const repo = getRepository(Log)\n        return repo.find({ order })\n        // when using mongoose \n        // return LogModel.find({}).sort(order)\n    }\n}\n')),Object(l.b)("p",null,"Example valid order is like below"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"/logs?select=-createdAt,createdBy\n")),Object(l.b)("p",null,"Above query will order Log by createdAt desc and createdBy asc."))}d.isMDXComponent=!0}}]);