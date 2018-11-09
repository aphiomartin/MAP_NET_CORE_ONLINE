import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../../app-base/app-base.component';
import { BranchFormService } from './branch-form.service';
import { FormlyFieldConfigService } from '../../services/formly-field-config.service';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent extends AppBaseComponent implements OnInit {
  @Input() displayMode: boolean;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title: string = 'Branch Affiliation';
  subTitle: string;
  mode: string;
  backUrl: string;
  private _branchFormService: BranchFormService;
  constructor(private branchService: BranchFormService, public route: ActivatedRoute,
    public router: Router, private _formService: FormlyFieldConfigService) {
    super(route, router);
    this._branchFormService = this.branchService;
  }

  ngOnInit() {
    this.title = 'Branch';
    this.getFields();
    // this.baseCreateFunction=this.create;
    // this.baseUpdateFunction=this.update;

    this.route.parent.url.subscribe((urlPath) => {
      this.backUrl = urlPath.join().replace(',', '/');
    })

    this.initialize();
    
    // this.displayMode;
    if (this.displayMode == true) {
      this._formService.disabled(this.fields);
    } else {
      this._formService.enabled(this.fields);
    }
  }

  public create() {
    alert('Create branch');
  }

  public update() {
    alert('Update Branch');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  public cancel() {
    this.router.navigateByUrl(this.backUrl);


  }

  public getFields() {
    this.fields = this._branchFormService.getBranchFields();
  }

}
