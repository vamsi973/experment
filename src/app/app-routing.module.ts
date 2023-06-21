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
import { TestComponent } from './test/test.component';
import { AlertComponent } from './components/alert/alert.component';
import { RedirectComponent } from './redirect/redirect.component';

const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);
const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthguadrdGuard] },
  { path: 'r/:randomString', component: RedirectComponent },
  { path: 'users', loadChildren: usersRoutes, canActivate: [AuthguadrdGuard] },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'test', component: TestComponent },
  
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
