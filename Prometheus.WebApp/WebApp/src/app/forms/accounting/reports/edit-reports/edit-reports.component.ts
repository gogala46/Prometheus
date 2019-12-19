import { Component, OnInit } from '@angular/core';

export interface TypeOf {
  value: string;
  viewValue: string;
}

export interface Type {
  value: string;
  viewValue: string;
}

export interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-reports',
  templateUrl: './edit-reports.component.html',
  styleUrls: ['./edit-reports.component.css']
})
export class EditReportsComponent implements OnInit {

  typeofs: TypeOf[] = [
    { value: 'ფინანსური', viewValue: 'ფინანსური' },
    { value: 'სასაქონლო', viewValue: 'სასაქონლო' },
    { value: 'ორგანიზაციის', viewValue: 'ორგანიზაციის' },
    { value: 'თანამშრომლის', viewValue: 'თანამშრომლის' },
    { value: 'ბანკის', viewValue: 'ბანკის' }
  ];

  types: Type[] = [
    { value: 'აქტ', viewValue: 'აქტ' },
    { value: 'პას', viewValue: 'პას' },
    { value: 'ა/პ გაშლილი', viewValue: 'ა/პ გაშლილი' },
    { value: 'ა/პ შეკუმშული', viewValue: 'ა/პ შეკუმშული' },
    { value: 'ა/პ ბალანსგარეშე', viewValue: 'ა/პ ბალანსგარეშე' }
  ];

  currencys: Currency[] = [
    { value: 'GEL', viewValue: 'GEL' },
    { value: 'USD', viewValue: 'USD' },
    { value: 'GBR', viewValue: 'GBR' },
    { value: 'RUR', viewValue: 'RUR' },
    { value: 'EUR', viewValue: 'EUR' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
