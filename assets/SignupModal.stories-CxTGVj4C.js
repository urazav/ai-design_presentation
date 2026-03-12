import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as n}from"./index-pP6CS22B.js";import{B as b}from"./Button-DuWHw011.js";import{I as p}from"./Input-BO3NrDEI.js";import{B as u}from"./Badge-DllRDJm6.js";import{c as r,p as _}from"./styled-components.browser.esm-IcxkHyMa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F=_`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,R=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`,E=r.div`
  display: flex;
  width: 880px;
  max-width: 100%;
  height: 640px;
  border-radius: var(--radius-standard, 8px);
  overflow: hidden;
  box-shadow: 0 24px 64px -8px rgba(16, 0, 40, 0.22);
  animation: ${F} 0.22s ease-out;
  background: var(--surface-primary);
`,N=r.div`
  position: relative;
  width: 320px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #280068 0%, #5100c0 100%);
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,f=r.div`
  position: absolute;
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50%;
  background: ${t=>t.$color};
  opacity: ${t=>t.$opacity};
  filter: blur(${t=>t.$blur}px);
  pointer-events: none;
  ${t=>t.$top!==void 0?`top: ${t.$top}px;`:""}
  ${t=>t.$bottom!==void 0?`bottom: ${t.$bottom}px;`:""}
  ${t=>t.$left!==void 0?`left: ${t.$left}px;`:""}
  ${t=>t.$right!==void 0?`right: ${t.$right}px;`:""}
`,Y=r.span`
  font-family: var(--font-label);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--action-success);
  position: relative;
`,V=r.h2`
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin: 28px 0 14px;
  position: relative;
`,H=r.p`
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.6;
  color: var(--brand-grey-light, #d1dde8);
  margin: 0;
  position: relative;
`,O=r.div`
  width: 48px;
  height: 2px;
  background: var(--action-success);
  margin: 24px 0;
  position: relative;
`,G=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`,L=r.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
`,K=r.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.$color==="green"?"var(--action-success)":"var(--action-primary)"};
`,U=r.div`
  margin-top: auto;
  position: relative;
`,X=r.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 16px;
`,J=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Q=r.div`
  display: flex;
`,Z=r.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${t=>t.$color};
  border: 2px solid #280068;
  margin-left: ${t=>t.$offset}px;
  flex-shrink: 0;
