function Ip(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Zl={},pd={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),Rp=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),Fp=Symbol.for("react.lazy"),bu=Symbol.iterator;function Up(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gd=Object.assign,vd={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=vd,this.updater=n||md}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=Cr.prototype;function ps(e,t,n){this.props=e,this.context=t,this.refs=vd,this.updater=n||md}var ms=ps.prototype=new yd;ms.constructor=ps;gd(ms,Cr.prototype);ms.isPureReactComponent=!0;var Su=Array.isArray,xd=Object.prototype.hasOwnProperty,gs={current:null},wd={key:!0,ref:!0,__self:!0,__source:!0};function kd(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)xd.call(t,r)&&!wd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Eo,type:e,key:l,ref:i,props:o,_owner:gs.current}}function Qp(e,t){return{$$typeof:Eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eo}function Wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eu=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wp(""+e.key):t.toString(36)}function el(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Eo:case Tp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ci(i,0):r,Su(o)?(n="",e!=null&&(n=e.replace(Eu,"$&/")+"/"),el(o,t,n,"",function(u){return u})):o!=null&&(vs(o)&&(o=Qp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Eu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Su(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ci(l,a);i+=el(l,t,n,s,o)}else if(s=Up(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ci(l,a++),i+=el(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function To(e,t,n){if(e==null)return e;var r=[],o=0;return el(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},tl={transition:null},Vp={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:tl,ReactCurrentOwner:gs};function Ad(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Cr;V.Fragment=Rp;V.Profiler=Dp;V.PureComponent=ps;V.StrictMode=Pp;V.Suspense=zp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;V.act=Ad;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gd({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=gs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xd.call(t,s)&&!wd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Eo,type:e.type,key:o,ref:l,props:r,_owner:i}};V.createContext=function(e){return e={$$typeof:Op,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lp,_context:e},e.Consumer=e};V.createElement=kd;V.createFactory=function(e){var t=kd.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:_p,render:e}};V.isValidElement=vs;V.lazy=function(e){return{$$typeof:Fp,_payload:{_status:-1,_result:e},_init:Hp}};V.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=tl.transition;tl.transition={};try{e()}finally{tl.transition=t}};V.unstable_act=Ad;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";pd.exports=V;var v=pd.exports;const x=fd(v),Gp=Ip({__proto__:null,default:x},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=v,Yp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),Zp=Object.prototype.hasOwnProperty,Xp=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qp={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Zp.call(t,r)&&!qp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Yp,type:e,key:l,ref:i,props:o,_owner:Xp.current}}Zl.Fragment=Jp;Zl.jsx=bd;Zl.jsxs=bd;hd.exports=Zl;var m=hd.exports,Sd={exports:{}},et={},Ed={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var D=j.length;j.push(T);e:for(;0<D;){var G=D-1>>>1,Q=j[G];if(0<o(Q,T))j[G]=T,j[D]=Q,D=G;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],D=j.pop();if(D!==T){j[0]=D;e:for(var G=0,Q=j.length,O=Q>>>1;G<O;){var _=2*(G+1)-1,K=j[_],z=_+1,W=j[z];if(0>o(K,D))z<Q&&0>o(W,K)?(j[G]=W,j[z]=D,G=z):(j[G]=K,j[_]=D,G=_);else if(z<Q&&0>o(W,D))j[G]=W,j[z]=D,G=z;else break e}}return T}function o(j,T){var D=j.sortIndex-T.sortIndex;return D!==0?D:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],g=1,c=null,p=3,y=!1,w=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=j)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function k(j){if(A=!1,h(j),!w)if(n(s)!==null)w=!0,we(b);else{var T=n(u);T!==null&&ke(k,T.startTime-j)}}function b(j,T){w=!1,A&&(A=!1,f(I),I=-1),y=!0;var D=p;try{for(h(T),c=n(s);c!==null&&(!(c.expirationTime>T)||j&&!X());){var G=c.callback;if(typeof G=="function"){c.callback=null,p=c.priorityLevel;var Q=G(c.expirationTime<=T);T=e.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(s)&&r(s),h(T)}else r(s);c=n(s)}if(c!==null)var O=!0;else{var _=n(u);_!==null&&ke(k,_.startTime-T),O=!1}return O}finally{c=null,p=D,y=!1}}var E=!1,C=null,I=-1,B=5,L=-1;function X(){return!(e.unstable_now()-L<B)}function q(){if(C!==null){var j=e.unstable_now();L=j;var T=!0;try{T=C(!0,j)}finally{T?fe():(E=!1,C=null)}}else E=!1}var fe;if(typeof d=="function")fe=function(){d(q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,se=he.port2;he.port1.onmessage=q,fe=function(){se.postMessage(null)}}else fe=function(){S(q,0)};function we(j){C=j,E||(E=!0,fe())}function ke(j,T){I=S(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,we(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var D=p;p=T;try{return j()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=p;p=j;try{return T()}finally{p=D}},e.unstable_scheduleCallback=function(j,T,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=D+Q,j={id:g++,callback:T,priorityLevel:j,startTime:D,expirationTime:Q,sortIndex:-1},D>G?(j.sortIndex=D,t(u,j),n(s)===null&&j===n(u)&&(A?(f(I),I=-1):A=!0,ke(k,D-G))):(j.sortIndex=Q,t(s,j),w||y||(w=!0,we(b))),j},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(j){var T=p;return function(){var D=p;p=T;try{return j.apply(this,arguments)}finally{p=D}}}})(Cd);Ed.exports=Cd;var e1=Ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=v,qe=e1;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,no={};function zn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(no[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},$u={};function r1(e){return la.call($u,e)?!0:la.call(Cu,e)?!1:n1.test(e)?$u[e]=!0:(Cu[e]=!0,!1)}function o1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function l1(e,t,n,r){if(t===null||typeof t>"u"||o1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,xs);Pe[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,xs);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,xs);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,t,n,r){var o=Pe.hasOwnProperty(t)?Pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(l1(t,n,o,r)&&(n=null),r||o===null?r1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),As=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),bs=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Nd=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,$i;function Br(e){if($i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var ji=!1;function Mi(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function i1(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case ia:return"Profiler";case ks:return"StrictMode";case aa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case jd:return(e._context.displayName||"Context")+".Provider";case As:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bs:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function a1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s1(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=s1(e))}function Td(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rd(e,t){t=t.checked,t!=null&&ws(e,"checked",t,!1)}function da(e,t){Rd(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&fa(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fa(e,t,n){(t!=="number"||vl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Fr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Pd(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){u1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function _d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var c1=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(c1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function Ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,ur=null,cr=null;function Ru(e){if(e=jo(e)){if(typeof ya!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ni(t),ya(e.stateNode,e.type,t))}}function zd(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Bd(){if(ur){var e=ur,t=cr;if(cr=ur=null,Ru(e),t)for(e=0;e<t.length;e++)Ru(t[e])}}function Fd(e,t){return e(t)}function Ud(){}var Ni=!1;function Qd(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return Fd(e,t,n)}finally{Ni=!1,(ur!==null||cr!==null)&&(Ud(),Bd())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var xa=!1;if(zt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{xa=!1}function d1(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Gr=!1,yl=null,xl=!1,wa=null,f1={onError:function(e){Gr=!0,yl=e}};function h1(e,t,n,r,o,l,i,a,s){Gr=!1,yl=null,d1.apply(f1,arguments)}function p1(e,t,n,r,o,l,i,a,s){if(h1.apply(this,arguments),Gr){if(Gr){var u=yl;Gr=!1,yl=null}else throw Error(M(198));xl||(xl=!0,wa=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pu(e){if(Bn(e)!==e)throw Error(M(188))}function m1(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Pu(o),e;if(l===r)return Pu(o),t;l=l.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Hd(e){return e=m1(e),e!==null?Vd(e):null}function Vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=qe.unstable_scheduleCallback,Du=qe.unstable_cancelCallback,g1=qe.unstable_shouldYield,v1=qe.unstable_requestPaint,ge=qe.unstable_now,y1=qe.unstable_getCurrentPriorityLevel,Es=qe.unstable_ImmediatePriority,Kd=qe.unstable_UserBlockingPriority,wl=qe.unstable_NormalPriority,x1=qe.unstable_LowPriority,Yd=qe.unstable_IdlePriority,Xl=null,St=null;function w1(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:b1,k1=Math.log,A1=Math.LN2;function b1(e){return e>>>=0,e===0?32:31-(k1(e)/A1|0)|0}var Lo=64,Oo=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Ur(a):(l&=i,l!==0&&(r=Ur(l)))}else i=n&~o,i!==0?r=Ur(i):l!==0&&(r=Ur(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function S1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-pt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=S1(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jd(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function C1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xd,$s,qd,ef,tf,Aa=!1,_o=[],en=null,tn=null,nn=null,lo=new Map,io=new Map,Yt=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Rr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jo(t),t!==null&&$s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function j1(e,t,n,r,o){switch(t){case"focusin":return en=Rr(en,e,t,n,r,o),!0;case"dragenter":return tn=Rr(tn,e,t,n,r,o),!0;case"mouseover":return nn=Rr(nn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return lo.set(l,Rr(lo.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,io.set(l,Rr(io.get(l)||null,e,t,n,r,o)),!0}return!1}function nf(e){var t=An(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wd(n),t!==null){e.blockedOn=t,tf(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return t=jo(n),t!==null&&$s(t),e.blockedOn=n,!1;t.shift()}return!0}function Ou(e,t,n){nl(e)&&n.delete(t)}function M1(){Aa=!1,en!==null&&nl(en)&&(en=null),tn!==null&&nl(tn)&&(tn=null),nn!==null&&nl(nn)&&(nn=null),lo.forEach(Ou),io.forEach(Ou)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Aa||(Aa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,M1)))}function ao(e){function t(o){return Pr(o,e)}if(0<_o.length){Pr(_o[0],e);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Pr(en,e),tn!==null&&Pr(tn,e),nn!==null&&Pr(nn,e),lo.forEach(t),io.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)nf(n),n.blockedOn===null&&Yt.shift()}var dr=Qt.ReactCurrentBatchConfig,Al=!0;function N1(e,t,n,r){var o=ee,l=dr.transition;dr.transition=null;try{ee=1,js(e,t,n,r)}finally{ee=o,dr.transition=l}}function I1(e,t,n,r){var o=ee,l=dr.transition;dr.transition=null;try{ee=4,js(e,t,n,r)}finally{ee=o,dr.transition=l}}function js(e,t,n,r){if(Al){var o=ba(e,t,n,r);if(o===null)Fi(e,t,r,bl,n),Lu(e,r);else if(j1(o,e,t,n,r))r.stopPropagation();else if(Lu(e,r),t&4&&-1<$1.indexOf(e)){for(;o!==null;){var l=jo(o);if(l!==null&&Xd(l),l=ba(e,t,n,r),l===null&&Fi(e,t,r,bl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var bl=null;function ba(e,t,n,r){if(bl=null,e=Ss(r),e=An(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bl=e,null}function rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case Es:return 1;case Kd:return 4;case wl:case x1:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var Zt=null,Ms=null,rl=null;function of(){if(rl)return rl;var e,t=Ms,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return rl=o.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function _u(){return!1}function tt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zo:_u,this.isPropagationStopped=_u,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=tt($r),$o=de({},$r,{view:0,detail:0}),T1=tt($o),Ti,Ri,Dr,ql=de({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(Ti=e.screenX-Dr.screenX,Ri=e.screenY-Dr.screenY):Ri=Ti=0,Dr=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),zu=tt(ql),R1=de({},ql,{dataTransfer:0}),P1=tt(R1),D1=de({},$o,{relatedTarget:0}),Pi=tt(D1),L1=de({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=tt(L1),_1=de({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z1=tt(_1),B1=de({},$r,{data:0}),Bu=tt(B1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q1[e])?!!t[e]:!1}function Is(){return W1}var H1=de({},$o,{key:function(e){if(e.key){var t=F1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V1=tt(H1),G1=de({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=tt(G1),K1=de({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Y1=tt(K1),J1=de({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=tt(J1),X1=de({},ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=tt(X1),em=[9,13,27,32],Ts=zt&&"CompositionEvent"in window,Kr=null;zt&&"documentMode"in document&&(Kr=document.documentMode);var tm=zt&&"TextEvent"in window&&!Kr,lf=zt&&(!Ts||Kr&&8<Kr&&11>=Kr),Uu=" ",Qu=!1;function af(e,t){switch(e){case"keyup":return em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function nm(e,t){switch(e){case"compositionend":return sf(t);case"keypress":return t.which!==32?null:(Qu=!0,Uu);case"textInput":return e=t.data,e===Uu&&Qu?null:e;default:return null}}function rm(e,t){if(Jn)return e==="compositionend"||!Ts&&af(e,t)?(e=of(),rl=Ms=Zt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!om[e.type]:t==="textarea"}function uf(e,t,n,r){zd(r),t=Sl(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,so=null;function lm(e){wf(e,0)}function ei(e){var t=qn(e);if(Td(t))return e}function im(e,t){if(e==="change")return t}var cf=!1;if(zt){var Di;if(zt){var Li="oninput"in document;if(!Li){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),Li=typeof Hu.oninput=="function"}Di=Li}else Di=!1;cf=Di&&(!document.documentMode||9<document.documentMode)}function Vu(){Yr&&(Yr.detachEvent("onpropertychange",df),so=Yr=null)}function df(e){if(e.propertyName==="value"&&ei(so)){var t=[];uf(t,so,e,Ss(e)),Qd(lm,t)}}function am(e,t,n){e==="focusin"?(Vu(),Yr=t,so=n,Yr.attachEvent("onpropertychange",df)):e==="focusout"&&Vu()}function sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei(so)}function um(e,t){if(e==="click")return ei(t)}function cm(e,t){if(e==="input"||e==="change")return ei(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:dm;function uo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!la.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var n=Gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gu(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=vl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vl(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fm(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&Rs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ku(n,l);var i=Ku(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hm=zt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Sa=null,Jr=null,Ea=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||Zn==null||Zn!==vl(r)||(r=Zn,"selectionStart"in r&&Rs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&uo(Jr,r)||(Jr=r,r=Sl(Sa,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Oi={},pf={};zt&&(pf=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ti(e){if(Oi[e])return Oi[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pf)return Oi[e]=t[n];return e}var mf=ti("animationend"),gf=ti("animationiteration"),vf=ti("animationstart"),yf=ti("transitionend"),xf=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){xf.set(e,t),zn(t,[e])}for(var _i=0;_i<Ju.length;_i++){var zi=Ju[_i],pm=zi.toLowerCase(),mm=zi[0].toUpperCase()+zi.slice(1);mn(pm,"on"+mm)}mn(mf,"onAnimationEnd");mn(gf,"onAnimationIteration");mn(vf,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(yf,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p1(r,t,void 0,e),e.currentTarget=null}function wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Zu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Zu(o,a,u),l=s}}}if(xl)throw e=wa,xl=!1,wa=null,e}function ne(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(kf(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),kf(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[Fo]){e[Fo]=!0,$d.forEach(function(n){n!=="selectionchange"&&(gm.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,Bi("selectionchange",!1,t))}}function kf(e,t,n,r){switch(rf(t)){case 1:var o=N1;break;case 4:o=I1;break;default:o=js}n=o.bind(null,t,n,e),o=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=An(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Qd(function(){var u=l,g=Ss(n),c=[];e:{var p=xf.get(e);if(p!==void 0){var y=Ns,w=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":y=V1;break;case"focusin":w="focus",y=Pi;break;case"focusout":w="blur",y=Pi;break;case"beforeblur":case"afterblur":y=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Y1;break;case mf:case gf:case vf:y=O1;break;case yf:y=Z1;break;case"scroll":y=T1;break;case"wheel":y=q1;break;case"copy":case"cut":case"paste":y=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fu}var A=(t&4)!==0,S=!A&&e==="scroll",f=A?p!==null?p+"Capture":null:p;A=[];for(var d=u,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=oo(d,f),k!=null&&A.push(fo(d,k,h)))),S)break;d=d.return}0<A.length&&(p=new y(p,w,null,n,g),c.push({event:p,listeners:A}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==va&&(w=n.relatedTarget||n.fromElement)&&(An(w)||w[Bt]))break e;if((y||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?An(w):null,w!==null&&(S=Bn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(A=zu,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(A=Fu,k="onPointerLeave",f="onPointerEnter",d="pointer"),S=y==null?p:qn(y),h=w==null?p:qn(w),p=new A(k,d+"leave",y,n,g),p.target=S,p.relatedTarget=h,k=null,An(g)===u&&(A=new A(f,d+"enter",w,n,g),A.target=h,A.relatedTarget=S,k=A),S=k,y&&w)t:{for(A=y,f=w,d=0,h=A;h;h=Hn(h))d++;for(h=0,k=f;k;k=Hn(k))h++;for(;0<d-h;)A=Hn(A),d--;for(;0<h-d;)f=Hn(f),h--;for(;d--;){if(A===f||f!==null&&A===f.alternate)break t;A=Hn(A),f=Hn(f)}A=null}else A=null;y!==null&&Xu(c,p,y,A,!1),w!==null&&S!==null&&Xu(c,S,w,A,!0)}}e:{if(p=u?qn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var b=im;else if(Wu(p))if(cf)b=cm;else{b=sm;var E=am}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=um);if(b&&(b=b(e,u))){uf(c,b,n,g);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&fa(p,"number",p.value)}switch(E=u?qn(u):window,e){case"focusin":(Wu(E)||E.contentEditable==="true")&&(Zn=E,Sa=u,Jr=null);break;case"focusout":Jr=Sa=Zn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Yu(c,n,g);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Yu(c,n,g)}var C;if(Ts)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Jn?af(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(lf&&n.locale!=="ko"&&(Jn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Jn&&(C=of()):(Zt=g,Ms="value"in Zt?Zt.value:Zt.textContent,Jn=!0)),E=Sl(u,I),0<E.length&&(I=new Bu(I,e,null,n,g),c.push({event:I,listeners:E}),C?I.data=C:(C=sf(n),C!==null&&(I.data=C)))),(C=tm?nm(e,n):rm(e,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(g=new Bu("onBeforeInput","beforeinput",null,n,g),c.push({event:g,listeners:u}),g.data=C))}wf(c,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=oo(e,n),l!=null&&r.unshift(fo(e,l,o)),l=oo(e,t),l!=null&&r.push(fo(e,l,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=oo(n,l),s!=null&&i.unshift(fo(n,s,a))):o||(s=oo(n,l),s!=null&&i.push(fo(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var vm=/\r\n?/g,ym=/\u0000|\uFFFD/g;function qu(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(ym,"")}function Uo(e,t,n){if(t=qu(t),qu(e)!==t&&n)throw Error(M(425))}function El(){}var Ca=null,$a=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,xm=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(km)}:Ma;function km(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),bt="__reactFiber$"+jr,ho="__reactProps$"+jr,Bt="__reactContainer$"+jr,Na="__reactEvents$"+jr,Am="__reactListeners$"+jr,bm="__reactHandles$"+jr;function An(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[bt])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[bt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ni(e){return e[ho]||null}var Ia=[],er=-1;function gn(e){return{current:e}}function oe(e){0>er||(e.current=Ia[er],Ia[er]=null,er--)}function te(e,t){er++,Ia[er]=e.current,e.current=t}var fn={},_e=gn(fn),He=gn(!1),In=fn;function mr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Cl(){oe(He),oe(_e)}function nc(e,t,n){if(_e.current!==fn)throw Error(M(168));te(_e,t),te(He,n)}function Af(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(M(108,a1(e)||"Unknown",o));return de({},n,r)}function $l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,In=_e.current,te(_e,e),te(He,He.current),!0}function rc(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Af(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(_e),te(_e,e)):oe(He),te(He,n)}var Rt=null,ri=!1,Qi=!1;function bf(e){Rt===null?Rt=[e]:Rt.push(e)}function Sm(e){ri=!0,bf(e)}function vn(){if(!Qi&&Rt!==null){Qi=!0;var e=0,t=ee;try{var n=Rt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,ri=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),Gd(Es,vn),o}finally{ee=t,Qi=!1}}return null}var tr=[],nr=0,jl=null,Ml=0,rt=[],ot=0,Tn=null,Pt=1,Dt="";function wn(e,t){tr[nr++]=Ml,tr[nr++]=jl,jl=e,Ml=t}function Sf(e,t,n){rt[ot++]=Pt,rt[ot++]=Dt,rt[ot++]=Tn,Tn=e;var r=Pt;e=Dt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var l=32-pt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Pt=1<<32-pt(t)+o|n<<o|r,Dt=l+e}else Pt=1<<l|n<<o|r,Dt=e}function Ps(e){e.return!==null&&(wn(e,1),Sf(e,1,0))}function Ds(e){for(;e===jl;)jl=tr[--nr],tr[nr]=null,Ml=tr[--nr],tr[nr]=null;for(;e===Tn;)Tn=rt[--ot],rt[ot]=null,Dt=rt[--ot],rt[ot]=null,Pt=rt[--ot],rt[ot]=null}var Xe=null,Ze=null,ae=!1,ht=null;function Ef(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(ae){var t=Ze;if(t){var n=t;if(!oc(e,t)){if(Ta(e))throw Error(M(418));t=rn(n.nextSibling);var r=Xe;t&&oc(e,t)?Ef(r,n):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(Ta(e))throw Error(M(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Qo(e){if(e!==Xe)return!1;if(!ae)return lc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=Ze)){if(Ta(e))throw Cf(),Error(M(418));for(;t;)Ef(e,t),t=rn(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?rn(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=Ze;e;)e=rn(e.nextSibling)}function gr(){Ze=Xe=null,ae=!1}function Ls(e){ht===null?ht=[e]:ht.push(e)}var Em=Qt.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ic(e){var t=e._init;return t(e._payload)}function $f(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=sn(f,d),f.index=0,f.sibling=null,f}function l(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,h,k){return d===null||d.tag!==6?(d=Ji(h,f.mode,k),d.return=f,d):(d=o(d,h),d.return=f,d)}function s(f,d,h,k){var b=h.type;return b===Yn?g(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gt&&ic(b)===d.type)?(k=o(d,h.props),k.ref=Lr(f,d,h),k.return=f,k):(k=dl(h.type,h.key,h.props,null,f.mode,k),k.ref=Lr(f,d,h),k.return=f,k)}function u(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Zi(h,f.mode,k),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function g(f,d,h,k,b){return d===null||d.tag!==7?(d=jn(h,f.mode,k,b),d.return=f,d):(d=o(d,h),d.return=f,d)}function c(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ji(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ro:return h=dl(d.type,d.key,d.props,null,f.mode,h),h.ref=Lr(f,null,d),h.return=f,h;case Kn:return d=Zi(d,f.mode,h),d.return=f,d;case Gt:var k=d._init;return c(f,k(d._payload),h)}if(Fr(d)||Ir(d))return d=jn(d,f.mode,h,null),d.return=f,d;Wo(f,d)}return null}function p(f,d,h,k){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:a(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:return h.key===b?s(f,d,h,k):null;case Kn:return h.key===b?u(f,d,h,k):null;case Gt:return b=h._init,p(f,d,b(h._payload),k)}if(Fr(h)||Ir(h))return b!==null?null:g(f,d,h,k,null);Wo(f,h)}return null}function y(f,d,h,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,a(d,f,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ro:return f=f.get(k.key===null?h:k.key)||null,s(d,f,k,b);case Kn:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,b);case Gt:var E=k._init;return y(f,d,h,E(k._payload),b)}if(Fr(k)||Ir(k))return f=f.get(h)||null,g(d,f,k,b,null);Wo(d,k)}return null}function w(f,d,h,k){for(var b=null,E=null,C=d,I=d=0,B=null;C!==null&&I<h.length;I++){C.index>I?(B=C,C=null):B=C.sibling;var L=p(f,C,h[I],k);if(L===null){C===null&&(C=B);break}e&&C&&L.alternate===null&&t(f,C),d=l(L,d,I),E===null?b=L:E.sibling=L,E=L,C=B}if(I===h.length)return n(f,C),ae&&wn(f,I),b;if(C===null){for(;I<h.length;I++)C=c(f,h[I],k),C!==null&&(d=l(C,d,I),E===null?b=C:E.sibling=C,E=C);return ae&&wn(f,I),b}for(C=r(f,C);I<h.length;I++)B=y(C,f,I,h[I],k),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?I:B.key),d=l(B,d,I),E===null?b=B:E.sibling=B,E=B);return e&&C.forEach(function(X){return t(f,X)}),ae&&wn(f,I),b}function A(f,d,h,k){var b=Ir(h);if(typeof b!="function")throw Error(M(150));if(h=b.call(h),h==null)throw Error(M(151));for(var E=b=null,C=d,I=d=0,B=null,L=h.next();C!==null&&!L.done;I++,L=h.next()){C.index>I?(B=C,C=null):B=C.sibling;var X=p(f,C,L.value,k);if(X===null){C===null&&(C=B);break}e&&C&&X.alternate===null&&t(f,C),d=l(X,d,I),E===null?b=X:E.sibling=X,E=X,C=B}if(L.done)return n(f,C),ae&&wn(f,I),b;if(C===null){for(;!L.done;I++,L=h.next())L=c(f,L.value,k),L!==null&&(d=l(L,d,I),E===null?b=L:E.sibling=L,E=L);return ae&&wn(f,I),b}for(C=r(f,C);!L.done;I++,L=h.next())L=y(C,f,I,L.value,k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?I:L.key),d=l(L,d,I),E===null?b=L:E.sibling=L,E=L);return e&&C.forEach(function(q){return t(f,q)}),ae&&wn(f,I),b}function S(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===Yn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:e:{for(var b=h.key,E=d;E!==null;){if(E.key===b){if(b=h.type,b===Yn){if(E.tag===7){n(f,E.sibling),d=o(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gt&&ic(b)===E.type){n(f,E.sibling),d=o(E,h.props),d.ref=Lr(f,E,h),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===Yn?(d=jn(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=dl(h.type,h.key,h.props,null,f.mode,k),k.ref=Lr(f,d,h),k.return=f,f=k)}return i(f);case Kn:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Zi(h,f.mode,k),d.return=f,f=d}return i(f);case Gt:return E=h._init,S(f,d,E(h._payload),k)}if(Fr(h))return w(f,d,h,k);if(Ir(h))return A(f,d,h,k);Wo(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=Ji(h,f.mode,k),d.return=f,f=d),i(f)):n(f,d)}return S}var vr=$f(!0),jf=$f(!1),Nl=gn(null),Il=null,rr=null,Os=null;function _s(){Os=rr=Il=null}function zs(e){var t=Nl.current;oe(Nl),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Il=e,Os=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Il===null)throw Error(M(308));rr=e,Il.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var bn=null;function Bs(e){bn===null?bn=[e]:bn.push(e)}function Mf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}function ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tl(e,t,n,r){var o=e.updateQueue;Kt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(l!==null){var c=o.baseState;i=0,g=u=s=null,a=l;do{var p=a.lane,y=a.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,A=a;switch(p=t,y=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){c=w.call(y,c,p);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,p=typeof w=="function"?w.call(y,c,p):w,p==null)break e;c=de({},c,p);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=y,s=c):g=g.next=y,i|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(g===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Pn|=i,e.lanes=i,e.memoizedState=c}}function sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(M(191,o));o.call(r)}}}var Mo={},Et=gn(Mo),po=gn(Mo),mo=gn(Mo);function Sn(e){if(e===Mo)throw Error(M(174));return e}function Us(e,t){switch(te(mo,t),te(po,e),te(Et,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}oe(Et),te(Et,t)}function yr(){oe(Et),oe(po),oe(mo)}function If(e){Sn(mo.current);var t=Sn(Et.current),n=pa(t,e.type);t!==n&&(te(po,e),te(Et,n))}function Qs(e){po.current===e&&(oe(Et),oe(po))}var ue=gn(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Ws(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var il=Qt.ReactCurrentDispatcher,Hi=Qt.ReactCurrentBatchConfig,Rn=0,ce=null,be=null,Ce=null,Pl=!1,Zr=!1,go=0,Cm=0;function De(){throw Error(M(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,o,l){if(Rn=l,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?Nm:Im,e=n(r,o),Zr){l=0;do{if(Zr=!1,go=0,25<=l)throw Error(M(301));l+=1,Ce=be=null,t.updateQueue=null,il.current=Tm,e=n(r,o)}while(Zr)}if(il.current=Dl,t=be!==null&&be.next!==null,Rn=0,Ce=be=ce=null,Pl=!1,t)throw Error(M(300));return e}function Gs(){var e=go!==0;return go=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function st(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ce===null?ce.memoizedState:Ce.next;if(t!==null)Ce=t,be=e;else{if(e===null)throw Error(M(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function vo(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=st(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var g=u.lane;if((Rn&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,i=r):s=s.next=c,ce.lanes|=g,Pn|=g}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,vt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ce.lanes|=l,Pn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gi(e){var t=st(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);vt(l,t.memoizedState)||(We=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Tf(){}function Rf(e,t){var n=ce,r=st(),o=t(),l=!vt(r.memoizedState,o);if(l&&(r.memoizedState=o,We=!0),r=r.queue,Ks(Lf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,yo(9,Df.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(M(349));Rn&30||Pf(n,t,o)}return o}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Df(e,t,n,r){t.value=n,t.getSnapshot=r,Of(t)&&_f(e)}function Lf(e,t,n){return n(function(){Of(t)&&_f(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function _f(e){var t=Ft(e,1);t!==null&&mt(t,e,1,-1)}function uc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Mm.bind(null,ce,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zf(){return st().memoizedState}function al(e,t,n,r){var o=kt();ce.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=st();r=r===void 0?null:r;var l=void 0;if(be!==null){var i=be.memoizedState;if(l=i.destroy,r!==null&&Hs(r,i.deps)){o.memoizedState=yo(t,n,l,r);return}}ce.flags|=e,o.memoizedState=yo(1|t,n,l,r)}function cc(e,t){return al(8390656,8,e,t)}function Ks(e,t){return oi(2048,8,e,t)}function Bf(e,t){return oi(4,2,e,t)}function Ff(e,t){return oi(4,4,e,t)}function Uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,Uf.bind(null,t,e),n)}function Ys(){}function Wf(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hf(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vf(e,t,n){return Rn&21?(vt(n,t)||(n=Jd(),ce.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function $m(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{ee=n,Hi.transition=r}}function Gf(){return st().memoizedState}function jm(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kf(e))Yf(t,n);else if(n=Mf(e,t,n,r),n!==null){var o=Be();mt(n,e,r,o),Jf(n,t,r)}}function Mm(e,t,n){var r=an(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Yf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,i)){var s=t.interleaved;s===null?(o.next=o,Bs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Mf(e,t,o,r),n!==null&&(o=Be(),mt(n,e,r,o),Jf(n,t,r))}}function Kf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Yf(e,t){Zr=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}var Dl={readContext:at,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Nm={readContext:at,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,Uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jm.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:uc,useDebugValue:Ys,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=uc(!1),t=e[0];return e=$m.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=kt();if(ae){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Me===null)throw Error(M(349));Rn&30||Pf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,cc(Lf.bind(null,r,l,e),[e]),r.flags|=2048,yo(9,Df.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=kt(),t=Me.identifierPrefix;if(ae){var n=Dt,r=Pt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Im={readContext:at,useCallback:Wf,useContext:at,useEffect:Ks,useImperativeHandle:Qf,useInsertionEffect:Bf,useLayoutEffect:Ff,useMemo:Hf,useReducer:Vi,useRef:zf,useState:function(){return Vi(vo)},useDebugValue:Ys,useDeferredValue:function(e){var t=st();return Vf(t,be.memoizedState,e)},useTransition:function(){var e=Vi(vo)[0],t=st().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Rf,useId:Gf,unstable_isNewReconciler:!1},Tm={readContext:at,useCallback:Wf,useContext:at,useEffect:Ks,useImperativeHandle:Qf,useInsertionEffect:Bf,useLayoutEffect:Ff,useMemo:Hf,useReducer:Gi,useRef:zf,useState:function(){return Gi(vo)},useDebugValue:Ys,useDeferredValue:function(e){var t=st();return be===null?t.memoizedState=e:Vf(t,be.memoizedState,e)},useTransition:function(){var e=Gi(vo)[0],t=st().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Rf,useId:Gf,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=an(e),l=Lt(r,o);l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(mt(t,e,o,r),ll(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=an(e),l=Lt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(mt(t,e,o,r),ll(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=an(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=on(e,o,r),t!==null&&(mt(t,e,r,n),ll(t,e,r))}};function dc(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,l):!0}function Zf(e,t,n){var r=!1,o=fn,l=t.contextType;return typeof l=="object"&&l!==null?l=at(l):(o=Ve(t)?In:_e.current,r=t.contextTypes,l=(r=r!=null)?mr(e,o):fn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function La(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=at(l):(l=Ve(t)?In:_e.current,o.context=mr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Da(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Tl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var n="",r=t;do n+=i1(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function Xf(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,Ga=r),Oa(e,t)},n}function qf(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Oa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Gm.bind(null,e,t,n),t.then(e,e))}function pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var Pm=Qt.ReactCurrentOwner,We=!1;function ze(e,t,n,r){t.child=e===null?jf(t,null,n,r):vr(t,e.child,n,r)}function gc(e,t,n,r,o){n=n.render;var l=t.ref;return fr(t,o),r=Vs(e,t,n,r,l,o),n=Gs(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ae&&n&&Ps(t),t.flags|=1,ze(e,t,r,o),t.child)}function vc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ru(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,eh(e,t,l,r,o)):(e=dl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(i,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=sn(l,r),e.ref=t.ref,e.return=t,t.child=e}function eh(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(uo(l,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return _a(e,t,n,r,o)}function th(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(lr,Je),Je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(lr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,te(lr,Je),Je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,te(lr,Je),Je|=r;return ze(e,t,o,n),t.child}function nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,o){var l=Ve(n)?In:_e.current;return l=mr(t,l),fr(t,o),n=Vs(e,t,n,r,l,o),r=Gs(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(ae&&r&&Ps(t),t.flags|=1,ze(e,t,n,o),t.child)}function yc(e,t,n,r,o){if(Ve(n)){var l=!0;$l(t)}else l=!1;if(fr(t,o),t.stateNode===null)sl(e,t),Zf(t,n,r),La(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?In:_e.current,u=mr(t,u));var g=n.getDerivedStateFromProps,c=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&fc(t,i,r,u),Kt=!1;var p=t.memoizedState;i.state=p,Tl(t,r,i,o),s=t.memoizedState,a!==r||p!==s||He.current||Kt?(typeof g=="function"&&(Da(t,n,g,r),s=t.memoizedState),(a=Kt||dc(t,n,a,r,p,s,u))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Nf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),i.props=u,c=t.pendingProps,p=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=Ve(n)?In:_e.current,s=mr(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==c||p!==s)&&fc(t,i,r,s),Kt=!1,p=t.memoizedState,i.state=p,Tl(t,r,i,o);var w=t.memoizedState;a!==c||p!==w||He.current||Kt?(typeof y=="function"&&(Da(t,n,y,r),w=t.memoizedState),(u=Kt||dc(t,n,u,r,p,w,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,l,o)}function za(e,t,n,r,o,l){nh(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&rc(t,n,!1),Ut(e,t,l);r=t.stateNode,Pm.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vr(t,e.child,null,l),t.child=vr(t,null,a,l)):ze(e,t,a,l),t.memoizedState=r.state,o&&rc(t,n,!0),t.child}function rh(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Us(e,t.containerInfo)}function xc(e,t,n,r,o){return gr(),Ls(o),t.flags|=256,ze(e,t,n,r),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function oh(e,t,n){var r=t.pendingProps,o=ue.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ue,o&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=si(i,r,0,null),e=jn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Fa(n),t.memoizedState=Ba,e):Js(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Dm(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=sn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=sn(a,l):(l=jn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Fa(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ba,r}return l=e.child,e=l.sibling,r=sn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&Ls(r),vr(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dm(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(M(422))),Ho(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=si({mode:"visible",children:r.children},o,0,null),l=jn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&vr(t,e.child,null,i),t.child.memoizedState=Fa(i),t.memoizedState=Ba,l);if(!(t.mode&1))return Ho(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(M(419)),r=Ki(l,r,void 0),Ho(e,t,i,r)}if(a=(i&e.childLanes)!==0,We||a){if(r=Me,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ft(e,o),mt(r,e,o,-1))}return nu(),r=Ki(Error(M(421))),Ho(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Km.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ze=rn(o.nextSibling),Xe=t,ae=!0,ht=null,e!==null&&(rt[ot++]=Pt,rt[ot++]=Dt,rt[ot++]=Tn,Pt=e.id,Dt=e.overflow,Tn=t),t=Js(t,r.children),t.flags|=4096,t)}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function Yi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function lh(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ze(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Rl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yi(t,!0,n,null,l);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lm(e,t,n){switch(t.tag){case 3:rh(t),gr();break;case 5:If(t);break;case 1:Ve(t.type)&&$l(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Nl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?oh(e,t,n):(te(ue,ue.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);te(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,th(e,t,n)}return Ut(e,t,n)}var ih,Ua,ah,sh;ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};ah=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sn(Et.current);var l=null;switch(n){case"input":o=ca(e,o),r=ca(e,r),l=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),l=[];break;case"textarea":o=ha(e,o),r=ha(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=El)}ma(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};sh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Om(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ve(t.type)&&Cl(),Le(t),null;case 3:return r=t.stateNode,yr(),oe(He),oe(_e),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Ja(ht),ht=null))),Ua(e,t),Le(t),null;case 5:Qs(t);var o=Sn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)ah(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Le(t),null}if(e=Sn(Et.current),Qo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[bt]=t,r[ho]=l,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<Qr.length;o++)ne(Qr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Mu(r,l),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ne("invalid",r);break;case"textarea":Iu(r,l),ne("invalid",r)}ma(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",""+a]):no.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&ne("scroll",r)}switch(n){case"input":Po(r),Nu(r,l,!0);break;case"textarea":Po(r),Tu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=El)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[bt]=t,e[ho]=r,ih(e,t,!1,!1),t.stateNode=e;e:{switch(i=ga(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qr.length;o++)ne(Qr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Mu(e,r),o=ca(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Iu(e,r),o=ha(e,r),ne("invalid",e);break;default:o=r}ma(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?_d(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ld(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(no.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ne("scroll",e):s!=null&&ws(e,l,s,i))}switch(n){case"input":Po(e),Nu(e,r,!1);break;case"textarea":Po(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sr(e,!!r.multiple,l,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)sh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Sn(mo.current),Sn(Et.current),Qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Le(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&t.mode&1&&!(t.flags&128))Cf(),gr(),t.flags|=98560,l=!1;else if(l=Qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[bt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),l=!1}else ht!==null&&(Ja(ht),ht=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):nu())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return yr(),Ua(e,t),e===null&&co(t.stateNode.containerInfo),Le(t),null;case 10:return zs(t.type._context),Le(t),null;case 17:return Ve(t.type)&&Cl(),Le(t),null;case 19:if(oe(ue),l=t.memoizedState,l===null)return Le(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Or(l,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Rl(e),i!==null){for(t.flags|=128,Or(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&ge()>wr&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return Le(t),null}else 2*ge()-l.renderingStartTime>wr&&n!==1073741824&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,n=ue.current,te(ue,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function _m(e,t){switch(Ds(t),t.tag){case 1:return Ve(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),oe(He),oe(_e),Ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return yr(),null;case 10:return zs(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Vo=!1,Oe=!1,zm=typeof WeakSet=="function"?WeakSet:Set,P=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Qa(e,t,n){try{n()}catch(r){pe(e,t,r)}}var kc=!1;function Bm(e,t){if(Ca=Al,e=hf(),Rs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,g=0,c=e,p=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(a=i+o),c!==l||r!==0&&c.nodeType!==3||(s=i+r),c.nodeType===3&&(i+=c.nodeValue.length),(y=c.firstChild)!==null;)p=c,c=y;for(;;){if(c===e)break t;if(p===n&&++u===o&&(a=i),p===l&&++g===r&&(s=i),(y=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:e,selectionRange:n},Al=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,S=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?A:dt(t.type,A),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(k){pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=kc,kc=!1,w}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Qa(t,n,l)}o=o.next}while(o!==r)}}function ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uh(e){var t=e.alternate;t!==null&&(e.alternate=null,uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[ho],delete t[Na],delete t[Am],delete t[bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ch(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=El));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Ht(e,t,n){for(n=n.child;n!==null;)dh(e,t,n),n=n.sibling}function dh(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Oe||or(n,t);case 6:var r=Ie,o=ft;Ie=null,Ht(e,t,n),Ie=r,ft=o,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),ao(e)):Ui(Ie,n.stateNode));break;case 4:r=Ie,o=ft,Ie=n.stateNode.containerInfo,ft=!0,Ht(e,t,n),Ie=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Qa(n,t,i),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Oe&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Ht(e,t,n),Oe=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zm),t.forEach(function(r){var o=Ym.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(M(160));dh(l,i,o),Ie=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}function fh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Xr(3,e,e.return),ii(3,e)}catch(A){pe(e,e.return,A)}try{Xr(5,e,e.return)}catch(A){pe(e,e.return,A)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(A){pe(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Rd(o,l),ga(a,i);var u=ga(a,l);for(i=0;i<s.length;i+=2){var g=s[i],c=s[i+1];g==="style"?_d(o,c):g==="dangerouslySetInnerHTML"?Ld(o,c):g==="children"?ro(o,c):ws(o,g,c,u)}switch(a){case"input":da(o,l);break;case"textarea":Pd(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?sr(o,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?sr(o,!!l.multiple,l.defaultValue,!0):sr(o,!!l.multiple,l.multiple?[]:"",!1))}o[ho]=l}catch(A){pe(e,e.return,A)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(A){pe(e,e.return,A)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(A){pe(e,e.return,A)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(qs=ge())),r&4&&bc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||g,ct(t,e),Oe=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(c=P=g;P!==null;){switch(p=P,y=p.child,p.tag){case 0:case 11:case 14:case 15:Xr(4,p,p.return);break;case 1:or(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(A){pe(r,n,A)}}break;case 5:or(p,p.return);break;case 22:if(p.memoizedState!==null){Ec(c);continue}}y!==null?(y.return=p,P=y):Ec(c)}g=g.sibling}e:for(g=null,c=e;;){if(c.tag===5){if(g===null){g=c;try{o=c.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Od("display",i))}catch(A){pe(e,e.return,A)}}}else if(c.tag===6){if(g===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(A){pe(e,e.return,A)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;g===c&&(g=null),c=c.return}g===c&&(g=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ct(t,e),wt(e),r&4&&bc(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ch(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var l=Ac(e);Va(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ac(e);Ha(e,a,i);break;default:throw Error(M(161))}}catch(s){pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fm(e,t,n){P=e,hh(e)}function hh(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Vo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=Vo;var u=Oe;if(Vo=i,(Oe=s)&&!u)for(P=o;P!==null;)i=P,s=i.child,i.tag===22&&i.memoizedState!==null?Cc(o):s!==null?(s.return=i,P=s):Cc(o);for(;l!==null;)P=l,hh(l),l=l.sibling;P=o,Vo=a,Oe=u}Sc(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,P=l):Sc(e)}}function Sc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&sc(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sc(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var c=g.dehydrated;c!==null&&ao(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Oe||t.flags&512&&Wa(t)}catch(p){pe(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Ec(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Cc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ii(4,t)}catch(s){pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){pe(t,o,s)}}var l=t.return;try{Wa(t)}catch(s){pe(t,l,s)}break;case 5:var i=t.return;try{Wa(t)}catch(s){pe(t,i,s)}}}catch(s){pe(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Um=Math.ceil,Ll=Qt.ReactCurrentDispatcher,Zs=Qt.ReactCurrentOwner,it=Qt.ReactCurrentBatchConfig,Y=0,Me=null,ye=null,Te=0,Je=0,lr=gn(0),Se=0,xo=null,Pn=0,ai=0,Xs=0,qr=null,Qe=null,qs=0,wr=1/0,It=null,Ol=!1,Ga=null,ln=null,Go=!1,Xt=null,_l=0,eo=0,Ka=null,ul=-1,cl=0;function Be(){return Y&6?ge():ul!==-1?ul:ul=ge()}function an(e){return e.mode&1?Y&2&&Te!==0?Te&-Te:Em.transition!==null?(cl===0&&(cl=Jd()),cl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:rf(e.type)),e):1}function mt(e,t,n,r){if(50<eo)throw eo=0,Ka=null,Error(M(185));Co(e,n,r),(!(Y&2)||e!==Me)&&(e===Me&&(!(Y&2)&&(ai|=n),Se===4&&Jt(e,Te)),Ge(e,r),n===1&&Y===0&&!(t.mode&1)&&(wr=ge()+500,ri&&vn()))}function Ge(e,t){var n=e.callbackNode;E1(e,t);var r=kl(e,e===Me?Te:0);if(r===0)n!==null&&Du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Du(n),t===1)e.tag===0?Sm($c.bind(null,e)):bf($c.bind(null,e)),wm(function(){!(Y&6)&&vn()}),n=null;else{switch(Zd(r)){case 1:n=Es;break;case 4:n=Kd;break;case 16:n=wl;break;case 536870912:n=Yd;break;default:n=wl}n=kh(n,ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ph(e,t){if(ul=-1,cl=0,Y&6)throw Error(M(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=kl(e,e===Me?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zl(e,r);else{t=r;var o=Y;Y|=2;var l=gh();(Me!==e||Te!==t)&&(It=null,wr=ge()+500,$n(e,t));do try{Hm();break}catch(a){mh(e,a)}while(!0);_s(),Ll.current=l,Y=o,ye!==null?t=0:(Me=null,Te=0,t=Se)}if(t!==0){if(t===2&&(o=ka(e),o!==0&&(r=o,t=Ya(e,o))),t===1)throw n=xo,$n(e,0),Jt(e,r),Ge(e,ge()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qm(o)&&(t=zl(e,r),t===2&&(l=ka(e),l!==0&&(r=l,t=Ya(e,l))),t===1))throw n=xo,$n(e,0),Jt(e,r),Ge(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:kn(e,Qe,It);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=qs+500-ge(),10<t)){if(kl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ma(kn.bind(null,e,Qe,It),t);break}kn(e,Qe,It);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-pt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Um(r/1960))-r,10<r){e.timeoutHandle=Ma(kn.bind(null,e,Qe,It),r);break}kn(e,Qe,It);break;case 5:kn(e,Qe,It);break;default:throw Error(M(329))}}}return Ge(e,ge()),e.callbackNode===n?ph.bind(null,e):null}function Ya(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=zl(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Ja(t)),e}function Ja(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Qm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!vt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Xs,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function $c(e){if(Y&6)throw Error(M(327));hr();var t=kl(e,0);if(!(t&1))return Ge(e,ge()),null;var n=zl(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=xo,$n(e,0),Jt(e,t),Ge(e,ge()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Qe,It),Ge(e,ge()),null}function eu(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(wr=ge()+500,ri&&vn())}}function Dn(e){Xt!==null&&Xt.tag===0&&!(Y&6)&&hr();var t=Y;Y|=1;var n=it.transition,r=ee;try{if(it.transition=null,ee=1,e)return e()}finally{ee=r,it.transition=n,Y=t,!(Y&6)&&vn()}}function tu(){Je=lr.current,oe(lr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xm(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:yr(),oe(He),oe(_e),Ws();break;case 5:Qs(r);break;case 4:yr();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:zs(r.type._context);break;case 22:case 23:tu()}n=n.return}if(Me=e,ye=e=sn(e.current,null),Te=Je=t,Se=0,xo=null,Xs=ai=Pn=0,Qe=qr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}bn=null}return e}function mh(e,t){do{var n=ye;try{if(_s(),il.current=Dl,Pl){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pl=!1}if(Rn=0,Ce=be=ce=null,Zr=!1,go=0,Zs.current=null,n===null||n.return===null){Se=1,xo=t,ye=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,c=g.tag;if(!(g.mode&1)&&(c===0||c===11||c===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=pc(i);if(y!==null){y.flags&=-257,mc(y,i,a,l,t),y.mode&1&&hc(l,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var A=new Set;A.add(s),t.updateQueue=A}else w.add(s);break e}else{if(!(t&1)){hc(l,u,t),nu();break e}s=Error(M(426))}}else if(ae&&a.mode&1){var S=pc(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),mc(S,i,a,l,t),Ls(xr(s,a));break e}}l=s=xr(s,a),Se!==4&&(Se=2),qr===null?qr=[l]:qr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Xf(l,s,t);ac(l,f);break e;case 1:a=s;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ln===null||!ln.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=qf(l,a,t);ac(l,k);break e}}l=l.return}while(l!==null)}yh(n)}catch(b){t=b,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function gh(){var e=Ll.current;return Ll.current=Dl,e===null?Dl:e}function nu(){(Se===0||Se===3||Se===2)&&(Se=4),Me===null||!(Pn&268435455)&&!(ai&268435455)||Jt(Me,Te)}function zl(e,t){var n=Y;Y|=2;var r=gh();(Me!==e||Te!==t)&&(It=null,$n(e,t));do try{Wm();break}catch(o){mh(e,o)}while(!0);if(_s(),Y=n,Ll.current=r,ye!==null)throw Error(M(261));return Me=null,Te=0,Se}function Wm(){for(;ye!==null;)vh(ye)}function Hm(){for(;ye!==null&&!g1();)vh(ye)}function vh(e){var t=wh(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?yh(e):ye=t,Zs.current=null}function yh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_m(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,ye=null;return}}else if(n=Om(n,t,Je),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Se===0&&(Se=5)}function kn(e,t,n){var r=ee,o=it.transition;try{it.transition=null,ee=1,Vm(e,t,n,r)}finally{it.transition=o,ee=r}return null}function Vm(e,t,n,r){do hr();while(Xt!==null);if(Y&6)throw Error(M(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(C1(e,l),e===Me&&(ye=Me=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,kh(wl,function(){return hr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=it.transition,it.transition=null;var i=ee;ee=1;var a=Y;Y|=4,Zs.current=null,Bm(e,n),fh(n,e),fm($a),Al=!!Ca,$a=Ca=null,e.current=n,Fm(n),v1(),Y=a,ee=i,it.transition=l}else e.current=n;if(Go&&(Go=!1,Xt=e,_l=o),l=e.pendingLanes,l===0&&(ln=null),w1(n.stateNode),Ge(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ol)throw Ol=!1,e=Ga,Ga=null,e;return _l&1&&e.tag!==0&&hr(),l=e.pendingLanes,l&1?e===Ka?eo++:(eo=0,Ka=e):eo=0,vn(),null}function hr(){if(Xt!==null){var e=Zd(_l),t=it.transition,n=ee;try{if(it.transition=null,ee=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,_l=0,Y&6)throw Error(M(331));var o=Y;for(Y|=4,P=e.current;P!==null;){var l=P,i=l.child;if(P.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:Xr(8,g,l)}var c=g.child;if(c!==null)c.return=g,P=c;else for(;P!==null;){g=P;var p=g.sibling,y=g.return;if(uh(g),g===u){P=null;break}if(p!==null){p.return=y,P=p;break}P=y}}}var w=l.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var S=A.sibling;A.sibling=null,A=S}while(A!==null)}}P=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,P=i;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Xr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var d=e.current;for(P=d;P!==null;){i=P;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,P=h;else e:for(i=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ii(9,a)}}catch(b){pe(a,a.return,b)}if(a===i){P=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,P=k;break e}P=a.return}}if(Y=o,vn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{ee=n,it.transition=t}}return!1}function jc(e,t,n){t=xr(n,t),t=Xf(e,t,1),e=on(e,t,1),t=Be(),e!==null&&(Co(e,1,t),Ge(e,t))}function pe(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=xr(n,e),e=qf(t,e,1),t=on(t,e,1),e=Be(),t!==null&&(Co(t,1,e),Ge(t,e));break}}t=t.return}}function Gm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Te&n)===n&&(Se===4||Se===3&&(Te&130023424)===Te&&500>ge()-qs?$n(e,0):Xs|=n),Ge(e,t)}function xh(e,t){t===0&&(e.mode&1?(t=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):t=1);var n=Be();e=Ft(e,t),e!==null&&(Co(e,t,n),Ge(e,n))}function Km(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xh(e,n)}function Ym(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),xh(e,n)}var wh;wh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Lm(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&Sf(t,Ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sl(e,t),e=t.pendingProps;var o=mr(t,_e.current);fr(t,n),o=Vs(null,t,r,e,o,n);var l=Gs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,$l(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(t),o.updater=li,t.stateNode=o,o._reactInternals=t,La(t,r,e,n),t=za(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Ps(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Zm(r),e=dt(r,e),o){case 0:t=_a(null,t,r,e,n);break e;case 1:t=yc(null,t,r,e,n);break e;case 11:t=gc(null,t,r,e,n);break e;case 14:t=vc(null,t,r,dt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),_a(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),yc(e,t,r,o,n);case 3:e:{if(rh(t),e===null)throw Error(M(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Nf(e,t),Tl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=xr(Error(M(423)),t),t=xc(e,t,r,n,o);break e}else if(r!==o){o=xr(Error(M(424)),t),t=xc(e,t,r,n,o);break e}else for(Ze=rn(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,ht=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===o){t=Ut(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return If(t),e===null&&Ra(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ja(r,o)?i=null:l!==null&&ja(r,l)&&(t.flags|=32),nh(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&Ra(t),null;case 13:return oh(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),gc(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,te(Nl,r._currentValue),r._currentValue=i,l!==null)if(vt(l.value,i)){if(l.children===o.children&&!He.current){t=Ut(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Lt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Pa(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(M(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Pa(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fr(t,n),o=at(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),vc(e,t,r,o,n);case 15:return eh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),sl(e,t),t.tag=1,Ve(r)?(e=!0,$l(t)):e=!1,fr(t,n),Zf(t,r,o),La(t,r,o,n),za(null,t,r,!0,e,n);case 19:return lh(e,t,n);case 22:return th(e,t,n)}throw Error(M(156,t.tag))};function kh(e,t){return Gd(e,t)}function Jm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Jm(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zm(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===As)return 11;if(e===bs)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function dl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ru(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yn:return jn(n.children,o,l,t);case ks:i=8,o|=8;break;case ia:return e=lt(12,n,t,o|2),e.elementType=ia,e.lanes=l,e;case aa:return e=lt(13,n,t,o),e.elementType=aa,e.lanes=l,e;case sa:return e=lt(19,n,t,o),e.elementType=sa,e.lanes=l,e;case Nd:return si(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jd:i=10;break e;case Md:i=9;break e;case As:i=11;break e;case bs:i=14;break e;case Gt:i=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=lt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function si(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Nd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ji(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,o,l,i,a,s){return e=new Xm(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=lt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(l),e}function qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ah(e){if(!e)return fn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Af(e,n,t)}return t}function bh(e,t,n,r,o,l,i,a,s){return e=ou(n,r,!0,e,o,l,i,a,s),e.context=Ah(null),n=e.current,r=Be(),o=an(n),l=Lt(r,o),l.callback=t??null,on(n,l,o),e.current.lanes=o,Co(e,o,r),Ge(e,r),e}function ui(e,t,n,r){var o=t.current,l=Be(),i=an(o);return n=Ah(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(o,t,i),e!==null&&(mt(e,o,i,l),ll(e,o,i)),i}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function e0(){return null}var Sh=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}ci.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));ui(e,t,null,null)};ci.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){ui(null,e,null,null)}),t[Bt]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&nf(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function t0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Bl(i);l.call(u)}}var i=bh(t,r,e,0,null,!1,!1,"",Nc);return e._reactRootContainer=i,e[Bt]=i.current,co(e.nodeType===8?e.parentNode:e),Dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Bl(s);a.call(u)}}var s=ou(e,0,!1,null,null,!1,!1,"",Nc);return e._reactRootContainer=s,e[Bt]=s.current,co(e.nodeType===8?e.parentNode:e),Dn(function(){ui(t,s,n,r)}),s}function fi(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Bl(i);a.call(s)}}ui(t,i,e,o)}else i=t0(n,t,e,o,r);return Bl(i)}Xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Cs(t,n|1),Ge(t,ge()),!(Y&6)&&(wr=ge()+500,vn()))}break;case 13:Dn(function(){var r=Ft(e,1);if(r!==null){var o=Be();mt(r,e,1,o)}}),lu(e,1)}};$s=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Be();mt(t,e,134217728,n)}lu(e,134217728)}};qd=function(e){if(e.tag===13){var t=an(e),n=Ft(e,t);if(n!==null){var r=Be();mt(n,e,t,r)}lu(e,t)}};ef=function(){return ee};tf=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ya=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ni(r);if(!o)throw Error(M(90));Td(r),da(r,o)}}}break;case"textarea":Pd(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};Fd=eu;Ud=Dn;var n0={usingClientEntryPoint:!1,Events:[jo,qn,ni,zd,Bd,eu]},_r={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r0={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hd(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Xl=Ko.inject(r0),St=Ko}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(M(200));return qm(e,t,null,n)};et.createRoot=function(e,t){if(!au(e))throw Error(M(299));var n=!1,r="",o=Sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,co(e.nodeType===8?e.parentNode:e),new iu(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Hd(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Dn(e)};et.hydrate=function(e,t,n){if(!di(t))throw Error(M(200));return fi(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!au(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Sh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=bh(t,null,e,1,n??null,o,!1,l,i),e[Bt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ci(t)};et.render=function(e,t,n){if(!di(t))throw Error(M(200));return fi(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!di(e))throw Error(M(40));return e._reactRootContainer?(Dn(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};et.unstable_batchedUpdates=eu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!di(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return fi(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eh)}catch(e){console.error(e)}}Eh(),Sd.exports=et;var Ch=Sd.exports,$h,Ic=Ch;$h=Ic.createRoot,Ic.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const Tc="popstate";function o0(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Fn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Za("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Fl(l))}function r(o,l){su(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return i0(t,n,r,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function su(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function Rc(e,t){return{usr:e.state,key:e.key,idx:t}}function Za(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||r||l0()})}function Fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function i0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=qt.Pop,s=null,u=g();u==null&&(u=0,i.replaceState(wo({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function c(){a=qt.Pop;let S=g(),f=S==null?null:S-u;u=S,s&&s({action:a,location:A.location,delta:f})}function p(S,f){a=qt.Push;let d=Za(A.location,S,f);n&&n(d,S),u=g()+1;let h=Rc(d,u),k=A.createHref(d);try{i.pushState(h,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(k)}l&&s&&s({action:a,location:A.location,delta:1})}function y(S,f){a=qt.Replace;let d=Za(A.location,S,f);n&&n(d,S),u=g();let h=Rc(d,u),k=A.createHref(d);i.replaceState(h,"",k),l&&s&&s({action:a,location:A.location,delta:0})}function w(S){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof S=="string"?S:Fl(S);return d=d.replace(/ $/,"%20"),xe(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let A={get action(){return a},get location(){return e(o,i)},listen(S){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Tc,c),s=S,()=>{o.removeEventListener(Tc,c),s=null}},createHref(S){return t(o,S)},createURL:w,encodeLocation(S){let f=w(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:y,go(S){return i.go(S)}};return A}var Pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pc||(Pc={}));function a0(e,t,n){return n===void 0&&(n="/"),s0(e,t,n,!1)}function s0(e,t,n,r){let o=typeof t=="string"?Fn(t):t,l=uu(o.pathname||"/",n);if(l==null)return null;let i=jh(e);u0(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=w0(l);a=y0(i[s],u,r)}return a}function jh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=un([r,s.relativePath]),g=n.concat(s);l.children&&l.children.length>0&&(xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jh(l.children,t,g,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:g0(u,l.index),routesMeta:g})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Mh(l.path))o(l,i,s)}),t}function Mh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Mh(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function u0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c0=/^:[\w-]+$/,d0=3,f0=2,h0=1,p0=10,m0=-2,Dc=e=>e==="*";function g0(e,t){let n=e.split("/"),r=n.length;return n.some(Dc)&&(r+=m0),t&&(r+=f0),n.filter(o=>!Dc(o)).reduce((o,l)=>o+(c0.test(l)?d0:l===""?h0:p0),r)}function v0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function y0(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",c=Lc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},g),p=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Lc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},g)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:un([l,c.pathname]),pathnameBase:S0(un([l,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(l=un([l,c.pathnameBase]))}return i}function Lc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=x0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,g,c)=>{let{paramName:p,isOptional:y}=g;if(p==="*"){let A=a[c]||"";i=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const w=a[c];return y&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function x0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),su(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function w0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return su(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function k0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:A0(n,t):t,search:E0(r),hash:C0(o)}}function A0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nh(e,t){let n=b0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ih(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fn(e):(o=wo({},e),xe(!o.pathname||!o.pathname.includes("?"),Xi("?","pathname","search",o)),xe(!o.pathname||!o.pathname.includes("#"),Xi("#","pathname","hash",o)),xe(!o.search||!o.search.includes("#"),Xi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let c=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),c-=1;o.pathname=p.join("/")}a=c>=0?t[c]:"/"}let s=k0(o,a),u=i&&i!=="/"&&i.endsWith("/"),g=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||g)&&(s.pathname+="/"),s}const un=e=>e.join("/").replace(/\/\/+/g,"/"),S0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Th=["post","put","patch","delete"];new Set(Th);const j0=["get",...Th];new Set(j0);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(this,arguments)}const cu=v.createContext(null),M0=v.createContext(null),Un=v.createContext(null),hi=v.createContext(null),Qn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Rh=v.createContext(null);function N0(e,t){let{relative:n}=t===void 0?{}:t;No()||xe(!1);let{basename:r,navigator:o}=v.useContext(Un),{hash:l,pathname:i,search:a}=Dh(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:un([r,i])),o.createHref({pathname:s,search:a,hash:l})}function No(){return v.useContext(hi)!=null}function pi(){return No()||xe(!1),v.useContext(hi).location}function Ph(e){v.useContext(Un).static||v.useLayoutEffect(e)}function I0(){let{isDataRoute:e}=v.useContext(Qn);return e?W0():T0()}function T0(){No()||xe(!1);let e=v.useContext(cu),{basename:t,future:n,navigator:r}=v.useContext(Un),{matches:o}=v.useContext(Qn),{pathname:l}=pi(),i=JSON.stringify(Nh(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return Ph(()=>{a.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Ih(u,JSON.parse(i),l,g.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:un([t,c.pathname])),(g.replace?r.replace:r.push)(c,g.state,g)},[t,r,i,l,e])}function Dh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Un),{matches:o}=v.useContext(Qn),{pathname:l}=pi(),i=JSON.stringify(Nh(o,r.v7_relativeSplatPath));return v.useMemo(()=>Ih(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function R0(e,t){return P0(e,t)}function P0(e,t,n,r){No()||xe(!1);let{navigator:o,static:l}=v.useContext(Un),{matches:i}=v.useContext(Qn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let g=pi(),c;if(t){var p;let f=typeof t=="string"?Fn(t):t;u==="/"||(p=f.pathname)!=null&&p.startsWith(u)||xe(!1),c=f}else c=g;let y=c.pathname||"/",w=y;if(u!=="/"){let f=u.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(f.length).join("/")}let A=!l&&n&&n.matches&&n.matches.length>0?n.matches:a0(e,{pathname:w}),S=z0(A&&A.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:un([u,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:un([u,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,r);return t&&S?v.createElement(hi.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:qt.Pop}},S):S}function D0(){let e=Q0(),t=$0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const L0=v.createElement(D0,null);class O0 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Qn.Provider,{value:this.props.routeContext},v.createElement(Rh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _0(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(cu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Qn.Provider,{value:t},r)}function z0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let g=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);g>=0||xe(!1),i=i.slice(0,Math.min(i.length,g+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let c=i[g];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=g),c.route.id){let{loaderData:p,errors:y}=n,w=c.route.loader&&p[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||w){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,c,p)=>{let y,w=!1,A=null,S=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,A=c.route.errorElement||L0,s&&(u<0&&p===0?(w=!0,S=null):u===p&&(w=!0,S=c.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,p+1)),d=()=>{let h;return y?h=A:w?h=S:c.route.Component?h=v.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=g,v.createElement(_0,{match:c,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?v.createElement(O0,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Lh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lh||{}),Ul=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ul||{});function B0(e){let t=v.useContext(cu);return t||xe(!1),t}function F0(e){let t=v.useContext(M0);return t||xe(!1),t}function U0(e){let t=v.useContext(Qn);return t||xe(!1),t}function Oh(e){let t=U0(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function Q0(){var e;let t=v.useContext(Rh),n=F0(Ul.UseRouteError),r=Oh(Ul.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function W0(){let{router:e}=B0(Lh.UseNavigateStable),t=Oh(Ul.UseNavigateStable),n=v.useRef(!1);return Ph(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ko({fromRouteId:t},l)))},[e,t])}function H0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wr(e){xe(!1)}function V0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=qt.Pop,navigator:l,static:i=!1,future:a}=e;No()&&xe(!1);let s=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:l,static:i,future:ko({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Fn(r));let{pathname:g="/",search:c="",hash:p="",state:y=null,key:w="default"}=r,A=v.useMemo(()=>{let S=uu(g,s);return S==null?null:{location:{pathname:S,search:c,hash:p,state:y,key:w},navigationType:o}},[s,g,c,p,y,w,o]);return A==null?null:v.createElement(Un.Provider,{value:u},v.createElement(hi.Provider,{children:n,value:A}))}function G0(e){let{children:t,location:n}=e;return R0(Xa(t),n)}new Promise(()=>{});function Xa(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Xa(r.props.children,l));return}r.type!==Wr&&xe(!1),!r.props.index||!r.props.children||xe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Xa(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(this,arguments)}function K0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Y0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J0(e,t){return e.button===0&&(!t||t==="_self")&&!Y0(e)}const Z0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],X0="6";try{window.__reactRouterVersion=X0}catch{}const q0="startTransition",Oc=Gp[q0];function eg(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=o0({window:o,v5Compat:!0}));let i=l.current,[a,s]=v.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},g=v.useCallback(c=>{u&&Oc?Oc(()=>s(c)):s(c)},[s,u]);return v.useLayoutEffect(()=>i.listen(g),[i,g]),v.useEffect(()=>H0(r),[r]),v.createElement(V0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:g,viewTransition:c}=t,p=K0(t,Z0),{basename:y}=v.useContext(Un),w,A=!1;if(typeof u=="string"&&ng.test(u)&&(w=u,tg))try{let h=new URL(window.location.href),k=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=uu(k.pathname,y);k.origin===h.origin&&b!=null?u=b+k.search+k.hash:A=!0}catch{}let S=N0(u,{relative:o}),f=rg(u,{replace:i,state:a,target:s,preventScrollReset:g,relative:o,viewTransition:c});function d(h){r&&r(h),h.defaultPrevented||f(h)}return v.createElement("a",qa({},p,{href:w||S,onClick:A||l?r:d,ref:n,target:s}))});var _c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_c||(_c={}));var zc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zc||(zc={}));function rg(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=I0(),u=pi(),g=Dh(e,{relative:i});return v.useCallback(c=>{if(J0(c,n)){c.preventDefault();let p=r!==void 0?r:Fl(u)===Fl(g);s(e,{replace:p,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,g,r,o,n,e,l,i,a])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var og={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),mi=(e,t)=>{const n=v.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:a="",children:s,...u},g)=>v.createElement("svg",{ref:g,...og,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${lg(e)}`,a].join(" "),...u},[...t.map(([c,p])=>v.createElement(c,p)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=mi("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=mi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=mi("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=mi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function cg(){const[e,t]=v.useState(!1);return m.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-8 bg-gray-200 border-b border-gray-400 flex items-center justify-between px-4 z-50 font-mono",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(Ye,{to:"/",className:"font-bold mr-4",children:"DanielleOS v1.0"}),m.jsxs("div",{className:"hidden sm:flex",children:[m.jsx(Ye,{to:"/",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Home"}),m.jsx(Ye,{to:"/about",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"About"}),m.jsx(Ye,{to:"/projects",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Projects"}),m.jsx(Ye,{to:"/blog",className:"mx-2 cursor-pointer hover:bg-gray-300 px-2",children:"Blog"})]})]}),m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"text-xs mr-4 hidden sm:block",children:new Date().toLocaleTimeString()}),m.jsx("button",{onClick:()=>t(!e),className:"sm:hidden text-gray-600",children:e?m.jsx(ug,{size:18}):m.jsx(ag,{size:18})})]}),e&&m.jsx("div",{className:"absolute top-8 right-0 w-48 bg-gray-200 border border-gray-400 shadow-md sm:hidden z-50",children:m.jsxs("div",{className:"py-1",children:[m.jsx(Ye,{to:"/",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Home"}),m.jsx(Ye,{to:"/about",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"About"}),m.jsx(Ye,{to:"/projects",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Projects"}),m.jsx(Ye,{to:"/blog",className:"block px-4 py-2 hover:bg-gray-300",onClick:()=>t(!1),children:"Blog"})]})})]})}var dg=`
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

`,je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},je.apply(this,arguments)};function Ao(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var re="-ms-",to="-moz-",Z="-webkit-",_h="comm",gi="rule",du="decl",fg="@import",zh="@keyframes",hg="@layer",Bh=Math.abs,fu=String.fromCharCode,es=Object.assign;function pg(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Fh(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function fl(e,t,n){return e.indexOf(t,n)}function $e(e,t){return e.charCodeAt(t)|0}function kr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function Uh(e){return e.length}function Hr(e,t){return t.push(e),e}function mg(e,t){return e.map(t).join("")}function Bc(e,t){return e.filter(function(n){return!Tt(n,t)})}var vi=1,Ar=1,Qh=0,ut=0,ve=0,Mr="";function yi(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:vi,column:Ar,length:i,return:"",siblings:a}}function Vt(e,t){return es(yi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Hr(e,e.siblings)}function gg(){return ve}function vg(){return ve=ut>0?$e(Mr,--ut):0,Ar--,ve===10&&(Ar=1,vi--),ve}function gt(){return ve=ut<Qh?$e(Mr,ut++):0,Ar++,ve===10&&(Ar=1,vi++),ve}function Mn(){return $e(Mr,ut)}function hl(){return ut}function xi(e,t){return kr(Mr,e,t)}function ts(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yg(e){return vi=Ar=1,Qh=At(Mr=e),ut=0,[]}function xg(e){return Mr="",e}function qi(e){return Fh(xi(ut-1,ns(e===91?e+2:e===40?e+1:e)))}function wg(e){for(;(ve=Mn())&&ve<33;)gt();return ts(e)>2||ts(ve)>3?"":" "}function kg(e,t){for(;--t&&gt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return xi(e,hl()+(t<6&&Mn()==32&&gt()==32))}function ns(e){for(;gt();)switch(ve){case e:return ut;case 34:case 39:e!==34&&e!==39&&ns(ve);break;case 40:e===41&&ns(e);break;case 92:gt();break}return ut}function Ag(e,t){for(;gt()&&e+ve!==57;)if(e+ve===84&&Mn()===47)break;return"/*"+xi(t,ut-1)+"*"+fu(e===47?e:gt())}function bg(e){for(;!ts(Mn());)gt();return xi(e,ut)}function Sg(e){return xg(pl("",null,null,null,[""],e=yg(e),0,[0],e))}function pl(e,t,n,r,o,l,i,a,s){for(var u=0,g=0,c=i,p=0,y=0,w=0,A=1,S=1,f=1,d=0,h="",k=o,b=l,E=r,C=h;S;)switch(w=d,d=gt()){case 40:if(w!=108&&$e(C,c-1)==58){fl(C+=U(qi(d),"&","&\f"),"&\f",Bh(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:C+=qi(d);break;case 9:case 10:case 13:case 32:C+=wg(w);break;case 92:C+=kg(hl()-1,7);continue;case 47:switch(Mn()){case 42:case 47:Hr(Eg(Ag(gt(),hl()),t,n,s),s);break;default:C+="/"}break;case 123*A:a[u++]=At(C)*f;case 125*A:case 59:case 0:switch(d){case 0:case 125:S=0;case 59+g:f==-1&&(C=U(C,/\f/g,"")),y>0&&At(C)-c&&Hr(y>32?Uc(C+";",r,n,c-1,s):Uc(U(C," ","")+";",r,n,c-2,s),s);break;case 59:C+=";";default:if(Hr(E=Fc(C,t,n,u,g,o,a,h,k=[],b=[],c,l),l),d===123)if(g===0)pl(C,t,E,E,k,l,c,a,b);else switch(p===99&&$e(C,3)===110?100:p){case 100:case 108:case 109:case 115:pl(e,E,E,r&&Hr(Fc(e,E,E,0,0,o,a,h,o,k=[],c,b),b),o,b,c,a,r?k:b);break;default:pl(C,E,E,E,[""],b,0,a,b)}}u=g=y=0,A=f=1,h=C="",c=i;break;case 58:c=1+At(C),y=w;default:if(A<1){if(d==123)--A;else if(d==125&&A++==0&&vg()==125)continue}switch(C+=fu(d),d*A){case 38:f=g>0?1:(C+="\f",-1);break;case 44:a[u++]=(At(C)-1)*f,f=1;break;case 64:Mn()===45&&(C+=qi(gt())),p=Mn(),g=c=At(h=C+=bg(hl())),d++;break;case 45:w===45&&At(C)==2&&(A=0)}}return l}function Fc(e,t,n,r,o,l,i,a,s,u,g,c){for(var p=o-1,y=o===0?l:[""],w=Uh(y),A=0,S=0,f=0;A<r;++A)for(var d=0,h=kr(e,p+1,p=Bh(S=i[A])),k=e;d<w;++d)(k=Fh(S>0?y[d]+" "+h:U(h,/&\f/g,y[d])))&&(s[f++]=k);return yi(e,t,n,o===0?gi:a,s,u,g,c)}function Eg(e,t,n,r){return yi(e,t,n,_h,fu(gg()),kr(e,2,-2),0,r)}function Uc(e,t,n,r,o){return yi(e,t,n,du,kr(e,0,r),kr(e,r+1,-1),r,o)}function Wh(e,t,n){switch(pg(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+to+e+re+e+e;case 5936:switch($e(e,t+11)){case 114:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+re+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+re+e+e;case 6165:return Z+e+re+"flex-"+e+e;case 5187:return Z+e+U(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Z+e+re+"flex-item-"+U(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":re+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Z+e+re+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+re+U(e,"shrink","negative")+e;case 5292:return Z+e+re+U(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+U(e,"-grow","")+Z+e+re+U(e,"grow","positive")+e;case 4554:return Z+U(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return re+"grid-column-align"+kr(e,t)+e;break;case 2592:case 3360:return re+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Tt(r.props,/grid-\w+-end/)})?~fl(e+(n=n[t].value),"span",0)?e:re+U(e,"-start","")+e+re+"grid-row-span:"+(~fl(n,"span",0)?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":re+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:re+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+to+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fl(e,"stretch",0)?Wh(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return re+o+":"+l+u+(i?re+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if($e(e,t+6)===121)return U(e,":",":"+Z)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+($e(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+re+"$2box$3")+e;case 100:return U(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Ql(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Cg(e,t,n,r){switch(e.type){case hg:if(e.children.length)break;case fg:case du:return e.return=e.return||e.value;case _h:return"";case zh:return e.return=e.value+"{"+Ql(e.children,r)+"}";case gi:if(!At(e.value=e.props.join(",")))return""}return At(n=Ql(e.children,r))?e.return=e.value+"{"+n+"}":""}function $g(e){var t=Uh(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function jg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Mg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case du:e.return=Wh(e.value,e.length,n);return;case zh:return Ql([Vt(e,{value:U(e.value,"@","@"+Z)})],r);case gi:if(e.length)return mg(n=e.props,function(o){switch(Tt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Vt(e,{props:[U(o,/:(read-\w+)/,":"+to+"$1")]})),Vn(Vt(e,{props:[o]})),es(e,{props:Bc(n,r)});break;case"::placeholder":Vn(Vt(e,{props:[U(o,/:(plac\w+)/,":"+Z+"input-$1")]})),Vn(Vt(e,{props:[U(o,/:(plac\w+)/,":"+to+"$1")]})),Vn(Vt(e,{props:[U(o,/:(plac\w+)/,re+"input-$1")]})),Vn(Vt(e,{props:[o]})),es(e,{props:Bc(n,r)});break}return""})}}var Ng={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ke={},br=typeof process<"u"&&Ke!==void 0&&(Ke.REACT_APP_SC_ATTR||Ke.SC_ATTR)||"data-styled",Hh="active",Vh="data-styled-version",wi="6.1.16",hu=`/*!sc*/
`,Wl=typeof window<"u"&&"HTMLElement"in window,Ig=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ke.REACT_APP_SC_DISABLE_SPEEDY!==""?Ke.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ke.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ke!==void 0&&Ke.SC_DISABLE_SPEEDY!==void 0&&Ke.SC_DISABLE_SPEEDY!==""&&Ke.SC_DISABLE_SPEEDY!=="false"&&Ke.SC_DISABLE_SPEEDY),Tg={},ki=Object.freeze([]),Sr=Object.freeze({});function Gh(e,t,n){return n===void 0&&(n=Sr),e.theme!==n.theme&&e.theme||t||n.theme}var Kh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pg=/(^-|-$)/g;function Qc(e){return e.replace(Rg,"-").replace(Pg,"")}var Dg=/(a)(d)/gi,Yo=52,Wc=function(e){return String.fromCharCode(e+(e>25?39:97))};function rs(e){var t,n="";for(t=Math.abs(e);t>Yo;t=t/Yo|0)n=Wc(t%Yo)+n;return(Wc(t%Yo)+n).replace(Dg,"$1-$2")}var ea,Yh=5381,ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jh=function(e){return ir(Yh,e)};function Zh(e){return rs(Jh(e)>>>0)}function Lg(e){return e.displayName||e.name||"Component"}function ta(e){return typeof e=="string"&&!0}var Xh=typeof Symbol=="function"&&Symbol.for,qh=Xh?Symbol.for("react.memo"):60115,Og=Xh?Symbol.for("react.forward_ref"):60112,_g={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ep={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bg=((ea={})[Og]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ea[qh]=ep,ea);function Hc(e){return("type"in(t=e)&&t.type.$$typeof)===qh?ep:"$$typeof"in e?Bg[e.$$typeof]:_g;var t}var Fg=Object.defineProperty,Ug=Object.getOwnPropertyNames,Vc=Object.getOwnPropertySymbols,Qg=Object.getOwnPropertyDescriptor,Wg=Object.getPrototypeOf,Gc=Object.prototype;function tp(e,t,n){if(typeof t!="string"){if(Gc){var r=Wg(t);r&&r!==Gc&&tp(e,r,n)}var o=Ug(t);Vc&&(o=o.concat(Vc(t)));for(var l=Hc(e),i=Hc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in zg||n&&n[s]||i&&s in i||l&&s in l)){var u=Qg(t,s);try{Fg(e,s,u)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function pu(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function os(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function bo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ls(e,t,n){if(n===void 0&&(n=!1),!n&&!bo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ls(e[r],t[r]);else if(bo(t))for(var r in t)e[r]=ls(e[r],t[r]);return e}function mu(e,t){Object.defineProperty(e,"toString",{value:t})}function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw On(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(hu);return n},e}(),ml=new Map,Hl=new Map,gl=1,Jo=function(e){if(ml.has(e))return ml.get(e);for(;Hl.has(gl);)gl++;var t=gl++;return ml.set(e,t),Hl.set(t,e),t},Vg=function(e,t){gl=t+1,ml.set(e,t),Hl.set(t,e)},Gg="style[".concat(br,"][").concat(Vh,'="').concat(wi,'"]'),Kg=new RegExp("^".concat(br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yg=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},Jg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(hu),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(Kg);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Vg(g,u),Yg(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Kc=function(e){for(var t=document.querySelectorAll(Gg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(br)!==Hh&&(Jg(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Zg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var np=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(br,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(br,Hh),r.setAttribute(Vh,wi);var i=Zg();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},Xg=function(){function e(t){this.element=np(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),qg=function(){function e(t){this.element=np(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ev=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yc=Wl,tv={isServer:!Wl,useCSSOMInjection:!Ig},Vl=function(){function e(t,n,r){t===void 0&&(t=Sr),n===void 0&&(n={});var o=this;this.options=je(je({},tv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wl&&Yc&&(Yc=!1,Kc(this)),mu(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(c){var p=function(f){return Hl.get(f)}(c);if(p===void 0)return"continue";var y=l.names.get(p),w=i.getGroup(c);if(y===void 0||!y.size||w.length===0)return"continue";var A="".concat(br,".g").concat(c,'[id="').concat(p,'"]'),S="";y!==void 0&&y.forEach(function(f){f.length>0&&(S+="".concat(f,","))}),s+="".concat(w).concat(A,'{content:"').concat(S,'"}').concat(hu)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return Jo(t)},e.prototype.rehydrate=function(){!this.server&&Wl&&Kc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ev(o):r?new Xg(o):new qg(o)}(this.options),new Hg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Jo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nv=/&/g,rv=/^\s*\/\/.*$/gm;function rp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=rp(n.children,t)),n})}function ov(e){var t,n,r,o=Sr,l=o.options,i=l===void 0?Sr:l,a=o.plugins,s=a===void 0?ki:a,u=function(p,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},g=s.slice();g.push(function(p){p.type===gi&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(nv,n).replace(r,u))}),i.prefix&&g.push(Mg),g.push(Cg);var c=function(p,y,w,A){y===void 0&&(y=""),w===void 0&&(w=""),A===void 0&&(A="&"),t=A,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(rv,""),f=Sg(w||y?"".concat(w," ").concat(y," { ").concat(S," }"):S);i.namespace&&(f=rp(f,i.namespace));var d=[];return Ql(f,$g(g.concat(jg(function(h){return d.push(h)})))),d};return c.hash=s.length?s.reduce(function(p,y){return y.name||On(15),ir(p,y.name)},Yh).toString():"",c}var lv=new Vl,is=ov(),op=x.createContext({shouldForwardProp:void 0,styleSheet:lv,stylis:is});op.Consumer;x.createContext(void 0);function as(){return v.useContext(op)}var iv=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=is);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,mu(this,function(){throw On(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=is),this.name+t.hash},e}(),av=function(e){return e>="A"&&e<="Z"};function Jc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;av(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lp=function(e){return e==null||e===!1||e===""},ip=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!lp(l)&&(Array.isArray(l)&&l.isCss||Ln(l)?r.push("".concat(Jc(o),":"),l,";"):bo(l)?r.push.apply(r,Ao(Ao(["".concat(o," {")],ip(l),!1),["}"],!1)):r.push("".concat(Jc(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ng||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(lp(e))return[];if(pu(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cn(o,t,n,r)}var l;return e instanceof iv?n?(e.inject(n,r),[e.getName(r)]):[e]:bo(e)?ip(e):Array.isArray(e)?Array.prototype.concat.apply(ki,e.map(function(i){return cn(i,t,n,r)})):[e.toString()]}function ap(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!pu(n))return!1}return!0}var sv=Jh(wi),uv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ap(t),this.componentId=n,this.baseHash=ir(sv,n),this.baseStyle=r,Vl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=En(o,this.staticRulesId);else{var l=os(cn(this.rules,t,n,r)),i=rs(ir(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=En(o,i),this.staticRulesId=i}else{for(var s=ir(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var c=this.rules[g];if(typeof c=="string")u+=c;else if(c){var p=os(cn(c,t,n,r));s=ir(s,p+g),u+=p}}if(u){var y=rs(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=En(o,y)}}return o},e}(),So=x.createContext(void 0);So.Consumer;function cv(e){var t=x.useContext(So),n=v.useMemo(function(){return function(r,o){if(!r)throw On(14);if(Ln(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw On(8);return o?je(je({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?x.createElement(So.Provider,{value:n},e.children):null}var na={};function dv(e,t,n){var r=pu(e),o=e,l=!ta(e),i=t.attrs,a=i===void 0?ki:i,s=t.componentId,u=s===void 0?function(k,b){var E=typeof k!="string"?"sc":Qc(k);na[E]=(na[E]||0)+1;var C="".concat(E,"-").concat(Zh(wi+E+na[E]));return b?"".concat(b,"-").concat(C):C}(t.displayName,t.parentComponentId):s,g=t.displayName,c=g===void 0?function(k){return ta(k)?"styled.".concat(k):"Styled(".concat(Lg(k),")")}(e):g,p=t.displayName&&t.componentId?"".concat(Qc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var A=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;w=function(k,b){return A(k,b)&&S(k,b)}}else w=A}var f=new uv(n,p,r?o.componentStyle:void 0);function d(k,b){return function(E,C,I){var B=E.attrs,L=E.componentStyle,X=E.defaultProps,q=E.foldedComponentIds,fe=E.styledComponentId,he=E.target,se=x.useContext(So),we=as(),ke=E.shouldForwardProp||we.shouldForwardProp,j=Gh(C,se,X)||Sr,T=function(K,z,W){for(var Ee,N=je(je({},z),{className:void 0,theme:W}),F=0;F<K.length;F+=1){var H=Ln(Ee=K[F])?Ee(N):Ee;for(var J in H)N[J]=J==="className"?En(N[J],H[J]):J==="style"?je(je({},N[J]),H[J]):H[J]}return z.className&&(N.className=En(N.className,z.className)),N}(B,C,j),D=T.as||he,G={};for(var Q in T)T[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&T.theme===j||(Q==="forwardedAs"?G.as=T.forwardedAs:ke&&!ke(Q,D)||(G[Q]=T[Q]));var O=function(K,z){var W=as(),Ee=K.generateAndInjectStyles(z,W.styleSheet,W.stylis);return Ee}(L,T),_=En(q,fe);return O&&(_+=" "+O),T.className&&(_+=" "+T.className),G[ta(D)&&!Kh.has(D)?"class":"className"]=_,I&&(G.ref=I),v.createElement(D,G)}(h,k,b)}d.displayName=c;var h=x.forwardRef(d);return h.attrs=y,h.componentStyle=f,h.displayName=c,h.shouldForwardProp=w,h.foldedComponentIds=r?En(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=p,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(b){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var I=0,B=E;I<B.length;I++)ls(b,B[I],!0);return b}({},o.defaultProps,k):k}}),mu(h,function(){return".".concat(h.styledComponentId)}),l&&tp(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Zc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Xc=function(e){return Object.assign(e,{isCss:!0})};function R(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||bo(e))return Xc(cn(Zc(ki,Ao([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?cn(r):Xc(cn(Zc(r,t)))}function ss(e,t,n){if(n===void 0&&(n=Sr),!t)throw On(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,R.apply(void 0,Ao([o],l,!1)))};return r.attrs=function(o){return ss(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ss(e,t,je(je({},n),o))},r}var sp=function(e){return ss(dv,e)},$=sp;Kh.forEach(function(e){$[e]=sp(e)});var fv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ap(t),Vl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(os(cn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Vl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function hv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=R.apply(void 0,Ao([e],t,!1)),o="sc-global-".concat(Zh(JSON.stringify(r))),l=new fv(r,o),i=function(s){var u=as(),g=x.useContext(So),c=x.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,s,u.styleSheet,g,u.stylis),x.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,s,u.styleSheet,g,u.stylis),function(){return l.removeStyles(c,u.styleSheet)}},[c,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,c,p){if(l.isStatic)l.renderStyles(s,Tg,g,p);else{var y=je(je({},u),{theme:Gh(u,c,i.defaultProps)});l.renderStyles(s,y,g,p)}}return x.memo(i)}const gu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",vu="inset 2px 2px 3px rgba(0,0,0,0.2)",yt=()=>R`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,xt=({background:e="material",color:t="materialText"}={})=>R`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Io=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>R`
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
`,_n=()=>R`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},pv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?gu:!1,o?vu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),me=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return R`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>pv({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},Er=()=>R`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,mv=e=>Buffer.from(e).toString("base64"),gv=typeof btoa<"u"?btoa:mv,Zo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${gv(n)})`},yu=(e="default")=>R`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Io({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${xt()}
    ${e==="flat"?_n():me({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${xt()}
    ${e==="flat"?_n():me({style:"window"})}
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
`,vv=$.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,yv=v.forwardRef(({children:e,underline:t=!0,...n},r)=>x.createElement(vv,{ref:r,underline:t,...n},e));yv.displayName="Anchor";const xv=$.header`
  ${me()};
  ${xt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,up=v.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>x.createElement(xv,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));up.displayName="AppBar";const Wn=()=>{};function Cn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function wv(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function qc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(wv(t)))}function hn(e){return typeof e=="number"?`${e}px`:e}const kv=$.div`
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
`,Av=$.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,bv=v.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>x.createElement(kv,{noBorder:n,ref:a,size:hn(r),square:o,src:l,...i},l?x.createElement(Av,{src:l,alt:e}):t));bv.displayName="Avatar";const Re={sm:"28px",md:"36px",lg:"44px"},Sv=R`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Re[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Re[t]:"auto"};
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
`,Ai=$.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?R`
          ${_n()}
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
        `:o==="menu"||o==="thin"?R`
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
        `:R`
          ${xt()};
          border: none;
          ${t&&yt()}
          ${e?Io({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?R`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:R`
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
  ${Sv}
`,ie=v.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Wn,primary:u=!1,variant:g="default",...c},p)=>x.createElement(Ai,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:p,size:l,square:i,type:r,variant:g,...c},n));ie.displayName="Button";function pn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=v.useState(e),u=v.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,u]}const us=$.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Re[e.size]};
  width: ${e=>e.square?Re[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Re[e.size]};
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
`,Ev=v.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>x.createElement(us,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));Ev.displayName="MenuListItem";const Cv=$.ul.attrs(()=>({role:"menu"}))`
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
`;Cv.displayName="MenuList";const Ct=20,Gl=$.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ct}px;
  height: ${Ct}px;
  opacity: 0;
  z-index: -1;
`,xu=$.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&yt()}

  ${us} & {
    margin: 0;
    height: 100%;
  }
  ${us}:hover & {
    ${({$disabled:e,theme:t})=>!e&&R`
        color: ${t.materialTextInvert};
      `};
  }
`,wu=$.span`
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
    ${e=>e.shadow&&`box-shadow:${vu};`}
  }
`,$v=$.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${yu()}
`,cp=v.forwardRef(({children:e,shadow:t=!0,...n},r)=>x.createElement($t,{ref:r,shadow:t,...n},x.createElement($v,null,e)));cp.displayName="ScrollView";const dp=R`
  width: ${Ct}px;
  height: ${Ct}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,jv=$($t)`
  ${dp}
  width: ${Ct}px;
  height: ${Ct}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Mv=$.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${dp}
  width: ${Ct-4}px;
  height: ${Ct-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Nv=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Iv=$.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Io({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Tv={flat:Mv,default:jv},Rv=v.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Wn,style:a={},value:s,variant:u="default",...g},c)=>{var p;const[y,w]=pn({defaultValue:n,onChange:i,readOnly:(p=g.readOnly)!==null&&p!==void 0?p:r,value:e}),A=v.useCallback(d=>{const h=d.target.checked;w(h),i(d)},[i,w]),S=Tv[u];let f=null;return o?f=Iv:y&&(f=Nv),x.createElement(xu,{$disabled:r,className:t,style:a},x.createElement(Gl,{disabled:r,onChange:r?void 0:A,readOnly:r,type:"checkbox",value:s,checked:y,"data-indeterminate":o,ref:c,...g}),x.createElement(S,{$disabled:r,role:"presentation"},f&&x.createElement(f,{$disabled:r,variant:u})),l&&x.createElement(wu,null,l))});Rv.displayName="Checkbox";const fp=$.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${hn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${hn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;fp.displayName="Separator";const Pv=$(Ai)`
  padding-left: 8px;
`,Dv=$(fp)`
  height: 21px;
  position: relative;
  top: 0;
`,hp=$.input`
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
`,Lv=$.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?R`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:R`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${hp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Er}
    outline-offset: -8px;
  }
`,Ov=$.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?R`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:R`
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
`,_v=v.forwardRef(({value:e,defaultValue:t,onChange:n=Wn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=pn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=c=>{const p=c.target.value;u(p),n(c)};return x.createElement(Pv,{disabled:r,as:"div",variant:o,size:"md"},x.createElement(hp,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),x.createElement(Lv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&x.createElement(Dv,{orientation:"vertical"}),x.createElement(Ov,{$disabled:r,variant:o}))});_v.displayName="ColorInput";const zv=$.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>R`
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
      ${Io({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,ed=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Bv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Fv({digit:e=0,pixelSize:t=2,...n}){const r=Bv[Number(e)].map((o,l)=>o?`${ed[l]} active`:ed[l]);return x.createElement(zv,{pixelSize:t,...n},r.map((o,l)=>x.createElement("span",{className:o,key:l})))}const Uv=$.div`
  ${me({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Qv={sm:1,md:2,lg:3,xl:4},Wv=v.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=v.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return x.createElement(Uv,{ref:o,...r},l.map((i,a)=>x.createElement(Fv,{digit:i,pixelSize:Qv[n],key:a})))});Wv.displayName="Counter";const pp=R`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Re.md};
`,Hv=$($t).attrs({"data-testid":"variant-default"})`
  ${pp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Vv=$.div.attrs({"data-testid":"variant-flat"})`
  ${_n()}
  ${pp}
  position: relative;
`,mp=R`
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
`,Gv=$.input`
  ${mp}
  padding: 0 8px;
`,Kv=$.textarea`
  ${mp}
  padding: 8px;
  resize: none;
  ${({variant:e})=>yu(e)}
`,gp=v.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Wn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Vv:Hv,g=v.useMemo(()=>{var c;return a.multiline?x.createElement(Kv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):x.createElement(Gv,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=a.type)!==null&&c!==void 0?c:"text",variant:i,...a})},[t,r,a,s,i]);return x.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});gp.displayName="TextInput";const Yv=$.div`
  display: inline-flex;
  align-items: center;
`,cs=$(ie)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?R`
          height: calc(50% - 1px);
        `:R`
          height: 50%;
        `}
`,Jv=$.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?R`
          height: calc(${Re.md} - 4px);
        `:R`
          height: ${Re.md};
          margin-left: 2px;
        `}
`,td=$.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?R`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:R`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${cs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?R`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:R`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,vp=v.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:g="default",width:c,...p},y)=>{const[w,A]=pn({defaultValue:t,onChange:l,readOnly:i,value:u}),S=v.useCallback(E=>{const C=parseFloat(E.target.value);A(C)},[A]),f=v.useCallback(E=>{const C=Cn(parseFloat(((w??0)+E).toFixed(2)),o??null,r??null);A(C),l==null||l(C)},[r,o,l,A,w]),d=v.useCallback(()=>{w!==void 0&&(l==null||l(w))},[l,w]),h=v.useCallback(()=>{f(a)},[f,a]),k=v.useCallback(()=>{f(-a)},[f,a]),b=g==="flat"?"flat":"raised";return x.createElement(Yv,{className:e,style:{...s,width:c!==void 0?hn(c):"auto"},...p},x.createElement(gp,{value:w,variant:g,onChange:S,disabled:n,type:"number",readOnly:i,ref:y,fullWidth:!0,onBlur:d}),x.createElement(Jv,{variant:g},x.createElement(cs,{"data-testid":"increment",variant:b,disabled:n||i,onClick:h},x.createElement(td,{invert:!0})),x.createElement(cs,{"data-testid":"decrement",variant:b,disabled:n||i,onClick:k},x.createElement(td,null))))});vp.displayName="NumberInput";function Zv(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const yp=e=>v.useMemo(()=>Zv(),[e]),xp=R`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,wp=R`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,ku=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Xv=$.div`
  ${xp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ku}:focus & {
    ${wp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,kp=R`
  height: ${Re.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?yt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,qv=$($t)`
  ${kp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,ey=$.div`
  ${_n()}
  ${kp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,ty=$.select`
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
  ${xp}
  cursor: pointer;
  &:disabled {
    ${yt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ap=$(Ai).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?R`
          height: 100%;
          margin-right: 0;
        `:R`
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
`,ny=$.span`
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
  ${Ap}:active & {
    margin-top: 2px;
  }
`,ry=$.ul`
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
  box-shadow: ${gu};
  ${({variant:e="default"})=>e==="flat"?R`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:R`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>yu(e)}
`,oy=$.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Re.md} - 4px);
  line-height: calc(${Re.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?wp:""}
  user-select: none;
`,ly=[],bp=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=ly,readOnly:i,style:a,value:s,variant:u,width:g})=>{var c;const p=v.useMemo(()=>l.filter(Boolean),[l]),[y,w]=pn({defaultValue:t??((c=p==null?void 0:p[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:i,value:s}),A=!(n||i),S=v.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),f=v.useMemo(()=>x.createElement(Ap,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},x.createElement(ny,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),d=v.useMemo(()=>u==="flat"?ey:qv,[u]);return v.useMemo(()=>({isEnabled:A,options:p,value:y,setValue:w,wrapperProps:S,DropdownButton:f,Wrapper:d}),[f,d,A,p,w,y,S])},iy={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},ay=1e3,sy=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:g,selectRef:c,setValue:p,wrapperRef:y})=>{const w=v.useRef(null),A=v.useRef([]),S=v.useRef(0),f=v.useRef(0),d=v.useRef(),h=v.useRef("search"),k=v.useRef(""),b=v.useRef(),[E,C]=pn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=v.useMemo(()=>{const N=s.findIndex(F=>F.value===g);return S.current=Cn(N,0,null),s[N]},[s,g]),[B,L]=v.useState(s[0]),X=v.useCallback(N=>{const F=w.current,H=A.current[N];if(!H||!F){d.current=N;return}d.current=void 0;const J=F.clientHeight,le=F.scrollTop,Ne=F.scrollTop+J,Ae=H.offsetTop,nt=H.offsetHeight,jt=H.offsetTop+H.offsetHeight;Ae<le&&F.scrollTo(0,Ae),jt>Ne&&F.scrollTo(0,Ae-J+nt),H.focus({preventScroll:!0})},[w]),q=v.useCallback((N,{scroll:F}={})=>{var H;const J=s.length-1;let le;switch(N){case"first":{le=0;break}case"last":{le=J;break}case"next":{le=Cn(f.current+1,0,J);break}case"previous":{le=Cn(f.current-1,0,J);break}case"selected":{le=Cn((H=S.current)!==null&&H!==void 0?H:0,0,J);break}default:le=N}f.current=le,L(s[le]),F&&X(le)},[f,s,X]),fe=v.useCallback(({fromEvent:N})=>{C(!0),q("selected",{scroll:!0}),i==null||i({fromEvent:N})},[q,i,C]),he=v.useCallback(()=>{h.current="search",k.current="",clearTimeout(b.current)},[]),se=v.useCallback(({focusSelect:N,fromEvent:F})=>{var H;n==null||n({fromEvent:F}),C(!1),L(s[0]),he(),d.current=void 0,N&&((H=c.current)===null||H===void 0||H.focus())},[he,n,s,c,C]),we=v.useCallback(({fromEvent:N})=>{E?se({focusSelect:!1,fromEvent:N}):fe({fromEvent:N})},[se,fe,E]),ke=v.useCallback((N,{fromEvent:F})=>{S.current!==N&&(S.current=N,p(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,p]),j=v.useCallback(({focusSelect:N,fromEvent:F})=>{ke(f.current,{fromEvent:F}),se({focusSelect:N,fromEvent:F})},[se,ke]),T=v.useCallback((N,{fromEvent:F,select:H})=>{var J;switch(h.current==="cycleFirstLetter"&&N!==k.current&&(h.current="search"),N===k.current?h.current="cycleFirstLetter":k.current+=N,h.current){case"search":{let le=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(k.current))===0});le<0&&(le=s.findIndex(Ne=>{var Ae;return((Ae=Ne.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(N))===0}),k.current=N),le>=0&&(H?ke(le,{fromEvent:F}):q(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=H?(J=S.current)!==null&&J!==void 0?J:-1:f.current;let Ne=s.findIndex((Ae,nt)=>{var jt;return nt>le&&((jt=Ae.label)===null||jt===void 0?void 0:jt.toLocaleUpperCase().indexOf(N))===0});Ne<0&&(Ne=s.findIndex(Ae=>{var nt;return((nt=Ae.label)===null||nt===void 0?void 0:nt.toLocaleUpperCase().indexOf(N))===0})),Ne>=0&&(H?ke(Ne,{fromEvent:F}):q(Ne,{scroll:!0}));break}}clearTimeout(b.current),b.current=setTimeout(()=>{h.current==="search"&&(k.current="")},ay)},[q,s,ke]),D=v.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=c.current)===null||F===void 0||F.focus(),we({fromEvent:N}),l==null||l(N))},[l,c,we]),G=v.useCallback(N=>{j({focusSelect:!0,fromEvent:N})},[j]),Q=v.useCallback(N=>{const{altKey:F,code:H,ctrlKey:J,metaKey:le,shiftKey:Ne}=N,{ARROW_DOWN:Ae,ARROW_UP:nt,END:jt,ENTER:yn,ESC:Wt,HOME:Si,SPACE:Ei,TAB:Nr}=iy,Au=F||J||le||Ne;if(!(H===Nr&&(F||J||le)||H!==Nr&&Au))switch(H){case Ae:{if(N.preventDefault(),!E){fe({fromEvent:N});return}q("next",{scroll:!0});break}case nt:{if(N.preventDefault(),!E){fe({fromEvent:N});return}q("previous",{scroll:!0});break}case jt:{if(N.preventDefault(),!E){fe({fromEvent:N});return}q("last",{scroll:!0});break}case yn:{if(!E)return;N.preventDefault(),j({focusSelect:!0,fromEvent:N});break}case Wt:{if(!E)return;N.preventDefault(),se({focusSelect:!0,fromEvent:N});break}case Si:{if(N.preventDefault(),!E){fe({fromEvent:N});return}q("first",{scroll:!0});break}case Ei:{N.preventDefault(),E?j({focusSelect:!0,fromEvent:N}):fe({fromEvent:N});break}case Nr:{if(!E)return;Ne||N.preventDefault(),j({focusSelect:!Ne,fromEvent:N});break}default:!Au&&H.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),T(H.replace(/^Key/,""),{select:!E,fromEvent:N}))}},[q,se,E,fe,T,j]),O=v.useCallback(N=>{Q(N),o==null||o(N)},[Q,o]),_=v.useCallback(N=>{q(N)},[q]),K=v.useCallback(N=>{E||(he(),e==null||e(N))},[he,e,E]),z=v.useCallback(N=>{he(),r==null||r(N)},[he,r]),W=v.useCallback(N=>{w.current=N,d.current!==void 0&&X(d.current)},[X]),Ee=v.useCallback((N,F)=>{A.current[F]=N,d.current===F&&X(d.current)},[X]);return v.useEffect(()=>{if(!E)return()=>{};const N=F=>{var H;const J=F.target;!((H=y.current)===null||H===void 0)&&H.contains(J)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[se,E,y]),v.useMemo(()=>({activeOption:B,handleActivateOptionIndex:_,handleBlur:K,handleButtonKeyDown:O,handleDropdownKeyDown:Q,handleFocus:z,handleMouseDown:D,handleOptionClick:G,handleSetDropdownRef:W,handleSetOptionRef:Ee,open:E,selectedOption:I}),[B,_,K,O,z,Q,D,G,W,Ee,E,I])},uy=v.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...g},c)=>{const{isEnabled:p,options:y,setValue:w,value:A,DropdownButton:S,Wrapper:f}=bp({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),d=v.useCallback(h=>{const k=y.find(b=>b.value===h.target.value);k&&(w(k.value),r==null||r(k,{fromEvent:h}))},[r,y,w]);return x.createElement(f,{className:e,style:{...i,width:u}},x.createElement(ku,null,x.createElement(ty,{...g,disabled:n,onChange:p?d:Wn,ref:c,value:A},y.map((h,k)=>{var b;return x.createElement("option",{key:`${h.value}-${k}`,value:h.value},(b=h.label)!==null&&b!==void 0?b:h.value)})),S))});uy.displayName="SelectNative";function cy({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=v.useCallback(()=>{e(n)},[e,n]),s=v.useCallback(g=>{i(g,n)},[n,i]),u=yp();return x.createElement(oy,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function dy({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:g,onChange:c,onClose:p,onFocus:y,onKeyDown:w,onMouseDown:A,onOpen:S,open:f,options:d,readOnly:h,shadow:k=!0,style:b,variant:E="default",value:C,width:I="auto",...B},L){const{isEnabled:X,options:q,setValue:fe,value:he,wrapperProps:se,DropdownButton:we,Wrapper:ke}=bp({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:d,style:b,readOnly:h,value:C,variant:E,width:I}),j=v.useRef(null),T=v.useRef(null),D=v.useRef(null),{activeOption:G,handleActivateOptionIndex:Q,handleBlur:O,handleButtonKeyDown:_,handleDropdownKeyDown:K,handleFocus:z,handleMouseDown:W,handleOptionClick:Ee,handleSetDropdownRef:N,handleSetOptionRef:F,open:H,selectedOption:J}=sy({onBlur:g,onChange:c,onClose:p,onFocus:y,onKeyDown:w,onMouseDown:A,onOpen:S,open:f,options:q,value:he,selectRef:T,setValue:fe,wrapperRef:D});v.useImperativeHandle(L,()=>({focus:yn=>{var Wt;(Wt=T.current)===null||Wt===void 0||Wt.focus(yn)},node:j.current,value:String(he)}),[he]);const le=v.useMemo(()=>J?typeof l=="function"?l(J):J.label:"",[l,J]),Ne=X?1:void 0,Ae=v.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),nt=yp(),jt=v.useMemo(()=>q.map((yn,Wt)=>{const Si=`${he}-${Wt}`,Ei=yn===G,Nr=yn===J;return x.createElement(cy,{activateOptionIndex:Q,active:Ei,index:Wt,key:Si,onClick:Ee,option:yn,selected:Nr,setRef:F})}),[G,Q,Ee,F,q,J,he]);return x.createElement(ke,{...se,$disabled:o,ref:D,shadow:k,style:{...b,width:I}},x.createElement("input",{name:u,ref:j,type:"hidden",value:String(he),...i}),x.createElement(ku,{"aria-disabled":o,"aria-expanded":H,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":X&&H?nt:void 0,onBlur:O,onFocus:z,onKeyDown:_,onMouseDown:X?W:A,ref:T,role:"button",tabIndex:Ne,...B},x.createElement(Xv,null,le),we),X&&H&&x.createElement(ry,{id:nt,onKeyDown:K,ref:N,role:"listbox",style:Ae,tabIndex:0,variant:E},jt))}const Sp=v.forwardRef(dy);Sp.displayName="Select";const fy=$.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Kl=v.forwardRef(function({children:t,noPadding:n=!1,...r},o){return x.createElement(fy,{noPadding:n,ref:o,...r},t)});Kl.displayName="Toolbar";const hy=$.div`
  padding: 16px;
`,Ot=v.forwardRef(function({children:t,...n},r){return x.createElement(hy,{ref:r,...n},t)});Ot.displayName="WindowContent";const py=$.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?R`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:R`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Ai} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,_t=v.forwardRef(function({active:t=!0,children:n,...r},o){return x.createElement(py,{active:t,ref:o,...r},n)});_t.displayName="WindowHeader";const my=$.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${me({style:"window"})}
  ${xt()}
`,gy=$.span`
  ${({theme:e})=>R`
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
`,Nn=v.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>x.createElement(my,{ref:l,shadow:r,...o},e,t&&x.createElement(gy,{"data-testid":"resizeHandle",ref:n})));Nn.displayName="Window";const vy=$(cp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,yy=$.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,xy=$.div`
  display: flex;
  flex-wrap: wrap;
`,Mt=$.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,wy=$.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,ky=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ay(e,t){return new Date(e,t+1,0).getDate()}function by(e,t,n){return new Date(e,t,n).getDay()}function Sy(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const Ey=v.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=v.useState(()=>Sy(t)),{year:s,month:u,day:g}=i,c=v.useCallback(({value:S})=>{a(f=>({...f,month:S}))},[]),p=v.useCallback(S=>{a(f=>({...f,year:S}))},[]),y=v.useCallback(S=>{a(f=>({...f,day:S}))},[]),w=v.useCallback(()=>{const S=[i.year,i.month+1,i.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(S)},[i.day,i.month,i.year,n]),A=v.useMemo(()=>{const S=Array.from({length:42}),f=by(s,u,1);let d=g;const h=Ay(s,u);return d=d<h?d:h,S.forEach((k,b)=>{if(b>=f&&b<h+f){const E=b-f+1;S[b]=x.createElement(Mt,{key:b,onClick:()=>{y(E)}},x.createElement(wy,{active:E===d},E))}else S[b]=x.createElement(Mt,{key:b})}),S},[g,y,u,s]);return x.createElement(Nn,{className:e,ref:l,shadow:o,style:{margin:20}},x.createElement(_t,null,x.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),x.createElement(Ot,null,x.createElement(Kl,{noPadding:!0,style:{justifyContent:"space-between"}},x.createElement(Sp,{options:ky,value:u,onChange:c,width:128,menuMaxHeight:200}),x.createElement(vp,{value:s,onChange:p,width:100})),x.createElement(vy,null,x.createElement(yy,null,x.createElement(Mt,null,"S"),x.createElement(Mt,null,"M"),x.createElement(Mt,null,"T"),x.createElement(Mt,null,"W"),x.createElement(Mt,null,"T"),x.createElement(Mt,null,"F"),x.createElement(Mt,null,"S")),x.createElement(xy,null,A)),x.createElement(Kl,{noPadding:!0,style:{justifyContent:"space-between"}},x.createElement(ie,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),x.createElement(ie,{fullWidth:!0,onClick:n?w:void 0,disabled:!n},"OK"))))});Ey.displayName="DatePicker";const Cy=e=>{switch(e){case"status":case"well":return R`
        ${me({style:"status"})}
      `;case"window":case"outside":return R`
        ${me({style:"window"})}
      `;case"field":return R`
        ${me({style:"field"})}
      `;default:return R`
        ${me()}
      `}},$y=$.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Cy(e)}
  ${({variant:e})=>xt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,jy=v.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>x.createElement($y,{ref:o,shadow:t,variant:n,...r},e));jy.displayName="Frame";const My=$.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&R`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&yt()}
`,Ny=$.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Iy=v.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>x.createElement(My,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&x.createElement(Ny,{variant:n},e),r));Iy.displayName="GroupBox";const Ty=$.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${hn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Ty.displayName="Handle";const Ry="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Py=$.div`
  display: inline-block;
  height: ${({size:e})=>hn(e)};
  width: ${({size:e})=>hn(e)};
`,Dy=$.span`
  display: block;
  background: ${Ry};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ly=v.forwardRef(({size:e=30,...t},n)=>x.createElement(Py,{size:e,ref:n,...t},x.createElement(Dy,null)));Ly.displayName="Hourglass";const Oy=$.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,_y=$.div`
  position: relative;
`,zy=$.div`
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
`,By=$($t).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Fy=$.div`
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
`,Uy=v.forwardRef(({backgroundStyles:e,children:t,...n},r)=>x.createElement(Oy,{ref:r,...n},x.createElement(_y,null,x.createElement(zy,null,x.createElement(By,{style:e},t)),x.createElement(Fy,null))));Uy.displayName="Monitor";const Qy=$.div`
  display: inline-block;
  height: ${Re.md};
  width: 100%;
`,Wy=$($t)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ep=R`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Hy=$.div`
  position: relative;
  top: 4px;
  ${Ep}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Vy=$.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ep}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Gy=$.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Cp=17,Ky=$.span`
  display: inline-block;
  width: ${Cp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Yy=v.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=v.useRef(null),[s,u]=v.useState([]),g=v.useCallback(()=>{if(!a.current||n===void 0)return;const c=a.current.getBoundingClientRect().width,p=Math.round(n/100*c/Cp);u(Array.from({length:p}))},[n]);return v.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),x.createElement(Qy,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},x.createElement(Wy,{variant:r,shadow:t},r==="default"?x.createElement(x.Fragment,null,x.createElement(Hy,{"data-testid":"defaultProgress1"},i),x.createElement(Vy,{"data-testid":"defaultProgress2",value:n},i)):x.createElement(Gy,{ref:a,"data-testid":"tileProgress"},s.map((c,p)=>x.createElement(Ky,{key:p})))))});Yy.displayName="ProgressBar";const $p=R`
  width: ${Ct}px;
  height: ${Ct}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Jy=$($t)`
  ${$p}
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
`,Zy=$.div`
  ${_n()}
  ${$p}
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
`,Xy=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,qy={flat:Zy,default:Jy},ex=v.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=qy[i];return x.createElement(xu,{$disabled:n,className:t,style:l},x.createElement(u,{$disabled:n,role:"presentation"},e&&x.createElement(Xy,{$disabled:n,variant:i})),x.createElement(Gl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&x.createElement(wu,null,r))});ex.displayName="Radio";const tx=typeof window<"u"?v.useLayoutEffect:v.useEffect;function xn(e){const t=v.useRef(e);return tx(()=>{t.current=e}),v.useCallback((...n)=>(0,t.current)(...n),[])}function nd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function rd(e,t){return v.useMemo(()=>e==null&&t==null?null:n=>{nd(e,n),nd(t,n)},[e,t])}let bi=!0,ds=!1,od;const nx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function rx(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&nx[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function ox(e){e.metaKey||e.altKey||e.ctrlKey||(bi=!0)}function ra(){bi=!1}function lx(){this.visibilityState==="hidden"&&ds&&(bi=!0)}function ix(e){e.addEventListener("keydown",ox,!0),e.addEventListener("mousedown",ra,!0),e.addEventListener("pointerdown",ra,!0),e.addEventListener("touchstart",ra,!0),e.addEventListener("visibilitychange",lx,!0)}function ax(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return bi||rx(t)}function sx(){ds=!0,window.clearTimeout(od),od=window.setTimeout(()=>{ds=!1},100)}function ux(){const e=v.useCallback(t=>{const n=Ch.findDOMNode(t);n!=null&&ix(n.ownerDocument)},[]);return{isFocusVisible:ax,onBlurVisible:sx,ref:e}}function cx(e,t,n){return(n-t)*e+t}function Xo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function qo(e){return e&&e.ownerDocument||document}function dx(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const fx=$.div`
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

  ${({orientation:e,size:t})=>e==="vertical"?R`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:R`
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
`,jp=()=>R`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?R`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:R`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,hx=$($t)`
  ${jp()}
`,px=$($t)`
  ${jp()}

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
`,mx=$.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?R`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:R`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?R`
          ${_n()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:R`
          ${xt()}
          ${me()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Io({mainColor:t.material,secondaryColor:t.borderLightest})}
`,ar=6,gx=$.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?R`
          right: ${-ar-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${ar}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:R`
          bottom: ${-ar}px;
          height: ${ar}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&R`
      ${yt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,vx=$.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?R`
          transform: translate(${ar+2}px, ${ar+1}px);
        `:R`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,yx=v.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:g="100%",step:c=1,value:p,variant:y="default",...w},A)=>{const S=y==="flat"?px:hx,f=u==="vertical",[d=o,h]=pn({defaultValue:e,onChange:i??a,value:p}),{isFocusVisible:k,onBlurVisible:b,ref:E}=ux(),[C,I]=v.useState(!1),B=v.useRef(),L=v.useRef(null),X=rd(E,B),q=rd(A,X),fe=xn(O=>{k(O)&&I(!0)}),he=xn(()=>{C!==!1&&(I(!1),b())}),se=v.useRef(),we=v.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((O,_)=>({label:void 0,value:o+c*_})):Array.isArray(n)?n:[],[n,r,o,c]),ke=xn(O=>{const _=(r-o)/10,K=we.map(Ee=>Ee.value),z=K.indexOf(d);let W=0;switch(O.key){case"Home":W=o;break;case"End":W=r;break;case"PageUp":c&&(W=d+_);break;case"PageDown":c&&(W=d-_);break;case"ArrowRight":case"ArrowUp":c?W=d+c:W=K[z+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":c?W=d-c:W=K[z-1]||K[0];break;default:return}O.preventDefault(),c&&(W=qc(W,c,o)),W=Cn(W,o,r),h(W),I(!0),i==null||i(W),a==null||a(W)}),j=v.useCallback(O=>{if(!B.current)return 0;const _=B.current.getBoundingClientRect();let K;f?K=(_.bottom-O.y)/_.height:K=(O.x-_.left)/_.width;let z;if(z=cx(K,o,r),c)z=qc(z,c,o);else{const W=we.map(N=>N.value),Ee=dx(W,z);z=W[Ee]}return z=Cn(z,o,r),z},[we,r,o,c,f]),T=xn(O=>{var _;const K=Xo(O,se.current);if(!K)return;const z=j(K);(_=L.current)===null||_===void 0||_.focus(),h(z),I(!0),i==null||i(z)}),D=xn(O=>{const _=Xo(O,se.current);if(!_)return;const K=j(_);a==null||a(K),se.current=void 0;const z=qo(B.current);z.removeEventListener("mousemove",T),z.removeEventListener("mouseup",D),z.removeEventListener("touchmove",T),z.removeEventListener("touchend",D)}),G=xn(O=>{var _;s==null||s(O),O.preventDefault(),(_=L.current)===null||_===void 0||_.focus(),I(!0);const K=Xo(O,se.current);if(K){const W=j(K);h(W),i==null||i(W)}const z=qo(B.current);z.addEventListener("mousemove",T),z.addEventListener("mouseup",D)}),Q=xn(O=>{var _;O.preventDefault();const K=O.changedTouches[0];K!=null&&(se.current=K.identifier),(_=L.current)===null||_===void 0||_.focus(),I(!0);const z=Xo(O,se.current);if(z){const Ee=j(z);h(Ee),i==null||i(Ee)}const W=qo(B.current);W.addEventListener("touchmove",T),W.addEventListener("touchend",D)});return v.useEffect(()=>{const{current:O}=B;O==null||O.addEventListener("touchstart",Q);const _=qo(O);return()=>{O==null||O.removeEventListener("touchstart",Q),_.removeEventListener("mousemove",T),_.removeEventListener("mouseup",D),_.removeEventListener("touchmove",T),_.removeEventListener("touchend",D)}},[D,T,Q]),x.createElement(fx,{$disabled:t,hasMarks:!!we.length,isFocused:C,onMouseDown:G,orientation:u,ref:q,size:hn(g),...w},x.createElement("input",{disabled:t,name:l,type:"hidden",value:d??0}),we&&we.map(O=>x.createElement(gx,{$disabled:t,"data-testid":"tick",key:O.value/(r-o)*100,orientation:u,style:{[f?"bottom":"left"]:`${(O.value-o)/(r-o)*100}%`}},O.label&&x.createElement(vx,{"aria-hidden":!0,"data-testid":"mark",orientation:u},O.label))),x.createElement(S,{orientation:u,variant:y}),x.createElement(mx,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":d,onBlur:he,onFocus:fe,onKeyDown:ke,orientation:u,ref:L,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(d-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:y}))});yx.displayName="Slider";const xx=$.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${vu};
  overflow-y: auto;
`,wx=v.forwardRef(function({children:t,...n},r){return x.createElement(xx,{ref:r,...n},t)});wx.displayName="TableBody";const kx=$.td`
  padding: 0 8px;
`,Ax=v.forwardRef(function({children:t,...n},r){return x.createElement(kx,{ref:r,...n},t)});Ax.displayName="TableDataCell";const bx=$.thead`
  display: table-header-group;
`,Sx=v.forwardRef(function({children:t,...n},r){return x.createElement(bx,{ref:r,...n},t)});Sx.displayName="TableHead";const Ex=$.th`
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
  ${({$disabled:e})=>!e&&R`
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
`,Cx=v.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Wn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return x.createElement(Ex,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},x.createElement("div",null,n))});Cx.displayName="TableHeadCell";const $x=$.tr`
  color: inherit;
  display: table-row;
  height: calc(${Re.md} - 2px);
  line-height: calc(${Re.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,jx=v.forwardRef(function({children:t,...n},r){return x.createElement($x,{ref:r,...n},t)});jx.displayName="TableRow";const Mx=$.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Nx=$($t)`
  &:before {
    box-shadow: none;
  }
`,Ix=v.forwardRef(({children:e,...t},n)=>x.createElement(Nx,null,x.createElement(Mx,{ref:n,...t},e)));Ix.displayName="Table";const Tx=$.button`
  ${xt()}
  ${me()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Re.md};
  line-height: ${Re.md};
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
    height: calc(${Re.md} + 4px);
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
`,Rx=v.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>x.createElement(Tx,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));Rx.displayName="Tab";const Px=$.div`
  ${xt()}
  ${me()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Dx=v.forwardRef(({children:e,...t},n)=>x.createElement(Px,{ref:n,...t},e));Dx.displayName="TabBody";const Lx=$.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Ox=$.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function _x(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const zx=v.forwardRef(({value:e,onChange:t=Wn,children:n,rows:r=1,...o},l)=>{const i=v.useMemo(()=>{var a;const s=(a=x.Children.map(n,c=>{if(!x.isValidElement(c))return null;const p={selected:c.props.value===e,onClick:t};return x.cloneElement(c,p)}))!==null&&a!==void 0?a:[],u=_x(s,r).map((c,p)=>({key:p,tabs:c})),g=u.findIndex(c=>c.tabs.some(p=>p.props.selected));return u.push(u.splice(g,1)[0]),u},[n,t,r,e]);return x.createElement(Lx,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>x.createElement(Ox,{key:a.key},a.tabs)))});zx.displayName="Tabs";const Bx=["blur","focus"],Fx=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function ld(e){return"nativeEvent"in e&&Bx.includes(e.type)}function id(e){return"nativeEvent"in e&&Fx.includes(e.type)}const Ux={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Qx=$.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${gu};
  text-align: center;
  font-size: 1rem;
  ${e=>Ux[e.position]}
`,Wx=$.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Hx=v.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:g,onOpen:c,style:p,text:y,position:w="top",...A},S)=>{const[f,d]=v.useState(!1),[h,k]=v.useState(),[b,E]=v.useState(),C=!n,I=!r,B=j=>{window.clearTimeout(h),window.clearTimeout(b);const T=window.setTimeout(()=>{d(!0),c==null||c(j)},o);k(T)},L=j=>{j.persist(),ld(j)?s==null||s(j):id(j)&&(u==null||u(j)),B(j)},X=j=>{window.clearTimeout(h),window.clearTimeout(b);const T=window.setTimeout(()=>{d(!1),a==null||a(j)},l);E(T)},q=j=>{j.persist(),ld(j)?i==null||i(j):id(j)&&(g==null||g(j)),X(j)},fe=C?q:void 0,he=C?L:void 0,se=I?L:void 0,we=I?q:void 0,ke=C?0:void 0;return x.createElement(Wx,{"data-testid":"tooltip-wrapper",onBlur:fe,onFocus:he,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},x.createElement(Qx,{className:e,"data-testid":"tooltip",position:w,ref:S,show:f,style:p,...A},y),t)});Hx.displayName="Tooltip";const fs=$(wu)`
  white-space: nowrap;
`,Mp=R`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":R`
          cursor: pointer;

          :focus {
            ${fs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Vx=$.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&R`
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
`,Gx=$.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?R`
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
        `:R`
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
`,Kx=$.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Yx=$.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Mp};

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
`,ad=$(xu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Mp};
`,Jx=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function sd(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function ud(e){e.preventDefault()}function Np({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,g=v.useCallback(c=>{var p,y;const w=!!(c.items&&c.items.length>0),A=n.includes(c.id),S=(p=t||c.disabled)!==null&&p!==void 0?p:!1,f=S?ud:b=>l(b,c),d=S?ud:b=>l(b,c),h=i===c.id,k=x.createElement(Jx,{"aria-hidden":!0},c.icon);return x.createElement(Gx,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":A,"aria-selected":h,hasItems:w},w?x.createElement(Kx,{open:A},x.createElement(Yx,{onClick:f,$disabled:S},x.createElement(ad,{$disabled:S},k,x.createElement(fs,null,c.label))),A&&x.createElement(Np,{className:e,disabled:S,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(y=c.items)!==null&&y!==void 0?y:[]})):x.createElement(ad,{as:"button",$disabled:S,onClick:d},k,x.createElement(fs,null,c.label)))},[e,t,n,u,o,l,i,a]);return x.createElement(Vx,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(g))}function Zx({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},g){const[c,p]=pn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[y,w]=pn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),A=v.useCallback((d,h)=>{if(i){const k=sd(c,h);i(d,k)}p(k=>sd(k,h))},[c,i,p]),S=v.useCallback((d,h)=>{w(h),l&&l(d,h)},[l,w]),f=v.useCallback((d,h)=>{d.preventDefault(),S(d,h.id),h.items&&h.items.length&&A(d,h.id)},[S,A]);return x.createElement(Np,{className:e,disabled:r,expanded:c,level:0,innerRef:g,select:f,selected:y,style:s,tree:u})}const Xx=v.forwardRef(Zx);Xx.displayName="TreeView";const qx=""+new URL("IMG_0400-BEAjLDHT.JPG",import.meta.url).href;var ew=["variant"];function tw(e,t){if(e==null)return{};var n=nw(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yl(){return Yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yl.apply(this,arguments)}var rw=function(t){return x.createElement("svg",Yl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),x.createElement("path",{stroke:"gray",d:"M7 2h9M6 3h1m9 0h1M5 4h1m11 0h1M4 5h1m13 0h1M3 6h1m15 0h11M3 7h1M3 8h1M3 9h1m-1 1h1m-3 1h2m-3 1h1m27 0h1M0 13h1m26 0h1M0 14h1m26 0h1M0 15h1m28 0h1M0 16h1m28 0h1M1 17h1m26 0h1M1 18h1m26 0h1M1 19h1m-1 1h1m0 1h1m26 0h1M2 22h1m26 0h1M2 23h1m-1 1h1m0 1h1m-1 1h1m-1 1h1"}),x.createElement("path",{stroke:"#fff",d:"M7 3h9M6 4h1M5 5h1M4 6h1M4 7h1m14 0h11M4 8h1M4 9h1m-1 1h1m-4 2h26"}),x.createElement("path",{stroke:"#ff0",d:"M7 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-2 1h1m0 1h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),x.createElement("path",{stroke:"silver",d:"M8 4h1m1 0h1m1 0h1m1 0h1m1 0h1M7 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h25m1 0h1M2 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),x.createElement("path",{stroke:"#000",d:"M30 7h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1M4 28h27"}),x.createElement("path",{stroke:"olive",d:"M30 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M4 27h27"}))},ow=function(t){return x.createElement("svg",Yl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),x.createElement("path",{stroke:"gray",d:"M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h12"}),x.createElement("path",{stroke:"#fff",d:"M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h10M1 8h1m0 1h1m-1 1h1m0 1h1"}),x.createElement("path",{stroke:"silver",d:"M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1"}),x.createElement("path",{stroke:"#ff0",d:"M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}),x.createElement("path",{stroke:"#000",d:"M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13"}))},lw={"32x32_4":rw,"16x16_4":ow},iw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=tw(t,ew),l=lw[r];return x.createElement(l,o)},aw=["variant"];function sw(e,t){if(e==null)return{};var n=uw(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function hs(){return hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hs.apply(this,arguments)}var cw=function(t){return x.createElement("svg",hs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),x.createElement("path",{stroke:"gray",d:"M11 0h8M8 1h3m8 0h3M6 2h2m14 0h2M5 3h1m18 0h1M4 4h1M3 5h1M2 6h1M1 7h1M1 8h1m27 0h1M0 9h1m29 0h1M0 10h1m29 0h1M0 11h1m29 0h2M0 12h1m29 0h2M0 13h1m29 0h2M0 14h1m29 0h2M0 15h1m29 0h2M1 16h1m27 0h3M1 17h1m27 0h3M2 18h1m25 0h3m-4 1h4m-5 1h4m-5 1h4m-5 1h4M7 23h1m14 0h5M8 24h3m8 0h7m-16 1h4m5 0h5m-11 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2"}),x.createElement("path",{stroke:"silver",d:"M11 1h1m6 0h1M8 2h1m12 0h1M6 3h1m16 0h1M12 4h1m4 0h1M2 7h1m9 0h1m4 0h1m9 0h1M1 9h1m26 0h1M1 15h1m26 0h1M2 17h1m24 0h1M6 21h1m16 0h1M8 22h1m12 0h1m-11 1h1m6 0h1m-5 1h1"}),x.createElement("path",{stroke:"#fff",d:"M12 1h6M9 2h12M7 3h16M5 4h7m6 0h7M4 5h8m6 0h8M3 6h9m6 0h9M3 7h9m6 0h9M2 8h26M2 9h26M1 10h10m7 0h11M1 11h12m5 0h11M1 12h12m5 0h11M1 13h12m5 0h11M1 14h12m5 0h11M2 15h11m5 0h10M2 16h11m5 0h10M3 17h10m5 0h9M3 18h8m9 0h7M4 19h22M5 20h20M7 21h16M9 22h12m-9 1h6m-3 1h3m-3 1h3m-3 1h3m-2 1h2m-1 1h1"}),x.createElement("path",{stroke:"#00f",d:"M13 4h4m-5 1h6m-6 1h6m-5 1h4m-6 3h7m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-7 1h9"}),x.createElement("path",{stroke:"#000",d:"M25 4h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1M3 19h1m22 0h1M4 20h1m20 0h1M5 21h1m18 0h1M6 22h2m14 0h2M8 23h3m8 0h3m-11 1h3m4 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2"}))},dw={"32x32_4":cw},fw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=sw(t,aw),l=dw[r];return x.createElement(l,o)},hw=["variant"];function pw(e,t){if(e==null)return{};var n=mw(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}var gw=function(t){return x.createElement("svg",Jl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),x.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),x.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),x.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),x.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),x.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),x.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),x.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),x.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},vw=function(t){return x.createElement("svg",Jl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),x.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),x.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),x.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),x.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),x.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),x.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),x.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),x.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},yw={"32x32_4":gw,"16x16_4":vw},xw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=pw(t,hw),l=yw[r];return x.createElement(l,o)};function ww(){const[e,t]=v.useState({welcome:{open:!0,minimized:!1,zIndex:4},about:{open:!0,minimized:!1,zIndex:3},projects:{open:!0,minimized:!1,zIndex:2}}),n=l=>{t({...e,[l]:{...e[l],open:!e[l].open,minimized:!1}})},r=l=>{t({...e,[l]:{...e[l],minimized:!e[l].minimized}})},o=l=>{const i=Math.max(...Object.values(e).map(a=>a.zIndex));t({...e,[l]:{...e[l],zIndex:i+1}})};return m.jsxs("div",{className:`h-screen w-full overflow-hidden relative bg-cover bg-center
    `,style:{backgroundImage:`url(${qx})`},children:[m.jsxs("div",{className:"fixed top-20 left-4 flex flex-col",children:[m.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("about"),o("about")},children:[m.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:m.jsx(fw,{variant:"32x32_4"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"About"})]}),m.jsxs("div",{className:"flex flex-col items-center mb-4 cursor-pointer",onClick:()=>{n("projects"),o("projects")},children:[m.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:m.jsx(iw,{variant:"32x32_4"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Projects"})]}),m.jsxs(Ye,{to:"/blog",className:"flex flex-col items-center mb-4 no-underline",children:[m.jsx("div",{className:"w-9 h-9 flex items-center justify-center mb-1",children:m.jsx(xw,{variant:"32x32_4"})}),m.jsx("div",{className:"text-white text-xs shadow-sm bg-blue-900 bg-opacity-70 px-1",children:"Blog"})]})]}),e.welcome.open&&!e.welcome.minimized&&m.jsxs(Nn,{style:{width:600,height:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:e.welcome.zIndex},onClick:()=>o("welcome"),children:[m.jsxs(_t,{active:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"Welcome to DanielleOS"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>n("about"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsx(Ot,{children:m.jsxs("div",{className:"text-center p-6",children:[m.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Danielle Ejiogu"}),m.jsx("p",{className:"text-lg mb-3",children:"Aspiring Software Engineer"}),m.jsx("p",{className:"italic mb-8",children:"Full-Time Student, Nostalgia Fetishist, and Research Assistant"}),m.jsx(ie,{onClick:()=>n("welcome"),children:"OK"})]})})]}),e.about.open&&!e.about.minimized&&m.jsxs(Nn,{style:{width:500,height:300,position:"absolute",top:150,left:400,zIndex:e.about.zIndex},onClick:()=>o("about"),children:[m.jsxs(_t,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"About Me"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>r("about"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsxs(Ot,{children:[m.jsx("p",{className:"mb-3",children:"Full-stack developer with a passion for creating user-friendly applications and solving complex problems."}),m.jsx("p",{className:"font-bold mb-2",children:"Skills:"}),m.jsxs("div",{className:"grid grid-cols-2 gap-1 mb-4",children:[m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"JavaScript"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"React"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"TypeScript"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"Node.js"}),m.jsx(ie,{size:"sm",style:{fontSize:"12px"},children:"Scala"})]}),m.jsx("div",{className:"flex justify-end",children:m.jsx(Ye,{to:"/about",children:m.jsx(ie,{children:"Learn More →"})})})]})]}),e.projects.open&&!e.projects.minimized&&m.jsxs(Nn,{style:{width:380,position:"absolute",top:150,right:100,zIndex:e.projects.zIndex},onClick:()=>o("projects"),children:[m.jsxs(_t,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"My Projects"}),m.jsx("div",{children:m.jsx(ie,{onClick:()=>r("projects"),children:m.jsx("span",{className:"close-icon"})})})]}),m.jsxs(Ot,{children:[m.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"font-bold mb-1",children:"Computational Model of Yapese Navigation"}),m.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:"[Preview]"})]}),m.jsxs("div",{children:[m.jsx("p",{className:"font-bold mb-1",children:"Architechural Optimizations for DP-SGD"}),m.jsx("div",{className:"w-full h-20 bg-gray-300 flex items-center justify-center border border-black",children:"[Preview]"})]})]}),m.jsx("p",{className:"mb-4",children:"Check out my latest projects, from web applications to innovative software solutions."}),m.jsx("div",{className:"flex justify-end",children:m.jsx(Ye,{to:"/projects",children:m.jsx(ie,{children:"View All Projects →"})})})]})]}),m.jsx(up,{style:{position:"fixed",bottom:0,top:"auto"},children:m.jsxs(Kl,{style:{justifyContent:"space-between"},children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(ie,{style:{fontWeight:"bold",marginRight:"4px"},children:"Start"}),Object.entries(e).map(([l,{open:i}])=>i&&m.jsx(ie,{active:!e[l].minimized,onClick:()=>{e[l].minimized?(r(l),o(l)):r(l)},style:{fontSize:"12px",marginRight:"4px"},children:l==="welcome"?"Welcome":l==="about"?"About Me":l==="projects"?"My Projects":"Connect With Me"},l))]}),m.jsx("div",{className:"text-xs",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})})]})}const kw=""+new URL("paper-rDmqkJhG.png",import.meta.url).href,Aw="data:image/gif;base64,R0lGODlhWAAfAIeWAN4CAvKCMuZCGuIiDs5ChqbOntYiSt4SBvaiPu5iJspeuvri4uYyEtoSJu6CgtJCgtIyYs5Sov7CSvKioupiYsZu2t4KAvbCwupSHtYiQuIaCtI6cs5KkvqyQu5yKspmyuIyMvKSkvaSNuIqDv7y8toKEvrS0uZCQtoSItYaNt4GAtYqUspasv7OTva2tu5ycsZ26u6KiuZSUtI+fsZq2vKKNs5GjuIWBvqqQu5qJvrq6uY6FtI2avKqqsZy5vbKyupaIs5Onvq6RvJ6LuY6OuIqKtoOGtoGCupaWupKHuIiIspiwtoWKs5Wqv7KSupqat4OBuIaGtI+espq0vKamvaaOuYuEv76+vra2uZKStYeOtIuXtJChtYmSt4SEvamPuY2Ev6CgtIyas5SqsZu4uIuLtI6es5Omspm0uI2NuYqEtoKGuIWFspauv7STu56eu6OjupWVvKONu5uKv7u7vKurvrOzu5eIvq+RvJ+Lt4GCtoWMt4CBvKGMupGGuImDt4WFvJ2Lvrm5u6GhvKmpupmZvbGxupWIvq2RvKWlvaWOv729vrW1uZGRva6uuY+PupeXuImJupubuIeHvKenvaePv7+/vre3uZOTu5+fu5mJv7GSuIeCvquQuY+FupOHtoaMspq1tYuWuISBt4KCupSUv7q6vrKyt4ODvqmPuY2NvKOjvaONvaurs5CispevtIyZs5SpsZu3tYiRtI6ds5KlspmzuIqEtoKFt4GBtYqVspatsZ27tI+gs5GkuIWCu5qKtI2bsZy6s5OotoOHtoGDspixtoWLv7KTtYePtYmTuY2Fv7SUu5eJvq+SvJ+MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgDQACwAAAAAWAAfAAAI/wABCBxIsKDBgwgTKlzIcKGlhxAjSpxIsaLFixgzVhRoqaHHjyBDJuwIgKTIkyhTEiRpUqXLlwxZrixZsGNLmjdt1qQ5MyfPgTp77vT5UyLQiEchJn241KRRjkihKpXKlGpLmUlrVs26cqtUrTm9lhQ7lStQjjsN3kSr9uDanzPbyk0b9y3Mu3ex4t2LVy/fvyr9AihAuMDAwoYFepAjRwMATYxHMD4A4I+cAAAwIOjwBQOAxQwAHGDMiTHjGp4EatpcRYDAA306dQrgeLEcyjlIn4WLmPDg3gK/uHHjeZMbZp6GO97hBg/zDpqcuGHQgZlrTsNvDa/SaXhpN5uEu//5dGATsw5C3Dg7UJ24CmTHR+xu2bu+bwBfmAmRM0K/G0/MMMMJADswgwcQ533yiQAadJfDHwAyw8BxKgDgDDMJuNHCgAh2MIcbVQiEgBtzdNICHn1MmN4t8xWE2G8vBudGAM5kGIB1yhGoHnvHgcgjMz26oR0zVXTgRgcYuNGJQAMAKQIzOQgEjBtymNiHMzm00IeQLSaUmEH5fdLcFx78B+SABeIBgAoCBOAEMx5UV4UHfQDJAJByMLPJAAIwg4hAfwyX5xyKuVFDJ8gkKQQCQ0jYJUJfFiTcAcMF4gEzYODBDBAWXEpmCx58xsyh4wHAiZ1AqlCFGwhQ6oYAFtz/+AUQR2pwACJuAGGiBsfNMYQb8rFll0CREpQfANV5cikYCB4HpCcMtKBkCy2A0Yl1KmDHjBUU/tGCdTkMN5wTt1iQX49fWGAiAOkt0yiLwipU7EAYRClADhbskINjyvbhQbAjzBGAB38AcMiDAECRQw4HLCxQvZ8AsAydmjgGgAUY5BHAIRVikAAA96rgCcOPHgGAyYCl7JFgCJmMssoq6+XyyTTDbHNdBF0BgM4zXTEzTkMFLdTQZ/lkdFpOIWXyU2OVxfTTUTW9FdROR83TVWRlHdbWYHXdFUkoTxU2WWzt9rNJL7+ltltsC5R223Q9ejNMPw9Ut1wtoTyz3jS/MryQ327XbLfgfRNOEOCBE85SRFc81PjjjlsCuUaNSzQ5RJdLrnnlE3HOeORWzy26QgEBACH5BAUKANAALAQABQBPABYAAAj/AKEJHEgQADSDBBMONIhQYUKGDhVCjFjwIEWBADJmvHhQY8OIHj86DMmR5EWNHDFuTImS5cqSL0+mXDgTY02LNUXe3Mmzp8+fQIMKHUp0Z4ECKqEdTQqNQJAgxADQCjIsxVNcAJgM8wVgyy5bu7YAcJoCQIlhQVBQpVprlsENuz6MMWCQmK8lS3xFdToMqxmqKAAspYl0ocFdvGBAAEAjcQYYvKI+ppFBmLENsnilWMJrBQBiiVMkZsFZmFpeshQI87EFV+MPtmDQwLUEBgyxZGyXHUxxowJetoKkEGZL2CzIUZMJo7GFl7EtugwYMSYsGJNZvIQNh5GRBgwxvHxE/4UFwxgtGCwMsuBFy5gPGhxEFy+rtLDBwkxV26ARTBgHXrMIExkAGfAyRQnGwCAMDGOUwBkvEOqWHQvGOLeFZQahkFgswmxgEC28BLEEGRzQQIsPHMBAX0JI6QRNG53BYMsrBAhTIAyBJcMLDQZ14QsZvLiyhDBjEGBDdinYFsRyKCgjo0Ep+CDMMLyYcURTPpyxBGs+gOWKdjq16NBvuChIAAEwaEGDMLAcUeMuBPhAwFjCaNkZACgomKQwALAgzC5GCCOMAUe4AsMusDhnxBoVwjKiERBKgeaKBImpUBvcJZiBGSomqqCCs0QpzJY+pECdWKCpKCAADfjASxcbQJYGGRkpHIFpYry0ccSWABSXjKHHhIlTQlvQAoABtByRDC3JEeALAfSlYIYNBDABAAQbNABAMbRsgEu3Bm2xgVgpOLuBEQhtYYMrWxzRlYfKbHBEBrRgVdS9+Oar77789jvQlVemBPBME3F0pYsSDQuSRzC11BvDJ2XkrsEAuBtwbxMLXDHBGVOM8EMx9XbTxwnnNDJHAQEAIfkEBQoA0AAsBAAFAE4AFgAACP8AAQAIM1CgQUsAEBosSHAhQoUGCTY8mHAhQ4sPLUrEWHFgmI8TLYkUGRFkyJEQTZ4cWRLkQZQtP75k6XGiQJotMZJc6NLhzpw+IQrsOZOnxZtHCx4VGjEp06FOk9qkmLSq1atYs2rFWqBrAYNev24dS7Ys2LBf0Yo1y7btUbVwBcaoU0cJgEx0QdAFBKBMHUoAKBi6ZIgCADh1HgEARFcJXbqEMAl8YwiLI8kAlFAyYYKSXcR1+DqgG0lgWABqDf4Q+QSADpFZRNptZEkQbUaZSFh6ZMISkswi04i80PtKpDqWSKy2BAnQ60uXLOkA1NsShSOLgidda3H1pR7CF1j/wiSyNG0dkiwxgkRBxqTeb8qQtyRc4ev0V+ymx+LA0gWBF1gyiAlXCDIBEZZEl8Z2Va1GiQ4vWEKJJbFZYldsgniBxUguAMIISiIh6N+HWBSinkBFiOSCJZkI1F8dJiwygSAOXDEBfQwmtRoStf0AB4WyAUCbIAAcIQMVuiXSmyNwTEifSMjpEIkMCQpUBpQCCjSIJYQQSIElCxjy44JvVWWHJVGIBMePj9x3xI9iXgHHYVz29lskIZLkiCWGTHKFJTIcQQWf+00ySXSSxKiESIMkguNYqwHwYRYxWHJCeihhQsSfBF5xQm+QAPekJUekCGgmKC2SxhFnjvTDEYwssgJAdCf8SARZhbQoQyaoNJLJJEI2GQOZIDhAySBlAPBEJkUA4EUmDkThQIuBZRLqI01mYleRFFBBRSEWKPsGADI4cEQWDvDl1rrssntEu/CW9e68RdZr0Lvx5ovVFQDwu1CL1FLEFEEBI8UUwBwNfFfCGi2cEEwCZWKSQEf8iZNKM/0kMVEgGrSxTDdBfNfEDw8MclE8nRyyyVPhNJTKJWuk8lNKcXTUVEjdHJXOS0klUEAAOw==",bw=""+new URL("girll-D8FoTQyF.gif",import.meta.url).href,Sw=""+new URL("dani-D9eHUEkL.JPG",import.meta.url).href,Ew=""+new URL("dani3-CJno3SJ5.JPG",import.meta.url).href,Cw=""+new URL("dani4--lz8sRcD.JPG",import.meta.url).href,$w=""+new URL("strawberry-DOYG374r.gif",import.meta.url).href,cd=$(Nn)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,zr=$.span`
  color: #4b00d9;
  font-weight: bold;
`,Nt=$.div`
  border: 2px inset #c0c0c0;
  padding: 8px;
  background: white;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
`,jw=()=>m.jsxs("div",{className:"min-h-screen bg-cover bg-center p-4 flex items-center justify-center",style:{backgroundImage:`url(${kw})`},children:[m.jsx("div",{className:"absolute top-24 left-4",children:m.jsx("img",{src:Aw,alt:"PMM"})}),m.jsx("div",{className:"absolute mid top-1/2 left-10",children:m.jsx("img",{src:bw,alt:"PMM"})}),m.jsxs("div",{className:"w-full max-w-4xl",children:[m.jsxs(cd,{className:"w-full mb-4",children:[m.jsxs(_t,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#ABOUT ME"}),m.jsx(ie,{style:{marginLeft:"auto"},children:m.jsx("span",{className:"close-icon"})})]}),m.jsx(Ot,{className:"bg-[#FFFAF0] p-4",children:m.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[m.jsx("div",{className:"col-span-1",children:m.jsxs(Nt,{children:[m.jsx("img",{src:Sw,alt:"Character avatar",className:"w-full"}),m.jsx("img",{src:Ew,alt:"Character avatar",className:"w-full mt-2"}),m.jsx("img",{src:Cw,alt:"Character avatar",className:"w-full mt-2"})]})}),m.jsxs("div",{className:"col-span-3 grid gap-4",children:[m.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[m.jsxs(Nt,{children:[m.jsx(zr,{children:"NAME:"})," Danielle"]}),m.jsxs(Nt,{children:[m.jsx(zr,{children:"AGE:"})," 20s"]}),m.jsxs(Nt,{children:[m.jsx(zr,{children:"LOCATION:"})," USA"]})]}),m.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[m.jsxs(Nt,{children:[m.jsx(zr,{children:"MBTI:"})," INFJ"]}),m.jsxs(Nt,{className:"col-span-2",children:[m.jsx(zr,{children:"ASTRO:"})," ♋♏♏"]})]}),m.jsxs(Nt,{children:[m.jsx("p",{className:"mb-4",children:"Hi!!! I assume you're here because I put this link in a job application. I'm looking for industry experience after an exciting summer of research in Hawaii. I'm a rising senior at Purdue University with a passion for interdisciplinary problem solving. I thrive in collaborative environments and love researching! I have experience in full-stack development, data science, and machine learning."}),m.jsx("p",{className:"mb-4",children:"I also love reading, gaming, cooking, and learning new technologies. I'm currently a research assistant on two different projects, on in ML and the other in historical modeling. I'm also a Resident Assistant!"}),m.jsxs("p",{children:["I made this site to host my creative projects and showcase my skills. You can find my GitHub repo ",m.jsx("a",{href:"#",className:"text-indigo-600 no-underline hover:underline",children:"here"}),"."]})]})]})]})})]}),m.jsxs(cd,{className:"w-full",children:[m.jsxs(_t,{style:{backgroundColor:"#4b00d9",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#INTERESTS"}),m.jsx(ie,{style:{marginLeft:"auto"},children:m.jsx("span",{className:"close-icon"})})]}),m.jsx(Ot,{className:"bg-[#FFFAF0] p-4",children:m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs(Nt,{children:[m.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"FAVORITE MEDIA"}),m.jsxs("ul",{className:"list-disc pl-5",children:[m.jsx("li",{children:"Their Eyes Were Watching God by Zora Neale Hurston"}),m.jsx("li",{children:"Everything Everywhere All at Once"}),m.jsx("li",{children:"The ArchAndroid by Janelle Monae"})]})]}),m.jsxs(Nt,{children:[m.jsx("h3",{className:"text-xl font-bold text-indigo-600 mb-3",children:"HOBBIES:"}),m.jsxs("ul",{className:"list-disc pl-5",children:[m.jsx("li",{children:"Coding"}),m.jsx("li",{children:"Writing"}),m.jsx("li",{children:"Reading"})]})]})]})})]})]}),m.jsx("div",{className:"absolute bottom-4 right-4",children:m.jsx("img",{src:$w,alt:"strawberry"})})]}),dd=$(Nn)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`,Mw=$.div`
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
`,Nw=$.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  transition: transform 0.1s;
`,Iw=$.div`
  color: white;
  text-shadow: 1px 1px 1px black;
  padding: 2px;
  font-size: 11px;
  text-align: center;
  max-width: 100%;
`,Tw=$.div`
  width: 100%;
  height: calc(100vh - 30px); /* Full height minus taskbar */
  background-color: #000080;
  position: relative;
  overflow: hidden;
`,Rw=()=>{var i;const[e,t]=v.useState(null),[n,r]=v.useState(!0),o=[{id:"project1",title:"Project A",description:"This is a full-stack web application built with React and Node.js.",image:"/api/placeholder/500/300",link:"#",technologies:["React","Node.js","MongoDB"]},{id:"project2",title:"Project B",description:"A machine learning project focused on natural language processing.",image:"/api/placeholder/500/300",link:"#",technologies:["Python","TensorFlow","NLTK"]},{id:"project3",title:"Project C",description:"Mobile app developed for Android and iOS platforms.",image:"/api/placeholder/500/300",link:"#",technologies:["React Native","Firebase"]},{id:"project4",title:"Project D",description:"Data visualization dashboard for analyzing historical data.",image:"/api/placeholder/500/300",link:"#",technologies:["D3.js","React","Python"]},{id:"project5",title:"Project E",description:"Browser extension that enhances productivity.",image:"/api/placeholder/500/300",link:"#",technologies:["JavaScript","Chrome API"]},{id:"project6",title:"Project F",description:"Command-line tool for automating repetitive tasks.",image:"/api/placeholder/500/300",link:"#",technologies:["Node.js","Shell Scripting"]}],l={project1:"https://win98icons.alexmeub.com/icons/png/notepad-1.png",project2:"https://win98icons.alexmeub.com/icons/png/msie1-2.png",project3:"https://win98icons.alexmeub.com/icons/png/winamp-1.png",project4:"https://win98icons.alexmeub.com/icons/png/paint_old-0.png",project5:"https://win98icons.alexmeub.com/icons/png/cd_drive-4.png",project6:"https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"};return m.jsxs("div",{className:"h-screen w-full flex flex-col overflow-hidden",children:[m.jsxs(Tw,{children:[m.jsxs("div",{className:"flex flex-wrap pl-4 pt-14",children:[" ",o.map(a=>m.jsxs(Mw,{onClick:()=>t(a.id),children:[m.jsx(Nw,{className:"icon-image",src:l[a.id],alt:a.title}),m.jsx(Iw,{children:a.title})]},a.id))]}),n&&m.jsx("div",{className:"absolute top-24 right-0 left-0 mx-auto",style:{width:"450px"},children:m.jsxs(dd,{children:[m.jsxs(_t,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:"#PROJECTS"}),m.jsx(ie,{style:{marginLeft:"auto"},onClick:()=>r(!1),children:m.jsx("span",{children:"×"})})]}),m.jsxs(Ot,{className:"bg-white p-4",children:[m.jsx("p",{className:"text-center mb-2",children:"Click on any project icon to learn more about it!"}),m.jsx("p",{className:"text-center text-gray-600 text-sm",children:"These projects showcase my skills and experience as a developer."})]})]})}),o.map(a=>e===a.id&&m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsxs(dd,{className:"w-4/5 max-w-4xl",children:[m.jsxs(_t,{style:{backgroundColor:"#9370DB",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 8px"},children:[m.jsx("span",{children:a.title}),m.jsx(ie,{style:{marginLeft:"auto"},onClick:()=>t(null),children:m.jsx("span",{children:"×"})})]}),m.jsx(Ot,{className:"bg-white p-4",children:m.jsxs("div",{className:"flex flex-col",children:[m.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover mb-4 border border-gray-400"}),m.jsx("p",{className:"mb-4",children:a.description}),m.jsxs("div",{className:"mb-4",children:[m.jsx("strong",{children:"Technologies:"}),m.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:a.technologies.map((s,u)=>m.jsx("span",{className:"bg-gray-200 px-2 py-1 text-sm rounded",children:s},u))})]}),m.jsxs("div",{className:"flex justify-end",children:[m.jsx(ie,{onClick:()=>window.open(a.link,"_blank"),style:{marginRight:"8px"},children:"View Project"}),m.jsx(ie,{onClick:()=>t(null),children:"Close"})]})]})})]})},a.id))]}),m.jsxs("div",{className:"h-10 bg-gray-300 border-t-2 border-white flex items-center px-2",children:[m.jsx(ie,{className:"mr-3",children:m.jsxs("span",{className:"flex items-center text-sm",children:[m.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"Start",className:"w-5 h-5 mr-1"}),"Start"]})}),m.jsx("div",{className:"border-l-2 border-gray-500 h-6 mx-2"}),e&&m.jsxs("div",{className:"bg-gray-400 border-t-2 border-white border-l-2 px-2 py-1 flex items-center text-sm",children:[m.jsx("img",{src:l[e],alt:"Running",className:"w-4 h-4 mr-1"}),(i=o.find(a=>a.id===e))==null?void 0:i.title]})]})]})},oa=[{id:1,title:"Best Foot Forward: My time with Project oCEANIC in Hawaii",excerpt:"Learn how to set up a new React project with TypeScript and start building type-safe applications.",date:"2025-03-01"},{id:2,title:"Building Modern UIs with Tailwind CSS",excerpt:"Explore the power of utility-first CSS with Tailwind and create beautiful user interfaces.",date:"2025-02-28"}];function Pw(){const[e,t]=v.useState(null),[n,r]=v.useState({}),[o,l]=v.useState({}),i=c=>{const p=Object.keys(o).length*25,y=100+p%150,w=100+p%200,A=Object.values(o).map(f=>f.zIndex),S=A.length>0?Math.max(...A):0;t(c),r({...n,[c]:{minimized:!1,maximized:!1}}),l({...o,[c]:{top:y,left:w,zIndex:S+1}})},a=c=>{const p={...n};delete p[c];const y={...o};delete y[c],r(p),l(y),e===c&&t(null)},s=c=>{r({...n,[c]:{...n[c],minimized:!n[c].minimized}})},u=c=>{r({...n,[c]:{...n[c],maximized:!n[c].maximized}})},g=c=>{const p=Object.values(o).map(w=>w.zIndex),y=Math.max(...p);l({...o,[c]:{...o[c],zIndex:y+1}}),t(c)};return m.jsxs("div",{className:"min-h-screen bg-blue-100 pt-16 px-4 pb-12 font-mono",children:[m.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-blue-200 to-blue-400 z-0 pointer-events-none"}),m.jsxs("div",{className:"mx-auto max-w-4xl bg-gray-200 border border-gray-400 shadow-lg mt-8",children:[m.jsxs("div",{className:"bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center",children:[m.jsx("span",{children:"Blog Directory"}),m.jsxs("div",{className:"flex",children:[m.jsx("span",{className:"mr-2 cursor-pointer",children:"_"}),m.jsx("span",{className:"cursor-pointer",children:"×"})]})]}),m.jsxs("div",{className:"p-4",children:[m.jsx("h1",{className:"text-xl font-bold mb-4",children:"My Blog Posts"}),m.jsx("div",{className:"grid gap-4",children:oa.map(c=>m.jsx("div",{className:"bg-white border border-gray-400 p-3 cursor-pointer hover:bg-gray-100",onDoubleClick:()=>i(c.id),children:m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"w-8 h-8 mr-3 bg-gray-300 border border-gray-400 flex items-center justify-center text-xs",children:"TXT"}),m.jsxs("div",{children:[m.jsx("h2",{className:"font-bold text-sm",children:c.title}),m.jsxs("p",{className:"text-xs text-gray-600",children:["Last modified: ",c.date]})]})]}),m.jsx("button",{className:"bg-gray-300 text-xs px-2 py-0.5 border border-gray-400 hover:bg-gray-400",onClick:p=>{p.stopPropagation(),i(c.id)},children:"Open"})]})},c.id))}),m.jsx("div",{className:"mt-4 text-sm text-gray-600",children:m.jsx("p",{children:'Double-click on a post to open it, or click the "Open" button.'})})]})]}),Object.entries(n).map(([c,p])=>{const y=parseInt(c),w=oa.find(S=>S.id===y),A=o[y];return!w||!A||p.minimized?null:m.jsxs("div",{className:`absolute bg-gray-200 border border-gray-400 shadow-lg ${p.maximized?"inset-4 mt-8 mb-12":""}`,style:{top:p.maximized?void 0:A.top,left:p.maximized?void 0:A.left,width:p.maximized?void 0:"500px",height:p.maximized?void 0:"auto",zIndex:A.zIndex},onClick:()=>g(y),children:[m.jsxs("div",{className:"bg-blue-800 text-white font-bold px-2 py-1 flex justify-between items-center cursor-move",children:[m.jsx("span",{children:w.title}),m.jsxs("div",{className:"flex",children:[m.jsx("span",{className:"mr-2 cursor-pointer",onClick:()=>s(y),children:"_"}),m.jsx("span",{className:"mr-2 cursor-pointer",onClick:()=>u(y),children:p.maximized?m.jsx(sg,{size:14}):m.jsx(ig,{size:14})}),m.jsx("span",{className:"cursor-pointer",onClick:()=>a(y),children:"×"})]})]}),m.jsxs("div",{className:"p-4 max-h-[70vh] overflow-auto",children:[m.jsx("div",{className:"font-bold mb-2",children:w.title}),m.jsxs("div",{className:"text-xs text-gray-600 mb-4",children:["Date: ",w.date]}),m.jsxs("div",{className:"bg-white border border-gray-400 p-3 mb-4",children:[m.jsx("p",{className:"mb-4",children:w.excerpt}),m.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl."}),m.jsx("p",{children:"Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl."})]}),m.jsxs("div",{className:"flex justify-between",children:[m.jsx(Ye,{to:`/blog/${y}`,className:"bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400",children:"Read Full Article"}),m.jsx("button",{className:"bg-gray-300 border border-gray-400 px-3 py-1 text-sm rounded shadow-sm hover:bg-gray-400",onClick:()=>a(y),children:"Close"})]})]})]},y)}),m.jsxs("div",{className:"fixed bottom-0 left-0 right-0 h-8 bg-gray-200 border-t border-gray-400 flex items-center px-2 z-50",children:[m.jsx("div",{className:"mr-4 font-bold px-2 py-1 bg-blue-100 border border-gray-400 rounded",children:"Start"}),Object.entries(n).map(([c,p])=>{const y=parseInt(c),w=oa.find(A=>A.id===y);return w?m.jsx("div",{className:`px-2 py-1 text-xs border border-gray-400 mx-1 cursor-pointer max-w-[150px] truncate ${e===y?"bg-blue-100":"bg-gray-300"}`,onClick:()=>{p.minimized&&s(y),g(y)},children:w.title},y):null})]})]})}var Dw={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Lw=Dw;const Ow=fd(Lw),_w=""+new URL("ms_sans_serif-Du8rjN1q.woff2",import.meta.url).href,zw=""+new URL("ms_sans_serif_bold-D5dpRRHG.woff2",import.meta.url).href,Bw=hv`
  ${dg}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${_w}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${zw}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;function Fw(){return m.jsxs("div",{children:[m.jsx(Bw,{}),m.jsx(cv,{theme:Ow,children:m.jsx(eg,{children:m.jsxs("div",{className:"min-h-screen bg-gray-50",children:[m.jsx(cg,{}),m.jsx("main",{children:m.jsxs(G0,{children:[m.jsx(Wr,{path:"/",element:m.jsx(ww,{})}),m.jsx(Wr,{path:"/about",element:m.jsx(jw,{})}),m.jsx(Wr,{path:"/projects",element:m.jsx(Rw,{})}),m.jsx(Wr,{path:"/blog",element:m.jsx(Pw,{})})]})})]})})})]})}$h(document.getElementById("root")).render(m.jsx(v.StrictMode,{children:m.jsx(Fw,{})}));
