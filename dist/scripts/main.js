"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){if("undefined"!=typeof window&&window.addEventListener){var e,t,n,v=Object.create(null),w=function(){clearTimeout(t),t=setTimeout(e,100)},_=function(){},E="http://www.w3.org/1999/xlink";e=function(){var e,t,n,i,o,r,a,s,l,d,c,u,f,h=0;function p(){var e;0===--h&&(_(),window.addEventListener("resize",w,!1),window.addEventListener("orientationchange",w,!1),_=window.MutationObserver?((e=new MutationObserver(w)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),function(){try{e.disconnect(),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",w,!1),function(){document.documentElement.removeEventListener("DOMSubtreeModified",w,!1),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}))}function m(e){return function(){!0!==v[e.base]&&(e.useEl.setAttributeNS(E,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function g(i){return function(){var e,t=document.body,n=document.createElement("x");i.onload=null,n.innerHTML=i.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),p()}}function b(e){return function(){e.onerror=null,e.ontimeout=null,p()}}for(_(),s=document.getElementsByTagName("use"),o=0;o<s.length;o+=1){try{t=s[o].getBoundingClientRect()}catch(e){t=!1}e=(a=(i=s[o].getAttribute("href")||s[o].getAttributeNS(E,"href")||s[o].getAttribute("xlink:href"))&&i.split?i.split("#"):["",""])[0],n=a[1],r=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!r?(s[o].hasAttribute("href")&&s[o].setAttributeNS(E,"xlink:href",i),e.length&&(!0!==(l=v[e])&&setTimeout(m({useEl:s[o],base:e,hash:n}),0),void 0===l&&(d=e,f=u=c=void 0,window.XMLHttpRequest&&(c=new XMLHttpRequest,u=y(location),f=y(d),c=void 0===c.withCredentials&&""!==f&&f!==u?XDomainRequest||void 0:XMLHttpRequest),void 0!==c&&(l=new c,(v[e]=l).onload=g(l),l.onerror=b(l),l.ontimeout=b(l),l.open("GET",e),l.send(),h+=1)))):r?e.length&&v[e]&&setTimeout(m({useEl:s[o],base:e,hash:n}),0):void 0===v[e]?v[e]=!0:v[e].onload&&(v[e].abort(),delete v[e].onload,v[e]=!0)}function y(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}s="",h+=1,p()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}(),function(){if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),i=!!e&&16<=parseInt(e[1],10);if("objectFit"in document.documentElement.style==0||i){var d=function(e,t,n){var i,o,r,a,s;if((n=n.split(" ")).length<2&&(n[1]=n[0]),"x"===e)i=n[0],o=n[1],r="left",a="right",s=t.clientWidth;else{if("y"!==e)return;i=n[1],o=n[0],r="top",a="bottom",s=t.clientHeight}if(i!==r&&o!==r){if(i!==a&&o!==a)return"center"===i||"50%"===i?(t.style[r]="50%",void(t.style["margin-"+r]=s/-2+"px")):void(0<=i.indexOf("%")?(i=parseInt(i))<50?(t.style[r]=i+"%",t.style["margin-"+r]=s*(i/-100)+"px"):(i=100-i,t.style[a]=i+"%",t.style["margin-"+a]=s*(i/-100)+"px"):t.style[r]=i);t.style[a]="0"}else t.style[r]="0"},o=function(e){var t=e.dataset?e.dataset.objectFit:e.getAttribute("data-object-fit"),n=e.dataset?e.dataset.objectPosition:e.getAttribute("data-object-position");t=t||"cover",n=n||"50% 50%";var i,o,r,a,s,l=e.parentNode;return i=l,o=window.getComputedStyle(i,null),r=o.getPropertyValue("position"),a=o.getPropertyValue("overflow"),s=o.getPropertyValue("display"),r&&"static"!==r||(i.style.position="relative"),"hidden"!==a&&(i.style.overflow="hidden"),s&&"inline"!==s||(i.style.display="block"),0===i.clientHeight&&(i.style.height="100%"),-1===i.className.indexOf("object-fit-polyfill")&&(i.className=i.className+" object-fit-polyfill"),function(e){var t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var i in n)t.getPropertyValue(i)!==n[i]&&(e.style[i]=n[i])}(e),e.style.position="absolute",e.style.width="auto",e.style.height="auto","scale-down"===t&&(t=e.clientWidth<l.clientWidth&&e.clientHeight<l.clientHeight?"none":"contain"),"none"===t?(d("x",e,n),void d("y",e,n)):"fill"===t?(e.style.width="100%",e.style.height="100%",d("x",e,n),void d("y",e,n)):(e.style.height="100%",void("cover"===t&&e.clientWidth>l.clientWidth||"contain"===t&&e.clientWidth<l.clientWidth?(e.style.top="0",e.style.marginTop="0",d("x",e,n)):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",d("y",e,n))))},t=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=_typeof(e)||!e.length||!e[0].nodeName)return!1;e=e}for(var t=0;t<e.length;t++)if(e[t].nodeName){var n=e[t].nodeName.toLowerCase();if("img"===n){if(i)continue;e[t].complete?o(e[t]):e[t].addEventListener("load",function(){o(this)})}else"video"!==n||0<e[t].readyState?o(e[t]):e[t].addEventListener("loadedmetadata",function(){o(this)})}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t(),window.addEventListener("resize",t),window.objectFitPolyfill=t}else window.objectFitPolyfill=function(){return!1}}}(),function(e){var t,n=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];function i(e,t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=e,this.dialog=e.querySelector('dialog, [role="dialog"], [role="alertdialog"]'),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(t)}function o(e){return Array.prototype.slice.call(e)}function r(e,t){return o((t||document).querySelectorAll(e))}function a(e){var t=s(e),n=e.querySelector("[autofocus]")||t[0];n&&n.focus()}function s(e){return r(n.join(","),e).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}i.prototype.create=function(e){var t,n;return this._targets=this._targets||function(e){if(NodeList.prototype.isPrototypeOf(e))return o(e);if(Element.prototype.isPrototypeOf(e))return[e];if("string"==typeof e)return r(e)}(e)||(t=this.container,(n=o(t.parentNode.childNodes).filter(function(e){return 1===e.nodeType})).splice(n.indexOf(t),1),n),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=r('[data-a11y-dialog-show="'+this.container.id+'"]'),this._openers.forEach(function(e){e.addEventListener("click",this._show)}.bind(this)),this._closers=r("[data-a11y-dialog-hide]",this.container).concat(r('[data-a11y-dialog-hide="'+this.container.id+'"]')),this._closers.forEach(function(e){e.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},i.prototype.show=function(e){return this.shown||(this.shown=!0,t=document.activeElement,this.useDialog?this.dialog.showModal(e instanceof Event?void 0:e):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(e){e.setAttribute("aria-hidden","true")})),a(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",e)),this},i.prototype.hide=function(e){return this.shown&&(this.shown=!1,this.useDialog?this.dialog.close(e instanceof Event?void 0:e):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(e){e.removeAttribute("aria-hidden")})),t&&t.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",e)),this},i.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(e){e.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(e){e.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},i.prototype.on=function(e,t){return void 0===this._listeners[e]&&(this._listeners[e]=[]),this._listeners[e].push(t),this},i.prototype.off=function(e,t){var n=this._listeners[e].indexOf(t);return-1<n&&this._listeners[e].splice(n,1),this},i.prototype._fire=function(e,t){(this._listeners[e]||[]).forEach(function(e){e(this.container,t)}.bind(this))},i.prototype._bindKeypress=function(e){var t,n,i,o;this.shown&&27===e.which&&"alertdialog"!==this.role&&(e.preventDefault(),this.hide()),this.shown&&9===e.which&&(t=this.dialog,n=e,i=s(t),o=i.indexOf(document.activeElement),n.shiftKey&&0===o?(i[i.length-1].focus(),n.preventDefault()):n.shiftKey||o!==i.length-1||(i[0].focus(),n.preventDefault()))},i.prototype._maintainFocus=function(e){this.shown&&!this.container.contains(e.target)&&a(this.dialog)},"undefined"!=typeof module&&void 0!==module.exports?module.exports=i:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return i}):"object"===_typeof(e)&&(e.A11yDialog=i)}("undefined"!=typeof global?global:window),function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).fitvids=e()}}(function(){return function r(a,s,l){function d(n,e){if(!s[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=s[n]={exports:{}};a[n][0].call(o.exports,function(e){var t=a[n][1][e];return d(t||e)},o,o.exports,r,a,s,l)}return s[n].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)d(l[e]);return d}({1:[function(e,t,n){var d=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"];function c(e,t){return"string"==typeof e&&(t=e,e=document),Array.prototype.slice.call(e.querySelectorAll(t))}function u(e){return"string"==typeof e?e.split(",").map(i).filter(f):(n=e,"[object Array]"===Object.prototype.toString.call(n)?(t=e.map(u).filter(f),[].concat.apply([],t)):e||[]);var t,n}function f(e){return 0<e.length}function i(e){return e.replace(/^\s+|\s+$/g,"")}t.exports=function(e,t){var n;t=t||{},n=e=e||"body","[object Object]"===Object.prototype.toString.call(n)&&(t=e,e="body"),t.ignore=t.ignore||"",t.players=t.players||"";var i=c(e);if(f(i)){var o;if(!document.getElementById("fit-vids-style"))(document.head||document.getElementsByTagName("head")[0]).appendChild(((o=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.childNodes[1]));var r=u(t.players),a=u(t.ignore),s=0<a.length?a.join():null,l=d.concat(r).join();f(l)&&i.forEach(function(e){c(e,l).forEach(function(e){s&&e.matches(s)||function(e){if(/fluid-width-video-wrapper/.test(e.parentNode.className))return;var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10),i=isNaN(t)?e.clientWidth:t,o=(isNaN(n)?e.clientHeight:n)/i;e.removeAttribute("width"),e.removeAttribute("height");var r=document.createElement("div");e.parentNode.insertBefore(r,e),r.className="fluid-width-video-wrapper",r.style.paddingTop=100*o+"%",r.appendChild(e)}(e)})})}}},{}]},{},[1])(1)}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():e.Tobi=t()}(this,function(){return function(e){var s={},t=window,l=0,o=null,i=null,r=null,a=null,d=null,c={},n=!1,u=!1,f=!1,h=null,p=null,m=null,g=null,b=null,y=!1,v=!1,w=[],_=[],E=0,A={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0},L={},x=null,S=null,N={image:{checkSupport:function(e){return!e.hasAttribute("data-type")&&e.href.match(/\.(png|jpe?g|tiff|tif|gif|bmp|webp|svg|ico)(\?.*)?$/i)},init:function(e,t){var n=document.createElement("figure"),i=document.createElement("figcaption"),o=document.createElement("img"),r=e.querySelector("img"),a=document.createElement("div");o.style.opacity="0",r&&(o.alt=r.alt||""),o.setAttribute("src",""),o.setAttribute("data-src",e.href),n.appendChild(o),s.captions&&(i.style.opacity="0","self"===s.captionsSelector&&e.getAttribute(s.captionAttribute)?i.textContent=e.getAttribute(s.captionAttribute):"img"===s.captionsSelector&&r&&r.getAttribute(s.captionAttribute)&&(i.textContent=r.getAttribute(s.captionAttribute)),i.textContent&&(i.id="tobi-figcaption-"+l,n.appendChild(i),o.setAttribute("aria-labelledby",i.id),++l)),t.appendChild(n),a.className="tobi-loader",a.setAttribute("role","progressbar"),a.setAttribute("aria-label",s.loadingIndicatorLabel),t.appendChild(a),t.setAttribute("data-type","image")},onPreload:function(e){N.image.onLoad(e)},onLoad:function(e){var t=e.querySelector("img");if(t.hasAttribute("data-src")){var n=e.querySelector("figcaption"),i=e.querySelector(".tobi-loader");t.onload=function(){e.removeChild(i),t.style.opacity="1",n&&(n.style.opacity="1")},t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")}},onLeave:function(){},onCleanup:function(){}},html:{checkSupport:function(e){return oe(e,"html")},init:function(e,t){var n=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target"),i=document.querySelector(n);if(!i)throw new Error("Ups, I can't find the target "+n+".");t.appendChild(i),t.setAttribute("data-type","html")},onPreload:function(){},onLoad:function(e){var t=e.querySelector("video");t&&(t.hasAttribute("data-time")&&0<t.readyState&&(t.currentTime=t.getAttribute("data-time")),s.autoplayVideo&&t.play())},onLeave:function(e){var t=e.querySelector("video");t&&(t.paused||t.pause(),0<t.readyState&&t.setAttribute("data-time",t.currentTime))},onCleanup:function(e){var t=e.querySelector("video");if(t&&0<t.readyState&&t.readyState<3&&t.duration!==t.currentTime){var n=t.cloneNode(!0);re(t),t.load(),t.parentNode.removeChild(t),e.appendChild(n)}}},iframe:{checkSupport:function(e){return oe(e,"iframe")},init:function(e,t){var n=document.createElement("iframe"),i=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target");n.setAttribute("frameborder","0"),n.setAttribute("src",""),n.setAttribute("data-src",i),e.getAttribute("data-width")&&(n.style.maxWidth=e.getAttribute("data-width")+"px"),e.getAttribute("data-height")&&(n.style.maxHeight=e.getAttribute("data-height")+"px"),t.appendChild(n),t.setAttribute("data-type","iframe")},onPreload:function(){},onLoad:function(e){var t=e.querySelector("iframe");t.setAttribute("src",t.getAttribute("data-src"))},onLeave:function(){},onCleanup:function(){}},youtube:{checkSupport:function(e){return oe(e,"youtube")},init:function(e,t){var n=document.createElement("div");t.appendChild(n),_[E]=new window.YT.Player(n,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",E),t.setAttribute("data-type","youtube"),E++},onPreload:function(){},onLoad:function(e){s.autoplayVideo&&_[e.getAttribute("data-player")].playVideo()},onLeave:function(e){1===_[e.getAttribute("data-player")].getPlayerState()&&_[e.getAttribute("data-player")].pauseVideo()},onCleanup:function(e){1===_[e.getAttribute("data-player")].getPlayerState()&&_[e.getAttribute("data-player")].pauseVideo()}}};Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]];return i});function T(e){return e.hasAttribute("data-group")?e.getAttribute("data-group"):"default"}function C(e,t){var n=T(e);if(-1!==L[n].gallery.indexOf(e)){var i=L[n].gallery.indexOf(e),o=L[n].sliderElements[i];if(L[n].elementsLength--,s.zoom&&e.querySelector(".tobi-zoom__icon")){var r=e.querySelector(".tobi-zoom__icon");r.parentNode.classList.remove("tobi-zoom"),r.parentNode.removeChild(r)}e.removeEventListener("click",ee),o.parentNode.removeChild(o),le()&&n===S&&(ae(),se()),t&&t.call(this)}}function k(e,t){if(S=null!==S?S:x,le()||e||(e=0),le()){if(!e)throw new Error("Ups, Tobi is aleady open.");if(e===L[S].currentIndex)throw new Error("Ups, slide "+e+" is already selected.")}if(-1===e||e>=L[S].elementsLength)throw new Error("Ups, I can't find slide "+e+".");s.hideScrollbar&&(document.documentElement.classList.add("tobi-is-open"),document.body.classList.add("tobi-is-open")),ae(),s.close||(a.disabled=!1,a.setAttribute("aria-hidden","true")),h=document.activeElement,L[S].currentIndex=e,Z(),ne(),G(L[S].currentIndex),o.setAttribute("aria-hidden","false"),se(),K(L[S].currentIndex+1),K(L[S].currentIndex-1),t&&t.call(this)}function q(e){if(!le())throw new Error("Tobi is already closed.");s.hideScrollbar&&(document.documentElement.classList.remove("tobi-is-open"),document.body.classList.remove("tobi-is-open")),ie(),h.focus();var t=L[S].sliderElements[L[S].currentIndex].querySelector(".tobi__slider__slide__content"),n=t.getAttribute("data-type");N[n].onLeave(t),N[n].onCleanup(t),o.setAttribute("aria-hidden","true"),L[S].currentIndex=0,e&&e.call(this)}function I(e){0<L[S].currentIndex&&(J(L[S].currentIndex),G(--L[S].currentIndex),se("left"),$(L[S].currentIndex+1),K(L[S].currentIndex-1),e&&e.call(this))}function O(e){L[S].currentIndex<L[S].elementsLength-1&&(J(L[S].currentIndex),G(++L[S].currentIndex),se("right"),$(L[S].currentIndex-1),K(L[S].currentIndex+1),e&&e.call(this))}function j(){var e=c.endX-c.startX,t=c.endY-c.startY,n=Math.abs(e),i=Math.abs(t);(0<e&&n>s.threshold&&0<L[S].currentIndex?I:e<0&&n>s.threshold&&L[S].currentIndex!==L[S].elementsLength-1?O:t<0&&i>s.threshold&&s.swipeClose?q:Q)()}function P(e){e.target===i?I():e.target===r?O():(e.target===a||"tobi__slider__slide"===e.target.className&&s.docClose)&&q(),e.stopPropagation()}function M(e){9===e.keyCode||"Tab"===e.code?e.shiftKey?document.activeElement===p&&(m.focus(),e.preventDefault()):document.activeElement===m&&(p.focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),q()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),I()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),O())}function D(e){ce(e.target)||(e.stopPropagation(),f=!0,c.startX=e.touches[0].pageX,c.startY=e.touches[0].pageY,L[S].slider.classList.add("tobi__slider--is-dragging"))}function X(e){e.stopPropagation(),f&&(e.preventDefault(),c.endX=e.touches[0].pageX,c.endY=e.touches[0].pageY,te())}function Y(e){e.stopPropagation(),f=!1,L[S].slider.classList.remove("tobi__slider--is-dragging"),c.endX&&(u=n=!1,j()),Z()}function z(e){ce(e.target)||(e.preventDefault(),e.stopPropagation(),f=!0,c.startX=e.pageX,c.startY=e.pageY,L[S].slider.classList.add("tobi__slider--is-dragging"))}function B(e){e.preventDefault(),f&&(c.endX=e.pageX,c.endY=e.pageY,te())}function H(e){e.stopPropagation(),f=!1,L[S].slider.classList.remove("tobi__slider--is-dragging"),c.endX&&(u=n=!1,j()),Z()}var W=function(e,t){if(null===document.querySelector('[data-type="youtube"]')||v)F(e,t);else{if(null===document.getElementById("iframe_api")){var n=document.createElement("script"),i=document.getElementsByTagName("script")[0];n.id="iframe_api",n.src="https://www.youtube.com/iframe_api",i.parentNode.insertBefore(n,i)}-1===w.indexOf(e)&&w.push(e),window.onYouTubePlayerAPIReady=function(){Array.prototype.forEach.call(w,function(e){F(e,t)}),v=!0}}},F=function(e,t){var n;if(x=T(e),Object.prototype.hasOwnProperty.call(L,x)||(L[x]=(n=A,JSON.parse(JSON.stringify(n))),U()),-1!==L[x].gallery.indexOf(e))throw new Error("Ups, element already added to the lightbox.");if(L[x].gallery.push(e),L[x].elementsLength++,s.zoom&&e.querySelector("img")){var i=document.createElement("div");i.className="tobi-zoom__icon",i.innerHTML=s.zoomText,e.classList.add("tobi-zoom"),e.appendChild(i)}e.addEventListener("click",ee),R(e),le()&&x===S&&(ae(),se()),t&&t.call(this)},V=function(){(o=document.createElement("div")).setAttribute("role","dialog"),o.setAttribute("aria-hidden","true"),o.className="tobi",(i=document.createElement("button")).className="tobi__prev",i.setAttribute("type","button"),i.setAttribute("aria-label",s.navLabel[0]),i.innerHTML=s.navText[0],o.appendChild(i),(r=document.createElement("button")).className="tobi__next",r.setAttribute("type","button"),r.setAttribute("aria-label",s.navLabel[1]),r.innerHTML=s.navText[1],o.appendChild(r),(a=document.createElement("button")).className="tobi__close",a.setAttribute("type","button"),a.setAttribute("aria-label",s.closeLabel),a.innerHTML=s.closeText,o.appendChild(a),(d=document.createElement("div")).className="tobi__counter",o.appendChild(d),t.addEventListener("resize",function(){y||(y=!0,t.requestAnimationFrame(function(){Q(),y=!1}))}),document.body.appendChild(o)},U=function(){L[x].slider=document.createElement("div"),L[x].slider.className="tobi__slider",o.appendChild(L[x].slider)},R=function(e){for(var t in N)if(Object.prototype.hasOwnProperty.call(N,t)&&N[t].checkSupport(e)){var n=document.createElement("div"),i=document.createElement("div");n.className="tobi__slider__slide",n.style.position="absolute",n.style.left=100*L[x].x+"%",i.className="tobi__slider__slide__content",N[t].init(e,i),n.appendChild(i),L[x].slider.appendChild(n),L[x].sliderElements.push(n),++L[x].x;break}},K=function(e){if(void 0!==L[S].sliderElements[e]){var t=L[S].sliderElements[e].querySelector(".tobi__slider__slide__content"),n=t.getAttribute("data-type");N[n].onPreload(t)}},G=function(e){if(void 0!==L[S].sliderElements[e]){var t=L[S].sliderElements[e].querySelector(".tobi__slider__slide__content"),n=t.getAttribute("data-type");N[n].onLoad(t)}},J=function(e){if(void 0!==L[S].sliderElements[e]){var t=L[S].sliderElements[e].querySelector(".tobi__slider__slide__content"),n=t.getAttribute("data-type");N[n].onLeave(t)}},$=function(e){if(void 0!==L[S].sliderElements[e]){var t=L[S].sliderElements[e].querySelector(".tobi__slider__slide__content"),n=t.getAttribute("data-type");N[n].onCleanup(t)}},Q=function(){g=-L[S=null!==S?S:x].currentIndex*window.innerWidth,L[S].slider.style.transform="translate3d("+g+"px, 0, 0)",b=g},Z=function(){c={startX:0,endX:0,startY:0,endY:0}},ee=function(e){e.preventDefault(),S=T(this),k(L[S].gallery.indexOf(this))},te=function(){0<Math.abs(c.startX-c.endX)&&!u&&s.swipeClose?(L[S].slider.style.transform="translate3d("+(b-Math.round(c.startX-c.endX))+"px, 0, 0)",u=!(n=!0)):0<Math.abs(c.startY-c.endY)&&!n&&(L[S].slider.style.transform="translate3d("+b+"px, -"+Math.round(c.startY-c.endY)+"px, 0)",u=!(n=!1))},ne=function(){s.keyboard&&document.addEventListener("keydown",M),o.addEventListener("click",P),s.draggable&&(de()&&(o.addEventListener("touchstart",D),o.addEventListener("touchmove",X),o.addEventListener("touchend",Y)),o.addEventListener("mousedown",z),o.addEventListener("mouseup",H),o.addEventListener("mousemove",B))},ie=function(){s.keyboard&&document.removeEventListener("keydown",M),o.removeEventListener("click",P),s.draggable&&(de()&&(o.removeEventListener("touchstart",D),o.removeEventListener("touchmove",X),o.removeEventListener("touchend",Y)),o.removeEventListener("mousedown",z),o.removeEventListener("mouseup",H),o.removeEventListener("mousemove",B))},oe=function(e,t){return e.getAttribute("data-type")===t},re=function(e){var t=e.querySelectorAll("src");t&&Array.prototype.forEach.call(t,function(e){e.setAttribute("src","")})},ae=function(){s.draggable&&1<L[S].elementsLength&&!L[S].slider.classList.contains("tobi__slider--is-draggable")&&L[S].slider.classList.add("tobi__slider--is-draggable"),!s.nav||1===L[S].elementsLength||"auto"===s.nav&&de()?(i.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","true")):(i.setAttribute("aria-hidden","false"),r.setAttribute("aria-hidden","false")),s.counter&&1!==L[S].elementsLength?d.setAttribute("aria-hidden","false"):d.setAttribute("aria-hidden","true")},se=function(e){var t,n;!function(){for(var e in L)Object.prototype.hasOwnProperty.call(L,e)&&(L[e].slider.style.display=S===e?"block":"none")}(),Q(),d.textContent=L[S].currentIndex+1+"/"+L[S].elementsLength,t=e,s.nav?(i.disabled=!1,r.disabled=!1,"left"===t?i.focus():r.focus(),1===L[S].elementsLength?(i.disabled=!0,r.disabled=!0,s.close&&a.focus()):(0===L[S].currentIndex&&(i.disabled=!0,r.focus()),L[S].currentIndex===L[S].elementsLength-1&&(r.disabled=!0,i.focus()))):s.close&&a.focus(),n=o.querySelectorAll(".tobi > button:not(:disabled)"),p=n[0],m=1===n.length?n[0]:n[n.length-1]},le=function(){return"false"===o.getAttribute("aria-hidden")},de=function(){return"ontouchstart"in window},ce=function(e){return-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===i||e===r||e===a||1===L[S].elementsLength};return function(e){var t,n;n={selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 18l-6-6 6-6"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 6l6 6-6 6"/></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M6 18L18 6"/></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"/><path d="M8 21H3v-5"/><path d="M16 3h5v5"/><path d="M3 8V3h5"/></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1},(t=e)&&Object.keys(t).forEach(function(e){n[e]=t[e]}),s=n,o||V();var i=document.querySelectorAll(s.selector);if(!i)throw new Error("Ups, I can't find the selector "+s.selector+".");Array.prototype.forEach.call(i,function(e){W(e)})}(e),{open:k,prev:I,next:O,close:q,add:W,remove:C,destroy:function(e){le()&&q();var t=Object.entries(L);Array.prototype.forEach.call(t,function(e){var t=e[1].gallery;Array.prototype.forEach.call(t,function(e){C(e)})}),o.parentNode.removeChild(o),L={},x=S=null,l=0,e&&e.call(this)},isOpen:le,currentSlide:function(){return L[S].currentIndex},selectGroup:function(e){if(le())throw new Error("Ups, I can't do this. Tobi is open.");if(e){if(e&&!Object.prototype.hasOwnProperty.call(L,e))throw new Error("Ups, I don't have a group called \""+e+'".');S=e}},currentGroup:function(){return null!==S?S:x}}}});var component_dropdown_menu=function(e){var o,t=e.desktop_min_width,l=e.menu;if(l){var d=function(e){s()&&(o=setTimeout(function(e){f(e)},750,e.currentTarget))},c=function(e){n(a(e.currentTarget,"menu-item-has-children")),e.stopPropagation()};return function(){h();for(var e=l.querySelectorAll(".menu-item"),t=0;t<e.length;t++)e[t].addEventListener("mouseenter",p),e[t].addEventListener("mouseleave",d);for(var n=l.querySelectorAll(".js-menu-caret"),i=0;i<n.length;i++)n[i].addEventListener("click",c);for(var o=l.querySelectorAll('a[href="#"]'),r=0;r<o.length;r++)o[r].addEventListener("click",m);for(var a=l.querySelectorAll(".menu-item-has-children a"),s=0;s<a.length;s++)a[s].addEventListener("touchstart",b,!1)}(),this}function r(e,t){for(var n=[],i=e.parentElement;!i.isEqualNode(l);)i.classList.contains(t)&&n.push(i),i=i.parentElement;return n}function a(e,t){var n=r(e,t);return n.length?n[0]:null}function s(){return!(Math.max(document.documentElement.clientWidth,window.innerWidth||0)<t)}function u(e){if(e){e.setAttribute("aria-expanded","true");var t=e.querySelector(".sub-menu");t&&(t.setAttribute("aria-hidden","false"),t.getBoundingClientRect().right>(window.innerWidth||document.documentElement.clientWidth)&&t.classList.add("is-out-of-bounds"));for(var n=r(e,"menu-item-has-children"),i=0;i<n.length;i++)u(n[i])}}function f(e){if(e){e.setAttribute("aria-expanded","false");var t=e.querySelector(".sub-menu");t&&(t.setAttribute("aria-hidden","true"),t.classList.remove("is-out-of-bounds"));for(var n=e.querySelectorAll(".menu-item-has-children"),i=0;i<n.length;i++)f(n[i])}}function n(e){e&&("false"===e.getAttribute("aria-expanded")?u:f)(e)}function h(){for(var e=l.querySelectorAll(".menu-item-has-children"),t=0;t<e.length;t++)f(e[t]),e[t].classList.remove("is-tapped")}function p(e){if(s()){clearTimeout(o);for(var t=r(e.currentTarget,"menu-item-has-children"),n=l.querySelectorAll(".menu-item-has-children"),i=0;i<n.length;i++)n[i]!==e.currentTarget&&-1===t.indexOf(n[i])&&f(n[i]);u(e.currentTarget)}}function m(e){e.preventDefault(),n(a(e.currentTarget,"menu-item-has-children"))}function g(e){s()&&!function(e){for(;null!==(e=e.parentElement);)if(e.nodeType===Node.ELEMENT_NODE&&e.isEqualNode(l))return 1}(e.currentTarget)&&h(),document.removeEventListener("ontouchstart",g,!1)}function b(e){if(s()){var t=a(e.currentTarget,"menu-item-has-children");if(!t.classList.contains("is-tapped")){e.preventDefault();for(var n=r(e.currentTarget,"menu-item-has-children"),i=l.querySelectorAll(".menu-item-has-children"),o=0;o<i.length;o++)i[o]!==e.currentTarget&&-1===n.indexOf(i[o])&&(i[o].classList.remove("is-tapped"),f(i[o]));t.classList.add("is-tapped"),u(t),document.addEventListener("touchstart",g,!1)}}}console.log("Invalid drop-down menu")},gutenberg_content=document.querySelector(".wysiwyg");if(gutenberg_content){for(var i=0;i<gutenberg_content.childNodes.length;i++)if(3!==gutenberg_content.childNodes[i].nodeType&&"undefined"!==gutenberg_content.childNodes[i].classList){gutenberg_content.childNodes[i].classList.add("is-first-block");break}for(i=gutenberg_content.childNodes.length-1;0<=i;i--)if(3!==gutenberg_content.childNodes[i].nodeType&&"undefined"!==gutenberg_content.childNodes[i].classList){gutenberg_content.childNodes[i].classList.add("is-last-block");break}}var responsive_tables_in_content=function(){var e=document.querySelectorAll(".wysiwyg .wp-block-table");if(e)for(var t=0;t<e.length;t++){e[t].classList.add("wp-block-table--responsive");var n=document.createElement("div");n.setAttribute("class",e[t].getAttribute("class")),e[t].removeAttribute("class"),e[t].parentNode.insertBefore(n,e[t]),n.appendChild(e[t])}};responsive_tables_in_content();var wrap_old_images_with_caption=function(){var e=document.querySelectorAll(".wysiwyg .wp-caption");if(e.length)for(var t=0;t<e.length;t++)if(!e[t].parentNode.classList.contains("wp-block-image")){var n=document.createElement("div");n.setAttribute("class","wp-block-image"),e[t].parentNode.insertBefore(n,e[t]),n.appendChild(e[t])}};wrap_old_images_with_caption();var wrap_old_aligned_images=function(){var e,t=document.querySelectorAll(".wysiwyg img.alignleft, .wysiwyg img.alignright");if(t.length)for(var n=0;n<t.length;n++){"P"===(e=t[n].parentNode).nodeName&&(e.parentNode.insertBefore(t[n],e),0===e.childNodes.length&&e.parentNode.removeChild(e));var i=t[n].classList.contains("alignleft")?"alignleft":"alignright";t[n].classList.remove(i);var o=document.createElement("figure");o.setAttribute("class",i),t[n].parentNode.insertBefore(o,t[n]),o.appendChild(t[n]);var r=document.createElement("div");r.setAttribute("class","wp-block-image"),o.parentNode.insertBefore(r,o),r.appendChild(o)}};wrap_old_aligned_images();var body_hero_background_indicator=function(){document.querySelector(".hero--no-background")&&document.body.classList.add("has-no-hero-background")};body_hero_background_indicator();var imgItems=document.querySelectorAll(".blocks-gallery-item > figure > a, .gallery-item > .gallery-icon > a, .wp-block-image a, p > a > img, p > a > .wp-block-image");imgItems.length&&imgItems.forEach(function(t){var e=[".jpg",".png",".jpeg"];t.href?(e.some(function(e){return t.href.includes(e)})&&t.classList.add("lightbox"),t.nextElementSibling?"figcaption"===t.nextElementSibling.nodeName.toLowerCase()&&(t.dataset.caption=t.nextElementSibling.innerText):t.parentNode.nextElementSibling&&"figcaption"===t.parentNode.nextElementSibling.nodeName.toLowerCase()&&(t.dataset.caption=t.parentNode.nextElementSibling.innerText)):t.parentNode.href&&e.some(function(e){return t.parentNode.href.includes(e)})&&t.parentNode.classList.add("lightbox")});var component_mobile_menu=function(e){var t=e.menu,n=e.site,i=e.toggles;if(t&&n&&i.length){var o=new A11yDialog(t,n);o.on("show",function(e,t){document.body.classList.add("is-active-menu")}),o.on("hide",function(e,t){document.body.classList.add("is-closing-menu"),setTimeout(function(){document.body.classList.remove("is-active-menu"),document.body.classList.remove("is-closing-menu")},200)});for(var r=function(){document.body.classList.contains("is-active-menu")?o.hide():o.show()},a=0;a<i.length;a++)i[a].addEventListener("click",r,!1);return this}console.log("Invalid mobile_menu args")},dropdown_menus=document.querySelectorAll(".js-navigation");for(i=0;i<dropdown_menus.length;i++)component_dropdown_menu({desktop_min_width:890,menu:dropdown_menus[i]});if(component_mobile_menu({menu:document.querySelector(".js-mobile-menu"),site:document.querySelector(".js-page"),toggles:document.querySelectorAll(".js-menu-toggle")}),fitvids(),"function"==typeof objectFitPolyfill&&document.addEventListener("lazybeforeunveil",function(e){objectFitPolyfill(),e.target.addEventListener("load",function(){objectFitPolyfill()})}),document.querySelectorAll(".lightbox").length)try{new Tobi({navLabel:[aucor_starter_strings.prev,aucor_starter_strings.next],closeLabel:aucor_starter_strings.close,loadingIndicatorLabel:aucor_starter_strings.loading,captionsSelector:"self",captionAttribute:"data-caption",zoom:!1})}catch(e){console.log(e)}
//# sourceMappingURL=main.js.map
