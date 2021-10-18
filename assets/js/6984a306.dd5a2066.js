(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[186],{1718:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],p={sidebar_position:2,title:"Quick Start"},i={unversionedId:"quick_start",id:"quick_start",isDocsHomePage:!1,title:"Quick Start",description:"Run the development server:",source:"@site/docs/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/dreamcatcher/docs/quick_start",editUrl:"https://github.com/persado/dreamcatcher/edit/master/docs/docs/quick_start.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Quick Start"},sidebar:"globalSidebar",previous:{title:"Features",permalink:"/dreamcatcher/docs/features"},next:{title:"Configuration",permalink:"/dreamcatcher/docs/configuration"}},s=[],u={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run start\n")),(0,a.kt)("p",null,"Dreamcatcher will listen at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," for API requests."),(0,a.kt)("p",null,"Send a ",(0,a.kt)("em",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/export/pdf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/export/image"),"\ndepending on the desired output."),(0,a.kt)("p",null,"Provide either a ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", or some raw ",(0,a.kt)("inlineCode",{parentName:"p"},"htmlContent"),"."),(0,a.kt)("p",null,"For example, a small snippet converted to a PNG image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" \\\n  -d \'{"htmlContent": "<html><body><h1>Sample Content</h1></body></html>"}\' \\\n   --output output.png \\\n  http://localhost:8080/export/image\n')),(0,a.kt)("p",null,"And Google.com in PDF form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" \\\n  -d \'{"url": "https://www.google.com"}\' \\\n   --output output.pdf \\\n  http://localhost:8080/export/pdf\n')))}c.isMDXComponent=!0}}]);