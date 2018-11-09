import { Component, OnInit } from '@angular/core';
import { MauOfficerDashboardService } from './mau-officer-dashboard.service';
//import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AoListModalComponent } from '../../modal/ao-list-modal/ao-list-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

const ElementData: IRequestDisplay[] =  [
  {
    Id: 1, TrackingNo: '0000001',
    RequestType: 'New Affiliation', BusinessName: 'Bench',
    RequestDate: '09/21/2018', BranchName: 'SM Megamall',
    Location: 'Mandaluyong', RequestStatus: 'FOR EVALUATION',
    AccountOfficer: 'Juanico Cabanit', TAT: '10 Hour(s)'
    
  },
  {
    Id: 2, TrackingNo: '0000002',
    RequestType: 'New Affiliation', BusinessName: 'Bench',
    RequestDate: '09/22/2018', BranchName: 'SM Calamba',
    Location: 'Calamba', RequestStatus: 'FOR RE-EVALUATION',
    AccountOfficer: 'Raquel Bernado', TAT: '20 Hour(s)'
  }
];

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
  TAT: string;
}



@Component({
  selector: 'app-mau-officer-dashboard',
  templateUrl: './mau-officer-dashboard.component.html',
  styleUrls: ['./mau-officer-dashboard.component.css'],
  providers: [MauOfficerDashboardService]
})
export class MauOfficerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;


  constructor(private _service: MauOfficerDashboardService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['TrackingNo', 'RequestType', 'BusinessName',
                             'RequestDate','BranchName', 'Location', 
                             'RequestStatus','TAT', 'Operation']
    this.dataSource = ElementData;

    this.mode = '';
    this.title = '';
    this.subTitle = '';
  }

  editItem(id) {
    this._router.navigateByUrl('na/mauOfficer/' + id);
  }

  openDialog(id, trackingNo): void {
    const dialogRef = this._dialog.open(AoListModalComponent, {
      data: { id: id, trackingNo: trackingNo }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._snackBar.open('Successfully Assigned To : ', data,
          {
            duration: 2000
          });
      }
    });
  }

}
