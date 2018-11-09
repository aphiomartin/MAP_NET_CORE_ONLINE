import { Component, OnInit } from '@angular/core';
import { MidFormModalComponent } from '../modal/mid-form-modal/mid-form-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface MidRequest {
  currency: string;
  monitorCode: string;
  merchantGroupCode: string;
  sfcc: string;
}
const ELEMENT_DATA: MidRequest[] = [
  { currency: 'PHP', monitorCode: 'OTC', merchantGroupCode: 'MerchGrp4', sfcc: 'H' },
  { currency: 'USD', monitorCode: 'Reg Inst', merchantGroupCode: 'MerchGrp1Z', sfcc: 'He' },
  { currency: 'PHP', monitorCode: '0% Inst', merchantGroupCode: '', sfcc: 'Li' },
  { currency: 'PHP', monitorCode: 'BNPL Reg', merchantGroupCode: 'MerchGrp4', sfcc: 'Be' },
  { currency: 'PHP', monitorCode: 'BNPL 0%', merchantGroupCode: 'MerchGrp1Z', sfcc: 'B' }

  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-mid-request',
  templateUrl: './mid-request.component.html',
  styleUrls: ['./mid-request.component.css']
})
export class MidRequestComponent implements OnInit {

  displayedColumns: string[] = ['currency', 'monitorCode', 'merchantGroupCode', 'sfcc', 'controls'];
  dataSource = ELEMENT_DATA;
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }
 
  
 
}
