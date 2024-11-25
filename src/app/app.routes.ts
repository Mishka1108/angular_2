import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '', component:ProductComponent
    },
    {
        path: 'product', component:ProductComponent
    },
    {
        path: 'profile', component:ProfileComponent
    },
    {
        path: 'about' , component:AboutComponent
    }
];
