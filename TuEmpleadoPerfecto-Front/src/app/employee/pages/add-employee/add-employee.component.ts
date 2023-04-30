import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../interfaces/employee.interface';
import { CompanyService } from 'src/app/company/services/company.service';
import { HttpResponse } from '@angular/common/http';
import { Company } from 'src/app/company/interfaces/company.interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent  implements OnInit {

 

  constructor( private empliyeeService: EmployeeService, private activatedRoute:ActivatedRoute, private router:Router, private companyService:CompanyService) {}


  public id_company:any = this.activatedRoute.snapshot.params['id'];

  public name_company:string | undefined = '';

  public employeeForm = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(8), Validators.pattern(/^[0-9]*$/)]),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id_empresa: new FormControl(this.id_company)
  });


  
  //Para evitar conflictos con el registro del formulario, generamos la funcion para que los campos sean tratado como "Employee"
  get currentEmployee(): Employee{
    const employee = this.employeeForm.value as Employee;
    return employee;
  }


  //Verificamos que la compañia según el url ingresado exista
  ngOnInit ():void {
    this.companyService.getCompanyById(this.id_company).subscribe(
      (response: HttpResponse<Company>) => {
        if (response.status === 200) {
          this.name_company = response.body?.nombre;
        } 
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );
  }
  



  //Comprobamos que el formulario sea valido antes de realizar la petición POST
  onSubmit():void {
    if (this.employeeForm.valid){
      try{
        this.empliyeeService.addEmployeByCompanyId( this.currentEmployee ).subscribe();
        alert("El Empleado ha ido guardado correctamente");
        this.router.navigate(['/employee']);

      } catch{
        alert("Ha ocurrido un error");
      }
    }
    else alert("Hay un error en el formulario, intente nuevamente")
  }

}
