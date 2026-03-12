import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{r as w}from"./index-pP6CS22B.js";import{c as a,s as I}from"./styled-components.browser.esm-IcxkHyMa.js";const $={default:"var(--border-subtle)",focus:"var(--action-primary)",filled:"var(--color-grey-main)",error:"#FF3B30",success:"var(--action-success)",disabled:"var(--color-grey-ultra-light)"},F={default:"1px",focus:"2px",filled:"1px",error:"2px",success:"2px",disabled:"1px"},j=a.div`
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
  width:          ${({$fullWidth:e})=>e?"100%":"280px"};
`,B=a.label`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  color: ${({$state:e})=>e==="error"?"#FF3B30":e==="success"?"var(--action-success)":"var(--text-body)"};
`,k=a.div`
  position:         relative;
  display:          flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          0 var(--space-4);
  height:           56px;
  background-color: var(--surface-secondary);
  border-radius:    var(--radius-stability);
  border:           ${({$state:e})=>`${F[e]} solid ${$[e]}`};
  transition:       border-color 150ms ease;
  opacity:          ${({$state:e})=>e==="disabled"?.5:1};

  ${({$hasIcon:e})=>e&&I`
    padding-left: var(--space-4);
  `}

  input {
    flex:            1;
    border:          none;
    background:      transparent;
    font-family:     var(--font-body);
    font-size:       var(--text-body-m);
    font-weight:     400;
    letter-spacing:  var(--tracking-wide);
    color:           var(--text-body);
    outline:         none;
    min-width:       0;

    &::placeholder {
      color:   var(--text-body);
      opacity: 0.5;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  &:focus-within {
    border-width: 2px;
    border-color: ${({$state:e})=>e==="error"?"#FF3B30":e==="success"?"var(--action-success)":"var(--action-primary)"};
  }
`,_=a.span`
  display:      inline-flex;
  align-items:  center;
  flex-shrink:  0;
  width:        16px;
  height:       16px;
  color:        var(--text-body);
  opacity:      0.6;

  &::before {
    content:       '';
    display:       block;
    width:         11px;
    height:        11px;
    border:        1.5px solid currentColor;
    border-radius: 50%;
    box-shadow:    3px 3px 0 -1px currentColor;
    transform:     rotate(45deg);
  }
`,x=a.span`
  flex-shrink:  0;
  font-family:  var(--font-body);
  font-weight:  700;
  font-size:    var(--text-body-m);
  color: ${({$type:e})=>e==="success"?"var(--action-success)":"#FF3B30"};
`,q=a.span`
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    400;
  letter-spacing: var(--tracking-wide);
  color: ${({$state:e})=>e==="error"?"#FF3B30":e==="success"?"var(--action-success)":"var(--color-grey-main)"};
`,d=({type:e="text",label:c,helperText:h,errorMessage:u,successMessage:p,state:s="default",fullWidth:b=!1,disabled:m,id:y,...f})=>{const g=w.useId(),t=y??g,o=m||s==="disabled",i=s==="error"||!!u,v=s==="success"||!!p,n=o?"disabled":i?"error":v?"success":s,l=u??p??h;return r.jsxs(j,{$fullWidth:b,children:[c&&r.jsx(B,{htmlFor:t,$state:n,children:c}),r.jsxs(k,{id:t,type:e==="search"?"text":e,$state:n,$hasIcon:e==="search",disabled:o,"aria-invalid":i,"aria-describedby":l?`${t}-helper`:void 0,...f,children:[e==="search"&&r.jsx(_,{"aria-hidden":"true"}),r.jsx("input",{type:e==="search"?"search":e,id:t,disabled:o,"aria-invalid":i,...f}),v&&r.jsx(x,{$type:"success","aria-hidden":"true",children:"✓"}),i&&r.jsx(x,{$type:"error","aria-hidden":"true",children:"!"})]}),l&&r.jsx(q,{id:`${t}-helper`,$state:n,children:l})]})};d.displayName="Input";try{d.displayName="Input",d.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | undefined"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string | undefined"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"default"'},{value:'"disabled"'},{value:'"focus"'},{value:'"filled"'},{value:'"success"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}}}}}catch{}export{d as I};
