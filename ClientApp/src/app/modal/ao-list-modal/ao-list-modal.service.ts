import { Injectable } from '@angular/core';
//import { AoListData } from "../../temp/aoListData/ao-list-data";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AoListModalService {
  private _baseUrl: string;


  constructor(private http: HttpClient) {
    // this._baseUrl = baseUrl
  }


  getAoList(): Observable<any> {
    return this.http.get('https://localhost:5001/api/AOListModal');
  }

  getByUserName(userName) {
    return this.http.get('https://localhost:5001/api/AOListModal/GetByUserName/' + userName);
  }

  setOwnerofRequest(Id,userId) {
    return this.http.put('https://localhost:5001/api/AOListModal/OwnRequest/' + Id + '/' + userId,{});
  }

  updateAssignRequest(data) {

  }

}
