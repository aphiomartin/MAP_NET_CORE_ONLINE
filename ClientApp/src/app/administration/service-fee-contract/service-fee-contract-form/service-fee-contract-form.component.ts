import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceFeeContractFormService } from './service-fee-contract-form.service'
import { AppBaseComponent } from '../../../app-base/app-base.component';

@Component({
  selector: 'app-service-fee-contract-form',
  templateUrl: './service-fee-contract-form.component.html',
  styleUrls: ['./service-fee-contract-form.component.css'],
  providers: [ServiceFeeContractFormService]
})
export class ServiceFeeContractFormComponent implements OnInit {
  @Input() displayMode: boolean = false;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  title: string = 'Service Fee Contract Form';
  subTitle: string;
  mode: string;
  fields: FormlyFieldConfig[];

  constructor(private _service: ServiceFeeContractFormService,
              private _matDialogRef: MatDialogRef<ServiceFeeContractFormComponent>) {
    this.fields = this._service.getServiceFeeContractFields();
  }
  ngOnInit() {

  }

  submit() {
    this._matDialogRef.close(this.form.value.Description);
  }

  cancel() {
    this._matDialogRef.close();
  }

}
