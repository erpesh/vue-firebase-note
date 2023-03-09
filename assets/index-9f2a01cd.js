(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function xc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Mc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?zm(s):Mc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(Ee(t))return t}}const qm=/;(?![^(]*\))/g,Hm=/:([^]+)/,Km=/\/\*.*?\*\//gs;function zm(t){const e={};return t.replace(Km,"").split(qm).forEach(n=>{if(n){const s=n.split(Hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hs(t){let e="";if(xe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=hs(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=xc(Wm);function Af(t){return!!t||t===""}const Ii=t=>xe(t)?t:t==null?"":G(t)||Ee(t)&&(t.toString===Df||!X(t.toString))?JSON.stringify(t,kf,2):String(t),kf=(t,e)=>e&&e.__v_isRef?kf(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Rf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!G(e)&&!Of(e)?String(e):e,ve={},fs=[],bt=()=>{},Qm=()=>!1,Ym=/^on[^a-z]/,ho=t=>Ym.test(t),Lc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xm=Object.prototype.hasOwnProperty,ie=(t,e)=>Xm.call(t,e),G=Array.isArray,ds=t=>fo(t)==="[object Map]",Rf=t=>fo(t)==="[object Set]",X=t=>typeof t=="function",xe=t=>typeof t=="string",Fc=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Nf=t=>Ee(t)&&X(t.then)&&X(t.catch),Df=Object.prototype.toString,fo=t=>Df.call(t),Jm=t=>fo(t).slice(8,-1),Of=t=>fo(t)==="[object Object]",Vc=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,Vt=po(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,Ls=po(t=>t.replace(ey,"-$1").toLowerCase()),go=po(t=>t.charAt(0).toUpperCase()+t.slice(1)),oa=po(t=>t?`on${go(t)}`:""),pr=(t,e)=>!Object.is(t,e),bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gl;const ty=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sy(t,e=_t){e&&e.active&&e.effects.push(t)}function ry(){return _t}const $c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pf=t=>(t.w&_n)>0,xf=t=>(t.n&_n)>0,iy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_n},oy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Pf(r)&&!xf(r)?r.delete(t):e[n++]=r,r.w&=~_n,r.n&=~_n}e.length=n}},xa=new WeakMap;let Xs=0,_n=1;const Ma=30;let It;const Bn=Symbol(""),La=Symbol("");class Bc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sy(this,s)}run(){if(!this.active)return this.fn();let e=It,n=fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,fn=!0,_n=1<<++Xs,Xs<=Ma?iy(this):ml(this),this.fn()}finally{Xs<=Ma&&oy(this),_n=1<<--Xs,It=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(ml(this),this.onStop&&this.onStop(),this.active=!1)}}function ml(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fn=!0;const Mf=[];function Us(){Mf.push(fn),fn=!1}function Fs(){const t=Mf.pop();fn=t===void 0?!0:t}function at(t,e,n){if(fn&&It){let s=xa.get(t);s||xa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$c()),Lf(r)}}function Lf(t,e){let n=!1;Xs<=Ma?xf(t)||(t.n|=_n,n=!Pf(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function Qt(t,e,n,s,r,i){const o=xa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Vc(n)&&a.push(o.get("length")):(a.push(o.get(Bn)),ds(t)&&a.push(o.get(La)));break;case"delete":G(t)||(a.push(o.get(Bn)),ds(t)&&a.push(o.get(La)));break;case"set":ds(t)&&a.push(o.get(Bn));break}if(a.length===1)a[0]&&Ua(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ua($c(c))}}function Ua(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&yl(s);for(const s of n)s.computed||yl(s)}function yl(t,e){(t!==It||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ay=xc("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fc)),cy=jc(),uy=jc(!1,!0),ly=jc(!0),vl=hy();function hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=ae(this)[e].apply(this,n);return Fs(),s}}),t}function fy(t){const e=ae(this);return at(e,"has",t),e.hasOwnProperty(t)}function jc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ky:jf:e?Bf:$f).get(s))return s;const o=G(s);if(!t){if(o&&ie(vl,r))return Reflect.get(vl,r,i);if(r==="hasOwnProperty")return fy}const a=Reflect.get(s,r,i);return(Fc(r)?Uf.has(r):ay(r))||(t||at(s,"get",r),e)?a:Ge(a)?o&&Vc(r)?a:a.value:Ee(a)?t?qf(a):Lr(a):a}}const dy=Ff(),py=Ff(!0);function Ff(t=!1){return function(n,s,r,i){let o=n[s];if(Is(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&(!Vi(r)&&!Is(r)&&(o=ae(o),r=ae(r)),!G(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=G(n)&&Vc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?pr(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function gy(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function my(t,e){const n=Reflect.has(t,e);return(!Fc(e)||!Uf.has(e))&&at(t,"has",e),n}function yy(t){return at(t,"iterate",G(t)?"length":Bn),Reflect.ownKeys(t)}const Vf={get:cy,set:dy,deleteProperty:gy,has:my,ownKeys:yy},vy={get:ly,set(t,e){return!0},deleteProperty(t,e){return!0}},wy=Je({},Vf,{get:uy,set:py}),qc=t=>t,mo=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=mo(r),a=s?qc:n?zc:gr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function li(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function hi(t,e=!1){return t=t.__v_raw,!e&&at(ae(t),"iterate",Bn),Reflect.get(t,"size",t)}function wl(t){t=ae(t);const e=ae(this);return mo(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function _l(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=mo(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pr(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function El(t){const e=ae(this),{has:n,get:s}=mo(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function Il(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function fi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?qc:t?zc:gr;return!t&&at(a,"iterate",Bn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function di(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?qc:e?zc:gr;return!e&&at(i,"iterate",c?La:Bn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function sn(t){return function(...e){return t==="delete"?!1:this}}function _y(){const t={get(i){return ui(this,i)},get size(){return hi(this)},has:li,add:wl,set:_l,delete:El,clear:Il,forEach:fi(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return hi(this)},has:li,add:wl,set:_l,delete:El,clear:Il,forEach:fi(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return hi(this,!0)},has(i){return li.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fi(!0,!1)},s={get(i){return ui(this,i,!0,!0)},get size(){return hi(this,!0)},has(i){return li.call(this,i,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=di(i,!1,!1),n[i]=di(i,!0,!1),e[i]=di(i,!1,!0),s[i]=di(i,!0,!0)}),[t,n,e,s]}const[Ey,Iy,Ty,by]=_y();function Hc(t,e){const n=e?t?by:Ty:t?Iy:Ey;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Sy={get:Hc(!1,!1)},Cy={get:Hc(!1,!0)},Ay={get:Hc(!0,!1)},$f=new WeakMap,Bf=new WeakMap,jf=new WeakMap,ky=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(Jm(t))}function Lr(t){return Is(t)?t:Kc(t,!1,Vf,Sy,$f)}function Dy(t){return Kc(t,!1,wy,Cy,Bf)}function qf(t){return Kc(t,!0,vy,Ay,jf)}function Kc(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ny(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ps(t){return Is(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Vi(t){return!!(t&&t.__v_isShallow)}function Hf(t){return ps(t)||Is(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Kf(t){return Fi(t,"__v_skip",!0),t}const gr=t=>Ee(t)?Lr(t):t,zc=t=>Ee(t)?qf(t):t;function zf(t){fn&&It&&(t=ae(t),Lf(t.dep||(t.dep=$c())))}function Wf(t,e){t=ae(t);const n=t.dep;n&&Ua(n)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Kt(t){return Gf(t,!1)}function Oy(t){return Gf(t,!0)}function Gf(t,e){return Ge(t)?t:new Py(t,e)}class Py{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:gr(e)}get value(){return zf(this),this._value}set value(e){const n=this.__v_isShallow||Vi(e)||Is(e);e=n?e:ae(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gr(e),Wf(this))}}function gs(t){return Ge(t)?t.value:t}const xy={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Qf(t){return ps(t)?t:new Proxy(t,xy)}var Yf;class My{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yf]=!1,this._dirty=!0,this.effect=new Bc(e,()=>{this._dirty||(this._dirty=!0,Wf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return zf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Yf="__v_isReadonly";function Ly(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=bt):(s=t.get,r=t.set),new My(s,r,i||!r,n)}function dn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){yo(i,e,n)}return r}function pt(t,e,n,s){if(X(t)){const i=dn(t,e,n,s);return i&&Nf(i)&&i.catch(o=>{yo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(pt(t[i],e,n,s));return r}function yo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dn(c,null,10,[t,o,a]);return}}Uy(t,n,r,s)}function Uy(t,e,n,s=!0){console.error(t)}let mr=!1,Fa=!1;const ze=[];let Pt=0;const ms=[];let qt=null,Pn=0;const Xf=Promise.resolve();let Wc=null;function Jf(t){const e=Wc||Xf;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=Pt+1,n=ze.length;for(;e<n;){const s=e+n>>>1;yr(ze[s])<t?e=s+1:n=s}return e}function Gc(t){(!ze.length||!ze.includes(t,mr&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?ze.push(t):ze.splice(Fy(t.id),0,t),Zf())}function Zf(){!mr&&!Fa&&(Fa=!0,Wc=Xf.then(td))}function Vy(t){const e=ze.indexOf(t);e>Pt&&ze.splice(e,1)}function $y(t){G(t)?ms.push(...t):(!qt||!qt.includes(t,t.allowRecurse?Pn+1:Pn))&&ms.push(t),Zf()}function Tl(t,e=mr?Pt+1:0){for(;e<ze.length;e++){const n=ze[e];n&&n.pre&&(ze.splice(e,1),e--,n())}}function ed(t){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,s)=>yr(n)-yr(s)),Pn=0;Pn<qt.length;Pn++)qt[Pn]();qt=null,Pn=0}}const yr=t=>t.id==null?1/0:t.id,By=(t,e)=>{const n=yr(t)-yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function td(t){Fa=!1,mr=!0,ze.sort(By);const e=bt;try{for(Pt=0;Pt<ze.length;Pt++){const n=ze[Pt];n&&n.active!==!1&&dn(n,null,14)}}finally{Pt=0,ze.length=0,ed(),mr=!1,Wc=null,(ze.length||ms.length)&&td()}}function jy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ve;f&&(r=n.map(g=>xe(g)?g.trim():g)),h&&(r=n.map(Pa))}let a,c=s[a=oa(e)]||s[a=oa(Vt(e))];!c&&i&&(c=s[a=oa(Ls(e))]),c&&pt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(u,t,6,r)}}function nd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=u=>{const l=nd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Je(o,i),Ee(t)&&s.set(t,o),o)}function vo(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Ls(e))||ie(t,e))}let ut=null,sd=null;function $i(t){const e=ut;return ut=t,sd=t&&t.type.__scopeId||null,e}function Va(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Pl(-1);const i=$i(e);let o;try{o=t(...r)}finally{$i(i),s._d&&Pl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function aa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:w}=t;let A,k;const P=$i(t);try{if(n.shapeFlag&4){const z=r||s;A=Ot(l.call(z,z,h,i,g,f,y)),k=c}else{const z=e;A=Ot(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),k=e.props?c:qy(c)}}catch(z){or.length=0,yo(z,t,1),A=Qe(Ct)}let x=A;if(k&&w!==!1){const z=Object.keys(k),{shapeFlag:oe}=x;z.length&&oe&7&&(o&&z.some(Lc)&&(k=Hy(k,o)),x=En(x,k))}return n.dirs&&(x=En(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),A=x,$i(P),A}const qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},Hy=(t,e)=>{const n={};for(const s in t)(!Lc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ky(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!vo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bl(s,o,u):!0:!!o;return!1}function bl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!vo(n,i))return!0}return!1}function zy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wy=t=>t.__isSuspense;function Gy(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):$y(t)}function Si(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Se||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const pi={};function rr(t,e,n){return rd(t,e,n)}function rd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=ry()===(Se==null?void 0:Se.scope)?Se:null;let c,u=!1,l=!1;if(Ge(t)?(c=()=>t.value,u=Vi(t)):ps(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(x=>ps(x)||Vi(x)),c=()=>t.map(x=>{if(Ge(x))return x.value;if(ps(x))return Ln(x);if(X(x))return dn(x,a,2)})):X(t)?e?c=()=>dn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),pt(t,a,3,[f])}:c=bt,e&&s){const x=c;c=()=>Ln(x())}let h,f=x=>{h=k.onStop=()=>{dn(x,a,4)}},g;if(wr)if(f=bt,e?n&&pt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const x=Kv();g=x.__watcherHandles||(x.__watcherHandles=[])}else return bt;let y=l?new Array(t.length).fill(pi):pi;const w=()=>{if(k.active)if(e){const x=k.run();(s||u||(l?x.some((z,oe)=>pr(z,y[oe])):pr(x,y)))&&(h&&h(),pt(e,a,3,[x,y===pi?void 0:l&&y[0]===pi?[]:y,f]),y=x)}else k.run()};w.allowRecurse=!!e;let A;r==="sync"?A=w:r==="post"?A=()=>rt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),A=()=>Gc(w));const k=new Bc(c,A);e?n?w():y=k.run():r==="post"?rt(k.run.bind(k),a&&a.suspense):k.run();const P=()=>{k.stop(),a&&a.scope&&Uc(a.scope.effects,k)};return g&&g.push(P),P}function Qy(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?id(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Se;Ts(this);const a=rd(r,i.bind(s),n);return o?Ts(o):jn(),a}function id(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Ln(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(Rf(t)||ds(t))t.forEach(n=>{Ln(n,e)});else if(Of(t))for(const n in t)Ln(t[n],e);return t}function Yy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ld(()=>{t.isMounted=!0}),hd(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],Xy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(t,{slots:e}){const n=Uv(),s=Yy();let r;return()=>{const i=e.default&&ad(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Ct){o=w;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return ca(o);const u=Sl(o);if(!u)return ca(o);const l=$a(u,a,s,n);Ba(u,l);const h=n.subTree,f=h&&Sl(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const w=y();r===void 0?r=w:w!==r&&(r=w,g=!0)}if(f&&f.type!==Ct&&(!xn(u,f)||g)){const w=$a(f,a,s,n);if(Ba(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ca(o);c==="in-out"&&u.type!==Ct&&(w.delayLeave=(A,k,P)=>{const x=od(s,f);x[String(f.key)]=f,A._leaveCb=()=>{k(),A._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=P})}return o}}},Jy=Xy;function od(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $a(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:w,onAppear:A,onAfterAppear:k,onAppearCancelled:P}=e,x=String(t.key),z=od(n,t),oe=(J,ye)=>{J&&pt(J,s,9,ye)},Te=(J,ye)=>{const de=ye[1];oe(J,ye),G(J)?J.every(je=>je.length<=1)&&de():J.length<=1&&de()},Ce={mode:i,persisted:o,beforeEnter(J){let ye=a;if(!n.isMounted)if(r)ye=w||a;else return;J._leaveCb&&J._leaveCb(!0);const de=z[x];de&&xn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),oe(ye,[J])},enter(J){let ye=c,de=u,je=l;if(!n.isMounted)if(r)ye=A||c,de=k||u,je=P||l;else return;let qe=!1;const mt=J._enterCb=Bt=>{qe||(qe=!0,Bt?oe(je,[J]):oe(de,[J]),Ce.delayedLeave&&Ce.delayedLeave(),J._enterCb=void 0)};ye?Te(ye,[J,mt]):mt()},leave(J,ye){const de=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return ye();oe(h,[J]);let je=!1;const qe=J._leaveCb=mt=>{je||(je=!0,ye(),mt?oe(y,[J]):oe(g,[J]),J._leaveCb=void 0,z[de]===t&&delete z[de])};z[de]=t,f?Te(f,[J,qe]):qe()},clone(J){return $a(J,e,n,s)}};return Ce}function ca(t){if(wo(t))return t=En(t),t.children=null,t}function Sl(t){return wo(t)?t.children?t.children[0]:void 0:t}function Ba(t,e){t.shapeFlag&6&&t.component?Ba(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ad(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Et?(o.patchFlag&128&&r++,s=s.concat(ad(o.children,e,a))):(e||o.type!==Ct)&&s.push(a!=null?En(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function cd(t){return X(t)?{setup:t,name:t.name}:t}const Ci=t=>!!t.type.__asyncLoader,wo=t=>t.type.__isKeepAlive;function Zy(t,e){ud(t,"a",e)}function ev(t,e){ud(t,"da",e)}function ud(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(_o(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wo(r.parent.vnode)&&tv(s,e,n,r),r=r.parent}}function tv(t,e,n,s){const r=_o(e,t,s,!0);fd(()=>{Uc(s[e],r)},n)}function _o(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=pt(e,n,t,o);return jn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=Se)=>(!wr||t==="sp")&&_o(t,(...s)=>e(...s),n),nv=tn("bm"),ld=tn("m"),sv=tn("bu"),rv=tn("u"),hd=tn("bum"),fd=tn("um"),iv=tn("sp"),ov=tn("rtg"),av=tn("rtc");function cv(t,e=Se){_o("ec",t,e)}function Ai(t,e){const n=ut;if(n===null)return t;const s=To(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),pt(c,n,8,[t.el,a,t,e]),Fs())}}const dd="components";function ja(t,e){return lv(dd,t,!0,e)||t}const uv=Symbol();function lv(t,e,n=!0,s=!1){const r=ut||Se;if(r){const i=r.type;if(t===dd){const a=jv(i,!1);if(a&&(a===e||a===Vt(e)||a===go(Vt(e))))return i}const o=Cl(r[t]||i[t],e)||Cl(r.appContext[t],e);return!o&&s?i:o}}function Cl(t,e){return t&&(t[e]||t[Vt(e)]||t[go(Vt(e))])}function hv(t,e,n,s){let r;const i=n&&n[s];if(G(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const qa=t=>t?Sd(t)?To(t)||t.proxy:qa(t.parent):null,ir=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$emit:t=>t.emit,$options:t=>Qc(t),$forceUpdate:t=>t.f||(t.f=()=>Gc(t.update)),$nextTick:t=>t.n||(t.n=Jf.bind(t.proxy)),$watch:t=>Qy.bind(t)}),ua=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),fv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ua(s,e))return o[e]=1,s[e];if(r!==ve&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];Ha&&(o[e]=0)}}const l=ir[e];let h,f;if(l)return e==="$attrs"&&at(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ua(r,e)?(r[e]=n,!0):s!==ve&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||ua(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(ir,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ha=!0;function dv(t){const e=Qc(t),n=t.proxy,s=t.ctx;Ha=!1,e.beforeCreate&&Al(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:w,deactivated:A,beforeDestroy:k,beforeUnmount:P,destroyed:x,unmounted:z,render:oe,renderTracked:Te,renderTriggered:Ce,errorCaptured:J,serverPrefetch:ye,expose:de,inheritAttrs:je,components:qe,directives:mt,filters:Bt}=e;if(u&&pv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const he=o[pe];X(he)&&(s[pe]=he.bind(n))}if(r){const pe=r.call(n,n);Ee(pe)&&(t.data=Lr(pe))}if(Ha=!0,i)for(const pe in i){const he=i[pe],yt=X(he)?he.bind(n,n):X(he.get)?he.get.bind(n,n):bt,kn=!X(he)&&X(he.set)?he.set.bind(n):bt,vt=dt({get:yt,set:kn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>vt.value,set:st=>vt.value=st})}if(a)for(const pe in a)pd(a[pe],s,n,pe);if(c){const pe=X(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(he=>{Si(he,pe[he])})}l&&Al(l,t,"c");function Ae(pe,he){G(he)?he.forEach(yt=>pe(yt.bind(n))):he&&pe(he.bind(n))}if(Ae(nv,h),Ae(ld,f),Ae(sv,g),Ae(rv,y),Ae(Zy,w),Ae(ev,A),Ae(cv,J),Ae(av,Te),Ae(ov,Ce),Ae(hd,P),Ae(fd,z),Ae(iv,ye),G(de))if(de.length){const pe=t.exposed||(t.exposed={});de.forEach(he=>{Object.defineProperty(pe,he,{get:()=>n[he],set:yt=>n[he]=yt})})}else t.exposed||(t.exposed={});oe&&t.render===bt&&(t.render=oe),je!=null&&(t.inheritAttrs=je),qe&&(t.components=qe),mt&&(t.directives=mt)}function pv(t,e,n=bt,s=!1){G(t)&&(t=Ka(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=St(i.from||r,i.default,!0):o=St(i.from||r):o=St(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Al(t,e,n){pt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pd(t,e,n,s){const r=s.includes(".")?id(n,s):()=>n[s];if(xe(t)){const i=e[t];X(i)&&rr(r,i)}else if(X(t))rr(r,t.bind(n));else if(Ee(t))if(G(t))t.forEach(i=>pd(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&rr(r,i,t)}}function Qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Bi(c,u,o,!0)),Bi(c,e,o)),Ee(e)&&i.set(e,c),c}function Bi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Bi(t,i,n,!0),r&&r.forEach(o=>Bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=gv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gv={data:kl,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Dn,directives:Dn,watch:yv,provide:kl,inject:mv};function kl(t,e){return e?t?function(){return Je(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function mv(t,e){return Dn(Ka(t),Ka(e))}function Ka(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Je(Je(Object.create(null),t),e):e}function yv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function vv(t,e,n,s=!1){const r={},i={};Fi(i,Io,1),t.propsDefaults=Object.create(null),gd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Dy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function wv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(vo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Vt(f);r[y]=za(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{gd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=Ls(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=za(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],u=!0)}u&&Qt(t,"set","$attrs")}function gd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ti(c))continue;const u=e[c];let l;r&&ie(r,l=Vt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:vo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ve;for(let l=0;l<i.length;l++){const h=i[l];n[h]=za(r,c,h,u[h],t,!ie(u,h))}}return o}function za(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ts(r),s=u[n]=c.call(null,e),jn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function md(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const l=h=>{c=!0;const[f,g]=md(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ee(t)&&s.set(t,fs),fs;if(G(i))for(let l=0;l<i.length;l++){const h=Vt(i[l]);Rl(h)&&(o[h]=ve)}else if(i)for(const l in i){const h=Vt(l);if(Rl(h)){const f=i[l],g=o[h]=G(f)||X(f)?{type:f}:Object.assign({},f);if(g){const y=Ol(Boolean,g.type),w=Ol(String,g.type);g[0]=y>-1,g[1]=w<0||y<w,(y>-1||ie(g,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&s.set(t,u),u}function Rl(t){return t[0]!=="$"}function Nl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dl(t,e){return Nl(t)===Nl(e)}function Ol(t,e){return G(e)?e.findIndex(n=>Dl(n,t)):X(e)&&Dl(e,t)?0:-1}const yd=t=>t[0]==="_"||t==="$stable",Yc=t=>G(t)?t.map(Ot):[Ot(t)],_v=(t,e,n)=>{if(e._n)return e;const s=Va((...r)=>Yc(e(...r)),n);return s._c=!1,s},vd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(yd(r))continue;const i=t[r];if(X(i))e[r]=_v(r,i,s);else if(i!=null){const o=Yc(i);e[r]=()=>o}}},wd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Ev=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Fi(e,"_",n)):vd(e,t.slots={})}else t.slots={},e&&wd(t,e);Fi(t.slots,Io,1)},Iv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,vd(e,r)),o=e}else e&&(wd(t,e),o={default:1});if(i)for(const a in r)!yd(a)&&!(a in o)&&delete r[a]};function _d(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tv=0;function bv(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=_d(),o=new Set;let a=!1;const c=i.app={_uid:Tv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:zv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&X(u.install)?(o.add(u),u.install(c,...l)):X(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Qe(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,To(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Wa(t,e,n,s,r=!1){if(G(t)){t.forEach((f,g)=>Wa(f,e&&(G(e)?e[g]:e),n,s,r));return}if(Ci(s)&&!r)return;const i=s.shapeFlag&4?To(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(xe(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):Ge(u)&&(u.value=null)),X(c))dn(c,a,12,[o,l]);else{const f=xe(c),g=Ge(c);if(f||g){const y=()=>{if(t.f){const w=f?ie(h,c)?h[c]:l[c]:c.value;r?G(w)&&Uc(w,i):G(w)?w.includes(i)||w.push(i):f?(l[c]=[i],ie(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,rt(y,n)):y()}}}const rt=Gy;function Sv(t){return Cv(t)}function Cv(t,e){const n=ty();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=bt,insertStaticContent:y}=t,w=(d,p,m,v=null,I=null,C=null,D=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!xn(d,p)&&(v=N(d),st(d,I,C,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:L}=p;switch(T){case Eo:A(d,p,m,v);break;case Ct:k(d,p,m,v);break;case la:d==null&&P(p,m,v,D);break;case Et:qe(d,p,m,v,I,C,D,S,R);break;default:L&1?oe(d,p,m,v,I,C,D,S,R):L&6?mt(d,p,m,v,I,C,D,S,R):(L&64||L&128)&&T.process(d,p,m,v,I,C,D,S,R,re)}B!=null&&I&&Wa(B,d&&d.ref,C,p||d,!p)},A=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const I=p.el=d.el;p.children!==d.children&&u(I,p.children)}},k=(d,p,m,v)=>{d==null?s(p.el=c(p.children||""),m,v):p.el=d.el},P=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},x=({el:d,anchor:p},m,v)=>{let I;for(;d&&d!==p;)I=f(d),s(d,m,v),d=I;s(p,m,v)},z=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},oe=(d,p,m,v,I,C,D,S,R)=>{D=D||p.type==="svg",d==null?Te(p,m,v,I,C,D,S,R):ye(d,p,I,C,D,S,R)},Te=(d,p,m,v,I,C,D,S)=>{let R,T;const{type:B,props:L,shapeFlag:j,transition:W,dirs:te}=d;if(R=d.el=o(d.type,C,L&&L.is,L),j&8?l(R,d.children):j&16&&J(d.children,R,null,v,I,C&&B!=="foreignObject",D,S),te&&Rn(d,null,v,"created"),Ce(R,d,d.scopeId,D,v),L){for(const fe in L)fe!=="value"&&!Ti(fe)&&i(R,fe,null,L[fe],C,d.children,v,I,O);"value"in L&&i(R,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Dt(T,v,d)}te&&Rn(d,null,v,"beforeMount");const ge=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;ge&&W.beforeEnter(R),s(R,p,m),((T=L&&L.onVnodeMounted)||ge||te)&&rt(()=>{T&&Dt(T,v,d),ge&&W.enter(R),te&&Rn(d,null,v,"mounted")},I)},Ce=(d,p,m,v,I)=>{if(m&&g(d,m),v)for(let C=0;C<v.length;C++)g(d,v[C]);if(I){let C=I.subTree;if(p===C){const D=I.vnode;Ce(d,D,D.scopeId,D.slotScopeIds,I.parent)}}},J=(d,p,m,v,I,C,D,S,R=0)=>{for(let T=R;T<d.length;T++){const B=d[T]=S?an(d[T]):Ot(d[T]);w(null,B,p,m,v,I,C,D,S)}},ye=(d,p,m,v,I,C,D)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:B}=p;R|=d.patchFlag&16;const L=d.props||ve,j=p.props||ve;let W;m&&Nn(m,!1),(W=j.onVnodeBeforeUpdate)&&Dt(W,m,p,d),B&&Rn(p,d,m,"beforeUpdate"),m&&Nn(m,!0);const te=I&&p.type!=="foreignObject";if(T?de(d.dynamicChildren,T,S,m,v,te,C):D||he(d,p,S,null,m,v,te,C,!1),R>0){if(R&16)je(S,p,L,j,m,v,I);else if(R&2&&L.class!==j.class&&i(S,"class",null,j.class,I),R&4&&i(S,"style",L.style,j.style,I),R&8){const ge=p.dynamicProps;for(let fe=0;fe<ge.length;fe++){const ke=ge[fe],wt=L[ke],rs=j[ke];(rs!==wt||ke==="value")&&i(S,ke,wt,rs,I,d.children,m,v,O)}}R&1&&d.children!==p.children&&l(S,p.children)}else!D&&T==null&&je(S,p,L,j,m,v,I);((W=j.onVnodeUpdated)||B)&&rt(()=>{W&&Dt(W,m,p,d),B&&Rn(p,d,m,"updated")},v)},de=(d,p,m,v,I,C,D)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],B=R.el&&(R.type===Et||!xn(R,T)||R.shapeFlag&70)?h(R.el):m;w(R,T,B,null,v,I,C,D,!0)}},je=(d,p,m,v,I,C,D)=>{if(m!==v){if(m!==ve)for(const S in m)!Ti(S)&&!(S in v)&&i(d,S,m[S],null,D,p.children,I,C,O);for(const S in v){if(Ti(S))continue;const R=v[S],T=m[S];R!==T&&S!=="value"&&i(d,S,T,R,D,p.children,I,C,O)}"value"in v&&i(d,"value",m.value,v.value)}},qe=(d,p,m,v,I,C,D,S,R)=>{const T=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),d==null?(s(T,m,v),s(B,m,v),J(p.children,m,B,I,C,D,S,R)):L>0&&L&64&&j&&d.dynamicChildren?(de(d.dynamicChildren,j,m,I,C,D,S),(p.key!=null||I&&p===I.subTree)&&Ed(d,p,!0)):he(d,p,m,B,I,C,D,S,R)},mt=(d,p,m,v,I,C,D,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?I.ctx.activate(p,m,v,D,R):Bt(p,m,v,I,C,D,R):Ws(d,p,R)},Bt=(d,p,m,v,I,C,D)=>{const S=d.component=Lv(d,v,I);if(wo(d)&&(S.ctx.renderer=re),Fv(S),S.asyncDep){if(I&&I.registerDep(S,Ae),!d.el){const R=S.subTree=Qe(Ct);k(null,R,p,m)}return}Ae(S,d,p,m,I,C,D)},Ws=(d,p,m)=>{const v=p.component=d.component;if(Ky(d,p,m))if(v.asyncDep&&!v.asyncResolved){pe(v,p,m);return}else v.next=p,Vy(v.update),v.update();else p.el=d.el,v.vnode=p},Ae=(d,p,m,v,I,C,D)=>{const S=()=>{if(d.isMounted){let{next:B,bu:L,u:j,parent:W,vnode:te}=d,ge=B,fe;Nn(d,!1),B?(B.el=te.el,pe(d,B,D)):B=te,L&&bi(L),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&Dt(fe,W,B,te),Nn(d,!0);const ke=aa(d),wt=d.subTree;d.subTree=ke,w(wt,ke,h(wt.el),N(wt),d,I,C),B.el=ke.el,ge===null&&zy(d,ke.el),j&&rt(j,I),(fe=B.props&&B.props.onVnodeUpdated)&&rt(()=>Dt(fe,W,B,te),I)}else{let B;const{el:L,props:j}=p,{bm:W,m:te,parent:ge}=d,fe=Ci(p);if(Nn(d,!1),W&&bi(W),!fe&&(B=j&&j.onVnodeBeforeMount)&&Dt(B,ge,p),Nn(d,!0),L&&ee){const ke=()=>{d.subTree=aa(d),ee(L,d.subTree,d,I,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ke()):ke()}else{const ke=d.subTree=aa(d);w(null,ke,m,v,d,I,C),p.el=ke.el}if(te&&rt(te,I),!fe&&(B=j&&j.onVnodeMounted)){const ke=p;rt(()=>Dt(B,ge,ke),I)}(p.shapeFlag&256||ge&&Ci(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&rt(d.a,I),d.isMounted=!0,p=m=v=null}},R=d.effect=new Bc(S,()=>Gc(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,Nn(d,!0),T()},pe=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,wv(d,p.props,v,m),Iv(d,p.children,m),Us(),Tl(),Fs()},he=(d,p,m,v,I,C,D,S,R=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){kn(T,L,m,v,I,C,D,S,R);return}else if(j&256){yt(T,L,m,v,I,C,D,S,R);return}}W&8?(B&16&&O(T,I,C),L!==T&&l(m,L)):B&16?W&16?kn(T,L,m,v,I,C,D,S,R):O(T,I,C,!0):(B&8&&l(m,""),W&16&&J(L,m,v,I,C,D,S,R))},yt=(d,p,m,v,I,C,D,S,R)=>{d=d||fs,p=p||fs;const T=d.length,B=p.length,L=Math.min(T,B);let j;for(j=0;j<L;j++){const W=p[j]=R?an(p[j]):Ot(p[j]);w(d[j],W,m,null,I,C,D,S,R)}T>B?O(d,I,C,!0,!1,L):J(p,m,v,I,C,D,S,R,L)},kn=(d,p,m,v,I,C,D,S,R)=>{let T=0;const B=p.length;let L=d.length-1,j=B-1;for(;T<=L&&T<=j;){const W=d[T],te=p[T]=R?an(p[T]):Ot(p[T]);if(xn(W,te))w(W,te,m,null,I,C,D,S,R);else break;T++}for(;T<=L&&T<=j;){const W=d[L],te=p[j]=R?an(p[j]):Ot(p[j]);if(xn(W,te))w(W,te,m,null,I,C,D,S,R);else break;L--,j--}if(T>L){if(T<=j){const W=j+1,te=W<B?p[W].el:v;for(;T<=j;)w(null,p[T]=R?an(p[T]):Ot(p[T]),m,te,I,C,D,S,R),T++}}else if(T>j)for(;T<=L;)st(d[T],I,C,!0),T++;else{const W=T,te=T,ge=new Map;for(T=te;T<=j;T++){const ct=p[T]=R?an(p[T]):Ot(p[T]);ct.key!=null&&ge.set(ct.key,T)}let fe,ke=0;const wt=j-te+1;let rs=!1,fl=0;const Gs=new Array(wt);for(T=0;T<wt;T++)Gs[T]=0;for(T=W;T<=L;T++){const ct=d[T];if(ke>=wt){st(ct,I,C,!0);continue}let Nt;if(ct.key!=null)Nt=ge.get(ct.key);else for(fe=te;fe<=j;fe++)if(Gs[fe-te]===0&&xn(ct,p[fe])){Nt=fe;break}Nt===void 0?st(ct,I,C,!0):(Gs[Nt-te]=T+1,Nt>=fl?fl=Nt:rs=!0,w(ct,p[Nt],m,null,I,C,D,S,R),ke++)}const dl=rs?Av(Gs):fs;for(fe=dl.length-1,T=wt-1;T>=0;T--){const ct=te+T,Nt=p[ct],pl=ct+1<B?p[ct+1].el:v;Gs[T]===0?w(null,Nt,m,pl,I,C,D,S,R):rs&&(fe<0||T!==dl[fe]?vt(Nt,m,pl,2):fe--)}}},vt=(d,p,m,v,I=null)=>{const{el:C,type:D,transition:S,children:R,shapeFlag:T}=d;if(T&6){vt(d.component.subTree,p,m,v);return}if(T&128){d.suspense.move(p,m,v);return}if(T&64){D.move(d,p,m,re);return}if(D===Et){s(C,p,m);for(let L=0;L<R.length;L++)vt(R[L],p,m,v);s(d.anchor,p,m);return}if(D===la){x(d,p,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(C),s(C,p,m),rt(()=>S.enter(C),I);else{const{leave:L,delayLeave:j,afterLeave:W}=S,te=()=>s(C,p,m),ge=()=>{L(C,()=>{te(),W&&W()})};j?j(C,te,ge):ge()}else s(C,p,m)},st=(d,p,m,v=!1,I=!1)=>{const{type:C,props:D,ref:S,children:R,dynamicChildren:T,shapeFlag:B,patchFlag:L,dirs:j}=d;if(S!=null&&Wa(S,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const W=B&1&&j,te=!Ci(d);let ge;if(te&&(ge=D&&D.onVnodeBeforeUnmount)&&Dt(ge,p,d),B&6)_(d.component,m,v);else{if(B&128){d.suspense.unmount(m,v);return}W&&Rn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,I,re,v):T&&(C!==Et||L>0&&L&64)?O(T,p,m,!1,!0):(C===Et&&L&384||!I&&B&16)&&O(R,p,m),v&&ss(d)}(te&&(ge=D&&D.onVnodeUnmounted)||W)&&rt(()=>{ge&&Dt(ge,p,d),W&&Rn(d,null,p,"unmounted")},m)},ss=d=>{const{type:p,el:m,anchor:v,transition:I}=d;if(p===Et){ci(m,v);return}if(p===la){z(d);return}const C=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:S}=I,R=()=>D(m,C);S?S(d.el,C,R):R()}else C()},ci=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},_=(d,p,m)=>{const{bum:v,scope:I,update:C,subTree:D,um:S}=d;v&&bi(v),I.stop(),C&&(C.active=!1,st(D,d,p,m)),S&&rt(S,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,m,v=!1,I=!1,C=0)=>{for(let D=C;D<d.length;D++)st(d[D],p,m,v,I)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,p,m)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,m),Tl(),ed(),p._vnode=d},re={p:w,um:st,m:vt,r:ss,mt:Bt,mc:J,pc:he,pbc:de,n:N,o:t};let Ie,ee;return e&&([Ie,ee]=e(re)),{render:V,hydrate:Ie,createApp:bv(V,Ie)}}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ed(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||Ed(o,a)),a.type===Eo&&(a.el=o.el)}}function Av(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const kv=t=>t.__isTeleport,Et=Symbol(void 0),Eo=Symbol(void 0),Ct=Symbol(void 0),la=Symbol(void 0),or=[];let Tt=null;function Mt(t=!1){or.push(Tt=t?null:[])}function Rv(){or.pop(),Tt=or[or.length-1]||null}let vr=1;function Pl(t){vr+=t}function Id(t){return t.dynamicChildren=vr>0?Tt||fs:null,Rv(),vr>0&&Tt&&Tt.push(t),t}function pn(t,e,n,s,r,i){return Id(Z(t,e,n,s,r,i,!0))}function Td(t,e,n,s,r){return Id(Qe(t,e,n,s,r,!0))}function Ga(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const Io="__vInternal",bd=({key:t})=>t??null,ki=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Ge(t)||X(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function Z(t,e=null,n=null,s=0,r=null,i=t===Et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bd(e),ref:e&&ki(e),scopeId:sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(Xc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),vr>0&&!o&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const Qe=Nv;function Nv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===uv)&&(t=Ct),Ga(t)){const a=En(t,e,!0);return n&&Xc(a,n),vr>0&&!i&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(qv(t)&&(t=t.__vccOpts),e){e=Dv(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=hs(a)),Ee(c)&&(Hf(c)&&!G(c)&&(c=Je({},c)),e.style=Mc(c))}const o=xe(t)?1:Wy(t)?128:kv(t)?64:Ee(t)?4:X(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function Dv(t){return t?Hf(t)||Io in t?Je({},t):t:null}function En(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Pv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bd(a),ref:e&&e.ref?n&&r?G(r)?r.concat(ki(e)):[r,ki(e)]:ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qa(t=" ",e=0){return Qe(Eo,null,t,e)}function Ov(t="",e=!1){return e?(Mt(),Td(Ct,null,t)):Qe(Ct,null,t)}function Ot(t){return t==null||typeof t=="boolean"?Qe(Ct):G(t)?Qe(Et,null,t.slice()):typeof t=="object"?an(t):Qe(Eo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:En(t)}function Xc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Xc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Io in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Qa(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=hs([e.class,s.class]));else if(r==="style")e.style=Mc([e.style,s.style]);else if(ho(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Dt(t,e,n,s=null){pt(t,e,7,[n,s])}const xv=_d();let Mv=0;function Lv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xv,i={uid:Mv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(s,r),emitsOptions:nd(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const Uv=()=>Se||ut,Ts=t=>{Se=t,t.scope.on()},jn=()=>{Se&&Se.scope.off(),Se=null};function Sd(t){return t.vnode.shapeFlag&4}let wr=!1;function Fv(t,e=!1){wr=e;const{props:n,children:s}=t.vnode,r=Sd(t);vv(t,n,r,e),Ev(t,s);const i=r?Vv(t,e):void 0;return wr=!1,i}function Vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kf(new Proxy(t.ctx,fv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Bv(t):null;Ts(t),Us();const i=dn(s,t,0,[t.props,r]);if(Fs(),jn(),Nf(i)){if(i.then(jn,jn),e)return i.then(o=>{xl(t,o,e)}).catch(o=>{yo(o,t,0)});t.asyncDep=i}else xl(t,i,e)}else Cd(t,e)}function xl(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Qf(e)),Cd(t,n)}let Ml;function Cd(t,e,n){const s=t.type;if(!t.render){if(!e&&Ml&&!s.render){const r=s.template||Qc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=Ml(r,u)}}t.render=s.render||bt}Ts(t),Us(),dv(t),Fs(),jn()}function $v(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function Bv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=$v(t))},slots:t.slots,emit:t.emit,expose:e}}function To(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qf(Kf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)},has(e,n){return n in e||n in ir}}))}function jv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function qv(t){return X(t)&&"__vccOpts"in t}const dt=(t,e)=>Ly(t,e,wr);function Ad(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!G(e)?Ga(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ga(n)&&(n=[n]),Qe(t,e,n))}const Hv=Symbol(""),Kv=()=>St(Hv),zv="3.2.47",Wv="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,Ll=Mn&&Mn.createElement("template"),Gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Mn.createElementNS(Wv,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ll.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ll.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yv(t,e,n){const s=t.style,r=xe(n);if(n&&!r){if(e&&!xe(e))for(const i in e)n[i]==null&&Ya(s,i,"");for(const i in n)Ya(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Ul=/\s*!important$/;function Ya(t,e,n){if(G(n))n.forEach(s=>Ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Xv(t,e);Ul.test(n)?t.setProperty(Ls(s),n.replace(Ul,""),"important"):t[s]=n}}const Fl=["Webkit","Moz","ms"],ha={};function Xv(t,e){const n=ha[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return ha[e]=s;s=go(s);for(let r=0;r<Fl.length;r++){const i=Fl[r]+s;if(i in t)return ha[e]=i}return e}const Vl="http://www.w3.org/1999/xlink";function Jv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vl,e.slice(6,e.length)):t.setAttributeNS(Vl,e,n);else{const i=Gm(e);n==null||i&&!Af(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Zv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Af(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function os(t,e,n,s){t.addEventListener(e,n,s)}function ew(t,e,n,s){t.removeEventListener(e,n,s)}function tw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=nw(e);if(s){const u=i[e]=iw(s,r);os(t,a,u,c)}else o&&(ew(t,a,o,c),i[e]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function nw(t){let e;if($l.test(t)){e={};let s;for(;s=t.match($l);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let fa=0;const sw=Promise.resolve(),rw=()=>fa||(sw.then(()=>fa=0),fa=Date.now());function iw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(ow(s,n.value),e,5,[s])};return n.value=t,n.attached=rw(),n}function ow(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Bl=/^on[a-z]/,aw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Qv(t,s,r):e==="style"?Yv(t,n,s):ho(e)?Lc(e)||tw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cw(t,e,s,r))?Zv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Jv(t,e,s,r))};function cw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bl.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bl.test(e)&&xe(n)?!1:e in t}const uw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jy.props;const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>bi(e,n):e};function lw(t){t.target.composing=!0}function ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ri={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=jl(r);const i=s||r.props&&r.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pa(a)),t._assign(a)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",lw),os(t,"compositionend",ql),os(t,"change",ql))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=jl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Pa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},hw=["ctrl","shift","alt","meta"],fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hw.some(n=>t[`${n}Key`]&&!e.includes(n))},kd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=fw[e[r]];if(i&&i(n,e))return}return t(n,...s)},dw=Je({patchProp:aw},Gv);let Hl;function pw(){return Hl||(Hl=Sv(dw))}const gw=(...t)=>{const e=pw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=mw(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function mw(t){return xe(t)?document.querySelector(t):t}/**
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
 */const Rd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},yw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new vw;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=Rd(t);return Nd.encodeByteArray(e,!0)},ji=function(t){return ww(t).replace(/\./g,"")},Dd=function(t){try{return Nd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ew=()=>_w().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dd(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return Ew()||Iw()||Tw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Od=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bw=t=>{const e=Od(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sw=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},Pd=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ji(JSON.stringify(n)),ji(JSON.stringify(o)),a].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Rw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const xw="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xw,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Mw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nn(r,a,s)}}function Mw(t,e){return t.replace(Lw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Lw=/\{\$([^}]+)}/g;function Uw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Kl(i)&&Kl(o)){if(!qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
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
 */function Fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fw(t,e){const n=new Vw(t,e);return n.subscribe.bind(n)}class Vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");$w(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=da),r.error===void 0&&(r.error=da),r.complete===void 0&&(r.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $w(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function da(){}/**
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
 */class Bw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qw(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(t){return t===On?void 0:t}function qw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Kw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},zw=ce.INFO,Ww={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Gw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ww[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=zw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Qw=(t,e)=>e.some(n=>t instanceof n);let zl,Wl;function Yw(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xw(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xd=new WeakMap,Xa=new WeakMap,Md=new WeakMap,pa=new WeakMap,eu=new WeakMap;function Jw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xd.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function Zw(t){if(Xa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xa.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Md.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e_(t){Ja=t(Ja)}function t_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ga(this),e,...n);return Md.set(s,e.sort?e.sort():[e]),gn(s)}:Xw().includes(t)?function(...e){return t.apply(ga(this),e),gn(xd.get(this))}:function(...e){return gn(t.apply(ga(this),e))}}function n_(t){return typeof t=="function"?t_(t):(t instanceof IDBTransaction&&Zw(t),Qw(t,Yw())?new Proxy(t,Ja):t)}function gn(t){if(t instanceof IDBRequest)return Jw(t);if(pa.has(t))return pa.get(t);const e=n_(t);return e!==t&&(pa.set(t,e),eu.set(e,t)),e}const ga=t=>eu.get(t);function s_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=gn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gn(o.result),c.oldVersion,c.newVersion,gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const r_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],ma=new Map;function Gl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=i_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||r_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ma.set(e,i),i}e_(t=>({...t,get:(e,n,s)=>Gl(e,n)||t.get(e,n,s),has:(e,n)=>!!Gl(e,n)||t.has(e,n)}));/**
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
 */class o_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function a_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",Ql="0.9.4";/**
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
 */const Gn=new Zc("@firebase/app"),c_="@firebase/app-compat",u_="@firebase/analytics-compat",l_="@firebase/analytics",h_="@firebase/app-check-compat",f_="@firebase/app-check",d_="@firebase/auth",p_="@firebase/auth-compat",g_="@firebase/database",m_="@firebase/database-compat",y_="@firebase/functions",v_="@firebase/functions-compat",w_="@firebase/installations",__="@firebase/installations-compat",E_="@firebase/messaging",I_="@firebase/messaging-compat",T_="@firebase/performance",b_="@firebase/performance-compat",S_="@firebase/remote-config",C_="@firebase/remote-config-compat",A_="@firebase/storage",k_="@firebase/storage-compat",R_="@firebase/firestore",N_="@firebase/firestore-compat",D_="firebase",O_="9.17.2";/**
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
 */const ec="[DEFAULT]",P_={[Za]:"fire-core",[c_]:"fire-core-compat",[l_]:"fire-analytics",[u_]:"fire-analytics-compat",[f_]:"fire-app-check",[h_]:"fire-app-check-compat",[d_]:"fire-auth",[p_]:"fire-auth-compat",[g_]:"fire-rtdb",[m_]:"fire-rtdb-compat",[y_]:"fire-fn",[v_]:"fire-fn-compat",[w_]:"fire-iid",[__]:"fire-iid-compat",[E_]:"fire-fcm",[I_]:"fire-fcm-compat",[T_]:"fire-perf",[b_]:"fire-perf-compat",[S_]:"fire-rc",[C_]:"fire-rc-compat",[A_]:"fire-gcs",[k_]:"fire-gcs-compat",[R_]:"fire-fst",[N_]:"fire-fst-compat","fire-js":"fire-js",[D_]:"fire-js-all"};/**
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
 */const Hi=new Map,tc=new Map;function x_(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(tc.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,t);for(const n of Hi.values())x_(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const M_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new Ur("app","Firebase",M_);/**
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
 */class L_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=O_;function Ld(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ec,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw mn.create("bad-app-name",{appName:String(r)});if(n||(n=Sw()),!n)throw mn.create("no-options");const i=Hi.get(r);if(i){if(qi(n,i.options)&&qi(s,i.config))return i;throw mn.create("duplicate-app",{appName:r})}const o=new Hw(r);for(const c of tc.values())o.addComponent(c);const a=new L_(n,s,o);return Hi.set(r,a),a}function Ud(t=ec){const e=Hi.get(t);if(!e&&t===ec)return Ld();if(!e)throw mn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=P_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}bs(new Wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const U_="firebase-heartbeat-database",F_=1,_r="firebase-heartbeat-store";let ya=null;function Fd(){return ya||(ya=s_(U_,F_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_r)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),ya}async function V_(t){try{return(await Fd()).transaction(_r).objectStore(_r).get(Vd(t))}catch(e){if(e instanceof nn)Gn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Yl(t,e){try{const s=(await Fd()).transaction(_r,"readwrite");return await s.objectStore(_r).put(e,Vd(t)),s.done}catch(n){if(n instanceof nn)Gn.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(s.message)}}}function Vd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $_=1024,B_=30*24*60*60*1e3;class j_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=B_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xl(),{heartbeatsToSend:n,unsentEntries:s}=q_(this._heartbeatsCache.heartbeats),r=ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xl(){return new Date().toISOString().substring(0,10)}function q_(t,e=$_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class H_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await V_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jl(t){return ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function K_(t){bs(new Wn("platform-logger",e=>new o_(e),"PRIVATE")),bs(new Wn("heartbeat",e=>new j_(e),"PRIVATE")),yn(Za,Ql,t),yn(Za,Ql,"esm2017"),yn("fire-js","")}K_("");function nu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function $d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z_=$d,Bd=new Ur("auth","Firebase",$d());/**
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
 */const Zl=new Zc("@firebase/auth");function Ni(t,...e){Zl.logLevel<=ce.ERROR&&Zl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function gt(t,...e){throw su(t,...e)}function Lt(t,...e){return su(t,...e)}function jd(t,e,n){const s=Object.assign(Object.assign({},z_()),{[e]:n});return new Ur("auth","Firebase",s).create(e,{appName:t.name})}function W_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&gt(t,"argument-error"),jd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bd.create(t,...e)}function q(t,e,...n){if(!t)throw su(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ni(e),new Error(e)}function Yt(t,e){t||zt(e)}/**
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
 */const eh=new Map;function Wt(t){Yt(t instanceof Function,"Expected a class definition");let e=eh.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eh.set(t,e),e)}/**
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
 */function G_(t,e){const n=tu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qi(i,e??{}))return r;gt(r,"already-initialized")}return n.initialize({options:e})}function Q_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y_(){return th()==="http:"||th()==="https:"}function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function X_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y_()||Rw()||"connection"in navigator)?navigator.onLine:!0}function J_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $r{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=kw()||Nw()}get(){return X_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ru(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const eE=new $r(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,s,r={}){return Hd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qd.fetch()(Kd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Z_),e);try{const r=new tE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jd(t,l,u);gt(t,l)}}catch(r){if(r instanceof nn)throw r;gt(t,"internal-error",{message:String(r)})}}async function qr(t,e,n,s,r={}){const i=await jr(t,e,n,s,r);return"mfaPendingCredential"in i&&gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Kd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ru(t.config,r):`${t.config.apiScheme}://${r}`}class tE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),eE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function nE(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function sE(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rE(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=iu(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ar(va(r.auth_time)),issuedAtTime:ar(va(r.iat)),expirationTime:ar(va(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function iu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ni("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dd(n);return r?JSON.parse(r):(Ni("Failed to decode base64 JWT payload"),null)}catch(r){return Ni("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function iE(t){const e=iu(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&oE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ki(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Er(t,sE(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lE(i.providerUserInfo):[],a=uE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function cE(t){const e=Ue(t);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lE(t){return t.map(e=>{var{providerId:n}=e,s=nu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function hE(t,e){const n=await Hd(t,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Kd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await hE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ir;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function rn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rE(this,e)}reload(){return cE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ki(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Er(this,nE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:x,emailVerified:z,isAnonymous:oe,providerData:Te,stsTokenManager:Ce}=n;q(x&&Ce,e,"internal-error");const J=Ir.fromJSON(this.name,Ce);q(typeof x=="string",e,"internal-error"),rn(h,e.name),rn(f,e.name),q(typeof z=="boolean",e,"internal-error"),q(typeof oe=="boolean",e,"internal-error"),rn(g,e.name),rn(y,e.name),rn(w,e.name),rn(A,e.name),rn(k,e.name),rn(P,e.name);const ye=new qn({uid:x,auth:e,email:f,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:J,createdAt:k,lastLoginAt:P});return Te&&Array.isArray(Te)&&(ye.providerData=Te.map(de=>Object.assign({},de))),A&&(ye._redirectEventId=A),ye}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ir;r.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ki(i),i}}/**
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
 */class Wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wd.type="NONE";const nh=Wd;/**
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
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Di(this.userKey,r.apiKey,i),this.fullPersistenceKey=Di("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(Wt(nh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Wt(nh);const o=Di(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=qn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,s))}}/**
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
 */function sh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jd(e))return"Blackberry";if(Zd(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||Qd(e))&&!e.includes("edge/"))return"Chrome";if(Xd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gd(t=Ze()){return/firefox\//i.test(t)}function ou(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qd(t=Ze()){return/crios\//i.test(t)}function Yd(t=Ze()){return/iemobile/i.test(t)}function Xd(t=Ze()){return/android/i.test(t)}function Jd(t=Ze()){return/blackberry/i.test(t)}function Zd(t=Ze()){return/webos/i.test(t)}function bo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fE(t=Ze()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dE(){return Dw()&&document.documentMode===10}function ep(t=Ze()){return bo(t)||Xd(t)||Zd(t)||Jd(t)||/windows phone/i.test(t)||Yd(t)}function pE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tp(t,e=[]){let n;switch(t){case"Browser":n=sh(Ze());break;case"Worker":n=`${sh(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class gE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class mE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rh(this),this.idTokenSubscription=new rh(this),this.beforeStateQueue=new gE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vs(t){return Ue(t)}class rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function yE(t,e,n){const s=Vs(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=np(e),{host:o,port:a}=vE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wE()}function np(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vE(t){const e=np(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ih(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ih(o)}}}function ih(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function _E(t,e){return jr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function EE(t,e){return qr(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
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
 */async function IE(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function TE(t,e){return qr(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
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
 */class Tr extends au{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Tr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Tr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return EE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IE(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _E(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TE(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const bE="http://localhost";class Qn extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=nu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:bE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
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
 */function SE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CE(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,s=Js(Zs(t)).deep_link_id;return(s?Js(Zs(s)).link:null)||s||n||e||t}class cu{constructor(e){var n,s,r,i,o,a;const c=Js(Zs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=SE((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CE(e);try{return new cu(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return Tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=cu.parseLink(n);return q(s,"argument-error"),Tr._fromEmailAndCode(e,s.code,s.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hr extends uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function AE(t,e){return qr(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qn._fromIdTokenResponse(e,s,r),o=oh(s);return new Yn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=oh(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zi extends nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new zi(e,n,s,r)}}function sp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(t,i,e,s):i})}async function kE(t,e,n=!1){const s=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",s)}/**
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
 */async function RE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Er(t,sp(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=iu(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Yn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),i}}/**
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
 */async function rp(t,e,n=!1){const s="signIn",r=await sp(t,s,e),i=await Yn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function NE(t,e){return rp(Vs(t),e)}async function DE(t,e,n){const s=Vs(t),r=await AE(s,{returnSecureToken:!0,email:e,password:n}),i=await Yn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function OE(t,e,n){return NE(Ue(t),$s.credential(e,n))}function PE(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function xE(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function ME(t){return Ue(t).signOut()}const Wi="__sak";/**
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
 */class ip{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function LE(){const t=Ze();return ou(t)||bo(t)}const UE=1e3,FE=10;class op extends ip{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LE()&&pE(),this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);dE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,FE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}op.type="LOCAL";const VE=op;/**
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
 */class ap extends ip{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ap.type="SESSION";const cp=ap;/**
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
 */function $E(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new So(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await $E(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
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
 */function lu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=lu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function jE(t){Ut().location.href=t}/**
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
 */function up(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function qE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KE(){return up()?self:null}/**
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
 */const lp="firebaseLocalStorageDb",zE=1,Gi="firebaseLocalStorage",hp="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Co(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function WE(){const t=indexedDB.deleteDatabase(lp);return new Kr(t).toPromise()}function sc(){const t=indexedDB.open(lp,zE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gi,{keyPath:hp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gi)?e(s):(s.close(),await WE(),e(await sc()))})})}async function ah(t,e,n){const s=Co(t,!0).put({[hp]:e,value:n});return new Kr(s).toPromise()}async function GE(t,e){const n=Co(t,!1).get(e),s=await new Kr(n).toPromise();return s===void 0?null:s.value}function ch(t,e){const n=Co(t,!0).delete(e);return new Kr(n).toPromise()}const QE=800,YE=3;class fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(KE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qE(),!this.activeServiceWorker)return;this.sender=new BE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await ah(e,Wi,"1"),await ch(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ah(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Co(r,!1).getAll();return new Kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fp.type="LOCAL";const XE=fp;/**
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
 */function JE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",JE().appendChild(s)})}function eI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $r(3e4,6e4);/**
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
 */function dp(t,e){return e?Wt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tI(t){return rp(t.auth,new hu(t),t.bypassAuthState)}function nI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),RE(n,new hu(t),t.bypassAuthState)}async function sI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),kE(n,new hu(t),t.bypassAuthState)}/**
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
 */class pp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return nI;default:gt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rI=new $r(2e3,1e4);async function iI(t,e,n){const s=Vs(t);W_(t,e,uu);const r=dp(s,n);return new Un(s,"signInViaPopup",e,r).executeNotNull()}class Un extends pp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rI.get())};e()}}Un.currentPopupAction=null;/**
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
 */const oI="pendingRedirect",Oi=new Map;class aI extends pp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const s=await cI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(t,e){const n=hI(e),s=lI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function uI(t,e){Oi.set(t._key(),e)}function lI(t){return Wt(t._redirectPersistence)}function hI(t){return Di(oI,t.config.apiKey,t.name)}async function fI(t,e,n=!1){const s=Vs(t),r=dp(s,e),o=await new aI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dI=10*60*1e3;class pI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gp(t);default:return!1}}/**
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
 */async function mI(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
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
 */const yI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vI=/^https?/;async function wI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mI(t);for(const n of e)try{if(_I(n))return}catch{}gt(t,"unauthorized-domain")}function _I(t){const e=nc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!vI.test(n))return!1;if(yI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const EI=new $r(3e4,6e4);function lh(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function II(t){return new Promise((e,n)=>{var s,r,i;function o(){lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lh(),n(Lt(t,"network-request-failed"))},timeout:EI.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=eI("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},ZE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function TI(t){return Pi=Pi||II(t),Pi}/**
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
 */const bI=new $r(5e3,15e3),SI="__/auth/iframe",CI="emulator/auth/iframe",AI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,CI):`https://${t.config.authDomain}/${SI}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=kI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Fr(s).slice(1)}`}async function NI(t){const e=await TI(t),n=Ut().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:RI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},bI.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const DI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OI=500,PI=600,xI="_blank",MI="http://localhost";class hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LI(t,e,n,s=OI,r=PI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ze().toLowerCase();n&&(a=Qd(u)?xI:n),Gd(u)&&(e=e||MI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(fE(u)&&a!=="_self")return UI(e||"",a),new hh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new hh(h)}function UI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FI="__/auth/handler",VI="emulator/auth/handler";function fh(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Hr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$I(t)}?${Fr(a).slice(1)}`}function $I({config:t}){return t.emulator?ru(t,VI):`https://${t.authDomain}/${FI}`}/**
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
 */const wa="webStorageSupport";class BI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cp,this._completeRedirectFn=fI,this._overrideRedirectResult=uI}async _openPopup(e,n,s,r){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fh(e,n,s,nc(),r);return LI(e,o,lu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),jE(fh(e,n,s,nc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NI(e),s=new pI(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wa,{type:wa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wa];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ep()||ou()||bo()}}const jI=BI;var dh="@firebase/auth",ph="0.21.4";/**
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
 */class qI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KI(t){bs(new Wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(t)},l=new mE(a,c,u);return Q_(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new Wn("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(s=>new qI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(dh,ph,HI(t)),yn(dh,ph,"esm2017")}/**
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
 */const zI=5*60,WI=Pd("authIdTokenMaxAge")||zI;let gh=null;const GI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WI)return;const r=n==null?void 0:n.token;gh!==r&&(gh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rc(t=Ud()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=G_(t,{popupRedirectResolver:jI,persistence:[XE,VE,cp]}),s=Pd("authTokenSyncURL");if(s){const i=GI(s);xE(n,i,()=>i(n.currentUser)),PE(n,o=>i(o))}const r=Od("auth");return r&&yE(n,`http://${r}`),n}KI("Browser");const Ao=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},QI={name:"HeaderComponent",setup(){const t=St("auth"),e=Kt("");return t.onAuthStateChanged(s=>{e.value=s?s.email:"No user"}),{currentUser:e,logOut:()=>{window.location.href="auth",ME(t)}}}},YI={class:"nav-side"},XI={class:"nav-side"};function JI(t,e,n,s,r,i){const o=ja("router-link");return Mt(),pn("header",null,[Z("nav",null,[Z("div",YI,[Z("span",null,[Qe(o,{to:"/"},{default:Va(()=>[Qa("Todos")]),_:1})])]),Z("div",XI,[s.currentUser==="No user"?(Mt(),Td(o,{key:0,class:"login-link",to:"/auth"},{default:Va(()=>[Qa("Login")]),_:1})):(Mt(),pn("span",{key:1,onClick:e[0]||(e[0]=(...a)=>s.logOut&&s.logOut(...a))},"Logout"))])])])}const ZI=Ao(QI,[["render",JI],["__scopeId","data-v-6a35834c"]]),e0={components:{HeaderComponent:ZI}},t0={id:"app"};function n0(t,e,n,s,r,i){const o=ja("header-component"),a=ja("router-view");return Mt(),pn("div",t0,[Qe(o),Qe(a)])}const s0=Ao(e0,[["render",n0]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof window<"u";function r0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function _a(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const cr=()=>{},kt=Array.isArray,i0=/\/$/,o0=t=>t.replace(i0,"");function Ea(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=l0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function a0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function c0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ss(e.matched[s],n.matched[r])&&mp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u0(t[n],e[n]))return!1;return!0}function u0(t,e){return kt(t)?yh(t,e):kt(e)?yh(e,t):t===e}function yh(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function l0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function h0(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o0(t)}const f0=/^[^#]+#/;function d0(t,e){return t.replace(f0,"#")+e}function p0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function g0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=p0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vh(t,e){return(history.state?history.state.position-e:-1)+t}const ic=new Map;function m0(t,e){ic.set(t,e)}function y0(t){const e=ic.get(t);return ic.delete(t),e}let v0=()=>location.protocol+"//"+location.host;function yp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),mh(c,"")}return mh(n,t)+s+r}function w0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=yp(t,location),y=n.value,w=e.value;let A=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}A=w?f.position-w.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:A,type:br.pop,direction:A?A>0?ur.forward:ur.back:ur.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:ko()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function wh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ko():null}}function _0(t){const{history:e,location:n}=window,s={value:yp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:v0()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=le({},e.state,wh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=le({},r.value,e.state,{forward:c,scroll:ko()});i(l.current,l,!0);const h=le({},wh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function E0(t){t=h0(t);const e=_0(t),n=w0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:d0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function I0(t){return typeof t=="string"||t&&typeof t=="object"}function vp(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wp=Symbol("");var _h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_h||(_h={}));function Cs(t,e){return le(new Error,{type:t,[wp]:!0},e)}function jt(t,e){return t instanceof Error&&wp in t&&(e==null||!!(t.type&e))}const Eh="[^/]+?",T0={sensitive:!1,strict:!1,start:!0,end:!0},b0=/[.+*?^${}()[\]/\\]/g;function S0(t,e){const n=le({},T0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(b0,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:w,optional:A,regexp:k}=f;i.push({name:y,repeatable:w,optional:A});const P=k||Eh;if(P!==Eh){g+=10;try{new RegExp(`(${P})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+z.message)}}let x=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(x=A&&u.length<2?`(?:/${x})`:"/"+x),A&&(x+="?"),r+=x,g+=20,A&&(g+=-8),w&&(g+=-20),P===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:A}=g,k=y in u?u[y]:"";if(kt(k)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=kt(k)?k.join("/"):k;if(!P)if(A)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=P}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function C0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function A0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=C0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ih(s))return 1;if(Ih(r))return-1}return r.length-s.length}function Ih(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k0={type:0,value:""},R0=/[a-zA-Z0-9_]/;function N0(t){if(!t)return[[]];if(t==="/")return[[k0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:R0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function D0(t,e,n){const s=S0(N0(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function O0(t,e){const n=[],s=new Map;e=Sh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=P0(l);y.aliasOf=f&&f.record;const w=Sh(e,l),A=[y];if("alias"in l){const x=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of x)A.push(le({},y,{components:f?f.record.components:y.components,path:z,aliasOf:f?f.record:y}))}let k,P;for(const x of A){const{path:z}=x;if(h&&z[0]!=="/"){const oe=h.record.path,Te=oe[oe.length-1]==="/"?"":"/";x.path=h.record.path+(z&&Te+z)}if(k=D0(x,h,w),f?f.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),g&&l.name&&!bh(k)&&o(l.name)),y.children){const oe=y.children;for(let Te=0;Te<oe.length;Te++)i(oe[Te],k,f&&f.children[Te])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:cr}function o(l){if(vp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&A0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!_p(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!bh(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,w;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Cs(1,{location:l});w=f.record.name,g=le(Th(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),l.params&&Th(l.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Cs(1,{location:l,currentLocation:h});w=f.record.name,g=le({},h.params,l.params),y=f.stringify(g)}const A=[];let k=f;for(;k;)A.unshift(k.record),k=k.parent;return{name:w,path:y,params:g,matched:A,meta:M0(A)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Th(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function P0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:x0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function x0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function bh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M0(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Sh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _p(t,e){return e.children.some(n=>n===t||_p(t,n))}const Ep=/#/g,L0=/&/g,U0=/\//g,F0=/=/g,V0=/\?/g,Ip=/\+/g,$0=/%5B/g,B0=/%5D/g,Tp=/%5E/g,j0=/%60/g,bp=/%7B/g,q0=/%7C/g,Sp=/%7D/g,H0=/%20/g;function fu(t){return encodeURI(""+t).replace(q0,"|").replace($0,"[").replace(B0,"]")}function K0(t){return fu(t).replace(bp,"{").replace(Sp,"}").replace(Tp,"^")}function oc(t){return fu(t).replace(Ip,"%2B").replace(H0,"+").replace(Ep,"%23").replace(L0,"%26").replace(j0,"`").replace(bp,"{").replace(Sp,"}").replace(Tp,"^")}function z0(t){return oc(t).replace(F0,"%3D")}function W0(t){return fu(t).replace(Ep,"%23").replace(V0,"%3F")}function G0(t){return t==null?"":W0(t).replace(U0,"%2F")}function Qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Q0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ip," "),o=i.indexOf("="),a=Qi(o<0?i:i.slice(0,o)),c=o<0?null:Qi(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ch(t){let e="";for(let n in t){const s=t[n];if(n=z0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&oc(i)):[s&&oc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Y0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const X0=Symbol(""),Ah=Symbol(""),du=Symbol(""),Cp=Symbol(""),ac=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Cs(4,{from:n,to:e})):h instanceof Error?a(h):I0(h)?a(Cs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ia(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(J0(a)){const u=(a.__vccOpts||a)[e];u&&r.push(cn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=r0(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&cn(f,n,s,i,o)()}))}}return r}function J0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kh(t){const e=St(du),n=St(Cp),s=dt(()=>e.resolve(gs(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ss.bind(null,l));if(f>-1)return f;const g=Rh(c[u-2]);return u>1&&Rh(l)===g&&h[h.length-1].path!==g?h.findIndex(Ss.bind(null,c[u-2])):f}),i=dt(()=>r.value>-1&&nT(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&mp(n.params,s.value.params));function a(c={}){return tT(c)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(cr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Z0=cd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kh,setup(t,{slots:e}){const n=Lr(kh(t)),{options:s}=St(du),r=dt(()=>({[Nh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Nh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ad("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),eT=Z0;function tT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Rh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nh=(t,e,n)=>t??e??n,sT=cd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(ac),r=dt(()=>t.route||s.value),i=St(Ah,0),o=dt(()=>{let u=gs(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=dt(()=>r.value.matched[o.value]);Si(Ah,dt(()=>o.value+1)),Si(X0,a),Si(ac,r);const c=Kt();return rr(()=>[c.value,a.value,t.name],([u,l,h],[f,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ss(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return Dh(n.default,{Component:f,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,A=Ad(f,le({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Dh(n.default,{Component:A,route:u})||A}}});function Dh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rT=sT;function iT(t){const e=O0(t.routes,t),n=t.parseQuery||Q0,s=t.stringifyQuery||Ch,r=t.history,i=Qs(),o=Qs(),a=Qs(),c=Oy(on);let u=on;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=_a.bind(null,_=>""+_),h=_a.bind(null,G0),f=_a.bind(null,Qi);function g(_,O){let N,V;return vp(_)?(N=e.getRecordMatcher(_),V=O):V=_,e.addRoute(V,N)}function y(_){const O=e.getRecordMatcher(_);O&&e.removeRoute(O)}function w(){return e.getRoutes().map(_=>_.record)}function A(_){return!!e.getRecordMatcher(_)}function k(_,O){if(O=le({},O||c.value),typeof _=="string"){const d=Ea(n,_,O.path),p=e.resolve({path:d.path},O),m=r.createHref(d.fullPath);return le(d,p,{params:f(p.params),hash:Qi(d.hash),redirectedFrom:void 0,href:m})}let N;if("path"in _)N=le({},_,{path:Ea(n,_.path,O.path).path});else{const d=le({},_.params);for(const p in d)d[p]==null&&delete d[p];N=le({},_,{params:h(_.params)}),O.params=h(O.params)}const V=e.resolve(N,O),re=_.hash||"";V.params=l(f(V.params));const Ie=a0(s,le({},_,{hash:K0(re),path:V.path})),ee=r.createHref(Ie);return le({fullPath:Ie,hash:re,query:s===Ch?Y0(_.query):_.query||{}},V,{redirectedFrom:void 0,href:ee})}function P(_){return typeof _=="string"?Ea(n,_,c.value.path):le({},_)}function x(_,O){if(u!==_)return Cs(8,{from:O,to:_})}function z(_){return Ce(_)}function oe(_){return z(le(P(_),{replace:!0}))}function Te(_){const O=_.matched[_.matched.length-1];if(O&&O.redirect){const{redirect:N}=O;let V=typeof N=="function"?N(_):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),le({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function Ce(_,O){const N=u=k(_),V=c.value,re=_.state,Ie=_.force,ee=_.replace===!0,d=Te(N);if(d)return Ce(le(P(d),{state:typeof d=="object"?le({},re,d.state):re,force:Ie,replace:ee}),O||N);const p=N;p.redirectedFrom=O;let m;return!Ie&&c0(s,V,N)&&(m=Cs(16,{to:p,from:V}),kn(V,V,!0,!1)),(m?Promise.resolve(m):ye(p,V)).catch(v=>jt(v)?jt(v,2)?v:yt(v):pe(v,p,V)).then(v=>{if(v){if(jt(v,2))return Ce(le({replace:ee},P(v.to),{state:typeof v.to=="object"?le({},re,v.to.state):re,force:Ie}),O||p)}else v=je(p,V,!0,ee,re);return de(p,V,v),v})}function J(_,O){const N=x(_,O);return N?Promise.reject(N):Promise.resolve()}function ye(_,O){let N;const[V,re,Ie]=oT(_,O);N=Ia(V.reverse(),"beforeRouteLeave",_,O);for(const d of V)d.leaveGuards.forEach(p=>{N.push(cn(p,_,O))});const ee=J.bind(null,_,O);return N.push(ee),is(N).then(()=>{N=[];for(const d of i.list())N.push(cn(d,_,O));return N.push(ee),is(N)}).then(()=>{N=Ia(re,"beforeRouteUpdate",_,O);for(const d of re)d.updateGuards.forEach(p=>{N.push(cn(p,_,O))});return N.push(ee),is(N)}).then(()=>{N=[];for(const d of _.matched)if(d.beforeEnter&&!O.matched.includes(d))if(kt(d.beforeEnter))for(const p of d.beforeEnter)N.push(cn(p,_,O));else N.push(cn(d.beforeEnter,_,O));return N.push(ee),is(N)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),N=Ia(Ie,"beforeRouteEnter",_,O),N.push(ee),is(N))).then(()=>{N=[];for(const d of o.list())N.push(cn(d,_,O));return N.push(ee),is(N)}).catch(d=>jt(d,8)?d:Promise.reject(d))}function de(_,O,N){for(const V of a.list())V(_,O,N)}function je(_,O,N,V,re){const Ie=x(_,O);if(Ie)return Ie;const ee=O===on,d=as?history.state:{};N&&(V||ee?r.replace(_.fullPath,le({scroll:ee&&d&&d.scroll},re)):r.push(_.fullPath,re)),c.value=_,kn(_,O,N,ee),yt()}let qe;function mt(){qe||(qe=r.listen((_,O,N)=>{if(!ci.listening)return;const V=k(_),re=Te(V);if(re){Ce(le(re,{replace:!0}),V).catch(cr);return}u=V;const Ie=c.value;as&&m0(vh(Ie.fullPath,N.delta),ko()),ye(V,Ie).catch(ee=>jt(ee,12)?ee:jt(ee,2)?(Ce(ee.to,V).then(d=>{jt(d,20)&&!N.delta&&N.type===br.pop&&r.go(-1,!1)}).catch(cr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),pe(ee,V,Ie))).then(ee=>{ee=ee||je(V,Ie,!1),ee&&(N.delta&&!jt(ee,8)?r.go(-N.delta,!1):N.type===br.pop&&jt(ee,20)&&r.go(-1,!1)),de(V,Ie,ee)}).catch(cr)}))}let Bt=Qs(),Ws=Qs(),Ae;function pe(_,O,N){yt(_);const V=Ws.list();return V.length?V.forEach(re=>re(_,O,N)):console.error(_),Promise.reject(_)}function he(){return Ae&&c.value!==on?Promise.resolve():new Promise((_,O)=>{Bt.add([_,O])})}function yt(_){return Ae||(Ae=!_,mt(),Bt.list().forEach(([O,N])=>_?N(_):O()),Bt.reset()),_}function kn(_,O,N,V){const{scrollBehavior:re}=t;if(!as||!re)return Promise.resolve();const Ie=!N&&y0(vh(_.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return Jf().then(()=>re(_,O,Ie)).then(ee=>ee&&g0(ee)).catch(ee=>pe(ee,_,O))}const vt=_=>r.go(_);let st;const ss=new Set,ci={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:A,getRoutes:w,resolve:k,options:t,push:z,replace:oe,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ws.add,isReady:he,install(_){const O=this;_.component("RouterLink",eT),_.component("RouterView",rT),_.config.globalProperties.$router=O,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(c)}),as&&!st&&c.value===on&&(st=!0,z(r.location).catch(re=>{}));const N={};for(const re in on)N[re]=dt(()=>c.value[re]);_.provide(du,O),_.provide(Cp,Lr(N)),_.provide(ac,c);const V=_.unmount;ss.add(_),_.unmount=function(){ss.delete(_),ss.size<1&&(u=on,qe&&qe(),qe=null,c.value=on,st=!1,Ae=!1),V()}}};return ci}function is(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function oT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ss(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ss(u,c))||r.push(c))}return[n,s,r]}var aT="firebase",cT="9.17.2";/**
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
 */yn(aT,cT,"app");var uT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,pu=pu||{},K=uT||self;function Yi(){}function Ro(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lT(t){return Object.prototype.hasOwnProperty.call(t,Ta)&&t[Ta]||(t[Ta]=++hT)}var Ta="closure_uid_"+(1e9*Math.random()>>>0),hT=0;function fT(t,e,n){return t.call.apply(t.bind,arguments)}function dT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=fT:Ye=dT,Ye.apply(null,arguments)}function mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var pT=0;Sn.prototype.s=!1;Sn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),pT!=0)&&lT(this)};Sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ap=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Oh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ro(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var gT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Yi,e),K.removeEventListener("test",Yi,e)}catch{}return t}();function Xi(t){return/^[\s\xa0]*$/.test(t)}var Ph=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ba(t,e){return t<e?-1:t>e?1:0}function No(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return No().indexOf(t)!=-1}function mu(t){return mu[" "](t),t}mu[" "]=Yi;function mT(t){var e=wT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yT=xt("Opera"),As=xt("Trident")||xt("MSIE"),kp=xt("Edge"),cc=kp||As,Rp=xt("Gecko")&&!(No().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),vT=No().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function Np(){var t=K.document;return t?t.documentMode:void 0}var Ji;e:{var Sa="",Ca=function(){var t=No();if(Rp)return/rv:([^\);]+)(\)|;)/.exec(t);if(kp)return/Edge\/([\d\.]+)/.exec(t);if(As)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vT)return/WebKit\/(\S+)/.exec(t);if(yT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ca&&(Sa=Ca?Ca[1]:""),As){var Aa=Np();if(Aa!=null&&Aa>parseFloat(Sa)){Ji=String(Aa);break e}}Ji=Sa}var wT={};function _T(){return mT(function(){let t=0;const e=Ph(String(Ji)).split("."),n=Ph("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ba(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ba(r[2].length==0,i[2].length==0)||ba(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var uc;if(K.document&&As){var xh=Np();uc=xh||parseInt(Ji,10)||void 0}else uc=void 0;var ET=uc;function Sr(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rp){e:{try{mu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sr.X.h.call(this)}}Be(Sr,Xe);var IT={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),TT=0;function bT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++TT,this.ba=this.ea=!1}function Do(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Dp(t){const e={};for(const n in t)e[n]=t[n];return e}const Mh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Op(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Mh.length;i++)n=Mh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Oo(t){this.src=t,this.g={},this.h=0}Oo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new bT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function lc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ap(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Do(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),ka={};function Pp(t,e,n,s,r){if(s&&s.once)return Mp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Wr]?t.N(e,n,zr(s)?!!s.capture:!!s,r):xp(t,e,n,!1,s,r)}function xp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zr(r)?!!r.capture:!!r,a=_u(t);if(a||(t[vu]=a=new Oo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ST(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)gT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Up(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ST(){function t(n){return e.call(t.src,t.listener,n)}const e=CT;return t}function Mp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Wr]?t.O(e,n,zr(s)?!!s.capture:!!s,r):xp(t,e,n,!0,s,r)}function Lp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Lp(t,e[i],n,s,r);else s=zr(s)?!!s.capture:!!s,n=Eu(n),t&&t[Wr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hc(i,n,s,r),-1<n&&(Do(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hc(e,n,s,r)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wr])lc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Up(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_u(e))?(lc(n,t),n.h==0&&(n.src=null,e[vu]=null)):Do(t)}}}function Up(t){return t in ka?ka[t]:ka[t]="on"+t}function CT(t,e){if(t.ba)t=!0;else{e=new Sr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wu(t),t=n.call(s,e)}return t}function _u(t){return t=t[vu],t instanceof Oo?t:null}var Ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[Ra]||(t[Ra]=function(e){return t.handleEvent(e)}),t[Ra])}function Fe(){Sn.call(this),this.i=new Oo(this),this.P=this,this.I=null}Be(Fe,Sn);Fe.prototype[Wr]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){Lp(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),Op(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=yi(o,s,!0,e)&&r}if(o=e.g=t,r=yi(o,s,!0,e)&&r,r=yi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=yi(o,s,!1,e)&&r}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Do(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Iu=K.JSON.stringify;function AT(){var t=$p;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kT{constructor(){this.h=this.g=null}add(e,n){const s=Fp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RT,t=>t.reset());class RT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NT(t){K.setTimeout(()=>{throw t},0)}function Vp(t,e){fc||DT(),dc||(fc(),dc=!0),$p.add(t,e)}var fc;function DT(){var t=K.Promise.resolve(void 0);fc=function(){t.then(OT)}}var dc=!1,$p=new kT;function OT(){for(var t;t=AT();){try{t.h.call(t.g)}catch(n){NT(n)}var e=Fp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dc=!1}function Po(t,e){Fe.call(this),this.h=t||1,this.g=e||K,this.j=Ye(this.lb,this),this.l=Date.now()}Be(Po,Fe);U=Po.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(Tu(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Po.X.M.call(this),Tu(this),delete this.g};function bu(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Bp(t){t.g=bu(()=>{t.g=null,t.i&&(t.i=!1,Bp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PT extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(t){Sn.call(this),this.h=t,this.g={}}Be(Cr,Sn);var Lh=[];function jp(t,e,n,s){Array.isArray(n)||(n&&(Lh[0]=n.toString()),n=Lh);for(var r=0;r<n.length;r++){var i=Pp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qp(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}Cr.prototype.M=function(){Cr.X.M.call(this),qp(this)};Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function xT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function MT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UT(t,n)+(s?" "+s:"")})}function LT(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function UT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Iu(n)}catch{return e}}var Zn={},Uh=null;function Mo(){return Uh=Uh||new Fe}Zn.Pa="serverreachability";function Hp(t){Xe.call(this,Zn.Pa,t)}Be(Hp,Xe);function Ar(t){const e=Mo();$e(e,new Hp(e))}Zn.STAT_EVENT="statevent";function Kp(t,e){Xe.call(this,Zn.STAT_EVENT,t),this.stat=e}Be(Kp,Xe);function nt(t){const e=Mo();$e(e,new Kp(e,t))}Zn.Qa="timingevent";function zp(t,e){Xe.call(this,Zn.Qa,t),this.size=e}Be(zp,Xe);function Gr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Lo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Su(){}Su.prototype.h=null;function Fh(t){return t.h||(t.h=t.i())}function Gp(){}var Qr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cu(){Xe.call(this,"d")}Be(Cu,Xe);function Au(){Xe.call(this,"c")}Be(Au,Xe);var pc;function Uo(){}Be(Uo,Su);Uo.prototype.g=function(){return new XMLHttpRequest};Uo.prototype.i=function(){return{}};pc=new Uo;function Yr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Cr(this),this.O=FT,t=cc?125:void 0,this.T=new Po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var FT=45e3,gc={},Zi={};U=Yr.prototype;U.setTimeout=function(t){this.O=t};function mc(t,e,n){t.K=1,t.v=Vo(Xt(e)),t.s=n,t.P=!0,Yp(t,null)}function Yp(t,e){t.F=Date.now(),Xr(t),t.A=Xt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),rg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qp,t.g=Sg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new PT(Ye(t.La,t,t.g),t.N)),jp(t.S,t.g,"readystatechange",t.ib),e=t.H?Dp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ar(),xT(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Gt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=Gt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||cc||this.g&&(this.h.h||this.g.fa()||jh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ar(3):Ar(2)),Fo(this);var n=this.g.aa();this.Y=n;t:if(Xp(this)){var s=jh(this.g);t="";var r=s.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),lr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,MT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yc(this,n);else{this.i=!1,this.o=3,nt(12),Fn(this),lr(this);break e}}this.P?(Jp(this,l,o),cc&&this.i&&l==3&&(jp(this.S,this.T,"tick",this.hb),this.T.start())):(ls(this.j,this.m,o,null),yc(this,o)),l==4&&Fn(this),this.i&&!this.I&&(l==4?Eg(this.l,this):(this.i=!1,Xr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Fn(this),lr(this)}}}catch{}finally{}};function Xp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Jp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=VT(t,n),r==Zi){e==4&&(t.o=4,nt(14),s=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(r==gc){t.o=4,nt(15),ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ls(t.j,t.m,r,null),yc(t,r);Xp(t)&&r!=Zi&&r!=gc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xu(e),e.K=!0,nt(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),lr(t))}U.hb=function(){if(this.g){var t=Gt(this.g),e=this.g.fa();this.C<e.length&&(Fo(this),Jp(this,t,e),this.i&&t!=4&&Xr(this))}};function VT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Zi:(n=Number(e.substring(n,s)),isNaN(n)?gc:(s+=1,s+n>e.length?Zi:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Fn(this)};function Xr(t){t.V=Date.now()+t.O,Zp(t,t.O)}function Zp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gr(Ye(t.gb,t),e)}function Fo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(LT(this.j,this.A),this.K!=2&&(Ar(),nt(17)),Fn(this),this.o=2,lr(this)):Zp(this,this.V-t)};function lr(t){t.l.G==0||t.I||Eg(t.l,t)}function Fn(t){Fo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tu(t.T),qp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vc(n.h,t))){if(!t.J&&vc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)no(n),jo(n);else break e;Pu(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Gr(Ye(n.cb,n),6e3));if(1>=ag(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&no(n),!Xi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ku(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,_e(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=bg(s,s.H?s.ka:null,s.V),o.J){cg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Fo(a),Xr(a)),s.g=o}else wg(s);0<n.i.length&&qo(n)}else u[0]!="stop"&&u[0]!="close"||Vn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vn(n,7):Ou(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ar(4)}catch{}}function $T(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ro(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function BT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ro(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function eg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ro(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BT(t),s=$T(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Hn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hn){this.h=e!==void 0?e:t.h,eo(this,t.j),this.s=t.s,this.g=t.g,to(this,t.m),this.l=t.l,e=t.i;var n=new kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vh(this,n),this.o=t.o}else t&&(n=String(t).match(tg))?(this.h=!!e,eo(this,n[1]||"",!0),this.s=er(n[2]||""),this.g=er(n[3]||"",!0),to(this,n[4]),this.l=er(n[5]||"",!0),Vh(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.h=!!e,this.i=new kr(null,this.h))}Hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,$h,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,$h,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?KT:HT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,WT)),t.join("")};function Xt(t){return new Hn(t)}function eo(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function to(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vh(t,e,n){e instanceof kr?(t.i=e,GT(t.i,t.h)):(n||(e=tr(e,zT)),t.i=new kr(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Vo(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $h=/[#\/\?@]/g,HT=/[#\?:]/g,KT=/[#\?]/g,zT=/[#\?@]/g,WT=/#/g;function kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cn(t){t.g||(t.g=new Map,t.h=0,t.i&&jT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=kr.prototype;U.add=function(t,e){Cn(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ng(t,e){Cn(t),e=Bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sg(t,e){return Cn(t),e=Bs(t,e),t.g.has(e)}U.forEach=function(t,e){Cn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Cn(this);let e=[];if(typeof t=="string")sg(this,t)&&(e=e.concat(this.g.get(Bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Cn(this),this.i=null,t=Bs(this,t),sg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rg(t,e,n){ng(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),gu(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GT(t,e){e&&!t.j&&(Cn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ng(this,s),rg(this,r,n))},t)),t.j=e}var QT=class{constructor(e,n){this.h=e,this.g=n}};function ig(t){this.l=t||YT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YT=10;function og(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ag(t){return t.h?1:t.g?t.g.size:0}function vc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ku(t,e){t.g?t.g.add(e):t.h=e}function cg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ig.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ug(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gu(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function XT(){this.g=new Ru}function JT(t,e,n){const s=n||"";try{eg(t,function(r,i){let o=r;zr(r)&&(o=Iu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZT(t,e){const n=new xo;if(K.Image){const s=new Image;s.onload=mi(vi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=mi(vi,n,s,"TestLoadImage: error",!1,e),s.onabort=mi(vi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=mi(vi,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Jr(t){this.l=t.ac||null,this.j=t.jb||!1}Be(Jr,Su);Jr.prototype.g=function(){return new $o(this.l,this.j)};Jr.prototype.i=function(t){return function(){return t}}({});function $o(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be($o,Fe);var Nu=0;U=$o.prototype;U.open=function(t,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=Nu};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zr(this):Rr(this),this.readyState==3&&lg(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Zr(this))};U.Ua=function(t){this.g&&(this.response=t,Zr(this))};U.ga=function(){this.g&&Zr(this)};function Zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eb=K.JSON.parse;function be(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hg,this.K=this.L=!1}Be(be,Fe);var hg="",tb=/^https?$/i,nb=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pc.g(),this.C=this.u?Fh(this.u):Fh(pc),this.g.onreadystatechange=Ye(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=Ap(nb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pg(this),0<this.B&&((this.K=sb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.qa,this)):this.A=bu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bh(this,i)}};function sb(t){return As&&_T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Bh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fg(t),Bo(t)}function fg(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),Bo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bo(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?dg(this):this.fb())};U.fb=function(){dg(this)};function dg(t){if(t.h&&typeof pu<"u"&&(!t.C[1]||Gt(t)!=4||t.aa()!=2)){if(t.v&&Gt(t)==4)bu(t.Ha,0,t);else if($e(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(tg)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!tb.test(r?r.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<Gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fg(t)}}finally{Bo(t)}}}}function Bo(t,e){if(t.g){pg(t);const n=t.g,s=t.C[0]?Yi:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function pg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Gt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eb(e)}};function jh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gg(t){let e="";return yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Du(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mg(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ig(t&&t.concurrentRequestLimit),this.Fa=new XT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=mg.prototype;U.ma=8;U.G=1;function Ou(t){if(yg(t),t.G==3){var e=t.U++,n=Xt(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),ei(t,n),e=new Yr(t,t.j,e,void 0),e.K=2,e.v=Vo(Xt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xr(e)}Tg(t)}function jo(t){t.g&&(xu(t),t.g.cancel(),t.g=null)}function yg(t){jo(t),t.u&&(K.clearTimeout(t.u),t.u=null),no(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function qo(t){og(t.h)||t.m||(t.m=!0,Vp(t.Ja,t),t.C=0)}function rb(t,e){return ag(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Gr(Ye(t.Ja,t,e),Ig(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Yr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Dp(i),Op(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vg(this,r,e),n=Xt(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),ei(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(gg(i)))+"&"+e:this.o&&Du(n,this.o,i)),ku(this.h,r),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),r.Z=!0,mc(r,n,null)):mc(r,n,e),this.G=2}}else this.G==3&&(t?qh(this,t):this.i.length==0||og(this.h)||qh(this))};function qh(t,e){var n;e?n=e.m:n=t.U++;const s=Xt(t.F);_e(s,"SID",t.I),_e(s,"RID",n),_e(s,"AID",t.T),ei(t,s),t.o&&t.s&&Du(s,t.o,t.s),n=new Yr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ku(t.h,n),mc(n,s,e)}function ei(t,e){t.ia&&yu(t.ia,function(n,s){_e(e,s,n)}),t.l&&eg({},function(n,s){_e(e,s,n)})}function vg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ye(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{JT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function wg(t){t.g||t.u||(t.Z=1,Vp(t.Ia,t),t.A=0)}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Gr(Ye(t.Ia,t),Ig(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,_g(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gr(Ye(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),jo(this),_g(this))};function xu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function _g(t){t.g=new Yr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Xt(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),ei(t,e),t.o&&t.s&&Du(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vo(Xt(e)),n.s=null,n.P=!0,Yp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,jo(this),Pu(this),nt(19))};function no(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Eg(t,e){var n=null;if(t.g==e){no(t),xu(t),t.g=null;var s=2}else if(vc(t.h,e))n=e.D,cg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Mo(),$e(s,new zp(s,n)),qo(t)}else wg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&rb(t,e)||s==2&&Pu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function Ig(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ye(t.kb,t);n||(n=new Hn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||eo(n,"https"),Vo(n)),ZT(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),Tg(t),yg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Tg(t){if(t.G=0,t.la=[],t.l){const e=ug(t.h);(e.length!=0||t.i.length!=0)&&(Oh(t.la,e),Oh(t.la,t.i),t.h.i.length=0,gu(t.i),t.i.length=0),t.l.ua()}}function bg(t,e,n){var s=n instanceof Hn?Xt(n):new Hn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),to(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Hn(null,void 0);s&&eo(i,s),e&&(i.g=e),r&&to(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&_e(s,n,e),_e(s,"VER",t.ma),ei(t,s),s}function Sg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new Jr({jb:!0})):new be(t.ra),e.Ka(t.H),e}function Cg(){}U=Cg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function so(){if(As&&!(10<=Number(ET)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Fe.call(this),this.g=new mg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Be(ht,Fe);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=bg(t,null,t.V),qo(t)};ht.prototype.close=function(){Ou(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Iu(t),t=n);e.i.push(new QT(e.ab++,t)),e.G==3&&qo(e)};ht.prototype.M=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,ht.X.M.call(this)};function Ag(t){Cu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Ag,Cu);function kg(){Au.call(this),this.status=1}Be(kg,Au);function js(t){this.g=t}Be(js,Cg);js.prototype.xa=function(){$e(this.g,"a")};js.prototype.wa=function(t){$e(this.g,new Ag(t))};js.prototype.va=function(t){$e(this.g,new kg)};js.prototype.ua=function(){$e(this.g,"b")};so.prototype.createWebChannel=so.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Lo.NO_ERROR=0;Lo.TIMEOUT=8;Lo.HTTP_ERROR=6;Wp.COMPLETE="complete";Gp.EventType=Qr;Qr.OPEN="a";Qr.CLOSE="b";Qr.ERROR="c";Qr.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var ib=function(){return new so},ob=function(){return Mo()},Na=Lo,ab=Wp,cb=Zn,Hh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ub=Jr,wi=Gp,lb=be;const Kh="@firebase/firestore";/**
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
 */const Xn=new Zc("@firebase/firestore");function zh(){return Xn.logLevel}function F(t,...e){if(Xn.logLevel<=ce.DEBUG){const n=e.map(Mu);Xn.debug(`Firestore (${qs}): ${t}`,...n)}}function Jt(t,...e){if(Xn.logLevel<=ce.ERROR){const n=e.map(Mu);Xn.error(`Firestore (${qs}): ${t}`,...n)}}function wc(t,...e){if(Xn.logLevel<=ce.WARN){const n=e.map(Mu);Xn.warn(`Firestore (${qs}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */class Rg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new Rg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new He(e)}}class pb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class gb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new pb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new mb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ng{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=vb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Nr{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const wb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Nr{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return wb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(we.fromString(e))}static fromName(e){return new $(we.fromString(e).popFirst(5))}static empty(){return new $(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new we(e.slice()))}}function _b(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new In(r,$.empty(),e)}function Eb(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new In(Q.min(),$.empty(),-1)}static max(){return new In(Q.max(),$.empty(),-1)}}function Ib(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ti(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Tb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Lu.at=-1;/**
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
 */class Sb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Dr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Wh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Ho(t){return t==null}function ro(t){return t===0&&1/t==-1/0}function Cb(t){return typeof t=="number"&&Number.isInteger(t)&&!ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ab extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Ab("Invalid base64 string: "+r):r}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(me(!!t),typeof t=="string"){let e=0;const n=kb.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function Og(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return Og(e)?Pg(e):e}function Or(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */const _i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Og(t)?4:Rb(t)?9007199254740991:10:H()}function $t(t,e){if(t===e)return!0;const n=Jn(t);if(n!==Jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Or(t).isEqual(Or(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Rs(s.bytesValue).isEqual(Rs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ne(s.geoPointValue.latitude)===Ne(r.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ne(s.integerValue)===Ne(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ne(s.doubleValue),o=Ne(r.doubleValue);return i===o?ro(i)===ro(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wh(i)!==Wh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Pr(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Jn(t),s=Jn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ne(r.integerValue||r.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gh(t.timestampValue,e.timestampValue);case 4:return Gh(Or(t),Or(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Rs(r),a=Rs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Ne(r.latitude),Ne(i.latitude));return o!==0?o:ue(Ne(r.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ns(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===_i.mapValue&&i===_i.mapValue)return 0;if(r===_i.mapValue)return 1;if(i===_i.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const f=Ns(o[a[l]],c[u[l]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Gh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Tn(t),s=Tn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ds(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_c(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_c(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Qh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ec(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function Yh(t){return!!t&&"nullValue"in t}function Xh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xi(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class io{constructor(e,n){this.position=e,this.inclusive=n}}function Jh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xg{}class De extends xg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Db(e,n,s):n==="array-contains"?new xb(e,s):n==="in"?new Mb(e,s):n==="not-in"?new Lb(e,s):n==="array-contains-any"?new Ub(e,s):new De(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Ob(e,s):new Pb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Jn(this.value)===Jn(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends xg{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Rt(e,n)}matches(e){return Mg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Mg(t){return t.op==="and"}function Lg(t){return Nb(t)&&Mg(t)}function Nb(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function Ic(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Lg(t))return t.filters.map(e=>Ic(e)).join(",");{const e=t.filters.map(n=>Ic(n)).join(",");return`${t.op}(${e})`}}function Ug(t,e){return t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(t,e):t instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ug(i,s.filters[o]),!0):!1}(t,e):void H()}function Fg(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${Ds(e.value)}`}(t):t instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fg).join(" ,")+"}"}(t):"Filter"}class Db extends De{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ob extends De{constructor(e,n){super(e,"in",n),this.keys=Vg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pb extends De{constructor(e,n){super(e,"not-in",n),this.keys=Vg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class xb extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&Pr(n.arrayValue,this.value)}}class Mb extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class Lb extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class Ub extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pr(this.value.arrayValue,s))}}/**
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
 */class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ef(this.data.getIterator())}getIteratorFrom(e){return new ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=We.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){es(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new it(hr(this.value))}}function $g(t){const e=[];return es(t.fields,(n,s)=>{const r=new We([n]);if(xi(s)){const i=$g(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new lt(e)}/**
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
 */class Vb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function tf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Vb(t,e,n,s,r,i,o)}function Fu(t){const e=Y(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ic(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ho(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),e._t=n}return e._t}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ug(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zh(t.startAt,e.startAt)&&Zh(t.endAt,e.endAt)}function Tc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function $b(t,e,n,s,r,i,o,a){return new Hs(t,e,n,s,r,i,o,a)}function $u(t){return new Hs(t)}function nf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ko(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Bg(t){return t.collectionGroup!==null}function _s(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=Ko(e),s=Bu(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ws(n)),e.wt.push(new ws(We.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ws(We.keyField(),i))}}}return e.wt}function Zt(t){const e=Y(t);if(!e.gt)if(e.limitType==="F")e.gt=tf(e.path,e.collectionGroup,_s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of _s(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ws(i.field,o))}const s=e.endAt?new io(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new io(e.startAt.position,e.startAt.inclusive):null;e.gt=tf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function bc(t,e){e.getFirstInequalityField(),Ko(t);const n=t.filters.concat([e]);return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new Hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zo(t,e){return Vu(Zt(t),Zt(e))&&t.limitType===e.limitType}function jg(t){return`${Fu(Zt(t))}|lt:${t.limitType}`}function Cc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fg(s)).join(", ")}]`),Ho(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ds(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ds(s)).join(",")),`Target(${n})`}(Zt(t))}; limitType=${t.limitType})`}function Wo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of _s(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Jh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,_s(n),s)||n.endAt&&!function(r,i,o){const a=Jh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,_s(n),s))}(t,e)}function Bb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qg(t){return(e,n)=>{let s=!1;for(const r of _s(t)){const i=jb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function jb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ns(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
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
 */function Hg(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function Kg(t){return{integerValue:""+t}}function qb(t,e){return Cb(e)?Kg(e):Hg(t,e)}/**
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
 */class Go{constructor(){this._=void 0}}function Hb(t,e,n){return t instanceof oo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof xr?Wg(t,e):t instanceof Mr?Gg(t,e):function(s,r){const i=zg(s,r),o=sf(i)+sf(s.It);return Ec(i)&&Ec(s.It)?Kg(o):Hg(s.Tt,o)}(t,e)}function Kb(t,e,n){return t instanceof xr?Wg(t,e):t instanceof Mr?Gg(t,e):n}function zg(t,e){return t instanceof ao?Ec(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class oo extends Go{}class xr extends Go{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Qg(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class Mr extends Go{constructor(e){super(),this.elements=e}}function Gg(t,e){let n=Qg(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class ao extends Go{constructor(e,n){super(),this.Tt=e,this.It=n}}function sf(t){return Ne(t.integerValue||t.doubleValue)}function Qg(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof xr&&s instanceof xr||n instanceof Mr&&s instanceof Mr?ks(n.elements,s.elements,$t):n instanceof ao&&s instanceof ao?$t(n.It,s.It):n instanceof oo&&s instanceof oo}(t.transform,e.transform)}class Wb{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qo{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,At.none()):new si(t.key,t.data,At.none());{const n=t.data,s=it.empty();let r=new Pe(We.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new An(t.key,s,new lt(r.toArray()),At.none())}}function Gb(t,e,n){t instanceof si?function(s,r,i){const o=s.value.clone(),a=of(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof An?function(s,r,i){if(!Mi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=of(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fr(t,e,n,s){return t instanceof si?function(r,i,o,a){if(!Mi(r.precondition,i))return o;const c=r.value.clone(),u=af(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof An?function(r,i,o,a){if(!Mi(r.precondition,i))return o;const c=af(r.fieldTransforms,a,i),u=i.data;return u.setAll(Xg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Mi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Qb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=zg(s.transform,r||null);i!=null&&(n===null&&(n=it.empty()),n.set(s.field,i))}return n||null}function rf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ks(n,s,(r,i)=>zb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class si extends Qo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class An extends Qo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function of(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Kb(o,a,n[r]))}return s}function af(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Hb(i,o,e))}return s}class ju extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yb extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xb{constructor(e){this.count=e}}/**
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
 */var Re,se;function Jb(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Jg(t){if(t===void 0)return Jt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Re.OK:return E.OK;case Re.CANCELLED:return E.CANCELLED;case Re.UNKNOWN:return E.UNKNOWN;case Re.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Re.INTERNAL:return E.INTERNAL;case Re.UNAVAILABLE:return E.UNAVAILABLE;case Re.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Re.NOT_FOUND:return E.NOT_FOUND;case Re.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Re.ABORTED:return E.ABORTED;case Re.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Re.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(se=Re||(Re={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Dg(this.inner)}size(){return this.innerSize}}/**
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
 */const Zb=new Me($.comparator);function en(){return Zb}const Zg=new Me($.comparator);function nr(...t){let e=Zg;for(const n of t)e=e.insert(n.key,n);return e}function em(t){let e=Zg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $n(){return dr()}function tm(){return dr()}function dr(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const eS=new Me($.comparator),tS=new Pe($.comparator);function ne(...t){let e=tS;for(const n of t)e=e.add(n);return e}const nS=new Pe(ue);function nm(){return nS}/**
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
 */class Yo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yo(Q.min(),r,nm(),en(),ne())}}class ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ri(s,n,ne(),ne(),ne())}}/**
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
 */class Li{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class sm{constructor(e,n){this.targetId=e,this.Rt=n}}class rm{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class cf{constructor(){this.bt=0,this.vt=lf(),this.Pt=et.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=ne(),n=ne(),s=ne();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new ri(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=lf()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class sS{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=en(),this.Kt=uf(),this.Gt=new Pe(ue)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Tc(i))if(s===0){const o=new $(i.path);this.zt(n,o,Ke.newNoDocument(o,Q.min()))}else me(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Tc(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ke.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ne();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Yo(e,n,this.Gt,this.Ut,s);return this.Ut=en(),this.Kt=uf(),this.Gt=new Pe(ue),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new cf,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Pe(ue),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new cf),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function uf(){return new Me($.comparator)}function lf(){return new Me($.comparator)}/**
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
 */const rS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oS=(()=>({and:"AND",or:"OR"}))();class aS{constructor(e,n){this.databaseId=e,this.yt=n}}function co(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function im(t,e){return t.yt?e.toBase64():e.toUint8Array()}function cS(t,e){return co(t,e.toTimestamp())}function Ft(t){return me(!!t),Q.fromTimestamp(function(e){const n=Tn(e);return new Oe(n.seconds,n.nanos)}(t))}function qu(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function om(t){const e=we.fromString(t);return me(lm(e)),e}function Ac(t,e){return qu(t.databaseId,e.path)}function Da(t,e){const n=om(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(am(n))}function kc(t,e){return qu(t.databaseId,e)}function uS(t){const e=om(t);return e.length===4?we.emptyPath():am(e)}function Rc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function am(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hf(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function lS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(me(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Jg(c.code);return new M(u,c.message||"")}(o);n=new rm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Da(t,s.document.name),i=Ft(s.document.updateTime),o=s.document.createTime?Ft(s.document.createTime):Q.min(),a=new it({mapValue:{fields:s.document.fields}}),c=Ke.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Li(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Da(t,s.document),i=s.readTime?Ft(s.readTime):Q.min(),o=Ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Li([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Da(t,s.document),i=s.removedTargetIds||[];n=new Li([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Xb(r),o=s.targetId;n=new sm(o,i)}}return n}function hS(t,e){let n;if(e instanceof si)n={update:hf(t,e.key,e.value)};else if(e instanceof ju)n={delete:Ac(t,e.key)};else if(e instanceof An)n={update:hf(t,e.key,e.data),updateMask:_S(e.fieldMask)};else{if(!(e instanceof Yb))return H();n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof oo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:i.field.canonicalString(),increment:o.It};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function fS(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(Q.min())&&(i=Ft(r)),new Wb(i,s.transformResults||[])}(n,e))):[]}function dS(t,e){return{documents:[kc(t,e.path)]}}function pS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=kc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return um(Rt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:cs(l.field),direction:yS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Ho(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function gS(t){let e=uS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=cm(l);return h instanceof Rt&&Lg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ws(us(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ho(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new io(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new io(f,h)}(n.endAt)),$b(e,r,o,i,a,"F",c,u)}function mS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=us(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=us(e.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=us(e.unaryFilter.field);return De.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=us(e.unaryFilter.field);return De.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return De.create(us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>cm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function yS(t){return rS[t]}function vS(t){return iS[t]}function wS(t){return oS[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return We.fromServerFormat(t.fieldPath)}function um(t){return t instanceof De?function(e){if(e.op==="=="){if(Xh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NAN"}};if(Yh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NAN"}};if(Yh(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(e.field),op:vS(e.op),value:e.value}}}(t):t instanceof Rt?function(e){const n=e.getFilters().map(s=>um(s));return n.length===1?n[0]:{compositeFilter:{op:wS(e.op),filters:n}}}(t):H()}function _S(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ES{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Gb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Yg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,s)=>rf(n,s))&&ks(this.baseMutations,e.baseMutations,(n,s)=>rf(n,s))}}class Hu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=eS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hu(e,n,s,r)}}/**
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
 */class IS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TS{constructor(e){this.oe=e}}function bS(t){const e=gS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class SS{constructor(){this.Ze=new CS}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(In.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class CS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(we.comparator)).toArray()}}/**
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
 */class AS{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fr(s.mutation,r,lt.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$n();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=en();const o=dr(),a=dr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof An)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),fr(l.mutation,u,l.mutation.getFieldMask(),Oe.now())):o.set(u.key,lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new kS(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=dr();let r=new Me((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||lt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tm();l.forEach(f=>{if(!i.has(f)){const g=Yg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve($n());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:em(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new Hs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ke.newInvalidDocument(u)))});let o=nr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&fr(u.mutation,c,lt.empty(),Oe.now()),Wo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class NS{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:bS(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),b.resolve()}}/**
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
 */class DS{constructor(){this.overlays=new Me($.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$n();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=$n(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=$n(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=$n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new IS(n,s));let i=this.ss.get(n);i===void 0&&(i=ne(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class Ku{constructor(){this.rs=new Pe(Le.os),this.us=new Pe(Le.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Le(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Le(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new $(new we([])),s=new Le(n,e),r=new Le(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new $(new we([])),s=new Le(n,e),r=new Le(n,e+1);let i=ne();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return $.comparator(e.key,n.key)||ue(e.gs,n.gs)}static cs(e,n){return ue(e.gs,n.gs)||$.comparator(e.key,n.key)}}/**
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
 */class OS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Pe(Le.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ES(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ue);return n.forEach(r=>{const i=new Le(r,0),o=new Le(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Le(new $(i),0);let a=new Pe(ue);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,r=>{const i=new Le(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Le(n,0),r=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PS{constructor(e){this.Rs=e,this.docs=new Me($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=en();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=en();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ib(Eb(l),s)<=0||(r.has(l.key)||Wo(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){H()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xS(this)}getSize(e){return b.resolve(this.size)}}class xS extends AS{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class MS{constructor(e){this.persistence=e,this.vs=new Ks(n=>Fu(n),Vu),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Ku,this.targetCount=0,this.Ss=Os.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
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
 */class LS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Lu(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new MS(this),this.indexManager=new SS,this.remoteDocumentCache=function(s){return new PS(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new TS(n),this.Os=new NS(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new OS(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new US(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class US extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.Bs=new Ku,this.Ls=null}static qs(e){return new zu(e)}get Us(){if(this.Ls)return this.Ls;throw H()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const r=$.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class Wu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wu(e,n.fromCache,s,r)}}/**
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
 */class FS{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(nf(n))return b.resolve(null);let s=Zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sc(n,null,"F"),s=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(e,Sc(n,null,"F")):this.qi(e,u,n,c)}))})))}Fi(e,n,s,r){return nf(n)||r.isEqual(Q.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(zh()<=ce.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cc(n)),this.qi(e,o,n,_b(r,-1)))})}Bi(e,n){let s=new Pe(qg(e));return n.forEach((r,i)=>{Wo(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return zh()<=ce.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Cc(n)),this.Oi.getDocumentsMatchingQuery(e,n,In.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class VS{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Me(ue),this.Gi=new Ks(i=>Fu(i),Vu),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RS(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function $S(t,e,n,s){return new VS(t,e,n,s)}async function hm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function BS(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const w=c.docVersions.get(g);me(w!==null),y.version.compareTo(w)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function fm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function jS(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(et.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,w,A){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=en(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(qS(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(Q.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function qS(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=en();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function HS(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function KS(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new zn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Nc(t,e,n){const s=Y(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ni(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function ff(t,e,n){const s=Y(t);let r=Q.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Gi.get(u);return h!==void 0?b.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,Zt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:ne())).next(a=>(zS(s,Bb(e),a),{documents:a,Yi:i})))}function zS(t,e,n){let s=t.Qi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class df{constructor(){this.activeTargetIds=nm()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WS{constructor(){this.Ur=new df,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new df,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GS{Gr(e){}shutdown(){}}/**
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
 */class pf{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class XS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);F("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw wc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=QS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new lb;a.setWithCredentials(!0),a.listenOnce(ab.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Na.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Na.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(f.status);o(new M(g,f.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ib(),o=ob(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ub({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new YS({Yr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,w,A)=>{y.listen(w,k=>{try{A(k)}catch(P){setTimeout(()=>{throw P},0)}})};return g(u,wi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(u,wi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.oo())}),g(u,wi.EventType.ERROR,y=>{h||(h=!0,wc("Connection","WebChannel transport errored:",y),f.oo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,wi.EventType.MESSAGE,y=>{var w;if(!h){const A=y.data[0];me(!!A);const k=A,P=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(P){F("Connection","WebChannel received error:",P);const x=P.status;let z=function(Te){const Ce=Re[Te];if(Ce!==void 0)return Jg(Ce)}(x),oe=P.message;z===void 0&&(z=E.INTERNAL,oe="Unknown error status: "+x+" with message "+P.message),h=!0,f.oo(new M(z,oe)),u.close()}else F("Connection","WebChannel received:",A),f.uo(A)}}),g(o,cb.STAT_EVENT,y=>{y.stat===Hh.PROXY?F("Connection","Detected buffering proxy"):y.stat===Hh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function Oa(){return typeof document<"u"?document:null}/**
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
 */function Xo(t){return new aS(t,!0)}/**
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
 */class dm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class pm{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new dm(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JS extends pm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=lS(this.Tt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Ft(i.readTime):Q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Rc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Tc(a)?{documents:dS(r,a)}:{query:pS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=im(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=co(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=mS(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Rc(this.Tt),n.removeTarget=e,this.qo(n)}}class ZS extends pm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=fS(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.eu(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Rc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>hS(this.Tt,s))};this.qo(n)}}/**
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
 */class eC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class tC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class nC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{ts(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.mu.add(4),await ii(c),c.pu.set("Unknown"),c.mu.delete(4),await Jo(c)}(this))})}),this.pu=new tC(s,r)}}async function Jo(t){if(ts(t))for(const e of t.gu)await e(!0)}async function ii(t){for(const e of t.gu)await e(!1)}function gm(t,e){const n=Y(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Yu(n)?Qu(n):zs(n).Mo()&&Gu(n,e))}function mm(t,e){const n=Y(t),s=zs(n);n.wu.delete(e),s.Mo()&&ym(n,e),n.wu.size===0&&(s.Mo()?s.Bo():ts(n)&&n.pu.set("Unknown"))}function Gu(t,e){t.Iu.Ft(e.targetId),zs(t).Jo(e)}function ym(t,e){t.Iu.Ft(e),zs(t).Yo(e)}function Qu(t){t.Iu=new sS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),zs(t).start(),t.pu.au()}function Yu(t){return ts(t)&&!zs(t).Oo()&&t.wu.size>0}function ts(t){return Y(t).mu.size===0}function vm(t){t.Iu=void 0}async function sC(t){t.wu.forEach((e,n)=>{Gu(t,e)})}async function rC(t,e){vm(t),Yu(t)?(t.pu.fu(e),Qu(t)):t.pu.set("Unknown")}async function iC(t,e,n){if(t.pu.set("Online"),e instanceof rm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uo(t,s)}else if(e instanceof Li?t.Iu.Qt(e):e instanceof sm?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Q.min()))try{const s=await fm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),ym(r,a);const u=new zn(c.target,a,1,c.sequenceNumber);Gu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await uo(t,s)}}async function uo(t,e,n){if(!ni(e))throw e;t.mu.add(1),await ii(t),t.pu.set("Offline"),n||(n=()=>fm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Jo(t)})}function wm(t,e){return e().catch(n=>uo(t,n,e))}async function Zo(t){const e=Y(t),n=bn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;oC(e);)try{const r=await HS(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,aC(e,r)}catch(r){await uo(e,r)}_m(e)&&Em(e)}function oC(t){return ts(t)&&t._u.length<10}function aC(t,e){t._u.push(e);const n=bn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function _m(t){return ts(t)&&!bn(t).Oo()&&t._u.length>0}function Em(t){bn(t).start()}async function cC(t){bn(t).su()}async function uC(t){const e=bn(t);for(const n of t._u)e.tu(n.mutations)}async function lC(t,e,n){const s=t._u.shift(),r=Hu.from(s,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Zo(t)}async function hC(t,e){e&&bn(t).Xo&&await async function(n,s){if(r=s.code,Jb(r)&&r!==E.ABORTED){const i=n._u.shift();bn(n).$o(),await wm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(n)}var r}(t,e),_m(t)&&Em(t)}async function gf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=ts(n);n.mu.add(3),await ii(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Jo(n)}async function fC(t,e){const n=Y(t);e?(n.mu.delete(2),await Jo(n)):e||(n.mu.add(2),await ii(n),n.pu.set("Unknown"))}function zs(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.ru(),new JS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:sC.bind(null,t),no:rC.bind(null,t),Ho:iC.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Yu(t)?Qu(t):t.pu.set("Unknown")):(await t.Tu.stop(),vm(t))})),t.Tu}function bn(t){return t.Eu||(t.Eu=function(e,n,s){const r=Y(e);return r.ru(),new ZS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:cC.bind(null,t),no:hC.bind(null,t),nu:uC.bind(null,t),eu:lC.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Zo(t)):(await t.Eu.stop(),t._u.length>0&&(F("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Xu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),ni(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mf{constructor(){this.Au=new Me($.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):H():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ps{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,Es.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class dC{constructor(){this.bu=void 0,this.listeners=[]}}class pC{constructor(){this.queries=new Ks(e=>jg(e),zo),this.onlineState="Unknown",this.vu=new Set}}async function gC(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new dC),r)try{i.bu=await n.onListen(s)}catch(o){const a=Ju(o,`Initialization of query '${Cc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Zu(n)}async function mC(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function yC(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Zu(n)}function vC(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zu(t){t.vu.forEach(e=>{e.next()})}class wC{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ps(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Im{constructor(e){this.key=e}}class Tm{constructor(e){this.key=e}}class _C{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ne(),this.mutatedKeys=ne(),this.ju=qg(e),this.zu=new Es(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new mf,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Wo(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;f&&g?f.data.isEqual(g.data)?y!==w&&(s.track({type:3,doc:g}),A=!0):this.Yu(f,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),A=!0):f&&!g&&(s.track({type:1,doc:f}),A=!0,(c||u)&&(a=!0)),A&&(g?(o=o.add(g),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(h)-g(f)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Ps(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new mf,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ne(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Tm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Im(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ne();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Ps.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class EC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class IC{constructor(e){this.key=e,this.ic=!1}}class TC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ks(a=>jg(a),zo),this.uc=new Map,this.cc=new Set,this.ac=new Me($.comparator),this.hc=new Map,this.lc=new Ku,this.fc={},this.dc=new Map,this._c=Os.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function bC(t,e){const n=xC(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await KS(n.localStore,Zt(e));n.isPrimaryClient&&gm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await SC(n,e,s,a==="current",o.resumeToken)}return r}async function SC(t,e,n,s,r){t.mc=(h,f,g)=>async function(y,w,A,k){let P=w.view.Hu(A);P.Li&&(P=await ff(y.localStore,w.query,!1).then(({documents:oe})=>w.view.Hu(oe,P)));const x=k&&k.targetChanges.get(w.targetId),z=w.view.applyChanges(P,y.isPrimaryClient,x);return vf(y,w.targetId,z.tc),z.snapshot}(t,h,f,g);const i=await ff(t.localStore,e,!0),o=new _C(e,i.Yi),a=o.Hu(i.documents),c=ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);vf(t,n,u.tc);const l=new EC(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function CC(t,e){const n=Y(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!zo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mm(n.remoteStore,s.targetId),Dc(n,s.targetId)}).catch(ti)):(Dc(n,s.targetId),await Nc(n.localStore,s.targetId,!0))}async function AC(t,e,n){const s=MC(t);try{const r=await function(i,o){const a=Y(i),c=Oe.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=en(),y=ne();return a.ji.getEntries(f,u).next(w=>{g=w,g.forEach((A,k)=>{k.isValidDocument()||(y=y.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{l=w;const A=[];for(const k of o){const P=Qb(k,l.get(k.key).overlayedDocument);P!=null&&A.push(new An(k.key,P,$g(P.value.mapValue),At.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,A,o)}).next(w=>{h=w;const A=w.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,w.batchId,A)})}).then(()=>({batchId:h.batchId,changes:em(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await oi(s,r.changes),await Zo(s.remoteStore)}catch(r){const i=Ju(r,"Failed to persist write");n.reject(i)}}async function bm(t,e){const n=Y(t);try{const s=await jS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?me(o.ic):r.removedDocuments.size>0&&(me(o.ic),o.ic=!1))}),await oi(n,s,e)}catch(s){await ti(s)}}function yf(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&Zu(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kC(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Me($.comparator);o=o.insert(i,Ke.newNoDocument(i,Q.min()));const a=ne().add(i),c=new Yo(Q.min(),new Map,new Pe(ue),o,a);await bm(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),el(s)}else await Nc(s.localStore,e,!1).then(()=>Dc(s,e,n)).catch(ti)}async function RC(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await BS(n.localStore,e);Cm(n,s,null),Sm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oi(n,r)}catch(r){await ti(r)}}async function NC(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(me(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Cm(s,e,n),Sm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oi(s,r)}catch(r){await ti(r)}}function Sm(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Cm(t,e,n){const s=Y(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Dc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Am(t,s)})}function Am(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(mm(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),el(t))}function vf(t,e,n){for(const s of n)s instanceof Im?(t.lc.addReference(s.key,e),DC(t,s)):s instanceof Tm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Am(t,s.key)):H()}function DC(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.cc.add(s),el(t))}function el(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new $(we.fromString(e)),s=t._c.next();t.hc.set(s,new IC(n)),t.ac=t.ac.insert(n,s),gm(t.remoteStore,new zn(Zt($u(n.path)),s,2,Lu.at))}}async function oi(t,e,n){const s=Y(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Wu.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!ni(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(s.localStore,i))}async function OC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await hm(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oi(n,s.Wi)}}function PC(t,e){const n=Y(t),s=n.hc.get(e);if(s&&s.ic)return ne().add(s.key);{let r=ne();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function xC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kC.bind(null,e),e.rc.Ho=yC.bind(null,e.eventManager),e.rc.gc=vC.bind(null,e.eventManager),e}function MC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NC.bind(null,e),e}class LC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return $S(this.persistence,new FS,e.initialUser,this.Tt)}Tc(e){return new LS(zu.qs,this.Tt)}Ic(e){return new WS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=OC.bind(null,this.syncEngine),await fC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pC}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new XS(r));var r;return function(i,o,a,c){return new eC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>yf(this.syncEngine,a,0),o=pf.C()?new pf:new GS,new nC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new TC(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ii(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class FC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class VC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=He.UNAUTHENTICATED,this.clientId=Ng.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ju(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function $C(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function BC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jC(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>gf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gf(e.remoteStore,i)),t.onlineComponents=e}async function jC(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await $C(t,new LC)),t.offlineComponents}async function km(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await BC(t,new UC)),t.onlineComponents}function qC(t){return km(t).then(e=>e.syncEngine)}async function wf(t){const e=await km(t),n=e.eventManager;return n.onListen=bC.bind(null,e.syncEngine),n.onUnlisten=CC.bind(null,e.syncEngine),n}const _f=new Map;/**
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
 */function Rm(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HC(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ef(t){if(!$.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function If(t){if($.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Tf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,HC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ta{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hb;switch(n.type){case"gapi":const s=n.client;return new gb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_f.get(e);n&&(F("ComponentProvider","Removing Datastore"),_f.delete(e),n.terminate())}(this),Promise.resolve()}}function KC(t,e,n,s={}){var r;const i=(t=vn(t,ta))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&wc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=He.MOCK_USER;else{o=Aw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new He(c)}t._authCredentials=new fb(new Rg(o,a))}}/**
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
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class ns{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class wn extends ns{constructor(e,n,s){super(e,n,$u(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new $(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function zC(t,e,...n){if(t=Ue(t),Rm("collection","path",e),t instanceof ta){const s=we.fromString(e,...n);return If(s),new wn(t,null,s)}{if(!(t instanceof ot||t instanceof wn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return If(s),new wn(t.firestore,null,s)}}function Oc(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Ng.R()),Rm("doc","path",e),t instanceof ta){const s=we.fromString(e,...n);return Ef(s),new ot(t,null,new $(s))}{if(!(t instanceof ot||t instanceof wn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Ef(s),new ot(t.firestore,t instanceof wn?t.converter:null,new $(s))}}/**
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
 */class WC{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new dm(this,"async_queue_retry"),this.Hc=()=>{const n=Oa();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Kn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ni(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Xu.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&H()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function bf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class xs extends ta{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new WC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dm(this),this._firestoreClient.terminate()}}function GC(t,e){const n=typeof t=="object"?t:Ud(),s=typeof t=="string"?t:e||"(default)",r=tu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=bw("firestore");i&&KC(r,...i)}return r}function Nm(t){return t._firestoreClient||Dm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Sb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new VC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tl{constructor(e){this._methodName=e}}/**
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
 */class nl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const QC=/^__.*__$/;class YC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,n,this.fieldTransforms):new si(e,this.data,n,this.fieldTransforms)}}class Om{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new An(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class sl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return lo(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Pm(this.ra)&&QC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class XC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Xo(e)}wa(e,n,s,r=!1){return new sl({ra:e,methodName:n,_a:s,path:We.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function rl(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new XC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JC(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);il("Data must be an object, but it was:",o,s);const a=xm(s,o);let c,u;if(i.merge)c=new lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Pc(e,h,n);if(!o.contains(f))throw new M(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Lm(l,f)||l.push(f)}c=new lt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new YC(new it(a),c,u)}class sa extends tl{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}function ZC(t,e,n,s){const r=t.wa(1,e,n);il("Data must be an object, but it was:",r,s);const i=[],o=it.empty();es(s,(c,u)=>{const l=ol(e,c,n);u=Ue(u);const h=r.ha(l);if(u instanceof sa)i.push(l);else{const f=ai(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new lt(i);return new Om(o,a,r.fieldTransforms)}function eA(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[Pc(e,s,n)],c=[r];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Pc(e,i[f])),c.push(i[f+1]);const u=[],l=it.empty();for(let f=a.length-1;f>=0;--f)if(!Lm(u,a[f])){const g=a[f];let y=c[f];y=Ue(y);const w=o.ha(g);if(y instanceof sa)u.push(g);else{const A=ai(y,w);A!=null&&(u.push(g),l.set(g,A))}}const h=new lt(u);return new Om(l,h,o.fieldTransforms)}function tA(t,e,n,s=!1){return ai(n,t.wa(s?4:3,e))}function ai(t,e){if(Mm(t=Ue(t)))return il("Unsupported field value:",e,t),xm(t,e);if(t instanceof tl)return function(n,s){if(!Pm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ai(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qb(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Oe.fromDate(n);return{timestampValue:co(s.Tt,r)}}if(n instanceof Oe){const r=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:co(s.Tt,r)}}if(n instanceof nl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ms)return{bytesValue:im(s.Tt,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ea(n)}`)}(t,e)}function xm(t,e){const n={};return Dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(s,r)=>{const i=ai(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof nl||t instanceof Ms||t instanceof ot||t instanceof tl)}function il(t,e,n){if(!Mm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ea(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Pc(t,e,n){if((e=Ue(e))instanceof na)return e._internalPath;if(typeof e=="string")return ol(t,e);throw lo("Field path arguments must be of type string or ",t,!1,void 0,n)}const nA=new RegExp("[~\\*/\\[\\]]");function ol(t,e,n){if(e.search(nA)>=0)throw lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch{throw lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function Lm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Um{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ra("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sA extends Um{data(){return super.data()}}function ra(t,e){return typeof e=="string"?ol(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
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
 */function rA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class al{}class Fm extends al{}function iA(t,e,...n){let s=[];e instanceof al&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof cl).length,o=r.filter(a=>a instanceof ia).length;if(i>1||i>0&&o>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ia extends Fm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ia(e,n,s)}_apply(e){const n=this._parse(e);return Vm(e._query,n),new ns(e.firestore,e.converter,bc(e._query,n))}_parse(e){const n=rl(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cf(l,u);const f=[];for(const g of l)f.push(Sf(a,r,g));h={arrayValue:{values:f}}}else h=Sf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cf(l,u),h=tA(o,i,l,u==="in"||u==="not-in");return De.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function oA(t,e,n){const s=e,r=ra("where",t);return ia._create(r,s,n)}class cl extends al{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Rt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Vm(i,a),i=bc(i,a)}(e._query,n),new ns(e.firestore,e.converter,bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ul extends Fm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ul(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ws(r,i);return function(a,c){if(Bu(a)===null){const u=Ko(a);u!==null&&$m(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ns(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Hs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function aA(t,e="asc"){const n=e,s=ra("orderBy",t);return ul._create(s,n)}function Sf(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!$.isDocumentKey(s))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Qh(t,new $(s))}if(n instanceof ot)return Qh(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function Cf(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vm(t,e){if(e.isInequality()){const s=Ko(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Bu(t);i!==null&&$m(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function $m(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cA{convertValue(e,n="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return es(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new nl(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);me(lm(s));const r=new Dr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Jt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function uA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class sr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bm extends Um{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ra("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ui extends Bm{data(e={}){return super.data(e)}}class lA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new sr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ui(this._firestore,this._userDataWriter,s.key,s,new sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:hA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class jm extends cA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function fA(t,e,n,...s){t=vn(t,ot);const r=vn(t.firestore,xs),i=rl(r);let o;return o=typeof(e=Ue(e))=="string"||e instanceof na?eA(i,"updateDoc",t._key,e,n,s):ZC(i,"updateDoc",t._key,e),ll(r,[o.toMutation(t._key,At.exists(!0))])}function dA(t){return ll(vn(t.firestore,xs),[new ju(t._key,At.none())])}function pA(t,e){const n=vn(t.firestore,xs),s=Oc(t),r=uA(t.converter,e);return ll(n,[JC(rl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,At.exists(!1))]).then(()=>s)}function gA(t,...e){var n,s,r;t=Ue(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof ot)u=vn(t.firestore,xs),l=$u(t._key.path),c={next:h=>{e[o]&&e[o](mA(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,ns);u=vn(h.firestore,xs),l=h._query;const f=new jm(u);c={next:g=>{e[o]&&e[o](new lA(u,f,h,g))},error:e[o+1],complete:e[o+2]},rA(t._query)}return function(h,f,g,y){const w=new FC(y),A=new wC(f,w,g);return h.asyncQueue.enqueueAndForget(async()=>gC(await wf(h),A)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>mC(await wf(h),A))}}(Nm(u),l,a,c)}function ll(t,e){return function(n,s){const r=new Kn;return n.asyncQueue.enqueueAndForget(async()=>AC(await qC(n),s,r)),r.promise}(Nm(t),e)}function mA(t,e,n){const s=n.docs.get(e._key),r=new jm(t);return new Bm(t,r,e._key,s,new sr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qs=n})(Vr),bs(new Wn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new xs(new db(n.getProvider("auth-internal")),new yb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),yn(Kh,"3.8.4",t),yn(Kh,"3.8.4","esm2017")})();const yA={apiKey:{}.VUE_APP_FIREBASE_API_KEY,authDomain:"todo-vue-a564f.firebaseapp.com",projectId:"todo-vue-a564f",storageBucket:"todo-vue-a564f.appspot.com",messagingSenderId:"165061987031",appId:"1:165061987031:web:190d3f90c296e1e86cbe92"},vA=Ld(yA),wA=GC(vA);const _A={setup(){const t=St("auth"),e=Kt([]),n=Kt(""),s=zC(wA,"todos"),r=Kt("");t.onAuthStateChanged(c=>{r.value=c?c.uid:"No user"});const i=async()=>{r.value==="No user"?window.location.href="auth":(await pA(s,{task:n.value,done:!1,date:Date.now(),authorId:r.value}),n.value="")},o=c=>{dA(Oc(s,c))},a=c=>{const u=e.value.findIndex(l=>l.id===c);fA(Oc(s,c),{done:!e.value[u].done})};return rr(r,c=>{if(c!==""){const u=iA(s,oA("authorId","==",c),aA("date","desc"));gA(u,l=>{const h=[];l.forEach(f=>{const g={id:f.id,task:f.data().task,done:f.data().done,date:f.data().date,authorId:f.data().authorId};h.push(g)}),e.value=h})}}),{todoList:e,newTodo:n,addTodo:i,deleteTodo:o,toggleTodo:a}},name:"HomePage"},EA={class:"main-container"},IA={class:"field has-addons"},TA={class:"control"},bA={class:"control"},SA=["disabled"],CA={class:"card-content"},AA={class:"content"},kA={class:"columns is-mobile is-vcentered"},RA={class:"column is-5 has-text-right"},NA=["onClick"],DA=["onClick"];function OA(t,e,n,s,r,i){return Mt(),pn("div",EA,[Z("form",{onSubmit:e[1]||(e[1]=kd((...o)=>s.addTodo&&s.addTodo(...o),["prevent"]))},[Z("div",IA,[Z("div",TA,[Ai(Z("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newTodo=o),class:"input",type:"text",placeholder:"Add a todo"},null,512),[[Ri,s.newTodo]])]),Z("div",bA,[Z("button",{disabled:!s.newTodo,class:"button is-info"}," Add ",8,SA)])])],32),(Mt(!0),pn(Et,null,hv(s.todoList,o=>(Mt(),pn("div",{class:hs(["card mb-5",{"has-background-success-light":o.done}]),key:o.id},[Z("div",CA,[Z("div",AA,[Z("div",kA,[Z("div",{class:hs(["column",{"has-text-success line-through":o.done}])},Ii(o.task),3),Z("div",RA,[Z("button",{onClick:a=>s.toggleTodo(o.id),class:hs(["button",{"is-light":!o.done,"is-success":o.done}])}," ✓ ",10,NA),Z("button",{onClick:a=>s.deleteTodo(o.id),class:"button is-danger ml-2"}," ✗ ",8,DA)])])])])],2))),128))])}const PA=Ao(_A,[["render",OA],["__scopeId","data-v-bd043759"]]);const xA={name:"AuthPage",setup(){const t=Kt(""),e=Kt(""),n=Kt(""),s=Kt("Login");return{email:t,password:e,confirmPassword:n,authMode:s,toggleAuthMode:()=>{s.value=s.value==="Login"?"Register":"Login"},submitForm:async()=>{try{const a=rc();s.value==="Login"?await OE(a,t.value,e.value):(e.value,n.value,await DE(a,t.value,e.value)),window.location.href="/"}catch{}},signInWithGoogle:async()=>{try{const a=rc(),c=new Ht;await iI(a,c),window.location.href="/"}catch{}}}}},MA={class:"auth-page"},LA={class:"title"},UA={class:"field"},FA=Z("label",{class:"label"},"Email",-1),VA={class:"control"},$A={class:"field"},BA=Z("label",{class:"label"},"Password",-1),jA={class:"control"},qA={key:0,class:"field"},HA=Z("label",{class:"label"},"Confirm Password",-1),KA={class:"control"},zA={class:"field is-grouped"},WA={class:"control"},GA={type:"submit",class:"button is-primary"},QA={class:"control"},YA=Z("div",{class:"divider"},"Or",-1),XA={class:"google-auth"};function JA(t,e,n,s,r,i){return Mt(),pn("div",MA,[Z("h1",LA,Ii(s.authMode),1),Z("form",{onSubmit:e[4]||(e[4]=kd((...o)=>s.submitForm&&s.submitForm(...o),["prevent"]))},[Z("div",UA,[FA,Z("div",VA,[Ai(Z("input",{class:"input",type:"email",placeholder:"Enter your email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),required:""},null,512),[[Ri,s.email,void 0,{trim:!0}]])])]),Z("div",$A,[BA,Z("div",jA,[Ai(Z("input",{class:"input",type:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),required:""},null,512),[[Ri,s.password,void 0,{trim:!0}]])])]),s.authMode==="Register"?(Mt(),pn("div",qA,[HA,Z("div",KA,[Ai(Z("input",{class:"input",type:"password",placeholder:"Confirm your password","onUpdate:modelValue":e[2]||(e[2]=o=>s.confirmPassword=o),required:""},null,512),[[Ri,s.confirmPassword,void 0,{trim:!0}]])])])):Ov("",!0),Z("div",zA,[Z("div",WA,[Z("button",GA,Ii(s.authMode),1)]),Z("div",QA,[Z("button",{type:"button",class:"button is-text",onClick:e[3]||(e[3]=(...o)=>s.toggleAuthMode&&s.toggleAuthMode(...o))},Ii(s.authMode==="Login"?"Create an account":"Sign in to your account"),1)])])],32),YA,Z("div",XA,[Z("button",{class:"button is-link",onClick:e[5]||(e[5]=(...o)=>s.signInWithGoogle&&s.signInWithGoogle(...o))},"Sign in with Google")])])}const ZA=Ao(xA,[["render",JA]]),ek=[{path:"/",name:"home",component:PA},{path:"/auth",name:"auth",component:ZA}],tk=iT({base:"/vue-firebase-note/",history:E0("/vue-firebase-note/"),routes:ek});const nk=rc(),hl=gw(s0);hl.use(tk);hl.provide("auth",nk);hl.mount("#app");
