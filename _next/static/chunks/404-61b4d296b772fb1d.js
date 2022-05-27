"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{44229:function(r,e,n){n.d(e,{Z:function(){return vr}});var t=n(85893),a=n(67294),i=n(94184),o=n.n(i),u=n(41664),c=n(11163),l=n(86886),s=n(26447),f=n(36822),d=n(50122),h=n(92902),v=n(67600),m=n(45165),p=n(13659),y=n(42510),b=n(83321),w=n(93419),x=n(23599),g=n(34051),k=n.n(g),j=n(53298);function S(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}var A=function(){var r,e=(r=k().mark((function r(e){var n,t,a;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}throw new Error("Invalid restaurant id");case 2:return r.next=4,j.O.from("users").select().eq("email",e).limit(1).single();case 4:if(n=r.sent,t=n.data,!(a=n.error)){r.next=9;break}throw a;case 9:if(t){r.next=11;break}throw new Error("no restaurant list");case 11:return r.abrupt("return",t);case 12:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){S(i,t,a,o,u,"next",r)}function u(r){S(i,t,a,o,u,"throw",r)}o(void 0)}))});return function(r){return e.apply(this,arguments)}}();function C(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}var Z=function(){var r,e=(r=k().mark((function r(e){var n,t,a;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.O.from("users").insert(e);case 2:if(n=r.sent,t=n.data,!(a=n.error)){r.next=7;break}throw a;case 7:if(t){r.next=9;break}throw new Error("invalid users");case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){C(i,t,a,o,u,"next",r)}function u(r){C(i,t,a,o,u,"throw",r)}o(void 0)}))});return function(r){return e.apply(this,arguments)}}();function I(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}var E=function(){var r,e=(r=k().mark((function r(e){var n,t,a,i,o;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.email,t=e.password,r.next=3,j.O.auth.signIn({email:n,password:t});case 3:if(a=r.sent,i=a.user,!(o=a.error)){r.next=8;break}throw o;case 8:if(i){r.next=10;break}throw new Error("Invalid User");case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){I(i,t,a,o,u,"next",r)}function u(r){I(i,t,a,o,u,"throw",r)}o(void 0)}))});return function(r){return e.apply(this,arguments)}}();function O(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function L(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}function U(r){return function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){L(i,t,a,o,u,"next",r)}function u(r){L(i,t,a,o,u,"throw",r)}o(void 0)}))}}function N(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return O(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(){var r=N(a.useState(void 0),2),e=r[0],n=r[1],t=a.useCallback((function(r){var e=r.email,t=r.password;(function(){var r=U(k().mark((function r(e){var t,a,i;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.email,a=e.password,r.prev=1,r.next=4,E({email:t,password:a});case 4:i=r.sent,n(i),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(1);case 10:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}})()({email:e,password:t})}),[]),i=a.useCallback((function(){(function(){var r=U(k().mark((function r(){return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.O.auth.signOut();case 2:if(!r.sent.error){r.next=5;break}return r.abrupt("return",!1);case 5:return n(void 0),r.abrupt("return",!0);case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()}),[]);return a.useEffect((function(){var r=j.O.auth.user();n(r||void 0)}),[]),a.useEffect((function(){var r=j.O.auth.onAuthStateChange(function(){var r=U(k().mark((function r(e,t){return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(null===t||void 0===t?void 0:t.user)&&n(t.user);case 1:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}()).data;return function(){r&&r.unsubscribe()}}),[]),{doAuthUserSignIn:t,doAuthUserSignOut:i,authUser:e}},T=n(29726),M=n(63869),R=function(r){var e=r.asyncCallback,n=r.customErrorCallback,t=(0,M.Z)({asyncCallback:e,customErrorCallback:n}),i=t.isLoading,o=t.error,u=t.result,c=t.recall,l=t.fetchData;return a.useEffect((function(){i||l()}),[i,l]),{isLoading:i,fetchData:l,error:o,result:u,recall:c}},_=n(41622);function z(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function B(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}function q(r){return function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){B(i,t,a,o,u,"next",r)}function u(r){B(i,t,a,o,u,"throw",r)}o(void 0)}))}}function F(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return z(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(){var r=(0,T.Z)(),e=r.doSaveUser,n=r.doClearUser,t=r.user,i=P(),o=i.doAuthUserSignIn,u=i.doAuthUserSignOut,c=i.authUser,l=F(a.useState(!1),2),s=l[0],f=l[1],d=a.useCallback((function(){return q(k().mark((function r(){var e;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A(null===c||void 0===c?void 0:c.email);case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})))}),[c]),h=(0,M.Z)({asyncCallback:d()}),v=h.isLoading,m=h.error,p=h.result,y=h.recall,b=h.fetchData,w=a.useCallback((function(){return q(k().mark((function r(){var n,t,a;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=(0,_.ZG)(c)){r.next=3;break}throw new Error("Invalid User");case 3:return r.next=5,Z([n]);case 5:if(t=r.sent,a=t[0]){r.next=9;break}throw new Error("Invalid User");case 9:return e(a),r.abrupt("return",a);case 11:case"end":return r.stop()}}),r)})))}),[c,e]),x=R({asyncCallback:w()}).recall,g=a.useCallback((function(r){var e=r.email,n=r.password;v||o({email:e,password:n})}),[v,o]),j=a.useCallback((function(){v||u()}),[v,u]);return a.useEffect((function(){v||b({stopByLoadingCallBack:function(){return f(!1)}})}),[v,b]),a.useEffect((function(){s&&(y()&&f(!1))}),[s,y]),a.useEffect((function(){m?n():p?e(p):n()}),[m,p,n,e]),a.useEffect((function(){f(!0)}),[c]),{isLoading:v,doSignIn:g,doSignOut:j,authUser:c,user:t,createUser:x}},D=n(7258),J=n(87536),$=n(95496),V=n(55113),X=n(86273),W=n(15861);function Y(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}var H=function(){var r,e=(r=k().mark((function r(){return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.O.auth.signIn({provider:"google"},{redirectTo:"https://fontechorder.github.io/FontechOrder"});case 2:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){Y(i,t,a,o,u,"next",r)}function u(r){Y(i,t,a,o,u,"throw",r)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),Q=function(){return(0,t.jsx)(b.Z,{variant:"contained",onClick:H,children:"GOOGLE LOGIN"})};function K(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function rr(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}function er(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function nr(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){er(r,e,n[e])}))}return r}function tr(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return K(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ar=D.Ry().shape({email:D.Z_().required("\u7d66\u6211\u4fe1\u7bb1\u5594").email("\u9019\u4e0d\u662f\u4fe1\u7bb1"),password:D.Z_().required("\u554a\u4f60\u7684\u5bc6\u78bc\u54a7\uff1f").min(6,"\u592a\u5c116~").max(20,"\u592a\u591a20\u5427~")}),ir=function(){var r,e,n,i=tr(a.useState(!1),2),o=i[0],u=i[1],c=(0,J.cI)({resolver:(0,$.X)(ar)}),s=c.reset,d=c.register,h=c.handleSubmit,v=c.formState.errors,m=a.useCallback((function(){h(function(){var r,e=(r=k().mark((function r(e){return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!o){r.next=2;break}return r.abrupt("return");case 2:return u(!0),r.prev=3,r.next=6,E(e);case 6:s({email:"",password:""}),u(!1),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),u(!1);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){rr(i,t,a,o,u,"next",r)}function u(r){rr(i,t,a,o,u,"throw",r)}o(void 0)}))});return function(r){return e.apply(this,arguments)}}())()}),[h,s,o]);return o?(0,t.jsx)(f.Z,{children:" Loading... "}):(0,t.jsx)(V.Z,{children:(0,t.jsx)(f.Z,{px:3,py:2,children:(0,t.jsxs)(l.ZP,{container:!0,spacing:1,children:[(0,t.jsxs)(l.ZP,{item:!0,xs:12,sm:5,children:[(0,t.jsx)(X.Z,nr({required:!0,id:"email",label:"Email",fullWidth:!0,margin:"dense"},d("email"),{error:!!v.email})),(0,t.jsx)(W.Z,{className:"h-6",variant:"inherit",color:"red",children:null!==(n=null===(r=v.email)||void 0===r?void 0:r.message)&&void 0!==n?n:" "})]}),(0,t.jsxs)(l.ZP,{item:!0,xs:12,sm:5,children:[(0,t.jsx)(X.Z,nr({required:!0,id:"password",label:"Password",type:"password",fullWidth:!0,margin:"dense"},d("password"),{error:!!v.password})),(0,t.jsx)(W.Z,{className:"h-6",variant:"inherit",color:"red",children:null===(e=v.password)||void 0===e?void 0:e.message})]}),(0,t.jsx)(l.ZP,{item:!0,xs:12,sm:2,className:"flex justify-end sm:!flex-col sm:items-center sm:justify-center",children:(0,t.jsx)(b.Z,{className:"self-end",variant:"contained",color:"primary",onClick:m,children:"LOGIN"})}),(0,t.jsx)(l.ZP,{className:"flex",item:!0,xs:12,justifyContent:"flex-end",children:(0,t.jsx)(Q,{})})]})})})};function or(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function ur(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return or(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return or(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var cr=function(){var r=G(),e=r.isLoading,n=r.doSignOut,i=r.authUser,o=r.user,u=r.createUser,c=ur(a.useState(null),2),l=c[0],s=c[1],d=Boolean(l),h=function(r){s(r.currentTarget)},v=function(){s(null)};return e?(0,t.jsx)("div",{className:"text-right",children:"Loading..."}):o?(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(b.Z,{id:"basic-button",className:"float-right","aria-controls":d?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,onClick:h,children:(0,t.jsx)("div",{className:"whitespace-pre-wrap break-all text-right",children:o.name})}),(0,t.jsx)(w.Z,{id:"basic-menu",anchorEl:l,open:d,onClose:v,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsx)(x.Z,{onClick:function(){n(),v()},children:"Logout"})})]}):i?(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(b.Z,{id:"basic-button",className:"float-right","aria-controls":d?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,onClick:h,children:"Need Become a Member"}),(0,t.jsxs)(w.Z,{id:"basic-menu",anchorEl:l,open:d,onClose:v,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,t.jsx)(x.Z,{onClick:function(){u(),v()},children:"Be Member"}),(0,t.jsx)(x.Z,{onClick:function(){n(),v()},children:"Logout"})]})]}):(0,t.jsx)(ir,{})},lr=n(55811);function sr(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function fr(r){return function(r){if(Array.isArray(r))return sr(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"===typeof r)return sr(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sr(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var dr=[{key:"order",href:"/orders",title:"Order",iconsMaterialElement:(0,t.jsx)(m.Z,{fontSize:"large"})},{key:"restaurant",href:"/restaurants",title:"Restaurant",iconsMaterialElement:(0,t.jsx)(v.Z,{fontSize:"large"})}],hr=[{key:"new-order",href:"/new-order",title:"New order",iconsMaterialElement:(0,t.jsx)(p.Z,{fontSize:"large"})},{key:"new-menu",href:"/new-menu",title:"New Menu",iconsMaterialElement:(0,t.jsx)(y.Z,{fontSize:"large"})}],vr=function(){var r=(0,lr.Z)().adminUser,e=(0,c.useRouter)().pathname,n=a.useMemo((function(){return r?fr(dr).concat(fr(hr)):dr}),[r]);return(0,t.jsx)("div",{id:"header",className:"flex w-full justify-center bg-blue-400",children:(0,t.jsx)("div",{className:"flex w-full flex-row bg-green-500 p-4 lg:w-[64rem] lg:max-w-[64rem]",children:(0,t.jsxs)(l.ZP,{container:!0,spacing:1,children:[(0,t.jsx)(l.ZP,{className:"flex flex-wrap items-end",item:!0,xs:3,sm:2,md:2,children:(0,t.jsx)(s.Z,{children:n.map((function(r){return(0,t.jsx)(f.Z,{className:o()(e===r.href&&"!bg-gray-400"),children:(0,t.jsx)(u.default,{href:r.href,as:"".concat("/FontechOrder").concat(r.href),passHref:!0,children:(0,t.jsx)(d.Z,{children:(0,t.jsx)(h.Z,{title:r.title,children:r.iconsMaterialElement})})})},"default-links-".concat(r.key))}))})}),(0,t.jsx)(l.ZP,{item:!0,xs:9,sm:10,md:10,children:(0,t.jsx)(cr,{})})]})})})}},99103:function(r,e,n){n.d(e,{Z:function(){return h}});var t=n(85893),a=n(67294),i=n(26447),o=n(46901),u=n(93946),c=n(92401),l=n(50594),s=n(20160),f=function(){var r=(0,s.Z)(),e=r.doAddToAlertList,n=r.doRemoveFromAlertList,t=r.doClearAlertList,i=r.alertList;return a.useEffect((function(){if(!(i.length<1)){var r=setTimeout((function(){n(i.length-1)}),2e3);return function(){clearTimeout(r)}}}),[i,n]),{doAddToAlertList:e,doRemoveFromAlertList:n,doClearAlertList:t,alertList:i}},d=function(){var r=f(),e=r.doRemoveFromAlertList,n=r.alertList;return(0,t.jsx)(i.Z,{className:"absolute top-0 left-0 right-0 z-[2] m-auto p-2 lg:w-[64rem] lg:max-w-[64rem]",spacing:2,children:n.map((function(r,n){return(0,t.jsx)(o.Z,{severity:r.severity,action:(0,t.jsx)(u.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return e(n)},children:(0,t.jsx)(l.Z,{fontSize:"inherit"})}),children:(0,t.jsx)(c.Z,{children:r.severity})},"each-alert-".concat(n))}))})},h=function(r){var e=r.header,n=r.children,a=r.footer;return(0,t.jsxs)("div",{id:"page-content",className:"flex min-w-[20rem] flex-col ",children:[e,(0,t.jsxs)("div",{className:"relative w-full self-center lg:w-[64rem] lg:max-w-[64rem]",children:[(0,t.jsx)("main",{children:n}),(0,t.jsx)(d,{})]}),a]})}},1895:function(r,e,n){n.d(e,{FG:function(){return t},wW:function(){return a},SZ:function(){return i},Sc:function(){return o}});var t=["jason@fontech.com.tw","service@fontech.com.tw"],a=["id","name","cost","type"],i=[{key:"name",required:!0,label:"Name"},{key:"cost",required:!0,type:"number",label:"Cost"},{key:"type",required:!1,label:"Type"}],o=[{key:"name",required:!0,label:"Name"},{key:"cost",required:!0,type:"number",label:"Cost"}]},55811:function(r,e,n){var t=n(67294),a=n(29726),i=n(1895);function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function u(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return o(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(){var r=u(t.useState(!0),2),e=r[0],n=r[1],o=(0,a.p)().user,c=t.useMemo((function(){if(o&&o.email&&i.FG.includes(o.email))return o}),[o]);return t.useEffect((function(){e&&n(!1)}),[e]),{isInit:e,adminUser:c}}},63869:function(r,e,n){var t=n(34051),a=n.n(t),i=n(67294),o=n(41622);function u(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function c(r,e,n,t,a,i,o){try{var u=r[i](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,a)}function l(r){return function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function o(r){c(i,t,a,o,u,"next",r)}function u(r){c(i,t,a,o,u,"throw",r)}o(void 0)}))}}function s(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,a,i=[],o=!0,u=!1;try{for(n=n.call(r);!(o=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return u(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(r){var e=r.asyncCallback,n=r.customErrorCallback,t=s(i.useState(!1),2),u=t[0],c=t[1],f=s(i.useState(void 0),2),d=f[0],h=f[1],v=s(i.useState(void 0),2),m=v[0],p=v[1],y=i.useCallback((function(){return e}),[e]),b=i.useCallback((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stopByLoadingCallBack:o.G1,finishCallBack:o.G1},e=function(){var e=l(a().mark((function e(){var t,i,l,s,f,v,b;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=5;break}return null===r||void 0===r||null===(i=r.finishCallBack)||void 0===i||i.call(r),e.abrupt("return");case 5:if(void 0===m){e.next=9;break}return null===r||void 0===r||null===(l=r.finishCallBack)||void 0===l||l.call(r),e.abrupt("return");case 9:if(!u){e.next=14;break}return null===r||void 0===r||null===(s=r.stopByLoadingCallBack)||void 0===s||s.call(r),null===r||void 0===r||null===(f=r.finishCallBack)||void 0===f||f.call(r),e.abrupt("return");case 14:return c(!0),p(void 0),e.prev=16,e.next=19,y()();case 19:v=e.sent,p(v),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(16),b=n&&n(e.t0)||(0,o.iJ)(e.t0)||new Error("fetchData Error"),h(b);case 27:null===r||void 0===r||null===(t=r.finishCallBack)||void 0===t||t.call(r),c(!1);case 29:case"end":return e.stop()}}),e,null,[[16,23]])})));return function(){return e.apply(this,arguments)}}();e()}),[y,n,u,d,m,c,p,h]),w=i.useCallback((function(){return!u&&(h(void 0),void 0!==m&&p(void 0),!0)}),[m,u,h,p]);return{isLoading:u,fetchData:b,error:d,result:m,recall:w}}},20160:function(r,e,n){n.d(e,{Z:function(){return u}});var t=n(67294),a=n(52420),i=n(8218),o=function(){return{alertList:(0,a.v9)((function(r){return{alertList:r.alertListManagerState.alertList}}),a.wU).alertList}},u=function(){var r=(0,a.I0)(),e=o().alertList;return{doAddToAlertList:t.useCallback((function(e){r(function(r){return{type:i.Z.ADD_TO_ALERT_LIST,newAlert:r}}(e))}),[r]),doRemoveFromAlertList:t.useCallback((function(e){r(function(r){return{type:i.Z.REMOVE_FROM_ALERT_LIST,index:r}}(e))}),[r]),doClearAlertList:t.useCallback((function(){r({type:i.Z.CLEAR_ALERT_LIST})}),[r]),alertList:e}}},29726:function(r,e,n){n.d(e,{Z:function(){return u},p:function(){return o}});var t=n(67294),a=n(52420),i=n(90380),o=function(){var r=(0,a.I0)(),e=(0,a.v9)((function(r){return{user:r.userManagerState.user}}),a.wU).user;return{doSaveUser:t.useCallback((function(e){r(function(r){return{type:i.f.SAVE_USER,user:r}}(e))}),[r]),doClearUser:t.useCallback((function(){r({type:i.f.CLEAR_USER})}),[r]),user:e}},u=o},53298:function(r,e,n){n.d(e,{O:function(){return t}});var t=(0,n(41904).eI)("https://cjehjnuqvihotvcwpyzr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqZWhqbnVxdmlob3R2Y3dweXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAwMDExOTAsImV4cCI6MTk2NTU3NzE5MH0.nTMWhQfiFVKwC5bG32fuuRrYXLq3b_UHbQe5EG6mf7w")}}]);