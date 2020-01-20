(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepass-changepass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/changepass/changepass.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content> -->\r\n  <div style=\"background-color: #008000!important;height:100%;width:100%;text-align: center;vertical-align:middle;\">\r\n    <ion-grid>\r\n      \r\n      <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 20%;'>\r\n        \r\n      <!-- <ion-col col-2></ion-col>  -->\r\n      <ion-col> \r\n    <h3>&nbsp;Reset Password</h3>\r\n      </ion-col></ion-row>\r\n      <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 20%;'>\r\n        <h4><span>&nbsp;ID : Parth&nbsp;&nbsp;</span></h4>\r\n      </ion-row>\r\n    <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 20%;'>\r\n      <ion-col>\r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" style=\"font-size:17px; color:white;\" placeholder=\" Old Password\" type=\"password\" [(ngModel)]=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" style=\"font-size:17px; color:white;\" placeholder=\"New Password\" type=\"password\" [(ngModel)]=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" style=\"font-size:17px; color:white;\" placeholder=\"Confirm Password\" type=\"password\" [(ngModel)]=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n       <br>\r\n        <ion-button   color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n          Change&nbsp;&nbsp;\r\n          <ion-icon name=\"Send\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button   color=\"primary\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n          Cancel&nbsp;&nbsp;\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-button>\r\n        \r\n  </ion-col></ion-row></ion-grid>\r\n\r\n    \r\n</div>\r\n<!-- </ion-content> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/changepass/changepass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/changepass/changepass.module.ts ***!
  \*************************************************/
/*! exports provided: ChangepassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPageModule", function() { return ChangepassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changepass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepass.page */ "./src/app/changepass/changepass.page.ts");







const routes = [
    {
        path: '',
        component: _changepass_page__WEBPACK_IMPORTED_MODULE_6__["ChangepassPage"]
    }
];
let ChangepassPageModule = class ChangepassPageModule {
};
ChangepassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_changepass_page__WEBPACK_IMPORTED_MODULE_6__["ChangepassPage"]]
    })
], ChangepassPageModule);



/***/ }),

/***/ "./src/app/changepass/changepass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/changepass/changepass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3MvY2hhbmdlcGFzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/changepass/changepass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/changepass/changepass.page.ts ***!
  \***********************************************/
/*! exports provided: ChangepassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPage", function() { return ChangepassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ChangepassPage = class ChangepassPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    onClick() {
        this.route.navigateByUrl('/dashboard');
    }
};
ChangepassPage.ctorParameters = () => [
    { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChangepassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepass',
        template: __webpack_require__(/*! raw-loader!./changepass.page.html */ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html"),
        styles: [__webpack_require__(/*! ./changepass.page.scss */ "./src/app/changepass/changepass.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChangepassPage);



/***/ })

}]);
//# sourceMappingURL=changepass-changepass-module-es2015.js.map