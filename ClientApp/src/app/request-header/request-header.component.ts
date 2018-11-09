import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HistoryModalComponent } from '../modal/history-modal/history-modal.component';

@Component({
  selector: 'app-request-header',
  templateUrl: './request-header.component.html',
  styleUrls: ['./request-header.component.css']
})
export class RequestHeaderComponent implements OnInit {
  dateToday = new Date();
  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  openHistory() {
    this._dialog.open(HistoryModalComponent, {
      width: '60%'
    });
  }
}
