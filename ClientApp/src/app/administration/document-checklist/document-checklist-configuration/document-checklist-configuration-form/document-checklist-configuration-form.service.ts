import { Injectable } from '@angular/core';
import { DocumentListData } from "../../../../temp/documentListData/document-list-data";
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DocumentChecklistConfigurationFormService {
  private _dclMaintenanceData: DocumentListData;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          template: '<span class="mat-subheading-1"> Select Request Type </span>',
          className: 'flex-1'
        },
        {
          template: '<span class="mat-subheading-1"> Select Ownership Type </span>',
          className: 'flex-1'
        }
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          key: 'RequestType',
          type: 'select',
          className: 'flex-1',
          templateOptions: {
            label: 'Request Type',
            required: true,
            options: [
              { value: 'NEW_AFFILIATION', label: 'NEW AFFILIATION' },
              { value: 'BRANCH_AFFILIATION', label: 'BRANCH AFFILIATION' },
              { value: 'FILE_MAINTENANCE', label: 'FILE MAINTENANCE' },
            ]
          }
        },
        {
          key: 'Ownership',
          type: 'select',
          className: 'flex-1',
          templateOptions: {
            label: 'Ownership',
            required: true,
            options: [
              { value: 'SINGLE PROPRIETORSHIP', label: 'SINGLE PROPRIETORSHIP' },
              { value: 'PARTNERSHIP', label: 'PARTNERSHIP' },
              { value: 'CORPORATION', label: 'CORPORATION' },
              { value: 'COOPERATIVE', label: 'COOPERATIVE' },
              { value: 'OTHERS', label: 'OTHERS' }
            ]
          }
        },
      ]
    }
  ]

  constructor() {
    this._dclMaintenanceData = new DocumentListData();
  }

  Get() {
    return this._dclMaintenanceData;
  }

  GetDocumentConfigurationFields() {
    return this.fields;
  }
}
