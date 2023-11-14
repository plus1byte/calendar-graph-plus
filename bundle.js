!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function n(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){var o,i,c;o=n,i=e,c=r[e],(i=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}(i))in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function o(t,e){if(null!=t)if("string"==typeof t||"number"==typeof t)e.push(t.toString());else if(Array.isArray(t))for(var n=0;n<t.length;n++)o(t[n],e);else e.push(t)}function r(t,e){for(var r=[],i=arguments.length,c=new Array(i>2?i-2:0),a=2;a<i;a++)c[a-2]=arguments[a];return o(c,r),"function"==typeof t?t(n(n({},e),{},{children:r})):{tag:t,props:e,children:r}}var i=864e5;function c(t,e){var n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),o=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((o-n)/i)}function a(){}function l(){var t=new Date;return t.setHours(0,0,0,0,0),t}function u(){var t=l();return t.setFullYear(t.getFullYear()-1),new Date(864e5*(7-t.getDay())+t.getTime())}var s=["#f4f5f5","#daf6ea","#c7f0df","#82edc0","#0bd07d"];function f(t){return t.count?t.count>45?s[4]:t.count>30?s[3]:t.count>15?s[2]:s[1]:s[0]}function p(t){return t>9?"".concat(t):"0".concat(t)}function y(t){var e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate();return"".concat(e,"-").concat(p(n),"-").concat(p(o))}function b(t){var e=t.values,n=t.size,o=t.space,i=t.padX,c=t.padY,a=t.colorFun,l=t.onClick,u=t.onHover,s=t.monthsPosition,f=n+2*o,p=c+o;return"bottom"===s&&(p=c/2),r("g",null,e.map((function(t,e){var c=i+e*f+o;return r("g",null,t.map((function(t){return r("rect",{class:"node",x:c,y:t.day*f+p,rx:"2",ry:"2",width:n,height:n,fill:a(t),"data-count":t.count,"data-date":y(t.date),onClick:function(){return l(t)},onMouseOver:function(){return u(t)}})})),new Array(7-t.length).fill("block").map((function(e,o){return r("rect",{class:"node",x:c,y:(t.length+o)*f+p,rx:"2",ry:"2",width:n,height:n,fill:"#fff",stroke:"#f4f5f5","stroke-width":"1px"})})))})))}var h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function g(t){var e=t.styles,n=t.values,o=t.size,i=t.space,c=t.padX,a=t.padY,l=t.customMonths,u=t.monthsPosition;l.length>0&&l.length<h.length&&(l=[],console.info("`customMonths` should include 12 months."));var s=o+2*i,f=2*s,p=[],y=a/2;return n.forEach((function(t,e){t.forEach((function(t,n){if(0===n&&0===t.day){var o=t.date.getMonth(),r=e*s+c+i,a=p.slice(-1).pop();(!a||o!==a.month&&r-a.x>f)&&p.push({month:o,x:r})}}))})),"bottom"===u&&(y=7*s+a-i),r("g",null,p.map((function(t,n){return r("text",{key:n,x:t.x,y:y,style:e.text},l.length>0?l[t.month]:h[t.month])})))}function v(t){var e=t.styles,n=t.size,o=t.space,i=t.padX,c=t.padY,a=n+2*o,l=a/2;return"bottom"===t.monthsPosition&&(l-=o+c/2),r("g",null,[{v:"M",y:c+1*a+l},{v:"W",y:c+3*a+l},{v:"F",y:c+5*a+l}].map((function(t,n){return r("text",{key:n,x:i/2,y:t.y,style:e.text2},t.v)})))}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){var o,r,i;o=t,r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}(r))in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){for(var e=t.data,n=void 0===e?[]:e,o=t.onClick,i=void 0===o?a:o,s=t.colorFun,p=void 0===s?f:s,h=t.startDate,d=void 0===h?u():h,m=t.endDate,j=void 0===m?l():m,w=t.size,P=void 0===w?12:w,S=t.space,k=void 0===S?1:S,x=t.padX,D=void 0===x?20:x,E=t.padY,C=void 0===E?20:E,M=t.monthsPosition,T=void 0===M?"top":M,B=t.styleOptions,A=void 0===B?{}:B,F=t.showDayTitles,Y=void 0===F||F,I=t.showMonths,R=void 0===I||I,z=t.customMonths,L=void 0===z?[]:z,X=t.onHover,$=void 0===X?a:X,H=[],N=c(d,j),q=n.reduce((function(t,e){return t[e.date]=e.count,t}),{}),J=0,U=0;U<=N;U+=1){var W=new Date(d);W.setDate(W.getDate()+U);var G=W.getDay(),K=q[y(W)]||0;(0===G&&0!==U||0===U)&&(H.push([]),J+=1),H[J-1].push({count:K,date:W,day:G})}var Q=P+2*k,V=J*Q+2*D,Z=7*Q+C+10,_="0 0 ".concat(V," ").concat(Z),tt=function(t){var e=t.background,n=void 0===e?"#fff":e,o=t.textColor,r=void 0===o?"#959494":o,i=t.fontSize,c=void 0===i?"12px":i,a=t.fontFamily,l={fill:r,"font-size":c,"font-family":void 0===a?'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif':a,"dominant-baseline":"central"};return{background:n,text:l,text2:O(O({},l),{},{"text-anchor":"middle"})}}(A),et={styles:tt,values:H,size:P,space:k,colorFun:p,padX:D,padY:C,onClick:i,onHover:$,customMonths:L,monthsPosition:T};return r("svg",{width:V,height:Z,viewBox:_},r("rect",{x:0,y:0,width:V,height:Z,fill:tt.background}),r(b,et),R&&r(g,et),Y&&r(v,et))}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}var P=document;function S(t,e){var n=t.tag,o=t.props,r=t.children,i=P.createElementNS("http://www.w3.org/2000/svg",n);return o&&function(t,e){Object.keys(e).forEach((function(n){var o=e[n];"style"===n&&"object"===w(o)?Object.keys(o).forEach((function(e){t.style[e]=o[e]})):"onClick"===n?"function"==typeof o&&t.addEventListener("click",o):"onMouseOver"===n?"function"==typeof o&&t.addEventListener("mouseover",o):t.setAttribute(n,o)}))}(i,o),r.forEach((function(t){t&&i.appendChild("string"==typeof t?P.createTextNode(t):S(t,e))})),i}function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},x.apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){var o,r,i;o=t,r=e,i=n[e],(r=M(r))in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,M(o.key),o)}}function M(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var T=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom="string"==typeof e?document.querySelector(e):e,this.data=n,this.options=o,this.render()}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=E(E({},this.options),t),this.render()}},{key:"render",value:function(){var t=this.data,e=this.options;this.tree&&this.dom.removeChild(this.tree),this.tree=S(r(j,x({data:t},e))),this.dom.appendChild(this.tree)}}],n&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t,e,n){var o=t.tag,r=t.props,i=t.children;if("svg"===o){var c=r.width,a=r.height;e.width=c,e.height=a}if("rect"===o){var l=r.x,u=r.y,s=r.width,f=r.height,p=r.fill,y=r.stroke,b=r.onClick;e.beginPath(),e.moveTo(l+2,u),e.lineTo(l+s-2,u),e.arc(l+s-2,u+2,2,1.5*Math.PI,2*Math.PI),e.lineTo(l+s,u+f-2),e.arc(l+s-2,u+f-2,2,0,.5*Math.PI),e.lineTo(l+2,u+f),e.arc(l+2,u+f-2,2,.5*Math.PI,Math.PI),e.lineTo(l,u+2),e.arc(l+2,u+2,2,Math.PI,1.5*Math.PI),n&&b&&e.isPointInPath(n.x,n.y)&&b(),e.closePath(),p&&(e.fillStyle=p,e.fill()),y&&(e.strokeStyle=y,e.lineWidth=1,e.stroke())}if("text"===o){var h=r.x,g=r.y,v=r.style;v&&(e.fillStyle=v.fill,e.textBaseline={central:"middle",middle:"middle",hanging:"hanging",alphabetic:"alphabetic",ideographic:"ideographic"}[v["dominant-baseline"]]||"alphabetic",e.textAlign={start:"start",middle:"center",end:"end"}[v["text-anchor"]]||"start",e.font="".concat(v["font-weight"]||""," ").concat(v["font-size"]," ").concat(v["font-family"])),e.fillText(i.join(""),h,g)}i.forEach((function(t){"string"!=typeof t&&B(t,e,n)}))}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function F(){return F=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},F.apply(this,arguments)}function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){var o,r,i;o=t,r=e,i=n[e],(r=z(r))in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,z(o.key),o)}}function z(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==A(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}var L=function(){function t(e,n){var o,r,i,c,a,l=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=(r="string"==typeof(o=e)?document.querySelector(o):o,c=(i=r.getContext("2d")).webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1,a=(window.devicePixelRatio||1)/c,["width","height"].forEach((function(t){Object.defineProperty(i,t,{get:function(){return r[t]/a},set:function(e){r[t]=e*a,r.style[t]="".concat(e,"px"),i.scale(a,a)},enumerable:!0,configurable:!0})})),r.addEventListener("click",(function(t){if(i.onClick){var e=r.getBoundingClientRect();i.onClick({x:(t.clientX-e.left)*a,y:(t.clientY-e.top)*a})}})),i),this.data=n,this.options=u,this.render(),this.ctx.onClick=function(t){return l.render(t)}}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=I(I({},this.options),t),this.render()}},{key:"render",value:function(t){B(r(j,F({data:this.data},this.options)),this.ctx,t)}}],n&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function $(t,e){var n=t.tag,o=t.props,r=t.children,i=[];return i.push("<".concat(n)),Object.keys(o||{}).forEach((function(t){var e=o[t];"onClick"!==t&&("style"===t&&"object"===X(e)&&(e=Object.keys(e).map((function(t){return"".concat(t,":").concat(e[t],";")})).join("")),i.push(" ".concat(t,'="').concat(String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"),'"')))})),r&&r.length?(i.push(">"),r.forEach((function(t){"string"==typeof t?i.push(String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")):i.push($(t,e))})),i.push("</".concat(n,">")),i.join("")):(i.push(" />"),i.join(""))}function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},N.apply(this,arguments)}function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){var o,r,i;o=t,r=e,i=n[e],(r=W(r))in o?Object.defineProperty(o,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,W(o.key),o)}}function W(t){var e=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==H(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===H(e)?e:String(e)}var G=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.options=n}var e,n;return e=t,n=[{key:"setData",value:function(t){this.data=t}},{key:"setOptions",value:function(t){this.options=J(J({},this.options),t)}},{key:"render",value:function(){return $(r(j,N({data:this.data},this.options)))}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),K=function(){for(var t=l(),e=u(),n=c(e,t),o=[],r=0;r<=n;r++){var i=new Date(e);i.setDate(i.getDate()+r);var a=y(i),s=Math.floor(50*Math.random());o.push({date:a,count:s})}return o}(),Q={space:3,monthsPosition:"bottom",styleOptions:{background:"transparent"},onClick:function(t){console.log(t)}},V=(new T("#svg",K,Q),new L("#canvas",K,Q),new G(K,Q));document.querySelector("#str").textContent=function(t){for(var e="",n=(t=t.replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2")).split("\n"),o=0,r="other",i={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},c=0;c<n.length;c++){var a=n[c];if(a.match(/\s*<\?xml/))e+=a+"\n";else{var l=Boolean(a.match(/<.+\/>/)),u=Boolean(a.match(/<\/.+>/)),s=Boolean(a.match(/<[^!].*>/)),f=l?"single":u?"closing":s?"opening":"other",p=r+"->"+f;r=f;var y="";o+=i[p];for(var b=0;b<o;b++)y+="  ";"opening->closing"==p?e=e.substr(0,e.length-1)+a+"\n":e+=y+a+"\n"}}return e}(V.render()),function(){for(var t=document.getElementById("tooltip"),e=document.getElementsByClassName("node"),n=function(e){var n=(e=e||window.event).target||e.srcElement,o=n.getBoundingClientRect(),r=n.getAttribute("data-count"),i=n.getAttribute("data-date");t.style.display="block",t.textContent="".concat(r," contributions on ").concat(i);var c=t.getBoundingClientRect().width;t.style.left="".concat(o.left-c/2+6,"px"),t.style.top="".concat(o.top-35,"px")},o=function(e){e=e||window.event,t.style.display="none"},r=0;r<e.length;r++)document.body.addEventListener?(e[r].addEventListener("mouseover",n,!1),e[r].addEventListener("mouseout",o,!1)):(e[r].attachEvent("onmouseover",n),e[r].attachEvent("onmouseout",o))}()}();