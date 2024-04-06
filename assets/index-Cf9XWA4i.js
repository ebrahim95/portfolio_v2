function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-waWnjArr.js","assets/index-C9l9WNT5.js","assets/index-BhHilHBL.css","assets/OptionsColor-Cb--8hdE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C9l9WNT5.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-waWnjArr.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
