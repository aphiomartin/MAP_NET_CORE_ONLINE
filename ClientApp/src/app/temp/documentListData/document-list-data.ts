import { IdocumentListData } from "../interface/idocument-list-data";

export class DocumentListData {
    ElementData: IdocumentListData[] = [
        {
            Id: 1,
            Description: 'DTI Business Registration Certificate',
            Code: 'DTI',
        },
        {
            Id: 2,
            Description: 'BDO"s Merchant Information Sheet (MIS)',
            Code: '002',
        },
        {
            Id: 3,
            Description: 'BDO"s Ocular Inspection Form (OIF)',
            Code: '003',
        },
        {
            Id: 4,
            Description: 'BDO"s Merchant Accreditation Evaluation Form (MAEF)',
            Code: '004',
        },
        {
            Id: 5,
            Description: 'Two (2) copies of Merchant Agreement',
            Code: '005',
        },
        {
            Id: 6,
            Description: 'Certificate of Business Registration with BIR (Form 2303)',
            Code: '006',
        },
        {
            Id: 7,
            Description: 'Clear photocopy of any valid ID of owner',
            Code: '007',
        },
        {
            Id: 8,
            Description: 'Special Power of Attorney',
            Code: '008',
        },
        {
            Id: 9,
            Description: 'POS Installation / Reprogramming Form',
            Code: '009',
        },
        {
            Id: 10,
            Description: 'BDO"s Merchant Information Sheet (MIS)',
            Code: '010',
        }
    ]

    Fields: string [] = ['Description','Code','Options']

}
