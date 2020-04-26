export interface CategoryModel {
  id: number;
  name: string;
  parentId: number;
  points: number;
  hasChildren: boolean;
}

export interface CreateCategoryModel {
  name: string;
  parentId: number;
}

export interface UpdateCategoryModel {
  name: string;
}
