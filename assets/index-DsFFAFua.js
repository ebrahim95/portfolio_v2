function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BB_MUOXR.js","assets/index-C9l9WNT5.js","assets/index-BhHilHBL.css","assets/ValueWithRandom-DtC4dYZy.js","assets/AnimationOptions-D-x9Zmur.js","assets/OptionsColor-Cb--8hdE.js","assets/OptionsUtils-Dg0shcbE.js","assets/AnimatableColor-KuwfCFZG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C9l9WNT5.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BB_MUOXR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
