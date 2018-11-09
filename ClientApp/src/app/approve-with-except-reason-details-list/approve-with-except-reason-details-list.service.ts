import { Injectable } from '@angular/core';

@Injectable()
export class ApproveWithExceptReasonDetailsListService {

  constructor() { }

  getTableFields() {
    return ["Date", "Requirements", "Action"];   
  }

  get() {
    return [
      { Date: 'date', Requirements: 'MDR' }
    ];
  }
}



