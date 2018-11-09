import { Injectable } from '@angular/core';

@Injectable()
export class PosListService {

  constructor() { }

  getTableFields() {
    return ['PosTrackingNumber','NatureOfRequest','DateRequested','RequestedBy', 'Action'];
  }

  get() {
    return [
      { PosTrackingNumber: '00000001', NatureOfRequest: 'New Installation', DateRequested: '10/15/2018', RequestedBy: 'Juan dela Cruz' }
    ];
  }
}
