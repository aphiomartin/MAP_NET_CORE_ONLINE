import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class SignatoriesFormModalService {

  constructor() { }

  getFormlyFields(): FormlyFieldConfig[] {
    return [
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
            key: 'signingAuthority',
            templateOptions: {
              label: 'Signing Authority',
              maxLength: 50
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
            key: 'position',
            templateOptions: {
              label: 'Position',
              maxLength: 22
            }
          },
          {
            className: 'flex-1',
            type: 'select',
            key: 'applicableTo',
            defaultValue: 1,
            templateOptions: {
              label: 'Applicable To',
              options: [
                { label: 'Legal Name', value: 1 },
                { label: 'Branch <DBA Name>', value: 2 }
              ]
            }
          }
        ]
      }
    ];
  }
}
