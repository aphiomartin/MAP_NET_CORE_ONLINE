import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewAffiliationSumService {

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'businessName',
          templateOptions: {
            label: 'Business/Legal Name',
            placeholder:'Business Name'
          },
          expressionProperties: {
            'templateOptions.disabled': 'true'
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'ownership',
          templateOptions: {
            label: 'Ownership',
          },
          expressionProperties: {
            'templateOptions.disabled': 'true'
          }
        },
      ],
    },
    {
      template: '<span class="mat-subheading-1">Address:</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
          expressionProperties: {
            'templateOptions.disabled': 'true'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
          expressionProperties: {
            'templateOptions.disabled': 'true'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
          expressionProperties: {
            'templateOptions.disabled': 'true'
          }
        },
      ],
    },
    /*{
      template: '<hr />',
    },*/
    {
      type: 'input',
      key: 'remarks',
      templateOptions: {
        label: 'Remarks'
      },
      expressionProperties: {
        'templateOptions.disabled': 'true'
      }
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox'
      },
      expressionProperties: {
        'templateOptions.disabled': 'true'
      }
    },
  ];
     
  constructor() { }
  getPosFields(): FormlyFieldConfig[]{

		return this.fields;
  }
}