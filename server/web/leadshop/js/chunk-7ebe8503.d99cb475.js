(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ebe8503"],{"19c5":function(t,e,s){"use strict";s("9730")},"4bf3":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"le-matter le-card"},[s("div",[s("el-autocomplete",{staticClass:"he-input",attrs:{placeholder:"输入分类搜索","trigger-on-focus":!1,"fetch-suggestions":function(e,s){t.querySearch(e,s,"searchList")}},on:{select:function(e){t.handleSelect(e)}},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSelect(null)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getSearch},slot:"append"})],1),s("he-link",{attrs:{href:"goods/groupPublish"}},[s("el-button",{attrs:{type:"primary"}},[t._v("添加分类")])],1)],1),s("div",{staticClass:"le-line"}),s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-sub"},[t._m(0),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[t._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[t._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[t._v("操作")])]),0===t.first.length?s("div",{staticClass:"he-group__empty"},[t._v("该分类下暂无内容")]):t._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},t._l(t.first,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",style:t.chooseIndex.first===o?"background-color:#F7F5FE;":"",on:{click:function(e){return t.chooseClick("first",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("img",{staticClass:"he-img",attrs:{src:e.icon,alt:""}}),s("div",{staticClass:"he-title"},[t._v(t._s(e.name))])]),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[t._v(" "+t._s(e.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:e.popover,callback:function(s){t.$set(e,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return e.stopPropagation(),t.cancel(o,"first")}}},[t._v("取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return e.stopPropagation(),t.sortChange(o,"first")}}},[t._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return t.editSort(e)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:e.id}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v(" 编辑 ")])],1),s("span",[t._v("|")]),s("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:e},expression:"{\n                                promoteType: 'group',\n                                data: item\n                                }",modifiers:{promote:!0}}],staticClass:"he-class__button-new",attrs:{type:"text",title:"推广",top:"25vh",module:"goods",width:"791",id:e.id+"_promote1",hide_footer:!0}},[t._v(" 推广 ")]),s("span",[t._v("|")]),s("popconfirm",{attrs:{width:"392px",title:"分类删除请谨慎，确定删除？"},on:{confirm:function(e){return t.deleteGroup({key:"first",index:o})}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v("删除")])],1)],1)])})),0)],1)]),s("div",{staticClass:"flex-sub"},[t._m(1),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[t._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[t._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[t._v("操作")])]),0===t.second.length?s("div",{staticClass:"he-group__empty"},[t._v("该分类下暂无内容")]):t._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},t._l(t.second,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",style:t.chooseIndex.second===o?"background-color:#F7F5FE;":"",on:{click:function(e){return t.chooseClick("second",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("img",{staticClass:"he-img",attrs:{src:e.icon,alt:""}}),s("div",{staticClass:"he-title"},[t._v(t._s(e.name))])]),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[t._v(" "+t._s(e.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:e.popover,callback:function(s){t.$set(e,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return e.stopPropagation(),t.cancel(o,"second")}}},[t._v(" 取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return e.stopPropagation(),t.sortChange(o,"second")}}},[t._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return t.editSort(e)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:e.id}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v(" 编辑 ")])],1),s("span",[t._v("|")]),s("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:e},expression:"{\n                                promoteType: 'group',\n                                data: item\n                            }",modifiers:{promote:!0}}],staticClass:"he-class__button-new",attrs:{type:"text",title:"推广",top:"25vh",module:"goods",width:"791",id:e.id+"_promote1",hide_footer:!0}},[t._v(" 推广 ")]),s("span",[t._v("|")]),s("popconfirm",{attrs:{width:"392px",title:"分类删除请谨慎，确定删除？"},on:{confirm:function(e){return t.deleteGroup({key:"second",index:o})}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v("删除")])],1)],1)])})),0)],1)]),s("div",{staticClass:"flex-sub"},[t._m(2),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[t._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[t._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[t._v("操作")])]),0===t.third.length?s("div",{staticClass:"he-group__empty"},[t._v("该分类下暂无内容")]):t._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},t._l(t.third,(function(e,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",on:{click:function(e){return t.chooseClick("third",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("img",{staticClass:"he-img",attrs:{src:e.icon,alt:""}}),s("div",{staticClass:"he-title"},[t._v(t._s(e.name))])]),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[t._v(" "+t._s(e.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:e.popover,callback:function(s){t.$set(e,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return e.stopPropagation(),t.cancel(o,"third")}}},[t._v("取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return e.stopPropagation(),t.sortChange(o,"third")}}},[t._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return t.editSort(e)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:e.id}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v(" 编辑 ")])],1),s("span",[t._v("|")]),s("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:e},expression:"{\n                                            promoteType: 'group',\n                                            data: item\n                                        }",modifiers:{promote:!0}}],staticClass:"he-class__button-new",attrs:{type:"text",title:"推广",top:"25vh",module:"goods",width:"791",id:e.id+"_promote1",hide_footer:!0}},[t._v(" 推广 ")]),s("span",[t._v("|")]),s("popconfirm",{attrs:{width:"392px",title:"分类删除请谨慎，确定删除？"},on:{confirm:function(e){return t.deleteGroup({key:"third",index:o})}}},[s("el-button",{staticClass:"he-class__button-new",attrs:{type:"text"}},[t._v("删除")])],1)],1)])})),0)],1)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[t._v("一级分类")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[t._v("二级分类")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[t._v("三级分类")])])}],n=s("1da1"),r=(s("d81d"),s("159b"),s("b0c0"),s("99af"),s("841c"),s("ac1f"),s("1276"),s("a9e3"),s("4de4"),s("96cf"),s("d8df")),a=s("c0b5"),c={components:{HelpHint:a["a"],popconfirm:r["a"]},data:function(){return{activeName:"first",search:"",searchChoose:null,searchList:[],nameList:{},list:[],first:[],second:[],third:[],chooseIndex:{first:0,second:0},sort:0,group_show:0,style_index:0}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getList(),t.getSetting();case 2:case"end":return e.stop()}}),e)})))()},methods:{chooseClick:function(t,e){this.chooseIndex[t]=e,this.listBuild()},listBuild:function(){this.first=this.list,this.second=this.first[this.chooseIndex.first].children?this.first[this.chooseIndex.first].children:[],this.third=this.second[this.chooseIndex.second]&&this.second[this.chooseIndex.second].children?this.second[this.chooseIndex.second].children:[]},getList:function(){var t=this;this.$heshop.group("get",{include:"goods"}).then((function(e){e=e.map((function(t){return t.popover=!1,t.show=!0,t})),t.list=t.$heshop.toTree({parentKey:"parent_id",idKey:"id",parentId:0,childrenKey:"children"}).on(e).get(),t.list.forEach((function(e){e.value=e.name,t.searchList.push(e),e.children&&e.children.forEach((function(s){s.type=e.type,s.value="".concat(e.value," > ").concat(s.name),t.searchList.push(s),s.children&&s.children.forEach((function(e){e.value="".concat(s.value," > ").concat(e.name),t.searchList.push(e)}))}))})),t.listBuild()})).catch((function(e){t.$message.error(e.data.message)}))},hintRender:function(){return this.$createElement("HelpHint",{props:{content:"序号越大，排序越靠前"}},"排序")},cancel:function(t,e){this.$set(this[e][t],"popover",!1)},sortChange:function(t,e){var s=this;this[e][t].popover=!1;var o=this.$heshop.utils.deepClone(this[e][t]);o.sort=this.sort,this.$heshop.group("put",{id:this[e][t].id,include:"goods"},o).then((function(){s[e][t].sort=s.sort})).catch((function(t){s.$message.error(t.data[0].message)}))},editSort:function(t){this.sort=t.sort},deleteGroup:function(t){var e=this;this.$heshop.group("delete",this[t.key][t.index].id,{include:"goods"}).then((function(){e.$message.success("删除成功"),e.$delete(e[t.key],t.index)})).catch((function(t){403===t.data.status&&e.$message.error(t.data.message)}))},catShow:function(t,e,s){t.is_run&&this.first.forEach((function(e,s){t.show?e.show=!0:e.show=t.index===s})),e.is_run&&this.second.forEach((function(t,s){e.show?t.show=!0:t.show=e.index===s})),s.is_run&&this.third.forEach((function(t,e){s.show?t.show=!0:t.show=s.index===e}))},getSearch:function(){var t=this,e={is_run:!1,show:!1,index:-1},s={is_run:!1,show:!1,index:-1},o={is_run:!1,show:!1,index:-1};if(this.search){var i=null;if(this.searchChoose?i=this.searchChoose:this.searchList.forEach((function(e){e.value==t.search&&(i=e)})),i){var n=i.path.split("-").map(Number),r=n.length;this.first.forEach((function(a,c){r>1?a.id===n[1]&&(t.chooseIndex.first=c,e={is_run:!0,show:!1,index:c}):a.id===i.id&&(t.chooseIndex.first=c,t.chooseIndex.second=0,e={is_run:!0,show:!1,index:c},s={is_run:!0,show:!0,index:-1},o={is_run:!0,show:!0,index:-1})})),r>1&&this.first[this.chooseIndex.first].children.forEach((function(e,a){r>2?e.id===n[2]&&(t.chooseIndex.second=a,s={is_run:!0,show:!1,index:a}):e.id===i.id&&(t.chooseIndex.second=a,s={is_run:!0,show:!1,index:a},o={is_run:!0,show:!0,index:-1})})),r>2&&this.first[this.chooseIndex.first].children[[this.chooseIndex.second]].children.forEach((function(t,e){t.id===i.id&&(o={is_run:!0,show:!1,index:e})})),this.listBuild()}else this.second=[],this.third=[],e={is_run:!0,show:!1,index:-1}}else this.chooseIndex={first:0,second:0},e={is_run:!0,show:!0,index:-1},s={is_run:!0,show:!0,index:-1},o={is_run:!0,show:!0,index:-1},this.listBuild();this.catShow(e,s,o)},handleSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.searchChoose=t,this.getSearch()},querySearch:function(t,e,s){var o=this[s],i=t?o.filter((function(e){return e.value.toLowerCase().indexOf(t.toLowerCase())>=0})):o;this.searchChoose=null;var n=JSON.parse(JSON.stringify(i));e(n)},getSetting:function(){var t=this;this.$heshop.search("post",{include:"setting"},{keyword:"goods_group_setting"}).then((function(e){e&&(t.group_show=t.style_index=e.content.group_show)})).catch((function(e){t.$message.error(e.data.message)}))},enable:function(){var t=this,e={keyword:"goods_group_setting",content:{group_show:this.style_index}};this.$heshop.setting("post",e).then((function(){t.group_show=t.style_index})).catch((function(e){t.$message.error(e.data.message)}))}}},l=c,h=(s("19c5"),s("2877")),p=Object(h["a"])(l,o,i,!1,null,"c4c02848",null);e["default"]=p.exports},"50da":function(t,e,s){"use strict";s("9f5d")},9730:function(t,e,s){},"9f5d":function(t,e,s){},c0b5:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("span",{staticStyle:{"margin-right":"8px"}},[t._t("default")],2),s("el-popover",{attrs:{trigger:"hover",content:t.content,placement:t.placement}},[s("he-icon",{staticClass:"he-annotation",attrs:{slot:"reference",type:"le-icon-annotation"},slot:"reference"})],1)],1)},i=[],n={name:"HelpHint",props:{placement:{default:"top"},content:String}},r=n,a=(s("50da"),s("2877")),c=Object(a["a"])(r,o,i,!1,null,"565b8067",null);e["a"]=c.exports}}]);