import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../interfaces/user.model";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        })
    };

    httpOptionsLogged = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Bearer '+localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient, private router: Router) { }

    check(): boolean {
        return !!localStorage.getItem('user');
    }

    login(credentials: {email: string, password: string}): Observable<boolean> {
        return this.http.post<any>(`${environment.config.urlApi}/auth/login`, credentials, this.httpOptions).do(data => {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
            });
    }

    cadastro(credentials: {nome: string, email: string, password: string}): Observable<boolean> {
        return this.http.post<any>(`${environment.config.urlApi}/auth/cadastro`, credentials, this.httpOptions).do(data => {
            console.log(data);
            // localStorage.setItem('token', data.access_token);
            // localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        });
    }

    logout(): void {
        this.http.get(`${environment.config.urlApi}/auth/logout`, this.httpOptionsLogged).subscribe(response => {
            console.log(response);
            localStorage.clear();
            this.router.navigate(['login']);
        });
    }

    getUser(): User {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    }

    setUser(): Promise<boolean> {
        return this.http.get<any>(`${environment.config.urlApi}/auth/me`).toPromise()
            .then(data => {
                if (data.user) {
                    localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                    return true;
                }
                return false;
            });
    }
}
