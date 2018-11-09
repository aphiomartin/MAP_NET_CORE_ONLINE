import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PosListContainerService } from './pos-list-container.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-list-container',
  templateUrl: './pos-list-container.component.html',
  styleUrls: ['./pos-list-container.component.css'],
  providers: [PosListContainerService]
})
export class PosListContainerComponent implements OnInit {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: Object;

  constructor(private _service: PosListContainerService, private _router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields = this._service.getFormlyFields();
    this.model = {};
  }

  addPos() {
    this._router.navigate([{ outlets: { listContainer: ["pos", 'create', 0] } }]);
  }
}
