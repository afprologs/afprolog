(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(e,t,r){"use strict";r.r(t);r(35);var n=r(6),c=r(33),o=r(47);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={computed:v(v({},Object(o.b)({services:function(e){return e.services}})),Object(o.b)({service:function(e){return e.service}})),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getService",e.$route.params);case 2:case"end":return t.stop()}}),t)})))()},methods:{},head:function(){return{title:"AFPROLOG sarl  - "+this.service.title}}},d=r(21),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-screen-md mx-auto text-gray-700"},[r("div",{staticClass:"mx-4 my-16"},[r("div",{staticClass:"text-xl font-bold p-4 text-center"},[e._v("\n      "+e._s(e.service.title)+"\n    ")]),e._v(" "),r("div",{staticClass:"w-full md:w-2/3 mx-auto"},[r("img",{staticClass:"object-cover",attrs:{src:"../"+e.service.image}})]),e._v(" "),e._l(e.service.items,(function(t){return r("ul",{key:t},[r("li",{staticClass:"list-disc"},[e._v("\n        "+e._s(t)+"\n      ")])])})),e._v(" "),r("div",{staticClass:"text-xl font-bold p-4"},[e._v("Details:")]),e._v(" "),r("div",[e._v(e._s(e.service.details))])],2)])}),[],!1,null,null,null);t.default=component.exports}}]);