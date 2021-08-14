import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { WebSharedCoreModule } from '@metrotenants/web/shared/core';
import { PropertiesScrollListComponent } from './properties-scroll-list/properties-scroll-list.component';

@NgModule({
  imports: [CommonModule, WebSharedCoreModule],
  declarations: [
    PropertyCardComponent,
    PropertiesScrollListComponent
  ],
  exports: [PropertyCardComponent, PropertiesScrollListComponent]
})
export class WebSharedUiModule {}
