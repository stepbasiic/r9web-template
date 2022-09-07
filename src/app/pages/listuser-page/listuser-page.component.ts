import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shareds/base/base.component';
declare const $: any;

@Component({
  selector: 'app-listuser-page',
  templateUrl: './listuser-page.component.html',
  styleUrls: ['./listuser-page.component.scss']
})
export class ListuserPageComponent extends BaseComponent implements OnInit {

  ngOnInit(): void {
    this.GET_listuser();
  }

  async GET_listuser() {

    await $(document).ready(() => {
      $('.id_table_listuser').DataTable();
    });

  }

  setting(){
    this.router.navigate(['setting']);
  }

}
