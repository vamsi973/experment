import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulenameRoutingModule } from './modulename-routing.module';
import { ModulenameComponent } from './modulename.component';


@NgModule({
  declarations: [
    ModulenameComponent
  ],
  imports: [
    CommonModule,
    ModulenameRoutingModule
  ]
})
export class ModulenameModule { }
