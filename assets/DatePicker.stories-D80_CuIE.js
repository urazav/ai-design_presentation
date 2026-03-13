import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{r as c}from"./index-pP6CS22B.js";import{c as n,s as g}from"./styled-components.browser.esm-IcxkHyMa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ve={default:"var(--border-subtle)",focus:"var(--action-primary)",filled:"var(--color-grey-main)",error:"#FF3B30",disabled:"var(--color-grey-ultra-light)"},De={default:"1px",focus:"2px",filled:"1px",error:"2px",disabled:"1px"},we=n.div`
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
  position:       relative;
  width:          ${({$fullWidth:e})=>e?"100%":"280px"};
  font-family:    var(--font-body);
`,ke=n.label`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color: ${({$state:e})=>e==="error"?"#FF3B30":"var(--text-body)"};
  cursor: default;
`,Me=n.button`
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-2);
  padding:          0 var(--space-4);
  height:           56px;
  width:            100%;
  background-color: var(--surface-secondary);
  border-radius:    var(--radius-stability);
  border:           ${({$state:e})=>`${De[e]} solid ${ve[e]}`};
  cursor:           ${({$state:e})=>e==="disabled"?"not-allowed":"pointer"};
  opacity:          ${({$state:e})=>e==="disabled"?.5:1};
  transition:       border-color 150ms ease;
  text-align:       left;

  &:focus-visible {
    outline:       none;
    border-width:  2px;
    border-color:  ${({$state:e})=>e==="error"?"#FF3B30":"var(--action-primary)"};
  }
`,Ye=n.span`
  font-family:    var(--font-body);
  font-size:      var(--text-body-m);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color:          ${({$hasValue:e})=>"var(--text-body)"};
  opacity:        ${({$hasValue:e})=>e?1:.5};
  flex:           1;
  min-width:      0;
`,je=n.svg`
  width:      16px;
  height:     16px;
  flex-shrink: 0;
  color:      var(--text-body);
  opacity:    0.6;
`,Se=n.div`
  position:         absolute;
  top:              calc(100% + var(--space-1));
  left:             0;
  z-index:          100;
  background:       var(--surface-primary);
  border:           1px solid var(--border-subtle);
  border-radius:    var(--radius-standard);
  padding:          var(--space-4);
  box-shadow:       var(--shadow-md);
  min-width:        280px;
