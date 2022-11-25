import { Component, Input, OnInit } from '@angular/core';
import { iRuang } from '../services/data.service';

@Component({
  selector: 'app-list-ruang',
  templateUrl: './list-ruang.component.html',
  styleUrls: ['./list-ruang.component.scss'],
})
export class ListRuangComponent implements OnInit {
  @Input() ruang?: iRuang;

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

}
