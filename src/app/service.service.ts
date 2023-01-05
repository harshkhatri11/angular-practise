import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseURL: string =
    'https://api.openweathermap.org/data/2.5/onecall?appid=f7ad097eb507354c9edd46158f23f0c8&units=metric';
  fetchLocation: string =
    'http://api.openweathermap.org/geo/1.0/reverse?appid=f7ad097eb507354c9edd46158f23f0c8';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get(this.baseURL + '&lat=' + lat + '&lon=' + lon);
  }
  getuserLocation(lat: number, lon: number): Observable<any> {
    return this.http.get(this.fetchLocation + '&lat=' + lat + '&lon=' + lon);
  }

  //Snackbar that opens with success background
  openSuccessSnackBar(msg: string, action: string) {
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['green-snackbar'],
    });
  }
  //Snackbar that opens with failure background
  openFailureSnackBar(msg: string, action: string) {
    this._snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['red-snackbar'],
    });
  }
}
