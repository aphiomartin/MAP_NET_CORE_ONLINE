import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = '';
@Injectable()
export class MidService {

  constructor(private _http: HttpClient) { }

  get() {
    // return this._http.get(apiUrl);
    return [
      { Id: 1, Currency: 'PHP', MonitorCode: 'OTC', CardPlans: 'MCVCJCACCCDC', Status: 'ACTIVE' },
      { Id: 2, Currency: 'PHP', MonitorCode: 'Installment Reg', CardPlans: 'MCVCJCACCCDC', Status: 'ACTIVE' },
      { Id: 3, Currency: 'PHP', MonitorCode: '0% Installment', CardPlans: 'AC', Status: 'ACTIVE' },
      { Id: 4, Currency: 'USD', MonitorCode: 'BNPL', CardPlans: 'MCVCJCACCCDC', Status: 'ACTIVE' },
      { Id: 5, Currency: 'USD', MonitorCode: '0% BNPL', CardPlans: 'MCVCJCACCCDC', Status: 'ACTIVE' },
    ];
  }
  getTableFields(update) {
    return ['Currency', 'MonitorCode', 'CardPlans', 'Status', 'Mid', 'DebitTid', 'Action'];
  }

  create(): void {
    this._http.post(apiUrl, {});
  }

  update(): void {
    this._http.post(apiUrl, {});
  }
}
