import { IServiceFeeContractData } from "../interface/iservicefeeratelist-data";


export class ServiceFeeRateListData {
    ElementData: IServiceFeeContractData[] = [
        { Id: 1, Code: 'Code1', Value: 'V23BB', StraightFeeRate: 1.20 },
        { Id: 2, Code: 'Code2', Value: 'V23SS', StraightFeeRate: 2 }
    ]

    Fields: string[] = ['Code', 'Value', 'StraightFeeRate','Options'];
}
