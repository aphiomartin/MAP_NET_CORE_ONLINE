import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'api/customerProfile';
@Injectable()
export class CustomerProfileService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'legalName',
          templateOptions: {
            label: 'Business/Legal Name',
            placeholder: 'Business Name'
          },
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'ownership',
          templateOptions: {
            // label: 'Owner ship',
            placeholder: 'Ownership',
            options: [
              { name: 'Single Proprietorship', id: 1 },
              { name: 'Partnership', id: 2 },
              { name: 'Corporation', id: 3 },
              { name: 'Registered Association, Cooperative & Organization', id: 4 },
              { name: 'GOCC', id: 5 },
              { name: 'Resident Foreign Corporation', id: 6 },
              { name: 'Resident Foreign Partnership', id: 7 },
              { name: 'Branch or Representative Office of Foreign Corporation Company', id: 8 },
              { name: 'Foreign Individual Single Proprietorship', id: 9 },
              { name: 'Others', id: 10 }
            ],
            valueProp: 'id',
            labelProp: 'name'
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'dtiRegDate',
          templateOptions: {
            label: 'Sec/DTI Registration Date'
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'registeredBusinessNumber',
          templateOptions: {
            label: 'Registered Business Number',
            maxLength: 11
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'customerNumber',
          templateOptions: {
            label: 'Customer Number',
            maxLength: 12
          }
        }
      ]
    }
  ];

  constructor(private _http: HttpClient) { }

  getCustomerProfileFields(): FormlyFieldConfig[] {
    return this.fields;
  }

  create(customerProfile): Observable<any> {
    return this._http.post(apiUrl, customerProfile);
  }

  update(id, customerProfile): Observable<any> {
    return this._http.put(apiUrl + '/' + id, customerProfile);
  }
}

