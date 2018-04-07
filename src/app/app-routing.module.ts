import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: '**', redirectTo: '/shopping-list', pathMatch: 'full'  }
];