(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,v=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return t?a.a.createElement(v,l(l({ref:n},c),{},{components:t})):a.a.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(117)),o={id:"isSensorAvailable",title:"isSensorAvailable",sidebar_label:"isSensorAvailable"},l={unversionedId:"isSensorAvailable",id:"version-5.x/isSensorAvailable",isDocsHomePage:!1,title:"isSensorAvailable",description:"Indicates the overall availability of fingerprint sensor. It will resolve to true or false",source:"@site/versioned_docs/version-5.x/isSensorAvailable.md",slug:"/isSensorAvailable",permalink:"/react-native-sensitive-info/docs/5.x/isSensorAvailable",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-5.x/isSensorAvailable.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"isSensorAvailable",sidebar:"version-5.x/someSidebar",previous:{title:"hasEnrolledFingerprints",permalink:"/react-native-sensitive-info/docs/5.x/hasEnrolledFingerprints"},next:{title:"setItem",permalink:"/react-native-sensitive-info/docs/5.x/setItem"}},s=[],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Indicates the overall availability of fingerprint sensor. It will resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'isSensorAvailable(): Promise<\n  "Touch ID" | "Face ID" | boolean\n>;\n')),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import RNSInfo from 'react-native-sensitive-info';\n\nSINFo.isSensorAvailable();\n")))}p.isMDXComponent=!0}}]);