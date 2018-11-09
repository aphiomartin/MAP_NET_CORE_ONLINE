import { Injectable } from '@angular/core';
//import { AoListData } from "../../temp/aoListData/ao-list-data";
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AoListModalService {
  private _baseUrl: string;


  constructor(private http: HttpClient) {
    // this._baseUrl = baseUrl
  }


  getAoList(): Observable<any> {
    return this.http.get('https://localhost:5001/api/AOMaintenance');
  }

  updateAssignRequest(data) {
    
  }

}
