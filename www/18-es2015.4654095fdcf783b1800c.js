(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{L6id:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class r{}var o=u("pMnS"),t=u("oBZk"),s=u("ZZ/e"),i=u("s7LF"),a=u("SVse"),b=u("mrSG"),d=u("MCLT"),c=u("F0qL");class g{constructor(l,n){this.UserName=l,this.UserPassword=n}}class h{constructor(l,n,u,e){this.route=l,this.useDb=n,this.toast=u,this.formBuilder=e,this.loginForm=this.formBuilder.group({username:new i.e("",i.s.compose([i.s.required])),password:new i.e("",i.s.compose([i.s.required]))}),Object(d.isNull)(localStorage.getItem("UserId"))||this.route.navigateByUrl("/dashboard")}onClick(){this.user=new g(this.loginForm.get("username").value,this.loginForm.get("password").value),this.useDb.loginUser(this.user).subscribe(l=>b.b(this,void 0,void 0,(function*(){let n;console.log(l),l.result?(n=yield this.toast.create({message:"Successfull Login!",duration:1e3,showCloseButton:!0,closeButtonText:"Okay",color:"success"}),localStorage.setItem("UserId",l.UserId),localStorage.setItem("UserName",l.UserName),this.route.navigateByUrl("/dashboard")):n=yield this.toast.create({message:"Invalid User Name or Password!",duration:1e3,showCloseButton:!0,closeButtonText:"Okay",color:"success"}),this.loginForm.reset(),n.present()})),l=>{console.log(l)})}}var m=u("iInd"),p=e.pb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function q(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" User Name is required. "]))],null,null)}function f(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Password is required. "]))],null,null)}function v(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,59,"div",[["class","center-class"],["style"," background-color:#008000 !important; height: 100%; width: 100%;"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,58,"ion-grid",[],null,null,null,t.w,t.h)),e.qb(2,49152,null,0,s.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,3,"ion-row",[["align-items-center",""],["justify-content-center",""]],null,null,null,t.D,t.o)),e.qb(4,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),e.qb(5,16384,null,0,s.d,[e.k],null,null),(l()(),e.rb(6,0,null,0,0,"img",[["height","30%"],["src","../../assets/icon/icon.png"],["style","margin-top: 25%;"],["width","30%"]],null,null,null,null,null)),(l()(),e.rb(7,0,null,0,7,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","text-align: center;"]],null,null,null,t.D,t.o)),e.qb(8,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),e.qb(9,16384,null,0,s.d,[e.k],null,null),(l()(),e.rb(10,0,null,0,4,"ion-col",[],null,null,null,t.u,t.f)),e.qb(11,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(12,0,null,0,1,"span",[["style","color: yellow; font-size: 30px; text-align: center; float: none; background-color: #008000;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["HONEST"])),(l()(),e.rb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(15,0,null,0,44,"ion-row",[["align-items-center",""],["justify-content-center",""],["style","text-align: center;"]],null,null,null,t.D,t.o)),e.qb(16,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),e.qb(17,16384,null,0,s.d,[e.k],null,null),(l()(),e.rb(18,0,null,0,41,"ion-col",[],null,null,null,t.u,t.f)),e.qb(19,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(20,0,null,0,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Db(l,22).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Db(l,22).onReset()&&r),r}),null,null)),e.qb(21,16384,null,0,i.w,[],null,null),e.qb(22,540672,null,0,i.h,[[8,null],[8,null]],{form:[0,"form"]},null),e.Hb(2048,null,i.a,null,[i.h]),e.qb(24,16384,null,0,i.o,[[4,i.a]],null,null),(l()(),e.rb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\xa0Log In"])),(l()(),e.rb(27,0,null,null,12,"ion-item",[["color","#008000"]],null,null,null,t.z,t.k)),e.qb(28,49152,null,0,s.G,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(29,0,null,0,8,"ion-input",[["formControlName","username"],["id","username"],["placeholder","Username"],["style","font-size:17px; color:white;"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var r=!0;return"ionBlur"===n&&(r=!1!==e.Db(l,32)._handleBlurEvent(u.target)&&r),"ionChange"===n&&(r=!1!==e.Db(l,32)._handleInputEvent(u.target)&&r),r}),t.y,t.j)),e.qb(30,16384,null,0,i.r,[],{required:[0,"required"]},null),e.Hb(1024,null,i.k,(function(l){return[l]}),[i.r]),e.qb(32,16384,null,0,s.Kb,[e.k],null,null),e.Hb(1024,null,i.l,(function(l){return[l]}),[s.Kb]),e.qb(34,671744,null,0,i.f,[[3,i.a],[6,i.k],[8,null],[6,i.l],[2,i.v]],{name:[0,"name"]},null),e.Hb(2048,null,i.m,null,[i.f]),e.qb(36,16384,null,0,i.n,[[4,i.m]],null,null),e.qb(37,49152,null,0,s.F,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.gb(16777216,null,0,1,null,q)),e.qb(39,16384,null,0,a.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(41,0,null,null,12,"ion-item",[["color","#008000"]],null,null,null,t.z,t.k)),e.qb(42,49152,null,0,s.G,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(43,0,null,0,8,"ion-input",[["formControlName","password"],["id","password"],["placeholder","Password"],["style","font-size:17px; color:white;"],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var r=!0;return"ionBlur"===n&&(r=!1!==e.Db(l,46)._handleBlurEvent(u.target)&&r),"ionChange"===n&&(r=!1!==e.Db(l,46)._handleInputEvent(u.target)&&r),r}),t.y,t.j)),e.qb(44,16384,null,0,i.r,[],{required:[0,"required"]},null),e.Hb(1024,null,i.k,(function(l){return[l]}),[i.r]),e.qb(46,16384,null,0,s.Kb,[e.k],null,null),e.Hb(1024,null,i.l,(function(l){return[l]}),[s.Kb]),e.qb(48,671744,null,0,i.f,[[3,i.a],[6,i.k],[8,null],[6,i.l],[2,i.v]],{name:[0,"name"]},null),e.Hb(2048,null,i.m,null,[i.f]),e.qb(50,16384,null,0,i.n,[[4,i.m]],null,null),e.qb(51,49152,null,0,s.F,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.gb(16777216,null,0,1,null,f)),e.qb(53,16384,null,0,a.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(54,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(55,0,null,null,4,"ion-button",[["class","special-ion-button"],["color","danger"],["expand","block"],["style","color:rgb(255, 38, 0);height:30px;"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClick()&&e),e}),t.q,t.b)),e.qb(56,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),e.Kb(-1,0,[" Log In\xa0\xa0 "])),(l()(),e.rb(58,0,null,0,1,"ion-icon",[["name","Send"]],null,null,null,t.x,t.i)),e.qb(59,49152,null,0,s.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,22,0,u.loginForm),l(n,28,0,"#008000"),l(n,30,0,!0),l(n,34,0,"username"),l(n,37,0,!0,"Username",!0,"text"),l(n,39,0,!u.loginForm.get("username").valid&&(u.loginForm.get("username").dirty||u.loginForm.get("username").touched)),l(n,42,0,"#008000"),l(n,44,0,!0),l(n,48,0,"password"),l(n,51,0,!0,"Password",!0,"password"),l(n,53,0,!u.loginForm.get("password").valid&&(u.loginForm.get("password").dirty||u.loginForm.get("password").touched)),l(n,56,0,"danger",!u.loginForm.valid,"block","submit"),l(n,59,0,"Send")}),(function(l,n){l(n,20,0,e.Db(n,24).ngClassUntouched,e.Db(n,24).ngClassTouched,e.Db(n,24).ngClassPristine,e.Db(n,24).ngClassDirty,e.Db(n,24).ngClassValid,e.Db(n,24).ngClassInvalid,e.Db(n,24).ngClassPending),l(n,29,0,e.Db(n,30).required?"":null,e.Db(n,36).ngClassUntouched,e.Db(n,36).ngClassTouched,e.Db(n,36).ngClassPristine,e.Db(n,36).ngClassDirty,e.Db(n,36).ngClassValid,e.Db(n,36).ngClassInvalid,e.Db(n,36).ngClassPending),l(n,43,0,e.Db(n,44).required?"":null,e.Db(n,50).ngClassUntouched,e.Db(n,50).ngClassTouched,e.Db(n,50).ngClassPristine,e.Db(n,50).ngClassDirty,e.Db(n,50).ngClassValid,e.Db(n,50).ngClassInvalid,e.Db(n,50).ngClassPending)}))}function k(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"app-home",[],null,null,null,v,p)),e.qb(1,49152,null,0,h,[m.m,c.a,s.Lb,i.d],null,null)],null,null)}var y=e.nb("app-home",h,k,{},{},[]);u.d(n,"HomePageModuleNgFactory",(function(){return D}));var D=e.ob(r,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[o.a,y]],[3,e.j],e.v]),e.Bb(4608,a.m,a.l,[e.s,[2,a.v]]),e.Bb(4608,i.d,i.d,[]),e.Bb(4608,i.u,i.u,[]),e.Bb(4608,s.b,s.b,[e.x,e.g]),e.Bb(4608,s.Fb,s.Fb,[s.b,e.j,e.p]),e.Bb(4608,s.Jb,s.Jb,[s.b,e.j,e.p]),e.Bb(1073742336,a.b,a.b,[]),e.Bb(1073742336,i.t,i.t,[]),e.Bb(1073742336,i.q,i.q,[]),e.Bb(1073742336,i.i,i.i,[]),e.Bb(1073742336,s.Db,s.Db,[]),e.Bb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),e.Bb(1073742336,r,r,[]),e.Bb(1024,m.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);