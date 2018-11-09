import { Component, OnInit } from '@angular/core';
import { HistoryModalService } from './history-modal.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.css'],
  providers: [HistoryModalService]
})
export class HistoryModalComponent implements OnInit {

  constructor(private _modalRef: MatDialogRef<HistoryModalComponent>) { }

  ngOnInit() {
  }

}
