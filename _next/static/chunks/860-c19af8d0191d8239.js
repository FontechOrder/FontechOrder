"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{41077:function(r,t,n){var e=n(85893),o=(n(67294),n(25675)),a=n(11714),i=n(14689);function u(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function c(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){u(r,t,n[t])}))}return r}function l(r,t){if(null==r)return{};var n,e,o=function(r,t){if(null==r)return{};var n,e,o={},a=Object.keys(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(o[n]=r[n]);return o}(r,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}t.Z=function(r){var t=r.withNewTabLink,n=void 0===t||t,u=r.alt,f=void 0===u?"zoom-image":u,s=l(r,["withNewTabLink","alt"]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Z,{wrapStyle:{width:"100%",height:"100%"},children:(0,e.jsx)("div",{className:"relative h-full w-full",children:(0,e.jsx)(o.default,c({},s,{alt:f}))})}),n&&"string"===typeof s.src&&(0,e.jsx)("div",{className:"absolute top-0 right-0 bg-white bg-opacity-30 shadow-md",children:(0,e.jsx)("a",{target:"_blank",rel:"noreferrer",href:s.src,children:(0,e.jsx)(i.Z,{fontSize:"large"})})})]})}},46199:function(r,t,n){n.d(t,{Z:function(){return p}});var e=n(85893),o=n(67294),a=n(36822),i=n(99103),u=n(44229),c=n(34051),l=n.n(c),f=n(11163),s=n(41622);function d(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function v(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function y(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return d(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(){var r=y(o.useState(!0),2),t=r[0],n=r[1],e=(0,f.useRouter)().query.id,a=o.useMemo((function(){return(0,s.W$)(e)}),[e]),i=o.useMemo((function(){var r=parseInt(a);if(r&&!(r<=0))return r}),[a]);return o.useEffect((function(){(function(){var r,t=(r=l().mark((function r(){return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s._v)(500);case 2:n(!1);case 3:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){v(a,e,o,i,u,"next",r)}function u(r){v(a,e,o,i,u,"throw",r)}i(void 0)}))});return function(){return t.apply(this,arguments)}})()()}),[n]),{id:i,idText:a,isInit:t}},p=function(r){var t=r.children,n=b(),c=n.isInit,l=n.id,f=o.useMemo((function(){return c?(0,e.jsx)(a.Z,{children:"Init..."}):l?t?t(l):null:(0,e.jsx)(a.Z,{children:"404!"})}),[c,l,t]);return(0,e.jsx)(i.Z,{header:(0,e.jsx)(u.Z,{}),children:(0,e.jsx)(a.Z,{m:2,children:f})})}},70301:function(r,t,n){var e=n(67294),o=n(63869);function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(r){var t=r.asyncCallback,n=r.customErrorCallback,a=i(e.useState(!0),2),u=a[0],c=a[1],l=e.useCallback((function(){return t}),[t]),f=(0,o.Z)({asyncCallback:l(),customErrorCallback:n}),s=f.isLoading,d=f.error,v=f.result,y=f.recall,b=f.fetchData,p=e.useCallback((function(){b({finishCallBack:function(){c(!1)}})}),[b]),m=e.useCallback((function(){return!u&&y()}),[u,y]);return e.useEffect((function(){u&&(s||p())}),[u,s,p]),e.useEffect((function(){u||p()}),[u,p]),{isInit:u,setIsInit:c,isLoading:s,error:d,result:v,recall:m}}},10484:function(r,t,n){n.d(t,{Z:function(){return S}});var e=n(67294),o=n(34051),a=n.n(o),i=n(70301),u=n(53298);function c(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}var l=function(){var r,t=(r=a().mark((function r(t){var n,e,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}throw new Error("Invalid restaurant id");case 2:if(!(t<=0)){r.next=4;break}throw new Error("Invalid restaurant id");case 4:return r.next=6,u.O.from("menu_item_options").select().eq("restaurant_id",t);case 6:if(n=r.sent,e=n.data,!(o=n.error)){r.next=11;break}throw o;case 11:if(e){r.next=13;break}throw new Error("no restaurant list");case 13:return r.abrupt("return",e);case 14:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){c(a,e,o,i,u,"next",r)}function u(r){c(a,e,o,i,u,"throw",r)}i(void 0)}))});return function(r){return t.apply(this,arguments)}}(),f=n(89664);function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function d(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function v(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,t)||b(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(r){return function(r){if(Array.isArray(r))return s(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||b(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(r,t){if(r){if("string"===typeof r)return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(r,t):void 0}}var p=function(r){var t,n=v(e.useState([]),2),o=n[0],u=n[1],c=e.useCallback((function(){return l(r)}),[r]),s=(0,i.Z)({asyncCallback:(t=a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(r){d(a,e,o,i,u,"next",r)}function u(r){d(a,e,o,i,u,"throw",r)}i(void 0)}))})}),b=s.isInit,p=s.isLoading,m=s.error,h=s.recall,w=s.result,g=e.useCallback((function(r){if(!r.errors){var t=r.new;t&&u(y(o).concat([t]))}}),[o]),k=e.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;if(n&&!(n<=0)){var e=r.new;if(e){var a=o.map((function(r){return r.id===n?e:r}));u(a)}}}}),[o]),x=e.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;n&&(n<=0||u(o.filter((function(r){return r.id!==n}))))}}),[o]);return(0,f.Z)({path:"menu_item_options:restaurant=eq.".concat(r),insertCallback:g,updateCallback:k,deleteCallback:x}),e.useEffect((function(){u(w||[])}),[w]),{isInit:b,isLoading:p,error:m,recall:h,restaurantMenuItemOptions:o}};function m(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}var h=function(){var r,t=(r=a().mark((function r(t){var n,e,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}throw new Error("Invalid restaurant id");case 2:if(!(t<=0)){r.next=4;break}throw new Error("Invalid restaurant id");case 4:return r.next=6,u.O.from("menu_items").select().eq("restaurant_id",t);case 6:if(n=r.sent,e=n.data,!(o=n.error)){r.next=11;break}throw o;case 11:if(e){r.next=13;break}throw new Error("no restaurant list");case 13:return r.abrupt("return",e);case 14:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(e,o){var a=r.apply(t,n);function i(r){m(a,e,o,i,u,"next",r)}function u(r){m(a,e,o,i,u,"throw",r)}i(void 0)}))});return function(r){return t.apply(this,arguments)}}();function w(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function g(r,t,n,e,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(e,o)}function k(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,t)||j(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r){return function(r){if(Array.isArray(r))return w(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||j(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(r,t){if(r){if("string"===typeof r)return w(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(r,t):void 0}}var I=function(r){var t,n=k(e.useState([]),2),o=n[0],u=n[1],c=e.useCallback((function(){return h(r)}),[r]),l=(0,i.Z)({asyncCallback:(t=a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(r){g(a,e,o,i,u,"next",r)}function u(r){g(a,e,o,i,u,"throw",r)}i(void 0)}))})}),s=l.isInit,d=l.isLoading,v=l.error,y=l.recall,b=l.result,p=e.useCallback((function(r){if(!r.errors){var t=r.new;t&&u(x(o).concat([t]))}}),[o]),m=e.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;if(n&&!(n<=0)){var e=r.new;if(e){var a=o.map((function(r){return r.id===n?e:r}));u(a)}}}}),[o]),w=e.useCallback((function(r){var t;if(!r.errors){var n=null===(t=r.old)||void 0===t?void 0:t.id;n&&(n<=0||u(o.filter((function(r){return r.id!==n}))))}}),[o]);return(0,f.Z)({path:"menu_items:restaurant=eq.".concat(r),insertCallback:p,updateCallback:m,deleteCallback:w}),e.useEffect((function(){u(b||[])}),[b]),{isInit:s,isLoading:d,error:v,recall:y,restaurantMenus:o}};function O(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}var S=function(r){var t=I(r),n=t.isInit,o=t.isLoading,a=t.error,i=t.restaurantMenus,u=p(r),c=u.isInit,l=u.isLoading,f=u.error,s=u.restaurantMenuItemOptions;return{menuInit:e.useMemo((function(){return n||c}),[n,c]),menuIsLoading:e.useMemo((function(){return o||l}),[o,l]),menuError:e.useMemo((function(){return a||f}),[a,f]),restaurantMenuWithItemOptions:e.useMemo((function(){return i.map((function(r){return function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){O(r,t,n[t])}))}return r}({},r,{itemOptions:s.filter((function(t){return t.menu_item_id===r.id}))})}))}),[i,s])}}},89664:function(r,t,n){var e=n(67294),o=n(53298),a=n(41622);t.Z=function(r){var t=r.path,n=r.insertCallback,i=void 0===n?a.G1:n,u=r.updateCallback,c=void 0===u?a.G1:u,l=r.deleteCallback,f=void 0===l?a.G1:l;return e.useEffect((function(){var r=o.O.from(t).on("INSERT",i).on("UPDATE",c).on("DELETE",f).subscribe();return function(){o.O.removeSubscription(r)}}),[t,i,c,f]),{}}}}]);