(()=>{"use strict";var n={383:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,'footer {\n    padding: 60px;\n    background-color: rgb(21, 22, 24);\n    font-family: "Poppins", sans-serif;\n    width: 100vw;\n\n}\nfooter h1{\n    font-family: "Poppins", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.3px;\n    font-size: 30px;\n    color: rgb(240, 240, 240);\n    text-align: center;\n    margin-bottom: 16px;\n}\n\nfooter ul {\n    display: flex;\n    list-style-type: none;\n    padding: 0;\n    justify-content: center;\n}\n\n#social-icons{\n    display: flex\n}\n\nfooter li {\n    font-weight: 400;\n    padding: 0 18px;\n    font-size: 14px;\n    color: rgb(156, 156, 156);\n    text-align: center;\n}\nfooter a {\n    margin: 0; \n    padding: 0;\n}\nfooter a:hover {\n    transition: all 0.3s ease;\n    color: rgb(214, 214, 214);\n}\n\nfooter p {\n    color: rgba(255, 255, 255, 0.3);\n    margin-top: 48px;\n    font-size: 14px;\n}\n\nfooter svg {\n    fill: white;\n    cursor: pointer;\n}\n\n#social-icons li {\n    padding: 0;\n}\n\n#social-icons {\n    margin: 40px;\n    gap: 16px;\n}\n\n\n#TikTok {\n    width: 40px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 820px){\n    footer ul {\n        display: grid;\n    }\n}',""]);const s=a},799:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,"#hero {\n    padding: 10vh 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#contact-us{\n    margin: 20px;\n    padding: 10px 15px;\n    border-radius: 30px;\n    font-size: 18px;\n    border-width: 0;\n    cursor: pointer;\n    font-weight: 1000;\n    color:white;\n    background-color: var(--darkblue)\n}\n\n#logistics{\n    display: flex;\n    justify-content: space-around;\n    gap: 7.5vw;\n    flex-wrap: wrap;\n    margin-bottom: 50px;\n}\n\n#logistics div {\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n}\n\n#logistics img {\n    width: auto;\n    height: 200px;\n    object-fit: contain;\n}\n",""]);const s=a},787:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,"body {\n    color: #232323;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#slim-nav{\n    display: none;\n}\n\n#menu-button{\n    display: none;\n}\n\nnav{\n    position: fixed;\n    top: 0;\n    min-height: 80px;\n    color: inherit;\n    background-color: white;\n    box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.233);\n    display: flex;\n    width: 100vw;\n    justify-content: space-between;\n    padding: 0 30px;\n    align-items: center;\n    z-index: 4;\n}\n\n#Logo {\n    width: clamp(250px, calc(2vw + 70px), 500px);\n}\nli, nav > p {\n    padding: 10px 1vw;\n}\n\n#number {\n    font-weight: 550;\n    font-size: calc(12px + 0.3vw);\n    margin-left: auto;\n\n}\n\nnav > div {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    overflow-x: visible;\n}\nnav > div> button{\n    font-weight: 1000;\n    font-size: calc(12px + 0.3vw);\n    border-radius: 10px;\n    border-style: solid;\n}\nnav > div> button, #get-started {\n    padding: 10px 20px;\n    background-color: var(--darkblue);\n    border-color: var(--darkblue);\n    cursor: pointer;\n}\n\nnav > ul > li {\n    padding: 15px;\n}\na{\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n#wide-nav a{\n    font-size: calc(10px + 0.4vw);\n    margin: 1.5px;\n    line-height: 20px;\n    text-decoration: underline solid transparent;\n}\n\n#wide-nav a:hover {\n    transition: all 0.3s ease;\n    text-decoration: underline solid gray;\n    color: rgb(42, 59, 71);\n}\n\n#contact {\n    background-color: rgb(233, 233, 233);\n    border-color: rgb(233, 233, 233);\n}\n\n#embark {\n    color: white;\n}\n/*For Nav Bar To Become Condensed */\n@media only screen and (max-width: 1040px) {\n    /* Styles specific to phones */\n    #wide-nav{\n        display: none;\n    }\n\n    #number{\n        display: none;\n    }\n    #contact{\n        display: none;\n    }\n    #menu-button{\n        display: block;\n    }\n    #slim-nav{\n        top: 50px;\n        display: flex;\n        transition: all 0.3s ease;\n        flex-direction: column;\n        justify-content: space-around;\n        position: fixed;\n        align-items: center;\n        height: 70vh;\n        width: 100vw;\n        background-color: white;\n        transform-origin: top left;\n        transition: all 0.3s ease;\n    }\n    #slim-nav > li {\n        font-size: 16px;\n        font-family: FoundersBold;\n        font-weight: 1000;\n        display: flex;\n        flex-direction: column;\n        padding: 20px;\n        align-items: center;\n    }\n    #menu-button {\n        transition: all 0.3s ease;\n        border-radius: 5px;\n        padding: 5px;\n        width: 75px;\n        height: 50px;\n        object-fit: contain;\n        cursor: pointer;\n        background-color: #ebebeb;\n    }\n    #menu-button:hover, #menu-botton:active{\n        transition: all 0.3s ease;\n        background-color: #dddddd;\n    }\n\n\n  }",""]);const s=a},269:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(601),i=t.n(o),r=t(314),a=t.n(r),s=t(417),l=t.n(s),c=new URL(t(313),t.b),d=new URL(t(61),t.b),p=new URL(t(833),t.b),u=a()(i()),f=l()(c),m=l()(d),g=l()(p);u.push([n.id,`@font-face { font-family: Bureau; src: url(${f}); } \n@font-face { font-family: FoundersBold; src: url(${m}); } \n@font-face { font-family: Founders; src: url(${g}); } \n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*Fix Scrolling */\n\n*, html {\n\n  scroll-behavior: smooth !important;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  overflow-x: hidden;\n  \n}\n\n/* Remove default margin in favour of better control in authored CSS */\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  padding-top: 80px;\n  font-family: Founders, sans-serif;\n  margin: 0;\n}\n\n/* Set shorter line heights on headings and interactive elements */\n\n\n/* Balance text wrapping on headings */\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\nmain{\n  max-width: 100vw;\n}\n\n/*End of Reset*/`,""]);const h=u},945:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,".section{\n    padding: 10px 5vw;\n    max-width: 1800px;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.section .bodyText{\n    font-size: 18px;\n}\n\n.section img {\n    object-fit: cover;\n    width: 40%;\n}\n\n\n.section .wrapper{\n    width: 40%;\n    min-width: 450px;\n    align-items: flex-start;\n}\n\n.section .wrapper * {\n    margin: 0;\n    padding: 0;\n}\n\n@media only screen and (max-width: 700px){\n    .section{\n        gap: 20px;\n    }\n    .section .wrapper, .section img{\n        width: 80vw;\n        min-width: 0;\n    }\n\n  \n  }",""]);const s=a},515:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),r=t(314),a=t.n(r)()(i());a.push([n.id,":root{\n  --lightblue: rgb(60, 146, 216);\n  --buttonblue: rgb(159, 193, 245);\n  --darkblue: rgb(42, 93, 151);\n  --background: rgba(60, 167, 255, 0.082);\n}\n\n\n*{\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.alignLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 880px;\n  padding-left: 10px;\n}\n\n.hidden{\n  transform: scale(0.7);\n  opacity: 0; \n  display: none;\n  z-index: 2;\n}\n\n.active{\n  transform: scale(1);\n  opacity: 100;\n  z-index: 100;\n}\n\n.flex{\n  display: flex;\n}\n\n.verticalFlex{\n  display: flex;\n  flex-direction: column;\n}\n\n/*Font stuff */\n.foundersH{\n  font-family: FoundersBold, sans-serif;\n  font-weight: 800;\n  color: rgba(19, 31, 48, 1);\n}\n\n.smallerH{\n  font-size: 42px;\n}\n\n.centered{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.caption{\n  font-size: 18px;\n  color: rgb(85, 85, 85);\n  font-family: Founders;\n  text-align: center;\n  margin: 0;\n  line-height: 1.5em;\n}\n\nh1{\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 1.4px;\n  margin: 20px 0;\n  font-family: Bureau, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nh2{\n  font-weight: 400;\n  text-align: center;\n  font-family: FoundersBold, sans-serif;\n}\n\np {\n  font-size: 20px;\n}\n\nul{\n  padding-left: 0px;\n  list-style: none;\n  display:flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n}\n\n.animatedHover{\n  transition: all 0.3s ease\n}\n\n.animatedHover:hover{\n  transition: all 0.3s ease;\n  transform: scale(1.02,1.02);\n}\n\n.emphasis {\n  color: var(--lightblue);\n  font-weight: bold;\n}\n\n.wrapper {\n  display: flex;\n  gap: 25px;\n  justify-content: center;\n  align-items: center;\n}\n\n.number {\n  background-color: var(--buttonblue);\n  font-weight: 1000;\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n@media (max-width: 768px){\n  h1, h2, p:not(.number) {\n    padding: 0 40px;\n  }\n  .caption {\n    font-size: 18px;\n  }\n}",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var l=o(n,i),c=0;c<r.length;c++){var d=t(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},313:(n,e,t)=>{n.exports=t.p+"857c02a693e4d8c19baa.otf"},61:(n,e,t)=>{n.exports=t.p+"933e46628e790c08cfba.otf"},833:(n,e,t)=>{n.exports=t.p+"cf04cce70a64e312dd43.otf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"e9a0bd4ea8b8e7893ef7.png",e=t.p+"3fe3ef135a15dd192135.png",o=t.p+"bd6fa4c54060ed65306b.ico";document.querySelector("#favicon").href=o;const i=document.querySelector("#menu-button");i.src=e,document.querySelector("#Logo").src=n;const r=document.querySelector("#slim-nav"),a=document.querySelectorAll("#slim-nav > li");a.forEach((n=>n.classList.add("hidden"))),i.addEventListener("click",(()=>{r.classList.toggle("hidden"),r.classList.toggle("active"),a.forEach((n=>n.classList.toggle("hidden"))),a.forEach((n=>n.classList.toggle("active")))})),document.querySelector("#contact").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")}));document.querySelector("#embark").addEventListener("click",(()=>{window.open("https://calendly.com/caltutorsteam/30min")})),document.querySelector("#social-icons li:nth-child(1) svg").addEventListener("click",(()=>{window.open("https://www.instagram.com/luminatutors/")})),document.querySelector("#social-icons li:nth-child(2)>svg").addEventListener("click",(()=>{window.open("mailto:caltutorsteam@gmail.com")})),document.querySelector("#social-icons li:nth-child(3)>svg").addEventListener("click",(()=>{window.open("https://www.facebook.com/profile.php?id=61562774625379&mibextid=LQQJ4d")}));var s=t(72),l=t.n(s),c=t(825),d=t.n(c),p=t(659),u=t.n(p),f=t(56),m=t.n(f),g=t(540),h=t.n(g),x=t(113),b=t.n(x),v=t(269),y={};y.styleTagTransform=b(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=h(),l()(v.A,y),v.A&&v.A.locals&&v.A.locals;var w=t(515),A={};A.styleTagTransform=b(),A.setAttributes=m(),A.insert=u().bind(null,"head"),A.domAPI=d(),A.insertStyleElement=h(),l()(w.A,A),w.A&&w.A.locals&&w.A.locals;var S=t(787),k={};k.styleTagTransform=b(),k.setAttributes=m(),k.insert=u().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=h(),l()(S.A,k),S.A&&S.A.locals&&S.A.locals;var z=t(383),E={};E.styleTagTransform=b(),E.setAttributes=m(),E.insert=u().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=h(),l()(z.A,E),z.A&&z.A.locals&&z.A.locals;var T=t(799),j={};j.styleTagTransform=b(),j.setAttributes=m(),j.insert=u().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=h(),l()(T.A,j),T.A&&T.A.locals&&T.A.locals;var L=t(945),q={};q.styleTagTransform=b(),q.setAttributes=m(),q.insert=u().bind(null,"head"),q.domAPI=d(),q.insertStyleElement=h(),l()(L.A,q),L.A&&L.A.locals&&L.A.locals,document.querySelector("main");const F=t.p+"fb6c21183f15ad9caab8.jpeg",I=t.p+"56dbbbac014de7e7660b.jpeg",P=t.p+"dcd029ef2503b27d0f71.jpeg";document.querySelector("#step1").src=F,document.querySelector("#step2").src=I,document.querySelector("#step3").src=P,document.querySelector("#contact-us").addEventListener("click",(()=>{window.open("https://forms.gle/uR35Wb4gU7EknXgn7")}))})()})();