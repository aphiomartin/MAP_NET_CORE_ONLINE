import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-maintenance',
  templateUrl: './parameter-maintenance.component.html',
  styleUrls: ['./parameter-maintenance.component.css']
})
export class ParameterMaintenanceComponent implements OnInit {
  title: string;
  subTitle: string;
  mode: string;
  
  constructor() { }

  ngOnInit() {
    this.title = 'Parameter Maintenance';
    this.subTitle = 'Configure Parameters';
    this.mode = ' ';    
  }

}
