import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { TransformService } from '../transform/transform.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators/map';

@Injectable() 
export class ValueService {
    constructor(public dataService: DataService, public transformService: TransformService, public router: Router) {}

    //public data :any  = [];

    getSystemXmlData() {
        return this.dataService.getSystemXml()
            .pipe(
                map((res) => {
                    return this.transformService.convertToJson(res);
                })
            )
    }


    getEmailXmlData() {
        return this.dataService.getEmailXml()
            .pipe(
                map((res) => {
                    return this.transformService.convertToJson(res);
                })
            )
    }
}