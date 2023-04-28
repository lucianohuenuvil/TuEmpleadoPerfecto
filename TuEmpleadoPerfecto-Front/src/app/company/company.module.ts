import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCompanyComponent } from './pages/list-company/list-company.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    ListCompanyComponent,
    AddCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
