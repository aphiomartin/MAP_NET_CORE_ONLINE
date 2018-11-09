import { Component, OnInit } from '@angular/core';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { MauCheckerDashboardService } from './mau-checker-dashboard.service';

@Component({
  selector: 'app-mau-checker-dashboard',
  templateUrl: './mau-checker-dashboard.component.html',
  styleUrls: ['./mau-checker-dashboard.component.css'],
  providers: [MauCheckerDashboardService]
})
export class MauCheckerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MauCheckerDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MAU Checker';
  }
}
