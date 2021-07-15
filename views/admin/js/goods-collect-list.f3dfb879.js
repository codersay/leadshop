(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-collect-list"],{5241:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"le-master"},[a("div",{staticClass:"le-header le-card"},[a("el-form",{attrs:{inline:"","label-width":"110px"}},[a("el-form-item",{staticClass:"le-goods-search",attrs:{label:"商品搜索"}},[a("el-input",{attrs:{placeholder:"输入商品名称搜索",clearable:""},on:{clear:t.searchTabs},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchTabs.apply(null,arguments)}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{staticClass:"le-platform-search",attrs:{label:"来源平台"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticClass:"le-time-search",attrs:{label:"采集时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"开始时间"},model:{value:t.form.begin_time,callback:function(e){t.$set(t.form,"begin_time",e)},expression:"form.begin_time"}}),a("span",{staticClass:"le-timego-search"},[t._v("至")]),a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"结束时间"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1)],1),a("div",{staticClass:"le-button-search"},[a("el-button",{attrs:{type:"primary"},on:{click:t.searchTabs}},[t._v("筛选")]),a("el-button",{on:{click:t.empty}},[t._v("清空")])],1)],1),a("el-tabs",{staticClass:"le-tabs",attrs:{type:"card"},on:{"tab-click":t.searchTabs},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-tab-pane",{attrs:{label:"全部",name:"all"}},[a("listTable",{attrs:{list:t.list,pagination:t.pagination,loading:t.loading},on:{page:t.getList}})],1),a("el-tab-pane",{attrs:{label:"采集成功",name:"success"}},[a("listTable",{attrs:{list:t.list,pagination:t.pagination,loading:t.loading},on:{page:t.getList}})],1),a("el-tab-pane",{attrs:{label:"采集失败",name:"error"}},[a("listTable",{attrs:{list:t.list,pagination:t.pagination,loading:t.loading},on:{page:t.getList}})],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"le-table",attrs:{data:t.list,"row-class-name":"le-table-row"}},[a("el-table-column",{attrs:{label:"商品描述/商品分类","min-width":"404"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex"},[a("el-image",{staticStyle:{width:"64px",height:"64px","flex-shrink":"0"},attrs:{src:e.row.cover,fit:"cover"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),a("div",{staticClass:"le-table-goods flex-twice"},[a("div",{staticClass:"le-table-goodsName he-line-2"},[t._v(" "+t._s(e.row.name)+" ")]),a("div",{staticClass:"le-table-goodsAttr he-line-1"},[t._v(" 分类："+t._s(t._f("getGroup")(e.row.group_text))+" ")])])],1)]}}])}),a("el-table-column",{attrs:{label:"来源平台","min-width":"212"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("platform")(e.row.type))+" ")]}}])}),a("el-table-column",{attrs:{label:"采集状态","min-width":"212"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("el-tag",{attrs:{effect:"plain",size:"medium",type:"success"}},[t._v(" 采集成功 ")]):0===e.row.status?a("el-tag",{attrs:{effect:"plain",size:"medium",type:"danger"}},[t._v(" 采集失败 ")]):2===e.row.status?a("el-tag",{attrs:{effect:"plain",size:"medium",type:"danger"}},[t._v(" 兼容规格出错，采集失败 ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"采集时间","min-width":"264"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("timeFormat")(e.row.created_time,"yyyy.mm.dd hh:MM:ss"))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"flex align-center"},[a("el-button",{staticClass:"le-table-operating",attrs:{type:"text"},on:{click:function(a){return t.delItem(e.row.id,e.$index)}}},[t._v("删除")]),0!==e.row.goods_id?[a("span",{staticClass:"he-btn__span"}),a("el-button",{staticClass:"le-table-operating",attrs:{type:"text"},on:{click:function(a){return t.router(e.row)}}},[t._v("编辑")])]:t._e()],2)]}}])})],1),a("div",{staticClass:"le-pagination flex justify-end"},[a("el-pagination",{attrs:{disabled:t.loading,"current-page":t.pagination.current,"page-count":t.pagination.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":t.pageChange}})],1)],1)},i=[],o=(a("6afd"),a("aa00"),{props:{list:{type:Array},pagination:{type:Object},loading:{type:Boolean}},methods:{pageChange:function(t){this.$emit("page",t)},router:function(t){var e=this.$router.resolve({path:"/goods/publish",query:{id:t.goods_id}});window.open(e.href,"_blank")},delItem:function(t,e){var a=this;this.$confirm("是否确认删除此条采集记录？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){a.$heshop.collect("delete",t).then((function(){a.$delete(a.list,e),a.$message.success("删除成功")})).catch((function(t){a.$message.error(t.data.message)}))})).catch((function(){}))}},filters:{platform:function(t){switch(t){case 1:return"阿里巴巴";case 2:return"淘宝";case 3:return"京东";case 4:return"拼多多";case 5:return"天猫"}},getGroup:function(t){var e="";return t?(t.forEach((function(t){e+=t+"  "})),e=e.slice(0,e.length-2),e):""}}}),r=o,c=(a("52f9"),a("4ac2")),u=Object(c["a"])(r,s,i,!1,null,"a8177bd8",null),m=u.exports,d={components:{listTable:m},data:function(){return{options:[{label:"全部",value:null},{label:"阿里巴巴",value:1},{label:"淘宝",value:2},{label:"京东",value:3},{label:"拼多多",value:4},{label:"天猫",value:5}],value:0,form:{begin_time:null,end_time:null,type:null,name:"",status:"all"},pagination:{current:1,count:1},list:[],loading:!0}},methods:{getList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this;this.loading=!0,this.$heshop.collect("get",e).page(t,10).then((function(t){var e=t.headers,l=t.data;a.pagination={current:+e["x-pagination-current-page"],count:+e["x-pagination-page-count"]},a.list=l,a.loading=!1})).catch((function(t){a.$message.error(t.data.message)}))},empty:function(){this.form={begin_time:null,end_time:null,type:null,name:"",status:"all"},this.getList(1)},searchTabs:function(){var t=JSON.parse(JSON.stringify(this.form));for(var e in t.begin_time&&(t.begin_time=t.begin_time+"",t.begin_time=parseInt(t.begin_time.substring(0,t.begin_time.length-3))),t.end_time&&(t.end_time=t.end_time+"",t.end_time=parseInt(t.end_time.substring(0,t.end_time.length-3))),"all"===t.status?t.status=null:"success"===t.status?t.status=1:"error"===t.status&&(t.status=0),t)t[e]||0===t[e]||delete t[e];this.getList(1,t)}},mounted:function(){this.getList(1)}},p=d,f=(a("691a"),Object(c["a"])(p,l,n,!1,null,"a2112180",null));e["default"]=f.exports},"52f9":function(t,e,a){"use strict";a("ea62")},"691a":function(t,e,a){"use strict";a("e7ba")},e7ba:function(t,e,a){},ea62:function(t,e,a){}}]);