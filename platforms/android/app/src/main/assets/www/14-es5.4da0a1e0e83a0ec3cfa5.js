(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"uP/6":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=t("mrSG"),e=t("b6o4"),i=t("ZZ/e"),r=function(){function l(l,n,t,u){var e=this;this.route=l,this.screenOrientation=n,this.platform=t,this.alertController=u,this.userName=localStorage.getItem("UserName"),this.subscribe=this.platform.backButton.subscribeWithPriority(666666,(function(){return o.b(e,void 0,void 0,(function(){return o.e(this,(function(l){switch(l.label){case 0:return"DashboardPage"!=this.constructor.name?[3,2]:[4,this.alertController.create({buttons:[{text:"OK",cssClass:"my-alert-button",handler:function(){navigator.app.exitApp()}},{text:"Cancel",role:"cancel"}],mode:"ios",message:"Do you want to exit the app?"})];case 1:l.sent().present(),l.label=2;case 2:return[2]}}))}))}))}return l.prototype.ngOnInit=function(){},l.prototype.ionViewDidEnter=function(){this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT),this.userName=localStorage.getItem("UserName")},l.prototype.onPurchased=function(){this.route.navigateByUrl("/purchased")},l.prototype.onpro=function(){this.route.navigateByUrl("/program")},l.prototype.onChange=function(){this.route.navigateByUrl("/changepass")},l.prototype.onHistory=function(){this.route.navigateByUrl("/history")},l.prototype.onLogout=function(){localStorage.clear(),this.route.navigateByUrl("/home")},l}(),a=function(){return function(){}}(),c=t("pMnS"),b=t("oBZk"),s=t("ZYCi"),p=u.rb({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,43,"div",[["style","background-color: #008000!important;height:100%;width:100%;text-align: center;"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,42,"ion-grid",[],null,null,null,b.w,b.h)),u.sb(2,49152,null,0,i.z,[u.h,u.k,u.z],null,null),(l()(),u.tb(3,0,null,0,6,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%; margin-top: 10%;"]],null,null,null,b.D,b.o)),u.sb(4,49152,null,0,i.ib,[u.h,u.k,u.z],null,null),u.sb(5,16384,null,0,i.d,[u.k],null,null),(l()(),u.tb(6,0,null,0,3,"ion-col",[],null,null,null,b.u,b.f)),u.sb(7,49152,null,0,i.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,1,"h3",[["style","color: white;"]],null,null,null,null,null)),(l()(),u.Mb(9,null,["Welcome : ",""])),(l()(),u.tb(10,0,null,0,33,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","height: 100%; margin-top: 40%;"]],null,null,null,b.D,b.o)),u.sb(11,49152,null,0,i.ib,[u.h,u.k,u.z],null,null),u.sb(12,16384,null,0,i.d,[u.k],null,null),(l()(),u.tb(13,0,null,0,30,"ion-col",[],null,null,null,b.u,b.f)),u.sb(14,49152,null,0,i.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(15,0,null,0,4,"ion-button",[["class","special-ion-button"],["color","danger"],["expand","block"],["style","color:rgb(255, 38, 0);height:30px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onpro()&&u),u}),b.q,b.b)),u.sb(16,49152,null,0,i.j,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(17,0,null,0,1,"ion-icon",[["name","albums"]],null,null,null,b.x,b.i)),u.sb(18,49152,null,0,i.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Mb(-1,0,["\xa0Program "])),(l()(),u.tb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(21,0,null,0,4,"ion-button",[["class","special-ion-button"],["color","dark"],["expand","block"],["style","color:lightskyblue;height:30px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onChange()&&u),u}),b.q,b.b)),u.sb(22,49152,null,0,i.j,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(23,0,null,0,1,"ion-icon",[["name","checkbox-outline"]],null,null,null,b.x,b.i)),u.sb(24,49152,null,0,i.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Mb(-1,0,["\xa0Change Password "])),(l()(),u.tb(26,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(27,0,null,0,4,"ion-button",[["class","special-ion-button"],["color","primary"],["expand","block"],["style","color:yellow;height:30px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onHistory()&&u),u}),b.q,b.b)),u.sb(28,49152,null,0,i.j,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(29,0,null,0,1,"ion-icon",[["name","filing"]],null,null,null,b.x,b.i)),u.sb(30,49152,null,0,i.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Mb(-1,0,["\xa0Purchased History "])),(l()(),u.tb(32,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(33,0,null,0,4,"ion-button",[["class","special-ion-button"],["color","warning"],["expand","block"],["style","color:black;height:30px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onPurchased()&&u),u}),b.q,b.b)),u.sb(34,49152,null,0,i.j,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(35,0,null,0,1,"ion-icon",[["name","filing"]],null,null,null,b.x,b.i)),u.sb(36,49152,null,0,i.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Mb(-1,0,["\xa0 Last Draw "])),(l()(),u.tb(38,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(39,0,null,0,4,"ion-button",[["class","special-ion-button"],["color","tertiary"],["expand","block"],["style","color:purple;height:30px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onLogout()&&u),u}),b.q,b.b)),u.sb(40,49152,null,0,i.j,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(41,0,null,0,1,"ion-icon",[["name","exit"]],null,null,null,b.x,b.i)),u.sb(42,49152,null,0,i.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Mb(-1,0,["\xa0 Log Out "]))],(function(l,n){l(n,16,0,"danger","block"),l(n,18,0,"albums"),l(n,22,0,"dark","block"),l(n,24,0,"checkbox-outline"),l(n,28,0,"primary","block"),l(n,30,0,"filing"),l(n,34,0,"warning","block"),l(n,36,0,"filing"),l(n,40,0,"tertiary","block"),l(n,42,0,"exit")}),(function(l,n){l(n,9,0,n.component.userName)}))}function g(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"app-dashboard",[],null,null,null,h,p)),u.sb(1,114688,null,0,r,[s.m,e.a,i.Jb,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=u.pb("app-dashboard",r,g,{},{},[]),k=t("Ip0R"),d=t("gIcY");t.d(n,"DashboardPageModuleNgFactory",(function(){return f}));var f=u.qb(a,[],(function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[c.a,m]],[3,u.j],u.x]),u.Db(4608,k.m,k.l,[u.u,[2,k.v]]),u.Db(4608,d.v,d.v,[]),u.Db(4608,i.b,i.b,[u.z,u.g]),u.Db(4608,i.Gb,i.Gb,[i.b,u.j,u.q]),u.Db(4608,i.Kb,i.Kb,[i.b,u.j,u.q]),u.Db(1073742336,k.b,k.b,[]),u.Db(1073742336,d.u,d.u,[]),u.Db(1073742336,d.i,d.i,[]),u.Db(1073742336,i.Db,i.Db,[]),u.Db(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),u.Db(1073742336,a,a,[]),u.Db(1024,s.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);