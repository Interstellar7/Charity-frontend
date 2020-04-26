(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ads-page-ads-page-module"],{

/***/ "./src/app/features/ads/ads.module.ts":
/*!********************************************!*\
  !*** ./src/app/features/ads/ads.module.ts ***!
  \********************************************/
/*! exports provided: AdsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsModule", function() { return AdsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories-tree/categories-tree.component */ "./src/app/features/ads/components/categories-tree/categories-tree.component.ts");
/* harmony import */ var _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ads-list/ads-list.component */ "./src/app/features/ads/components/ads-list/ads-list.component.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");









class AdsModule {
}
AdsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdsModule });
AdsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdsModule_Factory(t) { return new (t || AdsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsModule, { declarations: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"],
        _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]], exports: [_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"],
        _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"],
                    _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]
                ],
                exports: [
                    _components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"],
                    _components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/ads/components/ads-list/ads-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/ads/components/ads-list/ads-list.component.ts ***!
  \************************************************************************/
/*! exports provided: AdsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsListComponent", function() { return AdsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ad.service */ "./src/app/features/ads/services/ad.service.ts");



class AdsListComponent {
    constructor(adService) {
        this.adService = adService;
    }
    ngOnInit() {
    }
}
AdsListComponent.ɵfac = function AdsListComponent_Factory(t) { return new (t || AdsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"])); };
AdsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsListComponent, selectors: [["ads-list"]], decls: 2, vars: 0, template: function AdsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ads list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Fkcy9jb21wb25lbnRzL2Fkcy1saXN0L2Fkcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ads-list',
                templateUrl: './ads-list.component.html',
                styleUrls: ['./ads-list.component.css']
            }]
    }], function () { return [{ type: _services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/ads/components/categories-tree/categories-tree.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/ads/components/categories-tree/categories-tree.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, CategoriesTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTreeComponent", function() { return CategoriesTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/features/ads/services/category.service.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");










function CategoriesTreeComponent_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r99.name, " ");
} }
function CategoriesTreeComponent_mat_tree_node_4_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function CategoriesTreeComponent_mat_tree_node_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriesTreeComponent_mat_tree_node_4_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r100 = ctx.$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r100.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r98.treeControl.isExpanded(node_r100) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r100.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", node_r100.isLoading);
} }
class DynamicFlatNode {
    constructor(id, name, level = 1, expandable = false, isLoading = false) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
class DynamicDatabase {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.rootLevelNodes = [];
        this.children = [];
    }
    getRootNodes() {
        return this.rootLevelNodes;
    }
    getChildren() {
        return this.children;
    }
    initialData() {
        this.categoryService.getCategories().subscribe(categories => this.rootLevelNodes = categories);
    }
    requestChildren(parentId) {
        this.categoryService.getCategories('', String(parentId)).subscribe(categories => this.children = categories);
    }
}
DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"])); };
DynamicDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }]; }, null); })();
class DynamicDataSource {
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    get data() { return this.dataChange.value; }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.data));
    }
    disconnect(collectionViewer) { }
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    toggleNode(node, expand) {
        this._database.requestChildren(node.id);
        node.isLoading = true;
        setTimeout(() => {
            const children = this._database.getChildren().map(category => new DynamicFlatNode(category.id, category.name, node.level + 1, category.hasChildren));
            const index = this.data.indexOf(node);
            if (!children || index < 0) { // If no children, or cannot find the node, no op
                return;
            }
            if (expand) {
                this.data.splice(index + 1, 0, ...children);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}
class CategoriesTreeComponent {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        database.initialData();
        setTimeout(() => {
            this.dataSource.data = database.getRootNodes().map(category => new DynamicFlatNode(category.id, category.name, 0, category.hasChildren));
        }, 1000);
    }
    ngOnInit() {
    }
}
CategoriesTreeComponent.ɵfac = function CategoriesTreeComponent_Factory(t) { return new (t || CategoriesTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicDatabase)); };
CategoriesTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesTreeComponent, selectors: [["categories-tree"]], decls: 5, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "ads-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "ads-tree-progress-bar"]], template: function CategoriesTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Categories tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoriesTreeComponent_mat_tree_node_3_Template, 3, 1, "mat-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesTreeComponent_mat_tree_node_4_Template, 6, 4, "mat-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]], styles: [".ads-tree-progress-bar[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy10cmVlL2NhdGVnb3JpZXMtdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWRzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy10cmVlL2NhdGVnb3JpZXMtdHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkcy10cmVlLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'categories-tree',
                templateUrl: './categories-tree.component.html',
                styleUrls: ['./categories-tree.component.css']
            }]
    }], function () { return [{ type: DynamicDatabase }]; }, null); })();


/***/ }),

/***/ "./src/app/features/ads/services/ad.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/ads/services/ad.service.ts ***!
  \*****************************************************/
