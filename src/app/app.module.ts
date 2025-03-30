import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './accounts/register/register.component';
import { LoginComponent } from './accounts/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Http } from './http.interceptor';
import { TestComponent } from './test/test.component';
import { AlertComponent } from './components/alert/alert.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    TestComponent,
    AlertComponent,
    RedirectComponent,
    ChatbotComponent,
    ChatMessageComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Add this line
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
