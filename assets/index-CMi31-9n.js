function Nh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ud(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cd={exports:{}},Yl={},dd={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),jh=Symbol.for("react.portal"),Ih=Symbol.for("react.fragment"),Th=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),zh=Symbol.for("react.suspense"),Bh=Symbol.for("react.memo"),Oh=Symbol.for("react.lazy"),wu=Symbol.iterator;function _h(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var fd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pd=Object.assign,hd={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=hd,this.updater=n||fd}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function md(){}md.prototype=Cr.prototype;function ds(e,t,n){this.props=e,this.context=t,this.refs=hd,this.updater=n||fd}var fs=ds.prototype=new md;fs.constructor=ds;pd(fs,Cr.prototype);fs.isPureReactComponent=!0;var ku=Array.isArray,gd=Object.prototype.hasOwnProperty,ps={current:null},vd={key:!0,ref:!0,__self:!0,__source:!0};function yd(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)gd.call(t,r)&&!vd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Eo,type:e,key:l,ref:i,props:o,_owner:ps.current}}function Mh(e,t){return{$$typeof:Eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eo}function Fh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fh(""+e.key):t.toString(36)}function el(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Eo:case jh:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+bi(i,0):r,ku(o)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),el(o,t,n,"",function(u){return u})):o!=null&&(hs(o)&&(o=Mh(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Au,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ku(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+bi(l,a);i+=el(l,t,n,s,o)}else if(s=_h(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+bi(l,a++),i+=el(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ro(e,t,n){if(e==null)return e;var r=[],o=0;return el(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Uh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},tl={transition:null},Qh={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:tl,ReactCurrentOwner:ps};function xd(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Ro,forEach:function(e,t,n){Ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ro(e,function(){t++}),t},toArray:function(e){return Ro(e,function(t){return t})||[]},only:function(e){if(!hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Cr;V.Fragment=Ih;V.Profiler=Rh;V.PureComponent=ds;V.StrictMode=Th;V.Suspense=zh;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;V.act=xd;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pd({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ps.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)gd.call(t,s)&&!vd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Eo,type:e.type,key:o,ref:l,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ph,_context:e},e.Consumer=e};V.createElement=yd;V.createFactory=function(e){var t=yd.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Lh,render:e}};V.isValidElement=hs;V.lazy=function(e){return{$$typeof:Oh,_payload:{_status:-1,_result:e},_init:Uh}};V.memo=function(e,t){return{$$typeof:Bh,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=tl.transition;tl.transition={};try{e()}finally{tl.transition=t}};V.unstable_act=xd;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";dd.exports=V;var v=dd.exports;const A=ud(v),Hh=Nh({__proto__:null,default:A},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=v,Vh=Symbol.for("react.element"),Gh=Symbol.for("react.fragment"),Kh=Object.prototype.hasOwnProperty,Yh=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jh={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Kh.call(t,r)&&!Jh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Vh,type:e,key:l,ref:i,props:o,_owner:Yh.current}}Yl.Fragment=Gh;Yl.jsx=wd;Yl.jsxs=wd;cd.exports=Yl;var m=cd.exports,kd={exports:{}},et={},Ad={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var L=N.length;N.push(R);e:for(;0<L;){var G=L-1>>>1,Q=N[G];if(0<o(Q,R))N[G]=R,N[L]=Q,L=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],L=N.pop();if(L!==R){N[0]=L;e:for(var G=0,Q=N.length,B=Q>>>1;G<B;){var O=2*(G+1)-1,K=N[O],_=O+1,H=N[_];if(0>o(K,L))_<Q&&0>o(H,K)?(N[G]=H,N[_]=L,G=_):(N[G]=K,N[O]=L,G=O);else if(_<Q&&0>o(H,L))N[G]=H,N[_]=L,G=_;else break e}}return R}function o(N,R){var L=N.sortIndex-R.sortIndex;return L!==0?L:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],g=1,c=null,h=3,y=!1,x=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function w(N){if(k=!1,p(N),!x)if(n(s)!==null)x=!0,we(S);else{var R=n(u);R!==null&&ke(w,R.startTime-N)}}function S(N,R){x=!1,k&&(k=!1,f(T),T=-1),y=!0;var L=h;try{for(p(R),c=n(s);c!==null&&(!(c.expirationTime>R)||N&&!X());){var G=c.callback;if(typeof G=="function"){c.callback=null,h=c.priorityLevel;var Q=G(c.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(s)&&r(s),p(R)}else r(s);c=n(s)}if(c!==null)var B=!0;else{var O=n(u);O!==null&&ke(w,O.startTime-R),B=!1}return B}finally{c=null,h=L,y=!1}}var E=!1,C=null,T=-1,M=5,z=-1;function X(){return!(e.unstable_now()-z<M)}function q(){if(C!==null){var N=e.unstable_now();z=N;var R=!0;try{R=C(!0,N)}finally{R?fe():(E=!1,C=null)}}else E=!1}var fe;if(typeof d=="function")fe=function(){d(q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,se=pe.port2;pe.port1.onmessage=q,fe=function(){se.postMessage(null)}}else fe=function(){b(q,0)};function we(N){C=N,E||(E=!0,fe())}function ke(N,R){T=b(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,we(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return R()}finally{h=L}},e.unstable_scheduleCallback=function(N,R,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=L+Q,N={id:g++,callback:R,priorityLevel:N,startTime:L,expirationTime:Q,sortIndex:-1},L>G?(N.sortIndex=L,t(u,N),n(s)===null&&N===n(u)&&(k?(f(T),T=-1):k=!0,ke(w,L-G))):(N.sortIndex=Q,t(s,N),x||y||(x=!0,we(S))),N},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(N){var R=h;return function(){var L=h;h=R;try{return N.apply(this,arguments)}finally{h=L}}}})(Sd);Ad.exports=Sd;var Zh=Ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=v,qe=Zh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bd=new Set,no={};function _n(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(no[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,qh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},bu={};function em(e){return ra.call(bu,e)?!0:ra.call(Su,e)?!1:qh.test(e)?bu[e]=!0:(Su[e]=!0,!1)}function tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nm(e,t,n,r){if(t===null||typeof t>"u"||tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ms=/[\-:]([a-z])/g;function gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ms,gs);De[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ms,gs);De[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ms,gs);De[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=De.hasOwnProperty(t)?De[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nm(t,n,o,r)&&(n=null),r||o===null?em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),ys=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),la=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),ws=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),$d=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Ei;function Mr(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Ci=!1;function $i(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function rm(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=$i(e.type,!1),e;case 11:return e=$i(e.type.render,!1),e;case 1:return e=$i(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case oa:return"Profiler";case ys:return"StrictMode";case la:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cd:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ws:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function om(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lm(e){var t=Nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=lm(e))}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Id(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function ua(e,t){Id(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||vl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Fr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Td(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},im=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Dd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function Ld(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Dd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var am=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,ur=null,cr=null;function Iu(e){if(e=No(e)){if(typeof ga!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ei(t),ga(e.stateNode,e.type,t))}}function zd(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Bd(){if(ur){var e=ur,t=cr;if(cr=ur=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Od(e,t){return e(t)}function _d(){}var Ni=!1;function Md(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return Od(e,t,n)}finally{Ni=!1,(ur!==null||cr!==null)&&(_d(),Bd())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var va=!1;if(_t)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){va=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{va=!1}function sm(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Gr=!1,yl=null,xl=!1,ya=null,um={onError:function(e){Gr=!0,yl=e}};function cm(e,t,n,r,o,l,i,a,s){Gr=!1,yl=null,sm.apply(um,arguments)}function dm(e,t,n,r,o,l,i,a,s){if(cm.apply(this,arguments),Gr){if(Gr){var u=yl;Gr=!1,yl=null}else throw Error(j(198));xl||(xl=!0,ya=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(Mn(e)!==e)throw Error(j(188))}function fm(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Tu(o),e;if(l===r)return Tu(o),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ud(e){return e=fm(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Hd=qe.unstable_scheduleCallback,Ru=qe.unstable_cancelCallback,pm=qe.unstable_shouldYield,hm=qe.unstable_requestPaint,ge=qe.unstable_now,mm=qe.unstable_getCurrentPriorityLevel,As=qe.unstable_ImmediatePriority,Wd=qe.unstable_UserBlockingPriority,wl=qe.unstable_NormalPriority,gm=qe.unstable_LowPriority,Vd=qe.unstable_IdlePriority,Jl=null,bt=null;function vm(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Jl,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:wm,ym=Math.log,xm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(ym(e)/xm|0)|0}var zo=64,Bo=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Ur(a):(l&=i,l!==0&&(r=Ur(l)))}else i=n&~o,i!==0?r=Ur(i):l!==0&&(r=Ur(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ht(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=km(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gd(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Sm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function Kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yd,bs,Jd,Zd,Xd,wa=!1,Oo=[],en=null,tn=null,nn=null,lo=new Map,io=new Map,Yt=[],bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Pr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=No(t),t!==null&&bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Em(e,t,n,r,o){switch(t){case"focusin":return en=Pr(en,e,t,n,r,o),!0;case"dragenter":return tn=Pr(tn,e,t,n,r,o),!0;case"mouseover":return nn=Pr(nn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return lo.set(l,Pr(lo.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,io.set(l,Pr(io.get(l)||null,e,t,n,r,o)),!0}return!1}function qd(e){var t=An(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fd(n),t!==null){e.blockedOn=t,Xd(e.priority,function(){Jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=No(n),t!==null&&bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){nl(e)&&n.delete(t)}function Cm(){wa=!1,en!==null&&nl(en)&&(en=null),tn!==null&&nl(tn)&&(tn=null),nn!==null&&nl(nn)&&(nn=null),lo.forEach(Du),io.forEach(Du)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Cm)))}function ao(e){function t(o){return Dr(o,e)}if(0<Oo.length){Dr(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Dr(en,e),tn!==null&&Dr(tn,e),nn!==null&&Dr(nn,e),lo.forEach(t),io.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Yt.shift()}var dr=Qt.ReactCurrentBatchConfig,Al=!0;function $m(e,t,n,r){var o=ee,l=dr.transition;dr.transition=null;try{ee=1,Es(e,t,n,r)}finally{ee=o,dr.transition=l}}function Nm(e,t,n,r){var o=ee,l=dr.transition;dr.transition=null;try{ee=4,Es(e,t,n,r)}finally{ee=o,dr.transition=l}}function Es(e,t,n,r){if(Al){var o=ka(e,t,n,r);if(o===null)_i(e,t,r,Sl,n),Pu(e,r);else if(Em(o,e,t,n,r))r.stopPropagation();else if(Pu(e,r),t&4&&-1<bm.indexOf(e)){for(;o!==null;){var l=No(o);if(l!==null&&Yd(l),l=ka(e,t,n,r),l===null&&_i(e,t,r,Sl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Sl=null;function ka(e,t,n,r){if(Sl=null,e=ks(r),e=An(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sl=e,null}function ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mm()){case As:return 1;case Wd:return 4;case wl:case gm:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var Zt=null,Cs=null,rl=null;function tf(){if(rl)return rl;var e,t=Cs,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return rl=o.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Lu(){return!1}function tt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_o:Lu,this.isPropagationStopped=Lu,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=tt($r),$o=de({},$r,{view:0,detail:0}),jm=tt($o),Ii,Ti,Lr,Zl=de({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ii=e.screenX-Lr.screenX,Ti=e.screenY-Lr.screenY):Ti=Ii=0,Lr=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),zu=tt(Zl),Im=de({},Zl,{dataTransfer:0}),Tm=tt(Im),Rm=de({},$o,{relatedTarget:0}),Ri=tt(Rm),Pm=de({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Dm=tt(Pm),Lm=de({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zm=tt(Lm),Bm=de({},$r,{data:0}),Bu=tt(Bm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mm[e])?!!t[e]:!1}function Ns(){return Fm}var Um=de({},$o,{key:function(e){if(e.key){var t=Om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=tt(Um),Hm=de({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=tt(Hm),Wm=de({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Vm=tt(Wm),Gm=de({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=tt(Gm),Ym=de({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=tt(Ym),Zm=[9,13,27,32],js=_t&&"CompositionEvent"in window,Kr=null;_t&&"documentMode"in document&&(Kr=document.documentMode);var Xm=_t&&"TextEvent"in window&&!Kr,nf=_t&&(!js||Kr&&8<Kr&&11>=Kr),_u=" ",Mu=!1;function rf(e,t){switch(e){case"keyup":return Zm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function qm(e,t){switch(e){case"compositionend":return of(t);case"keypress":return t.which!==32?null:(Mu=!0,_u);case"textInput":return e=t.data,e===_u&&Mu?null:e;default:return null}}function e0(e,t){if(Jn)return e==="compositionend"||!js&&rf(e,t)?(e=tf(),rl=Cs=Zt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nf&&t.locale!=="ko"?null:t.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t0[e.type]:t==="textarea"}function lf(e,t,n,r){zd(r),t=bl(t,"onChange"),0<t.length&&(n=new $s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,so=null;function n0(e){vf(e,0)}function Xl(e){var t=qn(e);if(jd(t))return e}function r0(e,t){if(e==="change")return t}var af=!1;if(_t){var Pi;if(_t){var Di="oninput"in document;if(!Di){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Di=typeof Uu.oninput=="function"}Pi=Di}else Pi=!1;af=Pi&&(!document.documentMode||9<document.documentMode)}function Qu(){Yr&&(Yr.detachEvent("onpropertychange",sf),so=Yr=null)}function sf(e){if(e.propertyName==="value"&&Xl(so)){var t=[];lf(t,so,e,ks(e)),Md(n0,t)}}function o0(e,t,n){e==="focusin"?(Qu(),Yr=t,so=n,Yr.attachEvent("onpropertychange",sf)):e==="focusout"&&Qu()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(so)}function i0(e,t){if(e==="click")return Xl(t)}function a0(e,t){if(e==="input"||e==="change")return Xl(t)}function s0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:s0;function uo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ra.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(){for(var e=window,t=vl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vl(e.document)}return t}function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u0(e){var t=cf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uf(n.ownerDocument.documentElement,n)){if(r!==null&&Is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Wu(n,l);var i=Wu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c0=_t&&"documentMode"in document&&11>=document.documentMode,Zn=null,Aa=null,Jr=null,Sa=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||Zn==null||Zn!==vl(r)||(r=Zn,"selectionStart"in r&&Is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&uo(Jr,r)||(Jr=r,r=bl(Aa,"onSelect"),0<r.length&&(t=new $s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Li={},df={};_t&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ql(e){if(Li[e])return Li[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in df)return Li[e]=t[n];return e}var ff=ql("animationend"),pf=ql("animationiteration"),hf=ql("animationstart"),mf=ql("transitionend"),gf=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){gf.set(e,t),_n(t,[e])}for(var zi=0;zi<Gu.length;zi++){var Bi=Gu[zi],d0=Bi.toLowerCase(),f0=Bi[0].toUpperCase()+Bi.slice(1);mn(d0,"on"+f0)}mn(ff,"onAnimationEnd");mn(pf,"onAnimationIteration");mn(hf,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(mf,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dm(r,t,void 0,e),e.currentTarget=null}function vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Ku(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Ku(o,a,u),l=s}}}if(xl)throw e=ya,xl=!1,ya=null,e}function ne(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(yf(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),yf(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Fo]){e[Fo]=!0,bd.forEach(function(n){n!=="selectionchange"&&(p0.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,Oi("selectionchange",!1,t))}}function yf(e,t,n,r){switch(ef(t)){case 1:var o=$m;break;case 4:o=Nm;break;default:o=Es}n=o.bind(null,t,n,e),o=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function _i(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=An(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Md(function(){var u=l,g=ks(n),c=[];e:{var h=gf.get(e);if(h!==void 0){var y=$s,x=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":y=Qm;break;case"focusin":x="focus",y=Ri;break;case"focusout":x="blur",y=Ri;break;case"beforeblur":case"afterblur":y=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vm;break;case ff:case pf:case hf:y=Dm;break;case mf:y=Km;break;case"scroll":y=jm;break;case"wheel":y=Jm;break;case"copy":case"cut":case"paste":y=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ou}var k=(t&4)!==0,b=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var d=u,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=oo(d,f),w!=null&&k.push(fo(d,w,p)))),b)break;d=d.return}0<k.length&&(h=new y(h,x,null,n,g),c.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ma&&(x=n.relatedTarget||n.fromElement)&&(An(x)||x[Mt]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?An(x):null,x!==null&&(b=Mn(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(k=zu,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ou,w="onPointerLeave",f="onPointerEnter",d="pointer"),b=y==null?h:qn(y),p=x==null?h:qn(x),h=new k(w,d+"leave",y,n,g),h.target=b,h.relatedTarget=p,w=null,An(g)===u&&(k=new k(f,d+"enter",x,n,g),k.target=p,k.relatedTarget=b,w=k),b=w,y&&x)t:{for(k=y,f=x,d=0,p=k;p;p=Wn(p))d++;for(p=0,w=f;w;w=Wn(w))p++;for(;0<d-p;)k=Wn(k),d--;for(;0<p-d;)f=Wn(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=Wn(k),f=Wn(f)}k=null}else k=null;y!==null&&Yu(c,h,y,k,!1),x!==null&&b!==null&&Yu(c,b,x,k,!0)}}e:{if(h=u?qn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=r0;else if(Fu(h))if(af)S=a0;else{S=l0;var E=o0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=i0);if(S&&(S=S(e,u))){lf(c,S,n,g);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&ca(h,"number",h.value)}switch(E=u?qn(u):window,e){case"focusin":(Fu(E)||E.contentEditable==="true")&&(Zn=E,Aa=u,Jr=null);break;case"focusout":Jr=Aa=Zn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Vu(c,n,g);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":Vu(c,n,g)}var C;if(js)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jn?rf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(nf&&n.locale!=="ko"&&(Jn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jn&&(C=tf()):(Zt=g,Cs="value"in Zt?Zt.value:Zt.textContent,Jn=!0)),E=bl(u,T),0<E.length&&(T=new Bu(T,e,null,n,g),c.push({event:T,listeners:E}),C?T.data=C:(C=of(n),C!==null&&(T.data=C)))),(C=Xm?qm(e,n):e0(e,n))&&(u=bl(u,"onBeforeInput"),0<u.length&&(g=new Bu("onBeforeInput","beforeinput",null,n,g),c.push({event:g,listeners:u}),g.data=C))}vf(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=oo(e,n),l!=null&&r.unshift(fo(e,l,o)),l=oo(e,t),l!=null&&r.push(fo(e,l,o))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=oo(n,l),s!=null&&i.unshift(fo(n,s,a))):o||(s=oo(n,l),s!=null&&i.push(fo(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function Uo(e,t,n){if(t=Ju(t),Ju(e)!==t&&n)throw Error(j(425))}function El(){}var ba=null,Ea=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(y0)}:$a;function y0(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),St="__reactFiber$"+Nr,po="__reactProps$"+Nr,Mt="__reactContainer$"+Nr,Na="__reactEvents$"+Nr,x0="__reactListeners$"+Nr,w0="__reactHandles$"+Nr;function An(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xu(e);e!==null;){if(n=e[St])return n;e=Xu(e)}return t}e=n,n=e.parentNode}return null}function No(e){return e=e[St]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ei(e){return e[po]||null}var ja=[],er=-1;function gn(e){return{current:e}}function oe(e){0>er||(e.current=ja[er],ja[er]=null,er--)}function te(e,t){er++,ja[er]=e.current,e.current=t}var fn={},Oe=gn(fn),We=gn(!1),Tn=fn;function mr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Cl(){oe(We),oe(Oe)}function qu(e,t,n){if(Oe.current!==fn)throw Error(j(168));te(Oe,t),te(We,n)}function xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,om(e)||"Unknown",o));return de({},n,r)}function $l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Tn=Oe.current,te(Oe,e),te(We,We.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=xf(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,oe(We),oe(Oe),te(Oe,e)):oe(We),te(We,n)}var Pt=null,ti=!1,Fi=!1;function wf(e){Pt===null?Pt=[e]:Pt.push(e)}function k0(e){ti=!0,wf(e)}function vn(){if(!Fi&&Pt!==null){Fi=!0;var e=0,t=ee;try{var n=Pt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ti=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),Hd(As,vn),o}finally{ee=t,Fi=!1}}return null}var tr=[],nr=0,Nl=null,jl=0,rt=[],ot=0,Rn=null,Dt=1,Lt="";function wn(e,t){tr[nr++]=jl,tr[nr++]=Nl,Nl=e,jl=t}function kf(e,t,n){rt[ot++]=Dt,rt[ot++]=Lt,rt[ot++]=Rn,Rn=e;var r=Dt;e=Lt;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var l=32-ht(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-ht(t)+o|n<<o|r,Lt=l+e}else Dt=1<<l|n<<o|r,Lt=e}function Ts(e){e.return!==null&&(wn(e,1),kf(e,1,0))}function Rs(e){for(;e===Nl;)Nl=tr[--nr],tr[nr]=null,jl=tr[--nr],tr[nr]=null;for(;e===Rn;)Rn=rt[--ot],rt[ot]=null,Lt=rt[--ot],rt[ot]=null,Dt=rt[--ot],rt[ot]=null}var Xe=null,Ze=null,ae=!1,pt=null;function Af(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function Ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(ae){var t=Ze;if(t){var n=t;if(!tc(e,t)){if(Ia(e))throw Error(j(418));t=rn(n.nextSibling);var r=Xe;t&&tc(e,t)?Af(r,n):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(Ia(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Qo(e){if(e!==Xe)return!1;if(!ae)return nc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=Ze)){if(Ia(e))throw Sf(),Error(j(418));for(;t;)Af(e,t),t=rn(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?rn(e.stateNode.nextSibling):null;return!0}function Sf(){for(var e=Ze;e;)e=rn(e.nextSibling)}function gr(){Ze=Xe=null,ae=!1}function Ps(e){pt===null?pt=[e]:pt.push(e)}var A0=Qt.ReactCurrentBatchConfig;function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function bf(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=sn(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,w){return d===null||d.tag!==6?(d=Ki(p,f.mode,w),d.return=f,d):(d=o(d,p),d.return=f,d)}function s(f,d,p,w){var S=p.type;return S===Yn?g(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&rc(S)===d.type)?(w=o(d,p.props),w.ref=zr(f,d,p),w.return=f,w):(w=dl(p.type,p.key,p.props,null,f.mode,w),w.ref=zr(f,d,p),w.return=f,w)}function u(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Yi(p,f.mode,w),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function g(f,d,p,w,S){return d===null||d.tag!==7?(d=Nn(p,f.mode,w,S),d.return=f,d):(d=o(d,p),d.return=f,d)}function c(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ki(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Po:return p=dl(d.type,d.key,d.props,null,f.mode,p),p.ref=zr(f,null,d),p.return=f,p;case Kn:return d=Yi(d,f.mode,p),d.return=f,d;case Gt:var w=d._init;return c(f,w(d._payload),p)}if(Fr(d)||Tr(d))return d=Nn(d,f.mode,p,null),d.return=f,d;Ho(f,d)}return null}function h(f,d,p,w){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Po:return p.key===S?s(f,d,p,w):null;case Kn:return p.key===S?u(f,d,p,w):null;case Gt:return S=p._init,h(f,d,S(p._payload),w)}if(Fr(p)||Tr(p))return S!==null?null:g(f,d,p,w,null);Ho(f,p)}return null}function y(f,d,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(d,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Po:return f=f.get(w.key===null?p:w.key)||null,s(d,f,w,S);case Kn:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,S);case Gt:var E=w._init;return y(f,d,p,E(w._payload),S)}if(Fr(w)||Tr(w))return f=f.get(p)||null,g(d,f,w,S,null);Ho(d,w)}return null}function x(f,d,p,w){for(var S=null,E=null,C=d,T=d=0,M=null;C!==null&&T<p.length;T++){C.index>T?(M=C,C=null):M=C.sibling;var z=h(f,C,p[T],w);if(z===null){C===null&&(C=M);break}e&&C&&z.alternate===null&&t(f,C),d=l(z,d,T),E===null?S=z:E.sibling=z,E=z,C=M}if(T===p.length)return n(f,C),ae&&wn(f,T),S;if(C===null){for(;T<p.length;T++)C=c(f,p[T],w),C!==null&&(d=l(C,d,T),E===null?S=C:E.sibling=C,E=C);return ae&&wn(f,T),S}for(C=r(f,C);T<p.length;T++)M=y(C,f,T,p[T],w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?T:M.key),d=l(M,d,T),E===null?S=M:E.sibling=M,E=M);return e&&C.forEach(function(X){return t(f,X)}),ae&&wn(f,T),S}function k(f,d,p,w){var S=Tr(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var E=S=null,C=d,T=d=0,M=null,z=p.next();C!==null&&!z.done;T++,z=p.next()){C.index>T?(M=C,C=null):M=C.sibling;var X=h(f,C,z.value,w);if(X===null){C===null&&(C=M);break}e&&C&&X.alternate===null&&t(f,C),d=l(X,d,T),E===null?S=X:E.sibling=X,E=X,C=M}if(z.done)return n(f,C),ae&&wn(f,T),S;if(C===null){for(;!z.done;T++,z=p.next())z=c(f,z.value,w),z!==null&&(d=l(z,d,T),E===null?S=z:E.sibling=z,E=z);return ae&&wn(f,T),S}for(C=r(f,C);!z.done;T++,z=p.next())z=y(C,f,T,z.value,w),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?T:z.key),d=l(z,d,T),E===null?S=z:E.sibling=z,E=z);return e&&C.forEach(function(q){return t(f,q)}),ae&&wn(f,T),S}function b(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Yn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Po:e:{for(var S=p.key,E=d;E!==null;){if(E.key===S){if(S=p.type,S===Yn){if(E.tag===7){n(f,E.sibling),d=o(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&rc(S)===E.type){n(f,E.sibling),d=o(E,p.props),d.ref=zr(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Yn?(d=Nn(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=dl(p.type,p.key,p.props,null,f.mode,w),w.ref=zr(f,d,p),w.return=f,f=w)}return i(f);case Kn:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Yi(p,f.mode,w),d.return=f,f=d}return i(f);case Gt:return E=p._init,b(f,d,E(p._payload),w)}if(Fr(p))return x(f,d,p,w);if(Tr(p))return k(f,d,p,w);Ho(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=Ki(p,f.mode,w),d.return=f,f=d),i(f)):n(f,d)}return b}var vr=bf(!0),Ef=bf(!1),Il=gn(null),Tl=null,rr=null,Ds=null;function Ls(){Ds=rr=Tl=null}function zs(e){var t=Il.current;oe(Il),e._currentValue=t}function Ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Tl=e,Ds=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Tl===null)throw Error(j(308));rr=e,Tl.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Sn=null;function Bs(e){Sn===null?Sn=[e]:Sn.push(e)}function Cf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rl(e,t,n,r){var o=e.updateQueue;Kt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(l!==null){var c=o.baseState;i=0,g=u=s=null,a=l;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(h=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){c=x.call(y,c,h);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(y,c,h):x,h==null)break e;c=de({},c,h);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=y,s=c):g=g.next=y,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Dn|=i,e.lanes=i,e.memoizedState=c}}function lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var jo={},Et=gn(jo),ho=gn(jo),mo=gn(jo);function bn(e){if(e===jo)throw Error(j(174));return e}function _s(e,t){switch(te(mo,t),te(ho,e),te(Et,jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}oe(Et),te(Et,t)}function yr(){oe(Et),oe(ho),oe(mo)}function Nf(e){bn(mo.current);var t=bn(Et.current),n=fa(t,e.type);t!==n&&(te(ho,e),te(Et,n))}function Ms(e){ho.current===e&&(oe(Et),oe(ho))}var ue=gn(0);function Pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Fs(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var il=Qt.ReactCurrentDispatcher,Qi=Qt.ReactCurrentBatchConfig,Pn=0,ce=null,Se=null,Ce=null,Dl=!1,Zr=!1,go=0,S0=0;function Le(){throw Error(j(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,o,l){if(Pn=l,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?$0:N0,e=n(r,o),Zr){l=0;do{if(Zr=!1,go=0,25<=l)throw Error(j(301));l+=1,Ce=Se=null,t.updateQueue=null,il.current=j0,e=n(r,o)}while(Zr)}if(il.current=Ll,t=Se!==null&&Se.next!==null,Pn=0,Ce=Se=ce=null,Dl=!1,t)throw Error(j(300));return e}function Hs(){var e=go!==0;return go=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function st(){if(Se===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ce===null?ce.memoizedState:Ce.next;if(t!==null)Ce=t,Se=e;else{if(e===null)throw Error(j(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function vo(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var g=u.lane;if((Pn&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,i=r):s=s.next=c,ce.lanes|=g,Dn|=g}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,vt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ce.lanes|=l,Dn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=st(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);vt(l,t.memoizedState)||(He=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function jf(){}function If(e,t){var n=ce,r=st(),o=t(),l=!vt(r.memoizedState,o);if(l&&(r.memoizedState=o,He=!0),r=r.queue,Ws(Pf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,yo(9,Rf.bind(null,n,r,o,t),void 0,null),je===null)throw Error(j(349));Pn&30||Tf(n,t,o)}return o}function Tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rf(e,t,n,r){t.value=n,t.getSnapshot=r,Df(t)&&Lf(e)}function Pf(e,t,n){return n(function(){Df(t)&&Lf(e)})}function Df(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Lf(e){var t=Ft(e,1);t!==null&&mt(t,e,1,-1)}function ic(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=C0.bind(null,ce,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zf(){return st().memoizedState}function al(e,t,n,r){var o=kt();ce.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function ni(e,t,n,r){var o=st();r=r===void 0?null:r;var l=void 0;if(Se!==null){var i=Se.memoizedState;if(l=i.destroy,r!==null&&Us(r,i.deps)){o.memoizedState=yo(t,n,l,r);return}}ce.flags|=e,o.memoizedState=yo(1|t,n,l,r)}function ac(e,t){return al(8390656,8,e,t)}function Ws(e,t){return ni(2048,8,e,t)}function Bf(e,t){return ni(4,2,e,t)}function Of(e,t){return ni(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mf(e,t,n){return n=n!=null?n.concat([e]):null,ni(4,4,_f.bind(null,t,e),n)}function Vs(){}function Ff(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uf(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qf(e,t,n){return Pn&21?(vt(n,t)||(n=Gd(),ce.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function b0(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{ee=n,Qi.transition=r}}function Hf(){return st().memoizedState}function E0(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wf(e))Vf(t,n);else if(n=Cf(e,t,n,r),n!==null){var o=Me();mt(n,e,r,o),Gf(n,t,r)}}function C0(e,t,n){var r=an(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wf(e))Vf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,i)){var s=t.interleaved;s===null?(o.next=o,Bs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Cf(e,t,o,r),n!==null&&(o=Me(),mt(n,e,r,o),Gf(n,t,r))}}function Wf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Vf(e,t){Zr=Dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}var Ll={readContext:at,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},$0={readContext:at,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Vs,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=b0.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=kt();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),je===null)throw Error(j(349));Pn&30||Tf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ac(Pf.bind(null,r,l,e),[e]),r.flags|=2048,yo(9,Rf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=kt(),t=je.identifierPrefix;if(ae){var n=Lt,r=Dt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N0={readContext:at,useCallback:Ff,useContext:at,useEffect:Ws,useImperativeHandle:Mf,useInsertionEffect:Bf,useLayoutEffect:Of,useMemo:Uf,useReducer:Hi,useRef:zf,useState:function(){return Hi(vo)},useDebugValue:Vs,useDeferredValue:function(e){var t=st();return Qf(t,Se.memoizedState,e)},useTransition:function(){var e=Hi(vo)[0],t=st().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:If,useId:Hf,unstable_isNewReconciler:!1},j0={readContext:at,useCallback:Ff,useContext:at,useEffect:Ws,useImperativeHandle:Mf,useInsertionEffect:Bf,useLayoutEffect:Of,useMemo:Uf,useReducer:Wi,useRef:zf,useState:function(){return Wi(vo)},useDebugValue:Vs,useDeferredValue:function(e){var t=st();return Se===null?t.memoizedState=e:Qf(t,Se.memoizedState,e)},useTransition:function(){var e=Wi(vo)[0],t=st().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:If,useId:Hf,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ri={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=an(e),l=zt(r,o);l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(mt(t,e,o,r),ll(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=an(e),l=zt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(mt(t,e,o,r),ll(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=an(e),o=zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=on(e,o,r),t!==null&&(mt(t,e,r,n),ll(t,e,r))}};function sc(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,l):!0}function Kf(e,t,n){var r=!1,o=fn,l=t.contextType;return typeof l=="object"&&l!==null?l=at(l):(o=Ve(t)?Tn:Oe.current,r=t.contextTypes,l=(r=r!=null)?mr(e,o):fn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Os(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=at(l):(l=Ve(t)?Tn:Oe.current,o.context=mr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pa(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ri.enqueueReplaceState(o,o.state,null),Rl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var n="",r=t;do n+=rm(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function La(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function Yf(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Wa=r),La(e,t)},n}function Jf(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){La(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){La(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new I0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=H0.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var T0=Qt.ReactCurrentOwner,He=!1;function _e(e,t,n,r){t.child=e===null?Ef(t,null,n,r):vr(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var l=t.ref;return fr(t,o),r=Qs(e,t,n,r,l,o),n=Hs(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ae&&n&&Ts(t),t.flags|=1,_e(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!eu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Zf(e,t,l,r,o)):(e=dl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(i,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=sn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Zf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(uo(l,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return za(e,t,n,r,o)}function Xf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(lr,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(lr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,te(lr,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,te(lr,Je),Je|=r;return _e(e,t,o,n),t.child}function qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,o){var l=Ve(n)?Tn:Oe.current;return l=mr(t,l),fr(t,o),n=Qs(e,t,n,r,l,o),r=Hs(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ae&&r&&Ts(t),t.flags|=1,_e(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Ve(n)){var l=!0;$l(t)}else l=!1;if(fr(t,o),t.stateNode===null)sl(e,t),Kf(t,n,r),Da(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?Tn:Oe.current,u=mr(t,u));var g=n.getDerivedStateFromProps,c=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&uc(t,i,r,u),Kt=!1;var h=t.memoizedState;i.state=h,Rl(t,r,i,o),s=t.memoizedState,a!==r||h!==s||We.current||Kt?(typeof g=="function"&&(Pa(t,n,g,r),s=t.memoizedState),(a=Kt||sc(t,n,a,r,h,s,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,$f(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),i.props=u,c=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=Ve(n)?Tn:Oe.current,s=mr(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==c||h!==s)&&uc(t,i,r,s),Kt=!1,h=t.memoizedState,i.state=h,Rl(t,r,i,o);var x=t.memoizedState;a!==c||h!==x||We.current||Kt?(typeof y=="function"&&(Pa(t,n,y,r),x=t.memoizedState),(u=Kt||sc(t,n,u,r,h,x,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,l,o)}function Ba(e,t,n,r,o,l){qf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&ec(t,n,!1),Ut(e,t,l);r=t.stateNode,T0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vr(t,e.child,null,l),t.child=vr(t,null,a,l)):_e(e,t,a,l),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function ep(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),_s(e,t.containerInfo)}function gc(e,t,n,r,o){return gr(),Ps(o),t.flags|=256,_e(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,n){var r=t.pendingProps,o=ue.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ue,o&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=ii(i,r,0,null),e=Nn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=_a(n),t.memoizedState=Oa,e):Gs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return R0(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=sn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=sn(a,l):(l=Nn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?_a(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return l=e.child,e=l.sibling,r=sn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gs(e,t){return t=ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&Ps(r),vr(t,e.child,null,n),e=Gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function R0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(j(422))),Wo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ii({mode:"visible",children:r.children},o,0,null),l=Nn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&vr(t,e.child,null,i),t.child.memoizedState=_a(i),t.memoizedState=Oa,l);if(!(t.mode&1))return Wo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(j(419)),r=Vi(l,r,void 0),Wo(e,t,i,r)}if(a=(i&e.childLanes)!==0,He||a){if(r=je,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ft(e,o),mt(r,e,o,-1))}return qs(),r=Vi(Error(j(421))),Wo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=W0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ze=rn(o.nextSibling),Xe=t,ae=!0,pt=null,e!==null&&(rt[ot++]=Dt,rt[ot++]=Lt,rt[ot++]=Rn,Dt=e.id,Lt=e.overflow,Rn=t),t=Gs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ra(e.return,t,n)}function Gi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function np(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(_e(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gi(t,!0,n,null,l);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function P0(e,t,n){switch(t.tag){case 3:ep(t),gr();break;case 5:Nf(t);break;case 1:Ve(t.type)&&$l(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Il,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?tp(e,t,n):(te(ue,ue.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);te(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return np(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n)}return Ut(e,t,n)}var rp,Ma,op,lp;rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ma=function(){};op=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn(Et.current);var l=null;switch(n){case"input":o=sa(e,o),r=sa(e,r),l=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),l=[];break;case"textarea":o=da(e,o),r=da(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=El)}pa(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};lp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function D0(e,t,n){var r=t.pendingProps;switch(Rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ve(t.type)&&Cl(),ze(t),null;case 3:return r=t.stateNode,yr(),oe(We),oe(Oe),Fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Ka(pt),pt=null))),Ma(e,t),ze(t),null;case 5:Ms(t);var o=bn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)op(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ze(t),null}if(e=bn(Et.current),Qo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[St]=t,r[po]=l,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<Qr.length;o++)ne(Qr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Cu(r,l),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ne("invalid",r);break;case"textarea":Nu(r,l),ne("invalid",r)}pa(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",""+a]):no.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&ne("scroll",r)}switch(n){case"input":Do(r),$u(r,l,!0);break;case"textarea":Do(r),ju(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=El)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[St]=t,e[po]=r,rp(e,t,!1,!1),t.stateNode=e;e:{switch(i=ha(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qr.length;o++)ne(Qr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Cu(e,r),o=sa(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Nu(e,r),o=da(e,r),ne("invalid",e);break;default:o=r}pa(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Ld(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pd(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(no.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ne("scroll",e):s!=null&&vs(e,l,s,i))}switch(n){case"input":Do(e),$u(e,r,!1);break;case"textarea":Do(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sr(e,!!r.multiple,l,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)lp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=bn(mo.current),bn(Et.current),Qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return ze(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&t.mode&1&&!(t.flags&128))Sf(),gr(),t.flags|=98560,l=!1;else if(l=Qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[St]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else pt!==null&&(Ka(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?be===0&&(be=3):qs())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return yr(),Ma(e,t),e===null&&co(t.stateNode.containerInfo),ze(t),null;case 10:return zs(t.type._context),ze(t),null;case 17:return Ve(t.type)&&Cl(),ze(t),null;case 19:if(oe(ue),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Br(l,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Pl(e),i!==null){for(t.flags|=128,Br(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>wr&&(t.flags|=128,r=!0,Br(l,!1),t.lanes=4194304)}else{if(!r)if(e=Pl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return ze(t),null}else 2*ge()-l.renderingStartTime>wr&&n!==1073741824&&(t.flags|=128,r=!0,Br(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=ue.current,te(ue,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function L0(e,t){switch(Rs(t),t.tag){case 1:return Ve(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),oe(We),oe(Oe),Fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return yr(),null;case 10:return zs(t.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Vo=!1,Be=!1,z0=typeof WeakSet=="function"?WeakSet:Set,D=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){he(e,t,r)}}var yc=!1;function B0(e,t){if(ba=Al,e=cf(),Is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,g=0,c=e,h=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(a=i+o),c!==l||r!==0&&c.nodeType!==3||(s=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(y=c.firstChild)!==null;)h=c,c=y;for(;;){if(c===e)break t;if(h===n&&++u===o&&(a=i),h===l&&++g===r&&(s=i),(y=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Al=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,b=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:dt(t.type,k),b);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){he(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=yc,yc=!1,x}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Fa(t,n,l)}o=o.next}while(o!==r)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ip(e){var t=e.alternate;t!==null&&(e.alternate=null,ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[po],delete t[Na],delete t[x0],delete t[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ap(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=El));else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var Te=null,ft=!1;function Wt(e,t,n){for(n=n.child;n!==null;)sp(e,t,n),n=n.sibling}function sp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Be||or(n,t);case 6:var r=Te,o=ft;Te=null,Wt(e,t,n),Te=r,ft=o,Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ft?(e=Te,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),ao(e)):Mi(Te,n.stateNode));break;case 4:r=Te,o=ft,Te=n.stateNode.containerInfo,ft=!0,Wt(e,t,n),Te=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Fa(n,t,i),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!Be&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Wt(e,t,n),Be=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new z0),t.forEach(function(r){var o=V0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,ft=!1;break e;case 3:Te=a.stateNode.containerInfo,ft=!0;break e;case 4:Te=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Te===null)throw Error(j(160));sp(l,i,o),Te=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Xr(3,e,e.return),oi(3,e)}catch(k){he(e,e.return,k)}try{Xr(5,e,e.return)}catch(k){he(e,e.return,k)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(k){he(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Id(o,l),ha(a,i);var u=ha(a,l);for(i=0;i<s.length;i+=2){var g=s[i],c=s[i+1];g==="style"?Ld(o,c):g==="dangerouslySetInnerHTML"?Pd(o,c):g==="children"?ro(o,c):vs(o,g,c,u)}switch(a){case"input":ua(o,l);break;case"textarea":Td(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?sr(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?sr(o,!!l.multiple,l.defaultValue,!0):sr(o,!!l.multiple,l.multiple?[]:"",!1))}o[po]=l}catch(k){he(e,e.return,k)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){he(e,e.return,k)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(k){he(e,e.return,k)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Js=ge())),r&4&&wc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||g,ct(t,e),Be=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(D=e,g=e.child;g!==null;){for(c=D=g;D!==null;){switch(h=D,y=h.child,h.tag){case 0:case 11:case 14:case 15:Xr(4,h,h.return);break;case 1:or(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){he(r,n,k)}}break;case 5:or(h,h.return);break;case 22:if(h.memoizedState!==null){Ac(c);continue}}y!==null?(y.return=h,D=y):Ac(c)}g=g.sibling}e:for(g=null,c=e;;){if(c.tag===5){if(g===null){g=c;try{o=c.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Dd("display",i))}catch(k){he(e,e.return,k)}}}else if(c.tag===6){if(g===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){he(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;g===c&&(g=null),c=c.return}g===c&&(g=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ct(t,e),wt(e),r&4&&wc(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ap(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var l=xc(e);Ha(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=xc(e);Qa(e,a,i);break;default:throw Error(j(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O0(e,t,n){D=e,cp(e)}function cp(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Vo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Be;a=Vo;var u=Be;if(Vo=i,(Be=s)&&!u)for(D=o;D!==null;)i=D,s=i.child,i.tag===22&&i.memoizedState!==null?Sc(o):s!==null?(s.return=i,D=s):Sc(o);for(;l!==null;)D=l,cp(l),l=l.sibling;D=o,Vo=a,Be=u}kc(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,D=l):kc(e)}}function kc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&lc(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lc(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var c=g.dehydrated;c!==null&&ao(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Be||t.flags&512&&Ua(t)}catch(h){he(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Ac(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Sc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oi(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var l=t.return;try{Ua(t)}catch(s){he(t,l,s)}break;case 5:var i=t.return;try{Ua(t)}catch(s){he(t,i,s)}}}catch(s){he(t,t.return,s)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var _0=Math.ceil,zl=Qt.ReactCurrentDispatcher,Ks=Qt.ReactCurrentOwner,it=Qt.ReactCurrentBatchConfig,Y=0,je=null,ye=null,Re=0,Je=0,lr=gn(0),be=0,xo=null,Dn=0,li=0,Ys=0,qr=null,Qe=null,Js=0,wr=1/0,Tt=null,Bl=!1,Wa=null,ln=null,Go=!1,Xt=null,Ol=0,eo=0,Va=null,ul=-1,cl=0;function Me(){return Y&6?ge():ul!==-1?ul:ul=ge()}function an(e){return e.mode&1?Y&2&&Re!==0?Re&-Re:A0.transition!==null?(cl===0&&(cl=Gd()),cl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:ef(e.type)),e):1}function mt(e,t,n,r){if(50<eo)throw eo=0,Va=null,Error(j(185));Co(e,n,r),(!(Y&2)||e!==je)&&(e===je&&(!(Y&2)&&(li|=n),be===4&&Jt(e,Re)),Ge(e,r),n===1&&Y===0&&!(t.mode&1)&&(wr=ge()+500,ti&&vn()))}function Ge(e,t){var n=e.callbackNode;Am(e,t);var r=kl(e,e===je?Re:0);if(r===0)n!==null&&Ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ru(n),t===1)e.tag===0?k0(bc.bind(null,e)):wf(bc.bind(null,e)),v0(function(){!(Y&6)&&vn()}),n=null;else{switch(Kd(r)){case 1:n=As;break;case 4:n=Wd;break;case 16:n=wl;break;case 536870912:n=Vd;break;default:n=wl}n=yp(n,dp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dp(e,t){if(ul=-1,cl=0,Y&6)throw Error(j(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=kl(e,e===je?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var o=Y;Y|=2;var l=pp();(je!==e||Re!==t)&&(Tt=null,wr=ge()+500,$n(e,t));do try{U0();break}catch(a){fp(e,a)}while(!0);Ls(),zl.current=l,Y=o,ye!==null?t=0:(je=null,Re=0,t=be)}if(t!==0){if(t===2&&(o=xa(e),o!==0&&(r=o,t=Ga(e,o))),t===1)throw n=xo,$n(e,0),Jt(e,r),Ge(e,ge()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!M0(o)&&(t=_l(e,r),t===2&&(l=xa(e),l!==0&&(r=l,t=Ga(e,l))),t===1))throw n=xo,$n(e,0),Jt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:kn(e,Qe,Tt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Js+500-ge(),10<t)){if(kl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$a(kn.bind(null,e,Qe,Tt),t);break}kn(e,Qe,Tt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ht(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_0(r/1960))-r,10<r){e.timeoutHandle=$a(kn.bind(null,e,Qe,Tt),r);break}kn(e,Qe,Tt);break;case 5:kn(e,Qe,Tt);break;default:throw Error(j(329))}}}return Ge(e,ge()),e.callbackNode===n?dp.bind(null,e):null}function Ga(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=_l(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Ka(t)),e}function Ka(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function M0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!vt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Ys,t&=~li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function bc(e){if(Y&6)throw Error(j(327));pr();var t=kl(e,0);if(!(t&1))return Ge(e,ge()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ga(e,r))}if(n===1)throw n=xo,$n(e,0),Jt(e,t),Ge(e,ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Qe,Tt),Ge(e,ge()),null}function Zs(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(wr=ge()+500,ti&&vn())}}function Ln(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&pr();var t=Y;Y|=1;var n=it.transition,r=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=r,it.transition=n,Y=t,!(Y&6)&&vn()}}function Xs(){Je=lr.current,oe(lr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g0(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:yr(),oe(We),oe(Oe),Fs();break;case 5:Ms(r);break;case 4:yr();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:zs(r.type._context);break;case 22:case 23:Xs()}n=n.return}if(je=e,ye=e=sn(e.current,null),Re=Je=t,be=0,xo=null,Ys=li=Dn=0,Qe=qr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Sn=null}return e}function fp(e,t){do{var n=ye;try{if(Ls(),il.current=Ll,Dl){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Dl=!1}if(Pn=0,Ce=Se=ce=null,Zr=!1,go=0,Ks.current=null,n===null||n.return===null){be=1,xo=t,ye=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,c=g.tag;if(!(g.mode&1)&&(c===0||c===11||c===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=dc(i);if(y!==null){y.flags&=-257,fc(y,i,a,l,t),y.mode&1&&cc(l,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){cc(l,u,t),qs();break e}s=Error(j(426))}}else if(ae&&a.mode&1){var b=dc(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),fc(b,i,a,l,t),Ps(xr(s,a));break e}}l=s=xr(s,a),be!==4&&(be=2),qr===null?qr=[l]:qr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Yf(l,s,t);oc(l,f);break e;case 1:a=s;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Jf(l,a,t);oc(l,w);break e}}l=l.return}while(l!==null)}mp(n)}catch(S){t=S,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function pp(){var e=zl.current;return zl.current=Ll,e===null?Ll:e}function qs(){(be===0||be===3||be===2)&&(be=4),je===null||!(Dn&268435455)&&!(li&268435455)||Jt(je,Re)}function _l(e,t){var n=Y;Y|=2;var r=pp();(je!==e||Re!==t)&&(Tt=null,$n(e,t));do try{F0();break}catch(o){fp(e,o)}while(!0);if(Ls(),Y=n,zl.current=r,ye!==null)throw Error(j(261));return je=null,Re=0,be}function F0(){for(;ye!==null;)hp(ye)}function U0(){for(;ye!==null&&!pm();)hp(ye)}function hp(e){var t=vp(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?mp(e):ye=t,Ks.current=null}function mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=L0(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ye=null;return}}else if(n=D0(n,t,Je),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);be===0&&(be=5)}function kn(e,t,n){var r=ee,o=it.transition;try{it.transition=null,ee=1,Q0(e,t,n,r)}finally{it.transition=o,ee=r}return null}function Q0(e,t,n,r){do pr();while(Xt!==null);if(Y&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Sm(e,l),e===je&&(ye=je=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,yp(wl,function(){return pr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=it.transition,it.transition=null;var i=ee;ee=1;var a=Y;Y|=4,Ks.current=null,B0(e,n),up(n,e),u0(Ea),Al=!!ba,Ea=ba=null,e.current=n,O0(n),hm(),Y=a,ee=i,it.transition=l}else e.current=n;if(Go&&(Go=!1,Xt=e,Ol=o),l=e.pendingLanes,l===0&&(ln=null),vm(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Bl)throw Bl=!1,e=Wa,Wa=null,e;return Ol&1&&e.tag!==0&&pr(),l=e.pendingLanes,l&1?e===Va?eo++:(eo=0,Va=e):eo=0,vn(),null}function pr(){if(Xt!==null){var e=Kd(Ol),t=it.transition,n=ee;try{if(it.transition=null,ee=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Ol=0,Y&6)throw Error(j(331));var o=Y;for(Y|=4,D=e.current;D!==null;){var l=D,i=l.child;if(D.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(D=u;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:Xr(8,g,l)}var c=g.child;if(c!==null)c.return=g,D=c;else for(;D!==null;){g=D;var h=g.sibling,y=g.return;if(ip(g),g===u){D=null;break}if(h!==null){h.return=y,D=h;break}D=y}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}D=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Xr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,D=f;break e}D=l.return}}var d=e.current;for(D=d;D!==null;){i=D;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,D=p;else e:for(i=d;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oi(9,a)}}catch(S){he(a,a.return,S)}if(a===i){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(Y=o,vn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Jl,e)}catch{}r=!0}return r}finally{ee=n,it.transition=t}}return!1}function Ec(e,t,n){t=xr(n,t),t=Yf(e,t,1),e=on(e,t,1),t=Me(),e!==null&&(Co(e,1,t),Ge(e,t))}function he(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=xr(n,e),e=Jf(t,e,1),t=on(t,e,1),e=Me(),t!==null&&(Co(t,1,e),Ge(t,e));break}}t=t.return}}function H0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Re&n)===n&&(be===4||be===3&&(Re&130023424)===Re&&500>ge()-Js?$n(e,0):Ys|=n),Ge(e,t)}function gp(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=Me();e=Ft(e,t),e!==null&&(Co(e,t,n),Ge(e,n))}function W0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gp(e,n)}function V0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),gp(e,n)}var vp;vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,P0(e,t,n);He=!!(e.flags&131072)}else He=!1,ae&&t.flags&1048576&&kf(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sl(e,t),e=t.pendingProps;var o=mr(t,Oe.current);fr(t,n),o=Qs(null,t,r,e,o,n);var l=Hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,$l(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Os(t),o.updater=ri,t.stateNode=o,o._reactInternals=t,Da(t,r,e,n),t=Ba(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Ts(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=K0(r),e=dt(r,e),o){case 0:t=za(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,dt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),za(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),mc(e,t,r,o,n);case 3:e:{if(ep(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,o=l.element,$f(e,t),Rl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=xr(Error(j(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=xr(Error(j(424)),t),t=gc(e,t,r,n,o);break e}else for(Ze=rn(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,pt=null,n=Ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===o){t=Ut(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Nf(t),e===null&&Ta(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ca(r,o)?i=null:l!==null&&Ca(r,l)&&(t.flags|=32),qf(e,t),_e(e,t,i,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return tp(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),pc(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,te(Il,r._currentValue),r._currentValue=i,l!==null)if(vt(l.value,i)){if(l.children===o.children&&!We.current){t=Ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=zt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ra(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(j(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ra(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fr(t,n),o=at(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),hc(e,t,r,o,n);case 15:return Zf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),sl(e,t),t.tag=1,Ve(r)?(e=!0,$l(t)):e=!1,fr(t,n),Kf(t,r,o),Da(t,r,o,n),Ba(null,t,r,!0,e,n);case 19:return np(e,t,n);case 22:return Xf(e,t,n)}throw Error(j(156,t.tag))};function yp(e,t){return Hd(e,t)}function G0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new G0(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ws)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function dl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")eu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yn:return Nn(n.children,o,l,t);case ys:i=8,o|=8;break;case oa:return e=lt(12,n,t,o|2),e.elementType=oa,e.lanes=l,e;case la:return e=lt(13,n,t,o),e.elementType=la,e.lanes=l,e;case ia:return e=lt(19,n,t,o),e.elementType=ia,e.lanes=l,e;case $d:return ii(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:i=10;break e;case Cd:i=9;break e;case xs:i=11;break e;case ws:i=14;break e;case Gt:i=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=lt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Nn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function ii(e,t,n,r){return e=lt(22,e,r,t),e.elementType=$d,e.lanes=n,e.stateNode={isHidden:!1},e}function Ki(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Y0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,o,l,i,a,s){return e=new Y0(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=lt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Os(l),e}function J0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xp(e){if(!e)return fn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ve(n))return xf(e,n,t)}return t}function wp(e,t,n,r,o,l,i,a,s){return e=tu(n,r,!0,e,o,l,i,a,s),e.context=xp(null),n=e.current,r=Me(),o=an(n),l=zt(r,o),l.callback=t??null,on(n,l,o),e.current.lanes=o,Co(e,o,r),Ge(e,r),e}function ai(e,t,n,r){var o=t.current,l=Me(),i=an(o);return n=xp(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(o,t,i),e!==null&&(mt(e,o,i,l),ll(e,o,i)),i}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function Z0(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}si.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ai(e,t,null,null)};si.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){ai(null,e,null,null)}),t[Mt]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&qd(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function X0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Ml(i);l.call(u)}}var i=wp(t,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=i,e[Mt]=i.current,co(e.nodeType===8?e.parentNode:e),Ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ml(s);a.call(u)}}var s=tu(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=s,e[Mt]=s.current,co(e.nodeType===8?e.parentNode:e),Ln(function(){ai(t,s,n,r)}),s}function ci(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Ml(i);a.call(s)}}ai(t,i,e,o)}else i=X0(n,t,e,o,r);return Ml(i)}Yd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Ss(t,n|1),Ge(t,ge()),!(Y&6)&&(wr=ge()+500,vn()))}break;case 13:Ln(function(){var r=Ft(e,1);if(r!==null){var o=Me();mt(r,e,1,o)}}),nu(e,1)}};bs=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Me();mt(t,e,134217728,n)}nu(e,134217728)}};Jd=function(e){if(e.tag===13){var t=an(e),n=Ft(e,t);if(n!==null){var r=Me();mt(n,e,t,r)}nu(e,t)}};Zd=function(){return ee};Xd=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ga=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ei(r);if(!o)throw Error(j(90));jd(r),ua(r,o)}}}break;case"textarea":Td(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};Od=Zs;_d=Ln;var q0={usingClientEntryPoint:!1,Events:[No,qn,ei,zd,Bd,Zs]},Or={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ud(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Jl=Ko.inject(eg),bt=Ko}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(j(200));return J0(e,t,null,n)};et.createRoot=function(e,t){if(!ou(e))throw Error(j(299));var n=!1,r="",o=kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,o),e[Mt]=t.current,co(e.nodeType===8?e.parentNode:e),new ru(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ud(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Ln(e)};et.hydrate=function(e,t,n){if(!ui(t))throw Error(j(200));return ci(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=kp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=wp(t,null,e,1,n??null,o,!1,l,i),e[Mt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new si(t)};et.render=function(e,t,n){if(!ui(t))throw Error(j(200));return ci(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ui(e))throw Error(j(40));return e._reactRootContainer?(Ln(function(){ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};et.unstable_batchedUpdates=Zs;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ui(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ci(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap)}catch(e){console.error(e)}}Ap(),kd.exports=et;var Sp=kd.exports,bp,Nc=Sp;bp=Nc.createRoot,Nc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const jc="popstate";function tg(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Fn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ya("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Fl(l))}function r(o,l){lu(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return rg(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ng(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function Ya(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||r||ng()})}function Fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=qt.Pop,s=null,u=g();u==null&&(u=0,i.replaceState(wo({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function c(){a=qt.Pop;let b=g(),f=b==null?null:b-u;u=b,s&&s({action:a,location:k.location,delta:f})}function h(b,f){a=qt.Push;let d=Ya(k.location,b,f);n&&n(d,b),u=g()+1;let p=Ic(d,u),w=k.createHref(d);try{i.pushState(p,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}l&&s&&s({action:a,location:k.location,delta:1})}function y(b,f){a=qt.Replace;let d=Ya(k.location,b,f);n&&n(d,b),u=g();let p=Ic(d,u),w=k.createHref(d);i.replaceState(p,"",w),l&&s&&s({action:a,location:k.location,delta:0})}function x(b){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof b=="string"?b:Fl(b);return d=d.replace(/ $/,"%20"),xe(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return a},get location(){return e(o,i)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(jc,c),s=b,()=>{o.removeEventListener(jc,c),s=null}},createHref(b){return t(o,b)},createURL:x,encodeLocation(b){let f=x(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(b){return i.go(b)}};return k}var Tc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tc||(Tc={}));function og(e,t,n){return n===void 0&&(n="/"),lg(e,t,n,!1)}function lg(e,t,n,r){let o=typeof t=="string"?Fn(t):t,l=iu(o.pathname||"/",n);if(l==null)return null;let i=Ep(e);ig(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=vg(l);a=mg(i[s],u,r)}return a}function Ep(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=un([r,s.relativePath]),g=n.concat(s);l.children&&l.children.length>0&&(xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ep(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:pg(u,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Cp(l.path))o(l,i,s)}),t}function Cp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Cp(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function ig(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ag=/^:[\w-]+$/,sg=3,ug=2,cg=1,dg=10,fg=-2,Rc=e=>e==="*";function pg(e,t){let n=e.split("/"),r=n.length;return n.some(Rc)&&(r+=fg),t&&(r+=ug),n.filter(o=>!Rc(o)).reduce((o,l)=>o+(ag.test(l)?sg:l===""?cg:dg),r)}function hg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function mg(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",c=Pc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),h=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Pc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:un([l,c.pathname]),pathnameBase:kg(un([l,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(l=un([l,c.pathnameBase]))}return i}function Pc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,c)=>{let{paramName:h,isOptional:y}=g;if(h==="*"){let k=a[c]||"";i=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const x=a[c];return y&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function gg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function vg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function iu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function yg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:xg(n,t):t,search:Ag(r),hash:Sg(o)}}function xg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ji(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $p(e,t){let n=wg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Np(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fn(e):(o=wo({},e),xe(!o.pathname||!o.pathname.includes("?"),Ji("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),Ji("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),Ji("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let c=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}a=c>=0?t[c]:"/"}let s=yg(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const un=e=>e.join("/").replace(/\/\/+/g,"/"),kg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jp=["post","put","patch","delete"];new Set(jp);const Eg=["get",...jp];new Set(Eg);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(this,arguments)}const au=v.createContext(null),Cg=v.createContext(null),Un=v.createContext(null),di=v.createContext(null),Qn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Ip=v.createContext(null);function $g(e,t){let{relative:n}=t===void 0?{}:t;Io()||xe(!1);let{basename:r,navigator:o}=v.useContext(Un),{hash:l,pathname:i,search:a}=Rp(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:un([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Io(){return v.useContext(di)!=null}function fi(){return Io()||xe(!1),v.useContext(di).location}function Tp(e){v.useContext(Un).static||v.useLayoutEffect(e)}function Ng(){let{isDataRoute:e}=v.useContext(Qn);return e?Fg():jg()}function jg(){Io()||xe(!1);let e=v.useContext(au),{basename:t,future:n,navigator:r}=v.useContext(Un),{matches:o}=v.useContext(Qn),{pathname:l}=fi(),i=JSON.stringify($p(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return Tp(()=>{a.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Np(u,JSON.parse(i),l,g.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:un([t,c.pathname])),(g.replace?r.replace:r.push)(c,g.state,g)},[t,r,i,l,e])}function Rp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Un),{matches:o}=v.useContext(Qn),{pathname:l}=fi(),i=JSON.stringify($p(o,r.v7_relativeSplatPath));return v.useMemo(()=>Np(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Ig(e,t){return Tg(e,t)}function Tg(e,t,n,r){Io()||xe(!1);let{navigator:o,static:l}=v.useContext(Un),{matches:i}=v.useContext(Qn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=fi(),c;if(t){var h;let f=typeof t=="string"?Fn(t):t;u==="/"||(h=f.pathname)!=null&&h.startsWith(u)||xe(!1),c=f}else c=g;let y=c.pathname||"/",x=y;if(u!=="/"){let f=u.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(f.length).join("/")}let k=!l&&n&&n.matches&&n.matches.length>0?n.matches:og(e,{pathname:x}),b=zg(k&&k.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:un([u,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:un([u,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,r);return t&&b?v.createElement(di.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:qt.Pop}},b):b}function Rg(){let e=Mg(),t=bg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const Pg=v.createElement(Rg,null);class Dg extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Qn.Provider,{value:this.props.routeContext},v.createElement(Ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lg(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(au);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Qn.Provider,{value:t},r)}function zg(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);g>=0||xe(!1),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let c=i[g];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=g),c.route.id){let{loaderData:h,errors:y}=n,x=c.route.loader&&h[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||x){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,c,h)=>{let y,x=!1,k=null,b=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,k=c.route.errorElement||Pg,s&&(u<0&&h===0?(x=!0,b=null):u===h&&(x=!0,b=c.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,h+1)),d=()=>{let p;return y?p=k:x?p=b:c.route.Component?p=v.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=g,v.createElement(Lg,{match:c,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?v.createElement(Dg,{location:n.location,revalidation:n.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Pp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pp||{}),Ul=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ul||{});function Bg(e){let t=v.useContext(au);return t||xe(!1),t}function Og(e){let t=v.useContext(Cg);return t||xe(!1),t}function _g(e){let t=v.useContext(Qn);return t||xe(!1),t}function Dp(e){let t=_g(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function Mg(){var e;let t=v.useContext(Ip),n=Og(Ul.UseRouteError),r=Dp(Ul.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fg(){let{router:e}=Bg(Pp.UseNavigateStable),t=Dp(Ul.UseNavigateStable),n=v.useRef(!1);return Tp(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ko({fromRouteId:t},l)))},[e,t])}function Ug(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hr(e){xe(!1)}function Qg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=qt.Pop,navigator:l,static:i=!1,future:a}=e;Io()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:l,static:i,future:ko({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Fn(r));let{pathname:g="/",search:c="",hash:h="",state:y=null,key:x="default"}=r,k=v.useMemo(()=>{let b=iu(g,s);return b==null?null:{location:{pathname:b,search:c,hash:h,state:y,key:x},navigationType:o}},[s,g,c,h,y,x,o]);return k==null?null:v.createElement(Un.Provider,{value:u},v.createElement(di.Provider,{children:n,value:k}))}function Hg(e){let{children:t,location:n}=e;return Ig(Ja(t),n)}new Promise(()=>{});function Ja(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Ja(r.props.children,l));return}r.type!==Hr&&xe(!1),!r.props.index||!r.props.children||xe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ja(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}function Wg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Vg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gg(e,t){return e.button===0&&(!t||t==="_self")&&!Vg(e)}const Kg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yg="6";try{window.__reactRouterVersion=Yg}catch{}const Jg="startTransition",Dc=Hh[Jg];function Zg(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=tg({window:o,v5Compat:!0}));let i=l.current,[a,s]=v.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=v.useCallback(c=>{u&&Dc?Dc(()=>s(c)):s(c)},[s,u]);return v.useLayoutEffect(()=>i.listen(g),[i,g]),v.useEffect(()=>Ug(r),[r]),v.createElement(Qg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:g,viewTransition:c}=t,h=Wg(t,Kg),{basename:y}=v.useContext(Un),x,k=!1;if(typeof u=="string"&&qg.test(u)&&(x=u,Xg))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=iu(w.pathname,y);w.origin===p.origin&&S!=null?u=S+w.search+w.hash:k=!0}catch{}let b=$g(u,{relative:o}),f=ev(u,{replace:i,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:c});function d(p){r&&r(p),p.defaultPrevented||f(p)}return v.createElement("a",Za({},h,{href:x||b,onClick:k||l?r:d,ref:n,target:s}))});var Lc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lc||(Lc={}));var zc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zc||(zc={}));function ev(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=Ng(),u=fi(),g=Rp(e,{relative:i});return v.useCallback(c=>{if(Gg(c,n)){c.preventDefault();let h=r!==void 0?r:Fl(u)===Fl(g);s(e,{replace:h,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,g,r,o,n,e,l,i,a])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pi=(e,t)=>{const n=v.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...u},g)=>v.createElement("svg",{ref:g,...tv,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${nv(e)}`,a].join(" "),...u},[...t.map(([c,h])=>v.createElement(c,h)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=pi("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=pi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=pi("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=pi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function av(){const[e,t]=v.useState(!1);return m.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(Ye,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),m.jsxs("div",{className:"hidden sm:flex",children:[m.jsx(Ye,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),m.jsx(Ye,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),m.jsx(Ye,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),m.jsx(Ye,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),m.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?m.jsx(iv,{size:18}):m.jsx(ov,{size:18})})]}),e&&m.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:m.jsxs("div",{className:"py-1",children:[m.jsx(Ye,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),m.jsx(Ye,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),m.jsx(Ye,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),m.jsx(Ye,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}var sv=`
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

`,Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Ne.apply(this,arguments)};function Ao(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var re="-ms-",to="-moz-",Z="-webkit-",Lp="comm",hi="rule",su="decl",uv="@import",zp="@keyframes",cv="@layer",Bp=Math.abs,uu=String.fromCharCode,Xa=Object.assign;function dv(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Op(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function fl(e,t,n){return e.indexOf(t,n)}function $e(e,t){return e.charCodeAt(t)|0}function kr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function _p(e){return e.length}function Wr(e,t){return t.push(e),e}function fv(e,t){return e.map(t).join("")}function Bc(e,t){return e.filter(function(n){return!Rt(n,t)})}var mi=1,Ar=1,Mp=0,ut=0,ve=0,jr="";function gi(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:mi,column:Ar,length:i,return:"",siblings:a}}function Vt(e,t){return Xa(gi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Wr(e,e.siblings)}function pv(){return ve}function hv(){return ve=ut>0?$e(jr,--ut):0,Ar--,ve===10&&(Ar=1,mi--),ve}function gt(){return ve=ut<Mp?$e(jr,ut++):0,Ar++,ve===10&&(Ar=1,mi++),ve}function jn(){return $e(jr,ut)}function pl(){return ut}function vi(e,t){return kr(jr,e,t)}function qa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mv(e){return mi=Ar=1,Mp=At(jr=e),ut=0,[]}function gv(e){return jr="",e}function Zi(e){return Op(vi(ut-1,es(e===91?e+2:e===40?e+1:e)))}function vv(e){for(;(ve=jn())&&ve<33;)gt();return qa(e)>2||qa(ve)>3?"":" "}function yv(e,t){for(;--t&&gt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return vi(e,pl()+(t<6&&jn()==32&&gt()==32))}function es(e){for(;gt();)switch(ve){case e:return ut;case 34:case 39:e!==34&&e!==39&&es(ve);break;case 40:e===41&&es(e);break;case 92:gt();break}return ut}function xv(e,t){for(;gt()&&e+ve!==57;)if(e+ve===84&&jn()===47)break;return"/*"+vi(t,ut-1)+"*"+uu(e===47?e:gt())}function wv(e){for(;!qa(jn());)gt();return vi(e,ut)}function kv(e){return gv(hl("",null,null,null,[""],e=mv(e),0,[0],e))}function hl(e,t,n,r,o,l,i,a,s){for(var u=0,g=0,c=i,h=0,y=0,x=0,k=1,b=1,f=1,d=0,p="",w=o,S=l,E=r,C=p;b;)switch(x=d,d=gt()){case 40:if(x!=108&&$e(C,c-1)==58){fl(C+=U(Zi(d),"&","&\f"),"&\f",Bp(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Zi(d);break;case 9:case 10:case 13:case 32:C+=vv(x);break;case 92:C+=yv(pl()-1,7);continue;case 47:switch(jn()){case 42:case 47:Wr(Av(xv(gt(),pl()),t,n,s),s);break;default:C+="/"}break;case 123*k:a[u++]=At(C)*f;case 125*k:case 59:case 0:switch(d){case 0:case 125:b=0;case 59+g:f==-1&&(C=U(C,/\f/g,"")),y>0&&At(C)-c&&Wr(y>32?_c(C+";",r,n,c-1,s):_c(U(C," ","")+";",r,n,c-2,s),s);break;case 59:C+=";";default:if(Wr(E=Oc(C,t,n,u,g,o,a,p,w=[],S=[],c,l),l),d===123)if(g===0)hl(C,t,E,E,w,l,c,a,S);else switch(h===99&&$e(C,3)===110?100:h){case 100:case 108:case 109:case 115:hl(e,E,E,r&&Wr(Oc(e,E,E,0,0,o,a,p,o,w=[],c,S),S),o,S,c,a,r?w:S);break;default:hl(C,E,E,E,[""],S,0,a,S)}}u=g=y=0,k=f=1,p=C="",c=i;break;case 58:c=1+At(C),y=x;default:if(k<1){if(d==123)--k;else if(d==125&&k++==0&&hv()==125)continue}switch(C+=uu(d),d*k){case 38:f=g>0?1:(C+="\f",-1);break;case 44:a[u++]=(At(C)-1)*f,f=1;break;case 64:jn()===45&&(C+=Zi(gt())),h=jn(),g=c=At(p=C+=wv(pl())),d++;break;case 45:x===45&&At(C)==2&&(k=0)}}return l}function Oc(e,t,n,r,o,l,i,a,s,u,g,c){for(var h=o-1,y=o===0?l:[""],x=_p(y),k=0,b=0,f=0;k<r;++k)for(var d=0,p=kr(e,h+1,h=Bp(b=i[k])),w=e;d<x;++d)(w=Op(b>0?y[d]+" "+p:U(p,/&\f/g,y[d])))&&(s[f++]=w);return gi(e,t,n,o===0?hi:a,s,u,g,c)}function Av(e,t,n,r){return gi(e,t,n,Lp,uu(pv()),kr(e,2,-2),0,r)}function _c(e,t,n,r,o){return gi(e,t,n,su,kr(e,0,r),kr(e,r+1,-1),r,o)}function Fp(e,t,n){switch(dv(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+to+e+re+e+e;case 5936:switch($e(e,t+11)){case 114:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+re+e+e;case 6165:return Z+e+re+"flex-"+e+e;case 5187:return Z+e+U(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Z+e+re+"flex-item-"+U(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":re+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Z+e+re+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+re+U(e,"shrink","negative")+e;case 5292:return Z+e+re+U(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+U(e,"-grow","")+Z+e+re+U(e,"grow","positive")+e;case 4554:return Z+U(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return re+"grid-column-align"+kr(e,t)+e;break;case 2592:case 3360:return re+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Rt(r.props,/grid-\w+-end/)})?~fl(e+(n=n[t].value),"span",0)?e:re+U(e,"-start","")+e+re+"grid-row-span:"+(~fl(n,"span",0)?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":re+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:re+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+to+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fl(e,"stretch",0)?Fp(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return re+o+":"+l+u+(i?re+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if($e(e,t+6)===121)return U(e,":",":"+Z)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+($e(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+re+"$2box$3")+e;case 100:return U(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Ql(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sv(e,t,n,r){switch(e.type){case cv:if(e.children.length)break;case uv:case su:return e.return=e.return||e.value;case Lp:return"";case zp:return e.return=e.value+"{"+Ql(e.children,r)+"}";case hi:if(!At(e.value=e.props.join(",")))return""}return At(n=Ql(e.children,r))?e.return=e.value+"{"+n+"}":""}function bv(e){var t=_p(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Ev(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case su:e.return=Fp(e.value,e.length,n);return;case zp:return Ql([Vt(e,{value:U(e.value,"@","@"+Z)})],r);case hi:if(e.length)return fv(n=e.props,function(o){switch(Rt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Vt(e,{props:[U(o,/:(read-\w+)/,":"+to+"$1")]})),Vn(Vt(e,{props:[o]})),Xa(e,{props:Bc(n,r)});break;case"::placeholder":Vn(Vt(e,{props:[U(o,/:(plac\w+)/,":"+Z+"input-$1")]})),Vn(Vt(e,{props:[U(o,/:(plac\w+)/,":"+to+"$1")]})),Vn(Vt(e,{props:[U(o,/:(plac\w+)/,re+"input-$1")]})),Vn(Vt(e,{props:[o]})),Xa(e,{props:Bc(n,r)});break}return""})}}var $v={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},Sr=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",Up="active",Qp="data-styled-version",yi="6.1.16",cu=`/*!sc*/
`,Hl=typeof window<"u"&&"HTMLElement"in window,Nv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),jv={},xi=Object.freeze([]),br=Object.freeze({});function Hp(e,t,n){return n===void 0&&(n=br),e.theme!==n.theme&&e.theme||t||n.theme}var Wp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Iv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tv=/(^-|-$)/g;function Mc(e){return e.replace(Iv,"-").replace(Tv,"")}var Rv=/(a)(d)/gi,Yo=52,Fc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ts(e){var t,n="";for(t=Math.abs(e);t>Yo;t=t/Yo|0)n=Fc(t%Yo)+n;return(Fc(t%Yo)+n).replace(Rv,"$1-$2")}var Xi,Vp=5381,ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gp=function(e){return ir(Vp,e)};function Kp(e){return ts(Gp(e)>>>0)}function Pv(e){return e.displayName||e.name||"Component"}function qi(e){return typeof e=="string"&&!0}var Yp=typeof Symbol=="function"&&Symbol.for,Jp=Yp?Symbol.for("react.memo"):60115,Dv=Yp?Symbol.for("react.forward_ref"):60112,Lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((Xi={})[Dv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xi[Jp]=Zp,Xi);function Uc(e){return("type"in(t=e)&&t.type.$$typeof)===Jp?Zp:"$$typeof"in e?Bv[e.$$typeof]:Lv;var t}var Ov=Object.defineProperty,_v=Object.getOwnPropertyNames,Qc=Object.getOwnPropertySymbols,Mv=Object.getOwnPropertyDescriptor,Fv=Object.getPrototypeOf,Hc=Object.prototype;function Xp(e,t,n){if(typeof t!="string"){if(Hc){var r=Fv(t);r&&r!==Hc&&Xp(e,r,n)}var o=_v(t);Qc&&(o=o.concat(Qc(t)));for(var l=Uc(e),i=Uc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in zv||n&&n[s]||i&&s in i||l&&s in l)){var u=Mv(t,s);try{Ov(e,s,u)}catch{}}}}return e}function zn(e){return typeof e=="function"}function du(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ns(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function So(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rs(e,t,n){if(n===void 0&&(n=!1),!n&&!So(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rs(e[r],t[r]);else if(So(t))for(var r in t)e[r]=rs(e[r],t[r]);return e}function fu(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Uv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(cu);return n},e}(),ml=new Map,Wl=new Map,gl=1,Jo=function(e){if(ml.has(e))return ml.get(e);for(;Wl.has(gl);)gl++;var t=gl++;return ml.set(e,t),Wl.set(t,e),t},Qv=function(e,t){gl=t+1,ml.set(e,t),Wl.set(t,e)},Hv="style[".concat(Sr,"][").concat(Qp,'="').concat(yi,'"]'),Wv=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vv=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},Gv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cu),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(Wv);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Qv(g,u),Vv(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Wc=function(e){for(var t=document.querySelectorAll(Hv),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==Up&&(Gv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Kv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,Up),r.setAttribute(Qp,yi);var i=Kv();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},Yv=function(){function e(t){this.element=qp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jv=function(){function e(t){this.element=qp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Zv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vc=Hl,Xv={isServer:!Hl,useCSSOMInjection:!Nv},Vl=function(){function e(t,n,r){t===void 0&&(t=br),n===void 0&&(n={});var o=this;this.options=Ne(Ne({},Xv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hl&&Vc&&(Vc=!1,Wc(this)),fu(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(c){var h=function(f){return Wl.get(f)}(c);if(h===void 0)return"continue";var y=l.names.get(h),x=i.getGroup(c);if(y===void 0||!y.size||x.length===0)return"continue";var k="".concat(Sr,".g").concat(c,'[id="').concat(h,'"]'),b="";y!==void 0&&y.forEach(function(f){f.length>0&&(b+="".concat(f,","))}),s+="".concat(x).concat(k,'{content:"').concat(b,'"}').concat(cu)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return Jo(t)},e.prototype.rehydrate=function(){!this.server&&Hl&&Wc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Zv(o):r?new Yv(o):new Jv(o)}(this.options),new Uv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Jo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),qv=/&/g,ey=/^\s*\/\/.*$/gm;function eh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=eh(n.children,t)),n})}function ty(e){var t,n,r,o=br,l=o.options,i=l===void 0?br:l,a=o.plugins,s=a===void 0?xi:a,u=function(h,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},g=s.slice();g.push(function(h){h.type===hi&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(qv,n).replace(r,u))}),i.prefix&&g.push(Cv),g.push(Sv);var c=function(h,y,x,k){y===void 0&&(y=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(ey,""),f=kv(x||y?"".concat(x," ").concat(y," { ").concat(b," }"):b);i.namespace&&(f=eh(f,i.namespace));var d=[];return Ql(f,bv(g.concat(Ev(function(p){return d.push(p)})))),d};return c.hash=s.length?s.reduce(function(h,y){return y.name||Bn(15),ir(h,y.name)},Vp).toString():"",c}var ny=new Vl,os=ty(),th=A.createContext({shouldForwardProp:void 0,styleSheet:ny,stylis:os});th.Consumer;A.createContext(void 0);function ls(){return v.useContext(th)}var ry=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=os);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fu(this,function(){throw Bn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=os),this.name+t.hash},e}(),oy=function(e){return e>="A"&&e<="Z"};function Gc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;oy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var nh=function(e){return e==null||e===!1||e===""},rh=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!nh(l)&&(Array.isArray(l)&&l.isCss||zn(l)?r.push("".concat(Gc(o),":"),l,";"):So(l)?r.push.apply(r,Ao(Ao(["".concat(o," {")],rh(l),!1),["}"],!1)):r.push("".concat(Gc(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in $v||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(nh(e))return[];if(du(e))return[".".concat(e.styledComponentId)];if(zn(e)){if(!zn(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cn(o,t,n,r)}var l;return e instanceof ry?n?(e.inject(n,r),[e.getName(r)]):[e]:So(e)?rh(e):Array.isArray(e)?Array.prototype.concat.apply(xi,e.map(function(i){return cn(i,t,n,r)})):[e.toString()]}function oh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zn(n)&&!du(n))return!1}return!0}var ly=Gp(yi),iy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oh(t),this.componentId=n,this.baseHash=ir(ly,n),this.baseStyle=r,Vl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=En(o,this.staticRulesId);else{var l=ns(cn(this.rules,t,n,r)),i=ts(ir(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=En(o,i),this.staticRulesId=i}else{for(var s=ir(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var c=this.rules[g];if(typeof c=="string")u+=c;else if(c){var h=ns(cn(c,t,n,r));s=ir(s,h+g),u+=h}}if(u){var y=ts(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=En(o,y)}}return o},e}(),bo=A.createContext(void 0);bo.Consumer;function ay(e){var t=A.useContext(bo),n=v.useMemo(function(){return function(r,o){if(!r)throw Bn(14);if(zn(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Bn(8);return o?Ne(Ne({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?A.createElement(bo.Provider,{value:n},e.children):null}var ea={};function sy(e,t,n){var r=du(e),o=e,l=!qi(e),i=t.attrs,a=i===void 0?xi:i,s=t.componentId,u=s===void 0?function(w,S){var E=typeof w!="string"?"sc":Mc(w);ea[E]=(ea[E]||0)+1;var C="".concat(E,"-").concat(Kp(yi+E+ea[E]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):s,g=t.displayName,c=g===void 0?function(w){return qi(w)?"styled.".concat(w):"Styled(".concat(Pv(w),")")}(e):g,h=t.displayName&&t.componentId?"".concat(Mc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return k(w,S)&&b(w,S)}}else x=k}var f=new iy(n,h,r?o.componentStyle:void 0);function d(w,S){return function(E,C,T){var M=E.attrs,z=E.componentStyle,X=E.defaultProps,q=E.foldedComponentIds,fe=E.styledComponentId,pe=E.target,se=A.useContext(bo),we=ls(),ke=E.shouldForwardProp||we.shouldForwardProp,N=Hp(C,se,X)||br,R=function(K,_,H){for(var Ee,I=Ne(Ne({},_),{className:void 0,theme:H}),F=0;F<K.length;F+=1){var W=zn(Ee=K[F])?Ee(I):Ee;for(var J in W)I[J]=J==="className"?En(I[J],W[J]):J==="style"?Ne(Ne({},I[J]),W[J]):W[J]}return _.className&&(I.className=En(I.className,_.className)),I}(M,C,N),L=R.as||pe,G={};for(var Q in R)R[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&R.theme===N||(Q==="forwardedAs"?G.as=R.forwardedAs:ke&&!ke(Q,L)||(G[Q]=R[Q]));var B=function(K,_){var H=ls(),Ee=K.generateAndInjectStyles(_,H.styleSheet,H.stylis);return Ee}(z,R),O=En(q,fe);return B&&(O+=" "+B),R.className&&(O+=" "+R.className),G[qi(L)&&!Wp.has(L)?"class":"className"]=O,T&&(G.ref=T),v.createElement(L,G)}(p,w,S)}d.displayName=c;var p=A.forwardRef(d);return p.attrs=y,p.componentStyle=f,p.displayName=c,p.shouldForwardProp=x,p.foldedComponentIds=r?En(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var T=0,M=E;T<M.length;T++)rs(S,M[T],!0);return S}({},o.defaultProps,w):w}}),fu(p,function(){return".".concat(p.styledComponentId)}),l&&Xp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Kc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yc=function(e){return Object.assign(e,{isCss:!0})};function P(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zn(e)||So(e))return Yc(cn(Kc(xi,Ao([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?cn(r):Yc(cn(Kc(r,t)))}function is(e,t,n){if(n===void 0&&(n=br),!t)throw Bn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,P.apply(void 0,Ao([o],l,!1)))};return r.attrs=function(o){return is(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return is(e,t,Ne(Ne({},n),o))},r}var lh=function(e){return is(sy,e)},$=lh;Wp.forEach(function(e){$[e]=lh(e)});var uy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=oh(t),Vl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(ns(cn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Vl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function cy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=P.apply(void 0,Ao([e],t,!1)),o="sc-global-".concat(Kp(JSON.stringify(r))),l=new uy(r,o),i=function(s){var u=ls(),g=A.useContext(bo),c=A.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,g,u.stylis),A.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,g,u.stylis),function(){return l.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,c,h){if(l.isStatic)l.renderStyles(s,jv,g,h);else{var y=Ne(Ne({},u),{theme:Hp(u,c,i.defaultProps)});l.renderStyles(s,y,g,h)}}return A.memo(i)}const pu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",hu="inset 2px 2px 3px rgba(0,0,0,0.2)",yt=()=>P`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,xt=({background:e="material",color:t="materialText"}={})=>P`
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
`,On=()=>P`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},dy=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?pu:!1,o?hu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),me=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>dy({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},Er=()=>P`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,fy=e=>Buffer.from(e).toString("base64"),py=typeof btoa<"u"?btoa:fy,Zo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${py(n)})`},mu=(e="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>To({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${xt()}
    ${e==="flat"?On():me({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${xt()}
    ${e==="flat"?On():me({style:"window"})}
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
    ${e==="default"?me({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Zo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Zo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Zo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Zo(t.materialText,0)};
  }
`,hy=$.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,my=v.forwardRef(({children:e,underline:t=!0,...n},r)=>A.createElement(hy,{ref:r,underline:t,...n},e));my.displayName="Anchor";const gy=$.header`
  ${me()};
  ${xt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ih=v.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>A.createElement(gy,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));ih.displayName="AppBar";const Hn=()=>{};function Cn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function vy(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Jc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(vy(t)))}function pn(e){return typeof e=="number"?`${e}px`:e}const yy=$.div`
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
`,xy=$.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,wy=v.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>A.createElement(yy,{noBorder:n,ref:a,size:pn(r),square:o,src:l,...i},l?A.createElement(xy,{src:l,alt:e}):t));wy.displayName="Avatar";const Pe={sm:"28px",md:"36px",lg:"44px"},ky=P`
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
`,wi=$.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?P`
          ${On()}
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
            ${!e&&!t&&Er}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?P`
          ${xt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&me({style:"buttonThin"})}
          }
          &:active {
            ${!t&&me({style:"buttonThinPressed"})}
          }
          ${e&&me({style:"buttonThinPressed"})}
          ${t&&yt()}
        `:P`
          ${xt()};
          border: none;
          ${t&&yt()}
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

            ${me(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&me({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Er}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${ky}
`,ie=v.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Hn,primary:u=!1,variant:g="default",...c},h)=>A.createElement(wi,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:h,size:l,square:i,type:r,variant:g,...c},n));ie.displayName="Button";function hn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=v.useState(e),u=v.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,u]}const as=$.li`
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
  ${e=>e.$disabled&&yt()}
`,Ay=v.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>A.createElement(as,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));Ay.displayName="MenuListItem";const Sy=$.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${me({style:"window"})}
  ${xt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Sy.displayName="MenuList";const Ct=20,Gl=$.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ct}px;
  height: ${Ct}px;
  opacity: 0;
  z-index: -1;
`,gu=$.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&yt()}

  ${as} & {
    margin: 0;
    height: 100%;
  }
  ${as}:hover & {
    ${({$disabled:e,theme:t})=>!e&&P`
        color: ${t.materialTextInvert};
      `};
  }
`,vu=$.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Gl}:focus ~ & {
    ${Er}
  }
  ${Gl}:not(:disabled) ~ &:active {
    ${Er}
  }
`,$t=$.div`
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
    ${e=>e.shadow&&`box-shadow:${hu};`}
  }
`,by=$.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${mu()}
`,ah=v.forwardRef(({children:e,shadow:t=!0,...n},r)=>A.createElement($t,{ref:r,shadow:t,...n},A.createElement(by,null,e)));ah.displayName="ScrollView";const sh=P`
  width: ${Ct}px;
  height: ${Ct}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ey=$($t)`
  ${sh}
  width: ${Ct}px;
  height: ${Ct}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Cy=$.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${sh}
  width: ${Ct-4}px;
  height: ${Ct-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,$y=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Ny=$.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,jy={flat:Cy,default:Ey},Iy=v.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Hn,style:a={},value:s,variant:u="default",...g},c)=>{var h;const[y,x]=hn({defaultValue:n,onChange:i,readOnly:(h=g.readOnly)!==null&&h!==void 0?h:r,value:e}),k=v.useCallback(d=>{const p=d.target.checked;x(p),i(d)},[i,x]),b=jy[u];let f=null;return o?f=Ny:y&&(f=$y),A.createElement(gu,{$disabled:r,className:t,style:a},A.createElement(Gl,{disabled:r,onChange:r?void 0:k,readOnly:r,type:"checkbox",value:s,checked:y,"data-indeterminate":o,ref:c,...g}),A.createElement(b,{$disabled:r,role:"presentation"},f&&A.createElement(f,{$disabled:r,variant:u})),l&&A.createElement(vu,null,l))});Iy.displayName="Checkbox";const uh=$.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${pn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${pn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;uh.displayName="Separator";const Ty=$(wi)`
  padding-left: 8px;
`,Ry=$(uh)`
  height: 21px;
  position: relative;
  top: 0;
`,ch=$.input`
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
`,Py=$.div`
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
  ${ch}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Er}
    outline-offset: -8px;
  }
`,Dy=$.span`
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
`,Ly=v.forwardRef(({value:e,defaultValue:t,onChange:n=Hn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=hn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=c=>{const h=c.target.value;u(h),n(c)};return A.createElement(Ty,{disabled:r,as:"div",variant:o,size:"md"},A.createElement(ch,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),A.createElement(Py,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&A.createElement(Ry,{orientation:"vertical"}),A.createElement(Dy,{$disabled:r,variant:o}))});Ly.displayName="ColorInput";const zy=$.div`
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
`,Zc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],By=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Oy({digit:e=0,pixelSize:t=2,...n}){const r=By[Number(e)].map((o,l)=>o?`${Zc[l]} active`:Zc[l]);return A.createElement(zy,{pixelSize:t,...n},r.map((o,l)=>A.createElement("span",{className:o,key:l})))}const _y=$.div`
  ${me({style:"status"})}
  display: inline-flex;
  background: #000000;
`,My={sm:1,md:2,lg:3,xl:4},Fy=v.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=v.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return A.createElement(_y,{ref:o,...r},l.map((i,a)=>A.createElement(Oy,{digit:i,pixelSize:My[n],key:a})))});Fy.displayName="Counter";const dh=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Pe.md};
`,Uy=$($t).attrs({"data-testid":"variant-default"})`
  ${dh}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Qy=$.div.attrs({"data-testid":"variant-flat"})`
  ${On()}
  ${dh}
  position: relative;
`,fh=P`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&yt()}
`,Hy=$.input`
  ${fh}
  padding: 0 8px;
`,Wy=$.textarea`
  ${fh}
  padding: 8px;
  resize: none;
  ${({variant:e})=>mu(e)}
`,ph=v.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Hn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Qy:Uy,g=v.useMemo(()=>{var c;return a.multiline?A.createElement(Wy,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):A.createElement(Hy,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=a.type)!==null&&c!==void 0?c:"text",variant:i,...a})},[t,r,a,s,i]);return A.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});ph.displayName="TextInput";const Vy=$.div`
  display: inline-flex;
  align-items: center;
`,ss=$(ie)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,Gy=$.div`
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
`,Xc=$.span`
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
  ${ss}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?P`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,hh=v.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:g="default",width:c,...h},y)=>{const[x,k]=hn({defaultValue:t,onChange:l,readOnly:i,value:u}),b=v.useCallback(E=>{const C=parseFloat(E.target.value);k(C)},[k]),f=v.useCallback(E=>{const C=Cn(parseFloat(((x??0)+E).toFixed(2)),o??null,r??null);k(C),l==null||l(C)},[r,o,l,k,x]),d=v.useCallback(()=>{x!==void 0&&(l==null||l(x))},[l,x]),p=v.useCallback(()=>{f(a)},[f,a]),w=v.useCallback(()=>{f(-a)},[f,a]),S=g==="flat"?"flat":"raised";return A.createElement(Vy,{className:e,style:{...s,width:c!==void 0?pn(c):"auto"},...h},A.createElement(ph,{value:x,variant:g,onChange:b,disabled:n,type:"number",readOnly:i,ref:y,fullWidth:!0,onBlur:d}),A.createElement(Gy,{variant:g},A.createElement(ss,{"data-testid":"increment",variant:S,disabled:n||i,onClick:p},A.createElement(Xc,{invert:!0})),A.createElement(ss,{"data-testid":"decrement",variant:S,disabled:n||i,onClick:w},A.createElement(Xc,null))))});hh.displayName="NumberInput";function Ky(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const mh=e=>v.useMemo(()=>Ky(),[e]),gh=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,vh=P`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,yu=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Yy=$.div`
  ${gh}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${yu}:focus & {
    ${vh}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,yh=P`
  height: ${Pe.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?yt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Jy=$($t)`
  ${yh}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Zy=$.div`
  ${On()}
  ${yh}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Xy=$.select`
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
  ${gh}
  cursor: pointer;
  &:disabled {
    ${yt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,xh=$(wi).attrs(()=>({"aria-hidden":"true"}))`
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
`,qy=$.span`
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
  ${xh}:active & {
    margin-top: 2px;
  }
`,e1=$.ul`
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
  box-shadow: ${pu};
  ${({variant:e="default"})=>e==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>mu(e)}
`,t1=$.li`
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
  ${({active:e})=>e?vh:""}
  user-select: none;
`,n1=[],wh=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=n1,readOnly:i,style:a,value:s,variant:u,width:g})=>{var c;const h=v.useMemo(()=>l.filter(Boolean),[l]),[y,x]=hn({defaultValue:t??((c=h==null?void 0:h[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:i,value:s}),k=!(n||i),b=v.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),f=v.useMemo(()=>A.createElement(xh,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},A.createElement(qy,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),d=v.useMemo(()=>u==="flat"?Zy:Jy,[u]);return v.useMemo(()=>({isEnabled:k,options:h,value:y,setValue:x,wrapperProps:b,DropdownButton:f,Wrapper:d}),[f,d,k,h,x,y,b])},r1={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},o1=1e3,l1=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:g,selectRef:c,setValue:h,wrapperRef:y})=>{const x=v.useRef(null),k=v.useRef([]),b=v.useRef(0),f=v.useRef(0),d=v.useRef(),p=v.useRef("search"),w=v.useRef(""),S=v.useRef(),[E,C]=hn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),T=v.useMemo(()=>{const I=s.findIndex(F=>F.value===g);return b.current=Cn(I,0,null),s[I]},[s,g]),[M,z]=v.useState(s[0]),X=v.useCallback(I=>{const F=x.current,W=k.current[I];if(!W||!F){d.current=I;return}d.current=void 0;const J=F.clientHeight,le=F.scrollTop,Ie=F.scrollTop+J,Ae=W.offsetTop,nt=W.offsetHeight,Nt=W.offsetTop+W.offsetHeight;Ae<le&&F.scrollTo(0,Ae),Nt>Ie&&F.scrollTo(0,Ae-J+nt),W.focus({preventScroll:!0})},[x]),q=v.useCallback((I,{scroll:F}={})=>{var W;const J=s.length-1;let le;switch(I){case"first":{le=0;break}case"last":{le=J;break}case"next":{le=Cn(f.current+1,0,J);break}case"previous":{le=Cn(f.current-1,0,J);break}case"selected":{le=Cn((W=b.current)!==null&&W!==void 0?W:0,0,J);break}default:le=I}f.current=le,z(s[le]),F&&X(le)},[f,s,X]),fe=v.useCallback(({fromEvent:I})=>{C(!0),q("selected",{scroll:!0}),i==null||i({fromEvent:I})},[q,i,C]),pe=v.useCallback(()=>{p.current="search",w.current="",clearTimeout(S.current)},[]),se=v.useCallback(({focusSelect:I,fromEvent:F})=>{var W;n==null||n({fromEvent:F}),C(!1),z(s[0]),pe(),d.current=void 0,I&&((W=c.current)===null||W===void 0||W.focus())},[pe,n,s,c,C]),we=v.useCallback(({fromEvent:I})=>{E?se({focusSelect:!1,fromEvent:I}):fe({fromEvent:I})},[se,fe,E]),ke=v.useCallback((I,{fromEvent:F})=>{b.current!==I&&(b.current=I,h(s[I].value),t==null||t(s[I],{fromEvent:F}))},[t,s,h]),N=v.useCallback(({focusSelect:I,fromEvent:F})=>{ke(f.current,{fromEvent:F}),se({focusSelect:I,fromEvent:F})},[se,ke]),R=v.useCallback((I,{fromEvent:F,select:W})=>{var J;switch(p.current==="cycleFirstLetter"&&I!==w.current&&(p.current="search"),I===w.current?p.current="cycleFirstLetter":w.current+=I,p.current){case"search":{let le=s.findIndex(Ie=>{var Ae;return((Ae=Ie.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(w.current))===0});le<0&&(le=s.findIndex(Ie=>{var Ae;return((Ae=Ie.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(I))===0}),w.current=I),le>=0&&(W?ke(le,{fromEvent:F}):q(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=W?(J=b.current)!==null&&J!==void 0?J:-1:f.current;let Ie=s.findIndex((Ae,nt)=>{var Nt;return nt>le&&((Nt=Ae.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf(I))===0});Ie<0&&(Ie=s.findIndex(Ae=>{var nt;return((nt=Ae.label)===null||nt===void 0?void 0:nt.toLocaleUpperCase().indexOf(I))===0})),Ie>=0&&(W?ke(Ie,{fromEvent:F}):q(Ie,{scroll:!0}));break}}clearTimeout(S.current),S.current=setTimeout(()=>{p.current==="search"&&(w.current="")},o1)},[q,s,ke]),L=v.useCallback(I=>{var F;I.button===0&&(I.preventDefault(),(F=c.current)===null||F===void 0||F.focus(),we({fromEvent:I}),l==null||l(I))},[l,c,we]),G=v.useCallback(I=>{N({focusSelect:!0,fromEvent:I})},[N]),Q=v.useCallback(I=>{const{altKey:F,code:W,ctrlKey:J,metaKey:le,shiftKey:Ie}=I,{ARROW_DOWN:Ae,ARROW_UP:nt,END:Nt,ENTER:yn,ESC:Ht,HOME:Ai,SPACE:Si,TAB:Ir}=r1,xu=F||J||le||Ie;if(!(W===Ir&&(F||J||le)||W!==Ir&&xu))switch(W){case Ae:{if(I.preventDefault(),!E){fe({fromEvent:I});return}q("next",{scroll:!0});break}case nt:{if(I.preventDefault(),!E){fe({fromEvent:I});return}q("previous",{scroll:!0});break}case Nt:{if(I.preventDefault(),!E){fe({fromEvent:I});return}q("last",{scroll:!0});break}case yn:{if(!E)return;I.preventDefault(),N({focusSelect:!0,fromEvent:I});break}case Ht:{if(!E)return;I.preventDefault(),se({focusSelect:!0,fromEvent:I});break}case Ai:{if(I.preventDefault(),!E){fe({fromEvent:I});return}q("first",{scroll:!0});break}case Si:{I.preventDefault(),E?N({focusSelect:!0,fromEvent:I}):fe({fromEvent:I});break}case Ir:{if(!E)return;Ie||I.preventDefault(),N({focusSelect:!Ie,fromEvent:I});break}default:!xu&&W.match(/^Key/)&&(I.preventDefault(),I.stopPropagation(),R(W.replace(/^Key/,""),{select:!E,fromEvent:I}))}},[q,se,E,fe,R,N]),B=v.useCallback(I=>{Q(I),o==null||o(I)},[Q,o]),O=v.useCallback(I=>{q(I)},[q]),K=v.useCallback(I=>{E||(pe(),e==null||e(I))},[pe,e,E]),_=v.useCallback(I=>{pe(),r==null||r(I)},[pe,r]),H=v.useCallback(I=>{x.current=I,d.current!==void 0&&X(d.current)},[X]),Ee=v.useCallback((I,F)=>{k.current[F]=I,d.current===F&&X(d.current)},[X]);return v.useEffect(()=>{if(!E)return()=>{};const I=F=>{var W;const J=F.target;!((W=y.current)===null||W===void 0)&&W.contains(J)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[se,E,y]),v.useMemo(()=>({activeOption:M,handleActivateOptionIndex:O,handleBlur:K,handleButtonKeyDown:B,handleDropdownKeyDown:Q,handleFocus:_,handleMouseDown:L,handleOptionClick:G,handleSetDropdownRef:H,handleSetOptionRef:Ee,open:E,selectedOption:T}),[M,O,K,B,_,Q,L,G,H,Ee,E,T])},i1=v.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...g},c)=>{const{isEnabled:h,options:y,setValue:x,value:k,DropdownButton:b,Wrapper:f}=wh({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),d=v.useCallback(p=>{const w=y.find(S=>S.value===p.target.value);w&&(x(w.value),r==null||r(w,{fromEvent:p}))},[r,y,x]);return A.createElement(f,{className:e,style:{...i,width:u}},A.createElement(yu,null,A.createElement(Xy,{...g,disabled:n,onChange:h?d:Hn,ref:c,value:k},y.map((p,w)=>{var S;return A.createElement("option",{key:`${p.value}-${w}`,value:p.value},(S=p.label)!==null&&S!==void 0?S:p.value)})),b))});i1.displayName="SelectNative";function a1({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=v.useCallback(()=>{e(n)},[e,n]),s=v.useCallback(g=>{i(g,n)},[n,i]),u=mh();return A.createElement(t1,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function s1({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:c,onClose:h,onFocus:y,onKeyDown:x,onMouseDown:k,onOpen:b,open:f,options:d,readOnly:p,shadow:w=!0,style:S,variant:E="default",value:C,width:T="auto",...M},z){const{isEnabled:X,options:q,setValue:fe,value:pe,wrapperProps:se,DropdownButton:we,Wrapper:ke}=wh({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:d,style:S,readOnly:p,value:C,variant:E,width:T}),N=v.useRef(null),R=v.useRef(null),L=v.useRef(null),{activeOption:G,handleActivateOptionIndex:Q,handleBlur:B,handleButtonKeyDown:O,handleDropdownKeyDown:K,handleFocus:_,handleMouseDown:H,handleOptionClick:Ee,handleSetDropdownRef:I,handleSetOptionRef:F,open:W,selectedOption:J}=l1({onBlur:g,onChange:c,onClose:h,onFocus:y,onKeyDown:x,onMouseDown:k,onOpen:b,open:f,options:q,value:pe,selectRef:R,setValue:fe,wrapperRef:L});v.useImperativeHandle(z,()=>({focus:yn=>{var Ht;(Ht=R.current)===null||Ht===void 0||Ht.focus(yn)},node:N.current,value:String(pe)}),[pe]);const le=v.useMemo(()=>J?typeof l=="function"?l(J):J.label:"",[l,J]),Ie=X?1:void 0,Ae=v.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),nt=mh(),Nt=v.useMemo(()=>q.map((yn,Ht)=>{const Ai=`${pe}-${Ht}`,Si=yn===G,Ir=yn===J;return A.createElement(a1,{activateOptionIndex:Q,active:Si,index:Ht,key:Ai,onClick:Ee,option:yn,selected:Ir,setRef:F})}),[G,Q,Ee,F,q,J,pe]);return A.createElement(ke,{...se,$disabled:o,ref:L,shadow:w,style:{...S,width:T}},A.createElement("input",{name:u,ref:N,type:"hidden",value:String(pe),...i}),A.createElement(yu,{"aria-disabled":o,"aria-expanded":W,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":X&&W?nt:void 0,onBlur:B,onFocus:_,onKeyDown:O,onMouseDown:X?H:k,ref:R,role:"button",tabIndex:Ie,...M},A.createElement(Yy,null,le),we),X&&W&&A.createElement(e1,{id:nt,onKeyDown:K,ref:I,role:"listbox",style:Ae,tabIndex:0,variant:E},Nt))}const kh=v.forwardRef(s1);kh.displayName="Select";const u1=$.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Kl=v.forwardRef(function({children:t,noPadding:n=!1,...r},o){return A.createElement(u1,{noPadding:n,ref:o,...r},t)});Kl.displayName="Toolbar";const c1=$.div`
  padding: 16px;
`,Bt=v.forwardRef(function({children:t,...n},r){return A.createElement(c1,{ref:r,...n},t)});Bt.displayName="WindowContent";const d1=$.div`
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

  ${wi} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Ot=v.forwardRef(function({active:t=!0,children:n,...r},o){return A.createElement(d1,{active:t,ref:o,...r},n)});Ot.displayName="WindowHeader";const f1=$.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${me({style:"window"})}
  ${xt()}
`,p1=$.span`
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
`,In=v.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>A.createElement(f1,{ref:l,shadow:r,...o},e,t&&A.createElement(p1,{"data-testid":"resizeHandle",ref:n})));In.displayName="Window";const h1=$(ah)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,m1=$.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,g1=$.div`
  display: flex;
  flex-wrap: wrap;
`,jt=$.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,v1=$.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,y1=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function x1(e,t){return new Date(e,t+1,0).getDate()}function w1(e,t,n){return new Date(e,t,n).getDay()}function k1(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const A1=v.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=v.useState(()=>k1(t)),{year:s,month:u,day:g}=i,c=v.useCallback(({value:b})=>{a(f=>({...f,month:b}))},[]),h=v.useCallback(b=>{a(f=>({...f,year:b}))},[]),y=v.useCallback(b=>{a(f=>({...f,day:b}))},[]),x=v.useCallback(()=>{const b=[i.year,i.month+1,i.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(b)},[i.day,i.month,i.year,n]),k=v.useMemo(()=>{const b=Array.from({length:42}),f=w1(s,u,1);let d=g;const p=x1(s,u);return d=d<p?d:p,b.forEach((w,S)=>{if(S>=f&&S<p+f){const E=S-f+1;b[S]=A.createElement(jt,{key:S,onClick:()=>{y(E)}},A.createElement(v1,{active:E===d},E))}else b[S]=A.createElement(jt,{key:S})}),b},[g,y,u,s]);return A.createElement(In,{className:e,ref:l,shadow:o,style:{margin:20}},A.createElement(Ot,null,A.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),A.createElement(Bt,null,A.createElement(Kl,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(kh,{options:y1,value:u,onChange:c,width:128,menuMaxHeight:200}),A.createElement(hh,{value:s,onChange:h,width:100})),A.createElement(h1,null,A.createElement(m1,null,A.createElement(jt,null,"S"),A.createElement(jt,null,"M"),A.createElement(jt,null,"T"),A.createElement(jt,null,"W"),A.createElement(jt,null,"T"),A.createElement(jt,null,"F"),A.createElement(jt,null,"S")),A.createElement(g1,null,k)),A.createElement(Kl,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(ie,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),A.createElement(ie,{fullWidth:!0,onClick:n?x:void 0,disabled:!n},"OK"))))});A1.displayName="DatePicker";const S1=e=>{switch(e){case"status":case"well":return P`
        ${me({style:"status"})}
      `;case"window":case"outside":return P`
        ${me({style:"window"})}
      `;case"field":return P`
        ${me({style:"field"})}
      `;default:return P`
        ${me()}
      `}},b1=$.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>S1(e)}
  ${({variant:e})=>xt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,E1=v.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>A.createElement(b1,{ref:o,shadow:t,variant:n,...r},e));E1.displayName="Frame";const C1=$.fieldset`
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
  ${e=>e.$disabled&&yt()}
`,$1=$.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,N1=v.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>A.createElement(C1,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&A.createElement($1,{variant:n},e),r));N1.displayName="GroupBox";const j1=$.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${pn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;j1.displayName="Handle";const I1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",T1=$.div`
  display: inline-block;
  height: ${({size:e})=>pn(e)};
  width: ${({size:e})=>pn(e)};
`,R1=$.span`
  display: block;
  background: ${I1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,P1=v.forwardRef(({size:e=30,...t},n)=>A.createElement(T1,{size:e,ref:n,...t},A.createElement(R1,null)));P1.displayName="Hourglass";const D1=$.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,L1=$.div`
  position: relative;
`,z1=$.div`
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
`,B1=$($t).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,O1=$.div`
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
`,_1=v.forwardRef(({backgroundStyles:e,children:t,...n},r)=>A.createElement(D1,{ref:r,...n},A.createElement(L1,null,A.createElement(z1,null,A.createElement(B1,{style:e},t)),A.createElement(O1,null))));_1.displayName="Monitor";const M1=$.div`
  display: inline-block;
  height: ${Pe.md};
  width: 100%;
`,F1=$($t)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ah=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,U1=$.div`
  position: relative;
  top: 4px;
  ${Ah}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Q1=$.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ah}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,H1=$.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Sh=17,W1=$.span`
  display: inline-block;
  width: ${Sh}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,V1=v.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=v.useRef(null),[s,u]=v.useState([]),g=v.useCallback(()=>{if(!a.current||n===void 0)return;const c=a.current.getBoundingClientRect().width,h=Math.round(n/100*c/Sh);u(Array.from({length:h}))},[n]);return v.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),A.createElement(M1,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},A.createElement(F1,{variant:r,shadow:t},r==="default"?A.createElement(A.Fragment,null,A.createElement(U1,{"data-testid":"defaultProgress1"},i),A.createElement(Q1,{"data-testid":"defaultProgress2",value:n},i)):A.createElement(H1,{ref:a,"data-testid":"tileProgress"},s.map((c,h)=>A.createElement(W1,{key:h})))))});V1.displayName="ProgressBar";const bh=P`
  width: ${Ct}px;
  height: ${Ct}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,G1=$($t)`
  ${bh}
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
`,K1=$.div`
  ${On()}
  ${bh}
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
`,Y1=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,J1={flat:K1,default:G1},Z1=v.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=J1[i];return A.createElement(gu,{$disabled:n,className:t,style:l},A.createElement(u,{$disabled:n,role:"presentation"},e&&A.createElement(Y1,{$disabled:n,variant:i})),A.createElement(Gl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&A.createElement(vu,null,r))});Z1.displayName="Radio";const X1=typeof window<"u"?v.useLayoutEffect:v.useEffect;function xn(e){const t=v.useRef(e);return X1(()=>{t.current=e}),v.useCallback((...n)=>(0,t.current)(...n),[])}function qc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function ed(e,t){return v.useMemo(()=>e==null&&t==null?null:n=>{qc(e,n),qc(t,n)},[e,t])}let ki=!0,us=!1,td;const q1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ex(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&q1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function tx(e){e.metaKey||e.altKey||e.ctrlKey||(ki=!0)}function ta(){ki=!1}function nx(){this.visibilityState==="hidden"&&us&&(ki=!0)}function rx(e){e.addEventListener("keydown",tx,!0),e.addEventListener("mousedown",ta,!0),e.addEventListener("pointerdown",ta,!0),e.addEventListener("touchstart",ta,!0),e.addEventListener("visibilitychange",nx,!0)}function ox(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return ki||ex(t)}function lx(){us=!0,window.clearTimeout(td),td=window.setTimeout(()=>{us=!1},100)}function ix(){const e=v.useCallback(t=>{const n=Sp.findDOMNode(t);n!=null&&rx(n.ownerDocument)},[]);return{isFocusVisible:ox,onBlurVisible:lx,ref:e}}function ax(e,t,n){return(n-t)*e+t}function Xo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function qo(e){return e&&e.ownerDocument||document}function sx(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const ux=$.div`
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
`,Eh=()=>P`
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
`,cx=$($t)`
  ${Eh()}
`,dx=$($t)`
  ${Eh()}

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
`,fx=$.span`
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
          ${On()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:P`
          ${xt()}
          ${me()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&To({mainColor:t.material,secondaryColor:t.borderLightest})}
`,ar=6,px=$.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?P`
          right: ${-ar-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${ar}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:P`
          bottom: ${-ar}px;
          height: ${ar}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&P`
      ${yt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,hx=$.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?P`
          transform: translate(${ar+2}px, ${ar+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,mx=v.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:c=1,value:h,variant:y="default",...x},k)=>{const b=y==="flat"?dx:cx,f=u==="vertical",[d=o,p]=hn({defaultValue:e,onChange:i??a,value:h}),{isFocusVisible:w,onBlurVisible:S,ref:E}=ix(),[C,T]=v.useState(!1),M=v.useRef(),z=v.useRef(null),X=ed(E,M),q=ed(k,X),fe=xn(B=>{w(B)&&T(!0)}),pe=xn(()=>{C!==!1&&(T(!1),S())}),se=v.useRef(),we=v.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((B,O)=>({label:void 0,value:o+c*O})):Array.isArray(n)?n:[],[n,r,o,c]),ke=xn(B=>{const O=(r-o)/10,K=we.map(Ee=>Ee.value),_=K.indexOf(d);let H=0;switch(B.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":c&&(H=d+O);break;case"PageDown":c&&(H=d-O);break;case"ArrowRight":case"ArrowUp":c?H=d+c:H=K[_+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":c?H=d-c:H=K[_-1]||K[0];break;default:return}B.preventDefault(),c&&(H=Jc(H,c,o)),H=Cn(H,o,r),p(H),T(!0),i==null||i(H),a==null||a(H)}),N=v.useCallback(B=>{if(!M.current)return 0;const O=M.current.getBoundingClientRect();let K;f?K=(O.bottom-B.y)/O.height:K=(B.x-O.left)/O.width;let _;if(_=ax(K,o,r),c)_=Jc(_,c,o);else{const H=we.map(I=>I.value),Ee=sx(H,_);_=H[Ee]}return _=Cn(_,o,r),_},[we,r,o,c,f]),R=xn(B=>{var O;const K=Xo(B,se.current);if(!K)return;const _=N(K);(O=z.current)===null||O===void 0||O.focus(),p(_),T(!0),i==null||i(_)}),L=xn(B=>{const O=Xo(B,se.current);if(!O)return;const K=N(O);a==null||a(K),se.current=void 0;const _=qo(M.current);_.removeEventListener("mousemove",R),_.removeEventListener("mouseup",L),_.removeEventListener("touchmove",R),_.removeEventListener("touchend",L)}),G=xn(B=>{var O;s==null||s(B),B.preventDefault(),(O=z.current)===null||O===void 0||O.focus(),T(!0);const K=Xo(B,se.current);if(K){const H=N(K);p(H),i==null||i(H)}const _=qo(M.current);_.addEventListener("mousemove",R),_.addEventListener("mouseup",L)}),Q=xn(B=>{var O;B.preventDefault();const K=B.changedTouches[0];K!=null&&(se.current=K.identifier),(O=z.current)===null||O===void 0||O.focus(),T(!0);const _=Xo(B,se.current);if(_){const Ee=N(_);p(Ee),i==null||i(Ee)}const H=qo(M.current);H.addEventListener("touchmove",R),H.addEventListener("touchend",L)});return v.useEffect(()=>{const{current:B}=M;B==null||B.addEventListener("touchstart",Q);const O=qo(B);return()=>{B==null||B.removeEventListener("touchstart",Q),O.removeEventListener("mousemove",R),O.removeEventListener("mouseup",L),O.removeEventListener("touchmove",R),O.removeEventListener("touchend",L)}},[L,R,Q]),A.createElement(ux,{$disabled:t,hasMarks:!!we.length,isFocused:C,onMouseDown:G,orientation:u,ref:q,size:pn(g),...x},A.createElement("input",{disabled:t,name:l,type:"hidden",value:d??0}),we&&we.map(B=>A.createElement(px,{$disabled:t,"data-testid":"tick",key:B.value/(r-o)*100,orientation:u,style:{[f?"bottom":"left"]:`${(B.value-o)/(r-o)*100}%`}},B.label&&A.createElement(hx,{"aria-hidden":!0,"data-testid":"mark",orientation:u},B.label))),A.createElement(b,{orientation:u,variant:y}),A.createElement(fx,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":d,onBlur:pe,onFocus:fe,onKeyDown:ke,orientation:u,ref:z,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(d-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:y}))});mx.displayName="Slider";const gx=$.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${hu};
  overflow-y: auto;
`,vx=v.forwardRef(function({children:t,...n},r){return A.createElement(gx,{ref:r,...n},t)});vx.displayName="TableBody";const yx=$.td`
  padding: 0 8px;
`,xx=v.forwardRef(function({children:t,...n},r){return A.createElement(yx,{ref:r,...n},t)});xx.displayName="TableDataCell";const wx=$.thead`
  display: table-header-group;
`,kx=v.forwardRef(function({children:t,...n},r){return A.createElement(wx,{ref:r,...n},t)});kx.displayName="TableHead";const Ax=$.th`
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
    ${me()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&P`
      &:active {
        &:before {
          ${me({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&yt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&yt()}
  }
`,Sx=v.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Hn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return A.createElement(Ax,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},A.createElement("div",null,n))});Sx.displayName="TableHeadCell";const bx=$.tr`
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
`,Ex=v.forwardRef(function({children:t,...n},r){return A.createElement(bx,{ref:r,...n},t)});Ex.displayName="TableRow";const Cx=$.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,$x=$($t)`
  &:before {
    box-shadow: none;
  }
`,Nx=v.forwardRef(({children:e,...t},n)=>A.createElement($x,null,A.createElement(Cx,{ref:n,...t},e)));Nx.displayName="Table";const jx=$.button`
  ${xt()}
  ${me()}
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
    ${Er}
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
`,Ix=v.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>A.createElement(jx,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));Ix.displayName="Tab";const Tx=$.div`
  ${xt()}
  ${me()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Rx=v.forwardRef(({children:e,...t},n)=>A.createElement(Tx,{ref:n,...t},e));Rx.displayName="TabBody";const Px=$.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Dx=$.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function Lx(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const zx=v.forwardRef(({value:e,onChange:t=Hn,children:n,rows:r=1,...o},l)=>{const i=v.useMemo(()=>{var a;const s=(a=A.Children.map(n,c=>{if(!A.isValidElement(c))return null;const h={selected:c.props.value===e,onClick:t};return A.cloneElement(c,h)}))!==null&&a!==void 0?a:[],u=Lx(s,r).map((c,h)=>({key:h,tabs:c})),g=u.findIndex(c=>c.tabs.some(h=>h.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return A.createElement(Px,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>A.createElement(Dx,{key:a.key},a.tabs)))});zx.displayName="Tabs";const Bx=["blur","focus"],Ox=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function nd(e){return"nativeEvent"in e&&Bx.includes(e.type)}function rd(e){return"nativeEvent"in e&&Ox.includes(e.type)}const _x={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Mx=$.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${pu};
  text-align: center;
  font-size: 1rem;
  ${e=>_x[e.position]}
`,Fx=$.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Ux=v.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:c,style:h,text:y,position:x="top",...k},b)=>{const[f,d]=v.useState(!1),[p,w]=v.useState(),[S,E]=v.useState(),C=!n,T=!r,M=N=>{window.clearTimeout(p),window.clearTimeout(S);const R=window.setTimeout(()=>{d(!0),c==null||c(N)},o);w(R)},z=N=>{N.persist(),nd(N)?s==null||s(N):rd(N)&&(u==null||u(N)),M(N)},X=N=>{window.clearTimeout(p),window.clearTimeout(S);const R=window.setTimeout(()=>{d(!1),a==null||a(N)},l);E(R)},q=N=>{N.persist(),nd(N)?i==null||i(N):rd(N)&&(g==null||g(N)),X(N)},fe=C?q:void 0,pe=C?z:void 0,se=T?z:void 0,we=T?q:void 0,ke=C?0:void 0;return A.createElement(Fx,{"data-testid":"tooltip-wrapper",onBlur:fe,onFocus:pe,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},A.createElement(Mx,{className:e,"data-testid":"tooltip",position:x,ref:b,show:f,style:h,...k},y),t)});Ux.displayName="Tooltip";const cs=$(vu)`
  white-space: nowrap;
`,Ch=P`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${cs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Qx=$.ul`
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
`,Hx=$.li`
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
`,Wx=$.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Vx=$.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Ch};

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
`,od=$(gu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Ch};
`,Gx=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function ld(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function id(e){e.preventDefault()}function $h({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,g=v.useCallback(c=>{var h,y;const x=!!(c.items&&c.items.length>0),k=n.includes(c.id),b=(h=t||c.disabled)!==null&&h!==void 0?h:!1,f=b?id:S=>l(S,c),d=b?id:S=>l(S,c),p=i===c.id,w=A.createElement(Gx,{"aria-hidden":!0},c.icon);return A.createElement(Hx,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":k,"aria-selected":p,hasItems:x},x?A.createElement(Wx,{open:k},A.createElement(Vx,{onClick:f,$disabled:b},A.createElement(od,{$disabled:b},w,A.createElement(cs,null,c.label))),k&&A.createElement($h,{className:e,disabled:b,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(y=c.items)!==null&&y!==void 0?y:[]})):A.createElement(od,{as:"button",$disabled:b,onClick:d},w,A.createElement(cs,null,c.label)))},[e,t,n,u,o,l,i,a]);return A.createElement(Qx,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function Kx({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},g){const[c,h]=hn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[y,x]=hn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),k=v.useCallback((d,p)=>{if(i){const w=ld(c,p);i(d,w)}h(w=>ld(w,p))},[c,i,h]),b=v.useCallback((d,p)=>{x(p),l&&l(d,p)},[l,x]),f=v.useCallback((d,p)=>{d.preventDefault(),b(d,p.id),p.items&&p.items.length&&k(d,p.id)},[b,k]);return A.createElement($h,{className:e,disabled:r,expanded:c,level:0,innerRef:g,select:f,selected:y,style:s,tree:u})}const Yx=v.forwardRef(Kx);Yx.displayName="TreeView";const Jx=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href;function Zx(){const[e,t]=v.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=l=>{t({...e,[l]:{...e[l],open:!e[l].open,minimized:!1}})},r=l=>{t({...e,[l]:{...e[l],minimized:!e[l].minimized}})},o=l=>{const i=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[l]:{...e[l],zIndex:i+1}})};return m.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${Jx})`},children:[m.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[m.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[m.jsx("div",{className:"w-9 h-9 bg-white border-2 border-black flex items-center justify-center mb-1",children:m.jsx("span",{children:"A"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),m.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[m.jsx("div",{className:"w-9 h-9 bg-white border-2 border-black flex items-center justify-center mb-1",children:m.jsx("span",{children:"P"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),m.jsxs(Ye,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[m.jsx("div",{className:"w-9 h-9 bg-white border-2 border-black flex items-center justify-center mb-1",children:m.jsx("span",{children:"B"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&m.jsxs(In,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[m.jsxs(Ot,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"Welcome to DanielleOS"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>n("about"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsx(Bt,{children:m.jsxs("div",{className:"text-center p-6",children:[m.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),m.jsx("p",{className:"text-lg mb-3",children:"Software Engineer"}),m.jsx("p",{className:"italic mb-8",children:"Passionate about building innovative solutions"}),m.jsx(ie,{onClick:()=>n("welcome"),children:"OK"})]})})]}),e.about.open&&!e.about.minimized&&m.jsxs(In,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[m.jsxs(Ot,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"About Me"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>r("about"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsxs(Bt,{children:[m.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),m.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),m.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"React"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),m.jsx("div",{className:"flex justify-end",children:m.jsx(Ye,{to:"/about",children:m.jsx(ie,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&m.jsxs(In,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[m.jsxs(Ot,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"My Projects"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>r("projects"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsxs(Bt,{children:[m.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"font-bold mb-1",children:"Project A"}),m.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:"[Preview]"})]}),m.jsxs("div",{children:[m.jsx("p",{className:"font-bold mb-1",children:"Project B"}),m.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:"[Preview]"})]})]}),m.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),m.jsx("div",{className:"flex justify-end",children:m.jsx(Ye,{to:"/projects",children:m.jsx(ie,{children:"View All Projects →"})})})]})]}),m.jsx(ih,{style:{position:"fixed",bottom:0,top:"auto"},children:m.jsxs(Kl,{style:{justifyContent:"space-between"},children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(ie,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([l,{open:i}])=>i&&m.jsx(ie,{active:!e[l].minimized,onClick:()=>{e[l].minimized?(r(l),o(l)):r(l)},style:{fontSize:"12px",marginRight:"4px"},children:l==="welcome"?"Welcome":l==="about"?"About Me":l==="projects"?"My Projects":"Connect With Me"},l))]}),m.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})}const Xx=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,qx="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",ew=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,tw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,nw=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,rw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,ow=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,ad=$(In)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,_r=$.span`
  color: #4b00d9;
  font-weight: bold;
`,It=$.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,lw=()=>m.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${Xx})`},children:[m.jsx("div",{className:"absolute top-24 left-4",children:m.jsx("img",{src:qx,alt:"PMM"})}),m.jsx("div",{className:"absolute mid top-1/2 left-10",children:m.jsx("img",{src:ew,alt:"PMM"})}),m.jsxs("div",{className:"w-full max-w-4xl",children:[m.jsxs(ad,{className:"w-full mb-4",children:[m.jsxs(Ot,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#ABOUT ME"}),m.jsx(ie,{style:{marginLeft:"auto"},children:m.jsx("span",{className:"close-icon"})})]}),m.jsx(Bt,{className:"bg-[#FFFAF0] p-4",children:m.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[m.jsx("div",{className:"col-span-1",children:m.jsxs(It,{children:[m.jsx("img",{src:tw,alt:"Character avatar",className:"w-full"}),m.jsx("img",{src:nw,alt:"Character avatar",className:"w-full mt-2"}),m.jsx("img",{src:rw,alt:"Character avatar",className:"w-full mt-2"})]})}),m.jsxs("div",{className:"col-span-3 grid gap-4",children:[m.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[m.jsxs(It,{children:[m.jsx(_r,{children:"NAME:"})," Danielle"]}),m.jsxs(It,{children:[m.jsx(_r,{children:"AGE:"})," 20s"]}),m.jsxs(It,{children:[m.jsx(_r,{children:"LOCATION:"})," USA"]})]}),m.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[m.jsxs(It,{children:[m.jsx(_r,{children:"MBTI:"})," INFJ"]}),m.jsxs(It,{className:"col-span-2",children:[m.jsx(_r,{children:"ASTRO:"})," ♋♏♏"]})]}),m.jsxs(It,{children:[m.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),m.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),m.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub repo ",m.jsx("a",{href:"#",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),m.jsxs(ad,{className:"w-full",children:[m.jsxs(Ot,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#INTERESTS"}),m.jsx(ie,{style:{marginLeft:"auto"},children:m.jsx("span",{className:"close-icon"})})]}),m.jsx(Bt,{className:"bg-[#FFFAF0] p-4",children:m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs(It,{children:[m.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),m.jsxs("ul",{className:"list-disc pl-5",children:[m.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),m.jsx("li",{children:"Everything Everywhere All at Once"}),m.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),m.jsxs(It,{children:[m.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),m.jsxs("ul",{className:"list-disc pl-5",children:[m.jsx("li",{children:"Coding"}),m.jsx("li",{children:"Writing"}),m.jsx("li",{children:"Reading"})]})]})]})})]})]}),m.jsx("div",{className:"absolute bottom-4 right-4",children:m.jsx("img",{src:ow,alt:"strawberry"})})]}),sd=$(In)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,iw=$.div`
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
`,aw=$.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  transition: transform 0.1s;
`,sw=$.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`,uw=$.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`,cw=()=>{var i;const[e,t]=v.useState(null),[n,r]=v.useState(!0),o=[{id:"project1",title:"Project A",description:"This is a full-stack web application built with React and Node.js.",image:"/api/placeholder/500/300",link:"#",technologies:["React","Node.js","MongoDB"]},{id:"project2",title:"Project B",description:"A machine learning project focused on natural language processing.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","TensorFlow","NLTK"]},{id:"project3",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["React Native","Firebase"]},{id:"project4",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],l={project1:"https://win98icons.alexmeub.com/icons/png/notepad-1.png",project2:"https://win98icons.alexmeub.com/icons/png/msie1-2.png",project3:"https://win98icons.alexmeub.com/icons/png/winamp-1.png",project4:"https://win98icons.alexmeub.com/icons/png/paint_old-0.png",project5:"https://win98icons.alexmeub.com/icons/png/cd_drive-4.png",project6:"https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"};return m.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[m.jsxs(uw,{children:[m.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>m.jsxs(iw,{onClick:()=>t(a.id),children:[m.jsx(aw,{className:"icon-image",src:l[a.id],alt:a.title}),m.jsx(sw,{children:a.title})]},a.id))]}),n&&m.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:m.jsxs(sd,{children:[m.jsxs(Ot,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#PROJECTS"}),m.jsx(ie,{style:{marginLeft:"auto"},onClick:()=>r(!1),children:m.jsx("span",{children:"×"})})]}),m.jsxs(Bt,{className:"bg-white p-4",children:[m.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),m.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsxs(sd,{className:"w-4/5 max-w-4xl",children:[m.jsxs(Ot,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:a.title}),m.jsx(ie,{style:{marginLeft:"auto"},onClick:()=>t(null),children:m.jsx("span",{children:"×"})})]}),m.jsx(Bt,{className:"bg-white p-4",children:m.jsxs("div",{className:"flex flex-col",children:[m.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),m.jsx("p",{className:"mb-4",children:a.description}),m.jsxs("div",{className:"mb-4",children:[m.jsx("strong",{children:"Technologies:"}),m.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>m.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),m.jsxs("div",{className:"flex justify-end",children:[m.jsx(ie,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),m.jsx(ie,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),m.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[m.jsx(ie,{className:"mr-3",children:m.jsxs("span",{className:"flex items-center text-sm",children:[m.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),m.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&m.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[m.jsx("img",{src:l[e],alt:"Running",className:"w-4 h-4 mr-1"}),(i=o.find(a=>a.id===e))==null?void 0:i.title]})]})]})},na=[{id:1,title:"Best Foot Forward: My time with Project oCEANIC in Hawaii",excerpt:"Learn how to set up a new React project with TypeScript and start building type-safe applications.",date:"2025-03-01"},{id:2,title:"Building Modern UIs with Tailwind CSS",excerpt:"Explore the power of utility-first CSS with Tailwind and create beautiful user interfaces.",date:"2025-02-28"}];function dw(){const[e,t]=v.useState(null),[n,r]=v.useState({}),[o,l]=v.useState({}),i=c=>{const h=Object.keys(o).length*25,y=100+h%150,x=100+h%200,k=Object.values(o).map(f=>f.zIndex),b=k.length>0?Math.max(...k):0;t(c),r({...n,[c]:{minimized:!1,maximized:!1}}),l({...o,[c]:{top:y,left:x,zIndex:b+1}})},a=c=>{const h={...n};delete h[c];const y={...o};delete y[c],r(h),l(y),e===c&&t(null)},s=c=>{r({...n,[c]:{...n[c],minimized:!n[c].minimized}})},u=c=>{r({...n,[c]:{...n[c],maximized:!n[c].maximized}})},g=c=>{const h=Object.values(o).map(x=>x.zIndex),y=Math.max(...h);l({...o,[c]:{...o[c],zIndex:y+1}}),t(c)};return m.jsxs("div",{className:"min-h-screen bg-blue-100 pt-16 px-4 pb-12 font-mono",children:[m.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-blue-200 to-blue-400 z-0 pointer-events-none"}),m.jsxs("div",{className:"mx-auto max-w-4xl bg-gray-200 border border-gray-400 shadow-lg mt-8",children:[m.jsxs("div",{className:"bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center",children:[m.jsx("span",{children:"Blog Directory"}),m.jsxs("div",{className:"flex",children:[m.jsx("span",{className:"mr-2 cursor-pointer",children:"_"}),m.jsx("span",{className:"cursor-pointer",children:"×"})]})]}),m.jsxs("div",{className:"p-4",children:[m.jsx("h1",{className:"text-xl font-bold mb-4",children:"My Blog Posts"}),m.jsx("div",{className:"grid gap-4",children:na.map(c=>m.jsx("div",{className:"bg-white border border-gray-400 p-3 cursor-pointer hover:bg-gray-100",onDoubleClick:()=>i(c.id),children:m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"w-8 h-8 mr-3 bg-gray-300 border border-gray-400 flex items-center justify-center text-xs",children:"TXT"}),m.jsxs("div",{children:[m.jsx("h2",{className:"font-bold text-sm",children:c.title}),m.jsxs("p",{className:"text-xs text-gray-600",children:["Last modified: ",c.date]})]})]}),m.jsx("button",{className:"bg-gray-300 text-xs px-2 py-0.5 border border-gray-400 hover:bg-gray-400",onClick:h=>{h.stopPropagation(),i(c.id)},children:"Open"})]})},c.id))}),m.jsx("div",{className:"mt-4 text-sm text-gray-600",children:m.jsx("p",{children:'Double-click on a post to open it, or click the "Open" button.'})})]})]}),Object.entries(n).map(([c,h])=>{const y=parseInt(c),x=na.find(b=>b.id===y),k=o[y];return!x||!k||h.minimized?null:m.jsxs("div",{className:`absolute bg-gray-200 border border-gray-400 shadow-lg ${h.maximized?"inset-4 mt-8 mb-12":""}`,style:{top:h.maximized?void 0:k.top,left:h.maximized?void 0:k.left,width:h.maximized?void 0:"500px",height:h.maximized?void 0:"auto",zIndex:k.zIndex},onClick:()=>g(y),children:[m.jsxs("div",{className:"bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center cursor-move",children:[m.jsx("span",{children:x.title}),m.jsxs("div",{className:"flex",children:[m.jsx("span",{className:"mr-2 cursor-pointer",onClick:()=>s(y),children:"_"}),m.jsx("span",{className:"mr-2 cursor-pointer",onClick:()=>u(y),children:h.maximized?m.jsx(lv,{size:14}):m.jsx(rv,{size:14})}),m.jsx("span",{className:"cursor-pointer",onClick:()=>a(y),children:"×"})]})]}),m.jsxs("div",{className:"p-4 max-h-[70vh] overflow-auto",children:[m.jsx("div",{className:"font-bold mb-2",children:x.title}),m.jsxs("div",{className:"text-xs text-gray-600 mb-4",children:["Date: ",x.date]}),m.jsxs("div",{className:"bg-white border border-gray-400 p-3 mb-4",children:[m.jsx("p",{className:"mb-4",children:x.excerpt}),m.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl."}),m.jsx("p",{children:"Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl."})]}),m.jsxs("div",{className:"flex justify-between",children:[m.jsx(Ye,{to:`/blog/${y}`,className:"bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400",children:"Read Full Article"}),m.jsx("button",{className:"bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400",onClick:()=>a(y),children:"Close"})]})]})]},y)}),m.jsxs("div",{className:"fixed bottom-0 left-0 right-0 h-8 bg-gray-200 border-t border-gray-400 flex items-center px-2 z-50",children:[m.jsx("div",{className:"mr-4 font-bold px-2 py-1 bg-blue-100 border border-gray-400 rounded",children:"Start"}),Object.entries(n).map(([c,h])=>{const y=parseInt(c),x=na.find(k=>k.id===y);return x?m.jsx("div",{className:`px-2 py-1 text-xs border border-gray-400 mx-1 cursor-pointer max-w-[150px] truncate ${e===y?"bg-blue-100":"bg-gray-300"}`,onClick:()=>{h.minimized&&s(y),g(y)},children:x.title},y):null})]})]})}var fw={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},pw=fw;const hw=ud(pw),mw=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,gw=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,vw=cy`
  ${sv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${mw}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${gw}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;function yw(){return m.jsxs("div",{children:[m.jsx(vw,{}),m.jsx(ay,{theme:hw,children:m.jsx(Zg,{children:m.jsxs("div",{className:"min-h-screen bg-gray-50",children:[m.jsx(av,{}),m.jsx("main",{children:m.jsxs(Hg,{children:[m.jsx(Hr,{path:"/",element:m.jsx(Zx,{})}),m.jsx(Hr,{path:"/about",element:m.jsx(lw,{})}),m.jsx(Hr,{path:"/projects",element:m.jsx(cw,{})}),m.jsx(Hr,{path:"/blog",element:m.jsx(dw,{})})]})})]})})})]})}bp(document.getElementById("root")).render(m.jsx(v.StrictMode,{children:m.jsx(yw,{})}));
