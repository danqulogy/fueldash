import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebSharedExceptionsModule } from '@metrotenants/web/shared/exceptions';
import { MainLayoutComponent, WebSharedLayoutsModule } from '@metrotenants/web/shared/layouts';
import { WebMeetenantHomeModule } from '@metrotenants/web/meetenant/home';
import { WebAdminDashboardModule } from '@metrotenants/web/admin/dashboard';
import { WebAdminPropertiesModule } from '@metrotenants/web/admin/properties';

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
    WebAdminDashboardModule,
    WebAdminPropertiesModule
  ],
  // providers: [RoutesPreloader],
  // declarations: [...COMPONENTS],
  exports: [RouterModule, WebSharedExceptionsModule],
})
export class RoutesRoutingModule{

}
