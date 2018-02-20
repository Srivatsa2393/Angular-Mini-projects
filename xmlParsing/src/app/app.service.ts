import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 

export class AppService {
    private randomUrl: string = "https://randomuser.me/api/?format=xml";

    //private randomUrl: string = "https://www.w3schools.com/xml/books.xml";

    constructor(public http: HttpClient) {}

    public getNotes() {
        return this.http.get(this.randomUrl, { responseType: "text" });
    }
}