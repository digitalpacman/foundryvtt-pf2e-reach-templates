/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={78:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(655),o=r(403),a=function(){function e(e){this._semaphore=new o.default(1,e)}return e.prototype.acquire=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){switch(e.label){case 0:return[4,this._semaphore.acquire()];case 1:return[2,e.sent()[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e.prototype.cancel=function(){return this._semaphore.cancel()},e}();t.default=a},403:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(655),o=r(764),a=function(){function e(e,t){if(void 0===t&&(t=o.E_CANCELED),this._maxConcurrency=e,this._cancelError=t,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),r=new Promise((function(t,r){return e._queue.push({resolve:t,reject:r})}));return t||this._dispatch(),r},e.prototype.runExclusive=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r,o;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,this.acquire()];case 1:t=n.sent(),r=t[0],o=t[1],n.label=2;case 2:return n.trys.push([2,,4,5]),[4,e(r)];case 3:return[2,n.sent()];case 4:return o(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var e=this._currentReleaser;this._currentReleaser=void 0,e()}},e.prototype.cancel=function(){var e=this;this._queue.forEach((function(t){return t.reject(e._cancelError)})),this._queue=[]},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var r=!1;this._currentReleaser=function(){r||(r=!0,e._value++,e._dispatch())},t.resolve([this._value--,this._currentReleaser])}},e}();t.default=a},764:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.E_CANCELED=t.E_ALREADY_LOCKED=t.E_TIMEOUT=void 0,t.E_TIMEOUT=new Error("timeout while waiting for mutex to become available"),t.E_ALREADY_LOCKED=new Error("mutex already locked"),t.E_CANCELED=new Error("request for lock canceled")},125:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryAcquire=t.withTimeout=t.Semaphore=t.Mutex=void 0;var n=r(655),o=r(78);Object.defineProperty(t,"Mutex",{enumerable:!0,get:function(){return o.default}});var a=r(403);Object.defineProperty(t,"Semaphore",{enumerable:!0,get:function(){return a.default}});var i=r(960);Object.defineProperty(t,"withTimeout",{enumerable:!0,get:function(){return i.withTimeout}});var c=r(143);Object.defineProperty(t,"tryAcquire",{enumerable:!0,get:function(){return c.tryAcquire}}),n.__exportStar(r(764),t)},143:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryAcquire=void 0;var n=r(764),o=r(960);t.tryAcquire=function(e,t){return void 0===t&&(t=n.E_ALREADY_LOCKED),o.withTimeout(e,0,t)}},960:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withTimeout=void 0;var n=r(655),o=r(764);t.withTimeout=function(e,t,r){var a=this;return void 0===r&&(r=o.E_TIMEOUT),{acquire:function(){return new Promise((function(o,i){return n.__awaiter(a,void 0,void 0,(function(){var a,c,u,s;return n.__generator(this,(function(n){switch(n.label){case 0:a=!1,c=setTimeout((function(){a=!0,i(r)}),t),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,e.acquire()];case 2:return u=n.sent(),a?(Array.isArray(u)?u[1]:u)():(clearTimeout(c),o(u)),[3,4];case 3:return s=n.sent(),a||(clearTimeout(c),i(s)),[3,4];case 4:return[2]}}))}))}))},runExclusive:function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r;return n.__generator(this,(function(n){switch(n.label){case 0:t=function(){},n.label=1;case 1:return n.trys.push([1,,7,8]),[4,this.acquire()];case 2:return r=n.sent(),Array.isArray(r)?(t=r[1],[4,e(r[0])]):[3,4];case 3:return[2,n.sent()];case 4:return t=r,[4,e()];case 5:return[2,n.sent()];case 6:return[3,8];case 7:return t(),[7];case 8:return[2]}}))}))},release:function(){e.release()},cancel:function(){return e.cancel()},isLocked:function(){return e.isLocked()}}}},655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>c,__param:()=>u,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>p,__exportStar:()=>h,__values:()=>d,__read:()=>y,__spread:()=>_,__spreadArrays:()=>v,__spreadArray:()=>w,__await:()=>b,__asyncGenerator:()=>m,__asyncDelegator:()=>g,__asyncValues:()=>E,__makeTemplateObject:()=>O,__importStar:()=>P,__importDefault:()=>j,__classPrivateFieldGet:()=>S,__classPrivateFieldSet:()=>T});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function u(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(e){a(e)}}function c(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function w(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(u,s):l(a[0][2],r)}catch(e){l(a[0][3],e)}var r}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return x(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function S(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function T(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},95:e=>{const t=["#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#00ffff"],r=t.reduce(((e,t)=>(e[t]=()=>game.settings.get("pf2e-reach-templates",`color_${t}`),e)),{});let n=[];e.exports={nextColor:()=>{n.length===t.length&&(n.length=0);const e=t.filter((e=>!n.find((({defaultColor:t})=>t===e))));console.log("available",e);const o=e[0],a=r[o]();return console.log("actualColor",a),n.push({defaultColor:o,actualColor:a}),a},releaseColor:e=>{n=n.filter((({actualColor:t})=>t!==e)),console.log("reserved",n)},defaultColors:t}},795:(e,t,r)=>{const{nextColor:n,releaseColor:o}=r(95),{getState:a}=r(800);e.exports={draw:async function(e,t,r){const o=await Drawing.create({type:CONST.DRAWING_TYPES.FREEHAND,author:game.user._id,x:e.x-t/5*canvas.scene.data.grid,y:e.y-t/5*canvas.scene.data.grid,fillType:CONST.DRAWING_FILL_TYPES.NONE,strokeWidth:4,strokeColor:n(),strokeAlpha:.75,points:r.map((([e,t])=>[e*canvas.scene.data.grid,t*canvas.scene.data.grid]))});return tokenAttacher.attachElementToToken(o,e,!0),o.id},clear:async function(e){const{drawnId:t}=a(e),r=DrawingsLayer.instance.get(t);r&&(o(r.data.strokeColor),await r.delete())}}},502:e=>{e.exports="pf2e-reach-templates"},800:(e,t,r)=>{const n=r(502);e.exports={setState:async function(e,{drawnId:t,reach:r}){await e.setFlag(n,"drawnId",t),await e.setFlag(n,"reach",r)},getState:function(e){return{drawnId:e.getFlag(n,"drawnId"),reach:e.getFlag(n,"reach")||0}},clearState:async function(e){await e.unsetFlag(n,"drawnId"),await e.unsetFlag(n,"reach")}}},689:e=>{function t(e){const t=e.sort(((e,t)=>e[0][0]<t[0][0]?-1:e[0][0]===t[0][0]?0:1)),r=[];for(let e=0;e<t.length;++e){const[[n,o]]=t[e];if(r.push([n,o]),e<t.length-1){const[[n,a]]=t[e+1];r.push([n,o])}}for(let e=t.length-1;e>=0;--e){const[[,n],[o]]=t[e];if(r.push([o,n]),e>0){const[[,n],[a]]=t[e-1];r.push([o,n])}}for(let e=0;e<t.length;++e){const[,[n,o]]=t[e];if(r.push([n,o]),e<t.length-1){const[,[n,a]]=t[e+1];r.push([n,o])}}for(let e=t.length-1;e>=0;--e){const[[n],[,o]]=t[e];if(r.push([n,o]),e>0){const[[o],[,a]]=t[e-1];r.push([n,a])}}const[[n,o]]=t[0];return r.push([n,o]),r}const r=(e,t,r,n)=>[[e,t],[e+r,t+n]];var n=[[r(0,0,3,3)],[r(0,0,5,5)],[r(0,2,7,3),r(1,1,5,5),r(2,0,3,7)],[r(0,3,9,3),r(1,1,7,7),r(3,0,3,9)],[r(0,4,11,3),r(1,2,9,7),r(2,1,7,9),r(4,0,3,11)]];function o(e,t){const r=e-1;return t.map((([[e,t],[n,o]])=>[[e,t],[n+r,o+r]]))}function a(e){return n[e/5-1]}t(o(1,a(15))),e.exports=(e,r)=>t(o(e,a(r)))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=r(689),t=r(795),{resetColors:n,defaultColors:o}=r(95),{getState:a,setState:i,clearState:c}=r(800),u=r(125).Mutex;Hooks.on("ready",(function(){document.addEventListener("keydown",l);for(let e=0;e<o.length;++e){const t=o[e];game.settings.register("pf2e-reach-templates",`color_${t}`,{name:`Color ${e+1}`,scope:"world",config:!0,default:t,type:String})}n()}));const s=new u;async function l(r){const n=TokenLayer.instance.controlled[0];n&&"r"===r.key&&document.body===document.activeElement&&(s.isLocked()||await s.runExclusive((async()=>async function(r){const{reach:n}=a(r);await t.clear(r);const o=n<25?n+5:0;if(0===o)await c(r);else{const n=r.data.width,a=e(n,o),c=await t.draw(r,o,a);await i(r,{drawnId:c,reach:o})}}(n))))}})()})();