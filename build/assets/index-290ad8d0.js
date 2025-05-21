import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-8f2026e5.js";import{U as w}from"./index-10d50993.js";import"./index-5ed20382.js";import"./three.module-9722a9fc.js";import"./index-0b9833ea.js";import"./index-4de5a9e4.js";import"./index-ef010333.js";import"./SourcesTableIcon-b3d529b2.js";import"./CheckIcon-dd322c93.js";import"./DeleteNodeIcon-9ab6e8f2.js";import"./SoundIcon-b108644e.js";import"./SucessFeedBackIcon-af2fb8ec.js";import"./TextareaAutosize-f6ee6086.js";import"./index-f7ba625a.js";import"./index-23f64e1a.js";import"./ClipLoader-465d0745.js";import"./clsx-cd28c3f0.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
