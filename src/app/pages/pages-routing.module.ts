import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListuserPageComponent } from './listuser-page/listuser-page.component';
import { ReferPageComponent } from './refer-page/refer-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'setting', component: SettingPageComponent },
      { path: 'setting/listuser', component: ListuserPageComponent },
      { path: 'refer/:referID', component: ReferPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
