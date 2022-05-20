"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2874:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"ckb-core-dev",title:"Tips for CKB development"},p=void 0,s={unversionedId:"essays/ckb-core-dev",id:"essays/ckb-core-dev",title:"Tips for CKB development",description:"Nervos CKB is the layer 1 of Nervos Network, a public/permissionless blockchain, which is an open source project on github. There are some tips for ckb development below, hope it will be useful for you.",source:"@site/docs/essays/ckb-core-dev.md",sourceDirName:"essays",slug:"/essays/ckb-core-dev",permalink:"/docs/essays/ckb-core-dev",tags:[],version:"current",lastUpdatedBy:"Qiwei Yang",lastUpdatedAt:1653011942,formattedLastUpdatedAt:"5/20/2022",frontMatter:{id:"ckb-core-dev",title:"Tips for CKB development"},sidebar:"Essays",previous:{title:"CKB FAQs",permalink:"/docs/essays/faq"},next:{title:"Integrity Check for CKB Release",permalink:"/docs/essays/integrity-check"}},c=[{value:"Molecule",id:"molecule",children:[],level:2},{value:"Well-known Hashes",id:"well-known-hashes",children:[],level:2},{value:"Running Test",id:"running-test",children:[],level:2},{value:"Debug CKB",id:"debug-ckb",children:[{value:"Track Memory Usage in Logs",id:"track-memory-usage-in-logs",children:[],level:3},{value:"Profile Memory",id:"profile-memory",children:[],level:3},{value:"References",id:"references",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb"},"Nervos CKB")," is the layer 1 of Nervos Network, a public/permissionless blockchain, which is an open source project on github. There are some tips for ckb development below, hope it will be useful for you."),(0,l.kt)("h2",{id:"molecule"},"Molecule"),(0,l.kt)("p",null,"We have developed a particular serialization format called ",(0,l.kt)("strong",{parentName:"p"},"Molecule"),".It is recommended to check the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/molecule"},"molecule github repo")," for more details."),(0,l.kt)("h2",{id:"well-known-hashes"},"Well-known Hashes"),(0,l.kt)("p",null,"The command ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb list-hashes")," prints the well-known hashes for current\neffective chain spec."),(0,l.kt)("p",null,"The file ",(0,l.kt)("inlineCode",{parentName:"p"},"docs/hashes.toml")," in ckb release package and source code repository\ncontains the well-known hashes for all the bundled chain specs. The file is\ngenerated by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cargo run list-hashes -b > docs/hashes.toml\n")),(0,l.kt)("h2",{id:"running-test"},"Running Test"),(0,l.kt)("p",null,"Install dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rustup component add rustfmt\nrustup component add clippy\n")),(0,l.kt)("p",null,"Run tests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make ci\n")),(0,l.kt)("p",null,"Run acceptance integration tests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make integration\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"debug-ckb"},"Debug CKB"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: Only support linux system.")),(0,l.kt)("h3",{id:"track-memory-usage-in-logs"},"Track Memory Usage in Logs"),(0,l.kt)("p",null,"Add the follow configuration into ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb.toml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[logger]\nfilter = "error,ckb-memory-tracker=trace"\n\n[memory_tracker]\n# Seconds between checking the process, 0 is disable, default is 0.\ninterval = 600\n')),(0,l.kt)("h3",{id:"profile-memory"},"Profile Memory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Compile ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb")," with feature ",(0,l.kt)("inlineCode",{parentName:"p"},"profiling"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"make build-for-profiling\n")),(0,l.kt)("p",{parentName:"li"},"After compiling, a script named ",(0,l.kt)("inlineCode",{parentName:"p"},"jeprof")," will be generated in ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," direcotry."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'find target/ -name "jeprof"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enable RPC module ",(0,l.kt)("inlineCode",{parentName:"p"},"Debug")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb.toml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\nmodules = ["Debug"]\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dump memory usage to a file via call RPC ",(0,l.kt)("inlineCode",{parentName:"p"},"jemalloc_profiling_dump"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -H \'content-type: application/json\' -d \'{ "id": 2, "jsonrpc": "2.0", "method": "jemalloc_profiling_dump", "params": [] }\' http://localhost:8114\n')),(0,l.kt)("p",{parentName:"li"},"Then, a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-jeprof.$TIMESTAMP.heap")," will be generated in the working directory of the running ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generate a PDF of the call graph."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Required"),": graphviz and ghostscript"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"jeprof --show_bytes --pdf target/debug/ckb ckb-jeprof.$TIMESTAMP.heap > call-graph.pdf\n")))),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jemalloc/jemalloc/wiki/Use-Case%3A-Leak-Checking"},"JEMALLOC: Use Case: Leak Checking")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jemalloc/jemalloc/wiki/Use-Case%3A-Heap-Profiling"},"JEMALLOC: Use Case: Heap Profiling")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/rocksdb/wiki/Memory-usage-in-RocksDB"},"RocksDB: Memory usage in RocksDB"))))}u.isMDXComponent=!0}}]);