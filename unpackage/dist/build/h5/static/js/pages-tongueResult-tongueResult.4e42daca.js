(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tongueResult-tongueResult"],{"1e78":function(t,n,e){"use strict";var a=e("507a"),i=e.n(a);i.a},3483:function(t,n,e){"use strict";e.r(n);var a=e("9aee"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},"507a":function(t,n,e){var a=e("b10b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("ced118f2",a,!0,{sourceMap:!1,shadowMode:!1})},"9aee":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{img:"http://kdjk.c5ppc.cn/uploads/tongue/20191005/b585c03d305562e19b6bbf5401ccca7d.png",judge:"",advice:""}},onLoad:function(t){var n=this;uni.setNavigationBarTitle({title:"问诊报告"}),uni.request({url:"http://kdjk.c5ppc.cn/tongue_index",method:"GET",data:{url:t.url},success:function(t){var e="string"==typeof t.data?JSON.parse(t.data):t.data;n.judge=e.data[0].judge,n.advice=e.data[0].advice,n.img=e.data[0].url,void 0==e.data[0].judge&&uni.showToast({title:"服务器可能开小差了，没能识别您的病情哦!",icon:"none"})}})},methods:{}};n.default=a},"9d88":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"image"},[e("v-uni-image",{attrs:{src:t.img,mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"result"},[e("v-uni-text",[t._v("AI诊断：")]),e("v-uni-view",[t._v(t._s(t.judge))]),e("br"),e("v-uni-text",[t._v("AI建议：")]),e("v-uni-view",[t._v(t._s(t.advice))])],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},b10b:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-775af44c]{width:100%;padding:20px}.image[data-v-775af44c]{margin:5vh auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:225px;height:150px}.image uni-image[data-v-775af44c]{width:225px;height:150px}.result uni-text[data-v-775af44c]{font-weight:700}',""])},ed2c:function(t,n,e){"use strict";e.r(n);var a=e("9d88"),i=e("3483");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("1e78");var c=e("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"775af44c",null);n["default"]=s.exports}}]);