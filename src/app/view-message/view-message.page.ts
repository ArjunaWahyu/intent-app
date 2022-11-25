import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, iGedung, iRuang, Message } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message!: Message;
  public gedung!: iGedung;
  router: any;

  private storageService: any;
  private storage: any;
  private id: any;

  ruangs: iRuang[] = [];
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    router: Router,
    storageService: StorageService,
    storage: Storage
  ) {
    this.router = router;
    this.storageService = storageService;
    this.storage = storage;
  }

  ngOnInit() {
    this.storage.create();
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  
  ionViewWillEnter() {
    this.data.getGedungById(this.id).then(gedung => {
      this.gedung = gedung;
    });
    this.getListRuangs();
  }

  ionViewDidEnter() {
    if (!this.gedung) {
      this.router.navigate(['/home']);
    }
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  goToAddRuang() {
    console.log("goToAddRuang");
    this.router.navigate(['/add-ruang/' + this.gedung.kodeGedung]);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async getListRuangs() {
    let keys = await this.storage.keys();
    this.ruangs = []
    keys.forEach((key: any) => {
      console.log(key);
        console.log(key);
        this.storage.get(key).then((ruang: iRuang) => {
          console.log(ruang);
          if (ruang.namaRuang != null && ruang.kodeGedung == this.id) {
            this.ruangs.push(ruang);
            console.log("ruang "+ruang.namaRuang);
          }
        });
    });
  }
}
