(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-material"],{"0e28":function(t,e,n){"use strict";n.d(e,"q",(function(){return u})),n.d(e,"t",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"L",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"j",(function(){return m})),n.d(e,"z",(function(){return p})),n.d(e,"x",(function(){return h})),n.d(e,"u",(function(){return g})),n.d(e,"y",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"v",(function(){return b})),n.d(e,"w",(function(){return y})),n.d(e,"D",(function(){return P})),n.d(e,"d",(function(){return _})),n.d(e,"i",(function(){return k})),n.d(e,"C",(function(){return I})),n.d(e,"B",(function(){return A})),n.d(e,"E",(function(){return N})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return $})),n.d(e,"A",(function(){return T})),n.d(e,"h",(function(){return E})),n.d(e,"F",(function(){return C})),n.d(e,"l",(function(){return D})),n.d(e,"n",(function(){return G})),n.d(e,"I",(function(){return x})),n.d(e,"m",(function(){return j})),n.d(e,"H",(function(){return L})),n.d(e,"J",(function(){return z})),n.d(e,"p",(function(){return q})),n.d(e,"b",(function(){return U})),n.d(e,"K",(function(){return X})),n.d(e,"G",(function(){return S})),n.d(e,"s",(function(){return R})),n.d(e,"g",(function(){return H})),n.d(e,"o",(function(){return J})),n.d(e,"r",(function(){return B}));n("2769"),n("ecf1"),n("f49b"),n("b1fa");var o=n("430a"),r=(n("6afd"),n("2070"),n("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function a(t){Object.keys(t.headers).forEach((function(e){t.headers[e.toUpperCase()]=t.headers[e],delete t.headers[e]}));var e={current:1,pageCount:1,totalCount:1};r.forEach((function(e){Object.keys(t.headers).map((function(n){e===n&&(t.headers[n]=parseInt(t.headers[n]))}))})),e.current=t.headers["X-PAGINATION-CURRENT-PAGE"],e.pageCount=t.headers["X-PAGINATION-PAGE-COUNT"],e.totalCount=t.headers["X-PAGINATION-TOTAL-COUNT"],t.pagination=e}n("7c98");var i=o["default"].prototype.$heshop,c=o["default"].prototype.$message.error;function u(t){var e=t.tabKey,n=void 0===e?"all":e,o=t.page,r=void 0===o?1:o,u=t.search,s=void 0===u?"":u,l=t.sort,d=void 0===l?{}:l,f=t.time_start,m=void 0===f?0:f,p=t.time_end,h=void 0===p?0:p,g=t.cost_status,v=void 0===g?null:g,w=t.is_promoter,b=void 0===w?null:w,y=t.group,P=void 0===y?[]:y,_=t.price_start,k=void 0===_?"":_,I=t.price_end,A=void 0===I?"":I;return new Promise((function(t){i.search("post",{include:"goods"},{keyword:{tab_key:n,search:s,sort:d,time_start:m,time_end:h,is_promoter:b,cost_status:v,group:P,price_start:k,price_end:A}}).page(r,10).then((function(e){a(e);var n=e.data,o=e.pagination;t({data:n,pagination:o})})).catch((function(t){c(t.data.message)}))}))}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(r,a){i.promotergoods("put",{type:t,id:e,tab_key:n},{is_promoter:o}).then(r).catch(a)}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.promoter("post",t).then(e).catch((function(t){c(t.data.message),n(t)}))}))}function d(t){return new Promise((function(e,n){i.promoter("get",{behavior:"add_search",search:t}).then((function(t){e(t)})).catch((function(t){c(t.data.message),n(t)}))}))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keyword:"",begin_time:null,end_time:null,type:null,level:null};return new Promise((function(n){i.finance("get",e).page(t,10).then((function(t){a(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){c(t.data.message)}))}))}function m(t,e,n){return t=parseInt(t),new Promise((function(o,r){i.finance("put",t,{status:e,content:n}).then(o).catch((function(t){r(t)}))}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.search("post",{include:"promoterorder"},e).page(t,10).then((function(t){a(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){c(t.data.message)}))}))}function h(){return new Promise((function(t){i.promoterlevel("get").then(t).catch((function(t){c(t.data.message)}))}))}function g(t){return t=parseInt(t),new Promise((function(e){i.promoterlevel("delete",t).then(e).catch((function(t){c(t.data.message)}))}))}function v(){return new Promise((function(t){i.promoterlevel("get",{behavior:"option"}).then(t).catch((function(t){c(t.data.message)}))}))}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.promoterlevel("post",t).then(e).catch((function(t){c(t.data.message),n(t)}))}))}function b(t){return t=parseInt(t),new Promise((function(e){i.promoterlevel("get",t).then(e).catch((function(t){c(t.data.message)}))}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=parseInt(t),new Promise((function(n,o){i.promoterlevel("put",t,e).then(n).catch((function(t){c(t.data.message),o(t)}))}))}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return new Promise((function(n){i.promotermaterial("get",e).page(t,10).then((function(t){a(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){c(t.data.message)}))}))}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e){i.promotermaterial("post",t).then(e).catch((function(t){c(t.data.message)}))}))}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promotermaterial("put",t,e).then(n).catch((function(t){c(t.data.message)}))}))}function I(t){return new Promise((function(e){i.promotermaterial("get",t).then(e).catch((function(t){c(t.data.message)}))}))}function A(t){return new Promise((function(e){i.promotermaterial("delete",t).then(e).catch((function(t){c(t.data.message)}))}))}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promoterzone("get",e).page(t,10).then((function(t){a(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){c(t.data.message)}))}))}function O(t){return new Promise((function(e){i.promoterzone("post",t).then(e).catch((function(t){c(t.data.message)}))}))}function $(t){return new Promise((function(e){i.promoterzone("delete",t).then(e).catch((function(t){c(t.data.message)}))}))}function T(t){return t=parseInt(t),new Promise((function(e){i.promoterzone("get",t).then((function(t){e(t)})).catch((function(t){c(t.data.message)}))}))}function E(t,e){return t=parseInt(t),new Promise((function(n,o){i.promoterzone("put",t,e).then(n).catch((function(t){o(t),c(t.data.message)}))}))}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"commission_setting",content:t}).then(e).catch((function(t){n(t)}))}))}function D(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"commission_setting"}).then(t).catch((function(t){c(t.data.message),e()}))}))}function G(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_setting"}).then(t).catch((function(t){c(t.data.message),e()}))}))}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_setting",content:t}).then(e).catch((function(t){n(t)}))}))}function j(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_rank"}).then(t).catch((function(t){c(t.data.message),e()}))}))}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_rank",content:t}).then(e).catch((function(t){n(t)}))}))}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_recruit_make",content:t}).then(e).catch((function(t){n(t)}))}))}function q(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(e){t(e.content)})).catch((function(t){c(t.data.message),e()}))}))}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){i.promoter("put",{id:t,behavior:e},n).then(o).catch((function(t){c(t.data.message),r()}))}))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uid:"",mobile:""};return new Promise((function(e,n){i.promoter("get",{behavior:"transfer_search",from_uid:t.uid,mobile:t.mobile}).then(e).catch((function(t){c(t.data.message),n(t)}))}))}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){i.setting("post",{keyword:"promoter_page_setting",content:t}).then(e).catch((function(t){c(t.data.message),n(t)}))}))}function R(){return new Promise((function(t,e){i.search("post",{include:"setting"},{keyword:"promoter_page_setting"}).then((function(e){t(e.content)})).catch((function(t){c(t.data.message),e(t)}))}))}function H(t,e){return new Promise((function(n,o){i.promoter("put",parseInt(t),{level:e}).then(n).catch((function(t){c(t.data.message),o(t)}))}))}function J(t){return new Promise((function(e,n){i.qrcode("post",t).then(e).catch((function(t){c(t.data.message),n(t)}))}))}function B(){return new Promise((function(t,e){i.group("get",{include:"goods"}).then((function(e){t(e)})).catch((function(t){c(t.data.message),e(t)}))}))}},"2f1b":function(t,e,n){"use strict";n.r(e);var o,r,a=n("4c02"),i=n.n(a),c=(n("3f7e"),n("f5bd"),n("eb62"),n("0e28")),u=n("8236"),s={name:"material",data:function(){return{form:{type:"",name:"",created_time:[],page:1},list:[],page:{count:1}}},mixins:[u["a"]],mounted:function(){this.materialList()},methods:{filter:function(){this.materialList()},empty:function(){this.form={type:"",name:"",created_time:[],page:1},this.filter()},materialList:function(){var t=this,e=this.$_.cloneDeep(this.form);e.created_time.length?(e.begin_time=e.created_time[0]/1e3,e.end_time=e.created_time[1]/1e3):(e.begin_time=0,e.end_time=0),delete e.created_time,Object(c["D"])(e.page,e).then((function(e){var n=e.data,o=e.pagination;t.page.count=o.pageCount,t.form.page=o.current,t.list=n}))},switchPage:function(t){this.form.page=t,this.materialList()},deleteDynamic:function(t,e){var n=this;this.$confirm("是否确认删除此素材？").then((function(){Object(c["B"])(t.id).then((function(){n.$delete(n.list,e),n.$message.success("删除成功")}))})).catch((function(){}))},createDynamic:function(){this.$router.push({path:"/promoter/material-edit"})},editDynamic:function(t){this.$router.push({path:"/promoter/material-edit",query:{id:t.id}})}},render:function(){var t=this,e=arguments[0],n=[{label:"全部",value:""},{label:"图片",value:"1"},{label:"视频",value:"2"}],o=this;return e("div",{class:"le-main"},[e("el-button",{attrs:{type:"primary"},on:{click:o.createDynamic}},["添加素材"]),e("el-form",i()([{},{props:{model:o.form}},{class:"le-card",attrs:{inline:!0,"label-width":"110px"}}]),[e("el-form-item",{attrs:{label:"素材名称搜索"}},[e("el-input",i()([{attrs:{value:o.form.name},on:{input:function(t){o.form.name=t}}},{nativeOn:{keyup:function(t){"Enter"===t.key&&o.materialList()}}},{attrs:{clearable:!0,placeholder:"输入素材名称搜索"},on:{clear:function(){o.materialList()}},model:{value:o.form.name,callback:function(e){t.$set(o.form,"name",e)}}}]))]),e("el-form-item",{attrs:{label:"素材类型"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:o.form.type,callback:function(e){t.$set(o.form,"type",e)}}},[n.map((function(t,n){return e("el-option",{key:n,attrs:{label:t.label,value:t.value}})}))])]),e("el-form-item",{attrs:{label:"创建时间"}},[e("el-date-picker",{attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:o.form.created_time,callback:function(e){t.$set(o.form,"created_time",e)}}})]),e("div",{class:"le-button"},[e("el-button",{attrs:{type:"primary"},on:{click:o.filter}},["筛选"]),e("el-button",{on:{click:o.empty}},["清空"])])]),e("div",{class:"le-card le-table"},[e("el-table",i()([{attrs:{"row-class-name":"le-table-row"}},{props:{data:o.list}}]),[e("el-table-column",{attrs:{label:"素材名称",prop:"name"}}),e("el-table-column",{attrs:{label:"素材文案","min-width":"260",prop:"content"},scopedSlots:{default:function(t){return e("el-popover",{attrs:{placement:"top-start",width:"400",trigger:"hover",content:t.row.content}},[e("div",{class:"he-line-2",slot:"reference"},[t.row.content])])}}}),e("el-table-column",{attrs:{label:"素材类型",prop:"type","min-width":"104"},scopedSlots:{default:function(t){return 1===t.row.type?"图片":2===t.row.type?"视频":void 0}}}),e("el-table-column",{attrs:{label:"关联商品",width:"260"},scopedSlots:{default:function(t){return o.$_.isEmpty(t.row.goods)?"— —":e("div",{class:"flex"},[e("el-image",{class:"le-goods-image",attrs:{lazy:!0,src:t.row.goods.slideshow[0]}}),e("div",{class:"flex-sub le-goods-info"},[e("div",{class:"le-goods-name he-line-2"},[t.row.goods.name]),e("div",{class:"le-goods-parameter"},[function(){if(t.row.goods_sn)return[["货号:".concat(t.row.goods_sn)],[e("br")]]}(),"ID:",t.row.goods.id])])])}}}),e("el-table-column",{attrs:{label:"分享次数",prop:"share_count"}}),e("el-table-column",{attrs:{label:"创建时间",width:"200"},scopedSlots:{default:function(t){return o.$moment(new Date(1e3*t.row.created_time)).format("Y-MM-DD HH:mm:ss")}}}),e("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:{default:function(t){return e("div",{class:"le-table-operate flex align-center"},[e("el-button",{attrs:{type:"text"},on:{click:o.editDynamic.bind(o,t.row)}},["编辑"]),e("span",{class:"le-line"}),e("el-button",{attrs:{type:"text"},on:{click:o.deleteDynamic.bind(o,t.row,t.$index)}},["删除"])])}}})]),e("div",{class:"flex le-pagination justify-end"},[e("el-pagination",{attrs:{background:!0,"current-page":o.form.page,layout:"prev, pager, next, jumper","page-count":o.page.count},on:{"current-change":o.switchPage}})])])])}},l=s,d=(n("543e"),n("4ac2")),f=Object(d["a"])(l,o,r,!1,null,"63ae7d83",null);e["default"]=f.exports},"543e":function(t,e,n){"use strict";n("bbdc")},8236:function(t,e,n){"use strict";n("2769"),n("0756"),n("6afd"),n("2070");e["a"]={data:function(){},methods:{replaceQuery:function(){var t=Object.assign({},this.$route.query,this.form);this.$router.replace({query:t})},getQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],e=this.$route.query;return Object.keys(e).forEach((function(n){for(var o=0;o<t.length;o++)t[o]===n&&(isNaN(e[n])?e[n]=1:e[n]=parseInt(e[n]))})),Object.assign(this.form,e)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},bbdc:function(t,e,n){}}]);