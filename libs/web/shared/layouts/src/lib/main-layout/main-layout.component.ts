import { Component, OnInit } from '@angular/core';
import { UiService } from '@fueldash/web/core';

@Component({
  selector: 'fueldash-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  visible = false;
  responsiveGutter = UiService.responsiveGutter;

  constructor() { }

  ngOnInit(): void {
  }

  hideMenu() {
    this.visible = false;
  }
}
