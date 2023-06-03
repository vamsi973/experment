import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeComponent } from './qr-code.component';
import { QrGenerateComponent } from './qr-generate/qr-generate.component';
import { AuthguadrdGuard } from '../_helper/authguadrd.guard';

const routes: Routes = [
  // { path: '', component: QrCodeComponent },
  { path: '', component: QrGenerateComponent , canActivate: [AuthguadrdGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrCodeRoutingModule { }
