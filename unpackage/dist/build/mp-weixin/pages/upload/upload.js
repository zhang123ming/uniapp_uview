(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/upload/upload"],{"08e1":function(n,t,e){"use strict";var o=e("4461"),u=e.n(o);u.a},4461:function(n,t,e){},"463d":function(n,t,e){"use strict";(function(n){e("84ea");o(e("66fd"));var t=o(e("5204"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},5204:function(n,t,e){"use strict";e.r(t);var o=e("d1ec"),u=e("7a0d");for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("08e1");var c,l=e("f0c5"),r=Object(l["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=r.exports},"730c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{action:"http://www.example.com/upload",fileList:[{url:"http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg"}],filesArr:[]}},onLoad:function(t){n.setNavigationBarTitle({title:t.option})},methods:{beforeUpload:function(n,t){},submit:function(n){this.$refs.uUpload.upload()},submits:function(){this.$refs.piclist.upload()},onUploaded:function(n){this.filesArr=n;for(var t=0;t<this.filesArr.length;t++)console.log(t+"========="+JSON.stringify(this.filesArr[t]))},onRemove:function(n,t){console.log("图片已被移除")}}};t.default=e}).call(this,e("543d")["default"])},"7a0d":function(n,t,e){"use strict";e.r(t);var o=e("730c"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=u.a},d1ec:function(n,t,e){"use strict";var o={uUpload:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-upload/u-upload")]).then(e.bind(null,"d8e5"))},uButton:function(){return e.e("node-modules/uview-ui/components/u-button/u-button").then(e.bind(null,"f1fe"))}},u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}))}},[["463d","common/runtime","common/vendor"]]]);