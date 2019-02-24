(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n\n<!--<div class=\"container\">-->\n  <!--<ul><a routerLink=\"/login\"> login </a></ul>-->\n  <!--<ul><a routerLink=\"/register\"> register </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website\"> WebSiteList </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/new\"> WebsiteNewComponent </a></ul>-->\n  <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111\"> WebsiteComponentWithId </a></ul>&ndash;&gt;-->\n  <!--<ul><a routerLink=\"/user/123/website/111\"> WebSiteEdit </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page\"> PageListComponent </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page/new\"> PageNewComponent </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page/100\"> PageEditComponent </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page/100/widget\"> WidgetListComponent </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page/100/widget/new\"> WidgetChooserComponent </a></ul>-->\n  <!--<ul><a routerLink=\"/user/123/website/111/page/100/widget/123\"> WidgetEditComponentWithId </a></ul>-->\n<!--</div>-->\n\n<!--<p appChangeBgColor [changeBgColor]=\"color\">Hello World</p>-->\n<router-outlet></router-outlet>\n<div class=\"\"></div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webdev-jiangyang-cs5610';
        this.color = 'green';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/change-bg-color.directive */ "./src/app/directives/change-bg-color.directive.ts");





// import { TestComponent } from './test/test.component';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // TestComponent,
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__["PageListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_17__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_25__["ChangeBgColorDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/change-bg-color.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/change-bg-color.directive.ts ***!
  \*********************************************************/
/*! exports provided: ChangeBgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBgColorDirective", function() { return ChangeBgColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeBgColorDirective = /** @class */ (function () {
    function ChangeBgColorDirective(el) {
        this.el = el;
    }
    ChangeBgColorDirective.prototype.onClick = function () {
        this.changeMe(this.changeBgColor);
    };
    ChangeBgColorDirective.prototype.changeMe = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChangeBgColorDirective.prototype, "changeBgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChangeBgColorDirective.prototype, "onClick", null);
    ChangeBgColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appChangeBgColor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChangeBgColorDirective);
    return ChangeBgColorDirective;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post 1', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('324', 'Post 2', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('432', 'Post 3', '234', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('543', 'Post 4', '234', 'Lorem'),
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random().toString().substr(2, 9);
        page.websiteId = websiteId;
        this.pages.push(page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var found = this.pages.filter(function (ele) {
            return ele.websiteId === websiteId;
        });
        return found;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page._id === pageId) {
                return page;
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");



var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('123', 'alice', 'alice', 'Alice', 'Wonder', ''),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('234', 'bob', 'bob', 'Bob', 'Marley', ''),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('345', 'charly', 'charly', 'Charly', 'Garcia', ''),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', ''),
        ];
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random().toString().substr(2, 9);
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user._id === userId;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === username) {
                return user;
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === username && user.password === password) {
                return user;
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users.splice(x, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Facebook', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('234', 'Tweeter', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Gizmode', '234', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('890', 'Go', '234', 'Lorem'),
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random().toString().substr(2, 9);
        website.developerId = userId;
        this.websites.push(website);
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        var found = this.websites.filter(function (ele) {
            return ele.developerId === userId;
        });
        return found;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
            var website = _a[_i];
            if (website._id === websiteId) {
                return website;
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites.splice(x, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('345', 'IMAGE', '321', '', '', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('456', 'HEADING', '321', '3', 'Lorem ipsum', '', ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('789', 'YOUTUBE', '321', '', '', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE'),
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random().toString().substr(2, 9);
        widget.pageId = pageId;
        this.widgets.push(widget);
        return this.findWidgetById(widget._id);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var found = this.widgets.filter(function (ele) {
            return ele.pageId === pageId;
        });
        return found;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Page</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"editPage()\"><i class=\"fas fa-check\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             name=\"name\"\n             placeholder=\"Page Name\"\n             [(ngModel)]=\"page.name\" required #pageName=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             name=\"description\"\n             placeholder=\"Page Title\"\n             [(ngModel)]=\"page.description\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter page name.';
        this.errorFlag = false;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
        this.page = this.pageService.findPageById(this.pageId);
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.editPage = function () {
        if (this.page.name === undefined || this.page.name === '') {
            this.errorFlag = true;
        }
        else {
            this.pageService.updatePage(this.pageId, this.page);
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Pages</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
        });
        this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i\n      class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> New Page</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"createPage()\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             name=\"name\"\n             placeholder=\"Page Name\"\n             [(ngModel)]=\"page.name\" required #pageName=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             name=\"description\"\n             placeholder=\"Page Title\"\n             [(ngModel)]=\"page.description\">\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter page name.';
        this.errorFlag = false;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = {
            name: '',
            description: ''
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
        });
    };
    PageNewComponent.prototype.createPage = function () {
        if (this.page.name === undefined || this.page.name === '') {
            this.errorFlag = true;
        }
        else {
            this.pageService.createPage(this.websiteId, this.page);
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Assignment 3 -Jiangyang Xue</h2>\n  <hr>\n  <h2>Login Form</h2>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             type=\"text\"\n             name=\"username\"\n             placeholder=\"Username\"\n             ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             type=\"password\"\n             name=\"password\"\n             placeholder=\"Password\"\n             ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (!!user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Profile</a>\n    <a (click)=\"updateUser()\" class=\"navbar-text ml-auto\" ><i class=\"fas fa-check fontawsome_icon cl-text-white\"></i></a>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"updateUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"form-control\"\n             type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             placeholder=\"Username\"\n             [(ngModel)]=\"user.username\"\n             required #username=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input class=\"form-control\"\n             type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             placeholder=\"sample@google.com\"\n             [(ngModel)]=\"user.email\"\n             email #email=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!email.valid && email.touched\">\n      Please enter correct email!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"firstname\"\n             name=\"firstname\"\n             placeholder=\"FirstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"lastname\"\n             name=\"lastname\"\n             placeholder=\"LastName\">\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Websites</button>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</button>\n    </div>\n  </form>\n</div>\n\n\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{user._id}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRouter, router) {
        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.errorMsg = 'Invalid input, please check!';
        this.errorFlag = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.user = _this.userService.findUserById(_this.userId);
            // console.log(this.user);
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        if (!!this.profileForm.valid) {
            this.userService.updateUser(this.user._id, this.user);
            this.router.navigate(['/user', this.user._id, 'website']);
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Register</h2>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             type=\"text\"\n             name=\"username\"\n             placeholder=\"Username\"\n             ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             type=\"password\"\n             name=\"password\"\n             placeholder=\"Password\"\n             ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             type=\"password\"\n             name=\"verifyPassword\"\n             placeholder=\"Verify Password\"\n             ngModel required #verifyPassword=\"ngModel\">\n    </div>\n    <span class=\"form-text text-muted\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please enter verify password!\n    </span>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Passwords are not the same!';
        this.errorFlag = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('', this.registerForm.value.username, this.registerForm.value.password, '', '', '');
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.user.password !== this.verifyPassword) {
            this.errorFlag = true;
        }
        else {
            this.errorFlag = false;
            this.user = this.userService.createUser(this.user);
            this.router.navigate(['/user', this.user._id]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-1 \">\n      <a class=\"navbar-text\" routerLink=\"/user/{{developerId}}/website\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-3 d-none d-sm-block\">\n      <a class=\"navbar-brand ml-3\" href=\"#\">Websites</a>\n      <a class=\"navbar-text float-right\" routerLink=\"/user/{{developerId}}/website/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-brand\" href=\"#\">Edit Website</a>\n      <a class=\"navbar-text float-right\" (click)=\"editWebsite()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-md-4 d-none d-sm-block\">\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let wb of websites\">\n        <li class=\"list-group-item\">\n          <a routerLink=\"/user/{{developerId}}/website/{{wb._id}}/page\">{{ wb.name }}</a>\n          <a routerLink=\"/user/{{developerId}}/website/{{wb._id}}\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xl-8 col-md-8\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"website-name\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 name=\"name\"\n                 placeholder=\"Enter website name.\"\n                 [(ngModel)]=\"websiteName\" required #websitename=\"ngModel\">\n        </div>\n        <span class=\"form-text text-muted\" *ngIf=\"!websitename.valid && websitename.touched\">\n          Please enter website name!\n        </span>\n        <div class=\"form-group\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea id=\"website-description\"\n                    name=\"description\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    placeholder=\"Enter website description.\"\n                    [(ngModel)]=\"website.description\"></textarea>\n        </div>\n        <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWebsite()\">Delete</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{developerId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter website name.';
        this.errorFlag = false;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.developerId = params.uid;
            _this.websiteId = params.wid;
            _this.website = _this.websiteService.findWebsiteById(_this.websiteId);
            _this.websiteName = _this.website.name;
            // console.log(this.website);
        });
        this.websites = this.websiteService.findWebsiteByUser(this.developerId);
    };
    WebsiteEditComponent.prototype.editWebsite = function () {
        if (this.website.name === '') {
            this.errorFlag = true;
        }
        else {
            this.website.name = this.websiteName;
            this.websiteService.updateWebsite(this.websiteId, this.website);
            this.router.navigate(['/user', this.developerId, 'website']);
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['/user', this.developerId, 'website']);
        // console.log(this.websiteService.websites);
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Websites</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <ul class=\"list-group list-group-flush\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{ website.name }}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
        });
        this.websites = this.websiteService.findWebsiteByUser(this.userId);
        // console.log(this.websites);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-1 \">\n      <a class=\"navbar-text\" routerLink=\"/user/{{developerId}}/website\"><i\n        class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-3 d-none d-sm-block\">\n      <a class=\"navbar-brand ml-3\" href=\"#\">Websites</a>\n      <a class=\"navbar-text float-right\" routerLink=\"/user/{{developerId}}/website/new\"><i\n        class=\"fas fa-plus fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-brand\" href=\"#\">New Website</a>\n      <a class=\"navbar-text float-right\" (click)=\"createWebsite()\" href=\"javascript:void(0);\"><i\n        class=\"fas fa-check fontawsome_icon\"></i></a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-md-4 d-none d-sm-block\">\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a routerLink=\"/user/{{developerId}}/website/{{website._id}}/page\">{{ website.name }}</a>\n          <a routerLink=\"/user/{{developerId}}/website/{{website._id}}\" class=\"float-right\"><span\n            class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xl-8 col-md-8\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"websiteName\"\n                 name=\"websiteName\"\n                 placeholder=\"name\"\n                 ngModel required #websitename=\"ngModel\">\n        </div>\n        <span class=\"form-text text-muted\" *ngIf=\"!websitename.valid && websitename.touched\">\n          Please enter website name!\n        </span>\n\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Website Description</label>\n          <textarea type=\"text\"\n                    class=\"form-control\"\n                    id=\"websiteDesc\"\n                    name=\"websiteDesc\"\n                    placeholder=\"description\"\n                    ngModel></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{developerId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter website name.';
        this.errorFlag = false;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.developerId = params.uid;
        });
        this.websites = this.websiteService.findWebsiteByUser(this.developerId);
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        this.websiteName = this.newWebsiteForm.value.websiteName;
        this.websiteDesc = this.newWebsiteForm.value.websiteDesc;
        var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_5__["Website"]('', this.websiteName, this.developerId, this.websiteDesc);
        if (this.websiteName === undefined) {
            this.errorFlag = true;
        }
        else {
            this.websiteService.createWebsite(this.developerId, { name: this.websiteName, description: this.websiteDesc });
            this.router.navigate(['user', this.developerId, 'website']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteNewComponent.prototype, "newWebsiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand mr-auto\" href=\"#\">Choose Widget</a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('HEADING')\" href=\"javascript:void(0);\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('IMAGE')\" href=\"javascript:void(0);\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('YOUTUBE')\" href=\"javascript:void(0);\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.defaultWidgetValues = {
            'HEADING': { widgetType: 'HEADING', 'size': 1 },
            'IMAGE': { widgetType: 'IMAGE', width: '100%' },
            'YOUTUBE': { widgetType: 'YOUTUBE', width: '100%' },
            'HTML': { widgetType: 'HTML' },
            'TEXT': { widgetType: 'TEXT', placeholder: '' }
        };
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        this.widget = this.defaultWidgetValues[widgetType];
        this.widget = this.widgetService.createWidget(this.pageId, this.widget);
        // console.log(this.widgetService.widgets);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params.wgid;
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             name=\"name\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-text\"\n             name=\"text\"\n             placeholder=\"Text\"\n             [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             name=\"size\"\n             placeholder=\"size\"\n             [(ngModel)]=\"widget.size\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-name\"\n             name=\"name\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-text\"\n             name=\"text\"\n             placeholder=\"Text\"\n             [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             name=\"url\"\n             placeholder=\"URL\"\n             [(ngModel)]=\"widget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             name=\"width\"\n             placeholder=\"100%\"\n             [(ngModel)]=\"widget.width\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" href=\"#\">Upload Image</a>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" name=\"text\" placeholder=\"Text\" [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" name=\"url\" placeholder=\"URL\" [(ngModel)]=\"widget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-width\" name=\"width\" placeholder=\"100%\" [(ngModel)]=\"widget.width\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jga-widget-tool {\n  position: absolute;\n  right: 15px;\n  background-color: white;\n  padding-right: 0.5rem;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  border-bottom-left-radius: 8px;\n  opacity: 0.7;\n  z-index: 2;\n}\n\n\n.youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFdBQVc7Q0FDWjs7O0FBR0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCLENBQUMsVUFBVTtFQUNsQyxVQUFVO0NBQ1g7OztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFROztFQUVSLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpnYS13aWRnZXQtdG9vbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMjtcbn1cblxuXG4ueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuXG4ueW91dHViZS13aWRnZXQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Widgets</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container cl-container-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n        <div class=\"jga-widget-tool\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n            <span class=\"fas fa-cog\"> </span>\n          </a>\n          <span class=\"fas fa-bars\"></span>\n        </div>\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"widget.size\">\n            <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n            <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n            <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n            <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n            <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n            <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\" class=\"embed-responsive embed-responsive-16by9\">\n          <iframe width=\"widget.width\" height=\"360\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img class=\"img-responsive img-rounded cl-widget-images\" [src] = \"widget.url\" width= \"widget.width\"/>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\"></div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a href=\"#\" class=\"navbar-text cl-icon-padding\"><span class=\"fas fa-play fontawsome_icon\"></span></a>\n    <a href=\"#\" class=\"navbar-text cl-icon-padding\"><span class=\"fas fa-eye fontawsome_icon\"></span></a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, router, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        console.log(this.widgets);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xuejiangyang/Documents/NEU/CS5610/Project/webdev-jiangyang-cs5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map