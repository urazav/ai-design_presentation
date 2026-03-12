import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as l,s as r}from"./styled-components.browser.esm-IcxkHyMa.js";import{B as g}from"./Badge-DllRDJm6.js";import{B as z}from"./Button-DuWHw011.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x={none:r`box-shadow: none;`,sm:r`box-shadow: var(--shadow-sm);`,md:r`box-shadow: var(--shadow-md);`,lg:r`box-shadow: var(--shadow-lg);`},W=l.div`
  background-color: var(--surface-primary);
  border:           1px solid var(--border-subtle);
  border-radius:    var(--radius-standard);
  padding:          var(--space-6);
  display:          flex;
  flex-direction:   column;
  gap:              var(--space-3);
  transition:       box-shadow 200ms ease;

  ${({$elevation:t})=>x[t]}

  &:hover {
    box-shadow: var(--shadow-md);
  }
`,q=l.div`
  display:          flex;
  border-radius:    var(--radius-standard);
  overflow:         hidden;
  transition:       box-shadow 200ms ease;

  ${({$elevation:t})=>x[t]}

  /* Responsive: stack on mobile */
  @media (max-width: 640px) {
    flex-direction: column;
  }
`,_=l.div`
  flex:             1;
  background:       var(--gradient-magnetic-dark);
  background-color: var(--color-violet-deep);
  padding:          var(--space-7);
  display:          flex;
  flex-direction:   column;
  justify-content:  flex-end;
  gap:              var(--space-3);
  min-height:       240px;
  color:            #ffffff;
`,B=l.div`
  flex:             1;
  background-color: var(--surface-primary);
  padding:          var(--space-7);
  display:          flex;
  flex-direction:   column;
  gap:              var(--space-4);
`,a=t=>{if(t.variant==="magnetiq-divide"){const{variant:N,leftContent:w,rightContent:j,elevation:C="md",...F}=t;return e.jsxs(q,{$elevation:C,...F,children:[e.jsx(_,{children:w}),e.jsx(B,{children:j})]})}const{variant:D,elevation:u="sm",children:b,...S}=t;return e.jsx(W,{$elevation:u,...S,children:b})};a.displayName="Card";try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"magnetiq-divide"'}]}},elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},leftContent:{defaultValue:null,description:"Content for the dark gradient left panel",name:"leftContent",required:!0,type:{name:"ReactNode"}},rightContent:{defaultValue:null,description:"Content for the light right panel",name:"rightContent",required:!0,type:{name:"ReactNode"}}}}}catch{}const $={title:"Molecules/Card",component:a,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-620"},layout:"padded"}},o={render:()=>e.jsxs(a,{variant:"default",style:{width:320},children:[e.jsx(g,{category:"status",variant:"active",children:"Active"}),e.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"var(--text-h3)",fontWeight:600,color:"var(--text-heading)"},children:"Savings Account"}),e.jsx("p",{style:{fontFamily:"var(--font-heading)",fontSize:"var(--text-h2)",fontWeight:800,color:"var(--action-primary)"},children:"$12,450.00"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-body-m)",color:"var(--text-body)"},children:"Last updated: just now"}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-subtle)"}}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-label-s)",color:"var(--color-grey-main)"},children:"Account No: **** 4821"})]})},n={name:"Magnetiq Divide",render:()=>e.jsx(a,{variant:"magnetiq-divide",style:{width:640},leftContent:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-label-s)",fontWeight:700,color:"var(--color-green-bright)",letterSpacing:"3px"},children:"MAGNETIQ"}),e.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"var(--text-h2)",fontWeight:600,lineHeight:"120%"},children:["Power in",e.jsx("br",{}),"Collaboration"]})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(g,{category:"tag",variant:"grey",children:"New Feature"}),e.jsxs("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"var(--text-h3)",fontWeight:600,color:"var(--text-heading)"},children:["Collaborative",e.jsx("br",{}),"Finance"]}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-body-l)",color:"var(--text-body)",lineHeight:"150%"},children:"Shared accounts, goals, and insights — all in one place for teams and families."}),e.jsx(z,{variant:"primary",children:"Get Started"})]})})},i={name:"Elevation Variants",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:["none","sm","md","lg"].map(t=>e.jsxs(a,{variant:"default",elevation:t,style:{width:180},children:[e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-label-s)",color:"var(--text-body)",fontWeight:700},children:t}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"var(--text-body-m)",color:"var(--text-body)"},children:"Shadow example"})]},t))})};var d,s,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Card variant="default" style={{
    width: 320
  }}>
      <Badge category="status" variant="active">Active</Badge>
      <h3 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }}>
        Savings Account
      </h3>
      <p style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 800,
      color: 'var(--action-primary)'
    }}>
        $12,450.00
      </p>
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-body)'
    }}>
        Last updated: just now
      </p>
      <hr style={{
      border: 'none',
      borderTop: '1px solid var(--border-subtle)'
    }} />
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-s)',
      color: 'var(--color-grey-main)'
    }}>
        Account No: **** 4821
      </p>
    </Card>
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var v,f,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Magnetiq Divide',
  render: () => <Card variant="magnetiq-divide" style={{
    width: 640
  }} leftContent={<>
          <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-s)',
      fontWeight: 700,
      color: 'var(--color-green-bright)',
      letterSpacing: '3px'
    }}>
            MAGNETIQ
          </span>
          <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 600,
      lineHeight: '120%'
    }}>
            Power in<br />Collaboration
          </h2>
        </>} rightContent={<>
          <Badge category="tag" variant="grey">New Feature</Badge>
          <h3 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }}>
            Collaborative<br />Finance
          </h3>
          <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-body)',
      lineHeight: '150%'
    }}>
            Shared accounts, goals, and insights — all in one place for teams and families.
          </p>
          <Button variant="primary">Get Started</Button>
        </>} />
}`,...(m=(f=n.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var p,h,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Elevation Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      {(['none', 'sm', 'md', 'lg'] as const).map(e => <Card key={e} variant="default" elevation={e} style={{
      width: 180
    }}>
          <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-label-s)',
        color: 'var(--text-body)',
        fontWeight: 700
      }}>
            {e}
          </p>
          <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-m)',
        color: 'var(--text-body)'
      }}>
            Shadow example
          </p>
        </Card>)}
    </div>
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const G=["Default","MagnetiqDivide","Elevation"];export{o as Default,i as Elevation,n as MagnetiqDivide,G as __namedExportsOrder,$ as default};
