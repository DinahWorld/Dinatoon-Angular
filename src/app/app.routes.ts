import {Routes} from '@angular/router';
import {DinatoonDetailComponent} from "./features/dinatoon-detail/dinatoon-detail.component";
import {HomeComponent} from "./features/home/home.component";
import {LoginRegisterComponent} from "./features/login-register/login-register.component";
import {SearchComponent} from "./features/search/search.component";

export const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'dinatoon/:id', component: DinatoonDetailComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login-register', component: LoginRegisterComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];