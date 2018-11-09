import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material';
import { startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-calendar-type',
  templateUrl: './calendar-type.component.html',
  styleUrls: ['./calendar-type.component.css']
})
export class CalendarTypeComponent extends FieldType {
@ViewChild(MatInput) formFieldControl: MatInput;
 //value: Observable<any[]>;
  // filter: Observable<any[]>;
  ngOnInit() {
  	// this.filter = this.formControl.valueChanges
   //    .pipe(
   //      startWith(''),
   //      switchMap(term => this.to.filter(term)),
   //    );
 }

}
