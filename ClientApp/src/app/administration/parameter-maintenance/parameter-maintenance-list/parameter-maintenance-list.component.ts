import { Component, OnInit, ViewChild } from '@angular/core';
import { ParameterMaintenanceListService } from './parameter-maintenance-list.service';
import { IparametermaintenanceData } from '../../../temp/interface/iparametermaintenance-data';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ParameterMaintenanceFormComponent } from '../parameter-maintenance-form/parameter-maintenance-form.component';
import { ParameterMaintenanceDetailsComponent } from '../parameter-maintenance-details/parameter-maintenance-details.component';
import { forEach } from '../../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-parameter-maintenance-list',
  templateUrl: './parameter-maintenance-list.component.html',
  styleUrls: ['./parameter-maintenance-list.component.css'],
  providers: [ParameterMaintenanceListService]
})
export class ParameterMaintenanceListComponent implements OnInit {
  dataSource = new MatTableDataSource<IparametermaintenanceData>(this._service.Get().ElementData);
  displayedColumns: string[];
  testData: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ParameterMaintenanceListService,
    private _dialog: MatDialog,
    private _matSnackBar: MatSnackBar) {

  }

  ngOnInit() {

    this.displayedColumns = ['Description', 'Code', 'Options'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this._dialog.open(ParameterMaintenanceFormComponent, {

    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {

        this.dataSource.data.push({ Id: this.dataSource.data.length + 1, Description: data.Description, Code: data.Code });
        this.dataSource._updateChangeSubscription();

        this._matSnackBar.open('Added Parameter:', data.Description, { duration: 2000 });
      }
    });
  }

  openDialogDetails(element, index) {

    
    const dialogRef = this._dialog.open(ParameterMaintenanceDetailsComponent, {
      width: '600px',
      height: '600px',
      autoFocus: false,
      data: element
    });



    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._matSnackBar.open('Added Parameter Detail:', data, { duration: 2000 });
      }
    });
  }


  applySearch(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
