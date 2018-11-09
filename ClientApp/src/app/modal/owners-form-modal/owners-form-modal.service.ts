import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MaxLengthValidator } from '@angular/forms';

@Injectable()
export class OwnersFormModalService {
  aoFields = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            maxLength: 50
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'percentOfOwnership',
          templateOptions: {
            label: '% of Ownership'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'typeOfRelatedParty',
          templateOptions: {
            label: 'Type of Related Party',
            options: [
              { label: 'DOSRI', value: 1 },
              { label: 'Subsidiary', value: 2 },
              { label: 'Affiliate', value: 3 },
              { label: 'Other Related Party', value: 4 }
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'remarks',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['typeOfRelatedParty'] != undefined;
            }
          },
          templateOptions: {
            label: 'Remarks',
            maxLength: 120
          }
        }
      ]
    }
  ];

  mdcsFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            maxLength: 50
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'percentOfOwnership',
          templateOptions: {
            label: '% of Ownership',
            disabled: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'typeOfRelatedParty',
          templateOptions: {
            label: 'Type of Related Party',
            options: [
              { label: 'DOSRI', value: 1 },
              { label: 'Subsidiary', value: 2 },
              { label: 'Affiliate', value: 3 },
              { label: 'Other Related Party', value: 4 }
            ],
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'remarks',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['typeOfRelatedParty'] != undefined;
            }
          },
          templateOptions: {
            label: 'Remarks',
            maxLength: 120,
            disabled: true
          }
        }
      ]
    }
  ];

  constructor() { }

  getFormlyFields(userGroup): FormlyFieldConfig[] {
    var fields;
    if (userGroup == 'ao') {
      fields = this.aoFields;
    } else if (userGroup == 'mdcs') {
      fields = this.mdcsFields;
    }

    return fields;
  }
}
