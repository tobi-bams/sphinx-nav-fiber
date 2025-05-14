import{c as d,o as h,i as l,q as x,r as p,j as t,F as i,s as a,t as f,v as g}from"./index-4dff6362.js";import{U as w}from"./index-40de81d3.js";import"./index-0a993048.js";import"./three.module-9722a9fc.js";import"./index-f4c364e0.js";import"./index-f1bc108f.js";import"./index-742971df.js";import"./SourcesTableIcon-b20a3388.js";import"./CheckIcon-3287db9d.js";import"./DeleteNodeIcon-3d2d0428.js";import"./SoundIcon-9569b188.js";import"./SucessFeedBackIcon-ca85cac6.js";import"./TextareaAutosize-fb1c398a.js";import"./index-35d09502.js";import"./index-0d579f85.js";import"./ClipLoader-ed6c36df.js";import"./clsx-00c29abd.js";const W=()=>{const n=d(e=>e.addNewNode),{setSchemas:c}=h(e=>e),m=l(),{topicId:o}=x();return p.useEffect(()=>{(async()=>{try{const r=await f();c(r.schemas.filter(s=>!s.is_deleted))}catch(r){console.error("Error fetching schema:",r)}})()},[c]),p.useEffect(()=>{o&&(async r=>{try{const s=await g(r,["Tweet","Person","User"],[],"",!0,0,2,800);n(s)}catch(s){m("/"),console.error(s)}})(o)},[n,m,o]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsx(j,{direction:"row",children:t.jsx(t.Fragment,{children:t.jsx(v,{children:t.jsx(i,{basis:"100%",grow:1,shrink:1,children:t.jsx(w,{})})})})})})})},u=a.div`
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
