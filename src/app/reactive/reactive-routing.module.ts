import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';
import { Form3Component } from './form-3/form-3.component';
import { Form4Component } from './form-4/form-4.component';

const routes: Routes = [
  {
    path: '1',
    component: Form1Component
  },
  {
    path: '2',
    component: Form2Component
  },
  {
    path: '3',
    component: Form3Component
  },
  {
    path: '4',
    component: Form4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
