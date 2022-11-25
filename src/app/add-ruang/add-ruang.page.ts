import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-add-ruang',
  templateUrl: './add-ruang.page.html',
  styleUrls: ['./add-ruang.page.scss'],
})
export class AddRuangPage implements OnInit {
  private storageService: StorageService;
  kodeRuang: any;
  namaRuang: any;
  kapasitas: any;
  kodeGedung: any;
  router: any;

  constructor(
    storageService: StorageService, 
    router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
    this.storageService = storageService;
    this.router = router;
  }

  ngOnInit() {
    this.kodeGedung = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  addData () {
    this.storageService.store(this.kodeRuang?this.kodeRuang:'', {
      kodeRuang: this.kodeRuang?this.kodeRuang:'', 
      namaRuang: this.namaRuang?this.namaRuang:'',
      kapasitas: this.kapasitas?this.kapasitas:0,
      kodeGedung: this.kodeGedung?this.kodeGedung:''
    }).then((res) => {
      console.log(res);
      this.router.navigate(['/message']);
    });
  }

}
