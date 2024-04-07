function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B5LvDuBL.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css","assets/index-DP4XZOlu.js","assets/index-7jXIChaO.js","assets/index-B5d8M2l1.js","assets/index-BHDUqV30.js","assets/index-CDhCj_R-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CR1DujS7.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B5LvDuBL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DP4XZOlu.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-7jXIChaO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B5d8M2l1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BHDUqV30.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CDhCj_R-.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
