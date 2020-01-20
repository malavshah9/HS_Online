(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\nbody {\r\n  background: var(--ion-background-color);\r\n}\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\r\n}\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\r\n}\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\r\n}\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\r\n}\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\r\n}\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\r\n}\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\n/* Basic CSS for apps built with Ionic */\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\nfigure {\r\n  margin: 1em 40px;\r\n}\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\npre {\r\n  overflow: auto;\r\n}\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\ntextarea::-webkit-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-ms-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\n[tappable] {\r\n  cursor: pointer;\r\n}\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\ntd,\r\nth {\r\n  padding: 0;\r\n}\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n      -ms-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n      -ms-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\nh3 {\r\n  font-size: 22px;\r\n}\nh4 {\r\n  font-size: 20px;\r\n}\nh5 {\r\n  font-size: 18px;\r\n}\nh6 {\r\n  font-size: 16px;\r\n}\nsmall {\r\n  font-size: 75%;\r\n}\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\nsup {\r\n  top: -0.5em;\r\n}\nsub {\r\n  bottom: -0.25em;\r\n}\n.ion-hide {\r\n  display: none !important;\r\n}\n.ion-hide-up {\r\n  display: none !important;\r\n}\n@media (max-width: 575px) {\r\n  .ion-hide-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 576px) {\r\n  .ion-hide-sm-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 767px) {\r\n  .ion-hide-sm-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-hide-md-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 991px) {\r\n  .ion-hide-md-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-hide-lg-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 1199px) {\r\n  .ion-hide-lg-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-hide-xl-up {\r\n    display: none !important;\r\n  }\r\n}\n.ion-hide-xl-down {\r\n  display: none !important;\r\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding,\r\n[no-padding] {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\n.ion-padding,\r\n[padding] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding,\r\n[padding] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-top,\r\n[padding-top] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\n.ion-padding-start,\r\n[padding-start] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start,\r\n[padding-start] {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-end,\r\n[padding-end] {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end,\r\n[padding-end] {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-bottom,\r\n[padding-bottom] {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-vertical,\r\n[padding-vertical] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-horizontal,\r\n[padding-horizontal] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal,\r\n[padding-horizontal] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-no-margin,\r\n[no-margin] {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.ion-margin,\r\n[margin] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin,\r\n[margin] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-top,\r\n[margin-top] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\n.ion-margin-start,\r\n[margin-start] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start,\r\n[margin-start] {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-end,\r\n[margin-end] {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end,\r\n[margin-end] {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-bottom,\r\n[margin-bottom] {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-vertical,\r\n[margin-vertical] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-horizontal,\r\n[margin-horizontal] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal,\r\n[margin-horizontal] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-float-left,\r\n[float-left] {\r\n  float: left !important;\r\n}\n.ion-float-right,\r\n[float-right] {\r\n  float: right !important;\r\n}\n.ion-float-start,\r\n[float-start] {\r\n  float: left !important;\r\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\r\n  float: right !important;\r\n}\n.ion-float-end,\r\n[float-end] {\r\n  float: right !important;\r\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\r\n  float: left !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-float-sm-left,\r\n[float-sm-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right,\r\n[float-sm-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start,\r\n[float-sm-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end,\r\n[float-sm-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-float-md-left,\r\n[float-md-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right,\r\n[float-md-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start,\r\n[float-md-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end,\r\n[float-md-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-float-lg-left,\r\n[float-lg-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right,\r\n[float-lg-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start,\r\n[float-lg-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end,\r\n[float-lg-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left,\r\n[float-xl-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right,\r\n[float-xl-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start,\r\n[float-xl-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end,\r\n[float-xl-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\r\n    float: left !important;\r\n  }\r\n}\n.ion-text-center,\r\n[text-center] {\r\n  text-align: center !important;\r\n}\n.ion-text-justify,\r\n[text-justify] {\r\n  text-align: justify !important;\r\n}\n.ion-text-start,\r\n[text-start] {\r\n  text-align: start !important;\r\n}\n.ion-text-end,\r\n[text-end] {\r\n  text-align: end !important;\r\n}\n.ion-text-left,\r\n[text-left] {\r\n  text-align: left !important;\r\n}\n.ion-text-right,\r\n[text-right] {\r\n  text-align: right !important;\r\n}\n.ion-text-nowrap,\r\n[text-nowrap] {\r\n  white-space: nowrap !important;\r\n}\n.ion-text-wrap,\r\n[text-wrap] {\r\n  white-space: normal !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-center,\r\n[text-sm-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify,\r\n[text-sm-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start,\r\n[text-sm-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end,\r\n[text-sm-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left,\r\n[text-sm-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right,\r\n[text-sm-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap,\r\n[text-sm-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap,\r\n[text-sm-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-center,\r\n[text-md-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify,\r\n[text-md-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start,\r\n[text-md-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end,\r\n[text-md-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left,\r\n[text-md-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right,\r\n[text-md-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap,\r\n[text-md-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap,\r\n[text-md-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-center,\r\n[text-lg-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify,\r\n[text-lg-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start,\r\n[text-lg-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end,\r\n[text-lg-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left,\r\n[text-lg-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right,\r\n[text-lg-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap,\r\n[text-lg-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap,\r\n[text-lg-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center,\r\n[text-xl-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify,\r\n[text-xl-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start,\r\n[text-xl-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end,\r\n[text-xl-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left,\r\n[text-xl-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right,\r\n[text-xl-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap,\r\n[text-xl-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap,\r\n[text-xl-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n.ion-text-uppercase,\r\n[text-uppercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\n.ion-text-lowercase,\r\n[text-lowercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\n.ion-text-capitalize,\r\n[text-capitalize] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase,\r\n[text-sm-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase,\r\n[text-sm-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize,\r\n[text-sm-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase,\r\n[text-md-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase,\r\n[text-md-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize,\r\n[text-md-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase,\r\n[text-lg-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase,\r\n[text-lg-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize,\r\n[text-lg-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase,\r\n[text-xl-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase,\r\n[text-xl-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize,\r\n[text-xl-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n.ion-align-self-start,\r\n[align-self-start] {\r\n  align-self: flex-start !important;\r\n}\n.ion-align-self-end,\r\n[align-self-end] {\r\n  align-self: flex-end !important;\r\n}\n.ion-align-self-center,\r\n[align-self-center] {\r\n  align-self: center !important;\r\n}\n.ion-align-self-stretch,\r\n[align-self-stretch] {\r\n  align-self: stretch !important;\r\n}\n.ion-align-self-baseline,\r\n[align-self-baseline] {\r\n  align-self: baseline !important;\r\n}\n.ion-align-self-auto,\r\n[align-self-auto] {\r\n  align-self: auto !important;\r\n}\n.ion-wrap,\r\n[wrap] {\r\n  flex-wrap: wrap !important;\r\n}\n.ion-nowrap,\r\n[nowrap] {\r\n  flex-wrap: nowrap !important;\r\n}\n.ion-wrap-reverse,\r\n[wrap-reverse] {\r\n  flex-wrap: wrap-reverse !important;\r\n}\n.ion-justify-content-start,\r\n[justify-content-start] {\r\n  -webkit-box-pack: start !important;\r\n          justify-content: flex-start !important;\r\n}\n.ion-justify-content-center,\r\n[justify-content-center] {\r\n  -webkit-box-pack: center !important;\r\n          justify-content: center !important;\r\n}\n.ion-justify-content-end,\r\n[justify-content-end] {\r\n  -webkit-box-pack: end !important;\r\n          justify-content: flex-end !important;\r\n}\n.ion-justify-content-around,\r\n[justify-content-around] {\r\n  justify-content: space-around !important;\r\n}\n.ion-justify-content-between,\r\n[justify-content-between] {\r\n  -webkit-box-pack: justify !important;\r\n          justify-content: space-between !important;\r\n}\n.ion-justify-content-evenly,\r\n[justify-content-evenly] {\r\n  -webkit-box-pack: space-evenly !important;\r\n          justify-content: space-evenly !important;\r\n}\n.ion-align-items-start,\r\n[align-items-start] {\r\n  -webkit-box-align: start !important;\r\n          align-items: flex-start !important;\r\n}\n.ion-align-items-center,\r\n[align-items-center] {\r\n  -webkit-box-align: center !important;\r\n          align-items: center !important;\r\n}\n.ion-align-items-end,\r\n[align-items-end] {\r\n  -webkit-box-align: end !important;\r\n          align-items: flex-end !important;\r\n}\n.ion-align-items-stretch,\r\n[align-items-stretch] {\r\n  -webkit-box-align: stretch !important;\r\n          align-items: stretch !important;\r\n}\n.ion-align-items-baseline,\r\n[align-items-baseline] {\r\n  -webkit-box-align: baseline !important;\r\n          align-items: baseline !important;\r\n}\nion-title {\n  color: orange;\n}\nion-col {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\nh3 {\n  color: white;\n}\nspan {\n  background-color: yellow;\n  color: black;\n  border-radius: 20px;\n  float: right;\n}\nion-card {\n  border-radius: 10px;\n}\n.center-class {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  height: 100%;\n}\n.special-ion-button {\n  width: 80%;\n  margin-left: 10%;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGdsb2JhbC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIiwic3JjL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFBQTtBQVdBLDREQUFBO0FDTkE7RUFDRSw2RkFBQTtBQ0pGO0FETUE7RUFDRSwwREFBQTtBQ0hGO0FETUE7RUFDRSwwQ0FBQTtBQ0hGO0FETUE7RUFDRSx1Q0FBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtBQ0hGO0FEa0NFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDckJGO0FEeUJFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDWkY7QURnQkU7RUFUQSwrREFBQTtFQUNBLDRFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNIRjtBRE9FO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDTUY7QURGRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ2VGO0FEWEU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUN3QkY7QURwQkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUNpQ0Y7QUQ3QkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUMwQ0Y7QUR0Q0U7RUFUQSwyREFBQTtFQUNBLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzRkFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0VBQUE7QUNtREY7QUR0Q0E7RUVnT00sT0YvTnVCO0VFZ092QixRRmhPaUI7RUV5UHJCLE1GelBrQjtFRTBQbEIsU0YxUHdCO0VBRXhCLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVR3RCK0I7QUYrRGpDO0FEdENBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDeUNGO0FEdENBO0VBQ0UsVUFBQTtBQ3lDRjtBRG5DQTtFQUNFLDZCQUFBO0FDc0NGO0FEbkNBO0VBQ0U7SUFDRSxpREFBQTtFQ3NDRjtBQUNGO0FEbENBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLHdEQUFBO0lBQ0Esb0RBQUE7SUFDQSxzREFBQTtFQ29DRjtBQUNGO0FEakNBO0VBQ0U7SUFDRSw2Q0FBQTtJQUNBLG1EQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtFQ21DRjtBQUNGO0FGcEpBLHdDQUFBO0FLUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRDRDQTtFQUNFLGlCQUFBO0FDN0NGO0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3pKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNURjtBRFlBO0VBQ0UsYUFBQTtBQ1RGO0FEWUE7RUFDRSxhQUFBO0FDVEY7QURZQTtFSlVFLGtDQUFBO0VBQ0EsbUNBQUE7RUErSkUsY0l4S2M7RUp5S2QsZUl6S2M7RUo2TWhCLGFJN01nQjtFSjhNaEIsZ0JJOU1nQjtFSndLZCxlSXZLZTtFSndLZixnQkl4S2U7RUo0TWpCLGNJNU1pQjtFSjZNakIsaUJJN01pQjtFQUVqQixlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDWkY7QUNmQTtFQUNFLG1DQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQzdCRjtBRGdDQTs7Ozs7O0VOdU1FLGdCTWpNZ0I7RU5rTWhCLG1CTWxNNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1MvQjtBRGlDQTtFTjBMRSxnQk16TGdCO0VBRWhCLGVBMUM2QjtBQ1UvQjtBRG1DQTtFTm9MRSxnQk1uTGdCO0VBRWhCLGVBN0M2QjtBQ1cvQjtBRHFDQTtFQUNFLGVBOUM2QjtBQ1cvQjtBRHNDQTtFQUNFLGVBL0M2QjtBQ1kvQjtBRHNDQTtFQUNFLGVBaEQ2QjtBQ2EvQjtBRHNDQTtFQUNFLGVBakQ2QjtBQ2MvQjtBRHNDQTtFQUNFLGNBQUE7QUNuQ0Y7QURzQ0E7O0VBRUUsa0JBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0FDdENGO0FEeUNBO0VBQ0UsV0FBQTtBQ3RDRjtBRHlDQTtFQUNFLGVBQUE7QUN0Q0Y7QUN2REE7RUFDRSx3QkFBQTtBQ05GO0FEZ0JJO0VBQ0Usd0JBQUE7QUNiTjtBVDBISTtFUXRHQTtJQUNFLHdCQUFBO0VDaEJKO0FBQ0Y7QVRnRkk7RVExRUE7SUFDRSx3QkFBQTtFQ0hKO0FBQ0Y7QVQrR0k7RVF0R0E7SUFDRSx3QkFBQTtFQ05KO0FBQ0Y7QVRzRUk7RVExRUE7SUFDRSx3QkFBQTtFQ09KO0FBQ0Y7QVRxR0k7RVF0R0E7SUFDRSx3QkFBQTtFQ0lKO0FBQ0Y7QVQ0REk7RVExRUE7SUFDRSx3QkFBQTtFQ2lCSjtBQUNGO0FUMkZJO0VRdEdBO0lBQ0Usd0JBQUE7RUNjSjtBQUNGO0FUa0RJO0VRMUVBO0lBQ0Usd0JBQUE7RUMyQko7QUFDRjtBRHJCSTtFQUNFLHdCQUFBO0FDdUJOO0FaOUJBLGlEQUFBO0FhTEE7O0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVZxTEUsZVVuTGU7RVZvTGYsZ0JVcExlO0VWd05qQixjVXhOaUI7RVZ5TmpCLGlCVXpOaUI7QUNabkI7QURlQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFVitLRSxzQ1VwTU07RVZxTU4sdUNVck1NO0VWcU9SLHFDVXJPUTtFVnNPUix3Q1V0T1E7QUNhVjtBWDJMTTtFQUNFOztJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ1VqTkE7SVZrTkEsOENVbE5BO0lWbU5BLDZDVW5OQTtJVm9OQSw0Q1VwTkE7RUN1QlI7QUFDRjtBREVBOztFQUVFLHVDQUFBO0VWeU1BLHFDVXJPUTtBQzhCVjtBREdBOztFQUVFLHlDQUFBO0VWaUtFLHNDVXBNTTtBQ21DVjtBWHFLTTtFQUNFOztJQUVJLG1CQUFBO0lBTUYsK0NVak5BO0lWa05BLDhDVWxOQTtFQzBDUjtBQUNGO0FESEE7O0VBRUUsdUNBQUE7RVYySkUsdUNVck1NO0FDaURWO0FYdUpNO0VBQ0U7O0lBS0ksb0JBQUE7SUFLRiw2Q1VuTkE7SVZvTkEsNENVcE5BO0VDd0RSO0FBQ0Y7QURWQTs7RUFFRSwwQ0FBQTtFVnFMQSx3Q1V0T1E7QUMrRFY7QURUQTs7RUFFRSx1Q0FBQTtFQUNBLDBDQUFBO0VWNEtBLHFDVXJPUTtFVnNPUix3Q1V0T1E7QUNzRVY7QURSQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0VWbUlFLHNDVXBNTTtFVnFNTix1Q1VyTU07QUM2RVY7QVgySE07RUFDRTs7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NVak5BO0lWa05BLDhDVWxOQTtJVm1OQSw2Q1VuTkE7SVZvTkEsNENVcE5BO0VDdUZSO0FBQ0Y7QURkQTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RVZpSEUsY1UvR2M7RVZnSGQsZVVoSGM7RVZvSmhCLGFVcEpnQjtFVnFKaEIsZ0JVckpnQjtBQ21CbEI7QURoQkE7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVYyR0Usb0NVbk1LO0VWb01MLHFDVXBNSztFVm9PUCxtQ1VwT087RVZxT1Asc0NVck9PO0FDK0dUO0FYd0ZNO0VBQ0U7O0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDVWhORDtJVmlOQyw0Q1VqTkQ7SVZrTkMsMkNVbE5EO0lWbU5DLDBDVW5ORDtFQ3lIUDtBQUNGO0FEN0JBOztFQUVFLHFDQUFBO0VWcUlBLG1DVXBPTztBQ2dJVDtBRDVCQTs7RUFFRSx1Q0FBQTtFVjZGRSxvQ1VuTUs7QUNxSVQ7QVhrRU07RUFDRTs7SUFFSSxrQkFBQTtJQU1GLDZDVWhORDtJVmlOQyw0Q1VqTkQ7RUM0SVA7QUFDRjtBRGxDQTs7RUFFRSxxQ0FBQTtFVnVGRSxxQ1VwTUs7QUNtSlQ7QVhvRE07RUFDRTs7SUFLSSxtQkFBQTtJQUtGLDJDVWxORDtJVm1OQywwQ1VuTkQ7RUMwSlA7QUFDRjtBRHpDQTs7RUFFRSx3Q0FBQTtFVmlIQSxzQ1VyT087QUNpS1Q7QUR4Q0E7O0VBRUUscUNBQUE7RUFDQSx3Q0FBQTtFVndHQSxtQ1VwT087RVZxT1Asc0NVck9PO0FDd0tUO0FEdkNBOztFQUVFLHVDQUFBO0VBQ0EscUNBQUE7RVYrREUsb0NVbk1LO0VWb01MLHFDVXBNSztBQytLVDtBWHdCTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1VoTkQ7SVZpTkMsNENVak5EO0lWa05DLDJDVWxORDtJVm1OQywwQ1VuTkQ7RUN5TFA7QUFDRjtBQ3ZMSTs7RVppWEUsc0JBQUE7QWEzWE47QURlSTs7RVo0V0UsdUJBQUE7QWF0WE47QURlSTs7RVp5VkUsc0JBQUE7QWFuV047QWJnSlc7RUFzTkwsdUJBQUE7QWFuV047QURZSTs7RVoyVkUsdUJBQUE7QWFsV047QWJ3SVc7RUE2Tkwsc0JBQUE7QWFsV047QWJvRUk7RVkvRUE7O0laaVhFLHNCQUFBO0VhaFdKOztFRFpFOztJWjRXRSx1QkFBQTtFYTNWSjs7RURaRTs7SVp5VkUsc0JBQUE7RWF4VUo7RWJxSFM7SUFzTkwsdUJBQUE7RWF4VUo7O0VEZkU7O0laMlZFLHVCQUFBO0VhdlVKO0ViNkdTO0lBNk5MLHNCQUFBO0VhdlVKO0FBQ0Y7QWJ3Q0k7RVkvRUE7O0laaVhFLHNCQUFBO0VhclVKOztFRHZDRTs7SVo0V0UsdUJBQUE7RWFoVUo7O0VEdkNFOztJWnlWRSxzQkFBQTtFYTdTSjtFYjBGUztJQXNOTCx1QkFBQTtFYTdTSjs7RUQxQ0U7O0laMlZFLHVCQUFBO0VhNVNKO0Via0ZTO0lBNk5MLHNCQUFBO0VhNVNKO0FBQ0Y7QWJhSTtFWS9FQTs7SVppWEUsc0JBQUE7RWExU0o7O0VEbEVFOztJWjRXRSx1QkFBQTtFYXJTSjs7RURsRUU7O0laeVZFLHNCQUFBO0VhbFJKO0ViK0RTO0lBc05MLHVCQUFBO0VhbFJKOztFRHJFRTs7SVoyVkUsdUJBQUE7RWFqUko7RWJ1RFM7SUE2Tkwsc0JBQUE7RWFqUko7QUFDRjtBYmRJO0VZL0VBOztJWmlYRSxzQkFBQTtFYS9RSjs7RUQ3RkU7O0laNFdFLHVCQUFBO0VhMVFKOztFRDdGRTs7SVp5VkUsc0JBQUE7RWF2UEo7RWJvQ1M7SUFzTkwsdUJBQUE7RWF2UEo7O0VEaEdFOztJWjJWRSx1QkFBQTtFYXRQSjtFYjRCUztJQTZOTCxzQkFBQTtFYXRQSjtBQUNGO0FDeEhJOztFQUVFLDZCQUFBO0FDWk47QURlSTs7RUFFRSw4QkFBQTtBQ1pOO0FEZUk7O0VBRUUsNEJBQUE7QUNaTjtBRGVJOztFQUVFLDBCQUFBO0FDWk47QURlSTs7RUFFRSwyQkFBQTtBQ1pOO0FEZUk7O0VBRUUsNEJBQUE7QUNaTjtBRGVJOztFQUVFLDhCQUFBO0FDWk47QURlSTs7RUFFRSw4QkFBQTtBQ1pOO0Fmc0RJO0VjL0VBOztJQUVFLDZCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw4QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsNEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDBCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSwyQkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsNEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDhCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw4QkFBQTtFQzZCSjtBQUNGO0FmWUk7RWMvRUE7O0lBRUUsNkJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDhCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw0QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsMEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDJCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw0QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsOEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDhCQUFBO0VDc0VKO0FBQ0Y7QWY3Qkk7RWMvRUE7O0lBRUUsNkJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDhCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSw0QkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsMEJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDJCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSw0QkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsOEJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDhCQUFBO0VDK0dKO0FBQ0Y7QWZ0RUk7RWMvRUE7O0lBRUUsNkJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDhCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSw0QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsMEJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDJCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSw0QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsOEJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDhCQUFBO0VDd0pKO0FBQ0Y7QUM5TEk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ1pOO0FEZUk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ1pOO0FEZUk7O0VBRUUseURBQUE7RUFDQSxxQ0FBQTtBQ1pOO0FqQjRFSTtFZ0IvRUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ09KOztFREpFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNPSjs7RURKRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDT0o7QUFDRjtBakJ3REk7RWdCL0VBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUMwQko7O0VEdkJFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUMwQko7O0VEdkJFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUMwQko7QUFDRjtBakJxQ0k7RWdCL0VBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUM2Q0o7O0VEMUNFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUM2Q0o7O0VEMUNFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUM2Q0o7QUFDRjtBakJrQkk7RWdCL0VBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNnRUo7O0VEN0RFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNnRUo7O0VEN0RFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUNnRUo7QUFDRjtBQ3JGQTs7RUFFRSxpQ0FBQTtBQ1BGO0FEVUE7O0VBRUUsK0JBQUE7QUNQRjtBRFVBOztFQUVFLDZCQUFBO0FDUEY7QURVQTs7RUFFRSw4QkFBQTtBQ1BGO0FEVUE7O0VBRUUsK0JBQUE7QUNQRjtBRFVBOztFQUVFLDJCQUFBO0FDUEY7QURjQTs7RUFFRSwwQkFBQTtBQ1hGO0FEY0E7O0VBRUUsNEJBQUE7QUNYRjtBRGNBOztFQUVFLGtDQUFBO0FDWEY7QURrQkE7O0VBRUUsa0NBQUE7VUFBQSxzQ0FBQTtBQ2ZGO0FEa0JBOztFQUVFLG1DQUFBO1VBQUEsa0NBQUE7QUNmRjtBRGtCQTs7RUFFRSxnQ0FBQTtVQUFBLG9DQUFBO0FDZkY7QURrQkE7O0VBRUUsd0NBQUE7QUNmRjtBRGtCQTs7RUFFRSxvQ0FBQTtVQUFBLHlDQUFBO0FDZkY7QURrQkE7O0VBRUUseUNBQUE7VUFBQSx3Q0FBQTtBQ2ZGO0FEc0JBOztFQUVFLG1DQUFBO1VBQUEsa0NBQUE7QUNuQkY7QURzQkE7O0VBRUUsb0NBQUE7VUFBQSw4QkFBQTtBQ25CRjtBRHNCQTs7RUFFRSxpQ0FBQTtVQUFBLGdDQUFBO0FDbkJGO0FEc0JBOztFQUVFLHFDQUFBO1VBQUEsK0JBQUE7QUNuQkY7QURzQkE7O0VBRUUsc0NBQUE7VUFBQSxnQ0FBQTtBQ25CRjtBdEJ2RUE7RUFDSSxhQUFBO0F1QkhKO0F2QjRCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0F1QnpCRjtBdkIyQkE7RUFDRSxZQUFBO0F1QnhCRjtBdkIwQkE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QXVCdkJGO0F2QjBCQTtFQUNFLG1CQUFBO0F1QnZCRjtBdkIwQkE7RUFFQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7QXVCeEJBO0F2QjBCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBdUJ2QkYiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQXBwIEdsb2JhbCBDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxyXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXHJcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxyXG4gKiBvdXRwdXQgQ1NTLlxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxyXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcclxuICovXHJcblxyXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XHJcblxyXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcclxuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyc7XHJcblxyXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICAgLy9mb250LWZhbWlseTogJ2FyaWFsJztcclxuICAgIFxyXG4gIH1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIC8vIGlvbi1jYXJke1xyXG4gIC8vICAgICB3aWR0aDoxMDAlO1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIG1hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgLy8gICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIC8vIHBhZGRpbmc6IDBweDtcclxuICAvLyAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAvLyAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAvLyAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAvLyB9XHJcbn1cclxuaW9uLWNvbHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbmgze1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbnNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBcclxufVxyXG4uY2VudGVyLWNsYXNze1xyXG4gIC8vIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNwZWNpYWwtaW9uLWJ1dHRvbntcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbiIsbnVsbCwiaHRtbC5pb3Mge1xyXG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmh0bWwubWQge1xyXG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMwY2QxZTgpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCAxMiwgMjA5LCAyMzIpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzBiYjhjYykgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICMyNGQ2ZWEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItdGVydGlhcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzcwNDRmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgMTEyLCA2OCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM2MzNjZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM3ZTU3ZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3Itc3VjY2VzcyB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgMTYsIDIyMCwgOTYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzBlYzI1NCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjMjhlMDcwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwgMjA2LCAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGI1MDApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmZDMxYSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1kYW5nZXIge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyNDAsIDY1LCA2NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjZDMzOTM5KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2YyNTQ1NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1saWdodCB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItbWVkaXVtIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTg5YWEyKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTUyLCAxNTQsIDE2MikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODY4ODhmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2EyYTRhYikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1kYXJrIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwgMzYsIDQwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5pb24tcm91dGUsXHJcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcclxuaW9uLXJvdXRlcixcclxuaW9uLXNlbGVjdC1vcHRpb24sXHJcbmlvbi1uYXYtY29udHJvbGxlcixcclxuaW9uLW1lbnUtY29udHJvbGxlcixcclxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxyXG5pb24tYWxlcnQtY29udHJvbGxlcixcclxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcclxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXHJcbmlvbi1waWNrZXItY29udHJvbGxlcixcclxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcclxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXHJcbi5pb24tcGFnZS1oaWRkZW4sXHJcbltoaWRkZW5dIHtcclxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xyXG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xyXG4gIH1cclxufVxyXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gIGh0bWwge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gIGh0bWwge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5jc3MubWFwICovXHJcbiIsbnVsbCxudWxsLG51bGwsImF1ZGlvLFxyXG5jYW52YXMsXHJcbnByb2dyZXNzLFxyXG52aWRlbyB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5iLFxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbnN2Zzpub3QoOnJvb3QpIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbjogMWVtIDQwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbmNvZGUsXHJcbmtiZCxcclxucHJlLFxyXG5zYW1wIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbmxhYmVsLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcblxyXG5mb3JtLFxyXG5pbnB1dCxcclxub3B0Z3JvdXAsXHJcbnNlbGVjdCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxyXG5pbnB1dFt0eXBlPXJlc2V0XSxcclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcbmEsXHJcbmEgZGl2LFxyXG5hIHNwYW4sXHJcbmEgaW9uLWljb24sXHJcbmEgaW9uLWxhYmVsLFxyXG5idXR0b24sXHJcbmJ1dHRvbiBkaXYsXHJcbmJ1dHRvbiBzcGFuLFxyXG5idXR0b24gaW9uLWljb24sXHJcbmJ1dHRvbiBpb24tbGFiZWwsXHJcbi5pb24tdGFwcGFibGUsXHJcblt0YXBwYWJsZV0sXHJcblt0YXBwYWJsZV0gZGl2LFxyXG5bdGFwcGFibGVdIHNwYW4sXHJcblt0YXBwYWJsZV0gaW9uLWljb24sXHJcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcblxyXG5hIGlvbi1sYWJlbCxcclxuYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG5bdGFwcGFibGVdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmFbZGlzYWJsZWRdLFxyXG5idXR0b25bZGlzYWJsZWRdLFxyXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0sXHJcbmlucHV0W3R5cGU9cmFkaW9dIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5jc3MubWFwICovXHJcbiIsbnVsbCwiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG59XHJcblxyXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwucGx0LXB3YSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcclxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHJ1Y3R1cmUuY3NzLm1hcCAqL1xyXG4iLG51bGwsImh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xyXG59XHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG59XHJcblxyXG5zdWIsXHJcbnN1cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuc3VwIHtcclxuICB0b3A6IC0wLjVlbTtcclxufVxyXG5cclxuc3ViIHtcclxuICBib3R0b206IC0wLjI1ZW07XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24taGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWhpZGUtdXAge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmlvbi1oaWRlLWRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuaW9uLWhpZGUtc20tdXAge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW9uLWhpZGUtc20tZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pb24taGlkZS1tZC11cCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5pb24taGlkZS1tZC1kb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmlvbi1oaWRlLWxnLXVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5pb24taGlkZS1sZy1kb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5pb24taGlkZS14bC11cCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5pb24taGlkZS14bC1kb3duIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24tbm8tcGFkZGluZyxcclxuW25vLXBhZGRpbmddIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZyxcclxuW3BhZGRpbmddIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1wYWRkaW5nLFxyXG5bcGFkZGluZ10ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctdG9wLFxyXG5bcGFkZGluZy10b3BdIHtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG4uaW9uLXBhZGRpbmctc3RhcnQsXHJcbltwYWRkaW5nLXN0YXJ0XSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLXBhZGRpbmctc3RhcnQsXHJcbltwYWRkaW5nLXN0YXJ0XSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLWVuZCxcclxuW3BhZGRpbmctZW5kXSB7XHJcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tcGFkZGluZy1lbmQsXHJcbltwYWRkaW5nLWVuZF0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy1ib3R0b20sXHJcbltwYWRkaW5nLWJvdHRvbV0ge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbi5pb24tcGFkZGluZy12ZXJ0aWNhbCxcclxuW3BhZGRpbmctdmVydGljYWxdIHtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCxcclxuW3BhZGRpbmctaG9yaXpvbnRhbF0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCxcclxuW3BhZGRpbmctaG9yaXpvbnRhbF0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLW5vLW1hcmdpbixcclxuW25vLW1hcmdpbl0ge1xyXG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xyXG4gIC0tbWFyZ2luLWVuZDogMDtcclxuICAtLW1hcmdpbi10b3A6IDA7XHJcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLFxyXG5bbWFyZ2luXSB7XHJcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1tYXJnaW4sXHJcblttYXJnaW5dIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLW1hcmdpbi10b3AsXHJcblttYXJnaW4tdG9wXSB7XHJcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG4uaW9uLW1hcmdpbi1zdGFydCxcclxuW21hcmdpbi1zdGFydF0ge1xyXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLW1hcmdpbi1zdGFydCxcclxuW21hcmdpbi1zdGFydF0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLW1hcmdpbi1lbmQsXHJcblttYXJnaW4tZW5kXSB7XHJcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1tYXJnaW4tZW5kLFxyXG5bbWFyZ2luLWVuZF0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLW1hcmdpbi1ib3R0b20sXHJcblttYXJnaW4tYm90dG9tXSB7XHJcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCxcclxuW21hcmdpbi12ZXJ0aWNhbF0ge1xyXG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsLFxyXG5bbWFyZ2luLWhvcml6b250YWxdIHtcclxuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tbWFyZ2luLWhvcml6b250YWwsXHJcblttYXJnaW4taG9yaXpvbnRhbF0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXBhZGRpbmcuY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24tZmxvYXQtbGVmdCxcclxuW2Zsb2F0LWxlZnRdIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWZsb2F0LXJpZ2h0LFxyXG5bZmxvYXQtcmlnaHRdIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1mbG9hdC1zdGFydCxcclxuW2Zsb2F0LXN0YXJ0XSB7XHJcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQtc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXN0YXJ0XSB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tZmxvYXQtZW5kLFxyXG5bZmxvYXQtZW5kXSB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1lbmRdIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuaW9uLWZsb2F0LXNtLWxlZnQsXHJcbltmbG9hdC1zbS1sZWZ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1zbS1yaWdodCxcclxuW2Zsb2F0LXNtLXJpZ2h0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtc20tc3RhcnQsXHJcbltmbG9hdC1zbS1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LXNtLXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXNtLWVuZCxcclxuW2Zsb2F0LXNtLWVuZF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LXNtLWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tZW5kXSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW9uLWZsb2F0LW1kLWxlZnQsXHJcbltmbG9hdC1tZC1sZWZ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1tZC1yaWdodCxcclxuW2Zsb2F0LW1kLXJpZ2h0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbWQtc3RhcnQsXHJcbltmbG9hdC1tZC1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LW1kLXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LW1kLWVuZCxcclxuW2Zsb2F0LW1kLWVuZF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LW1kLWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtZW5kXSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuaW9uLWZsb2F0LWxnLWxlZnQsXHJcbltmbG9hdC1sZy1sZWZ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1sZy1yaWdodCxcclxuW2Zsb2F0LWxnLXJpZ2h0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbGctc3RhcnQsXHJcbltmbG9hdC1sZy1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LWxnLXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LWxnLWVuZCxcclxuW2Zsb2F0LWxnLWVuZF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LWxnLWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctZW5kXSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmlvbi1mbG9hdC14bC1sZWZ0LFxyXG5bZmxvYXQteGwtbGVmdF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQteGwtcmlnaHQsXHJcbltmbG9hdC14bC1yaWdodF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXhsLXN0YXJ0LFxyXG5bZmxvYXQteGwtc3RhcnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC14bC1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtc3RhcnRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC14bC1lbmQsXHJcbltmbG9hdC14bC1lbmRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC14bC1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLWVuZF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0LWVsZW1lbnRzLmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLXRleHQtY2VudGVyLFxyXG5bdGV4dC1jZW50ZXJdIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWp1c3RpZnksXHJcblt0ZXh0LWp1c3RpZnldIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1zdGFydCxcclxuW3RleHQtc3RhcnRdIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtZW5kLFxyXG5bdGV4dC1lbmRdIHtcclxuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWxlZnQsXHJcblt0ZXh0LWxlZnRdIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1yaWdodCxcclxuW3RleHQtcmlnaHRdIHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtbm93cmFwLFxyXG5bdGV4dC1ub3dyYXBdIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC13cmFwLFxyXG5bdGV4dC13cmFwXSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuaW9uLXRleHQtc20tY2VudGVyLFxyXG5bdGV4dC1zbS1jZW50ZXJdIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLWp1c3RpZnksXHJcblt0ZXh0LXNtLWp1c3RpZnldIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1zdGFydCxcclxuW3RleHQtc20tc3RhcnRdIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tZW5kLFxyXG5bdGV4dC1zbS1lbmRdIHtcclxuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLWxlZnQsXHJcblt0ZXh0LXNtLWxlZnRdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1yaWdodCxcclxuW3RleHQtc20tcmlnaHRdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tbm93cmFwLFxyXG5bdGV4dC1zbS1ub3dyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS13cmFwLFxyXG5bdGV4dC1zbS13cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pb24tdGV4dC1tZC1jZW50ZXIsXHJcblt0ZXh0LW1kLWNlbnRlcl0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtanVzdGlmeSxcclxuW3RleHQtbWQtanVzdGlmeV0ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLXN0YXJ0LFxyXG5bdGV4dC1tZC1zdGFydF0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1lbmQsXHJcblt0ZXh0LW1kLWVuZF0ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtbGVmdCxcclxuW3RleHQtbWQtbGVmdF0ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLXJpZ2h0LFxyXG5bdGV4dC1tZC1yaWdodF0ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1ub3dyYXAsXHJcblt0ZXh0LW1kLW5vd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLXdyYXAsXHJcblt0ZXh0LW1kLXdyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmlvbi10ZXh0LWxnLWNlbnRlcixcclxuW3RleHQtbGctY2VudGVyXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1qdXN0aWZ5LFxyXG5bdGV4dC1sZy1qdXN0aWZ5XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctc3RhcnQsXHJcblt0ZXh0LWxnLXN0YXJ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLWVuZCxcclxuW3RleHQtbGctZW5kXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1sZWZ0LFxyXG5bdGV4dC1sZy1sZWZ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctcmlnaHQsXHJcblt0ZXh0LWxnLXJpZ2h0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCxcclxuW3RleHQtbGctbm93cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctd3JhcCxcclxuW3RleHQtbGctd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmlvbi10ZXh0LXhsLWNlbnRlcixcclxuW3RleHQteGwtY2VudGVyXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1qdXN0aWZ5LFxyXG5bdGV4dC14bC1qdXN0aWZ5XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtc3RhcnQsXHJcblt0ZXh0LXhsLXN0YXJ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLWVuZCxcclxuW3RleHQteGwtZW5kXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1sZWZ0LFxyXG5bdGV4dC14bC1sZWZ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtcmlnaHQsXHJcblt0ZXh0LXhsLXJpZ2h0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLW5vd3JhcCxcclxuW3RleHQteGwtbm93cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtd3JhcCxcclxuW3RleHQteGwtd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC1hbGlnbm1lbnQuY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24tdGV4dC11cHBlcmNhc2UsXHJcblt0ZXh0LXVwcGVyY2FzZV0ge1xyXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1sb3dlcmNhc2UsXHJcblt0ZXh0LWxvd2VyY2FzZV0ge1xyXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jYXBpdGFsaXplLFxyXG5bdGV4dC1jYXBpdGFsaXplXSB7XHJcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5pb24tdGV4dC1zbS11cHBlcmNhc2UsXHJcblt0ZXh0LXNtLXVwcGVyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLWxvd2VyY2FzZSxcclxuW3RleHQtc20tbG93ZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSxcclxuW3RleHQtc20tY2FwaXRhbGl6ZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlvbi10ZXh0LW1kLXVwcGVyY2FzZSxcclxuW3RleHQtbWQtdXBwZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtbG93ZXJjYXNlLFxyXG5bdGV4dC1tZC1sb3dlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplLFxyXG5bdGV4dC1tZC1jYXBpdGFsaXplXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuaW9uLXRleHQtbGctdXBwZXJjYXNlLFxyXG5bdGV4dC1sZy11cHBlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1sb3dlcmNhc2UsXHJcblt0ZXh0LWxnLWxvd2VyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUsXHJcblt0ZXh0LWxnLWNhcGl0YWxpemVdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuaW9uLXRleHQteGwtdXBwZXJjYXNlLFxyXG5bdGV4dC14bC11cHBlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1sb3dlcmNhc2UsXHJcblt0ZXh0LXhsLWxvd2VyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUsXHJcblt0ZXh0LXhsLWNhcGl0YWxpemVdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLWFsaWduLXNlbGYtc3RhcnQsXHJcblthbGlnbi1zZWxmLXN0YXJ0XSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtZW5kLFxyXG5bYWxpZ24tc2VsZi1lbmRdIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyLFxyXG5bYWxpZ24tc2VsZi1jZW50ZXJdIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gsXHJcblthbGlnbi1zZWxmLXN0cmV0Y2hdIHtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSxcclxuW2FsaWduLXNlbGYtYmFzZWxpbmVdIHtcclxuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtYXV0byxcclxuW2FsaWduLXNlbGYtYXV0b10ge1xyXG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi13cmFwLFxyXG5bd3JhcF0ge1xyXG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLW5vd3JhcCxcclxuW25vd3JhcF0ge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24td3JhcC1yZXZlcnNlLFxyXG5bd3JhcC1yZXZlcnNlXSB7XHJcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtc3RhcnQsXHJcbltqdXN0aWZ5LWNvbnRlbnQtc3RhcnRdIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLFxyXG5banVzdGlmeS1jb250ZW50LWNlbnRlcl0ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCxcclxuW2p1c3RpZnktY29udGVudC1lbmRdIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCxcclxuW2p1c3RpZnktY29udGVudC1hcm91bmRdIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuLFxyXG5banVzdGlmeS1jb250ZW50LWJldHdlZW5dIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5LFxyXG5banVzdGlmeS1jb250ZW50LWV2ZW5seV0ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24taXRlbXMtc3RhcnQsXHJcblthbGlnbi1pdGVtcy1zdGFydF0ge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24taXRlbXMtY2VudGVyLFxyXG5bYWxpZ24taXRlbXMtY2VudGVyXSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCxcclxuW2FsaWduLWl0ZW1zLWVuZF0ge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gsXHJcblthbGlnbi1pdGVtcy1zdHJldGNoXSB7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSxcclxuW2FsaWduLWl0ZW1zLWJhc2VsaW5lXSB7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsZXgtdXRpbHMuY3NzLm1hcCAqL1xyXG4iLCIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MnO1xuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XG5pb24tdGl0bGUge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jZW50ZXItY2xhc3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNwZWNpYWwtaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ1ZGIiwiZmlsZSI6InNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcclxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuOnJvb3Qge1xyXG4gIC8qKiBwcmltYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xyXG5cclxuICAvKiogc2Vjb25kYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxMiwgMjA5LCAyMzI7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xyXG5cclxuICAvKiogdGVydGlhcnkgKiovXHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3MDQ0ZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XHJcblxyXG4gIC8qKiBzdWNjZXNzICoqL1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LCAyMjAsIDk2O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzBlYzI1NDtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XHJcblxyXG4gIC8qKiB3YXJuaW5nICoqL1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjA2LCAwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XHJcblxyXG4gIC8qKiBkYW5nZXIgKiovXHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcclxuXHJcbiAgLyoqIGRhcmsgKiovXHJcbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcclxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcclxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XHJcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xyXG5cclxuICAvKiogbWVkaXVtICoqL1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcclxuXHJcbiAgLyoqIGxpZ2h0ICoqL1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcclxuXHJcbn1cclxuIiwiLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDEyLCAyMDksIDIzMjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwYmI4Y2M7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\SF\Ionic\HS\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! D:\SF\Ionic\HS\src\global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map