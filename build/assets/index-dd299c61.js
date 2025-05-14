import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-bae22255.js";import{U as w}from"./index-4cbe7555.js";import"./index-04edc3d2.js";import"./three.module-9722a9fc.js";import"./index-688f9732.js";import"./index-348c15e4.js";import"./index-7b080110.js";import"./SourcesTableIcon-e5c2dfc8.js";import"./CheckIcon-c24f120e.js";import"./DeleteNodeIcon-8cc0bcdf.js";import"./SoundIcon-f7e1e16d.js";import"./SucessFeedBackIcon-d67a460b.js";import"./TextareaAutosize-d48fccc3.js";import"./index-d7125828.js";import"./index-2a7ad56b.js";import"./ClipLoader-c31574b7.js";import"./clsx-eaa689f7.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,j=a(i)`
  flex: 1;
  overflow: hidden;
`,v=a(i)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`;export{W as TopicMindset};