/*! exports provided: AdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdService", function() { return AdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AdService {
    constructor(http) {
        this.http = http;
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getAds(search) {
        return this.http.get(`/api/ads?search=${search}`);
    }
    getAdById(id) {
        return this.http.get(`/api/ads/${id}`);
    }
    createAd(createAd) {
        const data = {
            title: createAd.title,
            description: createAd.description,
            categoryId: createAd.categoryId
        };
        return this.http.post('/api/ads', JSON.stringify(data), this.headers);
    }
    updateAd(id, updateAd) {
        const data = {
            title: updateAd.title,
            description: updateAd.description
        };
        return this.http.put(`/api/ads/${id}`, JSON.stringify(data), this.headers);
    }
    deleteAdById(id) {
        return this.http.delete(`/api/ads/${id}`);
    }
}
AdService.ɵfac = function AdService_Factory(t) { return new (t || AdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdService, factory: AdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/ads/services/category.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/ads/services/category.service.ts ***!
  \***********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CategoryService {
    constructor(http) {
        this.http = http;
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getCategories(search, parentId) {
        if (!search) {
            search = '';
        }
        if (!parentId) {
            parentId = '';
        }
        return this.http.get(`/api/categories?search=${search}&parentId=${parentId}`);
    }
    getCategoryById(id) {
        return this.http.get(`/api/categories/${id}`);
    }
    createCategory(createCategory) {
        const data = {
            name: createCategory.name,
            parentId: createCategory.parentId
        };
        return this.http.post('/api/categories', JSON.stringify(data), this.headers);
    }
    updateCategory(id, updateCategory) {
        const data = {
            name: updateCategory.name
        };
        return this.http.put(`/api/categories/${id}`, JSON.stringify(data), this.headers);
    }
    deleteCategoryById(id) {
        return this.http.delete(`/api/categories/${id}`);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/ads-page/ads-page-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ads-page/ads-page-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AdsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageRoutingModule", function() { return AdsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ads_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ads-page.component */ "./src/app/pages/ads-page/ads-page.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _ads_page_component__WEBPACK_IMPORTED_MODULE_2__["AdsPageComponent"]
            }
        ]
    }
];
class AdsPageRoutingModule {
}
AdsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdsPageRoutingModule });
AdsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdsPageRoutingModule_Factory(t) { return new (t || AdsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/ads-page/ads-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/ads-page/ads-page.component.ts ***!
  \******************************************************/
/*! exports provided: AdsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageComponent", function() { return AdsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/ads/services/ad.service */ "./src/app/features/ads/services/ad.service.ts");
/* harmony import */ var _features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/ads/services/category.service */ "./src/app/features/ads/services/category.service.ts");
/* harmony import */ var _features_ads_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/ads/components/categories-tree/categories-tree.component */ "./src/app/features/ads/components/categories-tree/categories-tree.component.ts");
/* harmony import */ var _features_ads_components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/ads/components/ads-list/ads-list.component */ "./src/app/features/ads/components/ads-list/ads-list.component.ts");






class AdsPageComponent {
    constructor(adService, categoryService) {
        this.adService = adService;
        this.categoryService = categoryService;
    }
    ngOnInit() {
    }
}
AdsPageComponent.ɵfac = function AdsPageComponent_Factory(t) { return new (t || AdsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
AdsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsPageComponent, selectors: [["ads-page"]], decls: 5, vars: 0, consts: [[1, "content-wrapper"], [1, "categories-tree"], [1, "ads-list"]], template: function AdsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "categories-tree", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ads-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_features_ads_components_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesTreeComponent"], _features_ads_components_ads_list_ads_list_component__WEBPACK_IMPORTED_MODULE_4__["AdsListComponent"]], styles: [".content-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.categories-tree[_ngcontent-%COMP%] {\r\n  border: 2px solid blue;\r\n}\r\n\r\n.ads-list[_ngcontent-%COMP%] {\r\n  border: 2px solid green;\r\n  margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRzLXBhZ2UvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRzLXBhZ2UvYWRzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXRyZWUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbi5hZHMtbGlzdCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ads-page',
                templateUrl: './ads-page.component.html',
                styleUrls: ['./ads-page.component.css']
            }]
    }], function () { return [{ type: _features_ads_services_ad_service__WEBPACK_IMPORTED_MODULE_1__["AdService"] }, { type: _features_ads_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/ads-page/ads-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ads-page/ads-page.module.ts ***!
  \***************************************************/
/*! exports provided: AdsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageModule", function() { return AdsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ads-page-routing.module */ "./src/app/pages/ads-page/ads-page-routing.module.ts");
/* harmony import */ var _ads_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ads-page.component */ "./src/app/pages/ads-page/ads-page.component.ts");
/* harmony import */ var _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/ads/ads.module */ "./src/app/features/ads/ads.module.ts");






class AdsPageModule {
}
AdsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdsPageModule });
AdsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdsPageModule_Factory(t) { return new (t || AdsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"],
            _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdsPageModule, { declarations: [_ads_page_component__WEBPACK_IMPORTED_MODULE_3__["AdsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"],
        _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ads_page_component__WEBPACK_IMPORTED_MODULE_3__["AdsPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ads_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdsPageRoutingModule"],
                    _features_ads_ads_module__WEBPACK_IMPORTED_MODULE_4__["AdsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-ads-page-ads-page-module-es2015.js.map