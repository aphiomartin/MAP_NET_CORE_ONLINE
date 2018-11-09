import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdcsCheckerDashboardService } from './mdcs-checker-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { SearchModalComponent } from '../../modal/search-modal/search-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-mdcs-checker-dashboard',
  templateUrl: './mdcs-checker-dashboard.component.html',
  styleUrls: ['./mdcs-checker-dashboard.component.css'],
  providers: [MdcsCheckerDashboardService]
})
export class MdcsCheckerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MdcsCheckerDashboardService,
  private _matDialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);
  }

  private getItem(Id) {
    this._router.navigateByUrl('na/mdcsChecker/update');
  }

  openSearchDialog() {
    const dialogRef = this._matDialog.open(SearchModalComponent, {
      autoFocus: false,
      width: '40%'
    });
  }
}
