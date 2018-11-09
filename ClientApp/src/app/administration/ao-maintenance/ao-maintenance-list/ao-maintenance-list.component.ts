
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '../../../../../node_modules/@angular/material';
import { AoMaintenanceFormComponent } from '../ao-maintenance-form/ao-maintenance-form.component';
import { DeleteModalComponent } from '../../../modal/delete-modal/delete-modal.component';


export interface AODisplayInfo {
  UserId: string;
  Name: string;
  ContactNumber: string;
  BusinessUnit: string;
  Segment: string;
  BUHeadTag: boolean;
}
const ELEMENT_DATA: AODisplayInfo[] = [
  {UserId: 'A025001391',Name: 'Juanico Sistoso Cabanit', ContactNumber: '4606060', BusinessUnit: 'Alternative Channels Unit', Segment: 'Angeles/Tarlac', BUHeadTag: true },
  {UserId: 'A025008799',Name: 'Janice Torres Angeles', ContactNumber: '8888', BusinessUnit: 'MM1 - South Metro Manila Unit', Segment: 'Manila Area', BUHeadTag: false },
  {UserId: 'A025015373',Name: 'Jonas Villa Navarro', ContactNumber: '45859', BusinessUnit: 'Alternative Channels Unit', Segment: 'Manila Area', BUHeadTag: false }
 ];

@Component({
  selector: 'app-ao-maintenance-list',
  templateUrl: './ao-maintenance-list.component.html',
  styleUrls: ['./ao-maintenance-list.component.css']
})
export class AoMaintenanceListComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'Name', 'ContactNumber', 'BusinessUnit', 'Segment', 'BUHeadTag', 'Options'];
  dataSource = new MatTableDataSource<AODisplayInfo>(ELEMENT_DATA); 
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
    const dialogRef = this._dialog.open(AoMaintenanceFormComponent, {

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
