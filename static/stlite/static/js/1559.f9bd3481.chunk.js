"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[1559],{91559:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var s=r(30969),a=r(91439),n=r(66795),i=r(37574);const d=528;function c(e){let{element:t,width:r,endpoints:c}=e;const l=(0,s.useRef)(null),{type:o,url:u,startTime:f}=t,m=(0,n.O0)(u);(0,s.useEffect)((()=>{l.current&&(l.current.currentTime=f)}),[f]),(0,s.useEffect)((()=>{const e=l.current,r=()=>{e&&(e.currentTime=t.startTime)};return e&&e.addEventListener("loadedmetadata",r),()=>{e&&e.removeEventListener("loadedmetadata",r)}}),[t]);const h=e=>{const{startTime:r}=t;return r?"".concat(e,"?start=").concat(r):e};if(o===a.nk.Type.YOUTUBE_IFRAME){const e=0!==r?.75*r:d;return(0,i.jsx)("iframe",{"data-testid":"stVideo",title:m,src:h(m),width:r,height:e,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}return(0,i.jsx)("video",{"data-testid":"stVideo",ref:l,controls:!0,src:c.buildMediaURL(m),className:"stVideo",style:{width:r,height:0===r?d:void 0}})}}}]);
//# sourceMappingURL=1559.f9bd3481.chunk.js.map