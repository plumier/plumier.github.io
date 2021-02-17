(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),u=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,o=b(t,["components","mdxType","originalType","parentName"]),p=u(n),O=a,d=p["".concat(i,".").concat(O)]||p[O]||m[O]||l;return n?r.a.createElement(d,c(c({ref:e},o),{},{components:n})):r.a.createElement(d,c({ref:e},o))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=O;var c={};for(var b in e)hasOwnProperty.call(e,b)&&(c[b]=e[b]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},95:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return o}));var a=n(3),r=(n(0),n(113));const l={id:"default-environment-variable",title:"Default Environment Variable"},i={unversionedId:"default-environment-variable",id:"default-environment-variable",isDocsHomePage:!1,title:"Default Environment Variable",description:"Plumier facilities automatically check into some environment variable name during initialization, this process is optional because you still can configure the facility manually on your code.",source:"@site/docs/Default-Environment-Variable.md",slug:"/default-environment-variable",permalink:"/default-environment-variable",editUrl:"https://github.com/plumier/plumier/edit/master/docs/docusaurus/docs/Default-Environment-Variable.md",version:"current",sidebar:"overview",previous:{title:"Facility",permalink:"/facility"},next:{title:"Overview",permalink:"/extend"}},c=[],b={toc:c};function o({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},b,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Plumier facilities automatically check into some environment variable name during initialization, this process is optional because you still can configure the facility manually on your code."),Object(r.b)("p",null,"For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"JwtAuthFacility")," if registered without parameter it will check to the ",Object(r.b)("inlineCode",{parentName:"p"},"PLUM_JWT_SECRET")," environment variable."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"new Plumier()\n    // automatically check for PLUM_JWT_SECRET for JWT secret\n    .set(new JwtAuthFacility())\n")),Object(r.b)("p",null,"Or you can configure the facility manually from your code like below"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"new Plumier()\n    .set(new JwtAuthFacility({ secret: process.env.YOUR_JWT_SECRET }))\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Env Variable"),Object(r.b)("th",{parentName:"tr",align:null},"Facility"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_FORCE_HTTPS"),Object(r.b)("td",{parentName:"tr",align:null},"WebApiFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Set force https, enable ",Object(r.b)("inlineCode",{parentName:"td"},"trustProxyHeader")," configuration separately")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_JWT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"JwtAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store JWT secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_MONGODB_URI"),Object(r.b)("td",{parentName:"tr",align:null},"MongooseFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store MongoDB uri")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_FACEBOOK_CLIENT_ID"),Object(r.b)("td",{parentName:"tr",align:null},"FacebookOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Facebook OAuth 2.0 client id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_FACEBOOK_CLIENT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"FacebookOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Facebook OAuth 2.0 client secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GOOGLE_CLIENT_ID"),Object(r.b)("td",{parentName:"tr",align:null},"GoogleOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Google OAuth 2.0 client id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GOOGLE_CLIENT_CLIENT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"GoogleOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Google OAuth 2.0 client secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GITHUB_CLIENT_ID"),Object(r.b)("td",{parentName:"tr",align:null},"GithubOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Github OAuth 2.0 client id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GITHUB_CLIENT_CLIENT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"GithubOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Github OAuth 2.0 client secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GITLAB_CLIENT_ID"),Object(r.b)("td",{parentName:"tr",align:null},"GitLabOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store GitLab OAuth 2.0 client id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_GITLAB_CLIENT_CLIENT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"GitLabOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store GitLab OAuth 2.0 client secret")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_TWITTER_CLIENT_ID"),Object(r.b)("td",{parentName:"tr",align:null},"TwitterOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Twitter OAuth 1.0a client id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PLUM_TWITTER_CLIENT_CLIENT_SECRET"),Object(r.b)("td",{parentName:"tr",align:null},"TwitterOAuthFacility"),Object(r.b)("td",{parentName:"tr",align:null},"Store Twitter OAuth 1.0a client secret")))))}o.isMDXComponent=!0}}]);