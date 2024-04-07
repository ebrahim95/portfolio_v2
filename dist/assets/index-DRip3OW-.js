function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DFG90GyX.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css","assets/OptionsColor-DYbNcxVL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CR1DujS7.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DFG90GyX.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
