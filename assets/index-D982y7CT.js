function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CDFpHob8.js","assets/index-C9l9WNT5.js","assets/index-BhHilHBL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C9l9WNT5.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CDFpHob8.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
