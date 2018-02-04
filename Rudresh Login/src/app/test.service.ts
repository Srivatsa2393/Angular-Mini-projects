import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class TestService {
  //private url = "https://randomuser.me/api/?format=xml";
  private url = "../assets/system.xml";

  constructor(private http:HttpClient) {
    
   }

   getXmlData (): Observable<string> {
    return this.http.get<string>(this.url,{responseType: 'text' as 'json'});
  }
}

