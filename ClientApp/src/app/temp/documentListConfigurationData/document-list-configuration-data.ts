import { IdocumentListConfigurationData } from "../interface/idocument-list-configuration-data";

export class DocumentListConfigurationData {
    ElementData: IdocumentListConfigurationData[] = [
        {
            Id: 1,
            RequestType: 'NEW_AFFILIATION',
            Ownership: 'SINGLE PROPRIETORSHIP'
        },
        {
            Id: 2,
            RequestType: 'NEW_AFFILIATION',
            Ownership: 'PARTNERSHIP'
        },
        {
            Id: 3,
            RequestType: 'NEW_AFFILIATION',
            Ownership: 'CORPORATION'
        },
        {
            Id: 4,
            RequestType: 'NEW_AFFILIATION',
            Ownership: 'COOPERATIVE'
        },
        {
            Id: 5,
            RequestType: 'NEW_AFFILIATION',
            Ownership: 'OTHERS'
        },
        {
            Id: 6,
            RequestType: 'BRANCH_AFFILIATION',
            Ownership: 'SINGLE PROPRIETORSHIP'
        },
        {
            Id: 7,
            RequestType: 'BRANCH_AFFILIATION',
            Ownership: 'PARTNERSHIP'
        },
        {
            Id: 8,
            RequestType: 'BRANCH_AFFILIATION',
            Ownership: 'CORPORATION'
        },
        {
            Id: 9,
            RequestType: 'BRANCH_AFFILIATION',
            Ownership: 'COOPERATIVE'
        },
        {
            Id: 10,
            RequestType: 'BRANCH_AFFILIATION',
            Ownership: 'OTHERS'
        }
    ]

    Fields: string[] = ['RequestType','Ownership','Options']
}
