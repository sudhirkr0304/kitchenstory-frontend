import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  private baseUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }


  adminLogin(username: any, password: any): Observable<any> {
    const body = {
      username: username,
      password: password
    };

    return this.http.post(`${this.baseUrl}/login`, body);
  }
  
  changePassword(username: any, password: any): Observable<any> {
    const body = {
      username: username,
      password: password
    };

    return this.http.post(`${this.baseUrl}/changepassword`, body);
  }
}
