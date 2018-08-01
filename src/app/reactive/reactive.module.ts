import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { ReactiveRoutingModule } from './reactive-routing.module';

import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [Form1Component, Form2Component]
})
export class ReactiveModule { }
