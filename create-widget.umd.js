(function(r,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react")):typeof define=="function"&&define.amd?define(["react"],n):(r=typeof globalThis<"u"?globalThis:r||self,r.MyWidget=n(r.React))})(this,function(r){"use strict";var n={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function R(){if(h)return i;h=1;var c=r,l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(d,e,_){var t,f={},a=null,y=null;_!==void 0&&(a=""+_),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(y=e.ref);for(t in e)u.call(e,t)&&!v.hasOwnProperty(t)&&(f[t]=e[t]);if(d&&d.defaultProps)for(t in e=d.defaultProps,e)f[t]===void 0&&(f[t]=e[t]);return{$$typeof:l,type:d,key:a,ref:y,props:f,_owner:p.current}}return i.Fragment=o,i.jsx=x,i.jsxs=x,i}var m;function j(){return m||(m=1,n.exports=R()),n.exports}var s=j();return()=>{const[c,l]=r.useState([]);return r.useEffect(()=>{(async()=>{try{const p=await(await fetch("https://jsonplaceholder.typicode.com/todos")).json();l(p)}catch(u){console.error("Error fetching todos:",u)}})()},[]),s.jsxs("div",{children:[s.jsx("h2",{children:"My React Widget"}),s.jsx("p",{children:"Todos from JSONPlaceholder:"}),s.jsx("ul",{children:c.length===0?s.jsx("li",{children:"Loading..."}):c.slice(0,10).map(o=>s.jsxs("li",{style:{textDecoration:o.completed?"line-through":"none"},children:[o.title," ",o.completed?"✅":""]},o.id))})]})}});
