import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-checklist-configuration',
  templateUrl: './document-checklist-configuration.component.html',
  styleUrls: ['./document-checklist-configuration.component.css']
})
export class DocumentChecklistConfigurationComponent implements OnInit {

  mode: string;

  constructor() { }

  ngOnInit() {
    this.mode = ' ';    
  }

}
