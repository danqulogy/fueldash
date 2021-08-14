import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AvatarModule } from 'ngx-avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as Feather from 'feather-icons';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowCircleRight,
  faBell,
  faCalendar,
  faChevronCircleRight,
  faCogs,
  faHome,
  faList,
  faPlay,
  faPlayCircle,
  faSearch,
  faUser,
  faUserPlus,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResultModule } from 'ng-zorro-antd/result';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

const ANT_MODULES = [
  NzButtonModule,
  NzIconModule,
  NzFormModule,
  NzInputModule,
  NzGridModule,
  NzSelectModule,
  NzDropDownModule,
  NzBreadCrumbModule,
  NzDatePickerModule,
  NzPageHeaderModule,
  NzInputNumberModule,
  NzSliderModule,
  NzDividerModule,
  NzDrawerModule,
  NzToolTipModule,
  NzRadioModule,
  NzSwitchModule,
  NzCascaderModule,
  NzLayoutModule,
  NzTableModule,
  NzResultModule
];

const THIRDMODULES = [
  NgxPermissionsModule,
  MomentModule,
  AvatarModule,
  NgHeroiconsModule,
  DigitOnlyModule,
  FontAwesomeModule,

  // PerfectScrollbarModule,
  // NgbModule,
  // TableModule,
  // ButtonModule,
  // NestableModule,
  // ChartistModule,
  // ScrollingModule,
];

const COMPONENTS = [
  // FilterTextboxComponent,
  // LayoutPublicComponent,
  // TopbarUserMenuComponent,
  // TopbarDarkUserMenuComponent,
  // DashboardStatisticCardComponent
];

@NgModule({
  imports: [...MODULES, ...ANT_MODULES, ...THIRDMODULES],
  exports: [...MODULES, ...ANT_MODULES, ...THIRDMODULES],
  declarations: [],
})
export class WebSharedCoreModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faVideo,
      faCalendar,
      faList,
      faPlay,
      faPlayCircle,
      faHome,
      faChevronCircleRight,
      faCogs,
      faUser,
      faBell,
      faUserPlus,
      faArrowCircleRight,
      faArrowAltCircleRight,
      faSearch
    );
    Feather.replace();
  }
}
