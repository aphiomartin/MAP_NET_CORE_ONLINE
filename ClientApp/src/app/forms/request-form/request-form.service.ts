import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestFormService {

  constructor(private http: HttpClient) { }

  Get() {}
  GetById() {}
  Save() {}
  Update() {}
}
