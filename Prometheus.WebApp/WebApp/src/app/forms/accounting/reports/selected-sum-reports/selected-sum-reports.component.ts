import { Component, OnInit } from '@angular/core';

export interface Name {
  name: string;
}

export interface Sum{
  sum:string;
}

const ELEMENT_DATA: Name[] = [
  {name: 'დებეტი'},
  {name: 'კრედიტი'},
  {name: 'დებეტი'},
  {name: 'კრედიტი'},
  {name: 'დებეტი'},
  {name: 'კრედიტი'},
 
];

const SUM_DATA: Sum[] = [
  {sum: '100'},
  {sum: '200'},
  {sum: '300'},
  {sum: '400'},
  {sum: '500'},
  {sum: '600'},

];


@Component({
  selector: 'app-selected-sum-reports',
  templateUrl: './selected-sum-reports.component.html',
  styleUrls: ['./selected-sum-reports.component.css']
})

export class SelectedSumReportsComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['sum'];
  dataSource1 = SUM_DATA;

  constructor() { }

  ngOnInit() {
  }

}
