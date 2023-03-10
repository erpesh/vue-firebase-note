(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Mc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Lc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?Wm(s):Lc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(Ee(t))return t}}const Hm=/;(?![^(]*\))/g,Km=/:([^]+)/,zm=/\/\*.*?\*\//gs;function Wm(t){const e={};return t.replace(zm,"").split(Hm).forEach(n=>{if(n){const s=n.split(Km);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hs(t){let e="";if(xe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=hs(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qm=Mc(Gm);function kf(t){return!!t||t===""}const Ii=t=>xe(t)?t:t==null?"":G(t)||Ee(t)&&(t.toString===Of||!X(t.toString))?JSON.stringify(t,Rf,2):String(t),Rf=(t,e)=>e&&e.__v_isRef?Rf(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!G(e)&&!Pf(e)?String(e):e,ve={},fs=[],St=()=>{},Ym=()=>!1,Xm=/^on[^a-z]/,ho=t=>Xm.test(t),Uc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jm=Object.prototype.hasOwnProperty,ie=(t,e)=>Jm.call(t,e),G=Array.isArray,ds=t=>fo(t)==="[object Map]",Nf=t=>fo(t)==="[object Set]",X=t=>typeof t=="function",xe=t=>typeof t=="string",Vc=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Df=t=>Ee(t)&&X(t.then)&&X(t.catch),Of=Object.prototype.toString,fo=t=>Of.call(t),Zm=t=>fo(t).slice(8,-1),Pf=t=>fo(t)==="[object Object]",$c=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ey=/-(\w)/g,Vt=po(t=>t.replace(ey,(e,n)=>n?n.toUpperCase():"")),ty=/\B([A-Z])/g,Ls=po(t=>t.replace(ty,"-$1").toLowerCase()),go=po(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=po(t=>t?`on${go(t)}`:""),pr=(t,e)=>!Object.is(t,e),bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ml;const ny=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class sy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ry(t,e=Et){e&&e.active&&e.effects.push(t)}function iy(){return Et}const Bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xf=t=>(t.w&_n)>0,Mf=t=>(t.n&_n)>0,oy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_n},ay=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xf(r)&&!Mf(r)?r.delete(t):e[n++]=r,r.w&=~_n,r.n&=~_n}e.length=n}},Ma=new WeakMap;let Xs=0,_n=1;const La=30;let Tt;const Bn=Symbol(""),Ua=Symbol("");class jc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ry(this,s)}run(){if(!this.active)return this.fn();let e=Tt,n=fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,fn=!0,_n=1<<++Xs,Xs<=La?oy(this):yl(this),this.fn()}finally{Xs<=La&&ay(this),_n=1<<--Xs,Tt=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(yl(this),this.onStop&&this.onStop(),this.active=!1)}}function yl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fn=!0;const Lf=[];function Us(){Lf.push(fn),fn=!1}function Fs(){const t=Lf.pop();fn=t===void 0?!0:t}function at(t,e,n){if(fn&&Tt){let s=Ma.get(t);s||Ma.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Bc()),Uf(r)}}function Uf(t,e){let n=!1;Xs<=La?Mf(t)||(t.n|=_n,n=!xf(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function Qt(t,e,n,s,r,i){const o=Ma.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?$c(n)&&a.push(o.get("length")):(a.push(o.get(Bn)),ds(t)&&a.push(o.get(Ua)));break;case"delete":G(t)||(a.push(o.get(Bn)),ds(t)&&a.push(o.get(Ua)));break;case"set":ds(t)&&a.push(o.get(Bn));break}if(a.length===1)a[0]&&Fa(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Fa(Bc(c))}}function Fa(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&vl(s);for(const s of n)s.computed||vl(s)}function vl(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const cy=Mc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vc)),uy=qc(),ly=qc(!1,!0),hy=qc(!0),wl=fy();function fy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=ae(this)[e].apply(this,n);return Fs(),s}}),t}function dy(t){const e=ae(this);return at(e,"has",t),e.hasOwnProperty(t)}function qc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ry:qf:e?jf:Bf).get(s))return s;const o=G(s);if(!t){if(o&&ie(wl,r))return Reflect.get(wl,r,i);if(r==="hasOwnProperty")return dy}const a=Reflect.get(s,r,i);return(Vc(r)?Ff.has(r):cy(r))||(t||at(s,"get",r),e)?a:Ge(a)?o&&$c(r)?a:a.value:Ee(a)?t?Hf(a):Lr(a):a}}const py=Vf(),gy=Vf(!0);function Vf(t=!1){return function(n,s,r,i){let o=n[s];if(Is(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&(!Vi(r)&&!Is(r)&&(o=ae(o),r=ae(r)),!G(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=G(n)&&$c(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?pr(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function my(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function yy(t,e){const n=Reflect.has(t,e);return(!Vc(e)||!Ff.has(e))&&at(t,"has",e),n}function vy(t){return at(t,"iterate",G(t)?"length":Bn),Reflect.ownKeys(t)}const $f={get:uy,set:py,deleteProperty:my,has:yy,ownKeys:vy},wy={get:hy,set(t,e){return!0},deleteProperty(t,e){return!0}},_y=Je({},$f,{get:ly,set:gy}),Hc=t=>t,mo=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=mo(r),a=s?Hc:n?Wc:gr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function li(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function hi(t,e=!1){return t=t.__v_raw,!e&&at(ae(t),"iterate",Bn),Reflect.get(t,"size",t)}function _l(t){t=ae(t);const e=ae(this);return mo(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function El(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=mo(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pr(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function Il(t){const e=ae(this),{has:n,get:s}=mo(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function Tl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function fi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Hc:t?Wc:gr;return!t&&at(a,"iterate",Bn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function di(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Hc:e?Wc:gr;return!e&&at(i,"iterate",c?Ua:Bn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function Ey(){const t={get(i){return ui(this,i)},get size(){return hi(this)},has:li,add:_l,set:El,delete:Il,clear:Tl,forEach:fi(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return hi(this)},has:li,add:_l,set:El,delete:Il,clear:Tl,forEach:fi(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return hi(this,!0)},has(i){return li.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fi(!0,!1)},s={get(i){return ui(this,i,!0,!0)},get size(){return hi(this,!0)},has(i){return li.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=di(i,!1,!1),n[i]=di(i,!0,!1),e[i]=di(i,!1,!0),s[i]=di(i,!0,!0)}),[t,n,e,s]}const[Iy,Ty,by,Sy]=Ey();function Kc(t,e){const n=e?t?Sy:by:t?Ty:Iy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Cy={get:Kc(!1,!1)},Ay={get:Kc(!1,!0)},ky={get:Kc(!0,!1)},Bf=new WeakMap,jf=new WeakMap,qf=new WeakMap,Ry=new WeakMap;function Ny(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ny(Zm(t))}function Lr(t){return Is(t)?t:zc(t,!1,$f,Cy,Bf)}function Oy(t){return zc(t,!1,_y,Ay,jf)}function Hf(t){return zc(t,!0,wy,ky,qf)}function zc(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Dy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ps(t){return Is(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Vi(t){return!!(t&&t.__v_isShallow)}function Kf(t){return ps(t)||Is(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function zf(t){return Fi(t,"__v_skip",!0),t}const gr=t=>Ee(t)?Lr(t):t,Wc=t=>Ee(t)?Hf(t):t;function Wf(t){fn&&Tt&&(t=ae(t),Uf(t.dep||(t.dep=Bc())))}function Gf(t,e){t=ae(t);const n=t.dep;n&&Fa(n)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Kt(t){return Qf(t,!1)}function Py(t){return Qf(t,!0)}function Qf(t,e){return Ge(t)?t:new xy(t,e)}class xy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:gr(e)}get value(){return Wf(this),this._value}set value(e){const n=this.__v_isShallow||Vi(e)||Is(e);e=n?e:ae(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gr(e),Gf(this))}}function gs(t){return Ge(t)?t.value:t}const My={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yf(t){return ps(t)?t:new Proxy(t,My)}var Xf;class Ly{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xf]=!1,this._dirty=!0,this.effect=new jc(e,()=>{this._dirty||(this._dirty=!0,Gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Wf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Xf="__v_isReadonly";function Uy(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=St):(s=t.get,r=t.set),new Ly(s,r,i||!r,n)}function dn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){yo(i,e,n)}return r}function pt(t,e,n,s){if(X(t)){const i=dn(t,e,n,s);return i&&Df(i)&&i.catch(o=>{yo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(pt(t[i],e,n,s));return r}function yo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dn(c,null,10,[t,o,a]);return}}Fy(t,n,r,s)}function Fy(t,e,n,s=!0){console.error(t)}let mr=!1,Va=!1;const ze=[];let Pt=0;const ms=[];let qt=null,Pn=0;const Jf=Promise.resolve();let Gc=null;function Zf(t){const e=Gc||Jf;return t?e.then(this?t.bind(this):t):e}function Vy(t){let e=Pt+1,n=ze.length;for(;e<n;){const s=e+n>>>1;yr(ze[s])<t?e=s+1:n=s}return e}function Qc(t){(!ze.length||!ze.includes(t,mr&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?ze.push(t):ze.splice(Vy(t.id),0,t),ed())}function ed(){!mr&&!Va&&(Va=!0,Gc=Jf.then(nd))}function $y(t){const e=ze.indexOf(t);e>Pt&&ze.splice(e,1)}function By(t){G(t)?ms.push(...t):(!qt||!qt.includes(t,t.allowRecurse?Pn+1:Pn))&&ms.push(t),ed()}function bl(t,e=mr?Pt+1:0){for(;e<ze.length;e++){const n=ze[e];n&&n.pre&&(ze.splice(e,1),e--,n())}}function td(t){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,s)=>yr(n)-yr(s)),Pn=0;Pn<qt.length;Pn++)qt[Pn]();qt=null,Pn=0}}const yr=t=>t.id==null?1/0:t.id,jy=(t,e)=>{const n=yr(t)-yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nd(t){Va=!1,mr=!0,ze.sort(jy);const e=St;try{for(Pt=0;Pt<ze.length;Pt++){const n=ze[Pt];n&&n.active!==!1&&dn(n,null,14)}}finally{Pt=0,ze.length=0,td(),mr=!1,Gc=null,(ze.length||ms.length)&&nd()}}function qy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ve;f&&(r=n.map(g=>xe(g)?g.trim():g)),h&&(r=n.map(xa))}let a,c=s[a=aa(e)]||s[a=aa(Vt(e))];!c&&i&&(c=s[a=aa(Ls(e))]),c&&pt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(u,t,6,r)}}function sd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=u=>{const l=sd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Je(o,i),Ee(t)&&s.set(t,o),o)}function vo(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Ls(e))||ie(t,e))}let ut=null,rd=null;function $i(t){const e=ut;return ut=t,rd=t&&t.type.__scopeId||null,e}function $a(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&xl(-1);const i=$i(e);let o;try{o=t(...r)}finally{$i(i),s._d&&xl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ca(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:w}=t;let A,k;const P=$i(t);try{if(n.shapeFlag&4){const z=r||s;A=Ot(l.call(z,z,h,i,g,f,y)),k=c}else{const z=e;A=Ot(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),k=e.props?c:Hy(c)}}catch(z){or.length=0,yo(z,t,1),A=Qe(Ct)}let x=A;if(k&&w!==!1){const z=Object.keys(k),{shapeFlag:oe}=x;z.length&&oe&7&&(o&&z.some(Uc)&&(k=Ky(k,o)),x=En(x,k))}return n.dirs&&(x=En(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),A=x,$i(P),A}const Hy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},Ky=(t,e)=>{const n={};for(const s in t)(!Uc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function zy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!vo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sl(s,o,u):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!vo(n,i))return!0}return!1}function Wy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gy=t=>t.__isSuspense;function Qy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):By(t)}function Si(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function gt(t,e,n=!1){const s=Se||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const pi={};function rr(t,e,n){return id(t,e,n)}function id(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=iy()===(Se==null?void 0:Se.scope)?Se:null;let c,u=!1,l=!1;if(Ge(t)?(c=()=>t.value,u=Vi(t)):ps(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(x=>ps(x)||Vi(x)),c=()=>t.map(x=>{if(Ge(x))return x.value;if(ps(x))return Ln(x);if(X(x))return dn(x,a,2)})):X(t)?e?c=()=>dn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),pt(t,a,3,[f])}:c=St,e&&s){const x=c;c=()=>Ln(x())}let h,f=x=>{h=k.onStop=()=>{dn(x,a,4)}},g;if(wr)if(f=St,e?n&&pt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const x=zv();g=x.__watcherHandles||(x.__watcherHandles=[])}else return St;let y=l?new Array(t.length).fill(pi):pi;const w=()=>{if(k.active)if(e){const x=k.run();(s||u||(l?x.some((z,oe)=>pr(z,y[oe])):pr(x,y)))&&(h&&h(),pt(e,a,3,[x,y===pi?void 0:l&&y[0]===pi?[]:y,f]),y=x)}else k.run()};w.allowRecurse=!!e;let A;r==="sync"?A=w:r==="post"?A=()=>rt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),A=()=>Qc(w));const k=new jc(c,A);e?n?w():y=k.run():r==="post"?rt(k.run.bind(k),a&&a.suspense):k.run();const P=()=>{k.stop(),a&&a.scope&&Fc(a.scope.effects,k)};return g&&g.push(P),P}function Yy(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?od(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Se;Ts(this);const a=id(r,i.bind(s),n);return o?Ts(o):jn(),a}function od(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Ln(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(Nf(t)||ds(t))t.forEach(n=>{Ln(n,e)});else if(Pf(t))for(const n in t)Ln(t[n],e);return t}function Xy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hd(()=>{t.isMounted=!0}),fd(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],Jy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(t,{slots:e}){const n=Fv(),s=Xy();let r;return()=>{const i=e.default&&cd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Ct){o=w;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return ua(o);const u=Cl(o);if(!u)return ua(o);const l=Ba(u,a,s,n);ja(u,l);const h=n.subTree,f=h&&Cl(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const w=y();r===void 0?r=w:w!==r&&(r=w,g=!0)}if(f&&f.type!==Ct&&(!xn(u,f)||g)){const w=Ba(f,a,s,n);if(ja(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ua(o);c==="in-out"&&u.type!==Ct&&(w.delayLeave=(A,k,P)=>{const x=ad(s,f);x[String(f.key)]=f,A._leaveCb=()=>{k(),A._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=P})}return o}}},Zy=Jy;function ad(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ba(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:w,onAppear:A,onAfterAppear:k,onAppearCancelled:P}=e,x=String(t.key),z=ad(n,t),oe=(J,ye)=>{J&&pt(J,s,9,ye)},Te=(J,ye)=>{const de=ye[1];oe(J,ye),G(J)?J.every(je=>je.length<=1)&&de():J.length<=1&&de()},Ce={mode:i,persisted:o,beforeEnter(J){let ye=a;if(!n.isMounted)if(r)ye=w||a;else return;J._leaveCb&&J._leaveCb(!0);const de=z[x];de&&xn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),oe(ye,[J])},enter(J){let ye=c,de=u,je=l;if(!n.isMounted)if(r)ye=A||c,de=k||u,je=P||l;else return;let qe=!1;const yt=J._enterCb=Bt=>{qe||(qe=!0,Bt?oe(je,[J]):oe(de,[J]),Ce.delayedLeave&&Ce.delayedLeave(),J._enterCb=void 0)};ye?Te(ye,[J,yt]):yt()},leave(J,ye){const de=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return ye();oe(h,[J]);let je=!1;const qe=J._leaveCb=yt=>{je||(je=!0,ye(),yt?oe(y,[J]):oe(g,[J]),J._leaveCb=void 0,z[de]===t&&delete z[de])};z[de]=t,f?Te(f,[J,qe]):qe()},clone(J){return Ba(J,e,n,s)}};return Ce}function ua(t){if(wo(t))return t=En(t),t.children=null,t}function Cl(t){return wo(t)?t.children?t.children[0]:void 0:t}function ja(t,e){t.shapeFlag&6&&t.component?ja(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===It?(o.patchFlag&128&&r++,s=s.concat(cd(o.children,e,a))):(e||o.type!==Ct)&&s.push(a!=null?En(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function ud(t){return X(t)?{setup:t,name:t.name}:t}const Ci=t=>!!t.type.__asyncLoader,wo=t=>t.type.__isKeepAlive;function ev(t,e){ld(t,"a",e)}function tv(t,e){ld(t,"da",e)}function ld(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(_o(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wo(r.parent.vnode)&&nv(s,e,n,r),r=r.parent}}function nv(t,e,n,s){const r=_o(e,t,s,!0);dd(()=>{Fc(s[e],r)},n)}function _o(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=pt(e,n,t,o);return jn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=Se)=>(!wr||t==="sp")&&_o(t,(...s)=>e(...s),n),sv=tn("bm"),hd=tn("m"),rv=tn("bu"),iv=tn("u"),fd=tn("bum"),dd=tn("um"),ov=tn("sp"),av=tn("rtg"),cv=tn("rtc");function uv(t,e=Se){_o("ec",t,e)}function Ai(t,e){const n=ut;if(n===null)return t;const s=To(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),pt(c,n,8,[t.el,a,t,e]),Fs())}}const pd="components";function qa(t,e){return hv(pd,t,!0,e)||t}const lv=Symbol();function hv(t,e,n=!0,s=!1){const r=ut||Se;if(r){const i=r.type;if(t===pd){const a=qv(i,!1);if(a&&(a===e||a===Vt(e)||a===go(Vt(e))))return i}const o=Al(r[t]||i[t],e)||Al(r.appContext[t],e);return!o&&s?i:o}}function Al(t,e){return t&&(t[e]||t[Vt(e)]||t[go(Vt(e))])}function fv(t,e,n,s){let r;const i=n&&n[s];if(G(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ha=t=>t?Cd(t)?To(t)||t.proxy:Ha(t.parent):null,ir=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>Yc(t),$forceUpdate:t=>t.f||(t.f=()=>Qc(t.update)),$nextTick:t=>t.n||(t.n=Zf.bind(t.proxy)),$watch:t=>Yy.bind(t)}),la=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),dv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(la(s,e))return o[e]=1,s[e];if(r!==ve&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];Ka&&(o[e]=0)}}const l=ir[e];let h,f;if(l)return e==="$attrs"&&at(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return la(r,e)?(r[e]=n,!0):s!==ve&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||la(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(ir,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ka=!0;function pv(t){const e=Yc(t),n=t.proxy,s=t.ctx;Ka=!1,e.beforeCreate&&kl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:w,deactivated:A,beforeDestroy:k,beforeUnmount:P,destroyed:x,unmounted:z,render:oe,renderTracked:Te,renderTriggered:Ce,errorCaptured:J,serverPrefetch:ye,expose:de,inheritAttrs:je,components:qe,directives:yt,filters:Bt}=e;if(u&&gv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const he=o[pe];X(he)&&(s[pe]=he.bind(n))}if(r){const pe=r.call(n,n);Ee(pe)&&(t.data=Lr(pe))}if(Ka=!0,i)for(const pe in i){const he=i[pe],vt=X(he)?he.bind(n,n):X(he.get)?he.get.bind(n,n):St,kn=!X(he)&&X(he.set)?he.set.bind(n):St,wt=dt({get:vt,set:kn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>wt.value,set:st=>wt.value=st})}if(a)for(const pe in a)gd(a[pe],s,n,pe);if(c){const pe=X(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(he=>{Si(he,pe[he])})}l&&kl(l,t,"c");function Ae(pe,he){G(he)?he.forEach(vt=>pe(vt.bind(n))):he&&pe(he.bind(n))}if(Ae(sv,h),Ae(hd,f),Ae(rv,g),Ae(iv,y),Ae(ev,w),Ae(tv,A),Ae(uv,J),Ae(cv,Te),Ae(av,Ce),Ae(fd,P),Ae(dd,z),Ae(ov,ye),G(de))if(de.length){const pe=t.exposed||(t.exposed={});de.forEach(he=>{Object.defineProperty(pe,he,{get:()=>n[he],set:vt=>n[he]=vt})})}else t.exposed||(t.exposed={});oe&&t.render===St&&(t.render=oe),je!=null&&(t.inheritAttrs=je),qe&&(t.components=qe),yt&&(t.directives=yt)}function gv(t,e,n=St,s=!1){G(t)&&(t=za(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=gt(i.from||r,i.default,!0):o=gt(i.from||r):o=gt(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function kl(t,e,n){pt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gd(t,e,n,s){const r=s.includes(".")?od(n,s):()=>n[s];if(xe(t)){const i=e[t];X(i)&&rr(r,i)}else if(X(t))rr(r,t.bind(n));else if(Ee(t))if(G(t))t.forEach(i=>gd(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&rr(r,i,t)}}function Yc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Bi(c,u,o,!0)),Bi(c,e,o)),Ee(e)&&i.set(e,c),c}function Bi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Bi(t,i,n,!0),r&&r.forEach(o=>Bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=mv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mv={data:Rl,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Dn,directives:Dn,watch:vv,provide:Rl,inject:yv};function Rl(t,e){return e?t?function(){return Je(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function yv(t,e){return Dn(za(t),za(e))}function za(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Je(Je(Object.create(null),t),e):e}function vv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function wv(t,e,n,s=!1){const r={},i={};Fi(i,Io,1),t.propsDefaults=Object.create(null),md(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Oy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function _v(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(vo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Vt(f);r[y]=Wa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{md(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=Ls(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Wa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],u=!0)}u&&Qt(t,"set","$attrs")}function md(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ti(c))continue;const u=e[c];let l;r&&ie(r,l=Vt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:vo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ve;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Wa(r,c,h,u[h],t,!ie(u,h))}}return o}function Wa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ts(r),s=u[n]=c.call(null,e),jn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function yd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const l=h=>{c=!0;const[f,g]=yd(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ee(t)&&s.set(t,fs),fs;if(G(i))for(let l=0;l<i.length;l++){const h=Vt(i[l]);Nl(h)&&(o[h]=ve)}else if(i)for(const l in i){const h=Vt(l);if(Nl(h)){const f=i[l],g=o[h]=G(f)||X(f)?{type:f}:Object.assign({},f);if(g){const y=Pl(Boolean,g.type),w=Pl(String,g.type);g[0]=y>-1,g[1]=w<0||y<w,(y>-1||ie(g,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&s.set(t,u),u}function Nl(t){return t[0]!=="$"}function Dl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ol(t,e){return Dl(t)===Dl(e)}function Pl(t,e){return G(e)?e.findIndex(n=>Ol(n,t)):X(e)&&Ol(e,t)?0:-1}const vd=t=>t[0]==="_"||t==="$stable",Xc=t=>G(t)?t.map(Ot):[Ot(t)],Ev=(t,e,n)=>{if(e._n)return e;const s=$a((...r)=>Xc(e(...r)),n);return s._c=!1,s},wd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(vd(r))continue;const i=t[r];if(X(i))e[r]=Ev(r,i,s);else if(i!=null){const o=Xc(i);e[r]=()=>o}}},_d=(t,e)=>{const n=Xc(e);t.slots.default=()=>n},Iv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Fi(e,"_",n)):wd(e,t.slots={})}else t.slots={},e&&_d(t,e);Fi(t.slots,Io,1)},Tv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,wd(e,r)),o=e}else e&&(_d(t,e),o={default:1});if(i)for(const a in r)!vd(a)&&!(a in o)&&delete r[a]};function Ed(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bv=0;function Sv(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=Ed(),o=new Set;let a=!1;const c=i.app={_uid:bv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Wv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&X(u.install)?(o.add(u),u.install(c,...l)):X(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Qe(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,To(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ga(t,e,n,s,r=!1){if(G(t)){t.forEach((f,g)=>Ga(f,e&&(G(e)?e[g]:e),n,s,r));return}if(Ci(s)&&!r)return;const i=s.shapeFlag&4?To(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(xe(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):Ge(u)&&(u.value=null)),X(c))dn(c,a,12,[o,l]);else{const f=xe(c),g=Ge(c);if(f||g){const y=()=>{if(t.f){const w=f?ie(h,c)?h[c]:l[c]:c.value;r?G(w)&&Fc(w,i):G(w)?w.includes(i)||w.push(i):f?(l[c]=[i],ie(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,rt(y,n)):y()}}}const rt=Qy;function Cv(t){return Av(t)}function Av(t,e){const n=ny();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=St,insertStaticContent:y}=t,w=(d,p,m,v=null,I=null,C=null,D=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!xn(d,p)&&(v=N(d),st(d,I,C,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:L}=p;switch(T){case Eo:A(d,p,m,v);break;case Ct:k(d,p,m,v);break;case ha:d==null&&P(p,m,v,D);break;case It:qe(d,p,m,v,I,C,D,S,R);break;default:L&1?oe(d,p,m,v,I,C,D,S,R):L&6?yt(d,p,m,v,I,C,D,S,R):(L&64||L&128)&&T.process(d,p,m,v,I,C,D,S,R,re)}B!=null&&I&&Ga(B,d&&d.ref,C,p||d,!p)},A=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const I=p.el=d.el;p.children!==d.children&&u(I,p.children)}},k=(d,p,m,v)=>{d==null?s(p.el=c(p.children||""),m,v):p.el=d.el},P=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},x=({el:d,anchor:p},m,v)=>{let I;for(;d&&d!==p;)I=f(d),s(d,m,v),d=I;s(p,m,v)},z=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},oe=(d,p,m,v,I,C,D,S,R)=>{D=D||p.type==="svg",d==null?Te(p,m,v,I,C,D,S,R):ye(d,p,I,C,D,S,R)},Te=(d,p,m,v,I,C,D,S)=>{let R,T;const{type:B,props:L,shapeFlag:j,transition:W,dirs:te}=d;if(R=d.el=o(d.type,C,L&&L.is,L),j&8?l(R,d.children):j&16&&J(d.children,R,null,v,I,C&&B!=="foreignObject",D,S),te&&Rn(d,null,v,"created"),Ce(R,d,d.scopeId,D,v),L){for(const fe in L)fe!=="value"&&!Ti(fe)&&i(R,fe,null,L[fe],C,d.children,v,I,O);"value"in L&&i(R,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Dt(T,v,d)}te&&Rn(d,null,v,"beforeMount");const ge=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;ge&&W.beforeEnter(R),s(R,p,m),((T=L&&L.onVnodeMounted)||ge||te)&&rt(()=>{T&&Dt(T,v,d),ge&&W.enter(R),te&&Rn(d,null,v,"mounted")},I)},Ce=(d,p,m,v,I)=>{if(m&&g(d,m),v)for(let C=0;C<v.length;C++)g(d,v[C]);if(I){let C=I.subTree;if(p===C){const D=I.vnode;Ce(d,D,D.scopeId,D.slotScopeIds,I.parent)}}},J=(d,p,m,v,I,C,D,S,R=0)=>{for(let T=R;T<d.length;T++){const B=d[T]=S?an(d[T]):Ot(d[T]);w(null,B,p,m,v,I,C,D,S)}},ye=(d,p,m,v,I,C,D)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:B}=p;R|=d.patchFlag&16;const L=d.props||ve,j=p.props||ve;let W;m&&Nn(m,!1),(W=j.onVnodeBeforeUpdate)&&Dt(W,m,p,d),B&&Rn(p,d,m,"beforeUpdate"),m&&Nn(m,!0);const te=I&&p.type!=="foreignObject";if(T?de(d.dynamicChildren,T,S,m,v,te,C):D||he(d,p,S,null,m,v,te,C,!1),R>0){if(R&16)je(S,p,L,j,m,v,I);else if(R&2&&L.class!==j.class&&i(S,"class",null,j.class,I),R&4&&i(S,"style",L.style,j.style,I),R&8){const ge=p.dynamicProps;for(let fe=0;fe<ge.length;fe++){const ke=ge[fe],_t=L[ke],rs=j[ke];(rs!==_t||ke==="value")&&i(S,ke,_t,rs,I,d.children,m,v,O)}}R&1&&d.children!==p.children&&l(S,p.children)}else!D&&T==null&&je(S,p,L,j,m,v,I);((W=j.onVnodeUpdated)||B)&&rt(()=>{W&&Dt(W,m,p,d),B&&Rn(p,d,m,"updated")},v)},de=(d,p,m,v,I,C,D)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],B=R.el&&(R.type===It||!xn(R,T)||R.shapeFlag&70)?h(R.el):m;w(R,T,B,null,v,I,C,D,!0)}},je=(d,p,m,v,I,C,D)=>{if(m!==v){if(m!==ve)for(const S in m)!Ti(S)&&!(S in v)&&i(d,S,m[S],null,D,p.children,I,C,O);for(const S in v){if(Ti(S))continue;const R=v[S],T=m[S];R!==T&&S!=="value"&&i(d,S,T,R,D,p.children,I,C,O)}"value"in v&&i(d,"value",m.value,v.value)}},qe=(d,p,m,v,I,C,D,S,R)=>{const T=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),d==null?(s(T,m,v),s(B,m,v),J(p.children,m,B,I,C,D,S,R)):L>0&&L&64&&j&&d.dynamicChildren?(de(d.dynamicChildren,j,m,I,C,D,S),(p.key!=null||I&&p===I.subTree)&&Id(d,p,!0)):he(d,p,m,B,I,C,D,S,R)},yt=(d,p,m,v,I,C,D,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?I.ctx.activate(p,m,v,D,R):Bt(p,m,v,I,C,D,R):Ws(d,p,R)},Bt=(d,p,m,v,I,C,D)=>{const S=d.component=Uv(d,v,I);if(wo(d)&&(S.ctx.renderer=re),Vv(S),S.asyncDep){if(I&&I.registerDep(S,Ae),!d.el){const R=S.subTree=Qe(Ct);k(null,R,p,m)}return}Ae(S,d,p,m,I,C,D)},Ws=(d,p,m)=>{const v=p.component=d.component;if(zy(d,p,m))if(v.asyncDep&&!v.asyncResolved){pe(v,p,m);return}else v.next=p,$y(v.update),v.update();else p.el=d.el,v.vnode=p},Ae=(d,p,m,v,I,C,D)=>{const S=()=>{if(d.isMounted){let{next:B,bu:L,u:j,parent:W,vnode:te}=d,ge=B,fe;Nn(d,!1),B?(B.el=te.el,pe(d,B,D)):B=te,L&&bi(L),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&Dt(fe,W,B,te),Nn(d,!0);const ke=ca(d),_t=d.subTree;d.subTree=ke,w(_t,ke,h(_t.el),N(_t),d,I,C),B.el=ke.el,ge===null&&Wy(d,ke.el),j&&rt(j,I),(fe=B.props&&B.props.onVnodeUpdated)&&rt(()=>Dt(fe,W,B,te),I)}else{let B;const{el:L,props:j}=p,{bm:W,m:te,parent:ge}=d,fe=Ci(p);if(Nn(d,!1),W&&bi(W),!fe&&(B=j&&j.onVnodeBeforeMount)&&Dt(B,ge,p),Nn(d,!0),L&&ee){const ke=()=>{d.subTree=ca(d),ee(L,d.subTree,d,I,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ke()):ke()}else{const ke=d.subTree=ca(d);w(null,ke,m,v,d,I,C),p.el=ke.el}if(te&&rt(te,I),!fe&&(B=j&&j.onVnodeMounted)){const ke=p;rt(()=>Dt(B,ge,ke),I)}(p.shapeFlag&256||ge&&Ci(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&rt(d.a,I),d.isMounted=!0,p=m=v=null}},R=d.effect=new jc(S,()=>Qc(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,Nn(d,!0),T()},pe=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,_v(d,p.props,v,m),Tv(d,p.children,m),Us(),bl(),Fs()},he=(d,p,m,v,I,C,D,S,R=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){kn(T,L,m,v,I,C,D,S,R);return}else if(j&256){vt(T,L,m,v,I,C,D,S,R);return}}W&8?(B&16&&O(T,I,C),L!==T&&l(m,L)):B&16?W&16?kn(T,L,m,v,I,C,D,S,R):O(T,I,C,!0):(B&8&&l(m,""),W&16&&J(L,m,v,I,C,D,S,R))},vt=(d,p,m,v,I,C,D,S,R)=>{d=d||fs,p=p||fs;const T=d.length,B=p.length,L=Math.min(T,B);let j;for(j=0;j<L;j++){const W=p[j]=R?an(p[j]):Ot(p[j]);w(d[j],W,m,null,I,C,D,S,R)}T>B?O(d,I,C,!0,!1,L):J(p,m,v,I,C,D,S,R,L)},kn=(d,p,m,v,I,C,D,S,R)=>{let T=0;const B=p.length;let L=d.length-1,j=B-1;for(;T<=L&&T<=j;){const W=d[T],te=p[T]=R?an(p[T]):Ot(p[T]);if(xn(W,te))w(W,te,m,null,I,C,D,S,R);else break;T++}for(;T<=L&&T<=j;){const W=d[L],te=p[j]=R?an(p[j]):Ot(p[j]);if(xn(W,te))w(W,te,m,null,I,C,D,S,R);else break;L--,j--}if(T>L){if(T<=j){const W=j+1,te=W<B?p[W].el:v;for(;T<=j;)w(null,p[T]=R?an(p[T]):Ot(p[T]),m,te,I,C,D,S,R),T++}}else if(T>j)for(;T<=L;)st(d[T],I,C,!0),T++;else{const W=T,te=T,ge=new Map;for(T=te;T<=j;T++){const ct=p[T]=R?an(p[T]):Ot(p[T]);ct.key!=null&&ge.set(ct.key,T)}let fe,ke=0;const _t=j-te+1;let rs=!1,dl=0;const Gs=new Array(_t);for(T=0;T<_t;T++)Gs[T]=0;for(T=W;T<=L;T++){const ct=d[T];if(ke>=_t){st(ct,I,C,!0);continue}let Nt;if(ct.key!=null)Nt=ge.get(ct.key);else for(fe=te;fe<=j;fe++)if(Gs[fe-te]===0&&xn(ct,p[fe])){Nt=fe;break}Nt===void 0?st(ct,I,C,!0):(Gs[Nt-te]=T+1,Nt>=dl?dl=Nt:rs=!0,w(ct,p[Nt],m,null,I,C,D,S,R),ke++)}const pl=rs?kv(Gs):fs;for(fe=pl.length-1,T=_t-1;T>=0;T--){const ct=te+T,Nt=p[ct],gl=ct+1<B?p[ct+1].el:v;Gs[T]===0?w(null,Nt,m,gl,I,C,D,S,R):rs&&(fe<0||T!==pl[fe]?wt(Nt,m,gl,2):fe--)}}},wt=(d,p,m,v,I=null)=>{const{el:C,type:D,transition:S,children:R,shapeFlag:T}=d;if(T&6){wt(d.component.subTree,p,m,v);return}if(T&128){d.suspense.move(p,m,v);return}if(T&64){D.move(d,p,m,re);return}if(D===It){s(C,p,m);for(let L=0;L<R.length;L++)wt(R[L],p,m,v);s(d.anchor,p,m);return}if(D===ha){x(d,p,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(C),s(C,p,m),rt(()=>S.enter(C),I);else{const{leave:L,delayLeave:j,afterLeave:W}=S,te=()=>s(C,p,m),ge=()=>{L(C,()=>{te(),W&&W()})};j?j(C,te,ge):ge()}else s(C,p,m)},st=(d,p,m,v=!1,I=!1)=>{const{type:C,props:D,ref:S,children:R,dynamicChildren:T,shapeFlag:B,patchFlag:L,dirs:j}=d;if(S!=null&&Ga(S,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const W=B&1&&j,te=!Ci(d);let ge;if(te&&(ge=D&&D.onVnodeBeforeUnmount)&&Dt(ge,p,d),B&6)_(d.component,m,v);else{if(B&128){d.suspense.unmount(m,v);return}W&&Rn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,I,re,v):T&&(C!==It||L>0&&L&64)?O(T,p,m,!1,!0):(C===It&&L&384||!I&&B&16)&&O(R,p,m),v&&ss(d)}(te&&(ge=D&&D.onVnodeUnmounted)||W)&&rt(()=>{ge&&Dt(ge,p,d),W&&Rn(d,null,p,"unmounted")},m)},ss=d=>{const{type:p,el:m,anchor:v,transition:I}=d;if(p===It){ci(m,v);return}if(p===ha){z(d);return}const C=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:S}=I,R=()=>D(m,C);S?S(d.el,C,R):R()}else C()},ci=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},_=(d,p,m)=>{const{bum:v,scope:I,update:C,subTree:D,um:S}=d;v&&bi(v),I.stop(),C&&(C.active=!1,st(D,d,p,m)),S&&rt(S,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,m,v=!1,I=!1,C=0)=>{for(let D=C;D<d.length;D++)st(d[D],p,m,v,I)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,p,m)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,m),bl(),td(),p._vnode=d},re={p:w,um:st,m:wt,r:ss,mt:Bt,mc:J,pc:he,pbc:de,n:N,o:t};let Ie,ee;return e&&([Ie,ee]=e(re)),{render:V,hydrate:Ie,createApp:Sv(V,Ie)}}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Id(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||Id(o,a)),a.type===Eo&&(a.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rv=t=>t.__isTeleport,It=Symbol(void 0),Eo=Symbol(void 0),Ct=Symbol(void 0),ha=Symbol(void 0),or=[];let bt=null;function Mt(t=!1){or.push(bt=t?null:[])}function Nv(){or.pop(),bt=or[or.length-1]||null}let vr=1;function xl(t){vr+=t}function Td(t){return t.dynamicChildren=vr>0?bt||fs:null,Nv(),vr>0&&bt&&bt.push(t),t}function pn(t,e,n,s,r,i){return Td(Z(t,e,n,s,r,i,!0))}function bd(t,e,n,s,r){return Td(Qe(t,e,n,s,r,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const Io="__vInternal",Sd=({key:t})=>t??null,ki=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Ge(t)||X(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function Z(t,e=null,n=null,s=0,r=null,i=t===It?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sd(e),ref:e&&ki(e),scopeId:rd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(Jc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),vr>0&&!o&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const Qe=Dv;function Dv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===lv)&&(t=Ct),Qa(t)){const a=En(t,e,!0);return n&&Jc(a,n),vr>0&&!i&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag|=-2,a}if(Hv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=hs(a)),Ee(c)&&(Kf(c)&&!G(c)&&(c=Je({},c)),e.style=Lc(c))}const o=xe(t)?1:Gy(t)?128:Rv(t)?64:Ee(t)?4:X(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function Ov(t){return t?Kf(t)||Io in t?Je({},t):t:null}function En(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?xv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sd(a),ref:e&&e.ref?n&&r?G(r)?r.concat(ki(e)):[r,ki(e)]:ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ya(t=" ",e=0){return Qe(Eo,null,t,e)}function Pv(t="",e=!1){return e?(Mt(),bd(Ct,null,t)):Qe(Ct,null,t)}function Ot(t){return t==null||typeof t=="boolean"?Qe(Ct):G(t)?Qe(It,null,t.slice()):typeof t=="object"?an(t):Qe(Eo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:En(t)}function Jc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Jc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Io in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Ya(e)]):n=8);t.children=e,t.shapeFlag|=n}function xv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=hs([e.class,s.class]));else if(r==="style")e.style=Lc([e.style,s.style]);else if(ho(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Dt(t,e,n,s=null){pt(t,e,7,[n,s])}const Mv=Ed();let Lv=0;function Uv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Mv,i={uid:Lv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(s,r),emitsOptions:sd(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qy.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const Fv=()=>Se||ut,Ts=t=>{Se=t,t.scope.on()},jn=()=>{Se&&Se.scope.off(),Se=null};function Cd(t){return t.vnode.shapeFlag&4}let wr=!1;function Vv(t,e=!1){wr=e;const{props:n,children:s}=t.vnode,r=Cd(t);wv(t,n,r,e),Iv(t,s);const i=r?$v(t,e):void 0;return wr=!1,i}function $v(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zf(new Proxy(t.ctx,dv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?jv(t):null;Ts(t),Us();const i=dn(s,t,0,[t.props,r]);if(Fs(),jn(),Df(i)){if(i.then(jn,jn),e)return i.then(o=>{Ml(t,o,e)}).catch(o=>{yo(o,t,0)});t.asyncDep=i}else Ml(t,i,e)}else Ad(t,e)}function Ml(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Yf(e)),Ad(t,n)}let Ll;function Ad(t,e,n){const s=t.type;if(!t.render){if(!e&&Ll&&!s.render){const r=s.template||Yc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=Ll(r,u)}}t.render=s.render||St}Ts(t),Us(),pv(t),Fs(),jn()}function Bv(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function jv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Bv(t))},slots:t.slots,emit:t.emit,expose:e}}function To(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yf(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)},has(e,n){return n in e||n in ir}}))}function qv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Hv(t){return X(t)&&"__vccOpts"in t}const dt=(t,e)=>Uy(t,e,wr);function kd(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!G(e)?Qa(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qa(n)&&(n=[n]),Qe(t,e,n))}const Kv=Symbol(""),zv=()=>gt(Kv),Wv="3.2.47",Gv="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,Ul=Mn&&Mn.createElement("template"),Qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Mn.createElementNS(Gv,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ul.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ul.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Yv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xv(t,e,n){const s=t.style,r=xe(n);if(n&&!r){if(e&&!xe(e))for(const i in e)n[i]==null&&Xa(s,i,"");for(const i in n)Xa(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Fl=/\s*!important$/;function Xa(t,e,n){if(G(n))n.forEach(s=>Xa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Jv(t,e);Fl.test(n)?t.setProperty(Ls(s),n.replace(Fl,""),"important"):t[s]=n}}const Vl=["Webkit","Moz","ms"],fa={};function Jv(t,e){const n=fa[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return fa[e]=s;s=go(s);for(let r=0;r<Vl.length;r++){const i=Vl[r]+s;if(i in t)return fa[e]=i}return e}const $l="http://www.w3.org/1999/xlink";function Zv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,n);else{const i=Qm(e);n==null||i&&!kf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ew(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function os(t,e,n,s){t.addEventListener(e,n,s)}function tw(t,e,n,s){t.removeEventListener(e,n,s)}function nw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=sw(e);if(s){const u=i[e]=ow(s,r);os(t,a,u,c)}else o&&(tw(t,a,o,c),i[e]=void 0)}}const Bl=/(?:Once|Passive|Capture)$/;function sw(t){let e;if(Bl.test(t)){e={};let s;for(;s=t.match(Bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let da=0;const rw=Promise.resolve(),iw=()=>da||(rw.then(()=>da=0),da=Date.now());function ow(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(aw(s,n.value),e,5,[s])};return n.value=t,n.attached=iw(),n}function aw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const jl=/^on[a-z]/,cw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Yv(t,s,r):e==="style"?Xv(t,n,s):ho(e)?Uc(e)||nw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uw(t,e,s,r))?ew(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Zv(t,e,s,r))};function uw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&jl.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jl.test(e)&&xe(n)?!1:e in t}const lw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Zy.props;const ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>bi(e,n):e};function hw(t){t.target.composing=!0}function Hl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ri={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ql(r);const i=s||r.props&&r.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xa(a)),t._assign(a)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",hw),os(t,"compositionend",Hl),os(t,"change",Hl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ql(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&xa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},fw=["ctrl","shift","alt","meta"],dw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fw.some(n=>t[`${n}Key`]&&!e.includes(n))},Rd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=dw[e[r]];if(i&&i(n,e))return}return t(n,...s)},pw=Je({patchProp:cw},Qv);let Kl;function gw(){return Kl||(Kl=Cv(pw))}const mw=(...t)=>{const e=gw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=yw(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function yw(t){return xe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},vw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new ww;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(t){const e=Nd(t);return Dd.encodeByteArray(e,!0)},ji=function(t){return _w(t).replace(/\./g,"")},Od=function(t){try{return Dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=()=>Ew().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Od(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return Iw()||Tw()||bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pd=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sw=t=>{const e=Pd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Cw=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},xd=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ji(JSON.stringify(n)),ji(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pw(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mw,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Lw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nn(r,a,s)}}function Lw(t,e){return t.replace(Uw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Uw=/\{\$([^}]+)}/g;function Fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(zl(i)&&zl(o)){if(!qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pa),r.error===void 0&&(r.error=pa),r.complete===void 0&&(r.complete=pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Aw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(t){return t===On?void 0:t}function Hw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const zw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Ww=ce.INFO,Gw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Qw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Gw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Yw=(t,e)=>e.some(n=>t instanceof n);let Wl,Gl;function Xw(){return Wl||(Wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return Gl||(Gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Md=new WeakMap,Ja=new WeakMap,Ld=new WeakMap,ga=new WeakMap,tu=new WeakMap;function Zw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Md.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function e_(t){if(Ja.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ja.set(t,e)}let Za={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ja.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ld.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t_(t){Za=t(Za)}function n_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ma(this),e,...n);return Ld.set(s,e.sort?e.sort():[e]),gn(s)}:Jw().includes(t)?function(...e){return t.apply(ma(this),e),gn(Md.get(this))}:function(...e){return gn(t.apply(ma(this),e))}}function s_(t){return typeof t=="function"?n_(t):(t instanceof IDBTransaction&&e_(t),Yw(t,Xw())?new Proxy(t,Za):t)}function gn(t){if(t instanceof IDBRequest)return Zw(t);if(ga.has(t))return ga.get(t);const e=s_(t);return e!==t&&(ga.set(t,e),tu.set(e,t)),e}const ma=t=>tu.get(t);function r_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=gn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gn(o.result),c.oldVersion,c.newVersion,gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const i_=["get","getKey","getAll","getAllKeys","count"],o_=["put","add","delete","clear"],ya=new Map;function Ql(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=o_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||i_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ya.set(e,i),i}t_(t=>({...t,get:(e,n,s)=>Ql(e,n)||t.get(e,n,s),has:(e,n)=>!!Ql(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function c_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",Yl="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new eu("@firebase/app"),u_="@firebase/app-compat",l_="@firebase/analytics-compat",h_="@firebase/analytics",f_="@firebase/app-check-compat",d_="@firebase/app-check",p_="@firebase/auth",g_="@firebase/auth-compat",m_="@firebase/database",y_="@firebase/database-compat",v_="@firebase/functions",w_="@firebase/functions-compat",__="@firebase/installations",E_="@firebase/installations-compat",I_="@firebase/messaging",T_="@firebase/messaging-compat",b_="@firebase/performance",S_="@firebase/performance-compat",C_="@firebase/remote-config",A_="@firebase/remote-config-compat",k_="@firebase/storage",R_="@firebase/storage-compat",N_="@firebase/firestore",D_="@firebase/firestore-compat",O_="firebase",P_="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="[DEFAULT]",x_={[ec]:"fire-core",[u_]:"fire-core-compat",[h_]:"fire-analytics",[l_]:"fire-analytics-compat",[d_]:"fire-app-check",[f_]:"fire-app-check-compat",[p_]:"fire-auth",[g_]:"fire-auth-compat",[m_]:"fire-rtdb",[y_]:"fire-rtdb-compat",[v_]:"fire-fn",[w_]:"fire-fn-compat",[__]:"fire-iid",[E_]:"fire-iid-compat",[I_]:"fire-fcm",[T_]:"fire-fcm-compat",[b_]:"fire-perf",[S_]:"fire-perf-compat",[C_]:"fire-rc",[A_]:"fire-rc-compat",[k_]:"fire-gcs",[R_]:"fire-gcs-compat",[N_]:"fire-fst",[D_]:"fire-fst-compat","fire-js":"fire-js",[O_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map,nc=new Map;function M_(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(nc.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,t);for(const n of Hi.values())M_(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new Ur("app","Firebase",L_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=P_;function Ud(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw mn.create("bad-app-name",{appName:String(r)});if(n||(n=Cw()),!n)throw mn.create("no-options");const i=Hi.get(r);if(i){if(qi(n,i.options)&&qi(s,i.config))return i;throw mn.create("duplicate-app",{appName:r})}const o=new Kw(r);for(const c of nc.values())o.addComponent(c);const a=new U_(n,s,o);return Hi.set(r,a),a}function Fd(t=tc){const e=Hi.get(t);if(!e&&t===tc)return Ud();if(!e)throw mn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=x_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}bs(new Wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firebase-heartbeat-database",V_=1,_r="firebase-heartbeat-store";let va=null;function Vd(){return va||(va=r_(F_,V_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_r)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),va}async function $_(t){try{return(await Vd()).transaction(_r).objectStore(_r).get($d(t))}catch(e){if(e instanceof nn)Gn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Xl(t,e){try{const s=(await Vd()).transaction(_r,"readwrite");return await s.objectStore(_r).put(e,$d(t)),s.done}catch(n){if(n instanceof nn)Gn.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(s.message)}}}function $d(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=1024,j_=30*24*60*60*1e3;class q_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=j_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jl(),{heartbeatsToSend:n,unsentEntries:s}=H_(this._heartbeatsCache.heartbeats),r=ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Jl(){return new Date().toISOString().substring(0,10)}function H_(t,e=B_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Zl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Zl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class K_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pw()?xw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zl(t){return ji(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){bs(new Wn("platform-logger",e=>new a_(e),"PRIVATE")),bs(new Wn("heartbeat",e=>new q_(e),"PRIVATE")),yn(ec,Yl,t),yn(ec,Yl,"esm2017"),yn("fire-js","")}z_("");function su(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Bd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W_=Bd,jd=new Ur("auth","Firebase",Bd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new eu("@firebase/auth");function Ni(t,...e){eh.logLevel<=ce.ERROR&&eh.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw ru(t,...e)}function Lt(t,...e){return ru(t,...e)}function qd(t,e,n){const s=Object.assign(Object.assign({},W_()),{[e]:n});return new Ur("auth","Firebase",s).create(e,{appName:t.name})}function G_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&mt(t,"argument-error"),qd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jd.create(t,...e)}function q(t,e,...n){if(!t)throw ru(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ni(e),new Error(e)}function Yt(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function Wt(t){Yt(t instanceof Function,"Expected a class definition");let e=th.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,th.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){const n=nu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qi(i,e??{}))return r;mt(r,"already-initialized")}return n.initialize({options:e})}function Y_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function X_(){return nh()==="http:"||nh()==="https:"}function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X_()||Nw()||"connection"in navigator)?navigator.onLine:!0}function Z_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rw()||Dw()}get(){return J_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new $r(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,s,r={}){return Kd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hd.fetch()(zd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},eE),e);try{const r=new nE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qd(t,l,u);mt(t,l)}}catch(r){if(r instanceof nn)throw r;mt(t,"internal-error",{message:String(r)})}}async function qr(t,e,n,s,r={}){const i=await jr(t,e,n,s,r);return"mfaPendingCredential"in i&&mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?iu(t.config,r):`${t.config.apiScheme}://${r}`}class nE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),tE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function rE(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iE(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=ou(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ar(wa(r.auth_time)),issuedAtTime:ar(wa(r.iat)),expirationTime:ar(wa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function ou(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ni("JWT malformed, contained fewer than 3 sections"),null;try{const r=Od(n);return r?JSON.parse(r):(Ni("Failed to decode base64 JWT payload"),null)}catch(r){return Ni("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function oE(t){const e=ou(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&aE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function aE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Er(t,rE(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hE(i.providerUserInfo):[],a=lE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function uE(t){const e=Ue(t);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hE(t){return t.map(e=>{var{providerId:n}=e,s=su(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){const n=await Kd(t,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=zd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await fE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ir;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iE(this,e)}reload(){return uE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ki(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Er(this,sE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:x,emailVerified:z,isAnonymous:oe,providerData:Te,stsTokenManager:Ce}=n;q(x&&Ce,e,"internal-error");const J=Ir.fromJSON(this.name,Ce);q(typeof x=="string",e,"internal-error"),rn(h,e.name),rn(f,e.name),q(typeof z=="boolean",e,"internal-error"),q(typeof oe=="boolean",e,"internal-error"),rn(g,e.name),rn(y,e.name),rn(w,e.name),rn(A,e.name),rn(k,e.name),rn(P,e.name);const ye=new qn({uid:x,auth:e,email:f,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:J,createdAt:k,lastLoginAt:P});return Te&&Array.isArray(Te)&&(ye.providerData=Te.map(de=>Object.assign({},de))),A&&(ye._redirectEventId=A),ye}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ir;r.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ki(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gd.type="NONE";const sh=Gd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Di(this.userKey,r.apiKey,i),this.fullPersistenceKey=Di("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(Wt(sh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Wt(sh);const o=Di(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=qn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zd(e))return"Blackberry";if(ep(e))return"Webos";if(au(e))return"Safari";if((e.includes("chrome/")||Yd(e))&&!e.includes("edge/"))return"Chrome";if(Jd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qd(t=Ze()){return/firefox\//i.test(t)}function au(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yd(t=Ze()){return/crios\//i.test(t)}function Xd(t=Ze()){return/iemobile/i.test(t)}function Jd(t=Ze()){return/android/i.test(t)}function Zd(t=Ze()){return/blackberry/i.test(t)}function ep(t=Ze()){return/webos/i.test(t)}function bo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dE(t=Ze()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pE(){return Ow()&&document.documentMode===10}function tp(t=Ze()){return bo(t)||Jd(t)||ep(t)||Zd(t)||/windows phone/i.test(t)||Xd(t)}function gE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t,e=[]){let n;switch(t){case"Browser":n=rh(Ze());break;case"Worker":n=`${rh(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new mE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vs(t){return Ue(t)}class ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vE(t,e,n){const s=Vs(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=sp(e),{host:o,port:a}=wE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_E()}function sp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wE(t){const e=sp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:oh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:oh(o)}}}function oh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _E(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function EE(t,e){return jr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return qr(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function bE(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends cu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Tr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Tr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return IE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TE(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return EE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bE(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return qr(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class Qn extends cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=su(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AE(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,s=Js(Zs(t)).deep_link_id;return(s?Js(Zs(s)).link:null)||s||n||e||t}class uu{constructor(e){var n,s,r,i,o,a;const c=Js(Zs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=CE((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AE(e);try{return new uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return Tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=uu.parseLink(n);return q(s,"argument-error"),Tr._fromEmailAndCode(e,s.code,s.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Hr{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ht.credential(n,s)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Hr{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Hr{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e){return qr(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qn._fromIdTokenResponse(e,s,r),o=ah(s);return new Yn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ah(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new zi(e,n,s,r)}}function rp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(t,i,e,s):i})}async function RE(t,e,n=!1){const s=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Er(t,rp(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=ou(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Yn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(t,e,n=!1){const s="signIn",r=await rp(t,s,e),i=await Yn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function DE(t,e){return ip(Vs(t),e)}async function OE(t,e,n){const s=Vs(t),r=await kE(s,{returnSecureToken:!0,email:e,password:n}),i=await Yn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function PE(t,e,n){return DE(Ue(t),$s.credential(e,n))}function xE(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function ME(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function LE(t){return Ue(t).signOut()}const Wi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){const t=Ze();return au(t)||bo(t)}const FE=1e3,VE=10;class ap extends op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UE()&&gE(),this.fallbackToPolling=tp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);pE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,VE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ap.type="LOCAL";const $E=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cp.type="SESSION";const up=cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new So(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await BE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=hu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function qE(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function HE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zE(){return lp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="firebaseLocalStorageDb",WE=1,Gi="firebaseLocalStorage",fp="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Co(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function GE(){const t=indexedDB.deleteDatabase(hp);return new Kr(t).toPromise()}function rc(){const t=indexedDB.open(hp,WE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gi,{keyPath:fp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gi)?e(s):(s.close(),await GE(),e(await rc()))})})}async function ch(t,e,n){const s=Co(t,!0).put({[fp]:e,value:n});return new Kr(s).toPromise()}async function QE(t,e){const n=Co(t,!1).get(e),s=await new Kr(n).toPromise();return s===void 0?null:s.value}function uh(t,e){const n=Co(t,!0).delete(e);return new Kr(n).toPromise()}const YE=800,XE=3;class dp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>XE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(zE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HE(),!this.activeServiceWorker)return;this.sender=new jE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rc();return await ch(e,Wi,"1"),await uh(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ch(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>QE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Co(r,!1).getAll();return new Kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dp.type="LOCAL";const JE=dp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",ZE().appendChild(s)})}function tI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $r(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e){return e?Wt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nI(t){return ip(t.auth,new fu(t),t.bypassAuthState)}function sI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),NE(n,new fu(t),t.bypassAuthState)}async function rI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),RE(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return rI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:mt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new $r(2e3,1e4);async function oI(t,e,n){const s=Vs(t);G_(t,e,lu);const r=pp(s,n);return new Un(s,"signInViaPopup",e,r).executeNotNull()}class Un extends gp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iI.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="pendingRedirect",Oi=new Map;class cI extends gp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const s=await uI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uI(t,e){const n=fI(e),s=hI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function lI(t,e){Oi.set(t._key(),e)}function hI(t){return Wt(t._redirectPersistence)}function fI(t){return Di(aI,t.config.apiKey,t.name)}async function dI(t,e,n=!1){const s=Vs(t),r=pp(s,e),o=await new cI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=10*60*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lh(e))}saveEventToCache(e){this.cachedEventUids.add(lh(e)),this.lastProcessedEventTime=Date.now()}}function lh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function _I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yI(t);for(const n of e)try{if(EI(n))return}catch{}mt(t,"unauthorized-domain")}function EI(t){const e=sc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wI.test(n))return!1;if(vI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new $r(3e4,6e4);function hh(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TI(t){return new Promise((e,n)=>{var s,r,i;function o(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),n(Lt(t,"network-request-failed"))},timeout:II.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=tI("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},eI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function bI(t){return Pi=Pi||TI(t),Pi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new $r(5e3,15e3),CI="__/auth/iframe",AI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,AI):`https://${t.config.authDomain}/${CI}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=RI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Fr(s).slice(1)}`}async function DI(t){const e=await bI(t),n=Ut().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:NI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},SI.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PI=500,xI=600,MI="_blank",LI="http://localhost";class fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(t,e,n,s=PI,r=xI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ze().toLowerCase();n&&(a=Yd(u)?MI:n),Qd(u)&&(e=e||LI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(dE(u)&&a!=="_self")return FI(e||"",a),new fh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new fh(h)}function FI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="__/auth/handler",$I="emulator/auth/handler";function dh(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Hr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${BI(t)}?${Fr(a).slice(1)}`}function BI({config:t}){return t.emulator?iu(t,$I):`https://${t.authDomain}/${VI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=up,this._completeRedirectFn=dI,this._overrideRedirectResult=lI}async _openPopup(e,n,s,r){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=dh(e,n,s,sc(),r);return UI(e,o,hu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),qE(dh(e,n,s,sc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await DI(e),s=new gI(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[_a];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tp()||au()||bo()}}const qI=jI;var ph="@firebase/auth",gh="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zI(t){bs(new Wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:np(t)},l=new yE(a,c,u);return Y_(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new Wn("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(s=>new HI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(ph,gh,KI(t)),yn(ph,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=5*60,GI=xd("authIdTokenMaxAge")||WI;let mh=null;const QI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GI)return;const r=n==null?void 0:n.token;mh!==r&&(mh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ic(t=Fd()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Q_(t,{popupRedirectResolver:qI,persistence:[JE,$E,up]}),s=xd("authTokenSyncURL");if(s){const i=QI(s);ME(n,i,()=>i(n.currentUser)),xE(n,o=>i(o))}const r=Pd("auth");return r&&vE(n,`http://${r}`),n}zI("Browser");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof window<"u";function YI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Ea(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const cr=()=>{},kt=Array.isArray,XI=/\/$/,JI=t=>t.replace(XI,"");function Ia(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=n0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ZI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function e0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ss(e.matched[s],n.matched[r])&&yp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!t0(t[n],e[n]))return!1;return!0}function t0(t,e){return kt(t)?vh(t,e):kt(e)?vh(e,t):t===e}function vh(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function n0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function s0(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JI(t)}const r0=/^[^#]+#/;function i0(t,e){return t.replace(r0,"#")+e}function o0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ao=()=>({left:window.pageXOffset,top:window.pageYOffset});function a0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=o0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wh(t,e){return(history.state?history.state.position-e:-1)+t}const oc=new Map;function c0(t,e){oc.set(t,e)}function u0(t){const e=oc.get(t);return oc.delete(t),e}let l0=()=>location.protocol+"//"+location.host;function vp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),yh(c,"")}return yh(n,t)+s+r}function h0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=vp(t,location),y=n.value,w=e.value;let A=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}A=w?f.position-w.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:A,type:br.pop,direction:A?A>0?ur.forward:ur.back:ur.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:Ao()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function _h(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ao():null}}function f0(t){const{history:e,location:n}=window,s={value:vp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:l0()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=le({},e.state,_h(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=le({},r.value,e.state,{forward:c,scroll:Ao()});i(l.current,l,!0);const h=le({},_h(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function d0(t){t=s0(t);const e=f0(t),n=h0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:i0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function p0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),d0(t)}function g0(t){return typeof t=="string"||t&&typeof t=="object"}function wp(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_p=Symbol("");var Eh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Eh||(Eh={}));function Cs(t,e){return le(new Error,{type:t,[_p]:!0},e)}function jt(t,e){return t instanceof Error&&_p in t&&(e==null||!!(t.type&e))}const Ih="[^/]+?",m0={sensitive:!1,strict:!1,start:!0,end:!0},y0=/[.+*?^${}()[\]/\\]/g;function v0(t,e){const n=le({},m0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(y0,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:w,optional:A,regexp:k}=f;i.push({name:y,repeatable:w,optional:A});const P=k||Ih;if(P!==Ih){g+=10;try{new RegExp(`(${P})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+z.message)}}let x=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(x=A&&u.length<2?`(?:/${x})`:"/"+x),A&&(x+="?"),r+=x,g+=20,A&&(g+=-8),w&&(g+=-20),P===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:A}=g,k=y in u?u[y]:"";if(kt(k)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=kt(k)?k.join("/"):k;if(!P)if(A)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=P}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function w0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=w0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Th(s))return 1;if(Th(r))return-1}return r.length-s.length}function Th(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const E0={type:0,value:""},I0=/[a-zA-Z0-9_]/;function T0(t){if(!t)return[[]];if(t==="/")return[[E0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:I0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function b0(t,e,n){const s=v0(T0(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function S0(t,e){const n=[],s=new Map;e=Ch({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=C0(l);y.aliasOf=f&&f.record;const w=Ch(e,l),A=[y];if("alias"in l){const x=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of x)A.push(le({},y,{components:f?f.record.components:y.components,path:z,aliasOf:f?f.record:y}))}let k,P;for(const x of A){const{path:z}=x;if(h&&z[0]!=="/"){const oe=h.record.path,Te=oe[oe.length-1]==="/"?"":"/";x.path=h.record.path+(z&&Te+z)}if(k=b0(x,h,w),f?f.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),g&&l.name&&!Sh(k)&&o(l.name)),y.children){const oe=y.children;for(let Te=0;Te<oe.length;Te++)i(oe[Te],k,f&&f.children[Te])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:cr}function o(l){if(wp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&_0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Ep(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Sh(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,w;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Cs(1,{location:l});w=f.record.name,g=le(bh(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),l.params&&bh(l.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Cs(1,{location:l,currentLocation:h});w=f.record.name,g=le({},h.params,l.params),y=f.stringify(g)}const A=[];let k=f;for(;k;)A.unshift(k.record),k=k.parent;return{name:w,path:y,params:g,matched:A,meta:k0(A)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function bh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function C0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:A0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function A0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Sh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function k0(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Ch(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ep(t,e){return e.children.some(n=>n===t||Ep(t,n))}const Ip=/#/g,R0=/&/g,N0=/\//g,D0=/=/g,O0=/\?/g,Tp=/\+/g,P0=/%5B/g,x0=/%5D/g,bp=/%5E/g,M0=/%60/g,Sp=/%7B/g,L0=/%7C/g,Cp=/%7D/g,U0=/%20/g;function du(t){return encodeURI(""+t).replace(L0,"|").replace(P0,"[").replace(x0,"]")}function F0(t){return du(t).replace(Sp,"{").replace(Cp,"}").replace(bp,"^")}function ac(t){return du(t).replace(Tp,"%2B").replace(U0,"+").replace(Ip,"%23").replace(R0,"%26").replace(M0,"`").replace(Sp,"{").replace(Cp,"}").replace(bp,"^")}function V0(t){return ac(t).replace(D0,"%3D")}function $0(t){return du(t).replace(Ip,"%23").replace(O0,"%3F")}function B0(t){return t==null?"":$0(t).replace(N0,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function j0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Tp," "),o=i.indexOf("="),a=Qi(o<0?i:i.slice(0,o)),c=o<0?null:Qi(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ah(t){let e="";for(let n in t){const s=t[n];if(n=V0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&ac(i)):[s&&ac(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function q0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const H0=Symbol(""),kh=Symbol(""),ko=Symbol(""),Ap=Symbol(""),cc=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Cs(4,{from:n,to:e})):h instanceof Error?a(h):g0(h)?a(Cs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ta(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(K0(a)){const u=(a.__vccOpts||a)[e];u&&r.push(cn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=YI(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&cn(f,n,s,i,o)()}))}}return r}function K0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rh(t){const e=gt(ko),n=gt(Ap),s=dt(()=>e.resolve(gs(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ss.bind(null,l));if(f>-1)return f;const g=Nh(c[u-2]);return u>1&&Nh(l)===g&&h[h.length-1].path!==g?h.findIndex(Ss.bind(null,c[u-2])):f}),i=dt(()=>r.value>-1&&Q0(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&yp(n.params,s.value.params));function a(c={}){return G0(c)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(cr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const z0=ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(t,{slots:e}){const n=Lr(Rh(t)),{options:s}=gt(ko),r=dt(()=>({[Dh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Dh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),W0=z0;function G0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Q0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dh=(t,e,n)=>t??e??n,Y0=ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gt(cc),r=dt(()=>t.route||s.value),i=gt(kh,0),o=dt(()=>{let u=gs(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=dt(()=>r.value.matched[o.value]);Si(kh,dt(()=>o.value+1)),Si(H0,a),Si(cc,r);const c=Kt();return rr(()=>[c.value,a.value,t.name],([u,l,h],[f,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ss(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return Oh(n.default,{Component:f,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,A=kd(f,le({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Oh(n.default,{Component:A,route:u})||A}}});function Oh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const X0=Y0;function J0(t){const e=S0(t.routes,t),n=t.parseQuery||j0,s=t.stringifyQuery||Ah,r=t.history,i=Qs(),o=Qs(),a=Qs(),c=Py(on);let u=on;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ea.bind(null,_=>""+_),h=Ea.bind(null,B0),f=Ea.bind(null,Qi);function g(_,O){let N,V;return wp(_)?(N=e.getRecordMatcher(_),V=O):V=_,e.addRoute(V,N)}function y(_){const O=e.getRecordMatcher(_);O&&e.removeRoute(O)}function w(){return e.getRoutes().map(_=>_.record)}function A(_){return!!e.getRecordMatcher(_)}function k(_,O){if(O=le({},O||c.value),typeof _=="string"){const d=Ia(n,_,O.path),p=e.resolve({path:d.path},O),m=r.createHref(d.fullPath);return le(d,p,{params:f(p.params),hash:Qi(d.hash),redirectedFrom:void 0,href:m})}let N;if("path"in _)N=le({},_,{path:Ia(n,_.path,O.path).path});else{const d=le({},_.params);for(const p in d)d[p]==null&&delete d[p];N=le({},_,{params:h(_.params)}),O.params=h(O.params)}const V=e.resolve(N,O),re=_.hash||"";V.params=l(f(V.params));const Ie=ZI(s,le({},_,{hash:F0(re),path:V.path})),ee=r.createHref(Ie);return le({fullPath:Ie,hash:re,query:s===Ah?q0(_.query):_.query||{}},V,{redirectedFrom:void 0,href:ee})}function P(_){return typeof _=="string"?Ia(n,_,c.value.path):le({},_)}function x(_,O){if(u!==_)return Cs(8,{from:O,to:_})}function z(_){return Ce(_)}function oe(_){return z(le(P(_),{replace:!0}))}function Te(_){const O=_.matched[_.matched.length-1];if(O&&O.redirect){const{redirect:N}=O;let V=typeof N=="function"?N(_):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),le({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function Ce(_,O){const N=u=k(_),V=c.value,re=_.state,Ie=_.force,ee=_.replace===!0,d=Te(N);if(d)return Ce(le(P(d),{state:typeof d=="object"?le({},re,d.state):re,force:Ie,replace:ee}),O||N);const p=N;p.redirectedFrom=O;let m;return!Ie&&e0(s,V,N)&&(m=Cs(16,{to:p,from:V}),kn(V,V,!0,!1)),(m?Promise.resolve(m):ye(p,V)).catch(v=>jt(v)?jt(v,2)?v:vt(v):pe(v,p,V)).then(v=>{if(v){if(jt(v,2))return Ce(le({replace:ee},P(v.to),{state:typeof v.to=="object"?le({},re,v.to.state):re,force:Ie}),O||p)}else v=je(p,V,!0,ee,re);return de(p,V,v),v})}function J(_,O){const N=x(_,O);return N?Promise.reject(N):Promise.resolve()}function ye(_,O){let N;const[V,re,Ie]=Z0(_,O);N=Ta(V.reverse(),"beforeRouteLeave",_,O);for(const d of V)d.leaveGuards.forEach(p=>{N.push(cn(p,_,O))});const ee=J.bind(null,_,O);return N.push(ee),is(N).then(()=>{N=[];for(const d of i.list())N.push(cn(d,_,O));return N.push(ee),is(N)}).then(()=>{N=Ta(re,"beforeRouteUpdate",_,O);for(const d of re)d.updateGuards.forEach(p=>{N.push(cn(p,_,O))});return N.push(ee),is(N)}).then(()=>{N=[];for(const d of _.matched)if(d.beforeEnter&&!O.matched.includes(d))if(kt(d.beforeEnter))for(const p of d.beforeEnter)N.push(cn(p,_,O));else N.push(cn(d.beforeEnter,_,O));return N.push(ee),is(N)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),N=Ta(Ie,"beforeRouteEnter",_,O),N.push(ee),is(N))).then(()=>{N=[];for(const d of o.list())N.push(cn(d,_,O));return N.push(ee),is(N)}).catch(d=>jt(d,8)?d:Promise.reject(d))}function de(_,O,N){for(const V of a.list())V(_,O,N)}function je(_,O,N,V,re){const Ie=x(_,O);if(Ie)return Ie;const ee=O===on,d=as?history.state:{};N&&(V||ee?r.replace(_.fullPath,le({scroll:ee&&d&&d.scroll},re)):r.push(_.fullPath,re)),c.value=_,kn(_,O,N,ee),vt()}let qe;function yt(){qe||(qe=r.listen((_,O,N)=>{if(!ci.listening)return;const V=k(_),re=Te(V);if(re){Ce(le(re,{replace:!0}),V).catch(cr);return}u=V;const Ie=c.value;as&&c0(wh(Ie.fullPath,N.delta),Ao()),ye(V,Ie).catch(ee=>jt(ee,12)?ee:jt(ee,2)?(Ce(ee.to,V).then(d=>{jt(d,20)&&!N.delta&&N.type===br.pop&&r.go(-1,!1)}).catch(cr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),pe(ee,V,Ie))).then(ee=>{ee=ee||je(V,Ie,!1),ee&&(N.delta&&!jt(ee,8)?r.go(-N.delta,!1):N.type===br.pop&&jt(ee,20)&&r.go(-1,!1)),de(V,Ie,ee)}).catch(cr)}))}let Bt=Qs(),Ws=Qs(),Ae;function pe(_,O,N){vt(_);const V=Ws.list();return V.length?V.forEach(re=>re(_,O,N)):console.error(_),Promise.reject(_)}function he(){return Ae&&c.value!==on?Promise.resolve():new Promise((_,O)=>{Bt.add([_,O])})}function vt(_){return Ae||(Ae=!_,yt(),Bt.list().forEach(([O,N])=>_?N(_):O()),Bt.reset()),_}function kn(_,O,N,V){const{scrollBehavior:re}=t;if(!as||!re)return Promise.resolve();const Ie=!N&&u0(wh(_.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return Zf().then(()=>re(_,O,Ie)).then(ee=>ee&&a0(ee)).catch(ee=>pe(ee,_,O))}const wt=_=>r.go(_);let st;const ss=new Set,ci={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:A,getRoutes:w,resolve:k,options:t,push:z,replace:oe,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ws.add,isReady:he,install(_){const O=this;_.component("RouterLink",W0),_.component("RouterView",X0),_.config.globalProperties.$router=O,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(c)}),as&&!st&&c.value===on&&(st=!0,z(r.location).catch(re=>{}));const N={};for(const re in on)N[re]=dt(()=>c.value[re]);_.provide(ko,O),_.provide(Ap,Lr(N)),_.provide(cc,c);const V=_.unmount;ss.add(_),_.unmount=function(){ss.delete(_),ss.size<1&&(u=on,qe&&qe(),qe=null,c.value=on,st=!1,Ae=!1),V()}}};return ci}function is(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Z0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ss(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ss(u,c))||r.push(c))}return[n,s,r]}function pu(){return gt(ko)}const Ro=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},eT={name:"HeaderComponent",setup(){const t=gt("auth"),e=Kt(""),n=pu();return t.onAuthStateChanged(r=>{e.value=r?r.email:"No user"}),{currentUser:e,logOut:()=>{n.push("auth"),LE(t)}}}},tT={class:"nav-side"},nT={class:"nav-side"};function sT(t,e,n,s,r,i){const o=qa("router-link");return Mt(),pn("header",null,[Z("nav",null,[Z("div",tT,[Z("span",null,[Qe(o,{to:"/"},{default:$a(()=>[Ya("Todos")]),_:1})])]),Z("div",nT,[s.currentUser==="No user"?(Mt(),bd(o,{key:0,class:"login-link",to:"/auth"},{default:$a(()=>[Ya("Login")]),_:1})):(Mt(),pn("span",{key:1,onClick:e[0]||(e[0]=(...a)=>s.logOut&&s.logOut(...a))},"Logout"))])])])}const rT=Ro(eT,[["render",sT],["__scopeId","data-v-6b5dcf15"]]),iT={components:{HeaderComponent:rT}},oT={id:"app"};function aT(t,e,n,s,r,i){const o=qa("header-component"),a=qa("router-view");return Mt(),pn("div",oT,[Qe(o),Qe(a)])}const cT=Ro(iT,[["render",aT]]);var uT="firebase",lT="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(uT,lT,"app");var hT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,gu=gu||{},K=hT||self;function Yi(){}function No(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fT(t){return Object.prototype.hasOwnProperty.call(t,ba)&&t[ba]||(t[ba]=++dT)}var ba="closure_uid_"+(1e9*Math.random()>>>0),dT=0;function pT(t,e,n){return t.call.apply(t.bind,arguments)}function gT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=pT:Ye=gT,Ye.apply(null,arguments)}function mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var mT=0;Sn.prototype.s=!1;Sn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),mT!=0)&&fT(this)};Sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ph(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(No(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var yT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Yi,e),K.removeEventListener("test",Yi,e)}catch{}return t}();function Xi(t){return/^[\s\xa0]*$/.test(t)}var xh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sa(t,e){return t<e?-1:t>e?1:0}function Do(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return Do().indexOf(t)!=-1}function yu(t){return yu[" "](t),t}yu[" "]=Yi;function vT(t){var e=ET;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wT=xt("Opera"),As=xt("Trident")||xt("MSIE"),Rp=xt("Edge"),uc=Rp||As,Np=xt("Gecko")&&!(Do().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),_T=Do().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function Dp(){var t=K.document;return t?t.documentMode:void 0}var Ji;e:{var Ca="",Aa=function(){var t=Do();if(Np)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rp)return/Edge\/([\d\.]+)/.exec(t);if(As)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_T)return/WebKit\/(\S+)/.exec(t);if(wT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Aa&&(Ca=Aa?Aa[1]:""),As){var ka=Dp();if(ka!=null&&ka>parseFloat(Ca)){Ji=String(ka);break e}}Ji=Ca}var ET={};function IT(){return vT(function(){let t=0;const e=xh(String(Ji)).split("."),n=xh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Sa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Sa(r[2].length==0,i[2].length==0)||Sa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var lc;if(K.document&&As){var Mh=Dp();lc=Mh||parseInt(Ji,10)||void 0}else lc=void 0;var TT=lc;function Sr(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Np){e:{try{yu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sr.X.h.call(this)}}Be(Sr,Xe);var bT={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),ST=0;function CT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++ST,this.ba=this.ea=!1}function Oo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Op(t){const e={};for(const n in t)e[n]=t[n];return e}const Lh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Lh.length;i++)n=Lh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Po(t){this.src=t,this.g={},this.h=0}Po.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=fc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function hc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=kp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Oo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var wu="closure_lm_"+(1e6*Math.random()|0),Ra={};function xp(t,e,n,s,r){if(s&&s.once)return Lp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)xp(t,e[i],n,s,r);return null}return n=Iu(n),t&&t[Wr]?t.N(e,n,zr(s)?!!s.capture:!!s,r):Mp(t,e,n,!1,s,r)}function Mp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zr(r)?!!r.capture:!!r,a=Eu(t);if(a||(t[wu]=a=new Po(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=AT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)yT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Fp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AT(){function t(n){return e.call(t.src,t.listener,n)}const e=kT;return t}function Lp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lp(t,e[i],n,s,r);return null}return n=Iu(n),t&&t[Wr]?t.O(e,n,zr(s)?!!s.capture:!!s,r):Mp(t,e,n,!0,s,r)}function Up(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Up(t,e[i],n,s,r);else s=zr(s)?!!s.capture:!!s,n=Iu(n),t&&t[Wr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=fc(i,n,s,r),-1<n&&(Oo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fc(e,n,s,r)),(n=-1<t?e[t]:null)&&_u(n))}function _u(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wr])hc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Fp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Eu(e))?(hc(n,t),n.h==0&&(n.src=null,e[wu]=null)):Oo(t)}}}function Fp(t){return t in Ra?Ra[t]:Ra[t]="on"+t}function kT(t,e){if(t.ba)t=!0;else{e=new Sr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&_u(t),t=n.call(s,e)}return t}function Eu(t){return t=t[wu],t instanceof Po?t:null}var Na="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iu(t){return typeof t=="function"?t:(t[Na]||(t[Na]=function(e){return t.handleEvent(e)}),t[Na])}function Fe(){Sn.call(this),this.i=new Po(this),this.P=this,this.I=null}Be(Fe,Sn);Fe.prototype[Wr]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){Up(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),Pp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=yi(o,s,!0,e)&&r}if(o=e.g=t,r=yi(o,s,!0,e)&&r,r=yi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=yi(o,s,!1,e)&&r}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Oo(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Tu=K.JSON.stringify;function RT(){var t=Bp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NT{constructor(){this.h=this.g=null}add(e,n){const s=Vp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Vp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new DT,t=>t.reset());class DT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OT(t){K.setTimeout(()=>{throw t},0)}function $p(t,e){dc||PT(),pc||(dc(),pc=!0),Bp.add(t,e)}var dc;function PT(){var t=K.Promise.resolve(void 0);dc=function(){t.then(xT)}}var pc=!1,Bp=new NT;function xT(){for(var t;t=RT();){try{t.h.call(t.g)}catch(n){OT(n)}var e=Vp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pc=!1}function xo(t,e){Fe.call(this),this.h=t||1,this.g=e||K,this.j=Ye(this.lb,this),this.l=Date.now()}Be(xo,Fe);U=xo.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(bu(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){xo.X.M.call(this),bu(this),delete this.g};function Su(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function jp(t){t.g=Su(()=>{t.g=null,t.i&&(t.i=!1,jp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MT extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(t){Sn.call(this),this.h=t,this.g={}}Be(Cr,Sn);var Uh=[];function qp(t,e,n,s){Array.isArray(n)||(n&&(Uh[0]=n.toString()),n=Uh);for(var r=0;r<n.length;r++){var i=xp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Hp(t){vu(t.g,function(e,n){this.g.hasOwnProperty(n)&&_u(e)},t),t.g={}}Cr.prototype.M=function(){Cr.X.M.call(this),Hp(this)};Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mo(){this.g=!0}Mo.prototype.Aa=function(){this.g=!1};function LT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function UT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VT(t,n)+(s?" "+s:"")})}function FT(t,e){t.info(function(){return"TIMEOUT: "+e})}Mo.prototype.info=function(){};function VT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tu(n)}catch{return e}}var Zn={},Fh=null;function Lo(){return Fh=Fh||new Fe}Zn.Pa="serverreachability";function Kp(t){Xe.call(this,Zn.Pa,t)}Be(Kp,Xe);function Ar(t){const e=Lo();$e(e,new Kp(e))}Zn.STAT_EVENT="statevent";function zp(t,e){Xe.call(this,Zn.STAT_EVENT,t),this.stat=e}Be(zp,Xe);function nt(t){const e=Lo();$e(e,new zp(e,t))}Zn.Qa="timingevent";function Wp(t,e){Xe.call(this,Zn.Qa,t),this.size=e}Be(Wp,Xe);function Gr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Uo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cu(){}Cu.prototype.h=null;function Vh(t){return t.h||(t.h=t.i())}function Qp(){}var Qr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Au(){Xe.call(this,"d")}Be(Au,Xe);function ku(){Xe.call(this,"c")}Be(ku,Xe);var gc;function Fo(){}Be(Fo,Cu);Fo.prototype.g=function(){return new XMLHttpRequest};Fo.prototype.i=function(){return{}};gc=new Fo;function Yr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Cr(this),this.O=$T,t=uc?125:void 0,this.T=new xo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var $T=45e3,mc={},Zi={};U=Yr.prototype;U.setTimeout=function(t){this.O=t};function yc(t,e,n){t.K=1,t.v=$o(Xt(e)),t.s=n,t.P=!0,Xp(t,null)}function Xp(t,e){t.F=Date.now(),Xr(t),t.A=Xt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ig(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Yp,t.g=Cg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new MT(Ye(t.La,t,t.g),t.N)),qp(t.S,t.g,"readystatechange",t.ib),e=t.H?Op(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ar(),LT(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Gt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=Gt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||uc||this.g&&(this.h.h||this.g.fa()||qh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ar(3):Ar(2)),Vo(this);var n=this.g.aa();this.Y=n;t:if(Jp(this)){var s=qh(this.g);t="";var r=s.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),lr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,UT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vc(this,n);else{this.i=!1,this.o=3,nt(12),Fn(this),lr(this);break e}}this.P?(Zp(this,l,o),uc&&this.i&&l==3&&(qp(this.S,this.T,"tick",this.hb),this.T.start())):(ls(this.j,this.m,o,null),vc(this,o)),l==4&&Fn(this),this.i&&!this.I&&(l==4?Ig(this.l,this):(this.i=!1,Xr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Fn(this),lr(this)}}}catch{}finally{}};function Jp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Zp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=BT(t,n),r==Zi){e==4&&(t.o=4,nt(14),s=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(r==mc){t.o=4,nt(15),ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ls(t.j,t.m,r,null),vc(t,r);Jp(t)&&r!=Zi&&r!=mc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mu(e),e.K=!0,nt(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),lr(t))}U.hb=function(){if(this.g){var t=Gt(this.g),e=this.g.fa();this.C<e.length&&(Vo(this),Zp(this,t,e),this.i&&t!=4&&Xr(this))}};function BT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Zi:(n=Number(e.substring(n,s)),isNaN(n)?mc:(s+=1,s+n>e.length?Zi:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Fn(this)};function Xr(t){t.V=Date.now()+t.O,eg(t,t.O)}function eg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gr(Ye(t.gb,t),e)}function Vo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(FT(this.j,this.A),this.K!=2&&(Ar(),nt(17)),Fn(this),this.o=2,lr(this)):eg(this,this.V-t)};function lr(t){t.l.G==0||t.I||Ig(t.l,t)}function Fn(t){Vo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bu(t.T),Hp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wc(n.h,t))){if(!t.J&&wc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)no(n),qo(n);else break e;xu(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Gr(Ye(n.cb,n),6e3));if(1>=cg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&no(n),!Xi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ru(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,_e(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Sg(s,s.H?s.ka:null,s.V),o.J){ug(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vo(a),Xr(a)),s.g=o}else _g(s);0<n.i.length&&Ho(n)}else u[0]!="stop"&&u[0]!="close"||Vn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vn(n,7):Pu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ar(4)}catch{}}function jT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(No(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function qT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(No(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function tg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(No(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qT(t),s=jT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var ng=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Hn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hn){this.h=e!==void 0?e:t.h,eo(this,t.j),this.s=t.s,this.g=t.g,to(this,t.m),this.l=t.l,e=t.i;var n=new kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$h(this,n),this.o=t.o}else t&&(n=String(t).match(ng))?(this.h=!!e,eo(this,n[1]||"",!0),this.s=er(n[2]||""),this.g=er(n[3]||"",!0),to(this,n[4]),this.l=er(n[5]||"",!0),$h(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.h=!!e,this.i=new kr(null,this.h))}Hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,Bh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,Bh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?WT:zT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,QT)),t.join("")};function Xt(t){return new Hn(t)}function eo(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function to(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $h(t,e,n){e instanceof kr?(t.i=e,YT(t.i,t.h)):(n||(e=tr(e,GT)),t.i=new kr(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function $o(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bh=/[#\/\?@]/g,zT=/[#\?:]/g,WT=/[#\?]/g,GT=/[#\?@]/g,QT=/#/g;function kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cn(t){t.g||(t.g=new Map,t.h=0,t.i&&HT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=kr.prototype;U.add=function(t,e){Cn(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sg(t,e){Cn(t),e=Bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rg(t,e){return Cn(t),e=Bs(t,e),t.g.has(e)}U.forEach=function(t,e){Cn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Cn(this);let e=[];if(typeof t=="string")rg(this,t)&&(e=e.concat(this.g.get(Bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Cn(this),this.i=null,t=Bs(this,t),rg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ig(t,e,n){sg(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),mu(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YT(t,e){e&&!t.j&&(Cn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(sg(this,s),ig(this,r,n))},t)),t.j=e}var XT=class{constructor(e,n){this.h=e,this.g=n}};function og(t){this.l=t||JT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JT=10;function ag(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cg(t){return t.h?1:t.g?t.g.size:0}function wc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ru(t,e){t.g?t.g.add(e):t.h=e}function ug(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}og.prototype.cancel=function(){if(this.i=lg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mu(t.i)}function Nu(){}Nu.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Nu.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function ZT(){this.g=new Nu}function eb(t,e,n){const s=n||"";try{tg(t,function(r,i){let o=r;zr(r)&&(o=Tu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function tb(t,e){const n=new Mo;if(K.Image){const s=new Image;s.onload=mi(vi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=mi(vi,n,s,"TestLoadImage: error",!1,e),s.onabort=mi(vi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=mi(vi,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Jr(t){this.l=t.ac||null,this.j=t.jb||!1}Be(Jr,Cu);Jr.prototype.g=function(){return new Bo(this.l,this.j)};Jr.prototype.i=function(t){return function(){return t}}({});function Bo(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(Bo,Fe);var Du=0;U=Bo.prototype;U.open=function(t,e){if(this.readyState!=Du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=Du};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function hg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zr(this):Rr(this),this.readyState==3&&hg(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Zr(this))};U.Ua=function(t){this.g&&(this.response=t,Zr(this))};U.ga=function(){this.g&&Zr(this)};function Zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nb=K.JSON.parse;function be(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fg,this.K=this.L=!1}Be(be,Fe);var fg="",sb=/^https?$/i,rb=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gc.g(),this.C=this.u?Vh(this.u):Vh(gc),this.g.onreadystatechange=Ye(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){jh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=kp(rb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gg(this),0<this.B&&((this.K=ib(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.qa,this)):this.A=Su(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){jh(this,i)}};function ib(t){return As&&IT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof gu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function jh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dg(t),jo(t)}function dg(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),jo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jo(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?pg(this):this.fb())};U.fb=function(){pg(this)};function pg(t){if(t.h&&typeof gu<"u"&&(!t.C[1]||Gt(t)!=4||t.aa()!=2)){if(t.v&&Gt(t)==4)Su(t.Ha,0,t);else if($e(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(ng)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!sb.test(r?r.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<Gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dg(t)}}finally{jo(t)}}}}function jo(t,e){if(t.g){gg(t);const n=t.g,s=t.C[0]?Yi:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function gg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Gt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nb(e)}};function qh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mg(t){let e="";return vu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ou(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yg(t){this.Ca=0,this.i=[],this.j=new Mo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new og(t&&t.concurrentRequestLimit),this.Fa=new ZT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=yg.prototype;U.ma=8;U.G=1;function Pu(t){if(vg(t),t.G==3){var e=t.U++,n=Xt(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),ei(t,n),e=new Yr(t,t.j,e,void 0),e.K=2,e.v=$o(Xt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xr(e)}bg(t)}function qo(t){t.g&&(Mu(t),t.g.cancel(),t.g=null)}function vg(t){qo(t),t.u&&(K.clearTimeout(t.u),t.u=null),no(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ho(t){ag(t.h)||t.m||(t.m=!0,$p(t.Ja,t),t.C=0)}function ob(t,e){return cg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Gr(Ye(t.Ja,t,e),Tg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Yr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Op(i),Pp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wg(this,r,e),n=Xt(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),ei(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(mg(i)))+"&"+e:this.o&&Ou(n,this.o,i)),Ru(this.h,r),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),r.Z=!0,yc(r,n,null)):yc(r,n,e),this.G=2}}else this.G==3&&(t?Hh(this,t):this.i.length==0||ag(this.h)||Hh(this))};function Hh(t,e){var n;e?n=e.m:n=t.U++;const s=Xt(t.F);_e(s,"SID",t.I),_e(s,"RID",n),_e(s,"AID",t.T),ei(t,s),t.o&&t.s&&Ou(s,t.o,t.s),n=new Yr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=wg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ru(t.h,n),yc(n,s,e)}function ei(t,e){t.ia&&vu(t.ia,function(n,s){_e(e,s,n)}),t.l&&tg({},function(n,s){_e(e,s,n)})}function wg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ye(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{eb(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _g(t){t.g||t.u||(t.Z=1,$p(t.Ia,t),t.A=0)}function xu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Gr(Ye(t.Ia,t),Tg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Eg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gr(Ye(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),qo(this),Eg(this))};function Mu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Eg(t){t.g=new Yr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Xt(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),ei(t,e),t.o&&t.s&&Ou(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$o(Xt(e)),n.s=null,n.P=!0,Xp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,qo(this),xu(this),nt(19))};function no(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Ig(t,e){var n=null;if(t.g==e){no(t),Mu(t),t.g=null;var s=2}else if(wc(t.h,e))n=e.D,ug(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Lo(),$e(s,new Wp(s,n)),Ho(t)}else _g(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&ob(t,e)||s==2&&xu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function Tg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ye(t.kb,t);n||(n=new Hn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||eo(n,"https"),$o(n)),tb(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),bg(t),vg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function bg(t){if(t.G=0,t.la=[],t.l){const e=lg(t.h);(e.length!=0||t.i.length!=0)&&(Ph(t.la,e),Ph(t.la,t.i),t.h.i.length=0,mu(t.i),t.i.length=0),t.l.ua()}}function Sg(t,e,n){var s=n instanceof Hn?Xt(n):new Hn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),to(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Hn(null,void 0);s&&eo(i,s),e&&(i.g=e),r&&to(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&_e(s,n,e),_e(s,"VER",t.ma),ei(t,s),s}function Cg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new Jr({jb:!0})):new be(t.ra),e.Ka(t.H),e}function Ag(){}U=Ag.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function so(){if(As&&!(10<=Number(TT)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Fe.call(this),this.g=new yg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Be(ht,Fe);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Sg(t,null,t.V),Ho(t)};ht.prototype.close=function(){Pu(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tu(t),t=n);e.i.push(new XT(e.ab++,t)),e.G==3&&Ho(e)};ht.prototype.M=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,ht.X.M.call(this)};function kg(t){Au.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(kg,Au);function Rg(){ku.call(this),this.status=1}Be(Rg,ku);function js(t){this.g=t}Be(js,Ag);js.prototype.xa=function(){$e(this.g,"a")};js.prototype.wa=function(t){$e(this.g,new kg(t))};js.prototype.va=function(t){$e(this.g,new Rg)};js.prototype.ua=function(){$e(this.g,"b")};so.prototype.createWebChannel=so.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Uo.NO_ERROR=0;Uo.TIMEOUT=8;Uo.HTTP_ERROR=6;Gp.COMPLETE="complete";Qp.EventType=Qr;Qr.OPEN="a";Qr.CLOSE="b";Qr.ERROR="c";Qr.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var ab=function(){return new so},cb=function(){return Lo()},Da=Uo,ub=Gp,lb=Zn,Kh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},hb=Jr,wi=Qp,fb=be;const zh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new eu("@firebase/firestore");function Wh(){return Xn.logLevel}function F(t,...e){if(Xn.logLevel<=ce.DEBUG){const n=e.map(Lu);Xn.debug(`Firestore (${qs}): ${t}`,...n)}}function Jt(t,...e){if(Xn.logLevel<=ce.ERROR){const n=e.map(Lu);Xn.error(`Firestore (${qs}): ${t}`,...n)}}function _c(t,...e){if(Xn.logLevel<=ce.WARN){const n=e.map(Lu);Xn.warn(`Firestore (${qs}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function me(t,e){t||H()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gb{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new Ng(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new He(e)}}class mb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class yb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new mb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new vb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=_b(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Oe(0,0))}static max(){return new Q(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Nr{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Nr{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return Eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(we.fromString(e))}static fromName(e){return new $(we.fromString(e).popFirst(5))}static empty(){return new $(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new we(e.slice()))}}function Ib(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new In(r,$.empty(),e)}function Tb(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new In(Q.min(),$.empty(),-1)}static max(){return new In(Q.max(),$.empty(),-1)}}function bb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Sb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Uu.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Dr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Og(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){return t==null}function ro(t){return t===0&&1/t==-1/0}function kb(t){return typeof t=="number"&&Number.isInteger(t)&&!ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Rb("Invalid base64 string: "+r):r}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(me(!!t),typeof t=="string"){let e=0;const n=Nb.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xg(t){const e=t.mapValue.fields.__previous_value__;return Pg(e)?xg(e):e}function Or(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pg(t)?4:Db(t)?9007199254740991:10:H()}function $t(t,e){if(t===e)return!0;const n=Jn(t);if(n!==Jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Or(t).isEqual(Or(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Rs(s.bytesValue).isEqual(Rs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ne(s.geoPointValue.latitude)===Ne(r.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ne(s.integerValue)===Ne(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ne(s.doubleValue),o=Ne(r.doubleValue);return i===o?ro(i)===ro(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Gh(i)!==Gh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Pr(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Jn(t),s=Jn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ne(r.integerValue||r.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qh(t.timestampValue,e.timestampValue);case 4:return Qh(Or(t),Or(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Rs(r),a=Rs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Ne(r.latitude),Ne(i.latitude));return o!==0?o:ue(Ne(r.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ns(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===_i.mapValue&&i===_i.mapValue)return 0;if(r===_i.mapValue)return 1;if(i===_i.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const f=Ns(o[a[l]],c[u[l]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Qh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Tn(t),s=Tn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ds(t){return Ec(t)}function Ec(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ec(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ec(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Yh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ic(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function Xh(t){return!!t&&"nullValue"in t}function Jh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xi(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Db(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.position=e,this.inclusive=n}}function Zh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{}class De extends Mg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Pb(e,n,s):n==="array-contains"?new Lb(e,s):n==="in"?new Ub(e,s):n==="not-in"?new Fb(e,s):n==="array-contains-any"?new Vb(e,s):new De(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new xb(e,s):new Mb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Jn(this.value)===Jn(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Mg{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Rt(e,n)}matches(e){return Lg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Lg(t){return t.op==="and"}function Ug(t){return Ob(t)&&Lg(t)}function Ob(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function Tc(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Ug(t))return t.filters.map(e=>Tc(e)).join(",");{const e=t.filters.map(n=>Tc(n)).join(",");return`${t.op}(${e})`}}function Fg(t,e){return t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(t,e):t instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Fg(i,s.filters[o]),!0):!1}(t,e):void H()}function Vg(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${Ds(e.value)}`}(t):t instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Vg).join(" ,")+"}"}(t):"Filter"}class Pb extends De{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class xb extends De{constructor(e,n){super(e,"in",n),this.keys=$g("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Mb extends De{constructor(e,n){super(e,"not-in",n),this.keys=$g("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $g(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class Lb extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&Pr(n.arrayValue,this.value)}}class Ub extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class Fb extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class Vb extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function $b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=r??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ve(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tf(this.data.getIterator())}getIteratorFrom(e){return new tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new lt([])}unionWith(e){let n=new Pe(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=We.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){es(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new it(hr(this.value))}}function Bg(t){const e=[];return es(t.fields,(n,s)=>{const r=new We([n]);if(xi(s)){const i=Bg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,Q.min(),Q.min(),Q.min(),it.empty(),0)}static newFoundDocument(e,n,s,r){return new Ke(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,Q.min(),Q.min(),it.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,Q.min(),Q.min(),it.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function nf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Bb(t,e,n,s,r,i,o)}function Vu(t){const e=Y(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ko(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),e._t=n}return e._t}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ef(t.startAt,e.startAt)&&ef(t.endAt,e.endAt)}function bc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function jb(t,e,n,s,r,i,o,a){return new Hs(t,e,n,s,r,i,o,a)}function Bu(t){return new Hs(t)}function sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ju(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function jg(t){return t.collectionGroup!==null}function _s(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=zo(e),s=ju(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ws(n)),e.wt.push(new ws(We.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ws(We.keyField(),i))}}}return e.wt}function Zt(t){const e=Y(t);if(!e.gt)if(e.limitType==="F")e.gt=nf(e.path,e.collectionGroup,_s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of _s(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ws(i.field,o))}const s=e.endAt?new io(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new io(e.startAt.position,e.startAt.inclusive):null;e.gt=nf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Sc(t,e){e.getFirstInequalityField(),zo(t);const n=t.filters.concat([e]);return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cc(t,e,n){return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wo(t,e){return $u(Zt(t),Zt(e))&&t.limitType===e.limitType}function qg(t){return`${Vu(Zt(t))}|lt:${t.limitType}`}function Ac(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Vg(s)).join(", ")}]`),Ko(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),`Target(${n})`}(Zt(t))}; limitType=${t.limitType})`}function Go(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of _s(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Zh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,_s(n),s)||n.endAt&&!function(r,i,o){const a=Zh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,_s(n),s))}(t,e)}function qb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hg(t){return(e,n)=>{let s=!1;for(const r of _s(t)){const i=Hb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Hb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ns(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function zg(t){return{integerValue:""+t}}function Kb(t,e){return kb(e)?zg(e):Kg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this._=void 0}}function zb(t,e,n){return t instanceof oo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof xr?Gg(t,e):t instanceof Mr?Qg(t,e):function(s,r){const i=Wg(s,r),o=rf(i)+rf(s.It);return Ic(i)&&Ic(s.It)?zg(o):Kg(s.Tt,o)}(t,e)}function Wb(t,e,n){return t instanceof xr?Gg(t,e):t instanceof Mr?Qg(t,e):n}function Wg(t,e){return t instanceof ao?Ic(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class oo extends Qo{}class xr extends Qo{constructor(e){super(),this.elements=e}}function Gg(t,e){const n=Yg(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class Mr extends Qo{constructor(e){super(),this.elements=e}}function Qg(t,e){let n=Yg(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class ao extends Qo{constructor(e,n){super(),this.Tt=e,this.It=n}}function rf(t){return Ne(t.integerValue||t.doubleValue)}function Yg(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof xr&&s instanceof xr||n instanceof Mr&&s instanceof Mr?ks(n.elements,s.elements,$t):n instanceof ao&&s instanceof ao?$t(n.It,s.It):n instanceof oo&&s instanceof oo}(t.transform,e.transform)}class Qb{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yo{}function Xg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qu(t.key,At.none()):new si(t.key,t.data,At.none());{const n=t.data,s=it.empty();let r=new Pe(We.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new An(t.key,s,new lt(r.toArray()),At.none())}}function Yb(t,e,n){t instanceof si?function(s,r,i){const o=s.value.clone(),a=af(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof An?function(s,r,i){if(!Mi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=af(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Jg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fr(t,e,n,s){return t instanceof si?function(r,i,o,a){if(!Mi(r.precondition,i))return o;const c=r.value.clone(),u=cf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof An?function(r,i,o,a){if(!Mi(r.precondition,i))return o;const c=cf(r.fieldTransforms,a,i),u=i.data;return u.setAll(Jg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Mi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Xb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Wg(s.transform,r||null);i!=null&&(n===null&&(n=it.empty()),n.set(s.field,i))}return n||null}function of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ks(n,s,(r,i)=>Gb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class si extends Yo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class An extends Yo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function af(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Wb(o,a,n[r]))}return s}function cf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,zb(i,o,e))}return s}class qu extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jb extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,se;function eS(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Zg(t){if(t===void 0)return Jt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Re.OK:return E.OK;case Re.CANCELLED:return E.CANCELLED;case Re.UNKNOWN:return E.UNKNOWN;case Re.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Re.INTERNAL:return E.INTERNAL;case Re.UNAVAILABLE:return E.UNAVAILABLE;case Re.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Re.NOT_FOUND:return E.NOT_FOUND;case Re.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Re.ABORTED:return E.ABORTED;case Re.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Re.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(se=Re||(Re={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Og(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new Me($.comparator);function en(){return tS}const em=new Me($.comparator);function nr(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function tm(t){let e=em;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $n(){return dr()}function nm(){return dr()}function dr(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const nS=new Me($.comparator),sS=new Pe($.comparator);function ne(...t){let e=sS;for(const n of t)e=e.add(n);return e}const rS=new Pe(ue);function sm(){return rS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xo(Q.min(),r,sm(),en(),ne())}}class ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ri(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class rm{constructor(e,n){this.targetId=e,this.Rt=n}}class im{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class uf{constructor(){this.bt=0,this.vt=hf(),this.Pt=et.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=ne(),n=ne(),s=ne();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new ri(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=hf()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class iS{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=en(),this.Kt=lf(),this.Gt=new Pe(ue)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(bc(i))if(s===0){const o=new $(i.path);this.zt(n,o,Ke.newNoDocument(o,Q.min()))}else me(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&bc(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ke.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ne();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Xo(e,n,this.Gt,this.Ut,s);return this.Ut=en(),this.Kt=lf(),this.Gt=new Pe(ue),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new uf,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Pe(ue),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new uf),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function lf(){return new Me($.comparator)}function hf(){return new Me($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cS=(()=>({and:"AND",or:"OR"}))();class uS{constructor(e,n){this.databaseId=e,this.yt=n}}function co(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function om(t,e){return t.yt?e.toBase64():e.toUint8Array()}function lS(t,e){return co(t,e.toTimestamp())}function Ft(t){return me(!!t),Q.fromTimestamp(function(e){const n=Tn(e);return new Oe(n.seconds,n.nanos)}(t))}function Hu(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function am(t){const e=we.fromString(t);return me(hm(e)),e}function kc(t,e){return Hu(t.databaseId,e.path)}function Oa(t,e){const n=am(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(cm(n))}function Rc(t,e){return Hu(t.databaseId,e)}function hS(t){const e=am(t);return e.length===4?we.emptyPath():cm(e)}function Nc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cm(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ff(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function fS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(me(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Zg(c.code);return new M(u,c.message||"")}(o);n=new im(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Oa(t,s.document.name),i=Ft(s.document.updateTime),o=s.document.createTime?Ft(s.document.createTime):Q.min(),a=new it({mapValue:{fields:s.document.fields}}),c=Ke.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Li(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Oa(t,s.document),i=s.readTime?Ft(s.readTime):Q.min(),o=Ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Li([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Oa(t,s.document),i=s.removedTargetIds||[];n=new Li([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Zb(r),o=s.targetId;n=new rm(o,i)}}return n}function dS(t,e){let n;if(e instanceof si)n={update:ff(t,e.key,e.value)};else if(e instanceof qu)n={delete:kc(t,e.key)};else if(e instanceof An)n={update:ff(t,e.key,e.data),updateMask:IS(e.fieldMask)};else{if(!(e instanceof Jb))return H();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof oo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:i.field.canonicalString(),increment:o.It};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:lS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function pS(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(Q.min())&&(i=Ft(r)),new Qb(i,s.transformResults||[])}(n,e))):[]}function gS(t,e){return{documents:[Rc(t,e.path)]}}function mS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return lm(Rt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:cs(l.field),direction:wS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Ko(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function yS(t){let e=hS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=um(l);return h instanceof Rt&&Ug(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ws(us(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ko(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new io(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new io(f,h)}(n.endAt)),jb(e,r,o,i,a,"F",c,u)}function vS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function um(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=us(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=us(e.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=us(e.unaryFilter.field);return De.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=us(e.unaryFilter.field);return De.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return De.create(us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>um(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function wS(t){return oS[t]}function _S(t){return aS[t]}function ES(t){return cS[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return We.fromServerFormat(t.fieldPath)}function lm(t){return t instanceof De?function(e){if(e.op==="=="){if(Jh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NAN"}};if(Xh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NAN"}};if(Xh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(e.field),op:_S(e.op),value:e.value}}}(t):t instanceof Rt?function(e){const n=e.getFilters().map(s=>lm(s));return n.length===1?n[0]:{compositeFilter:{op:ES(e.op),filters:n}}}(t):H()}function IS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Yb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=nm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Xg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,s)=>of(n,s))&&ks(this.baseMutations,e.baseMutations,(n,s)=>of(n,s))}}class Ku{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=nS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ku(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.oe=e}}function CS(t){const e=yS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.Ze=new kS}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(In.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class kS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Os(0)}static Sn(){return new Os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fr(s.mutation,r,lt.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$n();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=en();const o=dr(),a=dr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof An)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),fr(l.mutation,u,l.mutation.getFieldMask(),Oe.now())):o.set(u.key,lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new NS(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=dr();let r=new Me((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||lt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=nm();l.forEach(f=>{if(!i.has(f)){const g=Xg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve($n());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:tm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new Hs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ke.newInvalidDocument(u)))});let o=nr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&fr(u.mutation,c,lt.empty(),Oe.now()),Go(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:CS(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.overlays=new Me($.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$n();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=$n(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=$n(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=$n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bS(n,s));let i=this.ss.get(n);i===void 0&&(i=ne(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.rs=new Pe(Le.os),this.us=new Pe(Le.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Le(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Le(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new $(new we([])),s=new Le(n,e),r=new Le(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new $(new we([])),s=new Le(n,e),r=new Le(n,e+1);let i=ne();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return $.comparator(e.key,n.key)||ue(e.gs,n.gs)}static cs(e,n){return ue(e.gs,n.gs)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Pe(Le.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ue);return n.forEach(r=>{const i=new Le(r,0),o=new Le(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Le(new $(i),0);let a=new Pe(ue);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,r=>{const i=new Le(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Le(n,0),r=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.Rs=e,this.docs=new Me($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=en();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=en();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bb(Tb(l),s)<=0||(r.has(l.key)||Go(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){H()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LS(this)}getSize(e){return b.resolve(this.size)}}class LS extends RS{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.persistence=e,this.vs=new Ks(n=>Vu(n),$u),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new zu,this.targetCount=0,this.Ss=Os.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Uu(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new US(this),this.indexManager=new AS,this.remoteDocumentCache=function(s){return new MS(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new SS(n),this.Os=new OS(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new xS(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new VS(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class VS extends Cb{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Bs=new zu,this.Ls=null}static qs(e){return new Wu(e)}get Us(){if(this.Ls)return this.Ls;throw H()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const r=$.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Gu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(sf(n))return b.resolve(null);let s=Zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Cc(n,null,"F"),s=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(e,Cc(n,null,"F")):this.qi(e,u,n,c)}))})))}Fi(e,n,s,r){return sf(n)||r.isEqual(Q.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Wh()<=ce.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ac(n)),this.qi(e,o,n,Ib(r,-1)))})}Bi(e,n){let s=new Pe(Hg(e));return n.forEach((r,i)=>{Go(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Wh()<=ce.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ac(n)),this.Oi.getDocumentsMatchingQuery(e,n,In.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Me(ue),this.Gi=new Ks(i=>Vu(i),$u),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DS(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function jS(t,e,n,s){return new BS(t,e,n,s)}async function fm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function qS(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const w=c.docVersions.get(g);me(w!==null),y.version.compareTo(w)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function HS(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(et.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,w,A){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=en(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(KS(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(Q.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function KS(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=en();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function zS(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function WS(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new zn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Dc(t,e,n){const s=Y(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ni(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function df(t,e,n){const s=Y(t);let r=Q.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Gi.get(u);return h!==void 0?b.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,Zt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:ne())).next(a=>(GS(s,qb(e),a),{documents:a,Yi:i})))}function GS(t,e,n){let s=t.Qi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class pf{constructor(){this.activeTargetIds=sm()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QS{constructor(){this.Ur=new pf,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new pf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);F("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw _c("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=XS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new fb;a.setWithCredentials(!0),a.listenOnce(ub.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Da.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Da.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(f.status);o(new M(g,f.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ab(),o=cb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new hb({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new JS({Yr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,w,A)=>{y.listen(w,k=>{try{A(k)}catch(P){setTimeout(()=>{throw P},0)}})};return g(u,wi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(u,wi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.oo())}),g(u,wi.EventType.ERROR,y=>{h||(h=!0,_c("Connection","WebChannel transport errored:",y),f.oo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,wi.EventType.MESSAGE,y=>{var w;if(!h){const A=y.data[0];me(!!A);const k=A,P=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(P){F("Connection","WebChannel received error:",P);const x=P.status;let z=function(Te){const Ce=Re[Te];if(Ce!==void 0)return Zg(Ce)}(x),oe=P.message;z===void 0&&(z=E.INTERNAL,oe="Unknown error status: "+x+" with message "+P.message),h=!0,f.oo(new M(z,oe)),u.close()}else F("Connection","WebChannel received:",A),f.uo(A)}}),g(o,lb.STAT_EVENT,y=>{y.stat===Kh.PROXY?F("Connection","Detected buffering proxy"):y.stat===Kh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function Pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){return new uS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new pm(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eC extends gm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=fS(this.Tt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Ft(i.readTime):Q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Nc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=bc(a)?{documents:gS(r,a)}:{query:mS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=om(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=co(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=vS(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Nc(this.Tt),n.removeTarget=e,this.qo(n)}}class tC extends gm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=pS(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.eu(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Nc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>dS(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class sC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Jt(n),this.cu=!1):F("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{ts(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.mu.add(4),await ii(c),c.pu.set("Unknown"),c.mu.delete(4),await Zo(c)}(this))})}),this.pu=new sC(s,r)}}async function Zo(t){if(ts(t))for(const e of t.gu)await e(!0)}async function ii(t){for(const e of t.gu)await e(!1)}function mm(t,e){const n=Y(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Xu(n)?Yu(n):zs(n).Mo()&&Qu(n,e))}function ym(t,e){const n=Y(t),s=zs(n);n.wu.delete(e),s.Mo()&&vm(n,e),n.wu.size===0&&(s.Mo()?s.Bo():ts(n)&&n.pu.set("Unknown"))}function Qu(t,e){t.Iu.Ft(e.targetId),zs(t).Jo(e)}function vm(t,e){t.Iu.Ft(e),zs(t).Yo(e)}function Yu(t){t.Iu=new iS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),zs(t).start(),t.pu.au()}function Xu(t){return ts(t)&&!zs(t).Oo()&&t.wu.size>0}function ts(t){return Y(t).mu.size===0}function wm(t){t.Iu=void 0}async function iC(t){t.wu.forEach((e,n)=>{Qu(t,e)})}async function oC(t,e){wm(t),Xu(t)?(t.pu.fu(e),Yu(t)):t.pu.set("Unknown")}async function aC(t,e,n){if(t.pu.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uo(t,s)}else if(e instanceof Li?t.Iu.Qt(e):e instanceof rm?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Q.min()))try{const s=await dm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),vm(r,a);const u=new zn(c.target,a,1,c.sequenceNumber);Qu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await uo(t,s)}}async function uo(t,e,n){if(!ni(e))throw e;t.mu.add(1),await ii(t),t.pu.set("Offline"),n||(n=()=>dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Zo(t)})}function _m(t,e){return e().catch(n=>uo(t,n,e))}async function ea(t){const e=Y(t),n=bn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;cC(e);)try{const r=await zS(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,uC(e,r)}catch(r){await uo(e,r)}Em(e)&&Im(e)}function cC(t){return ts(t)&&t._u.length<10}function uC(t,e){t._u.push(e);const n=bn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Em(t){return ts(t)&&!bn(t).Oo()&&t._u.length>0}function Im(t){bn(t).start()}async function lC(t){bn(t).su()}async function hC(t){const e=bn(t);for(const n of t._u)e.tu(n.mutations)}async function fC(t,e,n){const s=t._u.shift(),r=Ku.from(s,e,n);await _m(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ea(t)}async function dC(t,e){e&&bn(t).Xo&&await async function(n,s){if(r=s.code,eS(r)&&r!==E.ABORTED){const i=n._u.shift();bn(n).$o(),await _m(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ea(n)}var r}(t,e),Em(t)&&Im(t)}async function mf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=ts(n);n.mu.add(3),await ii(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Zo(n)}async function pC(t,e){const n=Y(t);e?(n.mu.delete(2),await Zo(n)):e||(n.mu.add(2),await ii(n),n.pu.set("Unknown"))}function zs(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.ru(),new eC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:iC.bind(null,t),no:oC.bind(null,t),Ho:aC.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Xu(t)?Yu(t):t.pu.set("Unknown")):(await t.Tu.stop(),wm(t))})),t.Tu}function bn(t){return t.Eu||(t.Eu=function(e,n,s){const r=Y(e);return r.ru(),new tC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:lC.bind(null,t),no:dC.bind(null,t),nu:hC.bind(null,t),eu:fC.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await ea(t)):(await t.Eu.stop(),t._u.length>0&&(F("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ju(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),ni(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=nr(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Es;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Au=new Me($.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):H():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ps{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,Es.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.bu=void 0,this.listeners=[]}}class mC{constructor(){this.queries=new Ks(e=>qg(e),Wo),this.onlineState="Unknown",this.vu=new Set}}async function yC(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new gC),r)try{i.bu=await n.onListen(s)}catch(o){const a=Zu(o,`Initialization of query '${Ac(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&el(n)}async function vC(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function wC(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&el(n)}function _C(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function el(t){t.vu.forEach(e=>{e.next()})}class EC{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ps(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class IC{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ne(),this.mutatedKeys=ne(),this.ju=Hg(e),this.zu=new Es(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new yf,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Go(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;f&&g?f.data.isEqual(g.data)?y!==w&&(s.track({type:3,doc:g}),A=!0):this.Yu(f,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),A=!0):f&&!g&&(s.track({type:1,doc:f}),A=!0,(c||u)&&(a=!0)),A&&(g?(o=o.add(g),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(h)-g(f)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Ps(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new yf,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ne(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new bm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Tm(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ne();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Ps.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class TC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bC{constructor(e){this.key=e,this.ic=!1}}class SC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ks(a=>qg(a),Wo),this.uc=new Map,this.cc=new Set,this.ac=new Me($.comparator),this.hc=new Map,this.lc=new zu,this.fc={},this.dc=new Map,this._c=Os.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function CC(t,e){const n=LC(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await WS(n.localStore,Zt(e));n.isPrimaryClient&&mm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await AC(n,e,s,a==="current",o.resumeToken)}return r}async function AC(t,e,n,s,r){t.mc=(h,f,g)=>async function(y,w,A,k){let P=w.view.Hu(A);P.Li&&(P=await df(y.localStore,w.query,!1).then(({documents:oe})=>w.view.Hu(oe,P)));const x=k&&k.targetChanges.get(w.targetId),z=w.view.applyChanges(P,y.isPrimaryClient,x);return wf(y,w.targetId,z.tc),z.snapshot}(t,h,f,g);const i=await df(t.localStore,e,!0),o=new IC(e,i.Yi),a=o.Hu(i.documents),c=ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);wf(t,n,u.tc);const l=new TC(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function kC(t,e){const n=Y(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Wo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ym(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(ti)):(Oc(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function RC(t,e,n){const s=UC(t);try{const r=await function(i,o){const a=Y(i),c=Oe.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=en(),y=ne();return a.ji.getEntries(f,u).next(w=>{g=w,g.forEach((A,k)=>{k.isValidDocument()||(y=y.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{l=w;const A=[];for(const k of o){const P=Xb(k,l.get(k.key).overlayedDocument);P!=null&&A.push(new An(k.key,P,Bg(P.value.mapValue),At.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,A,o)}).next(w=>{h=w;const A=w.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,w.batchId,A)})}).then(()=>({batchId:h.batchId,changes:tm(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await oi(s,r.changes),await ea(s.remoteStore)}catch(r){const i=Zu(r,"Failed to persist write");n.reject(i)}}async function Sm(t,e){const n=Y(t);try{const s=await HS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?me(o.ic):r.removedDocuments.size>0&&(me(o.ic),o.ic=!1))}),await oi(n,s,e)}catch(s){await ti(s)}}function vf(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&el(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NC(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Me($.comparator);o=o.insert(i,Ke.newNoDocument(i,Q.min()));const a=ne().add(i),c=new Xo(Q.min(),new Map,new Pe(ue),o,a);await Sm(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),tl(s)}else await Dc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(ti)}async function DC(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await qS(n.localStore,e);Am(n,s,null),Cm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oi(n,r)}catch(r){await ti(r)}}async function OC(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(me(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Am(s,e,n),Cm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oi(s,r)}catch(r){await ti(r)}}function Cm(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Am(t,e,n){const s=Y(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||km(t,s)})}function km(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(ym(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),tl(t))}function wf(t,e,n){for(const s of n)s instanceof Tm?(t.lc.addReference(s.key,e),PC(t,s)):s instanceof bm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||km(t,s.key)):H()}function PC(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.cc.add(s),tl(t))}function tl(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new $(we.fromString(e)),s=t._c.next();t.hc.set(s,new bC(n)),t.ac=t.ac.insert(n,s),mm(t.remoteStore,new zn(Zt(Bu(n.path)),s,2,Uu.at))}}async function oi(t,e,n){const s=Y(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Gu.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!ni(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(s.localStore,i))}async function xC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await fm(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oi(n,s.Wi)}}function MC(t,e){const n=Y(t),s=n.hc.get(e);if(s&&s.ic)return ne().add(s.key);{let r=ne();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function LC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NC.bind(null,e),e.rc.Ho=wC.bind(null,e.eventManager),e.rc.gc=_C.bind(null,e.eventManager),e}function UC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OC.bind(null,e),e}class FC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return jS(this.persistence,new $S,e.initialUser,this.Tt)}Tc(e){return new FS(Wu.qs,this.Tt)}Ic(e){return new QS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xC.bind(null,this.syncEngine),await pC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mC}createDatastore(e){const n=Jo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ZS(r));var r;return function(i,o,a,c){return new nC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>vf(this.syncEngine,a,0),o=gf.C()?new gf:new YS,new rC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new SC(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ii(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=He.UNAUTHENTICATED,this.clientId=Dg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Zu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function jC(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await fm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HC(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>mf(e.remoteStore,i)),t.onlineComponents=e}async function HC(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await jC(t,new FC)),t.offlineComponents}async function Rm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await qC(t,new VC)),t.onlineComponents}function KC(t){return Rm(t).then(e=>e.syncEngine)}async function _f(t){const e=await Rm(t),n=e.eventManager;return n.onListen=CC.bind(null,e.syncEngine),n.onUnlisten=kC.bind(null,e.syncEngine),n}const Ef=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zC(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!$.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tf(t){if($.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ta(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new db;switch(n.type){case"gapi":const s=n.client;return new yb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ef.get(e);n&&(F("ComponentProvider","Removing Datastore"),Ef.delete(e),n.terminate())}(this),Promise.resolve()}}function WC(t,e,n,s={}){var r;const i=(t=vn(t,na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&_c("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=He.MOCK_USER;else{o=kw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new He(c)}t._authCredentials=new pb(new Ng(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class ns{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class wn extends ns{constructor(e,n,s){super(e,n,Bu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new $(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function GC(t,e,...n){if(t=Ue(t),Nm("collection","path",e),t instanceof na){const s=we.fromString(e,...n);return Tf(s),new wn(t,null,s)}{if(!(t instanceof ot||t instanceof wn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Tf(s),new wn(t.firestore,null,s)}}function Pc(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Dg.R()),Nm("doc","path",e),t instanceof na){const s=we.fromString(e,...n);return If(s),new ot(t,null,new $(s))}{if(!(t instanceof ot||t instanceof wn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return If(s),new ot(t.firestore,t instanceof wn?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new pm(this,"async_queue_retry"),this.Hc=()=>{const n=Pa();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Pa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Pa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Kn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ni(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ju.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&H()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Sf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class xs extends na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new QC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Om(this),this._firestoreClient.terminate()}}function YC(t,e){const n=typeof t=="object"?t:Fd(),s=typeof t=="string"?t:e||"(default)",r=nu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Sw("firestore");i&&WC(r,...i)}return r}function Dm(t){return t._firestoreClient||Om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Om(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Ab(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(et.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^__.*__$/;class JC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,n,this.fieldTransforms):new si(e,this.data,n,this.fieldTransforms)}}class Pm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new An(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class rl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new rl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return lo(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(xm(this.ra)&&XC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class ZC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Jo(e)}wa(e,n,s,r=!1){return new rl({ra:e,methodName:n,_a:s,path:We.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function il(t){const e=t._freezeSettings(),n=Jo(t._databaseId);return new ZC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eA(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);ol("Data must be an object, but it was:",o,s);const a=Mm(s,o);let c,u;if(i.merge)c=new lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=xc(e,h,n);if(!o.contains(f))throw new M(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Um(l,f)||l.push(f)}c=new lt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new JC(new it(a),c,u)}class ra extends nl{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}function tA(t,e,n,s){const r=t.wa(1,e,n);ol("Data must be an object, but it was:",r,s);const i=[],o=it.empty();es(s,(c,u)=>{const l=al(e,c,n);u=Ue(u);const h=r.ha(l);if(u instanceof ra)i.push(l);else{const f=ai(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new lt(i);return new Pm(o,a,r.fieldTransforms)}function nA(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[xc(e,s,n)],c=[r];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(xc(e,i[f])),c.push(i[f+1]);const u=[],l=it.empty();for(let f=a.length-1;f>=0;--f)if(!Um(u,a[f])){const g=a[f];let y=c[f];y=Ue(y);const w=o.ha(g);if(y instanceof ra)u.push(g);else{const A=ai(y,w);A!=null&&(u.push(g),l.set(g,A))}}const h=new lt(u);return new Pm(l,h,o.fieldTransforms)}function sA(t,e,n,s=!1){return ai(n,t.wa(s?4:3,e))}function ai(t,e){if(Lm(t=Ue(t)))return ol("Unsupported field value:",e,t),Mm(t,e);if(t instanceof nl)return function(n,s){if(!xm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ai(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kb(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Oe.fromDate(n);return{timestampValue:co(s.Tt,r)}}if(n instanceof Oe){const r=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:co(s.Tt,r)}}if(n instanceof sl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ms)return{bytesValue:om(s.Tt,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ta(n)}`)}(t,e)}function Mm(t,e){const n={};return Og(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(s,r)=>{const i=ai(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Lm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof sl||t instanceof Ms||t instanceof ot||t instanceof nl)}function ol(t,e,n){if(!Lm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ta(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function xc(t,e,n){if((e=Ue(e))instanceof sa)return e._internalPath;if(typeof e=="string")return al(t,e);throw lo("Field path arguments must be of type string or ",t,!1,void 0,n)}const rA=new RegExp("[~\\*/\\[\\]]");function al(t,e,n){if(e.search(rA)>=0)throw lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function Um(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ia("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iA extends Fm{data(){return super.data()}}function ia(t,e){return typeof e=="string"?al(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cl{}class Vm extends cl{}function aA(t,e,...n){let s=[];e instanceof cl&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ul).length,o=r.filter(a=>a instanceof oa).length;if(i>1||i>0&&o>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class oa extends Vm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new oa(e,n,s)}_apply(e){const n=this._parse(e);return $m(e._query,n),new ns(e.firestore,e.converter,Sc(e._query,n))}_parse(e){const n=il(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Af(l,u);const f=[];for(const g of l)f.push(Cf(a,r,g));h={arrayValue:{values:f}}}else h=Cf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Af(l,u),h=sA(o,i,l,u==="in"||u==="not-in");return De.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cA(t,e,n){const s=e,r=ia("where",t);return oa._create(r,s,n)}class ul extends cl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ul(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Rt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)$m(i,a),i=Sc(i,a)}(e._query,n),new ns(e.firestore,e.converter,Sc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ll extends Vm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ll(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ws(r,i);return function(a,c){if(ju(a)===null){const u=zo(a);u!==null&&Bm(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ns(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Hs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function uA(t,e="asc"){const n=e,s=ia("orderBy",t);return ll._create(s,n)}function Cf(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jg(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!$.isDocumentKey(s))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Yh(t,new $(s))}if(n instanceof ot)return Yh(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ta(n)}.`)}function Af(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $m(t,e){if(e.isInequality()){const s=zo(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=ju(t);i!==null&&Bm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Bm(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lA{convertValue(e,n="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return es(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new sl(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);me(hm(s));const r=new Dr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Jt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jm extends Fm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ia("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ui extends jm{data(e={}){return super.data(e)}}class fA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new sr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ui(this._firestore,this._userDataWriter,s.key,s,new sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:dA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class qm extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function pA(t,e,n,...s){t=vn(t,ot);const r=vn(t.firestore,xs),i=il(r);let o;return o=typeof(e=Ue(e))=="string"||e instanceof sa?nA(i,"updateDoc",t._key,e,n,s):tA(i,"updateDoc",t._key,e),hl(r,[o.toMutation(t._key,At.exists(!0))])}function gA(t){return hl(vn(t.firestore,xs),[new qu(t._key,At.none())])}function mA(t,e){const n=vn(t.firestore,xs),s=Pc(t),r=hA(t.converter,e);return hl(n,[eA(il(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,At.exists(!1))]).then(()=>s)}function yA(t,...e){var n,s,r;t=Ue(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Sf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof ot)u=vn(t.firestore,xs),l=Bu(t._key.path),c={next:h=>{e[o]&&e[o](vA(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,ns);u=vn(h.firestore,xs),l=h._query;const f=new qm(u);c={next:g=>{e[o]&&e[o](new fA(u,f,h,g))},error:e[o+1],complete:e[o+2]},oA(t._query)}return function(h,f,g,y){const w=new $C(y),A=new EC(f,w,g);return h.asyncQueue.enqueueAndForget(async()=>yC(await _f(h),A)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>vC(await _f(h),A))}}(Dm(u),l,a,c)}function hl(t,e){return function(n,s){const r=new Kn;return n.asyncQueue.enqueueAndForget(async()=>RC(await KC(n),s,r)),r.promise}(Dm(t),e)}function vA(t,e,n){const s=n.docs.get(e._key),r=new qm(t);return new jm(t,r,e._key,s,new sr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qs=n})(Vr),bs(new Wn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new xs(new gb(n.getProvider("auth-internal")),new wb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),yn(zh,"3.8.4",t),yn(zh,"3.8.4","esm2017")})();const wA={apiKey:"AIzaSyApOFzvRwF-MECTuQTozti56vmniAIzgxw",authDomain:"todo-vue-a564f.firebaseapp.com",projectId:"todo-vue-a564f",storageBucket:"todo-vue-a564f.appspot.com",messagingSenderId:"165061987031",appId:"1:165061987031:web:190d3f90c296e1e86cbe92"},_A=Ud(wA),EA=YC(_A);const IA={setup(){const t=gt("auth"),e=Kt([]),n=Kt(""),s=GC(EA,"todos"),r=Kt(""),i=pu();t.onAuthStateChanged(u=>{r.value=u?u.uid:"No user"});const o=async()=>{r.value==="No user"?i.push("auth"):(await mA(s,{task:n.value,done:!1,date:Date.now(),authorId:r.value}),n.value="")},a=u=>{gA(Pc(s,u))},c=u=>{const l=e.value.findIndex(h=>h.id===u);pA(Pc(s,u),{done:!e.value[l].done})};return rr(r,u=>{if(u!==""){const l=aA(s,cA("authorId","==",u),uA("date","desc"));yA(l,h=>{const f=[];h.forEach(g=>{const y={id:g.id,task:g.data().task,done:g.data().done,date:g.data().date,authorId:g.data().authorId};f.push(y)}),e.value=f})}}),{todoList:e,newTodo:n,addTodo:o,deleteTodo:a,toggleTodo:c}},name:"HomePage"},TA={class:"main-container"},bA={class:"field has-addons"},SA={class:"control"},CA={class:"control"},AA=["disabled"],kA={class:"card-content"},RA={class:"content"},NA={class:"columns is-mobile is-vcentered"},DA={class:"column is-5 has-text-right"},OA=["onClick"],PA=["onClick"];function xA(t,e,n,s,r,i){return Mt(),pn("div",TA,[Z("form",{onSubmit:e[1]||(e[1]=Rd((...o)=>s.addTodo&&s.addTodo(...o),["prevent"]))},[Z("div",bA,[Z("div",SA,[Ai(Z("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newTodo=o),class:"input",type:"text",placeholder:"Add a todo"},null,512),[[Ri,s.newTodo]])]),Z("div",CA,[Z("button",{disabled:!s.newTodo,class:"button is-info"}," Add ",8,AA)])])],32),(Mt(!0),pn(It,null,fv(s.todoList,o=>(Mt(),pn("div",{class:hs(["card mb-5",{"has-background-success-light":o.done}]),key:o.id},[Z("div",kA,[Z("div",RA,[Z("div",NA,[Z("div",{class:hs(["column",{"has-text-success line-through":o.done}])},Ii(o.task),3),Z("div",DA,[Z("button",{onClick:a=>s.toggleTodo(o.id),class:hs(["button",{"is-light":!o.done,"is-success":o.done}])}," ✓ ",10,OA),Z("button",{onClick:a=>s.deleteTodo(o.id),class:"button is-danger ml-2"}," ✗ ",8,PA)])])])])],2))),128))])}const MA=Ro(IA,[["render",xA],["__scopeId","data-v-18a7765e"]]);const LA={name:"AuthPage",setup(){const t=Kt(""),e=Kt(""),n=Kt(""),s=Kt("Login"),r=pu();return{email:t,password:e,confirmPassword:n,authMode:s,toggleAuthMode:()=>{s.value=s.value==="Login"?"Register":"Login"},submitForm:async()=>{try{const c=ic();s.value==="Login"?await PE(c,t.value,e.value):(e.value,n.value,await OE(c,t.value,e.value)),r.push("/")}catch{}},signInWithGoogle:async()=>{try{const c=ic(),u=new Ht;await oI(c,u),window.location.href=""}catch{}}}}},UA={class:"auth-page"},FA={class:"title"},VA={class:"field"},$A=Z("label",{class:"label"},"Email",-1),BA={class:"control"},jA={class:"field"},qA=Z("label",{class:"label"},"Password",-1),HA={class:"control"},KA={key:0,class:"field"},zA=Z("label",{class:"label"},"Confirm Password",-1),WA={class:"control"},GA={class:"field is-grouped"},QA={class:"control"},YA={type:"submit",class:"button is-primary"},XA={class:"control"},JA=Z("div",{class:"divider"},"Or",-1),ZA={class:"google-auth"};function ek(t,e,n,s,r,i){return Mt(),pn("div",UA,[Z("h1",FA,Ii(s.authMode),1),Z("form",{onSubmit:e[4]||(e[4]=Rd((...o)=>s.submitForm&&s.submitForm(...o),["prevent"]))},[Z("div",VA,[$A,Z("div",BA,[Ai(Z("input",{class:"input",type:"email",placeholder:"Enter your email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),required:""},null,512),[[Ri,s.email,void 0,{trim:!0}]])])]),Z("div",jA,[qA,Z("div",HA,[Ai(Z("input",{class:"input",type:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),required:""},null,512),[[Ri,s.password,void 0,{trim:!0}]])])]),s.authMode==="Register"?(Mt(),pn("div",KA,[zA,Z("div",WA,[Ai(Z("input",{class:"input",type:"password",placeholder:"Confirm your password","onUpdate:modelValue":e[2]||(e[2]=o=>s.confirmPassword=o),required:""},null,512),[[Ri,s.confirmPassword,void 0,{trim:!0}]])])])):Pv("",!0),Z("div",GA,[Z("div",QA,[Z("button",YA,Ii(s.authMode),1)]),Z("div",XA,[Z("button",{type:"button",class:"button is-text",onClick:e[3]||(e[3]=(...o)=>s.toggleAuthMode&&s.toggleAuthMode(...o))},Ii(s.authMode==="Login"?"Create an account":"Sign in to your account"),1)])])],32),JA,Z("div",ZA,[Z("button",{class:"button is-link",onClick:e[5]||(e[5]=(...o)=>s.signInWithGoogle&&s.signInWithGoogle(...o))},"Sign in with Google")])])}const tk=Ro(LA,[["render",ek]]),nk=[{path:"/",name:"home",component:MA},{path:"/auth",name:"auth",component:tk}],sk=J0({base:"/vue-firebase-note/",history:p0("/vue-firebase-note/"),routes:nk});const rk=ic(),fl=mw(cT);fl.use(sk);fl.provide("auth",rk);fl.mount("#app");
