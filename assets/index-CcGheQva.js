function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-tdV6i3Ap.js","assets/index-C9l9WNT5.js","assets/index-BhHilHBL.css","assets/ValueWithRandom-DtC4dYZy.js","assets/AnimationOptions-D-x9Zmur.js","assets/OptionsColor-Cb--8hdE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C9l9WNT5.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-tdV6i3Ap.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
