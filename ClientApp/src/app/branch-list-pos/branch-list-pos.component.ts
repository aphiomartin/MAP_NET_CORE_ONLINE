import { Component, OnInit } from '@angular/core';
import { BranchListPosService } from './branch-list-pos.service';

@Component({
  selector: 'app-branch-list-pos',
  templateUrl: './branch-list-pos.component.html',
  styleUrls: ['./branch-list-pos.component.css'],
  providers: [BranchListPosService]
})
export class BranchListPosComponent implements OnInit {
  displayedColumns: string[];
  dataSource;

  constructor(private _service: BranchListPosService) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
  }

}
