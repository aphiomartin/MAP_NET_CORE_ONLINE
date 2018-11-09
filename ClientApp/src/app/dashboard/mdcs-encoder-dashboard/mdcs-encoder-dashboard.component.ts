import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MdcsEncoderDashboardService } from './mdcs-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { SearchModalComponent } from '../../modal/search-modal/search-modal.component';

@Component({
  selector: 'app-mdcs-encoder-dashboard',
  templateUrl: './mdcs-encoder-dashboard.component.html',
  styleUrls: ['./mdcs-encoder-dashboard.component.css'],
  providers: [MdcsEncoderDashboardService]
})
export class MdcsEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MdcsEncoderDashboardService,
  private _matDialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);
  }

  getItem(Id) {
    this._router.navigateByUrl('na/mdcsEncoder/update');
  }

  openSearchDialog() {
    const dialogRef = this._matDialog.open(SearchModalComponent, {
      autoFocus: false,
      width: '40%'
    });
  }
}
