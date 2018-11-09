import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent  {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  
  fields: FormlyFieldConfig[];
  title :string='';
  subTitle:string='Create';
  mode:string;
  baseExecuteFunction: Function;
 
  constructor(public route: ActivatedRoute,
    public router: Router) {

     }

  // ngOnInit() {
  //   this.initialize();
  // }
/**
 * callSuperInit
 */
public initialize() {
  this.mode = this.route.snapshot.paramMap.get('mode');
    this.selectMode();
    
    
}
  private selectMode(){
    switch (this.mode) {
     
      case 'create':
        this.subTitle="Create";
        this.baseExecuteFunction= this.create;
        break;
      case 'update':
        this.subTitle="Update";
        this.baseExecuteFunction=this.update;
        break;
      default:  
      
            this.subTitle="Mode Not Found";
            this.baseExecuteFunction=this.noAction;
      break;

        
    }

  }

  public create() {
    alert('create');
  }
  public update() {
    alert('updated');
  }

  public cancel(backUrl:string){
    alert('Please override cancel function');
  }

  public noAction(){
    alert('No Action Found, Mode Not Found');
  }
  public getFields() {
    // this.fields=this._branchService.getBranchFields();
  }
  //  public executeBaseFunction(){
  //   this.baseExecuteFunction();
  // }

}
