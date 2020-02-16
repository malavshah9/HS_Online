(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #008000; width: 100%; height: 100%;\">\r\n  <h4 style=\"color:white;\" class=\"bottomRow2\">\r\n    {{draw_hour}}:{{draw_minute}} {{am_or_pm}}\r\n    &nbsp;&nbsp;{{remaining_minute}}:{{remaining_second}}&nbsp;&nbsp;&nbsp;{{current_date}}&nbsp;&nbsp;\r\n    &nbsp;{{current_hour}}:{{current_minute}}:{{current_second}}\r\n    <span style=\"margin-right: 10px;\">&nbsp;ID : {{userName}}&nbsp;&nbsp;</span\r\n    >&nbsp;<span\r\n      >&nbsp;&nbsp;BALANCE : Rs. {{myObj.UserBalance}} &nbsp;&nbsp;</span\r\n    >\r\n  </h4>\r\n  <ion-grid\r\n    style=\"height: 45%; width:80%;clear: both; margin-top: -10%;margin-left: initial;\"\r\n  >\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/1.jpeg\" width=\"50%\" height=\"45%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt1\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/2.jpeg\" width=\"50%\" height=\"45%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt2\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/3.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt3\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/4.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt4\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/5.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt5\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/6.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt6\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/7.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt7\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/8.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt8\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/9.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt9\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\">\r\n        <ion-card>\r\n          <img src=\"assets/icon/10.jpeg\" width=\"95%\" height=\"75%\" />\r\n          <ion-input\r\n            style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"txt0\"\r\n          ></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <span style=\"margin-left:5px; margin-top:-20%; width:20%\" class=\"my-span\">\r\n      <!-- <ion-label> -->\r\n        &nbsp;&nbsp;Win Amount: {{winBalance}}\r\n      <!-- </ion-label> -->\r\n      <br />\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"special-my-button\"\r\n        click=\"checkBalance()\"\r\n      >Check\r\n      </ion-button>\r\n      <br/>\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"special-my-button\"\r\n        click=\"takeBalance()\"\r\n      >Take\r\n      </ion-button>\r\n  </span>\r\n  <span style=\"margin-left:5px; margin-bottom:15%; width:22%; height: 35%;\" class=\"my-span\">\r\n    <ion-label>Last 5 Draw</ion-label><br>\r\n    <li *ngFor=\"let item of histories\">\r\n      {{item.DrawTime | myPipe }} &nbsp; {{item.YantraName}}\r\n    </li>\r\n  </span>\r\n  <div class=\"container\">\r\n    <div>\r\n      <ion-button\r\n        class=\"special-bottom-button\"\r\n        shape=\"round\"\r\n        color=\"tertiary\"\r\n        style=\"color:purple;\"\r\n        (click)=\"onLogout()\"\r\n      >\r\n        <ion-icon name=\"exit\"></ion-icon>Exit\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button\r\n        class=\"special-bottom-button\"\r\n        shape=\"round\"\r\n        color=\"danger\"\r\n        style=\"color:rgb(1.755, 38, 0);\"\r\n        (click)=\"onClear()\"\r\n      >\r\n        <ion-icon name=\"nuclear\"></ion-icon>Clear\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button\r\n        class=\"special-bottom-button\"\r\n        shape=\"round\"\r\n        color=\"dark\"\r\n        style=\"color:lightskyblue;\"\r\n        (click)=\"onJackpot()\"\r\n      >\r\n        <ion-icon name=\"filing\"></ion-icon>Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button\r\n        class=\"special-bottom-button\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        style=\"color:yellow;\"\r\n        (click)=\"onDoubleJackpot()\"\r\n      >\r\n        <ion-icon name=\"filing\"></ion-icon>Double Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button\r\n        class=\"special-bottom-button\"\r\n        shape=\"round\"\r\n        color=\"warning\"\r\n        style=\"color:black;\"\r\n        (click)=\"onSubmit()\"\r\n      >\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>Submit\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _shared_my_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/my-pipe.module */ "./src/app/shared/my-pipe.module.ts");








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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_my_pipe_module__WEBPACK_IMPORTED_MODULE_7__["MyPipeModule"]
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

module.exports = ".bottomRow {\n  margin-top: -2%;\n}\n\nion-col {\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\nion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  background-color: #008000;\n}\n\n.sc-ion-card-md-h {\n  box-shadow: none !important;\n}\n\n.bottomRow2 {\n  margin-left: 10px;\n}\n\nh4 {\n  margin-top: 0px;\n}\n\nimg {\n  border-radius: 10px;\n}\n\n.special-bottom-button {\n  height: 30px;\n}\n\n.special-my-button {\n  height: 30px;\n}\n\n.my-span {\n  background-color: white !important;\n}\n\n.container {\n  font-size: 12px;\n  display: grid;\n  grid-template-columns: 110px 125px 145px 215px 120px;\n  position: fixed;\n  left: 5px;\n  bottom: 0px;\n  right: 0;\n}\n\n.special-span {\n  margin-right: 40%;\n}\n\n.special-span2 {\n  margin-left: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxccHJvZ3JhbVxccHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxlQUFBO0FDRkY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURDQTtFQUdFLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBSUUsWUFBQTtBQ0RGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBRElBO0VBQ0Usa0NBQUE7QUNERjs7QURHQTtFQUVFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7RUFFQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0UsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tUm93IHtcclxuICAvLyBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gdG9wOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIlO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYm90dG9tUm93MiB7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAvLyBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmg0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxufVxyXG4uc3BlY2lhbC1ib3R0b20tYnV0dG9uIHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYm90dG9tOiAgIC03MHB4O1xyXG4gIC8vIGxlZnQ6IDUlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgLy8gZmxvYXQ6Ym90dG9tO1xyXG59XHJcbi5zcGVjaWFsLW15LWJ1dHRvbntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLm15LXNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAvLyBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMTI1cHggMTQ1cHggMjE1cHggMTIwcHg7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xyXG59XHJcbi5zcGVjaWFsLXNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNDAlO1xyXG59XHJcbi5zcGVjaWFsLXNwYW4yIHtcclxuICBtYXJnaW4tbGVmdDogNjUlO1xyXG4gIC8vIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi8vIGlvbi1pbnB1dHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgdG9wOjBweDtcclxuLy8gfVxyXG5pb24tZ3JpZCB7XHJcbiAgLy8gbWFyZ2luLXRvcDotNXB4O1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBib3R0b206IDEwcHg7XHJcbn1cclxuaDQge1xyXG4gIC8vIG1hcmdpbi10b3A6LTFweDtcclxufVxyXG4iLCIuYm90dG9tUm93IHtcbiAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ib3R0b21Sb3cyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3BlY2lhbC1ib3R0b20tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc3BlY2lhbC1teS1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5teS1zcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMTBweCAxMjVweCAxNDVweCAyMTVweCAxMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1cHg7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbn1cblxuLnNwZWNpYWwtc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNDAlO1xufVxuXG4uc3BlY2lhbC1zcGFuMiB7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG59Il19 */"

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
/* harmony import */ var _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/my-pipe.pipe */ "./src/app/shared/my-pipe.pipe.ts");












