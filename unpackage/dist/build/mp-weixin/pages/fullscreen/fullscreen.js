(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fullscreen/fullscreen"],{3579:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{show:!1,content:"\n\t\t\t\t\t1. 修复badge组件的size参数无效问题<br>\n\t\t\t\t\t2. 新增Modal模态框组件<br>\n\t\t\t\t\t3. 新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar<br>\n\t\t\t\t\t4. 修复键盘组件在微信小程序上遮罩无效的问题\n\t\t\t\t"}},onLoad:function(n){t.setNavigationBarTitle({title:n.option})},methods:{open:function(){this.show=!0},confirm:function(){t.showToast({title:"点击了confirm按钮"}),this.closeModal()},cancel:function(){t.showToast({title:"点击了cancel按钮"}),this.closeModal()},closeModal:function(){t.navigateBack()}}};n.default=e}).call(this,e("543d")["default"])},4428:function(t,n,e){"use strict";e.r(n);var o=e("3579"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},"53e3":function(t,n,e){"use strict";var o=e("a73d"),u=e.n(o);u.a},"916e":function(t,n,e){"use strict";(function(t){e("84ea");o(e("66fd"));var n=o(e("9e40"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"98a7":function(t,n,e){"use strict";var o={uButton:function(){return e.e("node-modules/uview-ui/components/u-button/u-button").then(e.bind(null,"f1fe"))},uModal:function(){return e.e("node-modules/uview-ui/components/u-modal/u-modal").then(e.bind(null,"78a7"))}},u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},"9e40":function(t,n,e){"use strict";e.r(n);var o=e("98a7"),u=e("4428");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("53e3");var c,i=e("f0c5"),l=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=l.exports},a73d:function(t,n,e){}},[["916e","common/runtime","common/vendor"]]]);