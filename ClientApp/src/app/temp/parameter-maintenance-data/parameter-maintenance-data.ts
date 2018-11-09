import { IparametermaintenanceData } from "../interface/iparametermaintenance-data";

export class ParameterMaintenanceListData {
    ElementData: IparametermaintenanceData[] = [
        {
            Id: 1,
            Description: 'CURRENCY CODE',
            Code: 'CU'
        },
        {
            Id: 2,
            Description: 'MID TYPE',
            Code: 'MID'
        },
        {
            Id: 3,
            Description: 'ZIP CODE',
            Code: 'ZC'
        },
        {
            Id: 4,
            Description: 'CIVIL STATUS',
            Code: 'CS'
        },
        {
            Id: 5,
            Description: 'RESIDENTIAL OWNERSHIP',
            Code: 'RO'
        },
        {
            Id: 6,
            Description: 'BUSINESS OWNERSHIP',
            Code: 'OW'
        },
        {
            Id: 7,
            Description: 'SUB MONITOR CODE',
            Code: 'SU'
        },
    ];

    Fields: string[] = ['Description','Code'];
}
