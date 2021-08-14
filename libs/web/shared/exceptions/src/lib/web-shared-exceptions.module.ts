import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from '@fueldash/web/shared/layouts';

const routes:Routes = [
  {
    path: 'exceptions',
    component: FullscreenComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
        data: {title: 'Not Found'}
      }

    ]
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    NotFoundComponent
  ],
})
export class WebSharedExceptionsModule {}
