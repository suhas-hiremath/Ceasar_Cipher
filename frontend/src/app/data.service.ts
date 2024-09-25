// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5000/save-data'; // Backend endpoint

  constructor(private http: HttpClient) { }

  saveData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}