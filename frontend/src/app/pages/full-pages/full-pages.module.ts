import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        Ng2SmartTableModule,
        NgSelectModule,
        FormsModule,
        NgxDatatableModule,
        NgbPaginationModule
    ],
    declarations: [
        DashboardComponent,
        UsuarioListComponent,
    ]
})
export class FullPagesModule { }
