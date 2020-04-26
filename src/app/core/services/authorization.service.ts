import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CurrentUser} from "../models/current-user.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthorizationModel} from "../models/authorization.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  loadProfile(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`/api/profile`);
  }

  login(data: AuthorizationModel): Observable<void> {
    const params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password
      }
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<void>('/auth/login', params.toString(), {
      headers: headers
    });
  }

  logout(): Observable<void> {
    return this.http.post<void>('/auth/logout', null);
  }
}
