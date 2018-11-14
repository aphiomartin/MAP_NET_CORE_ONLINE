import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MauEncoderDashboardService } from './mau-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchModalComponent } from '../../modal/search-modal/search-modal.component'

@Component({
  selector: 'app-mau-encoder-dashboard',
  templateUrl: './mau-encoder-dashboard.component.html',
  styleUrls: ['./mau-encoder-dashboard.component.css'],
  providers: [MauEncoderDashboardService]
})
export class MauEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MauEncoderDashboardService,
    private _matDialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);
  }

  getItem(Id) {
    this._router.navigateByUrl('na/mauEncoder/update');
  }

  openSearchDialog() {
    const dialogRef = this._matDialog.open(SearchModalComponent, {
      autoFocus: false,
      width: '40%'
    });
  }

}
