(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{6479:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/detail",function(){return n(8396)}])},8396:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Br}});var e=n(5893),o=n(7294),i=n(6199),a=n(4184),u=n.n(a),c=n(6886),s=n(3321),l=n(6822),f=n(1077),d=n(6447),p=n(2208),v=n(5843),m=n(7358),h=n(8895),y=n(5861),b=n(2797),x=n(2902),w=n(3508),g=n(4051),j=n.n(g),S=n(301),I=n(3298),Z=function(r){return I.O.from(r)},P=function(r){var t=r.databaseString,n=r.selectString;return Z(t).select(n)};function O(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var k=function(){var r,t=(r=j().mark((function r(t){var n,e,o,i,a;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.databaseString,e=t.selectString,r.next=3,P({databaseString:n,selectString:e});case 3:if(o=r.sent,i=o.data,!(a=o.error)){r.next=8;break}throw a;case 8:if(i){r.next=10;break}throw new Error("no data");case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){O(i,e,o,a,u,"next",r)}function u(r){O(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function A(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}!function(){var r,t=(r=j().mark((function r(){var t;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k({databaseString:"orders"});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){A(i,e,o,a,u,"next",r)}function u(r){A(i,e,o,a,u,"throw",r)}a(void 0)}))})}();function C(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var E=function(){var r,t=(r=j().mark((function r(t){var n,e,o,i,a,u,c,s,l,f;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.databaseString,e=t.selectString,o=t.notNullString,i=void 0===o?"id":o,a=t.eqs,0!==(u=void 0===a?[]:a).length){r.next=3;break}throw new Error("Invalid id");case 3:return c=u.reduce((function(r,t){return r.eq(t.eqString,t.id)}),P({databaseString:n,selectString:e})),r.next=6,c.not(i,"is","null").limit(1).single();case 6:if(s=r.sent,l=s.data,!(f=s.error)){r.next=11;break}throw f;case 11:if(l){r.next=13;break}throw new Error("no data");case 13:return r.abrupt("return",l);case 14:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){C(i,e,o,a,u,"next",r)}function u(r){C(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function q(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var _=function(){var r,t=(r=j().mark((function r(t){var n;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E({databaseString:"orders",selectString:"*,restaurant(id,hidden,image_url,name)",eqs:[{id:t,eqString:"id"}]});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){q(i,e,o,a,u,"next",r)}function u(r){q(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function N(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var T=function(){var r,t=(r=j().mark((function r(t,n){return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U({eqs:[{id:t,eqString:"order.id"},{id:n,eqString:"restaurant"}]});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){N(i,e,o,a,u,"next",r)}function u(r){N(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r,n){return t.apply(this,arguments)}}();function M(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var L=function(){var r,t=(r=j().mark((function r(t){var n,e,o,i,a,u,c,s;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.databaseString,e=t.selectString,o=t.eqs,0!==(i=void 0===o?[]:o).length){r.next=3;break}throw new Error("Invalid id");case 3:return a=i.reduce((function(r,t){return r.eq(t.eqString,t.id)}),P({databaseString:n,selectString:e})),r.next=6,a;case 6:if(u=r.sent,c=u.data,!(s=u.error)){r.next=11;break}throw s;case 11:if(c){r.next=13;break}throw new Error("no data");case 13:return r.abrupt("return",c);case 14:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){M(i,e,o,a,u,"next",r)}function u(r){M(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function D(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var U=function(){var r,t=(r=j().mark((function r(t){var n,e,o,i,a;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.selectString,e=void 0===n?"*,user(id,name,email),order!inner(id,restaurant!inner(id))":n,o=t.eqs,i=void 0===o?[]:o,r.next=3,L({databaseString:"order_items",selectString:e,eqs:i});case 3:return a=r.sent,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){D(i,e,o,a,u,"next",r)}function u(r){D(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}(),$=n(1622);function R(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}!function(){var r,t=(r=j().mark((function r(t){var n,e;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L({databaseString:"menu_item_options",selectString:"*,restaurant(id),menu_item(id,hidden,name,cost,type)",eqs:[{id:t,eqString:"restaurant.id"}]});case 2:return n=r.sent,e=(0,$.ux)(n),r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){R(i,e,o,a,u,"next",r)}function u(r){R(i,e,o,a,u,"throw",r)}a(void 0)}))})}();var B=n(9664);function W(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function X(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function F(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function G(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return W(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=function(r){var t=r.orderId,n=r.restaurantId,e=G(o.useState([]),2),i=e[0],a=e[1],u=o.useCallback((function(){return new Promise((function(r,e){(function(){var o,i=(o=j().mark((function o(){var i;return j().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,T(t,n);case 3:i=o.sent,r(i),o.next=10;break;case 7:o.prev=7,o.t0=o.catch(0),e(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})),function(){var r=this,t=arguments;return new Promise((function(n,e){var i=o.apply(r,t);function a(r){X(i,n,e,a,u,"next",r)}function u(r){X(i,n,e,a,u,"throw",r)}a(void 0)}))});return function(){return i.apply(this,arguments)}})()()}))}),[t,n]),c=(0,S.Z)({asyncCallback:u}),s=c.isInit,l=c.isLoading,f=c.error,d=c.recall,p=c.result,v=o.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;if(n&&!(n<1)){var e=r.new;e&&a((function(r){return r.map((function(r){return r.id===n?function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){F(r,t,n[t])}))}return r}({},r,{note:e.note,quantity:e.quantity,cost:e.cost,item_name:e.item_name,item_type:e.item_type}):r}))}))}}}),[]),m=o.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;n&&(n<=0||a((function(r){return r.filter((function(r){return r.id!==n}))})))}}),[]);return(0,B.Z)({path:"order_items",updateCallback:v,deleteCallback:m}),o.useEffect((function(){a(p||[])}),[p]),{isInit:s,isLoading:l,error:f,recall:d,orderItemList:i}};function V(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function z(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function J(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){z(r,t,n[t])}))}return r}function K(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||Y(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(r){return function(r){if(Array.isArray(r))return V(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||Y(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(r,t){if(r){if("string"===typeof r)return V(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(r,t):void 0}}var rr=function(r){return r.item_type?"".concat(r.item_type,".").concat(r.item_name):r.item_name},tr=function(r){var t=r.orderId,n=r.restaurantId,i=K(o.useState(!1),2),a=i[0],u=i[1],s=H({orderId:t,restaurantId:n}).orderItemList,f=o.useMemo((function(){return s.reduce((function(r,t){return r+t.cost*t.quantity}),0)}),[s]),g=o.useMemo((function(){return s.reduce((function(r,t){var n={cost:t.cost,quantity:t.quantity,totalCost:t.cost*t.quantity,user:t.user},e=a?t.user.name:"".concat(n.cost," ").concat(rr(t)),o=a?"".concat(n.cost," ").concat(rr(t)):t.user.name,i=r.findIndex((function(r){return r.title===e}));if(i>-1){var u=r[i];return u.items.push(J({},n,{title:o})),u.quantity+=n.quantity,u.totalCost+=n.totalCost,r[i]=u,r}return Q(r).concat([J({id:e},n,{title:e,items:[J({title:o},n)]})])}),Array())}),[a,s]);return(0,e.jsxs)(l.Z,{children:[(0,e.jsxs)(d.Z,{direction:"row",spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(p.Z,{control:(0,e.jsx)(v.Z,{checked:a,onChange:function(r){u(r.target.checked)},inputProps:{"aria-label":"sort-by-user-switch"}}),label:"By User"}),(0,e.jsxs)(l.Z,{className:"text-right",children:["Total Cost: ",f]})]}),g.map((function(r,t){return(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(h.Z,{className:"flex-row-reverse",expandIcon:(0,e.jsx)(w.Z,{}),children:(0,e.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,e.jsx)(c.ZP,{item:!0,xs:8,children:(0,e.jsx)(y.Z,{children:r.title})}),(0,e.jsx)(c.ZP,{className:"flex flex-wrap items-center justify-end",item:!0,xs:2,children:(0,e.jsx)(y.Z,{children:r.quantity})}),(0,e.jsx)(c.ZP,{className:"flex flex-wrap items-center justify-end",item:!0,xs:2,children:(0,e.jsx)(y.Z,{children:r.totalCost})})]})}),(0,e.jsx)(b.Z,{children:r.items.map((function(r,t){return(0,e.jsxs)(c.ZP,{className:"mr-10",container:!0,spacing:1,children:[(0,e.jsx)(c.ZP,{item:!0,xs:8,children:a?(0,e.jsx)(y.Z,{children:r.title}):(0,e.jsx)(x.Z,{title:"".concat(r.user.name," (").concat(r.user.email,")"),placement:"left",children:(0,e.jsx)(y.Z,{children:r.title})})}),(0,e.jsx)(c.ZP,{className:"flex flex-wrap items-center justify-end",item:!0,xs:2,children:(0,e.jsx)(y.Z,{children:r.quantity})}),(0,e.jsx)(c.ZP,{className:"flex flex-wrap items-center justify-end",item:!0,xs:2,children:(0,e.jsx)(y.Z,{children:r.totalCost})})]},"accordion-order-item-items-".concat(r.title,"-").concat(t))}))})]},a?"by-user-accordion-order-item-".concat(r.id,"-").concat(t):"accordion-order-item-".concat(r.id,"-").concat(t))}))]})},nr=n(4648),er=n(52),or=n(7798),ir=n(3946),ar=n(7720),ur=n(1024),cr=n(6540),sr=n(4895),lr=n(484),fr=n(9726),dr=n(5759);function pr(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}var vr=function(){var r,t=(r=j().mark((function r(t){var n,e,o;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.O.from("order_items").insert(t);case 2:if(n=r.sent,e=n.data,!(o=n.error)){r.next=7;break}throw o;case 7:if(e){r.next=9;break}throw new Error("invalid orders");case 9:return r.abrupt("return",e);case 10:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){pr(i,e,o,a,u,"next",r)}function u(r){pr(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function mr(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function hr(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function yr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return mr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mr(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var br=function(r){var t=r.user,n=r.doClear,i=r.newOrderItemList,a=r.orderId,u=r.restaurantId,c=yr(o.useState(!1),2),s=c[0],l=c[1],f=o.useMemo((function(){var r=i.reduce((function(r,t){return r+t.option.cost*t.quantity}),0);return"DO ORDER WITH ".concat(r)}),[i]);return(0,e.jsx)(dr.Z,{loading:s,onClick:function(){(function(){var r,e=(r=j().mark((function r(){var e;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!s){r.next=2;break}return r.abrupt("return");case 2:return l(!0),r.prev=3,e=i.map((function(r){return{note:r.note,quantity:r.quantity,cost:r.option.cost,item_name:r.option.name,item_type:r.option.type,user:t.id,order:a,restaurant:u}})),r.next=7,vr(e);case 7:n(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.log("asyncCreateRestaurants error");case 13:l(!1);case 14:case"end":return r.stop()}}),r,null,[[3,10]])})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){hr(i,e,o,a,u,"next",r)}function u(r){hr(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(){return e.apply(this,arguments)}})()()},children:f})};function xr(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function wr(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function gr(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){wr(r,t,n[t])}))}return r}function jr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||Ir(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Sr(r){return function(r){if(Array.isArray(r))return xr(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||Ir(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ir(r,t){if(r){if("string"===typeof r)return xr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xr(r,t):void 0}}var Zr=[1,2,3],Pr={note:"",quantity:1,option:null},Or=function(r){var t=r.orderId,n=r.restaurantId,i=r.recallEachOrder,a=jr(o.useState(Pr),2),u=a[0],f=a[1],p=jr(o.useState([]),2),v=p[0],m=p[1],h=jr(o.useState(!1),2),y=h[0],b=h[1],x=function(){return b(!1)},w=(0,fr.Z)().user,g=(0,lr.Z)(n).restaurantMenuWithItemOptions,j=o.useMemo((function(){return g.flatMap((function(r){var t=r.type?"".concat(r.type,".").concat(r.name):r.name;return[gr({title:"".concat(r.cost," ").concat(t),sectionTitle:t},r)].concat(Sr(r.itemOptions.map((function(r){return gr({sectionTitle:t,title:"".concat(r.cost," ").concat(r.type,".").concat(r.name)},r)}))))}))}),[g]),S=o.useMemo((function(){return!u.option}),[u]);return w?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.Z,{onClick:function(){return b(!0)},children:["NewOrderMenuItem ",n]}),(0,e.jsx)(nr.Z,{open:y,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,e.jsx)(l.Z,{className:"absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-y-1/2 -translate-x-1/2 overflow-y-auto overflow-y-hidden rounded bg-white p-4 shadow-xl lg:h-[40rem] lg:max-h-[90%] lg:w-[60rem]",children:(0,e.jsxs)(l.Z,{className:"relative flex h-full w-full flex-col",children:[(0,e.jsxs)(c.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,e.jsx)(c.ZP,{item:!0,xs:12,sm:7,children:(0,e.jsx)(er.Z,{id:"grouped-demo",options:j.sort((function(r,t){return-t.sectionTitle.localeCompare(r.sectionTitle)})),groupBy:function(r){return r.sectionTitle},getOptionLabel:function(r){return r.title},renderInput:function(r){return(0,e.jsx)(or.Z,gr({},r,{label:"\u9ede\u9910\u62c9"}))},onChange:function(r,t){f((function(r){return gr({},r,{option:t})}))},value:u.option})}),(0,e.jsx)(c.ZP,{item:!0,xs:4,sm:5,children:(0,e.jsx)(er.Z,{id:"grouped-demo",options:Zr,defaultValue:1,getOptionLabel:function(r){return r.toString()},renderInput:function(r){return(0,e.jsx)(or.Z,gr({},r,{label:"\u8981\u591a\u5c11\u8b1b\u554a\uff1f"}))},onChange:function(r,t){t&&f((function(r){return gr({},r,{quantity:t})}))},value:u.quantity})}),(0,e.jsx)(c.ZP,{item:!0,xs:6,sm:11,children:(0,e.jsx)(or.Z,{className:"w-full",label:"\u5099\u8a3b",variant:"outlined",value:u.note,onChange:function(r){return f((function(t){return gr({},t,{note:r.target.value})}))}})}),(0,e.jsx)(c.ZP,{item:!0,xs:2,sm:1,children:(0,e.jsx)(ir.Z,{disabled:S,onClick:function(){u.option&&(m((function(r){return Sr(r).concat([u])})),f(Pr))},children:(0,e.jsx)(cr.Z,{})})})]}),(0,e.jsx)(ar.Z,{className:"py-2"}),(0,e.jsx)(d.Z,{m:2,spacing:2,className:"flex-1 overflow-y-auto",children:v.map((function(r,t){return(0,e.jsxs)(ur.Z,{className:"flex flex-row justify-between p-2",children:[(0,e.jsxs)(d.Z,{children:[(0,e.jsx)("p",{children:r.option.name}),(0,e.jsxs)("p",{children:["\u50f9\u683c\uff1a",r.option.cost]}),(0,e.jsxs)("p",{children:["\u6578\u91cf\uff1a",r.quantity]}),r.note&&(0,e.jsxs)("p",{children:["\u5099\u8a3b\uff1a",r.note]})]}),(0,e.jsx)(ir.Z,{onClick:function(){return m((function(r){return(0,$.gn)(r,t)}))},children:(0,e.jsx)(sr.Z,{})})]},"new-order-item-card-".concat(r.option.id,"-").concat(t))}))}),(0,e.jsx)(ar.Z,{className:"py-2"}),(0,e.jsxs)(d.Z,{direction:"row-reverse",children:[(0,e.jsx)(s.Z,{onClick:x,children:"\u95dc\u9589"}),(0,e.jsx)(br,{user:w,orderId:t,restaurantId:n,doClear:function(){m([]),i()},newOrderItemList:v}),(0,e.jsx)(s.Z,{onClick:function(){return m([])},children:"CLEAR"})]})]})})})]}):null},kr=function(r){var t=r.databaseString;return Z(t).delete()};function Ar(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function Cr(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function Er(r){return function(r){if(Array.isArray(r))return Ar(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"===typeof r)return Ar(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var qr=function(){var r,t=(r=j().mark((function r(t){var n,e,o,i,a;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.orderId,e=t.userId,r.next=3,U({selectString:"*,user!inner(id,name,email),order!inner(id,restaurant!inner(id))",eqs:[{id:n,eqString:"order.id"},{id:e,eqString:"user.id"}]});case 3:return o=r.sent,i=o.reduce((function(r,t){return Er(r).concat([t.id])}),Array()),r.next=7,kr({databaseString:"order_items"}).filter("id","in","(".concat(i,")"));case 7:if(!(a=r.sent.error)){r.next=11;break}throw console.log("error: ",null===a||void 0===a?void 0:a.message),a;case 11:return r.abrupt("return",!0);case 12:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){Cr(i,e,o,a,u,"next",r)}function u(r){Cr(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(r){return t.apply(this,arguments)}}();function _r(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function Nr(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function Tr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return _r(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _r(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Mr=function(r){var t=r.orderId,n=r.recallEachOrder,i=(0,fr.Z)().user,a=Tr(o.useState(!1),2),u=a[0],c=a[1];return i?(0,e.jsx)(dr.Z,{loading:u,onClick:function(){(function(){var r,e=(r=j().mark((function r(){return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!u){r.next=2;break}return r.abrupt("return");case 2:return c(!0),r.prev=3,r.next=6,qr({orderId:t,userId:i.id});case 6:n(),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),console.log("asyncDeleteOrderItems error");case 12:c(!1);case 13:case"end":return r.stop()}}),r,null,[[3,9]])})),function(){var t=this,n=arguments;return new Promise((function(e,o){var i=r.apply(t,n);function a(r){Nr(i,e,o,a,u,"next",r)}function u(r){Nr(i,e,o,a,u,"throw",r)}a(void 0)}))});return function(){return e.apply(this,arguments)}})()()},children:"DELETEORDERMENUITEM"}):null};function Lr(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function Dr(r,t,n,e,o,i,a){try{var u=r[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(e,o)}function Ur(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,u=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return Lr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lr(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $r=function(r){var t=Ur(o.useState(void 0),2),n=t[0],e=t[1],i=o.useCallback((function(){return new Promise((function(t,n){(function(){var e,o=(e=j().mark((function e(){var o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(r);case 3:o=e.sent,t(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function a(r){Dr(i,n,o,a,u,"next",r)}function u(r){Dr(i,n,o,a,u,"throw",r)}a(void 0)}))});return function(){return o.apply(this,arguments)}})()()}))}),[r]),a=(0,S.Z)({asyncCallback:i}),u=a.isInit,c=a.isLoading,s=a.error,l=a.recall,f=a.result;return o.useEffect((function(){console.log("setEachOrder with result change"),e(f)}),[f]),{isInit:u,isLoading:c,error:s,recall:l,eachOrder:n}},Rr=function(r){var t=r.id,n=$r(t),o=n.isInit,i=n.isLoading,a=n.error,d=n.eachOrder,p=n.recall;return o?(0,e.jsx)("div",{children:"content init..."}):i?(0,e.jsx)("div",{children:"loading..."}):a?(0,e.jsx)("div",{children:"Get Error..."}):d?(0,e.jsxs)(c.ZP,{container:!0,spacing:2,justifyContent:"space-around",children:[(0,e.jsxs)(c.ZP,{item:!0,xs:5,children:[(0,e.jsx)(s.Z,{variant:"contained",onClick:p,children:"D.C."}),(0,e.jsxs)(l.Z,{children:["order id: ",d.id]}),(0,e.jsx)(l.Z,{children:d.restaurant.name})]}),(0,e.jsx)(c.ZP,{item:!0,xs:3,children:(0,e.jsx)(l.Z,{className:u()("relative aspect-[3/4]",!d.restaurant.image_url&&"bg-blue-300"),children:d.restaurant.image_url&&(0,e.jsx)(f.Z,{priority:!0,src:d.restaurant.image_url,alt:d.restaurant.name,layout:"fill"})})}),(0,e.jsxs)(c.ZP,{item:!0,xs:10,children:[(0,e.jsx)(Or,{orderId:t,restaurantId:d.restaurant.id,recallEachOrder:p}),(0,e.jsx)(Mr,{orderId:t,recallEachOrder:p})]}),(0,e.jsx)(c.ZP,{item:!0,xs:10,children:(0,e.jsx)(tr,{orderId:t,restaurantId:d.restaurant.id})})]}):(0,e.jsx)("div",{children:"Invalid OrderDetail"})},Br=function(){return(0,e.jsx)(i.Z,{children:function(r){return(0,e.jsx)(Rr,{id:r})}})}}},function(r){r.O(0,[240,345,177,528,945,824,213,860,774,888,179],(function(){return t=6479,r(r.s=t);var t}));var t=r.O();_N_E=t}]);