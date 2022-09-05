import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent extends BaseComponent implements OnInit {

  loading: boolean = false;

  loginModel = new loginModel();

  ngOnInit(): void {
  }


  async doLogin() {
    this.loading = true;
    let u = this.loginModel.username;
    let p = this.loginModel.password;

    if (u && p) {

    } else {
      this.loading = await this.showError('Invalid username or password.');
    }

  }

  async showError(message) {
    return await this.swal({
      text: message,
      type: 'error',
      allowOutsideClick: false
    }).then(() => {
      return false;
    });
  }

}

export class loginModel {
  username: string;
  password: string;
}
