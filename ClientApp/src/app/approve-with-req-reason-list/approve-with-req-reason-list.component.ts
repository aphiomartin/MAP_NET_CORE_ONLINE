import { Component, OnInit, Input } from '@angular/core';
import { ApproveWithReqReasonListService } from './approve-with-req-reason-list.service';
import { MatDialog } from '@angular/material';
import { ApproveWithReqReasonFormModalComponent } from '../modal/approve-with-req-reason-form-modal/approve-with-req-reason-form-modal.component';


@Component({
  selector: 'app-approve-with-req-reason-list',
  templateUrl: './approve-with-req-reason-list.component.html',
  styleUrls: ['./approve-with-req-reason-list.component.css'],
  providers: [ApproveWithReqReasonListService]
})
export class ApproveWithReqReasonListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Object[];
  //@Input() displayMode: boolean;
  //@Input() userGroup: string;

  constructor(private _service: ApproveWithReqReasonListService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
  }

  addOwner() {
    this._dialog.open(ApproveWithReqReasonFormModalComponent, {
      width: '60%',
      data: {

      }
    });
  }

}


