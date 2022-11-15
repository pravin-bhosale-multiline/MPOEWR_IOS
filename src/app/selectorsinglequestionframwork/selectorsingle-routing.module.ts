import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorsinglePage } from './selectorsingle.page';

const routes: Routes = [
  {
    path: '',
    component: SelectorsinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectorsinglePageRoutingModule {}
