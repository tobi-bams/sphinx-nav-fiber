import{W as te,u as K,r as n,a as X,b as R,c as z,d as J,f as oe,S as ne,e as se,_ as l,j as t,s as h,g as i,F as p,I as re,C as ie,m as ae,h as Z,i as ce,T as P,B as le,Q as de,k as ue,l as he,n as fe}from"./index-ed6a3f3e.js";import{P as pe,T as ge,O as me,A as xe}from"./index-5039cdd5.js";const _e=te`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {

    &.no-scroll {
      overflow: hidden;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,ye=()=>{const[e]=K(),s=e.get("node"),a=n.useRef(!0),{setBudget:r}=X(g=>g),{setSidebarOpen:c,currentSearch:f}=R(g=>g),{fetchData:m,setAbortRequests:d,resetData:w,addNewNode:k,finishLoading:v}=z(g=>g);n.useEffect(()=>{if(a.current){const g=async()=>{f||w(),await m(r,d),c(!0),a.current=!1,f&&await J(r)},T=async()=>{const E=await oe(s||"",0,5);v(),a.current=!1,E&&k({nodes:E.nodes,edges:E.edges})};if(s){T();return}g()}},[s,f,m,r,d,c,w,a,v,k]),n.useEffect(()=>{if(!a.current){const g=async()=>{await m(r,d),c(!0),f&&await J(r)};w(),g()}},[f,m,r,d,c,w,a])},be=()=>{const e=n.useContext(ne);return e==null?void 0:e.socket},we={askedQuestions:null,askedQuestionsAnswers:null,hasQuestionInProgress:!1,hasTeachingInProgress:!1,hasInstagraphInProgress:!1,teachMeAnswer:null,instgraphAnswser:null},je=se(e=>({...we,setAskedQuestion:s=>e(a=>({askedQuestions:[...a.askedQuestions||[],s],hasQuestionInProgress:!0})),setAskedQuestionAnswer:s=>e(a=>({askedQuestionsAnswers:[...a.askedQuestionsAnswers||[],s],hasQuestionInProgress:!1})),setHasQuestionInProgress:s=>e({hasQuestionInProgress:s}),setHasTeachingInProgress:s=>e({hasTeachingInProgress:s}),setHasInstagraphInProgress:s=>e({hasInstagraphInProgress:s}),setTeachMeAnswer:s=>e({hasTeachingInProgress:!1,teachMeAnswer:s}),setInstagraphAnswer:s=>{var a,r,c,f;(a=s==null?void 0:s.instagraph)!=null&&a.edges&&((r=s==null?void 0:s.instagraph)!=null&&r.nodes)&&e({hasInstagraphInProgress:!1,instgraphAnswser:{edges:(c=s==null?void 0:s.instagraph)==null?void 0:c.edges,nodes:(f=s==null?void 0:s.instagraph)==null?void 0:f.nodes}})}})),ke="0.1.106",ve=n.lazy(()=>l(()=>import("./index-2507aa80.js"),["assets/index-2507aa80.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/ClipLoader-e1f47cb2.js","assets/Tabs-881f9696.js","assets/createSvgIcon-2ebd4f20.js"]).then(({SettingsModal:e})=>({default:e}))),Ee=n.lazy(()=>l(()=>import("./index-e01518a4.js").then(e=>e.i),["assets/index-e01518a4.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/string-a277709d.js"]).then(({ClaimsModal:e})=>({default:e}))),Te=n.lazy(()=>l(()=>import("./index-91c5c669.js"),["assets/index-91c5c669.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/CheckIcon-7fcad07d.js","assets/index-717b1eb9.js","assets/ClipLoader-e1f47cb2.js"]).then(({AddContentModal:e})=>({default:e}))),Ae=n.lazy(()=>l(()=>import("./index-eb748187.js"),["assets/index-eb748187.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/CheckIcon-7fcad07d.js","assets/index-717b1eb9.js","assets/ClipLoader-e1f47cb2.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/index-6113038e.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/index-64f1c910.js"]).then(({AddItemModal:e})=>({default:e}))),ze=n.lazy(()=>l(()=>import("./index-d0a1db57.js"),["assets/index-d0a1db57.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/index-5039cdd5.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/TableRow-d2362881.js","assets/constants-ee8cf8c7.js","assets/ClipLoader-e1f47cb2.js","assets/index-6113038e.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/index-70378634.js","assets/Typography-4d118673.js","assets/Tabs-881f9696.js"]).then(({SourcesTableModal:e})=>({default:e}))),Se=n.lazy(()=>l(()=>import("./index-4d83a614.js"),["assets/index-4d83a614.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Skeleton-efa6ce13.js","assets/ClipLoader-e1f47cb2.js"]).then(({EditNodeNameModal:e})=>({default:e}))),Le=n.lazy(()=>l(()=>import("./index-f87ab4cb.js"),["assets/index-f87ab4cb.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/Skeleton-efa6ce13.js","assets/ClipLoader-e1f47cb2.js"]).then(({RemoveNodeModal:e})=>({default:e}))),Ie=n.lazy(()=>l(()=>import("./index-2b8cbdf6.js"),["assets/index-2b8cbdf6.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/index-6113038e.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/constants-ee8cf8c7.js","assets/ClipLoader-e1f47cb2.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),Pe=n.lazy(()=>l(()=>import("./index-4be2802f.js"),["assets/index-4be2802f.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/index-70378634.js","assets/constants-ee8cf8c7.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/index-6113038e.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/ClipLoader-e1f47cb2.js"]).then(({MergeNodeModal:e})=>({default:e}))),Re=n.lazy(()=>l(()=>import("./index-3d3e1564.js"),["assets/index-3d3e1564.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/ClipLoader-e1f47cb2.js","assets/index-5039cdd5.js","assets/index-6113038e.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:e})=>({default:e}))),Ne=n.lazy(()=>l(()=>import("./index-b3cfb319.js"),["assets/index-b3cfb319.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-6113038e.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/index-5039cdd5.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/ClipLoader-e1f47cb2.js","assets/isPlainObject-4ca15a78.js","assets/index-272d12ff.js","assets/Tabs-881f9696.js","assets/index-b4a141ad.js","assets/three.module-9722a9fc.js","assets/Switch-fdb8a4f3.js","assets/FormControlLabel-c4bf04ab.js","assets/Typography-4d118673.js","assets/index-f28b47bd.js"]).then(({BlueprintModal:e})=>({default:e}))),Me=n.lazy(()=>l(()=>import("./index-3914752f.js"),["assets/index-3914752f.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/SucessFeedBackIcon-de294afd.js"]).then(({UserFeedBackModal:e})=>({default:e}))),Oe=n.lazy(()=>l(()=>import("./index-c1c1a040.js"),["assets/index-c1c1a040.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-1bc6ae74.js","assets/index-5039cdd5.js","assets/index-6113038e.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/FormControlLabel-c4bf04ab.js","assets/Typography-4d118673.js","assets/Switch-fdb8a4f3.js","assets/ClipLoader-e1f47cb2.js"]).then(({CreateBountyModal:e})=>({default:e}))),Ce=n.lazy(()=>l(()=>import("./index-ed6a3f3e.js").then(e=>e.cj),["assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css"]).then(({OnboardingModal:e})=>({default:e}))),Be=n.lazy(()=>l(()=>import("./index-dc602526.js").then(e=>e.i),["assets/index-dc602526.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-5039cdd5.js","assets/SoundIcon-9731d8d6.js"]).then(({BriefDescription:e})=>({default:e}))),De=n.lazy(()=>l(()=>import("./index-7dba6147.js"),["assets/index-7dba6147.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-eb6d03ab.js","assets/index-5039cdd5.js","assets/index-1bc6ae74.js","assets/index-6113038e.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/createSvgIcon-2ebd4f20.js","assets/TextareaAutosize-5fec1fb5.js","assets/FormControlLabel-c4bf04ab.js","assets/Typography-4d118673.js","assets/Switch-fdb8a4f3.js","assets/ClipLoader-e1f47cb2.js"]).then(({NodeActionModal:e})=>({default:e}))),$e=()=>t.jsxs(t.Fragment,{children:[t.jsx(Ae,{}),t.jsx(Te,{}),t.jsx(ve,{}),t.jsx(Se,{}),t.jsx(Le,{}),t.jsx(ze,{}),t.jsx(Ie,{}),t.jsx(Re,{}),t.jsx(Ne,{}),t.jsx(Pe,{}),t.jsx(Me,{}),t.jsx(Oe,{}),t.jsx(Ce,{}),t.jsx(Be,{}),t.jsx(De,{}),t.jsx(Ee,{})]}),Ve=()=>{const[e,s]=n.useState(null),{runningProjectMessages:a}=z(d=>d),r=d=>{s(d.currentTarget)},c=()=>{s(null)},f=!!e,m=f?"simple-popover":void 0;return a.length?t.jsxs(Fe,{ml:8,children:[t.jsx(Qe,{onClick:r,children:t.jsxs(ge,{content:"Messages",margin:"18px",children:[t.jsx("div",{className:"icon",children:t.jsx(re,{})}),t.jsx("div",{className:"text",children:t.jsx("p",{children:a.length})})]})}),t.jsxs(Ge,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:m,onClose:c,open:f,children:[t.jsx(ee,{onClick:c,children:t.jsx(ie,{})}),t.jsx(qe,{p:16,children:a.map(d=>t.jsx("p",{className:"item",children:d},d))})]})]}):null},Fe=h(p).attrs({align:"center",direction:"row",grow:0,justify:"flex-start"})``,qe=h(p)`
  max-height: 50vh;
  max-width: 30vw;
  background: transparent;
  padding-top: 1px !important;
  padding-bottom: 0 !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 9px;
    margin: 4px;
    overflow-y: hidden;
  }

  .item {
    padding: 8px 0;
    word-break: break-word;
    font-family: 'Barlow';
    font-size: 12px;
    font-weight: 400;
    text-align: right;
    color: ${i.GRAY6};
  }

  &:hover {
    background: ${i.MESSAGE_BG_HOVER};
  }
