(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{348:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/table",function(){return r(4384)}])},4384:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var t=r(4051),a=r.n(t),s=r(5893),c=(r(7294),r(8580)),u=r(1242);function i(e,n,r,t,a,s,c){try{var u=e[s](c),i=u.value}catch(o){return void r(o)}u.done?n(i):Promise.resolve(i).then(t,a)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function c(e){i(s,t,a,c,u,"next",e)}function u(e){i(s,t,a,c,u,"throw",e)}c(void 0)}))}}var l=function(){var e=o(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/requestUsers");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=o(a().mark((function e(n){var r,t,s,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.name,t=n.email,s=n.type,e.next=3,fetch("/api/requestNewUser?name=".concat(r,"&email=").concat(t,"&type=").concat(s));case 3:return c=e.sent,e.next=6,c.json();case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=o(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/database/createUserTable");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=o(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/database/dropUserTable");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function h(e,n,r,t,a,s,c){try{var u=e[s](c),i=u.value}catch(o){return void r(o)}u.done?n(i):Promise.resolve(i).then(t,a)}function x(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function c(e){h(s,t,a,c,u,"next",e)}function u(e){h(s,t,a,c,u,"throw",e)}c(void 0)}))}}function m(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var d=function(e){console.log(e),window.alert(e)},w=function(){return(0,s.jsx)(c.Z,{children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(u.Z,{onClick:x(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:d("createUserTable success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),d(m(e.t0,Error)?e.t0.message:"asyncRequestUsers fail.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"create User Table"}),(0,s.jsx)(u.Z,{onClick:x(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:d("dropUserTable success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),d(m(e.t0,Error)?e.t0.message:"dropUserTable fail.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"drop User Table"}),(0,s.jsx)(u.Z,{onClick:x(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:n=e.sent,r=n.data.users,d(JSON.stringify(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(m(e.t0,Error)?e.t0.message:"requestUsers fail.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),children:"show Users"}),(0,s.jsx)("div",{className:"flex flex-col bg-green-400 p-4",children:(0,s.jsxs)("form",{onSubmit:function(){var e=x(a().mark((function e(n){var r,t,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,r=n.target,t=r.name.value,s=r.email.value,c=r.type.value,![t,s,c].some((function(e){return!e}))){e.next=8;break}throw new Error("invalid user info.");case 8:return e.next=10,p({name:t,email:s,type:c});case 10:d("requestNewUser success"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),d("asyncRequestUsers fail.");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}(),children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name"}),(0,s.jsx)("label",{htmlFor:"email",children:"email:"}),(0,s.jsx)("input",{type:"text",id:"email",name:"email"}),(0,s.jsx)("label",{htmlFor:"type",children:"type:"}),(0,s.jsx)("input",{type:"text",id:"type",name:"type"}),(0,s.jsx)(u.Z,{type:"submit",children:"Submit"})]})})]})})}}},function(e){e.O(0,[890,580,774,888,179],(function(){return n=348,e(e.s=n);var n}));var n=e.O();_N_E=n}]);