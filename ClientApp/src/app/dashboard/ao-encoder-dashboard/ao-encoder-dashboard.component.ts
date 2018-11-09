import { Component, OnInit } from '@angular/core';
import { AoEncoderDashboardService } from './ao-encoder-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ao-encoder-dashboard',
  templateUrl: './ao-encoder-dashboard.component.html',
  styleUrls: ['./ao-encoder-dashboard.component.css'],
  providers: [AoEncoderDashboardService]
})
export class AoEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: AoEncoderDashboardService, private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get(0);

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'AO Encoder';
  }

  getItem() {
    this._router.navigateByUrl('na/aoEncoder/update')
  }
}
