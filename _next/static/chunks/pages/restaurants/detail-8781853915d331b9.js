(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{3824:function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurants/detail",function(){return t(7465)}])},5069:function(r,n,t){"use strict";var e=t(4051),i=t.n(e),a=t(7294),o=t(1163),u=t(5590);function c(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function l(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}function s(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,i,a=[],o=!0,u=!1;try{for(t=t.call(r);!(o=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return c(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(){var r=s(a.useState(!0),2),n=r[0],t=r[1],e=(0,o.useRouter)().query.id,c=a.useMemo((function(){return console.log("queryId: ",e),(0,u.W$)(e)}),[e]),f=a.useMemo((function(){var r=parseInt(c);if(r&&!(r<=0))return r}),[c]);return a.useEffect((function(){(function(){var r,n=(r=i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,u._v)(500);case 2:t(!1);case 3:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,i){var a=r.apply(n,t);function o(r){l(a,e,i,o,u,"next",r)}function u(r){l(a,e,i,o,u,"throw",r)}o(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[t]),{id:f,idText:c,isInit:n}}},7465:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return er}});var e=t(5893),i=t(7294),a=t(7357),o=t(2567),u=t(5069),c=t(4184),l=t.n(c),s=t(4051),f=t.n(s),d=t(3298);function h(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}var v=function(){var r,n=(r=f().mark((function r(n){var t,e,i;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}throw new Error("Invalid restaurant id");case 2:if(!(n<=0)){r.next=4;break}throw new Error("Invalid restaurant id");case 4:return r.next=6,d.O.from("restaurants").select().eq("id",n).limit(1).single();case 6:if(t=r.sent,e=t.data,!(i=t.error)){r.next=11;break}throw i;case 11:if(e){r.next=13;break}throw new Error("no restaurant list");case 13:return r.abrupt("return",e);case 14:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,i){var a=r.apply(n,t);function o(r){h(a,e,i,o,u,"next",r)}function u(r){h(a,e,i,o,u,"throw",r)}o(void 0)}))});return function(r){return n.apply(this,arguments)}}(),m=t(2962),p=t(9664);function y(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function b(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,i,a=[],o=!0,u=!1;try{for(t=t.call(r);!(o=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return y(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(r){var n=b(i.useState(void 0),2),t=n[0],e=n[1],a=i.useCallback((function(){return v(r)}),[r]),o=(0,m.Z)({asyncCallback:a}),u=o.isInit,c=o.isLoading,l=o.error,s=o.recall,f=o.result,d=i.useCallback((function(r){if(!r.errors){var n=r.new;n&&e(n)}}),[]),h=i.useCallback((function(r){if(!r.errors){var n=r.new;n&&e(n)}}),[]),y=i.useCallback((function(r){r.errors||e(void 0)}),[]);return(0,p.Z)({path:"restaurants:id=eq.".concat(r),insertCallback:d,updateCallback:h,deleteCallback:y}),i.useEffect((function(){console.log("setRestaurant with result change"),e(f)}),[f]),{isInit:u,isLoading:c,error:l,recall:s,restaurant:t}},w=t(6886),g=t(1077),j=t(5113),I=t(7922),Z=t(3946),k=t(7906),S=t(295),A=t(3252),C=t(2882),E=t(3184),O=t(3816),M=t(5861),_=t(5503),P=t(813);function L(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}var T=function(){var r,n=(r=f().mark((function r(n){var t,e,i;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}throw new Error("Invalid restaurant id");case 2:if(!(n<=0)){r.next=4;break}throw new Error("Invalid restaurant id");case 4:return r.next=6,d.O.from("menu_item_options").select().eq("restaurant",n);case 6:if(t=r.sent,e=t.data,!(i=t.error)){r.next=11;break}throw i;case 11:if(e){r.next=13;break}throw new Error("no restaurant list");case 13:return r.abrupt("return",e);case 14:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,i){var a=r.apply(n,t);function o(r){L(a,e,i,o,u,"next",r)}function u(r){L(a,e,i,o,u,"throw",r)}o(void 0)}))});return function(r){return n.apply(this,arguments)}}();function N(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function q(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}function R(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,i,a=[],o=!0,u=!1;try{for(t=t.call(r);!(o=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(r,n)||U(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(r){return function(r){if(Array.isArray(r))return N(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||U(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(r,n){if(r){if("string"===typeof r)return N(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?N(r,n):void 0}}var W=function(r){var n,t=R(i.useState([]),2),e=t[0],a=t[1],o=i.useCallback((function(){return T(r)}),[r]),u=(0,m.Z)({asyncCallback:(n=f().mark((function r(){return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),function(){var r=this,t=arguments;return new Promise((function(e,i){var a=n.apply(r,t);function o(r){q(a,e,i,o,u,"next",r)}function u(r){q(a,e,i,o,u,"throw",r)}o(void 0)}))})}),c=u.isInit,l=u.isLoading,s=u.error,d=u.recall,h=u.result,v=i.useCallback((function(r){if(!r.errors){var n=r.new;n&&a($(e).concat([n]))}}),[e]),y=i.useCallback((function(r){var n;if(!r.errors){var t=null===(n=r.old)||void 0===n?void 0:n.id;if(t&&!(t<=0)){var i=r.new;if(i){var o=e.map((function(r){return r.id===t?i:r}));a(o)}}}}),[e]),b=i.useCallback((function(r){var n;if(!r.errors){var t=null===(n=r.old)||void 0===n?void 0:n.id;t&&(t<=0||a(e.filter((function(r){return r.id!==t}))))}}),[e]);return(0,p.Z)({path:"menu_item_options:restaurant=eq.".concat(r),insertCallback:v,updateCallback:y,deleteCallback:b}),i.useEffect((function(){console.log("setRestaurantMenuItemOptions with result change"),a(h||[])}),[h]),{isInit:c,isLoading:l,error:s,recall:d,restaurantMenuItemOptions:e}};function B(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}var z=function(){var r,n=(r=f().mark((function r(n){var t,e,i;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}throw new Error("Invalid restaurant id");case 2:if(!(n<=0)){r.next=4;break}throw new Error("Invalid restaurant id");case 4:return r.next=6,d.O.from("menu_items").select().eq("restaurant",n);case 6:if(t=r.sent,e=t.data,!(i=t.error)){r.next=11;break}throw i;case 11:if(e){r.next=13;break}throw new Error("no restaurant list");case 13:return r.abrupt("return",e);case 14:case"end":return r.stop()}}),r)})),function(){var n=this,t=arguments;return new Promise((function(e,i){var a=r.apply(n,t);function o(r){B(a,e,i,o,u,"next",r)}function u(r){B(a,e,i,o,u,"throw",r)}o(void 0)}))});return function(r){return n.apply(this,arguments)}}();function F(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function X(r,n,t,e,i,a,o){try{var u=r[a](o),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(e,i)}function D(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,i,a=[],o=!0,u=!1;try{for(t=t.call(r);!(o=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(r,n)||J(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(r){return function(r){if(Array.isArray(r))return F(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||J(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(r,n){if(r){if("string"===typeof r)return F(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?F(r,n):void 0}}var H=function(r){var n,t=D(i.useState([]),2),e=t[0],a=t[1],o=i.useCallback((function(){return z(r)}),[r]),u=(0,m.Z)({asyncCallback:(n=f().mark((function r(){return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),function(){var r=this,t=arguments;return new Promise((function(e,i){var a=n.apply(r,t);function o(r){X(a,e,i,o,u,"next",r)}function u(r){X(a,e,i,o,u,"throw",r)}o(void 0)}))})}),c=u.isInit,l=u.isLoading,s=u.error,d=u.recall,h=u.result;console.log("useEachRestaurantMenus result: ",h);var v=i.useCallback((function(r){if(!r.errors){var n=r.new;n&&a(G(e).concat([n]))}}),[e]),y=i.useCallback((function(r){var n;if(!r.errors){var t=null===(n=r.old)||void 0===n?void 0:n.id;if(t&&!(t<=0)){var i=r.new;if(i){var o=e.map((function(r){return r.id===t?i:r}));a(o)}}}}),[e]),b=i.useCallback((function(r){var n;if(!r.errors){var t=null===(n=r.old)||void 0===n?void 0:n.id;t&&(t<=0||a(e.filter((function(r){return r.id!==t}))))}}),[e]);return(0,p.Z)({path:"menu_items:restaurant=eq.".concat(r),insertCallback:v,updateCallback:y,deleteCallback:b}),i.useEffect((function(){console.log("setRestaurantMenus with result change"),a(h||[])}),[h]),{isInit:c,isLoading:l,error:s,recall:d,restaurantMenus:e}};function K(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}var Q=function(r){var n=H(r),t=n.isInit,e=n.isLoading,a=n.error,o=n.restaurantMenus,u=W(r),c=u.isInit,l=u.isLoading,s=u.error,f=u.restaurantMenuItemOptions;return{menuInit:i.useMemo((function(){return t||c}),[t,c]),menuIsLoading:i.useMemo((function(){return e||l}),[e,l]),menuError:i.useMemo((function(){return a||s}),[a,s]),restaurantMenuWithItemOptions:i.useMemo((function(){return o.map((function(r){return function(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},e=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),e.forEach((function(n){K(r,n,t[n])}))}return r}({},r,{itemOptions:f.filter((function(n){return n.menu_item===r.id}))})}))}),[o,f])}};function V(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function Y(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,i,a=[],o=!0,u=!1;try{for(t=t.call(r);!(o=(e=t.next()).done)&&(a.push(e.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return V(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var rr=function(r){var n=r.id,t=Y(i.useState(!1),2),o=t[0],u=t[1],c=Q(n),l=c.menuInit,s=c.menuIsLoading,f=c.menuError,d=c.restaurantMenuWithItemOptions;return console.log("EachRestaurantMenuList id: ".concat(n)),console.log("EachRestaurantMenuList restaurantMenuWithItemOptions: ".concat(JSON.stringify(d))),l?(0,e.jsx)("div",{children:"is Init..."}):s?(0,e.jsx)("div",{children:"Loading..."}):f?(0,e.jsx)("div",{children:"menu Error"}):(0,e.jsx)(C.Z,{component:j.Z,children:(0,e.jsxs)(k.Z,{"aria-label":"collapsible table",children:[(0,e.jsx)(E.Z,{children:(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(A.Z,{}),(0,e.jsx)(A.Z,{children:"Name"}),(0,e.jsx)(A.Z,{align:"right",children:"Cost"}),(0,e.jsx)(A.Z,{align:"right",children:"Type"})]})}),(0,e.jsx)(S.Z,{children:d.map((function(r){return(0,e.jsxs)(i.Fragment,{children:[(0,e.jsxs)(O.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,e.jsx)(A.Z,{children:(0,e.jsx)(Z.Z,{"aria-label":"expand row",size:"small",onClick:function(){return u(!o)},children:o?(0,e.jsx)(P.Z,{}):(0,e.jsx)(_.Z,{})})}),(0,e.jsx)(A.Z,{component:"th",scope:"row",children:r.name}),(0,e.jsx)(A.Z,{align:"right",children:r.cost}),(0,e.jsx)(A.Z,{align:"right",children:r.type})]}),(0,e.jsx)(O.Z,{children:(0,e.jsx)(A.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,e.jsx)(I.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,e.jsxs)(a.Z,{sx:{margin:1},children:[(0,e.jsx)(M.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Options"}),(0,e.jsxs)(k.Z,{size:"small","aria-label":"purchases",children:[(0,e.jsx)(E.Z,{children:(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(A.Z,{children:"Name"}),(0,e.jsx)(A.Z,{children:"Cost"}),(0,e.jsx)(A.Z,{align:"right",children:"Type"})]})}),(0,e.jsx)(S.Z,{children:r.itemOptions.map((function(r){return(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(A.Z,{component:"th",scope:"row",children:r.name}),(0,e.jsx)(A.Z,{children:r.cost}),(0,e.jsx)(A.Z,{align:"right",children:r.type})]},r.name)}))})]})]})})})})]},r.name)}))})]})})},nr=function(r){var n=r.id,t=x(n),i=t.isInit,o=t.isLoading,u=t.error,c=t.restaurant;return i?(0,e.jsx)("div",{children:"content init..."}):o?(0,e.jsx)("div",{children:"loading..."}):u?(0,e.jsx)("div",{children:"Get Error..."}):c?(0,e.jsx)(a.Z,{children:(0,e.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,e.jsx)(w.ZP,{item:!0,xs:4,sm:4,md:3,children:(0,e.jsxs)(a.Z,{className:l()("relative aspect-[3/4]",!c.image_url&&"bg-blue-300"),children:[c.name,c.image_url&&(0,e.jsx)(g.Z,{priority:!0,src:c.image_url,alt:c.name,layout:"fill"})]})}),(0,e.jsx)(w.ZP,{item:!0,xs:8,sm:8,md:9,children:(0,e.jsx)(a.Z,{className:"flex h-full items-center justify-center bg-yellow-500",children:"Form"})}),(0,e.jsx)(w.ZP,{item:!0,xs:12,sm:12,md:12,children:(0,e.jsx)(rr,{id:n})})]})}):(0,e.jsx)("div",{children:"Invalid Restaurant"})},tr=function(){var r=(0,u.Z)(),n=r.isInit,t=r.id;return n?(0,e.jsx)("div",{children:"Init..."}):t?(0,e.jsx)(nr,{id:t}):(0,e.jsx)("div",{children:"Invalid Id"})},er=function(){return(0,e.jsx)(o.Z,{children:(0,e.jsx)(a.Z,{m:2,children:(0,e.jsx)(tr,{})})})}}},function(r){r.O(0,[742,6,545,168,451,774,888,179],(function(){return n=3824,r(r.s=n);var n}));var n=r.O();_N_E=n}]);