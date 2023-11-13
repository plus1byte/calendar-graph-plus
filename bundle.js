!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){var r,i,c;r=n,i=e,c=o[e],(i=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}(i))in r?Object.defineProperty(r,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function r(t,e){if(null!=t)if("string"==typeof t||"number"==typeof t)e.push(t.toString());else if(Array.isArray(t))for(var n=0;n<t.length;n++)r(t[n],e);else e.push(t)}function o(t,e){for(var o=[],i=arguments.length,c=new Array(i>2?i-2:0),a=2;a<i;a++)c[a-2]=arguments[a];return r(c,o),"function"==typeof t?t(n(n({},e),{},{children:o})):{tag:t,props:e,children:o}}var i=864e5;function c(t,e){var n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((r-n)/i)}function a(){}function l(){var t=new Date;return t.setHours(0,0,0,0,0),t}function u(){var t=l();return t.setFullYear(t.getFullYear()-1),t}var s=["#eee","#c6e48b","#7bc96f","#239a3b","#196127"];function f(t){return t.count?t.count>45?s[4]:t.count>30?s[3]:t.count>15?s[2]:s[1]:s[0]}function p(t){return t>9?"".concat(t):"0".concat(t)}function y(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"".concat(e,"-").concat(p(n),"-").concat(p(r))}function b(t){var e=t.values,n=t.size,r=t.space,i=t.padX,c=t.padY,a=t.colorFun,l=t.onClick,u=t.onHover;return o("g",null,e.map((function(t,e){var s=n+2*r,f=i+e*s+r,p=c+r;return o("g",{transform:"translate(".concat(f,")")},t.map((function(t){return o("rect",{class:"cg-day",y:t.day*s+p,rx:"2",ry:"2",width:n,height:n,fill:a(t),"data-postion":f,"data-count":t.count,"data-date":y(t.date),onClick:function(){return l(t)},onMouseOver:function(){return u(t)}})})),new Array(7-t.length).fill("block").map((function(e,r){return o("rect",{class:"cg-day",x:"0",y:(t.length+r)*s+p,rx:"2",ry:"2",width:n,height:n,fill:"#fff","data-postion":f})})))})))}var g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function v(t){var e=t.styles,n=t.values,r=t.size,i=t.space,c=t.padX,a=t.padY,l=t.customMonths;l.length>0&&l.length<g.length&&(l=[],console.info("`customMonths` should include 12 months."));var u=r+2*i,s=2*u,f=[];return n.forEach((function(t,e){t.forEach((function(t,n){if(0===n&&0===t.day){var r=t.date.getMonth(),o=e*u+c+i,a=f.slice(-1).pop();(!a||r!==a.month&&o-a.x>s)&&f.push({month:r,x:o})}}))})),o("g",null,f.map((function(t,n){return o("text",{key:n,x:t.x,y:a/2,style:e.text},l.length>0?l[t.month]:g[t.month])})))}function h(t){var e=t.styles,n=t.size,r=t.space,i=t.padX,c=t.padY,a=n+2*r,l=a/2;return o("g",null,[{v:"M",y:c+1*a+l},{v:"W",y:c+3*a+l},{v:"F",y:c+5*a+l}].map((function(t,n){return o("text",{key:n,x:i/2,y:t.y,style:e.text2},t.v)})))}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){for(var e=t.data,n=void 0===e?[]:e,r=t.onClick,i=void 0===r?a:r,s=t.colorFun,p=void 0===s?f:s,g=t.startDate,d=void 0===g?u():g,m=t.endDate,j=void 0===m?l():m,w=t.size,S=void 0===w?12:w,P=t.space,k=void 0===P?1:P,x=t.padX,D=void 0===x?20:x,E=t.padY,C=void 0===E?20:E,M=t.styleOptions,T=void 0===M?{}:M,B=t.showDayTitles,A=void 0===B||B,F=t.showMonths,Y=void 0===F||F,R=t.customMonths,z=void 0===R?[]:R,L=t.onHover,X=void 0===L?a:L,$=[],H=c(d,j),N=n.reduce((function(t,e){return t[e.date]=e.count,t}),{}),q=0,I=0;I<=H;I+=1){var J=new Date(d);J.setDate(J.getDate()+I);var U=J.getDay(),W=N[y(J)]||0;(0===U&&0!==I||0===I)&&($.push([]),q+=1),$[q-1].push({count:W,date:J,day:U})}var G=S+2*k,K=q*G+2*D,Q=7*G+C+10,V="0 0 ".concat(K," ").concat(Q),Z=function(t){var e=t.background,n=void 0===e?"#fff":e,r=t.textColor,o=void 0===r?"#959494":r,i=t.fontSize,c=void 0===i?"12px":i,a=t.fontFamily,l={fill:o,"font-size":c,"font-family":void 0===a?'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif':a,"dominant-baseline":"central"};return{background:n,text:l,text2:O(O({},l),{},{"text-anchor":"middle"})}}(T),_={styles:Z,values:$,size:S,space:k,colorFun:p,padX:D,padY:C,onClick:i,onHover:X,customMonths:z};return o("svg",{width:K,height:Q,viewBox:V},o("rect",{x:0,y:0,width:K,height:Q,fill:Z.background}),o(b,_),Y&&o(v,_),A&&o(h,_))}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}var S=document;function P(t,e){var n=t.tag,r=t.props,o=t.children,i=S.createElementNS("http://www.w3.org/2000/svg",n);return r&&function(t,e){Object.keys(e).forEach((function(n){var r=e[n];"style"===n&&"object"===w(r)?Object.keys(r).forEach((function(e){t.style[e]=r[e]})):"onClick"===n?"function"==typeof r&&t.addEventListener("click",r):"onMouseOver"===n?"function"==typeof r&&t.addEventListener("mouseover",r):t.setAttribute(n,r)}))}(i,r),o.forEach((function(t){t&&i.appendChild("string"==typeof t?S.createTextNode(t):P(t,e))})),i}function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x.apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=M(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,M(r.key),r)}}function M(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var T=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom="string"==typeof e?document.querySelector(e):e,this.data=n,this.options=r,this.render()}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=E(E({},this.options),t),this.render()}},{key:"render",value:function(){var t=this.data,e=this.options;this.tree&&this.dom.removeChild(this.tree),this.tree=P(o(j,x({data:t},e))),this.dom.appendChild(this.tree)}}],n&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t,e,n){var r=t.tag,o=t.props,i=t.children;if("svg"===r){var c=o.width,a=o.height;e.width=c,e.height=a}if("rect"===r){var l=o["data-position"],u=o.y,s=o.width,f=o.height,p=o.fill,y=o.onClick;e.beginPath(),e.moveTo(l,u),e.lineTo(l+s,u),e.lineTo(l+s,u+f),e.lineTo(l,u+f),e.lineTo(l,u),n&&y&&e.isPointInPath(n.x,n.y)&&y(),e.closePath(),p&&(e.fillStyle=p),e.fill()}if("text"===r){var b=o.x,g=o.y,v=o.style;v&&(e.fillStyle=v.fill,e.textBaseline={central:"middle",middle:"middle",hanging:"hanging",alphabetic:"alphabetic",ideographic:"ideographic"}[v["dominant-baseline"]]||"alphabetic",e.textAlign={start:"start",middle:"center",end:"end"}[v["text-anchor"]]||"start",e.font="".concat(v["font-weight"]||""," ").concat(v["font-size"]," ").concat(v["font-family"])),e.fillText(i.join(""),b,g)}i.forEach((function(t){"string"!=typeof t&&B(t,e,n)}))}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function F(){return F=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F.apply(this,arguments)}function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=L(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,L(r.key),r)}}function L(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}var X=function(){function t(e,n){var r,o,i,c,a,l=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=(o="string"==typeof(r=e)?document.querySelector(r):r,c=(i=o.getContext("2d")).webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1,a=(window.devicePixelRatio||1)/c,["width","height"].forEach((function(t){Object.defineProperty(i,t,{get:function(){return o[t]/a},set:function(e){o[t]=e*a,o.style[t]="".concat(e,"px"),i.scale(a,a)},enumerable:!0,configurable:!0})})),o.addEventListener("click",(function(t){if(i.onClick){var e=o.getBoundingClientRect();i.onClick({x:(t.clientX-e.left)*a,y:(t.clientY-e.top)*a})}})),i),this.data=n,this.options=u,this.render(),this.ctx.onClick=function(t){return l.render(t)}}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=R(R({},this.options),t),this.render()}},{key:"render",value:function(t){B(o(j,F({data:this.data},this.options)),this.ctx,t)}}],n&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function H(t,e){var n=t.tag,r=t.props,o=t.children,i=[];return i.push("<".concat(n)),Object.keys(r||{}).forEach((function(t){var e=r[t];"onClick"!==t&&("style"===t&&"object"===$(e)&&(e=Object.keys(e).map((function(t){return"".concat(t,":").concat(e[t],";")})).join("")),i.push(" ".concat(t,'="').concat(String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"),'"')))})),o&&o.length?(i.push(">"),o.forEach((function(t){"string"==typeof t?i.push(String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")):i.push(H(t,e))})),i.push("</".concat(n,">")),i.join("")):(i.push(" />"),i.join(""))}function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function q(){return q=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},q.apply(this,arguments)}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=W(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,W(r.key),r)}}function W(t){var e=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===N(e)?e:String(e)}var G,K=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.options=n}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t}},{key:"setOptions",value:function(t){this.options=J(J({},this.options),t)}},{key:"render",value:function(){return H(o(j,q({data:this.data},this.options)))}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Q=function(){for(var t=l(),e=u(),n=c(e,t),r=[],o=0;o<=n;o++){var i=new Date(e);i.setDate(i.getDate()+o);var a=y(i),s=Math.floor(50*Math.random());r.push({date:a,count:s})}return r}(),V={styleOptions:{background:"transparent"},onClick:function(t){console.log(t)}},Z=(new T("#svg",Q,V),new X("#canvas",Q,V),new K(Q,V));G=document.querySelector("#str"),console.log(Z.render()),G.textContent=function(t){for(var e="",n=(t=t.replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2")).split("\n"),r=0,o="other",i={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},c=0;c<n.length;c++){var a=n[c];if(a.match(/\s*<\?xml/))e+=a+"\n";else{var l=Boolean(a.match(/<.+\/>/)),u=Boolean(a.match(/<\/.+>/)),s=Boolean(a.match(/<[^!].*>/)),f=l?"single":u?"closing":s?"opening":"other",p=o+"->"+f;o=f;var y="";r+=i[p];for(var b=0;b<r;b++)y+="  ";"opening->closing"==p?e=e.substr(0,e.length-1)+a+"\n":e+=y+a+"\n"}}return e}(Z.render()),function(){for(var t=document.getElementById("tooltip"),e=document.getElementsByClassName("cg-day"),n=function(e){var n=(e=e||window.event).target||e.srcElement,r=n.getBoundingClientRect(),o=n.getAttribute("data-count"),i=n.getAttribute("data-date");t.style.display="block",t.textContent="".concat(o," contributions on ").concat(i);var c=t.getBoundingClientRect().width;t.style.left="".concat(r.left-c/2+6,"px"),t.style.top="".concat(r.top-35,"px")},r=function(e){e=e||window.event,t.style.display="none"},o=0;o<e.length;o++)document.body.addEventListener?(e[o].addEventListener("mouseover",n,!1),e[o].addEventListener("mouseout",r,!1)):(e[o].attachEvent("onmouseover",n),e[o].attachEvent("onmouseout",r))}()}();