(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/avatarcropper/avatarcropper"],{"19ae":function(t,n,e){"use strict";(function(t){e("84ea");a(e("66fd"));var n=a(e("4c1a1"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4c1a1":function(t,n,e){"use strict";e.r(n);var a=e("ba7b"),u=e("9ce0");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("a06a");var r,c=e("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=i.exports},"9ce0":function(t,n,e){"use strict";e.r(n);var a=e("a37b"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=u.a},a06a:function(t,n,e){"use strict";var a=e("fae2"),u=e.n(a);u.a},a37b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{avatar:"https://cdn.uviewui.com/uview/common/logo.png"}},created:function(){var n=this;t.$on("uAvatarCropper",(function(e){n.avatar=e,t.uploadFile({url:"http://www.example.com/upload",filePath:e,name:"file",complete:function(t){console.log(t)}})}))},methods:{chooseAvatar:function(){this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{destWidth:300,rectWidth:200,fileType:"jpg"}})}},onLoad:function(n){t.setNavigationBarTitle({title:n.option})}};n.default=e}).call(this,e("543d")["default"])},ba7b:function(t,n,e){"use strict";var a={uButton:function(){return e.e("node-modules/uview-ui/components/u-button/u-button").then(e.bind(null,"f1fe"))}},u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))},fae2:function(t,n,e){}},[["19ae","common/runtime","common/vendor"]]]);