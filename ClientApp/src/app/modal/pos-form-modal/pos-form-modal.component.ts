import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { PosFormModalService } from './pos-form-modal.service';

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
  constructor(private _service: PosFormModalService, private _dialog: MatDialogRef<PosFormModalComponent>) { }

  ngOnInit() {
    this.model = {};
    this.fields = this._service.getPosFields(this.userGroup);
  }

}
