(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-page-index"],{"21e4":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-scroll-view",{staticClass:"pages"},t._l(t.page,(function(a,n){return e("v-uni-view",{key:n},["title"==a.name?e("titles",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"navigation"==a.name?e("navigation",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"video"==a.name?e("videos",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"banner"==a.name?e("banner",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"search"==a.name?e("search",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"goods"==a.name?e("goods",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"blank"==a.name?e("blank",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"tabs"==a.name?e("tabs",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):"rubik"===a.name?e("rubik",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"advertising"==a.name?e("advertising",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"notice"==a.name?e("notice",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"separate"==a.name?e("separate",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e(),"coupon"==a.name?e("coupon",{tag:"component",attrs:{facade:a.facade,content:a.content,"data-index":n}}):t._e()],1)})),1)},c=[]},2805:function(t,a,e){"use strict";var n=e("f600"),o=e.n(n);o.a},4351:function(t,a,e){"use strict";e.r(a);var n=e("21e4"),o=e("a70a");for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(c);e("2805");var d,i=e("8261"),s=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"1645f404",null,!1,n["a"],d);a["default"]=s.exports},"776d":function(t,a,e){"use strict";var n=e("47cb").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("3f70");var o=n(e("4b77")),c=n(e("4bc6")),d=n(e("5830")),i=n(e("9990")),s=n(e("23f8")),r=n(e("ae01")),f=n(e("ed5e")),u=n(e("857d")),l=n(e("29c6")),p=n(e("d545")),g=n(e("30bc")),h=n(e("05a7")),v=n(e("b43a")),m={components:{videos:d.default,separate:i.default,blank:s.default,banner:r.default,search:f.default,goods:u.default,advertising:l.default,navigation:c.default,tabs:p.default,titles:o.default,rubik:g.default,notice:h.default,coupon:v.default},data:function(){return{page:[]}},onShow:function(t){if(this.$scope&&this.$scope.options.id){var a=this.$scope.options.id;this.handlePageLoading(a)}if(this.options&&this.options.id){var e=this.options.id;this.handlePageLoading(e)}},methods:{handlePageLoading:function(t){var a="micropage"+t;try{var e=this.getStorageSync(a);e?(uni.setNavigationBarTitle({title:e.name}),document.title=e.name,this.page=JSON.parse(e.content),this.handleLoadData(e,t,a)):this.handleLoadData(null,t,a)}catch(n){this.handleLoadData(null,t,a)}},handleLoadData:function(t,a,e){var n=this;this.$heshop.pages("GET",parseInt(a)).then((function(a){uni.setNavigationBarTitle({title:a.name}),document.title=t.name,t&&n.$heshop.MD5(t)==n.$heshop.MD5(a)||(n.page=JSON.parse(a.content),uni.setStorageSync(e,a))})).catch((function(t){}))},handlePageUpdate:function(){}}};a.default=m},a70a:function(t,a,e){"use strict";e.r(a);var n=e("776d"),o=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=o.a},bce9:function(t,a,e){var n=e("a1a8");a=n(!1),a.push([t.i,".pages[data-v-1645f404]{width:100%;overflow-x:hidden}",""]),t.exports=a},f600:function(t,a,e){var n=e("bce9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("06f1").default;o("3cbf9501",n,!0,{sourceMap:!1,shadowMode:!1})}}]);