(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongueResult/tongueResult"],{"0eb9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{img:"http://kdjk.c5ppc.cn/uploads/tongue/20191005/b585c03d305562e19b6bbf5401ccca7d.png",judge:"",advice:""}},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:"问诊报告"}),t.request({url:"http://kdjk.c5ppc.cn/tongue_index",method:"GET",data:{url:e.url},success:function(e){var a="string"==typeof e.data?JSON.parse(e.data):e.data;n.judge=a.data[0].judge,n.advice=a.data[0].advice,n.img=a.data[0].url,void 0==a.data[0].judge&&t.showToast({title:"服务器可能开小差了，没能识别您的病情哦!",icon:"none"})}})},methods:{}};e.default=n}).call(this,n("6e42")["default"])},3483:function(t,e,n){"use strict";n.r(e);var a=n("0eb9"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=u.a},"7c4d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},9988:function(t,e,n){"use strict";var a=n("ca5f"),u=n.n(a);u.a},ca5f:function(t,e,n){},ed2c:function(t,e,n){"use strict";n.r(e);var a=n("7c4d"),u=n("3483");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("9988");var o=n("2877"),d=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},f39e:function(t,e,n){"use strict";(function(t){n("aeaa"),n("921b");a(n("66fd"));var e=a(n("ed2c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f39e","common/runtime","common/vendor"]]]);