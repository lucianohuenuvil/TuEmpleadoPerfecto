import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Company } from 'src/app/company/interfaces/company.interface';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html'
})
export class ListEmployeeComponent implements OnInit {


  public employees?: Employee[] = [];


  constructor( private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router:Router) {}


  ngOnInit ():void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.employeeService.getEmployeeByCompaniesId(id))
        
      ).subscribe( employee => {
        
        if (employee.length === 0) 
          return this.router.navigate(['/'])

        this.employees = employee;

        return
        
      })



  }

}
