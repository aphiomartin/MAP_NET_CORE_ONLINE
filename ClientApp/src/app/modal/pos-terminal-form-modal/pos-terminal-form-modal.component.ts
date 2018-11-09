import { Component, OnInit } from '@angular/core';
import { PosTerminalFormModalService } from './pos-terminal-form-modal.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pos-terminal-form-modal',
  templateUrl: './pos-terminal-form-modal.component.html',
  styleUrls: ['./pos-terminal-form-modal.component.css'],
  providers: [PosTerminalFormModalService]
})
export class PosTerminalFormModalComponent implements OnInit {
  fields: FormlyFieldConfig[];
  model: Object;
  constructor(private _service: PosTerminalFormModalService, private _dialogRef: MatDialogRef<PosTerminalFormModalComponent>) { }

  ngOnInit() {
    this.fields = this._service.getPosTerminalFields();
    this.model = {};
  }


}
