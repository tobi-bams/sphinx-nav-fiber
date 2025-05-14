import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-3b64e630.js";import{U as w}from"./index-b6b0ba0c.js";import"./index-a8761633.js";import"./three.module-9722a9fc.js";import"./index-094dcced.js";import"./index-1e028270.js";import"./index-0a668368.js";import"./SourcesTableIcon-d32531cd.js";import"./CheckIcon-33fc346e.js";import"./DeleteNodeIcon-5e4b34ec.js";import"./SoundIcon-792f7745.js";import"./SucessFeedBackIcon-fc5168f0.js";import"./TextareaAutosize-a1ff9ae4.js";import"./index-0e162ebc.js";import"./index-97edd381.js";import"./ClipLoader-69fba704.js";import"./clsx-a96191de.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
