import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent extends BaseComponent implements OnInit {



  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigate(['dashboard']);
  }

}
