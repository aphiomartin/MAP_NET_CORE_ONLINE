import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DefaultMidMaintenanceFormComponent } from '../default-mid-maintenance-form/default-mid-maintenance-form.component';
import { DeleteModalComponent } from '../../../modal/delete-modal/delete-modal.component';
import { MidFormModalComponent } from '../../../modal/mid-form-modal/mid-form-modal.component'

export interface DefaultMIDInfo {
  Currency: string;
  MonitorCode: string;
  MerchantGroupCode: string;
}
const ELEMENT_DATA: DefaultMIDInfo[] = [
  {Currency: 'PHP', MonitorCode: 'OTC', MerchantGroupCode: 'DM01- Diners Migrated'},
  {Currency: 'USD', MonitorCode: 'Installment Reg', MerchantGroupCode: 'MerchGrp24'},
  {Currency: 'USD', MonitorCode: 'OTC', MerchantGroupCode: 'DM01 - Diners'}
 ];

@Component({
  selector: 'app-default-mid-maintenance-list',
  templateUrl: './default-mid-maintenance-list.component.html',
  styleUrls: ['./default-mid-maintenance-list.component.css']
})
export class DefaultMidMaintenanceListComponent implements OnInit {
  displayedColumns: string[] = ['Currency', 'MonitorCode', 'MerchantGroupCode', 'Options'];
  dataSource = new MatTableDataSource<DefaultMIDInfo>(ELEMENT_DATA); 
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
      const dialogRef = this._dialog.open(MidFormModalComponent, {
        width: '1000px',
        height: '700px'
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
