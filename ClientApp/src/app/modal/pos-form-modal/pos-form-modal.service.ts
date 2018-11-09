import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class PosFormModalService {

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'natureOfRequest',
          templateOptions: {
            label: 'Nature Of Request',
            options: [
              { value: 1, label: 'Installation' },
              { value: 2, label: 'Reprogramming' },
              { value: 3, label: 'TID Issuance' }
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'reprogrammingType',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Reprogramming Type',
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'tidIssuanceType',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 3;
            }
          },
          templateOptions: {
            label: 'TID Issuance Type'
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
          key: 'requestersName',
          templateOptions: {
            label: 'Requester\'s Name'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestersBusinessUnit',
          templateOptions: {
            label: 'Requester\'s Business Unit'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'requestersContactNumber',
          templateOptions: {
            label: 'Requester\'s Contact Number / Cellphone Number'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'area',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Business Unit / Area (where POS will be charged)'
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'accountOfficerHandler',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Account Officer / Handler'
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessTypeOfAccount',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Business Type Of Account (AO / RM / HO)',
            valueProp: 'BusinessTypeOfAcccount_Id',
            labelProp: 'Description',
            options: [
              { BusinessTypeOfAcccount_Id: '1', Description: 'AO' },
              { BusinessTypeOfAcccount_Id: '2', Description: 'RM' },
              { BusinessTypeOfAcccount_Id: '3', Description: 'HO' }
            ]
          },
          defaultValue: '1'
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessUnitAO',
          templateOptions: {
            label: 'Business Unit (AO\'s Business Unit)',
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'businessUnitAO',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 || model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Business Unit (AO\'s Business Unit)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'segment',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 || model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Segment'
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
          key: 'approvedBy',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Approved By (Business Unit Head)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantLegalName',
          templateOptions: {
            label: 'Merchant\'s Legal Name'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDBAName',
          templateOptions: {
            label: 'Merchant\'s DBA Name'
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
          key: 'merchantNameOnSignage',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Merchant\'s Name on Signage'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDbaAddress',
          templateOptions: {
            label: 'Merchant\'s DBA Address'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'merchantDbaAddressOld',
          templateOptions: {
            label: 'Merchant\'s DBA Address (old)'
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
          key: 'merchantDbaCity',
          templateOptions: {
            label: 'Merchant\'s DBA City'
          }
        },
        {
          className: 'flex-1',
          key: 'isContactlessMerchant',
          type: 'radio',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Contactless Merchant?',
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ]
          }
        },
        {
          className: 'flex-1',
          key: 'isMultiMerchant',
          type: 'radio',
          templateOptions: {
            label: 'Multi-Merchant?',
            options: [
              { value: true, label: 'Yes' },
              { value: false, label: 'No' }
            ]
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
          key: 'merchantCategoryCode',
          templateOptions: {
            label: 'Merchant Category Code (MCC)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'nsp',
          templateOptions: {
            label: 'NSP'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'contactPerson',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Contact Person (Outlet / Branch) Name / Email Address)'
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
          key: 'contactNumber',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Contact Number (Outlet / Branch) Name / Email Address)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'numberOfPrintedSlips',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Number of Printed Slips'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'reasonForThreeSlipsPrinting',
          templateOptions: {
            label: 'Reason For 3 Slips Printing'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredDateAndTimeOfDispatch',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 || model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Required Date and Time of Dispatch'
          }
        },
        {
          className: 'flex-1',
          type: 'radio',
          key: 'isInstallationTerm',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Installation Term',
            options: [
              { value: 'Permanent', label: 'Permanent' },
              { value: 'Temporary', label: 'Temporary' },
            ]
          }
        },
        {
          className: 'flex-1',
          type: 'calendar',
          key: 'requiredPullOutDateForTempPOSTerminals',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Required Pull Out Date For Temporary POS Terminals'
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
          key: 'reasonForPermanentGPRSInstallation',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1;
            }
          },
          templateOptions: {
            label: 'Reason For Permanent GPRS Installation'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'otherRequiredProfilingFacility',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)'
          }
        },
        {
          className: 'flex-1',
          type: 'select',
          key: 'mustSettle',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Must Settle (No. of Days Required)'
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
          key: 'remarksSpecialInstructions',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 || model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Remarks / Special Instructions (Dispatch-Related Only)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'creditStraightMidVmjaVmjacVmjacd',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 2 && model['natureOfRequest'] !== 3;
            }
          },
          templateOptions: {
            label: 'Credit Straight MID-VMJA/VMJAC/VMJACD'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'emailSubject',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'Email Subject'
          }
        }
        // ,
        // {
        //   className: 'flex-1',
        //   type: 'input',
        //   key: 'creditStraightTidExisting',
        //   expressionProperties: {
        //     'templateOptions.disabled': (model: any, formState: any) => {
        //       return model['natureOfRequest'] !== 2;
        //     }
        //   },
        //   templateOptions: {
        //     label: 'Credit Straight TID (existing)'
        //   }
        // },
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateTimeEndorsedPaymentSolutionsOperations',
          templateOptions: {
            label: 'Date and Time Endorsed to Payment Solutions Operations'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileNumberOfTerminals',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Number of Terminals (Count)'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileBusinessGroup',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Business Group (If applicable)'
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
          key: 'bdoPayMobileMerchantPortalUserEmailAddress',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Merchant Portal User\'s Email Address'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileMerchantPortalNominatedUsername',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Merchant Portal Nominated Username'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileInternetConnection',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Internet Connection'
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
          key: 'bdoPayMobileInternetProvider',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Internet Provider'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileReferenceField',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – Reference Field'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'bdoPayMobileRfName',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 1 && model['natureOfRequest'] !== 2;
            }
          },
          templateOptions: {
            label: 'BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)'
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
          key: 'tidIssuedBy',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 3;
            }
          },
          templateOptions: {
            label: 'TID Issued By'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateAndTimeTidIssued',
          expressionProperties: {
            'templateOptions.disabled': (model: any, formState: any) => {
              return model['natureOfRequest'] !== 3;
            }
          },
          templateOptions: {
            label: 'Date and Time TID Issued'
          }
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'dateAndTimeEndorsedToMAU',
          templateOptions: {
            label: 'Date and Time Endorsed To MAU'
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
          key: 'dateTimeAssignedPSProfiling',
          templateOptions: {
            label: 'Date and Time Assigned to PS Profiling'
          }
        },
        {className: 'flex-2'}
      ]
    },
  ];

  // aoFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [{
  //       className: 'flex-1',
  //       type: 'select',
  //       key: 'natureOfRequest',
  //       templateOptions: {
  //         label: 'Nature Of Request',
  //       }
  //     }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       // {
  //       //   className: 'flex-1',
  //       //   type: 'input',
  //       //   key: 'requestersName',
  //       //   templateOptions: {
  //       //     label: 'Requester's Name',

  //       //   }
  //       // },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'requestersBusinessUnit',
  //         templateOptions: {
  //           label: 'Requester's Business Unit',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'requestersContactNumber',
  //         templateOptions: {
  //           label: 'Requester's Contact Number / Cellphone Number',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'select',
  //         key: 'area',
  //         templateOptions: {
  //           label: 'Business Unit / Area (where POS will be charged)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'select',
  //         key: 'accountOfficerHandler',
  //         templateOptions: {
  //           label: 'Account Officer / Handler',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'select',
  //         key: 'businessTypeOfAccount',
  //         templateOptions: {
  //           label: 'Business Type Of Account (AO / RM / HO)',
  //           valueProp: 'BusinessTypeOfAcccount_Id',
  //           labelProp: 'Description',
  //           options: [
  //             { BusinessTypeOfAcccount_Id: '1', Description: 'AO' },
  //             { BusinessTypeOfAcccount_Id: '2', Description: 'RM' },
  //             { BusinessTypeOfAcccount_Id: '3', Description: 'HO' }
  //           ]
  //         },
  //         defaultValue: '1'

  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'select',
  //         key: 'businessUnitAO',
  //         templateOptions: {
  //           label: 'Business Unit (AO's Business Unit) ',
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'segment',
  //         templateOptions: {
  //           label: 'Segment',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'approvedBy',
  //         templateOptions: {
  //           label: 'Approved By (Business Unit Head)',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantLegalName',
  //         templateOptions: {
  //           label: 'Merchant's Legal Name',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantDBAName',
  //         templateOptions: {
  //           label: 'Merchant's DBA Name',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantNameOnSignage',
  //         templateOptions: {
  //           label: 'Merchant's Name on Signage',
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantDBAAddress',
  //         templateOptions: {
  //           label: 'Merchant's DBA Address',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantDBACity',
  //         templateOptions: {
  //           label: 'Merchant's DBA City',

  //         }
  //       },
  //       {
  //         key: 'contactlessMerchant',
  //         type: 'radio',
  //         templateOptions: {
  //           label: 'Contactless Merchant?',
  //           options: [
  //             { value: 'Yes', label: 'Yes' },
  //             { value: 'No', label: 'No' }
  //           ],
  //         },
  //         defaultValue: 'No'
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'merchantCategoryCode',
  //         templateOptions: {
  //           label: 'Merchant Category Code (MCC)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'nsp',
  //         templateOptions: {
  //           label: 'NSP',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'contactPerson',
  //         templateOptions: {
  //           label: 'Contact Person',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'contactNumber',
  //         templateOptions: {
  //           label: 'Contact Number',
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'numberOfPrintedSlips',
  //         templateOptions: {
  //           label: 'Number of Printed Slips',
  //         },
  //         defaultValue: 2
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'reasonForThreeSlipsPrinting',
  //         templateOptions: {
  //           label: 'Reason For 3 Slips Printing'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'calendar',
  //         key: 'requestDateAndTimeOfDispatch',
  //         templateOptions: {
  //           label: 'Request Date And Time Of Dispatch',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'radio',
  //         key: 'installationTerm',
  //         templateOptions: {
  //           label: 'Installation Term',
  //           options: [
  //             { value: 'Permanent', label: 'Permanent' },
  //             { value: 'Temporary', label: 'Temporary' },
  //           ]
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'calendar',
  //         key: 'requestPullOutDateForTempPOSTerminals',
  //         templateOptions: {
  //           label: 'Request Pull Out Date For Temporary POS Terminals',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'reasonForPermanentGPRSInstallation',
  //         templateOptions: {
  //           label: 'Reason For Permanent GPRS Installation',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'otherRequiredProfilingFacility',
  //         templateOptions: {
  //           label: 'Other Required Profiling Facility (tip adjust, binver, BDO Pay, etc)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'select',
  //         key: 'mustSettle',
  //         templateOptions: {
  //           label: 'Must Settle (No. Of Days Required)',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'remarksSpecialInstructions',
  //         templateOptions: {
  //           label: 'Remarks / Special Instructions (Dispatch-Related Only)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'calendar',
  //         key: 'dateAndTimeEndorsedToMAU',
  //         templateOptions: {
  //           label: 'Date and Time Endorsed To MAU',

  //         }
  //       }
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'creditStraightMidVmjaVmjac',
  //       //       templateOptions: {
  //       //         label: 'Credit Straight MID-VMJA/VMJAC',

  //       //       }
  //       //     }
  //       //   ]
  //       // },
  //       // {
  //       //   fieldGroupClassName: 'display-flex',
  //       //   fieldGroup: [
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'creditStraightMidVmj',
  //       //       templateOptions: {
  //       //         label: 'Credit Straight MID-VMJ',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'creditStraightMidAmex',
  //       //       templateOptions: {
  //       //         label: 'Credit Straight MID-AMEX (If with VMJ)',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'cupAcceptorId',
  //       //       templateOptions: {
  //       //         label: 'CUP Acceptor ID',

  //       //       }
  //       //     },
  //       //   ]
  //       // },
  //       // {
  //       //   fieldGroupClassName: 'display-flex',
  //       //   fieldGroup: [
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'merchantLoyalty',
  //       //       templateOptions: {
  //       //         label: 'Merchant Loyalty',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'merchantLoyalty',
  //       //       templateOptions: {
  //       //         label: 'Merchant Prepaid',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'regularInstallmentMidVmjaVmjac',
  //       //       templateOptions: {
  //       //         label: 'Regular Installment MID-VMJA/VMJAC',

  //       //       }
  //       //     }
  //       //   ]
  //       // },
  //       // {
  //       //   fieldGroupClassName: 'display-flex',
  //       //   fieldGroup: [
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'regularInstallmentMidVmj',
  //       //       templateOptions: {
  //       //         label: 'Regular Installment MID-VMJ',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'regularInstallmentMidAmex',
  //       //       templateOptions: {
  //       //         label: 'Regular Installment MID-AMEX (If with VMJ)',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'zeroInstallmentMidVmjaVmjac',
  //       //       templateOptions: {
  //       //         label: 'Zero Installment MID-VMJA/VMJAC',

  //       //       }
  //       //     }
  //       //   ]
  //       // },
  //       // {
  //       //   fieldGroupClassName: 'display-flex',
  //       //   fieldGroup: [
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'zeroInstallmentMidVmj',
  //       //       templateOptions: {
  //       //         label: 'Zero Installment MID-VMJ',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'zeroInstallmentMidAmex',
  //       //       templateOptions: {
  //       //         label: 'Zero Installment MID-AMEX (If with VMJ)',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'regularBnplInstallmentMidVmjaVmjac',
  //       //       templateOptions: {
  //       //         label: 'Regular BNPL Installment MID-VMJA/VMJAC',

  //       //       }
  //       //     }
  //       //   ]
  //       // },
  //       // {
  //       //   fieldGroupClassName: 'display-flex',
  //       //   fieldGroup: [
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'zeroBnplInstallmentMidVmjaVmjac',
  //       //       templateOptions: {
  //       //         label: 'Zero BNPL Installment MID-VMJA/VMJAC',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'debitTID',
  //       //       templateOptions: {
  //       //         label: 'Debit TID',

  //       //       }
  //       //     },
  //       //     {
  //       //       className: 'flex-1',
  //       //       type: 'input',
  //       //       key: 'dccMarkup',
  //       //       templateOptions: {
  //       //         label: 'DCC MARK UP',

  //       //       }
  //       //     }
  //       //   ]
  //       // },
  //       // 
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileNumberOfTerminals',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Number of Terminals (Count)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileBusinessGroup',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Business Group (If applicable)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileMerchantPortalUserEmailAddress',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Merchant Portal User's Email Address',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileMerchantPortalNominatedUsername',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Merchant Portal Nominated Username',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileInternetConnection',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Internet Connection',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileInternetProvider',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Internet Provider',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileReferenceField',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – Reference Field',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'bdoPayMobileRfName',
  //         templateOptions: {
  //           label: 'BDO Pay Mobile – If RF is Customized, pls Include RF Name (Max 10 Characters)',

  //         }
  //       }
  //     ]
  //   }
  // ]

  // mmuFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmjaVmjac',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJA/VMJAC',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmj',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJ',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidAmex',
  //         templateOptions: {
  //           label: 'Credit Straight MID-AMEX (If with VMJ)',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'dinersMID',
  //         templateOptions: {
  //           label: 'DINERS MID',

  //         }
  //       },
  //       // {
  //       //   className: 'flex-1',
  //       //   type: 'input',
  //       //   key: 'cupAcceptorId',
  //       //   templateOptions: {
  //       //     label: 'CUP Acceptor ID',

  //       //   }
  //       // },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmjaOffUs',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJA (off-us)',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmjOffUs',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJ (off-us)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidAmexOffUs',
  //         templateOptions: {
  //           label: 'Credit Straight MID-AMEX (If with VMJ) (off-us)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmjaUsd',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJA (USD)',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidVmjUsd',
  //         templateOptions: {
  //           label: 'Credit Straight MID-VMJ (USD)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightMidAmexUsd',
  //         templateOptions: {
  //           label: 'Credit Straight MID-AMEX (If with VMJ) (USD)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'smEcardMID',
  //         templateOptions: {
  //           label: 'SM E-Card MID',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'smPartnerPlusMID',
  //         templateOptions: {
  //           label: 'SM Partner Plus MID',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'regularInstallmentMidVmjaVmjac',
  //         templateOptions: {
  //           label: 'Regular Installment MID-VMJA/VMJAC',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'regularInstallmentMidVmj',
  //         templateOptions: {
  //           label: 'Regular Installment MID-VMJ',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'regularInstallmentMidAmex',
  //         templateOptions: {
  //           label: 'Regular Installment MID-AMEX (If with VMJ)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'zeroInstallmentMidVmjaVmjac',
  //         templateOptions: {
  //           label: 'Zero Installment MID-VMJA/VMJAC',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'zeroInstallmentMidVmj',
  //         templateOptions: {
  //           label: 'Zero Installment MID-VMJ',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'zeroInstallmentMidAmex',
  //         templateOptions: {
  //           label: 'Zero Installment MID-AMEX (If with VMJ)',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'regularBnplInstallmentMidVmjaVmjac',
  //         templateOptions: {
  //           label: 'Regular BNPL Installment MID-VMJA/VMJAC',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'zeroBnplInstallmentMidVmjaVmjac',
  //         templateOptions: {
  //           label: 'Zero BNPL Installment MID-VMJA/VMJAC',

  //         }
  //       }
  //     ]
  //   },
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'debitTID',
  //         templateOptions: {
  //           label: 'Debit TID',

  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'dateTimeEndorsedPaymentSolutionsOperations',
  //         templateOptions: {
  //           label: 'Date and Time Endorsed to Payment Solutions Operations',

  //         }
  //       },
  //     ]
  //   },
  // ]

  // psServicingFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'emailSubject',
  //         templateOptions: {
  //           label: 'Email Subject',
  //           disabled: true
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'dateTimeAssignedPSProfiling',
  //         templateOptions: {
  //           label: 'Date and Time Assigned to PS Profiling',
  //           disabled: true
  //         }
  //       },
  //       {
  //         className: 'flex-1',
  //         type: 'input',
  //         key: 'creditStraightTID',
  //         templateOptions: {
  //           label: 'Credit Straight TID (new)',
  //           disabled: true
  //         }
  //       },
  //     ]
  //   }
  // ]

  constructor() { }

  getPosFields(userGroup): FormlyFieldConfig[] {
    return this.fields;
  }
}
