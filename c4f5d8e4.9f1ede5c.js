(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{144:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return n.remove(),r&&(l.removeAllRanges(),l.addRange(r)),a&&a.focus(),o};e.exports=a,e.exports.default=a},145:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},147:function(e,t,n){"use strict";var a=n(3),l=n(0),r=n.n(l),o=n(115),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=u({},n,{backgroundColor:null}),l};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?u({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,o=u({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?u({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],r=0,o=0,c=[],s=[c];o>-1;){for(;(r=a[o]++)<l[o];){var i=void 0,u=t[o],y=n[o][r];if("string"==typeof y?(u=o>0?u:["plain"],i=y):(u=p(u,y.type),y.alias&&(u=p(u,y.alias)),i=y.content),"string"==typeof i){var g=i.split(m),h=g.length;c.push({types:u,content:g[0]});for(var E=1;E<h;E++)d(c),s.push(c=[]),c.push({types:u,content:g[E]})}else o++,t.push(u),n.push(i),a.push(0),l.push(i.length)}o--,t.pop(),n.pop(),a.pop(),l.pop()}return d(c),s}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),E=n(144),b=n.n(E),f=n(145),v=n.n(f),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(125),O=n(114);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||k,a=e.darkTheme||n;return t?a:n},P=n(55),T=n.n(P);const C=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},S=/(?:title=")(.*)(?:")/;t.a=({children:e,className:t,metastring:n})=>{const{prism:c}=Object(O.useThemeConfig)(),[i,u]=Object(l.useState)(!1),[m,d]=Object(l.useState)(!1);Object(l.useEffect)((()=>{d(!0)}),[]);const p=Object(l.useRef)(null);let y=[],g="";const E=N(),f=Array.isArray(e)?e.join(""):e;if(n&&C.test(n)){const e=n.match(C)[1];y=v()(e).filter((e=>e>0))}n&&S.test(n)&&(g=n.match(S)[1]);let k=t&&t.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);let j=f.replace(/\n$/,"");if(0===y.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(k),n=f.replace(/\n$/,"").split("\n");let a;for(let l=0;l<n.length;){const r=l+1,o=n[l].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":e+=`${a}-${r-1},`}n.splice(l,1)}else l+=1}y=v()(e),j=n.join("\n")}const P=()=>{b()(j),u(!0),setTimeout((()=>u(!1)),2e3)};return r.a.createElement(h,Object(a.a)({},s,{key:String(m),theme:E,code:j,language:k}),(({className:e,style:t,tokens:n,getLineProps:l,getTokenProps:c})=>r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:t,className:T.a.codeBlockTitle},g),r.a.createElement("div",{className:T.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:g})},r.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=l({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t}))))))})))),r.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(T.a.copyButton),onClick:P},i?"Copied":"Copy")))))}},97:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n(0),r=n.n(l),o=n(115),c=n(127),s=n(147),i=n(118),u=n(22),m=n(125),d=(n(119),n(98)),p=n.n(d),y=[{title:"First Class Entity",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Upgrade ORM entity into First Class Entity to have more control to most framework features such as request/response body schema, authorization, validation, generated routes. In the background, Plumier creates CRUD Restful generic controller uses ORM entity as its data model."),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Method"),r.a.createElement("th",null,"Path"),r.a.createElement("th",null,"Accessible By"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"GET"),r.a.createElement("td",null,r.a.createElement("code",null,"/items")),r.a.createElement("td",null,"All login users")),r.a.createElement("tr",null,r.a.createElement("td",null,"GET"),r.a.createElement("td",null,r.a.createElement("code",null,"/items/{id}")),r.a.createElement("td",null,"All login users")),r.a.createElement("tr",null,r.a.createElement("td",null,"POST"),r.a.createElement("td",null,r.a.createElement("code",null,"/items")),r.a.createElement("td",null,"Supervisor, Staff")),r.a.createElement("tr",null,r.a.createElement("td",null,"PUT"),r.a.createElement("td",null,r.a.createElement("code",null,"/items/{id}")),r.a.createElement("td",null,"Supervisor, Staff")),r.a.createElement("tr",null,r.a.createElement("td",null,"PATCH"),r.a.createElement("td",null,r.a.createElement("code",null,"/items/{id}")),r.a.createElement("td",null,"Supervisor, Staff")),r.a.createElement("tr",null,r.a.createElement("td",null,"DELETE"),r.a.createElement("td",null,r.a.createElement("code",null,"/items/{id}")),r.a.createElement("td",null,"Supervisor, Staff"))))),link:{url:"generic-controller"},code:'// create CRUD generic controller on the fly\n@route.controller(c => {\n  // authorize post, put, patch, delete\n  c.mutators().authorize("Supervisor", "Staff");\n})\n// use TypeORM entity as generic controller model\n@Entity()\nexport class Item {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  // validate max characters allowed\n  @val.length({ max: 128 })\n  @Column()\n  name: string;\n\n  // authorize request/response body property\n  @authorize.readWrite("Supervisor", "Staff")\n  @Column()\n  basePrice: number;\n\n  // authorize request body property\n  @authorize.write("Supervisor")\n  @Column()\n  price: number;\n}'},{title:"Policy Based Authorization",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Define your authorization logic in separate location, then apply it using decorators.")),link:{url:"controller"},code:'// register with authorization policy builder\nauthPolicy()\n  // register role\n  .register("Supervisor", ({ user }) => {\n      // "user" is JWT claim from request header\n      // return true to authorize otherwise false\n      // also possible to return Promise<boolean>\n      return user?.role === "Supervisor"\n  })\n\n  // chain method with next registration\n  .register("Staff", ({ user }) => {\n      return user?.role === "Staff"\n  })'},{title:"Swagger UI with Open API v3",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Open API v3 schema automatically generated from controller metadata. Mostly no configuration required, but some minor tweak can be applied to get result match your need.")),link:{url:"swagger"},image:"/img/swagger.png"},{title:"Nested First Class Entity",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Turn One-To-Many relation of ORM entity into nested API Restful API, that handled by a nested generic controller."),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Method"),r.a.createElement("th",null,"Path"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"GET"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments")),r.a.createElement("td",null,"Get post comments with paging, filter etc..")),r.a.createElement("tr",null,r.a.createElement("td",null,"GET"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments/{id}")),r.a.createElement("td",null,"Get post comment by id with projection")),r.a.createElement("tr",null,r.a.createElement("td",null,"POST"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments")),r.a.createElement("td",null,"Create new post comment")),r.a.createElement("tr",null,r.a.createElement("td",null,"PUT"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments/{id}")),r.a.createElement("td",null,"Replace post comment by id")),r.a.createElement("tr",null,r.a.createElement("td",null,"PATCH"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments/{id}")),r.a.createElement("td",null,"Modify post comment by id")),r.a.createElement("tr",null,r.a.createElement("td",null,"DELETE"),r.a.createElement("td",null,r.a.createElement("code",null,"/posts/{pid}/comments/{id}")),r.a.createElement("td",null,"Delete post comment by id"))))),link:{url:"generic-controller"},code:"@Entity()\nexport class Post {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  // turn one to many relation into nested API\n  @route.controller()\n  @OneToMany(x => Comment, x => x.post)\n  comments: Comment[]\n}\n\n@Entity()\nexport class Comment {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column()\n  comment:string\n}"},{title:"Controllers",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Require more flexible response result then using First Class Entity? No problem, you still can use controller to handle user request."),r.a.createElement("p",null,"Plumier controller inspired by ASP.Net MVC controllers, and take important role in Plumier system."),r.a.createElement("ul",null,r.a.createElement("li",null,"Routes generated based on controller name and action name, but overridable using decorators"),r.a.createElement("li",null,"Parameter binding using parameter name or decorators"),r.a.createElement("li",null,"Extra data type conversion and simple sanitation for each controller parameter"),r.a.createElement("li",null,"Policy based authorization that applicable using decorators"))),link:{url:"controller"},code:'export class UsersController {\n  readonly repo = new TypeORMRepository(User)\n\n  // GET /users/:id\n  @route.get(":id")\n  get(id:string) { \n\n      // return value or Promise \n      // automatically rendered into JSON response\n      return this.repo.findOne(id)\n  }\n}'}];function g(){var e=Object(m.a)().isDarkTheme;return r.a.createElement("section",{className:Object(o.a)(p.a.features,e?p.a.featuresDark:p.a.featuresLight)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},y.map((function(e,t){return r.a.createElement(h,Object(a.a)({key:t,index:t},e))})))))}function h(e){var t=e.description,n=e.title,a=e.code,l=e.link,c=e.index,s=e.image;return r.a.createElement("div",{className:Object(o.a)("col col--12",p.a.feature)},r.a.createElement("div",{className:Object(o.a)("row",p.a.featureContainer,c%2==0?p.a.featureContainerOdd:p.a.featureContainerEven)},r.a.createElement("div",{className:Object(o.a)("col col--5",p.a.codeFont)},a?r.a.createElement(E,{code:a}):r.a.createElement("img",{className:p.a.featureImage,src:s})),r.a.createElement("div",{className:"col col--7"},r.a.createElement("h1",null,n),r.a.createElement("div",null,t),r.a.createElement(i.a,{to:l.url,className:Object(o.a)("button button--primary button--lg",p.a.featureButton)},"Learn more about this feature"))))}function E(e){var t=e.code;return r.a.createElement("div",{className:Object(o.a)(p.a.codeBorder)},r.a.createElement("div",{className:Object(o.a)(p.a.codeTitleBox)},r.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbRed)}),r.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbGreen)}),r.a.createElement("div",{className:Object(o.a)(p.a.codeRgb,p.a.rgbBlue)})),r.a.createElement(s.a,{metastring:"typescript",className:"typescript"},t))}t.default=function(){var e=Object(u.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(c.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:Object(o.a)("hero ",p.a.heroBanner)},r.a.createElement("div",{className:Object(o.a)("container",p.a.heroContainer)},r.a.createElement("h2",{className:"hero__subtitle"},t.title),r.a.createElement("h1",{className:"hero__title"},t.tagline),r.a.createElement("p",null,"A TypeScript backend framework focuses on development productivity, uses dedicated reflection library to help you create a robust, secure and fast API delightfully."),r.a.createElement("div",{className:p.a.buttons},r.a.createElement(i.a,{className:Object(o.a)("button button--primary button--lg"),to:"quick-start"},"Quick Start"),r.a.createElement(i.a,{className:Object(o.a)("button button--secondary button--lg"),to:"plumier-in-five-minutes"},"Plumier in Five Minutes")))),r.a.createElement("main",null,r.a.createElement(g,null)))}}}]);