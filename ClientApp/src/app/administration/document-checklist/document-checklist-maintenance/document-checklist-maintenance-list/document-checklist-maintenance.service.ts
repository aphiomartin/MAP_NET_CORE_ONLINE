import { Injectable } from '@angular/core';
import { DocumentListData } from "../../../../temp/documentListData/document-list-data";

@Injectable()
export class DocumentChecklistMaintenanceService {
  private _dclMaintenanceData: DocumentListData;


  constructor() {
    this._dclMaintenanceData = new DocumentListData();
  }

  Get() {
    return this._dclMaintenanceData;
  }
}
