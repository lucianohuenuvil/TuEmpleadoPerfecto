import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeePageComponent } from '../shared/pages/employee-page/employee-page.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ListEmployeeComponent } from './pages/list-employee-company/list-employee.component';
import { AccessListEmployeeComponent } from './pages/access-list-company/access-list-company.component';




const routes: Routes = [

  {
    path:'',
    component:AccessListEmployeeComponent
  },

  {
    path: 'addEmployee/:id',
    component:AddEmployeeComponent
  },

  {
    path: 'company/:id',
    component:ListEmployeeComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
