!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}({13:function(e,n,t){"use strict";var o=new(function(e){return e&&e.__esModule?e:{default:e}}(t(14)).default)({loading:"#loading",progress:"#progress"}),r=[["./img/homepage.png","./img/logo.png","./img/logos.png","https://cdn.staticfile.org/Director/1.2.8/director.min.js","https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js","https://cdn.staticfile.org/Swiper/3.4.2/css/swiper.min.css","https://cdn.staticfile.org/Swiper/3.4.2/js/swiper.jquery.min.js","./css/screen.css","./img/logo-tushu.png","./img/logo-wenxue.png","./img/logo-yule.png","./img/about-bg.jpg","./img/ip-bg.jpg","./img/invitation.jpg","./img/haibao1.jpg","./img/haibao2.jpg","./img/haibao3.jpg","./img/haibao4.jpg"]];r.push("./js/main.js"),o.load(r)},14:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(2),s=function(e){return e&&e.__esModule?e:{default:e}}(t(15)),a=function(){function e(n){var t=n.loading,r=n.progress;o(this,e),this.loading=t,this.progress=document.querySelector(r),"Promise"in window&&window.Promise instanceof Function?this.loadCreateJS():(0,i.load)(s.default.bluebird,this.loadCreateJS.bind(this))}return r(e,[{key:"load",value:function(e){this.assets=e}},{key:"loadCreateJS",value:function(){var e=this;(0,i.load)(s.default.createjs).then(function(){var n=e.queue=new createjs.LoadQueue(!0,"./");n.on("progress",e.onProgress.bind(e)),n.on("complete",e.onComplete.bind(e));for(var t=0,o=e.assets.length;t<o;t++)e.assets[t]instanceof Array?e.queue.loadManifest(e.assets[t]):e.queue.loadFile(e.assets[t])})}},{key:"onComplete",value:function(){console.log("Wukong: all loaded");new H5App(this.queue)}},{key:"onProgress",value:function(e){console.log(e.progress);var n=100*e.progress>>0;this.progress.innerText=n+"%"}}]),e}();n.default=a},15:function(e,n){e.exports={bluebird:"https://cdn.staticfile.org/bluebird/3.5.0/bluebird.min.js",createjs:"//code.createjs.com/createjs-2015.11.26.min.js"}},2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.load=function(e,n){var t=document.createElement("script");if(t.async=!0,t.type="text/javascript",t.src=e,document.body.appendChild(t),!n)return new Promise(function(e,n){t.onload=e,t.onerror=n});t.onload=n}}});