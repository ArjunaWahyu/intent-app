import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRuangPageRoutingModule } from './add-ruang-routing.module';

import { AddRuangPage } from './add-ruang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRuangPageRoutingModule
  ],
  declarations: [AddRuangPage]
})
export class AddRuangPageModule {}
