import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template1Component } from './template-1/template-1.component';

const routes: Routes = [
  { path: 'template-1', component: Template1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
