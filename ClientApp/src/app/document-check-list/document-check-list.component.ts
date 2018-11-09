import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DocumentCheckListService, DocumentDisplayInfo } from './document-check-list.service';

@Component({
  selector: 'app-document-check-list',
  templateUrl: './document-check-list.component.html',
  styleUrls: ['./document-check-list.component.css'],
  providers: [DocumentCheckListService]
})
export class DocumentCheckListComponent implements OnInit {
  displayedColumns: string[];
  mode: string;
  showAdd: boolean;
  dataSource;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: DocumentCheckListService) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.displayedColumns = this._service.GetTableFields();
    this.mode = this._route.snapshot.params['mode'];

    if (this._router.url.indexOf('mdmUser') > -1 || this._router.url.indexOf('aoEncoder') > -1 || this._router.url.indexOf('aoChecker') > -1) {
      this.showAdd = true;
    }
  }

  GetItem(id) {
    this._router.navigateByUrl(`${this._router.url}/(documentCheckList:dcl/create/${id})`);
  }

  AddDocument() {
    this._router.navigateByUrl(`${this._router.url}/(documentCheckList:dcl/create/0)`);
  }
}
