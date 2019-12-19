import { Component, OnInit } from '@angular/core';
import { StylesComponent } from './styles/styles.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reports-balance',
  templateUrl: './reports-balance.component.html',
  styleUrls: ['./reports-balance.component.css']
})
export class ReportsBalanceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openStyles(): void {
    const dialogRef = this.dialog.open(StylesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('StylesComponent was closed');

    });
  }

  ngOnInit() {
  }

}
