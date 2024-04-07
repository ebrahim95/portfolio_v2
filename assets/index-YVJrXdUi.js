function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DNiFnoLu.js","assets/index-CQGpD6Rc.js","assets/index-PytDxsbH.css","assets/OptionsColor-D7QJFLGl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CQGpD6Rc.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DNiFnoLu.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
