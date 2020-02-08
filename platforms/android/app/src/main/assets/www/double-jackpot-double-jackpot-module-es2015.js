(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["double-jackpot-double-jackpot-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/double-jackpot/double-jackpot.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/double-jackpot/double-jackpot.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n<div style=\"background-color: #008000; width: 100%; height: 100%;\">\r\n  <ion-grid>\r\n    \r\n    <form [formGroup] = \"angForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div formArrayName=\"names\">\r\n    <div *ngFor=\"let name of names.controls; index as i\" >\r\n      <ion-row *ngIf=\"i%10===0\" align-items-center>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i}}\">\r\n            </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+1]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+1}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+2]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+2}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+3]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+3}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+4]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+4}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+5]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+5}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+6]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+6}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+7]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+7}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+8]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+8}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <label class=\"font-bold m-0\" style=\"color: white;\">{{myIndex[i+9]}}</label>\r\n          <ion-input maxlength=\"5\" class=\"yantratext\" type=\"number\" formControlName=\"{{i+9}}\">\r\n          </ion-input>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </div>\r\n    </div>\r\n  \r\n  <ion-row>\r\n    <ion-col>\r\n  <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"warning\" style=\"color:black;\" (click)=\"onSubmit()\">\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>Submit\r\n  </ion-button>\r\n  <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"warning\" style=\"color:black;\" (click)=\"onExit()\">\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>Exit\r\n  </ion-button>\r\n</ion-col></ion-row>\r\n</form>  \r\n</ion-grid>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/double-jackpot/double-jackpot.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/double-jackpot/double-jackpot.module.ts ***!
  \*********************************************************/
/*! exports provided: DoubleJackpotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleJackpotPageModule", function() { return DoubleJackpotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _double_jackpot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./double-jackpot.page */ "./src/app/double-jackpot/double-jackpot.page.ts");







const routes = [
    {
        path: '',
        component: _double_jackpot_page__WEBPACK_IMPORTED_MODULE_6__["DoubleJackpotPage"]
    }
];
let DoubleJackpotPageModule = class DoubleJackpotPageModule {
};
DoubleJackpotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_double_jackpot_page__WEBPACK_IMPORTED_MODULE_6__["DoubleJackpotPage"]]
    })
], DoubleJackpotPageModule);



/***/ }),

/***/ "./src/app/double-jackpot/double-jackpot.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/double-jackpot/double-jackpot.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yantratext {\n  background: #111 !important;\n  border: 1px solid #e3e3e3;\n  max-width: 100%;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n  padding: 1px 12px;\n  color: #fff !important;\n  border-radius: 25px !important;\n  margin: 0 auto;\n  width: 75%;\n  height: 20px !important;\n  text-align: center;\n  font-size: 20px !important;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.m-0 {\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG91YmxlLWphY2twb3QvRDpcXFNGXFxJb25pY1xcSFMvc3JjXFxhcHBcXGRvdWJsZS1qYWNrcG90XFxkb3VibGUtamFja3BvdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvdWJsZS1qYWNrcG90L2RvdWJsZS1qYWNrcG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZG91YmxlLWphY2twb3QvZG91YmxlLWphY2twb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlhbnRyYXRleHQge1xyXG4gIGJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDFweCAxMnB4O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubS0wIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4iLCIueWFudHJhdGV4dCB7XG4gIGJhY2tncm91bmQ6ICMxMTEgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMXB4IDEycHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/double-jackpot/double-jackpot.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/double-jackpot/double-jackpot.page.ts ***!
  \*******************************************************/
/*! exports provided: DoubleJackpotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleJackpotPage", function() { return DoubleJackpotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_program_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/program-db.service */ "./src/app/services/program-db.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");







let DoubleJackpotPage = class DoubleJackpotPage {
    constructor(fb, screenOrientation, alertController, route, programDb) {
        this.fb = fb;
        this.screenOrientation = screenOrientation;
        this.alertController = alertController;
        this.route = route;
        this.programDb = programDb;
        this.myIndex = [];
        for (let i = 11; i <= 100; i++) {
            if (i % 10 === 0) {
                this.myIndex.push((i - 10) + "");
            }
            else {
                this.myIndex.push(i + "");
            }
        }
        for (let i = 1; i <= 9; i++) {
            this.myIndex.push("0" + i);
        }
        this.myIndex.push("00");
        this.angForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            names: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (let i = 0; i < 100; i++) {
            this.doubleJackpot();
        }
    }
    onExit() {
        this.route.navigateByUrl('/program');
    }
    get names() {
        return this.angForm.get('names');
    }
    doubleJackpot() {
        this.names.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const battingAlert = yield this.alertController.create({
                buttons: ['OK'],
                message: "Enter Proper Ticket Quantity!"
            });
            let myObj = {};
            let hasValue = false;
            for (let i = 0; i < this.names.length; i++) {
                // console.log(this.names.at(i).value);
                if (this.names.at(i).value) {
                    let txt = "txt" + this.myIndex[i];
                    myObj[txt] = this.names.at(i).value;
                    hasValue = true;
                }
            }
            if (hasValue) {
                myObj["UserId"] = localStorage.getItem('UserId');
                console.log(myObj);
                this.programDb.submitDoubleJackpot(myObj).subscribe((data) => {
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
                }, (err) => {
                    console.log(err);
                }, () => {
                });
                this.angForm.reset();
            }
            else {
                battingAlert.present();
            }
        });
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
};
DoubleJackpotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_program_db_service__WEBPACK_IMPORTED_MODULE_1__["ProgramDbService"] }
];
DoubleJackpotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-double-jackpot',
        template: __webpack_require__(/*! raw-loader!./double-jackpot.page.html */ "./node_modules/raw-loader/index.js!./src/app/double-jackpot/double-jackpot.page.html"),
        styles: [__webpack_require__(/*! ./double-jackpot.page.scss */ "./src/app/double-jackpot/double-jackpot.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_program_db_service__WEBPACK_IMPORTED_MODULE_1__["ProgramDbService"]])
], DoubleJackpotPage);



/***/ })

}]);
//# sourceMappingURL=double-jackpot-double-jackpot-module-es2015.js.map