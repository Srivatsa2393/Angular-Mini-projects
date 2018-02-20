import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 

export class DataService {
    private url = "../assets/system.xml";

    constructor(public http: HttpClient) {}

    public getSystemXml() {
        return this.http.get(this.url, { responseType: "text" });
    }
}