import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

interface ISearchField {
  mqr: string[],
  mdcsEncoder: string[]
};

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {
  searchCriteria: ISearchField;
  criteriaContainer: string[][];
  constructor(private _matDialogRef: MatDialogRef<SearchModalComponent>) { }

  ngOnInit() {
    this.searchCriteria = {
      mqr: ['RT Number', 'Request Type', 'DBA Name', 'Date Requested', 'Request Status', 'Account Officer', 'Aging'],
      mdcsEncoder: ['Business Name', 'DBA Name', 'AO Name']
    };
    this.criteriaContainer = new Array<Array<string>>();
    var rawArray = [];
    this.searchCriteria.mdcsEncoder.forEach((val, index, arr) => {
      if (index != 0 && index % 2 == 0) {
        this.criteriaContainer.push(rawArray);
        rawArray = [];
      }
      
      rawArray.push(val);      
      if (index == (arr.length - 1)) {
        this.criteriaContainer.push(rawArray);
      }
    });
  }
  closeDialog() {
    this._matDialogRef.close();
  }

}
