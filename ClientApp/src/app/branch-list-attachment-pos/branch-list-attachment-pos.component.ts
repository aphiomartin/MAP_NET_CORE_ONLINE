import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface BranchDisplayInfo {
  Id: number;
  // BranchName: String;
  DBAAddress: String;
  DBAName: String;


}
const ELEMENT_DATA: BranchDisplayInfo[] = [
  { Id: 1, DBAName: 'AldoMegamall', DBAAddress: 'Mandaluyong' },
  { Id: 2, DBAName: 'Bench', DBAAddress: 'Mandaluyong' }
];

@Component({
  selector: 'app-branch-list-attachment-pos',
  templateUrl: './branch-list-attachment-pos.component.html',
  styleUrls: ['./branch-list-attachment-pos.component.css']
})
export class BranchListAttachmentPOSComponent implements OnInit {

  displayedColumns: string[] = ['DBAName', 'DBAAddress', 'Attachment'];
  dataSource = ELEMENT_DATA;
 
  constructor(
    public route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
  }
  private getItem(Id){
    this.router.navigate([{outlets: {primary:'',branchPOS: 'POS'}}]);
  }

}
