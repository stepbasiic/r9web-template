import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';
declare const $: any;

@Component({
  selector: 'app-refer-page',
  templateUrl: './refer-page.component.html',
  styleUrls: ['./refer-page.component.scss']
})
export class ReferPageComponent extends BaseComponent implements OnInit {


  ngOnInit(): void {
    this.GET_listuser();
  }

  async GET_listuser() {

    await $(document).ready(() => {
      $('.id_table_listuser').DataTable();
    });

  }

  dashboard(){
    this.router.navigate(['dashboard']);
  }

}
