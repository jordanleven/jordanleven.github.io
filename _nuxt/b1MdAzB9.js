import{V as O,W as d,m as D,X as B,Y as M,p as V,Z as E,A as H,$ as g,a0 as R,h as P,P as S,a1 as z}from"./v9wlY-j3.js";const j=s=>s==="defer"||s===!1;function F(...s){var p;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=O(),C=u,w=()=>d.value,b=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??w,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,e),h=f!=null;if(!e._asyncData[t]||!a.immediate){(p=e.payload._errors)[t]??(p[t]=d.errorValue);const o=a.deep?D:B;e._asyncData[t]={data:o(h?f:a.default()),pending:D(!h),error:M(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(j(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial||e.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,e);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,i)=>{try{c(C(e))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=N(i,a.pick)),e.payload.data[t]=i,r.data.value=i,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=R(c),r.data.value=P(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>K(e,t);const m=()=>r.refresh({_initial:!0}),_=a.server!==!1&&e.payload.serverRendered;{const o=S();if(o&&_&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;V(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}_&&e.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(m):a.immediate&&m();const l=z();if(a.watch){const i=H(a.watch,()=>r.refresh());l&&g(i)}const c=e.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});l&&g(c)}const v=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(v,r),v}function K(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=d.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=P(s._asyncData[n]._default()),s._asyncData[n].error.value=d.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function N(s,n){const t={};for(const u of n)t[u]=s[u];return t}export{F as u};
