import{e as g,S as C,j as S,G as b,A as Q,Q as _,H as A,J as O}from"./v9wlY-j3.js";import{u as $}from"./b1MdAzB9.js";import{q as v}from"./CqxO89iH.js";import"./Cft7zcv2.js";const k=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:n,only:t,without:o,where:a,sort:f,limit:d,skip:l,locale:s,find:p}=C(i),h=S(()=>{var e;return(e=n.value)==null?void 0:e.includes("/_")}),y=!b().public.content.experimental.advanceQuery;Q(()=>i,()=>r(),{deep:!0});const u=e=>y?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:r}=await $(`content-query-${_(i)}`,()=>{let e;return n.value?e=v(n.value):e=v(),t.value&&(e=e.only(t.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),f.value&&(e=e.sort(f.value)),d.value&&(e=e.limit(d.value)),l.value&&(e=e.skip(l.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(u):p.value==="surround"?n.value?y?e.findSurround(n.value):e.withSurround(n.value).findOne().then(u):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(u)):e.find().then(u)});return{isPartial:h,data:c,refresh:r}},render(i){var m;const n=A(),{data:t,refresh:o,isPartial:a,path:f,only:d,without:l,where:s,sort:p,limit:h,skip:y,locale:u,find:c}=i,r={path:f,only:d,without:l,where:s,sort:p,limit:h,skip:y,locale:u,find:c};if(r.find==="one"){if(!t&&(n!=null&&n["not-found"]))return n["not-found"]({props:r,...this.$attrs});if(n!=null&&n.empty&&(t==null?void 0:t._type)==="markdown"&&!((m=t==null?void 0:t.body)!=null&&m.children.length))return n.empty({props:r,...this.$attrs})}else if((!t||!t.length)&&n!=null&&n["not-found"])return n["not-found"]({props:r,...this.$attrs});return n!=null&&n.default?n.default({data:t,refresh:o,isPartial:a,props:r,...this.$attrs}):((w,q)=>O("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:t,props:r,isPartial:a})}}),N=k,P=Object.assign(N,{__name:"ContentQuery"});export{P as default};