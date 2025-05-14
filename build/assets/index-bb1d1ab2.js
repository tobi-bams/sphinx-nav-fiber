import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-2994430f.js";import{U as w}from"./index-ac867a57.js";import"./index-0cad5ac3.js";import"./three.module-9722a9fc.js";import"./index-77d92498.js";import"./index-f62b0b4a.js";import"./index-7824c2b2.js";import"./SourcesTableIcon-99793f8d.js";import"./CheckIcon-085d17bb.js";import"./DeleteNodeIcon-87d9c9a9.js";import"./SoundIcon-5f345156.js";import"./SucessFeedBackIcon-5672a4b9.js";import"./TextareaAutosize-fb881ec6.js";import"./index-aeb9b8a3.js";import"./index-8a5b7fd2.js";import"./ClipLoader-b7182946.js";import"./clsx-d0903b76.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
