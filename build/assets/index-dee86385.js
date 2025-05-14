import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-b4348ca1.js";import{U as w}from"./index-458e8275.js";import"./index-a2a09b40.js";import"./three.module-9722a9fc.js";import"./index-891ed4e8.js";import"./index-e0c62e83.js";import"./index-e6ebe5b0.js";import"./SourcesTableIcon-d0cea899.js";import"./CheckIcon-9ac1fdc1.js";import"./DeleteNodeIcon-71e07447.js";import"./SoundIcon-c6bd68b8.js";import"./SucessFeedBackIcon-026250ce.js";import"./TextareaAutosize-724738eb.js";import"./index-dadc8f4c.js";import"./index-0c156bf3.js";import"./ClipLoader-fe2c69dc.js";import"./clsx-c8ca1809.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
