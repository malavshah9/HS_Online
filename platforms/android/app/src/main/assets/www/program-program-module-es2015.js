(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content> -->\r\n  <div style=\"background-color: #008000; height: 100%; width:100%;\">\r\n    <h4 style=\"color:white; text-align: center;\">12:30 PM &nbsp; &nbsp; 11:03 &nbsp;&nbsp;12-01-2020  &nbsp;&nbsp; 1.9:18:57 \r\n    <span>ID : Parth</span>&nbsp;&nbsp;&nbsp;<span>BALANCE : 0</span></h4>  \r\n    <ion-grid style=\"height: 60%; width:100%;\">\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/1.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input  style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/2.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/3.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/4.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/5.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"bottomRow\">\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/6.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/7.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/8.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/9.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n          <img src=\"assets/icon/10.jpeg\"  width=\"95%\" height=\"45%\" />\r\n          <ion-input style=\"background-color: black; margin-left: 25%; width:50%; border-radius: 40px; text-align: center; color: white;\" type=\"number\"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n<ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"tertiary\" style=\"color:purple;height:30px;\" (click)=\"onLogout()\">\r\n  <ion-icon name=\"exit\"></ion-icon>Exit\r\n</ion-button>\r\n<ion-button class=\"special-bottom-button\" shape=\"round\" color=\"danger\" style=\"color:rgb(1.745, 38, 0);height:30px;\" (click)=\"onpro()\">\r\n<ion-icon name=\"nuclear\"></ion-icon>&nbsp;Clear\r\n</ion-button>\r\n<ion-button class=\"special-bottom-button\" shape=\"round\" color=\"dark\"  style=\"color:lightskyblue;height:30px;\" (click)=\"onChange()\">\r\n<ion-icon name=\"filing\"></ion-icon>&nbsp;Jackpot\r\n</ion-button>\r\n<ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"primary\" style=\"color:yellow;height:30px;\" (click)=\"onPurchased()\">\r\n<ion-icon name=\"filing\"></ion-icon>&nbsp;Double Jackpot\r\n</ion-button>\r\n<ion-button class=\"special-bottom-button\" shape=\"round\"  color=\"warning\" style=\"color:black;height:30px;\" (click)=\"onPurchased()\">\r\n<ion-icon name=\"checkbox-outline\"></ion-icon>&nbsp; Submit \r\n</ion-button>\r\n</div>\r\n<!-- </ion-content> -->\r\n"

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

module.exports = ".bottomRow {\n  margin-top: -60px;\n}\n\nimg {\n  border-radius: 10px;\n}\n\n.special-bottom-button {\n  position: relative;\n  bottom: -55px;\n  left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxccHJvZ3JhbVxccHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tUm93XHJcbntcclxuICBtYXJnaW4tdG9wOiAtNjBweDtcclxufVxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc3BlY2lhbC1ib3R0b20tYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206ICAgLTU1cHg7XHJcbiAgbGVmdDogNSU7XHJcbn0iLCIuYm90dG9tUm93IHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zcGVjaWFsLWJvdHRvbS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTU1cHg7XG4gIGxlZnQ6IDUlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");




let ProgramPage = class ProgramPage {
    constructor(route, screenOrientation) {
        this.route = route;
        this.screenOrientation = screenOrientation;
    }
    ngOnInit() {
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ionViewWillEnter() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ionViewWillLeave() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    onLogout() {
        this.route.navigateByUrl('/dashboard');
    }
};
ProgramPage.ctorParameters = () => [
    { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] }
];
ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program',
        template: __webpack_require__(/*! raw-loader!./program.page.html */ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html"),
        styles: [__webpack_require__(/*! ./program.page.scss */ "./src/app/program/program.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"]])
], ProgramPage);



/***/ })

}]);
//# sourceMappingURL=program-program-module-es2015.js.map