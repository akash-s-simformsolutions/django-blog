(this["webpackJsonpdexos-app"]=this["webpackJsonpdexos-app"]||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},139:function(e,t,a){},146:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=(a(129),a(22)),s=a.n(l),i=a(29),m=a(16),u=(a(130),a(131),a(244),a(121)),d=(a(85),a(42)),v=(a(86),a(27)),p=(a(137),a(123)),f=a(44),b=a(248),E=a(249),h=a(250),g=a(251),_=(a(139),a(140),a(122)),j=(a(142),a(116)),O=(a(144),a(93)),y=(a(146),a(38)),N=a.n(y),w="https://demo-dexos.simform.solutions/api/";N.a.defaults.headers.common.Authorization="Api-Key 55kNqOhs.83VxNAzwkPR5MfPgIxMPn0gNGlR5wTUy";var k=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=w+"v1/posts/".concat(t,"/?page=").concat(a),e.next=4,N.a.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w+"v1/post/",e.next=4,N.a.post("https://demo-dexos.simform.solutions/api/v1/post/",t);case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return new Promise(function(){var t=Object(i.a)(s.a.mark((function t(a,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("https://demo-dexos.simform.solutions/api/v1/comment/",e);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}())},x=function(e,t){try{if(e>0){if(1===t){var a=w+"v1/comments/".concat(e,"/");return N.a.get(a)}var n=w+"v1/comments/".concat(e,"/?page=").concat(t);return N.a.get(n)}}catch(r){console.error(r)}},D=function(e,t){try{var a=w+"v1/comment/".concat(e,"/");return N.a.put(a,t)}catch(n){console.error(n)}},M=function(e){try{var t=w+"v1/top-comments/".concat(e,"/");return N.a.get(t)}catch(a){console.error(a)}},I=a(45),F=O.a.TabPane,L=r.a.createElement(I.a,{style:{fontSize:24},spin:!0});var P=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),u=Object(m.a)(l,2),d=u[0],v=u[1],p=Object(n.useState)(1),h=Object(m.a)(p,2),g=h[0],y=h[1],N=Object(n.useState)(!1),w=Object(m.a)(N,2),S=w[0],C=w[1];function x(t){t.target.scrollHeight-t.target.scrollTop===t.target.clientHeight&&(g&&function(){var t=Object(i.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.website,g);case 2:return r=t.sent,o((function(e){var t,a;return[].concat(Object(f.a)(e),Object(f.a)(null===r||void 0===r||null===(t=r.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.results))})),y(null===r||void 0===r||null===(a=r.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.next_page_number),t.abrupt("return");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()())}return Object(n.useEffect)((function(){Object(i.a)(s.a.mark((function t(){var a,n,r,c,l,i,m,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.next=3,k(e.website,1);case 3:return m=t.sent,o(null===m||void 0===m||null===(a=m.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.results),y(null===m||void 0===m||null===(r=m.data)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.next_page_number),t.next=8,M(e.website);case 8:u=t.sent,v(null===u||void 0===u||null===(l=u.data)||void 0===l||null===(i=l.data)||void 0===i?void 0:i.results),C(!1);case 11:case"end":return t.stop()}}),t)})))()}),[]),Object(n.useEffect)((function(){return window.addEventListener("scroll",x),function(){return window.removeEventListener("scroll",x)}}),[]),r.a.createElement(_.a,{placement:"right",closable:!0,onClose:function(){try{e.setVisible(!1)}catch(t){console.log("Some error occured",t)}},visible:e.visible,width:630},r.a.createElement("div",{className:"Header_drawer"},e.website),r.a.createElement(O.a,{defaultActiveKey:"1"},r.a.createElement(F,{tab:"Latest Discussions",key:"1"},r.a.createElement("div",{className:"post-main",onScroll:function(e){return x(e)}},S?r.a.createElement(j.a,{indicator:L}):(null===c||void 0===c?void 0:c.length)>0&&c.map((function(e,t){return r.a.createElement("div",{className:"post-list"},r.a.createElement("div",{className:"post-list__info"},r.a.createElement("p",{className:"post-time"},"Recent activity ",null===e||void 0===e?void 0:e.updated_date),r.a.createElement("h2",{onClick:function(){return function(e){try{window.open(e)}catch(t){console.log("Some error occured",t)}}(null===e||void 0===e?void 0:e.link)}},null===e||void 0===e?void 0:e.title),r.a.createElement("a",{onClick:function(){return function(e){try{window.open(e)}catch(t){console.log("Some error occured",t)}}(null===e||void 0===e?void 0:e.link)}},null===e||void 0===e?void 0:e.comments_count," Comments")))})))),r.a.createElement(F,{tab:"Top Comments",key:"2"},r.a.createElement("div",{className:"post_com"},(null===d||void 0===d?void 0:d.length)>0&&d.map((function(e,t){return r.a.createElement("div",{className:"top_comments_post"},r.a.createElement("div",{className:"post_body"},r.a.createElement("div",{className:"comment_header"},r.a.createElement("div",{className:"post_byline"},r.a.createElement("div",{className:"post_username"},r.a.createElement("a",{href:"",target:"_blank"},e.author_name))),r.a.createElement("div",{className:"post_meta"},r.a.createElement("span",null,e.created_date))),r.a.createElement("div",{className:"comment_body"},r.a.createElement("div",{className:"post_comment"},r.a.createElement("p",null,e.message))),r.a.createElement("div",{className:"comment_footer"},r.a.createElement("div",{className:"post_like"},r.a.createElement("a",{href:""},r.a.createElement(b.a,null),e.likes)),r.a.createElement("div",{className:"post_dislike"},r.a.createElement("a",{href:""},r.a.createElement(E.a,null),e.dislikes)))))}))))))},A=a(81),T=(a(172),a(124)),R=(a(245),a(62)),V=(a(176),a(83)),z=a(118),B=a.n(z);var H=new A.a,J=V.a.TextArea,$=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),i=s[0],u=s[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),E=b[0],h=b[1],g=Object(n.useState)(""),_=Object(m.a)(g,2),j=_[0],O=_[1],y=Object(n.useState)(""),N=Object(m.a)(y,2),w=N[0],k=N[1],S=Object(n.useState)([]),C=Object(m.a)(S,2),x=C[0],D=C[1],M=Object(n.useRef)(),I=H.get("author_name"),F=H.get("author_email"),L=R.a.useForm(),P=Object(m.a)(L,1)[0],A=Object(n.useRef)();!function(e,t){var a=function(a){try{e.current&&!e.current.contains(a.target)&&t()}catch(n){console.log("Some error occured",n)}};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))}(A,(function(){u(!1),o(!1)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{form:P,validateMessages:e.validateMessages,onFinish:function(t){try{if(t.user.name&&t.user.email)return O(t.user.name),h(t.user.email),void e.sendMessage(t,e.parent);P.setFieldsValue({user:{name:I,email:F}}),O(I),h(F);var a={user:{name:I,email:F}};return void e.sendMessage(a,e.parent)}catch(n){console.log("Some error occured",n)}}},(e.showDrawer||e.visibleDrawer)&&r.a.createElement("div",{className:"avtar_massemmo"},r.a.createElement("div",{className:"avatar_massage"},r.a.createElement("div",{className:"massage_textarea"},r.a.createElement(J,{id:"input",className:"mass_text",placeholder:"Join the discussion..",rows:4,value:e.messageMain||e.inputData,onChange:function(t){e.setErrorMessage("");try{"MainDrawer"===e.id&&(k(t.target.value),e.onChange(t.target.value,e.id)),function a(n){n.map((function(n){var r;n.id===e.id&&(k(t.target.value),e.onChange(t.target.value,n.id)),(null===n||void 0===n||null===(r=n.replies)||void 0===r?void 0:r.length)>0&&a(n.replies)}))}(e.comments),D("")}catch(a){console.log("Some error occured",a)}},ref:M}),r.a.createElement("div",{className:"commentemoji_btn",ref:A,onClick:function(){u(!0)}},r.a.createElement("div",{className:"emojiundo_btn"},r.a.createElement(v.a,{onClick:function(e){try{e.preventDefault(),o(!c)}catch(t){console.log("Some error occured",t)}},className:"emo_button",type:"primary"},"\ud83d\ude00"),i&&c&&r.a.createElement(B.a,{onEmojiClick:function(t,a){"MainDrawer"===e.id?e.messageMain?e.onChange(e.messageMain+" "+a.emoji+" ",e.id):e.onChange(" "+a.emoji+" ",e.id):e.message.message?e.onChange(e.message.message+" "+a.emoji+" ",e.parent):e.onChange(" "+a.emoji+" ",e.parent)},disableSearchBar:!0}),r.a.createElement(d.a,{placement:"topLeft",title:"Undo",color:"grey"},r.a.createElement(v.a,{className:"emo_button redo",type:"primary",onClick:function(){try{var t=w.split(" "),a=t.pop();D((function(e){return[].concat(Object(f.a)(e),[a])})),e.onChange(t.join(" "),e.id),k(t.join(" "))}catch(n){console.log("Some error occured",n)}}})),r.a.createElement(d.a,{placement:"topLeft",title:"Redo",color:"grey"},r.a.createElement(v.a,{className:"emo_button undo",type:"primary",onClick:function(t){try{var a=x.length>0&&x.pop(),n=w.concat(" "+a);a&&e.onChange(n,e.id),a&&k(n)}catch(r){console.log("Some error occured",r)}}}))),r.a.createElement("div",{className:"post_comment"},r.a.createElement(v.a,{className:"proceed_button",type:"primary",htmlType:"submit"},"Post"))))),e.error&&r.a.createElement("div",{style:{color:"#FF0000"}},e.error),r.a.createElement("div",{className:"loginwith_singup"},r.a.createElement("div",{className:"username_emai"},r.a.createElement("div",{className:"formitem_name"},r.a.createElement(R.a.Item,{name:["user","name"]},r.a.createElement(V.a,{placeholder:"Name",defaultValue:I||"",value:j,maxLength:30})),r.a.createElement(R.a.Item,{rules:[{type:"email"}],name:["user","email"]},r.a.createElement(V.a,{type:"email",placeholder:"Email",defaultValue:F||"",value:E}))),r.a.createElement("div",{className:"privacy_policy"},r.a.createElement("p",{className:"privacy_ele"},"*Your email address will not be published")),r.a.createElement("div",{className:"guest_checkbox"},r.a.createElement(T.a,{onChange:function(){e.setChecked(!0)}},"Save my name and email in this browser for the next time I comment.")))))))},q=new A.a;var K=function(e){var t=Object(n.useState)({message:"",id:0}),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),_=Object(m.a)(l,2),j=_[0],O=_[1],y=Object(n.useState)(!1),N=Object(m.a)(y,2),w=N[0],k=N[1],S=Object(n.useState)(!1),M=Object(m.a)(S,2),I=M[0],F=M[1],L=Object(n.useState)(!1),A=Object(m.a)(L,2),T=A[0],R=A[1],V=Object(n.useState)([]),z=Object(m.a)(V,2),B=z[0],H=z[1],J=Object(n.useState)([]),K=Object(m.a)(J,2),U=K[0],G=K[1],X=Object(n.useState)({}),Y=Object(m.a)(X,2),Q=Y[0],W=Y[1],Z=Object(n.useState)(),ee=Object(m.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(m.a)(ne,2),ce=re[0],oe=re[1],le=Object(n.useState)(0),se=Object(m.a)(le,2),ie=se[0],me=se[1],ue=Object(n.useState)(1),de=Object(m.a)(ue,2),ve=de[0],pe=de[1],fe=Object(n.useState)(0),be=Object(m.a)(fe,2),Ee=be[0],he=be[1],ge=Object(n.useState)(""),_e=Object(m.a)(ge,2),je=_e[0],Oe=_e[1],ye={};Object(n.useEffect)((function(){Object(i.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e.ID,ve);case 3:ye=t.sent,ae(null===(a=ye)||void 0===a||null===(n=a.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.total_pages),G(ye),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[ie,Ee,ve,e.ID]),Object(n.useEffect)((function(){var e,t;!function e(t){t.length>0&&t.map((function(t){var a;(null===(a=t.replies)||void 0===a?void 0:a.length)>0&&e(t.replies),t.visibleDrawer=!1,t.inputData=""})),H(t)}((null===U||void 0===U||null===(e=U.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.results)||[])}),[U,B]);var Ne=function(e,t){console.log("onchange",e);try{if("MainDrawer"===t)oe(t),O(e),pe(1);else{oe(t),console.log("inputData",e);!function t(a,n){a.forEach((function(r){r.replies.length>0&&t(r.replies,n),r.id===n&&(console.log("inputData",e),r.inputData=e,H(a))})),console.log(a,95),H(a)}(B,t),o({message:e,id:ce})}}catch(je){console.log("Some error occured",je)}},we={required:"This field is required!",types:{email:"Email is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},ke=function(){var t=Object(i.a)(s.a.mark((function t(a,n){var r,l,i,m,u,d,v;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(null===a||void 0===a?void 0:a.user.email)?null===a||void 0===a?void 0:a.user.email:q.get("author_email"),l=(null===a||void 0===a?void 0:a.user.name)?null===a||void 0===a?void 0:a.user.name:q.get("author_name"),(i={}).message="MainDrawer"===ce?j:null===c||void 0===c?void 0:c.message,i.author_name=l,i.author_email=r,i.website=e.website,i.post=e.ID,i.parent=n,w&&(q.set("author_name",null===a||void 0===a?void 0:a.user.name,{maxAge:5e3,domain:window.location.hostname}),q.set("author_email",null===a||void 0===a?void 0:a.user.email,{maxAge:5e3,domain:window.location.hostname})),console.log(i),t.next=14,C(i,e.ID);case 14:return m=t.sent,t.next=17,x(e.ID,ve);case 17:return u=t.sent,G(u),H((function(e){return[].concat(Object(f.a)(e),[m.data.data.results])})),O(""),o(""),t.abrupt("return",m);case 25:t.prev=25,t.t0=t.catch(0),Oe(null===(d=t.t0.response)||void 0===d||null===(v=d.data)||void 0===v?void 0:v.errors);case 28:case"end":return t.stop()}}),t,null,[[0,25]])})));return function(e,a){return t.apply(this,arguments)}}(),Se=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r,c,o,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={vote:t},e.prev=1,e.next=4,D(a,n);case 4:i=e.sent,me(null===(r=i.data)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.likes),he(null===(o=i.data)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.dislikes),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Some error occured",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,pe(t),e.abrupt("return");case 5:e.prev=5,e.t0=e.catch(0),console.log("Some error occured",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();function xe(e){return{__html:e}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CommentcompStyles"},r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"comment_nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"active"},r.a.createElement(v.a,{type:"link"},e.commentCount," Comments")),r.a.createElement("li",null,r.a.createElement(v.a,{type:"link",onClick:function(){F(!0)}},"View all articles")),r.a.createElement("li",null,r.a.createElement(v.a,{type:"link"},"Dexos Privacy Policy")))),!e.cannotComment&&!T&&r.a.createElement(v.a,{className:"jointhe",type:"button",onClick:function(e){return function(e){try{e.preventDefault(),R(!0)}catch(je){console.log("Some error occured",je)}}(e)}},r.a.createElement("a",{className:"join_text",href:""},"Join the discussion")),e.cannotComment?r.a.createElement("div",{className:"cannot_cammet"},"Comments and reactions for this thread are now closed"):r.a.createElement($,{setChecked:k,setComments:H,validateMessages:we,sendMessage:ke,showDrawer:T,onChange:Ne,messageMain:j,setMessageMain:O,comments:B,parent:null,id:"MainDrawer",error:je,setErrorMessage:Oe}),B.length>0?r.a.createElement("div",{className:"all_post"},r.a.createElement("ul",{className:"post_list"},function t(a){try{return a.length>0&&a.map((function(a,n){var l;return r.a.createElement("li",{className:a.parent?a.level>3?"":"ci_post":"post"},r.a.createElement("div",{className:"post_body"},r.a.createElement("div",{className:"comment_header"},r.a.createElement("div",{className:"post_byline"},r.a.createElement("div",{className:"post_username"},r.a.createElement("a",{href:"",target:"_blank"},null===a||void 0===a?void 0:a.author_name)),r.a.createElement("div",{className:"badge"},r.a.createElement(p.a,null,"MOD"))),r.a.createElement("span",{className:"bullet"}),a.parent_name&&r.a.createElement("div",{className:"post_user"},r.a.createElement(v.a,{className:"postuser_arrow",type:"primary"}),r.a.createElement("span",null,null===a||void 0===a?void 0:a.parent_name)),r.a.createElement("div",{className:"post_meta"},r.a.createElement("span",null,null===a||void 0===a?void 0:a.created_date))),r.a.createElement("div",{className:"comment_body"},r.a.createElement("div",{className:"post_comment"},r.a.createElement("p",{dangerouslySetInnerHTML:xe(a.message)}))),r.a.createElement("div",{className:"comment_footer"},r.a.createElement("div",{className:"post_like"},r.a.createElement(d.a,{title:"Like",color:"grey"},r.a.createElement("span",{href:"",onClick:function(){return Se(1,a.id)}},r.a.createElement(b.a,null),a.likes))),r.a.createElement("div",{className:"post_dislike"},r.a.createElement(d.a,{title:"Dislike",color:"grey"},r.a.createElement("span",{href:"",onClick:function(){return Se(-1,a.id)}},r.a.createElement(E.a,null),a.dislikes))),!e.cannotComment&&r.a.createElement("div",{className:"reply_footer"},r.a.createElement("span",{className:"bullet"}),r.a.createElement("span",{className:"reply_text",onClick:function(e){return function(e,t){try{return e.preventDefault(),void function e(t,a){t.forEach((function(t){t.replies.length>0&&e(t.replies,a),t.id===a&&(t.visibleDrawer=!t.visibleDrawer,W({}))})),H(t)}(B,t)}catch(je){console.log("Some error occured",je)}}(e,a.id)}},"Reply"),r.a.createElement("span",{className:"bullet"})),r.a.createElement("div",{className:"share_footer"},r.a.createElement("span",null,"Share \u203a"),r.a.createElement("div",{className:"share_hover"},r.a.createElement(v.a,{className:"sharehover_icon",type:"primary",icon:r.a.createElement(h.a,null)}),r.a.createElement(v.a,{className:"sharehover_icon",type:"primary",icon:r.a.createElement(g.a,null)})))),!e.cannotComment&&Q&&r.a.createElement($,{setChecked:k,validateMessages:we,sendMessage:ke,onChange:Ne,message:c,setMessage:o,visibleDrawer:a.visibleDrawer,comments:B,id:a.id,parent:a.id,inputData:a.inputData,error:je,setErrorMessage:Oe})),(null===a||void 0===a||null===(l=a.replies)||void 0===l?void 0:l.length)>0&&t(a.replies))}))}catch(je){console.log("Some error occured",je)}}(B))):!e.cannotComment&&r.a.createElement("div",null,"Be the first to comment")),I&&r.a.createElement(P,{visible:I,setVisible:F,website:e.website})),B.length>0&&r.a.createElement(u.a,{defaultCurrent:1,defaultPageSize:10,total:10*te,onChange:Ce,current:ve,showSizeChanger:!1}),r.a.createElement("div",{className:"FootercompStyles"},r.a.createElement("div",{className:"footer_bottom"},r.a.createElement("div",{className:"footer_content"},r.a.createElement("div",{className:"footer_ele"},r.a.createElement("div",{className:"footer_text subscribe"},r.a.createElement("span",{className:"footersub_icon"},r.a.createElement(g.a,null)),r.a.createElement("a",{href:""},"IPFS"))),r.a.createElement("div",{className:"footer_logo"},"DEXOS")))))};var U=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(m.a)(o,2),u=l[0],d=l[1],v=Object(n.useState)(0),p=Object(m.a)(v,2),f=p[0],b=p[1],E=document.getElementById("comment"),h={title:E.getAttribute("title"),link:E.getAttribute("link"),website:E.getAttribute("website")};return Object(n.useEffect)((function(){try{Object(i.a)(s.a.mark((function e(){var t,a,n,r,o,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(h);case 2:i=e.sent,c(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id),d(null===i||void 0===i||null===(n=i.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.is_closed),b(null===i||void 0===i||null===(o=i.data)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.comments_count);case 6:case"end":return e.stop()}}),e)})))()}catch(e){console.log(e)}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(K,{ID:a,website:h.website,cannotComment:u,commentCount:f}))},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,252)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(r.a.createElement(U,null),document.getElementById("comment-root")),G()}},[[243,1,2]]]);
//# sourceMappingURL=main.chunk.js.map