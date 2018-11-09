import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-mqr-user',
  templateUrl: './mqr-user.component.html',
  styleUrls: ['./mqr-user.component.css']
})
export class MqrUserComponent implements OnInit {
  title: string;
  mode: string;
  subTitle: string;
  @Input() displayMode: boolean = true;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _snackbar: MatSnackBar) { }

  ngOnInit() {
    this.title = 'Merchant Affiliation Review Officer';
    this.subTitle = 'Review Requests'
    this.mode = 'mqrUser';
  }

  Submit() {
    this._router.navigateByUrl('/');
  }

  
}
