import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';



@NgModule({
  declarations: [
    ShortenUrlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UrlShortenerModule { }
