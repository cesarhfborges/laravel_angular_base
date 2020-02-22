import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CadastroComponent} from "./cadastro/cadastro.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'cadastro',
                component: CadastroComponent,
                data: {
                    title: 'Cadastro'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BasicPagesRoutingModule {
}
