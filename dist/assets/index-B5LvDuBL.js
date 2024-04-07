function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DlW6BlTW.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CR1DujS7.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DlW6BlTW.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
