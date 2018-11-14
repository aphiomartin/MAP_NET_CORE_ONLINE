import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../api-constants';
import { Observable } from 'rxjs';

@Injectable()
export class OwnersListService {

  constructor(private _http: HttpClient) { }

  getTableFields() {
    return ['Name', 'PercentOfOwnership', 'TypeOfRelatedParty', 'Remarks', 'Action'];
  }

  get(customerProfileId): Observable<any> {
    return this._http.get(ApiConstants.ownersApi + '/' + customerProfileId);
  }

}
