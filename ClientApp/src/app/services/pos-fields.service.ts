import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PosFieldsService {
    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [
                {
                    className: 'flex-1',
                    key: 'dateEndorse',
                    type: 'calendar',
                    templateOptions: {
                        label: "Date and time Endorsed"
                    }
                }, 
                {
                    className: 'flex-1',
                    type: 'input',
                    key: 'aoCode',
                    expressionProperties: {
                        'templateOptions.disabled': 'true'
                    },
                    templateOptions: {
                        label: "AO Code"
                    }
                }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'aoCode',
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                },
                templateOptions: {
                    label: "AO Code"
                }
            },
            {
                key: 'status',
                type: 'input',
                hide: true
            },
            {
                className: 'flex-2',
                type: 'input',
                key: 'statusDesc',
                //ngModelAttrs: {
                //    readOnly: {
                //        bound: 'ng-readonly',
                //        attribute: 'ng-readonly'
                //    }
                //},
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                },
                templateOptions: {
                    label: 'Status',
                    style: "margin-bottom: 5px; margin-top: 0;background-color:text-warning"
                }
            },
            {
                className: 'flex-1',
                type: 'select',
                key: 'natureOfRequest',
                expressionProperties: {

                },
                templateOptions: {
                    label: 'Nature Of Request',
                    labelProp: 'Description',
                    valueProp: 'NatureOfRequest_Id',
                    options: []
                }


            }]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'requestorsName',
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                },
                templateOptions: {
                    label: "Requestor's Name"
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'businessUnit',
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                },
                templateOptions: {
                    label: 'Business Unit'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'requestorsContactNumber',
                expressionProperties: {
                    'templateOptions.disabled': 'true'
                },
                templateOptions: {
                    label: 'Contact Number'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'select',
                key: 'area',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Area',
                    labelProp: 'Description',
                    valueProp: 'Area_Id',
                    options: []
                }

            },
            {
                className: 'flex-1',
                type: 'select',
                key: 'typeOfAccount',
                expressionProperties: {
                    //  'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Type Of Account',
                    labelProp: 'Description',
                    valueProp: 'TypeOfAccount_Id',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getTypeOfAccount().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'segment',
                expressionProperties: {
                    //  'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Segment'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'legalName',
                expressionProperties: {
                    //'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Legal Name'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'Branch.DBAName',
                expressionProperties: {
                    //   'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'DBA Name'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'signage',
                expressionProperties: {
                    //   'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Signage'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'Branch.address1',
                expressionProperties: {
                    //'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Address'
                }
            },
            {
                className: 'flex-1',
                type: 'select',
                key: 'Branch.City_Id',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'City',
                    labelProp: 'Description',
                    valueProp: 'City_Id',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getCities().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            },
            {
                className: 'col-sm-2',
                type: 'checkbox',
                key: 'contactlessMerchant',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Contactless Merchant'
                }
            },
            {
                className: 'col-sm-2',
                type: 'select',
                key: 'Branch.MCC_Id',
                expressionProperties: {
                    //'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'MCC',
                    labelProp: 'Description',
                    valueProp: 'MCC_Id',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getMCC().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'Branch.address2',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Addres 2 '
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'contactPerson',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Contact Person',
                    required: true
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'contactNumber',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Contact Number'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'Branch.address3',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Addres 3 '
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'numberOfTerminals',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Number Of Terminals',
                    pattern: '^\\d+$',
                    pd: 'number'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'noOfPrintedSlips',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'No. Of Printed Slips',
                    pattern: '^\\d+$',
                    pd: 'number'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'select',
                key: 'terminalBrandTypeModel',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Terminal Brand/Type/Model',
                    labelProp: 'Description',
                    valueProp: 'TerminalBrandTypeModel_Id',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getTerminalBrandTypeModel().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            },
            {
                className: 'flex-1',
                type: 'select',
                key: 'reasonForThreeSlipPrinting',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Reason For 3 Slip Printing',
                    labelProp: 'Description',
                    valueProp: 'ReasonForThreeSlipPrinting_Id',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getReasonForThreeSlipPrinting().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'telcoProvider',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Telco Provider'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'select',
                key: 'simType',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Sim Type',
                    valueProp: 'SimType_Id',
                    labelProp: 'Description',
                    options: []
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getSimType().then(function (data) {
                //         $scope.to.options = data;
                //     })
                // }
            },
            {
                className: 'flex-1',
                type: 'calendar',
                key: 'dispatchDateTime',
                //  defaultValue: moment().format('MM/DD/YYYY'),
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Dispatch Date/Time'
                }
            },
            {
                className: 'flex-1',
                type: 'calendar',
                key: 'pullOutDateForTempGPRSTerminals',
                // defaultValue: moment().format('MM/DD/YYYY'),
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Pull Out Date For Temp GPRS Terminals'
                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'reasonForGPRSInstallation',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Reason For GPRS Installation'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'otherProfilingFacility',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Other Profiling Facility'
                }
            },
            {
                className: 'flex-1',
                type: 'calendar',
                key: 'ARISCheckUpdateTime',
                // defaultValue: moment().format('MM/DD/YYYY'),
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'ARIS Check Update Time',
                    placeholder: 'ARIS CheckUp date'

                }
            }
            ]
        },
        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-1',
                type: 'input',
                key: 'ARISDownloadTime',
                //defaultValue: moment().format('MM/DD/YYYY'),
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'ARIS Download Time'
                }
            },
            {
                className: 'flex-1',
                type: 'input',
                key: 'merchantPrepaid',
                expressionProperties: {
                    // 'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Merchant Prepaid'
                }
            }
                , {
                key: 'cardPlan',
                type: 'select',
                className: 'flex-1',
                expressionProperties: {
                    //'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    required: true,
                    label: 'Card Plans',
                    options: [],
                    valueProp: 'CardPlans_Id',
                    labelProp: 'Description'
                }
                // ,
                // controller: function ($scope) {
                //     dropDown.getCardPlans().success(function (data) {
                //         $scope.to.options = data;
                //     });
                // }
            }



            ]
        },

        {
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
                className: 'flex-6',
                type: 'textarea',
                key: 'remarks',
                expressionProperties: {
                    //'templateOptions.disabled': 'model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_REQUIREMENTS').Value + ' || model.requestStatus == ' + requestStatusService.assignRequestStatus('FOR_APPROVAL_WITH_EXCEPTIONS').Value
                },
                templateOptions: {
                    label: 'Remarks',
                    rows: 2
                }
            }]
        }
    ];

    constructor() { }
    getPosFields(): FormlyFieldConfig[] {

        return this.fields;
    }
}
