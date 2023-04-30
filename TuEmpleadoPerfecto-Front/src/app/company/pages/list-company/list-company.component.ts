import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html'
})
export class ListCompanyComponent implements OnInit {


  public company: Company[] = [];



  constructor( private companyService: CompanyService) {

  }


  ngOnInit ():void {

    this.companyService.getCompanies()
    .subscribe( company => this.company = company)


  }

}
