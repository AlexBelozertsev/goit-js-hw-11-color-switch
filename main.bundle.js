!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=document.querySelector('button[data-action="start"]'),o=document.querySelector('button[data-action="stop"]'),u=document.querySelector("body"),l=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];c(r,"enabled");const i={intervalId:null,start(){d(r,"enabled"),c(r,"disabled"),this.intervalId=setInterval(()=>{u.style.backgroundColor=""+l[a(0,l.length-1)]},1e3)},stop(){clearInterval(this.intervalId),this.intervalId=null,d(r,"disabled"),c(r,"enabled")}},a=(t,e)=>Math.floor(Math.random()*(e-t+1)+t);function c(t,e){return t.setAttribute(e,"")}function d(t,e){return t.removeAttribute(e)}r.addEventListener("click",i.start.bind(i)),o.addEventListener("click",i.stop.bind(i))}]);
//# sourceMappingURL=main.bundle.js.map