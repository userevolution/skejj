(this.webpackJsonpskejj=this.webpackJsonpskejj||[]).push([[0],{327:function(e,t,n){},359:function(e,t){},367:function(e,t){},387:function(e,t){},388:function(e,t){},585:function(e,t,n){},590:function(e,t,n){},591:function(e,t,n){},601:function(e,t){},624:function(e,t){},626:function(e,t){},692:function(e,t){},694:function(e,t){},703:function(e,t){},705:function(e,t){},730:function(e,t){},736:function(e,t){},749:function(e,t){},829:function(e,t,n){},830:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(64),r=n.n(s),i=(n(327),n(1)),o=n.n(i),l=n(75),u=n(53),j=n(315),b=n.n(j),d=n(836),h=n(837),p=n(838),x=n(839),O=(n(585),n(9)),f=function(e){var t=e.showModal,n=e.toggleUploadModal;return t?Object(O.jsxs)(p.a.Dialog,{className:"upload_modal",children:[Object(O.jsx)(p.a.Header,{closeButton:!0,onHide:n,children:Object(O.jsx)(p.a.Title,{children:"Upload File to IPFS!"})}),Object(O.jsx)(p.a.Body,{children:Object(O.jsx)(x.a,{children:Object(O.jsxs)(x.a.Group,{children:[Object(O.jsx)(x.a.Label,{className:"input_label",children:"File Name:"}),Object(O.jsx)(x.a.Control,{type:"text",placeholder:"File Name"}),Object(O.jsx)(x.a.Label,{className:"input_label",children:"File Type:"}),Object(O.jsx)(x.a.Check,{inline:!0,label:"Video",type:"checkbox",id:"check_input_video"}),Object(O.jsx)(x.a.Check,{inline:!0,label:"Audio",type:"checkbox",id:"check_input_audio"}),Object(O.jsx)(x.a.Check,{inline:!0,label:"Image",type:"checkbox",id:"check_input_image"}),Object(O.jsx)(x.a.Label,{className:"input_label",children:"File To Upload:"}),Object(O.jsxs)("label",{style:{display:"flex"},children:[Object(O.jsx)(x.a.File,{style:{display:"none"},label:""}),Object(O.jsx)("button",{onClick:function(e){return e.preventDefault()},role:"button",className:"select_file",children:" SELECT FILE "}),Object(O.jsxs)("div",{className:"file_input_name",children:[" ","NO FILE SELECTED"," "]})]})]})})}),Object(O.jsxs)(p.a.Footer,{children:[Object(O.jsx)("button",{onClick:n,className:"close_btn",children:"Close"}),Object(O.jsx)("button",{className:"secondary",children:"Upload"})]})]}):""},m=n(834),w=n(317),v=(n(590),function(e){var t=e.searchIPFS,n=e.toggleUploadModal,a=Object(c.useState)(""),s=Object(u.a)(a,2),r=s[0],i=s[1];return Object(O.jsxs)("nav",{className:"nav",children:[Object(O.jsx)("h1",{children:" SKEJJ "}),Object(O.jsx)("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),Object(O.jsxs)(m.a,{className:"search_box",inline:!0,children:[Object(O.jsx)(w.a,{onChange:function(e){return i(e.target.value)},value:r,type:"text",className:"search_input",placeholder:"Search IPFS..."}),Object(O.jsx)(m.a.Append,{children:Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),i(""),t(r)},className:"search_btn",variant:"outline-primary",children:"SEARCH"})})]}),Object(O.jsx)("label",{className:"menu-icon",htmlFor:"menu-btn",children:Object(O.jsx)("span",{className:"nav-icon"})}),Object(O.jsxs)("ul",{className:"menu",children:[Object(O.jsx)("li",{children:Object(O.jsx)("button",{children:"Images"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{children:"Video"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{children:"Music"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:n,children:"UPLOAD"})})]})]})}),k=(n(591),n(318)),N=n.n(k),g=n(840),y=function(e){var t=e.userAccount;return Object(O.jsx)("div",{className:"eth_account",children:Object(O.jsx)(g.a,{variant:t?"light":"danger",children:t?Object(O.jsxs)("span",{className:"account_details",children:["ETH ACCOUNT:",Object(O.jsx)(N.a,{size:"15",string:t}),t]}):Object(O.jsxs)("span",{children:["Not connected to ETH blockchain try",Object(O.jsx)("a",{href:"https://metamask.io",children:" Metamask "})]})})})},_=n(173),C=n.n(_),F=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return window.web3=new C.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:e.next=11;break;case 6:if(!window.web3){e.next=10;break}window.web3=new C.a(window.web3.currentProvider),e.next=11;break;case 10:return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.next=3,t.eth.getAccounts();case 3:return n=e.sent,c=Object(u.a)(n,1),a=c[0],e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(828),n(829),b()({host:"ipfs.infura.io",port:5001,protocol:"https"});var A=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(u.a)(s,2),i=(r[0],r[1]),j=Object(c.useState)(""),b=Object(u.a)(j,2),p=(b[0],b[1]),x=Object(c.useState)({}),m=Object(u.a)(x,2),w=(m[0],m[1],Object(c.useState)(!0)),k=Object(u.a)(w,2),N=k[0],g=k[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.next=4,S();case 4:return t=e.sent,e.next=7,E();case 7:return n=e.sent,e.next=10,T();case 10:c=e.sent,a(t),i(n),i(c);case 14:case"end":return e.stop()}}),e)}))),[]);var _=function(){g(!N)};return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(v,{searchIPFS:function(e){p(String(e).trim())},toggleUploadModal:_})}),Object(O.jsx)(f,{showModal:N,toggleUploadModal:_}),Object(O.jsxs)("main",{children:[Object(O.jsx)("div",{className:N?"modal_overlay":""}),Object(O.jsx)(y,{userAccount:n}),Object(O.jsx)(d.a,{fluid:!0,children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)("h1",{children:"Videos"}),Object(O.jsx)("p",{children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."})]})}),Object(O.jsx)(d.a,{fluid:!0,children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)("h1",{children:"Photos"}),Object(O.jsx)("p",{children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."})]})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,841)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),I()}},[[830,1,2]]]);
//# sourceMappingURL=main.5c7afde2.chunk.js.map