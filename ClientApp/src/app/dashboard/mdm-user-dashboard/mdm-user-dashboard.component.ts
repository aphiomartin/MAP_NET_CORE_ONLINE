import { Component, OnInit } from '@angular/core';
import { MdmUserDashboardService } from './mdm-user-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdm-user-dashboard',
  templateUrl: './mdm-user-dashboard.component.html',
  styleUrls: ['./mdm-user-dashboard.component.css'],
  providers: [MdmUserDashboardService]
})
export class MdmUserDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MdmUserDashboardService, private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = ' ';
    this.title = ' ';
    this.subTitle = ' ';
  }

  getItem(id) {
    this._router.navigateByUrl('na/mdmUser');
  }
}
