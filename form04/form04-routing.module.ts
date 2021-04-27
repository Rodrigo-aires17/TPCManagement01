import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form04Page } from './form04.page';

const routes: Routes = [
  {
    path: '',
    component: Form04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form04PageRoutingModule {}
