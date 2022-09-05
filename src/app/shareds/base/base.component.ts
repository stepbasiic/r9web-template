import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import swal from 'sweetalert2';
import * as lodash from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-base',
  template: ``,
  styles: [
  ]
})
export class BaseComponent {

  constructor(
    // ภายใน
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public title: Title,
    public http: HttpClient,
    public domSanitizer: DomSanitizer,
  ) { }

  public swal = swal;
  public lodash = lodash;
  public moment = moment;


}
