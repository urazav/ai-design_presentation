import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as a}from"./Badge-DllRDJm6.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-IcxkHyMa.js";const R={title:"Atoms/Badge",component:a,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-596"},layout:"centered"},argTypes:{category:{control:"select",options:["status","tag"],description:"Maps to Figma Category property"},variant:{control:"select",options:["active","pending","verified","error","violet","green","grey","outline"],description:"Maps to Figma Variant property"},children:{control:"text"}}},r={args:{category:"status",variant:"active",children:"Active"}},t={args:{category:"status",variant:"pending",children:"Pending"}},n={args:{category:"status",variant:"verified",children:"Verified"}},s={name:"Error",args:{category:"status",variant:"error",children:"Error"}},i={name:"Tag / Violet",args:{category:"tag",variant:"violet",children:"Magnetiq"}},o={name:"Tag / Green",args:{category:"tag",variant:"green",children:"Growth"}},g={name:"Tag / Grey",args:{category:"tag",variant:"grey",children:"Standard"}},c={name:"Tag / Outline",args:{category:"tag",variant:"outline",children:"Collaborate"}},d={name:"All Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("strong",{style:{width:"60px",fontSize:"11px",color:"#586977"},children:"Status"}),e.jsx(a,{category:"status",variant:"active",children:"Active"}),e.jsx(a,{category:"status",variant:"pending",children:"Pending"}),e.jsx(a,{category:"status",variant:"verified",children:"Verified"}),e.jsx(a,{category:"status",variant:"error",children:"Error"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("strong",{style:{width:"60px",fontSize:"11px",color:"#586977"},children:"Tag"}),e.jsx(a,{category:"tag",variant:"violet",children:"Magnetiq"}),e.jsx(a,{category:"tag",variant:"green",children:"Growth"}),e.jsx(a,{category:"tag",variant:"grey",children:"Standard"}),e.jsx(a,{category:"tag",variant:"outline",children:"Collaborate"})]})]})};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    category: 'status',
    variant: 'active',
    children: 'Active'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,v,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    category: 'status',
    variant: 'pending',
    children: 'Pending'
  }
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,h,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    category: 'status',
    variant: 'verified',
    children: 'Verified'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var B,S,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    category: 'status',
    variant: 'error',
    children: 'Error'
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,V,G;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Tag / Violet',
  args: {
    category: 'tag',
    variant: 'violet',
    children: 'Magnetiq'
  }
}`,...(G=(V=i.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var w,A,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Tag / Green',
  args: {
    category: 'tag',
    variant: 'green',
    children: 'Growth'
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var P,M,z;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Tag / Grey',
  args: {
    category: 'tag',
    variant: 'grey',
    children: 'Standard'
  }
}`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var C,I,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Tag / Outline',
  args: {
    category: 'tag',
    variant: 'outline',
    children: 'Collaborate'
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var b,q,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <strong style={{
        width: '60px',
        fontSize: '11px',
        color: '#586977'
      }}>Status</strong>
        <Badge category="status" variant="active">Active</Badge>
        <Badge category="status" variant="pending">Pending</Badge>
        <Badge category="status" variant="verified">Verified</Badge>
        <Badge category="status" variant="error">Error</Badge>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <strong style={{
        width: '60px',
        fontSize: '11px',
        color: '#586977'
      }}>Tag</strong>
        <Badge category="tag" variant="violet">Magnetiq</Badge>
        <Badge category="tag" variant="green">Growth</Badge>
        <Badge category="tag" variant="grey">Standard</Badge>
        <Badge category="tag" variant="outline">Collaborate</Badge>
      </div>
    </div>
}`,...(D=(q=d.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const U=["Active","Pending","Verified","ErrorBadge","TagViolet","TagGreen","TagGrey","TagOutline","AllVariants"];export{r as Active,d as AllVariants,s as ErrorBadge,t as Pending,o as TagGreen,g as TagGrey,c as TagOutline,i as TagViolet,n as Verified,U as __namedExportsOrder,R as default};
