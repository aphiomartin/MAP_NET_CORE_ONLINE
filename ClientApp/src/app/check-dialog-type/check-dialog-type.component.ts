import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatDialog } from '@angular/material';
import { RemarksModalComponent } from '../modal/remarks-modal/remarks-modal.component';

@Component({
  selector: 'app-check-dialog-type',
  templateUrl: './check-dialog-type.component.html',
  styleUrls: ['./check-dialog-type.component.css']
})
export class CheckDialogTypeComponent extends FieldType implements OnInit {
  //indeterminate : boolean;
  indeterminate = true;
  checked = false;
  constructor(private _dialogRemarks: MatDialog) {
    super()
  }

  ngOnInit() {

  }

  getValue(event) {
    if (event.checked) {
      this.indeterminate = false;
      const modalRef = this._dialogRemarks.open(RemarksModalComponent, {
        width: '50%'
      });

      modalRef.afterClosed().subscribe(x => {
        this.model[this.key + 'Remarks'] = x.remarks;
      })
    } else {
      this.model[this.key + 'Remarks'] = undefined;
    }
  }
}
