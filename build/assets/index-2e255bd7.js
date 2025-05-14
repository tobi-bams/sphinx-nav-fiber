import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-8a9233db.js";import{U as w}from"./index-6569f5ba.js";import"./index-8553770c.js";import"./three.module-9722a9fc.js";import"./index-6411c506.js";import"./index-94ffae3e.js";import"./index-98a12afa.js";import"./SourcesTableIcon-18286c79.js";import"./CheckIcon-204c1c5a.js";import"./DeleteNodeIcon-2c6d83a7.js";import"./SoundIcon-c16f657f.js";import"./SucessFeedBackIcon-9c6aa925.js";import"./TextareaAutosize-2f67f58f.js";import"./index-710f094e.js";import"./index-847e80e5.js";import"./ClipLoader-e478eed9.js";import"./clsx-07f78e5f.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
