(this["webpackJsonpdexos-app"]=this["webpackJsonpdexos-app"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(31),r=n.n(s),i=(n(135),n(23)),o=n.n(i),l=n(29),d=n(17),u=(n(136),n(137),n(67)),j=n(240),m=n(242),b=n(243),v=n(244),h=n(245),p=(n(138),n(128)),O=n(236),x=n(239),f=(n(139),n(44)),g=n.n(f),_="http://demo-dexos.simform.solutions/api/",w=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=_+"v1/posts/".concat(t,"/?page=").concat(n),e.next=4,g.a.get(a);case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_+"v1/post/",e.next=4,g.a.post("http://demo-dexos.simform.solutions/api/v1/post/",t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return new Promise(function(){var t=Object(l.a)(o.a.mark((function t(n,a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("http://demo-dexos.simform.solutions/api/v1/comment/",e);case 3:c=t.sent,n(c),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}())},S=function(e,t){try{if(e>0){if(1===t){var n=_+"v1/comments/".concat(e,"/");return g.a.get(n)}var a=_+"v1/comments/".concat(e,"/?page=").concat(t);return g.a.get(a)}}catch(c){console.error(c)}},k=function(e,t){try{var n=_+"v1/comment/".concat(e,"/");return g.a.put(n,t)}catch(a){console.error(a)}},C=function(e){try{var t=_+"v1/top-comments/".concat(e,"/");return g.a.get(t)}catch(n){console.error(n)}},D=n(46),M=n(234),E=n(4),F=O.a.TabPane,I=Object(E.jsx)(D.a,{style:{fontSize:24},spin:!0});var P=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),j=i[0],v=i[1],h=Object(a.useState)(1),p=Object(d.a)(h,2),f=p[0],g=p[1],_=Object(a.useState)(!1),N=Object(d.a)(_,2),y=N[0],S=N[1];function k(t){t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight&&(f&&function(){var t=Object(l.a)(o.a.mark((function t(){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e.website,f);case 2:return c=t.sent,s((function(e){var t,n;return[].concat(Object(u.a)(e),Object(u.a)(null===c||void 0===c||null===(t=c.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.results))})),g(null===c||void 0===c||null===(n=c.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.next_page_number),t.abrupt("return");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()())}return Object(a.useEffect)((function(){Object(l.a)(o.a.mark((function t(){var n,a,c,r,i,l,d,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,w(e.website,1);case 3:return d=t.sent,s(null===d||void 0===d||null===(n=d.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.results),g(null===d||void 0===d||null===(c=d.data)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.next_page_number),t.next=8,C(e.website);case 8:u=t.sent,v(null===u||void 0===u||null===(i=u.data)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.results),S(!1);case 11:case"end":return t.stop()}}),t)})))()}),[]),Object(a.useEffect)((function(){return window.addEventListener("scroll",k),function(){return window.removeEventListener("scroll",k)}}),[]),Object(E.jsxs)(x.a,{placement:"right",closable:!0,onClose:function(){try{e.setVisible(!1)}catch(t){console.log("Some error occured",t)}},visible:e.visible,width:630,children:[Object(E.jsx)("div",{className:"Header_drawer",children:e.website}),Object(E.jsxs)(O.a,{defaultActiveKey:"1",children:[Object(E.jsx)(F,{tab:"Latest Discussions",children:Object(E.jsx)("div",{className:"post-main",onScroll:function(e){return k(e)},children:y?Object(E.jsx)(M.a,{indicator:I}):(null===c||void 0===c?void 0:c.length)>0&&c.map((function(e,t){return Object(E.jsx)("div",{className:"post-list",children:Object(E.jsxs)("div",{className:"post-list__info",children:[Object(E.jsxs)("p",{className:"post-time",children:["Recent activity ",null===e||void 0===e?void 0:e.updated_date]}),Object(E.jsx)("h2",{onClick:function(){return function(e){try{window.open(e)}catch(t){console.log("Some error occured",t)}}(null===e||void 0===e?void 0:e.link)},children:null===e||void 0===e?void 0:e.title}),Object(E.jsxs)("a",{onClick:function(){return function(e){try{window.open(e)}catch(t){console.log("Some error occured",t)}}(null===e||void 0===e?void 0:e.link)},children:[null===e||void 0===e?void 0:e.comments_count," Comments"]})]})})}))})},"1"),Object(E.jsx)(F,{tab:"Top Comments",children:Object(E.jsx)("div",{className:"post_com",children:(null===j||void 0===j?void 0:j.length)>0&&j.map((function(e,t){return Object(E.jsx)("div",{className:"top_comments_post",children:Object(E.jsxs)("div",{className:"post_body",children:[Object(E.jsxs)("div",{className:"comment_header",children:[Object(E.jsx)("div",{className:"post_byline",children:Object(E.jsx)("div",{className:"post_username",children:Object(E.jsx)("a",{href:"",target:"_blank",children:e.author_name})})}),Object(E.jsx)("div",{className:"post_meta",children:Object(E.jsx)("span",{children:e.created_date})})]}),Object(E.jsx)("div",{className:"comment_body",children:Object(E.jsx)("div",{className:"post_comment",children:Object(E.jsx)("p",{children:e.message})})}),Object(E.jsxs)("div",{className:"comment_footer",children:[Object(E.jsx)("div",{className:"post_like",children:Object(E.jsxs)("a",{href:"",children:[Object(E.jsx)(m.a,{}),e.likes]})}),Object(E.jsx)("div",{className:"post_dislike",children:Object(E.jsxs)("a",{href:"",children:[Object(E.jsx)(b.a,{}),e.dislikes]})})]})]})})}))})},"2")]})]})},A=n(87),T=n(238),L=n(235),V=n(241),B=n(121),R=n.n(B);var J=new A.a,$=T.a.TextArea,z=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(d.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),m=j[0],b=j[1],v=Object(a.useState)(""),h=Object(d.a)(v,2),O=h[0],x=h[1],f=Object(a.useRef)(),g=J.get("author_name"),_=J.get("author_email"),w=L.a.useForm(),N=Object(d.a)(w,1)[0],y=Object(a.useRef)();!function(e,t){var n=function(n){try{e.current&&!e.current.contains(n.target)&&t()}catch(a){console.log("Some error occured",a)}};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))}(y,(function(){l(!1),s(!1)}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(L.a,{form:N,validateMessages:e.validateMessages,onFinish:function(t){try{if(t.user.name&&t.user.email)return x(t.user.name),b(t.user.email),void e.sendMessage(t,e.parent);N.setFieldsValue({user:{name:g,email:_}}),x(g),b(_);var n={user:{name:g,email:_}};return void e.sendMessage(n,e.parent)}catch(a){console.log("Some error occured",a)}},children:(e.showDrawer||e.visibleDrawer)&&Object(E.jsxs)("div",{className:"avtar_massemmo",children:[Object(E.jsx)("div",{className:"avatar_massage",children:Object(E.jsxs)("div",{className:"massage_textarea",children:[Object(E.jsx)($,{className:"mass_text",placeholder:"Join the discussion..",rows:4,value:e.messageMain||e.inputData,onChange:function(t){e.setErrorMessage("");try{"MainDrawer"===e.id&&e.onChange(t.target.value,e.id),function n(a){a.map((function(a){var c;a.id===e.id&&e.onChange(t.target.value,a.id),(null===a||void 0===a||null===(c=a.replies)||void 0===c?void 0:c.length)>0&&n(a.replies)}))}(e.comments)}catch(n){console.log("Some error occured",n)}},ref:f}),Object(E.jsxs)("div",{className:"commentemoji_btn",ref:y,onClick:function(){l(!0)},children:[Object(E.jsxs)("div",{className:"emojiundo_btn",children:[Object(E.jsx)(p.a,{onClick:function(e){try{e.preventDefault(),s(!c)}catch(t){console.log("Some error occured",t)}},className:"emo_button",type:"primary",children:"\ud83d\ude00"}),o&&c&&Object(E.jsx)(R.a,{onEmojiClick:function(t,n){"MainDrawer"===e.id?e.messageMain?e.onChange(e.messageMain+n.emoji,e.id):e.onChange(n.emoji,e.id):e.message.message?e.onChange(e.message.message+n.emoji,e.parent):e.onChange(n.emoji,e.parent)},disableSearchBar:!0}),Object(E.jsx)(p.a,{className:"emo_button undo",type:"primary",onClick:function(){try{document.execCommand("undo",!1,null)}catch(e){console.log("Some error occured",e)}}}),Object(E.jsx)(p.a,{className:"emo_button redo",type:"primary",onClick:function(e){try{document.execCommand("redo",!1,null)}catch(t){console.log("Some error occured",t)}}})]}),Object(E.jsx)("div",{className:"post_comment",children:Object(E.jsx)(p.a,{className:"proceed_button",type:"primary",htmlType:"submit",children:"Post"})})]})]})}),e.error&&Object(E.jsx)("div",{style:{color:"#FF0000"},children:e.error}),Object(E.jsx)("div",{className:"loginwith_singup",children:Object(E.jsxs)("div",{className:"username_emai",children:[Object(E.jsxs)("div",{className:"formitem_name",children:[Object(E.jsx)(L.a.Item,{name:["user","name"],children:Object(E.jsx)(T.a,{placeholder:"Name",defaultValue:g||"",value:O})}),Object(E.jsx)(L.a.Item,{rules:[{type:"email"}],name:["user","email"],children:Object(E.jsx)(T.a,{type:"email",placeholder:"Email",defaultValue:_||"",value:m})})]}),Object(E.jsx)("div",{className:"privacy_policy",children:Object(E.jsx)("p",{className:"privacy_ele",children:"*Your email address will not be published"})}),Object(E.jsx)("div",{className:"guest_checkbox",children:Object(E.jsx)(V.a,{onChange:function(){e.setChecked(!0)},children:"Save my name and email in this browser for the next time I comment."})})]})})]})})})},H=n(237),q=new A.a;var K=function(e){var t=Object(a.useState)({message:"",id:0}),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),O=i[0],x=i[1],f=Object(a.useState)(!1),g=Object(d.a)(f,2),_=g[0],w=g[1],N=Object(a.useState)(!1),C=Object(d.a)(N,2),D=C[0],M=C[1],F=Object(a.useState)(!1),I=Object(d.a)(F,2),A=I[0],T=I[1],L=Object(a.useState)([]),V=Object(d.a)(L,2),B=V[0],R=V[1],J=Object(a.useState)([]),$=Object(d.a)(J,2),K=$[0],X=$[1],Y=Object(a.useState)({}),G=Object(d.a)(Y,2),Q=G[0],U=G[1],W=Object(a.useState)(),Z=Object(d.a)(W,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(""),ae=Object(d.a)(ne,2),ce=ae[0],se=ae[1],re=Object(a.useState)(0),ie=Object(d.a)(re,2),oe=ie[0],le=ie[1],de=Object(a.useState)(1),ue=Object(d.a)(de,2),je=ue[0],me=ue[1],be=Object(a.useState)(0),ve=Object(d.a)(be,2),he=ve[0],pe=ve[1],Oe=Object(a.useState)(""),xe=Object(d.a)(Oe,2),fe=xe[0],ge=xe[1],_e={};Object(a.useEffect)((function(){Object(l.a)(o.a.mark((function t(){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.ID,je);case 2:_e=t.sent,te(null===(n=_e)||void 0===n||null===(a=n.data)||void 0===a||null===(c=a.data)||void 0===c?void 0:c.total_pages),X(_e);case 5:case"end":return t.stop()}}),t)})))()}),[oe,he,je,e.ID]),Object(a.useEffect)((function(){var e,t;!function e(t){t.length>0&&t.map((function(t){var n;(null===(n=t.replies)||void 0===n?void 0:n.length)>0&&e(t.replies),t.visibleDrawer=!1,t.inputData=""})),R(t)}((null===K||void 0===K||null===(e=K.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.results)||[])}),[K,B]);var we=function(e,t){try{if("MainDrawer"===t)se(t),x(e),me(1);else{se(t);!function t(n,a){n.forEach((function(n){n.replies.length>0&&t(n.replies,a),n.id===a&&(n.inputData=e)})),R(n)}(B,t),s({message:e,id:ce})}}catch(fe){console.log("Some error occured",fe)}},Ne={required:"This field is required!",types:{email:"Email is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},ye=function(){var t=Object(l.a)(o.a.mark((function t(n,a){var r,i,l,d,j,m,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Reach",window.location.hostname),t.prev=1,r=(null===n||void 0===n?void 0:n.user.email)?null===n||void 0===n?void 0:n.user.email:q.get("author_email"),i=(null===n||void 0===n?void 0:n.user.name)?null===n||void 0===n?void 0:n.user.name:q.get("author_name"),(l={}).message="MainDrawer"===ce?O:null===c||void 0===c?void 0:c.message,l.author_name=i,l.author_email=r,l.website=e.website,l.post=e.ID,l.parent=a,_&&(q.set("author_name",null===n||void 0===n?void 0:n.user.name,{maxAge:5e3,domain:window.location.hostname}),q.set("author_email",null===n||void 0===n?void 0:n.user.email,{maxAge:5e3,domain:window.location.hostname})),t.next=14,y(l,e.ID);case 14:return d=t.sent,console.log(d),t.next=18,S(e.ID,je);case 18:return j=t.sent,X(j),R((function(e){return[].concat(Object(u.a)(e),[d.data.data.results])})),x(""),s(""),t.abrupt("return",d);case 26:t.prev=26,t.t0=t.catch(1),ge(null===(m=t.t0.response)||void 0===m||null===(b=m.data)||void 0===b?void 0:b.errors);case 29:case"end":return t.stop()}}),t,null,[[1,26]])})));return function(e,n){return t.apply(this,arguments)}}(),Se=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,s,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={vote:t},e.prev=1,e.next=4,k(n,a);case 4:l=e.sent,le(null===(c=l.data)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.likes),pe(null===(r=l.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.dislikes),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Some error occured",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),ke=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,me(t),e.abrupt("return");case 5:e.prev=5,e.t0=e.catch(0),console.log("Some error occured",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"CommentcompStyles",children:[Object(E.jsxs)("div",{className:"main__container",children:[Object(E.jsx)("div",{className:"comment_nav",children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{className:"active",children:Object(E.jsxs)(p.a,{type:"link",children:[e.commentCount," Comments"]})}),Object(E.jsx)("li",{children:Object(E.jsx)(p.a,{type:"link",onClick:function(){M(!0)},children:"View all articles"})}),Object(E.jsx)("li",{children:Object(E.jsx)(p.a,{type:"link",children:"Dexos Privacy Policy"})})]})}),!e.cannotComment&&!A&&Object(E.jsx)(p.a,{className:"jointhe",type:"button",onClick:function(e){return function(e){try{e.preventDefault(),T(!0)}catch(fe){console.log("Some error occured",fe)}}(e)},children:Object(E.jsx)("a",{className:"join_text",href:"",children:"Join the discussion"})}),e.cannotComment?Object(E.jsx)("div",{className:"cannot_cammet",children:"Comments and reactions for this thread are now closed"}):Object(E.jsx)(z,{setChecked:w,setComments:R,validateMessages:Ne,sendMessage:ye,showDrawer:A,onChange:we,messageMain:O,setMessageMain:x,comments:B,parent:null,id:"MainDrawer",error:fe,setErrorMessage:ge}),B.length>0?Object(E.jsx)("div",{className:"all_post",children:Object(E.jsx)("ul",{className:"post_list",children:function t(n){try{return n.length>0&&n.map((function(n,a){var r;return Object(E.jsxs)("li",{className:n.parent?n.level>3?"":"ci_post":"post",children:[Object(E.jsxs)("div",{className:"post_body",children:[Object(E.jsxs)("div",{className:"comment_header",children:[Object(E.jsxs)("div",{className:"post_byline",children:[Object(E.jsx)("div",{className:"post_username",children:Object(E.jsx)("a",{href:"",target:"_blank",children:null===n||void 0===n?void 0:n.author_name})}),Object(E.jsx)("div",{className:"badge",children:Object(E.jsx)(j.a,{children:"MOD"})})]}),Object(E.jsx)("span",{className:"bullet"}),n.parent_name&&Object(E.jsxs)("div",{className:"post_user",children:[Object(E.jsx)(p.a,{className:"postuser_arrow",type:"primary"}),Object(E.jsx)("span",{children:null===n||void 0===n?void 0:n.parent_name})]}),Object(E.jsx)("div",{className:"post_meta",children:Object(E.jsx)("span",{children:null===n||void 0===n?void 0:n.created_date})})]}),Object(E.jsx)("div",{className:"comment_body",children:Object(E.jsx)("div",{className:"post_comment",children:Object(E.jsx)("p",{children:null===n||void 0===n?void 0:n.message})})}),Object(E.jsxs)("div",{className:"comment_footer",children:[Object(E.jsx)("div",{className:"post_like",children:Object(E.jsxs)("span",{href:"",onClick:function(){return Se(1,n.id)},children:[Object(E.jsx)(m.a,{}),n.likes]})}),Object(E.jsx)("div",{className:"post_dislike",children:Object(E.jsxs)("span",{href:"",onClick:function(){return Se(-1,n.id)},children:[Object(E.jsx)(b.a,{}),n.dislikes]})}),!e.cannotComment&&Object(E.jsxs)("div",{className:"reply_footer",children:[Object(E.jsx)("span",{className:"bullet"}),Object(E.jsx)("span",{className:"reply_text",onClick:function(e){return function(e,t){try{return e.preventDefault(),void function e(t,n){t.forEach((function(t){t.replies.length>0&&e(t.replies,n),t.id===n&&(t.visibleDrawer=!t.visibleDrawer,U({}))})),R(t)}(B,t)}catch(fe){console.log("Some error occured",fe)}}(e,n.id)},children:"Reply"}),Object(E.jsx)("span",{className:"bullet"})]}),Object(E.jsxs)("div",{className:"share_footer",children:[Object(E.jsx)("span",{children:"Share \u203a"}),Object(E.jsxs)("div",{className:"share_hover",children:[Object(E.jsx)(p.a,{className:"sharehover_icon",type:"primary",icon:Object(E.jsx)(v.a,{})}),Object(E.jsx)(p.a,{className:"sharehover_icon",type:"primary",icon:Object(E.jsx)(h.a,{})})]})]})]}),!e.cannotComment&&Q&&Object(E.jsx)(z,{setChecked:w,validateMessages:Ne,sendMessage:ye,onChange:we,message:c,setMessage:s,visibleDrawer:n.visibleDrawer,comments:B,id:n.id,parent:n.id,inputData:n.inputData,error:fe,setErrorMessage:ge})]}),(null===n||void 0===n||null===(r=n.replies)||void 0===r?void 0:r.length)>0&&t(n.replies)]})}))}catch(fe){console.log("Some error occured",fe)}}(B)})}):!e.cannotComment&&Object(E.jsx)("div",{children:"Be the first to comment"})]}),D&&Object(E.jsx)(P,{visible:D,setVisible:M,website:e.website})]}),B.length>0&&Object(E.jsx)(H.a,{defaultCurrent:1,defaultPageSize:10,total:10*ee,onChange:ke,current:je,showSizeChanger:!1}),Object(E.jsx)("div",{className:"FootercompStyles",children:Object(E.jsx)("div",{className:"footer_bottom",children:Object(E.jsxs)("div",{className:"footer_content",children:[Object(E.jsx)("div",{className:"footer_ele",children:Object(E.jsxs)("div",{className:"footer_text subscribe",children:[Object(E.jsx)("span",{className:"footersub_icon",children:Object(E.jsx)(h.a,{})}),Object(E.jsx)("a",{href:"",children:"IPFS"})]})}),Object(E.jsx)("div",{className:"footer_logo",children:"DEXOS"})]})})})]})};var X=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(d.a)(s,2),i=r[0],u=r[1],j=Object(a.useState)(0),m=Object(d.a)(j,2),b=m[0],v=m[1],h=document.getElementById("comment"),p={title:h.getAttribute("title"),link:h.getAttribute("link"),website:h.getAttribute("website")};return Object(a.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var t,n,a,s,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(p);case 2:l=e.sent,c(null===l||void 0===l||null===(t=l.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.id),u(null===l||void 0===l||null===(a=l.data)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.is_closed),v(null===l||void 0===l||null===(r=l.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.comments_count);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(K,{ID:n,website:p.website,cannotComment:i,commentCount:b})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(X,{})}),document.getElementById("comment-root")),Y()}},[[231,1,2]]]);
//# sourceMappingURL=main.efb2b492.chunk.js.map