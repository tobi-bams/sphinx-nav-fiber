import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-b5f1b91b.js";import{U as w}from"./index-aae34f9a.js";import"./index-57e878d0.js";import"./three.module-9722a9fc.js";import"./index-09baf04a.js";import"./index-47de5187.js";import"./index-90162213.js";import"./SourcesTableIcon-a3e8ced4.js";import"./CheckIcon-0fc14237.js";import"./DeleteNodeIcon-d05bbe40.js";import"./SoundIcon-3fb82c5b.js";import"./SucessFeedBackIcon-c7853a87.js";import"./TextareaAutosize-557705d2.js";import"./index-63adee55.js";import"./index-f9fade84.js";import"./ClipLoader-b254fccd.js";import"./clsx-2021c788.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
