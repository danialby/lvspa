(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{18:function(t,e,a){var n=a(200);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(11)(n,s);n.locals&&(t.exports=n.locals)},199:function(t,e,a){"use strict";var n=a(18);a.n(n).a},200:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.con-vs-dialog .vs-dialog[data-v-a82d1a76]\n    {\n      text-align: right !important;\n}\n#adminRow[data-v-a82d1a76] {\n      display: block;\n}\n#adminBox .vs-table--tbody-table .tr-values td[data-v-a82d1a76] {\n    padding: 10px 15px;\n    border: thin solid lightgrey;\n}\n#adminBox .vs-con-table td.td-check[data-v-a82d1a76] {\n    text-align: center;\n}\n#adminBox .tr-expand td .content-tr-expand[data-v-a82d1a76] {\n    max-width: 768px;\n}\n#adminBox th .vs-table-text[data-v-a82d1a76] {\ntext-align: right;\n}\n",""])},31:function(t,e,a){"use strict";a.r(e);var n=a(4),s=a.n(n),i={name:"Admin",data:function(){return{passcode:"",requesta:[],selected:[],reqID:"",reqCode:0,reqStat:"",editPrompt:!1,removePrompt:!1,mailPrompt:!1,callPrompt:!1,details:"",email:"",mobile:"",reqReply:"",isReg:0,registered:0,statSelect:1,statOptions:[{text:"در انتظار تماس",value:0},{text:"در حال بررسی",value:1},{text:"از مشتری دریافت شده",value:2},{text:"به بخش مورد نظر ارسال شده",value:3},{text:"در انتظار دریافت قطعه",value:4},{text:"در حال تعمیر",value:5}]}},computed:{validpass:function(){return""!==this.passcode&&("q1w2e3"===this.passcode&&this.passcode.length>=6)}},mounted:function(){this.read()},methods:{regCheck:function(){if(0!==this.reqCode)return this.reqCode.length>4&&this.regaCheck()},regaCheck:function(){var t=this,e=this.isReg,a=this.registered;s.a.get("/CheckRegistered/"+this.reqCode).then((function(t){return 1===(a=t.data.isRegistered)&&0===e||(1!==a||1!==e)&&(0===a&&0===e||void 0)})).catch((function(e){t.Alert("error","خطا","مشکلی پیش آمده")}))},handleSelected:function(t){this.reqCode=t.reqCode},read:function(){var t=this;s.a.get("/fetchData").then((function(e){var a=e.data;t.requesta=a})).catch((function(t){return console.error(t)}))},maildg:function(t){this.mailPrompt=!0,this.email=t},maila:function(){window.open("mailto:"+this.email)},calla:function(){window.open("tel:"+this.mobile)},calldg:function(t){this.callPrompt=!0,this.mobile=t},removedg:function(t,e){this.removePrompt=!0,this.reqID=t,this.reqCode=e},removeReq:function(t){var e=this;s.a.get("/RemoveReq/"+t).then((function(t){e.Alert("primary","حذف درخواست","حذف درخواست انجام شد"),e.read()})).catch((function(t){e.Alert("error","خطا","مشکلی پیش آمده"),console.error(t)}))},editdgfill:function(t,e,a,n,s,i,r){this.editPrompt=!0,this.reqID=s,this.reqCode=t,this.statSelect=e,this.reqReply=n,this.details=a,this.mobile=i,this.isReg=Number(r),1===this.isReg&&(this.registered=1)},UpdateReq:function(){var t=this;0===this.registered?0===this.isReg&&s.a.get("/UpdateReq/"+this.reqID+"/"+this.reqCode+"/"+this.statSelect+"/"+this.reqReply+"/"+this.isReg).then((function(e){t.Alert("success","ثبت موفق","ویرایش درخواست انجام شد."),t.sendsms(t.mobile,t.reqCode),t.read()})).catch((function(e){t.Alert("error","خطا","مشکلی پیش آمده"),console.error(e)})):1===this.registered&&1===this.isReg&&s.a.get("/UpdateReq/"+this.reqID+"/"+this.reqCode+"/"+this.statSelect+"/"+this.reqReply+"/"+this.isReg).then((function(e){t.Alert("success","ثبت موفق","ویرایش درخواست انجام شد."),t.read()})).catch((function(e){t.Alert("error","خطا","مشکلی پیش آمده"),console.error(e)}))},sendsms:function(t,e){var a=this;s.a.get("/ReqCodeUpdate/"+e+"/"+t).then((function(t){return a.Alert("primary","ارسال رسید به کاربر","شماره رسید برای درخواست دهنده ارسال شد")})).catch((function(t){return a.Alert("error","خطا","خطا در ارسال")}))},Alert:function(t,e,a){this.$vs.notify({color:t,title:e,text:a})}}},r=(a(199),a(1)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"justify-content-center",attrs:{id:"adminBox"}},[a("vs-row",{attrs:{id:"adminrow"}},[a("vs-col",{attrs:{"vs-xs":"12","vs-sm":"12","vs-lg":"11"}},[a("vs-table",{attrs:{search:"",data:t.requesta,pagination:"","max-items":10,stripe:""},on:{selected:t.handleSelected},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[t._l(n,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",{staticClass:"eng",attrs:{data:n[s].reqCode}},[t._v("\n              "+t._s(n[s].reqCode)+"\n            ")]),t._v(" "),a("vs-td",{attrs:{data:n[s].fullname}},[t._v("\n              "+t._s(n[s].fullname)+"\n            ")]),t._v(" "),1==n[s].subject?a("vs-td",{attrs:{data:n[s].subject}},[t._v("\n              سخت افزاری\n            ")]):t._e(),t._v(" "),2==n[s].subject?a("vs-td",{attrs:{data:n[s].subject}},[t._v("\n              نرم افزاری\n            ")]):t._e(),t._v(" "),3==n[s].subject?a("vs-td",{attrs:{data:n[s].subject}},[t._v("\n              مشاوره خرید\n            ")]):t._e(),t._v(" "),4==n[s].subject?a("vs-td",{attrs:{data:n[s].subject}},[t._v("\n              سایر\n            ")]):t._e(),t._v(" "),"Call"==n[s].contactType?a("vs-td",{attrs:{data:n[s].contactType}},[t._v("\n              تماس\n            ")]):t._e(),t._v(" "),"Email"==n[s].contactType?a("vs-td",{attrs:{data:n[s].contactType}},[t._v("\n              ایمیل\n            ")]):t._e(),t._v(" "),a("vs-td",{attrs:{data:n[s].calldate}},[t._v("\n              "+t._s(n[s].calldate)+"\n            ")]),t._v(" "),a("template",{staticClass:"expand-user",slot:"expand"},[a("div",{staticClass:"con-expand-req"},[a("div",{staticClass:"con-btns-req"},[a("div",[a("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(e){return t.removedg(n[s].id)}}},[t._v("\n                      حذف\n                    ")]),t._v(" "),a("vs-button",{attrs:{type:"line",color:"dark"},on:{click:function(e){return t.editdgfill(n[s].reqCode,n[s].reqStat,n[s].details,n[s].reqReply,n[s].id,n[s].mobile,n[s].isReg)}}},[t._v("\n                      ویرایش\n                    ")]),t._v(" "),a("vs-button",{attrs:{disabled:"no@Email.com"==e.email,type:"line",color:"warning"},on:{click:function(e){return t.maildg(n[s].email)}}},[t._v("\n                      ایمیل\n                    ")]),t._v(" "),a("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(e){return t.calldg(n[s].mobile)}}},[t._v("\n                      تماس\n                    ")])],1)]),t._v(" "),a("vs-list",[a("vs-list-item",{attrs:{icon:"phone_iphone",title:"مدل",subtitle:e.model}}),t._v(" "),a("vs-list-item",{attrs:{icon:"alternate_email",title:"ایمیل",subtitle:e.email}}),t._v(" "),a("vs-list-item",{attrs:{icon:"dialpad",title:"موبایل",subtitle:e.mobile}}),t._v(" "),a("vs-list-item",{attrs:{icon:"subject",title:"شرح درخواست",subtitle:e.details}})],1)],1)])],2)})),t._v(" "),a("vs-prompt",{attrs:{"accept-text":"ذخیره","cancel-text":"لغو","button-accept":"line","button-cancel":"line",active:t.editPrompt,title:"ویرایش درخواست"},on:{"update:active":function(e){t.editPrompt=e},accept:function(e){return t.UpdateReq()}}},[a("div",{staticClass:"con-exemple-prompt"},[a("vs-input",{attrs:{"icon-after":"true","label-placeholder":"کد درخواست",icon:"confirmation_number",disabled:1==t.isReg},model:{value:t.reqCode,callback:function(e){t.reqCode=e},expression:"reqCode"}}),t._v(" "),a("vs-alert",{attrs:{active:t.reqCode<5,color:"danger",icon:"new_releases"}},[t._v("\n                کد درخواست حداقل ۵ کاراکتر دارد\n              ")]),t._v(" "),a("vs-alert",{attrs:{active:1!=t.isReg,color:"danger",icon:"new_releases"}},[t._v("\n                کد درخواست تکراری است\n              ")]),t._v(" "),a("vs-divider"),t._v(" "),a("vs-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n                  شرح درخواست :\n                ")]),t._v(" "),a("div",[a("span",[t._v(t._s(t.details))])])]),t._v(" "),a("vs-textarea",{attrs:{label:"پاسخ دهید..."},model:{value:t.reqReply,callback:function(e){t.reqReply=e},expression:"reqReply"}}),t._v(" "),a("vs-select",{staticClass:"selectExample",model:{value:t.statSelect,callback:function(e){t.statSelect=e},expression:"statSelect"}},t._l(t.statOptions,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1)]),t._v(" "),a("vs-prompt",{attrs:{"accept-text":"حذف","cancel-text":"لغو","button-accept":"line","button-cancel":"line",color:"danger",active:t.removePrompt,title:"حذف درخواست","is-valid":t.validpass},on:{"update:active":function(e){t.removePrompt=e},accept:function(e){return t.removeReq(t.reqID)}}},[a("div",{staticClass:"con-exemple-prompt"},[a("vs-input",{attrs:{"icon-after":"true","label-placeholder":"رمز...",icon:"vpn_key",type:"password"},model:{value:t.passcode,callback:function(e){t.passcode=e},expression:"passcode"}})],1),t._v(" "),a("vs-alert",{attrs:{active:!t.validpass,color:"danger",icon:"new_releases"}},[t._v("\n              رمز عبور اشتباه است\n            ")])],1),t._v(" "),a("vs-prompt",{attrs:{"accept-text":"بله","cancel-text":"خیر","button-accept":"line","button-cancel":"line",color:"warning",active:t.mailPrompt,title:"ارسال ایمیل"},on:{"update:active":function(e){t.mailPrompt=e},accept:function(e){return t.maila()}}},[t._v("\n            ایمیل به "+t._s(t.email)+" ؟\n          ")]),t._v(" "),a("vs-prompt",{attrs:{"accept-text":"بله","cancel-text":"خیر","button-accept":"line","button-cancel":"line",color:"primary",active:t.callPrompt,title:"تماس تلفنی"},on:{"update:active":function(e){t.callPrompt=e},accept:function(e){return t.calla()}}},[t._v("\n            تماس با "+t._s(t.mobile)+" ؟\n          ")])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"header"},[t._v("\n          لیست درخواستها\n        ")]),t._v(" "),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"reqCode"}},[t._v("\n            #\n          ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"fullname"}},[t._v("\n            نام و نام خانوادگی\n          ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"subject"}},[t._v("\n            نوع درخواست\n          ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"contactType"}},[t._v("\n            نحوه پاسخگویی\n          ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"contactType"}},[t._v("\n            زمان تماس\n          ")])],1)],2)],1)],1)],1)}),[],!1,null,"a82d1a76",null);e.default=o.exports}}]);