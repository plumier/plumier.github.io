(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{144:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},145:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},147:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(115),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:s};function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function g(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var h=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),c(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),c(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),c(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],i=[s];o>-1;){for(;(l=n[o]++)<r[o];){var c=void 0,u=t[o],y=a[o][l];if("string"==typeof y?(u=o>0?u:["plain"],c=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),c=y.content),"string"==typeof c){var g=c.split(p),h=g.length;s.push({types:u,content:g[0]});for(var b=1;b<h;b++)m(s),i.push(s=[]),s.push({types:u,content:g[b]})}else o++,t.push(u),a.push(c),n.push(0),r.push(c.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return m(s),i}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=a(144),f=a.n(b),v=a(145),E=a.n(v),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(125),O=a(114);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||k,n=e.darkTheme||a;return t?n:a},P=a(55),S=a.n(P);const x=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},w=/(?:title=")(.*)(?:")/;t.a=({children:e,className:t,metastring:a})=>{const{prism:s}=Object(O.useThemeConfig)(),[c,u]=Object(r.useState)(!1),[p,m]=Object(r.useState)(!1);Object(r.useEffect)((()=>{m(!0)}),[]);const d=Object(r.useRef)(null);let y=[],g="";const b=N(),v=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];y=E()(e).filter((e=>e>0))}a&&w.test(a)&&(g=a.match(w)[1]);let k=t&&t.replace(/language-/,"");!k&&s.defaultLanguage&&(k=s.defaultLanguage);let j=v.replace(/\n$/,"");if(0===y.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(k),a=v.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,o=a[r].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}y=E()(e),j=a.join("\n")}const P=()=>{f()(j),u(!0),setTimeout((()=>u(!1)),2e3)};return l.a.createElement(h,Object(n.a)({},i,{key:String(p),theme:b,code:j,language:k}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:s})=>l.a.createElement(l.a.Fragment,null,g&&l.a.createElement("div",{style:t,className:S.a.codeBlockTitle},g),l.a.createElement("div",{className:S.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:g})},l.a.createElement("div",{className:S.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(S.a.copyButton),onClick:P},c?"Copied":"Copy")))))}},97:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),o=a(115),s=a(127),i=a(147),c=a(118),u=a(22),p=(a(125),a(119),a(98)),m=a.n(p),d=[{title:"First Class Entity",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Upgrade ORM entity into First Class Entity to have more control to most framework features such as request/response body schema, authorization, validation, generated routes. In the background, Plumier creates CRUD Restful generic controller uses ORM entity as its data model, example produces:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"POST /items")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"GET /items?offset&limit&filter&select")," accessible by any login user"),l.a.createElement("li",null,l.a.createElement("code",null,"GET /items/{id}")," accessible by any login user"),l.a.createElement("li",null,l.a.createElement("code",null,"POST /items/{id}")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"PUT /items/{id}")," accessible by Supervisor and Staff"),l.a.createElement("li",null,l.a.createElement("code",null,"DELETE /items/{id}")," accessible by Supervisor and Staff"))),link:{url:"generic-controller"},code:'// create CRUD generic controller on the fly\n@route.controller(c => {\n  // authorize post, put, patch, delete\n  c.mutators().authorize("Supervisor", "Staff");\n})\n// use TypeORM entity as generic controller model\n@Entity()\nexport class Item {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  // validate max characters allowed\n  @val.length({ max: 128 })\n  @Column()\n  name: string;\n\n  // authorize request/response body property\n  @authorize.readWrite("Supervisor", "Staff")\n  @Column()\n  basePrice: number;\n\n  // authorize request body property\n  @authorize.write("Supervisor")\n  @Column()\n  price: number;\n}'},{title:"Policy Based Authorization",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Plumier supported securing API with JWT out of the box. Plumier also provided authorization to restrict user access based on specific logic defined by you. You define your authorization logic in separate location, then apply it using decorators."),l.a.createElement("p",null,"In the background Plumier validates your authorization policy to prevent mistyped policy name, or possibly duplicate/conflict policy name.")),link:{url:"security"},code:'// register with authorization policy builder\nauthPolicy()\n\n  // register role\n  .register("Supervisor", ({ user }) => {\n      // "user" is JWT claim from request header\n      // return true to authorize otherwise false\n      // also possible to return Promise<boolean>\n      return user?.role === "Supervisor"\n  })\n\n  // chain-able registration method\n  .register("Staff", ({ user }) => {\n      return user?.role === "Staff"\n  })'},{title:"Controllers",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Require more flexible response result then using First Class Entity? No problem, you still can use controller to handle user request."),l.a.createElement("p",null,"Plumier controller inspired by ASP.Net MVC controllers, and take important role in Plumier system."),l.a.createElement("ul",null,l.a.createElement("li",null,"Routes generated based on controller name and action name."),l.a.createElement("li",null,"Parameter binding using parameter name or decorators."),l.a.createElement("li",null,"Extra data type conversion with simple sanitation for each controller parameter."),l.a.createElement("li",null,"Policy based authorization that applicable using decorators."))),link:{url:"controller"},code:'export class UsersController {\n  readonly repo = new TypeORMRepository(User)\n\n  // GET /users/:id\n  @route.get(":id")\n  get(id:string) { \n\n      // return value or Promise \n      // automatically rendered into JSON response\n      return this.repo.findOne(id)\n  }\n}'},{title:"Swagger UI with Open API v3",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Open API v3 schema automatically generated from controller metadata. Mostly no configuration required, but some minor tweak can be applied to get result match your need.")),link:{url:"swagger"},image:"/img/swagger.png"}];function y(){return l.a.createElement(l.a.Fragment,null,d.map((function(e,t){return l.a.createElement(g,Object(n.a)({key:t,index:t},e))})))}function g(e){var t=e.description,a=e.title,n=e.code,r=e.link,s=e.index,i=e.image,u=s%2==0;return l.a.createElement("section",{className:Object(o.a)(m.a.feature,u?m.a.sectionDark:m.a.sectionLight)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",m.a.featureContainer,u?m.a.featureContainerOdd:m.a.featureContainerEven)},l.a.createElement("div",{className:Object(o.a)("col col--5",m.a.codeFont)},n?l.a.createElement(h,{code:n}):l.a.createElement("img",{className:m.a.featureImage,src:i})),l.a.createElement("div",{className:Object(o.a)("col col--7",m.a.featureDescription)},l.a.createElement("h3",null,"Feature"),l.a.createElement("h1",null,a),l.a.createElement("div",null,t),l.a.createElement(c.a,{to:r.url,className:Object(o.a)("button button--secondary button--lg",m.a.featureButton)},"Learn more about this feature")))))}function h(e){var t=e.code;return l.a.createElement("div",{className:Object(o.a)(m.a.codeBorder)},l.a.createElement("div",{className:Object(o.a)(m.a.codeTitleBox)},l.a.createElement("div",{className:Object(o.a)(m.a.codeRgb,m.a.rgbRed)}),l.a.createElement("div",{className:Object(o.a)(m.a.codeRgb,m.a.rgbGreen)}),l.a.createElement("div",{className:Object(o.a)(m.a.codeRgb,m.a.rgbBlue)})),l.a.createElement(i.a,{metastring:"typescript",className:"typescript"},t))}t.default=function(){var e=Object(u.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(s.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:Object(o.a)("hero ",m.a.heroBanner)},l.a.createElement("div",{className:Object(o.a)("container",m.a.heroContainer)},l.a.createElement("h2",{className:"hero__subtitle"},t.title),l.a.createElement("h1",{className:"hero__title"},t.tagline),l.a.createElement("p",null,"A TypeScript backend framework focuses on development productivity, uses dedicated reflection library to help you create a robust, secure and fast API delightfully."),l.a.createElement("div",{className:m.a.buttons},l.a.createElement(c.a,{className:Object(o.a)("button button--primary button--lg"),to:"quick-start"},"Quick Start"),l.a.createElement(c.a,{className:Object(o.a)("button button--secondary button--lg"),to:"plumier-in-five-minutes"},"Plumier in Five Minutes")))),l.a.createElement("main",null,l.a.createElement(y,null)))}}}]);