`,ee=r.span`
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 1.4;
  color: var(--brand-grey-light, #d1dde8);
`,te=r.div`
  flex: 1;
  background: var(--surface-primary);
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`,re=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`,v=r.div`
  width: 16px;
  height: 1px;
  background: var(--border-subtle);
`,oe=r.h3`
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0 0 4px;
`,ne=r.p`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-body);
  margin: 0 0 24px;
`,ae=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
`,ie=r.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`,se=r.input`
  margin-top: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  accent-color: var(--action-primary);
  cursor: pointer;
`,le=r.span`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.5;

  a {
    color: var(--action-primary);
    text-decoration: underline;
  }
`,de=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ce=r.div`
  width: 1px;
  background: var(--border-subtle);
  flex-shrink: 0;
`,pe=[{dot:"green",label:"Free global transfers"},{dot:"violet",label:"Shared team accounts"},{dot:"green",label:"Real-time collaboration"},{dot:"green",label:"FSCS protected"}],ue=["#6b52ff","#00d180","#5100c0"],l=({open:t=!0,onClose:d,onSubmit:c,onSignIn:T})=>{const[m,z]=n.useState(""),[g,I]=n.useState(""),[x,P]=n.useState(""),[h,M]=n.useState(!1);if(!t)return null;const q=o=>{o.preventDefault(),c==null||c({fullName:m,email:g,password:x})},D=o=>{o.target===o.currentTarget&&(d==null||d())};return e.jsx(R,{onClick:D,role:"dialog","aria-modal":"true","aria-labelledby":"signup-title",children:e.jsxs(E,{children:[e.jsxs(N,{children:[e.jsx(f,{$size:260,$bottom:-80,$right:-80,$color:"#6b52ff",$opacity:.18,$blur:40}),e.jsx(f,{$size:160,$bottom:-60,$left:-40,$color:"#00d180",$opacity:.14,$blur:32}),e.jsx(f,{$size:80,$top:-20,$right:-20,$color:"#6b52ff",$opacity:.2,$blur:20}),e.jsx(Y,{children:"Magnetiq Bank"}),e.jsxs(V,{children:["Power in",e.jsx("br",{}),"Collaboration"]}),e.jsx(H,{children:"Your next-generation banking partner for individuals and teams."}),e.jsx(O,{}),e.jsx(G,{children:pe.map(o=>e.jsxs(L,{children:[e.jsx(K,{$color:o.dot}),o.label]},o.label))}),e.jsxs(U,{children:[e.jsx(X,{}),e.jsxs(J,{children:[e.jsx(Q,{children:ue.map((o,W)=>e.jsx(Z,{$color:o,$offset:W===0?0:-8},o))}),e.jsxs(ee,{children:["Trusted by 50,000+",e.jsx("br",{}),"customers worldwide"]})]})]})]}),e.jsx(ce,{}),e.jsxs(te,{children:[e.jsxs(re,{children:[e.jsx(u,{category:"status",variant:"active",children:"Personal"}),e.jsx(v,{}),e.jsx(u,{category:"tag",variant:"grey",children:"Security"}),e.jsx(v,{}),e.jsx(u,{category:"tag",variant:"grey",children:"Verify"})]}),e.jsx(oe,{id:"signup-title",children:"Create your account"}),e.jsx(ne,{children:"Step 1 of 3 — Tell us about yourself"}),e.jsxs("form",{onSubmit:q,children:[e.jsxs(ae,{children:[e.jsx(p,{type:"text",label:"Full name",placeholder:"e.g. Alex Morgan",helperText:"Your legal name as shown on your ID",value:m,onChange:o=>z(o.target.value),fullWidth:!0,required:!0}),e.jsx(p,{type:"email",label:"Email address",placeholder:"e.g. alex@magnetiq.bank",helperText:"We'll send your account confirmation here",value:g,onChange:o=>I(o.target.value),fullWidth:!0,required:!0}),e.jsx(p,{type:"password",label:"Password",placeholder:"Min. 8 characters",helperText:"Min. 8 characters including one number",value:x,onChange:o=>P(o.target.value),fullWidth:!0,required:!0})]}),e.jsxs(ie,{children:[e.jsx(se,{type:"checkbox",checked:h,onChange:o=>M(o.target.checked),required:!0}),e.jsxs(le,{children:["I agree to the"," ",e.jsx("a",{href:"#terms",onClick:o=>o.preventDefault(),children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#privacy",onClick:o=>o.preventDefault(),children:"Privacy Policy"})]})]}),e.jsxs(de,{children:[e.jsx(b,{variant:"primary",size:"lg",fullWidth:!0,type:"submit",disabled:!h,children:"Continue to Security →"}),e.jsx(b,{variant:"ghost",size:"lg",fullWidth:!0,type:"button",onClick:T,children:"Already have an account? Sign in"})]})]})]})]})})};l.displayName="SignupModal";try{l.displayName="SignupModal",l.__docgenInfo={description:"",displayName:"SignupModal",props:{open:{defaultValue:{value:"true"},description:"Whether the modal is visible",name:"open",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Called when the user requests to close the modal",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onSubmit:{defaultValue:null,description:"Called when the primary CTA is submitted",name:"onSubmit",required:!1,type:{name:"((values: { fullName: string; email: string; password: string; }) => void) | undefined"}},onSignIn:{defaultValue:null,description:'Called when "Sign in" is clicked',name:"onSignIn",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ye={title:"Molecules/SignupModal",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=13-253"},docs:{description:{component:"\n**Signup Modal — Step 1 of 3 (Personal details)**\n\nA full-screen modal built entirely from DS Kit primitives:\n- `Badge` → step indicator (Status/Active + Tag/Grey)\n- `Input` → form fields with labels and helper text (text, email, password types)\n- `Button` → CTA (primary, full-width) and sign-in link (ghost, full-width)\n\nAll colours reference CSS custom properties from `foundations/variables.css`\n(`--action-primary`, `--surface-primary`, `--border-subtle`, etc.)\nso the modal responds automatically to light/dark theme switching.\n        "}}},argTypes:{open:{control:"boolean"},onClose:{action:"onClose"},onSubmit:{action:"onSubmit"},onSignIn:{action:"onSignIn"}}},a={name:"Step 1 — Personal",args:{open:!0}},i={name:"Closed",args:{open:!1}},s={name:"With Action Handlers",args:{open:!0},parameters:{docs:{description:{story:"Open the Actions panel to see `onSubmit`, `onClose`, and `onSignIn` events fire."}}}};var y,$,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Step 1 — Personal',
  args: {
    open: true
  }
}`,...(S=($=a.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var j,w,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Closed',
  args: {
    open: false
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,A,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Action Handlers',
  args: {
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Open the Actions panel to see \`onSubmit\`, \`onClose\`, and \`onSignIn\` events fire.'
      }
    }
  }
}`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const $e=["Default","Closed","WithHandlers"];export{i as Closed,a as Default,s as WithHandlers,$e as __namedExportsOrder,ye as default};
