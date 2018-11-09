import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class MaefFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'alertmessage',
        key: 'errField',
        hideExpression: "model['errField'] == undefined",
        templateOptions: {
          label: ''
        }

      }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'businessName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Business / Legal Name',
          placeholder: 'Business / Legal Name'
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'dbaName',
        expressionProperties: {

        },
        templateOptions: {
          label: 'DBA Name(DBA/Trade Name)',
          placeholder: 'DBA Name(DBA/Trade Name)'
        }
      }
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'alertmessage',
          key: 'alertmsg',
          templateOptions: {
            label: 'label',
            hidden: true
          },
          hideExpression: (model: any, formState: any) => {
            return !model['withSimulInstall'];
          }
        },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          className: 'flex-1',
          key: 'withSimulInstall',
          type: 'radio',
          templateOptions: {
            label: 'With Simul Installment?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          className: 'flex-1',
          key: 'withSimulDebit',
          type: 'radio',
          templateOptions: {
            label: 'With Simul Debit?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          className: 'flex-1',
          key: 'currency',
          type: 'radio',
          templateOptions: {
            label: 'Currency?',
            required: true,
            options: [
              { value: '1', label: 'Peso' },
              { value: '2', label: 'Dollar' },
              { value: '3', label: 'Peso & Dollar' },
            ],
          },
        }

      ]
    },
    {
      template: '<span class="mat-headline">Credit Checking</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'bnpNfisWithAd',
          type: 'radio',
          templateOptions: {
            label: 'BNP NFIS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'bnpNfisWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500,
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'nldsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'NLDS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'nldsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500,
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'pepOfacWithAd',
          type: 'radio',
          templateOptions: {
            label: 'PEP/OFAC',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'pepOfacWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500,
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'matchWithAd',
          type: 'radio',
          templateOptions: {
            label: 'Match',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'matchWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500,
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'vmtsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'VMTS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'vmtsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500,
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'tmrsWithAd',
          type: 'radio',
          templateOptions: {
            label: 'TMRS',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'tmrsWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'fraudWithAd',
          type: 'radio',
          templateOptions: {
            label: 'FRAUD',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'fraudWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          key: 'prevDeclinedWithAd',
          type: 'radio',
          templateOptions: {
            label: 'Previously Declined/Watchlisted',
            required: true,
            options: [
              { value: true, label: 'With Adverse' },
              { value: false, label: 'No Adverse' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'textarea',
          key: 'prevDeclinedWithAdRemarks',
          expressionProperties: {

          },
          templateOptions: {
            label: 'Remarks',
            placeholder: 'Remarks',
            maxLength: 500
          }
        }

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          className: 'flex-1',
          key: 'amlaYes',
          type: 'radio',
          templateOptions: {
            label: 'AMLA',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          key: 'amlaClass',
          className: 'flex-1',
          type: 'radio',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['amlaYes'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Select Classification:',
            options: [
              { value: '1', label: 'High Risk Business' },
              { value: '2', label: 'PEP' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'nameOfPep',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['amlaClass'] == '2';
            }
          },
          templateOptions: {
            label: 'Specify Name/ Relationship Of PEP:',
            placeholder: 'Specify Name/ Relationship Of PEP:'
          }
        },

      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

        {
          className: 'flex-1',
          key: 'rptYes',
          type: 'radio',
          templateOptions: {
            label: 'RPT',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          className: 'flex-1',
          key: 'rptClass',
          type: 'radio',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['rptYes'];
            }
          },
          templateOptions: {
            label: 'If Yes, Please Select Classification:',
            options: [
              { value: '1', label: 'Subsidiary' },
              { value: '2', label: 'Affiliates' },
              { value: '3', label: 'DOSRI' },
              { value: '4', label: 'Other RP' }
            ],
          },

        },

        {
          className: 'flex-1',
          type: 'input',
          key: 'nameOfRp',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['rptClass'] == '3';
            }
          },
          templateOptions: {
            label: 'Specify Name/ Relationship Of RP:',
            placeholder: 'Specify Name/ Relationship Of RP:'
          }
        },

      ]
    },

    {
      template: '<span class="mat-headline">Terms Of Acceptance</span>',
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'location',
          type: 'radio',
          templateOptions: {
            label: 'Location',
            required: true,
            options: [
              { value: '1', label: 'Outskirt' },
              { value: '2', label: 'Non-Outskirt' },
              { value: '3', label: 'Out Of Coverage' }
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'appearance',
          type: 'radio',
          templateOptions: {
            label: 'Appearance',
            required: true,
            options: [
              { value: '1', label: 'Acceptable' },
              { value: '2', label: 'Non-Acceptable' }
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'withTelYes',
          type: 'radio',
          templateOptions: {
            label: 'With Telephone Landline',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
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
          key: 'largeAccYes',
          type: 'radio',
          templateOptions: {
            label: 'Large Account',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },

        },

        {
          className: 'flex-1',
          key: 'natureBus',
          type: 'radio',
          templateOptions: {
            label: 'Nature Of Business',
            required: true,
            options: [
              { value: '1', label: 'Desirable' },
              { value: '2', label: 'Non-Desirable' }
            ],
          },

        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'psv',
          expressionProperties: {
            'templateOptions.required': (model: any, formState: any) => {
              return model['largeAccYes'] == false;
            }
          },
          templateOptions: {
            label: 'PSV',
            placeholder: 'PSV'
          }
        },

      ]
    },

    {
      template: '<span class="mat-headline">Other Checking</span>',
    },


    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'mdrYes',
          type: 'radio',
          templateOptions: {
            label: 'MDR?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
            ],
          },

        },
        {
          className: 'flex-1',
          key: 'dccMarkUpRebateYes',
          type: 'radio',
          templateOptions: {
            label: 'DCC Mark-Up & Rebate?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
            ],
          },

        },
        {
          className: 'flex-1',
          key: 'mccCorrectYes',
          type: 'radio',
          templateOptions: {
            label: 'MCC?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
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
          key: 'intesCodeYes',
          type: 'radio',
          templateOptions: {
            label: 'Intes Code?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'bdoSettlemendCASACreditFacYes',
          type: 'radio',
          templateOptions: {
            label: 'BDO Settlement CA/SA For Credit Facility?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' }
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'bdoSettlemendCASADebitFacYes',
          type: 'radio',
          templateOptions: {
            label: 'BDO Settlement CA/SA For Debit Facility?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' }
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
          key: 'feeAccTppYes',
          type: 'radio',
          templateOptions: {
            label: 'Fee Account(For TPP Only)?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' },
            ],
          },

        },
        {
          className: 'flex-1',
          key: 'holdAccNoYes',
          type: 'radio',
          templateOptions: {
            label: 'Holdout Account Number?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' },
            ],
          },

        },
        {
          className: 'flex-1',
          key: 'tinYes',
          type: 'radio',
          templateOptions: {
            label: 'TIN?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' },
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
          key: 'secDtiRegDateYes',
          type: 'radio',
          templateOptions: {
            label: 'SEC/DTI Registration Date?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'mobileNumberYes',
          type: 'radio',
          templateOptions: {
            label: 'Mobile Number?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
        },
        {
          className: 'flex-1',
          key: 'emailAddYes',
          type: 'radio',
          templateOptions: {
            label: 'Email Address?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
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
          key: 'websiteYes',
          type: 'radio',
          templateOptions: {
            label: 'Website?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' },
              { value: '', label: 'N.A.' },
            ],
          },
        },
        {
          className: 'flex-2',
          key: 'signVerifYes',
          type: 'radio',
          templateOptions: {
            label: 'Signature Verification?',
            required: true,
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ],
          },
        }
      ]
    },
    {
      template: '<span class="mat-headline">Decision</span>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [

  /*      {
          className: 'flex-1',
          type: 'checkbox',
          key: 'chkApprove',
          templateOptions: {
            label: 'Approve'
          },
        }, */
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'chkWithReq',
          templateOptions: {
            label: 'With Requirement'
          },
        },
        {
          className: 'flex-1',
          type: 'checkbox',
          key: 'chkWithException',
          templateOptions: {
            label: 'With Exception'
          },
        },
 /*       {
          className: 'flex-1 mat-form-field-infix',
          type: 'checkDialog',
          key: 'chkDecline',
          templateOptions: {
            label: 'Decline'
          },
        },*/

      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'assignMidCap',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Assigned MID Cap',
          placeholder: 'Assigned MID Cap',
          maxLength: 13
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'payDelay',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Pay Delay Days',
          placeholder: 'Pay Delay Days',
          maxLength: 2
        }
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'holdOutDeposit',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Holdout Deposit',
          placeholder: 'Holdout Deposit',
          maxLength: 19
        }
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'textarea',
        key: 'otherRemarks',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Other Remarks',
          placeholder: 'Other Remarks',
          maxLength: 2000
        },
      },
      {
        className: 'flex-1',
        type: 'input',
        key: 'processedBy',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Processed By',
          placeholder: 'Processed By'
        }
      },
      {
        className: 'flex-1',
        type: 'calendar',
        key: 'dateProcessed',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Date Processed',
          placeholder: 'Date Processed'
        }
      },
      ]
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'input',
        key: 'approver1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 1',
          disabled: true
        },
      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'decision1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 1 Decision',
          disabled: true
        }
      },

      {
        className: 'flex-1',
        type: 'calendar',
        key: 'decisionDate1',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 1 Decision Date',
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
        key: 'approver2',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 2',
          disabled: true
        },
      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'decision2',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 2 Decision',
          disabled: true
        }
      },

      {
        className: 'flex-1',
        type: 'calendar',
        key: 'decisionDate2',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 2 Decision Date',
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
        key: 'approver3',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 3',
          disabled: true
        },
      },

      {
        className: 'flex-1',
        type: 'input',
        key: 'decision3',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 3 Decision',
          disabled: true
        }
      },

      {
        className: 'flex-1',
        type: 'calendar',
        key: 'decisionDate3',
        expressionProperties: {

        },
        templateOptions: {
          label: 'Approver 3 Decision Date',
          disabled: true
        }
      },
      ]
    },



  ];

  constructor() { }
  getMaefFields(): FormlyFieldConfig[] {
    return this.fields;
  }
}
