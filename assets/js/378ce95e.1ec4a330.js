"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[1814],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Getting started"},l=void 0,d={unversionedId:"advanced/federated-node/getting-started",id:"advanced/federated-node/getting-started",title:"Getting started",description:'This document describes how one can set up their own Counterparty "Federated Node" system, on Linux, Windows or OS X.',source:"@site/docs/advanced/federated-node/getting-started.md",sourceDirName:"advanced/federated-node",slug:"/advanced/federated-node/getting-started",permalink:"/Documentation/docs/advanced/federated-node/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"advanced",previous:{title:"Using multisig with counterparty-server",permalink:"/Documentation/docs/advanced/advanced-usage/multisig"},next:{title:"Pre-installation",permalink:"/Documentation/docs/advanced/federated-node/pre-installation"}},c=[{value:"Node Services",id:"node-services",children:[],level:3},{value:"Hardware / OS requirements",id:"hardware--os-requirements",children:[],level:3}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This document describes how one can set up their own Counterparty "Federated Node" system, on Linux, Windows or OS X.'),(0,o.kt)("p",null,'A Federated Node is a self-contained system that runs the some or all of the Counterparty software stack, via Docker. Each system operates as a Bitcoin and Counterparty "full node". Using this toolset, one can generally get started running the Counterparty software much quicker and more easily than a manual installation of the various components.'),(0,o.kt)("p",null,"The document is primarily intended for power users and developers."),(0,o.kt)("h3",{id:"node-services"},"Node Services"),(0,o.kt)("a",{name:"services"}),"Services run on a Federated Node include some or all of the following:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"counterparty-server"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-lib")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-cli"),". Implements support for the core Counterparty protocol, via a provided REST API and command line interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"counterblock"),": Provides additional services (required by ",(0,o.kt)("inlineCode",{parentName:"li"},"counterwallet")," and potentially other services) beyond those offered in the API provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-server"),". It features a full-fledged JSON RPC-based API, and has an extensible architecture to support custom plugins."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"counterwallet"),": The reference Web wallet for Counterparty. This is a collection of HTML, CSS and javascript resources, served by ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bitcoind"),": Reference Bitcoin implementation, used by ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-server")," to sync to the Bitcoin blockchain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"addrindexrs"),": Bitcoin address index service. Maintains an updated database of UTXOs for usage in the counterparty services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"armory_utxsvr"),": A service used by ",(0,o.kt)("inlineCode",{parentName:"li"},"counterblock")," with Counterwallet to support ",(0,o.kt)("a",{parentName:"li",href:"http://counterparty.io/docs/create_armory_address/"},"Offline Armory transactions"),". This service requires Armory itself, which is automatically installed as part of the Federated Node setup procedure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nginx"),": Reverse proxies ",(0,o.kt)("inlineCode",{parentName:"li"},"counterwallet")," access. Not used with ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-server"),"-only or ",(0,o.kt)("inlineCode",{parentName:"li"},"counterblock"),"-only nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mongodb and redis"),": Used by ",(0,o.kt)("inlineCode",{parentName:"li"},"counterblock"),".")),(0,o.kt)("p",null,"Please note that Federated Node should not be installed on a system which already has one or more of conflicting services running on the ports used by Federated Node. The Federated Node install script checks that required ports are unused and exits to avoid conflict. If you have a non-essential Web, mongodb or other service running on the target system you can disable them or bind them to a different port to be able to pass the built-in check and avoid application conflicts."),(0,o.kt)("h3",{id:"hardware--os-requirements"},"Hardware / OS requirements"),(0,o.kt)("a",{name:"requirements"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory"),": 4GB RAM (",(0,o.kt)("inlineCode",{parentName:"li"},"bitcoind"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty-server")," only), 8GB+ RAM (full stack)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disk space:")," The exact disk space required will be dependent on what services are run on the node:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"bitcoin")," databases: ",(0,o.kt)("strong",{parentName:"li"},"~361GB")," (mainnet), ",(0,o.kt)("strong",{parentName:"li"},"~32GB")," (testnet)"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"addrindexrs")," database: ",(0,o.kt)("strong",{parentName:"li"},"~63GB")," (mainnet), ",(0,o.kt)("strong",{parentName:"li"},"~6GB")," (testnet)"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"counterparty")," databases: ",(0,o.kt)("strong",{parentName:"li"},"~5GB")," (mainnet), ",(0,o.kt)("strong",{parentName:"li"},"~1GB")," (testnet)"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"armory_utxsvr"),": ",(0,o.kt)("strong",{parentName:"li"},"~291GB")," (mainnet), ",(0,o.kt)("strong",{parentName:"li"},"~26GB")," (testnet)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OS:")," ",(0,o.kt)("em",{parentName:"li"},"Please note that Ubuntu Linux is the recommended OS at this time, as most of our testing is performed on it. Windows and OS X support is considered in BETA."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Linux"),": We recommend Ubuntu 20.10 64-bit, but other, modern versions of Linux should work, as long as they support the newest released version of Docker"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows"),": Windows 7 or higher, or Server 2008 or higher. 64-bit required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OS X"),': 10.8 "Mountain Lion" or higher')))))}p.isMDXComponent=!0}}]);