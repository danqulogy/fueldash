import { Component, OnInit } from '@angular/core';
import { UiService } from '@metrotenants/web/core';

@Component({
  selector: 'metrotenants-main-layout',
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
