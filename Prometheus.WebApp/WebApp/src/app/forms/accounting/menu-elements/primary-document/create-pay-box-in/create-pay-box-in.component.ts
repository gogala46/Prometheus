import { Component, OnInit } from '@angular/core';

export interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-pay-box-in',
  templateUrl: './create-pay-box-in.component.html',
  styleUrls: ['./create-pay-box-in.component.css']
})
export class CreatePayBoxInComponent implements OnInit {

  currencys: Currency[] = [
    {value: 'GEL', viewValue: 'GEL'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'GBR', viewValue: 'GBR'},
    {value: 'RUR', viewValue: 'RUR'},
    {value: 'EUR', viewValue: 'EUR'}
  ];

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    // document.getElementById("payboxIN").style.display = "none";
    (<any>$('#payboxIN')).modal('hide');
  }

}
