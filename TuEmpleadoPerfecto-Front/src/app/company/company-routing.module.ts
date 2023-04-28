import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompanyComponent } from './pages/list-company/list-company.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';


const routes: Routes = [

  {
    path: 'listCompany',
    component:ListCompanyComponent
  },


  {
    path: 'addCompany',
    component:AddCompanyComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
