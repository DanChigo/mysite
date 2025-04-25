function Wd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bh={exports:{}},rl={},Ah={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Hd=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Xd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),R1=Symbol.iterator;function e0(e){return e===null||typeof e!="object"?null:(e=R1&&e[R1]||e["@@iterator"],typeof e=="function"?e:null)}var Mh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eh=Object.assign,Sh={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Sh,this.updater=n||Mh}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ch(){}Ch.prototype=jr.prototype;function bs(e,t,n){this.props=e,this.context=t,this.refs=Sh,this.updater=n||Mh}var As=bs.prototype=new Ch;As.constructor=bs;Eh(As,jr.prototype);As.isPureReactComponent=!0;var T1=Array.isArray,$h=Object.prototype.hasOwnProperty,Ms={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function Nh(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)$h.call(t,r)&&!jh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:$o,type:e,key:i,ref:l,props:o,_owner:Ms.current}}function t0(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function n0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var P1=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n0(""+e.key):t.toString(36)}function ri(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $o:case Qd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Rl(l,0):r,T1(o)?(n="",e!=null&&(n=e.replace(P1,"$&/")+"/"),ri(o,t,n,"",function(u){return u})):o!=null&&(Es(o)&&(o=t0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P1,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",T1(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Rl(i,a);l+=ri(i,t,n,s,o)}else if(s=e0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Rl(i,a++),l+=ri(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Oo(e,t,n){if(e==null)return e;var r=[],o=0;return ri(e,r,"","",function(i){return t.call(n,i,o++)}),r}function r0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},oi={transition:null},o0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:oi,ReactCurrentOwner:Ms};function Ih(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Oo,forEach:function(e,t,n){Oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oo(e,function(){t++}),t},toArray:function(e){return Oo(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=jr;G.Fragment=Hd;G.Profiler=Gd;G.PureComponent=bs;G.StrictMode=Vd;G.Suspense=Zd;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;G.act=Ih;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eh({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)$h.call(t,s)&&!jh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$o,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kd,_context:e},e.Consumer=e};G.createElement=Nh;G.createFactory=function(e){var t=Nh.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Jd,render:e}};G.isValidElement=Es;G.lazy=function(e){return{$$typeof:qd,_payload:{_status:-1,_result:e},_init:r0}};G.memo=function(e,t){return{$$typeof:Xd,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=oi.transition;oi.transition={};try{e()}finally{oi.transition=t}};G.unstable_act=Ih;G.useCallback=function(e,t){return Fe.current.useCallback(e,t)};G.useContext=function(e){return Fe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Fe.current.useEffect(e,t)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Fe.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};G.useRef=function(e){return Fe.current.useRef(e)};G.useState=function(e){return Fe.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.3.1";Ah.exports=G;var y=Ah.exports;const p=kh(y),i0=Wd({__proto__:null,default:p},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=y,a0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,h0=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function Rh(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)u0.call(t,r)&&!c0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:a0,type:e,key:i,ref:l,props:o,_owner:h0.current}}rl.Fragment=s0;rl.jsx=Rh;rl.jsxs=Rh;bh.exports=rl;var h=bh.exports,Th={exports:{}},nt={},Ph={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,R){var O=$.length;$.push(R);e:for(;0<O;){var K=O-1>>>1,Q=$[K];if(0<o(Q,R))$[K]=R,$[O]=Q,O=K;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var R=$[0],O=$.pop();if(O!==R){$[0]=O;e:for(var K=0,Q=$.length,D=Q>>>1;K<D;){var L=2*(K+1)-1,Y=$[L],B=L+1,H=$[B];if(0>o(Y,O))B<Q&&0>o(H,Y)?($[K]=H,$[B]=O,K=B):($[K]=Y,$[L]=O,K=L);else if(B<Q&&0>o(H,O))$[K]=H,$[B]=O,K=B;else break e}}return R}function o($,R){var O=$.sortIndex-R.sortIndex;return O!==0?O:$.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],g=1,c=null,v=3,w=!1,k=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=$)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function x($){if(b=!1,f($),!k)if(n(s)!==null)k=!0,we(A);else{var R=n(u);R!==null&&ke(x,R.startTime-$)}}function A($,R){k=!1,b&&(b=!1,d(I),I=-1),w=!0;var O=v;try{for(f(R),c=n(s);c!==null&&(!(c.expirationTime>R)||$&&!q());){var K=c.callback;if(typeof K=="function"){c.callback=null,v=c.priorityLevel;var Q=K(c.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(s)&&r(s),f(R)}else r(s);c=n(s)}if(c!==null)var D=!0;else{var L=n(u);L!==null&&ke(x,L.startTime-R),D=!1}return D}finally{c=null,v=O,w=!1}}var M=!1,S=null,I=-1,z=5,_=-1;function q(){return!(e.unstable_now()-_<z)}function ee(){if(S!==null){var $=e.unstable_now();_=$;var R=!0;try{R=S(!0,$)}finally{R?me():(M=!1,S=null)}}else M=!1}var me;if(typeof m=="function")me=function(){m(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=ee,me=function(){se.postMessage(null)}}else me=function(){E(ee,0)};function we($){S=$,M||(M=!0,me())}function ke($,R){I=E(function(){$(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,we(A))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var R=3;break;default:R=v}var O=v;v=R;try{return $()}finally{v=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,R){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=v;v=$;try{return R()}finally{v=O}},e.unstable_scheduleCallback=function($,R,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,$={id:g++,callback:R,priorityLevel:$,startTime:O,expirationTime:Q,sortIndex:-1},O>K?($.sortIndex=O,t(u,$),n(s)===null&&$===n(u)&&(b?(d(I),I=-1):b=!0,ke(x,O-K))):($.sortIndex=Q,t(s,$),k||w||(k=!0,we(A))),$},e.unstable_shouldYield=q,e.unstable_wrapCallback=function($){var R=v;return function(){var O=v;v=R;try{return $.apply(this,arguments)}finally{v=O}}}})(Oh);Ph.exports=Oh;var m0=Ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=y,tt=m0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _h=new Set,oo={};function Fn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(oo[e]=t,e=0;e<t.length;e++)_h.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,f0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O1={},_1={};function p0(e){return ca.call(_1,e)?!0:ca.call(O1,e)?!1:f0.test(e)?_1[e]=!0:(O1[e]=!0,!1)}function g0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v0(e,t,n,r){if(t===null||typeof t>"u"||g0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Pe[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,Cs);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,n,r){var o=Pe.hasOwnProperty(t)?Pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v0(t,n,o,r)&&(n=null),r||o===null?p0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),js=Symbol.for("react.strict_mode"),ma=Symbol.for("react.profiler"),Dh=Symbol.for("react.provider"),Lh=Symbol.for("react.context"),Ns=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Bh=Symbol.for("react.offscreen"),D1=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=D1&&e[D1]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Tl;function Wr(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Pl=!1;function Ol(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function y0(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Zn:return"Portal";case ma:return"Profiler";case js:return"StrictMode";case da:return"Suspense";case fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lh:return(e.displayName||"Context")+".Consumer";case Dh:return(e._context.displayName||"Context")+".Provider";case Ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Is:return t=e.displayName||null,t!==null?t:pa(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return pa(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(t);case 8:return t===js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w0(e){var t=zh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=w0(e))}function Fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function L1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uh(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function va(e,t){Uh(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function B1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function z1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Qr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Wh(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function F1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Vh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Gh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var b0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,mr=null,dr=null;function U1(e){if(e=Io(e)){if(typeof Ma!="function")throw Error(j(280));var t=e.stateNode;t&&(t=sl(t),Ma(e.stateNode,e.type,t))}}function Kh(e){mr?dr?dr.push(e):dr=[e]:mr=e}function Yh(){if(mr){var e=mr,t=dr;if(dr=mr=null,U1(e),t)for(e=0;e<t.length;e++)U1(t[e])}}function Jh(e,t){return e(t)}function Zh(){}var _l=!1;function Xh(e,t,n){if(_l)return e(t,n);_l=!0;try{return Jh(e,t,n)}finally{_l=!1,(mr!==null||dr!==null)&&(Zh(),Yh())}}function lo(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ea=!1;if(Ft)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ea=!1}function A0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Yr=!1,ki=null,bi=!1,Sa=null,M0={onError:function(e){Yr=!0,ki=e}};function E0(e,t,n,r,o,i,l,a,s){Yr=!1,ki=null,A0.apply(M0,arguments)}function S0(e,t,n,r,o,i,l,a,s){if(E0.apply(this,arguments),Yr){if(Yr){var u=ki;Yr=!1,ki=null}else throw Error(j(198));bi||(bi=!0,Sa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W1(e){if(Un(e)!==e)throw Error(j(188))}function C0(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return W1(o),e;if(i===r)return W1(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ec(e){return e=C0(e),e!==null?tc(e):null}function tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tc(e);if(t!==null)return t;e=e.sibling}return null}var nc=tt.unstable_scheduleCallback,Q1=tt.unstable_cancelCallback,$0=tt.unstable_shouldYield,j0=tt.unstable_requestPaint,ge=tt.unstable_now,N0=tt.unstable_getCurrentPriorityLevel,Ts=tt.unstable_ImmediatePriority,rc=tt.unstable_UserBlockingPriority,Ai=tt.unstable_NormalPriority,I0=tt.unstable_LowPriority,oc=tt.unstable_IdlePriority,ol=null,St=null;function R0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:O0,T0=Math.log,P0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(T0(e)/P0|0)|0}var Bo=64,zo=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Hr(a):(i&=l,i!==0&&(r=Hr(i)))}else l=n&~o,l!==0?r=Hr(l):i!==0&&(r=Hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function _0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-gt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=_0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ic(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ac,Os,sc,uc,hc,$a=!1,Fo=[],nn=null,rn=null,on=null,ao=new Map,so=new Map,Zt=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function H1(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function _r(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Io(t),t!==null&&Os(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function z0(e,t,n,r,o){switch(t){case"focusin":return nn=_r(nn,e,t,n,r,o),!0;case"dragenter":return rn=_r(rn,e,t,n,r,o),!0;case"mouseover":return on=_r(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ao.set(i,_r(ao.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,so.set(i,_r(so.get(i)||null,e,t,n,r,o)),!0}return!1}function cc(e){var t=En(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=qh(n),t!==null){e.blockedOn=t,hc(e.priority,function(){sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return t=Io(n),t!==null&&Os(t),e.blockedOn=n,!1;t.shift()}return!0}function V1(e,t,n){ii(e)&&n.delete(t)}function F0(){$a=!1,nn!==null&&ii(nn)&&(nn=null),rn!==null&&ii(rn)&&(rn=null),on!==null&&ii(on)&&(on=null),ao.forEach(V1),so.forEach(V1)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,F0)))}function uo(e){function t(o){return Dr(o,e)}if(0<Fo.length){Dr(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Dr(nn,e),rn!==null&&Dr(rn,e),on!==null&&Dr(on,e),ao.forEach(t),so.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)cc(n),n.blockedOn===null&&Zt.shift()}var fr=Ht.ReactCurrentBatchConfig,Ei=!0;function U0(e,t,n,r){var o=te,i=fr.transition;fr.transition=null;try{te=1,_s(e,t,n,r)}finally{te=o,fr.transition=i}}function W0(e,t,n,r){var o=te,i=fr.transition;fr.transition=null;try{te=4,_s(e,t,n,r)}finally{te=o,fr.transition=i}}function _s(e,t,n,r){if(Ei){var o=ja(e,t,n,r);if(o===null)Gl(e,t,r,Si,n),H1(e,r);else if(z0(o,e,t,n,r))r.stopPropagation();else if(H1(e,r),t&4&&-1<B0.indexOf(e)){for(;o!==null;){var i=Io(o);if(i!==null&&ac(i),i=ja(e,t,n,r),i===null&&Gl(e,t,r,Si,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var Si=null;function ja(e,t,n,r){if(Si=null,e=Rs(r),e=En(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Si=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case Ts:return 1;case rc:return 4;case Ai:case I0:return 16;case oc:return 536870912;default:return 16}default:return 16}}var qt=null,Ds=null,li=null;function dc(){if(li)return li;var e,t=Ds,n=t.length,r,o="value"in qt?qt.value:qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return li=o.slice(e,1<r?1-r:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function G1(){return!1}function rt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Uo:G1,this.isPropagationStopped=G1,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=rt(Nr),No=ce({},Nr,{view:0,detail:0}),Q0=rt(No),Ll,Bl,Lr,il=ce({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ll=e.screenX-Lr.screenX,Bl=e.screenY-Lr.screenY):Bl=Ll=0,Lr=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),K1=rt(il),H0=ce({},il,{dataTransfer:0}),V0=rt(H0),G0=ce({},No,{relatedTarget:0}),zl=rt(G0),K0=ce({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=rt(K0),J0=ce({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=rt(J0),X0=ce({},Nr,{data:0}),Y1=rt(X0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function Bs(){return nf}var rf=ce({},No,{key:function(e){if(e.key){var t=q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=rt(rf),lf=ce({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J1=rt(lf),af=ce({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),sf=rt(af),uf=ce({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=rt(uf),cf=ce({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=rt(cf),df=[9,13,27,32],zs=Ft&&"CompositionEvent"in window,Jr=null;Ft&&"documentMode"in document&&(Jr=document.documentMode);var ff=Ft&&"TextEvent"in window&&!Jr,fc=Ft&&(!zs||Jr&&8<Jr&&11>=Jr),Z1=" ",X1=!1;function pc(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function pf(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(X1=!0,Z1);case"textInput":return e=t.data,e===Z1&&X1?null:e;default:return null}}function gf(e,t){if(qn)return e==="compositionend"||!zs&&pc(e,t)?(e=dc(),li=Ds=qt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vf[e.type]:t==="textarea"}function vc(e,t,n,r){Kh(r),t=Ci(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,ho=null;function yf(e){$c(e,0)}function ll(e){var t=nr(e);if(Fh(t))return e}function xf(e,t){if(e==="change")return t}var yc=!1;if(Ft){var Fl;if(Ft){var Ul="oninput"in document;if(!Ul){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),Ul=typeof eu.oninput=="function"}Fl=Ul}else Fl=!1;yc=Fl&&(!document.documentMode||9<document.documentMode)}function tu(){Zr&&(Zr.detachEvent("onpropertychange",xc),ho=Zr=null)}function xc(e){if(e.propertyName==="value"&&ll(ho)){var t=[];vc(t,ho,e,Rs(e)),Xh(yf,t)}}function wf(e,t,n){e==="focusin"?(tu(),Zr=t,ho=n,Zr.attachEvent("onpropertychange",xc)):e==="focusout"&&tu()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(ho)}function bf(e,t){if(e==="click")return ll(t)}function Af(e,t){if(e==="input"||e==="change")return ll(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Mf;function co(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ca.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=nu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ef(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wc(n.ownerDocument.documentElement,n)){if(r!==null&&Fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ru(n,i);var l=ru(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sf=Ft&&"documentMode"in document&&11>=document.documentMode,er=null,Na=null,Xr=null,Ia=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||er==null||er!==wi(r)||(r=er,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&co(Xr,r)||(Xr=r,r=Ci(Na,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Wl={},bc={};Ft&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function al(e){if(Wl[e])return Wl[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bc)return Wl[e]=t[n];return e}var Ac=al("animationend"),Mc=al("animationiteration"),Ec=al("animationstart"),Sc=al("transitionend"),Cc=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Cc.set(e,t),Fn(t,[e])}for(var Ql=0;Ql<iu.length;Ql++){var Hl=iu[Ql],Cf=Hl.toLowerCase(),$f=Hl[0].toUpperCase()+Hl.slice(1);yn(Cf,"on"+$f)}yn(Ac,"onAnimationEnd");yn(Mc,"onAnimationIteration");yn(Ec,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Sc,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S0(r,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;lu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;lu(o,a,u),i=s}}}if(bi)throw e=Sa,bi=!1,Sa=null,e}function re(e,t){var n=t[_a];n===void 0&&(n=t[_a]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Qo]){e[Qo]=!0,_h.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,Vl("selectionchange",!1,t))}}function jc(e,t,n,r){switch(mc(t)){case 1:var o=U0;break;case 4:o=W0;break;default:o=_s}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=En(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Xh(function(){var u=i,g=Rs(n),c=[];e:{var v=Cc.get(e);if(v!==void 0){var w=Ls,k=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":w=of;break;case"focusin":k="focus",w=zl;break;case"focusout":k="blur",w=zl;break;case"beforeblur":case"afterblur":w=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=K1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sf;break;case Ac:case Mc:case Ec:w=Y0;break;case Sc:w=hf;break;case"scroll":w=Q0;break;case"wheel":w=mf;break;case"copy":case"cut":case"paste":w=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=J1}var b=(t&4)!==0,E=!b&&e==="scroll",d=b?v!==null?v+"Capture":null:v;b=[];for(var m=u,f;m!==null;){f=m;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=lo(m,d),x!=null&&b.push(fo(m,x,f)))),E)break;m=m.return}0<b.length&&(v=new w(v,k,null,n,g),c.push({event:v,listeners:b}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==Aa&&(k=n.relatedTarget||n.fromElement)&&(En(k)||k[Ut]))break e;if((w||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=u,k=k?En(k):null,k!==null&&(E=Un(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=u),w!==k)){if(b=K1,x="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=J1,x="onPointerLeave",d="onPointerEnter",m="pointer"),E=w==null?v:nr(w),f=k==null?v:nr(k),v=new b(x,m+"leave",w,n,g),v.target=E,v.relatedTarget=f,x=null,En(g)===u&&(b=new b(d,m+"enter",k,n,g),b.target=f,b.relatedTarget=E,x=b),E=x,w&&k)t:{for(b=w,d=k,m=0,f=b;f;f=Gn(f))m++;for(f=0,x=d;x;x=Gn(x))f++;for(;0<m-f;)b=Gn(b),m--;for(;0<f-m;)d=Gn(d),f--;for(;m--;){if(b===d||d!==null&&b===d.alternate)break t;b=Gn(b),d=Gn(d)}b=null}else b=null;w!==null&&au(c,v,w,b,!1),k!==null&&E!==null&&au(c,E,k,b,!0)}}e:{if(v=u?nr(u):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var A=xf;else if(q1(v))if(yc)A=Af;else{A=kf;var M=wf}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(A=bf);if(A&&(A=A(e,u))){vc(c,A,n,g);break e}M&&M(e,v,u),e==="focusout"&&(M=v._wrapperState)&&M.controlled&&v.type==="number"&&ya(v,"number",v.value)}switch(M=u?nr(u):window,e){case"focusin":(q1(M)||M.contentEditable==="true")&&(er=M,Na=u,Xr=null);break;case"focusout":Xr=Na=er=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,ou(c,n,g);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":ou(c,n,g)}var S;if(zs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qn?pc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fc&&n.locale!=="ko"&&(qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&qn&&(S=dc()):(qt=g,Ds="value"in qt?qt.value:qt.textContent,qn=!0)),M=Ci(u,I),0<M.length&&(I=new Y1(I,e,null,n,g),c.push({event:I,listeners:M}),S?I.data=S:(S=gc(n),S!==null&&(I.data=S)))),(S=ff?pf(e,n):gf(e,n))&&(u=Ci(u,"onBeforeInput"),0<u.length&&(g=new Y1("onBeforeInput","beforeinput",null,n,g),c.push({event:g,listeners:u}),g.data=S))}$c(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=lo(e,n),i!=null&&r.unshift(fo(e,i,o)),i=lo(e,t),i!=null&&r.push(fo(e,i,o))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=lo(n,i),s!=null&&l.unshift(fo(n,s,a))):o||(s=lo(n,i),s!=null&&l.push(fo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Nf=/\r\n?/g,If=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(If,"")}function Ho(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(j(425))}function $i(){}var Ra=null,Ta=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(Pf)}:Oa;function Pf(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);uo(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),Et="__reactFiber$"+Ir,po="__reactProps$"+Ir,Ut="__reactContainer$"+Ir,_a="__reactEvents$"+Ir,Of="__reactListeners$"+Ir,_f="__reactHandles$"+Ir;function En(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Et])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function Io(e){return e=e[Et]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function sl(e){return e[po]||null}var Da=[],rr=-1;function xn(e){return{current:e}}function ie(e){0>rr||(e.current=Da[rr],Da[rr]=null,rr--)}function ne(e,t){rr++,Da[rr]=e.current,e.current=t}var pn={},Le=xn(pn),He=xn(!1),Tn=pn;function yr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ji(){ie(He),ie(Le)}function cu(e,t,n){if(Le.current!==pn)throw Error(j(168));ne(Le,t),ne(He,n)}function Nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,x0(e)||"Unknown",o));return ce({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Tn=Le.current,ne(Le,e),ne(He,He.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Nc(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Le),ne(Le,e)):ie(He),ne(He,n)}var _t=null,ul=!1,Yl=!1;function Ic(e){_t===null?_t=[e]:_t.push(e)}function Df(e){ul=!0,Ic(e)}function wn(){if(!Yl&&_t!==null){Yl=!0;var e=0,t=te;try{var n=_t;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,ul=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),nc(Ts,wn),o}finally{te=t,Yl=!1}}return null}var or=[],ir=0,Ii=null,Ri=0,it=[],lt=0,Pn=null,Dt=1,Lt="";function An(e,t){or[ir++]=Ri,or[ir++]=Ii,Ii=e,Ri=t}function Rc(e,t,n){it[lt++]=Dt,it[lt++]=Lt,it[lt++]=Pn,Pn=e;var r=Dt;e=Lt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Dt=1<<32-gt(t)+o|n<<o|r,Lt=i+e}else Dt=1<<i|n<<o|r,Lt=e}function Us(e){e.return!==null&&(An(e,1),Rc(e,1,0))}function Ws(e){for(;e===Ii;)Ii=or[--ir],or[ir]=null,Ri=or[--ir],or[ir]=null;for(;e===Pn;)Pn=it[--lt],it[lt]=null,Lt=it[--lt],it[lt]=null,Dt=it[--lt],it[lt]=null}var Xe=null,Ze=null,ae=!1,pt=null;function Tc(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(ae){var t=Ze;if(t){var n=t;if(!du(e,t)){if(La(e))throw Error(j(418));t=ln(n.nextSibling);var r=Xe;t&&du(e,t)?Tc(r,n):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(La(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Vo(e){if(e!==Xe)return!1;if(!ae)return fu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Ze)){if(La(e))throw Pc(),Error(j(418));for(;t;)Tc(e,t),t=ln(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?ln(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=Ze;e;)e=ln(e.nextSibling)}function xr(){Ze=Xe=null,ae=!1}function Qs(e){pt===null?pt=[e]:pt.push(e)}var Lf=Ht.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function Oc(e){function t(d,m){if(e){var f=d.deletions;f===null?(d.deletions=[m],d.flags|=16):f.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function o(d,m){return d=hn(d,m),d.index=0,d.sibling=null,d}function i(d,m,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<m?(d.flags|=2,m):f):(d.flags|=2,m)):(d.flags|=1048576,m)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,m,f,x){return m===null||m.tag!==6?(m=na(f,d.mode,x),m.return=d,m):(m=o(m,f),m.return=d,m)}function s(d,m,f,x){var A=f.type;return A===Xn?g(d,m,f.props.children,x,f.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yt&&pu(A)===m.type)?(x=o(m,f.props),x.ref=Br(d,m,f),x.return=d,x):(x=fi(f.type,f.key,f.props,null,d.mode,x),x.ref=Br(d,m,f),x.return=d,x)}function u(d,m,f,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=ra(f,d.mode,x),m.return=d,m):(m=o(m,f.children||[]),m.return=d,m)}function g(d,m,f,x,A){return m===null||m.tag!==7?(m=In(f,d.mode,x,A),m.return=d,m):(m=o(m,f),m.return=d,m)}function c(d,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=na(""+m,d.mode,f),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:return f=fi(m.type,m.key,m.props,null,d.mode,f),f.ref=Br(d,null,m),f.return=d,f;case Zn:return m=ra(m,d.mode,f),m.return=d,m;case Yt:var x=m._init;return c(d,x(m._payload),f)}if(Qr(m)||Pr(m))return m=In(m,d.mode,f,null),m.return=d,m;Go(d,m)}return null}function v(d,m,f,x){var A=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:a(d,m,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return f.key===A?s(d,m,f,x):null;case Zn:return f.key===A?u(d,m,f,x):null;case Yt:return A=f._init,v(d,m,A(f._payload),x)}if(Qr(f)||Pr(f))return A!==null?null:g(d,m,f,x,null);Go(d,f)}return null}function w(d,m,f,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,a(m,d,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _o:return d=d.get(x.key===null?f:x.key)||null,s(m,d,x,A);case Zn:return d=d.get(x.key===null?f:x.key)||null,u(m,d,x,A);case Yt:var M=x._init;return w(d,m,f,M(x._payload),A)}if(Qr(x)||Pr(x))return d=d.get(f)||null,g(m,d,x,A,null);Go(m,x)}return null}function k(d,m,f,x){for(var A=null,M=null,S=m,I=m=0,z=null;S!==null&&I<f.length;I++){S.index>I?(z=S,S=null):z=S.sibling;var _=v(d,S,f[I],x);if(_===null){S===null&&(S=z);break}e&&S&&_.alternate===null&&t(d,S),m=i(_,m,I),M===null?A=_:M.sibling=_,M=_,S=z}if(I===f.length)return n(d,S),ae&&An(d,I),A;if(S===null){for(;I<f.length;I++)S=c(d,f[I],x),S!==null&&(m=i(S,m,I),M===null?A=S:M.sibling=S,M=S);return ae&&An(d,I),A}for(S=r(d,S);I<f.length;I++)z=w(S,d,I,f[I],x),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?I:z.key),m=i(z,m,I),M===null?A=z:M.sibling=z,M=z);return e&&S.forEach(function(q){return t(d,q)}),ae&&An(d,I),A}function b(d,m,f,x){var A=Pr(f);if(typeof A!="function")throw Error(j(150));if(f=A.call(f),f==null)throw Error(j(151));for(var M=A=null,S=m,I=m=0,z=null,_=f.next();S!==null&&!_.done;I++,_=f.next()){S.index>I?(z=S,S=null):z=S.sibling;var q=v(d,S,_.value,x);if(q===null){S===null&&(S=z);break}e&&S&&q.alternate===null&&t(d,S),m=i(q,m,I),M===null?A=q:M.sibling=q,M=q,S=z}if(_.done)return n(d,S),ae&&An(d,I),A;if(S===null){for(;!_.done;I++,_=f.next())_=c(d,_.value,x),_!==null&&(m=i(_,m,I),M===null?A=_:M.sibling=_,M=_);return ae&&An(d,I),A}for(S=r(d,S);!_.done;I++,_=f.next())_=w(S,d,I,_.value,x),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?I:_.key),m=i(_,m,I),M===null?A=_:M.sibling=_,M=_);return e&&S.forEach(function(ee){return t(d,ee)}),ae&&An(d,I),A}function E(d,m,f,x){if(typeof f=="object"&&f!==null&&f.type===Xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:e:{for(var A=f.key,M=m;M!==null;){if(M.key===A){if(A=f.type,A===Xn){if(M.tag===7){n(d,M.sibling),m=o(M,f.props.children),m.return=d,d=m;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yt&&pu(A)===M.type){n(d,M.sibling),m=o(M,f.props),m.ref=Br(d,M,f),m.return=d,d=m;break e}n(d,M);break}else t(d,M);M=M.sibling}f.type===Xn?(m=In(f.props.children,d.mode,x,f.key),m.return=d,d=m):(x=fi(f.type,f.key,f.props,null,d.mode,x),x.ref=Br(d,m,f),x.return=d,d=x)}return l(d);case Zn:e:{for(M=f.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(d,m.sibling),m=o(m,f.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=ra(f,d.mode,x),m.return=d,d=m}return l(d);case Yt:return M=f._init,E(d,m,M(f._payload),x)}if(Qr(f))return k(d,m,f,x);if(Pr(f))return b(d,m,f,x);Go(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(n(d,m.sibling),m=o(m,f),m.return=d,d=m):(n(d,m),m=na(f,d.mode,x),m.return=d,d=m),l(d)):n(d,m)}return E}var wr=Oc(!0),_c=Oc(!1),Ti=xn(null),Pi=null,lr=null,Hs=null;function Vs(){Hs=lr=Pi=null}function Gs(e){var t=Ti.current;ie(Ti),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Pi=e,Hs=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Hs!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Pi===null)throw Error(j(308));lr=e,Pi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Sn=null;function Ks(e){Sn===null?Sn=[e]:Sn.push(e)}function Dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ks(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ks(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oi(e,t,n,r){var o=e.updateQueue;Jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;l=0,g=u=s=null,a=i;do{var v=a.lane,w=a.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,b=a;switch(v=t,w=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){c=k.call(w,c,v);break e}c=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,v=typeof k=="function"?k.call(w,c,v):k,v==null)break e;c=ce({},c,v);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else w={eventTime:w,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=w,s=c):g=g.next=w,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(g===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);_n|=l,e.lanes=l,e.memoizedState=c}}function vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Ro={},Ct=xn(Ro),go=xn(Ro),vo=xn(Ro);function Cn(e){if(e===Ro)throw Error(j(174));return e}function Js(e,t){switch(ne(vo,t),ne(go,e),ne(Ct,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}ie(Ct),ne(Ct,t)}function kr(){ie(Ct),ie(go),ie(vo)}function Bc(e){Cn(vo.current);var t=Cn(Ct.current),n=wa(t,e.type);t!==n&&(ne(go,e),ne(Ct,n))}function Zs(e){go.current===e&&(ie(Ct),ie(go))}var ue=xn(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Xs(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var ui=Ht.ReactCurrentDispatcher,Zl=Ht.ReactCurrentBatchConfig,On=0,he=null,Ae=null,Se=null,Di=!1,qr=!1,yo=0,Bf=0;function Oe(){throw Error(j(321))}function qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function e1(e,t,n,r,o,i){if(On=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?Wf:Qf,e=n(r,o),qr){i=0;do{if(qr=!1,yo=0,25<=i)throw Error(j(301));i+=1,Se=Ae=null,t.updateQueue=null,ui.current=Hf,e=n(r,o)}while(qr)}if(ui.current=Li,t=Ae!==null&&Ae.next!==null,On=0,Se=Ae=he=null,Di=!1,t)throw Error(j(300));return e}function t1(){var e=yo!==0;return yo=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function ht(){if(Ae===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,Ae=e;else{if(e===null)throw Error(j(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function xo(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var g=u.lane;if((On&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,he.lanes|=g,_n|=g}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,xt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,he.lanes|=i,_n|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);xt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zc(){}function Fc(e,t){var n=he,r=ht(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,Qe=!0),r=r.queue,n1(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,wo(9,Wc.bind(null,n,r,o,t),void 0,null),je===null)throw Error(j(349));On&30||Uc(n,t,o)}return o}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Vc(e)}function Qc(e,t,n){return n(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Vc(e){var t=Wt(e,1);t!==null&&vt(t,e,1,-1)}function yu(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,he,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gc(){return ht().memoizedState}function hi(e,t,n,r){var o=At();he.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var o=ht();r=r===void 0?null:r;var i=void 0;if(Ae!==null){var l=Ae.memoizedState;if(i=l.destroy,r!==null&&qs(r,l.deps)){o.memoizedState=wo(t,n,i,r);return}}he.flags|=e,o.memoizedState=wo(1|t,n,i,r)}function xu(e,t){return hi(8390656,8,e,t)}function n1(e,t){return hl(2048,8,e,t)}function Kc(e,t){return hl(4,2,e,t)}function Yc(e,t){return hl(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,Jc.bind(null,t,e),n)}function r1(){}function Xc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function em(e,t,n){return On&21?(xt(n,t)||(n=ic(),he.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function zf(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{te=n,Zl.transition=r}}function tm(){return ht().memoizedState}function Ff(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nm(e))rm(t,n);else if(n=Dc(e,t,n,r),n!==null){var o=ze();vt(n,e,r,o),om(n,t,r)}}function Uf(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nm(e))rm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,xt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ks(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Dc(e,t,o,r),n!==null&&(o=ze(),vt(n,e,r,o),om(n,t,r))}}function nm(e){var t=e.alternate;return e===he||t!==null&&t===he}function rm(e,t){qr=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function om(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}var Li={readContext:ut,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Wf={readContext:ut,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hi(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ff.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:r1,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=zf.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=At();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));On&30||Uc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,xu(Qc.bind(null,r,i,e),[e]),r.flags|=2048,wo(9,Wc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=At(),t=je.identifierPrefix;if(ae){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:ut,useCallback:Xc,useContext:ut,useEffect:n1,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:Xl,useRef:Gc,useState:function(){return Xl(xo)},useDebugValue:r1,useDeferredValue:function(e){var t=ht();return em(t,Ae.memoizedState,e)},useTransition:function(){var e=Xl(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Fc,useId:tm,unstable_isNewReconciler:!1},Hf={readContext:ut,useCallback:Xc,useContext:ut,useEffect:n1,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:ql,useRef:Gc,useState:function(){return ql(xo)},useDebugValue:r1,useDeferredValue:function(e){var t=ht();return Ae===null?t.memoizedState=e:em(t,Ae.memoizedState,e)},useTransition:function(){var e=ql(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Fc,useId:tm,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),i=Bt(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(vt(t,e,o,r),si(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),i=Bt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(vt(t,e,o,r),si(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(vt(t,e,r,n),si(t,e,r))}};function wu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!co(n,r)||!co(o,i):!0}function im(e,t,n){var r=!1,o=pn,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ve(t)?Tn:Le.current,r=t.contextTypes,i=(r=r!=null)?yr(e,o):pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ys(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ve(t)?Tn:Le.current,o.context=yr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),Oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=y0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vf=typeof WeakMap=="function"?WeakMap:Map;function lm(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,qa=r),Wa(e,t)},n}function am(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lp.bind(null,e,t,n),t.then(e,e))}function Au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Gf=Ht.ReactCurrentOwner,Qe=!1;function Be(e,t,n,r){t.child=e===null?_c(t,null,n,r):wr(t,e.child,n,r)}function Eu(e,t,n,r,o){n=n.render;var i=t.ref;return pr(t,o),r=e1(e,t,n,r,i,o),n=t1(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&n&&Us(t),t.flags|=1,Be(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!c1(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sm(e,t,i,r,o)):(e=fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(l,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=hn(i,r),e.ref=t.ref,e.return=t,t.child=e}function sm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(co(i,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Qa(e,t,n,r,o)}function um(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(sr,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(sr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(sr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(sr,Je),Je|=r;return Be(e,t,o,n),t.child}function hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var i=Ve(n)?Tn:Le.current;return i=yr(t,i),pr(t,o),n=e1(e,t,n,r,i,o),r=t1(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&r&&Us(t),t.flags|=1,Be(e,t,n,o),t.child)}function Cu(e,t,n,r,o){if(Ve(n)){var i=!0;Ni(t)}else i=!1;if(pr(t,o),t.stateNode===null)ci(e,t),im(t,n,r),Ua(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Tn:Le.current,u=yr(t,u));var g=n.getDerivedStateFromProps,c=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ku(t,l,r,u),Jt=!1;var v=t.memoizedState;l.state=v,Oi(t,r,l,o),s=t.memoizedState,a!==r||v!==s||He.current||Jt?(typeof g=="function"&&(Fa(t,n,g,r),s=t.memoizedState),(a=Jt||wu(t,n,a,r,v,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Lc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),l.props=u,c=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ve(n)?Tn:Le.current,s=yr(t,s));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||v!==s)&&ku(t,l,r,s),Jt=!1,v=t.memoizedState,l.state=v,Oi(t,r,l,o);var k=t.memoizedState;a!==c||v!==k||He.current||Jt?(typeof w=="function"&&(Fa(t,n,w,r),k=t.memoizedState),(u=Jt||wu(t,n,u,r,v,k,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ha(e,t,n,r,i,o)}function Ha(e,t,n,r,o,i){hm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&mu(t,n,!1),Qt(e,t,i);r=t.stateNode,Gf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=wr(t,e.child,null,i),t.child=wr(t,null,a,i)):Be(e,t,a,i),t.memoizedState=r.state,o&&mu(t,n,!0),t.child}function cm(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Js(e,t.containerInfo)}function $u(e,t,n,r,o){return xr(),Qs(o),t.flags|=256,Be(e,t,n,r),t.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,n){var r=t.pendingProps,o=ue.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ue,o&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=fl(l,r,0,null),e=In(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ga(n),t.memoizedState=Va,e):o1(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Kf(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=hn(a,i):(i=In(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ga(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Va,r}return i=e.child,e=i.sibling,r=hn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function o1(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ko(e,t,n,r){return r!==null&&Qs(r),wr(t,e.child,null,n),e=o1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ea(Error(j(422))),Ko(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),i=In(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wr(t,e.child,null,l),t.child.memoizedState=Ga(l),t.memoizedState=Va,i);if(!(t.mode&1))return Ko(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=ea(i,r,void 0),Ko(e,t,l,r)}if(a=(l&e.childLanes)!==0,Qe||a){if(r=je,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wt(e,o),vt(r,e,o,-1))}return h1(),r=ea(Error(j(421))),Ko(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=ln(o.nextSibling),Xe=t,ae=!0,pt=null,e!==null&&(it[lt++]=Dt,it[lt++]=Lt,it[lt++]=Pn,Dt=e.id,Lt=e.overflow,Pn=t),t=o1(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function ta(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function dm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_i(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ta(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_i(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ta(t,!0,n,null,i);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t,n){switch(t.tag){case 3:cm(t),xr();break;case 5:Bc(t);break;case 1:Ve(t.type)&&Ni(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Ti,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?mm(e,t,n):(ne(ue,ue.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,um(e,t,n)}return Qt(e,t,n)}var fm,Ka,pm,gm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ka=function(){};pm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn(Ct.current);var i=null;switch(n){case"input":o=ga(e,o),r=ga(e,r),i=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":o=xa(e,o),r=xa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}ka(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};gm=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jf(e,t,n){var r=t.pendingProps;switch(Ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ve(t.type)&&ji(),_e(t),null;case 3:return r=t.stateNode,kr(),ie(He),ie(Le),Xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ns(pt),pt=null))),Ka(e,t),_e(t),null;case 5:Zs(t);var o=Cn(vo.current);if(n=t.type,e!==null&&t.stateNode!=null)pm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return _e(t),null}if(e=Cn(Ct.current),Vo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Et]=t,r[po]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)re(Vr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":L1(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":z1(r,i),re("invalid",r)}ka(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",""+a]):oo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Do(r),B1(r,i,!0);break;case"textarea":Do(r),F1(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$i)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Et]=t,e[po]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(l=ba(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)re(Vr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":L1(e,r),o=ga(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":z1(e,r),o=xa(e,r),re("invalid",e);break;default:o=r}ka(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Gh(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hh(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&io(e,s):typeof s=="number"&&io(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&$s(e,i,s,l))}switch(n){case"input":Do(e),B1(e,r,!1);break;case"textarea":Do(e),F1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cr(e,!!r.multiple,i,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)gm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Cn(vo.current),Cn(Ct.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return _e(t),null;case 13:if(ie(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&t.mode&1&&!(t.flags&128))Pc(),xr(),t.flags|=98560,i=!1;else if(i=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Et]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else pt!==null&&(ns(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Me===0&&(Me=3):h1())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return kr(),Ka(e,t),e===null&&mo(t.stateNode.containerInfo),_e(t),null;case 10:return Gs(t.type._context),_e(t),null;case 17:return Ve(t.type)&&ji(),_e(t),null;case 19:if(ie(ue),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)zr(i,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_i(e),l!==null){for(t.flags|=128,zr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>Ar&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=_i(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return _e(t),null}else 2*ge()-i.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return u1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zf(e,t){switch(Ws(t),t.tag){case 1:return Ve(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),ie(He),ie(Le),Xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zs(t),null;case 13:if(ie(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ue),null;case 4:return kr(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return u1(),null;case 24:return null;default:return null}}var Yo=!1,De=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,P=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ya(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Nu=!1;function qf(e,t){if(Ra=Ei,e=kc(),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,g=0,c=e,v=null;t:for(;;){for(var w;c!==n||o!==0&&c.nodeType!==3||(a=l+o),c!==i||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)v=c,c=w;for(;;){if(c===e)break t;if(v===n&&++u===o&&(a=l),v===i&&++g===r&&(s=l),(w=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ta={focusedElem:e,selectionRange:n},Ei=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,E=k.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),E);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=Nu,Nu=!1,k}function eo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ya(t,n,i)}o=o.next}while(o!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[po],delete t[_a],delete t[Of],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ym(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Gt(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:De||ar(n,t);case 6:var r=Ie,o=ft;Ie=null,Gt(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),uo(e)):Kl(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Gt(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ya(n,t,l),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!De&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Gt(e,t,n),De=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xf),t.forEach(function(r){var o=sp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(j(160));xm(i,l,o),Ie=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wm(t,e),t=t.sibling}function wm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),bt(e),r&4){try{eo(3,e,e.return),ml(3,e)}catch(b){fe(e,e.return,b)}try{eo(5,e,e.return)}catch(b){fe(e,e.return,b)}}break;case 1:mt(t,e),bt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(mt(t,e),bt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{io(o,"")}catch(b){fe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Uh(o,i),ba(a,l);var u=ba(a,i);for(l=0;l<s.length;l+=2){var g=s[l],c=s[l+1];g==="style"?Gh(o,c):g==="dangerouslySetInnerHTML"?Hh(o,c):g==="children"?io(o,c):$s(o,g,c,u)}switch(a){case"input":va(o,i);break;case"textarea":Wh(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?cr(o,!!i.multiple,w,!1):v!==!!i.multiple&&(i.defaultValue!=null?cr(o,!!i.multiple,i.defaultValue,!0):cr(o,!!i.multiple,i.multiple?[]:"",!1))}o[po]=i}catch(b){fe(e,e.return,b)}}break;case 6:if(mt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){fe(e,e.return,b)}}break;case 3:if(mt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(b){fe(e,e.return,b)}break;case 4:mt(t,e),bt(e);break;case 13:mt(t,e),bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(a1=ge())),r&4&&Ru(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||g,mt(t,e),De=u):mt(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(c=P=g;P!==null;){switch(v=P,w=v.child,v.tag){case 0:case 11:case 14:case 15:eo(4,v,v.return);break;case 1:ar(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){fe(r,n,b)}}break;case 5:ar(v,v.return);break;case 22:if(v.memoizedState!==null){Pu(c);continue}}w!==null?(w.return=v,P=w):Pu(c)}g=g.sibling}e:for(g=null,c=e;;){if(c.tag===5){if(g===null){g=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vh("display",l))}catch(b){fe(e,e.return,b)}}}else if(c.tag===6){if(g===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(b){fe(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;g===c&&(g=null),c=c.return}g===c&&(g=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:mt(t,e),bt(e),r&4&&Ru(e);break;case 21:break;default:mt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ym(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(io(o,""),r.flags&=-33);var i=Iu(e);Xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Iu(e);Za(e,a,l);break;default:throw Error(j(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,n){P=e,km(e)}function km(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Yo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=Yo;var u=De;if(Yo=l,(De=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?Ou(o):s!==null?(s.return=l,P=s):Ou(o);for(;i!==null;)P=i,km(i),i=i.sibling;P=o,Yo=a,De=u}Tu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):Tu(e)}}function Tu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&vu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var c=g.dehydrated;c!==null&&uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}De||t.flags&512&&Ja(t)}catch(v){fe(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Pu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ou(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{Ja(t)}catch(s){fe(t,i,s)}break;case 5:var l=t.return;try{Ja(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var tp=Math.ceil,Bi=Ht.ReactCurrentDispatcher,i1=Ht.ReactCurrentOwner,st=Ht.ReactCurrentBatchConfig,J=0,je=null,ye=null,Re=0,Je=0,sr=xn(0),Me=0,ko=null,_n=0,dl=0,l1=0,to=null,We=null,a1=0,Ar=1/0,Pt=null,zi=!1,qa=null,sn=null,Jo=!1,en=null,Fi=0,no=0,es=null,mi=-1,di=0;function ze(){return J&6?ge():mi!==-1?mi:mi=ge()}function un(e){return e.mode&1?J&2&&Re!==0?Re&-Re:Lf.transition!==null?(di===0&&(di=ic()),di):(e=te,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function vt(e,t,n,r){if(50<no)throw no=0,es=null,Error(j(185));jo(e,n,r),(!(J&2)||e!==je)&&(e===je&&(!(J&2)&&(dl|=n),Me===4&&Xt(e,Re)),Ge(e,r),n===1&&J===0&&!(t.mode&1)&&(Ar=ge()+500,ul&&wn()))}function Ge(e,t){var n=e.callbackNode;D0(e,t);var r=Mi(e,e===je?Re:0);if(r===0)n!==null&&Q1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Q1(n),t===1)e.tag===0?Df(_u.bind(null,e)):Ic(_u.bind(null,e)),Tf(function(){!(J&6)&&wn()}),n=null;else{switch(lc(r)){case 1:n=Ts;break;case 4:n=rc;break;case 16:n=Ai;break;case 536870912:n=oc;break;default:n=Ai}n=jm(n,bm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bm(e,t){if(mi=-1,di=0,J&6)throw Error(j(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Mi(e,e===je?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ui(e,r);else{t=r;var o=J;J|=2;var i=Mm();(je!==e||Re!==t)&&(Pt=null,Ar=ge()+500,Nn(e,t));do try{op();break}catch(a){Am(e,a)}while(!0);Vs(),Bi.current=i,J=o,ye!==null?t=0:(je=null,Re=0,t=Me)}if(t!==0){if(t===2&&(o=Ca(e),o!==0&&(r=o,t=ts(e,o))),t===1)throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!np(o)&&(t=Ui(e,r),t===2&&(i=Ca(e),i!==0&&(r=i,t=ts(e,i))),t===1))throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mn(e,We,Pt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=a1+500-ge(),10<t)){if(Mi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Oa(Mn.bind(null,e,We,Pt),t);break}Mn(e,We,Pt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-gt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tp(r/1960))-r,10<r){e.timeoutHandle=Oa(Mn.bind(null,e,We,Pt),r);break}Mn(e,We,Pt);break;case 5:Mn(e,We,Pt);break;default:throw Error(j(329))}}}return Ge(e,ge()),e.callbackNode===n?bm.bind(null,e):null}function ts(e,t){var n=to;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=We,We=n,t!==null&&ns(t)),e}function ns(e){We===null?We=e:We.push.apply(We,e)}function np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~l1,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(J&6)throw Error(j(327));gr();var t=Mi(e,0);if(!(t&1))return Ge(e,ge()),null;var n=Ui(e,t);if(e.tag!==0&&n===2){var r=Ca(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=ko,Nn(e,0),Xt(e,t),Ge(e,ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,We,Pt),Ge(e,ge()),null}function s1(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Ar=ge()+500,ul&&wn())}}function Dn(e){en!==null&&en.tag===0&&!(J&6)&&gr();var t=J;J|=1;var n=st.transition,r=te;try{if(st.transition=null,te=1,e)return e()}finally{te=r,st.transition=n,J=t,!(J&6)&&wn()}}function u1(){Je=sr.current,ie(sr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ji();break;case 3:kr(),ie(He),ie(Le),Xs();break;case 5:Zs(r);break;case 4:kr();break;case 13:ie(ue);break;case 19:ie(ue);break;case 10:Gs(r.type._context);break;case 22:case 23:u1()}n=n.return}if(je=e,ye=e=hn(e.current,null),Re=Je=t,Me=0,ko=null,l1=dl=_n=0,We=to=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Sn=null}return e}function Am(e,t){do{var n=ye;try{if(Vs(),ui.current=Li,Di){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Di=!1}if(On=0,Se=Ae=he=null,qr=!1,yo=0,i1.current=null,n===null||n.return===null){Me=1,ko=t,ye=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,c=g.tag;if(!(g.mode&1)&&(c===0||c===11||c===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Au(l);if(w!==null){w.flags&=-257,Mu(w,l,a,i,t),w.mode&1&&bu(i,u,t),t=w,s=u;var k=t.updateQueue;if(k===null){var b=new Set;b.add(s),t.updateQueue=b}else k.add(s);break e}else{if(!(t&1)){bu(i,u,t),h1();break e}s=Error(j(426))}}else if(ae&&a.mode&1){var E=Au(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Mu(E,l,a,i,t),Qs(br(s,a));break e}}i=s=br(s,a),Me!==4&&(Me=2),to===null?to=[i]:to.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=lm(i,s,t);gu(i,d);break e;case 1:a=s;var m=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=am(i,a,t);gu(i,x);break e}}i=i.return}while(i!==null)}Sm(n)}catch(A){t=A,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Mm(){var e=Bi.current;return Bi.current=Li,e===null?Li:e}function h1(){(Me===0||Me===3||Me===2)&&(Me=4),je===null||!(_n&268435455)&&!(dl&268435455)||Xt(je,Re)}function Ui(e,t){var n=J;J|=2;var r=Mm();(je!==e||Re!==t)&&(Pt=null,Nn(e,t));do try{rp();break}catch(o){Am(e,o)}while(!0);if(Vs(),J=n,Bi.current=r,ye!==null)throw Error(j(261));return je=null,Re=0,Me}function rp(){for(;ye!==null;)Em(ye)}function op(){for(;ye!==null&&!$0();)Em(ye)}function Em(e){var t=$m(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Sm(e):ye=t,i1.current=null}function Sm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,ye=null;return}}else if(n=Jf(n,t,Je),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Me===0&&(Me=5)}function Mn(e,t,n){var r=te,o=st.transition;try{st.transition=null,te=1,ip(e,t,n,r)}finally{st.transition=o,te=r}return null}function ip(e,t,n,r){do gr();while(en!==null);if(J&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(L0(e,i),e===je&&(ye=je=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,jm(Ai,function(){return gr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=st.transition,st.transition=null;var l=te;te=1;var a=J;J|=4,i1.current=null,qf(e,n),wm(n,e),Ef(Ta),Ei=!!Ra,Ta=Ra=null,e.current=n,ep(n),j0(),J=a,te=l,st.transition=i}else e.current=n;if(Jo&&(Jo=!1,en=e,Fi=o),i=e.pendingLanes,i===0&&(sn=null),R0(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=qa,qa=null,e;return Fi&1&&e.tag!==0&&gr(),i=e.pendingLanes,i&1?e===es?no++:(no=0,es=e):no=0,wn(),null}function gr(){if(en!==null){var e=lc(Fi),t=st.transition,n=te;try{if(st.transition=null,te=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Fi=0,J&6)throw Error(j(331));var o=J;for(J|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:eo(8,g,i)}var c=g.child;if(c!==null)c.return=g,P=c;else for(;P!==null;){g=P;var v=g.sibling,w=g.return;if(vm(g),g===u){P=null;break}if(v!==null){v.return=w,P=v;break}P=w}}}var k=i.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:eo(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var m=e.current;for(P=m;P!==null;){l=P;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,P=f;else e:for(l=m;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(A){fe(a,a.return,A)}if(a===l){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}if(J=o,wn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{te=n,st.transition=t}}return!1}function Du(e,t,n){t=br(n,t),t=lm(e,t,1),e=an(e,t,1),t=ze(),e!==null&&(jo(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=br(n,e),e=am(t,e,1),t=an(t,e,1),e=ze(),t!==null&&(jo(t,1,e),Ge(t,e));break}}t=t.return}}function lp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Re&n)===n&&(Me===4||Me===3&&(Re&130023424)===Re&&500>ge()-a1?Nn(e,0):l1|=n),Ge(e,t)}function Cm(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=ze();e=Wt(e,t),e!==null&&(jo(e,t,n),Ge(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cm(e,n)}function sp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Cm(e,n)}var $m;$m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Yf(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,ae&&t.flags&1048576&&Rc(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ci(e,t),e=t.pendingProps;var o=yr(t,Le.current);pr(t,n),o=e1(null,t,r,e,o,n);var i=t1();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,Ni(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ys(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,Ua(t,r,e,n),t=Ha(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Us(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hp(r),e=dt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,dt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Cu(e,t,r,o,n);case 3:e:{if(cm(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Lc(e,t),Oi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=br(Error(j(423)),t),t=$u(e,t,r,n,o);break e}else if(r!==o){o=br(Error(j(424)),t),t=$u(e,t,r,n,o);break e}else for(Ze=ln(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,pt=null,n=_c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===o){t=Qt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Bc(t),e===null&&Ba(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Pa(r,o)?l=null:i!==null&&Pa(r,i)&&(t.flags|=32),hm(e,t),Be(e,t,l,n),t.child;case 6:return e===null&&Ba(t),null;case 13:return mm(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Eu(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(Ti,r._currentValue),r._currentValue=l,i!==null)if(xt(i.value,l)){if(i.children===o.children&&!He.current){t=Qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),za(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=ut(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),Su(e,t,r,o,n);case 15:return sm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ci(e,t),t.tag=1,Ve(r)?(e=!0,Ni(t)):e=!1,pr(t,n),im(t,r,o),Ua(t,r,o,n),Ha(null,t,r,!0,e,n);case 19:return dm(e,t,n);case 22:return um(e,t,n)}throw Error(j(156,t.tag))};function jm(e,t){return nc(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new up(e,t,n,r)}function c1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return c1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ns)return 11;if(e===Is)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")c1(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return In(n.children,o,i,t);case js:l=8,o|=8;break;case ma:return e=at(12,n,t,o|2),e.elementType=ma,e.lanes=i,e;case da:return e=at(13,n,t,o),e.elementType=da,e.lanes=i,e;case fa:return e=at(19,n,t,o),e.elementType=fa,e.lanes=i,e;case Bh:return fl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dh:l=10;break e;case Lh:l=9;break e;case Ns:l=11;break e;case Is:l=14;break e;case Yt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=at(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function In(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=at(22,e,r,t),e.elementType=Bh,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function m1(e,t,n,r,o,i,l,a,s){return e=new cp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ys(i),e}function mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nm(e){if(!e)return pn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Nc(e,n,t)}return t}function Im(e,t,n,r,o,i,l,a,s){return e=m1(n,r,!0,e,o,i,l,a,s),e.context=Nm(null),n=e.current,r=ze(),o=un(n),i=Bt(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,jo(e,o,r),Ge(e,r),e}function pl(e,t,n,r){var o=t.current,i=ze(),l=un(o);return n=Nm(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,l),e!==null&&(vt(e,o,l,i),si(e,o,l)),l}function Wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function d1(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function dp(){return null}var Rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function f1(e){this._internalRoot=e}gl.prototype.render=f1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));pl(e,t,null,null)};gl.prototype.unmount=f1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){pl(null,e,null,null)}),t[Ut]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&cc(e)}};function p1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function fp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wi(l);i.call(u)}}var l=Im(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=l,e[Ut]=l.current,mo(e.nodeType===8?e.parentNode:e),Dn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Wi(s);a.call(u)}}var s=m1(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=s,e[Ut]=s.current,mo(e.nodeType===8?e.parentNode:e),Dn(function(){pl(t,s,n,r)}),s}function yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Wi(l);a.call(s)}}pl(t,l,e,o)}else l=fp(n,t,e,o,r);return Wi(l)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Ps(t,n|1),Ge(t,ge()),!(J&6)&&(Ar=ge()+500,wn()))}break;case 13:Dn(function(){var r=Wt(e,1);if(r!==null){var o=ze();vt(r,e,1,o)}}),d1(e,1)}};Os=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=ze();vt(t,e,134217728,n)}d1(e,134217728)}};sc=function(e){if(e.tag===13){var t=un(e),n=Wt(e,t);if(n!==null){var r=ze();vt(n,e,t,r)}d1(e,t)}};uc=function(){return te};hc=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ma=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error(j(90));Fh(r),va(r,o)}}}break;case"textarea":Wh(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Jh=s1;Zh=Dn;var pp={usingClientEntryPoint:!1,Events:[Io,nr,sl,Kh,Yh,s1]},Fr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{ol=Zo.inject(gp),St=Zo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p1(t))throw Error(j(200));return mp(e,t,null,n)};nt.createRoot=function(e,t){if(!p1(e))throw Error(j(299));var n=!1,r="",o=Rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=m1(e,1,!1,null,null,n,!1,r,o),e[Ut]=t.current,mo(e.nodeType===8?e.parentNode:e),new f1(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=ec(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Dn(e)};nt.hydrate=function(e,t,n){if(!vl(t))throw Error(j(200));return yl(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!p1(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Rm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Im(t,null,e,1,n??null,o,!1,i,l),e[Ut]=t.current,mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};nt.render=function(e,t,n){if(!vl(t))throw Error(j(200));return yl(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!vl(e))throw Error(j(40));return e._reactRootContainer?(Dn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};nt.unstable_batchedUpdates=s1;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return yl(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function Tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tm)}catch(e){console.error(e)}}Tm(),Th.exports=nt;var Pm=Th.exports,Om,zu=Pm;Om=zu.createRoot,zu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const Fu="popstate";function vp(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:a="",hash:s=""}=Wn(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),rs("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof i=="string"?i:Qi(i))}function r(o,i){g1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return xp(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function g1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yp(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function rs(e,t,n,r){return n===void 0&&(n=null),bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wn(t):t,{state:n,key:t&&t.key||r||yp()})}function Qi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xp(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=tn.Pop,s=null,u=g();u==null&&(u=0,l.replaceState(bo({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function c(){a=tn.Pop;let E=g(),d=E==null?null:E-u;u=E,s&&s({action:a,location:b.location,delta:d})}function v(E,d){a=tn.Push;let m=rs(b.location,E,d);n&&n(m,E),u=g()+1;let f=Uu(m,u),x=b.createHref(m);try{l.pushState(f,"",x)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(x)}i&&s&&s({action:a,location:b.location,delta:1})}function w(E,d){a=tn.Replace;let m=rs(b.location,E,d);n&&n(m,E),u=g();let f=Uu(m,u),x=b.createHref(m);l.replaceState(f,"",x),i&&s&&s({action:a,location:b.location,delta:0})}function k(E){let d=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof E=="string"?E:Qi(E);return m=m.replace(/ $/,"%20"),xe(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}let b={get action(){return a},get location(){return e(o,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Fu,c),s=E,()=>{o.removeEventListener(Fu,c),s=null}},createHref(E){return t(o,E)},createURL:k,encodeLocation(E){let d=k(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:w,go(E){return l.go(E)}};return b}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function wp(e,t,n){return n===void 0&&(n="/"),kp(e,t,n,!1)}function kp(e,t,n,r){let o=typeof t=="string"?Wn(t):t,i=v1(o.pathname||"/",n);if(i==null)return null;let l=_m(e);bp(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Tp(i);a=Ip(l[s],u,r)}return a}function _m(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=cn([r,s.relativePath]),g=n.concat(s);i.children&&i.children.length>0&&(xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_m(i.children,t,g,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:jp(u,i.index),routesMeta:g})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Dm(i.path))o(i,l,s)}),t}function Dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Dm(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function bp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Np(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:[\w-]+$/,Mp=3,Ep=2,Sp=1,Cp=10,$p=-2,Qu=e=>e==="*";function jp(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=$p),t&&(r+=Ep),n.filter(o=>!Qu(o)).reduce((o,i)=>o+(Ap.test(i)?Mp:i===""?Sp:Cp),r)}function Np(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ip(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",c=Hu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),v=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Hu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:cn([i,c.pathname]),pathnameBase:Dp(cn([i,c.pathnameBase])),route:v}),c.pathnameBase!=="/"&&(i=cn([i,c.pathnameBase]))}return l}function Hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Rp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,c)=>{let{paramName:v,isOptional:w}=g;if(v==="*"){let b=a[c]||"";l=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const k=a[c];return w&&!k?u[v]=void 0:u[v]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Rp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),g1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Tp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return g1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function v1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wn(e):e;return{pathname:n?n.startsWith("/")?n:Op(n,t):t,search:Lp(r),hash:Bp(o)}}function Op(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lm(e,t){let n=_p(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Wn(e):(o=bo({},e),xe(!o.pathname||!o.pathname.includes("?"),oa("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),oa("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),oa("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),c-=1;o.pathname=v.join("/")}a=c>=0?t[c]:"/"}let s=Pp(o,a),u=l&&l!=="/"&&l.endsWith("/"),g=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const cn=e=>e.join("/").replace(/\/\/+/g,"/"),Dp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zm=["post","put","patch","delete"];new Set(zm);const Fp=["get",...zm];new Set(Fp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}const y1=y.createContext(null),Up=y.createContext(null),Qn=y.createContext(null),xl=y.createContext(null),Hn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=y.createContext(null);function Wp(e,t){let{relative:n}=t===void 0?{}:t;To()||xe(!1);let{basename:r,navigator:o}=y.useContext(Qn),{hash:i,pathname:l,search:a}=Wm(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:cn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function To(){return y.useContext(xl)!=null}function wl(){return To()||xe(!1),y.useContext(xl).location}function Um(e){y.useContext(Qn).static||y.useLayoutEffect(e)}function Qp(){let{isDataRoute:e}=y.useContext(Hn);return e?rg():Hp()}function Hp(){To()||xe(!1);let e=y.useContext(y1),{basename:t,future:n,navigator:r}=y.useContext(Qn),{matches:o}=y.useContext(Hn),{pathname:i}=wl(),l=JSON.stringify(Lm(o,n.v7_relativeSplatPath)),a=y.useRef(!1);return Um(()=>{a.current=!0}),y.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Bm(u,JSON.parse(l),i,g.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:cn([t,c.pathname])),(g.replace?r.replace:r.push)(c,g.state,g)},[t,r,l,i,e])}function Wm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Qn),{matches:o}=y.useContext(Hn),{pathname:i}=wl(),l=JSON.stringify(Lm(o,r.v7_relativeSplatPath));return y.useMemo(()=>Bm(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Vp(e,t){return Gp(e,t)}function Gp(e,t,n,r){To()||xe(!1);let{navigator:o,static:i}=y.useContext(Qn),{matches:l}=y.useContext(Hn),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=wl(),c;if(t){var v;let d=typeof t=="string"?Wn(t):t;u==="/"||(v=d.pathname)!=null&&v.startsWith(u)||xe(!1),c=d}else c=g;let w=c.pathname||"/",k=w;if(u!=="/"){let d=u.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(d.length).join("/")}let b=!i&&n&&n.matches&&n.matches.length>0?n.matches:wp(e,{pathname:k}),E=Xp(b&&b.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:cn([u,o.encodeLocation?o.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:cn([u,o.encodeLocation?o.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,n,r);return t&&E?y.createElement(xl.Provider,{value:{location:Ao({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:tn.Pop}},E):E}function Kp(){let e=ng(),t=zp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const Yp=y.createElement(Kp,null);class Jp extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Hn.Provider,{value:this.props.routeContext},y.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zp(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(y1);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Hn.Provider,{value:t},r)}function Xp(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);g>=0||xe(!1),l=l.slice(0,Math.min(l.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let c=l[g];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=g),c.route.id){let{loaderData:v,errors:w}=n,k=c.route.loader&&v[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||k){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,c,v)=>{let w,k=!1,b=null,E=null;n&&(w=a&&c.route.id?a[c.route.id]:void 0,b=c.route.errorElement||Yp,s&&(u<0&&v===0?(k=!0,E=null):u===v&&(k=!0,E=c.route.hydrateFallbackElement||null)));let d=t.concat(l.slice(0,v+1)),m=()=>{let f;return w?f=b:k?f=E:c.route.Component?f=y.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=g,y.createElement(Zp,{match:c,routeContext:{outlet:g,matches:d,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||v===0)?y.createElement(Jp,{location:n.location,revalidation:n.revalidation,component:b,error:w,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Qm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qm||{}),Hi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hi||{});function qp(e){let t=y.useContext(y1);return t||xe(!1),t}function eg(e){let t=y.useContext(Up);return t||xe(!1),t}function tg(e){let t=y.useContext(Hn);return t||xe(!1),t}function Hm(e){let t=tg(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function ng(){var e;let t=y.useContext(Fm),n=eg(Hi.UseRouteError),r=Hm(Hi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function rg(){let{router:e}=qp(Qm.UseNavigateStable),t=Hm(Hi.UseNavigateStable),n=y.useRef(!1);return Um(()=>{n.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ao({fromRouteId:t},i)))},[e,t])}function og(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jn(e){xe(!1)}function ig(e){let{basename:t="/",children:n=null,location:r,navigationType:o=tn.Pop,navigator:i,static:l=!1,future:a}=e;To()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:i,static:l,future:Ao({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Wn(r));let{pathname:g="/",search:c="",hash:v="",state:w=null,key:k="default"}=r,b=y.useMemo(()=>{let E=v1(g,s);return E==null?null:{location:{pathname:E,search:c,hash:v,state:w,key:k},navigationType:o}},[s,g,c,v,w,k,o]);return b==null?null:y.createElement(Qn.Provider,{value:u},y.createElement(xl.Provider,{children:n,value:b}))}function lg(e){let{children:t,location:n}=e;return Vp(os(t),n)}new Promise(()=>{});function os(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...t,o];if(r.type===y.Fragment){n.push.apply(n,os(r.props.children,i));return}r.type!==Jn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=os(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function ag(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ug(e,t){return e.button===0&&(!t||t==="_self")&&!sg(e)}const hg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cg="6";try{window.__reactRouterVersion=cg}catch{}const mg="startTransition",Vu=i0[mg];function dg(e){let{basename:t,children:n,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=vp({window:o,v5Compat:!0}));let l=i.current,[a,s]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},g=y.useCallback(c=>{u&&Vu?Vu(()=>s(c)):s(c)},[s,u]);return y.useLayoutEffect(()=>l.listen(g),[l,g]),y.useEffect(()=>og(r),[r]),y.createElement(ig,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const fg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:g,viewTransition:c}=t,v=ag(t,hg),{basename:w}=y.useContext(Qn),k,b=!1;if(typeof u=="string"&&pg.test(u)&&(k=u,fg))try{let f=new URL(window.location.href),x=u.startsWith("//")?new URL(f.protocol+u):new URL(u),A=v1(x.pathname,w);x.origin===f.origin&&A!=null?u=A+x.search+x.hash:b=!0}catch{}let E=Wp(u,{relative:o}),d=gg(u,{replace:l,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:c});function m(f){r&&r(f),f.defaultPrevented||d(f)}return y.createElement("a",is({},v,{href:k||E,onClick:b||i?r:m,ref:n,target:s}))});var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));function gg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=t===void 0?{}:t,s=Qp(),u=wl(),g=Wm(e,{relative:l});return y.useCallback(c=>{if(ug(c,n)){c.preventDefault();let v=r!==void 0?r:Qi(u)===Qi(g);s(e,{replace:v,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[u,s,g,r,o,n,e,i,l,a])}var vg=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,$e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$e.apply(this,arguments)};function Mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",ro="-moz-",X="-webkit-",Vm="comm",kl="rule",x1="decl",yg="@import",Gm="@keyframes",xg="@layer",Km=Math.abs,w1=String.fromCharCode,ls=Object.assign;function wg(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Ym(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function pi(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function Jm(e){return e.length}function Gr(e,t){return t.push(e),e}function kg(e,t){return e.map(t).join("")}function Yu(e,t){return e.filter(function(n){return!Ot(n,t)})}var bl=1,Er=1,Zm=0,ct=0,ve=0,Rr="";function Al(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:bl,column:Er,length:l,return:"",siblings:a}}function Kt(e,t){return ls(Al("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Gr(e,e.siblings)}function bg(){return ve}function Ag(){return ve=ct>0?Ce(Rr,--ct):0,Er--,ve===10&&(Er=1,bl--),ve}function yt(){return ve=ct<Zm?Ce(Rr,ct++):0,Er++,ve===10&&(Er=1,bl++),ve}function Rn(){return Ce(Rr,ct)}function gi(){return ct}function Ml(e,t){return Mr(Rr,e,t)}function as(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(e){return bl=Er=1,Zm=Mt(Rr=e),ct=0,[]}function Eg(e){return Rr="",e}function ia(e){return Ym(Ml(ct-1,ss(e===91?e+2:e===40?e+1:e)))}function Sg(e){for(;(ve=Rn())&&ve<33;)yt();return as(e)>2||as(ve)>3?"":" "}function Cg(e,t){for(;--t&&yt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Ml(e,gi()+(t<6&&Rn()==32&&yt()==32))}function ss(e){for(;yt();)switch(ve){case e:return ct;case 34:case 39:e!==34&&e!==39&&ss(ve);break;case 40:e===41&&ss(e);break;case 92:yt();break}return ct}function $g(e,t){for(;yt()&&e+ve!==57;)if(e+ve===84&&Rn()===47)break;return"/*"+Ml(t,ct-1)+"*"+w1(e===47?e:yt())}function jg(e){for(;!as(Rn());)yt();return Ml(e,ct)}function Ng(e){return Eg(vi("",null,null,null,[""],e=Mg(e),0,[0],e))}function vi(e,t,n,r,o,i,l,a,s){for(var u=0,g=0,c=l,v=0,w=0,k=0,b=1,E=1,d=1,m=0,f="",x=o,A=i,M=r,S=f;E;)switch(k=m,m=yt()){case 40:if(k!=108&&Ce(S,c-1)==58){pi(S+=U(ia(m),"&","&\f"),"&\f",Km(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=ia(m);break;case 9:case 10:case 13:case 32:S+=Sg(k);break;case 92:S+=Cg(gi()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Gr(Ig($g(yt(),gi()),t,n,s),s);break;default:S+="/"}break;case 123*b:a[u++]=Mt(S)*d;case 125*b:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+g:d==-1&&(S=U(S,/\f/g,"")),w>0&&Mt(S)-c&&Gr(w>32?Zu(S+";",r,n,c-1,s):Zu(U(S," ","")+";",r,n,c-2,s),s);break;case 59:S+=";";default:if(Gr(M=Ju(S,t,n,u,g,o,a,f,x=[],A=[],c,i),i),m===123)if(g===0)vi(S,t,M,M,x,i,c,a,A);else switch(v===99&&Ce(S,3)===110?100:v){case 100:case 108:case 109:case 115:vi(e,M,M,r&&Gr(Ju(e,M,M,0,0,o,a,f,o,x=[],c,A),A),o,A,c,a,r?x:A);break;default:vi(S,M,M,M,[""],A,0,a,A)}}u=g=w=0,b=d=1,f=S="",c=l;break;case 58:c=1+Mt(S),w=k;default:if(b<1){if(m==123)--b;else if(m==125&&b++==0&&Ag()==125)continue}switch(S+=w1(m),m*b){case 38:d=g>0?1:(S+="\f",-1);break;case 44:a[u++]=(Mt(S)-1)*d,d=1;break;case 64:Rn()===45&&(S+=ia(yt())),v=Rn(),g=c=Mt(f=S+=jg(gi())),m++;break;case 45:k===45&&Mt(S)==2&&(b=0)}}return i}function Ju(e,t,n,r,o,i,l,a,s,u,g,c){for(var v=o-1,w=o===0?i:[""],k=Jm(w),b=0,E=0,d=0;b<r;++b)for(var m=0,f=Mr(e,v+1,v=Km(E=l[b])),x=e;m<k;++m)(x=Ym(E>0?w[m]+" "+f:U(f,/&\f/g,w[m])))&&(s[d++]=x);return Al(e,t,n,o===0?kl:a,s,u,g,c)}function Ig(e,t,n,r){return Al(e,t,n,Vm,w1(bg()),Mr(e,2,-2),0,r)}function Zu(e,t,n,r,o){return Al(e,t,n,x1,Mr(e,0,r),Mr(e,r+1,-1),r,o)}function Xm(e,t,n){switch(wg(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+ro+e+oe+e+e;case 5936:switch(Ce(e,t+11)){case 114:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+oe+e+e;case 6165:return X+e+oe+"flex-"+e+e;case 5187:return X+e+U(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return X+e+oe+"flex-item-"+U(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":oe+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return X+e+oe+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+oe+U(e,"shrink","negative")+e;case 5292:return X+e+oe+U(e,"basis","preferred-size")+e;case 6060:return X+"box-"+U(e,"-grow","")+X+e+oe+U(e,"grow","positive")+e;case 4554:return X+U(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return oe+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return oe+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Ot(r.props,/grid-\w+-end/)})?~pi(e+(n=n[t].value),"span",0)?e:oe+U(e,"-start","")+e+oe+"grid-row-span:"+(~pi(n,"span",0)?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":oe+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:oe+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+ro+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pi(e,"stretch",0)?Xm(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return oe+o+":"+i+u+(l?oe+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return U(e,":",":"+X)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(Ce(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+oe+"$2box$3")+e;case 100:return U(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Vi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rg(e,t,n,r){switch(e.type){case xg:if(e.children.length)break;case yg:case x1:return e.return=e.return||e.value;case Vm:return"";case Gm:return e.return=e.value+"{"+Vi(e.children,r)+"}";case kl:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=Vi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Tg(e){var t=Jm(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Pg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Og(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case x1:e.return=Xm(e.value,e.length,n);return;case Gm:return Vi([Kt(e,{value:U(e.value,"@","@"+X)})],r);case kl:if(e.length)return kg(n=e.props,function(o){switch(Ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Kt(e,{props:[U(o,/:(read-\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[o]})),ls(e,{props:Yu(n,r)});break;case"::placeholder":Kn(Kt(e,{props:[U(o,/:(plac\w+)/,":"+X+"input-$1")]})),Kn(Kt(e,{props:[U(o,/:(plac\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[U(o,/:(plac\w+)/,oe+"input-$1")]})),Kn(Kt(e,{props:[o]})),ls(e,{props:Yu(n,r)});break}return""})}}var _g={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},Sr=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",qm="active",ed="data-styled-version",El="6.1.17",k1=`/*!sc*/
`,Gi=typeof window<"u"&&"HTMLElement"in window,Dg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),Lg={},Sl=Object.freeze([]),Cr=Object.freeze({});function td(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var nd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zg=/(^-|-$)/g;function Xu(e){return e.replace(Bg,"-").replace(zg,"")}var Fg=/(a)(d)/gi,Xo=52,qu=function(e){return String.fromCharCode(e+(e>25?39:97))};function us(e){var t,n="";for(t=Math.abs(e);t>Xo;t=t/Xo|0)n=qu(t%Xo)+n;return(qu(t%Xo)+n).replace(Fg,"$1-$2")}var la,rd=5381,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},od=function(e){return ur(rd,e)};function id(e){return us(od(e)>>>0)}function Ug(e){return e.displayName||e.name||"Component"}function aa(e){return typeof e=="string"&&!0}var ld=typeof Symbol=="function"&&Symbol.for,ad=ld?Symbol.for("react.memo"):60115,Wg=ld?Symbol.for("react.forward_ref"):60112,Qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vg=((la={})[Wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},la[ad]=sd,la);function eh(e){return("type"in(t=e)&&t.type.$$typeof)===ad?sd:"$$typeof"in e?Vg[e.$$typeof]:Qg;var t}var Gg=Object.defineProperty,Kg=Object.getOwnPropertyNames,th=Object.getOwnPropertySymbols,Yg=Object.getOwnPropertyDescriptor,Jg=Object.getPrototypeOf,nh=Object.prototype;function ud(e,t,n){if(typeof t!="string"){if(nh){var r=Jg(t);r&&r!==nh&&ud(e,r,n)}var o=Kg(t);th&&(o=o.concat(th(t)));for(var i=eh(e),l=eh(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Hg||n&&n[s]||l&&s in l||i&&s in i)){var u=Yg(t,s);try{Gg(e,s,u)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function b1(e){return typeof e=="object"&&"styledComponentId"in e}function $n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Eo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cs(e,t,n){if(n===void 0&&(n=!1),!n&&!Eo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cs(e[r],t[r]);else if(Eo(t))for(var r in t)e[r]=cs(e[r],t[r]);return e}function A1(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(k1);return n},e}(),yi=new Map,Ki=new Map,xi=1,qo=function(e){if(yi.has(e))return yi.get(e);for(;Ki.has(xi);)xi++;var t=xi++;return yi.set(e,t),Ki.set(t,e),t},Xg=function(e,t){xi=t+1,yi.set(e,t),Ki.set(t,e)},qg="style[".concat(Sr,"][").concat(ed,'="').concat(El,'"]'),ev=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},nv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(k1),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(ev);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Xg(g,u),tv(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},rh=function(e){for(var t=document.querySelectorAll(qg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==qm&&(nv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function rv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,qm),r.setAttribute(ed,El);var l=rv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},ov=function(){function e(t){this.element=hd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),iv=function(){function e(t){this.element=hd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),lv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),oh=Gi,av={isServer:!Gi,useCSSOMInjection:!Dg},Yi=function(){function e(t,n,r){t===void 0&&(t=Cr),n===void 0&&(n={});var o=this;this.options=$e($e({},av),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gi&&oh&&(oh=!1,rh(this)),A1(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(c){var v=function(d){return Ki.get(d)}(c);if(v===void 0)return"continue";var w=i.names.get(v),k=l.getGroup(c);if(w===void 0||!w.size||k.length===0)return"continue";var b="".concat(Sr,".g").concat(c,'[id="').concat(v,'"]'),E="";w!==void 0&&w.forEach(function(d){d.length>0&&(E+="".concat(d,","))}),s+="".concat(k).concat(b,'{content:"').concat(E,'"}').concat(k1)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return qo(t)},e.prototype.rehydrate=function(){!this.server&&Gi&&rh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new lv(o):r?new ov(o):new iv(o)}(this.options),new Zg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sv=/&/g,uv=/^\s*\/\/.*$/gm;function cd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cd(n.children,t)),n})}function hv(e){var t,n,r,o=Cr,i=o.options,l=i===void 0?Cr:i,a=o.plugins,s=a===void 0?Sl:a,u=function(v,w,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):v},g=s.slice();g.push(function(v){v.type===kl&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(sv,n).replace(r,u))}),l.prefix&&g.push(Og),g.push(Rg);var c=function(v,w,k,b){w===void 0&&(w=""),k===void 0&&(k=""),b===void 0&&(b="&"),t=b,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var E=v.replace(uv,""),d=Ng(k||w?"".concat(k," ").concat(w," { ").concat(E," }"):E);l.namespace&&(d=cd(d,l.namespace));var m=[];return Vi(d,Tg(g.concat(Pg(function(f){return m.push(f)})))),m};return c.hash=s.length?s.reduce(function(v,w){return w.name||Bn(15),ur(v,w.name)},rd).toString():"",c}var cv=new Yi,ms=hv(),md=p.createContext({shouldForwardProp:void 0,styleSheet:cv,stylis:ms});md.Consumer;p.createContext(void 0);function ds(){return y.useContext(md)}var mv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ms);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,A1(this,function(){throw Bn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ms),this.name+t.hash},e}(),dv=function(e){return e>="A"&&e<="Z"};function ih(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;dv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dd=function(e){return e==null||e===!1||e===""},fd=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!dd(i)&&(Array.isArray(i)&&i.isCss||Ln(i)?r.push("".concat(ih(o),":"),i,";"):Eo(i)?r.push.apply(r,Mo(Mo(["".concat(o," {")],fd(i),!1),["}"],!1)):r.push("".concat(ih(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _g||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(dd(e))return[];if(b1(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return mn(o,t,n,r)}var i;return e instanceof mv?n?(e.inject(n,r),[e.getName(r)]):[e]:Eo(e)?fd(e):Array.isArray(e)?Array.prototype.concat.apply(Sl,e.map(function(l){return mn(l,t,n,r)})):[e.toString()]}function pd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!b1(n))return!1}return!0}var fv=od(El),pv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pd(t),this.componentId=n,this.baseHash=ur(fv,n),this.baseStyle=r,Yi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=$n(o,this.staticRulesId);else{var i=hs(mn(this.rules,t,n,r)),l=us(ur(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=$n(o,l),this.staticRulesId=l}else{for(var s=ur(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var c=this.rules[g];if(typeof c=="string")u+=c;else if(c){var v=hs(mn(c,t,n,r));s=ur(s,v+g),u+=v}}if(u){var w=us(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),o=$n(o,w)}}return o},e}(),So=p.createContext(void 0);So.Consumer;function gv(e){var t=p.useContext(So),n=y.useMemo(function(){return function(r,o){if(!r)throw Bn(14);if(Ln(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Bn(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(So.Provider,{value:n},e.children):null}var sa={};function vv(e,t,n){var r=b1(e),o=e,i=!aa(e),l=t.attrs,a=l===void 0?Sl:l,s=t.componentId,u=s===void 0?function(x,A){var M=typeof x!="string"?"sc":Xu(x);sa[M]=(sa[M]||0)+1;var S="".concat(M,"-").concat(id(El+M+sa[M]));return A?"".concat(A,"-").concat(S):S}(t.displayName,t.parentComponentId):s,g=t.displayName,c=g===void 0?function(x){return aa(x)?"styled.".concat(x):"Styled(".concat(Ug(x),")")}(e):g,v=t.displayName&&t.componentId?"".concat(Xu(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;k=function(x,A){return b(x,A)&&E(x,A)}}else k=b}var d=new pv(n,v,r?o.componentStyle:void 0);function m(x,A){return function(M,S,I){var z=M.attrs,_=M.componentStyle,q=M.defaultProps,ee=M.foldedComponentIds,me=M.styledComponentId,de=M.target,se=p.useContext(So),we=ds(),ke=M.shouldForwardProp||we.shouldForwardProp,$=td(S,se,q)||Cr,R=function(Y,B,H){for(var Ee,N=$e($e({},B),{className:void 0,theme:H}),F=0;F<Y.length;F+=1){var V=Ln(Ee=Y[F])?Ee(N):Ee;for(var Z in V)N[Z]=Z==="className"?$n(N[Z],V[Z]):Z==="style"?$e($e({},N[Z]),V[Z]):V[Z]}return B.className&&(N.className=$n(N.className,B.className)),N}(z,S,$),O=R.as||de,K={};for(var Q in R)R[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&R.theme===$||(Q==="forwardedAs"?K.as=R.forwardedAs:ke&&!ke(Q,O)||(K[Q]=R[Q]));var D=function(Y,B){var H=ds(),Ee=Y.generateAndInjectStyles(B,H.styleSheet,H.stylis);return Ee}(_,R),L=$n(ee,me);return D&&(L+=" "+D),R.className&&(L+=" "+R.className),K[aa(O)&&!nd.has(O)?"class":"className"]=L,I&&(K.ref=I),y.createElement(O,K)}(f,x,A)}m.displayName=c;var f=p.forwardRef(m);return f.attrs=w,f.componentStyle=d,f.displayName=c,f.shouldForwardProp=k,f.foldedComponentIds=r?$n(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=v,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(A){for(var M=[],S=1;S<arguments.length;S++)M[S-1]=arguments[S];for(var I=0,z=M;I<z.length;I++)cs(A,z[I],!0);return A}({},o.defaultProps,x):x}}),A1(f,function(){return".".concat(f.styledComponentId)}),i&&ud(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function lh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ah=function(e){return Object.assign(e,{isCss:!0})};function T(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||Eo(e))return ah(mn(lh(Sl,Mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mn(r):ah(mn(lh(r,t)))}function fs(e,t,n){if(n===void 0&&(n=Cr),!t)throw Bn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,T.apply(void 0,Mo([o],i,!1)))};return r.attrs=function(o){return fs(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return fs(e,t,$e($e({},n),o))},r}var gd=function(e){return fs(vv,e)},C=gd;nd.forEach(function(e){C[e]=gd(e)});var yv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pd(t),Yi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(hs(mn(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Yi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function xv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=T.apply(void 0,Mo([e],t,!1)),o="sc-global-".concat(id(JSON.stringify(r))),i=new yv(r,o),l=function(s){var u=ds(),g=p.useContext(So),c=p.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,g,u.stylis),p.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,g,u.stylis),function(){return i.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,c,v){if(i.isStatic)i.renderStyles(s,Lg,g,v);else{var w=$e($e({},u),{theme:td(u,c,l.defaultProps)});i.renderStyles(s,w,g,v)}}return p.memo(l)}const M1="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",E1="inset 2px 2px 3px rgba(0,0,0,0.2)",wt=()=>T`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,kt=({background:e="material",color:t="materialText"}={})=>T`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Po=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>T`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,zn=()=>T`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Yn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},wv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?M1:!1,o?E1:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return T`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>wv({theme:r,topLeftInner:Yn[t][n.topLeftInner],bottomRightInner:Yn[t][n.bottomRightInner],hasShadow:o})};
  `},$r=()=>T`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,kv=e=>Buffer.from(e).toString("base64"),bv=typeof btoa<"u"?btoa:kv,ei=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${bv(n)})`},S1=(e="default")=>T`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Po({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${kt()}
    ${e==="flat"?zn():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${kt()}
    ${e==="flat"?zn():pe({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?pe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>ei(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>ei(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>ei(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>ei(t.materialText,0)};
  }
`,Av=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Mv=y.forwardRef(({children:e,underline:t=!0,...n},r)=>p.createElement(Av,{ref:r,underline:t,...n},e));Mv.displayName="Anchor";const Ev=C.header`
  ${pe()};
  ${kt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,vd=y.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>p.createElement(Ev,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));vd.displayName="AppBar";const Vn=()=>{};function jn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Sv(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function sh(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Sv(t)))}function gn(e){return typeof e=="number"?`${e}px`:e}const Cv=C.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,$v=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,jv=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...l},a)=>p.createElement(Cv,{noBorder:n,ref:a,size:gn(r),square:o,src:i,...l},i?p.createElement($v,{src:i,alt:e}):t));jv.displayName="Avatar";const Te={sm:"28px",md:"36px",lg:"44px"},Nv=T`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Te[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Te[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Cl=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?T`
          ${zn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&$r}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?T`
          ${kt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&pe({style:"buttonThin"})}
          }
          &:active {
            ${!t&&pe({style:"buttonThinPressed"})}
          }
          ${e&&pe({style:"buttonThinPressed"})}
          ${t&&wt()}
        `:T`
          ${kt()};
          border: none;
          ${t&&wt()}
          ${e?Po({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?T`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:T`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${pe(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&pe({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&$r}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Nv}
`,W=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:l=!1,active:a=!1,onTouchStart:s=Vn,primary:u=!1,variant:g="default",...c},v)=>p.createElement(Cl,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:i,square:l,type:r,variant:g,...c},n));W.displayName="Button";function vn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const l=o!==void 0,[a,s]=y.useState(e),u=y.useCallback(g=>{l||s(g)},[l]);if(l&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(g)}return[l?o:a,u]}const ps=C.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Te[e.size]};
  width: ${e=>e.square?Te[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Te[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&wt()}
`,yd=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...l},a)=>p.createElement(ps,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:a,"aria-disabled":t,...l},r));yd.displayName="MenuListItem";const xd=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${pe({style:"window"})}
  ${kt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;xd.displayName="MenuList";const jt=20,Ji=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,C1=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&wt()}

  ${ps} & {
    margin: 0;
    height: 100%;
  }
  ${ps}:hover & {
    ${({$disabled:e,theme:t})=>!e&&T`
        color: ${t.materialTextInvert};
      `};
  }
`,$1=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ji}:focus ~ & {
    ${$r}
  }
  ${Ji}:not(:disabled) ~ &:active {
    ${$r}
  }
`,Nt=C.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${E1};`}
  }
`,Iv=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${S1()}
`,Co=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>p.createElement(Nt,{ref:r,shadow:t,...n},p.createElement(Iv,null,e)));Co.displayName="ScrollView";const wd=T`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Rv=C(Nt)`
  ${wd}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Tv=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${wd}
  width: ${jt-4}px;
  height: ${jt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Pv=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Ov=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Po({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,_v={flat:Tv,default:Rv},Dv=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:l=Vn,style:a={},value:s,variant:u="default",...g},c)=>{var v;const[w,k]=vn({defaultValue:n,onChange:l,readOnly:(v=g.readOnly)!==null&&v!==void 0?v:r,value:e}),b=y.useCallback(m=>{const f=m.target.checked;k(f),l(m)},[l,k]),E=_v[u];let d=null;return o?d=Ov:w&&(d=Pv),p.createElement(C1,{$disabled:r,className:t,style:a},p.createElement(Ji,{disabled:r,onChange:r?void 0:b,readOnly:r,type:"checkbox",value:s,checked:w,"data-indeterminate":o,ref:c,...g}),p.createElement(E,{$disabled:r,role:"presentation"},d&&p.createElement(d,{$disabled:r,variant:u})),i&&p.createElement($1,null,i))});Dv.displayName="Checkbox";const j1=C.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${gn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${gn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;j1.displayName="Separator";const Lv=C(Cl)`
  padding-left: 8px;
`,Bv=C(j1)`
  height: 21px;
  position: relative;
  top: 0;
`,kd=C.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,zv=C.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?T`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:T`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${kd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${$r}
    outline-offset: -8px;
  }
`,Fv=C.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?T`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:T`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Uv=y.forwardRef(({value:e,defaultValue:t,onChange:n=Vn,disabled:r=!1,variant:o="default",...i},l)=>{var a;const[s,u]=vn({defaultValue:t,onChange:n,readOnly:(a=i.readOnly)!==null&&a!==void 0?a:r,value:e}),g=c=>{const v=c.target.value;u(v),n(c)};return p.createElement(Lv,{disabled:r,as:"div",variant:o,size:"md"},p.createElement(kd,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:l,...i}),p.createElement(zv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&p.createElement(Bv,{orientation:"vertical"}),p.createElement(Fv,{$disabled:r,variant:o}))});Uv.displayName="ColorInput";const Wv=C.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>T`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Po({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,uh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Qv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Hv({digit:e=0,pixelSize:t=2,...n}){const r=Qv[Number(e)].map((o,i)=>o?`${uh[i]} active`:uh[i]);return p.createElement(Wv,{pixelSize:t,...n},r.map((o,i)=>p.createElement("span",{className:o,key:i})))}const Vv=C.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Gv={sm:1,md:2,lg:3,xl:4},Kv=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return p.createElement(Vv,{ref:o,...r},i.map((l,a)=>p.createElement(Hv,{digit:l,pixelSize:Gv[n],key:a})))});Kv.displayName="Counter";const bd=T`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Te.md};
`,Yv=C(Nt).attrs({"data-testid":"variant-default"})`
  ${bd}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Jv=C.div.attrs({"data-testid":"variant-flat"})`
  ${zn()}
  ${bd}
  position: relative;
`,Ad=T`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&wt()}
`,Zv=C.input`
  ${Ad}
  padding: 0 8px;
`,Xv=C.textarea`
  ${Ad}
  padding: 8px;
  resize: none;
  ${({variant:e})=>S1(e)}
`,Md=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Vn,shadow:o=!0,style:i,variant:l="default",...a},s)=>{const u=l==="flat"?Jv:Yv,g=y.useMemo(()=>{var c;return a.multiline?p.createElement(Xv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:l,...a}):p.createElement(Zv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=a.type)!==null&&c!==void 0?c:"text",variant:l,...a})},[t,r,a,s,l]);return p.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},g)});Md.displayName="TextInput";const qv=C.div`
  display: inline-flex;
  align-items: center;
`,gs=C(W)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?T`
          height: calc(50% - 1px);
        `:T`
          height: 50%;
        `}
`,ey=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?T`
          height: calc(${Te.md} - 4px);
        `:T`
          height: ${Te.md};
          margin-left: 2px;
        `}
`,hh=C.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?T`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:T`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${gs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?T`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:T`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ed=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:l,step:a=1,style:s,value:u,variant:g="default",width:c,...v},w)=>{const[k,b]=vn({defaultValue:t,onChange:i,readOnly:l,value:u}),E=y.useCallback(M=>{const S=parseFloat(M.target.value);b(S)},[b]),d=y.useCallback(M=>{const S=jn(parseFloat(((k??0)+M).toFixed(2)),o??null,r??null);b(S),i==null||i(S)},[r,o,i,b,k]),m=y.useCallback(()=>{k!==void 0&&(i==null||i(k))},[i,k]),f=y.useCallback(()=>{d(a)},[d,a]),x=y.useCallback(()=>{d(-a)},[d,a]),A=g==="flat"?"flat":"raised";return p.createElement(qv,{className:e,style:{...s,width:c!==void 0?gn(c):"auto"},...v},p.createElement(Md,{value:k,variant:g,onChange:E,disabled:n,type:"number",readOnly:l,ref:w,fullWidth:!0,onBlur:m}),p.createElement(ey,{variant:g},p.createElement(gs,{"data-testid":"increment",variant:A,disabled:n||l,onClick:f},p.createElement(hh,{invert:!0})),p.createElement(gs,{"data-testid":"decrement",variant:A,disabled:n||l,onClick:x},p.createElement(hh,null))))});Ed.displayName="NumberInput";function ty(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Sd=e=>y.useMemo(()=>ty(),[e]),Cd=T`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,$d=T`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,N1=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,ny=C.div`
  ${Cd}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${N1}:focus & {
    ${$d}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,jd=T`
  height: ${Te.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?wt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,ry=C(Nt)`
  ${jd}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,oy=C.div`
  ${zn()}
  ${jd}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,iy=C.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Cd}
  cursor: pointer;
  &:disabled {
    ${wt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Nd=C(Cl).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?T`
          height: 100%;
          margin-right: 0;
        `:T`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,ly=C.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Nd}:active & {
    margin-top: 2px;
  }
`,ay=C.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${M1};
  ${({variant:e="default"})=>e==="flat"?T`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:T`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>S1(e)}
`,sy=C.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Te.md} - 4px);
  line-height: calc(${Te.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?$d:""}
  user-select: none;
`,uy=[],Id=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=uy,readOnly:l,style:a,value:s,variant:u,width:g})=>{var c;const v=y.useMemo(()=>i.filter(Boolean),[i]),[w,k]=vn({defaultValue:t??((c=v==null?void 0:v[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:l,value:s}),b=!(n||l),E=y.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),d=y.useMemo(()=>p.createElement(Nd,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},p.createElement(ly,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),m=y.useMemo(()=>u==="flat"?oy:ry,[u]);return y.useMemo(()=>({isEnabled:b,options:v,value:w,setValue:k,wrapperProps:E,DropdownButton:d,Wrapper:m}),[d,m,b,v,k,w,E])},hy={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},cy=1e3,my=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:l,open:a,options:s,readOnly:u,value:g,selectRef:c,setValue:v,wrapperRef:w})=>{const k=y.useRef(null),b=y.useRef([]),E=y.useRef(0),d=y.useRef(0),m=y.useRef(),f=y.useRef("search"),x=y.useRef(""),A=y.useRef(),[M,S]=vn({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=y.useMemo(()=>{const N=s.findIndex(F=>F.value===g);return E.current=jn(N,0,null),s[N]},[s,g]),[z,_]=y.useState(s[0]),q=y.useCallback(N=>{const F=k.current,V=b.current[N];if(!V||!F){m.current=N;return}m.current=void 0;const Z=F.clientHeight,le=F.scrollTop,Ne=F.scrollTop+Z,be=V.offsetTop,ot=V.offsetHeight,It=V.offsetTop+V.offsetHeight;be<le&&F.scrollTo(0,be),It>Ne&&F.scrollTo(0,be-Z+ot),V.focus({preventScroll:!0})},[k]),ee=y.useCallback((N,{scroll:F}={})=>{var V;const Z=s.length-1;let le;switch(N){case"first":{le=0;break}case"last":{le=Z;break}case"next":{le=jn(d.current+1,0,Z);break}case"previous":{le=jn(d.current-1,0,Z);break}case"selected":{le=jn((V=E.current)!==null&&V!==void 0?V:0,0,Z);break}default:le=N}d.current=le,_(s[le]),F&&q(le)},[d,s,q]),me=y.useCallback(({fromEvent:N})=>{S(!0),ee("selected",{scroll:!0}),l==null||l({fromEvent:N})},[ee,l,S]),de=y.useCallback(()=>{f.current="search",x.current="",clearTimeout(A.current)},[]),se=y.useCallback(({focusSelect:N,fromEvent:F})=>{var V;n==null||n({fromEvent:F}),S(!1),_(s[0]),de(),m.current=void 0,N&&((V=c.current)===null||V===void 0||V.focus())},[de,n,s,c,S]),we=y.useCallback(({fromEvent:N})=>{M?se({focusSelect:!1,fromEvent:N}):me({fromEvent:N})},[se,me,M]),ke=y.useCallback((N,{fromEvent:F})=>{E.current!==N&&(E.current=N,v(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,v]),$=y.useCallback(({focusSelect:N,fromEvent:F})=>{ke(d.current,{fromEvent:F}),se({focusSelect:N,fromEvent:F})},[se,ke]),R=y.useCallback((N,{fromEvent:F,select:V})=>{var Z;switch(f.current==="cycleFirstLetter"&&N!==x.current&&(f.current="search"),N===x.current?f.current="cycleFirstLetter":x.current+=N,f.current){case"search":{let le=s.findIndex(Ne=>{var be;return((be=Ne.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(x.current))===0});le<0&&(le=s.findIndex(Ne=>{var be;return((be=Ne.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(N))===0}),x.current=N),le>=0&&(V?ke(le,{fromEvent:F}):ee(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=V?(Z=E.current)!==null&&Z!==void 0?Z:-1:d.current;let Ne=s.findIndex((be,ot)=>{var It;return ot>le&&((It=be.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(N))===0});Ne<0&&(Ne=s.findIndex(be=>{var ot;return((ot=be.label)===null||ot===void 0?void 0:ot.toLocaleUpperCase().indexOf(N))===0})),Ne>=0&&(V?ke(Ne,{fromEvent:F}):ee(Ne,{scroll:!0}));break}}clearTimeout(A.current),A.current=setTimeout(()=>{f.current==="search"&&(x.current="")},cy)},[ee,s,ke]),O=y.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=c.current)===null||F===void 0||F.focus(),we({fromEvent:N}),i==null||i(N))},[i,c,we]),K=y.useCallback(N=>{$({focusSelect:!0,fromEvent:N})},[$]),Q=y.useCallback(N=>{const{altKey:F,code:V,ctrlKey:Z,metaKey:le,shiftKey:Ne}=N,{ARROW_DOWN:be,ARROW_UP:ot,END:It,ENTER:kn,ESC:Vt,HOME:Nl,SPACE:Il,TAB:Tr}=hy,I1=F||Z||le||Ne;if(!(V===Tr&&(F||Z||le)||V!==Tr&&I1))switch(V){case be:{if(N.preventDefault(),!M){me({fromEvent:N});return}ee("next",{scroll:!0});break}case ot:{if(N.preventDefault(),!M){me({fromEvent:N});return}ee("previous",{scroll:!0});break}case It:{if(N.preventDefault(),!M){me({fromEvent:N});return}ee("last",{scroll:!0});break}case kn:{if(!M)return;N.preventDefault(),$({focusSelect:!0,fromEvent:N});break}case Vt:{if(!M)return;N.preventDefault(),se({focusSelect:!0,fromEvent:N});break}case Nl:{if(N.preventDefault(),!M){me({fromEvent:N});return}ee("first",{scroll:!0});break}case Il:{N.preventDefault(),M?$({focusSelect:!0,fromEvent:N}):me({fromEvent:N});break}case Tr:{if(!M)return;Ne||N.preventDefault(),$({focusSelect:!Ne,fromEvent:N});break}default:!I1&&V.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),R(V.replace(/^Key/,""),{select:!M,fromEvent:N}))}},[ee,se,M,me,R,$]),D=y.useCallback(N=>{Q(N),o==null||o(N)},[Q,o]),L=y.useCallback(N=>{ee(N)},[ee]),Y=y.useCallback(N=>{M||(de(),e==null||e(N))},[de,e,M]),B=y.useCallback(N=>{de(),r==null||r(N)},[de,r]),H=y.useCallback(N=>{k.current=N,m.current!==void 0&&q(m.current)},[q]),Ee=y.useCallback((N,F)=>{b.current[F]=N,m.current===F&&q(m.current)},[q]);return y.useEffect(()=>{if(!M)return()=>{};const N=F=>{var V;const Z=F.target;!((V=w.current)===null||V===void 0)&&V.contains(Z)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[se,M,w]),y.useMemo(()=>({activeOption:z,handleActivateOptionIndex:L,handleBlur:Y,handleButtonKeyDown:D,handleDropdownKeyDown:Q,handleFocus:B,handleMouseDown:O,handleOptionClick:K,handleSetDropdownRef:H,handleSetOptionRef:Ee,open:M,selectedOption:I}),[z,L,Y,D,B,Q,O,K,H,Ee,M,I])},dy=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:l,value:a,variant:s,width:u,...g},c)=>{const{isEnabled:v,options:w,setValue:k,value:b,DropdownButton:E,Wrapper:d}=Id({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:a,variant:s}),m=y.useCallback(f=>{const x=w.find(A=>A.value===f.target.value);x&&(k(x.value),r==null||r(x,{fromEvent:f}))},[r,w,k]);return p.createElement(d,{className:e,style:{...l,width:u}},p.createElement(N1,null,p.createElement(iy,{...g,disabled:n,onChange:v?m:Vn,ref:c,value:b},w.map((f,x)=>{var A;return p.createElement("option",{key:`${f.value}-${x}`,value:f.value},(A=f.label)!==null&&A!==void 0?A:f.value)})),E))});dy.displayName="SelectNative";function fy({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:l}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(g=>{l(g,n)},[n,l]),u=Sd();return p.createElement(sy,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function py({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:l,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:c,onClose:v,onFocus:w,onKeyDown:k,onMouseDown:b,onOpen:E,open:d,options:m,readOnly:f,shadow:x=!0,style:A,variant:M="default",value:S,width:I="auto",...z},_){const{isEnabled:q,options:ee,setValue:me,value:de,wrapperProps:se,DropdownButton:we,Wrapper:ke}=Id({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:m,style:A,readOnly:f,value:S,variant:M,width:I}),$=y.useRef(null),R=y.useRef(null),O=y.useRef(null),{activeOption:K,handleActivateOptionIndex:Q,handleBlur:D,handleButtonKeyDown:L,handleDropdownKeyDown:Y,handleFocus:B,handleMouseDown:H,handleOptionClick:Ee,handleSetDropdownRef:N,handleSetOptionRef:F,open:V,selectedOption:Z}=my({onBlur:g,onChange:c,onClose:v,onFocus:w,onKeyDown:k,onMouseDown:b,onOpen:E,open:d,options:ee,value:de,selectRef:R,setValue:me,wrapperRef:O});y.useImperativeHandle(_,()=>({focus:kn=>{var Vt;(Vt=R.current)===null||Vt===void 0||Vt.focus(kn)},node:$.current,value:String(de)}),[de]);const le=y.useMemo(()=>Z?typeof i=="function"?i(Z):Z.label:"",[i,Z]),Ne=q?1:void 0,be=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ot=Sd(),It=y.useMemo(()=>ee.map((kn,Vt)=>{const Nl=`${de}-${Vt}`,Il=kn===K,Tr=kn===Z;return p.createElement(fy,{activateOptionIndex:Q,active:Il,index:Vt,key:Nl,onClick:Ee,option:kn,selected:Tr,setRef:F})}),[K,Q,Ee,F,ee,Z,de]);return p.createElement(ke,{...se,$disabled:o,ref:O,shadow:x,style:{...A,width:I}},p.createElement("input",{name:u,ref:$,type:"hidden",value:String(de),...l}),p.createElement(N1,{"aria-disabled":o,"aria-expanded":V,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&V?ot:void 0,onBlur:D,onFocus:B,onKeyDown:L,onMouseDown:q?H:b,ref:R,role:"button",tabIndex:Ne,...z},p.createElement(ny,null,le),we),q&&V&&p.createElement(ay,{id:ot,onKeyDown:Y,ref:N,role:"listbox",style:be,tabIndex:0,variant:M},It))}const Rd=y.forwardRef(py);Rd.displayName="Select";const gy=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Zi=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return p.createElement(gy,{noPadding:n,ref:o,...r},t)});Zi.displayName="Toolbar";const vy=C.div`
  padding: 16px;
`,qe=y.forwardRef(function({children:t,...n},r){return p.createElement(vy,{ref:r,...n},t)});qe.displayName="WindowContent";const yy=C.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?T`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:T`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Cl} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,et=y.forwardRef(function({active:t=!0,children:n,...r},o){return p.createElement(yy,{active:t,ref:o,...r},n)});et.displayName="WindowHeader";const xy=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${kt()}
`,wy=C.span`
  ${({theme:e})=>T`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,zt=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>p.createElement(xy,{ref:i,shadow:r,...o},e,t&&p.createElement(wy,{"data-testid":"resizeHandle",ref:n})));zt.displayName="Window";const ky=C(Co)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,by=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Ay=C.div`
  display: flex;
  flex-wrap: wrap;
`,Rt=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,My=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Ey=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Sy(e,t){return new Date(e,t+1,0).getDate()}function Cy(e,t,n){return new Date(e,t,n).getDay()}function $y(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const jy=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[l,a]=y.useState(()=>$y(t)),{year:s,month:u,day:g}=l,c=y.useCallback(({value:E})=>{a(d=>({...d,month:E}))},[]),v=y.useCallback(E=>{a(d=>({...d,year:E}))},[]),w=y.useCallback(E=>{a(d=>({...d,day:E}))},[]),k=y.useCallback(()=>{const E=[l.year,l.month+1,l.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n(E)},[l.day,l.month,l.year,n]),b=y.useMemo(()=>{const E=Array.from({length:42}),d=Cy(s,u,1);let m=g;const f=Sy(s,u);return m=m<f?m:f,E.forEach((x,A)=>{if(A>=d&&A<f+d){const M=A-d+1;E[A]=p.createElement(Rt,{key:A,onClick:()=>{w(M)}},p.createElement(My,{active:M===m},M))}else E[A]=p.createElement(Rt,{key:A})}),E},[g,w,u,s]);return p.createElement(zt,{className:e,ref:i,shadow:o,style:{margin:20}},p.createElement(et,null,p.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),p.createElement(qe,null,p.createElement(Zi,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(Rd,{options:Ey,value:u,onChange:c,width:128,menuMaxHeight:200}),p.createElement(Ed,{value:s,onChange:v,width:100})),p.createElement(ky,null,p.createElement(by,null,p.createElement(Rt,null,"S"),p.createElement(Rt,null,"M"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"W"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"F"),p.createElement(Rt,null,"S")),p.createElement(Ay,null,b)),p.createElement(Zi,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(W,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),p.createElement(W,{fullWidth:!0,onClick:n?k:void 0,disabled:!n},"OK"))))});jy.displayName="DatePicker";const Ny=e=>{switch(e){case"status":case"well":return T`
        ${pe({style:"status"})}
      `;case"window":case"outside":return T`
        ${pe({style:"window"})}
      `;case"field":return T`
        ${pe({style:"field"})}
      `;default:return T`
        ${pe()}
      `}},Iy=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Ny(e)}
  ${({variant:e})=>kt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ry=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>p.createElement(Iy,{ref:o,shadow:t,variant:n,...r},e));Ry.displayName="Frame";const Ty=C.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&T`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&wt()}
`,Py=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Oy=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>p.createElement(Ty,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&p.createElement(Py,{variant:n},e),r));Oy.displayName="GroupBox";const _y=C.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${gn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;_y.displayName="Handle";const Dy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ly=C.div`
  display: inline-block;
  height: ${({size:e})=>gn(e)};
  width: ${({size:e})=>gn(e)};
`,By=C.span`
  display: block;
  background: ${Dy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,zy=y.forwardRef(({size:e=30,...t},n)=>p.createElement(Ly,{size:e,ref:n,...t},p.createElement(By,null)));zy.displayName="Hourglass";const Fy=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Uy=C.div`
  position: relative;
`,Wy=C.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Qy=C(Nt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Hy=C.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Vy=y.forwardRef(({backgroundStyles:e,children:t,...n},r)=>p.createElement(Fy,{ref:r,...n},p.createElement(Uy,null,p.createElement(Wy,null,p.createElement(Qy,{style:e},t)),p.createElement(Hy,null))));Vy.displayName="Monitor";const Gy=C.div`
  display: inline-block;
  height: ${Te.md};
  width: 100%;
`,Ky=C(Nt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Td=T`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yy=C.div`
  position: relative;
  top: 4px;
  ${Td}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Jy=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Td}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Zy=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Pd=17,Xy=C.span`
  display: inline-block;
  width: ${Pd}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,qy=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const l=e?null:`${n}%`,a=y.useRef(null),[s,u]=y.useState([]),g=y.useCallback(()=>{if(!a.current||n===void 0)return;const c=a.current.getBoundingClientRect().width,v=Math.round(n/100*c/Pd);u(Array.from({length:v}))},[n]);return y.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),p.createElement(Gy,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},p.createElement(Ky,{variant:r,shadow:t},r==="default"?p.createElement(p.Fragment,null,p.createElement(Yy,{"data-testid":"defaultProgress1"},l),p.createElement(Jy,{"data-testid":"defaultProgress2",value:n},l)):p.createElement(Zy,{ref:a,"data-testid":"tileProgress"},s.map((c,v)=>p.createElement(Xy,{key:v})))))});qy.displayName="ProgressBar";const Od=T`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,e2=C(Nt)`
  ${Od}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,t2=C.div`
  ${zn()}
  ${Od}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,n2=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,r2={flat:t2,default:e2},o2=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:l="default",...a},s)=>{const u=r2[l];return p.createElement(C1,{$disabled:n,className:t,style:i},p.createElement(u,{$disabled:n,role:"presentation"},e&&p.createElement(n2,{$disabled:n,variant:l})),p.createElement(Ji,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&p.createElement($1,null,r))});o2.displayName="Radio";const i2=typeof window<"u"?y.useLayoutEffect:y.useEffect;function bn(e){const t=y.useRef(e);return i2(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function ch(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function mh(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{ch(e,n),ch(t,n)},[e,t])}let $l=!0,vs=!1,dh;const l2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a2(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&l2[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function s2(e){e.metaKey||e.altKey||e.ctrlKey||($l=!0)}function ua(){$l=!1}function u2(){this.visibilityState==="hidden"&&vs&&($l=!0)}function h2(e){e.addEventListener("keydown",s2,!0),e.addEventListener("mousedown",ua,!0),e.addEventListener("pointerdown",ua,!0),e.addEventListener("touchstart",ua,!0),e.addEventListener("visibilitychange",u2,!0)}function c2(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return $l||a2(t)}function m2(){vs=!0,window.clearTimeout(dh),dh=window.setTimeout(()=>{vs=!1},100)}function d2(){const e=y.useCallback(t=>{const n=Pm.findDOMNode(t);n!=null&&h2(n.ownerDocument)},[]);return{isFocusVisible:c2,onBlurVisible:m2,ref:e}}function f2(e,t,n){return(n-t)*e+t}function ti(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ni(e){return e&&e.ownerDocument||document}function p2(e,t){var n;const{index:r}=(n=e.reduce((o,i,l)=>{const a=Math.abs(t-i);return o===null||a<o.distance||a===o.distance?{distance:a,index:l}:o},null))!==null&&n!==void 0?n:{};return r??-1}const g2=C.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?T`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:T`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,_d=()=>T`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?T`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:T`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,v2=C(Nt)`
  ${_d()}
`,y2=C(Nt)`
  ${_d()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,x2=C.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?T`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:T`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?T`
          ${zn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:T`
          ${kt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Po({mainColor:t.material,secondaryColor:t.borderLightest})}
`,hr=6,w2=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?T`
          right: ${-hr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${hr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:T`
          bottom: ${-hr}px;
          height: ${hr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&T`
      ${wt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,k2=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?T`
          transform: translate(${hr+2}px, ${hr+1}px);
        `:T`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,b2=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:l,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:c=1,value:v,variant:w="default",...k},b)=>{const E=w==="flat"?y2:v2,d=u==="vertical",[m=o,f]=vn({defaultValue:e,onChange:l??a,value:v}),{isFocusVisible:x,onBlurVisible:A,ref:M}=d2(),[S,I]=y.useState(!1),z=y.useRef(),_=y.useRef(null),q=mh(M,z),ee=mh(b,q),me=bn(D=>{x(D)&&I(!0)}),de=bn(()=>{S!==!1&&(I(!1),A())}),se=y.useRef(),we=y.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((D,L)=>({label:void 0,value:o+c*L})):Array.isArray(n)?n:[],[n,r,o,c]),ke=bn(D=>{const L=(r-o)/10,Y=we.map(Ee=>Ee.value),B=Y.indexOf(m);let H=0;switch(D.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":c&&(H=m+L);break;case"PageDown":c&&(H=m-L);break;case"ArrowRight":case"ArrowUp":c?H=m+c:H=Y[B+1]||Y[Y.length-1];break;case"ArrowLeft":case"ArrowDown":c?H=m-c:H=Y[B-1]||Y[0];break;default:return}D.preventDefault(),c&&(H=sh(H,c,o)),H=jn(H,o,r),f(H),I(!0),l==null||l(H),a==null||a(H)}),$=y.useCallback(D=>{if(!z.current)return 0;const L=z.current.getBoundingClientRect();let Y;d?Y=(L.bottom-D.y)/L.height:Y=(D.x-L.left)/L.width;let B;if(B=f2(Y,o,r),c)B=sh(B,c,o);else{const H=we.map(N=>N.value),Ee=p2(H,B);B=H[Ee]}return B=jn(B,o,r),B},[we,r,o,c,d]),R=bn(D=>{var L;const Y=ti(D,se.current);if(!Y)return;const B=$(Y);(L=_.current)===null||L===void 0||L.focus(),f(B),I(!0),l==null||l(B)}),O=bn(D=>{const L=ti(D,se.current);if(!L)return;const Y=$(L);a==null||a(Y),se.current=void 0;const B=ni(z.current);B.removeEventListener("mousemove",R),B.removeEventListener("mouseup",O),B.removeEventListener("touchmove",R),B.removeEventListener("touchend",O)}),K=bn(D=>{var L;s==null||s(D),D.preventDefault(),(L=_.current)===null||L===void 0||L.focus(),I(!0);const Y=ti(D,se.current);if(Y){const H=$(Y);f(H),l==null||l(H)}const B=ni(z.current);B.addEventListener("mousemove",R),B.addEventListener("mouseup",O)}),Q=bn(D=>{var L;D.preventDefault();const Y=D.changedTouches[0];Y!=null&&(se.current=Y.identifier),(L=_.current)===null||L===void 0||L.focus(),I(!0);const B=ti(D,se.current);if(B){const Ee=$(B);f(Ee),l==null||l(Ee)}const H=ni(z.current);H.addEventListener("touchmove",R),H.addEventListener("touchend",O)});return y.useEffect(()=>{const{current:D}=z;D==null||D.addEventListener("touchstart",Q);const L=ni(D);return()=>{D==null||D.removeEventListener("touchstart",Q),L.removeEventListener("mousemove",R),L.removeEventListener("mouseup",O),L.removeEventListener("touchmove",R),L.removeEventListener("touchend",O)}},[O,R,Q]),p.createElement(g2,{$disabled:t,hasMarks:!!we.length,isFocused:S,onMouseDown:K,orientation:u,ref:ee,size:gn(g),...k},p.createElement("input",{disabled:t,name:i,type:"hidden",value:m??0}),we&&we.map(D=>p.createElement(w2,{$disabled:t,"data-testid":"tick",key:D.value/(r-o)*100,orientation:u,style:{[d?"bottom":"left"]:`${(D.value-o)/(r-o)*100}%`}},D.label&&p.createElement(k2,{"aria-hidden":!0,"data-testid":"mark",orientation:u},D.label))),p.createElement(E,{orientation:u,variant:w}),p.createElement(x2,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":m,onBlur:de,onFocus:me,onKeyDown:ke,orientation:u,ref:_,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(m-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:w}))});b2.displayName="Slider";const A2=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${E1};
  overflow-y: auto;
`,M2=y.forwardRef(function({children:t,...n},r){return p.createElement(A2,{ref:r,...n},t)});M2.displayName="TableBody";const E2=C.td`
  padding: 0 8px;
`,S2=y.forwardRef(function({children:t,...n},r){return p.createElement(E2,{ref:r,...n},t)});S2.displayName="TableDataCell";const C2=C.thead`
  display: table-header-group;
`,$2=y.forwardRef(function({children:t,...n},r){return p.createElement(C2,{ref:r,...n},t)});$2.displayName="TableHead";const j2=C.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${pe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&T`
      &:active {
        &:before {
          ${pe({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&wt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&wt()}
  }
`,N2=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Vn,sort:i,...l},a){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return p.createElement(j2,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...l},p.createElement("div",null,n))});N2.displayName="TableHeadCell";const I2=C.tr`
  color: inherit;
  display: table-row;
  height: calc(${Te.md} - 2px);
  line-height: calc(${Te.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,R2=y.forwardRef(function({children:t,...n},r){return p.createElement(I2,{ref:r,...n},t)});R2.displayName="TableRow";const T2=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,P2=C(Nt)`
  &:before {
    box-shadow: none;
  }
`,O2=y.forwardRef(({children:e,...t},n)=>p.createElement(P2,null,p.createElement(T2,{ref:n,...t},e)));O2.displayName="Table";const _2=C.button`
  ${kt()}
  ${pe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Te.md};
  line-height: ${Te.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${$r}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Te.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,D2=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>p.createElement(_2,{"aria-selected":n,selected:n,onClick:l=>t==null?void 0:t(e,l),ref:i,role:"tab",...o},r));D2.displayName="Tab";const L2=C.div`
  ${kt()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,B2=y.forwardRef(({children:e,...t},n)=>p.createElement(L2,{ref:n,...t},e));B2.displayName="TabBody";const z2=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,F2=C.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function U2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const W2=y.forwardRef(({value:e,onChange:t=Vn,children:n,rows:r=1,...o},i)=>{const l=y.useMemo(()=>{var a;const s=(a=p.Children.map(n,c=>{if(!p.isValidElement(c))return null;const v={selected:c.props.value===e,onClick:t};return p.cloneElement(c,v)}))!==null&&a!==void 0?a:[],u=U2(s,r).map((c,v)=>({key:v,tabs:c})),g=u.findIndex(c=>c.tabs.some(v=>v.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return p.createElement(z2,{...o,isMultiRow:r>1,role:"tablist",ref:i},l.map(a=>p.createElement(F2,{key:a.key},a.tabs)))});W2.displayName="Tabs";const Q2=["blur","focus"],H2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function fh(e){return"nativeEvent"in e&&Q2.includes(e.type)}function ph(e){return"nativeEvent"in e&&H2.includes(e.type)}const V2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},G2=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${M1};
  text-align: center;
  font-size: 1rem;
  ${e=>V2[e.position]}
`,K2=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Y2=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:l,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:c,style:v,text:w,position:k="top",...b},E)=>{const[d,m]=y.useState(!1),[f,x]=y.useState(),[A,M]=y.useState(),S=!n,I=!r,z=$=>{window.clearTimeout(f),window.clearTimeout(A);const R=window.setTimeout(()=>{m(!0),c==null||c($)},o);x(R)},_=$=>{$.persist(),fh($)?s==null||s($):ph($)&&(u==null||u($)),z($)},q=$=>{window.clearTimeout(f),window.clearTimeout(A);const R=window.setTimeout(()=>{m(!1),a==null||a($)},i);M(R)},ee=$=>{$.persist(),fh($)?l==null||l($):ph($)&&(g==null||g($)),q($)},me=S?ee:void 0,de=S?_:void 0,se=I?_:void 0,we=I?ee:void 0,ke=S?0:void 0;return p.createElement(K2,{"data-testid":"tooltip-wrapper",onBlur:me,onFocus:de,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},p.createElement(G2,{className:e,"data-testid":"tooltip",position:k,ref:E,show:d,style:v,...b},w),t)});Y2.displayName="Tooltip";const ys=C($1)`
  white-space: nowrap;
`,Dd=T`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":T`
          cursor: pointer;

          :focus {
            ${ys} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,J2=C.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&T`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,Z2=C.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?T`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:T`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,X2=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,q2=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Dd};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,gh=C(C1)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Dd};
`,ex=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function vh(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function yh(e){e.preventDefault()}function Ld({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:l,style:a,tree:s=[]}){const u=o===0,g=y.useCallback(c=>{var v,w;const k=!!(c.items&&c.items.length>0),b=n.includes(c.id),E=(v=t||c.disabled)!==null&&v!==void 0?v:!1,d=E?yh:A=>i(A,c),m=E?yh:A=>i(A,c),f=l===c.id,x=p.createElement(ex,{"aria-hidden":!0},c.icon);return p.createElement(Z2,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":b,"aria-selected":f,hasItems:k},k?p.createElement(X2,{open:b},p.createElement(q2,{onClick:d,$disabled:E},p.createElement(gh,{$disabled:E},x,p.createElement(ys,null,c.label))),b&&p.createElement(Ld,{className:e,disabled:E,expanded:n,level:o+1,select:i,selected:l,style:a,tree:(w=c.items)!==null&&w!==void 0?w:[]})):p.createElement(gh,{as:"button",$disabled:E,onClick:m},x,p.createElement(ys,null,c.label)))},[e,t,n,u,o,i,l,a]);return p.createElement(J2,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function tx({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:l,selected:a,style:s,tree:u=[]},g){const[c,v]=vn({defaultValue:t,onChange:l,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[w,k]=vn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),b=y.useCallback((m,f)=>{if(l){const x=vh(c,f);l(m,x)}v(x=>vh(x,f))},[c,l,v]),E=y.useCallback((m,f)=>{k(f),i&&i(m,f)},[i,k]),d=y.useCallback((m,f)=>{m.preventDefault(),E(m,f.id),f.items&&f.items.length&&b(m,f.id)},[E,b]);return p.createElement(Ld,{className:e,disabled:r,expanded:c,level:0,innerRef:g,select:d,selected:w,style:s,tree:u})}const nx=y.forwardRef(tx);nx.displayName="TreeView";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Bd=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:s,...u},g)=>y.createElement("svg",{ref:g,...rx,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${ox(e)}`,a].join(" "),...u},[...t.map(([c,v])=>y.createElement(c,v)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Bd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Bd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function jl(){const[e,t]=y.useState(!1);return h.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(Ye,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),h.jsxs("div",{className:"hidden sm:flex",children:[h.jsx(Ye,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),h.jsx(Ye,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),h.jsx(Ye,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),h.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?h.jsx(lx,{size:18}):h.jsx(ix,{size:18})})]}),e&&h.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:h.jsxs("div",{className:"py-1",children:[h.jsx(Ye,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),h.jsx(Ye,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),h.jsx(Ye,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}const zd=""+new URL("oceanic-CaOGPC7J.png",import.meta.url).href,ax=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href,Fd=""+new URL("average_percent_difference-DDl9Xwvl.png",import.meta.url).href,$t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAMhC1l/wAAAExJREFUGNOVUEEOACAIQr+Wz9a31anGkkNxcsIAtazECxwAYsSMEfMmee8AkJW2CRYxZxx9u27RcVQEz02oopuQO6nOroqrA+3rjy9YWkYx2fiH84QAAAAASUVORK5CYII=",dn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAiWPtoMAAAADZJREFUGNNjZGBg+M9AAOzZu4eRiYFIwALTgUuBi7PLfwYGBgaiTRwKClmQfYYPMO7Zu4coEwGQFAtLFQC+JAAAAABJRU5ErkJggg==";var sx=["variant"];function ux(e,t){if(e==null)return{};var n=hx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}var cx=function(t){return p.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M7 2h9M6 3h1m9 0h1M5 4h1m11 0h1M4 5h1m13 0h1M3 6h1m15 0h11M3 7h1M3 8h1M3 9h1m-1 1h1m-3 1h2m-3 1h1m27 0h1M0 13h1m26 0h1M0 14h1m26 0h1M0 15h1m28 0h1M0 16h1m28 0h1M1 17h1m26 0h1M1 18h1m26 0h1M1 19h1m-1 1h1m0 1h1m26 0h1M2 22h1m26 0h1M2 23h1m-1 1h1m0 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"#fff",d:"M7 3h9M6 4h1M5 5h1M4 6h1M4 7h1m14 0h11M4 8h1M4 9h1m-1 1h1m-4 2h26"}),p.createElement("path",{stroke:"#ff0",d:"M7 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1m0 1h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h25m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M30 7h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1M4 28h27"}),p.createElement("path",{stroke:"olive",d:"M30 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M4 27h27"}))},mx=function(t){return p.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h12"}),p.createElement("path",{stroke:"#fff",d:"M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h10M1 8h1m0 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#ff0",d:"M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13"}))},dx={"32x32_4":cx,"16x16_4":mx},fx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ux(t,sx),i=dx[r];return p.createElement(i,o)},px=["variant"];function gx(e,t){if(e==null)return{};var n=vx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}var yx=function(t){return p.createElement("svg",xs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M30 0h1m-1 1h1m-1 1h1M1 3h28m1 0h1M1 4h1m5 0h1m20 0h1m1 0h1M1 5h7m20 0h1m1 0h1M1 6h1m5 0h1m20 0h3M1 7h7m20 0h1m1 0h2M1 8h1m5 0h1m20 0h1m1 0h1M1 9h7m5 0h2m3 0h1m9 0h1m1 0h1M1 10h1m5 0h1m5 0h2m3 0h1m9 0h1m1 0h1M1 11h7m20 0h1m1 0h1M1 12h1m5 0h1m2 0h5m1 0h1m3 0h5m3 0h1m1 0h2M1 13h7m2 0h1m3 0h1m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1M1 14h1m5 0h1m2 0h1m3 0h1m5 0h1m3 0h1m3 0h1m1 0h1M1 15h7m2 0h5m5 0h5m3 0h1m1 0h1M1 16h1m5 0h1m20 0h1m1 0h1M1 17h7m20 0h1m1 0h1M1 18h1m5 0h1m2 0h2m3 0h6m2 0h2m3 0h1m1 0h1M1 19h7m2 0h2m3 0h1m4 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 20h1m5 0h1m2 0h2m3 0h1m4 0h1m2 0h2m3 0h1m1 0h1M1 21h7m7 0h6m7 0h1m1 0h1M1 22h1m5 0h1m20 0h3M1 23h7m5 0h1m4 0h1m9 0h1m1 0h1M1 24h1m5 0h1m20 0h1m1 0h1M1 25h28m1 0h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"olive",d:"M2 4h5M2 6h5M2 8h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5"}),p.createElement("path",{stroke:"#0f0",d:"M8 4h20M8 5h1m3 0h7m2 0h7M8 6h1m3 0h4m1 0h2m2 0h7M8 7h1m3 0h4m1 0h2m2 0h2m1 0h4M8 8h15m1 0h4M8 9h5m2 0h3m1 0h9M8 10h5m2 0h3m1 0h9M8 11h20M8 12h2m5 0h1m1 0h3m5 0h3M8 13h2m5 0h1m1 0h3m5 0h3M8 14h2m5 0h5m5 0h3M8 15h2m5 0h5m5 0h3M8 16h20M8 17h20M8 18h2m2 0h3m6 0h2m2 0h3M8 19h2m2 0h3m6 0h2m2 0h1m1 0h1M8 20h2m2 0h3m6 0h2m2 0h3M8 21h7m6 0h7M8 22h20M8 23h5m1 0h4m1 0h9M8 24h20"}),p.createElement("path",{stroke:"red",d:"M9 5h3M9 6h3M9 7h3"}),p.createElement("path",{stroke:"gray",d:"M19 5h2m-5 1h1m2 0h2m-5 1h1m2 0h2m2 0h1m5 0h1m-7 1h1m5 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-19 1h3m7 0h3m5 0h1m-19 1h3m7 0h3m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h4m9 0h1m-14 1h4m9 0h1m-1 1h1"}))},xx={"32x32_4":yx},wx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=gx(t,px),i=xx[r];return p.createElement(i,o)},kx=["variant"];function bx(e,t){if(e==null)return{};var n=Ax(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ax(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}var Mx=function(t){return p.createElement("svg",ws({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2"}),p.createElement("path",{stroke:"silver",d:"M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1"}),p.createElement("path",{stroke:"#fff",d:"M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1"}),p.createElement("path",{stroke:"#00f",d:"M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9"}),p.createElement("path",{stroke:"#000",d:"M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2"}))},Ex={"32x32_4":Mx},Ud=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=bx(t,kx),i=Ex[r];return p.createElement(i,o)},Sx=["variant"];function Cx(e,t){if(e==null)return{};var n=$x(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $x(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var jx=function(t){return p.createElement("svg",qi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M5 0h9M4 1h1m8 0h2M3 2h1m9 0h1m1 0h1m-3 1h1m1 0h1M2 4h1m9 0h1m2 0h1m-4 1h1m2 0h1M1 6h1m9 0h1m3 0h1m-5 1h1m3 0h1M0 8h1m9 0h1m4 0h1m-6 1h1m4 0h1M0 10h10m5 0h1M4 11h1m10 0h1M4 12h1m10 0h1M4 13h1m10 0h1M4 14h1m10 0h1M5 15h10"}),p.createElement("path",{stroke:"gray",d:"M5 1h1m2 0h1m2 0h1m2 13h1"}),p.createElement("path",{stroke:"teal",d:"M6 1h2m1 0h2m1 0h1M3 3h1m1 0h6m1 0h1M5 4h5M2 5h1m8 0h1M1 7h1m8 0h1M0 9h1m8 0h1"}),p.createElement("path",{stroke:"#0ff",d:"M4 2h9M4 3h1m6 0h1M3 4h2m5 0h2M3 5h8M2 6h9M2 7h8M1 8h9M1 9h8"}),p.createElement("path",{stroke:"silver",d:"M14 2h1m-1 1h1m-2 1h2m-2 1h2m-3 1h3m-3 1h3m-4 1h4m-4 1h2m1 0h1m-5 1h5M5 11h10M5 12h7m2 0h1M5 13h10M5 14h9"}),p.createElement("path",{stroke:"#fff",d:"M13 9h1m-2 3h2"}))},Nx=function(t){return p.createElement("svg",qi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M9 1h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M8 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h3M7 3h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M7 4h1m18 0h1m2 0h1M6 5h1m19 0h1m2 0h1M6 6h1m18 0h1m3 0h1M5 7h1m4 0h10m5 0h1m3 0h1M5 8h1m18 0h1m4 0h1M4 9h1m4 0h10m5 0h1m4 0h1M4 10h1m18 0h1m5 0h1M3 11h1m19 0h1m5 0h1M3 12h1m18 0h1m6 0h1M2 13h1m19 0h1m6 0h1M2 14h1m18 0h1m7 0h1M1 15h1m19 0h1m7 0h1M1 16h1m18 0h1m8 0h1M0 17h1m19 0h1m8 0h1M0 18h1m18 0h1m9 0h1M0 19h1m18 0h1m9 0h1M1 20h18m10 0h1M8 21h1m20 0h1M8 22h1m20 0h1M8 23h1m20 0h1M8 24h1m20 0h1M8 25h1m20 0h1M8 26h1m20 0h1M8 27h1m20 0h1M9 28h1m19 0h1m-20 1h1m17 0h1m-18 1h17"}),p.createElement("path",{stroke:"#fff",d:"M9 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 9h1m-1 1h1m-2 2h2m-2 1h2m-3 2h3m-3 1h3m-4 2h4m-4 1h4m-5 2h5m-5 1h5m-7 2h7M9 27h17"}),p.createElement("path",{stroke:"#0ff",d:"M8 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M9 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M8 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m11 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m11 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M8 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2M7 7h1m1 0h1m11 0h1m1 0h1m2 0h2M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3M5 9h1m1 0h1m11 0h1m1 0h1m3 0h3M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M5 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h1M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m3 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h4m3 0h1m-1 1h1m-9 1h4m4 0h1M9 21h14m4 0h1m-1 1h1M9 23h13m5 0h1M9 24h13m5 0h1m-1 1h1M9 26h11m7 0h1m-2 1h2m-18 1h17"}),p.createElement("path",{stroke:"teal",d:"M26 3h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M1 19h18"}),p.createElement("path",{stroke:"gray",d:"M28 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h3m1 0h1m-1 1h1m-1 1h1m-6 1h4m1 0h1m-1 1h1m-1 1h1m-8 1h6m1 0h1m-1 1h1m-1 1h1m-9 1h7m1 0h1m-1 1h1m-1 1h1M9 22h18m1 0h1m-1 1h1m-1 1h1M9 25h18m1 0h1m-1 1h1m-1 1h1m-2 1h2m-18 1h17"}))},Ix={"16x16_4":jx,"32x32_4":Nx},Rx=function(t){var n=t.variant,r=n===void 0?"16x16_4":n,o=Cx(t,Sx),i=Ix[r];return p.createElement(i,o)},Tx=["variant"];function Px(e,t){if(e==null)return{};var n=Ox(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ox(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}var _x=function(t){return p.createElement("svg",ks({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M7 1h8M5 2h2m8 0h2M4 3h1m12 0h1M3 4h1m14 0h1m11 0h1M2 5h1m16 0h1m10 0h2M2 6h1m16 0h1m10 0h2M1 7h1m18 0h1m8 0h1m1 0h1M1 8h1m18 0h1m7 0h1m1 0h2M1 9h1m19 0h1m6 0h4M1 10h1m19 0h1m5 0h4M0 11h1m21 0h1m3 0h1m1 0h1M0 12h1m22 0h1m1 0h1m1 0h1M0 13h1m23 0h1m1 0h1M0 14h1m22 0h1m1 0h2M0 15h1m18 0h4m1 0h1m2 0h1M0 16h1m17 0h1m2 0h1m1 0h2m3 0h1M0 17h1m17 0h1m1 0h1m1 0h1m1 0h1m4 0h1M0 18h1m17 0h2m1 0h1m2 0h1m4 0h1M0 19h1m18 0h2m2 0h1m6 0h1M1 20h1m18 0h3m7 0h1M1 21h1m28 0h1M1 22h1m28 0h1M2 23h1m27 0h1M2 24h1m27 0h1M3 25h1m26 0h1M4 26h1m24 0h1M5 27h1m23 0h1M6 28h1m21 0h1M7 29h2m17 0h2M7 30h5m11 0h3M6 31h2m4 0h11"}),p.createElement("path",{stroke:"silver",d:"M7 2h1m6 0h1M8 3h1m1 0h1m1 0h1m1 0h2M5 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m7 0h1m1 0h1M5 6h1m1 0h1m9 0h1M2 7h1m1 0h1m1 0h1m9 0h1m1 0h1M3 8h1m1 0h1m1 0h1m9 0h1M4 9h1m1 0h1m1 0h1m9 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M2 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 13h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h2m3 0h1M2 15h1m7 0h1m1 0h1m1 0h1m1 0h2M3 16h1m5 0h1m1 0h1m1 0h1m1 0h1m10 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h3M3 18h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m9 0h1m1 0h1M2 19h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1M3 20h1m1 0h1m7 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M2 21h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m7 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 24h1m1 0h1m3 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 25h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 26h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M8 27h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M9 28h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m-16 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#fff",d:"M8 2h6M5 3h3M4 4h1M3 5h1M3 6h1M3 7h1m26 0h1M2 8h1m26 0h1M2 9h1m-1 1h1m-2 1h1m25 0h1M1 12h1m24 0h1M1 13h1m23 0h1M1 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 5h1m0 1h1m0 1h1m0 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M9 3h1m1 0h1m1 0h1M6 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 5h1m1 0h1m7 0h1m1 0h1M4 6h1m1 0h1m1 0h1m7 0h1M5 7h1m1 0h1m9 0h1M4 8h1m1 0h1m1 0h1m9 0h1M3 9h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M3 11h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m9 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1M2 16h1m7 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m9 0h1M3 19h1m1 0h1m7 0h1m1 0h1m1 0h1m7 0h1m1 0h1M2 20h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M3 21h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m7 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m5 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 26h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 27h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1M8 28h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"olive",d:"M16 3h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m0 1h1m-5 1h3m-4 1h1m-2 1h1m9 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-11 1h1m10 0h1m-11 1h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h1m-2 1h2m-3 1h2M9 29h1m13 0h3m-14 1h11"}),p.createElement("path",{stroke:"#f0f",d:"M8 5h6M9 6h6M8 7h7m-5 1h6m-4 1h3"}),p.createElement("path",{stroke:"purple",d:"M15 6h1m-1 1h1M9 8h1m6 0h1m-7 1h2m3 0h2m-5 1h4"}),p.createElement("path",{stroke:"#0f0",d:"M5 11h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1"}),p.createElement("path",{stroke:"green",d:"M6 11h1m-2 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h2m-8 1h2m1 0h1m1 0h2m-6 1h5"}),p.createElement("path",{stroke:"#00f",d:"M24 14h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 5h3m-5 1h6m-7 1h8m-8 1h8m-7 1h5"}),p.createElement("path",{stroke:"gray",d:"M25 15h2m-2 1h1M7 28h1"}),p.createElement("path",{stroke:"red",d:"M8 18h3m-4 1h4m-5 1h5m-5 1h6m-5 1h6m-5 1h3"}),p.createElement("path",{stroke:"maroon",d:"M11 19h1m-1 1h1m0 1h1m-7 1h1m6 0h1m-7 1h1m3 0h2m-5 1h3"}),p.createElement("path",{stroke:"navy",d:"M21 24h1m0 1h1m-1 1h1m-9 1h1m5 0h2m-7 1h5"}))},Dx={"32x32_4":_x},Lx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Px(t,Tx),i=Dx[r];return p.createElement(i,o)},Bx=["variant"];function zx(e,t){if(e==null)return{};var n=Fx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}var Ux=function(t){return p.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 9h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 10h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 11h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 12h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 13h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 14h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 15h1m4 0h1m4 0h1m4 0h1m1 0h1m2 0h1m4 0h1m3 0h1M1 16h1m2 0h1m1 0h1m4 0h1m4 0h2m1 0h1m1 0h1m4 0h1m3 0h1M1 17h1m4 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h1m3 0h1M1 18h1m2 0h1m1 0h1m4 0h1m3 0h2m3 0h2m4 0h1m3 0h1M1 19h1m4 0h1m3 0h3m1 0h1m1 0h1m3 0h2m4 0h1m1 0h1m1 0h1M1 20h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h1m4 0h1m4 0h2m2 0h1M1 21h1m4 0h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 22h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h2m2 0h2m3 0h1M1 23h1m4 0h1m1 0h1m2 0h1m4 0h1m4 0h2m1 0h1m1 0h1m3 0h1M1 24h1m2 0h1m1 0h1m1 0h1m2 0h1m4 0h1m4 0h1m1 0h1m2 0h1m3 0h1M1 25h1m4 0h2m3 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 26h1m2 0h1m1 0h23m1 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}))},Wx=function(t){return p.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m28 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M1 12h1m28 0h1M1 13h1m28 0h1M1 14h1m28 0h1M1 15h1m28 0h1M1 16h1m28 0h1M1 17h1m28 0h1M1 18h1m28 0h1M1 19h1m28 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M1 23h1m28 0h1M1 24h1m28 0h1M1 25h1m28 0h1M1 26h1m28 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}),p.createElement("path",{stroke:"gray",d:"M31 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 29h30"}),p.createElement("path",{stroke:"#00f",d:"M4 8h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 9h1m4 0h1m4 0h1m4 0h1m4 0h1M4 10h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 11h1m4 0h1m4 0h1m4 0h1m4 0h1M4 12h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 13h1m4 0h1m4 0h1m4 0h1m4 0h1M4 14h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 15h1m4 0h1m4 0h1m4 0h1m4 0h1M4 16h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 17h1m4 0h1m9 0h1m4 0h1M4 18h1m1 0h1m9 0h1m4 0h1m4 0h1M6 19h1m4 0h1m4 0h1m4 0h1m4 0h1M4 20h1m1 0h1m4 0h1m4 0h1m9 0h1M6 21h1m4 0h1m4 0h1M4 22h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 23h1m4 0h1m4 0h1m4 0h1m4 0h1M4 24h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 25h1m4 0h1m4 0h1m4 0h1m4 0h1M4 26h1m2 0h22"}),p.createElement("path",{stroke:"#f0f",d:"M18 15h1m-2 1h1m1 0h1m-4 1h1m2 0h1m-9 1h1m3 0h1m4 0h1m-11 1h1m1 0h1m1 0h1m5 0h1m7 0h1m-19 1h1m2 0h1m7 0h1m5 0h1M9 21h1m11 0h1m4 0h1M9 22h1m12 0h1m2 0h1M8 23h1m13 0h1m1 0h1M8 24h1m14 0h1M7 25h1m-2 1h1"}))},Qx={"32x32_1":Ux,"32x32_4":Wx},Hx=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=zx(t,Bx),i=Qx[r];return p.createElement(i,o)},Vx=["variant"];function Gx(e,t){if(e==null)return{};var n=Kx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tl(){return tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tl.apply(this,arguments)}var Yx=function(t){return p.createElement("svg",tl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M16 0h6m-9 1h3m-5 1h3m-4 1h1M9 4h1M8 5h1M8 6h1m19 0h1M7 7h1m19 0h1m1 0h1M7 8h1m18 0h1m1 0h1M6 9h1m10 0h4m4 0h1m1 0h1m1 0h1M6 10h1m9 0h1m4 0h1m2 0h1m1 0h1m1 0h1m1 0h1M6 11h1m8 0h1m6 0h2m1 0h1m1 0h1m1 0h1M6 12h1m8 0h1m6 0h1M6 13h2m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M6 14h1m1 0h1m1 0h1m1 0h1m1 0h2m6 0h1M6 15h2m1 0h1m1 0h1m1 0h1m2 0h1m4 0h1M6 16h1m1 0h1m1 0h1m1 0h1m4 0h4M3 17h5m1 0h1m1 0h1M2 18h1m4 0h2m1 0h1M1 19h1m6 0h2M0 20h1m7 0h1m-9 1h1m8 0h1M0 22h1m9 0h1m17 0h1M0 23h1m2 0h10m11 0h1m2 0h2M0 24h1m12 0h3m9 0h4M0 25h1m13 0h1m7 0h3m1 0h3M0 26h1m16 0h6m3 0h3M0 27h1m25 0h3M0 28h1m25 0h2M0 29h27"}),p.createElement("path",{stroke:"#ff0",d:"M16 1h3m-3 1h3m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m0 9h1m-2 1h2m-1 1h1m-2 1h2m-1 1h1m-2 1h3m-2 1h2m-3 1h3"}),p.createElement("path",{stroke:"silver",d:"M19 1h3m-3 1h6m-6 1h8m-8 1h8M9 5h2m8 0h7m1 0h1M10 6h2m7 0h6m1 0h1M11 7h2m6 0h5m1 0h1m2 0h1M8 8h2m2 0h2m5 0h4m1 0h1m2 0h1m1 0h1M7 9h5m1 0h2m6 0h1m1 0h1m2 0h1m1 0h1m1 0h1M7 10h6m1 0h2m9 0h1m1 0h1m1 0h1M7 11h7m10 0h1m1 0h1m1 0h1m1 0h1M7 12h8m8 0h8M8 13h1m1 0h1m1 0h1m1 0h1m8 0h8M7 14h1m1 0h1m1 0h1m1 0h1m9 0h8M8 15h1m1 0h1m1 0h1m2 0h1m6 0h9M7 16h1m1 0h1m1 0h1m2 0h1m1 0h1m5 0h9M8 17h1m1 0h1m2 0h1m1 0h4m1 0h1m2 0h7M3 18h4m2 0h1m2 0h1m1 0h4m3 0h1m2 0h6M2 19h6m3 0h1m1 0h6m2 0h1m3 0h4m-19 1h1m1 0h6m4 0h1m3 0h3M2 21h7m2 0h8m3 0h1m4 0h1M2 22h1m8 0h7m5 0h1M2 23h1m10 0h6m4 0h1M2 24h1m13 0h2M2 25h1m22 0h1M2 26h1m3 0h11m6 0h3M2 27h1m3 0h20M2 28h24"}),p.createElement("path",{stroke:"#000",d:"M22 1h3m0 1h2m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-15 1h4m10 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-15 1h4m10 0h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h2m-3 1h1m1 0h1m-5 1h2m2 0h1M3 24h10m9 0h3m4 0h1m-15 1h7m7 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 30h26"}),p.createElement("path",{stroke:"#0ff",d:"M14 2h2m-3 1h3m-2 1h3m-3 1h3M9 6h1m5 0h2M8 7h3m4 0h2m-7 1h2m4 0h1m-5 1h1m0 1h1m0 1h1m6 5h1m-1 1h2m-1 1h2m-2 1h3m-2 1h3m-3 1h4m-3 1h3"}),p.createElement("path",{stroke:"#0f0",d:"M11 3h2m-3 1h4m-3 1h3m-2 1h3m-2 1h2m-1 1h2m-1 1h2m3 9h1m-1 1h1m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h1M3 26h3"}),p.createElement("path",{stroke:"#fff",d:"M27 4h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-3 1h2m-10 5h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1M1 20h7m1 0h1m1 0h1M1 21h1m8 0h1M1 22h1m1 0h7m-9 1h1m-1 1h1m-1 1h1m1 0h11M1 26h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"green",d:"M3 27h3"}))},Jx=function(t){return p.createElement("svg",tl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M9 1h3M7 2h2m3 0h2M6 3h1M5 4h1M5 5h1m3 0h1m1 0h1M5 6h1M5 7h1m3 0h1m1 0h1M1 8h5M0 9h1m5 0h1m-7 1h1m6 0h2m-9 1h1m12 0h1M0 12h1m12 0h1M0 13h14"}),p.createElement("path",{stroke:"#ff0",d:"M9 2h2M9 3h2M9 4h2m1 4h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 2h1m-1 1h3m-3 1h2m1 0h1M6 5h1m6 0h2M6 6h2m4 0h3M6 7h3m4 0h2M6 8h3m1 0h2M7 9h1m1 0h3M2 10h5m2 0h3m0 1h1M2 12h2m5 0h4"}),p.createElement("path",{stroke:"#0ff",d:"M7 3h2M8 4h1m3 3h1m0 1h2"}),p.createElement("path",{stroke:"#000",d:"M14 3h1m0 1h1m-6 1h1m4 0h1M9 6h1m1 0h1m3 0h1m-6 1h1m4 0h1m-1 1h1m-2 1h1m-3 1h3M4 11h8m2 0h1m-1 1h1m-1 1h1M1 14h13"}),p.createElement("path",{stroke:"#0f0",d:"M6 4h2M7 5h2M8 6h1m3 3h1M2 11h1"}),p.createElement("path",{stroke:"#fff",d:"M13 4h1m-2 1h1M9 8h1M1 9h5m2 0h1m-8 1h1m-1 1h1m-1 1h1m2 0h5"}),p.createElement("path",{stroke:"green",d:"M3 11h1"}))},Zx={"32x32_4":Yx,"16x16_4":Jx},Xx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Gx(t,Vx),i=Zx[r];return p.createElement(i,o)},qx=["variant"];function ew(e,t){if(e==null)return{};var n=tw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}var nw=function(t){return p.createElement("svg",nl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),p.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),p.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),p.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),p.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),p.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),p.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},rw=function(t){return p.createElement("svg",nl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),p.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),p.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),p.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),p.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},ow={"32x32_4":nw,"16x16_4":rw},iw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ew(t,qx),i=ow[r];return p.createElement(i,o)};function lw(){const[e,t]=y.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=i=>{t({...e,[i]:{...e[i],open:!e[i].open,minimized:!1}})},r=i=>{t({...e,[i]:{...e[i],minimized:!e[i].minimized}})},o=i=>{const l=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[i]:{...e[i],zIndex:l+1}})};return h.jsxs(h.Fragment,{children:[h.jsx(jl,{}),h.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${ax})`},children:[h.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(Ud,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(fx,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),h.jsxs(Ye,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(iw,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&h.jsxs(zt,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[h.jsxs(et,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"Welcome to DanielleOS"}),h.jsx("div",{children:h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})})]}),h.jsx(qe,{children:h.jsxs("div",{className:"text-center p-6",children:[h.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),h.jsx("p",{className:"text-lg mb-3",children:"Aspiring Software Engineer"}),h.jsx("p",{className:"italic mb-8",children:"Full-Time Student, Nostalgia Fetishist, and Research Assistant"}),h.jsx(Ye,{to:"/blog",children:h.jsx(W,{children:"Read More"})})]})})]}),e.about.open&&!e.about.minimized&&h.jsxs(zt,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"About Me"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),h.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),h.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[h.jsx(W,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),h.jsx(W,{size:"sm",style:{fontSize:"12px"},children:"React"}),h.jsx(W,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),h.jsx(W,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),h.jsx(W,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(W,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&h.jsxs(zt,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"My Projects"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Computational Model of Yapese Navigation"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:zd})})]}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Architechural Optimizations for DP-SGD"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:Fd})})]})]}),h.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(W,{children:"View All Projects →"})})})]})]}),h.jsx(vd,{style:{position:"fixed",bottom:0,top:"auto"},children:h.jsxs(Zi,{style:{justifyContent:"space-between"},children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(W,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([i,{open:l}])=>l&&h.jsx(W,{active:!e[i].minimized,onClick:()=>{e[i].minimized?(r(i),o(i)):r(i)},style:{fontSize:"12px",marginRight:"4px"},children:i==="welcome"?"Welcome":i==="about"?"About Me":i==="projects"?"My Projects":"Connect With Me"},i))]}),h.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})]})}const aw=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,sw="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",uw=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,hw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,cw=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,mw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,dw=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,xh=C(zt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,Ur=C.span`
  color: #4b00d9;
  font-weight: bold;
`,Tt=C.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,fw=()=>h.jsxs(h.Fragment,{children:[h.jsx(jl,{}),h.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${aw})`},children:[h.jsx("div",{className:"absolute top-24 left-4",children:h.jsx("img",{src:sw,alt:"PMM"})}),h.jsx("div",{className:"absolute mid top-1/2 left-10",children:h.jsx("img",{src:uw,alt:"PMM"})}),h.jsxs("div",{className:"w-full max-w-4xl",children:[h.jsxs(xh,{className:"w-full mb-4",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#ABOUT ME"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[h.jsx("div",{className:"col-span-1",children:h.jsxs(Tt,{children:[h.jsx("img",{src:hw,alt:"Character avatar",className:"w-full"}),h.jsx("img",{src:cw,alt:"Character avatar",className:"w-full mt-2"}),h.jsx("img",{src:mw,alt:"Character avatar",className:"w-full mt-2"})]})}),h.jsxs("div",{className:"col-span-3 grid gap-4",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Tt,{children:[h.jsx(Ur,{children:"NAME:"})," Danielle"]}),h.jsxs(Tt,{children:[h.jsx(Ur,{children:"AGE:"})," 20"]}),h.jsxs(Tt,{children:[h.jsx(Ur,{children:"LOCATION:"})," USA"]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Tt,{children:[h.jsx(Ur,{children:"MBTI:"})," INFJ"]}),h.jsxs(Tt,{className:"col-span-2",children:[h.jsx(Ur,{children:"ASTRO:"})," ♋♏♏"]})]}),h.jsxs(Tt,{children:[h.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),h.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),h.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub Profile ",h.jsx("a",{href:"https://github.com/DanChigo",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),h.jsxs(xh,{className:"w-full",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#INTERESTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs(Tt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),h.jsx("li",{children:"Everything Everywhere All at Once"}),h.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),h.jsxs(Tt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Coding"}),h.jsx("li",{children:"Writing"}),h.jsx("li",{children:"Reading"})]})]})]})})]})]}),h.jsx("div",{className:"absolute bottom-4 right-4",children:h.jsx("img",{src:dw,alt:"strawberry"})})]})]}),wh=C(zt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,pw=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  cursor: pointer;
  width: 75px;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active .icon-image {
    transform: scale(0.95);
  }
`,gw=C.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`,vw=C.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`,yw=()=>{var l;const[e,t]=y.useState(null),[n,r]=y.useState(!0),o=[{id:"Project oCEANIC",title:"Project oceanic: Computing Environmental Adaptation and Navigation ​in Island Communities",description:"A full-stack website that gives users access to a agent based model of Yapese Navigation.",image:zd,link:"https://project-oceanic.vercel.app/",technologies:["React","Node.js","Flask","Python","MERRA-2","ARCGIS"]},{id:"DP-SGD Optimization",title:"GPU Architectural Optimizations for Differentially Private Stochastic Gradient Descent ",description:"A machine learning project focused on balancing privacy with performance.",image:Fd,link:"https://purdue0-my.sharepoint.com/:p:/g/personal/dejiogu_purdue_edu/EWnCmbBHivtJs5_L3IGI9VQBsLatzMohEcjs23jJ7kvC_g?e=e5vzAJ",technologies:["PyTorch","Accel-Sim","C++"]},{id:"Stock Tracker",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","Firebase"]},{id:"MiniScala Compiler",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],i={"Project oCEANIC":h.jsx(Rx,{variant:"32x32_4"}),"DP-SGD Optimization":h.jsx(wx,{variant:"32x32_4"}),"Stock Tracker":h.jsx(Hx,{variant:"32x32_4"}),"MiniScala Compiler":h.jsx(Lx,{variant:"32x32_4"}),project5:h.jsx(Xx,{variant:"32x32_4"}),project6:h.jsx(Ud,{variant:"32x32_4"})};return h.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[h.jsx(jl,{})," ",h.jsxs(vw,{children:[h.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>h.jsxs(pw,{onClick:()=>t(a.id),children:[h.jsx("div",{children:i[a.id]}),h.jsx(gw,{children:a.id})]},a.id))]}),n&&h.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:h.jsxs(wh,{children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#PROJECTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},onClick:()=>r(!1),children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{className:"bg-white p-4",children:[h.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),h.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsxs(wh,{className:"w-4/5 max-w-4xl",children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:a.title}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},onClick:()=>t(null),children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-white p-4",children:h.jsxs("div",{className:"flex flex-col",children:[h.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),h.jsx("p",{className:"mb-4",children:a.description}),h.jsxs("div",{className:"mb-4",children:[h.jsx("strong",{children:"Technologies:"}),h.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>h.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),h.jsxs("div",{className:"flex justify-end",children:[h.jsx(W,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),h.jsx(W,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),h.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[h.jsx(W,{className:"mr-3",children:h.jsxs("span",{className:"flex items-center text-sm",children:[h.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),h.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&h.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[h.jsx("img",{src:i[e],alt:"Running",className:"w-4 h-4 mr-1"}),(l=o.find(a=>a.id===e))==null?void 0:l.title]})]})]})},xw=""+new URL("lep-DPuAEVX5.png",import.meta.url).href,ha=C(zt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
`,ww=C.div`
  background-color: #c0c0c0;
  border-bottom: 1px solid #7b7b7b;
  padding: 2px 0;
`,kw=C.div`
  background-color: #f0f0f0;
  border: 1px inset #7b7b7b;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d0d0d0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`,bw=()=>{const[e,t]=y.useState(null),[n,r]=y.useState(!1),[o,i]=y.useState(!0),[l,a]=y.useState(!0),[s,u]=y.useState(!0),[g,c]=y.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});y.useEffect(()=>{const x=()=>{const A=window.innerWidth,M=window.innerHeight;c({width:A,height:M}),r(A<768),A<768?(u(!1),e||(a(!0),i(!0))):(i(!0),a(!0),u(!0))};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[e]);const v=[{title:"Best Foot Forward",content:`
      Danielle Ejiogu is Computer Science undergraduate at Purdue University.  

We spent more time than I thought we would staring at a foot on our first workday in Hawaii, watching a ti leaf go round and round Torri Law’s index toe as she showed how to make one of the lei’s we’d received the day prior. This demonstration was part of her research on the raw materials essential to Remathau seafaring and daily life: the coconut husk for rope, the tree species best suited for boat making, the kukui nut as a light source and timer, and finally, the versatile ti leaf. Torri, native of the island of Kauai and graduate student in the University of Hawaii at Hilo's Heritage Management program, spoke at a million miles a minute and had hair like a waterfall. She was one of three graduate students guiding us in data validation for our model of traditional Oceanian seafaring.   

[Picture 1: Insert example lei photo] 

[Picture 2: Insert photo of us around Torri]  

Torri’s presentation exemplified what we’d experience at Hilo: a small group of researchers and undergraduates, putting their best foot forward to relay their research to outsiders. Earlier, Shania Tamagyongfal and Jeremy Uowolo—from the islands of Yap and Fais respectively—presented an alternative conceptualization of sawei as more of a reciprocal thaaq (Yapese for relationship) than an economic and hierarchical structure. Although the actual voyaging halted when the islands fell under the dominion of Imperial Japan, Remathau retained their names and therefore their kinship networks, allowing for sawei’s persistence.  

[Figure 3: Insert Image from Tamagyongfal interaction spheres] 

The learning continued through lunch. Bethany Correia, an anthropology undergraduate raised in Hilo, recounted working on a showcase of traditional Hawaiian seafaring culture. She and Torri traded stories about cuisine at home and the pressures of a neocolonial society. Bethany’s white boss rejected a relatives' family fishing net, casting it as “inauthentic” due to its synthetic fibers. In trying to “help” the western gatekeepers had sidelined actual indigenous ways of life that didn't fit their own antiqued views.   

While much of the academic literature portrays navigation as a dead tradition, discussions with titled navigators Tom Raffipiy and Larry Raigetal showed that Remathau navigation is a living practice. A tradition thought to be long gone still attracts many disciples. Tom and Larry had similar origins as navigators, abandoning the western ways of life for the open seas their ancestors had traversed. In our conversations, we got a slice of the minds of men who carry an entire culture on their backs, committing their lives to studying and teaching navigation in schools across Oceania. 

I marveled at the space we were in. For so long, academia has castigated systems of knowledge from sources outside the sphere of power (read: white, rich, western). Now, we are part of a new trend that diverges from that past. It was the first time in my college career that I had been in a room where knowledge from Indigenous sources was not only respected but prioritized. We learned about century-old sea lanes, the importance of a lunar calendar over the dominant Gregorian one, and the best protocols and times for voyages.   

Despite all my technical notes from this day, I feel most compelled to write about the faces in the room. If we were to believe the prevailing academic narrative on the mainland, we’d be led to believe that these people and their ways of life are dead. This endures not for its correctness, but for its convenience: how easy it is to believe that those that have been exploited and harmed by your way of life are no longer in existence. To allow your guilt to die with them. But they live, and you live, and we must work together in paving a future that doesn’t follow the currents of our past. Our communion with the Hilo researchers is imperative to challenging the dominant narratives that pervade mainstream academia. Their work and their very existence serve as a powerful testament to the resilience and continuity of indigenous knowledge systems, and reminds us all that the way to a better future starts with putting your best foot forward.  `,date:"2023-10-05"},{title:"Sixth Post",content:"This is the content of the sixth post.",date:"2023-10-06"},{title:"Seventh Post",content:"This is the content of the seventh post.",date:"2023-10-07"},{title:"Eighth Post",content:"This is the content of the eighth post.",date:"2023-10-08"},{title:"First Post",content:"This is the content of the first post.",date:"2023-10-01"},{title:"Second Post",content:"This is the content of the second post.",date:"2023-10-02"},{title:"Third Post",content:"This is the content of the third post.",date:"2023-10-03"},{title:"Fourth Post",content:"This is the content of the fourth post.",date:"2023-10-04"}],w=["File","Edit","View","Help"],k=()=>i(!o),b=()=>a(!l),E=()=>u(!s),d=()=>n?{top:"80px",left:"10px",width:g.width>350?"250px":"calc(100% - 20px)",zIndex:l?1:2}:{top:"150px",left:"50px",width:"250px",zIndex:1},m=()=>n?{top:o?"350px":"80px",left:"10px",width:"calc(100% - 20px)",height:"auto",zIndex:o?1:2}:{top:"100px",left:"400px",width:"600px",zIndex:1},f=()=>n?{bottom:"10px",right:"10px",width:"calc(100% - 20px)",zIndex:1}:{top:"150px",right:"50px",width:"200px",zIndex:1};return h.jsxs(h.Fragment,{children:[h.jsx(jl,{}),h.jsxs("div",{className:"min-h-screen w-full overflow-hidden bg-cover bg-center h-screen relative",style:{backgroundImage:`url(${xw})`},children:[h.jsx("div",{className:"absolute inset-0 bg-black opacity-20 z-0"}),n&&h.jsxs("div",{className:"fixed top-16 left-0 right-0 z-10 flex justify-around bg-gray-800 bg-opacity-70 p-2",children:[h.jsx(W,{onClick:k,className:"flex-1 mx-1",children:o?"Hide Entries":"Show Entries"}),h.jsx(W,{onClick:b,className:"flex-1 mx-1",children:l?"Hide Blog":"Show Blog"}),h.jsx(W,{onClick:E,className:"flex-1 mx-1",children:s?"Hide Info":"Show Info"})]}),o&&h.jsxs(ha,{className:"absolute",style:d(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Entries"}),h.jsx(W,{style:{width:"25px",height:"25px"},onClick:k,children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]}),h.jsx(qe,{children:h.jsx(Co,{className:"w-full h-[260px] bg-gray-300 p-2",children:h.jsx(xd,{style:{width:"100%"},children:v.map((x,A)=>h.jsxs("div",{className:"mb-0",children:[h.jsx(yd,{onClick:()=>{t(x),n&&(i(!1),a(!0))},style:{width:"100%",padding:"8px 2px",backgroundColor:e===x?"#c3c7cb":"#d3d3d3",borderRadius:0,boxShadow:"none"},children:h.jsxs("div",{className:"flex flex-row w-full",children:[h.jsx("div",{className:"text-center text-md font-bold",children:x.title}),h.jsx("div",{className:"text-center",children:h.jsx("span",{className:"text-[10px] text-blue-700",children:x.date})})]})}),A<v.length-1&&h.jsx(j1,{style:{margin:"2px 0"}})]},A))})})})]}),l&&h.jsxs(ha,{className:"absolute",style:m(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Blog"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(ww,{children:h.jsx("div",{className:"flex overflow-x-auto",children:w.map((x,A)=>h.jsx(W,{variant:"menu",className:"flex-shrink-0 hover:bg-blue-200 transition-colors",style:{fontSize:n?"12px":"15px",minWidth:n?"40px":"50px",height:"25px",textAlign:"left"},children:h.jsxs("span",{children:[h.jsx("span",{style:{textDecoration:"underline"},children:x[0]}),x.slice(1)]})},A))})}),h.jsx(qe,{className:"flex justify-center items-center",children:h.jsx(kw,{children:h.jsx("div",{className:"h-[300px] md:h-[500px] w-full p-0 relative z-10",children:e?h.jsxs("div",{className:"bg-blue-100 p-4 rounded w-[70%] mx-auto mt-8 border border-gray-400 shadow-md",children:[h.jsx("h2",{className:"text-xl font-bold mb-2",children:e.title}),h.jsx("p",{className:"text-sm mb-4",children:e.date}),h.jsxs("p",{children:[e.content,"."]})]}):h.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[h.jsx("div",{className:"w-16 h-16 mb-4 bg-gray-300 border border-gray-400 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-gray-600 text-2xl",children:"?"})}),n&&!o?h.jsx(W,{onClick:k,className:"mb-4",children:"Show Entries"}):h.jsx("p",{className:"text-gray-700",children:"Select a post from the entries list"})]})})})})]}),s&&h.jsxs(ha,{className:"absolute",style:f(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Blog"}),h.jsx(W,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]}),h.jsx(qe,{className:"p-2",children:h.jsx(Co,{className:"h-[400px] bg-gray-300",children:h.jsxs("div",{className:"p-3",children:[h.jsx("h3",{className:"font-bold mb-2 text-sm",children:"Blog Status"}),h.jsxs("div",{className:"mb-4",children:[h.jsx("p",{className:"text-xs mb-1",children:"Posts: 8/20"}),h.jsx("div",{className:"w-full bg-gray-200 rounded h-4 border border-gray-400",children:h.jsx("div",{className:"bg-blue-500 h-full rounded",style:{width:"40%"}})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("p",{className:"text-xs mb-1",children:"Views: 1,234"}),h.jsx("div",{className:"w-full bg-gray-200 rounded h-4 border border-gray-400",children:h.jsx("div",{className:"bg-green-500 h-full rounded",style:{width:"60%"}})})]}),h.jsx("h3",{className:"font-bold mb-2 text-sm",children:"Recent Activity"}),h.jsxs("div",{className:"border border-gray-400 bg-white p-2 text-xs",children:[h.jsx("p",{className:"mb-1",children:"• New post added (2 days ago)"}),h.jsx("p",{className:"mb-1",children:"• Comment received (5 days ago)"}),h.jsx("p",{children:"• Blog redesigned (1 week ago)"})]})]})})})]})]})]})};var Aw={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Mw=Aw;const Ew=kh(Mw),Sw=()=>h.jsx("div",{style:{padding:"50px"},children:h.jsxs(zt,{style:{width:"350px"},children:[h.jsx(et,{children:"ScrollView Test"}),h.jsx(qe,{children:h.jsx(Co,{style:{width:"300px",height:"200px"},children:h.jsxs("div",{children:[h.jsx("p",{style:{width:400},children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"})]})})})]})}),Cw=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,$w=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,jw=xv`
  ${vg}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Cw}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${$w}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  
  ::-webkit-scrollbar-track {
    background-image: linear-gradient(
      45deg,
      ${({theme:e})=>e.material} 25%,
      transparent 25%,
      transparent 75%,
      ${({theme:e})=>e.material} 75%
    ),
    linear-gradient(
      45deg,
      ${({theme:e})=>e.material} 25%,
      transparent 25%,
      transparent 75%,
      ${({theme:e})=>e.material} 75%
    );
    background-color: ${({theme:e})=>e.borderLightest};
    background-size: 4px 4px;
    background-position: 0 0, 2px 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    box-sizing: border-box;
    display: inline-block;
    background: ${({theme:e})=>e.material};
    color: ${({theme:e})=>e.materialText};
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderLight};
    border-top-color: ${({theme:e})=>e.borderLight};
    border-right-color: ${({theme:e})=>e.borderDarkest};
    border-bottom-color: ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
                inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>e.material};
  }
  
  ::-webkit-scrollbar-button {
    box-sizing: border-box;
    display: inline-block;
    background: ${({theme:e})=>e.material};
    color: ${({theme:e})=>e.materialText};
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderLight};
    border-top-color: ${({theme:e})=>e.borderLight};
    border-right-color: ${({theme:e})=>e.borderDarkest};
    border-bottom-color: ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
                inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderDark},
                inset -1px -1px 0 1px ${({theme:e})=>e.borderLightest};
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  /* Create SVG triangle for scrollbar buttons */
  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(90 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(270 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(180 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='26' width='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(0 13 13)'%3E%3Cpolygon fill='%23000' points='6,10 20,10 13,17'/%3E%3C/g%3E%3C/svg%3E");
  }
`;function Nw(){return h.jsx("div",{children:h.jsxs(gv,{theme:Ew,children:[h.jsx(jw,{}),h.jsx(dg,{children:h.jsx("div",{className:"min-h-screen",children:h.jsx("main",{children:h.jsxs(lg,{children:[h.jsx(Jn,{path:"/",element:h.jsx(lw,{})}),h.jsx(Jn,{path:"/about",element:h.jsx(fw,{})}),h.jsx(Jn,{path:"/projects",element:h.jsx(yw,{})}),h.jsx(Jn,{path:"/blog",element:h.jsx(bw,{})}),h.jsx(Jn,{path:"/test",element:h.jsx(Sw,{})})]})})})})]})})}Om(document.getElementById("root")).render(h.jsx(y.StrictMode,{children:h.jsx(Nw,{})}));
