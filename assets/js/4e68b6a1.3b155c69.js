"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[7110],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"Node Administration"},d=void 0,s={unversionedId:"advanced/federated-node/administration",id:"advanced/federated-node/administration",title:"Node Administration",description:"Administration",source:"@site/docs/advanced/federated-node/administration.md",sourceDirName:"advanced/federated-node",slug:"/advanced/federated-node/administration",permalink:"/Documentation/docs/advanced/federated-node/administration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/federated-node/administration.md",tags:[],version:"current",frontMatter:{title:"Node Administration"},sidebar:"advanced",previous:{title:"Installation",permalink:"/Documentation/docs/advanced/federated-node/installation"},next:{title:"Counterwallet-Specific",permalink:"/Documentation/docs/advanced/federated-node/counterwallet"}},c=[{value:"Administration",id:"administration",children:[{value:"Checking status",id:"checking-status",children:[],level:3},{value:"Modifying configurations",id:"modifying-configurations",children:[],level:3},{value:"Viewing/working with stored data",id:"viewingworking-with-stored-data",children:[],level:3},{value:"Viewing logs",id:"viewing-logs",children:[],level:3},{value:"Stopping and restarting containers",id:"stopping-and-restarting-containers",children:[],level:3},{value:"Issuing a single shell command",id:"issuing-a-single-shell-command",children:[],level:3}],level:2},{value:"Updating, rebuilding, uninstalling",id:"updating-rebuilding-uninstalling",children:[{value:"Reparsing blockchain data",id:"reparsing-blockchain-data",children:[],level:3},{value:"Rebuilding a service container",id:"rebuilding-a-service-container",children:[],level:3},{value:"Uninstalling",id:"uninstalling",children:[],level:3}],level:2},{value:"Component development",id:"component-development",children:[{value:"Other Developer Notes",id:"other-developer-notes",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"administration"},"Administration"),(0,r.kt)("h3",{id:"checking-status"},"Checking status"),(0,r.kt)("p",null,"To check the status of the containers, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode ps\n")),(0,r.kt)("h3",{id:"modifying-configurations"},"Modifying configurations"),(0,r.kt)("p",null,"Configuration files for the ",(0,r.kt)("inlineCode",{parentName:"p"},"bitcoin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"counterparty")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"counterblock")," services are stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"federatednode/config/")," and may be freely edited. The various locations are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/bitcoin/bitcoin.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin-testnet"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/bitcoin/bitcoin.testnet.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/counterparty/server.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-testnet"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/counterparty/server.testnet.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/counterblock/server.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock-testnet"),": See ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode/config/counterblock/server.testnet.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis"),": shared service used for both mainnet and testnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongodb"),": shared service used for both mainnet and testnet")),(0,r.kt)("p",null,"Remember: once done editing a configuration file, you must ",(0,r.kt)("inlineCode",{parentName:"p"},"restart")," the corresponding service. Also, please don't change port or usernames/passwords if the configuration files unless you know what you are doing (as the services are coded to work together smoothly with specific values)."),(0,r.kt)("p",null,"For example, a user with base setup (Bitcoin Core & Counterparty Server) could make Counterparty use existing Bitcoin Core by changing configuration files found under federatednode/config/counterparty/ (",(0,r.kt)("inlineCode",{parentName:"p"},"backend-connect")," in Counterparty server configuration files and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet-connect")," in client configuration files.) At this point Bitcoin Core (mainnet and/or testnet) container(s) could be stopped and counterparty server container restarted. If your existing Bitcoin Server allows RPC connections, with proper settings and correct RPC credentials in their configuration files, counterparty (server), counterblock and counterwallet can all use it so that you don't have to run bitcoin or bitcoin-testnet container."),(0,r.kt)("h3",{id:"viewingworking-with-stored-data"},"Viewing/working with stored data"),(0,r.kt)("p",null,"The various services use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/tutorials/dockervolumes/"},"Docker named volumes")," to store data that is meant to be persistent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin-testnet"),": Stores blockchain data in the ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode_bitcoin-data")," volume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addrindexrs")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"addrindexrs-testnet"),": Stores index data in the ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode_addrindexrs-data")," volume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-testnet"),": Stores Counterparty databases in the ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode_counterparty-data")," volume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"counterblock-testnet"),": Stores Counterblock asset info (images), etc in the ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode_counterblock-data")," volume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongodb"),": Stores the databases for ",(0,r.kt)("inlineCode",{parentName:"li"},"counterblock")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"counterblock-testnet")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"federatednode_mongodb-data")," volume")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume inspect <volume-name>")," to display volume location. See ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume --help")," for help on how to interact with Docker volumes."),(0,r.kt)("h3",{id:"viewing-logs"},"Viewing logs"),(0,r.kt)("p",null,"To tail the logs, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode tail <service>\n")),(0,r.kt)("p",null,"Or, to view the entire log, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode logs <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," may be one the following, or blank to tail all services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty")," (",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-server")," mainnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock")," (",(0,r.kt)("inlineCode",{parentName:"li"},"counterblock")," mainnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin")," (",(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin")," mainnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addrindexrs")," (",(0,r.kt)("inlineCode",{parentName:"li"},"addrindexrs")," mainnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"armory_utxsvr")," (",(0,r.kt)("inlineCode",{parentName:"li"},"armory_utxsvr")," mainnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitcoin-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addrindexrs-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"armory_utxsvr-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterwallet"))),(0,r.kt)("h3",{id:"stopping-and-restarting-containers"},"Stopping and restarting containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode stop <service>\nfednode start <service>\nfednode restart <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the service names listed ",(0,r.kt)("a",{parentName:"p",href:"#servicenames"},"above"),", or blank for all services."),(0,r.kt)("p",null,"Note that redis and mongodb are shared services and need to run if either (mainnet or testnet) counterblock container is running and shut down only if both counterblock containers are not running."),(0,r.kt)("h3",{id:"issuing-a-single-shell-command"},"Issuing a single shell command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode exec <service> <CMD>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the service names listed ",(0,r.kt)("a",{parentName:"p",href:"#servicenames"},"above"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<CMD>")," is an arbitrary shell command."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode exec counterparty counterparty-client send --source=12u4Vymr3bGTywjMQDgBkwAnazwQuDqzJG --destination=1AanCo9CJSomhUEy2YrhfXrU1PboBhFaBq --quantity=1.5 --asset=XCP\nfednode exec bitcoin-testnet bitcoin-cli getpeerinfo\nfednode exec counterblock ls /root\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Getting a shell in a conainer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode shell <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the service names listed ",(0,r.kt)("a",{parentName:"p",href:"#servicenames"},"above"),"."),(0,r.kt)("h2",{id:"updating-rebuilding-uninstalling"},"Updating, rebuilding, uninstalling"),(0,r.kt)("p",null,"To pull the newest software from the git repositories and restart the appropriate daemon, issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode update <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the following, or blank for all applicable services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterblock-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"armory_utxsvr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"armory_utxsvr-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counterwallet"))),(0,r.kt)("h3",{id:"reparsing-blockchain-data"},"Reparsing blockchain data"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"counterparty-server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"counterblock")," read in blockchain data and construct their own internal databases. To reset these databases and trigger a reparse of this blockchain data for one of the services, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode reparse <service>\n")),(0,r.kt)("p",null,"Where service is ",(0,r.kt)("inlineCode",{parentName:"p"},"counterparty"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"counterparty-testnet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"counterblock"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"counterblock-testnet"),"."),(0,r.kt)("h3",{id:"rebuilding-a-service-container"},"Rebuilding a service container"),(0,r.kt)("p",null,"As a more extensive option, if you want to remove, rebuild and reinstall a container (downloading the newest container image/",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and utilizing that):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode rebuild <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the service names listed ",(0,r.kt)("a",{parentName:"p",href:"#servicenames"},"earlier"),", or blank for all services. Note that you are just looking to update the source code and restart the service, ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," is a better option."),(0,r.kt)("h3",{id:"uninstalling"},"Uninstalling"),(0,r.kt)("p",null,"To uninstall the entire fednode setup, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode uninstall\n")),(0,r.kt)("h2",{id:"component-development"},"Component development"),(0,r.kt)("p",null,"The system allows for easy development and modification of the Counterparty software components. To do so, simply update code in the directories under ",(0,r.kt)("inlineCode",{parentName:"p"},"federatednode/src/")," as you see fit. These directories are mapped into the appropriate containers, overlaying (overriding) the source code that the container ships with. This, along with symlinked (develop) Python package installations makes it possible to work on code in-place, with just a service restart necessary to have the changes take effect."),(0,r.kt)("p",null,"Once done updating the source code for a particular service, issue the following command(s) to restart the container with the new code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fednode restart <service>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<service>")," is one of the services mentioned ",(0,r.kt)("a",{parentName:"p",href:"#servicenames_code"},"here"),"."),(0,r.kt)("h3",{id:"other-developer-notes"},"Other Developer Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To run the ",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty-lib")," test suite, execute:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'fednode exec counterparty "cd /counterparty-lib/counterpartylib; py.test --verbose --skiptestbook=all --cov-config=../.coveragerc --cov-report=term-missing --cov=./"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are working on ",(0,r.kt)("inlineCode",{parentName:"p"},"counterwallet"),", you should browse the system using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/")," subdirectory (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://mycounterwallet.bla/src/"),"). This avoids using precompiled sources. Once you are happy with your changes and ready to make them available to everyone that hits the server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"fednode update counterwallet"),", which will pull the newest repo code and repackage the web assets so that the code updates are then active from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://mycounterwallet.bla/"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note that when you install the federated node system, HTTPS repository URLs are used by default for all of the repositories checked out under ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"fednode.py"),". To use SSH URIs instead, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-ssh-uris")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fednode install")," command."))))}u.isMDXComponent=!0}}]);