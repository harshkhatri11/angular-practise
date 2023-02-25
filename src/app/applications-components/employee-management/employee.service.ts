import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //apiURL = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(environment.JSON_SERVER_URL + "/employees");
  }

  getEmployee(id: any): Observable<Employee> {
    return this.http.get<Employee>(environment.JSON_SERVER_URL + "/employees/" + id);
  }

  updateEmployee(data: any): Observable<Employee> {
    return this.http.patch<Employee>(environment.JSON_SERVER_URL + "/employees/" + data.id, data, {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
    });
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post<any>(environment.JSON_SERVER_URL + "/employees/", data, {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
    });
  }

  deleteEmployee(id: any): Observable<Employee> {
    return this.http.delete<Employee>(environment.JSON_SERVER_URL + "/employees/" + id);
  }
}
