(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{5333:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurant/[id]",function(){return r(9891)}])},5572:function(e,t,r){"use strict";var n=r(4051),a=r.n(n),i=r(7294),o=r(7633),u=r(4193),l=r(963),s=r(1912);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,a,i,o){try{var u=e[i](o),l=u.value}catch(s){return void r(s)}u.done?t(l):Promise.resolve(l).then(n,a)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.documentReference,r=e.path,n=e.pathSegments,c=void 0===n?s.uT:n,m=(0,u.Z)(),h=m.isLoadingHandler,p=m.isLoading,v=m.error,x=m.setError;i.useState(!1);var y=f(i.useState(void 0),2),b=y[0],g=y[1],w=i.useMemo((function(){return(0,s.wA)(b)}),[b]),j=i.useCallback((function(e){(function(){var n,i=(n=a().mark((function n(){var i,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(void 0),g(void 0),n.prev=2,n.next=5,(0,o.Z)({documentReference:t,path:r,pathSegments:c});case 5:i=n.sent,g(i),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),a=n.t0,l=Error,u=(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?n.t0:new Error("getDocuments Error"),x(u);case 13:e();case 14:case"end":return n.stop()}var a,l}),n,null,[[2,9]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(e){d(i,r,a,o,u,"next",e)}function u(e){d(i,r,a,o,u,"throw",e)}o(void 0)}))});return function(){return i.apply(this,arguments)}})()()}),[t,r,c,x]),S=i.useCallback((function(){h(j)}),[h,j]);return{isInit:(0,l.Z)(S).isInit,isLoading:p,isLoadingHandler:h,error:v,getDocument:S,document:b,data:w}}},9891:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(5893),a=r(7294),i=r(1163),o=r(8580),u=r(5572),l=r(1912),s=r(5908),c=r(8231),d=r(4896);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=e.restaurantDoc,r=a.useMemo((function(){return t.ref}),[t]),i=(0,c.Z)({documentReference:r,path:"menuItems"}),o=i.isInit,u=i.dataExistsDocuments,f=m(a.useState(""),2),h=f[0],p=f[1],v=(0,d.Z)(),x=v.currentPage,y=v.setCurrentPage,b=v.totalCount,g=v.setTotalCount,w=v.maxCurrentPage,j=v.disabledPrev,S=v.disabledNext,P=v.prevPaginationButtonPress,N=v.nextPaginationButtonPress;if(a.useEffect((function(){g(u.length)}),[u,g]),o)return(0,n.jsx)("div",{children:"menu is loading..."});return(0,n.jsxs)("div",{className:"-mx-2 flex flex-col py-4",children:[(0,n.jsx)("div",{className:"text-gray",children:"Restaurant Menu List"}),(0,n.jsx)("div",{className:"relative flex flex-col",children:u.map((function(e,t){return(0,n.jsx)("div",{className:"text-gray flex w-full flex-row flex-wrap py-1 lg:w-1/4",children:(0,n.jsx)("div",{className:"flex flex-row",children:["name","cost"].map((function(t,r){var a;return(0,n.jsx)("div",{className:"flex flex-row",children:(0,n.jsx)("div",{className:"pr-2",children:null===(a=(0,l.wA)(e))||void 0===a?void 0:a[t]})},"menu-item-field-"+r)}))})},"menu-item-"+t)}))}),b?(0,n.jsx)(s.Z,{currentPage:x,paginationText:h,updatePaginationText:function(e){p(e)},updateCurrentPage:function(e){y(e)},maxCurrentPage:w,disabledPrev:j,prevPaginationButtonPress:P,disabledNext:S,nextPaginationButtonPress:N}):null]})},p=r(8826),v=r(4051),x=r.n(v),y=r(4184),b=r.n(y),g=r(4231),w=r(2175),j=r(9726),S=r(9151),P=r(1242),N=r(4832),I=r(8973);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t,r,n,a,i,o){try{var u=e[i](o),l=u.value}catch(s){return void r(s)}u.done?t(l):Promise.resolve(l).then(n,a)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){E(e,t,r[t])}))}return e}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k,_=[{id:N.I1.name,label:"\u540d\u7a31*",type:"text",placeholder:"\u540d\u7a31 (string)"},{id:N.I1.cost,label:"\u50f9\u683c*",type:"number",placeholder:"10~200 (number)"},{id:N.I1.type,label:"\u985e\u5225*",type:"text",placeholder:"\u985e\u5225 (string)"}],T=(E(k={},N.I1.name,""),E(k,N.I1.cost,0),E(k,N.I1.hidden,"false"),E(k,N.I1.type,""),k),D=g.Ry().shape({name:g.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b"),cost:g.Rx().integer("\u8acb\u8f38\u5165\u6574\u6578").min(10,"\u81f3\u5c1110\u5143").max(130,"\u4e0d\u53ef\u8d85\u904e130\u5143").required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b"),hidden:g.O7(),type:g.Z_().required("\u672c\u6b04\u4f4d\u70ba\u5fc5\u586b")}),R=function(e){var t=e.className,r=e.restaurantDoc,i=e.resultSuccessCallback,o=Z(a.useState(!1),2),u=o[0],l=o[1],s=Z(a.useState(""),1)[0],c=Z(a.useState(void 0),2),d=c[0],f=c[1],m=(0,w.TA)({initialValues:T,validationSchema:D,enableReinitialize:!0,onSubmit:function(){var e,t=(e=x().mark((function e(t){var n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=2;break}return e.abrupt("return");case 2:return l(!0),n=O({},t,{hidden:"true"===t.hidden}),e.prev=4,e.next=7,(0,I.Z)({documentReference:r.ref,path:"menuItems/"+t.name,data:n});case 7:f("success"),m.resetForm(),null===i||void 0===i||i(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),f("failed");case 15:l(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){C(i,n,a,o,u,"next",e)}function u(e){C(i,n,a,o,u,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()});return(0,j.Z)().isCanWriteFireStoreEmailUser?d?(0,n.jsxs)("div",{onClick:function(){return f(void 0)},children:["result: ",d]}):(0,n.jsx)("div",{className:b()(t),children:(0,n.jsxs)("form",{className:"mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md",onSubmit:m.handleSubmit,children:[(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"flex-1 md:pr-3",children:_.map((function(e){return(0,n.jsx)(S.Z,{inputProps:{id:e.id,name:e.id,placeholder:e.placeholder,type:e.type,onChange:m.handleChange,value:m.values[e.id]},label:e.label,showError:!(!m.touched[e.id]||!m.errors[e.id]),errorString:m.errors[e.id]},"new-restaurant-menu-input-".concat(e.id))}))})}),s&&(0,n.jsx)("p",{children:s}),(0,n.jsx)(P.Z,{disabled:u,type:"submit",children:"\u78ba\u8a8d\u9001\u51fa"})]})}):null},M=function(e){var t=e.id,r=a.useMemo((function(){return[(0,l.W$)(t)]}),[t]),i=(0,u.Z)({path:"restaurants",pathSegments:r}),o=i.isInit,s=i.isLoading,c=i.getDocument,d=i.document,f=i.data;if(o||s)return(0,n.jsx)("div",{children:"restaurant list loading..."});if(!d||!f)return(0,n.jsx)("div",{children:"restaurant not found"});var m=f["image-url"];return(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center",children:[(0,n.jsxs)("div",{className:"lg:mr-8",children:[(0,n.jsxs)("div",{className:"flex flex-row text-white",children:[d.id,f.hidden?"X":"Y"]}),(0,n.jsx)("div",{className:"h-[210px] w-[150px]",children:m&&(0,n.jsx)(p.Z,{objectFit:"contain",src:m,alt:"restaurant-image",width:500,height:700})})]}),(0,n.jsx)(R,{className:"flex-1",restaurantDoc:d,resultSuccessCallback:c})]}),(0,n.jsx)(h,{restaurantDoc:d})]})},L=r(576),F=function(e){var t=e.id,r=a.useMemo((function(){return(0,l.W$)(t)}),[t]);return(0,j.Z)().isCanWriteFireStoreEmailUser&&r?(0,n.jsx)(L.Z,{className:"flex justify-end",title:"\u65b0\u589e\u83dc\u55ae\u9805\u76ee",linkProps:{href:"/restaurant/[id]/create?id=".concat(r),as:"".concat("/FontechOrder","/restaurant/").concat(r,"/create")}}):null},U=function(){var e=(0,i.useRouter)().query.id;return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(F,{id:e}),(0,n.jsx)(M,{id:e})]})}},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[890,177,580,694,774,888,179],(function(){return t=5333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);