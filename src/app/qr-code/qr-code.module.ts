import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrCodeRoutingModule } from './qr-code-routing.module';
import { QrCodeComponent } from './qr-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { QrGenerateComponent } from './qr-generate/qr-generate.component';
import { QrlistComponent } from './qrlist/qrlist.component';


@NgModule({
  declarations: [
    QrCodeComponent, QrGenerateComponent, QrlistComponent
  ],
  imports: [
    CommonModule,SharedModule,
    QrCodeRoutingModule,
   
  ]
})
export class QrCodeModule { }
