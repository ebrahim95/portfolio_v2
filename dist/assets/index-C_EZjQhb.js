function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-Zh0DIamV.js","assets/index-CR1DujS7.js","assets/index-PytDxsbH.css","assets/ValueWithRandom-CMhYqy_t.js","assets/AnimationOptions-CBy8R4QE.js","assets/OptionsColor-DYbNcxVL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CR1DujS7.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-Zh0DIamV.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
