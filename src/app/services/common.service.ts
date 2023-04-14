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
  getPrices(dat: any): Observable<any> {
    let authHeader = new HttpHeaders();
    // authHeader = authHeader.set('access_token', "fc1ccead23488a23220ffd43afa4157155de4b18");
    authHeader = authHeader.set('access_token', "cd9723145db3ed9b1ee22e57738706b5242453a4");
    authHeader = authHeader.set('grant_type', "pricing");
    // return this.http.post('https://api.aupris.com/oauth/calculations/price', dat, { headers: authHeader })
    return this.http.post('http://localhost:3000/oauth/calculations/price', dat, { headers: authHeader })
  }
}
