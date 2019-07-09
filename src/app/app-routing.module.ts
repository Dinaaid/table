import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
const routes: Routes = [
  { path: '', component: TableEmployeesComponent},
  { path: 'addEmployee', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
