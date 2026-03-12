import{j as t}from"./jsx-runtime-Z5uAzocK.js";import{c as i,s as e}from"./styled-components.browser.esm-IcxkHyMa.js";const s={active:e`
    background-color: var(--color-green-bright);
    color:            #000000;
  `,pending:e`
    background-color: var(--surface-secondary);
    color:            var(--text-body);
  `,verified:e`
    background-color: var(--color-violet-bright);
    color:            #ffffff;
  `,error:e`
    background-color: #FFE5E5;
    color:            #CC0000;
  `,violet:e`
    background-color: var(--action-primary);
    color:            #ffffff;
  `,green:e`
    background-color: var(--action-success);
    color:            #000000;
  `,grey:e`
    background-color: var(--color-grey-light);
    color:            var(--text-body);
  `,outline:e`
    background-color: transparent;
    color:            var(--action-primary);
    border:           1.5px solid var(--action-primary);
  `},d={active:"var(--color-green-deep)",pending:"var(--color-grey-main)",verified:"var(--color-violet-main)",error:"#FF3B30"},u=i.span`
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-1);
  padding:        6px var(--space-3);
  border-radius:  var(--radius-magnetic);
  font-family:    var(--font-body);
  font-size:      var(--text-label-s);
  font-weight:    700;
  letter-spacing: var(--tracking-wide);
  white-space:    nowrap;
  line-height:    1;

  ${({$variant:r})=>s[r]}
`,v=i.span`
  width:         6px;
  height:        6px;
  border-radius: 50%;
  flex-shrink:   0;
  background-color: ${({$variant:r})=>d[r]};
`,a=({category:r="tag",variant:o="violet",children:n,...l})=>{const c=r==="status";return t.jsxs(u,{$category:r,$variant:o,role:"status",...l,children:[c&&t.jsx(v,{$variant:o,"aria-hidden":"true"}),n]})};a.displayName="Badge";try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{category:{defaultValue:{value:"tag"},description:"",name:"category",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"status"'},{value:'"tag"'}]}},variant:{defaultValue:{value:"violet"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"active"'},{value:'"pending"'},{value:'"verified"'},{value:'"error"'},{value:'"violet"'},{value:'"green"'},{value:'"grey"'},{value:'"outline"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}export{a as B};
