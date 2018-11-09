import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ServiceFeeContractFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'vc',
          templateOptions: {
            label: 'VC',
            required: true
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'jcb',
          templateOptions: {
            label: 'JCB',
            required: true
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cup',
          templateOptions: {
            label: 'CUP',
            required: true
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'mc',
          templateOptions: {
            label: 'MC',
            required: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'amex',
          templateOptions: {
            label: 'AMEX',
            required: true
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dc',
          templateOptions: {
            label: 'DC',
            required: true
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'serviceFeeRate',
          templateOptions: {
            label: 'Service Fee Rate'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'code',
          templateOptions: {
            label: 'Code',
            required: true
          }
        }
      ]
    }
  ]


  constructor() { }

  getServiceFeeContractFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}
