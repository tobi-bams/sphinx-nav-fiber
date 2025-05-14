import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-1069599b.js";import{U as w}from"./index-b3c4ac8d.js";import"./index-03cb067d.js";import"./three.module-9722a9fc.js";import"./index-a1ec0f39.js";import"./index-3a4c6a5d.js";import"./index-aac187bb.js";import"./SourcesTableIcon-cfb8bbef.js";import"./CheckIcon-60d18cda.js";import"./DeleteNodeIcon-9b22b01b.js";import"./SoundIcon-12d100ca.js";import"./SucessFeedBackIcon-f65531e7.js";import"./TextareaAutosize-8ddefca4.js";import"./index-5070bba2.js";import"./index-4f0543c5.js";import"./ClipLoader-015e7281.js";import"./clsx-c34afb36.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
