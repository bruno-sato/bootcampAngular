import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LanguagesComponent } from './languages/languages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';

export const APP_ROUTES: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthService] },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent, canActivate: [AuthService] },
    { path: 'languages', component: LanguagesComponent, canActivate: [AuthService] },
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];