import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BasicPagesRoutingModule } from "./basic-pages-routing.module";
import { LoginComponent } from './login/login.component';
import {CadastroComponent} from "./cadastro/cadastro.component";


@NgModule({
    imports: [
        CommonModule,
        BasicPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        CadastroComponent
    ]
})
export class BasicPagesModule { }
