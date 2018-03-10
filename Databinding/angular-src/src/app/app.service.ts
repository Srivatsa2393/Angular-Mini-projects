import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Data } from './data';

@Injectable() 

export class AppService {
    //messages = [];
    data = [];
    constructor(private http: Http) {}

/*     getData() {
        this.http.get('http://localhost:3000/data')
            .subscribe(res => {
                console.log(res);
                this.messages = res.json();
            })
    } */

/*     getData() {
        this.http.get('http://localhost:3000/data')
            .subscribe(res => {
                console.log(res);
                this.data = res.json();
            })
    } */

     getData(): Observable <any> {
        return this.http.get('http://localhost:3000/data')
            .map((res: Response) => {
                console.log(res);
                return res.json();
            })
    }

    postData(): Observable<any> {
        return this.http.post('http://localhost:3000/data')
            .map((res: Response) => {
                console.log(res);
                return res.json();
            })
    }
}