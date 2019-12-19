import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';




import {
  MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatCheckboxModule,
  MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatNativeDateModule, MatButtonToggleModule, MatStepperModule
} from '@angular/material';

import { SatPopoverModule } from '@ncstate/sat-popover';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';


import { EditReportsComponent } from './forms/accounting/reports/edit-reports/edit-reports.component';
import { CreateListReportsComponent } from './forms/accounting/reports/create-list-reports/create-list-reports.component';
import { OperationsComponent } from './forms/accounting/operations/operations.component';
import { SumTreeColapseReportsComponent } from './forms/accounting/reports/sum-tree-colapse-reports/sum-tree-colapse-reports.component';
import { ReportsBalanceComponent } from './forms/accounting/reports/reports-balance/reports-balance.component';
import { StylesComponent } from './forms/accounting/reports/reports-balance/styles/styles.component';
import { DeleteReportsComponent } from './forms/accounting/reports/delete-reports/delete-reports.component';
import { ExportReportsComponent } from './forms/accounting/reports/export-reports/export-reports.component';
import { ReportsComponent } from './forms/accounting/reports/reports.component';
import { PastimesComponent } from './forms/accounting/pastimes/pastimes.component';
import { DocumentsComponent } from './forms/accounting/documents/documents.component';
import { OpenReportsComponent } from './forms/accounting/reports/open-reports/open-reports.component';
import { PrintReportsComponent } from './forms/accounting/reports/print-reports/print-reports.component';
import { InventoryComponent } from './forms/accounting/inventory/inventory.component';
import { SheetFormationComponent } from './forms/accounting/sheet-formation/sheet-formation.component';
import { SearchReportsComponent } from './forms/accounting/reports/search-reports/search-reports.component';
import { AccountingComponent } from './forms/accounting/accounting.component';
import { SelectedSumReportsComponent } from './forms/accounting/reports/selected-sum-reports/selected-sum-reports.component';
import { HrSalaryComponent } from './forms/accounting/hr-salary/hr-salary.component';
import { CurrencyComponent } from './forms/accounting/currency/currency.component';
import { MenuElementsComponent } from './forms/accounting/menu-elements/menu-elements.component';
import { CreateNewOrganisationComponent } from './forms/accounting/menu-elements/create-new-organisation/create-new-organisation.component';
import { OpenExistingOrganisationComponent } from './forms/accounting/menu-elements/open-existing-organisation/open-existing-organisation.component';
import { DeleteExistingOrganisationComponent } from './forms/accounting/menu-elements/delete-existing-organisation/delete-existing-organisation.component';
import { ChangePasswordComponent } from './forms/accounting/menu-elements/change-password/change-password.component';
import { PeriodsComponent } from './forms/accounting/menu-elements/periods/periods.component';
import { PrimaryDocumentComponent } from './forms/accounting/menu-elements/primary-document/primary-document.component';
import { ConsolidationComponent } from './forms/accounting/menu-elements/consolidation/consolidation.component';
import { OrganizationsComponent } from './forms/accounting/menu-elements/organizations/organizations.component';
import { BanksComponent } from './forms/accounting/menu-elements/banks/banks.component';
import { ProjectsComponent } from './forms/accounting/menu-elements/projects/projects.component';
import { UsersComponent } from './forms/accounting/menu-elements/users/users.component';
import { SystemSettingsComponent } from './forms/accounting/menu-elements/system-settings/system-settings.component';
import { AllowanceComponent } from './forms/accounting/menu-elements/allowance/allowance.component';
import { RevenueComponent } from './forms/accounting/menu-elements/revenue/revenue.component';
import { NonassessableMinimumComponent } from './forms/accounting/menu-elements/nonassessable-minimum/nonassessable-minimum.component';
import { ArchiveComponent } from './forms/accounting/menu-elements/archive/archive.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateGoodsComponent } from './forms/accounting/inventory/goods/create-goods/create-goods.component';
import { EditGoodsComponent } from './forms/accounting/inventory/goods/edit-goods/edit-goods.component';
import { DeleteGoodsComponent } from './forms/accounting/inventory/goods/delete-goods/delete-goods.component';
import { CreateOverheadComponent } from './forms/accounting/menu-elements/primary-document/create-overhead/create-overhead.component';
import { MatRadioModule } from '@angular/material/radio';
import { CreatePayBoxInComponent } from './forms/accounting/menu-elements/primary-document/create-pay-box-in/create-pay-box-in.component';
import { CreatePayBoxOutComponent } from './forms/accounting/menu-elements/primary-document/create-pay-box-out/create-pay-box-out.component';
import { CostFactureComponent } from './forms/accounting/menu-elements/primary-document/cost-facture/cost-facture.component';
import { AccountFactureComponent } from './forms/accounting/menu-elements/primary-document/account-facture/account-facture.component';
import { CurrencyJobComponent } from './forms/accounting/menu-elements/primary-document/currency-job/currency-job.component';
import { AllowanceJobComponent } from './forms/accounting/menu-elements/primary-document/allowance-job/allowance-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    SatPopoverModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatStepperModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatRadioModule,
    MatButtonToggleModule,
    DragDropModule,
    // AllowanceJobComponent,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent,
    AccountingComponent, ReportsComponent, PastimesComponent, DocumentsComponent, InventoryComponent, SheetFormationComponent, HrSalaryComponent, CurrencyComponent, OperationsComponent, OpenReportsComponent, EditReportsComponent,
    DeleteReportsComponent, SelectedSumReportsComponent, SumTreeColapseReportsComponent, PrintReportsComponent, SearchReportsComponent, ExportReportsComponent, CreateListReportsComponent, ReportsBalanceComponent,
    StylesComponent, MenuElementsComponent, CreateNewOrganisationComponent, OpenExistingOrganisationComponent, DeleteExistingOrganisationComponent, ChangePasswordComponent, PeriodsComponent, PrimaryDocumentComponent, ConsolidationComponent,
    OrganizationsComponent, BanksComponent, ProjectsComponent, UsersComponent, SystemSettingsComponent, AllowanceComponent, RevenueComponent, NonassessableMinimumComponent, ArchiveComponent, CreateGoodsComponent, EditGoodsComponent, DeleteGoodsComponent, CreateOverheadComponent, CreatePayBoxInComponent, CreatePayBoxOutComponent, CostFactureComponent, AccountFactureComponent, CurrencyJobComponent, AllowanceJobComponent],
  exports: [],
  entryComponents: [ReportsComponent, PastimesComponent, DocumentsComponent, InventoryComponent, SheetFormationComponent, HrSalaryComponent, CurrencyComponent,
    OperationsComponent, CreateListReportsComponent, DeleteReportsComponent, EditReportsComponent, ExportReportsComponent, OpenReportsComponent, PrintReportsComponent, SearchReportsComponent, SelectedSumReportsComponent, CreateNewOrganisationComponent,
    SumTreeColapseReportsComponent, ReportsBalanceComponent, StylesComponent, AllowanceComponent, ArchiveComponent, BanksComponent, ChangePasswordComponent, ConsolidationComponent,
    DeleteExistingOrganisationComponent, NonassessableMinimumComponent, OpenExistingOrganisationComponent, OrganizationsComponent, PeriodsComponent, PrimaryDocumentComponent, ProjectsComponent,
    RevenueComponent, SystemSettingsComponent, UsersComponent, CreateGoodsComponent, DeleteGoodsComponent, EditGoodsComponent,],
  providers: [],
  bootstrap: [AppComponent]

})



export class AppModule { }
