import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, iGedung, Message } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
[x: string]: any;
  router: any;
  private storageService: any;
  private storage: any;

  gedungs: iGedung[] = [];
  constructor(private data: DataService, router: Router, storageService: StorageService, storage: Storage){ 
    this.router = router;
    this.storageService = storageService;
    this.storage = storage;
  }

  async ngOnInit(): Promise<void> {
    this.storage.create();
    // this.getListGedungs();
  }

  ionViewWillEnter() {
    this.getListGedungs();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  // getGedungs(): Gedung[] {
  //   return this.data.getGedungs();
  // }

  // getListGedungs(){
  //   let gedungs: Promise<Gedung> = this.storageService.getAllGedung();
  //   console.log(gedungs);
  // }

  // getListGedungs(){
  //   this.storage.forEach((value: any, key: any, index: any) => {
  //     console.log(value);
  //   });
  // }

  async getListGedungs(){
    let keys = await this.storage.keys();
    // console.log(keys);
    this.gedungs = [];
    keys.forEach(async (key: any) => {
      let value: iGedung = await this.storage.get(key);
      if(value.namaGedung != null){
        this.gedungs.push(value);
        console.log(value);
      }
    });
  }

  goToAddGedung() {
    this.router.navigate(['/add-gedung']);
  }
}
