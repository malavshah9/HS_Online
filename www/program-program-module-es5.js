(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div style=\"background-color: #008000; width: 100%; height: 100%;\">\r\n    <h4 style=\"color:white;\" class=\"bottomRow2\">{{draw_hour}}:{{draw_minute<=9?draw_minute+'0' : draw_minute}} {{am_or_pm}} &nbsp;&nbsp;{{remaining_minute}}:03&nbsp;{{current_date}}  &nbsp;{{current_hour}}:{{current_minute}}:{{current_second}}\r\n      <span  style=\"margin-right: 10px;\">&nbsp;ID : {{userName}}&nbsp;&nbsp;</span>&nbsp;<span>&nbsp;&nbsp;BALANCE : 0 &nbsp;&nbsp;</span></h4>\r\n      <ion-grid style=\"height: 55%; width:100%;clear: both; margin-top: -10%\">\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/1.jpeg\"  width=\"95%\" height=\"75%\" />\r\n          <ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/2.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/3.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/4.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/5.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"bottomRow\">\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/6.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/7.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/8.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/9.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/10.jpeg\"  width=\"95%\" height=\"75%\" />\r\n<ion-input  style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"container\">  \r\n      <div><ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"tertiary\" style=\"color:purple;\" (click)=\"onLogout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>Exit\r\n      </ion-button></div>  \r\n      <div><ion-button class=\"special-bottom-button\" shape=\"round\" color=\"danger\" style=\"color:rgb(1.755, 38, 0);\" (click)=\"onpro()\">\r\n        <ion-icon name=\"nuclear\"></ion-icon>Clear\r\n        </ion-button></div>  \r\n      <div><ion-button class=\"special-bottom-button\" shape=\"round\" color=\"dark\"  style=\"color:lightskyblue;\" (click)=\"onChange()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Jackpot\r\n        </ion-button></div>  \r\n      <div><ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"primary\" style=\"color:yellow;\" (click)=\"onPurchased()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Double Jackpot\r\n        </ion-button></div>  \r\n      <div><ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"warning\" style=\"color:black;\" (click)=\"onLogout()\">\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>Submit \r\n        </ion-button></div>  \r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/program/program.module.ts":
/*!*******************************************!*\
  !*** ./src/app/program/program.module.ts ***!
  \*******************************************/
/*! exports provided: ProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPageModule", function() { return ProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program.page */ "./src/app/program/program.page.ts");







var routes = [
    {
        path: '',
        component: _program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]
    }
];
var ProgramPageModule = /** @class */ (function () {
    function ProgramPageModule() {
    }
    ProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]]
        })
    ], ProgramPageModule);
    return ProgramPageModule;
}());



/***/ }),

/***/ "./src/app/program/program.page.scss":
/*!*******************************************!*\
  !*** ./src/app/program/program.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomRow {\n  margin-top: -2%;\n}\n\n.bottomRow2 {\n  margin-left: 10px;\n}\n\nh4 {\n  margin-top: 0px;\n}\n\nimg {\n  border-radius: 10px;\n  background-color: #008000;\n}\n\n.special-bottom-button {\n  height: 30px;\n}\n\n.container {\n  font-size: 12px;\n  display: grid;\n  grid-template-columns: 110px 125px 145px 215px 120px;\n  position: fixed;\n  left: 5px;\n  bottom: 0px;\n  right: 0;\n}\n\n.special-span {\n  margin-right: 40%;\n}\n\n.special-span2 {\n  margin-left: 65%;\n}\n\nion-input {\n  position: relative;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxccHJvZ3JhbVxccHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLRSxlQUFBO0FDSEY7O0FES0E7RUFJRSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0hGOztBREtBO0VBSUUsWUFBQTtBQ0xGOztBRFNBO0VBRUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUVBLGVBQUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNSSjs7QURXQTtFQUNFLGlCQUFBO0FDUkY7O0FEVUE7RUFDRSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbVJvd1xyXG57XHJcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHRvcDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yJTtcclxufVxyXG4uYm90dG9tUm93MlxyXG57XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAvLyBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmg0e1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xyXG59XHJcbi5zcGVjaWFsLWJvdHRvbS1idXR0b257XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGJvdHRvbTogICAtNzBweDtcclxuICAvLyBsZWZ0OiA1JTtcclxuICBoZWlnaHQ6MzBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgLy8gZmxvYXQ6Ym90dG9tO1xyXG59XHJcbi5jb250YWluZXIgeyAgXHJcbiAgLy8gbWFyZ2luLWxlZnQ6MTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZ3JpZDsgIFxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMTI1cHggMTQ1cHggMjE1cHggMTIwcHg7ICBcclxuICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDUwcHg7ICBcclxufVxyXG4uc3BlY2lhbC1zcGFue1xyXG4gIG1hcmdpbi1yaWdodDogNDAlO1xyXG59XHJcbi5zcGVjaWFsLXNwYW4ye1xyXG4gIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MHB4O1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIC8vIG1hcmdpbi10b3A6LTVweDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYm90dG9tOiAxMHB4O1xyXG59XHJcbmg0e1xyXG4gIC8vIG1hcmdpbi10b3A6LTFweDtcclxufSIsIi5ib3R0b21Sb3cge1xuICBtYXJnaW4tdG9wOiAtMiU7XG59XG5cbi5ib3R0b21Sb3cyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xufVxuXG4uc3BlY2lhbC1ib3R0b20tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExMHB4IDEyNXB4IDE0NXB4IDIxNXB4IDEyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDVweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc3BlY2lhbC1zcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG59XG5cbi5zcGVjaWFsLXNwYW4yIHtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbn1cblxuaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/program/program.page.ts":
/*!*****************************************!*\
  !*** ./src/app/program/program.page.ts ***!
  \*****************************************/
