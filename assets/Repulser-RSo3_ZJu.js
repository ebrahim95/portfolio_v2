import{Repulse as _}from"./index-CqXMcAgm.js";import{E as q}from"./ExternalInteractorBase-CIi3zRdK.js";import{C as M,R as D}from"./Ranges-C107TQMv.js";import{a1 as O,N as b,a2 as w,K as S,ac as C,o as P,p as H,a as g,a3 as V,a8 as F}from"./index-C9l9WNT5.js";const h="repulse",W=0,A=6,I=3,L=2,B=0,K=0,N=1,x=.5;class U extends q{constructor(c,n){super(n),this._clickRepulse=()=>{const t=this.container,i=t.actualOptions.interactivity.modes.repulse;if(!i)return;const e=t.repulse??{particles:[]};if(e.finish||(e.count||(e.count=0),e.count++,e.count===t.particles.count&&(e.finish=!0)),e.clicking){const s=t.retina.repulseModeDistance;if(!s||s<W)return;const r=Math.pow(s/A,I),u=t.interactivity.mouse.clickPosition;if(u===void 0)return;const o=new M(u.x,u.y,r),a=t.particles.quadTree.query(o,l=>this.isEnabled(l));for(const l of a){const{dx:p,dy:f,distance:m}=O(u,l.position),d=m**L,v=i.speed,k=-r*v/d;if(d<=r){e.particles.push(l);const R=b.create(p,f);R.length=k,l.velocity.setTo(R)}}}else if(e.clicking===!1){for(const s of e.particles)s.velocity.setTo(s.initialVelocity);e.particles=[]}},this._hoverRepulse=()=>{const t=this.container,i=t.interactivity.mouse.position,e=t.retina.repulseModeDistance;!e||e<B||!i||this._processRepulse(i,e,new M(i.x,i.y,e))},this._processRepulse=(t,i,e,s)=>{const r=this.container,u=r.particles.quadTree.query(e,v=>this.isEnabled(v)),o=r.actualOptions.interactivity.modes.repulse;if(!o)return;const{easing:a,speed:l,factor:p,maxSpeed:f}=o,m=w(a),d=((s==null?void 0:s.speed)??l)*p;for(const v of u){const{dx:k,dy:R,distance:y}=O(v.position,t),E=S(m(N-y/i)*d,K,f),T=b.create(y?k/y*E:d,y?R/y*E:d);v.position.addTo(T)}},this._singleSelectorRepulse=(t,i)=>{const e=this.container,s=e.actualOptions.interactivity.modes.repulse;if(!s)return;const r=document.querySelectorAll(t);r.length&&r.forEach(u=>{const o=u,a=e.retina.pixelRatio,l={x:(o.offsetLeft+o.offsetWidth*x)*a,y:(o.offsetTop+o.offsetHeight*x)*a},p=o.offsetWidth*x*a,f=i.type==="circle"?new M(l.x,l.y,p):new D(o.offsetLeft*a,o.offsetTop*a,o.offsetWidth*a,o.offsetHeight*a),m=s.divs,d=C(m,o);this._processRepulse(l,p,f,d)})},this._engine=c,n.repulse||(n.repulse={particles:[]}),this.handleClickMode=t=>{const i=this.container.actualOptions,e=i.interactivity.modes.repulse;if(!e||t!==h)return;n.repulse||(n.repulse={particles:[]});const s=n.repulse;s.clicking=!0,s.count=0;for(const r of n.repulse.particles)this.isEnabled(r)&&r.velocity.setTo(r.initialVelocity);s.particles=[],s.finish=!1,setTimeout(()=>{n.destroyed||(s.clicking=!1)},e.duration*P)}}clear(){}init(){const c=this.container,n=c.actualOptions.interactivity.modes.repulse;n&&(c.retina.repulseModeDistance=n.distance*c.retina.pixelRatio)}interact(){const c=this.container,n=c.actualOptions,t=c.interactivity.status===H,i=n.interactivity.events,e=i.onHover,s=e.enable,r=e.mode,u=i.onClick,o=u.enable,a=u.mode,l=i.onDiv;t&&s&&g(h,r)?this._hoverRepulse():o&&g(h,a)?this._clickRepulse():V(h,l,(p,f)=>this._singleSelectorRepulse(p,f))}isEnabled(c){const n=this.container,t=n.actualOptions,i=n.interactivity.mouse,e=((c==null?void 0:c.interactivity)??t.interactivity).events,s=e.onDiv,r=e.onHover,u=e.onClick,o=F(h,s);if(!(o||r.enable&&i.position||u.enable&&i.clickPosition))return!1;const a=r.mode,l=u.mode;return g(h,a)||g(h,l)||o}loadModeOptions(c,...n){c.repulse||(c.repulse=new _);for(const t of n)c.repulse.load(t==null?void 0:t.repulse)}reset(){}}export{U as Repulser};
