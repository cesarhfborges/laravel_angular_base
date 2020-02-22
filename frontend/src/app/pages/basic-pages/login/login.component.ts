import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorCredentials = false;

    constructor(
        private router: Router,
        private auth: AuthService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl('cesarhfborges@gmail.com', [Validators.required, Validators.email]),
            'password': new FormControl('password', [Validators.required, Validators.minLength(5)]),
            'remember_me': new FormControl(false, [])
        });
    }

    onSubmit() {
        this.auth.login(this.loginForm.value).subscribe(
            (response) => {
                this.router.navigate(['dashboard']);
            },
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    this.errorCredentials = true;
                }
            }
        );
    }
}
