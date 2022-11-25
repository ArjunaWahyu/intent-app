import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-add-ruang',
  templateUrl: './add-ruang.page.html',
  styleUrls: ['./add-ruang.page.scss'],
})
export class AddRuangPage implements OnInit {
  private storageService: StorageService;
  private toastController: ToastController;
  kodeRuang: any;
  namaRuang: any;
  kapasitas: any;
  kodeGedung: any;
  router: any;

  constructor(
    storageService: StorageService, 
    router: Router,
    private activatedRoute: ActivatedRoute,
    toastController: ToastController
    ) { 
    this.storageService = storageService;
    this.router = router;
    this.toastController = toastController;
  }

  ngOnInit() {
    this.kodeGedung = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  addData () {
    if(this.kodeRuang && this.namaRuang && this.kapasitas){
      this.storageService.store(this.kodeRuang?this.kodeRuang:'', {
        kodeRuang: this.kodeRuang?this.kodeRuang:'', 
        namaRuang: this.namaRuang?this.namaRuang:'',
        kapasitas: this.kapasitas?this.kapasitas:0,
        kodeGedung: this.kodeGedung?this.kodeGedung:''
      }).then((res) => {
        console.log(res);
        this.router.navigate(['/view-message/'+this.kodeGedung]);
      });
    }else{
      // add toast
      this.presentToast('bottom');
    }
  }
}
