import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FullLayoutComponent} from "./layouts/full/full-layout.component";
import {ContentLayoutComponent} from "./layouts/content/content-layout.component";

import {AuthGuard} from './shared/auth/auth-guard.service';
import {CONTENT_ROUTES} from "./pages/basic-pages/basic-pages.routes";
import {Full_ROUTES} from "./pages/full-pages/full-pages.routes";
import {NonAuthGuard} from "./shared/auth/non-auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ContentLayoutComponent,
        data: {title: 'content Views'},
        children: CONTENT_ROUTES,
        canActivate: [NonAuthGuard]
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {title: 'full Views'},
        children: Full_ROUTES,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
