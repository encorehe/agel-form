(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{381:function(e,t,n){"use strict";n.r(t);var o=n(35),r=(n(80),{data:function(){var e,t=this,n=this.$createElement;return{form:{span:24,data:{},items:{borderStyle:{label:"border 样式",component:"el-checkbox",border:!0,slots:"边框"},buttonStyle:{label:"button 样式",component:"el-radio",button:!0,props:{label:"name",value:"id"},options:[{name:"男",id:"男"},{name:"女",id:"女"},{name:"中性",id:"中性"}]},slotStyle:{label:"插槽 样式",component:"el-checkbox",options:["感觉","非常","灵活"],slots:{option:function(e){var t=e.option,o=e.index;return n("el-tag",[o,"：",t.label])}}},radio:{label:"评价",component:"el-radio",options:["好用","一般","糟糕"]},checkbox:{label:"随机数",component:"el-checkbox",max:2,options:(e=Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/getRandomData");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})},button:{component:"el-button",type:"primary",slots:"刷新 options",span:24,on:{click:function(){t.form.getRef("checkbox").getOptions()}}}}}}}}),a=n(6),l=Object(a.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("agel-form",{staticClass:"demo border",model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})}),[],!1,null,null,null);t.default=l.exports}}]);