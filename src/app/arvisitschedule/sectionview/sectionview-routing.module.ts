import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionviewPage } from './sectionview.page';

const routes: Routes = [
  {
    path: '',
    component: SectionviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionviewPageRoutingModule {}
