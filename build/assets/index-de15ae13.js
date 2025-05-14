import{s as d,g,r as i,D as C,o as D,a as F,j as t,F as S,T as E,b0 as L,b5 as G}from"./index-1069599b.js";import{p as N,g as $}from"./index-4f0543c5.js";import{e as K}from"./index-3a4c6a5d.js";import{B as P}from"./index-45168681.js";import{C as R}from"./ClipLoader-015e7281.js";import"./index-9f88b7ae.js";import"./index-aac187bb.js";import"./SourcesTableIcon-cfb8bbef.js";import"./CheckIcon-60d18cda.js";import"./DeleteNodeIcon-9b22b01b.js";import"./SoundIcon-12d100ca.js";import"./SucessFeedBackIcon-f65531e7.js";import"./Stack-103b9e5c.js";import"./clsx-c34afb36.js";import"./createSvgIcon-3a0825e6.js";import"./TextareaAutosize-8ddefca4.js";import"./FormControlLabel-87b8d94e.js";import"./Typography-15f81f3e.js";import"./Switch-ee10ea40.js";const U=()=>{const[l,n]=i.useState(""),[p,m]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[T,_]=i.useState([]),[c,b]=i.useState(),{close:j}=C("nodeAction"),s=K(),{normalizedSchemasByType:A,getSelectedActionDetail:w,removeSelectedActionDetail:B}=D(e=>e),{pubKey:v}=F();async function z(e){if(b(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),j()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:v,action_name:e.name,bounty:a};await N(o),j(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(A[o].action);_(r.actions),f(1),m(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}b(a),a.bounty?f(2):y(a,null),m(!1)},[A,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:T.map(e=>t.jsx(O,{onClick:()=>z(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(W,{children:l})]})},H=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=d(E)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,W=d(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,Y=d(E)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,pe=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=D(u=>u),p=()=>{n(),l()},m="small";return t.jsx(G,{id:"nodeAction",kind:m,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{pe as NodeActionModal};
