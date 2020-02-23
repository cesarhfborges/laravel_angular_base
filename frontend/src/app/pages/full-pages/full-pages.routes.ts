import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer for pages like dashboard, charts and etc.

export const Full_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./full-pages.module').then(m => m.FullPagesModule)
    }
];
