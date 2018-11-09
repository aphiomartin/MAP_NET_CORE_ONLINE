import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ServiceFeeContractFormComponent } from '../service-fee-contract-form/service-fee-contract-form.component';
import { ServiceFeeContractListService } from './service-fee-contract-list.service';
import { IServiceFeeContractData } from '../../../temp/interface/iservicefeeratelist-data';


@Component({
  selector: 'app-service-fee-contract-list',
  templateUrl: './service-fee-contract-list.component.html',
  styleUrls: ['./service-fee-contract-list.component.css'],
  providers: [ServiceFeeContractListService]
})
export class ServiceFeeContractListComponent implements OnInit {
 
  displayedColumns: string[];
  dataSource = new MatTableDataSource<IServiceFeeContractData>(this._service.Get().ElementData);
  data = Object.assign(this._service.Get().ElementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _service: ServiceFeeContractListService,
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
    const dialogRef = this._dialog.open(ServiceFeeContractFormComponent, {
      width: '800px',
      height: '280px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._matSnackBar.open('Added SFCC:', data, { duration: 2000 });
      }
    });
  }
}


