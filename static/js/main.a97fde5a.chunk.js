(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{79:function(e,r,n){},84:function(e,r,n){"use strict";n.r(r);var t=n(2),a=n(0),o=n.n(a),c=n(11),i=n.n(c),d=(n(79),n(25)),l=n(109),s=n(111),b=n(13),j=(n(65),n(123)),u=n(110),x=n(108),p=(n(122),n(57)),O=n.n(p),h=n(58),g=n.n(h);function m(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}var f=Object(l.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{color:"black",fontWeight:"bold"}}}));function v(e){var r=f(),n=o.a.useState("two"),a=Object(d.a)(n,2),c=a[0],i=a[1];return Object(t.jsx)("div",{children:Object(t.jsxs)(j.a,{className:r.tabs,value:c,onChange:function(e,r){i(r)},centered:!0,indicatorColor:"secondary",textColor:"secondary",variant:"fullWidth",children:[Object(t.jsx)(u.a,Object(b.a)(Object(b.a)({value:"one",icon:Object(t.jsx)(O.a,{}),label:"My Project"},m("one")),{},{onClick:function(){e.render.renderProject()}})),Object(t.jsx)(u.a,Object(b.a)(Object(b.a)({value:"two",label:"About Me"},m("two")),{},{onClick:function(){e.render.renderBio()}})),Object(t.jsx)(u.a,Object(b.a)(Object(b.a)({value:"three",icon:Object(t.jsx)(g.a,{}),label:"Contact Me"},m("three")),{},{onClick:function(){e.render.renderContact()}}))]})})}var k=n.p+"static/media/profile.43fa5601.jpg",C=n(125),y=n(112),w=n(124),F=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,marginTop:"10px",background:"rgba(200, 200, 200, 0.4)",backdropFilter:"blur(8px)",boxShadow:"0 4px 32px 0 rgba( 50, 50, 50)",borderRadius:"15px",border:"1px solid rgba( 250, 250, 250, 0.5)",padding:"8px",textAlign:"center"}}}));function A(e){var r=F();return Object(t.jsx)("div",{className:r.root,children:Object(t.jsx)(w.a,{in:!0,timeout:500,children:Object(t.jsxs)(s.a,{variant:"elevation",position:"fixed",className:r.appBar,children:[Object(t.jsx)("div",{children:Object(t.jsx)(y.a,{onClick:function(){e.render.renderFront()},children:Object(t.jsx)(C.a,{sizes:"max",alt:"Anthony",src:k})})}),Object(t.jsx)(v,{render:e.render})]})})})}var S=n(113),N=n(59),T=n.n(N),B=n(114),I=Object(l.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"20%",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"}}}));function M(e){var r=I();return Object(t.jsx)(w.a,{in:!0,timeout:1e3,children:Object(t.jsxs)("main",{className:r.content,children:[Object(t.jsxs)(S.a,{container:!0,justify:"center",spacing:10,children:[Object(t.jsx)(S.a,{item:!0,children:Object(t.jsx)(x.a,{variant:"h3",children:"Welcome"})}),Object(t.jsxs)(S.a,{item:!0,children:[Object(t.jsx)(x.a,{variant:"h5",children:"I'm Anthony Y. Zhu, nice to meet you."}),Object(t.jsx)(x.a,{variant:"h5",children:"Please take a look around!"})]})]}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsxs)(B.a,{variant:"extended",color:"primary",onClick:e.render.renderBio,children:[Object(t.jsx)(T.a,{}),"Check out my stories"]})]})})}var R=n.p+"static/media/carleton.7ce180b8.png",$=n.p+"static/media/algonquin.a2c987a9.png",W=n(115),G=n(116),P=n(119),q=n(118),E=n(117),z=Object(l.a)({root:{maxWidth:"400px",margin:"8px auto",background:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(8px)",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.4)"},media:{paddingTop:"56.25%"},button:{borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.4)",margin:"0% auto"}});function J(e){var r=z();return Object(t.jsxs)(W.a,{className:r.root,children:[Object(t.jsxs)(G.a,{children:[Object(t.jsx)(E.a,{className:r.media,image:e.school.img,title:e.school.name}),Object(t.jsxs)(q.a,{children:[Object(t.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.school.name}),Object(t.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:e.school.program}),Object(t.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:e.school.degree})]})]}),Object(t.jsx)(P.a,{children:Object(t.jsx)(B.a,{variant:"extended",className:r.button,color:"primary",children:"Learn More"})})]})}var L=Object(l.a)((function(e){return{content:{flexGrow:1,display:"flex",padding:e.spacing(3),marginTop:"200px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"}}})),Y={Carleton:{name:"Carleton University",img:R,program:"Computer Science",degree:"Bacholar of Computer Science"},Algonquin:{name:"Algonquin College",img:$,program:"Civil Engineering",degree:"Advanced College Dipolma - Engineering"}};function D(){var e=L();return Object(t.jsx)(w.a,{in:!0,timeout:1e3,children:Object(t.jsxs)("main",{className:e.content,children:[Object(t.jsx)(J,{school:Y.Carleton}),Object(t.jsx)(J,{school:Y.Algonquin})]})})}var U=n(120),Z=Object(l.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"200px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.4)"}}}));function H(){var e=Z();return Object(t.jsx)(w.a,{in:!0,timeout:2e3,children:Object(t.jsx)(U.a,{className:e.content,children:Object(t.jsx)(x.a,{variant:"p",children:"After studying and working in Civil Engineering field, I have decided to pursue a career in Computer Science. Prior experience gifted me with motivation and professionalism as well as the desire to explore the unknown and the courage to solve the seemingly unsolvable. With my excellent technical and communication skills as well as the commitment to meticulous accuracy. I am always prepared to face new challenges."})})})}var K=n(60),Q=n.n(K),V=n(62),X=n.n(V),_=n(63),ee=n.n(_),re=n(61),ne=n.n(re),te=Object(l.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),marginTop:"200px",color:"black",background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(8px)",textAlign:"center",borderRadius:"30px",border:"1px solid rgb(255, 255, 255, 0.2)"}}}));function ae(){var e=te();return Object(t.jsx)(w.a,{in:!0,timeout:2e3,children:Object(t.jsxs)(U.a,{className:e.content,children:[Object(t.jsx)(x.a,{children:"You can contact me through "}),Object(t.jsx)(y.a,{children:Object(t.jsx)(Q.a,{color:"primary"})}),Object(t.jsx)(y.a,{children:Object(t.jsx)(ne.a,{color:"secondary"})}),Object(t.jsx)(y.a,{children:Object(t.jsx)(X.a,{color:"primary"})}),Object(t.jsx)(y.a,{children:Object(t.jsx)(ee.a,{color:"secondary"})})]})})}function oe(){var e=o.a.useState(!0),r=Object(d.a)(e,2),n=r[0],a=r[1],c=o.a.useState(!1),i=Object(d.a)(c,2),l=i[0],s=i[1],b=o.a.useState(!1),j=Object(d.a)(b,2),u=j[0],x=j[1],p=o.a.useState(!1),O=Object(d.a)(p,2),h=O[0],g=O[1],m={renderFront:function(){n||a(!0)},renderContact:function(){g(!0),l&&s(!1),u&&x(!1)},renderProject:function(){s(!0),h&&g(!1),u&&x(!1)},renderBio:function(){x(!0),n&&a(!1),l&&s(!1),h&&g(!1)}};return Object(t.jsxs)(U.a,{children:[n&&Object(t.jsx)(M,{render:m}),!n&&Object(t.jsxs)("div",{children:[Object(t.jsx)(A,{render:m}),l?Object(t.jsx)(D,{render:m}):u?Object(t.jsx)(H,{render:m}):h?Object(t.jsx)(ae,{render:m}):void 0]})]})}var ce=function(){return Object(t.jsx)(oe,{})},ie=n(64),de=n(121),le=Object(ie.a)({palette:{primary:{main:"#6C9FF8"},secondary:{main:"#ff0000"}},overrides:{MuiOutlinedInput:{root:{position:"relative",marginTop:"5%","& $notchedOutline":{borderColor:"#fff"},"&:hover:not($disabled):not($focused):not($error) $notchedOutline":{borderColor:"#6C9FF8","@media (hover: none)":{marginTop:"5%",borderColor:"#6C9FF8"}},"&$focused $notchedOutline":{borderColor:"#6C9FF8",borderWidth:1}}},MuiFormLabel:{root:{marginTop:"5%",color:"#fff"}}}});i.a.render(Object(t.jsx)(de.a,{theme:le,children:Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(ce,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.a97fde5a.chunk.js.map