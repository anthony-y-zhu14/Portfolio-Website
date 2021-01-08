(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{84:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(0),a=n.n(o),c=n(11),i=n.n(c),d=(n(84),n(29)),s=n(118),l=n(121),b=n(15),j=(n(71),n(132)),p=n(119),u=n(117),h=(n(131),n(62)),x=n.n(h),m=n(63),O=n.n(m);function g(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}var f=Object(s.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{color:"black",fontWeight:"bold",borderRadius:"25px"}}}));function v(e){var t=f(),n=a.a.useState("two"),o=Object(d.a)(n,2),c=o[0],i=o[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(j.a,{className:t.tabs,value:c,onChange:function(e,t){i(t)},centered:!0,indicatorColor:"primary",variant:"fullWidth",children:[Object(r.jsx)(p.a,Object(b.a)(Object(b.a)({value:"one",icon:Object(r.jsx)(x.a,{}),label:"My Project"},g("one")),{},{onClick:function(){e.render.renderProject()}})),Object(r.jsx)(p.a,Object(b.a)(Object(b.a)({value:"two",label:"About Me"},g("two")),{},{onClick:function(){e.render.renderBio()}})),Object(r.jsx)(p.a,Object(b.a)(Object(b.a)({value:"three",icon:Object(r.jsx)(O.a,{}),label:"Contact Me"},g("three")),{},{onClick:function(){e.render.renderContact()}}))]})})}var k=n.p+"static/media/profile.43fa5601.jpg",w=n(134),y=n(122),C=n(120),S=Object(s.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,marginTop:"10px",background:"rgba(200, 200, 200, 0.6)",backdropFilter:"blur(8px)",boxShadow:"0 4px 32px 0 rgba( 50, 50, 50)",borderRadius:"15px",border:"1px solid rgba( 250, 250, 250, 0.5)",padding:"8px",textAlign:"center"}}}));function F(e){var t=S();return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(C.a,{in:!0,timeout:500,children:Object(r.jsxs)(l.a,{variant:"elevation",position:"fixed",className:t.appBar,children:[Object(r.jsx)("div",{children:Object(r.jsx)(y.a,{onClick:function(){e.render.renderFront()},children:Object(r.jsx)(w.a,{sizes:"max",alt:"Anthony",src:k})})}),Object(r.jsx)(v,{render:e.render})]})})})}var R=n(123),L=n(64),A=n.n(L),T=n(124),I=Object(s.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"20%",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"}}}));function N(e){var t=I();return Object(r.jsx)(C.a,{in:!0,timeout:1e3,children:Object(r.jsxs)("main",{className:t.content,children:[Object(r.jsxs)(R.a,{container:!0,justify:"center",spacing:10,children:[Object(r.jsx)(R.a,{item:!0,children:Object(r.jsx)(u.a,{variant:"h3",children:"Welcome"})}),Object(r.jsxs)(R.a,{item:!0,children:[Object(r.jsx)(u.a,{variant:"h5",children:"I'm Anthony Y. Zhu, nice to meet you."}),Object(r.jsx)(u.a,{variant:"h5",children:"Please take a look around!"})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(T.a,{variant:"extended",color:"primary",onClick:e.render.renderBio,children:[Object(r.jsx)(A.a,{}),"Check out my stories"]})]})})}var z=n(125),B=n(126),M=n(128),U=n(127),G=Object(s.a)({root:{maxWidth:"400px",margin:"2% auto",background:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(8px)",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.4)"},media:{paddingTop:"56.25%"},button:{borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.8)",margin:"0% auto"}});function P(e){var t=G();return Object(r.jsx)(z.a,{className:t.root,children:Object(r.jsxs)(B.a,{onClick:function(){return window.open(e.project.URL,"_blank")},children:[Object(r.jsx)(U.a,{className:t.media,image:e.project.img,title:e.project.title}),Object(r.jsxs)(M.a,{children:[Object(r.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.project.title}),Object(r.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:e.project.intro}),Object(r.jsx)(u.a,{variant:"body1",color:"primary",component:"p",children:e.project.tech})]})]})})}var $=n(129),_=n.p+"static/media/UCLEI.884aaa08.png",E=n.p+"static/media/Shoppies.ca79ffc2.png",W=n.p+"static/media/LeetCode_logo.c79f333b.png",J=Object(s.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"200px",color:"black",textAlign:"center"}}})),Y={UCLEI:{img:_,title:"UCLEI",intro:"A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",tech:"React, JavaScript",URL:"https://github.com/anthony-y-zhu14/UCLEI---Stock-Trading-Platform-Sandbox"},Shoppies:{img:E,title:"The Shoppies",intro:"A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",tech:"React",URL:"https://anthony-y-zhu14.github.io/The-Shoppies/"},LeetCode:{img:W,title:"LeetCode Solutions",intro:"A Record of My Problem Solving Journey",tech:"React",URL:"https://github.com/anthony-y-zhu14/LeetCode"}};function D(){var e=J();return Object(r.jsx)(C.a,{in:!0,timeout:750,children:Object(r.jsx)($.a,{className:e.content,children:Object.keys(Y).map((function(e){return Object(r.jsx)(P,{project:Y[e]})}))})})}var H=Object(s.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"200px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.4)"}}}));function Z(){var e=H();return Object(r.jsx)(C.a,{in:!0,timeout:750,children:Object(r.jsx)($.a,{className:e.content,children:Object(r.jsx)(u.a,{variant:"p",children:"After studying and working in Civil Engineering field, I have decided to pursue a career in Computer Science. Prior experience gifted me with motivation and professionalism as well as the desire to explore the unknown and the courage to solve the seemingly unsolvable. With my excellent technical and communication skills as well as the commitment to meticulous accuracy. I am always prepared to face new challenges."})})})}var q=n(133),K=n(67),Q=n.n(K),V=n(69),X=n.n(V),ee=n(65),te=n.n(ee),ne=n(68),re=n.n(ne),oe=Object(s.a)((function(e){return{content_email:{flexGrow:1,padding:e.spacing(1),marginTop:"200px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"},content_other:{flexGrow:1,padding:e.spacing(1),marginTop:"10px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"},tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})),ae=function(e){return window.open(e,"_blank")};function ce(){var e=oe();return Object(r.jsx)(C.a,{in:!0,timeout:750,children:Object(r.jsxs)($.a,{children:[Object(r.jsx)($.a,{className:e.content_email,children:Object(r.jsx)(y.a,{children:Object(r.jsx)(te.a,{})})}),Object(r.jsxs)($.a,{className:e.content_other,children:[Object(r.jsx)(u.a,{children:"You can also contact me through "}),Object(r.jsx)(q.a,{title:"Facebook",children:Object(r.jsx)(y.a,{onClick:function(){return ae("https://www.facebook.com/anthony.zhu1114")},children:Object(r.jsx)(Q.a,{})})}),Object(r.jsx)(q.a,{title:"LinkedIn",children:Object(r.jsx)(y.a,{onClick:function(){return ae("https://www.linkedin.com/in/anthony-y-zhu/")},children:Object(r.jsx)(re.a,{})})}),Object(r.jsx)(q.a,{title:"GitHub",children:Object(r.jsx)(y.a,{onClick:function(){return ae("https://github.com/anthony-y-zhu14")},children:Object(r.jsx)(X.a,{})})})]})]})})}function ie(){var e=a.a.useState(!0),t=Object(d.a)(e,2),n=t[0],o=t[1],c=a.a.useState(!1),i=Object(d.a)(c,2),s=i[0],l=i[1],b=a.a.useState(!1),j=Object(d.a)(b,2),p=j[0],u=j[1],h=a.a.useState(!1),x=Object(d.a)(h,2),m=x[0],O=x[1],g={renderFront:function(){n||o(!0)},renderContact:function(){O(!0),s&&l(!1),p&&u(!1)},renderProject:function(){l(!0),m&&O(!1),p&&u(!1)},renderBio:function(){u(!0),n&&o(!1),s&&l(!1),m&&O(!1)}};return Object(r.jsxs)($.a,{children:[n&&Object(r.jsx)(N,{render:g}),!n&&Object(r.jsxs)("div",{children:[Object(r.jsx)(F,{render:g}),s?Object(r.jsx)(D,{render:g}):p?Object(r.jsx)(Z,{render:g}):m?Object(r.jsx)(ce,{render:g}):void 0]})]})}var de=function(){return Object(r.jsx)(ie,{})},se=n(70),le=n(130),be=Object(se.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#ff0000"}},overrides:{MuiOutlinedInput:{root:{position:"relative",marginTop:"5%","& $notchedOutline":{borderColor:"#fff"},"&:hover:not($disabled):not($focused):not($error) $notchedOutline":{borderColor:"#6C9FF8","@media (hover: none)":{marginTop:"5%",borderColor:"#6C9FF8"}},"&$focused $notchedOutline":{borderColor:"#6C9FF8",borderWidth:1}}},MuiFormLabel:{root:{marginTop:"5%",color:"#fff"}}}});i.a.render(Object(r.jsx)(le.a,{theme:be,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(de,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.1999f002.chunk.js.map