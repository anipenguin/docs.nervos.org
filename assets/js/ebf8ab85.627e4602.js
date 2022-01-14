"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7148:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"ckb-on-windows",title:"Get CKB Binary on Windows"},i=void 0,p={unversionedId:"basics/guides/ckb-on-windows",id:"basics/guides/ckb-on-windows",title:"Get CKB Binary on Windows",description:"Please note that, All commands listed below should be used through PowerShell.",source:"@site/docs/basics/guides/ckb-on-windows.md",sourceDirName:"basics/guides",slug:"/basics/guides/ckb-on-windows",permalink:"/docs/basics/guides/ckb-on-windows",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1642128086,formattedLastUpdatedAt:"1/14/2022",frontMatter:{id:"ckb-on-windows",title:"Get CKB Binary on Windows"},sidebar:"Basics",previous:{title:"Get CKB Binary",permalink:"/docs/basics/guides/get-ckb"},next:{title:"Tools",permalink:"/docs/basics/tools"}},c=[{value:"Build from Source",id:"build-from-source",children:[{value:"Setup the Build Environment",id:"setup-the-build-environment",children:[{value:"Install Visual Studio 2019",id:"install-visual-studio-2019",children:[],level:4},{value:"Install Tools with Scoop",id:"install-tools-with-scoop",children:[],level:4}],level:3},{value:"Build CKB on Windows 10",id:"build-ckb-on-windows-10",children:[],level:3}],level:2},{value:"Download from Releases",id:"download-from-releases",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that"),", All commands listed below should be used through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/powershell/scripting/windows-powershell/install/installing-windows-powershell?view=powershell-7"},"PowerShell"),"."),(0,r.kt)("h2",{id:"build-from-source"},"Build from Source"),(0,r.kt)("h3",{id:"setup-the-build-environment"},"Setup the Build Environment"),(0,r.kt)("h4",{id:"install-visual-studio-2019"},"Install Visual Studio 2019"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/downloads/"},"Visual Studio 2019"),'\nwith the workload: "Desktop development with C++".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minimum requirements:"),' You can just select two individual components:\n"MSVC v142 - VS 2019 C++ x64/x86 build tools (vXX.XX)" and "Windows 10 SDK (10.0.X.0)".'),(0,r.kt)("h4",{id:"install-tools-with-scoop"},"Install Tools with ",(0,r.kt)("a",{parentName:"h4",href:"https://scoop.sh/"},"Scoop")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"llvm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yasm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," via ",(0,r.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"scoop install git\nscoop install llvm\nscoop install yasm\nscoop install rustup\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install dependencies."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukesampson/scoop-extras"},'"extras" bucket')," for ",(0,r.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"scoop bucket add extras\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yasm")," requires Microsoft Visual C++ 2010 runtime Libraries."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"scoop install vcredist2010\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"Rust"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"rustup set default-host x86_64-pc-windows-msvc\n")))),(0,r.kt)("h3",{id:"build-ckb-on-windows-10"},"Build CKB on Windows 10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout the source code of CKB."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"git clone https://github.com/nervosnetwork/ckb\ncd ckb\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build CKB."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-posh"},"devtools/windows/make prod\n")))),(0,r.kt)("h2",{id:"download-from-releases"},"Download from Releases"),(0,r.kt)("p",null,"We publish binaries for each release via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"Github Releases"),". You can download the package directly. They requires ",(0,r.kt)("em",{parentName:"p"},"The Visual C++ Redistributable Packages"),", which can be downloaded under section ",(0,r.kt)("em",{parentName:"p"},"Other Tools and Frameworks")," ",(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/downloads/"},"here")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"},"here"),"."))}u.isMDXComponent=!0}}]);