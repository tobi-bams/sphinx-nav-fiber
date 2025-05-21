import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-cc66b035.js";import{U as w}from"./index-34a53cdd.js";import"./index-ba7419ed.js";import"./three.module-9722a9fc.js";import"./index-3b4d7f87.js";import"./index-dc6f3627.js";import"./index-fcbe6aeb.js";import"./SourcesTableIcon-803eafa9.js";import"./CheckIcon-c56956e1.js";import"./DeleteNodeIcon-34557c39.js";import"./SoundIcon-9dfac8d5.js";import"./SucessFeedBackIcon-7974ad00.js";import"./TextareaAutosize-27ff2a12.js";import"./index-31b4ff31.js";import"./index-41a88932.js";import"./ClipLoader-da98ed7e.js";import"./clsx-252e76be.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
