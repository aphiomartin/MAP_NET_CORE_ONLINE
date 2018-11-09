import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AoListModalService } from './ao-list-modal.service';
import { IaolistData } from "../../temp/interface/iaolist-data";
import { FormControl } from '../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-ao-list-modal',
  templateUrl: './ao-list-modal.component.html',
  styleUrls: ['./ao-list-modal.component.css'],
  providers: [AoListModalService]
})

export class AoListModalComponent implements OnInit {
  dataSource: IaolistData[];
  passedData: any;
  selectedValue: string;
  aoSelectFrmControl: FormControl;
  constructor(private _matDialogRef: MatDialogRef<AoListModalComponent>,
    private _service: AoListModalService,
    @Inject(MAT_DIALOG_DATA) private _passedData: any) { }

  ngOnInit() {
    this.dataSource = this._service.getAoList();
    this.passedData = this._passedData;
    this.selectedValue = 'Not yet assigned!';
    this.aoSelectFrmControl = new FormControl();
  }

  Cancel() {
    this._matDialogRef.close();
  }

  Submit() {
    this._matDialogRef.close(this.aoSelectFrmControl.value);
  }

  closeDialog() {
    this._matDialogRef.close();
  }

}
