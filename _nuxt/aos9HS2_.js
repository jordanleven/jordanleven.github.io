import{_ as N}from"./C7zL_qD7.js";import{e as u,j as n,o as i,c as a,t as f,h as m,y,a as l,_,m as L,q as S,b as A,w as F,n as P,k as I,x as j,F as M,l as w}from"./v9wlY-j3.js";import{b as B}from"./DHFCoIz-.js";import{i as C}from"./BP-_UFnM.js";const E={timeZone:"America/New_York"},V={...E,day:"numeric",month:"long",year:"numeric"},z=s=>{switch(s){default:return V}},G=s=>({...z(s)}),R=(s,t)=>{const r=t==null?void 0:t.dateFormat,o=G(r);return s.toLocaleDateString("en-US",o)},U={class:"portfolio-list-item-article"},Y={key:0,class:"portfolio-list-item-article__date","data-test":"date"},q={class:"portfolio-list-item-article__header-container"},H={class:"portfolio-list-item-article__header","data-test":"header"},J={key:1,class:"portfolio-list-item-article__summary","data-test":"summary"},Z=u({__name:"PortfolioListItemArticle",props:{date:{},summary:{default:null},title:{}},setup(s){const t=s,r=n(()=>t.date?R(t.date,{dateFormat:"medium"}):null);return(o,c)=>(i(),a("div",U,[o.date?(i(),a("p",Y,f(m(r)),1)):y("",!0),l("div",q,[l("h3",H,f(o.title),1)]),o.summary?(i(),a("p",J,f(o.summary),1)):y("",!0)]))}}),K=_(Z,[["__scopeId","data-v-415fbb62"]]),Q={class:"portfolio-list-item-project"},W={class:"portfolio-list-item-project__header-container"},X={class:"portfolio-list-item-project__header","data-test":"header"},x={class:"portfolio-list-item-project__summary","data-test":"summary"},tt=u({__name:"PortfolioListItemProject",props:{summary:{default:null},title:{}},setup(s){return(t,r)=>(i(),a("div",Q,[l("div",W,[l("h3",X,f(t.title),1)]),l("p",x,f(t.summary),1)]))}}),ot=_(tt,[["__scopeId","data-v-4251999f"]]),et={class:"portfolio-list-item__inner"},st={class:"portfolio-list-item__thumbnail-container"},it=["data-test"],rt={class:"portfolio-list-item__summary-container"},at=u({__name:"PortfolioListItem",props:{animationDelayInMs:{},columns:{default:1},portfolioItem:{},portfolioItemType:{}},setup(s){const t=s,r=L(!1),o=L(),c=C(),{isJsEnabled:d}=B(),p=e=>t.portfolioItemType===e,b=()=>{r.value=!0},h=n(()=>({backgroundImage:`url('${t.portfolioItem.thumbnail}')`})),k=n(()=>t.columns===1),T=n(()=>k.value?t.portfolioItem.summary:null),O=n(()=>({transitionDelay:`${t.animationDelayInMs}ms`})),$=n(()=>{const{columns:e,portfolioItemType:v}=t;return{"portfolio-list-item--four":e===4,"portfolio-list-item--hidden":!r.value&&d.value,"portfolio-list-item--light":e>=3&&v==="project","portfolio-list-item--primary":e===1,"portfolio-list-item--three":e===3,"portfolio-list-item--two":e===2}});return S(()=>{c.createObserver({onObserved:b,target:o.value,threshold:.1})}),(e,v)=>{const D=N;return i(),a("li",{ref_key:"refPortfolioListItem",ref:o,class:j(["portfolio-list-item",m($)]),style:P(m(O)),"data-test":"list-item"},[l("div",et,[A(D,{to:e.portfolioItem.path,class:"portfolio-list-item__link"},{default:F(()=>[l("div",st,[(i(),a("div",{key:e.portfolioItem.thumbnail,class:"portfolio-list-item__thumbnail","data-test":m(h),style:P(m(h))},null,12,it))]),l("div",rt,[p("article")?(i(),I(K,{key:0,date:e.portfolioItem.date,title:e.portfolioItem.title,summary:m(T)},null,8,["date","title","summary"])):p("project")?(i(),I(ot,{key:1,title:e.portfolioItem.title,summary:e.portfolioItem.summary},null,8,["title","summary"])):y("",!0)])]),_:1},8,["to"])])],6)}}}),lt=_(at,[["__scopeId","data-v-30fa33ae"]]),nt={class:"portfolio-list"},g=100,mt=u({__name:"PortfolioList",props:{animationPreviousItemLength:{default:0},columns:{default:1},portfolioItemType:{},portfolioItems:{}},setup(s){const t=s,r=o=>{const c=t.animationPreviousItemLength*g;return o*g+c};return(o,c)=>(i(),a("ul",nt,[(i(!0),a(M,null,w(o.portfolioItems,(d,p)=>(i(),I(lt,{key:p,"animation-delay-in-ms":r(p),columns:o.columns,"portfolio-item":d,"portfolio-item-type":o.portfolioItemType},null,8,["animation-delay-in-ms","columns","portfolio-item","portfolio-item-type"]))),128))]))}}),_t=_(mt,[["__scopeId","data-v-539f86f8"]]);export{_t as P};
