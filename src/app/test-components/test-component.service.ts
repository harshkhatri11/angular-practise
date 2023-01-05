import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/userTable.model';

@Injectable({
  providedIn: 'root',
})
export class TestComponentService {
  constructor(private http: HttpClient) {}

  public getUserData(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
