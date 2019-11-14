import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ // 打开
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({ // 关闭
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => close', [
        animate('1s ease-out')
      ]),
      transition('close => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  trggle() {
    this.isOpen = !this.isOpen;
  }

}
