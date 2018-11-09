import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '../../../../../node_modules/@angular/material';
import { BuMaintenanceFormComponent } from '../bu-maintenance-form/bu-maintenance-form.component';
import { DeleteModalComponent } from '../../../modal/delete-modal/delete-modal.component';


export interface IBUMaintenanceInfo {
  UserId: string;
  Name: string;
  BusinessUnit: string;
}
const ELEMENT_DATA: IBUMaintenanceInfo[] = [
  {UserId: 'A025001391',Name: 'Juanico Sistoso Cabanit', BusinessUnit: 'Merchant Affiliation and Maintenance Unit'},
  {UserId: 'A007002356',Name: 'Racquel Bernardo', BusinessUnit: 'Merchant Acquiring Sales Unit'},
  {UserId: 'A012001164',Name: 'Arnold Costamero', BusinessUnit: 'Merchant Affiliation and Maintenance Unit'},
  {UserId: 'A007001870',Name: 'Amor Bisco', BusinessUnit: 'Merchant Acquiring Sales Unit'},
  {UserId: 'A008001756',Name: 'Maximo Rico', BusinessUnit: 'Merchant Affiliation and Maintenance Unit'},
  {UserId: 'A025015373',Name: 'Jonas Navarro', BusinessUnit: 'Merchant Affiliation and Maintenance Unit'}
 ];

@Component({
  selector: 'app-bu-maintenance-list',
  templateUrl: './bu-maintenance-list.component.html',
  styleUrls: ['./bu-maintenance-list.component.css']
})
export class BuMaintenanceListComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'Name', 'BusinessUnit', 'Options'];
  dataSource = new MatTableDataSource<IBUMaintenanceInfo>(ELEMENT_DATA); 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dialog: MatDialog,
    private _matSnackBar: MatSnackBar) { }

    ngOnInit() {
      this.dataSource.sort = this.sort;
    }
  
    applySearch(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    openDialog() {
      const dialogRef = this._dialog.open(BuMaintenanceFormComponent, {
        width: '800px',
        height: '250px'
      });
  
      dialogRef.afterClosed().subscribe(data => {
        if (data) {
          this._matSnackBar.open('Added Document:', data, { duration: 2000 });
        }
      });
    }

    openDeleteDialog() {
      const dialogRef = this._dialog.open(DeleteModalComponent, {
        width: '800px',
        height: '140px'
      });
    }

}
