function zd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function yh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xh={exports:{}},ti={},wh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Fd=Symbol.for("react.portal"),Ud=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Yd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),j1=Symbol.iterator;function Zd(e){return e===null||typeof e!="object"?null:(e=j1&&e[j1]||e["@@iterator"],typeof e=="function"?e:null)}var kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mh=Object.assign,bh={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=bh,this.updater=n||kh}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ah(){}Ah.prototype=Cr.prototype;function xs(e,t,n){this.props=e,this.context=t,this.refs=bh,this.updater=n||kh}var ws=xs.prototype=new Ah;ws.constructor=xs;Mh(ws,Cr.prototype);ws.isPureReactComponent=!0;var N1=Array.isArray,Eh=Object.prototype.hasOwnProperty,ks={current:null},Sh={key:!0,ref:!0,__self:!0,__source:!0};function Ch(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Eh.call(t,r)&&!Sh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:So,type:e,key:l,ref:i,props:o,_owner:ks.current}}function Xd(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var I1=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qd(""+e.key):t.toString(36)}function tl(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case So:case Fd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ni(i,0):r,N1(o)?(n="",e!=null&&(n=e.replace(I1,"$&/")+"/"),tl(o,t,n,"",function(u){return u})):o!=null&&(Ms(o)&&(o=Xd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(I1,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",N1(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ni(l,a);i+=tl(l,t,n,s,o)}else if(s=Zd(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ni(l,a++),i+=tl(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function To(e,t,n){if(e==null)return e;var r=[],o=0;return tl(e,r,"","",function(l){return t.call(n,l,o++)}),r}function e0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},nl={transition:null},t0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:nl,ReactCurrentOwner:ks};function $h(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Cr;V.Fragment=Ud;V.Profiler=Wd;V.PureComponent=xs;V.StrictMode=Qd;V.Suspense=Kd;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;V.act=$h;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mh({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ks.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Eh.call(t,s)&&!Sh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:So,type:e.type,key:o,ref:l,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hd,_context:e},e.Consumer=e};V.createElement=Ch;V.createFactory=function(e){var t=Ch.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Gd,render:e}};V.isValidElement=Ms;V.lazy=function(e){return{$$typeof:Jd,_payload:{_status:-1,_result:e},_init:e0}};V.memo=function(e,t){return{$$typeof:Yd,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};V.unstable_act=$h;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";wh.exports=V;var y=wh.exports;const p=yh(y),n0=zd({__proto__:null,default:p},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=y,o0=Symbol.for("react.element"),l0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,a0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function jh(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)i0.call(t,r)&&!s0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:o0,type:e,key:l,ref:i,props:o,_owner:a0.current}}ti.Fragment=l0;ti.jsx=jh;ti.jsxs=jh;xh.exports=ti;var d=xh.exports,Nh={exports:{}},tt={},Ih={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var _=$.length;$.push(P);e:for(;0<_;){var G=_-1>>>1,Q=$[G];if(0<o(Q,P))$[G]=P,$[_]=Q,_=G;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var P=$[0],_=$.pop();if(_!==P){$[0]=_;e:for(var G=0,Q=$.length,D=Q>>>1;G<D;){var L=2*(G+1)-1,K=$[L],B=L+1,W=$[B];if(0>o(K,_))B<Q&&0>o(W,K)?($[G]=W,$[B]=_,G=B):($[G]=K,$[L]=_,G=L);else if(B<Q&&0>o(W,_))$[G]=W,$[B]=_,G=B;else break e}}return P}function o($,P){var _=$.sortIndex-P.sortIndex;return _!==0?_:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],g=1,h=null,v=3,x=!1,k=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=$)r(u),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(u)}}function w($){if(M=!1,f($),!k)if(n(s)!==null)k=!0,we(b);else{var P=n(u);P!==null&&ke(w,P.startTime-$)}}function b($,P){k=!1,M&&(M=!1,m(I),I=-1),x=!0;var _=v;try{for(f(P),h=n(s);h!==null&&(!(h.expirationTime>P)||$&&!X());){var G=h.callback;if(typeof G=="function"){h.callback=null,v=h.priorityLevel;var Q=G(h.expirationTime<=P);P=e.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(s)&&r(s),f(P)}else r(s);h=n(s)}if(h!==null)var D=!0;else{var L=n(u);L!==null&&ke(w,L.startTime-P),D=!1}return D}finally{h=null,v=_,x=!1}}var A=!1,S=null,I=-1,z=5,O=-1;function X(){return!(e.unstable_now()-O<z)}function q(){if(S!==null){var $=e.unstable_now();O=$;var P=!0;try{P=S(!0,$)}finally{P?me():(A=!1,S=null)}}else A=!1}var me;if(typeof c=="function")me=function(){c(q)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=q,me=function(){se.postMessage(null)}}else me=function(){E(q,0)};function we($){S=$,A||(A=!0,me())}function ke($,P){I=E(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,we(b))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var _=v;v=P;try{return $()}finally{v=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var _=v;v=$;try{return P()}finally{v=_}},e.unstable_scheduleCallback=function($,P,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=_+Q,$={id:g++,callback:P,priorityLevel:$,startTime:_,expirationTime:Q,sortIndex:-1},_>G?($.sortIndex=_,t(u,$),n(s)===null&&$===n(u)&&(M?(m(I),I=-1):M=!0,ke(w,_-G))):($.sortIndex=Q,t(s,$),k||x||(k=!0,we(b))),$},e.unstable_shouldYield=X,e.unstable_wrapCallback=function($){var P=v;return function(){var _=v;v=P;try{return $.apply(this,arguments)}finally{v=_}}}})(Ph);Ih.exports=Ph;var u0=Ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=y,et=u0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Th=new Set,no={};function Bn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(no[e]=t,e=0;e<t.length;e++)Th.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P1={},T1={};function m0(e){return sa.call(T1,e)?!0:sa.call(P1,e)?!1:c0.test(e)?T1[e]=!0:(P1[e]=!0,!1)}function d0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,n,r){if(t===null||typeof t>"u"||d0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var bs=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bs,As);Re[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bs,As);Re[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bs,As);Re[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,n,o,r)&&(n=null),r||o===null?m0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Rh=Symbol.for("react.provider"),_h=Symbol.for("react.context"),Cs=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Oh=Symbol.for("react.offscreen"),R1=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=R1&&e[R1]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ii;function Fr(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var Pi=!1;function Ti(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function p0(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Yn:return"Portal";case ua:return"Profiler";case Ss:return"StrictMode";case ha:return"Suspense";case ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _h:return(e.displayName||"Context")+".Consumer";case Rh:return(e._context.displayName||"Context")+".Provider";case Cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=Dh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _o(e){e._valueTracker||(e._valueTracker=v0(e))}function Lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function da(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bh(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function fa(e,t){Bh(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&pa(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function O1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pa(e,t,n){(t!=="number"||yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function D1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ur(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function zh(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function L1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Uh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Qh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function Wh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var x0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,t){if(t){if(x0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,hr=null,cr=null;function B1(e){if(e=jo(e)){if(typeof ka!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ii(t),ka(e.stateNode,e.type,t))}}function Hh(e){hr?cr?cr.push(e):cr=[e]:hr=e}function Vh(){if(hr){var e=hr,t=cr;if(cr=hr=null,B1(e),t)for(e=0;e<t.length;e++)B1(t[e])}}function Gh(e,t){return e(t)}function Kh(){}var Ri=!1;function Yh(e,t,n){if(Ri)return e(t,n);Ri=!0;try{return Gh(e,t,n)}finally{Ri=!1,(hr!==null||cr!==null)&&(Kh(),Vh())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ma=!1;if(zt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Ma=!1}function w0(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Gr=!1,xl=null,wl=!1,ba=null,k0={onError:function(e){Gr=!0,xl=e}};function M0(e,t,n,r,o,l,i,a,s){Gr=!1,xl=null,w0.apply(k0,arguments)}function b0(e,t,n,r,o,l,i,a,s){if(M0.apply(this,arguments),Gr){if(Gr){var u=xl;Gr=!1,xl=null}else throw Error(j(198));wl||(wl=!0,ba=u)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z1(e){if(zn(e)!==e)throw Error(j(188))}function A0(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return z1(o),e;if(l===r)return z1(o),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Zh(e){return e=A0(e),e!==null?Xh(e):null}function Xh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xh(e);if(t!==null)return t;e=e.sibling}return null}var qh=et.unstable_scheduleCallback,F1=et.unstable_cancelCallback,E0=et.unstable_shouldYield,S0=et.unstable_requestPaint,ge=et.unstable_now,C0=et.unstable_getCurrentPriorityLevel,Ns=et.unstable_ImmediatePriority,ec=et.unstable_UserBlockingPriority,kl=et.unstable_NormalPriority,$0=et.unstable_LowPriority,tc=et.unstable_IdlePriority,ni=null,Ct=null;function j0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:P0,N0=Math.log,I0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(N0(e)/I0|0)|0}var Do=64,Lo=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Qr(a):(l&=i,l!==0&&(r=Qr(l)))}else i=n&~o,i!==0?r=Qr(i):l!==0&&(r=Qr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function T0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-gt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=T0(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function _0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oc,Ps,lc,ic,ac,Ea=!1,Bo=[],tn=null,nn=null,rn=null,lo=new Map,io=new Map,Jt=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U1(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Rr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jo(t),t!==null&&Ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function D0(e,t,n,r,o){switch(t){case"focusin":return tn=Rr(tn,e,t,n,r,o),!0;case"dragenter":return nn=Rr(nn,e,t,n,r,o),!0;case"mouseover":return rn=Rr(rn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return lo.set(l,Rr(lo.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,io.set(l,Rr(io.get(l)||null,e,t,n,r,o)),!0}return!1}function sc(e){var t=bn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jh(n),t!==null){e.blockedOn=t,ac(e.priority,function(){lc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wa=r,n.target.dispatchEvent(r),wa=null}else return t=jo(n),t!==null&&Ps(t),e.blockedOn=n,!1;t.shift()}return!0}function Q1(e,t,n){rl(e)&&n.delete(t)}function L0(){Ea=!1,tn!==null&&rl(tn)&&(tn=null),nn!==null&&rl(nn)&&(nn=null),rn!==null&&rl(rn)&&(rn=null),lo.forEach(Q1),io.forEach(Q1)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ea||(Ea=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,L0)))}function ao(e){function t(o){return _r(o,e)}if(0<Bo.length){_r(Bo[0],e);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&_r(tn,e),nn!==null&&_r(nn,e),rn!==null&&_r(rn,e),lo.forEach(t),io.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)sc(n),n.blockedOn===null&&Jt.shift()}var mr=Wt.ReactCurrentBatchConfig,bl=!0;function B0(e,t,n,r){var o=ee,l=mr.transition;mr.transition=null;try{ee=1,Ts(e,t,n,r)}finally{ee=o,mr.transition=l}}function z0(e,t,n,r){var o=ee,l=mr.transition;mr.transition=null;try{ee=4,Ts(e,t,n,r)}finally{ee=o,mr.transition=l}}function Ts(e,t,n,r){if(bl){var o=Sa(e,t,n,r);if(o===null)Hi(e,t,r,Al,n),U1(e,r);else if(D0(o,e,t,n,r))r.stopPropagation();else if(U1(e,r),t&4&&-1<O0.indexOf(e)){for(;o!==null;){var l=jo(o);if(l!==null&&oc(l),l=Sa(e,t,n,r),l===null&&Hi(e,t,r,Al,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Al=null;function Sa(e,t,n,r){if(Al=null,e=js(r),e=bn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Al=e,null}function uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Ns:return 1;case ec:return 4;case kl:case $0:return 16;case tc:return 536870912;default:return 16}default:return 16}}var Xt=null,Rs=null,ol=null;function hc(){if(ol)return ol;var e,t=Rs,n=t.length,r,o="value"in Xt?Xt.value:Xt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return ol=o.slice(e,1<r?1-r:void 0)}function ll(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function W1(){return!1}function nt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zo:W1,this.isPropagationStopped=W1,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=nt($r),$o=ce({},$r,{view:0,detail:0}),F0=nt($o),Oi,Di,Or,ri=ce({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Oi=e.screenX-Or.screenX,Di=e.screenY-Or.screenY):Di=Oi=0,Or=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),H1=nt(ri),U0=ce({},ri,{dataTransfer:0}),Q0=nt(U0),W0=ce({},$o,{relatedTarget:0}),Li=nt(W0),H0=ce({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=nt(H0),G0=ce({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=nt(G0),Y0=ce({},$r,{data:0}),V1=nt(Y0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function Os(){return q0}var ef=ce({},$o,{key:function(e){if(e.key){var t=J0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=nt(ef),nf=ce({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),G1=nt(nf),rf=ce({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),of=nt(rf),lf=ce({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),af=nt(lf),sf=ce({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=nt(sf),hf=[9,13,27,32],Ds=zt&&"CompositionEvent"in window,Kr=null;zt&&"documentMode"in document&&(Kr=document.documentMode);var cf=zt&&"TextEvent"in window&&!Kr,cc=zt&&(!Ds||Kr&&8<Kr&&11>=Kr),K1=" ",Y1=!1;function mc(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function mf(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(Y1=!0,K1);case"textInput":return e=t.data,e===K1&&Y1?null:e;default:return null}}function df(e,t){if(Zn)return e==="compositionend"||!Ds&&mc(e,t)?(e=hc(),ol=Rs=Xt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function fc(e,t,n,r){Hh(r),t=El(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,so=null;function pf(e){Ec(e,0)}function oi(e){var t=er(e);if(Lh(t))return e}function gf(e,t){if(e==="change")return t}var pc=!1;if(zt){var Bi;if(zt){var zi="oninput"in document;if(!zi){var Z1=document.createElement("div");Z1.setAttribute("oninput","return;"),zi=typeof Z1.oninput=="function"}Bi=zi}else Bi=!1;pc=Bi&&(!document.documentMode||9<document.documentMode)}function X1(){Yr&&(Yr.detachEvent("onpropertychange",gc),so=Yr=null)}function gc(e){if(e.propertyName==="value"&&oi(so)){var t=[];fc(t,so,e,js(e)),Yh(pf,t)}}function vf(e,t,n){e==="focusin"?(X1(),Yr=t,so=n,Yr.attachEvent("onpropertychange",gc)):e==="focusout"&&X1()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(so)}function xf(e,t){if(e==="click")return oi(t)}function wf(e,t){if(e==="input"||e==="change")return oi(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:kf;function uo(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!sa.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function q1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=q1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=q1(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yl(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vc(n.ownerDocument.documentElement,n)){if(r!==null&&Ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=eu(n,l);var i=eu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bf=zt&&"documentMode"in document&&11>=document.documentMode,Xn=null,Ca=null,Jr=null,$a=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$a||Xn==null||Xn!==yl(r)||(r=Xn,"selectionStart"in r&&Ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&uo(Jr,r)||(Jr=r,r=El(Ca,"onSelect"),0<r.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Fi={},xc={};zt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function li(e){if(Fi[e])return Fi[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Fi[e]=t[n];return e}var wc=li("animationend"),kc=li("animationiteration"),Mc=li("animationstart"),bc=li("transitionend"),Ac=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Ac.set(e,t),Bn(t,[e])}for(var Ui=0;Ui<nu.length;Ui++){var Qi=nu[Ui],Af=Qi.toLowerCase(),Ef=Qi[0].toUpperCase()+Qi.slice(1);gn(Af,"on"+Ef)}gn(wc,"onAnimationEnd");gn(kc,"onAnimationIteration");gn(Mc,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(bc,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,b0(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ru(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ru(o,a,u),l=s}}}if(wl)throw e=ba,wl=!1,ba=null,e}function re(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(Sc(t,e,2,!1),n.add(r))}function Wi(e,t,n){var r=0;t&&(r|=4),Sc(n,e,r,t)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[Uo]){e[Uo]=!0,Th.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Wi(n,!1,e),Wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uo]||(t[Uo]=!0,Wi("selectionchange",!1,t))}}function Sc(e,t,n,r){switch(uc(t)){case 1:var o=B0;break;case 4:o=z0;break;default:o=Ts}n=o.bind(null,t,n,e),o=void 0,!Ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=bn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Yh(function(){var u=l,g=js(n),h=[];e:{var v=Ac.get(e);if(v!==void 0){var x=_s,k=e;switch(e){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":x=tf;break;case"focusin":k="focus",x=Li;break;case"focusout":k="blur",x=Li;break;case"beforeblur":case"afterblur":x=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=H1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=of;break;case wc:case kc:case Mc:x=V0;break;case bc:x=af;break;case"scroll":x=F0;break;case"wheel":x=uf;break;case"copy":case"cut":case"paste":x=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=G1}var M=(t&4)!==0,E=!M&&e==="scroll",m=M?v!==null?v+"Capture":null:v;M=[];for(var c=u,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,m!==null&&(w=oo(c,m),w!=null&&M.push(co(c,w,f)))),E)break;c=c.return}0<M.length&&(v=new x(v,k,null,n,g),h.push({event:v,listeners:M}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==wa&&(k=n.relatedTarget||n.fromElement)&&(bn(k)||k[Ft]))break e;if((x||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?bn(k):null,k!==null&&(E=zn(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(M=H1,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(M=G1,w="onPointerLeave",m="onPointerEnter",c="pointer"),E=x==null?v:er(x),f=k==null?v:er(k),v=new M(w,c+"leave",x,n,g),v.target=E,v.relatedTarget=f,w=null,bn(g)===u&&(M=new M(m,c+"enter",k,n,g),M.target=f,M.relatedTarget=E,w=M),E=w,x&&k)t:{for(M=x,m=k,c=0,f=M;f;f=Hn(f))c++;for(f=0,w=m;w;w=Hn(w))f++;for(;0<c-f;)M=Hn(M),c--;for(;0<f-c;)m=Hn(m),f--;for(;c--;){if(M===m||m!==null&&M===m.alternate)break t;M=Hn(M),m=Hn(m)}M=null}else M=null;x!==null&&ou(h,v,x,M,!1),k!==null&&E!==null&&ou(h,E,k,M,!0)}}e:{if(v=u?er(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var b=gf;else if(J1(v))if(pc)b=wf;else{b=yf;var A=vf}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=xf);if(b&&(b=b(e,u))){fc(h,b,n,g);break e}A&&A(e,v,u),e==="focusout"&&(A=v._wrapperState)&&A.controlled&&v.type==="number"&&pa(v,"number",v.value)}switch(A=u?er(u):window,e){case"focusin":(J1(A)||A.contentEditable==="true")&&(Xn=A,Ca=u,Jr=null);break;case"focusout":Jr=Ca=Xn=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,tu(h,n,g);break;case"selectionchange":if(bf)break;case"keydown":case"keyup":tu(h,n,g)}var S;if(Ds)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Zn?mc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(cc&&n.locale!=="ko"&&(Zn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Zn&&(S=hc()):(Xt=g,Rs="value"in Xt?Xt.value:Xt.textContent,Zn=!0)),A=El(u,I),0<A.length&&(I=new V1(I,e,null,n,g),h.push({event:I,listeners:A}),S?I.data=S:(S=dc(n),S!==null&&(I.data=S)))),(S=cf?mf(e,n):df(e,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(g=new V1("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:u}),g.data=S))}Ec(h,t)})}function co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=oo(e,n),l!=null&&r.unshift(co(e,l,o)),l=oo(e,t),l!=null&&r.push(co(e,l,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=oo(n,l),s!=null&&i.unshift(co(n,s,a))):o||(s=oo(n,l),s!=null&&i.push(co(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Cf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace($f,"")}function Qo(e,t,n){if(t=lu(t),lu(e)!==t&&n)throw Error(j(425))}function Sl(){}var ja=null,Na=null;function Ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,jf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(If)}:Pa;function If(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),St="__reactFiber$"+jr,mo="__reactProps$"+jr,Ft="__reactContainer$"+jr,Ta="__reactEvents$"+jr,Pf="__reactListeners$"+jr,Tf="__reactHandles$"+jr;function bn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[St])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[St]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ii(e){return e[mo]||null}var Ra=[],tr=-1;function vn(e){return{current:e}}function le(e){0>tr||(e.current=Ra[tr],Ra[tr]=null,tr--)}function ne(e,t){tr++,Ra[tr]=e.current,e.current=t}var dn={},Le=vn(dn),He=vn(!1),In=dn;function gr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Cl(){le(He),le(Le)}function su(e,t,n){if(Le.current!==dn)throw Error(j(168));ne(Le,t),ne(He,n)}function Cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,g0(e)||"Unknown",o));return ce({},n,r)}function $l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,In=Le.current,ne(Le,e),ne(He,He.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Cc(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,le(He),le(Le),ne(Le,e)):le(He),ne(He,n)}var Ot=null,ai=!1,Gi=!1;function $c(e){Ot===null?Ot=[e]:Ot.push(e)}function Rf(e){ai=!0,$c(e)}function yn(){if(!Gi&&Ot!==null){Gi=!0;var e=0,t=ee;try{var n=Ot;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,ai=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),qh(Ns,yn),o}finally{ee=t,Gi=!1}}return null}var nr=[],rr=0,jl=null,Nl=0,lt=[],it=0,Pn=null,Dt=1,Lt="";function kn(e,t){nr[rr++]=Nl,nr[rr++]=jl,jl=e,Nl=t}function jc(e,t,n){lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Pn,Pn=e;var r=Dt;e=Lt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-gt(t)+o|n<<o|r,Lt=l+e}else Dt=1<<l|n<<o|r,Lt=e}function Bs(e){e.return!==null&&(kn(e,1),jc(e,1,0))}function zs(e){for(;e===jl;)jl=nr[--rr],nr[rr]=null,Nl=nr[--rr],nr[rr]=null;for(;e===Pn;)Pn=lt[--it],lt[it]=null,Lt=lt[--it],lt[it]=null,Dt=lt[--it],lt[it]=null}var Ze=null,Je=null,ae=!1,pt=null;function Nc(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(ae){var t=Je;if(t){var n=t;if(!hu(e,t)){if(_a(e))throw Error(j(418));t=on(n.nextSibling);var r=Ze;t&&hu(e,t)?Nc(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ze=e)}}else{if(_a(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Ze=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Wo(e){if(e!==Ze)return!1;if(!ae)return cu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ia(e.type,e.memoizedProps)),t&&(t=Je)){if(_a(e))throw Ic(),Error(j(418));for(;t;)Nc(e,t),t=on(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?on(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=Je;e;)e=on(e.nextSibling)}function vr(){Je=Ze=null,ae=!1}function Fs(e){pt===null?pt=[e]:pt.push(e)}var _f=Wt.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function Pc(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function o(m,c){return m=un(m,c),m.index=0,m.sibling=null,m}function l(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,c,f,w){return c===null||c.tag!==6?(c=ea(f,m.mode,w),c.return=m,c):(c=o(c,f),c.return=m,c)}function s(m,c,f,w){var b=f.type;return b===Jn?g(m,c,f.props.children,w,f.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&mu(b)===c.type)?(w=o(c,f.props),w.ref=Dr(m,c,f),w.return=m,w):(w=ml(f.type,f.key,f.props,null,m.mode,w),w.ref=Dr(m,c,f),w.return=m,w)}function u(m,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ta(f,m.mode,w),c.return=m,c):(c=o(c,f.children||[]),c.return=m,c)}function g(m,c,f,w,b){return c===null||c.tag!==7?(c=jn(f,m.mode,w,b),c.return=m,c):(c=o(c,f),c.return=m,c)}function h(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ea(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ro:return f=ml(c.type,c.key,c.props,null,m.mode,f),f.ref=Dr(m,null,c),f.return=m,f;case Yn:return c=ta(c,m.mode,f),c.return=m,c;case Kt:var w=c._init;return h(m,w(c._payload),f)}if(Ur(c)||Pr(c))return c=jn(c,m.mode,f,null),c.return=m,c;Ho(m,c)}return null}function v(m,c,f,w){var b=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:a(m,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ro:return f.key===b?s(m,c,f,w):null;case Yn:return f.key===b?u(m,c,f,w):null;case Kt:return b=f._init,v(m,c,b(f._payload),w)}if(Ur(f)||Pr(f))return b!==null?null:g(m,c,f,w,null);Ho(m,f)}return null}function x(m,c,f,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(f)||null,a(c,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return m=m.get(w.key===null?f:w.key)||null,s(c,m,w,b);case Yn:return m=m.get(w.key===null?f:w.key)||null,u(c,m,w,b);case Kt:var A=w._init;return x(m,c,f,A(w._payload),b)}if(Ur(w)||Pr(w))return m=m.get(f)||null,g(c,m,w,b,null);Ho(c,w)}return null}function k(m,c,f,w){for(var b=null,A=null,S=c,I=c=0,z=null;S!==null&&I<f.length;I++){S.index>I?(z=S,S=null):z=S.sibling;var O=v(m,S,f[I],w);if(O===null){S===null&&(S=z);break}e&&S&&O.alternate===null&&t(m,S),c=l(O,c,I),A===null?b=O:A.sibling=O,A=O,S=z}if(I===f.length)return n(m,S),ae&&kn(m,I),b;if(S===null){for(;I<f.length;I++)S=h(m,f[I],w),S!==null&&(c=l(S,c,I),A===null?b=S:A.sibling=S,A=S);return ae&&kn(m,I),b}for(S=r(m,S);I<f.length;I++)z=x(S,m,I,f[I],w),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?I:z.key),c=l(z,c,I),A===null?b=z:A.sibling=z,A=z);return e&&S.forEach(function(X){return t(m,X)}),ae&&kn(m,I),b}function M(m,c,f,w){var b=Pr(f);if(typeof b!="function")throw Error(j(150));if(f=b.call(f),f==null)throw Error(j(151));for(var A=b=null,S=c,I=c=0,z=null,O=f.next();S!==null&&!O.done;I++,O=f.next()){S.index>I?(z=S,S=null):z=S.sibling;var X=v(m,S,O.value,w);if(X===null){S===null&&(S=z);break}e&&S&&X.alternate===null&&t(m,S),c=l(X,c,I),A===null?b=X:A.sibling=X,A=X,S=z}if(O.done)return n(m,S),ae&&kn(m,I),b;if(S===null){for(;!O.done;I++,O=f.next())O=h(m,O.value,w),O!==null&&(c=l(O,c,I),A===null?b=O:A.sibling=O,A=O);return ae&&kn(m,I),b}for(S=r(m,S);!O.done;I++,O=f.next())O=x(S,m,I,O.value,w),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?I:O.key),c=l(O,c,I),A===null?b=O:A.sibling=O,A=O);return e&&S.forEach(function(q){return t(m,q)}),ae&&kn(m,I),b}function E(m,c,f,w){if(typeof f=="object"&&f!==null&&f.type===Jn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ro:e:{for(var b=f.key,A=c;A!==null;){if(A.key===b){if(b=f.type,b===Jn){if(A.tag===7){n(m,A.sibling),c=o(A,f.props.children),c.return=m,m=c;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&mu(b)===A.type){n(m,A.sibling),c=o(A,f.props),c.ref=Dr(m,A,f),c.return=m,m=c;break e}n(m,A);break}else t(m,A);A=A.sibling}f.type===Jn?(c=jn(f.props.children,m.mode,w,f.key),c.return=m,m=c):(w=ml(f.type,f.key,f.props,null,m.mode,w),w.ref=Dr(m,c,f),w.return=m,m=w)}return i(m);case Yn:e:{for(A=f.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(m,c.sibling),c=o(c,f.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=ta(f,m.mode,w),c.return=m,m=c}return i(m);case Kt:return A=f._init,E(m,c,A(f._payload),w)}if(Ur(f))return k(m,c,f,w);if(Pr(f))return M(m,c,f,w);Ho(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(m,c.sibling),c=o(c,f),c.return=m,m=c):(n(m,c),c=ea(f,m.mode,w),c.return=m,m=c),i(m)):n(m,c)}return E}var yr=Pc(!0),Tc=Pc(!1),Il=vn(null),Pl=null,or=null,Us=null;function Qs(){Us=or=Pl=null}function Ws(e){var t=Il.current;le(Il),e._currentValue=t}function Da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Pl=e,Us=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Pl===null)throw Error(j(308));or=e,Pl.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var An=null;function Hs(e){An===null?An=[e]:An.push(e)}function Rc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Hs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Hs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function il(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Is(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tl(e,t,n,r){var o=e.updateQueue;Yt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(l!==null){var h=o.baseState;i=0,g=u=s=null,a=l;do{var v=a.lane,x=a.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,M=a;switch(v=t,x=n,M.tag){case 1:if(k=M.payload,typeof k=="function"){h=k.call(x,h,v);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=M.payload,v=typeof k=="function"?k.call(x,h,v):k,v==null)break e;h=ce({},h,v);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=x,s=h):g=g.next=x,i|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(g===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Rn|=i,e.lanes=i,e.memoizedState=h}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var No={},$t=vn(No),fo=vn(No),po=vn(No);function En(e){if(e===No)throw Error(j(174));return e}function Gs(e,t){switch(ne(po,t),ne(fo,e),ne($t,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=va(t,e)}le($t),ne($t,t)}function xr(){le($t),le(fo),le(po)}function Oc(e){En(po.current);var t=En($t.current),n=va(t,e.type);t!==n&&(ne(fo,e),ne($t,n))}function Ks(e){fo.current===e&&(le($t),le(fo))}var ue=vn(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function Ys(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var al=Wt.ReactCurrentDispatcher,Yi=Wt.ReactCurrentBatchConfig,Tn=0,he=null,be=null,Se=null,_l=!1,Zr=!1,go=0,Of=0;function _e(){throw Error(j(321))}function Js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Zs(e,t,n,r,o,l){if(Tn=l,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=e===null||e.memoizedState===null?zf:Ff,e=n(r,o),Zr){l=0;do{if(Zr=!1,go=0,25<=l)throw Error(j(301));l+=1,Se=be=null,t.updateQueue=null,al.current=Uf,e=n(r,o)}while(Zr)}if(al.current=Ol,t=be!==null&&be.next!==null,Tn=0,Se=be=he=null,_l=!1,t)throw Error(j(300));return e}function Xs(){var e=go!==0;return go=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function ht(){if(be===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,be=e;else{if(e===null)throw Error(j(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function vo(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var g=u.lane;if((Tn&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,i=r):s=s.next=h,he.lanes|=g,Rn|=g}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,wt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,he.lanes|=l,Rn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);wt(l,t.memoizedState)||(We=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Dc(){}function Lc(e,t){var n=he,r=ht(),o=t(),l=!wt(r.memoizedState,o);if(l&&(r.memoizedState=o,We=!0),r=r.queue,qs(Fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,yo(9,zc.bind(null,n,r,o,t),void 0,null),je===null)throw Error(j(349));Tn&30||Bc(n,t,o)}return o}function Bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zc(e,t,n,r){t.value=n,t.getSnapshot=r,Uc(t)&&Qc(e)}function Fc(e,t,n){return n(function(){Uc(t)&&Qc(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Qc(e){var t=Ut(e,1);t!==null&&vt(t,e,1,-1)}function pu(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Bf.bind(null,he,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return ht().memoizedState}function sl(e,t,n,r){var o=At();he.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var o=ht();r=r===void 0?null:r;var l=void 0;if(be!==null){var i=be.memoizedState;if(l=i.destroy,r!==null&&Js(r,i.deps)){o.memoizedState=yo(t,n,l,r);return}}he.flags|=e,o.memoizedState=yo(1|t,n,l,r)}function gu(e,t){return sl(8390656,8,e,t)}function qs(e,t){return si(2048,8,e,t)}function Hc(e,t){return si(4,2,e,t)}function Vc(e,t){return si(4,4,e,t)}function Gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kc(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Gc.bind(null,t,e),n)}function e1(){}function Yc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zc(e,t,n){return Tn&21?(wt(n,t)||(n=nc(),he.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Df(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{ee=n,Yi.transition=r}}function Xc(){return ht().memoizedState}function Lf(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qc(e))em(t,n);else if(n=Rc(e,t,n,r),n!==null){var o=ze();vt(n,e,r,o),tm(n,t,r)}}function Bf(e,t,n){var r=sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qc(e))em(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,wt(a,i)){var s=t.interleaved;s===null?(o.next=o,Hs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Rc(e,t,o,r),n!==null&&(o=ze(),vt(n,e,r,o),tm(n,t,r))}}function qc(e){var t=e.alternate;return e===he||t!==null&&t===he}function em(e,t){Zr=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Is(e,n)}}var Ol={readContext:ut,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},zf={readContext:ut,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sl(4194308,4,Gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return sl(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lf.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:e1,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=Df.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=At();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));Tn&30||Bc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,gu(Fc.bind(null,r,l,e),[e]),r.flags|=2048,yo(9,zc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=At(),t=je.identifierPrefix;if(ae){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:ut,useCallback:Yc,useContext:ut,useEffect:qs,useImperativeHandle:Kc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Jc,useReducer:Ji,useRef:Wc,useState:function(){return Ji(vo)},useDebugValue:e1,useDeferredValue:function(e){var t=ht();return Zc(t,be.memoizedState,e)},useTransition:function(){var e=Ji(vo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Lc,useId:Xc,unstable_isNewReconciler:!1},Uf={readContext:ut,useCallback:Yc,useContext:ut,useEffect:qs,useImperativeHandle:Kc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Jc,useReducer:Zi,useRef:Wc,useState:function(){return Zi(vo)},useDebugValue:e1,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:Zc(t,be.memoizedState,e)},useTransition:function(){var e=Zi(vo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Lc,useId:Xc,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=sn(e),l=Bt(r,o);l.payload=t,n!=null&&(l.callback=n),t=ln(e,l,o),t!==null&&(vt(t,e,o,r),il(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=sn(e),l=Bt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ln(e,l,o),t!==null&&(vt(t,e,o,r),il(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=sn(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=ln(e,o,r),t!==null&&(vt(t,e,r,n),il(t,e,r))}};function vu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,l):!0}function nm(e,t,n){var r=!1,o=dn,l=t.contextType;return typeof l=="object"&&l!==null?l=ut(l):(o=Ve(t)?In:Le.current,r=t.contextTypes,l=(r=r!=null)?gr(e,o):dn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Ba(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Vs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ut(l):(l=Ve(t)?In:Le.current,o.context=gr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(La(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ui.enqueueReplaceState(o,o.state,null),Tl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var n="",r=t;do n+=p0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function rm(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ll||(Ll=!0,Ja=r),za(e,t)},n}function om(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){za(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=rp.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var Wf=Wt.ReactCurrentOwner,We=!1;function Be(e,t,n,r){t.child=e===null?Tc(t,null,n,r):yr(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var l=t.ref;return dr(t,o),r=Zs(e,t,n,r,l,o),n=Xs(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&n&&Bs(t),t.flags|=1,Be(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!s1(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,lm(e,t,l,r,o)):(e=ml(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(i,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=un(l,r),e.ref=t.ref,e.return=t,t.child=e}function lm(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(uo(l,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Fa(e,t,n,r,o)}function im(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ir,Ye),Ye|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(ir,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ne(ir,Ye),Ye|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ne(ir,Ye),Ye|=r;return Be(e,t,o,n),t.child}function am(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fa(e,t,n,r,o){var l=Ve(n)?In:Le.current;return l=gr(t,l),dr(t,o),n=Zs(e,t,n,r,l,o),r=Xs(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&r&&Bs(t),t.flags|=1,Be(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(Ve(n)){var l=!0;$l(t)}else l=!1;if(dr(t,o),t.stateNode===null)ul(e,t),nm(t,n,r),Ba(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?In:Le.current,u=gr(t,u));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&yu(t,i,r,u),Yt=!1;var v=t.memoizedState;i.state=v,Tl(t,r,i,o),s=t.memoizedState,a!==r||v!==s||He.current||Yt?(typeof g=="function"&&(La(t,n,g,r),s=t.memoizedState),(a=Yt||vu(t,n,a,r,v,s,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,_c(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),i.props=u,h=t.pendingProps,v=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ve(n)?In:Le.current,s=gr(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||v!==s)&&yu(t,i,r,s),Yt=!1,v=t.memoizedState,i.state=v,Tl(t,r,i,o);var k=t.memoizedState;a!==h||v!==k||He.current||Yt?(typeof x=="function"&&(La(t,n,x,r),k=t.memoizedState),(u=Yt||vu(t,n,u,r,v,k,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ua(e,t,n,r,l,o)}function Ua(e,t,n,r,o,l){am(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&uu(t,n,!1),Qt(e,t,l);r=t.stateNode,Wf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=yr(t,e.child,null,l),t.child=yr(t,null,a,l)):Be(e,t,a,l),t.memoizedState=r.state,o&&uu(t,n,!0),t.child}function sm(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Gs(e,t.containerInfo)}function Eu(e,t,n,r,o){return vr(),Fs(o),t.flags|=256,Be(e,t,n,r),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function um(e,t,n){var r=t.pendingProps,o=ue.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ue,o&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=mi(i,r,0,null),e=jn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Wa(n),t.memoizedState=Qa,e):t1(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Hf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=un(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=un(a,l):(l=jn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Wa(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Qa,r}return l=e.child,e=l.sibling,r=un(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function t1(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vo(e,t,n,r){return r!==null&&Fs(r),yr(t,e.child,null,n),e=t1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Xi(Error(j(422))),Vo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=mi({mode:"visible",children:r.children},o,0,null),l=jn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&yr(t,e.child,null,i),t.child.memoizedState=Wa(i),t.memoizedState=Qa,l);if(!(t.mode&1))return Vo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(j(419)),r=Xi(l,r,void 0),Vo(e,t,i,r)}if(a=(i&e.childLanes)!==0,We||a){if(r=je,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ut(e,o),vt(r,e,o,-1))}return a1(),r=Xi(Error(j(421))),Vo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=op.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Je=on(o.nextSibling),Ze=t,ae=!0,pt=null,e!==null&&(lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Pn,Dt=e.id,Lt=e.overflow,Pn=t),t=t1(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Da(e.return,t,n)}function qi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function hm(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Rl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qi(t,!0,n,null,l);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vf(e,t,n){switch(t.tag){case 3:sm(t),vr();break;case 5:Oc(t);break;case 1:Ve(t.type)&&$l(t);break;case 4:Gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Il,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?um(e,t,n):(ne(ue,ue.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,im(e,t,n)}return Qt(e,t,n)}var cm,Ha,mm,dm;cm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ha=function(){};mm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,En($t.current);var l=null;switch(n){case"input":o=da(e,o),r=da(e,r),l=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":o=ga(e,o),r=ga(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}ya(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};dm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gf(e,t,n){var r=t.pendingProps;switch(zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ve(t.type)&&Cl(),Oe(t),null;case 3:return r=t.stateNode,xr(),le(He),le(Le),Ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(qa(pt),pt=null))),Ha(e,t),Oe(t),null;case 5:Ks(t);var o=En(po.current);if(n=t.type,e!==null&&t.stateNode!=null)mm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Oe(t),null}if(e=En($t.current),Wo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[St]=t,r[mo]=l,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)re(Wr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":_1(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":D1(r,l),re("invalid",r)}ya(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),o=["children",""+a]):no.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&re("scroll",r)}switch(n){case"input":_o(r),O1(r,l,!0);break;case"textarea":_o(r),L1(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Sl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[St]=t,e[mo]=r,cm(e,t,!1,!1),t.stateNode=e;e:{switch(i=xa(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)re(Wr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":_1(e,r),o=da(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":D1(e,r),o=ga(e,r),re("invalid",e);break;default:o=r}ya(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Wh(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uh(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(no.hasOwnProperty(l)?s!=null&&l==="onScroll"&&re("scroll",e):s!=null&&Es(e,l,s,i))}switch(n){case"input":_o(e),O1(e,r,!1);break;case"textarea":_o(e),L1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ur(e,!!r.multiple,l,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)dm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=En(po.current),En($t.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(l=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Oe(t),null;case 13:if(le(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Je!==null&&t.mode&1&&!(t.flags&128))Ic(),vr(),t.flags|=98560,l=!1;else if(l=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[St]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else pt!==null&&(qa(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Ae===0&&(Ae=3):a1())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return xr(),Ha(e,t),e===null&&ho(t.stateNode.containerInfo),Oe(t),null;case 10:return Ws(t.type._context),Oe(t),null;case 17:return Ve(t.type)&&Cl(),Oe(t),null;case 19:if(le(ue),l=t.memoizedState,l===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Lr(l,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Rl(e),i!==null){for(t.flags|=128,Lr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>kr&&(t.flags|=128,r=!0,Lr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return Oe(t),null}else 2*ge()-l.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return i1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Kf(e,t){switch(zs(t),t.tag){case 1:return Ve(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),le(He),le(Le),Ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ks(t),null;case 13:if(le(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ue),null;case 4:return xr(),null;case 10:return Ws(t.type._context),null;case 22:case 23:return i1(),null;case 24:return null;default:return null}}var Go=!1,De=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,R=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Cu=!1;function Jf(e,t){if(ja=bl,e=yc(),Ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,g=0,h=e,v=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(a=i+o),h!==l||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)v=h,h=x;for(;;){if(h===e)break t;if(v===n&&++u===o&&(a=i),v===l&&++g===r&&(s=i),(x=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},bl=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var M=k.memoizedProps,E=k.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?M:dt(t.type,M),E);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return k=Cu,Cu=!1,k}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Va(t,n,l)}o=o.next}while(o!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fm(e){var t=e.alternate;t!==null&&(e.alternate=null,fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[mo],delete t[Ta],delete t[Pf],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pm(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Vt(e,t,n){for(n=n.child;n!==null;)gm(e,t,n),n=n.sibling}function gm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:De||lr(n,t);case 6:var r=Ie,o=ft;Ie=null,Vt(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),ao(e)):Vi(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Vt(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Va(n,t,i),o=o.next}while(o!==r)}Vt(e,t,n);break;case 1:if(!De&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Vt(e,t,n),De=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yf),t.forEach(function(r){var o=lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(j(160));gm(l,i,o),Ie=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}function vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),bt(e),r&4){try{Xr(3,e,e.return),hi(3,e)}catch(M){fe(e,e.return,M)}try{Xr(5,e,e.return)}catch(M){fe(e,e.return,M)}}break;case 1:mt(t,e),bt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(mt(t,e),bt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(M){fe(e,e.return,M)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Bh(o,l),xa(a,i);var u=xa(a,l);for(i=0;i<s.length;i+=2){var g=s[i],h=s[i+1];g==="style"?Wh(o,h):g==="dangerouslySetInnerHTML"?Uh(o,h):g==="children"?ro(o,h):Es(o,g,h,u)}switch(a){case"input":fa(o,l);break;case"textarea":zh(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?ur(o,!!l.multiple,x,!1):v!==!!l.multiple&&(l.defaultValue!=null?ur(o,!!l.multiple,l.defaultValue,!0):ur(o,!!l.multiple,l.multiple?[]:"",!1))}o[mo]=l}catch(M){fe(e,e.return,M)}}break;case 6:if(mt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(M){fe(e,e.return,M)}}break;case 3:if(mt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(M){fe(e,e.return,M)}break;case 4:mt(t,e),bt(e);break;case 13:mt(t,e),bt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(o1=ge())),r&4&&ju(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||g,mt(t,e),De=u):mt(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(h=R=g;R!==null;){switch(v=R,x=v.child,v.tag){case 0:case 11:case 14:case 15:Xr(4,v,v.return);break;case 1:lr(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(M){fe(r,n,M)}}break;case 5:lr(v,v.return);break;case 22:if(v.memoizedState!==null){Iu(h);continue}}x!==null?(x.return=v,R=x):Iu(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Qh("display",i))}catch(M){fe(e,e.return,M)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(M){fe(e,e.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mt(t,e),bt(e),r&4&&ju(e);break;case 21:break;default:mt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pm(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var l=$u(e);Ya(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=$u(e);Ka(e,a,i);break;default:throw Error(j(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,n){R=e,ym(e)}function ym(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Go;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=Go;var u=De;if(Go=i,(De=s)&&!u)for(R=o;R!==null;)i=R,s=i.child,i.tag===22&&i.memoizedState!==null?Pu(o):s!==null?(s.return=i,R=s):Pu(o);for(;l!==null;)R=l,ym(l),l=l.sibling;R=o,Go=a,De=u}Nu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,R=l):Nu(e)}}function Nu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&fu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}De||t.flags&512&&Ga(t)}catch(v){fe(t,t.return,v)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Iu(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Pu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var l=t.return;try{Ga(t)}catch(s){fe(t,l,s)}break;case 5:var i=t.return;try{Ga(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Xf=Math.ceil,Dl=Wt.ReactCurrentDispatcher,n1=Wt.ReactCurrentOwner,st=Wt.ReactCurrentBatchConfig,Y=0,je=null,ye=null,Pe=0,Ye=0,ir=vn(0),Ae=0,xo=null,Rn=0,ci=0,r1=0,qr=null,Qe=null,o1=0,kr=1/0,Rt=null,Ll=!1,Ja=null,an=null,Ko=!1,qt=null,Bl=0,eo=0,Za=null,hl=-1,cl=0;function ze(){return Y&6?ge():hl!==-1?hl:hl=ge()}function sn(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:_f.transition!==null?(cl===0&&(cl=nc()),cl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:uc(e.type)),e):1}function vt(e,t,n,r){if(50<eo)throw eo=0,Za=null,Error(j(185));Co(e,n,r),(!(Y&2)||e!==je)&&(e===je&&(!(Y&2)&&(ci|=n),Ae===4&&Zt(e,Pe)),Ge(e,r),n===1&&Y===0&&!(t.mode&1)&&(kr=ge()+500,ai&&yn()))}function Ge(e,t){var n=e.callbackNode;R0(e,t);var r=Ml(e,e===je?Pe:0);if(r===0)n!==null&&F1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&F1(n),t===1)e.tag===0?Rf(Tu.bind(null,e)):$c(Tu.bind(null,e)),Nf(function(){!(Y&6)&&yn()}),n=null;else{switch(rc(r)){case 1:n=Ns;break;case 4:n=ec;break;case 16:n=kl;break;case 536870912:n=tc;break;default:n=kl}n=Sm(n,xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xm(e,t){if(hl=-1,cl=0,Y&6)throw Error(j(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Ml(e,e===je?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zl(e,r);else{t=r;var o=Y;Y|=2;var l=km();(je!==e||Pe!==t)&&(Rt=null,kr=ge()+500,$n(e,t));do try{tp();break}catch(a){wm(e,a)}while(!0);Qs(),Dl.current=l,Y=o,ye!==null?t=0:(je=null,Pe=0,t=Ae)}if(t!==0){if(t===2&&(o=Aa(e),o!==0&&(r=o,t=Xa(e,o))),t===1)throw n=xo,$n(e,0),Zt(e,r),Ge(e,ge()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!qf(o)&&(t=zl(e,r),t===2&&(l=Aa(e),l!==0&&(r=l,t=Xa(e,l))),t===1))throw n=xo,$n(e,0),Zt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mn(e,Qe,Rt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=o1+500-ge(),10<t)){if(Ml(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pa(Mn.bind(null,e,Qe,Rt),t);break}Mn(e,Qe,Rt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-gt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xf(r/1960))-r,10<r){e.timeoutHandle=Pa(Mn.bind(null,e,Qe,Rt),r);break}Mn(e,Qe,Rt);break;case 5:Mn(e,Qe,Rt);break;default:throw Error(j(329))}}}return Ge(e,ge()),e.callbackNode===n?xm.bind(null,e):null}function Xa(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=zl(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&qa(t)),e}function qa(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!wt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~r1,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if(Y&6)throw Error(j(327));fr();var t=Ml(e,0);if(!(t&1))return Ge(e,ge()),null;var n=zl(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=Xa(e,r))}if(n===1)throw n=xo,$n(e,0),Zt(e,t),Ge(e,ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Qe,Rt),Ge(e,ge()),null}function l1(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(kr=ge()+500,ai&&yn())}}function _n(e){qt!==null&&qt.tag===0&&!(Y&6)&&fr();var t=Y;Y|=1;var n=st.transition,r=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=r,st.transition=n,Y=t,!(Y&6)&&yn()}}function i1(){Ye=ir.current,le(ir)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jf(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:xr(),le(He),le(Le),Ys();break;case 5:Ks(r);break;case 4:xr();break;case 13:le(ue);break;case 19:le(ue);break;case 10:Ws(r.type._context);break;case 22:case 23:i1()}n=n.return}if(je=e,ye=e=un(e.current,null),Pe=Ye=t,Ae=0,xo=null,r1=ci=Rn=0,Qe=qr=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}An=null}return e}function wm(e,t){do{var n=ye;try{if(Qs(),al.current=Ol,_l){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_l=!1}if(Tn=0,Se=be=he=null,Zr=!1,go=0,n1.current=null,n===null||n.return===null){Ae=1,xo=t,ye=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=wu(i);if(x!==null){x.flags&=-257,ku(x,i,a,l,t),x.mode&1&&xu(l,u,t),t=x,s=u;var k=t.updateQueue;if(k===null){var M=new Set;M.add(s),t.updateQueue=M}else k.add(s);break e}else{if(!(t&1)){xu(l,u,t),a1();break e}s=Error(j(426))}}else if(ae&&a.mode&1){var E=wu(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ku(E,i,a,l,t),Fs(wr(s,a));break e}}l=s=wr(s,a),Ae!==4&&(Ae=2),qr===null?qr=[l]:qr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=rm(l,s,t);du(l,m);break e;case 1:a=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(an===null||!an.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=om(l,a,t);du(l,w);break e}}l=l.return}while(l!==null)}bm(n)}catch(b){t=b,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function km(){var e=Dl.current;return Dl.current=Ol,e===null?Ol:e}function a1(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),je===null||!(Rn&268435455)&&!(ci&268435455)||Zt(je,Pe)}function zl(e,t){var n=Y;Y|=2;var r=km();(je!==e||Pe!==t)&&(Rt=null,$n(e,t));do try{ep();break}catch(o){wm(e,o)}while(!0);if(Qs(),Y=n,Dl.current=r,ye!==null)throw Error(j(261));return je=null,Pe=0,Ae}function ep(){for(;ye!==null;)Mm(ye)}function tp(){for(;ye!==null&&!E0();)Mm(ye)}function Mm(e){var t=Em(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?bm(e):ye=t,n1.current=null}function bm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kf(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,ye=null;return}}else if(n=Gf(n,t,Ye),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ae===0&&(Ae=5)}function Mn(e,t,n){var r=ee,o=st.transition;try{st.transition=null,ee=1,np(e,t,n,r)}finally{st.transition=o,ee=r}return null}function np(e,t,n,r){do fr();while(qt!==null);if(Y&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(_0(e,l),e===je&&(ye=je=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,Sm(kl,function(){return fr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=st.transition,st.transition=null;var i=ee;ee=1;var a=Y;Y|=4,n1.current=null,Jf(e,n),vm(n,e),Mf(Na),bl=!!ja,Na=ja=null,e.current=n,Zf(n),S0(),Y=a,ee=i,st.transition=l}else e.current=n;if(Ko&&(Ko=!1,qt=e,Bl=o),l=e.pendingLanes,l===0&&(an=null),j0(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ll)throw Ll=!1,e=Ja,Ja=null,e;return Bl&1&&e.tag!==0&&fr(),l=e.pendingLanes,l&1?e===Za?eo++:(eo=0,Za=e):eo=0,yn(),null}function fr(){if(qt!==null){var e=rc(Bl),t=st.transition,n=ee;try{if(st.transition=null,ee=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Bl=0,Y&6)throw Error(j(331));var o=Y;for(Y|=4,R=e.current;R!==null;){var l=R,i=l.child;if(R.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:Xr(8,g,l)}var h=g.child;if(h!==null)h.return=g,R=h;else for(;R!==null;){g=R;var v=g.sibling,x=g.return;if(fm(g),g===u){R=null;break}if(v!==null){v.return=x,R=v;break}R=x}}}var k=l.alternate;if(k!==null){var M=k.child;if(M!==null){k.child=null;do{var E=M.sibling;M.sibling=null,M=E}while(M!==null)}}R=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,R=i;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Xr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,R=m;break e}R=l.return}}var c=e.current;for(R=c;R!==null;){i=R;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,R=f;else e:for(i=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hi(9,a)}}catch(b){fe(a,a.return,b)}if(a===i){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(Y=o,yn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{ee=n,st.transition=t}}return!1}function Ru(e,t,n){t=wr(n,t),t=rm(e,t,1),e=ln(e,t,1),t=ze(),e!==null&&(Co(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=wr(n,e),e=om(t,e,1),t=ln(t,e,1),e=ze(),t!==null&&(Co(t,1,e),Ge(t,e));break}}t=t.return}}function rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Pe&n)===n&&(Ae===4||Ae===3&&(Pe&130023424)===Pe&&500>ge()-o1?$n(e,0):r1|=n),Ge(e,t)}function Am(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=ze();e=Ut(e,t),e!==null&&(Co(e,t,n),Ge(e,n))}function op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Am(e,n)}function lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Am(e,n)}var Em;Em=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Vf(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&jc(t,Nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ul(e,t),e=t.pendingProps;var o=gr(t,Le.current);dr(t,n),o=Zs(null,t,r,e,o,n);var l=Xs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,$l(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vs(t),o.updater=ui,t.stateNode=o,o._reactInternals=t,Ba(t,r,e,n),t=Ua(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Bs(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ap(r),e=dt(r,e),o){case 0:t=Fa(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=bu(null,t,r,dt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Fa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Au(e,t,r,o,n);case 3:e:{if(sm(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,o=l.element,_c(e,t),Tl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=wr(Error(j(423)),t),t=Eu(e,t,r,n,o);break e}else if(r!==o){o=wr(Error(j(424)),t),t=Eu(e,t,r,n,o);break e}else for(Je=on(t.stateNode.containerInfo.firstChild),Ze=t,ae=!0,pt=null,n=Tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===o){t=Qt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Oc(t),e===null&&Oa(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ia(r,o)?i=null:l!==null&&Ia(r,l)&&(t.flags|=32),am(e,t),Be(e,t,i,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return um(e,t,n);case 4:return Gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Mu(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,ne(Il,r._currentValue),r._currentValue=i,l!==null)if(wt(l.value,i)){if(l.children===o.children&&!He.current){t=Qt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Da(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(j(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Da(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dr(t,n),o=ut(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),bu(e,t,r,o,n);case 15:return lm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ul(e,t),t.tag=1,Ve(r)?(e=!0,$l(t)):e=!1,dr(t,n),nm(t,r,o),Ba(t,r,o,n),Ua(null,t,r,!0,e,n);case 19:return hm(e,t,n);case 22:return im(e,t,n)}throw Error(j(156,t.tag))};function Sm(e,t){return qh(e,t)}function ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new ip(e,t,n,r)}function s1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ap(e){if(typeof e=="function")return s1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cs)return 11;if(e===$s)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ml(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")s1(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Jn:return jn(n.children,o,l,t);case Ss:i=8,o|=8;break;case ua:return e=at(12,n,t,o|2),e.elementType=ua,e.lanes=l,e;case ha:return e=at(13,n,t,o),e.elementType=ha,e.lanes=l,e;case ca:return e=at(19,n,t,o),e.elementType=ca,e.lanes=l,e;case Oh:return mi(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rh:i=10;break e;case _h:i=9;break e;case Cs:i=11;break e;case $s:i=14;break e;case Kt:i=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=at(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=at(22,e,r,t),e.elementType=Oh,e.lanes=n,e.stateNode={isHidden:!1},e}function ea(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ta(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function u1(e,t,n,r,o,l,i,a,s){return e=new sp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=at(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(l),e}function up(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cm(e){if(!e)return dn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Cc(e,n,t)}return t}function $m(e,t,n,r,o,l,i,a,s){return e=u1(n,r,!0,e,o,l,i,a,s),e.context=Cm(null),n=e.current,r=ze(),o=sn(n),l=Bt(r,o),l.callback=t??null,ln(n,l,o),e.current.lanes=o,Co(e,o,r),Ge(e,r),e}function di(e,t,n,r){var o=t.current,l=ze(),i=sn(o);return n=Cm(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(o,t,i),e!==null&&(vt(e,o,i,l),il(e,o,i)),i}function Fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function h1(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function hp(){return null}var jm=typeof reportError=="function"?reportError:function(e){console.error(e)};function c1(e){this._internalRoot=e}fi.prototype.render=c1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));di(e,t,null,null)};fi.prototype.unmount=c1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){di(null,e,null,null)}),t[Ft]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&sc(e)}};function m1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function cp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Fl(i);l.call(u)}}var i=$m(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=i,e[Ft]=i.current,ho(e.nodeType===8?e.parentNode:e),_n(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Fl(s);a.call(u)}}var s=u1(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=s,e[Ft]=s.current,ho(e.nodeType===8?e.parentNode:e),_n(function(){di(t,s,n,r)}),s}function gi(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Fl(i);a.call(s)}}di(t,i,e,o)}else i=cp(n,t,e,o,r);return Fl(i)}oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Is(t,n|1),Ge(t,ge()),!(Y&6)&&(kr=ge()+500,yn()))}break;case 13:_n(function(){var r=Ut(e,1);if(r!==null){var o=ze();vt(r,e,1,o)}}),h1(e,1)}};Ps=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=ze();vt(t,e,134217728,n)}h1(e,134217728)}};lc=function(e){if(e.tag===13){var t=sn(e),n=Ut(e,t);if(n!==null){var r=ze();vt(n,e,t,r)}h1(e,t)}};ic=function(){return ee};ac=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ka=function(e,t,n){switch(t){case"input":if(fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ii(r);if(!o)throw Error(j(90));Lh(r),fa(r,o)}}}break;case"textarea":zh(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};Gh=l1;Kh=_n;var mp={usingClientEntryPoint:!1,Events:[jo,er,ii,Hh,Vh,l1]},Br={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zh(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{ni=Yo.inject(dp),Ct=Yo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m1(t))throw Error(j(200));return up(e,t,null,n)};tt.createRoot=function(e,t){if(!m1(e))throw Error(j(299));var n=!1,r="",o=jm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=u1(e,1,!1,null,null,n,!1,r,o),e[Ft]=t.current,ho(e.nodeType===8?e.parentNode:e),new c1(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Zh(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return _n(e)};tt.hydrate=function(e,t,n){if(!pi(t))throw Error(j(200));return gi(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!m1(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=jm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=$m(t,null,e,1,n??null,o,!1,l,i),e[Ft]=t.current,ho(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fi(t)};tt.render=function(e,t,n){if(!pi(t))throw Error(j(200));return gi(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!pi(e))throw Error(j(40));return e._reactRootContainer?(_n(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};tt.unstable_batchedUpdates=l1;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return gi(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Nh.exports=tt;var Im=Nh.exports,Pm,Du=Im;Pm=Du.createRoot,Du.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const Lu="popstate";function fp(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Fn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),es("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Ul(l))}function r(o,l){d1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return gp(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function d1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pp(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function es(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||r||pp()})}function Ul(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gp(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=en.Pop,s=null,u=g();u==null&&(u=0,i.replaceState(wo({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function h(){a=en.Pop;let E=g(),m=E==null?null:E-u;u=E,s&&s({action:a,location:M.location,delta:m})}function v(E,m){a=en.Push;let c=es(M.location,E,m);n&&n(c,E),u=g()+1;let f=Bu(c,u),w=M.createHref(c);try{i.pushState(f,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}l&&s&&s({action:a,location:M.location,delta:1})}function x(E,m){a=en.Replace;let c=es(M.location,E,m);n&&n(c,E),u=g();let f=Bu(c,u),w=M.createHref(c);i.replaceState(f,"",w),l&&s&&s({action:a,location:M.location,delta:0})}function k(E){let m=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof E=="string"?E:Ul(E);return c=c.replace(/ $/,"%20"),xe(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let M={get action(){return a},get location(){return e(o,i)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Lu,h),s=E,()=>{o.removeEventListener(Lu,h),s=null}},createHref(E){return t(o,E)},createURL:k,encodeLocation(E){let m=k(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:x,go(E){return i.go(E)}};return M}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function vp(e,t,n){return n===void 0&&(n="/"),yp(e,t,n,!1)}function yp(e,t,n,r){let o=typeof t=="string"?Fn(t):t,l=f1(o.pathname||"/",n);if(l==null)return null;let i=Tm(e);xp(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=Np(l);a=$p(i[s],u,r)}return a}function Tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),g=n.concat(s);l.children&&l.children.length>0&&(xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tm(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Sp(u,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Rm(l.path))o(l,i,s)}),t}function Rm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Rm(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function xp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wp=/^:[\w-]+$/,kp=3,Mp=2,bp=1,Ap=10,Ep=-2,Fu=e=>e==="*";function Sp(e,t){let n=e.split("/"),r=n.length;return n.some(Fu)&&(r+=Ep),t&&(r+=Mp),n.filter(o=>!Fu(o)).reduce((o,l)=>o+(wp.test(l)?kp:l===""?bp:Ap),r)}function Cp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function $p(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",h=Uu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),v=s.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=Uu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!h)return null;Object.assign(o,h.params),i.push({params:o,pathname:hn([l,h.pathname]),pathnameBase:Rp(hn([l,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(l=hn([l,h.pathnameBase]))}return i}function Uu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,h)=>{let{paramName:v,isOptional:x}=g;if(v==="*"){let M=a[h]||"";i=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const k=a[h];return x&&!k?u[v]=void 0:u[v]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function jp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),d1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Np(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return d1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function f1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ip(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:Pp(n,t):t,search:_p(r),hash:Op(o)}}function Pp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function na(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _m(e,t){let n=Tp(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Om(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fn(e):(o=wo({},e),xe(!o.pathname||!o.pathname.includes("?"),na("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),na("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),na("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let h=t.length-1;if(!r&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),h-=1;o.pathname=v.join("/")}a=h>=0?t[h]:"/"}let s=Ip(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Rp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_p=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Op=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dm=["post","put","patch","delete"];new Set(Dm);const Lp=["get",...Dm];new Set(Lp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(this,arguments)}const p1=y.createContext(null),Bp=y.createContext(null),Un=y.createContext(null),vi=y.createContext(null),Qn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Lm=y.createContext(null);function zp(e,t){let{relative:n}=t===void 0?{}:t;Io()||xe(!1);let{basename:r,navigator:o}=y.useContext(Un),{hash:l,pathname:i,search:a}=zm(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:hn([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Io(){return y.useContext(vi)!=null}function yi(){return Io()||xe(!1),y.useContext(vi).location}function Bm(e){y.useContext(Un).static||y.useLayoutEffect(e)}function Fp(){let{isDataRoute:e}=y.useContext(Qn);return e?eg():Up()}function Up(){Io()||xe(!1);let e=y.useContext(p1),{basename:t,future:n,navigator:r}=y.useContext(Un),{matches:o}=y.useContext(Qn),{pathname:l}=yi(),i=JSON.stringify(_m(o,n.v7_relativeSplatPath)),a=y.useRef(!1);return Bm(()=>{a.current=!0}),y.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Om(u,JSON.parse(i),l,g.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:hn([t,h.pathname])),(g.replace?r.replace:r.push)(h,g.state,g)},[t,r,i,l,e])}function zm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Un),{matches:o}=y.useContext(Qn),{pathname:l}=yi(),i=JSON.stringify(_m(o,r.v7_relativeSplatPath));return y.useMemo(()=>Om(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Qp(e,t){return Wp(e,t)}function Wp(e,t,n,r){Io()||xe(!1);let{navigator:o,static:l}=y.useContext(Un),{matches:i}=y.useContext(Qn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=yi(),h;if(t){var v;let m=typeof t=="string"?Fn(t):t;u==="/"||(v=m.pathname)!=null&&v.startsWith(u)||xe(!1),h=m}else h=g;let x=h.pathname||"/",k=x;if(u!=="/"){let m=u.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(m.length).join("/")}let M=!l&&n&&n.matches&&n.matches.length>0?n.matches:vp(e,{pathname:k}),E=Yp(M&&M.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:hn([u,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:hn([u,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r);return t&&E?y.createElement(vi.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:en.Pop}},E):E}function Hp(){let e=qp(),t=Dp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const Vp=y.createElement(Hp,null);class Gp extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Qn.Provider,{value:this.props.routeContext},y.createElement(Lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kp(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(p1);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Qn.Provider,{value:t},r)}function Yp(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);g>=0||xe(!1),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let h=i[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=g),h.route.id){let{loaderData:v,errors:x}=n,k=h.route.loader&&v[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||k){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,h,v)=>{let x,k=!1,M=null,E=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,M=h.route.errorElement||Vp,s&&(u<0&&v===0?(k=!0,E=null):u===v&&(k=!0,E=h.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,v+1)),c=()=>{let f;return x?f=M:k?f=E:h.route.Component?f=y.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=g,y.createElement(Kp,{match:h,routeContext:{outlet:g,matches:m,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?y.createElement(Gp,{location:n.location,revalidation:n.revalidation,component:M,error:x,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var Fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fm||{}),Ql=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ql||{});function Jp(e){let t=y.useContext(p1);return t||xe(!1),t}function Zp(e){let t=y.useContext(Bp);return t||xe(!1),t}function Xp(e){let t=y.useContext(Qn);return t||xe(!1),t}function Um(e){let t=Xp(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function qp(){var e;let t=y.useContext(Lm),n=Zp(Ql.UseRouteError),r=Um(Ql.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function eg(){let{router:e}=Jp(Fm.UseNavigateStable),t=Um(Ql.UseNavigateStable),n=y.useRef(!1);return Bm(()=>{n.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ko({fromRouteId:t},l)))},[e,t])}function tg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Kn(e){xe(!1)}function ng(e){let{basename:t="/",children:n=null,location:r,navigationType:o=en.Pop,navigator:l,static:i=!1,future:a}=e;Io()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:l,static:i,future:ko({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Fn(r));let{pathname:g="/",search:h="",hash:v="",state:x=null,key:k="default"}=r,M=y.useMemo(()=>{let E=f1(g,s);return E==null?null:{location:{pathname:E,search:h,hash:v,state:x,key:k},navigationType:o}},[s,g,h,v,x,k,o]);return M==null?null:y.createElement(Un.Provider,{value:u},y.createElement(vi.Provider,{children:n,value:M}))}function rg(e){let{children:t,location:n}=e;return Qp(ts(t),n)}new Promise(()=>{});function ts(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,ts(r.props.children,l));return}r.type!==Kn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ts(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ns.apply(this,arguments)}function og(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function lg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ig(e,t){return e.button===0&&(!t||t==="_self")&&!lg(e)}const ag=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sg="6";try{window.__reactRouterVersion=sg}catch{}const ug="startTransition",Qu=n0[ug];function hg(e){let{basename:t,children:n,future:r,window:o}=e,l=y.useRef();l.current==null&&(l.current=fp({window:o,v5Compat:!0}));let i=l.current,[a,s]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=y.useCallback(h=>{u&&Qu?Qu(()=>s(h)):s(h)},[s,u]);return y.useLayoutEffect(()=>i.listen(g),[i,g]),y.useEffect(()=>tg(r),[r]),y.createElement(ng,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ot=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:g,viewTransition:h}=t,v=og(t,ag),{basename:x}=y.useContext(Un),k,M=!1;if(typeof u=="string"&&mg.test(u)&&(k=u,cg))try{let f=new URL(window.location.href),w=u.startsWith("//")?new URL(f.protocol+u):new URL(u),b=f1(w.pathname,x);w.origin===f.origin&&b!=null?u=b+w.search+w.hash:M=!0}catch{}let E=zp(u,{relative:o}),m=dg(u,{replace:i,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:h});function c(f){r&&r(f),f.defaultPrevented||m(f)}return y.createElement("a",ns({},v,{href:k||E,onClick:M||l?r:c,ref:n,target:s}))});var Wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wu||(Wu={}));var Hu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hu||(Hu={}));function dg(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=Fp(),u=yi(),g=zm(e,{relative:i});return y.useCallback(h=>{if(ig(h,n)){h.preventDefault();let v=r!==void 0?r:Ul(u)===Ul(g);s(e,{replace:v,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,g,r,o,n,e,l,i,a])}var fg=`
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

`,$e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},$e.apply(this,arguments)};function Mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var oe="-ms-",to="-moz-",Z="-webkit-",Qm="comm",xi="rule",g1="decl",pg="@import",Wm="@keyframes",gg="@layer",Hm=Math.abs,v1=String.fromCharCode,rs=Object.assign;function vg(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Vm(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function dl(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function Gm(e){return e.length}function Hr(e,t){return t.push(e),e}function yg(e,t){return e.map(t).join("")}function Vu(e,t){return e.filter(function(n){return!_t(n,t)})}var wi=1,br=1,Km=0,ct=0,ve=0,Nr="";function ki(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:wi,column:br,length:i,return:"",siblings:a}}function Gt(e,t){return rs(ki("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Gt(e.root,{children:[e]});Hr(e,e.siblings)}function xg(){return ve}function wg(){return ve=ct>0?Ce(Nr,--ct):0,br--,ve===10&&(br=1,wi--),ve}function yt(){return ve=ct<Km?Ce(Nr,ct++):0,br++,ve===10&&(br=1,wi++),ve}function Nn(){return Ce(Nr,ct)}function fl(){return ct}function Mi(e,t){return Mr(Nr,e,t)}function os(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kg(e){return wi=br=1,Km=Et(Nr=e),ct=0,[]}function Mg(e){return Nr="",e}function ra(e){return Vm(Mi(ct-1,ls(e===91?e+2:e===40?e+1:e)))}function bg(e){for(;(ve=Nn())&&ve<33;)yt();return os(e)>2||os(ve)>3?"":" "}function Ag(e,t){for(;--t&&yt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Mi(e,fl()+(t<6&&Nn()==32&&yt()==32))}function ls(e){for(;yt();)switch(ve){case e:return ct;case 34:case 39:e!==34&&e!==39&&ls(ve);break;case 40:e===41&&ls(e);break;case 92:yt();break}return ct}function Eg(e,t){for(;yt()&&e+ve!==57;)if(e+ve===84&&Nn()===47)break;return"/*"+Mi(t,ct-1)+"*"+v1(e===47?e:yt())}function Sg(e){for(;!os(Nn());)yt();return Mi(e,ct)}function Cg(e){return Mg(pl("",null,null,null,[""],e=kg(e),0,[0],e))}function pl(e,t,n,r,o,l,i,a,s){for(var u=0,g=0,h=i,v=0,x=0,k=0,M=1,E=1,m=1,c=0,f="",w=o,b=l,A=r,S=f;E;)switch(k=c,c=yt()){case 40:if(k!=108&&Ce(S,h-1)==58){dl(S+=U(ra(c),"&","&\f"),"&\f",Hm(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=ra(c);break;case 9:case 10:case 13:case 32:S+=bg(k);break;case 92:S+=Ag(fl()-1,7);continue;case 47:switch(Nn()){case 42:case 47:Hr($g(Eg(yt(),fl()),t,n,s),s);break;default:S+="/"}break;case 123*M:a[u++]=Et(S)*m;case 125*M:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+g:m==-1&&(S=U(S,/\f/g,"")),x>0&&Et(S)-h&&Hr(x>32?Ku(S+";",r,n,h-1,s):Ku(U(S," ","")+";",r,n,h-2,s),s);break;case 59:S+=";";default:if(Hr(A=Gu(S,t,n,u,g,o,a,f,w=[],b=[],h,l),l),c===123)if(g===0)pl(S,t,A,A,w,l,h,a,b);else switch(v===99&&Ce(S,3)===110?100:v){case 100:case 108:case 109:case 115:pl(e,A,A,r&&Hr(Gu(e,A,A,0,0,o,a,f,o,w=[],h,b),b),o,b,h,a,r?w:b);break;default:pl(S,A,A,A,[""],b,0,a,b)}}u=g=x=0,M=m=1,f=S="",h=i;break;case 58:h=1+Et(S),x=k;default:if(M<1){if(c==123)--M;else if(c==125&&M++==0&&wg()==125)continue}switch(S+=v1(c),c*M){case 38:m=g>0?1:(S+="\f",-1);break;case 44:a[u++]=(Et(S)-1)*m,m=1;break;case 64:Nn()===45&&(S+=ra(yt())),v=Nn(),g=h=Et(f=S+=Sg(fl())),c++;break;case 45:k===45&&Et(S)==2&&(M=0)}}return l}function Gu(e,t,n,r,o,l,i,a,s,u,g,h){for(var v=o-1,x=o===0?l:[""],k=Gm(x),M=0,E=0,m=0;M<r;++M)for(var c=0,f=Mr(e,v+1,v=Hm(E=i[M])),w=e;c<k;++c)(w=Vm(E>0?x[c]+" "+f:U(f,/&\f/g,x[c])))&&(s[m++]=w);return ki(e,t,n,o===0?xi:a,s,u,g,h)}function $g(e,t,n,r){return ki(e,t,n,Qm,v1(xg()),Mr(e,2,-2),0,r)}function Ku(e,t,n,r,o){return ki(e,t,n,g1,Mr(e,0,r),Mr(e,r+1,-1),r,o)}function Ym(e,t,n){switch(vg(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+to+e+oe+e+e;case 5936:switch(Ce(e,t+11)){case 114:return Z+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+oe+e+e;case 6165:return Z+e+oe+"flex-"+e+e;case 5187:return Z+e+U(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return Z+e+oe+"flex-item-"+U(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":oe+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Z+e+oe+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+oe+U(e,"shrink","negative")+e;case 5292:return Z+e+oe+U(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+U(e,"-grow","")+Z+e+oe+U(e,"grow","positive")+e;case 4554:return Z+U(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!_t(e,/flex-|baseline/))return oe+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return oe+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,_t(r.props,/grid-\w+-end/)})?~dl(e+(n=n[t].value),"span",0)?e:oe+U(e,"-start","")+e+oe+"grid-row-span:"+(~dl(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":oe+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:oe+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+to+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~dl(e,"stretch",0)?Ym(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return oe+o+":"+l+u+(i?oe+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return U(e,":",":"+Z)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ce(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+oe+"$2box$3")+e;case 100:return U(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Wl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jg(e,t,n,r){switch(e.type){case gg:if(e.children.length)break;case pg:case g1:return e.return=e.return||e.value;case Qm:return"";case Wm:return e.return=e.value+"{"+Wl(e.children,r)+"}";case xi:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Wl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ng(e){var t=Gm(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Ig(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case g1:e.return=Ym(e.value,e.length,n);return;case Wm:return Wl([Gt(e,{value:U(e.value,"@","@"+Z)})],r);case xi:if(e.length)return yg(n=e.props,function(o){switch(_t(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Gt(e,{props:[U(o,/:(read-\w+)/,":"+to+"$1")]})),Vn(Gt(e,{props:[o]})),rs(e,{props:Vu(n,r)});break;case"::placeholder":Vn(Gt(e,{props:[U(o,/:(plac\w+)/,":"+Z+"input-$1")]})),Vn(Gt(e,{props:[U(o,/:(plac\w+)/,":"+to+"$1")]})),Vn(Gt(e,{props:[U(o,/:(plac\w+)/,oe+"input-$1")]})),Vn(Gt(e,{props:[o]})),rs(e,{props:Vu(n,r)});break}return""})}}var Tg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},Ar=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",Jm="active",Zm="data-styled-version",bi="6.1.17",y1=`/*!sc*/
`,Hl=typeof window<"u"&&"HTMLElement"in window,Rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),_g={},Ai=Object.freeze([]),Er=Object.freeze({});function Xm(e,t,n){return n===void 0&&(n=Er),e.theme!==n.theme&&e.theme||t||n.theme}var qm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Og=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dg=/(^-|-$)/g;function Yu(e){return e.replace(Og,"-").replace(Dg,"")}var Lg=/(a)(d)/gi,Jo=52,Ju=function(e){return String.fromCharCode(e+(e>25?39:97))};function is(e){var t,n="";for(t=Math.abs(e);t>Jo;t=t/Jo|0)n=Ju(t%Jo)+n;return(Ju(t%Jo)+n).replace(Lg,"$1-$2")}var oa,ed=5381,ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},td=function(e){return ar(ed,e)};function nd(e){return is(td(e)>>>0)}function Bg(e){return e.displayName||e.name||"Component"}function la(e){return typeof e=="string"&&!0}var rd=typeof Symbol=="function"&&Symbol.for,od=rd?Symbol.for("react.memo"):60115,zg=rd?Symbol.for("react.forward_ref"):60112,Fg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ug={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ld={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qg=((oa={})[zg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oa[od]=ld,oa);function Zu(e){return("type"in(t=e)&&t.type.$$typeof)===od?ld:"$$typeof"in e?Qg[e.$$typeof]:Fg;var t}var Wg=Object.defineProperty,Hg=Object.getOwnPropertyNames,Xu=Object.getOwnPropertySymbols,Vg=Object.getOwnPropertyDescriptor,Gg=Object.getPrototypeOf,qu=Object.prototype;function id(e,t,n){if(typeof t!="string"){if(qu){var r=Gg(t);r&&r!==qu&&id(e,r,n)}var o=Hg(t);Xu&&(o=o.concat(Xu(t)));for(var l=Zu(e),i=Zu(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Ug||n&&n[s]||i&&s in i||l&&s in l)){var u=Vg(t,s);try{Wg(e,s,u)}catch{}}}}return e}function On(e){return typeof e=="function"}function x1(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function as(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function bo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ss(e,t,n){if(n===void 0&&(n=!1),!n&&!bo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ss(e[r],t[r]);else if(bo(t))for(var r in t)e[r]=ss(e[r],t[r]);return e}function w1(e,t){Object.defineProperty(e,"toString",{value:t})}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Dn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(y1);return n},e}(),gl=new Map,Vl=new Map,vl=1,Zo=function(e){if(gl.has(e))return gl.get(e);for(;Vl.has(vl);)vl++;var t=vl++;return gl.set(e,t),Vl.set(t,e),t},Yg=function(e,t){vl=t+1,gl.set(e,t),Vl.set(t,e)},Jg="style[".concat(Ar,"][").concat(Zm,'="').concat(bi,'"]'),Zg=new RegExp("^".concat(Ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xg=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},qg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(y1),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(Zg);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Yg(g,u),Xg(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},eh=function(e){for(var t=document.querySelectorAll(Jg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Ar)!==Jm&&(qg(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ev(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ad=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Ar,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(Ar,Jm),r.setAttribute(Zm,bi);var i=ev();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},tv=function(){function e(t){this.element=ad(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),nv=function(){function e(t){this.element=ad(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),rv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),th=Hl,ov={isServer:!Hl,useCSSOMInjection:!Rg},Gl=function(){function e(t,n,r){t===void 0&&(t=Er),n===void 0&&(n={});var o=this;this.options=$e($e({},ov),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hl&&th&&(th=!1,eh(this)),w1(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(h){var v=function(m){return Vl.get(m)}(h);if(v===void 0)return"continue";var x=l.names.get(v),k=i.getGroup(h);if(x===void 0||!x.size||k.length===0)return"continue";var M="".concat(Ar,".g").concat(h,'[id="').concat(v,'"]'),E="";x!==void 0&&x.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),s+="".concat(k).concat(M,'{content:"').concat(E,'"}').concat(y1)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return Zo(t)},e.prototype.rehydrate=function(){!this.server&&Hl&&eh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new rv(o):r?new tv(o):new nv(o)}(this.options),new Kg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Zo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Zo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Zo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lv=/&/g,iv=/^\s*\/\/.*$/gm;function sd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sd(n.children,t)),n})}function av(e){var t,n,r,o=Er,l=o.options,i=l===void 0?Er:l,a=o.plugins,s=a===void 0?Ai:a,u=function(v,x,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):v},g=s.slice();g.push(function(v){v.type===xi&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(lv,n).replace(r,u))}),i.prefix&&g.push(Pg),g.push(jg);var h=function(v,x,k,M){x===void 0&&(x=""),k===void 0&&(k=""),M===void 0&&(M="&"),t=M,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var E=v.replace(iv,""),m=Cg(k||x?"".concat(k," ").concat(x," { ").concat(E," }"):E);i.namespace&&(m=sd(m,i.namespace));var c=[];return Wl(m,Ng(g.concat(Ig(function(f){return c.push(f)})))),c};return h.hash=s.length?s.reduce(function(v,x){return x.name||Dn(15),ar(v,x.name)},ed).toString():"",h}var sv=new Gl,us=av(),ud=p.createContext({shouldForwardProp:void 0,styleSheet:sv,stylis:us});ud.Consumer;p.createContext(void 0);function hs(){return y.useContext(ud)}var uv=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=us);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,w1(this,function(){throw Dn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=us),this.name+t.hash},e}(),hv=function(e){return e>="A"&&e<="Z"};function nh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;hv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var hd=function(e){return e==null||e===!1||e===""},cd=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!hd(l)&&(Array.isArray(l)&&l.isCss||On(l)?r.push("".concat(nh(o),":"),l,";"):bo(l)?r.push.apply(r,Mo(Mo(["".concat(o," {")],cd(l),!1),["}"],!1)):r.push("".concat(nh(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Tg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(hd(e))return[];if(x1(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cn(o,t,n,r)}var l;return e instanceof uv?n?(e.inject(n,r),[e.getName(r)]):[e]:bo(e)?cd(e):Array.isArray(e)?Array.prototype.concat.apply(Ai,e.map(function(i){return cn(i,t,n,r)})):[e.toString()]}function md(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(On(n)&&!x1(n))return!1}return!0}var cv=td(bi),mv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&md(t),this.componentId=n,this.baseHash=ar(cv,n),this.baseStyle=r,Gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Sn(o,this.staticRulesId);else{var l=as(cn(this.rules,t,n,r)),i=is(ar(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=Sn(o,i),this.staticRulesId=i}else{for(var s=ar(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var h=this.rules[g];if(typeof h=="string")u+=h;else if(h){var v=as(cn(h,t,n,r));s=ar(s,v+g),u+=v}}if(u){var x=is(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=Sn(o,x)}}return o},e}(),Ao=p.createContext(void 0);Ao.Consumer;function dv(e){var t=p.useContext(Ao),n=y.useMemo(function(){return function(r,o){if(!r)throw Dn(14);if(On(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Dn(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(Ao.Provider,{value:n},e.children):null}var ia={};function fv(e,t,n){var r=x1(e),o=e,l=!la(e),i=t.attrs,a=i===void 0?Ai:i,s=t.componentId,u=s===void 0?function(w,b){var A=typeof w!="string"?"sc":Yu(w);ia[A]=(ia[A]||0)+1;var S="".concat(A,"-").concat(nd(bi+A+ia[A]));return b?"".concat(b,"-").concat(S):S}(t.displayName,t.parentComponentId):s,g=t.displayName,h=g===void 0?function(w){return la(w)?"styled.".concat(w):"Styled(".concat(Bg(w),")")}(e):g,v=t.displayName&&t.componentId?"".concat(Yu(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var M=o.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;k=function(w,b){return M(w,b)&&E(w,b)}}else k=M}var m=new mv(n,v,r?o.componentStyle:void 0);function c(w,b){return function(A,S,I){var z=A.attrs,O=A.componentStyle,X=A.defaultProps,q=A.foldedComponentIds,me=A.styledComponentId,de=A.target,se=p.useContext(Ao),we=hs(),ke=A.shouldForwardProp||we.shouldForwardProp,$=Xm(S,se,X)||Er,P=function(K,B,W){for(var Ee,N=$e($e({},B),{className:void 0,theme:W}),F=0;F<K.length;F+=1){var H=On(Ee=K[F])?Ee(N):Ee;for(var J in H)N[J]=J==="className"?Sn(N[J],H[J]):J==="style"?$e($e({},N[J]),H[J]):H[J]}return B.className&&(N.className=Sn(N.className,B.className)),N}(z,S,$),_=P.as||de,G={};for(var Q in P)P[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&P.theme===$||(Q==="forwardedAs"?G.as=P.forwardedAs:ke&&!ke(Q,_)||(G[Q]=P[Q]));var D=function(K,B){var W=hs(),Ee=K.generateAndInjectStyles(B,W.styleSheet,W.stylis);return Ee}(O,P),L=Sn(q,me);return D&&(L+=" "+D),P.className&&(L+=" "+P.className),G[la(_)&&!qm.has(_)?"class":"className"]=L,I&&(G.ref=I),y.createElement(_,G)}(f,w,b)}c.displayName=h;var f=p.forwardRef(c);return f.attrs=x,f.componentStyle=m,f.displayName=h,f.shouldForwardProp=k,f.foldedComponentIds=r?Sn(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=v,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var A=[],S=1;S<arguments.length;S++)A[S-1]=arguments[S];for(var I=0,z=A;I<z.length;I++)ss(b,z[I],!0);return b}({},o.defaultProps,w):w}}),w1(f,function(){return".".concat(f.styledComponentId)}),l&&id(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function rh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var oh=function(e){return Object.assign(e,{isCss:!0})};function T(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(On(e)||bo(e))return oh(cn(rh(Ai,Mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?cn(r):oh(cn(rh(r,t)))}function cs(e,t,n){if(n===void 0&&(n=Er),!t)throw Dn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,T.apply(void 0,Mo([o],l,!1)))};return r.attrs=function(o){return cs(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return cs(e,t,$e($e({},n),o))},r}var dd=function(e){return cs(fv,e)},C=dd;qm.forEach(function(e){C[e]=dd(e)});var pv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=md(t),Gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(as(cn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Gl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function gv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=T.apply(void 0,Mo([e],t,!1)),o="sc-global-".concat(nd(JSON.stringify(r))),l=new pv(r,o),i=function(s){var u=hs(),g=p.useContext(Ao),h=p.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(h,s,u.styleSheet,g,u.stylis),p.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,s,u.styleSheet,g,u.stylis),function(){return l.removeStyles(h,u.styleSheet)}},[h,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,h,v){if(l.isStatic)l.renderStyles(s,_g,g,v);else{var x=$e($e({},u),{theme:Xm(u,h,i.defaultProps)});l.renderStyles(s,x,g,v)}}return p.memo(i)}const k1="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",M1="inset 2px 2px 3px rgba(0,0,0,0.2)",kt=()=>T`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Mt=({background:e="material",color:t="materialText"}={})=>T`
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
`,Ln=()=>T`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},vv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?k1:!1,o?M1:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return T`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>vv({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},Sr=()=>T`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,yv=e=>Buffer.from(e).toString("base64"),xv=typeof btoa<"u"?btoa:yv,Xo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${xv(n)})`},b1=(e="default")=>T`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Po({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Mt()}
    ${e==="flat"?Ln():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Mt()}
    ${e==="flat"?Ln():pe({style:"window"})}
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
    background-image: ${({theme:t})=>Xo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Xo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Xo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Xo(t.materialText,0)};
  }
`,wv=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,kv=y.forwardRef(({children:e,underline:t=!0,...n},r)=>p.createElement(wv,{ref:r,underline:t,...n},e));kv.displayName="Anchor";const Mv=C.header`
  ${pe()};
  ${Mt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,fd=y.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>p.createElement(Mv,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));fd.displayName="AppBar";const Wn=()=>{};function Cn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function bv(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function lh(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(bv(t)))}function fn(e){return typeof e=="number"?`${e}px`:e}const Av=C.div`
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
`,Ev=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Sv=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>p.createElement(Av,{noBorder:n,ref:a,size:fn(r),square:o,src:l,...i},l?p.createElement(Ev,{src:l,alt:e}):t));Sv.displayName="Avatar";const Te={sm:"28px",md:"36px",lg:"44px"},Cv=T`
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
`,Ei=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?T`
          ${Ln()}
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
            ${!e&&!t&&Sr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?T`
          ${Mt()};
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
        `:T`
          ${Mt()};
          border: none;
          ${t&&kt()}
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
            ${!e&&!t&&Sr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Cv}
`,te=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Wn,primary:u=!1,variant:g="default",...h},v)=>p.createElement(Ei,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:l,square:i,type:r,variant:g,...h},n));te.displayName="Button";function pn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=y.useState(e),u=y.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,u]}const ms=C.li`
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
  ${e=>e.$disabled&&kt()}
`,pd=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>p.createElement(ms,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));pd.displayName="MenuListItem";const gd=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${pe({style:"window"})}
  ${Mt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;gd.displayName="MenuList";const jt=20,Kl=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${jt}px;
  height: ${jt}px;
  opacity: 0;
  z-index: -1;
`,A1=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&kt()}

  ${ms} & {
    margin: 0;
    height: 100%;
  }
  ${ms}:hover & {
    ${({$disabled:e,theme:t})=>!e&&T`
        color: ${t.materialTextInvert};
      `};
  }
`,E1=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Kl}:focus ~ & {
    ${Sr}
  }
  ${Kl}:not(:disabled) ~ &:active {
    ${Sr}
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
    ${e=>e.shadow&&`box-shadow:${M1};`}
  }
`,$v=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${b1()}
`,Eo=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>p.createElement(Nt,{ref:r,shadow:t,...n},p.createElement($v,null,e)));Eo.displayName="ScrollView";const vd=T`
  width: ${jt}px;
  height: ${jt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,jv=C(Nt)`
  ${vd}
  width: ${jt}px;
  height: ${jt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Nv=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${vd}
  width: ${jt-4}px;
  height: ${jt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Iv=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Pv=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,Tv={flat:Nv,default:jv},Rv=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Wn,style:a={},value:s,variant:u="default",...g},h)=>{var v;const[x,k]=pn({defaultValue:n,onChange:i,readOnly:(v=g.readOnly)!==null&&v!==void 0?v:r,value:e}),M=y.useCallback(c=>{const f=c.target.checked;k(f),i(c)},[i,k]),E=Tv[u];let m=null;return o?m=Pv:x&&(m=Iv),p.createElement(A1,{$disabled:r,className:t,style:a},p.createElement(Kl,{disabled:r,onChange:r?void 0:M,readOnly:r,type:"checkbox",value:s,checked:x,"data-indeterminate":o,ref:h,...g}),p.createElement(E,{$disabled:r,role:"presentation"},m&&p.createElement(m,{$disabled:r,variant:u})),l&&p.createElement(E1,null,l))});Rv.displayName="Checkbox";const S1=C.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${fn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${fn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;S1.displayName="Separator";const _v=C(Ei)`
  padding-left: 8px;
`,Ov=C(S1)`
  height: 21px;
  position: relative;
  top: 0;
`,yd=C.input`
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
`,Dv=C.div`
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
  ${yd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Sr}
    outline-offset: -8px;
  }
`,Lv=C.span`
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
`,Bv=y.forwardRef(({value:e,defaultValue:t,onChange:n=Wn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=pn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=h=>{const v=h.target.value;u(v),n(h)};return p.createElement(_v,{disabled:r,as:"div",variant:o,size:"md"},p.createElement(yd,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),p.createElement(Dv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&p.createElement(Ov,{orientation:"vertical"}),p.createElement(Lv,{$disabled:r,variant:o}))});Bv.displayName="ColorInput";const zv=C.div`
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
`,ih=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Fv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Uv({digit:e=0,pixelSize:t=2,...n}){const r=Fv[Number(e)].map((o,l)=>o?`${ih[l]} active`:ih[l]);return p.createElement(zv,{pixelSize:t,...n},r.map((o,l)=>p.createElement("span",{className:o,key:l})))}const Qv=C.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Wv={sm:1,md:2,lg:3,xl:4},Hv=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return p.createElement(Qv,{ref:o,...r},l.map((i,a)=>p.createElement(Uv,{digit:i,pixelSize:Wv[n],key:a})))});Hv.displayName="Counter";const xd=T`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Te.md};
`,Vv=C(Nt).attrs({"data-testid":"variant-default"})`
  ${xd}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Gv=C.div.attrs({"data-testid":"variant-flat"})`
  ${Ln()}
  ${xd}
  position: relative;
`,wd=T`
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
`,Kv=C.input`
  ${wd}
  padding: 0 8px;
`,Yv=C.textarea`
  ${wd}
  padding: 8px;
  resize: none;
  ${({variant:e})=>b1(e)}
`,kd=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Wn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Gv:Vv,g=y.useMemo(()=>{var h;return a.multiline?p.createElement(Yv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):p.createElement(Kv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(h=a.type)!==null&&h!==void 0?h:"text",variant:i,...a})},[t,r,a,s,i]);return p.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});kd.displayName="TextInput";const Jv=C.div`
  display: inline-flex;
  align-items: center;
`,ds=C(te)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?T`
          height: calc(50% - 1px);
        `:T`
          height: 50%;
        `}
`,Zv=C.div`
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
`,ah=C.span`
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
  ${ds}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?T`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:T`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Md=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:g="default",width:h,...v},x)=>{const[k,M]=pn({defaultValue:t,onChange:l,readOnly:i,value:u}),E=y.useCallback(A=>{const S=parseFloat(A.target.value);M(S)},[M]),m=y.useCallback(A=>{const S=Cn(parseFloat(((k??0)+A).toFixed(2)),o??null,r??null);M(S),l==null||l(S)},[r,o,l,M,k]),c=y.useCallback(()=>{k!==void 0&&(l==null||l(k))},[l,k]),f=y.useCallback(()=>{m(a)},[m,a]),w=y.useCallback(()=>{m(-a)},[m,a]),b=g==="flat"?"flat":"raised";return p.createElement(Jv,{className:e,style:{...s,width:h!==void 0?fn(h):"auto"},...v},p.createElement(kd,{value:k,variant:g,onChange:E,disabled:n,type:"number",readOnly:i,ref:x,fullWidth:!0,onBlur:c}),p.createElement(Zv,{variant:g},p.createElement(ds,{"data-testid":"increment",variant:b,disabled:n||i,onClick:f},p.createElement(ah,{invert:!0})),p.createElement(ds,{"data-testid":"decrement",variant:b,disabled:n||i,onClick:w},p.createElement(ah,null))))});Md.displayName="NumberInput";function Xv(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const bd=e=>y.useMemo(()=>Xv(),[e]),Ad=T`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Ed=T`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,C1=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,qv=C.div`
  ${Ad}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${C1}:focus & {
    ${Ed}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Sd=T`
  height: ${Te.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?kt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,ey=C(Nt)`
  ${Sd}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,ty=C.div`
  ${Ln()}
  ${Sd}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,ny=C.select`
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
  ${Ad}
  cursor: pointer;
  &:disabled {
    ${kt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Cd=C(Ei).attrs(()=>({"aria-hidden":"true"}))`
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
`,ry=C.span`
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
  ${Cd}:active & {
    margin-top: 2px;
  }
`,oy=C.ul`
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
  box-shadow: ${k1};
  ${({variant:e="default"})=>e==="flat"?T`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:T`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>b1(e)}
`,ly=C.li`
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
  ${({active:e})=>e?Ed:""}
  user-select: none;
`,iy=[],$d=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=iy,readOnly:i,style:a,value:s,variant:u,width:g})=>{var h;const v=y.useMemo(()=>l.filter(Boolean),[l]),[x,k]=pn({defaultValue:t??((h=v==null?void 0:v[0])===null||h===void 0?void 0:h.value),onChange:o,readOnly:i,value:s}),M=!(n||i),E=y.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),m=y.useMemo(()=>p.createElement(Cd,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},p.createElement(ry,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),c=y.useMemo(()=>u==="flat"?ty:ey,[u]);return y.useMemo(()=>({isEnabled:M,options:v,value:x,setValue:k,wrapperProps:E,DropdownButton:m,Wrapper:c}),[m,c,M,v,k,x,E])},ay={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},sy=1e3,uy=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:g,selectRef:h,setValue:v,wrapperRef:x})=>{const k=y.useRef(null),M=y.useRef([]),E=y.useRef(0),m=y.useRef(0),c=y.useRef(),f=y.useRef("search"),w=y.useRef(""),b=y.useRef(),[A,S]=pn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=y.useMemo(()=>{const N=s.findIndex(F=>F.value===g);return E.current=Cn(N,0,null),s[N]},[s,g]),[z,O]=y.useState(s[0]),X=y.useCallback(N=>{const F=k.current,H=M.current[N];if(!H||!F){c.current=N;return}c.current=void 0;const J=F.clientHeight,ie=F.scrollTop,Ne=F.scrollTop+J,Me=H.offsetTop,rt=H.offsetHeight,It=H.offsetTop+H.offsetHeight;Me<ie&&F.scrollTo(0,Me),It>Ne&&F.scrollTo(0,Me-J+rt),H.focus({preventScroll:!0})},[k]),q=y.useCallback((N,{scroll:F}={})=>{var H;const J=s.length-1;let ie;switch(N){case"first":{ie=0;break}case"last":{ie=J;break}case"next":{ie=Cn(m.current+1,0,J);break}case"previous":{ie=Cn(m.current-1,0,J);break}case"selected":{ie=Cn((H=E.current)!==null&&H!==void 0?H:0,0,J);break}default:ie=N}m.current=ie,O(s[ie]),F&&X(ie)},[m,s,X]),me=y.useCallback(({fromEvent:N})=>{S(!0),q("selected",{scroll:!0}),i==null||i({fromEvent:N})},[q,i,S]),de=y.useCallback(()=>{f.current="search",w.current="",clearTimeout(b.current)},[]),se=y.useCallback(({focusSelect:N,fromEvent:F})=>{var H;n==null||n({fromEvent:F}),S(!1),O(s[0]),de(),c.current=void 0,N&&((H=h.current)===null||H===void 0||H.focus())},[de,n,s,h,S]),we=y.useCallback(({fromEvent:N})=>{A?se({focusSelect:!1,fromEvent:N}):me({fromEvent:N})},[se,me,A]),ke=y.useCallback((N,{fromEvent:F})=>{E.current!==N&&(E.current=N,v(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,v]),$=y.useCallback(({focusSelect:N,fromEvent:F})=>{ke(m.current,{fromEvent:F}),se({focusSelect:N,fromEvent:F})},[se,ke]),P=y.useCallback((N,{fromEvent:F,select:H})=>{var J;switch(f.current==="cycleFirstLetter"&&N!==w.current&&(f.current="search"),N===w.current?f.current="cycleFirstLetter":w.current+=N,f.current){case"search":{let ie=s.findIndex(Ne=>{var Me;return((Me=Ne.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(w.current))===0});ie<0&&(ie=s.findIndex(Ne=>{var Me;return((Me=Ne.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(N))===0}),w.current=N),ie>=0&&(H?ke(ie,{fromEvent:F}):q(ie,{scroll:!0}));break}case"cycleFirstLetter":{const ie=H?(J=E.current)!==null&&J!==void 0?J:-1:m.current;let Ne=s.findIndex((Me,rt)=>{var It;return rt>ie&&((It=Me.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(N))===0});Ne<0&&(Ne=s.findIndex(Me=>{var rt;return((rt=Me.label)===null||rt===void 0?void 0:rt.toLocaleUpperCase().indexOf(N))===0})),Ne>=0&&(H?ke(Ne,{fromEvent:F}):q(Ne,{scroll:!0}));break}}clearTimeout(b.current),b.current=setTimeout(()=>{f.current==="search"&&(w.current="")},sy)},[q,s,ke]),_=y.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=h.current)===null||F===void 0||F.focus(),we({fromEvent:N}),l==null||l(N))},[l,h,we]),G=y.useCallback(N=>{$({focusSelect:!0,fromEvent:N})},[$]),Q=y.useCallback(N=>{const{altKey:F,code:H,ctrlKey:J,metaKey:ie,shiftKey:Ne}=N,{ARROW_DOWN:Me,ARROW_UP:rt,END:It,ENTER:xn,ESC:Ht,HOME:$i,SPACE:ji,TAB:Ir}=ay,$1=F||J||ie||Ne;if(!(H===Ir&&(F||J||ie)||H!==Ir&&$1))switch(H){case Me:{if(N.preventDefault(),!A){me({fromEvent:N});return}q("next",{scroll:!0});break}case rt:{if(N.preventDefault(),!A){me({fromEvent:N});return}q("previous",{scroll:!0});break}case It:{if(N.preventDefault(),!A){me({fromEvent:N});return}q("last",{scroll:!0});break}case xn:{if(!A)return;N.preventDefault(),$({focusSelect:!0,fromEvent:N});break}case Ht:{if(!A)return;N.preventDefault(),se({focusSelect:!0,fromEvent:N});break}case $i:{if(N.preventDefault(),!A){me({fromEvent:N});return}q("first",{scroll:!0});break}case ji:{N.preventDefault(),A?$({focusSelect:!0,fromEvent:N}):me({fromEvent:N});break}case Ir:{if(!A)return;Ne||N.preventDefault(),$({focusSelect:!Ne,fromEvent:N});break}default:!$1&&H.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),P(H.replace(/^Key/,""),{select:!A,fromEvent:N}))}},[q,se,A,me,P,$]),D=y.useCallback(N=>{Q(N),o==null||o(N)},[Q,o]),L=y.useCallback(N=>{q(N)},[q]),K=y.useCallback(N=>{A||(de(),e==null||e(N))},[de,e,A]),B=y.useCallback(N=>{de(),r==null||r(N)},[de,r]),W=y.useCallback(N=>{k.current=N,c.current!==void 0&&X(c.current)},[X]),Ee=y.useCallback((N,F)=>{M.current[F]=N,c.current===F&&X(c.current)},[X]);return y.useEffect(()=>{if(!A)return()=>{};const N=F=>{var H;const J=F.target;!((H=x.current)===null||H===void 0)&&H.contains(J)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[se,A,x]),y.useMemo(()=>({activeOption:z,handleActivateOptionIndex:L,handleBlur:K,handleButtonKeyDown:D,handleDropdownKeyDown:Q,handleFocus:B,handleMouseDown:_,handleOptionClick:G,handleSetDropdownRef:W,handleSetOptionRef:Ee,open:A,selectedOption:I}),[z,L,K,D,B,Q,_,G,W,Ee,A,I])},hy=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...g},h)=>{const{isEnabled:v,options:x,setValue:k,value:M,DropdownButton:E,Wrapper:m}=$d({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),c=y.useCallback(f=>{const w=x.find(b=>b.value===f.target.value);w&&(k(w.value),r==null||r(w,{fromEvent:f}))},[r,x,k]);return p.createElement(m,{className:e,style:{...i,width:u}},p.createElement(C1,null,p.createElement(ny,{...g,disabled:n,onChange:v?c:Wn,ref:h,value:M},x.map((f,w)=>{var b;return p.createElement("option",{key:`${f.value}-${w}`,value:f.value},(b=f.label)!==null&&b!==void 0?b:f.value)})),E))});hy.displayName="SelectNative";function cy({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(g=>{i(g,n)},[n,i]),u=bd();return p.createElement(ly,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function my({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:h,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:M,onOpen:E,open:m,options:c,readOnly:f,shadow:w=!0,style:b,variant:A="default",value:S,width:I="auto",...z},O){const{isEnabled:X,options:q,setValue:me,value:de,wrapperProps:se,DropdownButton:we,Wrapper:ke}=$d({className:n,defaultValue:r,disabled:o,native:!1,onChange:h,options:c,style:b,readOnly:f,value:S,variant:A,width:I}),$=y.useRef(null),P=y.useRef(null),_=y.useRef(null),{activeOption:G,handleActivateOptionIndex:Q,handleBlur:D,handleButtonKeyDown:L,handleDropdownKeyDown:K,handleFocus:B,handleMouseDown:W,handleOptionClick:Ee,handleSetDropdownRef:N,handleSetOptionRef:F,open:H,selectedOption:J}=uy({onBlur:g,onChange:h,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:M,onOpen:E,open:m,options:q,value:de,selectRef:P,setValue:me,wrapperRef:_});y.useImperativeHandle(O,()=>({focus:xn=>{var Ht;(Ht=P.current)===null||Ht===void 0||Ht.focus(xn)},node:$.current,value:String(de)}),[de]);const ie=y.useMemo(()=>J?typeof l=="function"?l(J):J.label:"",[l,J]),Ne=X?1:void 0,Me=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),rt=bd(),It=y.useMemo(()=>q.map((xn,Ht)=>{const $i=`${de}-${Ht}`,ji=xn===G,Ir=xn===J;return p.createElement(cy,{activateOptionIndex:Q,active:ji,index:Ht,key:$i,onClick:Ee,option:xn,selected:Ir,setRef:F})}),[G,Q,Ee,F,q,J,de]);return p.createElement(ke,{...se,$disabled:o,ref:_,shadow:w,style:{...b,width:I}},p.createElement("input",{name:u,ref:$,type:"hidden",value:String(de),...i}),p.createElement(C1,{"aria-disabled":o,"aria-expanded":H,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":X&&H?rt:void 0,onBlur:D,onFocus:B,onKeyDown:L,onMouseDown:X?W:M,ref:P,role:"button",tabIndex:Ne,...z},p.createElement(qv,null,ie),we),X&&H&&p.createElement(oy,{id:rt,onKeyDown:K,ref:N,role:"listbox",style:Me,tabIndex:0,variant:A},It))}const jd=y.forwardRef(my);jd.displayName="Select";const dy=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Yl=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return p.createElement(dy,{noPadding:n,ref:o,...r},t)});Yl.displayName="Toolbar";const fy=C.div`
  padding: 16px;
`,Xe=y.forwardRef(function({children:t,...n},r){return p.createElement(fy,{ref:r,...n},t)});Xe.displayName="WindowContent";const py=C.div`
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

  ${Ei} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,qe=y.forwardRef(function({active:t=!0,children:n,...r},o){return p.createElement(py,{active:t,ref:o,...r},n)});qe.displayName="WindowHeader";const gy=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${Mt()}
`,vy=C.span`
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
`,xt=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>p.createElement(gy,{ref:l,shadow:r,...o},e,t&&p.createElement(vy,{"data-testid":"resizeHandle",ref:n})));xt.displayName="Window";const yy=C(Eo)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,xy=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,wy=C.div`
  display: flex;
  flex-wrap: wrap;
`,Pt=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,ky=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,My=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function by(e,t){return new Date(e,t+1,0).getDate()}function Ay(e,t,n){return new Date(e,t,n).getDay()}function Ey(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Sy=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=y.useState(()=>Ey(t)),{year:s,month:u,day:g}=i,h=y.useCallback(({value:E})=>{a(m=>({...m,month:E}))},[]),v=y.useCallback(E=>{a(m=>({...m,year:E}))},[]),x=y.useCallback(E=>{a(m=>({...m,day:E}))},[]),k=y.useCallback(()=>{const E=[i.year,i.month+1,i.day].map(m=>String(m).padStart(2,"0")).join("-");n==null||n(E)},[i.day,i.month,i.year,n]),M=y.useMemo(()=>{const E=Array.from({length:42}),m=Ay(s,u,1);let c=g;const f=by(s,u);return c=c<f?c:f,E.forEach((w,b)=>{if(b>=m&&b<f+m){const A=b-m+1;E[b]=p.createElement(Pt,{key:b,onClick:()=>{x(A)}},p.createElement(ky,{active:A===c},A))}else E[b]=p.createElement(Pt,{key:b})}),E},[g,x,u,s]);return p.createElement(xt,{className:e,ref:l,shadow:o,style:{margin:20}},p.createElement(qe,null,p.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),p.createElement(Xe,null,p.createElement(Yl,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(jd,{options:My,value:u,onChange:h,width:128,menuMaxHeight:200}),p.createElement(Md,{value:s,onChange:v,width:100})),p.createElement(yy,null,p.createElement(xy,null,p.createElement(Pt,null,"S"),p.createElement(Pt,null,"M"),p.createElement(Pt,null,"T"),p.createElement(Pt,null,"W"),p.createElement(Pt,null,"T"),p.createElement(Pt,null,"F"),p.createElement(Pt,null,"S")),p.createElement(wy,null,M)),p.createElement(Yl,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(te,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),p.createElement(te,{fullWidth:!0,onClick:n?k:void 0,disabled:!n},"OK"))))});Sy.displayName="DatePicker";const Cy=e=>{switch(e){case"status":case"well":return T`
        ${pe({style:"status"})}
      `;case"window":case"outside":return T`
        ${pe({style:"window"})}
      `;case"field":return T`
        ${pe({style:"field"})}
      `;default:return T`
        ${pe()}
      `}},$y=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Cy(e)}
  ${({variant:e})=>Mt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Nd=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>p.createElement($y,{ref:o,shadow:t,variant:n,...r},e));Nd.displayName="Frame";const jy=C.fieldset`
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
  ${e=>e.$disabled&&kt()}
`,Ny=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Iy=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>p.createElement(jy,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&p.createElement(Ny,{variant:n},e),r));Iy.displayName="GroupBox";const Py=C.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${fn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Py.displayName="Handle";const Ty="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ry=C.div`
  display: inline-block;
  height: ${({size:e})=>fn(e)};
  width: ${({size:e})=>fn(e)};
`,_y=C.span`
  display: block;
  background: ${Ty};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Oy=y.forwardRef(({size:e=30,...t},n)=>p.createElement(Ry,{size:e,ref:n,...t},p.createElement(_y,null)));Oy.displayName="Hourglass";const Dy=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ly=C.div`
  position: relative;
`,By=C.div`
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
`,zy=C(Nt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Fy=C.div`
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
`,Uy=y.forwardRef(({backgroundStyles:e,children:t,...n},r)=>p.createElement(Dy,{ref:r,...n},p.createElement(Ly,null,p.createElement(By,null,p.createElement(zy,{style:e},t)),p.createElement(Fy,null))));Uy.displayName="Monitor";const Qy=C.div`
  display: inline-block;
  height: ${Te.md};
  width: 100%;
`,Wy=C(Nt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Id=T`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Hy=C.div`
  position: relative;
  top: 4px;
  ${Id}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Vy=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Id}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Gy=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Pd=17,Ky=C.span`
  display: inline-block;
  width: ${Pd}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Yy=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=y.useRef(null),[s,u]=y.useState([]),g=y.useCallback(()=>{if(!a.current||n===void 0)return;const h=a.current.getBoundingClientRect().width,v=Math.round(n/100*h/Pd);u(Array.from({length:v}))},[n]);return y.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),p.createElement(Qy,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},p.createElement(Wy,{variant:r,shadow:t},r==="default"?p.createElement(p.Fragment,null,p.createElement(Hy,{"data-testid":"defaultProgress1"},i),p.createElement(Vy,{"data-testid":"defaultProgress2",value:n},i)):p.createElement(Gy,{ref:a,"data-testid":"tileProgress"},s.map((h,v)=>p.createElement(Ky,{key:v})))))});Yy.displayName="ProgressBar";const Td=T`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Jy=C(Nt)`
  ${Td}
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
`,Zy=C.div`
  ${Ln()}
  ${Td}
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
`,Xy=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,qy={flat:Zy,default:Jy},e2=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=qy[i];return p.createElement(A1,{$disabled:n,className:t,style:l},p.createElement(u,{$disabled:n,role:"presentation"},e&&p.createElement(Xy,{$disabled:n,variant:i})),p.createElement(Kl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&p.createElement(E1,null,r))});e2.displayName="Radio";const t2=typeof window<"u"?y.useLayoutEffect:y.useEffect;function wn(e){const t=y.useRef(e);return t2(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function sh(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function uh(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{sh(e,n),sh(t,n)},[e,t])}let Si=!0,fs=!1,hh;const n2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r2(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&n2[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function o2(e){e.metaKey||e.altKey||e.ctrlKey||(Si=!0)}function aa(){Si=!1}function l2(){this.visibilityState==="hidden"&&fs&&(Si=!0)}function i2(e){e.addEventListener("keydown",o2,!0),e.addEventListener("mousedown",aa,!0),e.addEventListener("pointerdown",aa,!0),e.addEventListener("touchstart",aa,!0),e.addEventListener("visibilitychange",l2,!0)}function a2(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Si||r2(t)}function s2(){fs=!0,window.clearTimeout(hh),hh=window.setTimeout(()=>{fs=!1},100)}function u2(){const e=y.useCallback(t=>{const n=Im.findDOMNode(t);n!=null&&i2(n.ownerDocument)},[]);return{isFocusVisible:a2,onBlurVisible:s2,ref:e}}function h2(e,t,n){return(n-t)*e+t}function qo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function el(e){return e&&e.ownerDocument||document}function c2(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const m2=C.div`
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
`,Rd=()=>T`
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
`,d2=C(Nt)`
  ${Rd()}
`,f2=C(Nt)`
  ${Rd()}

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
`,p2=C.span`
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
          ${Ln()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:T`
          ${Mt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Po({mainColor:t.material,secondaryColor:t.borderLightest})}
`,sr=6,g2=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?T`
          right: ${-sr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${sr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:T`
          bottom: ${-sr}px;
          height: ${sr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&T`
      ${kt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,v2=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?T`
          transform: translate(${sr+2}px, ${sr+1}px);
        `:T`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,y2=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:h=1,value:v,variant:x="default",...k},M)=>{const E=x==="flat"?f2:d2,m=u==="vertical",[c=o,f]=pn({defaultValue:e,onChange:i??a,value:v}),{isFocusVisible:w,onBlurVisible:b,ref:A}=u2(),[S,I]=y.useState(!1),z=y.useRef(),O=y.useRef(null),X=uh(A,z),q=uh(M,X),me=wn(D=>{w(D)&&I(!0)}),de=wn(()=>{S!==!1&&(I(!1),b())}),se=y.useRef(),we=y.useMemo(()=>n===!0&&Number.isFinite(h)?[...Array(Math.round((r-o)/h)+1)].map((D,L)=>({label:void 0,value:o+h*L})):Array.isArray(n)?n:[],[n,r,o,h]),ke=wn(D=>{const L=(r-o)/10,K=we.map(Ee=>Ee.value),B=K.indexOf(c);let W=0;switch(D.key){case"Home":W=o;break;case"End":W=r;break;case"PageUp":h&&(W=c+L);break;case"PageDown":h&&(W=c-L);break;case"ArrowRight":case"ArrowUp":h?W=c+h:W=K[B+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":h?W=c-h:W=K[B-1]||K[0];break;default:return}D.preventDefault(),h&&(W=lh(W,h,o)),W=Cn(W,o,r),f(W),I(!0),i==null||i(W),a==null||a(W)}),$=y.useCallback(D=>{if(!z.current)return 0;const L=z.current.getBoundingClientRect();let K;m?K=(L.bottom-D.y)/L.height:K=(D.x-L.left)/L.width;let B;if(B=h2(K,o,r),h)B=lh(B,h,o);else{const W=we.map(N=>N.value),Ee=c2(W,B);B=W[Ee]}return B=Cn(B,o,r),B},[we,r,o,h,m]),P=wn(D=>{var L;const K=qo(D,se.current);if(!K)return;const B=$(K);(L=O.current)===null||L===void 0||L.focus(),f(B),I(!0),i==null||i(B)}),_=wn(D=>{const L=qo(D,se.current);if(!L)return;const K=$(L);a==null||a(K),se.current=void 0;const B=el(z.current);B.removeEventListener("mousemove",P),B.removeEventListener("mouseup",_),B.removeEventListener("touchmove",P),B.removeEventListener("touchend",_)}),G=wn(D=>{var L;s==null||s(D),D.preventDefault(),(L=O.current)===null||L===void 0||L.focus(),I(!0);const K=qo(D,se.current);if(K){const W=$(K);f(W),i==null||i(W)}const B=el(z.current);B.addEventListener("mousemove",P),B.addEventListener("mouseup",_)}),Q=wn(D=>{var L;D.preventDefault();const K=D.changedTouches[0];K!=null&&(se.current=K.identifier),(L=O.current)===null||L===void 0||L.focus(),I(!0);const B=qo(D,se.current);if(B){const Ee=$(B);f(Ee),i==null||i(Ee)}const W=el(z.current);W.addEventListener("touchmove",P),W.addEventListener("touchend",_)});return y.useEffect(()=>{const{current:D}=z;D==null||D.addEventListener("touchstart",Q);const L=el(D);return()=>{D==null||D.removeEventListener("touchstart",Q),L.removeEventListener("mousemove",P),L.removeEventListener("mouseup",_),L.removeEventListener("touchmove",P),L.removeEventListener("touchend",_)}},[_,P,Q]),p.createElement(m2,{$disabled:t,hasMarks:!!we.length,isFocused:S,onMouseDown:G,orientation:u,ref:q,size:fn(g),...k},p.createElement("input",{disabled:t,name:l,type:"hidden",value:c??0}),we&&we.map(D=>p.createElement(g2,{$disabled:t,"data-testid":"tick",key:D.value/(r-o)*100,orientation:u,style:{[m?"bottom":"left"]:`${(D.value-o)/(r-o)*100}%`}},D.label&&p.createElement(v2,{"aria-hidden":!0,"data-testid":"mark",orientation:u},D.label))),p.createElement(E,{orientation:u,variant:x}),p.createElement(p2,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":c,onBlur:de,onFocus:me,onKeyDown:ke,orientation:u,ref:O,role:"slider",style:{[m?"bottom":"left"]:`${(m?-100:0)+100*(c-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:x}))});y2.displayName="Slider";const x2=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${M1};
  overflow-y: auto;
`,w2=y.forwardRef(function({children:t,...n},r){return p.createElement(x2,{ref:r,...n},t)});w2.displayName="TableBody";const k2=C.td`
  padding: 0 8px;
`,M2=y.forwardRef(function({children:t,...n},r){return p.createElement(k2,{ref:r,...n},t)});M2.displayName="TableDataCell";const b2=C.thead`
  display: table-header-group;
`,A2=y.forwardRef(function({children:t,...n},r){return p.createElement(b2,{ref:r,...n},t)});A2.displayName="TableHead";const E2=C.th`
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
  ${({$disabled:e})=>e&&kt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&kt()}
  }
`,S2=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Wn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return p.createElement(E2,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},p.createElement("div",null,n))});S2.displayName="TableHeadCell";const C2=C.tr`
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
`,$2=y.forwardRef(function({children:t,...n},r){return p.createElement(C2,{ref:r,...n},t)});$2.displayName="TableRow";const j2=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,N2=C(Nt)`
  &:before {
    box-shadow: none;
  }
`,I2=y.forwardRef(({children:e,...t},n)=>p.createElement(N2,null,p.createElement(j2,{ref:n,...t},e)));I2.displayName="Table";const P2=C.button`
  ${Mt()}
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
    ${Sr}
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
`,T2=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>p.createElement(P2,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));T2.displayName="Tab";const R2=C.div`
  ${Mt()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,_2=y.forwardRef(({children:e,...t},n)=>p.createElement(R2,{ref:n,...t},e));_2.displayName="TabBody";const O2=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,D2=C.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function L2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const B2=y.forwardRef(({value:e,onChange:t=Wn,children:n,rows:r=1,...o},l)=>{const i=y.useMemo(()=>{var a;const s=(a=p.Children.map(n,h=>{if(!p.isValidElement(h))return null;const v={selected:h.props.value===e,onClick:t};return p.cloneElement(h,v)}))!==null&&a!==void 0?a:[],u=L2(s,r).map((h,v)=>({key:v,tabs:h})),g=u.findIndex(h=>h.tabs.some(v=>v.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return p.createElement(O2,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>p.createElement(D2,{key:a.key},a.tabs)))});B2.displayName="Tabs";const z2=["blur","focus"],F2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function ch(e){return"nativeEvent"in e&&z2.includes(e.type)}function mh(e){return"nativeEvent"in e&&F2.includes(e.type)}const U2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Q2=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${k1};
  text-align: center;
  font-size: 1rem;
  ${e=>U2[e.position]}
`,W2=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,H2=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:h,style:v,text:x,position:k="top",...M},E)=>{const[m,c]=y.useState(!1),[f,w]=y.useState(),[b,A]=y.useState(),S=!n,I=!r,z=$=>{window.clearTimeout(f),window.clearTimeout(b);const P=window.setTimeout(()=>{c(!0),h==null||h($)},o);w(P)},O=$=>{$.persist(),ch($)?s==null||s($):mh($)&&(u==null||u($)),z($)},X=$=>{window.clearTimeout(f),window.clearTimeout(b);const P=window.setTimeout(()=>{c(!1),a==null||a($)},l);A(P)},q=$=>{$.persist(),ch($)?i==null||i($):mh($)&&(g==null||g($)),X($)},me=S?q:void 0,de=S?O:void 0,se=I?O:void 0,we=I?q:void 0,ke=S?0:void 0;return p.createElement(W2,{"data-testid":"tooltip-wrapper",onBlur:me,onFocus:de,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},p.createElement(Q2,{className:e,"data-testid":"tooltip",position:k,ref:E,show:m,style:v,...M},x),t)});H2.displayName="Tooltip";const ps=C(E1)`
  white-space: nowrap;
`,_d=T`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":T`
          cursor: pointer;

          :focus {
            ${ps} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,V2=C.ul`
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
`,G2=C.li`
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
`,K2=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Y2=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${_d};

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
`,dh=C(A1)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${_d};
`,J2=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function fh(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function ph(e){e.preventDefault()}function Od({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,g=y.useCallback(h=>{var v,x;const k=!!(h.items&&h.items.length>0),M=n.includes(h.id),E=(v=t||h.disabled)!==null&&v!==void 0?v:!1,m=E?ph:b=>l(b,h),c=E?ph:b=>l(b,h),f=i===h.id,w=p.createElement(J2,{"aria-hidden":!0},h.icon);return p.createElement(G2,{key:h.label,isRootLevel:u,role:"treeitem","aria-expanded":M,"aria-selected":f,hasItems:k},k?p.createElement(K2,{open:M},p.createElement(Y2,{onClick:m,$disabled:E},p.createElement(dh,{$disabled:E},w,p.createElement(ps,null,h.label))),M&&p.createElement(Od,{className:e,disabled:E,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(x=h.items)!==null&&x!==void 0?x:[]})):p.createElement(dh,{as:"button",$disabled:E,onClick:c},w,p.createElement(ps,null,h.label)))},[e,t,n,u,o,l,i,a]);return p.createElement(V2,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function Z2({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},g){const[h,v]=pn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[x,k]=pn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),M=y.useCallback((c,f)=>{if(i){const w=fh(h,f);i(c,w)}v(w=>fh(w,f))},[h,i,v]),E=y.useCallback((c,f)=>{k(f),l&&l(c,f)},[l,k]),m=y.useCallback((c,f)=>{c.preventDefault(),E(c,f.id),f.items&&f.items.length&&M(c,f.id)},[E,M]);return p.createElement(Od,{className:e,disabled:r,expanded:h,level:0,innerRef:g,select:m,selected:x,style:s,tree:u})}const X2=y.forwardRef(Z2);X2.displayName="TreeView";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Dd=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...u},g)=>y.createElement("svg",{ref:g,...q2,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${ex(e)}`,a].join(" "),...u},[...t.map(([h,v])=>y.createElement(h,v)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Dd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Dd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ci(){const[e,t]=y.useState(!1);return d.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx(ot,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),d.jsxs("div",{className:"hidden sm:flex",children:[d.jsx(ot,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),d.jsx(ot,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),d.jsx(ot,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),d.jsx(ot,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),d.jsxs("div",{className:"flex items-center",children:[d.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),d.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?d.jsx(nx,{size:18}):d.jsx(tx,{size:18})})]}),e&&d.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:d.jsxs("div",{className:"py-1",children:[d.jsx(ot,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),d.jsx(ot,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),d.jsx(ot,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),d.jsx(ot,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}const rx=""+new URL("oceanic-CaOGPC7J.png",import.meta.url).href,ox=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href,Ld=""+new URL("average_percent_difference-DDl9Xwvl.png",import.meta.url).href;var lx=["variant"];function ix(e,t){if(e==null)return{};var n=ax(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ax(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}var sx=function(t){return p.createElement("svg",Jl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M7 2h9M6 3h1m9 0h1M5 4h1m11 0h1M4 5h1m13 0h1M3 6h1m15 0h11M3 7h1M3 8h1M3 9h1m-1 1h1m-3 1h2m-3 1h1m27 0h1M0 13h1m26 0h1M0 14h1m26 0h1M0 15h1m28 0h1M0 16h1m28 0h1M1 17h1m26 0h1M1 18h1m26 0h1M1 19h1m-1 1h1m0 1h1m26 0h1M2 22h1m26 0h1M2 23h1m-1 1h1m0 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"#fff",d:"M7 3h9M6 4h1M5 5h1M4 6h1M4 7h1m14 0h11M4 8h1M4 9h1m-1 1h1m-4 2h26"}),p.createElement("path",{stroke:"#ff0",d:"M7 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1m0 1h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h25m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M30 7h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1M4 28h27"}),p.createElement("path",{stroke:"olive",d:"M30 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M4 27h27"}))},ux=function(t){return p.createElement("svg",Jl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h12"}),p.createElement("path",{stroke:"#fff",d:"M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h10M1 8h1m0 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#ff0",d:"M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13"}))},hx={"32x32_4":sx,"16x16_4":ux},cx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ix(t,lx),l=hx[r];return p.createElement(l,o)},mx=["variant"];function dx(e,t){if(e==null)return{};var n=fx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}var px=function(t){return p.createElement("svg",gs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M30 0h1m-1 1h1m-1 1h1M1 3h28m1 0h1M1 4h1m5 0h1m20 0h1m1 0h1M1 5h7m20 0h1m1 0h1M1 6h1m5 0h1m20 0h3M1 7h7m20 0h1m1 0h2M1 8h1m5 0h1m20 0h1m1 0h1M1 9h7m5 0h2m3 0h1m9 0h1m1 0h1M1 10h1m5 0h1m5 0h2m3 0h1m9 0h1m1 0h1M1 11h7m20 0h1m1 0h1M1 12h1m5 0h1m2 0h5m1 0h1m3 0h5m3 0h1m1 0h2M1 13h7m2 0h1m3 0h1m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1M1 14h1m5 0h1m2 0h1m3 0h1m5 0h1m3 0h1m3 0h1m1 0h1M1 15h7m2 0h5m5 0h5m3 0h1m1 0h1M1 16h1m5 0h1m20 0h1m1 0h1M1 17h7m20 0h1m1 0h1M1 18h1m5 0h1m2 0h2m3 0h6m2 0h2m3 0h1m1 0h1M1 19h7m2 0h2m3 0h1m4 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 20h1m5 0h1m2 0h2m3 0h1m4 0h1m2 0h2m3 0h1m1 0h1M1 21h7m7 0h6m7 0h1m1 0h1M1 22h1m5 0h1m20 0h3M1 23h7m5 0h1m4 0h1m9 0h1m1 0h1M1 24h1m5 0h1m20 0h1m1 0h1M1 25h28m1 0h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"olive",d:"M2 4h5M2 6h5M2 8h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5"}),p.createElement("path",{stroke:"#0f0",d:"M8 4h20M8 5h1m3 0h7m2 0h7M8 6h1m3 0h4m1 0h2m2 0h7M8 7h1m3 0h4m1 0h2m2 0h2m1 0h4M8 8h15m1 0h4M8 9h5m2 0h3m1 0h9M8 10h5m2 0h3m1 0h9M8 11h20M8 12h2m5 0h1m1 0h3m5 0h3M8 13h2m5 0h1m1 0h3m5 0h3M8 14h2m5 0h5m5 0h3M8 15h2m5 0h5m5 0h3M8 16h20M8 17h20M8 18h2m2 0h3m6 0h2m2 0h3M8 19h2m2 0h3m6 0h2m2 0h1m1 0h1M8 20h2m2 0h3m6 0h2m2 0h3M8 21h7m6 0h7M8 22h20M8 23h5m1 0h4m1 0h9M8 24h20"}),p.createElement("path",{stroke:"red",d:"M9 5h3M9 6h3M9 7h3"}),p.createElement("path",{stroke:"gray",d:"M19 5h2m-5 1h1m2 0h2m-5 1h1m2 0h2m2 0h1m5 0h1m-7 1h1m5 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-19 1h3m7 0h3m5 0h1m-19 1h3m7 0h3m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h4m9 0h1m-14 1h4m9 0h1m-1 1h1"}))},gx={"32x32_4":px},vx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=dx(t,mx),l=gx[r];return p.createElement(l,o)},yx=["variant"];function xx(e,t){if(e==null)return{};var n=wx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}var kx=function(t){return p.createElement("svg",vs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2"}),p.createElement("path",{stroke:"silver",d:"M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1"}),p.createElement("path",{stroke:"#fff",d:"M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1"}),p.createElement("path",{stroke:"#00f",d:"M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9"}),p.createElement("path",{stroke:"#000",d:"M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2"}))},Mx={"32x32_4":kx},Bd=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=xx(t,yx),l=Mx[r];return p.createElement(l,o)},bx=["variant"];function Ax(e,t){if(e==null)return{};var n=Ex(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ex(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}var Sx=function(t){return p.createElement("svg",Zl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M5 0h9M4 1h1m8 0h2M3 2h1m9 0h1m1 0h1m-3 1h1m1 0h1M2 4h1m9 0h1m2 0h1m-4 1h1m2 0h1M1 6h1m9 0h1m3 0h1m-5 1h1m3 0h1M0 8h1m9 0h1m4 0h1m-6 1h1m4 0h1M0 10h10m5 0h1M4 11h1m10 0h1M4 12h1m10 0h1M4 13h1m10 0h1M4 14h1m10 0h1M5 15h10"}),p.createElement("path",{stroke:"gray",d:"M5 1h1m2 0h1m2 0h1m2 13h1"}),p.createElement("path",{stroke:"teal",d:"M6 1h2m1 0h2m1 0h1M3 3h1m1 0h6m1 0h1M5 4h5M2 5h1m8 0h1M1 7h1m8 0h1M0 9h1m8 0h1"}),p.createElement("path",{stroke:"#0ff",d:"M4 2h9M4 3h1m6 0h1M3 4h2m5 0h2M3 5h8M2 6h9M2 7h8M1 8h9M1 9h8"}),p.createElement("path",{stroke:"silver",d:"M14 2h1m-1 1h1m-2 1h2m-2 1h2m-3 1h3m-3 1h3m-4 1h4m-4 1h2m1 0h1m-5 1h5M5 11h10M5 12h7m2 0h1M5 13h10M5 14h9"}),p.createElement("path",{stroke:"#fff",d:"M13 9h1m-2 3h2"}))},Cx=function(t){return p.createElement("svg",Zl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M9 1h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M8 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h3M7 3h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M7 4h1m18 0h1m2 0h1M6 5h1m19 0h1m2 0h1M6 6h1m18 0h1m3 0h1M5 7h1m4 0h10m5 0h1m3 0h1M5 8h1m18 0h1m4 0h1M4 9h1m4 0h10m5 0h1m4 0h1M4 10h1m18 0h1m5 0h1M3 11h1m19 0h1m5 0h1M3 12h1m18 0h1m6 0h1M2 13h1m19 0h1m6 0h1M2 14h1m18 0h1m7 0h1M1 15h1m19 0h1m7 0h1M1 16h1m18 0h1m8 0h1M0 17h1m19 0h1m8 0h1M0 18h1m18 0h1m9 0h1M0 19h1m18 0h1m9 0h1M1 20h18m10 0h1M8 21h1m20 0h1M8 22h1m20 0h1M8 23h1m20 0h1M8 24h1m20 0h1M8 25h1m20 0h1M8 26h1m20 0h1M8 27h1m20 0h1M9 28h1m19 0h1m-20 1h1m17 0h1m-18 1h17"}),p.createElement("path",{stroke:"#fff",d:"M9 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 9h1m-1 1h1m-2 2h2m-2 1h2m-3 2h3m-3 1h3m-4 2h4m-4 1h4m-5 2h5m-5 1h5m-7 2h7M9 27h17"}),p.createElement("path",{stroke:"#0ff",d:"M8 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M9 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M8 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m11 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m11 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M8 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2M7 7h1m1 0h1m11 0h1m1 0h1m2 0h2M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3M5 9h1m1 0h1m11 0h1m1 0h1m3 0h3M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M5 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h1M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m3 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h4m3 0h1m-1 1h1m-9 1h4m4 0h1M9 21h14m4 0h1m-1 1h1M9 23h13m5 0h1M9 24h13m5 0h1m-1 1h1M9 26h11m7 0h1m-2 1h2m-18 1h17"}),p.createElement("path",{stroke:"teal",d:"M26 3h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M1 19h18"}),p.createElement("path",{stroke:"gray",d:"M28 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h3m1 0h1m-1 1h1m-1 1h1m-6 1h4m1 0h1m-1 1h1m-1 1h1m-8 1h6m1 0h1m-1 1h1m-1 1h1m-9 1h7m1 0h1m-1 1h1m-1 1h1M9 22h18m1 0h1m-1 1h1m-1 1h1M9 25h18m1 0h1m-1 1h1m-1 1h1m-2 1h2m-18 1h17"}))},$x={"16x16_4":Sx,"32x32_4":Cx},jx=function(t){var n=t.variant,r=n===void 0?"16x16_4":n,o=Ax(t,bx),l=$x[r];return p.createElement(l,o)},Nx=["variant"];function Ix(e,t){if(e==null)return{};var n=Px(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Px(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}var Tx=function(t){return p.createElement("svg",ys({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M7 1h8M5 2h2m8 0h2M4 3h1m12 0h1M3 4h1m14 0h1m11 0h1M2 5h1m16 0h1m10 0h2M2 6h1m16 0h1m10 0h2M1 7h1m18 0h1m8 0h1m1 0h1M1 8h1m18 0h1m7 0h1m1 0h2M1 9h1m19 0h1m6 0h4M1 10h1m19 0h1m5 0h4M0 11h1m21 0h1m3 0h1m1 0h1M0 12h1m22 0h1m1 0h1m1 0h1M0 13h1m23 0h1m1 0h1M0 14h1m22 0h1m1 0h2M0 15h1m18 0h4m1 0h1m2 0h1M0 16h1m17 0h1m2 0h1m1 0h2m3 0h1M0 17h1m17 0h1m1 0h1m1 0h1m1 0h1m4 0h1M0 18h1m17 0h2m1 0h1m2 0h1m4 0h1M0 19h1m18 0h2m2 0h1m6 0h1M1 20h1m18 0h3m7 0h1M1 21h1m28 0h1M1 22h1m28 0h1M2 23h1m27 0h1M2 24h1m27 0h1M3 25h1m26 0h1M4 26h1m24 0h1M5 27h1m23 0h1M6 28h1m21 0h1M7 29h2m17 0h2M7 30h5m11 0h3M6 31h2m4 0h11"}),p.createElement("path",{stroke:"silver",d:"M7 2h1m6 0h1M8 3h1m1 0h1m1 0h1m1 0h2M5 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m7 0h1m1 0h1M5 6h1m1 0h1m9 0h1M2 7h1m1 0h1m1 0h1m9 0h1m1 0h1M3 8h1m1 0h1m1 0h1m9 0h1M4 9h1m1 0h1m1 0h1m9 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M2 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 13h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h2m3 0h1M2 15h1m7 0h1m1 0h1m1 0h1m1 0h2M3 16h1m5 0h1m1 0h1m1 0h1m1 0h1m10 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h3M3 18h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m9 0h1m1 0h1M2 19h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1M3 20h1m1 0h1m7 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M2 21h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m7 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 24h1m1 0h1m3 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 25h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 26h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M8 27h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M9 28h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m-16 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#fff",d:"M8 2h6M5 3h3M4 4h1M3 5h1M3 6h1M3 7h1m26 0h1M2 8h1m26 0h1M2 9h1m-1 1h1m-2 1h1m25 0h1M1 12h1m24 0h1M1 13h1m23 0h1M1 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 5h1m0 1h1m0 1h1m0 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M9 3h1m1 0h1m1 0h1M6 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 5h1m1 0h1m7 0h1m1 0h1M4 6h1m1 0h1m1 0h1m7 0h1M5 7h1m1 0h1m9 0h1M4 8h1m1 0h1m1 0h1m9 0h1M3 9h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M3 11h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m9 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1M2 16h1m7 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m9 0h1M3 19h1m1 0h1m7 0h1m1 0h1m1 0h1m7 0h1m1 0h1M2 20h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M3 21h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m7 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m5 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 26h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 27h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1M8 28h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"olive",d:"M16 3h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m0 1h1m-5 1h3m-4 1h1m-2 1h1m9 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-11 1h1m10 0h1m-11 1h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h1m-2 1h2m-3 1h2M9 29h1m13 0h3m-14 1h11"}),p.createElement("path",{stroke:"#f0f",d:"M8 5h6M9 6h6M8 7h7m-5 1h6m-4 1h3"}),p.createElement("path",{stroke:"purple",d:"M15 6h1m-1 1h1M9 8h1m6 0h1m-7 1h2m3 0h2m-5 1h4"}),p.createElement("path",{stroke:"#0f0",d:"M5 11h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1"}),p.createElement("path",{stroke:"green",d:"M6 11h1m-2 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h2m-8 1h2m1 0h1m1 0h2m-6 1h5"}),p.createElement("path",{stroke:"#00f",d:"M24 14h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 5h3m-5 1h6m-7 1h8m-8 1h8m-7 1h5"}),p.createElement("path",{stroke:"gray",d:"M25 15h2m-2 1h1M7 28h1"}),p.createElement("path",{stroke:"red",d:"M8 18h3m-4 1h4m-5 1h5m-5 1h6m-5 1h6m-5 1h3"}),p.createElement("path",{stroke:"maroon",d:"M11 19h1m-1 1h1m0 1h1m-7 1h1m6 0h1m-7 1h1m3 0h2m-5 1h3"}),p.createElement("path",{stroke:"navy",d:"M21 24h1m0 1h1m-1 1h1m-9 1h1m5 0h2m-7 1h5"}))},Rx={"32x32_4":Tx},_x=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Ix(t,Nx),l=Rx[r];return p.createElement(l,o)},Ox=["variant"];function Dx(e,t){if(e==null)return{};var n=Lx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Lx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}var Bx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 9h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 10h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 11h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 12h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 13h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 14h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 15h1m4 0h1m4 0h1m4 0h1m1 0h1m2 0h1m4 0h1m3 0h1M1 16h1m2 0h1m1 0h1m4 0h1m4 0h2m1 0h1m1 0h1m4 0h1m3 0h1M1 17h1m4 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h1m3 0h1M1 18h1m2 0h1m1 0h1m4 0h1m3 0h2m3 0h2m4 0h1m3 0h1M1 19h1m4 0h1m3 0h3m1 0h1m1 0h1m3 0h2m4 0h1m1 0h1m1 0h1M1 20h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h1m4 0h1m4 0h2m2 0h1M1 21h1m4 0h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 22h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h2m2 0h2m3 0h1M1 23h1m4 0h1m1 0h1m2 0h1m4 0h1m4 0h2m1 0h1m1 0h1m3 0h1M1 24h1m2 0h1m1 0h1m1 0h1m2 0h1m4 0h1m4 0h1m1 0h1m2 0h1m3 0h1M1 25h1m4 0h2m3 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 26h1m2 0h1m1 0h23m1 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}))},zx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m28 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M1 12h1m28 0h1M1 13h1m28 0h1M1 14h1m28 0h1M1 15h1m28 0h1M1 16h1m28 0h1M1 17h1m28 0h1M1 18h1m28 0h1M1 19h1m28 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M1 23h1m28 0h1M1 24h1m28 0h1M1 25h1m28 0h1M1 26h1m28 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}),p.createElement("path",{stroke:"gray",d:"M31 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 29h30"}),p.createElement("path",{stroke:"#00f",d:"M4 8h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 9h1m4 0h1m4 0h1m4 0h1m4 0h1M4 10h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 11h1m4 0h1m4 0h1m4 0h1m4 0h1M4 12h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 13h1m4 0h1m4 0h1m4 0h1m4 0h1M4 14h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 15h1m4 0h1m4 0h1m4 0h1m4 0h1M4 16h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 17h1m4 0h1m9 0h1m4 0h1M4 18h1m1 0h1m9 0h1m4 0h1m4 0h1M6 19h1m4 0h1m4 0h1m4 0h1m4 0h1M4 20h1m1 0h1m4 0h1m4 0h1m9 0h1M6 21h1m4 0h1m4 0h1M4 22h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 23h1m4 0h1m4 0h1m4 0h1m4 0h1M4 24h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 25h1m4 0h1m4 0h1m4 0h1m4 0h1M4 26h1m2 0h22"}),p.createElement("path",{stroke:"#f0f",d:"M18 15h1m-2 1h1m1 0h1m-4 1h1m2 0h1m-9 1h1m3 0h1m4 0h1m-11 1h1m1 0h1m1 0h1m5 0h1m7 0h1m-19 1h1m2 0h1m7 0h1m5 0h1M9 21h1m11 0h1m4 0h1M9 22h1m12 0h1m2 0h1M8 23h1m13 0h1m1 0h1M8 24h1m14 0h1M7 25h1m-2 1h1"}))},Fx={"32x32_1":Bx,"32x32_4":zx},Ux=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=Dx(t,Ox),l=Fx[r];return p.createElement(l,o)},Qx=["variant"];function Wx(e,t){if(e==null)return{};var n=Hx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ql(){return ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ql.apply(this,arguments)}var Vx=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M16 0h6m-9 1h3m-5 1h3m-4 1h1M9 4h1M8 5h1M8 6h1m19 0h1M7 7h1m19 0h1m1 0h1M7 8h1m18 0h1m1 0h1M6 9h1m10 0h4m4 0h1m1 0h1m1 0h1M6 10h1m9 0h1m4 0h1m2 0h1m1 0h1m1 0h1m1 0h1M6 11h1m8 0h1m6 0h2m1 0h1m1 0h1m1 0h1M6 12h1m8 0h1m6 0h1M6 13h2m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M6 14h1m1 0h1m1 0h1m1 0h1m1 0h2m6 0h1M6 15h2m1 0h1m1 0h1m1 0h1m2 0h1m4 0h1M6 16h1m1 0h1m1 0h1m1 0h1m4 0h4M3 17h5m1 0h1m1 0h1M2 18h1m4 0h2m1 0h1M1 19h1m6 0h2M0 20h1m7 0h1m-9 1h1m8 0h1M0 22h1m9 0h1m17 0h1M0 23h1m2 0h10m11 0h1m2 0h2M0 24h1m12 0h3m9 0h4M0 25h1m13 0h1m7 0h3m1 0h3M0 26h1m16 0h6m3 0h3M0 27h1m25 0h3M0 28h1m25 0h2M0 29h27"}),p.createElement("path",{stroke:"#ff0",d:"M16 1h3m-3 1h3m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m0 9h1m-2 1h2m-1 1h1m-2 1h2m-1 1h1m-2 1h3m-2 1h2m-3 1h3"}),p.createElement("path",{stroke:"silver",d:"M19 1h3m-3 1h6m-6 1h8m-8 1h8M9 5h2m8 0h7m1 0h1M10 6h2m7 0h6m1 0h1M11 7h2m6 0h5m1 0h1m2 0h1M8 8h2m2 0h2m5 0h4m1 0h1m2 0h1m1 0h1M7 9h5m1 0h2m6 0h1m1 0h1m2 0h1m1 0h1m1 0h1M7 10h6m1 0h2m9 0h1m1 0h1m1 0h1M7 11h7m10 0h1m1 0h1m1 0h1m1 0h1M7 12h8m8 0h8M8 13h1m1 0h1m1 0h1m1 0h1m8 0h8M7 14h1m1 0h1m1 0h1m1 0h1m9 0h8M8 15h1m1 0h1m1 0h1m2 0h1m6 0h9M7 16h1m1 0h1m1 0h1m2 0h1m1 0h1m5 0h9M8 17h1m1 0h1m2 0h1m1 0h4m1 0h1m2 0h7M3 18h4m2 0h1m2 0h1m1 0h4m3 0h1m2 0h6M2 19h6m3 0h1m1 0h6m2 0h1m3 0h4m-19 1h1m1 0h6m4 0h1m3 0h3M2 21h7m2 0h8m3 0h1m4 0h1M2 22h1m8 0h7m5 0h1M2 23h1m10 0h6m4 0h1M2 24h1m13 0h2M2 25h1m22 0h1M2 26h1m3 0h11m6 0h3M2 27h1m3 0h20M2 28h24"}),p.createElement("path",{stroke:"#000",d:"M22 1h3m0 1h2m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-15 1h4m10 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-15 1h4m10 0h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h2m-3 1h1m1 0h1m-5 1h2m2 0h1M3 24h10m9 0h3m4 0h1m-15 1h7m7 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 30h26"}),p.createElement("path",{stroke:"#0ff",d:"M14 2h2m-3 1h3m-2 1h3m-3 1h3M9 6h1m5 0h2M8 7h3m4 0h2m-7 1h2m4 0h1m-5 1h1m0 1h1m0 1h1m6 5h1m-1 1h2m-1 1h2m-2 1h3m-2 1h3m-3 1h4m-3 1h3"}),p.createElement("path",{stroke:"#0f0",d:"M11 3h2m-3 1h4m-3 1h3m-2 1h3m-2 1h2m-1 1h2m-1 1h2m3 9h1m-1 1h1m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h1M3 26h3"}),p.createElement("path",{stroke:"#fff",d:"M27 4h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-3 1h2m-10 5h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1M1 20h7m1 0h1m1 0h1M1 21h1m8 0h1M1 22h1m1 0h7m-9 1h1m-1 1h1m-1 1h1m1 0h11M1 26h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"green",d:"M3 27h3"}))},Gx=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M9 1h3M7 2h2m3 0h2M6 3h1M5 4h1M5 5h1m3 0h1m1 0h1M5 6h1M5 7h1m3 0h1m1 0h1M1 8h5M0 9h1m5 0h1m-7 1h1m6 0h2m-9 1h1m12 0h1M0 12h1m12 0h1M0 13h14"}),p.createElement("path",{stroke:"#ff0",d:"M9 2h2M9 3h2M9 4h2m1 4h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 2h1m-1 1h3m-3 1h2m1 0h1M6 5h1m6 0h2M6 6h2m4 0h3M6 7h3m4 0h2M6 8h3m1 0h2M7 9h1m1 0h3M2 10h5m2 0h3m0 1h1M2 12h2m5 0h4"}),p.createElement("path",{stroke:"#0ff",d:"M7 3h2M8 4h1m3 3h1m0 1h2"}),p.createElement("path",{stroke:"#000",d:"M14 3h1m0 1h1m-6 1h1m4 0h1M9 6h1m1 0h1m3 0h1m-6 1h1m4 0h1m-1 1h1m-2 1h1m-3 1h3M4 11h8m2 0h1m-1 1h1m-1 1h1M1 14h13"}),p.createElement("path",{stroke:"#0f0",d:"M6 4h2M7 5h2M8 6h1m3 3h1M2 11h1"}),p.createElement("path",{stroke:"#fff",d:"M13 4h1m-2 1h1M9 8h1M1 9h5m2 0h1m-8 1h1m-1 1h1m-1 1h1m2 0h5"}),p.createElement("path",{stroke:"green",d:"M3 11h1"}))},Kx={"32x32_4":Vx,"16x16_4":Gx},Yx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Wx(t,Qx),l=Kx[r];return p.createElement(l,o)},Jx=["variant"];function Zx(e,t){if(e==null)return{};var n=Xx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var qx=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),p.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),p.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),p.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),p.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),p.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),p.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},ew=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),p.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),p.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),p.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),p.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},tw={"32x32_4":qx,"16x16_4":ew},nw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Zx(t,Jx),l=tw[r];return p.createElement(l,o)};function rw(){const[e,t]=y.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=l=>{t({...e,[l]:{...e[l],open:!e[l].open,minimized:!1}})},r=l=>{t({...e,[l]:{...e[l],minimized:!e[l].minimized}})},o=l=>{const i=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[l]:{...e[l],zIndex:i+1}})};return d.jsxs(d.Fragment,{children:[d.jsx(Ci,{}),d.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${ox})`},children:[d.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[d.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[d.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:d.jsx(Bd,{variant:"32x32_4"})}),d.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),d.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[d.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:d.jsx(cx,{variant:"32x32_4"})}),d.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),d.jsxs(ot,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[d.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:d.jsx(nw,{variant:"32x32_4"})}),d.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&d.jsxs(xt,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[d.jsxs(qe,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{children:"Welcome to DanielleOS"}),d.jsx("div",{children:d.jsx(te,{onClick:()=>n("about"),children:d.jsx("span",{className:"close-icon"})})})]}),d.jsx(Xe,{children:d.jsxs("div",{className:"text-center p-6",children:[d.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),d.jsx("p",{className:"text-lg mb-3",children:"Aspiring Software Engineer"}),d.jsx("p",{className:"italic mb-8",children:"Full-Time Student, Nostalgia Fetishist, and Research Assistant"}),d.jsx(te,{onClick:()=>n("welcome"),children:"OK"})]})})]}),e.about.open&&!e.about.minimized&&d.jsxs(xt,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[d.jsxs(qe,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{children:"About Me"}),d.jsx("div",{children:d.jsx(te,{onClick:()=>r("about"),children:d.jsx("span",{className:"close-icon"})})})]}),d.jsxs(Xe,{children:[d.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),d.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),d.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[d.jsx(te,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),d.jsx(te,{size:"sm",style:{fontSize:"12px"},children:"React"}),d.jsx(te,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),d.jsx(te,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),d.jsx(te,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),d.jsx("div",{className:"flex justify-end",children:d.jsx(ot,{to:"/about",children:d.jsx(te,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&d.jsxs(xt,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[d.jsxs(qe,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{children:"My Projects"}),d.jsx("div",{children:d.jsx(te,{onClick:()=>r("projects"),children:d.jsx("span",{className:"close-icon"})})})]}),d.jsxs(Xe,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-bold mb-1",children:"Computational Model of Yapese Navigation"}),d.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:d.jsx("img",{src:rx})})]}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold mb-1",children:"Architechural Optimizations for DP-SGD"}),d.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:d.jsx("img",{src:Ld})})]})]}),d.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),d.jsx("div",{className:"flex justify-end",children:d.jsx(ot,{to:"/projects",children:d.jsx(te,{children:"View All Projects →"})})})]})]}),d.jsx(fd,{style:{position:"fixed",bottom:0,top:"auto"},children:d.jsxs(Yl,{style:{justifyContent:"space-between"},children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx(te,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([l,{open:i}])=>i&&d.jsx(te,{active:!e[l].minimized,onClick:()=>{e[l].minimized?(r(l),o(l)):r(l)},style:{fontSize:"12px",marginRight:"4px"},children:l==="welcome"?"Welcome":l==="about"?"About Me":l==="projects"?"My Projects":"Connect With Me"},l))]}),d.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})]})}const ow=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,lw="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",iw=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,aw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,sw=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,uw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,hw=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,gh=C(xt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,zr=C.span`
  color: #4b00d9;
  font-weight: bold;
`,Tt=C.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,cw=()=>d.jsxs(d.Fragment,{children:[d.jsx(Ci,{}),d.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${ow})`},children:[d.jsx("div",{className:"absolute top-24 left-4",children:d.jsx("img",{src:lw,alt:"PMM"})}),d.jsx("div",{className:"absolute mid top-1/2 left-10",children:d.jsx("img",{src:iw,alt:"PMM"})}),d.jsxs("div",{className:"w-full max-w-4xl",children:[d.jsxs(gh,{className:"w-full mb-4",children:[d.jsxs(qe,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[d.jsx("span",{children:"#ABOUT ME"}),d.jsx(te,{style:{marginLeft:"auto"},children:d.jsx("span",{className:"close-icon"})})]}),d.jsx(Xe,{className:"bg-[#FFFAF0] p-4",children:d.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[d.jsx("div",{className:"col-span-1",children:d.jsxs(Tt,{children:[d.jsx("img",{src:aw,alt:"Character avatar",className:"w-full"}),d.jsx("img",{src:sw,alt:"Character avatar",className:"w-full mt-2"}),d.jsx("img",{src:uw,alt:"Character avatar",className:"w-full mt-2"})]})}),d.jsxs("div",{className:"col-span-3 grid gap-4",children:[d.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[d.jsxs(Tt,{children:[d.jsx(zr,{children:"NAME:"})," Danielle"]}),d.jsxs(Tt,{children:[d.jsx(zr,{children:"AGE:"})," 20"]}),d.jsxs(Tt,{children:[d.jsx(zr,{children:"LOCATION:"})," USA"]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[d.jsxs(Tt,{children:[d.jsx(zr,{children:"MBTI:"})," INFJ"]}),d.jsxs(Tt,{className:"col-span-2",children:[d.jsx(zr,{children:"ASTRO:"})," ♋♏♏"]})]}),d.jsxs(Tt,{children:[d.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),d.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),d.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub Profile ",d.jsx("a",{href:"https://github.com/DanChigo",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),d.jsxs(gh,{className:"w-full",children:[d.jsxs(qe,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[d.jsx("span",{children:"#INTERESTS"}),d.jsx(te,{style:{marginLeft:"auto"},children:d.jsx("span",{className:"close-icon"})})]}),d.jsx(Xe,{className:"bg-[#FFFAF0] p-4",children:d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs(Tt,{children:[d.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),d.jsxs("ul",{className:"list-disc pl-5",children:[d.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),d.jsx("li",{children:"Everything Everywhere All at Once"}),d.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),d.jsxs(Tt,{children:[d.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),d.jsxs("ul",{className:"list-disc pl-5",children:[d.jsx("li",{children:"Coding"}),d.jsx("li",{children:"Writing"}),d.jsx("li",{children:"Reading"})]})]})]})})]})]}),d.jsx("div",{className:"absolute bottom-4 right-4",children:d.jsx("img",{src:hw,alt:"strawberry"})})]})]}),vh=C(xt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,mw=C.div`
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
`,dw=C.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`,fw=C.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`,pw=()=>{var i;const[e,t]=y.useState(null),[n,r]=y.useState(!0),o=[{id:"Project oCEANIC",title:"Project oceanic: Computing Environmental Adaptation and Navigation ​in Island Communities",description:"This is a full-stack web application built with React and Node.js.",image:"/api/placeholder/500/300",link:"#",technologies:["React","Node.js","Flask","Python","MERRA-2","ARCGIS"]},{id:"DP-SGD Optimization",title:"GPU Architectural Optimizations for Differentially Private Stochastic Gradient Descent ",description:"A machine learning project focused on balancing privacy with performance.",image:Ld,link:"#",technologies:["PyTorch","Accel-Sim","C++"]},{id:"Stock Tracker",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","Firebase"]},{id:"MiniScala Compiler",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],l={"Project oCEANIC":d.jsx(jx,{variant:"32x32_4"}),"DP-SGD Optimization":d.jsx(vx,{variant:"32x32_4"}),"Stock Tracker":d.jsx(Ux,{variant:"32x32_4"}),"MiniScala Compiler":d.jsx(_x,{variant:"32x32_4"}),project5:d.jsx(Yx,{variant:"32x32_4"}),project6:d.jsx(Bd,{variant:"32x32_4"})};return d.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[d.jsx(Ci,{})," ",d.jsxs(fw,{children:[d.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>d.jsxs(mw,{onClick:()=>t(a.id),children:[d.jsx("div",{children:l[a.id]}),d.jsx(dw,{children:a.id})]},a.id))]}),n&&d.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:d.jsxs(vh,{children:[d.jsxs(qe,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[d.jsx("span",{children:"#PROJECTS"}),d.jsx(te,{style:{marginLeft:"auto"},onClick:()=>r(!1),children:d.jsx("span",{children:"×"})})]}),d.jsxs(Xe,{className:"bg-white p-4",children:[d.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),d.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:d.jsxs(vh,{className:"w-4/5 max-w-4xl",children:[d.jsxs(qe,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[d.jsx("span",{children:a.title}),d.jsx(te,{style:{marginLeft:"auto"},onClick:()=>t(null),children:d.jsx("span",{children:"×"})})]}),d.jsx(Xe,{className:"bg-white p-4",children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),d.jsx("p",{className:"mb-4",children:a.description}),d.jsxs("div",{className:"mb-4",children:[d.jsx("strong",{children:"Technologies:"}),d.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>d.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),d.jsxs("div",{className:"flex justify-end",children:[d.jsx(te,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),d.jsx(te,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),d.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[d.jsx(te,{className:"mr-3",children:d.jsxs("span",{className:"flex items-center text-sm",children:[d.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),d.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&d.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[d.jsx("img",{src:l[e],alt:"Running",className:"w-4 h-4 mr-1"}),(i=o.find(a=>a.id===e))==null?void 0:i.title]})]})]})},gw=""+new URL("lep-DPuAEVX5.png",import.meta.url).href,vw=()=>{const[e,t]=y.useState(null),n=[{title:"First Post",content:"This is the content of the first post.",date:"2023-10-01"},{title:"Second Post",content:"This is the content of the second post.",date:"2023-10-02"},{title:"Third Post",content:"This is the content of the third post.",date:"2023-10-03"},{title:"Fourth Post",content:"This is the content of the fourth post.",date:"2023-10-04"},{title:"Fifth Post",content:"This is the content of the fifth post.",date:"2023-10-05"},{title:"Sixth Post",content:"This is the content of the sixth post.",date:"2023-10-06"},{title:"Seventh Post",content:"This is the content of the seventh post.",date:"2023-10-07"},{title:"Eighth Post",content:"This is the content of the eighth post.",date:"2023-10-08"}];return d.jsxs(d.Fragment,{children:[d.jsx(Ci,{}),d.jsx("div",{className:"h-screen w-full overflow-hidden relative bg-cover",style:{backgroundImage:`url(${gw})`},children:d.jsxs("div",{className:"flex gap-4 p-5 h-[calc(100vh-20px)]",children:[d.jsx("div",{id:"side panel",className:"flex-1 flex items-center justify-end pr-6",children:d.jsxs(xt,{className:"w-[250px] h-1/2 ",children:[d.jsxs(qe,{className:"flex gap-0.5 flex-row items-center justify-between",children:["Entries",d.jsx(te,{className:"w-1 h-1",children:d.jsx("span",{className:"close-icon"})})]}),d.jsx(Xe,{className:"",children:d.jsx(Eo,{className:"w-[200px] h-[260px] bg-slate-100",children:d.jsx(gd,{children:n.map((r,o)=>d.jsxs("div",{children:[d.jsx(pd,{onClick:()=>t(r),style:{width:"145px",backgroundColor:e===r?"#c3c7cb":"transparent"},children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"font-bold",children:r.title}),d.jsx("span",{className:"text-xs",children:r.date})]})}),o<n.length-1&&d.jsx(S1,{})]},o))})})})]})}),d.jsx("div",{className:"flex-[2] mt-12",children:d.jsxs(xt,{className:"w-[700px] h-full flex items-center justify-center",children:[d.jsxs(qe,{className:"flex gap-0.5 flex-row items-center justify-between",children:["Blog",d.jsx(te,{className:"w-1 h-1",children:d.jsx("span",{className:"close-icon"})})]}),d.jsx(Xe,{className:"flex justify-center items-center",children:d.jsx(Nd,{children:d.jsx("div",{className:"h-[400px] w-[600px] bg-pink-400",children:d.jsx("p",{children:"Under construction"})})})})]})}),d.jsx("div",{className:"flex-1 mt-12",children:d.jsxs(xt,{className:"w-3/4 h-5/6",children:[d.jsx(qe,{children:"Blog"}),d.jsx(Xe,{children:d.jsx(Eo,{})})]})})]})})]})};var yw={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},xw=yw;const ww=yh(xw),kw=()=>d.jsx("div",{style:{padding:"50px"},children:d.jsxs(xt,{style:{width:"350px"},children:[d.jsx(qe,{children:"ScrollView Test"}),d.jsx(Xe,{children:d.jsx(Eo,{style:{width:"300px",height:"200px"},children:d.jsxs("div",{children:[d.jsx("p",{style:{width:400},children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"}),d.jsx("p",{children:"React95 is the best UI library ever created"})]})})})]})}),Mw=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,bw=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,Aw=gv`
  ${fg}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Mw}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${bw}') format('woff2');
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
`;function Ew(){return d.jsx("div",{children:d.jsxs(dv,{theme:ww,children:[d.jsx(Aw,{}),d.jsx(hg,{children:d.jsx("div",{className:"min-h-screen",children:d.jsx("main",{children:d.jsxs(rg,{children:[d.jsx(Kn,{path:"/",element:d.jsx(rw,{})}),d.jsx(Kn,{path:"/about",element:d.jsx(cw,{})}),d.jsx(Kn,{path:"/projects",element:d.jsx(pw,{})}),d.jsx(Kn,{path:"/blog",element:d.jsx(vw,{})}),d.jsx(Kn,{path:"/test",element:d.jsx(kw,{})})]})})})})]})})}Pm(document.getElementById("root")).render(d.jsx(y.StrictMode,{children:d.jsx(Ew,{})}));
