import{d as C,c as b,j as a,k as r,F as w,l as m,t as M,G as L,H as k,_ as A,r as g,o as I,I as P,J as Y,K as t,L as N,M as O,N as R,O as U,P as T,Q as H}from"./entry.f5984ac9.js";const W=C({__name:"row",props:{value:{}},setup(f){const e=f,s=b(()=>e.value);return(n,l)=>(a(!0),r(k,null,w(s.value,(u,x)=>(a(),r("span",{key:x},[m("span",{class:L(["inline-block rounded box-border h-[48px] w-[48px] m-1 border-2 text-center leading-[44px] text-[32px] bg-neutral-600 text-white",{nomatch:u.status=="NOMATCH",match:u.status=="MATCH",exists:u.status==="EXISTS"}])},M(u.letter.toUpperCase()),3)]))),128))}});const $=A(W,[["__scopeId","data-v-04668d10"]]),B=["onKeypress"],K={key:"index",class:"inline-block rounded box-border h-[48px] w-[48px] m-1 border-2 text-center leading-[44px] text-[32px] bg-white text-black"},z=C({__name:"editable-row",emits:["submit"],setup(f,{emit:e}){const s=g(""),n=g(null);function l(p){e("submit",p)}function u(){s.value.length===5&&l(s.value)}const x=()=>{var p;(p=n.value)==null||p.focus()};return I(()=>{x()}),(p,i)=>(a(),r(k,null,[P(m("input",{ref_key:"inputHTMLElement",ref:n,"onUpdate:modelValue":i[0]||(i[0]=_=>O(s)?s.value=_:null),maxlength:5,class:"h-[0px] w-[0px] absolute",onKeypress:R(u,["enter"])},null,40,B),[[Y,t(s)],[N,!0]]),m("div",{class:"inline-flex",onClick:i[1]||(i[1]=_=>x())},[(a(),r(k,null,w(5,_=>m("span",K,M(t(s)[_-1]?t(s)[_-1].toUpperCase():" "),1)),64))])],64))}}),D=U("game",()=>{const f=g(""),e=g(!0),s=6,n=g(0),l=g([]),u=b(()=>n.value>0?l.value[n.value-1].filter(c=>c.status==="MATCH").length===5:!1),x=b(()=>n.value===s&&!u.value),p=function(o,c){const y=_();for(let d=0;d<o.length;d++){y[d].letter=o[d];const E=o.toUpperCase(),S=c.toUpperCase();E[d]===S[d]?y[d].status="MATCH":S.includes(E[d])?y[d].status="EXISTS":y[d].status="NOMATCH"}return y},i=function(o){const c=p(o,f.value);l.value[n.value]=c,n.value++},_=function(){return[{letter:"",status:"EMPTY"},{letter:"",status:"EMPTY"},{letter:"",status:"EMPTY"},{letter:"",status:"EMPTY"},{letter:"",status:"EMPTY"}]};function h(o,c){return Math.floor(Math.random()*(c-o+1)+o)}const v=async function(){e.value=!0;const o=["WORLD","CATCH","HORSE"];e.value=!1,n.value=0,l.value.length=0,f.value=o[h(0,o.length-1)];for(let c=0;c<s;c++)l.value.push(_())};return v(),{target:f,maxTries:s,isWin:u,isLost:x,board:l,index:n,loading:e,start:v,submit:i}}),F={class:"text-center"},V={key:0},G={key:1},X=m("br",null,null,-1),j={key:0,class:"mb-4"},J={key:1},Q={class:"text-3xl"},q={key:2},Z=m("h3",{class:"text-3xl"},"😧 You lost!",-1),et=C({__name:"index",setup(f){const e=D();console.log({game:e});const s=b(()=>e.board),n=b(()=>e.index),l=b(()=>e.isWin),u=b(()=>e.isLost),x=b(()=>e.loading),{submit:p,start:i}=e;return(_,h)=>(a(),r("div",F,[t(x)?(a(),r("div",V," Loading... ")):(a(),r("div",G,[(a(!0),r(k,null,w(t(s),(v,o)=>(a(),r("div",{key:o},[o===t(n)&&!t(l)?(a(),H(z,{key:0,onSubmit:t(p)},null,8,["onSubmit"])):(a(),H($,{key:1,value:v},null,8,["value"]))]))),128)),X,t(n)==0?(a(),r("div",j,"Start typing to guess the word. Hit Enter to submit.")):T("",!0),t(l)?(a(),r("div",J,[m("h3",Q,"🥳 Congratulations! You did it in "+M(t(n))+" tries",1),m("button",{class:"inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary",onClick:h[0]||(h[0]=(...v)=>t(i)&&t(i)(...v))},"Play Again")])):T("",!0),t(u)?(a(),r("div",q,[Z,m("button",{type:"button",class:"inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary",onClick:h[1]||(h[1]=(...v)=>t(i)&&t(i)(...v))}," Try again with another word ")])):T("",!0)]))]))}});export{et as default};