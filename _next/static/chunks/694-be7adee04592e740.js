"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{5908:function(t,r,n){var e=n(5893),o=n(7294),a=n(4184),u=n.n(a),i=n(1242);r.Z=function(t){var r=t.className,n=t.currentPage,a=t.paginationText,c=t.updatePaginationText,l=t.updateCurrentPage,f=t.maxCurrentPage,s=t.disabledPrev,y=t.prevPaginationButtonPress,d=t.disabledNext,m=t.nextPaginationButtonPress;return o.useEffect((function(){c(n.toString())}),[n,c]),(0,e.jsxs)("div",{className:"flex flex-col",children:[(0,e.jsxs)("div",{className:u()(r,"mt-[40px] flex flex-row items-center justify-center"),children:[(0,e.jsx)(i.Z,{className:"mx-2",disabled:s,onClick:y,children:"Prev"}),(0,e.jsx)("div",{className:"mx-2",children:(0,e.jsx)("input",{className:"w-[100px] text-center text-black",type:"number",value:a,onBlur:function(t){if(""!==t.target.value){var r=parseInt(t.target.value);r<1||r>f?c(n.toString()):(l(r),c(r.toString()))}else c(n.toString())},onChange:function(t){c(t.target.value)}})}),(0,e.jsx)(i.Z,{className:"mx-2",disabled:d,onClick:m,children:"Next"})]}),(0,e.jsxs)("div",{className:"self-center text-black",children:["\u5171",f,"\u9801"]})]})}},8826:function(t,r,n){var e=n(5893),o=(n(7294),n(5675)),a=n(1714);function u(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(r){u(t,r,n[r])}))}return t}function c(t,r){if(null==t)return{};var n,e,o=function(t,r){if(null==t)return{};var n,e,o={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],r.indexOf(n)>=0||(o[n]=t[n]);return o}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}r.Z=function(t){var r=t.alt,n=void 0===r?"zoom-image":r,u=c(t,["alt"]);return(0,e.jsx)(a.Z,{children:(0,e.jsx)(o.default,i({},u,{alt:n}))})}},3681:function(t,r,n){var e=n(4051),o=n.n(e),a=n(5321),u=n(317);function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function c(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(l){return void n(l)}i.done?r(c):Promise.resolve(c).then(e,o)}function l(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return i(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(){var t,r=(t=o().mark((function t(r){var n,e,i,c,f,s,y,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.documentReference,e=r.path,i=r.pathSegments,c=void 0===i?[]:i,f=r.orderByKey,s=n&&a.hJ.apply(void 0,[n,e].concat(l(c)))||a.hJ.apply(void 0,[u.sG,e].concat(l(c))),y=f?a.IO.apply(void 0,[s].concat(l([(0,a.Xo)(f)]))):s,t.next=5,(0,a.PL)(y);case 5:if(0!==(d=t.sent).docs.length){t.next=8;break}throw new Error("querySnapshot no data.");case 8:return t.abrupt("return",d.docs);case 9:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function u(t){c(a,e,o,u,i,"next",t)}function i(t){c(a,e,o,u,i,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}();r.Z=f},8231:function(t,r,n){var e=n(4051),o=n.n(e),a=n(7294),u=n(3681),i=n(4193),c=n(963),l=n(1912);function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function s(t,r,n,e,o,a,u){try{var i=t[a](u),c=i.value}catch(l){return void n(l)}i.done?r(c):Promise.resolve(c).then(e,o)}function y(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,r)||m(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){if(t){if("string"===typeof t)return f(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,r):void 0}}r.Z=function(t){var r=t.documentReference,n=t.path,e=t.pathSegments,f=void 0===e?l.uT:e,m=t.orderByKey,p=(0,i.Z)(),v=p.isLoadingHandler,b=p.isLoading,h=p.error,g=p.setError;a.useState(!1);var S=y(a.useState(Array()),2),w=S[0],x=S[1],j=a.useMemo((function(){return w.filter((function(t){return(0,l.wA)(t)}))}),[w]),A=a.useMemo((function(){return j.map((function(t){return(0,l.wA)(t)}))}),[j]),P=a.useMemo((function(){return w.reduce((function(t,r){var n=(0,l.wA)(r);return n?d(t).concat([{doc:r,data:n}]):t}),Array())}),[w]),O=a.useCallback((function(t){(function(){var e,a=(e=o().mark((function e(){var a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(void 0),x([]),e.prev=2,e.next=5,(0,u.Z)({documentReference:r,path:n,pathSegments:f,orderByKey:m});case 5:a=e.sent,x(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),o=e.t0,c=Error,i=(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](o):o instanceof c)?e.t0:new Error("getDocuments Error"),g(i);case 13:t();case 14:case"end":return e.stop()}var o,c}),e,null,[[2,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(t){s(a,n,o,u,i,"next",t)}function i(t){s(a,n,o,u,i,"throw",t)}u(void 0)}))});return function(){return a.apply(this,arguments)}})()()}),[r,n,f,m,g]),I=a.useCallback((function(){v(O)}),[v,O]);return{isInit:(0,c.Z)(I).isInit,isLoading:b,isLoadingHandler:v,error:h,getDocuments:I,documents:w,dataExistsDocuments:j,documentDatas:A,docDatas:P}}},963:function(t,r,n){var e=n(7294);function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.Z=function(t){var r=a(e.useState(!0),2),n=r[0],o=r[1];return e.useEffect((function(){n&&(o(!1),null===t||void 0===t||t())}),[n,t]),{isInit:n,setIsInit:o}}},4193:function(t,r,n){n.d(r,{Z:function(){return l}});var e=n(1030),o=n(7294);function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return a(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(){var t=u(o.useState(void 0),2);return{error:t[0],setError:t[1]}};function c(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var l=function(){return function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(r){c(t,r,n[r])}))}return t}({},(0,e.Z)(),i())}},4896:function(t,r,n){var e=n(7294);function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getPaginationCount:5,getTotalCount:0},r=a(e.useState(1),2),n=r[0],o=r[1],u=a(e.useState((null===t||void 0===t?void 0:t.getPaginationCount)||5),2),i=u[0],c=u[1],l=a(e.useState((null===t||void 0===t?void 0:t.getTotalCount)||0),2),f=l[0],s=l[1],y=e.useMemo((function(){return f<i?1:Math.ceil(f/i)}),[f,i]),d=e.useMemo((function(){return n<=1}),[n]),m=e.useMemo((function(){return n>=y}),[n,y]),p=e.useCallback((function(){n<=1||o(n-1)}),[n]),v=function(){n>=y||o(n+1)};return{currentPage:n,setCurrentPage:o,paginationCount:i,setPaginationCount:c,totalCount:f,setTotalCount:s,maxCurrentPage:y,disabledPrev:d,disabledNext:m,prevPaginationButtonPress:p,nextPaginationButtonPress:v}}}}]);