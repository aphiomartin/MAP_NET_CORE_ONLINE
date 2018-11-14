import { Component, OnInit, Input, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MidService } from './mid.service';
import { MatDialog } from '@angular/material';
import { MidFormModalComponent } from '../modal/mid-form-modal/mid-form-modal.component';
import { MidModalComponent } from '../modal/mid-modal/mid-modal.component';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css'],
  providers: [MidService]
})
export class MidComponent implements OnInit {
  @ViewChildren('midInput') midInputRef: QueryList<ElementRef>;
  // private midInputRef: ElementRef;
  displayedColumns: string[];
  mode: string;
  dataSource: Object[];
  form: string;
  midIndex: number; // ROW WHERE ADDING OR UPDATE OF MID IS CLICKED
  midContainer: number[]; // CONTAINER OF ALL MIDs
  midInput: FormControl; // FORM CONTROL FOR MID INPUTTED
  tidIndex: number; // ROW WHERE ADDING OR UPDATE OF TID IS CLICKED
  tidContainer: string[]; // CONTAINER OF ALL TIDs
  tidInput: FormControl; // FORM CONTROL FOR TID INPUTTED
  showAction: boolean;

  @Input() action?: boolean;
  @Input() update?: boolean;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MidService,
    private _dialog: MatDialog, private _renderer: Renderer2) { }

  ngOnInit() {
    this.dataSource = this._service.get();
    this.form = this._route.snapshot.params['form'] || this.action;
    this.midContainer = new Array<number>(this.dataSource.length);
    this.tidContainer = new Array<string>(this.dataSource.length);
    this.displayedColumns = this._service.getTableFields(this.update);
    this.midInput = new FormControl('');
    this.tidInput = new FormControl('');

    if (this.action == false) {
      this.form = 'POS';
    }

    this._route.data.subscribe(data => {
      if (data['showAction']) {
        this.showAction = true;
      } else {
        this.showAction = false;
      }
    });
  }

  addMid() {
    this._dialog.open(MidFormModalComponent, {
      width: '80%'
    });
  }

  showMidUpdateButton(index) {
    this.midIndex = index;
    if (this.midContainer[index] != undefined) {
      this.midInput.setValue(this.midContainer[index]);
    } else {
      this.midInput.setValue(undefined);
    }
  }

  saveMid(element, index) {
    const value = element.value;
    if (value.match(/^\d{10}$|^$/)) {
      if (value === "") {
        this.midContainer.splice(index, 1);  
      } else {
        this.midContainer.splice(index, 1, +value);
      }
      this.midIndex = undefined;
    } else {
      console.log('Invalid MIDs Inputted!');
    }
  }

  cancel() {
    this.midIndex = undefined;
    this.tidIndex = undefined;
  }

  showTidUpdateButton(index) {
    this.tidIndex = index;

    if (this.tidContainer[index] != undefined) {
      this.tidInput.setValue(this.tidContainer[index]);
    } else {
      this.tidInput.setValue(undefined);
    }
  }

  saveTid(element, index) {
    const value = element.value;
    if (value.match(/^\d{10}(,\d{10})*$/)) {
      if (value === "") {
        this.tidContainer.splice(index, 1);  
      } else {
        this.tidContainer.splice(index, 1, value);
      }
      this.tidIndex = undefined;
    } else {
      console.log('Invalid TIDs Inputted!');
    }
  }

  deleteItem(id) {
    console.log('DELETE MID');
  }
}
