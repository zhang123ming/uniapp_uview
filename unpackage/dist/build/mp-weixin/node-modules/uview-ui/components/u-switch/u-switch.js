(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-switch/u-switch"],{"4ecf":function(t,e,n){},a806:function(t,e,n){"use strict";n.r(e);var i=n("f9cb"),a=n("dc16");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("d643");var o,l=n("f0c5"),r=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"34ace501",null,!1,i["a"],o);e["default"]=r.exports},d643:function(t,e,n){"use strict";var i=n("4ecf"),a=n.n(i);a.a},dc16:function(t,e,n){"use strict";n.r(e);var i=n("fdaf"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},f9cb:function(t,e,n){"use strict";var i={uLoading:function(){return n.e("node-modules/uview-ui/components/u-loading/u-loading").then(n.bind(null,"97aa"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.switchStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},fdaf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var t={};return t.fontSize=this.size+"rpx",t.backgroundColor=this.value?this.activeColor:this.inactiveColor,t},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var e=this;this.disabled||this.loading||(this.vibrateShort&&t.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){e.$emit("change",e.value?e.activeValue:e.inactiveValue)})))}}};e.default=n}).call(this,n("543d")["default"])}}]);