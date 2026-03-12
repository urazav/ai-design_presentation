import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{B as a}from"./Button-DuWHw011.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-IcxkHyMa.js";const k={title:"Atoms/Button",component:a,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-508"}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost"],description:"Visual style — maps to Figma Type property"},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},children:{control:"text"}}},e={args:{variant:"primary",children:"Get Started"}},t={args:{variant:"secondary",children:"Learn More"}},n={args:{variant:"ghost",children:"Collaborate"}},s={args:{variant:"primary",children:"Unavailable",disabled:!0}},i={args:{variant:"primary",loading:!0,children:"Sending…"}},o={args:{variant:"primary",children:"Continue",fullWidth:!0},parameters:{layout:"padded"}},d={name:"All Variants",render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"primary",disabled:!0,children:"Disabled"}),r.jsx(a,{variant:"primary",loading:!0,children:"Loading"})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Get Started'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Learn More'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Collaborate'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,B,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Unavailable',
    disabled: true
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,j,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Sending…'
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var L,G,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Continue',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(W=(G=o.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var w,P,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
    </div>
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,I,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const E=["Primary","Secondary","Ghost","Disabled","Loading","FullWidth","AllVariants","Sizes"];export{d as AllVariants,s as Disabled,o as FullWidth,n as Ghost,i as Loading,e as Primary,t as Secondary,l as Sizes,E as __namedExportsOrder,k as default};
