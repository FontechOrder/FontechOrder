(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(441)}])},4903:function(r,t,e){"use strict";e.d(t,{Z:function(){return g}});var n=e(5893),o=e(7294),i=e(6822),a=e(5113),u=e(6476),c=e(7773),l=e(6903),s=e(9664),d=e(4051),f=e.n(d),v=e(2420),h=e(3019),p=e(1622),b=e(8430),y=function(r){return{type:b.Z.SAVE_ORDER_LIST,orderList:r}},m=function(){return{orders:(0,v.v9)((function(r){return{orderList:r.orderListManagerState.orderList}}),v.wU).orderList}};function C(r,t,e,n,o,i,a){try{var u=r[i](a),c=u.value}catch(l){return void e(l)}u.done?t(c):Promise.resolve(c).then(n,o)}var k=function(){var r=(0,v.I0)(),t=m().orders;return{doFetchOrderListWithCallback:o.useCallback((function(t){(function(){var e,n=(e=f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Z)();case 3:n=e.sent,r(y(n)),t(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t((0,p.iJ)(e.t0)||p.S2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function a(r){C(i,n,o,a,u,"next",r)}function u(r){C(i,n,o,a,u,"throw",r)}a(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[r]),doSaveOrderList:o.useCallback((function(t){r(y(t))}),[r]),doClearOrderList:o.useCallback((function(){r({type:b.Z.CLEAR_ORDER_LIST})}),[r]),orders:t}};function w(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function x(r){return function(r){if(Array.isArray(r))return w(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"===typeof r)return w(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(){var r=k(),t=r.doFetchOrderListWithCallback,e=r.doSaveOrderList,n=r.doClearOrderList,i=r.orders,a=o.useCallback((function(r){if(!r.errors){var t=r.new;t&&e(x(i).concat([t]))}}),[e,i]),u=o.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;if(n&&!(n<=0)){var o=r.new;if(o){var a=i.map((function(r){return r.id===n?o:r}));e(a)}}}}),[e,i]),c=o.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;n&&(n<=0||e(i.filter((function(r){return r.id!==n}))))}}),[e,i]);return(0,s.Z)({path:"orders",insertCallback:a,updateCallback:u,deleteCallback:c}),{doFetchOrderListWithCallback:t,doClearOrderList:n,orders:i}};function L(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function S(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i=[],a=!0,u=!1;try{for(e=e.call(r);!(a=(n=e.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return L(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return L(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var r=S(o.useState(!0),2),t=r[0],e=r[1],s=S(o.useState(!1),2),d=s[0],f=s[1],v=O(),h=v.doClearOrderList,p=v.doFetchOrderListWithCallback,b=v.orders,y=o.useMemo((function(){return b.map((function(r){return{title:r.date_text,start:r.date_text+"T00:00:00+08:00",backgroundColor:r.finish?"red":"",borderColor:r.finish?"red":"",extendedProps:{order:r},url:r.finish?"":"".concat("/FontechOrder","/orders/detail?id=").concat(r.id)}}))}),[b]),m=o.useCallback((function(){d||(f(!0),p((function(r){r&&console.log("doFetchOrderListWithCallback err:",r.message),console.log("doFetchOrderListWithCallback"),f(!1)})))}),[d,p]),C=o.useMemo((function(){return{text:d?"Loading":"D.C.",click:m}}),[d,m]);return o.useEffect((function(){t&&(e(!1),h(),m())}),[t,m,h]),(0,n.jsx)(i.Z,{m:2,children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.Z,{children:"OrderCalendar"}),(0,n.jsx)(u.ZPm,{locale:"zh-tw",defaultAllDay:!0,allDayText:"menu",contentHeight:"auto",customButtons:{reloadButton:C},plugins:[c.ZP,l.Z],initialView:"dayGridMonth",headerToolbar:{left:"prev,next today reloadButton",center:"title",right:"dayGridMonth,listMonth"},views:{dayGridMonth:{},listMonth:{buttonText:"list month"}},events:y})]})})}},2648:function(r,t,e){"use strict";var n=e(5893),o=(e(7294),e(6242)),i=e(4229);t.Z=function(r){var t=r.children;return(0,n.jsx)(o.Z,{header:(0,n.jsx)(i.Z,{}),children:t})}},441:function(r,t,e){"use strict";e.r(t);var n=e(5893),o=(e(7294),e(2648)),i=e(4903);t.default=function(){return(0,n.jsx)(o.Z,{children:(0,n.jsx)(i.Z,{})})}},3019:function(r,t,e){"use strict";var n=e(4051),o=e.n(n),i=e(3298);function a(r,t,e,n,o,i,a){try{var u=r[i](a),c=u.value}catch(l){return void e(l)}u.done?t(c):Promise.resolve(c).then(n,o)}var u=function(){var r,t=(r=o().mark((function r(){var t,e,n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.O.from("orders").select();case 2:if(t=r.sent,e=t.data,!(n=t.error)){r.next=7;break}throw n;case 7:if(e){r.next=9;break}throw new Error("no order list");case 9:return r.abrupt("return",e);case 10:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function u(r){a(i,n,o,u,c,"next",r)}function c(r){a(i,n,o,u,c,"throw",r)}u(void 0)}))});return function(){return t.apply(this,arguments)}}();t.Z=u},9664:function(r,t,e){"use strict";var n=e(7294),o=e(3298),i=e(1622);t.Z=function(r){var t=r.path,e=r.insertCallback,a=void 0===e?i.G1:e,u=r.updateCallback,c=void 0===u?i.G1:u,l=r.deleteCallback,s=void 0===l?i.G1:l;return n.useEffect((function(){var r=o.O.from(t).on("INSERT",a).on("UPDATE",c).on("DELETE",s).subscribe();return function(){o.O.removeSubscription(r)}}),[t,a,c,s]),{}}}},function(r){r.O(0,[870,240,345,808,213,774,888,179],(function(){return t=5301,r(r.s=t);var t}));var t=r.O();_N_E=t}]);