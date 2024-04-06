function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0ORU1HKC.js","assets/index-C9l9WNT5.js","assets/index-BhHilHBL.css","assets/index-DGedxKQB.js","assets/index-BGk-o_UC.js","assets/index-TuFBpfS_.js","assets/index-CBpTeh2P.js","assets/index-7toTCHJF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C9l9WNT5.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-0ORU1HKC.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DGedxKQB.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BGk-o_UC.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-TuFBpfS_.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CBpTeh2P.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-7toTCHJF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
