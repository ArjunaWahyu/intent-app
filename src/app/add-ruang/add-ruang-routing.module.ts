import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRuangPage } from './add-ruang.page';

const routes: Routes = [
  {
    path: '',
    component: AddRuangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRuangPageRoutingModule {}
