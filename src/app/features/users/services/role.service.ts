import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UpdateUserRoleModel} from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  updateRoles(id: string, updateUserRole: UpdateUserRoleModel): Observable<void> {
    const data = {
      roles: updateUserRole.roles
    };

    return this.http.put<void>(`/api/users/${id}/roles`, JSON.stringify(data), this.headers);
  }
}
