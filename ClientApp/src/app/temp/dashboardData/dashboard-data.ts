import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          Id: 1, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'DRAFT', TAT: '20 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'DRAFT', TAT: '10 hour(s)'
        }
      ];

      MdcsData = [
        {
          Id: 1, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR ENCODING', TAT: '20 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR ENCODER CHECKER REVIEW', TAT: '10 hour(s)'
        }
      ];

    Fields = ['ReferenceNo', 'RequestDate', 'RequestType', 'BusinessName',
    'DBAName', 'RequestedBy', 'Status', 'TAT', 'Operation'];

    MdcsFields = ['ReferenceNo', 'RequestDate', 'RequestType', 'BusinessName',
    'DBAName', 'RequestedBy', 'Status', 'TAT', 'Operation'];

    PosFields = ['TrackingNo', 'RequesterName', 'RequestType', 'DBAName',
    'RequestDate', 'BranchName', 'Location', 'RequestStatus', 'NatureOfRequest', 'Operation'];

    PosData = [
      {
        Id: 1, TrackingNo: '0000001', RequesterName: 'Juan dela Cruz',
        RequestType: 'New Affiliation', DBAName: 'Bench',
        RequestDate: '06/05/2018', BranchName: 'SM Megamall',
        Location: 'Mandaluyong', RequestStatus: 'FOR POS PROCESSING',
        NatureOfRequest: 'New Installation'
      },
      {
        Id: 2, TrackingNo: '0000002', RequesterName: 'Juan dela Cruz',
        RequestType: 'New Affiliation', DBAName: 'Bench',
        RequestDate: '06/05/2018', BranchName: 'SM Calamba',
        Location: 'Calamba', RequestStatus: 'FOR POS PROCESSING',
        NatureOfRequest: 'New Installation'
      }
    ];
}
