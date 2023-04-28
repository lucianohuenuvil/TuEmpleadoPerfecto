import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeePageComponent } from '../shared/pages/employee-page/employee-page.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ListEmployeeComponent } from './pages/list-employee/list-employee.component';




const routes: Routes = [

  {

    path:'',
    component:EmployeePageComponent
    
  },

  {
    path: 'addEmployee',
    component:AddEmployeeComponent
  },


  {
    path: 'listEmployee',
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
