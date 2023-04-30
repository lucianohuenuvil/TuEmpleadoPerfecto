import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompanyName, Employee } from '../interfaces/employee.interface';
import { Company } from 'src/app/company/interfaces/company.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  public BASE_URL:string = 'http://127.0.0.1:8000/app/api/v1/'

  constructor( private http: HttpClient) { }



  getCompaniesName():Observable<CompanyName[]>{
    return this.http.get<CompanyName[]>('http://127.0.0.1:8000/app/api/v1/company_name');
  }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://127.0.0.1:8000/app/api/v1/empleados');
  }


  getCompaniesById( id:number ):Observable<Company[] | undefined>{
    return this.http.get<Company[]>(`http://127.0.0.1:8000/app/api/v1/empresas/${id}`)
  }


  getEmployeeByCompaniesId( id:number ):Observable<Employee[] | []>{
    return this.http.get<Employee[] | []>(`http://127.0.0.1:8000/app/api/v1/company_list_employee/${id}`)
  }


  addEmployeByCompanyId( employee:Employee):Observable<Employee>{
    return this.http.post<Employee>('http://127.0.0.1:8000/app/api/v1/empleados/', employee)
    .pipe(
      catchError((error: any): Observable<Employee> => {
        alert(JSON.stringify(error.error));
        return throwError(error);
      })
    );
    
  }



}
