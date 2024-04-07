function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DeiCSoJN.js","assets/index-CQGpD6Rc.js","assets/index-PytDxsbH.css","assets/index-BLMXGdRv.js","assets/index-D-M60Oiv.js","assets/index-NkS1oGIY.js","assets/index-J3fI0MYp.js","assets/index-DPOsiV3N.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CQGpD6Rc.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DeiCSoJN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BLMXGdRv.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D-M60Oiv.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-NkS1oGIY.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-J3fI0MYp.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DPOsiV3N.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
