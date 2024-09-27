(()=>{"use strict";var n={199:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a)()(i());r.push([n.id,"#hero {\n    flex-wrap: wrap-reverse;\n    justify-content: center;\n    align-items: center;\n    padding: 30px;\n    max-width: 1600px;\n    gap: 5%;\n}\n\n.caption {\n    text-align: center;\n    font-style: italic;\n    font-size: 16px;\n    margin: 10px 0 20px 0;\n}\n#hero p {\n    font-size: 19px;\n}\n#team {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.underline {\n    width: 150px;\n    height: 5px;\n    background-color: var(--lightblue);\n    margin: 10px 0 10px 0;\n}\n\n.major {\n    color: rgb(68, 68, 68);\n    font-size: 14px;\n    margin: 0 0 10px 0;\n}\n\n#about-hero{\n    width: 40%;\n}\n\n#hero > .text-wrapper{\n    margin-bottom: 50px;\n    width: 35%;\n}\n\n#team h1{\n    margin: 0;\n}\n\n\n.team-container{\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 1600px;\n    justify-content: center;\n    gap:3vw;\n    margin: 30px;\n}\n\n.team-container * {\n    transition: ease 1s;\n}\n.team-container img {\n    width: 250px;\n    height: 250px;\n    object-fit: contain;\n    object-position: 50%, 50px;\n    margin-bottom: 20px;\n    border-radius: 50%;\n    background-color: rgba(119, 187, 214, 0.363);\n}\n\n.team-container div {\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px 30px;\n    border-radius: 20px;\n}\n.team-container h1, .team-container h2, .team-container h4{\n    text-align: center;\n    margin: 0;\n}\n\n.team-container p {\n    text-align: center;\n    font-size: 20px;\n    padding: 20px;\n}\n\n.about-me{\n    position: absolute;\n    text-align: center;\n    background-color: rgba(255, 255, 255, 0.685);\n    color: rgb(0, 0, 0);\n    top: 0;\n    margin: 0;\n    opacity: 0;\n    width: 100%;\n    transition: all 0.3s ease;\n    height: 100%;\n    border: solid var(--lightblue) 1px;\n    overflow: hidden;\n}\n@media only screen and (max-width: 990px){\n    #about-hero{\n        width: 100%;\n        margin-right: 0;\n    }\n    \n    #hero > .text-wrapper{\n        width: 100%;\n        text-align: center;\n\n    }\n  \n  }\n\n  @media only screen and (max-width: 780px){\n    .team-container div {\n        padding: 80px 30px;\n    }\n  }",""]);const s=r},1383:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a)()(i());r.push([n.id,'footer {\n    padding: 60px;\n    background-color: rgb(21, 22, 24);\n    font-family: "Poppins", sans-serif;\n    width: 100vw;\n\n}\nfooter h1{\n    font-family: "Poppins", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    font-size: 30px;\n    color: rgb(240, 240, 240);\n    text-align: center;\n    margin-bottom: 16px;\n}\n\nfooter ul {\n    display: flex;\n    list-style-type: none;\n    padding: 0;\n    justify-content: center;\n}\n\n#social-icons{\n    display: flex\n}\n\nfooter li {\n    font-weight: 400;\n    padding: 0 18px;\n    font-size: 14px;\n    color: rgb(156, 156, 156);\n    text-align: center;\n}\nfooter a {\n    margin: 0; \n    padding: 0;\n}\nfooter a:hover {\n    transition: all 0.3s ease;\n    color: rgb(214, 214, 214);\n}\n\nfooter p {\n    color: rgba(255, 255, 255, 0.3);\n    margin-top: 48px;\n    font-size: 14px;\n}\n\nfooter svg {\n    fill: white;\n    cursor: pointer;\n}\n\n#social-icons li {\n    padding: 0;\n}\n\n#social-icons {\n    margin: 40px;\n    gap: 16px;\n}\n\n\n#TikTok {\n    width: 40px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 820px){\n    footer ul {\n        display: grid;\n    }\n}',""]);const s=r},5787:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a)()(i());r.push([n.id,"body {\n    color: #232323;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#slim-nav{\n    display: none;\n}\n\n#menu-button{\n    display: none;\n}\n\nnav{\n    position: fixed;\n    top: 0;\n    min-height: 80px;\n    color: inherit;\n    background-color: white;\n    box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.233);\n    display: flex;\n    width: 100vw;\n    justify-content: space-between;\n    padding: 0 30px;\n    align-items: center;\n    z-index: 4;\n}\n\n#Logo {\n    width: clamp(250px, calc(2vw + 70px), 500px);\n}\nli, nav > p {\n    padding: 10px 1vw;\n}\n\n#number {\n    font-weight: 550;\n    font-size: calc(12px + 0.3vw);\n    margin-left: auto;\n\n}\n\nnav > div {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    overflow-x: visible;\n}\nnav > div> button{\n    font-weight: 1000;\n    font-size: calc(12px + 0.3vw);\n    border-radius: 10px;\n    border-style: solid;\n}\nnav > div> button, #get-started {\n    padding: 10px 20px;\n    background-color: var(--darkblue);\n    border-color: var(--darkblue);\n    cursor: pointer;\n}\n\nnav > ul > li {\n    padding: 15px;\n}\na{\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n#wide-nav a{\n    font-size: calc(10px + 0.4vw);\n    margin: 1.5px;\n    line-height: 20px;\n    text-decoration: underline solid transparent;\n}\n\n#wide-nav a:hover {\n    transition: all 0.3s ease;\n    text-decoration: underline solid gray;\n    color: rgb(42, 59, 71);\n}\n\n#contact {\n    background-color: rgb(233, 233, 233);\n    border-color: rgb(233, 233, 233);\n}\n\n#embark {\n    color: white;\n}\n/*For Nav Bar To Become Condensed */\n@media only screen and (max-width: 1040px) {\n    /* Styles specific to phones */\n    #wide-nav{\n        display: none;\n    }\n\n    #number{\n        display: none;\n    }\n    #contact{\n        display: none;\n    }\n    #menu-button{\n        display: block;\n    }\n    #slim-nav{\n        top: 50px;\n        display: flex;\n        transition: all 0.3s ease;\n        flex-direction: column;\n        justify-content: space-around;\n        position: fixed;\n        align-items: center;\n        height: 70vh;\n        width: 100vw;\n        background-color: white;\n        transform-origin: top left;\n        transition: all 0.3s ease;\n    }\n    #slim-nav > li {\n        font-size: 16px;\n        font-family: FoundersBold;\n        font-weight: 1000;\n        display: flex;\n        flex-direction: column;\n        padding: 20px;\n        align-items: center;\n    }\n    #menu-button {\n        transition: all 0.3s ease;\n        border-radius: 5px;\n        padding: 5px;\n        width: 75px;\n        height: 50px;\n        object-fit: contain;\n        cursor: pointer;\n        background-color: #ebebeb;\n    }\n    #menu-button:hover, #menu-botton:active{\n        transition: all 0.3s ease;\n        background-color: #dddddd;\n    }\n\n\n  }",""]);const s=r},269:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a),s=t(4417),l=t.n(s),c=new URL(t(5313),t.b),d=new URL(t(7061),t.b),p=new URL(t(6833),t.b),u=r()(i()),m=l()(c),g=l()(d),h=l()(p);u.push([n.id,`@font-face { font-family: Bureau; src: url(${m}); } \n@font-face { font-family: FoundersBold; src: url(${g}); } \n@font-face { font-family: Founders; src: url(${h}); } \n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*Fix Scrolling */\n\n*, html {\n\n  scroll-behavior: smooth !important;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  overflow-x: hidden;\n  \n}\n\n/* Remove default margin in favour of better control in authored CSS */\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  padding-top: 80px;\n  font-family: Founders, sans-serif;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\n\n\n/* Balance text wrapping on headings */\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\nmain{\n  max-width: 100vw;\n}\n\n/*End of Reset*/`,""]);const f=u},1945:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a)()(i());r.push([n.id,".section{\n    padding: 10px 5vw;\n    max-width: 1800px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.section .bodyText{\n    font-size: 18px;\n}\n\n.section img {\n    object-fit: cover;\n    width: 40%;\n}\n\n\n.section .wrapper{\n    width: 40%;\n    min-width: 450px;\n    align-items: flex-start;\n}\n\n.section .wrapper * {\n    margin: 0;\n    padding: 0;\n}\n\n@media only screen and (max-width: 700px){\n    .section{\n        gap: 20px;\n    }\n    .section .wrapper, .section img{\n        width: 80vw;\n        min-width: 0;\n    }\n\n  \n  }",""]);const s=r},7515:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),i=t.n(o),a=t(6314),r=t.n(a)()(i());r.push([n.id,":root{\n  --lightblue: rgb(1, 83, 160);\n  --buttonblue: rgb(159, 193, 245);\n  --darkblue: rgb(0, 50, 98);\n  --background: rgba(60, 167, 255, 0.082);\n  --orange: rgb(238, 120, 41);\n}\n\n\n*{\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.alignLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 880px;\n  padding-left: 10px;\n}\n\n.hidden{\n  transform: scale(0.7);\n  opacity: 0; \n  display: none;\n  z-index: 2;\n}\n\n.active{\n  transform: scale(1);\n  opacity: 100;\n  z-index: 100;\n}\n\n.flex{\n  display: flex;\n}\n\n.verticalFlex{\n  display: flex;\n  flex-direction: column;\n}\n\n/*Font stuff */\n.foundersH{\n  font-family: FoundersBold, sans-serif;\n  font-weight: 800;\n  color: rgba(19, 31, 48, 1);\n}\n\n.smallerH{\n  font-size: 42px;\n}\n\n.centered{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.caption{\n  font-size: 18px;\n  color: rgb(85, 85, 85);\n  font-family: Founders;\n  text-align: center;\n  margin: 0;\n  line-height: 1.5em;\n}\n\nh1{\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 1.4px;\n  margin: 20px 0;\n  font-family: Bureau, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nh2{\n  font-weight: 400;\n  text-align: center;\n  font-family: FoundersBold, sans-serif;\n}\n\np {\n  font-size: 20px;\n}\n\nul{\n  padding-left: 0px;\n  list-style: none;\n  display:flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n}\n\n.animatedHover{\n  transition: all 0.3s ease\n}\n\n.animatedHover:hover{\n  transition: all 0.3s ease;\n  transform: scale(1.02,1.02);\n}\n\n.emphasis {\n  color: var(--lightblue);\n  font-weight: bold;\n}\n\n.wrapper {\n  display: flex;\n  gap: 25px;\n  justify-content: center;\n  align-items: center;\n}\n\n.number {\n  background-color: var(--buttonblue);\n  font-weight: 1000;\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n@media (max-width: 768px){\n  h1, h2, p:not(.number) {\n    padding: 0 40px;\n  }\n  .caption {\n    font-size: 18px;\n  }\n}",""]);const s=r},6314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},4417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},1601:n=>{n.exports=function(n){return n[1]}},5072:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var l=o(n,i),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},7659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},5056:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},7825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},1113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},5313:(n,e,t)=>{n.exports=t.p+"857c02a693e4d8c19baa.otf"},7061:(n,e,t)=>{n.exports=t.p+"933e46628e790c08cfba.otf"},6833:(n,e,t)=>{n.exports=t.p+"cf04cce70a64e312dd43.otf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"c39862e76a9abb4070ad.png",e=t.p+"3fe3ef135a15dd192135.png",o=t.p+"79302d7fe3144e1527df.ico",i=t.p+"98dcb83ff33d09346870.png";document.querySelector("#favicon").href=o,document.querySelector("#websiteIco").content=i;const a=document.querySelector("#menu-button");a.src=e,document.querySelector("#Logo").src=n;const r=document.querySelector("#slim-nav"),s=document.querySelectorAll("#slim-nav > li");s.forEach((n=>n.classList.add("hidden"))),a.addEventListener("click",(()=>{r.classList.toggle("hidden"),r.classList.toggle("active"),s.forEach((n=>n.classList.toggle("hidden"))),s.forEach((n=>n.classList.toggle("active")))})),document.querySelector("#contact").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")}));document.querySelector("#embark").addEventListener("click",(()=>{window.open("https://calendly.com/caltutorsteam/30min")})),document.querySelector("#social-icons li:nth-child(1) svg").addEventListener("click",(()=>{window.open("https://www.instagram.com/luminatutors/")})),document.querySelector("#social-icons li:nth-child(2)>svg").addEventListener("click",(()=>{window.open("mailto:caltutorsteam@gmail.com")})),document.querySelector("#social-icons li:nth-child(3)>svg").addEventListener("click",(()=>{window.open("https://www.facebook.com/profile.php?id=61562774625379&mibextid=LQQJ4d")}));var l=t(5072),c=t.n(l),d=t(7825),p=t.n(d),u=t(7659),m=t.n(u),g=t(5056),h=t.n(g),f=t(540),y=t.n(f),x=t(1113),b=t.n(x),w=t(269),v={};v.styleTagTransform=b(),v.setAttributes=h(),v.insert=m().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=y(),c()(w.A,v),w.A&&w.A.locals&&w.A.locals;var A=t(7515),k={};k.styleTagTransform=b(),k.setAttributes=h(),k.insert=m().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=y(),c()(A.A,k),A.A&&A.A.locals&&A.A.locals;var C=t(5787),S={};S.styleTagTransform=b(),S.setAttributes=h(),S.insert=m().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=y(),c()(C.A,S),C.A&&C.A.locals&&C.A.locals;var I=t(1383),E={};E.styleTagTransform=b(),E.setAttributes=h(),E.insert=m().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=y(),c()(I.A,E),I.A&&I.A.locals&&I.A.locals;var T=t(199),P={};P.styleTagTransform=b(),P.setAttributes=h(),P.insert=m().bind(null,"head"),P.domAPI=p(),P.insertStyleElement=y(),c()(T.A,P),T.A&&T.A.locals&&T.A.locals;var j=t(1945),B={};B.styleTagTransform=b(),B.setAttributes=h(),B.insert=m().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=y(),c()(j.A,B),j.A&&j.A.locals&&j.A.locals,document.querySelector("main");const z=t.p+"058bb290ecca45a09b1f.png",M=t.p+"d2d68744286fecb4bc03.png",L=t.p+"efe212f4dfc2022c1f97.png",U=t.p+"8a98b3fec8ea2d11a8de.png",F=t.p+"06b7f6aecd2dac4dd58c.png",H=t.p+"48d4385ccf7f0fae2c53.png",q=t.p+"1e9e1502f0a90321451d.png",R=t.p+"480aa6db9d7f87de0be9.png",D=t.p+"40153d439103a53e836b.png",O=t.p+"0f805ccc5795d315ba58.png",J=t.p+"45a1a3ab3a191a8ca9a4.png";class N{static OurTutors=document.querySelector("#tutors");constructor(n,e,t,o,i){this.img=n,this.major=e,this.name=t,this.position=o,this.intro=i}makeProfile(){let n=0;const e=document.createElement("div");e.style.position="relative";const t=document.createElement("img");t.src=this.img;const o=document.createElement("p");o.classList.add("major"),o.textContent=this.major;const i=document.createElement("h2");i.textContent=this.name,i.style.fontWeight=1e3;const a=document.createElement("h4");a.textContent=this.position,e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(a);const r=document.createElement("p");r.textContent=this.intro,r.classList.add("about-me"),e.appendChild(r),r.addEventListener("mouseenter",(()=>{t.style.opacity=.4,o.style.opacity=0,i.style.opacity=0,a.style.opacity=0,r.style.opacity=1})),r.addEventListener("mouseleave",(()=>{t.style.opacity=1,o.style.opacity=1,i.style.opacity=1,a.style.opacity=1,r.style.opacity=0})),e.addEventListener("touchstart",(()=>{n?(t.style.opacity=1,o.style.opacity=1,i.style.opacity=1,a.style.opacity=1,r.style.opacity=0,n=0):(t.style.opacity=.4,o.style.opacity=0,i.style.opacity=0,a.style.opacity=0,r.style.opacity=1,n=1)})),N.OurTutors.appendChild(e)}}document.querySelector("#about-hero").src=z;const $=new N(M,"UC Berkeley | EECS + Applied Math","Joshua Zhou","College Math","I am a second-year student at UC Berkeley. I am passionate about engineering\nand math and their applications in space. During my free time, I enjoy playing sports as well as creating art.\nI welcome you to CalTutors and look forward to working with you! \n "),W=(new N(L,"IVC | Economics","Sohrab Sadjadi","SAT/ACT Prep","Beginning in high school, I was always on the lookout for business ventures and\nopportunities. Working with Josh, I focus on delivering the best customer experience as both a tutor and\nmarketer. I really enjoy playing soccer as well as spending time with my friends. Welcome to CalTutors!"),new N(U,"UC Berkeley | Political Science + Data Science","Daniel Delpassand","Writing And Professional Development","Hi! My name is Daniel, and I am a rising second-year. As I continued to \nmaster my writing skills through AP exams, college applications, and essays during my freshman year of college, \nI gained valuable insights into what can elevate a student’s writing from satisfactory to excellent. My main focus \nas your writing tutor is to ignite your intellectual fire, to give your writing ideas a deeper layer of nuance. \nThen, I will teach you how to execute these ideas with effective rhetoric. In my free time, I like to play \npickleball and chess. I look forward to working with you!")),V=new N(F,"UC Berkeley | Aerospace + EECS","Veer Adhvaryu","STEM and Python","My name is Veer Adhvaryu and I am studying Aerospace Engineering with and Electrical Engineering \nand Computer Science minor at UC Berkeley. I teach math, physics, python, APUSH, SAT/ACT (score of 1530 on SAT), and \nmost other STEM-related subjects. In my free time, I love to hang out with my friends, go to the beach, and watch sports!"),_=new N(q,"UC Berkeley | Environmental Engineering","Charles Habgood","College Writing and SAT/ACT Prep","Hello! My name is Charles Habgood, and I am an undergraduate student at UC Berkeley studying \nEnvironmental Engineering. I help students in a wide range of subjects, including math, college essay writing, \ncreative writing, and the SAT/ACT. In my free time, I love to play soccer, go on adventures with my dog, and ski."),Q=new N(H,"UC Berkeley | Bioengineering + Education","Arjun Shivkumar","Pre-Med and SAT/ACT Prep","Hey! I'm Arjun, a rising senior at UC Berkeley majoring in Bioengineering with a minor in Education. \nAs Academic Vice President of a major pre-med organization on campus and founder of a nonprofit teaching kids tennis, \nI'm passionate about educating and mentoring. I enjoy tutoring pre-med courses, SAT/ACT prep, and STEM subjects. I've also \nguided students in pursuing extracurriculars like research and launching nonprofits. Beyond academics, I'm into photography, \nexploring new foods, and playing tennis!"),K=new N(R,"UC Berkeley | Philosophy + Rhetoric","Jax Armstrong","College Counseling","Hi, I'm Jax, a junior at UC Berkeley studying Philosophy and Rhetoric. I've helped high school students write standout college admissions essays, drawing from my own success with six top 20 university acceptances. I also tutor K-12 English (including AP Lang/Lit), SAT/ACT prep, Spanish (from Spanish 1 to AP Spanish Lit), AP History, debate prep, and introductory college philosophy. In my spare time, I enjoy hiking, reading, and hanging out with my French Bulldog."),X=new N(D,"UC Berkeley | EECS","Yonatan Paz-Priel","STEM and College Counseling","I'm an Electrical Engineering & Computer Science major at UC Berkeley, and I'm interested in law school. \nI tutor all subjects -- STEM, college essays, SAT/ACT, and English. I'm on the Cal Mock Trial team and I love hiking and nature. \nI grew up in Baltimore, Maryland, and I now live in Marin County, CA! "),Y=new N(O,"Caltech | Computer Science","Skye Ruedas","College Courses and College Counseling","Hi there! I'm Skye, a senior at Caltech with a passion for making learning enjoyable. I tutor all levels of math, including SAT/ACT prep, and specialize in college counseling to help students navigate the admissions process. In my free time, I love working out, going on hikes with my Doberman, Rio, and cooking! I look forward to working with you!"),Z=new N(J,"Caltech | Computer Sciences + Economics","Ivy Brainard","AP Calculus, AP Biology and Computer Science","I’m Ivy, a sophomore at Caltech pursuing a double major in Computer Science and Business Economics. I enjoy running and traveling in my free time, and I’m part of the Caltech track team, which I absolutely love! I offer tutoring in math (including SAT Math, AP Calculus AB and BC, Pre-Calc, and Algebra), Biology (AP Biology and Biology), coding (AP Computer Science A, AP Computer Science Principles, and Python or Java), and Economics (AP Micro and Macro).");Q.makeProfile(),Y.makeProfile(),$.makeProfile(),Z.makeProfile(),X.makeProfile(),_.makeProfile(),V.makeProfile(),K.makeProfile(),W.makeProfile()})()})();