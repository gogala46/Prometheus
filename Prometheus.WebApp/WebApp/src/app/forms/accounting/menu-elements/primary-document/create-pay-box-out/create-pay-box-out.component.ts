import { Component, OnInit } from '@angular/core';

export interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-pay-box-out',
  templateUrl: './create-pay-box-out.component.html',
  styleUrls: ['./create-pay-box-out.component.css']
})
export class CreatePayBoxOutComponent implements OnInit {

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

  closeModal() {
    // document.getElementById("payboxOut").style.display = "none";
    (<any>$('#payboxOut')).modal('hide');
    
  }

}
