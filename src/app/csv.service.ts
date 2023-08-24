import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvService {

  private apiUrl = 'http://localhost:3000/api'  ; // backend API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get<any>(`${this.apiUrl}/data`));
    return this.http.get<any>(`${this.apiUrl}/data`);
}
}