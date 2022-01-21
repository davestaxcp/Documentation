"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[6833],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9214:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Exchange Integration"},l=void 0,d={unversionedId:"advanced/exchange-integration",id:"advanced/exchange-integration",title:"Exchange Integration",description:"By adding support for Counterparty, your exchange not only gets XCP market support, but support for any other Counterparty asset such as Bitcrystals) or FoldingCoin.",source:"@site/docs/advanced/exchange-integration.md",sourceDirName:"advanced",slug:"/advanced/exchange-integration",permalink:"/docs/advanced/exchange-integration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced/exchange-integration.md",tags:[],version:"current",frontMatter:{title:"Exchange Integration"},sidebar:"advanced",previous:{title:"Counterparty Dependencies on Windows",permalink:"/docs/advanced/installation/windows"}},p=[{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Handling Deposits using Separate Addresses",id:"handling-deposits-using-separate-addresses",children:[],level:2},{value:"Handling Deposits using Memo Transactions",id:"handling-deposits-using-memo-transactions",children:[],level:2},{value:"Handling Withdrawals (Single Send)",id:"handling-withdrawals-single-send",children:[],level:2},{value:"Batching Withdrawals (Multi-Peer-Multi-Asset Send)",id:"batching-withdrawals-multi-peer-multi-asset-send",children:[],level:2},{value:"Best practices",id:"best-practices",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By adding support for Counterparty, your exchange not only gets ",(0,i.kt)("a",{parentName:"p",href:"http://coinmarketcap.com/currencies/counterparty/"},"XCP market")," support, but support for any other Counterparty asset such as ",(0,i.kt)("a",{parentName:"p",href:"http://coinmarketcap.com/assets/bitcrystals/"},"Bitcrystals"),") or ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/currencies/foldingcoin/"},"FoldingCoin"),"."),(0,i.kt)("p",null,"Technically, the process is rather straightforward. However, as Counterparty is not a fork of Bitcoin Core, adding Counterparty support to your exchange is slightly different from adding support for a cryptocurrency that is, like Litecoin or Dogecoin.  We outline the general process below (for XCP, but the process is identical for all Counterparty assets):"),(0,i.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"http://counterparty.io/docs/federated_node/"},"here")," to set up a full node. You can install the ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," configuration (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"fednode install base master"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alternatively, you can install and configure manually. Those instructions are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterparty-lib/blob/develop/README.md#manual-installation"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the system is set up, get started working with ",(0,i.kt)("inlineCode",{parentName:"p"},"counterparty-server"),"'s ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/api/"},"API"),"."))),(0,i.kt)("h2",{id:"handling-deposits-using-separate-addresses"},"Handling Deposits using Separate Addresses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a XCP holding address (or several primary XCP holding addresses). The address will hold deposited XCP funds for all users using the exchange.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a regular Bitcoin address for each user wanting to deposit XCP using the API of the Bitcoin Core instance that ",(0,i.kt)("inlineCode",{parentName:"p"},"counterparty-server")," is connecting to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Poll for deposits using ",(0,i.kt)("inlineCode",{parentName:"p"},"get_sends")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/api/"},"API method"),", filtering for ",(0,i.kt)("inlineCode",{parentName:"p"},"asset==XCP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destination==deposit_address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"block_index<=current_block_index-number_of_desired_confirmations"),". Record the quantity of the send transaction and the transaction's ",(0,i.kt)("inlineCode",{parentName:"p"},"txid"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"'Prime' the deposit address by sending it 0.0005 BTC.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For deposit, send the quantity deposited to the holding address using the ",(0,i.kt)("inlineCode",{parentName:"p"},"do_send")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/api/"},"API method")," with the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"unconfirmed=True")," (so you don't have to wait for the priming to confirm). Record the ",(0,i.kt)("inlineCode",{parentName:"p"},"txid")," of this transaction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the second send is confirmed (poll ",(0,i.kt)("inlineCode",{parentName:"p"},"get_sends")," again), credit the user\u2019s account balance."))),(0,i.kt)("h2",{id:"handling-deposits-using-memo-transactions"},"Handling Deposits using Memo Transactions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a XCP deposit address. The address will hold deposited XCP funds for all users using the exchange.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"'Prime' the deposit address by sending it 0.001 BTC.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make the deposit address require a memo by ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/api/#create_broadcast"},"broadcasting")," ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONS 1")," from that address.  The value and fee_fraction can be 0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When a user wishes to deposit to your exchange, generate a unique hexadecimal invoice ID for the deposit and convey that to the user.  The user must send counterparty assets into the address along with the matching invoice ID in the memo field.  If the user fails to include a memo, the send will be rejected by the network and the user's address will retain the assets they sent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Poll for deposits using ",(0,i.kt)("inlineCode",{parentName:"p"},"get_sends")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/api/"},"API method"),", filtering for ",(0,i.kt)("inlineCode",{parentName:"p"},"asset==XCP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destination==deposit_address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"block_index<={current_block_index-number_of_desired_confirmations}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"memo_hex=={invoice_id}"),". Record the quantity of the send transaction and the transaction's ",(0,i.kt)("inlineCode",{parentName:"p"},"txid"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the send is confirmed with 2 confirmations (poll ",(0,i.kt)("inlineCode",{parentName:"p"},"get_sends")," again), credit the user\u2019s account balance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Memo transactions are available as of block 489956"))),(0,i.kt)("h2",{id:"handling-withdrawals-single-send"},"Handling Withdrawals (Single Send)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Prime the holding address if its current balance is below 0.0005 BTC.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Send the funds to the user-provided address with ",(0,i.kt)("inlineCode",{parentName:"p"},"create_send")," (Counterparty API)."))),(0,i.kt)("h2",{id:"batching-withdrawals-multi-peer-multi-asset-send"},"Batching Withdrawals (Multi-Peer-Multi-Asset Send)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Prime the holding address if its current balance is below 0.0005 BTC.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Generate first MPMA transaction by making a ",(0,i.kt)("inlineCode",{parentName:"p"},"create_send")," (Counterparty API) call and specify as many assets and recipient addresses as you would like.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sign and Broadcast first MPMA transaction and note ",(0,i.kt)("inlineCode",{parentName:"p"},"txid"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Generate second MPMA transaction by making identical ",(0,i.kt)("inlineCode",{parentName:"p"},"create_send")," (Counterparty API) call as before, except also specify ",(0,i.kt)("inlineCode",{parentName:"p"},"p2sh_pretx_txid")," param and give ",(0,i.kt)("inlineCode",{parentName:"p"},"txid")," of first MPMA transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sign and Broadcast second MPMA transaction"))),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For deposits, wait for at least two confirmations on the send to the desposit address and one confirmation for the send to the holding address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keep the private key for the holding address secret and safe.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keep the bulk of your exchange's funds in cold storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set a maximum XCP and BTC withdrawal amount, both per day and per event.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use a segwit address for memo deposits and MPMA/Batched withdrawals to keep transaction costs minimal."))))}u.isMDXComponent=!0}}]);