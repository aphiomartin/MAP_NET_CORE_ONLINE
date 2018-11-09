import { Injectable } from '@angular/core';
import { AoListData } from "../../temp/aoListData/ao-list-data";

@Injectable()
export class AoListModalService {
  private _aoList: AoListData

  constructor() { 
    this._aoList = new AoListData();
  }


  getAoList() {
    return this._aoList.ElementData;
  }

}
