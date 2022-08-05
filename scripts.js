// window.getGliaContext = function() {
//   // const queryString = window.location.search;
//   // const urlParams = new URLSearchParams(queryString);
//   // const externalSessionId = urlParams.get('external_session_id');
//   const externalSessionId = 'my-unique-token-123'
//   return {
//     sessionId: externalSessionId
//   };
// };

// test change

// Promise (yaku) polyfill
// Needs to be loaded immediately to support promise based API
// !function(){if(!window||!window.Promise){var n=function(){"use strict";function n(n){var t,e;e=this,x&&(e[u]=y()),n!==r&&(t=g(n)(d(e,c),d(e,i),e),t===l&&F(e,i,t.e))}var t,e,r,o,u,i,c,f,a,l,s,_,p,v,d,h,y,g,w,k,m,j,x,R,C,T,b,E,F,U,A,P;return e=void 0,T="object"==typeof global?global:window,n.prototype.then=function(n,t){return s(this,C(),n,t)},n.prototype["catch"]=function(n){return this.then(e,n)},n.resolve=function(t){return t instanceof n?t:U(C(),t)},n.reject=function(n){return F(C(),i,n)},n.race=function(t){var e,r,u;if(_(t),r=t.length,0===r)return n.resolve([]);for(u=C(),e=0;r>e&&(U(u,t[e++]),u._state===o););return u},n.all=function(t){var e,r,o,u,f,a,l,s;if(_(t),e=n.resolve,f=r=t.length,0===f)return e([]);for(l=C(),s=[],o=0,a=function(n){F(l,i,n)},u=function(n){e(t[n]).then(function(t){s[n]=t,--r||F(l,c,s)},a)};f>o;)u(o++);return l},n.onUnhandledRejection=function(n,t){var e;T.console&&(e=h(n,t),console.error("Unhandled Rejection:",e[0],e[1]))},x=!1,n.enableLongStackTrace=function(){x=!0},n.nextTick=T.process?T.process.nextTick:function(n){return setTimeout(n)},a=null,l={e:null},r={},R=function(n){return"object"==typeof n},j=function(n){return"function"==typeof n},P=function(){var n;try{return a.apply(this,arguments)}catch(t){return n=t,l.e=n,l}},g=function(n){return a=n,P},v=function(t,r){var o,u,i;return u=Array(t),i=0,o=function(){var n;for(n=0;i>n;)r(u[n]),u[n++]=e;i=0,u.length>t&&(u.length=t)},function(t){u[i++]=t,1===i&&n.nextTick(o)}},_=function(n){if(!(n instanceof Array))throw w("invalid_argument")},w=function(n){return new TypeError(n)},y=function(n){return(new Error).stack.replace("Error",n?"":t)},i=0,c=1,o=2,u="_pt",f="_st",t="From previous event:",n.prototype._state=o,n.prototype._pCount=0,n.prototype._pre=null,C=function(){return new n(r)},d=function(n,t){return function(e){x&&(n[f]=y(!0)),t===c?U(n,e):F(n,t,e)}},s=function(n,t,e,r){return j(e)&&(t._onFulfilled=e),j(r)&&(t._onRejected=r),x&&(t._pre=n),n[n._pCount++]=t,n._state!==o&&n._pCount>0&&b(n),t},b=v(999,function(n){var t,r,u,c,f;for(r=0,u=n._pCount;u>r;)c=n[r++],c._state===o&&(t=n._state?c._onFulfilled:c._onRejected,t!==e?(f=g(p)(t,n._value),f!==l?U(c,f):F(c,i,f.e)):F(c,n._state,n._value))}),m=function(n){var t,e,r;if(n._umark)return!0;for(n._umark=!0,e=0,r=n._pCount;r>e;){if(t=n[e++],t._onRejected)return!0;if(m(t))return!0}},E=v(9,v(9,function(t){m(t)||n.onUnhandledRejection(t._value,t)})),h=function(n,e){var r,o,i,c,a,l;return c=[],l=function(n){return n.replace(/^\s+|\s+$/g,"")},x&&e[u]&&(i=function(n){return c.push(l(n))},e[f]&&i(e[f]),(o=function(n){return n?(o(n._next),i(n[u]),o(n._pre)):void 0})(e)),a="\n"+c.join("\n"),r=function(n,e){var r;return e&&(r=n.indexOf("\n"+t))>0&&(n=n.slice(0,r)),"string"==typeof __filename?n.replace(RegExp(".+"+__filename+".+\\n?","g"),""):void 0},[n&&n.stack?r(l(n.stack),!0):n,r(a)]},p=function(n,t){return n(t)},F=function(n,t,e){var r;if(n._state===o)return n._state=t,n._value=e,t===i&&(x&&e&&e.stack&&(r=h(e,n),e.stack=r[0]+r[1]),E(n)),n._pCount>0&&b(n),n},U=function(t,e){var r;if(e===t&&e)return void F(t,i,w("promise_circular_chain"));if(null!==e&&(j(e)||R(e))){if(r=g(k)(e),r===l)return void F(t,i,r.e);j(r)?(x&&e instanceof n&&(t._next=e),A(t,e,r)):F(t,c,e)}else F(t,c,e);return t},k=function(n){return n.then},A=function(n,t,e){var r;r=g(e).call(t,function(e){t&&(t=null,U(n,e))},function(e){t&&(t=null,F(n,i,e))}),r===l&&t&&(F(n,i,r.e),t=null)},n}();window.Promise=n}}();

// window.getGliaContext = function() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve({sessionId: 'some-token-async'})
//     }, 3000);
//   })
// }

// if (window.location.href.includes('netlify')) {
//   document.querySelector('body').style.background = 'black'
// }