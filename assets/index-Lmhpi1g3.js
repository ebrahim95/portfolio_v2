function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BuqncnSj.js","assets/index-CQGpD6Rc.js","assets/index-PytDxsbH.css","assets/ValueWithRandom-BA1nJSBA.js","assets/AnimationOptions-ClNNlboZ.js","assets/OptionsColor-D7QJFLGl.js","assets/OptionsUtils-CZ_HFkqV.js","assets/AnimatableColor-DEbEtopY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CQGpD6Rc.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BuqncnSj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
