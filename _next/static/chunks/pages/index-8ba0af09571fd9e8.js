(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{9536:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2333)}])},2333:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return nu}});var i=t(4246),r=t(7378),a=t(9746),s=t(6677),o=t(2238),l=t(4366),d=t(149),c=t(624),p=t(1251),h=t.n(p);function u(e){let{className:n,...t}=e;return(0,i.jsx)(d.x,{component:"span",className:(0,c.Z)(h().code,n),...t})}var m=t(1996);function x(e){let{errorOf:n}=e;return(0,i.jsxs)(d.x,{children:[(0,i.jsxs)(d.x,{span:!0,c:"red",children:["Error loading component ",n," data."," "]}),"If you see this message please let us know by"," ",(0,i.jsx)(m.e,{href:"https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml",target:"_blank",children:"opening an issue on GitHub"}),"."]})}function f(e){let{component:n,query:t,data:r}=e;if(!r[n])return(0,i.jsx)(x,{errorOf:"props"});let a=Object.keys(r[n].props).filter(e=>r[n].props[e].name.toLowerCase().includes(t.toLowerCase().trim())).map(e=>{let a=r[n].props[e];return(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsxs)(o.i.Td,{style:{whiteSpace:"nowrap"},children:[(0,i.jsx)(l.y,{highlight:t,component:"span",fz:"sm",children:a.name}),a.required&&(0,i.jsxs)(d.x,{component:"sup",c:"red",fz:"xs",children:[" ","*"]})]}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(u,{children:a.type.name})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(d.x,{fz:"sm",dangerouslySetInnerHTML:{__html:a.description}})})]},e)});return 0===a.length?(0,i.jsx)(d.x,{c:"dimmed",mb:"xl",fz:"sm",children:"Nothing found"}):(0,i.jsx)(o.i.ScrollContainer,{minWidth:800,children:(0,i.jsxs)(o.i,{layout:"fixed",children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:210,children:"Name"}),(0,i.jsx)(o.i.Th,{w:310,children:"Type"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:a})]})})}var j=t(4046),g=t(2033),b=t(7854);function v(e){let{component:n,componentPrefix:t}=e;return t?t===n?n:"".concat(t,".").concat(n.replace(t,"")):n}var _=t(5628),y=t.n(_);function w(e){let{components:n,componentPrefix:t,data:a}=e,[s,o]=(0,r.useState)(""),l=n.map(e=>(0,i.jsxs)("div",{className:y().section,children:[(0,i.jsxs)(j.D,{order:2,className:y().title,children:[v({component:e,componentPrefix:t})," component props"]}),(0,i.jsx)(f,{component:e,query:s,data:a})]},e));return(0,i.jsxs)("div",{className:y().root,children:[(0,i.jsx)(g.o,{className:y().search,value:s,onChange:e=>o(e.currentTarget.value),leftSection:(0,i.jsx)(b.Z,{className:y().searchIcon}),placeholder:"Search props",radius:"md",size:"lg",autoFocus:!0}),l]})}var T=t(1799),F=t(4485),k=t(603),C=t(7261),N=t(1598),S=t.n(N);function z(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function B(e){let{withTabs:n}=e,[t,a]=(0,r.useState)(0),[o,l]=(0,r.useState)([]),c=(0,r.useRef)([]),p=(0,s.useRouter)(),h=o.filter(e=>e.depth>1),u=()=>{a(z(c.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,r.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let i=e[t];i.id&&n.push({depth:parseInt(i.getAttribute("data-order"),10),content:i.getAttribute("data-heading")||"",id:i.id,getNode:()=>document.getElementById(i.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return c.current=e,l(e),a(z(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),0===h.length)return null;let m=h.map((e,n)=>(0,i.jsx)(d.x,{component:"a",fz:"sm",className:S().link,mod:{active:t===n},href:"#".concat(e.id),__vars:{"--toc-link-offset":"".concat(e.depth-1)},onClick:n=>{n.preventDefault(),p.replace("".concat(p.pathname,"#").concat(e.id))},children:e.content},e.id));return(0,i.jsx)(T.x,{component:"nav",mod:{"with-tabs":n},className:S().wrapper,children:(0,i.jsx)("div",{className:S().inner,children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:S().header,children:[(0,i.jsx)(C.Z,{style:{width:(0,F.h)(20),height:(0,F.h)(20)},stroke:1.5}),(0,i.jsx)(d.x,{className:S().title,children:"Table of contents"})]}),(0,i.jsx)(k.x.Autosize,{mah:"calc(100vh - ".concat((0,F.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,i.jsx)("div",{className:S().items,children:m})})]})})})}var P=t(2752),D=t.n(P);function E(e){let{data:n,component:t,fixedLayout:r=!0,...a}=e,s=Object.keys(n.selectors).map(e=>(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:e}),(0,i.jsx)(o.i.Td,{children:(0,i.jsxs)(u,{children:[".mantine-",t,"-",e]})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(d.x,{fz:"sm",children:n.selectors[e]})})]},e));return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:r?"fixed":void 0,...a,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:r?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:r?310:void 0,children:"Static selector"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:s})]})})}function I(e){let{data:n,fixedLayout:t=!0,...r}=e,a=Object.keys(n.vars).reduce((e,t)=>(Object.keys(n.vars[t]).forEach((r,a)=>{e.push((0,i.jsxs)(o.i.Tr,{children:[0===a&&(0,i.jsx)(o.i.Td,{rowSpan:Object.keys(n.vars[t]).length,children:t}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(u,{children:r})}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(d.x,{fz:"sm",children:n.vars[t][r]})})]},"".concat(t,"-").concat(r)))}),e),[]);return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:t?"fixed":void 0,...r,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:t?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:t?310:void 0,children:"Variable"}),(0,i.jsx)(o.i.Th,{children:"Description"})]})}),(0,i.jsx)(o.i.Tbody,{children:a})]})})}function A(e){var n,t,r;let{data:a,fixedLayout:s=!0,...l}=e,c=null===(n=a.modifiers)||void 0===n?void 0:n.some(e=>!!e.condition),p=null===(t=a.modifiers)||void 0===t?void 0:t.some(e=>!!e.value),h=(null===(r=a.modifiers)||void 0===r?void 0:r.map((e,n)=>(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Td,{children:Array.isArray(e.selector)?e.selector.join(", "):e.selector}),(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(u,{children:e.modifier})}),c&&(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(d.x,{fz:"sm",children:e.condition||"–"})}),p&&(0,i.jsx)(o.i.Td,{children:(0,i.jsx)(d.x,{fz:"sm",children:e.value||"–"})})]},n)))||[];return(0,i.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,i.jsxs)(o.i,{layout:s?"fixed":void 0,...l,children:[(0,i.jsx)(o.i.Thead,{children:(0,i.jsxs)(o.i.Tr,{children:[(0,i.jsx)(o.i.Th,{w:s?210:void 0,children:"Selector"}),(0,i.jsx)(o.i.Th,{w:s?310:void 0,children:"Attribute"}),c&&(0,i.jsx)(o.i.Th,{children:"Condition"}),p&&(0,i.jsx)(o.i.Th,{children:"Value"})]})}),(0,i.jsx)(o.i.Tbody,{children:h})]})})}var q=t(2118),W=t.n(q);function M(e){let{component:n,componentPrefix:t,data:r}=e;if(!r)return(0,i.jsx)(x,{errorOf:"Styles API"});let a=v({component:n,componentPrefix:t});return(0,i.jsxs)("div",{className:W().root,children:[(0,i.jsxs)("div",{className:W().section,children:[(0,i.jsxs)(j.D,{order:2,className:W().title,children:[a," selectors"]}),(0,i.jsx)(E,{component:n,data:r})]}),Object.keys(r.vars).length>0&&(0,i.jsxs)("div",{className:W().section,children:[(0,i.jsxs)(j.D,{order:2,className:W().title,children:[a," CSS variables"]}),(0,i.jsx)(I,{data:r})]}),Array.isArray(r.modifiers)&&r.modifiers.length>0&&(0,i.jsxs)("div",{className:W().section,children:[(0,i.jsxs)(j.D,{order:2,className:W().title,children:[a," data attributes"]}),(0,i.jsx)(A,{data:r})]})]})}var L=t(8970),O=t(531),V=t(360),G=t(1363),H=t(4675),Z=t(7040),U=t(103),X=t(7923),R=t(6239),Y=t.n(R);function J(e){let{className:n,...t}=e,r=(0,Z.rZ)();return(0,i.jsx)(U.V,{className:(0,c.Z)(Y().root,n),icon:(0,i.jsx)(H.Z,{className:Y().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,X.m)(r.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,X.m)(r.colors.blue[4],.2)},...t})}var K=t(6938),$=t.n(K);function Q(e){let{id:n,children:t,order:r=2,...a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:n,"data-heading":t,"data-order":r,className:$().titleOffset}),(0,i.jsx)(j.D,{order:r,className:$().title,...a,children:(0,i.jsx)("a",{className:(0,c.Z)($().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let ee=e=>n=>(0,i.jsx)(Q,{order:e,...n});function en(e){let{children:n}=e;return(0,i.jsx)(G.P,{className:$().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function et(e){return(0,i.jsx)("p",{className:$().paragraph,...e})}function ei(e){return(0,i.jsx)("ul",{className:$().ul,...e})}function er(e){return(0,i.jsx)("li",{className:$().li,...e})}function ea(e){let{href:n,...t}=e;return(0,i.jsx)(m.e,{className:$().link,href:n,...t})}function es(e){return{img:O.E,ul:ei,li:er,p:et,a:ea,blockquote:J,code:L.E,h1:ee(1),h2:ee(2),h3:ee(3),h4:ee(4),h5:ee(5),h6:ee(6),pre:en,Demo:V.B,...e}}function eo(e){let{components:n,data:t,componentPrefix:r}=e,a=n.map(e=>(0,i.jsx)("div",{className:W().group,children:(0,i.jsx)(M,{component:e,componentPrefix:r,data:t[e]})},e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:W().groupsHeader,children:[(0,i.jsx)(Q,{style:{marginTop:0},children:"Styles API"}),(0,i.jsxs)(et,{style:{marginTop:0},children:[(0,i.jsx)(L.E,{children:n[0]})," component supports"," ",(0,i.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"Styles API"}),". With Styles API, you can customize styles of any inner element. Follow"," ",(0,i.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"the documentation"})," ","to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles."]})]}),a]})}function el(e){let{children:n,docgen:t,componentsProps:o,componentsStyles:l,stylesApiData:d,componentPrefix:c}=e,p=(0,s.useRouter)(),[h,u]=(0,r.useState)("docs"),m=Array.isArray(o),x=Array.isArray(l);return((0,r.useEffect)(()=>{u(window.location.search.replace("?t=","")||"docs")},[]),m||x)?(0,i.jsxs)(a.m,{variant:"outline",value:h,classNames:{root:D().root,list:D().tabsList,tab:D().tab},keepMounted:!1,radius:"md",onChange:e=>{p.replace("docs"===e?p.pathname:"".concat(p.pathname,"?t=").concat(e)),u(e)},children:[(0,i.jsx)("div",{className:D().tabsWrapper,children:(0,i.jsxs)(a.m.List,{children:[(0,i.jsx)(a.m.Tab,{value:"docs",children:"Documentation"}),m&&(0,i.jsx)(a.m.Tab,{value:"props",children:"Props"}),x&&(0,i.jsx)(a.m.Tab,{value:"styles-api",children:"Styles API"})]})}),(0,i.jsx)(a.m.Panel,{value:"docs",children:(0,i.jsxs)("div",{className:D().tabContent,"data-main":!0,children:[(0,i.jsx)("div",{className:D().main,id:"mdx",children:n}),(0,i.jsx)("div",{className:D().tableOfContents,children:(0,i.jsx)(B,{withTabs:!0})})]})}),(0,i.jsx)(a.m.Panel,{value:"props",children:(0,i.jsx)("div",{className:D().tabContent,"data-secondary":!0,children:(0,i.jsx)(w,{components:o,data:t})})}),(0,i.jsx)(a.m.Panel,{value:"styles-api",children:(0,i.jsx)("div",{className:D().tabContent,"data-secondary":!0,children:d&&(0,i.jsx)(eo,{data:d,components:l,componentPrefix:c})})})]}):null}var ed=t(7653),ec=t(1864),ep=t(2972),eh=t(739),eu=t(1925),em=t(9258),ex=t(3266),ef=t.n(ex);function ej(e){let{label:n,icon:t,children:r,link:a}=e,s=a?(0,i.jsxs)("a",{href:a,target:"_blank",className:ef().body,rel:"noreferrer",children:[(0,i.jsx)("div",{className:ef().icon,children:t}),(0,i.jsx)("div",{className:ef().content,children:r})]}):(0,i.jsxs)("div",{className:ef().body,children:[(0,i.jsx)("div",{className:ef().icon,children:t}),(0,i.jsx)("div",{className:ef().content,children:r})]});return(0,i.jsxs)("div",{className:ef().root,children:[(0,i.jsx)("div",{className:ef().label,children:n}),s]})}var eg=t(4128),eb=t.n(eg);function ev(e){let{data:n}=e;return(0,i.jsx)("header",{className:eb().root,children:(0,i.jsxs)(ed.W,{size:"lg",children:[(0,i.jsx)(j.D,{className:eb().title,children:n.packageName}),(0,i.jsx)(d.x,{className:eb().description,children:n.packageDescription}),(0,i.jsxs)("div",{className:eb().links,children:[(0,i.jsx)(ej,{label:"Source",icon:(0,i.jsx)(ec.E,{size:16}),link:n.repositoryUrl,children:"View source code"}),(0,i.jsx)(ej,{label:"Package",icon:(0,i.jsx)(ep._,{size:16}),link:"https://npmjs.com/package/".concat(n.packageName),children:n.packageName}),(0,i.jsx)(ej,{label:"Docs",icon:(0,i.jsx)(eh.Z,{size:18,stroke:1.5}),link:n.mdxFileUrl,children:"Edit this page"}),(0,i.jsxs)(ej,{label:"Built by",icon:(0,i.jsx)(eu.Z,{size:18,stroke:1.5}),link:"https://github.com/".concat(n.author.githubUsername),children:[n.author.name," ",(0,i.jsxs)(d.x,{span:!0,c:"dimmed",inherit:!0,children:["(@",n.author.githubUsername,")"]})]}),(0,i.jsx)(ej,{label:"License",icon:(0,i.jsx)(em.Z,{size:18,stroke:1.5}),link:n.licenseUrl,children:"MIT"})]})]})})}var e_=t(633),ey=t(805),ew=t(2153),eT=t(8323),eF=t(1487),ek=t(2905),eC=t(7292),eN=t(2888),eS=t(5966);let ez={packageName:"@gfazioli/mantine-flip",packageDescription:"A Mantine component that flips the content of the component when hovered over.",mdxFileUrl:"https://github.com/gfazioli/mantine-flip/blob/master/docs/pages/index.mdx",repositoryUrl:"https://github.com/gfazioli/mantine-flip",licenseUrl:"https://github.com/gfazioli/mantine-flip/blob/master/LICENSE",author:{name:"Giovambattista Fazioli",githubUsername:"gfazioli"}};var eB=t(186),eP=t.n(eB);function eD(e){let{children:n}=e,{toggleColorScheme:t}=(0,ey.X)();return(0,e_.A)([["mod + J",t]]),(0,i.jsxs)(ew.V,{header:{height:60},children:[(0,i.jsx)(ew.V.Header,{className:eT.Z.classNames.zeroRight,children:(0,i.jsxs)(ed.W,{size:"lg",px:"md",className:eP().inner,children:[(0,i.jsx)("a",{href:"https://mantine.dev/",target:"_blank",className:(0,c.Z)("mantine-focus-auto",eP().logo),rel:"noreferrer",children:(0,i.jsx)(ek.D,{size:30})}),(0,i.jsx)(eC.q,{visibleFrom:"sm",githubLink:ez.repositoryUrl,withDirectionToggle:!1,withSearch:!1,discordLink:eS.$.discordLink}),(0,i.jsx)(eF.Z,{hiddenFrom:"sm",children:(0,i.jsx)(eN.M,{})})]})}),(0,i.jsx)(ew.V.Main,{children:(0,i.jsx)("div",{className:eP().main,children:n})})]})}var eE=JSON.parse('{"Flip":{"props":{"defaultFlipped":{"description":"Uncontrolled flip initial opened state","name":"defaultFlipped","required":false,"type":{"name":"boolean"}},"direction":{"description":"Flip direction to show the front and back side. Default <code>horizontal</code>","name":"direction","required":false,"type":{"name":"FlipDirection","raw":"FlipDirection","value":[{"value":"\\"horizontal\\""},{"value":"\\"vertical\\""}]}},"directionFlipIn":{"description":"Flip direction to show the back side. Default <code>negative</code>","name":"directionFlipIn","required":false,"type":{"name":"FlipIn","raw":"FlipIn","value":[{"value":"\\"positive\\""},{"value":"\\"negative\\""}]}},"directionFlipOut":{"description":"Flip direction to hide the back side. Default <code>positive</code>","name":"directionFlipOut","required":false,"type":{"name":"FlipIn","raw":"FlipIn","value":[{"value":"\\"positive\\""},{"value":"\\"negative\\""}]}},"duration":{"description":"Flip animation duration in seconds. Default <code>.8</code>","name":"duration","required":false,"type":{"name":"number"}},"easing":{"description":"Flip animation timing function. Default <code>ease-in-out</code>","name":"easing","required":false,"type":{"name":"TransitionTimingFunction"}},"flipped":{"description":"Controlled flip opened state","name":"flipped","required":false,"type":{"name":"boolean"}},"onBack":{"description":"Called when Flip is shown back side","name":"onBack","required":false,"type":{"name":"() => void"}},"onChange":{"description":"Called when flip flipped state changes","name":"onChange","required":false,"type":{"name":"(flipped: boolean) => void"}},"onFront":{"description":"Called when Flip is shown front side","name":"onFront","required":false,"type":{"name":"() => void"}},"perspective":{"description":"Perspective value for flip animation. Default <code>1000px</code>","name":"perspective","required":false,"type":{"name":"string"}}}}}'),eI=t(8395),eA=t(3276),eq=t(8646),eW=t(1555),eM=t.n(eW);function eL(e){let{packages:n,dev:t}=e,[r,a]=(0,eI.I)({key:"script-tab",defaultValue:0});return(0,i.jsx)(eA.Q,{classNames:{root:eM().root},activeTab:r,onTabChange:a,code:[{fileName:"yarn",code:"yarn add ".concat(t?"--dev ":"").concat(n),language:"bash",icon:(0,i.jsx)(eq.z,{className:eM().icon,size:16})},{fileName:"npm",code:"npm install ".concat(t?"--save-dev ":"").concat(n),language:"bash",icon:(0,i.jsx)(ep._,{className:eM().icon,size:16})}]})}var eO=t(6415),eV=t(5427),eG=t(7226),eH=t(863),eZ=t(5006),eU=t(6145),eX=t(673);let[eR,eY]=(0,eX.R)("Flip component was not found in the tree");var eJ={root:"me-51f1fe22","flip-inner":"me-ae362a36","flip-content":"me-bdaa9859"},eK=t(495),e$=t(2453);let eQ={refProp:"ref"},e0=(0,r.forwardRef)((e,n)=>{let{children:t,refProp:i,...a}=(0,eG.w)("MenuTarget",eQ,e);if(!(0,eK.k)(t))throw Error("Flip.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let s=eY(),o=(0,e$.x)(t.props.onClick,()=>s.toggleFlip());return r.createElement("div",{ref:n,...a},(0,r.cloneElement)(t,{onClick:o,"data-flipped":!!s.flipped||void 0}))});e0.displayName="@mantine/core/FlipTarget";let e1={direction:"horizontal",directionFlipIn:"negative",directionFlipOut:"positive"},e2=(0,eO.Z)((e,{perspective:n,easing:t,duration:i})=>({root:{"--flip-perspective":void 0===n?"1000px":n,"--flip-transition-duration":void 0===i?".8s":`${i}s`,"--flip-transition-timing-function":void 0===t?"ease-in-out":t}})),e3=(0,eV.b)((e,n)=>{let t=(0,eG.w)("Flip",e1,e),{perspective:i,duration:a,easing:s,classNames:o,style:l,styles:d,unstyled:c,vars:p,children:h,className:u,flipped:m,defaultFlipped:x,direction:f,directionFlipIn:j,directionFlipOut:g,onChange:b,onBack:v,onFront:_,...y}=t,w=(0,r.useRef)(null),[F,k]=(0,r.useState)(x?-180:0),[C,N]=(0,eZ.C)({value:m,defaultValue:x,finalValue:!1,onChange:b}),S=(0,eH.y)({name:"Flip",props:t,classes:eJ,className:u,style:l,classNames:o,styles:d,unstyled:c,vars:p,varsResolver:e2});(0,eU.l)(()=>{k(0)},[j,g,f]),(0,eU.l)(()=>{"negative"===j&&"positive"===g&&k(e=>e?e+180:-180),"negative"===j&&"negative"===g&&k(e=>e-180),"positive"===j&&"negative"===g&&k(e=>e?e-180:180),"positive"===j&&"positive"===g&&k(e=>e+180)},[C]);let z=r.Children.toArray(h);if(2!==z.length)throw Error("Flip component must have exactly two children");let B=z[0],P=z[1],D=()=>{N(!1),C&&_?.()},E=()=>{N(!0),C||v?.()};return r.createElement(eR,{value:{toggleFlip:()=>C?D():E(),flipped:C}},r.createElement(T.x,{ref:n,...S("root"),...y},r.createElement("div",{ref:w,...S("flip-inner"),style:"horizontal"===f?{transform:`rotateY(${F}deg)`}:{transform:`rotateX(${F}deg)`}},r.createElement("div",{...S("flip-content"),style:{zIndex:0}},B),r.createElement("div",{...S("flip-content"),style:"horizontal"===f?{transform:"rotateY(180deg)"}:{transform:"rotateX(180deg)"}},P))))});e3.classes=eJ,e3.displayName="@mantine/core/Flip",e3.Target=e0;var e6=t(4022),e5=t(9756),e4=t(5083),e8=t(6030),e9=t(6900),e7=t(5405),ne=t(9734);let nn={type:"configurator",component:function(e){return(0,i.jsx)(e6.M,{children:(0,i.jsxs)(e3,{h:200,w:400,...e,children:[(0,i.jsxs)(e5.Z,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,i.jsx)(e5.Z.Section,{children:(0,i.jsx)(O.E,{src:"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",height:160,alt:"Norway"})}),(0,i.jsxs)(eF.Z,{justify:"space-between",mt:"md",mb:"xs",children:[(0,i.jsx)(d.x,{fw:500,children:"Norway Fjord Adventures"}),(0,i.jsx)(e4.C,{color:"pink",variant:"light",children:"On Sale"})]}),(0,i.jsx)(d.x,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,i.jsx)(eF.Z,{justify:"right",children:(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{color:"blue",mt:"md",radius:"md",children:"Edit Widget"})})})]}),(0,i.jsx)(e9.X,{bg:"dark",radius:"md",withBorder:!0,p:"lg",children:(0,i.jsxs)(e7.K,{children:[(0,i.jsx)(j.D,{order:4,c:"white",children:"Edit Widget"}),(0,i.jsx)(d.x,{c:"gray",size:"sm",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}),(0,i.jsx)(ne.r,{c:"white",defaultChecked:!0,label:"Display image"}),(0,i.jsx)(ne.r,{c:"white",label:"Auto play"}),(0,i.jsx)(eF.Z,{justify:"left",children:(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{color:"red",mt:"md",radius:"md",children:"Close"})})})]})})]})})},code:'\nimport { Flip } from \'@gfazioli/mantine-flip\'\';\n\nfunction Demo() {\n  return (\n    <Center>\n      <Flip h={200} w={400} {...props}>\n        <Card shadow="sm" padding="lg" radius="md" withBorder>\n          <Card.Section>\n            <Image\n              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"\n              height={160}\n              alt="Norway"\n            />\n          </Card.Section>\n\n          <Group justify="space-between" mt="md" mb="xs">\n            <Text fw={500}>Norway Fjord Adventures</Text>\n            <Badge color="pink" variant="light">\n              On Sale\n            </Badge>\n          </Group>\n\n          <Text size="sm" c="dimmed">\n            With Fjord Tours you can explore more of the magical fjord landscapes with tours and\n            activities on and around the fjords of Norway\n          </Text>\n\n          <Group justify="right">\n            <Flip.Target>\n              <Button color="blue" mt="md" radius="md">\n                Edit Widget\n              </Button>\n            </Flip.Target>\n          </Group>\n        </Card>\n\n        <Paper bg="dark" radius="md" withBorder p="lg">\n          <Stack>\n            <Title order={4} c="white">\n              Edit Widget\n            </Title>\n            <Text c="gray" size="sm">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\n            </Text>\n            <Switch c="white" defaultChecked label="Display image" />\n            <Switch c="white" label="Auto play" />\n            <Group justify="left">\n              <Flip.Target>\n                <Button color="red" mt="md" radius="md">Close</Button>\n              </Flip.Target>\n            </Group>\n          </Stack>\n        </Paper>\n      </Flip>\n    </Center>\n  );\n}\n',controls:[{prop:"direction",type:"select",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}],initialValue:"horizontal",libraryValue:"horizontal"},{prop:"directionFlipIn",type:"select",data:[{label:"Negative",value:"negative"},{label:"Positive",value:"positive"}],initialValue:"negative",libraryValue:"negative"},{prop:"directionFlipOut",type:"select",data:[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"}],initialValue:"positive",libraryValue:"positive"},{prop:"easing",type:"select",data:[{label:"Ease",value:"ease"},{label:"Ease-in",value:"ease-in"},{label:"Ease-out",value:"ease-out"},{label:"Ease-in-out",value:"ease-in-out"},{label:"Linear",value:"linear"}],initialValue:"ease-in-out",libraryValue:"ease-in-out"},{prop:"perspective",type:"string",initialValue:"1000px",libraryValue:"1000px"},{prop:"duration",type:"number",initialValue:.8,libraryValue:.8,step:.1,min:0,max:10}]},nt={type:"code",code:'\nfunction Demo() {\n  const [flipped, setFlipped] = useState(false);\n\n  return (\n    <Stack>\n      <Group>\n        <Switch checked={flipped}\n                onChange={(event) => setFlipped(event.currentTarget.checked)}\n                label="Show settings" />\n      </Group>\n\n    <Flip h={200} w={400} flipped={flipped}>\n\n      <Paper radius="md" withBorder p="lg" shadow="md">\n        <h3>Front Card</h3>\n        <p>The front card</p>\n        <Group justify="right">\n          <Button onClick={()=>setFlipped(true)}>Show Settings</Button>\n        </Group>\n      </Paper>\n\n      <Paper radius="md" withBorder p="lg" shadow="md">\n        <h3>Back Card</h3>\n        <Button onClick={()=>setFlipped(false)} variant="outline">Back to Front</Button>\n      </Paper>\n\n    </Flip>\n    </Stack>\n  );\n}\n',component:function(){let[e,n]=(0,r.useState)(!1);return(0,i.jsxs)(e7.K,{children:[(0,i.jsx)(eF.Z,{children:(0,i.jsx)(ne.r,{checked:e,onChange:e=>n(e.currentTarget.checked),label:"Show settings"})}),(0,i.jsxs)(e3,{h:200,w:400,flipped:e,children:[(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Front Card"}),(0,i.jsx)("p",{children:"The front card"}),(0,i.jsx)(eF.Z,{justify:"right",children:(0,i.jsx)(e8.z,{onClick:()=>n(!0),children:"Show Settings"})})]}),(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Back Card"}),(0,i.jsx)(e8.z,{onClick:()=>n(!1),variant:"outline",children:"Back to Front"})]})]})]})},centered:!0,maxWidth:400,dimmed:!0},ni={type:"code",code:'\nimport { Flip } from \'@gfazioli/mantine-flip\';\n\nfunction Demo() {\n  return (\n    <Flip h={200} w={400} defaultFlipped={true}>\n\n      <Paper radius="md" withBorder p="lg" shadow="md">\n        <h3>Front Card</h3>\n            <p>The front card</p>\n            <Group justify="right">\n              <Flip.Target>\n                  <Button>Flip to Back</Button>\n              </Flip.Target>\n            </Group>\n      </Paper>\n\n      <Paper radius="md" withBorder p="lg" shadow="md">\n        <h3>Back Card</h3>\n        <p>In this case the <Code>defaultFlipped</Code> prop is set to <Code>true</Code>, and the back card is visible</p>\n          <Flip.Target>\n            <Button variant="outline">Flip to Front</Button>\n          </Flip.Target>\n      </Paper>\n\n    </Flip>\n  );\n}\n',component:function(){return(0,i.jsxs)(e3,{h:200,w:400,defaultFlipped:!0,children:[(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Front Card"}),(0,i.jsx)("p",{children:"The front card"}),(0,i.jsx)(eF.Z,{justify:"right",children:(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{children:"Flip to Back"})})})]}),(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Back Card"}),(0,i.jsxs)("p",{children:["In this case the ",(0,i.jsx)(L.E,{children:"defaultFlipped"})," prop is set to ",(0,i.jsx)(L.E,{children:"true"}),", and the back card is visible"]}),(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{variant:"outline",children:"Flip to Front"})})]})]})},centered:!0,maxWidth:400,minHeight:220,dimmed:!0};var nr=t(6166),na=t(6752),ns=t(9342),no=t.n(ns);let nl={type:"code",code:[{fileName:"Demo.tsx",code:'\nfunction Demo() {\n\n  const [flipped, setFlipped] = useState(false);\n\n  function SignIn() {\n    return (\n        <Paper withBorder shadow="md" p={30} radius="md">\n          <TextInput label="Email" placeholder="you@mantine.dev" required />\n          <PasswordInput label="Password" placeholder="Your password" required mt="md" />\n          <Group justify="space-between" mt="lg">\n            <Checkbox label="Remember me" />\n            <Anchor component="button" size="sm">\n              Forgot password?\n            </Anchor>\n          </Group>\n          <Button fullWidth mt="xl">\n            Sign in\n          </Button>\n        </Paper>\n    );\n  }\n\n  function SignUp() {\n    return (\n        <Paper withBorder shadow="md" p={30} radius="md">\n          <TextInput label="Email" placeholder="you@mantine.dev" required />\n          <PasswordInput label="Password" placeholder="Your password" required mt="md" />\n          <PasswordInput label="Confirm Password" placeholder="Your password" required mt="md" />\n          <Button fullWidth mt="xl">\n            Sign Up\n          </Button>\n        </Paper>\n    );\n  }\n\n  return (\n    <Container size={420} my={40}>\n      <Title ta="center" className={classes.title}>\n      {!flipped ? "Welcome back!" : "Create an account"}\n      </Title>\n      \n      {!flipped ?\n        <Text c="dimmed" size="sm" ta="center" mt={5}>\n          Do not have an account yet?{\' \'}\n          <Anchor size="sm" component="button" onClick={()=>setFlipped(true)}>\n            Create account\n          </Anchor>\n        </Text> :\n        <Text c="dimmed" size="sm" ta="center" mt={5}>\n          Do you already have an account?{\' \'}\n          <Anchor size="sm" component="button" onClick={()=>setFlipped(false)}>\n            Sign in\n          </Anchor>\n        </Text>\n      }\n      \n      <Flip h={200} w={400} flipped={flipped} mt={30}>\n        <SignIn />\n        <SignUp />\n      </Flip>\n      \n    </Container>\n  );\n}\n',language:"tsx"},{fileName:"Demo.module.css",code:"\n.title {\n  font-family:\n    Greycliff CF,\n    var(--mantine-font-family);\n  font-weight: 900;\n}\n\n",language:"scss"}],component:function(){let[e,n]=(0,r.useState)(!1);return(0,i.jsxs)(ed.W,{size:420,my:40,children:[(0,i.jsx)(j.D,{ta:"center",className:no().title,children:e?"Create an account":"Welcome back!"}),e?(0,i.jsxs)(d.x,{c:"dimmed",size:"sm",ta:"center",mt:5,children:["Do you already have an account?"," ",(0,i.jsx)(m.e,{size:"sm",component:"button",onClick:()=>n(!1),children:"Sign in"})]}):(0,i.jsxs)(d.x,{c:"dimmed",size:"sm",ta:"center",mt:5,children:["Do not have an account yet?"," ",(0,i.jsx)(m.e,{size:"sm",component:"button",onClick:()=>n(!0),children:"Create account"})]}),(0,i.jsxs)(e3,{h:200,w:400,flipped:e,mt:30,children:[(0,i.jsx)(function(){return(0,i.jsxs)(e9.X,{withBorder:!0,shadow:"md",p:30,radius:"md",children:[(0,i.jsx)(g.o,{label:"Email",placeholder:"you@mantine.dev",required:!0}),(0,i.jsx)(nr.W,{label:"Password",placeholder:"Your password",required:!0,mt:"md"}),(0,i.jsxs)(eF.Z,{justify:"space-between",mt:"lg",children:[(0,i.jsx)(na.X,{label:"Remember me"}),(0,i.jsx)(m.e,{component:"button",size:"sm",children:"Forgot password?"})]}),(0,i.jsx)(e8.z,{fullWidth:!0,mt:"xl",children:"Sign in"})]})},{}),(0,i.jsx)(function(){return(0,i.jsxs)(e9.X,{withBorder:!0,shadow:"md",p:30,radius:"md",children:[(0,i.jsx)(g.o,{label:"Email",placeholder:"you@mantine.dev",required:!0}),(0,i.jsx)(nr.W,{label:"Password",placeholder:"Your password",required:!0,mt:"md"}),(0,i.jsx)(nr.W,{label:"Confirm Password",placeholder:"Your password",required:!0,mt:"md"}),(0,i.jsx)(e8.z,{fullWidth:!0,mt:"xl",children:"Sign Up"})]})},{})]})]})},centered:!0,maxWidth:400,minHeight:500,dimmed:!0},nd={type:"code",code:'\nimport { Flip } from \'@gfazioli/mantine-flip\';\n\nfunction Demo() {\n  return (\n    <Flip h={200} w={200}>\n\n    <Paper radius="md" withBorder p="lg" shadow="md">\n      <h3>Front Card</h3>\n      <Flip.Target>\n        <Button>Flip Back</Button>\n      </Flip.Target>\n    </Paper>\n\n    <Paper radius="md" withBorder p="lg" shadow="md">\n      <h3>Back Card</h3>\n      <Flip.Target>\n        <Button>Flip Front</Button>\n      </Flip.Target>\n    </Paper>\n\n  </Flip>\n  );\n}\n',component:function(){return(0,i.jsxs)(e3,{h:200,w:400,defaultFlipped:!0,children:[(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Front Card"}),(0,i.jsx)("p",{children:"The front card"}),(0,i.jsx)(eF.Z,{justify:"right",children:(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{children:"Show Back"})})})]}),(0,i.jsxs)(e9.X,{radius:"md",withBorder:!0,p:"lg",shadow:"md",children:[(0,i.jsx)("h3",{children:"Back Card"}),(0,i.jsx)(e3.Target,{children:(0,i.jsx)(e8.z,{variant:"outline",children:"Back to Front"})})]})]})},centered:!0,maxWidth:400,dimmed:!0};function nc(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",...es(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(eL,{packages:"@gfazioli/mantine-flip"}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t,{data:nn}),"\n",(0,i.jsx)(n.h2,{id:"uncontrollded",children:"Uncontrollded"}),"\n",(0,i.jsx)(t,{data:nd}),"\n",(0,i.jsx)(n.h2,{id:"controllded",children:"Controllded"}),"\n",(0,i.jsxs)(n.p,{children:["You may control the state of the card by setting the ",(0,i.jsx)(n.code,{children:"flipped"})," prop to ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"}),".\nThis is useful when you want to control the state of the card from the parent component."]}),"\n",(0,i.jsx)(t,{data:nt}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Inital face and Flip.Target"})}),"\n",(0,i.jsxs)(n.p,{children:["For controlled Flip components, you will use ",(0,i.jsx)(n.code,{children:"useState"})," to determine which side of the component to initially show.\nAdditionally, you will not need to use ",(0,i.jsx)(n.code,{children:"Flip.Target"})," for buttons, but you can control them manually to keep the states synchronized."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"default-flipped-face",children:"Default Flipped (face)"}),"\n",(0,i.jsxs)(n.p,{children:["You may display the initial face of the card by setting the ",(0,i.jsx)(n.code,{children:"defaultFlipped"})," prop to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t,{data:ni}),"\n",(0,i.jsx)(n.h2,{id:"more-examples",children:"More examples"}),"\n",(0,i.jsx)(t,{data:nl})]})}function np(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...es(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(nc,{...e})}):nc(e)}let nh={Flip:{selectors:{root:"Root element","flip-inner":"Inner element","flip-content":"Content element"},vars:{root:{"--flip-perspective":"Controls animation `perspective`","--flip-transition-duration":"Controls animation `duration`","--flip-transition-timing-function":"Controls animation `easing`"}},modifiers:[{modifier:"data-centered",selector:"root",condition:"`centered` prop is set"}]}};function nu(){return(0,i.jsxs)(eD,{children:[(0,i.jsx)(ev,{data:ez}),(0,i.jsx)(el,{docgen:eE,componentsProps:["Flip"],componentsStyles:["Flip"],stylesApiData:nh,children:(0,i.jsx)(np,{})})]})}},2752:function(e){e.exports={root:"DocsTabs_root__3_liq",tabsWrapper:"DocsTabs_tabsWrapper__IRW55",tabsList:"DocsTabs_tabsList__WAMMe",tab:"DocsTabs_tab__mfbTe",tabContent:"DocsTabs_tabContent__xZoIg",main:"DocsTabs_main__bXjjr",tableOfContents:"DocsTabs_tableOfContents__m_mWC"}},1555:function(e){e.exports={root:"InstallScript_root__C12dR",icon:"InstallScript_icon__2DGM0"}},6938:function(e){e.exports={paragraph:"MdxElements_paragraph__Y192O",link:"MdxElements_link__Lt3iC",ul:"MdxElements_ul__hdTt4",li:"MdxElements_li__KI_j2",title:"MdxElements_title__YHwzc",titleLink:"MdxElements_titleLink__MBV9J",titleOffset:"MdxElements_titleOffset__Vn_Uo",code:"MdxElements_code__C3Y34"}},6239:function(e){e.exports={root:"MdxInfo_root__m_cCs",icon:"MdxInfo_icon__hDmDv"}},4128:function(e){e.exports={root:"PageHeader_root__u_xWw",title:"PageHeader_title__gP726",description:"PageHeader_description__gCV5r",links:"PageHeader_links__3ws49"}},3266:function(e){e.exports={root:"PageHeaderLink_root__xmmCT",label:"PageHeaderLink_label__7Fad9",body:"PageHeaderLink_body__qvtDJ",icon:"PageHeaderLink_icon__d9jEr"}},5628:function(e){e.exports={root:"PropsTablesList_root__c_Say",searchIcon:"PropsTablesList_searchIcon__9N6KL",title:"PropsTablesList_title__RXbmG",section:"PropsTablesList_section__nwP7g",search:"PropsTablesList_search__uiqGP"}},186:function(e){e.exports={inner:"Shell_inner__vEmfO",main:"Shell_main__lcVaI",logo:"Shell_logo__4Ivhz"}},2118:function(e){e.exports={root:"StylesApiTable_root__obqpY",groupsHeader:"StylesApiTable_groupsHeader__GDU_x",group:"StylesApiTable_group__X_sw5",title:"StylesApiTable_title__inUP0",section:"StylesApiTable_section__nAJMp"}},1251:function(e){e.exports={code:"TableInlineCode_code__TNUKa"}},1598:function(e){e.exports={wrapper:"TableOfContents_wrapper__BAgli",inner:"TableOfContents_inner__au2gv",link:"TableOfContents_link__X__0J",header:"TableOfContents_header__5Tlsz",title:"TableOfContents_title__FWq20",items:"TableOfContents_items__s8ECn"}},9342:function(e){e.exports={title:"FlipDemoSignIn_title__7I5_H"}}},function(e){e.O(0,[4368,9774,2888,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);