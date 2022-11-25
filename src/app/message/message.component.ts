import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { iGedung, Message } from '../services/data.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() gedung?: iGedung;
  @Input() message?: Message;

  private storageService: StorageService;
  private router: Router;
  
  constructor(storageService: StorageService, router: Router) {
    this.storageService = storageService;
    this.router = router;
  }

  deleteGedung(id: string) {
    this.storageService.remove(id);
    this.router.navigate(['/home']);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
