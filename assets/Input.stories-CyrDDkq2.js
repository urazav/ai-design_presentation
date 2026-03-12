import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{I as a}from"./Input-BO3NrDEI.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-IcxkHyMa.js";const R={title:"Atoms/Input",component:a,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-572"},layout:"centered"},argTypes:{type:{control:"select",options:["text","password","search","email"],description:"Input type — maps to Figma Type property"},state:{control:"select",options:["default","focus","filled","error","success","disabled"],description:"Visual state — maps to Figma State property"},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},successMessage:{control:"text"},fullWidth:{control:"boolean"}}},s={args:{label:"Email address",placeholder:"you@magnetiq.bank",type:"text"}},t={args:{label:"Password",placeholder:"••••••••",type:"password"}},r={args:{type:"search",placeholder:"Search transactions…"}},l={args:{label:"Account name",placeholder:"Enter name",state:"focus"}},o={args:{label:"Account name",defaultValue:"Alex Morgan",state:"filled"}},c={name:"Error",args:{label:"Email address",defaultValue:"not-an-email",state:"error",errorMessage:"Please enter a valid email address."}},n={name:"Success",args:{label:"Email address",defaultValue:"alex@magnetiq.bank",state:"success",successMessage:"Email verified!"}},d={args:{label:"Account number",defaultValue:"**** 4821",disabled:!0}},u={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"320px"},children:[e.jsx(a,{label:"Default",placeholder:"Placeholder text",type:"text"}),e.jsx(a,{label:"Focus",placeholder:"Focused value",type:"text",state:"focus"}),e.jsx(a,{label:"Filled",defaultValue:"Filled value",type:"text",state:"filled"}),e.jsx(a,{label:"Error",defaultValue:"Invalid input",type:"text",state:"error",errorMessage:"This field is required."}),e.jsx(a,{label:"Success",defaultValue:"Valid input",type:"text",state:"success",successMessage:"Looks good!"}),e.jsx(a,{label:"Disabled",defaultValue:"Disabled",type:"text",disabled:!0})]})};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@magnetiq.bank',
    type: 'text'
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: '••••••••',
    type: 'password'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,y,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search transactions…'
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,V,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Account name',
    placeholder: 'Enter name',
    state: 'focus'
  }
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,v,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Account name',
    defaultValue: 'Alex Morgan',
    state: 'filled'
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,D,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Email address',
    defaultValue: 'not-an-email',
    state: 'error',
    errorMessage: 'Please enter a valid email address.'
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,j,P;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Success',
  args: {
    label: 'Email address',
    defaultValue: 'alex@magnetiq.bank',
    state: 'success',
    successMessage: 'Email verified!'
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var k,q,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Account number',
    defaultValue: '**** 4821',
    disabled: true
  }
}`,...(T=(q=d.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var Y,L,_;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '320px'
  }}>
      <Input label="Default" placeholder="Placeholder text" type="text" />
      <Input label="Focus" placeholder="Focused value" type="text" state="focus" />
      <Input label="Filled" defaultValue="Filled value" type="text" state="filled" />
      <Input label="Error" defaultValue="Invalid input" type="text" state="error" errorMessage="This field is required." />
      <Input label="Success" defaultValue="Valid input" type="text" state="success" successMessage="Looks good!" />
      <Input label="Disabled" defaultValue="Disabled" type="text" disabled />
    </div>
}`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const U=["Default","Password","Search","Focus","Filled","ErrorState","SuccessState","Disabled","AllStates"];export{u as AllStates,s as Default,d as Disabled,c as ErrorState,o as Filled,l as Focus,t as Password,r as Search,n as SuccessState,U as __namedExportsOrder,R as default};
