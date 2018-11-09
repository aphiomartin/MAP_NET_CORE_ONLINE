import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatStepper } from '@angular/material';
import { AoCheckerService } from './ao-checker.service';

@Component({
  selector: 'app-ao-checker',
  templateUrl: './ao-checker.component.html',
  styleUrls: ['./ao-checker.component.css'],
  providers: [AoCheckerService]
})
export class AoCheckerComponent implements OnInit {
  isLinear = false;
  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  title = 'New Affiliation';
  subTitle = 'FOR AO CHECKER REVIEW';
  mode: string;
  status = 'done';

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute,
    private _router: Router, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // this.mode = this.route.snapshot.params['mode'];
    this.mode = 'update';
    this.isOptional = true;
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  public completed(stepper: MatStepper) {
    this.clearUrl();
    stepper.selected.completed = true;
    stepper.next();
    return true;
  }

  clearUrl() {
    const parentRoute = this._router.url.split('/(')[0];
    if (parentRoute) {
      this._router.navigateByUrl(`${parentRoute}`);
    }
  }

  Submit() {
    const snackBarSub = this._snackBar.open('New Affiliation Request!', 'Submitted', {
      duration: 2000
    });

    snackBarSub.afterDismissed().subscribe(() => {
      this._router.navigateByUrl('/');
    });
  }

}
