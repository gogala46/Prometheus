import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-job',
  templateUrl: './currency-job.component.html',
  styleUrls: ['./currency-job.component.css']
})
export class CurrencyJobComponent implements OnInit {

  currencys: Currency[] = [
    { value: 'cur1', viewValue: 'GEL' },
    { value: 'cur2', viewValue: 'USD' },
    { value: 'cur3', viewValue: 'GBR' },
    { value: 'cur4', viewValue: 'RUR' },
    { value: 'cur5', viewValue: 'EUR' },
  ];

  countries1: Country1[] = [
    { value: 'c1', viewValue: 'AD' },
    { value: 'c2', viewValue: 'AE' },
    { value: 'c3', viewValue: 'AF' },

  ];

  countries2: Country2[] = [
    { value: 'c1', viewValue: 'AD' },
    { value: 'c2', viewValue: 'AE' },
    { value: 'c3', viewValue: 'AF' },
  ];

  closeModal() {
    // document.getElementById("currencyJob").style.display = "none";
    (<any>$('#currencyJob')).modal('hide');
  }

  constructor() { }

  ngOnInit() {
  }

}


export interface Currency {
  value: string;
  viewValue: string;
}

export interface Country1 {
  value: string;
  viewValue: string;
}

export interface Country2 {
  value: string;
  viewValue: string;
}