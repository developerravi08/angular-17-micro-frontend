import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },

    // Add this route:
    {
        path: 'micro1',
        loadComponent: () => loadRemoteModule('ng-17-Micro1', './Component').then((m) => m.AppComponent),
    },

    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
