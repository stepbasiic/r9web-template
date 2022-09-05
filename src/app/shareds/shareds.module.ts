import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BaseComponent } from './base/base.component';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    BaseComponent,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedsModule {
  static forRoot(): ModuleWithProviders<SharedsModule> {
    return {
      ngModule: SharedsModule,
      providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
      ],
    };
  }
}
