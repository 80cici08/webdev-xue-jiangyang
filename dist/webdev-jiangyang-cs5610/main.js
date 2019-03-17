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

module.exports = "<router-outlet></router-outlet>\n<div class=\"\"></div>\n"

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
        // color = 'green';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/change-bg-color.directive */ "./src/app/directives/change-bg-color.directive.ts");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");





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
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__["PageListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__["PageEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"],
                _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_26__["ChangeBgColorDirective"],
                _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__["SortableDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"]],
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

/***/ "./src/app/directives/sortable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position:' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
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
    function Widget(_id, type, pageId, size, text, width, url, name) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        if (name === void 0) { name = ''; }
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
        this.name = name;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        // pages = [
        //   new Page('321', 'Post 1', '123', 'Lorem'),
        //   new Page('324', 'Post 2', '123', 'Lorem'),
        //   new Page('432', 'Post 3', '234', 'Lorem'),
        //   new Page('543', 'Post 4', '234', 'Lorem'),
        //
        // ];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // users: User[] = [
    //   new User('123', 'alice', 'alice', 'Alice', 'Wonder', ''),
    //   new User('234', 'bob', 'bob', 'Bob', 'Marley', ''),
    //   new User('345', 'charly', 'charly', 'Charly', 'Garcia', ''),
    //   new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', ''),
    // ];
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user/', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log("baseUrl:" + this.baseUrl);
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // websites = [
    //   new Website('123', 'Facebook', '123', 'Lorem'),
    //   new Website('234', 'Tweeter', '123', 'Lorem'),
    //   new Website('456', 'Gizmode', '234', 'Lorem'),
    //   new Website('890', 'Go', '234', 'Lorem'),
    // ];
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        // widgets = [
        //   new Widget('123', 'HEADING', '321', '2', 'GIZMODO', '', ''),
        //   new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum', '', ''),
        //   new Widget('345', 'IMAGE', '321', '', '', '100%', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'),
        //   new Widget('456', 'HEADING', '321', '3', 'Lorem ipsum', '', ''),
        //   new Widget('789', 'YOUTUBE', '321', '', '', '100%', 'https://www.youtube.com/embed/APexI9Zb6iE'),
        // ];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this._http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"javascript:void(0);\"> Edit Page</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"editPage()\" href=\"javascript:void(0);\"><i class=\"fas fa-check\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             [class.is-invalid]=\"!pageName.valid && pageName.touched\"\n             id=\"page-name\"\n             name=\"name\"\n             placeholder=\"Page Name\"\n             [(ngModel)]=\"page.name\" required #pageName=\"ngModel\">\n    </div>\n    <small class=\"form-text text-danger\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name.\n    </small>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             name=\"description\"\n             placeholder=\"Page Title\"\n             [(ngModel)]=\"page.title\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter page name.';
        this.errorFlag = false;
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (data) {
            _this.page = data;
        });
        // const copy: Page = this.pageService.findPageById(this.pageId);
        // this.page = new Page(copy._id, copy.name, copy.websiteId, copy.title);
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.editPage = function () {
        var _this = this;
        if (this.page.name === undefined || this.page.name === '') {
            this.errorFlag = true;
        }
        else {
            this.pageService.updatePage(this.pageId, this.page)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"javascript:void(0);\"> Pages</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i\n      class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"javascript:void(0);\"> New Page</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"createPage()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             [class.is-invalid]=\"!pageName.valid && pageName.touched\"\n             id=\"page-name\"\n             name=\"name\"\n             placeholder=\"Page Name\"\n             [(ngModel)]=\"page.name\" required #pageName=\"ngModel\">\n    </div>\n    <small class=\"form-text text-danger\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name.\n    </small>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             name=\"description\"\n             placeholder=\"Page Title\"\n             [(ngModel)]=\"page.description\">\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
        var _this = this;
        if (this.page.name === undefined || this.page.name === '') {
            this.errorFlag = true;
        }
        else {
            this.pageService.createPage(this.websiteId, this.page)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            });
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

module.exports = "<div class=\"container-fluid\">\n  <h2>Assignment 4 -Jiangyang Xue</h2>\n  <hr>\n  <h2>Login Form</h2>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\" class=\"needs-validation\">\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             [ngClass]=\"{'is-invalid':!username.valid && username.touched}\"\n             type=\"text\"\n             name=\"username\"\n             placeholder=\"Username\"\n             ngModel required #username=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username.\n      </small>\n    </div>\n\n\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!password.valid && password.touched\"\n             type=\"password\"\n             name=\"password\"\n             placeholder=\"Password\"\n             ngModel required #password=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password.\n      </small>\n    </div>\n\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n\n</div>\n\n"

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
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (data) {
            _this.errorFlag = false;
            _this.router.navigate(['user', data._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
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

module.exports = " <div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"javascript:void(0);\">Profile</a>\n    <a (click)=\"onUpdate()\" href=\"javascript:void(0);\" class=\"navbar-text ml-auto\" ><i class=\"fas fa-check fontawsome_icon cl-text-white\"></i></a>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"onGoToWebsites()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!username.valid && username.touched\"\n             type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             placeholder=\"Username\"\n             [(ngModel)]=\"user.username\"\n             required #username=\"ngModel\">\n    <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username.\n    </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!email.valid && email.touched\"\n             type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             placeholder=\"sample@google.com\"\n             [(ngModel)]=\"user.email\"\n             email #email=\"ngModel\">\n    <small class=\"form-text text-danger\" *ngIf=\"!email.valid && email.touched\">\n      Please enter correct email.\n    </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"firstname\"\n             name=\"firstname\"\n             placeholder=\"FirstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"lastname\"\n             name=\"lastname\"\n             placeholder=\"LastName\">\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Websites</button>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</button>\n    </div>\n  </form>\n</div>\n\n\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{user._id}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRouter, router) {
        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.errorMsg = 'Invalid input, please check!';
        this.errorFlag = false;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('111', 'alice', 'alice', 'alice', 'alice', 'alice@alice');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (data) {
                _this.user = data;
            });
        });
    };
    ProfileComponent.prototype.onUpdate = function () {
        var _this = this;
        if (!!this.profileForm.valid) {
            this.userService.updateUser(this.userId, this.user)
                .subscribe(function (data) {
                _this.user = data;
            }, function (error) {
                _this.errorFlag = true;
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    ProfileComponent.prototype.onGoToWebsites = function () {
        this.onUpdate();
        this.router.navigate(['/user', this.user._id, 'website']);
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

module.exports = "<div class=\"container\">\n  <h2>Register</h2>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!username.valid && username.touched\"\n             type=\"text\"\n             name=\"username\"\n             placeholder=\"Username\"\n             ngModel required #username=\"ngModel\">\n    <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username.\n    </small>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!password.valid && password.touched\"\n             type=\"password\"\n             name=\"password\"\n             placeholder=\"Password\"\n             ngModel required #password=\"ngModel\">\n    <small class=\"form-text text-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password.\n    </small>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!verifyPassword.valid && verifyPassword.touched\"\n             type=\"password\"\n             name=\"verifyPassword\"\n             placeholder=\"Verify Password\"\n             ngModel required #verifyPassword=\"ngModel\">\n    <small class=\"form-text text-danger\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please enter verify password.\n    </small>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>\n    </div>\n  </form>\n\n</div>\n"

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
        var _this = this;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('', this.registerForm.value.username, this.registerForm.value.password, '', '', '');
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.user.password !== this.verifyPassword) {
            this.errorFlag = true;
        }
        else {
            this.userService.createUser(this.user)
                .subscribe(function (data) {
                _this.errorFlag = false;
                _this.user = data;
                _this.router.navigate(['/user', _this.user._id]);
            }, function (error) {
                _this.errorFlag = true;
            });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-1 \">\n      <a class=\"navbar-text\" routerLink=\"/user/{{developerId}}/website\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-3 d-none d-sm-block\">\n      <a class=\"navbar-brand ml-3\" href=\"javascript:void(0);\">Websites</a>\n      <a class=\"navbar-text float-right\" routerLink=\"/user/{{developerId}}/website/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\">Edit Website</a>\n      <a class=\"navbar-text float-right\" (click)=\"editWebsite()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-md-4 d-none d-sm-block\">\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let wb of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['../', wb._id, 'page']\">{{ wb.name }}</a>\n          <a [routerLink]=\"['../', wb._id]\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xl-8 col-md-8\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"website-name\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 [class.is-invalid]=\"!websitename.valid && websitename.touched\"\n                 id=\"website-name\"\n                 name=\"name\"\n                 placeholder=\"Enter website name.\"\n                 [(ngModel)]=\"website.name\" required #websitename=\"ngModel\">\n        </div>\n        <small class=\"form-text text-danger\" *ngIf=\"!websitename.valid && websitename.touched\">\n          Please enter website name.\n        </small>\n        <div class=\"form-group\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea id=\"website-description\"\n                    name=\"description\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    placeholder=\"Enter website description.\"\n                    [(ngModel)]=\"website.description\"></textarea>\n        </div>\n        <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWebsite()\">Delete</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{developerId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorMsg = 'Please enter website name.';
        this.errorFlag = false;
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__["Website"]('', '', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.developerId = params.uid;
            _this.websiteId = params.wid;
            // const tmp: Website = this.websiteService.findWebsiteById(this.websiteId);
            // this.website = new Website(tmp._id, tmp.name, tmp.developerId, tmp.description);
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (data) {
            _this.website = data;
        });
        this.websiteService.findWebsiteByUser(this.developerId)
            .subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteEditComponent.prototype.editWebsite = function () {
        var _this = this;
        if (this.website.name === undefined || this.website.name === '') {
            this.errorFlag = true;
        }
        else {
            this.websiteService.updateWebsite(this.websiteId, this.website)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.developerId, 'website']);
            });
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.developerId, 'website']);
        }, function (error) {
            console.log(error);
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"javascript:void(0);\"> Websites</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <ul class=\"list-group list-group-flush\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{ website.name }}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"float-right\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
        this.websiteService.findWebsiteByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-1 \">\n      <a class=\"navbar-text\" routerLink=\"/user/{{developerId}}/website\"><i\n        class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-3 d-none d-sm-block\">\n      <a class=\"navbar-brand ml-3\" href=\"javascript:void(0);\">Websites</a>\n      <a class=\"navbar-text float-right\" routerLink=\"/user/{{developerId}}/website/new\"><i\n        class=\"fas fa-plus fontawsome_icon\"></i></a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\">New Website</a>\n      <a class=\"navbar-text float-right\" (click)=\"createWebsite()\" href=\"javascript:void(0);\"><i\n        class=\"fas fa-check fontawsome_icon\"></i></a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-md-4 d-none d-sm-block\">\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a routerLink=\"/user/{{developerId}}/website/{{website._id}}/page\">{{ website.name }}</a>\n          <a routerLink=\"/user/{{developerId}}/website/{{website._id}}\" class=\"float-right\"><span\n            class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xl-8 col-md-8\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 [class.is-invalid]=\"!websitename.valid && websitename.touched\"\n                 id=\"websiteName\"\n                 name=\"websiteName\"\n                 placeholder=\"name\"\n                 ngModel required #websitename=\"ngModel\">\n        <small class=\"form-text text-danger\" *ngIf=\"!websitename.valid && websitename.touched\">\n          Please enter website name.\n        </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Website Description</label>\n          <textarea type=\"text\"\n                    class=\"form-control\"\n                    id=\"websiteDesc\"\n                    name=\"websiteDesc\"\n                    placeholder=\"description\"\n                    ngModel></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<div class=\"navbar navbar-dark cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{developerId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
        this.websiteService.findWebsiteByUser(this.developerId)
            .subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.websiteName = this.newWebsiteForm.value.websiteName;
        this.websiteDesc = this.newWebsiteForm.value.websiteDesc;
        if (this.websiteName === undefined || this.websiteName === '') {
            this.errorFlag = true;
        }
        else {
            var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_5__["Website"]('', this.websiteName, this.developerId, this.websiteDesc);
            this.websiteService.createWebsite(this.developerId, website)
                .subscribe(function (data) {
                _this.router.navigate(['user', _this.developerId, 'website']);
            });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand mr-auto\" href=\"javascript:void(0);\">Choose Widget</a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('HEADING')\" href=\"javascript:void(0);\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('IMAGE')\" href=\"javascript:void(0);\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('YOUTUBE')\" href=\"javascript:void(0);\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
            'IMAGE': { widgetType: 'IMAGE', width: '100%', url: '' },
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
        var _this = this;
        this.widget = this.defaultWidgetValues[widgetType];
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (data) {
            _this.widget = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget', _this.widget._id]);
        });
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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '');
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             name=\"name\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-text\"\n             name=\"text\"\n             placeholder=\"Text\"\n             [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             name=\"size\"\n             placeholder=\"size\"\n             [(ngModel)]=\"widget.size\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', 'HEADING', '');
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-name\"\n             name=\"name\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-text\"\n             name=\"text\"\n             placeholder=\"Text\"\n             [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             name=\"url\"\n             placeholder=\"URL\"\n             [(ngModel)]=\"widget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             name=\"width\"\n             placeholder=\"100%\"\n             [(ngModel)]=\"widget.width\">\n    </div>\n    <!--<div class=\"form-group\">-->\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <label for=\"exampleInputFile\">Upload</label>\n        <input name=\"myFile\" type=\"file\" class=\"form-control\" id=\"exampleInputFile\"/>\n        <input name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\"/>\n        <input name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\"/>\n        <input name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\"/>\n        <input name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n      </form>\n    <!--</div>-->\n\n  </form>\n  <!--<a class=\"btn btn-primary btn-block\" (click)=\"updateWidget()\">Upload Image</a>-->\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', 'IMAGE', '');
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"#\"> Edit Widget</a>\n    <a class=\"navbar-text ml-auto\" (click)=\"updateWidget()\" href=\"javascript:void(0);\"><i class=\"fas fa-check fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"widget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" name=\"text\" placeholder=\"Text\" [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" name=\"url\" placeholder=\"URL\" [(ngModel)]=\"widget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-width\" name=\"width\" placeholder=\"100%\" [(ngModel)]=\"widget.width\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', 'YOUTUBE', '');
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            _this.websiteId = params.wid;
            _this.pageId = params.pid;
            _this.widgetId = params.wgid;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { _this.widget = data; });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"><i class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand ml-2\" href=\"javascript:void(0);\"> Widgets</a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\"><i class=\"fas fa-plus fontawsome_icon\"></i></a>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"container cl-container-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n        <div class=\"jga-widget-tool\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n            <span class=\"fas fa-cog\"> </span>\n          </a>\n          <span class=\"fas fa-bars\"></span>\n        </div>\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"widget.size\">\n            <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n            <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n            <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n            <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n            <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n            <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\" class=\"embed-responsive embed-responsive-16by9\">\n          <iframe width=\"widget.width\" height=\"360\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img class=\"img-responsive img-rounded cl-widget-images\" [src] = \"widget.url\" width= \"widget.width\"/>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\"></div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<div class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a href=\"#\" class=\"navbar-text cl-icon-padding\"><span class=\"fas fa-play fontawsome_icon\"></span></a>\n    <a href=\"#\" class=\"navbar-text cl-icon-padding\"><span class=\"fas fa-eye fontawsome_icon\"></span></a>\n    <a class=\"navbar-text ml-auto\" routerLink=\"/user/{{userId}}\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

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
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgets = data;
        });
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        console.log('indexes:' + indexes);
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log(data); });
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
    production: false,
    baseUrl: 'http://localhost:3200',
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