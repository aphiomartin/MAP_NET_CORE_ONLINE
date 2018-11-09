import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class MamVerificationScreenFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'customerNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Customer Number',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'businessName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Business / Legal Name',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaTradeName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA (Branch / Trade Name)',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'dbaCity',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA City',
          disabled: true
        },
      },
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress1',
        templateOptions: {
          label: 'DBA(Branch/Outlet Address )',
          placeholder: 'DBA(Branch/Outlet Address )',
          disabled: true
        },
      }]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress2',
        templateOptions: {
          disabled: true
        },
      }]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress3',
        templateOptions: {
          disabled: true
        }
      }]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaAddress4',
        templateOptions: {
          disabled: true
        }
      }]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'dbaZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Zip Code',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        key: 'secDtiRegDateYes',
        type: '',
        templateOptions: {
          label: 'SEC/DTI Registration Date?',
          disabled: true,
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'branchPhoneNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Branch / Outlet Phone Number',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'branchMobileNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Mobile Number',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'branchEmailAddress',
        expressionProperties: {

        },
        templateOptions: {
          label: 'E-Mail Address',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'branchWebsite',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Website',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'settlementAccNoCreditFac',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Settlement Account Number For Credit Facility(If CTA)',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'settlementAccNoForDebit',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Settlement Account Number For Debit Facility(If CTA)',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'tppOnly',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Fee Account (TPP Only)',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAccountNumber',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Account Number',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'holdOutAmount',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Hold-out Amount',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'payDelayDays',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Pay Delay Days',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'taxCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Code(Please Select)',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          template: '<span class="mat-subheading-1">Tax Exempt Validity(mm/dd/yyyy):</span>',
        },


        {
          className: 'flex-1 mat-form-field-infix',
          type: 'calendar',
          key: 'taxExemptValidityFrom',
          expressionProperties: {
          },
          templateOptions: {
            label: 'Date From',
            disabled: true
          }
        },
        {
          className: 'flex-1 mat-form-field-infix',
          type: 'calendar',
          key: 'taxExemptValidityTo',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Date To',
            disabled: true
          }
        },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptCertIssuedBy',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Exempt Certificate Issued By',
          disabled: true
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'taxExemptClass',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Code(Please Select)',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'tin',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Tax Identification Number (TIN)',
          placeholder: 'Tax Identification Number (TIN)',
          disabled: true,
          maxLength: 15
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'nameOfPrincipalOwner',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Principal Owner',
          disabled: true
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Name of Company Signatory/ies',
          placeholder: 'Name of Company Signatory/ies',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory2',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory3',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory4',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory5',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory6',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory7',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory8',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory9',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory10',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory11',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory12',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory13',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory14',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'nameOfCompanySignatory15',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address',
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd2',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd3',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'specialMailingAdd4',
        expressionProperties: {

        },
        templateOptions: {
          disabled: true
        },
      },
      ]
    },
    
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingCity',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address City',
          disabled: true,
          options: [
            { label: 'PASIG', value: '1' },
            { label: 'MAKATI CITY', value: '2' },
            { label: 'MANDALUYONG', value: '3' },
            { label: 'PASAY CITY', value: '4' },
            { label: 'SAN JUAN', value: '5' },
            { label: 'VALENZUELA', value: '6' },
            { label: 'QUEZON CITY', value: '7' },
            { label: 'MANILA', value: '8' }
          ],
        },
      },
      {
        className: 'flex-1',
        type: 'select',
        key: 'specialMailingZipCode',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Special Mailing Address ZipCode',
          disabled: true,
          options: [
            { label: '0400', value: '1' },
            { label: '0401', value: '2' },
            { label: '0410', value: '3' },
            { label: '0420', value: '4' },
            { label: '0550', value: '5' },
            { label: '0560', value: '6' },
            { label: '0700', value: '7' },
            { label: '0701', value: '8' }
          ],
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  //conditional mandatory
        {
          className: 'flex-1', //dropdown
          type: 'select',
          key: 'mcc',
          expressionProperties: {

          },
          templateOptions: {
            label: 'MCC',
            disabled: true,
            options: [
              { label: '5421-Department Store', value: '1' },
              { label: '5422-Food Store', value: '2' },
              { label: '5423-Gaming', value: '3' },
              { label: '5424-Software Industry', value: '4' },
              { label: '5425-Apparel Industry', value: '5' }
            ]
          }
        },
        {
          className: 'flex-1',  //decimal format   //conditional mandatory
          type: 'input',
          key: 'INTES Code for Diners',
          expressionProperties: {

          },
          templateOptions: {
            label: 'INTES Code for Diners',
            disabled: true
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  //conditional mandatory
        {
          className: 'flex-1',
          type: 'select',
          key: 'strategicMerchant',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Strategic Merchant',
            disabled: true,
            options: [
              { label: '1', value: '1' }
            ]
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'mcAssignedId',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'MC Assigned Id',
            disabled: true
            
          }
        },
        {
          className: 'flex-1',//dropdown
          type: 'select',
          key: 'areaMallCode',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Area Mall Code',
            disabled: true,
            options: [
              { label: 'AREA MALL CODE 1', value: '1' },
              { label: 'AREA MALL CODE 2', value: '2' },
              { label: 'AREA MALL CODE 3', value: '3' }
            ]
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  //conditional mandatory
        {
          className: 'flex-1',
          type: 'input',
          key: 'imprinterNumber',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Imprinter Number(Sales Slip Handling)',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'imprinterAmex',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Imprinter AMEX (MID Capping)',
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
          type: 'input',
          key: 'imprinterDc',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Imprinter DC (Top Corporation/Ecom)',
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'imprinterOthers',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Imprinter Others(Class Code)',
            disabled: true
          }
        }            
      ]
    },

    /*                 <-                                     */
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantNumber',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Merchant Number (For Debit)',
            placeholder: 'Merchant Number (For Debit)',
            maxLength: 15
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'storeId',
          expressionProperties: {
  
          },
          templateOptions: {
            label: 'Store ID(For Debit)',
            placeholder: 'Store ID(For Debit)',
            maxLength: 12
          }
        },
        {
          className: 'flex-1',
          key: 'merchantGrade',
          type: 'radio',
          templateOptions: {
            label: 'Merchant Grade',
            required: true,
            options: [
              { value: 1, label: 'High Risk' },
              { value: 2, label: 'Normal Risk' }
            ],
          },
        },            
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  
        {
          className: 'flex-1', 
          type: 'select',
          key: 'amexRiskIndicator',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Amex Risk Indicator',
            options: [
              { label: 'Not Fraudulent', value: '1' },
              { label: 'High Risk', value: '2' }
            ]
          }
        },
        {
          className: 'flex-1',
          key: 'bdoPayRating',
          type: 'radio',
          templateOptions: {
            label: 'BDO Pay Rating',
            required: true,
            options: [
              { value: 1, label: 'Low Risk' },
              { value: 2, label: 'Normal Risk' },
              { value: 3, label: 'High Risk' }

            ],
          },
        },

      ]
    },




    /*                 ->                                    */
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  
        {
          className: 'flex-1',
          type: 'select',
          key: 'terminalBrand',
          templateOptions: {
            label: "Terminal Brand",
            disabled: true
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfTerminalsRequested',
          templateOptions: {
            label: "Number of Terminal/s Requested",
            disabled: true
          }
        },          
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [  
        {
          className: 'flex-1',
          key: 'hotelSetupFacility',
          type: 'radio',
          templateOptions: {
            label: 'HOTEL SET-UP FACILITY (PRE-AUTH, OFF-LINE)?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ],
            disabled: true
          }
        },
        {
          className: 'flex-1',
          key: 'manualKeyInFacility',
          type: 'radio',
          templateOptions: {
            label: 'MANUAL KEY-IN FACILITY?',
            options: [
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ],
            disabled: true
          }
        },         
      ]
    },


  ]
  constructor() { }
  getMamVerFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}
