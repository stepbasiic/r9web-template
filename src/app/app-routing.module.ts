import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
