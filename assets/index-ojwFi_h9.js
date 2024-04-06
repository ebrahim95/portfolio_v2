import{_ as o}from"./index-e9DJ_hPP.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DW1mSePO.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DW1mSePO.js","assets/index-e9DJ_hPP.js","assets/index-B-1N1OFl.css","assets/OptionsColor-QbeEQ_Ck.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
