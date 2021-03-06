import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { ReactiveRoutingModule } from './reactive-routing.module';

import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';
import { Form3Component } from './form-3/form-3.component';
import { Form4Component } from './form-4/form-4.component';
import { Form5Component } from './form-5/form-5.component';
import { Form6Component } from './form-6/form-6.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [Form1Component, Form2Component, Form3Component, Form4Component, Form5Component, Form6Component]
})
export class ReactiveModule { }
