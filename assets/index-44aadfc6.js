function Gm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var e0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ee={},t0={get exports(){return ee},set exports(e){ee=e}},Ya={},Q={},n0={get exports(){return Q},set exports(e){Q=e}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),r0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),Rd=Symbol.iterator;function f0(e){return e===null||typeof e!="object"?null:(e=Rd&&e[Rd]||e["@@iterator"],typeof e=="function"?e:null)}var Ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,vp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||Ap}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bp(){}bp.prototype=Jr.prototype;function lu(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||Ap}var su=lu.prototype=new bp;su.constructor=lu;gp(su,Jr.prototype);su.isPureReactComponent=!0;var Pd=Array.isArray,wp=Object.prototype.hasOwnProperty,uu={current:null},Ep={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)wp.call(t,r)&&!Ep.hasOwnProperty(r)&&(o[r]=t[r]);var p=arguments.length-2;if(p===1)o.children=n;else if(1<p){for(var h=Array(p),A=0;A<p;A++)h[A]=arguments[A+2];o.children=h}if(e&&e.defaultProps)for(r in p=e.defaultProps,p)o[r]===void 0&&(o[r]=p[r]);return{$$typeof:vi,type:e,key:i,ref:s,props:o,_owner:uu.current}}function h0(e,t){return{$$typeof:vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function du(e){return typeof e=="object"&&e!==null&&e.$$typeof===vi}function y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y0(""+e.key):t.toString(36)}function oa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vi:case r0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Cl(s,0):r,Pd(o)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),oa(o,t,n,"",function(A){return A})):o!=null&&(du(o)&&(o=h0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(zd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Pd(e))for(var p=0;p<e.length;p++){i=e[p];var h=r+Cl(i,p);s+=oa(i,t,n,h,o)}else if(h=f0(e),typeof h=="function")for(e=h.call(e),p=0;!(i=e.next()).done;)i=i.value,h=r+Cl(i,p++),s+=oa(i,t,n,h,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ji(e,t,n){if(e==null)return e;var r=[],o=0;return oa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function m0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},ia={transition:null},A0={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:ia,ReactCurrentOwner:uu};le.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Jr;le.Fragment=o0;le.Profiler=a0;le.PureComponent=lu;le.StrictMode=i0;le.Suspense=d0;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gp({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=uu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(h in t)wp.call(t,h)&&!Ep.hasOwnProperty(h)&&(r[h]=t[h]===void 0&&p!==void 0?p[h]:t[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){p=Array(h);for(var A=0;A<h;A++)p[A]=arguments[A+2];r.children=p}return{$$typeof:vi,type:e.type,key:o,ref:i,props:r,_owner:s}};le.createContext=function(e){return e={$$typeof:s0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};le.createElement=xp;le.createFactory=function(e){var t=xp.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:u0,render:e}};le.isValidElement=du;le.lazy=function(e){return{$$typeof:p0,_payload:{_status:-1,_result:e},_init:m0}};le.memo=function(e,t){return{$$typeof:c0,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=ia.transition;ia.transition={};try{e()}finally{ia.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return rt.current.useCallback(e,t)};le.useContext=function(e){return rt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};le.useEffect=function(e,t){return rt.current.useEffect(e,t)};le.useId=function(){return rt.current.useId()};le.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return rt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};le.useRef=function(e){return rt.current.useRef(e)};le.useState=function(e){return rt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return rt.current.useTransition()};le.version="18.2.0";(function(e){e.exports=le})(n0);const kp=mp(Q),es=Gm({__proto__:null,default:kp},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=Q,v0=Symbol.for("react.element"),b0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,E0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x0={key:!0,ref:!0,__self:!0,__source:!0};function Cp(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)w0.call(t,r)&&!x0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:v0,type:e,key:i,ref:s,props:o,_owner:E0.current}}Ya.Fragment=b0;Ya.jsx=Cp;Ya.jsxs=Cp;(function(e){e.exports=Ya})(t0);var ts={},ns={},k0={get exports(){return ns},set exports(e){ns=e}},vt={},rs={},C0={get exports(){return rs},set exports(e){rs=e}},Sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(K,D){var re=K.length;K.push(D);e:for(;0<re;){var fe=re-1>>>1,ve=K[fe];if(0<o(ve,D))K[fe]=D,K[re]=ve,re=fe;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var D=K[0],re=K.pop();if(re!==D){K[0]=re;e:for(var fe=0,ve=K.length,Ve=ve>>>1;fe<Ve;){var dt=2*(fe+1)-1,Xt=K[dt],Ie=dt+1,Lt=K[Ie];if(0>o(Xt,re))Ie<ve&&0>o(Lt,Xt)?(K[fe]=Lt,K[Ie]=re,fe=Ie):(K[fe]=Xt,K[dt]=re,fe=dt);else if(Ie<ve&&0>o(Lt,re))K[fe]=Lt,K[Ie]=re,fe=Ie;else break e}}return D}function o(K,D){var re=K.sortIndex-D.sortIndex;return re!==0?re:K.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,p=s.now();e.unstable_now=function(){return s.now()-p}}var h=[],A=[],k=1,E=null,y=3,L=!1,B=!1,g=!1,T=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(K){for(var D=n(A);D!==null;){if(D.callback===null)r(A);else if(D.startTime<=K)r(A),D.sortIndex=D.expirationTime,t(h,D);else break;D=n(A)}}function I(K){if(g=!1,C(K),!B)if(n(h)!==null)B=!0,fn(z);else{var D=n(A);D!==null&&Un(I,D.startTime-K)}}function z(K,D){B=!1,g&&(g=!1,x(X),X=-1),L=!0;var re=y;try{for(C(D),E=n(h);E!==null&&(!(E.expirationTime>D)||K&&!Re());){var fe=E.callback;if(typeof fe=="function"){E.callback=null,y=E.priorityLevel;var ve=fe(E.expirationTime<=D);D=e.unstable_now(),typeof ve=="function"?E.callback=ve:E===n(h)&&r(h),C(D)}else r(h);E=n(h)}if(E!==null)var Ve=!0;else{var dt=n(A);dt!==null&&Un(I,dt.startTime-D),Ve=!1}return Ve}finally{E=null,y=re,L=!1}}var F=!1,M=null,X=-1,pe=5,V=-1;function Re(){return!(e.unstable_now()-V<pe)}function Ke(){if(M!==null){var K=e.unstable_now();V=K;var D=!0;try{D=M(!0,K)}finally{D?Pe():(F=!1,M=null)}}else F=!1}var Pe;if(typeof b=="function")Pe=function(){b(Ke)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Fn=et.port2;et.port1.onmessage=Ke,Pe=function(){Fn.postMessage(null)}}else Pe=function(){T(Ke,0)};function fn(K){M=K,F||(F=!0,Pe())}function Un(K,D){X=T(function(){K(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){B||L||(B=!0,fn(z))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(K){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var re=y;y=D;try{return K()}finally{y=re}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,D){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var re=y;y=K;try{return D()}finally{y=re}},e.unstable_scheduleCallback=function(K,D,re){var fe=e.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?fe+re:fe):re=fe,K){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=re+ve,K={id:k++,callback:D,priorityLevel:K,startTime:re,expirationTime:ve,sortIndex:-1},re>fe?(K.sortIndex=re,t(A,K),n(h)===null&&K===n(A)&&(g?(x(X),X=-1):g=!0,Un(I,re-fe))):(K.sortIndex=ve,t(h,K),B||L||(B=!0,fn(z))),K},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(K){var D=y;return function(){var re=y;y=D;try{return K.apply(this,arguments)}finally{y=re}}}})(Sp);(function(e){e.exports=Sp})(C0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=Q,gt=rs;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lp=new Set,ti={};function ur(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(ti[e]=t,e=0;e<t.length;e++)Lp.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},Dd={};function B0(e){return os.call(Dd,e)?!0:os.call(Od,e)?!1:S0.test(e)?Dd[e]=!0:(Od[e]=!0,!1)}function L0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I0(e,t,n,r){if(t===null||typeof t>"u"||L0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var cu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cu,pu);Qe[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cu,pu);Qe[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cu,pu);Qe[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function fu(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I0(t,n,o,r)&&(n=null),r||o===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Er=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),_p=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function Io(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Sl;function Fo(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var Bl=!1;function Ll(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var r=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){r=A}e.call(t.prototype)}else{try{throw Error()}catch(A){r=A}e()}}catch(A){if(A&&r&&typeof A.stack=="string"){for(var o=A.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,p=i.length-1;1<=s&&0<=p&&o[s]!==i[p];)p--;for(;1<=s&&0<=p;s--,p--)if(o[s]!==i[p]){if(s!==1||p!==1)do if(s--,p--,0>p||o[s]!==i[p]){var h=`
`+o[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=s&&0<=p);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fo(e):""}function _0(e){switch(e.tag){case 5:return Fo(e.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case Er:return"Portal";case is:return"Profiler";case hu:return"StrictMode";case as:return"Suspense";case ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _p:return(e.displayName||"Context")+".Consumer";case Ip:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mu:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function T0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e){var t=Rp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=R0(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Md(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zp(e,t){t=t.checked,t!=null&&fu(e,"checked",t,!1)}function ds(e,t){zp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&cs(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cs(e,t,n){(t!=="number"||ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Uo=Array.isArray;function Dr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Uo(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Op(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function Mp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var z0=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Nr=null,Mr=null;function qd(e){if(e=Ei(e)){if(typeof As!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Xa(t),As(e.stateNode,e.type,t))}}function Fp(e){Nr?Mr?Mr.push(e):Mr=[e]:Nr=e}function Up(){if(Nr){var e=Nr,t=Mr;if(Mr=Nr=null,qd(e),t)for(e=0;e<t.length;e++)qd(t[e])}}function qp(e,t){return e(t)}function Wp(){}var Il=!1;function Hp(e,t,n){if(Il)return e(t,n);Il=!0;try{return qp(e,t,n)}finally{Il=!1,(Nr!==null||Mr!==null)&&(Wp(),Up())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var gs=!1;if(ln)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){gs=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{gs=!1}function O0(e,t,n,r,o,i,s,p,h){var A=Array.prototype.slice.call(arguments,3);try{t.apply(n,A)}catch(k){this.onError(k)}}var Qo=!1,wa=null,Ea=!1,vs=null,D0={onError:function(e){Qo=!0,wa=e}};function N0(e,t,n,r,o,i,s,p,h){Qo=!1,wa=null,O0.apply(D0,arguments)}function M0(e,t,n,r,o,i,s,p,h){if(N0.apply(this,arguments),Qo){if(Qo){var A=wa;Qo=!1,wa=null}else throw Error(j(198));Ea||(Ea=!0,vs=A)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wd(e){if(dr(e)!==e)throw Error(j(188))}function j0(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Wd(o),e;if(i===r)return Wd(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,p=o.child;p;){if(p===n){s=!0,n=o,r=i;break}if(p===r){s=!0,r=o,n=i;break}p=p.sibling}if(!s){for(p=i.child;p;){if(p===n){s=!0,n=i,r=o;break}if(p===r){s=!0,r=i,n=o;break}p=p.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Qp(e){return e=j0(e),e!==null?Kp(e):null}function Kp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kp(e);if(t!==null)return t;e=e.sibling}return null}var Vp=gt.unstable_scheduleCallback,Hd=gt.unstable_cancelCallback,F0=gt.unstable_shouldYield,U0=gt.unstable_requestPaint,Le=gt.unstable_now,q0=gt.unstable_getCurrentPriorityLevel,gu=gt.unstable_ImmediatePriority,$p=gt.unstable_UserBlockingPriority,xa=gt.unstable_NormalPriority,W0=gt.unstable_LowPriority,Xp=gt.unstable_IdlePriority,Qa=null,Kt=null;function H0(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:K0,Y0=Math.log,Q0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(Y0(e)/Q0|0)|0}var Wi=64,Hi=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var p=s&~o;p!==0?r=qo(p):(i&=s,i!==0&&(r=qo(i)))}else s=n&~o,s!==0?r=qo(s):i!==0&&(r=qo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),o=1<<n,r|=e[n],t&=~o;return r}function V0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Nt(i),p=1<<s,h=o[s];h===-1?(!(p&n)||p&r)&&(o[s]=V0(p,t)):h<=t&&(e.expiredLanes|=p),i&=~p}}function bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zp(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function X0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var he=0;function Jp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gp,bu,ef,tf,nf,ws=!1,Yi=[],Sn=null,Bn=null,Ln=null,oi=new Map,ii=new Map,En=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function To(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ei(t),t!==null&&bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function J0(e,t,n,r,o){switch(t){case"focusin":return Sn=To(Sn,e,t,n,r,o),!0;case"dragenter":return Bn=To(Bn,e,t,n,r,o),!0;case"mouseover":return Ln=To(Ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oi.set(i,To(oi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ii.set(i,To(ii.get(i)||null,e,t,n,r,o)),!0}return!1}function rf(e){var t=Zn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=Yp(n),t!==null){e.blockedOn=t,nf(e.priority,function(){ef(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ms=r,n.target.dispatchEvent(r),ms=null}else return t=Ei(n),t!==null&&bu(t),e.blockedOn=n,!1;t.shift()}return!0}function Qd(e,t,n){aa(e)&&n.delete(t)}function G0(){ws=!1,Sn!==null&&aa(Sn)&&(Sn=null),Bn!==null&&aa(Bn)&&(Bn=null),Ln!==null&&aa(Ln)&&(Ln=null),oi.forEach(Qd),ii.forEach(Qd)}function Ro(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,G0)))}function ai(e){function t(o){return Ro(o,e)}if(0<Yi.length){Ro(Yi[0],e);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Ro(Sn,e),Bn!==null&&Ro(Bn,e),Ln!==null&&Ro(Ln,e),oi.forEach(t),ii.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&En.shift()}var jr=cn.ReactCurrentBatchConfig,Ca=!0;function eA(e,t,n,r){var o=he,i=jr.transition;jr.transition=null;try{he=1,wu(e,t,n,r)}finally{he=o,jr.transition=i}}function tA(e,t,n,r){var o=he,i=jr.transition;jr.transition=null;try{he=4,wu(e,t,n,r)}finally{he=o,jr.transition=i}}function wu(e,t,n,r){if(Ca){var o=Es(e,t,n,r);if(o===null)Fl(e,t,r,Sa,n),Yd(e,r);else if(J0(o,e,t,n,r))r.stopPropagation();else if(Yd(e,r),t&4&&-1<Z0.indexOf(e)){for(;o!==null;){var i=Ei(o);if(i!==null&&Gp(i),i=Es(e,t,n,r),i===null&&Fl(e,t,r,Sa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var Sa=null;function Es(e,t,n,r){if(Sa=null,e=Au(r),e=Zn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sa=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case gu:return 1;case $p:return 4;case xa:case W0:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var kn=null,Eu=null,la=null;function af(){if(la)return la;var e,t=Eu,n=t.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return la=o.slice(e,1<r?1-r:void 0)}function sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function Kd(){return!1}function bt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qi:Kd,this.isPropagationStopped=Kd,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=bt(Gr),wi=ke({},Gr,{view:0,detail:0}),nA=bt(wi),Tl,Rl,Po,Ka=ke({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Tl=e.screenX-Po.screenX,Rl=e.screenY-Po.screenY):Rl=Tl=0,Po=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Vd=bt(Ka),rA=ke({},Ka,{dataTransfer:0}),oA=bt(rA),iA=ke({},wi,{relatedTarget:0}),Pl=bt(iA),aA=ke({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),lA=bt(aA),sA=ke({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uA=bt(sA),dA=ke({},Gr,{data:0}),$d=bt(dA),cA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fA[e])?!!t[e]:!1}function ku(){return hA}var yA=ke({},wi,{key:function(e){if(e.key){var t=cA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mA=bt(yA),AA=ke({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=bt(AA),gA=ke({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),vA=bt(gA),bA=ke({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wA=bt(bA),EA=ke({},Ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xA=bt(EA),kA=[9,13,27,32],Cu=ln&&"CompositionEvent"in window,Ko=null;ln&&"documentMode"in document&&(Ko=document.documentMode);var CA=ln&&"TextEvent"in window&&!Ko,lf=ln&&(!Cu||Ko&&8<Ko&&11>=Ko),Zd=String.fromCharCode(32),Jd=!1;function sf(e,t){switch(e){case"keyup":return kA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function SA(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(Jd=!0,Zd);case"textInput":return e=t.data,e===Zd&&Jd?null:e;default:return null}}function BA(e,t){if(kr)return e==="compositionend"||!Cu&&sf(e,t)?(e=af(),la=Eu=kn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var LA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!LA[e.type]:t==="textarea"}function df(e,t,n,r){Fp(r),t=Ba(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,li=null;function IA(e){wf(e,0)}function Va(e){var t=Br(e);if(Pp(t))return e}function _A(e,t){if(e==="change")return t}var cf=!1;if(ln){var zl;if(ln){var Ol="oninput"in document;if(!Ol){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Ol=typeof ec.oninput=="function"}zl=Ol}else zl=!1;cf=zl&&(!document.documentMode||9<document.documentMode)}function tc(){Vo&&(Vo.detachEvent("onpropertychange",pf),li=Vo=null)}function pf(e){if(e.propertyName==="value"&&Va(li)){var t=[];df(t,li,e,Au(e)),Hp(IA,t)}}function TA(e,t,n){e==="focusin"?(tc(),Vo=t,li=n,Vo.attachEvent("onpropertychange",pf)):e==="focusout"&&tc()}function RA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Va(li)}function PA(e,t){if(e==="click")return Va(t)}function zA(e,t){if(e==="input"||e==="change")return Va(t)}function OA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:OA;function si(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!os.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,t){var n=nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function DA(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&Su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=rc(n,i);var s=rc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var NA=ln&&"documentMode"in document&&11>=document.documentMode,Cr=null,xs=null,$o=null,ks=!1;function oc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ks||Cr==null||Cr!==ba(r)||(r=Cr,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&si($o,r)||($o=r,r=Ba(xs,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},Dl={},yf={};ln&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function $a(e){if(Dl[e])return Dl[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return Dl[e]=t[n];return e}var mf=$a("animationend"),Af=$a("animationiteration"),gf=$a("animationstart"),vf=$a("transitionend"),bf=new Map,ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){bf.set(e,t),ur(t,[e])}for(var Nl=0;Nl<ic.length;Nl++){var Ml=ic[Nl],MA=Ml.toLowerCase(),jA=Ml[0].toUpperCase()+Ml.slice(1);Nn(MA,"on"+jA)}Nn(mf,"onAnimationEnd");Nn(Af,"onAnimationIteration");Nn(gf,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(vf,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M0(r,t,void 0,e),e.currentTarget=null}function wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var p=r[s],h=p.instance,A=p.currentTarget;if(p=p.listener,h!==i&&o.isPropagationStopped())break e;ac(o,p,A),i=h}else for(s=0;s<r.length;s++){if(p=r[s],h=p.instance,A=p.currentTarget,p=p.listener,h!==i&&o.isPropagationStopped())break e;ac(o,p,A),i=h}}}if(Ea)throw e=vs,Ea=!1,vs=null,e}function Ae(e,t){var n=t[Is];n===void 0&&(n=t[Is]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Vi]){e[Vi]=!0,Lp.forEach(function(n){n!=="selectionchange"&&(FA.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,jl("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(of(t)){case 1:var o=eA;break;case 4:o=tA;break;default:o=wu}n=o.bind(null,t,n,e),o=void 0,!gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var p=r.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var h=s.tag;if((h===3||h===4)&&(h=s.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;s=s.return}for(;p!==null;){if(s=Zn(p),s===null)return;if(h=s.tag,h===5||h===6){r=i=s;continue e}p=p.parentNode}}r=r.return}Hp(function(){var A=i,k=Au(n),E=[];e:{var y=bf.get(e);if(y!==void 0){var L=xu,B=e;switch(e){case"keypress":if(sa(n)===0)break e;case"keydown":case"keyup":L=mA;break;case"focusin":B="focus",L=Pl;break;case"focusout":B="blur",L=Pl;break;case"beforeblur":case"afterblur":L=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=oA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=vA;break;case mf:case Af:case gf:L=lA;break;case vf:L=wA;break;case"scroll":L=nA;break;case"wheel":L=xA;break;case"copy":case"cut":case"paste":L=uA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Xd}var g=(t&4)!==0,T=!g&&e==="scroll",x=g?y!==null?y+"Capture":null:y;g=[];for(var b=A,C;b!==null;){C=b;var I=C.stateNode;if(C.tag===5&&I!==null&&(C=I,x!==null&&(I=ri(b,x),I!=null&&g.push(di(b,I,C)))),T)break;b=b.return}0<g.length&&(y=new L(y,B,null,n,k),E.push({event:y,listeners:g}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",y&&n!==ms&&(B=n.relatedTarget||n.fromElement)&&(Zn(B)||B[sn]))break e;if((L||y)&&(y=k.window===k?k:(y=k.ownerDocument)?y.defaultView||y.parentWindow:window,L?(B=n.relatedTarget||n.toElement,L=A,B=B?Zn(B):null,B!==null&&(T=dr(B),B!==T||B.tag!==5&&B.tag!==6)&&(B=null)):(L=null,B=A),L!==B)){if(g=Vd,I="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(g=Xd,I="onPointerLeave",x="onPointerEnter",b="pointer"),T=L==null?y:Br(L),C=B==null?y:Br(B),y=new g(I,b+"leave",L,n,k),y.target=T,y.relatedTarget=C,I=null,Zn(k)===A&&(g=new g(x,b+"enter",B,n,k),g.target=C,g.relatedTarget=T,I=g),T=I,L&&B)t:{for(g=L,x=B,b=0,C=g;C;C=br(C))b++;for(C=0,I=x;I;I=br(I))C++;for(;0<b-C;)g=br(g),b--;for(;0<C-b;)x=br(x),C--;for(;b--;){if(g===x||x!==null&&g===x.alternate)break t;g=br(g),x=br(x)}g=null}else g=null;L!==null&&lc(E,y,L,g,!1),B!==null&&T!==null&&lc(E,T,B,g,!0)}}e:{if(y=A?Br(A):window,L=y.nodeName&&y.nodeName.toLowerCase(),L==="select"||L==="input"&&y.type==="file")var z=_A;else if(Gd(y))if(cf)z=zA;else{z=RA;var F=TA}else(L=y.nodeName)&&L.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(z=PA);if(z&&(z=z(e,A))){df(E,z,n,k);break e}F&&F(e,y,A),e==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&cs(y,"number",y.value)}switch(F=A?Br(A):window,e){case"focusin":(Gd(F)||F.contentEditable==="true")&&(Cr=F,xs=A,$o=null);break;case"focusout":$o=xs=Cr=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,oc(E,n,k);break;case"selectionchange":if(NA)break;case"keydown":case"keyup":oc(E,n,k)}var M;if(Cu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else kr?sf(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(lf&&n.locale!=="ko"&&(kr||X!=="onCompositionStart"?X==="onCompositionEnd"&&kr&&(M=af()):(kn=k,Eu="value"in kn?kn.value:kn.textContent,kr=!0)),F=Ba(A,X),0<F.length&&(X=new $d(X,e,null,n,k),E.push({event:X,listeners:F}),M?X.data=M:(M=uf(n),M!==null&&(X.data=M)))),(M=CA?SA(e,n):BA(e,n))&&(A=Ba(A,"onBeforeInput"),0<A.length&&(k=new $d("onBeforeInput","beforeinput",null,n,k),E.push({event:k,listeners:A}),k.data=M))}wf(E,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ba(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ri(e,n),i!=null&&r.unshift(di(e,i,o)),i=ri(e,t),i!=null&&r.push(di(e,i,o))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var p=n,h=p.alternate,A=p.stateNode;if(h!==null&&h===r)break;p.tag===5&&A!==null&&(p=A,o?(h=ri(n,i),h!=null&&s.unshift(di(n,h,p))):o||(h=ri(n,i),h!=null&&s.push(di(n,h,p)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var UA=/\r\n?/g,qA=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(UA,`
`).replace(qA,"")}function $i(e,t,n){if(t=sc(t),sc(e)!==t&&n)throw Error(j(425))}function La(){}var Cs=null,Ss=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ls=typeof setTimeout=="function"?setTimeout:void 0,WA=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,HA=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(e){return uc.resolve(null).then(e).catch(YA)}:Ls;function YA(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ai(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Qt="__reactFiber$"+eo,ci="__reactProps$"+eo,sn="__reactContainer$"+eo,Is="__reactEvents$"+eo,QA="__reactListeners$"+eo,KA="__reactHandles$"+eo;function Zn(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dc(e);e!==null;){if(n=e[Qt])return n;e=dc(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){return e=e[Qt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Xa(e){return e[ci]||null}var _s=[],Lr=-1;function Mn(e){return{current:e}}function ge(e){0>Lr||(e.current=_s[Lr],_s[Lr]=null,Lr--)}function me(e,t){Lr++,_s[Lr]=e.current,e.current=t}var Dn={},Ge=Mn(Dn),lt=Mn(!1),rr=Dn;function Yr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function st(e){return e=e.childContextTypes,e!=null}function Ia(){ge(lt),ge(Ge)}function cc(e,t,n){if(Ge.current!==Dn)throw Error(j(168));me(Ge,t),me(lt,n)}function xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,T0(e)||"Unknown",o));return ke({},n,r)}function _a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,rr=Ge.current,me(Ge,e),me(lt,lt.current),!0}function pc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=xf(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,ge(lt),ge(Ge),me(Ge,e)):ge(lt),me(lt,n)}var nn=null,Za=!1,ql=!1;function kf(e){nn===null?nn=[e]:nn.push(e)}function VA(e){Za=!0,kf(e)}function jn(){if(!ql&&nn!==null){ql=!0;var e=0,t=he;try{var n=nn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Za=!1}catch(o){throw nn!==null&&(nn=nn.slice(e+1)),Vp(gu,jn),o}finally{he=t,ql=!1}}return null}var Ir=[],_r=0,Ta=null,Ra=0,wt=[],Et=0,or=null,rn=1,on="";function $n(e,t){Ir[_r++]=Ra,Ir[_r++]=Ta,Ta=e,Ra=t}function Cf(e,t,n){wt[Et++]=rn,wt[Et++]=on,wt[Et++]=or,or=e;var r=rn;e=on;var o=32-Nt(r)-1;r&=~(1<<o),n+=1;var i=32-Nt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,rn=1<<32-Nt(t)+o|n<<o|r,on=i+e}else rn=1<<i|n<<o|r,on=e}function Bu(e){e.return!==null&&($n(e,1),Cf(e,1,0))}function Lu(e){for(;e===Ta;)Ta=Ir[--_r],Ir[_r]=null,Ra=Ir[--_r],Ir[_r]=null;for(;e===or;)or=wt[--Et],wt[Et]=null,on=wt[--Et],wt[Et]=null,rn=wt[--Et],wt[Et]=null}var At=null,mt=null,we=!1,Dt=null;function Sf(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,mt=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,mt=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(we){var t=mt;if(t){var n=t;if(!fc(e,t)){if(Ts(e))throw Error(j(418));t=In(n.nextSibling);var r=At;t&&fc(e,t)?Sf(r,n):(e.flags=e.flags&-4097|2,we=!1,At=e)}}else{if(Ts(e))throw Error(j(418));e.flags=e.flags&-4097|2,we=!1,At=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function Xi(e){if(e!==At)return!1;if(!we)return hc(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=mt)){if(Ts(e))throw Bf(),Error(j(418));for(;t;)Sf(e,t),t=In(t.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=At?In(e.stateNode.nextSibling):null;return!0}function Bf(){for(var e=mt;e;)e=In(e.nextSibling)}function Qr(){mt=At=null,we=!1}function Iu(e){Dt===null?Dt=[e]:Dt.push(e)}var $A=cn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Pa=Mn(null),za=null,Tr=null,_u=null;function Tu(){_u=Tr=za=null}function Ru(e){var t=Pa.current;ge(Pa),e._currentValue=t}function Ps(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){za=e,_u=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(za===null)throw Error(j(308));Tr=e,za.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Jn=null;function Pu(e){Jn===null?Jn=[e]:Jn.push(e)}function Lf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pu(t)):(n.next=o.next,o.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,un(e,n)}return o=r.interleaved,o===null?(t.next=t,Pu(r)):(t.next=o.next,o.next=t),r.interleaved=t,un(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}function yc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oa(e,t,n,r){var o=e.updateQueue;wn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var h=p,A=h.next;h.next=null,s===null?i=A:s.next=A,s=h;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==s&&(p===null?k.firstBaseUpdate=A:p.next=A,k.lastBaseUpdate=h))}if(i!==null){var E=o.baseState;s=0,k=A=h=null,p=i;do{var y=p.lane,L=p.eventTime;if((r&y)===y){k!==null&&(k=k.next={eventTime:L,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var B=e,g=p;switch(y=t,L=n,g.tag){case 1:if(B=g.payload,typeof B=="function"){E=B.call(L,E,y);break e}E=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=g.payload,y=typeof B=="function"?B.call(L,E,y):B,y==null)break e;E=ke({},E,y);break e;case 2:wn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[p]:y.push(p))}else L={eventTime:L,lane:y,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(A=k=L,h=E):k=k.next=L,s|=y;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;y=p,p=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(1);if(k===null&&(h=E),o.baseState=h,o.firstBaseUpdate=A,o.lastBaseUpdate=k,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ar|=s,e.lanes=s,e.memoizedState=E}}function mc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var _f=new Bp.Component().refs;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ja={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Rn(e),i=an(r,o);i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(Mt(t,e,o,r),ua(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),o=Rn(e),i=an(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(Mt(t,e,o,r),ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Rn(e),o=an(n,r);o.tag=2,t!=null&&(o.callback=t),t=_n(e,o,r),t!==null&&(Mt(t,e,r,n),ua(t,e,r))}};function Ac(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!si(n,r)||!si(o,i):!0}function Tf(e,t,n){var r=!1,o=Dn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=st(t)?rr:Ge.current,r=t.contextTypes,i=(r=r!=null)?Yr(e,o):Dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ja.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=_f,zu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=st(t)?rr:Ge.current,o.context=Yr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ja.enqueueReplaceState(o,o.state,null),Oa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var p=o.refs;p===_f&&(p=o.refs={}),s===null?delete p[i]:p[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vc(e){var t=e._init;return t(e._payload)}function Rf(e){function t(x,b){if(e){var C=x.deletions;C===null?(x.deletions=[b],x.flags|=16):C.push(b)}}function n(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function r(x,b){for(x=new Map;b!==null;)b.key!==null?x.set(b.key,b):x.set(b.index,b),b=b.sibling;return x}function o(x,b){return x=Pn(x,b),x.index=0,x.sibling=null,x}function i(x,b,C){return x.index=C,e?(C=x.alternate,C!==null?(C=C.index,C<b?(x.flags|=2,b):C):(x.flags|=2,b)):(x.flags|=1048576,b)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,b,C,I){return b===null||b.tag!==6?(b=$l(C,x.mode,I),b.return=x,b):(b=o(b,C),b.return=x,b)}function h(x,b,C,I){var z=C.type;return z===xr?k(x,b,C.props.children,I,C.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===bn&&vc(z)===b.type)?(I=o(b,C.props),I.ref=zo(x,b,C),I.return=x,I):(I=ya(C.type,C.key,C.props,null,x.mode,I),I.ref=zo(x,b,C),I.return=x,I)}function A(x,b,C,I){return b===null||b.tag!==4||b.stateNode.containerInfo!==C.containerInfo||b.stateNode.implementation!==C.implementation?(b=Xl(C,x.mode,I),b.return=x,b):(b=o(b,C.children||[]),b.return=x,b)}function k(x,b,C,I,z){return b===null||b.tag!==7?(b=nr(C,x.mode,I,z),b.return=x,b):(b=o(b,C),b.return=x,b)}function E(x,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return b=$l(""+b,x.mode,C),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fi:return C=ya(b.type,b.key,b.props,null,x.mode,C),C.ref=zo(x,null,b),C.return=x,C;case Er:return b=Xl(b,x.mode,C),b.return=x,b;case bn:var I=b._init;return E(x,I(b._payload),C)}if(Uo(b)||Io(b))return b=nr(b,x.mode,C,null),b.return=x,b;Zi(x,b)}return null}function y(x,b,C,I){var z=b!==null?b.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return z!==null?null:p(x,b,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fi:return C.key===z?h(x,b,C,I):null;case Er:return C.key===z?A(x,b,C,I):null;case bn:return z=C._init,y(x,b,z(C._payload),I)}if(Uo(C)||Io(C))return z!==null?null:k(x,b,C,I,null);Zi(x,C)}return null}function L(x,b,C,I,z){if(typeof I=="string"&&I!==""||typeof I=="number")return x=x.get(C)||null,p(b,x,""+I,z);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Fi:return x=x.get(I.key===null?C:I.key)||null,h(b,x,I,z);case Er:return x=x.get(I.key===null?C:I.key)||null,A(b,x,I,z);case bn:var F=I._init;return L(x,b,C,F(I._payload),z)}if(Uo(I)||Io(I))return x=x.get(C)||null,k(b,x,I,z,null);Zi(b,I)}return null}function B(x,b,C,I){for(var z=null,F=null,M=b,X=b=0,pe=null;M!==null&&X<C.length;X++){M.index>X?(pe=M,M=null):pe=M.sibling;var V=y(x,M,C[X],I);if(V===null){M===null&&(M=pe);break}e&&M&&V.alternate===null&&t(x,M),b=i(V,b,X),F===null?z=V:F.sibling=V,F=V,M=pe}if(X===C.length)return n(x,M),we&&$n(x,X),z;if(M===null){for(;X<C.length;X++)M=E(x,C[X],I),M!==null&&(b=i(M,b,X),F===null?z=M:F.sibling=M,F=M);return we&&$n(x,X),z}for(M=r(x,M);X<C.length;X++)pe=L(M,x,X,C[X],I),pe!==null&&(e&&pe.alternate!==null&&M.delete(pe.key===null?X:pe.key),b=i(pe,b,X),F===null?z=pe:F.sibling=pe,F=pe);return e&&M.forEach(function(Re){return t(x,Re)}),we&&$n(x,X),z}function g(x,b,C,I){var z=Io(C);if(typeof z!="function")throw Error(j(150));if(C=z.call(C),C==null)throw Error(j(151));for(var F=z=null,M=b,X=b=0,pe=null,V=C.next();M!==null&&!V.done;X++,V=C.next()){M.index>X?(pe=M,M=null):pe=M.sibling;var Re=y(x,M,V.value,I);if(Re===null){M===null&&(M=pe);break}e&&M&&Re.alternate===null&&t(x,M),b=i(Re,b,X),F===null?z=Re:F.sibling=Re,F=Re,M=pe}if(V.done)return n(x,M),we&&$n(x,X),z;if(M===null){for(;!V.done;X++,V=C.next())V=E(x,V.value,I),V!==null&&(b=i(V,b,X),F===null?z=V:F.sibling=V,F=V);return we&&$n(x,X),z}for(M=r(x,M);!V.done;X++,V=C.next())V=L(M,x,X,V.value,I),V!==null&&(e&&V.alternate!==null&&M.delete(V.key===null?X:V.key),b=i(V,b,X),F===null?z=V:F.sibling=V,F=V);return e&&M.forEach(function(Ke){return t(x,Ke)}),we&&$n(x,X),z}function T(x,b,C,I){if(typeof C=="object"&&C!==null&&C.type===xr&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Fi:e:{for(var z=C.key,F=b;F!==null;){if(F.key===z){if(z=C.type,z===xr){if(F.tag===7){n(x,F.sibling),b=o(F,C.props.children),b.return=x,x=b;break e}}else if(F.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===bn&&vc(z)===F.type){n(x,F.sibling),b=o(F,C.props),b.ref=zo(x,F,C),b.return=x,x=b;break e}n(x,F);break}else t(x,F);F=F.sibling}C.type===xr?(b=nr(C.props.children,x.mode,I,C.key),b.return=x,x=b):(I=ya(C.type,C.key,C.props,null,x.mode,I),I.ref=zo(x,b,C),I.return=x,x=I)}return s(x);case Er:e:{for(F=C.key;b!==null;){if(b.key===F)if(b.tag===4&&b.stateNode.containerInfo===C.containerInfo&&b.stateNode.implementation===C.implementation){n(x,b.sibling),b=o(b,C.children||[]),b.return=x,x=b;break e}else{n(x,b);break}else t(x,b);b=b.sibling}b=Xl(C,x.mode,I),b.return=x,x=b}return s(x);case bn:return F=C._init,T(x,b,F(C._payload),I)}if(Uo(C))return B(x,b,C,I);if(Io(C))return g(x,b,C,I);Zi(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,b!==null&&b.tag===6?(n(x,b.sibling),b=o(b,C),b.return=x,x=b):(n(x,b),b=$l(C,x.mode,I),b.return=x,x=b),s(x)):n(x,b)}return T}var Kr=Rf(!0),Pf=Rf(!1),xi={},Vt=Mn(xi),pi=Mn(xi),fi=Mn(xi);function Gn(e){if(e===xi)throw Error(j(174));return e}function Ou(e,t){switch(me(fi,t),me(pi,e),me(Vt,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}ge(Vt),me(Vt,t)}function Vr(){ge(Vt),ge(pi),ge(fi)}function zf(e){Gn(fi.current);var t=Gn(Vt.current),n=fs(t,e.type);t!==n&&(me(pi,e),me(Vt,n))}function Du(e){pi.current===e&&(ge(Vt),ge(pi))}var Ee=Mn(0);function Da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Nu(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var da=cn.ReactCurrentDispatcher,Hl=cn.ReactCurrentBatchConfig,ir=0,xe=null,Me=null,qe=null,Na=!1,Xo=!1,hi=0,XA=0;function $e(){throw Error(j(321))}function Mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,o,i){if(ir=i,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=e===null||e.memoizedState===null?eg:tg,e=n(r,o),Xo){i=0;do{if(Xo=!1,hi=0,25<=i)throw Error(j(301));i+=1,qe=Me=null,t.updateQueue=null,da.current=ng,e=n(r,o)}while(Xo)}if(da.current=Ma,t=Me!==null&&Me.next!==null,ir=0,qe=Me=xe=null,Na=!1,t)throw Error(j(300));return e}function Fu(){var e=hi!==0;return hi=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?xe.memoizedState=qe=e:qe=qe.next=e,qe}function Bt(){if(Me===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=qe===null?xe.memoizedState:qe.next;if(t!==null)qe=t,Me=e;else{if(e===null)throw Error(j(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},qe===null?xe.memoizedState=qe=e:qe=qe.next=e}return qe}function yi(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Bt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var p=s=null,h=null,A=i;do{var k=A.lane;if((ir&k)===k)h!==null&&(h=h.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),r=A.hasEagerState?A.eagerState:e(r,A.action);else{var E={lane:k,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};h===null?(p=h=E,s=r):h=h.next=E,xe.lanes|=k,ar|=k}A=A.next}while(A!==null&&A!==i);h===null?s=r:h.next=p,jt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,xe.lanes|=i,ar|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Bt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);jt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Of(){}function Df(e,t){var n=xe,r=Bt(),o=t(),i=!jt(r.memoizedState,o);if(i&&(r.memoizedState=o,at=!0),r=r.queue,Uu(jf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,mi(9,Mf.bind(null,n,r,o,t),void 0,null),We===null)throw Error(j(349));ir&30||Nf(n,t,o)}return o}function Nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mf(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&Uf(e)}function jf(e,t,n){return n(function(){Ff(t)&&Uf(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Uf(e){var t=un(e,1);t!==null&&Mt(t,e,1,-1)}function bc(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=GA.bind(null,xe,e),[t.memoizedState,e]}function mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qf(){return Bt().memoizedState}function ca(e,t,n,r){var o=Ht();xe.flags|=e,o.memoizedState=mi(1|t,n,void 0,r===void 0?null:r)}function Ga(e,t,n,r){var o=Bt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var s=Me.memoizedState;if(i=s.destroy,r!==null&&Mu(r,s.deps)){o.memoizedState=mi(t,n,i,r);return}}xe.flags|=e,o.memoizedState=mi(1|t,n,i,r)}function wc(e,t){return ca(8390656,8,e,t)}function Uu(e,t){return Ga(2048,8,e,t)}function Wf(e,t){return Ga(4,2,e,t)}function Hf(e,t){return Ga(4,4,e,t)}function Yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,Yf.bind(null,t,e),n)}function qu(){}function Kf(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vf(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $f(e,t,n){return ir&21?(jt(n,t)||(n=Zp(),xe.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function ZA(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{he=n,Hl.transition=r}}function Xf(){return Bt().memoizedState}function JA(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))Jf(t,n);else if(n=Lf(e,t,n,r),n!==null){var o=nt();Mt(n,e,r,o),Gf(n,t,r)}}function GA(e,t,n){var r=Rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))Jf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,p=i(s,n);if(o.hasEagerState=!0,o.eagerState=p,jt(p,s)){var h=t.interleaved;h===null?(o.next=o,Pu(t)):(o.next=h.next,h.next=o),t.interleaved=o;return}}catch{}finally{}n=Lf(e,t,o,r),n!==null&&(o=nt(),Mt(n,e,r,o),Gf(n,t,r))}}function Zf(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Jf(e,t){Xo=Na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}var Ma={readContext:St,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},eg={readContext:St,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ca(4194308,4,Yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return ca(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=JA.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:qu,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=ZA.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,o=Ht();if(we){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),We===null)throw Error(j(349));ir&30||Nf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wc(jf.bind(null,r,i,e),[e]),r.flags|=2048,mi(9,Mf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ht(),t=We.identifierPrefix;if(we){var n=on,r=rn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=XA++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tg={readContext:St,useCallback:Kf,useContext:St,useEffect:Uu,useImperativeHandle:Qf,useInsertionEffect:Wf,useLayoutEffect:Hf,useMemo:Vf,useReducer:Yl,useRef:qf,useState:function(){return Yl(yi)},useDebugValue:qu,useDeferredValue:function(e){var t=Bt();return $f(t,Me.memoizedState,e)},useTransition:function(){var e=Yl(yi)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Df,useId:Xf,unstable_isNewReconciler:!1},ng={readContext:St,useCallback:Kf,useContext:St,useEffect:Uu,useImperativeHandle:Qf,useInsertionEffect:Wf,useLayoutEffect:Hf,useMemo:Vf,useReducer:Ql,useRef:qf,useState:function(){return Ql(yi)},useDebugValue:qu,useDeferredValue:function(e){var t=Bt();return Me===null?t.memoizedState=e:$f(t,Me.memoizedState,e)},useTransition:function(){var e=Ql(yi)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Df,useId:Xf,unstable_isNewReconciler:!1};function $r(e,t){try{var n="",r=t;do n+=_0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rg=typeof WeakMap=="function"?WeakMap:Map;function eh(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fa||(Fa=!0,Qs=r),Ds(e,t)},n}function th(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ds(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ag.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var og=cn.ReactCurrentOwner,at=!1;function tt(e,t,n,r){t.child=e===null?Pf(t,null,n,r):Kr(t,e.child,n,r)}function Cc(e,t,n,r,o){n=n.render;var i=t.ref;return Fr(t,o),r=ju(e,t,n,r,i,o),n=Fu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(we&&n&&Bu(t),t.flags|=1,tt(e,t,r,o),t.child)}function Sc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,nh(e,t,i,r,o)):(e=ya(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(s,r)&&e.ref===t.ref)return dn(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function nh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(si(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,dn(e,t,o)}return Ns(e,t,n,r,o)}function rh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Pr,yt),yt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Pr,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Pr,yt),yt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,me(Pr,yt),yt|=r;return tt(e,t,o,n),t.child}function oh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,n,r,o){var i=st(n)?rr:Ge.current;return i=Yr(t,i),Fr(t,o),n=ju(e,t,n,r,i,o),r=Fu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(we&&r&&Bu(t),t.flags|=1,tt(e,t,n,o),t.child)}function Bc(e,t,n,r,o){if(st(n)){var i=!0;_a(t)}else i=!1;if(Fr(t,o),t.stateNode===null)pa(e,t),Tf(t,n,r),Os(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,p=t.memoizedProps;s.props=p;var h=s.context,A=n.contextType;typeof A=="object"&&A!==null?A=St(A):(A=st(n)?rr:Ge.current,A=Yr(t,A));var k=n.getDerivedStateFromProps,E=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function";E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==r||h!==A)&&gc(t,s,r,A),wn=!1;var y=t.memoizedState;s.state=y,Oa(t,r,s,o),h=t.memoizedState,p!==r||y!==h||lt.current||wn?(typeof k=="function"&&(zs(t,n,k,r),h=t.memoizedState),(p=wn||Ac(t,n,p,r,y,h,A))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=A,r=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,If(e,t),p=t.memoizedProps,A=t.type===t.elementType?p:Pt(t.type,p),s.props=A,E=t.pendingProps,y=s.context,h=n.contextType,typeof h=="object"&&h!==null?h=St(h):(h=st(n)?rr:Ge.current,h=Yr(t,h));var L=n.getDerivedStateFromProps;(k=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==E||y!==h)&&gc(t,s,r,h),wn=!1,y=t.memoizedState,s.state=y,Oa(t,r,s,o);var B=t.memoizedState;p!==E||y!==B||lt.current||wn?(typeof L=="function"&&(zs(t,n,L,r),B=t.memoizedState),(A=wn||Ac(t,n,A,r,y,B,h)||!1)?(k||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,B,h),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,B,h)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),s.props=r,s.state=B,s.context=h,r=A):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,i,o)}function Ms(e,t,n,r,o,i){oh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&pc(t,n,!1),dn(e,t,i);r=t.stateNode,og.current=t;var p=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kr(t,e.child,null,i),t.child=Kr(t,null,p,i)):tt(e,t,p,i),t.memoizedState=r.state,o&&pc(t,n,!0),t.child}function ih(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),Ou(e,t.containerInfo)}function Lc(e,t,n,r,o){return Qr(),Iu(o),t.flags|=256,tt(e,t,n,r),t.child}var js={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ah(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(Ee,o&1),e===null)return Rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=nl(s,r,0,null),e=nr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fs(n),t.memoizedState=js,e):Wu(t,s));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return ig(e,t,s,r,p,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,p=o.sibling;var h={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=Pn(o,h),r.subtreeFlags=o.subtreeFlags&14680064),p!==null?i=Pn(p,i):(i=nr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Fs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=js,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,r){return r!==null&&Iu(r),Kr(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ig(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(j(422))),Ji(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=nl({mode:"visible",children:r.children},o,0,null),i=nr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kr(t,e.child,null,s),t.child.memoizedState=Fs(s),t.memoizedState=js,i);if(!(t.mode&1))return Ji(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;return r=p,i=Error(j(419)),r=Kl(i,r,void 0),Ji(e,t,s,r)}if(p=(s&e.childLanes)!==0,at||p){if(r=We,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,un(e,o),Mt(r,e,o,-1))}return $u(),r=Kl(Error(j(421))),Ji(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,mt=In(o.nextSibling),At=t,we=!0,Dt=null,e!==null&&(wt[Et++]=rn,wt[Et++]=on,wt[Et++]=or,rn=e.id,on=e.overflow,or=t),t=Wu(t,r.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ps(e.return,t,n)}function Vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function lh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(tt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Da(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Da(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t,n){switch(t.tag){case 3:ih(t),Qr();break;case 5:zf(t);break;case 1:st(t.type)&&_a(t);break;case 4:Ou(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(Pa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?ah(e,t,n):(me(Ee,Ee.current&1),e=dn(e,t,n),e!==null?e.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,rh(e,t,n)}return dn(e,t,n)}var sh,Us,uh,dh;sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Us=function(){};uh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gn(Vt.current);var i=null;switch(n){case"input":o=us(e,o),r=us(e,r),i=[];break;case"select":o=ke({},o,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":o=ps(e,o),r=ps(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=La)}hs(n,r);var s;n=null;for(A in o)if(!r.hasOwnProperty(A)&&o.hasOwnProperty(A)&&o[A]!=null)if(A==="style"){var p=o[A];for(s in p)p.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(ti.hasOwnProperty(A)?i||(i=[]):(i=i||[]).push(A,null));for(A in r){var h=r[A];if(p=o!=null?o[A]:void 0,r.hasOwnProperty(A)&&h!==p&&(h!=null||p!=null))if(A==="style")if(p){for(s in p)!p.hasOwnProperty(s)||h&&h.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in h)h.hasOwnProperty(s)&&p[s]!==h[s]&&(n||(n={}),n[s]=h[s])}else n||(i||(i=[]),i.push(A,n)),n=h;else A==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(i=i||[]).push(A,h)):A==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(A,""+h):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(ti.hasOwnProperty(A)?(h!=null&&A==="onScroll"&&Ae("scroll",e),i||p===h||(i=[])):(i=i||[]).push(A,h))}n&&(i=i||[]).push("style",n);var A=i;(t.updateQueue=A)&&(t.flags|=4)}};dh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oo(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return st(t.type)&&Ia(),Xe(t),null;case 3:return r=t.stateNode,Vr(),ge(lt),ge(Ge),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&($s(Dt),Dt=null))),Us(e,t),Xe(t),null;case 5:Du(t);var o=Gn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)uh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Xe(t),null}if(e=Gn(Vt.current),Xi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qt]=t,r[ci]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Ae(Wo[o],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Md(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":Fd(r,i),Ae("invalid",r)}hs(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var p=i[s];s==="children"?typeof p=="string"?r.textContent!==p&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,p,e),o=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(i.suppressHydrationWarning!==!0&&$i(r.textContent,p,e),o=["children",""+p]):ti.hasOwnProperty(s)&&p!=null&&s==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Ui(r),jd(r,i,!0);break;case"textarea":Ui(r),Ud(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=La)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Qt]=t,e[ci]=r,sh(e,t,!1,!1),t.stateNode=e;e:{switch(s=ys(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),o=r;break;case"iframe":case"object":case"embed":Ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wo.length;o++)Ae(Wo[o],e);o=r;break;case"source":Ae("error",e),o=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),o=r;break;case"details":Ae("toggle",e),o=r;break;case"input":Md(e,r),o=us(e,r),Ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ke({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Fd(e,r),o=ps(e,r),Ae("invalid",e);break;default:o=r}hs(n,o),p=o;for(i in p)if(p.hasOwnProperty(i)){var h=p[i];i==="style"?jp(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Np(e,h)):i==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&ni(e,h):typeof h=="number"&&ni(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ti.hasOwnProperty(i)?h!=null&&i==="onScroll"&&Ae("scroll",e):h!=null&&fu(e,i,h,s))}switch(n){case"input":Ui(e),jd(e,r,!1);break;case"textarea":Ui(e),Ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)dh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Gn(fi.current),Gn(Vt.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(i=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Xe(t),null;case 13:if(ge(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&mt!==null&&t.mode&1&&!(t.flags&128))Bf(),Qr(),t.flags|=98560,i=!1;else if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Qt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else Dt!==null&&($s(Dt),Dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?je===0&&(je=3):$u())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Vr(),Us(e,t),e===null&&ui(t.stateNode.containerInfo),Xe(t),null;case 10:return Ru(t.type._context),Xe(t),null;case 17:return st(t.type)&&Ia(),Xe(t),null;case 19:if(ge(Ee),i=t.memoizedState,i===null)return Xe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Oo(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Da(e),s!==null){for(t.flags|=128,Oo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Le()>Xr&&(t.flags|=128,r=!0,Oo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!we)return Xe(t),null}else 2*Le()-i.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,Oo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Le(),t.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function sg(e,t){switch(Lu(t),t.tag){case 1:return st(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),ge(lt),ge(Ge),Nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(ge(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Ee),null;case 4:return Vr(),null;case 10:return Ru(t.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Gi=!1,Je=!1,ug=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var _c=!1;function dg(e,t){if(Cs=Ca,e=hf(),Su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,p=-1,h=-1,A=0,k=0,E=e,y=null;t:for(;;){for(var L;E!==n||o!==0&&E.nodeType!==3||(p=s+o),E!==i||r!==0&&E.nodeType!==3||(h=s+r),E.nodeType===3&&(s+=E.nodeValue.length),(L=E.firstChild)!==null;)y=E,E=L;for(;;){if(E===e)break t;if(y===n&&++A===o&&(p=s),y===i&&++k===r&&(h=s),(L=E.nextSibling)!==null)break;E=y,y=E.parentNode}E=L}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ss={focusedElem:e,selectionRange:n},Ca=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var B=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var g=B.memoizedProps,T=B.memoizedState,x=t.stateNode,b=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:Pt(t.type,g),T);x.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(I){Ce(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return B=_c,_c=!1,B}function Zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&qs(t,n,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[ci],delete t[Is],delete t[QA],delete t[KA])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ph(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var He=null,zt=!1;function vn(e,t,n){for(n=n.child;n!==null;)fh(e,t,n),n=n.sibling}function fh(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Je||Rr(n,t);case 6:var r=He,o=zt;He=null,vn(e,t,n),He=r,zt=o,He!==null&&(zt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(zt?(e=He,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),ai(e)):Ul(He,n.stateNode));break;case 4:r=He,o=zt,He=n.stateNode.containerInfo,zt=!0,vn(e,t,n),He=r,zt=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&qs(n,t,s),o=o.next}while(o!==r)}vn(e,t,n);break;case 1:if(!Je&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Ce(n,t,p)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,vn(e,t,n),Je=r):vn(e,t,n);break;default:vn(e,t,n)}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var o=vg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,p=s;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,zt=!1;break e;case 3:He=p.stateNode.containerInfo,zt=!0;break e;case 4:He=p.stateNode.containerInfo,zt=!0;break e}p=p.return}if(He===null)throw Error(j(160));fh(i,s,o),He=null,zt=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(A){Ce(o,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}function hh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Wt(e),r&4){try{Zo(3,e,e.return),el(3,e)}catch(g){Ce(e,e.return,g)}try{Zo(5,e,e.return)}catch(g){Ce(e,e.return,g)}}break;case 1:Rt(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(Rt(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var o=e.stateNode;try{ni(o,"")}catch(g){Ce(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&i.type==="radio"&&i.name!=null&&zp(o,i),ys(p,s);var A=ys(p,i);for(s=0;s<h.length;s+=2){var k=h[s],E=h[s+1];k==="style"?jp(o,E):k==="dangerouslySetInnerHTML"?Np(o,E):k==="children"?ni(o,E):fu(o,k,E,A)}switch(p){case"input":ds(o,i);break;case"textarea":Op(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var L=i.value;L!=null?Dr(o,!!i.multiple,L,!1):y!==!!i.multiple&&(i.defaultValue!=null?Dr(o,!!i.multiple,i.defaultValue,!0):Dr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ci]=i}catch(g){Ce(e,e.return,g)}}break;case 6:if(Rt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){Ce(e,e.return,g)}}break;case 3:if(Rt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(t.containerInfo)}catch(g){Ce(e,e.return,g)}break;case 4:Rt(t,e),Wt(e);break;case 13:Rt(t,e),Wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qu=Le())),r&4&&Rc(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(A=Je)||k,Rt(t,e),Je=A):Rt(t,e),Wt(e),r&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!k&&e.mode&1)for(Z=e,k=e.child;k!==null;){for(E=Z=k;Z!==null;){switch(y=Z,L=y.child,y.tag){case 0:case 11:case 14:case 15:Zo(4,y,y.return);break;case 1:Rr(y,y.return);var B=y.stateNode;if(typeof B.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(g){Ce(r,n,g)}}break;case 5:Rr(y,y.return);break;case 22:if(y.memoizedState!==null){zc(E);continue}}L!==null?(L.return=y,Z=L):zc(E)}k=k.sibling}e:for(k=null,E=e;;){if(E.tag===5){if(k===null){k=E;try{o=E.stateNode,A?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(p=E.stateNode,h=E.memoizedProps.style,s=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=Mp("display",s))}catch(g){Ce(e,e.return,g)}}}else if(E.tag===6){if(k===null)try{E.stateNode.nodeValue=A?"":E.memoizedProps}catch(g){Ce(e,e.return,g)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;k===E&&(k=null),E=E.return}k===E&&(k=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Rt(t,e),Wt(e),r&4&&Rc(e);break;case 21:break;default:Rt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ph(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ni(o,""),r.flags&=-33);var i=Tc(e);Ys(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,p=Tc(e);Hs(e,p,s);break;default:throw Error(j(161))}}catch(h){Ce(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cg(e,t,n){Z=e,yh(e)}function yh(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var o=Z,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Gi;if(!s){var p=o.alternate,h=p!==null&&p.memoizedState!==null||Je;p=Gi;var A=Je;if(Gi=s,(Je=h)&&!A)for(Z=o;Z!==null;)s=Z,h=s.child,s.tag===22&&s.memoizedState!==null?Oc(o):h!==null?(h.return=s,Z=h):Oc(o);for(;i!==null;)Z=i,yh(i),i=i.sibling;Z=o,Gi=p,Je=A}Pc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Z=i):Pc(e)}}function Pc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mc(t,s,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var k=A.memoizedState;if(k!==null){var E=k.dehydrated;E!==null&&ai(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Je||t.flags&512&&Ws(t)}catch(y){Ce(t,t.return,y)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function zc(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Oc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(h){Ce(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(h){Ce(t,o,h)}}var i=t.return;try{Ws(t)}catch(h){Ce(t,i,h)}break;case 5:var s=t.return;try{Ws(t)}catch(h){Ce(t,s,h)}}}catch(h){Ce(t,t.return,h)}if(t===e){Z=null;break}var p=t.sibling;if(p!==null){p.return=t.return,Z=p;break}Z=t.return}}var pg=Math.ceil,ja=cn.ReactCurrentDispatcher,Hu=cn.ReactCurrentOwner,Ct=cn.ReactCurrentBatchConfig,ce=0,We=null,_e=null,Ye=0,yt=0,Pr=Mn(0),je=0,Ai=null,ar=0,tl=0,Yu=0,Jo=null,it=null,Qu=0,Xr=1/0,en=null,Fa=!1,Qs=null,Tn=null,ea=!1,Cn=null,Ua=0,Go=0,Ks=null,fa=-1,ha=0;function nt(){return ce&6?Le():fa!==-1?fa:fa=Le()}function Rn(e){return e.mode&1?ce&2&&Ye!==0?Ye&-Ye:$A.transition!==null?(ha===0&&(ha=Zp()),ha):(e=he,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function Mt(e,t,n,r){if(50<Go)throw Go=0,Ks=null,Error(j(185));bi(e,n,r),(!(ce&2)||e!==We)&&(e===We&&(!(ce&2)&&(tl|=n),je===4&&xn(e,Ye)),ut(e,r),n===1&&ce===0&&!(t.mode&1)&&(Xr=Le()+500,Za&&jn()))}function ut(e,t){var n=e.callbackNode;$0(e,t);var r=ka(e,e===We?Ye:0);if(r===0)n!==null&&Hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hd(n),t===1)e.tag===0?VA(Dc.bind(null,e)):kf(Dc.bind(null,e)),HA(function(){!(ce&6)&&jn()}),n=null;else{switch(Jp(r)){case 1:n=gu;break;case 4:n=$p;break;case 16:n=xa;break;case 536870912:n=Xp;break;default:n=xa}n=xh(n,mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mh(e,t){if(fa=-1,ha=0,ce&6)throw Error(j(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=ka(e,e===We?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qa(e,r);else{t=r;var o=ce;ce|=2;var i=gh();(We!==e||Ye!==t)&&(en=null,Xr=Le()+500,tr(e,t));do try{yg();break}catch(p){Ah(e,p)}while(1);Tu(),ja.current=i,ce=o,_e!==null?t=0:(We=null,Ye=0,t=je)}if(t!==0){if(t===2&&(o=bs(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=Ai,tr(e,0),xn(e,r),ut(e,Le()),n;if(t===6)xn(e,r);else{if(o=e.current.alternate,!(r&30)&&!fg(o)&&(t=qa(e,r),t===2&&(i=bs(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=Ai,tr(e,0),xn(e,r),ut(e,Le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Xn(e,it,en);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=Qu+500-Le(),10<t)){if(ka(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ls(Xn.bind(null,e,it,en),t);break}Xn(e,it,en);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Nt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pg(r/1960))-r,10<r){e.timeoutHandle=Ls(Xn.bind(null,e,it,en),r);break}Xn(e,it,en);break;case 5:Xn(e,it,en);break;default:throw Error(j(329))}}}return ut(e,Le()),e.callbackNode===n?mh.bind(null,e):null}function Vs(e,t){var n=Jo;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=qa(e,t),e!==2&&(t=it,it=n,t!==null&&$s(t)),e}function $s(e){it===null?it=e:it.push.apply(it,e)}function fg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!jt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Yu,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Dc(e){if(ce&6)throw Error(j(327));Ur();var t=ka(e,0);if(!(t&1))return ut(e,Le()),null;var n=qa(e,t);if(e.tag!==0&&n===2){var r=bs(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=Ai,tr(e,0),xn(e,t),ut(e,Le()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,it,en),ut(e,Le()),null}function Ku(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Xr=Le()+500,Za&&jn())}}function lr(e){Cn!==null&&Cn.tag===0&&!(ce&6)&&Ur();var t=ce;ce|=1;var n=Ct.transition,r=he;try{if(Ct.transition=null,he=1,e)return e()}finally{he=r,Ct.transition=n,ce=t,!(ce&6)&&jn()}}function Vu(){yt=Pr.current,ge(Pr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,WA(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:Vr(),ge(lt),ge(Ge),Nu();break;case 5:Du(r);break;case 4:Vr();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Ru(r.type._context);break;case 22:case 23:Vu()}n=n.return}if(We=e,_e=e=Pn(e.current,null),Ye=yt=t,je=0,Ai=null,Yu=tl=ar=0,it=Jo=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Jn=null}return e}function Ah(e,t){do{var n=_e;try{if(Tu(),da.current=Ma,Na){for(var r=xe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Na=!1}if(ir=0,qe=Me=xe=null,Xo=!1,hi=0,Hu.current=null,n===null||n.return===null){je=1,Ai=t,_e=null;break}e:{var i=e,s=n.return,p=n,h=t;if(t=Ye,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=h,k=p,E=k.tag;if(!(k.mode&1)&&(E===0||E===11||E===15)){var y=k.alternate;y?(k.updateQueue=y.updateQueue,k.memoizedState=y.memoizedState,k.lanes=y.lanes):(k.updateQueue=null,k.memoizedState=null)}var L=xc(s);if(L!==null){L.flags&=-257,kc(L,s,p,i,t),L.mode&1&&Ec(i,A,t),t=L,h=A;var B=t.updateQueue;if(B===null){var g=new Set;g.add(h),t.updateQueue=g}else B.add(h);break e}else{if(!(t&1)){Ec(i,A,t),$u();break e}h=Error(j(426))}}else if(we&&p.mode&1){var T=xc(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kc(T,s,p,i,t),Iu($r(h,p));break e}}i=h=$r(h,p),je!==4&&(je=2),Jo===null?Jo=[i]:Jo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=eh(i,h,t);yc(i,x);break e;case 1:p=h;var b=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof b.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Tn===null||!Tn.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var I=th(i,p,t);yc(i,I);break e}}i=i.return}while(i!==null)}bh(n)}catch(z){t=z,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function gh(){var e=ja.current;return ja.current=Ma,e===null?Ma:e}function $u(){(je===0||je===3||je===2)&&(je=4),We===null||!(ar&268435455)&&!(tl&268435455)||xn(We,Ye)}function qa(e,t){var n=ce;ce|=2;var r=gh();(We!==e||Ye!==t)&&(en=null,tr(e,t));do try{hg();break}catch(o){Ah(e,o)}while(1);if(Tu(),ce=n,ja.current=r,_e!==null)throw Error(j(261));return We=null,Ye=0,je}function hg(){for(;_e!==null;)vh(_e)}function yg(){for(;_e!==null&&!F0();)vh(_e)}function vh(e){var t=Eh(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?bh(e):_e=t,Hu.current=null}function bh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sg(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,_e=null;return}}else if(n=lg(n,t,yt),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);je===0&&(je=5)}function Xn(e,t,n){var r=he,o=Ct.transition;try{Ct.transition=null,he=1,mg(e,t,n,r)}finally{Ct.transition=o,he=r}return null}function mg(e,t,n,r){do Ur();while(Cn!==null);if(ce&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(X0(e,i),e===We&&(_e=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,xh(xa,function(){return Ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var s=he;he=1;var p=ce;ce|=4,Hu.current=null,dg(e,n),hh(n,e),DA(Ss),Ca=!!Cs,Ss=Cs=null,e.current=n,cg(n),U0(),ce=p,he=s,Ct.transition=i}else e.current=n;if(ea&&(ea=!1,Cn=e,Ua=o),i=e.pendingLanes,i===0&&(Tn=null),H0(n.stateNode),ut(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fa)throw Fa=!1,e=Qs,Qs=null,e;return Ua&1&&e.tag!==0&&Ur(),i=e.pendingLanes,i&1?e===Ks?Go++:(Go=0,Ks=e):Go=0,jn(),null}function Ur(){if(Cn!==null){var e=Jp(Ua),t=Ct.transition,n=he;try{if(Ct.transition=null,he=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,Ua=0,ce&6)throw Error(j(331));var o=ce;for(ce|=4,Z=e.current;Z!==null;){var i=Z,s=i.child;if(Z.flags&16){var p=i.deletions;if(p!==null){for(var h=0;h<p.length;h++){var A=p[h];for(Z=A;Z!==null;){var k=Z;switch(k.tag){case 0:case 11:case 15:Zo(8,k,i)}var E=k.child;if(E!==null)E.return=k,Z=E;else for(;Z!==null;){k=Z;var y=k.sibling,L=k.return;if(ch(k),k===A){Z=null;break}if(y!==null){y.return=L,Z=y;break}Z=L}}}var B=i.alternate;if(B!==null){var g=B.child;if(g!==null){B.child=null;do{var T=g.sibling;g.sibling=null,g=T}while(g!==null)}}Z=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Z=s;else e:for(;Z!==null;){if(i=Z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,Z=x;break e}Z=i.return}}var b=e.current;for(Z=b;Z!==null;){s=Z;var C=s.child;if(s.subtreeFlags&2064&&C!==null)C.return=s,Z=C;else e:for(s=b;Z!==null;){if(p=Z,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:el(9,p)}}catch(z){Ce(p,p.return,z)}if(p===s){Z=null;break e}var I=p.sibling;if(I!==null){I.return=p.return,Z=I;break e}Z=p.return}}if(ce=o,jn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Qa,e)}catch{}r=!0}return r}finally{he=n,Ct.transition=t}}return!1}function Nc(e,t,n){t=$r(n,t),t=eh(e,t,1),e=_n(e,t,1),t=nt(),e!==null&&(bi(e,1,t),ut(e,t))}function Ce(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=$r(n,e),e=th(t,e,1),t=_n(t,e,1),e=nt(),t!==null&&(bi(t,1,e),ut(t,e));break}}t=t.return}}function Ag(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Le()-Qu?tr(e,0):Yu|=n),ut(e,t)}function wh(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=nt();e=un(e,t),e!==null&&(bi(e,t,n),ut(e,n))}function gg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wh(e,n)}function vg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),wh(e,n)}var Eh;Eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,ag(e,t,n);at=!!(e.flags&131072)}else at=!1,we&&t.flags&1048576&&Cf(t,Ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pa(e,t),e=t.pendingProps;var o=Yr(t,Ge.current);Fr(t,n),o=ju(null,t,r,e,o,n);var i=Fu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(i=!0,_a(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zu(t),o.updater=Ja,t.stateNode=o,o._reactInternals=t,Os(t,r,e,n),t=Ms(null,t,r,!0,i,n)):(t.tag=0,we&&i&&Bu(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=wg(r),e=Pt(r,e),o){case 0:t=Ns(null,t,r,e,n);break e;case 1:t=Bc(null,t,r,e,n);break e;case 11:t=Cc(null,t,r,e,n);break e;case 14:t=Sc(null,t,r,Pt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Ns(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Bc(e,t,r,o,n);case 3:e:{if(ih(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,If(e,t),Oa(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$r(Error(j(423)),t),t=Lc(e,t,r,n,o);break e}else if(r!==o){o=$r(Error(j(424)),t),t=Lc(e,t,r,n,o);break e}else for(mt=In(t.stateNode.containerInfo.firstChild),At=t,we=!0,Dt=null,n=Pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===o){t=dn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return zf(t),e===null&&Rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Bs(r,o)?s=null:i!==null&&Bs(r,i)&&(t.flags|=32),oh(e,t),tt(e,t,s,n),t.child;case 6:return e===null&&Rs(t),null;case 13:return ah(e,t,n);case 4:return Ou(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Cc(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,me(Pa,r._currentValue),r._currentValue=s,i!==null)if(jt(i.value,s)){if(i.children===o.children&&!lt.current){t=dn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var p=i.dependencies;if(p!==null){s=i.child;for(var h=p.firstContext;h!==null;){if(h.context===r){if(i.tag===1){h=an(-1,n&-n),h.tag=2;var A=i.updateQueue;if(A!==null){A=A.shared;var k=A.pending;k===null?h.next=h:(h.next=k.next,k.next=h),A.pending=h}}i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Ps(i.return,n,t),p.lanes|=n;break}h=h.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(j(341));s.lanes|=n,p=s.alternate,p!==null&&(p.lanes|=n),Ps(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fr(t,n),o=St(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=Pt(r,t.pendingProps),o=Pt(r.type,o),Sc(e,t,r,o,n);case 15:return nh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),pa(e,t),t.tag=1,st(r)?(e=!0,_a(t)):e=!1,Fr(t,n),Tf(t,r,o),Os(t,r,o,n),Ms(null,t,r,!0,e,n);case 19:return lh(e,t,n);case 22:return rh(e,t,n)}throw Error(j(156,t.tag))};function xh(e,t){return Vp(e,t)}function bg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new bg(e,t,n,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wg(e){if(typeof e=="function")return Xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===mu)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ya(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Xu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xr:return nr(n.children,o,i,t);case hu:s=8,o|=8;break;case is:return e=kt(12,n,t,o|2),e.elementType=is,e.lanes=i,e;case as:return e=kt(13,n,t,o),e.elementType=as,e.lanes=i,e;case ls:return e=kt(19,n,t,o),e.elementType=ls,e.lanes=i,e;case Tp:return nl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ip:s=10;break e;case _p:s=9;break e;case yu:s=11;break e;case mu:s=14;break e;case bn:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=kt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function nr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=kt(22,e,r,t),e.elementType=Tp,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,o,i,s,p,h){return e=new Eg(e,t,n,p,h),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(i),e}function xg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kh(e){if(!e)return Dn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(st(n))return xf(e,n,t)}return t}function Ch(e,t,n,r,o,i,s,p,h){return e=Zu(n,r,!0,e,o,i,s,p,h),e.context=kh(null),n=e.current,r=nt(),o=Rn(n),i=an(r,o),i.callback=t??null,_n(n,i,o),e.current.lanes=o,bi(e,o,r),ut(e,r),e}function rl(e,t,n,r){var o=t.current,i=nt(),s=Rn(o);return n=kh(n),t.context===null?t.context=n:t.pendingContext=n,t=an(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(o,t,s),e!==null&&(Mt(e,o,s,i),ua(e,o,s)),s}function Wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ju(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function kg(){return null}var Sh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}ol.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));rl(e,t,null,null)};ol.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){rl(null,e,null,null)}),t[sn]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&rf(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function Cg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var A=Wa(s);i.call(A)}}var s=Ch(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=s,e[sn]=s.current,ui(e.nodeType===8?e.parentNode:e),lr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var p=r;r=function(){var A=Wa(h);p.call(A)}}var h=Zu(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=h,e[sn]=h.current,ui(e.nodeType===8?e.parentNode:e),lr(function(){rl(t,h,n,r)}),h}function al(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var p=o;o=function(){var h=Wa(s);p.call(h)}}rl(t,s,e,o)}else s=Cg(n,t,e,o,r);return Wa(s)}Gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(vu(t,n|1),ut(t,Le()),!(ce&6)&&(Xr=Le()+500,jn()))}break;case 13:lr(function(){var r=un(e,1);if(r!==null){var o=nt();Mt(r,e,1,o)}}),Ju(e,1)}};bu=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=nt();Mt(t,e,134217728,n)}Ju(e,134217728)}};ef=function(e){if(e.tag===13){var t=Rn(e),n=un(e,t);if(n!==null){var r=nt();Mt(n,e,t,r)}Ju(e,t)}};tf=function(){return he};nf=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};As=function(e,t,n){switch(t){case"input":if(ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xa(r);if(!o)throw Error(j(90));Pp(r),ds(r,o)}}}break;case"textarea":Op(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}};qp=Ku;Wp=lr;var Sg={usingClientEntryPoint:!1,Events:[Ei,Br,Xa,Fp,Up,Ku]},Do={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bg={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qp(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{Qa=ta.inject(Bg),Kt=ta}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(j(200));return xg(e,t,null,n)};vt.createRoot=function(e,t){if(!ed(e))throw Error(j(299));var n=!1,r="",o=Sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,o),e[sn]=t.current,ui(e.nodeType===8?e.parentNode:e),new Gu(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Qp(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return lr(e)};vt.hydrate=function(e,t,n){if(!il(t))throw Error(j(200));return al(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!ed(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Sh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ch(t,null,e,1,n??null,o,!1,i,s),e[sn]=t.current,ui(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ol(t)};vt.render=function(e,t,n){if(!il(t))throw Error(j(200));return al(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!il(e))throw Error(j(40));return e._reactRootContainer?(lr(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};vt.unstable_batchedUpdates=Ku;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return al(e,t,n,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=vt})(k0);var Fc=ns;ts.createRoot=Fc.createRoot,ts.hydrateRoot=Fc.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var Be;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Be||(Be={}));const Uc="popstate";function Lg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:p}=r.location;return gi("",{pathname:i,search:s,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:sr(o)}return _g(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ig(){return Math.random().toString(36).substr(2,8)}function qc(e,t){return{usr:e.state,key:e.key,idx:t}}function gi(e,t,n,r){return n===void 0&&(n=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||r||Ig()})}function sr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _g(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,p=Be.Pop,h=null,A=k();A==null&&(A=0,s.replaceState(de({},s.state,{idx:A}),""));function k(){return(s.state||{idx:null}).idx}function E(){p=Be.Pop;let T=k(),x=T==null?null:T-A;A=T,h&&h({action:p,location:g.location,delta:x})}function y(T,x){p=Be.Push;let b=gi(g.location,T,x);n&&n(b,T),A=k()+1;let C=qc(b,A),I=g.createHref(b);try{s.pushState(C,"",I)}catch{o.location.assign(I)}i&&h&&h({action:p,location:g.location,delta:1})}function L(T,x){p=Be.Replace;let b=gi(g.location,T,x);n&&n(b,T),A=k();let C=qc(b,A),I=g.createHref(b);s.replaceState(C,"",I),i&&h&&h({action:p,location:g.location,delta:0})}function B(T){let x=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof T=="string"?T:sr(T);return ae(x,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,x)}let g={get action(){return p},get location(){return e(o,s)},listen(T){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Uc,E),h=T,()=>{o.removeEventListener(Uc,E),h=null}},createHref(T){return t(o,T)},createURL:B,encodeLocation(T){let x=B(T);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:L,go(T){return s.go(T)}};return g}var Ne;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ne||(Ne={}));const Tg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Rg(e){return e.index===!0}function Bh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let s=[...n,i],p=typeof o.id=="string"?o.id:s.join("-");if(ae(o.index!==!0||!o.children,"Cannot specify children on an index route"),ae(!r[p],'Found a route id collision on id "'+p+`".  Route id's must be globally unique within Data Router usages`),Rg(o)){let h=de({},o,{hasErrorBoundary:t(o),id:p});return r[p]=h,h}else{let h=de({},o,{id:p,hasErrorBoundary:t(o),children:void 0});return r[p]=h,o.children&&(h.children=Bh(o.children,t,s,r)),h}})}function zr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pn(t):t,o=ll(r.pathname||"/",n);if(o==null)return null;let i=Lh(e);Pg(i);let s=null;for(let p=0;s==null&&p<i.length;++p)s=qg(i[p],Yg(o));return s}function Lh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,p)=>{let h={relativePath:p===void 0?i.path||"":p,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};h.relativePath.startsWith("/")&&(ae(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let A=zn([r,h.relativePath]),k=n.concat(h);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+A+'".')),Lh(i.children,t,k,A)),!(i.path==null&&!i.index)&&t.push({path:A,score:Fg(A,i.index),routesMeta:k})};return e.forEach((i,s)=>{var p;if(i.path===""||!((p=i.path)!=null&&p.includes("?")))o(i,s);else for(let h of Ih(i.path))o(i,s,h)}),t}function Ih(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Ih(r.join("/")),p=[];return p.push(...s.map(h=>h===""?i:[i,h].join("/"))),o&&p.push(...s),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function Pg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ug(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zg=/^:\w+$/,Og=3,Dg=2,Ng=1,Mg=10,jg=-2,Wc=e=>e==="*";function Fg(e,t){let n=e.split("/"),r=n.length;return n.some(Wc)&&(r+=jg),t&&(r+=Dg),n.filter(o=>!Wc(o)).reduce((o,i)=>o+(zg.test(i)?Og:i===""?Ng:Mg),r)}function Ug(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qg(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let p=n[s],h=s===n.length-1,A=o==="/"?t:t.slice(o.length)||"/",k=Wg({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},A);if(!k)return null;Object.assign(r,k.params);let E=p.route;i.push({params:r,pathname:zn([o,k.pathname]),pathnameBase:$g(zn([o,k.pathnameBase])),route:E}),k.pathnameBase!=="/"&&(o=zn([o,k.pathnameBase]))}return i}function Wg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:r.reduce((A,k,E)=>{if(k==="*"){let y=p[E]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}return A[k]=Qg(p[E]||"",k),A},{}),pathname:i,pathnameBase:s,pattern:e}}function Hg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,p)=>(r.push(p),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Yg(e){try{return decodeURI(e)}catch(t){return Zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qg(e,t){try{return decodeURIComponent(e)}catch(n){return Zr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ll(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?pn(e):e;return{pathname:n?n.startsWith("/")?n:Vg(n,t):t,search:Xg(r),hash:Zg(o)}}function Vg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function td(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _h(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=pn(e):(o=de({},e),ae(!o.pathname||!o.pathname.includes("?"),Zl("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),Zl("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),Zl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,p;if(r||s==null)p=n;else{let E=t.length-1;if(s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),E-=1;o.pathname=y.join("/")}p=E>=0?t[E]:"/"}let h=Kg(o,p),A=s&&s!=="/"&&s.endsWith("/"),k=(i||s===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(A||k)&&(h.pathname+="/"),h}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),$g=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Hc extends Error{}class Jg{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ae(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((i,s)=>r=s),this.controller=new AbortController;let o=()=>r(new Hc("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",o),this.controller.signal.addEventListener("abort",o),this.data=Object.entries(t).reduce((i,s)=>{let[p,h]=s;return Object.assign(i,{[p]:this.trackPromise(p,h)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(o=>this.onSettle(r,t,null,o),o=>this.onSettle(r,t,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,o){return this.controller.signal.aborted&&r instanceof Hc?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>o}),this.emit(!1,n),o))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(o=>{this.subscribe(i=>{t.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ae(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,o]=n;return Object.assign(t,{[r]:ev(o)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Gg(e){return e instanceof Promise&&e._tracked===!0}function ev(e){if(!Gg(e))return e;if(e._error)throw e._error;return e._data}class nd{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Th(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rh=["post","put","patch","delete"],tv=new Set(Rh),nv=["get",...Rh],rv=new Set(nv),ov=new Set([301,302,303,307,308]),iv=new Set([307,308]),Jl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},av={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Yc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lv=!zh,sv=e=>Boolean(e.hasErrorBoundary);function uv(e){ae(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||sv,n={},r=Bh(e.routes,t,void 0,n),o,i=null,s=new Set,p=null,h=null,A=null,k=e.hydrationData!=null,E=zr(r,e.history.location,e.basename),y=null;if(E==null){let R=Yt(404,{pathname:e.history.location.pathname}),{matches:O,route:N}=Zc(r);E=O,y={[N.id]:R}}let L=!E.some(R=>R.route.lazy)&&(!E.some(R=>R.route.loader)||e.hydrationData!=null),B,g={historyAction:e.history.action,location:e.history.location,matches:E,initialized:L,navigation:Jl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},T=Be.Pop,x=!1,b,C=!1,I=!1,z=[],F=[],M=new Map,X=0,pe=-1,V=new Map,Re=new Set,Ke=new Map,Pe=new Map,et=new Map,Fn=!1;function fn(){if(i=e.history.listen(N=>{let{action:J,location:S,delta:te}=N;if(Fn){Fn=!1;return}Zr(et.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=no({currentLocation:g.location,nextLocation:S,historyAction:J});if(ne&&te!=null){Fn=!0,e.history.go(te*-1),Ft(ne,{state:"blocked",location:S,proceed(){Ft(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),e.history.go(te)},reset(){Hn(ne),D({blockers:new Map(B.state.blockers)})}});return}return Ve(J,S)}),g.initialized)return B;let R=g.matches.filter(N=>N.route.lazy);if(R.length===0)return Ve(Be.Pop,g.location),B;let O=R.map(N=>Xs(N.route,t,n));return Promise.all(O).then(()=>{!g.matches.some(J=>J.route.loader)||e.hydrationData!=null?D({initialized:!0}):Ve(Be.Pop,g.location)}),B}function Un(){i&&i(),s.clear(),b&&b.abort(),g.fetchers.forEach((R,O)=>Wn(O)),g.blockers.forEach((R,O)=>Hn(O))}function K(R){return s.add(R),()=>s.delete(R)}function D(R){g=de({},g,R),s.forEach(O=>O(g))}function re(R,O){var N,J;let S=g.actionData!=null&&g.navigation.formMethod!=null&&tn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((N=R.state)==null?void 0:N._isRedirect)!==!0,te;O.actionData?Object.keys(O.actionData).length>0?te=O.actionData:te=null:S?te=g.actionData:te=null;let ne=O.loaderData?Xc(g.loaderData,O.loaderData,O.matches||[],O.errors):g.loaderData;for(let[U]of et)Hn(U);let ie=x===!0||g.navigation.formMethod!=null&&tn(g.navigation.formMethod)&&((J=R.state)==null?void 0:J._isRedirect)!==!0;o&&(r=o,o=void 0),D(de({},O,{actionData:te,loaderData:ne,historyAction:T,location:R,initialized:!0,navigation:Jl,revalidation:"idle",restoreScrollPosition:ro(R,O.matches||g.matches),preventScrollReset:ie,blockers:new Map(g.blockers)})),C||T===Be.Pop||(T===Be.Push?e.history.push(R,R.state):T===Be.Replace&&e.history.replace(R,R.state)),T=Be.Pop,x=!1,C=!1,I=!1,z=[],F=[]}async function fe(R,O){if(typeof R=="number"){e.history.go(R);return}let{path:N,submission:J,error:S}=Qc(R,O),te=g.location,ne=gi(g.location,N,O&&O.state);ne=de({},ne,e.history.encodeLocation(ne));let ie=O&&O.replace!=null?O.replace:void 0,U=Be.Push;ie===!0?U=Be.Replace:ie===!1||J!=null&&tn(J.formMethod)&&J.formAction===g.location.pathname+g.location.search&&(U=Be.Replace);let Fe=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,se=no({currentLocation:te,nextLocation:ne,historyAction:U});if(se){Ft(se,{state:"blocked",location:ne,proceed(){Ft(se,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),fe(R,O)},reset(){Hn(se),D({blockers:new Map(g.blockers)})}});return}return await Ve(U,ne,{submission:J,pendingError:S,preventScrollReset:Fe,replace:O&&O.replace})}function ve(){if(It(),D({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Ve(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Ve(T||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Ve(R,O,N){b&&b.abort(),b=null,T=R,C=(N&&N.startUninterruptedRevalidation)===!0,Ii(g.location,g.matches),x=(N&&N.preventScrollReset)===!0;let J=o||r,S=N&&N.overrideNavigation,te=zr(J,O,e.basename);if(!te){let be=Yt(404,{pathname:O.pathname}),{matches:ct,route:pt}=Zc(J);Yn(),re(O,{matches:ct,loaderData:{},errors:{[pt.id]:be}});return}if(hv(g.location,O)&&!(N&&N.submission&&tn(N.submission.formMethod))){re(O,{matches:te});return}b=new AbortController;let ne=Mo(e.history,O,b.signal,N&&N.submission),ie,U;if(N&&N.pendingError)U={[Or(te).route.id]:N.pendingError};else if(N&&N.submission&&tn(N.submission.formMethod)){let be=await dt(ne,O,N.submission,te,{replace:N.replace});if(be.shortCircuited)return;ie=be.pendingActionData,U=be.pendingActionError,S=de({state:"loading",location:O},N.submission),ne=new Request(ne.url,{signal:ne.signal})}let{shortCircuited:Fe,loaderData:se,errors:ze}=await Xt(ne,O,te,S,N&&N.submission,N&&N.replace,ie,U);Fe||(b=null,re(O,de({matches:te},ie?{actionData:ie}:{},{loaderData:se,errors:ze})))}async function dt(R,O,N,J,S){It();let te=de({state:"submitting",location:O},N);D({navigation:te});let ne,ie=Zs(J,O);if(!ie.route.action&&!ie.route.lazy)ne={type:Ne.error,error:Yt(405,{method:R.method,pathname:O.pathname,routeId:ie.route.id})};else if(ne=await No("action",R,ie,J,n,t,B.basename),R.signal.aborted)return{shortCircuited:!0};if(qr(ne)){let U;return S&&S.replace!=null?U=S.replace:U=ne.location===g.location.pathname+g.location.search,await yn(g,ne,{submission:N,replace:U}),{shortCircuited:!0}}if(ei(ne)){let U=Or(J,ie.route.id);return(S&&S.replace)!==!0&&(T=Be.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:ne.error}}}if(er(ne))throw Yt(400,{type:"defer-action"});return{pendingActionData:{[ie.route.id]:ne.data}}}async function Xt(R,O,N,J,S,te,ne,ie){let U=J;U||(U=de({state:"loading",location:O,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},S));let Fe=S||(U.formMethod&&U.formAction&&U.formData&&U.formEncType?{formMethod:U.formMethod,formAction:U.formAction,formData:U.formData,formEncType:U.formEncType}:void 0),se=o||r,[ze,be]=Kc(e.history,g,N,Fe,O,I,z,F,Ke,se,e.basename,ne,ie);if(Yn(Ue=>!(N&&N.some(ft=>ft.route.id===Ue))||ze&&ze.some(ft=>ft.route.id===Ue)),ze.length===0&&be.length===0)return re(O,de({matches:N,loaderData:{},errors:ie||null},ne?{actionData:ne}:{})),{shortCircuited:!0};if(!C){be.forEach(ft=>{let ht=g.fetchers.get(ft.key),fr={state:"loading",data:ht&&ht.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(ft.key,fr)});let Ue=ne||g.actionData;D(de({navigation:U},Ue?Object.keys(Ue).length===0?{actionData:null}:{actionData:Ue}:{},be.length>0?{fetchers:new Map(g.fetchers)}:{}))}pe=++X,be.forEach(Ue=>M.set(Ue.key,b));let{results:ct,loaderResults:pt,fetcherResults:Ut}=await Ci(g.matches,N,ze,be,R);if(R.signal.aborted)return{shortCircuited:!0};be.forEach(Ue=>M.delete(Ue.key));let Qn=Jc(ct);if(Qn)return await yn(g,Qn,{replace:te}),{shortCircuited:!0};let{loaderData:Kn,errors:Jt}=$c(g,N,ze,pt,ie,be,Ut,Pe);Pe.forEach((Ue,ft)=>{Ue.subscribe(ht=>{(ht||Ue.done)&&Pe.delete(ft)})}),cl();let pr=Bi(pe);return de({loaderData:Kn,errors:Jt},pr||be.length>0?{fetchers:new Map(g.fetchers)}:{})}function Ie(R){return g.fetchers.get(R)||av}function Lt(R,O,N,J){if(lv)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");M.has(R)&&Zt(R);let te=zr(o||r,N,e.basename);if(!te){cr(R,O,Yt(404,{pathname:N}));return}let{path:ne,submission:ie}=Qc(N,J,!0),U=Zs(te,ne);if(x=(J&&J.preventScrollReset)===!0,ie&&tn(ie.formMethod)){hn(R,O,ne,U,te,ie);return}Ke.set(R,{routeId:O,path:ne}),qn(R,O,ne,U,te,ie)}async function hn(R,O,N,J,S,te){if(It(),Ke.delete(R),!J.route.action&&!J.route.lazy){let _t=Yt(405,{method:te.formMethod,pathname:N,routeId:O});cr(R,O,_t);return}let ne=g.fetchers.get(R),ie=de({state:"submitting"},te,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(R,ie),D({fetchers:new Map(g.fetchers)});let U=new AbortController,Fe=Mo(e.history,N,U.signal,te);M.set(R,U);let se=await No("action",Fe,J,S,n,t,B.basename);if(Fe.signal.aborted){M.get(R)===U&&M.delete(R);return}if(qr(se)){M.delete(R),Re.add(R);let _t=de({state:"loading"},te,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(R,_t),D({fetchers:new Map(g.fetchers)}),yn(g,se,{isFetchActionRedirect:!0})}if(ei(se)){cr(R,O,se.error);return}if(er(se))throw Yt(400,{type:"defer-action"});let ze=g.navigation.location||g.location,be=Mo(e.history,ze,U.signal),ct=o||r,pt=g.navigation.state!=="idle"?zr(ct,g.navigation.location,e.basename):g.matches;ae(pt,"Didn't find any matches after fetcher action");let Ut=++X;V.set(R,Ut);let Qn=de({state:"loading",data:se.data},te,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(R,Qn);let[Kn,Jt]=Kc(e.history,g,pt,te,ze,I,z,F,Ke,ct,e.basename,{[J.route.id]:se.data},void 0);Jt.filter(_t=>_t.key!==R).forEach(_t=>{let io=_t.key,hr=g.fetchers.get(io),hl={state:"loading",data:hr&&hr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(io,hl),M.set(io,U)}),D({fetchers:new Map(g.fetchers)});let{results:pr,loaderResults:Ue,fetcherResults:ft}=await Ci(g.matches,pt,Kn,Jt,be);if(U.signal.aborted)return;V.delete(R),M.delete(R),Jt.forEach(_t=>M.delete(_t.key));let ht=Jc(pr);if(ht)return yn(g,ht);let{loaderData:fr,errors:oo}=$c(g,g.matches,Kn,Ue,void 0,Jt,ft,Pe),_i={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,_i);let Ti=Bi(Ut);g.navigation.state==="loading"&&Ut>pe?(ae(T,"Expected pending action"),b&&b.abort(),re(g.navigation.location,{matches:pt,loaderData:fr,errors:oo,fetchers:new Map(g.fetchers)})):(D(de({errors:oo,loaderData:Xc(g.loaderData,fr,pt,oo)},Ti?{fetchers:new Map(g.fetchers)}:{})),I=!1)}async function qn(R,O,N,J,S,te){let ne=g.fetchers.get(R),ie=de({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},te,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(R,ie),D({fetchers:new Map(g.fetchers)});let U=new AbortController,Fe=Mo(e.history,N,U.signal);M.set(R,U);let se=await No("loader",Fe,J,S,n,t,B.basename);if(er(se)&&(se=await Mh(se,Fe.signal,!0)||se),M.get(R)===U&&M.delete(R),Fe.signal.aborted)return;if(qr(se)){await yn(g,se);return}if(ei(se)){let be=Or(g.matches,O);g.fetchers.delete(R),D({fetchers:new Map(g.fetchers),errors:{[be.route.id]:se.error}});return}ae(!er(se),"Unhandled fetcher deferred data");let ze={state:"idle",data:se.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(R,ze),D({fetchers:new Map(g.fetchers)})}async function yn(R,O,N){var J;let{submission:S,replace:te,isFetchActionRedirect:ne}=N===void 0?{}:N;O.revalidate&&(I=!0);let ie=gi(R.location,O.location,de({_isRedirect:!0},ne?{_isFetchActionRedirect:!0}:{}));if(ae(ie,"Expected a location on the redirect navigation"),Ph.test(O.location)&&zh&&typeof((J=window)==null?void 0:J.location)<"u"){let ct=e.history.createURL(O.location),pt=ll(ct.pathname,e.basename||"/")==null;if(window.location.origin!==ct.origin||pt){te?window.location.replace(O.location):window.location.assign(O.location);return}}b=null;let U=te===!0?Be.Replace:Be.Push,{formMethod:Fe,formAction:se,formEncType:ze,formData:be}=R.navigation;!S&&Fe&&se&&be&&ze&&(S={formMethod:Fe,formAction:se,formEncType:ze,formData:be}),iv.has(O.status)&&S&&tn(S.formMethod)?await Ve(U,ie,{submission:de({},S,{formAction:O.location}),preventScrollReset:x}):await Ve(U,ie,{overrideNavigation:{state:"loading",location:ie,formMethod:S?S.formMethod:void 0,formAction:S?S.formAction:void 0,formEncType:S?S.formEncType:void 0,formData:S?S.formData:void 0},preventScrollReset:x})}async function Ci(R,O,N,J,S){let te=await Promise.all([...N.map(U=>No("loader",S,U,O,n,t,B.basename)),...J.map(U=>U.matches&&U.match?No("loader",Mo(e.history,U.path,S.signal),U.match,U.matches,n,t,B.basename):{type:Ne.error,error:Yt(404,{pathname:U.path})})]),ne=te.slice(0,N.length),ie=te.slice(N.length);return await Promise.all([Gc(R,N,ne,S.signal,!1,g.loaderData),Gc(R,J.map(U=>U.match),ie,S.signal,!0)]),{results:te,loaderResults:ne,fetcherResults:ie}}function It(){I=!0,z.push(...Yn()),Ke.forEach((R,O)=>{M.has(O)&&(F.push(O),Zt(O))})}function cr(R,O,N){let J=Or(g.matches,O);Wn(R),D({errors:{[J.route.id]:N},fetchers:new Map(g.fetchers)})}function Wn(R){M.has(R)&&Zt(R),Ke.delete(R),V.delete(R),Re.delete(R),g.fetchers.delete(R)}function Zt(R){let O=M.get(R);ae(O,"Expected fetch controller: "+R),O.abort(),M.delete(R)}function Si(R){for(let O of R){let J={state:"idle",data:Ie(O).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(O,J)}}function cl(){let R=[];for(let O of Re){let N=g.fetchers.get(O);ae(N,"Expected fetcher: "+O),N.state==="loading"&&(Re.delete(O),R.push(O))}Si(R)}function Bi(R){let O=[];for(let[N,J]of V)if(J<R){let S=g.fetchers.get(N);ae(S,"Expected fetcher: "+N),S.state==="loading"&&(Zt(N),V.delete(N),O.push(N))}return Si(O),O.length>0}function pl(R,O){let N=g.blockers.get(R)||Yc;return et.get(R)!==O&&et.set(R,O),N}function Hn(R){g.blockers.delete(R),et.delete(R)}function Ft(R,O){let N=g.blockers.get(R)||Yc;ae(N.state==="unblocked"&&O.state==="blocked"||N.state==="blocked"&&O.state==="blocked"||N.state==="blocked"&&O.state==="proceeding"||N.state==="blocked"&&O.state==="unblocked"||N.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+O.state),g.blockers.set(R,O),D({blockers:new Map(g.blockers)})}function no(R){let{currentLocation:O,nextLocation:N,historyAction:J}=R;if(et.size===0)return;et.size>1&&Zr(!1,"A router only supports one blocker at a time");let S=Array.from(et.entries()),[te,ne]=S[S.length-1],ie=g.blockers.get(te);if(!(ie&&ie.state==="proceeding")&&ne({currentLocation:O,nextLocation:N,historyAction:J}))return te}function Yn(R){let O=[];return Pe.forEach((N,J)=>{(!R||R(J))&&(N.cancel(),O.push(J),Pe.delete(J))}),O}function Li(R,O,N){if(p=R,A=O,h=N||(J=>J.key),!k&&g.navigation===Jl){k=!0;let J=ro(g.location,g.matches);J!=null&&D({restoreScrollPosition:J})}return()=>{p=null,A=null,h=null}}function Ii(R,O){if(p&&h&&A){let N=O.map(S=>ep(S,g.loaderData)),J=h(R,N)||R.key;p[J]=A()}}function ro(R,O){if(p&&h&&A){let N=O.map(te=>ep(te,g.loaderData)),J=h(R,N)||R.key,S=p[J];if(typeof S=="number")return S}return null}function fl(R){o=R}return B={get basename(){return e.basename},get state(){return g},get routes(){return r},initialize:fn,subscribe:K,enableScrollRestoration:Li,navigate:fe,fetch:Lt,revalidate:ve,createHref:R=>e.history.createHref(R),encodeLocation:R=>e.history.encodeLocation(R),getFetcher:Ie,deleteFetcher:Wn,dispose:Un,getBlocker:pl,deleteBlocker:Hn,_internalFetchControllers:M,_internalActiveDeferreds:Pe,_internalSetRoutes:fl},B}function dv(e){return e!=null&&"formData"in e}function Qc(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:sr(e);if(!t||!dv(t))return{path:r};if(t.formMethod&&!mv(t.formMethod))return{path:r,error:Yt(405,{method:t.formMethod})};let o;if(t.formData&&(o={formMethod:t.formMethod||"get",formAction:Nh(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},tn(o.formMethod)))return{path:r,submission:o};let i=pn(r),s=Dh(t.formData);return n&&i.search&&jh(i.search)&&s.append("index",""),i.search="?"+s,{path:sr(i),submission:o}}function cv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Kc(e,t,n,r,o,i,s,p,h,A,k,E,y){let L=y?Object.values(y)[0]:E?Object.values(E)[0]:void 0,B=e.createURL(t.location),g=e.createURL(o),T=i||B.toString()===g.toString()||B.search!==g.search,x=y?Object.keys(y)[0]:void 0,C=cv(n,x).filter((z,F)=>{if(z.route.lazy)return!0;if(z.route.loader==null)return!1;if(pv(t.loaderData,t.matches[F],z)||s.some(pe=>pe===z.route.id))return!0;let M=t.matches[F],X=z;return Vc(z,de({currentUrl:B,currentParams:M.params,nextUrl:g,nextParams:X.params},r,{actionResult:L,defaultShouldRevalidate:T||Oh(M,X)}))}),I=[];return h.forEach((z,F)=>{if(!n.some(V=>V.route.id===z.routeId))return;let M=zr(A,z.path,k);if(!M){I.push(de({key:F},z,{matches:null,match:null}));return}let X=Zs(M,z.path);if(p.includes(F)){I.push(de({key:F,matches:M,match:X},z));return}Vc(X,de({currentUrl:B,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:L,defaultShouldRevalidate:T}))&&I.push(de({key:F,matches:M,match:X},z))}),[C,I]}function pv(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Oh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Vc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Xs(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ae(o,"No route found in manifest");let i={};for(let s in r){let h=o[s]!==void 0&&s!=="hasErrorBoundary";Zr(!h,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!h&&!Tg.has(s)&&(i[s]=r[s])}Object.assign(o,i),Object.assign(o,{hasErrorBoundary:t(de({},o)),lazy:void 0})}async function No(e,t,n,r,o,i,s,p,h,A){s===void 0&&(s="/"),p===void 0&&(p=!1),h===void 0&&(h=!1);let k,E,y,L=T=>{let x,b=new Promise((C,I)=>x=I);return y=()=>x(),t.signal.addEventListener("abort",y),Promise.race([T({request:t,params:n.params,context:A}),b])};try{let T=n.route[e];if(n.route.lazy)if(T)E=(await Promise.all([L(T),Xs(n.route,i,o)]))[0];else if(await Xs(n.route,i,o),T=n.route[e],T)E=await L(T);else{if(e==="action")throw Yt(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Ne.data,data:void 0}}else ae(T,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),E=await L(T);ae(E!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(T){k=Ne.error,E=T}finally{y&&t.signal.removeEventListener("abort",y)}if(yv(E)){let T=E.status;if(ov.has(T)){let C=E.headers.get("Location");if(ae(C,"Redirects returned/thrown from loaders/actions must have a Location header"),Ph.test(C)){if(!p){let I=new URL(t.url),z=C.startsWith("//")?new URL(I.protocol+C):new URL(C),F=ll(z.pathname,s)!=null;z.origin===I.origin&&F&&(C=z.pathname+z.search+z.hash)}}else{let I=r.slice(0,r.indexOf(n)+1),z=td(I).map(M=>M.pathnameBase),F=_h(C,z,new URL(t.url).pathname);if(ae(sr(F),"Unable to resolve redirect location: "+C),s){let M=F.pathname;F.pathname=M==="/"?s:zn([s,M])}C=sr(F)}if(p)throw E.headers.set("Location",C),E;return{type:Ne.redirect,status:T,location:C,revalidate:E.headers.get("X-Remix-Revalidate")!==null}}if(h)throw{type:k||Ne.data,response:E};let x,b=E.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?x=await E.json():x=await E.text(),k===Ne.error?{type:k,error:new nd(T,E.statusText,x),headers:E.headers}:{type:Ne.data,data:x,statusCode:E.status,headers:E.headers}}if(k===Ne.error)return{type:k,error:E};if(E instanceof Jg){var B,g;return{type:Ne.deferred,deferredData:E,statusCode:(B=E.init)==null?void 0:B.status,headers:((g=E.init)==null?void 0:g.headers)&&new Headers(E.init.headers)}}return{type:Ne.data,data:E}}function Mo(e,t,n,r){let o=e.createURL(Nh(t)).toString(),i={signal:n};if(r&&tn(r.formMethod)){let{formMethod:s,formEncType:p,formData:h}=r;i.method=s.toUpperCase(),i.body=p==="application/x-www-form-urlencoded"?Dh(h):h}return new Request(o,i)}function Dh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function fv(e,t,n,r,o){let i={},s=null,p,h=!1,A={};return n.forEach((k,E)=>{let y=t[E].route.id;if(ae(!qr(k),"Cannot handle redirect results in processLoaderData"),ei(k)){let L=Or(e,y),B=k.error;r&&(B=Object.values(r)[0],r=void 0),s=s||{},s[L.route.id]==null&&(s[L.route.id]=B),i[y]=void 0,h||(h=!0,p=Th(k.error)?k.error.status:500),k.headers&&(A[y]=k.headers)}else er(k)?(o.set(y,k.deferredData),i[y]=k.deferredData.data):i[y]=k.data,k.statusCode!=null&&k.statusCode!==200&&!h&&(p=k.statusCode),k.headers&&(A[y]=k.headers)}),r&&(s=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:s,statusCode:p||200,loaderHeaders:A}}function $c(e,t,n,r,o,i,s,p){let{loaderData:h,errors:A}=fv(t,n,r,o,p);for(let k=0;k<i.length;k++){let{key:E,match:y}=i[k];ae(s!==void 0&&s[k]!==void 0,"Did not find corresponding fetcher result");let L=s[k];if(ei(L)){let B=Or(e.matches,y==null?void 0:y.route.id);A&&A[B.route.id]||(A=de({},A,{[B.route.id]:L.error})),e.fetchers.delete(E)}else if(qr(L))ae(!1,"Unhandled fetcher revalidation redirect");else if(er(L))ae(!1,"Unhandled fetcher deferred data");else{let B={state:"idle",data:L.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(E,B)}}return{loaderData:h,errors:A}}function Xc(e,t,n,r){let o=de({},t);for(let i of n){let s=i.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&i.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function Or(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Zc(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,s="Unknown Server Error",p="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&n&&r?p="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(p="defer() is not supported in actions")):e===403?(s="Forbidden",p='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",p='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?p="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(p='Invalid request method "'+o.toUpperCase()+'"')),new nd(e||500,s,new Error(p),!0)}function Jc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(qr(n))return n}}function Nh(e){let t=typeof e=="string"?pn(e):e;return sr(de({},t,{hash:""}))}function hv(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function er(e){return e.type===Ne.deferred}function ei(e){return e.type===Ne.error}function qr(e){return(e&&e.type)===Ne.redirect}function yv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function mv(e){return rv.has(e)}function tn(e){return tv.has(e)}async function Gc(e,t,n,r,o,i){for(let s=0;s<n.length;s++){let p=n[s],h=t[s];if(!h)continue;let A=e.find(E=>E.route.id===h.route.id),k=A!=null&&!Oh(A,h)&&(i&&i[h.route.id])!==void 0;er(p)&&(o||k)&&await Mh(p,r,o).then(E=>{E&&(n[s]=E||n[s])})}}async function Mh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ne.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ne.error,error:o}}return{type:Ne.data,data:e.deferredData.data}}}function jh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ep(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Zs(e,t){let n=typeof t=="string"?pn(t).search:t.search;if(e[e.length-1].route.index&&jh(n||""))return e[e.length-1];let r=td(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Av(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const gv=typeof Object.is=="function"?Object.is:Av,{useState:vv,useEffect:bv,useLayoutEffect:wv,useDebugValue:Ev}=es;function xv(e,t,n){const r=t(),[{inst:o},i]=vv({inst:{value:r,getSnapshot:t}});return wv(()=>{o.value=r,o.getSnapshot=t,Gl(o)&&i({inst:o})},[e,r,t]),bv(()=>(Gl(o)&&i({inst:o}),e(()=>{Gl(o)&&i({inst:o})})),[e]),Ev(r),r}function Gl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!gv(n,r)}catch{return!0}}function kv(e,t,n){return t()}const Cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sv=!Cv,Bv=Sv?kv:xv,Lv="useSyncExternalStore"in es?(e=>e.useSyncExternalStore)(es):Bv,rd=Q.createContext(null),od=Q.createContext(null),id=Q.createContext(null),sl=Q.createContext(null),ki=Q.createContext({outlet:null,matches:[]}),Fh=Q.createContext(null);function Js(){return Js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Js.apply(this,arguments)}function ul(){return Q.useContext(sl)!=null}function Uh(){return ul()||ae(!1),Q.useContext(sl).location}function Iv(){ul()||ae(!1);let{basename:e,navigator:t}=Q.useContext(id),{matches:n}=Q.useContext(ki),{pathname:r}=Uh(),o=JSON.stringify(td(n).map(p=>p.pathnameBase)),i=Q.useRef(!1);return Q.useEffect(()=>{i.current=!0}),Q.useCallback(function(p,h){if(h===void 0&&(h={}),!i.current)return;if(typeof p=="number"){t.go(p);return}let A=_h(p,JSON.parse(o),r,h.relative==="path");e!=="/"&&(A.pathname=A.pathname==="/"?e:zn([e,A.pathname])),(h.replace?t.replace:t.push)(A,h.state,h)},[e,t,o,r])}function _v(e,t){ul()||ae(!1);let{navigator:n}=Q.useContext(id),r=Q.useContext(od),{matches:o}=Q.useContext(ki),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let p=i?i.pathnameBase:"/";i&&i.route;let h=Uh(),A;if(t){var k;let g=typeof t=="string"?pn(t):t;p==="/"||(k=g.pathname)!=null&&k.startsWith(p)||ae(!1),A=g}else A=h;let E=A.pathname||"/",y=p==="/"?E:E.slice(p.length)||"/",L=zr(e,{pathname:y}),B=zv(L&&L.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:zn([p,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?p:zn([p,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,r||void 0);return t&&B?Q.createElement(sl.Provider,{value:{location:Js({pathname:"/",search:"",hash:"",state:null,key:"default"},A),navigationType:Be.Pop}},B):B}function Tv(){let e=Mv(),t=Th(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},t),n?Q.createElement("pre",{style:o},n):null,i)}class Rv extends Q.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?Q.createElement(ki.Provider,{value:this.props.routeContext},Q.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pv(e){let{routeContext:t,match:n,children:r}=e,o=Q.useContext(rd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),Q.createElement(ki.Provider,{value:t},r)}function zv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));i>=0||ae(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,s,p)=>{let h=s.route.id?o==null?void 0:o[s.route.id]:null,A=null;n&&(s.route.ErrorBoundary?A=Q.createElement(s.route.ErrorBoundary,null):s.route.errorElement?A=s.route.errorElement:A=Q.createElement(Tv,null));let k=t.concat(r.slice(0,p+1)),E=()=>{let y=i;return h?y=A:s.route.Component?y=Q.createElement(s.route.Component,null):s.route.element&&(y=s.route.element),Q.createElement(Pv,{match:s,routeContext:{outlet:i,matches:k},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||p===0)?Q.createElement(Rv,{location:n.location,component:A,error:h,children:E(),routeContext:{outlet:null,matches:k}}):E()},null)}var tp;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(tp||(tp={}));var Ha;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ha||(Ha={}));function Ov(e){let t=Q.useContext(od);return t||ae(!1),t}function Dv(e){let t=Q.useContext(ki);return t||ae(!1),t}function Nv(e){let t=Dv(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Mv(){var e;let t=Q.useContext(Fh),n=Ov(Ha.UseRouteError),r=Nv(Ha.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function jv(e){let{fallbackElement:t,router:n}=e,r=Q.useCallback(()=>n.state,[n]),o=Lv(n.subscribe,r,r),i=Q.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,A,k)=>n.navigate(h,{state:A,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(h,A,k)=>n.navigate(h,{replace:!0,state:A,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[n]),s=n.basename||"/",p=Q.useMemo(()=>({router:n,navigator:i,static:!1,basename:s}),[n,i,s]);return Q.createElement(Q.Fragment,null,Q.createElement(rd.Provider,{value:p},Q.createElement(od.Provider,{value:o},Q.createElement(Uv,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?Q.createElement(qv,null):t))),null)}function Fv(e){ae(!1)}function Uv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Be.Pop,navigator:i,static:s=!1}=e;ul()&&ae(!1);let p=t.replace(/^\/*/,"/"),h=Q.useMemo(()=>({basename:p,navigator:i,static:s}),[p,i,s]);typeof r=="string"&&(r=pn(r));let{pathname:A="/",search:k="",hash:E="",state:y=null,key:L="default"}=r,B=Q.useMemo(()=>{let g=ll(A,p);return g==null?null:{location:{pathname:g,search:k,hash:E,state:y,key:L},navigationType:o}},[p,A,k,E,y,L,o]);return B==null?null:Q.createElement(id.Provider,{value:h},Q.createElement(sl.Provider,{children:n,value:B}))}function qv(e){let{children:t,location:n}=e,r=Q.useContext(rd),o=r&&!t?r.router.routes:Gs(t);return _v(o,n)}var np;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(np||(np={}));new Promise(()=>{});function Gs(e,t){t===void 0&&(t=[]);let n=[];return Q.Children.forEach(e,(r,o)=>{if(!Q.isValidElement(r))return;if(r.type===Q.Fragment){n.push.apply(n,Gs(r.props.children,t));return}r.type!==Fv&&ae(!1),!r.props.index||!r.props.children||ae(!1);let i=[...t,o],s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Gs(r.props.children,i)),n.push(s)}),n}function Wv(e){return Boolean(e.ErrorBoundary)||Boolean(e.errorElement)}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eu.apply(this,arguments)}function Hv(e,t){return uv({basename:t==null?void 0:t.basename,history:Lg({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Yv(),routes:e,detectErrorBoundary:Wv}).initialize()}function Yv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=eu({},t,{errors:Qv(t.errors)})),t}function Qv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new nd(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",n[r]=i}else n[r]=o;return n}var rp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(rp||(rp={}));var op;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function qh(){const e=sessionStorage.getItem("user");return e!=null?JSON.parse(e):null}function Kv(e){sessionStorage.setItem("user",JSON.stringify(e))}function Vv(){sessionStorage.removeItem("user")}const $v={user:null,logIn:e=>{},logOut:()=>{}},ad=Q.createContext($v);function ip({children:e}){const[t,n]=Q.useState(null),r=Iv();Q.useEffect(()=>{const p=qh();p!==null?(n(p),r("/")):(n(null),r("/login"))},[]);function o(p){Kv(p),n(p),r("/")}function i(){Vv(),n(null),r("/login")}const s={user:t,logIn:o,logOut:i};return ee.jsx(ad.Provider,{value:s,children:e})}var tu={},Xv={get exports(){return tu},set exports(e){tu=e}};(function(e,t){(function(n,r){e.exports=r()})(self,()=>(()=>{var n={916:(s,p,h)=>{var A=h(471);s.exports=function(k){var E,y="",L=(k=k||{}).video,B=k.options,g=A.$escape,T=k.tran,x=k.icons,b=k.index,C=A.$each;return k.$value,k.$index,y+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,E=h(568)(L),y+=E,y+=`
    `,B.logo&&(y+=`
    <div class="dplayer-logo">
        <img src="`,y+=g(B.logo),y+=`">
    </div>
    `),y+=`
    <div class="dplayer-danmaku"`,B.danmaku&&B.danmaku.bottom&&(y+=' style="margin-bottom:',y+=g(B.danmaku.bottom),y+='"'),y+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,B.danmaku&&(y+=`
        <span class="dplayer-danloading">`,y+=g(T("danmaku-loading")),y+=`</span>
        `),y+=`
        <span class="diplayer-loading-icon">`,y+=x.loading,y+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,y+=g(T("setting")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=x.pallette,y+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,y+=g(T("set-danmaku-color")),y+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=g(b),y+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,y+=g(T("set-danmaku-type")),y+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=g(b),y+=`" value="1">
                    <span>`,y+=g(T("top")),y+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=g(b),y+=`" value="0" checked>
                    <span>`,y+=g(T("rolling")),y+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=g(b),y+=`" value="2">
                    <span>`,y+=g(T("bottom")),y+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,y+=g(T("input-danmaku-enter")),y+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,y+=g(T("send")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=x.send,y+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,y+=x.play,y+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,y+=x.volumeDown,y+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,y+=g(B.theme),y+=`;">
                        <span class="dplayer-thumb" style="background: `,y+=g(B.theme),y+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,B.live&&(y+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,y+=g(B.theme),y+=';"></span>',y+=g(T("live")),y+=`</span>
        `),y+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,B.video.quality&&(y+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,y+=g(B.video.quality[B.video.defaultQuality].name),y+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,C(B.video.quality,function(I,z){y+=`
                    <div class="dplayer-quality-item" data-index="`,y+=g(z),y+='">',y+=g(I.name),y+=`</div>
                `}),y+=`
                </div>
            </div>
        </div>
        `),y+=`
        `,B.screenshot&&(y+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,y+=g(T("screenshot")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=x.camera,y+=`</span>
        </div>
        `),y+=`
        `,B.airplay&&(y+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,y+=g(T("airplay")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=x.airplay,y+=`</span>
        </div>
        `),y+=`
        `,B.chromecast&&(y+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,y+=g(T("chromecast")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=x.chromecast,y+=`</span>
        </div>
        `),y+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,y+=g(T("send-danmaku")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.comment,y+=`</span>
            </button>
        </div>
        `,B.subtitle&&(y+=`
        `,typeof B.subtitle.url=="string"?(y+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,y+=g(T("hide-subs")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.subtitle,y+=`</span>
            </button>
        </div>
        `):(y+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,y+=g(T("subtitle")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.subtitle,y+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,C(B.subtitle.url,function(I,z){y+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,y+=g(I.url),y+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,y+=g(I.lang?I.name?I.name+" ("+T(I.lang)+")":T(I.lang):I.name),y+=`</span>
                        </div>
                    `}),y+=`
                </div>
            </div>
        </div>
        `),y+=`
        `),y+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,y+=g(T("setting")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.setting,y+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,y+=g(T("speed")),y+=`</span>
                        <div class="dplayer-toggle">`,y+=x.right,y+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,y+=g(T("loop")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,y+=g(T("show-danmaku")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,y+=g(T("unlimited-danmaku")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,y+=g(T("opacity-danmaku")),y+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,C(B.playbackSpeed,function(I,z){y+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,y+=g(I),y+=`">
                            <span class="dplayer-label">`,y+=g(I===1?T("normal"):I),y+=`</span>
                        </div>
                    `}),y+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,y+=g(T("web-fullscreen")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.fullWeb,y+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,y+=g(T("fullscreen")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=x.full,y+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,y+=g(B.theme),y+=`">
                <span class="dplayer-thumb" style="background: `,y+=g(B.theme),y+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,B.danmaku&&(y+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),y+=`
</div>
<div class="dplayer-menu">
    `,C(B.contextmenu,function(I,z){y+=`
        <div class="dplayer-menu-item">
            <a`,I.link&&(y+=' target="_blank"'),y+=' href="',y+=g(I.link||"javascript:void(0);"),y+='">',I.key&&(y+=" ",y+=g(T(I.key))),I.text&&(y+=" ",y+=g(I.text)),y+=`</a>
        </div>
    `}),y+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,y+=x.play,y+=`
</button>`}},568:(s,p,h)=>{var A=h(471);s.exports=function(k){var E="",y=(k=k||{}).enableSubtitle,L=k.subtitle,B=k.current,g=k.airplay,T=k.pic,x=A.$escape,b=k.screenshot,C=k.preload,I=k.url;return y=L&&L.type==="webvtt",E+=`
<video
    class="dplayer-video `,B&&(E+="dplayer-video-current"),E+=`"
    webkit-playsinline
    `,g&&(E+=' x-webkit-airplay="allow" '),E+=`
    playsinline
    `,T&&(E+='poster="',E+=x(T),E+='"'),E+=`
    `,(b||y)&&(E+='crossorigin="anonymous"'),E+=`
    `,C&&(E+='preload="',E+=x(C),E+='"'),E+=`
    `,g?E+=`
    nosrc
    `:I&&(E+=`
    src="`,E+=x(I),E+=`"
    `),E+=`
    >
    `,g&&(E+=`
    <source src="`,E+=x(I),E+=`">
    `),E+=`
    `,y&&(E+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,E+=x(typeof L.url=="string"?L.url:L.url[L.index].url),E+=`"></track>
    `),E+`
</video>`}},49:(s,p,h)=>{h.d(p,{Z:()=>L});var A=h(415),k=h.n(A),E=h(352),y=h.n(E)()(k());y.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const L=y},685:(s,p,h)=>{h.d(p,{Z:()=>C});var A=h(415),k=h.n(A),E=h(352),y=h.n(E),L=h(49),B=h(80),g=h.n(B),T=new URL(h(831),h.b),x=y()(k());x.i(L.Z);var b=g()(T);x.push([s.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+b+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const C=x},856:s=>{var p=[];function h(E){for(var y=-1,L=0;L<p.length;L++)if(p[L].identifier===E){y=L;break}return y}function A(E,y){for(var L={},B=[],g=0;g<E.length;g++){var T=E[g],x=y.base?T[0]+y.base:T[0],b=L[x]||0,C="".concat(x," ").concat(b);L[x]=b+1;var I=h(C),z={css:T[1],media:T[2],sourceMap:T[3],supports:T[4],layer:T[5]};if(I!==-1)p[I].references++,p[I].updater(z);else{var F=k(z,y);y.byIndex=g,p.splice(g,0,{identifier:C,updater:F,references:1})}B.push(C)}return B}function k(E,y){var L=y.domAPI(y);return L.update(E),function(B){if(B){if(B.css===E.css&&B.media===E.media&&B.sourceMap===E.sourceMap&&B.supports===E.supports&&B.layer===E.layer)return;L.update(E=B)}else L.remove()}}s.exports=function(E,y){var L=A(E=E||[],y=y||{});return function(B){B=B||[];for(var g=0;g<L.length;g++){var T=h(L[g]);p[T].references--}for(var x=A(B,y),b=0;b<L.length;b++){var C=h(L[b]);p[C].references===0&&(p[C].updater(),p.splice(C,1))}L=x}}},370:s=>{var p={};s.exports=function(h,A){var k=function(E){if(p[E]===void 0){var y=document.querySelector(E);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch{y=null}p[E]=y}return p[E]}(h);if(!k)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");k.appendChild(A)}},278:s=>{s.exports=function(p){var h=document.createElement("style");return p.setAttributes(h,p.attributes),p.insert(h,p.options),h}},458:(s,p,h)=>{s.exports=function(A){var k=h.nc;k&&A.setAttribute("nonce",k)}},470:s=>{s.exports=function(p){var h=p.insertStyleElement(p);return{update:function(A){(function(k,E,y){var L="";y.supports&&(L+="@supports (".concat(y.supports,") {")),y.media&&(L+="@media ".concat(y.media," {"));var B=y.layer!==void 0;B&&(L+="@layer".concat(y.layer.length>0?" ".concat(y.layer):""," {")),L+=y.css,B&&(L+="}"),y.media&&(L+="}"),y.supports&&(L+="}");var g=y.sourceMap;g&&typeof btoa<"u"&&(L+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),E.styleTagTransform(L,k,E.options)})(h,p,A)},remove:function(){(function(A){if(A.parentNode===null)return!1;A.parentNode.removeChild(A)})(h)}}}},488:s=>{s.exports=function(p,h){if(h.styleSheet)h.styleSheet.cssText=p;else{for(;h.firstChild;)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(p))}}},251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(s,p,h)=>{var A=typeof self<"u"?self:typeof window<"u"?window:h.g!==void 0?h.g:{},k=Object.create(A),E=/["&'<>]/;function y(L){return typeof L!="string"&&(L=L==null?"":typeof L=="function"?y(L.call(L)):JSON.stringify(L)),L}k.$escape=function(L){return function(B){var g=""+B,T=E.exec(g);if(!T)return B;var x="",b=void 0,C=void 0,I=void 0;for(b=T.index,C=0;b<g.length;b++){switch(g.charCodeAt(b)){case 34:I="&#34;";break;case 38:I="&#38;";break;case 39:I="&#39;";break;case 60:I="&#60;";break;case 62:I="&#62;";break;default:continue}C!==b&&(x+=g.substring(C,b)),C=b+1,x+=I}return C!==b?x+g.substring(C,b):x}(y(L))},k.$each=function(L,B){if(Array.isArray(L))for(var g=0,T=L.length;g<T;g++)B(L[g],g);else for(var x in L)B(L[x],x)},s.exports=k},471:(s,p,h)=>{s.exports=h(897)},352:s=>{s.exports=function(p){var h=[];return h.toString=function(){return this.map(function(A){var k="",E=A[5]!==void 0;return A[4]&&(k+="@supports (".concat(A[4],") {")),A[2]&&(k+="@media ".concat(A[2]," {")),E&&(k+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),k+=p(A),E&&(k+="}"),A[2]&&(k+="}"),A[4]&&(k+="}"),k}).join("")},h.i=function(A,k,E,y,L){typeof A=="string"&&(A=[[null,A,void 0]]);var B={};if(E)for(var g=0;g<this.length;g++){var T=this[g][0];T!=null&&(B[T]=!0)}for(var x=0;x<A.length;x++){var b=[].concat(A[x]);E&&B[b[0]]||(L!==void 0&&(b[5]===void 0||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=L),k&&(b[2]&&(b[1]="@media ".concat(b[2]," {").concat(b[1],"}")),b[2]=k),y&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=y):b[4]="".concat(y)),h.push(b))}},h}},80:s=>{s.exports=function(p,h){return h||(h={}),p&&(p=String(p.__esModule?p.default:p),/^['"].*['"]$/.test(p)&&(p=p.slice(1,-1)),h.hash&&(p+=h.hash),/["'() \t\n]|(%20)/.test(p)||h.needQuotes?'"'.concat(p.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):p)}},415:s=>{s.exports=function(p){var h=p[1],A=p[3];if(!A)return h;if(typeof btoa=="function"){var k=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),E="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(k),y="/*# ".concat(E," */");return[h].concat([y]).join(`
`)}return[h].join(`
`)}},937:s=>{function p(h){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},p(h)}s.exports=(typeof self>"u"?"undefined":p(self))=="object"?self.FormData:window.FormData},831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function o(s){var p=r[s];if(p!==void 0)return p.exports;var h=r[s]={id:s,exports:{}};return n[s](h,h.exports,o),h.exports}o.m=n,o.n=s=>{var p=s&&s.__esModule?()=>s.default:()=>s;return o.d(p,{a:p}),p},o.d=(s,p)=>{for(var h in p)o.o(p,h)&&!o.o(s,h)&&Object.defineProperty(s,h,{enumerable:!0,get:p[h]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(s,p)=>Object.prototype.hasOwnProperty.call(s,p),o.b=document.baseURI||self.location.href,o.nc=void 0;var i={};return(()=>{o.d(i,{default:()=>Jm});var s=o(856),p=o.n(s),h=o(470),A=o.n(h),k=o(370),E=o.n(k),y=o(458),L=o.n(y),B=o(278),g=o.n(B),T=o(488),x=o.n(T),b=o(685),C={};C.styleTagTransform=x(),C.setAttributes=L(),C.insert=E().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=g(),p()(b.Z,C),b.Z&&b.Z.locals&&b.Z.locals;function I(l){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},I(l)}function z(l,u){this.name="AggregateError",this.errors=l,this.message=u||""}z.prototype=Error.prototype;function F(l){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},F(l)}var M=setTimeout;function X(l){return Boolean(l&&l.length!==void 0)}function pe(){}function V(l){if(!(this instanceof V))throw new TypeError("Promises must be constructed via new");if(typeof l!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],fn(l,this)}function Re(l,u){for(;l._state===3;)l=l._value;l._state!==0?(l._handled=!0,V._immediateFn(function(){var f=l._state===1?u.onFulfilled:u.onRejected;if(f!==null){var a;try{a=f(l._value)}catch(d){return void Pe(u.promise,d)}Ke(u.promise,a)}else(l._state===1?Ke:Pe)(u.promise,l._value)})):l._deferreds.push(u)}function Ke(l,u){try{if(u===l)throw new TypeError("A promise cannot be resolved with itself.");if(u&&(F(u)==="object"||typeof u=="function")){var f=u.then;if(u instanceof V)return l._state=3,l._value=u,void et(l);if(typeof f=="function")return void fn((a=f,d=u,function(){a.apply(d,arguments)}),l)}l._state=1,l._value=u,et(l)}catch(c){Pe(l,c)}var a,d}function Pe(l,u){l._state=2,l._value=u,et(l)}function et(l){l._state===2&&l._deferreds.length===0&&V._immediateFn(function(){l._handled||V._unhandledRejectionFn(l._value)});for(var u=0,f=l._deferreds.length;u<f;u++)Re(l,l._deferreds[u]);l._deferreds=null}function Fn(l,u,f){this.onFulfilled=typeof l=="function"?l:null,this.onRejected=typeof u=="function"?u:null,this.promise=f}function fn(l,u){var f=!1;try{l(function(a){f||(f=!0,Ke(u,a))},function(a){f||(f=!0,Pe(u,a))})}catch(a){if(f)return;f=!0,Pe(u,a)}}V.prototype.catch=function(l){return this.then(null,l)},V.prototype.then=function(l,u){var f=new this.constructor(pe);return Re(this,new Fn(l,u,f)),f},V.prototype.finally=function(l){var u=this.constructor;return this.then(function(f){return u.resolve(l()).then(function(){return f})},function(f){return u.resolve(l()).then(function(){return u.reject(f)})})},V.all=function(l){return new V(function(u,f){if(!X(l))return f(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(l);if(a.length===0)return u([]);var d=a.length;function c(v,w){try{if(w&&(F(w)==="object"||typeof w=="function")){var _=w.then;if(typeof _=="function")return void _.call(w,function(P){c(v,P)},f)}a[v]=w,--d==0&&u(a)}catch(P){f(P)}}for(var m=0;m<a.length;m++)c(m,a[m])})},V.any=function(l){var u=this;return new u(function(f,a){if(!l||l.length===void 0)return a(new TypeError("Promise.any accepts an array"));var d=Array.prototype.slice.call(l);if(d.length===0)return a();for(var c=[],m=0;m<d.length;m++)try{u.resolve(d[m]).then(f).catch(function(v){c.push(v),c.length===d.length&&a(new z(c,"All promises were rejected"))})}catch(v){a(v)}})},V.allSettled=function(l){return new this(function(u,f){if(!l||l.length===void 0)return f(new TypeError(I(l)+" "+l+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var a=Array.prototype.slice.call(l);if(a.length===0)return u([]);var d=a.length;function c(v,w){if(w&&(I(w)==="object"||typeof w=="function")){var _=w.then;if(typeof _=="function")return void _.call(w,function(P){c(v,P)},function(P){a[v]={status:"rejected",reason:P},--d==0&&u(a)})}a[v]={status:"fulfilled",value:w},--d==0&&u(a)}for(var m=0;m<a.length;m++)c(m,a[m])})},V.resolve=function(l){return l&&F(l)==="object"&&l.constructor===V?l:new V(function(u){u(l)})},V.reject=function(l){return new V(function(u,f){f(l)})},V.race=function(l){return new V(function(u,f){if(!X(l))return f(new TypeError("Promise.race accepts an array"));for(var a=0,d=l.length;a<d;a++)V.resolve(l[a]).then(u,f)})},V._immediateFn=typeof setImmediate=="function"&&function(l){setImmediate(l)}||function(l){M(l,0)},V._unhandledRejectionFn=function(l){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",l)};const Un=V;var K=/mobile/i.test(window.navigator.userAgent);const D={secondToTime:function(l){if((l=l||0)===0||l===1/0||l.toString()==="NaN")return"00:00";var u=Math.floor(l/3600),f=Math.floor((l-3600*u)/60),a=Math.floor(l-3600*u-60*f);return(u>0?[u,f,a]:[f,a]).map(function(d){return d<10?"0"+d:""+d}).join(":")},getElementViewLeft:function(l){var u=l.offsetLeft,f=l.offsetParent,a=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;f!==null&&f!==l;)u+=f.offsetLeft,f=f.offsetParent;else for(;f!==null;)u+=f.offsetLeft,f=f.offsetParent;return u-a},getBoundingClientRectViewLeft:function(l){var u=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(l.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var f=document.createElement("div");f.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(f),this.getBoundingClientRectViewLeft.offset=-f.getBoundingClientRect().top-u,document.body.removeChild(f),f=null}var a=l.getBoundingClientRect(),d=this.getBoundingClientRectViewLeft.offset;return a.left+d}return this.getElementViewLeft(l)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(l){var u=l.left,f=u===void 0?0:u,a=l.top,d=a===void 0?0:a;this.isFirefox?(document.documentElement.scrollLeft=f,document.documentElement.scrollTop=d):window.scrollTo(f,d)},isMobile:K,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(l,u){localStorage.setItem(l,u)},get:function(l){return localStorage.getItem(l)}},nameMap:{dragStart:K?"touchstart":"mousedown",dragMove:K?"touchmove":"mousemove",dragEnd:K?"touchend":"mouseup"},color2Number:function(l){return l[0]==="#"&&(l=l.substr(1)),l.length===3&&(l="".concat(l[0]).concat(l[0]).concat(l[1]).concat(l[1]).concat(l[2]).concat(l[2])),parseInt(l,16)+0&16777215},number2Color:function(l){return"#"+("00000"+l.toString(16)).slice(-6)},number2Type:function(l){switch(l){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function re(l,u){return function(){return l.apply(u,arguments)}}function fe(l){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},fe(l)}var ve,Ve=Object.prototype.toString,dt=Object.getPrototypeOf,Xt=(ve=Object.create(null),function(l){var u=Ve.call(l);return ve[u]||(ve[u]=u.slice(8,-1).toLowerCase())}),Ie=function(l){return l=l.toLowerCase(),function(u){return Xt(u)===l}},Lt=function(l){return function(u){return fe(u)===l}},hn=Array.isArray,qn=Lt("undefined"),yn=Ie("ArrayBuffer"),Ci=Lt("string"),It=Lt("function"),cr=Lt("number"),Wn=function(l){return l!==null&&fe(l)==="object"},Zt=function(l){if(Xt(l)!=="object")return!1;var u=dt(l);return!(u!==null&&u!==Object.prototype&&Object.getPrototypeOf(u)!==null||Symbol.toStringTag in l||Symbol.iterator in l)},Si=Ie("Date"),cl=Ie("File"),Bi=Ie("Blob"),pl=Ie("FileList"),Hn=Ie("URLSearchParams");function Ft(l,u){var f,a,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=d.allOwnKeys,m=c!==void 0&&c;if(l!=null)if(fe(l)!=="object"&&(l=[l]),hn(l))for(f=0,a=l.length;f<a;f++)u.call(null,l[f],f,l);else{var v,w=m?Object.getOwnPropertyNames(l):Object.keys(l),_=w.length;for(f=0;f<_;f++)v=w[f],u.call(null,l[v],v,l)}}function no(l,u){u=u.toLowerCase();for(var f,a=Object.keys(l),d=a.length;d-- >0;)if(u===(f=a[d]).toLowerCase())return f;return null}var Yn,Li,Ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:e0,ro=function(l){return!qn(l)&&l!==Ii},fl=(Yn=typeof Uint8Array<"u"&&dt(Uint8Array),function(l){return Yn&&l instanceof Yn}),R=Ie("HTMLFormElement"),O=(Li=Object.prototype.hasOwnProperty,function(l,u){return Li.call(l,u)}),N=Ie("RegExp"),J=function(l,u){var f=Object.getOwnPropertyDescriptors(l),a={};Ft(f,function(d,c){u(d,c,l)!==!1&&(a[c]=d)}),Object.defineProperties(l,a)};const S={isArray:hn,isArrayBuffer:yn,isBuffer:function(l){return l!==null&&!qn(l)&&l.constructor!==null&&!qn(l.constructor)&&It(l.constructor.isBuffer)&&l.constructor.isBuffer(l)},isFormData:function(l){var u="[object FormData]";return l&&(typeof FormData=="function"&&l instanceof FormData||Ve.call(l)===u||It(l.toString)&&l.toString()===u)},isArrayBufferView:function(l){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(l):l&&l.buffer&&yn(l.buffer)},isString:Ci,isNumber:cr,isBoolean:function(l){return l===!0||l===!1},isObject:Wn,isPlainObject:Zt,isUndefined:qn,isDate:Si,isFile:cl,isBlob:Bi,isRegExp:N,isFunction:It,isStream:function(l){return Wn(l)&&It(l.pipe)},isURLSearchParams:Hn,isTypedArray:fl,isFileList:pl,forEach:Ft,merge:function l(){for(var u=ro(this)&&this||{},f=u.caseless,a={},d=function(v,w){var _=f&&no(a,w)||w;Zt(a[_])&&Zt(v)?a[_]=l(a[_],v):Zt(v)?a[_]=l({},v):hn(v)?a[_]=v.slice():a[_]=v},c=0,m=arguments.length;c<m;c++)arguments[c]&&Ft(arguments[c],d);return a},extend:function(l,u,f){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=a.allOwnKeys;return Ft(u,function(c,m){f&&It(c)?l[m]=re(c,f):l[m]=c},{allOwnKeys:d}),l},trim:function(l){return l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(l){return l.charCodeAt(0)===65279&&(l=l.slice(1)),l},inherits:function(l,u,f,a){l.prototype=Object.create(u.prototype,a),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:u.prototype}),f&&Object.assign(l.prototype,f)},toFlatObject:function(l,u,f,a){var d,c,m,v={};if(u=u||{},l==null)return u;do{for(c=(d=Object.getOwnPropertyNames(l)).length;c-- >0;)m=d[c],a&&!a(m,l,u)||v[m]||(u[m]=l[m],v[m]=!0);l=f!==!1&&dt(l)}while(l&&(!f||f(l,u))&&l!==Object.prototype);return u},kindOf:Xt,kindOfTest:Ie,endsWith:function(l,u,f){l=String(l),(f===void 0||f>l.length)&&(f=l.length),f-=u.length;var a=l.indexOf(u,f);return a!==-1&&a===f},toArray:function(l){if(!l)return null;if(hn(l))return l;var u=l.length;if(!cr(u))return null;for(var f=new Array(u);u-- >0;)f[u]=l[u];return f},forEachEntry:function(l,u){for(var f,a=(l&&l[Symbol.iterator]).call(l);(f=a.next())&&!f.done;){var d=f.value;u.call(l,d[0],d[1])}},matchAll:function(l,u){for(var f,a=[];(f=l.exec(u))!==null;)a.push(f);return a},isHTMLForm:R,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:J,freezeMethods:function(l){J(l,function(u,f){if(It(l)&&["arguments","caller","callee"].indexOf(f)!==-1)return!1;var a=l[f];It(a)&&(u.enumerable=!1,"writable"in u?u.writable=!1:u.set||(u.set=function(){throw Error("Can not rewrite read-only method '"+f+"'")}))})},toObjectSet:function(l,u){var f={},a=function(d){d.forEach(function(c){f[c]=!0})};return hn(l)?a(l):a(String(l).split(u)),f},toCamelCase:function(l){return l.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(u,f,a){return f.toUpperCase()+a})},noop:function(){},toFiniteNumber:function(l,u){return l=+l,Number.isFinite(l)?l:u},findKey:no,global:Ii,isContextDefined:ro,toJSONObject:function(l){var u=new Array(10);return function f(a,d){if(Wn(a)){if(u.indexOf(a)>=0)return;if(!("toJSON"in a)){u[d]=a;var c=hn(a)?[]:{};return Ft(a,function(m,v){var w=f(m,d+1);!qn(w)&&(c[v]=w)}),u[d]=void 0,c}}return a}(l,0)}};function te(l,u,f,a,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",u&&(this.code=u),f&&(this.config=f),a&&(this.request=a),d&&(this.response=d)}S.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ne=te.prototype,ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(l){ie[l]={value:l}}),Object.defineProperties(te,ie),Object.defineProperty(ne,"isAxiosError",{value:!0}),te.from=function(l,u,f,a,d,c){var m=Object.create(ne);return S.toFlatObject(l,m,function(v){return v!==Error.prototype},function(v){return v!=="isAxiosError"}),te.call(m,l.message,u,f,a,d),m.cause=l,m.name=l.name,c&&Object.assign(m,c),m};const U=te,Fe=o(937);function se(l){return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},se(l)}function ze(l){return S.isPlainObject(l)||S.isArray(l)}function be(l){return S.endsWith(l,"[]")?l.slice(0,-2):l}function ct(l,u,f){return l?l.concat(u).map(function(a,d){return a=be(a),!f&&d?"["+a+"]":a}).join(f?".":""):u}var pt=S.toFlatObject(S,{},null,function(l){return/^is[A-Z]/.test(l)});const Ut=function(l,u,f){if(!S.isObject(l))throw new TypeError("target must be an object");u=u||new(Fe||FormData);var a,d=(f=S.toFlatObject(f,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,Y){return!S.isUndefined(Y[$])})).metaTokens,c=f.visitor||P,m=f.dots,v=f.indexes,w=(f.Blob||typeof Blob<"u"&&Blob)&&(a=u)&&S.isFunction(a.append)&&a[Symbol.toStringTag]==="FormData"&&a[Symbol.iterator];if(!S.isFunction(c))throw new TypeError("visitor must be a function");function _($){if($===null)return"";if(S.isDate($))return $.toISOString();if(!w&&S.isBlob($))throw new U("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer($)||S.isTypedArray($)?w&&typeof Blob=="function"?new Blob([$]):Buffer.from($):$}function P($,Y,W){var G=$;if($&&!W&&se($)==="object"){if(S.endsWith(Y,"{}"))Y=d?Y:Y.slice(0,-2),$=JSON.stringify($);else if(S.isArray($)&&function(oe){return S.isArray(oe)&&!oe.some(ze)}($)||S.isFileList($)||S.endsWith(Y,"[]")&&(G=S.toArray($)))return Y=be(Y),G.forEach(function(oe,De){!S.isUndefined(oe)&&oe!==null&&u.append(v===!0?ct([Y],De,m):v===null?Y:Y+"[]",_(oe))}),!1}return!!ze($)||(u.append(ct(W,Y,m),_($)),!1)}var q=[],H=Object.assign(pt,{defaultVisitor:P,convertValue:_,isVisitable:ze});if(!S.isObject(l))throw new TypeError("data must be an object");return function $(Y,W){if(!S.isUndefined(Y)){if(q.indexOf(Y)!==-1)throw Error("Circular reference detected in "+W.join("."));q.push(Y),S.forEach(Y,function(G,oe){(!(S.isUndefined(G)||G===null)&&c.call(u,G,S.isString(oe)?oe.trim():oe,W,H))===!0&&$(G,W?W.concat(oe):[oe])}),q.pop()}}(l),u};function Qn(l){var u={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(f){return u[f]})}function Kn(l,u){this._pairs=[],l&&Ut(l,this,u)}var Jt=Kn.prototype;Jt.append=function(l,u){this._pairs.push([l,u])},Jt.toString=function(l){var u=l?function(f){return l.call(this,f,Qn)}:Qn;return this._pairs.map(function(f){return u(f[0])+"="+u(f[1])},"").join("&")};const pr=Kn;function Ue(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ft(l,u,f){if(!u)return l;var a,d=f&&f.encode||Ue,c=f&&f.serialize;if(a=c?c(u,f):S.isURLSearchParams(u)?u.toString():new pr(u,f).toString(d)){var m=l.indexOf("#");m!==-1&&(l=l.slice(0,m)),l+=(l.indexOf("?")===-1?"?":"&")+a}return l}function ht(l){return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ht(l)}function fr(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(ht(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(ht(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),ht(d)==="symbol"?d:String(d)),a)}var d}var oo=function(){function l(){(function(a,d){if(!(a instanceof d))throw new TypeError("Cannot call a class as a function")})(this,l),this.handlers=[]}var u,f;return u=l,f=[{key:"use",value:function(a,d,c){return this.handlers.push({fulfilled:a,rejected:d,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(a){this.handlers[a]&&(this.handlers[a]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(a){S.forEach(this.handlers,function(d){d!==null&&a(d)})}}],f&&fr(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const _i=oo,Ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:pr,io=FormData;var hr,hl=(typeof navigator>"u"||(hr=navigator.product)!=="ReactNative"&&hr!=="NativeScript"&&hr!=="NS")&&typeof window<"u"&&typeof document<"u",iy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const qt={isBrowser:!0,classes:{URLSearchParams:_t,FormData:io,Blob},isStandardBrowserEnv:hl,isStandardBrowserWebWorkerEnv:iy,protocols:["http","https","file","blob","url","data"]},ud=function(l){function u(a,d,c,m){var v=a[m++],w=Number.isFinite(+v),_=m>=a.length;return v=!v&&S.isArray(c)?c.length:v,_?(S.hasOwnProp(c,v)?c[v]=[c[v],d]:c[v]=d,!w):(c[v]&&S.isObject(c[v])||(c[v]=[]),u(a,d,c[v],m)&&S.isArray(c[v])&&(c[v]=function(P){var q,H,$={},Y=Object.keys(P),W=Y.length;for(q=0;q<W;q++)$[H=Y[q]]=P[H];return $}(c[v])),!w)}if(S.isFormData(l)&&S.isFunction(l.entries)){var f={};return S.forEachEntry(l,function(a,d){u(function(c){return S.matchAll(/\w+|\[(\w*)]/g,c).map(function(m){return m[0]==="[]"?"":m[1]||m[0]})}(a),d,f,0)}),f}return null};var ay={"Content-Type":void 0},Ri={transitional:Ti,adapter:["xhr","http"],transformRequest:[function(l,u){var f,a=u.getContentType()||"",d=a.indexOf("application/json")>-1,c=S.isObject(l);if(c&&S.isHTMLForm(l)&&(l=new FormData(l)),S.isFormData(l))return d&&d?JSON.stringify(ud(l)):l;if(S.isArrayBuffer(l)||S.isBuffer(l)||S.isStream(l)||S.isFile(l)||S.isBlob(l))return l;if(S.isArrayBufferView(l))return l.buffer;if(S.isURLSearchParams(l))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();if(c){if(a.indexOf("application/x-www-form-urlencoded")>-1)return function(v,w){return Ut(v,new qt.classes.URLSearchParams,Object.assign({visitor:function(_,P,q,H){return qt.isNode&&S.isBuffer(_)?(this.append(P,_.toString("base64")),!1):H.defaultVisitor.apply(this,arguments)}},w))}(l,this.formSerializer).toString();if((f=S.isFileList(l))||a.indexOf("multipart/form-data")>-1){var m=this.env&&this.env.FormData;return Ut(f?{"files[]":l}:l,m&&new m,this.formSerializer)}}return c||d?(u.setContentType("application/json",!1),function(v,w,_){if(S.isString(v))try{return(0,JSON.parse)(v),S.trim(v)}catch(P){if(P.name!=="SyntaxError")throw P}return(0,JSON.stringify)(v)}(l)):l}],transformResponse:[function(l){var u=this.transitional||Ri.transitional,f=u&&u.forcedJSONParsing,a=this.responseType==="json";if(l&&S.isString(l)&&(f&&!this.responseType||a)){var d=!(u&&u.silentJSONParsing)&&a;try{return JSON.parse(l)}catch(c){if(d)throw c.name==="SyntaxError"?U.from(c,U.ERR_BAD_RESPONSE,this,null,this.response):c}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(l){Ri.headers[l]={}}),S.forEach(["post","put","patch"],function(l){Ri.headers[l]=S.merge(ay)});const yl=Ri;var ly=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function ao(l){return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ao(l)}function dd(l,u){(u==null||u>l.length)&&(u=l.length);for(var f=0,a=new Array(u);f<u;f++)a[f]=l[f];return a}function cd(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(ao(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(ao(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),ao(d)==="symbol"?d:String(d)),a)}var d}var pd=Symbol("internals");function lo(l){return l&&String(l).trim().toLowerCase()}function Pi(l){return l===!1||l==null?l:S.isArray(l)?l.map(Pi):String(l)}function fd(l,u,f,a){return S.isFunction(a)?a.call(this,u,f):S.isString(u)?S.isString(a)?u.indexOf(a)!==-1:S.isRegExp(a)?a.test(u):void 0:void 0}var zi=function(l,u){function f(m){(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,f),m&&this.set(m)}var a,d,c;return a=f,d=[{key:"set",value:function(m,v,w){var _=this;function P(oe,De,Se){var ye=lo(De);if(!ye)throw new Error("header name must be a non-empty string");var gn=S.findKey(_,ye);(!gn||_[gn]===void 0||Se===!0||Se===void 0&&_[gn]!==!1)&&(_[gn||De]=Pi(oe))}var q,H,$,Y,W,G=function(oe,De){return S.forEach(oe,function(Se,ye){return P(Se,ye,De)})};return S.isPlainObject(m)||m instanceof this.constructor?G(m,v):S.isString(m)&&(m=m.trim())&&!/^[-_a-zA-Z]+$/.test(m.trim())?G((W={},(q=m)&&q.split(`
`).forEach(function(oe){Y=oe.indexOf(":"),H=oe.substring(0,Y).trim().toLowerCase(),$=oe.substring(Y+1).trim(),!H||W[H]&&ly[H]||(H==="set-cookie"?W[H]?W[H].push($):W[H]=[$]:W[H]=W[H]?W[H]+", "+$:$)}),W),v):m!=null&&P(v,m,w),this}},{key:"get",value:function(m,v){if(m=lo(m)){var w=S.findKey(this,m);if(w){var _=this[w];if(!v)return _;if(v===!0)return function(P){for(var q,H=Object.create(null),$=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;q=$.exec(P);)H[q[1]]=q[2];return H}(_);if(S.isFunction(v))return v.call(this,_,w);if(S.isRegExp(v))return v.exec(_);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(m,v){if(m=lo(m)){var w=S.findKey(this,m);return!(!w||v&&!fd(0,this[w],w,v))}return!1}},{key:"delete",value:function(m,v){var w=this,_=!1;function P(q){if(q=lo(q)){var H=S.findKey(w,q);!H||v&&!fd(0,w[H],H,v)||(delete w[H],_=!0)}}return S.isArray(m)?m.forEach(P):P(m),_}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(m){var v=this,w={};return S.forEach(this,function(_,P){var q=S.findKey(w,P);if(q)return v[q]=Pi(_),void delete v[P];var H=m?function($){return $.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(Y,W,G){return W.toUpperCase()+G})}(P):String(P).trim();H!==P&&delete v[P],v[H]=Pi(_),w[H]=!0}),this}},{key:"concat",value:function(){for(var m,v=arguments.length,w=new Array(v),_=0;_<v;_++)w[_]=arguments[_];return(m=this.constructor).concat.apply(m,[this].concat(w))}},{key:"toJSON",value:function(m){var v=Object.create(null);return S.forEach(this,function(w,_){w!=null&&w!==!1&&(v[_]=m&&S.isArray(w)?w.join(", "):w)}),v}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(m){var v,w,_=(w=2,function(P){if(Array.isArray(P))return P}(v=m)||function(P,q){var H=P==null?null:typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(H!=null){var $,Y,W,G,oe=[],De=!0,Se=!1;try{if(W=(H=H.call(P)).next,q===0){if(Object(H)!==H)return;De=!1}else for(;!(De=($=W.call(H)).done)&&(oe.push($.value),oe.length!==q);De=!0);}catch(ye){Se=!0,Y=ye}finally{try{if(!De&&H.return!=null&&(G=H.return(),Object(G)!==G))return}finally{if(Se)throw Y}}return oe}}(v,w)||function(P,q){if(P){if(typeof P=="string")return dd(P,q);var H=Object.prototype.toString.call(P).slice(8,-1);return H==="Object"&&P.constructor&&(H=P.constructor.name),H==="Map"||H==="Set"?Array.from(P):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?dd(P,q):void 0}}(v,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return _[0]+": "+_[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],c=[{key:"from",value:function(m){return m instanceof this?m:new this(m)}},{key:"concat",value:function(m){for(var v=new this(m),w=arguments.length,_=new Array(w>1?w-1:0),P=1;P<w;P++)_[P-1]=arguments[P];return _.forEach(function(q){return v.set(q)}),v}},{key:"accessor",value:function(m){var v=(this[pd]=this[pd]={accessors:{}}).accessors,w=this.prototype;function _(P){var q=lo(P);v[q]||(function(H,$){var Y=S.toCamelCase(" "+$);["get","set","has"].forEach(function(W){Object.defineProperty(H,W+Y,{value:function(G,oe,De){return this[W].call(this,$,G,oe,De)},configurable:!0})})}(w,P),v[q]=!0)}return S.isArray(m)?m.forEach(_):_(m),this}}],d&&cd(a.prototype,d),c&&cd(a,c),Object.defineProperty(a,"prototype",{writable:!1}),f}();zi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),S.freezeMethods(zi.prototype),S.freezeMethods(zi);const Gt=zi;function ml(l,u){var f=this||yl,a=u||f,d=Gt.from(a.headers),c=a.data;return S.forEach(l,function(m){c=m.call(f,c,d.normalize(),u?u.status:void 0)}),d.normalize(),c}function hd(l){return!(!l||!l.__CANCEL__)}function yd(l,u,f){U.call(this,l??"canceled",U.ERR_CANCELED,u,f),this.name="CanceledError"}S.inherits(yd,U,{__CANCEL__:!0});const Oi=yd,sy=qt.isStandardBrowserEnv?{write:function(l,u,f,a,d,c){var m=[];m.push(l+"="+encodeURIComponent(u)),S.isNumber(f)&&m.push("expires="+new Date(f).toGMTString()),S.isString(a)&&m.push("path="+a),S.isString(d)&&m.push("domain="+d),c===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(l){var u=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return u?decodeURIComponent(u[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function md(l,u){return l&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(u)?function(f,a){return a?f.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):f}(l,u):u}const uy=qt.isStandardBrowserEnv?function(){var l,u=/(msie|trident)/i.test(navigator.userAgent),f=document.createElement("a");function a(d){var c=d;return u&&(f.setAttribute("href",c),c=f.href),f.setAttribute("href",c),{href:f.href,protocol:f.protocol?f.protocol.replace(/:$/,""):"",host:f.host,search:f.search?f.search.replace(/^\?/,""):"",hash:f.hash?f.hash.replace(/^#/,""):"",hostname:f.hostname,port:f.port,pathname:f.pathname.charAt(0)==="/"?f.pathname:"/"+f.pathname}}return l=a(window.location.href),function(d){var c=S.isString(d)?a(d):d;return c.protocol===l.protocol&&c.host===l.host}}():function(){return!0};function Ad(l,u){var f=0,a=function(d,c){d=d||10;var m,v=new Array(d),w=new Array(d),_=0,P=0;return c=c!==void 0?c:1e3,function(q){var H=Date.now(),$=w[P];m||(m=H),v[_]=q,w[_]=H;for(var Y=P,W=0;Y!==_;)W+=v[Y++],Y%=d;if((_=(_+1)%d)===P&&(P=(P+1)%d),!(H-m<c)){var G=$&&H-$;return G?Math.round(1e3*W/G):void 0}}}(50,250);return function(d){var c=d.loaded,m=d.lengthComputable?d.total:void 0,v=c-f,w=a(v);f=c;var _={loaded:c,total:m,progress:m?c/m:void 0,bytes:v,rate:w||void 0,estimated:w&&m&&c<=m?(m-c)/w:void 0,event:d};_[u?"download":"upload"]=!0,l(_)}}var Al={http:null,xhr:typeof XMLHttpRequest<"u"&&function(l){return new Promise(function(u,f){var a,d=l.data,c=Gt.from(l.headers).normalize(),m=l.responseType;function v(){l.cancelToken&&l.cancelToken.unsubscribe(a),l.signal&&l.signal.removeEventListener("abort",a)}S.isFormData(d)&&(qt.isStandardBrowserEnv||qt.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var w=new XMLHttpRequest;if(l.auth){var _=l.auth.username||"",P=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";c.set("Authorization","Basic "+btoa(_+":"+P))}var q=md(l.baseURL,l.url);function H(){if(w){var G=Gt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());(function(oe,De,Se){var ye=Se.config.validateStatus;Se.status&&ye&&!ye(Se.status)?De(new U("Request failed with status code "+Se.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(Se.status/100)-4],Se.config,Se.request,Se)):oe(Se)})(function(oe){u(oe),v()},function(oe){f(oe),v()},{data:m&&m!=="text"&&m!=="json"?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:G,config:l,request:w}),w=null}}if(w.open(l.method.toUpperCase(),ft(q,l.params,l.paramsSerializer),!0),w.timeout=l.timeout,"onloadend"in w?w.onloadend=H:w.onreadystatechange=function(){w&&w.readyState===4&&(w.status!==0||w.responseURL&&w.responseURL.indexOf("file:")===0)&&setTimeout(H)},w.onabort=function(){w&&(f(new U("Request aborted",U.ECONNABORTED,l,w)),w=null)},w.onerror=function(){f(new U("Network Error",U.ERR_NETWORK,l,w)),w=null},w.ontimeout=function(){var G=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",oe=l.transitional||Ti;l.timeoutErrorMessage&&(G=l.timeoutErrorMessage),f(new U(G,oe.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,l,w)),w=null},qt.isStandardBrowserEnv){var $=(l.withCredentials||uy(q))&&l.xsrfCookieName&&sy.read(l.xsrfCookieName);$&&c.set(l.xsrfHeaderName,$)}d===void 0&&c.setContentType(null),"setRequestHeader"in w&&S.forEach(c.toJSON(),function(G,oe){w.setRequestHeader(oe,G)}),S.isUndefined(l.withCredentials)||(w.withCredentials=!!l.withCredentials),m&&m!=="json"&&(w.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&w.addEventListener("progress",Ad(l.onDownloadProgress,!0)),typeof l.onUploadProgress=="function"&&w.upload&&w.upload.addEventListener("progress",Ad(l.onUploadProgress)),(l.cancelToken||l.signal)&&(a=function(G){w&&(f(!G||G.type?new Oi(null,l,w):G),w.abort(),w=null)},l.cancelToken&&l.cancelToken.subscribe(a),l.signal&&(l.signal.aborted?a():l.signal.addEventListener("abort",a)));var Y,W=(Y=/^([-+\w]{1,25})(:?\/\/|:)/.exec(q))&&Y[1]||"";W&&qt.protocols.indexOf(W)===-1?f(new U("Unsupported protocol "+W+":",U.ERR_BAD_REQUEST,l)):w.send(d||null)})}};S.forEach(Al,function(l,u){if(l){try{Object.defineProperty(l,"name",{value:u})}catch{}Object.defineProperty(l,"adapterName",{value:u})}});function gl(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Oi(null,l)}function gd(l){return gl(l),l.headers=Gt.from(l.headers),l.data=ml.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),function(u){for(var f,a,d=(u=S.isArray(u)?u:[u]).length,c=0;c<d&&(f=u[c],!(a=S.isString(f)?Al[f.toLowerCase()]:f));c++);if(!a)throw a===!1?new U("Adapter ".concat(f," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(S.hasOwnProp(Al,f)?"Adapter '".concat(f,"' is not available in the build"):"Unknown adapter '".concat(f,"'"));if(!S.isFunction(a))throw new TypeError("adapter is not a function");return a}(l.adapter||yl.adapter)(l).then(function(u){return gl(l),u.data=ml.call(l,l.transformResponse,u),u.headers=Gt.from(u.headers),u},function(u){return hd(u)||(gl(l),u&&u.response&&(u.response.data=ml.call(l,l.transformResponse,u.response),u.response.headers=Gt.from(u.response.headers))),Promise.reject(u)})}var vd=function(l){return l instanceof Gt?l.toJSON():l};function yr(l,u){u=u||{};var f={};function a(_,P,q){return S.isPlainObject(_)&&S.isPlainObject(P)?S.merge.call({caseless:q},_,P):S.isPlainObject(P)?S.merge({},P):S.isArray(P)?P.slice():P}function d(_,P,q){return S.isUndefined(P)?S.isUndefined(_)?void 0:a(void 0,_,q):a(_,P,q)}function c(_,P){if(!S.isUndefined(P))return a(void 0,P)}function m(_,P){return S.isUndefined(P)?S.isUndefined(_)?void 0:a(void 0,_):a(void 0,P)}function v(_,P,q){return q in u?a(_,P):q in l?a(void 0,_):void 0}var w={url:c,method:c,data:c,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:v,headers:function(_,P){return d(vd(_),vd(P),!0)}};return S.forEach(Object.keys(l).concat(Object.keys(u)),function(_){var P=w[_]||d,q=P(l[_],u[_],_);S.isUndefined(q)&&P!==v||(f[_]=q)}),f}function Di(l){return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Di(l)}var vl={};["object","boolean","number","function","string","symbol"].forEach(function(l,u){vl[l]=function(f){return Di(f)===l||"a"+(u<1?"n ":" ")+l}});var bd={};vl.transitional=function(l,u,f){function a(d,c){return"[Axios v1.2.3] Transitional option '"+d+"'"+c+(f?". "+f:"")}return function(d,c,m){if(l===!1)throw new U(a(c," has been removed"+(u?" in "+u:"")),U.ERR_DEPRECATED);return u&&!bd[c]&&(bd[c]=!0,console.warn(a(c," has been deprecated since v"+u+" and will be removed in the near future"))),!l||l(d,c,m)}};const bl={assertOptions:function(l,u,f){if(Di(l)!=="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(l),d=a.length;d-- >0;){var c=a[d],m=u[c];if(m){var v=l[c],w=v===void 0||m(v,c,l);if(w!==!0)throw new U("option "+c+" must be "+w,U.ERR_BAD_OPTION_VALUE)}else if(f!==!0)throw new U("Unknown option "+c,U.ERR_BAD_OPTION)}},validators:vl};function so(l){return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},so(l)}function dy(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(so(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(so(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),so(d)==="symbol"?d:String(d)),a)}var d}var mn=bl.validators,Ni=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.defaults=a,this.interceptors={request:new _i,response:new _i}}var u,f;return u=l,(f=[{key:"request",value:function(a,d){typeof a=="string"?(d=d||{}).url=a:d=a||{};var c,m=d=yr(this.defaults,d),v=m.transitional,w=m.paramsSerializer,_=m.headers;v!==void 0&&bl.assertOptions(v,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean)},!1),w!==void 0&&bl.assertOptions(w,{encode:mn.function,serialize:mn.function},!0),d.method=(d.method||this.defaults.method||"get").toLowerCase(),(c=_&&S.merge(_.common,_[d.method]))&&S.forEach(["delete","get","head","post","put","patch","common"],function(ye){delete _[ye]}),d.headers=Gt.concat(c,_);var P=[],q=!0;this.interceptors.request.forEach(function(ye){typeof ye.runWhen=="function"&&ye.runWhen(d)===!1||(q=q&&ye.synchronous,P.unshift(ye.fulfilled,ye.rejected))});var H,$=[];this.interceptors.response.forEach(function(ye){$.push(ye.fulfilled,ye.rejected)});var Y,W=0;if(!q){var G=[gd.bind(this),void 0];for(G.unshift.apply(G,P),G.push.apply(G,$),Y=G.length,H=Promise.resolve(d);W<Y;)H=H.then(G[W++],G[W++]);return H}Y=P.length;var oe=d;for(W=0;W<Y;){var De=P[W++],Se=P[W++];try{oe=De(oe)}catch(ye){Se.call(this,ye);break}}try{H=gd.call(this,oe)}catch(ye){return Promise.reject(ye)}for(W=0,Y=$.length;W<Y;)H=H.then($[W++],$[W++]);return H}},{key:"getUri",value:function(a){return ft(md((a=yr(this.defaults,a)).baseURL,a.url),a.params,a.paramsSerializer)}}])&&dy(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();S.forEach(["delete","get","head","options"],function(l){Ni.prototype[l]=function(u,f){return this.request(yr(f||{},{method:l,url:u,data:(f||{}).data}))}}),S.forEach(["post","put","patch"],function(l){function u(f){return function(a,d,c){return this.request(yr(c||{},{method:l,headers:f?{"Content-Type":"multipart/form-data"}:{},url:a,data:d}))}}Ni.prototype[l]=u(),Ni.prototype[l+"Form"]=u(!0)});const Mi=Ni;function uo(l){return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},uo(l)}function wd(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(uo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(uo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),uo(d)==="symbol"?d:String(d)),a)}var d}var cy=function(){function l(d){if(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")}(this,l),typeof d!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(v){c=v});var m=this;this.promise.then(function(v){if(m._listeners){for(var w=m._listeners.length;w-- >0;)m._listeners[w](v);m._listeners=null}}),this.promise.then=function(v){var w,_=new Promise(function(P){m.subscribe(P),w=P}).then(v);return _.cancel=function(){m.unsubscribe(w)},_},d(function(v,w,_){m.reason||(m.reason=new Oi(v,w,_),c(m.reason))})}var u,f,a;return u=l,f=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(d){this.reason?d(this.reason):this._listeners?this._listeners.push(d):this._listeners=[d]}},{key:"unsubscribe",value:function(d){if(this._listeners){var c=this._listeners.indexOf(d);c!==-1&&this._listeners.splice(c,1)}}}],a=[{key:"source",value:function(){var d;return{token:new l(function(c){d=c}),cancel:d}}}],f&&wd(u.prototype,f),a&&wd(u,a),Object.defineProperty(u,"prototype",{writable:!1}),l}();const py=cy;function Ed(l,u){(u==null||u>l.length)&&(u=l.length);for(var f=0,a=new Array(u);f<u;f++)a[f]=l[f];return a}var wl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wl).forEach(function(l){var u,f,a=(f=2,function(m){if(Array.isArray(m))return m}(u=l)||function(m,v){var w=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(w!=null){var _,P,q,H,$=[],Y=!0,W=!1;try{if(q=(w=w.call(m)).next,v===0){if(Object(w)!==w)return;Y=!1}else for(;!(Y=(_=q.call(w)).done)&&($.push(_.value),$.length!==v);Y=!0);}catch(G){W=!0,P=G}finally{try{if(!Y&&w.return!=null&&(H=w.return(),Object(H)!==H))return}finally{if(W)throw P}}return $}}(u,f)||function(m,v){if(m){if(typeof m=="string")return Ed(m,v);var w=Object.prototype.toString.call(m).slice(8,-1);return w==="Object"&&m.constructor&&(w=m.constructor.name),w==="Map"||w==="Set"?Array.from(m):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?Ed(m,v):void 0}}(u,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),d=a[0],c=a[1];wl[c]=d});const fy=wl;var Oe=function l(u){var f=new Mi(u),a=re(Mi.prototype.request,f);return S.extend(a,Mi.prototype,f,{allOwnKeys:!0}),S.extend(a,f,null,{allOwnKeys:!0}),a.create=function(d){return l(yr(u,d))},a}(yl);Oe.Axios=Mi,Oe.CanceledError=Oi,Oe.CancelToken=py,Oe.isCancel=hd,Oe.VERSION="1.2.3",Oe.toFormData=Ut,Oe.AxiosError=U,Oe.Cancel=Oe.CanceledError,Oe.all=function(l){return Promise.all(l)},Oe.spread=function(l){return function(u){return l.apply(null,u)}},Oe.isAxiosError=function(l){return S.isObject(l)&&l.isAxiosError===!0},Oe.mergeConfig=yr,Oe.AxiosHeaders=Gt,Oe.formToJSON=function(l){return ud(S.isHTMLForm(l)?new FormData(l):l)},Oe.HttpStatusCode=fy,Oe.default=Oe;const xd=Oe,hy={send:function(l){xd.post(l.url,l.data).then(function(u){var f=u.data;f&&f.code===0?l.success&&l.success(f):l.error&&l.error(f&&f.msg)}).catch(function(u){console.error(u),l.error&&l.error()})},read:function(l){xd.get(l.url).then(function(u){var f=u.data;f&&f.code===0?l.success&&l.success(f.data.map(function(a){return{time:a[0],type:a[1],color:a[2],author:a[3],text:a[4]}})):l.error&&l.error(f&&f.msg)}).catch(function(u){console.error(u),l.error&&l.error()})}};function El(l){return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},El(l)}function yy(l){var u=this;this.lang=l,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(f){return f=f.toLowerCase(),mr[u.lang]&&mr[u.lang][f]?mr[u.lang][f]:mr[u.fallbackLang]&&mr[u.fallbackLang][f]?mr[u.fallbackLang][f]:xl[f]?xl[f]:f}}var xl={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},mr={en:xl,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},my=o(730),Ay=o.n(my),gy=o(74),vy=o.n(gy),by=o(437),wy=o.n(by),Ey=o(644),xy=o.n(Ey),ky=o(324),Cy=o.n(ky),Sy=o(574),By=o.n(Sy),Ly=o(300),Iy=o.n(Ly),_y=o(934),Ty=o.n(_y),Ry=o(428),Py=o.n(Ry),zy=o(807),Oy=o.n(zy),Dy=o(338),Ny=o.n(Dy),My=o(254),jy=o.n(My),Fy=o(965),Uy=o.n(Fy),qy=o(113),Wy=o.n(qy),Hy=o(251),Yy=o.n(Hy),Qy=o(410),Ky=o.n(Qy),Vy=o(182),$y=o.n(Vy),Xy=o(193),Zy=o.n(Xy);const Tt={play:Ay(),pause:vy(),volumeUp:wy(),volumeDown:xy(),volumeOff:Cy(),full:By(),fullWeb:Iy(),setting:Ty(),right:Py(),comment:Oy(),commentOff:Ny(),send:jy(),pallette:Uy(),camera:Wy(),subtitle:Ky(),loading:$y(),airplay:Yy(),chromecast:Zy()};var Jy=o(916),Gy=o.n(Jy);function co(l){return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},co(l)}function kd(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(co(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(co(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),co(d)==="symbol"?d:String(d)),a)}var d}var em=function(){function l(d){(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.container=d.container,this.options=d.options,this.index=d.index,this.tran=d.tran,this.init()}var u,f,a;return u=l,a=[{key:"NewNotice",value:function(d,c,m){var v=document.createElement("div");return v.classList.add("dplayer-notice"),v.style.opacity=c,v.innerText=d,m&&(v.id="dplayer-notice-".concat(m)),v}}],(f=[{key:"init",value:function(){this.container.innerHTML=Gy()({options:this.options,index:this.index,tran:this.tran,icons:Tt,mobile:D.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!D.isSafari||D.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&kd(u.prototype,f),a&&kd(u,a),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Cd=em;function Ar(l){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ar(l)}function tm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(Ar(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(Ar(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Ar(d)==="symbol"?d:String(d)),a)}var d}var nm=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.options=a,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var u,f;return u=l,f=[{key:"load",value:function(){var a,d=this;a=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(a),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(m){d.dan=[].concat.apply([],m).sort(function(v,w){return v.time-w.time}),window.requestAnimationFrame(function(){d.frame()}),d.options.callback(),d.events&&d.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(a){this.options.api=a,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(a,d){for(var c=this,m=[],v=0,w=function(P){c.options.apiBackend.read({url:a[P],success:function(q){m[P]=q,++v===a.length&&d(m)},error:function(q){c.options.error(q||c.options.tran("danmaku-failed")),m[P]=[],++v===a.length&&d(m)}})},_=0;_<a.length;++_)w(_)}},{key:"send",value:function(a,d){var c=this,m={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:a.text,color:a.color,type:a.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:m,success:d,error:function(w){c.options.error(w||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,m),this.danIndex++;var v={text:this.htmlEncode(m.text),color:m.color,type:m.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(v),this.events&&this.events.trigger("danmaku_send",m)}},{key:"frame",value:function(){var a=this;if(this.dan.length&&!this.paused&&this.showing){for(var d=this.dan[this.danIndex],c=[];d&&this.options.time()>parseFloat(d.time);)c.push(d),d=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){a.frame()})}},{key:"opacity",value:function(a){if(a!==void 0){for(var d=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<d.length;c++)d[c].style.opacity=a;this._opacity=a,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(a){var d=this;if(this.showing){var c=this.options.height,m=this.container.offsetWidth,v=this.container.offsetHeight,w=parseInt(v/c),_=function(W){var G=W.offsetWidth||parseInt(W.style.width),oe=W.getBoundingClientRect().right||d.container.getBoundingClientRect().right+G;return d.container.getBoundingClientRect().right-oe},P=function(W){return(m+W)/5},q=function(W,G,oe){for(var De=m/P(oe),Se=function(Vn){var vr=d.danTunnel[G][Vn+""];if(!vr||!vr.length)return d.danTunnel[G][Vn+""]=[W],W.addEventListener("animationend",function(){d.danTunnel[G][Vn+""].splice(0,1)}),{v:Vn%w};if(G!=="right")return"continue";for(var Lo=0;Lo<vr.length;Lo++){var Td=_(vr[Lo])-10;if(Td<=m-De*P(parseInt(vr[Lo].style.width))||Td<=0)break;if(Lo===vr.length-1)return d.danTunnel[G][Vn+""].push(W),W.addEventListener("animationend",function(){d.danTunnel[G][Vn+""].splice(0,1)}),{v:Vn%w}}},ye=0;d.unlimited||ye<w;ye++){var gn=Se(ye);if(gn!=="continue"&&Ar(gn)==="object")return gn.v}return-1};Object.prototype.toString.call(a)!=="[object Array]"&&(a=[a]);for(var H=document.createDocumentFragment(),$=function(){a[Y].type=D.number2Type(a[Y].type),a[Y].color||(a[Y].color=16777215);var W=document.createElement("div");W.classList.add("dplayer-danmaku-item"),W.classList.add("dplayer-danmaku-".concat(a[Y].type)),a[Y].border?W.innerHTML='<span style="border:'.concat(a[Y].border,'">').concat(a[Y].text,"</span>"):W.innerHTML=a[Y].text,W.style.opacity=d._opacity,W.style.color=D.number2Color(a[Y].color),W.addEventListener("animationend",function(){d.container.removeChild(W)});var G,oe=d._measure(a[Y].text);switch(a[Y].type){case"right":(G=q(W,a[Y].type,oe))>=0&&(W.style.width=oe+1+"px",W.style.top=c*G+"px",W.style.transform="translateX(-".concat(m,"px)"));break;case"top":(G=q(W,a[Y].type))>=0&&(W.style.top=c*G+"px");break;case"bottom":(G=q(W,a[Y].type))>=0&&(W.style.bottom=c*G+"px");break;default:console.error("Can't handled danmaku type: ".concat(a[Y].type))}G>=0&&(W.classList.add("dplayer-danmaku-move"),W.style.animationDuration=d._danAnimation(a[Y].type),H.appendChild(W))},Y=0;Y<a.length;Y++)$();return this.container.appendChild(H),H}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(a){if(!this.context){var d=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=d.getPropertyValue("font")}return this.context.measureText(a).width}},{key:"seek",value:function(){this.clear();for(var a=0;a<this.dan.length;a++){if(this.dan[a].time>=this.options.time()){this.danIndex=a;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var a=this.container.offsetWidth,d=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<d.length;c++)d[c].style.transform="translateX(-".concat(a,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(a){this.unlimited=a}},{key:"speed",value:function(a){this.options.api.speedRate=a}},{key:"_danAnimation",value:function(a){var d=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/d,"s"),right:"".concat((c?8:5)/d,"s"),bottom:"".concat((c?6:4)/d,"s")}[a]}}],f&&tm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const rm=nm;function po(l){return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},po(l)}function om(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(po(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(po(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),po(d)==="symbol"?d:String(d)),a)}var d}const im=function(){function l(){(function(a,d){if(!(a instanceof d))throw new TypeError("Cannot call a class as a function")})(this,l),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var u,f;return u=l,(f=[{key:"on",value:function(a,d){this.type(a)&&typeof d=="function"&&(this.events[a]||(this.events[a]=[]),this.events[a].push(d))}},{key:"trigger",value:function(a,d){if(this.events[a]&&this.events[a].length)for(var c=0;c<this.events[a].length;c++)this.events[a][c](d)}},{key:"type",value:function(a){return this.playerEvents.indexOf(a)!==-1?"player":this.videoEvents.indexOf(a)!==-1?"video":(console.error("Unknown event name: ".concat(a)),null)}}])&&om(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();function fo(l){return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},fo(l)}function am(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(fo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(fo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),fo(d)==="symbol"?d:String(d)),a)}var d}var lm=function(){function l(a){var d=this;(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){d.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){d.player.resize(),D.setScrollPosition(d.lastScrollPosition)}),this.fullscreenchange=function(){d.player.resize(),d.isFullScreen("browser")?d.player.events.trigger("fullscreen"):(D.setScrollPosition(d.lastScrollPosition),d.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==d.player.container||(d.player.resize(),c?d.player.events.trigger("fullscreen"):(D.setScrollPosition(d.lastScrollPosition),d.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var u,f;return u=l,f=[{key:"isFullScreen",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(a){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",d=a==="browser"?"web":"browser",c=this.isFullScreen(d);switch(c||(this.lastScrollPosition=D.getScrollPosition()),a){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(d)}},{key:"cancel",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(a){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(a)?this.cancel(a):this.request(a)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],f&&am(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const sm=lm;function ho(l){return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ho(l)}function um(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(ho(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(ho(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),ho(d)==="symbol"?d:String(d)),a)}var d}var dm=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:a.options.hasOwnProperty("volume")?a.options.volume:.7,unlimited:(a.options.danmaku&&a.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var u,f;return u=l,(f=[{key:"init",value:function(){for(var a in this.storageName){var d=this.storageName[a];this.data[a]=parseFloat(D.storage.get(d)||this.default[a])}}},{key:"get",value:function(a){return this.data[a]}},{key:"set",value:function(a,d){this.data[a]=d,D.storage.set(this.storageName[a],d)}}])&&um(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const cm=dm;function yo(l){return yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},yo(l)}function pm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(yo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(yo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),yo(d)==="symbol"?d:String(d)),a)}var d}var fm=function(){function l(a,d,c,m){(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,l),this.container=a,this.video=d,this.options=c,this.events=m,this.init()}var u,f;return u=l,f=[{key:"init",value:function(){var a=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var d=this.video.textTracks[0];d.oncuechange=function(){var c=d.activeCues[d.activeCues.length-1];if(a.container.innerHTML="",c){var m=document.createElement("div");m.appendChild(c.getCueAsHTML());var v=m.innerHTML.split(/\r?\n/).map(function(w){return"<p>".concat(w,"</p>")}).join("");a.container.innerHTML=v}a.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],f&&pm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const hm=fm;function mo(l){return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},mo(l)}function ym(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(mo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(mo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),mo(d)==="symbol"?d:String(d)),a)}var d}var mm=function(){function l(a){var d=this;(function(w,_){if(!(w instanceof _))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){d.adaptiveHeight(),d.show()});for(var c=this.player.template.subtitlesItem.length-1,m=function(w){d.player.template.subtitlesItem[w].addEventListener("click",function(){d.hide(),d.player.options.subtitle.index!==w&&(d.player.template.subtitle.innerHTML="<p></p>",d.player.template.subtrack.src=d.player.template.subtitlesItem[w].dataset.subtitle,d.player.options.subtitle.index=w,d.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&d.subContainerShow())})},v=0;v<c;v++)m(v);this.player.template.subtitlesItem[c].addEventListener("click",function(){d.hide(),d.player.options.subtitle.index!==c&&(d.player.template.subtitle.innerHTML="<p></p>",d.player.template.subtrack.src="",d.player.options.subtitle.index=c,d.subContainerHide())})}var u,f;return u=l,(f=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var a=30*this.player.template.subtitlesItem.length+14,d=.8*this.player.template.videoWrap.offsetHeight;a>=d-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=d-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=d-50+"px")}}])&&ym(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Am=mm;function Ao(l){return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ao(l)}function gm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(Ao(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(Ao(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Ao(d)==="symbol"?d:String(d)),a)}var d}var vm=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.elements={},this.elements.volume=a.volumeBar,this.elements.played=a.playedBar,this.elements.loaded=a.loadedBar,this.elements.danmaku=a.danmakuOpacityBar}var u,f;return u=l,(f=[{key:"set",value:function(a,d,c){d=Math.max(d,0),d=Math.min(d,1),this.elements[a].style[c]=100*d+"%"}},{key:"get",value:function(a){return parseFloat(this.elements[a].style.width)/100}}])&&gm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const bm=vm;function go(l){return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},go(l)}function wm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(go(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(go(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),go(d)==="symbol"?d:String(d)),a)}var d}var Em=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(d){window.setTimeout(d,1e3/60)},this.types=["loading","info","fps"],this.init()}var u,f;return u=l,(f=[{key:"init",value:function(){var a=this;this.types.map(function(d){return d!=="fps"&&a["init".concat(d,"Checker")](),d})}},{key:"initloadingChecker",value:function(){var a=this,d=0,c=0,m=!1;this.loadingChecker=setInterval(function(){a.enableloadingChecker&&(c=a.player.video.currentTime,m||c!==d||a.player.video.paused||(a.player.container.classList.add("dplayer-loading"),m=!0),m&&c>d&&!a.player.video.paused&&(a.player.container.classList.remove("dplayer-loading"),m=!1),d=c)},100)}},{key:"initfpsChecker",value:function(){var a=this;window.requestAnimationFrame(function(){if(a.enablefpsChecker)if(a.initfpsChecker(),a.fpsStart){a.fpsIndex++;var d=new Date;d-a.fpsStart>1e3&&(a.player.infoPanel.fps(a.fpsIndex/(d-a.fpsStart)*1e3),a.fpsStart=new Date,a.fpsIndex=0)}else a.fpsStart=new Date,a.fpsIndex=0;else a.fpsStart=0,a.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var a=this;this.infoChecker=setInterval(function(){a.enableinfoChecker&&a.player.infoPanel.update()},1e3)}},{key:"enable",value:function(a){this["enable".concat(a,"Checker")]=!0,a==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(a){this["enable".concat(a,"Checker")]=!1}},{key:"destroy",value:function(){var a=this;this.types.map(function(d){return a["enable".concat(d,"Checker")]=!1,a["".concat(d,"Checker")]&&clearInterval(a["".concat(d,"Checker")]),d})}}])&&wm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const xm=Em;function vo(l){return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},vo(l)}function km(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(vo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(vo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),vo(d)==="symbol"?d:String(d)),a)}var d}const Cm=function(){function l(a){var d=this;(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.container=a,this.container.addEventListener("animationend",function(){d.container.classList.remove("dplayer-bezel-transition")})}var u,f;return u=l,(f=[{key:"switch",value:function(a){this.container.innerHTML=a,this.container.classList.add("dplayer-bezel-transition")}}])&&km(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();function bo(l){return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},bo(l)}function Sm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(bo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(bo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),bo(d)==="symbol"?d:String(d)),a)}var d}var Bm=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.container=a.container,this.barWidth=a.barWidth,this.container.style.backgroundImage="url('".concat(a.url,"')"),this.events=a.events}var u,f;return u=l,(f=[{key:"resize",value:function(a,d,c){this.container.style.width="".concat(a,"px"),this.container.style.height="".concat(d,"px"),this.container.style.top="".concat(2-d,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(a){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(a/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(a-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Sm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Lm=Bm;function wo(l){return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},wo(l)}function Im(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(wo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(wo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),wo(d)==="symbol"?d:String(d)),a)}var d}var An,Sd=!0,kl=!1,_m=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.autoHideTimer=0,D.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),D.isMobile||this.initVolumeButton()}var u,f;return u=l,(f=[{key:"initPlayButton",value:function(){var a=this;this.player.template.playButton.addEventListener("click",function(){a.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){a.player.toggle()}),D.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){a.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){a.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){a.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){a.player.toggle()}))}},{key:"initHighlights",value:function(){var a=this;this.player.on("durationchange",function(){if(a.player.video.duration!==1&&a.player.video.duration!==1/0&&a.player.options.highlight){var d=a.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(d,0).forEach(function(v){a.player.template.playedBarWrap.removeChild(v)});for(var c=0;c<a.player.options.highlight.length;c++)if(a.player.options.highlight[c].text&&a.player.options.highlight[c].time){var m=document.createElement("div");m.classList.add("dplayer-highlight"),m.style.left=a.player.options.highlight[c].time/a.player.video.duration*100+"%",m.innerHTML='<span class="dplayer-highlight-text">'+a.player.options.highlight[c].text+"</span>",a.player.template.playedBarWrap.insertBefore(m,a.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var a=this;this.player.options.video.thumbnails&&(this.thumbnails=new Lm({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){a.thumbnails.resize(160,a.player.video.videoHeight/a.player.video.videoWidth*160,a.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var a=this,d=function(m){var v=((m.clientX||m.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(a.player.template.playedBarWrap))/a.player.template.playedBarWrap.clientWidth;v=Math.max(v,0),v=Math.min(v,1),a.player.bar.set("played",v,"width"),a.player.template.ptime.innerHTML=D.secondToTime(v*a.player.video.duration)},c=function m(v){document.removeEventListener(D.nameMap.dragEnd,m),document.removeEventListener(D.nameMap.dragMove,d);var w=((v.clientX||v.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(a.player.template.playedBarWrap))/a.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),a.player.bar.set("played",w,"width"),a.player.seek(a.player.bar.get("played")*a.player.video.duration),a.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(D.nameMap.dragStart,function(){a.player.timer.disable("progress"),document.addEventListener(D.nameMap.dragMove,d),document.addEventListener(D.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(D.nameMap.dragMove,function(m){if(a.player.video.duration){var v=a.player.template.playedBarWrap.getBoundingClientRect().left,w=(m.clientX||m.changedTouches[0].clientX)-v;if(w<0||w>a.player.template.playedBarWrap.offsetWidth)return;var _=a.player.video.duration*(w/a.player.template.playedBarWrap.offsetWidth);D.isMobile&&a.thumbnails&&a.thumbnails.show(),a.thumbnails&&a.thumbnails.move(w),a.player.template.playedBarTime.style.left="".concat(w-(_>=3600?25:20),"px"),a.player.template.playedBarTime.innerText=D.secondToTime(_),a.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(D.nameMap.dragEnd,function(){D.isMobile&&a.thumbnails&&a.thumbnails.hide()}),D.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){a.player.video.duration&&(a.thumbnails&&a.thumbnails.show(),a.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){a.player.video.duration&&(a.thumbnails&&a.thumbnails.hide(),a.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var a=this;this.player.template.browserFullButton.addEventListener("click",function(){a.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){a.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var a=this,d=function(m){var v=m||window.event,w=((v.clientX||v.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(a.player.template.volumeBarWrap)-5.5)/35;a.player.volume(w)},c=function m(){document.removeEventListener(D.nameMap.dragEnd,m),document.removeEventListener(D.nameMap.dragMove,d),a.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(m){var v=m||window.event,w=((v.clientX||v.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(a.player.template.volumeBarWrap)-5.5)/35;a.player.volume(w)}),this.player.template.volumeBarWrapWrap.addEventListener(D.nameMap.dragStart,function(){document.addEventListener(D.nameMap.dragMove,d),document.addEventListener(D.nameMap.dragEnd,c),a.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){a.player.video.muted?(a.player.video.muted=!1,a.player.switchVolumeIcon(),a.player.bar.set("volume",a.player.volume(),"width")):(a.player.video.muted=!0,a.player.template.volumeIcon.innerHTML=Tt.volumeOff,a.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var a=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(d){d.target.classList.contains("dplayer-quality-item")&&a.player.switchQuality(d.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var a=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var d,c=document.createElement("canvas");c.width=a.player.video.videoWidth,c.height=a.player.video.videoHeight,c.getContext("2d").drawImage(a.player.video,0,0,c.width,c.height),c.toBlob(function(m){d=URL.createObjectURL(m);var v=document.createElement("a");v.href=d,v.download="DPlayer.png",v.style.display="none",document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(d),a.player.events.trigger("screenshot",d)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(a){a.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var a=window.document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(a),window.__onGCastApiAvailable=function(d){if(d){var c=new(An=window.chrome.cast).SessionRequest(An.media.DEFAULT_MEDIA_RECEIVER_APP_ID),m=new An.ApiConfig(c,function(){},function(v){v===An.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",v)});An.initialize(m,function(){})}}}},{key:"initChromecastButton",value:function(){var a=this;if(this.player.options.chromecast){Sd&&(Sd=!1,this.initChromecast());var d=function(m,v){a.currentMedia=v},c=function(m){console.error("Error launching media",m)};this.player.template.chromecastButton.addEventListener("click",function(){kl?(kl=!1,a.currentMedia.stop(),a.session.stop(),a.initChromecast()):(kl=!0,An.requestSession(function(m){var v,w,_;a.session=m,v=a.player.options.video.url,w=new An.media.MediaInfo(v),_=new An.media.LoadRequest(w),a.session?a.session.loadMedia(_,d.bind(a,"loadMedia"),c).play():window.open(v)},function(m){m.code==="cancel"?a.session=void 0:console.error("Error selecting a cast device",m)}))})}}},{key:"initSubtitleButton",value:function(){var a=this;this.player.events.on("subtitle_show",function(){a.player.template.subtitleButton.dataset.balloon=a.player.tran("hide-subs"),a.player.template.subtitleButtonInner.style.opacity="",a.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){a.player.template.subtitleButton.dataset.balloon=a.player.tran("show-subs"),a.player.template.subtitleButtonInner.style.opacity="0.4",a.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){a.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var a=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!a.player.video.played.length||a.player.paused||a.disableAutoHide||a.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){D.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Im(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Tm=_m;function Eo(l){return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Eo(l)}function Rm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(Eo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(Eo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Eo(d)==="symbol"?d:String(d)),a)}var d}var Pm=function(){function l(a){var d=this;(function(_,P){if(!(_ instanceof P))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.settingButton.addEventListener("click",function(){d.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){d.player.template.loopToggle.checked=!d.player.template.loopToggle.checked,d.player.template.loopToggle.checked?d.loop=!0:d.loop=!1,d.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){d.player.template.showDanmakuToggle.checked=!d.player.template.showDanmakuToggle.checked,d.player.template.showDanmakuToggle.checked?(d.showDanmaku=!0,d.player.danmaku.show()):(d.showDanmaku=!1,d.player.danmaku.hide()),d.player.user.set("danmaku",d.showDanmaku?1:0),d.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){d.player.template.unlimitDanmakuToggle.checked=!d.player.template.unlimitDanmakuToggle.checked,d.player.template.unlimitDanmakuToggle.checked?(d.unlimitDanmaku=!0,d.player.danmaku.unlimit(!0)):(d.unlimitDanmaku=!1,d.player.danmaku.unlimit(!1)),d.player.user.set("unlimited",d.unlimitDanmaku?1:0),d.hide()}),this.player.template.speed.addEventListener("click",function(){d.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),d.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(_){d.player.template.speedItem[_].addEventListener("click",function(){d.player.speed(d.player.template.speedItem[_].dataset.speed),d.hide()})},m=0;m<this.player.template.speedItem.length;m++)c(m);if(this.player.danmaku){this.player.on("danmaku_opacity",function(_){d.player.bar.set("danmaku",_,"width"),d.player.user.set("opacity",_)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var v=function(_){var P=_||window.event,q=((P.clientX||P.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(d.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),d.player.danmaku.opacity(q)},w=function _(){document.removeEventListener(D.nameMap.dragEnd,_),document.removeEventListener(D.nameMap.dragMove,v),d.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(_){var P=_||window.event,q=((P.clientX||P.changedTouches[0].clientX)-D.getBoundingClientRectViewLeft(d.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),d.player.danmaku.opacity(q)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(D.nameMap.dragStart,function(){document.addEventListener(D.nameMap.dragMove,v),document.addEventListener(D.nameMap.dragEnd,w),d.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var u,f;return u=l,(f=[{key:"hide",value:function(){var a=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){a.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Rm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const zm=Pm;function xo(l){return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},xo(l)}function Om(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(xo(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(xo(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),xo(d)==="symbol"?d:String(d)),a)}var d}var Dm=function(){function l(a){var d=this;(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.player.template.mask.addEventListener("click",function(){d.hide()}),this.player.template.commentButton.addEventListener("click",function(){d.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){d.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(d.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=d.player.template.commentColorSettingBox.querySelector("input:checked").value;d.player.template.commentSettingFill.style.fill=c,d.player.template.commentInput.style.color=c,d.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){d.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&d.send()}),this.player.template.commentSendButton.addEventListener("click",function(){d.send()})}var u,f;return u=l,(f=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var a=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:D.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){a.player.template.commentInput.value="",a.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Om(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Nm=Dm;function ko(l){return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ko(l)}function Mm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(ko(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(ko(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),ko(d)==="symbol"?d:String(d)),a)}var d}var jm=function(){function l(a){(function(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var u,f;return u=l,(f=[{key:"doHotKey",value:function(a){if(this.player.focus){var d=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(d!=="INPUT"&&d!=="TEXTAREA"&&c!==""&&c!=="true"){var m,v=a||window.event;switch(v.keyCode){case 32:v.preventDefault(),this.player.toggle();break;case 37:if(v.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(v.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:v.preventDefault(),m=this.player.volume()+.1,this.player.volume(m);break;case 40:v.preventDefault(),m=this.player.volume()-.1,this.player.volume(m)}}}}},{key:"cancelFullScreen",value:function(a){(a||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Mm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Fm=jm;function Co(l){return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Co(l)}function Um(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(Co(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(Co(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Co(d)==="symbol"?d:String(d)),a)}var d}var qm=function(){function l(a){var d=this;(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.player=a,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,m){d.player.options.contextmenu[m].click&&c.addEventListener("click",function(){d.player.options.contextmenu[m].click(d.player),d.hide()})}),this.contextmenuHandler=function(c){if(d.shown)d.hide();else{var m=c||window.event;m.preventDefault();var v=d.player.container.getBoundingClientRect();d.show(m.clientX-v.left,m.clientY-v.top),d.player.template.mask.addEventListener("click",function(){d.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var u,f;return u=l,(f=[{key:"show",value:function(a,d){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();a+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-a+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=a+"px",this.player.template.menu.style.right="initial"),d+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-d+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=d+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Um(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Wm=qm;function So(l){return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},So(l)}function Hm(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,(d=function(c,m){if(So(c)!=="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var w=v.call(c,"string");if(So(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),So(d)==="symbol"?d:String(d)),a)}var d}var Ym=function(){function l(a){var d=this;(function(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")})(this,l),this.container=a.template.infoPanel,this.template=a.template,this.video=a.video,this.player=a,this.template.infoPanelClose.addEventListener("click",function(){d.hide()})}var u,f;return u=l,(f=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(a){this.template.infoFPS.innerHTML="".concat(a.toFixed(1))}}])&&Hm(u.prototype,f),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Qm=Ym;var Km=o(568),Vm=o.n(Km);function Bo(l){return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Bo(l)}function Bd(l,u){var f=Object.keys(l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);u&&(a=a.filter(function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable})),f.push.apply(f,a)}return f}function $m(l,u,f){return(u=Id(u))in l?Object.defineProperty(l,u,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[u]=f,l}function Ld(l,u){for(var f=0;f<u.length;f++){var a=u[f];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,Id(a.key),a)}}function Id(l){var u=function(f,a){if(Bo(f)!=="object"||f===null)return f;var d=f[Symbol.toPrimitive];if(d!==void 0){var c=d.call(f,"string");if(Bo(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l);return Bo(u)==="symbol"?u:String(u)}var _d=0,gr=[],Xm=function(){function l(d){var c=this;(function(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")})(this,l),this.options=function(m){var v={container:m.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:hy,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var w in v)v.hasOwnProperty(w)&&!m.hasOwnProperty(w)&&(m[w]=v[w]);return m.video&&!m.video.type&&(m.video.type="auto"),El(m.danmaku)==="object"&&m.danmaku&&!m.danmaku.user&&(m.danmaku.user="DIYgod"),m.subtitle&&(!m.subtitle.type&&(m.subtitle.type="webvtt"),!m.subtitle.fontSize&&(m.subtitle.fontSize="20px"),!m.subtitle.bottom&&(m.subtitle.bottom="40px"),!m.subtitle.color&&(m.subtitle.color="#fff")),m.video.quality&&(m.video.url=m.video.quality[m.video.defaultQuality].url),m.lang&&(m.lang=m.lang.toLowerCase()),m.contextmenu=m.contextmenu.concat([{key:"video-info",click:function(_){_.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),m}(function(m){for(var v=1;v<arguments.length;v++){var w=arguments[v]!=null?arguments[v]:{};v%2?Bd(Object(w),!0).forEach(function(_){$m(m,_,w[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(w)):Bd(Object(w)).forEach(function(_){Object.defineProperty(m,_,Object.getOwnPropertyDescriptor(w,_))})}return m}({preload:d.video.type==="webtorrent"?"none":"metadata"},d)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new yy(this.options.lang).tran,this.events=new im,this.user=new cm(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),D.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(m){return m.lang===c.options.subtitle.defaultSubtitle||m.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(m){return m.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Cd({container:this.container,options:this.options,index:_d,tran:this.tran}),this.video=this.template.video,this.bar=new bm(this.template),this.bezel=new Cm(this.template.bezel),this.fullScreen=new sm(this),this.controller=new Tm(this),this.options.danmaku&&(this.danmaku=new rm({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(m){c.notice(m)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(m){return c.tran(m)}}),this.comment=new Nm(this)),this.setting=new zm(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new xm(this),this.hotkey=new Fm(this),this.contextmenu=new Wm(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Qm(this),!this.danmaku&&this.options.autoplay&&this.play(),_d++,gr.push(this)}var u,f,a;return u=l,f=[{key:"seek",value:function(d){d=Math.max(d,0),this.video.duration&&(d=Math.min(d,this.video.duration)),this.video.currentTime<d?this.notice("".concat(this.tran("ff").replace("%s",(d-this.video.currentTime).toFixed(0)))):this.video.currentTime>d&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-d).toFixed(0)))),this.video.currentTime=d,this.danmaku&&this.danmaku.seek(),this.bar.set("played",d/this.video.duration,"width"),this.template.ptime.innerHTML=D.secondToTime(d)}},{key:"play",value:function(d){var c=this;if(this.paused=!1,this.video.paused&&!D.isMobile&&this.bezel.switch(Tt.play),this.template.playButton.innerHTML=Tt.pause,this.template.mobilePlayButton.innerHTML=Tt.pause,d||Un.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var m=0;m<gr.length;m++)this!==gr[m]&&gr[m].pause()}},{key:"pause",value:function(d){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||D.isMobile||this.bezel.switch(Tt.pause),this.template.playButton.innerHTML=Tt.play,this.template.mobilePlayButton.innerHTML=Tt.play,d||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Tt.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Tt.volumeDown:this.template.volumeIcon.innerHTML=Tt.volumeOff}},{key:"volume",value:function(d,c,m){if(d=parseFloat(d),!isNaN(d)){d=Math.max(d,0),d=Math.min(d,1),this.bar.set("volume",d,"width");var v="".concat((100*d).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=v,c||this.user.set("volume",d),m||this.notice("".concat(this.tran("volume")," ").concat((100*d).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=d,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(d,c){this.events.on(d,c)}},{key:"switchVideo",value:function(d,c){this.pause(),this.video.poster=d.pic?d.pic:"",this.video.src=d.url,this.initMSE(this.video,d.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(d,c){var m=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(d.src)?this.type="hls":/.flv(#|\?|$)/i.exec(d.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(d.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(d.canPlayType("application/x-mpegURL")||d.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var v=this.options.pluginOptions.hls,w=new window.Hls(v);this.plugins.hls=w,w.loadSource(d.src),w.attachMedia(d),this.events.on("destroy",function(){w.destroy(),delete m.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var _=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:d.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=_,_.attachMediaElement(d),_.load(),this.events.on("destroy",function(){_.unload(),_.detachMediaElement(),_.destroy(),delete m.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var P=window.dashjs.MediaPlayer().create().initialize(d,d.src,!1),q=this.options.pluginOptions.dash;P.updateSettings(q),this.plugins.dash=P,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete m.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var H=this.options.pluginOptions.webtorrent,$=new window.WebTorrent(H);this.plugins.webtorrent=$;var Y=d.src;d.src="",d.preload="metadata",d.addEventListener("durationchange",function(){return m.container.classList.remove("dplayer-loading")},{once:!0}),$.add(Y,function(W){W.files.find(function(G){return G.name.endsWith(".mp4")}).renderTo(m.video,{autoplay:m.options.autoplay,controls:!1})}),this.events.on("destroy",function(){$.remove(Y),$.destroy(),delete m.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(d,c){var m=this;this.initMSE(d,c),this.on("durationchange",function(){d.duration!==1&&d.duration!==1/0&&(m.template.dtime.innerHTML=D.secondToTime(d.duration))}),this.on("progress",function(){var _=d.buffered.length?d.buffered.end(d.buffered.length-1)/d.duration:0;m.bar.set("loaded",_,"width")}),this.on("error",function(){m.video.error&&m.tran&&m.notice&&m.type!=="webtorrent"&&m.notice(m.tran("video-failed"))}),this.on("ended",function(){m.bar.set("played",1,"width"),m.setting.loop?(m.seek(0),m.play()):m.pause(),m.danmaku&&(m.danmaku.danIndex=0)}),this.on("play",function(){m.paused&&m.play(!0)}),this.on("pause",function(){m.paused||m.pause(!0)}),this.on("timeupdate",function(){m.bar.set("played",m.video.currentTime/m.video.duration,"width");var _=D.secondToTime(m.video.currentTime);m.template.ptime.innerHTML!==_&&(m.template.ptime.innerHTML=_)});for(var v=function(_){d.addEventListener(m.events.videoEvents[_],function(P){m.events.trigger(m.events.videoEvents[_],P)})},w=0;w<this.events.videoEvents.length;w++)v(w);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new hm(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Am(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(d){var c=this;if(d=typeof d=="string"?parseInt(d):d,this.qualityIndex!==d&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=d,this.switchingQuality=!0,this.quality=this.options.video.quality[d],this.template.qualityButton.innerHTML=this.quality.name;var m=this.video.paused;this.video.pause();var v=Vm()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),w=new DOMParser().parseFromString(v,"text/html").body.firstChild;this.template.videoWrap.insertBefore(w,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=w,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),m||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,m||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(d){var c,m,v,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,P=arguments.length>3?arguments[3]:void 0;if(P&&((c=document.getElementById("dplayer-notice-".concat(P)))&&(c.innerHTML=d),this.noticeList[P]&&(clearTimeout(this.noticeList[P]),this.noticeList[P]=null)),!c){var q=Cd.NewNotice(d,_,P);this.template.noticeList.appendChild(q),c=q}this.events.trigger("notice_show",c),w>0&&(this.noticeList[P]=setTimeout((m=c,v=this,function(){m.addEventListener("animationend",function(){v.template.noticeList.removeChild(m)}),m.classList.add("remove-notice"),v.events.trigger("notice_hide"),v.noticeList[P]=null}),w))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(d){this.video.playbackRate=d}},{key:"destroy",value:function(){gr.splice(gr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],a=[{key:"version",get:function(){return"1.27.1"}}],f&&Ld(u.prototype,f),a&&Ld(u,a),Object.defineProperty(u,"prototype",{writable:!1}),l}();const Zm=Xm;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Jm=Zm})(),i.default})())})(Xv);const Zv=mp(tu),$t=Object.create(null);$t.open="0";$t.close="1";$t.ping="2";$t.pong="3";$t.message="4";$t.upgrade="5";$t.noop="6";const ma=Object.create(null);Object.keys($t).forEach(e=>{ma[$t[e]]=e});const Jv={type:"error",data:"parser error"},Gv=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",e1=typeof ArrayBuffer=="function",t1=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Wh=({type:e,data:t},n,r)=>Gv&&t instanceof Blob?n?r(t):ap(t,r):e1&&(t instanceof ArrayBuffer||t1(t))?n?r(t):ap(new Blob([t]),r):r($t[e]+(t||"")),ap=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)},lp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ho=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<lp.length;e++)Ho[lp.charCodeAt(e)]=e;const n1=e=>{let t=e.length*.75,n=e.length,r,o=0,i,s,p,h;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const A=new ArrayBuffer(t),k=new Uint8Array(A);for(r=0;r<n;r+=4)i=Ho[e.charCodeAt(r)],s=Ho[e.charCodeAt(r+1)],p=Ho[e.charCodeAt(r+2)],h=Ho[e.charCodeAt(r+3)],k[o++]=i<<2|s>>4,k[o++]=(s&15)<<4|p>>2,k[o++]=(p&3)<<6|h&63;return A},r1=typeof ArrayBuffer=="function",Hh=(e,t)=>{if(typeof e!="string")return{type:"message",data:Yh(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:o1(e.substring(1),t)}:ma[n]?e.length>1?{type:ma[n],data:e.substring(1)}:{type:ma[n]}:Jv},o1=(e,t)=>{if(r1){const n=n1(e);return Yh(n,t)}else return{base64:!0,data:e}},Yh=(e,t)=>{switch(t){case"blob":return e instanceof ArrayBuffer?new Blob([e]):e;case"arraybuffer":default:return e}},Qh=String.fromCharCode(30),i1=(e,t)=>{const n=e.length,r=new Array(n);let o=0;e.forEach((i,s)=>{Wh(i,!1,p=>{r[s]=p,++o===n&&t(r.join(Qh))})})},a1=(e,t)=>{const n=e.split(Qh),r=[];for(let o=0;o<n.length;o++){const i=Hh(n[o],t);if(r.push(i),i.type==="error")break}return r},Kh=4;function Te(e){if(e)return l1(e)}function l1(e){for(var t in Te.prototype)e[t]=Te.prototype[t];return e}Te.prototype.on=Te.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};Te.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};Te.prototype.off=Te.prototype.removeListener=Te.prototype.removeAllListeners=Te.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===t||r.fn===t){n.splice(o,1);break}return n.length===0&&delete this._callbacks["$"+e],this};Te.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,t)}return this};Te.prototype.emitReserved=Te.prototype.emit;Te.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};Te.prototype.hasListeners=function(e){return!!this.listeners(e).length};const xt=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function Vh(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const s1=xt.setTimeout,u1=xt.clearTimeout;function dl(e,t){t.useNativeTimers?(e.setTimeoutFn=s1.bind(xt),e.clearTimeoutFn=u1.bind(xt)):(e.setTimeoutFn=xt.setTimeout.bind(xt),e.clearTimeoutFn=xt.clearTimeout.bind(xt))}const d1=1.33;function c1(e){return typeof e=="string"?p1(e):Math.ceil((e.byteLength||e.size)*d1)}function p1(e){let t=0,n=0;for(let r=0,o=e.length;r<o;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}class f1 extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class $h extends Te{constructor(t){super(),this.writable=!1,dl(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,n,r){return super.emitReserved("error",new f1(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=Hh(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}}const Xh="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),nu=64,h1={};let sp=0,na=0,up;function dp(e){let t="";do t=Xh[e%nu]+t,e=Math.floor(e/nu);while(e>0);return t}function Zh(){const e=dp(+new Date);return e!==up?(sp=0,up=e):e+"."+dp(sp++)}for(;na<nu;na++)h1[Xh[na]]=na;function Jh(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function y1(e){let t={},n=e.split("&");for(let r=0,o=n.length;r<o;r++){let i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}let Gh=!1;try{Gh=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const m1=Gh;function ey(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||m1))return new XMLHttpRequest}catch{}if(!t)try{return new xt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function A1(){}const g1=function(){return new ey({xdomain:!1}).responseType!=null}();class v1 extends $h{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let o=location.port;o||(o=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||o!==t.port,this.xs=t.secure!==r}const n=t&&t.forceBase64;this.supportsBinary=g1&&!n}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};a1(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,i1(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let t=this.query||{};const n=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Zh()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.opts.port&&(n==="https"&&Number(this.opts.port)!==443||n==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const o=Jh(t),i=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(o.length?"?"+o:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new Wr(this.uri(),t)}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(o,i)=>{this.onError("xhr post error",o,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}let Wr=class Aa extends Te{constructor(t,n){super(),dl(this,n),this.opts=n,this.method=n.method||"GET",this.uri=t,this.async=n.async!==!1,this.data=n.data!==void 0?n.data:null,this.create()}create(){const t=Vh(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const n=this.xhr=new ey(t);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=Aa.requestsCount++,Aa.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=A1,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Aa.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}};Wr.requestsCount=0;Wr.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",cp);else if(typeof addEventListener=="function"){const e="onpagehide"in xt?"pagehide":"unload";addEventListener(e,cp,!1)}}function cp(){for(let e in Wr.requests)Wr.requests.hasOwnProperty(e)&&Wr.requests[e].abort()}const ty=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0))(),ra=xt.WebSocket||xt.MozWebSocket,pp=!0,b1="arraybuffer",fp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class w1 extends $h{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),n=this.opts.protocols,r=fp?{}:Vh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=pp&&!fp?n?new ra(t,n):new ra(t):new ra(t,n,r)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType||b1,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],o=n===t.length-1;Wh(r,this.supportsBinary,i=>{const s={};try{pp&&this.ws.send(i)}catch{}o&&ty(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const n=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(n==="wss"&&Number(this.opts.port)!==443||n==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=Zh()),this.supportsBinary||(t.b64=1);const o=Jh(t),i=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(o.length?"?"+o:"")}check(){return!!ra}}const E1={websocket:w1,polling:v1},x1=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,k1=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ru(e){const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let o=x1.exec(e||""),i={},s=14;for(;s--;)i[k1[s]]=o[s]||"";return n!=-1&&r!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=C1(i,i.path),i.queryKey=S1(i,i.query),i}function C1(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function S1(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,o,i){o&&(n[o]=i)}),n}let ny=class wr extends Te{constructor(t,n={}){super(),this.writeBuffer=[],t&&typeof t=="object"&&(n=t,t=null),t?(t=ru(t),n.hostname=t.host,n.secure=t.protocol==="https"||t.protocol==="wss",n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=ru(n.host).host),dl(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=y1(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=Kh,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts.transportOptions[t],this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new E1[t](r)}open(){let t;if(this.opts.rememberUpgrade&&wr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(t){let n=this.createTransport(t),r=!1;wr.priorWebsocketSuccess=!1;const o=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",E=>{if(!r)if(E.type==="pong"&&E.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;wr.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(k(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function i(){r||(r=!0,k(),n.close(),n=null)}const s=E=>{const y=new Error("probe error: "+E);y.transport=n.name,i(),this.emitReserved("upgradeError",y)};function p(){s("transport closed")}function h(){s("socket closed")}function A(E){n&&E.name!==n.name&&i()}const k=()=>{n.removeListener("open",o),n.removeListener("error",s),n.removeListener("close",p),this.off("close",h),this.off("upgrading",A)};n.once("open",o),n.once("error",s),n.once("close",p),this.once("close",h),this.once("upgrading",A),n.open()}onOpen(){if(this.readyState="open",wr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let t=0;const n=this.upgrades.length;for(;t<n;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=t.data,this.onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const o=this.writeBuffer[r].data;if(o&&(n+=c1(o)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(t,n,r){return this.sendPacket("message",t,n,r),this}send(t,n,r){return this.sendPacket("message",t,n,r),this}sendPacket(t,n,r,o){if(typeof n=="function"&&(o=n,n=void 0),typeof r=="function"&&(o=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const i={type:t,data:n,options:r};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),o&&this.once("flush",o),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}onError(t){wr.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const n=[];let r=0;const o=t.length;for(;r<o;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}};ny.protocol=Kh;function B1(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=ru(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}const L1=typeof ArrayBuffer=="function",I1=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,ry=Object.prototype.toString,_1=typeof Blob=="function"||typeof Blob<"u"&&ry.call(Blob)==="[object BlobConstructor]",T1=typeof File=="function"||typeof File<"u"&&ry.call(File)==="[object FileConstructor]";function ld(e){return L1&&(e instanceof ArrayBuffer||I1(e))||_1&&e instanceof Blob||T1&&e instanceof File}function ga(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(ga(e[n]))return!0;return!1}if(ld(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ga(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&ga(e[n]))return!0;return!1}function R1(e){const t=[],n=e.data,r=e;return r.data=ou(n,t),r.attachments=t.length,{packet:r,buffers:t}}function ou(e,t){if(!e)return e;if(ld(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=ou(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=ou(e[r],t));return n}return e}function P1(e,t){return e.data=iu(e.data,t),delete e.attachments,e}function iu(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=iu(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=iu(e[n],t));return e}const z1=5;var ue;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(ue||(ue={}));class O1{constructor(t){this.replacer=t}encode(t){return(t.type===ue.EVENT||t.type===ue.ACK)&&ga(t)?this.encodeAsBinary({type:t.type===ue.EVENT?ue.BINARY_EVENT:ue.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===ue.BINARY_EVENT||t.type===ue.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=R1(t),r=this.encodeAsString(n.packet),o=n.buffers;return o.unshift(r),o}}class sd extends Te{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===ue.BINARY_EVENT;r||n.type===ue.BINARY_ACK?(n.type=r?ue.EVENT:ue.ACK,this.reconstructor=new D1(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ld(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(ue[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===ue.BINARY_EVENT||r.type===ue.BINARY_ACK){const i=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const s=t.substring(i,n);if(s!=Number(s)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(s)}if(t.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(i,n)}else r.nsp="/";const o=t.charAt(n+1);if(o!==""&&Number(o)==o){const i=n+1;for(;++n;){const s=t.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===t.length)break}r.id=Number(t.substring(i,n+1))}if(t.charAt(++n)){const i=this.tryParse(t.substr(n));if(sd.isPayloadValid(r.type,i))r.data=i;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case ue.CONNECT:return typeof n=="object";case ue.DISCONNECT:return n===void 0;case ue.CONNECT_ERROR:return typeof n=="string"||typeof n=="object";case ue.EVENT:case ue.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case ue.ACK:case ue.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class D1{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=P1(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const N1=Object.freeze(Object.defineProperty({__proto__:null,Decoder:sd,Encoder:O1,get PacketType(){return ue},protocol:z1},Symbol.toStringTag,{value:"Module"}));function Ot(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const M1=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class oy extends Te{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ot(t,"open",this.onopen.bind(this)),Ot(t,"packet",this.onpacket.bind(this)),Ot(t,"error",this.onerror.bind(this)),Ot(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){if(M1.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const r={type:ue.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const s=this.ids++,p=n.pop();this._registerAckCallback(s,p),r.id=s}const o=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!o||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,n){var r;const o=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(o===void 0){this.acks[t]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===t&&this.sendBuffer.splice(s,1);n.call(this,new Error("operation has timed out"))},o);this.acks[t]=(...s)=>{this.io.clearTimeoutFn(i),n.apply(this,[null,...s])}}emitWithAck(t,...n){const r=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((o,i)=>{n.push((s,p)=>r?s?i(s):o(p):o(s)),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((o,...i)=>r!==this._queue[0]?void 0:(o!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(o)):(this._queue.shift(),n&&n(null,...i)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:ue.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case ue.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ue.EVENT:case ue.BINARY_EVENT:this.onevent(t);break;case ue.ACK:case ue.BINARY_ACK:this.onack(t);break;case ue.DISCONNECT:this.ondisconnect();break;case ue.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...o){r||(r=!0,n.packet({type:ue.ACK,id:t,data:o}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(n.apply(this,t.data),delete this.acks[t.id])}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ue.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function to(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}to.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};to.prototype.reset=function(){this.attempts=0};to.prototype.setMin=function(e){this.ms=e};to.prototype.setMax=function(e){this.max=e};to.prototype.setJitter=function(e){this.jitter=e};class au extends Te{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,dl(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new to({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const o=n.parser||N1;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new ny(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const o=Ot(n,"open",function(){r.onopen(),t&&t()}),i=Ot(n,"error",s=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",s),t?t(s):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const s=this._timeout;s===0&&o();const p=this.setTimeoutFn(()=>{o(),n.close(),n.emit("error",new Error("timeout"))},s);this.opts.autoUnref&&p.unref(),this.subs.push(function(){clearTimeout(p)})}return this.subs.push(o),this.subs.push(i),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ot(t,"ping",this.onping.bind(this)),Ot(t,"data",this.ondata.bind(this)),Ot(t,"error",this.onerror.bind(this)),Ot(t,"close",this.onclose.bind(this)),Ot(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){ty(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new oy(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(o=>{o?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",o)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const jo={};function va(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=B1(e,t.path||"/socket.io"),r=n.source,o=n.id,i=n.path,s=jo[o]&&i in jo[o].nsps,p=t.forceNew||t["force new connection"]||t.multiplex===!1||s;let h;return p?h=new au(r,t):(jo[o]||(jo[o]=new au(r,t)),h=jo[o]),n.query&&!t.query&&(t.query=n.queryKey),h.socket(n.path,t)}Object.assign(va,{Manager:au,Socket:oy,io:va,connect:va});const hp=e=>ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 4335 4335",...e,children:[ee.jsx("path",{d:"M2155 4191c1116 0 2021-905 2021-2021S3271 149 2155 149 134 1054 134 2170s905 2021 2021 2021z"}),ee.jsx("path",{fill:"#e6e6e6",d:"M2156 1207h14c308 9 555 304 555 667s-247 659-555 667h-15c-351 0-569-345-569-668 0-363 247-659 555-667h15zM914 3737s417-823 719-963c247-114 800-114 1046 0 302 139 719 963 719 963-411 335-929 423-1173 446v8s-25 0-69-3c-44 3-69 3-69 3v-8c-244-23-762-111-1173-446z"})]}),j1=e=>ee.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",...e,children:ee.jsx("path",{d:"m20.9 30.6.8 25.8L64 9.5zM0 11.2l20.1 17.5L63.3 7.6z"})}),F1="_header_wrnun_1",U1="_main_wrnun_155",q1="_dplayer_wrnun_1",W1="_publicity_wrnun_267",H1="_playground_wrnun_297",Y1="_avatar_wrnun_335",Q1="_nick_wrnun_347",K1="_message_wrnun_355",Ze={header:F1,"container-profile-menu":"_container-profile-menu_wrnun_83","profile-menu-nickname":"_profile-menu-nickname_wrnun_103","profile-menu-action":"_profile-menu-action_wrnun_129",main:U1,"container-player":"_container-player_wrnun_205",dplayer:q1,"container-chat":"_container-chat_wrnun_233",publicity:W1,playground:H1,"msg-playground":"_msg-playground_wrnun_321",avatar:Y1,nick:Q1,message:K1,"stream-details":"_stream-details_wrnun_425","stream-actions":"_stream-actions_wrnun_455"};function V1(){const{user:e,logOut:t}=Q.useContext(ad),[n,r]=Q.useState(null),[o,i]=Q.useState(null),[s,p]=Q.useState([]),[h,A]=Q.useState(!1),k=Q.useRef(null),E=Q.useRef(null),y=Q.useRef(null);function L(){k.current!=null&&E.current!=null&&(E.current.scrollTo({top:Number.MAX_SAFE_INTEGER}),E.current.style.height=`${k.current.clientHeight}px`)}function B(){console.log("connected")}function g(z){console.log("event",z)}function T(){console.log("disconnected")}function x(z){C(z)}function b(z){console.log("users connected:",z)}function C({from:z,message:F}){p(M=>[...M,{nick:z,message:F}])}const I=()=>{e!==null&&y.current!==null&&y.current.value!==""&&(o==null||o.emit("onMessage",{action:"onMessage",message:y.current.value}),y.current.value="")};return Q.useEffect(()=>{E.current!=null&&E.current.scrollTo({top:Number.MAX_SAFE_INTEGER})},[s.length]),Q.useEffect(()=>{var F;window.addEventListener("resize",L),r(new Zv({container:document.getElementById("dplayer"),autoplay:!0,video:{url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",type:"hls"}}));const z=va("https://wltestchatservice.pagekite.me",{query:{username:(F=qh())==null?void 0:F.nickname}});return z.on("connect",B),z.on("exception",g),z.on("disconnect",T),z.on("newMessage",x),z.on("usersConnected",b),i(z),L(),()=>{n!=null&&n.destroy(),z.on("connect",B),z.on("exception",g),z.on("disconnect",T),z.on("newMessage",x),z.on("usersConnected",b),z.close(),window.removeEventListener("resize",L)}},[]),ee.jsxs(ee.Fragment,{children:[ee.jsxs("header",{className:Ze.header,children:[ee.jsx("img",{src:"https://tevasamorir.com/wp-content/uploads/2022/01/White_LogoTeVasAMorir.png",alt:"diego's logo"}),ee.jsx("h1",{children:"AMORir"}),ee.jsx(hp,{className:Ze.profile,onClick:()=>{A(!h)}}),h&&ee.jsxs("div",{className:Ze["container-profile-menu"],children:[ee.jsx("div",{className:Ze["profile-menu-nickname"],children:e==null?void 0:e.nickname}),ee.jsx("ul",{children:ee.jsx("li",{children:ee.jsx("a",{href:"#",className:Ze["profile-menu-action"],onClick:t,children:"SALIR"})})})]})]}),ee.jsxs("main",{className:Ze.main,children:[ee.jsx("div",{ref:k,className:Ze["container-player"],children:ee.jsx("div",{id:"dplayer"})}),ee.jsxs("div",{className:Ze["stream-details"],children:[ee.jsx("h3",{children:"TE VAS A MORIR. "}),ee.jsx("p",{children:"¿Qué carajo estás haciendo con tu vida?"}),ee.jsx("p",{children:"Soy Diego Dreyfus y no busco cambiar tu vida. Me dedico a crecer y si quieres usar mi proceso para inspirarte, qué chingón."})]}),ee.jsxs("div",{className:Ze["container-chat"],children:[ee.jsxs("div",{className:Ze.publicity,children:[ee.jsx("h3",{children:"Un proceso para crecer todo el año. 💪🚀"}),ee.jsx("p",{children:"Suscríbete y recibe pensamientos que escribo para mí 😎"}),ee.jsx("a",{href:"#",children:"follow me"})]}),ee.jsx("div",{ref:E,className:Ze.playground,children:s.length>0&&s.map(({nick:z,message:F},M)=>ee.jsxs("div",{className:Ze["msg-playground"],children:[ee.jsx(hp,{className:Ze.avatar}),ee.jsxs("span",{className:Ze.nick,children:[z,": "]}),ee.jsx("span",{children:F})]},z+M.toString()))}),ee.jsxs("div",{className:Ze.message,children:[ee.jsx("input",{ref:y,type:"text",placeholder:"comentar...",onKeyDown:z=>{z.key==="Enter"&&I()}}),ee.jsx("button",{onClick:()=>{I()},children:ee.jsx(j1,{})})]})]}),ee.jsxs("div",{className:Ze["stream-actions"],children:[ee.jsx("h4",{children:"DONAR:"}),ee.jsx("button",{children:"$5"}),ee.jsx("button",{children:"$15"}),ee.jsx("button",{children:"$20"})]})]})]})}const $1="_root_vvot9_1",X1="_control_vvot9_45",yp={root:$1,control:X1};function Z1(){const[e,t]=Q.useState(""),{logIn:n}=Q.useContext(ad);function r(o){o.preventDefault(),e!==""&&n({nickname:e})}return ee.jsx("div",{className:yp.root,children:ee.jsxs("form",{onSubmit:r,children:[ee.jsxs("div",{className:yp.control,children:[ee.jsx("label",{htmlFor:"nickname",children:"Nickname:"}),ee.jsx("input",{type:"text",id:"nickname",placeholder:"ex: coolest92",value:e,onChange:o=>{t(o.target.value)}})]}),ee.jsx("input",{type:"submit",value:"LOGIN"})]})})}const J1=Hv([{path:"/login",element:ee.jsx(ip,{children:ee.jsx(Z1,{})})},{path:"/",element:ee.jsx(ip,{children:ee.jsx(V1,{})})}]);ts.createRoot(document.getElementById("root")).render(ee.jsx(kp.StrictMode,{children:ee.jsx(jv,{router:J1})}));
