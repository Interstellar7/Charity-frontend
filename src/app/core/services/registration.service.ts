import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationModel} from "../models/registration.model";
import {CurrentUser} from "../models/current-user.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(data: RegistrationModel): Observable<CurrentUser> {
    const params = {
      username: data.username,
      password: data.password,
      personalInfo: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<CurrentUser>('/api/register', JSON.stringify(params), {
      headers: headers
    });
  }
}
