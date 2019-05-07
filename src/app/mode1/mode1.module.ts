import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mode1RoutingModule } from './mode1-routing.module';
import { Mode1ListComponent } from './mode1-list/mode1-list.component';

@NgModule({
  declarations: [Mode1ListComponent],
  imports: [
    CommonModule,
    Mode1RoutingModule
  ]
})
export class Mode1Module { }
