(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{187:function(t,a,i){"use strict";i.r(a);var e={data:function(){return{data:[],data1:["选项1","选项2","选项3","选项4","选项5"],picker1:!1,isTouch:!1,picker2:!1,data2:"default"}},methods:{click:function(){this.picker1=!0},picker:function(){this.picker2=!0},change:function(t){this.$Toast.info("change事件携带值："+t)},confirm:function(t){this.$Toast.info("确认事件携带值："+t)}},computed:{type:function(){return this.data[0]}}},c=i(0),n=Object(c.a)(e,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("topBar",[i("div",{staticClass:"Fone-warning"},[t._v("请在手机模式下浏览")]),t._v(" "),i("div",{staticClass:"item"},[i("Card",{attrs:{title:"使用方式"}},[i("div",{staticClass:"list-item"},[i("div",[i("Button",{on:{click:t.click}},[t._v("单个Picker")])],1),t._v(" "),i("div",[i("Button",{on:{click:t.picker}},[t._v("多个Picker")])],1),t._v(" "),i("div",[i("Radio-Group",{model:{value:t.data2,callback:function(a){t.data2=a},expression:"data2"}},[i("Radio",{attrs:{label:"default"}}),t._v(" "),i("Radio",{attrs:{label:"border"}})],1)],1)])])],1),t._v(" "),i("Picker-Group",{attrs:{"transition-type":t.type,"is-touch":t.isTouch},on:{"on-close":t.click},model:{value:t.picker1,callback:function(a){t.picker1=a},expression:"picker1"}},[i("Picker",{attrs:{data:t.data1,"picker-type":t.data2},on:{"on-change":t.change}})],1),t._v(" "),i("Picker-Group",{on:{"on-close":t.picker,"on-confirm":t.confirm},model:{value:t.picker2,callback:function(a){t.picker2=a},expression:"picker2"}},[i("Picker",{attrs:{data:t.data1,"picker-type":t.data2}}),t._v(" "),i("Picker",{attrs:{data:t.data1,"picker-type":t.data2}}),t._v(" "),i("Picker",{attrs:{data:t.data1,"picker-type":t.data2}})],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";a.default=n.exports}}]);