(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabsswiper/tabsswiper"],{"46a2":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},9056:function(t,n,e){},b3ba:function(t,n,e){"use strict";e.r(n);var r=e("ff7d"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},ba19:function(t,n,e){"use strict";e.r(n);var r=e("46a2"),a=e("b3ba");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("ec3c");var u,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=o.exports},e8b3:function(t,n,e){"use strict";(function(t){e("84ea");r(e("66fd"));var n=r(e("ba19"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ec3c:function(t,n,e){"use strict";var r=e("9056"),a=e.n(r);a.a},ff7d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[{name:"十年"},{name:"青春"},{name:"之约"}],current:0,swiperCurrent:0}},onLoad:function(n){t.setNavigationBarTitle({title:n.option})},methods:{tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var n=t.detail.dx;this.$refs.uTabs.setDx(n)},animationfinish:function(t){var n=t.detail.current;this.$refs.uTabs.setFinishCurrent(n),this.swiperCurrent=n,this.current=n},onreachBottom:function(){}}};n.default=e}).call(this,e("543d")["default"])}},[["e8b3","common/runtime","common/vendor"]]]);