import{u as q}from"./ArrayPagination-7981c2a2.js";import{s as H,av as J,u as K,aw as t,ac as X,G as S,p as Z,J as v,x as Q,q as d,X as b,a2 as Y,W as p,L as F,as as ee,at as te,_ as le}from"./index-459370ca.js";import{d as ae}from"./dayjs.min-33626328.js";import{A as se,_ as oe,r as f,c as y,C as ne,y as ue,$ as i,a2 as C,D as e,a1 as a,a7 as x,Z as m,u as n,a0 as _,i as O,a4 as V,F as w,a3 as ie,a5 as re,V as I}from"./vue-aae79161.js";const de={class:"pa-3"},me={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},ce={class:"d-flex justify-end"},pe=se({__name:"Logs",setup(ge){const $=oe(),{t:c}=H(),L=J(),U=K(),E=f([{title:c("logs.filters.sortBy.id"),value:"id"},{title:c("logs.filters.sortBy.type"),value:"type"},{title:c("logs.filters.sortBy.message"),value:"message"},{title:c("logs.filters.sortBy.timestamp"),value:"timestamp"}]),h=f([{title:t[t.NORMAL],value:t.NORMAL},{title:t[t.INFO],value:t.INFO},{title:t[t.WARNING],value:t.WARNING},{title:t[t.CRITICAL],value:t.CRITICAL}]),u=f([t.NORMAL,t.INFO,t.WARNING,t.CRITICAL]),N=f(["id"]),G=y(()=>L.logs),T=y(()=>G.value.filter(l=>u.value.includes(l.type))),k=y(()=>u.value.length>0),A=y(()=>u.value.length===h.value.length),{paginatedResults:M,currentPage:r,pageCount:g}=q(T,30),B=()=>{$.push({name:"dashboard"})},W=l=>`logtype-${t[l?.type]?.toLowerCase()}`,j=l=>t[l.type],D=l=>ae(l.timestamp*1e3).format(U.dateFormat),P=()=>{A.value?u.value=[]:u.value=h.value.map(l=>l.value)},R=l=>{l.key==="Escape"&&B()};return ne(()=>{document.addEventListener("keydown",R),X(()=>L.fetchLogs(),15e3),L.fetchLogs(-1)}),ue(()=>{document.removeEventListener("keydown",R)}),(l,o)=>(i(),C("div",de,[e(S,{"no-gutters":"",align:"center",justify:"center"},{default:a(()=>[e(v,null,{default:a(()=>[x("h1",me,m(n(c)("logs.title")),1)]),_:1}),e(v,null,{default:a(()=>[x("div",ce,[e(Q,{icon:"mdi-close",variant:"plain",onClick:B})])]),_:1})]),_:1}),e(Z,null,{default:a(()=>[e(d,null,{default:a(()=>[e(S,null,{default:a(()=>[e(v,{cols:"6"},{default:a(()=>[e(b,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=s=>u.value=s),items:h.value,label:l.$t("logs.filters.type"),"hide-details":"",multiple:"",chips:""},{"prepend-item":a(()=>[e(d,{title:l.$t("common.selectAll"),onClick:P},{prepend:a(()=>[e(Y,{indeterminate:k.value&&!A.value,"model-value":k.value},null,8,["indeterminate","model-value"])]),_:1},8,["title"]),e(p)]),_:1},8,["modelValue","items","label"])]),_:1}),e(v,{cols:"6"},{default:a(()=>[e(b,{modelValue:N.value,"onUpdate:modelValue":o[1]||(o[1]=s=>N.value=s),items:E.value,label:l.$t("logs.filters.sortBy.label"),"hide-details":"",multiple:"",chips:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})]),_:1}),e(p,{class:"my-3",thickness:"5"}),n(g)>1?(i(),_(d,{key:0},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[2]||(o[2]=s=>O(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):V("",!0),e(p),(i(!0),C(w,null,ie(n(M),(s,z)=>(i(),C(w,null,[z>0?(i(),_(p,{key:0})):V("",!0),e(d,{class:re(W(s))},{default:a(()=>[e(ee,null,{default:a(()=>[I(m(s.id)+") "+m(s.message),1)]),_:2},1024),e(te,null,{default:a(()=>[I(m(j(s))+" | "+m(D(s)),1)]),_:2},1024)]),_:2},1032,["class"])],64))),256)),T.value.length===0?(i(),_(d,{key:1},{default:a(()=>[I(m(l.$t("logs.emptyLogList")),1)]),_:1})):V("",!0),e(p),n(g)>1?(i(),_(d,{key:2},{default:a(()=>[e(F,{modelValue:n(r),"onUpdate:modelValue":o[3]||(o[3]=s=>O(r)?r.value=s:null),length:n(g),"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue","length"])]),_:1})):V("",!0)]),_:1})]))}});const Ve=le(pe,[["__scopeId","data-v-569a7d95"]]);export{Ve as default};
