import { Injectable,Inject  } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from '../../temp/dashboardData/dashboard-data';
import { AoListData } from "../../temp/aoListData/ao-list-data";

@Injectable()
export class MauOfficerDashboardService {
  //private _dashboard: DashboardData;

  constructor(private http: HttpClient) {
    //this._dashboard = new DashboardData();
  }

  Get() {
    return this.http.get('https://localhost:5001/api/MauOfficerDashboard');
  }

  GetTableFields() {
    //return this._dashboard.Fields;
  }

}
