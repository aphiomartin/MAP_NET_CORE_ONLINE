import { Component, OnInit, Input } from '@angular/core';
import { MidFormModalService } from './mid-form-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mid-form-modal',
  templateUrl: './mid-form-modal.component.html',
  styleUrls: ['./mid-form-modal.component.css'],
  providers: [MidFormModalService]
})
export class MidFormModalComponent implements OnInit {
  @Input() displayMode = false;
  model: Object;
  form: FormGroup;
  fields: FormlyFieldConfig[];

  constructor(private _route: ActivatedRoute, private _router: Router, private midService: MidFormModalService,
  private _modalRef: MatDialogRef<MidFormModalComponent>) {

  }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields = this.midService.getFormlyFields();
    this.model = {};
  }

  submit() {
    this.midService.create(this.model).subscribe(data => {
      this.model = data;
      console.log('SUCCESS');
    });
  }

  cancel() {
    this._modalRef.close();
  }
}
