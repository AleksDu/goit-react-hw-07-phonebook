(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={title:"App_title__QP8sz",close:"App_close__1F-9X"}},20:function(t,e,n){t.exports={item:"ContactItem_item__2LSJt",name:"ContactItem_name__1shQG",number:"ContactItem_number__BBoUS"}},24:function(t,e,n){t.exports={label:"Filter_label__3wzGa",input:"Filter_input__2cWrt"}},34:function(t,e,n){t.exports={container:"Container_container__1-eUU"}},36:function(t,e,n){t.exports={list:"ContactList_list__3T6te",item:"ContactList_item__2aW94",button:"ContactList_button__1Z-kc"}},7:function(t,e,n){t.exports={form:"ContactForm_form__1ciRD",label:"ContactForm_label__XZQAr",input:"ContactForm_input__2i1LB",button__wrapper:"ContactForm_button__wrapper__1SJPa",button:"ContactForm_button__1BN2W"}},79:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=n(34),u=n.n(i),l=n(1),s=function(t){var e=t.children;return Object(l.jsx)("div",{className:u.a.container,children:e})};s.defaultProps={children:[]};var b=s,p=n(25),f=n(6),j=n(16),d=function(t){return t.contacts.items},m=function(t){return t.contacts.filter},O=Object(j.a)([d,m],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),h=n(8),v=n.n(h),C=n(19),_=n(11),x=n.n(_),w=n(2),g=Object(w.b)("contact/fetchContactsRequest"),y=Object(w.b)("contacts/fetchContactsSuccess"),k=Object(w.b)("contacts/fetchContactsError"),N=Object(w.b)("contacts/addContactRequest"),F=Object(w.b)("contacts/addContactSuccess"),S=Object(w.b)("contacts/addContactError"),A=Object(w.b)("contacts/deleteContactRequest"),E=Object(w.b)("contacts/deleteContactSuccess"),P=Object(w.b)("contacts/deleteContactError"),Z=Object(w.b)("contact/changeFilter");x.a.get("https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts");var z={fetchContacts:function(){return function(){var t=Object(C.a)(v.a.mark((function t(e){var n,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(g()),t.prev=1,t.next=4,x.a.get("https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts");case 4:n=t.sent,a=n.data,e(y(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(k(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(C.a)(v.a.mark((function n(a){var c,r,o;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},a(N()),n.prev=2,n.next=5,x.a.post("https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts",c);case 5:r=n.sent,o=r.data,a(F(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a(S(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(C.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(A()),e.prev=1,e.next=4,x.a.delete("https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts/".concat(t));case 4:n(E(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(P(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},B=z,I=n(23),L=n.n(I),R=n(7),D=n.n(R);function J(){var t=Object(f.c)(d),e=Object(f.b)(),n=L.a.generate(),c=L.a.generate(),r=Object(a.useState)(""),o=Object(p.a)(r,2),i=o[0],u=o[1],s=Object(a.useState)(""),b=Object(p.a)(s,2),j=b[0],m=b[1],O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":u(a);break;case"number":m(a);break;default:return}},h=function(){u(""),m("")};return Object(l.jsxs)("form",{className:D.a.form,onSubmit:function(n){if(n.preventDefault(),""!==i){if(""===j&&alert("Put number, please"),t.find((function(t){return t.name===i})))return alert("".concat(i," is already in contacts!\ud83d\ude44")),void h();e(B.addContact(i,j)),h()}else alert("Put name, please")},children:[Object(l.jsxs)("label",{className:D.a.label,htmlFor:n,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Contact name","aria-label":"input to you name",className:D.a.input,value:i,onChange:O,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",id:n})]}),Object(l.jsxs)("label",{className:D.a.label,htmlFor:c,children:["Number",Object(l.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number","aria-label":"input to you phone number",className:D.a.input,value:j,onChange:O,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:c})]}),Object(l.jsx)("div",{className:D.a.button__wrapper,children:Object(l.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})})]})}var M=n(24),q=n.n(M);var Q,T,U=function(){var t=Object(f.b)(),e=Object(f.c)(m);return Object(l.jsxs)("label",{className:q.a.label,children:["Find contacts by name",Object(l.jsx)("input",{type:"text",placeholder:"Find?",className:q.a.input,value:e,onChange:function(e){return t(Z(e.target.value))}})]})},W=n(36),G=n.n(W),H=["title","titleId"];function X(){return X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},X.apply(this,arguments)}function $(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function K(t,e){var n=t.title,c=t.titleId,r=$(t,H);return a.createElement("svg",X({width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,Q||(Q=a.createElement("path",{d:"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z",fill:"black"})),T||(T=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",fill:"black"})))}var V=a.forwardRef(K),Y=(n.p,n(20)),tt=n.n(Y),et=function(t){var e=t.contactName,n=t.contactNumber,a=t.onClickDeleteContact;return Object(l.jsxs)("li",{className:tt.a.item,children:[Object(l.jsx)("span",{className:tt.a.name,children:e}),Object(l.jsx)("a",{href:"tel:".concat(n),className:tt.a.number,children:n}),Object(l.jsx)("button",{onClick:a,"aria-label":"Delete contact",children:Object(l.jsx)(V,{width:"20px",height:"20px",fill:"#a7a1a1"})})]})};function nt(){var t=Object(f.b)();Object(a.useEffect)((function(){t(B.fetchContacts())}),[t]);var e=Object(f.c)(O);return Object(l.jsx)("ul",{className:G.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(l.jsx)(et,{contactName:a,contactNumber:c,onClickDeleteContact:function(){return function(e){return t(B.deleteContact(e))}(n)}},n)}))})}var at=n(18),ct=n.n(at);var rt,ot,it=function(){var t=Object(f.c)(O).length;return Object(l.jsxs)(b,{children:[Object(l.jsx)("h1",{className:ct.a.title,children:"Phonebook"}),Object(l.jsx)(J,{}),Object(l.jsx)("h2",{className:ct.a.title,children:"Contacts"}),Object(l.jsxs)("p",{children:["\u0412\u0441\u0435\u0433\u043e:",t]}),Object(l.jsx)(U,{}),Object(l.jsx)(nt,{})]})},ut=n(4),lt=n(38),st=n(3),bt=Object(w.c)([],(rt={},Object(ut.a)(rt,y,(function(t,e){return e.payload})),Object(ut.a)(rt,F,(function(t,e){var n=e.payload;return[].concat(Object(lt.a)(t),[n])})),Object(ut.a)(rt,E,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),rt)),pt=Object(w.c)("",Object(ut.a)({},Z,(function(t,e){return e.payload}))),ft=Object(w.c)(!1,(ot={},Object(ut.a)(ot,g,(function(){return!0})),Object(ut.a)(ot,y,(function(){return!1})),Object(ut.a)(ot,k,(function(){return!1})),Object(ut.a)(ot,N,(function(){return!0})),Object(ut.a)(ot,F,(function(){return!1})),Object(ut.a)(ot,S,(function(){return!1})),Object(ut.a)(ot,A,(function(){return!0})),Object(ut.a)(ot,E,(function(){return!1})),Object(ut.a)(ot,P,(function(){return!1})),ot)),jt=Object(st.b)({items:bt,filter:pt,loading:ft}),dt=n(37),mt=n.n(dt),Ot=n(9),ht=Object(w.a)({reducer:{contacts:jt},middleware:function(t){return t({serializableCheck:{ignoredActions:[Ot.a,Ot.f,Ot.b,Ot.c,Ot.d,Ot.e]}}).concat(mt.a)},devTools:!1});n(78);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f.a,{store:ht,children:Object(l.jsx)(it,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.8f2b328c.chunk.js.map