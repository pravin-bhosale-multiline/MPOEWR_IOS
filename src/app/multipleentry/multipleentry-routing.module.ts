import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleentryPage } from './multipleentry.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleentryPageRoutingModule {}
