import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'metrotenants-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() showSettings: boolean = false;
  @Input() showConfig: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
