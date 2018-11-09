import { Injectable } from '@angular/core';

@Injectable()
export class SignatoriesListService {

  constructor() { }

  getTableFields() {
    return ['Name', 'SigningAuthority', 'Position', 'ApplicableTo', 'Action'];
  }

  get() {
    return [
      { Name: 'Juan dela Cruz Jr.', SigningAuthority: 'Singly', Position: 'Proprietor', ApplicableTo: 'Legal Name'}
    ];
  }
}
