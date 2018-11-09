import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '../../../../../../node_modules/@angular/material';

import { IdocumentListData } from "../../../../temp/interface/idocument-list-data";
import { DocumentChecklistMaintenanceService } from './document-checklist-maintenance.service';
import { DocumentChecklistMaintenanceFormComponent } from "../document-checklist-maintenance-form/document-checklist-maintenance-form.component";


@Component({
  selector: 'app-document-checklist-maintenance-list',
  templateUrl: './document-checklist-maintenance-list.component.html',
  styleUrls: ['./document-checklist-maintenance-list.component.css'],
  providers: [DocumentChecklistMaintenanceService]
})
export class DocumentChecklistMaintenanceListComponent implements OnInit {

  dataSource = new MatTableDataSource<IdocumentListData>(this._service.Get().ElementData);
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _service: DocumentChecklistMaintenanceService,
    private _dialog: MatDialog,
    private _matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.displayedColumns = this._service.Get().Fields;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applySearch(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this._dialog.open(DocumentChecklistMaintenanceFormComponent, {
      width: '600px',
      height: '220px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._matSnackBar.open('Added Document:', data, { duration: 2000 });
      }
    });
  }



}
