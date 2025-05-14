import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-ed6a3f3e.js";import{U as w}from"./index-a09f4f84.js";import"./index-f28b47bd.js";import"./three.module-9722a9fc.js";import"./index-272d12ff.js";import"./index-5039cdd5.js";import"./index-9dc1bac9.js";import"./SourcesTableIcon-3553f47d.js";import"./CheckIcon-7fcad07d.js";import"./DeleteNodeIcon-4e9e83ff.js";import"./SoundIcon-9731d8d6.js";import"./SucessFeedBackIcon-de294afd.js";import"./TextareaAutosize-5fec1fb5.js";import"./index-1710acb8.js";import"./index-eb6d03ab.js";import"./ClipLoader-e1f47cb2.js";import"./clsx-ee984d51.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
