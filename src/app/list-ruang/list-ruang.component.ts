import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iRuang } from '../services/data.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-list-ruang',
  templateUrl: './list-ruang.component.html',
  styleUrls: ['./list-ruang.component.scss'],
})
export class ListRuangComponent implements OnInit {
  @Input() ruang?: iRuang;

  private storageService: StorageService;
  private router: Router;

  constructor(storageService: StorageService, router: Router) {
    this.storageService = storageService;
    this.router = router;
  }

  ngOnInit() {}

  deleteRuang(id: string, kodeGedung: string) {
    this.storageService.remove(id);
    this.router.navigate(['/view-message/'+kodeGedung]);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

}