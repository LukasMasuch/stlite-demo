"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[6709],{10627:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var a,n=r(63877),u=r(34265);function o(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}function i(){}function l(e){return!!(e||"").match(/\d/)}function s(e){return null===e||void 0===e}function c(e){return s(e)||function(e){return"number"===typeof e&&isNaN(e)}(e)||"number"===typeof e&&!isFinite(e)}function f(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function v(e,t){void 0===t&&(t=!0);var r="-"===e[0],a=r&&t,n=(e=e.replace("-","")).split(".");return{beforeDecimal:n[0],afterDecimal:n[1]||"",hasNegation:r,addNegation:a}}function d(e,t,r){for(var a="",n=r?"0":"",u=0;u<=t-1;u++)a+=e[u]||n;return a}function g(e,t){return Array(t+1).join(e)}function m(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var a=t.split(/[eE]/g),n=a[0],u=a[1];if(!(u=Number(u)))return r+n;var o=1+u,i=(n=n.replace(".","")).length;return o<0?n="0."+g("0",Math.abs(o))+n:o>=i?n+=g("0",o-i):n=(n.substring(0,o)||"0")+"."+n.substring(o),r+n}function p(e,t,r){if(-1!==["","-"].indexOf(e))return e;var a=(-1!==e.indexOf(".")||r)&&t,n=v(e),u=n.beforeDecimal,o=n.afterDecimal,i=n.hasNegation,l=parseFloat("0."+(o||"0")),s=(o.length<=t?"0."+o:l.toFixed(t)).split(".");return""+(i?"-":"")+u.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0])+(a?".":"")+d(s[1]||"",t,r)}function h(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}!function(e){e.event="event",e.props="prop"}(a||(a={}));var S=function(e){var t,r=void 0;return function(){for(var a=[],n=arguments.length;n--;)a[n]=arguments[n];return t&&a.length===t.length&&a.every((function(e,r){return e===t[r]}))?r:(t=a,r=e.apply(void 0,a))}}((function(e,t){for(var r=0,a=0,n=e.length,u=t.length;e[r]===t[r]&&r<n;)r++;for(;e[n-1-a]===t[u-1-a]&&u-a>r&&n-a>r;)a++;return{from:{start:r,end:n-a},to:{start:r,end:u-a}}}));function b(e){return Math.max(e.selectionStart,e.selectionEnd)}function y(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function V(e){var t=e.currentValue,r=e.formattedValue,a=e.currentValueIndex,n=e.formattedValueIndex;return t[a]===r[n]}function w(e,t,r,a){var n,u,o,i=e.length;if(n=t,u=0,o=i,t=Math.min(Math.max(n,u),o),"left"===a){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=i&&!r[t];)t++;t>i&&(t=r.lastIndexOf(!0))}return-1===t&&(t=i),t}function x(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,a=t.length;r<a;r++)t[r]=Boolean(l(e[r])||l(e[r-1]));return t}function N(e,t,r,a,n,o){void 0===o&&(o=i);var l=function(e){var t=(0,u.useRef)(e);t.current=e;var r=(0,u.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e,t){var r,u;return c(e)?(u="",r=""):"number"===typeof e||t?(u="number"===typeof e?m(e):e,r=a(u)):(u=n(e,void 0),r=a(u)),{formattedValue:r,numAsString:u}})),f=(0,u.useState)((function(){return l(s(e)?t:e,r)})),v=f[0],d=f[1],g=e,p=r;s(e)&&(g=v.numAsString,p=!0);var h=l(g,p);return(0,u.useMemo)((function(){d(h)}),[h.formattedValue]),[v,function(e,t){e.formattedValue!==v.formattedValue&&d({formattedValue:e.formattedValue,numAsString:e.value}),o(e,t)}]}function D(e){return e.replace(/[^0-9]/g,"")}function O(e){return e}function C(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var n=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=O);var v=e.removeFormatting;void 0===v&&(v=D);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,p=e.isAllowed,y=e.onChange;void 0===y&&(y=i);var C=e.onKeyDown;void 0===C&&(C=i);var E=e.onMouseUp;void 0===E&&(E=i);var I=e.onFocus;void 0===I&&(I=i);var T=e.onBlur;void 0===T&&(T=i);var A=e.value,R=e.getCaretBoundary;void 0===R&&(R=x);var j=e.isValidInputCharacter;void 0===j&&(j=l);var B=e.isCharacterSame,F=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),k=N(A,d,Boolean(g),f,v,m),M=k[0],P=M.formattedValue,W=M.numAsString,L=k[1],K=(0,u.useRef)({formattedValue:P,numAsString:W}),U=function(e,t){K.current={formattedValue:e.formattedValue,numAsString:e.value},L(e,t)},G=(0,u.useState)(!1),$=G[0],z=G[1],Z=(0,u.useRef)(null),q=(0,u.useRef)({setCaretTimeout:null,focusTimeout:null});(0,u.useEffect)((function(){return z(!0),function(){clearTimeout(q.current.setCaretTimeout),clearTimeout(q.current.focusTimeout)}}),[]);var H=f,J=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},Q=function(e,t,r){0===e.selectionStart&&e.selectionEnd===e.value.length||(h(e,t),q.current.setCaretTimeout=setTimeout((function(){e.value===r&&e.selectionStart!==e.selectionEnd&&h(e,t)}),0))},X=function(e,t,r){return w(e,t,R(e),r)},Y=function(e,t,r){var a=R(t),n=function(e,t,r,a,n,u,o){void 0===o&&(o=V);var i=n.findIndex((function(e){return e})),l=e.slice(0,i);t||r.startsWith(l)||(t=l,r=l+r,a+=l.length);for(var s=r.length,c=e.length,f={},v=new Array(s),d=0;d<s;d++){v[d]=-1;for(var g=0,m=c;g<m;g++)if(o({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:d,formattedValueIndex:g})&&!0!==f[g]){v[d]=g,f[g]=!0;break}}for(var p=a;p<s&&(-1===v[p]||!u(r[p]));)p++;var h=p===s||-1===v[p]?c:v[p];for(p=a-1;p>0&&-1===v[p];)p--;var S=-1===p||-1===v[p]?0:v[p]+1;return S>h?h:a-S<h-a?S:h}(t,P,e,r,a,j,B);return n=w(t,n,a)};(0,u.useEffect)((function(){var e=K.current,t=e.formattedValue,r=e.numAsString;P===t||P===W&&t===r||U(J(P,W),{event:void 0,source:a.props})}),[P,W]);var _=Z.current?b(Z.current):void 0;("undefined"!==typeof window?u.useLayoutEffect:u.useEffect)((function(){var e=Z.current;if(P!==K.current.formattedValue&&e){var t=Y(K.current.formattedValue,P,_);e.value=P,Q(e,t,P)}}),[P]);var ee=function(e,t,r){var a=S(P,e),n=Object.assign(Object.assign({},a),{lastValue:P}),u=v(e,n),o=H(u);if(u=v(o,void 0),p&&!p(J(o,u))){var i=t.target,l=b(i),s=Y(e,P,l);return i.value=P,Q(i,s,P),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,a=e.setCaretPosition;void 0===a&&(a=!0);var n=e.source,u=e.event,o=e.numAsString,i=e.caretPos;if(r){if(void 0===i&&a){var l=e.inputValue||r.value,s=b(r);r.value=t,i=Y(l,t,s)}r.value=t,a&&void 0!==i&&Q(r,i,t)}t!==P&&U(J(t,o),{event:u,source:n})}({formattedValue:o,numAsString:u,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0},te=!$||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",re=Object.assign({inputMode:te},F,{type:t,value:P,onChange:function(e){var t=e.target.value;ee(t,e,a.event)&&y(e)},onKeyDown:function(e){var t,r=e.target,a=e.key,n=r.selectionStart,u=r.selectionEnd,o=r.value;if(void 0===o&&(o=""),"ArrowLeft"===a||"Backspace"===a?t=Math.max(n-1,0):"ArrowRight"===a?t=Math.min(n+1,o.length):"Delete"===a&&(t=n),void 0!==t&&n===u){var i=t;if("ArrowLeft"===a||"ArrowRight"===a)(i=X(o,t,"ArrowLeft"===a?"left":"right"))!==t&&e.preventDefault();else"Delete"!==a||j(o[t])?"Backspace"!==a||j(o[t])||(i=X(o,t,"left")):i=X(o,t,"right");i!==t&&Q(r,i,o),e.isUnitTestRun&&Q(r,i,o),C(e)}else C(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,a=t.selectionEnd,n=t.value;if(void 0===n&&(n=""),r===a){var u=X(n,r);u!==r&&Q(t,u,n)}E(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;Z.current=t,q.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,a=t.selectionEnd,n=t.value;void 0===n&&(n="");var u=X(n,r);u===r||0===r&&a===n.length||Q(t,u,n),I(e)}),0)},onBlur:function(e){Z.current=null,clearTimeout(q.current.focusTimeout),clearTimeout(q.current.setCaretTimeout),T(e)}});if("text"===r)return s?u.createElement(u.Fragment,null,s(P,F)||null):u.createElement("span",Object.assign({},F,{ref:c}),P);if(n){var ae=n;return u.createElement(ae,Object.assign({},re,{ref:c}))}return u.createElement("input",Object.assign({},re,{ref:c}))}function E(e,t){var r=t.decimalScale,a=t.fixedDecimalScale,n=t.prefix;void 0===n&&(n="");var u=t.suffix;void 0===u&&(u="");var o=t.allowNegative,i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=I(t),s=l.thousandSeparator,c=l.decimalSeparator,f=0!==r&&-1!==e.indexOf(".")||r&&a,g=v(e,o),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=d(p,r,!!a)),s&&(m=function(e,t,r){var a=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),n=e.search(/[1-9]/);return n=-1===n?e.length:n,e.substring(0,n)+e.substring(n,e.length).replace(a,"$1"+t)}(m,s,i)),n&&(m=n+m),u&&(p+=u),h&&(m="-"+m),e=m+(f&&c||"")+p}function I(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,a=e.allowedDecimalSeparators;return!0===r&&(r=","),a||(a=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:a}}function T(e,t,r){var a;void 0===t&&(t=y(e));var n=r.allowNegative,u=r.prefix;void 0===u&&(u="");var o=r.suffix;void 0===o&&(o="");var i=r.decimalScale,s=t.from,c=t.to,d=c.start,g=c.end,m=I(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,S=e[g]===h;if(l(e)&&(e===u||e===o)&&""===t.lastValue)return e;if(g-d===1&&-1!==p.indexOf(e[d])){var b=0===i?"":h;e=e.substring(0,d)+b+e.substring(d+1,e.length)}var V=function(e,t,r){var a=!1,n=!1;u.startsWith("-")?a=!1:e.startsWith("--")?(a=!1,n=!0):o.startsWith("-")&&e.length===o.length?a=!1:"-"===e[0]&&(a=!0);var i=a?1:0;return n&&(i=2),i&&(e=e.substring(i),t-=i,r-=i),{value:e,start:t,end:r,hasNegation:a}},w=V(e,d,g),x=w.hasNegation;e=(a=w).value,d=a.start,g=a.end;var N=V(t.lastValue,s.start,s.end),D=N.start,O=N.end,C=N.value,E=e.substring(d,g);!(e.length&&C.length&&(D>C.length-o.length||O<u.length))||E&&o.startsWith(E)||(e=C);var T=0;e.startsWith(u)?T+=u.length:d<u.length&&(T=d),g-=T;var A=(e=e.substring(T)).length,R=e.length-o.length;e.endsWith(o)?A=R:(g>R||g>e.length-o.length)&&(A=g),e=e.substring(0,A),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),a=new RegExp("(-)(.)*(-)"),n=r.test(e),u=a.test(e);return e=e.replace(/-/g,""),n&&!u&&t&&(e="-"+e),e}(x?"-"+e:e,n),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+f(e),t?"g":void 0)}(h,!0))||[]).join("");var j=e.indexOf(h),B=v(e=e.replace(new RegExp(f(h),"g"),(function(e,t){return t===j?".":""})),n),F=B.beforeDecimal,k=B.afterDecimal,M=B.addNegation;return c.end-c.start<s.end-s.start&&""===F&&S&&!parseFloat(k)&&(e=M?"-":""),e}function A(e){e=function(e){var t=I(e),r=t.thousandSeparator,a=t.decimalSeparator,n=e.prefix;void 0===n&&(n="");var u=e.allowNegative;if(void 0===u&&(u=!0),r===a)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+a+" (default value for decimalSeparator is .)\n     ");return n.startsWith("-")&&u&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+n+"\n      allowNegative: "+u+"\n    "),u=!1),Object.assign(Object.assign({},e),{allowNegative:u})}(e);e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,r=e.allowNegative,n=e.allowLeadingZeros,u=e.onKeyDown;void 0===u&&(u=i);var f=e.onBlur;void 0===f&&(f=i);var v=e.thousandSeparator,d=e.decimalScale,g=e.fixedDecimalScale,b=e.prefix;void 0===b&&(b="");var y=e.defaultValue,V=e.value,w=e.valueIsNumericString,x=e.onValueChange,D=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),O=I(e),C=O.decimalSeparator,A=O.allowedDecimalSeparators,R=function(t){return E(t,e)},j=function(t,r){return T(t,r,e)},B=s(V)?y:V,F=null!==w&&void 0!==w?w:function(e,t,r){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&!(null===r||void 0===r?void 0:r.match(/\d/))&&"string"===typeof e&&!isNaN(Number(e))}(B,b,t);s(V)?s(y)||(F=F||"number"===typeof y):F=F||"number"===typeof V;var k=function(e){return c(e)?e:("number"===typeof e&&(e=m(e)),F&&"number"===typeof d?p(e,d,Boolean(g)):e)},M=N(k(V),k(y),Boolean(F),R,j,x),P=M[0],W=P.numAsString,L=P.formattedValue,K=M[1];return Object.assign(Object.assign({},D),{value:L,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===C||l(e)},isCharacterSame:function(e){var t=e.currentValue,r=e.lastValue,a=e.formattedValue,n=e.currentValueIndex,u=e.formattedValueIndex,o=t[n],i=a[u],l=S(r,t).to;return!!(n>=l.start&&n<l.end&&A&&A.includes(o)&&i===C)||o===i},onValueChange:K,format:R,removeFormatting:j,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var a=t.suffix;void 0===a&&(a="");var n=Array.from({length:e.length+1}).map((function(){return!0})),u="-"===e[0];n.fill(!1,0,r.length+(u?1:0));var o=e.length;return n.fill(!1,o-a.length+1,o+1),n}(t,e)},onKeyDown:function(e){var t=e.target,a=e.key,n=t.selectionStart,o=t.selectionEnd,i=t.value;if(void 0===i&&(i=""),n===o){"Backspace"===a&&"-"===i[0]&&n===b.length+1&&r&&h(t,1),d&&g&&("Backspace"===a&&i[n-1]===C?(h(t,n-1),e.preventDefault()):"Delete"===a&&i[n]===C&&e.preventDefault()),(null===A||void 0===A?void 0:A.includes(a))&&i[n]===C&&h(t,n+1);var l=!0===v?",":v;"Backspace"===a&&i[n-1]===l&&h(t,n-1),"Delete"===a&&i[n]===l&&h(t,n+1),u(e)}else u(e)},onBlur:function(t){var r=W;if(r.match(/\d/g)||(r=""),n||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),a=r[0].replace(/^0+/,"")||"0",n=r[1]||"";return(t?"-":"")+a+(n?"."+n:"")}(r)),g&&d&&(r=p(r,d,g)),r!==W){var u=E(r,e);K({formattedValue:u,value:r,floatValue:parseFloat(r)},{event:t,source:a.event})}f(t)}})}function R(e){var t=A(e);return u.createElement(C,Object.assign({},t))}var j=(0,n.d)("div")({name:"NumberOverlayEditorStyle",class:"n1czszh3"});function B(){var e,t,r;const a=null==(r=null==(t=null==(e=Intl.NumberFormat())?void 0:e.formatToParts(1.1))?void 0:t.find((e=>"decimal"===e.type)))?void 0:r.value;return null!=a?a:"."}var F=e=>{const{value:t,onChange:r,disabled:a,highlight:n,validatedSelection:o,fixedDecimals:i,allowNegative:l,thousandSeparator:s,decimalSeparator:c}=e,f=u.useRef();return u.useLayoutEffect((()=>{var e;if(void 0!==o){const t="number"===typeof o?[o,null]:o;null==(e=f.current)||e.setSelectionRange(t[0],t[1])}}),[o]),u.createElement(j,null,u.createElement(R,{autoFocus:!0,getInputRef:f,className:"gdg-input",onFocus:e=>e.target.setSelectionRange(n?0:e.target.value.length,e.target.value.length),disabled:!0===a,decimalScale:i,allowNegative:l,thousandSeparator:null!=s?s:"."===B()?",":".",decimalSeparator:null!=c?c:B(),value:Object.is(t,-0)?"-":null!=t?t:"",onValueChange:r}))}}}]);
//# sourceMappingURL=6709.9186389f.chunk.js.map