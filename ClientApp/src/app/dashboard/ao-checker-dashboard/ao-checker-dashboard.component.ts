import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AoCheckerDashboardService } from './ao-checker-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';


@Component({
  selector: 'app-ao-checker-dashboard',
  templateUrl: './ao-checker-dashboard.component.html',
  styleUrls: ['./ao-checker-dashboard.component.css'],
  providers: [AoCheckerDashboardService]
})
export class AoCheckerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: AoCheckerDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = '';
    this.title = '';
    this.subTitle = '';
  }

  private getItem(Id) {
    this._router.navigateByUrl('na/aoChecker');
  }
}
