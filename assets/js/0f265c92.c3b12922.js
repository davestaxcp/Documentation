"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[1564],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4642:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),c=["components"],i={title:"Platform Architecture"},l=void 0,u={unversionedId:"advanced/architecture",id:"advanced/architecture",title:"Platform Architecture",description:"In the figure below you can see how all Counterparty platform components interact with each other.",source:"@site/docs/advanced/architecture.md",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docs/advanced/architecture",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/architecture.md",tags:[],version:"current",frontMatter:{title:"Platform Architecture"},sidebar:"advanced",next:{title:"Protocol Specification",permalink:"/docs/advanced/protocol"}},p=[{value:"counterparty-server",id:"counterparty-server",children:[],level:2},{value:"counterblock",id:"counterblock",children:[],level:2},{value:"Counterwallet",id:"counterwallet",children:[],level:2},{value:"armory_utxsvr",id:"armory_utxsvr",children:[],level:2}],s={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the figure below you can see how all Counterparty platform components interact with each other."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5867).Z})),(0,a.kt)("h2",{id:"counterparty-server"},"counterparty-server"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-server")," is the name for the combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-lib")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-cli"),". It serves as the reference client for Counterparty, and implements support for the core Counterparty protocol via a provided REST API and command line interface."),(0,a.kt)("h2",{id:"counterblock"},"counterblock"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"counterblock")," provides additional services (required by counterwallet and potentially other services) beyond those offered in the API provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-server"),". It features a full-fledged JSON RPC-based API, and has an extensible architecture to support custom plugins."),(0,a.kt)("h2",{id:"counterwallet"},"Counterwallet"),(0,a.kt)("p",null,"Counterwallet is a web wallet for Bitcoin (BTC) and Counterparty (XCP). It is being actively developed and currently implements most Counterparty features, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fully functional wallet for BTC, XCP, and user-created tokens"),(0,a.kt)("li",{parentName:"ul"},"Peer-to-peer asset trading with algorithmic order matching (XCP, other assets)"),(0,a.kt)("li",{parentName:"ul"},"Custom asset creation"),(0,a.kt)("li",{parentName:"ul"},"Betting"),(0,a.kt)("li",{parentName:"ul"},"Broadcasting data on the Bitcoin Blockchain"),(0,a.kt)("li",{parentName:"ul"},"Multisig"),(0,a.kt)("li",{parentName:"ul"},"Offline (Armory) transactions")),(0,a.kt)("h2",{id:"armory_utxsvr"},"armory_utxsvr"),(0,a.kt)("p",null,"A service used by counterblock with Counterwallet to support Offline Armory transactions. This service requires Armory itself."))}d.isMDXComponent=!0},5867:function(e,t,r){t.Z=r.p+"assets/images/platform_architecture-82767f030527fb81f177358ad691861a.png"}}]);