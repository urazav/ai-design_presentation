import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{s as a,c as u}from"./styled-components.browser.esm-IcxkHyMa.js";const f={sm:a`
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-label-s);
    min-height: 32px;
  `,md:a`
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-body-m);
    min-height: 48px;
  `,lg:a`
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-body-l);
    min-height: 56px;
  `},v={primary:a`
    background-color: var(--action-primary);
    color: #ffffff;
    border: none;
    box-shadow: var(--shadow-violet);

    &:hover:not(:disabled) {
      background-color: var(--color-violet-deep);
      box-shadow: 0 8px 28px rgba(81, 0, 192, 0.35);
    }

    &:active:not(:disabled) {
      background-color: var(--color-violet-bright);
    }
  `,secondary:a`
    background-color: var(--action-success);
    color: #000000;
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-green-deep);
      color: #ffffff;
    }

    &:active:not(:disabled) {
      background-color: var(--color-green-bright);
      color: #000000;
    }
  `,ghost:a`
    background-color: transparent;
    color: var(--action-primary);
    border: 1.5px solid var(--action-primary);

    &:hover:not(:disabled) {
      background-color: var(--action-primary);
      color: #ffffff;
    }

    &:active:not(:disabled) {
      background-color: var(--color-violet-deep);
      color: #ffffff;
      border-color: var(--color-violet-deep);
    }
  `},m=u.button`
  /* Base */
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  gap:             var(--space-2);
  font-family:     var(--font-body);
  font-weight:     700;
  letter-spacing:  var(--tracking-wide);
  border-radius:   var(--radius-magnetic);
  cursor:          pointer;
  white-space:     nowrap;
  transition:      background-color 150ms ease, color 150ms ease,
                   box-shadow 150ms ease, border-color 150ms ease;
  outline-offset:  3px;
  text-decoration: none;

  /* Width */
  ${({$fullWidth:e})=>e&&a`width: 100%;`}

  /* Size */
  ${({$size:e})=>f[e]}

  /* Variant */
  ${({$variant:e})=>v[e]}

  /* Disabled */
  &:disabled {
    opacity:        0.4;
    cursor:         not-allowed;
    pointer-events: none;
  }

  /* Focus */
  &:focus-visible {
    outline: 2px solid var(--action-primary);
  }

  /* Loading spinner */
  .spinner {
    width:  16px;
    height: 16px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  .icon {
    display:      inline-flex;
    align-items:  center;
    flex-shrink:  0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,n=({variant:e="primary",size:l="md",loading:o=!1,iconLeft:i,iconRight:t,fullWidth:s=!1,disabled:d,children:c,...p})=>r.jsx(m,{$variant:e,$size:l,$fullWidth:s,disabled:d||o,"aria-busy":o,...p,children:o?r.jsx("span",{"aria-hidden":"true",className:"spinner"}):r.jsxs(r.Fragment,{children:[i&&r.jsx("span",{className:"icon icon--left",children:i}),c,t&&r.jsx("span",{className:"icon icon--right",children:t})]})});n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}}}}}catch{}export{n as B};
