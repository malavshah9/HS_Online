(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"center-class\" style=\" background-color:#008000 !important; height: 100%; width: 100%;\">\r\n    \r\n    <!-- <h2 style=\"color: yellow;\">HONEST</h2>  \r\n    <h3>&nbsp;Log In to Your Account</h3>\r\n         <ion-item color=\"#008000\">\r\n          <ion-input  style=\"font-size:17px; color:white;\" placeholder=\"Email Id\" type=\"text\" [(ngModel)]=\"name\" [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-item color=\"#008000\" >\r\n          <ion-input  style=\"font-size:17px; color:white;\" [clearInput]=\"true\"  placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n       <br>\r\n        <ion-button expand=\"block\" color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n          Log In&nbsp;&nbsp;\r\n          <ion-icon name=\"Send\"></ion-icon>\r\n        </ion-button> -->\r\n        <ion-grid>\r\n          <ion-row justify-content-center align-items-center><img src=\"../../assets/icon/icon.png\" height=\"30%\" width=\"30%\" style=\"margin-top: 25%;\" /></ion-row>\r\n          <ion-row justify-content-center align-items-center style='text-align: center;'><ion-col><span style=\"color: yellow; font-size: 30px; text-align: center; float: none; background-color: #008000;\">HONEST</span> <br></ion-col></ion-row>\r\n          <ion-row justify-content-center align-items-center style='text-align: center;'>\r\n          \r\n          <!-- <ion-col col-2></ion-col>  -->\r\n          <ion-col>   \r\n            <form [formGroup]=\"loginForm\">\r\n            <h3>&nbsp;Log In</h3>\r\n                 <ion-item color=\"#008000\">\r\n                  <ion-input  style=\"font-size:17px; color:white;\" [clearInput]=\"true\" formControlName=\"username\" id=\"username\" placeholder=\"Username\" type=\"text\" [required]=\"true\"></ion-input>\r\n                  <div class=\"error\" *ngIf=\"!loginForm.get('username').valid &&\r\n                  (loginForm.get('username').dirty || loginForm.get('username').touched)\">  \r\n                  User Name is required.\r\n                  </div>\r\n                </ion-item>\r\n                <br>\r\n                <ion-item color=\"#008000\" >\r\n                  <ion-input  style=\"font-size:17px; color:white;\" [clearInput]=\"true\" formControlName=\"password\" id=\"password\" placeholder=\"Password\" type=\"password\" [required]=\"true\"></ion-input>\r\n                  <div class=\"error\" *ngIf=\"!loginForm.get('password').valid &&\r\n                  (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                    Password is required.\r\n                  </div>\r\n                </ion-item>\r\n               <br>\r\n               <!-- [disabled]=\"!loginForm.valid\" -->\r\n                <ion-button class=\"special-ion-button\" [disabled]=\"!loginForm.valid\"  expand=\"block\" color=\"danger\" type=\"submit\" style=\"color:rgb(255, 38, 0);height:30px;\" (click)=\"onClick()\">\r\n                  Log In&nbsp;&nbsp;\r\n                  <ion-icon name=\"Send\"></ion-icon>\r\n                </ion-button>\r\n              </form>\r\n              </ion-col>    \r\n          <!-- <ion-col col-3></ion-col> -->\r\n          </ion-row>\r\n          </ion-grid>\r\n</div>"

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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG1zaGFoXFxEZXNrdG9wXFxQcm9qZWN0c1xcSFNfT25saW5lL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

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
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_User_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/User_class */ "./src/app/shared/User_class.ts");








var HomePage = /** @class */ (function () {
    function HomePage(route, useDb, toast, formBuilder) {
        this.route = route;
        this.useDb = useDb;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]))
        });
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNull"])(localStorage.getItem("UserId"))) {
            this.route.navigateByUrl('/dashboard');
        }
    }
    HomePage.prototype.onClick = function () {
        var _this = this;
        // this.route.navigateByUrl('/dashboard');
        this.user = new _shared_User_class__WEBPACK_IMPORTED_MODULE_7__["User"](this.loginForm.get('username').value, this.loginForm.get('password').value);
        this.useDb.loginUser(this.user).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var t1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        if (!data.result) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.create({
                                message: "Successfull Login!",
                                duration: 1000,
                                showCloseButton: true,
                                closeButtonText: 'Okay',
                                color: 'success'
                            })];
                    case 1:
                        t1 = _a.sent();
                        localStorage.setItem('UserId', data.UserId);
                        localStorage.setItem('UserName', data.UserName);
                        this.route.navigateByUrl('/dashboard');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toast.create({
                            message: "Invalid User Name or Password!",
                            duration: 1000,
                            showCloseButton: true,
                            closeButtonText: 'Okay',
                            color: 'success'
                        })];
                    case 3:
                        t1 = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.loginForm.reset();
                        t1.present();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_4__["UserDbService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_db_service__WEBPACK_IMPORTED_MODULE_4__["UserDbService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/shared/User_class.ts":
/*!**************************************!*\
  !*** ./src/app/shared/User_class.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(UserName, UserPassword) {
        this.UserName = UserName;
        this.UserPassword = UserPassword;
    }
    User.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map