import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  fetchDataset(link: any): Observable<any> {
      return this.http.get(link);
  }

  deletePersonData(link: any): Observable<any> {
    return this.http.delete(link);
  }

  postPersonData(data: any): Observable<any> {
    return this.http.post(environment.apiEndpoint, data);
  }

  updatePersonData(link: any, data: any): Observable<any> {
    return this.http.put(link, data);
  }

}
