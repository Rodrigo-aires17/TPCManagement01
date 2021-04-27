import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form03Page } from './form03.page';

const routes: Routes = [
  {
    path: '',
    component: Form03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form03PageRoutingModule {}
