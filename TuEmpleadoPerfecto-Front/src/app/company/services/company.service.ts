import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor( private http: HttpClient) { }



  getCompanyById( id:number ):Observable<HttpResponse<Company>>{
    return this.http.get<Company>(`http://127.0.0.1:8000/app/api/v1/empresas/${id}`, { observe: 'response' });
  }


  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>('http://127.0.0.1:8000/app/api/v1/empresas');
  }


  addCompany( company:Company ):Observable<Company>{
    return this.http.post<Company>('http://127.0.0.1:8000/app/api/v1/empresas/', company)
    .pipe(
      catchError((error: any): Observable<Company> => {
        alert(JSON.stringify(error.error))
        return throwError(error);
      })
    );

  }


}
