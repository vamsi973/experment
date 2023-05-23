import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=78.4419&lon=17.4370&appid=d03c6d6b49a739113171021f87df3860';
  private dataSubject = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient
  ) { }
  getData() {
    if (this.dataSubject.getValue() === null) {
      this.http.get(this.weatherUrl).subscribe((response: any) => {
        this.dataSubject.next(response);
      });
    }
    return this.dataSubject.asObservable();
  }
  getIP() {
    return this.http.get('https://api.ipify.org/?format=json')
  }
  getPrices(data: any): Observable<any> {
    let authHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
    });
    // let authHeader = new HttpHeaders();
    const encodedData = Object.keys(data).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');

    // authHeader = authHeader.set('access_token', "2005f6190b01a028c5b274dc520e53d3c1892f05"); //aupris
    authHeader = authHeader.set('access_token', "87657b7f2c154907870f6c81361800772bab4be6");//keck
    authHeader = authHeader.set('grant_type', "pricing");
    // return this.http.post('https://api.aupris.com/oauth/calculations/price', dat, { headers: authHeader })
    return this.http.post('http://localhost:3000/oauth/calculations/price', encodedData, { headers: authHeader })
  }
}
