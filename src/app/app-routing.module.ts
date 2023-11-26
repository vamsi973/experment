import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguadrdGuard } from './_helper/authguadrd.guard';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OneComponent } from './one/one.component';
import { RedirectComponent } from './redirect/redirect.component';


const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'r/:randomString', component: RedirectComponent },
  { path: 'users', loadChildren: usersRoutes, canActivate: [AuthguadrdGuard] },
  { path: 'one', component: OneComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'qrCode', loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodeModule), },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
