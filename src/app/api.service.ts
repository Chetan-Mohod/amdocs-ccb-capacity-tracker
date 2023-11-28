import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environments'
 
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
};
 
const httpFileOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    Accept: 'multipart/form-data'
  })
  
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 // To fetch all work type/category from backend.
 
 // public currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) { }

  public getAllWorkCategory(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getWorkCategory`)
        .pipe(map(data => {
            return data;
        }));
  }

  public getAllWorkType(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getWorkType`)
        .pipe(map(data => {
            return data;
        }));
  }

  public addWorkType(workData:any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/manager/addWorkType`,workData, httpOptions)
      .pipe(map(data => {
        return data;
      }));
  }

}
