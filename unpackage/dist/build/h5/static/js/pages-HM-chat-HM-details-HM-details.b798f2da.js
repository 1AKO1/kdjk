(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-HM-chat-HM-details-HM-details"],{"1d7d":function(e,t,i){"use strict";i.r(t);var a=i("a662"),n=i("cf3a");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("e206");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"557d8fb6",null);t["default"]=c.exports},"3f3a":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{blessing:"恭喜发财",money:.01,username:"大黑哥",receivedNumber:8,SumNumber:10,receivedMoney:5.43,SumMoney:10,receivedList:[{username:"大黑哥",face:"/static/img/im/face/face_6.jpg",time:"2019-04-12 12:54:12",money:.01,islucky:!1},{username:"路人甲",face:"/static/img/im/face/face_5.jpg",time:"2019-04-12 12:54:13",money:1.82,islucky:!0},{username:"高级黑",face:"/static/img/im/face/face_4.jpg",time:"2019-04-12 12:55:10",money:.23,islucky:!1},{username:"低级黑",face:"/static/img/im/face/face_3.jpg",time:"2019-04-12 12:56:10",money:.56,islucky:!1},{username:"大明哥",face:"/static/img/im/face/face_2.jpg",time:"2019-04-12 12:56:15",money:.96,islucky:!1},{username:"小姐姐",face:"/static/img/im/face/face_1.jpg",time:"2019-04-12 12:56:17",money:1.02,islucky:!1},{username:"大哥哥",face:"/static/img/im/face/face_7.jpg",time:"2019-04-12 12:56:19",money:.05,islucky:!1},{username:"抢红包",face:"/static/img/im/face/face_8.jpg",time:"2019-04-12 12:56:22",money:.78,islucky:!1}],radius:"100% 100% 0 0"}},onPageScroll:function(e){if(!(e.scrollTop>100)){var t=100-e.scrollTop;this.radius=t+"% "+t+"% 0 0"}}};t.default=a},a662:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"blessing"},[e._v(e._s(e.blessing))]),i("v-uni-view",{staticClass:"money"},[e._v(e._s(e.money))]),i("v-uni-view",{staticClass:"face",style:{"border-radius":e.radius}},[i("v-uni-image",{attrs:{src:"/static/img/im/face/face_11.jpg"}})],1),i("v-uni-view",{staticClass:"username"},[e._v(e._s(e.username)+"的红包")])],1),i("v-uni-view",{staticClass:"info"},[e._v("已领取"+e._s(e.receivedNumber)+"/"+e._s(e.SumNumber)+"个，共"+e._s(e.receivedMoney)+"/"+e._s(e.SumMoney)+"元")]),i("v-uni-view",{staticClass:"list"},e._l(e.receivedList,function(t,a){return i("v-uni-view",{key:a,staticClass:"row"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:t.face}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"r1"},[i("v-uni-view",{staticClass:"username"},[e._v(e._s(t.username))]),i("v-uni-view",{staticClass:"money"},[e._v(e._s(t.money)+"元")])],1),i("v-uni-view",{staticClass:"r2"},[i("v-uni-view",{staticClass:"time"},[e._v(e._s(t.time))]),t.islucky?i("v-uni-view",{staticClass:"lucky"},[e._v("手气王")]):e._e()],1)],1)],1)}),1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},cf3a:function(e,t,i){"use strict";i.r(t);var a=i("3f3a"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},d919:function(e,t,i){var a=i("e9c0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0f12ff6b",a,!0,{sourceMap:!1,shadowMode:!1})},e206:function(e,t,i){"use strict";var a=i("d919"),n=i.n(a);n.a},e9c0:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-557d8fb6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.top[data-v-557d8fb6]{width:100%;background-color:#cf3c35;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.top .blessing[data-v-557d8fb6],.top .money[data-v-557d8fb6]{width:100%;color:#f8d757;padding:%?20?% 0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?34?%}.top .money[data-v-557d8fb6]{font-size:%?100?%}.top .face[data-v-557d8fb6]{background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:%?130?%;margin-top:%?65?%;border-radius:100% 100% 0 0;-webkit-transition:border-radius .15s;-o-transition:border-radius .15s;transition:border-radius .15s}.top .face uni-image[data-v-557d8fb6]{width:%?130?%;height:%?130?%;border-radius:100%;margin-top:%?-65?%}.top .username[data-v-557d8fb6]{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;margin-top:%?-50?%;font-size:%?38?%}.info[data-v-557d8fb6]{margin-top:%?30?%;width:96%;height:%?50?%;padding-left:4%;font-size:%?28?%;color:#999;border-bottom:solid %?1?% #dfdfdf}.list[data-v-557d8fb6]{width:100%}.list .row[data-v-557d8fb6]{width:92%;padding:0 4%;height:%?120?%;border-bottom:solid %?1?% #dfdfdf;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.list .row .left[data-v-557d8fb6]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?100?%;height:%?120?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .row .left uni-image[data-v-557d8fb6]{width:%?80?%;height:%?80?%;border-radius:100%}.list .row .right[data-v-557d8fb6]{width:100%;height:%?150?%}.list .row .right .r1[data-v-557d8fb6]{width:100%;height:%?75?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?34?%}.list .row .right .r2[data-v-557d8fb6]{width:100%;height:%?75?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?26?%}.list .row .right .r2 .time[data-v-557d8fb6]{color:#8f8f94}.list .row .right .r2 .lucky[data-v-557d8fb6]{padding:%?3?% %?8?%;border-radius:%?5?%;background-color:#f8d757;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?30?%;font-size:%?24?%;color:#cf3c35}',""])}}]);