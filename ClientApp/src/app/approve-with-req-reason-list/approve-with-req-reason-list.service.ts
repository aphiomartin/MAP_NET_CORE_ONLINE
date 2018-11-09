import { Injectable } from '@angular/core';

@Injectable()
export class ApproveWithReqReasonListService {

  constructor() { }

  getTableFields() {
    return ["Name", "Remarks", "Action"];   
  }

  get() {
    return [
      { Name: 'MDR', Remarks: 'MDR Remarks' }
    ];
  }

}









