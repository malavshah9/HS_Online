(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchased-purchased-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/purchased/purchased.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/purchased/purchased.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" \r\n    pullingText=\"Pull to refresh\" \r\n    pullFactor=\"1.2\"\r\n    refreshingText=\"Refreshing Content...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div style=\"background-color: #008000; text-align: center;\">\r\n    <!-- <span style=\"margin-left: 30%;\">\r\n      &nbsp;&nbsp;ID : Parth&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;BALANCE\r\n      : 0 Rs.&nbsp;&nbsp;</span> -->\r\n    <ion-button shape=\"round\" color=\"tertiary\" style=\"color:rgb(236, 214, 236);height:30px; margin-left: 80%;\" (click)=\"onExit()\">\r\n      <ion-icon name=\"exit\"></ion-icon>Exit\r\n    </ion-button>\r\n    <!-- <div style=\"margin-right: -10px;\"> -->\r\n    <ion-grid class=\"grid\" style=\"margin-left: 10px; margin-right: 10px;\">\r\n      <div *ngFor=\"let item of histories;let i=index;\">\r\n        <ion-row *ngIf=\"i%5===0\"  style=\"margin-top: -15px;\">\r\n          <ion-col>\r\n            <ion-card  *ngIf=\"i<histories.length\" style=\"background-color: white; border-radius: 10px; width:130px;\">\r\n                <ion-card-subtitle>{{histories[i].DrawDate}}</ion-card-subtitle>\r\n                <ion-card-subtitle style=\"margin-top: -1px;\">{{histories[i].DrawTime |myPipe}} </ion-card-subtitle>\r\n                <!-- <img src=\"assets/icon/{{histories[i].YantraImage}}\" style=\"height: 140px;\" /> -->\r\n                <div  *ngIf=\"histories[i].DrawType==='Jackpot'\"  >\r\n                  <img src=\"assets/icon/jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase }}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i].DrawType==='3Jackpot'\"  >\r\n                  <img src=\"assets/icon/3jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i].DrawType==='Normal'\"  >\r\n                  <img src=\"assets/icon/{{histories[i].YantraImage}}\" style=\"height: 140px;\" />\r\n                </div>\r\n                \r\n                <!-- <img src=\"assets/icon/3jp.png\" *ngIf=\"histories[i].DrawType==='3Jackpot'\" style=\"height: 140px;\" />\r\n                \r\n                <img src=\"assets/icon/{{histories[i].YantraImage}}\"  *ngIf=\"histories[i].DrawType==='Normal'\" style=\"height: 140px;\" /> -->\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card  *ngIf=\"i+1<histories.length\" style=\"background-color: white; border-radius: 10px; width:130px;\">\r\n                <ion-card-subtitle>{{histories[i+1].DrawDate}}</ion-card-subtitle>\r\n                <ion-card-subtitle style=\"margin-top: -1px;\">{{histories[i+1].DrawTime |myPipe}}</ion-card-subtitle> \r\n                <!-- <img src=\"assets/icon/{{histories[i+1].YantraImage}}\" style=\"height: 140px;\" /> -->\r\n                <!-- <img src=\"assets/icon/jp.png\" *ngIf=\"histories[i+1].DrawType==='Jackpot'\"  style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/3jp.png\" *ngIf=\"histories[i+1].DrawType==='3Jackpot'\" style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/{{histories[i+1].YantraImage}}\"  *ngIf=\"histories[i+1].DrawType==='Normal'\" style=\"height: 140px;\" /> -->\r\n                <div  *ngIf=\"histories[i+1].DrawType==='Jackpot'\"  >\r\n                  <img src=\"assets/icon/jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+1].DrawType==='3Jackpot'\"  >\r\n                  <img src=\"assets/icon/3jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+1].DrawType==='Normal'\"  >\r\n                  <img src=\"assets/icon/{{histories[i+1].YantraImage}}\" style=\"height: 140px;\" />\r\n                </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card  *ngIf=\"i+2<histories.length\"  style=\"background-color: white; border-radius: 10px; width:130px;\">\r\n                <ion-card-subtitle>{{histories[i+2].DrawDate}}</ion-card-subtitle>\r\n                <ion-card-subtitle style=\"margin-top: -1px;\">{{histories[i+2].DrawTime |myPipe}} </ion-card-subtitle>\r\n                <!-- <img src=\"assets/icon/jp.png\" *ngIf=\"histories[i+2].DrawType==='Jackpot'\"  style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/3jp.png\" *ngIf=\"histories[i+2].DrawType==='3Jackpot'\" style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/{{histories[i+2].YantraImage}}\"  *ngIf=\"histories[i+2].DrawType==='Normal'\" style=\"height: 140px;\" /> -->\r\n                <div  *ngIf=\"histories[i+2].DrawType==='Jackpot'\"  >\r\n                  <img src=\"assets/icon/jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+2].DrawType==='3Jackpot'\"  >\r\n                  <img src=\"assets/icon/3jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+2].DrawType==='Normal'\"  >\r\n                  <img src=\"assets/icon/{{histories[i+2].YantraImage}}\" style=\"height: 140px;\" />\r\n                </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card *ngIf=\"i+3<histories.length\"  style=\"background-color: white; border-radius: 10px; width:130px;\">\r\n                <ion-card-subtitle>{{histories[i+3].DrawDate}}</ion-card-subtitle>\r\n                <ion-card-subtitle style=\"margin-top: -1px;\">{{histories[i+3].DrawTime |myPipe}} </ion-card-subtitle>\r\n                <!-- <img src=\"assets/icon/{{histories[i+3].YantraImage}}\" style=\"height: 140px;\" /> -->\r\n                <!-- <img src=\"assets/icon/jp.png\" *ngIf=\"histories[i+3].DrawType==='Jackpot'\"  style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/3jp.png\" *ngIf=\"histories[i+3].DrawType==='3Jackpot'\" style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/{{histories[i+3].YantraImage}}\"  *ngIf=\"histories[i+3].DrawType==='Normal'\" style=\"height: 140px;\" /> -->\r\n                <div  *ngIf=\"histories[i+3].DrawType==='Jackpot'\"  >\r\n                  <img src=\"assets/icon/jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+3].DrawType==='3Jackpot'\"  >\r\n                  <img src=\"assets/icon/3jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+3].DrawType==='Normal'\"  >\r\n                  <img src=\"assets/icon/{{histories[i+3].YantraImage}}\" style=\"height: 140px;\" />\r\n                </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card *ngIf=\"i+4<histories.length\" style=\"background-color: white; border-radius: 10px; width:130px;\">\r\n                <ion-card-subtitle>{{histories[i+4].DrawDate}}</ion-card-subtitle>\r\n                <ion-card-subtitle style=\"margin-top: -1px;\">{{histories[i+4].DrawTime |myPipe}} </ion-card-subtitle>\r\n                <!-- <img src=\"assets/icon/{{histories[i+4].YantraImage}}\" style=\"height: 140px;\" /> -->\r\n                <!-- <img src=\"assets/icon/jp.png\" *ngIf=\"histories[i+4].DrawType==='Jackpot'\"  style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/3jp.png\" *ngIf=\"histories[i+4].DrawType==='3Jackpot'\" style=\"height: 140px;\" />\r\n                <img src=\"assets/icon/{{histories[i+4].YantraImage}}\"  *ngIf=\"histories[i+4].DrawType==='Normal'\" style=\"height: 140px;\" /> -->\r\n                <div  *ngIf=\"histories[i+4].DrawType==='Jackpot'\"  >\r\n                  <img src=\"assets/icon/jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+4].DrawType==='3Jackpot'\"  >\r\n                  <img src=\"assets/icon/3jp.png\"style=\"height: 123px;\" />\r\n                  <ion-label>{{item.YantraName | uppercase}}</ion-label>\r\n                </div>\r\n                <div  *ngIf=\"histories[i+4].DrawType==='Normal'\"  >\r\n                  <img src=\"assets/icon/{{histories[i+4].YantraImage}}\" style=\"height: 140px;\" />\r\n                </div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>  \r\n  <!-- <ion-row *ngFor=\"let item of histories;let i=index;\">  -->\r\n        <!-- <ion-col> -->\r\n          <!-- <ion-card  style=\"background-color: white; border-radius: 10px; width:130px;\"> -->\r\n            <!-- <ion-card-header> -->\r\n               <!-- <ion-card-subtitle>{{item.DrawDate}}</ion-card-subtitle> -->\r\n              <!-- <ion-card-subtitle style=\"margin-top: -1px;\">{{item.DrawTime}} </ion-card-subtitle> -->\r\n            <!-- </ion-card-header> -->\r\n            <!-- <ion-card-content> -->\r\n              <!-- <img src=\"assets/icon/1.jpeg\" style=\"height: 140px;\" /> -->\r\n            <!-- </ion-card-content> -->\r\n          <!-- </ion-card> -->\r\n        <!-- </ion-col>      -->\r\n      <!-- </ion-row> -->\r\n      \r\n    \r\n    <!-- </div> -->\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-col > -->\r\n  <!-- <ion-card  style=\"background-color: white; border-radius: 10px; width:130px;\"> -->\r\n    <!-- <ion-card-header> -->\r\n      <!-- <ion-card-subtitle>02-Jan</ion-card-subtitle> -->\r\n      <!-- <ion-card-subtitle style=\"margin-top: -1px;\">07:30 PM </ion-card-subtitle> -->\r\n    <!-- </ion-card-header> -->\r\n    <!-- <ion-card-content> -->\r\n      <!-- <img src=\"assets/icon/2.jpeg\"  style=\"height: 140px;\" /> -->\r\n    <!-- </ion-card-content> -->\r\n  <!-- </ion-card> -->\r\n<!-- </ion-col> -->\r\n<!-- <ion-col > -->\r\n  <!-- <ion-card  style=\"background-color: white; border-radius: 10px; width:130px;\"> -->\r\n    <!-- <ion-card-header> -->\r\n      <!-- <ion-card-subtitle>02-Jan</ion-card-subtitle> -->\r\n      <!-- <ion-card-subtitle style=\"margin-top: -1px;\">07:30 PM </ion-card-subtitle> -->\r\n    <!-- </ion-card-header> -->\r\n    <!-- <ion-card-content> -->\r\n      <!-- <img src=\"assets/icon/3.jpeg\"  style=\"height: 140px;\" /> -->\r\n    <!-- </ion-card-content> -->\r\n  <!-- </ion-card> -->\r\n\r\n<!-- </ion-col> -->\r\n<!-- <ion-col > -->\r\n  <!-- <ion-card  style=\"background-color: white; border-radius: 10px; width:130px;\"> -->\r\n    <!-- <ion-card-header> -->\r\n      <!-- <ion-card-subtitle>02-Jan</ion-card-subtitle> -->\r\n      <!-- <ion-card-subtitle style=\"margin-top: -1px;\">07:30 PM </ion-card-subtitle> -->\r\n    <!-- </ion-card-header> -->\r\n    <!-- <ion-card-content> -->\r\n      <!-- <img src=\"assets/icon/4.jpeg\"  style=\"height: 140px;\" /> -->\r\n    <!-- </ion-card-content> -->\r\n  <!-- </ion-card> -->\r\n\r\n<!-- </ion-col> -->\r\n\r\n<!-- <ion-col > -->\r\n  <!-- <ion-card style=\"background-color: white; border-radius: 10px; width:130px;\"> -->\r\n    <!-- <ion-card-header> -->\r\n      <!--  <ion-card-subtitle>02-Jan</ion-card-subtitle> -->\r\n      <!--  <ion-card-subtitle style=\"margin-top: -1px;\">07:30 PM </ion-card-subtitle> -->\r\n    <!-- </ion-card-header> -->\r\n    <!-- <ion-card-content> -->\r\n      <!-- <img src=\"assets/icon/5.jpeg\"  style=\"height: 140px;\" /> -->\r\n    <!-- </ion-card-content> -->\r\n  <!-- </ion-card> -->\r\n<!-- </ion-col> -->\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n<ion-content>\r\n  <div style=\"background-color: #008000 !important;text-align: center;vertical-align:middle;\">\r\n    <BR>\r\n    <h2 style=\"color: yellow;\">HONEST</h2>\r\n    <br>\r\n    <h4 style=\"color: yellow;\">Welcome : Parth</h4>\r\n    <h4 style=\"color: yellow;\">Balance : Rs.</h4>\r\n\r\n  \r\n  <br>\r\n  <ion-button expand='block' shape=\"round\"  color=\"danger\" style=\"color:rgb(255, 38, 0);height:30px;text-align: right;\" (click)=\"onExit()\">\r\n    Exit&nbsp;&nbsp;\r\n    <ion-icon name=\"exit\"></ion-icon>\r\n  </ion-button>\r\n  <ion-card shape=\"round\" style=\"height:43%;width:50%;background-color:white ;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"text-align: center;\">02-jan</ion-card-subtitle>\r\n      <ion-card-subtitle style=\"text-align: center;\">2:00 PM</ion-card-subtitle>\r\n    </ion-card-header>\r\n   \r\n    <img src=\"assets/icon/1.jpeg\"  style=\"height: 140px;\" />\r\n    \r\n  \r\n  </ion-card>\r\n  \r\n\r\n  <ion-card shape=\"round\" style=\"height: 43%;width: 50%;background-color:white ;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"text-align: center;\">02-Jan</ion-card-subtitle>\r\n      <ion-card-subtitle style=\"text-align: center;\">2:00 PM</ion-card-subtitle>\r\n    </ion-card-header>\r\n    \r\n    <img src=\"assets/icon/2.jpeg\"  style=\"height: 140px;\" />\r\n  \r\n  </ion-card>\r\n  \r\n\r\n <br>\r\n\r\n </div>\r\n</ion-content>\r\n\r\n -->"

/***/ }),

