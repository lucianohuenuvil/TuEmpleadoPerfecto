import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './pages/list-employee-company/list-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AccessListEmployeeComponent } from './pages/access-list-company/access-list-company.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    AccessListEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
