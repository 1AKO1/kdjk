(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/QS-inputs-split/template/template"],{"192b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={props:{title:{type:String,default:""},titleHide:{type:Boolean,default:!1},fontSize:{type:Number,default:30},width:{type:String,default:"100%"},titleLayout:{type:String,default:"default"},titleFlex:{type:Number,default:1},contentFlex:{type:Number,default:4},titleStyle:{type:String,default:""},contentStyle:{type:String,default:""},layout:{type:String,default:"row"},required:{type:Boolean,default:!1},requiredSign:{type:String,default:"*"},itemDisabled:{type:Boolean,default:!1},titleColor:{type:String,default:"#999"}},computed:{getLayout:function(){return"column"===this.layout?"flex_column":"flex_row"},getTitleLayout:function(){switch(this.titleLayout){case"left":return"flex_row_none_c";case"center":return"flex_row_c_c";case"right":return"flex_row_e_c";default:return"column"===this.layout?"flex_row_none_c":"flex_row_e_c"}},getWidthMode:function(){return"column"===this.layout?"width100":"maxWidth40"}},methods:{voidFc:function(){}}};e.default=u},"1cd1":function(t,e,n){"use strict";var u=n("d60b"),l=n.n(u);l.a},d60b:function(t,e,n){},e030:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},l=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l})},e2e9:function(t,e,n){"use strict";n.r(e);var u=n("192b"),l=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=l.a},ed07:function(t,e,n){"use strict";n.r(e);var u=n("e030"),l=n("e2e9");for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);n("1cd1");var o=n("2877"),i=Object(o["a"])(l["default"],u["a"],u["b"],!1,null,"9f4544b8",null);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/QS-inputs-split/template/template-create-component',
    {
        'components/QS-inputs-split/template/template-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ed07"))
        })
    },
    [['components/QS-inputs-split/template/template-create-component']]
]);                