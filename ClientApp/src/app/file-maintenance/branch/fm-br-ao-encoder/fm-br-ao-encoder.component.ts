import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fm-br-ao-encoder',
  templateUrl: './fm-br-ao-encoder.component.html',
  styleUrls: ['./fm-br-ao-encoder.component.css']
})
export class FmBrAoEncoderComponent implements OnInit {
  title: string;
  subTitle: string;
  mode: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.title = 'File Maintenance';
    this.subTitle = 'BRANCH LEVEL - DRAFT';
    this.mode = 'create';
  }
}
