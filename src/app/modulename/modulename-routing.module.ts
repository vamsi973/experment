import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulenameComponent } from './modulename.component';
import { QrGenerateComponent } from '../qr-code/qr-generate/qr-generate.component';

const routes: Routes = [
  // { path: '', component: ModulenameComponent },
  { path: '', component: QrGenerateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulenameRoutingModule { }
