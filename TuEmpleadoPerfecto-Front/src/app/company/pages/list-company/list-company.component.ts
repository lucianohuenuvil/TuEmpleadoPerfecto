import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html'
})
export class ListCompanyComponent implements OnInit {

  constructor( private companyService: CompanyService) {}

  public company: Company[] = [];



  ngOnInit ():void {

    try{
      this.companyService.getCompanies().subscribe( company => this.company = company);
    } catch{
      alert("Ha ocurrido un error")
    }



  }

}
