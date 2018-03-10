import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 

export class DataService {
    private url = "../assets/system.xml";
    private measureUrl = "../assets/measure.xml";
    private emailUrl = "../assets/email.xml";

    constructor(public http: HttpClient) {}

    public getSystemXml() {
        return this.http.get(this.url, { responseType: "text" });
    }

    public saveSystemXml() {
        return this.http.post(this.url, { responseType: "text" });
    }

    public getMeasureXml() {
        return this.http.get(this.measureUrl, { responseType: "text" });
    }

    public getEmailXml() {
        return this.http.get(this.emailUrl, { responseType: "text" });
    }
}