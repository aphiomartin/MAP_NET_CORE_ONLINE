import { Component, OnInit } from '@angular/core';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-extention',
  templateUrl: './extention.component.html',
  styleUrls: ['./extention.component.css']
})
export class ExtentionComponent extends AppBaseComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public router: Router) {
    super(route, router);
  }

  ngOnInit() {
    this.initialize();
    this.title = 'Extention Class';
    // this.subTitle='Create'


  }

}
