function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-ads-page-ads-page-module~pages-cabinet-page-cabinet-page-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
    \*****************************************************************/

  /*! exports provided: BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
      return BaseTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
      return CDK_TREE_NODE_OUTLET_NODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
      return CdkNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
      return CdkTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
      return CdkTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
      return CdkTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
      return CdkTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
      return CdkTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
      return CdkTreeNodeOutletContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
      return CdkTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
      return CdkTreeNodeToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
      return FlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
      return NestedTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
      return getTreeControlFunctionsMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
      return getTreeControlMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
      return getTreeMissingMatchingNodeDefError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
      return getTreeMultipleDefaultNodeDefsError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
      return getTreeNoValidDataSourceError;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/base-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
     * @abstract
     * @template T
     */


    var BaseTreeControl = /*#__PURE__*/function () {
      function BaseTreeControl() {
        _classCallCheck(this, BaseTreeControl);

        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
      }
      /**
       * Toggles one single data node's expanded/collapsed state.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(BaseTreeControl, [{
        key: "toggle",
        value: function toggle(dataNode) {
          this.expansionModel.toggle(dataNode);
        }
        /**
         * Expands one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(dataNode) {
          this.expansionModel.select(dataNode);
        }
        /**
         * Collapses one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(dataNode) {
          this.expansionModel.deselect(dataNode);
        }
        /**
         * Whether a given data node is expanded or not. Returns true if the data node is expanded.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "isExpanded",
        value: function isExpanded(dataNode) {
          return this.expansionModel.isSelected(dataNode);
        }
        /**
         * Toggles a subtree rooted at `node` recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "toggleDescendants",
        value: function toggleDescendants(dataNode) {
          this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
        }
        /**
         * Collapse all dataNodes in the tree.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.expansionModel.clear();
        }
        /**
         * Expands a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expandDescendants",
        value: function expandDescendants(dataNode) {
          var _this$expansionModel;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, toBeProcessed);
        }
        /**
         * Collapses a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapseDescendants",
        value: function collapseDescendants(dataNode) {
          var _this$expansionModel2;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, toBeProcessed);
        }
      }]);

      return BaseTreeControl;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/flat-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
     * @template T
     */


    var FlatTreeControl = /*#__PURE__*/function (_BaseTreeControl) {
      _inherits(FlatTreeControl, _BaseTreeControl);

      var _super = _createSuper(FlatTreeControl);

      /**
       * Construct with flat tree data node functions getLevel and isExpandable.
       * @param {?} getLevel
       * @param {?} isExpandable
       */
      function FlatTreeControl(getLevel, isExpandable) {
        var _this;

        _classCallCheck(this, FlatTreeControl);

        _this = _super.call(this);
        _this.getLevel = getLevel;
        _this.isExpandable = isExpandable;
        return _this;
      }
      /**
       * Gets a list of the data node's subtree of descendent data nodes.
       *
       * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
       * with correct levels.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(FlatTreeControl, [{
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var startIndex = this.dataNodes.indexOf(dataNode);
          /** @type {?} */

          var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
          // The level of descendants of a tree node must be greater than the level of the given
          // tree node.
          // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
          // If we reach a node whose level is greater than the level of the tree node, we hit a
          // sibling of an ancestor.

          for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
          }

          return results;
        }
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this$expansionModel3;

          (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes));
        }
      }]);

      return FlatTreeControl;
    }(BaseTreeControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/nested-tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
     * @template T
     */


    var NestedTreeControl = /*#__PURE__*/function (_BaseTreeControl2) {
      _inherits(NestedTreeControl, _BaseTreeControl2);

      var _super2 = _createSuper(NestedTreeControl);

      /**
       * Construct with nested tree function getChildren.
       * @param {?} getChildren
       */
      function NestedTreeControl(getChildren) {
        var _this2;

        _classCallCheck(this, NestedTreeControl);

        _this2 = _super2.call(this);
        _this2.getChildren = getChildren;
        return _this2;
      }
      /**
       * Expands all dataNodes in the tree.
       *
       * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
       * data nodes of the tree.
       * @return {?}
       */


      _createClass(NestedTreeControl, [{
        key: "expandAll",
        value: function expandAll() {
          var _this3 = this,
              _this$expansionModel4;

          this.expansionModel.clear();
          /** @type {?} */

          var allNodes = this.dataNodes.reduce(
          /**
          * @param {?} accumulator
          * @param {?} dataNode
          * @return {?}
          */
          function (accumulator, dataNode) {
            return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this3.getDescendants(dataNode)), [dataNode]);
          }, []);

          (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes));
        }
        /**
         * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var descendants = [];

          this._getDescendants(descendants, dataNode); // Remove the node itself


          return descendants.splice(1);
        }
        /**
         * A helper function to get descendants recursively.
         * @protected
         * @param {?} descendants
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "_getDescendants",
        value: function _getDescendants(descendants, dataNode) {
          var _this4 = this;

          descendants.push(dataNode);
          /** @type {?} */

          var childrenNodes = this.getChildren(dataNode);

          if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              return _this4._getDescendants(descendants, child);
            });
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /** @type {?} */
            Boolean)).subscribe(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              var _iterator = _createForOfIteratorHelper(children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;

                  _this4._getDescendants(descendants, child);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }
      }]);

      return NestedTreeControl;
    }(BaseTreeControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/control/tree-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree control interface. User can implement TreeControl to expand/collapse dataNodes in the tree.
     * The CDKTree will use this TreeControl to expand/collapse a node.
     * User can also use it outside the `<cdk-tree>` to control the expansion status of the tree.
     * @record
     * @template T
     */


    function TreeControl() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var CdkTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function CdkTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, CdkTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
      return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8));
    };

    CdkTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeOutlet,
      selectors: [["", "cdkTreeNodeOutlet", ""]]
    });
    /** @nocollapse */

    CdkTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TREE_NODE_OUTLET_NODE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TREE_NODE_OUTLET_NODE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Context provided to the tree node component.
     * @template T
     */


    var CdkTreeNodeOutletContext =
    /**
     * @param {?} data
     */
    function CdkTreeNodeOutletContext(data) {
      _classCallCheck(this, CdkTreeNodeOutletContext);

      this.$implicit = data;
    };

    if (false) {}
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     * @template T
     */


    var CdkTreeNodeDef =
    /**
     * \@docs-private
     * @param {?} template
     */
    function CdkTreeNodeDef(template) {
      _classCallCheck(this, CdkTreeNodeDef);

      this.template = template;
    };

    CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
      return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeDef,
      selectors: [["", "cdkTreeNodeDef", ""]],
      inputs: {
        when: ["cdkTreeNodeDefWhen", "when"]
      }
    });
    /** @nocollapse */

    CdkTreeNodeDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeDef]',
          inputs: ['when: cdkTreeNodeDefWhen']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when there is no usable data.
     * \@docs-private
     * @return {?}
     */


    function getTreeNoValidDataSourceError() {
      return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTreeMultipleDefaultNodeDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * \@docs-private
     * @return {?}
     */


    function getTreeMissingMatchingNodeDefError() {
      return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlMissingError() {
      return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlFunctionsMissingError() {
      return Error("Could not find functions for nested/flat tree in tree control.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     * @template T
     */


    var CdkTree = /*#__PURE__*/function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       */
      function CdkTree(_differs, _changeDetectorRef) {
        _classCallCheck(this, CdkTree);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */

        this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });
      }
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       * @return {?}
       */


      _createClass(CdkTree, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._dataDiffer = this._differs.find([]).create(this.trackBy);

          if (!this.treeControl) {
            throw getTreeControlMissingError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._nodeOutlet.viewContainer.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var defaultNodeDefs = this._nodeDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
          }

          this._defaultNodeDef = defaultNodeDefs[0];

          if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
          }
        } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.

        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          } // Remove the all dataNodes if there is now no data source


          if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;

          if (this._nodeDefs) {
            this._observeRenderChanges();
          }
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this5 = this;

          /** @type {?} */
          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(this._dataSource)) {
            dataStream = this._dataSource;
          } else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
          }

          if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this5.renderNodeChanges(data);
            });
          } else {
            throw getTreeNoValidDataSourceError();
          }
        }
        /**
         * Check for changes made in the data and render each change (node added/removed/moved).
         * @param {?} data
         * @param {?=} dataDiffer
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "renderNodeChanges",
        value: function renderNodeChanges(data) {
          var _this6 = this;

          var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
          var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
          var parentData = arguments.length > 3 ? arguments[3] : undefined;

          /** @type {?} */
          var changes = dataDiffer.diff(data);

          if (!changes) {
            return;
          }

          changes.forEachOperation(
          /**
          * @param {?} item
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
              _this6.insertNode(data[
              /** @type {?} */
              currentIndex],
              /** @type {?} */
              currentIndex, viewContainer, parentData);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              adjustedPreviousIndex);

              _this6._levels["delete"](item.item);
            } else {
              /** @type {?} */
              var view = viewContainer.get(
              /** @type {?} */
              adjustedPreviousIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          });

          this._changeDetectorRef.detectChanges();
        }
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         * @param {?} data
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getNodeDef",
        value: function _getNodeDef(data, i) {
          if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
          }
          /** @type {?} */


          var nodeDef = this._nodeDefs.find(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.when && def.when(i, data);
          }) || this._defaultNodeDef;

          if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
          }

          return nodeDef;
        }
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         * @param {?} nodeData
         * @param {?} index
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "insertNode",
        value: function insertNode(nodeData, index, viewContainer, parentData) {
          /** @type {?} */
          var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

          /** @type {?} */


          var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
          // Otherwise, use the level of parent node.

          if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
          } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level =
            /** @type {?} */
            this._levels.get(parentData) + 1;
          } else {
            context.level = 0;
          }

          this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

          /** @type {?} */


          var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
          container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
          // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
          //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

          if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
          }
        }
      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
      }]);

      return CdkTree;
    }();

    CdkTree.ɵfac = function CdkTree_Factory(t) {
      return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    CdkTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTree,
      selectors: [["cdk-tree"]],
      contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
        }
      },
      viewQuery: function CdkTree_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: ["role", "tree", 1, "cdk-tree"],
      inputs: {
        dataSource: "dataSource",
        treeControl: "treeControl",
        trackBy: "trackBy"
      },
      exportAs: ["cdkTree"],
      decls: 1,
      vars: 0,
      consts: [["cdkTreeNodeOutlet", ""]],
      template: function CdkTree_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkTreeNodeOutlet],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    CdkTree.propDecorators = {
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      treeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkTreeNodeOutlet, {
          "static": true
        }]
      }],
      _nodeDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeDef, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-tree',
          exportAs: 'cdkTree',
          template: "<ng-container cdkTreeNodeOutlet></ng-container>",
          host: {
            'class': 'cdk-tree',
            'role': 'tree'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
          // The view for `CdkTree` consists entirely of templates declared in other views. As they are
          // declared elsewhere, they are checked when their declaration points are checked.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        treeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkTreeNodeOutlet, {
            "static": true
          }]
        }],
        _nodeDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeDef, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     * @template T
     */


    var CdkTreeNode = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _tree
       */
      function CdkTreeNode(_elementRef, _tree) {
        _classCallCheck(this, CdkTreeNode);

        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */

        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */

        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode =
        /** @type {?} */
        this;
      }
      /**
       * The tree node's data.
       * @return {?}
       */


      _createClass(CdkTreeNode, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          // If this is the last tree node being destroyed,
          // clear out the reference to avoid leaking memory.
          if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
          }

          this._dataChanges.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Focuses the menu item. Implements for FocusableOption.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_setRoleFromData",
        value: function _setRoleFromData() {
          var _this7 = this;

          if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
          } else {
            if (!this._tree.treeControl.getChildren) {
              throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */


            var childrenNodes = this._tree.treeControl.getChildren(this._data);

            if (Array.isArray(childrenNodes)) {
              this._setRoleFromChildren(
              /** @type {?} */
              childrenNodes);
            } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                return _this7._setRoleFromChildren(children);
              });
            }
          }
        }
        /**
         * @protected
         * @param {?} children
         * @return {?}
         */

      }, {
        key: "_setRoleFromChildren",
        value: function _setRoleFromChildren(children) {
          this.role = children && children.length ? 'group' : 'treeitem';
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._data) {
            this._data = value;

            this._setRoleFromData();

            this._dataChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._tree.treeControl.isExpanded(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "level",
        get: function get() {
          return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        }
      }]);

      return CdkTreeNode;
    }();

    CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
      return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree));
    };

    CdkTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNode,
      selectors: [["cdk-tree-node"]],
      hostAttrs: [1, "cdk-tree-node"],
      hostVars: 3,
      hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
        }
      },
      inputs: {
        role: "role"
      },
      exportAs: ["cdkTreeNode"]
    });
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */

    CdkTreeNode.mostRecentTreeNode = null;
    /** @nocollapse */

    CdkTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }];
    };

    CdkTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-tree-node',
          exportAs: 'cdkTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.aria-level]': 'role === "treeitem" ? level : null',
            '[attr.role]': 'role',
            'class': 'cdk-tree-node'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/nested-node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * The children of node will be automatically added to `cdkTreeNodeOutlet`.
     * @template T
     */


    var CdkNestedTreeNode = /*#__PURE__*/function (_CdkTreeNode) {
      _inherits(CdkNestedTreeNode, _CdkTreeNode);

      var _super3 = _createSuper(CdkNestedTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       */
      function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this8;

        _classCallCheck(this, CdkNestedTreeNode);

        _this8 = _super3.call(this, _elementRef, _tree);
        _this8._elementRef = _elementRef;
        _this8._tree = _tree;
        _this8._differs = _differs;
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(CdkNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this9 = this;

          this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

          if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
          }
          /** @type {?} */


          var childrenNodes = this._tree.treeControl.getChildren(this.data);

          if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(
            /** @type {?} */
            childrenNodes);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(childrenNodes)) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this9.updateChildrenNodes(result);
            });
          }

          this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this9.updateChildrenNodes();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._clear();

          _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Add children dataNodes to the NodeOutlet
         * @protected
         * @param {?=} children
         * @return {?}
         */

      }, {
        key: "updateChildrenNodes",
        value: function updateChildrenNodes(children) {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (children) {
            this._children = children;
          }

          if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;

            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
          } else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
          }
        }
        /**
         * Clear the children dataNodes.
         * @protected
         * @return {?}
         */

      }, {
        key: "_clear",
        value: function _clear() {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (outlet) {
            outlet.viewContainer.clear();

            this._dataDiffer.diff([]);
          }
        }
        /**
         * Gets the outlet for the current node.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNodeOutlet",
        value: function _getNodeOutlet() {
          var _this10 = this;

          /** @type {?} */
          var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
          // that we don't pick up the outlet of a child node by accident.

          return outlets && outlets.find(
          /**
          * @param {?} outlet
          * @return {?}
          */
          function (outlet) {
            return !outlet._node || outlet._node === _this10;
          });
        }
      }]);

      return CdkNestedTreeNode;
    }(CdkTreeNode);

    CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
      return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
    };

    CdkNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkNestedTreeNode,
      selectors: [["cdk-nested-tree-node"]],
      contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
        }
      },
      hostAttrs: [1, "cdk-tree-node", "cdk-nested-tree-node"],
      hostVars: 2,
      hostBindings: function CdkNestedTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
        }
      },
      exportAs: ["cdkNestedTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };

    CdkNestedTreeNode.propDecorators = {
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-nested-tree-node',
          exportAs: 'cdkNestedTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.role]': 'role',
            'class': 'cdk-tree-node cdk-nested-tree-node'
          },
          providers: [{
            provide: CdkTreeNode,
            useExisting: CdkNestedTreeNode
          }, {
            provide: CDK_TREE_NODE_OUTLET_NODE,
            useExisting: CdkNestedTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      }, {
        nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkTreeNodeOutlet, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/padding.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */


    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var CdkTreeNodePadding = /*#__PURE__*/function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this11 = this;

        _classCallCheck(this, CdkTreeNodePadding);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._indent = 40;

        this._setPadding();

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this11._setPadding(true);
          });
        } // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.


        _treeNode._dataChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this11._setPadding();
        });
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(CdkTreeNodePadding, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level == null ? nodeLevel : this._level;
          return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
        }
        /**
         * @param {?=} forceChange
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var padding = this._paddingIndent();

          if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */

            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */

            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';

            this._renderer.setStyle(element, paddingProp, padding);

            this._renderer.setStyle(element, resetProp, null);

            this._currentPadding = padding;
          }
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Set to null as the fallback value so that _setPadding can fall back to the node level if the
          // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
          // they set 0 explicitly.
          this._level =
          /** @type {?} */
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return CdkTreeNodePadding;
    }();

    CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
      return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
    };

    CdkTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodePadding,
      selectors: [["", "cdkTreeNodePadding", ""]],
      inputs: {
        level: ["cdkTreeNodePadding", "level"],
        indent: ["cdkTreeNodePaddingIndent", "indent"]
      }
    });
    /** @nocollapse */

    CdkTreeNodePadding.ctorParameters = function () {
      return [{
        type: CdkTreeNode
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePaddingIndent']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodePadding]'
        }]
      }], function () {
        return [{
          type: CdkTreeNode
        }, {
          type: CdkTree
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodePaddingIndent']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Node toggle to expand/collapse the node.
     * @template T
     */


    var CdkTreeNodeToggle = /*#__PURE__*/function () {
      /**
       * @param {?} _tree
       * @param {?} _treeNode
       */
      function CdkTreeNodeToggle(_tree, _treeNode) {
        _classCallCheck(this, CdkTreeNodeToggle);

        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
      }
      /**
       * Whether expand/collapse the node recursively.
       * @return {?}
       */


      _createClass(CdkTreeNodeToggle, [{
        key: "_toggle",
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _toggle(event) {
          this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
          event.stopPropagation();
        }
      }, {
        key: "recursive",
        get: function get() {
          return this._recursive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTreeNodeToggle;
    }();

    CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
      return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode));
    };

    CdkTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkTreeNodeToggle,
      selectors: [["", "cdkTreeNodeToggle", ""]],
      hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
            return ctx._toggle($event);
          });
        }
      },
      inputs: {
        recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
      }
    });
    /** @nocollapse */

    CdkTreeNodeToggle.ctorParameters = function () {
      return [{
        type: CdkTree
      }, {
        type: CdkTreeNode
      }];
    };

    CdkTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodeToggleRecursive']
      }],
      _toggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkTreeNodeToggle]'
        }]
      }], function () {
        return [{
          type: CdkTree
        }, {
          type: CdkTreeNode
        }];
      }, {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkTreeNodeToggleRecursive']
        }],
        _toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/tree-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

    var CdkTreeModule = function CdkTreeModule() {
      _classCallCheck(this, CdkTreeModule);
    };

    CdkTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkTreeModule
    });
    CdkTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CdkTreeModule_Factory(t) {
        return new (t || CdkTreeModule)();
      },
      providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTreeModule, {
        declarations: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
        exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: EXPORTED_DECLARATIONS,
          declarations: EXPORTED_DECLARATIONS,
          providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/tree/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tree.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
      return MAT_PROGRESS_BAR_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
      return MAT_PROGRESS_BAR_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
      return MatProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
      return MatProgressBarModule;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Last animation end data.
     * @record
     */


    var _c0 = ["primaryValueBar"];

    function ProgressAnimationEnd() {}

    if (false) {} // Boilerplate for applying mixins to MatProgressBar.

    /**
     * \@docs-private
     */


    var MatProgressBarBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressBarBase(_elementRef) {
      _classCallCheck(this, MatProgressBarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
    /**
     * Injection token used to provide the current location to `MatProgressBar`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
      providedIn: 'root',
      factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatProgressBar`.
     * \@docs-private
     * @record
     */

    function MatProgressBarLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * Counter used to generate unique IDs for progress bars.
     * @type {?}
     */


    var progressbarId = 0;
    /**
     * `<mat-progress-bar>` component.
     */

    var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
      _inherits(MatProgressBar, _MatProgressBarMixinB);

      var _super4 = _createSuper(MatProgressBar);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?=} _animationMode
       * @param {?=} location
       */
      function MatProgressBar(_elementRef, _ngZone, _animationMode,
      /**
       * @deprecated `location` parameter to be made required.
       * @breaking-change 8.0.0
       */
      location) {
        var _this12;

        _classCallCheck(this, MatProgressBar);

        _this12 = _super4.call(this, _elementRef);
        _this12._elementRef = _elementRef;
        _this12._ngZone = _ngZone;
        _this12._animationMode = _animationMode;
        /**
         * Flag that indicates whether NoopAnimations mode is set to true.
         */

        _this12._isNoopAnimation = false;
        _this12._value = 0;
        _this12._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */

        _this12.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Reference to animation end subscription to be unsubscribed on destroy.
         */

        _this12._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */

        _this12.mode = 'determinate';
        /**
         * ID of the progress bar.
         */

        _this12.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.

        /** @type {?} */

        var path = location ? location.getPathname().split('#')[0] : '';
        _this12._rectangleFillValue = "url('".concat(path, "#").concat(_this12.progressbarId, "')");
        _this12._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this12;
      }
      /**
       * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
       * @return {?}
       */


      _createClass(MatProgressBar, [{
        key: "_primaryTransform",

        /**
         * Gets the current transform value for the progress bar's primary indicator.
         * @return {?}
         */
        value: function _primaryTransform() {
          /** @type {?} */
          var scale = this.value / 100;
          return {
            transform: "scaleX(".concat(scale, ")")
          };
        }
        /**
         * Gets the current transform value for the progress bar's buffer indicator. Only used if the
         * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
         * @return {?}
         */

      }, {
        key: "_bufferTransform",
        value: function _bufferTransform() {
          if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }

          return null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this13 = this;

          // Run outside angular so change detection didn't get triggered on every transition end
          // instead only on the animation that we care about (primary value bar's transitionend)
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var element = _this13._primaryValueBar.nativeElement;
            _this13._animationEndSubscription =
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e.target === element;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this13.mode === 'determinate' || _this13.mode === 'buffer') {
                _this13._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this13.animationEnd.next({
                    value: _this13.value
                  });
                });
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationEndSubscription.unsubscribe();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
        }
        /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */

      }, {
        key: "bufferValue",
        get: function get() {
          return this._bufferValue;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._bufferValue = clamp(v || 0);
        }
      }]);

      return MatProgressBar;
    }(_MatProgressBarMixinBase);

    MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
      return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8));
    };

    MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressBar,
      selectors: [["mat-progress-bar"]],
      viewQuery: function MatProgressBar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
        }
      },
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"],
      hostVars: 4,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        value: "value",
        bufferValue: "bufferValue"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 4,
      consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatProgressBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_BAR_LOCATION]
        }]
      }];
    };

    MatProgressBar.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _primaryValueBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['primaryValueBar']
      }],
      animationEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-progress-bar',
          exportAs: 'matProgressBar',
          host: {
            'role': 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
            '[attr.mode]': 'mode',
            'class': 'mat-progress-bar',
            '[class._mat-animation-noopable]': '_isNoopAnimation'
          },
          inputs: ['color'],
          template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_BAR_LOCATION]
          }]
        }];
      }, {
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _primaryValueBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['primaryValueBar']
        }]
      });
    })();

    if (false) {}
    /**
     * Clamps a value to be between two numbers, by default 0 and 100.
     * @param {?} v
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */


    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      return Math.max(min, Math.min(max, v));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressBarModule = function MatProgressBarModule() {
      _classCallCheck(this, MatProgressBarModule);
    };

    MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressBarModule
    });
    MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatProgressBarModule_Factory(t) {
        return new (t || MatProgressBarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, {
        declarations: function declarations() {
          return [MatProgressBar];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatProgressBar]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-bar.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js ***!
    \**********************************************************************/

  /*! exports provided: MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function () {
      return MatNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTree", function () {
      return MatTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function () {
      return MatTreeFlatDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function () {
      return MatTreeFlattener;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeModule", function () {
      return MatTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function () {
      return MatTreeNestedDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNode", function () {
      return MatTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function () {
      return MatTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function () {
      return MatTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function () {
      return MatTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function () {
      return MatTreeNodeToggle;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
    /**
     * Wrapper for the CdkTree node with Material design styles.
     * @template T
     */


    var MatTreeNode = /*#__PURE__*/function (_MatTreeNodeMixinBase2) {
      _inherits(MatTreeNode, _MatTreeNodeMixinBase2);

      var _super5 = _createSuper(MatTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} tabIndex
       */
      function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this14;

        _classCallCheck(this, MatTreeNode);

        _this14 = _super5.call(this, _elementRef, _tree);
        _this14._elementRef = _elementRef;
        _this14._tree = _tree;
        _this14.role = 'treeitem';
        _this14.tabIndex = Number(tabIndex) || 0;
        return _this14;
      }

      return MatTreeNode;
    }(_MatTreeNodeMixinBase);

    MatTreeNode.ɵfac = function MatTreeNode_Factory(t) {
      return new (t || MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
    };

    MatTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNode,
      selectors: [["mat-tree-node"]],
      hostAttrs: [1, "mat-tree-node"],
      hostVars: 3,
      hostBindings: function MatTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
        }
      },
      inputs: {
        disabled: "disabled",
        tabIndex: "tabIndex",
        role: "role"
      },
      exportAs: ["matTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
        useExisting: MatTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-tree-node',
          exportAs: 'matTreeNode',
          inputs: ['disabled', 'tabIndex'],
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.aria-level]': 'role === "treeitem" ? level : null',
            '[attr.role]': 'role',
            'class': 'mat-tree-node'
          },
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
            useExisting: MatTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the CdkTree node definition with Material design styles.
     * @template T
     */


    var MatTreeNodeDef = /*#__PURE__*/function (_angular_cdk_tree__WE) {
      _inherits(MatTreeNodeDef, _angular_cdk_tree__WE);

      var _super6 = _createSuper(MatTreeNodeDef);

      function MatTreeNodeDef() {
        _classCallCheck(this, MatTreeNodeDef);

        return _super6.apply(this, arguments);
      }

      return MatTreeNodeDef;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"]);

    MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) {
      return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef);
    };

    MatTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeDef,
      selectors: [["", "matTreeNodeDef", ""]],
      inputs: {
        when: ["matTreeNodeDefWhen", "when"],
        data: ["matTreeNode", "data"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
        useExisting: MatTreeNodeDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodeDef.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNode']
      }]
    };

    var ɵMatTreeNodeDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeDef]',
          inputs: ['when: matTreeNodeDefWhen'],
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
            useExisting: MatTreeNodeDef
          }]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNode']
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the CdkTree nested node with Material design styles.
     * @template T
     */


    var MatNestedTreeNode = /*#__PURE__*/function (_angular_cdk_tree__WE2) {
      _inherits(MatNestedTreeNode, _angular_cdk_tree__WE2);

      var _super7 = _createSuper(MatNestedTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       * @param {?} tabIndex
       */
      function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this15;

        _classCallCheck(this, MatNestedTreeNode);

        _this15 = _super7.call(this, _elementRef, _tree, _differs);
        _this15._elementRef = _elementRef;
        _this15._tree = _tree;
        _this15._differs = _differs;
        _this15._disabled = false;
        _this15.tabIndex = Number(tabIndex) || 0;
        return _this15;
      }
      /**
       * Whether the node is disabled.
       * @return {?}
       */


      _createClass(MatNestedTreeNode, [{
        key: "ngAfterContentInit",
        // This is a workaround for https://github.com/angular/angular/issues/23091
        // In aot mode, the lifecycle hooks from parent class are not called.
        // TODO(tinayuangao): Remove when the angular issue #23091 is fixed

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Tabindex for the node.
         * @return {?}
         */

      }, {
        key: "tabIndex",
        get: function get() {
          return this.disabled ? -1 : this._tabIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // If the specified tabIndex value is null or undefined, fall back to the default value.
          this._tabIndex = value != null ? value : 0;
        }
      }]);

      return MatNestedTreeNode;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"]);

    MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) {
      return new (t || MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
    };

    MatNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatNestedTreeNode,
      selectors: [["mat-nested-tree-node"]],
      hostAttrs: [1, "mat-nested-tree-node"],
      hostVars: 2,
      hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
        }
      },
      inputs: {
        tabIndex: "tabIndex",
        disabled: "disabled",
        node: ["matNestedTreeNode", "node"]
      },
      exportAs: ["matNestedTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
        useExisting: MatNestedTreeNode
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatNestedTreeNode.propDecorators = {
      node: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matNestedTreeNode']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNestedTreeNode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-nested-tree-node',
          exportAs: 'matNestedTreeNode',
          host: {
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.role]': 'role',
            'class': 'mat-nested-tree-node'
          },
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
            useExisting: MatNestedTreeNode
          }, {
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
            useExisting: MatNestedTreeNode
          }, {
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
            useExisting: MatNestedTreeNode
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matNestedTreeNode']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/padding.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree padding with Material design styles.
     * @template T
     */


    var MatTreeNodePadding = /*#__PURE__*/function (_angular_cdk_tree__WE3) {
      _inherits(MatTreeNodePadding, _angular_cdk_tree__WE3);

      var _super8 = _createSuper(MatTreeNodePadding);

      function MatTreeNodePadding() {
        _classCallCheck(this, MatTreeNodePadding);

        return _super8.apply(this, arguments);
      }

      return MatTreeNodePadding;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"]);

    MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) {
      return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding);
    };

    MatTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodePadding,
      selectors: [["", "matTreeNodePadding", ""]],
      inputs: {
        level: ["matTreeNodePadding", "level"],
        indent: ["matTreeNodePaddingIndent", "indent"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
        useExisting: MatTreeNodePadding
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePaddingIndent']
      }]
    };

    var ɵMatTreeNodePadding_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodePadding);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodePadding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodePadding]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
            useExisting: MatTreeNodePadding
          }]
        }]
      }], null, {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodePadding']
        }],
        indent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodePaddingIndent']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */


    var MatTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function MatTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, MatTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) {
      return new (t || MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], 8));
    };

    MatTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeOutlet,
      selectors: [["", "matTreeNodeOutlet", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
        useExisting: MatTreeNodeOutlet
      }])]
    });
    /** @nocollapse */

    MatTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeOutlet]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
            useExisting: MatTreeNodeOutlet
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var MatTree = /*#__PURE__*/function (_angular_cdk_tree__WE4) {
      _inherits(MatTree, _angular_cdk_tree__WE4);

      var _super9 = _createSuper(MatTree);

      function MatTree() {
        _classCallCheck(this, MatTree);

        return _super9.apply(this, arguments);
      }

      return MatTree;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]);

    MatTree.ɵfac = function MatTree_Factory(t) {
      return ɵMatTree_BaseFactory(t || MatTree);
    };

    MatTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatTree,
      selectors: [["mat-tree"]],
      viewQuery: function MatTree_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](MatTreeNodeOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: ["role", "tree", 1, "mat-tree"],
      exportAs: ["matTree"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
        useExisting: MatTree
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["matTreeNodeOutlet", ""]],
      template: function MatTree_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],
      encapsulation: 2
    });
    MatTree.propDecorators = {
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [MatTreeNodeOutlet, {
          "static": true
        }]
      }]
    };

    var ɵMatTree_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTree);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTree, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-tree',
          exportAs: 'matTree',
          template: "<ng-container matTreeNodeOutlet></ng-container>",
          host: {
            'class': 'mat-tree',
            'role': 'tree'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          // See note on CdkTree for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
            useExisting: MatTree
          }],
          styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
        }]
      }], null, {
        _nodeOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [MatTreeNodeOutlet, {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree's toggle with Material design styles.
     * @template T
     */


    var MatTreeNodeToggle = /*#__PURE__*/function (_angular_cdk_tree__WE5) {
      _inherits(MatTreeNodeToggle, _angular_cdk_tree__WE5);

      var _super10 = _createSuper(MatTreeNodeToggle);

      function MatTreeNodeToggle() {
        var _this16;

        _classCallCheck(this, MatTreeNodeToggle);

        _this16 = _super10.apply(this, arguments);
        _this16.recursive = false;
        return _this16;
      }

      return MatTreeNodeToggle;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"]);

    MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) {
      return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle);
    };

    MatTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTreeNodeToggle,
      selectors: [["", "matTreeNodeToggle", ""]],
      inputs: {
        recursive: ["matTreeNodeToggleRecursive", "recursive"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
        useExisting: MatTreeNodeToggle
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodeToggleRecursive']
      }]
    };

    var ɵMatTreeNodeToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTreeNodeToggle);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeNodeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matTreeNodeToggle]',
          providers: [{
            provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
            useExisting: MatTreeNodeToggle
          }]
        }]
      }], null, {
        recursive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matTreeNodeToggleRecursive']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/tree-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

    var MatTreeModule = function MatTreeModule() {
      _classCallCheck(this, MatTreeModule);
    };

    MatTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatTreeModule
    });
    MatTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatTreeModule_Factory(t) {
        return new (t || MatTreeModule)();
      },
      imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatTreeModule, {
        declarations: function declarations() {
          return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
        },
        imports: function imports() {
          return [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: MAT_TREE_DIRECTIVES,
          declarations: MAT_TREE_DIRECTIVES
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/data-source/flat-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T` to flattened nodes of type `F`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F` with additional information.
     * @template T, F
     */


    var MatTreeFlattener = /*#__PURE__*/function () {
      /**
       * @param {?} transformFunction
       * @param {?} getLevel
       * @param {?} isExpandable
       * @param {?} getChildren
       */
      function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
        _classCallCheck(this, MatTreeFlattener);

        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
      }
      /**
       * @param {?} node
       * @param {?} level
       * @param {?} resultNodes
       * @param {?} parentMap
       * @return {?}
       */


      _createClass(MatTreeFlattener, [{
        key: "_flattenNode",
        value: function _flattenNode(node, level, resultNodes, parentMap) {
          var _this17 = this;

          /** @type {?} */
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);

          if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);

            if (childrenNodes) {
              if (Array.isArray(childrenNodes)) {
                this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
              } else {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
                /**
                * @param {?} children
                * @return {?}
                */
                function (children) {
                  _this17._flattenChildren(children, level, resultNodes, parentMap);
                });
              }
            }
          }

          return resultNodes;
        }
        /**
         * @param {?} children
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenChildren",
        value: function _flattenChildren(children, level, resultNodes, parentMap) {
          var _this18 = this;

          children.forEach(
          /**
          * @param {?} child
          * @param {?} index
          * @return {?}
          */
          function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);

            _this18._flattenNode(child, level + 1, resultNodes, childParentMap);
          });
        }
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         * @param {?} structuredData
         * @return {?}
         */

      }, {
        key: "flattenNodes",
        value: function flattenNodes(structuredData) {
          var _this19 = this;

          /** @type {?} */
          var resultNodes = [];
          structuredData.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return _this19._flattenNode(node, 0, resultNodes, []);
          });
          return resultNodes;
        }
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         * @param {?} nodes
         * @param {?} treeControl
         * @return {?}
         */

      }, {
        key: "expandFlattenedNodes",
        value: function expandFlattenedNodes(nodes, treeControl) {
          var _this20 = this;

          /** @type {?} */
          var results = [];
          /** @type {?} */

          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            /** @type {?} */
            var expand = true;

            for (var i = 0; i <= _this20.getLevel(node); i++) {
              expand = expand && currentExpand[i];
            }

            if (expand) {
              results.push(node);
            }

            if (_this20.isExpandable(node)) {
              currentExpand[_this20.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
          });
          return results;
        }
      }]);

      return MatTreeFlattener;
    }();

    if (false) {}
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `MatTree`.
     * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
     * to type `F` for `MatTree` to consume.
     * @template T, F
     */


    var MatTreeFlatDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
      _inherits(MatTreeFlatDataSource, _angular_cdk_collecti);

      var _super11 = _createSuper(MatTreeFlatDataSource);

      /**
       * @param {?} _treeControl
       * @param {?} _treeFlattener
       * @param {?=} initialData
       */
      function MatTreeFlatDataSource(_treeControl, _treeFlattener) {
        var _this21;

        var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, MatTreeFlatDataSource);

        _this21 = _super11.call(this);
        _this21._treeControl = _treeControl;
        _this21._treeFlattener = _treeFlattener;
        _this21._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this21._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this21._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        return _this21;
      }
      /**
       * @return {?}
       */


      _createClass(MatTreeFlatDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this22 = this;

          /** @type {?} */
          var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            _this22._expandedData.next(_this22._treeFlattener.expandFlattenedNodes(_this22._flattenedData.value, _this22._treeControl));

            return _this22._expandedData.value;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);

          this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

          this._treeControl.dataNodes = this._flattenedData.value;
        }
      }]);

      return MatTreeFlatDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/data-source/nested-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Data source for nested tree.
     *
     * The data source for nested tree doesn't have to consider node flattener, or the way to expand
     * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
     * @template T
     */


    var MatTreeNestedDataSource = /*#__PURE__*/function (_angular_cdk_collecti2) {
      _inherits(MatTreeNestedDataSource, _angular_cdk_collecti2);

      var _super12 = _createSuper(MatTreeNestedDataSource);

      function MatTreeNestedDataSource() {
        var _this23;

        _classCallCheck(this, MatTreeNestedDataSource);

        _this23 = _super12.apply(this, arguments);
        _this23._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        return _this23;
      }
      /**
       * Data for the nested tree
       * @return {?}
       */


      _createClass(MatTreeNestedDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this24 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this24.data;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);
        }
      }]);

      return MatTreeNestedDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tree/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tree.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-ads-page-ads-page-module~pages-cabinet-page-cabinet-page-module-es5.js.map