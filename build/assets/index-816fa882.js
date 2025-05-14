import{s as v,g as q,T as F,F as n,r as m,ay as $,j as e,b2 as J,b3 as K,bj as Q,B as E,bk as U,k as X,bl as Z,D as L,l as N,b1 as O,b5 as ee,n as te,bC as re,bH as ne}from"./index-4ba529fc.js";import{p as V}from"./index-b4a141ad.js";import{C as G}from"./ClipLoader-9d41b8c6.js";import{e as H}from"./index-2d397c8e.js";import{A as W}from"./index-daaea944.js";import{c as oe}from"./index-64f1c910.js";import"./three.module-9722a9fc.js";import"./index-ed2ed819.js";import"./SourcesTableIcon-395455b8.js";import"./CheckIcon-d816993a.js";import"./DeleteNodeIcon-a5d96c7b.js";import"./SoundIcon-26ffb456.js";import"./SucessFeedBackIcon-f2f77fda.js";import"./Stack-c7adc00c.js";import"./clsx-22b5d666.js";import"./createSvgIcon-7393ca0f.js";import"./TextareaAutosize-09d1c7d9.js";const B=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),R=s=>s?[...s].sort((l,x)=>Number(x.required)-Number(l.required)):[],Y=s=>s?s.filter(l=>l.key!=="node_key"):[],se=({handleSelectType:s,skipToStep:l,nodeType:x,selectedValues:r})=>{const[f,w]=m.useState(!1),[h,C]=m.useState(),{watch:j,formState:{isValid:t}}=$();m.useEffect(()=>{(async()=>{w(!0);const o=await U(x),T=V(o),A=Y(T);C(A),w(!1)})()},[x,j]);const a=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(r).includes(c.key))),S=()=>{s(""),l("sourceType")},b=!t||f||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ae,{children:"Required Properties"})})}),e.jsx(ie,{children:f?e.jsx(n,{style:{margin:"auto"},children:e.jsx(G,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:a(c)}),e.jsx(J,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...K,pattern:{message:"No leading whitespace allowed",value:Q}}:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},ae=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,ce=v(n)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,le=({nodeType:s,onclose:l,selectedNodeType:x})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(k,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(k,{children:["From: ",x]})}),e.jsx(n,{mb:25,children:e.jsxs(k,{children:["To: ",s]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),k=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:s,skipToStep:l,selectedNodeType:x,nodeType:r,selectedValues:f,setSelectedValues:w})=>{const[h,C]=m.useState(!1),[j,t]=m.useState(),[a,i]=m.useState(),{watch:p}=$();m.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await U(u),z=V(g),_=Y(z);y(_),C(!1)};r&&d(r,t),x&&d(x,i)},[r,x,p]);const S=m.useMemo(()=>R(j),[j]),b=m.useMemo(()=>R(a),[a]),c=()=>{s(""),l("sourceType")};m.useEffect(()=>{if(j&&a){const d=a.reduce((u,y)=>{const g=j.find(z=>z.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,a,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=m.useMemo(()=>b.map(({key:d})=>{const u=f[d]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:B(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,f]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(n,{style:{margin:"auto"},children:e.jsx(G,{color:q.lightGray})}):e.jsxs(xe,{children:[e.jsxs(me,{children:[e.jsx(I,{children:B(x)}),b.map(({key:d})=>e.jsx(fe,{children:e.jsx(F,{children:B(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:B(r)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(n,{children:e.jsx(W,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,xe=v.div`
  display: flex;
  justify-content: space-between;
`,me=v.div`
  flex: 1;
  margin-right: 16px;
`,fe=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,he=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=v.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:s,allowNextStep:l,onSelectType:x,selectedType:r})=>{const[f]=X(i=>[i.customSchemaFeatureFlag]),[w,h]=m.useState(null),[C,j]=m.useState(!1),t=H();m.useEffect(()=>{(async()=>{var p;if(f){j(!0);try{const S=await Z(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>s("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,r,f,s]);const a=i=>{x((i==null?void 0:i.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(W,{autoFocus:!0,isLoading:C,onSelect:a,options:w})}),e.jsx(n,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>s("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(s,l,x,r)=>{const f={},w=[];Object.entries(x).forEach(([t,a])=>{a!=="none"&&(f[a]=t),t!==a&&w.push(t)});const h={};Object.keys(r||{}).forEach(t=>{const a=r==null?void 0:r[t];Object.entries(f).forEach(([i,p])=>{p===t&&(h[f[i]]=a)})}),Object.keys(s).forEach(t=>{t!=="nodeType"&&(h[t]=s[t])});const C=r?r.node_type.charAt(0).toUpperCase()+r.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:i}=await re({search:r==null?void 0:r.name}),p=i.find(S=>S.name===r.name);t=p==null?void 0:p.ref_id}const a=t||(r==null?void 0:r.ref_id);a&&await ne(a,j)}catch(t){console.error(t);let a=O;if(t.status===400)try{const i=await t.json();a=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{a=O}else t instanceof Error&&(a=t.message);throw new Error(a)}},Re=()=>{const[s,l]=m.useState("sourceType"),{close:x,visible:r}=L("changeNodeType"),{open:f}=L("editNodeName"),{open:w}=L("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[a,i]=m.useState(""),[p,S]=m.useState({});m.useEffect(()=>()=>{l("sourceType"),t()},[r,t]);const b=H(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{x()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let D=O;if(T(),(P==null?void 0:P.status)===400){const M=await P.json();D=M.errorCode||(M==null?void 0:M.status)||O}else P instanceof Error&&(D=P.message);i(String(D))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(se,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=s==="mapProperties"?"regular":"small",z=()=>{x(),f()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(te,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[s]})})})};export{Re as ChangeNodeTypeModal};
