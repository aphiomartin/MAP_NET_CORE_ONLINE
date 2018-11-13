import { Component, OnInit, Input } from '@angular/core';
import { SignatoriesListService } from './signatories-list.service';
import { MatDialog } from '@angular/material';
import { SignatoriesFormModalComponent } from '../modal/signatories-form-modal/signatories-form-modal.component';

@Component({
  selector: 'app-signatories-list',
  templateUrl: './signatories-list.component.html',
  styleUrls: ['./signatories-list.component.css'],
  providers: [SignatoriesListService]
})
export class SignatoriesListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Object[];
  @Input() displayMode: boolean;
  @Input() customerProfileId: number;

  constructor(private _service: SignatoriesListService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
  }

  addSignatory() {
    this._dialog.open(SignatoriesFormModalComponent, {
      width: '60%',
      data: {
        customerProfileId: this.customerProfileId
      }
    });
  }
}
