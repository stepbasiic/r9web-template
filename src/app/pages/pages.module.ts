import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedsModule } from '../shareds/shareds.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [DashboardPageComponent, LayoutComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedsModule
  ]
})
export class PagesModule { }
