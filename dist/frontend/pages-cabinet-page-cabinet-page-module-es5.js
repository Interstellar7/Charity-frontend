function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cabinet-page-cabinet-page-module"], {
  /***/
  "./src/app/features/cabinet/cabinet.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/features/cabinet/cabinet.module.ts ***!
    \****************************************************/

  /*! exports provided: CabinetModule */

  /***/
  function srcAppFeaturesCabinetCabinetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabinetModule", function () {
      return CabinetModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/participants-list/participants-list.component */
    "./src/app/features/cabinet/components/participants-list/participants-list.component.ts");
    /* harmony import */


    var _components_my_applications_list_my_applications_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/my-applications-list/my-applications-list.component */
    "./src/app/features/cabinet/components/my-applications-list/my-applications-list.component.ts");
    /* harmony import */


    var _components_my_ads_list_my_ads_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/my-ads-list/my-ads-list.component */
    "./src/app/features/cabinet/components/my-ads-list/my-ads-list.component.ts");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var CabinetModule = function CabinetModule() {
      _classCallCheck(this, CabinetModule);
    };

    CabinetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CabinetModule
    });
    CabinetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CabinetModule_Factory(t) {
        return new (t || CabinetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CabinetModule, {
        declarations: [_components_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantsListComponent"], _components_my_applications_list_my_applications_list_component__WEBPACK_IMPORTED_MODULE_4__["MyApplicationsListComponent"], _components_my_ads_list_my_ads_list_component__WEBPACK_IMPORTED_MODULE_5__["MyAdsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
        exports: [_components_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantsListComponent"], _components_my_applications_list_my_applications_list_component__WEBPACK_IMPORTED_MODULE_4__["MyApplicationsListComponent"], _components_my_ads_list_my_ads_list_component__WEBPACK_IMPORTED_MODULE_5__["MyAdsListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantsListComponent"], _components_my_applications_list_my_applications_list_component__WEBPACK_IMPORTED_MODULE_4__["MyApplicationsListComponent"], _components_my_ads_list_my_ads_list_component__WEBPACK_IMPORTED_MODULE_5__["MyAdsListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
          exports: [_components_participants_list_participants_list_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantsListComponent"], _components_my_applications_list_my_applications_list_component__WEBPACK_IMPORTED_MODULE_4__["MyApplicationsListComponent"], _components_my_ads_list_my_ads_list_component__WEBPACK_IMPORTED_MODULE_5__["MyAdsListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/cabinet/components/my-ads-list/my-ads-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/features/cabinet/components/my-ads-list/my-ads-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MyAdsListComponent */

  /***/
  function srcAppFeaturesCabinetComponentsMyAdsListMyAdsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAdsListComponent", function () {
      return MyAdsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyAdsListComponent = /*#__PURE__*/function () {
      function MyAdsListComponent() {
        _classCallCheck(this, MyAdsListComponent);
      }

      _createClass(MyAdsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyAdsListComponent;
    }();

    MyAdsListComponent.ɵfac = function MyAdsListComponent_Factory(t) {
      return new (t || MyAdsListComponent)();
    };

    MyAdsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAdsListComponent,
      selectors: [["app-my-ads-list"]],
      decls: 2,
      vars: 0,
      template: function MyAdsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-ads-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhYmluZXQvY29tcG9uZW50cy9teS1hZHMtbGlzdC9teS1hZHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAdsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-ads-list',
          templateUrl: './my-ads-list.component.html',
          styleUrls: ['./my-ads-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/cabinet/components/my-applications-list/my-applications-list.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/features/cabinet/components/my-applications-list/my-applications-list.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: MyApplicationsListComponent */

  /***/
  function srcAppFeaturesCabinetComponentsMyApplicationsListMyApplicationsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyApplicationsListComponent", function () {
      return MyApplicationsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyApplicationsListComponent = /*#__PURE__*/function () {
      function MyApplicationsListComponent() {
        _classCallCheck(this, MyApplicationsListComponent);
      }

      _createClass(MyApplicationsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyApplicationsListComponent;
    }();

    MyApplicationsListComponent.ɵfac = function MyApplicationsListComponent_Factory(t) {
      return new (t || MyApplicationsListComponent)();
    };

    MyApplicationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyApplicationsListComponent,
      selectors: [["app-my-applications-list"]],
      decls: 2,
      vars: 0,
      template: function MyApplicationsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-applications-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhYmluZXQvY29tcG9uZW50cy9teS1hcHBsaWNhdGlvbnMtbGlzdC9teS1hcHBsaWNhdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyApplicationsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-applications-list',
          templateUrl: './my-applications-list.component.html',
          styleUrls: ['./my-applications-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/cabinet/components/participants-list/participants-list.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/features/cabinet/components/participants-list/participants-list.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ParticipantsListComponent */

  /***/
  function srcAppFeaturesCabinetComponentsParticipantsListParticipantsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParticipantsListComponent", function () {
      return ParticipantsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParticipantsListComponent = /*#__PURE__*/function () {
      function ParticipantsListComponent() {
        _classCallCheck(this, ParticipantsListComponent);
      }

      _createClass(ParticipantsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParticipantsListComponent;
    }();

    ParticipantsListComponent.ɵfac = function ParticipantsListComponent_Factory(t) {
      return new (t || ParticipantsListComponent)();
    };

    ParticipantsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParticipantsListComponent,
      selectors: [["app-participants-list"]],
      decls: 2,
      vars: 0,
      template: function ParticipantsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "participants-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhYmluZXQvY29tcG9uZW50cy9wYXJ0aWNpcGFudHMtbGlzdC9wYXJ0aWNpcGFudHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-participants-list',
          templateUrl: './participants-list.component.html',
          styleUrls: ['./participants-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/cabinet-page/cabinet-page-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/cabinet-page/cabinet-page-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CabinetPageRoutingModule */

  /***/
  function srcAppPagesCabinetPageCabinetPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabinetPageRoutingModule", function () {
      return CabinetPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cabinet_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cabinet-page.component */
    "./src/app/pages/cabinet-page/cabinet-page.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: '',
        pathMatch: 'full',
        component: _cabinet_page_component__WEBPACK_IMPORTED_MODULE_2__["CabinetPageComponent"]
      }]
    }];

    var CabinetPageRoutingModule = function CabinetPageRoutingModule() {
      _classCallCheck(this, CabinetPageRoutingModule);
    };

    CabinetPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CabinetPageRoutingModule
    });
    CabinetPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CabinetPageRoutingModule_Factory(t) {
        return new (t || CabinetPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CabinetPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/cabinet-page/cabinet-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/cabinet-page/cabinet-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: CabinetPageComponent */

  /***/
  function srcAppPagesCabinetPageCabinetPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabinetPageComponent", function () {
      return CabinetPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CabinetPageComponent = /*#__PURE__*/function () {
      function CabinetPageComponent() {
        _classCallCheck(this, CabinetPageComponent);
      }

      _createClass(CabinetPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CabinetPageComponent;
    }();

    CabinetPageComponent.ɵfac = function CabinetPageComponent_Factory(t) {
      return new (t || CabinetPageComponent)();
    };

    CabinetPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CabinetPageComponent,
      selectors: [["app-cabinet-page"]],
      decls: 2,
      vars: 0,
      template: function CabinetPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cabinet-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhYmluZXQtcGFnZS9jYWJpbmV0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cabinet-page',
          templateUrl: './cabinet-page.component.html',
          styleUrls: ['./cabinet-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/cabinet-page/cabinet-page.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/cabinet-page/cabinet-page.module.ts ***!
    \***********************************************************/

  /*! exports provided: CabinetPageModule */

  /***/
  function srcAppPagesCabinetPageCabinetPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabinetPageModule", function () {
      return CabinetPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cabinet_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cabinet-page-routing.module */
    "./src/app/pages/cabinet-page/cabinet-page-routing.module.ts");
    /* harmony import */


    var _cabinet_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cabinet-page.component */
    "./src/app/pages/cabinet-page/cabinet-page.component.ts");
    /* harmony import */


    var _features_cabinet_cabinet_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../features/cabinet/cabinet.module */
    "./src/app/features/cabinet/cabinet.module.ts");

    var CabinetPageModule = function CabinetPageModule() {
      _classCallCheck(this, CabinetPageModule);
    };

    CabinetPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CabinetPageModule
    });
    CabinetPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CabinetPageModule_Factory(t) {
        return new (t || CabinetPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cabinet_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["CabinetPageRoutingModule"], _features_cabinet_cabinet_module__WEBPACK_IMPORTED_MODULE_4__["CabinetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CabinetPageModule, {
        declarations: [_cabinet_page_component__WEBPACK_IMPORTED_MODULE_3__["CabinetPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cabinet_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["CabinetPageRoutingModule"], _features_cabinet_cabinet_module__WEBPACK_IMPORTED_MODULE_4__["CabinetModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinetPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cabinet_page_component__WEBPACK_IMPORTED_MODULE_3__["CabinetPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cabinet_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["CabinetPageRoutingModule"], _features_cabinet_cabinet_module__WEBPACK_IMPORTED_MODULE_4__["CabinetModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-cabinet-page-cabinet-page-module-es5.js.map