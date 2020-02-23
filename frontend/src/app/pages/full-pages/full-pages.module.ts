import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FullPagesRoutingModule,
        Ng2SmartTableModule,
        NgSelectModule,
        FormsModule,
        NgxDatatableModule,
        NgbPaginationModule,
        NgbDatepickerModule
    ],
    declarations: [
        DashboardComponent,
        UsuarioListComponent,
        UsuarioEditComponent,
    ]
})
export class FullPagesModule { }
