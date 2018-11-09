import { Injectable } from '@angular/core';
import { ServiceFeeRateListData } from "../../../temp/serviceFeeRateData/service-fee-rate-list-data";

@Injectable()
export class ServiceFeeContractListService {
  private _sfccData: ServiceFeeRateListData

  constructor() { 
    this._sfccData = new ServiceFeeRateListData();
  }

  Get() {
    return this._sfccData;
  }
}
