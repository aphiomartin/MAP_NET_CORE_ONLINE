import { Component, OnInit, Input, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { OwnersListService } from './owners-list.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { OwnersFormModalComponent } from '../modal/owners-form-modal/owners-form-modal.component';
import { config } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _ownerService: OwnersListService, private _dialog: MatDialog, private _changeDetectRef: ChangeDetectorRef,
    private _route: ActivatedRoute) {
    this._route.params.subscribe(params => {
      if (params['id']) {
        this._ownerService.getByCustomerId(params['id']).subscribe(data => {
          this.dataSource = data.items;
        });
      }
    });
  }

  ngOnInit() {
<<<<<<< HEAD
    this.displayedColumns = this._ownerService.getTableFields();

    // if (this.customerProfileId === 0) {
    //   this.dataSource = [];
    // } else {
    //   this._ownerService.get(this.customerProfileId).subscribe(data => {
    //     this.dataSource = data.items;
    //   });
    // }
  }

  update(owner) {
    const dialog = this._dialog.open(OwnersFormModalComponent, {
      width: '60%',
      data: {
        owner: owner
      }
    });

    dialog.afterClosed().subscribe(data => {
      this.refresh();
    });
=======
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
   /* this._service.get(this.customerProfileId).subscribe(data => {
      
    });*/
>>>>>>> 1ad93e63fba4bb02d7237e027c50122e225e97b6
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this._ownerService.delete(id).subscribe(data => {
        this.refresh();
      });
    }
  }

  addOwner() {
    const dialog = this._dialog.open(OwnersFormModalComponent, {
      width: '60%',
      data: {
        customerProfileId: this.customerProfileId
      }
    });

    dialog.afterClosed().subscribe(data => {
      this.refresh();
    });
  }

  getTypeOfRelatedParty(value) {
    return this._ownerService.getTypeOfRelatedParty().find(r => r.value === value).label;
  }

  private refresh() {
    this._ownerService.getByCustomerId(this.customerProfileId).subscribe(data => {
      this.dataSource = data.items;
      this._changeDetectRef.detectChanges();
    });
  }
}
