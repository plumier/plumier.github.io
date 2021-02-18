(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(113)),s={id:"testing-tips",title:"Testing Tips"},i={unversionedId:"refs/testing-tips",id:"refs/testing-tips",isDocsHomePage:!1,title:"Testing Tips",description:"To make testing easy, some tips below will make your testing easier",source:"@site/docs/refs/Testing-Tips.md",slug:"/refs/testing-tips",permalink:"/refs/testing-tips",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/refs/Testing-Tips.md",version:"current"},l=[{value:"Pick what you need to minimize mock",id:"pick-what-you-need-to-minimize-mock",children:[{value:"Request Binding",id:"request-binding",children:[]},{value:"Other Binding",id:"other-binding",children:[]}]},{value:"Return value for testing evaluation",id:"return-value-for-testing-evaluation",children:[{value:"More advance return value",id:"more-advance-return-value",children:[]}]},{value:"Throw error if something bad happening",id:"throw-error-if-something-bad-happening",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To make testing easy, some tips below will make your testing easier"),Object(o.b)("h2",{id:"pick-what-you-need-to-minimize-mock"},"Pick what you need to minimize mock"),Object(o.b)("p",null,"The common problem of testing web api is mocking ",Object(o.b)("inlineCode",{parentName:"p"},"Request")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Response")," object.\nPlumier provided a request binding to pick what part of request you need."),Object(o.b)("h3",{id:"request-binding"},"Request Binding"),Object(o.b)("p",null,"For example to get the Remote IP address you can provide a binding to IP request part like below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class UserController {\n    @route.post()\n    async saveUserIpAddress(@bind.request("ip") ip:string){\n        //your implementation\n        return success\n    }\n}\n')),Object(o.b)("p",null,"Testing above code will not require any mocking"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'it("Should save user IP Address", async () => {\n    const controller = new UserController()\n    const success = await controller.saveUserIpAddress("125.162.125.309")\n    expect(success).toBe(true)\n}\n')),Object(o.b)("h3",{id:"other-binding"},"Other Binding"),Object(o.b)("p",null,"You can almost get every part of request with ",Object(o.b)("inlineCode",{parentName:"p"},"@bind.request(<part>)"),", But in some case you need to get part of the object to prevent mocking. For example you need to get ",Object(o.b)("inlineCode",{parentName:"p"},"x-api-key")," and the request body at the same time, use ",Object(o.b)("inlineCode",{parentName:"p"},"@bind.header()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@bind.body()"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class UserController {\n    @route.post()\n    async saveUser(@bind.header("x-api-key") apiKey:string, @bind.body() user:any){\n        //your implementation\n        return success\n    }\n}\n')),Object(o.b)("p",null,"The testing part will be like below"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'it("Should save user and api key", async () => {\n    const controller = new UserController()\n    const success = await controller.saveUser("<api key>", { user: "John Doe" })\n    expect(success).toBe(true)\n}\n')),Object(o.b)("h2",{id:"return-value-for-testing-evaluation"},"Return value for testing evaluation"),Object(o.b)("p",null,"You might be thinking how do we use ",Object(o.b)("inlineCode",{parentName:"p"},"Response")," on Plumier, actually we don't. Plumier will automatically return JSON from what your action's return value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n    @route.post()\n    async saveUser(@bind.body() user:any){\n        //your implementation\n        return { newId }\n    }\n}\n")),Object(o.b)("p",null,"By returning raw value like above code, evaluating the result will be easy without needing to mock ",Object(o.b)("inlineCode",{parentName:"p"},"Response")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Context"),". The testing will be as easy as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'it("Should save user and api key", async () => {\n    const controller = new UserController()\n    const result = await controller.saveUser("<api key>", { user: "John Doe" })\n    expect(result.newId).toBe(1234)\n}\n')),Object(o.b)("h3",{id:"more-advance-return-value"},"More advance return value"),Object(o.b)("p",null,"In some case you need more advance return value such as setting header and some response status code. You can return ",Object(o.b)("inlineCode",{parentName:"p"},"ActionResult")," and evaluate it easily."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n    @route.post()\n    async saveUser(@bind.body() user:any){\n        //your implementation\n        return new ActionResult({ newId }, 201)\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'it("Should save user and api key", async () => {\n    const controller = new UserController()\n    const result = await controller.saveUser("<api key>", { user: "John Doe" })\n    expect(result.body.newId).toBe(1234)\n    expect(result.status).toBe(201)\n}\n')),Object(o.b)("h2",{id:"throw-error-if-something-bad-happening"},"Throw error if something bad happening"),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"ActionResult")," might be good to return response with status code, but in some case for example data validation, using ",Object(o.b)("inlineCode",{parentName:"p"},"ActionResult")," may be bad because it introduce more return value to evaluate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'export class UserController {\n    @route.post()\n    async saveUser(@bind.body() user:any){\n        if(await isExists(user.username)) {\n            return new ActionResult("Username exists", 400)\n        }\n        //your implementation\n        return new ActionResult({ newId }, 201)\n    }\n}\n')),Object(o.b)("p",null,"You can also simply throw ",Object(o.b)("inlineCode",{parentName:"p"},"HttpStatusError")," to make the code control flow look better."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n    @route.post()\n    async saveUser(@bind.body() user:any){\n        if(await isExists(user.userName)) {\n            throw new HttpStatusError(400)\n        }\n        //your implementation\n        return new ActionResult({ newId }, 201)\n    }\n}\n")),Object(o.b)("p",null,"The testing part will be a lot easier"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'it("Should throw 400 if username exists", async () => {\n    const controller = new UserController()\n    expect(controller.saveUser({ userName: "john" })).rejects.toEqual(new HttpStatusError(400))\n}\n')))}u.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);