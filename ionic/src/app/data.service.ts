import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private randomUserUrl: string = "https://randomuser.me/api/?format=xml";


  constructor(

    public http: HttpClient

  ) { }


  public getRandomUser() {

    return this
      .http
      // .get(this.randomUserUrl, { responseType: "text" });
      .get(this.randomUserUrl);

  }

}