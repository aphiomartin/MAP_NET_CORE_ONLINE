import { Component, OnInit } from '@angular/core';
import { PsServicingDashboardService } from './ps-servicing-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ps-servicing-dashboard',
  templateUrl: './ps-servicing-dashboard.component.html',
  styleUrls: ['./ps-servicing-dashboard.component.css'],
  providers: [PsServicingDashboardService]
})
export class PsServicingDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource;

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: PsServicingDashboardService, private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'PS Servicing';
  }

  getItem(id) {
    this._router.navigateByUrl('na/psServicing');
  }
}
