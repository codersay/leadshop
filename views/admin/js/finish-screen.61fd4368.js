(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["finish-screen"],{"8d09":function(t,e,a){},e4db:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen"},[a("div",{staticClass:"screen-setting"},[a("div",{staticClass:"screen-setting_left"},[a("div",{staticClass:"__phone"},[a("div",{staticClass:"__phone_window"},[t.facade.chamfer_skip?a("div",{staticClass:"is_skip"},[a("div",{staticClass:"is_skip_bg"}),a("div",{staticClass:"is_skip_txt"},[t._v("跳过")])]):t._e(),a("el-carousel",{class:{circle:1==t.facade.indicator_style,strip:2==t.facade.indicator_style,number:3==t.facade.indicator_style,left:"left"===t.facade.indicator_align,center:"center"===t.facade.indicator_align,right:"right"===t.facade.indicator_align},attrs:{trigger:"click",height:"1206px",arrow:"never",interval:3e3},on:{change:t.handleChange}},t._l(t.img_content,(function(e,i){return a("el-carousel-item",{key:i},[a("img",{attrs:{src:t.getBannerImg(e.url),width:"100%",height:"100%"}})])})),1),3==t.facade.indicator_style?a("div",{staticClass:"carousel_number",class:{left:"left"===t.facade.indicator_align,center:"center"===t.facade.indicator_align,right:"right"===t.facade.indicator_align}},[t._v(" "+t._s(t.activeNumber+"/"+t.img_content.length)+" ")]):t._e()],1)])]),a("div",{staticClass:"screen-setting_right"},[a("div",{staticClass:"__tabs"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"内容设置",name:"first"}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"显示设置"}},[a("el-radio-group",{model:{value:t.displayType,callback:function(e){t.displayType=e},expression:"displayType"}},[a("el-radio",{attrs:{label:1}},[t._v("首次打开商城时")]),a("el-radio",{attrs:{label:2}},[t._v("按周期显示")])],1),2===t.displayType?a("div",{staticClass:"le-input--120"},[t._v(" 每 "),a("el-input",{attrs:{maxlength:5},model:{value:t.days,callback:function(e){t.days=t._n(e)},expression:"days"}},[a("template",{slot:"append"},[t._v(" 天 ")])],2),t._v(" 显示一次 ")],1):t._e()],1),a("el-form-item",{attrs:{label:"图片设置"}},[a("div",{staticClass:"le-prompt-text"},[t._v("最多添加5张开屏广告图，建议图片尺寸：1080px*1920px")]),a("div",{staticClass:"flex flex-wrap"},[a("vuedraggable",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},t._l(t.content,(function(e,i){return a("div",{key:i,staticClass:"_imagelist_item select-cover__288"},[a("i",{staticClass:"le-icon le-icon-cha2 _imagelist_item-close",on:{click:function(e){return e.stopPropagation(),t.handleDelete(i)}}}),a("pictureDialog",{scopedSlots:t._u([{key:"preview",fn:function(t){return a("div",{staticClass:"select-cover__288-edit"},[a("el-image",{attrs:{src:t.url,fit:"cover"}})],1)}}],null,!0),model:{value:e.url,callback:function(a){t.$set(e,"url",a)},expression:"item.url"}},[a("div",{staticClass:"select-cover__288-add",attrs:{slot:"upload"},slot:"upload"},[a("i",{staticClass:"le-icon le-icon-add select-cover__288-icon"}),a("span",{staticClass:"select-cover__288-text"},[t._v("添加图片")])])])],1)})),0),t.content.length<5?a("div",{staticClass:"_imagelist_item select-cover__288"},[a("pictureDialog",{on:{confirm:t.addAd}},[a("div",{staticClass:"select-cover__288-add",attrs:{slot:"upload"},slot:"upload"},[a("i",{staticClass:"le-icon le-icon-add select-cover__288-icon"}),a("span",{staticClass:"select-cover__288-text"},[t._v("添加图片")])]),a("div",{staticClass:"clear"})])],1):t._e()],1)])],1)],1),a("el-tab-pane",{attrs:{label:"样式设置",name:"second"}},[a("p",{staticClass:"_explain"},[t._v("首次打开商城时，以全屏的方式展示广告图")]),a("el-form",{ref:"form",attrs:{model:t.facade,"label-width":"90px",size:"mini","label-position":"left"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"control-item-title"},[t._v("指示器样式")]),a("choice",{attrs:{data:t.pointerData,group:"pointer"},model:{value:t.facade.indicator_style,callback:function(e){t.$set(t.facade,"indicator_style",e)},expression:"facade.indicator_style"}}),a("el-divider"),a("div",{staticClass:"control-item-title"},[t._v("指示器位置")]),a("choice",{attrs:{data:t.positionData,group:"positio"},model:{value:t.facade.indicator_align,callback:function(e){t.$set(t.facade,"indicator_align",e)},expression:"facade.indicator_align"}}),a("el-divider"),a("div",{staticClass:"control-item-title"},[t._v("颜色设置")]),a("el-form-item",{attrs:{label:"选中颜色"}},[a("colour",{attrs:{colour:"#666666"},model:{value:t.facade.indicator_color,callback:function(e){t.$set(t.facade,"indicator_color",e)},expression:"facade.indicator_color"}})],1),a("el-divider"),a("div",{staticClass:"control-item-title"},[t._v("浏览方式设置")]),a("el-form-item",{attrs:{label:"允许跳过"}},[a("el-switch",{attrs:{"active-color":"#623CEB","inactive-color":"#BBBFC8"},model:{value:t.facade.chamfer_skip,callback:function(e){t.$set(t.facade,"chamfer_skip",e)},expression:"facade.chamfer_skip"}})],1)],1)],1)],1)],1)])]),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("保存")])],1)])},n=[],c=a("1da1"),s=(a("a434"),a("ac1f"),a("841c"),a("96cf"),a("2760")),l=a("3ec8"),o=a("b76a"),r=a.n(o),d={components:{choice:s["a"],colour:l["a"],vuedraggable:r.a},data:function(){return{activeName:"first",activeNumber:1,displayType:1,days:7,content:[{url:""}],def_content:[{url:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/template/ad_1.png"},{url:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/template/ad_2.png"},{url:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/template/ad_3.png"}],facade:{indicator_style:"1",indicator_align:"left",indicator_color:"#666666",chamfer_skip:!0},pointerData:[{value:2,icon:"le-icon-graphic-point2",name:"圆角"},{value:1,icon:"le-icon-graphic-point",name:"圆形"},{value:3,icon:"le-icon-zhishiqi-shuzi",name:"数字"}],positionData:[{value:"left",icon:"le-icon-graphic-left",name:"居左"},{value:"center",icon:"le-icon-graphic-middle",name:"居中"},{value:"right",icon:"le-icon-graphic-right",name:"居右"}]}},computed:{img_content:function(){return 0===this.content.length?this.def_content:1!=this.content.length||this.content[0].url?this.content:this.def_content}},created:function(){},watch:{},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.handleLoaddata();case 1:case"end":return e.stop()}}),e)})))()},methods:{getBannerImg:function(t){return t},handleChange:function(t){this.activeNumber=t+1,this.handleStyle(),this.getBannerImg()},handleStyle:function(){for(var t=this.facade.indicator_color,e=document.querySelectorAll(".el-carousel__indicator.el-carousel__indicator--horizontal .el-carousel__button"),a=document.querySelectorAll(".el-carousel__indicator.el-carousel__indicator--horizontal.is-active .el-carousel__button"),i=e.length-1;i>=0;i--)e[i].style.backgroundColor="#FFFFFF",e[i].style.opacity=1;a[0].style.backgroundColor=t},handleClick:function(){},handleDelete:function(t){this.content.splice(t,1)},handleAdd:function(){this.content.length<5?this.content.push({url:"",link:{}}):this.$message({message:"最多添加5张轮播图片",type:"warning"})},handleLoaddata:function(){var t=this;this.$heshop.search("POST",{include:"setting"},{keyword:"openingad"}).then((function(e){e&&e.content&&(t.content=e.content.content,t.facade=e.content.facade,t.displayType=e.content.type?e.content.type:1,t.days=e.content.days)})).catch((function(){t.$message.error("加载配置信息失败，请检查网络")}))},handleSubmit:function(){for(var t=this,e=0;e<this.content.length;e++)if(!this.content[e].url)return void this.$message.error("图片不能为空");this.$heshop.setting("post",{keyword:"openingad",content:{content:this.content,facade:this.facade,type:this.displayType,days:this.days,submit_time:Date.parse(new Date)}}).then((function(){t.$message({message:"保存成功",type:"success"})})).catch((function(){t.$message.error("加载配置信息失败，请检查网络")}))},addAd:function(t){this.content.push({url:t,link:{}})}}},u=d,p=(a("f3c0"),a("2877")),_=Object(p["a"])(u,i,n,!1,null,"fb1c52c2",null);e["default"]=_.exports},f3c0:function(t,e,a){"use strict";a("8d09")}}]);