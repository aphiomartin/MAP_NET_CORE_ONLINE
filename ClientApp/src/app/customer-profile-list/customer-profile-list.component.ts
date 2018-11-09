import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface CustomerProfileDisplayInfo {
  Id: number;
  BusinessName: String;
  Ownership: String;
  SecDtiRegistrationDate: String;
}
const ELEMENT_DATA: CustomerProfileDisplayInfo[] = [
  { Id: 1, BusinessName: 'Bench', Ownership: 'Single Proprietorship', SecDtiRegistrationDate: '09/25/2018' },
  { Id: 2, BusinessName: 'Aldo', Ownership: 'Corporation', SecDtiRegistrationDate: '09/26/2018' }

];

@Component({
  selector: 'app-customer-profile-list',
  templateUrl: './customer-profile-list.component.html',
  styleUrls: ['./customer-profile-list.component.css']
})

export class CustomerProfileListComponent implements OnInit {
  displayedColumns: string[] = ['BusinessName', 'Operation'];
  dataSource = ELEMENT_DATA;
  @Input() displayMode: boolean = false;

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }

  getItem() {
    this.router.navigate([{ outlets: { primary: '', customerProfile: 'custProfile' } }]);
  }



}
