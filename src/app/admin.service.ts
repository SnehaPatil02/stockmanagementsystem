import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addManager(managerBean): Observable<any> {
    return this.http.post<any>(`${this.url}/add-manager`, managerBean);
  }

  login(user): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user);
  }
}
