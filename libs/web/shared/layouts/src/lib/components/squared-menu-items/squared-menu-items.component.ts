import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metrotenants-squared-menu-items',
  templateUrl: './squared-menu-items.component.html',
  styleUrls: ['./squared-menu-items.component.scss']
})
export class SquaredMenuItemsComponent {

  @Input() label = ''
  @Input() iconUrl=''
  @Input() link = '#'


}
