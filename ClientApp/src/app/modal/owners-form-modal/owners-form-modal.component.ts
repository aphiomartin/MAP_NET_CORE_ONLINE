import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { OwnersFormModalService } from './owners-form-modal.service';

@Component({
  selector: 'app-owners-form-modal',
  templateUrl: './owners-form-modal.component.html',
  styleUrls: ['./owners-form-modal.component.css'],
  providers: [OwnersFormModalService]
})
export class OwnersFormModalComponent implements OnInit {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: Object;
  options: Object;

  constructor(private _modalRef: MatDialogRef<OwnersFormModalComponent>, private _service: OwnersFormModalService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.model = {
      customerProfileId: this.data['customerProfileId']
    };
    this.fields = this._service.getFormlyFields();
  }

  submit() {
    console.log(this.model);
    this._service.create(this.model).subscribe(data => {
      console.log('SUCCESS');
      this._modalRef.close();
    });
  }

  cancel() {
    this._modalRef.close();
  }
}
