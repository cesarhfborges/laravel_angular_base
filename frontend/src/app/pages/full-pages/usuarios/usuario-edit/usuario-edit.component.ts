import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../../shared/services/user.service";

@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

    usuario = [];

    constructor(
        private user: UserService,
        private router: ActivatedRoute,
    ) {
        this.user.getUser(this.router.snapshot.paramMap.get('id')).subscribe(
            (response) => {
                console.log(response.data);
                this.usuario = response.data;
            },
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    console.log(errorResponse);
                }
            }
        );
    }

    ngOnInit() {
    }

}
