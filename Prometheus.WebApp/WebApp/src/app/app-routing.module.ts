import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './forms/accounting/accounting.component';


const routes: Routes = [
  { path: '', component: AccountingComponent },
  {
    path: 'accounting', component: AccountingComponent,
    children: []
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
