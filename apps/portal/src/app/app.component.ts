import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'fueldash-root',
  template: `
    <div class="bg-yellow-600x">
      <ng-progress></ng-progress>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private authService: AuthenticationService,
    private titleService: Title
  ) {}

  ngAfterViewInit(): void {
    console.log('ng after view init...')
  }

  ngOnInit() {
    // set page title from router data variable
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          // this.authService.setInterruptedUrl(this.router.url)
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) =>
        this.titleService.setTitle('Meetenant | ' + event['title'])
      );
  }
}
