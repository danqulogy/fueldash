import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { WebSharedCoreModule } from '@fueldash/web/shared/core';
import { SquaredMenuItemsComponent } from './components/squared-menu-items/squared-menu-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeLocationBtnComponent } from './components/change-location-btn/change-location-btn.component';
import { FavoritesMenuButtonComponent } from './components/favorites-menu-button/favorites-menu-button.component';
import { UserMenuButtonComponent } from './components/user-menu-button/user-menu-button.component';
import { PostMenuButtonComponent } from './components/post-menu-button/post-menu-button.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminMenuItemsComponent } from './components/admin-menu-items/admin-menu-items.component';

@NgModule({
  imports: [CommonModule, RouterModule, WebSharedCoreModule],
  declarations: [
    FullscreenComponent,
    MainLayoutComponent,
    SquaredMenuItemsComponent,
    FooterComponent,
    ChangeLocationBtnComponent,
    FavoritesMenuButtonComponent,
    UserMenuButtonComponent,
    PostMenuButtonComponent,
    AdminLayoutComponent,
    AdminMenuItemsComponent
  ],
})
export class WebSharedLayoutsModule {}
