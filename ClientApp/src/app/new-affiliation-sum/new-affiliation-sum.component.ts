import { Component, OnInit } from '@angular/core';
import { NewAffiliationSumService } from './new-affiliation-sum.service';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
@Component({
  selector: 'app-new-affiliation-sum',
  templateUrl: './new-affiliation-sum.component.html',
  styleUrls: ['./new-affiliation-sum.component.css']
})
export class NewAffiliationSumComponent extends AppBaseComponent implements OnInit {
  // Properties
  title: string = 'New Affiliation Request';
  subTitle: string = 'Summary';
  isDisplay: boolean = true;

  // Properties
  constructor(public route: ActivatedRoute,
    public router: Router,
    private newAffiliationSumService: NewAffiliationSumService,
    //  private customerProfileComponent:CustomerProfileComponent
  ) {

    super(route, router);
    this.fields = newAffiliationSumService.getPosFields();

  }

  ngOnInit() {
  }

  //   edit(){

  //     //  this.customerProfileComponent.displayMode=false;
  //     this.isDisplay=false;

  // }
}
