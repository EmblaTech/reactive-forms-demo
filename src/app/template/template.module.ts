import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { TemplateRoutingModule } from './template-routing.module';

import { Form1Component } from './form-1/form-1.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,

    FormsModule
  ],
  declarations: [Form1Component]
})
export class TemplateModule { }
