import { Component, OnInit, Input } from '@angular/core';
import { OwnersListService } from './owners-list.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { OwnersFormModalComponent } from '../modal/owners-form-modal/owners-form-modal.component';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css'],
  providers: [OwnersListService]
})
export class OwnersListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Object[];
  @Input() displayMode: boolean;
  @Input() customerProfileId: number;

  constructor(private _service: OwnersListService, private _dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
   /* this._service.get(this.customerProfileId).subscribe(data => {
      
    });*/
  }

  addOwner() {
    setTimeout(() => {
      this._dialog.open(OwnersFormModalComponent, {
        width: '60%',
        data: {
          customerProfileId: this.customerProfileId
        }
      });
    });
  }
}
