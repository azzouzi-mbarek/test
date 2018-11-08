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

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _navigateur_navigateurs_navigateurs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigateur/navigateurs/navigateurs.component */ "./src/app/admin/navigateur/navigateurs/navigateurs.component.ts");
/* harmony import */ var _navigateur_details_navigateur_details_navigateur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigateur/details-navigateur/details-navigateur.component */ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.ts");
/* harmony import */ var _navigateur_navigateurs_navigateur_not_found_navigateur_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component */ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.ts");
/* harmony import */ var _service_navigateur_details_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/navigateur-details-guard.service */ "./src/app/admin/service/navigateur-details-guard.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _navigateur_situation_situations_situations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigateur/situation/situations/situations.component */ "./src/app/admin/navigateur/situation/situations/situations.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./region/region.component */ "./src/app/admin/region/region.component.ts");
/* harmony import */ var _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./region/details-region/details-region.component */ "./src/app/admin/region/details-region/details-region.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'administrateur', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]],
        children: [
            { path: 'navigateurs', component: _navigateur_navigateurs_navigateurs_component__WEBPACK_IMPORTED_MODULE_3__["NavigateursComponent"] },
            {
                path: 'navigateurs/:id', component: _navigateur_details_navigateur_details_navigateur_component__WEBPACK_IMPORTED_MODULE_4__["DetailsNavigateurComponent"], canActivate: [_service_navigateur_details_guard_service__WEBPACK_IMPORTED_MODULE_6__["NavigateurDetailsGuardService"]],
                children: [
                    { path: 'situations', component: _navigateur_situation_situations_situations_component__WEBPACK_IMPORTED_MODULE_8__["SituationsComponent"] }
                ]
            },
            { path: 'regions', component: _region_region_component__WEBPACK_IMPORTED_MODULE_9__["RegionComponent"] },
            { path: 'regions/:id', component: _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_10__["DetailsRegionComponent"] },
            { path: 'countries', component: _country_country_component__WEBPACK_IMPORTED_MODULE_11__["CountryComponent"] }
        ]
    },
    { path: 'navigateurNotFound', component: _navigateur_navigateurs_navigateur_not_found_navigateur_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NavigateurNotFoundComponent"] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <app-nav-right></app-nav-right>\n    <div id=\"page-wrapper\" class=\"gray-bg dashbard-1\">\n        <app-nav-bar-top></app-nav-bar-top>\n\n        <!--body-->\n        <router-outlet></router-outlet>\n\n        <!--body-->\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth) {
        this.auth = auth;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.className = ' md-skin   ';
        this.auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar-top/nav-bar-top.component */ "./src/app/admin/nav-bar-top/nav-bar-top.component.ts");
/* harmony import */ var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-right/nav-right.component */ "./src/app/admin/nav-right/nav-right.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/admin/footer/footer.component.ts");
/* harmony import */ var _navigateur_navigateurs_navigateurs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigateur/navigateurs/navigateurs.component */ "./src/app/admin/navigateur/navigateurs/navigateurs.component.ts");
/* harmony import */ var _navigateur_details_navigateur_details_navigateur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigateur/details-navigateur/details-navigateur.component */ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.ts");
/* harmony import */ var _navigateur_filter_navigateur_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigateur/filter/navigateur-filter.pipe */ "./src/app/admin/navigateur/filter/navigateur-filter.pipe.ts");
/* harmony import */ var _navigateur_navigateurs_navigateur_not_found_navigateur_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component */ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.ts");
/* harmony import */ var _service_navigateur_details_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/navigateur-details-guard.service */ "./src/app/admin/service/navigateur-details-guard.service.ts");
/* harmony import */ var _navigateur_display_navigateur_display_navigateur_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigateur/display-navigateur/display-navigateur.component */ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.ts");
/* harmony import */ var _shared_ibox_ibox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/ibox/ibox.component */ "./src/app/shared/ibox/ibox.component.ts");
/* harmony import */ var _shared_modal_form_modal_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/modal-form/modal-form.component */ "./src/app/shared/modal-form/modal-form.component.ts");
/* harmony import */ var _navigateur_situation_situations_situations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigateur/situation/situations/situations.component */ "./src/app/admin/navigateur/situation/situations/situations.component.ts");
/* harmony import */ var _navigateur_form_navigateur_form_navigateur_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigateur/form-navigateur/form-navigateur.component */ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./region/region.component */ "./src/app/admin/region/region.component.ts");
/* harmony import */ var _region_display_region_display_region_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./region/display-region/display-region.component */ "./src/app/admin/region/display-region/display-region.component.ts");
/* harmony import */ var _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./region/details-region/details-region.component */ "./src/app/admin/region/details-region/details-region.component.ts");
/* harmony import */ var _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../admin/region/form-region/form-region.component */ "./src/app/admin/region/form-region/form-region.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @yaga/leaflet-ng2 */ "./node_modules/@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_24__["YagaModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_6__["NavBarTopComponent"],
                _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_7__["NavRightComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navigateur_navigateurs_navigateurs_component__WEBPACK_IMPORTED_MODULE_9__["NavigateursComponent"],
                _navigateur_details_navigateur_details_navigateur_component__WEBPACK_IMPORTED_MODULE_10__["DetailsNavigateurComponent"],
                _navigateur_display_navigateur_display_navigateur_component__WEBPACK_IMPORTED_MODULE_14__["DisplayNavigateurComponent"],
                _navigateur_filter_navigateur_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["NavigateurFilterPipe"],
                _navigateur_navigateurs_navigateur_not_found_navigateur_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NavigateurNotFoundComponent"],
                _shared_ibox_ibox_component__WEBPACK_IMPORTED_MODULE_15__["IboxComponent"],
                _shared_modal_form_modal_form_component__WEBPACK_IMPORTED_MODULE_16__["ModalFormComponent"],
                _navigateur_situation_situations_situations_component__WEBPACK_IMPORTED_MODULE_17__["SituationsComponent"],
                _navigateur_form_navigateur_form_navigateur_component__WEBPACK_IMPORTED_MODULE_18__["FormNavigateurComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_19__["RegionComponent"],
                _region_display_region_display_region_component__WEBPACK_IMPORTED_MODULE_20__["DisplayRegionComponent"],
                _region_details_region_details_region_component__WEBPACK_IMPORTED_MODULE_21__["DetailsRegionComponent"],
                _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_22__["FormRegionComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_23__["MapComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_25__["CountryComponent"]
            ],
            entryComponents: [
                _navigateur_form_navigateur_form_navigateur_component__WEBPACK_IMPORTED_MODULE_18__["FormNavigateurComponent"],
                _admin_region_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_22__["FormRegionComponent"]
            ],
            providers: [
                _service_navigateur_details_guard_service__WEBPACK_IMPORTED_MODULE_13__["NavigateurDetailsGuardService"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/country/country.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/country/country.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    "

/***/ }),

/***/ "./src/app/admin/country/country.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/country/country.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>countries</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n\n  <!-- liste des countries -->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n          <div id=\"map\" class=\"ibox\">\n            <div class=\"ibox-content\"></div>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-6\">\n          <a (click)=creatCountry()>\n            <div id=\"button\" class=\"widget lazur-bg p-lg text-center\">\n              <div class=\"m-b-md\">\n                <i class=\"fa fa-plus-circle fa-4x\"></i>\n                <h1 class=\"m-xs\">Nouvelle countries</h1>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12\">\n\n      <!-- barre de recherche -->\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Recherche par Nom\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- fin barre de recherche -->\n\n      <!-- <div class=\"col-lg-12\" *ngFor=\"let country of countries\">\n        <app-display-country [country]=\"country\"\n                            [searchTerm]=\"searchTerm\"\n                            (notifyEdit)=\"onEditCountry($event)\"\n                            (notifyDelete)=\"onDeleteCountry($event)\">\n\n        </app-display-country>\n\n      </div>\n -->\n\n\n    </div>\n\n  </div>\n\n\n  <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/country/country.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/country/country.component.ts ***!
  \****************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryComponent = /** @class */ (function () {
    function CountryComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/admin/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/admin/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/admin/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"footer\">\n  <div class=\"float-right\">\n    10GB of <strong>250GB</strong> Free.\n  </div>\n  <div>\n    <strong>Copyright</strong> Example Company &copy; 2014-2018\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/admin/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/admin/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" (click)=\"miniNav()\"  ><i class=\"fa fa-bars\"></i> </a>\n      <form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n        </div>\n      </form>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li style=\"padding: 20px\">\n        <span class=\"m-r-sm text-muted welcome-message\">Welcome to INSPINIA+ Admin Theme.</span>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n          <i class=\"fa fa-envelope\"></i>  <span class=\"label label-warning\">16</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-messages dropdown-menu-right\">\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\"src=\"assets/img/a7.jpg\">\n              </a>\n              <div class=\"media-body\">\n                <small class=\"float-right\">46h ago</small>\n                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\"src=\"assets/img/a4.jpg\">\n              </a>\n              <div class=\"media-body \">\n                <small class=\"float-right text-navy\">5h ago</small>\n                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"dropdown-messages-box\">\n              <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                <img alt=\"image\" class=\"rounded-circle\"src=\"assets/img/profile.jpg\">\n              </a>\n              <div class=\"media-body \">\n                <small class=\"float-right\">23h ago</small>\n                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n              </div>\n            </div>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"text-center link-block\">\n              <a href=\"mailbox.html\" class=\"dropdown-item\">\n                <i class=\"fa fa-envelope\"></i> <strong>Read All Messages</strong>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n          <i class=\"fa fa-bell\"></i>  <span class=\"label label-primary\">8</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-alerts\">\n          <li>\n            <a href=\"mailbox.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\n                <span class=\"float-right text-muted small\">4 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"profile.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                <span class=\"float-right text-muted small\">12 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <a href=\"grid_options.html\" class=\"dropdown-item\">\n              <div>\n                <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                <span class=\"float-right text-muted small\">4 minutes ago</span>\n              </div>\n            </a>\n          </li>\n          <li class=\"dropdown-divider\"></li>\n          <li>\n            <div class=\"text-center link-block\">\n              <a href=\"notifications.html\" class=\"dropdown-item\">\n                <strong>See All Alerts</strong>\n                <i class=\"fa fa-angle-right\"></i>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </li>\n\n\n      <li>\n        <a href=\"#\" (click)=\"logout($event)\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n      <li>\n        <a class=\"right-sidebar-toggle\">\n          <i class=\"fa fa-tasks\"></i>\n        </a>\n      </li>\n    </ul>\n\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/admin/nav-bar-top/nav-bar-top.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/nav-bar-top/nav-bar-top.component.ts ***!
  \************************************************************/
/*! exports provided: NavBarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarTopComponent", function() { return NavBarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarTopComponent = /** @class */ (function () {
    function NavBarTopComponent(auth, router, token) {
        this.auth = auth;
        this.router = router;
        this.token = token;
        this.miniNavBar = false;
    }
    NavBarTopComponent.prototype.ngOnInit = function () {
        document.body.className = 'md-skin ';
    };
    NavBarTopComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('landing');
        this.token.remove();
    };
    NavBarTopComponent.prototype.miniNav = function () {
        if (this.miniNavBar === false) {
            document.body.className = 'md-skin mini-navbar';
            this.miniNavBar = true;
        }
        else {
            document.body.className = 'md-skin';
            this.miniNavBar = false;
        }
    };
    NavBarTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar-top',
            template: __webpack_require__(/*! ./nav-bar-top.component.html */ "./src/app/admin/nav-bar-top/nav-bar-top.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-top.component.css */ "./src/app/admin/nav-bar-top/nav-bar-top.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], NavBarTopComponent);
    return NavBarTopComponent;
}());



/***/ }),

/***/ "./src/app/admin/nav-right/nav-right.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/nav-right/nav-right.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerCursur {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/admin/nav-right/nav-right.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/nav-right/nav-right.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div class=\"dropdown profile-element\">\n          <img alt=\"image\" class=\"rounded-circle\" src=\"assets/img/profile_small.jpg\" />\n          <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n            <span class=\"block m-t-xs font-bold\">David Williams</span>\n            <span class=\"text-muted text-xs block\">Art Director <b class=\"caret\"></b></span>\n          </a>\n          <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n            <li><a class=\"dropdown-item\" href=\"profile.html\">Profile</a></li>\n            <li><a class=\"dropdown-item\" href=\"contacts.html\">Contacts</a></li>\n            <li><a class=\"dropdown-item\" href=\"mailbox.html\">Mailbox</a></li>\n            <li class=\"dropdown-divider\"></li>\n            <li><a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"logo-element\">\n          IN+\n        </div>\n      </li>\n\n      <li>\n        <a routerLink=\"/administrateur/regions\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Regions</span></a>\n      </li>\n      <li>\n        <a routerLink=\"/administrateur/countries\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Countries</span></a>\n      </li>\n\n\n      <li class=\"active\">\n        <a href=\"/administrateur/levels\"  aria-expanded=\"true\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">local governments</span><span class=\"fa arrow\"></span></a>\n        <ul class=\"nav nav-second-level collapse in\" aria-expanded=\"true\" style=\"\">\n            <li><a routerLink=\"/administrateur/levels\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Level 1</span></a>\n            </li>\n            <li><a routerLink=\"/administrateur/levels\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Level 2</span></a>\n            </li>\n          <li><a routerLink=\"/administrateur/levels\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Level 3</span></a>\n            </li>\n        </ul>\n    </li>\n    <li><a routerLink=\"/administrateur/institutions\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Institutions</span></a>\n    </li>\n\n\n    <li>\n      <a routerLink=\"/administrateur/persons\"><i class=\"fa fa-pie-chart\"></i> <span class=\"nav-label\">Persons</span> </a>\n    </li>\n    <li class=\"active\">\n      <a href=\"#\"  aria-expanded=\"true\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">Users</span><span class=\"fa arrow\"></span></a>\n      <ul class=\"nav nav-second-level collapse in\" aria-expanded=\"true\" style=\"\">\n          <li><a routerLink=\"#\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">newsletter</span></a>\n          </li>\n          <li><a routerLink=\"#\" routerLinkActive=\"active\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">profile</span></a>\n          </li>\n      </ul>\n  </li>\n\n\n\n\n\n\n\n      <!-- <li>\n        <a class=\"pointerCursur\" (click)=\"menuExpanded = !menuExpanded\"><i class=\"fa fa-shopping-cart\"></i> <span class=\"nav-label\">\n            COMMERCE </span><span class=\"fa arrow\"></span></a>\n        <ul class=\"nav nav-second-level\" *ngIf=\"menuExpanded\">\n          <li><a>Products list (front)</a></li>\n          <li><a>Product list (admin)</a></li>\n\n        </ul>\n      </li> -->\n\n\n\n\n\n\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/admin/nav-right/nav-right.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/nav-right/nav-right.component.ts ***!
  \********************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavRightComponent = /** @class */ (function () {
    function NavRightComponent(auth, router, token, toastr) {
        this.auth = auth;
        this.router = router;
        this.token = token;
        this.toastr = toastr;
    }
    NavRightComponent.prototype.ngOnInit = function () {
    };
    NavRightComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('landing');
        this.token.remove();
    };
    NavRightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-right',
            template: __webpack_require__(/*! ./nav-right.component.html */ "./src/app/admin/nav-right/nav-right.component.html"),
            styles: [__webpack_require__(/*! ./nav-right.component.css */ "./src/app/admin/nav-right/nav-right.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NavRightComponent);
    return NavRightComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/navigateur/details-navigateur/details-navigateur.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/navigateur/details-navigateur/details-navigateur.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>{{ navigateur.nom + ' ' + navigateur.prenom }}</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a> Navigateur</a>\n      </li>\n    </ol>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n\n          <button (click)=\"retour()\" class=\"btn btn-dark \">Retour</button>\n\n          <div class=\"btn-group pull-right\">\n\n            <button class=\"btn btn-white\" (click)=\"viewPrevNavigateur()\">Precedent</button>\n            <button class=\"btn btn-white\" (click)=\"viewNextNavigateur()\">suivant</button>\n            <button class=\"btn btn-white\" (click)=\"viewSituationsNavigateur()\">Situations</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\" row \">\n\n    <!-- navigateur panel -->\n    <div class=\"col-lg-4 \">\n      <app-ibox [titre]=\"navigateur.nom +' '+navigateur.prenom\" [hideBody]=\"false\" [hideFooter]=true>\n\n        <div class=\"iBoxBody\">\n          <img src=\"assets/images/profil/male.jpg\" class=\"rounded-circle circle-border img-lg\" alt=\"profile\">\n\n          <h2>Cadre</h2>\n\n          <div class=\"font-bold\">{{ navigateur.ppr }} </div>\n          <address class=\"m-t-md\">\n            <strong>Twitter, Inc.</strong><br> 795 Folsom Ave, Suite 600<br> San Francisco, CA 94107<br>\n            <abbr title=\"Adresse\">P:</abbr> (123) 456-7890\n          </address>\n\n\n        </div>\n\n        <div class=\"iBoxFooter\">\n\n        </div>\n\n\n\n      </app-ibox>\n    </div>\n  </div>\n\n\n  <div class=col-lg-8>\n\n    <div class=\"col-lg-12 \">\n      <div class=\"ibox \">\n        <div class=\"ibox-title \">\n          <h5>Situation actuelle</h5>\n          <div class=\"ibox-tools \">\n            <a class=\"collapse-link \">\n              <i class=\"fa fa-chevron-up \"></i>\n            </a>\n\n          </div>\n        </div>\n        <div class=\"ibox-content table-responsive \">\n          <table class=\"table table-hover no-margins \">\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Grade</th>\n                <th>Échelle</th>\n                <th>Echelon</th>\n                <th>Groupe</th>\n                <th>IGR</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><small>02/01/2015</small></td>\n                <td><small>Cadre</small></td>\n                <td><i class=\"fa fa-clock-o \"></i> 11:20pm</td>\n                <td>Samantha</td>\n                <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n                <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12 \">\n      <div class=\"ibox \">\n        <div class=\"ibox-title \">\n          <h5>Indemnités</h5>\n          <div class=\"ibox-tools \">\n            <a class=\"collapse-link \">\n              <i class=\"fa fa-chevron-up \"></i>\n            </a>\n\n          </div>\n        </div>\n        <div class=\"ibox-content table-responsive \">\n          <div class=row>\n\n            <div class=col-lg-6>\n              <table class=\"table table-hover table-bordered no-margins \">\n                <thead>\n                  <tr>\n                    <th>Déjeuner</th>\n                    <th>Diner</th>\n                    <th>Découcher</th>\n                    <th>Total</th>\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><small>75</small></td>\n                    <td><small>80</small></td>\n                    <td><small>80</small></td>\n\n                    <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 300 </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n            <div class=col-lg-6>\n              <table class=\"table table-hover table-bordered no-margins \">\n                <thead>\n                  <tr>\n                    <th>Heure de vol</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-navy \"> 300 </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- situation panel -->\n"

/***/ }),

/***/ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/navigateur/details-navigateur/details-navigateur.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailsNavigateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsNavigateurComponent", function() { return DetailsNavigateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_navigateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/navigateur.service */ "./src/app/admin/service/navigateur.service.ts");
/* harmony import */ var _models_navigateur_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/navigateur.model */ "./src/app/models/navigateur.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsNavigateurComponent = /** @class */ (function () {
    function DetailsNavigateurComponent(_navigateurService, _route, _router) {
        this._navigateurService = _navigateurService;
        this._route = _route;
        this._router = _router;
        this.navigateur = new _models_navigateur_model__WEBPACK_IMPORTED_MODULE_3__["Navigateur"]();
    }
    DetailsNavigateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
            _this._navigateurService.getNavigateur(_this._id).subscribe(function (data) { _this.navigateur = data; });
        });
    };
    DetailsNavigateurComponent.prototype.viewSituationsNavigateur = function () {
        this._router.navigate(['situations'], { relativeTo: this._route });
    };
    DetailsNavigateurComponent.prototype.retour = function () {
        this._router.navigate(['administrateur/navigateurs', { id: this._id }], { queryParamsHandling: 'preserve' });
    };
    DetailsNavigateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-navigateur',
            template: __webpack_require__(/*! ./details-navigateur.component.html */ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.html"),
            styles: [__webpack_require__(/*! ./details-navigateur.component.css */ "./src/app/admin/navigateur/details-navigateur/details-navigateur.component.css")]
        }),
        __metadata("design:paramtypes", [_service_navigateur_service__WEBPACK_IMPORTED_MODULE_2__["NavigateurService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsNavigateurComponent);
    return DetailsNavigateurComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/navigateur/display-navigateur/display-navigateur.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/navigateur/display-navigateur/display-navigateur.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ibox [titre]=\"navigateur.nom + ' ' + navigateur.prenom\" [hideFooter]=\"false\" [hideBody]=\"false\">\n\n  <div class=\"iBoxBody\">\n    <img src=\"assets/images/profil/male.jpg\" class=\"rounded-circle circle-border img-lg\" alt=\"profile\">\n    <h2>Cadre</h2>\n    <h2 class=\"font-enlarge\"> PPR : {{ navigateur.ppr }} </h2>\n    <address class=\"m-t-md\">\n      <strong>{{ navigateur.adresse }}</strong>\n      <br>\n      <br>\n      <span *ngIf=\"navigateur.actif == true\" class=\"badge badge-primary\">Actif</span>\n      <span *ngIf=\"navigateur.actif == false\" class=\"badge badge-danger\">Non Actif</span>\n    </address>\n  </div>\n\n\n  <div class=\" iBoxFooter\">\n    <div class=\"m-t-xs btn-group\">\n      <button (click)=\"viewDetailsNavigateur()\" class=\"btn   btn-info\"><i class=\"fa fa-eye\"></i> details</button>\n      <button (click)=\"editNavigateur()\" class=\"btn btn-warning\"><i class=\"fa fa-wrench\"></i> Modifier</button>\n      <button (click)=\"deleteNavigateur()\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Supprimer</button>\n\n    </div>\n  </div>\n\n\n\n\n</app-ibox>"

/***/ }),

/***/ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/navigateur/display-navigateur/display-navigateur.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DisplayNavigateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayNavigateurComponent", function() { return DisplayNavigateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_navigateur_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/navigateur.model */ "./src/app/models/navigateur.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_navigateur_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/navigateur.service */ "./src/app/admin/service/navigateur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayNavigateurComponent = /** @class */ (function () {
    function DisplayNavigateurComponent(_router, _navigateurService, _route) {
        this._router = _router;
        this._navigateurService = _navigateurService;
        this._route = _route;
        this.notifyEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayNavigateurComponent.prototype.ngOnInit = function () {
    };
    DisplayNavigateurComponent.prototype.viewDetailsNavigateur = function () {
        this._router.navigate([this.navigateur.id], { relativeTo: this._route });
    };
    DisplayNavigateurComponent.prototype.editNavigateur = function () {
        this.notifyEdit.emit(this.navigateur.id);
    };
    DisplayNavigateurComponent.prototype.deleteNavigateur = function () {
        this.notifyDelete.emit(this.navigateur.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_navigateur_model__WEBPACK_IMPORTED_MODULE_1__["Navigateur"])
    ], DisplayNavigateurComponent.prototype, "navigateur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayNavigateurComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayNavigateurComponent.prototype, "notifyEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayNavigateurComponent.prototype, "notifyDelete", void 0);
    DisplayNavigateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-navigateur',
            template: __webpack_require__(/*! ./display-navigateur.component.html */ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.html"),
            styles: [__webpack_require__(/*! ./display-navigateur.component.css */ "./src/app/admin/navigateur/display-navigateur/display-navigateur.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_navigateur_service__WEBPACK_IMPORTED_MODULE_3__["NavigateurService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DisplayNavigateurComponent);
    return DisplayNavigateurComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/filter/navigateur-filter.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/navigateur/filter/navigateur-filter.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: NavigateurFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateurFilterPipe", function() { return NavigateurFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigateurFilterPipe = /** @class */ (function () {
    function NavigateurFilterPipe() {
    }
    NavigateurFilterPipe.prototype.transform = function (navigateurs, searchTerm) {
        if (!navigateurs || !searchTerm) {
            return navigateurs;
        }
        return navigateurs.filter(function (navigateur) {
            return navigateur.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
    };
    NavigateurFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'navigateurFilter',
            pure: true
        })
    ], NavigateurFilterPipe);
    return NavigateurFilterPipe;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/navigateur/form-navigateur/form-navigateur.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/navigateur/form-navigateur/form-navigateur.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header b-r-sm\" [ngClass]=\"{ 'bg-primary' : !edit, 'bg-warning' : edit }\">\n  <h3 class=\"modal-title pull-left\">{{title}}</h3>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #NavigateurForm=\"ngForm\">\n    <div class=\"form-group {{ errors.nom ? 'has-error' : '' }} \">\n      <label>Nom</label>\n      <input type=\"text\" class=\"form-control\" required=\"\" name=\"nom\" [(ngModel)]=\"navigateur.nom\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.nom\">\n      {{errors.nom}}\n    </div>\n\n    <div class=\"form-group {{ errors.prenom ? 'has-error' : '' }} \">\n      <label>Prénom</label>\n      <input type=\"text\" class=\"form-control\" required=\"\" name=\"prenom\" [(ngModel)]=\"navigateur.prenom\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.prenom\">\n      {{errors.prenom}}\n    </div>\n\n    <div class=\"form-group {{ errors.ppr ? 'has-error' : '' }} \">\n      <label>PPR</label>\n      <input type=\"text\" class=\"form-control\" required=\"\" name=\"ppr\" [(ngModel)]=\"navigateur.ppr\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.ppr\">\n      {{errors.ppr}}\n    </div>\n\n    <div class=\"form-group {{ errors.adresse ? 'has-error' : '' }} \">\n      <label>Adresse</label>\n      <input type=\"text\" class=\"form-control\" required=\"\" name=\"adresse\" [(ngModel)]=\"navigateur.adresse\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.adresse\">\n      {{errors.adresse}}\n    </div>\n\n\n    <div class=\"form-group {{ errors.actif ? 'has-error' : '' }} \">\n      <div class=\"switch\">\n        <label>Actif</label>\n        <div class=\"onoffswitch\">\n\n          <input type=\"checkbox\" name=\"actif\" [(ngModel)]=\"navigateur.actif\" class=\"onoffswitch-checkbox\" id=\"example1\">\n          <input type=\"checkbox\" name=\"actif\" [(ngModel)]=\"navigateur.actif\" class=\"onoffswitch-checkbox\" id=\"example1\">\n          <label [ngClass]=\"!edit ? 'onoffswitch-label' : 'onoffswitch-label onoffswitch-label-warning'\" for=\"example1\">\n            <span [ngClass]=\"!edit ? 'onoffswitch-inner' : 'onoffswitch-inner onoffswitch-inner-warning '\"></span>\n            <span [ngClass]=\"!edit ? 'onoffswitch-switch' : 'onoffswitch-switch onoffswitch-switch-warning '\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.actif\">\n      {{errors.actif}}\n    </div>\n\n\n\n\n\n\n  </form>\n</div>\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Fermer</button>\n  <button type=\"button\" [disabled]=!NavigateurForm.valid class=\"btn\" [ngClass]=\"edit ? 'btn-warning' :  'btn-primary'\"\n    (click)=\"onConfirm()\">Sauvegarder</button>\n</div>"

/***/ }),

