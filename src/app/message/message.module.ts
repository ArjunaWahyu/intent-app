import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageComponentModule {

}
