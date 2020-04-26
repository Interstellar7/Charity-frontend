import {Component, OnInit, Injectable} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoryModel} from '../../models/category.model';


export class DynamicFlatNode {
  constructor(public id: number, public name: string, public level = 1, public expandable = false,
              public isLoading = false) {}
}

@Injectable({providedIn: 'root'})
export class DynamicDatabase {

  rootLevelNodes: CategoryModel[]=[];
  children: CategoryModel[]=[];

  constructor(private categoryService: CategoryService) {
  }

  getRootNodes(): CategoryModel[] {
    return this.rootLevelNodes;
  }

  getChildren(): CategoryModel[] {
    return this.children;
  }

  initialData() {
    this.categoryService.getCategories().subscribe(categories => this.rootLevelNodes = categories);
  }

  requestChildren(parentId: number) {
    this.categoryService.getCategories('', String(parentId)).subscribe(categories => this.children = categories);
  }
}

export class DynamicDataSource implements DataSource<DynamicFlatNode> {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _database: DynamicDatabase ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean) {
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
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}

@Component({
  selector: 'categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.css']
})
export class CategoriesTreeComponent implements OnInit {
  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    database.initialData();
    setTimeout(() => {
      this.dataSource.data = database.getRootNodes().map(category => new DynamicFlatNode(category.id, category.name, 0, category.hasChildren))
    },1000);
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit(): void {

  }
}
