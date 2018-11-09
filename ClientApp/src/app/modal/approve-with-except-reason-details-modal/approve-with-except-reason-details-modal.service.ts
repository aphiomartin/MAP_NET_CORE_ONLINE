import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class ApproveWithExceptReasonDetailsModalService {
  fields = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'awerdDate',
          templateOptions: {
            label: 'Date',
            maxLength: 50
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'awerdRequirement',
          templateOptions: {
            label: 'Requirement'
          }
        }
      ]
    },
  
  ];
  constructor() { }
  getFormlyFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}






