(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(113)),o={id:"social-login",title:"Social Media Login"},l={unversionedId:"social-login",id:"social-login",isDocsHomePage:!1,title:"Social Media Login",description:"Plumier provided functionalities to easily secure your API and application using social media login such as Facebook, Google, GitHub and GitLab (Other provider will be added in the future). It included some security best practices out of the box, so you don't need to understand the security practice technically to implement social media login in Plumier.",source:"@site/docs/Social-Login.md",slug:"/social-login",permalink:"/social-login",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/Social-Login.md",version:"current",sidebar:"overview",previous:{title:"Swagger",permalink:"/swagger"},next:{title:"Serve Static Files",permalink:"/serve-static"}},c=[{value:"Enable Functionalities",id:"enable-functionalities",children:[]},{value:"Environment Variable for Default Configuration",id:"environment-variable-for-default-configuration",children:[]},{value:"Redirect URI Handler",id:"redirect-uri-handler",children:[]},{value:"Parameter Binding",id:"parameter-binding",children:[]},{value:"Separate Redirect Uris",id:"separate-redirect-uris",children:[]},{value:"OAuth User",id:"oauth-user",children:[]},{value:"Showing The Login Page",id:"showing-the-login-page",children:[{value:"Social Media Login Button",id:"social-media-login-button",children:[]}]},{value:"Sending Message Back To Main Window",id:"sending-message-back-to-main-window",children:[]},{value:"Customization",id:"customization",children:[{value:"Custom Login Endpoint",id:"custom-login-endpoint",children:[]},{value:"Add Extra Parameter To Login Endpoint",id:"add-extra-parameter-to-login-endpoint",children:[]},{value:"Add Extra Parameter on Profile Endpoint",id:"add-extra-parameter-on-profile-endpoint",children:[]}]}],b={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Plumier provided functionalities to easily secure your API and application using social media login such as Facebook, Google, GitHub and GitLab (Other provider will be added in the future). It included some security best practices out of the box, so you don't need to understand the security practice technically to implement social media login in Plumier."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This documentation assume that you have knowledge on how to setup social login application on ",Object(r.b)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook"),", ",Object(r.b)("a",{parentName:"p",href:"https://console.developers.google.com/"},"Google"),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/settings/developers"},"GitHub"),", ",Object(r.b)("a",{parentName:"p",href:"https://gitlab.com/profile/applications"},"GitLab")," and ",Object(r.b)("a",{parentName:"p",href:"https://developer.twitter.com/en/apps"},"Twitter"),", and have basic knowledge on how to setup OAuth login."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Source Code ")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Complete example using social media login can be found in these GitHub repositories: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/plumier/tutorial-monorepo-social-login"},"React")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/plumier/tutorial-social-login-vue"},"Vue.js")))),Object(r.b)("h2",{id:"enable-functionalities"},"Enable Functionalities"),Object(r.b)("p",null,"Plumier social media login is not enabled by default, to enable the functionalities use some provided Facility from ",Object(r.b)("inlineCode",{parentName:"p"},"@plumier/social-login")," package. "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Facility"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"FacebookOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Provide Facebook specific social login functionalities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GoogleOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Provide Google specific social login functionalities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitHubOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Provide GitHub specific social login functionalities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitLabOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Provide GitLab specific social login functionalities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TwitterOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Provide Twitter specific social login functionalities")))),Object(r.b)("p",null,"To enable the social login functionality, register above facility on the Plumier application like below: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const plumier = new Plumier()\n    .set(new WebApiFacility())\n    .set(new FacebookOAuthFacility({ \n        clientId: <FACEBOOK APP ID>, \n        clientSecret: <FACEBOOK APP SECRET> \n    }))\n    .initialize()\n")),Object(r.b)("p",null,"All OAuth provider facility (",Object(r.b)("inlineCode",{parentName:"p"},"FacebookOAuthFacility"),", ",Object(r.b)("inlineCode",{parentName:"p"},"GoogleOAuthFacility"),", ",Object(r.b)("inlineCode",{parentName:"p"},"GitHubOAuthFacility"),", ",Object(r.b)("inlineCode",{parentName:"p"},"GitLabOAuthFacility"),") receive option parameter which required a client id and client secret. This value can be found in the appropriate social login console application. "),Object(r.b)("h2",{id:"environment-variable-for-default-configuration"},"Environment Variable for Default Configuration"),Object(r.b)("p",null,"All OAuth provider facility can be instantiated without parameters, It will automatically check for the environment variable for each Client ID and Client Secret. For example if the registration is like below"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const plumier = new Plumier()\n    .set(new WebApiFacility())\n    .set(new FacebookOAuthFacility())\n    .initialize()\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FacebookOAuthFacility")," will search for environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"PLUM_FACEBOOK_CLIENT_ID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"PLUM_FACEBOOK_CLIENT_SECRET"),". If both not found an error will be thrown."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Facility"),Object(r.b)("th",{parentName:"tr",align:null},"Client ID"),Object(r.b)("th",{parentName:"tr",align:null},"Client Secret"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"FacebookOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_FACEBOOK_CLIENT_ID")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_FACEBOOK_CLIENT_SECRET"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GoogleOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GOOGLE_CLIENT_ID")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GOOGLE_CLIENT_SECRET"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitHubOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GITHUB_CLIENT_ID")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GITHUB_CLIENT_SECRET"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitLabOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GITLAB_CLIENT_ID")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_GITLAB_CLIENT_SECRET"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TwitterOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_TWITTER_CLIENT_ID")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"PLUM_TWITTER_CLIENT_SECRET"))))),Object(r.b)("h2",{id:"redirect-uri-handler"},"Redirect URI Handler"),Object(r.b)("p",null,"Plumier provided ",Object(r.b)("inlineCode",{parentName:"p"},"@redirectUri()")," decorator to easily mark action as a social media redirect uri. To create an action as a redirect uri handler simply mark the action with the decorator like below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"class AuthController {\n\n    @route.get()\n    @redirectUri()\n    callback(@bind.oAuthUser() user:OAuthUser) {\n\n    }\n}\n")),Object(r.b)("p",null,"Above is a common Plumier controller, no special configuration added except the ",Object(r.b)("inlineCode",{parentName:"p"},"@redirectUri()"),". Above controller is a general redirect uri handler, its mean that it will handle all provider's redirect uris registered in the Plumier application into single method's controller. "),Object(r.b)("p",null,"Controller above handles ",Object(r.b)("inlineCode",{parentName:"p"},"GET /auth/callback")," route, you can change this easily to match your redirect uri registered in the OAuth application provider. "),Object(r.b)("h2",{id:"parameter-binding"},"Parameter Binding"),Object(r.b)("p",null,"Plumier provided several parameter binding to bind social media login data into callback uri methods."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Decorator"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"@bind.oAuthUser()")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"OAuthUser")),Object(r.b)("td",{parentName:"tr",align:null},"Bind generalized social media login user of type ",Object(r.b)("inlineCode",{parentName:"td"},"OAuthUser"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"@bind.oAuthProfile()")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:null},"Bind the raw social media user profile")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"@bind.oAuthToken()")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:null},"Bind social media auth token")))),Object(r.b)("p",null,"To use it simply apply it in the method's parameter like below "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"class AuthController {\n    @route.get()\n    @redirectUri()\n    callback(@bind.oAuthUser() user:OAuthUser, @bind.oAuthProfile() profile:any, @bind.oAuthToken() token:string) {\n\n    }\n}\n")),Object(r.b)("h2",{id:"separate-redirect-uris"},"Separate Redirect Uris"),Object(r.b)("p",null,"If you have different redirect uri registered on your OAuth application, you can create separate redirect uri for specific provider, while keep using the general redirect uri: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'class AuthController {\n\n    @route.get()\n    @redirectUri()\n    callback(@bind.oAuthUser() user:OAuthUser) {\n        // this will handle the rest provider registered except facebook\n    }\n\n    @route.get()\n    @redirectUri("Facebook")\n    facebook(@bind.oAuthUser() user:OAuthUser) {\n        // this will only handle Facebook redirect uri\n    }\n}\n')),Object(r.b)("p",null,"If you provide a specific redirect uri handler, the general redirect uri will not be called."),Object(r.b)("h2",{id:"oauth-user"},"OAuth User"),Object(r.b)("p",null,"OAuth user is the current social media user. If you notice all example above, all controller has parameter decorate with ",Object(r.b)("inlineCode",{parentName:"p"},"@bind.oAuthUser()")," decorator. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'interface OAuthUser<T = {}> {\n    provider: "Facebook" | "Google" | "GitHub" | "GitLab" | "Twitter"\n    id: string,\n    name: string,\n    firstName: string,\n    lastName: string,\n    profilePicture: string,\n    email?: string,\n    gender?: string,\n    dateOfBirth?: string\n    raw: T\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider")," is the OAuth provider name calling the redirect uri "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," is the user id on OAuth provider. Note that this field unique to ",Object(r.b)("inlineCode",{parentName:"li"},"provider")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," is the complete name of the current social media login user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"firstName")," is the first name of the current social media login user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lastName")," is the last name of the current social media login user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"profilePicture")," is the profile picture or avatar of the current social media login user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email"),", ",Object(r.b)("inlineCode",{parentName:"li"},"gender"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dateOfBirth")," is optional, its based on your OAuth application access"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"raw")," is the raw value of the social media profile result.")),Object(r.b)("h2",{id:"showing-the-login-page"},"Showing The Login Page"),Object(r.b)("p",null,"Plumier provided endpoints that will be redirected to the social media login page. It generate the required parameter including the csrf token and then redirect the request to the generated url."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Endpoint"),Object(r.b)("th",{parentName:"tr",align:null},"Served By"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GET /auth/facebook/login")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"FacebookOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Redirect to Facebook login page")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GET /auth/google/login")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GoogleOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Redirect to Google login page")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GET /auth/github/login")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitHubOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Redirect to GitHub login page")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GET /auth/gitlab/login")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GitLabOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Redirect to GitLab login page")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"GET /auth/tiwtter/login")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TwitterOAuthFacility")),Object(r.b)("td",{parentName:"tr",align:null},"Redirect to Twitter login page")))),Object(r.b)("p",null,"Above endpoint can be change accordingly see ",Object(r.b)("a",{parentName:"p",href:"#customization"},"customization")," section for more detail."),Object(r.b)("h3",{id:"social-media-login-button"},"Social Media Login Button"),Object(r.b)("p",null,"Use the provided endpoints above to create the social media login button, by showing a dialog window popup or redirect the user to the Facebook login screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<a href="/auth/facebook/login">Login with Facebook</a>\n')),Object(r.b)("p",null,"Code above will redirect the user to the Facebook login screen."),Object(r.b)("p",null,"Or you can show a popup dialog window like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<script>\n    function showFacebookDialog(){\n        window.open("/auth/facebook/login", "Login using Facebook", "toolbar=no, width=500, height=500")\n    }\n<\/script>\n\n<button onclick="showFacebookDialog()">Login with Facebook</button>\n')),Object(r.b)("p",null,"When user click the link or button above, user will redirected to the Facebook login page properly."),Object(r.b)("h2",{id:"sending-message-back-to-main-window"},"Sending Message Back To Main Window"),Object(r.b)("p",null,"When social medial login process done using a popup dialog window, it needs a way to signal the main window that the login process successful or not. "),Object(r.b)("p",null,"Plumier provided an ActionResult returned html that will automatically post message to main window that open the login dialog. ",Object(r.b)("inlineCode",{parentName:"p"},"response.postMessage()"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'class AuthController {\n\n    @route.get()\n    @redirectUri()\n    callback(@bind.oAuthUser() user:OAuthUser) {\n        // other process... for example check if user is in database\n\n        //create JWT TOKEN\n        const token = sign(<claim>, <secret>)\n        return response.postMessage({ status: "Success", token })\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"By default ",Object(r.b)("inlineCode",{parentName:"p"},"response.postMessage")," will send message only to the same origin, you can change this behavior by providing the origin on second parameter."))),Object(r.b)("p",null,"Redirect uri handler above will send the ",Object(r.b)("inlineCode",{parentName:"p"},'{ status: "Success", token }')," message to the main window using ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"post message"),", main window need to listen to the ",Object(r.b)("inlineCode",{parentName:"p"},"message")," event like below: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("message", ev => {\n    // IMPORTANT!!\n    // make sure the message comes from the same origin\n    if(ev.origin === location.origin && ev.data.status === "Success"){\n        // close the popup dialog\n        if (ev.source && "close" in ev.source) ev.source.close()\n        // retrieve the token \n        const token = ev.data.token;\n        // add code, when the login successful\n    }\n})\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Best Practice")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Its required to check the ",Object(r.b)("inlineCode",{parentName:"p"},"ev.origin")," of the message event because any window possible to send message to the main window. "))),Object(r.b)("h2",{id:"customization"},"Customization"),Object(r.b)("p",null,"Plumier social login functionalities can be customize to match your need. "),Object(r.b)("h3",{id:"custom-login-endpoint"},"Custom Login Endpoint"),Object(r.b)("p",null,"Login endpoint served by OAuth provider facility can be customized accordingly from the facility"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'new Plumier()\n    .set(new FacebookOAuthFacility({ \n        loginEndPoint: "/auth/facebook/login-url"\n    }))\n')),Object(r.b)("h3",{id:"add-extra-parameter-to-login-endpoint"},"Add Extra Parameter To Login Endpoint"),Object(r.b)("p",null,"Its possible to customize the generated login endpoint by providing the parameter. For example the default scope of google endpoint used is: ",Object(r.b)("inlineCode",{parentName:"p"},"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"),". You can override this by providing the scope on the login endpoint: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET /auth/google/login?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email\n")),Object(r.b)("h3",{id:"add-extra-parameter-on-profile-endpoint"},"Add Extra Parameter on Profile Endpoint"),Object(r.b)("p",null,"OAuth provider facility used minimum configuration parameter to access the user profile endpoint. For example for Facebook provider the field params use is ",Object(r.b)("inlineCode",{parentName:"p"},"id,name,first_name,last_name,picture.type(large)"),". You can override this by providing the parameters in the ",Object(r.b)("inlineCode",{parentName:"p"},"FacebookOAuthFacility")," (other provider also can be configured) like below: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'new Plumier()\n    .set(new FacebookOAuthFacility({ \n        profileParams: { fields: "id,name,email,birthday,first_name,last_name,picture.type(large)" }\n    }))\n')))}d.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||s[u]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);