import { Injectable } from '@angular/core';
import { DocumentListConfigurationData } from "../../../../temp/documentListConfigurationData/document-list-configuration-data";

@Injectable()
export class DocumentChecklistConfigurationListService {
  private _documentListConfigurationData: DocumentListConfigurationData

  constructor() { 
    this._documentListConfigurationData = new DocumentListConfigurationData;
  }

  Get() {
    return this._documentListConfigurationData;
  }
}
