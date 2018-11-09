import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = '';
@Injectable()
export class HistoryModalService {

  constructor(private _http: HttpClient) { }

  getById() {
    return this._http.get(apiUrl);
  }
}
