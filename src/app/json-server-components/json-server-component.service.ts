import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonServerComponentService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    this.http.post<any>('http://localhost:3000/employeeDetails', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getEmployee() {
    this.http.get<any>('http://localhost:3000/employeeDetails').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateEmployee(data: any, id: number) {
    this.http.put<any>('http://localhost:3000/employeeDetails' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmployee(id: number) {
    this.http.delete<any>('http://localhost:3000/employeeDetails' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList', data);
  }

  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
