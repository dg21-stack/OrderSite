_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"0svM":function(e,t,n){e.exports={inputContainer:"signup_inputContainer__C_9fa",slidein:"signup_slidein__2jXUr",flagged:"signup_flagged__1_O5R",buttonBusiness:"signup_buttonBusiness__3sU1G",buttonSignUp:"signup_buttonSignUp__3Xod-",errBtn:"signup_errBtn__3ROpc"}},"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,s,i){try{var l=e[s](i),u=l.value}catch(o){return void n(o)}l.done?t(u):Promise.resolve(u).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function l(e){a(i,r,s,l,u,"next",e)}function u(e){a(i,r,s,l,u,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return r}))},PgR5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n("s7nH")}])},s7nH:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),s=n("nKUr"),i=n("HaE+"),l=n("A2So"),u=n("q1tI"),o=n("0svM"),c=n.n(o),d=n("20a2"),f=n("BtXh"),p=n("g4pe"),m=n.n(p);function b(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw s}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=Object(d.useRouter)(),t=Object(u.useRef)(),n=Object(u.useRef)(),a=Object(u.useRef)(),o=Object(u.useRef)(),p=Object(u.useContext)(f.b),j=Object(u.useState)(!1),g=(j[0],j[1]),h=Object(u.useState)(!1),O=h[0],x=h[1],v=Object(u.useState)(null),N=v[0],y=v[1],S=Object(u.useState)(null),w=S[0],_=S[1],I=Object(u.useState)(null),B=I[0],C=I[1],R=Object(u.useState)(null),U=R[0],A=R[1],E=Object(u.useState)(null),P=E[0],k=E[1];function H(){return(H=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("../api/handler",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(u.useEffect)((function(){p.isBusiness&&p.isLoggedIn&&e.push("/business"),!p.isBusiness&p.isLoggedIn&&e.push("/AllRestaurants")}),[p.isLoggedIn]);var T=function(){x((function(e){return!e})),t.current.value="",n.current.value="",a.current.value="",o.current.value="",y(null),_(null),C(null),A(null)},F=function(){if(N&&w&B&&U){var r={firstName:t.current.value,lastName:n.current.value,email:a.current.value,password:o.current.value},s={name:r.firstName,address:r.lastName,image:"",description:"",paragraph:"",menu:[],email:r.email};fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRIvxAwx8KqrhXOQpIzkSave61memF2Uw",{method:"POST",body:JSON.stringify({email:r.email,password:r.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(t){if(g(!1),!t.ok)return t.json().then((function(e){var t="Auth failed";e&&e.error&&e.error.message&&(t=e.error.message),alert(t)}));O?(!function(e){H.apply(this,arguments)}(s),fetch("https://reactfirst-48147-default-rtdb.firebaseio.com/user/1.json",{method:"POST",body:JSON.stringify({email:r.email,businessName:r.firstName,address:r.lastName}),headers:{"Content-Type":"application/json"}}).then().then((function(t){e.push("/business"),p.login(a.current.value,r.firstName,r.lastName,!0)}))):fetch("https://reactfirst-48147-default-rtdb.firebaseio.com/user/0.json",{method:"POST",body:JSON.stringify({email:r.email,firstName:r.firstName,lastName:r.lastName}),headers:{"Content-Type":"application/json"}}).then().then((function(t){e.push("/AllRestaurants"),p.login(a.current.value,r.firstName,r.lastName,!1)}))}))}else{var i="ERROR:";k(!0),N||(i+=" Invalid Name,"),w||(i+=O?" Invalid Address,":" Invalid Last Name,"),B||(i+=" Invalid Email,"),U||(i+=" Invalid Password,"),i=i.slice(0,-1),alert(i)}},J=function(e){if(k(!0),"business"===e.target.name||"first"===e.target.name){if(e.target.value.length>1)return void y(!0);y(!1)}if("address"===e.target.name||"last"===e.target.name){if(e.target.value.length>1)return _(!0),void console.log("a");_(!1)}if("email"===e.target.name){if(e.target.value.length>0&&(e.target.value.includes(".com")||e.target.value.includes(".net")||e.target.value.includes(".edu"))&&e.target.value.includes("@"))return void C(!0);C(!1)}if("password"===e.target.name){if(e.target.value.length>6&&/\d/.test(e.target.value)&&function(e){var t,n=b(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(isNaN(a)&&a==a.toUpperCase())return!0}}catch(r){n.e(r)}finally{n.f()}return!1}(e.target.value))return void A(!0);A(!1)}},L=function(e){"business"===e.target.name||"first"===e.target.name?y(null):"address"===e.target.name||"last"===e.target.name?_(null):"email"===e.target.name?C(null):A(null)};return O?Object(s.jsxs)(l.a,{children:[" ",Object(s.jsx)(m.a,{children:Object(s.jsx)("title",{children:"Sign Up"})}),Object(s.jsx)("h1",{children:"Signup Business"}),Object(s.jsxs)("div",{className:c.a.buttonBusiness,children:[" ",Object(s.jsx)("button",{onClick:T,children:"\u2190"}),Object(s.jsx)("span",{children:"\u25ce"}),"\u25c9",Object(s.jsx)("span",{}),Object(s.jsx)("button",{children:"\u2192"})]}),Object(s.jsxs)("div",{className:c.a.inputContainer,children:[Object(s.jsx)("label",{htmlFor:"business",children:"Business Name"}),Object(s.jsx)("input",{placeHolder:"ex: fancy business",onInput:L,onBlur:J,ref:t,name:"business",className:"".concat(0!=N?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"address",children:"Address"}),Object(s.jsx)("input",{placeHolder:"ex: 7 business rd",onInput:L,onBlur:J,ref:n,type:"text",name:"address",className:"".concat(0!=w?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{placeHolder:"ex: email@email.com",onInput:L,onBlur:J,ref:a,type:"email",name:"email",className:"".concat(0!=B?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{placeHolder:"xxxxxx",onInput:L,onBlur:J,ref:o,type:"password",name:"password",className:"".concat(0!=U?"":c.a.flagged)})]}),Object(s.jsx)("button",{onClick:F,className:P?c.a.errBtn:c.a.buttonSignUp,children:"Sign Up"})]}):Object(s.jsxs)(l.a,{children:[Object(s.jsx)(m.a,{children:Object(s.jsx)("title",{children:"Sign Up"})})," ",Object(s.jsx)("h1",{children:"Signup Customer"}),Object(s.jsxs)("div",{className:c.a.buttonBusiness,children:[" ",Object(s.jsx)("button",{children:"\u2190"}),Object(s.jsx)("span",{children:"\u25c9"}),"\u25ce",Object(s.jsx)("span",{}),Object(s.jsx)("button",{onClick:T,children:"\u2192"})]}),Object(s.jsxs)("div",{className:c.a.inputContainer,children:[Object(s.jsx)("label",{htmlFor:"first",children:"First Name"}),Object(s.jsx)("input",{placeHolder:"First Name",onInput:L,onBlur:J,type:"text",ref:t,name:"first",className:"".concat(0!=N?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"last",children:"Last Name"}),Object(s.jsx)("input",{placeHolder:"Last Name",onInput:L,onBlur:J,ref:n,type:"text",name:"last",className:"".concat(0!=w?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{placeHolder:"ex: email@email.com",onInput:L,onBlur:J,ref:a,type:"email",name:"email",className:"".concat(0!=B?"":c.a.flagged)}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{placeHolder:"xxxxxx",onInput:L,onBlur:J,ref:o,type:"password",name:"password",className:"".concat(0!=U?"":c.a.flagged)})]}),Object(s.jsx)("button",{onClick:F,className:P?c.a.errBtn:c.a.buttonSignUp,children:"Sign Up"})]})}}},[["PgR5",0,2,1,3]]]);