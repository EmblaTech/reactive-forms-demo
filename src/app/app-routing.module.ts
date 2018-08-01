import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: './template/template.module#TemplateModule'
  },
  {
    path: 'reactive',
    loadChildren: './reactive/reactive.module#ReactiveModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
