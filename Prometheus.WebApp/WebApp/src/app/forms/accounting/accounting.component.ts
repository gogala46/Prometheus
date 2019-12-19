import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportsComponent } from './reports/reports.component';
import { PastimesComponent } from './pastimes/pastimes.component';
import { DocumentsComponent } from './documents/documents.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SheetFormationComponent } from './sheet-formation/sheet-formation.component';
import { HrSalaryComponent } from './hr-salary/hr-salary.component';
import { CurrencyComponent } from './currency/currency.component';
import { OperationsComponent } from './operations/operations.component';
import { CreateNewOrganisationComponent } from './menu-elements/create-new-organisation/create-new-organisation.component';
import { OpenExistingOrganisationComponent } from './menu-elements/open-existing-organisation/open-existing-organisation.component';
import { DeleteExistingOrganisationComponent } from './menu-elements/delete-existing-organisation/delete-existing-organisation.component';
import { ChangePasswordComponent } from './menu-elements/change-password/change-password.component';
import { AllowanceComponent } from './menu-elements/allowance/allowance.component';
import { ArchiveComponent } from './menu-elements/archive/archive.component';
import { ConsolidationComponent } from './menu-elements/consolidation/consolidation.component';
import { NonassessableMinimumComponent } from './menu-elements/nonassessable-minimum/nonassessable-minimum.component';
import { OrganizationsComponent } from './menu-elements/organizations/organizations.component';
import { PeriodsComponent } from './menu-elements/periods/periods.component';
import { PrimaryDocumentComponent } from './menu-elements/primary-document/primary-document.component';
import { ProjectsComponent } from './menu-elements/projects/projects.component';
import { RevenueComponent } from './menu-elements/revenue/revenue.component';
import { SystemSettingsComponent } from './menu-elements/system-settings/system-settings.component';
import { UsersComponent } from './menu-elements/users/users.component';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})



//#region 
export class AccountingComponent {

  routerID: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.routerID = 0;

    // (<any>$('.modal-content')).resizable({
    (<any>$('.draggContent')).resizable({
      // alsoResize: ".modal-dialog",
      alsoResize: ".dragDialogue",
      minHeight: 300,
      minWidth: 300
    });

    // (<any>$('.modal-dialog')).draggable({
    (<any>$('.dragDialogue')).draggable({
      // handle: ".modal-header"
      handle: ".dragHeader"
    });

  }

  reportRouterID() {
    this.routerID = 1;
  }

  pastimesRouterID() {
    this.routerID = 2;
  }

  operationsRouterID() {
    this.routerID = 3;
  }

  documentsRouterID() {
    this.routerID = 4;
  }

  inventoryRouterID() {
    this.routerID = 5;
  }

  sheetformationRouterID() {
    this.routerID = 6;
  }

  hrsalaryRouterID() {
    this.routerID = 7;
  }

  currencyRouterID() {
    this.routerID = 8;
  }



  //#region 
  // openReports(): void {
  //   const dialogRef = this.dialog.open(ReportsComponent, { panelClass: 'accounting-dialogue-style', width: '100vw', maxWidth: 'unset', height: '85vh' });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('ReportsComponent was closed');

  //   });
  // }

  // openPastimes(): void {
  //   const dialogRef = this.dialog.open(PastimesComponent, { panelClass: 'pastimes-dialogue-style', width: '100vw', maxWidth: 'unset', height: '85vh' });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('PastimesComponent was closed');

  //   });
  // }

  // openOperations(): void {
  //   const dialogRef = this.dialog.open(OperationsComponent, { panelClass: 'operations-dialogue-style', width: '100vw', maxWidth: 'unset', height: '85vh' });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('OperationsComponent was closed');

  //   });
  // }


  // openDocuments(): void {
  //   const dialogRef = this.dialog.open(DocumentsComponent, { panelClass: 'documents-dialogue-style', width: '100vw', maxWidth: 'unset', height: '85vh' });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('DocumentsComponent was closed');

  //   });
  // }

  // openInventory(): void {
  //   const dialogRef = this.dialog.open(InventoryComponent, { panelClass: 'inventory-dialogue-style', width: '100vw', maxWidth: 'unset', height: '85vh' });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('InventoryComponent was closed');

  //   });
  // }

  // openSheetFormation(): void {
  //   const dialogRef = this.dialog.open(SheetFormationComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('SheetFormationComponent was closed');

  //   });
  // }

  // openHrSalary(): void {
  //   const dialogRef = this.dialog.open(HrSalaryComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('HrSalaryComponent was closed');

  //   });
  // }

  // openCurrency(): void {
  //   const dialogRef = this.dialog.open(CurrencyComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('CurrencyComponent was closed');

  //   });
  // }

  openCreateNewOrganisation(): void {
    const dialogRef = this.dialog.open(CreateNewOrganisationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('CreateNewOrganisation was closed');

    });
  }

  openExistingOrganisation(): void {
    const dialogRef = this.dialog.open(OpenExistingOrganisationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ExistingOrganisation was closed');

    });
  }

  openDeleteExistingOrganisation(): void {
    const dialogRef = this.dialog.open(DeleteExistingOrganisationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('DeleteExistingOrganisation was closed');

    });
  }

  openChangePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ChangePassword was closed');

    });
  }

  openAllowance(): void {
    const dialogRef = this.dialog.open(AllowanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Allowance was closed');

    });
  }

  openArchive(): void {
    const dialogRef = this.dialog.open(ArchiveComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Archive was closed');

    });
  }

  openConsolidation(): void {
    const dialogRef = this.dialog.open(ConsolidationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Consolidation was closed');

    });
  }

  openNonassessableMinimum(): void {
    const dialogRef = this.dialog.open(NonassessableMinimumComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('NonassessableMinimum was closed');

    });
  }

  openOrganizations(): void {
    const dialogRef = this.dialog.open(OrganizationsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Organizations was closed');

    });
  }

  openPeriod1(): void {
    const dialogRef = this.dialog.open(PeriodsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Period1 was closed');

    });
  }

  openPeriod2(): void {
    const dialogRef = this.dialog.open(PeriodsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Period2 was closed');

    });
  }



  openPrimaryDocument(): void {
    const dialogRef = this.dialog.open(PrimaryDocumentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('PrimaryDocument was closed');

    });
  }

  openProjects(): void {
    const dialogRef = this.dialog.open(ProjectsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Projects was closed');

    });
  }

  openRevenue(): void {
    const dialogRef = this.dialog.open(RevenueComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Revenue was closed');

    });
  }

  openSystemSettings(): void {
    const dialogRef = this.dialog.open(SystemSettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('SystemSettings was closed');

    });
  }

  openUsers(): void {
    const dialogRef = this.dialog.open(UsersComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Users was closed');

    });
  }
  //#endregion





}
//#endregion

