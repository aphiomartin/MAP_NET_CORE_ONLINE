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
        type: 'select',
        key: 'awrsName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name',
          required: true,
          options: [
            { label: 'CA/SA-Related', value: '1' },
            { label: 'MDR-Related', value: '2' },
            { label: 'POS Rental-Related', value: '3' },
            { label: 'BDO Pay-Related', value: '4' },
            { label: 'Incomplete Document', value: '5' },
            { label: 'Signature Matching', value: '6' },
            { label: 'Others', value: '7' }
          ],
        },
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
        className: 'flex-1',
        type: 'checkbox',
        key: 'chkAwrsStatus',
        expressionProperties: {
      },
        templateOptions: {
          label: 'Complied'
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





