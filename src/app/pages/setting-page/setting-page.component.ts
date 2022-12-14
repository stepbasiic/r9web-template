import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent extends BaseComponent implements OnInit {
  bgColorMenu = 0;
  ngOnInit(): void {
  }

  sendPage(r) {
    this.router.navigate([r]);
  }


  onColorMenu(i) {
    this.bgColorMenu = i;
  }

  reColorMenu() {
    this.bgColorMenu = 0;
  }

}
