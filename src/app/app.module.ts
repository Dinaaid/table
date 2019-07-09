import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
   declarations: [
      AppComponent,
      TableEmployeesComponent,
      AddEmployeeComponent,

   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
