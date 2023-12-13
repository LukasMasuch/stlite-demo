"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[3808],{93808:(t,e,i)=>{i.r(e),i.d(e,{default:()=>A});var s=i(30969),o=i(46008),n=i(98441),a=i(15888),r=i.n(a),h=i(16868),c=i(3077),l=i(21365),p=i(12127),d=i(72620),m=i(76064),g=i(81507),u=i(93578),w=i(61400),x=i(82919),b=i(98862),S=i(92614),k=i(65710),y=i(47814),v=i.n(y),j=i(35354),f=i(37574);const T=t=>{let{error:e,width:i,deltaType:s}=t;return e instanceof J?(0,f.jsx)(j.Z,{width:i,name:"No Mapbox token provided",message:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{children:["To use ",(0,f.jsxs)("code",{children:["st.",s]})," or ",(0,f.jsx)("code",{children:"st.map"})," you need to set up a Mapbox access token."]}),(0,f.jsxs)("p",{children:["To get a token, create an account at"," ",(0,f.jsx)("a",{href:"https://mapbox.com",children:"https://mapbox.com"}),". It's free for moderate usage levels!"]}),(0,f.jsxs)("p",{children:["Once you have a token, just set it using the Streamlit config option ",(0,f.jsx)("code",{children:"mapbox.token"})," and don't forget to restart your Streamlit server at this point if it's still running, then reload this tab."]}),(0,f.jsxs)("p",{children:["See"," ",(0,f.jsx)("a",{href:"https://docs.streamlit.io/library/advanced-features/configuration#view-all-configuration-options",children:"our documentation"})," ","for more info on how to set config options."]})]})}):e instanceof Z?(0,f.jsx)(j.Z,{width:i,name:"Error fetching Streamlit Mapbox token",message:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:"This app requires an internet connection."}),(0,f.jsx)("p",{children:"Please check your connection and try again."}),(0,f.jsxs)("p",{children:["If you think this is a bug, please file bug report"," ",(0,f.jsx)("a",{href:"https://github.com/streamlit/streamlit/issues/new/choose",children:"here"}),"."]})]})}):(0,f.jsx)(j.Z,{width:i,name:"Error fetching Streamlit Mapbox token",message:e.message})};var V=i(99661),C=i(60081),F=i(64756);class J extends Error{}class Z extends Error{}const E="https://data.streamlit.io/tokens.json",z="mapbox",M=t=>e=>{class i extends s.PureComponent{constructor(i){super(i),this.initMapboxToken=async()=>{try{const t=await V.Z.get(E),{[z]:e}=t.data;if(!e)throw new Error("Missing token ".concat(z));this.setState({mapboxToken:e,isFetching:!1})}catch(t){const e=(0,k.b)(t);throw this.setState({mapboxTokenError:e,isFetching:!1}),new Z("".concat(e.message," (").concat(E,")"))}},this.render=()=>{const{mapboxToken:i,mapboxTokenError:s,isFetching:o}=this.state,{width:n}=this.props;return s?(0,f.jsx)(T,{width:n,error:s,deltaType:t}):o?(0,f.jsx)(C.O,{}):(0,f.jsx)(e,{...this.props,mapboxToken:i,width:n})},this.state={isFetching:!0,mapboxToken:void 0,mapboxTokenError:void 0}}componentDidMount(){const t=this.props.element.mapboxToken||this.context.libConfig.mapboxToken;t?this.setState({mapboxToken:t,isFetching:!1}):this.initMapboxToken()}}return i.displayName="withMapboxToken(".concat(e.displayName||e.name,")"),i.contextType=F.E,v()(i,e)};var D=i(83405);const I=(0,D.Z)("div",{target:"e1az0zs51"})((t=>{let{width:e,height:i,theme:s}=t;return{marginTop:s.spacing.sm,position:"relative",height:i,width:e}}),""),O=(0,D.Z)("div",{target:"e1az0zs50"})((t=>{let{theme:e}=t;return{position:"absolute",right:"2.625rem",top:e.spacing.md,zIndex:1,"button:not(:disabled)":{background:e.colors.bgColor,"& + button":{borderTopColor:e.colors.secondaryBg},"& span":{filter:(0,l.Iy)(e)?"":"invert(100%)"}}}}),"");i(12815);const P={classes:{...p,...g,...m,...u}};(0,b.fh)([w.w,x.E]);const N=new d.Z({configuration:P});class L extends s.PureComponent{constructor(){super(...arguments),this.state={viewState:{bearing:0,pitch:0,zoom:11},initialized:!1,initialViewState:{},id:void 0,pydeckJson:void 0,isFullScreen:!1,isLightTheme:(0,l.Iy)(this.props.theme)},this.componentDidMount=()=>{this.setState({initialized:!0})},this.createTooltip=t=>{const{element:e}=this.props;if(!t||!t.object||!e.tooltip)return!1;const i=n.Z.parse(e.tooltip);return i.html?i.html=this.interpolate(t,i.html):i.text=this.interpolate(t,i.text),i},this.interpolate=(t,e)=>{const i=e.match(/{(.*?)}/g);return i&&i.forEach((i=>{const s=i.substring(1,i.length-1);t.object.hasOwnProperty(s)&&(e=e.replace(i,t.object[s]))})),e},this.onViewStateChange=t=>{let{viewState:e}=t;this.setState({viewState:e})}}static getDerivedStateFromProps(t,e){const i=L.getDeckObject(t,e);if(!r()(i.initialViewState,e.initialViewState)){const t=Object.keys(i.initialViewState).reduce(((t,s)=>i.initialViewState[s]===e.initialViewState[s]?t:{...t,[s]:i.initialViewState[s]}),{});return{viewState:{...e.viewState,...t},initialViewState:i.initialViewState}}return null}render(){const t=L.getDeckObject(this.props,this.state),{viewState:e}=this.state;return(0,f.jsx)(I,{className:"stDeckGlJsonChart",width:t.initialViewState.width,height:t.initialViewState.height,"data-testid":"stDeckGlJsonChart",children:(0,f.jsxs)(o.Z,{viewState:e,onViewStateChange:this.onViewStateChange,height:t.initialViewState.height,width:t.initialViewState.width,layers:this.state.initialized?t.layers:[],getTooltip:this.createTooltip,ContextProvider:h.X$.Provider,controller:!0,children:[(0,f.jsx)(h.Z3,{height:t.initialViewState.height,width:t.initialViewState.width,mapStyle:t.mapStyle&&("string"===typeof t.mapStyle?t.mapStyle:t.mapStyle[0]),mapboxApiAccessToken:this.props.element.mapboxToken||this.props.mapboxToken}),(0,f.jsx)(O,{children:(0,f.jsx)(h.Pv,{className:"zoomButton",showCompass:!1})})]})})}}L.getDeckObject=(t,e)=>{var i,s;const{element:o,width:a,height:r,theme:h,isFullScreen:c}=t,p=null!==c&&void 0!==c&&c;var d,m;(o.id===e.id&&e.isFullScreen===p&&e.isLightTheme===(0,l.Iy)(h)||(e.pydeckJson=n.Z.parse(o.json),e.id=o.id),null!==(i=e.pydeckJson)&&void 0!==i&&i.mapStyle||(e.pydeckJson.mapStyle="mapbox://styles/mapbox/".concat((0,l.Iy)(h)?"light":"dark","-v9")),c)?Object.assign(null===(d=e.pydeckJson)||void 0===d?void 0:d.initialViewState,{width:a,height:r}):(null!==(m=e.pydeckJson)&&void 0!==m&&null!==(m=m.initialViewState)&&void 0!==m&&m.height||(e.pydeckJson.initialViewState.height=500),o.useContainerWidth&&(e.pydeckJson.initialViewState.width=a));return e.isFullScreen=c,e.isLightTheme=(0,l.Iy)(h),null===(s=e.pydeckJson)||void 0===s||delete s.views,N.convert(e.pydeckJson)};const A=(0,c.b)(M("st.pydeck_chart")((0,S.Z)(L)))}}]);
//# sourceMappingURL=3808.fea601a6.chunk.js.map