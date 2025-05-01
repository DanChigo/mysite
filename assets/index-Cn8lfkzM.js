function Wd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah={exports:{}},ri={},bh={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Hd=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Xd=Symbol.for("react.memo"),qd=Symbol.for("react.lazy"),R1=Symbol.iterator;function e0(e){return e===null||typeof e!="object"?null:(e=R1&&e[R1]||e["@@iterator"],typeof e=="function"?e:null)}var Mh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eh=Object.assign,Sh={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Sh,this.updater=n||Mh}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ch(){}Ch.prototype=jr.prototype;function As(e,t,n){this.props=e,this.context=t,this.refs=Sh,this.updater=n||Mh}var bs=As.prototype=new Ch;bs.constructor=As;Eh(bs,jr.prototype);bs.isPureReactComponent=!0;var P1=Array.isArray,$h=Object.prototype.hasOwnProperty,Ms={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function Nh(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)$h.call(t,r)&&!jh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:$o,type:e,key:l,ref:i,props:o,_owner:Ms.current}}function t0(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function n0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var T1=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n0(""+e.key):t.toString(36)}function rl(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case $o:case Qd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ri(i,0):r,P1(o)?(n="",e!=null&&(n=e.replace(T1,"$&/")+"/"),rl(o,t,n,"",function(u){return u})):o!=null&&(Es(o)&&(o=t0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(T1,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",P1(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ri(l,a);i+=rl(l,t,n,s,o)}else if(s=e0(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ri(l,a++),i+=rl(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _o(e,t,n){if(e==null)return e;var r=[],o=0;return rl(e,r,"","",function(l){return t.call(n,l,o++)}),r}function r0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ol={transition:null},o0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Ms};function Ih(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=jr;Y.Fragment=Hd;Y.Profiler=Gd;Y.PureComponent=As;Y.StrictMode=Vd;Y.Suspense=Zd;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;Y.act=Ih;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eh({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)$h.call(t,s)&&!jh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$o,type:e.type,key:o,ref:l,props:r,_owner:i}};Y.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kd,_context:e},e.Consumer=e};Y.createElement=Nh;Y.createFactory=function(e){var t=Nh.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Jd,render:e}};Y.isValidElement=Es;Y.lazy=function(e){return{$$typeof:qd,_payload:{_status:-1,_result:e},_init:r0}};Y.memo=function(e,t){return{$$typeof:Xd,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ol.transition;ol.transition={};try{e()}finally{ol.transition=t}};Y.unstable_act=Ih;Y.useCallback=function(e,t){return Fe.current.useCallback(e,t)};Y.useContext=function(e){return Fe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Fe.current.useEffect(e,t)};Y.useId=function(){return Fe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Fe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};Y.useRef=function(e){return Fe.current.useRef(e)};Y.useState=function(e){return Fe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Fe.current.useTransition()};Y.version="18.3.1";bh.exports=Y;var y=bh.exports;const p=kh(y),l0=Wd({__proto__:null,default:p},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=y,a0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,h0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function Rh(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)u0.call(t,r)&&!c0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:a0,type:e,key:l,ref:i,props:o,_owner:h0.current}}ri.Fragment=s0;ri.jsx=Rh;ri.jsxs=Rh;Ah.exports=ri;var h=Ah.exports,Ph={exports:{}},nt={},Th={exports:{}},_h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,R){var _=$.length;$.push(R);e:for(;0<_;){var J=_-1>>>1,V=$[J];if(0<o(V,R))$[J]=R,$[_]=V,_=J;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var R=$[0],_=$.pop();if(_!==R){$[0]=_;e:for(var J=0,V=$.length,L=V>>>1;J<L;){var B=2*(J+1)-1,Z=$[B],z=B+1,G=$[z];if(0>o(Z,_))z<V&&0>o(G,Z)?($[J]=G,$[z]=_,J=z):($[J]=Z,$[B]=_,J=B);else if(z<V&&0>o(G,_))$[J]=G,$[z]=_,J=z;else break e}}return R}function o($,R){var _=$.sortIndex-R.sortIndex;return _!==0?_:$.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],g=1,c=null,v=3,x=!1,k=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f($){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=$)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function w($){if(A=!1,f($),!k)if(n(s)!==null)k=!0,we(b);else{var R=n(u);R!==null&&ke(w,R.startTime-$)}}function b($,R){k=!1,A&&(A=!1,d(I),I=-1),x=!0;var _=v;try{for(f(R),c=n(s);c!==null&&(!(c.expirationTime>R)||$&&!U());){var J=c.callback;if(typeof J=="function"){c.callback=null,v=c.priorityLevel;var V=J(c.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?c.callback=V:c===n(s)&&r(s),f(R)}else r(s);c=n(s)}if(c!==null)var L=!0;else{var B=n(u);B!==null&&ke(w,B.startTime-R),L=!1}return L}finally{c=null,v=_,x=!1}}var E=!1,S=null,I=-1,F=5,O=-1;function U(){return!(e.unstable_now()-O<F)}function D(){if(S!==null){var $=e.unstable_now();O=$;var R=!0;try{R=S(!0,$)}finally{R?ne():(E=!1,S=null)}}else E=!1}var ne;if(typeof m=="function")ne=function(){m(D)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=D,ne=function(){ue.postMessage(null)}}else ne=function(){M(D,0)};function we($){S=$,E||(E=!0,ne())}function ke($,R){I=M(function(){$(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,we(b))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(v){case 1:case 2:case 3:var R=3;break;default:R=v}var _=v;v=R;try{return $()}finally{v=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,R){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var _=v;v=$;try{return R()}finally{v=_}},e.unstable_scheduleCallback=function($,R,_){var J=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?J+_:J):_=J,$){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=_+V,$={id:g++,callback:R,priorityLevel:$,startTime:_,expirationTime:V,sortIndex:-1},_>J?($.sortIndex=_,t(u,$),n(s)===null&&$===n(u)&&(A?(d(I),I=-1):A=!0,ke(w,_-J))):($.sortIndex=V,t(s,$),k||x||(k=!0,we(b))),$},e.unstable_shouldYield=U,e.unstable_wrapCallback=function($){var R=v;return function(){var _=v;v=R;try{return $.apply(this,arguments)}finally{v=_}}}})(_h);Th.exports=_h;var m0=Th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=y,tt=m0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oh=new Set,oo={};function Fn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(oo[e]=t,e=0;e<t.length;e++)Oh.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,f0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_1={},O1={};function p0(e){return ca.call(O1,e)?!0:ca.call(_1,e)?!1:f0.test(e)?O1[e]=!0:(_1[e]=!0,!1)}function g0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v0(e,t,n,r){if(t===null||typeof t>"u"||g0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Te[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,Cs);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v0(t,n,o,r)&&(n=null),r||o===null?p0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),js=Symbol.for("react.strict_mode"),ma=Symbol.for("react.profiler"),Dh=Symbol.for("react.provider"),Lh=Symbol.for("react.context"),Ns=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Bh=Symbol.for("react.offscreen"),D1=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=D1&&e[D1]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Pi;function Wr(e){if(Pi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Ti=!1;function _i(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function y0(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Zn:return"Portal";case ma:return"Profiler";case js:return"StrictMode";case da:return"Suspense";case fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lh:return(e.displayName||"Context")+".Consumer";case Dh:return(e._context.displayName||"Context")+".Provider";case Ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Is:return t=e.displayName||null,t!==null?t:pa(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return pa(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(t);case 8:return t===js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w0(e){var t=zh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=w0(e))}function Fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function L1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uh(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function va(e,t){Uh(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function B1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function z1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Qr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Wh(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function F1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Vh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Gh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var A0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,mr=null,dr=null;function U1(e){if(e=Io(e)){if(typeof Ma!="function")throw Error(j(280));var t=e.stateNode;t&&(t=si(t),Ma(e.stateNode,e.type,t))}}function Kh(e){mr?dr?dr.push(e):dr=[e]:mr=e}function Yh(){if(mr){var e=mr,t=dr;if(dr=mr=null,U1(e),t)for(e=0;e<t.length;e++)U1(t[e])}}function Jh(e,t){return e(t)}function Zh(){}var Oi=!1;function Xh(e,t,n){if(Oi)return e(t,n);Oi=!0;try{return Jh(e,t,n)}finally{Oi=!1,(mr!==null||dr!==null)&&(Zh(),Yh())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ea=!1;if(Ft)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Ea=!1}function b0(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Yr=!1,kl=null,Al=!1,Sa=null,M0={onError:function(e){Yr=!0,kl=e}};function E0(e,t,n,r,o,l,i,a,s){Yr=!1,kl=null,b0.apply(M0,arguments)}function S0(e,t,n,r,o,l,i,a,s){if(E0.apply(this,arguments),Yr){if(Yr){var u=kl;Yr=!1,kl=null}else throw Error(j(198));Al||(Al=!0,Sa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W1(e){if(Un(e)!==e)throw Error(j(188))}function C0(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return W1(o),e;if(l===r)return W1(o),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ec(e){return e=C0(e),e!==null?tc(e):null}function tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tc(e);if(t!==null)return t;e=e.sibling}return null}var nc=tt.unstable_scheduleCallback,Q1=tt.unstable_cancelCallback,$0=tt.unstable_shouldYield,j0=tt.unstable_requestPaint,ge=tt.unstable_now,N0=tt.unstable_getCurrentPriorityLevel,Ps=tt.unstable_ImmediatePriority,rc=tt.unstable_UserBlockingPriority,bl=tt.unstable_NormalPriority,I0=tt.unstable_LowPriority,oc=tt.unstable_IdlePriority,oi=null,St=null;function R0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:_0,P0=Math.log,T0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(P0(e)/T0|0)|0}var Bo=64,zo=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Hr(a):(l&=i,l!==0&&(r=Hr(l)))}else i=n&~o,i!==0?r=Hr(i):l!==0&&(r=Hr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function O0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-gt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=O0(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function Di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ac,_s,sc,uc,hc,$a=!1,Fo=[],nn=null,rn=null,on=null,ao=new Map,so=new Map,Zt=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function H1(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function Or(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Io(t),t!==null&&_s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function z0(e,t,n,r,o){switch(t){case"focusin":return nn=Or(nn,e,t,n,r,o),!0;case"dragenter":return rn=Or(rn,e,t,n,r,o),!0;case"mouseover":return on=Or(on,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ao.set(l,Or(ao.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,so.set(l,Or(so.get(l)||null,e,t,n,r,o)),!0}return!1}function cc(e){var t=En(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=qh(n),t!==null){e.blockedOn=t,hc(e.priority,function(){sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return t=Io(n),t!==null&&_s(t),e.blockedOn=n,!1;t.shift()}return!0}function V1(e,t,n){ll(e)&&n.delete(t)}function F0(){$a=!1,nn!==null&&ll(nn)&&(nn=null),rn!==null&&ll(rn)&&(rn=null),on!==null&&ll(on)&&(on=null),ao.forEach(V1),so.forEach(V1)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,F0)))}function uo(e){function t(o){return Dr(o,e)}if(0<Fo.length){Dr(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Dr(nn,e),rn!==null&&Dr(rn,e),on!==null&&Dr(on,e),ao.forEach(t),so.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)cc(n),n.blockedOn===null&&Zt.shift()}var fr=Ht.ReactCurrentBatchConfig,El=!0;function U0(e,t,n,r){var o=te,l=fr.transition;fr.transition=null;try{te=1,Os(e,t,n,r)}finally{te=o,fr.transition=l}}function W0(e,t,n,r){var o=te,l=fr.transition;fr.transition=null;try{te=4,Os(e,t,n,r)}finally{te=o,fr.transition=l}}function Os(e,t,n,r){if(El){var o=ja(e,t,n,r);if(o===null)Gi(e,t,r,Sl,n),H1(e,r);else if(z0(o,e,t,n,r))r.stopPropagation();else if(H1(e,r),t&4&&-1<B0.indexOf(e)){for(;o!==null;){var l=Io(o);if(l!==null&&ac(l),l=ja(e,t,n,r),l===null&&Gi(e,t,r,Sl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Gi(e,t,r,null,n)}}var Sl=null;function ja(e,t,n,r){if(Sl=null,e=Rs(r),e=En(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sl=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case Ps:return 1;case rc:return 4;case bl:case I0:return 16;case oc:return 536870912;default:return 16}default:return 16}}var qt=null,Ds=null,il=null;function dc(){if(il)return il;var e,t=Ds,n=t.length,r,o="value"in qt?qt.value:qt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return il=o.slice(e,1<r?1-r:void 0)}function al(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function G1(){return!1}function rt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Uo:G1,this.isPropagationStopped=G1,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=rt(Nr),No=me({},Nr,{view:0,detail:0}),Q0=rt(No),Li,Bi,Lr,li=me({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Li=e.screenX-Lr.screenX,Bi=e.screenY-Lr.screenY):Bi=Li=0,Lr=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),K1=rt(li),H0=me({},li,{dataTransfer:0}),V0=rt(H0),G0=me({},No,{relatedTarget:0}),zi=rt(G0),K0=me({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=rt(K0),J0=me({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=rt(J0),X0=me({},Nr,{data:0}),Y1=rt(X0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function Bs(){return nf}var rf=me({},No,{key:function(e){if(e.key){var t=q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=rt(rf),lf=me({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J1=rt(lf),af=me({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),sf=rt(af),uf=me({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=rt(uf),cf=me({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=rt(cf),df=[9,13,27,32],zs=Ft&&"CompositionEvent"in window,Jr=null;Ft&&"documentMode"in document&&(Jr=document.documentMode);var ff=Ft&&"TextEvent"in window&&!Jr,fc=Ft&&(!zs||Jr&&8<Jr&&11>=Jr),Z1=" ",X1=!1;function pc(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function pf(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(X1=!0,Z1);case"textInput":return e=t.data,e===Z1&&X1?null:e;default:return null}}function gf(e,t){if(qn)return e==="compositionend"||!zs&&pc(e,t)?(e=dc(),il=Ds=qt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vf[e.type]:t==="textarea"}function vc(e,t,n,r){Kh(r),t=Cl(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,ho=null;function yf(e){$c(e,0)}function ii(e){var t=nr(e);if(Fh(t))return e}function xf(e,t){if(e==="change")return t}var yc=!1;if(Ft){var Fi;if(Ft){var Ui="oninput"in document;if(!Ui){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),Ui=typeof eu.oninput=="function"}Fi=Ui}else Fi=!1;yc=Fi&&(!document.documentMode||9<document.documentMode)}function tu(){Zr&&(Zr.detachEvent("onpropertychange",xc),ho=Zr=null)}function xc(e){if(e.propertyName==="value"&&ii(ho)){var t=[];vc(t,ho,e,Rs(e)),Xh(yf,t)}}function wf(e,t,n){e==="focusin"?(tu(),Zr=t,ho=n,Zr.attachEvent("onpropertychange",xc)):e==="focusout"&&tu()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(ho)}function Af(e,t){if(e==="click")return ii(t)}function bf(e,t){if(e==="input"||e==="change")return ii(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Mf;function co(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ca.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=nu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ef(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wc(n.ownerDocument.documentElement,n)){if(r!==null&&Fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ru(n,l);var i=ru(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sf=Ft&&"documentMode"in document&&11>=document.documentMode,er=null,Na=null,Xr=null,Ia=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||er==null||er!==wl(r)||(r=er,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&co(Xr,r)||(Xr=r,r=Cl(Na,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Wi={},Ac={};Ft&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function ai(e){if(Wi[e])return Wi[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return Wi[e]=t[n];return e}var bc=ai("animationend"),Mc=ai("animationiteration"),Ec=ai("animationstart"),Sc=ai("transitionend"),Cc=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Cc.set(e,t),Fn(t,[e])}for(var Qi=0;Qi<lu.length;Qi++){var Hi=lu[Qi],Cf=Hi.toLowerCase(),$f=Hi[0].toUpperCase()+Hi.slice(1);yn(Cf,"on"+$f)}yn(bc,"onAnimationEnd");yn(Mc,"onAnimationIteration");yn(Ec,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Sc,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S0(r,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;iu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;iu(o,a,u),l=s}}}if(Al)throw e=Sa,Al=!1,Sa=null,e}function oe(e,t){var n=t[Oa];n===void 0&&(n=t[Oa]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Qo]){e[Qo]=!0,Oh.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,Vi("selectionchange",!1,t))}}function jc(e,t,n,r){switch(mc(t)){case 1:var o=U0;break;case 4:o=W0;break;default:o=Os}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=En(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Xh(function(){var u=l,g=Rs(n),c=[];e:{var v=Cc.get(e);if(v!==void 0){var x=Ls,k=e;switch(e){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":x=of;break;case"focusin":k="focus",x=zi;break;case"focusout":k="blur",x=zi;break;case"beforeblur":case"afterblur":x=zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=K1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=sf;break;case bc:case Mc:case Ec:x=Y0;break;case Sc:x=hf;break;case"scroll":x=Q0;break;case"wheel":x=mf;break;case"copy":case"cut":case"paste":x=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=J1}var A=(t&4)!==0,M=!A&&e==="scroll",d=A?v!==null?v+"Capture":null:v;A=[];for(var m=u,f;m!==null;){f=m;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=io(m,d),w!=null&&A.push(fo(m,w,f)))),M)break;m=m.return}0<A.length&&(v=new x(v,k,null,n,g),c.push({event:v,listeners:A}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==ba&&(k=n.relatedTarget||n.fromElement)&&(En(k)||k[Ut]))break e;if((x||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?En(k):null,k!==null&&(M=Un(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(A=K1,w="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=J1,w="onPointerLeave",d="onPointerEnter",m="pointer"),M=x==null?v:nr(x),f=k==null?v:nr(k),v=new A(w,m+"leave",x,n,g),v.target=M,v.relatedTarget=f,w=null,En(g)===u&&(A=new A(d,m+"enter",k,n,g),A.target=f,A.relatedTarget=M,w=A),M=w,x&&k)t:{for(A=x,d=k,m=0,f=A;f;f=Gn(f))m++;for(f=0,w=d;w;w=Gn(w))f++;for(;0<m-f;)A=Gn(A),m--;for(;0<f-m;)d=Gn(d),f--;for(;m--;){if(A===d||d!==null&&A===d.alternate)break t;A=Gn(A),d=Gn(d)}A=null}else A=null;x!==null&&au(c,v,x,A,!1),k!==null&&M!==null&&au(c,M,k,A,!0)}}e:{if(v=u?nr(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var b=xf;else if(q1(v))if(yc)b=bf;else{b=kf;var E=wf}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=Af);if(b&&(b=b(e,u))){vc(c,b,n,g);break e}E&&E(e,v,u),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&ya(v,"number",v.value)}switch(E=u?nr(u):window,e){case"focusin":(q1(E)||E.contentEditable==="true")&&(er=E,Na=u,Xr=null);break;case"focusout":Xr=Na=er=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,ou(c,n,g);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":ou(c,n,g)}var S;if(zs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qn?pc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fc&&n.locale!=="ko"&&(qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&qn&&(S=dc()):(qt=g,Ds="value"in qt?qt.value:qt.textContent,qn=!0)),E=Cl(u,I),0<E.length&&(I=new Y1(I,e,null,n,g),c.push({event:I,listeners:E}),S?I.data=S:(S=gc(n),S!==null&&(I.data=S)))),(S=ff?pf(e,n):gf(e,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(g=new Y1("onBeforeInput","beforeinput",null,n,g),c.push({event:g,listeners:u}),g.data=S))}$c(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=io(e,n),l!=null&&r.unshift(fo(e,l,o)),l=io(e,t),l!=null&&r.push(fo(e,l,o))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=io(n,l),s!=null&&i.unshift(fo(n,s,a))):o||(s=io(n,l),s!=null&&i.push(fo(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Nf=/\r\n?/g,If=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(If,"")}function Ho(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(j(425))}function $l(){}var Ra=null,Pa=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(Tf)}:_a;function Tf(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);uo(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),Et="__reactFiber$"+Ir,po="__reactProps$"+Ir,Ut="__reactContainer$"+Ir,Oa="__reactEvents$"+Ir,_f="__reactListeners$"+Ir,Of="__reactHandles$"+Ir;function En(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Et])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function Io(e){return e=e[Et]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function si(e){return e[po]||null}var Da=[],rr=-1;function xn(e){return{current:e}}function ie(e){0>rr||(e.current=Da[rr],Da[rr]=null,rr--)}function re(e,t){rr++,Da[rr]=e.current,e.current=t}var pn={},Le=xn(pn),He=xn(!1),Pn=pn;function yr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function jl(){ie(He),ie(Le)}function cu(e,t,n){if(Le.current!==pn)throw Error(j(168));re(Le,t),re(He,n)}function Nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,x0(e)||"Unknown",o));return me({},n,r)}function Nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=Le.current,re(Le,e),re(He,He.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Nc(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Le),re(Le,e)):ie(He),re(He,n)}var Ot=null,ui=!1,Yi=!1;function Ic(e){Ot===null?Ot=[e]:Ot.push(e)}function Df(e){ui=!0,Ic(e)}function wn(){if(!Yi&&Ot!==null){Yi=!0;var e=0,t=te;try{var n=Ot;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,ui=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),nc(Ps,wn),o}finally{te=t,Yi=!1}}return null}var or=[],lr=0,Il=null,Rl=0,lt=[],it=0,Tn=null,Dt=1,Lt="";function bn(e,t){or[lr++]=Rl,or[lr++]=Il,Il=e,Rl=t}function Rc(e,t,n){lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Tn,Tn=e;var r=Dt;e=Lt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-gt(t)+o|n<<o|r,Lt=l+e}else Dt=1<<l|n<<o|r,Lt=e}function Us(e){e.return!==null&&(bn(e,1),Rc(e,1,0))}function Ws(e){for(;e===Il;)Il=or[--lr],or[lr]=null,Rl=or[--lr],or[lr]=null;for(;e===Tn;)Tn=lt[--it],lt[it]=null,Lt=lt[--it],lt[it]=null,Dt=lt[--it],lt[it]=null}var Xe=null,Ze=null,se=!1,pt=null;function Pc(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(se){var t=Ze;if(t){var n=t;if(!du(e,t)){if(La(e))throw Error(j(418));t=ln(n.nextSibling);var r=Xe;t&&du(e,t)?Pc(r,n):(e.flags=e.flags&-4097|2,se=!1,Xe=e)}}else{if(La(e))throw Error(j(418));e.flags=e.flags&-4097|2,se=!1,Xe=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Vo(e){if(e!==Xe)return!1;if(!se)return fu(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=Ze)){if(La(e))throw Tc(),Error(j(418));for(;t;)Pc(e,t),t=ln(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?ln(e.stateNode.nextSibling):null;return!0}function Tc(){for(var e=Ze;e;)e=ln(e.nextSibling)}function xr(){Ze=Xe=null,se=!1}function Qs(e){pt===null?pt=[e]:pt.push(e)}var Lf=Ht.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function _c(e){function t(d,m){if(e){var f=d.deletions;f===null?(d.deletions=[m],d.flags|=16):f.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function o(d,m){return d=hn(d,m),d.index=0,d.sibling=null,d}function l(d,m,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<m?(d.flags|=2,m):f):(d.flags|=2,m)):(d.flags|=1048576,m)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,m,f,w){return m===null||m.tag!==6?(m=na(f,d.mode,w),m.return=d,m):(m=o(m,f),m.return=d,m)}function s(d,m,f,w){var b=f.type;return b===Xn?g(d,m,f.props.children,w,f.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yt&&pu(b)===m.type)?(w=o(m,f.props),w.ref=Br(d,m,f),w.return=d,w):(w=fl(f.type,f.key,f.props,null,d.mode,w),w.ref=Br(d,m,f),w.return=d,w)}function u(d,m,f,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=ra(f,d.mode,w),m.return=d,m):(m=o(m,f.children||[]),m.return=d,m)}function g(d,m,f,w,b){return m===null||m.tag!==7?(m=In(f,d.mode,w,b),m.return=d,m):(m=o(m,f),m.return=d,m)}function c(d,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=na(""+m,d.mode,f),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return f=fl(m.type,m.key,m.props,null,d.mode,f),f.ref=Br(d,null,m),f.return=d,f;case Zn:return m=ra(m,d.mode,f),m.return=d,m;case Yt:var w=m._init;return c(d,w(m._payload),f)}if(Qr(m)||Tr(m))return m=In(m,d.mode,f,null),m.return=d,m;Go(d,m)}return null}function v(d,m,f,w){var b=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:a(d,m,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oo:return f.key===b?s(d,m,f,w):null;case Zn:return f.key===b?u(d,m,f,w):null;case Yt:return b=f._init,v(d,m,b(f._payload),w)}if(Qr(f)||Tr(f))return b!==null?null:g(d,m,f,w,null);Go(d,f)}return null}function x(d,m,f,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(m,d,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:return d=d.get(w.key===null?f:w.key)||null,s(m,d,w,b);case Zn:return d=d.get(w.key===null?f:w.key)||null,u(m,d,w,b);case Yt:var E=w._init;return x(d,m,f,E(w._payload),b)}if(Qr(w)||Tr(w))return d=d.get(f)||null,g(m,d,w,b,null);Go(m,w)}return null}function k(d,m,f,w){for(var b=null,E=null,S=m,I=m=0,F=null;S!==null&&I<f.length;I++){S.index>I?(F=S,S=null):F=S.sibling;var O=v(d,S,f[I],w);if(O===null){S===null&&(S=F);break}e&&S&&O.alternate===null&&t(d,S),m=l(O,m,I),E===null?b=O:E.sibling=O,E=O,S=F}if(I===f.length)return n(d,S),se&&bn(d,I),b;if(S===null){for(;I<f.length;I++)S=c(d,f[I],w),S!==null&&(m=l(S,m,I),E===null?b=S:E.sibling=S,E=S);return se&&bn(d,I),b}for(S=r(d,S);I<f.length;I++)F=x(S,d,I,f[I],w),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?I:F.key),m=l(F,m,I),E===null?b=F:E.sibling=F,E=F);return e&&S.forEach(function(U){return t(d,U)}),se&&bn(d,I),b}function A(d,m,f,w){var b=Tr(f);if(typeof b!="function")throw Error(j(150));if(f=b.call(f),f==null)throw Error(j(151));for(var E=b=null,S=m,I=m=0,F=null,O=f.next();S!==null&&!O.done;I++,O=f.next()){S.index>I?(F=S,S=null):F=S.sibling;var U=v(d,S,O.value,w);if(U===null){S===null&&(S=F);break}e&&S&&U.alternate===null&&t(d,S),m=l(U,m,I),E===null?b=U:E.sibling=U,E=U,S=F}if(O.done)return n(d,S),se&&bn(d,I),b;if(S===null){for(;!O.done;I++,O=f.next())O=c(d,O.value,w),O!==null&&(m=l(O,m,I),E===null?b=O:E.sibling=O,E=O);return se&&bn(d,I),b}for(S=r(d,S);!O.done;I++,O=f.next())O=x(S,d,I,O.value,w),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?I:O.key),m=l(O,m,I),E===null?b=O:E.sibling=O,E=O);return e&&S.forEach(function(D){return t(d,D)}),se&&bn(d,I),b}function M(d,m,f,w){if(typeof f=="object"&&f!==null&&f.type===Xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Oo:e:{for(var b=f.key,E=m;E!==null;){if(E.key===b){if(b=f.type,b===Xn){if(E.tag===7){n(d,E.sibling),m=o(E,f.props.children),m.return=d,d=m;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yt&&pu(b)===E.type){n(d,E.sibling),m=o(E,f.props),m.ref=Br(d,E,f),m.return=d,d=m;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===Xn?(m=In(f.props.children,d.mode,w,f.key),m.return=d,d=m):(w=fl(f.type,f.key,f.props,null,d.mode,w),w.ref=Br(d,m,f),w.return=d,d=w)}return i(d);case Zn:e:{for(E=f.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(d,m.sibling),m=o(m,f.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=ra(f,d.mode,w),m.return=d,d=m}return i(d);case Yt:return E=f._init,M(d,m,E(f._payload),w)}if(Qr(f))return k(d,m,f,w);if(Tr(f))return A(d,m,f,w);Go(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(n(d,m.sibling),m=o(m,f),m.return=d,d=m):(n(d,m),m=na(f,d.mode,w),m.return=d,d=m),i(d)):n(d,m)}return M}var wr=_c(!0),Oc=_c(!1),Pl=xn(null),Tl=null,ir=null,Hs=null;function Vs(){Hs=ir=Tl=null}function Gs(e){var t=Pl.current;ie(Pl),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Tl=e,Hs=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Hs!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Tl===null)throw Error(j(308));ir=e,Tl.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Sn=null;function Ks(e){Sn===null?Sn=[e]:Sn.push(e)}function Dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ks(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ks(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _l(e,t,n,r){var o=e.updateQueue;Jt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(l!==null){var c=o.baseState;i=0,g=u=s=null,a=l;do{var v=a.lane,x=a.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,A=a;switch(v=t,x=n,A.tag){case 1:if(k=A.payload,typeof k=="function"){c=k.call(x,c,v);break e}c=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=A.payload,v=typeof k=="function"?k.call(x,c,v):k,v==null)break e;c=me({},c,v);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=x,s=c):g=g.next=x,i|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(g===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);On|=i,e.lanes=i,e.memoizedState=c}}function vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Ro={},Ct=xn(Ro),go=xn(Ro),vo=xn(Ro);function Cn(e){if(e===Ro)throw Error(j(174));return e}function Js(e,t){switch(re(vo,t),re(go,e),re(Ct,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}ie(Ct),re(Ct,t)}function kr(){ie(Ct),ie(go),ie(vo)}function Bc(e){Cn(vo.current);var t=Cn(Ct.current),n=wa(t,e.type);t!==n&&(re(go,e),re(Ct,n))}function Zs(e){go.current===e&&(ie(Ct),ie(go))}var he=xn(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=[];function Xs(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var ul=Ht.ReactCurrentDispatcher,Zi=Ht.ReactCurrentBatchConfig,_n=0,ce=null,be=null,Se=null,Dl=!1,qr=!1,yo=0,Bf=0;function _e(){throw Error(j(321))}function qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function e1(e,t,n,r,o,l){if(_n=l,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?Wf:Qf,e=n(r,o),qr){l=0;do{if(qr=!1,yo=0,25<=l)throw Error(j(301));l+=1,Se=be=null,t.updateQueue=null,ul.current=Hf,e=n(r,o)}while(qr)}if(ul.current=Ll,t=be!==null&&be.next!==null,_n=0,Se=be=ce=null,Dl=!1,t)throw Error(j(300));return e}function t1(){var e=yo!==0;return yo=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=e:Se=Se.next=e,Se}function ht(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Se===null?ce.memoizedState:Se.next;if(t!==null)Se=t,be=e;else{if(e===null)throw Error(j(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Se===null?ce.memoizedState=Se=e:Se=Se.next=e}return Se}function xo(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var g=u.lane;if((_n&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,i=r):s=s.next=c,ce.lanes|=g,On|=g}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,xt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ce.lanes|=l,On|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=ht(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);xt(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function zc(){}function Fc(e,t){var n=ce,r=ht(),o=t(),l=!xt(r.memoizedState,o);if(l&&(r.memoizedState=o,Qe=!0),r=r.queue,n1(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,wo(9,Wc.bind(null,n,r,o,t),void 0,null),je===null)throw Error(j(349));_n&30||Uc(n,t,o)}return o}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Vc(e)}function Qc(e,t,n){return n(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Vc(e){var t=Wt(e,1);t!==null&&vt(t,e,1,-1)}function yu(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,ce,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gc(){return ht().memoizedState}function hl(e,t,n,r){var o=bt();ce.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var o=ht();r=r===void 0?null:r;var l=void 0;if(be!==null){var i=be.memoizedState;if(l=i.destroy,r!==null&&qs(r,i.deps)){o.memoizedState=wo(t,n,l,r);return}}ce.flags|=e,o.memoizedState=wo(1|t,n,l,r)}function xu(e,t){return hl(8390656,8,e,t)}function n1(e,t){return hi(2048,8,e,t)}function Kc(e,t){return hi(4,2,e,t)}function Yc(e,t){return hi(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,Jc.bind(null,t,e),n)}function r1(){}function Xc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function em(e,t,n){return _n&21?(xt(n,t)||(n=lc(),ce.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function zf(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{te=n,Zi.transition=r}}function tm(){return ht().memoizedState}function Ff(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nm(e))rm(t,n);else if(n=Dc(e,t,n,r),n!==null){var o=ze();vt(n,e,r,o),om(n,t,r)}}function Uf(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nm(e))rm(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,xt(a,i)){var s=t.interleaved;s===null?(o.next=o,Ks(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Dc(e,t,o,r),n!==null&&(o=ze(),vt(n,e,r,o),om(n,t,r))}}function nm(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function rm(e,t){qr=Dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function om(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Ll={readContext:ut,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Wf={readContext:ut,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hl(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){return hl(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ff.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:r1,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=zf.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=bt();if(se){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));_n&30||Uc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,xu(Qc.bind(null,r,l,e),[e]),r.flags|=2048,wo(9,Wc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=bt(),t=je.identifierPrefix;if(se){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:ut,useCallback:Xc,useContext:ut,useEffect:n1,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:Xi,useRef:Gc,useState:function(){return Xi(xo)},useDebugValue:r1,useDeferredValue:function(e){var t=ht();return em(t,be.memoizedState,e)},useTransition:function(){var e=Xi(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Fc,useId:tm,unstable_isNewReconciler:!1},Hf={readContext:ut,useCallback:Xc,useContext:ut,useEffect:n1,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:qi,useRef:Gc,useState:function(){return qi(xo)},useDebugValue:r1,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:em(t,be.memoizedState,e)},useTransition:function(){var e=qi(xo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Fc,useId:tm,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),l=Bt(r,o);l.payload=t,n!=null&&(l.callback=n),t=an(e,l,o),t!==null&&(vt(t,e,o,r),sl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),l=Bt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=an(e,l,o),t!==null&&(vt(t,e,o,r),sl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(vt(t,e,r,n),sl(t,e,r))}};function wu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!co(n,r)||!co(o,l):!0}function lm(e,t,n){var r=!1,o=pn,l=t.contextType;return typeof l=="object"&&l!==null?l=ut(l):(o=Ve(t)?Pn:Le.current,r=t.contextTypes,l=(r=r!=null)?yr(e,o):pn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ys(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ut(l):(l=Ve(t)?Pn:Le.current,o.context=yr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Fa(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ci.enqueueReplaceState(o,o.state,null),_l(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=y0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vf=typeof WeakMap=="function"?WeakMap:Map;function im(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,qa=r),Wa(e,t)},n}function am(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ip.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Gf=Ht.ReactCurrentOwner,Qe=!1;function Be(e,t,n,r){t.child=e===null?Oc(t,null,n,r):wr(t,e.child,n,r)}function Eu(e,t,n,r,o){n=n.render;var l=t.ref;return pr(t,o),r=e1(e,t,n,r,l,o),n=t1(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(se&&n&&Us(t),t.flags|=1,Be(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!c1(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,sm(e,t,l,r,o)):(e=fl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(i,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=hn(l,r),e.ref=t.ref,e.return=t,t.child=e}function sm(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(co(l,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Qa(e,t,n,r,o)}function um(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(sr,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(sr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,re(sr,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,re(sr,Je),Je|=r;return Be(e,t,o,n),t.child}function hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var l=Ve(n)?Pn:Le.current;return l=yr(t,l),pr(t,o),n=e1(e,t,n,r,l,o),r=t1(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(se&&r&&Us(t),t.flags|=1,Be(e,t,n,o),t.child)}function Cu(e,t,n,r,o){if(Ve(n)){var l=!0;Nl(t)}else l=!1;if(pr(t,o),t.stateNode===null)cl(e,t),lm(t,n,r),Ua(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ve(n)?Pn:Le.current,u=yr(t,u));var g=n.getDerivedStateFromProps,c=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ku(t,i,r,u),Jt=!1;var v=t.memoizedState;i.state=v,_l(t,r,i,o),s=t.memoizedState,a!==r||v!==s||He.current||Jt?(typeof g=="function"&&(Fa(t,n,g,r),s=t.memoizedState),(a=Jt||wu(t,n,a,r,v,s,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Lc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),i.props=u,c=t.pendingProps,v=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ut(s):(s=Ve(n)?Pn:Le.current,s=yr(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==c||v!==s)&&ku(t,i,r,s),Jt=!1,v=t.memoizedState,i.state=v,_l(t,r,i,o);var k=t.memoizedState;a!==c||v!==k||He.current||Jt?(typeof x=="function"&&(Fa(t,n,x,r),k=t.memoizedState),(u=Jt||wu(t,n,u,r,v,k,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ha(e,t,n,r,l,o)}function Ha(e,t,n,r,o,l){hm(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&mu(t,n,!1),Qt(e,t,l);r=t.stateNode,Gf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=wr(t,e.child,null,l),t.child=wr(t,null,a,l)):Be(e,t,a,l),t.memoizedState=r.state,o&&mu(t,n,!0),t.child}function cm(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Js(e,t.containerInfo)}function $u(e,t,n,r,o){return xr(),Qs(o),t.flags|=256,Be(e,t,n,r),t.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,n){var r=t.pendingProps,o=he.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(he,o&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=fi(i,r,0,null),e=In(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ga(n),t.memoizedState=Va,e):o1(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Kf(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=hn(a,l):(l=In(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ga(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Va,r}return l=e.child,e=l.sibling,r=hn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function o1(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ko(e,t,n,r){return r!==null&&Qs(r),wr(t,e.child,null,n),e=o1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ea(Error(j(422))),Ko(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=fi({mode:"visible",children:r.children},o,0,null),l=In(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wr(t,e.child,null,i),t.child.memoizedState=Ga(i),t.memoizedState=Va,l);if(!(t.mode&1))return Ko(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(j(419)),r=ea(l,r,void 0),Ko(e,t,i,r)}if(a=(i&e.childLanes)!==0,Qe||a){if(r=je,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Wt(e,o),vt(r,e,o,-1))}return h1(),r=ea(Error(j(421))),Ko(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ze=ln(o.nextSibling),Xe=t,se=!0,pt=null,e!==null&&(lt[it++]=Dt,lt[it++]=Lt,lt[it++]=Tn,Dt=e.id,Lt=e.overflow,Tn=t),t=o1(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function ta(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function dm(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Be(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ta(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ol(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ta(t,!0,n,null,l);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t,n){switch(t.tag){case 3:cm(t),xr();break;case 5:Bc(t);break;case 1:Ve(t.type)&&Nl(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;re(Pl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?mm(e,t,n):(re(he,he.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);re(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,um(e,t,n)}return Qt(e,t,n)}var fm,Ka,pm,gm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ka=function(){};pm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn(Ct.current);var l=null;switch(n){case"input":o=ga(e,o),r=ga(e,r),l=[];break;case"select":o=me({},o,{value:void 0}),r=me({},r,{value:void 0}),l=[];break;case"textarea":o=xa(e,o),r=xa(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$l)}ka(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};gm=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jf(e,t,n){var r=t.pendingProps;switch(Ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ve(t.type)&&jl(),Oe(t),null;case 3:return r=t.stateNode,kr(),ie(He),ie(Le),Xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ns(pt),pt=null))),Ka(e,t),Oe(t),null;case 5:Zs(t);var o=Cn(vo.current);if(n=t.type,e!==null&&t.stateNode!=null)pm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Oe(t),null}if(e=Cn(Ct.current),Vo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Et]=t,r[po]=l,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)oe(Vr[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":L1(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":z1(r,l),oe("invalid",r)}ka(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",""+a]):oo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":Do(r),B1(r,l,!0);break;case"textarea":Do(r),F1(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=$l)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Et]=t,e[po]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(i=Aa(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)oe(Vr[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":L1(e,r),o=ga(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=me({},r,{value:void 0}),oe("invalid",e);break;case"textarea":z1(e,r),o=xa(e,r),oe("invalid",e);break;default:o=r}ka(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Gh(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hh(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&lo(e,s):typeof s=="number"&&lo(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(oo.hasOwnProperty(l)?s!=null&&l==="onScroll"&&oe("scroll",e):s!=null&&$s(e,l,s,i))}switch(n){case"input":Do(e),B1(e,r,!1);break;case"textarea":Do(e),F1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cr(e,!!r.multiple,l,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)gm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Cn(vo.current),Cn(Ct.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Oe(t),null;case 13:if(ie(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ze!==null&&t.mode&1&&!(t.flags&128))Tc(),xr(),t.flags|=98560,l=!1;else if(l=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Et]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else pt!==null&&(ns(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Me===0&&(Me=3):h1())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return kr(),Ka(e,t),e===null&&mo(t.stateNode.containerInfo),Oe(t),null;case 10:return Gs(t.type._context),Oe(t),null;case 17:return Ve(t.type)&&jl(),Oe(t),null;case 19:if(ie(he),l=t.memoizedState,l===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)zr(l,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ol(e),i!==null){for(t.flags|=128,zr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(he,he.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>br&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return Oe(t),null}else 2*ge()-l.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=he.current,re(he,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return u1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zf(e,t){switch(Ws(t),t.tag){case 1:return Ve(t.type)&&jl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),ie(He),ie(Le),Xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zs(t),null;case 13:if(ie(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(he),null;case 4:return kr(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return u1(),null;case 24:return null;default:return null}}var Yo=!1,De=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ya(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Nu=!1;function qf(e,t){if(Ra=El,e=kc(),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,g=0,c=e,v=null;t:for(;;){for(var x;c!==n||o!==0&&c.nodeType!==3||(a=i+o),c!==l||r!==0&&c.nodeType!==3||(s=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(x=c.firstChild)!==null;)v=c,c=x;for(;;){if(c===e)break t;if(v===n&&++u===o&&(a=i),v===l&&++g===r&&(s=i),(x=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},El=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var A=k.memoizedProps,M=k.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?A:dt(t.type,A),M);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=Nu,Nu=!1,k}function eo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ya(t,n,l)}o=o.next}while(o!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[po],delete t[Oa],delete t[_f],delete t[Of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ym(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$l));else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Gt(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:De||ar(n,t);case 6:var r=Ie,o=ft;Ie=null,Gt(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),uo(e)):Ki(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Gt(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ya(n,t,i),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!De&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Gt(e,t,n),De=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xf),t.forEach(function(r){var o=sp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(j(160));xm(l,i,o),Ie=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wm(t,e),t=t.sibling}function wm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),At(e),r&4){try{eo(3,e,e.return),mi(3,e)}catch(A){fe(e,e.return,A)}try{eo(5,e,e.return)}catch(A){fe(e,e.return,A)}}break;case 1:mt(t,e),At(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(mt(t,e),At(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{lo(o,"")}catch(A){fe(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Uh(o,l),Aa(a,i);var u=Aa(a,l);for(i=0;i<s.length;i+=2){var g=s[i],c=s[i+1];g==="style"?Gh(o,c):g==="dangerouslySetInnerHTML"?Hh(o,c):g==="children"?lo(o,c):$s(o,g,c,u)}switch(a){case"input":va(o,l);break;case"textarea":Wh(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?cr(o,!!l.multiple,x,!1):v!==!!l.multiple&&(l.defaultValue!=null?cr(o,!!l.multiple,l.defaultValue,!0):cr(o,!!l.multiple,l.multiple?[]:"",!1))}o[po]=l}catch(A){fe(e,e.return,A)}}break;case 6:if(mt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(A){fe(e,e.return,A)}}break;case 3:if(mt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(A){fe(e,e.return,A)}break;case 4:mt(t,e),At(e);break;case 13:mt(t,e),At(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(a1=ge())),r&4&&Ru(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||g,mt(t,e),De=u):mt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(c=T=g;T!==null;){switch(v=T,x=v.child,v.tag){case 0:case 11:case 14:case 15:eo(4,v,v.return);break;case 1:ar(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(A){fe(r,n,A)}}break;case 5:ar(v,v.return);break;case 22:if(v.memoizedState!==null){Tu(c);continue}}x!==null?(x.return=v,T=x):Tu(c)}g=g.sibling}e:for(g=null,c=e;;){if(c.tag===5){if(g===null){g=c;try{o=c.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vh("display",i))}catch(A){fe(e,e.return,A)}}}else if(c.tag===6){if(g===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(A){fe(e,e.return,A)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;g===c&&(g=null),c=c.return}g===c&&(g=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:mt(t,e),At(e),r&4&&Ru(e);break;case 21:break;default:mt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ym(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lo(o,""),r.flags&=-33);var l=Iu(e);Xa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Iu(e);Za(e,a,i);break;default:throw Error(j(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,n){T=e,km(e)}function km(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Yo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=Yo;var u=De;if(Yo=i,(De=s)&&!u)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?_u(o):s!==null?(s.return=i,T=s):_u(o);for(;l!==null;)T=l,km(l),l=l.sibling;T=o,Yo=a,De=u}Pu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):Pu(e)}}function Pu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&vu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var c=g.dehydrated;c!==null&&uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}De||t.flags&512&&Ja(t)}catch(v){fe(t,t.return,v)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Tu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function _u(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var l=t.return;try{Ja(t)}catch(s){fe(t,l,s)}break;case 5:var i=t.return;try{Ja(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var tp=Math.ceil,Bl=Ht.ReactCurrentDispatcher,l1=Ht.ReactCurrentOwner,st=Ht.ReactCurrentBatchConfig,X=0,je=null,ye=null,Re=0,Je=0,sr=xn(0),Me=0,ko=null,On=0,di=0,i1=0,to=null,We=null,a1=0,br=1/0,Tt=null,zl=!1,qa=null,sn=null,Jo=!1,en=null,Fl=0,no=0,es=null,ml=-1,dl=0;function ze(){return X&6?ge():ml!==-1?ml:ml=ge()}function un(e){return e.mode&1?X&2&&Re!==0?Re&-Re:Lf.transition!==null?(dl===0&&(dl=lc()),dl):(e=te,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function vt(e,t,n,r){if(50<no)throw no=0,es=null,Error(j(185));jo(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(di|=n),Me===4&&Xt(e,Re)),Ge(e,r),n===1&&X===0&&!(t.mode&1)&&(br=ge()+500,ui&&wn()))}function Ge(e,t){var n=e.callbackNode;D0(e,t);var r=Ml(e,e===je?Re:0);if(r===0)n!==null&&Q1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Q1(n),t===1)e.tag===0?Df(Ou.bind(null,e)):Ic(Ou.bind(null,e)),Pf(function(){!(X&6)&&wn()}),n=null;else{switch(ic(r)){case 1:n=Ps;break;case 4:n=rc;break;case 16:n=bl;break;case 536870912:n=oc;break;default:n=bl}n=jm(n,Am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Am(e,t){if(ml=-1,dl=0,X&6)throw Error(j(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Ml(e,e===je?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ul(e,r);else{t=r;var o=X;X|=2;var l=Mm();(je!==e||Re!==t)&&(Tt=null,br=ge()+500,Nn(e,t));do try{op();break}catch(a){bm(e,a)}while(!0);Vs(),Bl.current=l,X=o,ye!==null?t=0:(je=null,Re=0,t=Me)}if(t!==0){if(t===2&&(o=Ca(e),o!==0&&(r=o,t=ts(e,o))),t===1)throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!np(o)&&(t=Ul(e,r),t===2&&(l=Ca(e),l!==0&&(r=l,t=ts(e,l))),t===1))throw n=ko,Nn(e,0),Xt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mn(e,We,Tt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=a1+500-ge(),10<t)){if(Ml(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_a(Mn.bind(null,e,We,Tt),t);break}Mn(e,We,Tt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-gt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tp(r/1960))-r,10<r){e.timeoutHandle=_a(Mn.bind(null,e,We,Tt),r);break}Mn(e,We,Tt);break;case 5:Mn(e,We,Tt);break;default:throw Error(j(329))}}}return Ge(e,ge()),e.callbackNode===n?Am.bind(null,e):null}function ts(e,t){var n=to;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ul(e,t),e!==2&&(t=We,We=n,t!==null&&ns(t)),e}function ns(e){We===null?We=e:We.push.apply(We,e)}function np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!xt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~i1,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if(X&6)throw Error(j(327));gr();var t=Ml(e,0);if(!(t&1))return Ge(e,ge()),null;var n=Ul(e,t);if(e.tag!==0&&n===2){var r=Ca(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=ko,Nn(e,0),Xt(e,t),Ge(e,ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,We,Tt),Ge(e,ge()),null}function s1(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(br=ge()+500,ui&&wn())}}function Dn(e){en!==null&&en.tag===0&&!(X&6)&&gr();var t=X;X|=1;var n=st.transition,r=te;try{if(st.transition=null,te=1,e)return e()}finally{te=r,st.transition=n,X=t,!(X&6)&&wn()}}function u1(){Je=sr.current,ie(sr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:kr(),ie(He),ie(Le),Xs();break;case 5:Zs(r);break;case 4:kr();break;case 13:ie(he);break;case 19:ie(he);break;case 10:Gs(r.type._context);break;case 22:case 23:u1()}n=n.return}if(je=e,ye=e=hn(e.current,null),Re=Je=t,Me=0,ko=null,i1=di=On=0,We=to=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Sn=null}return e}function bm(e,t){do{var n=ye;try{if(Vs(),ul.current=Ll,Dl){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Dl=!1}if(_n=0,Se=be=ce=null,qr=!1,yo=0,l1.current=null,n===null||n.return===null){Me=1,ko=t,ye=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,c=g.tag;if(!(g.mode&1)&&(c===0||c===11||c===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=bu(i);if(x!==null){x.flags&=-257,Mu(x,i,a,l,t),x.mode&1&&Au(l,u,t),t=x,s=u;var k=t.updateQueue;if(k===null){var A=new Set;A.add(s),t.updateQueue=A}else k.add(s);break e}else{if(!(t&1)){Au(l,u,t),h1();break e}s=Error(j(426))}}else if(se&&a.mode&1){var M=bu(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Mu(M,i,a,l,t),Qs(Ar(s,a));break e}}l=s=Ar(s,a),Me!==4&&(Me=2),to===null?to=[l]:to.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=im(l,s,t);gu(l,d);break e;case 1:a=s;var m=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=am(l,a,t);gu(l,w);break e}}l=l.return}while(l!==null)}Sm(n)}catch(b){t=b,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Mm(){var e=Bl.current;return Bl.current=Ll,e===null?Ll:e}function h1(){(Me===0||Me===3||Me===2)&&(Me=4),je===null||!(On&268435455)&&!(di&268435455)||Xt(je,Re)}function Ul(e,t){var n=X;X|=2;var r=Mm();(je!==e||Re!==t)&&(Tt=null,Nn(e,t));do try{rp();break}catch(o){bm(e,o)}while(!0);if(Vs(),X=n,Bl.current=r,ye!==null)throw Error(j(261));return je=null,Re=0,Me}function rp(){for(;ye!==null;)Em(ye)}function op(){for(;ye!==null&&!$0();)Em(ye)}function Em(e){var t=$m(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Sm(e):ye=t,l1.current=null}function Sm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,ye=null;return}}else if(n=Jf(n,t,Je),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Me===0&&(Me=5)}function Mn(e,t,n){var r=te,o=st.transition;try{st.transition=null,te=1,lp(e,t,n,r)}finally{st.transition=o,te=r}return null}function lp(e,t,n,r){do gr();while(en!==null);if(X&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(L0(e,l),e===je&&(ye=je=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,jm(bl,function(){return gr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=st.transition,st.transition=null;var i=te;te=1;var a=X;X|=4,l1.current=null,qf(e,n),wm(n,e),Ef(Pa),El=!!Ra,Pa=Ra=null,e.current=n,ep(n),j0(),X=a,te=i,st.transition=l}else e.current=n;if(Jo&&(Jo=!1,en=e,Fl=o),l=e.pendingLanes,l===0&&(sn=null),R0(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zl)throw zl=!1,e=qa,qa=null,e;return Fl&1&&e.tag!==0&&gr(),l=e.pendingLanes,l&1?e===es?no++:(no=0,es=e):no=0,wn(),null}function gr(){if(en!==null){var e=ic(Fl),t=st.transition,n=te;try{if(st.transition=null,te=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Fl=0,X&6)throw Error(j(331));var o=X;for(X|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:eo(8,g,l)}var c=g.child;if(c!==null)c.return=g,T=c;else for(;T!==null;){g=T;var v=g.sibling,x=g.return;if(vm(g),g===u){T=null;break}if(v!==null){v.return=x,T=v;break}T=x}}}var k=l.alternate;if(k!==null){var A=k.child;if(A!==null){k.child=null;do{var M=A.sibling;A.sibling=null,A=M}while(A!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:eo(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break e}T=l.return}}var m=e.current;for(T=m;T!==null;){i=T;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,T=f;else e:for(i=m;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(b){fe(a,a.return,b)}if(a===i){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(X=o,wn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{te=n,st.transition=t}}return!1}function Du(e,t,n){t=Ar(n,t),t=im(e,t,1),e=an(e,t,1),t=ze(),e!==null&&(jo(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=Ar(n,e),e=am(t,e,1),t=an(t,e,1),e=ze(),t!==null&&(jo(t,1,e),Ge(t,e));break}}t=t.return}}function ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Re&n)===n&&(Me===4||Me===3&&(Re&130023424)===Re&&500>ge()-a1?Nn(e,0):i1|=n),Ge(e,t)}function Cm(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=ze();e=Wt(e,t),e!==null&&(jo(e,t,n),Ge(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cm(e,n)}function sp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Cm(e,n)}var $m;$m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Yf(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,se&&t.flags&1048576&&Rc(t,Rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var o=yr(t,Le.current);pr(t,n),o=e1(null,t,r,e,o,n);var l=t1();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,Nl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ys(t),o.updater=ci,t.stateNode=o,o._reactInternals=t,Ua(t,r,e,n),t=Ha(null,t,r,!0,l,n)):(t.tag=0,se&&l&&Us(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hp(r),e=dt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,dt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Cu(e,t,r,o,n);case 3:e:{if(cm(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Lc(e,t),_l(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Ar(Error(j(423)),t),t=$u(e,t,r,n,o);break e}else if(r!==o){o=Ar(Error(j(424)),t),t=$u(e,t,r,n,o);break e}else for(Ze=ln(t.stateNode.containerInfo.firstChild),Xe=t,se=!0,pt=null,n=Oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===o){t=Qt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Bc(t),e===null&&Ba(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ta(r,o)?i=null:l!==null&&Ta(r,l)&&(t.flags|=32),hm(e,t),Be(e,t,i,n),t.child;case 6:return e===null&&Ba(t),null;case 13:return mm(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Eu(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,re(Pl,r._currentValue),r._currentValue=i,l!==null)if(xt(l.value,i)){if(l.children===o.children&&!He.current){t=Qt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),za(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(j(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),za(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=ut(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),Su(e,t,r,o,n);case 15:return sm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),cl(e,t),t.tag=1,Ve(r)?(e=!0,Nl(t)):e=!1,pr(t,n),lm(t,r,o),Ua(t,r,o,n),Ha(null,t,r,!0,e,n);case 19:return dm(e,t,n);case 22:return um(e,t,n)}throw Error(j(156,t.tag))};function jm(e,t){return nc(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new up(e,t,n,r)}function c1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return c1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ns)return 11;if(e===Is)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")c1(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xn:return In(n.children,o,l,t);case js:i=8,o|=8;break;case ma:return e=at(12,n,t,o|2),e.elementType=ma,e.lanes=l,e;case da:return e=at(13,n,t,o),e.elementType=da,e.lanes=l,e;case fa:return e=at(19,n,t,o),e.elementType=fa,e.lanes=l,e;case Bh:return fi(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dh:i=10;break e;case Lh:i=9;break e;case Ns:i=11;break e;case Is:i=14;break e;case Yt:i=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=at(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function In(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=at(22,e,r,t),e.elementType=Bh,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function m1(e,t,n,r,o,l,i,a,s){return e=new cp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=at(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ys(l),e}function mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nm(e){if(!e)return pn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Nc(e,n,t)}return t}function Im(e,t,n,r,o,l,i,a,s){return e=m1(n,r,!0,e,o,l,i,a,s),e.context=Nm(null),n=e.current,r=ze(),o=un(n),l=Bt(r,o),l.callback=t??null,an(n,l,o),e.current.lanes=o,jo(e,o,r),Ge(e,r),e}function pi(e,t,n,r){var o=t.current,l=ze(),i=un(o);return n=Nm(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,i),e!==null&&(vt(e,o,i,l),sl(e,o,i)),i}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function d1(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function dp(){return null}var Rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function f1(e){this._internalRoot=e}gi.prototype.render=f1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));pi(e,t,null,null)};gi.prototype.unmount=f1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){pi(null,e,null,null)}),t[Ut]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&cc(e)}};function p1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function fp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Wl(i);l.call(u)}}var i=Im(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=i,e[Ut]=i.current,mo(e.nodeType===8?e.parentNode:e),Dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Wl(s);a.call(u)}}var s=m1(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=s,e[Ut]=s.current,mo(e.nodeType===8?e.parentNode:e),Dn(function(){pi(t,s,n,r)}),s}function yi(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Wl(i);a.call(s)}}pi(t,i,e,o)}else i=fp(n,t,e,o,r);return Wl(i)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Ts(t,n|1),Ge(t,ge()),!(X&6)&&(br=ge()+500,wn()))}break;case 13:Dn(function(){var r=Wt(e,1);if(r!==null){var o=ze();vt(r,e,1,o)}}),d1(e,1)}};_s=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=ze();vt(t,e,134217728,n)}d1(e,134217728)}};sc=function(e){if(e.tag===13){var t=un(e),n=Wt(e,t);if(n!==null){var r=ze();vt(n,e,t,r)}d1(e,t)}};uc=function(){return te};hc=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ma=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=si(r);if(!o)throw Error(j(90));Fh(r),va(r,o)}}}break;case"textarea":Wh(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Jh=s1;Zh=Dn;var pp={usingClientEntryPoint:!1,Events:[Io,nr,si,Kh,Yh,s1]},Fr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{oi=Zo.inject(gp),St=Zo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p1(t))throw Error(j(200));return mp(e,t,null,n)};nt.createRoot=function(e,t){if(!p1(e))throw Error(j(299));var n=!1,r="",o=Rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=m1(e,1,!1,null,null,n,!1,r,o),e[Ut]=t.current,mo(e.nodeType===8?e.parentNode:e),new f1(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=ec(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Dn(e)};nt.hydrate=function(e,t,n){if(!vi(t))throw Error(j(200));return yi(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!p1(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Rm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Im(t,null,e,1,n??null,o,!1,l,i),e[Ut]=t.current,mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gi(t)};nt.render=function(e,t,n){if(!vi(t))throw Error(j(200));return yi(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!vi(e))throw Error(j(40));return e._reactRootContainer?(Dn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};nt.unstable_batchedUpdates=s1;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return yi(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function Pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm)}catch(e){console.error(e)}}Pm(),Ph.exports=nt;var Tm=Ph.exports,_m,zu=Tm;_m=zu.createRoot,zu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const Fu="popstate";function vp(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Wn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),rs("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Ql(l))}function r(o,l){g1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return xp(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function g1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yp(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function rs(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wn(t):t,{state:n,key:t&&t.key||r||yp()})}function Ql(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xp(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=tn.Pop,s=null,u=g();u==null&&(u=0,i.replaceState(Ao({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function c(){a=tn.Pop;let M=g(),d=M==null?null:M-u;u=M,s&&s({action:a,location:A.location,delta:d})}function v(M,d){a=tn.Push;let m=rs(A.location,M,d);n&&n(m,M),u=g()+1;let f=Uu(m,u),w=A.createHref(m);try{i.pushState(f,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}l&&s&&s({action:a,location:A.location,delta:1})}function x(M,d){a=tn.Replace;let m=rs(A.location,M,d);n&&n(m,M),u=g();let f=Uu(m,u),w=A.createHref(m);i.replaceState(f,"",w),l&&s&&s({action:a,location:A.location,delta:0})}function k(M){let d=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof M=="string"?M:Ql(M);return m=m.replace(/ $/,"%20"),xe(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}let A={get action(){return a},get location(){return e(o,i)},listen(M){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Fu,c),s=M,()=>{o.removeEventListener(Fu,c),s=null}},createHref(M){return t(o,M)},createURL:k,encodeLocation(M){let d=k(M);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:x,go(M){return i.go(M)}};return A}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function wp(e,t,n){return n===void 0&&(n="/"),kp(e,t,n,!1)}function kp(e,t,n,r){let o=typeof t=="string"?Wn(t):t,l=v1(o.pathname||"/",n);if(l==null)return null;let i=Om(e);Ap(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=Pp(l);a=Ip(i[s],u,r)}return a}function Om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=cn([r,s.relativePath]),g=n.concat(s);l.children&&l.children.length>0&&(xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Om(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:jp(u,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Dm(l.path))o(l,i,s)}),t}function Dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Dm(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ap(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Np(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bp=/^:[\w-]+$/,Mp=3,Ep=2,Sp=1,Cp=10,$p=-2,Qu=e=>e==="*";function jp(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=$p),t&&(r+=Ep),n.filter(o=>!Qu(o)).reduce((o,l)=>o+(bp.test(l)?Mp:l===""?Sp:Cp),r)}function Np(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ip(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",c=Hu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),v=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Hu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:cn([l,c.pathname]),pathnameBase:Dp(cn([l,c.pathnameBase])),route:v}),c.pathnameBase!=="/"&&(l=cn([l,c.pathnameBase]))}return i}function Hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Rp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,c)=>{let{paramName:v,isOptional:x}=g;if(v==="*"){let A=a[c]||"";i=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const k=a[c];return x&&!k?u[v]=void 0:u[v]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function Rp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),g1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Pp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return g1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function v1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Tp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wn(e):e;return{pathname:n?n.startsWith("/")?n:_p(n,t):t,search:Lp(r),hash:Bp(o)}}function _p(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Op(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lm(e,t){let n=Op(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Wn(e):(o=Ao({},e),xe(!o.pathname||!o.pathname.includes("?"),oa("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),oa("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),oa("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let c=t.length-1;if(!r&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),c-=1;o.pathname=v.join("/")}a=c>=0?t[c]:"/"}let s=Tp(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const cn=e=>e.join("/").replace(/\/\/+/g,"/"),Dp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zm=["post","put","patch","delete"];new Set(zm);const Fp=["get",...zm];new Set(Fp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}const y1=y.createContext(null),Up=y.createContext(null),Qn=y.createContext(null),xi=y.createContext(null),Hn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=y.createContext(null);function Wp(e,t){let{relative:n}=t===void 0?{}:t;Po()||xe(!1);let{basename:r,navigator:o}=y.useContext(Qn),{hash:l,pathname:i,search:a}=Wm(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:cn([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Po(){return y.useContext(xi)!=null}function wi(){return Po()||xe(!1),y.useContext(xi).location}function Um(e){y.useContext(Qn).static||y.useLayoutEffect(e)}function Qp(){let{isDataRoute:e}=y.useContext(Hn);return e?rg():Hp()}function Hp(){Po()||xe(!1);let e=y.useContext(y1),{basename:t,future:n,navigator:r}=y.useContext(Qn),{matches:o}=y.useContext(Hn),{pathname:l}=wi(),i=JSON.stringify(Lm(o,n.v7_relativeSplatPath)),a=y.useRef(!1);return Um(()=>{a.current=!0}),y.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Bm(u,JSON.parse(i),l,g.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:cn([t,c.pathname])),(g.replace?r.replace:r.push)(c,g.state,g)},[t,r,i,l,e])}function Wm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Qn),{matches:o}=y.useContext(Hn),{pathname:l}=wi(),i=JSON.stringify(Lm(o,r.v7_relativeSplatPath));return y.useMemo(()=>Bm(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Vp(e,t){return Gp(e,t)}function Gp(e,t,n,r){Po()||xe(!1);let{navigator:o,static:l}=y.useContext(Qn),{matches:i}=y.useContext(Hn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=wi(),c;if(t){var v;let d=typeof t=="string"?Wn(t):t;u==="/"||(v=d.pathname)!=null&&v.startsWith(u)||xe(!1),c=d}else c=g;let x=c.pathname||"/",k=x;if(u!=="/"){let d=u.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(d.length).join("/")}let A=!l&&n&&n.matches&&n.matches.length>0?n.matches:wp(e,{pathname:k}),M=Xp(A&&A.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:cn([u,o.encodeLocation?o.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:cn([u,o.encodeLocation?o.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,n,r);return t&&M?y.createElement(xi.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:tn.Pop}},M):M}function Kp(){let e=ng(),t=zp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const Yp=y.createElement(Kp,null);class Jp extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Hn.Provider,{value:this.props.routeContext},y.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zp(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(y1);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Hn.Provider,{value:t},r)}function Xp(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);g>=0||xe(!1),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let c=i[g];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=g),c.route.id){let{loaderData:v,errors:x}=n,k=c.route.loader&&v[c.route.id]===void 0&&(!x||x[c.route.id]===void 0);if(c.route.lazy||k){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,c,v)=>{let x,k=!1,A=null,M=null;n&&(x=a&&c.route.id?a[c.route.id]:void 0,A=c.route.errorElement||Yp,s&&(u<0&&v===0?(k=!0,M=null):u===v&&(k=!0,M=c.route.hydrateFallbackElement||null)));let d=t.concat(i.slice(0,v+1)),m=()=>{let f;return x?f=A:k?f=M:c.route.Component?f=y.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=g,y.createElement(Zp,{match:c,routeContext:{outlet:g,matches:d,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||v===0)?y.createElement(Jp,{location:n.location,revalidation:n.revalidation,component:A,error:x,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Qm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qm||{}),Hl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hl||{});function qp(e){let t=y.useContext(y1);return t||xe(!1),t}function eg(e){let t=y.useContext(Up);return t||xe(!1),t}function tg(e){let t=y.useContext(Hn);return t||xe(!1),t}function Hm(e){let t=tg(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function ng(){var e;let t=y.useContext(Fm),n=eg(Hl.UseRouteError),r=Hm(Hl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function rg(){let{router:e}=qp(Qm.UseNavigateStable),t=Hm(Hl.UseNavigateStable),n=y.useRef(!1);return Um(()=>{n.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,bo({fromRouteId:t},l)))},[e,t])}function og(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jn(e){xe(!1)}function lg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=tn.Pop,navigator:l,static:i=!1,future:a}=e;Po()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:l,static:i,future:bo({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Wn(r));let{pathname:g="/",search:c="",hash:v="",state:x=null,key:k="default"}=r,A=y.useMemo(()=>{let M=v1(g,s);return M==null?null:{location:{pathname:M,search:c,hash:v,state:x,key:k},navigationType:o}},[s,g,c,v,x,k,o]);return A==null?null:y.createElement(Qn.Provider,{value:u},y.createElement(xi.Provider,{children:n,value:A}))}function ig(e){let{children:t,location:n}=e;return Vp(os(t),n)}new Promise(()=>{});function os(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,os(r.props.children,l));return}r.type!==Jn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=os(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function ag(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ug(e,t){return e.button===0&&(!t||t==="_self")&&!sg(e)}const hg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cg="6";try{window.__reactRouterVersion=cg}catch{}const mg="startTransition",Vu=l0[mg];function dg(e){let{basename:t,children:n,future:r,window:o}=e,l=y.useRef();l.current==null&&(l.current=vp({window:o,v5Compat:!0}));let i=l.current,[a,s]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=y.useCallback(c=>{u&&Vu?Vu(()=>s(c)):s(c)},[s,u]);return y.useLayoutEffect(()=>i.listen(g),[i,g]),y.useEffect(()=>og(r),[r]),y.createElement(lg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const fg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=y.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:g,viewTransition:c}=t,v=ag(t,hg),{basename:x}=y.useContext(Qn),k,A=!1;if(typeof u=="string"&&pg.test(u)&&(k=u,fg))try{let f=new URL(window.location.href),w=u.startsWith("//")?new URL(f.protocol+u):new URL(u),b=v1(w.pathname,x);w.origin===f.origin&&b!=null?u=b+w.search+w.hash:A=!0}catch{}let M=Wp(u,{relative:o}),d=gg(u,{replace:i,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:c});function m(f){r&&r(f),f.defaultPrevented||d(f)}return y.createElement("a",ls({},v,{href:k||M,onClick:A||l?r:m,ref:n,target:s}))});var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));function gg(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=Qp(),u=wi(),g=Wm(e,{relative:i});return y.useCallback(c=>{if(ug(c,n)){c.preventDefault();let v=r!==void 0?r:Ql(u)===Ql(g);s(e,{replace:v,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,g,r,o,n,e,l,i,a])}var vg=`
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

`,$e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},$e.apply(this,arguments)};function Mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var le="-ms-",ro="-moz-",ee="-webkit-",Vm="comm",ki="rule",x1="decl",yg="@import",Gm="@keyframes",xg="@layer",Km=Math.abs,w1=String.fromCharCode,is=Object.assign;function wg(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Ym(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function pl(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function Jm(e){return e.length}function Gr(e,t){return t.push(e),e}function kg(e,t){return e.map(t).join("")}function Yu(e,t){return e.filter(function(n){return!_t(n,t)})}var Ai=1,Er=1,Zm=0,ct=0,ve=0,Rr="";function bi(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:Ai,column:Er,length:i,return:"",siblings:a}}function Kt(e,t){return is(bi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Gr(e,e.siblings)}function Ag(){return ve}function bg(){return ve=ct>0?Ce(Rr,--ct):0,Er--,ve===10&&(Er=1,Ai--),ve}function yt(){return ve=ct<Zm?Ce(Rr,ct++):0,Er++,ve===10&&(Er=1,Ai++),ve}function Rn(){return Ce(Rr,ct)}function gl(){return ct}function Mi(e,t){return Mr(Rr,e,t)}function as(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(e){return Ai=Er=1,Zm=Mt(Rr=e),ct=0,[]}function Eg(e){return Rr="",e}function la(e){return Ym(Mi(ct-1,ss(e===91?e+2:e===40?e+1:e)))}function Sg(e){for(;(ve=Rn())&&ve<33;)yt();return as(e)>2||as(ve)>3?"":" "}function Cg(e,t){for(;--t&&yt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Mi(e,gl()+(t<6&&Rn()==32&&yt()==32))}function ss(e){for(;yt();)switch(ve){case e:return ct;case 34:case 39:e!==34&&e!==39&&ss(ve);break;case 40:e===41&&ss(e);break;case 92:yt();break}return ct}function $g(e,t){for(;yt()&&e+ve!==57;)if(e+ve===84&&Rn()===47)break;return"/*"+Mi(t,ct-1)+"*"+w1(e===47?e:yt())}function jg(e){for(;!as(Rn());)yt();return Mi(e,ct)}function Ng(e){return Eg(vl("",null,null,null,[""],e=Mg(e),0,[0],e))}function vl(e,t,n,r,o,l,i,a,s){for(var u=0,g=0,c=i,v=0,x=0,k=0,A=1,M=1,d=1,m=0,f="",w=o,b=l,E=r,S=f;M;)switch(k=m,m=yt()){case 40:if(k!=108&&Ce(S,c-1)==58){pl(S+=Q(la(m),"&","&\f"),"&\f",Km(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=la(m);break;case 9:case 10:case 13:case 32:S+=Sg(k);break;case 92:S+=Cg(gl()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Gr(Ig($g(yt(),gl()),t,n,s),s);break;default:S+="/"}break;case 123*A:a[u++]=Mt(S)*d;case 125*A:case 59:case 0:switch(m){case 0:case 125:M=0;case 59+g:d==-1&&(S=Q(S,/\f/g,"")),x>0&&Mt(S)-c&&Gr(x>32?Zu(S+";",r,n,c-1,s):Zu(Q(S," ","")+";",r,n,c-2,s),s);break;case 59:S+=";";default:if(Gr(E=Ju(S,t,n,u,g,o,a,f,w=[],b=[],c,l),l),m===123)if(g===0)vl(S,t,E,E,w,l,c,a,b);else switch(v===99&&Ce(S,3)===110?100:v){case 100:case 108:case 109:case 115:vl(e,E,E,r&&Gr(Ju(e,E,E,0,0,o,a,f,o,w=[],c,b),b),o,b,c,a,r?w:b);break;default:vl(S,E,E,E,[""],b,0,a,b)}}u=g=x=0,A=d=1,f=S="",c=i;break;case 58:c=1+Mt(S),x=k;default:if(A<1){if(m==123)--A;else if(m==125&&A++==0&&bg()==125)continue}switch(S+=w1(m),m*A){case 38:d=g>0?1:(S+="\f",-1);break;case 44:a[u++]=(Mt(S)-1)*d,d=1;break;case 64:Rn()===45&&(S+=la(yt())),v=Rn(),g=c=Mt(f=S+=jg(gl())),m++;break;case 45:k===45&&Mt(S)==2&&(A=0)}}return l}function Ju(e,t,n,r,o,l,i,a,s,u,g,c){for(var v=o-1,x=o===0?l:[""],k=Jm(x),A=0,M=0,d=0;A<r;++A)for(var m=0,f=Mr(e,v+1,v=Km(M=i[A])),w=e;m<k;++m)(w=Ym(M>0?x[m]+" "+f:Q(f,/&\f/g,x[m])))&&(s[d++]=w);return bi(e,t,n,o===0?ki:a,s,u,g,c)}function Ig(e,t,n,r){return bi(e,t,n,Vm,w1(Ag()),Mr(e,2,-2),0,r)}function Zu(e,t,n,r,o){return bi(e,t,n,x1,Mr(e,0,r),Mr(e,r+1,-1),r,o)}function Xm(e,t,n){switch(wg(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+ro+e+le+e+e;case 5936:switch(Ce(e,t+11)){case 114:return ee+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+le+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+le+e+e;case 6165:return ee+e+le+"flex-"+e+e;case 5187:return ee+e+Q(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return ee+e+le+"flex-item-"+Q(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":le+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ee+e+le+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+le+Q(e,"shrink","negative")+e;case 5292:return ee+e+le+Q(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Q(e,"-grow","")+ee+e+le+Q(e,"grow","positive")+e;case 4554:return ee+Q(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!_t(e,/flex-|baseline/))return le+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return le+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,_t(r.props,/grid-\w+-end/)})?~pl(e+(n=n[t].value),"span",0)?e:le+Q(e,"-start","")+e+le+"grid-row-span:"+(~pl(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":le+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:le+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+ro+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pl(e,"stretch",0)?Xm(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return le+o+":"+l+u+(i?le+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return Q(e,":",":"+ee)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Ce(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+le+"$2box$3")+e;case 100:return Q(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Vl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rg(e,t,n,r){switch(e.type){case xg:if(e.children.length)break;case yg:case x1:return e.return=e.return||e.value;case Vm:return"";case Gm:return e.return=e.value+"{"+Vl(e.children,r)+"}";case ki:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=Vl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pg(e){var t=Jm(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Tg(e){return function(t){t.root||(t=t.return)&&e(t)}}function _g(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case x1:e.return=Xm(e.value,e.length,n);return;case Gm:return Vl([Kt(e,{value:Q(e.value,"@","@"+ee)})],r);case ki:if(e.length)return kg(n=e.props,function(o){switch(_t(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Kt(e,{props:[Q(o,/:(read-\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[o]})),is(e,{props:Yu(n,r)});break;case"::placeholder":Kn(Kt(e,{props:[Q(o,/:(plac\w+)/,":"+ee+"input-$1")]})),Kn(Kt(e,{props:[Q(o,/:(plac\w+)/,":"+ro+"$1")]})),Kn(Kt(e,{props:[Q(o,/:(plac\w+)/,le+"input-$1")]})),Kn(Kt(e,{props:[o]})),is(e,{props:Yu(n,r)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},Sr=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",qm="active",ed="data-styled-version",Ei="6.1.17",k1=`/*!sc*/
`,Gl=typeof window<"u"&&"HTMLElement"in window,Dg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),Lg={},Si=Object.freeze([]),Cr=Object.freeze({});function td(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var nd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zg=/(^-|-$)/g;function Xu(e){return e.replace(Bg,"-").replace(zg,"")}var Fg=/(a)(d)/gi,Xo=52,qu=function(e){return String.fromCharCode(e+(e>25?39:97))};function us(e){var t,n="";for(t=Math.abs(e);t>Xo;t=t/Xo|0)n=qu(t%Xo)+n;return(qu(t%Xo)+n).replace(Fg,"$1-$2")}var ia,rd=5381,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},od=function(e){return ur(rd,e)};function ld(e){return us(od(e)>>>0)}function Ug(e){return e.displayName||e.name||"Component"}function aa(e){return typeof e=="string"&&!0}var id=typeof Symbol=="function"&&Symbol.for,ad=id?Symbol.for("react.memo"):60115,Wg=id?Symbol.for("react.forward_ref"):60112,Qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vg=((ia={})[Wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ia[ad]=sd,ia);function eh(e){return("type"in(t=e)&&t.type.$$typeof)===ad?sd:"$$typeof"in e?Vg[e.$$typeof]:Qg;var t}var Gg=Object.defineProperty,Kg=Object.getOwnPropertyNames,th=Object.getOwnPropertySymbols,Yg=Object.getOwnPropertyDescriptor,Jg=Object.getPrototypeOf,nh=Object.prototype;function ud(e,t,n){if(typeof t!="string"){if(nh){var r=Jg(t);r&&r!==nh&&ud(e,r,n)}var o=Kg(t);th&&(o=o.concat(th(t)));for(var l=eh(e),i=eh(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Hg||n&&n[s]||i&&s in i||l&&s in l)){var u=Yg(t,s);try{Gg(e,s,u)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function A1(e){return typeof e=="object"&&"styledComponentId"in e}function $n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Eo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cs(e,t,n){if(n===void 0&&(n=!1),!n&&!Eo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cs(e[r],t[r]);else if(Eo(t))for(var r in t)e[r]=cs(e[r],t[r]);return e}function b1(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(k1);return n},e}(),yl=new Map,Kl=new Map,xl=1,qo=function(e){if(yl.has(e))return yl.get(e);for(;Kl.has(xl);)xl++;var t=xl++;return yl.set(e,t),Kl.set(t,e),t},Xg=function(e,t){xl=t+1,yl.set(e,t),Kl.set(t,e)},qg="style[".concat(Sr,"][").concat(ed,'="').concat(Ei,'"]'),ev=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tv=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},nv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(k1),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(ev);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Xg(g,u),tv(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},rh=function(e){for(var t=document.querySelectorAll(qg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==qm&&(nv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function rv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,qm),r.setAttribute(ed,Ei);var i=rv();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},ov=function(){function e(t){this.element=hd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lv=function(){function e(t){this.element=hd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),iv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),oh=Gl,av={isServer:!Gl,useCSSOMInjection:!Dg},Yl=function(){function e(t,n,r){t===void 0&&(t=Cr),n===void 0&&(n={});var o=this;this.options=$e($e({},av),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gl&&oh&&(oh=!1,rh(this)),b1(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(c){var v=function(d){return Kl.get(d)}(c);if(v===void 0)return"continue";var x=l.names.get(v),k=i.getGroup(c);if(x===void 0||!x.size||k.length===0)return"continue";var A="".concat(Sr,".g").concat(c,'[id="').concat(v,'"]'),M="";x!==void 0&&x.forEach(function(d){d.length>0&&(M+="".concat(d,","))}),s+="".concat(k).concat(A,'{content:"').concat(M,'"}').concat(k1)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return qo(t)},e.prototype.rehydrate=function(){!this.server&&Gl&&rh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new iv(o):r?new ov(o):new lv(o)}(this.options),new Zg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sv=/&/g,uv=/^\s*\/\/.*$/gm;function cd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cd(n.children,t)),n})}function hv(e){var t,n,r,o=Cr,l=o.options,i=l===void 0?Cr:l,a=o.plugins,s=a===void 0?Si:a,u=function(v,x,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):v},g=s.slice();g.push(function(v){v.type===ki&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(sv,n).replace(r,u))}),i.prefix&&g.push(_g),g.push(Rg);var c=function(v,x,k,A){x===void 0&&(x=""),k===void 0&&(k=""),A===void 0&&(A="&"),t=A,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var M=v.replace(uv,""),d=Ng(k||x?"".concat(k," ").concat(x," { ").concat(M," }"):M);i.namespace&&(d=cd(d,i.namespace));var m=[];return Vl(d,Pg(g.concat(Tg(function(f){return m.push(f)})))),m};return c.hash=s.length?s.reduce(function(v,x){return x.name||Bn(15),ur(v,x.name)},rd).toString():"",c}var cv=new Yl,ms=hv(),md=p.createContext({shouldForwardProp:void 0,styleSheet:cv,stylis:ms});md.Consumer;p.createContext(void 0);function ds(){return y.useContext(md)}var mv=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=ms);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,b1(this,function(){throw Bn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ms),this.name+t.hash},e}(),dv=function(e){return e>="A"&&e<="Z"};function lh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;dv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dd=function(e){return e==null||e===!1||e===""},fd=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!dd(l)&&(Array.isArray(l)&&l.isCss||Ln(l)?r.push("".concat(lh(o),":"),l,";"):Eo(l)?r.push.apply(r,Mo(Mo(["".concat(o," {")],fd(l),!1),["}"],!1)):r.push("".concat(lh(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Og||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(dd(e))return[];if(A1(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return mn(o,t,n,r)}var l;return e instanceof mv?n?(e.inject(n,r),[e.getName(r)]):[e]:Eo(e)?fd(e):Array.isArray(e)?Array.prototype.concat.apply(Si,e.map(function(i){return mn(i,t,n,r)})):[e.toString()]}function pd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!A1(n))return!1}return!0}var fv=od(Ei),pv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pd(t),this.componentId=n,this.baseHash=ur(fv,n),this.baseStyle=r,Yl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=$n(o,this.staticRulesId);else{var l=hs(mn(this.rules,t,n,r)),i=us(ur(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=$n(o,i),this.staticRulesId=i}else{for(var s=ur(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var c=this.rules[g];if(typeof c=="string")u+=c;else if(c){var v=hs(mn(c,t,n,r));s=ur(s,v+g),u+=v}}if(u){var x=us(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=$n(o,x)}}return o},e}(),So=p.createContext(void 0);So.Consumer;function gv(e){var t=p.useContext(So),n=y.useMemo(function(){return function(r,o){if(!r)throw Bn(14);if(Ln(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Bn(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(So.Provider,{value:n},e.children):null}var sa={};function vv(e,t,n){var r=A1(e),o=e,l=!aa(e),i=t.attrs,a=i===void 0?Si:i,s=t.componentId,u=s===void 0?function(w,b){var E=typeof w!="string"?"sc":Xu(w);sa[E]=(sa[E]||0)+1;var S="".concat(E,"-").concat(ld(Ei+E+sa[E]));return b?"".concat(b,"-").concat(S):S}(t.displayName,t.parentComponentId):s,g=t.displayName,c=g===void 0?function(w){return aa(w)?"styled.".concat(w):"Styled(".concat(Ug(w),")")}(e):g,v=t.displayName&&t.componentId?"".concat(Xu(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var A=o.shouldForwardProp;if(t.shouldForwardProp){var M=t.shouldForwardProp;k=function(w,b){return A(w,b)&&M(w,b)}}else k=A}var d=new pv(n,v,r?o.componentStyle:void 0);function m(w,b){return function(E,S,I){var F=E.attrs,O=E.componentStyle,U=E.defaultProps,D=E.foldedComponentIds,ne=E.styledComponentId,de=E.target,ue=p.useContext(So),we=ds(),ke=E.shouldForwardProp||we.shouldForwardProp,$=td(S,ue,U)||Cr,R=function(Z,z,G){for(var Ee,N=$e($e({},z),{className:void 0,theme:G}),W=0;W<Z.length;W+=1){var K=Ln(Ee=Z[W])?Ee(N):Ee;for(var q in K)N[q]=q==="className"?$n(N[q],K[q]):q==="style"?$e($e({},N[q]),K[q]):K[q]}return z.className&&(N.className=$n(N.className,z.className)),N}(F,S,$),_=R.as||de,J={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&R.theme===$||(V==="forwardedAs"?J.as=R.forwardedAs:ke&&!ke(V,_)||(J[V]=R[V]));var L=function(Z,z){var G=ds(),Ee=Z.generateAndInjectStyles(z,G.styleSheet,G.stylis);return Ee}(O,R),B=$n(D,ne);return L&&(B+=" "+L),R.className&&(B+=" "+R.className),J[aa(_)&&!nd.has(_)?"class":"className"]=B,I&&(J.ref=I),y.createElement(_,J)}(f,w,b)}m.displayName=c;var f=p.forwardRef(m);return f.attrs=x,f.componentStyle=d,f.displayName=c,f.shouldForwardProp=k,f.foldedComponentIds=r?$n(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=v,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var I=0,F=E;I<F.length;I++)cs(b,F[I],!0);return b}({},o.defaultProps,w):w}}),b1(f,function(){return".".concat(f.styledComponentId)}),l&&ud(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function ih(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ah=function(e){return Object.assign(e,{isCss:!0})};function P(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||Eo(e))return ah(mn(ih(Si,Mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mn(r):ah(mn(ih(r,t)))}function fs(e,t,n){if(n===void 0&&(n=Cr),!t)throw Bn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,P.apply(void 0,Mo([o],l,!1)))};return r.attrs=function(o){return fs(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return fs(e,t,$e($e({},n),o))},r}var gd=function(e){return fs(vv,e)},C=gd;nd.forEach(function(e){C[e]=gd(e)});var yv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pd(t),Yl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(hs(mn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Yl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function xv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=P.apply(void 0,Mo([e],t,!1)),o="sc-global-".concat(ld(JSON.stringify(r))),l=new yv(r,o),i=function(s){var u=ds(),g=p.useContext(So),c=p.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,g,u.stylis),p.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,g,u.stylis),function(){return l.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,c,v){if(l.isStatic)l.renderStyles(s,Lg,g,v);else{var x=$e($e({},u),{theme:td(u,c,i.defaultProps)});l.renderStyles(s,x,g,v)}}return p.memo(i)}const M1="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",E1="inset 2px 2px 3px rgba(0,0,0,0.2)",wt=()=>P`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,kt=({background:e="material",color:t="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,To=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>P`
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
`,Yn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},wv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?M1:!1,o?E1:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Yn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Yn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>wv({theme:r,topLeftInner:Yn[t][n.topLeftInner],bottomRightInner:Yn[t][n.bottomRightInner],hasShadow:o})};
  `},$r=()=>P`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,kv=e=>Buffer.from(e).toString("base64"),Av=typeof btoa<"u"?btoa:kv,el=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Av(n)})`},S1=(e="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>To({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
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
    background-image: ${({theme:t})=>el(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>el(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>el(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>el(t.materialText,0)};
  }
`,bv=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Mv=y.forwardRef(({children:e,underline:t=!0,...n},r)=>p.createElement(bv,{ref:r,underline:t,...n},e));Mv.displayName="Anchor";const Ev=C.header`
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
`,jv=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>p.createElement(Cv,{noBorder:n,ref:a,size:gn(r),square:o,src:l,...i},l?p.createElement($v,{src:l,alt:e}):t));jv.displayName="Avatar";const Pe={sm:"28px",md:"36px",lg:"44px"},Nv=P`
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
        `:P`
          ${kt()};
          border: none;
          ${t&&wt()}
          ${e?To({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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
  ${Nv}
`,H=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Vn,primary:u=!1,variant:g="default",...c},v)=>p.createElement(Ci,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:l,square:i,type:r,variant:g,...c},n));H.displayName="Button";function vn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=y.useState(e),u=y.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,u]}const ps=C.li`
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
  ${e=>e.$disabled&&wt()}
`,yd=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>p.createElement(ps,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));yd.displayName="MenuListItem";const xd=C.ul.attrs(()=>({role:"menu"}))`
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
`;xd.displayName="MenuList";const jt=20,Jl=C.input`
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
    ${({$disabled:e,theme:t})=>!e&&P`
        color: ${t.materialTextInvert};
      `};
  }
`,$1=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Jl}:focus ~ & {
    ${$r}
  }
  ${Jl}:not(:disabled) ~ &:active {
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
`,Co=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>p.createElement(Nt,{ref:r,shadow:t,...n},p.createElement(Iv,null,e)));Co.displayName="ScrollView";const wd=P`
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
`,Pv=C.div`
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
`,Tv=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,_v=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>To({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Ov={flat:Pv,default:Rv},Dv=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Vn,style:a={},value:s,variant:u="default",...g},c)=>{var v;const[x,k]=vn({defaultValue:n,onChange:i,readOnly:(v=g.readOnly)!==null&&v!==void 0?v:r,value:e}),A=y.useCallback(m=>{const f=m.target.checked;k(f),i(m)},[i,k]),M=Ov[u];let d=null;return o?d=_v:x&&(d=Tv),p.createElement(C1,{$disabled:r,className:t,style:a},p.createElement(Jl,{disabled:r,onChange:r?void 0:A,readOnly:r,type:"checkbox",value:s,checked:x,"data-indeterminate":o,ref:c,...g}),p.createElement(M,{$disabled:r,role:"presentation"},d&&p.createElement(d,{$disabled:r,variant:u})),l&&p.createElement($1,null,l))});Dv.displayName="Checkbox";const j1=C.div`
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
`;j1.displayName="Separator";const Lv=C(Ci)`
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

  ${({$disabled:e})=>e?P`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:P`
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
`,Uv=y.forwardRef(({value:e,defaultValue:t,onChange:n=Vn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=vn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=c=>{const v=c.target.value;u(v),n(c)};return p.createElement(Lv,{disabled:r,as:"div",variant:o,size:"md"},p.createElement(kd,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),p.createElement(zv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&p.createElement(Bv,{orientation:"vertical"}),p.createElement(Fv,{$disabled:r,variant:o}))});Uv.displayName="ColorInput";const Wv=C.div`
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
      ${To({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,uh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Qv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Hv({digit:e=0,pixelSize:t=2,...n}){const r=Qv[Number(e)].map((o,l)=>o?`${uh[l]} active`:uh[l]);return p.createElement(Wv,{pixelSize:t,...n},r.map((o,l)=>p.createElement("span",{className:o,key:l})))}const Vv=C.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Gv={sm:1,md:2,lg:3,xl:4},Kv=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return p.createElement(Vv,{ref:o,...r},l.map((i,a)=>p.createElement(Hv,{digit:i,pixelSize:Gv[n],key:a})))});Kv.displayName="Counter";const Ad=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Pe.md};
`,Yv=C(Nt).attrs({"data-testid":"variant-default"})`
  ${Ad}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Jv=C.div.attrs({"data-testid":"variant-flat"})`
  ${zn()}
  ${Ad}
  position: relative;
`,bd=P`
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
  ${bd}
  padding: 0 8px;
`,Xv=C.textarea`
  ${bd}
  padding: 8px;
  resize: none;
  ${({variant:e})=>S1(e)}
`,Md=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Vn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Jv:Yv,g=y.useMemo(()=>{var c;return a.multiline?p.createElement(Xv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):p.createElement(Zv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=a.type)!==null&&c!==void 0?c:"text",variant:i,...a})},[t,r,a,s,i]);return p.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});Md.displayName="TextInput";const qv=C.div`
  display: inline-flex;
  align-items: center;
`,gs=C(H)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,ey=C.div`
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
`,hh=C.span`
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
  ${gs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?P`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ed=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:g="default",width:c,...v},x)=>{const[k,A]=vn({defaultValue:t,onChange:l,readOnly:i,value:u}),M=y.useCallback(E=>{const S=parseFloat(E.target.value);A(S)},[A]),d=y.useCallback(E=>{const S=jn(parseFloat(((k??0)+E).toFixed(2)),o??null,r??null);A(S),l==null||l(S)},[r,o,l,A,k]),m=y.useCallback(()=>{k!==void 0&&(l==null||l(k))},[l,k]),f=y.useCallback(()=>{d(a)},[d,a]),w=y.useCallback(()=>{d(-a)},[d,a]),b=g==="flat"?"flat":"raised";return p.createElement(qv,{className:e,style:{...s,width:c!==void 0?gn(c):"auto"},...v},p.createElement(Md,{value:k,variant:g,onChange:M,disabled:n,type:"number",readOnly:i,ref:x,fullWidth:!0,onBlur:m}),p.createElement(ey,{variant:g},p.createElement(gs,{"data-testid":"increment",variant:b,disabled:n||i,onClick:f},p.createElement(hh,{invert:!0})),p.createElement(gs,{"data-testid":"decrement",variant:b,disabled:n||i,onClick:w},p.createElement(hh,null))))});Ed.displayName="NumberInput";function ty(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Sd=e=>y.useMemo(()=>ty(),[e]),Cd=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,$d=P`
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
`,jd=P`
  height: ${Pe.md};
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
`,ly=C.select`
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
`,Nd=C(Ci).attrs(()=>({"aria-hidden":"true"}))`
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
`,iy=C.span`
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
  ${({variant:e="default"})=>e==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>S1(e)}
`,sy=C.li`
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
  ${({active:e})=>e?$d:""}
  user-select: none;
`,uy=[],Id=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=uy,readOnly:i,style:a,value:s,variant:u,width:g})=>{var c;const v=y.useMemo(()=>l.filter(Boolean),[l]),[x,k]=vn({defaultValue:t??((c=v==null?void 0:v[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:i,value:s}),A=!(n||i),M=y.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),d=y.useMemo(()=>p.createElement(Nd,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},p.createElement(iy,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),m=y.useMemo(()=>u==="flat"?oy:ry,[u]);return y.useMemo(()=>({isEnabled:A,options:v,value:x,setValue:k,wrapperProps:M,DropdownButton:d,Wrapper:m}),[d,m,A,v,k,x,M])},hy={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},cy=1e3,my=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:g,selectRef:c,setValue:v,wrapperRef:x})=>{const k=y.useRef(null),A=y.useRef([]),M=y.useRef(0),d=y.useRef(0),m=y.useRef(),f=y.useRef("search"),w=y.useRef(""),b=y.useRef(),[E,S]=vn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=y.useMemo(()=>{const N=s.findIndex(W=>W.value===g);return M.current=jn(N,0,null),s[N]},[s,g]),[F,O]=y.useState(s[0]),U=y.useCallback(N=>{const W=k.current,K=A.current[N];if(!K||!W){m.current=N;return}m.current=void 0;const q=W.clientHeight,ae=W.scrollTop,Ne=W.scrollTop+q,Ae=K.offsetTop,ot=K.offsetHeight,It=K.offsetTop+K.offsetHeight;Ae<ae&&W.scrollTo(0,Ae),It>Ne&&W.scrollTo(0,Ae-q+ot),K.focus({preventScroll:!0})},[k]),D=y.useCallback((N,{scroll:W}={})=>{var K;const q=s.length-1;let ae;switch(N){case"first":{ae=0;break}case"last":{ae=q;break}case"next":{ae=jn(d.current+1,0,q);break}case"previous":{ae=jn(d.current-1,0,q);break}case"selected":{ae=jn((K=M.current)!==null&&K!==void 0?K:0,0,q);break}default:ae=N}d.current=ae,O(s[ae]),W&&U(ae)},[d,s,U]),ne=y.useCallback(({fromEvent:N})=>{S(!0),D("selected",{scroll:!0}),i==null||i({fromEvent:N})},[D,i,S]),de=y.useCallback(()=>{f.current="search",w.current="",clearTimeout(b.current)},[]),ue=y.useCallback(({focusSelect:N,fromEvent:W})=>{var K;n==null||n({fromEvent:W}),S(!1),O(s[0]),de(),m.current=void 0,N&&((K=c.current)===null||K===void 0||K.focus())},[de,n,s,c,S]),we=y.useCallback(({fromEvent:N})=>{E?ue({focusSelect:!1,fromEvent:N}):ne({fromEvent:N})},[ue,ne,E]),ke=y.useCallback((N,{fromEvent:W})=>{M.current!==N&&(M.current=N,v(s[N].value),t==null||t(s[N],{fromEvent:W}))},[t,s,v]),$=y.useCallback(({focusSelect:N,fromEvent:W})=>{ke(d.current,{fromEvent:W}),ue({focusSelect:N,fromEvent:W})},[ue,ke]),R=y.useCallback((N,{fromEvent:W,select:K})=>{var q;switch(f.current==="cycleFirstLetter"&&N!==w.current&&(f.current="search"),N===w.current?f.current="cycleFirstLetter":w.current+=N,f.current){case"search":{let ae=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(w.current))===0});ae<0&&(ae=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(N))===0}),w.current=N),ae>=0&&(K?ke(ae,{fromEvent:W}):D(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=K?(q=M.current)!==null&&q!==void 0?q:-1:d.current;let Ne=s.findIndex((Ae,ot)=>{var It;return ot>ae&&((It=Ae.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(N))===0});Ne<0&&(Ne=s.findIndex(Ae=>{var ot;return((ot=Ae.label)===null||ot===void 0?void 0:ot.toLocaleUpperCase().indexOf(N))===0})),Ne>=0&&(K?ke(Ne,{fromEvent:W}):D(Ne,{scroll:!0}));break}}clearTimeout(b.current),b.current=setTimeout(()=>{f.current==="search"&&(w.current="")},cy)},[D,s,ke]),_=y.useCallback(N=>{var W;N.button===0&&(N.preventDefault(),(W=c.current)===null||W===void 0||W.focus(),we({fromEvent:N}),l==null||l(N))},[l,c,we]),J=y.useCallback(N=>{$({focusSelect:!0,fromEvent:N})},[$]),V=y.useCallback(N=>{const{altKey:W,code:K,ctrlKey:q,metaKey:ae,shiftKey:Ne}=N,{ARROW_DOWN:Ae,ARROW_UP:ot,END:It,ENTER:kn,ESC:Vt,HOME:Ni,SPACE:Ii,TAB:Pr}=hy,I1=W||q||ae||Ne;if(!(K===Pr&&(W||q||ae)||K!==Pr&&I1))switch(K){case Ae:{if(N.preventDefault(),!E){ne({fromEvent:N});return}D("next",{scroll:!0});break}case ot:{if(N.preventDefault(),!E){ne({fromEvent:N});return}D("previous",{scroll:!0});break}case It:{if(N.preventDefault(),!E){ne({fromEvent:N});return}D("last",{scroll:!0});break}case kn:{if(!E)return;N.preventDefault(),$({focusSelect:!0,fromEvent:N});break}case Vt:{if(!E)return;N.preventDefault(),ue({focusSelect:!0,fromEvent:N});break}case Ni:{if(N.preventDefault(),!E){ne({fromEvent:N});return}D("first",{scroll:!0});break}case Ii:{N.preventDefault(),E?$({focusSelect:!0,fromEvent:N}):ne({fromEvent:N});break}case Pr:{if(!E)return;Ne||N.preventDefault(),$({focusSelect:!Ne,fromEvent:N});break}default:!I1&&K.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),R(K.replace(/^Key/,""),{select:!E,fromEvent:N}))}},[D,ue,E,ne,R,$]),L=y.useCallback(N=>{V(N),o==null||o(N)},[V,o]),B=y.useCallback(N=>{D(N)},[D]),Z=y.useCallback(N=>{E||(de(),e==null||e(N))},[de,e,E]),z=y.useCallback(N=>{de(),r==null||r(N)},[de,r]),G=y.useCallback(N=>{k.current=N,m.current!==void 0&&U(m.current)},[U]),Ee=y.useCallback((N,W)=>{A.current[W]=N,m.current===W&&U(m.current)},[U]);return y.useEffect(()=>{if(!E)return()=>{};const N=W=>{var K;const q=W.target;!((K=x.current)===null||K===void 0)&&K.contains(q)||(W.preventDefault(),ue({focusSelect:!1,fromEvent:W}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[ue,E,x]),y.useMemo(()=>({activeOption:F,handleActivateOptionIndex:B,handleBlur:Z,handleButtonKeyDown:L,handleDropdownKeyDown:V,handleFocus:z,handleMouseDown:_,handleOptionClick:J,handleSetDropdownRef:G,handleSetOptionRef:Ee,open:E,selectedOption:I}),[F,B,Z,L,z,V,_,J,G,Ee,E,I])},dy=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...g},c)=>{const{isEnabled:v,options:x,setValue:k,value:A,DropdownButton:M,Wrapper:d}=Id({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),m=y.useCallback(f=>{const w=x.find(b=>b.value===f.target.value);w&&(k(w.value),r==null||r(w,{fromEvent:f}))},[r,x,k]);return p.createElement(d,{className:e,style:{...i,width:u}},p.createElement(N1,null,p.createElement(ly,{...g,disabled:n,onChange:v?m:Vn,ref:c,value:A},x.map((f,w)=>{var b;return p.createElement("option",{key:`${f.value}-${w}`,value:f.value},(b=f.label)!==null&&b!==void 0?b:f.value)})),M))});dy.displayName="SelectNative";function fy({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(g=>{i(g,n)},[n,i]),u=Sd();return p.createElement(sy,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function py({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:c,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:A,onOpen:M,open:d,options:m,readOnly:f,shadow:w=!0,style:b,variant:E="default",value:S,width:I="auto",...F},O){const{isEnabled:U,options:D,setValue:ne,value:de,wrapperProps:ue,DropdownButton:we,Wrapper:ke}=Id({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:m,style:b,readOnly:f,value:S,variant:E,width:I}),$=y.useRef(null),R=y.useRef(null),_=y.useRef(null),{activeOption:J,handleActivateOptionIndex:V,handleBlur:L,handleButtonKeyDown:B,handleDropdownKeyDown:Z,handleFocus:z,handleMouseDown:G,handleOptionClick:Ee,handleSetDropdownRef:N,handleSetOptionRef:W,open:K,selectedOption:q}=my({onBlur:g,onChange:c,onClose:v,onFocus:x,onKeyDown:k,onMouseDown:A,onOpen:M,open:d,options:D,value:de,selectRef:R,setValue:ne,wrapperRef:_});y.useImperativeHandle(O,()=>({focus:kn=>{var Vt;(Vt=R.current)===null||Vt===void 0||Vt.focus(kn)},node:$.current,value:String(de)}),[de]);const ae=y.useMemo(()=>q?typeof l=="function"?l(q):q.label:"",[l,q]),Ne=U?1:void 0,Ae=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ot=Sd(),It=y.useMemo(()=>D.map((kn,Vt)=>{const Ni=`${de}-${Vt}`,Ii=kn===J,Pr=kn===q;return p.createElement(fy,{activateOptionIndex:V,active:Ii,index:Vt,key:Ni,onClick:Ee,option:kn,selected:Pr,setRef:W})}),[J,V,Ee,W,D,q,de]);return p.createElement(ke,{...ue,$disabled:o,ref:_,shadow:w,style:{...b,width:I}},p.createElement("input",{name:u,ref:$,type:"hidden",value:String(de),...i}),p.createElement(N1,{"aria-disabled":o,"aria-expanded":K,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":U&&K?ot:void 0,onBlur:L,onFocus:z,onKeyDown:B,onMouseDown:U?G:A,ref:R,role:"button",tabIndex:Ne,...F},p.createElement(ny,null,ae),we),U&&K&&p.createElement(ay,{id:ot,onKeyDown:Z,ref:N,role:"listbox",style:Ae,tabIndex:0,variant:E},It))}const Rd=y.forwardRef(py);Rd.displayName="Select";const gy=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Zl=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return p.createElement(gy,{noPadding:n,ref:o,...r},t)});Zl.displayName="Toolbar";const vy=C.div`
  padding: 16px;
`,qe=y.forwardRef(function({children:t,...n},r){return p.createElement(vy,{ref:r,...n},t)});qe.displayName="WindowContent";const yy=C.div`
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
`,et=y.forwardRef(function({active:t=!0,children:n,...r},o){return p.createElement(yy,{active:t,ref:o,...r},n)});et.displayName="WindowHeader";const xy=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${kt()}
`,wy=C.span`
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
`,zt=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>p.createElement(xy,{ref:l,shadow:r,...o},e,t&&p.createElement(wy,{"data-testid":"resizeHandle",ref:n})));zt.displayName="Window";const ky=C(Co)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Ay=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,by=C.div`
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
`,Ey=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Sy(e,t){return new Date(e,t+1,0).getDate()}function Cy(e,t,n){return new Date(e,t,n).getDay()}function $y(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const jy=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=y.useState(()=>$y(t)),{year:s,month:u,day:g}=i,c=y.useCallback(({value:M})=>{a(d=>({...d,month:M}))},[]),v=y.useCallback(M=>{a(d=>({...d,year:M}))},[]),x=y.useCallback(M=>{a(d=>({...d,day:M}))},[]),k=y.useCallback(()=>{const M=[i.year,i.month+1,i.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n(M)},[i.day,i.month,i.year,n]),A=y.useMemo(()=>{const M=Array.from({length:42}),d=Cy(s,u,1);let m=g;const f=Sy(s,u);return m=m<f?m:f,M.forEach((w,b)=>{if(b>=d&&b<f+d){const E=b-d+1;M[b]=p.createElement(Rt,{key:b,onClick:()=>{x(E)}},p.createElement(My,{active:E===m},E))}else M[b]=p.createElement(Rt,{key:b})}),M},[g,x,u,s]);return p.createElement(zt,{className:e,ref:l,shadow:o,style:{margin:20}},p.createElement(et,null,p.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),p.createElement(qe,null,p.createElement(Zl,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(Rd,{options:Ey,value:u,onChange:c,width:128,menuMaxHeight:200}),p.createElement(Ed,{value:s,onChange:v,width:100})),p.createElement(ky,null,p.createElement(Ay,null,p.createElement(Rt,null,"S"),p.createElement(Rt,null,"M"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"W"),p.createElement(Rt,null,"T"),p.createElement(Rt,null,"F"),p.createElement(Rt,null,"S")),p.createElement(by,null,A)),p.createElement(Zl,{noPadding:!0,style:{justifyContent:"space-between"}},p.createElement(H,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),p.createElement(H,{fullWidth:!0,onClick:n?k:void 0,disabled:!n},"OK"))))});jy.displayName="DatePicker";const Ny=e=>{switch(e){case"status":case"well":return P`
        ${pe({style:"status"})}
      `;case"window":case"outside":return P`
        ${pe({style:"window"})}
      `;case"field":return P`
        ${pe({style:"field"})}
      `;default:return P`
        ${pe()}
      `}},Iy=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Ny(e)}
  ${({variant:e})=>kt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ry=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>p.createElement(Iy,{ref:o,shadow:t,variant:n,...r},e));Ry.displayName="Frame";const Py=C.fieldset`
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
  ${e=>e.$disabled&&wt()}
`,Ty=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,_y=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>p.createElement(Py,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&p.createElement(Ty,{variant:n},e),r));_y.displayName="GroupBox";const Oy=C.div`
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
`;Oy.displayName="Handle";const Dy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ly=C.div`
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
  height: ${Pe.md};
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
`,Pd=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yy=C.div`
  position: relative;
  top: 4px;
  ${Pd}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Jy=C.div`
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
`,Zy=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Td=17,Xy=C.span`
  display: inline-block;
  width: ${Td}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,qy=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=y.useRef(null),[s,u]=y.useState([]),g=y.useCallback(()=>{if(!a.current||n===void 0)return;const c=a.current.getBoundingClientRect().width,v=Math.round(n/100*c/Td);u(Array.from({length:v}))},[n]);return y.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),p.createElement(Gy,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},p.createElement(Ky,{variant:r,shadow:t},r==="default"?p.createElement(p.Fragment,null,p.createElement(Yy,{"data-testid":"defaultProgress1"},i),p.createElement(Jy,{"data-testid":"defaultProgress2",value:n},i)):p.createElement(Zy,{ref:a,"data-testid":"tileProgress"},s.map((c,v)=>p.createElement(Xy,{key:v})))))});qy.displayName="ProgressBar";const _d=P`
  width: ${jt}px;
  height: ${jt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,e2=C(Nt)`
  ${_d}
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
  ${_d}
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
`,r2={flat:t2,default:e2},o2=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=r2[i];return p.createElement(C1,{$disabled:n,className:t,style:l},p.createElement(u,{$disabled:n,role:"presentation"},e&&p.createElement(n2,{$disabled:n,variant:i})),p.createElement(Jl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&p.createElement($1,null,r))});o2.displayName="Radio";const l2=typeof window<"u"?y.useLayoutEffect:y.useEffect;function An(e){const t=y.useRef(e);return l2(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function ch(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function mh(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{ch(e,n),ch(t,n)},[e,t])}let $i=!0,vs=!1,dh;const i2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a2(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&i2[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function s2(e){e.metaKey||e.altKey||e.ctrlKey||($i=!0)}function ua(){$i=!1}function u2(){this.visibilityState==="hidden"&&vs&&($i=!0)}function h2(e){e.addEventListener("keydown",s2,!0),e.addEventListener("mousedown",ua,!0),e.addEventListener("pointerdown",ua,!0),e.addEventListener("touchstart",ua,!0),e.addEventListener("visibilitychange",u2,!0)}function c2(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return $i||a2(t)}function m2(){vs=!0,window.clearTimeout(dh),dh=window.setTimeout(()=>{vs=!1},100)}function d2(){const e=y.useCallback(t=>{const n=Tm.findDOMNode(t);n!=null&&h2(n.ownerDocument)},[]);return{isFocusVisible:c2,onBlurVisible:m2,ref:e}}function f2(e,t,n){return(n-t)*e+t}function tl(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function nl(e){return e&&e.ownerDocument||document}function p2(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const g2=C.div`
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
`,Od=()=>P`
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
`,v2=C(Nt)`
  ${Od()}
`,y2=C(Nt)`
  ${Od()}

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
          ${kt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&To({mainColor:t.material,secondaryColor:t.borderLightest})}
`,hr=6,w2=C.span`
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

  ${({orientation:e})=>e==="vertical"?P`
          transform: translate(${hr+2}px, ${hr+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,A2=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:c=1,value:v,variant:x="default",...k},A)=>{const M=x==="flat"?y2:v2,d=u==="vertical",[m=o,f]=vn({defaultValue:e,onChange:i??a,value:v}),{isFocusVisible:w,onBlurVisible:b,ref:E}=d2(),[S,I]=y.useState(!1),F=y.useRef(),O=y.useRef(null),U=mh(E,F),D=mh(A,U),ne=An(L=>{w(L)&&I(!0)}),de=An(()=>{S!==!1&&(I(!1),b())}),ue=y.useRef(),we=y.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((L,B)=>({label:void 0,value:o+c*B})):Array.isArray(n)?n:[],[n,r,o,c]),ke=An(L=>{const B=(r-o)/10,Z=we.map(Ee=>Ee.value),z=Z.indexOf(m);let G=0;switch(L.key){case"Home":G=o;break;case"End":G=r;break;case"PageUp":c&&(G=m+B);break;case"PageDown":c&&(G=m-B);break;case"ArrowRight":case"ArrowUp":c?G=m+c:G=Z[z+1]||Z[Z.length-1];break;case"ArrowLeft":case"ArrowDown":c?G=m-c:G=Z[z-1]||Z[0];break;default:return}L.preventDefault(),c&&(G=sh(G,c,o)),G=jn(G,o,r),f(G),I(!0),i==null||i(G),a==null||a(G)}),$=y.useCallback(L=>{if(!F.current)return 0;const B=F.current.getBoundingClientRect();let Z;d?Z=(B.bottom-L.y)/B.height:Z=(L.x-B.left)/B.width;let z;if(z=f2(Z,o,r),c)z=sh(z,c,o);else{const G=we.map(N=>N.value),Ee=p2(G,z);z=G[Ee]}return z=jn(z,o,r),z},[we,r,o,c,d]),R=An(L=>{var B;const Z=tl(L,ue.current);if(!Z)return;const z=$(Z);(B=O.current)===null||B===void 0||B.focus(),f(z),I(!0),i==null||i(z)}),_=An(L=>{const B=tl(L,ue.current);if(!B)return;const Z=$(B);a==null||a(Z),ue.current=void 0;const z=nl(F.current);z.removeEventListener("mousemove",R),z.removeEventListener("mouseup",_),z.removeEventListener("touchmove",R),z.removeEventListener("touchend",_)}),J=An(L=>{var B;s==null||s(L),L.preventDefault(),(B=O.current)===null||B===void 0||B.focus(),I(!0);const Z=tl(L,ue.current);if(Z){const G=$(Z);f(G),i==null||i(G)}const z=nl(F.current);z.addEventListener("mousemove",R),z.addEventListener("mouseup",_)}),V=An(L=>{var B;L.preventDefault();const Z=L.changedTouches[0];Z!=null&&(ue.current=Z.identifier),(B=O.current)===null||B===void 0||B.focus(),I(!0);const z=tl(L,ue.current);if(z){const Ee=$(z);f(Ee),i==null||i(Ee)}const G=nl(F.current);G.addEventListener("touchmove",R),G.addEventListener("touchend",_)});return y.useEffect(()=>{const{current:L}=F;L==null||L.addEventListener("touchstart",V);const B=nl(L);return()=>{L==null||L.removeEventListener("touchstart",V),B.removeEventListener("mousemove",R),B.removeEventListener("mouseup",_),B.removeEventListener("touchmove",R),B.removeEventListener("touchend",_)}},[_,R,V]),p.createElement(g2,{$disabled:t,hasMarks:!!we.length,isFocused:S,onMouseDown:J,orientation:u,ref:D,size:gn(g),...k},p.createElement("input",{disabled:t,name:l,type:"hidden",value:m??0}),we&&we.map(L=>p.createElement(w2,{$disabled:t,"data-testid":"tick",key:L.value/(r-o)*100,orientation:u,style:{[d?"bottom":"left"]:`${(L.value-o)/(r-o)*100}%`}},L.label&&p.createElement(k2,{"aria-hidden":!0,"data-testid":"mark",orientation:u},L.label))),p.createElement(M,{orientation:u,variant:x}),p.createElement(x2,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":m,onBlur:de,onFocus:ne,onKeyDown:ke,orientation:u,ref:O,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(m-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:x}))});A2.displayName="Slider";const b2=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${E1};
  overflow-y: auto;
`,M2=y.forwardRef(function({children:t,...n},r){return p.createElement(b2,{ref:r,...n},t)});M2.displayName="TableBody";const E2=C.td`
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
  ${({$disabled:e})=>e&&wt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&wt()}
  }
`,N2=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Vn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return p.createElement(j2,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},p.createElement("div",null,n))});N2.displayName="TableHeadCell";const I2=C.tr`
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
`,R2=y.forwardRef(function({children:t,...n},r){return p.createElement(I2,{ref:r,...n},t)});R2.displayName="TableRow";const P2=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,T2=C(Nt)`
  &:before {
    box-shadow: none;
  }
`,_2=y.forwardRef(({children:e,...t},n)=>p.createElement(T2,null,p.createElement(P2,{ref:n,...t},e)));_2.displayName="Table";const O2=C.button`
  ${kt()}
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
`,D2=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>p.createElement(O2,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));D2.displayName="Tab";const L2=C.div`
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
`;function U2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const W2=y.forwardRef(({value:e,onChange:t=Vn,children:n,rows:r=1,...o},l)=>{const i=y.useMemo(()=>{var a;const s=(a=p.Children.map(n,c=>{if(!p.isValidElement(c))return null;const v={selected:c.props.value===e,onClick:t};return p.cloneElement(c,v)}))!==null&&a!==void 0?a:[],u=U2(s,r).map((c,v)=>({key:v,tabs:c})),g=u.findIndex(c=>c.tabs.some(v=>v.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return p.createElement(z2,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>p.createElement(F2,{key:a.key},a.tabs)))});W2.displayName="Tabs";const Q2=["blur","focus"],H2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function fh(e){return"nativeEvent"in e&&Q2.includes(e.type)}function ph(e){return"nativeEvent"in e&&H2.includes(e.type)}const V2={top:`top: -4px;
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
`,Y2=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:c,style:v,text:x,position:k="top",...A},M)=>{const[d,m]=y.useState(!1),[f,w]=y.useState(),[b,E]=y.useState(),S=!n,I=!r,F=$=>{window.clearTimeout(f),window.clearTimeout(b);const R=window.setTimeout(()=>{m(!0),c==null||c($)},o);w(R)},O=$=>{$.persist(),fh($)?s==null||s($):ph($)&&(u==null||u($)),F($)},U=$=>{window.clearTimeout(f),window.clearTimeout(b);const R=window.setTimeout(()=>{m(!1),a==null||a($)},l);E(R)},D=$=>{$.persist(),fh($)?i==null||i($):ph($)&&(g==null||g($)),U($)},ne=S?D:void 0,de=S?O:void 0,ue=I?O:void 0,we=I?D:void 0,ke=S?0:void 0;return p.createElement(K2,{"data-testid":"tooltip-wrapper",onBlur:ne,onFocus:de,onMouseEnter:ue,onMouseLeave:we,tabIndex:ke},p.createElement(G2,{className:e,"data-testid":"tooltip",position:k,ref:M,show:d,style:v,...A},x),t)});Y2.displayName="Tooltip";const ys=C($1)`
  white-space: nowrap;
`,Dd=P`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":P`
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
`,Z2=C.li`
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
`;function vh(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function yh(e){e.preventDefault()}function Ld({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,g=y.useCallback(c=>{var v,x;const k=!!(c.items&&c.items.length>0),A=n.includes(c.id),M=(v=t||c.disabled)!==null&&v!==void 0?v:!1,d=M?yh:b=>l(b,c),m=M?yh:b=>l(b,c),f=i===c.id,w=p.createElement(ex,{"aria-hidden":!0},c.icon);return p.createElement(Z2,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":A,"aria-selected":f,hasItems:k},k?p.createElement(X2,{open:A},p.createElement(q2,{onClick:d,$disabled:M},p.createElement(gh,{$disabled:M},w,p.createElement(ys,null,c.label))),A&&p.createElement(Ld,{className:e,disabled:M,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(x=c.items)!==null&&x!==void 0?x:[]})):p.createElement(gh,{as:"button",$disabled:M,onClick:m},w,p.createElement(ys,null,c.label)))},[e,t,n,u,o,l,i,a]);return p.createElement(J2,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function tx({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},g){const[c,v]=vn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[x,k]=vn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),A=y.useCallback((m,f)=>{if(i){const w=vh(c,f);i(m,w)}v(w=>vh(w,f))},[c,i,v]),M=y.useCallback((m,f)=>{k(f),l&&l(m,f)},[l,k]),d=y.useCallback((m,f)=>{m.preventDefault(),M(m,f.id),f.items&&f.items.length&&A(m,f.id)},[M,A]);return p.createElement(Ld,{className:e,disabled:r,expanded:c,level:0,innerRef:g,select:d,selected:x,style:s,tree:u})}const nx=y.forwardRef(tx);nx.displayName="TreeView";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Bd=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...u},g)=>y.createElement("svg",{ref:g,...rx,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${ox(e)}`,a].join(" "),...u},[...t.map(([c,v])=>y.createElement(c,v)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Bd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Bd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ji(){const[e,t]=y.useState(!1);return h.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(Ye,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),h.jsxs("div",{className:"hidden sm:flex",children:[h.jsx(Ye,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),h.jsx(Ye,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),h.jsx(Ye,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),h.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?h.jsx(ix,{size:18}):h.jsx(lx,{size:18})})]}),e&&h.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:h.jsxs("div",{className:"py-1",children:[h.jsx(Ye,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),h.jsx(Ye,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),h.jsx(Ye,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),h.jsx(Ye,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}const zd=""+new URL("oceanic-CaOGPC7J.png",import.meta.url).href,ax=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href,Fd=""+new URL("average_percent_difference-DDl9Xwvl.png",import.meta.url).href,$t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAMhC1l/wAAAExJREFUGNOVUEEOACAIQr+Wz9a31anGkkNxcsIAtazECxwAYsSMEfMmee8AkJW2CRYxZxx9u27RcVQEz02oopuQO6nOroqrA+3rjy9YWkYx2fiH84QAAAAASUVORK5CYII=",dn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQVDBAiWPtoMAAAADZJREFUGNNjZGBg+M9AAOzZu4eRiYFIwALTgUuBi7PLfwYGBgaiTRwKClmQfYYPMO7Zu4coEwGQFAtLFQC+JAAAAABJRU5ErkJggg==";var sx=["variant"];function ux(e,t){if(e==null)return{};var n=hx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}var cx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M7 2h9M6 3h1m9 0h1M5 4h1m11 0h1M4 5h1m13 0h1M3 6h1m15 0h11M3 7h1M3 8h1M3 9h1m-1 1h1m-3 1h2m-3 1h1m27 0h1M0 13h1m26 0h1M0 14h1m26 0h1M0 15h1m28 0h1M0 16h1m28 0h1M1 17h1m26 0h1M1 18h1m26 0h1M1 19h1m-1 1h1m0 1h1m26 0h1M2 22h1m26 0h1M2 23h1m-1 1h1m0 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"#fff",d:"M7 3h9M6 4h1M5 5h1M4 6h1M4 7h1m14 0h11M4 8h1M4 9h1m-1 1h1m-4 2h26"}),p.createElement("path",{stroke:"#ff0",d:"M7 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1m0 1h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h25m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M30 7h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1M4 28h27"}),p.createElement("path",{stroke:"olive",d:"M30 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M4 27h27"}))},mx=function(t){return p.createElement("svg",Xl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h12"}),p.createElement("path",{stroke:"#fff",d:"M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h10M1 8h1m0 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#ff0",d:"M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#000",d:"M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13"}))},dx={"32x32_4":cx,"16x16_4":mx},fx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ux(t,sx),l=dx[r];return p.createElement(l,o)},px=["variant"];function gx(e,t){if(e==null)return{};var n=vx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}var yx=function(t){return p.createElement("svg",xs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M30 0h1m-1 1h1m-1 1h1M1 3h28m1 0h1M1 4h1m5 0h1m20 0h1m1 0h1M1 5h7m20 0h1m1 0h1M1 6h1m5 0h1m20 0h3M1 7h7m20 0h1m1 0h2M1 8h1m5 0h1m20 0h1m1 0h1M1 9h7m5 0h2m3 0h1m9 0h1m1 0h1M1 10h1m5 0h1m5 0h2m3 0h1m9 0h1m1 0h1M1 11h7m20 0h1m1 0h1M1 12h1m5 0h1m2 0h5m1 0h1m3 0h5m3 0h1m1 0h2M1 13h7m2 0h1m3 0h1m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1M1 14h1m5 0h1m2 0h1m3 0h1m5 0h1m3 0h1m3 0h1m1 0h1M1 15h7m2 0h5m5 0h5m3 0h1m1 0h1M1 16h1m5 0h1m20 0h1m1 0h1M1 17h7m20 0h1m1 0h1M1 18h1m5 0h1m2 0h2m3 0h6m2 0h2m3 0h1m1 0h1M1 19h7m2 0h2m3 0h1m4 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 20h1m5 0h1m2 0h2m3 0h1m4 0h1m2 0h2m3 0h1m1 0h1M1 21h7m7 0h6m7 0h1m1 0h1M1 22h1m5 0h1m20 0h3M1 23h7m5 0h1m4 0h1m9 0h1m1 0h1M1 24h1m5 0h1m20 0h1m1 0h1M1 25h28m1 0h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"olive",d:"M2 4h5M2 6h5M2 8h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5"}),p.createElement("path",{stroke:"#0f0",d:"M8 4h20M8 5h1m3 0h7m2 0h7M8 6h1m3 0h4m1 0h2m2 0h7M8 7h1m3 0h4m1 0h2m2 0h2m1 0h4M8 8h15m1 0h4M8 9h5m2 0h3m1 0h9M8 10h5m2 0h3m1 0h9M8 11h20M8 12h2m5 0h1m1 0h3m5 0h3M8 13h2m5 0h1m1 0h3m5 0h3M8 14h2m5 0h5m5 0h3M8 15h2m5 0h5m5 0h3M8 16h20M8 17h20M8 18h2m2 0h3m6 0h2m2 0h3M8 19h2m2 0h3m6 0h2m2 0h1m1 0h1M8 20h2m2 0h3m6 0h2m2 0h3M8 21h7m6 0h7M8 22h20M8 23h5m1 0h4m1 0h9M8 24h20"}),p.createElement("path",{stroke:"red",d:"M9 5h3M9 6h3M9 7h3"}),p.createElement("path",{stroke:"gray",d:"M19 5h2m-5 1h1m2 0h2m-5 1h1m2 0h2m2 0h1m5 0h1m-7 1h1m5 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-19 1h3m7 0h3m5 0h1m-19 1h3m7 0h3m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h4m9 0h1m-14 1h4m9 0h1m-1 1h1"}))},xx={"32x32_4":yx},wx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=gx(t,px),l=xx[r];return p.createElement(l,o)},kx=["variant"];function Ax(e,t){if(e==null)return{};var n=bx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}var Mx=function(t){return p.createElement("svg",ws({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2"}),p.createElement("path",{stroke:"silver",d:"M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1"}),p.createElement("path",{stroke:"#fff",d:"M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1"}),p.createElement("path",{stroke:"#00f",d:"M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9"}),p.createElement("path",{stroke:"#000",d:"M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2"}))},Ex={"32x32_4":Mx},Ud=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Ax(t,kx),l=Ex[r];return p.createElement(l,o)},Sx=["variant"];function Cx(e,t){if(e==null)return{};var n=$x(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $x(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ql(){return ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ql.apply(this,arguments)}var jx=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M5 0h9M4 1h1m8 0h2M3 2h1m9 0h1m1 0h1m-3 1h1m1 0h1M2 4h1m9 0h1m2 0h1m-4 1h1m2 0h1M1 6h1m9 0h1m3 0h1m-5 1h1m3 0h1M0 8h1m9 0h1m4 0h1m-6 1h1m4 0h1M0 10h10m5 0h1M4 11h1m10 0h1M4 12h1m10 0h1M4 13h1m10 0h1M4 14h1m10 0h1M5 15h10"}),p.createElement("path",{stroke:"gray",d:"M5 1h1m2 0h1m2 0h1m2 13h1"}),p.createElement("path",{stroke:"teal",d:"M6 1h2m1 0h2m1 0h1M3 3h1m1 0h6m1 0h1M5 4h5M2 5h1m8 0h1M1 7h1m8 0h1M0 9h1m8 0h1"}),p.createElement("path",{stroke:"#0ff",d:"M4 2h9M4 3h1m6 0h1M3 4h2m5 0h2M3 5h8M2 6h9M2 7h8M1 8h9M1 9h8"}),p.createElement("path",{stroke:"silver",d:"M14 2h1m-1 1h1m-2 1h2m-2 1h2m-3 1h3m-3 1h3m-4 1h4m-4 1h2m1 0h1m-5 1h5M5 11h10M5 12h7m2 0h1M5 13h10M5 14h9"}),p.createElement("path",{stroke:"#fff",d:"M13 9h1m-2 3h2"}))},Nx=function(t){return p.createElement("svg",ql({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M9 1h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M8 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h3M7 3h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M7 4h1m18 0h1m2 0h1M6 5h1m19 0h1m2 0h1M6 6h1m18 0h1m3 0h1M5 7h1m4 0h10m5 0h1m3 0h1M5 8h1m18 0h1m4 0h1M4 9h1m4 0h10m5 0h1m4 0h1M4 10h1m18 0h1m5 0h1M3 11h1m19 0h1m5 0h1M3 12h1m18 0h1m6 0h1M2 13h1m19 0h1m6 0h1M2 14h1m18 0h1m7 0h1M1 15h1m19 0h1m7 0h1M1 16h1m18 0h1m8 0h1M0 17h1m19 0h1m8 0h1M0 18h1m18 0h1m9 0h1M0 19h1m18 0h1m9 0h1M1 20h18m10 0h1M8 21h1m20 0h1M8 22h1m20 0h1M8 23h1m20 0h1M8 24h1m20 0h1M8 25h1m20 0h1M8 26h1m20 0h1M8 27h1m20 0h1M9 28h1m19 0h1m-20 1h1m17 0h1m-18 1h17"}),p.createElement("path",{stroke:"#fff",d:"M9 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 9h1m-1 1h1m-2 2h2m-2 1h2m-3 2h3m-3 1h3m-4 2h4m-4 1h4m-5 2h5m-5 1h5m-7 2h7M9 27h17"}),p.createElement("path",{stroke:"#0ff",d:"M8 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M9 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M8 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m11 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m11 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m1 0h1m3 0h1m1 0h1m3 0h1m1 0h1M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M8 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2M7 7h1m1 0h1m11 0h1m1 0h1m2 0h2M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3M5 9h1m1 0h1m11 0h1m1 0h1m3 0h3M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M5 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m2 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h1M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h3m3 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h4m3 0h1m-1 1h1m-9 1h4m4 0h1M9 21h14m4 0h1m-1 1h1M9 23h13m5 0h1M9 24h13m5 0h1m-1 1h1M9 26h11m7 0h1m-2 1h2m-18 1h17"}),p.createElement("path",{stroke:"teal",d:"M26 3h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M1 19h18"}),p.createElement("path",{stroke:"gray",d:"M28 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h3m1 0h1m-1 1h1m-1 1h1m-6 1h4m1 0h1m-1 1h1m-1 1h1m-8 1h6m1 0h1m-1 1h1m-1 1h1m-9 1h7m1 0h1m-1 1h1m-1 1h1M9 22h18m1 0h1m-1 1h1m-1 1h1M9 25h18m1 0h1m-1 1h1m-1 1h1m-2 1h2m-18 1h17"}))},Ix={"16x16_4":jx,"32x32_4":Nx},Rx=function(t){var n=t.variant,r=n===void 0?"16x16_4":n,o=Cx(t,Sx),l=Ix[r];return p.createElement(l,o)},Px=["variant"];function Tx(e,t){if(e==null)return{};var n=_x(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _x(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}var Ox=function(t){return p.createElement("svg",ks({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M7 1h8M5 2h2m8 0h2M4 3h1m12 0h1M3 4h1m14 0h1m11 0h1M2 5h1m16 0h1m10 0h2M2 6h1m16 0h1m10 0h2M1 7h1m18 0h1m8 0h1m1 0h1M1 8h1m18 0h1m7 0h1m1 0h2M1 9h1m19 0h1m6 0h4M1 10h1m19 0h1m5 0h4M0 11h1m21 0h1m3 0h1m1 0h1M0 12h1m22 0h1m1 0h1m1 0h1M0 13h1m23 0h1m1 0h1M0 14h1m22 0h1m1 0h2M0 15h1m18 0h4m1 0h1m2 0h1M0 16h1m17 0h1m2 0h1m1 0h2m3 0h1M0 17h1m17 0h1m1 0h1m1 0h1m1 0h1m4 0h1M0 18h1m17 0h2m1 0h1m2 0h1m4 0h1M0 19h1m18 0h2m2 0h1m6 0h1M1 20h1m18 0h3m7 0h1M1 21h1m28 0h1M1 22h1m28 0h1M2 23h1m27 0h1M2 24h1m27 0h1M3 25h1m26 0h1M4 26h1m24 0h1M5 27h1m23 0h1M6 28h1m21 0h1M7 29h2m17 0h2M7 30h5m11 0h3M6 31h2m4 0h11"}),p.createElement("path",{stroke:"silver",d:"M7 2h1m6 0h1M8 3h1m1 0h1m1 0h1m1 0h2M5 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m7 0h1m1 0h1M5 6h1m1 0h1m9 0h1M2 7h1m1 0h1m1 0h1m9 0h1m1 0h1M3 8h1m1 0h1m1 0h1m9 0h1M4 9h1m1 0h1m1 0h1m9 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M2 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 13h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h2m3 0h1M2 15h1m7 0h1m1 0h1m1 0h1m1 0h2M3 16h1m5 0h1m1 0h1m1 0h1m1 0h1m10 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m8 0h3M3 18h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m9 0h1m1 0h1M2 19h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1M3 20h1m1 0h1m7 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M2 21h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m7 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 24h1m1 0h1m3 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 25h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 26h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M8 27h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M9 28h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m-16 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"#fff",d:"M8 2h6M5 3h3M4 4h1M3 5h1M3 6h1M3 7h1m26 0h1M2 8h1m26 0h1M2 9h1m-1 1h1m-2 1h1m25 0h1M1 12h1m24 0h1M1 13h1m23 0h1M1 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 5h1m0 1h1m0 1h1m0 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M9 3h1m1 0h1m1 0h1M6 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 5h1m1 0h1m7 0h1m1 0h1M4 6h1m1 0h1m1 0h1m7 0h1M5 7h1m1 0h1m9 0h1M4 8h1m1 0h1m1 0h1m9 0h1M3 9h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1M3 11h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m9 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1M2 16h1m7 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m9 0h1M3 19h1m1 0h1m7 0h1m1 0h1m1 0h1m7 0h1m1 0h1M2 20h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M3 21h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 22h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m7 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m5 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1M6 26h1m1 0h1m1 0h1m1 0h1m11 0h1m1 0h1M7 27h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1M8 28h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),p.createElement("path",{stroke:"olive",d:"M16 3h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m0 1h1m0 1h1m-5 1h3m-4 1h1m-2 1h1m9 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-11 1h1m10 0h1m-11 1h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h1m-2 1h2m-3 1h2M9 29h1m13 0h3m-14 1h11"}),p.createElement("path",{stroke:"#f0f",d:"M8 5h6M9 6h6M8 7h7m-5 1h6m-4 1h3"}),p.createElement("path",{stroke:"purple",d:"M15 6h1m-1 1h1M9 8h1m6 0h1m-7 1h2m3 0h2m-5 1h4"}),p.createElement("path",{stroke:"#0f0",d:"M5 11h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1"}),p.createElement("path",{stroke:"green",d:"M6 11h1m-2 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h2m-8 1h2m1 0h1m1 0h2m-6 1h5"}),p.createElement("path",{stroke:"#00f",d:"M24 14h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 5h3m-5 1h6m-7 1h8m-8 1h8m-7 1h5"}),p.createElement("path",{stroke:"gray",d:"M25 15h2m-2 1h1M7 28h1"}),p.createElement("path",{stroke:"red",d:"M8 18h3m-4 1h4m-5 1h5m-5 1h6m-5 1h6m-5 1h3"}),p.createElement("path",{stroke:"maroon",d:"M11 19h1m-1 1h1m0 1h1m-7 1h1m6 0h1m-7 1h1m3 0h2m-5 1h3"}),p.createElement("path",{stroke:"navy",d:"M21 24h1m0 1h1m-1 1h1m-9 1h1m5 0h2m-7 1h5"}))},Dx={"32x32_4":Ox},Lx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Tx(t,Px),l=Dx[r];return p.createElement(l,o)},Bx=["variant"];function zx(e,t){if(e==null)return{};var n=Fx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var Ux=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 9h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 10h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 11h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 12h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 13h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 14h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 15h1m4 0h1m4 0h1m4 0h1m1 0h1m2 0h1m4 0h1m3 0h1M1 16h1m2 0h1m1 0h1m4 0h1m4 0h2m1 0h1m1 0h1m4 0h1m3 0h1M1 17h1m4 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h1m3 0h1M1 18h1m2 0h1m1 0h1m4 0h1m3 0h2m3 0h2m4 0h1m3 0h1M1 19h1m4 0h1m3 0h3m1 0h1m1 0h1m3 0h2m4 0h1m1 0h1m1 0h1M1 20h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h1m4 0h1m4 0h2m2 0h1M1 21h1m4 0h1m2 0h1m1 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 22h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h2m2 0h2m3 0h1M1 23h1m4 0h1m1 0h1m2 0h1m4 0h1m4 0h2m1 0h1m1 0h1m3 0h1M1 24h1m2 0h1m1 0h1m1 0h1m2 0h1m4 0h1m4 0h1m1 0h1m2 0h1m3 0h1M1 25h1m4 0h2m3 0h1m4 0h1m4 0h1m4 0h1m3 0h1M1 26h1m2 0h1m1 0h23m1 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}))},Wx=function(t){return p.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M1 6h30M1 7h1m28 0h1M1 8h1m28 0h1M1 9h1m28 0h1M1 10h1m28 0h1M1 11h1m28 0h1M1 12h1m28 0h1M1 13h1m28 0h1M1 14h1m28 0h1M1 15h1m28 0h1M1 16h1m28 0h1M1 17h1m28 0h1M1 18h1m28 0h1M1 19h1m28 0h1M1 20h1m28 0h1M1 21h1m28 0h1M1 22h1m28 0h1M1 23h1m28 0h1M1 24h1m28 0h1M1 25h1m28 0h1M1 26h1m28 0h1M1 27h1m28 0h1M1 28h30"}),p.createElement("path",{stroke:"#fff",d:"M2 7h28M2 8h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 9h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 10h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 11h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 12h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 13h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 14h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h4m1 0h3M2 15h4m1 0h4m1 0h4m1 0h1m1 0h2m1 0h4m1 0h3M2 16h2m1 0h1m1 0h4m1 0h4m2 0h1m1 0h1m1 0h4m1 0h3M2 17h4m1 0h4m1 0h4m1 0h2m1 0h1m1 0h4m1 0h3M2 18h2m1 0h1m1 0h4m1 0h3m2 0h3m2 0h4m1 0h3M2 19h4m1 0h3m3 0h1m1 0h1m1 0h3m2 0h4m1 0h1m1 0h1M2 20h2m1 0h1m1 0h3m2 0h1m1 0h2m1 0h4m1 0h4m2 0h2M2 21h4m1 0h2m1 0h1m1 0h4m1 0h4m1 0h4m1 0h3M2 22h2m1 0h1m1 0h2m1 0h1m1 0h4m1 0h4m2 0h2m2 0h3M2 23h4m1 0h1m1 0h2m1 0h4m1 0h4m2 0h1m1 0h1m1 0h3M2 24h2m1 0h1m1 0h1m1 0h2m1 0h4m1 0h4m1 0h1m1 0h2m1 0h3M2 25h4m2 0h3m1 0h4m1 0h4m1 0h4m1 0h3M2 26h2m1 0h1m23 0h1M2 27h28"}),p.createElement("path",{stroke:"gray",d:"M31 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 29h30"}),p.createElement("path",{stroke:"#00f",d:"M4 8h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 9h1m4 0h1m4 0h1m4 0h1m4 0h1M4 10h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 11h1m4 0h1m4 0h1m4 0h1m4 0h1M4 12h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 13h1m4 0h1m4 0h1m4 0h1m4 0h1M4 14h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 15h1m4 0h1m4 0h1m4 0h1m4 0h1M4 16h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 17h1m4 0h1m9 0h1m4 0h1M4 18h1m1 0h1m9 0h1m4 0h1m4 0h1M6 19h1m4 0h1m4 0h1m4 0h1m4 0h1M4 20h1m1 0h1m4 0h1m4 0h1m9 0h1M6 21h1m4 0h1m4 0h1M4 22h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 23h1m4 0h1m4 0h1m4 0h1m4 0h1M4 24h1m1 0h1m4 0h1m4 0h1m4 0h1m4 0h1M6 25h1m4 0h1m4 0h1m4 0h1m4 0h1M4 26h1m2 0h22"}),p.createElement("path",{stroke:"#f0f",d:"M18 15h1m-2 1h1m1 0h1m-4 1h1m2 0h1m-9 1h1m3 0h1m4 0h1m-11 1h1m1 0h1m1 0h1m5 0h1m7 0h1m-19 1h1m2 0h1m7 0h1m5 0h1M9 21h1m11 0h1m4 0h1M9 22h1m12 0h1m2 0h1M8 23h1m13 0h1m1 0h1M8 24h1m14 0h1M7 25h1m-2 1h1"}))},Qx={"32x32_1":Ux,"32x32_4":Wx},Hx=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=zx(t,Bx),l=Qx[r];return p.createElement(l,o)},Vx=["variant"];function Gx(e,t){if(e==null)return{};var n=Kx(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var Yx=function(t){return p.createElement("svg",ti({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"gray",d:"M16 0h6m-9 1h3m-5 1h3m-4 1h1M9 4h1M8 5h1M8 6h1m19 0h1M7 7h1m19 0h1m1 0h1M7 8h1m18 0h1m1 0h1M6 9h1m10 0h4m4 0h1m1 0h1m1 0h1M6 10h1m9 0h1m4 0h1m2 0h1m1 0h1m1 0h1m1 0h1M6 11h1m8 0h1m6 0h2m1 0h1m1 0h1m1 0h1M6 12h1m8 0h1m6 0h1M6 13h2m1 0h1m1 0h1m1 0h1m1 0h1m6 0h1M6 14h1m1 0h1m1 0h1m1 0h1m1 0h2m6 0h1M6 15h2m1 0h1m1 0h1m1 0h1m2 0h1m4 0h1M6 16h1m1 0h1m1 0h1m1 0h1m4 0h4M3 17h5m1 0h1m1 0h1M2 18h1m4 0h2m1 0h1M1 19h1m6 0h2M0 20h1m7 0h1m-9 1h1m8 0h1M0 22h1m9 0h1m17 0h1M0 23h1m2 0h10m11 0h1m2 0h2M0 24h1m12 0h3m9 0h4M0 25h1m13 0h1m7 0h3m1 0h3M0 26h1m16 0h6m3 0h3M0 27h1m25 0h3M0 28h1m25 0h2M0 29h27"}),p.createElement("path",{stroke:"#ff0",d:"M16 1h3m-3 1h3m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m0 9h1m-2 1h2m-1 1h1m-2 1h2m-1 1h1m-2 1h3m-2 1h2m-3 1h3"}),p.createElement("path",{stroke:"silver",d:"M19 1h3m-3 1h6m-6 1h8m-8 1h8M9 5h2m8 0h7m1 0h1M10 6h2m7 0h6m1 0h1M11 7h2m6 0h5m1 0h1m2 0h1M8 8h2m2 0h2m5 0h4m1 0h1m2 0h1m1 0h1M7 9h5m1 0h2m6 0h1m1 0h1m2 0h1m1 0h1m1 0h1M7 10h6m1 0h2m9 0h1m1 0h1m1 0h1M7 11h7m10 0h1m1 0h1m1 0h1m1 0h1M7 12h8m8 0h8M8 13h1m1 0h1m1 0h1m1 0h1m8 0h8M7 14h1m1 0h1m1 0h1m1 0h1m9 0h8M8 15h1m1 0h1m1 0h1m2 0h1m6 0h9M7 16h1m1 0h1m1 0h1m2 0h1m1 0h1m5 0h9M8 17h1m1 0h1m2 0h1m1 0h4m1 0h1m2 0h7M3 18h4m2 0h1m2 0h1m1 0h4m3 0h1m2 0h6M2 19h6m3 0h1m1 0h6m2 0h1m3 0h4m-19 1h1m1 0h6m4 0h1m3 0h3M2 21h7m2 0h8m3 0h1m4 0h1M2 22h1m8 0h7m5 0h1M2 23h1m10 0h6m4 0h1M2 24h1m13 0h2M2 25h1m22 0h1M2 26h1m3 0h11m6 0h3M2 27h1m3 0h20M2 28h24"}),p.createElement("path",{stroke:"#000",d:"M22 1h3m0 1h2m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-15 1h4m10 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-16 1h1m4 0h1m9 0h1m-15 1h4m10 0h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h2m-3 1h1m1 0h1m-5 1h2m2 0h1M3 24h10m9 0h3m4 0h1m-15 1h7m7 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 30h26"}),p.createElement("path",{stroke:"#0ff",d:"M14 2h2m-3 1h3m-2 1h3m-3 1h3M9 6h1m5 0h2M8 7h3m4 0h2m-7 1h2m4 0h1m-5 1h1m0 1h1m0 1h1m6 5h1m-1 1h2m-1 1h2m-2 1h3m-2 1h3m-3 1h4m-3 1h3"}),p.createElement("path",{stroke:"#0f0",d:"M11 3h2m-3 1h4m-3 1h3m-2 1h3m-2 1h2m-1 1h2m-1 1h2m3 9h1m-1 1h1m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h1M3 26h3"}),p.createElement("path",{stroke:"#fff",d:"M27 4h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-3 1h2m-10 5h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1M1 20h7m1 0h1m1 0h1M1 21h1m8 0h1M1 22h1m1 0h7m-9 1h1m-1 1h1m-1 1h1m1 0h11M1 26h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"green",d:"M3 27h3"}))},Jx=function(t){return p.createElement("svg",ti({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"gray",d:"M9 1h3M7 2h2m3 0h2M6 3h1M5 4h1M5 5h1m3 0h1m1 0h1M5 6h1M5 7h1m3 0h1m1 0h1M1 8h5M0 9h1m5 0h1m-7 1h1m6 0h2m-9 1h1m12 0h1M0 12h1m12 0h1M0 13h14"}),p.createElement("path",{stroke:"#ff0",d:"M9 2h2M9 3h2M9 4h2m1 4h1m0 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 2h1m-1 1h3m-3 1h2m1 0h1M6 5h1m6 0h2M6 6h2m4 0h3M6 7h3m4 0h2M6 8h3m1 0h2M7 9h1m1 0h3M2 10h5m2 0h3m0 1h1M2 12h2m5 0h4"}),p.createElement("path",{stroke:"#0ff",d:"M7 3h2M8 4h1m3 3h1m0 1h2"}),p.createElement("path",{stroke:"#000",d:"M14 3h1m0 1h1m-6 1h1m4 0h1M9 6h1m1 0h1m3 0h1m-6 1h1m4 0h1m-1 1h1m-2 1h1m-3 1h3M4 11h8m2 0h1m-1 1h1m-1 1h1M1 14h13"}),p.createElement("path",{stroke:"#0f0",d:"M6 4h2M7 5h2M8 6h1m3 3h1M2 11h1"}),p.createElement("path",{stroke:"#fff",d:"M13 4h1m-2 1h1M9 8h1M1 9h5m2 0h1m-8 1h1m-1 1h1m-1 1h1m2 0h5"}),p.createElement("path",{stroke:"green",d:"M3 11h1"}))},Zx={"32x32_4":Yx,"16x16_4":Jx},Xx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Gx(t,Vx),l=Zx[r];return p.createElement(l,o)},qx=["variant"];function ew(e,t){if(e==null)return{};var n=tw(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var nw=function(t){return p.createElement("svg",ni({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),p.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),p.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),p.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),p.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),p.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),p.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),p.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),p.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},rw=function(t){return p.createElement("svg",ni({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),p.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),p.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),p.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),p.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),p.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),p.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),p.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),p.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},ow={"32x32_4":nw,"16x16_4":rw},lw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ew(t,qx),l=ow[r];return p.createElement(l,o)};function iw(){const[e,t]=y.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=l=>{t({...e,[l]:{...e[l],open:!e[l].open,minimized:!1}})},r=l=>{t({...e,[l]:{...e[l],minimized:!e[l].minimized}})},o=l=>{const i=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[l]:{...e[l],zIndex:i+1}})};return h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${ax})`},children:[h.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(Ud,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),h.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(fx,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),h.jsxs(Ye,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[h.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:h.jsx(lw,{variant:"32x32_4"})}),h.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&h.jsxs(zt,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[h.jsxs(et,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"Welcome to DanielleOS"}),h.jsx("div",{children:h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})})]}),h.jsx(qe,{children:h.jsxs("div",{className:"text-center p-6",children:[h.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),h.jsx("p",{className:"text-lg mb-3",children:"Aspiring Software Engineer"}),h.jsx("p",{className:"italic mb-8",children:"Full-Time Student, Nostalgia Fetishist, and Research Assistant"}),h.jsx(Ye,{to:"/blog",children:h.jsx(H,{children:"Read More"})})]})})]}),e.about.open&&!e.about.minimized&&h.jsxs(zt,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"About Me"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),h.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),h.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[h.jsx(H,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),h.jsx(H,{size:"sm",style:{fontSize:"12px"},children:"React"}),h.jsx(H,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),h.jsx(H,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),h.jsx(H,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(H,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&h.jsxs(zt,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[h.jsxs(et,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsx("span",{children:"My Projects"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Computational Model of Yapese Navigation"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:zd})})]}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold mb-1",children:"Architechural Optimizations for DP-SGD"}),h.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:h.jsx("img",{src:Fd})})]})]}),h.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),h.jsx("div",{className:"flex justify-end",children:h.jsx(Ye,{to:"/projects",children:h.jsx(H,{children:"View All Projects →"})})})]})]}),h.jsx(vd,{style:{position:"fixed",bottom:0,top:"auto"},children:h.jsxs(Zl,{style:{justifyContent:"space-between"},children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(H,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([l,{open:i}])=>i&&h.jsx(H,{active:!e[l].minimized,onClick:()=>{e[l].minimized?(r(l),o(l)):r(l)},style:{fontSize:"12px",marginRight:"4px"},children:l==="welcome"?"Welcome":l==="about"?"About Me":l==="projects"?"My Projects":"Connect With Me"},l))]}),h.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})]})}const aw=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,sw="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",uw=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,hw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,cw=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,mw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,dw=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,xh=C(zt)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,Ur=C.span`
  color: #4b00d9;
  font-weight: bold;
`,Pt=C.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,fw=()=>h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${aw})`},children:[h.jsx("div",{className:"absolute top-24 left-4",children:h.jsx("img",{src:sw,alt:"PMM"})}),h.jsx("div",{className:"absolute mid top-1/2 left-10",children:h.jsx("img",{src:uw,alt:"PMM"})}),h.jsxs("div",{className:"w-full max-w-4xl",children:[h.jsxs(xh,{className:"w-full mb-4",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#ABOUT ME"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[h.jsx("div",{className:"col-span-1",children:h.jsxs(Pt,{children:[h.jsx("img",{src:hw,alt:"Character avatar",className:"w-full"}),h.jsx("img",{src:cw,alt:"Character avatar",className:"w-full mt-2"}),h.jsx("img",{src:mw,alt:"Character avatar",className:"w-full mt-2"})]})}),h.jsxs("div",{className:"col-span-3 grid gap-4",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Pt,{children:[h.jsx(Ur,{children:"NAME:"})," Danielle"]}),h.jsxs(Pt,{children:[h.jsx(Ur,{children:"AGE:"})," 20"]}),h.jsxs(Pt,{children:[h.jsx(Ur,{children:"LOCATION:"})," USA"]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs(Pt,{children:[h.jsx(Ur,{children:"MBTI:"})," INFJ"]}),h.jsxs(Pt,{className:"col-span-2",children:[h.jsx(Ur,{children:"ASTRO:"})," ♋♏♏"]})]}),h.jsxs(Pt,{children:[h.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),h.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),h.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub Profile ",h.jsx("a",{href:"https://github.com/DanChigo",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),h.jsxs(xh,{className:"w-full",children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#INTERESTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-[#FFFAF0] p-4",children:h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs(Pt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),h.jsx("li",{children:"Everything Everywhere All at Once"}),h.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),h.jsxs(Pt,{children:[h.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),h.jsxs("ul",{className:"list-disc pl-5",children:[h.jsx("li",{children:"Coding"}),h.jsx("li",{children:"Writing"}),h.jsx("li",{children:"Reading"})]})]})]})})]})]}),h.jsx("div",{className:"absolute bottom-4 right-4",children:h.jsx("img",{src:dw,alt:"strawberry"})})]})]}),wh=C(zt)`
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
`,yw=()=>{var i;const[e,t]=y.useState(null),[n,r]=y.useState(!0),o=[{id:"Project oCEANIC",title:"Project oceanic: Computing Environmental Adaptation and Navigation ​in Island Communities",description:"A full-stack website that gives users access to a agent based model of Yapese Navigation.",image:zd,link:"https://project-oceanic.vercel.app/",technologies:["React","Node.js","Flask","Python","MERRA-2","ARCGIS"]},{id:"DP-SGD Optimization",title:"GPU Architectural Optimizations for Differentially Private Stochastic Gradient Descent ",description:"A machine learning project focused on balancing privacy with performance.",image:Fd,link:"https://purdue0-my.sharepoint.com/:p:/g/personal/dejiogu_purdue_edu/EWnCmbBHivtJs5_L3IGI9VQBsLatzMohEcjs23jJ7kvC_g?e=e5vzAJ",technologies:["PyTorch","Accel-Sim","C++"]},{id:"Stock Tracker",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","Firebase"]},{id:"MiniScala Compiler",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],l={"Project oCEANIC":h.jsx(Rx,{variant:"32x32_4"}),"DP-SGD Optimization":h.jsx(wx,{variant:"32x32_4"}),"Stock Tracker":h.jsx(Hx,{variant:"32x32_4"}),"MiniScala Compiler":h.jsx(Lx,{variant:"32x32_4"}),project5:h.jsx(Xx,{variant:"32x32_4"}),project6:h.jsx(Ud,{variant:"32x32_4"})};return h.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[h.jsx(ji,{})," ",h.jsxs(vw,{children:[h.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>h.jsxs(pw,{onClick:()=>t(a.id),children:[h.jsx("div",{children:l[a.id]}),h.jsx(gw,{children:a.id})]},a.id))]}),n&&h.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:h.jsxs(wh,{children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"#PROJECTS"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},onClick:()=>r(!1),children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsxs(qe,{className:"bg-white p-4",children:[h.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),h.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsxs(wh,{className:"w-4/5 max-w-4xl",children:[h.jsxs(et,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:a.title}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},onClick:()=>t(null),children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(qe,{className:"bg-white p-4",children:h.jsxs("div",{className:"flex flex-col",children:[h.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),h.jsx("p",{className:"mb-4",children:a.description}),h.jsxs("div",{className:"mb-4",children:[h.jsx("strong",{children:"Technologies:"}),h.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>h.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),h.jsxs("div",{className:"flex justify-end",children:[h.jsx(H,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),h.jsx(H,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),h.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[h.jsx(H,{className:"mr-3",children:h.jsxs("span",{className:"flex items-center text-sm",children:[h.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),h.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&h.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[h.jsx("img",{src:l[e],alt:"Running",className:"w-4 h-4 mr-1"}),(i=o.find(a=>a.id===e))==null?void 0:i.title]})]})]})},xw=""+new URL("lep-DPuAEVX5.png",import.meta.url).href,ha=C(zt)`
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
`,Aw=()=>{const[e,t]=y.useState(null),[n,r]=y.useState(!1),[o,l]=y.useState(!0),[i,a]=y.useState(!0),[s,u]=y.useState(!0),[g,c]=y.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0}),[v,x]=y.useState(!0),[k,A]=y.useState(null),[M,d]=y.useState([]),m="https://mysiteserver.onrender.com";y.useEffect(()=>{(async()=>{try{x(!0);const D=await fetch(`${m}/api/posts`);if(!D.ok)throw new Error("Failed to fetch posts");const ne=await D.json();d(ne.posts),x(!1)}catch(D){console.error("Error fetching posts:",D),A(D.message),x(!1)}})()},[]);const f=async U=>{try{const D=await fetch(`${m}/api/posts/${U}`);if(!D.ok)throw new Error("Failed to fetch post content");const ne=await D.json();t(ne)}catch(D){console.error("Error fetching post content:",D),A(D.message)}};y.useEffect(()=>{const U=()=>{const D=window.innerWidth,ne=window.innerHeight;c({width:D,height:ne}),r(D<768),D<768?(u(!1),e||(a(!0),l(!0))):(l(!0),a(!0),u(!0))};return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[e]);const w=["File","Edit","View","Help"],b=()=>l(!o),E=()=>a(!i),S=()=>u(!s),I=()=>n?{top:"80px",left:"10px",width:g.width>350?"250px":"calc(100% - 20px)",zIndex:i?1:2}:{top:"150px",left:"50px",width:"250px",zIndex:1},F=()=>n?{top:o?"350px":"80px",left:"10px",width:"calc(100% - 20px)",height:"auto",zIndex:o?1:2}:{top:"100px",left:"400px",width:"600px",zIndex:1},O=()=>n?{bottom:"10px",right:"10px",width:"calc(100% - 20px)",zIndex:1}:{top:"150px",right:"50px",width:"200px",zIndex:1};return h.jsxs(h.Fragment,{children:[h.jsx(ji,{}),h.jsxs("div",{className:"min-h-screen w-full overflow-hidden bg-cover bg-center h-screen relative",style:{backgroundImage:`url(${xw})`},children:[h.jsx("div",{className:"absolute inset-0 bg-black opacity-20 z-0"}),n&&h.jsxs("div",{className:"fixed top-16 left-0 right-0 z-10 flex justify-around bg-gray-800 bg-opacity-70 p-2",children:[h.jsx(H,{onClick:b,className:"flex-1 mx-1",children:o?"Hide Entries":"Show Entries"}),h.jsx(H,{onClick:E,className:"flex-1 mx-1",children:i?"Hide Blog":"Show Blog"}),h.jsx(H,{onClick:S,className:"flex-1 mx-1",children:s?"Hide Info":"Show Info"})]}),o&&h.jsxs(ha,{className:"absolute",style:I(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Entries"}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]}),h.jsx(qe,{children:h.jsx(Co,{className:"w-full h-[260px] bg-gray-300 p-2",children:h.jsx(xd,{style:{width:"100%"},children:M.map((U,D)=>h.jsxs("div",{className:"mb-0",children:[h.jsx(yd,{className:"break-words",onClick:()=>{f(U.slug),n&&(l(!1),a(!0))},style:{width:"100%",padding:"8px 2px",backgroundColor:(e==null?void 0:e.slug)===U.slug?"#c3c7cb":"#d3d3d3",borderRadius:0,boxShadow:"none"},children:U.title}),D<M.length-1&&h.jsx(j1,{style:{margin:"2px 0"}})]},D))})})})]}),i&&h.jsxs(ha,{className:"absolute",style:F(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Blog"}),h.jsxs("div",{className:"flex space-x-1",children:[h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:dn,alt:"Maximize",className:"w-4 h-4"})}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]})]}),h.jsx(ww,{children:h.jsx("div",{className:"flex overflow-x-auto",children:w.map((U,D)=>h.jsx(H,{variant:"menu",className:"flex-shrink-0 hover:bg-blue-200 transition-colors",style:{fontSize:n?"12px":"15px",minWidth:n?"40px":"50px",height:"25px",textAlign:"left"},children:h.jsxs("span",{children:[h.jsx("span",{style:{textDecoration:"underline"},children:U[0]}),U.slice(1)]})},D))})}),h.jsx(qe,{className:"flex justify-center items-center",children:h.jsx(kw,{children:h.jsx("div",{className:"h-[300px] md:h-[500px] overflow-auto w-full p-0 relative z-10",children:e?h.jsxs("div",{className:"bg-blue-100 p-4 rounded w-[70%] mx-auto mt-8 border border-gray-400 shadow-md",children:[h.jsx("h2",{className:"text-xl font-bold mb-2",children:e.title}),h.jsx("p",{className:"text-sm mb-4",children:e.date}),h.jsx("div",{dangerouslySetInnerHTML:{__html:e.content},className:"prose prose-sm"})]}):h.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[h.jsx("div",{className:"w-16 h-16 mb-4 bg-gray-300 border border-gray-400 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-gray-600 text-2xl",children:"?"})}),n&&!o?h.jsx(H,{onClick:b,className:"mb-4",children:"Show Entries"}):h.jsx("p",{className:"text-gray-700",children:"Select a post from the entries list"})]})})})})]}),s&&h.jsxs(ha,{className:"absolute",style:O(),children:[h.jsxs(et,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[h.jsx("span",{children:"Blog"}),h.jsx(H,{style:{width:"25px",height:"25px"},children:h.jsx("img",{src:$t,alt:"Close",className:"w-4 h-4"})})]}),h.jsx(qe,{className:"p-2",children:h.jsx(Co,{className:"h-[400px] bg-gray-300",children:h.jsxs("div",{className:"p-3",children:[h.jsx("h3",{className:"font-bold mb-2 text-sm",children:"Blog Status"}),h.jsxs("div",{className:"mb-4",children:[h.jsx("p",{className:"text-xs mb-1",children:"Posts: 8/20"}),h.jsx("div",{className:"w-full bg-gray-200 rounded h-4 border border-gray-400",children:h.jsx("div",{className:"bg-blue-500 h-full rounded",style:{width:"40%"}})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("p",{className:"text-xs mb-1",children:"Views: 1,234"}),h.jsx("div",{className:"w-full bg-gray-200 rounded h-4 border border-gray-400",children:h.jsx("div",{className:"bg-green-500 h-full rounded",style:{width:"60%"}})})]}),h.jsx("h3",{className:"font-bold mb-2 text-sm",children:"Recent Activity"}),h.jsxs("div",{className:"border border-gray-400 bg-white p-2 text-xs",children:[h.jsx("p",{className:"mb-1",children:"• New post added (2 days ago)"}),h.jsx("p",{className:"mb-1",children:"• Comment received (5 days ago)"}),h.jsx("p",{children:"• Blog redesigned (1 week ago)"})]})]})})})]})]})]})};var bw={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Mw=bw;const Ew=kh(Mw),Sw=()=>h.jsx("div",{style:{padding:"50px"},children:h.jsxs(zt,{style:{width:"350px"},children:[h.jsx(et,{children:"ScrollView Test"}),h.jsx(qe,{children:h.jsx(Co,{style:{width:"300px",height:"200px"},children:h.jsxs("div",{children:[h.jsx("p",{style:{width:400},children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"}),h.jsx("p",{children:"React95 is the best UI library ever created"})]})})})]})}),Cw=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,$w=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,jw=xv`
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
`;function Nw(){return h.jsx("div",{children:h.jsxs(gv,{theme:Ew,children:[h.jsx(jw,{}),h.jsx(dg,{children:h.jsx("div",{className:"min-h-screen",children:h.jsx("main",{children:h.jsxs(ig,{children:[h.jsx(Jn,{path:"/",element:h.jsx(iw,{})}),h.jsx(Jn,{path:"/about",element:h.jsx(fw,{})}),h.jsx(Jn,{path:"/projects",element:h.jsx(yw,{})}),h.jsx(Jn,{path:"/blog",element:h.jsx(Aw,{})}),h.jsx(Jn,{path:"/test",element:h.jsx(Sw,{})})]})})})})]})})}_m(document.getElementById("root")).render(h.jsx(y.StrictMode,{children:h.jsx(Nw,{})}));
