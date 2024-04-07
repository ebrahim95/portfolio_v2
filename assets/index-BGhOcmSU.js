function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CAGQOoan.js","assets/index-CQGpD6Rc.js","assets/index-PytDxsbH.css","assets/ValueWithRandom-BA1nJSBA.js","assets/AnimationOptions-ClNNlboZ.js","assets/OptionsColor-D7QJFLGl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CQGpD6Rc.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CAGQOoan.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
