(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),s=(n(71),n(19)),o=n.n(s),u=n(24),l=n(21),j=n(43),p=n(58),d=n(8),b=n(40),h=n(23),O=n.n(h),f=n(57),x=n(124),v=n(129),g=(n(91),n(130)),m=n(131),k=n(132),y=n(128),w=n(133),q=n(134),R=n(135),L=n(127),A=n(126),C=n(3),S=Object(x.a)((function(e){return{smallAvatar:{width:e.spacing(3),height:e.spacing(3)}}}));function F(e){var t=S();return e.authenticated?e.profilePicture?Object(C.jsx)(A.a,{onClick:e.handleLogout,id:"ib",children:Object(C.jsx)(R.a,{src:e.profilePicture,className:t.smallAvatar})}):Object(C.jsx)(L.a,{onClick:e.handleLogout,color:"inherit",children:"Logout"}):Object(C.jsx)(C.Fragment,{children:" "})}var P=n(56),T=Object(x.a)((function(e){return{content:{textAlign:"center",marginTop:40},msg:{marginBottom:"20px"}}}));function D(e){var t=T(),n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],i=c[1];return e.authRequired?Object(C.jsxs)("div",{className:t.content,children:[Object(C.jsx)(y.a,{variant:"h5",gutterBottom:!0,className:t.msg,children:"Login to access application content."}),Object(C.jsx)(P.GoogleLogin,{clientId:"374127802621-kcittpp686bbvrm502tvngc5ejn0caa4.apps.googleusercontent.com",buttonText:"Google Login",onSuccess:function(t){function n(){return(n=Object(u.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new FormData).set("id_token",t.tokenObj.id_token),n.prev=2,n.next=5,O.a.post("/api/profile",a);case 5:e.setAuthRequired(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),i(!0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},onFailure:function(e){i(!0)},cookiePolicy:"single_host_origin",redirectUri:"postmessage",scope:"openid"}),Object(C.jsx)(w.a,{open:r,autoHideDuration:1e4,onClose:function(){return i(!1)},children:Object(C.jsx)(q.a,{elevation:6,severity:"error",variant:"filled",children:"There was an error logging in."})})]}):Object(C.jsx)(d.a,{to:"/"})}var I=Object(x.a)((function(e){return{content:{textAlign:"center",marginTop:40}}}));function N(e){var t=I(),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),j=Object(l.a)(s,2),p=j[0],d=j[1],b=[e.authRequired,e.setAuthRequired],h=b[0],f=b[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/profile");case 3:t=e.sent,i(t.data.name),d(t.data.user_id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&401===e.t0.response.status&&f(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h,f]),r&&p?Object(C.jsxs)("div",{className:t.content,children:[Object(C.jsxs)(y.a,{variant:"h4",children:["Hello, ",r,"."]}),Object(C.jsx)(y.a,{variant:"body1",children:"Click your profile picture to log out."}),Object(C.jsxs)(y.a,{variant:"body1",children:["User ID: ",p,"."]})]}):Object(C.jsx)("div",{className:t.content,children:Object(C.jsx)(y.a,{variant:"h5",children:"Loading..."})})}var _=["children","authRequired"];O.a.defaults.headers.common["X-Requested-With"]="XmlHttpRequest";var B=function(e){var t=e.children,n=e.authRequired,a=Object(p.a)(e,_);return Object(C.jsx)(d.b,Object(j.a)(Object(j.a)({},a),{},{children:n?Object(C.jsx)(d.a,{to:"/login"}):t}))},G=Object(f.a)({palette:{primary:{main:"#1976d2"}}}),H=Object(x.a)((function(e){return{title:{flexGrow:1}}}));var E=function(e){H(G);var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(null),s=Object(l.a)(i,2),j=s[0],p=s[1],h=Object(a.useState)(!1),f=Object(l.a)(h,2),x=f[0],R=f[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=13;break}return e.prev=1,e.next=4,O.a.get("/api/profile");case 4:t=e.sent,p(t.data.picture),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&401===e.t0.response.status&&r(!0);case 11:e.next=14;break;case 13:p(null);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(C.jsxs)(v.a,{theme:G,children:[Object(C.jsx)(g.a,{}),Object(C.jsx)(m.a,{position:"relative",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(F,{handleLogout:function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("/api/profile");case 3:200!==(t=e.sent).status&&204!==t.status||r(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),R(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},authenticated:!c,profilePicture:j}),Object(C.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Google OAuth2.0"})]})}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(d.d,{children:[Object(C.jsx)(d.b,{path:"/login",children:Object(C.jsx)(D,{authRequired:c,setAuthRequired:r,clientId:"374127802621-kcittpp686bbvrm502tvngc5ejn0caa4.apps.googleusercontent.com"})}),Object(C.jsx)(B,{authRequired:c,path:"/",children:Object(C.jsx)(N,{setAuthRequired:r})})]})}),Object(C.jsx)(w.a,{open:x,autoHideDuration:1e4,onClose:function(){return R(!1)},children:Object(C.jsx)(q.a,{variant:"filled",elevated:6,severity:"error",children:"Couldn't log out"})})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),J()},71:function(e,t,n){},91:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.cd57f173.chunk.js.map