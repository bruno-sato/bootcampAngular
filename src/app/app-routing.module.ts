import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes } from '@angular/router';
import { AuthService } from './auth.service';

export const APP_ROUTES: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthService] },
    { path: 'about', component: AboutComponent, canActivate: [AuthService] },
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: '**', redirectTo: '/shopping-list', pathMatch: 'full'  }
];