(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["finish-index"],{"37d0":function(t,e,a){"use strict";a("ef7d")},dae8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-page"},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("templateSelect",{staticStyle:{margin:"0"}},[a("el-button",{attrs:{type:"primary"}},[t._v("新建微页面")])],1)],1),a("div",{staticClass:"layout-page-body"},[[a("el-table",{attrs:{data:t.tableData,size:"medium"}},[a("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" "),e.row.status?a("span",{staticClass:"layout-table-tag"},[t._v("首页")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"created_time",label:"创建时间",formatter:t.dateFormat}}),a("el-table-column",{staticClass:"layout-table-action",attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"layout-table-link",attrs:{to:{path:"/package/index",query:{id:e.row.id}},target:"_blank"}},[a("el-button",{attrs:{type:"text",size:"medium"}},[t._v("编辑")])],1),e.row.status?t._e():a("span",{staticClass:"layout-table-line"},[t._v("|")]),e.row.status?t._e():a("popconfirm",{attrs:{width:"320px"},on:{confirm:function(a){return t.handleDelete(e.row)}}},[a("el-button",{attrs:{type:"text",size:"medium"}},[t._v("删除")])],1),a("span",{staticClass:"layout-table-line"},[t._v("|")]),a("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{data:e.row,promoteType:"pages"},expression:"{\n                                            data: scope.row,\n                                            promoteType: 'pages'\n                                   }",modifiers:{promote:!0}}],staticStyle:{margin:"0 5px"},attrs:{type:"text",size:"medium",module:"goods",title:"推广",hide_footer:!0,id:e.row.id,width:"791"}},[t._v("推广")]),e.row.status?t._e():a("span",{staticClass:"layout-table-line"},[t._v("|")]),e.row.status?t._e():a("popconfirm",{attrs:{width:"320px",title:"确认设置该微页面为首页？"},on:{confirm:function(a){return t.handleDefault(e.row)}}},[a("el-button",{attrs:{type:"text",size:"medium"}},[t._v("设为首页")])],1)]}}])})],1),a("div",{staticClass:"layout-table-paging"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,jumper",total:t.pageInfo.total,"page-size":t.pageInfo.size,"current-page":t.pageInfo.current},on:{"current-change":t.handlePageChange}})],1)]],2)])],1)},o=[],s=a("d8df"),i=a("51f9"),r=a("98fa"),l={components:{popconfirm:s["a"],promotion:i["a"],templateSelect:r["a"]},data:function(){return{tableData:[],pageInfo:{size:20,total:0,current:1},fullHeight:document.documentElement.clientHeight}},computed:{scrollHeight:function(){return{height:parseInt(this.fullHeight)-65+"px"}}},watch:{},mounted:function(){var t=this;window.onresize=function(){return function(){window.fullHeight=document.documentElement.clientHeight,t.fullHeight=window.fullHeight}()},this.handleLoadData()},methods:{dateFormat:function(t,e){var a=t[e.property];return void 0===a?"":this.$moment(1e3*a).format("YYYY-MM-DD HH:mm:ss")},handleDelete:function(t){var e=this;this.$heshop.pages("delete",parseInt(t.id)).page(this.pageInfo.current,this.pageInfo.size).then((function(t){e.$message({title:"删除成功",message:"成功删除微页面",type:"success"}),e.handleLoadData()})).catch((function(t){console.error("错误信息",t)}))},handleDefault:function(t){var e=this;t.status=1,this.$heshop.pages("put",{id:t.id,behavior:"setting"},t).then((function(t){e.$message({title:"设置成功",message:"成功设置该微页面为首页",type:"success"}),e.handleLoadData()})).catch((function(t){console.error("错误信息",t)}))},handleLoadData:function(){var t=this;this.$heshop.pages("get").page(this.pageInfo.current,this.pageInfo.size).then((function(e){t.pageInfo={size:parseInt(e.headers["x-pagination-per-page"]),total:parseInt(e.headers["x-pagination-total-count"]),current:parseInt(e.headers["x-pagination-current-page"])},t.tableData=e.data})).catch((function(t){console.error("错误信息",t)}))},handlePageChange:function(t){this.pageInfo.current=t,this.handleLoadData()}}},u=l,c=(a("37d0"),a("cba8")),p=Object(c["a"])(u,n,o,!1,null,"238bab5d",null);e["default"]=p.exports},ef7d:function(t,e,a){}}]);