import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { ReactiveRoutingModule } from './reactive-routing.module';

import { Form1Component } from './form-1/form-1.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [Form1Component]
})
export class ReactiveModule { }
