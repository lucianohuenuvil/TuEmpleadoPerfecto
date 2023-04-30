import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html'
})
export class AddCompanyComponent {


  constructor( private companyService: CompanyService, private router:Router) {}


  public companyForm = new FormGroup({
    rut:new FormControl('',[Validators.required, Validators.maxLength(9), Validators.minLength(8), Validators.pattern(/^[0-9]*$/)]) ,
    nombre:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(3)]) ,
    direccion:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(10)]) ,
    telefono:new FormControl('',[Validators.required, Validators.maxLength(11), Validators.minLength(3)])
  });



  get currentCompany(): Company{
    const company = this.companyForm.value as Company;
    return company;
  }



  onSubmit():void {

    if (this.companyForm.valid){
      try{
        this.companyService.addCompany( this.currentCompany ).subscribe()
        alert("La empresa ha ido guardada correctamente");
        this.router.navigate(['/employee']);

      } catch{
        alert("Ha ocurrido un error");
      }
    }
    else alert("Hay un error en el formulario, intente nuevamente");



  }

}
