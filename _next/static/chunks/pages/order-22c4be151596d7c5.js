(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{1996:function(r,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return e(1550)}])},1550:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var t=e(5893),o=e(7294),i=e(8580),a=e(4051),c=e.n(a),u=e(7633),s=e(4193),d=e(963),l=e(1912);function f(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function h(r,n,e,t,o,i,a){try{var c=r[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(t,o)}function p(r){return function(){var n=this,e=arguments;return new Promise((function(t,o){var i=r.apply(n,e);function a(r){h(i,t,o,a,c,"next",r)}function c(r){h(i,t,o,a,c,"throw",r)}a(void 0)}))}}function v(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,o,i=[],a=!0,c=!1;try{for(e=e.call(r);!(a=(t=e.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return f(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(r){var n=(0,s.Z)(),e=n.isLoading,t=n.error,i=n.setError,a=n.isLoadingHandler,f=v(o.useState(void 0),2),h=f[0],m=f[1],x=o.useMemo((function(){return(0,l.wA)(r)}),[r]),y=o.useMemo((function(){return(0,l.wA)(h)}),[h]),w=o.useCallback((function(r){(function(){var n=p(c().mark((function n(){var e,t,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m(void 0),i(void 0),n.prev=2,x){n.next=5;break}throw new Error("order not found");case 5:if((e=x["restaurant-reference"]).path){n.next=8;break}throw new Error("restaurantReference path not found");case 8:return n.next=10,(0,u.Z)({path:e.path});case 10:t=n.sent,m(t),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(2),a=n.t0,c=Error,o=(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](a):a instanceof c)?n.t0:new Error("getRestaurantDoc Error"),i(o);case 18:r();case 19:case"end":return n.stop()}var a,c}),n,null,[[2,14]])})));return function(){return n.apply(this,arguments)}})()()}),[x,i]),j=o.useCallback((function(){a(w)}),[a,w]);o.useCallback((function(){(function(){var r=p(c().mark((function r(){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,x){r.next=3;break}throw new Error("order not found");case 3:if((n=x["restaurant-reference"]).path){r.next=6;break}throw new Error("restaurantReference path not found");case 6:return r.next=8,(0,u.Z)({path:n.path});case 8:e=r.sent,m(e),r.next=14;break;case 12:r.prev=12,r.t0=r.catch(0);case 14:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}})()()}),[x]);var b=(0,d.Z)(j).isInit,k=o.useMemo((function(){var r=null===y||void 0===y?void 0:y.name;return r||""}),[y]);return{isInit:b,isLoading:e,error:t,order:x,restaurant:y,restaurantDoc:h,restaurantName:k}},x=e(576),y=function(r){var n=r.orderDoc,e=m(n),i=e.isLoading,a=e.restaurantName,c=o.useMemo((function(){return i?"".concat(n.id," Loading..."):a?"".concat(n.id," ").concat(a):n.id}),[i,a,n.id]);return(0,t.jsx)("li",{children:(0,t.jsx)(x.Z,{title:c,linkProps:{href:"/order/[id]?id=".concat(n.id),as:"".concat("/FontechOrder","/order/[id]?id=").concat(n.id)}})})},w=function(r){var n=o.useMemo((function(){return(0,l.wA)(r)}),[r]),e=o.useMemo((function(){var r=null===n||void 0===n?void 0:n["restaurant-name"];return r||""}),[n]);return{order:n,restaurantName:e}},j=function(r){var n=r.orderDoc,e=w(n).restaurantName,i=o.useMemo((function(){return e?"".concat(n.id," ").concat(e):n.id}),[e,n.id]);return(0,t.jsx)("li",{children:(0,t.jsx)(x.Z,{title:i,linkProps:{href:"/order/history/[id]?id=".concat(n.id),as:"".concat("/FontechOrder","/order/history/[id]?id=").concat(n.id)}})})},b=e(3695),k=function(){var r=(0,b.Z)(),n=r.isInit,e=r.isLoading,o=r.finishedOrderDocs,i=r.unfinishedOrderDocs,a=r.historyOrderDocs;return n?(0,t.jsx)("div",{children:"isInit..."}):e?(0,t.jsx)("div",{children:"isLoading..."}):(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Active:"}),(0,t.jsx)("ul",{className:"list-decimal pl-8",children:i.map((function(r,n){return(0,t.jsx)(y,{orderDoc:r},"orderDoc_".concat(n))}))}),(0,t.jsx)("p",{children:"Finish:"}),(0,t.jsx)("ol",{className:"list-disc pl-8",children:o.map((function(r,n){return(0,t.jsx)(y,{orderDoc:r},"orderDoc_".concat(n))}))}),(0,t.jsx)("p",{children:"History:"}),(0,t.jsx)("ol",{className:"list-disc pl-8",children:a.map((function(r,n){return(0,t.jsx)(j,{orderDoc:r},"orderDoc_".concat(n))}))})]})},E=e(9726),_=function(){return(0,E.Z)().isCanWriteFireStoreEmailUser?(0,t.jsx)(x.Z,{className:"flex justify-end",title:"\u65b0\u589e\u9ede\u83dc",linkProps:{href:"/order/create",as:"".concat("/FontechOrder","/order/create")}}):null},g=function(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(_,{}),(0,t.jsx)(k,{})]})}}},function(r){r.O(0,[890,580,695,774,888,179],(function(){return n=1996,r(r.s=n);var n}));var n=r.O();_N_E=n}]);