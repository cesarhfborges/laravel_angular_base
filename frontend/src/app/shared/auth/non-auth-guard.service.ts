import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NonAuthGuard implements CanActivate, CanActivateChild {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log(state.url);
        if (!this.auth.check()) {
            return true;
        }
        this.router.navigate(['dashboard']);
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.auth.check()) {
            return true;
        }
        this.router.navigate(['dashboard']);
        return false;
    }
}