`,Qe=h(p).attrs({align:"center",direction:"row"})`
  display: flex;
  cursor: pointer;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ee=h.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${i.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${i.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`,Ge=h(pe)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${i.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${ee} {
        display: flex;
      }
    }
  }
`;h(p).attrs({})``;h(p).attrs({})``;h(p).attrs({direction:"row",grow:1})`
  margin-left: 10px;
  justify-content: between;
`;h(p).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${i.white};
  background: ${i.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`;h(p).attrs({align:"center",direction:"row"})`
  display: flex;
  height: 32px;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${i.white};
  background: ${i.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${i.BUTTON1_PRESS};
  }

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${i.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;h(p).attrs({align:"center",direction:"row"})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${i.white};
  background: ${i.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${i.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;const Ue=()=>{const e=R(d=>d.appMetaData),{resetAiSummaryAnswer:s,setNewLoading:a}=Z(),{abortFetchData:r,resetGraph:c}=z(d=>d),f=ce();if(!e)return null;const m=()=>{a(null),r(),c(),s(),f("/")};return t.jsxs(We,{children:[t.jsxs(He,{onClick:m,children:[t.jsx(t.Fragment,{children:e.title&&t.jsx(P,{className:"title",color:"white",children:e.title})}),t.jsx(P,{className:"subtitle",children:"Second Brain"})]}),!1,t.jsx(Ve,{})]})},We=h(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,He=h.div`
  ${ae.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
    cursor: pointer;
  }

  .subtitle {
    color: ${i.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
    margin-left: 8px;
    cursor: pointer;
  }
`,Ye=620,Je=()=>{const e=`(max-width: ${Ye}px)`,[s,a]=n.useState(()=>window.matchMedia(e).matches);return n.useEffect(()=>{const r=window.matchMedia(e);a(r.matches);const c=()=>{a(r.matches)};return window.addEventListener("resize",c),()=>r.removeEventListener("change",c)},[e]),s},Ke=()=>{const[e,s]=n.useState(!0),a=Je();n.useEffect(()=>{s(!0)},[a]);const r=()=>{s(!1)};return a&&e?t.jsxs(Xe,{align:"center",direction:"column",justify:"center",onClick:r,children:[t.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),t.jsxs(p,{align:"center",direction:"column",justify:"center",children:[t.jsx(I,{children:"Second Brain is currently"}),t.jsx(I,{style:{fontWeight:600},children:"optimized for Desktop."}),t.jsx(I,{children:"Mobile support coming soon."})]}),t.jsx(le,{color:"secondary",onClick:r,variant:"contained",children:"Got It"})]}):null},Xe=h(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,I=h(P)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Ze=h(de)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${i.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${i.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${i.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${i.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,et=h(p)`
  height: 100%;
  width: 100%;
  background-color: ${i.black};
`,tt=h(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${i.white};
  font-size: 12px;
  opacity: 0.5;
`,ot=n.lazy(()=>l(()=>import("./index-6257e9a4.js"),["assets/index-6257e9a4.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/SourcesTableIcon-3553f47d.js","assets/index-5039cdd5.js"]).then(({MainToolbar:e})=>({default:e}))),nt=n.lazy(()=>l(()=>import("./index-a09f4f84.js").then(e=>e.i),["assets/index-a09f4f84.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-f28b47bd.js","assets/three.module-9722a9fc.js","assets/index-272d12ff.js","assets/index-5039cdd5.js","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/TextareaAutosize-5fec1fb5.js","assets/index-1710acb8.js","assets/index-eb6d03ab.js","assets/ClipLoader-e1f47cb2.js","assets/clsx-ee984d51.js"]).then(({Universe:e})=>({default:e}))),st=n.lazy(()=>l(()=>import("./index-95db7518.js").then(e=>e.r),["assets/index-95db7518.js","assets/index-ed6a3f3e.js","assets/index-b4d03b7b.css","assets/index-9dc1bac9.js","assets/SourcesTableIcon-3553f47d.js","assets/index-5039cdd5.js","assets/CheckIcon-7fcad07d.js","assets/DeleteNodeIcon-4e9e83ff.js","assets/SoundIcon-9731d8d6.js","assets/SucessFeedBackIcon-de294afd.js","assets/ClipLoader-e1f47cb2.js","assets/Skeleton-efa6ce13.js","assets/index-dc602526.js","assets/Stack-dcf9700c.js","assets/clsx-ee984d51.js","assets/FormControlLabel-c4bf04ab.js","assets/Typography-4d118673.js","assets/createSvgIcon-2ebd4f20.js","assets/isPlainObject-4ca15a78.js","assets/string-a277709d.js","assets/index-272d12ff.js","assets/index-1710acb8.js"]).then(({SideBar:e})=>({default:e}))),at=()=>{const[e]=K(),s=e.get("q"),{setNodeCount:a}=X(o=>o),r=n.useRef(null),c=n.useRef(null);ye();const{setCurrentSearch:f,setRelevanceSelected:m,setTranscriptOpen:d,universeQuestionIsOpen:w,setUniverseQuestionIsOpen:k}=R(o=>o),v=je(o=>o.setTeachMeAnswer),{setCategoryFilter:g,addNewNode:T,splashDataLoading:E,runningProjectId:j,setRunningProjectMessages:N,isFetching:M}=z(o=>o),{setAiSummaryAnswer:_,getKeyExist:O,aiRefId:S}=Z(o=>o),[L,b,C]=ue(o=>[o.realtimeGraphFeatureFlag,o.chatInterfaceFeatureFlag,o.chatSplashScreenAsDefault]),u=be(),B=he({mode:"onChange"}),{setValue:D}=B;n.useEffect(()=>{C&&b&&k()},[b,C,k]),n.useEffect(()=>{D("search",s??""),d(!1),m(!1),f(s??""),v(""),g(null)},[s,g,f,m,v,d,D]);const $=n.useCallback(()=>{a("INCREMENT")},[a]),V=n.useCallback(o=>{M||(r.current||(r.current={nodes:[],edges:[]}),o.edges&&r.current.edges.push(...o.edges),o.nodes&&r.current.nodes.push(...o.nodes),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{if(r.current){const{nodes:y,edges:x}=r.current,A={nodes:y,edges:x};r.current={nodes:[],edges:[]},T(A)}},3e3))},[T,M]),F=n.useCallback(o=>{console.log(o)},[]),q=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{answer:o.answer,answerLoading:!1})},[_]),Q=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{audio_en:o.audio_EN})},[_]),G=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{questions:o.relevant_questions.map(y=>y.question),questionsLoading:!1})},[_]),U=n.useCallback(o=>{o.ref_id&&_(o.ref_id,{sources:o.sources.map(y=>y.ref_id),sourcesLoading:!1})},[_]),W=n.useCallback(o=>{o.question&&O(S)&&_(S,{answerLoading:!1,entities:o.entities})},[_,O,S]);return n.useEffect(()=>(u&&(u.connect(),u.on("connect_error",o=>{console.error("Socket connection error:",o)}),u.on("newnode",$),b&&u.on("extractedentitieshook",W),b&&u.on("askquestionhook",q),b&&u.on("relevantquestionshook",G),b&&u.on("answersourceshook",U),L&&u.on("new_node_created",V),L&&u.on("node_updated",F),b&&u.on("answeraudiohook",Q)),()=>{u&&u.off()}),[u,$,V,L,q,b,G,U,W,Q,F]),n.useEffect(()=>{if(!j)return;const o=new WebSocket("wss://jobs.stakwork.com/cable?channel=ProjectLogChannel");o.onopen=()=>{const x={command:"subscribe",identifier:JSON.stringify({channel:"ProjectLogChannel",id:j})};o.send(JSON.stringify(x))},o.onmessage=y=>{var H;const x=JSON.parse(y.data);if(x.type==="ping")return;const A=x==null?void 0:x.message;if(A.type==="on_step_start"||A.type==="on_step_complete"){const Y=(H=x==null?void 0:x.message)==null?void 0:H.message;Y&&N(Y)}},o.onerror=y=>{console.error("WebSocket error:",y)}},[j,N]),n.useEffect(()=>{if(j)try{u==null||u.emit("update_project_id",{id:j})}catch(o){console.error(o)}},[j,u]),t.jsxs(t.Fragment,{children:[t.jsx(_e,{}),t.jsx(Ke,{}),t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:E?null:t.jsxs(et,{direction:"row",children:[t.jsxs(fe,{...B,children:[t.jsx(ot,{}),!w&&t.jsx(st,{}),t.jsx(nt,{}),t.jsx(me,{}),t.jsx(Ue,{}),t.jsxs(tt,{children:["v",ke]}),t.jsx(xe,{})]}),t.jsx($e,{}),t.jsx(Ze,{})]})})]})};export{at as App};
