import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-organisation',
  templateUrl: './create-new-organisation.component.html',
  styleUrls: ['./create-new-organisation.component.css']
})


export class CreateNewOrganisationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  


  constructor(private _formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }


}





