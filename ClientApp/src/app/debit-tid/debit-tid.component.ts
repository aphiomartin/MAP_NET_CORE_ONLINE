import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { DebitTidService } from './debit-tid.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-debit-tid',
  templateUrl: './debit-tid.component.html',
  styleUrls: ['./debit-tid.component.css'],
  providers: [DebitTidService]
})
export class DebitTidComponent implements OnInit {
  @Input() mode: string;
  header: string;
  debitTidContainer: string[];
  debitTid: FormControl;
  index: number;
  constructor(private _service: DebitTidService, private _renderer: Renderer2) { }

  ngOnInit() {
    switch (this.mode) {
      case 'create':
        this.header = 'Create';
        break;
      default:
        this.header = 'Display';
        break;
    }
    this.debitTidContainer = [];
    this.debitTid = new FormControl('');
  }

  addDebitTid(tid, index) {
    if (index != undefined) {
      this.debitTidContainer.splice(index, 1, tid);
      this.debitTid.setValue('');
      this.index = undefined;
    } else {
      this.debitTidContainer.push(tid);
      this.debitTid.setValue('');
    }
  }

  updateDebitTid(tid, index) {
    this.index = index;
    this.debitTid.setValue(tid);

    setTimeout(() => this._renderer.selectRootElement('#debitInput').focus(), 0);
  }
}
