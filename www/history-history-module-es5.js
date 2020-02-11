(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"honest\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" \r\n    pullingText=\"Pull to refresh\" \r\n    pullFactor=\"1.2\"\r\n    refreshingText=\"Refreshing Content...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-button shape=\"round\" color=\"tertiary\" style=\"color:purple;height:30px; margin-left: 80%;\" (click)=\"onExit()\">\r\n    <ion-icon name=\"exit\"></ion-icon>Exit\r\n  </ion-button>\r\n  <ion-card *ngFor=\"let item of histories\" style=\"background-color: white;color: black;\">\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Shree</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Shree?item.Shree:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label> Vashikaran</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Shree?item.Vashikaran:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Sudarshan</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Shree?item.Sudarshan:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Vastu</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Vastu?item.Vastu:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Planet</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Planet?item.Planet:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Love</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Love?item.Love:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Tara</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Tara?item.Tara:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Grah</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Grah?item.Grah:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Matsya</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Matsya?item.Matsya:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"ion-margin\" style=\"align-items: center; text-align: center;\">\r\n            <ion-label>Meditation</ion-label>\r\n            <div>\r\n              <ion-label>{{item.Meditation?item.Meditation:\" \"}}</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <div class=\"display\">\r\n        Total Yantra&nbsp;:&nbsp;{{item.TotalYantra}}<br>\r\n        Total Amount&nbsp;:&nbsp;{{item.CouponTotalAmount}}<br>\r\n        Date&nbsp;:&nbsp;{{item.DrawDate | date:'d-M-yy'}}<br>\r\n        Draw Time&nbsp;:&nbsp;{{item.DrawTime}}<br>\r\n        <!-- Winning Yantra:{{}}<br> -->\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  border: 0px solid #efeaea !important;\n  background-color: #efeaea;\n  border-radius: 10px !important;\n}\n\n.ion-label {\n  text-align: center !important;\n}\n\n.ion-margin {\n  margin-top: 3px !important;\n  margin-bottom: 3px !important;\n  margin-left: 3px !important;\n  margin-right: 3px !important;\n}\n\n.display {\n  background-color: lightgray;\n  width: 30%;\n  border-radius: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxcaGlzdG9yeVxcaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsb0NBQUE7RUFDQSx5QkFBQTtFQUVBLDhCQUFBO0FDREY7O0FESUE7RUFDRSw2QkFBQTtBQ0RGOztBRElBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gIC8vYm9yZGVyOiAzcHggc29saWQgIzk4OWFhMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNlZmVhZWEgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlYWVhO1xyXG4gIC8vYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzg4OCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsImlvbi1jb2wge1xuICBib3JkZXI6IDBweCBzb2xpZCAjZWZlYWVhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVhZWE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");






var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, screenOrientation, statusBar, userDb) {
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.statusBar = statusBar;
        this.userDb = userDb;
        this.histories = [];
        this.loadData();
        this.histories = [];
    }
    HistoryComponent.prototype.ngOnInit = function () { };
    HistoryComponent.prototype.onExit = function () {
        this.route.navigateByUrl('/dashboard');
    };
    HistoryComponent.prototype.ionViewWillEnter = function () {
        this.statusBar.hide();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.loadData();
    };
    HistoryComponent.prototype.loadData = function () {
        var _this = this;
        console.log(" loadData() called ");
        this.userDb.getPurchasedHistory(localStorage.getItem("UserId")).subscribe(function (data) {
            _this.histories = data;
        }, function (e) { }, function () {
        });
    };
    HistoryComponent.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.loadData();
            event.target.complete();
        }, 1000);
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"] }
    ]; };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component */ "./src/app/history/history.component.ts");







var routes = [
    {
        path: '',
        component: _history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module-es5.js.map