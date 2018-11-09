import { Component, OnInit } from '@angular/core';
import { DocumentCheckListFormRequestLevelService } from './document-check-list-form-request-level.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-check-list-form-request-level',
  templateUrl: './document-check-list-form-request-level.component.html',
  styleUrls: ['./document-check-list-form-request-level.component.css'],
  providers: [DocumentCheckListFormRequestLevelService]
})
export class DocumentCheckListFormRequestLevelComponent implements OnInit {
  documentForm: FormGroup;
  documentList: Object[];

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: DocumentCheckListFormRequestLevelService) { }

  ngOnInit() {
    this.documentForm = new FormGroup({
      documentName: new FormControl('')
    });
    
    this.documentList = this._service.GetDocumentList();
  }

  OnSubmit() {
    console.log(this.documentForm.value);
  }
  Cancel() {
    const parentRoute = this._router.url.split('/(')[0];
    console.log(parentRoute);
    this._router.navigateByUrl(`${parentRoute}`);
  }
}
