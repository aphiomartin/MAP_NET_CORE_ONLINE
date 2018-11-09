import { Component, OnInit, Input } from '@angular/core';
import { ParameterMaintenanceFormService } from './parameter-maintenance-form.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-parameter-maintenance-form',
  templateUrl: './parameter-maintenance-form.component.html',
  styleUrls: ['./parameter-maintenance-form.component.css'],
  providers: [ParameterMaintenanceFormService]
})
export class ParameterMaintenanceFormComponent implements OnInit {
  @Input() displayMode: boolean = false;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  title: string = 'Document Checklist Maintenance Form';
  subTitle: string;
  mode: string;
  fields: FormlyFieldConfig[];
  
  constructor(private _service: ParameterMaintenanceFormService,
              private _matDialogRef: MatDialogRef<ParameterMaintenanceFormComponent>) { }

  ngOnInit() {
    this.fields = this._service.GetParameterMaintenanceFields();
  }

  save(model) {
    this._matDialogRef.close(model);
  }

  cancel() {
      this._matDialogRef.close();
  }
}
