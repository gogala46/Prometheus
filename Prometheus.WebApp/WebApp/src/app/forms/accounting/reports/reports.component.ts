import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenReportsComponent } from './open-reports/open-reports.component';
import { EditReportsComponent } from './edit-reports/edit-reports.component';
import { DeleteReportsComponent } from './delete-reports/delete-reports.component';
import { SelectedSumReportsComponent } from './selected-sum-reports/selected-sum-reports.component';
import { SumTreeColapseReportsComponent } from './sum-tree-colapse-reports/sum-tree-colapse-reports.component';
import { PrintReportsComponent } from './print-reports/print-reports.component';
import { SearchReportsComponent } from './search-reports/search-reports.component';
import { ExportReportsComponent } from './export-reports/export-reports.component';
import { CreateListReportsComponent } from './create-list-reports/create-list-reports.component';
import { ReportsBalanceComponent } from './reports-balance/reports-balance.component';
import { MatTabChangeEvent } from '@angular/material';




@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public localData: any[];
  tabIndex: number;
  tabIndex1: number;
  toggleIndex: number;

  constructor(public dialog: MatDialog) { }

  openReportsAdd(): void {
    const dialogRef = this.dialog.open(OpenReportsComponent, { panelClass: 'accounting-dialogue-style', width: '50vw', maxWidth: 'unset', height: '52vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('OpenReportsComponent was closed');

    });
  }

  openReportsEdit(): void {
    const dialogRef = this.dialog.open(EditReportsComponent, { panelClass: 'accounting-dialogue-style', width: '50vw', maxWidth: 'unset', height: '52vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('EditReportsComponent was closed');

    });
  }

  openReportsDelete(): void {
    const dialogRef = this.dialog.open(DeleteReportsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('DeleteReportsComponent was closed');

    });
  }

  openReportsSelectedSum(): void {
    const dialogRef = this.dialog.open(SelectedSumReportsComponent, { panelClass: 'accounting-dialogue-style', width: '50vw', maxWidth: 'unset', height: '55vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('SelectedSumReportsComponent was closed');

    });
  }

  openReportsSumTreeColapse(): void {
    const dialogRef = this.dialog.open(SumTreeColapseReportsComponent, { panelClass: 'accounting-dialogue-style', width: '25vw', maxWidth: 'unset', height: '36vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('SumTreeColapseReportsComponent was closed');

    });
  }

  openReportsPrint(): void {
    const dialogRef = this.dialog.open(PrintReportsComponent, { panelClass: 'accounting-dialogue-style', width: '20vw', maxWidth: 'unset', height: '15vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('PrintReportsComponent was closed');

    });
  }

  openReportsSearch(): void {
    const dialogRef = this.dialog.open(SearchReportsComponent, { panelClass: 'accounting-dialogue-style', width: '25vw', maxWidth: 'unset', height: '15vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('SearchReportsComponent was closed');

    });
  }

  openReportsExport(): void {
    const dialogRef = this.dialog.open(ExportReportsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ExportReportsComponent was closed');

    });
  }

  openReportsCreateList(): void {
    const dialogRef = this.dialog.open(CreateListReportsComponent, { panelClass: 'accounting-dialogue-style', width: '25vw', maxWidth: 'unset', height: '15vh' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('CreateListReportsComponent was closed');

    });
  }

  openReportsBalance(): void {
    const dialogRef = this.dialog.open(ReportsBalanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ReportsBalanceComponent was closed');

    });
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
  }

  tabChanged1(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex1 = tabChangeEvent.index;
    console.log(this.tabIndex1);
  }

  onValChange(val: number) {
    this.toggleIndex = val;
  }

  ngOnInit() {
    this.tabIndex = 0;
    this.tabIndex1 = 0;
    this.toggleIndex = 1;

    const employees = EMPLOYEE_DATA;
    this.localData = employees;

  }
}

// Sample Employee Data

export const EMPLOYEE_DATA = [
  {
    Age: 55,
    Employees: [
      {
        Age: 43,
        Employees: [],
        HireDate: new Date(2011, 6, 3),
        ID: 3,
        Name: "Michael Burke"
      },
      {
        Age: 29,
        Employees: undefined,
        HireDate: new Date(2009, 6, 19),
        ID: 2,
        Name: "Thomas Anderson"
      },
      {
        Age: 31,
        Employees: [
          {
            Age: 35,
            HireDate: new Date(2015, 9, 17),
            ID: 6,
            Name: "Roland Mendel"
          },
          {
            Age: 44,
            HireDate: new Date(2009, 10, 11),
            ID: 12,
            Name: "Sven Cooper"
          }
        ],
        HireDate: new Date(2014, 8, 18),
        ID: 11,
        Name: "Monica Reyes"
      }],
    HireDate: new Date(2008, 3, 20),
    ID: 1,
    Name: "Johnathan Winchester"
  },
  {
    Age: 42,
    Employees: [
      {
        Age: 44,
        HireDate: new Date(2014, 4, 4),
        ID: 14,
        Name: "Laurence Johnson"
      },
      {
        Age: 25,
        Employees: [
          {
            Age: 39,
            HireDate: new Date(2010, 3, 22),
            ID: 13,
            Name: "Trevor Ashworth"
          }
        ],
        HireDate: new Date(2017, 11, 9),
        ID: 5,
        Name: "Elizabeth Richards"
      }],
    HireDate: new Date(2014, 1, 22),
    ID: 4,
    Name: "Ana Sanders"
  },
  {
    Age: 49,
    Employees: [
      {
        Age: 44,
        Employees: [],
        HireDate: new Date(2014, 4, 4),
        ID: 17,
        Name: "Antonio Moreno"
      }],
    HireDate: new Date(2014, 1, 22),
    ID: 18,
    Name: "Victoria Lincoln"
  },
  {
    Age: 61,
    Employees: [
      {
        Age: 50,
        Employees: [
          {
            Age: 25,
            Employees: [],
            HireDate: new Date(2017, 11, 9),
            ID: 15,
            Name: "Patricia Simpson"
          },
          {
            Age: 39,
            HireDate: new Date(2010, 3, 22),
            ID: 9,
            Name: "Francisco Chang"
          },
          {
            Age: 25,
            HireDate: new Date(2018, 3, 18),
            ID: 16,
            Name: "Peter Lewis"
          }
        ],
        HireDate: new Date(2007, 11, 18),
        ID: 7,
        Name: "Pedro Rodriguez"
      },
      {
        Age: 27,
        HireDate: new Date(2016, 2, 19),
        ID: 8,
        Name: "Casey Harper"
      }],
    HireDate: new Date(2010, 1, 1),
    ID: 10,
    Name: "Yang Wang"
  }
];



