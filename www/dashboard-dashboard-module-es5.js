(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div style=\"background-color: #008000!important;height:100%;width:100%;text-align: center;\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 10%;'>\r\n        <ion-col>\r\n          <h3 style=\"color: white;\">Welcome : Parth</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 40%;'>\r\n      <!-- <ion-col col-2></ion-col>  -->\r\n      <ion-col> \r\n    \r\n  <ion-button class=\"special-ion-button\" expand='block'   color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onpro()\">\r\n    <ion-icon name=\"albums\"></ion-icon>&nbsp;Program\r\n  \r\n  </ion-button>\r\n <br>\r\n  <ion-button class=\"special-ion-button\" expand='block'  color=\"dark\"  style=\"color:lightskyblue;height:30px;\" (click)=\"onChange()\">\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>&nbsp;Change Password\r\n    \r\n  </ion-button>\r\n<br>\r\n  <ion-button class=\"special-ion-button\" expand='block'   color=\"primary\" style=\"color:yellow;height:30px;\" (click)=\"onPurchased()\">\r\n    <ion-icon name=\"filing\"></ion-icon>&nbsp;Purchased History \r\n   \r\n  </ion-button>\r\n<br>\r\n<ion-button class=\"special-ion-button\" expand='block'  color=\"warning\" style=\"color:black;height:30px;\" (click)=\"onPurchased()\">\r\n  <ion-icon name=\"filing\"></ion-icon>&nbsp; Last Draw \r\n   \r\n </ion-button>\r\n<br>\r\n  <ion-button class=\"special-ion-button\" expand='block'   color=\"tertiary\" style=\"color:purple;height:30px;\" (click)=\"onLogout()\">\r\n    <ion-icon name=\"exit\"></ion-icon>&nbsp;  Log Out\r\n    \r\n  </ion-button>\r\n</ion-col>    \r\n<!-- <ion-col col-3></ion-col> -->\r\n</ion-row>\r\n</ion-grid>\r\n </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardPage = /** @class */ (function () {
    function DashboardPage(route) {
        this.route = route;
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.onPurchased = function () {
        this.route.navigateByUrl('/purchased');
    };
    DashboardPage.prototype.onpro = function () {
        this.route.navigateByUrl('/program');
    };
    DashboardPage.prototype.onChange = function () {
        this.route.navigateByUrl('/changepass');
    };
    DashboardPage.prototype.onLogout = function () {
        this.route.navigateByUrl('');
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map