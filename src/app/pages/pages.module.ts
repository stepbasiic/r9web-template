import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedsModule } from '../shareds/shareds.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReferPageComponent } from './refer-page/refer-page.component';
import { ListuserPageComponent } from './listuser-page/listuser-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';


@NgModule({
  declarations: [DashboardPageComponent, LayoutComponent, RegisterPageComponent, ReferPageComponent, ListuserPageComponent, SettingPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedsModule
  ]
})
export class PagesModule { }
