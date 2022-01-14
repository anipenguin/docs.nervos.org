"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2093:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>p});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"get-ckb",title:"Get CKB Binary"},s=void 0,u={unversionedId:"basics/guides/get-ckb",id:"basics/guides/get-ckb",title:"Get CKB Binary",description:"CKB binary is used to run CKB node or CKB dev blockchain for development,testing and so on.You can get CKB binary by two ways: build from source or download from releases.",source:"@site/docs/basics/guides/get-ckb.md",sourceDirName:"basics/guides",slug:"/basics/guides/get-ckb",permalink:"/docs/basics/guides/get-ckb",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1642128086,formattedLastUpdatedAt:"1/14/2022",frontMatter:{id:"get-ckb",title:"Get CKB Binary"},sidebar:"Basics",previous:{title:"Run a CKB Mainnet Node and Testnet Node with Docker",permalink:"/docs/basics/guides/run-ckb-with-docker"},next:{title:"Get CKB Binary on Windows",permalink:"/docs/basics/guides/ckb-on-windows"}},c=[{value:"Build from Source",id:"build-from-source",children:[{value:"Install Build Dependencies",id:"install-build-dependencies",children:[],level:3},{value:"Add Environment Variables",id:"add-environment-variables",children:[],level:3},{value:"Build from source",id:"build-from-source-1",children:[],level:3}],level:2},{value:"Download from Releases",id:"download-from-releases",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"CKB binary is used to run CKB node or CKB dev blockchain for development,testing and so on.You can get CKB binary by two ways: build from source or download from releases. "),(0,l.kt)("p",null,"We have setup CI to ensure CKB works in following systems, they are also the recommended system to run CKB."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Arch"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macOS"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Windows"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")))),(0,l.kt)("p",null,"CKB should also work on any modern Linux distributions. However, we limit our\nenergy to focus on the support of following systems:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Arch"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Debian Stretch"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Arch Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CentOS 7"),(0,l.kt)("td",{parentName:"tr",align:null},"x64")))),(0,l.kt)("p",null,"You can also ",(0,l.kt)("a",{parentName:"p",href:"/docs/basics/guides/run-ckb-with-docker"},"use docker")," if your operating system is\nnot properly supported by CKB for now."),(0,l.kt)("h2",{id:"build-from-source"},"Build from Source"),(0,l.kt)("p",null,"Tips: The details about how to build CKB on Windows can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/basics/guides/ckb-on-windows"},"Build CKB on Windows"),"."),(0,l.kt)("h3",{id:"install-build-dependencies"},"Install Build Dependencies"),(0,l.kt)("p",null,"CKB requires Rust to build. We recommend to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.rustup.rs/"},"rustup")," to manage Rust versions."),(0,l.kt)("p",null,"The required Rust version is saved in the file ",(0,l.kt)("inlineCode",{parentName:"p"},"rust-toolchain"),". If rustup is\navailable, it will pick the right version automatically."),(0,l.kt)("p",null,"CKB also requires C++ toolchain and clang. It's recommended to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"use GCC 7.3.1 or newer as the default C/C++ toolchain,"),(0,l.kt)("li",{parentName:"ul"},"and install LLVM 5.0.1 or newer.")),(0,l.kt)("p",null,"You can use the following commands to install the dependencies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ubuntu and Debian")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install -y git gcc libc6-dev pkg-config libssl-dev libclang-dev clang\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Arch Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pacman -Sy git gcc pkgconf clang\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install autoconf libtool\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CentOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y centos-release-scl\nsudo yum install -y git make gcc-c++ openssl-devel devtoolset-7 llvm-toolset-7\n")),(0,l.kt)("p",null,"Start a shell enabling gcc-7 and clang"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"scl enable devtoolset-7 llvm-toolset-7 bash\n")),(0,l.kt)("p",null,"Remember to run following commands in this console."),(0,l.kt)("h3",{id:"add-environment-variables"},"Add Environment Variables"),(0,l.kt)("p",null,"If your OS contains pre-compiled ",(0,l.kt)("inlineCode",{parentName:"p"},"snappy")," library, you may setup\n",(0,l.kt)("inlineCode",{parentName:"p"},"SNAPPY_LIB_DIR")," environment variable to point to a directory with this\nlibrary. This will reduce compile time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export SNAPPY_LIB_DIR=/usr/local/lib\n")),(0,l.kt)("h3",{id:"build-from-source-1"},"Build from source"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb"},"Github repo")," is regularly built and tested, which is always the latest\nreleased version. The default checked out branch ",(0,l.kt)("inlineCode",{parentName:"p"},"develop")," is the latest\nversion in active development."),(0,l.kt)("p",null,"It is recommended to build from the ",(0,l.kt)("inlineCode",{parentName:"p"},"master"),"branch,\nor a historical version from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"GitHub Releases"),"."),(0,l.kt)("p",null,"Also you can choose to clone the code via git:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# get ckb source code\ngit clone https://github.com/nervosnetwork/ckb.git\ncd ckb\ngit checkout master\n")),(0,l.kt)("p",null,"You can also switch to a historical version and build, for example, check out\nv0.43.2."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b branch-v0.43.2 v0.43.2\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"make prod")," inside the source code directory. It will build the executable\n",(0,l.kt)("inlineCode",{parentName:"p"},"target/release/ckb"),". Please add the directory to ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," or copy/link the file\ninto a directory already in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="$(pwd)/target/release:$PATH"\n# or\n# ln -snf "$(pwd)/target/release/ckb" /usr/local/bin/ckb\n')),(0,l.kt)("h2",{id:"download-from-releases"},"Download from Releases"),(0,l.kt)("p",null,"We publish binaries for each release via ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"Github Releases"),". You can download the package directly."),(0,l.kt)("p",null,"If you are CentOS user, please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"x86_64-unknown-centos-gnu")," package, which also\nrequires OpenSSL 1.0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install openssl-libs\n")))}p.isMDXComponent=!0}}]);