(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["channel-weChatDeploy"],{"237d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-matter"},[s("div",{staticClass:"le-header"},[s("span",{staticClass:"le-header__left",on:{click:e.router}},[e._v("信息配置")]),s("i",{staticClass:"el-icon-arrow-right"}),s("span",{staticClass:"le-header__right"},[e._v("服务器配置")])]),s("div",{staticClass:"le-card"},[e._m(0),s("div",{staticClass:"le-item le-guide"},[s("span",[e._v("请将以下信息填入微信公众号，并启用服务器配置。完成操作后，再保存此页面。")]),s("span",{directives:[{name:"popup",rawName:"v-popup.deployGuide",modifiers:{deployGuide:!0}}],staticClass:"le-btn",attrs:{module:"channel",title:"服务器配置指引",type:"text",width:"720",hide_close:!0,sure_btn:"已完成配置"}},[e._v("查看引导")])]),s("div",{staticClass:"le-item"},[s("span",{staticClass:"le-line-label"},[e._v("服务器地址(URL)")]),s("span",{staticClass:"le-line-value",attrs:{id:"url"}},[e._v(e._s(e.form.url))]),s("span",{staticClass:"le-btn",on:{click:function(t){return e.copy("url")}}},[e._v("复制")])]),s("div",{staticClass:"le-item"},[s("span",{staticClass:"le-line-label"},[e._v("令牌(Token)")]),s("span",{staticClass:"le-line-value",attrs:{id:"token"}},[e._v(e._s(e.form.token))]),s("span",{staticClass:"le-btn",on:{click:function(t){return e.copy("token")}}},[e._v("复制")])]),s("div",{staticClass:"le-item flex justify-start"},[e._m(1),s("span",{staticClass:"le-line-value",attrs:{id:"key"}},[e._v(e._s(e.form.encodingAesKey))]),s("span",{staticClass:"le-btn",on:{click:function(t){return e.copy("key")}}},[e._v("复制")])])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-card__header flex align-center"},[s("span",{staticClass:"le-tip"}),s("span",{staticClass:"le-text"},[e._v("服务器配置")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"le-line-label"},[e._v("消息加解密密钥"),s("br"),e._v("(EncodingAESKey)")])}],i={name:"weChat-deploy",data:function(){return{form:{}}},mounted:function(){this.getConfig()},methods:{getConfig:function(){var e=this;this.$heshop.appconfig("get").then((function(t){e.form=t.apply.wechat})).catch((function(t){e.$message.error(t.data.message)}))},copy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"innerText",s=null;if(t){if(s=document.createElement("div"),s.id="tempTarget",s.style.opacity="0",e){var a=document.querySelector("#"+e);s.innerText=a[t]}else s.innerText=t;document.body.appendChild(s)}else s=document.querySelector("#"+e);try{var n=document.createRange();n.selectNode(s),window.getSelection().removeAllRanges(),window.getSelection().addRange(n),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$message.success("复制成功")}catch(i){console.error("复制失败")}t&&s.parentElement.removeChild(s)},router:function(){this.$router.back()}}},l=i,c=(s("fcc2"),s("4ac2")),o=Object(c["a"])(l,a,n,!1,null,"6e11bd54",null);t["default"]=o.exports},f233:function(e,t,s){},fcc2:function(e,t,s){"use strict";s("f233")}}]);
//# sourceMappingURL=channel-weChatDeploy.4b24b650.js.map