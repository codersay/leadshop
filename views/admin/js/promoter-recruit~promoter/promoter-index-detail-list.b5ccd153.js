(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-recruit~promoter/promoter-index-detail-list"],{2573:function(t,e,o){"use strict";var n,a,i=o("2638"),c=o.n(i),l=o("ade3"),r=o("19e9"),p=o("0e28"),s=o("3303"),u={name:"recruitment-promotion",data:function(){return{platform:"weapp",form:{weapp:{},wechat:{}}}},props:{value:{type:Boolean,default:!1},info:{type:[Object]}},computed:{showDialog:{get:function(t){var e=t.value;return e},set:function(t){this.$emit("input",t)}}},render:function(){var t=arguments[0],e=this;return t("el-dialog",c()([{attrs:{visible:e.showDialog,title:"推广",width:"533px",top:"30vh"}},{on:Object(l["a"])({},"update:visible",(function(t){e.showDialog=t}))}]),[t("div",{class:"flex"},[t("div",{class:"left"},[t("div",{class:[{active:"weapp"===e.platform},"left-item"],on:{click:function(){return e.platform="weapp"}}},["微信小程序"]),t("div",{class:[{active:"wechat"===e.platform},"left-item"],on:{click:function(){return e.platform="wechat"}}},["公众号"])]),t("div",{class:"right"},[t("div",{class:"right--title"},["weapp"===e.platform?"小程序路径":"wechat"===e.platform?"公众号路径":null]),t("el-input",{attrs:{value:e.form[e.platform].url,disabled:!0},class:"le-input--300"},[t("el-button",{slot:"append",on:{click:function(){Object(r["a"])({content:e.form[e.platform].url,success:function(){e.$message.success("复制成功")}})}}},["复制"])]),t("el-button",{class:"download--btn",attrs:{plain:!0},on:{click:function(){Object(s["a"])(e.form[e.platform].image,"招募令")}}},["下载","weapp"===e.platform?"小程序":"wechat"===e.platform?"公众号":null,"码"])])])])},mounted:function(){var t=this,e={page:"promoter/pages/recruit",scene:"behavior=recruiting&invite_id=0"};Object(p["o"])(e).then((function(e){t.form=e}))}},f=u,m=(o("becf"),o("2877")),d=Object(m["a"])(f,n,a,!1,null,"55426c11",null);e["a"]=d.exports},9857:function(t,e,o){},becf:function(t,e,o){"use strict";o("9857")}}]);