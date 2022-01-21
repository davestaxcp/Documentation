"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[8793],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Frequently Asked Questions"},c=void 0,l={unversionedId:"basics/faq/general",id:"basics/faq/general",title:"Frequently Asked Questions",description:"What is XCP?",source:"@site/docs/basics/faq/general.md",sourceDirName:"basics/faq",slug:"/basics/faq/general",permalink:"/docs/basics/faq/general",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basics/faq/general.md",tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions"},sidebar:"basics",previous:{title:"Some use cases",permalink:"/docs/basics/assets/use-cases"},next:{title:"On Smart contracts",permalink:"/docs/basics/faq/smart-contracts"}},u=[{value:"What is XCP?",id:"what-is-xcp",children:[],level:3},{value:"Can I secure my XCP and tokens in cold storage?",id:"can-i-secure-my-xcp-and-tokens-in-cold-storage",children:[],level:3},{value:"Is a 51% attack against Counterparty possible?",id:"is-a-51-attack-against-counterparty-possible",children:[],level:3},{value:"Besides a 51% attack, what are the other risks to consensus?",id:"besides-a-51-attack-what-are-the-other-risks-to-consensus",children:[],level:3},{value:"So can the Counterparty Team rewrite the Counterparty ledger\u2019s history, in an emergency or by decree? How does that compare to the same risks with Bitcoin Core devs?",id:"so-can-the-counterparty-team-rewrite-the-counterparty-ledgers-history-in-an-emergency-or-by-decree-how-does-that-compare-to-the-same-risks-with-bitcoin-core-devs",children:[],level:3},{value:"What about support for other blockchains instead of Bitcoin?",id:"what-about-support-for-other-blockchains-instead-of-bitcoin",children:[],level:3},{value:"What is Bitcoin fails or becomes co-opted?",id:"what-is-bitcoin-fails-or-becomes-co-opted",children:[],level:3},{value:"What happens if and when OP_RETURN data is auto-pruned?",id:"what-happens-if-and-when-op_return-data-is-auto-pruned",children:[],level:3},{value:"How are blockchain reorganizations (&quot;reorgs&quot;) handled by Counterparty?",id:"how-are-blockchain-reorganizations-reorgs-handled-by-counterparty",children:[],level:3},{value:"How can a thin client trustlessly lookup the Bitcoin public address associated with the OSTOCK asset name?",id:"how-can-a-thin-client-trustlessly-lookup-the-bitcoin-public-address-associated-with-the-ostock-asset-name",children:[],level:3}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-xcp"},"What is XCP?"),(0,r.kt)("p",null,"XCP is the native token of Counterparty. It is a technical necessity for adding advanced features to Counterparty, which by nature require a protocol aware currency. Bitcoin can only be aware of BTC, while Counterparty can be aware of both BTC and XCP itself. This makes it possible to escrow funds, trade in a decentralized manner, and harness the full potential of programmable money."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To learn more about XCP, see ",(0,r.kt)("a",{parentName:"em",href:"/docs/basics/what-is-counterparty/an-incentivization-token"},"about XCP"),".")),(0,r.kt)("h3",{id:"can-i-secure-my-xcp-and-tokens-in-cold-storage"},"Can I secure my XCP and tokens in cold storage?"),(0,r.kt)("p",null,"Yes. You can make a regular Bitcoin paper wallet and store them there. Later, you can sweep the funds into a Counterparty wallet, like Counterwallet."),(0,r.kt)("p",null,"Counterwallet also supports the use of Offline Armory. More info on that is ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets/counterwallet-tutorials/create-armory-addresses"},"here"),"."),(0,r.kt)("h3",{id:"is-a-51-attack-against-counterparty-possible"},"Is a 51% attack against Counterparty possible?"),(0,r.kt)("p",null,'As every Counterparty transaction is a Bitcoin transaction, to do a "51% attack" on Counterparty you would have to do a 51% attack on Bitcoin.'),(0,r.kt)("h3",{id:"besides-a-51-attack-what-are-the-other-risks-to-consensus"},"Besides a 51% attack, what are the other risks to consensus?"),(0,r.kt)("p",null,'The Counterparty network could be effectively "forked" by a sizable number of people running different versions of the Counterparty client that had different "consensus sensitive code" (i.e. protocol code). In this case, if a transaction was read in from the Bitcoin client software, the differing code may cause two different interpretations of the data, and thus, two different ledger states.'),(0,r.kt)("p",null,"As long as all participants run software that has the same protocol rules (even if it is different Counterparty client implementations), this situation will not happen. The reference client includes extensive safeguards that help detect and prevent this from happening."),(0,r.kt)("p",null,"That being said, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterparty-lib"},"the Counterparty client"),' is completely open-source. Anyone is able to copy the code and make their own modifications. They can then run their modified version of the software, which technically may generate a different ledger than everyone else. This is similar to Bitcoin itself. However, to have any impact, that person would have to get others to run it, who would have to trust this individual more than they trust the Counterparty development team. This new ledger would not be "Counterparty". It would be a separate ledger with its own protocol rules. Services built on this ledger (such as a block explorer) would not agree with similar services built on the Counterparty ledger.'),(0,r.kt)("h3",{id:"so-can-the-counterparty-team-rewrite-the-counterparty-ledgers-history-in-an-emergency-or-by-decree-how-does-that-compare-to-the-same-risks-with-bitcoin-core-devs"},"So can the Counterparty Team rewrite the Counterparty ledger\u2019s history, in an emergency or by decree? How does that compare to the same risks with Bitcoin Core devs?"),(0,r.kt)("p",null,"It\u2019s identical to the case with Bitcoin. The Bitcoin core devs could publish a copy of Bitcoin Core that does anything, but no one would download it."),(0,r.kt)("p",null,"Counterparty is 100% open source, with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterparty-lib/releases"},"a list of code changes")," from one release to the next visible for all to see and inspect."),(0,r.kt)("h3",{id:"what-about-support-for-other-blockchains-instead-of-bitcoin"},"What about support for other blockchains instead of Bitcoin?"),(0,r.kt)("p",null,'Counterparty is built on Bitcoin. That has always been the case and we do not see it changing, ever. For other blockchains, there are "forks" of the Counterparty software. Examples would be Dogeparty for Dogecoin, and Viacoin\'s ClearingHouse. We generally encourage forks on other blockchains, especially if they help contribute back bug fixes and enhancements to the main Counterparty codebase.'),(0,r.kt)("h3",{id:"what-is-bitcoin-fails-or-becomes-co-opted"},"What is Bitcoin fails or becomes co-opted?"),(0,r.kt)("p",null,"In the event of a catastrophic failure of the Bitcoin network, Counterparty ",(0,r.kt)("em",{parentName:"p"},"does"),' have the technical capability of "freezing" balances and migrating to another blockchain, like Litecoin for instance, with relative ease.'),(0,r.kt)("h3",{id:"what-happens-if-and-when-op_return-data-is-auto-pruned"},"What happens if and when OP_RETURN data is auto-pruned?"),(0,r.kt)("p",null,"Counterparty only needs some Bitcoin full nodes somewhere to have an unpruned copy of the blockchain. As every Counterparty full node is also a Bitcoin full node, this is easily done."),(0,r.kt)("h3",{id:"how-are-blockchain-reorganizations-reorgs-handled-by-counterparty"},'How are blockchain reorganizations ("reorgs") handled by Counterparty?'),(0,r.kt)("p",null,'Blockchain reorganizations are essentially handled by Counterparty the same way they are handled by Bitcoin. If the Counterparty software detects that a reorganization has occurred, it will utilize an internal "undolog" to quickly undo (roll back) transactions up to the point of the chain branching, and then process new transactions on the now-longest chain.'),(0,r.kt)("h3",{id:"how-can-a-thin-client-trustlessly-lookup-the-bitcoin-public-address-associated-with-the-ostock-asset-name"},"How can a thin client trustlessly lookup the Bitcoin public address associated with the OSTOCK asset name?"),(0,r.kt)("p",null,"You can use a local copy of the blockchain just fine. The only difference between Counterparty and Bitcoin here is that Counterparty doesn\u2019t support SPV. We\u2019re working on solutions to this issue. Protocols like VerSum offer excellent models for untrusted verification here."))}d.isMDXComponent=!0}}]);