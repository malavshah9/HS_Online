(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepass-changepass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/changepass/changepass.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content> -->\r\n  <div style=\"background-color: #008000!important;height:100%;width:100%;text-align: center;vertical-align:middle;\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 40%;'>\r\n        <h4><span>&nbsp;ID : {{userName}}&nbsp;&nbsp;</span></h4>\r\n      </ion-row>\r\n      <ion-row justify-content-center align-items-center style='height: 100%;'>\r\n        \r\n      <!-- <ion-col col-2></ion-col>  -->\r\n      <ion-col> \r\n    <h3>&nbsp;Reset Password</h3>\r\n      </ion-col></ion-row>\r\n      \r\n    <ion-row justify-content-center align-items-center style='height: 100%; margin-top: 20%;'>\r\n      <form [formGroup]=\"changeForm\">\r\n      <ion-col>\r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" formControlName=\"oldPassword\" id=\"oldPassword\" style=\"font-size:17px; color:white;\" placeholder=\" Old Password\" type=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" formControlName=\"newPassword\" id=\"newPassword\" style=\"font-size:17px; color:white;\" placeholder=\"New Password\" type=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item color=\"#008000\">\r\n          <ion-input [clearInput]=\"true\" formControlName=\"confirmNewPassword\" id=\"confirmNewPassword\" style=\"font-size:17px; color:white;\" placeholder=\"Confirm Password\" type=\"password\"\r\n            [required]=\"true\"></ion-input>\r\n        </ion-item>\r\n       <br>\r\n        <ion-button  [disabled]=\"!changeForm.valid\" color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;\" type=\"submit\" (click)=\"onClick()\">\r\n          Change&nbsp;&nbsp;\r\n          <ion-icon name=\"Send\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button   color=\"primary\" style=\"color:rgb(255, 38, 0);height:30px;\" type=\"reset\" (click)=\"onExit()\">\r\n          Cancel&nbsp;&nbsp;\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-button>\r\n        \r\n  </ion-col>\r\n</form>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n    \r\n</div>\r\n<!-- </ion-content> -->\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changepass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepass.page */ "./src/app/changepass/changepass.page.ts");







var routes = [
    {
        path: '',
        component: _changepass_page__WEBPACK_IMPORTED_MODULE_6__["ChangepassPage"]
    }
];
var ChangepassPageModule = /** @class */ (function () {
    function ChangepassPageModule() {
    }
    ChangepassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_changepass_page__WEBPACK_IMPORTED_MODULE_6__["ChangepassPage"]]
        })
    ], ChangepassPageModule);
    return ChangepassPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_Password_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Password_class */ "./src/app/shared/Password_class.ts");







var ChangepassPage = /** @class */ (function () {
    function ChangepassPage(route, useDb, toast, formBuilder) {
        this.route = route;
        this.useDb = useDb;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.changeForm = this.formBuilder.group({
            'oldPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            'newPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            'confirmNewPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]))
        });
    }
    ChangepassPage.prototype.ionViewDidEnter = function () {
        this.userName = localStorage.getItem('UserName');
    };
    ChangepassPage.prototype.ngOnInit = function () { };
    ChangepassPage.prototype.onClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newPassword, confirmNewPassword, t1, pasword, userId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPassword = this.changeForm.get('newPassword').value;
                        confirmNewPassword = this.changeForm.get('confirmNewPassword').value;
                        if (!(newPassword === confirmNewPassword)) return [3 /*break*/, 1];
                        pasword = new _shared_Password_class__WEBPACK_IMPORTED_MODULE_6__["Password"](this.changeForm.get('oldPassword').value, newPassword);
                        userId = localStorage.getItem('UserId');
                        this.useDb.changePassword(pasword, userId).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var t2, t3;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(data);
                                        if (!data.result) return [3 /*break*/, 2];
                                        this.route.navigateByUrl('/dashboard');
                                        return [4 /*yield*/, this.toast.create({
                                                message: "Password Changed Successfully!",
                                                duration: 1000,
                                                showCloseButton: true,
                                                closeButtonText: 'Okay',
                                                color: 'success'
                                            })];
                                    case 1:
                                        t2 = _a.sent();
                                        t2.present();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toast.create({
                                            message: "Old Passwords do not match!",
                                            duration: 1000,
                                            showCloseButton: true,
                                            closeButtonText: 'Okay',
                                            color: 'success'
                                        })];
                                    case 3:
                                        t3 = _a.sent();
                                        t3.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) {
                            console.log(err);
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toast.create({
                            message: "New Passwords do not match!",
                            duration: 1000,
                            showCloseButton: true,
                            closeButtonText: 'Okay',
                            color: 'success'
                        })];
                    case 2:
                        t1 = _a.sent();
                        t1.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChangepassPage.prototype.onExit = function () {
        this.route.navigateByUrl('/dashboard');
    };
    ChangepassPage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_3__["UserDbService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    ChangepassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepass',
            template: __webpack_require__(/*! raw-loader!./changepass.page.html */ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html"),
            styles: [__webpack_require__(/*! ./changepass.page.scss */ "./src/app/changepass/changepass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_db_service__WEBPACK_IMPORTED_MODULE_3__["UserDbService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ChangepassPage);
    return ChangepassPage;
}());



/***/ }),

/***/ "./src/app/shared/Password_class.ts":
/*!******************************************!*\
  !*** ./src/app/shared/Password_class.ts ***!
  \******************************************/
/*! exports provided: Password */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Password", function() { return Password; });
var Password = /** @class */ (function () {
    function Password(user_password, user_password_new) {
        this.user_password = user_password;
        this.user_password_new = user_password_new;
    }
    Password.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Password;
}());



/***/ })

}]);
//# sourceMappingURL=changepass-changepass-module-es5.js.map