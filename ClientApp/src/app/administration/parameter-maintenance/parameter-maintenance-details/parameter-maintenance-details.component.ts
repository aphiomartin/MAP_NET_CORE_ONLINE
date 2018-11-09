import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-parameter-maintenance-details',
  templateUrl: './parameter-maintenance-details.component.html',
  styleUrls: ['./parameter-maintenance-details.component.css']
})
export class ParameterMaintenanceDetailsComponent implements OnInit {
  isEditItem: boolean;

  constructor(private _matDialogRef: MatDialogRef<ParameterMaintenanceDetailsComponent>) { }

  ngOnInit() {
    this.isEditItem = false;
  }

  addDetail() {

  }

  editItem() {
    this.isEditItem = true;
  }


  saveDetail() {
    this.isEditItem = false;
  }

  cancelSave() {
    this.isEditItem = false;
  }

  closeDialog() {
    this._matDialogRef.close();
  }

}
