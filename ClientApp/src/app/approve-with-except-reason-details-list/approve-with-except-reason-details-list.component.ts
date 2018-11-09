import { Component, OnInit, Input } from '@angular/core';
import { ApproveWithExceptReasonDetailsListService } from './approve-with-except-reason-details-list.service';
import { MatDialog } from '@angular/material';
import { ApproveWithExceptReasonDetailsModalComponent } from '../modal/approve-with-except-reason-details-modal/approve-with-except-reason-details-modal.component';

@Component({
  selector: 'app-approve-with-except-reason-details-list',
  templateUrl: './approve-with-except-reason-details-list.component.html',
  styleUrls: ['./approve-with-except-reason-details-list.component.css'],
  providers: [ApproveWithExceptReasonDetailsListService]
})
export class ApproveWithExceptReasonDetailsListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Object[];
  //@Input() displayMode: boolean;
  //@Input() userGroup: string;
  constructor(private _service: ApproveWithExceptReasonDetailsListService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
  }

  addOwner() {
    this._dialog.open(ApproveWithExceptReasonDetailsModalComponent, {
      width: '60%',
      data: {

      }
    });
  }

}


