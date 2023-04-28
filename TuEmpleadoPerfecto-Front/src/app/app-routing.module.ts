import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { EmployeePageComponent } from './shared/pages/employee-page/employee-page.component';

const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
    // loadChildren: () => import('./company/company.module').then( m => m.CompanyModule)
  },

  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyModule)
  },

  {
    path: 'employee',
    // component:EmployeePageComponent
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
