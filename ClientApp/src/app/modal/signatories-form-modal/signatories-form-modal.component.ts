import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '../../../../node_modules/@angular/forms';
import { FormlyFieldConfig } from '../../../../node_modules/@ngx-formly/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';
import { SignatoriesFormModalService } from './signatories-form-modal.service';

@Component({
  selector: 'app-signatories-form-modal',
  templateUrl: './signatories-form-modal.component.html',
  styleUrls: ['./signatories-form-modal.component.css'],
  providers: [SignatoriesFormModalService]
})
export class SignatoriesFormModalComponent implements OnInit {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: Object;

  constructor(private _modalRef: MatDialogRef<SignatoriesFormModalComponent>, private _service: SignatoriesFormModalService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields = this._service.getFormlyFields();
    this.model = {
      customerProfileId: this.data
    };
  }

  submit() {
    this._service.create(this.model).subscribe(data => {
      console.log('SUCCESS');
      this.model = data;
      this._modalRef.close();
    });
  }

  cancel() {
    this._modalRef.close();
  }
}
