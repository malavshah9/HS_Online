(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #008000; width: 100%; height: 100%;\">\r\n  <h4 style=\"color:white;\" class=\"bottomRow2\">{{draw_hour}}:{{draw_minute}} {{am_or_pm}} &nbsp;&nbsp;{{remaining_minute}}:{{remaining_second}}&nbsp;&nbsp;&nbsp;{{current_date}}&nbsp;&nbsp;  &nbsp;{{current_hour}}:{{current_minute}}:{{current_second}}\r\n    <span  style=\"margin-right: 10px;\">&nbsp;ID : {{userName}}&nbsp;&nbsp;</span>&nbsp;<span>&nbsp;&nbsp;BALANCE : Rs. {{myObj.UserBalance}}  &nbsp;&nbsp;</span></h4>\r\n    <ion-grid style=\"height: 55%; width:100%;clear: both; margin-top: -10%\">\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/1.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt1\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/2.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt2\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/3.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt3\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/4.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt4\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/5.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt5\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/6.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt6\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/7.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt7\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/Tara.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt8\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/9.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt9\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/10.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt0\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"container\">\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"tertiary\" style=\"color:purple;\"\r\n        (click)=\"onLogout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>Exit\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"danger\" style=\"color:rgb(1.755, 38, 0);\"\r\n        (click)=\"onClear()\">\r\n        <ion-icon name=\"nuclear\"></ion-icon>Clear\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"dark\" style=\"color:lightskyblue;\"\r\n        (click)=\"onJackpot()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"primary\" style=\"color:yellow;\"\r\n        (click)=\"onDoubleJackpot()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Double Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"warning\" style=\"color:black;\" (click)=\"onSubmit()\">\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>Submit\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program.page */ "./src/app/program/program.page.ts");







const routes = [
    {
        path: '',
        component: _program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]
    }
];
let ProgramPageModule = class ProgramPageModule {
};
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
/* harmony import */ var _shared_Balance_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Balance_class */ "./src/app/shared/Balance_class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");
/* harmony import */ var _services_program_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/program-db.service */ "./src/app/services/program-db.service.ts");
/* harmony import */ var _shared_draw_type_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/draw_type_class */ "./src/app/shared/draw_type_class.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);











