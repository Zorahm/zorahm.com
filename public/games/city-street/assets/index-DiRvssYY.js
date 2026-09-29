(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,M=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,P=37821,Fe=36492,Ie=36494,Le=36495,F=36283,Re=36284,I=36285,L=36286,ze=2300,Be=2301,Ve=2302,He=2303,Ue=2400,We=2401,Ge=2402,Ke=3200,qe=`srgb`,Je=`srgb-linear`,Ye=`linear`,Xe=`srgb`,Ze=7680,Qe=35044,$e=35048,et=2e3;function tt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function st(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ct(...e){let t=e.join(` `);t in at||(at[t]=!0,R(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ft=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pt=1234567,mt=Math.PI/180,ht=180/Math.PI;function gt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ft[e&255]+ft[e>>8&255]+ft[e>>16&255]+ft[e>>24&255]+`-`+ft[t&255]+ft[t>>8&255]+`-`+ft[t>>16&15|64]+ft[t>>24&255]+`-`+ft[n&63|128]+ft[n>>8&255]+`-`+ft[n>>16&255]+ft[n>>24&255]+ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function _t(e,t){return(e%t+t)%t}function vt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function yt(e,t,n){return e===t?0:(n-e)/(t-e)}function bt(e,t,n){return(1-n)*e+n*t}function xt(e,t,n,r){return bt(e,t,1-Math.exp(-n*r))}function St(e,t=1){return t-Math.abs(_t(e,t*2)-t)}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Et(e,t){return e+Math.random()*(t-e)}function Dt(e){return e*(.5-Math.random())}function Ot(e){e!==void 0&&(pt=e);let t=pt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kt(e){return e*mt}function At(e){return e*ht}function jt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Lt={DEG2RAD:mt,RAD2DEG:ht,generateUUID:gt,clamp:B,euclideanModulo:_t,mapLinear:vt,inverseLerp:yt,lerp:bt,damp:xt,pingpong:St,smoothstep:Ct,smootherstep:wt,randInt:Tt,randFloat:Et,randFloatSpread:Dt,seededRandom:Ot,degToRad:kt,radToDeg:At,isPowerOfTwo:jt,ceilPowerOfTwo:Mt,floorPowerOfTwo:Nt,setQuaternionFromProperEuler:Pt,normalize:It,denormalize:Ft};o=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=V,e.prototype.isVector2=!0;var Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=H,t.prototype.isVector3=!0;var zt=new H,Bt=new Rt,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=U,n.prototype.isMatrix3=!0;var Vt=new U,Ht=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ye:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Je]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),e}var W=Wt();function Gt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Kt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var qt,Jt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qt===void 0&&(qt=rt(`canvas`)),qt.width=e.width,qt.height=e.height;let t=qt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=qt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Gt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Gt(t[e]/255)*255):t[e]=Gt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Yt=0,Xt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=gt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Zt(r[t].image)):e.push(Zt(r[t]))}else e=Zt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Zt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Jt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Qt=0,$t=new H,en=class e extends dt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=gt(),this.name=``,this.source=new Xt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($t).x}get height(){return this.source.getSize($t).y}get depth(){return this.source.getSize($t).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=300,en.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var tn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=tn,r.prototype.isVector4=!0;var nn=class extends dt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];let r=new en({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},rn=class extends nn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},an=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},on=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},G=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*ee+s*te+c*re,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*ee+d*te+f*re,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*ee+h*te+g*re,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*ee+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=G,i.prototype.isMatrix4=!0;var sn=new H,cn=new G,ln=new H(0,0,0),un=new H(1,1,1),dn=new H,fn=new H,pn=new H,mn=new G,hn=new Rt,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},vn=0,yn=new H,bn=new Rt,xn=new G,Sn=new H,Cn=new H,wn=new H,Tn=new Rt,En=new H(1,0,0),Dn=new H(0,1,0),On=new H(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=gt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new gn,r=new Rt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new U}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new H(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=_t(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=qe){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=Ln[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}copyLinearToSRGB(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return W.workingToColorSpace(Vn.copy(this),e),Math.round(B(Vn.r*255,0,255))*65536+Math.round(B(Vn.g*255,0,255))*256+Math.round(B(Vn.b*255,0,255))}getHexString(e=qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,r=Vn.g,i=Vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=qe){W.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,r=Vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=bt(Rn.h,zn.h,t),r=bt(Rn.s,zn.s,t),i=bt(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new K;K.NAMES=Ln;var Hn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new K(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Un=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new tn,tr=new tn,nr=new tn,rr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,or):or.fromBufferAttribute(r,t),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),hr.subVectors(this.max,mr),cr.subVectors(e.a,mr),lr.subVectors(e.b,mr),ur.subVectors(e.c,mr),dr.subVectors(lr,cr),fr.subVectors(ur,lr),pr.subVectors(cr,ur);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-pr.z,pr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,pr.z,0,-pr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-pr.y,pr.x,0];return!vr(t,cr,lr,ur,hr)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,cr,lr,ur,hr))?!1:(gr.crossVectors(dr,fr),t=[gr.x,gr.y,gr.z],vr(t,cr,lr,ur,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new H,new H,new H,new H,new H,new H,new H,new H],or=new H,sr=new ir,cr=new H,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H;function vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_r.fromArray(e,a);let o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),s=t.dot(_r),c=n.dot(_r),l=r.dot(_r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var yr=new H,br=new V,xr=0,Sr=class extends dt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qe,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Cr=class extends Sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wr=class extends Sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tr=class extends Sr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Er=new ir,Dr=new H,Or=new H,kr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Dr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Or)),this.expandByPoint(Dr.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ar=0,jr=new G,Mr=new Nn,Nr=new H,Pr=new ir,Fr=new ir,Ir=new H,Lr=class e extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ar++}),this.uuid=gt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(tt(e)?wr:Cr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jr.makeRotationFromQuaternion(e),this.applyMatrix4(jr),this}rotateX(e){return jr.makeRotationX(e),this.applyMatrix4(jr),this}rotateY(e){return jr.makeRotationY(e),this.applyMatrix4(jr),this}rotateZ(e){return jr.makeRotationZ(e),this.applyMatrix4(jr),this}translate(e,t,n){return jr.makeTranslation(e,t,n),this.applyMatrix4(jr),this}scale(e,t,n){return jr.makeScale(e,t,n),this.applyMatrix4(jr),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(this.boundingBox.min,Pr.min),this.boundingBox.expandByPoint(Ir),Ir.addVectors(this.boundingBox.max,Pr.max),this.boundingBox.expandByPoint(Ir)):(this.boundingBox.expandByPoint(Pr.min),this.boundingBox.expandByPoint(Pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(Pr.min,Fr.min),Pr.expandByPoint(Ir),Ir.addVectors(Pr.max,Fr.max),Pr.expandByPoint(Ir)):(Pr.expandByPoint(Fr.min),Pr.expandByPoint(Fr.max))}Pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ir.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ir));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ir.fromBufferAttribute(a,t),o&&(Nr.fromBufferAttribute(e,t),Ir.add(Nr)),r=Math.max(r,n.distanceToSquared(Ir))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Sr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Sr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ir.fromBufferAttribute(e,t),Ir.normalize(),e.setXYZ(t,Ir.x,Ir.y,Ir.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Sr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rr=new H,zr=new H,Br=new U,Vr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rr.subVectors(n,t).cross(zr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Rr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Br.getNormalMatrix(e),r=this.coplanarPoint(Rr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hr=0,Ur=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hr++}),this.uuid=gt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ze,this.stencilZFail=Ze,this.stencilZPass=Ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Wr=new H,Gr=new H,Kr=new H,qr=new H,Jr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=qr.dot(this.direction),s=-qr.dot(Kr),c=qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gr).addScaledVector(Kr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wr.subVectors(e.center,this.origin);let n=Wr.dot(this.direction),r=Wr.dot(Wr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=ee-ne*k,se=O-M*k,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*k+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yr=class extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xr=new G,Zr=new Jr,Qr=new kr,$r=new H,ei=new H,ti=new H,ni=new H,ri=new H,ii=new H,ai=new H,oi=new H,si=class extends Nn{constructor(e=new Lr,t=new Yr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ii.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ri.fromBufferAttribute(s,e),a?ii.addScaledVector(ri,r):ii.addScaledVector(ri.sub(t),r))}t.add(ii)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Zr.copy(e.ray).recast(e.near),!(Qr.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Qr,$r)===null||Zr.origin.distanceToSquared($r)>(e.far-e.near)**2))&&(Xr.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(Xr),(n.boundingBox===null||Zr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=li(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=li(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=li(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=li(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ci(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oi.copy(s),oi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oi);return l<n.near||l>n.far?null:{distance:l,point:oi.clone(),object:e}}function li(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ei),e.getVertexPosition(c,ti),e.getVertexPosition(l,ni);let u=ci(e,t,n,r,ei,ti,ni,ai);if(u){let e=new H;rr.getBarycoord(ai,ei,ti,ni,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};rr.getNormal(ei,ti,ni,t.normal),u.face=t,u.barycoord=e}return u}var ui=class extends en{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class extends Sr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fi=new G,pi=new G,mi=[],hi=new ir,gi=new G,_i=new si,vi=new kr,yi=class extends si{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,gi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),hi.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(hi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),vi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(_i.geometry=this.geometry,_i.material=this.material,_i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vi.copy(this.boundingSphere),vi.applyMatrix4(n),e.ray.intersectsSphere(vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,fi),pi.multiplyMatrices(n,fi),_i.matrixWorld=pi,_i.raycast(e,mi);for(let e=0,n=mi.length;e<n;e++){let n=mi[e];n.instanceId=i,n.object=this,t.push(n)}mi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new kr,xi=new V(.5,.5),Si=new H,Ci=class{constructor(e=new Vr,t=new Vr,n=new Vr,r=new Vr,i=new Vr,a=new Vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=et,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476+xi.distanceTo(e.center),bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Si.x=r.normal.x>0?e.max.x:e.min.x,Si.y=r.normal.y>0?e.max.y:e.min.y,Si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wi=class extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ti=new H,Ei=new H,Di=new G,Oi=new Jr,ki=new kr,Ai=new H,ji=new H,Mi=class extends Nn{constructor(e=new Lr,t=new wi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ti.fromBufferAttribute(t,e-1),Ei.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ti.distanceTo(Ei);e.setAttribute(`lineDistance`,new Tr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(r),ki.radius+=i,e.ray.intersectsSphere(ki)===!1)return;Di.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Di);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ni(this,e,Oi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ni(this,e,Oi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ni(this,e,Oi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ni(this,e,Oi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ni(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ti.fromBufferAttribute(s,i),Ei.fromBufferAttribute(s,a),n.distanceSqToSegment(Ti,Ei,Ai,ji)>r)return;Ai.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ai);if(!(c<t.near||c>t.far))return{distance:c,point:ji.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Pi=new H,Fi=new H,Ii=class extends Mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Pi.fromBufferAttribute(t,e),Fi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Pi.distanceTo(Fi);e.setAttribute(`lineDistance`,new Tr(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Li=class extends en{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends en{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zi=class extends en{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bi=class extends zi{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vi=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class e extends Lr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Tr(c,3)),this.setAttribute(`normal`,new Tr(l,3)),this.setAttribute(`uv`,new Tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ui(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Wi(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Zi(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ki(a,o,n,s,c,l,0),o}function Wi(e,t,n,r,i){let a;if(i===xa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=va(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=va(i/r|0,e[i],e[i+1],a);return a&&ua(a,a.next)&&(ya(a),a=a.next),a}function Gi(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(ua(n,n.next)||la(n.prev,n,n.next)===0)){if(ya(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ki(e,t,n,r,i,a,o){if(!e)return;!o&&a&&na(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ji(e,r,i,a):qi(e)){t.push(c.i,e.i,l.i),ya(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Yi(Gi(e),t),Ki(e,t,n,r,i,a,2)):o===2&&Xi(e,t,n,r,i,a):Ki(Gi(e),t,n,r,i,a,1);break}}}function qi(e){let t=e.prev,n=e,r=e.next;if(la(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&sa(i,s,a,c,o,l,m.x,m.y)&&la(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ji(e,t,n,r){let i=e.prev,a=e,o=e.next;if(la(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ia(p,m,t,n,r),v=ia(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sa(s,u,c,d,l,f,y.x,y.y)&&la(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sa(s,u,c,d,l,f,b.x,b.y)&&la(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sa(s,u,c,d,l,f,y.x,y.y)&&la(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sa(s,u,c,d,l,f,b.x,b.y)&&la(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Yi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ua(r,i)&&da(r,n,n.next,i)&&ha(r,i)&&ha(i,r)&&(t.push(r.i,n.i,i.i),ya(n),ya(n.next),n=e=i),n=n.next}while(n!==e);return Gi(n)}function Xi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ca(o,e)){let s=_a(o,e);o=Gi(o,o.next),s=Gi(s,s.next),Ki(o,t,n,r,i,a,0),Ki(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Zi(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Wi(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(aa(o))}i.sort(Qi);for(let e=0;e<i.length;e++)n=$i(i[e],n);return n}function Qi(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function $i(e,t){let n=ea(e,t);if(!n)return t;let r=_a(n,e);return Gi(r,r.next),Gi(n,n.next)}function ea(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ua(e,n))return n;do{if(ua(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&oa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ha(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ta(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ta(e,t){return la(e.prev,e,t.prev)<0&&la(t.next,e,e.next)<0}function na(e,t,n,r){let i=e;do i.z===0&&(i.z=ia(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ra(i)}function ra(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ia(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function aa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function oa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function sa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&oa(e,t,n,r,i,a,o,s)}function ca(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ma(e,t)&&(ha(e,t)&&ha(t,e)&&ga(e,t)&&(la(e.prev,e,t.prev)||la(e,t.prev,t))||ua(e,t)&&la(e.prev,e,e.next)>0&&la(t.prev,t,t.next)>0)}function la(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ua(e,t){return e.x===t.x&&e.y===t.y}function da(e,t,n,r){let i=pa(la(e,t,n)),a=pa(la(e,t,r)),o=pa(la(n,r,e)),s=pa(la(n,r,t));return!!(i!==a&&o!==s||i===0&&fa(e,n,t)||a===0&&fa(e,r,t)||o===0&&fa(n,e,r)||s===0&&fa(n,t,r))}function fa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function pa(e){return e>0?1:e<0?-1:0}function ma(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&da(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ha(e,t){return la(e.prev,e,e.next)<0?la(e,t,e.next)>=0&&la(e,e.prev,t)>=0:la(e,t,e.prev)<0||la(e,e.next,t)<0}function ga(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function _a(e,t){let n=ba(e.i,e.x,e.y),r=ba(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function va(e,t,n,r){let i=ba(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ya(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ba(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Sa=class{static triangulate(e,t,n=2){return Ui(e,t,n)}},Ca=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];wa(e),Ta(n,e);let a=e.length;t.forEach(wa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ta(n,t[e]);let o=Sa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function wa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ta(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ea=class e extends Lr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Da=class e extends Lr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Oa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Aa(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Aa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ka(e){let t={};for(let n=0;n<e.length;n++){let r=Oa(e[n]);for(let e in r)t[e]=r[e]}return t}function Aa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ja(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ma(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var Na={clone:Oa,merge:ka},Pa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ia=class extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pa,this.fragmentShader=Fa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=ja(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new G().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},La=class extends Ia{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ra=class extends Ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},za=class extends Ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ba=class extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ha(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ua(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Wa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ga=class extends Wa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ue,endingEnd:Ue}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case We:i=e,o=2*t-n;break;case Ge:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case We:a=e,s=2*n-t;break;case Ge:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ka=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},qa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ja=class extends Wa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Za(n,t,g,y,r);i[p]=Ya(x,o,_,b,m)}return i}};function Ya(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Xa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Za(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ya(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Xa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Qa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ua(e.settings)&&(n.settings={inTangents:Ha(e.settings.inTangents,Array),outTangents:Ha(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ze:t=this.InterpolantFactoryMethodDiscrete;break;case Be:t=this.InterpolantFactoryMethodLinear;break;case Ve:t=this.InterpolantFactoryMethodSmooth;break;case He:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ze;case this.InterpolantFactoryMethodLinear:return Be;case this.InterpolantFactoryMethodSmooth:return Ve;case this.InterpolantFactoryMethodBezier:return He}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ua(this.settings)&&($a(this.settings.inTangents,e),$a(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ve,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ua(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function $a(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Qa.prototype.ValueTypeName=``,Qa.prototype.TimeBufferType=Float32Array,Qa.prototype.ValueBufferType=Float32Array,Qa.prototype.DefaultInterpolation=Be;var eo=class extends Qa{constructor(e,t,n){super(e,t,n)}};eo.prototype.ValueTypeName=`bool`,eo.prototype.ValueBufferType=Array,eo.prototype.DefaultInterpolation=ze,eo.prototype.InterpolantFactoryMethodLinear=void 0,eo.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};to.prototype.ValueTypeName=`color`;var no=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};no.prototype.ValueTypeName=`number`;var ro=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},io=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName=`quaternion`,io.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Qa{constructor(e,t,n){super(e,t,n)}};ao.prototype.ValueTypeName=`string`,ao.prototype.ValueBufferType=Array,ao.prototype.DefaultInterpolation=ze,ao.prototype.InterpolantFactoryMethodLinear=void 0,ao.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Qa{constructor(e,t,n,r){super(e,t,n,r)}};oo.prototype.ValueTypeName=`vector`;var so=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},co=new G,lo=new H,uo=new H,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(lo),uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(co,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new H,mo=new Rt,ho=new H,go=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=et,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,ho),ho.x===1&&ho.y===1&&ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ho.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(po,mo,ho),ho.x===1&&ho.y===1&&ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ho.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_o=new H,vo=new V,yo=new V,bo=class extends go{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_o.x,_o.y).multiplyScalar(-e/_o.z),_o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_o.x,_o.y).multiplyScalar(-e/_o.z)}getViewSize(e,t){return this.getViewBounds(e,vo,yo),t.subVectors(yo,vo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xo=class extends go{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},So=class extends fo{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new So}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},wo=-90,To=1,Eo=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bo(wo,To,e,t);r.layers=this.layers,this.add(r);let i=new bo(wo,To,e,t);i.layers=this.layers,this.add(i);let a=new bo(wo,To,e,t);a.layers=this.layers,this.add(a);let o=new bo(wo,To,e,t);o.layers=this.layers,this.add(o);let s=new bo(wo,To,e,t);s.layers=this.layers,this.add(s);let c=new bo(wo,To,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Do=class extends bo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Oo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ko.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ko(){this._document.hidden===!1&&this.reset()}var Ao=`\\[\\]\\.:\\/`,jo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Mo=`[^\\[\\]\\.:\\/]`,No=`[^`+Ao.replace(`\\.`,``)+`]`,Po=`((?:WC+[\\/:])*)`.replace(`WC`,Mo),Fo=`(WCOD+)?`.replace(`WCOD`,No),Io=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Mo),Lo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Mo),Ro=RegExp(`^`+Po+Fo+Io+Lo+`$`),zo=[`material`,`materials`,`bones`,`map`],Bo=class{constructor(e,t,n){let r=n||Vo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(jo,``)}static parseTrackName(e){let t=Ro.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);zo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vo.Composite=Bo,Vo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Vo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Vo.prototype.GetterByBindingType=[Vo.prototype._getValue_direct,Vo.prototype._getValue_array,Vo.prototype._getValue_arrayElement,Vo.prototype._getValue_toArray],Vo.prototype.SetterByBindingTypeAndVersioning=[[Vo.prototype._setValue_direct,Vo.prototype._setValue_direct_setNeedsUpdate,Vo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vo.prototype._setValue_array,Vo.prototype._setValue_array_setNeedsUpdate,Vo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vo.prototype._setValue_arrayElement,Vo.prototype._setValue_arrayElement_setNeedsUpdate,Vo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vo.prototype._setValue_fromArray,Vo.prototype._setValue_fromArray_setNeedsUpdate,Vo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Ho(e,t,n,r){let i=Uo(r);switch(n){case A:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case F:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case I:case L:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Uo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Wo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Go(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Ko={basic:{uniforms:ka([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:ka([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:ka([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:ka([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:ka([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:ka([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:ka([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:ka([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:ka([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:ka([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:ka([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:ka([J.common,J.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:ka([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Ko.physical={uniforms:ka([Ko.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var qo={r:0,b:0,g:0},Jo=new G,Yo=new U;Yo.set(-1,0,0,0,1,0,0,0,1);function Xo(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new si(new Hi(1,1,1),new Ia({name:`BackgroundCubeMaterial`,uniforms:Oa(Ko.backgroundCube.uniforms),vertexShader:Ko.backgroundCube.vertexShader,fragmentShader:Ko.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yo),l.material.toneMapped=W.getTransfer(i.colorSpace)!==Xe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new si(new Ea(2,2),new Ia({name:`BackgroundMaterial`,uniforms:Oa(Ko.background.uniforms),vertexShader:Ko.background.vertexShader,fragmentShader:Ko.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==Xe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qo,Ma(e)),n.buffers.color.setClear(qo.r,qo.g,qo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Zo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $o(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function es(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Vr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ts=4,ns=6,rs=20,is=256,as=new xo,os=new K,ss=null,cs=0,ls=0,us=!1,ds=new H,fs=new H,ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ds}=i;ss=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ys(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,cs,ls),this._renderer.xr.enabled=us,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Je,depthBuffer:!1},r=hs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ms(r)),this._blurMaterial=vs(r,e,t),this._ggxMaterial=_s(r,e,t)}return r}_compileMaterial(e){let t=new si(new Lr,e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,n,r,i){let a=new bo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(os),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new Hi,new Yr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(os),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;gs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ys());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;gs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,as)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ts?n-d+ts:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,gs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,as),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,gs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,as)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];gs(t,3*l*(r>this._lodMax-ts?r-this._lodMax+ts:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,as)}};function ms(e){let t=[],n=[],r=e,i=e-ts+1+ns;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?fs.set(1,r,n):e===1?fs.set(-n,1,-r):e===2?fs.set(-n,r,1):e===3?fs.set(-1,r,-n):e===4?fs.set(-n,-1,r):fs.set(n,r,-1),fs.toArray(l,(e*6+t)*3)}}let u=new Lr;u.setAttribute(`position`,new Sr(c,3)),u.setAttribute(`outputDirection`,new Sr(l,3)),n.push(new si(u,null)),r>ts&&r--}return{lodMeshes:n,sizeLods:t}}function hs(e,t,n){let r=new rn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function gs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _s(e,t,n){return new Ia({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vs(e,t,n){return new Ia({name:`SphericalGaussianBlur`,defines:{SAMPLES:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return new Ia({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bs(){return new Ia({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ss=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Li(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hi(5,5,5),i=new Ia({name:`CubemapFromEquirect`,uniforms:Oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new si(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new Eo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Cs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ss(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ps(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ps(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ws(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ts(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?wr:Cr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Es(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ds(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Os(e,t,n){let r=new WeakMap,i=new tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new an(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ks(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var As={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function js(e,t,n,r,i,a){let o=new rn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Lr;l.setAttribute(`position`,new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Tr([0,2,0,0,2,0],2));let u=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new si(l,u),f=new xo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new rn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},W.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=As[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ms=new en,Ns=new zi(1,1),Ps=new an,Fs=new on,Is=new Li,Ls=[],Rs=[],zs=new Float32Array(16),Bs=new Float32Array(9),Vs=new Float32Array(4);function Hs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ls[i];if(a===void 0&&(a=new Float32Array(i),Ls[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Us(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ws(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gs(e,t){let n=Rs[t];n===void 0&&(n=new Int32Array(t),Rs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2fv(this.addr,t),Ws(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Us(n,t))return;e.uniform3fv(this.addr,t),Ws(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4fv(this.addr,t),Ws(n,t)}}function Xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;Vs.set(r),e.uniformMatrix2fv(this.addr,!1,Vs),Ws(n,r)}}function Zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;Bs.set(r),e.uniformMatrix3fv(this.addr,!1,Bs),Ws(n,r)}}function Qs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;zs.set(r),e.uniformMatrix4fv(this.addr,!1,zs),Ws(n,r)}}function $s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2iv(this.addr,t),Ws(n,t)}}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Us(n,t))return;e.uniform3iv(this.addr,t),Ws(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4iv(this.addr,t),Ws(n,t)}}function rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2uiv(this.addr,t),Ws(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Us(n,t))return;e.uniform3uiv(this.addr,t),Ws(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4uiv(this.addr,t),Ws(n,t)}}function sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ns.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ns):a=Ms,n.setTexture2D(t||a,i)}function cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fs,i)}function lc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Is,i)}function uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ps,i)}function dc(e){switch(e){case 5126:return Ks;case 35664:return qs;case 35665:return Js;case 35666:return Ys;case 35674:return Xs;case 35675:return Zs;case 35676:return Qs;case 5124:case 35670:return $s;case 35667:case 35671:return ec;case 35668:case 35672:return tc;case 35669:case 35673:return nc;case 5125:return rc;case 36294:return ic;case 36295:return ac;case 36296:return oc;case 35678:case 36198:case 36298:case 36306:case 35682:return sc;case 35679:case 36299:case 36307:return cc;case 35680:case 36300:case 36308:case 36293:return lc;case 36289:case 36303:case 36311:case 36292:return uc}}function fc(e,t){e.uniform1fv(this.addr,t)}function pc(e,t){let n=Hs(t,this.size,2);e.uniform2fv(this.addr,n)}function mc(e,t){let n=Hs(t,this.size,3);e.uniform3fv(this.addr,n)}function hc(e,t){let n=Hs(t,this.size,4);e.uniform4fv(this.addr,n)}function gc(e,t){let n=Hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _c(e,t){let n=Hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vc(e,t){let n=Hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yc(e,t){e.uniform1iv(this.addr,t)}function bc(e,t){e.uniform2iv(this.addr,t)}function xc(e,t){e.uniform3iv(this.addr,t)}function Sc(e,t){e.uniform4iv(this.addr,t)}function Cc(e,t){e.uniform1uiv(this.addr,t)}function wc(e,t){e.uniform2uiv(this.addr,t)}function Tc(e,t){e.uniform3uiv(this.addr,t)}function Ec(e,t){e.uniform4uiv(this.addr,t)}function Dc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ns:Ms;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Oc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fs,a[e])}function kc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Is,a[e])}function Ac(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ps,a[e])}function jc(e){switch(e){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return hc;case 35674:return gc;case 35675:return _c;case 35676:return vc;case 5124:case 35670:return yc;case 35667:case 35671:return bc;case 35668:case 35672:return xc;case 35669:case 35673:return Sc;case 5125:return Cc;case 36294:return wc;case 36295:return Tc;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Dc;case 35679:case 36299:case 36307:return Oc;case 35680:case 36300:case 36308:case 36293:return kc;case 36289:case 36303:case 36311:case 36292:return Ac}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dc(t.type)}},Nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jc(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Ic(e,t){e.seq.push(t),e.map[t.id]=t}function Lc(e,t,n){let r=e.name,i=r.length;for(Fc.lastIndex=0;;){let a=Fc.exec(r),o=Fc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ic(n,l===void 0?new Mc(s,e,t):new Nc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Pc(s),Ic(n,e)),n=e}}}var Rc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Lc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bc=37297,Vc=0;function Hc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Uc=new U;function Wc(e){W._getMatrix(Uc,W.workingColorSpace,e);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Ye:return[t,`LinearTransferOETF`];case Xe:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hc(e.getShaderSource(t),r)}return i}function Kc(e,t){let n=Wc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Jc(e,t){let n=qc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Yc=new H;function Xc(){return W.getLuminanceCoefficients(Yc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Yc.x.toFixed(4)}, ${Yc.y.toFixed(4)}, ${Yc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(el).join(`
`)}function Qc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $c(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function el(e){return e!==``}function tl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rl=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(e){return e.replace(rl,ol)}var al=new Map;function ol(e,t){let n=q[t];if(n===void 0){let e=al.get(t);if(e!==void 0)n=q[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return il(n)}var sl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(e){return e.replace(sl,ll)}function ll(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ul(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fl(e){return dl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ml(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:pl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hl={302:`ENVMAP_MODE_REFRACTION`};function gl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _l={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_l[e.combine]||`ENVMAP_BLENDING_NONE`}function yl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fl(n),l=ml(n),u=gl(n),d=vl(n),f=yl(n),p=Zc(n),m=Qc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(el).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(el).join(`
`),_.length>0&&(_+=`
`)):(g=[ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(el).join(`
`),_=[ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:Jc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,Kc(`linearToOutputTexel`,n.outputColorSpace),Xc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(el).join(`
`)),o=il(o),o=tl(o,n),o=nl(o,n),s=il(s),s=tl(s,n),s=nl(s,n),o=cl(o),s=cl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zc(i,i.VERTEX_SHADER,y),S=zc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gc(i,x,`vertex`),n=Gc(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rc(i,h),T=$c(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xl=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=xl++,this.code=e,this.usedTimes=0}};function wl(e){return e===1030||e===37490||e===36285}function Tl(e,t,n,r,i,a){let o=new _n,s=new Sl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Ko[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&wl(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ko[t];n=Na.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function El(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ol(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Dl),r.length>1&&r.sort(t||Ol),i.length>1&&i.sort(t||Ol)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Al(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kl,e.set(t,[i])):n>=r.length?(i=new kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new K};break;case`SpotLight`:n={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nl=0;function Pl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fl(e){let t=new jl,n=Ml(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new G,o=new G;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Pl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Nl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Il(e){let t=new Fl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ll(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Il(e),t.set(n,[a])):r>=i.length?(a=new Il(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Vl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Hl=new G,Ul=new H,Wl=new H;function Gl(e,t,n){let r=new Ci,i=new V,a=new V,o=new tn,s=new Ba,c=new Va,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Rl,fragmentShader:zl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Lr;g.setAttribute(`position`,new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new si(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new rn(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new zi(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Ss(i.x),d.map.depthTexture=new Bi(i.x,C)):(d.map=new rn(i.x,i.y),d.map.depthTexture=new zi(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ul.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ul),Wl.copy(e.position),Wl.add(Bl[t]),e.up.copy(Vl[t]),e.lookAt(Wl),e.updateMatrixWorld(),n.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new rn(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kl(e,t){function n(){let t=!1,n=new tn,r=null,i=new tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ut[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new tn().fromArray(ae),ce=new tn().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(j&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:ze}}function ql(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):rt(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ye:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},he={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===M,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&be(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Ho(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Ho(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jl(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ia({vertexShader:Yl,fragmentShader:Xl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends dt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Zl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new V,T=null,E=null,D=new bo;D.viewport=new tn;let O=new bo;O.viewport=new tn;let k=[D,O],A=new Do,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?M:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new zi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let se=new H,ce=new H;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,re=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ht*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new bo,o.layers.enable(n),o.viewport=new tn,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Vi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new Wo;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},$l=new G,eu=new U;eu.set(-1,0,0,0,1,0,0,0,1);function tu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ma(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($l.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(eu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ru=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),iu=null;function au(){return iu===null&&(iu=new ui(ru,16,16,ae,T),iu.name=`DFG_LUT`,iu.minFilter=h,iu.magFilter=h,iu.wrapS=u,iu.wrapT=u,iu.generateMipmaps=!1,iu.needsUpdate=!0),iu}var ou=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new H,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ae=null,ce=null;this._outputColorSpace=qe;let le=0,ue=0,N=null,de=-1,fe=null,pe=new tn,me=new tn,he=null,ge=new K(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new tn(0,0,ve,ye),we=new tn(0,0,ve,ye),Te=!1,Ee=new Ci,De=!1,Oe=!1,ke=new G,Ae=new H,je=new tn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,L,ze,Be,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function at(){Ie=new ws(P),Ie.init(),tt=new Jl(P,Ie),Le=new $o(P,Ie,e,tt),F=new Kl(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ae=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new Ds(P),I=new El,L=new ql(P,Ie,F,I,Le,tt,Re),ze=new Cs(j),Be=new Go(P),nt=new Zo(P,Be),Ve=new Ts(P,Be,Re,nt),He=new ks(P,Ve,Be,nt,Re),Ze=new Os(P,Le,L),Je=new es(I),Ue=new Tl(j,ze,Ie,Le,nt,Je),We=new tu(j,I),Ge=new Al,Ke=new Ll(Ie),Xe=new Xo(j,ze,F,He,p,s),Ye=new Gl(j,He,Le),rt=new nu(P,Re,Le,F),Qe=new Qo(P,Ie,Re),$e=new Es(P,Ie,Re),Re.programs=Ue.programs,j.capabilities=Le,j.extensions=Ie,j.properties=I,j.renderLists=Ge,j.shadowMap=Ye,j.state=F,j.info=Re}m!==1009&&(te=new js(m,t.width,t.height,o,r,i));let st=new Ql(j,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){if(st.isPresenting){R(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,P.clearBufferiv(P.COLOR,0,b))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe.dispose(),Ge.dispose(),Ke.dispose(),I.dispose(),ze.dispose(),He.dispose(),nt.dispose(),rt.dispose(),Ue.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),ot(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){ot(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),I.remove(e)}function mt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Be.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),O=Ke.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),M!==null&&M.updateLights(O.state.lightsArray),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),De===!0&&Je.setGlobalState(this.clippingPlanes,t),M!==null&&Ye.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),O=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function B(e){gt&&gt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Wo;yt.setAnimationLoop(B),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),O=Ke.get(e,A.length),O.init(t),O.state.textureUnits=L.getTextureUnits(),A.push(O),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,et,t.reversedDepth),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),w=Ge.get(e,k.length),w.init(),k.push(w),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),w.finish(),M!==null&&M.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(xe,Se),Ne=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ne&&Xe.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Je.beginShadows();let i=O.state.shadowsArray;if(Ye.render(i,e,t),De===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ne&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(w,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ne&&Xe.render(e),xt(w,e,t)}N!==null&&ue===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),nt.resetDefaultState(),de=-1,fe=null,A.pop(),A.length>0?(O=A[A.length-1],L.setTextureUnits(O.state.textureUnits),De===!0&&Je.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,M!==null&&M.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=He.update(e),a=e.material;a.visible&&w.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,je.z,s,t)}}else a.visible&&w.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),De===!0&&Je.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new rn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Xe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),De===!0&&Je.setGlobalState(j.clippingPlanes,r),Ct(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Me),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=O.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=Ot(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,L),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,L),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=au()),C){if(T.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,be,ye,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Rc.upload(P,Et(v),E,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rc.upload(P,Et(v),E,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Mt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await lt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ae),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return et}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},Y={facadeX:15,kerbX:8.5,kerbH:.14,parkingX:6.2,laneX:4.55,laneInnerX:2.9,tramX:1.45,zMin:-350,zMax:350,detailZ:200,simZ:260,chunk:100},su=[{id:`minor`,z:-95,roadHalf:3.5,walk:2.5,extent:70},{id:`major`,z:40,roadHalf:6,walk:4.5,extent:150}],cu={hours:18.4,timeSpeed:15,weather:`drizzle`,camera:`tour`,seed:20260929},lu=(e,t,n)=>e<t?t:e>n?n:e,uu=(e,t,n)=>e+(t-e)*n,du=(e,t,n)=>{let r=lu((n-e)/(t-e),0,1);return r*r*(3-2*r)},fu=(e,t,n,r)=>uu(e,t,1-Math.exp(-n*r)),pu=(e,t)=>(e%t+t)%t,mu=e=>-(Math.cos(Math.PI*e)-1)/2,hu=Math.PI/180,gu=e=>e.roadHalf+e.walk,_u=11,vu=22,yu=[15,19],bu=[16,21],xu=-170,Su=[{w:3,id:`limestone`,floors:[5,6]},{w:3,id:`brick`,floors:[4,6]},{w:3,id:`pastel`,floors:[3,5]},{w:1.4,id:`modern`,floors:[5,8]},{w:.7,id:`glass`,floors:[6,10]}];function Cu(e,t){let n=Math.max(1,Math.round(t/16.5));for(;t/n>21.5;)n++;for(;n>1&&t/n<11.5;)n--;for(let r=0;r<40;r++){let r=Array.from({length:n},()=>e.range(.72,1.28)),i=r.reduce((e,t)=>e+t,0),a=r.map(e=>e/i*t);if(a.every(e=>e>=_u&&e<=vu))return a}return Array(n).fill(t/n)}function wu(){let e=su.map(e=>({c:e,a:e.z-gu(e),b:e.z+gu(e)})).sort((e,t)=>e.a-t.a),t=[],n=Y.zMin,r=null;for(let i of e)t.push({za:n,zb:i.a,lowGap:r,highGap:i}),n=i.b,r=i;return t.push({za:n,zb:Y.zMax,lowGap:r,highGap:null}),t}function Tu(e,t,n,r,i,a,o,s){return{id:t,row:n,origin:r,tangent:i,normal:a,width:o,depth:s,floors:4,style:`brick`,corner:null,landmark:!1,seed:e.int(1,2**31-1)}}function Eu(e,t,n=null){let r=n;for(let n of t){let t=Su.filter(e=>!r||e.id!==r.style);if(r){let e=t.filter(e=>e.floors[1]>=r.floors-2&&e.floors[0]<=r.floors+2);e.length&&(t=e)}let i=e.weighted(t),a=i.floors[0],o=i.floors[1];r&&(a=Math.max(a,r.floors-2),o=Math.min(o,r.floors+2),a>o&&(a=o=lu(r.floors,i.floors[0],i.floors[1]))),n.style=i.id,n.floors=e.int(a,o),r=n}}function Du(e){let t=[],n=new Map,r=new Map;for(let i of[-1,1]){let a=i<0?`main-left`:`main-right`,o={x:-i,z:0},s={x:o.z,z:-o.x},c=s.z>0;wu().forEach((l,u)=>{let d=[],f=l.za,p=l.zb;if(l.lowGap){let t=e.range(...yu);d.push({w:t,depth:e.range(...bu),corner:{crossId:l.lowGap.c.id,sz:1}}),f+=t}let m=null;if(l.highGap){let t=e.range(...yu);m={w:t,depth:e.range(...bu),corner:{crossId:l.highGap.c.id,sz:-1}},p-=t}for(let t of Cu(e,p-f))d.push({w:t,depth:e.range(14,20),corner:null});m&&d.push(m);let h=l.za,g=d.map((t,l)=>{let d=h;h+=t.w;let f={x:i*Y.facadeX,z:s.z>0?d:h},p=Tu(e,`${a}:${u}:${l}`,a,f,s,o,t.w,t.depth);if(t.corner){let e=t.corner.sz>0;p.corner={crossId:t.corner.crossId,sz:t.corner.sz,end:e===c?`start`:`end`};let a=`${t.corner.crossId}|${t.corner.sz}|${i}`;n.set(a,t.depth),r.set(a,p)}return p});Eu(e,g),t.push(...g)})}for(let i of su){let a=gu(i);for(let o of[-1,1])for(let s of[-1,1]){let c=`${i.id}|${o}|${s}`,l=Y.facadeX+(n.get(c)??16),u=i.extent-l;if(u<_u)continue;let d=`cross:${i.id}:${o>0?`+`:`-`}z${s>0?`+`:`-`}x`,f={x:0,z:-o},p={x:f.z,z:-f.x},m=s>0?l:-i.extent,h=Cu(e,u).map((t,n)=>{let r=m;m+=t;let s={x:p.x>0?r:m,z:i.z+o*a};return Tu(e,`${d}:${n}`,d,s,p,f,t,e.range(14,yu[0]))});Eu(e,s>0?h:[...h].reverse(),r.get(c)??null),t.push(...h)}}let i=null,a=1/0;for(let e of t){if(e.row!==`main-left`||e.corner||e.width<15)continue;let t=Math.abs(e.origin.z+e.tangent.z*(e.width/2)-xu);t<a&&(a=t,i=e)}return i&&(i.landmark=!0,i.style=`landmark`),t}function Ou(e,t){if(t<Y.zMin||t>Y.zMax)return!1;if(Math.abs(e)<=Y.kerbX)return!0;for(let n of su)if(Math.abs(t-n.z)<=n.roadHalf&&Math.abs(e)<=n.extent)return!0;return!1}function ku(e,t,n=.4){if(t<Y.zMin||t>Y.zMax)return!1;if(Math.abs(e)<=Y.facadeX-n)return!0;for(let r of su)if(Math.abs(t-r.z)<=gu(r)-n&&Math.abs(e)<=r.extent)return!0;return!1}function Au(){let e=su.find(e=>e.id===`major`),t=e.roadHalf,n=Y.simZ,r=[];for(let i of[1,-1]){let a=i>0?-n:n,o=(e.z-i*(t+5.6)-a)*i;r.push({id:`car${i>0?`+`:`-`}z`,kind:`car`,axis:`z`,dir:i,fixed:-i*Y.laneX,from:a,length:2*n,group:`main`,stops:[{s:o,group:`main`}]}),r.push({id:`tram${i>0?`+`:`-`}z`,kind:`tram`,axis:`z`,dir:i,fixed:-i*Y.tramX,from:a,length:2*n,group:`main`,stops:[{s:o,group:`main`}]})}for(let t of[1,-1]){let n=e.extent,i=t>0?-n:n,a=t*-(Y.kerbX+5.6);r.push({id:`carx${t>0?`+`:`-`}`,kind:`car`,axis:`x`,dir:t,fixed:e.z+t*1.7,from:i,length:2*n,group:`cross`,stops:[{s:(a-i)*t,group:`cross`}]})}return r}function ju(e,t,n={x:0,z:0,yaw:0}){let r=e.from+e.dir*t;return e.axis===`z`?(n.x=e.fixed,n.z=r,n.yaw=e.dir>0?0:Math.PI):(n.x=r,n.z=e.fixed,n.yaw=e.dir>0?Math.PI/2:-Math.PI/2),n}var Mu=su.find(e=>e.id===`major`),Nu=(e,t,n,r)=>e.set(uu(t[0],n[0],r),uu(t[1],n[1],r),uu(t[2],n[2],r)),Pu=(e,t)=>su.some(n=>Math.abs(e-n.z)<n.roadHalf+t);function Fu(e){let t=(t,n,r=1.6)=>Math.abs(n)<165&&!Pu(n,6)&&!e.blocked(t,n,r),n=(e,n,r,i=1.6)=>{let a=Math.max(1,Math.ceil(Math.abs(r-n)));for(let o=0;o<=a;o++)if(!t(e,uu(n,r,o/a),i))return!1;return!0};return[{name:`hero`,duration:17,fov:56,pose(e,t,n){let r=mu(e);Nu(n.pos,[.2,4.3,118],[.1,3.9,68],r),n.look.set(uu(-1,-5,r),uu(3.6,6.4,r),-150)}},{name:`cafe`,duration:12,fov:48,start(t){let n=(e.cafes?.terraces??[]).filter(e=>Math.abs(e.z)<150&&Math.abs(e.x)<20);t.cafeRound=(t.cafeRound??-1)+1,t.terrace=n.length?n[t.cafeRound%n.length]:null},pose(e,t,n){let r=mu(e),i=t.terrace;if(!i){Nu(n.pos,[9,1.7,30],[9,1.7,10],r),n.look.set(15,2,0);return}let a=i.nz,o=-i.nx,s=uu(-3.4,3.4,r);n.pos.set(i.x+i.nx*5.2+a*s,1.62,i.z+i.nz*5.2+o*s),n.look.set(i.x+i.nx*1.3,1.5,i.z+i.nz*1.3)}},{name:`tram`,duration:13,fov:50,start(n){let r=e.traffic.model.vehicles.filter(e=>e.type===`tram`),i=r.filter(e=>e.v>2&&e.s>60&&e.s<420),a=i.length?i[Math.floor(Math.random()*i.length)]:r[0];if(n.tram=a??null,n.tramCam=null,!a)return;let o=a.lane.dir,s=(Math.sign(a.lane.fixed)||1)*(Y.kerbX+.5),c=ju(a.lane,a.s-a.len/2).z+o*(a.len/2),l=c+o*38;for(let e=34;e<=74;e+=1.5)if(t(s,c+o*e)){l=c+o*e;break}n.tramCam={x:s,z:l}},pose(e,t,n){let r=t.tram,i=t.tramCam;if(!r||!i)return;let a=ju(r.lane,r.s-r.len/2),o=mu(e);n.pos.set(i.x,uu(1.45,1.8,o),i.z),n.look.set(a.x,1.9,uu(i.z,a.z+r.lane.dir*uu(8,-4,o),.78))}},{name:`crane`,duration:15,fov:55,pose(e,t,n){let r=mu(e),i=uu(-.95,.75,r),a=uu(38,30,r);n.pos.set(Math.sin(i)*a,uu(30,17,r),Mu.z+Math.cos(i)*a),n.look.set(0,2.5,Mu.z)}},{name:`facade`,duration:12,fov:62,start(e){e.facadeRound=(e.facadeRound??-1)+1;let t=e.facadeRound%2?-1:1,r=t*(Y.kerbX+2.7),i=[];for(let e=-125;e<=125;e+=2)n(r,e,e-5,2.6)&&i.push(e);e.facade={x:r,side:t,z:i.length?i[(e.facadeRound*37+11)%i.length]:-41}},pose(e,t,n){let r=mu(e),i=t.facade;n.pos.set(i.x,1.55,i.z-uu(0,5,r)),n.look.set(-i.side*Y.facadeX,uu(2.2,33,r),i.z-uu(2,16,r))}},{name:`lamp`,duration:11,fov:50,start(t){t.lampRound=(t.lampRound??-1)+1;let r=t.lampRound%2?1:-1,i=e.lamps.pairs.filter(e=>Math.abs(e)<150&&!Pu(e,14)),a=r*(Y.kerbX+2.6);t.lamp=null;for(let e=0;e<i.length&&!t.lamp;e++){let o=i[(Math.floor(i.length*.3)+t.lampRound*3+e)%i.length];for(let e of[1,-1])if(n(a,o+e*6.5,o+e*10.5,1.2)){t.lamp={x:r*(Y.kerbX+1.25-1.2),z:o,cx:a,away:e};break}}},pose(e,t,n){let r=mu(e),i=t.lamp;if(!i){Nu(n.pos,[-10.6,.9,20],[-10.6,1.3,14],r),n.look.set(-8.6,4.8,0);return}n.pos.set(i.cx,uu(.55,1.15,r),i.z+i.away*uu(10.5,6.5,r)),n.look.set(i.x,uu(3.7,4.8,r),i.z)}},{name:`tower`,duration:16,fov:42,pose(e,t,n){let r=mu(e);Nu(n.pos,[.2,3.9,-92],[.1,4.3,-134],r),n.look.set(-16,uu(19,33,r),-168)}},{name:`aerial`,duration:17,fov:55,pose(e,t,n){let r=mu(e);Nu(n.pos,[44,78,170],[20,54,72],r),n.look.set(0,6,uu(-30,-80,r))}},{name:`zebra`,duration:11,fov:46,pose(e,t,n){let r=mu(e);Nu(n.pos,[-10.6,1.2,25],[-9.4,1.3,27.5],r),n.look.set(2,1.4,45)}}]}function Iu(e,t){t.x+=Math.sin(e*1.7)*.018+Math.sin(e*4.3)*.006,t.y+=Math.sin(e*2.1+1.3)*.014,t.z+=Math.sin(e*1.3+.4)*.018}var Lu=1.7,Ru=new gn(0,0,0,`YXZ`),zu=new H,Bu=new H;new G,new Rt;var Vu=class{constructor(e,t,n){this.camera=e,this.input=t,this.world=n,this.mode=`tour`,this.yaw=Math.PI,this.pitch=0,this.vel=new H,this.speedMul=1,this.fade=1,this.shotIndex=-1,this.shotTime=0,this.ctx={count:0},this.pose={pos:new H,look:new H},this.baseFov=58,this.time=0,this.onMode=null,t.onInteract(e=>{e&&this.mode===`tour`&&this.setMode(`fly`)})}ready(){this.shots=Fu(this.world),this.nextShot()}setMode(e,t=!1){if(e===this.mode&&!t)return;let n=this.mode;if(this.mode=e,Ru.setFromQuaternion(this.camera.quaternion,`YXZ`),this.yaw=Ru.y,this.pitch=lu(Ru.x,-1.4,1.4),this.vel.set(0,0,0),e===`walk`){let e=this.camera.position;ku(e.x,e.z,.4)||e.set(3,Lu,60),e.y=Math.max(e.y,Lu),this.pitch=0}e===`tour`?(this.shotIndex=-1,this.nextShot()):(this.fade=0,this.setFov(this.baseFov)),this.onMode?.(e,n)}setFov(e){Math.abs(this.camera.fov-e)>.001&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}nextShot(){this.shotIndex=(this.shotIndex+1)%this.shots.length,this.shotTime=0,this.shot=this.shots[this.shotIndex],this.shot.start?.(this.ctx)}update(e){this.time+=e,this.mode===`tour`?this.updateTour(e):this.mode===`walk`?this.updateWalk(e):this.updateFly(e)}updateTour(e){let t=this.shot;this.shotTime+=e;let n=lu(this.shotTime/t.duration,0,1);t.pose(n,this.ctx,this.pose);let r=this.pose.pos;Iu(this.time,r),this.camera.position.copy(r),this.camera.lookAt(this.pose.look),this.setFov(t.fov);let i=.9,a=1-du(0,i,this.shotTime),o=du(t.duration-i,t.duration,this.shotTime);this.fade=Math.max(a,o),this.shotTime>=t.duration&&this.nextShot()}look(e){let t=this.input.takeLook(),n=.0024*(this.camera.fov/58);this.yaw-=t.x*n,this.pitch=lu(this.pitch-t.y*n,-1.5,1.5),Ru.set(this.pitch,this.yaw,0,`YXZ`),this.camera.quaternion.setFromEuler(Ru)}updateFly(e){this.look(e);let t=this.input.takeWheel();t&&(this.speedMul=lu(this.speedMul*1.18**-t,.15,8));let n=this.input.axes(),r=this.input.takePinch(),i=14*this.speedMul*(this.input.sprint?3:1);this.camera.getWorldDirection(zu),Bu.crossVectors(zu,new H(0,1,0)).normalize();let a=new H().addScaledVector(zu,n.z+r*.02).addScaledVector(Bu,n.x).addScaledVector(new H(0,1,0),n.y).multiplyScalar(i);this.vel.lerp(a,1-Math.exp(-6*e)),this.moveWithBounds(this.vel.x*e,this.vel.y*e,this.vel.z*e,!1)}updateWalk(e){this.look(e),this.input.takeWheel();let t=this.input.axes(),n=this.input.takePinch(),r=(this.input.sprint?6.5:3.2)*1,i=-Math.sin(this.yaw),a=-Math.cos(this.yaw),o=Math.cos(this.yaw),s=-Math.sin(this.yaw),c=t.z+n*.02,l=(i*c+o*t.x)*r,u=(a*c+s*t.x)*r;this.vel.x=fu(this.vel.x,l,9,e),this.vel.z=fu(this.vel.z,u,9,e),this.moveWithBounds(this.vel.x*e,0,this.vel.z*e,!0);let d=Math.sin(this.time*9.5)*.028*Math.min(1,Math.hypot(this.vel.x,this.vel.z)/3);this.camera.position.y=fu(this.camera.position.y,Lu+d,12,e)}moveWithBounds(e,t,n,r){let i=this.camera.position,a=(e,t,n)=>Math.abs(e)>300||n<Y.zMin+15||n>Y.zMax-15?!1:t>36&&!r||ku(e,n,r?.5:.3);a(i.x+e,i.y,i.z)&&(i.x+=e),a(i.x,i.y,i.z+n)&&(i.z+=n),i.y=lu(i.y+t,.5,140),!r&&i.y<=36&&!ku(i.x,i.z,.3)&&(i.y=36.5)}},Hu=class{constructor(e){this.keys=new Set,this.lookX=0,this.lookY=0,this.wheel=0,this.pinch=0,this.dragging=!1,this.listeners=new Set,this.shortcuts=new Map,this.touches=new Map,this.lastPinch=0,window.addEventListener(`keydown`,e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement||e.repeat)return;this.keys.add(e.code);let t=this.shortcuts.get(e.code);if(t){t(e),this.notify(!1);return}[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyQ`,`KeyE`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&this.notify(!0)}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear()),e.addEventListener(`pointerdown`,t=>{t.pointerType===`touch`?this.touches.set(t.pointerId,{x:t.clientX,y:t.clientY}):(this.dragging=!0,this.lastX=t.clientX,this.lastY=t.clientY),e.setPointerCapture?.(t.pointerId),this.notify(!0)}),e.addEventListener(`pointermove`,e=>{if(e.pointerType===`touch`){let t=this.touches.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,this.touches.size===1)this.lookX+=n,this.lookY+=r;else if(this.touches.size===2){let[e,t]=[...this.touches.values()],n=Math.hypot(e.x-t.x,e.y-t.y);this.lastPinch&&(this.pinch+=n-this.lastPinch),this.lastPinch=n}return}this.dragging&&(this.lookX+=e.clientX-this.lastX,this.lookY+=e.clientY-this.lastY,this.lastX=e.clientX,this.lastY=e.clientY)});let t=e=>{this.dragging=!1,this.touches.delete(e.pointerId),this.touches.size<2&&(this.lastPinch=0)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.wheel+=Math.sign(e.deltaY),this.notify(!1)},{passive:!1}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}notify(e){for(let t of this.listeners)t(e)}onInteract(e){this.listeners.add(e)}on(e,t){this.shortcuts.set(e,t)}down(...e){return e.some(e=>this.keys.has(e))}axes(){return{x:+!!this.down(`KeyD`,`ArrowRight`)-!!this.down(`KeyA`,`ArrowLeft`),y:+!!this.down(`KeyE`,`Space`)-!!this.down(`KeyQ`,`ControlLeft`),z:+!!this.down(`KeyW`,`ArrowUp`)-!!this.down(`KeyS`,`ArrowDown`)}}get sprint(){return this.down(`ShiftLeft`,`ShiftRight`)}takeLook(){let e={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,e}takeWheel(){let e=this.wheel;return this.wheel=0,e}takePinch(){let e=this.pinch;return this.pinch=0,e}},Uu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Wu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Gu=new xo(-1,1,1,-1,0,1),Ku=new class extends Lr{constructor(){super(),this.setAttribute(`position`,new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Tr([0,2,0,0,2,0],2))}},qu=class{constructor(e){this._mesh=new si(Ku,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Ju=class extends Wu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ia?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Na.clone(e.uniforms),this.material=new Ia({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Yu=class extends Wu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Xu=class extends Wu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Zu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:T}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ju(Uu),this.copyPass.material.blending=0,this.timer=new Oo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Yu!==void 0&&(r instanceof Yu?n=!0:r instanceof Xu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Qu=class extends Wu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},$u={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ed=class e extends Wu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new V(256,256):new V(e.x,e.y),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(i,a,{type:T,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new rn(i,a,{type:T,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new rn(i,a,{type:T,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=$u;this.highPassUniforms=Na.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ia({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Na.clone(Uu.uniforms),this.blendMaterial=new Ia({uniforms:this.copyUniforms,vertexShader:Uu.vertexShader,fragmentShader:Uu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new Yr,this._fsQuad=new qu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ia({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ia({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ed.BlurDirectionX=new V(1,0),ed.BlurDirectionY=new V(0,1);var td={name:`FinalShader`,uniforms:{tDiffuse:{value:null},uExposure:{value:1},uFade:{value:0},uTime:{value:0},uGrain:{value:.025},uVignette:{value:.32},uAberration:{value:7e-4},uSaturation:{value:1},uContrast:{value:1},uLift:{value:new K(0,0,0)},uGain:{value:new K(1,1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uFade;
    uniform float uTime;
    uniform float uGrain;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uSaturation;
    uniform float uContrast;
    uniform vec3 uLift;
    uniform vec3 uGain;
    varying vec2 vUv;

    // Same fit three.js uses for ACESFilmicToneMapping (Stephen Hill).
    vec3 rrtAndOdtFit(vec3 v) {
      vec3 a = v * (v + 0.0245786) - 0.000090537;
      vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
      return a / b;
    }
    vec3 acesFilmic(vec3 c) {
      const mat3 inputMat = mat3(
        vec3(0.59719, 0.07600, 0.02840),
        vec3(0.35458, 0.90834, 0.13383),
        vec3(0.04823, 0.01566, 0.83777));
      const mat3 outputMat = mat3(
        vec3(1.60475, -0.10208, -0.00327),
        vec3(-0.53108, 1.10813, -0.07276),
        vec3(-0.07367, -0.00605, 1.07602));
      return clamp(outputMat * rrtAndOdtFit(inputMat * c), 0.0, 1.0);
    }
    vec3 toSRGB(vec3 c) {
      return mix(pow(c, vec3(1.0 / 2.4)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
    }
    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      vec2 off = d * r2 * uAberration * 8.0;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;

      col = acesFilmic(col * uExposure / 0.6);

      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(lum), col, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;
      col = col * mix(vec3(1.0), uGain, smoothstep(0.35, 1.0, lum)) + uLift * (1.0 - smoothstep(0.0, 0.4, lum));
      col *= 1.0 - uVignette * smoothstep(0.2, 0.75, length(d));
      col = toSRGB(clamp(col, 0.0, 1.0));

      float n = hash12(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5;
      col += n * (uGrain * (1.0 - 0.5 * lum) + 1.0 / 255.0);
      col *= 1.0 - uFade;
      gl_FragColor = vec4(col, 1.0);
    }
  `},X={time:{value:0},hours:{value:18},night:{value:0},windowLit:{value:0},wetness:{value:0},rain:{value:0},wind:{value:.3},sunDir:{value:new H(0,1,0)},sunColor:{value:new K(1,1,1)},sunH:{value:new H(0,0,-1)},fogGlow:{value:new K(0,0,0)},skyHorizon:{value:new K(.5,.6,.8)},skyZenith:{value:new K(.1,.2,.5)},resolution:{value:new V(1,1)},noiseTex:{value:null},reflTex:{value:null},reflMatrix:{value:new G},reflOn:{value:1},lightMap:{value:null},lightMapRect:{value:new tn(-200,200,400,400)}},nd={LAMP:0,SHOP:1,NEON:2,VEHICLE:3,SIGNAL:4,MISC:5},rd=8,id={point:0,rect:1,spot:2},ad=1536,od=`
  attribute vec4 iPos;   // x, z, rotation, shape
  attribute vec4 iSize;  // half width, half depth, p1, p2
  attribute vec4 iColor; // r, g, b (already times intensity), group
  uniform float uGain[${rd}];
  varying vec2 vLocal;
  varying vec4 vSize;
  varying vec3 vColor;
  varying float vShape;
  void main() {
    vLocal = position.xy;
    vSize = iSize;
    vShape = iPos.w;
    vColor = iColor.rgb * uGain[int(iColor.a + 0.5)];
    float c = cos(iPos.z);
    float s = sin(iPos.z);
    vec2 l = position.xy * iSize.xy;
    vec2 w = iPos.xy + vec2(c * l.x - s * l.y, s * l.x + c * l.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(w.x, 0.0, w.y, 1.0);
  }
`,sd=`
  varying vec2 vLocal;
  varying vec4 vSize;
  varying vec3 vColor;
  varying float vShape;
  void main() {
    if (dot(vColor, vec3(1.0)) < 1e-4) discard;
    float i;
    if (vShape < 0.5) {
      float d = clamp(length(vLocal), 0.0, 1.0);
      float k = 1.0 - d * d;
      i = k * k;
    } else if (vShape < 1.5) {
      vec2 core = vec2(vSize.z, vSize.w);
      vec2 q = max(abs(vLocal) - core, 0.0) / max(vec2(1.0) - core, vec2(1e-3));
      i = 1.0 - smoothstep(0.0, 1.0, length(q));
    } else {
      // Spot: the source is at local y = -1, the beam opens toward +y.
      float t = clamp(vLocal.y * 0.5 + 0.5, 0.0, 1.0);
      float widthAt = mix(vSize.z, 1.0, t);
      float s = abs(vLocal.x) / max(widthAt, 1e-3);
      float across = 1.0 - smoothstep(0.55, 1.0, s);
      float along = smoothstep(0.0, 0.08, t) * pow(1.0 - t, vSize.w);
      i = across * along;
    }
    gl_FragColor = vec4(vColor * i, 1.0);
  }
`,cd=class{constructor(e=2048,t=400){this.size=e,this.extent=t,this.count=0,this.free=[],this.cam=new xo(-t/2,t/2,t/2,-t/2,.1,200),this.cam.up.set(0,0,-1),this.cam.position.set(0,100,0),this.cam.lookAt(0,0,0),this.rt=new rn(e,e,{type:T,minFilter:h,magFilter:h,depthBuffer:!1,generateMipmaps:!1}),this.rt.texture.name=`LightMap`,this.gain=new Float32Array(rd).fill(1);let n=new Ea(2,2);this.iPos=new di(new Float32Array(ad*4),4),this.iSize=new di(new Float32Array(ad*4),4),this.iColor=new di(new Float32Array(ad*4),4);for(let e of[this.iPos,this.iSize,this.iColor])e.setUsage($e);n.setAttribute(`iPos`,this.iPos),n.setAttribute(`iSize`,this.iSize),n.setAttribute(`iColor`,this.iColor),this.material=new Ia({vertexShader:od,fragmentShader:sd,uniforms:{uGain:{value:this.gain}},blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.mesh=new yi(n,this.material,ad),this.mesh.frustumCulled=!1,this.mesh.count=0,this.scene=new Un,this.scene.add(this.mesh),X.lightMap.value=this.rt.texture,X.lightMapRect.value.set(-t/2,t/2,t,t),this.dirty=!0}resize(e){e!==this.size&&(this.size=e,this.rt.setSize(e,e))}add(e){let t=this.free.pop()??this.count++;if(t>=ad)throw Error(`LightMap: too many emitters`);return this.mesh.count=Math.max(this.mesh.count,t+1),this.write(t,e),t}set(e,t){let n=this.entries?.get(e);n&&(Object.assign(n,t),this.write(e,n))}remove(e){this.write(e,{shape:`point`,x:0,z:0,group:0,color:[0,0,0],intensity:0,radius:1}),this.entries.delete(e),this.free.push(e)}write(e,t){(this.entries??(this.entries=new Map)).set(e,t);let n=t.color,r=t.intensity??1,i=t.x,a=t.z,o=t.rot??0,s,c,l=0,u=0;if(t.shape===`point`)s=c=t.radius;else if(t.shape===`rect`)s=t.hw,c=t.hd,l=t.coreW/t.hw,u=t.coreD/t.hd;else{s=t.width,c=t.range/2,l=t.taper??.12,u=t.falloff??1.4;let e=t.rot??0;o=e-Math.PI/2,i=t.x+Math.cos(e)*c,a=t.z+Math.sin(e)*c}this.iPos.setXYZW(e,i,a,o,id[t.shape]),this.iSize.setXYZW(e,s,c,l,u),this.iColor.setXYZW(e,n[0]*r,n[1]*r,n[2]*r,t.group??0),this.dirty=!0}setGroupGain(e,t){this.gain[e]=t}update(e,t,n){let r=this.extent/this.size,i=Math.round(t/r)*r,a=Math.round(n/r)*r;if(this.cam.position.set(i,100,a),this.cam.lookAt(i,0,a),this.cam.updateMatrixWorld(),X.lightMapRect.value.set(i-this.extent/2,a+this.extent/2,this.extent,this.extent),this.dirty){for(let e of[this.iPos,this.iSize,this.iColor])e.needsUpdate=!0;this.dirty=!1}let o=e.getRenderTarget(),s=e.getClearColor(new K),c=e.getClearAlpha();e.setRenderTarget(this.rt),e.setClearColor(0,1),e.clear(),e.render(this.scene,this.cam),e.setRenderTarget(o),e.setClearColor(s,c)}},ld=new H,ud=new H,dd=new H,fd=new G,pd=class{constructor(e=0){this.height=e,this.scale=.5,this.enabled=!0,this.frames=0,this.camera=new bo,this.camera.layers.set(1),this.target=new rn(4,4,{type:T,generateMipmaps:!0,minFilter:_,magFilter:h}),this.target.texture.name=`PlanarReflection`,X.reflTex.value=this.target.texture}resize(e,t){this.target.setSize(Math.max(16,Math.round(e*this.scale)),Math.max(16,Math.round(t*this.scale)))}setEnabled(e){this.enabled=e,X.reflOn.value=+!!e}render(e,t,n){if(!this.enabled||this.frames++<1||(n.updateWorldMatrix(!0,!1),ld.setFromMatrixPosition(n.matrixWorld),ld.y<=this.height+.05))return;let r=this.camera;fd.extractRotation(n.matrixWorld),ud.set(0,0,-1).applyMatrix4(fd),dd.set(0,1,0).applyMatrix4(fd),ud.y=-ud.y,dd.y=-dd.y,r.position.set(ld.x,2*this.height-ld.y,ld.z),r.up.copy(dd),r.lookAt(r.position.x+ud.x,r.position.y+ud.y,r.position.z+ud.z),r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),r.projectionMatrixInverse.copy(n.projectionMatrixInverse);let i=X.reflMatrix.value;i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(r.projectionMatrix).multiply(r.matrixWorldInverse);let a=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(t,r),e.setRenderTarget(a)}},md={low:{pixelRatio:1,msaa:0,shadowSize:1024,shadowRange:55,reflection:.35,lightMap:1024,particles:.4},medium:{pixelRatio:1.25,msaa:2,shadowSize:2048,shadowRange:70,reflection:.5,lightMap:1024,particles:.7},high:{pixelRatio:2,msaa:4,shadowSize:4096,shadowRange:80,reflection:.6,lightMap:2048,particles:1}},hd=[1,.9,.8,.7,.6],gd=class{constructor(e,t=`high`){this.container=e,this.renderer=new ou({antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.toneMapping=0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.info.autoReset=!1,e.appendChild(this.renderer.domElement),this.scene=new Un,this.camera=new bo(58,1,.2,2600),this.camera.layers.enable(1),this.adaptive=!0,this.scaleIndex=0,this.frameAcc=0,this.frameCount=0,this.cooldown=0,this.lost=!1,this.onQuality=null,this.renderer.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.lost=!0}),this.renderer.domElement.addEventListener(`webglcontextrestored`,()=>{this.lost=!1}),this.q=md[t]??md.high,this.quality=md[t]?t:`high`,this.reflection=new pd(0),this.lightMap=new cd(this.q.lightMap,400),this.buildComposer(),this.resize(),window.addEventListener(`resize`,()=>this.resize())}get domElement(){return this.renderer.domElement}get scale(){return hd[this.scaleIndex]}get pixelRatio(){return Math.min(window.devicePixelRatio||1,this.q.pixelRatio)*this.scale}setQuality(e){if(!md[e])return;let t=this.q.msaa;this.quality=e,this.q=md[e],this.scaleIndex=0,this.q.msaa!==t&&this.buildComposer(),this.resize(),this.onQuality?.(this.q,e)}setAdaptive(e){this.adaptive=e,!e&&this.scaleIndex!==0&&(this.scaleIndex=0,this.resize())}buildComposer(){let e=this.renderer.getSize(new V),t=new rn(Math.max(e.x,1),Math.max(e.y,1),{type:T,samples:this.q.msaa});this.composer?.dispose(),this.composer=new Zu(this.renderer,t),this.composer.renderTarget1.samples=0,this.renderPass=new Qu(this.scene,this.camera),this.bloomPass=new ed(new V(e.x,e.y),.3,.6,1),this.finalPass=new Ju(td),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.finalPass),this.composer.setPixelRatio(this.pixelRatio)}resize(){let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;if(!e||!t)return;let n=this.pixelRatio;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),X.resolution.value.set(e*n,t*n),this.reflection.scale=this.q.reflection,this.reflection.setEnabled(this.q.reflection>0&&this.reflectionWanted!==!1),this.reflection.resize(e*n,t*n),this.lightMap.resize(this.q.lightMap)}render(e,t={}){if(this.lost)return;let n=this.finalPass.uniforms;n.uExposure.value=t.exposure??1,n.uFade.value=t.fade??0,n.uTime.value=t.time??0,t.grade&&(n.uSaturation.value=t.grade.saturation??1,n.uContrast.value=t.grade.contrast??1,t.grade.lift&&n.uLift.value.copy(t.grade.lift),t.grade.gain&&n.uGain.value.copy(t.grade.gain)),t.bloom&&(this.bloomPass.strength=t.bloom.strength,this.bloomPass.threshold=t.bloom.threshold,this.bloomPass.radius=t.bloom.radius),this.bloomPass.enabled=!!t.bloom&&t.bloom.strength>.001,this.renderer.info.reset();let r=this.renderer.shadowMap,i=r.needsUpdate;r.needsUpdate=!1,this.lightMap.update(this.renderer,this.camera.position.x,this.camera.position.z),this.reflection.render(this.renderer,this.scene,this.camera),r.needsUpdate=i,this.composer.render(e),this.trackFrame(e)}trackFrame(e){if(!this.adaptive||e>.25||(this.frameAcc+=e,this.frameCount++,this.cooldown-=e,this.frameAcc<1.5||this.cooldown>0))return;let t=this.frameAcc/this.frameCount;this.frameAcc=0,this.frameCount=0;let n=this.scaleIndex;t>1/42&&n<hd.length-1?n++:t<1/70&&n>0&&n--,n!==this.scaleIndex&&(this.scaleIndex=n,this.cooldown=3,this.resize())}capture(e=0,t={}){return new Promise(n=>{this.render(e,t),this.renderer.domElement.toBlob(n,`image/png`)})}get stats(){let e=this.renderer.info;return{calls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures}}},_d={x:-16,z:-168},vd=class{constructor(){this.ctx=null,this.enabled=!1,this.voices=[],this.lastBell=0,this.suspended=!1}setEnabled(e){this.enabled=e,e&&!this.ctx&&this.init(),this.ctx&&(e&&this.ctx.resume(),this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.4),e||setTimeout(()=>!this.enabled&&this.ctx.suspend(),900))}setSuspended(e){this.suspended=e,this.ctx&&this.enabled&&(e?this.ctx.suspend():this.ctx.resume())}init(){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.master.connect(n).connect(t.destination);let r=t.sampleRate*3,i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0),o=0;for(let e=0;e<r;e++)a[e]=Math.random()*2-1;this.noiseBuf=i;let s=t.createBuffer(1,r,t.sampleRate),c=s.getChannelData(0);for(let e=0;e<r;e++)o=(o+.02*(Math.random()*2-1))/1.02,c[e]=o*3.5;this.brownBuf=s;let l=(e=this.noiseBuf)=>{let n=t.createBufferSource();return n.buffer=e,n.loop=!0,n.start(0,Math.random()*2),n},u=(e,n,r=0)=>{let i=e;for(let e of n)i.connect(e),i=e;let a=t.createGain();return a.gain.value=r,i.connect(a).connect(this.master),a},d=(e,n,r=.7)=>{let i=t.createBiquadFilter();return i.type=e,i.frequency.value=n,i.Q.value=r,i};this.rain=u(l(),[d(`highpass`,1400),d(`lowpass`,9500)]),this.rainLow=u(l(),[d(`bandpass`,700,.8)]),this.drops=u(l(),[d(`bandpass`,3800,3)]),this.wind=u(l(this.brownBuf),[d(`bandpass`,380,.6)]),this.hum=u(l(this.brownBuf),[d(`lowpass`,220)]),this.traffic=u(l(),[d(`bandpass`,420,.7),d(`lowpass`,1200)]);let f=(e,n,r)=>{let i=t.createOscillator();i.frequency.value=e;let a=t.createGain();a.gain.value=n,i.connect(a).connect(r),i.start()};this.windFilter=null,f(.11,.45,this.wind.gain),f(.7,.35,this.drops.gain),f(.23,.15,this.rain.gain);for(let e=0;e<4;e++){let e=t.createOscillator();e.type=`sawtooth`,e.frequency.value=60;let n=d(`lowpass`,700,.5),r=t.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0,r.start(0,Math.random()*2);let i=d(`bandpass`,900,1),a=t.createGain();a.gain.value=0;let o=t.createGain();o.gain.value=0;let s=t.createStereoPanner();e.connect(n).connect(a).connect(s),r.connect(i).connect(o).connect(s),s.connect(this.master),e.start(),this.voices.push({osc:e,eg:a,rg:o,pan:s,rollF:i})}this.reverb=t.createGain();let p=t.createDelay(1);p.delayTime.value=.27;let m=t.createGain();m.gain.value=.42;let h=d(`lowpass`,2400);this.reverb.connect(p),p.connect(h).connect(m).connect(p),h.connect(this.master),this.bus=t.createGain(),this.bus.connect(this.master),this.bus.connect(this.reverb)}strike(e,t,n,r=[1,2,2.76,5.4],i=0){let a=this.ctx,o=a.currentTime+i;r.forEach((r,i)=>{let s=a.createOscillator();s.type=`sine`,s.frequency.value=e*r;let c=a.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(t/(1+i*1.3)*(i===0?1.4:1),o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+n/(1+i*.7)),s.connect(c).connect(this.bus),s.start(o),s.stop(o+n+.1)})}hourBell(e,t){if(!this.enabled||!this.ctx)return;let n=lu(1.25-Math.hypot(t.x-_d.x,t.z-_d.z)/420,.05,1),r=e%12||12;for(let e=0;e<r;e++)this.strike(196,.22*n,5.5,[.5,1,1.19,1.5,2,2.6,4.1],e*2.1)}tramBell(e){if(this.enabled&&this.ctx)for(let t=0;t<2;t++)this.strike(1180,.09*e,.9,[1,2.4],t*.28)}thunder(e){if(!this.enabled||!this.ctx)return;let t=this.ctx,n=t.createBufferSource();n.buffer=this.brownBuf;let r=t.createBiquadFilter();r.type=`lowpass`;let i=t.currentTime;r.frequency.setValueAtTime(900,i),r.frequency.exponentialRampToValueAtTime(70,i+4);let a=t.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.9*e,i+.25),a.gain.exponentialRampToValueAtTime(.001,i+5),n.connect(r).connect(a),a.connect(this.bus),n.start(i,Math.random()),n.stop(i+5.2)}update(e,t,n){if(!this.enabled||!this.ctx||this.suspended)return;let r=this.ctx.currentTime,i=t.weather,a=t.state,o=(e,t,n=.35)=>e.setTargetAtTime(t,r,n),s=i.rain;o(this.rain.gain,.16*s*s+.05*s),o(this.rainLow.gain,.09*s),o(this.drops.gain,.05*s),o(this.wind.gain,.03+.14*i.wind+.06*i.storm),o(this.hum.gain,.16+.03*a.night);let c=.55+.45*(1-a.night*.7);o(this.traffic.gain,.05*c);let l=n.position,u=[];for(let e of t.traffic.model.vehicles){let t=ju(e.lane,e.s-e.len/2),n=t.x-l.x,r=t.z-l.z,i=Math.hypot(n,r);i<70&&u.push({v:e,p:t,d:i,dx:n,dz:r})}u.sort((e,t)=>e.d-t.d);let d=Math.cos(n.rotation.y),f=-Math.sin(n.rotation.y);this.voices.forEach((t,n)=>{let i=u[n];if(!i){o(t.eg.gain,0,.15),o(t.rg.gain,0,.15);return}let a=i.v.type===`tram`,c=i.v.v,l=1/(1+(i.d/9)**2);t.osc.type=a?`triangle`:`sawtooth`,o(t.osc.frequency,a?90+c*22:38+c*5.5,.1),o(t.eg.gain,(a?.05:.035)*l*(.35+Math.min(1,c/10)),.12),o(t.rg.gain,.05*l*Math.min(1,c/9)*(1+s),.12),o(t.rollF.frequency,700+c*50,.2),o(t.pan.pan,lu((i.dx*d+i.dz*f)/Math.max(i.d,6),-1,1),.1),a&&i.d<40&&c>1&&r-this.lastBell>9&&Math.random()<e*.25&&(this.tramBell(l),this.lastBell=r)});for(let e of i.takeThunder())this.thunder(e.strength)}},yd=`autumnavenue.`;function bd(e,t){try{let n=localStorage.getItem(yd+e);return n==null?t:JSON.parse(n)}catch{return t}}function xd(e,t){try{localStorage.setItem(yd+e,JSON.stringify(t))}catch{}}var Sd={ru:{"app.title":`Осенний проспект`,"app.subtitle":`Дождливый осенний вечер в процедурном городе`,"loader.textures":`Рисую асфальт и кирпич`,"loader.layout":`Размечаю проспект`,"loader.buildings":`Поднимаю дома`,"loader.props":`Сажу деревья, вешаю фонари`,"loader.life":`Оживляю город`,"loader.ready":`Улица готова`,"loader.enter":`Войти`,"loader.tip":`В наушниках и в тёмной комнате лучше. Звук включится при входе.`,"error.webgl":`Для этой демки нужен WebGL 2. Включите аппаратное ускорение или попробуйте другой браузер.`,"hud.time":`Время суток`,"hud.speed":`Течение времени`,"hud.speed.0":`Пауза`,"hud.weather":`Погода`,"hud.camera":`Камера`,"hud.sound":`Звук`,"hud.fullscreen":`Во весь экран`,"hud.settings":`Настройки`,"hud.photo":`Сохранить кадр (P)`,"hud.hide":`Скрыть интерфейс (H)`,"weather.clear":`Ясно`,"weather.cloudy":`Пасмурно`,"weather.drizzle":`Морось`,"weather.rain":`Дождь`,"weather.storm":`Гроза`,"weather.fog":`Туман`,"camera.tour":`Экскурсия`,"camera.walk":`Прогулка`,"camera.fly":`Полёт`,"daypart.night":`Ночь`,"daypart.dawn":`Рассвет`,"daypart.morning":`Утро`,"daypart.day":`День`,"daypart.golden":`Золотой час`,"daypart.dusk":`Сумерки`,"settings.title":`Настройки`,"settings.quality":`Графика`,"settings.adaptive":`Адаптивное разрешение`,"settings.reflections":`Отражения на мокрой дороге`,"settings.fps":`Показывать FPS`,"settings.language":`Язык`,"quality.low":`Низкая`,"quality.medium":`Средняя`,"quality.high":`Высокая`,"hint.tour":`Потяните мышь или нажмите любую клавишу, чтобы взять управление`,"hint.walk":`WASD — идти · Shift — бежать · мышь — осмотреться`,"hint.fly":`WASD / Q E — лететь · Shift — быстрее · колесо — скорость · мышь — осмотреться`,"hint.keys":`1 2 3 — камера · T — течение времени · R — погода · M — звук · P — снимок · H — скрыть интерфейс`,"toast.saved":`Кадр сохранён`,"toast.sound.on":`Звук включён`,"toast.sound.off":`Звук выключен`,"toast.ui.hidden":`Интерфейс скрыт. Нажмите H, чтобы вернуть`,"sign.bakery":`ПЕКАРНЯ`,"sign.pharmacy":`АПТЕКА`,"sign.books":`КНИГИ`,"sign.flowers":`Цветы`,"sign.barber":`БАРБЕРШОП`,"sign.cinema":`КИНО`,"sign.market":`ПРОДУКТЫ`,"sign.wine":`ВИНО`,"sign.pizza":`ПИЦЦА`,"sign.bikes":`ВЕЛОСИПЕДЫ`,"sign.tea":`ЧАЙНАЯ`,"sign.optics":`ОПТИКА`,"sign.bank":`БАНК`,"sign.photo":`ФОТО`,"sign.atelier":`Ателье`,"sign.open":`ОТКРЫТО`,"sign.street":`ПР. ОСЕННИЙ`,"poster.jazz":`ДЖАЗ-ВЕЧЕР`,"poster.opera":`ОПЕРА`,"poster.expo":`ВЫСТАВКА`,"poster.circus":`Цирк`,"poster.market":`Осенняя ярмарка`,"poster.concert":`LIVE`},en:{"app.title":`Autumn Avenue`,"app.subtitle":`A rainy autumn evening in a procedural city`,"loader.textures":`Painting asphalt and brick`,"loader.layout":`Laying out the avenue`,"loader.buildings":`Raising the buildings`,"loader.props":`Planting trees, hanging lamps`,"loader.life":`Waking the city up`,"loader.ready":`The street is ready`,"loader.enter":`Enter`,"loader.tip":`Headphones and a dark room help. Sound starts when you enter.`,"error.webgl":`This demo needs WebGL 2. Enable hardware acceleration or try another browser.`,"hud.time":`Time of day`,"hud.speed":`Flow of time`,"hud.speed.0":`Paused`,"hud.weather":`Weather`,"hud.camera":`Camera`,"hud.sound":`Sound`,"hud.fullscreen":`Fullscreen`,"hud.settings":`Settings`,"hud.photo":`Save screenshot (P)`,"hud.hide":`Hide interface (H)`,"weather.clear":`Clear`,"weather.cloudy":`Overcast`,"weather.drizzle":`Drizzle`,"weather.rain":`Rain`,"weather.storm":`Thunderstorm`,"weather.fog":`Fog`,"camera.tour":`Tour`,"camera.walk":`Walk`,"camera.fly":`Fly`,"daypart.night":`Night`,"daypart.dawn":`Dawn`,"daypart.morning":`Morning`,"daypart.day":`Day`,"daypart.golden":`Golden hour`,"daypart.dusk":`Dusk`,"settings.title":`Settings`,"settings.quality":`Graphics`,"settings.adaptive":`Adaptive resolution`,"settings.reflections":`Wet-road reflections`,"settings.fps":`Show FPS`,"settings.language":`Language`,"quality.low":`Low`,"quality.medium":`Medium`,"quality.high":`High`,"hint.tour":`Drag the mouse or press any key to take control`,"hint.walk":`WASD walk · Shift run · drag to look around`,"hint.fly":`WASD / Q E fly · Shift faster · wheel speed · drag to look`,"hint.keys":`1 2 3 camera · T time flow · R weather · M sound · P screenshot · H hide UI`,"toast.saved":`Screenshot saved`,"toast.sound.on":`Sound on`,"toast.sound.off":`Sound off`,"toast.ui.hidden":`Interface hidden. Press H to bring it back`,"sign.bakery":`BAKERY`,"sign.pharmacy":`PHARMACY`,"sign.books":`BOOKS`,"sign.flowers":`Flowers`,"sign.barber":`BARBER SHOP`,"sign.cinema":`CINEMA`,"sign.market":`GROCERY`,"sign.wine":`WINE`,"sign.pizza":`PIZZA`,"sign.bikes":`BIKES`,"sign.tea":`TEA HOUSE`,"sign.optics":`OPTICS`,"sign.bank":`BANK`,"sign.photo":`PHOTO`,"sign.atelier":`Atelier`,"sign.open":`OPEN`,"sign.street":`AUTUMN AVE.`,"poster.jazz":`JAZZ NIGHT`,"poster.opera":`OPERA`,"poster.expo":`EXHIBITION`,"poster.circus":`Circus`,"poster.market":`Autumn Fair`,"poster.concert":`LIVE`}},Cd=[{code:`ru`,label:`Русский`},{code:`en`,label:`English`}];function wd(){let e=bd(`lang`,null);if(e&&Sd[e])return e;let t=(globalThis.navigator?.language||`en`).slice(0,2).toLowerCase();return Sd[t]?t:`en`}var Td=wd(),Ed=new Set;function Dd(){return Td}function Od(e){Sd[e]&&e!==Td&&(Td=e,xd(`lang`,e),document.documentElement.lang=e,Ed.forEach(t=>t(e)))}function kd(e){return Ed.add(e),()=>Ed.delete(e)}function Ad(e,t){let n=Sd[Td][e]??Sd.en[e]??e;if(t)for(let[e,r]of Object.entries(t))n=n.replaceAll(`{${e}}`,String(r));return n}function jd(e=document){e.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=Ad(e.dataset.i18n)}),e.querySelectorAll(`[data-i18n-title]`).forEach(e=>{e.title=Ad(e.dataset.i18nTitle)})}var Md=(e,t=``)=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,Nd={tour:Md(`<rect x="3" y="6" width="14" height="11" rx="2"/><path d="M17 10l4-2v8l-4-2"/><circle cx="7.5" cy="11.5" r="1.6"/>`),walk:Md(`<circle cx="13" cy="4.5" r="1.8"/><path d="M11 21l2-6-3-3 1.5-4.5M13 8l3 3 3 1M13 15l3 2 1 4M10 11l-3 3"/>`),fly:Md(`<path d="M3 12l18-8-6 16-3-7z"/><path d="M12 13l9-9"/>`),sound:Md(`<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11"/>`),soundOff:Md(`<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/>`),gear:Md(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>`),fullscreen:Md(`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`),photo:Md(`<path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>`),hide:Md(`<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 4l16 16"/>`),play:Md(`<path d="M7 5l12 7-12 7z" fill="currentColor"/>`),pause:Md(`<path d="M8 5v14M16 5v14" stroke-width="2.6"/>`),sun:Md(`<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>`),moon:Md(`<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>`),clear:Md(`<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M5.3 18.7l1.9-1.9M16.8 7.2l1.9-1.9"/>`),cloudy:Md(`<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5 4.3 4.3 0 0117.5 18z"/>`),drizzle:Md(`<path d="M7 14a4.5 4.5 0 01-.6-8.96A6 6 0 0118 5.5 4.3 4.3 0 0117.5 14z"/><path d="M9 17.5l-.8 2M14 17.5l-.8 2"/>`),rain:Md(`<path d="M7 13a4.5 4.5 0 01-.6-8.96A6 6 0 0118 4.5 4.3 4.3 0 0117.5 13z"/><path d="M8 16l-1.2 3.4M12.5 16l-1.2 3.4M17 16l-1.2 3.4"/>`),storm:Md(`<path d="M7 13a4.5 4.5 0 01-.6-8.96A6 6 0 0118 4.5 4.3 4.3 0 0117.5 13z"/><path d="M12.5 13l-2.5 4h3.5l-2.5 5"/>`),fog:Md(`<path d="M4 8h13M7 12h13M3 16h11M9 20h9"/>`),check:Md(`<path d="M5 12.5l4.5 4.5L19 7.5"/>`)},Pd=[`clear`,`cloudy`,`drizzle`,`rain`,`storm`,`fog`],Fd=[`tour`,`walk`,`fly`],Id=[0,1,15,60,300],Ld=[`low`,`medium`,`high`],Rd=e=>{let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstElementChild},zd=class{constructor(e,t){this.root=e,this.h=t,this.dragging=!1,this.toastTimer=0,this.hidden=!1,this.buildLoader(),this.buildHud(),jd(e),kd(()=>{jd(e),document.title=Ad(`app.title`),this.refreshTexts()}),document.title=Ad(`app.title`)}buildLoader(){this.loader=Rd(`
      <div class="loader">
        <div class="loader-card">
          <div class="loader-leaf">${Nd.sun.replace(`stroke="currentColor"`,`stroke="#f2a23a"`)}</div>
          <h1 data-i18n="app.title"></h1>
          <p class="sub" data-i18n="app.subtitle"></p>
          <div class="bar"><div class="fill"></div></div>
          <div class="step"></div>
          <button class="enter" data-i18n="loader.enter" hidden></button>
          <p class="tip" data-i18n="loader.tip"></p>
        </div>
      </div>`),this.fill=this.loader.querySelector(`.fill`),this.stepEl=this.loader.querySelector(`.step`),this.enterBtn=this.loader.querySelector(`.enter`),this.root.appendChild(this.loader)}setProgress(e,t){this.fill.style.width=`${Math.round(e*100)}%`,this.stepEl.dataset.i18n=t,this.stepEl.textContent=Ad(t)}showEnter(e){this.enterBtn.hidden=!1,this.enterBtn.addEventListener(`click`,()=>{this.hideLoader(),e()}),this.enterBtn.focus()}hideLoader(){this.loader.classList.add(`gone`),setTimeout(()=>this.loader.remove(),900)}showError(e){this.loader.querySelector(`.bar`).hidden=!0,this.stepEl.dataset.i18n=e,this.stepEl.textContent=Ad(e),this.stepEl.classList.add(`error`)}buildHud(){let e=this.h;this.hud=Rd(`
      <div class="hud">
        <div class="top-left">
          <div class="brand"><span class="brand-mark"></span><span class="brand-name" data-i18n="app.title"></span></div>
          <div class="fps" hidden></div>
        </div>
        <div class="top-right">
          <div class="panel seg" data-group="mode">
            ${Fd.map(e=>`<button data-mode="${e}" title="" data-i18n-title="camera.${e}">${Nd[e]}<span data-i18n="camera.${e}"></span></button>`).join(``)}
          </div>
          <div class="panel icons">
            <button class="btn-sound" data-i18n-title="hud.sound"></button>
            <button class="btn-photo" data-i18n-title="hud.photo">${Nd.photo}</button>
            <button class="btn-hide" data-i18n-title="hud.hide">${Nd.hide}</button>
            <button class="btn-full" data-i18n-title="hud.fullscreen">${Nd.fullscreen}</button>
            <button class="btn-gear" data-i18n-title="hud.settings">${Nd.gear}</button>
          </div>
        </div>

        <div class="bottom">
          <div class="panel weather">
            ${Pd.map(e=>`<button data-weather="${e}" data-i18n-title="weather.${e}">${Nd[e]}<span data-i18n="weather.${e}"></span></button>`).join(``)}
          </div>
          <div class="panel time">
            <div class="time-head">
              <div class="clock"><span class="clock-icon"></span><span class="clock-text">18:24</span><span class="daypart"></span></div>
              <div class="speeds" data-i18n-title="hud.speed">
                ${Id.map(e=>`<button data-speed="${e}">${e===0?Nd.pause:`×${e}`}</button>`).join(``)}
              </div>
            </div>
            <input class="slider" type="range" min="0" max="24" step="0.01" value="18.4" data-i18n-title="hud.time" />
          </div>
          <div class="hint"><span class="hint-mode"></span><span class="hint-keys" data-i18n="hint.keys"></span></div>
        </div>

        <div class="panel settings" hidden>
          <h3 data-i18n="settings.title"></h3>
          <div class="row"><span data-i18n="settings.quality"></span><div class="chips" data-group="quality">${Ld.map(e=>`<button data-quality="${e}" data-i18n="quality.${e}"></button>`).join(``)}</div></div>
          <label class="row"><span data-i18n="settings.adaptive"></span><button class="switch" role="switch" data-key="adaptive"></button></label>
          <label class="row"><span data-i18n="settings.reflections"></span><button class="switch" role="switch" data-key="reflections"></button></label>
          <label class="row"><span data-i18n="settings.fps"></span><button class="switch" role="switch" data-key="fps"></button></label>
          <div class="row"><span data-i18n="settings.language"></span><div class="chips" data-group="lang">${Cd.map(e=>`<button data-lang="${e.code}">${e.label}</button>`).join(``)}</div></div>
        </div>
        <div class="toast" hidden></div>
      </div>`),this.root.appendChild(this.hud);let t=e=>this.hud.querySelector(e);this.slider=t(`.slider`),this.clockText=t(`.clock-text`),this.clockIcon=t(`.clock-icon`),this.daypart=t(`.daypart`),this.hintMode=t(`.hint-mode`),this.settings=t(`.settings`),this.fpsEl=t(`.fps`),this.toastEl=t(`.toast`),this.soundBtn=t(`.btn-sound`),this.slider.addEventListener(`input`,()=>{this.dragging=!0,e.onTime(parseFloat(this.slider.value))}),this.slider.addEventListener(`change`,()=>{this.dragging=!1}),this.hud.querySelectorAll(`[data-mode]`).forEach(t=>t.addEventListener(`click`,()=>e.onMode(t.dataset.mode))),this.hud.querySelectorAll(`[data-weather]`).forEach(t=>t.addEventListener(`click`,()=>e.onWeather(t.dataset.weather))),this.hud.querySelectorAll(`[data-speed]`).forEach(t=>t.addEventListener(`click`,()=>e.onSpeed(parseFloat(t.dataset.speed)))),this.hud.querySelectorAll(`[data-quality]`).forEach(t=>t.addEventListener(`click`,()=>e.onQuality(t.dataset.quality))),this.hud.querySelectorAll(`[data-lang]`).forEach(e=>e.addEventListener(`click`,()=>Od(e.dataset.lang))),this.soundBtn.addEventListener(`click`,()=>e.onSound()),t(`.btn-photo`).addEventListener(`click`,()=>e.onScreenshot()),t(`.btn-hide`).addEventListener(`click`,()=>this.setHidden(!0)),t(`.btn-full`).addEventListener(`click`,()=>e.onFullscreen()),t(`.btn-gear`).addEventListener(`click`,()=>this.settings.hidden=!this.settings.hidden),this.hud.querySelectorAll(`.switch`).forEach(t=>t.addEventListener(`click`,()=>e.onSwitch(t.dataset.key))),this.hud.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.refreshTexts()}refreshTexts(){this.setSound(this.soundOn??!1,!0),this.hud.querySelectorAll(`[data-lang]`).forEach(e=>e.classList.toggle(`active`,e.dataset.lang===Dd())),this.setMode(this.mode??`tour`)}setHidden(e,t=!1){this.hidden=e,this.root.classList.toggle(`hud-hidden`,e),e&&!t&&this.toast(`toast.ui.hidden`)}toggleHidden(){this.setHidden(!this.hidden)}setMode(e){this.mode=e,this.hud.querySelectorAll(`[data-mode]`).forEach(t=>t.classList.toggle(`active`,t.dataset.mode===e)),this.hintMode.textContent=Ad(`hint.${e}`)}setSound(e,t=!1){this.soundOn=e,this.soundBtn.innerHTML=e?Nd.sound:Nd.soundOff,this.soundBtn.classList.toggle(`active`,e),t||this.toast(e?`toast.sound.on`:`toast.sound.off`)}setWeather(e){this.hud.querySelectorAll(`[data-weather]`).forEach(t=>t.classList.toggle(`active`,t.dataset.weather===e))}setSpeed(e,t){let n=t?0:e;this.hud.querySelectorAll(`[data-speed]`).forEach(e=>e.classList.toggle(`active`,parseFloat(e.dataset.speed)===n))}setQuality(e){this.hud.querySelectorAll(`[data-quality]`).forEach(t=>t.classList.toggle(`active`,t.dataset.quality===e))}setSwitch(e,t){let n=this.hud.querySelector(`.switch[data-key="${e}"]`);n.classList.toggle(`on`,t),n.setAttribute(`aria-checked`,String(t))}showFps(e){this.fpsEl.hidden=!e}update({hours:e,elevation:t,fps:n,night:r}){let i=Math.floor(e),a=Math.floor((e-i)*60);this.clockText.textContent=`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`,this.dragging||(this.slider.value=String(e));let o=Bd(e,t);o!==this.part&&(this.part=o,this.daypart.dataset.i18n=`daypart.${o}`,this.daypart.textContent=Ad(`daypart.${o}`));let s=r>.5?`moon`:`sun`;s!==this.icon&&(this.icon=s,this.clockIcon.innerHTML=Nd[s]),!this.fpsEl.hidden&&n&&(this.fpsEl.textContent=`${Math.round(n)} fps`)}toast(e){this.toastEl.textContent=Ad(e),this.toastEl.hidden=!1,this.toastEl.classList.remove(`show`),this.toastEl.offsetWidth,this.toastEl.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.hidden=!0,2600)}};function Bd(e,t){let n=t*180/Math.PI;if(n<-12)return`night`;let r=e<12;return n<-1?r?`dawn`:`dusk`:n<9?r?`dawn`:`golden`:n<22?r?`morning`:`golden`:r?`morning`:`day`}var Vd={clear:{cloud:.12,rain:0,fog:0,wind:.2,storm:0},cloudy:{cloud:.75,rain:0,fog:.12,wind:.35,storm:0},drizzle:{cloud:.85,rain:.35,fog:.1,wind:.3,storm:0},rain:{cloud:.95,rain:.75,fog:.16,wind:.45,storm:0},storm:{cloud:1,rain:1,fog:.2,wind:.9,storm:1},fog:{cloud:.55,rain:0,fog:1,wind:.08,storm:0}},Hd=[`clear`,`cloudy`,`drizzle`,`rain`,`storm`,`fog`],Ud=[`cloud`,`rain`,`fog`,`wind`,`storm`],Wd=class{constructor(e=`drizzle`,t=!0){this.time=0,this.flash=0,this.wetness=0,this.thunder=[],this.strikeIn=8,this.queuedFlickers=[],this.set(e,t),t&&(this.wetness=lu(this.rain*3,0,1))}set(e,t=!1){let n=Vd[e];if(n&&(this.preset=e,this.target={...n},t))for(let e of Ud)this[e]=n[e]}update(e){this.time+=e;for(let t of Ud)this[t]=fu(this[t],this.target[t],.6,e);this.wetness=this.rain>.05?lu(this.wetness+this.rain*.3*e,0,1):lu(this.wetness-(.006+.012*(1-this.cloud))*e,0,1),this.updateLightning(e)}updateLightning(e){this.flash*=Math.exp(-9*e),this.flash<.002&&(this.flash=0);for(let t=this.queuedFlickers.length-1;t>=0;t--)this.queuedFlickers[t]-=e,this.queuedFlickers[t]<=0&&(this.flash=.8,this.queuedFlickers.splice(t,1));if(this.storm<.5||(this.strikeIn-=e,this.strikeIn>0))return;this.strikeIn=uu(5,18,Math.random()),this.flash=1,this.queuedFlickers.push(.09+Math.random()*.1);let t=uu(400,3500,Math.random());this.thunder.push({at:this.time+t/340,strength:1-t/4e3})}takeThunder(){let e=this.thunder.filter(e=>e.at<=this.time);return e.length&&(this.thunder=this.thunder.filter(e=>e.at>this.time)),e}},Gd=class{constructor(e=Date.now()>>>0){this.state=e>>>0}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(this.next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}weighted(e){let t=0;for(let n of e)t+=n.w;let n=this.next()*t;for(let t of e)if(n-=t.w,n<=0)return t;return e[e.length-1]}};function Kd(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var qd=[1,1,1],Jd=new Map;function Yd(e){if(e==null)return qd;if(Array.isArray(e))return e;if(e.isColor)return[e.r,e.g,e.b];let t=Jd.get(e);if(!t){let n=new K(e);t=[n.r,n.g,n.b],Jd.set(e,t)}return t}var Xd=e=>Array.isArray(e.uvScale)?e.uvScale:[e.uvScale??1,e.uvScale??1],Zd=new H,Qd=new H,$d=class{constructor(e={}){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[],this.extraSchema=e,this.extra={};for(let t of Object.keys(e))this.extra[t]=[];this.matrix=new G,this.normalMatrix=new U,this.stack=[],this.flip=!1}get vertexCount(){return this.pos.length/3}updateNormalMatrix(){this.normalMatrix.getNormalMatrix(this.matrix),this.flip=this.matrix.determinant()<0}setMatrix(e){return this.matrix.copy(e),this.updateNormalMatrix(),this}pushMatrix(e){return this.stack.push(this.matrix.clone()),this.matrix.multiply(e),this.updateNormalMatrix(),this}popMatrix(){return this.matrix.copy(this.stack.pop()),this.updateNormalMatrix(),this}vertex(e,t,n,r,i,a,o,s,c,l){Zd.set(e,t,n).applyMatrix4(this.matrix),Qd.set(r,i,a).applyMatrix3(this.normalMatrix).normalize(),this.pos.push(Zd.x,Zd.y,Zd.z),this.nor.push(Qd.x,Qd.y,Qd.z),this.uv.push(o,s),this.col.push(c[0],c[1],c[2]);for(let e in this.extra){let t=this.extraSchema[e],n=l?l[e]:void 0;for(let r=0;r<t;r++)this.extra[e].push(n?n[r]??0:0)}return this.pos.length/3-1}tri(e,t,n){this.flip?this.idx.push(e,n,t):this.idx.push(e,t,n)}box(e,t,n,r,i,a,o={}){let s=Yd(o.color),[c,l]=Xd(o),[u,d]=o.uvOffset??[0,0],[f,p]=o.ao??[1,1],m=o.skip??[],h=(e,n,r,i,a,h)=>{if(m.includes(e))return;let g=a.map(([e,a,m])=>{let[g,_]=h(e,a,m),v=r>0?p:r<0||a===t?f:p;return this.vertex(e,a,m,n,r,i,(g+u)/c,(_+d)/l,[s[0]*v,s[1]*v,s[2]*v],o.attrs)});this.tri(g[0],g[1],g[2]),this.tri(g[0],g[2],g[3])};return h(`front`,0,0,1,[[e,t,a],[r,t,a],[r,i,a],[e,i,a]],(e,t)=>[e,t]),h(`back`,0,0,-1,[[r,t,n],[e,t,n],[e,i,n],[r,i,n]],(e,t)=>[-e,t]),h(`right`,1,0,0,[[r,t,a],[r,t,n],[r,i,n],[r,i,a]],(e,t,n)=>[-n,t]),h(`left`,-1,0,0,[[e,t,n],[e,t,a],[e,i,a],[e,i,n]],(e,t,n)=>[n,t]),h(`top`,0,1,0,[[e,i,a],[r,i,a],[r,i,n],[e,i,n]],(e,t,n)=>[e,-n]),h(`bottom`,0,-1,0,[[e,t,n],[r,t,n],[r,t,a],[e,t,a]],(e,t,n)=>[e,n]),this}quad(e,t,n,r,i={}){let a=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],o=[r[0]-e[0],r[1]-e[1],r[2]-e[2]],s=a[1]*o[2]-a[2]*o[1],c=a[2]*o[0]-a[0]*o[2],l=a[0]*o[1]-a[1]*o[0],u=Math.hypot(s,c,l)||1;s/=u,c/=u,l/=u;let d=[e,t,n,r],f=Yd(i.color),p=d.map(e=>e[1]),m=Math.min(...p),h=Math.max(...p),[g,_]=i.ao??[1,1],[v,y]=Xd(i),[b,x]=i.uvOffset??[0,0],S=i.uv,C=S?[[S[0],S[1]],[S[2],S[1]],[S[2],S[3]],[S[0],S[3]]]:null,w=Math.abs(s),T=Math.abs(c),E=Math.abs(l),D=d.map((e,t)=>{let n,r;C?[n,r]=C[t]:E>=w&&E>=T?[n,r]=[(e[0]*Math.sign(l||1)+b)/v,(e[1]+x)/y]:w>=T?[n,r]=[(-e[2]*Math.sign(s)+b)/v,(e[1]+x)/y]:[n,r]=[(e[0]+b)/v,(-e[2]*Math.sign(c)+x)/y];let a=i.colors?Yd(i.colors[t]):f,o=h-m<1e-6?_:g+(_-g)*((e[1]-m)/(h-m));return this.vertex(e[0],e[1],e[2],s,c,l,n,r,[a[0]*o,a[1]*o,a[2]*o],i.attrs)});return this.tri(D[0],D[1],D[2]),this.tri(D[0],D[2],D[3]),this}triangle(e,t,n,r={}){let i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],a=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],o=i[1]*a[2]-i[2]*a[1],s=i[2]*a[0]-i[0]*a[2],c=i[0]*a[1]-i[1]*a[0],l=Math.hypot(o,s,c)||1;o/=l,s/=l,c/=l;let u=Yd(r.color),[d,f]=Xd(r),[p,m]=r.uvOffset??[0,0],h=Math.abs(c)>=Math.abs(o),g=[e,t,n].map(e=>{let t=h?e[0]*Math.sign(c||1):-e[2]*Math.sign(o||1);return this.vertex(e[0],e[1],e[2],o,s,c,(t+p)/d,(e[1]+m)/f,u,r.attrs)});return this.tri(g[0],g[1],g[2]),this}cylinder(e,t,n,r=12,i={}){let a=Yd(i.color),[o,s]=Xd(i),[c,l]=i.ao??[1,1],u=(t-e)/n,d=2*Math.PI*(e+t)/2,f=(e,t,n,c)=>{let l=[];for(let f=0;f<=r;f++){let p=f/r*Math.PI*2,m=Math.cos(p),h=Math.sin(p);l.push(this.vertex(m*t,e,h*t,m,u,h,f/r*d/o,c/s,[a[0]*n,a[1]*n,a[2]*n],i.attrs))}return l},p=f(0,t,c,0),m=f(n,e,l,n);for(let e=0;e<r;e++)this.tri(p[e],m[e],m[e+1]),this.tri(p[e],m[e+1],p[e+1]);if(i.caps!==!1){let u=(e,t,n,c,l)=>{if(t<=1e-6)return;let u=[a[0]*c,a[1]*c,a[2]*c],d=this.vertex(0,e,0,0,n,0,.5,.5,u,i.attrs),f=[];for(let a=0;a<=r;a++){let c=a/r*Math.PI*2;f.push(this.vertex(Math.cos(c)*t,e,Math.sin(c)*t,0,n,0,(.5+Math.cos(c)*.5)*(2*t/o),(.5+Math.sin(c)*.5)*(2*t/s),u,i.attrs))}for(let e=0;e<r;e++)l?this.tri(d,f[e+1],f[e]):this.tri(d,f[e],f[e+1])};u(n,e,1,l,!0),u(0,t,-1,c,!1)}return this}sphere(e,t=12,n=8,r={}){let i=Yd(r.color),[a,o]=Xd(r),[s,c]=r.ao??[1,1],[l,u,d]=r.scale??[1,1,1],f=[];for(let p=0;p<=n;p++){let m=p/n*Math.PI,h=[];for(let f=0;f<=t;f++){let g=f/t*Math.PI*2,_=Math.sin(m)*Math.cos(g),v=Math.cos(m),y=Math.sin(m)*Math.sin(g),b=e*(r.jitter?r.jitter(_,v,y):1),x=s+(c-s)*(v*.5+.5);h.push(this.vertex(_*b*l,v*b*u,y*b*d,_/l,v/u,y/d,f/t*(2*Math.PI*e/a),p/n*(Math.PI*e/o),[i[0]*x,i[1]*x,i[2]*x],r.attrs))}f.push(h)}for(let e=0;e<n;e++)for(let n=0;n<t;n++){let t=f[e][n],r=f[e+1][n],i=f[e+1][n+1],a=f[e][n+1];this.tri(t,i,r),this.tri(t,a,i)}return this}tube(e,t,n=8,r={}){let i=Yd(r.color),[a,o]=Xd(r),s=e.length,c=[];for(let t=0;t<s;t++){let n=e[Math.max(t-1,0)],r=e[Math.min(t+1,s-1)],i=new H(r[0]-n[0],r[1]-n[1],r[2]-n[2]).normalize();c.push(i)}let l=Math.abs(c[0].y)<.9?new H(0,1,0):new H(1,0,0),u=new H().crossVectors(c[0],l).normalize(),d=[],f=0;for(let l=0;l<s;l++){if(l>0){let t=e[l-1],n=e[l];f+=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),u=u.clone().addScaledVector(c[l],-u.dot(c[l])).normalize()}let s=new H().crossVectors(c[l],u),p=Array.isArray(t)?t[l]:t,m=[];for(let t=0;t<=n;t++){let c=t/n*Math.PI*2,d=Math.cos(c)*u.x+Math.sin(c)*s.x,h=Math.cos(c)*u.y+Math.sin(c)*s.y,g=Math.cos(c)*u.z+Math.sin(c)*s.z,_=e[l];m.push(this.vertex(_[0]+d*p,_[1]+h*p,_[2]+g*p,d,h,g,t/n*2*Math.PI*p/a,f/o,i,r.attrs))}d.push(m)}for(let e=0;e<s-1;e++)for(let t=0;t<n;t++){let n=d[e][t],r=d[e+1][t],i=d[e+1][t+1],a=d[e][t+1];this.tri(n,i,r),this.tri(n,a,i)}return this}prism(e,t,n,r={}){let i=Yd(r.color),[a,o]=Xd(r),[s,c]=r.uvOffset??[0,0],[l,u]=r.ao??[1,1],d=0;for(let t=0;t<e.length;t++){let n=e[t],r=e[(t+1)%e.length];d+=n[0]*r[1]-r[0]*n[1]}let f=d>0?[...e].reverse():e,p=[i[0]*u,i[1]*u,i[2]*u],m=[i[0]*l,i[1]*l,i[2]*l],h=Ca.triangulateShape(f.map(([e,t])=>new V(e,t)),[]),g=(e,t,n)=>{let i=f.map(([i,l])=>this.vertex(i,e,l,0,t,0,(i+s)/a,(-l*(t>0?1:-1)+c)/o,n,r.attrs));for(let[e,n,r]of h){let a=f[n][0]-f[e][0],o=f[n][1]-f[e][1],s=f[r][0]-f[e][0],c=f[r][1]-f[e][1];o*s-a*c>0==t>0?this.tri(i[e],i[n],i[r]):this.tri(i[e],i[r],i[n])}};if(g(n,1,p),r.bottom!==!1&&g(t,-1,m),r.sides===!1)return this;for(let e=0;e<f.length;e++){let i=f[e],l=f[(e+1)%f.length],u=l[0]-i[0],d=l[1]-i[1],h=Math.hypot(u,d);if(h<1e-9)continue;let g=-d/h,_=u/h,v=this.vertex(i[0],t,i[1],g,0,_,s/a,(t+c)/o,m,r.attrs),y=this.vertex(l[0],t,l[1],g,0,_,(s+h)/a,(t+c)/o,m,r.attrs),b=this.vertex(l[0],n,l[1],g,0,_,(s+h)/a,(n+c)/o,p,r.attrs),x=this.vertex(i[0],n,i[1],g,0,_,s/a,(n+c)/o,p,r.attrs);this.tri(v,y,b),this.tri(v,b,x)}return this}loft(e,t={}){let n=Yd(t.color),r=e[0].loop.length,i=e.map((i,a)=>{let o=i.loop.reduce((e,t)=>[e[0]+t[0]/r,e[1]+t[1]/r],[0,0]);return i.loop.map((s,c)=>{let l=i.loop[(c+r-1)%r],u=i.loop[(c+1)%r],d=u[0]-l[0],f=u[1]-l[1],p=e[Math.max(a-1,0)],m=e[Math.min(a+1,e.length-1)],h=m.z-p.z,g=m.loop[c][0]-p.loop[c][0],_=m.loop[c][1]-p.loop[c][1],v=f*h,y=-d*h,b=d*_-f*g;v*(s[0]-o[0])+y*(s[1]-o[1])<0&&(v=-v,y=-y,b=-b);let x=Math.hypot(v,y,b)||1,S=t.colors?Yd(t.colors(a,c)):n;return this.vertex(s[0],s[1],i.z,v/x,y/x,b/x,c/r,i.z,S,t.attrs)})});for(let t=0;t<e.length-1;t++)for(let e=0;e<r;e++){let n=i[t][e],a=i[t][(e+1)%r],o=i[t+1][(e+1)%r],s=i[t+1][e];this.tri(n,a,o),this.tri(n,o,s)}if(t.caps!==!1){let i=(e,i,a)=>{let o=e.loop.reduce((e,t)=>[e[0]+t[0]/r,e[1]+t[1]/r],[0,0]),s=this.vertex(o[0],o[1],e.z,0,0,i,.5,.5,n,t.attrs),c=e.loop.map(r=>this.vertex(r[0],r[1],e.z,0,0,i,r[0],r[1],n,t.attrs));for(let e=0;e<r;e++)a?this.tri(s,c[e],c[(e+1)%r]):this.tri(s,c[(e+1)%r],c[e])};i(e[0],-1,!1),i(e[e.length-1],1,!0)}return this}lathe(e,t=16,n={}){let r=Yd(n.color),[i,a]=Xd(n),[o,s]=n.ao??[1,1],c=e[0][1],l=e[e.length-1][1],u=e.map((t,n)=>{let r=e[Math.max(n-1,0)],i=e[Math.min(n+1,e.length-1)],a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o)||1;return[o/s,-a/s]}),d=e.map(([e,d],f)=>{let p=l>c?o+(s-o)*((d-c)/(l-c)):s,m=[];for(let o=0;o<=t;o++){let s=o/t*Math.PI*2,c=Math.cos(s),l=Math.sin(s);m.push(this.vertex(c*e,d,l*e,c*u[f][0],u[f][1],l*u[f][0],o/t*2*Math.PI*Math.max(e,.05)/i,d/a,[r[0]*p,r[1]*p,r[2]*p],n.attrs))}return m});for(let n=0;n<e.length-1;n++)for(let e=0;e<t;e++)this.tri(d[n][e],d[n+1][e],d[n+1][e+1]),this.tri(d[n][e],d[n+1][e+1],d[n][e+1]);return this}build(){let e=new Lr;e.setAttribute(`position`,new Tr(this.pos,3)),e.setAttribute(`normal`,new Tr(this.nor,3)),e.setAttribute(`uv`,new Tr(this.uv,2)),e.setAttribute(`color`,new Tr(this.col,3));for(let t of Object.keys(this.extra))e.setAttribute(t,new Tr(this.extra[t],this.extraSchema[t]));return e.setIndex(this.idx),e.computeBoundingSphere(),e}},ef={cast:!0,receive:!0,reflect:!0,extra:{}},tf=new G,nf=class{constructor(e,{chunk:t=100,zMin:n=-350}={},r={}){this.materials=e,this.chunk=t,this.zMin=n,this.info=r,this.builders=new Map}infoFor(e){return{...ef,...this.info[e]??{}}}chunkOf(e){return Math.floor((e-this.zMin)/this.chunk)}builder(e,t=0){let n=this.chunkOf(t),r=`${e}|${n}`,i=this.builders.get(r);return i||(i=new $d(this.infoFor(e).extra),i.materialKey=e,i.chunkIndex=n,this.builders.set(r,i)),i}get vertexCount(){let e=0;for(let t of this.builders.values())e+=t.vertexCount;return e}resetMatrices(){for(let e of this.builders.values())e.setMatrix(tf),e.stack.length=0,e.lotId=null}flush(e){let t=[];for(let n of this.builders.values()){if(n.vertexCount===0)continue;let r=this.materials[n.materialKey];if(!r)throw Error(`StaticBatch: no material "${n.materialKey}"`);let i=this.infoFor(n.materialKey),a=new si(n.build(),r);a.name=`${n.materialKey}#${n.chunkIndex}`,a.matrixAutoUpdate=!1,a.castShadow=i.cast,a.receiveShadow=i.receive,i.reflect&&a.layers.enable(1),e.add(a),t.push(a)}return this.builders.clear(),t}},rf=8,af=4096,of=`
  attribute vec4 iPos;   // x, y, z, size (metres)
  attribute vec4 iColor; // r, g, b (times intensity), group
  attribute vec4 iMisc;  // flicker phase, flicker depth, flicker speed, min pixels
  uniform float uGain[${rf}];
  uniform float uTime;
  uniform float uRain;
  uniform float uFogDensity;
  uniform vec2 uRes;
  varying vec2 vUv;
  varying vec3 vColor;
  void main() {
    vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
    float dist = max(-mv.z, 0.1);
    // Keep far lights visible as small dots instead of sub-pixel shimmer, and puff up in rain.
    float minSize = dist * iMisc.w / uRes.y * 2.0 * 1.0;
    float size = max(iPos.w * (1.0 + 0.7 * uRain), minSize);
    float flick = 1.0 - iMisc.y * (0.5 + 0.5 * sin(uTime * iMisc.z + iMisc.x));
    float fogF = exp(-uFogDensity * uFogDensity * dist * dist);
    // A big halo must not swallow the screen when the camera is close to it.
    float near = smoothstep(0.6, 2.5, dist / max(size, 0.01));
    vColor = iColor.rgb * uGain[int(iColor.a + 0.5)] * flick * fogF * near * (iPos.w * (1.0 + 0.7 * uRain) / size);
    mv.xy += position.xy * size;
    mv.z += min(0.25, dist * 0.02); // nudge toward the camera so the sprite clears its own fixture
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * mv;
  }
`,sf=`
  varying vec2 vUv;
  varying vec3 vColor;
  void main() {
    float r = length(vUv);
    if (r > 1.0) discard;
    float halo = pow(1.0 - r, 2.6);
    float core = exp(-r * r * 26.0) * 1.6;
    gl_FragColor = vec4(vColor * (halo + core), 1.0);
  }
`,cf=class{constructor(e){let t=new Ea(1,1);this.iPos=new di(new Float32Array(af*4),4),this.iColor=new di(new Float32Array(af*4),4),this.iMisc=new di(new Float32Array(af*4),4);for(let e of[this.iPos,this.iColor,this.iMisc])e.setUsage($e);t.setAttribute(`iPos`,this.iPos),t.setAttribute(`iColor`,this.iColor),t.setAttribute(`iMisc`,this.iMisc),this.gain=new Float32Array(rf).fill(1),this.uniforms={uGain:{value:this.gain},uTime:X.time,uRain:X.rain,uFogDensity:{value:.004},uRes:X.resolution},this.material=new Ia({vertexShader:of,fragmentShader:sf,uniforms:this.uniforms,blending:2,depthTest:!0,depthWrite:!1,transparent:!0,fog:!1}),this.mesh=new yi(t,this.material,af),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=10,this.mesh.layers.enable(1),e.add(this.mesh),this.count=0,this.free=[]}add(e){let t=this.free.pop()??this.count++;if(t>=af)throw Error(`Glow: too many sprites`);return this.mesh.count=Math.max(this.mesh.count,t+1),this.write(t,e),t}write(e,t){(this.entries??(this.entries=new Map)).set(e,t);let n=t.intensity??1;this.iPos.setXYZW(e,t.pos[0],t.pos[1],t.pos[2],t.size),this.iColor.setXYZW(e,t.color[0]*n,t.color[1]*n,t.color[2]*n,t.group??nd.LAMP),this.iMisc.setXYZW(e,t.phase??Math.random()*6.28,t.flicker??0,t.speed??3,t.minPixels??2.2),this.dirty=!0}set(e,t,n,r,i){let a=this.entries.get(e);a.pos[0]=t,a.pos[1]=n,a.pos[2]=r,a.intensity=i,this.iPos.setXYZW(e,t,n,r,a.size),this.iColor.setXYZW(e,a.color[0]*i,a.color[1]*i,a.color[2]*i,a.group??nd.LAMP),this.dirty=!0}setGroupGain(e,t){this.gain[e]=t}update(e){if(this.uniforms.uFogDensity.value=e,this.dirty){for(let e of[this.iPos,this.iColor,this.iMisc])e.needsUpdate=!0;this.dirty=!1}}},lf=`
  attribute vec3 aCenter;
  attribute vec4 aRoom;
  attribute vec4 aInfo;
  attribute vec2 aPane;
  varying vec3 vCenter;
  varying vec4 vRoom;
  varying vec4 vInfo;
  varying vec2 vPane;
  varying vec3 vNormalW;
`,uf=`
  vCenter = aCenter;
  vRoom = aRoom;
  vInfo = aInfo;
  vPane = aPane;
  vNormalW = normal;
`,df=`
  varying vec3 vCenter;
  varying vec4 vRoom;
  varying vec4 vInfo;
  varying vec2 vPane;
  varying vec3 vNormalW;
  uniform float uWindowLit;
  uniform float uNight;
  uniform float uHours;
  uniform float uTime;

  float wHash(float n) {
    return fract(sin(n * 127.1) * 43758.5453);
  }
  vec3 wHsv(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  // Entry distance of a ray into an axis-aligned box, -1 if it misses; nrm = normal of the entry face.
  float wBox(vec3 ro, vec3 rd, vec3 bmin, vec3 bmax, out vec3 nrm) {
    vec3 inv = 1.0 / rd;
    vec3 t1 = (bmin - ro) * inv;
    vec3 t2 = (bmax - ro) * inv;
    vec3 tn = min(t1, t2);
    vec3 tf = max(t1, t2);
    float tNear = max(max(tn.x, tn.y), tn.z);
    float tFar = min(min(tf.x, tf.y), tf.z);
    nrm = vec3(0.0, 0.0, 1.0);
    if (tNear > tFar || tFar < 0.0) return -1.0;
    nrm = -sign(rd) * step(tn.yzx, tn.xyz) * step(tn.zxy, tn.xyz);
    return tNear;
  }

  // Returns the light leaving the room through the pane (emissive radiance); lit = how brightly it is on.
  vec3 windowInterior(vec3 P, vec3 camPos, out float litOut) {
    float kind = vInfo.x;
    float thr = vInfo.y;
    float seed = vInfo.z * 97.13 + thr * 13.7;

    // --- is the light on? -------------------------------------------------------------------------------------
    float lit;
    if (kind < 0.5) {
      lit = smoothstep(thr - 0.03, thr, uWindowLit);
    } else if (kind < 1.5) {
      float open = step(7.0, uHours) * (1.0 - step(22.5, uHours));
      float all_night = step(0.86, thr); // a few shops (bars) stay lit around the clock
      lit = max(open * (0.22 + 0.78 * smoothstep(0.05, 0.5, uNight)), all_night * smoothstep(0.1, 0.5, uNight));
    } else if (kind < 2.5) {
      float open = step(8.0, uHours) * (1.0 - step(23.5, uHours));
      lit = open * (0.2 + 0.8 * smoothstep(0.05, 0.5, uNight));
    } else {
      float work = smoothstep(7.5, 9.0, uHours) * (1.0 - smoothstep(18.0, 19.5, uHours)) * step(thr, 0.7);
      lit = max(work, smoothstep(thr - 0.03, thr, uWindowLit * 0.6));
    }
    litOut = lit;

    // --- ray into the room ---------------------------------------------------------------------------------------
    vec3 N = normalize(vNormalW);
    vec3 T = normalize(cross(vec3(0.0, 1.0, 0.0), N));
    vec3 V = P - camPos;
    vec3 rd = vec3(dot(V, T), V.y, dot(V, N));
    vec3 rel = P - vCenter;
    vec3 ro = vec3(dot(rel, T), rel.y, 0.0);
    float rw = vRoom.x;
    float rh = vRoom.y;
    float rdp = vRoom.z;
    float yF = vRoom.w;
    if (rd.z > -1e-4) return vec3(0.0);

    vec3 inv = 1.0 / rd;
    vec3 tb = (vec3(-rw * 0.5, -yF, -rdp) - ro) * inv;
    vec3 tc = (vec3(rw * 0.5, rh - yF, 0.0) - ro) * inv;
    vec3 tExit = max(tb, tc);
    float t = min(min(tExit.x, tExit.y), tExit.z);
    vec3 hit = ro + rd * t;

    vec3 n;
    float face; // 0 back wall, 1 floor, 2 ceiling, 3 side wall
    vec2 fuv;
    if (t == tExit.z) {
      n = vec3(0.0, 0.0, 1.0);
      face = 0.0;
      fuv = vec2(hit.x / rw + 0.5, (hit.y + yF) / rh);
    } else if (t == tExit.y) {
      if (rd.y > 0.0) {
        n = vec3(0.0, -1.0, 0.0);
        face = 2.0;
      } else {
        n = vec3(0.0, 1.0, 0.0);
        face = 1.0;
      }
      fuv = vec2(hit.x / rw + 0.5, -hit.z / rdp);
    } else {
      n = vec3(rd.x > 0.0 ? -1.0 : 1.0, 0.0, 0.0);
      face = 3.0;
      fuv = vec2(-hit.z / rdp, (hit.y + yF) / rh);
    }

    // --- mood -------------------------------------------------------------------------------------------------------
    float mood = wHash(seed + 3.0);
    vec3 lampCol = vec3(1.0, 0.72, 0.42); // warm tungsten
    float lampI = 1.0;
    if (mood > 0.86) lampCol = vec3(0.55, 0.7, 1.0); // TV / cool
    else if (mood > 0.72) lampCol = vec3(1.0, 0.86, 0.66);
    else if (mood > 0.66) lampCol = vec3(1.0, 0.5, 0.75);
    if (kind > 0.5 && kind < 1.5) {
      lampCol = vec3(1.0, 0.86, 0.66);
      lampI = 1.05;
    } else if (kind > 1.5 && kind < 2.5) {
      lampCol = vec3(1.0, 0.6, 0.3);
      lampI = 0.9;
    } else if (kind > 2.5) {
      lampCol = vec3(0.85, 0.95, 1.1);
      lampI = 1.3;
    }
    // TV flicker in some cool rooms.
    if (mood > 0.86 && kind < 0.5) lampI *= 0.65 + 0.35 * sin(uTime * (5.0 + 4.0 * wHash(seed)) + seed * 30.0);

    vec3 wallCol = wHsv(vec3(fract(seed * 7.13 + 0.05), mix(0.08, 0.42, wHash(seed + 1.0)), mix(0.62, 0.95, wHash(seed + 2.0))));
    if (kind > 0.5 && kind < 1.5) wallCol = mix(vec3(0.85, 0.8, 0.72), wallCol, 0.35);
    if (kind > 2.5) wallCol = vec3(0.86, 0.88, 0.9);

    vec3 base = wallCol;
    if (face == 1.0) {
      float pl = hit.x * 5.0 + seed * 11.0;
      float g = fract(pl);
      base = mix(vec3(0.3, 0.19, 0.1), vec3(0.5, 0.34, 0.2), wHash(floor(pl) + seed)) * (0.82 + 0.18 * smoothstep(0.0, 0.07, g));
      if (kind > 0.5 && kind < 1.5) base = mix(vec3(0.6, 0.58, 0.55), vec3(0.75, 0.73, 0.7), step(0.5, fract(hit.x * 2.0) * step(0.5, fract(hit.z * 2.0)) + (1.0 - step(0.5, fract(hit.x * 2.0))) * (1.0 - step(0.5, fract(hit.z * 2.0)))));
      if (kind > 2.5) base = vec3(0.32, 0.34, 0.38);
    } else if (face == 2.0) {
      base = vec3(0.9, 0.9, 0.88);
    } else if (face == 0.0) {
      float pick = wHash(seed + 5.0);
      if (kind > 0.5 && kind < 1.5) pick = 0.4; // shops: always shelves
      vec2 q = fuv;
      if (pick < 0.32) {
        vec2 c = vec2(0.28 + 0.44 * wHash(seed + 6.0), 0.58);
        vec2 d = abs(q - c) - vec2(0.13, 0.16);
        float inside = step(max(d.x, d.y), 0.0);
        float frame = step(max(d.x, d.y), 0.02) - inside;
        base = mix(base, wHsv(vec3(wHash(seed + 7.0), 0.55, 0.85)), inside);
        base = mix(base, vec3(0.2, 0.14, 0.08), frame);
      } else if (pick < 0.62) {
        float shelf = step(0.12, q.y) * step(q.y, 0.9) * step(0.12, q.x) * step(q.x, 0.88);
        vec2 grid = fract(q * vec2(15.0, 6.0));
        float row = floor(q.y * 6.0);
        float item = wHash(floor(q.x * 15.0) + row * 17.0 + seed * 29.0);
        vec3 ic = wHsv(vec3(item, 0.55, 0.85));
        base = mix(base, mix(vec3(0.16, 0.11, 0.08), ic, step(0.12, grid.y) * step(0.1, grid.x)), shelf);
      } else if (pick < 0.76) {
        float door = step(0.6, q.x) * step(q.x, 0.82) * step(q.y, 0.76);
        base = mix(base, vec3(0.26, 0.18, 0.12), door);
      }
    }

    vec3 lampPos = vec3(0.0, rh - yF - 0.15, -rdp * 0.45);
    vec3 toL = lampPos - hit;
    float dist = length(toL);
    toL /= dist;
    vec3 col = base * (0.2 + lampI * max(dot(n, toL), 0.0) * 3.4 / (1.0 + 0.09 * dist * dist)) * lampCol;
    if (face == 2.0) {
      float disc = smoothstep(0.42, 0.18, length(hit.xz - lampPos.xz));
      col += lampCol * disc * 2.2 * lampI;
      if (kind > 2.5) col += vec3(0.9, 1.0, 1.1) * step(0.8, fract(hit.x * 1.4)) * step(0.55, fract(hit.z * 1.1)) * 1.3;
    }

    // One piece of furniture.
    if (wHash(seed + 9.0) < 0.72) {
      vec3 fs = vec3(mix(0.7, 1.7, wHash(seed + 10.0)), mix(0.55, 1.9, wHash(seed + 11.0)), mix(0.5, 0.9, wHash(seed + 12.0)));
      vec3 fc = vec3(mix(-rw * 0.3, rw * 0.3, wHash(seed + 13.0)), -yF, -rdp * mix(0.5, 0.88, wHash(seed + 14.0)));
      vec3 fn;
      float ft = wBox(ro, rd, vec3(fc.x - fs.x * 0.5, -yF, fc.z - fs.z * 0.5), vec3(fc.x + fs.x * 0.5, -yF + fs.y, fc.z + fs.z * 0.5), fn);
      if (ft > 0.0 && ft < t) {
        vec3 fh = ro + rd * ft;
        vec3 tl = lampPos - fh;
        float fd = length(tl);
        tl /= fd;
        vec3 fcol = wHsv(vec3(wHash(seed + 15.0), 0.4, 0.55));
        col = fcol * (0.2 + lampI * max(dot(fn, tl), 0.0) * 3.4 / (1.0 + 0.09 * fd * fd)) * lampCol;
      }
    }
    // Darker toward the back of a deep room.
    col *= mix(1.0, 0.55, smoothstep(0.0, rdp, -hit.z) * 0.6);

    // Curtains drawn over the glass from both sides.
    float cover = vInfo.w;
    if (cover > 0.02) {
      float cx = ro.x / (vPane.x * 0.5);
      float folds = 0.72 + 0.28 * sin(cx * 24.0 + seed * 10.0);
      float cov = smoothstep(1.0 - cover, 1.0 - cover + 0.1, abs(cx));
      vec3 cCol = wHsv(vec3(wHash(seed + 20.0), 0.3, 0.85)) * folds * lampCol * (0.55 + 0.35 * lampI);
      col = mix(col, cCol, cov);
    }

    // Far windows shimmer: blend toward the average room colour with distance.
    float far = smoothstep(90.0, 220.0, length(V));
    col = mix(col, wallCol * lampCol * 0.5 * lampI, far);

    // Shops and cafes would otherwise blow out: their lamps are strong but the glass is large.
    float gain = kind < 0.5 ? 0.85 : kind < 1.5 ? 0.46 : kind < 2.5 ? 0.58 : 0.7;
    col *= gain;
    vec3 dark = wallCol * 0.015;
    return mix(dark * (1.0 - uNight), col, lit) + col * 0.045 * (1.0 - uNight) * (1.0 - lit);
  }
`,ff=`
  {
    float winLit;
    totalEmissiveRadiance += windowInterior(vWPos, cameraPosition, winLit);
  }
`;function pf(e,t,n){let r=e.onBeforeCompile;return e.__patchKey=`${e.__patchKey??``}|${t}`,e.onBeforeCompile=(t,i)=>{r.call(e,t,i),n(t,i)},e.customProgramCacheKey=()=>e.__patchKey,e.needsUpdate=!0,e}var mf=(e,t,n)=>{if(!e.includes(t))throw Error(`patches: chunk ${t} not found`);return e.replace(t,n)};function hf(e){return pf(e,`wpos`,e=>{e.vertexShader=mf(e.vertexShader,`#include <common>`,`#include <common>
varying vec3 vWPos;`),e.vertexShader=mf(e.vertexShader,`#include <fog_vertex>`,`#include <fog_vertex>
      {
        vec4 wpTmp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wpTmp = instanceMatrix * wpTmp;
        #endif
        vWPos = (modelMatrix * wpTmp).xyz;
      }`),e.fragmentShader=mf(e.fragmentShader,`#include <common>`,`#include <common>
varying vec3 vWPos;`)})}function gf(e){return pf(e,`fogsun`,e=>{e.uniforms.uSunH=X.sunH,e.uniforms.uFogGlow=X.fogGlow,e.fragmentShader=mf(e.fragmentShader,`#include <fog_pars_fragment>`,`#include <fog_pars_fragment>
      uniform vec3 uSunH;
      uniform vec3 uFogGlow;`),e.fragmentShader=mf(e.fragmentShader,`#include <fog_fragment>`,`#ifdef USE_FOG
        float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        vec3 fogView = vWPos - cameraPosition;
        vec3 fogDirH = normalize(vec3(fogView.x, 0.0, fogView.z) + vec3(1e-4));
        float fogAz = max(dot(fogDirH, uSunH), 0.0);
        vec3 fogCol = fogColor + uFogGlow * (0.55 * pow(fogAz, 6.0) + 0.25 * pow(fogAz, 2.0) + 0.5 * pow(fogAz, 12.0));
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
      #endif`)})}var _f=`
  float wgHash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  // Height gradient (d/dx, d/dz) of raindrop rings on a horizontal surface.
  vec2 rippleGrad(vec2 p, float t, float rain) {
    vec2 g = vec2(0.0);
    for (int i = 0; i < 2; i++) {
      float sc = i == 0 ? 2.6 : 4.4;
      vec2 q = p * sc + float(i) * 13.7;
      vec2 cell = floor(q);
      vec2 f = fract(q) - 0.5;
      float h = wgHash(cell);
      float rate = 0.55 + 0.25 * fract(h * 7.7);
      float tt = t * rate + h * 9.0;
      float cyc = floor(tt);
      float life = fract(tt);
      float h2 = wgHash(cell + cyc * 3.17);
      vec2 c = (vec2(h2, fract(h2 * 37.13)) - 0.5) * 0.6;
      float on = step(wgHash(cell + cyc * 1.71 + 8.3), rain);
      vec2 d = f - c;
      float dist = length(d);
      float x = dist - life * 0.48;
      float env = exp(-abs(x) * 16.0) * (1.0 - life) * (1.0 - life);
      float k = 42.0;
      float dh = (k * cos(k * x) - 16.0 * sign(x) * sin(k * x)) * env;
      g += (d / max(dist, 1e-3)) * dh * on * 0.0035;
    }
    return g;
  }
`;function vf(e,t={}){let n={uWetDark:{value:t.wetDark??.55},uBaseRough:{value:t.baseRough??.9},uWetRough:{value:t.wetRough??.32},uPuddle:{value:t.puddle??.8},uReflMix:{value:t.reflMix??1},uReflDistort:{value:t.distort??.9}};return e.userData.wet=n,pf(e,`wetground`,e=>{Object.assign(e.uniforms,n,{uNoiseTex:X.noiseTex,uReflTex:X.reflTex,uReflMatrix:X.reflMatrix,uReflOn:X.reflOn,uWetness:X.wetness,uRain:X.rain,uTime:X.time}),e.fragmentShader=mf(e.fragmentShader,`#include <common>`,`#include <common>
      uniform sampler2D uNoiseTex;
      uniform sampler2D uReflTex;
      uniform mat4 uReflMatrix;
      uniform float uReflOn;
      uniform float uWetness;
      uniform float uRain;
      uniform float uTime;
      uniform float uWetDark;
      uniform float uBaseRough;
      uniform float uWetRough;
      uniform float uPuddle;
      uniform float uReflMix;
      uniform float uReflDistort;
      ${_f}`),e.fragmentShader=mf(e.fragmentShader,`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
      vec2 gp = vWPos.xz;
      vec4 nz1 = texture2D(uNoiseTex, gp * 0.043);
      vec4 nz2 = texture2D(uNoiseTex, gp * 0.171 + 0.37);
      vec4 nz3 = texture2D(uNoiseTex, gp * 1.7);
      float wetN = nz1.r * 0.55 + nz2.g * 0.45;
      float wet = clamp(uWetness * (0.8 + 0.5 * (wetN - 0.5)), 0.0, 1.0);
      float puddleN = nz1.r * 0.6 + nz2.r * 0.4;
      float puddle = smoothstep(0.62 - uWetness * 0.22, 0.74 - uWetness * 0.22, puddleN) * uPuddle * smoothstep(0.15, 0.8, uWetness);
      diffuseColor.rgb *= mix(1.0, uWetDark, wet) * (1.0 - 0.35 * puddle) * (0.92 + 0.16 * nz3.b);
      roughnessFactor = mix(mix(uBaseRough, uWetRough, wet), 0.035, puddle);`),e.fragmentShader=mf(e.fragmentShader,`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
      normal = normalize(mix(normal, nonPerturbedNormal, puddle * 0.9));
      {
        vec2 rg = rippleGrad(gp, uTime, uRain);
        float rippleAmt = (0.35 * wet + 0.65 * puddle) * step(0.02, uRain);
        normal = normalize(normal - (viewMatrix * vec4(rg.x, 0.0, rg.y, 0.0)).xyz * rippleAmt * 1.3);
      }`),e.fragmentShader=mf(e.fragmentShader,`#include <lights_fragment_end>`,`#include <lights_fragment_end>
      {
        vec4 rc = uReflMatrix * vec4(vWPos, 1.0);
        vec2 ruv = rc.xy / rc.w;
        vec3 nW = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
        ruv += nW.xz * uReflDistort;
        float rough = material.roughness;
        float blurV = 0.004 + rough * 0.05;
        vec3 planar = vec3(0.0);
        float wsum = 0.0;
        for (int i = -3; i <= 3; i++) {
          float o = float(i) / 3.0;
          float w = exp(-o * o * 1.6);
          planar += textureLod(uReflTex, ruv + vec2(0.0, o * blurV), rough * 5.0).rgb * w;
          wsum += w;
        }
        planar /= wsum;
        float inside = step(0.0, rc.w) * step(0.0, ruv.x) * step(ruv.x, 1.0) * step(0.0, ruv.y) * step(ruv.y, 1.0);
        vec3 spec = planar * (material.specularColor * material.dfg.x + material.specularF90 * material.dfg.y);
        float k = uReflMix * uReflOn * inside * smoothstep(0.95, 0.4, rough);
        reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, spec, k);
      }`)})}function yf(e){return pf(e,`facade`,e=>{Object.assign(e.uniforms,{uNoiseTex:X.noiseTex,uWetness:X.wetness}),e.fragmentShader=mf(e.fragmentShader,`#include <common>`,`#include <common>
      uniform sampler2D uNoiseTex;
      uniform float uWetness;`),e.fragmentShader=mf(e.fragmentShader,`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
      {
        float fh = vWPos.y;
        float low = 1.0 - smoothstep(0.0, 2.4, fh);
        float streak = texture2D(uNoiseTex, vec2((vWPos.x + vWPos.z) * 0.7, fh * 0.045)).g;
        float dirt = texture2D(uNoiseTex, vec2(vWPos.x + vWPos.z, fh) * 0.09).r;
        diffuseColor.rgb *= 1.0 - 0.3 * low - 0.1 * streak * (0.35 + uWetness) - 0.1 * dirt;
        diffuseColor.rgb *= mix(1.0, 0.8, uWetness);
        roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.72, uWetness * 0.7);
      }`)})}function bf(e){return pf(e,`window`,e=>{Object.assign(e.uniforms,{uWindowLit:X.windowLit,uNight:X.night,uHours:X.hours,uTime:X.time}),e.vertexShader=mf(e.vertexShader,`#include <common>`,`#include <common>\n${lf}`),e.vertexShader=mf(e.vertexShader,`#include <fog_vertex>`,`#include <fog_vertex>\n${uf}`),e.fragmentShader=mf(e.fragmentShader,`#include <common>`,`#include <common>\n${df}`),e.fragmentShader=mf(e.fragmentShader,`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n${ff}`)})}function xf(e){return pf(e,`sway`,e=>{Object.assign(e.uniforms,{uTime:X.time,uWind:X.wind}),e.vertexShader=mf(e.vertexShader,`#include <common>`,`#include <common>
      uniform float uTime;
      uniform float uWind;`),e.vertexShader=mf(e.vertexShader,`#include <begin_vertex>`,`#include <begin_vertex>
      {
        float sw = smoothstep(2.5, 10.0, position.y) * (0.25 + uWind);
        float ph = position.x * 0.31 + position.z * 0.27;
        transformed.x += (sin(uTime * 1.4 + ph) * 0.07 + sin(uTime * 4.1 + ph * 3.0) * 0.02) * sw;
        transformed.z += (cos(uTime * 1.1 + ph * 1.3) * 0.07 + sin(uTime * 3.7 + ph * 2.0) * 0.02) * sw;
        transformed.y += sin(uTime * 2.3 + ph * 2.0) * 0.02 * sw;
      }`)})}function Sf(e){return pf(e,`streetlight`,e=>{Object.assign(e.uniforms,{uLightMap:X.lightMap,uLMRect:X.lightMapRect}),e.fragmentShader=mf(e.fragmentShader,`#include <common>`,`#include <common>
      uniform sampler2D uLightMap;
      uniform vec4 uLMRect;`),e.fragmentShader=mf(e.fragmentShader,`#include <lights_fragment_end>`,`#include <lights_fragment_end>
      {
        vec2 lmUv = vec2((vWPos.x - uLMRect.x) / uLMRect.z, (uLMRect.y - vWPos.z) / uLMRect.w);
        float lmIn = step(0.0, lmUv.x) * step(lmUv.x, 1.0) * step(0.0, lmUv.y) * step(lmUv.y, 1.0);
        vec3 lm = texture2D(uLightMap, lmUv).rgb * lmIn;
        vec3 nWl = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
        float hDecay = exp(-max(vWPos.y - 0.3, 0.0) * 0.14);
        lm *= mix(hDecay, 1.0, clamp(nWl.y, 0.0, 1.0));
        reflectedLight.directDiffuse += material.diffuseColor * lm;
      }`)})}function Cf(e,{wet:t=null,facade:n=!1,window:r=!1,light:i=!0,sway:a=!1}={}){return hf(e),a&&xf(e),t&&vf(e,t),n&&yf(e),r&&bf(e),i&&Sf(e),gf(e),e}var wf={base:{cast:!1,receive:!0,reflect:!1},asphalt:{cast:!1,receive:!0,reflect:!1},sidewalk:{cast:!1,receive:!0,reflect:!1},setts:{cast:!1,receive:!0,reflect:!1},kerb:{cast:!1,receive:!0,reflect:!1},paint:{cast:!1,receive:!0,reflect:!1},iron:{cast:!1,receive:!0,reflect:!1},rail:{cast:!1,receive:!0,reflect:!1},"glass.windows":{cast:!1,receive:!1,reflect:!0,extra:{aCenter:3,aRoom:4,aInfo:4,aPane:2}},sign:{cast:!1,receive:!1,reflect:!0},clock:{cast:!1,receive:!1,reflect:!0},lampGlass:{cast:!1,receive:!1,reflect:!0},foliage:{cast:!0,receive:!0,reflect:!0},litter:{cast:!1,receive:!0,reflect:!1},...Object.fromEntries([`tlMainRed`,`tlMainYellow`,`tlMainGreen`,`tlCrossRed`,`tlCrossYellow`,`tlCrossGreen`,`pedMainStop`,`pedMainWalk`,`pedCrossStop`,`pedCrossWalk`].map(e=>[e,{cast:!1,receive:!1,reflect:!0}]))},Tf={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4};function Ef(e,t){X.noiseTex.value=e.noise;let n={},r=e=>new Ra({vertexColors:!0,...e});n.base=Cf(r({color:1579292,roughness:1,metalness:0})),n.asphalt=Cf(r({map:e.asphalt.map,normalMap:e.asphalt.normal,roughness:.9,metalness:0}),{wet:{wetDark:.5,baseRough:.9,wetRough:.34,puddle:.9}}),n.sidewalk=Cf(r({map:e.sidewalk.map,normalMap:e.sidewalk.normal,roughness:.85,metalness:0}),{wet:{wetDark:.62,baseRough:.85,wetRough:.42,puddle:.5}}),n.setts=Cf(r({map:e.setts.map,normalMap:e.setts.normal,roughness:.85,metalness:0,...Tf}),{wet:{wetDark:.58,baseRough:.82,wetRough:.38,puddle:.35}}),n.kerb=Cf(r({map:e.kerb.map,normalMap:e.kerb.normal,roughness:.8,metalness:0,...Tf}),{wet:{wetDark:.68,baseRough:.8,wetRough:.45,puddle:0}}),n.paint=Cf(r({color:16777215,roughness:.75,metalness:0,...Tf}),{wet:{wetDark:.78,baseRough:.75,wetRough:.3,puddle:.35}}),n.iron=Cf(r({map:e.iron.map,roughness:.6,metalness:.5,...Tf}),{wet:{wetDark:.75,baseRough:.6,wetRough:.3,puddle:0}}),n.rail=Cf(r({color:10790829,roughness:.32,metalness:1,...Tf}));let i=(e,t)=>Cf(r({map:e.map,normalMap:e.normal,roughness:t,metalness:0}),{facade:!0});n[`wall.brick`]=i(e.brick,.92),n[`wall.stone`]=i(e.stone,.88),n[`wall.plaster`]=i(e.plaster,.95),n[`wall.concrete`]=i(e.concrete,.9),n[`roof.slate`]=i(e.slate,.7),n[`roof.tile`]=i(e.roofTile,.8),n[`roof.flat`]=Cf(r({map:e.asphalt.map,normalMap:e.asphalt.normal,roughness:.95,metalness:0})),n.trim=Cf(r({roughness:.55,metalness:0}),{facade:!0}),n.metal=Cf(r({roughness:.45,metalness:.8})),n.wood=Cf(r({map:e.wood.map,normalMap:e.wood.normal,roughness:.75,metalness:0})),n.sign=Cf(new Ra({map:t.map,emissiveMap:t.emissiveMap,emissive:16777215,emissiveIntensity:0,roughness:.55,metalness:.1,side:2}),{light:!1}),n.clock=Cf(new Ra({map:e.clock.map,emissiveMap:e.clock.map,emissive:16767136,emissiveIntensity:0,roughness:.4,metalness:.1}),{light:!1});let a=e=>Cf(new Ra({color:789518,emissive:e,emissiveIntensity:0,roughness:.25,metalness:0}),{light:!1});for(let e of[`Main`,`Cross`])n[`tl${e}Red`]=a(16722458),n[`tl${e}Yellow`]=a(16756768),n[`tl${e}Green`]=a(2686826);let o=e=>Cf(new Ra({map:t.map,emissiveMap:t.emissiveMap,emissive:e,emissiveIntensity:0,roughness:.3}),{light:!1});for(let e of[`Main`,`Cross`])n[`ped${e}Stop`]=o(16722458),n[`ped${e}Walk`]=o(2686826);return n.lampGlass=Cf(new Ra({color:16773848,emissive:16758880,emissiveIntensity:0,roughness:.3,metalness:0}),{light:!1}),n.copper=Cf(r({roughness:.5,metalness:.55})),n.foliage=Cf(r({map:e.leaf.map,alphaTest:.5,side:2,roughness:.82,metalness:0}),{sway:!0}),n.bark=Cf(r({map:e.bark.map,normalMap:e.bark.normal,roughness:.95,metalness:0}),{sway:!0}),n.litter=Cf(r({roughness:.55,metalness:0,side:2,...Tf}),{wet:{wetDark:.7,baseRough:.7,wetRough:.3,puddle:0}}),n.awning=Cf(r({map:e.awning.map,roughness:.85,metalness:0,side:2})),n[`glass.windows`]=Cf(new za({color:395533,roughness:.05,metalness:0,ior:1.75}),{window:!0,light:!1}),n}function Df(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function Of(e,{repeat:t=!0,srgb:n=!0,aniso:r=8,mipmaps:i=!0}={}){let a=new Ri(e);return n&&(a.colorSpace=qe),a.wrapS=a.wrapT=t?l:u,a.anisotropy=r,a.generateMipmaps=i,a.minFilter=i?_:h,a.needsUpdate=!0,a}function kf(e,t,n){let r=Df(e,t),i=r.getContext(`2d`),a=i.createImageData(e,t),o=a.data,s=new Float32Array(e*t),c={r:0,g:0,b:0,a:255,h:0};for(let r=0;r<t;r++)for(let t=0;t<e;t++){c.a=255,c.h=.5,n(t,r,c);let i=(r*e+t)*4;o[i]=c.r,o[i+1]=c.g,o[i+2]=c.b,o[i+3]=c.a,s[r*e+t]=c.h}return i.putImageData(a,0,0),{canvas:r,ctx:i,height:s,w:e,h:t}}function Af(e,t,n,r=2){let i=Df(t,n),a=i.getContext(`2d`),o=a.createImageData(t,n),s=o.data,c=(r,i)=>e[(i+n)%n*t+(r+t)%t];for(let e=0;e<n;e++)for(let n=0;n<t;n++){let i=-(c(n+1,e)-c(n-1,e))*r,a=(c(n,e+1)-c(n,e-1))*r,o=Math.hypot(i,a,1),l=(e*t+n)*4;s[l]=(i/o*.5+.5)*255,s[l+1]=(a/o*.5+.5)*255,s[l+2]=(1/o*.5+.5)*255,s[l+3]=255}return a.putImageData(o,0,0),i}var jf={oswald:`700 {s}px "Oswald", "Arial Narrow", sans-serif`,pacifico:`400 {s}px "Pacifico", cursive`,playfair:`700 {s}px "Playfair Display", Georgia, serif`},Mf=[{id:`bakery`,key:`sign.bakery`,font:`playfair`,bg:`#3b2418`,fg:`#f3d9a0`,icon:`croissant`},{id:`pharmacy`,key:`sign.pharmacy`,font:`oswald`,bg:`#f2f4f0`,fg:`#1b8a4a`,icon:`cross`},{id:`books`,key:`sign.books`,font:`playfair`,bg:`#20304a`,fg:`#f1e6c8`,icon:`book`},{id:`flowers`,key:`sign.flowers`,font:`pacifico`,bg:`#f3e6ea`,fg:`#b83a6a`,icon:`flower`},{id:`barber`,key:`sign.barber`,font:`oswald`,bg:`#1f1f24`,fg:`#e8e2d0`,icon:`scissors`},{id:`cinema`,key:`sign.cinema`,font:`oswald`,bg:`#5a1622`,fg:`#ffd27a`,icon:`film`,neon:!0},{id:`market`,key:`sign.market`,font:`oswald`,bg:`#2f5a34`,fg:`#f4f0da`,icon:`basket`},{id:`wine`,key:`sign.wine`,font:`playfair`,bg:`#3d1a2c`,fg:`#e8c8a0`,icon:`bottle`},{id:`pizza`,key:`sign.pizza`,font:`oswald`,bg:`#8c2618`,fg:`#fff0c8`,icon:`slice`},{id:`bikes`,key:`sign.bikes`,font:`oswald`,bg:`#123c56`,fg:`#f4ea9a`,icon:`bike`},{id:`tea`,key:`sign.tea`,font:`playfair`,bg:`#1d3a2c`,fg:`#e8d8a8`,icon:`cup`},{id:`optics`,key:`sign.optics`,font:`oswald`,bg:`#e9e4d8`,fg:`#25344a`,icon:`glasses`},{id:`bank`,key:`sign.bank`,font:`playfair`,bg:`#14263f`,fg:`#e6d29a`,icon:null},{id:`photo`,key:`sign.photo`,font:`oswald`,bg:`#26262a`,fg:`#f0a83a`,icon:`camera`},{id:`atelier`,key:`sign.atelier`,font:`pacifico`,bg:`#2a2340`,fg:`#e8d8f0`,icon:`needle`},{id:`cafe`,name:`Café Aurora`,font:`pacifico`,bg:`#1b1a1e`,fg:`#ffb45a`,icon:`cup`,neon:!0},{id:`bar`,name:`BAR 21`,font:`oswald`,bg:`#15151a`,fg:`#4ad0ff`,icon:null,neon:!0},{id:`vinyl`,name:`VINYL & CO`,font:`oswald`,bg:`#211a14`,fg:`#f2c14e`,icon:`disc`},{id:`hotel`,name:`HOTEL LUMIÈRE`,font:`playfair`,bg:`#17202c`,fg:`#e8d090`,icon:null,neon:!0},{id:`bistro`,name:`Le Petit Bistro`,font:`pacifico`,bg:`#1a2a22`,fg:`#f0e0b0`,icon:`cup`}],Nf={w:512,h:128},Pf={w:128,h:256},Ff={w:256,h:64},If={w:256,h:384},Lf=[{key:`poster.jazz`,sub:`12.10`,a:`#2a1a4a`,b:`#e2506a`,font:`oswald`,shape:`sax`},{key:`poster.opera`,sub:`20.10`,a:`#4a0f1c`,b:`#e8b45a`,font:`playfair`,shape:`mask`},{key:`poster.expo`,sub:`01–30.10`,a:`#0f3a4a`,b:`#7ae0d0`,font:`oswald`,shape:`frame`},{key:`poster.circus`,sub:`15.10`,a:`#7a1a12`,b:`#ffd84a`,font:`pacifico`,shape:`stars`},{key:`poster.market`,sub:`26.10`,a:`#2a4a1a`,b:`#f2a83a`,font:`pacifico`,shape:`leaf`},{key:`poster.concert`,sub:`31.10`,a:`#141a3a`,b:`#4ad0ff`,font:`oswald`,shape:`wave`}],Rf={croissant(e,t,n,r){e.beginPath(),e.ellipse(t,n,r*.9,r*.45,-.1,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(0,0,0,0.35)`,e.lineWidth=r*.08;for(let i=-2;i<=2;i++)e.beginPath(),e.moveTo(t+i*r*.3,n-r*.4),e.lineTo(t+i*r*.3-r*.1,n+r*.4),e.stroke()},cross(e,t,n,r){e.fillRect(t-r*.18,n-r*.55,r*.36,r*1.1),e.fillRect(t-r*.55,n-r*.18,r*1.1,r*.36)},book(e,t,n,r){e.fillRect(t-r*.55,n-r*.4,r*.5,r*.8),e.fillRect(t+r*.05,n-r*.4,r*.5,r*.8),e.clearRect(t-r*.03,n-r*.4,r*.06,r*.8)},flower(e,t,n,r){for(let i=0;i<6;i++){let a=i/6*Math.PI*2;e.beginPath(),e.arc(t+Math.cos(a)*r*.36,n+Math.sin(a)*r*.36,r*.24,0,Math.PI*2),e.fill()}},scissors(e,t,n,r){e.lineWidth=r*.14,e.strokeStyle=e.fillStyle,e.beginPath(),e.moveTo(t-r*.5,n-r*.5),e.lineTo(t+r*.5,n+r*.5),e.moveTo(t+r*.5,n-r*.5),e.lineTo(t-r*.5,n+r*.5),e.stroke(),e.beginPath(),e.arc(t-r*.5,n+r*.5,r*.2,0,Math.PI*2),e.arc(t+r*.5,n+r*.5,r*.2,0,Math.PI*2),e.stroke()},film(e,t,n,r){e.beginPath(),e.arc(t,n,r*.55,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`destination-out`;for(let i=0;i<5;i++){let a=i/5*Math.PI*2;e.beginPath(),e.arc(t+Math.cos(a)*r*.3,n+Math.sin(a)*r*.3,r*.1,0,Math.PI*2),e.fill()}e.globalCompositeOperation=`source-over`},basket(e,t,n,r){e.beginPath(),e.moveTo(t-r*.6,n-r*.1),e.lineTo(t+r*.6,n-r*.1),e.lineTo(t+r*.4,n+r*.5),e.lineTo(t-r*.4,n+r*.5),e.closePath(),e.fill(),e.lineWidth=r*.1,e.strokeStyle=e.fillStyle,e.beginPath(),e.arc(t,n-r*.1,r*.4,Math.PI,0),e.stroke()},bottle(e,t,n,r){e.fillRect(t-r*.18,n-r*.55,r*.36,r*.35),e.beginPath(),e.moveTo(t-r*.18,n-r*.22),e.lineTo(t-r*.36,n+r*.05),e.lineTo(t-r*.36,n+r*.55),e.lineTo(t+r*.36,n+r*.55),e.lineTo(t+r*.36,n+r*.05),e.lineTo(t+r*.18,n-r*.22),e.closePath(),e.fill()},slice(e,t,n,r){e.beginPath(),e.moveTo(t-r*.55,n-r*.45),e.lineTo(t+r*.55,n-r*.45),e.lineTo(t,n+r*.6),e.closePath(),e.fill()},bike(e,t,n,r){e.lineWidth=r*.09,e.strokeStyle=e.fillStyle;for(let i of[-.42,.42])e.beginPath(),e.arc(t+i*r,n+r*.2,r*.3,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(t-r*.42,n+r*.2),e.lineTo(t,n-r*.3),e.lineTo(t+r*.42,n+r*.2),e.moveTo(t,n-r*.3),e.lineTo(t-r*.1,n-r*.4),e.stroke()},cup(e,t,n,r){e.beginPath(),e.moveTo(t-r*.4,n-r*.2),e.lineTo(t+r*.4,n-r*.2),e.lineTo(t+r*.3,n+r*.4),e.lineTo(t-r*.3,n+r*.4),e.closePath(),e.fill(),e.lineWidth=r*.1,e.strokeStyle=e.fillStyle,e.beginPath(),e.arc(t+r*.42,n,r*.16,-Math.PI/2,Math.PI/2),e.stroke()},glasses(e,t,n,r){e.lineWidth=r*.1,e.strokeStyle=e.fillStyle;for(let i of[-.32,.32])e.beginPath(),e.arc(t+i*r,n,r*.28,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(t-r*.04,n),e.lineTo(t+r*.04,n),e.stroke()},camera(e,t,n,r){e.fillRect(t-r*.55,n-r*.3,r*1.1,r*.75),e.fillRect(t-r*.2,n-r*.45,r*.4,r*.16),e.globalCompositeOperation=`destination-out`,e.beginPath(),e.arc(t,n+r*.08,r*.22,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`source-over`},needle(e,t,n,r){e.lineWidth=r*.08,e.strokeStyle=e.fillStyle,e.beginPath(),e.moveTo(t-r*.5,n+r*.5),e.lineTo(t+r*.5,n-r*.5),e.stroke(),e.beginPath(),e.ellipse(t+r*.48,n-r*.46,r*.06,r*.14,.8,0,Math.PI*2),e.stroke()},disc(e,t,n,r){e.beginPath(),e.arc(t,n,r*.55,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`destination-out`,e.beginPath(),e.arc(t,n,r*.12,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`source-over`}};function zf(e,t,n,r,i){let a=i;for(;a>12&&(e.font=jf[n].replace(`{s}`,a),!(e.measureText(t).width<=r));a-=4);return a}var Bf=class{constructor(){this.W=2048,this.H=1536,this.color=Df(this.W,this.H),this.glow=Df(this.W,this.H),this.rects=new Map,this.defs=new Map,this.cursor={x:0,y:0,rowH:0},this.map=new Ri(this.color),this.map.colorSpace=qe,this.map.anisotropy=8,this.emissiveMap=new Ri(this.glow),this.emissiveMap.colorSpace=qe,this.emissiveMap.anisotropy=8;for(let e of Mf)this.register(e.id,Nf,(t,n,r,i)=>this.drawBoard(t,n,r,i,e));this.register(`street`,Ff,(e,t,n,r)=>this.drawPlate(e,t,n,r)),this.register(`open`,{w:256,h:96},(e,t,n,r)=>this.drawNeon(e,t,n,r,Ad(`sign.open`),`#ff4a4a`));for(let e=0;e<Lf.length;e++)this.register(`poster${e}`,If,(t,n,r,i)=>this.drawPoster(t,n,r,i,Lf[e],e));for(let e of[`sign-30`,`sign-cross`,`sign-park`,`sign-oneway`])this.register(e,{w:128,h:128},(t,n,r,i)=>this.drawRoadSign(t,n,r,i,e));this.register(`ped-stop`,{w:128,h:128},(e,t,n,r)=>this.drawPed(e,t,n,r,!1)),this.register(`ped-walk`,{w:128,h:128},(e,t,n,r)=>this.drawPed(e,t,n,r,!0)),this.register(`blade-cafe`,Pf,(e,t,n,r)=>this.drawBlade(e,t,n,r,`cup`,`#ffb45a`)),this.register(`blade-bar`,Pf,(e,t,n,r)=>this.drawBlade(e,t,n,r,`bottle`,`#ff5ab4`)),this.register(`blade-hotel`,Pf,(e,t,n,r)=>this.drawBlade(e,t,n,r,null,`#7ad0ff`,`H`)),this.register(`blade-pharmacy`,Pf,(e,t,n,r)=>this.drawBlade(e,t,n,r,`cross`,`#3aff8a`)),this.register(`blade-cinema`,Pf,(e,t,n,r)=>this.drawBlade(e,t,n,r,`film`,`#ffd27a`)),this.draw()}register(e,t,n){let r=this.cursor;r.x+t.w>this.W&&(r.x=0,r.y+=r.rowH,r.rowH=0);let i={x:r.x,y:r.y,w:t.w,h:t.h};i.u0=i.x/this.W,i.u1=(i.x+i.w)/this.W,i.v0=1-(i.y+i.h)/this.H,i.v1=1-i.y/this.H,this.rects.set(e,i),this.defs.set(e,n),r.x+=t.w,r.rowH=Math.max(r.rowH,t.h)}uv(e){let t=this.rects.get(e);return t?[t.u0+.002,t.v0+.002,t.u1-.002,t.v1-.002]:[0,0,1,1]}aspect(e){let t=this.rects.get(e);return t?t.w/t.h:4}draw(){let e=this.color.getContext(`2d`),t=this.glow.getContext(`2d`);e.clearRect(0,0,this.W,this.H),t.fillStyle=`#000`,t.fillRect(0,0,this.W,this.H);for(let[n,r]of this.defs){let i=this.rects.get(n);e.save(),t.save(),e.beginPath(),e.rect(i.x,i.y,i.w,i.h),e.clip(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),e.translate(i.x,i.y),t.translate(i.x,i.y),r(e,t,i.w,i.h),e.restore(),t.restore()}this.map.needsUpdate=!0,this.emissiveMap.needsUpdate=!0}drawBoard(e,t,n,r,i){let a=new Gd(i.id.length*977+i.id.charCodeAt(0));e.fillStyle=i.bg,e.fillRect(0,0,n,r),e.strokeStyle=`rgba(255,255,255,0.22)`,e.lineWidth=3,e.strokeRect(6,6,n-12,r-12);for(let t=0;t<90;t++)e.fillStyle=`rgba(0,0,0,${a.range(.02,.08)})`,e.fillRect(a.range(0,n),a.range(0,r),a.range(1,6),a.range(1,6));let o=i.name??Ad(i.key),s=i.icon?r*.9:0,c=zf(e,o,i.font,n-s-44,r*.62);e.font=jf[i.font].replace(`{s}`,c),e.textBaseline=`middle`,e.textAlign=`left`;let l=(n-(e.measureText(o).width+s))/2;e.fillStyle=i.fg,i.icon&&Rf[i.icon](e,l+r*.4,r/2,r*.42),e.fillText(o,l+s,r/2+3),t.font=e.font,t.textBaseline=`middle`,t.textAlign=`left`,t.fillStyle=i.fg,t.globalAlpha=i.neon?1:.5,i.neon&&(t.shadowColor=i.fg,t.shadowBlur=14),i.icon&&Rf[i.icon](t,l+r*.4,r/2,r*.42),t.fillText(o,l+s,r/2+3),t.globalAlpha=1,t.shadowBlur=0}drawPlate(e,t,n,r){e.fillStyle=`#1b3f7a`,e.fillRect(0,0,n,r),e.strokeStyle=`#f2f2ee`,e.lineWidth=3,e.strokeRect(4,4,n-8,r-8),e.fillStyle=`#f2f2ee`,e.textAlign=`center`,e.textBaseline=`middle`;let i=Ad(`sign.street`),a=zf(e,i,`oswald`,n-24,r*.62);e.font=jf.oswald.replace(`{s}`,a),e.fillText(i,n/2,r/2+2)}drawNeon(e,t,n,r,i,a){e.fillStyle=`#0d0d10`,e.fillRect(0,0,n,r),e.strokeStyle=a,e.lineWidth=3,e.strokeRect(6,6,n-12,r-12);let o=zf(e,i,`oswald`,n-40,r*.6);for(let s of[e,t])s.font=jf.oswald.replace(`{s}`,o),s.textAlign=`center`,s.textBaseline=`middle`,s.fillStyle=a,s.strokeStyle=a,s.lineWidth=3,s.shadowColor=a,s.shadowBlur=s===t?16:6,s.fillText(i,n/2,r/2+2),s.strokeRect(6,6,n-12,r-12),s.shadowBlur=0}drawPoster(e,t,n,r,i,a){let o=new Gd(a*7919+13),s=e.createLinearGradient(0,0,0,r);if(s.addColorStop(0,i.a),s.addColorStop(1,i.b),e.fillStyle=s,e.fillRect(0,0,n,r),e.save(),e.translate(n/2,r*.42),e.fillStyle=`rgba(255,255,255,0.18)`,e.strokeStyle=`rgba(255,255,255,0.55)`,e.lineWidth=6,i.shape===`stars`){for(let t=0;t<14;t++){let t=o.range(0,Math.PI*2),n=o.range(20,110);e.beginPath(),e.arc(Math.cos(t)*n,Math.sin(t)*n*.9,o.range(3,9),0,Math.PI*2),e.fillStyle=`#fff4c0`,e.fill()}e.beginPath(),e.arc(0,0,64,0,Math.PI*2),e.stroke()}else if(i.shape===`wave`)for(let t=0;t<5;t++){e.beginPath();for(let n=-100;n<=100;n+=4)e.lineTo(n,Math.sin(n*.06+t)*(24+t*6)+(t-2)*26);e.stroke()}else if(i.shape===`frame`)e.strokeRect(-80,-100,160,200),e.strokeRect(-56,-76,112,152),e.beginPath(),e.arc(0,0,34,0,Math.PI*2),e.fill();else if(i.shape===`mask`)e.beginPath(),e.ellipse(0,0,70,90,0,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=`rgba(0,0,0,0.5)`,e.beginPath(),e.ellipse(-26,-14,16,9,.3,0,Math.PI*2),e.ellipse(26,-14,16,9,-.3,0,Math.PI*2),e.fill();else if(i.shape===`sax`)e.lineWidth=22,e.beginPath(),e.moveTo(-30,-100),e.bezierCurveTo(-30,20,10,100,60,60),e.stroke();else for(let t=0;t<9;t++)e.save(),e.rotate(o.range(0,Math.PI*2)),e.translate(o.range(10,80),0),e.beginPath(),e.ellipse(0,0,26,12,.6,0,Math.PI*2),e.fill(),e.restore();e.restore(),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`;let c=Ad(i.key),l=zf(e,c,i.font,n-30,64);e.font=jf[i.font].replace(`{s}`,l),e.shadowColor=`rgba(0,0,0,0.5)`,e.shadowBlur=8,e.fillText(c,n/2,r*.8),e.shadowBlur=0,e.font=jf.oswald.replace(`{s}`,34),e.fillText(i.sub,n/2,r*.91),t.globalAlpha=.55,t.drawImage(e.canvas,this.rects.get(`poster${a}`).x,this.rects.get(`poster${a}`).y,n,r,0,0,n,r),t.globalAlpha=1}drawRoadSign(e,t,n,r,i){e.fillStyle=`#0000`,e.clearRect(0,0,n,r);let a=n/2,o=r/2;i===`sign-30`?(e.fillStyle=`#d61f26`,e.beginPath(),e.arc(a,o,60,0,Math.PI*2),e.fill(),e.fillStyle=`#f4f4f0`,e.beginPath(),e.arc(a,o,44,0,Math.PI*2),e.fill(),e.fillStyle=`#111`,e.font=jf.oswald.replace(`{s}`,58),e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`30`,a,o+3)):i===`sign-park`?(e.fillStyle=`#1e56b8`,e.beginPath(),e.arc(a,o,60,0,Math.PI*2),e.fill(),e.strokeStyle=`#d61f26`,e.lineWidth=12,e.beginPath(),e.arc(a,o,46,0,Math.PI*2),e.moveTo(a-32,o-32),e.lineTo(a+32,o+32),e.moveTo(a+32,o-32),e.lineTo(a-32,o+32),e.stroke()):i===`sign-cross`?(e.fillStyle=`#1e56b8`,e.fillRect(a-56,o-56,112,112),e.fillStyle=`#f4f4f0`,e.beginPath(),e.moveTo(a,o-46),e.lineTo(a+46,o+40),e.lineTo(a-46,o+40),e.closePath(),e.fill(),e.fillStyle=`#111`,e.beginPath(),e.arc(a,o-8,6,0,Math.PI*2),e.fill(),e.fillRect(a-4,o-2,8,26)):(e.fillStyle=`#1e56b8`,e.fillRect(a-56,o-56,112,112),e.fillStyle=`#f4f4f0`,e.beginPath(),e.moveTo(a-34,o-12),e.lineTo(a+6,o-12),e.lineTo(a+6,o-32),e.lineTo(a+42,o),e.lineTo(a+6,o+32),e.lineTo(a+6,o+12),e.lineTo(a-34,o+12),e.closePath(),e.fill())}drawPed(e,t,n,r,i){e.fillStyle=`#0a0a0c`,e.fillRect(0,0,n,r);for(let a of[e,t])a.fillStyle=a===t?`#ffffff`:`#7a7a7e`,a.strokeStyle=a.fillStyle,a.lineCap=`round`,a.lineWidth=11,a.beginPath(),a.arc(n/2,r*.2,r*.09,0,Math.PI*2),a.fill(),a.beginPath(),a.moveTo(n/2,r*.34),a.lineTo(n/2,r*.62),a.stroke(),a.beginPath(),i?(a.moveTo(n/2,r*.62),a.lineTo(n*.36,r*.9),a.moveTo(n/2,r*.62),a.lineTo(n*.64,r*.9),a.moveTo(n/2,r*.4),a.lineTo(n*.34,r*.56),a.moveTo(n/2,r*.4),a.lineTo(n*.66,r*.52)):(a.moveTo(n/2,r*.62),a.lineTo(n*.44,r*.9),a.moveTo(n/2,r*.62),a.lineTo(n*.56,r*.9),a.moveTo(n*.32,r*.44),a.lineTo(n*.68,r*.44)),a.stroke()}drawBlade(e,t,n,r,i,a,o){e.fillStyle=`#141418`,e.fillRect(0,0,n,r);for(let s of[e,t])s.strokeStyle=a,s.fillStyle=a,s.lineWidth=5,s.shadowColor=a,s.shadowBlur=s===t?16:5,s.strokeRect(10,10,n-20,r-20),i&&Rf[i](s,n/2,r/2,n*.42),o&&(s.font=jf.oswald.replace(`{s}`,120),s.textAlign=`center`,s.textBaseline=`middle`,s.fillText(o,n/2,r/2+6)),s.shadowBlur=0}};function Vf(e,t,n){let r=Math.imul(e,668265261)^Math.imul(t,374761393)^Math.imul(n+2654435769,2246822507);return r=Math.imul(r^r>>>15,739982445),r=Math.imul(r^r>>>12,695872825),r^=r>>>15,(r>>>0)/4294967296}var Hf=e=>e*e*e*(e*(e*6-15)+10),Uf=(e,t,n)=>e+(t-e)*n;function Wf(e,t,n,r=0){let i=Math.floor(e),a=Math.floor(t),o=Hf(e-i),s=Hf(t-a),c=pu(i,n),l=pu(i+1,n),u=pu(a,n),d=pu(a+1,n),f=Vf(c,u,r),p=Vf(l,u,r),m=Vf(c,d,r),h=Vf(l,d,r);return Uf(Uf(f,p,o),Uf(m,h,o),s)}function Gf(e,t,n,r,i=0){let a=Math.floor(e),o=Math.floor(t),s=Hf(e-a),c=Hf(t-o),l=pu(a,n),u=pu(a+1,n),d=pu(o,r),f=pu(o+1,r);return Uf(Uf(Vf(l,d,i),Vf(u,d,i),s),Uf(Vf(l,f,i),Vf(u,f,i),s),c)}function Kf(e,t,n,r=4,i=0){let a=0,o=.5,s=0,c=1;for(let l=0;l<r;l++)a+=o*Wf(e*c,t*c,n*c,i+l*101),s+=o,o*=.5,c*=2;return a/s}var qf={asphalt:2.5,sidewalk:2.4,setts:1.28,kerb:1,brick:[.52,.6],stone:1.2,plaster:1,concrete:1.2,slate:[.9,.8],tile:.8,wood:.5},Jf=(e,t,n)=>e+(t-e)*n;function Yf(e,t,{aniso:n=8}={}){return{map:Of(e.canvas,{aniso:n}),normal:Of(Af(e.height,e.w,e.h,t),{srgb:!1,aniso:n})}}function Xf(e){return Yf(kf(512,512,(t,n,r)=>{let i=t/512,a=n/512,o=Wf(i*96,a*96,96,e),s=Wf(i*192,a*192,192,e+1),c=Kf(i*8,a*8,8,4,e+2),l=Kf(i*3,a*3,3,3,e+5),u=Wf(i*256,a*256,256,e+9),d=o*.6+s*.4,f=58+(d-.5)*40+(c-.5)*24;u>.94&&(f+=46*((u-.94)/.06)),l>.62&&(f*=1-.28*du(.62,.78,l));let p=Math.abs(Wf(i*6,a*6,6,e+11)-.5),m=du(.55,.72,Wf(i*2,a*2,2,e+13)),h=du(.014,0,p)*m;f*=1-.65*h,r.r=f*1,r.g=f*1.02,r.b=f*1.08,r.h=lu(d*.8+.1-h*.5,0,1)}),3.2)}function Zf(e){let t=new Gd(e),n=Array.from({length:16},()=>({v:t.range(-16,10),warm:t.range(-5,5)}));return Yf(kf(512,512,(t,r,i)=>{let a=t/512,o=r/512,s=Math.floor(t/128),c=Math.floor(r/128),l=t-s*128,u=r-c*128,d=Math.min(l,u,127-l,127-u),f=n[c*4+s],p=Wf(a*128,o*128,128,e+3),m=Kf(a*10,o*10,10,3,e+4),h=150+f.v+(p-.5)*30+(m-.5)*16,g=.72+(p-.5)*.06;if(d<4)h=52+p*16,g=.05;else if(d<9){let e=du(4,9,d);h*=.78+.22*e,g=Jf(.05,g,e)}h*=1-.18*du(18,4,d),i.r=h+f.warm,i.g=h,i.b=h-f.warm*.8,i.h=g}),2.4)}function Qf(e){let t=512/12,n=new Gd(e),r=Array.from({length:96},()=>({v:n.range(-22,18),hue:n.range(-1,1),lift:n.range(.85,1)}));return Yf(kf(512,512,(n,i,a)=>{let o=n/512,s=i/512,c=Math.floor(i/t),l=(n+c%2*64*.5)%512,u=Math.floor(l/64),d=l-u*64,f=i-c*t,p=Math.min(d,64-d,f,t-f),m=r[c*8+u],h=Wf(o*110,s*110,110,e+5),g=Kf(o*24,s*24,24,3,e+6),_=112+m.v+(h-.5)*26+(g-.5)*20,v=m.lift;if(p<2.4)_=30+h*10,v=.05;else if(p<8){let e=du(2.4,8,p);_*=.7+.3*e,v=Jf(.05,v,Math.sqrt(e))}else v=m.lift-(g-.5)*.08;a.r=_+m.hue*5,a.g=_,a.b=_-m.hue*4+4,a.h=v}),2.8)}function $f(e){return Yf(kf(256,256,(t,n,r)=>{let i=t/256,a=n/256,o=Wf(i*96,a*96,96,e),s=Kf(i*6,a*6,6,3,e+1),c=146+(o-.5)*34+(s-.5)*22,l=Math.min(t,255-t),u=.8;l<3?(c=70,u=.1):l<8&&(c*=.85+.15*du(3,8,l)),r.r=c,r.g=c*.99,r.b=c*.97,r.h=u+(o-.5)*.05}),2)}function ep(e){let t=new Gd(e),n=Array.from({length:24},()=>({v:t.range(-24,20),burn:t.chance(.08)?t.range(.55,.75):1,lift:t.range(.88,1)}));return Yf(kf(512,512,(t,r,i)=>{let a=t/512,o=r/512,s=Math.floor(r/64),c=(t+s%2*256*.5)%512,l=Math.floor(c/256),u=c-l*256,d=r-s*64,f=Math.min(u,256-u,d,64-d),p=Wf(a*140,o*140,140,e+2),m=Kf(a*12,o*12,12,3,e+3);if(f<5){let e=168+p*26;i.r=e,i.g=e*.95,i.b=e*.88,i.h=.04;return}let h=n[s*3+l],g=(.84+p*.22+(m-.5)*.22)*h.burn*(.9+.1*du(5,12,f));i.r=(168+h.v)*g,i.g=(96+h.v*.4)*g,i.b=(78+h.v*.3)*g,i.h=h.lift*(.86+.14*du(5,11,f))+(p-.5)*.06}),3)}function tp(e){let t=new Gd(e),n=Array.from({length:12},()=>t.range(-11,9));return Yf(kf(512,512,(t,r,i)=>{let a=t/512,o=r/512,s=Math.floor(r/128),c=(t+s%2*256*.5)%512,l=Math.floor(c/256),u=c-l*256,d=r-s*128,f=Math.min(u,256-u,d,128-d),p=Wf(a*150,o*150,150,e+1),m=Kf(a*9,o*9,9,3,e+2),h=Gf(a*30,o*3,30,3,e+3),g=224+n[s*3+l]+(p-.5)*16+(m-.5)*14-h*10,_=.75+(p-.5)*.08;if(f<2.6)g=168+p*14,_=.08;else if(f<7){let e=du(2.6,7,f);g*=.9+.1*e,_=.08+.67*e}p>.93&&(g*=.86),i.r=g,i.g=g*.96,i.b=g*.88,i.h=_}),2.4)}function np(e){return Yf(kf(256,256,(t,n,r)=>{let i=t/256,a=n/256,o=Wf(i*90,a*90,90,e),s=Kf(i*6,a*6,6,3,e+1),c=232+(o-.5)*14+(s-.5)*12;r.r=c,r.g=c,r.b=c,r.h=.5+(o-.5)*.4+(s-.5)*.15}),1.4,{aniso:4})}function rp(e){return Yf(kf(512,512,(t,n,r)=>{let i=t/512,a=n/512,o=Wf(i*160,a*160,160,e),s=Kf(i*7,a*7,7,4,e+1),c=Gf(i*26,a*3,26,3,e+2),l=Wf(i*200,a*200,200,e+3),u=168+(o-.5)*22+(s-.5)*24-c*18;l>.94&&(u*=.72);let d=.6+(o-.5)*.1;Math.min(t,511-t,n,511-n)<4&&(u*=.55,d=.1);for(let[e,r]of[[.25,.25],[.75,.25],[.25,.75],[.75,.75]])Math.hypot(t-e*512,n-r*512)<5&&(u*=.5,d=.2);r.r=u,r.g=u,r.b=u*.98,r.h=d}),2)}function ip(e){let t=512/3,n=new Gd(e),r=Array.from({length:16},()=>n.range(-16,14));return Yf(kf(512,512,(n,i,a)=>{let o=n/512,s=i/512,c=Math.floor(i/128),l=(n+c%2*t*.5)%512,u=Math.floor(l/t),d=l-u*t,f=i-c*128,p=Wf(o*120,s*120,120,e+1),m=Kf(o*10,s*10,10,3,e+2),h=62+r[c*4+u]+(p-.5)*12+(m-.5)*10,g=.5+f/128*.4;(d<3||t-d<3)&&(h*=.5,g*=.6),f>121&&(h*=.55,g=.15),a.r=h,a.g=h*1.06,a.b=h*1.22,a.h=g}),2.6)}function ap(e){let t=512/6,n=new Gd(e),r=Array.from({length:24},()=>n.range(-18,16));return Yf(kf(512,512,(n,i,a)=>{let o=n/512,s=i/512,c=Math.floor(n/t),l=Math.floor(i/128),u=(n-c*t)/t,d=(i-l*128)/128,f=Math.sin(u*Math.PI),p=Wf(o*110,s*110,110,e+1),m=Kf(o*8,s*8,8,3,e+2),h=.55+f*.4+(p-.5)*.12+(m-.5)*.14;h*=d>.86?.6:1;let g=r[l*6+c];a.r=(196+g)*h,a.g=(98+g*.5)*h,a.b=(66+g*.35)*h,a.h=f*.6+(d>.86?0:.2)+(p-.5)*.05}),2.6)}function op(e){let t=new Gd(e),n=Array.from({length:4},()=>t.range(-16,14));return Yf(kf(256,256,(t,r,i)=>{let a=t/256,o=r/256,s=Math.floor(r/64),c=r-s*64,l=Gf(a*3,o*70,3,70,e+s),u=Wf(a*80,o*80,80,e+9),d=138+n[s]+(l-.5)*34+(u-.5)*10,f=.6+(l-.5)*.1;(c<2||c>61)&&(d*=.45,f=.1),i.r=d*1.05,i.g=d*.78,i.b=d*.5,i.h=f}),1.6,{aniso:4})}function sp(e){let t=new Gd(e),n=new Uint8Array(262144);for(let r=0;r<256;r++)for(let i=0;i<256;i++){let a=i/256,o=r/256,s=(r*256+i)*4;n[s]=Kf(a*8,o*8,8,5,e)*255,n[s+1]=Kf(a*16,o*16,16,4,e+7)*255,n[s+2]=Wf(a*128,o*128,128,e+13)*255,n[s+3]=t.next()*255}let r=new ui(n,256,256,j);return r.wrapS=r.wrapT=l,r.magFilter=h,r.minFilter=_,r.generateMipmaps=!0,r.needsUpdate=!0,r}var cp=[[`#b8262e`,`#f0ece4`],[`#2f6b3d`,`#efe6cf`],[`#1f3560`,`#f0ece4`],[`#d69a2c`,`#efe6cf`],[`#6e1f2e`,`#efe6cf`],[`#24402f`,`#24402f`],[`#1f6f78`,`#f0ece4`],[`#2b2b30`,`#e07a2c`]];function lp(e){let t=new Gd(e),n=Df(256,32*cp.length),r=n.getContext(`2d`);return cp.forEach(([e,n],i)=>{for(let t=0;t<256;t+=16)r.fillStyle=t/16%2==0?e:n,r.fillRect(t,i*32,16,32);for(let e=0;e<700;e++)r.fillStyle=`rgba(${t.chance(.5)?255:0}, ${t.chance(.5)?255:0}, 255, ${t.range(.01,.05)})`,r.fillRect(t.range(0,256),i*32+t.range(0,32),t.range(1,3),t.range(1,3))}),{map:Of(n,{aniso:4})}}var up=[`#e8b52a`,`#e0a020`,`#d98a20`,`#cf7418`,`#c4601a`,`#a94a18`,`#8f8a26`,`#b8a030`,`#e6c040`,`#7a8a2a`];function dp(e){let t=new Gd(e),n=Df(512,512),r=n.getContext(`2d`),i=(e,t,n,i,a)=>{r.save(),r.translate(e,t),r.rotate(i),r.fillStyle=a,r.beginPath(),r.moveTo(0,-n),r.bezierCurveTo(n*.7,-n*.55,n*.75,n*.45,0,n),r.bezierCurveTo(-n*.75,n*.45,-n*.7,-n*.55,0,-n),r.fill(),r.strokeStyle=`rgba(60,30,10,0.35)`,r.lineWidth=Math.max(1,n*.06),r.beginPath(),r.moveTo(0,-n*.9),r.lineTo(0,n*.9),r.stroke(),r.restore()};for(let e=0;e<520;e++){let e=t.range(0,512),n=t.range(0,512),r=t.range(13,22),a=t.range(0,Math.PI*2),o=t.pick(up);for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++)Math.abs(e+t*512-256)>256+r*1.2||Math.abs(n+s*512-256)>256+r*1.2||i(e+t*512,n+s*512,r,a,o)}return{map:Of(n,{aniso:4})}}function fp(e){return Yf(kf(256,256,(t,n,r)=>{let i=t/256,a=n/256,o=Kf(i*5,a*5,5,4,e),s=Gf(i*14,a*3,14,3,e+1),c=Wf(i*90,a*90,90,e+2),l=92,u=78,d=64;o>.62?[l,u,d]=[178,168,142]:o>.5&&([l,u,d]=[118,116,88]);let f=.78+s*.3+(c-.5)*.2;r.r=l*f,r.g=u*f,r.b=d*f,r.h=.5+(c-.5)*.3+(s-.5)*.4}),2.2,{aniso:4})}function pp(){let e=Df(512,512),t=e.getContext(`2d`);t.fillStyle=`#efe7d2`,t.beginPath(),t.arc(256,256,250,0,Math.PI*2),t.fill(),t.strokeStyle=`#c9a24a`,t.lineWidth=16,t.stroke(),t.strokeStyle=`#1b1a1a`,t.lineWidth=2,t.beginPath(),t.arc(256,256,226,0,Math.PI*2),t.stroke();for(let e=0;e<60;e++){let n=e/60*Math.PI*2,r=e%5==0;t.lineWidth=r?4:2,t.beginPath(),t.moveTo(256+Math.sin(n)*222,256-Math.cos(n)*222),t.lineTo(256+Math.sin(n)*(256-(r?62:48)),256-Math.cos(n)*(256-(r?62:48))),t.stroke()}return t.fillStyle=`#1b1a1a`,t.font=`700 44px "Playfair Display", Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,[`XII`,`I`,`II`,`III`,`IIII`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`].forEach((e,n)=>{let r=n/12*Math.PI*2;t.fillText(e,256+Math.sin(r)*156,256-Math.cos(r)*156)}),{map:Of(e,{repeat:!1,aniso:8})}}var mp={manhole:[0,0,.5,1],grate:[.5,0,1,1]};function hp(e){let t=new Gd(e),n=Df(256,128),r=n.getContext(`2d`);r.fillStyle=`#26272a`,r.fillRect(0,0,256,128),r.save(),r.translate(64,64),r.fillStyle=`#3a3b3f`,r.beginPath(),r.arc(0,0,62,0,Math.PI*2),r.fill(),r.strokeStyle=`#18191b`,r.lineWidth=3,r.beginPath(),r.arc(0,0,58,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(0,0,22,0,Math.PI*2),r.stroke(),r.clip(),r.strokeStyle=`#1b1c1e`,r.lineWidth=2;for(let e=-8;e<=8;e++)r.beginPath(),r.moveTo(e*9-70,-70),r.lineTo(e*9+70,70),r.moveTo(e*9+70,-70),r.lineTo(e*9-70,70),r.stroke();r.fillStyle=`#2f3033`,r.beginPath(),r.arc(0,0,20,0,Math.PI*2),r.fill(),r.restore(),r.fillStyle=`#3a3b3f`,r.fillRect(134,14,116,100),r.fillStyle=`#0c0d0e`;for(let e=0;e<9;e++)r.fillRect(142+e*12.5,22,7,84);for(let e=0;e<260;e++)r.fillStyle=`rgba(${90+t.int(0,60)}, ${50+t.int(0,20)}, 30, ${t.range(.03,.12)})`,r.fillRect(t.range(0,256),t.range(0,128),t.range(1,4),t.range(1,4));return{map:Of(n,{aniso:4})}}function gp(e=1){return{asphalt:Xf(e+11),sidewalk:Zf(e+23),setts:Qf(e+37),kerb:$f(e+41),iron:hp(e+47),brick:ep(e+59),stone:tp(e+61),plaster:np(e+67),concrete:rp(e+71),slate:ip(e+73),roofTile:ap(e+79),wood:op(e+83),awning:lp(e+89),leaf:dp(e+97),bark:fp(e+101),clock:pp(),noise:sp(e+53)}}var _p=new H,vp=new H,yp=new H,bp=new H(0,1,0),xp=class{constructor(e,t){this.gfx=e,this.sky=t;let n=e.scene;this.fog=new Hn(0,.004),n.fog=this.fog,this.key=new Co(16777215,0),this.key.castShadow=!0,this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.06,n.add(this.key,this.key.target),this.body=`sun`,this.swap=1,this.range=80,this.applyQuality(e.q),e.onQuality=e=>this.applyQuality(e),this.pmrem=new ps(e.renderer),this.bakeScene=new Un;let r=new si(t.mesh.geometry,t.material);r.frustumCulled=!1,this.bakeScene.add(r),this.envTarget=null,this.baked={elev:999,cloud:-1,fog:-1,night:-1,at:-10},this.clock=0}applyQuality(e){let t=this.key.shadow;t.mapSize.set(e.shadowSize,e.shadowSize),t.map?.dispose(),t.map=null,this.range=e.shadowRange;let n=t.camera;n.left=n.bottom=-this.range,n.right=n.top=this.range,n.near=1,n.far=520,n.updateProjectionMatrix()}snap(e){this.body=e.sunIntensity>=e.moonIntensity?`sun`:`moon`,this.swap=1,this.baked.at=-10}update(e,t,n,r){this.clock+=r,this.fog.color.copy(e.fogColor),this.fog.density=e.fogDensity,this.gfx.renderer.setClearColor(e.fogColor);let i=e.sunIntensity>=e.moonIntensity?`sun`:`moon`;i===this.body?this.swap=Math.min(this.swap+r/1.2,1):(this.swap=Math.max(this.swap-r/1.2,0),this.swap===0&&(this.body=i));let a=this.body===`sun`,o=a?e.sunDir:e.moonDir;this.key.color.copy(a?e.sunColor:e.moonColor),this.key.intensity=(a?e.sunIntensity:e.moonIntensity)*this.swap*(1-t.storm*.15),this.placeShadow(o,n),this.gfx.scene.environmentIntensity=e.ambient*(1+6*t.flash);let s=e.sunElev/hu,c=this.baked,l=Math.abs(s-c.elev)>.6||Math.abs(t.cloud-c.cloud)>.04||Math.abs(t.fog-c.fog)>.05||Math.abs(e.night-c.night)>.05;(!this.envTarget||l&&this.clock-c.at>.6)&&this.bakeEnvironment(e,t)}placeShadow(e,t){let n=this.key.shadow;yp.copy(e).negate();let r=Math.abs(e.y)>.98?new H(1,0,0):bp;_p.crossVectors(r,yp).normalize(),vp.crossVectors(yp,_p).normalize();let i=2*this.range/n.mapSize.x,a=Math.round(t.dot(_p)/i)*i,o=Math.round(t.dot(vp)/i)*i,s=t.dot(yp);this.key.target.position.set(0,0,0).addScaledVector(_p,a).addScaledVector(vp,o).addScaledVector(yp,s),this.key.position.copy(this.key.target.position).addScaledVector(e,260),this.key.target.updateMatrixWorld(),this.key.updateMatrixWorld()}bakeEnvironment(e,t){let n=this.baked;n.elev=e.sunElev/hu,n.cloud=t.cloud,n.fog=t.fog,n.night=e.night,n.at=this.clock,this.sky.uniforms.uBake.value=1;let r=this.pmrem.fromScene(this.bakeScene,0,.1,10,{size:128});this.sky.uniforms.uBake.value=0,this.envTarget?.dispose(),this.envTarget=r,this.gfx.scene.environment=r.texture}requestShadowUpdate(){this.gfx.renderer.shadowMap.needsUpdate=this.key.intensity>.001||!this.shadowReady,this.shadowReady=!0}},Sp=class{constructor(e,t){this.scene=e,this.rng=new Gd(t^2654435761),this.beacons=[],this.count=0}keepOut(){let e=[{x0:-Y.facadeX-24,x1:Y.facadeX+24,z0:Y.zMin-8,z1:Y.zMax+8}];for(let t of su){let n=gu(t)+17;e.push({x0:-t.extent-2,x1:t.extent+2,z0:t.z-n,z1:t.z+n})}return e}build(){let e=this.rng,t=this.keepOut(),n=[],r=e=>t.some(t=>e.x0<t.x1&&e.x1>t.x0&&e.z0<t.z1&&e.z1>t.z0);for(let t=-420;t<420;t+=28)for(let i=-420;i<420;i+=28){if(!e.chance(.9))continue;let a=e.range(28*.55,24),o=e.range(28*.55,24),s=t+e.range(0,28-a),c=i+e.range(0,28-o),l=Math.hypot(s+a/2,c+o/2),u=e.range(16,34)+Math.min(l,300)*.06;l>130&&e.chance(.09)&&(u=e.range(70,135));let d={x0:s,z0:c,x1:s+a,z1:c+o,h:u};r(d)||n.push(d)}for(let e of[-1,1])n.push({x0:-70,x1:70,z0:e>0?Y.zMax+14:Y.zMin-58,z1:e>0?Y.zMax+58:Y.zMin-14,h:44});for(let e of su){let t=gu(e)+6;for(let r of[-1,1])n.push({x0:r>0?e.extent+4:-e.extent-50,x1:r>0?e.extent+50:-e.extent-4,z0:e.z-t,z1:e.z+t,h:38})}let i=new Hi(1,1,1);i.translate(0,.5,0);let a=new Float32Array(n.length),o=new Ra({color:16777215,roughness:.85,metalness:0});Cp(o);let s=new yi(i,o,n.length);s.frustumCulled=!1,s.layers.enable(1);let c=[10130570,9211024,11050120,8685708,10259072,8159368],l=new G,u=new Rt,d=new H,f=new H;n.forEach((t,n)=>{d.set(t.x1-t.x0,t.h,t.z1-t.z0),f.set((t.x0+t.x1)/2,-.05,(t.z0+t.z1)/2),l.compose(f,u,d),s.setMatrixAt(n,l),s.setColorAt(n,new K(c[n%c.length]).multiplyScalar(e.range(.8,1.15))),a[n]=e.next(),t.h>65&&this.beacons.push([f.x,t.h+.5,f.z])}),i.setAttribute(`aSeed`,new di(a,1)),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.mesh=s,this.count=n.length,this.scene.add(s)}};function Cp(e){hf(e),pf(e,`backdrop`,e=>{Object.assign(e.uniforms,{uWindowLit:X.windowLit,uNight:X.night,uNoiseTex:X.noiseTex}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aSeed;
varying float vSeed;
varying vec3 vNormalW;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vSeed = aSeed;
vNormalW = normalize((instanceMatrix * vec4(normal, 0.0)).xyz);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying float vSeed;
        varying vec3 vNormalW;
        uniform float uWindowLit;
        uniform float uNight;
        uniform sampler2D uNoiseTex;
        float bdHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3 nw = normalize(vNormalW);
          float side = 1.0 - step(0.5, abs(nw.y));
          float hc = abs(nw.x) > abs(nw.z) ? vWPos.z : vWPos.x;
          vec2 cell = vec2(hc / 3.6, vWPos.y / 3.5);
          vec2 id = floor(cell);
          vec2 f = fract(cell);
          float win = side * step(0.16, f.x) * step(f.x, 0.8) * step(0.2, f.y) * step(f.y, 0.84) * step(1.0, id.y);
          float h = bdHash(id + vSeed * 31.0);
          float lit = step(h, uWindowLit * 0.9 + 0.02);
          float warm = bdHash(id * 1.7 + vSeed * 5.0);
          vec3 lampCol = mix(vec3(1.0, 0.62, 0.32), vec3(1.0, 0.86, 0.66), warm);
          totalEmissiveRadiance += win * lit * lampCol * (0.9 + 0.7 * warm);
          float dirt = texture2D(uNoiseTex, vWPos.xz * 0.04 + vWPos.y * 0.03).r;
          diffuseColor.rgb *= 0.82 + 0.3 * dirt;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.03, 0.04, 0.055), win * (1.0 - lit) * 0.85);
        }`)}),gf(e)}var wp={limestone:{wall:`wall.stone`,uv:qf.stone,tints:[16777215,16248796,15656399,16050642],trims:[16051936,15393227],frames:[15986662,2898484,3354668],floorH:3.45,groundH:4.9,spacing:3.4,win:{w:1.3,h:2.3,sill:.8},reveal:.3,roof:`mansard`,cornice:`classic`,balconies:!0,shopChance:.8},brick:{wall:`wall.brick`,uv:qf.brick,tints:[16777215,15915464,14466990,16770774,15254704],trims:[15327954,13616820],frames:[15855332,2308652,2895670,5909284],floorH:3.25,groundH:4.6,spacing:3.2,win:{w:1.2,h:2.05,sill:.85},reveal:.26,roof:`flat`,cornice:`corbel`,balconies:!1,shopChance:.7},pastel:{wall:`wall.plaster`,uv:qf.plaster,tints:[15254120,11125920,14723488,10467536,14256732,15786680,11917512,12102096],trims:[16249834,15525074],frames:[16249834,3099194,3820138],floorH:3.1,groundH:4.3,spacing:3,win:{w:1.1,h:1.9,sill:.9},reveal:.22,roof:`hip`,cornice:`simple`,balconies:!1,shutters:!0,shopChance:.5},modern:{wall:`wall.concrete`,uv:qf.concrete,tints:[14210252,13159632,14733496,12108992,14999768],trims:[13617856,12105392],frames:[2829875,3816770,14605268],floorH:3.2,groundH:4.4,spacing:3.6,win:{w:2.4,h:1.55,sill:.95},reveal:.35,roof:`flat`,cornice:`flat`,balconies:!0,shopChance:.85},glass:{wall:`wall.concrete`,uv:qf.concrete,tints:[10133672,9081500,11052188],trims:[2829875],frames:[2303531,3093304],floorH:3.6,groundH:4.8,spacing:1.8,win:{w:1.6,h:2.5,sill:.55},reveal:.12,roof:`flat`,cornice:`flat`,balconies:!1,shopChance:.4,curtain:!0}},Tp={slate:[5857388,4870234,6646648],tile:[14254170,12873804,14716006]};function Ep(e,t){return e.groundH+(t-1)*e.floorH}var Dp=`glass.windows`,Op=(e,t,n)=>new G().makeTranslation(e,t,n);function kp(e,{x0:t,y0:n,x1:r,y1:i,z:a,kind:o=0,room:s,curtain:c=0,thr:l,hue:u}){let d=e.rng,f=(t+r)/2,p=(n+i)/2,m={aCenter:e.world(f,p,a),aRoom:[s.w,s.h,s.d,p-s.floorY],aInfo:[o,l??d.next(),u??d.next(),c],aPane:[r-t,i-n]};e.b(Dp).quad([t,n,a],[r,n,a],[r,i,a],[t,i,a],{attrs:m})}function Ap(e){let t=e.next();return t<.45?0:t<.75?e.range(.25,.6):e.range(.7,1)}function jp(e,t){let{x:n,y:r,w:i,h:a,reveal:o}=t,s=t.frameW??.06,c=-o+.02,l=c+.1,u=e.b(`trim`),d=t.frame;u.box(n,r,c,n+s,r+a,l,{color:d,skip:[`back`,`right`]}),u.box(n+i-s,r,c,n+i,r+a,l,{color:d,skip:[`back`,`left`]}),u.box(n+s,r,c,n+i-s,r+s,l,{color:d,skip:[`back`,`left`,`right`]}),u.box(n+s,r+a-s,c,n+i-s,r+a,l,{color:d,skip:[`back`,`left`,`right`]});let f=t.mullions??0;for(let e=1;e<=f;e++){let t=n+i*e/(f+1);u.box(t-s*.5,r+s,c,t+s*.5,r+a-s,l,{color:d,skip:[`back`,`top`,`bottom`]})}if(t.transom){let e=r+a*t.transom;u.box(n+s,e-s*.5,c,n+i-s,e+s*.5,l,{color:d,skip:[`back`,`left`,`right`]})}if(kp(e,{x0:n+s,y0:r+s,x1:n+i-s,y1:r+a-s,z:-o+.07,kind:t.kind??0,room:t.room,curtain:t.curtain??Ap(e.rng)}),t.sill!=null&&u.box(n-.09,r-.075,0,n+i+.09,r,.11,{color:t.sill,skip:[`back`]}),t.lintel!=null&&u.box(n-.1,r+a,0,n+i+.1,r+a+.15,.07,{color:t.lintel,skip:[`back`]}),t.pediment!=null){let e=r+a+.15,o=Math.min(.55,i*.32);u.triangle([n-.14,e,.07],[n+i+.14,e,.07],[n+i/2,e+o,.07],{color:t.pediment}),u.box(n-.14,e-.02,0,n+i+.14,e+0,.1,{color:t.pediment,skip:[`back`]})}if(t.shutters!=null){let e=i*.5;u.box(n-e-.03,r,0,n-.03,r+a,.05,{color:t.shutters,skip:[`back`]}),u.box(n+i+.03,r,0,n+i+e+.03,r+a,.05,{color:t.shutters,skip:[`back`]})}if(t.flowers){u.box(n-.05,r-.34,0,n+i+.05,r-.09,.3,{color:4862756,skip:[`back`]});let t=e.rng,a=Math.max(3,Math.round(i/.28)),o=t.pick([[14240346,15231610],[15254074,15784032],[12081872,13798112],[15790320,15261904]]);for(let s=0;s<a;s++){let c=n+.06+(i-.12)*(s+.5)/a;e.b(`trim`).pushMatrix(Op(c,r-.08+t.range(0,.06),.15+t.range(-.05,.05))).sphere(t.range(.1,.15),6,4,{color:t.pick(o)}),e.b(`trim`).popMatrix()}}}var Mp=(e,t,n,r,i,a,o)=>e.quad([t,n,a],[r,n,a],[r,i,a],[t,i,a],o);function Np(e,t,n,r,i,{key:a,tint:o,uv:s,reveal:c,sillReveal:l=!0}){let u=e.b(a),d={color:o,uvScale:s},f={color:Fp(o,.72),uvScale:s},p=0;for(let e of i){e.x0>p+1e-6&&Mp(u,p,n,e.x0,r,0,d),e.y0>n+1e-6&&Mp(u,e.x0,n,e.x1,e.y0,0,d),e.y1<r-1e-6&&Mp(u,e.x0,e.y1,e.x1,r,0,d);let t=c;u.quad([e.x0,e.y0,0],[e.x0,e.y0,-t],[e.x0,e.y1,-t],[e.x0,e.y1,0],f),u.quad([e.x1,e.y0,-t],[e.x1,e.y0,0],[e.x1,e.y1,0],[e.x1,e.y1,-t],f),l&&u.quad([e.x0,e.y0,0],[e.x1,e.y0,0],[e.x1,e.y0,-t],[e.x0,e.y0,-t],d),u.quad([e.x0,e.y1,-t],[e.x1,e.y1,-t],[e.x1,e.y1,0],[e.x0,e.y1,0],f),p=e.x1}p<t-1e-6&&Mp(u,p,n,t,r,0,d)}var Pp=[1,1,1];function Fp(e,t){let n=Yd(e);return Pp[0]=n[0]*t,Pp[1]=n[1]*t,Pp[2]=n[2]*t,[...Pp]}function Ip(e,t,n,r,i,a,o,s=`trim`){e.b(s).box(t,r,0,n,r+i,a,{color:o,skip:[`back`]})}function Lp(e,{x0:t,x1:n,y:r,depth:i,slab:a,rail:o=2040358,glass:s=!1}){let c=e.b(`trim`),l=e.b(`metal`);c.box(t,r-.17,0,n,r,i,{color:a,skip:[`back`]}),c.box(t-.03,r-.05,i-.02,n+.03,r,i+.05,{color:a,skip:[`back`]});let u=r+1;l.box(t,u,i-.06,n,u+.05,i,{color:o,skip:[`back`]}),l.box(t,r+.06,i-.04,n,r+.1,i,{color:o,skip:[`back`]}),l.box(t,u,0,t+.05,u+.05,i,{color:o,skip:[`back`,`left`]}),l.box(n-.05,u,0,n,u+.05,i,{color:o,skip:[`back`,`right`]});let d=(e,t,n)=>{let i=.022;n?(l.quad([e,r+.1,t],[e+i,r+.1,t],[e+i,u,t],[e,u,t],{color:o}),l.quad([e+i,r+.1,t],[e,r+.1,t],[e,u,t],[e+i,u,t],{color:o})):(l.quad([e,r+.1,t+i],[e,r+.1,t],[e,u,t],[e,u,t+i],{color:o}),l.quad([e,r+.1,t],[e,r+.1,t+i],[e,u,t+i],[e,u,t],{color:o}))},f=s?.6:.13,p=Math.max(2,Math.round((n-t)/f));for(let e=0;e<=p;e++)d(t+(n-t)*e/p-.011,i-.03,!0);let m=Math.max(1,Math.round(i/f));for(let e=1;e<m;e++){let r=i*e/m;d(t+.01,r,!1),d(n-.035,r,!1)}}function Rp(e,t,n,r,i){let a=e.b(`trim`),o=(e,n,r,o=i)=>a.box(0,r,0,t,r+n,e,{color:o,skip:[`back`,`left`,`right`]});return r===`classic`?(o(.06,.55,n-.55),o(.16,.14,n-.02),o(.32,.1,n+.12),o(.5,.18,n+.22),.4):r===`corbel`?(o(.07,.14,n-.3),o(.15,.13,n-.16),o(.24,.16,n-.03),o(.3,.1,n+.13),.23):r===`simple`?(o(.32,.16,n-.02),.14):(o(.12,.14,n),.14)}function zp(e,t,{floors:n,tint:r,frameC:i,groundFloor:a,quoins:o={left:!0,right:!0}}){let s=e.style,c=e.rng,l=s.groundH,u=Ep(s,n),d=c.pick(s.trims);s.curtain?Vp(e,t,n,r,i):Bp(e,t,n,r,d,i),s.curtain||Ip(e,0,t,l-.12,.24,.1,d);let f=a(e,t,{tint:r,trimC:d,frameC:i});if(!s.curtain){let n=s.wall===`wall.brick`?d:Fp(r,.93),i=s.wall===`wall.brick`?`trim`:s.wall;o.left&&e.b(i).box(0,0,0,.38,u,.06,{color:n,skip:[`back`,`left`],uvScale:s.uv}),o.right&&e.b(i).box(t-.38,0,0,t,u,.06,{color:n,skip:[`back`,`right`],uvScale:s.uv})}return Rp(e,t,u,s.cornice,d),{shops:f,H:u,trimC:d}}function Bp(e,t,n,r,i,a){let o=e.style,s=e.rng,c=o.groundH,l=o.floorH,u=Math.max(2,Math.round(t/o.spacing)),d=t/u,f=Math.min(o.win.w,d-.85),p=e=>d*e+(d-f)/2,m=new Set;o.balconies&&o.id!==`modern`&&(m.add(1),n>=5&&m.add(n-1));for(let h=1;h<n;h++){let n=c+(h-1)*l,g=m.has(h),_=n+(g?.1:o.win.sill),v=g?o.win.h+.35:o.win.h,y=[];for(let e=0;e<u;e++)y.push({x0:p(e),x1:p(e)+f,y0:_,y1:_+v});if(Np(e,t,n,n+l,y,{key:o.wall,tint:r,uv:o.uv,reveal:o.reveal,sillReveal:!g}),(o.id===`limestone`||o.id===`pastel`)&&Ip(e,0,t,n+l-.07,.14,.05,i),y.forEach((t,r)=>{let c={w:d,h:l,d:s.range(3.6,6.2),floorY:n},u={x:t.x0,y:t.y0,w:f,h:v,reveal:o.reveal,room:c,kind:0,frame:a,mullions:f>1?o.id===`modern`&&f>2?2:1:0,transom:o.id===`limestone`||o.id===`brick`?.74:0,sill:g?null:i};o.id===`limestone`?(u.lintel=i,h===1&&(u.pediment=i)):o.id===`brick`?u.lintel=i:o.id===`pastel`?(u.lintel=i,s.chance(.85)&&o.shutters&&(u.shutters=a===16249834?6982250:a),h===1&&s.chance(.4)&&(u.flowers=!0)):o.id===`modern`&&(u.sill=null,u.lintel=null),jp(e,u)}),g)Lp(e,{x0:0,x1:t,y:n,depth:.72,slab:i});else if(o.id===`modern`&&h>=2&&s.chance(.45))for(let t=0;t<u;t++)s.chance(.4)&&Lp(e,{x0:p(t)-.15,x1:p(t)+f+.15,y:n,depth:1.25,slab:i,rail:2829875,glass:!0})}}function Vp(e,t,n,r,i){let a=e.style,o=e.rng,s=a.groundH,c=a.floorH,l=Math.max(3,Math.round(t/1.8)),u=t/l,d=e.b(`trim`),f=.85;for(let p=1;p<n;p++){let n=s+(p-1)*c;e.b(a.wall).quad([0,n,0],[t,n,0],[t,n+f,0],[0,n+f,0],{color:Fp(r,.9),uvScale:a.uv}),d.box(0,n+f-.05,0,t,n+f+.03,.09,{color:i,skip:[`back`]});for(let t=0;t<l;t++){let r=t*u,a={w:u*2,h:c,d:o.range(6,9),floorY:n},s=r+.03,l=u-.06,p={x0:s,y0:n+f+.03,x1:s+l,y1:n+c-.03,z:-.02};e.b(`glass.windows`).quad([p.x0,p.y0,p.z],[p.x1,p.y0,p.z],[p.x1,p.y1,p.z],[p.x0,p.y1,p.z],{attrs:{aCenter:e.world((p.x0+p.x1)/2,(p.y0+p.y1)/2,p.z),aRoom:[a.w,a.h,a.d,(p.y0+p.y1)/2-n],aInfo:[3,o.next(),o.next(),0],aPane:[p.x1-p.x0,p.y1-p.y0]}}),d.box(r-.03,n+f,0,r+.03,n+c,.1,{color:i,skip:[`back`]})}d.box(t-.03,n+f,0,t+.03,n+c,.1,{color:i,skip:[`back`]})}}var Hp=new H(0,1,0),Up=new H;function Wp(e,t,n){let r=new H(t.x,0,t.z),i=new H(n.x,0,n.z);return new G().makeBasis(r,Hp,i).setPosition(e.x,0,e.z)}function Gp(e){let t=e.tangent,n=e.normal;return e.corner.end===`end`?{origin:{x:e.origin.x+t.x*e.width,z:e.origin.z+t.z*e.width},tangent:{x:-n.x,z:-n.z},normal:{x:t.x,z:t.z},width:e.depth}:{origin:{x:e.origin.x-n.x*e.depth,z:e.origin.z-n.z*e.depth},tangent:{x:n.x,z:n.z},normal:{x:-t.x,z:-t.z},width:e.depth}}var Kp=class{constructor(e,t,n,{id:r,matrix:i,z:a,rng:o=null}){this.batch=e,this.lot=t,this.style=n,this.id=r,this.matrix=i,this.z=a,this.rng=o??new Gd((t.seed^Kd(r))>>>0),this.chimneys=[],this.beacons=[],this.signBand=null}b(e){let t=this.batch.builder(e,this.z);return t.lotId!==this.id&&(t.setMatrix(this.matrix),t.lotId=this.id),t}world(e,t,n){return Up.set(e,t,n).applyMatrix4(this.matrix),[Up.x,Up.y,Up.z]}},qp=2434859,Jp=[2046510,6954792,1911882,2894896,8018462,3809858,1326152,15261900];function Yp(e,t,{tint:n,trimC:r,frameC:i}){let a=e.style,o=e.rng,s=a.groundH,c=.34,l=[],u=[],d=t>10.5&&o.chance(.75),f=2.2,p=o.chance(.5),m=.4,h=t-.4;if(d){let e=p?.5:t-.5-f;l.push({x0:e,x1:e+f,y0:0,y1:3.15,door:!0}),p?m=e+f+.5:h=e-.5}let g=.34,_=Math.max(1,Math.round((h-m)/5.4)),v=(h-m)/_;for(let e=0;e<_;e++)l.push({x0:m+e*v+g,x1:m+(e+1)*v-g,y0:.55,y1:3.4,shop:!0,bw:v});l.sort((e,t)=>e.x0-t.x0),Np(e,t,0,s,l,{key:a.wall,tint:n,uv:a.uv,reveal:c,sillReveal:!0});let y=e.b(`trim`),b=o.chance(.3)?o.int(0,_-1):-1,x=0;for(let t of l){if(t.door){tm(e,t,c,i);continue}let n=x===b?2:1;x++;let r=t.x1-t.x0,a=.07,l=-.34+.03,d=-.21000000000000005;y.box(t.x0,t.y0,l,t.x0+a,t.y1,d,{color:qp,skip:[`back`,`right`]}),y.box(t.x1-a,t.y0,l,t.x1,t.y1,d,{color:qp,skip:[`back`,`left`]}),y.box(t.x0+a,t.y1-.4,l,t.x1-a,t.y1-.34,d,{color:qp,skip:[`back`,`left`,`right`]}),y.box(t.x0+a,t.y0,l,t.x1-a,t.y0+.26,d,{color:qp,skip:[`back`,`left`,`right`]});let f=Math.max(0,Math.round(r/1.7)-1);for(let e=1;e<=f;e++){let n=t.x0+r*e/(f+1);y.box(n-.03,t.y0+.26,l,n+.03,t.y1-.4,d,{color:qp,skip:[`back`,`top`,`bottom`]})}kp(e,{x0:t.x0+a,y0:t.y0+.26,x1:t.x1-a,y1:t.y1-.4,z:-.25,kind:n,room:{w:t.bw,h:s-.4,d:o.range(5.5,9),floorY:0},curtain:0,thr:o.next()}),kp(e,{x0:t.x0+a,y0:t.y1-.34,x1:t.x1-a,y1:t.y1-a,z:-.25,kind:n,room:{w:t.bw,h:s-.4,d:6,floorY:0},curtain:0}),u.push({x0:t.x0,x1:t.x1,y0:t.y0,y1:t.y1,kind:n})}if(u.length){let t=u[0].x0-g*.5,n=u[u.length-1].x1+g*.5,r=o.pick(Jp);if(y.box(t,3.5,0,n,4.22,.16,{color:r,skip:[`back`]}),$p(e,t,n,u),o.chance(.55)&&em(e,u[0].x0-.1,u[u.length-1].x1+.1,o.int(0,7)),o.chance(.45)){let t=o.pick(u),n=Math.min(.7,t.x1-t.x0-.5);e.b(`sign`).quad([t.x0+.35,t.y1-1.15,-.14],[t.x0+.35+n,t.y1-1.15,-.14],[t.x0+.35+n,t.y1-1.15+n*.375,-.14],[t.x0+.35,t.y1-1.15+n*.375,-.14],{uv:e.batch.atlas.uv(`open`)})}}return u}var Xp=[`bakery`,`pharmacy`,`books`,`flowers`,`barber`,`market`,`wine`,`pizza`,`bikes`,`tea`,`optics`,`bank`,`photo`,`atelier`,`vinyl`,`cinema`],Zp=[`cafe`,`bistro`,`bar`],Qp={cafe:`blade-cafe`,bar:`blade-bar`,pharmacy:`blade-pharmacy`,cinema:`blade-cinema`};function $p(e,t,n,r){let i=e.rng,a=e.batch.atlas,o=e.b(`sign`),s=Math.max(1,Math.round((n-t)/6.5)),c=(n-t)/s,l=null;for(let e=0;e<s;e++){let n=t+c*(e+.5),s=r.reduce((e,t)=>Math.abs((t.x0+t.x1)/2-n)<Math.abs((e.x0+e.x1)/2-n)?t:e,r[0]),u=i.pick(s.kind===2?Zp:Xp);l??(l=u);let d=a.aspect(u),f=.62,p=f*d;p>c-.4&&(p=c-.4,f=p/d);let m=3.86;o.quad([n-p/2,m-f/2,.18],[n+p/2,m-f/2,.18],[n+p/2,m+f/2,.18],[n-p/2,m+f/2,.18],{uv:a.uv(u)})}let u=Qp[l];if(u&&i.chance(.7)){let r=i.chance(.5)?n-.15:t+.15,s=a.uv(u),c=2.75,l=3.75;o.quad([r,c,.95],[r,c,.2],[r,l,.2],[r,l,.95],{uv:s}),o.quad([r,c,.2],[r,c,.95],[r,l,.95],[r,l,.2],{uv:s}),e.b(`metal`).box(r-.02,3.7,.02,r+.02,3.81,.98,{color:1842464})}}function em(e,t,n,r,i=3.4,a=.6,o=1.35){let s=e.b(`awning`),c=n-t,l=(r+.08)/8,u=(r+.92)/8,d=c/3.2;s.quad([t,i-a,o],[n,i-a,o],[n,i,.1],[t,i,.1],{uv:[0,l,d,u]}),s.quad([t,i-a-.3,o],[n,i-a-.3,o],[n,i-a,o],[t,i-a,o],{uv:[0,l,d,u]}),s.triangle([t,i,.1],[t,i-a,o],[t,i-a,.1],{color:2763310}),s.triangle([n,i-a,.1],[n,i-a,o],[n,i,.1],{color:2763310})}function tm(e,t,n,r){let i=e.b(`trim`),a=e.b(`wood`),o=-n+.12,s=.09;i.box(t.x0,0,-n+.02,t.x0+s,t.y1,o+.06,{color:r,skip:[`back`,`right`]}),i.box(t.x1-s,0,-n+.02,t.x1,t.y1,o+.06,{color:r,skip:[`back`,`left`]}),i.box(t.x0+s,t.y1-s,-n+.02,t.x1-s,t.y1,o+.06,{color:r,skip:[`back`,`left`,`right`]});let c=(t.x0+t.x1)/2;for(let[e,n]of[[t.x0+s,c-.02],[c+.02,t.x1-s]])a.box(e,0,o,n,t.y1-s,o+.05,{color:7031346,skip:[`back`],uvScale:.5}),i.box(e+.15,1.05,o+.05,n-.15,2.55,o+.06,{color:1712944,skip:[`back`]});a.box(c-.09,1,o+.05,c-.05,1.12,o+.09,{color:13214282}),a.box(c+.05,1,o+.05,c+.09,1.12,o+.09,{color:13214282})}function nm(e,t,{tint:n,trimC:r,frameC:i}){let a=e.style,o=e.rng,s=a.groundH,c=a.reveal+.05,l=Math.max(2,Math.round(t/a.spacing)),u=t/l,d=Math.min(a.win.w,u-.9),f=o.int(0,l-1),p=[];for(let e=0;e<l;e++){let t=u*e+(u-d)/2;e===f?p.push({x0:u*e+(u-1.5)/2,x1:u*e+(u+1.5)/2,y0:0,y1:2.9,door:!0}):p.push({x0:t,x1:t+d,y0:1,y1:1+a.win.h,win:!0})}Np(e,t,0,s,p,{key:a.wall,tint:n,uv:a.uv,reveal:c,sillReveal:!0});for(let t of p)t.door?(tm(e,t,c,i),e.b(`trim`).box(t.x0-.3,0,0,t.x1+.3,.14,.7,{color:r,skip:[`back`]})):jp(e,{x:t.x0,y:t.y0,w:d,h:t.y1-t.y0,reveal:c,room:{w:u,h:s-.6,d:o.range(3.6,6),floorY:.4},kind:0,frame:i,mullions:1,sill:r,lintel:r});return[]}var rm=15787984,im=14208434,am=5016182,om=13214282,sm=1118742,cm=class{constructor(e){this.scene=e,this.hands=[],this.beacons=[],this.top=null}build(e,t){let n=wp.limestone,r=t.width/2,i=3.4,a=1.4,o=t.floors+1,s=Ep(n,o),c=`wall.stone`,l=new G().multiplyMatrices(e.matrix,new G().makeTranslation(r-i,0,a));zp(new Kp(e.batch,t,n,{id:`${t.id}/tower`,matrix:l,z:e.z}),i*2,{floors:o,tint:16183260,frameC:15986662,groundFloor:um});let u={color:15129796,uvScale:qf.stone};e.b(c).quad([r-i,0,a],[r-i,0,0],[r-i,s,0],[r-i,s,a],u),e.b(c).quad([r+i,0,0],[r+i,0,a],[r+i,s,a],[r+i,s,0],u);let d=e.b(c),f=(e,t,n,r,i,a,o=rm,s=[`bottom`])=>d.box(e,t,n,r,i,a,{color:o,uvScale:qf.stone,skip:s}),p=s,m=s+8.5,h=s+15,g=s+21.5;f(r-i,p,-5.4,r+i,m,1.4),f(r-i-.18,p-.05,-5.58,r+i+.18,p+.35,1.4+.18,im),f(r-i-.25,m-.4,-5.65,r+i+.25,m+.1,1.65,im),f(r-i-.2,m,-5.4-.2,r+i+.2,h,1.4+.2,rm),f(r-i-.3,h-.05,-5.7,r+i+.3,h+.4,1.7,im);let _=1.05;for(let e of[-1,1])for(let t of[-1,1])f(r+e*(i-_/2)-_/2,h+.4,-2+t*(i-_/2)-_/2,r+e*(i-_/2)+_/2,g,-2+t*(i-_/2)+_/2,rm,[`bottom`]);e.b(`trim`).box(r-i+_*.5,h+.4,-4.875,r+i-_*.5,g-.3,1.4-_*.5,{color:sm});let v=e.b(`copper`);v.pushMatrix(new G().makeTranslation(r,h+4.6,-2)),v.lathe([[.16,0],[.3,-.12],[.52,-.85],[.66,-1.25],[.72,-1.3]],14,{color:11569722}),v.popMatrix(),f(r-i-.4,g-.05,-5.4-.4,r+i+.4,g+.55,1.4+.4,im),f(r-i-.55,g+.5,-5.95,r+i+.55,g+.75,1.95,rm);let y=g+.75,b=y+11;lm(e.b(`copper`),r,y,-2,3.9,b,am);for(let t of[-1,1])for(let n of[-1,1]){let i=r+t*3.55,a=-2+n*3.55;f(i-.32,y,a-.32,i+.32,y+1,a+.32,rm),lm(e.b(`copper`),i,y+1,a,.36,y+3,am)}let x=e.b(`copper`);x.tube([[r,b,-2],[r,b+1.9,-2]],.05,6,{color:om}),x.pushMatrix(new G().makeTranslation(r,b+1,-2)),x.sphere(.22,10,6,{color:om}),x.popMatrix(),x.tube([[r-.5,b+1.55,-2],[r+.5,b+1.55,-2]],.03,5,{color:om}),this.top=e.world(r,b+1.95,-2),this.beacons.push(this.top);for(let a=0;a<4;a++){let o=new G().multiplyMatrices(e.matrix,new G().makeTranslation(r,0,-2)).multiply(new G().makeRotationY(a*Math.PI/2)).multiply(new G().makeTranslation(0,0,i)),c=new Kp(e.batch,t,n,{id:`${t.id}/tf${a}`,matrix:o,z:e.z});for(let e of[s+2.3,s+5.6])jp(c,{x:-.36,y:e,w:.72,h:1.9,reveal:.2,frame:2763310,sill:14340280,lintel:14340280,room:{w:3,h:3,d:3,floorY:e-.6},kind:0,curtain:0});this.dial(c,s+11.75,2.25,o),kp(c,{x0:-.35,y0:y+3,x1:.35,y1:y+4.1,z:.22,kind:3,room:{w:2,h:2,d:2,floorY:y+2.8},thr:.3})}}dial(e,t,n,r){let i=.27,a=e.b(`clock`),o=[1,1,1],s=a.vertex(0,t,i,0,0,1,.5,.5,o),c=[];for(let e=0;e<=48;e++){let r=e/48*Math.PI*2;c.push(a.vertex(Math.cos(r)*n,t+Math.sin(r)*n,i,0,0,1,.5+Math.cos(r)*.5,.5+Math.sin(r)*.5,o))}for(let e=0;e<48;e++)a.tri(s,c[e],c[e+1]);let l=e.b(`trim`),u=[.79,.53,.19],d=l.vertex(0,t,.23,0,0,1,0,0,u),f=[];for(let e=0;e<=48;e++){let r=e/48*Math.PI*2;f.push(l.vertex(Math.cos(r)*(n+.22),t+Math.sin(r)*(n+.22),.23,0,0,1,0,0,u))}for(let e=0;e<48;e++)l.tri(d,f[e],f[e+1]);let p=new Ra({color:1447707,roughness:.5,metalness:.4}),m=new Pn,h=new H(0,t,.33).applyMatrix4(r);m.position.copy(h),m.quaternion.setFromRotationMatrix(new G().extractRotation(r));let g=new si(new Hi(.3,1.25,.05).translate(0,.55,0),p),_=new si(new Hi(.18,1.85,.04).translate(0,.8,.06),p);g.castShadow=_.castShadow=!1,m.add(g,_),this.scene.add(m),this.hands.push({hour:g,minute:_})}update(e){let t=e%12,n=e%1*60,r=-((t+n/60)/12)*Math.PI*2,i=-(n/60)*Math.PI*2;for(let e of this.hands)e.hour.rotation.z=r,e.minute.rotation.z=i}};function lm(e,t,n,r,i,a,o){let s={color:o},c=[t,a,r];e.triangle([t-i,n,r+i],[t+i,n,r+i],c,s),e.triangle([t+i,n,r+i],[t+i,n,r-i],c,s),e.triangle([t+i,n,r-i],[t-i,n,r-i],c,s),e.triangle([t-i,n,r-i],[t-i,n,r+i],c,s)}function um(e,t,{tint:n,trimC:r,frameC:i}){let a=e.style,o=.6,s={x0:t/2-1.5,x1:t/2+1.5,y0:0,y1:4,door:!0},c=[{x0:.7,x1:1.9,y0:1.3,y1:3.5},{x0:t-1.9,x1:t-.7,y0:1.3,y1:3.5}];Np(e,t,0,a.groundH,[c[0],s,c[1]],{key:a.wall,tint:n,uv:a.uv,reveal:o,sillReveal:!0}),tm(e,s,o,i),e.b(`trim`).box(s.x0-.25,s.y1,0,s.x1+.25,s.y1+.3,.2,{color:r,skip:[`back`]}),e.b(`trim`).triangle([s.x0-.3,s.y1+.3,.2],[s.x1+.3,s.y1+.3,.2],[t/2,s.y1+1.2,.2],{color:r});for(let t=0;t<3;t++)e.b(`trim`).box(s.x0-.4-t*.2,0,0,s.x1+.4+t*.2,.14-t*.04,.5+t*.35,{color:13616816,skip:[`back`]});for(let t of c)jp(e,{x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0,reveal:o,room:{w:3,h:3.6,d:5,floorY:0},kind:0,frame:i,mullions:1,sill:r,lintel:r});return[]}var dm=(e,t,n)=>new G().makeTranslation(e,t,n);function fm(e,t,n,r,i=9079430){e.b(`roof.flat`).quad([0,r,0],[t,r,0],[t,r,-n],[0,r,-n],{color:i,uvScale:qf.asphalt})}function pm(e,t,n,r,i,a,o=16777215){e.b(`wall.brick`).box(t,n,r,t+i,n+a,r-i*.85,{color:o,uvScale:[.52,.6],skip:[`bottom`]}),e.b(`trim`).box(t-.06,n+a,r+.06,t+i+.06,n+a+.1,r-i*.85-.06,{color:12433062,skip:[`bottom`]});for(let o=0;o<2;o++){let s=e.b(`metal`);s.pushMatrix(dm(t+i*(.3+o*.4),n+a+.1,r-i*.42)),s.cylinder(.11,.13,.42,8,{color:6963248}),s.popMatrix()}e.chimneys.push(e.world(t+i*.5,n+a+.6,r-i*.42))}function mm(e,t,n,r,i){let a=e.rng,o=e.b(`metal`),s=a.int(2,5);for(let e=0;e<s;e++){let e=a.range(1,t-2),i=-a.range(1.5,n-1.5),s=a.int(0,2);s===0?o.box(e,r,i,e+a.range(.8,1.3),r+a.range(.6,1),i-a.range(.6,.9),{color:12172480}):s===1?(o.pushMatrix(dm(e,r,i)),o.cylinder(.22,.25,a.range(.9,1.6),8,{color:9080210}),o.popMatrix()):o.box(e,r,i,e+.5,r+.3,i-2.4,{color:7829886})}if(i&&a.chance(.7)){let i=a.range(2,t-4.5);e.b(`wall.concrete`).box(i,r,-n*.55,i+2.6,r+2.5,-n*.55-2.4,{color:12170668,uvScale:qf.concrete,skip:[`bottom`]})}if(a.chance(.45)){let i=a.range(1,t-1),s=-a.range(1.5,n-1.5),c=[[i,r,s],[i,r+2.8,s]];o.tube(c,.025,5,{color:5593184}),o.tube([[i-.5,r+2.4,s],[i+.5,r+2.4,s]],.02,5,{color:5593184}),o.tube([[i-.35,r+2,s],[i+.35,r+2,s]],.02,5,{color:5593184}),a.chance(.4)&&e.beacons.push(e.world(i,r+2.85,s))}if(a.chance(.25)){let e=a.range(1,t-1),i=-a.range(1.5,n-1.5);o.pushMatrix(dm(e,r+.9,i)),o.sphere(.42,10,6,{color:14211284,scale:[1,1,.35]}),o.popMatrix(),o.tube([[e,r,i],[e,r+.9,i]],.03,5,{color:6711920})}}function hm(e,t,n,r,i,{tall:a=!1}={}){let o=e.style,s=e.b(o.wall),c=e.b(`trim`),l={color:i,uvScale:o.uv};return s.box(0,r,-.3,t,r+.85,0,{...l,skip:[`bottom`]}),s.box(0,r,-n,.3,r+.55,-.3,{...l,color:Fp(i,.85),skip:[`bottom`,`right`]}),s.box(t-.3,r,-n,t,r+.55,-.3,{...l,color:Fp(i,.85),skip:[`bottom`,`left`]}),s.box(.3,r,-n,t-.3,r+.55,-n+.3,{...l,color:Fp(i,.85),skip:[`bottom`]}),c.box(-.04,r+.85,-.36,t+.04,r+.93,.05,{color:13157044,skip:[`bottom`]}),fm(e,t,n,r+.02),mm(e,t,n,r+.02,a),.93}function gm(e,t,n,r,i){let a=e.rng,o=a.pick(Tp.slate),s={color:o,uvScale:qf.slate},c=e.b(`roof.slate`),l=2.4,u=1.55;c.quad([0,r,.12],[t,r,.12],[t,r+l,-1.55],[0,r+l,-1.55],s),c.quad([t,r,-n-.1],[0,r,-n-.1],[0,r+l,-n+u],[t,r+l,-n+u],s),c.quad([0,r,-n],[0,r,0],[0,r+l,-1.55],[0,r+l,-n+u],s),c.quad([t,r,0],[t,r,-n],[t,r+l,-n+u],[t,r+l,-1.55],s),e.b(`roof.flat`).quad([0,r+l,-1.55],[t,r+l,-1.55],[t,r+l,-n+u],[0,r+l,-n+u],{color:7237226,uvScale:qf.asphalt}),e.b(`trim`).box(-.02,r+l-.06,-1.6,t+.02,r+l+.05,-1.49,{color:9212054,skip:[`bottom`]});let d=Math.max(2,Math.round(t/e.style.spacing)),f=t/d,p=1.05;for(let t=0;t<d;t++){if(d>3&&t%2==1&&a.chance(.6))continue;let n=f*(t+.5);_m(e,n-p/2,n+p/2,r,l,u,o)}let m=a.int(1,2);for(let i=0;i<m;i++)pm(e,a.range(1.2,t-1.9),r+l-.1,-n*a.range(.4,.7),.75,a.range(1.9,2.6));return l}function _m(e,t,n,r,i,a,o){let s=-.55,c=r+.55/a*i-.02,l=c+1.2,u=-a-.2,d=e.b(`trim`),f={color:o,uvScale:qf.slate},p=15722972,m=n-t;d.box(t,c,-.67,n,l,s,{color:14998731,skip:[`back`,`bottom`]}),d.box(t+.08,c+.1,s,n-.08,l-.12,-.5,{color:p,skip:[`back`]}),kp(e,{x0:t+.13,y0:c+.15,x1:n-.13,y1:l-.17,z:-.49400000000000005,kind:0,room:{w:3.2,h:3,d:4.5,floorY:c-.4}}),d.box(t+m/2-.02,c+.15,-.5,t+m/2+.02,l-.17,-.48000000000000004,{color:p,skip:[`back`]});let h=l+.42,g=e.b(`roof.slate`);g.quad([t-.1,l,-.45000000000000007],[(t+n)/2,h,-.45000000000000007],[(t+n)/2,h,u],[t-.1,l,u],f),g.quad([(t+n)/2,h,-.45000000000000007],[n+.1,l,-.45000000000000007],[n+.1,l,u],[(t+n)/2,h,u],f),d.triangle([t,l,s],[n,l,s],[(t+n)/2,h-.02,s],{color:14998731}),g.quad([t,c,u],[t,c,s],[t,l,s],[t,l,u],f),g.quad([n,c,s],[n,c,u],[n,l,u],[n,l,s],f)}function vm(e,t,n,r,i){let a=e.rng,o=a.pick(Tp.tile),s={color:o,uvScale:qf.tile},c=e.b(`roof.tile`),l=.4,u=Math.min(2.7,n*.2),d=Math.min(n/2-.5,t/2-1),f=-.4,p=t+l,m=l,h=-n-l,g=-n/2,_=r-.05,v=r+u;return c.quad([f,_,m],[p,_,m],[p-d-l,v,g],[f+d+l,v,g],s),c.quad([p,_,h],[f,_,h],[f+d+l,v,g],[p-d-l,v,g],s),c.triangle([f,_,h],[f,_,m],[f+d+l,v,g],s),c.triangle([p,_,m],[p,_,h],[p-d-l,v,g],s),e.b(`trim`).box(f+d+l,v-.05,g-.08,p-d-l,v+.08,g+.08,{color:Fp(o,.8),skip:[`bottom`]}),a.chance(.7)&&pm(e,a.range(1.2,t-2),r+u*.5,g-.2,.7,a.range(2,2.8)),u}function ym(e,t,n,r,i,{tall:a}){switch(e.style.roof){case`mansard`:return gm(e,t,n,r,i);case`hip`:return vm(e,t,n,r,i);default:return hm(e,t,n,r,i,{tall:a})}}var bm=e=>wp[e.style===`landmark`?`brick`:e.style],xm=class{constructor(e,t){this.batch=e,this.landmark=new cm(t),this.chimneys=[],this.beacons=[],this.shops=[],this.stats={lots:0}}build(e){for(let t of e)this.buildLot(t);this.batch.resetMatrices()}buildLot(e){let t=bm(e),n=new Gd(e.seed),r=n.pick(t.tints),i=n.pick(t.frames),a=e.width,o=e.depth,s=e.floors,c=Ep(t,s),l=e.origin.z+e.tangent.z*(a/2)-e.normal.z*(o/2),u=Wp(e.origin,e.tangent,e.normal).setPosition(e.origin.x,Y.kerbH,e.origin.z),d=new Kp(this.batch,e,t,{id:e.id,matrix:u,z:l,rng:n}),f=n.chance(t.shopChance)?Yp:nm,p=zp(d,a,{floors:s,tint:r,frameC:i,groundFloor:f});if(this.collectShops(d,p.shops,a),e.corner){let n=Gp(e),a=Wp(n.origin,n.tangent,n.normal).setPosition(n.origin.x,Y.kerbH,n.origin.z),o=new Kp(this.batch,e,t,{id:`${e.id}/s`,matrix:a,z:l,rng:new Gd(e.seed^1540483477)}),c=e.corner.end===`end`,u=zp(o,n.width,{floors:s,tint:r,frameC:i,groundFloor:f,quoins:{left:c,right:!c}});this.collectShops(o,u.shops,n.width),this.chimneys.push(...o.chimneys)}this.body(d,e,t,r,c),ym(d,a,o,c,r,{tall:s>=7}),e.landmark&&(this.landmark.build(d,e),this.beacons.push(...this.landmark.beacons)),this.chimneys.push(...d.chimneys),this.beacons.push(...d.beacons),this.stats.lots++}body(e,t,n,r,i){let a=t.width,o=t.depth,s=e.b(n.wall),c={color:Fp(r,.82),uvScale:n.uv};t.corner?.end!==`start`&&s.quad([0,0,-o],[0,0,0],[0,i,0],[0,i,-o],c),t.corner?.end!==`end`&&s.quad([a,0,0],[a,0,-o],[a,i,-o],[a,i,0],c),s.quad([a,0,-o],[0,0,-o],[0,i,-o],[a,i,-o],c)}collectShops(e,t,n){for(let r of t){let t=e.world((r.x0+r.x1)/2,(r.y0+r.y1)/2,0),i=e.world(0,0,1),a=e.world(0,0,0);this.shops.push({center:t,normal:[i[0]-a[0],i[2]-a[2]],width:r.x1-r.x0,height:r.y1-r.y0,kind:r.kind,lotId:e.id,W:n})}}},Sm=50*hu,Cm=-3*hu,wm=12*hu,Tm=170*hu;function Em(e,t,n){let r=Math.cos(t),i=Math.sin(t),a=-r*Math.sin(e),o=i*Math.cos(Sm)-r*Math.cos(e)*Math.sin(Sm),s=i*Math.sin(Sm)+r*Math.cos(e)*Math.cos(Sm);return n.set(o,s,a)}var Dm=e=>(e-12)*15*hu,Z=e=>new K(e),Om=[{e:-24,zenith:Z(`#020616`),horizon:Z(`#0a1330`),glow:Z(`#ff8a50`),glowI:0,sun:Z(`#ff9050`),sunI:0,ambient:5,fog:Z(`#0b1226`),fogD:.0048,exposure:1.25,bloomS:.7,bloomT:.8},{e:-14,zenith:Z(`#05102e`),horizon:Z(`#1b2a55`),glow:Z(`#ff8a50`),glowI:.05,sun:Z(`#ff9050`),sunI:0,ambient:4.2,fog:Z(`#141d40`),fogD:.005,exposure:1.25,bloomS:.7,bloomT:.8},{e:-8,zenith:Z(`#0c2050`),horizon:Z(`#34407a`),glow:Z(`#ff7a48`),glowI:.42,sun:Z(`#ff8a50`),sunI:0,ambient:3,fog:Z(`#2e3768`),fogD:.0049,exposure:1.2,bloomS:.62,bloomT:.82},{e:-4,zenith:Z(`#14306a`),horizon:Z(`#5a5590`),glow:Z(`#ff7040`),glowI:.95,sun:Z(`#ff8248`),sunI:0,ambient:2,fog:Z(`#4e4a80`),fogD:.0046,exposure:1.12,bloomS:.5,bloomT:.88},{e:-1.5,zenith:Z(`#1e3f80`),horizon:Z(`#8a6a98`),glow:Z(`#ff7a3a`),glowI:1.5,sun:Z(`#ff7a38`),sunI:.1,ambient:1.5,fog:Z(`#7a6088`),fogD:.0043,exposure:1.05,bloomS:.42,bloomT:.95},{e:1,zenith:Z(`#2a5296`),horizon:Z(`#d58a78`),glow:Z(`#ff8c44`),glowI:1.5,sun:Z(`#ff8a42`),sunI:.9,ambient:1.2,fog:Z(`#b87a72`),fogD:.0041,exposure:1,bloomS:.34,bloomT:1},{e:4,zenith:Z(`#3364aa`),horizon:Z(`#f0b086`),glow:Z(`#ffa858`),glowI:1.1,sun:Z(`#ffa458`),sunI:1.7,ambient:1.1,fog:Z(`#d89a80`),fogD:.0039,exposure:.95,bloomS:.28,bloomT:1.05},{e:9,zenith:Z(`#3a72bc`),horizon:Z(`#f0d0aa`),glow:Z(`#ffc890`),glowI:.7,sun:Z(`#ffc48a`),sunI:2.5,ambient:1.05,fog:Z(`#dcc0a4`),fogD:.0036,exposure:.92,bloomS:.22,bloomT:1.1},{e:18,zenith:Z(`#3b7ac8`),horizon:Z(`#cfe0ef`),glow:Z(`#ffe0b8`),glowI:.35,sun:Z(`#ffe0b8`),sunI:3.1,ambient:1,fog:Z(`#c2d6e8`),fogD:.0033,exposure:.88,bloomS:.16,bloomT:1.15},{e:40,zenith:Z(`#3f84d8`),horizon:Z(`#bfdaf3`),glow:Z(`#fff2dc`),glowI:.2,sun:Z(`#fff2dc`),sunI:3.5,ambient:1,fog:Z(`#b4d0ec`),fogD:.0031,exposure:.85,bloomS:.12,bloomT:1.2}],km=[[0,.3],[1,.2],[2,.12],[3,.07],[4.5,.05],[5.5,.16],[6.5,.32],[7.5,.26],[9,.08],[11,.04],[15,.06],[16.5,.22],[17.5,.5],[18.5,.72],[20,.82],[21.5,.74],[22.5,.55],[24,.3]];function Am(e){let t=pu(e,24);for(let e=1;e<km.length;e++){let[n,r]=km[e];if(t<=n){let[i,a]=km[e-1];return uu(a,r,(t-i)/(n-i))}}return km[km.length-1][1]}var jm=class{constructor(){this.hours=12,this.sunElev=0,this.moonElev=0,this.sunDir=new H(0,1,0),this.moonDir=new H(0,1,0),this.zenith=new K,this.horizon=new K,this.glow=new K,this.glowI=0,this.sunColor=new K,this.moonColor=new K(`#9db8ff`),this.fogColor=new K,this.sunIntensity=0,this.moonIntensity=0,this.ambient=1,this.fogDensity=.004,this.exposure=1,this.bloom={strength:.2,threshold:1,radius:.6},this.night=0,this.windowLit=0,this.stars=0,this.overcast=0}},Mm=new K;function Nm(e,t,n=new jm){let r=n;r.hours=e;let i=Dm(e);Em(i,Cm,r.sunDir),Em(i+Tm,wm,r.moonDir),r.sunElev=Math.asin(lu(r.sunDir.y,-1,1)),r.moonElev=Math.asin(lu(r.moonDir.y,-1,1));let a=r.sunElev/hu,o=0;for(;o<Om.length-2&&a>Om[o+1].e;)o++;let s=Om[o],c=Om[o+1],l=lu((a-s.e)/(c.e-s.e),0,1);r.zenith.copy(s.zenith).lerp(c.zenith,l),r.horizon.copy(s.horizon).lerp(c.horizon,l),r.glow.copy(s.glow).lerp(c.glow,l),r.glowI=uu(s.glowI,c.glowI,l),r.sunColor.copy(s.sun).lerp(c.sun,l),r.fogColor.copy(s.fog).lerp(c.fog,l),r.sunIntensity=uu(s.sunI,c.sunI,l),r.ambient=uu(s.ambient,c.ambient,l),r.exposure=uu(s.exposure,c.exposure,l);let u=uu(s.fogD,c.fogD,l),d=uu(s.bloomS,c.bloomS,l),f=uu(s.bloomT,c.bloomT,l),p=t.cloud??0,m=t.rain??0,h=t.fog??0,g=p**1.3;r.overcast=g;let _=du(-4,10,a);return Mm.setScalar(r.zenith.r*.2126+r.zenith.g*.7152+r.zenith.b*.0722).multiplyScalar(1.25),r.zenith.lerp(Mm,g*.7),Mm.setScalar(r.horizon.r*.2126+r.horizon.g*.7152+r.horizon.b*.0722).multiplyScalar(1.1),r.horizon.lerp(Mm,g*.55),r.glowI*=1-.75*g,r.sunIntensity*=1-.9*g,r.sunColor.lerp(Mm.setScalar(1),g*.5),r.ambient*=1+.25*g,r.exposure+=.1*g+.12*m,r.fogDensity=u*(1+.35*m+.15*p+3.5*h),Mm.setScalar(r.fogColor.r*.2126+r.fogColor.g*.7152+r.fogColor.b*.0722),r.fogColor.lerp(Mm,lu(g*.5+h*.5,0,.85)),r.moonIntensity=.55*du(-3,10,r.moonElev/hu)*(1-_)*(1-.8*g),r.stars=du(-8,-18,a)*(1-.95*g)*(1-.9*h),r.night=lu(1-du(-8,5,a)+g*.25*(1-du(8,22,a)),0,1),r.windowLit=lu(Am(e)*(1-_)+g*.22*_*(1-du(20,35,a)),0,1),r.bloom.strength=d*(1+.25*m),r.bloom.threshold=f,r.bloom.radius=.6,r}var Pm=class{constructor(e=cu.hours,t=cu.timeSpeed){this.hours=e,this.speed=t,this.paused=!1,this.state=new jm,this.onHour=null}set(e){this.hours=pu(e,24)}update(e,t){if(!this.paused){let t=Math.floor(this.hours);this.hours=pu(this.hours+e*this.speed/3600,24);let n=Math.floor(this.hours);n!==t&&this.onHour?.(n)}return Nm(this.hours,t,this.state)}},Fm=.15,Im=3,Lm=25,Rm=15132382,zm=class{constructor(e,t){this.batch=e,this.rng=t,this.H=Y.kerbH,this.manholes=[]}build(){this.basePlane(),this.roads(),this.tramBed(),this.sidewalks(),this.markings(),this.ironwork()}flat(e,t,n,r,i,a,o={}){t>r&&([t,r]=[r,t]),n>i&&([n,i]=[i,n]),this.batch.builder(e,(n+i)/2).quad([t,a,i],[r,a,i],[r,a,n],[t,a,n],o)}strip(e,t,n,r,i,a,o={}){for(let s=r;s<i-1e-6;s+=Lm)this.flat(e,t,s,n,Math.min(s+Lm,i),a,o)}facing(e,t,n,r,i,a,o={}){let s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],c=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],l=[s[1]*c[2]-s[2]*c[1],s[2]*c[0]-s[0]*c[2],s[0]*c[1]-s[1]*c[0]],u=l[0]*a[0]+l[1]*a[1]+l[2]*a[2]<0,d=(t[2]+r[2])/2,f=this.batch.builder(e,d);u?f.quad(t,i,r,n,o):f.quad(t,n,r,i,o)}paintRect(e,t,n,r,i=Rm,a=.012){this.flat(`paint`,e,t,n,r,a,{color:i})}roadSegments(){let e=[...su].sort((e,t)=>e.z-t.z),t=[],n=Y.zMin;for(let r of e)t.push([n,r.z-r.roadHalf]),n=r.z+r.roadHalf;return t.push([n,Y.zMax]),t}basePlane(){let e=1600;this.flat(`base`,-1600,-1600,e,e,-.06,{uvScale:20})}roads(){let e=Y.kerbX,t={uvScale:qf.asphalt};this.strip(`asphalt`,-e,e,Y.zMin,Y.zMax,0,t);for(let n of su){let r=n.roadHalf;this.strip(`asphalt`,e,n.extent,n.z-r,n.z+r,0,t),this.strip(`asphalt`,-n.extent,-e,n.z-r,n.z+r,0,t);for(let i of[-1,1])for(let a of[-1,1])this.flat(`asphalt`,i*e,n.z+a*r,i*(e+Im),n.z+a*(r+Im),0,t)}}tramBed(){let e=Y.laneInnerX;this.strip(`setts`,-e,e,Y.zMin,Y.zMax,.02,{uvScale:qf.setts});let t=(e,t,n)=>this.batch.builder(`rail`,(t+n)/2).box(e-.035,.02,t,e+.035,.058,n,{skip:[`bottom`,`front`,`back`]});for(let e of[-1,1])for(let n of[-.7175,.7175])for(let r=Y.zMin;r<Y.zMax;r+=Lm)t(e*Y.tramX+n,r,r+Lm)}sidewalks(){for(let e of wu())for(let t of[-1,1])this.mainStrip(t,e.za,e.zb);for(let e of su)for(let t of[-1,1])for(let n of[-1,1])this.cornerWalk(e,n,t)}mainStrip(e,t,n){let r=this.H,i=Y.kerbX;this.strip(`sidewalk`,e*(i+Fm),e*(Y.facadeX+.1),t,n,r,{uvScale:qf.sidewalk}),this.strip(`kerb`,e*i,e*(i+Fm),t,n,r,{uvScale:qf.kerb});for(let a=t;a<n-1e-6;a+=Lm){let t=Math.min(a+Lm,n);this.facing(`kerb`,[e*i,0,a],[e*i,0,t],[e*i,r,t],[e*i,r,a],[-e,0,0],{uvScale:qf.kerb})}}cornerWalk(e,t,n){let r=this.H,i=e.roadHalf,a=gu(e)-i,o=e.extent-Y.kerbX,s=Math.min(Im,a-.5),c=(r,a)=>[t*(Y.kerbX+r),e.z+n*(i+a)],l=[],u=[];for(let e=0;e<=8;e++){let t=e/8*(Math.PI/2);l.push([s-s*Math.cos(t),s-s*Math.sin(t)]),u.push([s-(s-Fm)*Math.cos(t),s-(s-Fm)*Math.sin(t)])}let d=[[o,a],[Fm,a],...u,[o,Fm]].map(([e,t])=>c(e,t));this.batch.builder(`sidewalk`,e.z+n*(i+a/2)).prism(d,0,r,{sides:!1,bottom:!1,uvScale:qf.sidewalk});let f=(e,t,n,i)=>{let[a,o,s,c]=[e,t,n,i].map(([e,t])=>[e,r,t]);this.facing(`kerb`,a,o,s,c,[0,1,0],{uvScale:qf.kerb})},p=(e,i,a)=>{let[o,s]=[c(...e),c(...i)],l=[t*a[0],0,n*a[1]];this.facing(`kerb`,[o[0],0,o[1]],[s[0],0,s[1]],[s[0],r,s[1]],[o[0],r,o[1]],l,{uvScale:qf.kerb})};f(c(0,s),c(0,a),c(Fm,a),c(Fm,s)),p([0,s],[0,a],[-1,0]);for(let e=0;e<8;e++){f(c(...l[e]),c(...l[e+1]),c(...u[e+1]),c(...u[e]));let t=[(l[e][0]+l[e+1][0])/2-s,(l[e][1]+l[e+1][1])/2-s];p(l[e],l[e+1],t)}f(c(s,0),c(o,0),c(o,Fm),c(s,Fm)),p([s,0],[o,0],[0,-1])}markings(){let e=Y.kerbX;for(let[t,n]of this.roadSegments())for(let r of[-1,1]){this.strip(`paint`,r*Y.parkingX-.06,r*Y.parkingX+.06,t+1,n-1,.012,{color:Yd(Rm)});for(let i=t+9;i<n-9;i+=5.6)this.paintRect(r*Y.parkingX,i-.05,r*e,i+.05)}for(let t of su){let n=t.roadHalf;if(t.id===`major`){for(let e of[-1,1]){this.zebraAcrossMain(t.z+e*(n+2.4));let r=t.z+e*(n+5);this.paintRect(e*Y.laneX-1.55,r-.25,e*Y.laneX+1.55,r+.25)}for(let n of[-1,1]){this.zebraAcrossCross(t,n*(e+2.6));let r=n*(e+5),i=t.z-n*1.7;this.paintRect(r-.25,i-1.55,r+.25,i+1.55);for(let r=e+8;r<t.extent-4;r+=6)this.paintRect(n*r,t.z-.06,n*(r+3),t.z+.06);for(let r of[-1,1])this.paintRect(n*(e+8),t.z+r*3.4-.06,n*(t.extent-2),t.z+r*3.4+.06)}}else for(let n of[-1,1])this.zebraAcrossCross(t,n*(e+2.2))}}zebraAcrossMain(e){let t=Y.kerbX;for(let n=-t+.6;n<t-.4;n+=1)this.paintRect(n,e-1.5,n+.5,e+1.5)}zebraAcrossCross(e,t){for(let n=e.z-e.roadHalf+.5;n<e.z+e.roadHalf-.4;n+=1)this.paintRect(t-1.5,n,t+1.5,n+.5)}disc(e,t,n,r,i,a=.014){let o=this.batch.builder(e,n),s=Yd(16777215),[c,l,u,d]=i,f=(c+u)/2,p=(l+d)/2,m=o.vertex(t,a,n,0,1,0,f,p,s),h=[];for(let e=0;e<=20;e++){let i=e/20*Math.PI*2;h.push(o.vertex(t+Math.cos(i)*r,a,n+Math.sin(i)*r,0,1,0,f+Math.cos(i)*((u-c)/2),p+Math.sin(i)*((d-l)/2),s))}for(let e=0;e<20;e++)o.tri(m,h[e+1],h[e])}ironwork(){let e=this.rng;for(let[t,n]of this.roadSegments())for(let r=t+12;r<n-12;r+=e.range(28,46)){let t=e.pick([-1,1])*(e.chance(.75)?Y.laneX:Y.tramX)+e.range(-.4,.4);this.disc(`iron`,t,r,.36,mp.manhole),this.manholes.push({x:t,z:r});let n=e.pick([-1,1]);this.flat(`iron`,n*(Y.kerbX-.55),r+6,n*(Y.kerbX-.05),r+6.45,.014,{uv:[mp.grate[0],mp.grate[1],mp.grate[2],mp.grate[3]]})}}},Bm=su.find(e=>e.id===`major`),Vm=Y.kerbX,Hm=Bm.roadHalf,Um=[10.9,12.3],Wm=Vm+.9,Gm=6,Km={skin:[15845541,14724230,13208931,10118720,7226665,16111036],hair:[1709330,3810328,5913120,9071162,13215834,7237232,9058842],top:[11563066,6974004,8006196,2240586,1842207,6975092,13148216,3107434,14209216,9062954,3824186,10504794],bottom:[2767450,1974052,6969914,3815998,4872818,5914672],umbrella:[1710622,2240586,8006196,13148216,3107434,13647914,6961798,3832378]},qm=Bm.extent,Jm=class{constructor(e,t=60){this.rng=e,this.peds=[],this.nextId=1;for(let e=0;e<t;e++)this.peds.push(this.spawn(!0))}spawn(e=!1,t=null){let n=this.rng,r=t??{id:this.nextId++,look:{skin:n.pick(Km.skin),hair:n.pick(Km.hair),top:n.pick(Km.top),bottom:n.pick(Km.bottom),shoes:n.chance(.5)?1842206:3811872},umbrella:n.chance(.55)?n.pick(Km.umbrella):0,phase:n.range(0,6.28),scale:n.range(.93,1.07),speed:n.range(1.1,1.6)};r.v=0,r.heading=0,r.waiting=!1,r.crossing=!1,r.crossGroup=null,r.pause=0,r.face=null,r.wi=0;let i=n.chance(.82)?this.mainRoute(e):this.crossRoute();return r.route=i.waypoints,r.x=i.start.x,r.z=i.start.z,r}mainRoute(e){let t=this.rng,n=t.sign(),r=t.sign(),i=t.pick(Um),a=n*i,o=r>0?Y.zMax-Gm:Y.zMin+Gm,s=r>0?Y.zMin+Gm:Y.zMax-Gm,c=Bm.z;if(e)do s=t.range(Y.zMin+30,Y.zMax-30);while(Math.abs(s-c)<Hm+9);let l=r>0?s<c-Hm-8:s>c+Hm+8,u=[],d=[],f=t.chance(.55)?t.int(1,2):0;for(let e=0;e<f;e++){let e=t.range(Math.min(s,o)+15,Math.max(s,o)-15),n=su.find(e=>e.id===`minor`);Math.abs(e-c)<24||Math.abs(e-n.z)<16||(r>0&&e>s||r<0&&e<s)&&d.push(e)}d.sort((e,t)=>r>0?e-t:t-e);let p=(e,i)=>{for(let o of d)(r>0&&o>e&&o<i||r<0&&o<e&&o>i)&&u.push({x:a,z:o},{x:n*13.7,z:o,pause:t.range(4,12),face:[n,0]},{x:a,z:o})};if(!l)return p(s,o),u.push({x:a,z:o}),{start:{x:a,z:s},waypoints:u};let m=c-r*(Hm+.9),h=c+r*(Hm+.9);p(s,m);let g=t.next();if(g<.55)u.push({x:a,z:m,gate:`main`},{x:a,z:h,endCross:!0}),p(h,o),u.push({x:a,z:o});else if(g<.75){let e=c-r*(Hm+2.4);u.push({x:a,z:e},{x:n*Wm,z:e,gate:`cross`},{x:-n*Wm,z:e,endCross:!0}),u.push({x:-n*i,z:r>0?Y.zMin+Gm:Y.zMax-Gm})}else{let e=c-r*(Hm+2.25);u.push({x:a,z:e},{x:n*(qm-Gm),z:e})}return{start:{x:a,z:s},waypoints:u}}crossRoute(){let e=this.rng,t=e.sign(),n=e.sign(),r=Bm.z,i=r+n*(Hm+2.25),a=r+n*(Hm+2.4),o=[{x:t*(Vm+4.5),z:i}];if(e.chance(.6))o.push({x:t*Wm,z:a,gate:`cross`},{x:-t*Wm,z:a,endCross:!0},{x:-t*(qm-Gm),z:i});else{let r=e.pick(Um);o.push({x:t*r,z:i+n*1.5},{x:t*r,z:n>0?Y.zMax-Gm:Y.zMin+Gm})}return{start:{x:t*(qm-Gm),z:i},waypoints:o}}update(e,t){for(let n of this.peds)this.step(n,e,t)}step(e,t,n){if(e.pause>0){e.pause-=t,e.v=fu(e.v,0,8,t),e.face&&(e.heading=fu(e.heading,Math.atan2(e.face[0],e.face[1]),4,t));return}e.face=null;let r=e.route[e.wi];if(!r)return this.spawn(!1,e);let i=r.x-e.x,a=r.z-e.z,o=Math.hypot(i,a);if(r.gate&&o<.4&&!e.crossing){if(n.walk(r.gate)!==`walk`){e.waiting=!0,e.v=fu(e.v,0,8,t);return}e.waiting=!1,e.crossing=!0,e.crossGroup=r.gate,e.wi++;return}if(e.waiting=!1,o<.3){r.pause&&(e.pause=r.pause,e.face=r.face??null),r.endCross&&(e.crossing=!1,e.crossGroup=null),e.wi++,e.wi>=e.route.length&&this.spawn(!1,e);return}e.v=fu(e.v,e.speed*(e.crossing?1.15:1),5,t);let s=Math.min(e.v*t,o);e.x+=i/o*s,e.z+=a/o*s;let c=Math.atan2(i,a)-e.heading;c=Math.atan2(Math.sin(c),Math.cos(c)),e.heading+=c*Math.min(1,t*7)}},Ym={skin:0,hair:1,top:2,bottom:3,shoes:4},Xm={body:0,legL:1,legR:2,armL:3,armR:4},Zm=(e,t,n)=>new G().makeTranslation(e,t,n);function Qm(){let e=new $d({aPart:1,aPivot:3,aSlot:1}),t=(e,t,n=[0,0,0])=>({attrs:{aPart:[e],aSlot:[t],aPivot:n},color:16777215}),n=(t,n)=>{e.pushMatrix(t),n(),e.popMatrix()};for(let r of[-1,1]){let i=r<0?Xm.legL:Xm.legR,a=[r*.095,.9,0];n(Zm(r*.095,.09,0),()=>e.cylinder(.078,.052,.81,8,{...t(i,Ym.bottom,a),ao:[.65,1]})),e.box(r*.095-.05,0,-.07,r*.095+.05,.09,.17,t(i,Ym.shoes,a));let o=r<0?Xm.armL:Xm.armR,s=[r*.245,1.44,0];n(Zm(r*.245,.9,0),()=>e.cylinder(.056,.042,.55,7,{...t(o,Ym.top,s),ao:[.75,1]})),n(Zm(r*.245,.86,0),()=>e.sphere(.047,6,4,t(o,Ym.skin,s)))}return n(Zm(0,1.17,0),()=>e.sphere(1,10,7,{...t(Xm.body,Ym.top),scale:[.205,.31,.125],ao:[.7,1]})),n(Zm(0,.98,0),()=>e.sphere(1,8,5,{...t(Xm.body,Ym.top),scale:[.2,.17,.125],ao:[.7,.95]})),n(Zm(0,1.47,0),()=>e.cylinder(.05,.055,.1,6,t(Xm.body,Ym.skin))),n(Zm(0,1.64,.005),()=>e.sphere(.105,9,7,{...t(Xm.body,Ym.skin),scale:[.95,1.1,1]})),n(Zm(0,1.68,-.012),()=>e.sphere(.113,9,6,{...t(Xm.body,Ym.hair),scale:[1,.72,1.08]})),e.build()}function $m(){let e=new $d;return e.pushMatrix(Zm(0,.6,0)),e.cylinder(.015,.62,.22,8,{color:16777215,caps:!1}),e.popMatrix(),e.cylinder(.014,.014,.62,5,{color:2236966}),e.build()}function eh(e){return pf(e,`person`,e=>{e.uniforms.uTime=X.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute float aPart;
        attribute vec3 aPivot;
        attribute float aSlot;
        attribute vec4 iAnim;
        attribute vec4 iCol0;
        attribute vec4 iCol1;
        attribute vec4 iCol2;
        attribute vec3 iCol3;
        uniform float uTime;
        varying vec3 vPedColor;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        {
          vec3 skin = iCol0.rgb;
          vec3 hair = vec3(iCol0.a, iCol1.rg);
          vec3 top = vec3(iCol1.ba, iCol2.r);
          vec3 bottom = iCol2.gba;
          vPedColor = aSlot < 0.5 ? skin : aSlot < 1.5 ? hair : aSlot < 2.5 ? top : aSlot < 3.5 ? bottom : iCol3;
          float walk = iAnim.y;
          float cyc = uTime * 7.4 + iAnim.x;
          float swing = sin(cyc) * 0.66 * walk;
          // Each arm swings against the leg on its own side.
          float a = 0.0;
          if (aPart > 0.5 && aPart < 2.5) a = aPart < 1.5 ? swing : -swing;
          else if (aPart > 2.5) a = (aPart < 3.5 ? -swing : swing) * 0.8;
          if (iAnim.z > 0.5 && iAnim.z < 1.5 && aPart > 0.5 && aPart < 2.5) a = -1.2;    // seated: legs forward
          if (iAnim.z > 1.5 && aPart > 3.5) a = -2.0;                                    // umbrella arm raised
          vec3 rel = transformed - aPivot;
          float c = cos(a);
          float s = sin(a);
          rel = vec3(rel.x, rel.y * c - rel.z * s, rel.y * s + rel.z * c);
          transformed = rel + aPivot;
          transformed.y += abs(sin(cyc)) * 0.028 * walk;
          if (iAnim.z > 0.5 && iAnim.z < 1.5) transformed.y -= 0.42;
          transformed *= iAnim.w;
        }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vPedColor;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.rgb *= vPedColor;`)})}var th=new G,nh=new Rt,rh=new gn,ih=new H,ah=new H(1,1,1),oh=new K,sh=class{constructor({scene:e,rng:t,count:n=70,extra:r=48}){this.scene=e,this.model=new Jm(t,n),this.capacity=n+r,this.seated=[],this.ys=new Float32Array(this.capacity).fill(Y.kerbH);let i=Qm(),a=this.capacity;this.attr={iAnim:new di(new Float32Array(a*4),4),iCol0:new di(new Float32Array(a*4),4),iCol1:new di(new Float32Array(a*4),4),iCol2:new di(new Float32Array(a*4),4),iCol3:new di(new Float32Array(a*3),3)},this.attr.iAnim.setUsage($e);for(let[e,t]of Object.entries(this.attr))i.setAttribute(e,t);let o=Cf(new Ra({vertexColors:!0,roughness:.85,metalness:0}));eh(o),this.mesh=new yi(i,o,a),this.mesh.instanceMatrix.setUsage($e),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.layers.enable(1),this.mesh.count=n,e.add(this.mesh),this.umbrellas=new yi($m(),Cf(new Ra({color:16777215,roughness:.6,metalness:0,side:2})),n),this.umbrellas.instanceMatrix.setUsage($e),this.umbrellas.frustumCulled=!1,this.umbrellas.castShadow=!0,this.umbrellas.layers.enable(1),this.umbrellas.setColorAt(0,oh.setRGB(1,1,1)),e.add(this.umbrellas),this.model.peds.forEach((e,t)=>this.setLook(t,e.look))}setLook(e,t){let n=new K(t.skin),r=new K(t.hair),i=new K(t.top),a=new K(t.bottom),o=new K(t.shoes),s=this.attr;s.iCol0.setXYZW(e,n.r,n.g,n.b,r.r),s.iCol1.setXYZW(e,r.g,r.b,i.r,i.g),s.iCol2.setXYZW(e,i.b,a.r,a.g,a.b),s.iCol3.setXYZ(e,o.r,o.g,o.b);for(let e of[`iCol0`,`iCol1`,`iCol2`,`iCol3`])s[e].needsUpdate=!0}addSeated(e,t,n,r,i){let a=this.mesh.count++;return this.seated.push(a),this.setLook(a,i),nh.setFromEuler(rh.set(0,r,0)),th.compose(ih.set(e,t,n),nh,ah),this.mesh.setMatrixAt(a,th),this.attr.iAnim.setXYZW(a,Math.random()*6,0,1,.97),this.attr.iAnim.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0,a}update(e,t,n){this.model.update(e,t);let r=du(.18,.4,n),i=this.model.peds;for(let t=0;t<i.length;t++){let n=i[t],a=Ou(n.x,n.z)&&n.crossing?0:Y.kerbH;this.ys[t]=fu(this.ys[t],a,18,e);let o=this.ys[t];nh.setFromEuler(rh.set(0,n.heading,0)),th.compose(ih.set(n.x,o,n.z),nh,ah),this.mesh.setMatrixAt(t,th);let s=n.umbrella&&r>.02;this.attr.iAnim.setXYZW(t,n.phase,Math.min(1.2,n.v/1.35),s?2:0,n.scale);let c=s?r:0,l=Math.sin(n.heading),u=Math.cos(n.heading);nh.setFromEuler(rh.set(.08,n.heading,.05)),th.compose(ih.set(n.x+l*.12,o+1.32,n.z+u*.12),nh,ah.set(c,c,c)),this.umbrellas.setMatrixAt(t,th),ah.set(1,1,1),n.umbrella&&this.umbrellas.setColorAt(t,oh.setHex(n.umbrella))}this.attr.iAnim.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0,this.umbrellas.instanceMatrix.needsUpdate=!0,this.umbrellas.instanceColor&&(this.umbrellas.instanceColor.needsUpdate=!0)}},ch=`
  attribute vec4 iBird;   // orbit phase, radius offset, height offset, flap phase
  uniform float uTime;
  uniform vec3 uCenter;   // centre of the flock's circle
  uniform float uRadius;
  uniform float uSpeed;   // angular speed, rad/s
  uniform float uFade;    // 0 hidden .. 1 visible
  uniform float uFogDensity;
  varying float vFog;
  varying float vAlpha;

  void main() {
    float a = iBird.x + uTime * uSpeed;
    float r = uRadius + iBird.y * 9.0;
    vec3 center = uCenter + vec3(cos(a) * r, iBird.z * 7.0 + sin(a * 2.3 + iBird.x * 5.0) * 2.5, sin(a) * r * 0.8);
    // Heading follows the circle (the derivative of the position on it).
    vec2 tangent = normalize(vec2(-sin(a), cos(a) * 0.8));
    float yaw = atan(tangent.x, tangent.y);
    float bank = -0.35 * sign(uSpeed);

    // Wings beat with a short glide between flaps.
    float flap = sin(uTime * 8.5 + iBird.w * 6.283) + 0.35 * sin(uTime * 17.0 + iBird.w * 3.0);
    float span = abs(position.x);
    vec3 local = position;
    local.y += span * span * 1.4 * flap * 0.5;
    // Roll into the turn, then yaw to the heading.
    float cb = cos(bank);
    float sb = sin(bank);
    local = vec3(local.x * cb - local.y * sb, local.x * sb + local.y * cb, local.z);
    float cy = cos(yaw);
    float sy = sin(yaw);
    local = vec3(local.x * cy + local.z * sy, local.y, -local.x * sy + local.z * cy);
    vec3 world = center + local * 1.2;

    float dist = length(world - cameraPosition);
    vFog = exp(-uFogDensity * uFogDensity * dist * dist);
    vAlpha = uFade;
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  }
`,lh=`
  uniform vec3 uColor;
  uniform vec3 uFogColor;
  varying float vFog;
  varying float vAlpha;
  void main() {
    if (vAlpha < 0.02) discard;
    gl_FragColor = vec4(mix(uFogColor, uColor, vFog), 1.0);
  }
`,uh=class{constructor(e,t=11){let n=new Lr;n.setAttribute(`position`,new Tr([[0,.02,.32],[-.07,0,-.22],[.07,0,-.22],[-.03,0,.14],[-.6,0,-.12],[-.03,0,-.16],[.03,0,-.16],[.6,0,-.12],[.03,0,.14]].flat(),3));let r=new Float32Array(t*4);for(let e=0;e<t;e++)r.set([e/t*.9+Math.random()*.25,Math.random()*2-1,Math.random()*2-1,Math.random()],e*4);n.setAttribute(`iBird`,new di(r,4)),this.uniforms={uTime:X.time,uCenter:{value:new H(0,52,-20)},uRadius:{value:70},uSpeed:{value:.11},uFade:{value:0},uFogDensity:{value:.004},uFogColor:{value:new K},uColor:{value:new K}},this.material=new Ia({vertexShader:ch,fragmentShader:lh,uniforms:this.uniforms,side:2,fog:!1}),this.mesh=new yi(n,this.material,t),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t){let n=(1-e.night*1.6)*(1-t.rain*1.5)*(1-t.fog*.6),r=this.uniforms;r.uFade.value=Math.max(0,Math.min(1,n)),this.mesh.visible=r.uFade.value>.02,this.mesh.visible&&(r.uFogDensity.value=e.fogDensity,r.uFogColor.value.copy(e.fogColor),r.uColor.value.copy(e.horizon).multiplyScalar(.16).addScalar(.008))}},dh=`
  attribute vec4 iRand;     // four random numbers per leaf, 0..1
  uniform float uTime;
  uniform vec3 uCam;
  uniform vec3 uBox;        // size of the volume the leaves live in (centred on the camera)
  uniform float uWind;
  uniform vec3 uSunDir;
  uniform vec3 uSun;        // sun colour * intensity, already scaled for how bright a leaf gets
  uniform vec3 uAmbient;
  uniform float uFogDensity;
  uniform sampler2D uLightMap;
  uniform vec4 uLMRect;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFog;

  vec3 palette(float h) {
    if (h < 0.28) return vec3(0.80, 0.26, 0.04);   // orange
    if (h < 0.55) return vec3(0.86, 0.56, 0.06);   // amber
    if (h < 0.72) return vec3(0.60, 0.10, 0.05);   // red
    if (h < 0.88) return vec3(0.50, 0.36, 0.05);   // olive gold
    return vec3(0.34, 0.17, 0.06);                 // brown
  }

  void main() {
    float H = uBox.y;
    float period = 11.0 + iRand.w * 9.0;              // seconds from the crown to the ground
    float cyc = uTime / period + iRand.y;
    float cycle = floor(cyc);
    float phase = fract(cyc);
    float flight = 0.86;                              // the rest of the cycle the leaf lies on the ground
    float fall = clamp(phase / flight, 0.0, 1.0);
    float tf = fall * period * flight;                // seconds spent in the air this cycle

    // A fresh spot every cycle (golden-ratio hash), blown downwind while airborne.
    vec2 start = fract(iRand.xz + cycle * vec2(0.6180339, 0.3819660));
    vec2 wind = vec2(0.7 + 2.2 * uWind, 0.25 + 0.6 * uWind);
    float flutter = 1.0 - smoothstep(0.86, 1.0, fall);
    vec2 sway = vec2(sin(tf * 1.9 + iRand.z * 6.283), cos(tf * 1.5 + iRand.x * 6.283)) * (0.35 + 0.5 * uWind) * flutter;
    vec3 p = vec3(start.x * uBox.x, 0.0, start.y * uBox.z);
    p.xz += wind * tf * (0.45 + 0.55 * iRand.x) + sway;
    p.y = mix(H, 0.03, fall * fall * 0.35 + fall * 0.65);

    // Wrap around the camera so the leaves follow the viewer.
    vec3 rel = p - uCam;
    rel.xz = mod(rel.xz + uBox.xz * 0.5, uBox.xz) - uBox.xz * 0.5;
    vec3 world = vec3(uCam.x + rel.x, p.y, uCam.z + rel.z);

    // Tumbling: spin about the vertical, rock about the horizontal; flat once landed.
    float yaw = iRand.z * 6.283 + tf * (0.8 + iRand.y * 1.6);
    float tilt = (0.9 * sin(tf * 2.7 + iRand.x * 9.0)) * flutter;
    vec3 axisX = vec3(cos(yaw), 0.0, -sin(yaw));
    vec3 axisZ = vec3(sin(yaw) * cos(tilt), sin(tilt), cos(yaw) * cos(tilt));
    float size = (0.075 + 0.06 * iRand.w) * (1.0 - smoothstep(0.94, 1.0, phase)) * smoothstep(0.0, 0.04, phase);
    vec3 pos = world + (axisX * position.x + axisZ * position.y) * size;

    float h = fract(iRand.x * 7.31 + iRand.z * 3.17 + iRand.w * 1.9);
    vec3 albedo = palette(h) * (0.85 + 0.3 * fract(iRand.y * 13.7));
    vec3 n = normalize(cross(axisX, axisZ));
    float ndl = abs(dot(n, uSunDir));
    vec2 lmUv = vec2((world.x - uLMRect.x) / uLMRect.z, (uLMRect.y - world.z) / uLMRect.w);
    float inMap = 1.0 - step(0.5, max(abs(lmUv.x - 0.5), abs(lmUv.y - 0.5)));
    vec3 lm = texture2D(uLightMap, lmUv).rgb * inMap * exp(-max(world.y - 1.0, 0.0) * 0.1);
    vColor = albedo * (uAmbient + uSun * ndl + lm * 0.9);

    float dist = length(pos - cameraPosition);
    vFog = exp(-uFogDensity * uFogDensity * dist * dist);
    vUv = position.xy;
    gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
  }
`,fh=`
  uniform vec3 uFogColor;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFog;
  void main() {
    // Pointed oval with a darker midrib.
    float y = vUv.y;
    float halfW = 0.58 * (1.0 - y * y) * (1.0 - 0.28 * y);
    if (abs(vUv.x) > halfW) discard;
    float vein = 1.0 - 0.28 * smoothstep(0.07, 0.0, abs(vUv.x));
    vec3 c = vColor * vein;
    gl_FragColor = vec4(mix(uFogColor, c, vFog), 1.0);
  }
`,ph=class{constructor(e,t=320){this.count=t;let n=new Lr;n.setAttribute(`position`,new Tr([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]);let r=new Float32Array(t*4);for(let e=0;e<r.length;e++)r[e]=Math.random();n.setAttribute(`iRand`,new di(r,4)),this.uniforms={uTime:X.time,uCam:{value:new H},uBox:{value:new H(46,13,46)},uWind:X.wind,uSunDir:X.sunDir,uSun:{value:new K},uAmbient:{value:new K},uFogDensity:{value:.004},uFogColor:{value:new K},uLightMap:X.lightMap,uLMRect:X.lightMapRect},this.material=new Ia({vertexShader:dh,fragmentShader:fh,uniforms:this.uniforms,side:2,fog:!1}),this.mesh=new yi(n,this.material,t),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n){if(this.mesh.visible=n.rain<.85,!this.mesh.visible)return;let r=this.uniforms;r.uCam.value.copy(e.position),r.uSun.value.copy(t.sunColor).multiplyScalar(t.sunIntensity*.16),r.uAmbient.value.copy(t.horizon).multiplyScalar(.3*t.ambient).addScalar(.02),r.uFogDensity.value=t.fogDensity,r.uFogColor.value.copy(t.fogColor)}},mh={smoke:11,steam:9},hh=`
  attribute vec4 iEmit;   // x, y, z of the emitter, kind (0 smoke, 1 steam)
  attribute vec4 iRand;   // per-puff randoms
  uniform float uTime;
  uniform float uWind;
  uniform vec3 uAmbient;
  uniform float uFogDensity;
  uniform sampler2D uLightMap;
  uniform vec4 uLMRect;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vFog;

  void main() {
    float steam = iEmit.w;
    float life = mix(11.0, 4.6, steam);
    float rise = mix(0.85, 1.5, steam);
    float s0 = mix(0.3, 0.35, steam);
    float s1 = mix(2.8, 1.9, steam);
    float phase = fract(uTime / life + iRand.x);
    float age = phase * life;
    // Drifts downwind, wobbling a little; steam is pushed around more by the traffic and the wind.
    vec2 drift = vec2(0.6 + 2.6 * uWind, 0.2 + 0.7 * uWind) * age * mix(1.0, 1.2, steam);
    drift += vec2(sin(age * 0.7 + iRand.y * 6.283), cos(age * 0.6 + iRand.z * 6.283)) * (0.15 + 0.5 * phase);
    vec3 center = iEmit.xyz + vec3(drift.x, rise * age * (1.0 - 0.35 * phase), drift.y);
    float size = mix(s0, s1, sqrt(phase)) * (0.8 + 0.4 * iRand.w);

    // Steam comes in bursts; smoke is steady.
    float burst = mix(1.0, 0.35 + 0.65 * smoothstep(-0.2, 0.7, sin(uTime * 0.37 + iEmit.x * 1.3 + iEmit.z * 0.7)), steam);
    float fadeIn = smoothstep(0.0, mix(0.08, 0.05, steam), phase);
    float fadeOut = 1.0 - smoothstep(0.35, 1.0, phase);
    vAlpha = fadeIn * fadeOut * burst * mix(0.42, 0.62, steam);

    vec2 lmUv = vec2((center.x - uLMRect.x) / uLMRect.z, (uLMRect.y - center.z) / uLMRect.w);
    float inMap = 1.0 - step(0.5, max(abs(lmUv.x - 0.5), abs(lmUv.y - 0.5)));
    vec3 lm = texture2D(uLightMap, lmUv).rgb * inMap * exp(-max(center.y - 1.0, 0.0) * 0.09);
    vec3 smokeC = vec3(0.6, 0.58, 0.56) * (uAmbient + lm * 0.35);
    vec3 steamC = uAmbient * 1.5 + lm * 1.3 + 0.12;
    vColor = mix(smokeC, steamC, steam);

    vec4 mv = viewMatrix * vec4(center, 1.0);
    float dist = max(-mv.z, 0.1);
    vFog = exp(-uFogDensity * uFogDensity * dist * dist);
    // Fade out right in front of the lens instead of filling the screen with a blob.
    vAlpha *= smoothstep(0.4, 2.0, dist / size);
    mv.xy += position.xy * size;
    vUv = position.xy;
    gl_Position = projectionMatrix * mv;
  }
`,gh=`
  uniform vec3 uFogColor;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vFog;
  void main() {
    float r = length(vUv);
    if (r > 1.0) discard;
    float a = pow(1.0 - r, 1.25) * vAlpha;
    if (a < 0.002) discard;
    vec3 c = mix(uFogColor, vColor, vFog);
    gl_FragColor = vec4(c * a, a);
  }
`,_h=class{constructor(e,t,n){let r=[...t.map(e=>[...e,0]),...n.map(e=>[...e,1])];this.emitters=r;let i=0;for(let e of r)i+=e[3]===0?mh.smoke:mh.steam;let a=new Ea(2,2),o=new Float32Array(i*4),s=new Float32Array(i*4),c=0;for(let e of r){let t=e[3]===0?mh.smoke:mh.steam;for(let n=0;n<t;n++,c++)o.set(e,c*4),s.set([(n+Math.random()*.6)/t,Math.random(),Math.random(),Math.random()],c*4)}a.setAttribute(`iEmit`,new di(o,4)),a.setAttribute(`iRand`,new di(s,4)),this.uniforms={uTime:X.time,uWind:X.wind,uAmbient:{value:new K},uFogDensity:{value:.004},uFogColor:{value:new K},uLightMap:X.lightMap,uLMRect:X.lightMapRect},this.material=new Ia({vertexShader:hh,fragmentShader:gh,uniforms:this.uniforms,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,fog:!1}),this.mesh=new yi(a,this.material,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8,e.add(this.mesh),this.total=i}update(e){let t=this.uniforms,n=e.sunIntensity*.12,r=t.uAmbient.value.copy(e.horizon).multiplyScalar(.55*Math.min(e.ambient,1.4));r.setRGB(r.r+e.sunColor.r*n+.01,r.g+e.sunColor.g*n+.01,r.b+e.sunColor.b*n+.01),t.uFogDensity.value=e.fogDensity,t.uFogColor.value.copy(e.fogColor)}},vh=`
  attribute vec4 iRand;   // xyz: position inside the rain box (0..1), w: random 0..1
  uniform float uTime;
  uniform vec3 uCam;
  uniform vec3 uBox;      // size of the rain volume
  uniform float uIntensity;
  uniform float uWind;
  uniform vec3 uBase;     // colour of a streak away from any light
  uniform sampler2D uLightMap;
  uniform vec4 uLMRect;
  uniform float uFogDensity;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float speed = 9.5 + iRand.w * 2.5;
    vec3 fall = normalize(vec3(uWind * 0.32, -1.0, uWind * 0.12));
    vec3 p = iRand.xyz * uBox;
    p += fall * speed * uTime;
    // Wrap into a box centred on the camera so the rain follows the viewer.
    vec3 rel = p - uCam;
    rel = mod(rel + uBox * 0.5, uBox) - uBox * 0.5;
    vec3 world = uCam + rel;
    world.y = mod(world.y + 8.0, uBox.y) - 8.0 + 0.0;

    float len = 0.55 + iRand.w * 0.55;
    vec3 viewDir = normalize(cameraPosition - world);
    vec3 side = normalize(cross(fall, viewDir));
    float w = 0.011;
    vec3 pos = world - fall * len * position.y + side * w * position.x;

    float dist = length(pos - cameraPosition);
    vec2 lmUv = vec2((world.x - uLMRect.x) / uLMRect.z, (uLMRect.y - world.z) / uLMRect.w);
    vec3 lm = texture2D(uLightMap, lmUv).rgb;
    float lit = 1.0 - step(0.5, abs(lmUv.x - 0.5)) ;
    vColor = uBase + lm * lit * 1.4 * exp(-max(world.y - 1.0, 0.0) * 0.12);
    float fogF = exp(-uFogDensity * uFogDensity * dist * dist);
    // Only a share of streaks exist, depending on the rain intensity; near the ground they fade out.
    float exists = step(iRand.w, uIntensity);
    vAlpha = exists * fogF * smoothstep(-0.3, 1.5, world.y) * (0.5 + 0.5 * (1.0 - position.y));
    gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
  }
`,yh=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    if (vAlpha < 0.01) discard;
    gl_FragColor = vec4(vColor * vAlpha, 1.0);
  }
`,bh=class{constructor(e,t=9e3){this.count=t;let n=new Lr;n.setAttribute(`position`,new Tr([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]);let r=new Float32Array(t*4);for(let e=0;e<r.length;e++)r[e]=Math.random();n.setAttribute(`iRand`,new di(r,4)),this.uniforms={uTime:X.time,uCam:{value:new H},uBox:{value:new H(56,26,56)},uIntensity:{value:0},uWind:X.wind,uBase:{value:new K(.2,.22,.28)},uLightMap:X.lightMap,uLMRect:X.lightMapRect,uFogDensity:{value:.004}},this.material=new Ia({vertexShader:vh,fragmentShader:yh,uniforms:this.uniforms,blending:2,depthWrite:!1,transparent:!0,fog:!1,side:2}),this.mesh=new yi(n,this.material,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.mesh.visible=!1,e.add(this.mesh)}update(e,t,n){let r=n.rain;this.mesh.visible=r>.02,this.mesh.visible&&(this.uniforms.uCam.value.copy(e.position),this.uniforms.uIntensity.value=r,this.uniforms.uBase.value.copy(t.horizon).multiplyScalar(.55).addScalar(.012),this.uniforms.uFogDensity.value=t.fogDensity)}};function xh(e,t,n=0,r=Y.kerbH){return new G().makeRotationY(n).setPosition(e,r,t)}var Q=(e,t,n)=>new G().makeTranslation(e,t,n);function $(e,t,n){e.pushMatrix(t),n(e),e.popMatrix()}function Sh(e,t,n,r){return new H(t,n,r).applyMatrix4(e)}var Ch=[1,.66,.34],wh=class{constructor({batch:e,rng:t,lightMap:n,glow:r,pedestrians:i}){this.batch=e,this.rng=t,this.lightMap=n,this.glow=r,this.pedestrians=i,this.count=0,this.terraces=[]}build(e){for(let t of e)t.kind===2&&this.rng.chance(.85)&&this.terrace(t)}terrace(e){let t=this.rng,[n,r]=e.normal,i=r,a=-n,o=new G().makeBasis(new H(i,0,a),new H(0,1,0),new H(n,0,r)).setPosition(e.center[0],Y.kerbH,e.center[2]),s=e.center[2],c=e.width+.6,l=Math.max(1,Math.floor(c/1.8)),u=this.batch.builder(`metal`,s),d=this.batch.builder(`wood`,s),f=this.batch.builder(`awning`,s),p=this.batch.builder(`foliage`,s),m=this.batch.builder(`trim`,s),h=1.25,g=(e,t,n)=>new H(e,t,n).applyMatrix4(o);for(let e=0;e<l;e++){let i=-c/2+c*(e+.5)/l;$(u,o,e=>{$(e,Q(i,0,h),e=>{e.cylinder(.05,.22,.05,10,{color:2369066}),$(e,Q(0,.05,0),e=>e.cylinder(.025,.025,.68,6,{color:2369066})),$(e,Q(0,.72,0),e=>e.cylinder(.34,.34,.03,14,{color:15262418}))})});let a=g(i,.8,h);this.glow.add({pos:[a.x,a.y,a.z],size:.34,color:Ch,intensity:1.6,group:nd.NEON,flicker:.25,speed:6});for(let e of[-1,1]){let a=h+e*.62;if($(d,o,t=>{$(t,Q(i,0,a),t=>{t.box(-.2,.44,-.2,.2,.48,.2,{color:7031346,uvScale:.5}),t.box(-.2,.48,e>0?.18:-.2,.2,.92,e>0?.2:-.18,{color:7031346,uvScale:.5})})}),$(u,o,e=>{$(e,Q(i,0,a),e=>{for(let t of[-.18,.18])for(let n of[-.18,.18])e.box(t-.012,0,n-.012,t+.012,.44,n+.012,{color:2369066})})}),t.chance(.5)){let o=g(i,0,a),s=new H(-e*n,0,-e*r);this.pedestrians.addSeated(o.x,Y.kerbH,o.z,Math.atan2(s.x,s.z),{skin:t.pick(Km.skin),hair:t.pick(Km.hair),top:t.pick(Km.top),bottom:t.pick(Km.bottom),shoes:1842206})}}}for(let e=0;e<l;e+=2){let n=-c/2+c*(e+.5)/l+(e+1<l?c/l/2:0),r=t.int(0,7),i=r/8+.01,a=(r+1)/8-.01;$(u,o,e=>$(e,Q(n,0,h),e=>e.cylinder(.03,.035,2.5,6,{color:2369066})));let s=2.55,d=1.3;$(f,o,e=>{let t=(e,t,r)=>[n+e,t,h+r],r=[t(-1.3,s,-1.3),t(d,s,-1.3),t(d,s,d),t(-1.3,s,d)],o=t(0,3.05,0);for(let t=0;t<4;t++)e.quad(r[(t+1)%4],r[t],o,o,{uv:[0,i,.8,a]})})}let _=2.35;for(let e=0;e<=l;e++){let n=-c/2+c*e/l;$(m,o,e=>$(e,Q(n,0,_),e=>e.box(-.4,0,-.18,.4,.42,.18,{color:3814448}))),$(p,o,e=>$(e,Q(n,.55,_),e=>e.sphere(t.range(.26,.36),7,5,{color:t.pick([10133552,5929512,13131804]),uvScale:1.5})))}let v=Math.round(c/.42);for(let e=0;e<=v;e++){let t=e/v,n=g(-c/2+c*t,3.15-Math.sin(t*Math.PI)*.28-.4*Math.abs(Math.sin(t*Math.PI*3))*.1,1.4);this.glow.add({pos:[n.x,n.y,n.z],size:.3,color:[1,.72,.4],intensity:2,group:nd.NEON,flicker:.08,speed:2+e%5*.4,minPixels:2})}let y=g(0,0,1.4);this.lightMap.add({shape:`rect`,x:y.x,z:y.z,rot:Math.atan2(a,i),hw:c/2+2,hd:3,coreW:c/2-.2,coreD:1.2,group:nd.NEON,color:Ch,intensity:.55}),this.terraces.push({x:y.x,z:y.z,nx:n,nz:r,width:c}),this.count++}},Th=2046512,Eh=1776671,Dh=8016434,Oh=12433062,kh=class{constructor({batch:e,rng:t,lightMap:n,glow:r}){this.batch=e,this.rng=t,this.lightMap=n,this.glow=r,this.benches=[],this.solids=[]}solid(e,t,n){this.solids.push({x:e,z:t,r:n})}build(e){let t=this.rng,n=Y.kerbX,r=su.find(e=>e.id===`major`),i=e=>su.some(t=>Math.abs(e-t.z)<t.roadHalf+9);for(let r of e)for(let e of[-1,1]){let a=e>0?-Math.PI/2:Math.PI/2;!i(r+6.5)&&t.chance(.5)&&this.bench(e*(n+1.45),r+6.5,a),!i(r+1.7)&&t.chance(.6)&&this.bin(e*(n+1),r+1.7),!i(r+9.5)&&t.chance(.22)&&this.bikeRack(e*(n+1.5),r+9.5,a),!i(r+3)&&t.chance(.12)&&this.hydrant(e*(n+.55),r+3.4)}for(let e of[-1,1])for(let t of[-1,1]){for(let i=0;i<4;i++)this.bollard(e*(n+.45),r.z+t*(r.roadHalf+5.2+i*1.3));this.planter(e*(n+3.2),r.z+t*(r.roadHalf+7.5))}this.adColumn(n+3.4,r.z+r.roadHalf+10,0),this.adColumn(-(n+3.6),r.z-r.roadHalf-10,2),this.adColumn(n+3.4,-110,4),this.kiosk(n+4.4,r.z-r.roadHalf-14,-Math.PI/2),this.kiosk(-(n+4.2),r.z+r.roadHalf+16,Math.PI/2),this.busShelter(n+1.65,78,-Math.PI/2),this.busShelter(-(n+1.65),-46,Math.PI/2),this.roadSigns(r)}bench(e,t,n){let r=xh(e,t,n),i=this.batch.builder(`wood`,t),a=this.batch.builder(`metal`,t);$(i,r,e=>{for(let t=0;t<4;t++)e.box(-.9,.44,-.24+t*.12,.9,.475,-.16+t*.12,{color:Dh,uvScale:.5});for(let t=0;t<3;t++)e.box(-.9,.62+t*.13,-.27-t*.03,.9,.7+t*.13,-.25-t*.03,{color:Dh,uvScale:.5})}),$(a,r,e=>{for(let t of[-.78,.78])e.box(t-.03,0,-.28,t+.03,.44,-.22,{color:Eh}),e.box(t-.03,0,.2,t+.03,.44,.26,{color:Eh}),e.box(t-.03,.44,-.28,t+.03,1,-.22,{color:Eh})}),this.benches.push({x:e,y:Y.kerbH+.44,z:t,yaw:n}),this.solid(e,t,1)}bin(e,t){this.solid(e,t,.3);let n=xh(e,t,0);$(this.batch.builder(`metal`,t),n,e=>{e.cylinder(.22,.2,.82,10,{color:Th}),$(e,Q(0,.82,0),e=>e.cylinder(.23,.23,.06,10,{color:Eh})),$(e,Q(0,.55,0),e=>e.cylinder(.225,.225,.05,10,{color:Eh}))})}bollard(e,t){this.solid(e,t,.15),$(this.batch.builder(`metal`,t),xh(e,t,0),e=>{e.cylinder(.085,.09,.86,8,{color:2763824}),$(e,Q(0,.86,0),e=>e.sphere(.09,8,4,{color:2763824})),$(e,Q(0,.62,0),e=>e.cylinder(.093,.093,.07,8,{color:15262416}))})}hydrant(e,t){this.solid(e,t,.2),$(this.batch.builder(`metal`,t),xh(e,t,0),e=>{e.cylinder(.11,.13,.7,8,{color:12068382}),$(e,Q(0,.7,0),e=>e.sphere(.12,8,4,{color:12068382})),e.box(-.2,.42,-.05,.2,.52,.05,{color:12068382})})}bikeRack(e,t,n){this.solid(e,t,.9);let r=this.rng,i=xh(e,t,n);$(this.batch.builder(`metal`,t),i,e=>{for(let t=0;t<4;t++){let n=-.9+t*.6;e.tube([[n,0,0],[n,.72,0],[n+.05,.78,0],[n+.1,.72,0],[n+.1,0,0]],.018,5,{color:9080210})}if(r.chance(.6)){let t=r.pick([2771594,11545130,3107402,1974050]);for(let t of[-.42,.42])$(e,Q(-.3+t,.33,.05),e=>e.tube(Array.from({length:13},(e,t)=>[Math.cos(t/12*6.283)*.33,Math.sin(t/12*6.283)*.33,0]),.018,5,{color:1710877}));e.tube([[-.72,.33,.05],[-.42,.68,.05],[0,.66,.05],[.12,.33,.05]],.022,5,{color:t}),e.tube([[-.42,.68,.05],[-.3,.33,.05]],.02,5,{color:t}),e.tube([[0,.66,.05],[.04,.82,.05],[.12,.86,.05]],.02,5,{color:1710877})}})}planter(e,t){this.solid(e,t,.6);let n=this.rng,r=xh(e,t,0);$(this.batch.builder(`trim`,t),r,e=>e.cylinder(.5,.42,.62,10,{color:Oh})),$(this.batch.builder(`foliage`,t),r,e=>{for(let t=0;t<4;t++)$(e,Q(n.range(-.25,.25),.85+n.range(0,.35),n.range(-.25,.25)),e=>e.sphere(n.range(.28,.42),7,5,{color:n.pick([10133552,14196776,13131804,5929512]),uvScale:1.6}))})}adColumn(e,t,n){this.solid(e,t,.8);let r=xh(e,t,0),i=this.batch.builder(`metal`,t),a=this.batch.builder(`sign`,t),o=.62,s=this.batch.atlas;$(i,r,e=>{e.cylinder(.66,.7,.3,8,{color:1915440}),$(e,Q(0,3.05,0),e=>e.cylinder(.72,.72,.16,8,{color:1915440})),$(e,Q(0,3.2,0),e=>e.cylinder(.05,.6,.55,8,{color:1915440})),$(e,Q(0,3.75,0),e=>e.sphere(.07,6,4,{color:1915440}))}),$(a,r,e=>{for(let t=0;t<8;t++){let r=t/8*Math.PI*2,i=(t+1)/8*Math.PI*2,a=[Math.sin(r)*o,Math.cos(r)*o],c=[Math.sin(i)*o,Math.cos(i)*o],l=s.uv(`poster${(n+t)%Lf.length}`);e.quad([a[0],.32,a[1]],[c[0],.32,c[1]],[c[0],2.98,c[1]],[a[0],2.98,a[1]],{uv:l})}})}kiosk(e,t,n){this.solid(e,t,1.7);let r=xh(e,t,n),i=this.batch.builder(`metal`,t),a=this.batch.builder(`sign`,t);$(this.batch.builder(`trim`,t),r,e=>{e.box(-1.1,0,-.9,1.1,.95,.9,{color:2371626}),e.box(-1.15,2.55,-.95,1.15,2.7,.95,{color:2371626}),e.box(-1,.95,-.85,1,2.55,-.75,{color:2898482})}),$(i,r,e=>{for(let t of[-1,1])for(let n of[-1,1])e.box(t*1.05-.05,.95,n*.85-.05,t*1.05+.05,2.55,n*.85+.05,{color:1776671});e.box(-1.15,1.02,.8,1.15,1.08,1.05,{color:1776671})}),$(a,r,e=>{e.quad([-.95,1.1,.86],[.95,1.1,.86],[.95,2.45,.86],[-.95,2.45,.86],{uv:this.batch.atlas.uv(`poster${this.rng.int(0,5)}`)})});let o=Sh(r,0,1.7,1.6);this.lightMap.add({shape:`point`,x:o.x,z:o.z,radius:5,color:[1,.78,.5],intensity:.7,group:nd.SHOP})}busShelter(e,t,n){this.solid(e,t,2.3);let r=xh(e,t,n),i=this.batch.builder(`metal`,t),a=this.batch.builder(`trim`,t),o=this.batch.builder(`sign`,t),s=this.batch.builder(`wood`,t);$(i,r,e=>{for(let t of[-1.9,1.9])for(let n of[-.5,.5])e.box(t-.04,0,n-.04,t+.04,2.5,n+.04,{color:2763824});e.box(-2.05,2.5,-.62,2.05,2.62,.62,{color:2763824})}),$(a,r,e=>{e.box(-1.9,.3,-.5,1.9,2.4,-.47,{color:10335165}),e.box(-1.9,.3,-.5,-1.87,2.4,.5,{color:10335165}),e.box(1.87,.3,-.5,1.9,2.4,.5,{color:10335165})}),$(s,r,e=>e.box(-1.5,.44,-.4,1.5,.5,-.05,{color:Dh,uvScale:.5})),$(o,r,e=>{let t=this.batch.atlas.uv(`poster${this.rng.int(0,5)}`);e.quad([2.05,.35,.35],[2.05,.35,-.35],[2.05,1.95,-.35],[2.05,1.95,.35],{uv:t}),e.quad([2,.35,-.35],[2,.35,.35],[2,1.95,.35],[2,1.95,-.35],{uv:t})});let c=Sh(r,2.4,1.2,0);this.lightMap.add({shape:`point`,x:c.x,z:c.z,radius:4.2,color:[.9,.95,1],intensity:.6,group:nd.NEON});let l=Sh(r,0,2.4,.2);this.glow.add({pos:[l.x,l.y,l.z],size:1.4,color:[1,.95,.85],intensity:.3,group:nd.NEON});let u=Sh(r,0,.5,-.22);this.benches.push({x:u.x,y:u.y,z:u.z,yaw:n+Math.PI})}roadSigns(e){let t=Y.kerbX,n=(e,t,n,r=0)=>{this.solid(e,t,.2);let i=xh(e,t,r);$(this.batch.builder(`metal`,t),i,e=>e.cylinder(.035,.04,2.65,6,{color:6974834}));let a=this.batch.builder(`sign`,t);n.forEach((e,t)=>{let n=2.55-t*.62,r=this.batch.atlas.uv(e);$(a,i,e=>{e.quad([-.3,n-.3,.06],[.3,n-.3,.06],[.3,n+.3,.06],[-.3,n+.3,.06],{uv:r}),e.quad([.3,n-.3,.045],[-.3,n-.3,.045],[-.3,n+.3,.045],[.3,n+.3,.045],{color:9080210})})})};for(let r of[-1,1]){let i=e.z+r*62;n(r*(t+.5),i,[`sign-30`],r>0?0:Math.PI),n(r*(t+.5),e.z+r*(e.roadHalf+2.6),[`sign-cross`],r>0?0:Math.PI)}n(-(t+.5),e.z-25,[`sign-park`],Math.PI),n(t+.5,e.z+30,[`sign-park`],0),n(t+6,e.z-e.roadHalf-1.8,[`sign-oneway`],Math.PI/2)}},Ah=[1,.7,.38],jh=26,Mh=[1848105,1776671,2371642],Nh=class{constructor({batch:e,lightMap:t,glow:n,rng:r}){this.batch=e,this.lightMap=t,this.glow=n,this.rng=r,this.pairs=[],this.lanterns=[],this.posts=[]}build(){let e=Y.kerbX+1.25,t=e=>su.some(t=>Math.abs(e-t.z)<t.roadHalf+10);for(let n=Y.zMin+22;n<Y.zMax-10;n+=jh)if(!t(n)){this.pairs.push(n);for(let t of[-1,1])this.post(t*e,n,t>0?Math.PI:0,{tall:!0})}for(let t of su){let n=t.roadHalf;for(let r of[-1,1])for(let i of[-1,1])this.corner(r*e,t.z+i*(n+1.25),r,i);for(let e of[-1,1])for(let r=Y.kerbX+13;r<t.extent-8;r+=jh)for(let i of[-1,1])this.post(i*r,t.z+e*(n+1.05),Math.PI/2*e,{tall:!1})}}post(e,t,n,{tall:r}){this.posts.push({x:e,z:t,r:.3});let i=this.rng,a=xh(e,t,n),o=i.pick(Mh),s=r?6.4:4.8;$(this.batch.builder(`metal`,t),a,e=>{this.base(e,o,s),e.tube([[0,s-1.85,0],[.06,s-1.3,0],[.34,s-1,0],[.8,s-1,0],[1.18,s-1.22,0]],.035,6,{color:o}),e.tube([[0,s-1.3,0],[.4,s-1.45,0],[.72,s-1.3,0]],.02,5,{color:o}),r&&e.box(-.03,s-.25,-.04,.03,s-.18,.04,{color:o})}),this.lantern(a,1.2,s-1.28,0,t)}corner(e,t,n,r){this.posts.push({x:e,z:t,r:.3});let i=this.rng.pick(Mh),a=xh(e,t,0);$(this.batch.builder(`metal`,t),a,e=>{this.base(e,i,5.2);for(let[t,a]of[[-n,0],[0,-r]])e.tube([[0,4.3,0],[t*.3,4.65,a*.3],[t*.85,4.65,a*.85],[t*1.2,4.45,a*1.2]],.033,6,{color:i})}),this.lantern(a,-n*1.2,4.3500000000000005,0,t),this.lantern(a,0,4.3500000000000005,-r*1.2,t)}base(e,t,n){e.lathe([[.27,0],[.27,.1],[.2,.16],[.17,.3],[.17,.52],[.22,.58],[.15,.68]],14,{color:t}),$(e,Q(0,.66,0),e=>e.cylinder(.075,.098,n-.66,12,{color:t}));for(let n of[1.8,3.6])$(e,Q(0,n,0),e=>e.lathe([[.1,0],[.14,.03],[.14,.07],[.1,.1]],12,{color:t}));$(e,Q(0,n,0),e=>e.sphere(.11,10,6,{color:t}))}lantern(e,t,n,r,i){let a=this.batch.builder(`metal`,i),o=this.batch.builder(`lampGlass`,i),s=1710878;$(a,e,e=>{$(e,Q(t,n-.02,r),e=>e.cylinder(.06,.06,.16,8,{color:s})),$(e,Q(t,n-.24,r),e=>e.cylinder(0,.25,.2,8,{color:s})),$(e,Q(t,n-.74,r),e=>e.cylinder(.11,.06,.08,8,{color:s}))}),$(o,e,e=>$(e,Q(t,n-.66,r),e=>e.cylinder(.16,.12,.44,8,{color:16773848,caps:!1})));let c=Sh(e,t,n-.45,r);this.lanterns.push(c),this.lightMap.add({shape:`point`,x:c.x,z:c.z,group:nd.LAMP,color:Ah,intensity:1.7,radius:10.5}),this.lightMap.add({shape:`point`,x:c.x,z:c.z,group:nd.LAMP,color:[1,.8,.56],intensity:.32,radius:24}),this.glow.add({pos:[c.x,c.y,c.z],size:1.3,color:Ah,intensity:3.6,group:nd.LAMP}),this.glow.add({pos:[c.x,c.y,c.z],size:5,color:[1,.66,.34],intensity:.13,group:nd.LAMP,minPixels:5})}},Ph=2829875,Fh=1316120,Ih={Red:[1,.16,.1],Yellow:[1,.7,.12],Green:[.16,1,.42]},Lh=class{constructor({batch:e,lightMap:t,glow:n,materials:r}){this.batch=e,this.lightMap=t,this.glow=n,this.materials=r,this.lenses=[]}build(){let e=su.find(e=>e.id===`major`),t=e.roadHalf,n=Y.kerbX;for(let r of[-1,1]){let i=new H(r*(n+.9),Y.kerbH,e.z+r*(t+5.6));this.vehiclePole(i,new H(-r,0,0),new H(0,0,r),`Main`,Math.abs(i.x)-Y.laneX)}for(let r of[-1,1]){let i=new H(r*(n+5.6),Y.kerbH,e.z-r*(t+.9));this.vehiclePole(i,new H(0,0,r),new H(r,0,0),`Cross`,t+.9-1.7)}for(let r of[-1,1])for(let i of[-1,1])this.pedPole(new H(i*(n+.8),Y.kerbH,e.z+r*(t+2.4)),new H(-i,0,0),`Cross`),this.pedPole(new H(i*(n+2.6),Y.kerbH,e.z+r*(t+.8)),new H(0,0,-r),`Main`)}frame(e,t,n){return new G().makeBasis(t,new H(0,1,0),n).setPosition(e)}vehiclePole(e,t,n,r,i){let a=this.frame(e,t,n),o=e.z;$(this.batch.builder(`metal`,o),a,e=>{e.lathe([[.16,0],[.16,.12],[.1,.2],[.08,.4]],10,{color:Ph}),$(e,Q(0,.3,0),e=>e.cylinder(.065,.075,5.1,10,{color:Ph})),e.tube([[0,5.15,0],[.3,5.5,0],[i*.5,5.55,0],[i,5.45,0]],.05,6,{color:Ph}),e.tube([[0,4.7,0],[i*.4,5.3,0],[i*.75,5.5,0]],.025,5,{color:Ph})}),this.head(a,r,i,4.9,o),this.head(a,r,0,2.55,o,.12)}head(e,t,n,r,i,a=0){let o=this.batch.builder(`metal`,i);$(o,e,e=>{$(e,Q(n,r-.55,a),e=>e.box(-.19,-.55,-.15,.19,.55,.15,{color:Fh,skip:[`front`]}))});let s=a+.152;for(let[a,c]of[`Red`,`Yellow`,`Green`].entries()){let l=r-.55+(.36-a*.36);$(this.batch.builder(`tl${t}${c}`,i),e,e=>{$(e,Q(n,l,s),e=>{e.pushMatrix(new G().makeRotationX(Math.PI/2)),e.cylinder(.115,.115,.02,14,{color:16777215}),e.popMatrix()})}),$(o,e,e=>$(e,Q(n,l+.13,s+.06),e=>e.box(-.14,0,-.07,.14,.02,.09,{color:Fh})));let u=Sh(e,n,l,s+.05);this.lenses.push({group:t,color:c,glow:this.glow.add({pos:[u.x,u.y,u.z],size:.7,color:Ih[c],intensity:0,group:nd.SIGNAL,minPixels:2.6}),light:this.lightMap.add({shape:`point`,x:u.x+e.elements[8]*3,z:u.z+e.elements[10]*3,radius:5.5,color:Ih[c],intensity:0,group:nd.SIGNAL}),pos:u,big:r>4})}}pedPole(e,t,n){let r=new H().crossVectors(new H(0,1,0),t).multiplyScalar(-1),i=this.frame(e,r,t),a=e.z;$(this.batch.builder(`metal`,a),i,e=>{e.lathe([[.13,0],[.13,.1],[.08,.18],[.06,.3]],10,{color:Ph}),$(e,Q(0,.25,0),e=>e.cylinder(.05,.06,3,8,{color:Ph})),$(e,Q(0,2.6,.03),e=>e.box(-.17,-.32,-.01,.17,.32,.2,{color:Fh,skip:[`front`]}))});for(let[e,t]of[[`Stop`,2.6+.16],[`Walk`,2.44]]){let r=`ped${n}${e}`,o=this.batch.atlas.uv(e===`Stop`?`ped-stop`:`ped-walk`);$(this.batch.builder(r,a),i,e=>e.quad([-.13,t-.13,.213],[.13,t-.13,.213],[.13,t+.13,.213],[-.13,t+.13,.213],{uv:o}));let s=Sh(i,0,t,.24);this.lenses.push({group:n,color:e,ped:!0,glow:this.glow.add({pos:[s.x,s.y,s.z],size:.35,color:e===`Stop`?Ih.Red:Ih.Green,intensity:0,group:nd.SIGNAL,minPixels:2}),light:null,pos:s})}}update(e){let t=Math.floor(X.time.value*2)%2==0,n=this.materials;for(let r of this.lenses){let i;if(r.ped){let a=e.walk(r.group===`Main`?`main`:`cross`);i=r.color===`Walk`?a===`walk`||a===`flash`&&t:a===`stop`||a===`flash`&&!t,n[`ped${r.group}${r.color}`].emissiveIntensity=i?5:.03}else{let t=e.car(r.group===`Main`?`main`:`cross`);i=r.color===`Red`&&t===`red`||r.color===`Yellow`&&t===`yellow`||r.color===`Green`&&t===`green`,n[`tl${r.group}${r.color}`].emissiveIntensity=i?9:.04}this.glow.set(r.glow,r.pos.x,r.pos.y,r.pos.z,i?r.ped?1.8:3.2:0),r.light!=null&&this.lightMap.set(r.light,{intensity:i?.55:0})}}},Rh=[16777215,16771528,16767152,16179368,16763032,15915188],zh=class{constructor({batch:e,rng:t}){this.batch=e,this.rng=t,this.count=0,this.spots=[]}build(e){let t=Y.kerbX+1.25,n=e=>su.some(t=>Math.abs(e-t.z)<t.roadHalf+9);for(let r of e){let e=r+13;if(!(e>Y.zMax-8||n(e)))for(let n of[-1,1])this.tree(n*t,e)}for(let e of su)for(let t of[-1,1])for(let n=Y.kerbX+26;n<e.extent-8;n+=26)for(let r of[-1,1])this.tree(r*n,e.z+t*(e.roadHalf+1.05))}tree(e,t){let n=this.rng,r=Y.kerbH,i=this.batch.builder(`bark`,t),a=this.batch.builder(`foliage`,t),o=n.range(2.7,3.3),s=n.range(-.25,.25),c=n.range(-.25,.25),l=[e+s,r+o,t+c];this.spots.push({x:e,z:t,top:l}),this.count++,this.batch.builder(`iron`,t).quad([e-.7,r+.008,t+.7],[e+.7,r+.008,t+.7],[e+.7,r+.008,t-.7],[e-.7,r+.008,t-.7],{uv:mp.grate}),i.tube([[e,r,t],[e+s*.3,r+o*.45,t+c*.3],l],[.27,.21,.17],8,{uvScale:[.8,1.6]}),$(i,Q(e,r,t),e=>e.cylinder(.2,.34,.5,8,{uvScale:[.8,1.6]}));let u=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2+n.range(-.4,.4),r=n.range(1.9,3),a=n.range(1.4,2.4),o=[l[0]+Math.cos(t)*r,l[1]+a,l[2]+Math.sin(t)*r],s=[l[0]+Math.cos(t)*r*.45,l[1]+a*.35,l[2]+Math.sin(t)*r*.45];i.tube([l,s,o],[.14,.1,.05],5,{uvScale:[.8,1.6]}),u.push(o)}let d=n.pick(Rh),f=[];for(let e of u)f.push([e[0]+n.range(-.5,.5),e[1]+n.range(.1,.9),e[2]+n.range(-.5,.5)]);let p=l[0],m=l[1]+2.9,h=l[2];for(let e=0;e<4;e++)f.push([p+n.range(-1.6,1.6),m+n.range(0,1.7),h+n.range(-1.6,1.6)]);for(let e of f){let t=n.range(1.35,2.15),r=n.range(0,6),i=(e,t,n)=>1+.2*Math.sin(e*4.3+t*2.1+r)*Math.cos(n*3.7+r*.7),o=Bh(d,n.range(.88,1.08));$(a,Q(e[0],e[1],e[2]),e=>e.sphere(t,9,6,{color:o,uvScale:2.4,ao:[.45,1],jitter:i,scale:[1,.82,1]}))}this.litter(e,t)}litter(e,t){let n=this.rng,r=this.batch.builder(`litter`,t);for(let i=0;i<30;i++){let i=.5+n.next()**1.6*3.6,a=n.range(0,Math.PI*2),o=e+Math.cos(a)*i,s=t+Math.sin(a)*i,c=(Math.abs(o)>=Y.kerbX+.2||su.some(e=>Math.abs(s-e.z)>=e.roadHalf)?Y.kerbH:0)+.012,l=n.range(.07,.12),u=n.range(0,Math.PI*2),d=Math.cos(u),f=Math.sin(u),p=[[-l,-l*.6],[l,-l*.6],[l,l*.6],[-l,l*.6]].map(([e,t])=>[o+e*d-t*f,c,s+e*f+t*d]);r.quad(p[0],p[3],p[2],p[1],{color:n.pick(up)})}}};function Bh(e,t){let n=(e>>16&255)/255,r=(e>>8&255)/255,i=(e&255)/255;return[n*t,r*t,i*t].map(e=>Math.min(1,e*e))}var Vh=class{constructor(e){this.scene=e}build(e,t){let n=[],r=(e,t)=>n.push(e[0],e[1],e[2],t[0],t[1],t[2]),i=5.85,a=Y.kerbH+6.18;for(let e of[-1,1])r([e*Y.tramX,i,Y.zMin],[e*Y.tramX,i,Y.zMax]);for(let n of e){let e=null;for(let i=0;i<=14;i++){let o=-t+2*t*i/14,s=o/t,c=[o,a-.42*(1-s*s),n];e&&r(e,c),e=c}for(let e of[-1,1]){let o=e*Y.tramX,s=o/t;r([o,a-.42*(1-s*s),n],[o,i,n])}}let o=new Lr;o.setAttribute(`position`,new Tr(n,3));let s=new Ii(o,new wi({color:1513499}));s.frustumCulled=!1,s.layers.enable(1),this.scene.add(s),this.lines=s}},Hh=1184533,Uh=1513498,Wh=12172482,Gh=15328988,Kh=e=>new G().makeRotationZ(e),qh=(e,t,n)=>new G().makeTranslation(e,t,n);function Jh(e,t,n,{crown:r=.025,r:i=.1,shoulder:a=.1}={}){return[[-e+i,t],[e-i,t],[e,t+i],[e,n-.16],[e-a,n],[e*.45,n+r*.7],[0,n+r],[-e*.45,n+r*.7],[-e+a,n],[-e,n-.16],[-e,t+i]]}var Yh={hatch:{L:4,W:1.76,y0:.24,belt:.92,roof:1.45,bonnet:.86,nose:.58,tail:.94,cabRear:-1.62,cabFront:.62,wb:2.5,wr:.31},sedan:{L:4.7,W:1.84,y0:.24,belt:.96,roof:1.44,bonnet:.9,nose:.58,tail:.98,cabRear:-1.1,cabFront:.88,wb:2.84,wr:.32},suv:{L:4.8,W:1.95,y0:.3,belt:1.12,roof:1.76,bonnet:1.06,nose:.72,tail:1.16,cabRear:-2.05,cabFront:.95,wb:2.85,wr:.37},taxi:{L:4.7,W:1.84,y0:.24,belt:.96,roof:1.44,bonnet:.9,nose:.58,tail:.98,cabRear:-1.1,cabFront:.88,wb:2.84,wr:.32}};function Xh(e){let t=Yh[e],n=t.W/2,r=new $d,i=new $d,a=new $d,o=new $d,s=new $d,c=t.L/2,l=[{z:-c,top:t.tail*.72,w:.9,y0:t.y0+.09},{z:-c+.16,top:t.tail*.95,w:.97,y0:t.y0+.02},{z:-c+.55,top:t.tail,w:1,y0:t.y0},{z:-.4,top:t.belt,w:1,y0:t.y0},{z:c-1.25,top:t.bonnet+.02,w:1,y0:t.y0},{z:c-.6,top:t.bonnet*.95,w:.985,y0:t.y0},{z:c-.14,top:t.nose+.1,w:.94,y0:t.y0+.02},{z:c,top:t.nose,w:.9,y0:t.y0+.1}];r.loft(l.map(e=>({z:e.z,loop:Jh(n*e.w,e.y0,e.top,{r:.13})})),{color:16777215});let u=[{z:t.cabRear,top:t.tail+.02,w:.92},{z:t.cabRear+.4,top:t.roof-.14,w:.78},{z:t.cabRear+.75,top:t.roof,w:.74},{z:t.cabFront-.55,top:t.roof+.01,w:.74},{z:t.cabFront-.1,top:t.belt+(t.roof-t.belt)*.5,w:.8},{z:t.cabFront+.38,top:t.bonnet+.06,w:.9}];i.loft(u.map(e=>({z:e.z,loop:Jh(n*e.w,t.belt-.03,e.top,{crown:.02,r:.03,shoulder:.14})})),{color:16777215});let d=u.slice(1,4).map(e=>{let t=n*e.w*.9,r=e.top;return{z:e.z,loop:[[-t,r-.02],[-t*.5,r-.02],[0,r-.02],[t*.5,r-.02],[t,r-.02],[t*.97,r+.012],[t*.5,r+.035],[0,r+.045],[-t*.5,r+.035],[-t*.97,r+.012],[-t,r-.005]]}});r.loft(d,{color:16777215,caps:!0});for(let e of[-1,1])for(let i of[t.cabRear+.62,(t.cabRear+t.cabFront)/2+.05])r.box(e*n*.75-.03,t.belt,i-.04,e*n*.75+.03,t.roof-.05,i+.04,{color:16777215});let f=[t.wb/2,-t.wb/2];for(let e of[-1,1])for(let r of f){let i=qh(e*(n-.1),t.wr,r).multiply(Kh(Math.PI/2));a.pushMatrix(i),a.cylinder(t.wr,t.wr,.23,18,{color:Uh}),a.popMatrix(),a.pushMatrix(qh(e*(n-.1+e*.005),t.wr,r).multiply(Kh(Math.PI/2))),a.cylinder(t.wr*.66,t.wr*.66,.235,12,{color:Wh}),a.popMatrix();let o=e*(n+.004),s=a.vertex(o,t.wr,r,e,0,0,0,0,[.02,.02,.02]),c=[];for(let n=0;n<=12;n++){let i=n/12*Math.PI;c.push(a.vertex(o,t.wr+Math.sin(i)*(t.wr+.06),r+Math.cos(i)*(t.wr+.08),e,0,0,0,0,[.02,.02,.02]))}for(let t=0;t<12;t++)e>0?a.tri(s,c[t+1],c[t]):a.tri(s,c[t],c[t+1])}a.box(-n*.88,t.y0-.02,c-.16,n*.88,t.y0+.24,c+.03,{color:Hh}),a.box(-n*.88,t.y0-.02,-c-.03,n*.88,t.y0+.24,-c+.16,{color:Hh}),a.box(-n*.34,t.y0+.26,c-.04,n*.34,t.y0+.44,c+.02,{color:Hh}),a.box(-.26,t.y0+.02,c+.03,.26,t.y0+.13,c+.045,{color:Gh}),a.box(-.26,t.y0+.1,-c-.045,.26,t.y0+.21,-c-.03,{color:Gh});for(let e of[-1,1])r.box(n*.8*e-.09+e*.1,t.belt+.05,t.cabFront-.25,n*.8*e+.09+e*.1,t.belt+.2,t.cabFront-.08,{color:16777215});for(let e of[-1,1])o.box(e*n*.62-.16,t.bonnet-.16,c-.06,e*n*.62+.16,t.bonnet-.03,c+.02,{color:16777215}),s.box(e*n*.68-.17,t.tail-.2,-c-.03,e*n*.68+.17,t.tail-.06,-c+.04,{color:16777215});return e===`taxi`&&o.box(-.28,t.roof+.05,-.15,.28,t.roof+.2,.15,{color:16777215}),{paint:r.build(),glass:i.build(),trim:a.build(),head:o.build(),tail:s.build(),spec:t}}function Zh(){let e={L:5.4,W:2,y0:.28,belt:1.15,roof:2.35,wb:3.3,wr:.36},t=e.W/2,n=e.L/2,r=new $d,i=new $d,a=new $d,o=new $d,s=new $d,c=[{z:-n,top:2.25,w:.96,y0:e.y0+.02},{z:-n+.1,top:e.roof,w:1,y0:e.y0},{z:.6,top:e.roof,w:1,y0:e.y0},{z:1.2,top:e.roof-.06,w:1,y0:e.y0},{z:1.75,top:1.75,w:.98,y0:e.y0},{z:2.35,top:1.05,w:.95,y0:e.y0+.02},{z:n,top:.72,w:.9,y0:e.y0+.1}];r.loft(c.map(e=>({z:e.z,loop:Jh(t*e.w,e.y0,e.top,{r:.12,shoulder:.14,crown:.015})})),{color:16777215}),i.quad([-t*.9,1.15,1.62],[t*.9,1.15,1.62],[t*.82,1.9,1.32],[-t*.82,1.9,1.32],{color:16777215});for(let e of[-1,1]){let n=e*(t+.004),r=[[n,1.2,1.55],[n,1.2,.85],[n,1.85,.9],[n,1.85,1.3]];e>0?i.quad(r[1],r[0],r[3],r[2],{color:16777215}):i.quad(r[0],r[1],r[2],r[3],{color:16777215})}let l=[e.wb/2+.2,-e.wb/2+.1];for(let n of[-1,1])for(let r of l)a.pushMatrix(qh(n*(t-.1),e.wr,r).multiply(Kh(Math.PI/2))),a.cylinder(e.wr,e.wr,.24,18,{color:Uh}),a.popMatrix(),a.pushMatrix(qh(n*(t-.1+n*.005),e.wr,r).multiply(Kh(Math.PI/2))),a.cylinder(e.wr*.62,e.wr*.62,.245,12,{color:Wh}),a.popMatrix();a.box(-t*.9,e.y0,n-.16,t*.9,e.y0+.26,n+.03,{color:Hh}),a.box(-t*.9,e.y0,-n-.05,t*.9,e.y0+.24,-n+.1,{color:Hh}),a.box(-.3,e.y0+.02,n+.03,.3,e.y0+.14,n+.045,{color:Gh}),a.box(-.3,e.y0+.3,-n-.055,.3,e.y0+.42,-n-.04,{color:Gh});for(let e of[-1,1])o.box(e*t*.62-.16,.7,n-.05,e*t*.62+.16,.85,n+.02,{color:16777215}),s.box(e*(t-.14)-.06,.55,-n-.03,e*(t-.14)+.06,1.15,-n+.02,{color:16777215});return{paint:r.build(),glass:i.build(),trim:a.build(),head:o.build(),tail:s.build(),spec:e}}function Qh(){let e={L:11.8,W:2.55,y0:.42,roof:3.05,wr:.5},t=e.W/2,n=e.L/2,r=new $d,i=new $d,a=new $d,o=new $d,s=new $d,c=[{z:-n,top:2.7,w:.92},{z:-n+.25,top:e.roof,w:.99},{z:n-1.1,top:e.roof,w:1},{z:n-.3,top:2.75,w:.98},{z:n,top:1.5,w:.94}];r.loft(c.map(n=>({z:n.z,loop:Jh(t*n.w,e.y0,n.top,{r:.16,shoulder:.2,crown:.03})})),{color:16777215});let l=[];for(let e=-n+.7;e<n-2.4;e+=1.75)l.push(e);for(let e of[-1,1]){let n=e*(t+.005);for(let t of l){let r=t+1.5;e>0?i.quad([n,1.05,r],[n,1.05,t],[n,2.35,t],[n,2.35,r],{color:16777215}):i.quad([n,1.05,t],[n,1.05,r],[n,2.35,r],[n,2.35,t],{color:16777215})}}i.quad([-t*.9,.95,n+.012],[t*.9,.95,n+.012],[t*.9,2.55,n-.08],[-t*.9,2.55,n-.08],{color:16777215}),i.quad([t*.85,1.2,-n-.012],[-t*.85,1.2,-n-.012],[-t*.85,2.4,-n+.1],[t*.85,2.4,-n+.1],{color:16777215});for(let n of[-1,1])for(let r of[3.6,-3.1])a.pushMatrix(qh(n*(t-.14),e.wr,r).multiply(Kh(Math.PI/2))),a.cylinder(e.wr,e.wr,.3,18,{color:Uh}),a.popMatrix(),a.pushMatrix(qh(n*(t-.14+n*.01),e.wr,r).multiply(Kh(Math.PI/2))),a.cylinder(e.wr*.62,e.wr*.62,.31,12,{color:Wh}),a.popMatrix();return a.box(-t*.94,.3,n-.2,t*.94,.62,n+.06,{color:Hh}),a.box(-t*.94,.3,-n-.06,t*.94,.62,-n+.2,{color:Hh}),a.box(-t*.6,e.roof,-1.2,t*.6,e.roof+.28,2.4,{color:6974834}),a.box(-.4,.4,n+.04,.4,.5,n+.06,{color:Gh}),o.box(-t*.9,.62,n-.02,-t*.6,.86,n+.03,{color:16777215}),o.box(t*.6,.62,n-.02,t*.9,.86,n+.03,{color:16777215}),o.box(-.7,2.62,n-.12,.7,2.84,n-.08,{color:[1,.55,.1]}),s.box(-t*.88,.9,-n-.01,-t*.66,1.3,-n+.03,{color:16777215}),s.box(t*.66,.9,-n-.01,t*.88,1.3,-n+.03,{color:16777215}),{paint:r.build(),glass:i.build(),trim:a.build(),head:o.build(),tail:s.build(),spec:e}}function $h(){let e={L:28,W:2.4,y0:.55,roof:3.4},t=e.W/2,n=e.L/2,r=new $d,i=new $d,a=new $d,o=new $d,s=new $d,c=[[-n,-n+9.3],[-n+10.15,n-10.15],[n-9.3,n]];c.forEach(([n,o],s)=>{let c=s===2,l=s===0,u=[{z:n,top:l?2.9:e.roof,w:l?.9:1,y0:e.y0},{z:n+(l?.6:.05),top:e.roof,w:1,y0:e.y0},{z:o-(c?.9:.05),top:e.roof,w:1,y0:e.y0},{z:o,top:c?2.25:e.roof,w:c?.9:1,y0:e.y0}];r.loft(u.map(e=>({z:e.z,loop:Jh(t*e.w,e.y0,e.top,{r:.14,shoulder:.18,crown:.05})})),{color:16777215});let d=[];for(let e=n+(l?1:.6);e<o-(c?1.6:.6);e+=1.6)d.push(e);for(let e of[-1,1]){let r=e*(t+.005);for(let t of d){let a=(s===1?Math.abs(t-(n+o)/2)<2.4:s===2?t>n+2&&t<n+4.6:t>o-4.4&&t<o-1.8)?.95:1.12,c=1.4;e>0?i.quad([r,a,t+c],[r,a,t],[r,2.75,t],[r,2.75,t+c],{color:16777215}):i.quad([r,a,t],[r,a,t+c],[r,2.75,t+c],[r,2.75,t],{color:16777215})}}for(let e of[-1,1]){let r=e*(t+.008),i=[.75,.08,.1];e>0?a.quad([r,.72,o],[r,.72,n],[r,1.02,n],[r,1.02,o],{color:i}):a.quad([r,.72,n],[r,.72,o],[r,1.02,o],[r,1.02,n],{color:i})}a.box(-.8,e.roof+.04,n+1.2,.8,e.roof+.36,o-1.2,{color:7040627});for(let r of[n+1.7,o-1.7])a.box(-t*.82,.2,r-.9,t*.82,e.y0+.05,r+.9,{color:1842464})});for(let[n,r]of[[c[0][1],c[1][0]],[c[1][1],c[2][0]]])a.box(-t*.94,e.y0+.08,n,t*.94,e.roof-.1,r,{color:1579292});return a.tube([[-.9,e.roof+.36,-3.6],[0,e.roof+1.3,-3],[.9,e.roof+.36,-3.6]],.03,5,{color:2763824}),a.tube([[-.9,e.roof+.36,-2.4],[0,e.roof+1.3,-3],[.9,e.roof+.36,-2.4]],.03,5,{color:2763824}),a.tube([[-.9,e.roof+1.32,-3],[.9,e.roof+1.32,-3]],.035,5,{color:2763824}),i.quad([-t*.88,1,n+.012],[t*.88,1,n+.012],[t*.88,2.6,n-.7],[-t*.88,2.6,n-.7],{color:16777215}),i.quad([t*.8,1.2,-n-.012],[-t*.8,1.2,-n-.012],[-t*.8,2.6,-n+.4],[t*.8,2.6,-n+.4],{color:16777215}),o.box(-t*.8,.85,n+.005,-t*.55,1.08,n+.05,{color:16777215}),o.box(t*.55,.85,n+.005,t*.8,1.08,n+.05,{color:16777215}),o.box(-.6,2.62,n-.85,.6,2.86,n-.8,{color:[1,.55,.1]}),s.box(-t*.8,.85,-n-.02,-t*.55,1.15,-n+.03,{color:16777215}),s.box(t*.55,.85,-n-.02,t*.8,1.15,-n+.03,{color:16777215}),{paint:r.build(),glass:i.build(),trim:a.build(),head:o.build(),tail:s.build(),spec:e}}var eg=new Map;function tg(e){if(!eg.has(e)){let t;t=e===`van`?Zh():e===`bus`?Qh():e===`tram`?$h():Xh(e),eg.set(e,t)}return eg.get(e)}function ng(e){let t=tg(e).spec,n=t.W/2,r=t.L/2,i=e===`bus`?.75:e===`tram`?.95:e===`van`?.77:t.bonnet-.1;return{head:[[-n*.62,i,r+.05],[n*.62,i,r+.05]],tail:[[-n*.66,t.tail?t.tail-.14:1,-r-.05],[n*.66,t.tail?t.tail-.14:1,-r-.05]]}}var rg={hatch:{len:4,width:1.76,height:1.5,v0:[10,13],a:1.7,b:2.4,weight:3},sedan:{len:4.7,width:1.84,height:1.45,v0:[11,14],a:1.6,b:2.3,weight:3},suv:{len:4.8,width:1.95,height:1.75,v0:[10,13],a:1.5,b:2.3,weight:2},van:{len:5.4,width:2,height:2.3,v0:[9,12],a:1.2,b:2,weight:1},taxi:{len:4.7,width:1.84,height:1.45,v0:[11,14],a:1.7,b:2.4,weight:1.1},bus:{len:11.8,width:2.55,height:3.1,v0:[8,10],a:1,b:1.7,weight:.5},tram:{len:28,width:2.4,height:3.4,v0:[9,11],a:.9,b:1.4,weight:0}},ig=[11545130,2771594,15263972,1974050,9080208,3107402,6961798,13617592,3817286,11033130,4881050],ag=[13120554,2779824,3111498],og=14,sg=1,cg=class{constructor(e,t=Au()){this.rng=e,this.lanes=t,this.vehicles=[],this.pending=new Map(t.map(e=>[e.id,0]))}makeVehicle(e){let t=this.rng,n;n=e.kind===`tram`?`tram`:t.weighted(Object.entries(rg).filter(([e])=>e!==`tram`).map(([e,t])=>({w:t.weight,k:e}))).k;let r=rg[n],i=n===`taxi`?15251488:n===`bus`?t.pick(ag):n===`tram`?14474452:t.pick(ig);return{id:sg++,type:n,lane:e,s:0,v:0,len:r.len,width:r.width,height:r.height,v0:t.range(r.v0[0],r.v0[1]),a:r.a,b:r.b,T:t.range(1.2,1.6),s0:2,acc:0,brake:!1,color:i,seed:t.next()}}populate(){let e=this.rng;for(let t of this.lanes){let n=t.kind===`tram`,r=e.range(10,n?120:30);for(;;){let i=this.makeVehicle(t);if(r+=i.len,r>t.length-5)break;i.s=r,i.v=i.v0*e.range(.6,.95),this.vehicles.push(i),r+=n?e.range(170,260):e.range(14,46)}}}update(e,t){let n=e>.1?Math.ceil(e/.1):1,r=e/n;for(let e=0;e<n;e++)this.step(r,t)}step(e,t){let n=new Map(this.lanes.map(e=>[e.id,[]]));for(let e of this.vehicles)n.get(e.lane.id).push(e);for(let r of this.lanes){let i=n.get(r.id).sort((e,t)=>t.s-e.s);for(let n=0;n<i.length;n++){let a=i[n],o=i[n-1],s=1/0,c=0;o&&(s=o.s-o.len-a.s,c=a.v-o.v);for(let e of r.stops){let n=e.s-a.s;if(n<-.5)continue;let r=t.car(e.group),i=r===`red`;r===`yellow`&&(i=a.v*a.v/6<=n),i&&n<s&&(s=n,c=a.v)}let l=a.a*(1-(a.v/a.v0)**4);if(s<1/0){let e=a.s0+Math.max(0,a.v*a.T+a.v*c/(2*Math.sqrt(a.a*a.b)));l-=a.a*(e/Math.max(s,.1))**2}a.acc=Math.max(l,-9),a.v=Math.max(0,a.v+a.acc*e),a.s+=a.v*e,a.brake=a.acc<-.8||a.v<.3}}for(let e=this.vehicles.length-1;e>=0;e--){let t=this.vehicles[e];t.s-t.len>t.lane.length+5&&(this.vehicles.splice(e,1),this.pending.set(t.lane.id,this.pending.get(t.lane.id)+1))}for(let e of this.lanes)for(;this.pending.get(e.id)>0;){let t=1/0;for(let n of this.vehicles)n.lane===e&&(t=Math.min(t,n.s-n.len));if(t<og+(e.kind===`tram`?60:0))break;let n=this.makeVehicle(e);n.s=0,n.v=n.v0*.8,this.vehicles.push(n),this.pending.set(e.id,this.pending.get(e.id)-1)}}},lg=[{main:`green`,cross:`red`,dur:30},{main:`yellow`,cross:`red`,dur:3},{main:`red`,cross:`red`,dur:3},{main:`red`,cross:`green`,dur:16},{main:`red`,cross:`yellow`,dur:3},{main:`red`,cross:`red`,dur:3}],ug=lg.reduce((e,t)=>e+t.dur,0),dg=5,fg=class{constructor(e=0){this.t=(e%ug+ug)%ug,this.locate()}update(e){this.t=(this.t+e)%ug,this.locate()}locate(){let e=this.t;for(let t=0;t<lg.length;t++){if(e<lg[t].dur){this.index=t,this.into=e;return}e-=lg[t].dur}this.index=lg.length-1,this.into=lg[this.index].dur}get phase(){return lg[this.index]}car(e){return this.phase[e]}walk(e){return this.phase[e]===`green`?this.timeLeft()<=dg?`flash`:`walk`:`stop`}timeLeft(){return this.phase.dur-this.into}},pg=[`hatch`,`sedan`,`suv`,`van`,`taxi`,`bus`,`tram`],mg={hatch:70,sedan:70,suv:60,van:30,taxi:24,bus:12,tram:8},hg=[11545130,2771594,15263972,1974050,9080208,3107402,6961798,13617592,3817286,11033130,4881050,8003370],gg=48,_g=[4.8,4.4,3.6],vg=[.12,.12,.12],yg=new G,bg=new Rt,xg=new gn,Sg=new H,Cg=new H(1,1,1),wg=new K,Tg=new H,Eg=class{constructor({scene:e,rng:t,lightMap:n,glow:r}){this.scene=e,this.rng=t,this.lightMap=n,this.glow=r,this.signals=new fg(4),this.model=new cg(t),this.makeMaterials(),this.meshes={};for(let e of pg)this.meshes[e]=this.makeMeshes(e);this.staticCount=Object.fromEntries(pg.map(e=>[e,0])),this.placeParked(),this.model.populate(),this.makeEmitters(),this.lightsOn=!1}makeMaterials(){let e=(e,t={})=>Cf(e,t);this.mat={paint:e(new za({color:16777215,vertexColors:!0,metalness:.45,roughness:.32,clearcoat:.6,clearcoatRoughness:.12})),carGlass:e(new Ra({color:725013,roughness:.06,metalness:.35}),{light:!1}),transitGlass:e(new Ra({color:1317408,roughness:.1,metalness:.2,emissive:16767392,emissiveIntensity:.1}),{light:!1}),trim:e(new Ra({vertexColors:!0,roughness:.55,metalness:.3})),lamp:e(new Yr({color:16777215}),{light:!1})}}makeMeshes(e){let t=tg(e),n=mg[e],r=e===`bus`||e===`tram`,i=(e,t,{color:r=!1,shadow:i=!1}={})=>{let a=new yi(e,t,n);return a.instanceMatrix.setUsage($e),a.frustumCulled=!1,a.castShadow=i,a.receiveShadow=i,a.layers.enable(1),a.count=0,r&&(a.setColorAt(0,wg.setRGB(1,1,1)),a.instanceColor.setUsage($e)),this.scene.add(a),a};return{paint:i(t.paint,this.mat.paint,{color:!0,shadow:!0}),glass:i(t.glass,r?this.mat.transitGlass:this.mat.carGlass),trim:i(t.trim,this.mat.trim,{shadow:!0}),head:i(t.head,this.mat.lamp,{color:!0}),tail:i(t.tail,this.mat.lamp,{color:!0})}}setInstance(e,t,n,r,i,a){let o=this.meshes[e];for(let e of[`paint`,`glass`,`trim`,`head`,`tail`])o[e].setMatrixAt(t,n);o.paint.setColorAt(t,wg.setHex(r)),o.head.setColorAt(t,wg.setRGB(i[0],i[1],i[2])),o.tail.setColorAt(t,wg.setRGB(a[0],a[1],a[2]))}commit(e,t){let n=this.meshes[e];for(let e of[`paint`,`glass`,`trim`,`head`,`tail`])n[e].count=t,n[e].instanceMatrix.needsUpdate=!0;n.paint.instanceColor.needsUpdate=!0,n.head.instanceColor.needsUpdate=!0,n.tail.instanceColor.needsUpdate=!0}placeParked(){let e=this.rng,t=(t,n,r,i)=>{let a=this.staticCount[t]++;bg.setFromEuler(xg.set(0,i,0)),yg.compose(Sg.set(n,0,r),bg,Cg),this.setInstance(t,a,yg,e.pick(hg),[.1,.1,.1],[.1,.01,.01])},n=()=>e.weighted([{w:3,t:`hatch`},{w:3,t:`sedan`},{w:2,t:`suv`},{w:.8,t:`van`},{w:.4,t:`taxi`}]).t,r=su.find(e=>e.id===`major`),i=[],a=Y.zMin+20;for(let e of[...su].sort((e,t)=>e.z-t.z))i.push([a,e.z-e.roadHalf-14]),a=e.z+e.roadHalf+14;i.push([a,Y.zMax-40]);for(let[r,a]of i)for(let i of[-1,1])for(let o=r+6;o<a;o+=6.2)e.chance(.5)&&t(n(),i*7.4+e.range(-.15,.15),o+e.range(-.4,.4),(i>0?Math.PI:0)+e.range(-.03,.03));for(let i of[-1,1])for(let a of[-1,1])for(let o=Y.kerbX+12;o<r.extent-20;o+=6.2)e.chance(.45)&&t(n(),a*o,r.z+i*4.7+e.range(-.12,.12),i>0?Math.PI/2:-Math.PI/2);for(let e of pg)this.staticCount[e]&&this.commit(e,this.staticCount[e])}makeEmitters(){this.pool=[];for(let e=0;e<gg;e++){let e={spot:this.lightMap.add({shape:`spot`,x:0,z:0,rot:0,range:24,width:3.2,taper:.1,falloff:1.3,group:nd.VEHICLE,color:[1,.94,.82],intensity:0}),tailPool:this.lightMap.add({shape:`point`,x:0,z:0,radius:4,group:nd.VEHICLE,color:[1,.08,.05],intensity:0}),head:[0,1].map(()=>this.glow.add({pos:[0,-50,0],size:.85,color:[1,.94,.82],intensity:0,group:nd.VEHICLE,minPixels:3})),tail:[0,1].map(()=>this.glow.add({pos:[0,-50,0],size:.55,color:[1,.05,.03],intensity:0,group:nd.VEHICLE,minPixels:2.5}))};this.pool.push(e)}}update(e,t,n){this.signals.update(e),this.model.update(e,this.signals);let r=t.night,i=r>.32||t.overcast>.85;this.mat.transitGlass.emissiveIntensity=.05+.6*Math.min(1,r*1.4+t.overcast*.3);let a={...this.staticCount},o=0,s=n.position;for(let e of this.model.vehicles){let t=ju(e.lane,e.s-e.len/2),n=e.type,r=a[n]++;if(r>=mg[n])continue;let c=n===`tram`||n===`bus`?0:Lt.clamp(-e.acc*.006,-.03,.03);bg.setFromEuler(xg.set(c,t.yaw,0,`YXZ`)),yg.compose(Sg.set(t.x,0,t.z),bg,Cg);let l=i?_g:vg,u=e.brake?[5,.22,.2]:i?[.9,.05,.04]:[.1,.012,.012];this.setInstance(n,r,yg,e.color,l,u);let d=Math.hypot(t.x-s.x,t.z-s.z);if(o<gg){let r=this.pool[o++],a=d<260,s=ng(n),c=Math.sin(t.yaw),l=Math.cos(t.yaw),u=Math.cos(t.yaw),f=-Math.sin(t.yaw);for(let n=0;n<2;n++){let o=s.head[n],d=s.tail[n];Tg.set(t.x+u*o[0]+c*o[2],o[1],t.z+f*o[0]+l*o[2]),this.glow.set(r.head[n],Tg.x,Tg.y,Tg.z,a&&i?3.2:0),Tg.set(t.x+u*d[0]+c*d[2],d[1],t.z+f*d[0]+l*d[2]),this.glow.set(r.tail[n],Tg.x,Tg.y,Tg.z,a?e.brake?3.2:i?.55:.05:0)}let p=Math.PI/2-t.yaw,m=n===`tram`?30:24;this.lightMap.set(r.spot,{x:t.x+c*(e.len/2),z:t.z+l*(e.len/2),rot:p,range:m,intensity:a&&i?.85:0}),this.lightMap.set(r.tailPool,{x:t.x-c*(e.len/2+1.2),z:t.z-l*(e.len/2+1.2),intensity:a?e.brake?.9:i?.22:0:0})}}for(;o<gg;o++){let e=this.pool[o];this.lightMap.set(e.spot,{intensity:0}),this.lightMap.set(e.tailPool,{intensity:0});for(let t of[...e.head,...e.tail])this.glow.set(t,0,-50,0,0)}for(let e of pg)this.commit(e,Math.min(a[e],mg[e]));this.lightsOn=i}trams(){return this.model.vehicles.filter(e=>e.type===`tram`).map(e=>({...ju(e.lane,e.s-e.len/2),v:e.v,lane:e.lane.id}))}},Dg=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
    gl_Position = p.xyww;
  }
`,Og=`
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;
  uniform float uGlowI;
  uniform vec3 uSunColor;
  uniform float uSunI;
  uniform vec3 uMoonColor;
  uniform float uMoonVis;
  uniform vec3 uFogColor;
  uniform vec3 uFogGlow;
  uniform float uCloud;
  uniform float uOvercast;
  uniform float uStorm;
  uniform float uFogAmt;
  uniform float uStars;
  uniform float uFlash;
  uniform float uTime;
  uniform float uBake;
  uniform vec2 uOffset;
  varying vec3 vDir;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float hash31(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm(vec2 p) {
    float s = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      s += a * vnoise(p);
      p = p * 2.03 + 17.1;
      a *= 0.5;
    }
    return s / 0.96875;
  }

  vec3 stars(vec3 d) {
    vec3 p = d * 260.0;
    vec3 ip = floor(p);
    vec3 fp = fract(p) - 0.5;
    float h = hash31(ip);
    float on = step(0.992, h);
    vec3 off = (vec3(hash31(ip + 1.7), hash31(ip + 3.1), hash31(ip + 5.3)) - 0.5) * 0.7;
    float dist = length(fp - off);
    float tw = 0.75 + 0.25 * sin(uTime * (1.5 + 3.0 * h) + h * 40.0);
    float b = on * smoothstep(0.34, 0.0, dist) * tw * (0.4 + 1.6 * fract(h * 91.7));
    vec3 tint = mix(vec3(0.7, 0.82, 1.0), vec3(1.0, 0.9, 0.75), fract(h * 37.1));
    return tint * b * 1.6;
  }

  vec3 moonDisc(vec3 d) {
    float m = dot(d, uMoonDir);
    const float R = 0.0279;
    float ang = acos(clamp(m, -1.0, 1.0));
    float disc = smoothstep(R, R * 0.94, ang);
    vec3 t = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)) + vec3(1e-5, 0.0, 0.0));
    vec3 b = cross(t, uMoonDir);
    vec2 q = vec2(dot(d, t), dot(d, b)) / R;
    float r2 = dot(q, q);
    vec3 n = vec3(q, sqrt(max(1.0 - r2, 0.0)));
    vec3 L = normalize(vec3(-0.75, 0.35, 0.55));
    float lit = smoothstep(-0.05, 0.28, dot(n, L));
    float maria = fbm(q * 2.4 + 3.0);
    float tex = mix(0.5, 1.0, smoothstep(0.38, 0.62, maria));
    vec3 surf = uMoonColor * (lit * tex * 3.2 + 0.05);
    float halo = exp(-ang * 30.0) * 0.5 + exp(-ang * 8.0) * 0.08;
    return (surf * disc + uMoonColor * halo) * uMoonVis;
  }

  // Returns rgb = cloud colour, a = coverage.
  vec4 cloudLayer(vec3 d) {
    if (d.y < 0.005) return vec4(0.0);
    vec2 uv = d.xz / (d.y + 0.16) * 0.42 + uOffset;
    float cover = clamp(uCloud, 0.0, 1.0);
    float thr = mix(0.78, 0.30, cover);
    vec2 toSun = normalize(uSunDir.xz + vec2(1e-4)) * 0.035;
    float f = fbm(uv * 1.15) + (fbm(uv * 3.7 + 11.0) - 0.5) * 0.22;
    float fl = fbm((uv + toSun) * 1.15) + (fbm((uv + toSun) * 3.7 + 11.0) - 0.5) * 0.22;
    float dens = smoothstep(thr, thr + 0.18, f);
    float densL = smoothstep(thr, thr + 0.18, fl);
    float thick = smoothstep(thr, thr + 0.5, f);
    float shade = clamp(0.5 + (dens - densL) * 1.7 - thick * 0.28 * (0.5 + uOvercast), 0.0, 1.0);

    vec3 amb = mix(uHorizon, uZenith, 0.35);
    vec3 shadowCol = amb * mix(0.5, 0.85, uOvercast) + 0.004;
    float facing = pow(max(dot(normalize(d.xz + vec2(1e-4)), normalize(uSunDir.xz + vec2(1e-4))), 0.0), 2.0);
    vec3 litCol = amb * 1.05 + uSunColor * uSunI * 0.2 + uGlow * uGlowI * facing * exp(-d.y * 1.6) * 0.9;
    vec3 c = mix(shadowCol, litCol, shade);
    c *= 1.0 - 0.45 * uStorm;
    c += uMoonColor * uMoonVis * 0.06 * (0.4 + shade);
    c += vec3(0.7, 0.8, 1.0) * uFlash * 1.6;
    // Distant clouds sink into the horizon haze.
    float haze = exp(-d.y * 5.0);
    c = mix(c, uHorizon + uGlow * uGlowI * facing * 0.5, haze * 0.65);
    return vec4(c, dens * smoothstep(0.005, 0.16, d.y));
  }

  void main() {
    vec3 d = normalize(vDir);
    float y = d.y;
    float up = clamp(y, 0.0, 1.0);

    vec3 col = mix(uHorizon, uZenith, pow(up, 0.45));

    // Sunset flare: strongest low on the sun side of the horizon.
    vec3 sh = normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + vec3(1e-4));
    vec3 dh = normalize(vec3(d.x, 0.0, d.z) + vec3(1e-4));
    float az = max(dot(dh, sh), 0.0);
    float lowBand = exp(-max(y, 0.0) * 5.0);
    float toSun = max(dot(d, uSunDir), 0.0);
    float flare = (0.55 * pow(az, 6.0) + 0.25 * pow(az, 2.0)) * lowBand + 0.5 * pow(toSun, 12.0) * exp(-max(y, 0.0) * 2.0);
    col += uGlow * uGlowI * flare;
    col += uSunColor * uSunI * 0.05 * pow(toSun, 20.0);

    // Below the horizon the ground plane and fog take over; keep the dome matching the fog colour.
    col = mix(col, uFogColor, smoothstep(0.0, -0.06, y));
    col = mix(col, uFogColor, uFogAmt * 0.88 * (1.0 - 0.5 * up));

    vec4 cl = cloudLayer(d);
    vec3 sky = col;

    if (uBake < 0.5) {
      float horizonFade = smoothstep(0.0, 0.3, y);
      sky += stars(d) * uStars * horizonFade * (1.0 - cl.a);
      sky += moonDisc(d) * (1.0 - cl.a * 0.92) * (1.0 - uFogAmt);
      float sunAng = acos(clamp(toSun, -1.0, 1.0));
      float disc = smoothstep(0.0165, 0.0135, sunAng);
      float halo = exp(-sunAng * 34.0) * 0.6 + exp(-sunAng * 9.0) * 0.12;
      float vis = smoothstep(-0.01, 0.025, y) * (1.0 - cl.a * 0.94) * (1.0 - uFogAmt * 0.9);
      sky += uSunColor * (disc * 55.0 + halo * (1.0 + uSunI)) * vis * step(0.02, uSunI + uGlowI * 0.3);
    }
    sky = mix(sky, cl.rgb, cl.a);
    // Near the horizon the dome must match the fog the ground fades into, clouds or not.
    vec3 fogCol = uFogColor + uFogGlow * (0.55 * pow(az, 6.0) + 0.25 * pow(az, 2.0) + 0.5 * pow(az, 12.0));
    sky = mix(sky, fogCol, exp(-max(y, 0.0) * 9.0) * 0.92);
    gl_FragColor = vec4(sky, 1.0);
  }
`,kg=class{constructor(){this.uniforms={uSunDir:{value:new H(0,1,0)},uMoonDir:{value:new H(0,1,0)},uZenith:{value:new K},uHorizon:{value:new K},uGlow:{value:new K},uGlowI:{value:0},uSunColor:{value:new K},uSunI:{value:0},uMoonColor:{value:new K},uMoonVis:{value:0},uFogColor:{value:new K},uFogGlow:{value:new K},uCloud:{value:.2},uOvercast:{value:0},uStorm:{value:0},uFogAmt:{value:0},uStars:{value:0},uFlash:{value:0},uTime:{value:0},uBake:{value:0},uOffset:{value:new V}},this.material=new Ia({uniforms:this.uniforms,vertexShader:Dg,fragmentShader:Og,side:1,depthWrite:!1,fog:!1}),this.mesh=new si(new Da(1,40,20),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.cloudOffset=new V(3.1,7.7)}update(e,t,n,r){let i=this.uniforms;i.uSunDir.value.copy(e.sunDir),i.uMoonDir.value.copy(e.moonDir),i.uZenith.value.copy(e.zenith),i.uHorizon.value.copy(e.horizon),i.uGlow.value.copy(e.glow),i.uGlowI.value=e.glowI,i.uSunColor.value.copy(e.sunColor),i.uSunI.value=e.sunIntensity,i.uMoonColor.value.copy(e.moonColor),i.uMoonVis.value=du(-2,6,e.moonElev/hu)*(.2+.8*e.night),i.uFogColor.value.copy(e.fogColor),i.uFogGlow.value.copy(e.glow).multiplyScalar(e.glowI*(1-.88*t.fog)),i.uCloud.value=t.cloud,i.uOvercast.value=e.overcast,i.uStorm.value=t.storm,i.uFogAmt.value=t.fog,i.uStars.value=e.stars,i.uFlash.value=t.flash,i.uTime.value=r;let a=.002+.02*t.wind;this.cloudOffset.x+=a*n,this.cloudOffset.y+=a*.35*n,i.uOffset.value.copy(this.cloudOffset)}},Ag=new H,jg=()=>new Promise(e=>setTimeout(e,0)),Mg=class{constructor(e,t={}){this.gfx=e,this.seed=t.seed??cu.seed,this.weather=new Wd(t.weather??cu.weather,!0),this.day=new Pm(t.hours??cu.hours,t.timeSpeed??cu.timeSpeed),this.sky=new kg,this.sky.mesh.layers.enable(1),e.scene.add(this.sky.mesh),this.atmosphere=new xp(e,this.sky),this.focus=new H,this.state=this.day.update(0,this.weather)}async build(e=()=>{}){let t=new Gd(this.seed);e(`loader.textures`),await jg(),this.textures=gp(this.seed),this.atlas=new Bf,kd(()=>this.atlas.draw()),this.materials=Ef(this.textures,this.atlas),this.batch=new nf(this.materials,{chunk:Y.chunk,zMin:Y.zMin},wf),this.batch.atlas=this.atlas,e(`loader.layout`),await jg(),this.ground=new zm(this.batch,t),this.ground.build(),this.lots=Du(t),e(`loader.buildings`),await jg(),this.buildings=new xm(this.batch,this.gfx.scene),this.buildings.build(this.lots),this.backdrop=new Sp(this.gfx.scene,this.seed),this.backdrop.build(),e(`loader.props`),await jg(),this.glow=new cf(this.gfx.scene);let n=this.gfx.lightMap;this.lamps=new Nh({batch:this.batch,lightMap:n,glow:this.glow,rng:t}),this.lamps.build(),this.wires=new Vh(this.gfx.scene),this.wires.build(this.lamps.pairs,Y.kerbX+1.25),this.trees=new zh({batch:this.batch,rng:t}),this.trees.build(this.lamps.pairs),this.furniture=new kh({batch:this.batch,rng:t,lightMap:n,glow:this.glow}),this.furniture.build(this.lamps.pairs),this.trafficLights=new Lh({batch:this.batch,lightMap:n,glow:this.glow,materials:this.materials}),this.trafficLights.build(),this.addShopLights(n),e(`loader.life`),await jg(),this.traffic=new Eg({scene:this.gfx.scene,rng:t,lightMap:n,glow:this.glow}),this.pedestrians=new sh({scene:this.gfx.scene,rng:t,count:Math.round(70*this.gfx.q.particles)+10}),this.cafes=new wh({batch:this.batch,rng:t,lightMap:n,glow:this.glow,pedestrians:this.pedestrians}),this.cafes.build(this.buildings.shops),this.rain=new bh(this.gfx.scene,Math.round(9e3*this.gfx.q.particles)),this.buildAmbience(t),this.meshes=this.batch.flush(this.gfx.scene),e(`loader.ready`)}buildAmbience(e){let t=this.gfx.q.particles;this.leaves=new ph(this.gfx.scene,Math.round(300*t)+30);let n=this.buildings.chimneys.filter(()=>e.chance(.55)),r=this.ground.manholes.filter(()=>e.chance(.45)).map(e=>[e.x,.05,e.z]);this.plumes=new _h(this.gfx.scene,n,r),this.birds=new uh(this.gfx.scene);let i=[...this.buildings.beacons,...this.backdrop.beacons];this.beacons=i.map((e,t)=>({p:e,phase:t*.37%1.9,id:this.glow.add({pos:[...e],size:.75,color:[1,.07,.04],intensity:0,group:nd.MISC,minPixels:3.2})}))}updateBeacons(e){for(let t of this.beacons){let n=(e+t.phase)%1.9/1.9,r=n<.2?Math.sin(n/.2*Math.PI):0;this.glow.set(t.id,t.p[0],t.p[1],t.p[2],.25+3.2*r)}}addShopLights(e){for(let t of this.buildings.shops){let[n,r]=t.normal,i=t.center[0]+n*1.7,a=t.center[2]+r*1.7;e.add({shape:`rect`,x:i,z:a,rot:Math.atan2(-n,r),hw:t.width/2+1.7,hd:2.5,coreW:Math.max(t.width/2-.3,.1),coreD:.4,group:nd.SHOP,color:t.kind===2?[1,.7,.4]:[1,.84,.6],intensity:.85})}}blocked(e,t,n=1){let r=(r,i=0)=>Math.hypot(r.x-e,r.z-t)<n+i+(r.r??0);return this.trees.spots.some(e=>r(e,.4))||this.lamps.posts.some(e=>r(e))||this.furniture.solids.some(e=>r(e))}setTime(e){this.day.set(e),this.state=this.day.update(0,this.weather),this.atmosphere.snap(this.state)}setWeather(e,t=!1){this.weather.set(e,t)}update(e,t){this.weather.update(e);let n=this.day.update(e,this.weather);if(this.state=n,X.time.value+=e,X.hours.value=n.hours,X.night.value=n.night,X.windowLit.value=n.windowLit,X.wetness.value=this.weather.wetness,X.rain.value=this.weather.rain,X.wind.value=this.weather.wind,X.sunDir.value.copy(n.sunDir),X.sunColor.value.copy(n.sunColor),X.skyHorizon.value.copy(n.horizon),X.skyZenith.value.copy(n.zenith),Math.hypot(n.sunDir.x,n.sunDir.z)>.05&&X.sunH.value.set(n.sunDir.x,0,n.sunDir.z).normalize(),X.fogGlow.value.copy(n.glow).multiplyScalar(n.glowI*(1-.88*this.weather.fog)),this.materials){this.materials.sign.emissiveIntensity=.3+2.4*n.night,this.materials.clock.emissiveIntensity=.12+1.9*n.night,this.materials.lampGlass.emissiveIntensity=.04+14*n.night,this.buildings?.landmark.update(n.hours);let e=+(n.hours>=7&&n.hours<22.5)*(.22+.78*du(.05,.5,n.night)),t=this.gfx.lightMap;t.setGroupGain(nd.LAMP,n.night),t.setGroupGain(nd.SHOP,e),t.setGroupGain(nd.NEON,n.night),t.setGroupGain(nd.MISC,1),t.setGroupGain(nd.VEHICLE,1),t.setGroupGain(nd.SIGNAL,1);let r=this.glow;r&&(r.setGroupGain(nd.LAMP,n.night),r.setGroupGain(nd.SHOP,e),r.setGroupGain(nd.NEON,n.night),r.setGroupGain(nd.MISC,1),r.setGroupGain(nd.VEHICLE,1),r.setGroupGain(nd.SIGNAL,1),r.update(n.fogDensity))}this.traffic&&(this.traffic.update(e,n,t),this.trafficLights.update(this.traffic.signals),this.pedestrians.update(e,this.traffic.signals,this.weather.rain)),this.rain?.update(t,n,this.weather),this.leaves&&(this.leaves.update(t,n,this.weather),this.plumes.update(n),this.birds.update(n,this.weather),this.updateBeacons(X.time.value)),this.sky.update(n,this.weather,e,X.time.value),t.getWorldDirection(Ag),this.focus.copy(t.position).addScaledVector(Ag,this.gfx.q.shadowRange*.35),this.focus.y=0,this.atmosphere.update(n,this.weather,this.focus,e),this.atmosphere.requestShadowUpdate()}fx(){let e=this.state,t=this.weather.flash;return{exposure:e.exposure*(1+t*.8),bloom:{strength:e.bloom.strength*(1+t),threshold:e.bloom.threshold,radius:e.bloom.radius},time:X.time.value}}},Ng={"loader.textures":.08,"loader.layout":.28,"loader.buildings":.5,"loader.props":.72,"loader.life":.9,"loader.ready":1},Pg=[0,1,15,60,300],Fg=class{constructor(e,t){this.stage=e,jd();let n=new URLSearchParams(location.search);this.params=n,this.settings={quality:n.get(`q`)??bd(`quality`,`high`),adaptive:bd(`adaptive`,!0),reflections:bd(`reflections`,!0),fps:bd(`fps`,!1),sound:!1},this.ui=new zd(t,this.handlers());try{this.gfx=new gd(e,this.settings.quality)}catch{this.ui.showError(`error.webgl`);return}this.gfx.setAdaptive(this.settings.adaptive),this.gfx.reflectionWanted=this.settings.reflections,this.gfx.resize(),this.input=new Hu(this.gfx.domElement),this.audio=new vd,this.world=new Mg(this.gfx,{hours:n.has(`t`)?parseFloat(n.get(`t`)):void 0,weather:n.get(`weather`)??void 0,seed:n.has(`seed`)?parseInt(n.get(`seed`),10):void 0}),this.camera=this.gfx.camera,this.camera.position.set(2.6,1.75,118),this.camera.lookAt(-1,6,-150),this.world.day.onHour=e=>this.audio.hourBell(e,this.camera.position),this.rig=new Vu(this.camera,this.input,this.world),this.rig.onMode=e=>this.ui.setMode(e),this.speedIndex=Pg.indexOf(cu.timeSpeed),this.fps=60,this.introFade=1,this.entered=!1,this.built=!1,this.bindShortcuts(),this.syncUi(),n.get(`ui`)===`0`&&this.ui.setHidden(!0,!0),this.ready=this.world.build(e=>this.ui.setProgress(Ng[e]??0,e)).then(()=>{this.rig.ready(),this.applyCameraParam(),this.built=!0,this.frame(.016),this.ui.showEnter(()=>{this.entered=!0,bd(`sound`,!0)&&this.setSound(!0,!0)}),n.get(`enter`)===`1`&&this.enter()})}applyCameraParam(){let e=this.params.get(`cam`);e&&e!==`tour`&&this.rig.setMode(e===`walk`?`walk`:`fly`)}enter(){this.entered=!0,this.ui.hideLoader(),bd(`sound`,!0)&&this.setSound(!0,!0)}handlers(){return{onTime:e=>{this.world.setTime(e)},onSpeed:e=>this.setSpeed(e),onWeather:e=>this.setWeather(e),onMode:e=>this.rig.setMode(e),onQuality:e=>this.setQuality(e),onSound:()=>this.setSound(!this.settings.sound),onScreenshot:()=>this.screenshot(),onFullscreen:()=>this.fullscreen(),onSwitch:e=>this.toggle(e)}}bindShortcuts(){let e=this.input;e.on(`Digit1`,()=>this.rig.setMode(`tour`)),e.on(`Digit2`,()=>this.rig.setMode(`walk`)),e.on(`Digit3`,()=>this.rig.setMode(`fly`)),e.on(`KeyT`,()=>this.setSpeed(Pg[(Pg.indexOf(this.speed())+1)%Pg.length])),e.on(`KeyR`,()=>{let e=Hd.indexOf(this.world.weather.preset);this.setWeather(Hd[(e+1)%Hd.length])}),e.on(`KeyM`,()=>this.setSound(!this.settings.sound)),e.on(`KeyP`,()=>this.screenshot()),e.on(`KeyH`,()=>this.ui.toggleHidden()),e.on(`KeyF`,()=>this.fullscreen())}syncUi(){this.ui.setQuality(this.settings.quality),this.ui.setSwitch(`adaptive`,this.settings.adaptive),this.ui.setSwitch(`reflections`,this.settings.reflections),this.ui.setSwitch(`fps`,this.settings.fps),this.ui.showFps(this.settings.fps),this.ui.setMode(`tour`),this.ui.setWeather(this.world?.weather.preset??cu.weather),this.ui.setSpeed(cu.timeSpeed,!1),this.ui.setSound(!1,!0)}speed(){return this.world.day.paused?0:this.world.day.speed}setSpeed(e){this.world.day.paused=e===0,e>0&&(this.world.day.speed=e),this.ui.setSpeed(e,e===0)}setWeather(e){this.world.setWeather(e),this.ui.setWeather(e)}setQuality(e){this.settings.quality=e,xd(`quality`,e),this.gfx.setQuality(e),this.ui.setQuality(e)}setSound(e,t=!1){this.settings.sound=e,xd(`sound`,e),this.audio.setEnabled(e),this.ui.setSound(e,t)}toggle(e){let t=this.settings;t[e]=!t[e],xd(e,t[e]),e===`adaptive`&&this.gfx.setAdaptive(t.adaptive),e===`reflections`&&(this.gfx.reflectionWanted=t.reflections,this.gfx.reflection.setEnabled(this.gfx.q.reflection>0&&t.reflections)),e===`fps`&&this.ui.showFps(t.fps),this.ui.setSwitch(e,t[e])}async screenshot(){let e={...this.world.fx(),fade:0},t=await this.gfx.capture(0,e);if(!t)return;let n=document.createElement(`a`),r=new Date,i=e=>String(e).padStart(2,`0`);n.download=`autumn-avenue-${r.getFullYear()}${i(r.getMonth()+1)}${i(r.getDate())}-${i(r.getHours())}${i(r.getMinutes())}${i(r.getSeconds())}.png`,n.href=URL.createObjectURL(t),n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3),this.ui.toast(`toast.saved`)}fullscreen(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.()}frame(e){this.rig.update(e),this.world.update(e,this.camera);let t=this.world.state;this.audio.update(e,this.world,this.camera),this.entered&&(this.introFade=fu(this.introFade,0,2.2,e)),this.fps=fu(this.fps,e>0?1/e:this.fps,2,e),this.ui.update({hours:t.hours,elevation:t.sunElev,fps:this.fps,night:t.night});let n=this.world.fx();n.fade=Math.max(this.rig.mode===`tour`?this.rig.fade:0,this.introFade),this.gfx.render(e,n)}start(){if(!this.gfx)return;let e=performance.now(),t=n=>{this.built&&this.frame(Math.min((n-e)/1e3,.1)),e=n,requestAnimationFrame(t)};requestAnimationFrame(t),document.addEventListener(`visibilitychange`,()=>{e=performance.now(),this.audio.setSuspended?.(document.hidden)})}advance(e,t=1/30){for(let n=0;n<e;n+=t)this.frame(t)}bench(e=60){let t=this.gfx.renderer.getContext(),n=new Uint8Array(4);t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n);let r=performance.now();for(let t=0;t<e;t++)this.frame(1/60);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n),(performance.now()-r)/e}poseShot(e,t=.5,n=.3){let r=this.rig.shots.find(t=>t.name===e);return r?(this.entered=!0,this.introFade=0,r.start?.(this.rig.ctx),r.pose(t,this.rig.ctx,this.rig.pose),this.camera.position.copy(this.rig.pose.pos),this.camera.lookAt(this.rig.pose.look),this.rig.setMode(`fly`,!0),this.camera.fov=r.fov,this.camera.updateProjectionMatrix(),this.world.day.paused=!0,this.advance(n),{name:e,u:t,pos:this.camera.position.toArray().map(e=>+e.toFixed(1))}):null}async shot({t:e,weather:t,cam:n,look:r,settle:i=.5,mode:a=`fly`}={}){return await this.ready,this.entered=!0,this.introFade=0,a!==`tour`&&(this.rig.setMode(a),this.rig.fade=0),e!==void 0&&this.world.setTime(e),t&&this.world.setWeather(t,!0),(t===`clear`||t===`cloudy`)&&(this.world.weather.wetness=0),n&&this.camera.position.set(...n),r&&this.camera.lookAt(...r),(n||r)&&this.rig.setMode(`fly`,!0),this.world.day.paused=!0,this.advance(i,1/30),{...this.gfx.stats,meshes:this.world.meshes.length}}};async function Ig(){try{await Promise.race([Promise.all([document.fonts.load(`600 16px "Inter"`),document.fonts.load(`600 16px "Inter"`,`Ж`),document.fonts.load(`700 48px "Oswald"`),document.fonts.load(`700 48px "Oswald"`,`Ж`),document.fonts.load(`48px "Pacifico"`),document.fonts.load(`48px "Pacifico"`,`Ж`),document.fonts.load(`700 48px "Playfair Display"`),document.fonts.load(`700 48px "Playfair Display"`,`Ж`)]),new Promise(e=>setTimeout(e,2500))])}catch{}let e=new Fg(document.getElementById(`stage`),document.getElementById(`ui`));window.__app=e,e.start()}Ig();