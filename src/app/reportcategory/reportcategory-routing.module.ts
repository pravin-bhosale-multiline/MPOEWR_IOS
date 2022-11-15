import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportcategoryPage } from './reportcategory.page';

const routes: Routes = [
  {
    path: '',
    component: ReportcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportcategoryPageRoutingModule {}
