import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  form: FormGroup;
  hospital = [];
  @Output() addBranch = new EventEmitter<any>();
  constructor(private adminHospitalService: HospitalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.adminHospitalService.getHospitalData()
    .subscribe((result) => {
      //(result.data);
      this.hospital.push(result.data);
      //(this.hospital);
    });
    this.form = this.fb.group({
      branchName: new FormControl('', Validators.required),
    });
  }

  branch() {
    this.addBranch.emit(this.form.controls.branchName.value);
  }

}
