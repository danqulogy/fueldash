import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'metrotenants-properties-scroll-list',
  templateUrl: './properties-scroll-list.component.html',
  styleUrls: ['./properties-scroll-list.component.scss']
})
export class PropertiesScrollListComponent implements OnInit {

  @Input() listTitle!: string;
  @Input() listSubtitle!: string;
  @Input() viewAllLink!: string;
  @Input() showSettings!: boolean;

  @ViewChild('dragScrollComponent', { static: true })
  dragScrollComponentEl!: DragScrollComponent;

  displayLeftArrow = false;
  displayRightArrow = true;

  constructor() {
  }

  ngOnInit() {

  }

  onReachesLeftBound(event: boolean) {
    if (event) {
      this.displayRightArrow = true;
      this.displayLeftArrow = false;
    }
  }

  onReachesRightBound(event: boolean) {
    if (event) {
      this.displayRightArrow = false;
      this.displayLeftArrow = true;
    }
  }

  moveLeft() {
    this.dragScrollComponentEl.moveLeft();
  }

  moveRight() {
    this.dragScrollComponentEl.moveRight();
  }

}
