import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '@angular/material';
import { IdocumentListConfigurationData } from "../../../../temp/interface/idocument-list-configuration-data";
import { DocumentChecklistConfigurationListService } from './document-checklist-configuration-list.service';
import { DocumentChecklistConfigurationFormComponent } from '../document-checklist-configuration-form/document-checklist-configuration-form.component';

@Component({
  selector: 'app-document-checklist-configuration-list',
  templateUrl: './document-checklist-configuration-list.component.html',
  styleUrls: ['./document-checklist-configuration-list.component.css'],
  providers: [DocumentChecklistConfigurationListService]
})
export class DocumentChecklistConfigurationListComponent implements OnInit {

  dataSource = new MatTableDataSource<IdocumentListConfigurationData>(this._service.Get().ElementData);
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: DocumentChecklistConfigurationListService,
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
    const dialogRef = this._dialog.open(DocumentChecklistConfigurationFormComponent, {
      width: '1500px',
      height: '625px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._matSnackBar.open('Added Document:', data, { duration: 2000 });
      }
    });
  }

}
