import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-facture',
  templateUrl: './cost-facture.component.html',
  styleUrls: ['./cost-facture.component.css']
})
export class CostFactureComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'smthing'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    // document.getElementById("costFacture").style.display = "none";
    (<any>$('#costFacture')).modal('hide');
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  smthing: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', smthing: 'asd' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', smthing: 'asd' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', smthing: 'asd' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', smthing: 'asd' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', smthing: 'asd' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', smthing: 'asd' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', smthing: 'asd' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', smthing: 'asd' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', smthing: 'asd' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', smthing: 'asd' },
];
