import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AuthguadrdGuard } from './_helper/authguadrd.guard'
import { HomepageComponent } from './homepage/homepage.component';
const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);
const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthguadrdGuard] },
  { path: 'users', loadChildren: usersRoutes, canActivate: [AuthguadrdGuard] },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'module', loadChildren: () => import('./modulename/modulename.module').then(m => m.ModulenameModule) },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
