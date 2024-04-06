import{_ as e}from"./index-e9DJ_hPP.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-4pB3z5PM.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-4pB3z5PM.js","assets/index-e9DJ_hPP.js","assets/index-B-1N1OFl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
