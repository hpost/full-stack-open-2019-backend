(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(2),l=t(3),i=t.n(l),m="/api/persons",f=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},s=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{onChange:t,value:n}))},g=function(e){var n=e.onSubmit,t=e.nameValue,a=e.numberValue,u=e.onNameChange,o=e.onNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:u,value:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:o,value:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.persons,t=e.onDelete;return n.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))}))},p=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},E=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},j=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),i=l[0],m=l[1],j=Object(a.useState)(""),y=Object(c.a)(j,2),O=y[0],S=y[1],w=Object(a.useState)(""),C=Object(c.a)(w,2),k=C[0],D=C[1],N=Object(a.useState)(null),V=Object(c.a)(N,2),B=V[0],I=V[1],R=Object(a.useState)(null),z=Object(c.a)(R,2),A=z[0],J=z[1];Object(a.useEffect)((function(){f().then((function(e){return u(e)}))}),[]);var L=function(e){I(e),setTimeout((function(){return I(null)}),3e3)},T=function(e){J(e),setTimeout((function(){return J(null)}),3e3)},x=k.length>0?t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:B}),r.a.createElement(E,{message:A}),r.a.createElement(h,{value:k,onChange:function(e){return D(e.target.value)}}),r.a.createElement("h3",null,"Add entry"),r.a.createElement(g,{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===i}))){if(window.confirm("".concat(i," is already added to phonebook. Replace the old number with a new one?"))){var n=t.find((function(e){return e.name===i})),a={name:n.name,number:O};b(n.id,a).then((function(e){u(t.map((function(n){return n.id===e.id?e:n}))),m(""),S("")})).catch((function(e){T("Information of ".concat(n.name," has already been deleted from server"),!0)}))}}else d({name:i,number:O}).then((function(e){u(t.concat(e)),m(""),S(""),L("Added '".concat(e.name,"'"))}))},nameValue:i,numberValue:O,onNameChange:function(e){return m(e.target.value)},onNumberChange:function(e){return S(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{persons:x,onDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&s(e).then((function(a){u(t.filter((function(n){return n.id!==e}))),L("Deleted '".concat(n,"'"))})).catch((function(e){T("Information of ".concat(n," has already been deleted from server"),!0)}))}}))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8a071e1c.chunk.js.map