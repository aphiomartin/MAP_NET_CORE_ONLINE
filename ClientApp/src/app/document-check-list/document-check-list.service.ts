import { Injectable } from '@angular/core';

export interface DocumentDisplayInfo {
  Id: number;
  Submitted: boolean;
  DocumentName: String;
  Remarks: String;
  TargetDateOfSubmission: String;
  FileUpload: String;
}

const TEST_DATA: DocumentDisplayInfo[] = [
  {
    Id: 1, Submitted: true, DocumentName: 'BDO\'s Merchant Information Sheet (MIS)',
    Remarks: 'Marked as submitted but no file is attached.', TargetDateOfSubmission: '08/29/2018', FileUpload: ''
  },
  {
    Id: 2, Submitted: true, DocumentName: 'BDO\'s Ocular Inspection Form (OIF)',
    Remarks: 'Marked as submitted but no file is attached.', TargetDateOfSubmission: '08/29/2018', FileUpload: ''
  }
];

@Injectable()
export class DocumentCheckListService {

  constructor() { }

  get() {
    return TEST_DATA;
  }
  getById() { }
  getTableFields() {
    return ['DocumentName', 'Submitted', 'Remarks', 'TargetDateOfSubmission', 'FileUpload', 'Action'];
  }
}
