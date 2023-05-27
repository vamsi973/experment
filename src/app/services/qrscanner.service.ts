import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrscannerService {
  private baseUrl = environment.server;
  constructor(private http: HttpClient) { }
  addQr(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addQr`, data);
  }
  getQrs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/menus`);
  }
}
