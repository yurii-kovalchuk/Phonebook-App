"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{8054:function(n,e,r){r.r(e),r.d(e,{default:function(){return In}});var t,o,i,a,s,d,c,l,x,p,u,f,b,h,g,m,Z,j,y,v,w,k,P,z,C,A,F,L,E=r(9434),N=r(2791),I=function(n){return n.filter},M=r(1273),q=r(168),J=r(6444),S=J.ZP.label(t||(t=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  font-weight: 500;\n"]))),_=J.ZP.input(o||(o=(0,q.Z)(["\n  display: block;\n  width: 50%;\n  box-sizing: border-box;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  outline: none;\n\n  &:hover,\n  :focus {\n    border-color: #00bfff;\n  }\n\n  // margin-top: 10px;\n  // width: 200px;\n  // &:focus-visible {\n  //   outline-color: blue;\n  // }\n"]))),T=r(3329),B=function(){var n=(0,E.I0)(),e=(0,E.v9)(I);return(0,T.jsx)("div",{children:(0,T.jsxs)(S,{children:["Find contacts by name",(0,T.jsx)(_,{value:e,onChange:function(e){n((0,M.S)(e.target.value))}})]})})},K=r(5705),O=r(8174),U=function(n){return n.contacts.items},V=function(n){return n.contacts.isLoading},Y=function(n){return n.contacts.error},$=function(n){var e=U(n),r=I(n);return function(){var n=r.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}()},D=r(7425),G=(0,J.ZP)(K.l0)(i||(i=(0,q.Z)(["\n  margin-bottom: 50px;\n  padding: 30px 10px;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\n    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n"]))),Q=J.ZP.div(a||(a=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),R=J.ZP.label(s||(s=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  margin: 0 10px 30px;\n  font-weight: 500;\n  text-align: start;\n"]))),W=(0,J.ZP)(K.gN)(d||(d=(0,q.Z)(["\n  display: block;\n  box-sizing: border-box;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  outline: none;\n\n  &:hover,\n  :focus {\n    border-color: #00bfff;\n  }\n"]))),H=J.ZP.button(c||(c=(0,q.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  width: 160px;\n  margin: 0 auto;\n  padding: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 16px;\n\n  text-decoration: none;\n  text-align: center;\n\n  color: #00bfff;\n  background-color: #f8f8ff;\n\n  border: 1px solid #00bfff;\n  border-radius: 5px;\n\n  &:hover,\n  :focus {\n    background-color: #188ce8;\n    color: #f0ffff;\n    border-color: #188ce8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),X=(0,J.ZP)(D.OlE)(l||(l=(0,q.Z)(["\n  // margin-left: 10px;\n"]))),nn=r(3634),en=function(){var n=(0,E.I0)(),e=(0,E.v9)(U);return(0,T.jsx)(K.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){var o=r.name,i=r.number,a=t.resetForm;!function(r,t){e.find((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?O.Am.error("Contact is already in list"):n((0,nn.uK)({name:r,number:t}))}(o,i),a()},children:(0,T.jsxs)(G,{children:[(0,T.jsxs)(Q,{children:[(0,T.jsxs)(R,{children:["Name",(0,T.jsx)(W,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,T.jsxs)(R,{children:["Number",(0,T.jsx)(W,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,T.jsxs)(H,{type:"submit",children:[(0,T.jsx)("span",{children:"Add contact "}),(0,T.jsx)(X,{size:20})]})]})})},rn=r(6856),tn=r(3853),on=r(9126),an=J.ZP.li(x||(x=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #F5F5F5;\n  border-radius: 5px;\n\n  background-color: white;\n  &: focus, :hover {\n    background-color: #F5F5F5;\n  }\n"]))),sn=J.ZP.div(p||(p=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n"]))),dn=J.ZP.div(u||(u=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n"]))),cn=J.ZP.span(f||(f=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  height: 30px;\n\n  margin-right: 20px;\n  padding: 5px;\n\n  background-color: #00bfff;\n  color: #f0ffff;\n\n  font-size: 20px;\n  font-weight: 600;\n  text-shadow: #1e90ff 1px 1px 1px;\n\n  border-radius: 50%;\n  border: 1px solid #1e90ff;\n"]))),ln=J.ZP.p(b||(b=(0,q.Z)(["\n  margin: 0 0 5px 0;\n  font-size: 18px;\n"]))),xn=J.ZP.a(h||(h=(0,q.Z)(["\n  margin: 0;\n  text-decoration: none;\n  font-size: 14px;\n  color: gray;\n"]))),pn=J.ZP.button(g||(g=(0,q.Z)(["\n  display: block;\n  margin-left: 10px;\n  padding: 5px;\n  width: 24px;\n  height: 24px;\n  border: transparent;\n  border-radius: 4px;\n  background-color: grey;\n  color: #f0ffff;\n  cursor: pointer;\n\n  &:hover,\n  :focus {\n    background-color: crimson;\n  }\n\n  &:active {\n    background-color: #b22222;\n  }\n"]))),un=J.ZP.button(m||(m=(0,q.Z)(["\n  display: block;\n  padding: 5px;\n  width: 24px;\n  height: 24px;\n  border: transparent;\n  border-radius: 4px;\n  background-color: grey;\n  color: #f0ffff;\n  cursor: pointer;\n\n  &:hover,\n  :focus {\n    background-color: green;\n  }\n\n  &:active {\n    background-color: #006400;\n  }\n"]))),fn=r(1678),bn=function(n){return n.modal.isOpen},hn=function(n){return n.modal.idx},gn=(0,J.ZP)(K.l0)(Z||(Z=(0,q.Z)(["\n  margin-bottom: 50px;\n  padding: 30px;\n  text-align: center;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\n    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n"]))),mn=J.ZP.div(j||(j=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Zn=J.ZP.label(y||(y=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  margin: 0 10px 30px;\n  font-weight: 500;\n  text-align: start;\n"]))),jn=(0,J.ZP)(K.gN)(v||(v=(0,q.Z)(["\n  display: block;\n  box-sizing: border-box;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  outline: none;\n\n  &:hover,\n  :focus {\n    border-color: #00bfff;\n  }\n"]))),yn=J.ZP.button(w||(w=(0,q.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  width: 160px;\n  margin: 0 auto;\n  padding: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 16px;\n\n  text-decoration: none;\n  text-align: center;\n\n  color: #f8f8ff;\n  background-color: #00bfff;\n\n  border: 1px solid #00bfff;\n  border-radius: 5px;\n\n  &:hover,\n  :focus {\n    background-color: #188ce8;\n    border-color: #188ce8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),vn=(0,J.ZP)(tn.vPQ)(k||(k=(0,q.Z)(["\n  // margin-left: 10px;\n"]))),wn=J.ZP.div(P||(P=(0,q.Z)(["\n  display: flex;\n"]))),kn=(0,J.ZP)(yn)(z||(z=(0,q.Z)(["\n  color: #00bfff;\n  background-color: #f8f8ff;\n\n  &:hover,\n  :focus {\n    color: #f0ffff;\n  }\n"]))),Pn=function(){var n=(0,E.I0)(),e=(0,E.v9)(U),r=(0,E.v9)(hn),t=e.find((function(n){return n.id===r})),o={name:t.name,number:t.number};return(0,T.jsx)(K.J9,{initialValues:o,onSubmit:function(t,i){var a=t.name,s=t.number,d=i.resetForm;a!==o.name||s!==o.number?e.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?O.Am.error("Contact is already in list"):(n((0,nn.Tk)([r,{name:a,number:s}])),d(),n((0,fn.Mr)())):O.Am.error("Please change contact information and try again",{autoClose:2e3})},children:(0,T.jsxs)(gn,{children:[(0,T.jsxs)(mn,{children:[(0,T.jsxs)(Zn,{children:["Name",(0,T.jsx)(jn,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,T.jsxs)(Zn,{children:["Number",(0,T.jsx)(jn,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,T.jsxs)(wn,{children:[(0,T.jsxs)(yn,{type:"submit",children:[(0,T.jsx)("span",{children:"Edit contact "}),(0,T.jsx)(vn,{size:20})]}),(0,T.jsx)(kn,{type:"button",onClick:function(){n((0,fn.Mr)())},children:(0,T.jsx)("span",{children:"Cancel "})})]})]})})},zn=J.ZP.div(C||(C=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n"]))),Cn=J.ZP.div(A||(A=(0,q.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),An=function(){var n=(0,E.I0)();(0,N.useEffect)((function(){return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="unset"}}));var e=function(e){"Escape"===e.code&&n((0,fn.Mr)())};return(0,T.jsx)(zn,{onClick:function(e){e.currentTarget===e.target&&n((0,fn.Mr)())},children:(0,T.jsx)(Cn,{children:(0,T.jsx)(Pn,{})})})},Fn=function(n){var e=n.info,r=e.id,t=e.name,o=e.number,i=(0,E.I0)(),a=(0,E.v9)(bn);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(an,{children:[(0,T.jsxs)(sn,{children:[(0,T.jsx)(cn,{children:t.split(" ").map((function(n){return n.slice(0,1)})).join("").toUpperCase()}),(0,T.jsxs)("div",{children:[(0,T.jsx)(ln,{children:t}),(0,T.jsxs)(xn,{href:"tel: &{number}",children:[(0,T.jsx)(on.UL8,{size:12})," ",o]})]})]}),(0,T.jsxs)(dn,{children:[(0,T.jsx)(un,{type:"button",title:"Edit",onClick:function(){i((0,fn.h7)(r))},children:(0,T.jsx)(tn.IYd,{size:14})}),(0,T.jsx)(pn,{type:"button",title:"Delete",onClick:function(){i((0,nn.GK)(r))},children:(0,T.jsx)(rn.ZkW,{size:14})})]})]}),a&&(0,T.jsx)(An,{})]})},Ln=J.ZP.ul(F||(F=(0,q.Z)(["\n  list-style: none;\n  padding: 0;\n  // background-color: white;\n"]))),En=function(){var n=(0,E.v9)($);return(0,T.jsx)(Ln,{children:n.map((function(n){return(0,T.jsx)(Fn,{info:n},n.id)}))})},Nn=J.ZP.div(L||(L=(0,q.Z)(["\n  margin: 0 auto;\n  padding: 50px 10px;\n  max-width: 720px;\n"]))),In=function(){var n=(0,E.v9)(U),e=(0,E.v9)($),r=(0,E.v9)(V),t=(0,E.v9)(Y),o=(0,E.I0)();return(0,N.useEffect)((function(){o((0,nn.yF)())}),[o]),(0,T.jsxs)(Nn,{children:[(0,T.jsx)(en,{}),(0,T.jsx)("h2",{children:"Contacts"}),(0,T.jsx)(B,{}),r&&!t&&(0,T.jsx)("b",{children:"Request in progress..."}),0===n.length?(0,T.jsx)("p",{children:"Your contacts will be here..."}):null,0===e.length&&0!==n.length?(0,T.jsx)("p",{children:"Sorry! There are no contacts with this name"}):(0,T.jsx)(En,{})]})}}}]);
//# sourceMappingURL=54.cc6cdea0.chunk.js.map