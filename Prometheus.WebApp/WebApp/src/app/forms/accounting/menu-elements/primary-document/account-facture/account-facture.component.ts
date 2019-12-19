import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-facture',
  templateUrl: './account-facture.component.html',
  styleUrls: ['./account-facture.component.css']
})
export class AccountFactureComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    // document.getElementById("accountFacture").style.display = "none";
    (<any>$('#accountFacture')).modal('hide');
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', amount: 5 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', amount: 5 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', amount: 5 },

];
