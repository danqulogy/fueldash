import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressModule } from 'ngx-progressbar';
import { MomentModule } from 'ngx-moment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { en_US as localeZorro, NZ_I18N } from "ng-zorro-antd/i18n";
import { default as localeEn } from "@angular/common/locales/en";
import { IconDefinition } from "@ant-design/icons-angular";
import { WINDOW_PROVIDERS } from './services/windows.service';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { AUTH_SERVICE, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI } from 'ngx-auth';
import { AuthenticationService, factory } from './auth';

const LOCALE_PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'en' },
  { provide: NZ_I18N, useValue: localeZorro }
]
registerLocaleData(localeEn, 'en')
const icons: IconDefinition[] = []

@NgModule({
  imports: [CommonModule,
    // ng-progress
    NgProgressModule.withConfig({
      thick: true,
      spinner: false,
      color: '#c20acf',
    }),
    NgProgressRouterModule,
    NgProgressHttpModule,

    // ngx-moment
    MomentModule.forRoot({
      relativeTimeThresholdOptions: { m: 59 }
    }),
  ],
  providers: [
    WINDOW_PROVIDERS,
    ...LOCALE_PROVIDERS,
    { provide: NZ_ICONS, useValue: icons },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
    {provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/dashboard'},
    {provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/passport/login'},
    {
      provide: AUTH_SERVICE,
      deps: [AuthenticationService],
      useFactory: factory,
    },
  ],
  exports: [
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule
  ]
})
export class WebCoreModule {}
