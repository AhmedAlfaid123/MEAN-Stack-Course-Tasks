import { Routes } from '@angular/router';
import { SmartProducts } from './features/smart-products/smart-products';
import { Home } from './features/home/home'
export const routes: Routes = [
    { path: "home", component: Home },
    { path: "smart-products", component: SmartProducts }
];
