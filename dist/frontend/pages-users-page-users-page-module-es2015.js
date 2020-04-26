(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-page-users-page-module"],{

/***/ "./src/app/features/users/guards/users-page.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/users/guards/users-page.guard.ts ***!
  \***********************************************************/
/*! exports provided: UsersPageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageGuard", function() { return UsersPageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_current_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/models/current-user.model */ "./src/app/core/models/current-user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/current-user.service */ "./src/app/core/services/current-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class UsersPageGuard {
    constructor(currentUserService, router) {
        this.currentUserService = currentUserService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.currentUserService.hasRole(_core_models_current_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].ADMIN).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(can => {
            if (can) {
                return true;
            }
            return this.router.createUrlTree(['/']);
        }));
    }
}
UsersPageGuard.ɵfac = function UsersPageGuard_Factory(t) { return new (t || UsersPageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UsersPageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersPageGuard, factory: UsersPageGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPageGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/users-page/pages/user-list-page/user-list-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/users-page/pages/user-list-page/user-list-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageComponent", function() { return UserListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_users_components_user_create_dialog_user_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../features/users/components/user-create-dialog/user-create-dialog.component */ "./src/app/features/users/components/user-create-dialog/user-create-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _features_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../features/users/services/user.service */ "./src/app/features/users/services/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _features_users_components_users_table_users_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../features/users/components/users-table/users-table.component */ "./src/app/features/users/components/users-table/users-table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class UserListPageComponent {
    constructor(userService, dialogService) {
        this.userService = userService;
        this.dialogService = dialogService;
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    ngOnInit() {
        this.users$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.refresh$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.userService.getUsers()));
        this.refreshUsers();
    }
    refreshUsers() {
        this.refresh$.next();
    }
    clickCreateUser() {
        this.dialogService.open(_features_users_components_user_create_dialog_user_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["UserCreateDialogComponent"])
            .afterClosed()
            .subscribe(() => {
            this.refreshUsers();
        });
    }
}
UserListPageComponent.ɵfac = function UserListPageComponent_Factory(t) { return new (t || UserListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
UserListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListPageComponent, selectors: [["app-users-page"]], decls: 8, vars: 4, consts: [[1, "page-header"], [1, "fill"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "users", "selectedUser", "selectedUserChange", "refresh"]], template: function UserListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListPageComponent_Template_button_click_4_listener() { return ctx.clickCreateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+ Create user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-users-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedUserChange", function UserListPageComponent_Template_app_users_table_selectedUserChange_6_listener($event) { return ctx.selectedUser = $event; })("refresh", function UserListPageComponent_Template_app_users_table_refresh_6_listener() { return ctx.refreshUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.users$))("selectedUser", ctx.selectedUser);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _features_users_components_users_table_users_table_component__WEBPACK_IMPORTED_MODULE_7__["UsersTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".page-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-content: space-around;\r\n  align-items: center;\r\n  \r\n  padding: 20px 10px 0;\r\n}\r\n\r\n.fill[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtcGFnZS9wYWdlcy91c2VyLWxpc3QtcGFnZS91c2VyLWxpc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy1wYWdlL3BhZ2VzL3VzZXItbGlzdC1wYWdlL3VzZXItbGlzdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKndpZHRoOiAxMDAlOyovXHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDA7XHJcbn1cclxuXHJcbi5maWxsIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-page',
                templateUrl: './user-list-page.component.html',
                styleUrls: ['./user-list-page.component.css']
            }]
    }], function () { return [{ type: _features_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/users-page/pages/user-view-page/user-view-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/users-page/pages/user-view-page/user-view-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewPageComponent", function() { return UserViewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserViewPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UserViewPageComponent.ɵfac = function UserViewPageComponent_Factory(t) { return new (t || UserViewPageComponent)(); };
UserViewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserViewPageComponent, selectors: [["app-users-page"]], decls: 2, vars: 0, template: function UserViewPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLXBhZ2UvcGFnZXMvdXNlci12aWV3LXBhZ2UvdXNlci12aWV3LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-page',
                templateUrl: './user-view-page.component.html',
                styleUrls: ['./user-view-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/users-page/users-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/users-page/users-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_user_list_page_user_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user-list-page/user-list-page.component */ "./src/app/pages/users-page/pages/user-list-page/user-list-page.component.ts");
/* harmony import */ var _pages_user_view_page_user_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-view-page/user-view-page.component */ "./src/app/pages/users-page/pages/user-view-page/user-view-page.component.ts");
/* harmony import */ var _features_users_guards_users_page_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/users/guards/users-page.guard */ "./src/app/features/users/guards/users-page.guard.ts");







const routes = [
    {
        path: '',
        canActivate: [_features_users_guards_users_page_guard__WEBPACK_IMPORTED_MODULE_4__["UsersPageGuard"]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _pages_user_list_page_user_list_page_component__WEBPACK_IMPORTED_MODULE_2__["UserListPageComponent"]
            },
            {
                path: ':id',
                component: _pages_user_view_page_user_view_page_component__WEBPACK_IMPORTED_MODULE_3__["UserViewPageComponent"]
            }
        ]
    }
];
class UsersPageRoutingModule {
}
UsersPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersPageRoutingModule });
UsersPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersPageRoutingModule_Factory(t) { return new (t || UsersPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/users-page/users-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-page/users-page.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _users_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-page-routing.module */ "./src/app/pages/users-page/users-page-routing.module.ts");
/* harmony import */ var _pages_user_view_page_user_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-view-page/user-view-page.component */ "./src/app/pages/users-page/pages/user-view-page/user-view-page.component.ts");
/* harmony import */ var _pages_user_list_page_user_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user-list-page/user-list-page.component */ "./src/app/pages/users-page/pages/user-list-page/user-list-page.component.ts");
/* harmony import */ var _features_users_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/users/users.module */ "./src/app/features/users/users.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class UsersPageModule {
}
UsersPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersPageModule });
UsersPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersPageModule_Factory(t) { return new (t || UsersPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _users_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersPageRoutingModule"],
            _features_users_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersPageModule, { declarations: [_pages_user_list_page_user_list_page_component__WEBPACK_IMPORTED_MODULE_4__["UserListPageComponent"],
        _pages_user_view_page_user_view_page_component__WEBPACK_IMPORTED_MODULE_3__["UserViewPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _users_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersPageRoutingModule"],
        _features_users_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_user_list_page_user_list_page_component__WEBPACK_IMPORTED_MODULE_4__["UserListPageComponent"],
                    _pages_user_view_page_user_view_page_component__WEBPACK_IMPORTED_MODULE_3__["UserViewPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _users_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersPageRoutingModule"],
                    _features_users_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-users-page-users-page-module-es2015.js.map