`,Fe=n.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   var(--space-3);
`,$e=n.span`
  font-family:    var(--font-body);
  font-size:      var(--text-body-m);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color:          var(--text-heading);
`,_=n.button`
  display:          flex;
  align-items:      center;
  justify-content:  center;
  width:            28px;
  height:           28px;
  border:           none;
  background:       transparent;
  border-radius:    var(--radius-standard);
  color:            var(--text-body);
  cursor:           pointer;
  transition:       background-color 120ms ease;

  &:hover {
    background-color: var(--surface-secondary);
    color:            var(--text-heading);
  }

  &:focus-visible {
    outline:        2px solid var(--action-primary);
    outline-offset: 1px;
  }
`,Ee=n.div`
  display:       grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: var(--space-1);
`,Te=n.span`
  display:         flex;
  align-items:     center;
  justify-content: center;
  height:          32px;
  font-family:     var(--font-body);
  font-size:       var(--text-label-s);
  font-weight:     500;
  letter-spacing:  var(--tracking-wide);
  color:           var(--text-body);
  opacity:         0.5;
  text-transform:  uppercase;
`,Ce=n.div`
  display:               grid;
  grid-template-columns: repeat(7, 1fr);
  gap:                   2px;
`,Ve=n.button`
  display:          flex;
  align-items:      center;
  justify-content:  center;
  height:           36px;
  width:            100%;
  border:           none;
  border-radius:    var(--radius-standard);
  font-family:      var(--font-body);
  font-size:        var(--text-body-m);
  font-weight:      400;
  letter-spacing:   var(--tracking-wide);
  cursor:           pointer;
  position:         relative;
  transition:       background-color 120ms ease, color 120ms ease;

  /* Default */
  background-color: transparent;
  color:            var(--text-heading);

  /* Outside-month days */
  ${({$outside:e})=>e&&g`
    color:           var(--color-grey-main);
    pointer-events:  none;
  `}

  /* Disabled days */
  ${({$disabled:e,$outside:a})=>e&&!a&&g`
    color:          var(--color-grey-main);
    cursor:         not-allowed;
    pointer-events: none;
  `}

  /* Today indicator — dot below the number */
  ${({$today:e})=>e&&g`
    font-weight: 700;
    color:       var(--action-primary);

    &::after {
      content:          '';
      position:         absolute;
      bottom:           3px;
      left:             50%;
      transform:        translateX(-50%);
      width:            4px;
      height:           4px;
      border-radius:    50%;
      background-color: var(--action-primary);
    }
  `}

  /* Selected day */
  ${({$selected:e})=>e&&g`
    background-color: var(--action-primary);
    color:            var(--color-white);
    font-weight:      700;
    border-radius:    var(--radius-magnetic);

    &:hover {
      background-color: var(--color-violet-deep);
    }
  `}

  /* Hover (non-selected, non-disabled) */
  ${({$selected:e,$disabled:a,$outside:d})=>!e&&!a&&!d&&g`
    &:hover {
      background-color: var(--surface-secondary);
    }
  `}

  &:focus-visible {
    outline:        2px solid var(--action-primary);
    outline-offset: -2px;
  }
`,We=n.span`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color: ${({$state:e})=>e==="error"?"#FF3B30":"var(--color-grey-main)"};
`,Pe=["Su","Mo","Tu","We","Th","Fr","Sa"],Be=["January","February","March","April","May","June","July","August","September","October","November","December"];function I(e,a){return e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth()&&e.getDate()===a.getDate()}function i(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function qe(e,a){const Y=new Date(e,a,1).getDay(),l=[];for(let o=Y-1;o>=0;o--)l.push(new Date(e,a,-o));const u=new Date(e,a+1,0).getDate();for(let o=1;o<=u;o++)l.push(new Date(e,a,o));const h=42-l.length;for(let o=1;o<=h;o++)l.push(new Date(e,a+1,o));return l}function N(e){const a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${a}/${d}/${e.getFullYear()}`}const s=({value:e,onChange:a,label:d,helperText:Y,errorMessage:l,state:u,placeholder:h="MM / DD / YYYY",minDate:o,maxDate:b,fullWidth:ce=!1,disabled:ue,id:pe})=>{const fe=c.useId(),W=pe??fe,j=new Date,[S,F]=c.useState(!1),[P,B]=c.useState((e==null?void 0:e.getFullYear())??j.getFullYear()),[p,m]=c.useState((e==null?void 0:e.getMonth())??j.getMonth()),$=c.useRef(null),f=ue||u==="disabled",q=u==="error"||!!l,E=f?"disabled":q?"error":S?"focus":!f&&!q&&!!e?"filled":u??"default",L=l??Y;c.useEffect(()=>{const t=T=>{$.current&&!$.current.contains(T.target)&&F(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);function ge(){p===0?(m(11),B(t=>t-1)):m(t=>t-1)}function he(){p===11?(m(0),B(t=>t+1)):m(t=>t+1)}function be(t){f||o&&i(t)<i(o)||b&&i(t)>i(b)||(a==null||a(t),F(!1))}const me=qe(P,p);return r.jsxs(we,{$fullWidth:ce,ref:$,children:[d&&r.jsx(ke,{htmlFor:W,$state:E,children:d}),r.jsxs(Me,{id:W,type:"button",$state:E,onClick:()=>!f&&F(t=>!t),disabled:f,"aria-haspopup":"dialog","aria-expanded":S,"aria-label":e?`Selected date: ${N(e)}`:h,children:[r.jsx(Ye,{$hasValue:!!e,children:e?N(e):h}),r.jsxs(je,{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"1",y:"3",width:"14",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M1 7h14",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M5 1v4M11 1v4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),S&&r.jsxs(Se,{role:"dialog","aria-label":"Calendar",children:[r.jsxs(Fe,{children:[r.jsx(_,{type:"button",onClick:ge,"aria-label":"Previous month",children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M10 12L6 8l4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),r.jsxs($e,{children:[Be[p]," ",P]}),r.jsx(_,{type:"button",onClick:he,"aria-label":"Next month",children:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),r.jsx(Ee,{children:Pe.map(t=>r.jsx(Te,{children:t},t))}),r.jsx(Ce,{children:me.map((t,T)=>{const ye=t.getMonth()===p,C=e?I(t,e):!1,xe=I(t,j),V=!ye,A=V||(o?i(t)<i(o):!1)||(b?i(t)>i(b):!1);return r.jsx(Ve,{type:"button",$selected:C,$today:xe&&!C,$outside:V,$disabled:A,onClick:()=>be(t),disabled:A,"aria-pressed":C,"aria-label":t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),tabIndex:V?-1:0,children:t.getDate()},T)})})]}),L&&r.jsx(We,{$state:E,children:L})]})};s.displayName="DatePicker";try{s.displayName="DatePicker",s.__docgenInfo={description:"Atom-level date picker for the Magnetiq Bank DS Kit. Mirrors Input API and token usage.",displayName:"DatePicker",props:{value:{defaultValue:null,description:"Currently selected date",name:"value",required:!1,type:{name:"Date | undefined"}},onChange:{defaultValue:null,description:"Called when the user selects a date",name:"onChange",required:!1,type:{name:"((date: Date) => void) | undefined"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"Helper text shown below the field",name:"helperText",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Error message — also triggers error state",name:"errorMessage",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"Explicit visual state (auto-derived when not provided)",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"default"'},{value:'"disabled"'},{value:'"focus"'},{value:'"filled"'}]}},placeholder:{defaultValue:{value:"MM / DD / YYYY"},description:"Placeholder shown when no date is selected",name:"placeholder",required:!1,type:{name:"string | undefined"}},minDate:{defaultValue:null,description:"Earliest selectable date",name:"minDate",required:!1,type:{name:"Date | undefined"}},maxDate:{defaultValue:null,description:"Latest selectable date",name:"maxDate",required:!1,type:{name:"Date | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"Makes the trigger fill its container",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}}}catch{}const ze={title:"Atoms/DatePicker",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","focus","filled","error","disabled"],description:"Visual state — maps to DS Kit State property"},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},fullWidth:{control:"boolean"}}},y={args:{label:"Date of birth",placeholder:"MM / DD / YYYY",helperText:"Used for identity verification"}},x={args:{label:"Policy start date",value:new Date(2026,2,13),state:"filled"}},v={args:{label:"Coverage start",state:"focus"}},D={name:"Error",args:{label:"Expiry date",value:new Date(2025,0,1),state:"error",errorMessage:"Date cannot be in the past"}},w={args:{label:"Effective date",value:new Date(2026,5,1),disabled:!0,helperText:"Locked by your policy"}},k={name:"With Min Date (today+)",args:{label:"Renewal date",helperText:"Must be today or later",minDate:new Date}},M={name:"All States",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"320px"},children:[r.jsx(s,{label:"Default",placeholder:"MM / DD / YYYY"}),r.jsx(s,{label:"Focus",state:"focus",placeholder:"MM / DD / YYYY"}),r.jsx(s,{label:"Filled",state:"filled",value:new Date(2026,2,13)}),r.jsx(s,{label:"Error",state:"error",value:new Date(2025,0,1),errorMessage:"Date cannot be in the past"}),r.jsx(s,{label:"Disabled",value:new Date(2026,5,1),disabled:!0})]})};var z,O,R;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    placeholder: 'MM / DD / YYYY',
    helperText: 'Used for identity verification'
  }
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Policy start date',
    value: new Date(2026, 2, 13),
    state: 'filled'
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,G,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Coverage start',
    state: 'focus'
  }
}`,...(X=(G=v.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Q,Z,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Expiry date',
    value: new Date(2025, 0, 1),
    state: 'error',
    errorMessage: 'Date cannot be in the past'
  }
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Effective date',
    value: new Date(2026, 5, 1),
    disabled: true,
    helperText: 'Locked by your policy'
  }
}`,...(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ne,se;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With Min Date (today+)',
  args: {
    label: 'Renewal date',
    helperText: 'Must be today or later',
    minDate: new Date()
  }
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ie,de;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '320px'
  }}>
      <DatePicker label="Default" placeholder="MM / DD / YYYY" />
      <DatePicker label="Focus" state="focus" placeholder="MM / DD / YYYY" />
      <DatePicker label="Filled" state="filled" value={new Date(2026, 2, 13)} />
      <DatePicker label="Error" state="error" value={new Date(2025, 0, 1)} errorMessage="Date cannot be in the past" />
      <DatePicker label="Disabled" value={new Date(2026, 5, 1)} disabled />
    </div>
}`,...(de=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Oe=["Default","Filled","Focus","ErrorState","Disabled","MinDate","AllStates"];export{M as AllStates,y as Default,w as Disabled,D as ErrorState,x as Filled,v as Focus,k as MinDate,Oe as __namedExportsOrder,ze as default};
