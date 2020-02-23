import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsuarioListComponent} from "./usuarios/usuario-list/usuario-list.component";
import {UsuarioEditComponent} from "./usuarios/usuario-edit/usuario-edit.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'DashBoard'
        }
      },
      {
        path: 'usuarios',
        component: UsuarioListComponent,
        data: {
          title: 'Usuarios'
        }
      },
      {
        path: 'usuarios/:id',
        component: UsuarioEditComponent,
        data: {
          title: 'Usuarios'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
