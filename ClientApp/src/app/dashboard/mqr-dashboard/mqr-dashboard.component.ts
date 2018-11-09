import { Component, OnInit } from '@angular/core';
import { MqrDashboardService } from './mqr-dashboard.service';
//import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

import { SearchModalComponent } from '../../modal/search-modal/search-modal.component';

export interface IRequestDisplay {
  Id: number;
  TrackingNo: string;
  RequestType: string;
  BusinessName: string;
  RequestDate: string;
  BranchName: string;
  Location: string;
  RequestStatus: string;
  AccountOfficer: string;
  Aging: number;
}

const ElementData: IRequestDisplay[] =  [
      {
        Id: 1, TrackingNo: '0000001',
        RequestType: 'New Affiliation', BusinessName: 'Bench',
        RequestDate: '09/21/2018', BranchName: 'SM Megamall',
        Location: 'Mandaluyong', RequestStatus: 'APPROVED WITH REQUIREMENTS',
        AccountOfficer: 'Juanico Cabanit', Aging: 5
      },
      {
        Id: 2, TrackingNo: '0000002',
        RequestType: 'New Affiliation', BusinessName: 'Bench',
        RequestDate: '09/22/2018', BranchName: 'SM Calamba',
        Location: 'Calamba', RequestStatus: 'APPROVED WITH REQUIREMENTS',
        AccountOfficer: 'Raquel Bernado', Aging: 4
      },
      {
        Id: 3, TrackingNo: '0000003',
        RequestType: 'New Affiliation', BusinessName: 'Bench',
        RequestDate: '09/23/2018', BranchName: 'SM Sta. Rosa',
        Location: 'Sta. Rosa', RequestStatus: 'FOR CADENCIE PROCESSING',
        AccountOfficer: 'Arnold Costamero', Aging: 3
      },
      {
        Id: 4, TrackingNo: '0000004',
        RequestType: 'New Affiliation', BusinessName: 'Aldo',
        RequestDate: '09/24/2018', BranchName: 'Walter Calamba',
        Location: 'Calamba', RequestStatus: 'FOR CADENCIE PROCESSING',
        AccountOfficer: 'Maximo Rico', Aging: 2
      },
      {
        Id: 5, TrackingNo: '0000005',
        RequestType: 'New Affiliation', BusinessName: 'Bench',
        RequestDate: '09/25/2018', BranchName: 'SM Megamall',
        Location: 'Sta. Rosa', RequestStatus: 'DECLINED',
        AccountOfficer: 'Allan Alejandro', Aging: 1
      }
    ];


@Component({
  selector: 'app-mqr-dashboard',
  templateUrl: './mqr-dashboard.component.html',
  styleUrls: ['./mqr-dashboard.component.css'],
  providers: [MqrDashboardService]
})


export class MqrDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  id: number;
  mode: string;
  title: string;
  subTitle: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _matDialog: MatDialog,
    private _matSnackBar: MatSnackBar) { }

  ngOnInit() {
    // this.displayedColumns = this._service.GetTableFields();
    this.displayedColumns = ['TrackingNo', 'RequestType','BusinessName', 
                             'BranchName', 'Location','RequestDate',
                             'RequestStatus','AccountOfficer','Aging','Operation']
    this.dataSource = ElementData;

    this.mode = 'update';
    this.title = 'New Affiliation';
    this.subTitle = 'MAU Encoder';
  }

  openSearchDialog() {
    const dialogRef = this._matDialog.open(SearchModalComponent, {
      autoFocus: false
    });


    // dialogRef.afterClosed().subscribe(data => {
    //   if (data) {
    //     this._matSnackBar.open('Added Parameter Detail:', data, { duration: 2000 });
    //   }
    // });
  }

  GetItem(id) {
    //console.log(id);
    this._router.navigateByUrl('na/mqrUser');
  }
}
