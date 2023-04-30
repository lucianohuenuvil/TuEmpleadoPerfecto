import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html'
})
export class AddCompanyComponent {



  constructor( private companyService: CompanyService) {}



  public companyForm = new FormGroup({
    rut:new FormControl('') ,
    nombre:new FormControl('') ,
    direccion:new FormControl('') ,
    telefono:new FormControl('')
  });



  get currentCompany(): Company{
    const company = this.companyForm.value as Company;
    return company
  }



  onSubmit():void {

    console.log({
      formIsValid: this.companyForm.valid,
      value: this.companyForm.getRawValue()
    })


    this.companyService.addCompany( this.currentCompany )
      .subscribe( company => {

      })




  }

}
