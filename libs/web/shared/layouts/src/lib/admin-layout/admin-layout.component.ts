import { Component, OnInit } from '@angular/core';
import { UiService } from '@metrotenants/web/core';

@Component({
  selector: 'metrotenants-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  visible = false;
  responsiveGutter = UiService.responsiveGutter;

  constructor() { }

  ngOnInit(): void {
  }

  hideMenu() {
    this.visible = false;
  }

}
