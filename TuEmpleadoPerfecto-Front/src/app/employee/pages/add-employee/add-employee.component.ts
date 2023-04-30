import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../interfaces/employee.interface';
import { switchMap } from 'rxjs';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Company } from 'src/app/company/interfaces/company.interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent  implements OnInit {



  

  constructor( private empliyeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router:Router, private companyService:CompanyService) {}


  public id_company:any = this.activatedRoute.snapshot.params['id'];



  public employeeForm = new FormGroup({
    rut:new FormControl('') ,
    nombre:new FormControl('') ,
    email:new FormControl('') ,
    id_empresa:new FormControl(this.id_company)
  });



  
  ngOnInit ():void {

    this.companyService.getCompanyById(this.id_company).subscribe(
      (response: HttpResponse<Company>) => {
        if (response.status === 200) return 
      },
      (error) => {
        console.log(error)
        this.router.navigate(['/'])
      }
    );
  }



  get currentEmployee(): Employee{
    const employee = this.employeeForm.value as Employee;
    return employee
  }



  onSubmit():void {
    this.empliyeeService.addEmployeByCompanyId( this.currentEmployee )
  }

}
