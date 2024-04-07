function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CC4ha1up.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CR1DujS7.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CC4ha1up.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
