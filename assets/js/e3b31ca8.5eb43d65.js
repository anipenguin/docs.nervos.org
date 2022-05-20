"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5258:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>u});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"developer-materials-guide",title:"Developer Materials Guide"},s=void 0,p={unversionedId:"essays/developer-materials-guide",id:"essays/developer-materials-guide",title:"Developer Materials Guide",description:"This guide will help introduce new developers to the essential topics and tools needed to get started.",source:"@site/docs/essays/developer-materials-guide.md",sourceDirName:"essays",slug:"/essays/developer-materials-guide",permalink:"/docs/essays/developer-materials-guide",tags:[],version:"current",lastUpdatedBy:"Qiwei Yang",lastUpdatedAt:1653011942,formattedLastUpdatedAt:"5/20/2022",frontMatter:{id:"developer-materials-guide",title:"Developer Materials Guide"},sidebar:"Essays",previous:{title:"Introduction",permalink:"/docs/essays/introduction"},next:{title:"A Tour of RFCs",permalink:"/docs/essays/rfcs"}},m=[{value:"Section 1: Introduction and Absolute Basics",id:"section-1-introduction-and-absolute-basics",children:[{value:"Recommended Materials",id:"recommended-materials",children:[],level:3},{value:"More In-Depth Materials (Optional)",id:"more-in-depth-materials-optional",children:[],level:3}],level:2},{value:"Section 2: Developer Concepts",id:"section-2-developer-concepts",children:[{value:"Recommended Materials",id:"recommended-materials-1",children:[],level:3},{value:"Available When You Need Them (Optional)",id:"available-when-you-need-them-optional",children:[],level:3}],level:2},{value:"Section 3: Developer Tooling",id:"section-3-developer-tooling",children:[{value:"Recommended Tooling",id:"recommended-tooling",children:[],level:3},{value:"Available When You Need Them (Optional)",id:"available-when-you-need-them-optional-1",children:[],level:3},{value:"Testnet Funds",id:"testnet-funds",children:[],level:3}],level:2},{value:"Section 4: Sample Projects",id:"section-4-sample-projects",children:[{value:"Example Scripts",id:"example-scripts",children:[],level:3},{value:"Example Dapps",id:"example-dapps",children:[],level:3}],level:2},{value:"Section 5: Recommended Setup",id:"section-5-recommended-setup",children:[{value:"Recommended Development Setup",id:"recommended-development-setup",children:[],level:3},{value:"Recommended Development Stack",id:"recommended-development-stack",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will help introduce new developers to the essential topics and tools needed to get started."),(0,o.kt)("h2",{id:"section-1-introduction-and-absolute-basics"},"Section 1: Introduction and Absolute Basics"),(0,o.kt)("p",null,"These materials are for participants who are brand new, or need a refresher on the basics of what makes Nervos a unique and powerful alternative to the existing blockchain smart contract platforms."),(0,o.kt)("h3",{id:"recommended-materials"},"Recommended Materials"),(0,o.kt)("p",null,"We recommend all new developers review these materials to get a high-level conceptual understanding of how Nervos works."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos Docs - Basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3Gl8hNzfigo"},"Nervos YouTube - Intro to Nervos CKB"))),(0,o.kt)("h3",{id:"more-in-depth-materials-optional"},"More In-Depth Materials (Optional)"),(0,o.kt)("p",null,"These materials cover similar topics to the recommended materials, but are much more in-depth. Reading these is optional."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0001-positioning/0001-positioning.md"},"Nervos RFCs - Positioning Paper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md"},"Nervos RFCs - Crypto-Economic Paper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md"},"Nervos RFCs - CKB Whitepaper"))),(0,o.kt)("h2",{id:"section-2-developer-concepts"},"Section 2: Developer Concepts"),(0,o.kt)("p",null,"Learn the unique concepts and design patterns that developers will need to understand to create Dapps on Nervos."),(0,o.kt)("h3",{id:"recommended-materials-1"},"Recommended Materials"),(0,o.kt)("p",null,"These materials are recommended for all developers who want to develop Dapps or Smart Contracts on Nervos."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/reference/introduction"},"Nervos Docs - Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/6nYyYikSZj0"},"Video Lecture: Dapps with CKB Workshop - Lecture 1: Introduction (English)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/iVjccs3z5q0"},"Video Lecture: Dapps with CKB Workshop - Lecture 1: Introduction (Chinese + English Subtitles)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HyYXzEIdF90"},"Nervos YouTube - Programming CKB Part 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Co-rzOhwuHs"},"Nervos YouTube - Programming CKB Part 2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=13w6Wvu9ff0"},"Nervos YouTube - Programming CKB Part 3"))),(0,o.kt)("h3",{id:"available-when-you-need-them-optional"},"Available When You Need Them (Optional)"),(0,o.kt)("p",null,"These materials are much more in-depth, but only relevant for specific topics. We recommend reviewing them only as needed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md"},"Nervos RFCs - VM Syscalls")," - Smart Contract related system calls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md"},"Nervos RFCs - Data Structures")," - Data structures for a Cell, Script, Transaction, and Block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"Nervos RFCs - CKB Address Format")," - How Nervos addresses are encoded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"Nervos RFCs - Transaction Structure")," - How a transaction is structured.")),(0,o.kt)("h2",{id:"section-3-developer-tooling"},"Section 3: Developer Tooling"),(0,o.kt)("p",null,"Learn about the tools that are available for developing on Nervos."),(0,o.kt)("h3",{id:"recommended-tooling"},"Recommended Tooling"),(0,o.kt)("p",null,"These are the recommended tools for developing on Nervos CKB."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/capsule"},"Capsule")," - A framework for developing on-chain smart contracts in Rust and C.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/capsule/wiki"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nervosnetwork.github.io/ckb-std/riscv64imac-unknown-none-elf/doc/ckb_std/index.html"},"CKB-STD Library Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/labs/sudtbycapsule"},"Tutorial: Write an SUDT in Capsule")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=pbnVwVOaJg4"},"Video Lecture: Dapps with CKB workshop - Lecture 2: On-chain Scripts with Capsule (English)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/NcN3NiBuJbo"},"Video Lecture: Dapps with CKB workshop - Lecture 2: On-chain Scripts with Capsule (Chinese + English Subtitles)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/ysUbx4FAKlE"},"Video Tutorial: Understanding the Token Sale Lock Script (English)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Lumos")," - A framework for server side Dapp development.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/labs/lumos-nervosdao"},"Tutorial: Intro to Lumos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/TJ2bnSFUpPQ"},"Video Lecture: Dapps with CKB Workshop - Lecture 3: Dapps with Lumos (Chinese + English Subtitles)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/9U23hrzCAiM"},"Video Lecture: Dapps with CKB Workshop - Lecture 4: Dapp Architecture with Lumos (English)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-Core")," - A framework for client side Dapp wallet support.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.lay2.dev/"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/simplestdapp"},"Demo Project: Simplest Dapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=E2AYuRaeP9Q"},"Video Tutorial: PW-Core Programming Walkthrough (English)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NmMRM4PoE08"},"Video Tutorial: PW-Core Programming Walkthrough (Chinese)"))))),(0,o.kt)("h3",{id:"available-when-you-need-them-optional-1"},"Available When You Need Them (Optional)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.obsidians.io/"},"CKB Studio")," - An development IDE with a built-in dev blockchain and transaction testing tool.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/nervos-ckb-israel/collection-of-ckb-studio-tutorials-9ffd573894"},"Tutorials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=lOxXrVIfT2Y"},"Video Tutorial: How to Use CKB Studio")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/synapse-extension"},"Synapse Web Wallet")," - A Dapp wallet with support for multiple lock types.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/synapse-extension/tree/master/docs"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/simplestdapp"},"Demo Project: Simplest Dapp + Synapse"))))),(0,o.kt)("h3",{id:"testnet-funds"},"Testnet Funds"),(0,o.kt)("p",null,"When building on the Aggron Testnet, free testnet CKB can be obtained from this faucet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Aggron Faucet"))),(0,o.kt)("h2",{id:"section-4-sample-projects"},"Section 4: Sample Projects"),(0,o.kt)("p",null,"View functioning example smart contract scripts and Dapps."),(0,o.kt)("h3",{id:"example-scripts"},"Example Scripts"),(0,o.kt)("p",null,"These are smart contract scripts written in C and Rust. For most developers we recommend building scripts in Rust."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jjyr/my-sudt"},"Simple UDT Type Script (Rust + Capsule)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/labs/sudtbycapsule"},"Tutorial: Writing an SUDT in Capsule")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/simple_udt.c"},"Simple UDT Type Script (C)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/token-sale"},"Token Sale Lock Script (Rust + Capsule)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/token-sale/blob/master/README.md"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/ysUbx4FAKlE"},"Video Tutorial: Understanding the Token Sale Lock Script (English)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-anyone-can-pay/blob/master/c/anyone_can_pay.c"},"Anyone Can Pay Lock Script (C)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/open_transaction.c"},"Open Transaction Lock Script (C)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://talk.nervos.org/t/open-tx-protocol-brainstorm-1-otx-in-general/4010"},"Nervos Talk - Open Transaction Four Part"),(0,o.kt)("a",{parentName:"li",href:"https://talk.nervos.org/t/open-tx-protocol-brainstorm-1-otx-in-general/4010"},"Brainstorm")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/nervos-ckb-nft"},"Multi-Token Extensible NFT Type Script (Rust + Capsule)"))),(0,o.kt)("h3",{id:"example-dapps"},"Example Dapps"),(0,o.kt)("p",null,"These are fully functioning Dapps which were built using our recommended tooling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tspoff/hello-lumos"},"Hello Lumos Dapp Template")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tspoff/token-playground"},"Token Playground (Lumos + PW-SDK)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/simplestdapp"},"Simplest Dapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rebase-network/simplestdapp"},"Simplest Dapp + Synapse"))),(0,o.kt)("h2",{id:"section-5-recommended-setup"},"Section 5: Recommended Setup"),(0,o.kt)("p",null,"Recommendations for setting up your development environment and which technologies to build your application with."),(0,o.kt)("h3",{id:"recommended-development-setup"},"Recommended Development Setup"),(0,o.kt)("p",null,"These are the minimum software recommendations for any developer building on Nervos CKB."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS: MacOS, Ubuntu Linux, or Windows 10 + WSL2 (Ubuntu)"),(0,o.kt)("li",{parentName:"ul"},"IDE: ",(0,o.kt)("a",{parentName:"li",href:"https://www.obsidians.io/"},"CKB Studio")," or your favorite IDE! \ud83d\ude01"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/devchain"},"CKB Development Blockchain")," - For testing smart contracts and Dapps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," - For smart contract development using Capsule."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"NPM")," or ",(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/"},"Yarn")," - For Dapp development using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Lumos")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/neuron/releases"},"Neuron Wallet")," or ",(0,o.kt)("a",{parentName:"li",href:"https://ckb.pw/"},"Portal Wallet")," - For managing Mainnet funds.")),(0,o.kt)("h3",{id:"recommended-development-stack"},"Recommended Development Stack"),(0,o.kt)("p",null,"These are the recommended software stacks for any team building on Nervos CKB. These selections are based on current industry trends and the tooling available today."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dapp Front-end: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React.js")," + ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")),(0,o.kt)("li",{parentName:"ul"},"Dapp Back-end: ",(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/starter/installing.html"},"Express.js +"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"Lumos")),(0,o.kt)("li",{parentName:"ul"},"Dapp Wallet: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core"},"PW-SDK")," + ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")),(0,o.kt)("li",{parentName:"ul"},"Smart Contract Scripts: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/capsule"},"Capsule"))))}u.isMDXComponent=!0}}]);