/***/ "./src/app/purchased/purchased.module.ts":
/*!***********************************************!*\
  !*** ./src/app/purchased/purchased.module.ts ***!
  \***********************************************/
/*! exports provided: PurchasedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedPageModule", function() { return PurchasedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purchased_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchased.page */ "./src/app/purchased/purchased.page.ts");
/* harmony import */ var _shared_my_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/my-pipe.module */ "./src/app/shared/my-pipe.module.ts");








const routes = [
    {
        path: '',
        component: _purchased_page__WEBPACK_IMPORTED_MODULE_6__["PurchasedPage"]
    }
];
let PurchasedPageModule = class PurchasedPageModule {
};
PurchasedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_my_pipe_module__WEBPACK_IMPORTED_MODULE_7__["MyPipeModule"]
        ],
        declarations: [_purchased_page__WEBPACK_IMPORTED_MODULE_6__["PurchasedPage"]]
    })
], PurchasedPageModule);



/***/ }),

/***/ "./src/app/purchased/purchased.page.scss":
/*!***********************************************!*\
  !*** ./src/app/purchased/purchased.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ion-grid{\n    ion-card{\n        width:50%;\n        // height: 100%;\n        margin-left:0 !important;\n        margin-right:0 !important;\n        ion-card-content{\n            padding: -1px !important; \n        }\n    }\n    margin-left: -20px;\n    // width: 900px;\n} */\nion-row {\n  --ion-grid-columns: 5;\n}\nion-row ion-card {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\nion-row ion-card ion-card-header {\n  margin-top: -10px;\n  margin-bottom: -5px;\n}\nion-row ion-card ion-card-content {\n  /* margin-top: -15px; */\n  /* padding: -1px !important; */\n}\nion-col {\n  margin-right: 3px;\n}\n#parent > img {\n  width: 100%;\n  height: 100%;\n}\nion-label {\n  font-size: 1em;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2VkL0Q6XFxTRlxcSW9uaWNcXEhTL3NyY1xcYXBwXFxwdXJjaGFzZWRcXHB1cmNoYXNlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3B1cmNoYXNlZC9wdXJjaGFzZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FBQTtBQWNBO0VBZUUscUJBQUE7QUNkRjtBREFFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDRUo7QURESTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRERJO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtBQ0dSO0FER0E7RUFDSSxpQkFBQTtBQ0FKO0FEUUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ05KO0FEUUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wdXJjaGFzZWQvcHVyY2hhc2VkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlvbi1ncmlke1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAtMXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIC8vIHdpZHRoOiA5MDBweDtcclxufSAqL1xyXG5cclxuaW9uLXJvdyB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAtMTVweDsgKi9cclxuICAgICAgICAvKiBwYWRkaW5nOiAtMXB4ICFpbXBvcnRhbnQ7ICovIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIC0taW9uLWdyaWQtY29sdW1uczogNTtcclxufVxyXG5pb24tY29se1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLnBhcmVudHtcclxuICAgIC8vIHdpZHRoOjUwMHB4O1xyXG4gICAgLy8gaGVpZ2h0OjMwMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuICAjcGFyZW50ID4gaW1ne1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTMwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4iLCIvKiBpb24tZ3JpZHtcbiAgICBpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgIHBhZGRpbmc6IC0xcHggIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIC8vIHdpZHRoOiA5MDBweDtcbn0gKi9cbmlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDU7XG59XG5pb24tcm93IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5pb24tcm93IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xufVxuaW9uLXJvdyBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgLyogbWFyZ2luLXRvcDogLTE1cHg7ICovXG4gIC8qIHBhZGRpbmc6IC0xcHggIWltcG9ydGFudDsgKi9cbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4jcGFyZW50ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/purchased/purchased.page.ts":
/*!*********************************************!*\
  !*** ./src/app/purchased/purchased.page.ts ***!
  \*********************************************/
/*! exports provided: PurchasedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedPage", function() { return PurchasedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");
/* harmony import */ var _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/my-pipe.pipe */ "./src/app/shared/my-pipe.pipe.ts");







