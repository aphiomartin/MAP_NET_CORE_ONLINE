import { IRequestDisplay } from '../interface/irequest-display';

export class DashboardData {
    ElementData: IRequestDisplay[] = [
        {
          RequestId: 1, referenceNo: '000000110232018',
          requestDate: '23Oct18', requestType: 'New Affiliation', 
          businessName: 'Bench', dbaName: 'DBA Name Test',
          requestedBy: 'Juan dela Cruz',
          status: 'FOR AO CHECKER REVIEW', tat: '20 hour(s)'
        },
        {
          RequestId: 2, referenceNo: '000000110232018',
          requestDate: '23Oct18', requestType: 'New Affiliation', 
          businessName: 'Bench', dbaName: 'DBA Name Test',
          requestedBy: 'Juan dela Cruz',
          status: 'FOR AO CHECKER REVIEW', tat: '10 hour(s)'
        }
      ];

      MdcsData = [
        {
<<<<<<< HEAD
          Id: 1, referenceNo: '000000110232018',
          requestDate: '23Oct18', requestType: 'New Affiliation', 
          businessName: 'Bench', dbaName: 'DBA Name Test',
          requestedBy: 'Juan dela Cruz',
          status: 'FOR ENCODING', tat: '20 hour(s)'
        },
        {
          Id: 2, referenceNo: '000000110232018',
          requestDate: '23Oct18', requestType: 'New Affiliation', 
          businessName: 'Bench', dbaName: 'DBA Name Test',
          requestedBy: 'Juan dela Cruz',
          status: 'FOR ENCODER CHECKER REVIEW', tat: '10 hour(s)'
=======
          Id: 1, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR EVALUATION', TAT: '20 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR RE-EVALUATION', TAT: '10 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'FH', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'RETURNED BY MAM APPROVER', TAT: '15 hour(s)'
        }

      ];

      MauEncoderData = [
        {
          Id: 1, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR EVALUATION', TAT: '20 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'Bench', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'FOR RE-EVALUATION', TAT: '10 hour(s)'
        },
        {
          Id: 2, ReferenceNo: '000000110232018',
          RequestDate: '23Oct18', RequestType: 'New Affiliation', 
          BusinessName: 'FH', DBAName: 'DBA Name Test',
          RequestedBy: 'Juan dela Cruz',
          Status: 'RETURNED BY MAM APPROVER', TAT: '15 hour(s)'
>>>>>>> 1ad93e63fba4bb02d7237e027c50122e225e97b6
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
