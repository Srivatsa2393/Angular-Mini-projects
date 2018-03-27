import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransformService } from '../transform/transform.service';
@Injectable() 
export class DataService {
    private url = "../assets/system.xml";
    private measureUrl = "../assets/measure.xml";
    private emailUrl = "../assets/email.xml";
    constructor(public http: HttpClient,public transformService:TransformService) {}

    public getSystemXml() {

        return this.http.get(this.url, { responseType: "text" });
    }

    public saveSystemXml(modifiedData:object) {
        var existingData = this.http.get(this.url, { responseType: "text" });
        for(var property in modifiedData){
          if(modifiedData[property]!=undefined && modifiedData[property].trim()!=""){
            existingData[property]=modifiedData[property];
          }  
          else{
              alert("Error");
              return false;
          }
        }
        var xmlData = this.transformService.convertToXml(existingData);
       //debugger
       console.log(xmlData);
    }

    public getMeasureXml() {
        return this.http.get(this.measureUrl, { responseType: "text" });
    }

    public getEmailXml() {
        return this.http.get(this.emailUrl, { responseType: "text" });
    }
}