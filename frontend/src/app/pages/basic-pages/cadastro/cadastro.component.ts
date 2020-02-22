import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/auth/auth.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(
      private router: Router,
      private auth: AuthService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
