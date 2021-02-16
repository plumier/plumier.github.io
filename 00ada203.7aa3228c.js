(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),m=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=m(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=m(n),s=i,d=b["".concat(r,".").concat(s)]||b[s]||u[s]||l;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var i=n(3),a=(n(0),n(113));const l={id:"file-upload",title:"File Upload"},r={unversionedId:"file-upload",id:"file-upload",isDocsHomePage:!1,title:"File Upload",description:"Plumier added support for file upload using multi part form data, by default this feature is not enabled, you can enable the multipart feature from the WebApiFacility like below:",source:"@site/docs/File-Upload.md",slug:"/file-upload",permalink:"/file-upload",editUrl:"https://github.com/plumier/plumier/edit/master/website/docs/File-Upload.md",version:"current",sidebar:"overview",previous:{title:"Serve Static Files",permalink:"/serve-static"},next:{title:"Application Startup",permalink:"/application-startup"}},o=[{value:"Parameter Binding",id:"parameter-binding",children:[]},{value:"Multiple Files",id:"multiple-files",children:[]},{value:"FormFile",id:"formfile",children:[]},{value:"File Validation",id:"file-validation",children:[]},{value:"Image Validation",id:"image-validation",children:[]}],p={toc:o};function c({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Plumier added support for file upload using multi part form data, by default this feature is not enabled, you can enable the ",Object(a.b)("inlineCode",{parentName:"p"},"multipart")," feature from the ",Object(a.b)("inlineCode",{parentName:"p"},"WebApiFacility")," like below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import Plumier, { WebApiFacility } from "plumier"\n\nconst plum = new Plumier()\nplum.set(new WebApiFacility({ bodyParser: { multipart: true }}))\n')),Object(a.b)("h2",{id:"parameter-binding"},"Parameter Binding"),Object(a.b)("p",null,"Plumier provided a parameter binding to automatically bound the ",Object(a.b)("inlineCode",{parentName:"p"},"FormFile")," into action parameter. Its possible to bound it using name binding or decorator binding using ",Object(a.b)("inlineCode",{parentName:"p"},"@bind.formFile()"),". "),Object(a.b)("p",null,"For example you have a simple form with a file input named ",Object(a.b)("inlineCode",{parentName:"p"},"file")," like below "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<form method="POST" enctype="multipart/form-data" action="/animal/save">\n    <input type="file" name="file"/>\n    <input type="submit" value="Upload"/>\n</form>\n')),Object(a.b)("p",null,"Note that the action of the form pointed to ",Object(a.b)("inlineCode",{parentName:"p"},"/animal/save"),". The name of the file input is ",Object(a.b)("inlineCode",{parentName:"p"},"file"),". Using that information you can create the controller like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { FormFile, route } from "plumier"\nimport { readFile } from "fs"\nimport { promisify } from "util"\n\nconst readFileAsync = promisify(readFile)\n\nexport class AnimalController {\n    @route.post()\n    async save(file: FormFile) {\n        // process the file \n        // crop or create thumbnail \n        // re-upload to cloud storage\n        const buf = await readFileAsync(file.path)\n    }\n}\n')),Object(a.b)("p",null,"Controller above will be generated into route ",Object(a.b)("inlineCode",{parentName:"p"},"POST /animal/save"),", it uses name binding to bind the file input into the action parameter. Note that the name of the action parameter ",Object(a.b)("inlineCode",{parentName:"p"},"file")," is the same as the file input name in the html form ",Object(a.b)("inlineCode",{parentName:"p"},"file"),". "),Object(a.b)("p",null,"Its also possible to bind the file using decorator like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.post()\n    save(@bind.formFile("file") data: FormFile) {\n    }\n}\n')),Object(a.b)("p",null,"Note that when using decorator parameter binding, the parameter name is not necessary to be the same as the file input. "),Object(a.b)("h2",{id:"multiple-files"},"Multiple Files"),Object(a.b)("p",null,"For file input with ",Object(a.b)("inlineCode",{parentName:"p"},"multiple")," property enabled, you need to specify the type of the action parameter as array of ",Object(a.b)("inlineCode",{parentName:"p"},"FormFile")," like below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<form method="POST" enctype="multipart/form-data" action="/animal/save">\n    <input type="file" name="file" multiple/>\n    <input type="submit" value="Upload"/>\n</form>\n')),Object(a.b)("p",null,"Above code showing file input has the ",Object(a.b)("inlineCode",{parentName:"p"},"multiple")," property enabled, controller can be changed into below"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import tsp from "@plumier/reflect" \n\nexport class AnimalController {\n    @route.post()\n    save(@tsp.type([FormFile]) file: FormFile[]) {\n\n    }\n}\n')),Object(a.b)("p",null,"Note that you need to provided type information using ",Object(a.b)("inlineCode",{parentName:"p"},"@tsp.type([FormFile])")," to prevent route analysis warning. "),Object(a.b)("h2",{id:"formfile"},"FormFile"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FormFile")," is a specialized class contains information about uploaded file input. Its has properties like below: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"size"),": Size of the file (bytes)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path"),": Temporary path of the uploaded file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name"),": File name provided by client"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type"),": Mime type of the file "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mtime"),": The file timestamp")),Object(a.b)("h2",{id:"file-validation"},"File Validation"),Object(a.b)("p",null,"Plumier provided file validation using decorator for convenient, it can be applied on the ",Object(a.b)("inlineCode",{parentName:"p"},"FormFile")," parameter like other validator."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.post()\n    save(@val.file("3MB") file: FormFile) {\n    }\n}\n')),Object(a.b)("p",null,"Above code will restrict the size of uploaded file only 3MB allowed. The ",Object(a.b)("inlineCode",{parentName:"p"},"@val.file()")," validator receive string/number as default to limit the file size. Internally the bytes string notation uses ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/bytes"},"bytes")," to parse the string. "),Object(a.b)("p",null,"File validation also receive object parameter for more options. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export class AnimalController {\n    @route.post()\n    save(@val.file({ mime: /^image\\/(jpg|jpeg)$/i }) file: FormFile) {\n    }\n}\n")),Object(a.b)("p",null,"Above code will restrict only file with mime type ",Object(a.b)("inlineCode",{parentName:"p"},"image/jpg")," and ",Object(a.b)("inlineCode",{parentName:"p"},"image/jpeg")," allowed. "),Object(a.b)("h2",{id:"image-validation"},"Image Validation"),Object(a.b)("p",null,"Plumier provided a short hand for image validation, to restrict the uploaded file only with mime type ",Object(a.b)("inlineCode",{parentName:"p"},"image/*"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'export class AnimalController {\n    @route.post()\n    save(@val.image("3MB") file: FormFile) {\n    }\n}\n')),Object(a.b)("p",null,"Above code will restrict uploaded file only of type image with maximum file size 3MB."))}c.isMDXComponent=!0}}]);