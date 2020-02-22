import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule   
    ],
    declarations: [
        DashboardComponent
    ]
})
export class FullPagesModule { }
