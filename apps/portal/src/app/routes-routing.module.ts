import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebSharedExceptionsModule } from '@fueldash/web/shared/exceptions';
import { MainLayoutComponent, WebSharedLayoutsModule } from '@fueldash/web/shared/layouts';
import { WebPortalDashboardModule } from '@fueldash/web/portal/dashboard';

const COMPONENTS = [];

const routes:Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard/overview', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
      useHash: true,
      // preloadingStrategy: RoutesPreloader,
    }),
    WebSharedExceptionsModule,
    WebSharedLayoutsModule,
    WebPortalDashboardModule
  ],
  // providers: [RoutesPreloader],
  // declarations: [...COMPONENTS],
  exports: [RouterModule, WebSharedExceptionsModule],
})
export class RoutesRoutingModule{

}
