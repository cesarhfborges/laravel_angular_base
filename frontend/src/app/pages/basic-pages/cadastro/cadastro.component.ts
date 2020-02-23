import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    cadastroFrom: FormGroup;

  constructor(
      private router: Router,
      private auth: AuthService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cadastroFrom = new FormGroup({
      'nome': new FormControl('teste cadastro', [Validators.required, Validators.minLength(5)]),
      'sobrenome': new FormControl('Sobrenome cadastro', [Validators.required, Validators.minLength(5)]),
      'email': new FormControl('cesarhfborges@gmail.com', [Validators.required, Validators.email]),
      'password': new FormControl('123456789', [Validators.required, Validators.minLength(5)]),
      'password_confirmation': new FormControl('123456789', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    this.auth.cadastro(this.cadastroFrom.value).subscribe((response) => {
          this.router.navigate(['login']);
        },
        (errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === 401) {
            // this.errorCredentials = true;
          }
        }
        );
  }
}
