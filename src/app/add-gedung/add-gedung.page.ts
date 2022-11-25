import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gedung',
  templateUrl: './add-gedung.page.html',
  styleUrls: ['./add-gedung.page.scss'],
})

export class AddGedungPage implements OnInit {
  private storageService: StorageService;
  kodeGedung: any;
  namaGedung: any;
  kapasitas: any;
  router: any;

  constructor(storageService: StorageService, router: Router) { 
    this.storageService = storageService;
    this.router = router;
  }

  ngOnInit() {
  }

  logging(Message: string) {
    console.log(Message);
  }

  addData(){
    this.storageService.store(this.kodeGedung?this.kodeGedung:'', {
      kodeGedung: this.kodeGedung?this.kodeGedung:'', 
      namaGedung: this.namaGedung?this.namaGedung:'',
      kapasitas: this.kapasitas?this.kapasitas:0
    }).then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}