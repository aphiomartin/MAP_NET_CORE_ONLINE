import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-branch-info',
  templateUrl: './branch-info.component.html',
  styleUrls: ['./branch-info.component.css']
})
export class BranchInfoComponent extends AppBaseComponent implements OnInit {
  // export class BranchInfoComponent implements OnInit {
  @Input() displayMode: boolean;
  @Input() showOif?= true;
  @Input() showPos?= true;
  @Input() showMid?= true;

  constructor(public route: ActivatedRoute,
    public router: Router) {
    super(route, router);

  }

  ngOnInit() {

  }

}
