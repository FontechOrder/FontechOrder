(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{348:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/table",function(){return r(4384)}])},4384:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var t=r(4051),a=r.n(t),c=r(5893),s=(r(7294),r(8580)),u=r(1242);function o(e,n,r,t,a,c,s){try{var u=e[c](s),o=u.value}catch(i){return void r(i)}u.done?n(o):Promise.resolve(o).then(t,a)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function s(e){o(c,t,a,s,u,"next",e)}function u(e){o(c,t,a,s,u,"throw",e)}s(void 0)}))}}var l=function(){var e=i(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/FontechOrder","/api/requestUsers"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=i(a().mark((function e(n){var r,t,c,s,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.name,t=n.email,c=n.type,e.next=3,fetch("".concat("/FontechOrder","/api/requestNewUser?name=").concat(r,"&email=").concat(t,"&type=").concat(c));case 3:return s=e.sent,e.next=6,s.json();case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=i(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/FontechOrder","/api/database/createUserTable"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=i(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/FontechOrder","/api/database/dropUserTable"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function v(e,n,r,t,a,c,s){try{var u=e[c](s),o=u.value}catch(i){return void r(i)}u.done?n(o):Promise.resolve(o).then(t,a)}function d(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function s(e){v(c,t,a,s,u,"next",e)}function u(e){v(c,t,a,s,u,"throw",e)}s(void 0)}))}}function x(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var m=function(e){console.log(e),window.alert(e)},w=function(){return(0,c.jsx)(s.Z,{children:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)(u.Z,{onClick:d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:m("createUserTable success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),m(x(e.t0,Error)?e.t0.message:"asyncRequestUsers fail.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"create User Table"}),(0,c.jsx)(u.Z,{onClick:d(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:m("dropUserTable success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),m(x(e.t0,Error)?e.t0.message:"dropUserTable fail.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"drop User Table"}),(0,c.jsx)(u.Z,{onClick:d(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:n=e.sent,r=n.data.users,m(JSON.stringify(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(x(e.t0,Error)?e.t0.message:"requestUsers fail.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),children:"show Users"}),(0,c.jsx)("div",{className:"flex flex-col bg-green-400 p-4",children:(0,c.jsxs)("form",{onSubmit:function(){var e=d(a().mark((function e(n){var r,t,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,r=n.target,t=r.name.value,c=r.email.value,s=r.type.value,![t,c,s].some((function(e){return!e}))){e.next=8;break}throw new Error("invalid user info.");case 8:return e.next=10,p({name:t,email:c,type:s});case 10:m("requestNewUser success"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),m("asyncRequestUsers fail.");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),children:[(0,c.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,c.jsx)("input",{type:"text",id:"name",name:"name"}),(0,c.jsx)("label",{htmlFor:"email",children:"email:"}),(0,c.jsx)("input",{type:"text",id:"email",name:"email"}),(0,c.jsx)("label",{htmlFor:"type",children:"type:"}),(0,c.jsx)("input",{type:"text",id:"type",name:"type"}),(0,c.jsx)(u.Z,{type:"submit",children:"Submit"})]})})]})})}}},function(e){e.O(0,[890,580,774,888,179],(function(){return n=348,e(e.s=n);var n}));var n=e.O();_N_E=n}]);