import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-88d69002.js";import{U as w}from"./index-ee6235c2.js";import"./index-ffa3dde8.js";import"./three.module-9722a9fc.js";import"./index-0009b7d4.js";import"./index-f8772034.js";import"./index-91b65bcc.js";import"./SourcesTableIcon-c0bffa87.js";import"./CheckIcon-9d0125c1.js";import"./DeleteNodeIcon-edda7cec.js";import"./SoundIcon-3805f8a3.js";import"./SucessFeedBackIcon-15287a7b.js";import"./TextareaAutosize-828f4bf7.js";import"./index-467a87a8.js";import"./index-d5c4bc26.js";import"./ClipLoader-981ef4d7.js";import"./clsx-7c9e893f.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
