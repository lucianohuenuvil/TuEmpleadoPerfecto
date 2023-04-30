import { Component, OnInit } from '@angular/core';
import { CompanyName, Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-access-list-employee',
  templateUrl: './access-list-company.component.html'
})
export class AccessListEmployeeComponent implements OnInit {


  constructor( private employeeService: EmployeeService) {}


  public companyName: CompanyName[] = [];



  ngOnInit ():void {

    try{
      this.employeeService.getCompaniesName().subscribe( data => this.companyName = data);
    }catch{
      alert("Ha ocurrido un error");
    }

  }


}
