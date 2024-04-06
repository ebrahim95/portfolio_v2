import{_ as n}from"./index-e9DJ_hPP.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CctlLpZN.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-D4djWlTJ.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CctlLpZN.js","assets/PolygonDrawerBase-CRlN9GQX.js","assets/index-e9DJ_hPP.js","assets/index-B-1N1OFl.css","assets/TriangleDrawer-D4djWlTJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
