import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Injectable({
  providedIn: 'root'
})
export class BranchService {
  fields: FormlyFieldConfig[] = [
    {
      
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'branchName',
          templateOptions: {
            label: 'Branch Name11',
            placeholder:'Branch Name'
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'branchCode',
          templateOptions: {
            label: 'Branch Code',
          },
          expressionProperties: { 
          },
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
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
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
    },
    // {
    //   type: 'checkbox',
    //   key: 'otherToo',
    //   templateOptions: {
    //     label: 'Other Checkbox'
    //   },
    // },
  ];
  constructor() { }
  getBranchFields(): FormlyFieldConfig[]{

		return this.fields;
  }
}
