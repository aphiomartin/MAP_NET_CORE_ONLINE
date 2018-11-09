import { Component, OnInit } from '@angular/core';
import { MauEncoderDashboardService } from './mau-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mau-encoder-dashboard',
  templateUrl: './mau-encoder-dashboard.component.html',
  styleUrls: ['./mau-encoder-dashboard.component.css'],
  providers: [MauEncoderDashboardService]
})
export class MauEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MauEncoderDashboardService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = '';
    this.title = '';
    this.subTitle = '';
  }

  GetItem(id) {
    this._router.navigateByUrl('mauEncoder');
  }
}
