import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerProfileService } from './customer-profile.service';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormlyFieldConfigService } from '../services/formly-field-config.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
  providers: [CustomerProfileService, FormlyFieldConfigService]
})
export class CustomerProfileComponent extends AppBaseComponent implements OnInit {
  @Input() displayMode = false;
  @Input() userGroup: string;

  isSaved = false;
  customerProfileId = 0;
  model: CutomerProfile;
  title = 'New Affiliation';

  options: FormlyFormOptions = {
    formState: {
      disabled: true
    }
  };

  constructor(public route: ActivatedRoute,
    public router: Router,
    private _customerProfileService: CustomerProfileService,
    private _formlyFieldConfigService: FormlyFieldConfigService
  ) {

    super(route, router);
  }

  ngOnInit() {
    this.initialize();
    this.fields = this._customerProfileService.getCustomerProfileFields(this.userGroup);
    // apply expressionProperty for disabled based on formState to all fields
    if (this.displayMode === true) {
      this._formlyFieldConfigService.disabled(this.fields);
    } else {
      this._formlyFieldConfigService.enabled(this.fields);
    }
  }

  submit() {
    if (this.model['id']) {
      this._customerProfileService.update(this.model['id'], this.model).subscribe(data => {
        this.model = data;
        console.log('UPDATE');
      });
    } else {
      this._customerProfileService.create(this.model).subscribe(data => {
        console.log('SUCCESS');
        this.model = data;
        this.customerProfileId = this.model['id'];
        this.isSaved = true;
      });
    }
  }
}


interface CutomerProfile {
  businessName: string;
  ownership: number;
  dtiRegDate: Date;
}
