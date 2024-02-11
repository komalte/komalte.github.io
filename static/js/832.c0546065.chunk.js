"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[832],{9452:(a,e,r)=>{r.r(e),r.d(e,{default:()=>f});var s=r(9060),t=r(7640),c=r(3988),o=r(2136),n=r(4216),l=r(7659),d=r(2496);const i={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},f=a=>{var e;const r=(0,s.useContext)(l.Oy),{movie:f}=a;return(0,d.jsx)(t.c,{children:(0,d.jsxs)(c.c,{style:{...i.cardStyle,backgroundColor:r.cardBackground,borderColor:r.cardBorderColor},text:r.bsSecondaryVariant,children:[(0,d.jsx)(c.c.Img,{variant:"top",src:null===f||void 0===f?void 0:f.imgUrl}),(0,d.jsxs)(c.c.Body,{children:[(0,d.jsx)(c.c.Title,{style:i.cardTitleStyle,children:f.movieTitle}),(0,d.jsxs)(c.c.Text,{children:["Gave ",f.rating," out of 5 \u2b50"]})]}),(0,d.jsx)(c.c.Body,{children:null===f||void 0===f||null===(e=f.links)||void 0===e?void 0:e.map((a=>(0,d.jsx)(o.c,{style:i.buttonStyle,variant:"outline-"+r.bsSecondaryVariant,onClick:()=>window.open(a.href,"_blank"),children:a.text},a.href)))}),f.tags&&(0,d.jsx)(c.c.Footer,{style:{backgroundColor:r.cardFooterBackground},children:f.tags.map((a=>(0,d.jsx)(n.c,{pill:!0,bg:r.bsSecondaryVariant,text:r.bsPrimaryVariant,style:i.badgeStyle,children:a},a)))})]})})}},4216:(a,e,r)=>{r.d(e,{c:()=>d});var s=r(264),t=r.n(s),c=r(9060),o=r(3576),n=r(2496);const l=c.forwardRef(((a,e)=>{let{bsPrefix:r,bg:s="primary",pill:c=!1,text:l,className:d,as:i="span",...f}=a;const m=(0,o.Ky)(r,"badge");return(0,n.jsx)(i,{ref:e,...f,className:t()(d,m,c&&"rounded-pill",l&&"text-".concat(l),s&&"bg-".concat(s))})}));l.displayName="Badge";const d=l},2136:(a,e,r)=>{r.d(e,{c:()=>i});var s=r(264),t=r.n(s),c=r(9060),o=r(6344),n=r(3576),l=r(2496);const d=c.forwardRef(((a,e)=>{let{as:r,bsPrefix:s,variant:c="primary",size:d,active:i=!1,disabled:f=!1,className:m,...y}=a;const x=(0,n.Ky)(s,"btn"),[b,{tagName:u}]=(0,o.cV)({tagName:r,disabled:f,...y}),p=u;return(0,l.jsx)(p,{...b,...y,ref:e,disabled:f,className:t()(m,x,i&&"active",c&&"".concat(x,"-").concat(c),d&&"".concat(x,"-").concat(d),y.href&&f&&"disabled")})}));d.displayName="Button";const i=d},3988:(a,e,r)=>{r.d(e,{c:()=>T});var s=r(264),t=r.n(s),c=r(9060),o=r(3576),n=r(2496);const l=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...l}=a;return s=(0,o.Ky)(s,"card-body"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));l.displayName="CardBody";const d=l,i=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...l}=a;return s=(0,o.Ky)(s,"card-footer"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));i.displayName="CardFooter";const f=i;var m=r(5037);const y=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,as:l="div",...d}=a;const i=(0,o.Ky)(r,"card-header"),f=(0,c.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,n.jsx)(m.c.Provider,{value:f,children:(0,n.jsx)(l,{ref:e,...d,className:t()(s,i)})})}));y.displayName="CardHeader";const x=y,b=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,variant:c,as:l="img",...d}=a;const i=(0,o.Ky)(r,"card-img");return(0,n.jsx)(l,{ref:e,className:t()(c?"".concat(i,"-").concat(c):i,s),...d})}));b.displayName="CardImg";const u=b,p=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...l}=a;return s=(0,o.Ky)(s,"card-img-overlay"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));p.displayName="CardImgOverlay";const N=p,g=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="a",...l}=a;return s=(0,o.Ky)(s,"card-link"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));g.displayName="CardLink";const v=g;var h=r(3024);const j=(0,h.c)("h6"),C=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c=j,...l}=a;return s=(0,o.Ky)(s,"card-subtitle"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));C.displayName="CardSubtitle";const P=C,w=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="p",...l}=a;return s=(0,o.Ky)(s,"card-text"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));w.displayName="CardText";const S=w,k=(0,h.c)("h5"),R=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c=k,...l}=a;return s=(0,o.Ky)(s,"card-title"),(0,n.jsx)(c,{ref:e,className:t()(r,s),...l})}));R.displayName="CardTitle";const K=R,B=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,bg:c,text:l,border:i,body:f=!1,children:m,as:y="div",...x}=a;const b=(0,o.Ky)(r,"card");return(0,n.jsx)(y,{ref:e,...x,className:t()(s,b,c&&"bg-".concat(c),l&&"text-".concat(l),i&&"border-".concat(i)),children:f?(0,n.jsx)(d,{children:m}):m})}));B.displayName="Card";const T=Object.assign(B,{Img:u,Title:K,Subtitle:P,Body:d,Link:v,Text:S,Header:x,Footer:f,ImgOverlay:N})},7640:(a,e,r)=>{r.d(e,{c:()=>d});var s=r(264),t=r.n(s),c=r(9060),o=r(3576),n=r(2496);const l=c.forwardRef(((a,e)=>{const[{className:r,...s},{as:c="div",bsPrefix:l,spans:d}]=function(a){let{as:e,bsPrefix:r,className:s,...c}=a;r=(0,o.Ky)(r,"col");const n=(0,o.eG)(),l=(0,o.MZ)(),d=[],i=[];return n.forEach((a=>{const e=c[a];let s,t,o;delete c[a],"object"===typeof e&&null!=e?({span:s,offset:t,order:o}=e):s=e;const n=a!==l?"-".concat(a):"";s&&d.push(!0===s?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(s)),null!=o&&i.push("order".concat(n,"-").concat(o)),null!=t&&i.push("offset".concat(n,"-").concat(t))})),[{...c,className:t()(s,...d,...i)},{as:e,bsPrefix:r,spans:d}]}(a);return(0,n.jsx)(c,{...s,ref:e,className:t()(r,!d.length&&l)})}));l.displayName="Col";const d=l}}]);
//# sourceMappingURL=832.c0546065.chunk.js.map