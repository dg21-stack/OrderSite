_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"5dyF":function(e,n,t){e.exports=t("9CGT")},"9CGT":function(e,n,t){"use strict";var r=t("nxTg"),o=t("vdEC");n.__esModule=!0,n.default=void 0;var a=o(t("mXGw")),i=t("a4i1"),s=t("bBV7"),c=t("hY8M"),l={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],s=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,g=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=a.Children.only(h),y=j&&"object"===typeof j&&j.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),_=r(w,2),x=_[0],O=_[1],C=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,a.useEffect)((function(){var e=O&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,O,m,n,t]);var L={ref:C,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,p,g,v,b,m)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var E="undefined"!==typeof m?m:t&&t.locale,N=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);L.href=N||(0,i.addBasePath)((0,i.addLocale)(p,E,t&&t.defaultLocale))}return a.default.cloneElement(j,L)};n.default=f},AvQx:function(e,n,t){e.exports={loginContainer:"Loginsignup_loginContainer__5mE5U",login:"Loginsignup_login__QFyJ3",flagged:"Loginsignup_flagged__3z-pE",errBtn:"Loginsignup_errBtn__3-W0l",buttonContainer:"Loginsignup_buttonContainer__6ki0w",signup:"Loginsignup_signup__1rMnY",btnClass:"Loginsignup_btnClass__2z69B"}},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("oYCi"),o=t("AvQx"),a=t.n(o),i=t("mXGw"),s=t("5dyF"),c=t.n(s),l=t("BtXh"),u=t("dAGg");function f(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw a}}}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p=function(){var e=Object(i.useRef)(),n=Object(i.useRef)(),t=Object(u.useRouter)(),o=Object(i.useContext)(l.b),s=Object(i.useState)(!1),d=(s[0],s[1]),p=Object(i.useState)(!0),h=p[0],g=p[1],v=Object(i.useState)(!0),b=v[0],m=v[1];if(o.isLoggedIn)return Object(r.jsx)(c.a,{href:"/AllRestaurants",children:Object(r.jsx)("div",{className:a.a.signup,children:Object(r.jsx)("b",{children:"Already Logged in! Start Browsing Here. "})})});return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)("div",{className:a.a.loginContainer,children:[Object(r.jsx)("label",{htmlFor:"Email",children:" Email"}),Object(r.jsx)("input",{placeholder:"email@email.com",onInput:function(){h||g(!0)},ref:e,type:"email",name:"Email",className:"".concat(a.a.login," ").concat(h?"":a.a.flagged)}),Object(r.jsx)("label",{htmlFor:"Password",children:"Password"}),Object(r.jsx)("input",{placeholder:"xxxxxx",onInput:function(){b||m(!0)},ref:n,name:"Password",type:"password",className:"".concat(a.a.login," ").concat(b&&h?"":a.a.flagged)})]}),Object(r.jsx)("div",{className:a.a.buttonContainer,children:Object(r.jsx)("button",{onClick:function(r){var a,i;d(!0);var s=null===(a=e.current)||void 0===a?void 0:a.value,c=null===(i=n.current)||void 0===i?void 0:i.value;r.preventDefault(),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRIvxAwx8KqrhXOQpIzkSave61memF2Uw",{method:"POST",body:JSON.stringify({email:s,password:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then().then((function(e){return d(!1),e.ok?e.json():e.json().then((function(e){var n="Auth failed";throw e&&e.error&&e.error.message&&(n=e.error.message,"INVALID_EMAIL"===e.error.message?g(!1):m(!1)),new Error(n)}))})).then((function(e){fetch("https://reactfirst-48147-default-rtdb.firebaseio.com/user.json").then().then((function(n){return n.ok?n.json():n.json().then((function(n){var t="Auth failed";throw n&&n.error&&n.error.message&&(t=e.error.message),new Error(t)}))})).then((function(e){var n=!1,r=0;console.log(JSON.stringify(e));var a,i=f(e);try{for(i.s();!(a=i.n()).done;){var c=a.value;for(var l in console.log(c),c){var u;if(console.log(c[l]),(null===(u=c[l])||void 0===u?void 0:u.email.toLowerCase())===s.toLowerCase()){if(1==r){n=!0,o.login(s,c[l].businessName,c[l].address,!0);break}o.login(s,c[l].firstName,c[l].lastName,!1);break}}r+=1}}catch(d){i.e(d)}finally{i.f()}n?t.push("/business"):t.push("/AllRestaurants")}))})).catch((function(e){alert(e.message)}))},className:" ".concat(h&&b?a.a.btnClass:a.a.errBtn),children:" Login"})}),Object(r.jsx)(c.a,{href:"/signup",children:Object(r.jsx)("div",{className:a.a.signup,children:"Don't Have an Account? Sign Up Here!"})})]})},h=t("A2So"),g=t("pWCa"),v=t.n(g);n.default=function(){return Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v.a,{children:Object(r.jsx)("title",{children:"Home"})}),Object(r.jsx)("h1",{children:"Welcome to ReactEats"}),Object(r.jsx)("p",{children:Object(r.jsx)("i",{children:"where All Your Food Delivery Needs are Satisfied."})}),Object(r.jsx)(p,{})]})}},TqC3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},hY8M:function(e,n,t){"use strict";var r=t("nxTg");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("mXGw"),a=t("pksY"),i="undefined"!==typeof IntersectionObserver;var s=new Map}},[["TqC3",0,2,1,3]]]);