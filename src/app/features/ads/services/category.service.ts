import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateCategoryModel, UpdateCategoryModel, CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCategories(search?: string, parentId?: string ): Observable<CategoryModel[]> {
    if(!search){ search = '' }
    if(!parentId){ parentId = '' }
    return this.http.get<CategoryModel[]>(`/api/categories?search=${search}&parentId=${parentId}`);
  }

  getCategoryById(id: number): Observable<CategoryModel> {
      return this.http.get<CategoryModel>(`/api/categories/${id}`);
    }

  createCategory(createCategory: CreateCategoryModel): Observable<CategoryModel> {
    const data = {
      name: createCategory.name,
      parentId: createCategory.parentId
    };

    return this.http.post<CategoryModel>('/api/categories', JSON.stringify(data), this.headers);
  }

  updateCategory(id: number, updateCategory: UpdateCategoryModel): Observable<CategoryModel> {
    const data = {
      name: updateCategory.name
    };

    return this.http.put<CategoryModel>(`/api/categories/${id}`, JSON.stringify(data), this.headers);
  }

  deleteCategoryById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/categories/${id}`);
  }
}