/*! exports provided: ProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPage", function() { return ProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var ProgramPage = /** @class */ (function () {
    // draw_hour:number=0;
    // draw_minute:number=0;
    // am_or_pm:string="";
    // current_date:string="";
    // current_hour:number=0;
    // current_minute:number=0;
    // current_second:number=0;
    // remaining_minute:number=0;
    // remaining_second:number=0;
    // dateInterval:number=0;
    function ProgramPage(route, statusBar, screenOrientation) {
        this.route = route;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.userName = localStorage.getItem('UserName');
    }
    ProgramPage.prototype.ngOnInit = function () {
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        // this.setDrawTimer();
        // this.setCurrentDate();
        // this.setCurrentTime();
        // setInterval(()=>{
        //   this.setCurrentTime();
        // },1000);
        // setInterval(()=>{
        //   this.setDrawTimer();
        // },this.remaining_minute*1000);
        // setInterval(()=>{
        //   this.setCurrentDate();
        // },this.dateInterval)
    };
    // setDrawTimer(){
    //   let today=new Date();
    //   let minute=today.getMinutes();
    //   if(minute>=45 && minute<=59){
    //     this.draw_hour=this.addHours(today,1);
    //   }
    //   else{
    //     this.draw_hour=today.getHours();
    //   }
    //   this.am_or_pm=this.draw_hour>=12?"PM":"AM";
    //   let number_hour=+this.draw_hour;
    //   number_hour=number_hour%12;
    //   number_hour=number_hour?number_hour:12;
    //   // this.draw_hour=number_hour<=9?'0'+number_hour.toString():number_hour.toString();
    //   console.log(" this.draw_hour ",this.draw_hour);
    //   let currentMinutes=today.getMinutes();
    //   if(currentMinutes>=0 && currentMinutes<=14){
    //     this.draw_minute=15;
    //   }
    //   else if(currentMinutes>=15 && currentMinutes<=29){
    //     this.draw_minute=30;
    //   }
    //   else if(currentMinutes>=30 && currentMinutes<=44){
    //     this.draw_minute=45;
    //   }
    //   else{
    //     this.draw_minute=0;
    //   }
    // }
    // setCurrentTime(){
    //   let date = new Date();
    //   let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //   let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //   let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //   hours=hours%12;
    //   hours=hours?hours:12;
    //   // this.current_hour=hours<=9?'0'+hours.toString():hours.toString();
    //   // this.current_minute=minutes.toString();
    //   // this.current_second=seconds.toString();
    //   let number_draw_minute=+this.draw_minute;
    //   let remain_minute=number_draw_minute-minutes;
    //   this.remaining_minute=remain_minute;
    //   // this.remaining_second="";
    // }
    // setCurrentDate(){
    //   let today = new Date(); 
    //   let dd = today.getDate(); 
    //   let mm = today.getMonth() + 1; 
    //   let yyyy = today.getFullYear(); 
    //       if (dd < 10) { 
    //           dd = '0' + dd; 
    //       } 
    //       if (mm < 10) { 
    //           mm = '0' + mm; 
    //       }
    //   this.current_date='  '+dd + '-' + mm + '-' + yyyy;
    //   let nextDay:Date=new Date(today.getDate()+1);
    //   nextDay.setHours(0,0,0,0);
    //   // this.dateInterval=(new Date(nextDay-new Date()).getHours()*60)+(new Date(nextDay-new Date()).getMinutes());
    //   console.log("dateInterval ",this.dateInterval);
    // }
    // addHours(date:Date,hour){
    //   let anotherDay=date.setTime(date.getTime()+(hour*60*60*100));
    //   let dateAnother:Date=new Date(anotherDay);
    //   console.log(" anotherDay ",anotherDay);
    //   return dateAnother.getHours().toString();
    // }
    ProgramPage.prototype.ionViewWillEnter = function () {
        this.statusBar.hide();
        // this.statusBar.overlaysWebView(true);
        // this.statusBar.backgroundColorByHexString("#008000");
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    };
    ProgramPage.prototype.ionViewWillLeave = function () {
        // this.statusBar.show();
        // this.statusBar.styleDefault();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    ProgramPage.prototype.onLogout = function () {
        this.route.navigateByUrl('/dashboard');
    };
    ProgramPage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] }
    ]; };
    ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! raw-loader!./program.page.html */ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html"),
            styles: [__webpack_require__(/*! ./program.page.scss */ "./src/app/program/program.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"]])
    ], ProgramPage);
    return ProgramPage;
}());



/***/ })

}]);
//# sourceMappingURL=program-program-module-es5.js.map