import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-973f2530.js";import{U as w}from"./index-46d0223a.js";import"./index-a430e93f.js";import"./three.module-9722a9fc.js";import"./index-92793de5.js";import"./index-19d35958.js";import"./index-0664c174.js";import"./SourcesTableIcon-c654332b.js";import"./CheckIcon-64cce038.js";import"./DeleteNodeIcon-e3bc2dd1.js";import"./SoundIcon-30a2ed5e.js";import"./SucessFeedBackIcon-9ff4be97.js";import"./TextareaAutosize-cedf3327.js";import"./index-bddfee7b.js";import"./index-0c86b474.js";import"./ClipLoader-44a18e10.js";import"./clsx-e70c9a3b.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
