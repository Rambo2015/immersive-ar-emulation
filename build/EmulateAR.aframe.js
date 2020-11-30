const e=navigator.xr.isSessionSupported.bind(navigator.xr),t=navigator.xr.requestSession.bind(navigator.xr);let n,r,i=!1,s=function(){};async function o(e){return new c(this,e)}async function a(e){return new l(this,e)}class c{constructor(e,{space:t,offsetRay:n}){this.__space=t,this.__offsetRay=n,this.__session=e}cancel(){this.__space=null,this.__offsetRay=null,this.__session=null,this.__canceled=!0}}class u{constructor(e,t,n){this.__transform=new window.XRRigidTransform(t,n),this.__frame=e}getPose(e){const t=r.getOffsetReferenceSpace(this.__transform);return this.__frame.getPose(t,e)}}class l{constructor(e,{space:t,offsetRay:n}){}cancel(){}}function f(){return[]}function m(){i=!1}function d(t){return console.log("Proxied isSessionSupported"),e("immersive-ar"===t?"immersive-vr":t)}let p=function(){};async function g(e,n){if(console.log("Proxied requestSession"),"immersive-ar"!=e)return t(e,n);e="immersive-vr";const r=[];n.optionalFeatures=n.optionalFeatures.filter((function(e){switch(e){case"hit-test":case"lighting-estimation":return r.push(e),!1;default:return!0}}));const s=await t(e,n);return i=!0,s.addEventListener("end",m),r.includes("hit-test")&&function(e){Object.defineProperty(e,"requestHitTestSource",{value:o,configurable:!0}),Object.defineProperty(e,"requestHitTestSourceForTransientInput",{value:a,configurable:!0});const t=e.requestAnimationFrame.bind(e);Object.defineProperty(e,"requestAnimationFrame",{value:function(e){t((function(t,n){Object.defineProperty(n,"getHitTestResultsForTransientInput",{value:f.bind(n),configurable:!0}),Object.defineProperty(n,"getHitTestResults",{value:p.bind(n),configurable:!0}),e(t,n)}))},configurable:!0})}(s),r.includes("lighting-estimation")&&console.log("lighting-estimation is not supported by the immersive-ar emulator"),s}function h({renderer:e,scene:t,environment:o}){const a=t.clone(!1);s=function(t){e.clear(),i&&(e.render(a,t),e.clearDepth())},e.autoClear=!1,e.xr.addEventListener("sessionstart",(function(){var t;t=e.xr.getReferenceSpace(),r=t})),o.traverse((e=>{e.geometry&&e.material&&e.geometry.computeFaceNormals()})),a.add(o),n=o;const c=new THREE.Quaternion,l=new THREE.Quaternion,f=new THREE.Vector3,m=new THREE.Vector3;const d=new THREE.Vector3,g=new THREE.Raycaster;p=function(e){if(!n)return[];const t=this,i=e.__offsetRay?e.__space.getOffsetReferenceSpace(e.__offsetRay):e.__space,s=t.getPose(i,r);return null===s?[]:(d.set(0,0,-1),d.applyQuaternion(s.transform.orientation),g.set(s.transform.position,d),g.intersectObject(n,!0).map((e=>new u(t,e.point,function(e,t){e.normalize(),t.normalize(),f.set(0,1,0),c.setFromUnitVectors(f,e);const n=e.lengthSq(),r=t.dot(e);return m.copy(e).multiplyScalar(-1*r/n).add(t),f.set(0,0,-1),f.applyQuaternion(c),l.setFromUnitVectors(f,m),c.premultiply(l),c.clone()}(e.face.normal,d)))))}}!async function(){navigator.xr.requestSession=g.bind(navigator.xr),navigator.xr.isSessionSupported=d.bind(navigator.xr)}(),window.addEventListener("DOMContentLoaded",(function(){const e=new THREE.GLTFLoader;AFRAME.registerSystem("my-component",{schema:{},init:function(){const t=this.el.renderer,n=this.el.object3D,r=new THREE.Object3D;var i;(i="https://ada.is/immersive-ar-emulation/assets/room.glb",new Promise(((t,n)=>{e.load(i,(function(e){t(e)}),(function(e){}),(function(e){n(e)}))}))).then((({scene:e})=>r.add(e))),h({scene:n,renderer:t,environment:r})},tick(){var e;e=this.el.camera,s(e)}})}));
//# sourceMappingURL=EmulateAR.aframe.js.map