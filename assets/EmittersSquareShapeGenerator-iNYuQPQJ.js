import{E as p}from"./EmitterShapeBase-4KcS34Iy.js";import{H as a,W as c}from"./index-C9l9WNT5.js";const h=.5,d=4,f=2;function u(n,s){return n+s*(a()-c)}class x extends p{constructor(s,t,e,i){super(s,t,e,i)}async init(){}randomPosition(){const s=this.fill,t=this.position,e=this.size;if(s)return{position:{x:u(t.x,e.width),y:u(t.y,e.height)}};{const i=e.width*h,o=e.height*h,l=Math.floor(a()*d),r=(a()-c)*f;switch(l){case 0:return{position:{x:t.x+r*i,y:t.y-o}};case 1:return{position:{x:t.x-i,y:t.y+r*o}};case 2:return{position:{x:t.x+r*i,y:t.y+o}};case 3:default:return{position:{x:t.x+i,y:t.y+r*o}}}}}}class S{generate(s,t,e,i){return new x(s,t,e,i)}}export{S as EmittersSquareShapeGenerator};
