(self.webpackChunkplumier_docs=self.webpackChunkplumier_docs||[]).push([[514,489],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6699:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var a=n(2784),r=n(876),i=n(7614),o=n(7647),l=n(4792),c=n(7560),s=n(8283),u=n(6277),d=n(1395),m=n(5862),p=n(3157),b=n(1233),f=n(2391),h=n(1510),v=n(1344),E=n(3578),g=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(8013),y=n(7921),_="sidebar_AUih",C="sidebarWithHideableNavbar_13bV",Z="sidebarHidden_d9AY",N="sidebarLogo_f7Rp",O="menu_16eN",w="menuLinkText_2jnp",I="menuWithAnnouncementBar_283y",S="collapseSidebarButton_253t",T="collapseSidebarButtonIcon_Gq9h",P="sidebarMenuIcon_1r51",x="sidebarMenuCloseIcon_34YW",j="menuLinkExternal_3oZa",A=["items"],L=["item","onItemClick","collapsible","activePath"],R=["item","onItemClick","activePath","collapsible"];var B=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},M=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,A);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return a.createElement(F,e);case"link":default:return a.createElement(H,e)}}function F(e){var t,n,r,i=e.item,o=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,s.Z)(e,L),p=i.items,b=i.label,f=B(i,d),h=(n=f,r=(0,a.useRef)(n),(0,a.useEffect)((function(){r.current=n}),[n]),r.current),v=(0,a.useState)((function(){return!!l&&(!f&&i.collapsed)})),E=v[0],g=v[1],k=(0,a.useRef)(null),y=(0,a.useState)(void 0),_=y[0],C=y[1],Z=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&E&&g(!1)}),[f,h,E]);var N=(0,a.useCallback)((function(e){e.preventDefault(),_||Z(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[_]);return 0===p.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[w]=!l,t)),onClick:l?N:void 0,href:l?"#!":void 0},m),b),a.createElement("ul",{className:"menu__list",ref:k,style:{height:_},onTransitionEnd:function(){E||Z(!1)}},a.createElement(M,{items:p,tabIndex:E?"-1":"0",onItemClick:o,collapsible:l,activePath:d})))}function H(e){var t,n=e.item,r=e.onItemClick,i=e.activePath,o=(e.collapsible,(0,s.Z)(e,R)),l=n.href,d=n.label,m=B(n,i);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[j]=!(0,v.Z)(l),t)),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:r},o),d))}function W(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(g,{className:T}))}function V(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,y.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,y.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(P,x)},"\xd7"):a.createElement(k.Z,{className:P,height:24,width:24}))}var z=function(e){var t,n,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,y=(0,m.Z)().isAnnouncementBarClosed,w=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var r=(0,b.Z)();return(0,a.useEffect)((function(){r===b.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),S=w.showResponsiveSidebar,T=w.closeResponsiveSidebar,P=w.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(_,(t={},t[C]=g,t[Z]=s,t))},g&&a.createElement(E.Z,{tabIndex:-1,className:N}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",O,(n={"menu--show":S},n[I]=!y&&h,n))},a.createElement(V,{responsiveSidebarOpened:S,onClick:P}),a.createElement("ul",{className:"menu__list"},a.createElement(M,{items:i,onItemClick:T,collapsible:l,activePath:r}))),k&&a.createElement(W,{onClick:c}))},U=n(5277),Y="enhancedAnchor_b0Ka",q=["id"],K=function(e){return function(t){var n,r=t.id,i=(0,s.Z)(t,q),o=(0,d.LU)().navbar.hideOnScroll;return r?a.createElement(e,i,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[Y]=!o,n)),id:r}),i.children,a.createElement("a",{className:"hash-link",href:"#"+r,title:(0,y.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,i)}},X={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(U.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(U.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:K("h1"),h2:K("h2"),h3:K("h3"),h4:K("h4"),h5:K("h5"),h6:K("h6")},G=n(2489),J=n(4517),Q="docPage_2hm3",$="docMainContainer_luF8",ee="docMainContainerEnhanced_1KzL",te="docSidebarContainer_mF8j",ne="docSidebarContainerHidden_2DZs",ae="collapsedDocSidebar_3YtF",re="expandSidebarButtonIcon_2vqf",ie="docItemWrapperEnhanced_1BzV",oe="docItemWrapper_12Bq";function le(e){var t,n,o,c,s,m=e.currentDocRoute,p=e.versionMetadata,b=e.children,f=(0,i.Z)(),h=f.siteConfig,v=f.isClient,E=p.pluginId,k=p.permalinkToSidebar,_=p.docsSidebars,C=p.version,Z=k[m.path],N=_[Z],O=(0,a.useState)(!1),w=O[0],I=O[1],S=(0,a.useState)(!1),T=S[0],P=S[1],x=(0,a.useCallback)((function(){T&&P(!1),I(!w)}),[T]);return a.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:C,tag:(0,d.os)(E,C)}},a.createElement("div",{className:Q},N&&a.createElement("div",{className:(0,u.Z)(te,(t={},t[ne]=w,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(te)&&w&&P(!0)},role:"complementary"},a.createElement(z,{key:Z,sidebar:N,path:m.path,sidebarCollapsible:null==(n=null==(o=h.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:x,isHidden:T}),T&&a.createElement("div",{className:ae,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},a.createElement(g,{className:re}))),a.createElement("main",{className:(0,u.Z)($,(c={},c[ee]=w||!N,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",oe,(s={},s[ie]=w,s))},a.createElement(r.Zo,{components:X},b)))))}var ce=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,J.LX)(r.pathname,e)}));return i?a.createElement(le,{currentDocRoute:i,versionMetadata:n},(0,o.Z)(t)):a.createElement(G.default,e)}},2489:function(e,t,n){"use strict";n.r(t);var a=n(2784),r=n(4792),i=n(7921);t.default=function(){return a.createElement(r.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);