"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3771],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return o?r.createElement(f,s(s({ref:t},c),{},{components:o})):r.createElement(f,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},269:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],l={id:"tools",title:"Tools"},i=void 0,u={unversionedId:"basics/tools",id:"basics/tools",title:"Tools",description:"Nervos Community is a cohesive community that embraces the contributions of every member. We welcome everyone to provide passion, innovation and diversity of ideas to improve Nervos. If you are new here, there are three tools Neuron Wallet, CKB-Explorer and Testnet Faucet, hope it will be helpful for you.",source:"@site/docs/basics/tools.md",sourceDirName:"basics",slug:"/basics/tools",permalink:"/docs/basics/tools",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/basics/tools.md",tags:[],version:"current",frontMatter:{id:"tools",title:"Tools"},sidebar:"Basics",previous:{title:"Bitpie",permalink:"/docs/basics/guides/crypto wallets/bitpie"},next:{title:"Community Nodes",permalink:"/docs/basics/communitynodes"}},c={},p=[{value:"Neuron Wallet",id:"neuron-wallet",level:2},{value:"CKB-Explorer",id:"ckb-explorer",level:2},{value:"Nervos Pudge Faucet",id:"nervos-pudge-faucet",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nervos Community is a cohesive community that embraces the contributions of every member. We welcome everyone to provide passion, innovation and diversity of ideas to improve Nervos. If you are new here, there are three tools ",(0,a.kt)("strong",{parentName:"p"},"Neuron Wallet"),", ",(0,a.kt)("strong",{parentName:"p"},"CKB-Explorer")," and ",(0,a.kt)("strong",{parentName:"p"},"Testnet Faucet"),", hope it will be helpful for you."),(0,a.kt)("h2",{id:"neuron-wallet"},"Neuron Wallet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron/releases"},"Download")),(0,a.kt)("p",null,"A blockchain wallet is very important in the blockchain ecosystem, it is a user\u2019s gateway to the blockchain world."),(0,a.kt)("p",null,"Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast transactions on your behalf. The functionality of the Neuron Wallet is focused on transfer of CKBytes and deposit/withdrawal functions of the Nervos DAO."),(0,a.kt)("p",null,"Now Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation, as you open the Neuron Wallet, the bundled Mainnet node will run."),(0,a.kt)("p",null,"You can also run a CKB node yourself and launch Neuron wallet, then Neuron will NOT start the bundled node, but connects to your node instead. You may refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/guides/crypto%20wallets/neuron/"},"Neuron Wallet Guide")," for more details."),(0,a.kt)("h2",{id:"ckb-explorer"},"CKB-Explorer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-explorer"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Mirana Mainnet")," | ",(0,a.kt)("a",{parentName:"p",href:"https://pudge.explorer.nervos.org/"},"Pudge Testnet")),(0,a.kt)("p",null,"CKB-Explorer allows you to explore addresses, tokens, blocks, hashrate, Nervos DAO info and all other activities taking place on Nervos CKB."),(0,a.kt)("p",null,"Please note that CKB-Explorer is not a wallet service provider. We do not store your private keys and we have no control over the transactions that take place over the CKB Network."),(0,a.kt)("h2",{id:"nervos-pudge-faucet"},"Nervos Pudge Faucet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaojunda/ckb-testnet-faucet"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Link")),(0,a.kt)("p",null,"Nervos Pudge Faucet is where you can claim free ",(0,a.kt)("strong",{parentName:"p"},"Testnet CKBytes")," to use while developing and testing. You may claim 50,000 CKB from the faucet once every 24 hours on Testnet Pudge."))}h.isMDXComponent=!0}}]);