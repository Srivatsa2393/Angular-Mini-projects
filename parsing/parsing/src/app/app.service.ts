import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService{
    constructor(private http: Http) {}

    getUser() {
        var headers = new Headers();
        headers.append('Accept', 'application/xml');

        return this.http.get('https://randomuser.me/api/?format=xml', { headers: headers })
            .map(res => {
                JSON.parse(xml2json(res.text(), ' '))
            })
    }
} 