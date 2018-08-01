import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';

const routes: Routes = [
  {
    path: '1',
    component: Form1Component
  },
  {
    path: '2',
    component: Form2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
