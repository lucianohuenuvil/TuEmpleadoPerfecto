import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './pages/list-employee/list-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
