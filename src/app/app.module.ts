import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Http } from './http.interceptor';
import { OneComponent } from './one/one.component';

import { AlertComponent } from './components/alert/alert.component';
import { RedirectComponent } from './redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    AlertComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
