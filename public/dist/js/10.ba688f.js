(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{36:function(s,t,r){"use strict";r.r(t);var o=r(2),a=r.n(o),e=r(6),i=r.n(e);function n(s,t,r,o,a,e,i){try{var n=s[e](i),m=n.value}catch(s){return void r(s)}n.done?t(m):Promise.resolve(m).then(o,a)}var m={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new i.a({token:"",email:"",password:"",password_confirmation:""})}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var s,t=this;return(s=a.a.mark((function s(){var r,o;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.form.post("/api/password/reset");case 2:r=s.sent,o=r.data,t.status=o.status,t.form.reset();case 6:case"end":return s.stop()}}),s)})),function(){var t=this,r=arguments;return new Promise((function(o,a){var e=s.apply(t,r);function i(s){n(e,o,a,i,m,"next",s)}function m(s){n(e,o,a,i,m,"throw",s)}i(void 0)}))})()}}},l=r(1),c=Object(l.a)(m,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("card",{attrs:{title:s.$t("reset_password")}},[r("form",{on:{submit:function(t){return t.preventDefault(),s.reset(t)},keydown:function(t){return s.form.onKeydown(t)}}},[r("alert-success",{attrs:{form:s.form,message:s.status}}),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("email")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("email")},attrs:{type:"email",name:"email",readonly:""},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"email"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("password")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"password"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("confirm_password")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"password_confirmation"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:s.form.busy}},[s._v("\n              "+s._s(s.$t("reset_password"))+"\n            ")])],1)])],1)])],1)])}),[],!1,null,null,null);t.default=c.exports}}]);