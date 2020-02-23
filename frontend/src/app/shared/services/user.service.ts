import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  listUsers(): Observable<any> {
    return this.http.get<any>(`${environment.config.urlApi}/usuarios`, this.httpOptions).do(data => {
      if (data.status === 200){
        return data;
      }
      return { error: 'Error' };
    });
  }
  getUser(user: String): Observable<any> {
    return this.http.get<any>(`${environment.config.urlApi}/usuarios/${user}`, this.httpOptions).do(data => {
      if (data.status === 200){
        return data;
      }
      return { error: 'Error' };
    });
  }


}
