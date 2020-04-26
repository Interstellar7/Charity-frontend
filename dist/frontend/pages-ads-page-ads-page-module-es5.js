function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ads-page-ads-page-module"], {
  /***/
  "./src/app/features/ads/ads.module.ts":
  /*!********************************************!*\
    !*** ./src/app/features/ads/ads.module.ts ***!
    \********************************************/

  /*! exports provided: AdsModule */

  /***/
  function srcAppFeaturesAdsAdsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsModule", function () {
      return AdsModule;
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


    var _components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/categories-tree/categories-tree.component */
    "./src/app/features/ads/components/categories-tree/categories-tree.component.ts");
    /* harmony import */


    var _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ads-list/ads-list.component */
    "./src/app/features/ads/components/ads-list/ads-list.component.ts");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var AdsModule = function AdsModule() {
      _classCallCheck(this, AdsModule);
    };

    AdsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdsModule
    });
    AdsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdsModule_Factory(t) {
        return new (t || AdsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsModule, {
        declarations: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]],
        exports: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]],
          exports: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/ads/components/ads-list/ads-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/features/ads/components/ads-list/ads-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdsListComponent */

  /***/
  function srcAppFeaturesAdsComponentsAdsListAdsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsListComponent", function () {
      return AdsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/ad.service */
    "./src/app/features/ads/services/ad.service.ts");

    var AdsListComponent = /*#__PURE__*/function () {
      function AdsListComponent(adService) {
        _classCallCheck(this, AdsListComponent);

        this.adService = adService;
      }

      _createClass(AdsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdsListComponent;
    }();

    AdsListComponent.ɵfac = function AdsListComponent_Factory(t) {
      return new (t || AdsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]));
    };

    AdsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdsListComponent,
      selectors: [["ads-list"]],
      decls: 2,
      vars: 0,
      template: function AdsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ads list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Fkcy9jb21wb25lbnRzL2Fkcy1saXN0L2Fkcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ads-list',
          templateUrl: './ads-list.component.html',
          styleUrls: ['./ads-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/ads/components/categories-tree/categories-tree.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/features/ads/components/categories-tree/categories-tree.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, CategoriesTreeComponent */

  /***/
  function srcAppFeaturesAdsComponentsCategoriesTreeCategoriesTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function () {
      return DynamicFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function () {
      return DynamicDatabase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function () {
      return DynamicDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesTreeComponent", function () {
      return CategoriesTreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/category.service */
    "./src/app/features/ads/services/category.service.ts");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function CategoriesTreeComponent_mat_tree_node_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r99 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r99.name, " ");
      }
    }

    function CategoriesTreeComponent_mat_tree_node_4_mat_progress_bar_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
      }
    }

    function CategoriesTreeComponent_mat_tree_node_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriesTreeComponent_mat_tree_node_4_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r100 = ctx.$implicit;

        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r100.filename);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r98.treeControl.isExpanded(node_r100) ? "expand_more" : "chevron_right", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r100.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r100.isLoading);
      }
    }

    var DynamicFlatNode = function DynamicFlatNode(id, name) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var expandable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var isLoading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      _classCallCheck(this, DynamicFlatNode);

      this.id = id;
      this.name = name;
      this.level = level;
      this.expandable = expandable;
      this.isLoading = isLoading;
    };

    var DynamicDatabase = /*#__PURE__*/function () {
      function DynamicDatabase(categoryService) {
        _classCallCheck(this, DynamicDatabase);

        this.categoryService = categoryService;
        this.rootLevelNodes = [];
        this.children = [];
      }

      _createClass(DynamicDatabase, [{
        key: "getRootNodes",
        value: function getRootNodes() {
          return this.rootLevelNodes;
        }
      }, {
        key: "getChildren",
        value: function getChildren() {
          return this.children;
        }
      }, {
        key: "initialData",
        value: function initialData() {
          var _this = this;

          this.categoryService.getCategories().subscribe(function (categories) {
            return _this.rootLevelNodes = categories;
          });
        }
      }, {
        key: "requestChildren",
        value: function requestChildren(parentId) {
          var _this2 = this;

          this.categoryService.getCategories('', String(parentId)).subscribe(function (categories) {
            return _this2.children = categories;
          });
        }
      }]);

      return DynamicDatabase;
    }();

    DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) {
      return new (t || DynamicDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]));
    };

    DynamicDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DynamicDatabase,
      factory: DynamicDatabase.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
        }];
      }, null);
    })();

    var DynamicDataSource = /*#__PURE__*/function () {
      function DynamicDataSource(_treeControl, _database) {
        _classCallCheck(this, DynamicDataSource);

        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
      }

      _createClass(DynamicDataSource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          var _this3 = this;

          this._treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added || change.removed) {
              _this3.handleTreeControl(change);
            }
          });

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this3.data;
          }));
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {}
      }, {
        key: "handleTreeControl",
        value: function handleTreeControl(change) {
          var _this4 = this;

          if (change.added) {
            change.added.forEach(function (node) {
              return _this4.toggleNode(node, true);
            });
          }

          if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) {
              return _this4.toggleNode(node, false);
            });
          }
        }
      }, {
        key: "toggleNode",
        value: function toggleNode(node, expand) {
          var _this5 = this;

          this._database.requestChildren(node.id);

          node.isLoading = true;
          setTimeout(function () {
            var children = _this5._database.getChildren().map(function (category) {
              return new DynamicFlatNode(category.id, category.name, node.level + 1, category.hasChildren);
            });

            var index = _this5.data.indexOf(node);

            if (!children || index < 0) {
              // If no children, or cannot find the node, no op
              return;
            }

            if (expand) {
              var _this5$data;

              (_this5$data = _this5.data).splice.apply(_this5$data, [index + 1, 0].concat(_toConsumableArray(children)));
            } else {
              var count = 0;

              for (var i = index + 1; i < _this5.data.length && _this5.data[i].level > node.level; i++, count++) {}

              _this5.data.splice(index + 1, count);
            } // notify the change


            _this5.dataChange.next(_this5.data);

            node.isLoading = false;
          }, 1000);
        }
      }, {
        key: "data",
        get: function get() {
          return this.dataChange.value;
        },
        set: function set(value) {
          this._treeControl.dataNodes = value;
          this.dataChange.next(value);
        }
      }]);

      return DynamicDataSource;
    }();

    var CategoriesTreeComponent = /*#__PURE__*/function () {
      function CategoriesTreeComponent(database) {
        var _this6 = this;

        _classCallCheck(this, CategoriesTreeComponent);

        this.getLevel = function (node) {
          return node.level;
        };

        this.isExpandable = function (node) {
          return node.expandable;
        };

        this.hasChild = function (_, _nodeData) {
          return _nodeData.expandable;
        };

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        database.initialData();
        setTimeout(function () {
          _this6.dataSource.data = database.getRootNodes().map(function (category) {
            return new DynamicFlatNode(category.id, category.name, 0, category.hasChildren);
          });
        }, 1000);
      }

      _createClass(CategoriesTreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesTreeComponent;
    }();

    CategoriesTreeComponent.ɵfac = function CategoriesTreeComponent_Factory(t) {
      return new (t || CategoriesTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicDatabase));
    };

    CategoriesTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriesTreeComponent,
      selectors: [["categories-tree"]],
      decls: 5,
      vars: 3,
      consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "ads-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "ads-tree-progress-bar"]],
      template: function CategoriesTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Categories tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tree", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoriesTreeComponent_mat_tree_node_3_Template, 3, 1, "mat-tree-node", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesTreeComponent_mat_tree_node_4_Template, 6, 4, "mat-tree-node", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]],
      styles: [".ads-tree-progress-bar[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy10cmVlL2NhdGVnb3JpZXMtdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy10cmVlL2NhdGVnb3JpZXMtdHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkcy10cmVlLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'categories-tree',
          templateUrl: './categories-tree.component.html',
          styleUrls: ['./categories-tree.component.css']
        }]
      }], function () {
        return [{
          type: DynamicDatabase
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/ads/services/ad.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/features/ads/services/ad.service.ts ***!
    \*****************************************************/

  /*! exports provided: AdService */

  /***/
  function srcAppFeaturesAdsServicesAdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdService", function () {
      return AdService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AdService = /*#__PURE__*/function () {
      function AdService(http) {
        _classCallCheck(this, AdService);

        this.http = http;
        this.headers = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(AdService, [{
        key: "getAds",
        value: function getAds(search) {
          return this.http.get("/api/ads?search=".concat(search));
        }
      }, {
        key: "getAdById",
        value: function getAdById(id) {
          return this.http.get("/api/ads/".concat(id));
        }
      }, {
        key: "createAd",
        value: function createAd(_createAd) {
          var data = {
            title: _createAd.title,
            description: _createAd.description,
            categoryId: _createAd.categoryId
          };
          return this.http.post('/api/ads', JSON.stringify(data), this.headers);
        }
      }, {
        key: "updateAd",
        value: function updateAd(id, _updateAd) {
          var data = {
            title: _updateAd.title,
            description: _updateAd.description
          };
          return this.http.put("/api/ads/".concat(id), JSON.stringify(data), this.headers);
        }
      }, {
        key: "deleteAdById",
        value: function deleteAdById(id) {
          return this.http["delete"]("/api/ads/".concat(id));
        }
      }]);

      return AdService;
    }();

    AdService.ɵfac = function AdService_Factory(t) {
      return new (t || AdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdService,
      factory: AdService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/ads/services/category.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/ads/services/category.service.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppFeaturesAdsServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.headers = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(CategoryService, [{
        key: "getCategories",
        value: function getCategories(search, parentId) {
          if (!search) {
            search = '';
          }

          if (!parentId) {
            parentId = '';
          }

          return this.http.get("/api/categories?search=".concat(search, "&parentId=").concat(parentId));
        }
      }, {
        key: "getCategoryById",
        value: function getCategoryById(id) {
          return this.http.get("/api/categories/".concat(id));
        }
      }, {
        key: "createCategory",
        value: function createCategory(_createCategory) {
          var data = {
            name: _createCategory.name,
            parentId: _createCategory.parentId
          };
          return this.http.post('/api/categories', JSON.stringify(data), this.headers);
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(id, _updateCategory) {
          var data = {
            name: _updateCategory.name
          };
          return this.http.put("/api/categories/".concat(id), JSON.stringify(data), this.headers);
        }
      }, {
        key: "deleteCategoryById",
        value: function deleteCategoryById(id) {
          return this.http["delete"]("/api/categories/".concat(id));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ads-page/ads-page-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/ads-page/ads-page-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AdsPageRoutingModule */

  /***/
  function srcAppPagesAdsPageAdsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsPageRoutingModule", function () {
      return AdsPageRoutingModule;
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


    var _ads_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ads-page.component */
    "./src/app/pages/ads-page/ads-page.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: '',
        pathMatch: 'full',
        component: _ads_page_component__WEBPACK_IMPORTED_MODULE_2__["AdsPageComponent"]
      }]
    }];

    var AdsPageRoutingModule = function AdsPageRoutingModule() {
      _classCallCheck(this, AdsPageRoutingModule);
    };

    AdsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdsPageRoutingModule
    });
    AdsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdsPageRoutingModule_Factory(t) {
        return new (t || AdsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageRoutingModule, [{
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
  "./src/app/pages/ads-page/ads-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/ads-page/ads-page.component.ts ***!
    \******************************************************/

  /*! exports provided: AdsPageComponent */

  /***/
  function srcAppPagesAdsPageAdsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsPageComponent", function () {
      return AdsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../features/ads/services/ad.service */
    "./src/app/features/ads/services/ad.service.ts");
    /* harmony import */


    var _features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../features/ads/services/category.service */
    "./src/app/features/ads/services/category.service.ts");
    /* harmony import */


    var _features_ads_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../features/ads/components/categories-tree/categories-tree.component */
    "./src/app/features/ads/components/categories-tree/categories-tree.component.ts");
    /* harmony import */


    var _features_ads_components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../features/ads/components/ads-list/ads-list.component */
    "./src/app/features/ads/components/ads-list/ads-list.component.ts");

    var AdsPageComponent = /*#__PURE__*/function () {
      function AdsPageComponent(adService, categoryService) {
        _classCallCheck(this, AdsPageComponent);

        this.adService = adService;
        this.categoryService = categoryService;
      }

      _createClass(AdsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdsPageComponent;
    }();

    AdsPageComponent.ɵfac = function AdsPageComponent_Factory(t) {
      return new (t || AdsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]));
    };

    AdsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdsPageComponent,
      selectors: [["ads-page"]],
      decls: 5,
      vars: 0,
      consts: [[1, "content-wrapper"], [1, "categories-tree"], [1, "ads-list"]],
      template: function AdsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "categories-tree", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ads-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_features_ads_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _features_ads_components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]],
      styles: [".content-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.categories-tree[_ngcontent-%COMP%] {\r\n  border: 2px solid blue;\r\n}\r\n\r\n.ads-list[_ngcontent-%COMP%] {\r\n  border: 2px solid green;\r\n  margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRzLXBhZ2UvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRzLXBhZ2UvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXRyZWUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbi5hZHMtbGlzdCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ads-page',
          templateUrl: './ads-page.component.html',
          styleUrls: ['./ads-page.component.css']
        }]
      }], function () {
        return [{
          type: _features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]
        }, {
          type: _features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ads-page/ads-page.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/ads-page/ads-page.module.ts ***!
    \***************************************************/

  /*! exports provided: AdsPageModule */

  /***/
  function srcAppPagesAdsPageAdsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdsPageModule", function () {
      return AdsPageModule;
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


    var _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ads-page-routing.module */
    "./src/app/pages/ads-page/ads-page-routing.module.ts");
    /* harmony import */


    var _ads_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ads-page.component */
    "./src/app/pages/ads-page/ads-page.component.ts");
    /* harmony import */


    var _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../features/ads/ads.module */
    "./src/app/features/ads/ads.module.ts");

    var AdsPageModule = function AdsPageModule() {
      _classCallCheck(this, AdsPageModule);
    };

    AdsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdsPageModule
    });
    AdsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdsPageModule_Factory(t) {
        return new (t || AdsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"], _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsPageModule, {
        declarations: [_ads_page_component__WEBPACK_IMPORTED_MODULE_3__["AdsPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"], _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ads_page_component__WEBPACK_IMPORTED_MODULE_3__["AdsPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"], _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-ads-page-ads-page-module-es5.js.map