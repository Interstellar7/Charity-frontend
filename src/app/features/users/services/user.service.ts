import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateUserModel, UpdateUserModel, UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`/api/users`);
  }

  createUser(createUser: CreateUserModel): Observable<UserModel> {
    const data = {
      username: createUser.username,
      password: createUser.password,
      personalInfo: {
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        email: createUser.email
      }
    };

    return this.http.post<UserModel>('/api/users', JSON.stringify(data), this.headers);
  }

  updateUser(id: string, updateUser: UpdateUserModel): Observable<UserModel> {
    const data = {
      personalInfo: {
        firstName: updateUser.firstName,
        lastName: updateUser.lastName,
        email: updateUser.email
      }
    };

    return this.http.put<UserModel>(`/api/users/${id}`, JSON.stringify(data), this.headers);
  }
}
