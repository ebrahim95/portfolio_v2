import{_ as o}from"./index-e9DJ_hPP.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DIFWAv6a.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DIFWAv6a.js","assets/index-e9DJ_hPP.js","assets/index-B-1N1OFl.css","assets/ValueWithRandom-B8Fa1Xpc.js","assets/AnimationOptions-BtuzEnBY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
