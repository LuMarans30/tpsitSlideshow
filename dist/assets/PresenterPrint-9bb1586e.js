import{d as m,i as _,a as p,u as h,b as u,c as d,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as l,k as b,l as w,m as N,p as k,q as P,_ as S}from"./index-52751eac.js";import{N as V}from"./NoteDisplay-f0a6de24.js";const j={class:"m-4"},C={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},F=m({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${d.title}`});const r=f(()=>y.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",C,[t("h1",D,o(a(d).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),w(" "+o(e==null?void 0:e.title)+" ",1),z])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",A)):k("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","C:/Users/Andre/Downloads/tpsitSlideshow/tpsitslideshow/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
