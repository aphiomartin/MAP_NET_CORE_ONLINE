import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bdo-default-header',
  templateUrl: './bdo-default-header.component.html',
  styleUrls: ['./bdo-default-header.component.css']
})
export class BdoDefaultHeaderComponent implements OnInit {
  @Input() screenName: string;
  systemDate: string;
  systemTime: string;
  constructor() { }

  ngOnInit() {
    this.systemDate = formatDate(new Date(), 'MMMM dd, yyyy', 'en-US');
    this.systemTime = formatDate(new Date(), 'hh:mm:ss a', 'en-US');
    this.getTime();
  }

  
  getTime() {
    const time = interval(1000);
    time.subscribe(x => {
      this.systemTime = formatDate(new Date(), 'hh:mm:ss a', 'en-US');
    });
  }
}
