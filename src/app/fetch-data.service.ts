import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) {}
  getTemp(lat, long) {
    return this.http.get('https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + long + '&key=1142d5df4ab448d8ab0ceea66dcc2fea');
  }
}
