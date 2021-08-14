import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'metrotenants-featured-properties-slider',
  templateUrl: './featured-properties-slider.component.html',
  styleUrls: ['./featured-properties-slider.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FeaturedPropertiesSliderComponent implements OnInit {



  featuredProperties = [1, 2, 3, 4, 5];
  sliderItemChangeTimer$ = interval(10000).pipe(take(this.featuredProperties.length));

  @ViewChild('dragScrollComponent', { static: true })
  dragScrollComponentEl!: DragScrollComponent;
  currentIndex = 0;
  private tickerSubject = new Subject<boolean>();

  constructor() {

  }

  ngOnInit() {
    this.tick();
  }

  tick() {
    const tickerSubscription = this.sliderItemChangeTimer$.subscribe(data => {
      this.dragScrollComponentEl.moveTo(data);
      this.currentIndex = this.dragScrollComponentEl.currIndex;
      // console.log(data);
    }, null, () => {
      tickerSubscription.remove(tickerSubscription);
      this.tickerSubject.next();
      this.dragScrollComponentEl.currIndex = -1;
      this.dragScrollComponentEl.dsInitialized.emit();
      // console.log('next call...');
      this.tick();
    });
  }

  showItem(index: number) {
    this.dragScrollComponentEl.moveTo(index);
    this.currentIndex = index;
  }


}
