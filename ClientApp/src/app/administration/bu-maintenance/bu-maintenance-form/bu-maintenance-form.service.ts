import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BuMaintenanceFormService {

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
          key: 'UserName',
          type: 'input',
          className: 'flex-1',
          templateOptions: {
            label: 'UserName',
            required: true
          }
        },
        {
          key: 'BusinessUnit',
          type: 'select',
          className: 'flex-1',
          templateOptions: {
            label: 'Business Unit',
            required: true,
            options: [
              {value: 'Merchant Acquiring Sales Unit', label: 'Merchant Acquiring Sales Unit'}, 
              {value: 'Merchant Affiliation and Maintenance Unit', label: 'Merchant Affiliation and Maintenance Unit'},
              {value: 'Merchant Data Control and Support Unit', label: 'Merchant Data Control and Support Unit'},
              {value: 'Merchant Quality Review Unit', label: 'Merchant Quality Review Unit'},
              {value: 'Merchant Services and Fulfillment Unit', label: 'Merchant Services and Fulfillment Unit'},
              {value: 'Merchant Documentation and Management Unit', label: 'Documentation and Management Unit'},
            ]
          }
        }
      ]
    }
  ]

  constructor() { }

  getBuMaintenanceFields() {
    return this.fields;
  }
}
