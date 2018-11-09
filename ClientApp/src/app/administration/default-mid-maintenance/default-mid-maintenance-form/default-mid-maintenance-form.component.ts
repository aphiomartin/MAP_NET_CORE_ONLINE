import { Component, OnInit, Input } from '@angular/core';
import { MidFormService } from '../../../forms/mid-form/mid-form.service';

@Component({
  selector: 'app-default-mid-maintenance-form',
  templateUrl: './default-mid-maintenance-form.component.html',
  styleUrls: ['./default-mid-maintenance-form.component.css'],
  providers: [MidFormService]
})
export class DefaultMidMaintenanceFormComponent implements OnInit {
  @Input() displayMode: boolean = false;

  constructor(private _service: MidFormService) {
                
  }

  ngOnInit() {
    
  }

}
