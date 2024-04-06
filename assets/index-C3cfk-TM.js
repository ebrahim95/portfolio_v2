import{_ as i}from"./index-e9DJ_hPP.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-mBqljLyf.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-mBqljLyf.js","assets/index-e9DJ_hPP.js","assets/index-B-1N1OFl.css","assets/ValueWithRandom-B8Fa1Xpc.js","assets/AnimationOptions-BtuzEnBY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
