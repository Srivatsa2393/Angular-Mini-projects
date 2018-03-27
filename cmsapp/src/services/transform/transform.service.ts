import { Injectable } from '@angular/core';
//import xml2js
import * as xml2js from 'xml2js';

@Injectable()
export class TransformService{
    private buildObject = new xml2js.Builder();
    public convertToJson(data:string): any {
        let res;
        // setting the explicitArray option prevents an array structure
        // where every node/element is always wrapped inside an array
        // set it to true, and see for yourself what changes

        xml2js.parseString(data, { explicitArray: false }, (error, result) => {
            if(error){
                throw new Error(error);
            }else{
                res = result;
            }
        });
        return res;
    }
    

    public convertToXml(rootObject: Object) {
        return  this.buildObject.buildObject(rootObject);
    }
}