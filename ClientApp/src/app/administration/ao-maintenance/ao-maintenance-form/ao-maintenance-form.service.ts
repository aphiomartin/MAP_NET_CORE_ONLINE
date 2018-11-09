import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AoMaintenanceFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          key: 'UserId',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'UserId',
            required: true
          }
        },
        {
          key: 'LastName',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'LastName',
            required: true
          }
        },
        {
          key: 'FirstName',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'FirstName',
            required: true
          }
        },
        {
          key: 'MiddleName',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'MiddleName',
            required: true
          }
        },
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          key: 'ContactNumber',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'ContactNumber',
            required: true
          }
        },
        {
          key: 'BusinessUnit',
          type: 'select',
          className: 'flex-1',
          templateOptions: {
            label: 'BusinessUnit',
            options: [
              {
                value: 'ALTERNATIVE CHANNELS UNIT',
                label: 'ALTERNATIVE CHANNELS UNIT'
              },
              {
                value: 'COMMERCIAL CARDS - Luzon/Metro Manila',
                label: 'COMMERCIAL CARDS - Luzon/Metro Manila'
              },
              {
                value: 'COMMERCIAL CARDS UNIT',
                label: 'COMMERCIAL CARDS UNIT'
              }
            ],
            required: true
            
          }
        },
        {
          key: 'Segment',
          type: 'select',
          className: 'flex-1',
          templateOptions: {
            label: 'Segment',
            options: [
              {
                value: 'BAGUIO',
                label: 'BAGUIO'
              },
              {
                value: 'BAGUIO / CAGAYAN VALLEY',
                label: 'BAGUIO / CAGAYAN VALLEY'
              },
              {
                value: 'MANILA AREA',
                label: 'MANILA AREA'
              }
            ],
            required: true
          }
        },
        {
          key: 'BUHeadTag',
          type: 'radio',
          className: 'flex-1',
          defaultValue: 'false',
          templateOptions: {
            label: 'Is Business Unit Head?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' },
            ],
            required: true
          }
        },
      ]
    }
  ]

  constructor() { }

  getAoMaintenanceFormFields() {
    return this.fields;
  }

}
