(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-index~pages-categories-index~pages-coupon-detail~pages-goods-detail~pages-goods-list~page~0f5fc9b9"],{"00bc":function(t,e,n){var r=n("c2d9");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("5c0d").default;i("5c438142",r,!0,{sourceMap:!1,shadowMode:!1})},"27da":function(t,e,n){"use strict";var r=n("e3bf"),i=n("916f"),a=n("fe50"),o=n("bcec"),u=n("0c82"),c=1..toFixed,s=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},h=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=s(i/1e7)},p=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=s(r/e),r=r%e*1e7},d=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},v=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}));r({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,n,r,u,c=a(this),s=i(t),v=[0,0,0,0,0,0],g="",m="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(e=h(c*l(2,69,1))-69,n=e<0?c*l(2,-e,1):c/l(2,e,1),n*=4503599627370496,e=52-e,e>0){f(v,0,n),r=s;while(r>=7)f(v,1e7,0),r-=7;f(v,l(10,r,1),0),r=e-1;while(r>=23)p(v,1<<23),r-=23;p(v,1<<r),f(v,1,1),p(v,2),m=d(v)}else f(v,0,n),f(v,1<<-e,0),m=d(v)+o.call("0",s);return s>0?(u=m.length,m=g+(u<=s?"0."+o.call("0",s-u)+m:m.slice(0,u-s)+"."+m.slice(u-s))):m=g+m,m}})},"45a0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4cfc"),n("bfcb"),n("c342"),n("ae75"),n("f9ee"),n("58ec"),n("27da");var r={name:"he-number-box",props:{value:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},inputWidth:{type:[Number,String],default:84},inputHeight:{type:[Number,String],default:44},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:{handler:function(t,e){var n=this;if(""!=t){var r=0,i=this.number(t);r=i&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(r=e,this.$nextTick((function(){n.inputVal=e}))),this.handleChange(r,"change")}}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var n,r,i;try{r=t.toString().split(".")[1].length}catch(o){r=0}try{i=e.toString().split(".")[1].length}catch(o){i=0}n=Math.pow(10,Math.max(r,i));var a=r>=i?r:i;return((t*n+e*n)/n).toFixed(a)},calcMinus:function(t,e){var n,r,i;try{r=t.toString().split(".")[1].length}catch(o){r=0}try{i=e.toString().split(".")[1].length}catch(o){i=0}n=Math.pow(10,Math.max(r,i));var a=r>=i?r:i;return((t*n-e*n)/n).toFixed(a)},computeVal:function(t){try{if(this.disabledInput||uni.hideKeyboard(),this.disabled)return;var e=0;if("minus"===t?e=this.calcMinus(this.inputVal,this.step):"plus"===t&&(e=this.calcPlus(this.inputVal,this.step)),e=+e,e<this.min||e>this.max)return;this.inputVal=e,this.handleChange(e,t)}catch(n){}},onBlur:function(t){var e=this,n=0,r=t.detail.value;/(^\d+$)/.test(r)&&0!=r[0]||(n=this.min),n=+r,n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){e.inputVal=n})),this.handleChange(n,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,e){var n=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){n.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))},number:function(t){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)}}};e.default=r},"8ae8":function(t,e,n){"use strict";var r=n("00bc"),i=n.n(r);i.a},b5aa:function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(C([])));y&&y!==r&&i.call(y,o)&&(g=y);var b=L.prototype=k.prototype=Object.create(g);E.prototype=b.constructor=L,L.constructor=E,L[c]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},S(N.prototype),N.prototype[u]=function(){return this},l.AsyncIterator=N,l.async=function(t,e,n,r){var i=new N(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new j(r||[]);return a._invoke=T(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function E(){}function L(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function N(t){function e(n,r,a,o){var u=x(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(s).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(u.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function T(t,e,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return O()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var u=_(o,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},be41:function(t,e,n){"use strict";n.r(e);var r=n("c382"),i=n("d9d0");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("8ae8");var o,u=n("5d80"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"4faa3e7a",null,!1,r["a"],o);e["default"]=c.exports},c2d9:function(t,e,n){var r=n("a1a8");e=r(!1),e.push([t.i,".he-number-box[data-v-4faa3e7a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.he-number-input[data-v-4faa3e7a]{position:relative;text-align:center;padding:0;margin:0 %?6?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#f5f5f5;border-radius:%?4?%;font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#222}.he-icon-plus[data-v-4faa3e7a],\n.he-icon-minus[data-v-4faa3e7a]{width:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff}.he-icon-plus[data-v-4faa3e7a]{border-radius:0 %?8?% %?8?% 0}.he-icon-minus[data-v-4faa3e7a]{border-radius:%?8?% 0 0 %?8?%}.he-icon-disabled .iconfont[data-v-4faa3e7a]{color:#e5e5e5}.he-input-disabled[data-v-4faa3e7a]{color:#c8c9cc!important;background-color:#f2f3f5!important}.iconfont[data-v-4faa3e7a]{width:%?20?%;height:%?20?%;font-size:%?20?%;color:#666}",""]),t.exports=e},c382:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"he-number-box"},[n("v-uni-view",{staticClass:"he-icon-minus",class:{"he-icon-disabled":t.disabled||t.inputVal<=t.min},style:{height:t.inputHeight+"rpx"},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("minus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont iconbtn_subtract"})],1),n("v-uni-input",{staticClass:"he-number-input",class:{"he-input-disabled":t.disabled},style:{height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),n("v-uni-view",{staticClass:"he-icon-plus",class:{"he-icon-disabled":t.disabled||t.inputVal>=t.max},style:{height:t.inputHeight+"rpx"},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("plus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont iconbtn_add"})],1)],1)},a=[]},d9d0:function(t,e,n){"use strict";n.r(e);var r=n("45a0"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},e9ff:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function u(t){r(o,i,a,u,c,"next",t)}function c(t){r(o,i,a,u,c,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,n("f9ee")},fe50:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}}}]);