let PurchasedPage = class PurchasedPage {
    constructor(route, screenOrientation, statusBar, userDb, MyPipe) {
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.statusBar = statusBar;
        this.userDb = userDb;
        this.MyPipe = MyPipe;
    }
    ngOnInit() {
    }
    loadData() {
        this.userDb.getHistory().subscribe((data) => {
            this.histories = data;
        });
    }
    ionViewWillEnter() {
        this.statusBar.hide();
        this.loadData();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    doRefresh(event) {
        setTimeout(() => {
            this.loadData();
            event.target.complete();
        }, 500);
    }
    onExit() {
        this.route.navigateByUrl('/dashboard');
    }
};
PurchasedPage.ctorParameters = () => [
    { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"] },
    { type: _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_6__["MyPipePipe"] }
];
PurchasedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchased',
        template: __webpack_require__(/*! raw-loader!./purchased.page.html */ "./node_modules/raw-loader/index.js!./src/app/purchased/purchased.page.html"),
        styles: [__webpack_require__(/*! ./purchased.page.scss */ "./src/app/purchased/purchased.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"], _shared_my_pipe_pipe__WEBPACK_IMPORTED_MODULE_6__["MyPipePipe"]])
], PurchasedPage);



/***/ })

}]);
//# sourceMappingURL=purchased-purchased-module-es2015.js.map