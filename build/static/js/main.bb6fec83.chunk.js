(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},2:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=(n(18),n(13)),l=n(4),o=n(5),u=n(7),b=n(6),h=n(11),m=n.n(h),d=n(0),j=function(e){var t=e.title;return Object(d.jsx)("h2",{className:m.a.title,children:t})},f=n(12),p=n(2),O=n.n(p),x=n(22),C=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.addContact)({id:Object(x.a)(),name:e.state.name,number:e.state.number}),e.setState({name:"",number:""})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(d.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:O.a.label,children:["Name",Object(d.jsx)("input",{type:"text",value:t,name:"name",onChange:this.handleChange,placeholder:"Enter your full name",className:O.a.input,required:!0})]}),Object(d.jsxs)("label",{className:O.a.label,children:["Number",Object(d.jsx)("input",{type:"text",value:n,name:"number",onChange:this.handleChange,placeholder:"xxx-xx-xx",className:O.a.input,required:!0})]}),Object(d.jsx)("input",{type:"submit",value:"Add contact",className:O.a.button})]})}}]),n}(a.Component),v=n(3),N=n.n(v),g=function(e){var t=e.searchContact,n=e.deleteContact;return Object(d.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(d.jsxs)("li",{className:N.a.item,children:[Object(d.jsxs)("p",{className:N.a.contact,children:[" ","- ",a,": ",c]}),Object(d.jsx)("button",{type:"button",className:N.a.btn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},y=n(9),S=n.n(y),w=function(e){var t=e.filter,n=e.searchContact;return Object(d.jsxs)("label",{className:S.a.label,children:[" ","Find contacts by name",Object(d.jsx)("input",{className:S.a.input,onChange:function(e){return n(e.target.value)},value:t})]})},k=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleNewContact=function(t){var n=e.state.contacts;n.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):(n=[].concat(Object(s.a)(n),[t]),e.setState({contacts:n}))},e.handleChange=function(t){var n=t.target.value;e.setState({title:n})},e.handleFilter=function(t){e.setState({filter:t})},e.handleContactSearch=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.filter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{title:"Phonebook"}),Object(d.jsx)(C,{addContact:this.handleNewContact}),Object(d.jsx)(j,{title:"Contacts"}),Object(d.jsx)(w,{searchContact:this.handleFilter,value:e}),Object(d.jsx)(g,{searchContact:this.handleContactSearch(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},3:function(e,t,n){},9:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.bb6fec83.chunk.js.map