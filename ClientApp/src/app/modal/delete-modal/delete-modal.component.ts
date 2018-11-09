import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    private _modalRef: MatDialogRef<DeleteModalComponent>
  ) { }

  ngOnInit() {
  }

  Submit() {
    this._modalRef.close();
  }

}
