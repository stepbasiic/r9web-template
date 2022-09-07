import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent extends BaseComponent implements OnInit {
  bgColorMenu = 0;

  ngOnInit(): void {
  }

  onColorMenu(i) {
    this.bgColorMenu = i;
  }

  reColorMenu() {
    this.bgColorMenu = 0;
  }

  sendPage(r){
this.router.navigate([r]);
  }

}
