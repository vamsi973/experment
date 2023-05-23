import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(searchTerm: { term: string }): Observable<any> {
    return this.http.post(environment.server + '/api/search', searchTerm)
  }
}