/***/ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/navigateur/form-navigateur/form-navigateur.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormNavigateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNavigateurComponent", function() { return FormNavigateurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormNavigateurComponent = /** @class */ (function () {
    function FormNavigateurComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.errors = [];
    }
    FormNavigateurComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };
    FormNavigateurComponent.prototype.onConfirm = function () {
        this.onClose.next(this.navigateur);
    };
    FormNavigateurComponent.prototype.onCancel = function () {
        this._bsModalRef.hide();
    };
    FormNavigateurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-navigateur',
            template: __webpack_require__(/*! ./form-navigateur.component.html */ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.html"),
            styles: [__webpack_require__(/*! ./form-navigateur.component.css */ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], FormNavigateurComponent);
    return FormNavigateurComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center animated fadeInDown\">\n  <h1>404</h1>\n  <h3 class=\"font-bold\">Navigateur Not Found</h3>\n\n  <div class=\"error-desc\">\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button\n    on your browser or try found something else in our app.\n    <form class=\"form-inline m-t\" role=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for page\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NavigateurNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateurNotFoundComponent", function() { return NavigateurNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigateurNotFoundComponent = /** @class */ (function () {
    function NavigateurNotFoundComponent() {
    }
    NavigateurNotFoundComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    NavigateurNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigateur-not-found',
            template: __webpack_require__(/*! ./navigateur-not-found.component.html */ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.html"),
            styles: [__webpack_require__(/*! ./navigateur-not-found.component.css */ "./src/app/admin/navigateur/navigateurs/navigateur-not-found/navigateur-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigateurNotFoundComponent);
    return NavigateurNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateurs.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateurs.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n.modal-backdrop.show {\n  opacity: 0.5;\n \n}"

/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateurs.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateurs.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Navigateurs</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n  <!-- barre de recherche -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox\">\n        <div class=\"ibox-content\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Recherche par Nom\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- fin barre de recherche -->\n\n\n\n\n\n\n  <!-- liste des navigateurs -->\n  <div class=\"row\">\n\n    <div class=\"col-lg-3\" *ngFor=\"let navigateur of filteredNavigateurs\">\n      <app-display-navigateur \n      [navigateur]=\"navigateur\"\n       [searchTerm]=\"searchTerm\"\n        (notifyEdit)=\"onEditNotification($event)\"\n        (notifyDelete)=\"onDeleteNavigateur($event)\">\n      </app-display-navigateur>\n\n    </div>\n\n\n    <div class=\"col-lg-12\">\n\n      <a (click)='createNavigateur()'>\n        <div class=\"widget lazur-bg p-lg text-center\">\n          <div class=\"m-b-md\">\n            <i class=\"fa fa-plus-circle fa-4x\"></i>\n            <h1 class=\"m-xs\">Nouveau Navigateur</h1>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/admin/navigateur/navigateurs/navigateurs.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/navigateur/navigateurs/navigateurs.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigateursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateursComponent", function() { return NavigateursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_navigateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/navigateur.service */ "./src/app/admin/service/navigateur.service.ts");
/* harmony import */ var _models_navigateur_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/navigateur.model */ "./src/app/models/navigateur.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _form_navigateur_form_navigateur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-navigateur/form-navigateur.component */ "./src/app/admin/navigateur/form-navigateur/form-navigateur.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavigateursComponent = /** @class */ (function () {
    function NavigateursComponent(_navigateurService, _router, _route, modalService, _toastr) {
        this._navigateurService = _navigateurService;
        this._router = _router;
        this._route = _route;
        this.modalService = modalService;
        this._toastr = _toastr;
        this.navigateur = new _models_navigateur_model__WEBPACK_IMPORTED_MODULE_2__["Navigateur"]();
        this.navigateurs = [];
        this.filteredNavigateurs = [];
        this.errors = [];
    }
    Object.defineProperty(NavigateursComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredNavigateurs = this.filtreNavigateurs(value);
        },
        enumerable: true,
        configurable: true
    });
    NavigateursComponent.prototype.createNavigateur = function () {
        this.openModelFormNavigateur(false);
    };
    NavigateursComponent.prototype.onEditNotification = function (id) {
        var _this = this;
        this._navigateurService.getNavigateur(id).subscribe(function (navigateurData) {
            _this.navigateur = navigateurData;
            _this.openModelFormNavigateur(true);
        }, function (error) {
            _this.errors = error;
        });
    };
    NavigateursComponent.prototype.openModelFormNavigateur = function (edit) {
        var _this = this;
        var initialState = {
            title: edit ? 'Modifier Navigateur' : 'Nouveau Navigateur',
            navigateur: edit ? this.navigateur : new _models_navigateur_model__WEBPACK_IMPORTED_MODULE_2__["Navigateur"](),
            errors: this.errors,
            edit: edit
        };
        this.bsModalRef = this.modalService.show(_form_navigateur_form_navigateur_component__WEBPACK_IMPORTED_MODULE_6__["FormNavigateurComponent"], { initialState: initialState });
        if (edit === false) {
            this.bsModalRef.content.onClose.subscribe(function (data) { return _this._navigateurService.save(data)
                .subscribe(function (data) {
                _this._toastr.success('<h3>Navigateur ajouté avec succès</h3>', ' ', {
                    'timeOut': 3000,
                    'progressBar': true,
                    'enableHtml': true
                });
                // renitialiser la liste des navigateurs
                _this.getNavigateursList();
                // vider le navigateur
                _this.navigateur = new _models_navigateur_model__WEBPACK_IMPORTED_MODULE_2__["Navigateur"]();
                _this.errors = [];
                _this.bsModalRef.content.errors = _this.errors;
                _this.bsModalRef.content.navigateur = _this.navigateur;
                _this.bsModalRef.hide();
            }, function (error) {
                _this.errors = error.error.errors;
                _this.bsModalRef.content.errors = _this.errors;
                _this.errors = [];
            }); });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(function (data) { return _this._navigateurService.update(data)
                .subscribe(function (data) {
                _this._toastr.warning('<h3>Navigateur édité avec succès</h3>', ' ', {
                    'timeOut': 3000,
                    'progressBar': true,
                    'enableHtml': true
                });
                _this.getNavigateursList();
                _this.navigateur = new _models_navigateur_model__WEBPACK_IMPORTED_MODULE_2__["Navigateur"]();
                _this.errors = [];
                _this.bsModalRef.content.errors = _this.errors;
                _this.bsModalRef.content.navigateur = _this.navigateur;
                _this.bsModalRef.hide();
            }, function (error) {
                _this.errors = error.error.errors;
                _this.bsModalRef.content.errors = _this.errors;
                _this.errors = [];
            }); });
        }
    };
    NavigateursComponent.prototype.ngOnInit = function () {
        this.getNavigateursList();
    };
    NavigateursComponent.prototype.getNavigateursList = function () {
        var _this = this;
        this._navigateurService.getNavigateurs()
            .subscribe(function (navigateursApi) {
            _this.navigateurs = navigateursApi;
            if (_this._route.snapshot.queryParamMap.has('searchTerm')) {
                _this.searchTerm = _this._route.snapshot.queryParamMap.get('searchTerm');
            }
            else if (_this.searchTerm) {
                _this.filteredNavigateurs = _this.filtreNavigateurs(_this.searchTerm);
            }
            else {
                _this.filteredNavigateurs = _this.navigateurs;
            }
            ;
        }, function (error) { return _this.errors = error.error.errors; });
    };
    NavigateursComponent.prototype.onDeleteNavigateur = function (id) {
        var _this = this;
        this._navigateurService.deleteNavigateur(id).subscribe(function (data) {
            _this.getNavigateursList();
            var i = _this.filteredNavigateurs.findIndex(function (e) { return e.id === id; });
            if (i !== -1) {
                _this.filteredNavigateurs.splice(i, 1);
                _this._toastr.info('<h3>Navigateur supprimé avec succès</h3>', ' ', {
                    'timeOut': 3000,
                    'progressBar': true,
                    'enableHtml': true
                });
            }
        }, function (error) { return console.log(error); });
    };
    NavigateursComponent.prototype.filtreNavigateurs = function (searchString) {
        if (searchString === null) {
            this.filteredNavigateurs = this.navigateurs;
        }
        else {
            return this.navigateurs.filter(function (navigateur) {
                return navigateur.nom.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('NavigateurForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], NavigateursComponent.prototype, "NavigateurForm", void 0);
    NavigateursComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigateurs',
            template: __webpack_require__(/*! ./navigateurs.component.html */ "./src/app/admin/navigateur/navigateurs/navigateurs.component.html"),
            styles: [__webpack_require__(/*! ./navigateurs.component.css */ "./src/app/admin/navigateur/navigateurs/navigateurs.component.css")]
        }),
        __metadata("design:paramtypes", [_service_navigateur_service__WEBPACK_IMPORTED_MODULE_1__["NavigateurService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], NavigateursComponent);
    return NavigateursComponent;
}());



/***/ }),

/***/ "./src/app/admin/navigateur/situation/situations/situations.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/navigateur/situation/situations/situations.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navigateur/situation/situations/situations.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/navigateur/situation/situations/situations.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  situations works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/navigateur/situation/situations/situations.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/navigateur/situation/situations/situations.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SituationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationsComponent", function() { return SituationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SituationsComponent = /** @class */ (function () {
    function SituationsComponent() {
    }
    SituationsComponent.prototype.ngOnInit = function () {
    };
    SituationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-situations',
            template: __webpack_require__(/*! ./situations.component.html */ "./src/app/admin/navigateur/situation/situations/situations.component.html"),
            styles: [__webpack_require__(/*! ./situations.component.css */ "./src/app/admin/navigateur/situation/situations/situations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SituationsComponent);
    return SituationsComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading col-lg-12\">\n  <div class=\"col-lg-6\">\n    <h2>{{ region.id + ' ' + region.name }}</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a> Navigateur</a>\n      </li>\n    </ol>\n  </div>\n\n\n  <div class=\"col-lg-6\">\n    <div>\n      <div class=\"ibox-content\">\n        <div class=\"btn-group pull-right\">\n\n          <button (click)=\"retour()\" class=\"btn btn-dark \">Retour</button>\n          <!--<button class=\"btn btn-white\" (click)=\"viewPrevRegion()\">Precedent</button>-->\n          <!--<button class=\"btn btn-white\" (click)=\"viewNextRegion()\">suivant</button>-->\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=col-lg-8>\n\n  <div class=\"col-lg-12 \">\n    <div class=\"ibox \">\n      <div class=\"ibox-title \">\n        <h5>Situation actuelle</h5>\n        <div class=\"ibox-tools \">\n          <a class=\"collapse-link \">\n            <i class=\"fa fa-chevron-up \"></i>\n          </a>\n\n        </div>\n      </div>\n      <div class=\"ibox-content table-responsive \">\n        <table class=\"table table-hover no-margins \">\n          <thead>\n          <tr>\n            <th>Date</th>\n            <th>Grade</th>\n            <th>Échelle</th>\n            <th>Echelon</th>\n            <th>Groupe</th>\n            <th>IGR</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><small>02/01/2015</small></td>\n            <td><small>Cadre</small></td>\n            <td><i class=\"fa fa-clock-o \"></i> 11:20pm</td>\n            <td>Samantha</td>\n            <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n            <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 24% </td>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-12 \">\n    <div class=\"ibox \">\n      <div class=\"ibox-title \">\n        <h5>Indemnités</h5>\n        <div class=\"ibox-tools \">\n          <a class=\"collapse-link \">\n            <i class=\"fa fa-chevron-up \"></i>\n          </a>\n\n        </div>\n      </div>\n      <div class=\"ibox-content table-responsive \">\n        <div class=row>\n\n          <div class=col-lg-6>\n            <table class=\"table table-hover table-bordered no-margins \">\n              <thead>\n              <tr>\n                <th>Déjeuner</th>\n                <th>Diner</th>\n                <th>Découcher</th>\n                <th>Total</th>\n\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td><small>75</small></td>\n                <td><small>80</small></td>\n                <td><small>80</small></td>\n\n                <td class=\"text-navy \"> <i class=\"fa fa-level-up \"></i> 300 </td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=col-lg-6>\n            <table class=\"table table-hover table-bordered no-margins \">\n              <thead>\n              <tr>\n                <th>Heure de vol</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td class=\"text-navy \"> 300 </td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- situation panel -->\n\n"

/***/ }),

/***/ "./src/app/admin/region/details-region/details-region.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/region/details-region/details-region.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRegionComponent", function() { return DetailsRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../region.model */ "./src/app/admin/region/region.model.ts");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../region.service */ "./src/app/admin/region/region.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsRegionComponent = /** @class */ (function () {
    function DetailsRegionComponent(_regionService, _route, _router) {
        this._regionService = _regionService;
        this._route = _route;
        this._router = _router;
        this.region = new _region_model__WEBPACK_IMPORTED_MODULE_1__["Region"]();
    }
    DetailsRegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._id = +params.get('id');
            _this._regionService.getRegion(_this._id).subscribe(function (regionApi) {
                _this.region = regionApi.data;
            });
        }, function (error) { console.log(error); });
    };
    DetailsRegionComponent.prototype.retour = function () {
        this._router.navigate(['administrateur/regions', { id: this._id }], { queryParamsHandling: 'preserve' });
    };
    DetailsRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-region',
            template: __webpack_require__(/*! ./details-region.component.html */ "./src/app/admin/region/details-region/details-region.component.html"),
            styles: [__webpack_require__(/*! ./details-region.component.css */ "./src/app/admin/region/details-region/details-region.component.css")]
        }),
        __metadata("design:paramtypes", [_region_service__WEBPACK_IMPORTED_MODULE_2__["RegionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsRegionComponent);
    return DetailsRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ibox [titre]=\"region.name\" [hideFooter]=\"false\" [hideBody]=\"false\">\n\n  <div class=\"iBoxBody\">\n\n  </div>\n\n\n  <div class=\" iBoxFooter\">\n    <div class=\"m-t-xs btn-group\">\n      <button (click)=\"viewDetailsRegion()\" class=\"btn   btn-info\"><i class=\"fa fa-eye\"></i> details</button>\n      <button (click)=\"editRegion()\" class=\"btn btn-warning\"><i class=\"fa fa-wrench\"></i> Modifier</button>\n      <button (click)=\"deleteRegion()\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Supprimer</button>\n\n    </div>\n  </div>\n\n\n\n\n</app-ibox>\n"

/***/ }),

/***/ "./src/app/admin/region/display-region/display-region.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/region/display-region/display-region.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRegionComponent", function() { return DisplayRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../region.model */ "./src/app/admin/region/region.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region.service */ "./src/app/admin/region/region.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayRegionComponent = /** @class */ (function () {
    function DisplayRegionComponent(_router, _route, _regionService) {
        this._router = _router;
        this._route = _route;
        this._regionService = _regionService;
        this.notifyEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayRegionComponent.prototype.ngOnInit = function () {
    };
    DisplayRegionComponent.prototype.viewDetailsRegion = function () {
        // console.log(this.region.id);
        this._router.navigate([this.region.id], { relativeTo: this._route });
    };
    DisplayRegionComponent.prototype.editRegion = function () {
        this.notifyEdit.emit(this.region.id);
    };
    DisplayRegionComponent.prototype.deleteRegion = function () {
        this.notifyDelete.emit(this.region.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayRegionComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _region_model__WEBPACK_IMPORTED_MODULE_1__["Region"])
    ], DisplayRegionComponent.prototype, "region", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayRegionComponent.prototype, "notifyEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayRegionComponent.prototype, "notifyDelete", void 0);
    DisplayRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-region',
            template: __webpack_require__(/*! ./display-region.component.html */ "./src/app/admin/region/display-region/display-region.component.html"),
            styles: [__webpack_require__(/*! ./display-region.component.css */ "./src/app/admin/region/display-region/display-region.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _region_service__WEBPACK_IMPORTED_MODULE_3__["RegionService"]])
    ], DisplayRegionComponent);
    return DisplayRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header b-r-sm\" [ngClass]=\"{ 'bg-primary' : !edit, 'bg-warning' : edit }\">\n  <h3 class=\"modal-title pull-left\">{{title}}</h3>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #RegionForm=\"ngForm\">\n\n\n\n    <div class=\"form-group {{ errors.name ? 'has-error' : '' }} \">\n      <label for=\"name\">Nom</label>\n      <input id=\"name\" type=\"text\" class=\"form-control\"  name=\"name\" [(ngModel)]=\"region.name\">\n    </div>\n    <div class=\"alert alert-danger\" [hidden]=\"!errors.name\">\n      {{errors.name}}\n    </div>\n\n\n\n  </form>\n</div>\n<div class=\"modal-footer\">\n    <!--{{RegionForm.value| json}}-->\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Fermer</button>\n  <button type=\"button\" [disabled]=!RegionForm.valid class=\"btn\" [ngClass]=\"edit ? 'btn-warning' :  'btn-primary'\"\n          (click)=\"onConfirm()\">Sauvegarder</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/region/form-region/form-region.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/region/form-region/form-region.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormRegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegionComponent", function() { return FormRegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormRegionComponent = /** @class */ (function () {
    function FormRegionComponent(_modalRef) {
        this._modalRef = _modalRef;
        this.errors = [];
    }
    FormRegionComponent.prototype.onCancel = function () {
        this._modalRef.hide();
    };
    FormRegionComponent.prototype.onConfirm = function () {
        this.onClose.next(this.region);
    };
    FormRegionComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };
    FormRegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-region',
            template: __webpack_require__(/*! ./form-region.component.html */ "./src/app/admin/region/form-region/form-region.component.html"),
            styles: [__webpack_require__(/*! ./form-region.component.css */ "./src/app/admin/region/form-region/form-region.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], FormRegionComponent);
    return FormRegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/region.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/region/region.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height : 600px\n}\n"

/***/ }),

/***/ "./src/app/admin/region/region.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/region/region.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Regions</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/administrateur/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div>\n\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n\n  <!-- liste des navigateurs -->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n\n      <app-map></app-map>\n\n\n    </div>\n    <div class=\"col-md-6\">\n\n      <!-- barre de recherche -->\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox\">\n            <div class=\"ibox-content\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Recherche par Nom\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- fin barre de recherche -->\n\n      <div class=\"col-lg-12\" *ngFor=\"let region of filteredRegions\">\n        <app-display-region [region]=\"region\" [searchTerm]=\"searchTerm\" (notifyEdit)=\"onEditRegion($event)\"\n          (notifyDelete)=\"onDeleteRegion($event)\">\n\n        </app-display-region>\n\n      </div>\n\n\n      <div class=\"col-lg-12\">\n\n        <a (click)=creatRegion()>\n          <div class=\"widget lazur-bg p-lg text-center\">\n            <div class=\"m-b-md\">\n              <i class=\"fa fa-plus-circle fa-4x\"></i>\n              <h1 class=\"m-xs\">Nouvelle Region</h1>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/region/region.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/region/region.component.ts ***!
  \**************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region.service */ "./src/app/admin/region/region.service.ts");
/* harmony import */ var _region_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.model */ "./src/app/admin/region/region.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _form_region_form_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-region/form-region.component */ "./src/app/admin/region/form-region/form-region.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegionComponent = /** @class */ (function () {
    function RegionComponent(_regionService, _modalService, _toastr, _router, _route) {
        this._regionService = _regionService;
        this._modalService = _modalService;
        this._toastr = _toastr;
        this._router = _router;
        this._route = _route;
        this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
        this.regions = [];
        this.errors = [];
        this.filteredRegions = [];
    }
    Object.defineProperty(RegionComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredRegions = this.filtreRegions(value);
        },
        enumerable: true,
        configurable: true
    });
    RegionComponent.prototype.ngOnInit = function () {
        this.getRegions();
    };
    RegionComponent.prototype.creatRegion = function () {
        this.openModalFormRegion(false);
    };
    RegionComponent.prototype.onEditRegion = function (id) {
        var _this = this;
        this._regionService.getRegion(id).subscribe(function (regionData) {
            // @ts-ignore
            _this.region = regionData.data;
            _this.openModalFormRegion(true);
        }, function (error) {
            _this.errors = error;
        });
    };
    RegionComponent.prototype.onDeleteRegion = function (id) {
        var _this = this;
        this._regionService.deleteRegion(id).subscribe(function (data) {
            _this.getRegions();
            var i = _this.filteredRegions.findIndex(function (e) { return e.id === id; });
            if (i !== -1) {
                _this.filteredRegions.splice(i, 1);
                _this._toastr.warning('<h3>Region supprimé avec succès</h3>', ' ', {
                    'timeOut': 3000,
                    'progressBar': true,
                    'enableHtml': true
                });
            }
        }, function (error) { return console.log(error); });
    };
    RegionComponent.prototype.openModalFormRegion = function (edit) {
        var _this = this;
        var initialState = {
            title: edit ? 'Edit Region' : 'New Region',
            region: edit ? this.region : new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"](),
            edit: edit,
            errors: this.errors,
        };
        this.bsModalRef = this._modalService.show(_form_region_form_region_component__WEBPACK_IMPORTED_MODULE_4__["FormRegionComponent"], { initialState: initialState });
        if (edit === false) {
            this.bsModalRef.content.onClose.subscribe(function (data) {
                _this._regionService.save(data)
                    .subscribe(function (regionApi) {
                    _this._toastr.success('<h3>Navigateur ajouté avec succès</h3>', ' ', {
                        'timeOut': 3000,
                        'progressBar': true,
                        'enableHtml': true
                    });
                    _this.getRegions();
                    _this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
                    _this.errors = [];
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.bsModalRef.content.navigateur = _this.region;
                    _this.bsModalRef.hide();
                }, function (error) {
                    _this.errors = error.error.errors;
                    _this.bsModalRef.content.errors = _this.errors;
                    _this.errors = [];
                });
            });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(function (data) { return _this._regionService.update(data)
                .subscribe(function (regionData) {
                _this._toastr.warning('<h3>Region édité avec succès</h3>', ' ', {
                    'timeOut': 3000,
                    'progressBar': true,
                    'enableHtml': true
                });
                _this.getRegions();
                _this.region = new _region_model__WEBPACK_IMPORTED_MODULE_2__["Region"]();
                _this.errors = [];
                _this.bsModalRef.content.errors = _this.errors;
                _this.bsModalRef.content.navigateur = _this.region;
                _this.bsModalRef.hide();
            }, function (error) {
                _this.errors = error.error.errors;
                _this.bsModalRef.content.errors = _this.errors;
                _this.errors = [];
            }); });
        }
    };
    RegionComponent.prototype.getRegions = function () {
        var _this = this;
        return this._regionService.getRegions().subscribe(function (regionApi) {
            // @ts-ignore
            _this.regions = regionApi.data;
            console.log(_this.regions);
            if (_this._route.snapshot.queryParamMap.has('searchTerm')) {
                _this.searchTerm = _this._route.snapshot.queryParamMap.get('searchTerm');
            }
            else if (_this.searchTerm) {
                _this.filteredRegions = _this.filtreRegions(_this.searchTerm);
            }
            else {
                _this.filteredRegions = _this.regions;
            }
            ;
        }, function (error) {
            console.log(error);
        });
    };
    RegionComponent.prototype.filtreRegions = function (searchString) {
        if (searchString === null) {
            this.filteredRegions = this.regions;
        }
        else {
            return this.regions.filter(function (region) {
                return region.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('RegionForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], RegionComponent.prototype, "RegionForm", void 0);
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/admin/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/admin/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [_region_service__WEBPACK_IMPORTED_MODULE_1__["RegionService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/admin/region/region.model.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/region/region.model.ts ***!
  \**********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region = /** @class */ (function () {
    function Region() {
        this.id = null;
        this.name = null;
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/admin/region/region.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/region/region.service.ts ***!
  \************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionService = /** @class */ (function () {
    function RegionService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.baseUrl = this.url + '/regions/';
    }
    RegionService.prototype.getRegions = function () {
        return this._http.get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.deleteRegion = function (id) {
        return this._http.delete(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.getRegion = function (id) {
        return this._http.get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    RegionService.prototype.save = function (region) {
        return this._http.post(this.baseUrl, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService.prototype.update = function (region) {
        return this._http.put(this.baseUrl + region.id, region)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RegionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/app/admin/service/navigateur-details-guard.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/service/navigateur-details-guard.service.ts ***!
  \*******************************************************************/
/*! exports provided: NavigateurDetailsGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateurDetailsGuardService", function() { return NavigateurDetailsGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigateur.service */ "./src/app/admin/service/navigateur.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigateurDetailsGuardService = /** @class */ (function () {
    function NavigateurDetailsGuardService(_navigateurService, _router) {
        this._navigateurService = _navigateurService;
        this._router = _router;
    }
    NavigateurDetailsGuardService.prototype.canActivate = function (route, state) {
        var navigateurExists = !!this._navigateurService.getNavigateur(+route.paramMap.get('id'));
        if (navigateurExists) {
            return true;
        }
        else {
            // tslint:disable-next-line:no-unused-expression
            this._router.navigateByUrl('/navigateurNotFound');
            return false;
        }
    };
    NavigateurDetailsGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_navigateur_service__WEBPACK_IMPORTED_MODULE_1__["NavigateurService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NavigateurDetailsGuardService);
    return NavigateurDetailsGuardService;
}());



/***/ }),

/***/ "./src/app/admin/service/navigateur.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/service/navigateur.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateurService", function() { return NavigateurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigateurService = /** @class */ (function () {
    function NavigateurService(_http) {
        this._http = _http;
        this.baseUrl = 'http://192.168.33.20/api/navigateurs';
    }
    NavigateurService.prototype.getNavigateurs = function () {
        return this._http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    NavigateurService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    NavigateurService.prototype.getNavigateur = function (id) {
        return this._http.get(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    NavigateurService.prototype.save = function (navigateur) {
        return this._http.post(this.baseUrl, navigateur)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    NavigateurService.prototype.update = function (navigateur) {
        return this._http.put(this.baseUrl + '/' + navigateur.id, navigateur)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    NavigateurService.prototype.deleteNavigateur = function (id) {
        return this._http.delete(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    NavigateurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NavigateurService);
    return NavigateurService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/page-not-found/page-not-found.component */ "./src/app/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _landing_landing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.module */ "./src/app/landing/landing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @yaga/leaflet-ng2 */ "./node_modules/@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maps/maps.module */ "./src/app/maps/maps.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_13__["platformBrowserDynamic"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _landing_landing_module__WEBPACK_IMPORTED_MODULE_8__["LandingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_12__["YagaModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_14__["MapsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

document.addEventListener('DOMContentLoaded', function () {
    platform.bootstrapModule(AppModule);
});


/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/page-not-found/page-not-found.component */ "./src/app/error/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/landing/home', pathMatch: 'full' },
    { path: '**', component: _error_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
                _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-reset/request-reset.component */ "./src/app/auth/request-reset/request-reset.component.ts");
/* harmony import */ var _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-reset/response-reset.component */ "./src/app/auth/response-reset/response-reset.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/before-login.service */ "./src/app/services/before-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_6__["BeforeLoginService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_6__["BeforeLoginService"]] },
    { path: 'request-password-reset', component: _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__["RequestResetComponent"] },
    { path: 'response-password-reset', component: _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResponseResetComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-reset/request-reset.component */ "./src/app/auth/request-reset/request-reset.component.ts");
/* harmony import */ var _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./response-reset/response-reset.component */ "./src/app/auth/response-reset/response-reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__["RequestResetComponent"],
                _response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__["ResponseResetComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
                _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"],
                _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"],
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=row>\n  <br>\n  <br>\n  <br>\n\n  <!-- <div class=\"container\">\n      <a routerLink=\"/landing/home\"><img height=\"66\" width=\"275\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid rounded mx-auto d-block\"></a>\n  </div> -->\n  <div class=\"col-lg-12 text-center\">\n\n    <a (click)=goToLanding()>\n      <!-- <h1 class=\"logo-name\">UCLG AFRICA</h1> -->\n      <img style=\"padding-right: 15px\" src=\"assets/img/logo-ucgl.png\" alt=\"ucgl\">\n    </a>\n  </div>\n\n\n</div>\n\n<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n  <div>\n\n    <h3>Welcome to UCLG AFRICA</h3>\n\n\n\n    <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n      <div class=\"alert alert-danger\" [hidden]=\"!error\">\n        {{ errors }}\n      </div>\n\n\n      <div class=\"form-group\">\n        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"form.email\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"   name=\"password\" [(ngModel)]=\"form.password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!loginForm.valid\">Login</button>\n\n      <a routerLink=\"/request-password-reset\"><small>Forgot password?</small></a>\n      <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n      <a class=\"btn btn-sm btn-white btn-block\" routerLink=\"/signup\">Create an account</a>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, token, router, toastr) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.toastr = toastr;
        this.form = {
            email: null,
            password: null
        };
        this.errors = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/administrateur');
    };
    LoginComponent.prototype.handelError = function (error) {
        this.errors = error.error.error;
    };
    LoginComponent.prototype.goToLanding = function () {
        this.router.navigate(['landing']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.css":
/*!****************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"passwordBox animated fadeInDown\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"ibox-content\">\n\n        <h2 class=\"font-bold\">Forgot password</h2>\n\n        <p>\n          Enter your email address and your password will be reset and emailed to you.\n        </p>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-12\">\n            <form #resetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n              <div class=\"form-group\">\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" required=\"\"\n                  [(ngModel)]=\"form.email\">\n              </div>\n              <div class=\"alert alert-danger\" [hidden]=\"!errors.email\">\n                {{ errors.email }}\n              </div>\n              <div class=\"alert alert-danger\" [hidden]=\"!error\">\n                {{ error }}\n              </div>\n              <button [disabled]=\"!resetPasswordForm.valid\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Send\n                new password</button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      Copyright Example Company\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <small>© 2014-2015</small>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/request-reset/request-reset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/request-reset/request-reset.component.ts ***!
  \***************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent(auth, toastr) {
        this.auth = auth;
        this.toastr = toastr;
        this.form = {
            email: null
        };
        this.errors = [];
        this.error = null;
    }
    RequestResetComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    RequestResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.sendPasswordResetLink(this.form).subscribe(function (data) {
            _this.errors = [];
            _this.handleResponse(data);
        }, function (error) { return _this.handelError(error); });
    };
    RequestResetComponent.prototype.handleResponse = function (data) {
        this.form.email = null;
        this.toastr.success(data.data, '', { timeOut: 0 });
    };
    RequestResetComponent.prototype.handelError = function (error) {
        if (error.error.errors) {
            this.error = null;
            this.errors = error.error.errors;
        }
        else {
            this.errors = [];
            this.error = error.error.error;
            console.log(error.error.error);
        }
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/auth/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/auth/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen   animated fadeInDown\">\n  <div>\n    <div>\n\n      <h1 class=\"logo-name\">IN+</h1>\n\n    </div>\n    <h3>Reset Password</h3>\n    <p>Create account to see it in action.</p>\n    <form #resetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n\n\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required name=\"email\" [(ngModel)]=\"form.email\">\n       <span class=\"text-danger\" [hidden]=\"!error.email\">{{ error.email}}</span>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"password\" required=\"\" [(ngModel)]=\"form.password\">\n        <span class=\"text-danger\" [hidden]=\"!error.password\">{{ error.password}}</span>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"password_confirmation\" required=\"\" [(ngModel)]=\"form.password_confirmation\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!resetPasswordForm.valid\">Reset Password</button>\n\n\n    </form>\n    <p class=\"m-t\">\n      <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/response-reset/response-reset.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/response-reset/response-reset.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent(route, auth, router, toastr) {
        var _this = this;
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            resetToken: null
        };
        this.error = [];
        route.queryParams.subscribe(function (params) {
            _this.form.resetToken = params['token'];
        });
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    ResponseResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.changePassword(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    ResponseResetComponent.prototype.handleResponse = function (data) {
        this.router.navigateByUrl('/login');
    };
    ResponseResetComponent.prototype.handelError = function (error) {
        this.error = error.error.errors;
    };
    ResponseResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/auth/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/auth/response-reset/response-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=row>\n    <br>\n    <br>\n    <div class=\"col-lg-12 text-center\">\n\n        <a (click)=goToLanding()>\n            <!-- <h1 class=\"logo-name\">UCLG AFRICA</h1> -->\n            <img style=\"padding-right: 15px\" src=\"assets/img/logo-ucgl.png\" alt=\"ucgl\">\n        </a>\n    </div>\n</div>\n\n<div class=\"middle-box text-center loginscreen   animated fadeInDown\">\n    <div>\n        <h3>Register to UCLG</h3>\n        <p>Create account to see it in action.</p>\n        <form #registerForm=ngForm (ngSubmit)=\"onSubmit()\" class=\"m-t\" role=\"form\">\n\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" autocomplete=Off placeholder=\"Name\" required=\"\" name=\"name\"\n                    [(ngModel)]=\"form.name\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.name\">\n                {{errors.name}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" autocomplete=Off placeholder=\"Email\" required=\"\" name=\"email\"\n                    [(ngModel)]=\"form.email\">\n\n            </div>\n\n\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.email\">\n                {{errors.email}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" autocomplete=Off placeholder=\"Password\" name=\"password\"\n                    required=\"\" [(ngModel)]=\"form.password\">\n            </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!errors.password\">\n                {{errors.password}}\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" autocomplete=Off placeholder=\"Confirm Password\" name=\"password_confirmation\"\n                    required=\"\" [(ngModel)]=\"form.password_confirmation\">\n            </div>\n            <!--<div class=\"form-group\">-->\n            <!--<div class=\"checkbox i-checks\"><label> <input type=\"checkbox\"><i></i> Agree the terms and policy </label></div>-->\n            <!--</div>-->\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!registerForm.valid\">Register</button>\n\n            <p class=\"text-muted text-center\">\n                <small>Already have an account?</small>\n            </p>\n            <a class=\"btn btn-sm btn-white btn-block\" routerLink=\"/login\">Login</a>\n        </form>\n        <p class=\"m-t\">\n\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, token, router) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.form = {
            email: null,
            name: null,
            password: null,
            password_confirmation: null
        };
        this.errors = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handelError(error); });
    };
    SignupComponent.prototype.handelError = function (error) {
        this.errors = error.error.errors;
    };
    SignupComponent.prototype.goToLanding = function () {
        this.router.navigate(['landing']);
    };
    SignupComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.access_token);
        this.router.navigateByUrl('/administrateur');
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"middle-box text-center animated fadeInDown\">\n  <h1>404</h1>\n  <h3 class=\"font-bold\">Page Not Found</h3>\n\n  <div class=\"error-desc\">\n    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.\n    <form class=\"form-inline m-t\" role=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for page\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/error/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        document.body.className = 'gray-bg';
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/error/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/error/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"comments gray-section\" style=\"margin-top: 0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>What our partners say</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada. </p>\n      </div>\n    </div>\n    <div class=\"row features-block\">\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar9.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar1.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"bubble\">\n          \"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes\n          on purpose (injected humour and the like).\"\n        </div>\n        <div class=\"comments-avatar\">\n          <a href=\"\" class=\"float-left\">\n            <img alt=\"image\" src=\"assets/img/landing/avatar2.jpg\">\n          </a>\n          <div class=\"media-body\">\n            <div class=\"commens-name\">\n              Andrew Williams\n            </div>\n            <small class=\"text-muted\">Company X from California</small>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/comments-section/comments-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/landing/comments-section/comments-section.component.ts ***!
  \************************************************************************/
/*! exports provided: CommentsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsSectionComponent", function() { return CommentsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsSectionComponent = /** @class */ (function () {
    function CommentsSectionComponent() {
    }
    CommentsSectionComponent.prototype.ngOnInit = function () {
    };
    CommentsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments-section',
            template: __webpack_require__(/*! ./comments-section.component.html */ "./src/app/landing/comments-section/comments-section.component.html"),
            styles: [__webpack_require__(/*! ./comments-section.component.css */ "./src/app/landing/comments-section/comments-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.html":
/*!************************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"gray-section contact\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Contact Us</h1>\n        <p>The umbrella organization for African local governments, was founded in 2005 in the City of Tshwane, South Africa as a result of the unification of three continental groups of local governments, namely the African Union of Local Authorities (AULA); the Union des Villes Africaines (UVA); and the Africa Chapter of the Unao dos Ciudades y Capitaes Lusofono Africana, (UCCL AFRICA).</p>\n      </div>\n    </div>\n    <div class=\"row m-b-lg justify-content-center\">\n        <div class=\"col-lg-3\" >\n            <img  height=\"70\" width=\"260\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid\">\n        </div>\n     \n      <div class=\"col-lg-3 \">\n        <address>\n          <strong><span class=\"navy\">OUR LOCATION\n                        \n              .</span></strong><br/> 22 ESSAADYINE STREET,<br/> HASSAN, RABAT<br/>KINGDOM OF MOROCCO\n          <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n        </address>\n      </div>\n      <!-- <div class=\"col-lg-4\">\n        <p class=\"text-color\">\n          Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam\n          veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,\n        </p>\n      </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <a href=\"info@uclga.org\" class=\"btn btn-primary\">Send us mail</a>\n        <p class=\"m-t-sm\">\n          Or follow us on social platform\n        </p>\n        <ul class=\"list-inline social-icon\">\n          <li class=\"list-inline-item\"><a href=\"https://www.twitter.com/UCLGAfrica\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li class=\"list-inline-item\"><a href=\"https://www.facebook.com/CGLUAfrique\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li class=\"list-inline-item\"><a href=\"http://www.linkedin.com/company/cglu-afrique?trk=top_nav_home\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-t-lg m-b-lg\">\n        <p><strong>&copy; Copyright © 2018 UCLG Africa</strong><br/>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/landing/contact-section/contact-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing/contact-section/contact-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSectionComponent", function() { return ContactSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactSectionComponent = /** @class */ (function () {
    function ContactSectionComponent() {
    }
    ContactSectionComponent.prototype.ngOnInit = function () {
    };
    ContactSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-section',
            template: __webpack_require__(/*! ./contact-section.component.html */ "./src/app/landing/contact-section/contact-section.component.html"),
            styles: [__webpack_require__(/*! ./contact-section.component.css */ "./src/app/landing/contact-section/contact-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactSectionComponent);
    return ContactSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/directory/directory.component.css":
/*!***********************************************************!*\
  !*** ./src/app/landing/directory/directory.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/directory/directory.component.html":
/*!************************************************************!*\
  !*** ./src/app/landing/directory/directory.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <br>\n  <br>\n  <br>\n  <br>\n</div>\n<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-9\">\n    <h2>Directory</h2>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/landing/home\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a #h1Variable></a>\n      </li>\n    </ol>\n  </div>\n</div>\n</div>\n\n<app-navsearch></app-navsearch>\n\n<div class=\"gray-bg-light\">\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br><br>\n    <br>\n    \n        <div class=\"middle-box text-center animated fadeInDown \">\n            <h1 class=\"text-secondary\">THIS PAGE CURRENTLY <br> UNDER CONSTRUCTION ...</h1>\n            <h3 class=\"font-bold\">coming-soon</h3>\n    \n            <div class=\"error-desc\">\n             <br/><a href=\"/landing/home\" class=\"btn btn-primary m-t\">HOME</a>\n            </div>\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n    </div>"

/***/ }),

/***/ "./src/app/landing/directory/directory.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/landing/directory/directory.component.ts ***!
  \**********************************************************/
/*! exports provided: DirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryComponent", function() { return DirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent() {
    }
    DirectoryComponent.prototype.ngOnInit = function () {
    };
    DirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directory',
            template: __webpack_require__(/*! ./directory.component.html */ "./src/app/landing/directory/directory.component.html"),
            styles: [__webpack_require__(/*! ./directory.component.css */ "./src/app/landing/directory/directory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"ibox-content m-b-sm border-bottom \">\n                <div class=\"row\">\n                  <h2>DATA</h2>\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <form class=\"form-inline my-2 my-lg-0\">\n                                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n                              </form>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                            <div class=\"custom-control custom-checkbox\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Show filter</label>\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">                                  </div>\n                             </div>\n                    <div class=\"col-sm-3\">\n                            <div class=\" dataTables_length \" id=\"\"> \n                                    <select name=\"DataTables_Table_0_length\" aria-controls=\"DataTables_Table_0\" class=\"form-control form-control-sm\">\n                                        <option value=\"10\">10</option>\n                                        <option value=\"25\">25</option>\n                                        <option value=\"50\">50</option>\n                                        <option value=\"100\">100</option>\n                                    </select> \n                            </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                ORDER BY                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                              <a class=\"dropdown-item\" href=\"#\">Last Modified</a>\n                              <a class=\"dropdown-item\" href=\"#\">Last Created</a>\n                              <a class=\"dropdown-item\" href=\"#\">Name Ascending</a>\n                              <a class=\"dropdown-item\" href=\"#\">Name Descending</a>\n                            </div>\n                          </div>\n                    </div>\n                </div>\n\n            </div>\n            </div>"

/***/ }),

/***/ "./src/app/landing/directory/navsearch/navsearch.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/directory/navsearch/navsearch.component.ts ***!
  \********************************************************************/
/*! exports provided: NavsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavsearchComponent", function() { return NavsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = /** @class */ (function () {
    function NavsearchComponent() {
    }
    NavsearchComponent.prototype.ngOnInit = function () {
    };
    NavsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navsearch',
            template: __webpack_require__(/*! ./navsearch.component.html */ "./src/app/landing/directory/navsearch/navsearch.component.html"),
            styles: [__webpack_require__(/*! ./navsearch.component.css */ "./src/app/landing/directory/navsearch/navsearch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavsearchComponent);
    return NavsearchComponent;
}());



/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        \n        <h1>UCLG Africa</h1>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n        <a href=\"https://www.uclga.org/our-pillars/#top\" target=\"_blank\" ><h2>OUR PILLARS</h2></a>\n        <!-- <i class=\"fa fa-bar-chart big-icon float-right\"></i> -->\n        <p>UCLG Africa has developed a series of programs and interventions including the mobilization of strategies, methods and tools to support our members under our three pillars: A. Institutional Strengthening and Capacity Development; B. Advocacy and Mobilization; C. Corporate Learning and Knowledge Management. These interventions are aimed at supporting the development of local governments to better serve their communities by improving living conditions and driving development from the grassroots.</p>\n      </div>\n      <div class=\"col-lg-5 features-text\">\n          <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\"><h2>WHO WE ARE</h2></a>\n          <!-- <i class=\"fa fa-bolt big-icon float-right\"></i> -->\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of\n          reusable UI components and integrated with.</p>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-lg-offset-1 features-text\">\n          <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\"><h2>OBJECTIVES</h2></a>\n          <!-- <i class=\"fa fa-clock-o big-icon float-right\"></i> -->\n        <p>The Governance, Advocacy & Decentralized Development Program for Africa (GADDEPA) is the strategic vision for UCLG Africa, which aims to build Africa from the roots. ​​GADDEPA lays out the objectives of the organization and how it aims to deliver across eleven key priority areas to drive decentralized co-operation.\n\n          </p>\n      </div>\n      <div class=\"col-lg-5 features-text\">\n          <a href=\"https://www.uclga.org/who-we-are/\" target=\"_blank\"><h2>OUR VISION & MISSION</h2></a>\n          <!-- <i class=\"fa fa-users big-icon float-right\"></i> -->\n        <p>The vision of UCLG Africa is “Building African Unity and Driving African Development through the Grassroots.”\n\n            <br> To achieve this vision UCLG Africa’s Mission Statement outlines its principal goals to:\n            \n            <br>- Unite African local government; place it in the continental political and economic development context and represent it in all relevant forums\n            <br>- Strive for the establishment of local government as a distinct sphere of government working in support of national and other spheres of government in Africa\n            <br>- Ensure democracy, equality and respect for human rights at the local level...\n           \n           </p>\n      </div>\n    </div>\n  </div>\n  \n\n</section>\n\n<section class=\"features\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jXT9sba-5eM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n</div>\n</div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/landing/extra-features-section/extra-features-section.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/landing/extra-features-section/extra-features-section.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExtraFeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraFeaturesSectionComponent", function() { return ExtraFeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtraFeaturesSectionComponent = /** @class */ (function () {
    function ExtraFeaturesSectionComponent() {
    }
    ExtraFeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    ExtraFeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extra-features-section',
            template: __webpack_require__(/*! ./extra-features-section.component.html */ "./src/app/landing/extra-features-section/extra-features-section.component.html"),
            styles: [__webpack_require__(/*! ./extra-features-section.component.css */ "./src/app/landing/extra-features-section/extra-features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraFeaturesSectionComponent);
    return ExtraFeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"partners\" class=\"container services\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/AFDB_logo-180x180.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/african_union.jpg\" class=\"img-fluid  \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/Logo-CEEAC-180x180.png\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <img src=\"assets/img/landing/cedead.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n    </div>\n  </div>\n</section>\n\n<section class=\"container features\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <div class=\"navy-line\"></div>\n      <h1>OUR PARTNERS<br/> <span class=\"navy\"> with many custom components</span> </h1>\n      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 text-center wow fadeInLeft\">\n      <div>\n        <img src=\"assets/img/landing/cooperation-belge-au-developpement_logo-200x200.jpg\" class=\"img-fluid \" alt=\"\">\n      </div>\n      <div class=\"m-t-lg\">\n        <img src=\"assets/img/landing/SADC-Logo-180x180.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n      </div>\n    </div>\n    <div class=\"col-md-6 text-center  wow zoomIn\">\n        <img height=\"65\" width=\"255\" src=\"assets/img/landing/icon-partnership.png\" alt=\"partnership\" class=\"img-fluid img-fluid\">\n\n      <!-- <img src=\"assets/img/landing/perspective.png\" alt=\"dashboard\" class=\"img-fluid\"> -->\n    </div>\n    <div class=\"col-md-3 text-center wow fadeInRight\">\n      <div>\n        <img src=\"assets/img/landing/agence-de-loriental-logo-180x180.png\" class=\"img-fluid s \" alt=\"\">\n      </div>\n      <div class=\"m-t-lg\">\n        <img src=\"assets/img/landing/UNEP-Logo-180x180.jpg\" class=\"img-fluid  \" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <img src=\"assets/img/landing/Royaume-du-Maroc-logo-180x180.png\" class=\"img-fluid  \" alt=\"\">\n      <div class=\"navy-line\"></div>\n      <a href=\"\" target=\"_blank\"><h1>More</h1></a>\n      </div>\n  </div>\n  <!-- <div class=\"row features-block\">\n    <div class=\"col-lg-6 features-text wow fadeInLeft\">\n      <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n\n      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n        dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable\n        UI components and integrated with latest jQuery plugins.</p>\n      <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n    </div>\n    <div class=\"col-lg-6 text-right wow fadeInRight\">\n        <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle \" alt=\"\">\n      </div>\n  </div> -->\n</section>"

/***/ }),

/***/ "./src/app/landing/features-section/features-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/landing/features-section/features-section.component.ts ***!
  \************************************************************************/
/*! exports provided: FeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesSectionComponent", function() { return FeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesSectionComponent = /** @class */ (function () {
    function FeaturesSectionComponent() {
    }
    FeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    FeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-section',
            template: __webpack_require__(/*! ./features-section.component.html */ "./src/app/landing/features-section/features-section.component.html"),
            styles: [__webpack_require__(/*! ./features-section.component.css */ "./src/app/landing/features-section/features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesSectionComponent);
    return FeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/landing/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/landing/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n<app-slider-section></app-slider-section>\n\n<app-maps></app-maps>\n<app-features-section></app-features-section>\n <app-comments-section></app-comments-section>\n\n<app-team-section></app-team-section>\n<app-testimonials-section></app-testimonials-section>\n\n\n<app-extra-features-section></app-extra-features-section>\n\n<!-- <app-pricing-section></app-pricing-section> -->\n</div>"

/***/ }),

/***/ "./src/app/landing/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/landing/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/landing/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/landing/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\n  <nav class=\"navbar navbar-default navbar-fixed-top navbar-expand-md\" role=\"navigation\">\n    <div class=\"container\">\n      <a routerLink=\"/landing/home\"><img height=\"60\" width=\"250\" src=\"assets/img/logo-ucgl.png\" alt=\"UCLGA\" class=\"img-fluid\"></a>\n\n      <div class=\"navbar-header page-scroll\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\">\n          <i class=\"fa fa-bars\"></i>\n        </button>\n      </div>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar\" >\n        <ul class=\"nav navbar-nav navbar-right\">\n             <li><a class=\"nav-link\"  routerLink=\"/landing/home\"  >HOME</a></li>\n          <li><a class=\"nav-link\" pageScroll href=\"#maps\">MAPS</a></li>\n          <li><a class=\"nav-link\" routerLink=\"/landing/directory\" routerLinkActive=\"active\">DIRECTORY</a></li>\n          <li><a class=\"nav-link\" pageScroll  routerLink=\"/landing/transparency\" routerLinkActive=\"active\">TRANSPARENCY</a></li>\n          <li><a class=\"nav-link\"  routerLink=\"/landing/statistic\" routerLinkActive=\"active\">STATISTICS</a></li>\n          <li><a class=\"nav-link\" pageScroll href=\"#partners\">Partners</a></li>\n          <li><a class=\"nav-link\" pageScroll href=\"#contact\">Contact</a></li>\n          <li *ngIf=\"loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToAdmin()\">Admin</a></li>\n          <li *ngIf=\"!loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToLogin()\">Login</a></li>\n          <li *ngIf=\"!loggedIn\"><a class=\"nav-link page-scroll\" (click)=\"goToSignup()\">SignUp</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing-nav/landing-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/landing/landing-nav/landing-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingNavComponent", function() { return LandingNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingNavComponent = /** @class */ (function () {
    function LandingNavComponent(token, auth, _router) {
        this.token = token;
        this.auth = auth;
        this._router = _router;
        this.page = '';
    }
    LandingNavComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.token.loggedIn();
    };
    LandingNavComponent.prototype.goToLogin = function () {
        this._router.navigate(['login']);
    };
    LandingNavComponent.prototype.goToAdmin = function () {
        this._router.navigate(['administrateur']);
    };
    LandingNavComponent.prototype.goToSignup = function () {
        this._router.navigate(['signup']);
    };
    LandingNavComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.changeAuthStatus(false);
        this.token.remove();
        this.loggedIn = this.token.loggedIn();
    };
    LandingNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-nav',
            template: __webpack_require__(/*! ./landing-nav.component.html */ "./src/app/landing/landing-nav/landing-nav.component.html"),
            styles: [__webpack_require__(/*! ./landing-nav.component.css */ "./src/app/landing/landing-nav/landing-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingNavComponent);
    return LandingNavComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic/statistic.component */ "./src/app/landing/statistic/statistic.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _directory_directory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directory/directory.component */ "./src/app/landing/directory/directory.component.ts");
/* harmony import */ var _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transparency/transparency.component */ "./src/app/landing/transparency/transparency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var landingRoutes = [
    { path: 'landing', component: _landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [
            { path: 'statistic', component: _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_3__["StatisticComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'directory', component: _directory_directory_component__WEBPACK_IMPORTED_MODULE_5__["DirectoryComponent"] },
            { path: 'transparency', component: _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_6__["TransparencyComponent"] }
        ]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(landingRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-nav></app-landing-nav>\n\n<!-- <app-slider-section></app-slider-section> -->\n\n<router-outlet></router-outlet>\n\n<!-- <app-maps></app-maps>\n<app-features-section></app-features-section>\n <app-comments-section></app-comments-section>\n\n<app-team-section></app-team-section>\n<app-testimonials-section></app-testimonials-section>\n\n\n<app-extra-features-section></app-extra-features-section> -->\n\n<!-- <app-pricing-section></app-pricing-section> -->\n\n<app-contact-section></app-contact-section>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(token, _router, _route) {
        this.token = token;
        this._router = _router;
        this._route = _route;
    }
    LandingComponent.prototype.ngOnInit = function () {
        document.body.className = 'landing-page no-skin-config';
        document.body.setAttribute('id', 'page-top');
    };
    LandingComponent.prototype.goToLogin = function () {
        this._router.navigate(['login']);
    };
    LandingComponent.prototype.goToSignup = function () {
        this._router.navigate(['signup']);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LandingComponent);
    return LandingComponent;
}());

$(document).ready(function () {
    $('body').scrollspy({
        target: '#navbar',
        offset: 80
    });
    // Page scrolling feature
});
var cbpAnimatedHeader = (function () {
    var docElem = document.documentElement, header = document.querySelector('.navbar-default'), didScroll = false, changeHeaderOn = 200;
    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }
    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            $(header).addClass('navbar-scroll');
        }
        else {
            $(header).removeClass('navbar-scroll');
        }
        didScroll = false;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();
})();


/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _landing_nav_landing_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-nav/landing-nav.component */ "./src/app/landing/landing-nav/landing-nav.component.ts");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments-section/comments-section.component */ "./src/app/landing/comments-section/comments-section.component.ts");
/* harmony import */ var _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-section/contact-section.component */ "./src/app/landing/contact-section/contact-section.component.ts");
/* harmony import */ var _features_section_features_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features-section/features-section.component */ "./src/app/landing/features-section/features-section.component.ts");
/* harmony import */ var _extra_features_section_extra_features_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extra-features-section/extra-features-section.component */ "./src/app/landing/extra-features-section/extra-features-section.component.ts");
/* harmony import */ var _slider_section_slider_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider-section/slider-section.component */ "./src/app/landing/slider-section/slider-section.component.ts");
/* harmony import */ var _second_features_section_second_features_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./second-features-section/second-features-section.component */ "./src/app/landing/second-features-section/second-features-section.component.ts");
/* harmony import */ var _team_section_team_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-section/team-section.component */ "./src/app/landing/team-section/team-section.component.ts");
/* harmony import */ var _testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testimonials-section/testimonials-section.component */ "./src/app/landing/testimonials-section/testimonials-section.component.ts");
/* harmony import */ var _pricing_section_pricing_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing-section/pricing-section.component */ "./src/app/landing/pricing-section/pricing-section.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/landing/maps/maps.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/landing/timeline/timeline.component.ts");
/* harmony import */ var _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./statistic/statistic.component */ "./src/app/landing/statistic/statistic.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/landing/home/home.component.ts");
/* harmony import */ var _statistic_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./statistic/chart/chart.component */ "./src/app/landing/statistic/chart/chart.component.ts");
/* harmony import */ var _statistic_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./statistic/accordion/accordion.component */ "./src/app/landing/statistic/accordion/accordion.component.ts");
/* harmony import */ var _directory_directory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directory/directory.component */ "./src/app/landing/directory/directory.component.ts");
/* harmony import */ var _directory_navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directory/navsearch/navsearch.component */ "./src/app/landing/directory/navsearch/navsearch.component.ts");
/* harmony import */ var _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transparency/transparency.component */ "./src/app/landing/transparency/transparency.component.ts");
/* harmony import */ var _modal_select_county_modal_select_county_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modal-select-county/modal-select-county.component */ "./src/app/landing/modal-select-county/modal-select-county.component.ts");
/* harmony import */ var _yaga_leaflet_ng2_lib_yaga_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @yaga/leaflet-ng2/lib/yaga.module */ "./node_modules/@yaga/leaflet-ng2/lib/yaga.module.js");
/* harmony import */ var _yaga_leaflet_ng2_lib_yaga_module__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2_lib_yaga_module__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../maps/maps.module */ "./src/app/maps/maps.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_15__["NgxPageScrollModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"].forRoot(),
                _yaga_leaflet_ng2_lib_yaga_module__WEBPACK_IMPORTED_MODULE_26__["YagaModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_27__["MapsModule"]
            ],
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _landing_nav_landing_nav_component__WEBPACK_IMPORTED_MODULE_5__["LandingNavComponent"],
                _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_6__["CommentsSectionComponent"],
                _contact_section_contact_section_component__WEBPACK_IMPORTED_MODULE_7__["ContactSectionComponent"],
                _features_section_features_section_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesSectionComponent"],
                _extra_features_section_extra_features_section_component__WEBPACK_IMPORTED_MODULE_9__["ExtraFeaturesSectionComponent"],
                _slider_section_slider_section_component__WEBPACK_IMPORTED_MODULE_10__["SliderSectionComponent"],
                _second_features_section_second_features_section_component__WEBPACK_IMPORTED_MODULE_11__["SecondFeaturesSectionComponent"],
                _team_section_team_section_component__WEBPACK_IMPORTED_MODULE_12__["TeamSectionComponent"],
                _testimonials_section_testimonials_section_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsSectionComponent"],
                _pricing_section_pricing_section_component__WEBPACK_IMPORTED_MODULE_14__["PricingSectionComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_16__["MapsComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_17__["TimelineComponent"],
                _statistic_statistic_component__WEBPACK_IMPORTED_MODULE_18__["StatisticComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _statistic_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__["ChartComponent"],
                _statistic_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"],
                _directory_directory_component__WEBPACK_IMPORTED_MODULE_22__["DirectoryComponent"],
                _directory_navsearch_navsearch_component__WEBPACK_IMPORTED_MODULE_23__["NavsearchComponent"],
                _transparency_transparency_component__WEBPACK_IMPORTED_MODULE_24__["TransparencyComponent"],
                _modal_select_county_modal_select_county_component__WEBPACK_IMPORTED_MODULE_25__["ModalSelectCountyComponent"],
            ],
            entryComponents: [
                _modal_select_county_modal_select_county_component__WEBPACK_IMPORTED_MODULE_25__["ModalSelectCountyComponent"]
            ],
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/landing/maps/maps.component.css":
/*!*************************************************!*\
  !*** ./src/app/landing/maps/maps.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/maps/maps.component.html":
/*!**************************************************!*\
  !*** ./src/app/landing/maps/maps.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"maps\">\n  <app-landing-map></app-landing-map>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/maps/maps.component.ts":
/*!************************************************!*\
  !*** ./src/app/landing/maps/maps.component.ts ***!
  \************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/landing/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/landing/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/landing/modal-select-county/modal-select-county.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/landing/modal-select-county/modal-select-county.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/modal-select-county/modal-select-county.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/landing/modal-select-county/modal-select-county.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary  \">\n  <h3 class=\"modal-title pull-left\">{{title}}</h3>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-2\" *ngFor=\"let country of countries\">\n      <ul class=\"folder-list m-b-md\" style=\"padding: 0\">\n        <li>\n          <a (click)=\"getCountryFromMap(country.properties.name)\">\n            {{ country.properties.name }}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Fermer</button>\n  <button class=\"btn btn-block\" type=\"button\" (click)=\"onConfirm()\">Sauvegarder</button>\n</div> -->\n"

/***/ }),

/***/ "./src/app/landing/modal-select-county/modal-select-county.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/landing/modal-select-county/modal-select-county.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalSelectCountyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSelectCountyComponent", function() { return ModalSelectCountyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalSelectCountyComponent = /** @class */ (function () {
    function ModalSelectCountyComponent(_modalRef) {
        this._modalRef = _modalRef;
    }
    ModalSelectCountyComponent.prototype.getCountryFromMap = function (name) {
        console.log(name);
        this._modalRef.hide();
    };
    ModalSelectCountyComponent.prototype.onCancel = function () {
        this._modalRef.hide();
    };
    ModalSelectCountyComponent.prototype.onConfirm = function () {
        // this.onClose.next(this.region);
    };
    ModalSelectCountyComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    };
    ModalSelectCountyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-select-county',
            template: __webpack_require__(/*! ./modal-select-county.component.html */ "./src/app/landing/modal-select-county/modal-select-county.component.html"),
            styles: [__webpack_require__(/*! ./modal-select-county.component.css */ "./src/app/landing/modal-select-county/modal-select-county.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ModalSelectCountyComponent);
    return ModalSelectCountyComponent;
}());



/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.html":
/*!************************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"pricing\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>App Pricing</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled\">\n          <li class=\"pricing-title\">\n            Basic\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$16</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled selected\">\n          <li class=\"pricing-title\">\n            Standard\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$22</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <strong>Support platform</strong>\n          </li>\n          <li class=\"plan-action\">\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-4 wow zoomIn\">\n        <ul class=\"pricing-plan list-unstyled\">\n          <li class=\"pricing-title\">\n            Premium\n          </li>\n          <li class=\"pricing-desc\">\n            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n          </li>\n          <li class=\"pricing-price\">\n            <span>$160</span> / month\n          </li>\n          <li>\n            Dashboards\n          </li>\n          <li>\n            Projects view\n          </li>\n          <li>\n            Contacts\n          </li>\n          <li>\n            Calendar\n          </li>\n          <li>\n            AngularJs\n          </li>\n          <li>\n            <a class=\"btn btn-primary btn-xs\" href=\"#\">Signup</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row m-t-lg\">\n      <div class=\"col-lg-12 text-center m-t-lg\">\n        <p>*Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a\n          search for 'lorem ipsum' will uncover many web sites still in their infancy. <span class=\"navy\">Various versions</span>\n          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/pricing-section/pricing-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing/pricing-section/pricing-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: PricingSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingSectionComponent", function() { return PricingSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingSectionComponent = /** @class */ (function () {
    function PricingSectionComponent() {
    }
    PricingSectionComponent.prototype.ngOnInit = function () {
    };
    PricingSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-section',
            template: __webpack_require__(/*! ./pricing-section.component.html */ "./src/app/landing/pricing-section/pricing-section.component.html"),
            styles: [__webpack_require__(/*! ./pricing-section.component.css */ "./src/app/landing/pricing-section/pricing-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingSectionComponent);
    return PricingSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Even more great feautres</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>\n      </div>\n    </div>\n    <div class=\"row features-block\">\n      <div class=\"col-lg-3 features-text wow fadeInLeft\">\n        <small>INSPINIA</small>\n        <h2>Perfectly designed </h2>\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of\n          reusable UI components and integrated with latest jQuery plugins.</p>\n        <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n      </div>\n      <div class=\"col-lg-6 text-right m-t-n-lg wow zoomIn\">\n        <img src=\"assets/img/landing/iphone.jpg\" class=\"img-fluid\" alt=\"dashboard\">\n      </div>\n      <div class=\"col-lg-3 features-text text-right wow fadeInRight\">\n        <small>INSPINIA</small>\n        <h2>Perfectly designed </h2>\n        <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin\n          dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of\n          reusable UI components and integrated with latest jQuery plugins.</p>\n        <a href=\"\" class=\"btn btn-primary\">Learn more</a>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/second-features-section/second-features-section.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/second-features-section/second-features-section.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SecondFeaturesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondFeaturesSectionComponent", function() { return SecondFeaturesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondFeaturesSectionComponent = /** @class */ (function () {
    function SecondFeaturesSectionComponent() {
    }
    SecondFeaturesSectionComponent.prototype.ngOnInit = function () {
    };
    SecondFeaturesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-features-section',
            template: __webpack_require__(/*! ./second-features-section.component.html */ "./src/app/landing/second-features-section/second-features-section.component.html"),
            styles: [__webpack_require__(/*! ./second-features-section.component.css */ "./src/app/landing/second-features-section/second-features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondFeaturesSectionComponent);
    return SecondFeaturesSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inSlider\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#inSlider\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#inSlider\" data-slide-to=\"1\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>WHO WE ARE<br/> United Cities and Local<br/>  Governments of Africa (UCLG Africa)<br/>\n          </h1>\n          <p>\n            <a class=\"btn btn-lg btn-primary\" href=\"https://www.uclga.org/who-we-are/\" role=\"button\" target=\"_blank\">READ MORE</a>\n          </p>\n        </div>\n        <!-- <div class=\"carousel-image wow zoomIn\">\n          <img src=\"assets/img/landing/laptop.png\" alt=\"laptop\" />\n        </div> -->\n      </div>\n      <!-- Set background for slide in css -->\n      <div class=\"header-back one\"></div>\n\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"container\">\n        <div class=\"carousel-caption blank\">\n          <h1>THE VOICE  <br/> OF LOCAL AFRICA.\n          </h1>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"https://www.uclga.org/\" role=\"button\" target=\"_blank\">UCLGA...Learn more</a></p>\n        </div>\n      </div>\n      <!-- Set background for slide in css -->\n      <div class=\"header-back two\"></div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#inSlider\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#inSlider\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/landing/slider-section/slider-section.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/slider-section/slider-section.component.ts ***!
  \********************************************************************/
/*! exports provided: SliderSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderSectionComponent", function() { return SliderSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderSectionComponent = /** @class */ (function () {
    function SliderSectionComponent() {
    }
    SliderSectionComponent.prototype.ngOnInit = function () {
    };
    SliderSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider-section',
            template: __webpack_require__(/*! ./slider-section.component.html */ "./src/app/landing/slider-section/slider-section.component.html"),
            styles: [__webpack_require__(/*! ./slider-section.component.css */ "./src/app/landing/slider-section/slider-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderSectionComponent);
    return SliderSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"accordion\" id=\"accordionExample\">\n        <div class=\"row\">\n         <div class=\"col-lg-3\">\n          <div class=\"card-header\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Collapsible Group Item #1\n              </button>\n            </h5>\n            </div>\n         </div>\n         <div class=\"col-lg-3\">\n            <div class=\"card-header\" id=\"headingTwo\">\n              <h5 class=\"mb-0\">\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  Collapsible Group Item #2\n                </button>\n              </h5>\n            </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"card-header\" id=\"headingThree\">\n                  <h5 class=\"mb-0\">\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                      Collapsible Group Item #3\n                    </button>\n                  </h5>\n                </div>\n              </div>\n              <div class=\"col-lg-3\">\n                  <div class=\"card-header\" id=\"headingfour\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsefour\" aria-expanded=\"false\" aria-controls=\"collapsefour\">\n                        Collapsible Group Item #4\n                      </button>\n                    </h5>\n                  </div>\n                </div>\n          <div class=\"row\">\n          <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"col-lg-12\">\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option one is this and that—be sure toinclude why it's great </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>            </div>\n              </div>\n              </div>         \n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option one is this and that—be sure toinclude why it's great </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>            </div>\n          </div>\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n                <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option one is this and that—be sure toinclude why it's great </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\n                <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>            </div>\n          </div>\n            <div id=\"collapsefour\" class=\"collapse\" aria-labelledby=\"headingfour\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                      <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"\" name=\"\"> Option one is this and that—be sure toinclude why it's great </label></div>\n                      <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\n                      <div><label> <input type=\"radio\" value=\"option2\" id=\"\" name=\"\"> Option two can be something else and selecting it willdeselect option one </label></div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/landing/statistic/accordion/accordion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/statistic/accordion/accordion.component.ts ***!
  \********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/landing/statistic/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/landing/statistic/accordion/accordion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.css":
/*!*************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"ibox \">\n            <div class=\"ibox-title\">\n                <h5>Line Chart Example\n                    <small>With custom colors.</small>\n                </h5>\n            </div>\n            <div class=\"ibox-content\">\n                <div><iframe class=\"chartjs-hidden-iframe\" style=\"width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\"></iframe>\n                    <canvas id=\"lineChart\" height=\"187\" width=\"403\" style=\"display: block; width: 359px; height: 167px;\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"ibox \">\n            <div class=\"ibox-title\">\n                <h5>Bar Chart Example</h5>\n            </div>\n            <div class=\"ibox-content\">\n                <div><iframe class=\"chartjs-hidden-iframe\" style=\"width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\"></iframe>\n                    <canvas id=\"barChart\" height=\"187\" width=\"403\" style=\"display: block; width: 359px; height: 167px;\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Polar Area</h5>\n\n                    <div ibox-tools></div>\n                </div>\n                <div class=\"ibox-content\">\n                    <div>\n                        <canvas polarchart options=\"chart.polarOptions\" data=\"chart.polarData\" height=\"140\" responsive=true></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Pie </h5>\n\n                    <div ibox-tools></div>\n                </div>\n                <div class=\"ibox-content\">\n                    <div>\n                        <canvas doughnutchart options=\"chart.doughnutOptions\" data=\"chart.doughnutData\" height=\"140\" responsive=true></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Radar Chart Example</h5>\n                    <div ibox-tools></div>\n                </div>\n                <div class=\"ibox-content\">\n                    <div>\n                        <canvas radarchart options=\"chart.radarOptions\" data=\"chart.radarData\" responsive=true></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/landing/statistic/chart/chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/landing/statistic/chart/chart.component.ts ***!
  \************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/landing/statistic/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/landing/statistic/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.css":
/*!***********************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.html":
/*!************************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider-section></app-slider-section>\n<div class=\"container\">\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"col-lg-9\">\n            <h2>Statistics</h2>\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a routerLink=\"/landing/home\">Home</a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a #h1Variable></a>\n              </li>\n            </ol>\n          </div>\n        </div>\n        </div>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-6\">\n          <img  src=\"assets\\img\\landing\\BANNIERE-UCLGA.jpg\" alt=\"UCLGA\" class=\"img-fluid\" >\n      </div>\n      <div class=\"col-lg-6\"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam tenetur nulla, saepe laudantium libero enim, impedit vitae necessitatibus aliquam, eveniet veritatis eius. Pariatur reiciendis exercitationem doloremque nostrum recusandae est eius?</h3></div>\n  </div>\n</div>\n<app-accordion></app-accordion>\n<app-maps></app-maps>\n<div><app-chart></app-chart></div>\n"

/***/ }),

/***/ "./src/app/landing/statistic/statistic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/landing/statistic/statistic.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticComponent = /** @class */ (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__(/*! ./statistic.component.html */ "./src/app/landing/statistic/statistic.component.html"),
            styles: [__webpack_require__(/*! ./statistic.component.css */ "./src/app/landing/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"gray-section team\">\n  <div class=\"container\">\n    <div class=\"row m-b-lg\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"navy-line\"></div>\n        <h1>Our Team</h1>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 wow fadeInLeft\">\n        <div class=\"team-member\">\n          <img src=\"assets/img/landing/avatar3.jpg\" class=\"img-fluid rounded-circle img-small\" alt=\"\">\n          <h4><span class=\"navy\">Amelia</span> Smith</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n            </p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member wow zoomIn\">\n          <img src=\"assets/img/landing/avatar1.jpg\" class=\"img-fluid rounded-circle\" alt=\"\">\n          <h4><span class=\"navy\">John</span> Novak</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4 wow fadeInRight\">\n        <div class=\"team-member\">\n          <img src=\"assets/img/landing/avatar2.jpg\" class=\"img-fluid rounded-circle img-small\" alt=\"\">\n          <h4><span class=\"navy\">Peter</span> Johnson</h4>\n          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>\n          <ul class=\"list-inline social-icon\">\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </li>\n            <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-t-lg m-b-lg\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis,\n          totam corporis ea, alias ut unde.</p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/landing/team-section/team-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/team-section/team-section.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSectionComponent", function() { return TeamSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamSectionComponent = /** @class */ (function () {
    function TeamSectionComponent() {
    }
    TeamSectionComponent.prototype.ngOnInit = function () {
    };
    TeamSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-section',
            template: __webpack_require__(/*! ./team-section.component.html */ "./src/app/landing/team-section/team-section.component.html"),
            styles: [__webpack_require__(/*! ./team-section.component.css */ "./src/app/landing/team-section/team-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamSectionComponent);
    return TeamSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonials\" class=\"navy-section testimonials\" style=\"margin-top: 0\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center wow zoomIn\">\n        <i class=\"fa fa-comment big-icon\"></i>\n        <h1>\n          What our users say\n        </h1>\n        <div class=\"testimonials-text\">\n          <i>\"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,\n            and\n            a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have\n            evolved\n            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\"</i>\n        </div>\n        <small>\n          <strong>12.08.2018 - Andy Smith</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/landing/testimonials-section/testimonials-section.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/landing/testimonials-section/testimonials-section.component.ts ***!
  \********************************************************************************/
/*! exports provided: TestimonialsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsSectionComponent", function() { return TestimonialsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsSectionComponent = /** @class */ (function () {
    function TestimonialsSectionComponent() {
    }
    TestimonialsSectionComponent.prototype.ngOnInit = function () {
    };
    TestimonialsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials-section',
            template: __webpack_require__(/*! ./testimonials-section.component.html */ "./src/app/landing/testimonials-section/testimonials-section.component.html"),
            styles: [__webpack_require__(/*! ./testimonials-section.component.css */ "./src/app/landing/testimonials-section/testimonials-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsSectionComponent);
    return TestimonialsSectionComponent;
}());



/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-12 text-center\">\n        <h2>Our Partners</h2>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n    <div class=\"row animated fadeInRight\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\" id=\"ibox-content\">\n\n                    <div id=\"vertical-timeline\" class=\"vertical-container dark-timeline center-orientation\">\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Meeting</h2>\n                                <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.\n                                </p>\n                                <a href=\"#\" class=\"btn btn-sm btn-primary\"> More info</a>\n                                    <span class=\"vertical-date\">\n                                        Today <br/>\n                                        <small>Dec 24</small>\n                                    </span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon blue-bg\">\n                                <i class=\"fa fa-file-text\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Send documents to Mike</h2>\n                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n                                <a href=\"#\" class=\"btn btn-sm btn-success\"> Download document </a>\n                                    <span class=\"vertical-date\">\n                                        Today <br/>\n                                        <small>Dec 24</small>\n                                    </span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon lazur-bg\">\n                                <i class=\"fa fa-coffee\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Coffee Break</h2>\n                                <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>\n                                <a href=\"#\" class=\"btn btn-sm btn-info\">Read more</a>\n                                <span class=\"vertical-date\"> Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon yellow-bg\">\n                                <i class=\"fa fa-phone\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Phone with Jeronimo</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon lazur-bg\">\n                                <i class=\"fa fa-user-md\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Go to the doctor dr Smith</h2>\n                                <p>Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n\n                        <div class=\"vertical-timeline-block\">\n                            <div class=\"vertical-timeline-icon navy-bg\">\n                                <i class=\"fa fa-comments\"></i>\n                            </div>\n\n                            <div class=\"vertical-timeline-content\">\n                                <h2>Chat with Monica and Sandra</h2>\n                                <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>\n                                <span class=\"vertical-date\">Yesterday <br/><small>Dec 23</small></span>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n    // Local script for demo purpose only\n    $(document).ready(function(){\n        $('#lightVersion').click(function(event) {\n            event.preventDefault()\n            $('#ibox-content').removeClass('ibox-content');\n            $('#vertical-timeline').removeClass('dark-timeline');\n            $('#vertical-timeline').addClass('light-timeline');\n        });\n        $('#darkVersion').click(function(event) {\n            event.preventDefault()\n            $('#ibox-content').addClass('ibox-content');\n            $('#vertical-timeline').removeClass('light-timeline');\n            $('#vertical-timeline').addClass('dark-timeline');\n        });\n        $('#leftVersion').click(function(event) {\n            event.preventDefault()\n            $('#vertical-timeline').toggleClass('center-orientation');\n        });\n    });\n</script>\n"

/***/ }),

/***/ "./src/app/landing/timeline/timeline.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing/timeline/timeline.component.ts ***!
  \********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/landing/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/landing/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\n      <br>\n      <br>\n      <br>\n      <br>\n    </div>\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\n      <div class=\"col-lg-9\">\n        <h2>Transparency</h2>\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/landing/home\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            <a #h1Variable></a>\n          </li>\n        </ol>\n      </div>\n    </div>\n    </div>\n<div class=\"gray-bg-light\">\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br><br>\n<br>\n\n    <div class=\"middle-box text-center animated fadeInDown \">\n        <h1 class=\"text-secondary\">THIS PAGE CURRENTLY <br> UNDER CONSTRUCTION ...</h1>\n        <h3 class=\"font-bold\">coming-soon</h3>\n\n        <div class=\"error-desc\">\n         <br/><a href=\"/landing/home\" class=\"btn btn-primary m-t\">HOME</a>\n        </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/landing/transparency/transparency.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/transparency/transparency.component.ts ***!
  \****************************************************************/
/*! exports provided: TransparencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparencyComponent", function() { return TransparencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransparencyComponent = /** @class */ (function () {
    function TransparencyComponent() {
    }
    TransparencyComponent.prototype.ngOnInit = function () {
    };
    TransparencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transparency',
            template: __webpack_require__(/*! ./transparency.component.html */ "./src/app/landing/transparency/transparency.component.html"),
            styles: [__webpack_require__(/*! ./transparency.component.css */ "./src/app/landing/transparency/transparency.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransparencyComponent);
    return TransparencyComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "yaga-map {\n    width: 100%;\n    height: 100%;\n}\n\n\n.map {\n\n    height: 200px;\n}\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n\n\n  <yaga-map>\n    <yaga-tile-layer [(url)]=\"tileLayerUrl\"></yaga-tile-layer>\n  </yaga-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yaga/leaflet-ng2 */ "./node_modules/@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(mapService) {
        this.mapService = mapService;
        this.tileLayerUrl = _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_1__["OSM_TILE_LAYER_URL"];
        this.latitude = null;
        this.longitude = null;
        this.zoom = null;
        this.map = this.mapService;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/map.service.ts":
/*!************************************!*\
  !*** ./src/app/map/map.service.ts ***!
  \************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapService = /** @class */ (function () {
    function MapService() {
        this._latitude = 34.031550;
        this._longitude = -6.031550;
        this._zoom = 1;
    }
    MapService.prototype.getLongitude = function () {
        return this._longitude;
    };
    MapService.prototype.setLongitude = function (longitude) {
        return this._longitude = longitude;
    };
    MapService.prototype.getLatitude = function () {
        return this._latitude;
    };
    MapService.prototype.setLatitude = function (latitude) {
        this._latitude = latitude;
    };
    MapService.prototype.getZoom = function () {
        return this._zoom;
    };
    MapService.prototype.setZoom = function (zoom) {
        this._zoom = zoom;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.css":
/*!************************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "yaga-map {\n    width: 100%;\n    height: 100%;\n}\n\n\n.map {\n\n    height: 500px;\n}\n\n\n#frugalmap {\n    height:580px;\n    width: 100%\n}\n\n\n.leaflet-container {\n    background-color:rgba(255,0,0,0.0);\n}\n\n\n.info {\n    padding: 6px 8px;\n    font: 14px/16px Arial, Helvetica, sans-serif;\n    background: white;\n    background: rgba(255,255,255,0.8);\n    box-shadow: 0 0 15px rgba(0,0,0,0.2);\n    border-radius: 5px;\n}\n\n\n.info h4 {\n    margin: 0 0 5px;\n    color: #777;\n}\n\n\n.legend {\n    line-height: 18px;\n    color: #555;\n}\n\n\n.legend i {\n    width: 18px;\n    height: 18px;\n    float: left;\n    margin-right: 8px;\n    opacity: 0.7;\n}\n"

/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"maps\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 text-center\">\n        <br>\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3>Search by country or region </h3>\n          </div>\n          <div class=\"panel-body\">\n            <a class=\"btn btn-default btn-rounded btn-block\" (click)=\"selectByContryModal()\">\n              Select region, country or territory</a>\n            <br>\n\n\n            <div id=\"frugalmap\"></div>\n\n\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/maps/landing-map/landing-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maps/landing-map/landing-map.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingMapComponent", function() { return LandingMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/maps/map.service.ts");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yaga/leaflet-ng2 */ "./node_modules/@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_country_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/country.model */ "./src/app/models/country.model.ts");
/* harmony import */ var _landing_modal_select_county_modal_select_county_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../landing/modal-select-county/modal-select-county.component */ "./src/app/landing/modal-select-county/modal-select-county.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LandingMapComponent = /** @class */ (function () {
    function LandingMapComponent(mapService, _http, _modalService) {
        this.mapService = mapService;
        this._http = _http;
        this._modalService = _modalService;
        this.tileLayerUrl = _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_2__["OSM_TILE_LAYER_URL"];
        this.latitude = null;
        this.longitude = null;
        this.zoom = null;
        this.osm = 'OSM';
        // topo = 'topo';
        this.marker = 'Marker';
        this.positionZoom = 10;
        this.map = null;
        this.color = null;
        this.country = new _models_country_model__WEBPACK_IMPORTED_MODULE_6__["Country"]();
        this.map = this.mapService;
    }
    LandingMapComponent.prototype.selectByContryModal = function () {
        this.openModalSelect();
    };
    LandingMapComponent.prototype.openModalSelect = function () {
        var initialState = {
            title: 'select Country',
            countries: this.countriesList
        };
        this.bsModalRef = this._modalService.show(_landing_modal_select_county_modal_select_county_component__WEBPACK_IMPORTED_MODULE_7__["ModalSelectCountyComponent"], { initialState: initialState, class: 'modal-lg' });
    };
    LandingMapComponent.prototype.ngOnInit = function () {
        this.createMap();
    };
    LandingMapComponent.prototype.style = function (feature) {
        var d = feature.properties.pop_est;
        return {
            // fillColor: this.mapService.getColor(feature.properties.density),
            fillColor: (function () {
                return d > 100000000 ? '#800026' :
                    d > 90000000 ? '#FFC720' :
                        d > 80000000 ? '#BD0026' :
                            d > 70000000 ? '#FF803E' :
                                d > 60000000 ? '#E31A1C' :
                                    d > 40000000 ? '#FC4E2A' :
                                        d > 20000000 ? '#FD8D3C' :
                                            d > 15000000 ? '#FCFFCD' :
                                                d > 2000000 ? '#FEB24C' :
                                                    //         d > 100000000 ? '#FED976' :
                                                    '#FFEDA0';
            })(),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };
    // highlightFeature(e) {
    //   const layer = e.target;
    //   layer.setStyle({
    //     weight: 5,
    //     color: '#666',
    //     dashArray: '',
    //     fillOpacity: 0.7
    //   });
    // }
    // resetHighlight(e) {
    //   geojson.resetStyle(e.target);
    // }
    // zoomToFeature(e) {
    //   afriqueMap.fitBounds(e.target.getBounds());
    // }
    // function(feature, layer) {
    //   layer.on({
    //     // mouseover: this.highlightFeature,
    //     // mouseout: this.resetHighlight,
    //     click: this.zoomToFeature
    //   });
    // }
    LandingMapComponent.prototype.createMap = function () {
        var _this = this;
        var cities = leaflet__WEBPACK_IMPORTED_MODULE_5__["layerGroup"]();
        // const info = L.control();
        var info = new (leaflet__WEBPACK_IMPORTED_MODULE_5__["Control"].extend({
            options: { position: 'topright' }
        }));
        leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"]([this.map.getLatitude(), this.map.getLongitude()]).bindPopup('This is Littleton, CO.').addTo(cities);
        var overlays = {
            'Cities': cities
        };
        // tslint:disable-next-line:max-line-length
        var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
        var grayscale = leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"](mbUrl, { id: 'mapbox.light' });
        var streets = leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"](mbUrl, { id: 'mapbox.streets' });
        var OSMLayer = leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"](osmUrl);
        var baseLayers = {
            'Grayscale': grayscale,
            'Streets  ': streets,
            'OSM      ': OSMLayer
        };
        var afriqueMap = leaflet__WEBPACK_IMPORTED_MODULE_5__["map"]('frugalmap', {}).setView([this.map.getLatitude(), this.map.getLongitude()], 5);
        // L.control.layers(baseLayers, overlays).addTo(afriqueMap);
        this._http.get('public/app/assets/geojson/afrique.json')
            .subscribe(function (geojson) {
            _this.countriesList = geojson.features;
            console.log(_this.countriesList);
            var geojsonL = leaflet__WEBPACK_IMPORTED_MODULE_5__["geoJSON"](geojson, {
                style: _this.style,
                onEachFeature: function (feature, layer) {
                    layer.on({
                        click: function (e) {
                            afriqueMap.fitBounds(e.target.getBounds());
                            var layer2 = e.target;
                            layer2.bringToFront();
                            layer2.setStyle({
                                weight: 5,
                                color: '#1ab394',
                                dashArray: '',
                                fillOpacity: 0.7
                            });
                            info.update(layer.feature.properties);
                        },
                        mouseover: function (e) {
                            var layer2 = e.target;
                            layer2.bringToFront();
                            layer2.setStyle({
                                weight: 5,
                                color: '#1ab394',
                                dashArray: '',
                                fillOpacity: 0.7
                            });
                            info.update(layer.feature.properties);
                        },
                        mouseout: function (e) { geojsonL.resetStyle(e.target); info.update(); }
                    });
                }
            }).addTo(afriqueMap);
            geojsonL.eachLayer(function (layer) {
                layer.bindPopup(layer.feature.properties.name);
            });
            afriqueMap.fitBounds(geojsonL.getBounds());
            afriqueMap.setMaxZoom(10);
        });
        afriqueMap.createPane('labels');
        // afriqueMap.getPane('labels').style.zIndex = 650;
        afriqueMap.getPane('labels').style.pointerEvents = 'none';
        // const positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        //   pane: 'labels'
        // }).addTo(afriqueMap);
        info.onAdd = function (map) {
            this._div = leaflet__WEBPACK_IMPORTED_MODULE_5__["DomUtil"].create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML =
                '<div class="col-lg-12">' +
                    '<div class="widget style1 navy-bg">' +
                    '<div class="row">' +
                    '<div class="col-12">' +
                    '<span>Population   </span>' + (props ?
                    '</br><b>' + props.name + '</b><br/>' + props.pop_est + ' people  <sup></sup>' +
                        '</br><b>' + props.lastcensus + '</b><br/>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    : ' ');
            // this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
            //   '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
            //   : 'Hover over a state');
        };
        info.addTo(afriqueMap);
    };
    LandingMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-map',
            template: __webpack_require__(/*! ./landing-map.component.html */ "./src/app/maps/landing-map/landing-map.component.html"),
            styles: [__webpack_require__(/*! ./landing-map.component.css */ "./src/app/maps/landing-map/landing-map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], LandingMapComponent);
    return LandingMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/map.service.ts":
/*!*************************************!*\
  !*** ./src/app/maps/map.service.ts ***!
  \*************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = /** @class */ (function () {
    function MapService(_http) {
        this._http = _http;
        this._latitude = 34.031550;
        this._longitude = -6.031550;
        this._zoom = 1;
    }
    MapService.prototype.getGeo = function () {
        this._http.get('/assets/geojson/afrique.json')
            .subscribe(function (geojson) {
            return geojson;
            // this.afriqueLayer = geoJSON(geo);
            // this.afriqueLayer = geo.features;
        });
    };
    MapService.prototype.getLongitude = function () {
        return this._longitude;
    };
    MapService.prototype.setLongitude = function (longitude) {
        return this._longitude = longitude;
    };
    MapService.prototype.getLatitude = function () {
        return this._latitude;
    };
    MapService.prototype.setLatitude = function (latitude) {
        this._latitude = latitude;
    };
    MapService.prototype.getZoom = function () {
        return this._zoom;
    };
    MapService.prototype.setZoom = function (zoom) {
        this._zoom = zoom;
    };
    MapService.prototype.getJson = function () {
        return this._http.get(' /assets/geojson/afrique.geojson')
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MapService.prototype.errorHandler = function (error) {
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-map/landing-map.component */ "./src/app/maps/landing-map/landing-map.component.ts");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yaga/leaflet-ng2 */ "./node_modules/@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _yaga_leaflet_ng2__WEBPACK_IMPORTED_MODULE_3__["YagaModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            exports: [
                _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_2__["LandingMapComponent"]
            ],
            declarations: [
                _landing_map_landing_map_component__WEBPACK_IMPORTED_MODULE_2__["LandingMapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/models/country.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/country.model.ts ***!
  \*****************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
        this.id = null;
        this.name = null;
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/models/navigateur.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/navigateur.model.ts ***!
  \********************************************/
/*! exports provided: Navigateur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigateur", function() { return Navigateur; });
var Navigateur = /** @class */ (function () {
    function Navigateur() {
        this.id = null;
        this.nom = null;
        this.prenom = null;
        this.ppr = null;
        this.adresse = null;
        this.actif = true;
    }
    return Navigateur;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.loggedIn = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + '/signup', data);
    };
    AuthService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + '/login', data);
    };
    AuthService.prototype.sendPasswordResetLink = function (data) {
        return this.http.post(this.baseUrl + '/sendPasswordResetLink', data);
    };
    AuthService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + '/resetPassword', data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token, router) {
        this.Token = Token;
        this.router = router;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.iss = {
            login: this.baseUrl + '/login',
            signup: this.baseUrl + '/signup'
        };
    }
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.isValid();
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerCursor {\n    cursor: pointer;\n}\n\n\n.ibox-title { \n\n\n    padding-right: 15px;\n\n}"

/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox \">\n\n  <div class=\"ibox-title text-center pointerCursor\"  (click)=\"hideBody = !hideBody ; hideFooter = !hideFooter\">\n    <h2>{{ titre | uppercase}}</h2>\n    \n  </div>\n\n  <div class=\"ibox-content text-center\" [hidden]=\"hideBody\">\n\n    <ng-content select=\".iBoxBody\"></ng-content>\n\n  </div>\n\n\n  <div class=\"ibox-footer text-center\" [hidden]=\"hideFooter\" >\n\n    <ng-content select=\".iBoxFooter\"></ng-content>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/ibox/ibox.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/ibox/ibox.component.ts ***!
  \***********************************************/
/*! exports provided: IboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IboxComponent", function() { return IboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IboxComponent = /** @class */ (function () {
    function IboxComponent() {
    }
    IboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IboxComponent.prototype, "titre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IboxComponent.prototype, "hideFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], IboxComponent.prototype, "hideBody", void 0);
    IboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ibox',
            template: __webpack_require__(/*! ./ibox.component.html */ "./src/app/shared/ibox/ibox.component.html"),
            styles: [__webpack_require__(/*! ./ibox.component.css */ "./src/app/shared/ibox/ibox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IboxComponent);
    return IboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-form/modal-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/modal-form/modal-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modal-form/modal-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-form/modal-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal inmodal\" data-backdrop=\"static\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated fadeIn\">\n      <form #NavigateurForm=\"ngForm\" (ngSubmit)=\"createNavigateur() \">\n        <div class=\"modal-header\">\n          <button type=\"button\" (click)=\"annuler()\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span\n              class=\"sr-only\">Close</span></button>\n\n          <h4   class=\"modal-title\">{{ titre }}</h4>\n        \n\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label>Nom</label>\n            <input type=\"text\" class=\"form-control\" required=\"\" name=\"nom\" [(ngModel)]=\"navigateur.nom\">\n          </div>\n          <div class=\"alert alert-danger\" [hidden]=\"!error.nom\">\n            {{error.nom}}\n          </div>\n\n          <div class=\"form-group\">\n            <label>Prenom</label>\n            <input type=\"text\" class=\"form-control\" required=\"\" name=\"prenom\" [(ngModel)]=\"navigateur.prenom\">\n          </div>\n          <div class=\"alert alert-danger\" [hidden]=\"!error.prenom\">\n            {{error.prenom}}\n          </div>\n\n          <div class=\"form-group\">\n            <label>PPR</label>\n            <input type=\"text\" class=\"form-control\" required=\"\" name=\"ppr\" [(ngModel)]=\"navigateur.ppr\">\n          </div>\n          <div class=\"alert alert-danger\" [hidden]=\"!error.ppr\">\n            {{error.ppr}}\n          </div>\n\n          <div class=\"form-group\">\n            <label>Adresse</label>\n            <input type=\"text\" class=\"form-control\" required=\"\" name=\"adresse\" [(ngModel)]=\"navigateur.adresse\">\n          </div>\n          <div class=\"alert alert-danger\" [hidden]=\"!error.adresse\">\n            {{error.adresse}}\n          </div>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button (click)=\"annuler()\" type=\"button\" class=\"btn btn-white block full-width m-b\" data-dismiss=\"modal\">Fermer</button>\n          <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" [disabled]=\"!NavigateurForm.valid\">Sauvgarder</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/modal-form/modal-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/modal-form/modal-form.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormComponent", function() { return ModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalFormComponent = /** @class */ (function () {
    function ModalFormComponent() {
    }
    ModalFormComponent.prototype.ngOnInit = function () {
    };
    ModalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-form',
            template: __webpack_require__(/*! ./modal-form.component.html */ "./src/app/shared/modal-form/modal-form.component.html"),
            styles: [__webpack_require__(/*! ./modal-form.component.css */ "./src/app/shared/modal-form/modal-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalFormComponent);
    return ModalFormComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://192.168.33.20/api'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jemmal/Desktop/dev/ucgl/www/frontend-uclg/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map