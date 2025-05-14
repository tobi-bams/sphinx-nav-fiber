import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-4ba529fc.js";import{U as w}from"./index-4d8a8b57.js";import"./index-e3dc7782.js";import"./three.module-9722a9fc.js";import"./index-9a6a2ecf.js";import"./index-2d397c8e.js";import"./index-ed2ed819.js";import"./SourcesTableIcon-395455b8.js";import"./CheckIcon-d816993a.js";import"./DeleteNodeIcon-a5d96c7b.js";import"./SoundIcon-26ffb456.js";import"./SucessFeedBackIcon-f2f77fda.js";import"./TextareaAutosize-09d1c7d9.js";import"./index-541686a4.js";import"./index-4e85d8ba.js";import"./ClipLoader-9d41b8c6.js";import"./clsx-22b5d666.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