let ProgramPage = class ProgramPage {
    constructor(route, statusBar, screenOrientation, userDb, programDb, alertController, toastController) {
        this.route = route;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.userDb = userDb;
        this.programDb = programDb;
        this.alertController = alertController;
        this.toastController = toastController;
        this.draw_hour = "0";
        this.draw_minute = "0";
        this.am_or_pm = "";
        this.current_date = "0";
        this.current_hour = "0";
        this.current_minute = "0";
        this.current_second = "0";
        this.remaining_minute = "";
        this.remaining_second = "";
        this.batting_type = "Normal";
        this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
        this.userId = localStorage.getItem('UserId');
        this.myObj = new _shared_Balance_class__WEBPACK_IMPORTED_MODULE_1__["Balance"](true, "", "");
        this.getBalance();
    }
    ngOnInit() {
        this.setTime();
        setInterval(() => {
            this.setTime();
        }, 1000);
        this.getBalance();
    }
    getBalance() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(" getBalance() called");
            this.userDb.getBalance(this.userId).subscribe((data) => {
                console.log(data);
                this.myObj = data;
                console.log(" myObj ", this.myObj);
                // this.userBalance  = data.UserBalance;
            });
            console.log(" myObj ", this.myObj);
        });
    }
    setTime() {
        this.setDrawTimer();
        this.setCurrentTime();
        this.setDifferenceTime();
        this.setCurrentDate();
    }
    setCurrentDate() {
        let date = new Date().getDate();
        date = date <= 9 ? "0" + date.toString() : date.toString();
        let month = new Date().getUTCMonth() + 1;
        month = month <= 9 ? "0" + month.toString() : month.toString();
        let year = new Date().getFullYear();
        this.current_date = date + "-" + month + "-" + year;
    }
    setDifferenceTime() {
        let delta = Math.abs(+new Date(this.draw_time) - (+new Date(this.current_time))) / 1000;
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        let seconds = delta % 60;
        this.remaining_minute = minutes <= 9 ? "0" + minutes : minutes.toString();
        this.remaining_second = seconds <= 9 ? "0" + seconds : seconds.toString();
    }
    setDrawTimer() {
        let today = new Date();
        let minute = today.getMinutes();
        if (minute >= 45 && minute <= 59) {
            this.draw_hour = new Date(new Date().setHours(new Date().getHours() + 1)).getHours().toString();
            // this.draw_hour=this.addHours(today,1);
        }
        else {
            this.draw_hour = today.getHours().toString();
        }
        let draw_hour_number = +this.draw_hour;
        this.am_or_pm = draw_hour_number >= 12 ? "PM" : "AM";
        let number_hour = +this.draw_hour;
        number_hour = number_hour % 12;
        number_hour = number_hour ? number_hour : 12;
        this.draw_hour = number_hour <= 9 ? "0" + number_hour + "" : number_hour.toString();
        let currentMinutes = today.getMinutes();
        if (currentMinutes >= 0 && currentMinutes <= 14) {
            this.draw_minute = "15";
        }
        else if (currentMinutes >= 15 && currentMinutes <= 29) {
            this.draw_minute = "30";
        }
        else if (currentMinutes >= 30 && currentMinutes <= 44) {
            this.draw_minute = "45";
        }
        else {
            this.draw_minute = "00";
        }
        let draw_minute_number = +this.draw_minute;
        this.draw_time = new Date().setHours(draw_hour_number, draw_minute_number, 0);
    }
    setCurrentTime() {
        let date = new Date();
        let hours = date.getHours();
        hours = hours % 12;
        hours = hours ? hours : 12;
        this.current_hour = hours <= 9 ? '0' + hours.toString() : hours.toString();
        this.current_minute = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
        this.current_second = date.getSeconds() < 10 ? "0" + date.getSeconds().toString() : date.getSeconds().toString();
        this.current_time = date.getTime();
    }
    addHours(date, hour) {
        let anotherDay = date.setTime(date.getTime() + (hour * 60 * 60 * 100));
        let dateAnother = new Date(anotherDay);
        return dateAnother.getHours().toString();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.statusBar.hide();
            this.userName = localStorage.getItem('UserName');
            this.getBalance();
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            this.batting_type = "Normal";
            // setInterval(()=>{
            //   this.getBalance();
            // },2000);
        });
    }
    ionViewDidLoad() {
        // setInterval(()=>{
        //   this.getBalance();
        // },2000);
    }
    onLogout() {
        this.route.navigateByUrl('/dashboard');
    }
    onDoubleJackpot() {
        this.route.navigateByUrl('/double-jackpot');
    }
    isNullOrZero() {
        if (Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt1) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt2) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt3) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt4) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt5) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt6) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt7) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt8) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt9) && Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(this.txt0)) {
            return true;
        }
        else if (this.txt0 === 0 || this.txt1 === 0 || this.txt2 === 0 || this.txt3 === 0 || this.txt4 === 0
            || this.txt8 === 0 || this.txt7 === 0 || this.txt6 === 0 || this.txt5 === 0 || this.txt9 === 0) {
            return true;
        }
        return false;
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const battingAlert = yield this.alertController.create({
                buttons: ['OK']
            });
            if (this.isNullOrZero()) {
                battingAlert.message = "Enter Proper Ticket Quantity!";
                battingAlert.present();
            }
            else {
                this.programDb.submitDraw(new _shared_draw_type_class__WEBPACK_IMPORTED_MODULE_8__["DrawType"](Number(this.txt1), Number(this.txt2), Number(this.txt3), Number(this.txt4), Number(this.txt5), Number(this.txt6), Number(this.txt7), Number(this.txt8), Number(this.txt9), Number(this.txt0), Number(localStorage.getItem('UserId')), this.batting_type)).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (data.result) {
                        battingAlert.message = "Batting Successfully!!!";
                        yield this.getBalance();
                    }
                    else if (data.reason == 405) {
                        battingAlert.message = "Low Balance!!!";
                    }
                    else {
                        battingAlert.message = "Batting Unsuccessfully!!!";
                    }
                    battingAlert.present();
                }), (err) => {
                    console.log(err);
                }, () => {
                    this.batting_type = "Normal";
                });
            }
            this.onClear();
        });
    }
    onJackpot() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please enter ticket',
                inputs: [
                    {
                        name: 'ticket',
                        type: 'number',
                        placeholder: 'Please enter ticket'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const ticket = data.ticket;
                            const battingAlert = yield this.alertController.create({
                                buttons: ['OK']
                            });
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_10__["isNull"])(ticket) && ticket !== 0) {
                                this.txt1 = ticket;
                                this.txt2 = ticket;
                                this.txt3 = ticket;
                                this.txt4 = ticket;
                                this.txt5 = ticket;
                                this.txt6 = ticket;
                                this.txt7 = ticket;
                                this.txt8 = ticket;
                                this.txt9 = ticket;
                                this.txt0 = ticket;
                                this.batting_type = "Jackpot";
                            }
                            else {
                                battingAlert.message = "Enter Proper Ticket Quantity!";
                                battingAlert.present();
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    onClear() {
        this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
    }
};
ProgramPage.ctorParameters = () => [
    { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"] },
    { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_6__["UserDbService"] },
    { type: _services_program_db_service__WEBPACK_IMPORTED_MODULE_7__["ProgramDbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] }
];
ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-program',
        template: __webpack_require__(/*! raw-loader!./program.page.html */ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html"),
        styles: [__webpack_require__(/*! ./program.page.scss */ "./src/app/program/program.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"],
        _services_user_db_service__WEBPACK_IMPORTED_MODULE_6__["UserDbService"],
        _services_program_db_service__WEBPACK_IMPORTED_MODULE_7__["ProgramDbService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]])
], ProgramPage);



/***/ }),

/***/ "./src/app/shared/Balance_class.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/Balance_class.ts ***!
  \*****************************************/
/*! exports provided: Balance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return Balance; });
class Balance {
    constructor(result, reason, UserBalance) {
        this.result = result;
        this.reason = reason;
        this.UserBalance = UserBalance;
    }
}
Balance.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/draw_type_class.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/draw_type_class.ts ***!
  \*******************************************/
/*! exports provided: DrawType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawType", function() { return DrawType; });
class DrawType {
    constructor(txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt0, UserId, dt) {
        this.txt1 = txt1;
        this.txt2 = txt2;
        this.txt3 = txt3;
        this.txt4 = txt4;
        this.txt5 = txt5;
        this.txt6 = txt6;
        this.txt7 = txt7;
        this.txt8 = txt8;
        this.txt9 = txt9;
        this.txt0 = txt0;
        this.UserId = UserId;
        this.dt = dt;
    }
}
DrawType.ctorParameters = () => [
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: String }
];


/***/ })

}]);
//# sourceMappingURL=program-program-module-es2015.js.map