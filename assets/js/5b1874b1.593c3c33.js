/*! For license information please see 5b1874b1.593c3c33.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[7834],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1897:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7378),r(3905)),l=["components"],i={id:"TabController.TabBar",title:"TabController.TabBar",sidebar_label:"TabBar"},c=void 0,p={unversionedId:"components/layoutsAndTemplates/TabController/TabController.TabBar",id:"components/layoutsAndTemplates/TabController/TabController.TabBar",isDocsHomePage:!1,title:"TabController.TabBar",description:"TabController's TabBar component",source:"@site/../docs/components/layoutsAndTemplates/TabController/TabController.TabBar.md",sourceDirName:"components/layoutsAndTemplates/TabController",slug:"/components/layoutsAndTemplates/TabController/TabController.TabBar",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/TabController/TabController.TabBar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/TabController/TabController.TabBar.md",tags:[],version:"current",frontMatter:{id:"TabController.TabBar",title:"TabController.TabBar",sidebar_label:"TabBar"},sidebar:"tutorialSidebar",previous:{title:"PageCarousel",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/TabController/TabController.PageCarousel"},next:{title:"TabBarItem",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/TabController/TabController.TabBarItem"}},u=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"activeBackgroundColor",id:"activebackgroundcolor",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"centerSelected",id:"centerselected",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"containerWidth",id:"containerwidth",children:[]},{value:"enableShadow",id:"enableshadow",children:[]},{value:"height",id:"height",children:[]},{value:"iconColor",id:"iconcolor",children:[]},{value:"indicatorInsets",id:"indicatorinsets",children:[]},{value:"indicatorStyle",id:"indicatorstyle",children:[]},{value:"labelColor",id:"labelcolor",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"selectedIconColor",id:"selectediconcolor",children:[]},{value:"selectedLabelColor",id:"selectedlabelcolor",children:[]},{value:"selectedLabelStyle",id:"selectedlabelstyle",children:[]},{value:"shadowStyle",id:"shadowstyle",children:[]},{value:"spreadItems",id:"spreaditems",children:[]},{value:"testID",id:"testid",children:[]},{value:"uppercase",id:"uppercase",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TabController's TabBar component",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/TabControllerScreen/index.tsx"},"(code example)")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<TabController.TabBar activeBackgroundColor={}/>\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"activebackgroundcolor"},"activeBackgroundColor"),(0,a.kt)("p",null,"Apply background color on press for tab item",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,a.kt)("p",null,"The TabBar background Color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"centerselected"},"centerSelected"),(0,a.kt)("p",null,"Pass to center selected item",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,a.kt)("p",null,"Additional styles for the container",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"containerwidth"},"containerWidth"),(0,a.kt)("p",null,"The TabBar container width",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"enableshadow"},"enableShadow"),(0,a.kt)("p",null,"Show Tab Bar bottom shadow",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"height"},"height"),(0,a.kt)("p",null,"Tab Bar height",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"iconcolor"},"iconColor"),(0,a.kt)("p",null,"Icon tint color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"indicatorinsets"},"indicatorInsets"),(0,a.kt)("p",null,"The indicator insets",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"indicatorstyle"},"indicatorStyle"),(0,a.kt)("p",null,"Custom style for the selected indicator",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"labelcolor"},"labelColor"),(0,a.kt)("p",null,"The default label color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,a.kt)("p",null,"Custom label style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,a.kt)("h3",{id:"selectediconcolor"},"selectedIconColor"),(0,a.kt)("p",null,"Icon selected tint color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"selectedlabelcolor"},"selectedLabelColor"),(0,a.kt)("p",null,"The selected label color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"selectedlabelstyle"},"selectedLabelStyle"),(0,a.kt)("p",null,"Custom selected label style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,a.kt)("h3",{id:"shadowstyle"},"shadowStyle"),(0,a.kt)("p",null,"Custom shadow style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"spreaditems"},"spreadItems"),(0,a.kt)("p",null,"Whether the tabBar should be spread",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"testid"},"testID"),(0,a.kt)("p",null,"The component test id",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"uppercase"},"uppercase"),(0,a.kt)("p",null,"Whether to change the text to uppercase",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,c=o(e),p=1;p<arguments.length;p++){for(var u in l=Object(arguments[p]))r.call(l,u)&&(c[u]=l[u]);if(t){i=t(l);for(var s=0;s<i.length;s++)n.call(l,i[s])&&(c[i[s]]=l[i[s]])}}return c}},1535:function(e,t,r){var n=r(2525),o=60103,a=60106;var l=60109,i=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),l=s("react.provider"),i=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),u=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var v=k.prototype=new y;v.constructor=k,n(v,h.prototype),v.isPureReactComponent=!0;var g={current:null},C=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!T.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return l=l(c=e),e=""===n?"."+j(c,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(l,t,r,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+j(i=e[p],p);c+=S(i,t,r,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(i=e.next()).done;)c+=S(i=i.value,t,r,u=n+j(i,p++),l);else if("object"===i)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function _(){var e=B.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,r){r(1535)}}]);