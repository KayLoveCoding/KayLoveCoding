(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2e44f7"],{"044a":function(t,a,e){},"346d":function(t,a,e){"use strict";e("044a")},"535d":function(t,a,e){},5558:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"kay-card-comp"},[e("div",{staticClass:"header flex-b align-center"},[e("p",{staticClass:"title"},[t._v("快速检索")]),t._t("header")],2),e("div",{staticClass:"content"},[t._t("content")],2),e("div",{staticClass:"footer flex-e align-center"},[t._t("footer")],2)])},n=[],c={data:function(){return{}}},o=c,l=(e("346d"),e("2877")),i=Object(l["a"])(o,s,n,!1,null,"029558d2",null);a["a"]=i.exports},"77f3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("kay-card",{attrs:{title:"快速检索"}},[e("div",{staticClass:"form-box-container",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"form-box"},[e("span",{staticClass:"label"},[t._v("用户名称：")]),e("a-input",{attrs:{placeholder:"用户名称"}})],1),e("div",{staticClass:"form-box"},[e("span",{staticClass:"label"},[t._v("核销状态：")]),e("a-select",{attrs:{"default-value":""}},[e("a-select-option",{attrs:{value:"1"}},[t._v(" 未核销 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 已核销 ")])],1)],1),e("div",{staticClass:"form-box"},[e("span",{staticClass:"label"},[t._v("兑换码：")]),e("a-input",{attrs:{placeholder:"礼物名称"}})],1),e("div",{staticClass:"form-box"},[e("span",{staticClass:"label"},[t._v("礼物获得时间：")]),e("a-range-picker",{staticClass:"f1"})],1),e("div",{staticClass:"form-box"},[e("span",{staticClass:"label"},[t._v("核销时间：")]),t._v(" "),e("a-range-picker",{staticClass:"f1"})],1)]),e("div",{staticClass:"flex-e align-center",attrs:{slot:"footer"},slot:"footer"},[e("a-button",{staticClass:"btn-mr",attrs:{type:"primary"}},[t._v(" 查询 ")]),e("a-button",{attrs:{type:"default"}},[t._v(" 清空 ")])],1)]),e("div",{staticClass:"table-box"},[e("div",{staticClass:"table-header"},[t._m(0),e("div",{staticClass:"flex-b align-center"},[e("a-tag",{attrs:{color:"orange"}},[t._v("渠道：微信")]),e("a-button",{staticClass:"export-btn",attrs:{type:"primary"}},[t._v("导出")])],1)]),e("a-table",{attrs:{columns:t.columns,"data-source":t.data,scroll:{x:t.x},pagination:!1,"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"col4",fn:function(a){return e("a",{staticClass:"black",attrs:{href:"javascript:;"},on:{click:function(a){return t.toPage("/userSys/detail")}}},[t._v(" "+t._s(a)+" ")])}},{key:"col7",fn:function(a){return e("div",{},[a%2==0?e("p",{staticClass:"orange"},[t._v("未核销")]):e("p",{staticClass:"green"},[t._v("已核销")])])}},{key:"col10",fn:function(a,s){return e("span",{},[e("a",{staticClass:"link",attrs:{href:"javascript:;"},on:{click:function(a){return t.toPage("/userSys/detail",s)}}},[t._v("【详情】")])])}},{key:"col8",fn:function(a,s,n){return e("span",{},[t._v(" "+t._s(n%2==0?a:"--")+" ")])}}])}),e("div",{staticClass:"page-box flex-e"},[e("a-pagination",{attrs:{total:t.total,hideOnSinglePage:""},on:{change:t.changePage},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"flex align-center stastic"},[e("span",[t._v("已获得礼物数：100")]),e("span",[t._v("已核销数：50")])])}],c=e("83abe"),o=e("5558"),l=e("ca00"),i={mixins:[c["a"]],data:function(){return{columns:[{title:"品牌名称",dataIndex:"col1"},{title:"礼物名称",dataIndex:"col2"},{title:"兑换码",dataIndex:"col3",width:150},{title:"获奖用户名称",dataIndex:"col4",scopedSlots:{customRender:"col4"}},{title:"数量",dataIndex:"col5"},{title:"礼物获得时间",dataIndex:"col6",width:200},{title:"核销状态",dataIndex:"col7",scopedSlots:{customRender:"col7"}},{title:"核销时间",dataIndex:"col8",width:200,scopedSlots:{customRender:"col8"}}],data:[],wxData:[],dyData:[],page:1,total:12,mode:"wx"}},components:{KayCard:o["a"]},computed:{x:function(){var t=window.screen.width;return"calc(".concat(t,"px - 320px)")}},watch:{mode:function(){"wx"==this.mode?(this.data=this.wxData,this.page=1,this.total=12):(this.data=this.dyData,this.page=1,this.total=0)}},mounted:function(){for(var t=0;t<this.total;t++){var a=this.getItem();a.col7=t+1,a.key=Object(l["e"])(),this.wxData.push(a)}this.data=this.wxData},methods:{changePage:function(t){this.page=t},getItem:function(){return{col1:"XXX品牌官方",col2:"主粮一袋",col3:"HSIOWOFJFFF",col4:"kay",col5:"1",col6:"2019-06-15 22:48:47",col8:"2019-06-15 22:48:47"}},toPage:function(t,a){this.$router.push({path:t})}}},r=i,d=(e("dfe0"),e("2877")),u=Object(d["a"])(r,s,n,!1,null,"4ef0adde",null);a["default"]=u.exports},"83abe":function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var s={data:function(){return{selectedRowKeys:[]}},methods:{onSelectChange:function(t){this.selectedRowKeys=t}}}},dfe0:function(t,a,e){"use strict";e("535d")}}]);