let ProgramPage = class ProgramPage {
    constructor(route, statusBar, screenOrientation, userDb, programDb, alertController, toastController, zone, MyPipe) {
        this.route = route;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.userDb = userDb;
        this.programDb = programDb;
        this.alertController = alertController;
        this.toastController = toastController;
        this.zone = zone;
        this.MyPipe = MyPipe;
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
        this.winBalance = 0;
        this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
        this.userId = localStorage.getItem('UserId');
        this.myObj = new _shared_Balance_class__WEBPACK_IMPORTED_MODULE_1__["Balance"](true, "", "");
        this.getBalance();
        this.histories = [];
    }
    ngOnInit() {
        this.setTime();
        setInterval(() => {
            this.setTime();
            this.get5History();
        }, 1000);
        // this.getBalance();
    }
    get5History() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userDb.getHistory().subscribe((data) => {
                this.histories = data.slice(0, 5);
            });
        });
    }
    getBalance() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => {
                this.userDb.getBalance(this.userId).subscribe((data) => {
                    this.myObj = data;
                });
            });
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
    takeBalance() {
        this.userDb.takeBalance(localStorage.getItem("UserId")).subscribe((data) => {
            this.winBalance = data;
        });
    }
    checkBalance() {
        this.userDb.checkBalance(localStorage.getItem("UserId")).subscribe((data) => {
            this.winBalance = data;
        });
    }
    ionViewWillEnter() {
        this.statusBar.hide();
        this.userName = localStorage.getItem('UserName');
        this.getBalance();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.batting_type = "Normal";
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
                    this.getBalance();
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_11__["MyPipePipe"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_11__["MyPipePipe"]])
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