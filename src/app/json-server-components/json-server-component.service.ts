import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JsonServerComponentService {
  constructor(private http: HttpClient) { }

  postEmployee(data: any) {
    this.http.post<any>(environment.JSON_SERVER_URL + '/employeeDetails', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getEmployee() {
    this.http.get<any>(environment.JSON_SERVER_URL + '/employeeDetails').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateEmployee(data: any, id: number) {
    this.http.put<any>(environment.JSON_SERVER_URL + '/employeeDetails' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmployee(id: number) {
    this.http.delete<any>(environment.JSON_SERVER_URL + '/employeeDetails' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postProduct(data: any) {
    return this.http.post<any>(environment.JSON_SERVER_URL + '/productList', data);
  }

  getProduct() {
    return this.http.get<any>(environment.JSON_SERVER_URL + '/productList');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(environment.JSON_SERVER_URL + '/productList/' + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(environment.JSON_SERVER_URL + '/productList/' + id);
  }
}
