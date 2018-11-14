import { Injectable } from '@angular/core';

@Injectable()
export class ApproveWithExceptReasonDetailsListService {

  constructor() { }

  getTableFields() {
    return ["Date", "Requirements", "Remarks", "Action"];   
  }

  get() {
    return [
      { Date: '11/30/2018', Requirements: 'MDR-Related', Remarks: 'Remarks' }
    ];
  }
}



