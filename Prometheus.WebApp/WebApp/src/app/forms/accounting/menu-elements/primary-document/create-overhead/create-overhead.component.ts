import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-overhead',
  templateUrl: './create-overhead.component.html',
  styleUrls: ['./create-overhead.component.css']
})
export class CreateOverheadComponent implements OnInit {

  deliveryType: string;
  deliverys: string[] = ['შიდა გადაზიდვა', 'მიწოდება ტრანსპორტირებით', 'მიწოდება ტრანსპორტირების გარეშე', 'დისტრიბუცია', 'საქონლის უკან დაბრუნება', 'ქვე-ზედნადები'];
  transportType: string;
  transports: string[] = ['საავტომობილო', 'სარკინიგზო', 'საავიაციო', 'სხვა', 'საავტომობილო-უცხო ქვეყნის', 'გადამზიდავი-საავტომობილო'];
  payType: string;
  pays: string[] = ['მყიდველი', 'მიმღები'];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsInventory = ['name', 'position', 'weight', 'symbol', 'smthing1', 'smthing2', 'smthing3', 'smthing4'];
  displayedColumnsTransfer = ['name', 'position', 'weight', 'symbol', 'smthing1', 'smthing2', 'smthing3', 'smthing4'];
  dataSourceInventory = ELEMENT_DATA;
  dataSourceTransfer = MENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    (<any>$('#createOverhead')).modal('hide');
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  smthing1: string;
  smthing2: string;
  smthing3: string;
  smthing4: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
];

export interface mElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  smthing1: string;
  smthing2: string;
  smthing3: string;
  smthing4: string;
}

const MENT_DATA: mElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', smthing1: 'asd', smthing2: 'sad', smthing3: 'das', smthing4: 'dsa' },
];
