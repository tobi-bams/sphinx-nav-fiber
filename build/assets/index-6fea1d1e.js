import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-1754ba70.js";import{U as w}from"./index-fd3c4201.js";import"./index-f6a53b44.js";import"./three.module-9722a9fc.js";import"./index-656b6735.js";import"./index-ec647c1d.js";import"./index-2968a713.js";import"./SourcesTableIcon-35621de5.js";import"./CheckIcon-4bf98e31.js";import"./DeleteNodeIcon-dad7ecc0.js";import"./SoundIcon-6088bb66.js";import"./SucessFeedBackIcon-ce29c4db.js";import"./TextareaAutosize-f1beb2b0.js";import"./index-1e759a34.js";import"./index-494e7310.js";import"./ClipLoader-54f88294.js";import"./clsx-dae6b1fe.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
