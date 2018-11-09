import { Injectable } from '@angular/core';
import { ParameterMaintenanceListData } from "../../../temp/parameter-maintenance-data/parameter-maintenance-data";

@Injectable()
export class ParameterMaintenanceListService {
  private _paramData: ParameterMaintenanceListData

  constructor() { 
    this._paramData = new ParameterMaintenanceListData();
  }

  Get() {
    return this._paramData;
  }



}
