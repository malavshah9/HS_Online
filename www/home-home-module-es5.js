(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"center-class\" style=\" background-color:#008000 !important;height:100%;width:100%;\">\r\n    \r\n    <!-- <h2 style=\"color: yellow;\">HONEST</h2>  \r\n    <h3>&nbsp;Log In to Your Account</h3>\r\n         <ion-item color=\"#008000\">\r\n          <ion-input  style=\"font-size:17px; color:white;\" placeholder=\"Email Id\" type=\"text\" [(ngModel)]=\"name\" [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-item color=\"#008000\" >\r\n          <ion-input  style=\"font-size:17px; color:white;\" [clearInput]=\"true\"  placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n       <br>\r\n        <ion-button expand=\"block\" color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n          Log In&nbsp;&nbsp;\r\n          <ion-icon name=\"Send\"></ion-icon>\r\n        </ion-button> -->\r\n        <ion-grid>\r\n          <ion-row justify-content-center align-items-center style='height: 100%; text-align: center; margin-bottom: 40%;'><ion-col><h1 style=\"color: yellow;\">HONEST</h1> </ion-col></ion-row>\r\n          <ion-row justify-content-center align-items-center style='height: 100%; margin-bottom: 90%; text-align: center;'>\r\n          \r\n          <!-- <ion-col col-2></ion-col>  -->\r\n          <ion-col>   \r\n            <h3>&nbsp;Log In</h3>\r\n                 <ion-item color=\"#008000\">\r\n                  <ion-input  style=\"font-size:17px; color:white;\" placeholder=\"Email Id\" type=\"text\" [(ngModel)]=\"name\" [required]=\"true\"></ion-input>\r\n                </ion-item>\r\n                <br>\r\n                <ion-item color=\"#008000\" >\r\n                  <ion-input  style=\"font-size:17px; color:white;\" [clearInput]=\"true\"  placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"\r\n                    [required]=\"true\"></ion-input>\r\n                </ion-item>\r\n               <br>\r\n                <ion-button class=\"special-ion-button\" expand=\"block\" color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n                  Log In&nbsp;&nbsp;\r\n                  <ion-icon name=\"Send\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>    \r\n          <!-- <ion-col col-3></ion-col> -->\r\n          </ion-row>\r\n          </ion-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(route) {
        this.route = route;
    }
    HomePage.prototype.onClick = function () {
        this.route.navigateByUrl('/dashboard');
    };
    HomePage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map