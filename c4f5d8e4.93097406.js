(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{144:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),a&&a.focus(),o};e.exports=a,e.exports.default=a},145:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},147:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r),o=n(115),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,s=[],i=[s];o>-1;){for(;(l=a[o]++)<r[o];){var c=void 0,u=t[o],y=n[o][l];if("string"==typeof y?(u=o>0?u:["plain"],c=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),c=y.content),"string"==typeof c){var g=c.split(m),h=g.length;s.push({types:u,content:g[0]});for(var b=1;b<h;b++)p(s),i.push(s=[]),s.push({types:u,content:g[b]})}else o++,t.push(u),n.push(c),a.push(0),r.push(c.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return p(s),i}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=n(144),f=n.n(b),E=n(145),v=n.n(E),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(125),O=n(114);var P=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||k,a=e.darkTheme||n;return t?a:n},N=n(55),T=n.n(N);const S=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},C=/(?:title=")(.*)(?:")/;t.a=({children:e,className:t,metastring:n})=>{const{prism:s}=Object(O.useThemeConfig)(),[c,u]=Object(r.useState)(!1),[m,p]=Object(r.useState)(!1);Object(r.useEffect)((()=>{p(!0)}),[]);const d=Object(r.useRef)(null);let y=[],g="";const b=P(),E=Array.isArray(e)?e.join(""):e;if(n&&S.test(n)){const e=n.match(S)[1];y=v()(e).filter((e=>e>0))}n&&C.test(n)&&(g=n.match(C)[1]);let k=t&&t.replace(/language-/,"");!k&&s.defaultLanguage&&(k=s.defaultLanguage);let j=E.replace(/\n$/,"");if(0===y.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(k),n=E.replace(/\n$/,"").split("\n");let a;for(let r=0;r<n.length;){const l=r+1,o=n[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":a=l;break;case"highlight-end":e+=`${a}-${l-1},`}n.splice(r,1)}else r+=1}y=v()(e),j=n.join("\n")}const N=()=>{f()(j),u(!0),setTimeout((()=>u(!1)),2e3)};return l.a.createElement(h,Object(a.a)({},i,{key:String(m),theme:b,code:j,language:k}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:s})=>l.a.createElement(l.a.Fragment,null,g&&l.a.createElement("div",{style:t,className:T.a.codeBlockTitle},g),l.a.createElement("div",{className:T.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:g})},l.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>l.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(T.a.copyButton),onClick:N},c?"Copied":"Copy")))))}},97:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),l=n.n(r),o=n(115),s=n(127),i=n(147),c=n(118),u=n(22),m=(n(125),n(119),n(98)),p=n.n(m);const d=[{title:"First Class Entity",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Upgrade ORM entity into First Class Entity to have more control to most framework features such as request/response body schema, authorization, validation, generated routes."),l.a.createElement("p",null,"In the background, Plumier creates CRUD Restful generic controller uses ORM entity as its data model, example produces:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"POST /items")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"GET /items?offset&limit&filter&select")," accessible by any login user"),l.a.createElement("li",null,l.a.createElement("code",null,"GET /items/{id}")," accessible by any login user"),l.a.createElement("li",null,l.a.createElement("code",null,"POST /items/{id}")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"PUT /items/{id}")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"DELETE /items/{id}")," accessible by Supervisor and Staff"))),link:{url:"generic-controller"},code:'// create CRUD generic controller on the fly\n@route.controller(c => {\n  // authorize post, put, patch, delete\n  c.mutators().authorize("Supervisor", "Staff");\n})\n// use TypeORM entity as generic controller model\n@Entity()\nexport class Item {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  // validate max characters allowed\n  @val.length({ max: 128 })\n  @Column()\n  name: string;\n\n  // authorize request/response body property\n  @authorize.readWrite("Supervisor", "Staff")\n  @Column()\n  basePrice: number;\n\n  // authorize request body property\n  @authorize.write("Supervisor")\n  @Column()\n  price: number;\n}'},{title:"Nested First Class Entity",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Turn One-To-Many relation of ORM entity into nested Restful API. Nested first class entity handled by specialized nested generic controller."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"POST /posts/{pid}/comments")),l.a.createElement("li",null,l.a.createElement("code",null,"GET /posts/{pid}/comments?offset&limit&filter&select")),l.a.createElement("li",null,l.a.createElement("code",null,"GET /posts/{pid}/comments/{id}")),l.a.createElement("li",null,l.a.createElement("code",null,"POST /posts/{pid}/comments/{id}")),l.a.createElement("li",null,l.a.createElement("code",null,"PUT /posts/{pid}/comments/{id}")),l.a.createElement("li",null,l.a.createElement("code",null,"DELETE /posts/{pid}/comments/{id}")))),link:{url:"generic-controller"},code:"@Entity()\nexport class Post {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  // turn one to many relation into nested API\n  @route.controller()\n  @OneToMany(x => Comment, x => x.post)\n  comments: Comment[]\n}\n\n@Entity()\nexport class Comment {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column()\n  comment:string\n}"},{title:"Policy Based Authorization",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Plumier supported securing API with JWT out of the box. Plumier also provided authorization to restrict user access based on specific logic defined by you. You define your authorization logic in separate location, then apply it using decorators."),l.a.createElement("p",null,"In the background Plumier validates your authorization policy to prevent mistyped policy name, or possibly duplicate/conflict policy name.")),link:{url:"security"},code:'// register with authorization policy builder\nauthPolicy()\n\n  // register role\n  .register("Supervisor", ({ user }) => {\n      // "user" is JWT claim from request header\n      // return true to authorize otherwise false\n      // also possible to return Promise<boolean>\n      return user?.role === "Supervisor"\n  })\n\n  // chain-able registration method\n  .register("Staff", ({ user }) => {\n      return user?.role === "Staff"\n  })'},{title:"Controllers",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Require more flexible response result then using First Class Entity? No problem, you still can use controller to handle user request."),l.a.createElement("p",null,"Plumier controller inspired by ASP.Net MVC controllers, and take important role in Plumier system."),l.a.createElement("ul",null,l.a.createElement("li",null,"Routes generated based on controller name and action name."),l.a.createElement("li",null,"Parameter binding using parameter name or decorators."),l.a.createElement("li",null,"Extra data type conversion with simple sanitation for each controller parameter."),l.a.createElement("li",null,"Policy based authorization that applicable using decorators."))),link:{url:"controller"},code:'export class UsersController {\n  readonly repo = new TypeORMRepository(User)\n\n  // GET /users/:id\n  @route.get(":id")\n  get(id:string) { \n\n      // return value or Promise \n      // automatically rendered into JSON response\n      return this.repo.findOne(id)\n  }\n\n  // POST /users\n  @route.post("")\n  // data parameter bound to request body\n  save(data:User) {\n    return this.repo.insert(data)\n  }\n}'},{title:"Swagger UI with Open API v3",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Open API v3 schema automatically generated from controller metadata. Mostly no configuration required, but some minor tweak can be applied to get result match your need.")),link:{url:"swagger"},image:"/img/swagger.png"}];function y(){return l.a.createElement(l.a.Fragment,null,d.map(((e,t)=>l.a.createElement(g,Object(a.a)({key:t,index:t},e)))))}function g({description:e,title:t,code:n,link:a,index:r,image:s}){const i=r%2==0;return l.a.createElement("section",{className:Object(o.a)(p.a.feature,i?p.a.sectionDark:p.a.sectionLight)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",p.a.featureContainer,i?p.a.featureContainerOdd:p.a.featureContainerEven)},l.a.createElement("div",{className:Object(o.a)("col col--5",p.a.codeFont)},n?l.a.createElement(h,{code:n}):l.a.createElement("img",{className:p.a.featureImage,src:s})),l.a.createElement("div",{className:Object(o.a)("col col--7",p.a.featureDescription)},l.a.createElement("h3",null,"Feature"),l.a.createElement("h1",null,t),l.a.createElement("div",null,e),l.a.createElement(c.a,{to:a.url,className:Object(o.a)("button button--secondary button--lg",p.a.featureButton)},"Learn more about this feature")))))}function h({code:e}){return l.a.createElement("div",{className:Object(o.a)(p.a.codeBorder)},l.a.createElement("div",{className:Object(o.a)(p.a.codeTitleBox)},l.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbRed)}),l.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbGreen)}),l.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbBlue)})),l.a.createElement(i.a,{metastring:"typescript",className:"typescript"},e))}t.default=function(){const e=Object(u.default)(),{siteConfig:t={}}=e;return l.a.createElement(s.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:Object(o.a)("hero ",p.a.heroBanner)},l.a.createElement("div",{className:Object(o.a)("container",p.a.heroContainer)},l.a.createElement("h2",{className:"hero__subtitle"},t.title),l.a.createElement("h1",{className:"hero__title"},t.tagline),l.a.createElement("p",null,"A TypeScript backend framework focuses on development productivity, uses dedicated reflection library to help you create a robust, secure and fast API delightfully."),l.a.createElement("div",{className:p.a.buttons},l.a.createElement(c.a,{className:Object(o.a)("button button--primary button--lg"),to:"quick-start"},"Quick Start"),l.a.createElement(c.a,{className:Object(o.a)("button button--secondary button--lg"),to:"plumier-in-five-minutes"},"Plumier in Five Minutes")))),l.a.createElement("main",null,l.a.createElement(y,null)))}}}]);