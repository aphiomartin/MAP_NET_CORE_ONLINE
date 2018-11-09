import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class ApproveWithReqReasonFormModalService {
 fields = [
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        className: 'flex-1',
        type: 'input',
        key: 'awrsName',
        templateOptions: {
          label: 'Name',
          maxLength: 50
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'awrsRemarks',
        templateOptions: {
          label: 'Remarks'
        }
      }
    ]
  },
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'reqStatus',
        type: 'radio',
        templateOptions: {
          label: 'Requirement Status?',
          options: [
            { value: '1', label: 'Complied' },
            { value: '2', label: 'Pending' }
          ],
        },

      },

    ]
  },

];

constructor() { }
getFormlyFields(): FormlyFieldConfig[] {
  return this.fields;
}
}





