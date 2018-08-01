import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';
import { Form3Component } from './form-3/form-3.component';
import { Form4Component } from './form-4/form-4.component';
import { Form5Component } from './form-5/form-5.component';
import { Form6Component } from './form-6/form-6.component';

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
  },
  {
    path: '5',
    component: Form5Component
  },
  {
    path: '6',
    component: Form6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
