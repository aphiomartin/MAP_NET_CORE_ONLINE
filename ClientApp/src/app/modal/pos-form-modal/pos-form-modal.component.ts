import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { PosFormModalService } from './pos-form-modal.service';
import { FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-pos-form-modal',
  templateUrl: './pos-form-modal.component.html',
  styleUrls: ['./pos-form-modal.component.css'],
  providers: [PosFormModalService]
})
export class PosFormModalComponent implements OnInit {
  fields: FormlyFieldConfig[];
  userGroup: string;
  model: Object;
  showAction: boolean;
  form: FormGroup;
  constructor(private _service: PosFormModalService, private _dialog: MatDialogRef<PosFormModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = this._service.getPosFields(this.userGroup);
    this.showAction = this.data.showAction;
  }

}
