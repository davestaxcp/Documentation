"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[8941],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],u={title:"Contributing"},l=void 0,s={unversionedId:"develop/contributing",id:"develop/contributing",title:"Contributing",description:"End Users",source:"@site/docs/develop/contributing.md",sourceDirName:"develop",slug:"/develop/contributing",permalink:"/docs/develop/contributing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/contributing.md",tags:[],version:"current",frontMatter:{title:"Contributing"},sidebar:"develop",previous:{title:"Writing counterblock Plug-in Modules",permalink:"/docs/develop/counterblock/modules"},next:{title:"Bug Bounties",permalink:"/docs/develop/bounties"}},c=[{value:"End Users",id:"end-users",children:[{value:"Counterwallet-related Support Pointers",id:"counterwallet-related-support-pointers",children:[],level:3}],level:2},{value:"Developers",id:"developers",children:[{value:"Counterwallet",id:"counterwallet",children:[],level:3},{value:"counterparty-cli",id:"counterparty-cli",children:[],level:3},{value:"counterparty-lib",id:"counterparty-lib",children:[],level:3}],level:2},{value:"Bounties",id:"bounties",children:[{value:"The Counterparty Project Bounties",id:"the-counterparty-project-bounties",children:[],level:3}],level:2},{value:"Community Bounties",id:"community-bounties",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"end-users"},"End Users"),(0,i.kt)("p",null,"You can seek community help on the chat (fastest), forums or submit a\nbug report (instructions can be found below)."),(0,i.kt)("h3",{id:"counterwallet-related-support-pointers"},"Counterwallet-related Support Pointers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before you open a new issue, do a search or two to check whether a\nsimilar problem is described somewhere on the Web. You can also\nsearch ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CounterpartyXCP/counterwallet/issues"},"the Countewallet issues")," to see if the issue is open or\nhas already been closed (an issue can be solved in there, but the\ncode may still be in testing, so search closed issues, too)"),(0,i.kt)("li",{parentName:"ul"},"If you suspect the problem is browser-related (e.g. disappearing or\nmalformed text), confirm the problem in another browser or in the\nIncognito/Private mode (using the same browser). Stale cache is\nsometimes reason for weird browser behavior."),(0,i.kt)("li",{parentName:"ul"},"In case of issues with transactions that require tracking, paste\nyour address in text (not image!) format"),(0,i.kt)("li",{parentName:"ul"},"Related KB/FAQs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://support.counterparty.io/solution/articles/5000013731-how-to-collect-client-side-debug-information-for-counterwallet-"},"How to collect client-side debug info for Counterwallet problems?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://support.counterparty.io/solution/articles/5000051310-what-do-various-strings-in-the-diagnostic-part-of-counterwallet-advanced-options-mean-"},"Diagnostic options in Counterwallet settings"))))),(0,i.kt)("h2",{id:"developers"},"Developers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All Counterparty projects are hosted on Github and can be found at\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CounterpartyXCP"},"https://github.com/CounterpartyXCP"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Counterwallet issues should go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Counterwallet")," repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"counterpartyd")," issues should be submitted to the\n",(0,i.kt)("inlineCode",{parentName:"li"},"counterpartyd")," repo"))),(0,i.kt)("li",{parentName:"ul"},"If you think you\u2019ve identified a ",(0,i.kt)("strong",{parentName:"li"},"security issue"),", check out the\n",(0,i.kt)("a",{parentName:"li",href:"https://counterparty.io/docs/bounties"},"bounties page")," and contact the Counterparty developers directly.")),(0,i.kt)("h3",{id:"counterwallet"},"Counterwallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please see the pointers for end users (above)."),(0,i.kt)("li",{parentName:"ul"},"Since it\u2019s easy to check JavaScript Debug Console, it\u2019s usually a\ngood idea to check that out first"),(0,i.kt)("li",{parentName:"ul"},"Describe the issue and submit the logs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Counterwallet-related problems: what happened, how to duplicate\nthe issue, especially whether it was observed in another Web\nbrowser.")))),(0,i.kt)("h3",{id:"counterparty-cli"},"counterparty-cli"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CounterpartyXCP/counterparty-cli/blob/develop/CONTRIBUTING.md"},"https://github.com/CounterpartyXCP/counterparty-cli/blob/develop/CONTRIBUTING.md"))),(0,i.kt)("h3",{id:"counterparty-lib"},"counterparty-lib"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CounterpartyXCP/counterparty-lib/blob/master/CONTRIBUTING.md"},"https://github.com/CounterpartyXCP/counterparty-lib/blob/master/CONTRIBUTING.md"))),(0,i.kt)("h2",{id:"bounties"},"Bounties"),(0,i.kt)("h3",{id:"the-counterparty-project-bounties"},"The Counterparty Project Bounties"),(0,i.kt)("p",null,"The Counterparty Projects offers bounties for various things, but\nespecially for security issues related to Counterparty software.\nYou can find more about those bounties here:\n",(0,i.kt)("a",{parentName:"p",href:"http://counterparty.io/bounties/"},"http://counterparty.io/bounties/"),"."),(0,i.kt)("h2",{id:"community-bounties"},"Community Bounties"),(0,i.kt)("p",null,"From time to time community members create development bounties,\ntoo."),(0,i.kt)("p",null,"If you want to pay someone to develop a feature or fix a bug for\nyou:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ask in the chat or on the forums. If payment is in crypto, you can try to find a trusted community member to serve as 1-of-3 multisig senders."),(0,i.kt)("li",{parentName:"ul"},"Create a bounty directly under particular issue, or create a bounty on ",(0,i.kt)("a",{parentName:"li",href:"http://bountysource.com/teams/counterparty/issues"},"http://bountysource.com/teams/counterparty/issues"),". Counterparty repos are integrated with Bountysource."),(0,i.kt)("li",{parentName:"ul"},"You can also use other sites and announce your bounties in the chat or on the forums")))}d.isMDXComponent=!0}}]);