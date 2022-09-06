import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent implements OnInit {


  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
  }

  register(){
    this.router.navigate(['register']);
  }

  dashboard(){
    this.router.navigate(['dashboard']);
  }

}
