(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(a,t,o){},162:function(a,t,o){a.exports=o.p+"assets/img/1ea57ae39d8d94b8541d1fd565ff362f.f10f932a.jpg"},163:function(a,t,o){a.exports=o.p+"assets/img/6d4dc1c81bf89c96558b03a1280c9a3b.d9eadcaf.jpg"},164:function(a,t,o){a.exports=o.p+"assets/img/c78ea7a1ad110274eae947662ada2efb.ab0c2aaf.jpg"},165:function(a,t,o){a.exports=o.p+"assets/img/d39c29758d2891e9182818cb76133197.83a50ac3.jpg"},166:function(a,t,o){"use strict";var e=o(131);o.n(e).a},190:function(a,t,o){"use strict";o.r(t);var e={data:function(){return{count:0,value:"基本用法",list:[o(162),o(163),o(164),o(165)],show:!0,slot:0}},methods:{load:function(){var a=this;setTimeout(function(){a.$Toast.info("刷新成功"),a.count++,a.$refs.load.removeLoading()},1e3)},seniorLoad:function(){var a=this;this.slot=Math.floor(4*Math.random()+0),this.show=!1,setTimeout(function(){a.$Toast.info("刷新成功"),a.count++,a.show=!0,a.$refs.senior.removeLoading()},1e3)}}},s=(o(166),o(0)),n=Object(s.a)(e,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("topBar",["基本用法"===a.value?o("PullRefresh",{ref:"load",on:{"on-load":a.load}},[o("div",{staticClass:"Fone-warning"},[a._v("请在手机模式下浏览")]),a._v(" "),o("Card",{attrs:{title:"用法"}},[o("span",[a._v("刷新次数："+a._s(a.count))]),a._v(" "),o("Radio-Group",{model:{value:a.value,callback:function(t){a.value=t},expression:"value"}},[o("Radio",{attrs:{label:"基本用法"}},[a._v("基本用法")]),a._v(" "),o("Radio",{attrs:{label:"高级用法"}},[a._v("高级用法")])],1)],1)],1):o("PullRefresh",{ref:"senior",attrs:{height:180},on:{"on-load":a.seniorLoad}},[o("div",{staticClass:"Fone-warning"},[a._v("请在手机模式下浏览")]),a._v(" "),o("div",{staticClass:"head",attrs:{slot:"head"},slot:"head"},[a.show?o("p",[a._v("下拉加载")]):o("img",{attrs:{src:a.list[a.slot]}})]),a._v(" "),o("Card",{attrs:{title:"自定义用法"}},[o("span",[a._v("刷新次数："+a._s(a.count))]),a._v(" "),o("Radio-Group",{model:{value:a.value,callback:function(t){a.value=t},expression:"value"}},[o("Radio",{attrs:{label:"基本用法"}},[a._v("基本用法")]),a._v(" "),o("Radio",{attrs:{label:"高级用法"}},[a._v("高级用法")])],1)],1)],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";t.default=n.exports}}]);