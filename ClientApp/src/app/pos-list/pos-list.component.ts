import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { PosListService } from './pos-list.service';
import { PosFormModalComponent } from '../modal/pos-form-modal/pos-form-modal.component';

@Component({
  selector: 'app-pos-list',
  templateUrl: './pos-list.component.html',
  styleUrls: ['./pos-list.component.css'],
  providers: [PosListService]
})
export class PosListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Object[];
  @Input() showAdd: boolean;

  constructor(private _service: PosListService, private _route: ActivatedRoute, private _dialog: MatDialog,
    private _overlay: Overlay) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();

    this._route.data.subscribe(data => {
      if (this.showAdd == undefined) {
        if (data['showAdd']) {
          this.showAdd = true;
        } else {
          this.showAdd = false;
        }
      }
    });
  }

  addPos() {
    this._dialog.open(PosFormModalComponent, {
      width: '95%',
      height: '90%'
    });
  }
}
