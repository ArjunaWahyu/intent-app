import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, iGedung, Message } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message!: Message;
  public gedung!: iGedung;
  router: any;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    router: Router
  ) { this.router = router; }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // this.message = this.data.getMessageById(parseInt(id, 10));
    this.data.getGedungById(id).then(gedung => {
      this.gedung = gedung;
    });
  }

  goToAddRuang(){
    console.log("goToAddRuang");
    this.router.navigate(['/add-ruang/'+this.gedung.kodeGedung]);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
