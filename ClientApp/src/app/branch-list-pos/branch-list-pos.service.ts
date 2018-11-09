import { Injectable } from '@angular/core';

@Injectable()
export class BranchListPosService {

  constructor() { }

  getTableFields() {
    return ['DBAName', 'DBAAddress', 'Action'];
  }

  get() {
    return [
      { Id: 1, DBAName: 'AldoMegamall', DBAAddress: 'Mandaluyong' },
      { Id: 2, DBAName: 'Bench', DBAAddress: 'Mandaluyong' }
    ];
  }
}
