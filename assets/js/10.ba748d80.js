(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{122:function(e,t,a){},146:function(e,t,a){"use strict";var l=a(122);a.n(l).a},178:function(e,t,a){"use strict";a.r(t);a(5),a(6);var l={data:function(){return{data:["选项一"],data2:[],data3:["选项一","选项二","选项四"],value:!0}},methods:{change:function(e){this.$Toast.info("携带值："+e)}},computed:{classes:function(){return function(e){return this.data2.includes(e)?"border":void 0}}}},s=(a(146),a(0)),i=Object(s.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("topBar",[a("div",{staticClass:"item"},[a("Card",{attrs:{title:"使用方式"}},[a("div",{staticClass:"list-item"},[a("div",[a("Checkbox",{attrs:{label:"checkbox"}})],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"dot风格"}},[a("div",{staticClass:"list-item"},[a("div",[a("Row",{attrs:{"is-five":""}},[a("Col",[a("Checkbox",{attrs:{type:"primary"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"success"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"info"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"error"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"warning"}},[e._v("选项")])],1)],1)],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"cube风格"}},[a("div",{staticClass:"list-item"},[a("div",[a("Row",{attrs:{"is-five":""}},[a("Col",[a("Checkbox",{attrs:{type:"primary","checkbox-style":"cube"}},[e._v("选项一")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"success","checkbox-style":"cube"}},[e._v("选项一")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"info","checkbox-style":"cube"}},[e._v("选项一")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"error","checkbox-style":"cube"}},[e._v("选项一")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"warning","checkbox-style":"cube"}},[e._v("选项一")])],1)],1)],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"禁用"}},[a("div",{staticClass:"list-item"},[a("div",[a("Row",{attrs:{"is-five":""}},[a("Col",[a("Checkbox",{attrs:{type:"primary","checkbox-style":"cube",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"success","checkbox-style":"cube",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"info","checkbox-style":"cube",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"error","checkbox-style":"cube",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"warning","checkbox-style":"cube",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1)],1)],1),e._v(" "),a("div",[a("Row",{attrs:{"is-five":""}},[a("Col",[a("Checkbox",{attrs:{type:"primary",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"success",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"info",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"error",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"warning",disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._v("选项")])],1)],1)],1),e._v(" "),a("div",[a("Row",{attrs:{"is-five":""}},[a("Col",[a("Checkbox",{attrs:{type:"primary",disabled:""}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"success",disabled:""}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"info",disabled:""}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"error",disabled:""}},[e._v("选项")])],1),e._v(" "),a("Col",[a("Checkbox",{attrs:{type:"warning",disabled:""}},[e._v("选项")])],1)],1)],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"配合Checkbox-Group使用"}},[a("div",{staticClass:"list-item"},[a("div",[a("Checkbox-Group",{model:{value:e.data3,callback:function(t){e.data3=t},expression:"data3"}},[a("Checkbox",{attrs:{type:"primary",label:"选项一"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项二"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项三"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项四"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项五"}})],1)],1),e._v("\n                "+e._s(e.data3)+"\n            ")])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"配合Icon使用"}},[a("div",{staticClass:"list-item"},[a("div",[a("Checkbox-Group",[a("Checkbox",{attrs:{type:"primary",label:"选项一"}},[a("Icon",{attrs:{icon:"icon-biaoqing"}}),e._v("选项一")],1),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项二"}},[a("Icon",{attrs:{icon:"icon-shibaibiaoqing"}}),e._v("选项二")],1),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项三"}},[a("Icon",{attrs:{icon:"icon-wukongbiaoqing"}}),e._v("选项三")],1)],1)],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"事件"}},[a("div",{staticClass:"list-item"},[a("div",[a("Checkbox-Group",{on:{"on-change":e.change},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}},[a("Checkbox",{attrs:{type:"primary",label:"选项一"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项二"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项三"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项四"}}),e._v(" "),a("Checkbox",{attrs:{type:"primary",label:"选项五"}})],1)],1),e._v(" "),a("div",[a("Checkbox",{attrs:{type:"primary",label:"选项一"},on:{"on-change":e.change}})],1)])])],1),e._v(" "),a("div",{staticClass:"item"},[a("Card",{attrs:{title:"高级使用方式"}},[a("div",{staticClass:"list-item"},[a("div",[a("Checkbox-Group",{model:{value:e.data2,callback:function(t){e.data2=t},expression:"data2"}},[a("Checkbox",{staticStyle:{flex:"0 0 50%"},attrs:{type:"primary",label:"选项一","is-level":""}},[a("div",{class:e.classes("选项一"),staticStyle:{height:"80px",width:"100%",background:"#efefef"}})]),e._v(" "),a("Checkbox",{staticStyle:{flex:"0 0 50%"},attrs:{type:"primary",label:"选项二","is-level":""}},[a("div",{class:e.classes("选项二"),staticStyle:{height:"80px",width:"100%",background:"#efefef"}})])],1)],1)])])],1)])},[],!1,null,null,null);i.options.__file="index.vue";t.default=i.exports}}]);