function Ud(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function wh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kh={exports:{}},ri={},Ah={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Wd=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Zd=Symbol.for("react.memo"),Xd=Symbol.for("react.lazy"),I1=Symbol.iterator;function qd(e){return e===null||typeof e!="object"?null:(e=I1&&e[I1]||e["@@iterator"],typeof e=="function"?e:null)}var Mh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bh=Object.assign,Eh={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Eh,this.updater=n||Mh}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sh(){}Sh.prototype=jr.prototype;function ks(e,t,n){this.props=e,this.context=t,this.refs=Eh,this.updater=n||Mh}var As=ks.prototype=new Sh;As.constructor=ks;bh(As,jr.prototype);As.isPureReactComponent=!0;var R1=Array.isArray,Ch=Object.prototype.hasOwnProperty,Ms={current:null},$h={key:!0,ref:!0,__self:!0,__source:!0};function jh(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Ch.call(t,r)&&!$h.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:jo,type:e,key:l,ref:i,props:o,_owner:Ms.current}}function e0(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var P1=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function ol(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case jo:case Qd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ri(i,0):r,R1(o)?(n="",e!=null&&(n=e.replace(P1,"$&/")+"/"),ol(o,t,n,"",function(u){return u})):o!=null&&(bs(o)&&(o=e0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(P1,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",R1(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ri(l,a);i+=ol(l,t,n,s,o)}else if(s=qd(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ri(l,a++),i+=ol(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _o(e,t,n){if(e==null)return e;var r=[],o=0;return ol(e,r,"","",function(l){return t.call(n,l,o++)}),r}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ll={transition:null},r0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Ms};function Nh(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=jr;V.Fragment=Wd;V.Profiler=Vd;V.PureComponent=ks;V.StrictMode=Hd;V.Suspense=Jd;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;V.act=Nh;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bh({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ch.call(t,s)&&!$h.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:jo,type:e.type,key:o,ref:l,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Kd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gd,_context:e},e.Consumer=e};V.createElement=jh;V.createFactory=function(e){var t=jh.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Yd,render:e}};V.isValidElement=bs;V.lazy=function(e){return{$$typeof:Xd,_payload:{_status:-1,_result:e},_init:n0}};V.memo=function(e,t){return{$$typeof:Zd,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ll.transition;ll.transition={};try{e()}finally{ll.transition=t}};V.unstable_act=Nh;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";Ah.exports=V;var y=Ah.exports;const p=wh(y),o0=Ud({__proto__:null,default:p},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=y,i0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,u0=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function Ih(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)s0.call(t,r)&&!h0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:i0,type:e,key:l,ref:i,props:o,_owner:u0.current}}ri.Fragment=a0;ri.jsx=Ih;ri.jsxs=Ih;kh.exports=ri;var h=kh.exports,Rh={exports:{}},nt={},Ph={exports:{}},Th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,R){var O=$.length;$.push(R);e:for(;0<O;){var G=O-1>>>1,Q=$[G];if(0<o(Q,R))$[G]=R,$[O]=Q,O=G;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var R=$[0],O=$.pop();if(O!==R){$[0]=O;e:for(var G=0,Q=$.length,D=Q>>>1;G<D;){var L=2*(G+1)-1,K=$[L],B=L+1,W=$[B];if(0>o(K,O))B<Q&&0>o(W,K)?($[G]=W,$[B]=O,G=B):($[G]=K,$[L]=O,G=L);else if(B<Q&&0>o(W,O))$[G]=W,$[B]=O,G=B;else break e}}return R}function o($,R){var O=$.sortIndex-R.sortIndex;return O!==0?O:$.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],g=1,c=null,v=3,x=!1,k=!1,A=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=$)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function w($){if(A=!1,f($),!k)if(n(s)!==null)k=!0,we(M);else{var R=n(u);R!==null&&ke(w,R.startTime-$)}}function M($,R){k=!1,A&&(A=!1,d(I),I=-1),x=!0;var O=v;try{for(f(R),c=n(s);c!==null&&(!(c.expirationTime>R)||$&&!q());){var G=c.callback;if(typeof G=="function"){c.callback=null,v=c.priorityLevel;var Q=G(c.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(s)&&r(s),f(R)}else r(s);c=n(s)}if(c!==null)var D=!0;else{var L=n(u);L!==null&&ke(w,L.startTime-R),D=!1}return D}finally{c=null,v=O,x=!1}}var b=!1,S=null,I=-1,z=5,_=-1;function q(){return!(e.unstable_now()-_<z)}function ee(){if(S!==null){var $=e.unstable_now();_=$;var R=!0;try{R=S(!0,$)}finally{R?me():(b=!1,S=null)}}else b=!1}var me;if(typeof m=="function")me=function(){m(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=ee,me=function(){se.postMessage(null)}}else me=function(){E(ee,0)};function we($){S=$,b||(b=!0,me())}function ke($,R){I=E(function(){$(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,we(M))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var R=3;break;default:R=v}var O=v;v=R;try{return $()}finally{v=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,R){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=v;v=$;try{return R()}finally{v=O}},e.unstable_scheduleCallback=function($,R,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,$={id:g++,callback:R,priorityLevel:$,startTime:O,expirationTime:Q,sortIndex:-1},O>G?($.sortIndex=O,t(u,$),n(s)===null&&$===n(u)&&(A?(d(I),I=-1):A=!0,ke(w,O-G))):($.sortIndex=Q,t(s,$),k||x||(k=!0,we(M))),$},e.unstable_shouldYield=q,e.unstable_wrapCallback=function($){var R=v;return function(){var O=v;v=R;try{return $.apply(this,arguments)}finally{v=O}}}})(Th);Ph.exports=Th;var c0=Ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=y,tt=c0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oh=new Set,oo={};function Fn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(oo[e]=t,e=0;e<t.length;e++)Oh.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T1={},O1={};function f0(e){return ha.call(O1,e)?!0:ha.call(T1,e)?!1:d0.test(e)?O1[e]=!0:(T1[e]=!0,!1)}function p0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||p0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Es=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Es,Ss);Te[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Es,Ss);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Es,Ss);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,o,r)&&(n=null),r||o===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),Ns=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Lh=Symbol.for("react.offscreen"),_1=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=_1&&e[_1]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Pi;function Qr(e){if(Pi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Ti=!1;function Oi(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function v0(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Zn:return"Portal";case ca:return"Profiler";case $s:return"StrictMode";case ma:return"Suspense";case da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dh:return(e.displayName||"Context")+".Consumer";case _h:return(e._context.displayName||"Context")+".Provider";case js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ns:return t=e.displayName||null,t!==null?t:fa(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return fa(e(t))}catch{}}return null}function y0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(t);case 8:return t===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x0(e){var t=Bh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=x0(e))}function zh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function D1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fh(e,t){t=t.checked,t!=null&&Cs(e,"checked",t,!1)}function ga(e,t){Fh(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?va(e,t.type,n):t.hasOwnProperty("defaultValue")&&va(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function L1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function va(e,t,n){(t!=="number"||kl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function B1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Wr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Uh(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function z1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,Wh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Vh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var k0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,t){if(t){if(k0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,mr=null,dr=null;function F1(e){if(e=Ro(e)){if(typeof Ma!="function")throw Error(j(280));var t=e.stateNode;t&&(t=si(t),Ma(e.stateNode,e.type,t))}}function Gh(e){mr?dr?dr.push(e):dr=[e]:mr=e}function Kh(){if(mr){var e=mr,t=dr;if(dr=mr=null,F1(e),t)for(e=0;e<t.length;e++)F1(t[e])}}function Yh(e,t){return e(t)}function Jh(){}var _i=!1;function Zh(e,t,n){if(_i)return e(t,n);_i=!0;try{return Yh(e,t,n)}finally{_i=!1,(mr!==null||dr!==null)&&(Jh(),Kh())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ba=!1;if(Ft)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{ba=!1}function A0(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Yr=!1,Al=null,Ml=!1,Ea=null,M0={onError:function(e){Yr=!0,Al=e}};function b0(e,t,n,r,o,l,i,a,s){Yr=!1,Al=null,A0.apply(M0,arguments)}function E0(e,t,n,r,o,l,i,a,s){if(b0.apply(this,arguments),Yr){if(Yr){var u=Al;Yr=!1,Al=null}else throw Error(j(198));Ml||(Ml=!0,Ea=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U1(e){if(Un(e)!==e)throw Error(j(188))}function S0(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return U1(o),e;if(l===r)return U1(o),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function qh(e){return e=S0(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ec(e);if(t!==null)return t;e=e.sibling}return null}var tc=tt.unstable_scheduleCallback,Q1=tt.unstable_cancelCallback,C0=tt.unstable_shouldYield,$0=tt.unstable_requestPaint,ge=tt.unstable_now,j0=tt.unstable_getCurrentPriorityLevel,Rs=tt.unstable_ImmediatePriority,nc=tt.unstable_UserBlockingPriority,bl=tt.unstable_NormalPriority,N0=tt.unstable_LowPriority,rc=tt.unstable_IdlePriority,oi=null,Ct=null;function I0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:T0,R0=Math.log,P0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(R0(e)/P0|0)|0}var zo=64,Fo=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Hr(a):(l&=i,l!==0&&(r=Hr(l)))}else i=n&~o,i!==0?r=Hr(i):l!==0&&(r=Hr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function O0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-gt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=O0(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oc(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function D0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,Ts,ac,sc,uc,Ca=!1,Uo=[],nn=null,rn=null,on=null,ao=new Map,so=new Map,Zt=[],L0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W1(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function _r(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Ro(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function B0(e,t,n,r,o){switch(t){case"focusin":return nn=_r(nn,e,t,n,r,o),!0;case"dragenter":return rn=_r(rn,e,t,n,r,o),!0;case"mouseover":return on=_r(on,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ao.set(l,_r(ao.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,so.set(l,_r(so.get(l)||null,e,t,n,r,o)),!0}return!1}function hc(e){var t=En(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Xh(n),t!==null){e.blockedOn=t,uc(e.priority,function(){ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return t=Ro(n),t!==null&&Ts(t),e.blockedOn=n,!1;t.shift()}return!0}function H1(e,t,n){il(e)&&n.delete(t)}function z0(){Ca=!1,nn!==null&&il(nn)&&(nn=null),rn!==null&&il(rn)&&(rn=null),on!==null&&il(on)&&(on=null),ao.forEach(H1),so.forEach(H1)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ca||(Ca=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,z0)))}function uo(e){function t(o){return Dr(o,e)}if(0<Uo.length){Dr(Uo[0],e);for(var n=1;n<Uo.length;n++){var r=Uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Dr(nn,e),rn!==null&&Dr(rn,e),on!==null&&Dr(on,e),ao.forEach(t),so.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)hc(n),n.blockedOn===null&&Zt.shift()}var fr=Ht.ReactCurrentBatchConfig,Sl=!0;function F0(e,t,n,r){var o=te,l=fr.transition;fr.transition=null;try{te=1,Os(e,t,n,r)}finally{te=o,fr.transition=l}}function U0(e,t,n,r){var o=te,l=fr.transition;fr.transition=null;try{te=4,Os(e,t,n,r)}finally{te=o,fr.transition=l}}function Os(e,t,n,r){if(Sl){var o=$a(e,t,n,r);if(o===null)Gi(e,t,r,Cl,n),W1(e,r);else if(B0(o,e,t,n,r))r.stopPropagation();else if(W1(e,r),t&4&&-1<L0.indexOf(e)){for(;o!==null;){var l=Ro(o);if(l!==null&&ic(l),l=$a(e,t,n,r),l===null&&Gi(e,t,r,Cl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Gi(e,t,r,null,n)}}var Cl=null;function $a(e,t,n,r){if(Cl=null,e=Is(r),e=En(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cl=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Rs:return 1;case nc:return 4;case bl:case N0:return 16;case rc:return 536870912;default:return 16}default:return 16}}var qt=null,_s=null,al=null;function mc(){if(al)return al;var e,t=_s,n=t.length,r,o="value"in qt?qt.value:qt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return al=o.slice(e,1<r?1-r:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function V1(){return!1}function rt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qo:V1,this.isPropagationStopped=V1,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=rt(Nr),Io=ce({},Nr,{view:0,detail:0}),Q0=rt(Io),Li,Bi,Lr,li=ce({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Li=e.screenX-Lr.screenX,Bi=e.screenY-Lr.screenY):Bi=Li=0,Lr=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),G1=rt(li),W0=ce({},li,{dataTransfer:0}),H0=rt(W0),V0=ce({},Io,{relatedTarget:0}),zi=rt(V0),G0=ce({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=rt(G0),Y0=ce({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=rt(Y0),Z0=ce({},Nr,{data:0}),K1=rt(Z0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function Ls(){return tf}var nf=ce({},Io,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=rt(nf),of=ce({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Y1=rt(of),lf=ce({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),af=rt(lf),sf=ce({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=rt(sf),hf=ce({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=rt(hf),mf=[9,13,27,32],Bs=Ft&&"CompositionEvent"in window,Jr=null;Ft&&"documentMode"in document&&(Jr=document.documentMode);var df=Ft&&"TextEvent"in window&&!Jr,dc=Ft&&(!Bs||Jr&&8<Jr&&11>=Jr),J1=" ",Z1=!1;function fc(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function ff(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(Z1=!0,J1);case"textInput":return e=t.data,e===J1&&Z1?null:e;default:return null}}function pf(e,t){if(qn)return e==="compositionend"||!Bs&&fc(e,t)?(e=mc(),al=_s=qt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function gc(e,t,n,r){Gh(r),t=$l(t,"onChange"),0<t.length&&(n=new Ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,ho=null;function vf(e){Cc(e,0)}function ii(e){var t=nr(e);if(zh(t))return e}function yf(e,t){if(e==="change")return t}var vc=!1;if(Ft){var Fi;if(Ft){var Ui="oninput"in document;if(!Ui){var q1=document.createElement("div");q1.setAttribute("oninput","return;"),Ui=typeof q1.oninput=="function"}Fi=Ui}else Fi=!1;vc=Fi&&(!document.documentMode||9<document.documentMode)}function eu(){Zr&&(Zr.detachEvent("onpropertychange",yc),ho=Zr=null)}function yc(e){if(e.propertyName==="value"&&ii(ho)){var t=[];gc(t,ho,e,Is(e)),Zh(vf,t)}}function xf(e,t,n){e==="focusin"?(eu(),Zr=t,ho=n,Zr.attachEvent("onpropertychange",yc)):e==="focusout"&&eu()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(ho)}function kf(e,t){if(e==="click")return ii(t)}function Af(e,t){if(e==="input"||e==="change")return ii(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Mf;function co(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ha.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=kl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kl(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xc(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=nu(n,l);var i=nu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Ft&&"documentMode"in document&&11>=document.documentMode,er=null,ja=null,Xr=null,Na=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||er==null||er!==kl(r)||(r=er,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&co(Xr,r)||(Xr=r,r=$l(ja,"onSelect"),0<r.length&&(t=new Ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Qi={},kc={};Ft&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function ai(e){if(Qi[e])return Qi[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kc)return Qi[e]=t[n];return e}var Ac=ai("animationend"),Mc=ai("animationiteration"),bc=ai("animationstart"),Ec=ai("transitionend"),Sc=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Sc.set(e,t),Fn(t,[e])}for(var Wi=0;Wi<ou.length;Wi++){var Hi=ou[Wi],Sf=Hi.toLowerCase(),Cf=Hi[0].toUpperCase()+Hi.slice(1);yn(Sf,"on"+Cf)}yn(Ac,"onAnimationEnd");yn(Mc,"onAnimationIteration");yn(bc,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Ec,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E0(r,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;lu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;lu(o,a,u),l=s}}}if(Ml)throw e=Ea,Ml=!1,Ea=null,e}function re(e,t){var n=t[Oa];n===void 0&&(n=t[Oa]=new Set);var r=e+"__bubble";n.has(r)||($c(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),$c(n,e,r,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Ho]){e[Ho]=!0,Oh.forEach(function(n){n!=="selectionchange"&&($f.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,Vi("selectionchange",!1,t))}}function $c(e,t,n,r){switch(cc(t)){case 1:var o=F0;break;case 4:o=U0;break;default:o=Os}n=o.bind(null,t,n,e),o=void 0,!ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=En(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Zh(function(){var u=l,g=Is(n),c=[];e:{var v=Sc.get(e);if(v!==void 0){var x=Ds,k=e;switch(e){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":x=rf;break;case"focusin":k="focus",x=zi;break;case"focusout":k="blur",x=zi;break;case"beforeblur":case"afterblur":x=zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=G1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=af;break;case Ac:case Mc:case bc:x=K0;break;case Ec:x=uf;break;case"scroll":x=Q0;break;case"wheel":x=cf;break;case"copy":case"cut":case"paste":x=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Y1}var A=(t&4)!==0,E=!A&&e==="scroll",d=A?v!==null?v+"Capture":null:v;A=[];for(var m=u,f;m!==null;){f=m;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=io(m,d),w!=null&&A.push(fo(m,w,f)))),E)break;m=m.return}0<A.length&&(v=new x(v,k,null,n,g),c.push({event:v,listeners:A}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==Aa&&(k=n.relatedTarget||n.fromElement)&&(En(k)||k[Ut]))break e;if((x||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?En(k):null,k!==null&&(E=Un(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(A=G1,w="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Y1,w="onPointerLeave",d="onPointerEnter",m="pointer"),E=x==null?v:nr(x),f=k==null?v:nr(k),v=new A(w,m+"leave",x,n,g),v.target=E,v.relatedTarget=f,w=null,En(g)===u&&(A=new A(d,m+"enter",k,n,g),A.target=f,A.relatedTarget=E,w=A),E=w,x&&k)t:{for(A=x,d=k,m=0,f=A;f;f=Gn(f))m++;for(f=0,w=d;w;w=Gn(w))f++;for(;0<m-f;)A=Gn(A),m--;for(;0<f-m;)d=Gn(d),f--;for(;m--;){if(A===d||d!==null&&A===d.alternate)break t;A=Gn(A),d=Gn(d)}A=null}else A=null;x!==null&&iu(c,v,x,A,!1),k!==null&&E!==null&&iu(c,E,k,A,!0)}}e:{if(v=u?nr(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var M=yf;else if(X1(v))if(vc)M=Af;else{M=wf;var b=xf}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(M=kf);if(M&&(M=M(e,u))){gc(c,M,n,g);break e}b&&b(e,v,u),e==="focusout"&&(b=v._wrapperState)&&b.controlled&&v.type==="number"&&va(v,"number",v.value)}switch(b=u?nr(u):window,e){case"focusin":(X1(b)||b.contentEditable==="true")&&(er=b,ja=u,Xr=null);break;case"focusout":Xr=ja=er=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,ru(c,n,g);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":ru(c,n,g)}var S;if(Bs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qn?fc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(dc&&n.locale!=="ko"&&(qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&qn&&(S=mc()):(qt=g,_s="value"in qt?qt.value:qt.textContent,qn=!0)),b=$l(u,I),0<b.length&&(I=new K1(I,e,null,n,g),c.push({event:I,listeners:b}),S?I.data=S:(S=pc(n),S!==null&&(I.data=S)))),(S=df?ff(e,n):pf(e,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(g=new K1("onBeforeInput","beforeinput",null,n,g),c.push({event:g,listeners:u}),g.data=S))}Cc(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=io(e,n),l!=null&&r.unshift(fo(e,l,o)),l=io(e,t),l!=null&&r.push(fo(e,l,o))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=io(n,l),s!=null&&i.unshift(fo(n,s,a))):o||(s=io(n,l),s!=null&&i.push(fo(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Nf,"")}function Vo(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(j(425))}function jl(){}var Ia=null,Ra=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(Pf)}:Ta;function Pf(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);uo(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),St="__reactFiber$"+Ir,po="__reactProps$"+Ir,Ut="__reactContainer$"+Ir,Oa="__reactEvents$"+Ir,Tf="__reactListeners$"+Ir,Of="__reactHandles$"+Ir;function En(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[St])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[St]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function si(e){return e[po]||null}var _a=[],rr=-1;function xn(e){return{current:e}}function le(e){0>rr||(e.current=_a[rr],_a[rr]=null,rr--)}function ne(e,t){rr++,_a[rr]=e.current,e.current=t}var pn={},Le=xn(pn),He=xn(!1),Pn=pn;function yr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Nl(){le(He),le(Le)}function hu(e,t,n){if(Le.current!==pn)throw Error(j(168));ne(Le,t),ne(He,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,y0(e)||"Unknown",o));return ce({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=Le.current,ne(Le,e),ne(He,He.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=jc(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,le(He),le(Le),ne(Le,e)):le(He),ne(He,n)}var _t=null,ui=!1,Yi=!1;function Nc(e){_t===null?_t=[e]:_t.push(e)}function _f(e){ui=!0,Nc(e)}function wn(){if(!Yi&&_t!==null){Yi=!0;var e=0,t=te;try{var n=_t;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,ui=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),tc(Rs,wn),o}finally{te=t,Yi=!1}}return null}var or=[],lr=0,Rl=null,Pl=0,lt=[],it=0,Tn=null,Dt=1,Lt="";function Mn(e,t){or[lr++]=Pl,or[lr++]=Rl,Rl=e,Pl=t}function Ic(e,t,n){lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Tn,Tn=e;var r=Dt;e=Lt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-gt(t)+o|n<<o|r,Lt=l+e}else Dt=1<<l|n<<o|r,Lt=e}function Fs(e){e.return!==null&&(Mn(e,1),Ic(e,1,0))}function Us(e){for(;e===Rl;)Rl=or[--lr],or[lr]=null,Pl=or[--lr],or[lr]=null;for(;e===Tn;)Tn=lt[--it],lt[it]=null,Lt=lt[--it],lt[it]=null,Dt=lt[--it],lt[it]=null}var Xe=null,Ze=null,ae=!1,pt=null;function Rc(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(ae){var t=Ze;if(t){var n=t;if(!mu(e,t)){if(Da(e))throw Error(j(418));t=ln(n.nextSibling);var r=Xe;t&&mu(e,t)?Rc(r,n):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(Da(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Go(e){if(e!==Xe)return!1;if(!ae)return du(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Ze)){if(Da(e))throw Pc(),Error(j(418));for(;t;)Rc(e,t),t=ln(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?ln(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=Ze;e;)e=ln(e.nextSibling)}function xr(){Ze=Xe=null,ae=!1}function Qs(e){pt===null?pt=[e]:pt.push(e)}var Df=Ht.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function Tc(e){function t(d,m){if(e){var f=d.deletions;f===null?(d.deletions=[m],d.flags|=16):f.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function o(d,m){return d=hn(d,m),d.index=0,d.sibling=null,d}function l(d,m,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<m?(d.flags|=2,m):f):(d.flags|=2,m)):(d.flags|=1048576,m)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,m,f,w){return m===null||m.tag!==6?(m=na(f,d.mode,w),m.return=d,m):(m=o(m,f),m.return=d,m)}function s(d,m,f,w){var M=f.type;return M===Xn?g(d,m,f.props.children,w,f.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&fu(M)===m.type)?(w=o(m,f.props),w.ref=Br(d,m,f),w.return=d,w):(w=pl(f.type,f.key,f.props,null,d.mode,w),w.ref=Br(d,m,f),w.return=d,w)}function u(d,m,f,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=ra(f,d.mode,w),m.return=d,m):(m=o(m,f.children||[]),m.return=d,m)}function g(d,m,f,w,M){return m===null||m.tag!==7?(m=In(f,d.mode,w,M),m.return=d,m):(m=o(m,f),m.return=d,m)}function c(d,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=na(""+m,d.mode,f),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return f=pl(m.type,m.key,m.props,null,d.mode,f),f.ref=Br(d,null,m),f.return=d,f;case Zn:return m=ra(m,d.mode,f),m.return=d,m;case Yt:var w=m._init;return c(d,w(m._payload),f)}if(Wr(m)||Tr(m))return m=In(m,d.mode,f,null),m.return=d,m;Ko(d,m)}return null}function v(d,m,f,w){var M=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return M!==null?null:a(d,m,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Do:return f.key===M?s(d,m,f,w):null;case Zn:return f.key===M?u(d,m,f,w):null;case Yt:return M=f._init,v(d,m,M(f._payload),w)}if(Wr(f)||Tr(f))return M!==null?null:g(d,m,f,w,null);Ko(d,f)}return null}function x(d,m,f,w,M){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(m,d,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return d=d.get(w.key===null?f:w.key)||null,s(m,d,w,M);case Zn:return d=d.get(w.key===null?f:w.key)||null,u(m,d,w,M);case Yt:var b=w._init;return x(d,m,f,b(w._payload),M)}if(Wr(w)||Tr(w))return d=d.get(f)||null,g(m,d,w,M,null);Ko(m,w)}return null}function k(d,m,f,w){for(var M=null,b=null,S=m,I=m=0,z=null;S!==null&&I<f.length;I++){S.index>I?(z=S,S=null):z=S.sibling;var _=v(d,S,f[I],w);if(_===null){S===null&&(S=z);break}e&&S&&_.alternate===null&&t(d,S),m=l(_,m,I),b===null?M=_:b.sibling=_,b=_,S=z}if(I===f.length)return n(d,S),ae&&Mn(d,I),M;if(S===null){for(;I<f.length;I++)S=c(d,f[I],w),S!==null&&(m=l(S,m,I),b===null?M=S:b.sibling=S,b=S);return ae&&Mn(d,I),M}for(S=r(d,S);I<f.length;I++)z=x(S,d,I,f[I],w),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?I:z.key),m=l(z,m,I),b===null?M=z:b.sibling=z,b=z);return e&&S.forEach(function(q){return t(d,q)}),ae&&Mn(d,I),M}function A(d,m,f,w){var M=Tr(f);if(typeof M!="function")throw Error(j(150));if(f=M.call(f),f==null)throw Error(j(151));for(var b=M=null,S=m,I=m=0,z=null,_=f.next();S!==null&&!_.done;I++,_=f.next()){S.index>I?(z=S,S=null):z=S.sibling;var q=v(d,S,_.value,w);if(q===null){S===null&&(S=z);break}e&&S&&q.alternate===null&&t(d,S),m=l(q,m,I),b===null?M=q:b.sibling=q,b=q,S=z}if(_.done)return n(d,S),ae&&Mn(d,I),M;if(S===null){for(;!_.done;I++,_=f.next())_=c(d,_.value,w),_!==null&&(m=l(_,m,I),b===null?M=_:b.sibling=_,b=_);return ae&&Mn(d,I),M}for(S=r(d,S);!_.done;I++,_=f.next())_=x(S,d,I,_.value,w),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?I:_.key),m=l(_,m,I),b===null?M=_:b.sibling=_,b=_);return e&&S.forEach(function(ee){return t(d,ee)}),ae&&Mn(d,I),M}function E(d,m,f,w){if(typeof f=="object"&&f!==null&&f.type===Xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Do:e:{for(var M=f.key,b=m;b!==null;){if(b.key===M){if(M=f.type,M===Xn){if(b.tag===7){n(d,b.sibling),m=o(b,f.props.children),m.return=d,d=m;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&fu(M)===b.type){n(d,b.sibling),m=o(b,f.props),m.ref=Br(d,b,f),m.return=d,d=m;break e}n(d,b);break}else t(d,b);b=b.sibling}f.type===Xn?(m=In(f.props.children,d.mode,w,f.key),m.return=d,d=m):(w=pl(f.type,f.key,f.props,null,d.mode,w),w.ref=Br(d,m,f),w.return=d,d=w)}return i(d);case Zn:e:{for(b=f.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(d,m.sibling),m=o(m,f.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=ra(f,d.mode,w),m.return=d,d=m}return i(d);case Yt:return b=f._init,E(d,m,b(f._payload),w)}if(Wr(f))return k(d,m,f,w);if(Tr(f))return A(d,m,f,w);Ko(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(n(d,m.sibling),m=o(m,f),m.return=d,d=m):(n(d,m),m=na(f,d.mode,w),m.return=d,d=m),i(d)):n(d,m)}return E}var wr=Tc(!0),Oc=Tc(!1),Tl=xn(null),Ol=null,ir=null,Ws=null;function Hs(){Ws=ir=Ol=null}function Vs(e){var t=Tl.current;le(Tl),e._currentValue=t}function Ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Ol=e,Ws=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Ol===null)throw Error(j(308));ir=e,Ol.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Sn=null;function Gs(e){Sn===null?Sn=[e]:Sn.push(e)}function _c(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Gs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Qt(e,n)}return o=r.interleaved,o===null?(t.next=t,Gs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qt(e,n)}function ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _l(e,t,n,r){var o=e.updateQueue;Jt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(l!==null){var c=o.baseState;i=0,g=u=s=null,a=l;do{var v=a.lane,x=a.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,A=a;switch(v=t,x=n,A.tag){case 1:if(k=A.payload,typeof k=="function"){c=k.call(x,c,v);break e}c=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=A.payload,v=typeof k=="function"?k.call(x,c,v):k,v==null)break e;c=ce({},c,v);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=x,s=c):g=g.next=x,i|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(g===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);_n|=i,e.lanes=i,e.memoizedState=c}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Po={},$t=xn(Po),go=xn(Po),vo=xn(Po);function Cn(e){if(e===Po)throw Error(j(174));return e}function Ys(e,t){switch(ne(vo,t),ne(go,e),ne($t,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xa(t,e)}le($t),ne($t,t)}function kr(){le($t),le(go),le(vo)}function Lc(e){Cn(vo.current);var t=Cn($t.current),n=xa(t,e.type);t!==n&&(ne(go,e),ne($t,n))}function Js(e){go.current===e&&(le($t),le(go))}var ue=xn(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=[];function Zs(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var hl=Ht.ReactCurrentDispatcher,Zi=Ht.ReactCurrentBatchConfig,On=0,he=null,Me=null,Se=null,Ll=!1,qr=!1,yo=0,Lf=0;function Oe(){throw Error(j(321))}function Xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function qs(e,t,n,r,o,l){if(On=l,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Uf:Qf,e=n(r,o),qr){l=0;do{if(qr=!1,yo=0,25<=l)throw Error(j(301));l+=1,Se=Me=null,t.updateQueue=null,hl.current=Wf,e=n(r,o)}while(qr)}if(hl.current=Bl,t=Me!==null&&Me.next!==null,On=0,Se=Me=he=null,Ll=!1,t)throw Error(j(300));return e}function e1(){var e=yo!==0;return yo=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function ht(){if(Me===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,Me=e;else{if(e===null)throw Error(j(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function xo(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var g=u.lane;if((On&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,i=r):s=s.next=c,he.lanes|=g,_n|=g}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,wt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,he.lanes|=l,_n|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);wt(l,t.memoizedState)||(We=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Bc(){}function zc(e,t){var n=he,r=ht(),o=t(),l=!wt(r.memoizedState,o);if(l&&(r.memoizedState=o,We=!0),r=r.queue,t1(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,wo(9,Uc.bind(null,n,r,o,t),void 0,null),je===null)throw Error(j(349));On&30||Fc(n,t,o)}return o}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&Hc(e)}function Qc(e,t,n){return n(function(){Wc(t)&&Hc(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Hc(e){var t=Qt(e,1);t!==null&&vt(t,e,1,-1)}function vu(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,he,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vc(){return ht().memoizedState}function cl(e,t,n,r){var o=bt();he.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var o=ht();r=r===void 0?null:r;var l=void 0;if(Me!==null){var i=Me.memoizedState;if(l=i.destroy,r!==null&&Xs(r,i.deps)){o.memoizedState=wo(t,n,l,r);return}}he.flags|=e,o.memoizedState=wo(1|t,n,l,r)}function yu(e,t){return cl(8390656,8,e,t)}function t1(e,t){return hi(2048,8,e,t)}function Gc(e,t){return hi(4,2,e,t)}function Kc(e,t){return hi(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,Yc.bind(null,t,e),n)}function n1(){}function Zc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qc(e,t,n){return On&21?(wt(n,t)||(n=oc(),he.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Bf(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{te=n,Zi.transition=r}}function em(){return ht().memoizedState}function zf(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(e))nm(t,n);else if(n=_c(e,t,n,r),n!==null){var o=ze();vt(n,e,r,o),rm(n,t,r)}}function Ff(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(e))nm(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,wt(a,i)){var s=t.interleaved;s===null?(o.next=o,Gs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=_c(e,t,o,r),n!==null&&(o=ze(),vt(n,e,r,o),rm(n,t,r))}}function tm(e){var t=e.alternate;return e===he||t!==null&&t===he}function nm(e,t){qr=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ps(e,n)}}var Bl={readContext:ut,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Uf={readContext:ut,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cl(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return cl(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zf.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:n1,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Bf.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=bt();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));On&30||Fc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,yu(Qc.bind(null,r,l,e),[e]),r.flags|=2048,wo(9,Uc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=bt(),t=je.identifierPrefix;if(ae){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:ut,useCallback:Zc,useContext:ut,useEffect:t1,useImperativeHandle:Jc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Xc,useReducer:Xi,useRef:Vc,useState:function(){return Xi(xo)},useDebugValue:n1,useDeferredValue:function(e){var t=ht();return qc(t,Me.memoizedState,e)},useTransition:function(){var e=Xi(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:zc,useId:em,unstable_isNewReconciler:!1},Wf={readContext:ut,useCallback:Zc,useContext:ut,useEffect:t1,useImperativeHandle:Jc,useInsertionEffect:Gc,useLayoutEffect:Kc,useMemo:Xc,useReducer:qi,useRef:Vc,useState:function(){return qi(xo)},useDebugValue:n1,useDeferredValue:function(e){var t=ht();return Me===null?t.memoizedState=e:qc(t,Me.memoizedState,e)},useTransition:function(){var e=qi(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:zc,useId:em,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),l=Bt(r,o);l.payload=t,n!=null&&(l.callback=n),t=an(e,l,o),t!==null&&(vt(t,e,o,r),ul(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),l=Bt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=an(e,l,o),t!==null&&(vt(t,e,o,r),ul(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(vt(t,e,r,n),ul(t,e,r))}};function xu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!co(n,r)||!co(o,l):!0}function om(e,t,n){var r=!1,o=pn,l=t.contextType;return typeof l=="object"&&l!==null?l=ut(l):(o=Ve(t)?Pn:Le.current,r=t.contextTypes,l=(r=r!=null)?yr(e,o):pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Fa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ks(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ut(l):(l=Ve(t)?Pn:Le.current,o.context=yr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(za(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ci.enqueueReplaceState(o,o.state,null),_l(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=v0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function lm(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fl||(Fl=!0,Xa=r),Ua(e,t)},n}function im(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ua(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lp.bind(null,e,t,n),t.then(e,e))}function Au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Vf=Ht.ReactCurrentOwner,We=!1;function Be(e,t,n,r){t.child=e===null?Oc(t,null,n,r):wr(t,e.child,n,r)}function bu(e,t,n,r,o){n=n.render;var l=t.ref;return pr(t,o),r=qs(e,t,n,r,l,o),n=e1(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&n&&Fs(t),t.flags|=1,Be(e,t,r,o),t.child)}function Eu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!h1(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,am(e,t,l,r,o)):(e=pl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(i,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=hn(l,r),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(co(l,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Qa(e,t,n,r,o)}function sm(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(sr,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(sr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ne(sr,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ne(sr,Je),Je|=r;return Be(e,t,o,n),t.child}function um(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var l=Ve(n)?Pn:Le.current;return l=yr(t,l),pr(t,o),n=qs(e,t,n,r,l,o),r=e1(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&r&&Fs(t),t.flags|=1,Be(e,t,n,o),t.child)}function Su(e,t,n,r,o){if(Ve(n)){var l=!0;Il(t)}else l=!1;if(pr(t,o),t.stateNode===null)ml(e,t),om(t,n,r),Fa(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Pn:Le.current,u=yr(t,u));var g=n.getDerivedStateFromProps,c=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&wu(t,i,r,u),Jt=!1;var v=t.memoizedState;i.state=v,_l(t,r,i,o),s=t.memoizedState,a!==r||v!==s||He.current||Jt?(typeof g=="function"&&(za(t,n,g,r),s=t.memoizedState),(a=Jt||xu(t,n,a,r,v,s,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Dc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),i.props=u,c=t.pendingProps,v=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ve(n)?Pn:Le.current,s=yr(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==c||v!==s)&&wu(t,i,r,s),Jt=!1,v=t.memoizedState,i.state=v,_l(t,r,i,o);var k=t.memoizedState;a!==c||v!==k||He.current||Jt?(typeof x=="function"&&(za(t,n,x,r),k=t.memoizedState),(u=Jt||xu(t,n,u,r,v,k,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Wa(e,t,n,r,l,o)}function Wa(e,t,n,r,o,l){um(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&cu(t,n,!1),Wt(e,t,l);r=t.stateNode,Vf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=wr(t,e.child,null,l),t.child=wr(t,null,a,l)):Be(e,t,a,l),t.memoizedState=r.state,o&&cu(t,n,!0),t.child}function hm(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),Ys(e,t.containerInfo)}function Cu(e,t,n,r,o){return xr(),Qs(o),t.flags|=256,Be(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,o=ue.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ue,o&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=fi(i,r,0,null),e=In(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Va(n),t.memoizedState=Ha,e):r1(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Gf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=hn(a,l):(l=In(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Va(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return l=e.child,e=l.sibling,r=hn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function r1(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,n,r){return r!==null&&Qs(r),wr(t,e.child,null,n),e=r1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ea(Error(j(422))),Yo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=fi({mode:"visible",children:r.children},o,0,null),l=In(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wr(t,e.child,null,i),t.child.memoizedState=Va(i),t.memoizedState=Ha,l);if(!(t.mode&1))return Yo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(j(419)),r=ea(l,r,void 0),Yo(e,t,i,r)}if(a=(i&e.childLanes)!==0,We||a){if(r=je,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Qt(e,o),vt(r,e,o,-1))}return u1(),r=ea(Error(j(421))),Yo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ip.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ze=ln(o.nextSibling),Xe=t,ae=!0,pt=null,e!==null&&(lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Tn,Dt=e.id,Lt=e.overflow,Tn=t),t=r1(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ba(e.return,t,n)}function ta(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function mm(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ta(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Dl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ta(t,!0,n,null,l);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ml(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kf(e,t,n){switch(t.tag){case 3:hm(t),xr();break;case 5:Lc(t);break;case 1:Ve(t.type)&&Il(t);break;case 4:Ys(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Tl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?cm(e,t,n):(ne(ue,ue.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,sm(e,t,n)}return Wt(e,t,n)}var dm,Ga,fm,pm;dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};fm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn($t.current);var l=null;switch(n){case"input":o=pa(e,o),r=pa(e,r),l=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":o=ya(e,o),r=ya(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}wa(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yf(e,t,n){var r=t.pendingProps;switch(Us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ve(t.type)&&Nl(),_e(t),null;case 3:return r=t.stateNode,kr(),le(He),le(Le),Zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ts(pt),pt=null))),Ga(e,t),_e(t),null;case 5:Js(t);var o=Cn(vo.current);if(n=t.type,e!==null&&t.stateNode!=null)fm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return _e(t),null}if(e=Cn($t.current),Go(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[St]=t,r[po]=l,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)re(Vr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":D1(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":B1(r,l),re("invalid",r)}wa(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Vo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Vo(r.textContent,a,e),o=["children",""+a]):oo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&re("scroll",r)}switch(n){case"input":Lo(r),L1(r,l,!0);break;case"textarea":Lo(r),z1(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=jl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[St]=t,e[po]=r,dm(e,t,!1,!1),t.stateNode=e;e:{switch(i=ka(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)re(Vr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":D1(e,r),o=pa(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":B1(e,r),o=ya(e,r),re("invalid",e);break;default:o=r}wa(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Vh(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Wh(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&lo(e,s):typeof s=="number"&&lo(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(oo.hasOwnProperty(l)?s!=null&&l==="onScroll"&&re("scroll",e):s!=null&&Cs(e,l,s,i))}switch(n){case"input":Lo(e),L1(e,r,!1);break;case"textarea":Lo(e),z1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cr(e,!!r.multiple,l,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Cn(vo.current),Cn($t.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return _e(t),null;case 13:if(le(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&t.mode&1&&!(t.flags&128))Pc(),xr(),t.flags|=98560,l=!1;else if(l=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[St]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else pt!==null&&(ts(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?be===0&&(be=3):u1())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return kr(),Ga(e,t),e===null&&mo(t.stateNode.containerInfo),_e(t),null;case 10:return Vs(t.type._context),_e(t),null;case 17:return Ve(t.type)&&Nl(),_e(t),null;case 19:if(le(ue),l=t.memoizedState,l===null)return _e(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)zr(l,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Dl(e),i!==null){for(t.flags|=128,zr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>Mr&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return _e(t),null}else 2*ge()-l.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return s1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Jf(e,t){switch(Us(t),t.tag){case 1:return Ve(t.type)&&Nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),le(He),le(Le),Zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Js(t),null;case 13:if(le(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ue),null;case 4:return kr(),null;case 10:return Vs(t.type._context),null;case 22:case 23:return s1(),null;case 24:return null;default:return null}}var Jo=!1,De=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){fe(e,t,r)}}var ju=!1;function Xf(e,t){if(Ia=Sl,e=wc(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,g=0,c=e,v=null;t:for(;;){for(var x;c!==n||o!==0&&c.nodeType!==3||(a=i+o),c!==l||r!==0&&c.nodeType!==3||(s=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(x=c.firstChild)!==null;)v=c,c=x;for(;;){if(c===e)break t;if(v===n&&++u===o&&(a=i),v===l&&++g===r&&(s=i),(x=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ra={focusedElem:e,selectionRange:n},Sl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var A=k.memoizedProps,E=k.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?A:dt(t.type,A),E);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=ju,ju=!1,k}function eo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ka(t,n,l)}o=o.next}while(o!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gm(e){var t=e.alternate;t!==null&&(e.alternate=null,gm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[po],delete t[Oa],delete t[Tf],delete t[Of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vm(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Gt(e,t,n){for(n=n.child;n!==null;)ym(e,t,n),n=n.sibling}function ym(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:De||ar(n,t);case 6:var r=Ie,o=ft;Ie=null,Gt(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),uo(e)):Ki(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Gt(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ka(n,t,i),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!De&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Gt(e,t,n),De=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zf),t.forEach(function(r){var o=ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(j(160));ym(l,i,o),Ie=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}function xm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Mt(e),r&4){try{eo(3,e,e.return),mi(3,e)}catch(A){fe(e,e.return,A)}try{eo(5,e,e.return)}catch(A){fe(e,e.return,A)}}break;case 1:mt(t,e),Mt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(mt(t,e),Mt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{lo(o,"")}catch(A){fe(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Fh(o,l),ka(a,i);var u=ka(a,l);for(i=0;i<s.length;i+=2){var g=s[i],c=s[i+1];g==="style"?Vh(o,c):g==="dangerouslySetInnerHTML"?Wh(o,c):g==="children"?lo(o,c):Cs(o,g,c,u)}switch(a){case"input":ga(o,l);break;case"textarea":Uh(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?cr(o,!!l.multiple,x,!1):v!==!!l.multiple&&(l.defaultValue!=null?cr(o,!!l.multiple,l.defaultValue,!0):cr(o,!!l.multiple,l.multiple?[]:"",!1))}o[po]=l}catch(A){fe(e,e.return,A)}}break;case 6:if(mt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(A){fe(e,e.return,A)}}break;case 3:if(mt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(A){fe(e,e.return,A)}break;case 4:mt(t,e),Mt(e);break;case 13:mt(t,e),Mt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(i1=ge())),r&4&&Iu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||g,mt(t,e),De=u):mt(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(c=T=g;T!==null;){switch(v=T,x=v.child,v.tag){case 0:case 11:case 14:case 15:eo(4,v,v.return);break;case 1:ar(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(A){fe(r,n,A)}}break;case 5:ar(v,v.return);break;case 22:if(v.memoizedState!==null){Pu(c);continue}}x!==null?(x.return=v,T=x):Pu(c)}g=g.sibling}e:for(g=null,c=e;;){if(c.tag===5){if(g===null){g=c;try{o=c.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Hh("display",i))}catch(A){fe(e,e.return,A)}}}else if(c.tag===6){if(g===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(A){fe(e,e.return,A)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;g===c&&(g=null),c=c.return}g===c&&(g=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:mt(t,e),Mt(e),r&4&&Iu(e);break;case 21:break;default:mt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vm(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lo(o,""),r.flags&=-33);var l=Nu(e);Za(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Nu(e);Ja(e,a,i);break;default:throw Error(j(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qf(e,t,n){T=e,wm(e)}function wm(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Jo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=Jo;var u=De;if(Jo=i,(De=s)&&!u)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Tu(o):s!==null?(s.return=i,T=s):Tu(o);for(;l!==null;)T=l,wm(l),l=l.sibling;T=o,Jo=a,De=u}Ru(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):Ru(e)}}function Ru(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&gu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var c=g.dehydrated;c!==null&&uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}De||t.flags&512&&Ya(t)}catch(v){fe(t,t.return,v)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Pu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Tu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var l=t.return;try{Ya(t)}catch(s){fe(t,l,s)}break;case 5:var i=t.return;try{Ya(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var ep=Math.ceil,zl=Ht.ReactCurrentDispatcher,o1=Ht.ReactCurrentOwner,st=Ht.ReactCurrentBatchConfig,J=0,je=null,ye=null,Re=0,Je=0,sr=xn(0),be=0,ko=null,_n=0,di=0,l1=0,to=null,Qe=null,i1=0,Mr=1/0,Tt=null,Fl=!1,Xa=null,sn=null,Zo=!1,en=null,Ul=0,no=0,qa=null,dl=-1,fl=0;function ze(){return J&6?ge():dl!==-1?dl:dl=ge()}function un(e){return e.mode&1?J&2&&Re!==0?Re&-Re:Df.transition!==null?(fl===0&&(fl=oc()),fl):(e=te,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function vt(e,t,n,r){if(50<no)throw no=0,qa=null,Error(j(185));No(e,n,r),(!(J&2)||e!==je)&&(e===je&&(!(J&2)&&(di|=n),be===4&&Xt(e,Re)),Ge(e,r),n===1&&J===0&&!(t.mode&1)&&(Mr=ge()+500,ui&&wn()))}function Ge(e,t){var n=e.callbackNode;_0(e,t);var r=El(e,e===je?Re:0);if(r===0)n!==null&&Q1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Q1(n),t===1)e.tag===0?_f(Ou.bind(null,e)):Nc(Ou.bind(null,e)),Rf(function(){!(J&6)&&wn()}),n=null;else{switch(lc(r)){case 1:n=Rs;break;case 4:n=nc;break;case 16:n=bl;break;case 536870912:n=rc;break;default:n=bl}n=$m(n,km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function km(e,t){if(dl=-1,fl=0,J&6)throw Error(j(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=El(e,e===je?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ql(e,r);else{t=r;var o=J;J|=2;var l=Mm();(je!==e||Re!==t)&&(Tt=null,Mr=ge()+500,Nn(e,t));do try{rp();break}catch(a){Am(e,a)}while(!0);Hs(),zl.current=l,J=o,ye!==null?t=0:(je=null,Re=0,t=be)}if(t!==0){if(t===2&&(o=Sa(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!tp(o)&&(t=Ql(e,r),t===2&&(l=Sa(e),l!==0&&(r=l,t=es(e,l))),t===1))throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:bn(e,Qe,Tt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=i1+500-ge(),10<t)){if(El(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ta(bn.bind(null,e,Qe,Tt),t);break}bn(e,Qe,Tt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-gt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ep(r/1960))-r,10<r){e.timeoutHandle=Ta(bn.bind(null,e,Qe,Tt),r);break}bn(e,Qe,Tt);break;case 5:bn(e,Qe,Tt);break;default:throw Error(j(329))}}}return Ge(e,ge()),e.callbackNode===n?km.bind(null,e):null}function es(e,t){var n=to;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ql(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ts(t)),e}function ts(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!wt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~l1,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if(J&6)throw Error(j(327));gr();var t=El(e,0);if(!(t&1))return Ge(e,ge()),null;var n=Ql(e,t);if(e.tag!==0&&n===2){var r=Sa(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=ko,Nn(e,0),Xt(e,t),Ge(e,ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Qe,Tt),Ge(e,ge()),null}function a1(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Mr=ge()+500,ui&&wn())}}function Dn(e){en!==null&&en.tag===0&&!(J&6)&&gr();var t=J;J|=1;var n=st.transition,r=te;try{if(st.transition=null,te=1,e)return e()}finally{te=r,st.transition=n,J=t,!(J&6)&&wn()}}function s1(){Je=sr.current,le(sr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nl();break;case 3:kr(),le(He),le(Le),Zs();break;case 5:Js(r);break;case 4:kr();break;case 13:le(ue);break;case 19:le(ue);break;case 10:Vs(r.type._context);break;case 22:case 23:s1()}n=n.return}if(je=e,ye=e=hn(e.current,null),Re=Je=t,be=0,ko=null,l1=di=_n=0,Qe=to=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Sn=null}return e}function Am(e,t){do{var n=ye;try{if(Hs(),hl.current=Bl,Ll){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ll=!1}if(On=0,Se=Me=he=null,qr=!1,yo=0,o1.current=null,n===null||n.return===null){be=1,ko=t,ye=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,c=g.tag;if(!(g.mode&1)&&(c===0||c===11||c===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Au(i);if(x!==null){x.flags&=-257,Mu(x,i,a,l,t),x.mode&1&&ku(l,u,t),t=x,s=u;var k=t.updateQueue;if(k===null){var A=new Set;A.add(s),t.updateQueue=A}else k.add(s);break e}else{if(!(t&1)){ku(l,u,t),u1();break e}s=Error(j(426))}}else if(ae&&a.mode&1){var E=Au(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Mu(E,i,a,l,t),Qs(Ar(s,a));break e}}l=s=Ar(s,a),be!==4&&(be=2),to===null?to=[l]:to.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=lm(l,s,t);pu(l,d);break e;case 1:a=s;var m=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=im(l,a,t);pu(l,w);break e}}l=l.return}while(l!==null)}Em(n)}catch(M){t=M,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Mm(){var e=zl.current;return zl.current=Bl,e===null?Bl:e}function u1(){(be===0||be===3||be===2)&&(be=4),je===null||!(_n&268435455)&&!(di&268435455)||Xt(je,Re)}function Ql(e,t){var n=J;J|=2;var r=Mm();(je!==e||Re!==t)&&(Tt=null,Nn(e,t));do try{np();break}catch(o){Am(e,o)}while(!0);if(Hs(),J=n,zl.current=r,ye!==null)throw Error(j(261));return je=null,Re=0,be}function np(){for(;ye!==null;)bm(ye)}function rp(){for(;ye!==null&&!C0();)bm(ye)}function bm(e){var t=Cm(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Em(e):ye=t,o1.current=null}function Em(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jf(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ye=null;return}}else if(n=Yf(n,t,Je),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);be===0&&(be=5)}function bn(e,t,n){var r=te,o=st.transition;try{st.transition=null,te=1,op(e,t,n,r)}finally{st.transition=o,te=r}return null}function op(e,t,n,r){do gr();while(en!==null);if(J&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(D0(e,l),e===je&&(ye=je=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,$m(bl,function(){return gr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=st.transition,st.transition=null;var i=te;te=1;var a=J;J|=4,o1.current=null,Xf(e,n),xm(n,e),bf(Ra),Sl=!!Ia,Ra=Ia=null,e.current=n,qf(n),$0(),J=a,te=i,st.transition=l}else e.current=n;if(Zo&&(Zo=!1,en=e,Ul=o),l=e.pendingLanes,l===0&&(sn=null),I0(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fl)throw Fl=!1,e=Xa,Xa=null,e;return Ul&1&&e.tag!==0&&gr(),l=e.pendingLanes,l&1?e===qa?no++:(no=0,qa=e):no=0,wn(),null}function gr(){if(en!==null){var e=lc(Ul),t=st.transition,n=te;try{if(st.transition=null,te=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Ul=0,J&6)throw Error(j(331));var o=J;for(J|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:eo(8,g,l)}var c=g.child;if(c!==null)c.return=g,T=c;else for(;T!==null;){g=T;var v=g.sibling,x=g.return;if(gm(g),g===u){T=null;break}if(v!==null){v.return=x,T=v;break}T=x}}}var k=l.alternate;if(k!==null){var A=k.child;if(A!==null){k.child=null;do{var E=A.sibling;A.sibling=null,A=E}while(A!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:eo(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break e}T=l.return}}var m=e.current;for(T=m;T!==null;){i=T;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,T=f;else e:for(i=m;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(M){fe(a,a.return,M)}if(a===i){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(J=o,wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{te=n,st.transition=t}}return!1}function _u(e,t,n){t=Ar(n,t),t=lm(e,t,1),e=an(e,t,1),t=ze(),e!==null&&(No(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=Ar(n,e),e=im(t,e,1),t=an(t,e,1),e=ze(),t!==null&&(No(t,1,e),Ge(t,e));break}}t=t.return}}function lp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Re&n)===n&&(be===4||be===3&&(Re&130023424)===Re&&500>ge()-i1?Nn(e,0):l1|=n),Ge(e,t)}function Sm(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=ze();e=Qt(e,t),e!==null&&(No(e,t,n),Ge(e,n))}function ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sm(e,n)}function ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Sm(e,n)}var Cm;Cm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Kf(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&Ic(t,Pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ml(e,t),e=t.pendingProps;var o=yr(t,Le.current);pr(t,n),o=qs(null,t,r,e,o,n);var l=e1();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,Il(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ks(t),o.updater=ci,t.stateNode=o,o._reactInternals=t,Fa(t,r,e,n),t=Wa(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Fs(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ml(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=up(r),e=dt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,dt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Su(e,t,r,o,n);case 3:e:{if(hm(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Dc(e,t),_l(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Ar(Error(j(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=Ar(Error(j(424)),t),t=Cu(e,t,r,n,o);break e}else for(Ze=ln(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,pt=null,n=Oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===o){t=Wt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&La(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Pa(r,o)?i=null:l!==null&&Pa(r,l)&&(t.flags|=32),um(e,t),Be(e,t,i,n),t.child;case 6:return e===null&&La(t),null;case 13:return cm(e,t,n);case 4:return Ys(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),bu(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,ne(Tl,r._currentValue),r._currentValue=i,l!==null)if(wt(l.value,i)){if(l.children===o.children&&!He.current){t=Wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ba(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(j(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ba(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=ut(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),Eu(e,t,r,o,n);case 15:return am(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ml(e,t),t.tag=1,Ve(r)?(e=!0,Il(t)):e=!1,pr(t,n),om(t,r,o),Fa(t,r,o,n),Wa(null,t,r,!0,e,n);case 19:return mm(e,t,n);case 22:return sm(e,t,n)}throw Error(j(156,t.tag))};function $m(e,t){return tc(e,t)}function sp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new sp(e,t,n,r)}function h1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return h1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===js)return 11;if(e===Ns)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")h1(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xn:return In(n.children,o,l,t);case $s:i=8,o|=8;break;case ca:return e=at(12,n,t,o|2),e.elementType=ca,e.lanes=l,e;case ma:return e=at(13,n,t,o),e.elementType=ma,e.lanes=l,e;case da:return e=at(19,n,t,o),e.elementType=da,e.lanes=l,e;case Lh:return fi(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _h:i=10;break e;case Dh:i=9;break e;case js:i=11;break e;case Ns:i=14;break e;case Yt:i=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=at(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function In(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=at(22,e,r,t),e.elementType=Lh,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function c1(e,t,n,r,o,l,i,a,s){return e=new hp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=at(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ks(l),e}function cp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jm(e){if(!e)return pn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ve(n))return jc(e,n,t)}return t}function Nm(e,t,n,r,o,l,i,a,s){return e=c1(n,r,!0,e,o,l,i,a,s),e.context=jm(null),n=e.current,r=ze(),o=un(n),l=Bt(r,o),l.callback=t??null,an(n,l,o),e.current.lanes=o,No(e,o,r),Ge(e,r),e}function pi(e,t,n,r){var o=t.current,l=ze(),i=un(o);return n=jm(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,i),e!==null&&(vt(e,o,i,l),ul(e,o,i)),i}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function m1(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function mp(){return null}var Im=typeof reportError=="function"?reportError:function(e){console.error(e)};function d1(e){this._internalRoot=e}gi.prototype.render=d1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));pi(e,t,null,null)};gi.prototype.unmount=d1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){pi(null,e,null,null)}),t[Ut]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&hc(e)}};function f1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function dp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Wl(i);l.call(u)}}var i=Nm(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=i,e[Ut]=i.current,mo(e.nodeType===8?e.parentNode:e),Dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Wl(s);a.call(u)}}var s=c1(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=s,e[Ut]=s.current,mo(e.nodeType===8?e.parentNode:e),Dn(function(){pi(t,s,n,r)}),s}function yi(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Wl(i);a.call(s)}}pi(t,i,e,o)}else i=dp(n,t,e,o,r);return Wl(i)}ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Ps(t,n|1),Ge(t,ge()),!(J&6)&&(Mr=ge()+500,wn()))}break;case 13:Dn(function(){var r=Qt(e,1);if(r!==null){var o=ze();vt(r,e,1,o)}}),m1(e,1)}};Ts=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=ze();vt(t,e,134217728,n)}m1(e,134217728)}};ac=function(e){if(e.tag===13){var t=un(e),n=Qt(e,t);if(n!==null){var r=ze();vt(n,e,t,r)}m1(e,t)}};sc=function(){return te};uc=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ma=function(e,t,n){switch(t){case"input":if(ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=si(r);if(!o)throw Error(j(90));zh(r),ga(r,o)}}}break;case"textarea":Uh(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Yh=a1;Jh=Dn;var fp={usingClientEntryPoint:!1,Events:[Ro,nr,si,Gh,Kh,a1]},Fr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pp={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qh(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{oi=Xo.inject(pp),Ct=Xo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f1(t))throw Error(j(200));return cp(e,t,null,n)};nt.createRoot=function(e,t){if(!f1(e))throw Error(j(299));var n=!1,r="",o=Im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=c1(e,1,!1,null,null,n,!1,r,o),e[Ut]=t.current,mo(e.nodeType===8?e.parentNode:e),new d1(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=qh(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Dn(e)};nt.hydrate=function(e,t,n){if(!vi(t))throw Error(j(200));return yi(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!f1(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Im;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Nm(t,null,e,1,n??null,o,!1,l,i),e[Ut]=t.current,mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gi(t)};nt.render=function(e,t,n){if(!vi(t))throw Error(j(200));return yi(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!vi(e))throw Error(j(40));return e._reactRootContainer?(Dn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};nt.unstable_batchedUpdates=a1;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return yi(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function Rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rm)}catch(e){console.error(e)}}Rm(),Rh.exports=nt;var Pm=Rh.exports,Tm,Bu=Pm;Tm=Bu.createRoot,Bu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const zu="popstate";function gp(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Qn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ns("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Hl(l))}function r(o,l){p1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return yp(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function p1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vp(){return Math.random().toString(36).substr(2,8)}function Fu(e,t){return{usr:e.state,key:e.key,idx:t}}function ns(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qn(t):t,{state:n,key:t&&t.key||r||vp()})}function Hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yp(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=tn.Pop,s=null,u=g();u==null&&(u=0,i.replaceState(Ao({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function c(){a=tn.Pop;let E=g(),d=E==null?null:E-u;u=E,s&&s({action:a,location:A.location,delta:d})}function v(E,d){a=tn.Push;let m=ns(A.location,E,d);n&&n(m,E),u=g()+1;let f=Fu(m,u),w=A.createHref(m);try{i.pushState(f,"",w)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(w)}l&&s&&s({action:a,location:A.location,delta:1})}function x(E,d){a=tn.Replace;let m=ns(A.location,E,d);n&&n(m,E),u=g();let f=Fu(m,u),w=A.createHref(m);i.replaceState(f,"",w),l&&s&&s({action:a,location:A.location,delta:0})}function k(E){let d=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof E=="string"?E:Hl(E);return m=m.replace(/ $/,"%20"),xe(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}let A={get action(){return a},get location(){return e(o,i)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(zu,c),s=E,()=>{o.removeEventListener(zu,c),s=null}},createHref(E){return t(o,E)},createURL:k,encodeLocation(E){let d=k(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:x,go(E){return i.go(E)}};return A}var Uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uu||(Uu={}));function xp(e,t,n){return n===void 0&&(n="/"),wp(e,t,n,!1)}function wp(e,t,n,r){let o=typeof t=="string"?Qn(t):t,l=g1(o.pathname||"/",n);if(l==null)return null;let i=Om(e);kp(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=Rp(l);a=Np(i[s],u,r)}return a}function Om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=cn([r,s.relativePath]),g=n.concat(s);l.children&&l.children.length>0&&(xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Om(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:$p(u,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of _m(l.path))o(l,i,s)}),t}function _m(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=_m(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function kp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:[\w-]+$/,Mp=3,bp=2,Ep=1,Sp=10,Cp=-2,Qu=e=>e==="*";function $p(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=Cp),t&&(r+=bp),n.filter(o=>!Qu(o)).reduce((o,l)=>o+(Ap.test(l)?Mp:l===""?Ep:Sp),r)}function jp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Np(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",c=Wu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),v=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Wu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:cn([l,c.pathname]),pathnameBase:_p(cn([l,c.pathnameBase])),route:v}),c.pathnameBase!=="/"&&(l=cn([l,c.pathnameBase]))}return i}function Wu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ip(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,c)=>{let{paramName:v,isOptional:x}=g;if(v==="*"){let A=a[c]||"";i=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const k=a[c];return x&&!k?u[v]=void 0:u[v]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function Ip(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),p1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Rp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return p1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function g1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Qn(e):e;return{pathname:n?n.startsWith("/")?n:Tp(n,t):t,search:Dp(r),hash:Lp(o)}}function Tp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Op(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dm(e,t){let n=Op(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Qn(e):(o=Ao({},e),xe(!o.pathname||!o.pathname.includes("?"),oa("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),oa("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),oa("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let c=t.length-1;if(!r&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),c-=1;o.pathname=v.join("/")}a=c>=0?t[c]:"/"}let s=Pp(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const cn=e=>e.join("/").replace(/\/\/+/g,"/"),_p=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bm=["post","put","patch","delete"];new Set(Bm);const zp=["get",...Bm];new Set(zp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}const v1=y.createContext(null),Fp=y.createContext(null),Wn=y.createContext(null),xi=y.createContext(null),Hn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),zm=y.createContext(null);function Up(e,t){let{relative:n}=t===void 0?{}:t;To()||xe(!1);let{basename:r,navigator:o}=y.useContext(Wn),{hash:l,pathname:i,search:a}=Um(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:cn([r,i])),o.createHref({pathname:s,search:a,hash:l})}function To(){return y.useContext(xi)!=null}function wi(){return To()||xe(!1),y.useContext(xi).location}function Fm(e){y.useContext(Wn).static||y.useLayoutEffect(e)}function Qp(){let{isDataRoute:e}=y.useContext(Hn);return e?ng():Wp()}function Wp(){To()||xe(!1);let e=y.useContext(v1),{basename:t,future:n,navigator:r}=y.useContext(Wn),{matches:o}=y.useContext(Hn),{pathname:l}=wi(),i=JSON.stringify(Dm(o,n.v7_relativeSplatPath)),a=y.useRef(!1);return Fm(()=>{a.current=!0}),y.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Lm(u,JSON.parse(i),l,g.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:cn([t,c.pathname])),(g.replace?r.replace:r.push)(c,g.state,g)},[t,r,i,l,e])}function Um(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Wn),{matches:o}=y.useContext(Hn),{pathname:l}=wi(),i=JSON.stringify(Dm(o,r.v7_relativeSplatPath));return y.useMemo(()=>Lm(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Hp(e,t){return Vp(e,t)}function Vp(e,t,n,r){To()||xe(!1);let{navigator:o,static:l}=y.useContext(Wn),{matches:i}=y.useContext(Hn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=wi(),c;if(t){var v;let d=typeof t=="string"?Qn(t):t;u==="/"||(v=d.pathname)!=null&&v.startsWith(u)||xe(!1),c=d}else c=g;let x=c.pathname||"/",k=x;if(u!=="/"){let d=u.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(d.length).join("/")}let A=!l&&n&&n.matches&&n.matches.length>0?n.matches:xp(e,{pathname:k}),E=Zp(A&&A.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:cn([u,o.encodeLocation?o.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:cn([u,o.encodeLocation?o.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,n,r);return t&&E?y.createElement(xi.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:tn.Pop}},E):E}function Gp(){let e=tg(),t=Bp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const Kp=y.createElement(Gp,null);class Yp extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Hn.Provider,{value:this.props.routeContext},y.createElement(zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jp(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(v1);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Hn.Provider,{value:t},r)}function Zp(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);g>=0||xe(!1),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let c=i[g];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=g),c.route.id){let{loaderData:v,errors:x}=n,k=c.route.loader&&v[c.route.id]===void 0&&(!x||x[c.route.id]===void 0);if(c.route.lazy||k){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,c,v)=>{let x,k=!1,A=null,E=null;n&&(x=a&&c.route.id?a[c.route.id]:void 0,A=c.route.errorElement||Kp,s&&(u<0&&v===0?(k=!0,E=null):u===v&&(k=!0,E=c.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,v+1)),m=()=>{let f;return x?f=A:k?f=E:c.route.Component?f=y.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=g,y.createElement(Jp,{match:c,routeContext:{outlet:g,matches:d,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||v===0)?y.createElement(Yp,{location:n.location,revalidation:n.revalidation,component:A,error:x,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Qm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qm||{}),Vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vl||{});function Xp(e){let t=y.useContext(v1);return t||xe(!1),t}function qp(e){let t=y.useContext(Fp);return t||xe(!1),t}function eg(e){let t=y.useContext(Hn);return t||xe(!1),t}function Wm(e){let t=eg(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function tg(){var e;let t=y.useContext(zm),n=qp(Vl.UseRouteError),r=Wm(Vl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ng(){let{router:e}=Xp(Qm.UseNavigateStable),t=Wm(Vl.UseNavigateStable),n=y.useRef(!1);return Fm(()=>{n.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Mo({fromRouteId:t},l)))},[e,t])}function rg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jn(e){xe(!1)}function og(e){let{basename:t="/",children:n=null,location:r,navigationType:o=tn.Pop,navigator:l,static:i=!1,future:a}=e;To()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:l,static:i,future:Mo({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Qn(r));let{pathname:g="/",search:c="",hash:v="",state:x=null,key:k="default"}=r,A=y.useMemo(()=>{let E=g1(g,s);return E==null?null:{location:{pathname:E,search:c,hash:v,state:x,key:k},navigationType:o}},[s,g,c,v,x,k,o]);return A==null?null:y.createElement(Wn.Provider,{value:u},y.createElement(xi.Provider,{children:n,value:A}))}function lg(e){let{children:t,location:n}=e;return Hp(rs(t),n)}new Promise(()=>{});function rs(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,rs(r.props.children,l));return}r.type!==Jn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=rs(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function ig(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ag(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sg(e,t){return e.button===0&&(!t||t==="_self")&&!ag(e)}const ug=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hg="6";try{window.__reactRouterVersion=hg}catch{}const cg="startTransition",Hu=o0[cg];function mg(e){let{basename:t,children:n,future:r,window:o}=e,l=y.useRef();l.current==null&&(l.current=gp({window:o,v5Compat:!0}));let i=l.current,[a,s]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=y.useCallback(c=>{u&&Hu?Hu(()=>s(c)):s(c)},[s,u]);return y.useLayoutEffect(()=>i.listen(g),[i,g]),y.useEffect(()=>rg(r),[r]),y.createElement(og,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:g,viewTransition:c}=t,v=ig(t,ug),{basename:x}=y.useContext(Wn),k,A=!1;if(typeof u=="string"&&fg.test(u)&&(k=u,dg))try{let f=new URL(window.location.href),w=u.startsWith("//")?new URL(f.protocol+u):new URL(u),M=g1(w.pathname,x);w.origin===f.origin&&M!=null?u=M+w.search+w.hash:A=!0}catch{}let E=Up(u,{relative:o}),d=pg(u,{replace:i,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:c});function m(f){r&&r(f),f.defaultPrevented||d(f)}return y.createElement("a",os({},v,{href:k||E,onClick:A||l?r:m,ref:n,target:s}))});var Vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vu||(Vu={}));var Gu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gu||(Gu={}));function pg(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=Qp(),u=wi(),g=Um(e,{relative:i});return y.useCallback(c=>{if(sg(c,n)){c.preventDefault();let v=r!==void 0?r:Hl(u)===Hl(g);s(e,{replace:v,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,g,r,o,n,e,l,i,a])}var gg=`
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

`,$e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},$e.apply(this,arguments)};function bo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var oe="-ms-",ro="-moz-",X="-webkit-",Hm="comm",ki="rule",y1="decl",vg="@import",Vm="@keyframes",yg="@layer",Gm=Math.abs,x1=String.fromCharCode,ls=Object.assign;function xg(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Km(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function gl(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function Ym(e){return e.length}function Gr(e,t){return t.push(e),e}function wg(e,t){return e.map(t).join("")}function Ku(e,t){return e.filter(function(n){return!Ot(n,t)})}var Ai=1,Er=1,Jm=0,ct=0,ve=0,Rr="";function Mi(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:Ai,column:Er,length:i,return:"",siblings:a}}function Kt(e,t){return ls(Mi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Gr(e,e.siblings)}function kg(){return ve}function Ag(){return ve=ct>0?Ce(Rr,--ct):0,Er--,ve===10&&(Er=1,Ai--),ve}function yt(){return ve=ct<Jm?Ce(Rr,ct++):0,Er++,ve===10&&(Er=1,Ai++),ve}function Rn(){return Ce(Rr,ct)}function vl(){return ct}function bi(e,t){return br(Rr,e,t)}function is(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(e){return Ai=Er=1,Jm=Et(Rr=e),ct=0,[]}function bg(e){return Rr="",e}function la(e){return Km(bi(ct-1,as(e===91?e+2:e===40?e+1:e)))}function Eg(e){for(;(ve=Rn())&&ve<33;)yt();return is(e)>2||is(ve)>3?"":" "}function Sg(e,t){for(;--t&&yt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return bi(e,vl()+(t<6&&Rn()==32&&yt()==32))}function as(e){for(;yt();)switch(ve){case e:return ct;case 34:case 39:e!==34&&e!==39&&as(ve);break;case 40:e===41&&as(e);break;case 92:yt();break}return ct}function Cg(e,t){for(;yt()&&e+ve!==57;)if(e+ve===84&&Rn()===47)break;return"/*"+bi(t,ct-1)+"*"+x1(e===47?e:yt())}function $g(e){for(;!is(Rn());)yt();return bi(e,ct)}function jg(e){return bg(yl("",null,null,null,[""],e=Mg(e),0,[0],e))}function yl(e,t,n,r,o,l,i,a,s){for(var u=0,g=0,c=i,v=0,x=0,k=0,A=1,E=1,d=1,m=0,f="",w=o,M=l,b=r,S=f;E;)switch(k=m,m=yt()){case 40:if(k!=108&&Ce(S,c-1)==58){gl(S+=U(la(m),"&","&\f"),"&\f",Gm(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=la(m);break;case 9:case 10:case 13:case 32:S+=Eg(k);break;case 92:S+=Sg(vl()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Gr(Ng(Cg(yt(),vl()),t,n,s),s);break;default:S+="/"}break;case 123*A:a[u++]=Et(S)*d;case 125*A:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+g:d==-1&&(S=U(S,/\f/g,"")),x>0&&Et(S)-c&&Gr(x>32?Ju(S+";",r,n,c-1,s):Ju(U(S," ","")+";",r,n,c-2,s),s);break;case 59:S+=";";default:if(Gr(b=Yu(S,t,n,u,g,o,a,f,w=[],M=[],c,l),l),m===123)if(g===0)yl(S,t,b,b,w,l,c,a,M);else switch(v===99&&Ce(S,3)===110?100:v){case 100:case 108:case 109:case 115:yl(e,b,b,r&&Gr(Yu(e,b,b,0,0,o,a,f,o,w=[],c,M),M),o,M,c,a,r?w:M);break;default:yl(S,b,b,b,[""],M,0,a,M)}}u=g=x=0,A=d=1,f=S="",c=i;break;case 58:c=1+Et(S),x=k;default:if(A<1){if(m==123)--A;else if(m==125&&A++==0&&Ag()==125)continue}switch(S+=x1(m),m*A){case 38:d=g>0?1:(S+="\f",-1);break;case 44:a[u++]=(Et(S)-1)*d,d=1;break;case 64:Rn()===45&&(S+=la(yt())),v=Rn(),g=c=Et(f=S+=$g(vl())),m++;break;case 45:k===45&&Et(S)==2&&(A=0)}}return l}function Yu(e,t,n,r,o,l,i,a,s,u,g,c){for(var v=o-1,x=o===0?l:[""],k=Ym(x),A=0,E=0,d=0;A<r;++A)for(var m=0,f=br(e,v+1,v=Gm(E=i[A])),w=e;m<k;++m)(w=Km(E>0?x[m]+" "+f:U(f,/&\f/g,x[m])))&&(s[d++]=w);return Mi(e,t,n,o===0?ki:a,s,u,g,c)}function Ng(e,t,n,r){return Mi(e,t,n,Hm,x1(kg()),br(e,2,-2),0,r)}function Ju(e,t,n,r,o){return Mi(e,t,n,y1,br(e,0,r),br(e,r+1,-1),r,o)}function Zm(e,t,n){switch(xg(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+ro+e+oe+e+e;case 5936:switch(Ce(e,t+11)){case 114:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+oe+e+e;case 6165:return X+e+oe+"flex-"+e+e;case 5187:return X+e+U(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return X+e+oe+"flex-item-"+U(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":oe+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return X+e+oe+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+oe+U(e,"shrink","negative")+e;case 5292:return X+e+oe+U(e,"basis","preferred-size")+e;case 6060:return X+"box-"+U(e,"-grow","")+X+e+oe+U(e,"grow","positive")+e;case 4554:return X+U(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return oe+"grid-column-align"+br(e,t)+e;break;case 2592:case 3360:return oe+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Ot(r.props,/grid-\w+-end/)})?~gl(e+(n=n[t].value),"span",0)?e:oe+U(e,"-start","")+e+oe+"grid-row-span:"+(~gl(n,"span",0)?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":oe+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:oe+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+ro+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gl(e,"stretch",0)?Zm(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return oe+o+":"+l+u+(i?oe+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return U(e,":",":"+X)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(Ce(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+oe+"$2box$3")+e;case 100:return U(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Gl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ig(e,t,n,r){switch(e.type){case yg:if(e.children.length)break;case vg:case y1:return e.return=e.return||e.value;case Hm:return"";case Vm:return e.return=e.value+"{"+Gl(e.children,r)+"}";case ki:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Gl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rg(e){var t=Ym(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Pg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case y1:e.return=Zm(e.value,e.length,n);return;case Vm:return Gl([Kt(e,{value:U(e.value,"@","@"+X)})],r);case ki:if(e.length)return wg(n=e.props,function(o){switch(Ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Kt(e,{props:[U(o,/:(read-\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[o]})),ls(e,{props:Ku(n,r)});break;case"::placeholder":Kn(Kt(e,{props:[U(o,/:(plac\w+)/,":"+X+"input-$1")]})),Kn(Kt(e,{props:[U(o,/:(plac\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[U(o,/:(plac\w+)/,oe+"input-$1")]})),Kn(Kt(e,{props:[o]})),ls(e,{props:Ku(n,r)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},Sr=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",Xm="active",qm="data-styled-version",Ei="6.1.17",w1=`/*!sc*/
`,Kl=typeof window<"u"&&"HTMLElement"in window,_g=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),Dg={},Si=Object.freeze([]),Cr=Object.freeze({});function ed(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var td=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Lg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bg=/(^-|-$)/g;function Zu(e){return e.replace(Lg,"-").replace(Bg,"")}var zg=/(a)(d)/gi,qo=52,Xu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ss(e){var t,n="";for(t=Math.abs(e);t>qo;t=t/qo|0)n=Xu(t%qo)+n;return(Xu(t%qo)+n).replace(zg,"$1-$2")}var ia,nd=5381,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rd=function(e){return ur(nd,e)};function od(e){return ss(rd(e)>>>0)}function Fg(e){return e.displayName||e.name||"Component"}function aa(e){return typeof e=="string"&&!0}var ld=typeof Symbol=="function"&&Symbol.for,id=ld?Symbol.for("react.memo"):60115,Ug=ld?Symbol.for("react.forward_ref"):60112,Qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Wg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ad={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hg=((ia={})[Ug]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ia[id]=ad,ia);function qu(e){return("type"in(t=e)&&t.type.$$typeof)===id?ad:"$$typeof"in e?Hg[e.$$typeof]:Qg;var t}var Vg=Object.defineProperty,Gg=Object.getOwnPropertyNames,eh=Object.getOwnPropertySymbols,Kg=Object.getOwnPropertyDescriptor,Yg=Object.getPrototypeOf,th=Object.prototype;function sd(e,t,n){if(typeof t!="string"){if(th){var r=Yg(t);r&&r!==th&&sd(e,r,n)}var o=Gg(t);eh&&(o=o.concat(eh(t)));for(var l=qu(e),i=qu(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Wg||n&&n[s]||i&&s in i||l&&s in l)){var u=Kg(t,s);try{Vg(e,s,u)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function k1(e){return typeof e=="object"&&"styledComponentId"in e}function $n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function us(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Eo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hs(e,t,n){if(n===void 0&&(n=!1),!n&&!Eo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=hs(e[r],t[r]);else if(Eo(t))for(var r in t)e[r]=hs(e[r],t[r]);return e}function A1(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(w1);return n},e}(),xl=new Map,Yl=new Map,wl=1,el=function(e){if(xl.has(e))return xl.get(e);for(;Yl.has(wl);)wl++;var t=wl++;return xl.set(e,t),Yl.set(t,e),t},Zg=function(e,t){wl=t+1,xl.set(e,t),Yl.set(t,e)},Xg="style[".concat(Sr,"][").concat(qm,'="').concat(Ei,'"]'),qg=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ev=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},tv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(w1),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(qg);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Zg(g,u),ev(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},nh=function(e){for(var t=document.querySelectorAll(Xg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==Xm&&(tv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ud=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,Xm),r.setAttribute(qm,Ei);var i=nv();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},rv=function(){function e(t){this.element=ud(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ov=function(){function e(t){this.element=ud(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),lv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rh=Kl,iv={isServer:!Kl,useCSSOMInjection:!_g},Jl=function(){function e(t,n,r){t===void 0&&(t=Cr),n===void 0&&(n={});var o=this;this.options=$e($e({},iv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Kl&&rh&&(rh=!1,nh(this)),A1(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(c){var v=function(d){return Yl.get(d)}(c);if(v===void 0)return"continue";var x=l.names.get(v),k=i.getGroup(c);if(x===void 0||!x.size||k.length===0)return"continue";var A="".concat(Sr,".g").concat(c,'[id="').concat(v,'"]'),E="";x!==void 0&&x.forEach(function(d){d.length>0&&(E+="".concat(d,","))}),s+="".concat(k).concat(A,'{content:"').concat(E,'"}').concat(w1)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return el(t)},e.prototype.rehydrate=function(){!this.server&&Kl&&nh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new lv(o):r?new rv(o):new ov(o)}(this.options),new Jg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(el(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(el(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(el(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),av=/&/g,sv=/^\s*\/\/.*$/gm;function hd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hd(n.children,t)),n})}function uv(e){var t,n,r,o=Cr,l=o.options,i=l===void 0?Cr:l,a=o.plugins,s=a===void 0?Si:a,u=function(v,x,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):v},g=s.slice();g.push(function(v){v.type===ki&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(av,n).replace(r,u))}),i.prefix&&g.push(Tg),g.push(Ig);var c=function(v,x,k,A){x===void 0&&(x=""),k===void 0&&(k=""),A===void 0&&(A="&"),t=A,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var E=v.replace(sv,""),d=jg(k||x?"".concat(k," ").concat(x," { ").concat(E," }"):E);i.namespace&&(d=hd(d,i.namespace));var m=[];return Gl(d,Rg(g.concat(Pg(function(f){return m.push(f)})))),m};return c.hash=s.length?s.reduce(function(v,x){return x.name||Bn(15),ur(v,x.name)},nd).toString():"",c}var hv=new Jl,cs=uv(),cd=p.createContext({shouldForwardProp:void 0,styleSheet:hv,stylis:cs});cd.Consumer;p.createContext(void 0);function ms(){return y.useContext(cd)}var cv=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=cs);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,A1(this,function(){throw Bn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cs),this.name+t.hash},e}(),mv=function(e){return e>="A"&&e<="Z"};function oh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var md=function(e){return e==null||e===!1||e===""},dd=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!md(l)&&(Array.isArray(l)&&l.isCss||Ln(l)?r.push("".concat(oh(o),":"),l,";"):Eo(l)?r.push.apply(r,bo(bo(["".concat(o," {")],dd(l),!1),["}"],!1)):r.push("".concat(oh(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Og||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(md(e))return[];if(k1(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return mn(o,t,n,r)}var l;return e instanceof cv?n?(e.inject(n,r),[e.getName(r)]):[e]:Eo(e)?dd(e):Array.isArray(e)?Array.prototype.concat.apply(Si,e.map(function(i){return mn(i,t,n,r)})):[e.toString()]}function fd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!k1(n))return!1}return!0}var dv=rd(Ei),fv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fd(t),this.componentId=n,this.baseHash=ur(dv,n),this.baseStyle=r,Jl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=$n(o,this.staticRulesId);else{var l=us(mn(this.rules,t,n,r)),i=ss(ur(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=$n(o,i),this.staticRulesId=i}else{for(var s=ur(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var c=this.rules[g];if(typeof c=="string")u+=c;else if(c){var v=us(mn(c,t,n,r));s=ur(s,v+g),u+=v}}if(u){var x=ss(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=$n(o,x)}}return o},e}(),So=p.createContext(void 0);So.Consumer;function pv(e){var t=p.useContext(So),n=y.useMemo(function(){return function(r,o){if(!r)throw Bn(14);if(Ln(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Bn(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(So.Provider,{value:n},e.children):null}var sa={};function gv(e,t,n){var r=k1(e),o=e,l=!aa(e),i=t.attrs,a=i===void 0?Si:i,s=t.componentId,u=s===void 0?function(w,M){var b=typeof w!="string"?"sc":Zu(w);sa[b]=(sa[b]||0)+1;var S="".concat(b,"-").concat(od(Ei+b+sa[b]));return M?"".concat(M,"-").concat(S):S}(t.displayName,t.parentComponentId):s,g=t.displayName,c=g===void 0?function(w){return aa(w)?"styled.".concat(w):"Styled(".concat(Fg(w),")")}(e):g,v=t.displayName&&t.componentId?"".concat(Zu(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var A=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;k=function(w,M){return A(w,M)&&E(w,M)}}else k=A}var d=new fv(n,v,r?o.componentStyle:void 0);function m(w,M){return function(b,S,I){var z=b.attrs,_=b.componentStyle,q=b.defaultProps,ee=b.foldedComponentIds,me=b.styledComponentId,de=b.target,se=p.useContext(So),we=ms(),ke=b.shouldForwardProp||we.shouldForwardProp,$=ed(S,se,q)||Cr,R=function(K,B,W){for(var Ee,N=$e($e({},B),{className:void 0,theme:W}),F=0;F<K.length;F+=1){var H=Ln(Ee=K[F])?Ee(N):Ee;for(var Z in H)N[Z]=Z==="className"?$n(N[Z],H[Z]):Z==="style"?$e($e({},N[Z]),H[Z]):H[Z]}return B.className&&(N.className=$n(N.className,B.className)),N}(z,S,$),O=R.as||de,G={};for(var Q in R)R[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&R.theme===$||(Q==="forwardedAs"?G.as=R.forwardedAs:ke&&!ke(Q,O)||(G[Q]=R[Q]));var D=function(K,B){var W=ms(),Ee=K.generateAndInjectStyles(B,W.styleSheet,W.stylis);return Ee}(_,R),L=$n(ee,me);return D&&(L+=" "+D),R.className&&(L+=" "+R.className),G[aa(O)&&!td.has(O)?"class":"className"]=L,I&&(G.ref=I),y.createElement(O,G)}(f,w,M)}m.displayName=c;var f=p.forwardRef(m);return f.attrs=x,f.componentStyle=d,f.displayName=c,f.shouldForwardProp=k,f.foldedComponentIds=r?$n(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=v,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(M){for(var b=[],S=1;S<arguments.length;S++)b[S-1]=arguments[S];for(var I=0,z=b;I<z.length;I++)hs(M,z[I],!0);return M}({},o.defaultProps,w):w}}),A1(f,function(){return".".concat(f.styledComponentId)}),l&&sd(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function lh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ih=function(e){return Object.assign(e,{isCss:!0})};function P(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||Eo(e))return ih(mn(lh(Si,bo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mn(r):ih(mn(lh(r,t)))}function ds(e,t,n){if(n===void 0&&(n=Cr),!t)throw Bn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,P.apply(void 0,bo([o],l,!1)))};return r.attrs=function(o){return ds(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ds(e,t,$e($e({},n),o))},r}var pd=function(e){return ds(gv,e)},C=pd;td.forEach(function(e){C[e]=pd(e)});var vv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=fd(t),Jl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(us(mn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Jl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function yv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=P.apply(void 0,bo([e],t,!1)),o="sc-global-".concat(od(JSON.stringify(r))),l=new vv(r,o),i=function(s){var u=ms(),g=p.useContext(So),c=p.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,g,u.stylis),p.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,g,u.stylis),function(){return l.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,c,v){if(l.isStatic)l.renderStyles(s,Dg,g,v);else{var x=$e($e({},u),{theme:ed(u,c,i.defaultProps)});l.renderStyles(s,x,g,v)}}return p.memo(i)}const M1="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",b1="inset 2px 2px 3px rgba(0,0,0,0.2)",kt=()=>P`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,At=({background:e="material",color:t="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Oo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>P`
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
`,zn=()=>P`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Yn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},xv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?M1:!1,o?b1:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>xv({theme:r,topLeftInner:Yn[t][n.topLeftInner],bottomRightInner:Yn[t][n.bottomRightInner],hasShadow:o})};
  `},$r=()=>P`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,wv=e=>Buffer.from(e).toString("base64"),kv=typeof btoa<"u"?btoa:wv,tl=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${kv(n)})`},E1=(e="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Oo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${At()}
    ${e==="flat"?zn():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${At()}
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
    background-image: ${({theme:t})=>tl(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>tl(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>tl(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>tl(t.materialText,0)};
  }
`,Av=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Mv=y.forwardRef(({children:e,underline:t=!0,...n},r)=>p.createElement(Av,{ref:r,underline:t,...n},e));Mv.displayName="Anchor";const bv=C.header`
  ${pe()};
  ${At()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,gd=y.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>p.createElement(bv,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));gd.displayName="AppBar";const Vn=()=>{};function jn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Ev(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function ah(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Ev(t)))}function gn(e){return typeof e=="number"?`${e}px`:e}const Sv=C.div`
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
`,Cv=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,$v=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>p.createElement(Sv,{noBorder:n,ref:a,size:gn(r),square:o,src:l,...i},l?p.createElement(Cv,{src:l,alt:e}):t));$v.displayName="Avatar";const Pe={sm:"28px",md:"36px",lg:"44px"},jv=P`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Pe[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Pe[t]:"auto"};
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
`,Ci=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?P`
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
        `:o==="menu"||o==="thin"?P`
          ${At()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&pe({style:"buttonThin"})}
          }
          &:active {
            ${!t&&pe({style:"buttonThinPressed"})}
          }
          ${e&&pe({style:"buttonThinPressed"})}
          ${t&&kt()}
        `:P`
          ${At()};
          border: none;
          ${t&&kt()}
          ${e?Oo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?P`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:P`
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
  ${jv}
`,Y=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Vn,primary:u=!1,variant:g="default",...c},v)=>p.createElement(Ci,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:l,square:i,type:r,variant:g,...c},n));Y.displayName="Button";function vn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=y.useState(e),u=y.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,u]}const fs=C.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Pe[e.size]};
  width: ${e=>e.square?Pe[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Pe[e.size]};
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
  ${e=>e.$disabled&&kt()}
`,vd=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>p.createElement(fs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));vd.displayName="MenuListItem";const yd=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${pe({style:"window"})}
  ${At()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;yd.displayName="MenuList";const jt=20,Zl=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,S1=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&kt()}

  ${fs} & {
    margin: 0;
    height: 100%;
  }
  ${fs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&P`
        color: ${t.materialTextInvert};
      `};
  }
`,C1=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Zl}:focus ~ & {
    ${$r}
  }
  ${Zl}:not(:disabled) ~ &:active {
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
    ${e=>e.shadow&&`box-shadow:${b1};`}
  }
`,Nv=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${E1()}
`,Co=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>p.createElement(Nt,{ref:r,shadow:t,...n},p.createElement(Nv,null,e)));Co.displayName="ScrollView";const xd=P`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Iv=C(Nt)`
  ${xd}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Rv=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${xd}
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
`,Tv=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Oo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Ov={flat:Rv,default:Iv},_v=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Vn,style:a={},value:s,variant:u="default",...g},c)=>{var v;const[x,k]=vn({defaultValue:n,onChange:i,readOnly:(v=g.readOnly)!==null&&v!==void 0?v:r,value:e}),A=y.useCallback(m=>{const f=m.target.checked;k(f),i(m)},[i,k]),E=Ov[u];let d=null;return o?d=Tv:x&&(d=Pv),p.createElement(S1,{$disabled:r,className:t,style:a},p.createElement(Zl,{disabled:r,onChange:r?void 0:A,readOnly:r,type:"checkbox",value:s,checked:x,"data-indeterminate":o,ref:c,...g}),p.createElement(E,{$disabled:r,role:"presentation"},d&&p.createElement(d,{$disabled:r,variant:u})),l&&p.createElement(C1,null,l))});_v.displayName="Checkbox";const $1=C.div`
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
`;$1.displayName="Separator";const Dv=C(Ci)`
  padding-left: 8px;
`,Lv=C($1)`
  height: 21px;
  position: relative;
  top: 0;
`,wd=C.input`
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
`,Bv=C.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?P`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:P`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${wd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${$r}
    outline-offset: -8px;
  }
`,zv=C.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?P`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:P`
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
`,Fv=y.forwardRef(({value:e,defaultValue:t,onChange:n=Vn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=vn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=c=>{const v=c.target.value;u(v),n(c)};return p.createElement(Dv,{disabled:r,as:"div",variant:o,size:"md"},p.createElement(wd,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),p.createElement(Bv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&p.createElement(Lv,{orientation:"vertical"}),p.createElement(zv,{$disabled:r,variant:o}))});Fv.displayName="ColorInput";const Uv=C.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>P`
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
      ${Oo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,sh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Qv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Wv({digit:e=0,pixelSize:t=2,...n}){const r=Qv[Number(e)].map((o,l)=>o?`${sh[l]} active`:sh[l]);return p.createElement(Uv,{pixelSize:t,...n},r.map((o,l)=>p.createElement("span",{className:o,key:l})))}const Hv=C.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Vv={sm:1,md:2,lg:3,xl:4},Gv=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return p.createElement(Hv,{ref:o,...r},l.map((i,a)=>p.createElement(Wv,{digit:i,pixelSize:Vv[n],key:a})))});Gv.displayName="Counter";const kd=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Pe.md};
`,Kv=C(Nt).attrs({"data-testid":"variant-default"})`
  ${kd}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Yv=C.div.attrs({"data-testid":"variant-flat"})`
  ${zn()}
  ${kd}
  position: relative;
`,Ad=P`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&kt()}
`,Jv=C.input`
  ${Ad}
  padding: 0 8px;
`,Zv=C.textarea`
  ${Ad}
  padding: 8px;
  resize: none;
  ${({variant:e})=>E1(e)}
`,Md=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Vn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Yv:Kv,g=y.useMemo(()=>{var c;return a.multiline?p.createElement(Zv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):p.createElement(Jv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=a.type)!==null&&c!==void 0?c:"text",variant:i,...a})},[t,r,a,s,i]);return p.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});Md.displayName="TextInput";const Xv=C.div`
  display: inline-flex;
  align-items: center;
`,ps=C(Y)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,qv=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?P`
          height: calc(${Pe.md} - 4px);
        `:P`
          height: ${Pe.md};
          margin-left: 2px;
        `}
`,uh=C.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${ps}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?P`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,bd=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:g="default",width:c,...v},x)=>{const[k,A]=vn({defaultValue:t,onChange:l,readOnly:i,value:u}),E=y.useCallback(b=>{const S=parseFloat(b.target.value);A(S)},[A]),d=y.useCallback(b=>{const S=jn(parseFloat(((k??0)+b).toFixed(2)),o??null,r??null);A(S),l==null||l(S)},[r,o,l,A,k]),m=y.useCallback(()=>{k!==void 0&&(l==null||l(k))},[l,k]),f=y.useCallback(()=>{d(a)},[d,a]),w=y.useCallback(()=>{d(-a)},[d,a]),M=g==="flat"?"flat":"raised";return p.createElement(Xv,{className:e,style:{...s,width:c!==void 0?gn(c):"auto"},...v},p.createElement(Md,{value:k,variant:g,onChange:E,disabled:n,type:"number",readOnly:i,ref:x,fullWidth:!0,onBlur:m}),p.createElement(qv,{variant:g},p.createElement(ps,{"data-testid":"increment",variant:M,disabled:n||i,onClick:f},p.createElement(uh,{invert:!0})),p.createElement(ps,{"data-testid":"decrement",variant:M,disabled:n||i,onClick:w},p.createElement(uh,null))))});bd.displayName="NumberInput";function ey(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Ed=e=>y.useMemo(()=>ey(),[e]),Sd=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Cd=P`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,j1=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,ty=C.div`
  ${Sd}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${j1}:focus & {
    ${Cd}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,$d=P`
  height: ${Pe.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?kt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,ny=C(Nt)`
  ${$d}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,ry=C.div`
  ${zn()}
  ${$d}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,oy=C.select`
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
  ${Sd}
  cursor: pointer;
  &:disabled {
    ${kt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,jd=C(Ci).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?P`
          height: 100%;
          margin-right: 0;
        `:P`
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
  ${jd}:active & {
    margin-top: 2px;
  }
`,iy=C.ul`
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
  ${({variant:e="default"})=>e==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>E1(e)}
`,ay=C.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Pe.md} - 4px);
  line-height: calc(${Pe.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Cd:""}
  user-select: none;
`,sy=[],Nd=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=sy,readOnly:i,style:a,value:s,variant:u,width:g})=>{var c;const v=y.useMemo(()=>l.filter(Boolean),[l]),[x,k]=vn({defaultValue:t??((c=v==null?void 0:v[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:i,value:s}),A=!(n||i),E=y.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),d=y.useMemo(()=>p.createElement(jd,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},p.createElement(ly,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),m=y.useMemo(()=>u==="flat"?ry:ny,[u]);return y.useMemo(()=>({isEnabled:A,options:v,value:x,setValue:k,wrapperProps:E,DropdownButton:d,Wrapper:m}),[d,m,A,v,k,x,E])},uy={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},hy=1e3,cy=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:g,selectRef:c,setValue:v,wrapperRef:x})=>{const k=y.useRef(null),A=y.useRef([]),E=y.useRef(0),d=y.useRef(0),m=y.useRef(),f=y.useRef("search"),w=y.useRef(""),M=y.useRef(),[b,S]=vn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=y.useMemo(()=>{const N=s.findIndex(F=>F.value===g);return E.current=jn(N,0,null),s[N]},[s,g]),[z,_]=y.useState(s[0]),q=y.useCallback(N=>{const F=k.current,H=A.current[N];if(!H||!F){m.current=N;return}m.current=void 0;const Z=F.clientHeight,ie=F.scrollTop,Ne=F.scrollTop+Z,Ae=H.offsetTop,ot=H.offsetHeight,It=H.offsetTop+H.offsetHeight;Ae<ie&&F.scrollTo(0,Ae),It>Ne&&F.scrollTo(0,Ae-Z+ot),H.focus({preventScroll:!0})},[k]),ee=y.useCallback((N,{scroll:F}={})=>{var H;const Z=s.length-1;let ie;switch(N){case"first":{ie=0;break}case"last":{ie=Z;break}case"next":{ie=jn(d.current+1,0,Z);break}case"previous":{ie=jn(d.current-1,0,Z);break}case"selected":{ie=jn((H=E.current)!==null&&H!==void 0?H:0,0,Z);break}default:ie=N}d.current=ie,_(s[ie]),F&&q(ie)},[d,s,q]),me=y.useCallback(({fromEvent:N})=>{S(!0),ee("selected",{scroll:!0}),i==null||i({fromEvent:N})},[ee,i,S]),de=y.useCallback(()=>{f.current="search",w.current="",clearTimeout(M.current)},[]),se=y.useCallback(({focusSelect:N,fromEvent:F})=>{var H;n==null||n({fromEvent:F}),S(!1),_(s[0]),de(),m.current=void 0,N&&((H=c.current)===null||H===void 0||H.focus())},[de,n,s,c,S]),we=y.useCallback(({fromEvent:N})=>{b?se({focusSelect:!1,fromEvent:N}):me({fromEvent:N})},[se,me,b]),ke=y.useCallback((N,{fromEvent:F})=>{E.current!==N&&(E.current=N,v(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,v]),$=y.useCallback(({focusSelect:N,fromEvent:F})=>{ke(d.current,{fromEvent:F}),se({focusSelect:N,fromEvent:F})},[se,ke]),R=y.useCallback((N,{fromEvent:F,select:H})=>{var Z;switch(f.current==="cycleFirstLetter"&&N!==w.current&&(f.current="search"),N===w.current?f.current="cycleFirstLetter":w.current+=N,f.current){case"search":{let ie=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(w.current))===0});ie<0&&(ie=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(N))===0}),w.current=N),ie>=0&&(H?ke(ie,{fromEvent:F}):ee(ie,{scroll:!0}));break}case"cycleFirstLetter":{const ie=H?(Z=E.current)!==null&&Z!==void 0?Z:-1:d.current;let Ne=s.findIndex((Ae,ot)=>{var It;return ot>ie&&((It=Ae.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(N))===0});Ne<0&&(Ne=s.findIndex(Ae=>{var ot;return((ot=Ae.label)===null||ot===void 0?void 0:ot.toLocaleUpperCase().indexOf(N))===0})),Ne>=0&&(H?ke(Ne,{fromEvent:F}):ee(Ne,{scroll:!0}));break}}clearTimeout(M.current),M.current=setTimeout(()=>{f.current==="search"&&(w.current="")},hy)},[ee,s,ke]),O=y.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=c.current)===null||F===void 0||F.focus(),we({fromEvent:N}),l==null||l(N))},[l,c,we]),G=y.useCallback(N=>{$({focusSelect:!0,fromEvent:N})},[$]),Q=y.useCallback(N=>{const{altKey:F,code:H,ctrlKey:Z,metaKey:ie,shiftKey:Ne}=N,{ARROW_DOWN:Ae,ARROW_UP:ot,END:It,ENTER:kn,ESC:Vt,HOME:Ni,SPACE:Ii,TAB:Pr}=uy,N1=F||Z||ie||Ne;if(!(H===Pr&&(F||Z||ie)||H!==Pr&&N1))switch(H){case Ae:{if(N.preventDefault(),!b){me({fromEvent:N});return}ee("next",{scroll:!0});break}case ot:{if(N.preventDefault(),!b){me({fromEvent:N});return}ee("previous",{scroll:!0});break}case It:{if(N.preventDefault(),!b){me({fromEvent:N});return}ee("last",{scroll:!0});break}case kn:{if(!b)return;N.preventDefault(),$({focusSelect:!0,fromEvent:N});break}case Vt:{if(!b)return;N.preventDefault(),se({focusSelect:!0,fromEvent:N});break}case Ni:{if(N.preventDefault(),!b){me({fromEvent:N});return}ee("first",{scroll:!0});break}case Ii:{N.preventDefault(),b?$({focusSelect:!0,fromEvent:N}):me({fromEvent:N});break}case Pr:{if(!b)return;Ne||N.preventDefault(),$({focusSelect:!Ne,fromEvent:N});break}default:!N1&&H.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),R(H.replace(/^Key/,""),{select:!b,fromEvent:N}))}},[ee,se,b,me,R,$]),D=y.useCallback(N=>{Q(N),o==null||o(N)},[Q,o]),L=y.useCallback(N=>{ee(N)},[ee]),K=y.useCallback(N=>{b||(de(),e==null||e(N))},[de,e,b]),B=y.useCallback(N=>{de(),r==null||r(N)},[de,r]),W=y.useCallback(N=>{k.current=N,m.current!==void 0&&q(m.current)},[q]),Ee=y.useCallback((N,F)=>{A.current[F]=N,m.current===F&&q(m.current)},[q]);return y.useEffect(()=>{if(!b)return()=>{};const N=F=>{var H;const Z=F.target;!((H=x.current)===null||H===void 0)&&H.contains(Z)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[se,b,x]),y.useMemo(()=>({activeOption:z,handleActivateOptionIndex:L,handleBlur:K,handleButtonKeyDown:D,handleDropdownKeyDown:Q,handleFocus:B,handleMouseDown:O,handleOptionClick:G,handleSetDropdownRef:W,handleSetOptionRef:Ee,open:b,selectedOption:I}),[z,L,K,D,B,Q,O,G,W,Ee,b,I])},my=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...g},c)=>{const{isEnabled:v,options:x,setValue:k,value:A,DropdownButton:E,Wrapper:d}=Nd({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),m=y.useCallback(f=>{const w=x.find(M=>M.value===f.target.value);w&&(k(w.value),r==null||r(w,{fromEvent:f}))},[r,x,k]);return p.createElement(d,{className:e,style:{...i,width:u}},p.createElement(j1,null,p.createElement(oy,{...g,disabled:n,onChange:v?m:Vn,ref:c,value:A},x.map((f,w)=>{var M;return p.createElement("option",{key:`${f.value}-${w}`,value:f.value},(M=f.label)!==null&&M!==void 0?M:f.value)})),E))});my.displayName="SelectNative";function dy({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(g=>{i(g,n)},[n,i]),u=Ed();return p.createElement(ay,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function fy({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:c,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:A,onOpen:E,open:d,options:m,readOnly:f,shadow:w=!0,style:M,variant:b="default",value:S,width:I="auto",...z},_){const{isEnabled:q,options:ee,setValue:me,value:de,wrapperProps:se,DropdownButton:we,Wrapper:ke}=Nd({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:m,style:M,readOnly:f,value:S,variant:b,width:I}),$=y.useRef(null),R=y.useRef(null),O=y.useRef(null),{activeOption:G,handleActivateOptionIndex:Q,handleBlur:D,handleButtonKeyDown:L,handleDropdownKeyDown:K,handleFocus:B,handleMouseDown:W,handleOptionClick:Ee,handleSetDropdownRef:N,handleSetOptionRef:F,open:H,selectedOption:Z}=cy({onBlur:g,onChange:c,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:A,onOpen:E,open:d,options:ee,value:de,selectRef:R,setValue:me,wrapperRef:O});y.useImperativeHandle(_,()=>({focus:kn=>{var Vt;(Vt=R.current)===null||Vt===void 0||Vt.focus(kn)},node:$.current,value:String(de)}),[de]);const ie=y.useMemo(()=>Z?typeof l=="function"?l(Z):Z.label:"",[l,Z]),Ne=q?1:void 0,Ae=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ot=Ed(),It=y.useMemo(()=>ee.map((kn,Vt)=>{const Ni=`${de}-${Vt}`,Ii=kn===G,Pr=kn===Z;return p.createElement(dy,{activateOptionIndex:Q,active:Ii,index:Vt,key:Ni,onClick:Ee,option:kn,selected:Pr,setRef:F})}),[G,Q,Ee,F,ee,Z,de]);return p.createElement(ke,{...se,$disabled:o,ref:O,shadow:w,style:{...M,width:I}},p.createElement("input",{name:u,ref:$,type:"hidden",value:String(de),...i}),p.createElement(j1,{"aria-disabled":o,"aria-expanded":H,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&H?ot:void 0,onBlur:D,onFocus:B,onKeyDown:L,onMouseDown:q?W:A,ref:R,role:"button",tabIndex:Ne,...z},p.createElement(ty,null,ie),we),q&&H&&p.createElement(iy,{id:ot,onKeyDown:K,ref:N,role:"listbox",style:Ae,tabIndex:0,variant:b},It))}const Id=y.forwardRef(fy);Id.displayName="Select";const py=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,$o=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return p.createElement(py,{noPadding:n,ref:o,...r},t)});$o.displayName="Toolbar";const gy=C.div`
  padding: 16px;
`,qe=y.forwardRef(function({children:t,...n},r){return p.createElement(gy,{ref:r,...n},t)});qe.displayName="WindowContent";const vy=C.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?P`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:P`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Ci} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,et=y.forwardRef(function({active:t=!0,children:n,...r},o){return p.createElement(vy,{active:t,ref:o,...r},n)});et.displayName="WindowHeader";const yy=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${At()}
`,xy=C.span`
  ${({theme:e})=>P`
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
`,xt=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>p.createElement(yy,{ref:l,shadow:r,...o},e,t&&p.createElement(xy,{"data-testid":"resizeHandle",ref:n})));xt.displayName="Window";const wy=C(Co)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,ky=C.div`
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
`,by=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ey(e,t){return new Date(e,t+1,0).getDate()}function Sy(e,t,n){return new Date(e,t,n).getDay()}function Cy(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const $y=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=y.useState(()=>Cy(t)),{year:s,month:u,day:g}=i,c=y.useCallback(({value:E})=>{a(d=>({...d,month:E}))},[]),v=y.useCallback(E=>{a(d=>({...d,year:E}))},[]),x=y.useCallback(E=>{a(d=>({...d,day:E}))},[]),k=y.useCallback(()=>{const E=[i.year,i.month+1,i.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n(E)},[i.day,i.month,i.year,n]),A=y.useMemo(()=>{const E=Array.from({length:42}),d=Sy(s,u,1);let m=g;const f=Ey(s,u);return m=m<f?m:f,E.forEach((w,M)=>{if(M>=d&&M<f+d){const b=M-d+1;E[M]=p.createElement(Rt,{key:M,onClick:()=>{x(b)}},p.createElement(My,{active:b===m},b))}else E[M]=p.createElement(Rt,{key:M})}),E},[g,x,u,s]);return p.createElement(xt,{className:e,ref:l,shadow:o,style:{margin:20}},p.createElement(et,null,p.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),p.createElement(qe,null,p.createElement($o,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(Id,{options:by,value:u,onChange:c,width:128,menuMaxHeight:200}),p.createElement(bd,{value:s,onChange:v,width:100})),p.createElement(wy,null,p.createElement(ky,null,p.createElement(Rt,null,"S"),p.createElement(Rt,null,"M"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"W"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"F"),p.createElement(Rt,null,"S")),p.createElement(Ay,null,A)),p.createElement($o,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(Y,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),p.createElement(Y,{fullWidth:!0,onClick:n?k:void 0,disabled:!n},"OK"))))});$y.displayName="DatePicker";const jy=e=>{switch(e){case"status":case"well":return P`
        ${pe({style:"status"})}
      `;case"window":case"outside":return P`
        ${pe({style:"window"})}
      `;case"field":return P`
        ${pe({style:"field"})}
      `;default:return P`
        ${pe()}
      `}},Ny=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>jy(e)}
  ${({variant:e})=>At(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Rd=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>p.createElement(Ny,{ref:o,shadow:t,variant:n,...r},e));Rd.displayName="Frame";const Iy=C.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&P`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&kt()}
`,Ry=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Py=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>p.createElement(Iy,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&p.createElement(Ry,{variant:n},e),r));Py.displayName="GroupBox";const Ty=C.div`
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
`;Ty.displayName="Handle";const Oy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_y=C.div`
  display: inline-block;
  height: ${({size:e})=>gn(e)};
  width: ${({size:e})=>gn(e)};
`,Dy=C.span`
  display: block;
  background: ${Oy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ly=y.forwardRef(({size:e=30,...t},n)=>p.createElement(_y,{size:e,ref:n,...t},p.createElement(Dy,null)));Ly.displayName="Hourglass";const By=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,zy=C.div`
  position: relative;
`,Fy=C.div`
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
`,Uy=C(Nt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Qy=C.div`
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
`,Wy=y.forwardRef(({backgroundStyles:e,children:t,...n},r)=>p.createElement(By,{ref:r,...n},p.createElement(zy,null,p.createElement(Fy,null,p.createElement(Uy,{style:e},t)),p.createElement(Qy,null))));Wy.displayName="Monitor";const Hy=C.div`
  display: inline-block;
  height: ${Pe.md};
  width: 100%;
`,Vy=C(Nt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Pd=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Gy=C.div`
  position: relative;
  top: 4px;
  ${Pd}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Ky=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Pd}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Yy=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Td=17,Jy=C.span`
  display: inline-block;
  width: ${Td}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Zy=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=y.useRef(null),[s,u]=y.useState([]),g=y.useCallback(()=>{if(!a.current||n===void 0)return;const c=a.current.getBoundingClientRect().width,v=Math.round(n/100*c/Td);u(Array.from({length:v}))},[n]);return y.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),p.createElement(Hy,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},p.createElement(Vy,{variant:r,shadow:t},r==="default"?p.createElement(p.Fragment,null,p.createElement(Gy,{"data-testid":"defaultProgress1"},i),p.createElement(Ky,{"data-testid":"defaultProgress2",value:n},i)):p.createElement(Yy,{ref:a,"data-testid":"tileProgress"},s.map((c,v)=>p.createElement(Jy,{key:v})))))});Zy.displayName="ProgressBar";const Od=P`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Xy=C(Nt)`
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
`,qy=C.div`
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
`,e2=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,t2={flat:qy,default:Xy},n2=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=t2[i];return p.createElement(S1,{$disabled:n,className:t,style:l},p.createElement(u,{$disabled:n,role:"presentation"},e&&p.createElement(e2,{$disabled:n,variant:i})),p.createElement(Zl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&p.createElement(C1,null,r))});n2.displayName="Radio";const r2=typeof window<"u"?y.useLayoutEffect:y.useEffect;function An(e){const t=y.useRef(e);return r2(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function hh(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function ch(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{hh(e,n),hh(t,n)},[e,t])}let $i=!0,gs=!1,mh;const o2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l2(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&o2[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function i2(e){e.metaKey||e.altKey||e.ctrlKey||($i=!0)}function ua(){$i=!1}function a2(){this.visibilityState==="hidden"&&gs&&($i=!0)}function s2(e){e.addEventListener("keydown",i2,!0),e.addEventListener("mousedown",ua,!0),e.addEventListener("pointerdown",ua,!0),e.addEventListener("touchstart",ua,!0),e.addEventListener("visibilitychange",a2,!0)}function u2(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return $i||l2(t)}function h2(){gs=!0,window.clearTimeout(mh),mh=window.setTimeout(()=>{gs=!1},100)}function c2(){const e=y.useCallback(t=>{const n=Pm.findDOMNode(t);n!=null&&s2(n.ownerDocument)},[]);return{isFocusVisible:u2,onBlurVisible:h2,ref:e}}function m2(e,t,n){return(n-t)*e+t}function nl(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function rl(e){return e&&e.ownerDocument||document}function d2(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const f2=C.div`
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

  ${({orientation:e,size:t})=>e==="vertical"?P`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:P`
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
`,_d=()=>P`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?P`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:P`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,p2=C(Nt)`
  ${_d()}
`,g2=C(Nt)`
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
`,v2=C.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?P`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:P`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?P`
          ${zn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:P`
          ${At()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Oo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,hr=6,y2=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?P`
          right: ${-hr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${hr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:P`
          bottom: ${-hr}px;
          height: ${hr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&P`
      ${kt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,x2=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?P`
          transform: translate(${hr+2}px, ${hr+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,w2=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:c=1,value:v,variant:x="default",...k},A)=>{const E=x==="flat"?g2:p2,d=u==="vertical",[m=o,f]=vn({defaultValue:e,onChange:i??a,value:v}),{isFocusVisible:w,onBlurVisible:M,ref:b}=c2(),[S,I]=y.useState(!1),z=y.useRef(),_=y.useRef(null),q=ch(b,z),ee=ch(A,q),me=An(D=>{w(D)&&I(!0)}),de=An(()=>{S!==!1&&(I(!1),M())}),se=y.useRef(),we=y.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((D,L)=>({label:void 0,value:o+c*L})):Array.isArray(n)?n:[],[n,r,o,c]),ke=An(D=>{const L=(r-o)/10,K=we.map(Ee=>Ee.value),B=K.indexOf(m);let W=0;switch(D.key){case"Home":W=o;break;case"End":W=r;break;case"PageUp":c&&(W=m+L);break;case"PageDown":c&&(W=m-L);break;case"ArrowRight":case"ArrowUp":c?W=m+c:W=K[B+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":c?W=m-c:W=K[B-1]||K[0];break;default:return}D.preventDefault(),c&&(W=ah(W,c,o)),W=jn(W,o,r),f(W),I(!0),i==null||i(W),a==null||a(W)}),$=y.useCallback(D=>{if(!z.current)return 0;const L=z.current.getBoundingClientRect();let K;d?K=(L.bottom-D.y)/L.height:K=(D.x-L.left)/L.width;let B;if(B=m2(K,o,r),c)B=ah(B,c,o);else{const W=we.map(N=>N.value),Ee=d2(W,B);B=W[Ee]}return B=jn(B,o,r),B},[we,r,o,c,d]),R=An(D=>{var L;const K=nl(D,se.current);if(!K)return;const B=$(K);(L=_.current)===null||L===void 0||L.focus(),f(B),I(!0),i==null||i(B)}),O=An(D=>{const L=nl(D,se.current);if(!L)return;const K=$(L);a==null||a(K),se.current=void 0;const B=rl(z.current);B.removeEventListener("mousemove",R),B.removeEventListener("mouseup",O),B.removeEventListener("touchmove",R),B.removeEventListener("touchend",O)}),G=An(D=>{var L;s==null||s(D),D.preventDefault(),(L=_.current)===null||L===void 0||L.focus(),I(!0);const K=nl(D,se.current);if(K){const W=$(K);f(W),i==null||i(W)}const B=rl(z.current);B.addEventListener("mousemove",R),B.addEventListener("mouseup",O)}),Q=An(D=>{var L;D.preventDefault();const K=D.changedTouches[0];K!=null&&(se.current=K.identifier),(L=_.current)===null||L===void 0||L.focus(),I(!0);const B=nl(D,se.current);if(B){const Ee=$(B);f(Ee),i==null||i(Ee)}const W=rl(z.current);W.addEventListener("touchmove",R),W.addEventListener("touchend",O)});return y.useEffect(()=>{const{current:D}=z;D==null||D.addEventListener("touchstart",Q);const L=rl(D);return()=>{D==null||D.removeEventListener("touchstart",Q),L.removeEventListener("mousemove",R),L.removeEventListener("mouseup",O),L.removeEventListener("touchmove",R),L.removeEventListener("touchend",O)}},[O,R,Q]),p.createElement(f2,{$disabled:t,hasMarks:!!we.length,isFocused:S,onMouseDown:G,orientation:u,ref:ee,size:gn(g),...k},p.createElement("input",{disabled:t,name:l,type:"hidden",value:m??0}),we&&we.map(D=>p.createElement(y2,{$disabled:t,"data-testid":"tick",key:D.value/(r-o)*100,orientation:u,style:{[d?"bottom":"left"]:`${(D.value-o)/(r-o)*100}%`}},D.label&&p.createElement(x2,{"aria-hidden":!0,"data-testid":"mark",orientation:u},D.label))),p.createElement(E,{orientation:u,variant:x}),p.createElement(v2,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":m,onBlur:de,onFocus:me,onKeyDown:ke,orientation:u,ref:_,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(m-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:x}))});w2.displayName="Slider";const k2=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${b1};
  overflow-y: auto;
`,A2=y.forwardRef(function({children:t,...n},r){return p.createElement(k2,{ref:r,...n},t)});A2.displayName="TableBody";const M2=C.td`
  padding: 0 8px;
`,b2=y.forwardRef(function({children:t,...n},r){return p.createElement(M2,{ref:r,...n},t)});b2.displayName="TableDataCell";const E2=C.thead`
  display: table-header-group;
`,S2=y.forwardRef(function({children:t,...n},r){return p.createElement(E2,{ref:r,...n},t)});S2.displayName="TableHead";const C2=C.th`
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
  ${({$disabled:e})=>!e&&P`
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
  ${({$disabled:e})=>e&&kt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&kt()}
  }
`,$2=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Vn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return p.createElement(C2,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},p.createElement("div",null,n))});$2.displayName="TableHeadCell";const j2=C.tr`
  color: inherit;
  display: table-row;
  height: calc(${Pe.md} - 2px);
  line-height: calc(${Pe.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,N2=y.forwardRef(function({children:t,...n},r){return p.createElement(j2,{ref:r,...n},t)});N2.displayName="TableRow";const I2=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,R2=C(Nt)`
  &:before {
    box-shadow: none;
  }
`,P2=y.forwardRef(({children:e,...t},n)=>p.createElement(R2,null,p.createElement(I2,{ref:n,...t},e)));P2.displayName="Table";const T2=C.button`
  ${At()}
  ${pe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Pe.md};
  line-height: ${Pe.md};
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
    height: calc(${Pe.md} + 4px);
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
`,O2=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>p.createElement(T2,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));O2.displayName="Tab";const _2=C.div`
  ${At()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,D2=y.forwardRef(({children:e,...t},n)=>p.createElement(_2,{ref:n,...t},e));D2.displayName="TabBody";const L2=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,B2=C.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function z2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const F2=y.forwardRef(({value:e,onChange:t=Vn,children:n,rows:r=1,...o},l)=>{const i=y.useMemo(()=>{var a;const s=(a=p.Children.map(n,c=>{if(!p.isValidElement(c))return null;const v={selected:c.props.value===e,onClick:t};return p.cloneElement(c,v)}))!==null&&a!==void 0?a:[],u=z2(s,r).map((c,v)=>({key:v,tabs:c})),g=u.findIndex(c=>c.tabs.some(v=>v.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return p.createElement(L2,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>p.createElement(B2,{key:a.key},a.tabs)))});F2.displayName="Tabs";const U2=["blur","focus"],Q2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function dh(e){return"nativeEvent"in e&&U2.includes(e.type)}function fh(e){return"nativeEvent"in e&&Q2.includes(e.type)}const W2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},H2=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${M1};
  text-align: center;
  font-size: 1rem;
  ${e=>W2[e.position]}
`,V2=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,G2=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:c,style:v,text:x,position:k="top",...A},E)=>{const[d,m]=y.useState(!1),[f,w]=y.useState(),[M,b]=y.useState(),S=!n,I=!r,z=$=>{window.clearTimeout(f),window.clearTimeout(M);const R=window.setTimeout(()=>{m(!0),c==null||c($)},o);w(R)},_=$=>{$.persist(),dh($)?s==null||s($):fh($)&&(u==null||u($)),z($)},q=$=>{window.clearTimeout(f),window.clearTimeout(M);const R=window.setTimeout(()=>{m(!1),a==null||a($)},l);b(R)},ee=$=>{$.persist(),dh($)?i==null||i($):fh($)&&(g==null||g($)),q($)},me=S?ee:void 0,de=S?_:void 0,se=I?_:void 0,we=I?ee:void 0,ke=S?0:void 0;return p.createElement(V2,{"data-testid":"tooltip-wrapper",onBlur:me,onFocus:de,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},p.createElement(H2,{className:e,"data-testid":"tooltip",position:k,ref:E,show:d,style:v,...A},x),t)});G2.displayName="Tooltip";const vs=C(C1)`
  white-space: nowrap;
`,Dd=P`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${vs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,K2=C.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&P`
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
`,Y2=C.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?P`
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
        `:P`
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
`,J2=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Z2=C.summary`
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
`,ph=C(S1)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Dd};
`,X2=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function gh(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function vh(e){e.preventDefault()}function Ld({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,g=y.useCallback(c=>{var v,x;const k=!!(c.items&&c.items.length>0),A=n.includes(c.id),E=(v=t||c.disabled)!==null&&v!==void 0?v:!1,d=E?vh:M=>l(M,c),m=E?vh:M=>l(M,c),f=i===c.id,w=p.createElement(X2,{"aria-hidden":!0},c.icon);return p.createElement(Y2,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":A,"aria-selected":f,hasItems:k},k?p.createElement(J2,{open:A},p.createElement(Z2,{onClick:d,$disabled:E},p.createElement(ph,{$disabled:E},w,p.createElement(vs,null,c.label))),A&&p.createElement(Ld,{className:e,disabled:E,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(x=c.items)!==null&&x!==void 0?x:[]})):p.createElement(ph,{as:"button",$disabled:E,onClick:m},w,p.createElement(vs,null,c.label)))},[e,t,n,u,o,l,i,a]);return p.createElement(K2,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function q2({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},g){const[c,v]=vn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[x,k]=vn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),A=y.useCallback((m,f)=>{if(i){const w=gh(c,f);i(m,w)}v(w=>gh(w,f))},[c,i,v]),E=y.useCallback((m,f)=>{k(f),l&&l(m,f)},[l,k]),d=y.useCallback((m,f)=>{m.preventDefault(),E(m,f.id),f.items&&f.items.length&&A(m,f.id)},[E,A]);return p.createElement(Ld,{className:e,disabled:r,expanded:c,level:0,innerRef:g,select:d,selected:x,style:s,tree:u})}const ex=y.forwardRef(q2);ex.displayName="TreeView";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Bd=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...u},g)=>y.createElement("svg",{ref:g,...tx,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${nx(e)}`,a].join(" "),...u},[...t.map(([c,v])=>y.createElement(c,v)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Bd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Bd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ji(){const[e,t]=y.useState(!1);return h.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(Ye,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),h.jsxs("div",{className:"hidden sm:flex",children:[h.jsx(Ye,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),h.jsx(Ye,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),h.jsx(Ye,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),h.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?h.jsx(ox,{size:18}):h.jsx(rx,{size:18})})]}),e&&h.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:h.jsxs("div",{className:"py-1",children:[h.jsx(Ye,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),h.jsx(Ye,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),h.jsx(Ye,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}const lx=""+new URL("oceanic-CaOGPC7J.png",import.meta.url).href,ix=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href,zd=""+new URL("average_percent_difference-DDl9Xwvl.png",import.meta.url).href,zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAMhC1l/wAAAExJREFUGNOVUEEOACAIQr+Wz9a31anGkkNxcsIAtazECxwAYsSMEfMmee8AkJW2CRYxZxx9u27RcVQEz02oopuQO6nOroqrA+3rjy9YWkYx2fiH84QAAAAASUVORK5CYII=",dn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAiWPtoMAAAADZJREFUGNNjZGBg+M9AAOzZu4eRiYFIwALTgUuBi7PLfwYGBgaiTRwKClmQfYYPMO7Zu4coEwGQFAtLFQC+JAAAAABJRU5ErkJggg==";var ax=["variant"];function sx(e,t){if(e==null)return{};var n=ux(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ux(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}var hx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M7 2h9M6 3h1m9 0h1M5 4h1m11 0h1M4 5h1m13 0h1M3 6h1m15 0h11M3 7h1M3 8h1M3 9h1m-1 1h1m-3 1h2m-3 1h1m27 0h1M0 13h1m26 0h1M0 14h1m26 0h1M0 15h1m28 0h1M0 16h1m28 0h1M1 17h1m26 0h1M1 18h1m26 0h1M1 19h1m-1 1h1m0 1h1m26 0h1M2 22h1m26 0h1M2 23h1m-1 1h1m0 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"#fff",d:"M7 3h9M6 4h1M5 5h1M4 6h1M4 7h1m14 0h11M4 8h1M4 9h1m-1 1h1m-4 2h26"}),p.createElement("path",{stroke:"#ff0",d:"M7 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1m0 1h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h25m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M30 7h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1M4 28h27"}),p.createElement("path",{stroke:"olive",d:"M30 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M4 27h27"}))},cx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h12"}),p.createElement("path",{stroke:"#fff",d:"M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h10M1 8h1m0 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#ff0",d:"M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13"}))},mx={"32x32_4":hx,"16x16_4":cx},dx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=sx(t,ax),l=mx[r];return p.createElement(l,o)},fx=["variant"];function px(e,t){if(e==null)return{};var n=gx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}var vx=function(t){return p.createElement("svg",ys({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M30 0h1m-1 1h1m-1 1h1M1 3h28m1 0h1M1 4h1m5 0h1m20 0h1m1 0h1M1 5h7m20 0h1m1 0h1M1 6h1m5 0h1m20 0h3M1 7h7m20 0h1m1 0h2M1 8h1m5 0h1m20 0h1m1 0h1M1 9h7m5 0h2m3 0h1m9 0h1m1 0h1M1 10h1m5 0h1m5 0h2m3 0h1m9 0h1m1 0h1M1 11h7m20 0h1m1 0h1M1 12h1m5 0h1m2 0h5m1 0h1m3 0h5m3 0h1m1 0h2M1 13h7m2 0h1m3 0h1m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1M1 14h1m5 0h1m2 0h1m3 0h1m5 0h1m3 0h1m3 0h1m1 0h1M1 15h7m2 0h5m5 0h5m3 0h1m1 0h1M1 16h1m5 0h1m20 0h1m1 0h1M1 17h7m20 0h1m1 0h1M1 18h1m5 0h1m2 0h2m3 0h6m2 0h2m3 0h1m1 0h1M1 19h7m2 0h2m3 0h1m4 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 20h1m5 0h1m2 0h2m3 0h1m4 0h1m2 0h2m3 0h1m1 0h1M1 21h7m7 0h6m7 0h1m1 0h1M1 22h1m5 0h1m20 0h3M1 23h7m5 0h1m4 0h1m9 0h1m1 0h1M1 24h1m5 0h1m20 0h1m1 0h1M1 25h28m1 0h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"olive",d:"M2 4h5M2 6h5M2 8h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5"}),p.createElement("path",{stroke:"#0f0",d:"M8 4h20M8 5h1m3 0h7m2 0h7M8 6h1m3 0h4m1 0h2m2 0h7M8 7h1m3 0h4m1 0h2m2 0h2m1 0h4M8 8h15m1 0h4M8 9h5m2 0h3m1 0h9M8 10h5m2 0h3m1 0h9M8 11h20M8 12h2m5 0h1m1 0h3m5 0h3M8 13h2m5 0h1m1 0h3m5 0h3M8 14h2m5 0h5m5 0h3M8 15h2m5 0h5m5 0h3M8 16h20M8 17h20M8 18h2m2 0h3m6 0h2m2 0h3M8 19h2m2 0h3m6 0h2m2 0h1m1 0h1M8 20h2m2 0h3m6 0h2m2 0h3M8 21h7m6 0h7M8 22h20M8 23h5m1 0h4m1 0h9M8 24h20"}),p.createElement("path",{stroke:"red",d:"M9 5h3M9 6h3M9 7h3"}),p.createElement("path",{stroke:"gray",d:"M19 5h2m-5 1h1m2 0h2m-5 1h1m2 0h2m2 0h1m5 0h1m-7 1h1m5 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-19 1h3m7 0h3m5 0h1m-19 1h3m7 0h3m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h4m9 0h1m-14 1h4m9 0h1m-1 1h1"}))},yx={"32x32_4":vx},xx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=px(t,fx),l=yx[r];return p.createElement(l,o)},wx=["variant"];function kx(e,t){if(e==null)return{};var n=Ax(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ax(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}var Mx=function(t){return p.createElement("svg",xs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2"}),p.createElement("path",{stroke:"silver",d:"M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1"}),p.createElement("path",{stroke:"#fff",d:"M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1"}),p.createElement("path",{stroke:"#00f",d:"M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9"}),p.createElement("path",{stroke:"#000",d:"M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2"}))},bx={"32x32_4":Mx},Fd=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=kx(t,wx),l=bx[r];return p.createElement(l,o)},Ex=["variant"];function Sx(e,t){if(e==null)return{};var n=Cx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Cx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ql(){return ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ql.apply(this,arguments)}var $x=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M5 0h9M4 1h1m8 0h2M3 2h1m9 0h1m1 0h1m-3 1h1m1 0h1M2 4h1m9 0h1m2 0h1m-4 1h1m2 0h1M1 6h1m9 0h1m3 0h1m-5 1h1m3 0h1M0 8h1m9 0h1m4 0h1m-6 1h1m4 0h1M0 10h10m5 0h1M4 11h1m10 0h1M4 12h1m10 0h1M4 13h1m10 0h1M4 14h1m10 0h1M5 15h10"}),p.createElement("path",{stroke:"gray",d:"M5 1h1m2 0h1m2 0h1m2 13h1"}),p.createElement("path",{stroke:"teal",d:"M6 1h2m1 0h2m1 0h1M3 3h1m1 0h6m1 0h1M5 4h5M2 5h1m8 0h1M1 7h1m8 0h1M0 9h1m8 0h1"}),p.createElement("path",{stroke:"#0ff",d:"M4 2h9M4 3h1m6 0h1M3 4h2m5 0h2M3 5h8M2 6h9M2 7h8M1 8h9M1 9h8"}),p.createElement("path",{stroke:"silver",d:"M14 2h1m-1 1h1m-2 1h2m-2 1h2m-3 1h3m-3 1h3m-4 1h4m-4 1h2m1 0h1m-5 1h5M5 11h10M5 12h7m2 0h1M5 13h10M5 14h9"}),p.createElement("path",{stroke:"#fff",d:"M13 9h1m-2 3h2"}))},jx=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M9 1h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M8 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h3M7 3h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M7 4h1m18 0h1m2 0h1M6 5h1m19 0h1m2 0h1M6 6h1m18 0h1m3 0h1M5 7h1m4 0h10m5 0h1m3 0h1M5 8h1m18 0h1m4 0h1M4 9h1m4 0h10m5 0h1m4 0h1M4 10h1m18 0h1m5 0h1M3 11h1m19 0h1m5 0h1M3 12h1m18 0h1m6 0h1M2 13h1m19 0h1m6 0h1M2 14h1m18 0h1m7 0h1M1 15h1m19 0h1m7 0h1M1 16h1m18 0h1m8 0h1M0 17h1m19 0h1m8 0h1M0 18h1m18 0h1m9 0h1M0 19h1m18 0h1m9 0h1M1 20h18m10 0h1M8 21h1m20 0h1M8 22h1m20 0h1M8 23h1m20 0h1M8 24h1m20 0h1M8 25h1m20 0h1M8 26h1m20 0h1M8 27h1m20 0h1M9 28h1m19 0h1m-20 1h1m17 0h1m-18 1h17"}),p.createElement("path",{stroke:"#fff",d:"M9 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 9h1m-1 1h1m-2 2h2m-2 1h2m-3 2h3m-3 1h3m-4 2h4m-4 1h4m-5 2h5m-5 1h5m-7 2h7M9 27h17"}),p.createElement("path",{stroke:"#0ff",d:"M8 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M9 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M8 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m11 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m11 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M8 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2M7 7h1m1 0h1m11 0h1m1 0h1m2 0h2M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3M5 9h1m1 0h1m11 0h1m1 0h1m3 0h3M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M5 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h1M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m3 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h4m3 0h1m-1 1h1m-9 1h4m4 0h1M9 21h14m4 0h1m-1 1h1M9 23h13m5 0h1M9 24h13m5 0h1m-1 1h1M9 26h11m7 0h1m-2 1h2m-18 1h17"}),p.createElement("path",{stroke:"teal",d:"M26 3h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M1 19h18"}),p.createElement("path",{stroke:"gray",d:"M28 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h3m1 0h1m-1 1h1m-1 1h1m-6 1h4m1 0h1m-1 1h1m-1 1h1m-8 1h6m1 0h1m-1 1h1m-1 1h1m-9 1h7m1 0h1m-1 1h1m-1 1h1M9 22h18m1 0h1m-1 1h1m-1 1h1M9 25h18m1 0h1m-1 1h1m-1 1h1m-2 1h2m-18 1h17"}))},Nx={"16x16_4":$x,"32x32_4":jx},Ix=function(t){var n=t.variant,r=n===void 0?"16x16_4":n,o=Sx(t,Ex),l=Nx[r];return p.createElement(l,o)},Rx=["variant"];function Px(e,t){if(e==null)return{};var n=Tx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}var Ox=function(t){return p.createElement("svg",ws({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M7 1h8M5 2h2m8 0h2M4 3h1m12 0h1M3 4h1m14 0h1m11 0h1M2 5h1m16 0h1m10 0h2M2 6h1m16 0h1m10 0h2M1 7h1m18 0h1m8 0h1m1 0h1M1 8h1m18 0h1m7 0h1m1 0h2M1 9h1m19 0h1m6 0h4M1 10h1m19 0h1m5 0h4M0 11h1m21 0h1m3 0h1m1 0h1M0 12h1m22 0h1m1 0h1m1 0h1M0 13h1m23 0h1m1 0h1M0 14h1m22 0h1m1 0h2M0 15h1m18 0h4m1 0h1m2 0h1M0 16h1m17 0h1m2 0h1m1 0h2m3 0h1M0 17h1m17 0h1m1 0h1m1 0h1m1 0h1m4 0h1M0 18h1m17 0h2m1 0h1m2 0h1m4 0h1M0 19h1m18 0h2m2 0h1m6 0h1M1 20h1m18 0h3m7 0h1M1 21h1m28 0h1M1 22h1m28 0h1M2 23h1m27 0h1M2 24h1m27 0h1M3 25h1m26 0h1M4 26h1m24 0h1M5 27h1m23 0h1M6 28h1m21 0h1M7 29h2m17 0h2M7 30h5m11 0h3M6 31h2m4 0h11"}),p.createElement("path",{stroke:"silver",d:"M7 2h1m6 0h1M8 3h1m1 0h1m1 0h1m1 0h2M5 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m7 0h1m1 0h1M5 6h1m1 0h1m9 0h1M2 7h1m1 0h1m1 0h1m9 0h1m1 0h1M3 8h1m1 0h1m1 0h1m9 0h1M4 9h1m1 0h1m1 0h1m9 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M2 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 13h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h2m3 0h1M2 15h1m7 0h1m1 0h1m1 0h1m1 0h2M3 16h1m5 0h1m1 0h1m1 0h1m1 0h1m10 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h3M3 18h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m9 0h1m1 0h1M2 19h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1M3 20h1m1 0h1m7 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M2 21h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m7 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 24h1m1 0h1m3 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 25h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 26h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M8 27h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M9 28h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m-16 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#fff",d:"M8 2h6M5 3h3M4 4h1M3 5h1M3 6h1M3 7h1m26 0h1M2 8h1m26 0h1M2 9h1m-1 1h1m-2 1h1m25 0h1M1 12h1m24 0h1M1 13h1m23 0h1M1 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 5h1m0 1h1m0 1h1m0 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M9 3h1m1 0h1m1 0h1M6 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 5h1m1 0h1m7 0h1m1 0h1M4 6h1m1 0h1m1 0h1m7 0h1M5 7h1m1 0h1m9 0h1M4 8h1m1 0h1m1 0h1m9 0h1M3 9h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M3 11h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m9 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1M2 16h1m7 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m9 0h1M3 19h1m1 0h1m7 0h1m1 0h1m1 0h1m7 0h1m1 0h1M2 20h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M3 21h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m7 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m5 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 26h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 27h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1M8 28h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"olive",d:"M16 3h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m0 1h1m-5 1h3m-4 1h1m-2 1h1m9 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-11 1h1m10 0h1m-11 1h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h1m-2 1h2m-3 1h2M9 29h1m13 0h3m-14 1h11"}),p.createElement("path",{stroke:"#f0f",d:"M8 5h6M9 6h6M8 7h7m-5 1h6m-4 1h3"}),p.createElement("path",{stroke:"purple",d:"M15 6h1m-1 1h1M9 8h1m6 0h1m-7 1h2m3 0h2m-5 1h4"}),p.createElement("path",{stroke:"#0f0",d:"M5 11h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1"}),p.createElement("path",{stroke:"green",d:"M6 11h1m-2 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h2m-8 1h2m1 0h1m1 0h2m-6 1h5"}),p.createElement("path",{stroke:"#00f",d:"M24 14h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 5h3m-5 1h6m-7 1h8m-8 1h8m-7 1h5"}),p.createElement("path",{stroke:"gray",d:"M25 15h2m-2 1h1M7 28h1"}),p.createElement("path",{stroke:"red",d:"M8 18h3m-4 1h4m-5 1h5m-5 1h6m-5 1h6m-5 1h3"}),p.createElement("path",{stroke:"maroon",d:"M11 19h1m-1 1h1m0 1h1m-7 1h1m6 0h1m-7 1h1m3 0h2m-5 1h3"}),p.createElement("path",{stroke:"navy",d:"M21 24h1m0 1h1m-1 1h1m-9 1h1m5 0h2m-7 1h5"}))},_x={"32x32_4":Ox},Dx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Px(t,Rx),l=_x[r];return p.createElement(l,o)},Lx=["variant"];function Bx(e,t){if(e==null)return{};var n=zx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var Fx=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 9h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 10h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 11h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 12h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 13h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 14h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 15h1m4 0h1m4 0h1m4 0h1m1 0h1m2 0h1m4 0h1m3 0h1M1 16h1m2 0h1m1 0h1m4 0h1m4 0h2m1 0h1m1 0h1m4 0h1m3 0h1M1 17h1m4 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h1m3 0h1M1 18h1m2 0h1m1 0h1m4 0h1m3 0h2m3 0h2m4 0h1m3 0h1M1 19h1m4 0h1m3 0h3m1 0h1m1 0h1m3 0h2m4 0h1m1 0h1m1 0h1M1 20h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h1m4 0h1m4 0h2m2 0h1M1 21h1m4 0h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 22h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h2m2 0h2m3 0h1M1 23h1m4 0h1m1 0h1m2 0h1m4 0h1m4 0h2m1 0h1m1 0h1m3 0h1M1 24h1m2 0h1m1 0h1m1 0h1m2 0h1m4 0h1m4 0h1m1 0h1m2 0h1m3 0h1M1 25h1m4 0h2m3 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 26h1m2 0h1m1 0h23m1 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}))},Ux=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m28 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M1 12h1m28 0h1M1 13h1m28 0h1M1 14h1m28 0h1M1 15h1m28 0h1M1 16h1m28 0h1M1 17h1m28 0h1M1 18h1m28 0h1M1 19h1m28 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M1 23h1m28 0h1M1 24h1m28 0h1M1 25h1m28 0h1M1 26h1m28 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}),p.createElement("path",{stroke:"gray",d:"M31 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 29h30"}),p.createElement("path",{stroke:"#00f",d:"M4 8h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 9h1m4 0h1m4 0h1m4 0h1m4 0h1M4 10h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 11h1m4 0h1m4 0h1m4 0h1m4 0h1M4 12h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 13h1m4 0h1m4 0h1m4 0h1m4 0h1M4 14h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 15h1m4 0h1m4 0h1m4 0h1m4 0h1M4 16h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 17h1m4 0h1m9 0h1m4 0h1M4 18h1m1 0h1m9 0h1m4 0h1m4 0h1M6 19h1m4 0h1m4 0h1m4 0h1m4 0h1M4 20h1m1 0h1m4 0h1m4 0h1m9 0h1M6 21h1m4 0h1m4 0h1M4 22h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 23h1m4 0h1m4 0h1m4 0h1m4 0h1M4 24h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 25h1m4 0h1m4 0h1m4 0h1m4 0h1M4 26h1m2 0h22"}),p.createElement("path",{stroke:"#f0f",d:"M18 15h1m-2 1h1m1 0h1m-4 1h1m2 0h1m-9 1h1m3 0h1m4 0h1m-11 1h1m1 0h1m1 0h1m5 0h1m7 0h1m-19 1h1m2 0h1m7 0h1m5 0h1M9 21h1m11 0h1m4 0h1M9 22h1m12 0h1m2 0h1M8 23h1m13 0h1m1 0h1M8 24h1m14 0h1M7 25h1m-2 1h1"}))},Qx={"32x32_1":Fx,"32x32_4":Ux},Wx=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=Bx(t,Lx),l=Qx[r];return p.createElement(l,o)},Hx=["variant"];function Vx(e,t){if(e==null)return{};var n=Gx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var Kx=function(t){return p.createElement("svg",ti({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M16 0h6m-9 1h3m-5 1h3m-4 1h1M9 4h1M8 5h1M8 6h1m19 0h1M7 7h1m19 0h1m1 0h1M7 8h1m18 0h1m1 0h1M6 9h1m10 0h4m4 0h1m1 0h1m1 0h1M6 10h1m9 0h1m4 0h1m2 0h1m1 0h1m1 0h1m1 0h1M6 11h1m8 0h1m6 0h2m1 0h1m1 0h1m1 0h1M6 12h1m8 0h1m6 0h1M6 13h2m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M6 14h1m1 0h1m1 0h1m1 0h1m1 0h2m6 0h1M6 15h2m1 0h1m1 0h1m1 0h1m2 0h1m4 0h1M6 16h1m1 0h1m1 0h1m1 0h1m4 0h4M3 17h5m1 0h1m1 0h1M2 18h1m4 0h2m1 0h1M1 19h1m6 0h2M0 20h1m7 0h1m-9 1h1m8 0h1M0 22h1m9 0h1m17 0h1M0 23h1m2 0h10m11 0h1m2 0h2M0 24h1m12 0h3m9 0h4M0 25h1m13 0h1m7 0h3m1 0h3M0 26h1m16 0h6m3 0h3M0 27h1m25 0h3M0 28h1m25 0h2M0 29h27"}),p.createElement("path",{stroke:"#ff0",d:"M16 1h3m-3 1h3m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m0 9h1m-2 1h2m-1 1h1m-2 1h2m-1 1h1m-2 1h3m-2 1h2m-3 1h3"}),p.createElement("path",{stroke:"silver",d:"M19 1h3m-3 1h6m-6 1h8m-8 1h8M9 5h2m8 0h7m1 0h1M10 6h2m7 0h6m1 0h1M11 7h2m6 0h5m1 0h1m2 0h1M8 8h2m2 0h2m5 0h4m1 0h1m2 0h1m1 0h1M7 9h5m1 0h2m6 0h1m1 0h1m2 0h1m1 0h1m1 0h1M7 10h6m1 0h2m9 0h1m1 0h1m1 0h1M7 11h7m10 0h1m1 0h1m1 0h1m1 0h1M7 12h8m8 0h8M8 13h1m1 0h1m1 0h1m1 0h1m8 0h8M7 14h1m1 0h1m1 0h1m1 0h1m9 0h8M8 15h1m1 0h1m1 0h1m2 0h1m6 0h9M7 16h1m1 0h1m1 0h1m2 0h1m1 0h1m5 0h9M8 17h1m1 0h1m2 0h1m1 0h4m1 0h1m2 0h7M3 18h4m2 0h1m2 0h1m1 0h4m3 0h1m2 0h6M2 19h6m3 0h1m1 0h6m2 0h1m3 0h4m-19 1h1m1 0h6m4 0h1m3 0h3M2 21h7m2 0h8m3 0h1m4 0h1M2 22h1m8 0h7m5 0h1M2 23h1m10 0h6m4 0h1M2 24h1m13 0h2M2 25h1m22 0h1M2 26h1m3 0h11m6 0h3M2 27h1m3 0h20M2 28h24"}),p.createElement("path",{stroke:"#000",d:"M22 1h3m0 1h2m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-15 1h4m10 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-15 1h4m10 0h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h2m-3 1h1m1 0h1m-5 1h2m2 0h1M3 24h10m9 0h3m4 0h1m-15 1h7m7 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 30h26"}),p.createElement("path",{stroke:"#0ff",d:"M14 2h2m-3 1h3m-2 1h3m-3 1h3M9 6h1m5 0h2M8 7h3m4 0h2m-7 1h2m4 0h1m-5 1h1m0 1h1m0 1h1m6 5h1m-1 1h2m-1 1h2m-2 1h3m-2 1h3m-3 1h4m-3 1h3"}),p.createElement("path",{stroke:"#0f0",d:"M11 3h2m-3 1h4m-3 1h3m-2 1h3m-2 1h2m-1 1h2m-1 1h2m3 9h1m-1 1h1m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h1M3 26h3"}),p.createElement("path",{stroke:"#fff",d:"M27 4h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-3 1h2m-10 5h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1M1 20h7m1 0h1m1 0h1M1 21h1m8 0h1M1 22h1m1 0h7m-9 1h1m-1 1h1m-1 1h1m1 0h11M1 26h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"green",d:"M3 27h3"}))},Yx=function(t){return p.createElement("svg",ti({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M9 1h3M7 2h2m3 0h2M6 3h1M5 4h1M5 5h1m3 0h1m1 0h1M5 6h1M5 7h1m3 0h1m1 0h1M1 8h5M0 9h1m5 0h1m-7 1h1m6 0h2m-9 1h1m12 0h1M0 12h1m12 0h1M0 13h14"}),p.createElement("path",{stroke:"#ff0",d:"M9 2h2M9 3h2M9 4h2m1 4h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 2h1m-1 1h3m-3 1h2m1 0h1M6 5h1m6 0h2M6 6h2m4 0h3M6 7h3m4 0h2M6 8h3m1 0h2M7 9h1m1 0h3M2 10h5m2 0h3m0 1h1M2 12h2m5 0h4"}),p.createElement("path",{stroke:"#0ff",d:"M7 3h2M8 4h1m3 3h1m0 1h2"}),p.createElement("path",{stroke:"#000",d:"M14 3h1m0 1h1m-6 1h1m4 0h1M9 6h1m1 0h1m3 0h1m-6 1h1m4 0h1m-1 1h1m-2 1h1m-3 1h3M4 11h8m2 0h1m-1 1h1m-1 1h1M1 14h13"}),p.createElement("path",{stroke:"#0f0",d:"M6 4h2M7 5h2M8 6h1m3 3h1M2 11h1"}),p.createElement("path",{stroke:"#fff",d:"M13 4h1m-2 1h1M9 8h1M1 9h5m2 0h1m-8 1h1m-1 1h1m-1 1h1m2 0h5"}),p.createElement("path",{stroke:"green",d:"M3 11h1"}))},Jx={"32x32_4":Kx,"16x16_4":Yx},Zx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Vx(t,Hx),l=Jx[r];return p.createElement(l,o)},Xx=["variant"];function qx(e,t){if(e==null)return{};var n=ew(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ew(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var tw=function(t){return p.createElement("svg",ni({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),p.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),p.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),p.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),p.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),p.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),p.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},nw=function(t){return p.createElement("svg",ni({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),p.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),p.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),p.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),p.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},rw={"32x32_4":tw,"16x16_4":nw},ow=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=qx(t,Xx),l=rw[r];return p.createElement(l,o)};function lw(){const[e,t]=y.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=l=>{t({...e,[l]:{...e[l],open:!e[l].open,minimized:!1}})},r=l=>{t({...e,[l]:{...e[l],minimized:!e[l].minimized}})},o=l=>{const i=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[l]:{...e[l],zIndex:i+1}})};return h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${ix})`},children:[h.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(Fd,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(dx,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),h.jsxs(Ye,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(ow,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&h.jsxs(xt,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[h.jsxs(et,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"Welcome to DanielleOS"}),h.jsx("div",{children:h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})})]}),h.jsx(qe,{children:h.jsxs("div",{className:"text-center p-6",children:[h.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),h.jsx("p",{className:"text-lg mb-3",children:"Aspiring Software Engineer"}),h.jsx("p",{className:"italic mb-8",children:"Full-Time Student, Nostalgia Fetishist, and Research Assistant"}),h.jsx(Ye,{to:"/blog",children:h.jsx(Y,{children:"Read More"})})]})})]}),e.about.open&&!e.about.minimized&&h.jsxs(xt,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"About Me"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),h.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),h.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[h.jsx(Y,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),h.jsx(Y,{size:"sm",style:{fontSize:"12px"},children:"React"}),h.jsx(Y,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),h.jsx(Y,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),h.jsx(Y,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(Y,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&h.jsxs(xt,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"My Projects"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Computational Model of Yapese Navigation"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:lx})})]}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Architechural Optimizations for DP-SGD"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:zd})})]})]}),h.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(Y,{children:"View All Projects →"})})})]})]}),h.jsx(gd,{style:{position:"fixed",bottom:0,top:"auto"},children:h.jsxs($o,{style:{justifyContent:"space-between"},children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(Y,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([l,{open:i}])=>i&&h.jsx(Y,{active:!e[l].minimized,onClick:()=>{e[l].minimized?(r(l),o(l)):r(l)},style:{fontSize:"12px",marginRight:"4px"},children:l==="welcome"?"Welcome":l==="about"?"About Me":l==="projects"?"My Projects":"Connect With Me"},l))]}),h.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})]})}const iw=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,aw="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",sw=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,uw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,hw=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,cw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,mw=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,yh=C(xt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,Ur=C.span`
  color: #4b00d9;
  font-weight: bold;
`,Pt=C.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,dw=()=>h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${iw})`},children:[h.jsx("div",{className:"absolute top-24 left-4",children:h.jsx("img",{src:aw,alt:"PMM"})}),h.jsx("div",{className:"absolute mid top-1/2 left-10",children:h.jsx("img",{src:sw,alt:"PMM"})}),h.jsxs("div",{className:"w-full max-w-4xl",children:[h.jsxs(yh,{className:"w-full mb-4",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#ABOUT ME"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[h.jsx("div",{className:"col-span-1",children:h.jsxs(Pt,{children:[h.jsx("img",{src:uw,alt:"Character avatar",className:"w-full"}),h.jsx("img",{src:hw,alt:"Character avatar",className:"w-full mt-2"}),h.jsx("img",{src:cw,alt:"Character avatar",className:"w-full mt-2"})]})}),h.jsxs("div",{className:"col-span-3 grid gap-4",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Pt,{children:[h.jsx(Ur,{children:"NAME:"})," Danielle"]}),h.jsxs(Pt,{children:[h.jsx(Ur,{children:"AGE:"})," 20"]}),h.jsxs(Pt,{children:[h.jsx(Ur,{children:"LOCATION:"})," USA"]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Pt,{children:[h.jsx(Ur,{children:"MBTI:"})," INFJ"]}),h.jsxs(Pt,{className:"col-span-2",children:[h.jsx(Ur,{children:"ASTRO:"})," ♋♏♏"]})]}),h.jsxs(Pt,{children:[h.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),h.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),h.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub Profile ",h.jsx("a",{href:"https://github.com/DanChigo",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),h.jsxs(yh,{className:"w-full",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#INTERESTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs(Pt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),h.jsx("li",{children:"Everything Everywhere All at Once"}),h.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),h.jsxs(Pt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Coding"}),h.jsx("li",{children:"Writing"}),h.jsx("li",{children:"Reading"})]})]})]})})]})]}),h.jsx("div",{className:"absolute bottom-4 right-4",children:h.jsx("img",{src:mw,alt:"strawberry"})})]})]}),xh=C(xt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,fw=C.div`
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
`,pw=C.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`,gw=C.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`,vw=()=>{var i;const[e,t]=y.useState(null),[n,r]=y.useState(!0),o=[{id:"Project oCEANIC",title:"Project oceanic: Computing Environmental Adaptation and Navigation ​in Island Communities",description:"This is a full-stack web application built with React and Node.js.",image:"/api/placeholder/500/300",link:"#",technologies:["React","Node.js","Flask","Python","MERRA-2","ARCGIS"]},{id:"DP-SGD Optimization",title:"GPU Architectural Optimizations for Differentially Private Stochastic Gradient Descent ",description:"A machine learning project focused on balancing privacy with performance.",image:zd,link:"#",technologies:["PyTorch","Accel-Sim","C++"]},{id:"Stock Tracker",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","Firebase"]},{id:"MiniScala Compiler",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],l={"Project oCEANIC":h.jsx(Ix,{variant:"32x32_4"}),"DP-SGD Optimization":h.jsx(xx,{variant:"32x32_4"}),"Stock Tracker":h.jsx(Wx,{variant:"32x32_4"}),"MiniScala Compiler":h.jsx(Dx,{variant:"32x32_4"}),project5:h.jsx(Zx,{variant:"32x32_4"}),project6:h.jsx(Fd,{variant:"32x32_4"})};return h.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[h.jsx(ji,{})," ",h.jsxs(gw,{children:[h.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>h.jsxs(fw,{onClick:()=>t(a.id),children:[h.jsx("div",{children:l[a.id]}),h.jsx(pw,{children:a.id})]},a.id))]}),n&&h.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:h.jsxs(xh,{children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#PROJECTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},onClick:()=>r(!1),children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{className:"bg-white p-4",children:[h.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),h.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsxs(xh,{className:"w-4/5 max-w-4xl",children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:a.title}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},onClick:()=>t(null),children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-white p-4",children:h.jsxs("div",{className:"flex flex-col",children:[h.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),h.jsx("p",{className:"mb-4",children:a.description}),h.jsxs("div",{className:"mb-4",children:[h.jsx("strong",{children:"Technologies:"}),h.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>h.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),h.jsxs("div",{className:"flex justify-end",children:[h.jsx(Y,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),h.jsx(Y,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),h.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[h.jsx(Y,{className:"mr-3",children:h.jsxs("span",{className:"flex items-center text-sm",children:[h.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),h.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&h.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[h.jsx("img",{src:l[e],alt:"Running",className:"w-4 h-4 mr-1"}),(i=o.find(a=>a.id===e))==null?void 0:i.title]})]})]})},yw=""+new URL("lep-DPuAEVX5.png",import.meta.url).href,xw=()=>{const[e,t]=y.useState(null),n=[{title:"First Post",content:"This is the content of the first post.",date:"2023-10-01"},{title:"Second Post",content:"This is the content of the second post.",date:"2023-10-02"},{title:"Third Post",content:"This is the content of the third post.",date:"2023-10-03"},{title:"Fourth Post",content:"This is the content of the fourth post.",date:"2023-10-04"},{title:"Fifth Post",content:"This is the content of the fifth post.",date:"2023-10-05"},{title:"Sixth Post",content:"This is the content of the sixth post.",date:"2023-10-06"},{title:"Seventh Post",content:"This is the content of the seventh post.",date:"2023-10-07"},{title:"Eighth Post",content:"This is the content of the eighth post.",date:"2023-10-08"}],r=["File","Edit","View","Help"];return h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsx("div",{className:"h-screen w-full overflow-hidden relative bg-cover",style:{backgroundImage:`url(${yw})`},children:h.jsxs("div",{className:"flex gap-4 p-5 h-[calc(100vh-20px)]",children:[h.jsx("div",{id:"side panel",className:"flex-1 flex items-center justify-end pr-6",children:h.jsxs(xt,{className:"w-[250px] h-1/2 ",children:[h.jsxs(et,{className:"flex gap-0.5 flex-row items-center justify-between",children:["Entries",h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]}),h.jsx(qe,{className:"",children:h.jsx(Co,{className:"w-[190px] h-[260px] bg-slate-100 p-2",children:h.jsx(yd,{children:n.map((o,l)=>h.jsxs("div",{className:"mb-4 mt-3",children:[h.jsx(vd,{onClick:()=>t(o),style:{width:"138px",padding:"8px",backgroundColor:e===o?"#c3c7cb":"transparent"},children:h.jsxs("div",{className:"flex flex-col w-full",children:[h.jsx("span",{className:"font-bold",children:o.title}),h.jsx("span",{className:"text-[10px]",children:o.date})]})}),l<n.length-1&&h.jsx($1,{style:{margin:"4px 0"}})]},l))})})})]})}),h.jsx("div",{className:"flex-[2] mt-12",children:h.jsxs(xt,{className:"w-[700px] h-full flex items-center justify-center",children:[h.jsxs(et,{className:"flex gap-0.5 flex-row items-center justify-between",children:["Blog",h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(Y,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:zt,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx($o,{children:r.map((o,l)=>h.jsx(Y,{variant:"menu",style:{fontSize:"15px",width:"50px",height:"25px"},children:o.split(" ").map((i,a)=>h.jsxs("span",{children:[h.jsx("span",{style:{textDecoration:"underline"},children:i[0]}),i.slice(1)," "]},a))},l))}),h.jsx(qe,{className:"flex justify-center items-center",children:h.jsx(Rd,{children:h.jsx("div",{className:"h-[500px] w-[650px] bg-slate-100",children:h.jsx("p",{children:"Under construction"})})})})]})}),h.jsx("div",{className:"flex-1 mt-12",children:h.jsxs(xt,{className:"w-3/4 h-5/6",children:[h.jsx(et,{children:"Blog"}),h.jsx(qe,{children:h.jsx(Co,{})})]})})]})})]})};var ww={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},kw=ww;const Aw=wh(kw),Mw=()=>h.jsx("div",{style:{padding:"50px"},children:h.jsxs(xt,{style:{width:"350px"},children:[h.jsx(et,{children:"ScrollView Test"}),h.jsx(qe,{children:h.jsx(Co,{style:{width:"300px",height:"200px"},children:h.jsxs("div",{children:[h.jsx("p",{style:{width:400},children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"})]})})})]})}),bw=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,Ew=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,Sw=yv`
  ${gg}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${bw}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Ew}') format('woff2');
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
`;function Cw(){return h.jsx("div",{children:h.jsxs(pv,{theme:Aw,children:[h.jsx(Sw,{}),h.jsx(mg,{children:h.jsx("div",{className:"min-h-screen",children:h.jsx("main",{children:h.jsxs(lg,{children:[h.jsx(Jn,{path:"/",element:h.jsx(lw,{})}),h.jsx(Jn,{path:"/about",element:h.jsx(dw,{})}),h.jsx(Jn,{path:"/projects",element:h.jsx(vw,{})}),h.jsx(Jn,{path:"/blog",element:h.jsx(xw,{})}),h.jsx(Jn,{path:"/test",element:h.jsx(Mw,{})})]})})})})]})})}Tm(document.getElementById("root")).render(h.jsx(y.StrictMode,{children:h.jsx(Cw,{})}));
