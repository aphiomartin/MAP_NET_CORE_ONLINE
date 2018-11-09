import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
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

  constructor(private _modalRef: MatDialogRef<OwnersFormModalComponent>, private _service: OwnersFormModalService) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields = this._service.getFormlyFields();
    this.model = {};
  }

  submit() {
    this._modalRef.close();
  }

  cancel() {
    this._modalRef.close();
  }
}
