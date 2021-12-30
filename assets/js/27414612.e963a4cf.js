"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[767],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2,title:"export",id:"export"},p=void 0,s={unversionedId:"api/export",id:"api/export",title:"export",description:"POST /export/image",source:"@site/docs/api/export.md",sourceDirName:"api",slug:"/api/export",permalink:"/dreamcatcher/docs/api/export",editUrl:"https://github.com/persado/dreamcatcher/edit/master/docs/docs/api/export.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"export",id:"export"},sidebar:"globalSidebar",previous:{title:"Configuration",permalink:"/dreamcatcher/docs/configuration"},next:{title:"performance",permalink:"/dreamcatcher/docs/api/performance"}},d=[{value:"<code>POST /export/image</code>",id:"post-exportimage",children:[],level:2},{value:"<code>POST /export/pdf</code>",id:"post-exportpdf",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"post-exportimage"},(0,a.kt)("inlineCode",{parentName:"h2"},"POST /export/image")),(0,a.kt)("h2",{id:"post-exportpdf"},(0,a.kt)("inlineCode",{parentName:"h2"},"POST /export/pdf")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," Binary data"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters (JSON):")," All fields are optional except that one of ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"htmlContent")," is required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"url:")," STRING - Target URL to capture."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"htmlContent:")," STRING - HTML to render directly and capture. If this field is present, any value of ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," will be ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"headers:")," OBJECT (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),") - Headers to include in the request to the host specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," (e.g. for authentication)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width:")," INTEGER (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"800"),") - Width of browser viewport. If ",(0,a.kt)("inlineCode",{parentName:"li"},"width"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"height"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"selector")," are all omitted, Dreamcatcher will attempt to capture the entire target page, regardless of the default viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height:")," INTEGER (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),") - Height of browser viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"selector:")," STRING (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"body"),") -  CSS selector defining the portion of the page to capture. If a ",(0,a.kt)("inlineCode",{parentName:"li"},"selector")," is specified, it will be captured in its entirety regardless of the viewport dimensions specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"height"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"viewportSelector:")," STRING - CSS selector defining the element of the page used to set the viewport dimensions. Use this when the viewport should be set to a different element than the selector and either ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"height")," are not set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"waitFor:")," ARRAY","[String selector OR Integer time in milliseconds]"," (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),") - Array of conditions to wait for before capturing a representation. Conditions will be evaluated sequentially."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"waitTimeout:")," INTEGER (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"30000"),") - Maximum number of milliseconds to wait for succesful navigation and for any conditions specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"waitFor")," (non-cumulative) before returning an error response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"waitForIdle:")," BOOLEAN (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),") - Whether to consider navigation successful only once all network connections have been closed for at least 500 ms, rather than once the browser's ",(0,a.kt)("inlineCode",{parentName:"li"},"load")," event has been fired. Useful for capturing single-page applications where the load event may not be a reliable indicator of page readiness."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"imageType:")," STRING (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"png"),"; Image only) - The type of image you would like to export. Available options are ",(0,a.kt)("inlineCode",{parentName:"li"},"jpeg"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"png"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"webp"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"imageQuality:")," INTEGER (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),"; Image with type of ",(0,a.kt)("inlineCode",{parentName:"li"},"jpeg")," only) - Available range is 0-100. Only applies when requesting a ",(0,a.kt)("inlineCode",{parentName:"li"},"jpeg")," image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scaleFactor:")," INTEGER (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),") - the device scaling factor for images. By default Dreamcatcher generates images with scale factor 2, suitable for retina / high DPI displays."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"emulateMediaType:")," ?STRING (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),") - if this is set, it will be passed to Puppeteer before printing. Valid values: ",(0,a.kt)("inlineCode",{parentName:"li"},"screen"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"print"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clipArea:")," OBJECT (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"; Image only) - Capture a cropped region of the page:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x:")," INTEGER"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y:")," INTEGER"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width:")," INTEGER (Optional)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height:")," INTEGER (Optional)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pdfOptions:")," OBJECT (Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{landscape: true, printBackground: true}"),"; PDF only) - Options to pass to Puppeteer's ",(0,a.kt)("a",{parentName:"li",href:"https://pptr.dev/#?product=Puppeteer&version=v10.4.0&show=api-pagepdfoptions"},"pdf function"),".")))}c.isMDXComponent=!0}}]);