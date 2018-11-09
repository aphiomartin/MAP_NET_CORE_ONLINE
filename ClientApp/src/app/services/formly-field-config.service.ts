import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormlyFieldConfigService {

  constructor() { }

  enabled(fields: FormlyFieldConfig[]) {
    fields.forEach(field => {
      field.expressionProperties = field.expressionProperties || {};
      if (field.fieldGroup) {
        field.fieldGroup.forEach(fieldInGroup => {
          fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
        });
      }
    });
  }

  disabled(fields: FormlyFieldConfig[]) {
    fields.forEach(field => {
      field.expressionProperties = field.expressionProperties || {};
      field.expressionProperties['templateOptions.disabled'] = 'formState.disabled';
      if (field.fieldGroup) {
        field.fieldGroup.forEach(fieldInGroup => {
          fieldInGroup.expressionProperties = fieldInGroup.expressionProperties || {};
          fieldInGroup.expressionProperties['templateOptions.disabled'] = () => {
            return true;//'formState.disabled';
          };
        });
      }
    });
  }
}
