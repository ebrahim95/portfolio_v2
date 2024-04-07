function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CzYL925l.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css","assets/ValueWithRandom-CMhYqy_t.js","assets/AnimationOptions-CBy8R4QE.js","assets/OptionsColor-DYbNcxVL.js","assets/OptionsUtils-CpU2IVr0.js","assets/AnimatableColor-DK3334WL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CR1DujS7.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CzYL925l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
