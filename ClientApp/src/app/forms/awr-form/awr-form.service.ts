import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';

const apiUrl = '';
@Injectable()
export class AwrFormService {
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'legalName',
          type: 'input',
          expressionProperties: {
            'templateOptions.disabled': 'true'
          },
          templateOptions: {
            label: 'Legal Name'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'dbaName',
          expressionProperties: {
            'templateOptions.disabled': 'true'
          },
          templateOptions: {
            label: 'DBA Name'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'dbaAddress',
          templateOptions: {
            label: 'DBA Address'
          }
        }
      ]
    },
    // {
    //   fieldGroupClassName: 'display-flex',
    //   fieldGroup: [
    //     {
    //       className: 'flex-1 break-word',
    //       key: 'isMdrRelated',
    //       type: 'checkbox',
    //       templateOptions: {
    //         label: 'MDR Related'
    //       }
    //     },
    //     {
    //       className: 'flex-1 break-word',
    //       type: 'input',
    //       key: 'mdrRelatedDetails',
    //       templateOptions: {
    //         label: 'Details',
    //         maxLength: 50
    //       }
    //     },
    //     {
    //       className: 'flex-1 break-word',
    //       type: 'checkbox',
    //       key: 'isIncompleteDetails',
    //       templateOptions: {
    //         label: 'Type of Affiliation'
    //       }
    //     },
    //     {
    //       className: 'flex-1 break-word',
    //       type: 'input',
    //       key: 'incompleteDetails',
    //       templateOptions: {
    //         label: 'Details',
    //         maxLength: 50
    //       }
    //     }
    //   ]
    // },
    {
      template: '<div class="display-flex"><span class="mat-headline">PENDING REQUIREMENT</span></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isMdrRelated',
          type: 'checkbox',
          templateOptions: {
            label: 'MDR Related'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'mdrRelatedDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isIncompleteDetails',
          templateOptions: {
            label: 'Incomplete Details in Merchant Info Sheet'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isIncompleteMerchantAgreement',
          type: 'checkbox',
          templateOptions: {
            label: 'Incomplete / Incorrect Details in Merchant Agreement'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteMerchantAgreementDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isIncompleteSecretaryCertificate',
          templateOptions: {
            label: 'Is Incomplete Details in Secretary Certificate'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteSecretaryCertificateDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isIncompleteOif',
          type: 'checkbox',
          templateOptions: {
            label: 'Incomplete Details in OIF'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteOifDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          key: 'isIncompleteDetailsInOtherBusinessDocuments',
          type: 'checkbox',
          templateOptions: {
            label: 'Incomplete Details In Other Business Documents'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteDetailsInOtherBusinessDocumentsDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
      ]
    },
    // {
    //   template: '<div class="display-flex"><span class="mat-headline">INCOMPLETE DETAILS IN OTHER BUSINESS DOCUMENTS</span></div>',
    // },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        
        {
          className: 'flex-1 break-word',
          key: 'isIncompleteCorporatePapers',
          type: 'checkbox',
          templateOptions: {
            label: 'Incomplete Corporate Papers'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteCorporatePapersDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isIncompleteId',
          templateOptions: {
            label: 'Incomplete ID of Signatory'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteIdDtails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isIncompletePhotos',
          type: 'checkbox',
          templateOptions: {
            label: 'Incomplete Photos'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompletePhotosDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isIncompleteDocument',
          templateOptions: {
            label: 'Incomplete Document'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'incompleteDocumentDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isNoProofDbaName',
          type: 'checkbox',
          templateOptions: {
            label: 'No Proof of DBA Name'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'noProofDbaNameDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'noProofDbaAddress',
          templateOptions: {
            label: 'No Proof of DBA Address'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'noProofDbaAddressDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isUnclearDocument',
          type: 'checkbox',
          templateOptions: {
            label: 'Unclear Document'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'unclearDocumentDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isExpiredDocument',
          templateOptions: {
            label: 'Expired Document'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'expiredDocumentDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isComparedWithOriginal',
          type: 'checkbox',
          templateOptions: {
            label: 'Document Without \'Compared with Original Copy\' Stamp'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'comparedWithOriginalDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isSignatureMatched',
          templateOptions: {
            label: 'Signature Matching'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'signatureMatchedDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isInformationMatching',
          type: 'checkbox',
          templateOptions: {
            label: 'Information Matching'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'informationMatchingDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          key: 'isMismatchSfccMdr',
          type: 'checkbox',
          templateOptions: {
            label: 'Mismatch SFCC vs MDR in MIS'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'mismatchSfccMdrDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'noPosFormInSharedFolder',
          templateOptions: {
            label: 'No POS Form in Shared Folder'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'noPosFormInSharedFolderDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          key: 'noBuhApprovalOn',
          type: 'checkbox',
          templateOptions: {
            label: 'No BUH Approval On'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'noBuhApprovalOnDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isGprsTerminal',
          type: 'checkbox',
          templateOptions: {
            label: 'GPRS Terminal'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'noDebitFacility',
          templateOptions: {
            label: 'No Debit Facility'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'zeroPayDelay',
          templateOptions: {
            label: 'Zero (0) Pay Delay'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'newContactDetails',
          templateOptions: {
            label: 'New Contact Details'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isInvalidCasa',
          type: 'checkbox',
          templateOptions: {
            label: 'Invalid CASA / Third Party'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'invalidCasaDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isSettlementOfOutstandingBalance',
          templateOptions: {
            label: 'Settlement of Outstanding Balance / Past Due'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'settlementOfOutstandingBalanceDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'noHoldoutDeposit',
          type: 'checkbox',
          templateOptions: {
            label: 'No Holdout Deposit in ICBS'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'noHoldoutDepositDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isEcrSp',
          templateOptions: {
            label: 'ECR SP Details (Not Included in Visa Whitelist / Incomplete SP Info) Details'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'ecrSpDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          key: 'isNotes',
          type: 'checkbox',
          templateOptions: {
            label: 'Notes / Remarks'
          }
        },
        {
          className: 'flex-5 break-word',
          type: 'input',
          key: 'notesDetails',
          templateOptions: {
            label: 'Details',
            maxLength: 50
          }
        },
      ]
    },
    {
      template: '<div class="display-flex"><span class="mat-headline">REQUIREMENT TYPE</span></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isReturned',
          templateOptions: {
            label: 'Returned'
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'isNotReturned',
          templateOptions: {
            label: 'Not Returned'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'ao',
          templateOptions: {
            label: 'Account Officer',
            disabled: true
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'bu',
          templateOptions: {
            label: 'Business Unit',
            disabled: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'creditOfficerOfMaef',
          templateOptions: {
            label: 'Name of Credit Officer of MAEF',
            disabled: true
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'approverOfMaef',
          templateOptions: {
            label: 'Name of Approver of MAEF',
            disabled: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'input',
          key: 'remarksMaef',
          templateOptions: {
            label: 'Remarks / Special Conditions Indicated in the MAEF (if any)',
            disabled: true
          }
        }
      ]
    },
    {
      template: '<div class="display-flex"><span class="mat-headline">AO COMPLIANCE</span></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1 break-word',
          type: 'checkbox',
          key: 'complete',
          templateOptions: {
            label: 'Complete',
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkDialog',
          key: 'cancel',
          templateOptions: {
            label: 'Cancel',
          }
        },
        {
          className: 'flex-1 break-word',
          type: 'checkDialog',
          key: 'isTempoWaiver',
          templateOptions: {
            label: 'Tempo Waiver'
          }
        }
      ]
    }
  ];

  constructor(private http: HttpClient) { }

  Get() { }
  GetById() { }

  GetFormlyFields() {
    return this.fields;
  }

  Save() { }
  Update() { }
}
