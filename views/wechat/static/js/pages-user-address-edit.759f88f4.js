(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-edit"],{"273f":function(e,t,a){var i=a("3513");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("3695").default;n("c53fbcba",i,!0,{sourceMap:!1,shadowMode:!1})},3513:function(e,t,a){var i=a("a1a8");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-20e26278]{padding:%?20?%}.he-box[data-v-20e26278]{background:#fff;border-radius:%?16?%}.he-get-address[data-v-20e26278]{height:%?96?%;line-height:%?96?%;padding:0 %?24?% 0 %?32?%;margin-bottom:%?16?%}.he-get-address .he-text[data-v-20e26278]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222;margin-left:%?20?%}.iconbtn_arrow[data-v-20e26278]{width:%?22?%;height:%?22?%;font-size:%?22?%;color:#bebebe}.iconaddress_wechataddress[data-v-20e26278]{width:%?36?%;height:%?36?%;font-size:%?36?%;color:#46bb36}.he-info[data-v-20e26278]{padding:%?16?% %?24?%;margin-bottom:%?16?%}.he-info__item[data-v-20e26278]{height:%?100?%;border-bottom:%?1?% solid #e5e5e5}.he-item__label[data-v-20e26278]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-item__value[data-v-20e26278]{width:%?506?%}.he-area-text[data-v-20e26278]{width:%?484?%}.he-placeholder[data-v-20e26278]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999}.he-info__itemOther[data-v-20e26278]{padding:%?38?% 0 0 0}.he-info__itemOther .he-item__value[data-v-20e26278]{height:%?127?%}.he-default[data-v-20e26278]{height:%?96?%;padding:0 %?24?%}.he-default .he-text[data-v-20e26278]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.cu-btn[data-v-20e26278]{width:%?710?%;height:%?80?%;border-radius:%?40?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500}.he-save[data-v-20e26278]{margin-top:%?80?%;color:#fff}[data-theme="red_theme"] .he-save[data-v-20e26278]{background-color:#e60b30!important}[data-theme="purple_theme"] .he-save[data-v-20e26278]{background-color:#8f2df3!important}[data-theme="blue_theme"] .he-save[data-v-20e26278]{background-color:#33a7ff!important}[data-theme="green_theme"] .he-save[data-v-20e26278]{background-color:#1fc551!important}[data-theme="orange_theme"] .he-save[data-v-20e26278]{background-color:#ff7f00!important}[data-theme="golden_theme"] .he-save[data-v-20e26278]{background-color:#caa45a!important}.he-delete[data-v-20e26278]{background:#fff;border:%?1?% solid #ccc;color:#222;margin-top:%?24?%}',""]),e.exports=t},6263:function(e,t,a){"use strict";var i=a("dbd9").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7e36");var n=i(a("d743")),s=i(a("1cc8")),o={name:"address-edit",components:{heSelectAddress:n.default,heSwitch:s.default},data:function(){return{form:{name:"",mobile:"",province:"",city:"",district:"",address:"",status:0},id:null,isAddress:!1}},methods:{chooseAddress:function(){var e=this;uni.chooseAddress({success:function(t){e.form.name=t.userName,e.form.mobile=t.telNumber,e.form.province=t.provinceName,e.form.city=t.cityName,e.form.address=t.detailInfo,e.form.district=t.countyName},fail:function(t){e.$toError(t)}})},getAddress:function(e){var t=this;this.$heshop.address("get",e).then((function(e){t.form=e})).catch((function(e){t.$toError(e)}))},setArea:function(e){this.form.address=e.detail.value},setStatus:function(){this.form.status=0===this.form.status?1:0},submit:function(){var e=this;this.id?this.$heshop.address("put",this.id,this.form).then((function(){uni.setStorageSync(e.$storageKey.address,{form:e.form,id:e.id,type:"put"}),uni.navigateBack({delta:1})})).catch((function(t){e.$toError(t)})):this.$heshop.address("post",this.form).then((function(t){uni.setStorageSync(e.$storageKey.address,{form:e.form,id:t,type:"post"}),uni.navigateBack({delta:1})})).catch((function(t){e.$toError(t)}))},strikeOut:function(){var e=this;this.$heshop.address("delete",this.id).then((function(){uni.setStorageSync(e.$storageKey.address,{id:e.id,type:"delete"}),uni.navigateBack({delta:1})})).catch((function(t){e.$toError(t)}))},selectArea:function(e){this.form.province=e[0].name,this.form.city=e[1].name,this.form.district=e[2].name},editAddress:function(e){this.form.status=e}},onLoad:function(e){e.id&&(this.id=parseInt(e.id),uni.setNavigationBarTitle({title:"编辑收货地址"}))},watch:{id:function(e){this.getAddress(e)},selectList:function(e){this.form.province=e[0].name,this.form.city=e[1].name,this.form.district=e[2].name}}};t.default=o},"68ba":function(e,t,a){"use strict";var i=a("273f"),n=a.n(i);n.a},c4a3:function(e,t,a){"use strict";a.r(t);var i=a("e80c"),n=a("dd8a");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("68ba");var o,r=a("98a2"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"20e26278",null,!1,i["a"],o);t["default"]=d.exports},dd8a:function(e,t,a){"use strict";a.r(t);var i=a("6263"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},e80c:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"he-page-content",attrs:{"data-theme":e.theme}},[a("v-uni-view",{staticClass:"he-box he-info"},[a("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[a("v-uni-text",{staticClass:"he-item__label"},[e._v("收货人")]),a("v-uni-input",{staticClass:"he-item__value",attrs:{type:"text",maxlength:10,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",placeholder:"请填写收货人姓名（最多10个字）"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[a("v-uni-text",{staticClass:"he-item__label"},[e._v("手机号码")]),a("v-uni-input",{staticClass:"he-item__value",attrs:{type:"number",maxlength:11,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",placeholder:"请填写手机号码（最多11个数字）"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),a("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[a("v-uni-text",{staticClass:"he-item__label"},[e._v("所在地区")]),a("v-uni-view",{staticClass:"flex align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isAddress=!0}}},[e.form.province&&e.form.city&&e.form.district?a("v-uni-text",{staticClass:"he-item__value he-area-text"},[e._v(e._s(e.form.province)+"/"+e._s(e.form.city)+"/"+e._s(e.form.district))]):a("v-uni-text",{staticClass:"he-placeholder he-area-text"},[e._v("请选择所在地区")]),a("v-uni-view",{staticClass:"iconfont iconbtn_arrow"})],1)],1),a("v-uni-view",{staticClass:"he-info__itemOther flex justify-between"},[a("v-uni-view",{staticClass:"he-item__label"},[e._v("详细地址")]),a("v-uni-textarea",{staticClass:"he-item__value",attrs:{id:"textarea",value:e.form.address,"disable-default-padding":!0,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",maxlength:50,placeholder:"如街道、小区、门牌号、楼栋号等"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.setArea.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"he-box he-default flex justify-between align-center"},[a("v-uni-view",{staticClass:"he-text"},[e._v("设为默认地址")]),a("he-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.editAddress.apply(void 0,arguments)}},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),a("v-uni-button",{staticClass:"cu-btn he-save",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("保存并使用")]),e.$h.test.isEmpty(e.id)?e._e():a("v-uni-button",{staticClass:"cu-btn he-delete",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.strikeOut.apply(void 0,arguments)}}},[e._v("删除收货地址")]),a("he-select-address",{attrs:{select:e.form},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.selectArea.apply(void 0,arguments)}},model:{value:e.isAddress,callback:function(t){e.isAddress=t},expression:"isAddress"}})],1)},s=[]}}]);