import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {


 base='https://api.openweathermap.org/data/2.5/weather?q='
 baseApi='&appid='
 key='22a57a970f6a563ffa5b506b85b619f9'
  constructor(private _http:HttpClient) { }
  obtenerClima(city:string):Observable<any>{
    return this._http.get(`${this.base}${city}${this.baseApi}${this.key}`)
  }
}
