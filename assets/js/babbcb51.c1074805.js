"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{7522:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(9901);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(3223),r=(a(9901),a(7522));const o={sidebar_position:1},i="Common information",s={unversionedId:"launch-params/about",id:"launch-params/about",title:"Common information",description:"The launch parameters are the list of parameters that is passed",source:"@site/docs/launch-params/about.md",sourceDirName:"launch-params",slug:"/launch-params/about",permalink:"/docs/launch-params/about",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/launch-params/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Events",permalink:"/docs/apps-communication/events"},next:{title:"Init data",permalink:"/docs/launch-params/init-data"}},p={},l=[{value:"Transmission method",id:"transmission-method",level:2},{value:"Extraction",id:"extraction",level:2},{value:"Parameters list",id:"parameters-list",level:2},{value:"<code>tgWebAppVersion</code>",id:"tgwebappversion",level:3},{value:"<code>tgWebAppData</code>",id:"tgwebappdata",level:3},{value:"<code>tgWebAppPlatform</code>",id:"tgwebappplatform",level:3},{value:"<code>tgWebAppThemeParams</code>",id:"tgwebappthemeparams",level:3}],c={toc:l},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-information"},"Common information"),(0,r.kt)("p",null,"The launch parameters are the list of parameters that is passed\nby the native Telegram application to the TWA application. It helps the\ndeveloper to find out the characteristics of the Telegram application, the\ncurrent device, get basic information about the user and much more."),(0,r.kt)("h2",{id:"transmission-method"},"Transmission method"),(0,r.kt)("p",null,"It's easy to guess, but in a web environment, one of the simplest and most\ninstantaneous ways to transfer data in a local environment is to specify them in\nthe address bar of the application. Thus, both the called server and the\ndownloaded application will have some pre-known data. Actually, Telegram Web\nApps technology uses the same algorithm."),(0,r.kt)("p",null,"The native Telegram application transmits a list of these parameters in the\ndynamic part of the URL (in the hash, ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"). Accordingly, in order to access\nthese\nparameters, it is necessary to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.hash")," property from\nthe JavaScript code."),(0,r.kt)("h2",{id:"extraction"},"Extraction"),(0,r.kt)("p",null,"It is important to remember that ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," is a string property, while\nTelegram transmits a whole list of properties, after which the question arises\nabout formatting and processing this list. In fact, everything is quite simple."),(0,r.kt)("p",null,"The native Telegram application passes the list of launch parameters as\nquery-parameters and saves the resulting string in ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.hash"),".\nFor this reason, in order to extract the launch parameters, it is enough\nto perform the following operation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example on how to extract launch parameters"',title:'"Example',on:!0,how:!0,to:!0,extract:!0,launch:!0,'parameters"':!0},"const hash = window.location.hash.slice(1);\nconsole.log(hash); // tgWebAppData=...&tgWebAppVersion=6.2&...\n\nconst params = new URLSearchParams(hash);\nconsole.log(params.get('tgWebAppVersion')); // \"6.2\"\n")),(0,r.kt)("h2",{id:"parameters-list"},"Parameters list"),(0,r.kt)("p",null,"This section provides a list of parameters sent by the native application\nTelegram to the TWA application."),(0,r.kt)("h3",{id:"tgwebappversion"},(0,r.kt)("inlineCode",{parentName:"h3"},"tgWebAppVersion")),(0,r.kt)("p",null,"The current Telegram Web Apps version used by the native application. This\nparameter is important to use, for example, before calling the\nTWA ",(0,r.kt)("a",{parentName:"p",href:"/docs/apps-communication/methods"},"methods")," to make sure, they are\nsupported."),(0,r.kt)("h3",{id:"tgwebappdata"},(0,r.kt)("inlineCode",{parentName:"h3"},"tgWebAppData")),(0,r.kt)("p",null,"Init data. Contains data describing the current user, data sign, and also\nsome useful values. To learn more, visit the separate ",(0,r.kt)("a",{parentName:"p",href:"/docs/launch-params/init-data"},"section"),"."),(0,r.kt)("p",null,"This parameter is passed as query parameters, so in order to get a more\nuser-friendly value, a developer need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example of a processed value"',title:'"Example',of:!0,a:!0,processed:!0,'value"':!0},"const initData = new URLSearchParams(params.get('tgWebAppData'));\n\n// query_id: 'abcdef'\n// user: `{id: 1, first_name: \"Peris\", last_name: \"Hilton\", username: \"peris\", language_code: \"en\", is_premium: true}`\n// auth_date: '1669670292'\n// hash: '4975e881a0347264512f6047e1f3d698cbd2fe0bc1573'\n")),(0,r.kt)("h3",{id:"tgwebappplatform"},(0,r.kt)("inlineCode",{parentName:"h3"},"tgWebAppPlatform")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/supported-applications"},"Telegram application identifier"),". It can be used\nas a factor determining the visual style of the application, for example, when,\ndepending on the device, the developer needs to display components that are\ndifferent visually."),(0,r.kt)("h3",{id:"tgwebappthemeparams"},(0,r.kt)("inlineCode",{parentName:"h3"},"tgWebAppThemeParams")),(0,r.kt)("p",null,"Parameters of the native Telegram application ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui/theme-params"},"theme"),".\nThis parameter can be used to style the application even at the moment\nof rendering the loader."),(0,r.kt)("p",null,"The value of this parameter is a JSON object attached to the string. To\nget a more user-friendly value, it is enough to use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example of a processed value"',title:'"Example',of:!0,a:!0,processed:!0,'value"':!0},"const theme = {\n  bg_color: '#212121',\n  text_color: '#ffffff',\n  hint_color: '#aaaaaa',\n  link_color: '#8774e1',\n  button_color: '#8774e1',\n  button_text_color: '#ffffff',\n  secondary_bg_color: '#0f0f0f',\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Theme parameters can also be obtained via\na separate ",(0,r.kt)("a",{parentName:"p",href:"/docs/apps-communication/methods#web_app_request_theme"},"method"),".")))}h.isMDXComponent=!0}}]);