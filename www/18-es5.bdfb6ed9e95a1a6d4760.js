(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{WClW:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),i=function(){return function(l,n,t){this.result=l,this.reason=n,this.UserBalance=t}}(),r=t("b6o4"),o=t("p74H"),s=t("F0qL"),a=t("jPKl"),b=function(){return function(l,n,t,u,e,i,r,o,s,a,b,c){this.txt1=l,this.txt2=n,this.txt3=t,this.txt4=u,this.txt5=e,this.txt6=i,this.txt7=r,this.txt8=o,this.txt9=s,this.txt0=a,this.UserId=b,this.dt=c}}(),c=t("ZZ/e"),g=t("MCLT"),h=t("tYaH"),d=function(){function l(l,n,t,u,e,r,o,s,a){this.route=l,this.statusBar=n,this.screenOrientation=t,this.userDb=u,this.programDb=e,this.alertController=r,this.toastController=o,this.zone=s,this.MyPipe=a,this.draw_hour="0",this.draw_minute="0",this.am_or_pm="",this.current_date="0",this.current_hour="0",this.current_minute="0",this.current_second="0",this.remaining_minute="",this.remaining_second="",this.batting_type="Normal",this.winBalance=0,this.txt0=this.txt1=this.txt2=this.txt3=this.txt4=this.txt5=this.txt6=this.txt7=this.txt8=this.txt9=null,this.userId=localStorage.getItem("UserId"),this.myObj=new i(!0,"",""),this.getBalance(),this.histories=[]}return l.prototype.ngOnInit=function(){var l=this;this.setTime(),setInterval((function(){l.setTime(),l.get5History()}),1e3)},l.prototype.get5History=function(){return e.b(this,void 0,void 0,(function(){var l=this;return e.e(this,(function(n){return this.userDb.getHistory().subscribe((function(n){l.histories=n.slice(0,5)}),(function(l){})),[2]}))}))},l.prototype.getBalance=function(){return e.b(this,void 0,void 0,(function(){var l=this;return e.e(this,(function(n){return this.zone.run((function(){l.userDb.getBalance(l.userId).subscribe((function(n){l.myObj=n}),(function(l){}))})),[2]}))}))},l.prototype.setTime=function(){this.setDrawTimer(),this.setCurrentTime(),this.setDifferenceTime(),this.setCurrentDate()},l.prototype.setCurrentDate=function(){var l=(new Date).getDate();l=l<=9?"0"+l.toString():l.toString();var n=(new Date).getUTCMonth()+1;n=n<=9?"0"+n.toString():n.toString();var t=(new Date).getFullYear();this.current_date=l+"-"+n+"-"+t},l.prototype.setDifferenceTime=function(){var l=Math.abs(+new Date(this.draw_time)-+new Date(this.current_time))/1e3;l-=86400*Math.floor(l/86400),l-=Math.floor(l/3600)%24*3600;var n=Math.floor(l/60)%60,t=(l-=60*n)%60;this.remaining_minute=n<=9?"0"+n:n.toString(),this.remaining_second=t<=9?"0"+t:t.toString()},l.prototype.setDrawTimer=function(){var l=new Date,n=l.getMinutes();this.draw_hour=n>=45&&n<=59?new Date((new Date).setHours((new Date).getHours()+1)).getHours().toString():l.getHours().toString();var t=+this.draw_hour;this.am_or_pm=t>=12?"PM":"AM";var u=+this.draw_hour;this.draw_hour=(u=(u%=12)||12)<=9?"0"+u:u.toString();var e=l.getMinutes();this.draw_minute=e>=0&&e<=14?"15":e>=15&&e<=29?"30":e>=30&&e<=44?"45":"00";var i=+this.draw_minute;this.draw_time=(new Date).setHours(t,i,0)},l.prototype.setCurrentTime=function(){var l=new Date,n=l.getHours();this.current_hour=(n=(n%=12)||12)<=9?"0"+n.toString():n.toString(),this.current_minute=l.getMinutes()<10?"0"+l.getMinutes().toString():l.getMinutes().toString(),this.current_second=l.getSeconds()<10?"0"+l.getSeconds().toString():l.getSeconds().toString(),this.current_time=l.getTime()},l.prototype.addHours=function(l,n){var t=l.setTime(l.getTime()+60*n*60*100);return new Date(t).getHours().toString()},l.prototype.takeBalance=function(){var l=this;this.userDb.takeBalance(localStorage.getItem("UserId")).subscribe((function(n){l.winBalance=n,l.getBalance()}))},l.prototype.checkBalance=function(){var l=this;this.userDb.checkBalance(localStorage.getItem("UserId")).subscribe((function(n){l.winBalance=n}))},l.prototype.ionViewWillEnter=function(){this.statusBar.hide(),this.userName=localStorage.getItem("UserName"),this.getBalance(),this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE),this.batting_type="Normal"},l.prototype.onLogout=function(){this.route.navigateByUrl("/dashboard")},l.prototype.onDoubleJackpot=function(){this.route.navigateByUrl("/double-jackpot")},l.prototype.isNullOrZero=function(){return!!(Object(g.isNull)(this.txt1)&&Object(g.isNull)(this.txt2)&&Object(g.isNull)(this.txt3)&&Object(g.isNull)(this.txt4)&&Object(g.isNull)(this.txt5)&&Object(g.isNull)(this.txt6)&&Object(g.isNull)(this.txt7)&&Object(g.isNull)(this.txt8)&&Object(g.isNull)(this.txt9)&&Object(g.isNull)(this.txt0))||0===this.txt0||0===this.txt1||0===this.txt2||0===this.txt3||0===this.txt4||0===this.txt8||0===this.txt7||0===this.txt6||0===this.txt5||0===this.txt9},l.prototype.onSubmit=function(){return e.b(this,void 0,void 0,(function(){var l,n=this;return e.e(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({buttons:[{text:"OK",cssClass:"my-alert-button"}],mode:"ios"})];case 1:return l=t.sent(),this.isNullOrZero()?(l.message="Enter Proper Ticket Quantity!",l.present()):this.programDb.submitDraw(new b(Number(this.txt1),Number(this.txt2),Number(this.txt3),Number(this.txt4),Number(this.txt5),Number(this.txt6),Number(this.txt7),Number(this.txt8),Number(this.txt9),Number(this.txt0),Number(localStorage.getItem("UserId")),this.batting_type)).subscribe((function(t){return e.b(n,void 0,void 0,(function(){return e.e(this,(function(n){return l.message=t.result?"Batting Successfully!!!":405==t.reason?"Low Balance!!!":"Batting Unsuccessfully!!!",l.present(),[2]}))}))}),(function(l){console.log(l)}),(function(){n.batting_type="Normal",n.getBalance()})),this.onClear(),[2]}}))}))},l.prototype.onJackpot=function(){return e.b(this,void 0,void 0,(function(){var l=this;return e.e(this,(function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Please enter ticket",inputs:[{name:"ticket",type:"number",placeholder:"Please enter ticket"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"my-alert-button",handler:function(){}},{text:"Okay",handler:function(n){return e.b(l,void 0,void 0,(function(){var l,t;return e.e(this,(function(u){switch(u.label){case 0:return l=parseInt(n.ticket),[4,this.alertController.create({buttons:["OK"],mode:"ios"})];case 1:return t=u.sent(),Object(g.isNull)(l)||0===l||isNaN(l)?(t.message="Enter Proper Ticket Quantity!",t.present()):(this.txt1=l,this.txt2=l,this.txt3=l,this.txt4=l,this.txt5=l,this.txt6=l,this.txt7=l,this.txt8=l,this.txt9=l,this.txt0=l,this.batting_type="Jackpot"),[2]}}))}))}}],mode:"ios"})];case 1:return n.sent().present(),[2]}}))}))},l.prototype.onClear=function(){this.txt0=this.txt1=this.txt2=this.txt3=this.txt4=this.txt5=this.txt6=this.txt7=this.txt8=this.txt9=null},l.prototype.viewAll=function(){this.route.navigateByUrl("/purchased")},l.prototype.lastBatting=function(){this.route.navigateByUrl("/history")},l}(),p=function(){return function(){}}(),m=t("pMnS"),C=t("oBZk"),x=t("gIcY"),f=t("Ip0R"),y=t("ZYCi"),k=u.qb({encapsulation:0,styles:[[".bottomRow[_ngcontent-%COMP%]{margin-top:-2%}ion-col[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px}ion-card[_ngcontent-%COMP%]{width:100%!important;margin-left:0!important;margin-right:0!important;background-color:green}.sc-ion-card-md-h[_ngcontent-%COMP%]{box-shadow:none!important}.bottomRow2[_ngcontent-%COMP%]{margin-left:10px}h4[_ngcontent-%COMP%]{margin-top:0}img[_ngcontent-%COMP%]{border-radius:10px}.special-bottom-button[_ngcontent-%COMP%]{height:30px}.special-my-button[_ngcontent-%COMP%]{height:20px;width:70px;--background:green!important;color:#ff0!important}.my-alert-button[_ngcontent-%COMP%]{background-color:unset}.my-alert-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:red}.special-my-button1[_ngcontent-%COMP%]{height:20px;--background:#008000;color:#ff0}.my-span[_ngcontent-%COMP%]{background-color:#fff!important;border-radius:5px!important}.span-win[_ngcontent-%COMP%]{background-color:#fff!important;color:red;float:left;font-size:16px;font-weight:700;padding-left:3px}.container[_ngcontent-%COMP%]{font-size:12px;display:grid;grid-template-columns:110px 125px 145px 215px 120px;position:fixed;left:5px;bottom:0;right:0}.special-span[_ngcontent-%COMP%]{margin-right:40%}.special-span2[_ngcontent-%COMP%]{margin-left:65%}"]],data:{}});function v(l){return u.Mb(0,[(l()(),u.sb(0,0,null,null,2,"li",[["style","list-style-type: none;border-bottom: 1px dashed black; font-size: small;"]],null,null,null,null,null)),(l()(),u.Kb(1,null,[" "," \xa0 "," "])),u.Gb(2,1)],null,(function(l,n){var t=u.Lb(n,1,0,l(n,2,0,u.Eb(n.parent,0),n.context.$implicit.DrawTime));l(n,1,0,t,n.context.$implicit.YantraName)}))}function E(l){return u.Mb(0,[u.Fb(0,h.a,[]),(l()(),u.sb(1,0,null,null,188,"div",[["style","background-color: #008000; width: 100%; height: 100%;"]],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,6,"h4",[["class","bottomRow2"],["style","color:white;"]],null,null,null,null,null)),(l()(),u.Kb(3,null,[" ",":"," "," \xa0\xa0",":","\xa0\xa0\xa0","\xa0\xa0 \xa0",":",":"," "])),(l()(),u.sb(4,0,null,null,1,"span",[["style","margin-right: 10px;"]],null,null,null,null,null)),(l()(),u.Kb(5,null,["\xa0ID : ","\xa0\xa0"])),(l()(),u.Kb(-1,null,["\xa0"])),(l()(),u.sb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(8,null,["\xa0\xa0BALANCE : Rs. "," \xa0\xa0"])),(l()(),u.sb(9,0,null,null,125,"ion-grid",[["style","height: 45%; width:80%;clear: both; margin-top: -10%;margin-left: initial;"]],null,null,null,C.w,C.h)),u.rb(10,49152,null,0,c.z,[u.h,u.k,u.z],null,null),(l()(),u.sb(11,0,null,0,61,"ion-row",[],null,null,null,C.D,C.o)),u.rb(12,49152,null,0,c.ib,[u.h,u.k,u.z],null,null),(l()(),u.sb(13,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(14,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(15,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(16,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(17,0,null,0,0,"img",[["height","45%"],["src","assets/icon/1.jpeg"],["width","50%"]],null,null,null,null,null)),(l()(),u.sb(18,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,19)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,19)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt1=t)&&e),e}),C.y,C.j)),u.rb(19,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(21,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(23,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(24,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(25,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(26,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(27,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(28,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(29,0,null,0,0,"img",[["height","45%"],["src","assets/icon/2.jpeg"],["width","50%"]],null,null,null,null,null)),(l()(),u.sb(30,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,31)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,31)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt2=t)&&e),e}),C.y,C.j)),u.rb(31,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(33,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(35,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(36,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(37,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(38,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(39,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(40,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(41,0,null,0,0,"img",[["height","75%"],["src","assets/icon/3.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(42,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,43)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,43)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt3=t)&&e),e}),C.y,C.j)),u.rb(43,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(45,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(47,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(48,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(49,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(50,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(51,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(52,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(53,0,null,0,0,"img",[["height","75%"],["src","assets/icon/4.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(54,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,55)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,55)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt4=t)&&e),e}),C.y,C.j)),u.rb(55,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(57,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(59,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(60,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(61,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(62,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(63,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(64,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(65,0,null,0,0,"img",[["height","75%"],["src","assets/icon/5.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(66,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,67)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,67)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt5=t)&&e),e}),C.y,C.j)),u.rb(67,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(69,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(71,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(72,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(73,0,null,0,61,"ion-row",[["class","bottomRow"]],null,null,null,C.D,C.o)),u.rb(74,49152,null,0,c.ib,[u.h,u.k,u.z],null,null),(l()(),u.sb(75,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(76,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(77,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(78,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(79,0,null,0,0,"img",[["height","75%"],["src","assets/icon/6.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(80,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,81)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,81)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt6=t)&&e),e}),C.y,C.j)),u.rb(81,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(83,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(85,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(86,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(87,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(88,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(89,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(90,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(91,0,null,0,0,"img",[["height","75%"],["src","assets/icon/7.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(92,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,93)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,93)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt7=t)&&e),e}),C.y,C.j)),u.rb(93,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(95,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(97,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(98,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(99,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(100,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(101,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(102,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(103,0,null,0,0,"img",[["height","75%"],["src","assets/icon/8.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(104,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,105)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,105)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt8=t)&&e),e}),C.y,C.j)),u.rb(105,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(107,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(109,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(110,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(111,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(112,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(113,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(114,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(115,0,null,0,0,"img",[["height","75%"],["src","assets/icon/9.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(116,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,117)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,117)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt9=t)&&e),e}),C.y,C.j)),u.rb(117,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(119,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(121,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(122,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(123,0,null,0,11,"ion-col",[["style","text-align: center;"]],null,null,null,C.u,C.f)),u.rb(124,49152,null,0,c.s,[u.h,u.k,u.z],null,null),(l()(),u.sb(125,0,null,0,9,"ion-card",[],null,null,null,C.t,C.c)),u.rb(126,49152,null,0,c.l,[u.h,u.k,u.z],null,null),(l()(),u.sb(127,0,null,0,0,"img",[["height","75%"],["src","assets/icon/10.jpeg"],["width","95%"]],null,null,null,null,null)),(l()(),u.sb(128,0,null,0,6,"ion-input",[["style","background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,129)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,129)._handleIonChange(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.txt0=t)&&e),e}),C.y,C.j)),u.rb(129,16384,null,0,c.Hb,[u.k],null,null),u.Hb(1024,null,x.l,(function(l){return[l]}),[c.Hb]),u.rb(131,671744,null,0,x.p,[[8,null],[8,null],[8,null],[6,x.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,x.m,null,[x.p]),u.rb(133,16384,null,0,x.n,[[4,x.m]],null,null),u.rb(134,49152,null,0,c.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.sb(135,0,null,null,10,"span",[["class","my-span"],["style","margin-left:5px; margin-top:-22%; width:20%; margin-right: 5px;"]],null,null,null,null,null)),(l()(),u.sb(136,0,null,null,1,"span",[["class","span-win"]],null,null,null,null,null)),(l()(),u.Kb(137,null,["Win Amount: ",""])),(l()(),u.sb(138,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(139,0,null,null,2,"ion-button",[["class","special-my-button"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.checkBalance()&&u),u}),C.q,C.b)),u.rb(140,49152,null,0,c.j,[u.h,u.k,u.z],{shape:[0,"shape"]},null),(l()(),u.Kb(-1,0,["Check "])),(l()(),u.sb(142,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.sb(143,0,null,null,2,"ion-button",[["class","special-my-button"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.takeBalance()&&u),u}),C.q,C.b)),u.rb(144,49152,null,0,c.j,[u.h,u.k,u.z],{shape:[0,"shape"]},null),(l()(),u.Kb(-1,0,["Take "])),(l()(),u.sb(146,0,null,null,12,"span",[["class","my-span"],["style","padding-left:3px; margin-top:-4%; width:20%; max-height: 40%;font-size: 130x; margin-right: 5px;"]],null,null,null,null,null)),(l()(),u.sb(147,0,null,null,2,"ion-label",[["style","color: red;font-size: 16px;font-weight: bold;"]],null,null,null,C.A,C.l)),u.rb(148,49152,null,0,c.M,[u.h,u.k,u.z],null,null),(l()(),u.Kb(-1,0,["Last 5 Draw:"])),(l()(),u.sb(150,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,v)),u.rb(152,278528,null,0,f.i,[u.N,u.K,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(153,0,null,null,2,"ion-button",[["class","special-my-button1"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.viewAll()&&u),u}),C.q,C.b)),u.rb(154,49152,null,0,c.j,[u.h,u.k,u.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),u.Kb(-1,0,["View All "])),(l()(),u.sb(156,0,null,null,2,"ion-button",[["class","special-my-button1"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.lastBatting()&&u),u}),C.q,C.b)),u.rb(157,49152,null,0,c.j,[u.h,u.k,u.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),u.Kb(-1,0,["Last Batting\n"])),(l()(),u.sb(159,0,null,null,30,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.sb(160,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.sb(161,0,null,null,4,"ion-button",[["class","special-bottom-button"],["color","tertiary"],["shape","round"],["style","color:purple;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onLogout()&&u),u}),C.q,C.b)),u.rb(162,49152,null,0,c.j,[u.h,u.k,u.z],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.sb(163,0,null,0,1,"ion-icon",[["name","exit"]],null,null,null,C.x,C.i)),u.rb(164,49152,null,0,c.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Kb(-1,0,["Exit "])),(l()(),u.sb(166,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.sb(167,0,null,null,4,"ion-button",[["class","special-bottom-button"],["color","danger"],["shape","round"],["style","color:rgb(1.755, 38, 0);"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onClear()&&u),u}),C.q,C.b)),u.rb(168,49152,null,0,c.j,[u.h,u.k,u.z],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.sb(169,0,null,0,1,"ion-icon",[["name","nuclear"]],null,null,null,C.x,C.i)),u.rb(170,49152,null,0,c.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Kb(-1,0,["Clear "])),(l()(),u.sb(172,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.sb(173,0,null,null,4,"ion-button",[["class","special-bottom-button"],["color","dark"],["shape","round"],["style","color:lightskyblue;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onJackpot()&&u),u}),C.q,C.b)),u.rb(174,49152,null,0,c.j,[u.h,u.k,u.z],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.sb(175,0,null,0,1,"ion-icon",[["name","filing"]],null,null,null,C.x,C.i)),u.rb(176,49152,null,0,c.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Kb(-1,0,["Jackpot "])),(l()(),u.sb(178,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.sb(179,0,null,null,4,"ion-button",[["class","special-bottom-button"],["color","primary"],["shape","round"],["style","color:yellow;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onDoubleJackpot()&&u),u}),C.q,C.b)),u.rb(180,49152,null,0,c.j,[u.h,u.k,u.z],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.sb(181,0,null,0,1,"ion-icon",[["name","filing"]],null,null,null,C.x,C.i)),u.rb(182,49152,null,0,c.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Kb(-1,0,["Double Jackpot "])),(l()(),u.sb(184,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.sb(185,0,null,null,4,"ion-button",[["class","special-bottom-button"],["color","warning"],["shape","round"],["style","color:black;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u}),C.q,C.b)),u.rb(186,49152,null,0,c.j,[u.h,u.k,u.z],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.sb(187,0,null,0,1,"ion-icon",[["name","checkbox-outline"]],null,null,null,C.x,C.i)),u.rb(188,49152,null,0,c.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Kb(-1,0,["Submit "]))],(function(l,n){var t=n.component;l(n,21,0,t.txt1),l(n,24,0,"number"),l(n,33,0,t.txt2),l(n,36,0,"number"),l(n,45,0,t.txt3),l(n,48,0,"number"),l(n,57,0,t.txt4),l(n,60,0,"number"),l(n,69,0,t.txt5),l(n,72,0,"number"),l(n,83,0,t.txt6),l(n,86,0,"number"),l(n,95,0,t.txt7),l(n,98,0,"number"),l(n,107,0,t.txt8),l(n,110,0,"number"),l(n,119,0,t.txt9),l(n,122,0,"number"),l(n,131,0,t.txt0),l(n,134,0,"number"),l(n,140,0,"round"),l(n,144,0,"round"),l(n,152,0,t.histories),l(n,154,0,"full","round"),l(n,157,0,"full","round"),l(n,162,0,"tertiary","round"),l(n,164,0,"exit"),l(n,168,0,"danger","round"),l(n,170,0,"nuclear"),l(n,174,0,"dark","round"),l(n,176,0,"filing"),l(n,180,0,"primary","round"),l(n,182,0,"filing"),l(n,186,0,"warning","round"),l(n,188,0,"checkbox-outline")}),(function(l,n){var t=n.component;l(n,3,0,t.draw_hour,t.draw_minute,t.am_or_pm,t.remaining_minute,t.remaining_second,t.current_date,t.current_hour,t.current_minute,t.current_second),l(n,5,0,t.userName),l(n,8,0,t.myObj.UserBalance),l(n,18,0,u.Eb(n,23).ngClassUntouched,u.Eb(n,23).ngClassTouched,u.Eb(n,23).ngClassPristine,u.Eb(n,23).ngClassDirty,u.Eb(n,23).ngClassValid,u.Eb(n,23).ngClassInvalid,u.Eb(n,23).ngClassPending),l(n,30,0,u.Eb(n,35).ngClassUntouched,u.Eb(n,35).ngClassTouched,u.Eb(n,35).ngClassPristine,u.Eb(n,35).ngClassDirty,u.Eb(n,35).ngClassValid,u.Eb(n,35).ngClassInvalid,u.Eb(n,35).ngClassPending),l(n,42,0,u.Eb(n,47).ngClassUntouched,u.Eb(n,47).ngClassTouched,u.Eb(n,47).ngClassPristine,u.Eb(n,47).ngClassDirty,u.Eb(n,47).ngClassValid,u.Eb(n,47).ngClassInvalid,u.Eb(n,47).ngClassPending),l(n,54,0,u.Eb(n,59).ngClassUntouched,u.Eb(n,59).ngClassTouched,u.Eb(n,59).ngClassPristine,u.Eb(n,59).ngClassDirty,u.Eb(n,59).ngClassValid,u.Eb(n,59).ngClassInvalid,u.Eb(n,59).ngClassPending),l(n,66,0,u.Eb(n,71).ngClassUntouched,u.Eb(n,71).ngClassTouched,u.Eb(n,71).ngClassPristine,u.Eb(n,71).ngClassDirty,u.Eb(n,71).ngClassValid,u.Eb(n,71).ngClassInvalid,u.Eb(n,71).ngClassPending),l(n,80,0,u.Eb(n,85).ngClassUntouched,u.Eb(n,85).ngClassTouched,u.Eb(n,85).ngClassPristine,u.Eb(n,85).ngClassDirty,u.Eb(n,85).ngClassValid,u.Eb(n,85).ngClassInvalid,u.Eb(n,85).ngClassPending),l(n,92,0,u.Eb(n,97).ngClassUntouched,u.Eb(n,97).ngClassTouched,u.Eb(n,97).ngClassPristine,u.Eb(n,97).ngClassDirty,u.Eb(n,97).ngClassValid,u.Eb(n,97).ngClassInvalid,u.Eb(n,97).ngClassPending),l(n,104,0,u.Eb(n,109).ngClassUntouched,u.Eb(n,109).ngClassTouched,u.Eb(n,109).ngClassPristine,u.Eb(n,109).ngClassDirty,u.Eb(n,109).ngClassValid,u.Eb(n,109).ngClassInvalid,u.Eb(n,109).ngClassPending),l(n,116,0,u.Eb(n,121).ngClassUntouched,u.Eb(n,121).ngClassTouched,u.Eb(n,121).ngClassPristine,u.Eb(n,121).ngClassDirty,u.Eb(n,121).ngClassValid,u.Eb(n,121).ngClassInvalid,u.Eb(n,121).ngClassPending),l(n,128,0,u.Eb(n,133).ngClassUntouched,u.Eb(n,133).ngClassTouched,u.Eb(n,133).ngClassPristine,u.Eb(n,133).ngClassDirty,u.Eb(n,133).ngClassValid,u.Eb(n,133).ngClassInvalid,u.Eb(n,133).ngClassPending),l(n,137,0,t.winBalance)}))}function w(l){return u.Mb(0,[(l()(),u.sb(0,0,null,null,1,"app-program",[],null,null,null,E,k)),u.rb(1,114688,null,0,d,[y.m,o.a,r.a,s.a,a.a,c.a,c.Lb,u.z,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var _=u.ob("app-program",d,w,{},{},[]),B=t("E1EG");t.d(n,"ProgramPageModuleNgFactory",(function(){return M}));var M=u.pb(p,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[m.a,_]],[3,u.j],u.x]),u.Cb(4608,f.l,f.k,[u.u,[2,f.s]]),u.Cb(4608,x.u,x.u,[]),u.Cb(4608,c.b,c.b,[u.z,u.g]),u.Cb(4608,c.Fb,c.Fb,[c.b,u.j,u.q]),u.Cb(4608,c.Jb,c.Jb,[c.b,u.j,u.q]),u.Cb(4608,h.a,h.a,[]),u.Cb(1073742336,f.b,f.b,[]),u.Cb(1073742336,x.t,x.t,[]),u.Cb(1073742336,x.i,x.i,[]),u.Cb(1073742336,c.Db,c.Db,[]),u.Cb(1073742336,y.n,y.n,[[2,y.s],[2,y.m]]),u.Cb(1073742336,B.a,B.a,[]),u.Cb(1073742336,p,p,[]),u.Cb(1024,y.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);