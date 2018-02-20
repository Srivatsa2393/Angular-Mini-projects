import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class TestService {

  private url = "../assets/system.xml";
 
  //private url = "http://localhost:3000/files?ip=172.17.73.19&path=/download?file=C:/system.xml&user=user3&pass=user3";
  //private url1 = "http://localhost:3000/files?ip=172.17.73.19&path=/download?file=C:/measure.xml&user=user3&pass=user3";

  constructor(private http:HttpClient) {
    
   }

  //this method gets the system xml from vibguard
   getSystemXmlData (): Observable<string> {
    return this.http.get<string>(this.url,{responseType: 'text' as 'json'});
  }

  //this method gets the measure xml from the vibguard
/*   getMeasureXmlData (): Observable<string> {
    return this.http.get<string>(this.url1, {responseType: 'text' as 'json'});
  } */


}

