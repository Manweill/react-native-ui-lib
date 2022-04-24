/*! For license information please see ec606c09.f5c64763.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[7429],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3896:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7378),r(3905)),a=["components"],l={id:"FeatureHighlight",title:"FeatureHighlight",sidebar_label:"FeatureHighlight"},u=void 0,s={unversionedId:"components/overlays/FeatureHighlight",id:"components/overlays/FeatureHighlight",isDocsHomePage:!1,title:"FeatureHighlight",description:"Component for feature discovery",source:"@site/../docs/components/overlays/FeatureHighlight.md",sourceDirName:"components/overlays",slug:"/components/overlays/FeatureHighlight",permalink:"/react-native-ui-lib/docs/components/overlays/FeatureHighlight",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/overlays/FeatureHighlight.md",tags:[],version:"current",frontMatter:{id:"FeatureHighlight",title:"FeatureHighlight",sidebar_label:"FeatureHighlight"},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/react-native-ui-lib/docs/components/overlays/Dialog"},next:{title:"FloatingButton",permalink:"/react-native-ui-lib/docs/components/overlays/FloatingButton"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"borderColor",id:"bordercolor",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"borderWidth",id:"borderwidth",children:[]},{value:"confirmButtonProps",id:"confirmbuttonprops",children:[]},{value:"getTarget",id:"gettarget",children:[]},{value:"highlightFrame",id:"highlightframe",children:[]},{value:"innerPadding",id:"innerpadding",children:[]},{value:"message",id:"message",children:[]},{value:"messageNumberOfLines",id:"messagenumberoflines",children:[]},{value:"messageStyle",id:"messagestyle",children:[]},{value:"minimumRectSize",id:"minimumrectsize",children:[]},{value:"onBackgroundPress",id:"onbackgroundpress",children:[]},{value:"overlayColor",id:"overlaycolor",children:[]},{value:"pageControlProps",id:"pagecontrolprops",children:[]},{value:"testID",id:"testid",children:[]},{value:"textColor",id:"textcolor",children:[]},{value:"title",id:"title",children:[]},{value:"titleNumberOfLines",id:"titlenumberoflines",children:[]},{value:"titleStyle",id:"titlestyle",children:[]},{value:"visible",id:"visible",children:[]}]}],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Component for feature discovery",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FeatureHighlightScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/FeatureHighlight/FeatureHighlight.gif?raw=true"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<FeatureHighlight\n visible={this.state.visible}\n title={'Title'}\n message={'Message goes here'}\n getTarget={targets[this.state.currentTarget]}\n confirmButtonProps={{label: 'Got It', onPress: () => console.log('confirmed')}}\n onBackgroundPress={() => console.log('background pressed')}\n/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"bordercolor"},"borderColor"),(0,o.kt)("p",null,"Color of the border around the highlighted element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"borderradius"},"borderRadius"),(0,o.kt)("p",null,"Border radius for the border corners around the highlighted element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"borderwidth"},"borderWidth"),(0,o.kt)("p",null,"Width of the border around the highlighted element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"confirmbuttonprops"},"confirmButtonProps"),(0,o.kt)("p",null,"Props that will be passed to the dismiss button",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,o.kt)("h3",{id:"gettarget"},"getTarget"),(0,o.kt)("p",null,"Callback that extract the ref of the element to be highlighted",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => any ")," "),(0,o.kt)("h3",{id:"highlightframe"},"highlightFrame"),(0,o.kt)("p",null,"Frame of the area to highlight {x, y, width, height}",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"HighlightFrame ")," "),(0,o.kt)("h3",{id:"innerpadding"},"innerPadding"),(0,o.kt)("p",null,"The padding of the highlight frame around the highlighted element's frame (only when passing ref in 'getTarget')",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"Message to be displayed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"messagenumberoflines"},"messageNumberOfLines"),(0,o.kt)("p",null,"Message's max number of lines",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"messagestyle"},"messageStyle"),(0,o.kt)("p",null,"Message text style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,o.kt)("h3",{id:"minimumrectsize"},"minimumRectSize"),(0,o.kt)("p",null,"The minimum size of the highlighted component",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"RectSize ")," "),(0,o.kt)("h3",{id:"onbackgroundpress"},"onBackgroundPress"),(0,o.kt)("p",null,"Called the background pressed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedbackProps['onPress'] ")," "),(0,o.kt)("h3",{id:"overlaycolor"},"overlayColor"),(0,o.kt)("p",null,"Color of the content's background (usually includes alpha for transparency)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"pagecontrolprops"},"pageControlProps"),(0,o.kt)("p",null,"PageControl component's props",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"PageControlProps ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"The test id for e2e tests",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"textcolor"},"textColor"),(0,o.kt)("p",null,"Color of the content's text",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"title"},"title"),(0,o.kt)("p",null,"Title of the content to be displayed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"titlenumberoflines"},"titleNumberOfLines"),(0,o.kt)("p",null,"Title's max number of lines",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"titlestyle"},"titleStyle"),(0,o.kt)("p",null,"Title text style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,o.kt)("h3",{id:"visible"},"visible"),(0,o.kt)("p",null,"Determines if to present the feature highlight component",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,l,u=i(e),s=1;s<arguments.length;s++){for(var p in a=Object(arguments[s]))r.call(a,p)&&(u[p]=a[p]);if(t){l=t(a);for(var c=0;c<l.length;c++)n.call(a,l[c])&&(u[l[c]]=a[l[c]])}}return u}},1535:function(e,t,r){var n=r(2525),i=60103,o=60106;var a=60109,l=60110,u=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),a=c("react.provider"),l=c("react.context"),u=c("react.forward_ref"),c("react.suspense"),s=c("react.memo"),p=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=y.prototype=new b;k.constructor=y,n(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)N.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var j=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return a=a(u=e),e=""===n?"."+P(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),x(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+P(l=e[s],s);u+=x(l,t,r,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)u+=x(l=l.value,t,r,p=n+P(l,s++),a);else if("object"===l)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,r){if(null==e)return e;var n=[],i=0;return x(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function F(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)}}]);